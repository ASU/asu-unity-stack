import ft, { forwardRef as Ei, Component as Ul, createContext as Bl, useRef as Wl, useImperativeHandle as ql, useId as Gl, useContext as wr, createElement as Cs, useState as Hr, useEffect as Er } from "react";
import Es from "react-dom";
function As(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var La = { exports: {} }, an = {};
var ro;
function Yl() {
  if (ro) return an;
  ro = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, h, f) {
    var _, x = {}, D = null, z = null;
    f !== void 0 && (D = "" + f), h.key !== void 0 && (D = "" + h.key), h.ref !== void 0 && (z = h.ref);
    for (_ in h) n.call(h, _) && !s.hasOwnProperty(_) && (x[_] = h[_]);
    if (g && g.defaultProps) for (_ in h = g.defaultProps, h) x[_] === void 0 && (x[_] = h[_]);
    return { $$typeof: t, type: g, key: D, ref: z, props: x, _owner: a.current };
  }
  return an.Fragment = r, an.jsx = d, an.jsxs = d, an;
}
var no;
function Vl() {
  return no || (no = 1, La.exports = Yl()), La.exports;
}
var it = Vl();
function Ai(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ao = { exports: {} }, on = {}, io;
function Xl() {
  if (io) return on;
  io = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, h, f) {
    var _, x = {}, D = null, z = null;
    f !== void 0 && (D = "" + f), h.key !== void 0 && (D = "" + h.key), h.ref !== void 0 && (z = h.ref);
    for (_ in h) n.call(h, _) && !s.hasOwnProperty(_) && (x[_] = h[_]);
    if (g && g.defaultProps) for (_ in h = g.defaultProps, h) x[_] === void 0 && (x[_] = h[_]);
    return { $$typeof: t, type: g, key: D, ref: z, props: x, _owner: a.current };
  }
  return on.Fragment = r, on.jsx = d, on.jsxs = d, on;
}
var oo;
function Kl() {
  return oo || (oo = 1, ao.exports = Xl()), ao.exports;
}
var F = Kl(), so = { exports: {} }, Pa, lo;
function Jl() {
  if (lo) return Pa;
  lo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pa = e, Pa;
}
var Da, uo;
function Zl() {
  if (uo) return Da;
  uo = 1;
  var e = /* @__PURE__ */ Jl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Da = function() {
    function n(d, g, h, f, _, x) {
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
  }, Da;
}
var co;
function Ql() {
  return co || (co = 1, so.exports = /* @__PURE__ */ Zl()()), so.exports;
}
var eu = /* @__PURE__ */ Ql();
const l = /* @__PURE__ */ Ai(eu), tu = () => {
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
}, ru = (e) => (e || []).join(" "), {
  entries: Os,
  setPrototypeOf: fo,
  isFrozen: nu,
  getPrototypeOf: au,
  getOwnPropertyDescriptor: iu
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
const Bn = Tt(Array.prototype.forEach), ou = Tt(Array.prototype.lastIndexOf), po = Tt(Array.prototype.pop), sn = Tt(Array.prototype.push), su = Tt(Array.prototype.splice), aa = Tt(String.prototype.toLowerCase), ja = Tt(String.prototype.toString), Fa = Tt(String.prototype.match), ln = Tt(String.prototype.replace), lu = Tt(String.prototype.indexOf), uu = Tt(String.prototype.trim), jt = Tt(Object.prototype.hasOwnProperty), kt = Tt(RegExp.prototype.test), un = cu(TypeError);
function Tt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return si(e, t, n);
  };
}
function cu(e) {
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
      s !== a && (nu(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function du(e) {
  for (let t = 0; t < e.length; t++)
    jt(e, t) || (e[t] = null);
  return e;
}
function lr(e) {
  const t = na(null);
  for (const [r, n] of Os(e))
    jt(e, r) && (Array.isArray(n) ? t[r] = du(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = lr(n) : t[r] = n);
  return t;
}
function cn(e, t) {
  for (; e !== null; ) {
    const n = iu(e, t);
    if (n) {
      if (n.get)
        return Tt(n.get);
      if (typeof n.value == "function")
        return Tt(n.value);
    }
    e = au(e);
  }
  function r() {
    return null;
  }
  return r;
}
const ho = _t(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ma = _t(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), za = _t(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), fu = _t(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ha = _t(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), pu = _t(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), mo = _t(["#text"]), go = _t(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), $a = _t(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), yo = _t(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Wn = _t(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), hu = $t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), mu = $t(/<%[\w\W]*|[\w\W]*%>/gm), gu = $t(/\$\{[\w\W]*/gm), yu = $t(/^data-[\-\w.\u00B7-\uFFFF]+$/), bu = $t(/^aria-[\-\w]+$/), Rs = $t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), vu = $t(/^(?:\w+script|data):/i), wu = $t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Is = $t(/^html$/i), Su = $t(/^[a-z][.\w]*(-[.\w]+)+$/i);
var bo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: bu,
  ATTR_WHITESPACE: wu,
  CUSTOM_ELEMENT: Su,
  DATA_ATTR: yu,
  DOCTYPE_NAME: Is,
  ERB_EXPR: mu,
  IS_ALLOWED_URI: Rs,
  IS_SCRIPT_OR_DATA: vu,
  MUSTACHE_EXPR: hu,
  TMPLIT_EXPR: gu
});
const dn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, ku = function() {
  return typeof window > "u" ? null : window;
}, xu = function(e, t) {
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
function Ns() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ku();
  const t = (y) => Ns(y);
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
    NamedNodeMap: _ = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: x,
    DOMParser: D,
    trustedTypes: z
  } = e, T = h.prototype, k = cn(T, "cloneNode"), N = cn(T, "remove"), H = cn(T, "nextSibling"), U = cn(T, "childNodes"), G = cn(T, "parentNode");
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
    importNode: Ye
  } = n;
  let ce = vo();
  t.isSupported = typeof Os == "function" && typeof G == "function" && ae && ae.createHTMLDocument !== void 0;
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
  const $ = Ee({}, [...ho, ...Ma, ...za, ...Ha, ...mo]);
  let O = null;
  const M = Ee({}, [...go, ...$a, ...yo, ...Wn]);
  let j = Object.seal(na(null, {
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
  let ie = !0, Q = !0, te = !1, X = !0, ne = !1, de = !0, J = !1, ge = !1, re = !1, le = !1, $e = !1, ue = !1, ot = !0, We = !1;
  const ke = "user-content-";
  let Y = !0, oe = !1, Xe = {}, Le = null;
  const Pe = Ee({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let rr = null;
  const nr = Ee({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const Wt = Ee({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ht = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let pt = nt, qt = !1, Gt = null;
  const mt = Ee({}, [ht, At, nt], ja);
  let St = Ee({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Ee({}, ["annotation-xml"]);
  const De = Ee({}, ["title", "style", "font", "a", "script"]);
  let ut = null;
  const ar = ["application/xhtml+xml", "text/html"], Yt = "text/html";
  let fe = null, st = null;
  const Ot = r.createElement("form"), ir = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Rt = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(st && st === y)) {
      if ((!y || typeof y != "object") && (y = {}), y = lr(y), ut = // eslint-disable-next-line unicorn/prefer-includes
      ar.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Yt : y.PARSER_MEDIA_TYPE, fe = ut === "application/xhtml+xml" ? ja : aa, se = jt(y, "ALLOWED_TAGS") ? Ee({}, y.ALLOWED_TAGS, fe) : $, O = jt(y, "ALLOWED_ATTR") ? Ee({}, y.ALLOWED_ATTR, fe) : M, Gt = jt(y, "ALLOWED_NAMESPACES") ? Ee({}, y.ALLOWED_NAMESPACES, ja) : mt, Bt = jt(y, "ADD_URI_SAFE_ATTR") ? Ee(lr(Wt), y.ADD_URI_SAFE_ATTR, fe) : Wt, rr = jt(y, "ADD_DATA_URI_TAGS") ? Ee(lr(nr), y.ADD_DATA_URI_TAGS, fe) : nr, Le = jt(y, "FORBID_CONTENTS") ? Ee({}, y.FORBID_CONTENTS, fe) : Pe, b = jt(y, "FORBID_TAGS") ? Ee({}, y.FORBID_TAGS, fe) : lr({}), ee = jt(y, "FORBID_ATTR") ? Ee({}, y.FORBID_ATTR, fe) : lr({}), Xe = jt(y, "USE_PROFILES") ? y.USE_PROFILES : !1, ie = y.ALLOW_ARIA_ATTR !== !1, Q = y.ALLOW_DATA_ATTR !== !1, te = y.ALLOW_UNKNOWN_PROTOCOLS || !1, X = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = y.SAFE_FOR_TEMPLATES || !1, de = y.SAFE_FOR_XML !== !1, J = y.WHOLE_DOCUMENT || !1, le = y.RETURN_DOM || !1, $e = y.RETURN_DOM_FRAGMENT || !1, ue = y.RETURN_TRUSTED_TYPE || !1, re = y.FORCE_BODY || !1, ot = y.SANITIZE_DOM !== !1, We = y.SANITIZE_NAMED_PROPS || !1, Y = y.KEEP_CONTENT !== !1, oe = y.IN_PLACE || !1, et = y.ALLOWED_URI_REGEXP || Rs, pt = y.NAMESPACE || nt, St = y.MATHML_TEXT_INTEGRATION_POINTS || St, gt = y.HTML_INTEGRATION_POINTS || gt, j = y.CUSTOM_ELEMENT_HANDLING || {}, y.CUSTOM_ELEMENT_HANDLING && ir(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = y.CUSTOM_ELEMENT_HANDLING.tagNameCheck), y.CUSTOM_ELEMENT_HANDLING && ir(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), $e && (le = !0), Xe && (se = Ee({}, mo), O = na(null), Xe.html === !0 && (Ee(se, ho), Ee(O, go)), Xe.svg === !0 && (Ee(se, Ma), Ee(O, $a), Ee(O, Wn)), Xe.svgFilters === !0 && (Ee(se, za), Ee(O, $a), Ee(O, Wn)), Xe.mathMl === !0 && (Ee(se, Ha), Ee(O, yo), Ee(O, Wn))), jt(y, "ADD_TAGS") || (E.tagCheck = null), jt(y, "ADD_ATTR") || (E.attributeCheck = null), y.ADD_TAGS && (typeof y.ADD_TAGS == "function" ? E.tagCheck = y.ADD_TAGS : (se === $ && (se = lr(se)), Ee(se, y.ADD_TAGS, fe))), y.ADD_ATTR && (typeof y.ADD_ATTR == "function" ? E.attributeCheck = y.ADD_ATTR : (O === M && (O = lr(O)), Ee(O, y.ADD_ATTR, fe))), y.ADD_URI_SAFE_ATTR && Ee(Bt, y.ADD_URI_SAFE_ATTR, fe), y.FORBID_CONTENTS && (Le === Pe && (Le = lr(Le)), Ee(Le, y.FORBID_CONTENTS, fe)), y.ADD_FORBID_CONTENTS && (Le === Pe && (Le = lr(Le)), Ee(Le, y.ADD_FORBID_CONTENTS, fe)), Y && (se["#text"] = !0), J && Ee(se, ["html", "head", "body"]), se.table && (Ee(se, ["tbody"]), delete b.tbody), y.TRUSTED_TYPES_POLICY) {
        if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw un('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw un('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        q = y.TRUSTED_TYPES_POLICY, C = q.createHTML("");
      } else
        q === void 0 && (q = xu(z, a)), q !== null && typeof C == "string" && (C = q.createHTML(""));
      _t && _t(y), st = y;
    }
  }, Vt = Ee({}, [...Ma, ...za, ...fu]), or = Ee({}, [...Ha, ...pu]), Sr = function(y) {
    let v = G(y);
    (!v || !v.tagName) && (v = {
      namespaceURI: pt,
      tagName: "template"
    });
    const A = aa(y.tagName), V = aa(v.tagName);
    return Gt[y.namespaceURI] ? y.namespaceURI === At ? v.namespaceURI === nt ? A === "svg" : v.namespaceURI === ht ? A === "svg" && (V === "annotation-xml" || St[V]) : !!Vt[A] : y.namespaceURI === ht ? v.namespaceURI === nt ? A === "math" : v.namespaceURI === At ? A === "math" && gt[V] : !!or[A] : y.namespaceURI === nt ? v.namespaceURI === At && !gt[V] || v.namespaceURI === ht && !St[V] ? !1 : !or[A] && (De[A] || !Vt[A]) : !!(ut === "application/xhtml+xml" && Gt[y.namespaceURI]) : !1;
  }, at = function(y) {
    sn(t.removed, {
      element: y
    });
    try {
      G(y).removeChild(y);
    } catch {
      N(y);
    }
  }, ct = function(y, v) {
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
    ut === "application/xhtml+xml" && pt === nt && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const V = q ? q.createHTML(y) : y;
    if (pt === nt)
      try {
        v = new D().parseFromString(V, ut);
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
    return y instanceof x && (typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || !(y.attributes instanceof _) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function");
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
    if (Ze(ce.beforeSanitizeElements, y, null), zt(y))
      return at(y), !0;
    const A = fe(y.nodeName);
    if (Ze(ce.uponSanitizeElement, y, {
      tagName: A,
      allowedTags: se
    }), de && y.hasChildNodes() && !Ht(y.firstElementChild) && kt(/<[/\w!]/g, y.innerHTML) && kt(/<[/\w!]/g, y.textContent) || y.nodeType === dn.progressingInstruction || de && y.nodeType === dn.comment && kt(/<[/\w]/g, y.data))
      return at(y), !0;
    if (!(E.tagCheck instanceof Function && E.tagCheck(A)) && (!se[A] || b[A])) {
      if (!b[A] && pr(A) && (j.tagNameCheck instanceof RegExp && kt(j.tagNameCheck, A) || j.tagNameCheck instanceof Function && j.tagNameCheck(A)))
        return !1;
      if (Y && !Le[A]) {
        const V = G(y) || y.parentNode, ye = U(y) || y.childNodes;
        if (ye && V) {
          const ve = ye.length;
          for (let we = ve - 1; we >= 0; --we) {
            const Me = k(ye[we], !0);
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
    }), y.textContent = v)), Ze(ce.afterSanitizeElements, y, null), !1);
  }, It = function(y, v, A) {
    if (ee[v] || ot && (v === "id" || v === "name") && (A in r || A in Ot))
      return !1;
    if (!(Q && !ee[v] && kt(Ce, v)) && !(ie && kt(lt, v)) && !(E.attributeCheck instanceof Function && E.attributeCheck(v, y))) {
      if (!O[v] || ee[v]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(pr(y) && (j.tagNameCheck instanceof RegExp && kt(j.tagNameCheck, y) || j.tagNameCheck instanceof Function && j.tagNameCheck(y)) && (j.attributeNameCheck instanceof RegExp && kt(j.attributeNameCheck, v) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(v, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && kt(j.tagNameCheck, A) || j.tagNameCheck instanceof Function && j.tagNameCheck(A)))
        ) return !1;
      } else if (!Bt[v] && !kt(et, ln(A, Oe, "")) && !((v === "src" || v === "xlink:href" || v === "href") && y !== "script" && lu(A, "data:") === 0 && rr[y]) && !(te && !kt(Fe, ln(A, Oe, ""))) && A)
        return !1;
    }
    return !0;
  }, pr = function(y) {
    return y !== "annotation-xml" && Fa(y, Be);
  }, Xt = function(y) {
    Ze(ce.beforeSanitizeAttributes, y, null);
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
      let Ke = ve === "value" ? yt : uu(yt);
      if (A.attrName = Ve, A.attrValue = Ke, A.keepAttr = !0, A.forceKeepAttr = void 0, Ze(ce.uponSanitizeAttribute, y, A), Ke = A.attrValue, We && (Ve === "id" || Ve === "name") && (ct(ve, y), Ke = ke + Ke), de && kt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ke)) {
        ct(ve, y);
        continue;
      }
      if (Ve === "attributename" && Fa(Ke, "href")) {
        ct(ve, y);
        continue;
      }
      if (A.forceKeepAttr)
        continue;
      if (!A.keepAttr) {
        ct(ve, y);
        continue;
      }
      if (!X && kt(/\/>/i, Ke)) {
        ct(ve, y);
        continue;
      }
      ne && Bn([me, Re, Ne], (Nt) => {
        Ke = ln(Ke, Nt, " ");
      });
      const Ue = fe(y.nodeName);
      if (!It(Ue, Ve, Ke)) {
        ct(ve, y);
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
          ct(ve, y);
        }
    }
    Ze(ce.afterSanitizeAttributes, y, null);
  }, sr = function y(v) {
    let A = null;
    const V = Mt(v);
    for (Ze(ce.beforeSanitizeShadowDOM, v, null); A = V.nextNode(); )
      Ze(ce.uponSanitizeShadowNode, A, null), fr(A), Xt(A), A.content instanceof s && y(A.content);
    Ze(ce.afterSanitizeShadowDOM, v, null);
  };
  return t.sanitize = function(y) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, A = null, V = null, ye = null, ve = null;
    if (qt = !y, qt && (y = "<!-->"), typeof y != "string" && !Ht(y))
      if (typeof y.toString == "function") {
        if (y = y.toString(), typeof y != "string")
          throw un("dirty is not a string, aborting");
      } else
        throw un("toString is not a function");
    if (!t.isSupported)
      return y;
    if (ge || Rt(v), t.removed = [], typeof y == "string" && (oe = !1), oe) {
      if (y.nodeName) {
        const Ve = fe(y.nodeName);
        if (!se[Ve] || b[Ve])
          throw un("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (y instanceof g)
      A = dr("<!---->"), V = A.ownerDocument.importNode(y, !0), V.nodeType === dn.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? A = V : A.appendChild(V);
    else {
      if (!le && !ne && !J && // eslint-disable-next-line unicorn/prefer-includes
      y.indexOf("<") === -1)
        return q && ue ? q.createHTML(y) : y;
      if (A = dr(y), !A)
        return le ? null : ue ? C : "";
    }
    A && re && at(A.firstChild);
    const we = Mt(oe ? y : A);
    for (; ye = we.nextNode(); )
      fr(ye), Xt(ye), ye.content instanceof s && sr(ye.content);
    if (oe)
      return y;
    if (le) {
      if ($e)
        for (ve = Ie.call(A.ownerDocument); A.firstChild; )
          ve.appendChild(A.firstChild);
      else
        ve = A;
      return (O.shadowroot || O.shadowrootmode) && (ve = Ye.call(n, ve, !0)), ve;
    }
    let Me = J ? A.outerHTML : A.innerHTML;
    return J && se["!doctype"] && A.ownerDocument && A.ownerDocument.doctype && A.ownerDocument.doctype.name && kt(Is, A.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + A.ownerDocument.doctype.name + `>
` + Me), ne && Bn([me, Re, Ne], (Ve) => {
      Me = ln(Me, Ve, " ");
    }), q && ue ? q.createHTML(Me) : Me;
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
    typeof v == "function" && sn(ce[y], v);
  }, t.removeHook = function(y, v) {
    if (v !== void 0) {
      const A = ou(ce[y], v);
      return A === -1 ? void 0 : su(ce[y], A, 1)[0];
    }
    return po(ce[y]);
  }, t.removeHooks = function(y) {
    ce[y] = [];
  }, t.removeAllHooks = function() {
    ce = vo();
  }, t;
}
var wo = Ns();
let qn = null;
function _u() {
  return qn || (typeof window < "u" ? qn = wo(window) : qn = wo), qn;
}
const jr = (e) => ({ __html: _u().sanitize(e) });
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
const Tu = ({
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
}, _n = ({ children: e }) => /* @__PURE__ */ F.jsx(F.Fragment, { children: e });
_n.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node,
    l.string
  ])
};
var So = { exports: {} }, ko;
function Cu() {
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
var Eu = Cu();
const er = /* @__PURE__ */ Ai(Eu);
({
  ..._n.propTypes
});
const Ls = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ F.jsx("div", { className: t, ...r, children: /* @__PURE__ */ F.jsx("div", { className: "row", children: e }) });
Ls.propTypes = {
  children: _n.propTypes.children
};
({
  ...Ls.propTypes
});
_n.propTypes.children, l.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
_n.propTypes.children;
const Au = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), Ua = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), Ps = l.shape({
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
function Ou() {
  if (xo) return Dr;
  xo = 1;
  var e = ft;
  function t(i) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, m = 1; m < arguments.length; m++) c += "&args[]=" + encodeURIComponent(arguments[m]);
    return "Minified React error #" + i + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function d(i) {
    return r.call(s, i) ? !0 : r.call(a, i) ? !1 : n.test(i) ? s[i] = !0 : (a[i] = !0, !1);
  }
  function g(i, c, m, S, P, R, B) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = S, this.attributeNamespace = P, this.mustUseProperty = m, this.propertyName = i, this.type = c, this.sanitizeURL = R, this.removeEmptyString = B;
  }
  var h = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    h[i] = new g(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var c = i[0];
    h[c] = new g(c, 1, !1, i[1], null, !1, !1);
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
  function _(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var c = i.replace(
      f,
      _
    );
    h[c] = new g(c, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var c = i.replace(f, _);
    h[c] = new g(c, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var c = i.replace(f, _);
    h[c] = new g(c, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    h[i] = new g(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), h.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    h[i] = new g(i, 1, !1, i.toLowerCase(), null, !0, !0);
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
  Object.keys(x).forEach(function(i) {
    D.forEach(function(c) {
      c = c + i.charAt(0).toUpperCase() + i.substring(1), x[c] = x[i];
    });
  });
  var z = /["'&<>]/;
  function T(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var c = z.exec(i);
    if (c) {
      var m = "", S, P = 0;
      for (S = c.index; S < i.length; S++) {
        switch (i.charCodeAt(S)) {
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
        P !== S && (m += i.substring(P, S)), P = S + 1, m += c;
      }
      i = P !== S ? m + i.substring(P, S) : m;
    }
    return i;
  }
  var k = /([A-Z])/g, N = /^ms-/, H = Array.isArray;
  function U(i, c) {
    return { insertionMode: i, selectedValue: c };
  }
  function G(i, c, m) {
    switch (c) {
      case "select":
        return U(1, m.value != null ? m.value : m.defaultValue);
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
  var q = /* @__PURE__ */ new Map();
  function C(i, c, m) {
    if (typeof m != "object") throw Error(t(62));
    c = !0;
    for (var S in m) if (r.call(m, S)) {
      var P = m[S];
      if (P != null && typeof P != "boolean" && P !== "") {
        if (S.indexOf("--") === 0) {
          var R = T(S);
          P = T(("" + P).trim());
        } else {
          R = S;
          var B = q.get(R);
          B !== void 0 || (B = T(R.replace(k, "-$1").toLowerCase().replace(N, "-ms-")), q.set(R, B)), R = B, P = typeof P == "number" ? P === 0 || r.call(x, S) ? "" + P : P + "px" : T(("" + P).trim());
        }
        c ? (c = !1, i.push(' style="', R, ":", P)) : i.push(";", R, ":", P);
      }
    }
    c || i.push('"');
  }
  function ae(i, c, m, S) {
    switch (m) {
      case "style":
        C(i, c, S);
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
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (m = c.attributeName, c.type) {
          case 3:
            S && i.push(" ", m, '=""');
            break;
          case 4:
            S === !0 ? i.push(" ", m, '=""') : S !== !1 && i.push(" ", m, '="', T(S), '"');
            break;
          case 5:
            isNaN(S) || i.push(" ", m, '="', T(S), '"');
            break;
          case 6:
            !isNaN(S) && 1 <= S && i.push(" ", m, '="', T(S), '"');
            break;
          default:
            c.sanitizeURL && (S = "" + S), i.push(" ", m, '="', T(S), '"');
        }
      } else if (d(m)) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = m.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        i.push(" ", m, '="', T(S), '"');
      }
    }
  }
  function Se(i, c, m) {
    if (c != null) {
      if (m != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && i.push("" + c);
    }
  }
  function Ie(i) {
    var c = "";
    return e.Children.forEach(i, function(m) {
      m != null && (c += m);
    }), c;
  }
  function je(i, c, m, S) {
    i.push(me(m));
    var P = m = null, R;
    for (R in c) if (r.call(c, R)) {
      var B = c[R];
      if (B != null) switch (R) {
        case "children":
          m = B;
          break;
        case "dangerouslySetInnerHTML":
          P = B;
          break;
        default:
          ae(i, S, R, B);
      }
    }
    return i.push(">"), Se(i, P, m), typeof m == "string" ? (i.push(T(m)), null) : m;
  }
  var Ye = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ce = /* @__PURE__ */ new Map();
  function me(i) {
    var c = ce.get(i);
    if (c === void 0) {
      if (!Ye.test(i)) throw Error(t(65, i));
      c = "<" + i, ce.set(i, c);
    }
    return c;
  }
  function Re(i, c, m, S, P) {
    switch (c) {
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
              ae(i, S, xe, Z);
          }
        }
        return i.push(">"), Se(i, B, R), R;
      case "option":
        B = P.selectedValue, i.push(me("option"));
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
              ae(i, S, R, tt);
          }
        }
        if (B != null) if (m = pe !== null ? "" + pe : Ie(Z), H(B)) {
          for (S = 0; S < B.length; S++)
            if ("" + B[S] === m) {
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
              S,
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
            ae(i, S, B, be);
        }
        return xe !== null ? ae(i, S, "checked", xe) : pe !== null && ae(i, S, "checked", pe), R !== null ? ae(i, S, "value", R) : Z !== null && ae(i, S, "value", Z), i.push("/>"), null;
      case "menuitem":
        i.push(me("menuitem"));
        for (var Kt in m) if (r.call(m, Kt) && (R = m[Kt], R != null)) switch (Kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ae(i, S, Kt, R);
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
            ae(i, S, tt, B);
        }
        return i.push(">"), R;
      case "listing":
      case "pre":
        i.push(me(c)), B = R = null;
        for (pe in m) if (r.call(m, pe) && (Z = m[pe], Z != null)) switch (pe) {
          case "children":
            R = Z;
            break;
          case "dangerouslySetInnerHTML":
            B = Z;
            break;
          default:
            ae(i, S, pe, Z);
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
        i.push(me(c));
        for (var Jt in m) if (r.call(m, Jt) && (R = m[Jt], R != null)) switch (Jt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            ae(i, S, Jt, R);
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
          c,
          S
        );
      case "html":
        return P.insertionMode === 0 && i.push("<!DOCTYPE html>"), je(i, m, c, S);
      default:
        if (c.indexOf("-") === -1 && typeof m.is != "string") return je(i, m, c, S);
        i.push(me(c)), B = R = null;
        for (be in m) if (r.call(m, be) && (Z = m[be], Z != null)) switch (be) {
          case "children":
            R = Z;
            break;
          case "dangerouslySetInnerHTML":
            B = Z;
            break;
          case "style":
            C(i, S, Z);
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
  function Ne(i, c, m) {
    if (i.push('<!--$?--><template id="'), m === null) throw Error(t(395));
    return i.push(m), i.push('"></template>');
  }
  function Ce(i, c, m, S) {
    switch (m.insertionMode) {
      case 0:
      case 1:
        return i.push('<div hidden id="'), i.push(c.segmentPrefix), c = S.toString(16), i.push(c), i.push('">');
      case 2:
        return i.push('<svg aria-hidden="true" style="display:none" id="'), i.push(c.segmentPrefix), c = S.toString(16), i.push(c), i.push('">');
      case 3:
        return i.push('<math aria-hidden="true" style="display:none" id="'), i.push(c.segmentPrefix), c = S.toString(16), i.push(c), i.push('">');
      case 4:
        return i.push('<table hidden id="'), i.push(c.segmentPrefix), c = S.toString(16), i.push(c), i.push('">');
      case 5:
        return i.push('<table hidden><tbody id="'), i.push(c.segmentPrefix), c = S.toString(16), i.push(c), i.push('">');
      case 6:
        return i.push('<table hidden><tr id="'), i.push(c.segmentPrefix), c = S.toString(16), i.push(c), i.push('">');
      case 7:
        return i.push('<table hidden><colgroup id="'), i.push(c.segmentPrefix), c = S.toString(16), i.push(c), i.push('">');
      default:
        throw Error(t(397));
    }
  }
  function lt(i, c) {
    switch (c.insertionMode) {
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
    return JSON.stringify(i).replace(Fe, function(c) {
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
  function Be(i, c) {
    return c = c === void 0 ? "" : c, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: c + "P:", segmentPrefix: c + "S:", boundaryPrefix: c + "B:", idPrefix: c, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: i };
  }
  function et(i, c, m, S) {
    return m.generateStaticMarkup ? (i.push(T(c)), !1) : (c === "" ? i = S : (S && i.push("<!-- -->"), i.push(T(c)), i = !0), i);
  }
  var se = Object.assign, $ = Symbol.for("react.element"), O = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), E = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), de = Symbol.for("react.scope"), J = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), re = Symbol.for("react.default_value"), le = Symbol.iterator;
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
      case j:
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
        var c = i.render;
        return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case X:
        return c = i.displayName || null, c !== null ? c : $e(i.type) || "Memo";
      case ne:
        c = i._payload, i = i._init;
        try {
          return $e(i(c));
        } catch {
        }
    }
    return null;
  }
  var ue = {};
  function ot(i, c) {
    if (i = i.contextTypes, !i) return ue;
    var m = {}, S;
    for (S in i) m[S] = c[S];
    return m;
  }
  var We = null;
  function ke(i, c) {
    if (i !== c) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var m = c.parent;
      if (i === null) {
        if (m !== null) throw Error(t(401));
      } else {
        if (m === null) throw Error(t(401));
        ke(i, m);
      }
      c.context._currentValue2 = c.value;
    }
  }
  function Y(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && Y(i);
  }
  function oe(i) {
    var c = i.parent;
    c !== null && oe(c), i.context._currentValue2 = i.value;
  }
  function Xe(i, c) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === c.depth ? ke(i, c) : Xe(i, c);
  }
  function Le(i, c) {
    var m = c.parent;
    if (m === null) throw Error(t(402));
    i.depth === m.depth ? ke(i, m) : Le(i, m), c.context._currentValue2 = c.value;
  }
  function Pe(i) {
    var c = We;
    c !== i && (c === null ? oe(i) : i === null ? Y(c) : c.depth === i.depth ? ke(c, i) : c.depth > i.depth ? Xe(c, i) : Le(c, i), We = i);
  }
  var rr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, c) {
    i = i._reactInternals, i.queue !== null && i.queue.push(c);
  }, enqueueReplaceState: function(i, c) {
    i = i._reactInternals, i.replace = !0, i.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function nr(i, c, m, S) {
    var P = i.state !== void 0 ? i.state : null;
    i.updater = rr, i.props = m, i.state = P;
    var R = { queue: [], replace: !1 };
    i._reactInternals = R;
    var B = c.contextType;
    if (i.context = typeof B == "object" && B !== null ? B._currentValue2 : S, B = c.getDerivedStateFromProps, typeof B == "function" && (B = B(m, P), P = B == null ? P : se({}, P, B), i.state = P), typeof c.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && rr.enqueueReplaceState(i, i.state, null), R.queue !== null && 0 < R.queue.length) if (c = R.queue, B = R.replace, R.queue = null, R.replace = !1, B && c.length === 1) i.state = c[0];
    else {
      for (R = B ? c[0] : i.state, P = !0, B = B ? 1 : 0; B < c.length; B++) {
        var Z = c[B];
        Z = typeof Z == "function" ? Z.call(i, R, m, S) : Z, Z != null && (P ? (P = !1, R = se({}, R, Z)) : se(R, Z));
      }
      i.state = R;
    }
    else R.queue = null;
  }
  var Bt = { id: 1, overflow: "" };
  function Wt(i, c, m) {
    var S = i.id;
    i = i.overflow;
    var P = 32 - ht(S) - 1;
    S &= ~(1 << P), m += 1;
    var R = 32 - ht(c) + P;
    if (30 < R) {
      var B = P - P % 5;
      return R = (S & (1 << B) - 1).toString(32), S >>= B, P -= B, { id: 1 << 32 - ht(c) + P | m << P | S, overflow: R + i };
    }
    return { id: 1 << R | m << P | S, overflow: i };
  }
  var ht = Math.clz32 ? Math.clz32 : pt, At = Math.log, nt = Math.LN2;
  function pt(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (At(i) / nt | 0) | 0;
  }
  function qt(i, c) {
    return i === c && (i !== 0 || 1 / i === 1 / c) || i !== i && c !== c;
  }
  var Gt = typeof Object.is == "function" ? Object.is : qt, mt = null, St = null, gt = null, De = null, ut = !1, ar = !1, Yt = 0, fe = null, st = 0;
  function Ot() {
    if (mt === null) throw Error(t(321));
    return mt;
  }
  function ir() {
    if (0 < st) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Rt() {
    return De === null ? gt === null ? (ut = !1, gt = De = ir()) : (ut = !0, De = gt) : De.next === null ? (ut = !1, De = De.next = ir()) : (ut = !0, De = De.next), De;
  }
  function Vt() {
    St = mt = null, ar = !1, gt = null, st = 0, De = fe = null;
  }
  function or(i, c) {
    return typeof c == "function" ? c(i) : c;
  }
  function Sr(i, c, m) {
    if (mt = Ot(), De = Rt(), ut) {
      var S = De.queue;
      if (c = S.dispatch, fe !== null && (m = fe.get(S), m !== void 0)) {
        fe.delete(S), S = De.memoizedState;
        do
          S = i(S, m.action), m = m.next;
        while (m !== null);
        return De.memoizedState = S, [S, c];
      }
      return [De.memoizedState, c];
    }
    return i = i === or ? typeof c == "function" ? c() : c : m !== void 0 ? m(c) : c, De.memoizedState = i, i = De.queue = { last: null, dispatch: null }, i = i.dispatch = ct.bind(null, mt, i), [De.memoizedState, i];
  }
  function at(i, c) {
    if (mt = Ot(), De = Rt(), c = c === void 0 ? null : c, De !== null) {
      var m = De.memoizedState;
      if (m !== null && c !== null) {
        var S = m[1];
        e: if (S === null) S = !1;
        else {
          for (var P = 0; P < S.length && P < c.length; P++) if (!Gt(c[P], S[P])) {
            S = !1;
            break e;
          }
          S = !0;
        }
        if (S) return m[0];
      }
    }
    return i = i(), De.memoizedState = [i, c], i;
  }
  function ct(i, c, m) {
    if (25 <= st) throw Error(t(301));
    if (i === mt) if (ar = !0, i = { action: m, next: null }, fe === null && (fe = /* @__PURE__ */ new Map()), m = fe.get(c), m === void 0) fe.set(c, i);
    else {
      for (c = m; c.next !== null; ) c = c.next;
      c.next = i;
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
    var c = De.memoizedState;
    return c === null ? (i = { current: i }, De.memoizedState = i) : c;
  }, useState: function(i) {
    return Sr(or, i);
  }, useInsertionEffect: Mt, useLayoutEffect: function() {
  }, useCallback: function(i, c) {
    return at(function() {
      return i;
    }, c);
  }, useImperativeHandle: Mt, useEffect: Mt, useDebugValue: Mt, useDeferredValue: function(i) {
    return Ot(), i;
  }, useTransition: function() {
    return Ot(), [
      !1,
      dr
    ];
  }, useId: function() {
    var i = St.treeContext, c = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - ht(i) - 1)).toString(32) + c;
    var m = Ht;
    if (m === null) throw Error(t(404));
    return c = Yt++, i = ":" + m.idPrefix + "R" + i, 0 < c && (i += "H" + c.toString(32)), i + ":";
  }, useMutableSource: function(i, c) {
    return Ot(), c(i._source);
  }, useSyncExternalStore: function(i, c, m) {
    if (m === void 0) throw Error(t(407));
    return m();
  } }, Ht = null, Ze = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function fr(i) {
    return console.error(i), null;
  }
  function It() {
  }
  function pr(i, c, m, S, P, R, B, Z, pe) {
    var be = [], xe = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: S, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: P === void 0 ? fr : P, onAllReady: It, onShellReady: B === void 0 ? It : B, onShellError: It, onFatalError: It }, m = sr(c, 0, null, m, !1, !1), m.parentFlushed = !0, i = Xt(c, i, null, m, xe, ue, null, Bt), be.push(i), c;
  }
  function Xt(i, c, m, S, P, R, B, Z) {
    i.allPendingTasks++, m === null ? i.pendingRootTasks++ : m.pendingTasks++;
    var pe = { node: c, ping: function() {
      var be = i.pingedTasks;
      be.push(pe), be.length === 1 && Or(i);
    }, blockedBoundary: m, blockedSegment: S, abortSet: P, legacyContext: R, context: B, treeContext: Z };
    return P.add(pe), pe;
  }
  function sr(i, c, m, S, P, R) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: S, boundary: m, lastPushedText: P, textEmbedded: R };
  }
  function y(i, c) {
    if (i = i.onError(c), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function v(i, c) {
    var m = i.onShellError;
    m(c), m = i.onFatalError, m(c), i.destination !== null ? (i.status = 2, i.destination.destroy(c)) : (i.status = 1, i.fatalError = c);
  }
  function A(i, c, m, S, P) {
    for (mt = {}, St = c, Yt = 0, i = m(S, P); ar; ) ar = !1, Yt = 0, st += 1, De = null, i = m(S, P);
    return Vt(), i;
  }
  function V(i, c, m, S) {
    var P = m.render(), R = S.childContextTypes;
    if (R != null) {
      var B = c.legacyContext;
      if (typeof m.getChildContext != "function") S = B;
      else {
        m = m.getChildContext();
        for (var Z in m) if (!(Z in R)) throw Error(t(108, $e(S) || "Unknown", Z));
        S = se({}, B, m);
      }
      c.legacyContext = S, we(i, c, P), c.legacyContext = B;
    } else we(i, c, P);
  }
  function ye(i, c) {
    if (i && i.defaultProps) {
      c = se({}, c), i = i.defaultProps;
      for (var m in i) c[m] === void 0 && (c[m] = i[m]);
      return c;
    }
    return c;
  }
  function ve(i, c, m, S, P) {
    if (typeof m == "function") if (m.prototype && m.prototype.isReactComponent) {
      P = ot(m, c.legacyContext);
      var R = m.contextType;
      R = new m(S, typeof R == "object" && R !== null ? R._currentValue2 : P), nr(R, m, S, P), V(i, c, R, m);
    } else {
      R = ot(m, c.legacyContext), P = A(i, c, m, S, R);
      var B = Yt !== 0;
      if (typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0) nr(P, m, S, R), V(i, c, P, m);
      else if (B) {
        S = c.treeContext, c.treeContext = Wt(S, 1, 0);
        try {
          we(i, c, P);
        } finally {
          c.treeContext = S;
        }
      } else we(i, c, P);
    }
    else if (typeof m == "string") {
      switch (P = c.blockedSegment, R = Re(P.chunks, m, S, i.responseState, P.formatContext), P.lastPushedText = !1, B = P.formatContext, P.formatContext = G(B, m, S), Ve(i, c, R), P.formatContext = B, m) {
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
        case ge:
        case J:
        case j:
        case b:
        case M:
          we(i, c, S.children);
          return;
        case te:
          we(i, c, S.children);
          return;
        case de:
          throw Error(t(343));
        case Q:
          e: {
            m = c.blockedBoundary, P = c.blockedSegment, R = S.fallback, S = S.children, B = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: B, errorDigest: null }, pe = sr(i, P.chunks.length, Z, P.formatContext, !1, !1);
            P.children.push(pe), P.lastPushedText = !1;
            var be = sr(i, 0, null, P.formatContext, !1, !1);
            be.parentFlushed = !0, c.blockedBoundary = Z, c.blockedSegment = be;
            try {
              if (Ve(
                i,
                c,
                S
              ), i.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, Ue(Z, be), Z.pendingTasks === 0) break e;
            } catch (xe) {
              be.status = 4, Z.forceClientRender = !0, Z.errorDigest = y(i, xe);
            } finally {
              c.blockedBoundary = m, c.blockedSegment = P;
            }
            c = Xt(i, R, m, pe, B, c.legacyContext, c.context, c.treeContext), i.pingedTasks.push(c);
          }
          return;
      }
      if (typeof m == "object" && m !== null) switch (m.$$typeof) {
        case ie:
          if (S = A(i, c, m.render, S, P), Yt !== 0) {
            m = c.treeContext, c.treeContext = Wt(m, 1, 0);
            try {
              we(i, c, S);
            } finally {
              c.treeContext = m;
            }
          } else we(i, c, S);
          return;
        case X:
          m = m.type, S = ye(m, S), ve(i, c, m, S, P);
          return;
        case ee:
          if (P = S.children, m = m._context, S = S.value, R = m._currentValue2, m._currentValue2 = S, B = We, We = S = { parent: B, depth: B === null ? 0 : B.depth + 1, context: m, parentValue: R, value: S }, c.context = S, we(i, c, P), i = We, i === null) throw Error(t(403));
          S = i.parentValue, i.context._currentValue2 = S === re ? i.context._defaultValue : S, i = We = i.parent, c.context = i;
          return;
        case E:
          S = S.children, S = S(m._currentValue2), we(i, c, S);
          return;
        case ne:
          P = m._init, m = P(m._payload), S = ye(m, S), ve(
            i,
            c,
            m,
            S,
            void 0
          );
          return;
      }
      throw Error(t(130, m == null ? m : typeof m, ""));
    }
  }
  function we(i, c, m) {
    if (c.node = m, typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case $:
          ve(i, c, m.type, m.props, m.ref);
          return;
        case O:
          throw Error(t(257));
        case ne:
          var S = m._init;
          m = S(m._payload), we(i, c, m);
          return;
      }
      if (H(m)) {
        Me(i, c, m);
        return;
      }
      if (m === null || typeof m != "object" ? S = null : (S = le && m[le] || m["@@iterator"], S = typeof S == "function" ? S : null), S && (S = S.call(m))) {
        if (m = S.next(), !m.done) {
          var P = [];
          do
            P.push(m.value), m = S.next();
          while (!m.done);
          Me(i, c, P);
        }
        return;
      }
      throw i = Object.prototype.toString.call(m), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : i));
    }
    typeof m == "string" ? (S = c.blockedSegment, S.lastPushedText = et(c.blockedSegment.chunks, m, i.responseState, S.lastPushedText)) : typeof m == "number" && (S = c.blockedSegment, S.lastPushedText = et(c.blockedSegment.chunks, "" + m, i.responseState, S.lastPushedText));
  }
  function Me(i, c, m) {
    for (var S = m.length, P = 0; P < S; P++) {
      var R = c.treeContext;
      c.treeContext = Wt(R, S, P);
      try {
        Ve(i, c, m[P]);
      } finally {
        c.treeContext = R;
      }
    }
  }
  function Ve(i, c, m) {
    var S = c.blockedSegment.formatContext, P = c.legacyContext, R = c.context;
    try {
      return we(i, c, m);
    } catch (pe) {
      if (Vt(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        m = pe;
        var B = c.blockedSegment, Z = sr(i, B.chunks.length, null, B.formatContext, B.lastPushedText, !0);
        B.children.push(Z), B.lastPushedText = !1, i = Xt(i, c.node, c.blockedBoundary, Z, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, m.then(i, i), c.blockedSegment.formatContext = S, c.legacyContext = P, c.context = R, Pe(R);
      } else throw c.blockedSegment.formatContext = S, c.legacyContext = P, c.context = R, Pe(R), pe;
    }
  }
  function yt(i) {
    var c = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Nt(this, c, i);
  }
  function Ke(i, c, m) {
    var S = i.blockedBoundary;
    i.blockedSegment.status = 3, S === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.push(null))) : (S.pendingTasks--, S.forceClientRender || (S.forceClientRender = !0, i = m === void 0 ? Error(t(432)) : m, S.errorDigest = c.onError(i), S.parentFlushed && c.clientRenderedBoundaries.push(S)), S.fallbackAbortableTasks.forEach(function(P) {
      return Ke(P, c, m);
    }), S.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (S = c.onAllReady, S()));
  }
  function Ue(i, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var m = c.children[0];
      m.id = c.id, m.parentFlushed = !0, m.status === 1 && Ue(i, m);
    } else i.completedSegments.push(c);
  }
  function Nt(i, c, m) {
    if (c === null) {
      if (m.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = m;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = It, c = i.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (m.parentFlushed && m.status === 1 && Ue(c, m), c.parentFlushed && i.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(yt, i), c.fallbackAbortableTasks.clear()) : m.parentFlushed && m.status === 1 && (Ue(c, m), c.completedSegments.length === 1 && c.parentFlushed && i.partialBoundaries.push(c)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Or(i) {
    if (i.status !== 2) {
      var c = We, m = Ze.current;
      Ze.current = zt;
      var S = Ht;
      Ht = i.responseState;
      try {
        var P = i.pingedTasks, R;
        for (R = 0; R < P.length; R++) {
          var B = P[R], Z = i, pe = B.blockedSegment;
          if (pe.status === 0) {
            Pe(B.context);
            try {
              we(Z, B, B.node), Z.responseState.generateStaticMarkup || pe.lastPushedText && pe.textEmbedded && pe.chunks.push("<!-- -->"), B.abortSet.delete(B), pe.status = 1, Nt(Z, B.blockedBoundary, pe);
            } catch (Lt) {
              if (Vt(), typeof Lt == "object" && Lt !== null && typeof Lt.then == "function") {
                var be = B.ping;
                Lt.then(be, be);
              } else {
                B.abortSet.delete(B), pe.status = 4;
                var xe = B.blockedBoundary, tt = Lt, Kt = y(Z, tt);
                if (xe === null ? v(Z, tt) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Kt, xe.parentFlushed && Z.clientRenderedBoundaries.push(xe))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var Jt = Z.onAllReady;
                  Jt();
                }
              }
            } finally {
            }
          }
        }
        P.splice(0, R), i.destination !== null && zr(i, i.destination);
      } catch (Lt) {
        y(i, Lt), v(i, Lt);
      } finally {
        Ht = S, Ze.current = m, m === zt && Pe(c);
      }
    }
  }
  function Rr(i, c, m) {
    switch (m.parentFlushed = !0, m.status) {
      case 0:
        var S = m.id = i.nextSegmentId++;
        return m.lastPushedText = !1, m.textEmbedded = !1, i = i.responseState, c.push('<template id="'), c.push(i.placeholderPrefix), i = S.toString(16), c.push(i), c.push('"></template>');
      case 1:
        m.status = 2;
        var P = !0;
        S = m.chunks;
        var R = 0;
        m = m.children;
        for (var B = 0; B < m.length; B++) {
          for (P = m[B]; R < P.index; R++) c.push(S[R]);
          P = Ir(i, c, P);
        }
        for (; R < S.length - 1; R++) c.push(S[R]);
        return R < S.length && (P = c.push(S[R])), P;
      default:
        throw Error(t(390));
    }
  }
  function Ir(i, c, m) {
    var S = m.boundary;
    if (S === null) return Rr(i, c, m);
    if (S.parentFlushed = !0, S.forceClientRender) return i.responseState.generateStaticMarkup || (S = S.errorDigest, c.push("<!--$!-->"), c.push("<template"), S && (c.push(' data-dgst="'), S = T(S), c.push(S), c.push('"')), c.push("></template>")), Rr(i, c, m), i = i.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), i;
    if (0 < S.pendingTasks) {
      S.rootSegmentID = i.nextSegmentId++, 0 < S.completedSegments.length && i.partialBoundaries.push(S);
      var P = i.responseState, R = P.nextSuspenseID++;
      return P = P.boundaryPrefix + R.toString(16), S = S.id = P, Ne(c, i.responseState, S), Rr(i, c, m), c.push("<!--/$-->");
    }
    if (S.byteSize > i.progressiveChunkSize) return S.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(S), Ne(c, i.responseState, S.id), Rr(i, c, m), c.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || c.push("<!--$-->"), m = S.completedSegments, m.length !== 1) throw Error(t(391));
    return Ir(i, c, m[0]), i = i.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), i;
  }
  function Xr(i, c, m) {
    return Ce(c, i.responseState, m.formatContext, m.id), Ir(i, c, m), lt(c, m.formatContext);
  }
  function Kr(i, c, m) {
    for (var S = m.completedSegments, P = 0; P < S.length; P++) Jr(i, c, m, S[P]);
    if (S.length = 0, i = i.responseState, S = m.id, m = m.rootSegmentID, c.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? c.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, c.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), S === null) throw Error(t(395));
    return m = m.toString(16), c.push(S), c.push('","'), c.push(i.segmentPrefix), c.push(m), c.push('")<\/script>');
  }
  function Jr(i, c, m, S) {
    if (S.status === 2) return !0;
    var P = S.id;
    if (P === -1) {
      if ((S.id = m.rootSegmentID) === -1) throw Error(t(392));
      return Xr(i, c, S);
    }
    return Xr(i, c, S), i = i.responseState, c.push(i.startInlineScript), i.sentCompleteSegmentFunction ? c.push('$RS("') : (i.sentCompleteSegmentFunction = !0, c.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), c.push(i.segmentPrefix), P = P.toString(16), c.push(P), c.push('","'), c.push(i.placeholderPrefix), c.push(P), c.push('")<\/script>');
  }
  function zr(i, c) {
    try {
      var m = i.completedRootSegment;
      if (m !== null && i.pendingRootTasks === 0) {
        Ir(i, c, m), i.completedRootSegment = null;
        var S = i.responseState.bootstrapChunks;
        for (m = 0; m < S.length - 1; m++) c.push(S[m]);
        m < S.length && c.push(S[m]);
      }
      var P = i.clientRenderedBoundaries, R;
      for (R = 0; R < P.length; R++) {
        var B = P[R];
        S = c;
        var Z = i.responseState, pe = B.id, be = B.errorDigest, xe = B.errorMessage, tt = B.errorComponentStack;
        if (S.push(Z.startInlineScript), Z.sentClientRenderFunction ? S.push('$RX("') : (Z.sentClientRenderFunction = !0, S.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), pe === null) throw Error(t(395));
        if (S.push(pe), S.push('"'), be || xe || tt) {
          S.push(",");
          var Kt = Oe(be || "");
          S.push(Kt);
        }
        if (xe || tt) {
          S.push(",");
          var Jt = Oe(xe || "");
          S.push(Jt);
        }
        if (tt) {
          S.push(",");
          var Lt = Oe(tt);
          S.push(Lt);
        }
        if (!S.push(")<\/script>")) {
          i.destination = null, R++, P.splice(0, R);
          return;
        }
      }
      P.splice(0, R);
      var Nr = i.completedBoundaries;
      for (R = 0; R < Nr.length; R++) if (!Kr(i, c, Nr[R])) {
        i.destination = null, R++, Nr.splice(0, R);
        return;
      }
      Nr.splice(0, R);
      var hr = i.partialBoundaries;
      for (R = 0; R < hr.length; R++) {
        var Qr = hr[R];
        e: {
          P = i, B = c;
          var Lr = Qr.completedSegments;
          for (Z = 0; Z < Lr.length; Z++) if (!Jr(P, B, Qr, Lr[Z])) {
            Z++, Lr.splice(0, Z);
            var Rn = !1;
            break e;
          }
          Lr.splice(0, Z), Rn = !0;
        }
        if (!Rn) {
          i.destination = null, R++, hr.splice(0, R);
          return;
        }
      }
      hr.splice(0, R);
      var kr = i.completedBoundaries;
      for (R = 0; R < kr.length; R++) if (!Kr(i, c, kr[R])) {
        i.destination = null, R++, kr.splice(0, R);
        return;
      }
      kr.splice(0, R);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && c.push(null);
    }
  }
  function An(i, c) {
    try {
      var m = i.abortableTasks;
      m.forEach(function(S) {
        return Ke(S, i, c);
      }), m.clear(), i.destination !== null && zr(i, i.destination);
    } catch (S) {
      y(i, S), v(i, S);
    }
  }
  function On() {
  }
  function Zr(i, c, m, S) {
    var P = !1, R = null, B = "", Z = { push: function(be) {
      return be !== null && (B += be), !0;
    }, destroy: function(be) {
      P = !0, R = be;
    } }, pe = !1;
    if (i = pr(i, Be(m, c ? c.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, On, void 0, function() {
      pe = !0;
    }), Or(i), An(i, S), i.status === 1) i.status = 2, Z.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = Z;
      try {
        zr(i, Z);
      } catch (be) {
        y(i, be), v(i, be);
      }
    }
    if (P) throw R;
    if (!pe) throw Error(t(426));
    return B;
  }
  return Dr.renderToNodeStream = function() {
    throw Error(t(207));
  }, Dr.renderToStaticMarkup = function(i, c) {
    return Zr(i, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Dr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Dr.renderToString = function(i, c) {
    return Zr(i, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Dr.version = "18.3.1", Dr;
}
var Gn = {}, _o;
function Ru() {
  if (_o) return Gn;
  _o = 1;
  var e = ft;
  function t(o) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, p = 1; p < arguments.length; p++) u += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + o + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(o, u) {
    if (u.length !== 0) if (512 < u.length) 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), o.enqueue(u);
    else {
      var p = r.length - n;
      p < u.length && (p === 0 ? o.enqueue(r) : (r.set(u.subarray(0, p), n), o.enqueue(r), u = u.subarray(p)), r = new Uint8Array(512), n = 0), r.set(u, n), n += u.length;
    }
  }
  function s(o, u) {
    return a(o, u), !0;
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
  function _(o, u) {
    typeof o.error == "function" ? o.error(u) : o.close();
  }
  var x = Object.prototype.hasOwnProperty, D = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, T = {};
  function k(o) {
    return x.call(T, o) ? !0 : x.call(z, o) ? !1 : D.test(o) ? T[o] = !0 : (z[o] = !0, !1);
  }
  function N(o, u, p, w, L, I, W) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = w, this.attributeNamespace = L, this.mustUseProperty = p, this.propertyName = o, this.type = u, this.sanitizeURL = I, this.removeEmptyString = W;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    H[o] = new N(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var u = o[0];
    H[u] = new N(u, 1, !1, o[1], null, !1, !1);
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
  var U = /[\-:]([a-z])/g;
  function G(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var u = o.replace(
      U,
      G
    );
    H[u] = new N(u, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var u = o.replace(U, G);
    H[u] = new N(u, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var u = o.replace(U, G);
    H[u] = new N(u, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
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
    C.forEach(function(u) {
      u = u + o.charAt(0).toUpperCase() + o.substring(1), q[u] = q[o];
    });
  });
  var ae = /["'&<>]/;
  function Se(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var u = ae.exec(o);
    if (u) {
      var p = "", w, L = 0;
      for (w = u.index; w < o.length; w++) {
        switch (o.charCodeAt(w)) {
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
        L !== w && (p += o.substring(L, w)), L = w + 1, p += u;
      }
      o = L !== w ? p + o.substring(L, w) : p;
    }
    return o;
  }
  var Ie = /([A-Z])/g, je = /^ms-/, Ye = Array.isArray, ce = f("<script>"), me = f("<\/script>"), Re = f('<script src="'), Ne = f('<script type="module" src="'), Ce = f('" async=""><\/script>'), lt = /(<\/|<)(s)(cript)/gi;
  function Fe(o, u, p, w) {
    return "" + u + (p === "s" ? "\\u0073" : "\\u0053") + w;
  }
  function Oe(o, u, p, w, L) {
    o = o === void 0 ? "" : o, u = u === void 0 ? ce : f('<script nonce="' + Se(u) + '">');
    var I = [];
    if (p !== void 0 && I.push(u, h(("" + p).replace(lt, Fe)), me), w !== void 0) for (p = 0; p < w.length; p++) I.push(Re, h(Se(w[p])), Ce);
    if (L !== void 0) for (w = 0; w < L.length; w++) I.push(Ne, h(Se(L[w])), Ce);
    return { bootstrapChunks: I, startInlineScript: u, placeholderPrefix: f(o + "P:"), segmentPrefix: f(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Be(o, u) {
    return { insertionMode: o, selectedValue: u };
  }
  function et(o) {
    return Be(o === "http://www.w3.org/2000/svg" ? 2 : o === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function se(o, u, p) {
    switch (u) {
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
  var $ = f("<!-- -->");
  function O(o, u, p, w) {
    return u === "" ? w : (w && o.push($), o.push(h(Se(u))), !0);
  }
  var M = /* @__PURE__ */ new Map(), j = f(' style="'), b = f(":"), ee = f(";");
  function E(o, u, p) {
    if (typeof p != "object") throw Error(t(62));
    u = !0;
    for (var w in p) if (x.call(p, w)) {
      var L = p[w];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (w.indexOf("--") === 0) {
          var I = h(Se(w));
          L = h(Se(("" + L).trim()));
        } else {
          I = w;
          var W = M.get(I);
          W !== void 0 || (W = f(Se(I.replace(Ie, "-$1").toLowerCase().replace(je, "-ms-"))), M.set(I, W)), I = W, L = typeof L == "number" ? L === 0 || x.call(q, w) ? h("" + L) : h(L + "px") : h(Se(("" + L).trim()));
        }
        u ? (u = !1, o.push(j, I, b, L)) : o.push(ee, I, b, L);
      }
    }
    u || o.push(te);
  }
  var ie = f(" "), Q = f('="'), te = f('"'), X = f('=""');
  function ne(o, u, p, w) {
    switch (p) {
      case "style":
        E(o, u, w);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
      if (u = H.hasOwnProperty(p) ? H[p] : null, u !== null) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (p = h(u.attributeName), u.type) {
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
            u.sanitizeURL && (w = "" + w), o.push(ie, p, Q, h(Se(w)), te);
        }
      } else if (k(p)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = p.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        o.push(ie, h(p), Q, h(Se(w)), te);
      }
    }
  }
  var de = f(">"), J = f("/>");
  function ge(o, u, p) {
    if (u != null) {
      if (p != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && o.push(h("" + u));
    }
  }
  function re(o) {
    var u = "";
    return e.Children.forEach(o, function(p) {
      p != null && (u += p);
    }), u;
  }
  var le = f(' selected=""');
  function $e(o, u, p, w) {
    o.push(ke(p));
    var L = p = null, I;
    for (I in u) if (x.call(u, I)) {
      var W = u[I];
      if (W != null) switch (I) {
        case "children":
          p = W;
          break;
        case "dangerouslySetInnerHTML":
          L = W;
          break;
        default:
          ne(o, w, I, W);
      }
    }
    return o.push(de), ge(o, L, p), typeof p == "string" ? (o.push(h(Se(p))), null) : p;
  }
  var ue = f(`
`), ot = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, We = /* @__PURE__ */ new Map();
  function ke(o) {
    var u = We.get(o);
    if (u === void 0) {
      if (!ot.test(o)) throw Error(t(65, o));
      u = f("<" + o), We.set(o, u);
    }
    return u;
  }
  var Y = f("<!DOCTYPE html>");
  function oe(o, u, p, w, L) {
    switch (u) {
      case "select":
        o.push(ke("select"));
        var I = null, W = null;
        for (_e in p) if (x.call(p, _e)) {
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
        W = L.selectedValue, o.push(ke("option"));
        var he = K = null, Te = null, _e = null;
        for (I in p) if (x.call(p, I)) {
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
        if (W != null) if (p = he !== null ? "" + he : re(K), Ye(W)) {
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
        for (K in p) if (x.call(p, K) && (he = p[K], he != null)) switch (K) {
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
          if (Ye(_e) && 1 < _e.length) throw Error(t(93));
          I = "" + _e;
        }
        return typeof I == "string" && I[0] === `
` && o.push(ue), I !== null && o.push(h(Se("" + I))), null;
      case "input":
        o.push(ke("input")), he = _e = K = I = null;
        for (W in p) if (x.call(p, W) && (Te = p[W], Te != null)) switch (W) {
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
        for (var Dt in p) if (x.call(p, Dt) && (I = p[Dt], I != null)) switch (Dt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(o, w, Dt, I);
        }
        return o.push(de), null;
      case "title":
        o.push(ke("title")), I = null;
        for (Qe in p) if (x.call(p, Qe) && (W = p[Qe], W != null)) switch (Qe) {
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
        o.push(ke(u)), W = I = null;
        for (he in p) if (x.call(p, he) && (K = p[he], K != null)) switch (he) {
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
` ? o.push(ue, h(p)) : o.push(h("" + p)));
        }
        return typeof I == "string" && I[0] === `
` && o.push(ue), I;
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
        o.push(ke(u));
        for (var Zt in p) if (x.call(p, Zt) && (I = p[Zt], I != null)) switch (Zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
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
        return $e(o, p, u, w);
      case "html":
        return L.insertionMode === 0 && o.push(Y), $e(o, p, u, w);
      default:
        if (u.indexOf("-") === -1 && typeof p.is != "string") return $e(o, p, u, w);
        o.push(ke(u)), W = I = null;
        for (Te in p) if (x.call(p, Te) && (K = p[Te], K != null)) switch (Te) {
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
            k(Te) && typeof K != "function" && typeof K != "symbol" && o.push(ie, h(Te), Q, h(Se(K)), te);
        }
        return o.push(de), ge(o, W, I), I;
    }
  }
  var Xe = f("</"), Le = f(">"), Pe = f('<template id="'), rr = f('"></template>'), nr = f("<!--$-->"), Bt = f('<!--$?--><template id="'), Wt = f('"></template>'), ht = f("<!--$!-->"), At = f("<!--/$-->"), nt = f("<template"), pt = f('"'), qt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Gt = f("></template>");
  function mt(o, u, p) {
    if (a(o, Bt), p === null) throw Error(t(395));
    return a(o, p), s(o, Wt);
  }
  var St = f('<div hidden id="'), gt = f('">'), De = f("</div>"), ut = f('<svg aria-hidden="true" style="display:none" id="'), ar = f('">'), Yt = f("</svg>"), fe = f('<math aria-hidden="true" style="display:none" id="'), st = f('">'), Ot = f("</math>"), ir = f('<table hidden id="'), Rt = f('">'), Vt = f("</table>"), or = f('<table hidden><tbody id="'), Sr = f('">'), at = f("</tbody></table>"), ct = f('<table hidden><tr id="'), dr = f('">'), Mt = f("</tr></table>"), zt = f('<table hidden><colgroup id="'), Ht = f('">'), Ze = f("</colgroup></table>");
  function fr(o, u, p, w) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return a(o, St), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, gt);
      case 2:
        return a(o, ut), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, ar);
      case 3:
        return a(o, fe), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, st);
      case 4:
        return a(o, ir), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, Rt);
      case 5:
        return a(o, or), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, Sr);
      case 6:
        return a(o, ct), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, dr);
      case 7:
        return a(
          o,
          zt
        ), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, Ht);
      default:
        throw Error(t(397));
    }
  }
  function It(o, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return s(o, De);
      case 2:
        return s(o, Yt);
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
  var pr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Xt = f('$RS("'), sr = f('","'), y = f('")<\/script>'), v = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), A = f('$RC("'), V = f('","'), ye = f('")<\/script>'), ve = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = f('$RX("'), Me = f('"'), Ve = f(")<\/script>"), yt = f(","), Ke = /[<\u2028\u2029]/g;
  function Ue(o) {
    return JSON.stringify(o).replace(Ke, function(u) {
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
  var Nt = Object.assign, Or = Symbol.for("react.element"), Rr = Symbol.for("react.portal"), Ir = Symbol.for("react.fragment"), Xr = Symbol.for("react.strict_mode"), Kr = Symbol.for("react.profiler"), Jr = Symbol.for("react.provider"), zr = Symbol.for("react.context"), An = Symbol.for("react.forward_ref"), On = Symbol.for("react.suspense"), Zr = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), m = Symbol.for("react.scope"), S = Symbol.for("react.debug_trace_mode"), P = Symbol.for("react.legacy_hidden"), R = Symbol.for("react.default_value"), B = Symbol.iterator;
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
        var u = o.render;
        return o = o.displayName, o || (o = u.displayName || u.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case i:
        return u = o.displayName || null, u !== null ? u : Z(o.type) || "Memo";
      case c:
        u = o._payload, o = o._init;
        try {
          return Z(o(u));
        } catch {
        }
    }
    return null;
  }
  var pe = {};
  function be(o, u) {
    if (o = o.contextTypes, !o) return pe;
    var p = {}, w;
    for (w in o) p[w] = u[w];
    return p;
  }
  var xe = null;
  function tt(o, u) {
    if (o !== u) {
      o.context._currentValue = o.parentValue, o = o.parent;
      var p = u.parent;
      if (o === null) {
        if (p !== null) throw Error(t(401));
      } else {
        if (p === null) throw Error(t(401));
        tt(o, p);
      }
      u.context._currentValue = u.value;
    }
  }
  function Kt(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && Kt(o);
  }
  function Jt(o) {
    var u = o.parent;
    u !== null && Jt(u), o.context._currentValue = o.value;
  }
  function Lt(o, u) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === u.depth ? tt(o, u) : Lt(o, u);
  }
  function Nr(o, u) {
    var p = u.parent;
    if (p === null) throw Error(t(402));
    o.depth === p.depth ? tt(o, p) : Nr(o, p), u.context._currentValue = u.value;
  }
  function hr(o) {
    var u = xe;
    u !== o && (u === null ? Jt(o) : o === null ? Kt(u) : u.depth === o.depth ? tt(u, o) : u.depth > o.depth ? Lt(u, o) : Nr(u, o), xe = o);
  }
  var Qr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, u) {
    o = o._reactInternals, o.queue !== null && o.queue.push(u);
  }, enqueueReplaceState: function(o, u) {
    o = o._reactInternals, o.replace = !0, o.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Lr(o, u, p, w) {
    var L = o.state !== void 0 ? o.state : null;
    o.updater = Qr, o.props = p, o.state = L;
    var I = { queue: [], replace: !1 };
    o._reactInternals = I;
    var W = u.contextType;
    if (o.context = typeof W == "object" && W !== null ? W._currentValue : w, W = u.getDerivedStateFromProps, typeof W == "function" && (W = W(p, L), L = W == null ? L : Nt({}, L, W), o.state = L), typeof u.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (u = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), u !== o.state && Qr.enqueueReplaceState(o, o.state, null), I.queue !== null && 0 < I.queue.length) if (u = I.queue, W = I.replace, I.queue = null, I.replace = !1, W && u.length === 1) o.state = u[0];
    else {
      for (I = W ? u[0] : o.state, L = !0, W = W ? 1 : 0; W < u.length; W++) {
        var K = u[W];
        K = typeof K == "function" ? K.call(o, I, p, w) : K, K != null && (L ? (L = !1, I = Nt({}, I, K)) : Nt(I, K));
      }
      o.state = I;
    }
    else I.queue = null;
  }
  var Rn = { id: 1, overflow: "" };
  function kr(o, u, p) {
    var w = o.id;
    o = o.overflow;
    var L = 32 - In(w) - 1;
    w &= ~(1 << L), p += 1;
    var I = 32 - In(u) + L;
    if (30 < I) {
      var W = L - L % 5;
      return I = (w & (1 << W) - 1).toString(32), w >>= W, L -= W, { id: 1 << 32 - In(u) + L | p << L | w, overflow: I + o };
    }
    return { id: 1 << I | p << L | w, overflow: o };
  }
  var In = Math.clz32 ? Math.clz32 : Pl, Nl = Math.log, Ll = Math.LN2;
  function Pl(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Nl(o) / Ll | 0) | 0;
  }
  function Dl(o, u) {
    return o === u && (o !== 0 || 1 / o === 1 / u) || o !== o && u !== u;
  }
  var jl = typeof Object.is == "function" ? Object.is : Dl, mr = null, _a = null, Nn = null, Je = null, en = !1, Ln = !1, tn = 0, xr = null, Pn = 0;
  function Pr() {
    if (mr === null) throw Error(t(321));
    return mr;
  }
  function zi() {
    if (0 < Pn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ta() {
    return Je === null ? Nn === null ? (en = !1, Nn = Je = zi()) : (en = !0, Je = Nn) : Je.next === null ? (en = !1, Je = Je.next = zi()) : (en = !0, Je = Je.next), Je;
  }
  function Ca() {
    _a = mr = null, Ln = !1, Nn = null, Pn = 0, Je = xr = null;
  }
  function Hi(o, u) {
    return typeof u == "function" ? u(o) : u;
  }
  function $i(o, u, p) {
    if (mr = Pr(), Je = Ta(), en) {
      var w = Je.queue;
      if (u = w.dispatch, xr !== null && (p = xr.get(w), p !== void 0)) {
        xr.delete(w), w = Je.memoizedState;
        do
          w = o(w, p.action), p = p.next;
        while (p !== null);
        return Je.memoizedState = w, [w, u];
      }
      return [Je.memoizedState, u];
    }
    return o = o === Hi ? typeof u == "function" ? u() : u : p !== void 0 ? p(u) : u, Je.memoizedState = o, o = Je.queue = { last: null, dispatch: null }, o = o.dispatch = Fl.bind(null, mr, o), [Je.memoizedState, o];
  }
  function Ui(o, u) {
    if (mr = Pr(), Je = Ta(), u = u === void 0 ? null : u, Je !== null) {
      var p = Je.memoizedState;
      if (p !== null && u !== null) {
        var w = p[1];
        e: if (w === null) w = !1;
        else {
          for (var L = 0; L < w.length && L < u.length; L++) if (!jl(u[L], w[L])) {
            w = !1;
            break e;
          }
          w = !0;
        }
        if (w) return p[0];
      }
    }
    return o = o(), Je.memoizedState = [o, u], o;
  }
  function Fl(o, u, p) {
    if (25 <= Pn) throw Error(t(301));
    if (o === mr) if (Ln = !0, o = { action: p, next: null }, xr === null && (xr = /* @__PURE__ */ new Map()), p = xr.get(u), p === void 0) xr.set(u, o);
    else {
      for (u = p; u.next !== null; ) u = u.next;
      u.next = o;
    }
  }
  function Ml() {
    throw Error(t(394));
  }
  function Dn() {
  }
  var Bi = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return Pr(), o._currentValue;
  }, useMemo: Ui, useReducer: $i, useRef: function(o) {
    mr = Pr(), Je = Ta();
    var u = Je.memoizedState;
    return u === null ? (o = { current: o }, Je.memoizedState = o) : u;
  }, useState: function(o) {
    return $i(Hi, o);
  }, useInsertionEffect: Dn, useLayoutEffect: function() {
  }, useCallback: function(o, u) {
    return Ui(function() {
      return o;
    }, u);
  }, useImperativeHandle: Dn, useEffect: Dn, useDebugValue: Dn, useDeferredValue: function(o) {
    return Pr(), o;
  }, useTransition: function() {
    return Pr(), [!1, Ml];
  }, useId: function() {
    var o = _a.treeContext, u = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - In(o) - 1)).toString(32) + u;
    var p = jn;
    if (p === null) throw Error(t(404));
    return u = tn++, o = ":" + p.idPrefix + "R" + o, 0 < u && (o += "H" + u.toString(32)), o + ":";
  }, useMutableSource: function(o, u) {
    return Pr(), u(o._source);
  }, useSyncExternalStore: function(o, u, p) {
    if (p === void 0) throw Error(t(407));
    return p();
  } }, jn = null, Ea = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function zl(o) {
    return console.error(o), null;
  }
  function rn() {
  }
  function Hl(o, u, p, w, L, I, W, K, he) {
    var Te = [], _e = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: _e, pingedTasks: Te, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? zl : L, onAllReady: I === void 0 ? rn : I, onShellReady: W === void 0 ? rn : W, onShellError: K === void 0 ? rn : K, onFatalError: he === void 0 ? rn : he }, p = Fn(u, 0, null, p, !1, !1), p.parentFlushed = !0, o = Aa(u, o, null, p, _e, pe, null, Rn), Te.push(o), u;
  }
  function Aa(o, u, p, w, L, I, W, K) {
    o.allPendingTasks++, p === null ? o.pendingRootTasks++ : p.pendingTasks++;
    var he = { node: u, ping: function() {
      var Te = o.pingedTasks;
      Te.push(he), Te.length === 1 && Ki(o);
    }, blockedBoundary: p, blockedSegment: w, abortSet: L, legacyContext: I, context: W, treeContext: K };
    return L.add(he), he;
  }
  function Fn(o, u, p, w, L, I) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: p, lastPushedText: L, textEmbedded: I };
  }
  function nn(o, u) {
    if (o = o.onError(u), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function Mn(o, u) {
    var p = o.onShellError;
    p(u), p = o.onFatalError, p(u), o.destination !== null ? (o.status = 2, _(o.destination, u)) : (o.status = 1, o.fatalError = u);
  }
  function Wi(o, u, p, w, L) {
    for (mr = {}, _a = u, tn = 0, o = p(w, L); Ln; ) Ln = !1, tn = 0, Pn += 1, Je = null, o = p(w, L);
    return Ca(), o;
  }
  function qi(o, u, p, w) {
    var L = p.render(), I = w.childContextTypes;
    if (I != null) {
      var W = u.legacyContext;
      if (typeof p.getChildContext != "function") w = W;
      else {
        p = p.getChildContext();
        for (var K in p) if (!(K in I)) throw Error(t(108, Z(w) || "Unknown", K));
        w = Nt({}, W, p);
      }
      u.legacyContext = w, Pt(o, u, L), u.legacyContext = W;
    } else Pt(o, u, L);
  }
  function Gi(o, u) {
    if (o && o.defaultProps) {
      u = Nt({}, u), o = o.defaultProps;
      for (var p in o) u[p] === void 0 && (u[p] = o[p]);
      return u;
    }
    return u;
  }
  function Oa(o, u, p, w, L) {
    if (typeof p == "function") if (p.prototype && p.prototype.isReactComponent) {
      L = be(p, u.legacyContext);
      var I = p.contextType;
      I = new p(w, typeof I == "object" && I !== null ? I._currentValue : L), Lr(I, p, w, L), qi(o, u, I, p);
    } else {
      I = be(p, u.legacyContext), L = Wi(o, u, p, w, I);
      var W = tn !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) Lr(L, p, w, I), qi(o, u, L, p);
      else if (W) {
        w = u.treeContext, u.treeContext = kr(w, 1, 0);
        try {
          Pt(o, u, L);
        } finally {
          u.treeContext = w;
        }
      } else Pt(o, u, L);
    }
    else if (typeof p == "string") {
      switch (L = u.blockedSegment, I = oe(L.chunks, p, w, o.responseState, L.formatContext), L.lastPushedText = !1, W = L.formatContext, L.formatContext = se(W, p, w), Ra(o, u, I), L.formatContext = W, p) {
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
          L.chunks.push(Xe, h(p), Le);
      }
      L.lastPushedText = !1;
    } else {
      switch (p) {
        case P:
        case S:
        case Xr:
        case Kr:
        case Ir:
          Pt(o, u, w.children);
          return;
        case Zr:
          Pt(o, u, w.children);
          return;
        case m:
          throw Error(t(343));
        case On:
          e: {
            p = u.blockedBoundary, L = u.blockedSegment, I = w.fallback, w = w.children, W = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: W, errorDigest: null }, he = Fn(o, L.chunks.length, K, L.formatContext, !1, !1);
            L.children.push(he), L.lastPushedText = !1;
            var Te = Fn(o, 0, null, L.formatContext, !1, !1);
            Te.parentFlushed = !0, u.blockedBoundary = K, u.blockedSegment = Te;
            try {
              if (Ra(
                o,
                u,
                w
              ), Te.lastPushedText && Te.textEmbedded && Te.chunks.push($), Te.status = 1, zn(K, Te), K.pendingTasks === 0) break e;
            } catch (_e) {
              Te.status = 4, K.forceClientRender = !0, K.errorDigest = nn(o, _e);
            } finally {
              u.blockedBoundary = p, u.blockedSegment = L;
            }
            u = Aa(o, I, p, he, W, u.legacyContext, u.context, u.treeContext), o.pingedTasks.push(u);
          }
          return;
      }
      if (typeof p == "object" && p !== null) switch (p.$$typeof) {
        case An:
          if (w = Wi(o, u, p.render, w, L), tn !== 0) {
            p = u.treeContext, u.treeContext = kr(p, 1, 0);
            try {
              Pt(o, u, w);
            } finally {
              u.treeContext = p;
            }
          } else Pt(o, u, w);
          return;
        case i:
          p = p.type, w = Gi(p, w), Oa(o, u, p, w, L);
          return;
        case Jr:
          if (L = w.children, p = p._context, w = w.value, I = p._currentValue, p._currentValue = w, W = xe, xe = w = { parent: W, depth: W === null ? 0 : W.depth + 1, context: p, parentValue: I, value: w }, u.context = w, Pt(o, u, L), o = xe, o === null) throw Error(t(403));
          w = o.parentValue, o.context._currentValue = w === R ? o.context._defaultValue : w, o = xe = o.parent, u.context = o;
          return;
        case zr:
          w = w.children, w = w(p._currentValue), Pt(o, u, w);
          return;
        case c:
          L = p._init, p = L(p._payload), w = Gi(p, w), Oa(o, u, p, w, void 0);
          return;
      }
      throw Error(t(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function Pt(o, u, p) {
    if (u.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Or:
          Oa(o, u, p.type, p.props, p.ref);
          return;
        case Rr:
          throw Error(t(257));
        case c:
          var w = p._init;
          p = w(p._payload), Pt(o, u, p);
          return;
      }
      if (Ye(p)) {
        Yi(o, u, p);
        return;
      }
      if (p === null || typeof p != "object" ? w = null : (w = B && p[B] || p["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(p))) {
        if (p = w.next(), !p.done) {
          var L = [];
          do
            L.push(p.value), p = w.next();
          while (!p.done);
          Yi(o, u, L);
        }
        return;
      }
      throw o = Object.prototype.toString.call(p), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : o));
    }
    typeof p == "string" ? (w = u.blockedSegment, w.lastPushedText = O(u.blockedSegment.chunks, p, o.responseState, w.lastPushedText)) : typeof p == "number" && (w = u.blockedSegment, w.lastPushedText = O(u.blockedSegment.chunks, "" + p, o.responseState, w.lastPushedText));
  }
  function Yi(o, u, p) {
    for (var w = p.length, L = 0; L < w; L++) {
      var I = u.treeContext;
      u.treeContext = kr(I, w, L);
      try {
        Ra(o, u, p[L]);
      } finally {
        u.treeContext = I;
      }
    }
  }
  function Ra(o, u, p) {
    var w = u.blockedSegment.formatContext, L = u.legacyContext, I = u.context;
    try {
      return Pt(o, u, p);
    } catch (he) {
      if (Ca(), typeof he == "object" && he !== null && typeof he.then == "function") {
        p = he;
        var W = u.blockedSegment, K = Fn(o, W.chunks.length, null, W.formatContext, W.lastPushedText, !0);
        W.children.push(K), W.lastPushedText = !1, o = Aa(o, u.node, u.blockedBoundary, K, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, p.then(o, o), u.blockedSegment.formatContext = w, u.legacyContext = L, u.context = I, hr(I);
      } else throw u.blockedSegment.formatContext = w, u.legacyContext = L, u.context = I, hr(I), he;
    }
  }
  function $l(o) {
    var u = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Xi(this, u, o);
  }
  function Vi(o, u, p) {
    var w = o.blockedBoundary;
    o.blockedSegment.status = 3, w === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.close())) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, o = p === void 0 ? Error(t(432)) : p, w.errorDigest = u.onError(o), w.parentFlushed && u.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(L) {
      return Vi(L, u, p);
    }), w.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (w = u.onAllReady, w()));
  }
  function zn(o, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var p = u.children[0];
      p.id = u.id, p.parentFlushed = !0, p.status === 1 && zn(o, p);
    } else o.completedSegments.push(u);
  }
  function Xi(o, u, p) {
    if (u === null) {
      if (p.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = p;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = rn, u = o.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && zn(u, p), u.parentFlushed && o.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach($l, o), u.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (zn(u, p), u.completedSegments.length === 1 && u.parentFlushed && o.partialBoundaries.push(u)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function Ki(o) {
    if (o.status !== 2) {
      var u = xe, p = Ea.current;
      Ea.current = Bi;
      var w = jn;
      jn = o.responseState;
      try {
        var L = o.pingedTasks, I;
        for (I = 0; I < L.length; I++) {
          var W = L[I], K = o, he = W.blockedSegment;
          if (he.status === 0) {
            hr(W.context);
            try {
              Pt(K, W, W.node), he.lastPushedText && he.textEmbedded && he.chunks.push($), W.abortSet.delete(W), he.status = 1, Xi(K, W.blockedBoundary, he);
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
        L.splice(0, I), o.destination !== null && Ia(o, o.destination);
      } catch (Qt) {
        nn(o, Qt), Mn(o, Qt);
      } finally {
        jn = w, Ea.current = p, p === Bi && hr(u);
      }
    }
  }
  function Hn(o, u, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var w = p.id = o.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, o = o.responseState, a(u, Pe), a(u, o.placeholderPrefix), o = h(w.toString(16)), a(u, o), s(u, rr);
      case 1:
        p.status = 2;
        var L = !0;
        w = p.chunks;
        var I = 0;
        p = p.children;
        for (var W = 0; W < p.length; W++) {
          for (L = p[W]; I < L.index; I++) a(u, w[I]);
          L = $n(o, u, L);
        }
        for (; I < w.length - 1; I++) a(u, w[I]);
        return I < w.length && (L = s(u, w[I])), L;
      default:
        throw Error(t(390));
    }
  }
  function $n(o, u, p) {
    var w = p.boundary;
    if (w === null) return Hn(o, u, p);
    if (w.parentFlushed = !0, w.forceClientRender) w = w.errorDigest, s(u, ht), a(u, nt), w && (a(u, qt), a(u, h(Se(w))), a(u, pt)), s(u, Gt), Hn(o, u, p);
    else if (0 < w.pendingTasks) {
      w.rootSegmentID = o.nextSegmentId++, 0 < w.completedSegments.length && o.partialBoundaries.push(w);
      var L = o.responseState, I = L.nextSuspenseID++;
      L = f(L.boundaryPrefix + I.toString(16)), w = w.id = L, mt(u, o.responseState, w), Hn(o, u, p);
    } else if (w.byteSize > o.progressiveChunkSize) w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), mt(u, o.responseState, w.id), Hn(o, u, p);
    else {
      if (s(u, nr), p = w.completedSegments, p.length !== 1) throw Error(t(391));
      $n(o, u, p[0]);
    }
    return s(u, At);
  }
  function Ji(o, u, p) {
    return fr(u, o.responseState, p.formatContext, p.id), $n(o, u, p), It(u, p.formatContext);
  }
  function Zi(o, u, p) {
    for (var w = p.completedSegments, L = 0; L < w.length; L++) Qi(o, u, p, w[L]);
    if (w.length = 0, o = o.responseState, w = p.id, p = p.rootSegmentID, a(u, o.startInlineScript), o.sentCompleteBoundaryFunction ? a(u, A) : (o.sentCompleteBoundaryFunction = !0, a(u, v)), w === null) throw Error(t(395));
    return p = h(p.toString(16)), a(u, w), a(u, V), a(u, o.segmentPrefix), a(u, p), s(u, ye);
  }
  function Qi(o, u, p, w) {
    if (w.status === 2) return !0;
    var L = w.id;
    if (L === -1) {
      if ((w.id = p.rootSegmentID) === -1) throw Error(t(392));
      return Ji(o, u, w);
    }
    return Ji(o, u, w), o = o.responseState, a(u, o.startInlineScript), o.sentCompleteSegmentFunction ? a(u, Xt) : (o.sentCompleteSegmentFunction = !0, a(u, pr)), a(u, o.segmentPrefix), L = h(L.toString(16)), a(u, L), a(u, sr), a(u, o.placeholderPrefix), a(u, L), s(u, y);
  }
  function Ia(o, u) {
    r = new Uint8Array(512), n = 0;
    try {
      var p = o.completedRootSegment;
      if (p !== null && o.pendingRootTasks === 0) {
        $n(o, u, p), o.completedRootSegment = null;
        var w = o.responseState.bootstrapChunks;
        for (p = 0; p < w.length - 1; p++) a(u, w[p]);
        p < w.length && s(u, w[p]);
      }
      var L = o.clientRenderedBoundaries, I;
      for (I = 0; I < L.length; I++) {
        var W = L[I];
        w = u;
        var K = o.responseState, he = W.id, Te = W.errorDigest, _e = W.errorMessage, Qe = W.errorComponentStack;
        if (a(w, K.startInlineScript), K.sentClientRenderFunction ? a(w, we) : (K.sentClientRenderFunction = !0, a(
          w,
          ve
        )), he === null) throw Error(t(395));
        a(w, he), a(w, Me), (Te || _e || Qe) && (a(w, yt), a(w, h(Ue(Te || "")))), (_e || Qe) && (a(w, yt), a(w, h(Ue(_e || "")))), Qe && (a(w, yt), a(w, h(Ue(Qe)))), s(w, Ve);
      }
      L.splice(0, I);
      var Dt = o.completedBoundaries;
      for (I = 0; I < Dt.length; I++) Zi(o, u, Dt[I]);
      Dt.splice(0, I), d(u), r = new Uint8Array(512), n = 0;
      var Zt = o.partialBoundaries;
      for (I = 0; I < Zt.length; I++) {
        var Qt = Zt[I];
        e: {
          L = o, W = u;
          var Un = Qt.completedSegments;
          for (K = 0; K < Un.length; K++) if (!Qi(
            L,
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
      for (I = 0; I < Na.length; I++) Zi(o, u, Na[I]);
      Na.splice(0, I);
    } finally {
      d(u), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && u.close();
    }
  }
  function eo(o, u) {
    try {
      var p = o.abortableTasks;
      p.forEach(function(w) {
        return Vi(w, o, u);
      }), p.clear(), o.destination !== null && Ia(o, o.destination);
    } catch (w) {
      nn(o, w), Mn(o, w);
    }
  }
  return Gn.renderToReadableStream = function(o, u) {
    return new Promise(function(p, w) {
      var L, I, W = new Promise(function(_e, Qe) {
        I = _e, L = Qe;
      }), K = Hl(o, Oe(u ? u.identifierPrefix : void 0, u ? u.nonce : void 0, u ? u.bootstrapScriptContent : void 0, u ? u.bootstrapScripts : void 0, u ? u.bootstrapModules : void 0), et(u ? u.namespaceURI : void 0), u ? u.progressiveChunkSize : void 0, u ? u.onError : void 0, I, function() {
        var _e = new ReadableStream({ type: "bytes", pull: function(Qe) {
          if (K.status === 1) K.status = 2, _(Qe, K.fatalError);
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
      }, L);
      if (u && u.signal) {
        var he = u.signal, Te = function() {
          eo(K, he.reason), he.removeEventListener("abort", Te);
        };
        he.addEventListener("abort", Te);
      }
      Ki(K);
    });
  }, Gn.version = "18.3.1", Gn;
}
var To;
function Iu() {
  if (To) return _r;
  To = 1;
  var e, t;
  return e = Ou(), t = Ru(), _r.version = e.version, _r.renderToString = e.renderToString, _r.renderToStaticMarkup = e.renderToStaticMarkup, _r.renderToNodeStream = e.renderToNodeStream, _r.renderToStaticNodeStream = e.renderToStaticNodeStream, _r.renderToReadableStream = t.renderToReadableStream, _r;
}
Iu();
const Nu = "staticMarkup";
function Ds() {
  const e = Gl().indexOf(Nu) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const cr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Ds(), { onClick: a, ...s } = r.props;
  if (n)
    return ft.cloneElement(r, {
      ...s,
      onClick: (h) => (e && e.event && e.action && Tu(e), a ? a(h) : !0)
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
}, Lu = Ei(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: n,
    onClick: a,
    gaData: s
  }, d) => {
    var g, h, f, _, x, D;
    const z = e === n, T = z ? "open" : "close";
    return /* @__PURE__ */ F.jsxs(
      "div",
      {
        ref: d,
        className: er("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (g = r.content) == null ? void 0 : g.icon
        }),
        children: [
          /* @__PURE__ */ F.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ F.jsx("h4", { children: /* @__PURE__ */ F.jsx(
            cr,
            {
              gaData: {
                ...s,
                action: T,
                text: r.content.header
              },
              children: /* @__PURE__ */ F.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: er({ collapsed: !z }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": z,
                  "aria-controls": `card-body-${e}`,
                  onClick: (k) => a(k, e),
                  children: [
                    (h = r.content) != null && h.icon ? /* @__PURE__ */ F.jsxs("span", { className: "accordion-icon", children: [
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
          ((D = r.content) == null ? void 0 : D.body) && /* @__PURE__ */ F.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: er("collapse", { show: z }),
              children: /* @__PURE__ */ F.jsx(
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
Lu.propTypes = {
  id: l.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: Ps,
  parentId: l.string,
  openCard: l.number,
  onClick: l.func,
  gaData: l.object
};
l.arrayOf(Ps).isRequired, l.number;
const Co = {
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
  block: a,
  color: s = "gray",
  disabled: d,
  element: g = "button",
  href: h,
  icon: f,
  innerRef: _,
  onClick: x,
  size: D = "default",
  variant: z,
  classes: T,
  target: k = "_self",
  ...N
}) => {
  if (z) {
    const G = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, q = er("btn", G[z], {
      [`btn-${G[z]}-${s}`]: !0,
      "btn-medium": D === "medium",
      "btn-small": D === "small",
      "btn-large": D === "large" || D === "default",
      disabled: d
    });
    let C = g;
    return h && g === "button" && (C = "a"), /* @__PURE__ */ F.jsx(
      cr,
      {
        gaData: {
          ...Co,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ F.jsxs(
          C,
          {
            type: C === "button" && x ? "button" : void 0,
            ...N,
            className: er(T) || q,
            href: h,
            ref: _,
            onClick: x,
            "aria-label": n,
            target: C === "a" ? k : null,
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
    "btn-md": D === "small",
    "btn-sm": D === "xsmall",
    "btn-block": a,
    disabled: d
  });
  let U = g;
  return h && g === "button" && (U = "a"), /* @__PURE__ */ F.jsx(
    cr,
    {
      gaData: {
        ...Co,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ F.jsxs(
        U,
        {
          type: U === "button" && x ? "button" : void 0,
          ...N,
          className: er(T) || H,
          href: h,
          ref: _,
          onClick: x,
          "aria-label": n,
          target: U === "a" ? k : null,
          children: [
            f && /* @__PURE__ */ F.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
js.propTypes = {
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
function Pu() {
  if (Ao) return qe;
  Ao = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), z = Symbol.for("react.client.reference");
  function T(k) {
    if (typeof k == "object" && k !== null) {
      var N = k.$$typeof;
      switch (N) {
        case e:
          switch (k = k.type, k) {
            case r:
            case a:
            case n:
            case h:
            case f:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case d:
                case g:
                case x:
                case _:
                  return k;
                case s:
                  return k;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return qe.ContextConsumer = s, qe.ContextProvider = d, qe.Element = e, qe.ForwardRef = g, qe.Fragment = r, qe.Lazy = x, qe.Memo = _, qe.Portal = t, qe.Profiler = a, qe.StrictMode = n, qe.Suspense = h, qe.SuspenseList = f, qe.isContextConsumer = function(k) {
    return T(k) === s;
  }, qe.isContextProvider = function(k) {
    return T(k) === d;
  }, qe.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, qe.isForwardRef = function(k) {
    return T(k) === g;
  }, qe.isFragment = function(k) {
    return T(k) === r;
  }, qe.isLazy = function(k) {
    return T(k) === x;
  }, qe.isMemo = function(k) {
    return T(k) === _;
  }, qe.isPortal = function(k) {
    return T(k) === t;
  }, qe.isProfiler = function(k) {
    return T(k) === a;
  }, qe.isStrictMode = function(k) {
    return T(k) === n;
  }, qe.isSuspense = function(k) {
    return T(k) === h;
  }, qe.isSuspenseList = function(k) {
    return T(k) === f;
  }, qe.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === a || k === n || k === h || k === f || k === D || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === _ || k.$$typeof === d || k.$$typeof === s || k.$$typeof === g || k.$$typeof === z || k.getModuleId !== void 0);
  }, qe.typeOf = T, qe;
}
var Oo;
function Du() {
  return Oo || (Oo = 1, Eo.exports = /* @__PURE__ */ Pu()), Eo.exports;
}
var Fs = /* @__PURE__ */ Du();
function ju(e) {
  function t($, O, M, j, b) {
    for (var ee = 0, E = 0, ie = 0, Q = 0, te, X, ne = 0, de = 0, J, ge = J = te = 0, re = 0, le = 0, $e = 0, ue = 0, ot = M.length, We = ot - 1, ke, Y = "", oe = "", Xe = "", Le = "", Pe; re < ot; ) {
      if (X = M.charCodeAt(re), re === We && E + Q + ie + ee !== 0 && (E !== 0 && (X = E === 47 ? 10 : 47), Q = ie = ee = 0, ot++, We++), E + Q + ie + ee === 0) {
        if (re === We && (0 < le && (Y = Y.replace(D, "")), 0 < Y.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Y += M.charAt(re);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (Y = Y.trim(), te = Y.charCodeAt(0), J = 1, ue = ++re; re < ot; ) {
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
            switch (J = M.substring(ue, re), te === 0 && (te = (Y = Y.replace(x, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (Y = Y.replace(D, "")), X = Y.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = O;
                    break;
                  default:
                    le = lt;
                }
                if (J = t(O, le, J, X, b + 1), ue = J.length, 0 < Oe && (le = r(lt, Y, $e), Pe = g(3, J, le, O, Re, me, ue, X, b, j), Y = le.join(""), Pe !== void 0 && (ue = (J = Pe.trim()).length) === 0 && (X = 0, J = "")), 0 < ue) switch (X) {
                  case 115:
                    Y = Y.replace(ae, d);
                  case 100:
                  case 109:
                  case 45:
                    J = Y + "{" + J + "}";
                    break;
                  case 107:
                    Y = Y.replace(U, "$1 $2"), J = Y + "{" + J + "}", J = Ce === 1 || Ce === 2 && s("@" + J, 3) ? "@-webkit-" + J + "@" + J : "@" + J;
                    break;
                  default:
                    J = Y + J, j === 112 && (J = (oe += J, ""));
                }
                else J = "";
                break;
              default:
                J = t(O, r(O, Y, $e), J, j, b + 1);
            }
            Xe += J, J = $e = le = ge = te = 0, Y = "", X = M.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (Y = (0 < le ? Y.replace(D, "") : Y).trim(), 1 < (ue = Y.length)) switch (ge === 0 && (te = Y.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ue = (Y = Y.replace(" ", ":")).length), 0 < Oe && (Pe = g(1, Y, O, $, Re, me, oe.length, j, b, j)) !== void 0 && (ue = (Y = Pe.trim()).length) === 0 && (Y = "\0\0"), te = Y.charCodeAt(0), X = Y.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  Le += Y + M.charAt(re);
                  break;
                }
              default:
                Y.charCodeAt(ue - 1) !== 58 && (oe += a(Y, te, X, Y.charCodeAt(2)));
            }
            $e = le = ge = te = 0, Y = "", X = M.charCodeAt(++re);
        }
      }
      switch (X) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + te === 0 && j !== 107 && 0 < Y.length && (le = 1, Y += "\0"), 0 < Oe * et && g(0, Y, O, $, Re, me, oe.length, j, b, j), me = 1, Re++;
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
                      ue = re, E = 42;
                  }
                  break;
                case 42:
                  X === 47 && ne === 42 && ue + 2 !== re && (M.charCodeAt(ue + 2) === 33 && (oe += M.substring(ue, re + 1)), ke = "", E = 0);
              }
          }
          E === 0 && (Y += ke);
      }
      de = ne, ne = X, re++;
    }
    if (ue = oe.length, 0 < ue) {
      if (le = O, 0 < Oe && (Pe = g(2, oe, le, $, Re, me, ue, j, b, j), Pe !== void 0 && (oe = Pe).length === 0)) return Le + oe + Xe;
      if (oe = le.join(",") + "{" + oe + "}", Ce * Ne !== 0) {
        switch (Ce !== 2 || s(oe, 2) || (Ne = 0), Ne) {
          case 111:
            oe = oe.replace(q, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(G, "::-webkit-input-$1") + oe.replace(G, "::-moz-$1") + oe.replace(G, ":-ms-input-$1") + oe;
        }
        Ne = 0;
      }
    }
    return Le + oe + Xe;
  }
  function r($, O, M) {
    var j = O.trim().split(N);
    O = j;
    var b = j.length, ee = $.length;
    switch (ee) {
      case 0:
      case 1:
        var E = 0;
        for ($ = ee === 0 ? "" : $[0] + " "; E < b; ++E)
          O[E] = n($, O[E], M).trim();
        break;
      default:
        var ie = E = 0;
        for (O = []; E < b; ++E)
          for (var Q = 0; Q < ee; ++Q)
            O[ie++] = n($[Q] + " ", j[E], M).trim();
    }
    return O;
  }
  function n($, O, M) {
    var j = O.charCodeAt(0);
    switch (33 > j && (j = (O = O.trim()).charCodeAt(0)), j) {
      case 38:
        return O.replace(H, "$1" + $.trim());
      case 58:
        return $.trim() + O.replace(H, "$1" + $.trim());
      default:
        if (0 < 1 * M && 0 < O.indexOf("\f")) return O.replace(H, ($.charCodeAt(0) === 58 ? "" : "$1") + $.trim());
    }
    return $ + O;
  }
  function a($, O, M, j) {
    var b = $ + ";", ee = 2 * O + 3 * M + 4 * j;
    if (ee === 944) {
      $ = b.indexOf(":", 9) + 1;
      var E = b.substring($, b.length - 1).trim();
      return E = b.substring(0, $).trim() + E + ";", Ce === 1 || Ce === 2 && s(E, 1) ? "-webkit-" + E + E : E;
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
        if (0 < b.indexOf("image-set(", 11)) return b.replace(ce, "$1-webkit-$2") + b;
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
        switch (O = (b = $).length - 10, E = (b.charCodeAt(O) === 33 ? b.substring(0, O) : b).substring($.indexOf(":", 7) + 1).trim(), ee = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
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
        if (Ye.test($) === !0) return (E = $.substring($.indexOf(":") + 1)).charCodeAt(0) === 115 ? a($.replace("stretch", "fill-available"), O, M, j).replace(":fill-available", ":stretch") : b.replace(E, "-webkit-" + E) + b.replace(E, "-moz-" + E.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, M + j === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s($, O) {
    var M = $.indexOf(O === 1 ? ":" : "{"), j = $.substring(0, O !== 3 ? M : 10);
    return M = $.substring(M + 1, $.length - 1), Be(O !== 2 ? j : j.replace(je, "$1"), M, O);
  }
  function d($, O) {
    var M = a(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
    return M !== O + ";" ? M.replace(Se, " or ($1)").substring(4) : "(" + O + ")";
  }
  function g($, O, M, j, b, ee, E, ie, Q, te) {
    for (var X = 0, ne = O, de; X < Oe; ++X)
      switch (de = Fe[X].call(_, $, ne, M, j, b, ee, E, ie, Q, te)) {
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
  function h($) {
    switch ($) {
      case void 0:
      case null:
        Oe = Fe.length = 0;
        break;
      default:
        if (typeof $ == "function") Fe[Oe++] = $;
        else if (typeof $ == "object") for (var O = 0, M = $.length; O < M; ++O)
          h($[O]);
        else et = !!$ | 0;
    }
    return h;
  }
  function f($) {
    return $ = $.prefix, $ !== void 0 && (Be = null, $ ? typeof $ != "function" ? Ce = 1 : (Ce = 2, Be = $) : Ce = 0), f;
  }
  function _($, O) {
    var M = $;
    if (33 > M.charCodeAt(0) && (M = M.trim()), se = M, M = [se], 0 < Oe) {
      var j = g(-1, O, M, M, Re, me, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (O = j);
    }
    var b = t(lt, M, O, 0, 0);
    return 0 < Oe && (j = g(-2, b, M, M, Re, me, b.length, 0, 0, 0), j !== void 0 && (b = j)), se = "", Ne = 0, me = Re = 1, b;
  }
  var x = /^\0+/g, D = /[\0\r\f]/g, z = /: */g, T = /zoo|gra/, k = /([,: ])(transform)/g, N = /,\r+?/g, H = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, q = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, Se = /([\s\S]*?);/g, Ie = /-self|flex-/g, je = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ye = /stretch|:\s*\w+\-(?:conte|avail)/, ce = /([^-])(image-set\()/, me = 1, Re = 1, Ne = 0, Ce = 1, lt = [], Fe = [], Oe = 0, Be = null, et = 0, se = "";
  return _.use = h, _.set = f, e !== void 0 && f(e), _;
}
var Fu = {
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
function Mu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var zu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ro = /* @__PURE__ */ Mu(
  function(e) {
    return zu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Io = { exports: {} }, ze = {}, No;
function Hu() {
  if (No) return ze;
  No = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, D = e ? Symbol.for("react.suspense_list") : 60120, z = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function G(C) {
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
            case x:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case g:
                case _:
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
    return G(C) === f;
  }
  return ze.AsyncMode = h, ze.ConcurrentMode = f, ze.ContextConsumer = g, ze.ContextProvider = d, ze.Element = t, ze.ForwardRef = _, ze.Fragment = n, ze.Lazy = T, ze.Memo = z, ze.Portal = r, ze.Profiler = s, ze.StrictMode = a, ze.Suspense = x, ze.isAsyncMode = function(C) {
    return q(C) || G(C) === h;
  }, ze.isConcurrentMode = q, ze.isContextConsumer = function(C) {
    return G(C) === g;
  }, ze.isContextProvider = function(C) {
    return G(C) === d;
  }, ze.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, ze.isForwardRef = function(C) {
    return G(C) === _;
  }, ze.isFragment = function(C) {
    return G(C) === n;
  }, ze.isLazy = function(C) {
    return G(C) === T;
  }, ze.isMemo = function(C) {
    return G(C) === z;
  }, ze.isPortal = function(C) {
    return G(C) === r;
  }, ze.isProfiler = function(C) {
    return G(C) === s;
  }, ze.isStrictMode = function(C) {
    return G(C) === a;
  }, ze.isSuspense = function(C) {
    return G(C) === x;
  }, ze.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === a || C === x || C === D || typeof C == "object" && C !== null && (C.$$typeof === T || C.$$typeof === z || C.$$typeof === d || C.$$typeof === g || C.$$typeof === _ || C.$$typeof === N || C.$$typeof === H || C.$$typeof === U || C.$$typeof === k);
  }, ze.typeOf = G, ze;
}
var Lo;
function $u() {
  return Lo || (Lo = 1, Io.exports = Hu()), Io.exports;
}
var Ba, Po;
function Uu() {
  if (Po) return Ba;
  Po = 1;
  var e = $u(), t = {
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
  var g = Object.defineProperty, h = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, _ = Object.getOwnPropertyDescriptor, x = Object.getPrototypeOf, D = Object.prototype;
  function z(T, k, N) {
    if (typeof k != "string") {
      if (D) {
        var H = x(k);
        H && H !== D && z(T, H, N);
      }
      var U = h(k);
      f && (U = U.concat(f(k)));
      for (var G = d(T), q = d(k), C = 0; C < U.length; ++C) {
        var ae = U[C];
        if (!r[ae] && !(N && N[ae]) && !(q && q[ae]) && !(G && G[ae])) {
          var Se = _(k, ae);
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
var Bu = Uu();
const Wu = /* @__PURE__ */ Ai(Bu);
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
}, ui = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Fs.typeOf(e);
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
var Br = typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_ATTR || bt.env.SC_ATTR) || "data-styled", Ii = typeof window < "u" && "HTMLElement" in window, qu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && bt.env.REACT_APP_SC_DISABLE_SPEEDY : bt.env.SC_DISABLE_SPEEDY !== void 0 && bt.env.SC_DISABLE_SPEEDY !== "" ? bt.env.SC_DISABLE_SPEEDY !== "false" && bt.env.SC_DISABLE_SPEEDY : bt.env.NODE_ENV !== "production"));
function Tn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Gu = function() {
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
    for (var h = this.indexOfGroup(r + 1), f = 0, _ = n.length; f < _; f++) this.tag.insertRule(h, n[f]) && (this.groupSizes[r]++, h++);
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
}(), ia = /* @__PURE__ */ new Map(), fa = /* @__PURE__ */ new Map(), yn = 1, Yn = function(e) {
  if (ia.has(e)) return ia.get(e);
  for (; fa.has(yn); ) yn++;
  var t = yn++;
  return ia.set(e, t), fa.set(t, e), t;
}, Yu = function(e) {
  return fa.get(e);
}, Vu = function(e, t) {
  t >= yn && (yn = t + 1), ia.set(e, t), fa.set(t, e);
}, Xu = "style[" + Br + '][data-styled-version="5.3.11"]', Ku = new RegExp("^" + Br + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ju = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, Zu = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var g = d.match(Ku);
      if (g) {
        var h = 0 | parseInt(g[1], 10), f = g[2];
        h !== 0 && (Vu(f, h), Ju(e, f, g[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Qu = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ms = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(g) {
    for (var h = g.childNodes, f = h.length; f >= 0; f--) {
      var _ = h[f];
      if (_ && _.nodeType === 1 && _.hasAttribute(Br)) return _;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Br, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Qu();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, ec = function() {
  function e(r) {
    var n = this.element = Ms(r);
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
}(), tc = function() {
  function e(r) {
    var n = this.element = Ms(r);
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
}(), rc = function() {
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
}(), Fo = Ii, nc = { isServer: !Ii, useCSSOMInjection: !qu }, zs = function() {
  function e(r, n, a) {
    r === void 0 && (r = Tr), n === void 0 && (n = {}), this.options = yr({}, nc, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Ii && Fo && (Fo = !1, function(s) {
      for (var d = document.querySelectorAll(Xu), g = 0, h = d.length; g < h; g++) {
        var f = d[g];
        f && f.getAttribute(Br) !== "active" && (Zu(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Yn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(yr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new rc(d) : s ? new ec(d) : new tc(d), new Gu(r)));
    var r, n, a, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Yn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Yn(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Yn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", d = 0; d < a; d++) {
        var g = Yu(d);
        if (g !== void 0) {
          var h = r.names.get(g), f = n.getGroup(d);
          if (h && f && h.size) {
            var _ = Br + ".g" + d + '[id="' + g + '"]', x = "";
            h !== void 0 && h.forEach(function(D) {
              D.length > 0 && (x += D + ",");
            }), s += "" + f + _ + '{content:"' + x + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), ac = /(a)(d)/gi, Mo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ci(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Mo(t % 52) + r;
  return (Mo(t % 52) + r).replace(ac, "$1-$2");
}
var $r = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Hs = function(e) {
  return $r(5381, e);
};
function ic(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (wn(r) && !Ri(r)) return !1;
  }
  return !0;
}
var oc = Hs("5.3.11"), sc = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && ic(t), this.componentId = r, this.baseHash = $r(oc, r), this.baseStyle = n, zs.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Wr(this.rules, t, r, n).join(""), g = ci($r(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, g)) {
        var h = n(d, "." + g, void 0, a);
        r.insertRules(a, g, h);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var f = this.rules.length, _ = $r(this.baseHash, n.hash), x = "", D = 0; D < f; D++) {
        var z = this.rules[D];
        if (typeof z == "string") x += z;
        else if (z) {
          var T = Wr(z, t, r, n), k = Array.isArray(T) ? T.join("") : T;
          _ = $r(_, k + D), x += k;
        }
      }
      if (x) {
        var N = ci(_ >>> 0);
        if (!r.hasNameForId(a, N)) {
          var H = n(x, "." + N, void 0, a);
          r.insertRules(a, N, H);
        }
        s.push(N);
      }
    }
    return s.join(" ");
  }, e;
}(), lc = /^\s*\/\/.*$/gm, uc = [":", "[", ".", "#"];
function cc(e) {
  var t, r, n, a, s = Tr, d = s.options, g = d === void 0 ? Tr : d, h = s.plugins, f = h === void 0 ? da : h, _ = new ju(g), x = [], D = /* @__PURE__ */ function(k) {
    function N(H) {
      if (H) try {
        k(H + "}");
      } catch {
      }
    }
    return function(H, U, G, q, C, ae, Se, Ie, je, Ye) {
      switch (H) {
        case 1:
          if (je === 0 && U.charCodeAt(0) === 64) return k(U + ";"), "";
          break;
        case 2:
          if (Ie === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return k(G[0] + U), "";
            default:
              return U + (Ye === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(N);
      }
    };
  }(function(k) {
    x.push(k);
  }), z = function(k, N, H) {
    return N === 0 && uc.indexOf(H[r.length]) !== -1 || H.match(a) ? k : "." + t;
  };
  function T(k, N, H, U) {
    U === void 0 && (U = "&");
    var G = k.replace(lc, ""), q = N && H ? H + " " + N + " { " + G + " }" : G;
    return t = U, r = N, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), _(H || !N ? "" : N, q);
  }
  return _.use([].concat(f, [function(k, N, H) {
    k === 2 && H.length && H[0].lastIndexOf(r) > 0 && (H[0] = H[0].replace(n, z));
  }, D, function(k) {
    if (k === -2) {
      var N = x;
      return x = [], N;
    }
  }])), T.hash = f.length ? f.reduce(function(k, N) {
    return N.name || Tn(15), $r(k, N.name);
  }, 5381).toString() : "", T;
}
var $s = ft.createContext();
$s.Consumer;
var Us = ft.createContext(), dc = (Us.Consumer, new zs()), di = cc();
function fc() {
  return wr($s) || dc;
}
function pc() {
  return wr(Us) || di;
}
var hc = function() {
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
}(), mc = /([A-Z])/, gc = /([A-Z])/g, yc = /^ms-/, bc = function(e) {
  return "-" + e.toLowerCase();
};
function zo(e) {
  return mc.test(e) ? e.replace(gc, bc).replace(yc, "-ms-") : e;
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
  return e instanceof hc ? r ? (e.inject(r, n), e.getName(n)) : e : ui(e) ? function _(x, D) {
    var z, T, k = [];
    for (var N in x) x.hasOwnProperty(N) && !Ho(x[N]) && (Array.isArray(x[N]) && x[N].isCss || wn(x[N]) ? k.push(zo(N) + ":", x[N], ";") : ui(x[N]) ? k.push.apply(k, _(x[N], N)) : k.push(zo(N) + ": " + (z = N, (T = x[N]) == null || typeof T == "boolean" || T === "" ? "" : typeof T != "number" || T === 0 || z in Fu || z.startsWith("--") ? String(T).trim() : T + "px") + ";"));
    return D ? [D + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var $o = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function vc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return wn(e) || ui(e) ? $o(Wr(Do(da, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : $o(Wr(Do(e, r)));
}
var wc = function(e, t, r) {
  return r === void 0 && (r = Tr), e.theme !== r.theme && e.theme || t || r.theme;
}, Sc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, kc = /(^-|-$)/g;
function Wa(e) {
  return e.replace(Sc, "-").replace(kc, "");
}
var xc = function(e) {
  return ci(Hs(e) >>> 0);
};
function Vn(e) {
  return typeof e == "string" && bt.env.NODE_ENV === "production";
}
var fi = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, _c = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Tc(e, t, r) {
  var n = e[r];
  fi(t) && fi(n) ? Bs(n, t) : e[r] = t;
}
function Bs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (fi(d)) for (var g in d) _c(g) && Tc(e, d[g], g);
  }
  return e;
}
var Ws = ft.createContext();
Ws.Consumer;
var qa = {};
function qs(e, t, r) {
  var n = Ri(e), a = !Vn(e), s = t.attrs, d = s === void 0 ? da : s, g = t.componentId, h = g === void 0 ? function(U, G) {
    var q = typeof U != "string" ? "sc" : Wa(U);
    qa[q] = (qa[q] || 0) + 1;
    var C = q + "-" + xc("5.3.11" + q + qa[q]);
    return G ? G + "-" + C : C;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, _ = f === void 0 ? function(U) {
    return Vn(U) ? "styled." + U : "Styled(" + jo(U) + ")";
  }(e) : f, x = t.displayName && t.componentId ? Wa(t.displayName) + "-" + t.componentId : t.componentId || h, D = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, z = t.shouldForwardProp;
  n && e.shouldForwardProp && (z = t.shouldForwardProp ? function(U, G, q) {
    return e.shouldForwardProp(U, G, q) && t.shouldForwardProp(U, G, q);
  } : e.shouldForwardProp);
  var T, k = new sc(r, x, n ? e.componentStyle : void 0), N = k.isStatic && d.length === 0, H = function(U, G) {
    return function(q, C, ae, Se) {
      var Ie = q.attrs, je = q.componentStyle, Ye = q.defaultProps, ce = q.foldedComponentIds, me = q.shouldForwardProp, Re = q.styledComponentId, Ne = q.target, Ce = function(j, b, ee) {
        j === void 0 && (j = Tr);
        var E = yr({}, b, { theme: j }), ie = {};
        return ee.forEach(function(Q) {
          var te, X, ne, de = Q;
          for (te in wn(de) && (de = de(E)), de) E[te] = ie[te] = te === "className" ? (X = ie[te], ne = de[te], X && ne ? X + " " + ne : X || ne) : de[te];
        }), [E, ie];
      }(wc(C, wr(Ws), Ye) || Tr, C, Ie), lt = Ce[0], Fe = Ce[1], Oe = function(j, b, ee, E) {
        var ie = fc(), Q = pc(), te = b ? j.generateAndInjectStyles(Tr, ie, Q) : j.generateAndInjectStyles(ee, ie, Q);
        return te;
      }(je, Se, lt), Be = ae, et = Fe.$as || C.$as || Fe.as || C.as || Ne, se = Vn(et), $ = Fe !== C ? yr({}, C, {}, Fe) : C, O = {};
      for (var M in $) M[0] !== "$" && M !== "as" && (M === "forwardedAs" ? O.as = $[M] : (me ? me(M, Ro, et) : !se || Ro(M)) && (O[M] = $[M]));
      return C.style && Fe.style !== C.style && (O.style = yr({}, C.style, {}, Fe.style)), O.className = Array.prototype.concat(ce, Re, Oe !== Re ? Oe : null, C.className, Fe.className).filter(Boolean).join(" "), O.ref = Be, Cs(et, O);
    }(T, U, G, N);
  };
  return H.displayName = _, (T = ft.forwardRef(H)).attrs = D, T.componentStyle = k, T.displayName = _, T.shouldForwardProp = z, T.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : da, T.styledComponentId = x, T.target = n ? e.target : e, T.withComponent = function(U) {
    var G = t.componentId, q = function(ae, Se) {
      if (ae == null) return {};
      var Ie, je, Ye = {}, ce = Object.keys(ae);
      for (je = 0; je < ce.length; je++) Ie = ce[je], Se.indexOf(Ie) >= 0 || (Ye[Ie] = ae[Ie]);
      return Ye;
    }(t, ["componentId"]), C = G && G + "-" + (Vn(U) ? U : Wa(jo(U)));
    return qs(U, yr({}, q, { attrs: D, componentId: C }), r);
  }, Object.defineProperty(T, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? Bs({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(T, "toString", { value: function() {
    return "." + T.styledComponentId;
  } }), a && Wu(T, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), T;
}
var tr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Tr), !Fs.isValidElementType(n)) return Tn(1, String(n));
    var s = function() {
      return r(n, a, vc.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, yr({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, yr({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(qs, e);
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
var Cc = /* @__PURE__ */ function() {
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
}, Ec = function(e, t, r, n) {
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
    function h(_) {
      try {
        f(n.throw(_));
      } catch (x) {
        d(x);
      }
    }
    function f(_) {
      _.done ? s(_.value) : a(_.value).then(g, h);
    }
    f((n = n.apply(e, [])).next());
  });
}, Ac = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, a, s, d;
  return d = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function g(f) {
    return function(_) {
      return h([f, _]);
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
    } catch (_) {
      f = [6, _], a = 0;
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
}, Oc = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Rc = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, Ic = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Nc(e, t, r) {
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
var Lc = (
  /** @class */
  function(e) {
    Cc(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, s = a.onShareWindowClose, d = a.windowHeight, g = d === void 0 ? 400 : d, h = a.windowPosition, f = h === void 0 ? "windowCenter" : h, _ = a.windowWidth, x = _ === void 0 ? 550 : _, D = Fr({ height: g, width: x }, f === "windowCenter" ? Rc(x, g) : Ic(x, g));
        Nc(n, D, s);
      }, r.handleClick = function(n) {
        return Ec(r, void 0, void 0, function() {
          var a, s, d, g, h, f, _, x, D, z;
          return Ac(this, function(T) {
            switch (T.label) {
              case 0:
                return a = this.props, s = a.beforeOnClick, d = a.disabled, g = a.networkLink, h = a.onClick, f = a.url, _ = a.openShareDialogOnClick, x = a.opts, D = g(f, x), d ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (z = s(), Oc(z) ? [4, z] : [3, 2]) : [3, 2]);
              case 1:
                T.sent(), T.label = 2;
              case 2:
                return _ && this.openShareDialog(D), h && h(n, D), [
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
      var f = r.resetButtonStyle, _ = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var x = Gs(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), D = er("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), z = Fr(Fr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, _), s && d);
      return ft.createElement("button", Fr({}, x, { "aria-label": x["aria-label"] || h, className: D, onClick: this.handleClick, ref: g, style: z }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Ul)
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
    return f.forEach(function(_) {
      delete h[_];
    }), ft.createElement(Lc, pa({}, n, h, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), Ei(a);
}
function Pc(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + ba({ subject: r, body: n ? n + a + e : e });
}
va("email", Pc, function(e) {
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
var Dc = /* @__PURE__ */ function() {
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
}(), jc = (
  /** @class */
  function(e) {
    Dc(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function bn(e, t) {
  if (!e)
    throw new jc(t);
}
function Fc(e, t) {
  var r = t.quote, n = t.hashtag;
  return bn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ba({
    u: e,
    quote: r,
    hashtag: n
  });
}
va("facebook", Fc, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Mc(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return bn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + ba({ url: e, mini: "true", title: r, summary: n, source: a });
}
va("linkedin", Mc, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function zc(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, d = t.related, g = d === void 0 ? [] : d;
  return bn(e, "twitter.url"), bn(Array.isArray(s), "twitter.hashtags is not an array"), bn(Array.isArray(g), "twitter.related is not an array"), "https://twitter.com/share" + ba({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: g.length > 0 ? g.join(",") : void 0
  });
}
va("twitter", zc, function(e) {
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
var Hc = (typeof window > "u" ? "undefined" : pi(window)) === "object" && window.Element || function() {
};
function $c(e, t, r) {
  if (!(e[t] instanceof Hc))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, $c, l.shape({
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
const Uc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ys = ({
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
  ..._
}) => {
  const x = er("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let D = d;
  return h && d === "button" && (D = "a"), /* @__PURE__ */ F.jsx(
    cr,
    {
      gaData: {
        ...Uc,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ F.jsx(
        D,
        {
          type: D === "button" && f ? "button" : void 0,
          ..._,
          className: x,
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
Ys.propTypes = {
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
const Vs = ({
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
  title: _,
  caption: x,
  captionTitle: D,
  border: z,
  dropShadow: T
}) => {
  const k = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: d,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: ru(r) },
    ...s && { "data-testid": s },
    ...g && { width: g },
    ...h && { height: h }
  }, N = er("uds-img", {
    borderless: !z,
    "uds-img-drop-shadow": T
  }), H = (G) => {
    const q = G ? `${k.className} ${G}` : k.className;
    return f ? /* @__PURE__ */ F.jsxs("a", { href: f, children: [
      /* @__PURE__ */ F.jsx("img", { ...k, className: q }),
      /* @__PURE__ */ F.jsx("span", { className: "visually-hidden", children: _ })
    ] }) : /* @__PURE__ */ F.jsx("img", { ...k, className: q });
  }, U = () => /* @__PURE__ */ F.jsx("div", { className: N, children: /* @__PURE__ */ F.jsxs("figure", { className: "figure uds-figure", children: [
    H(),
    x && /* @__PURE__ */ F.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      D && /* @__PURE__ */ F.jsx("h3", { children: D }),
      /* @__PURE__ */ F.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: jr(x)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ F.jsx(F.Fragment, { children: x ? U() : H(N) });
};
Vs.propTypes = {
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
const Bc = tr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Wc = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), qc = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Wc(e) ? `mailto:${e}` : e, Gc = {
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
  body: g,
  eventFormat: h = "stack",
  eventLocation: f,
  eventTime: _,
  buttons: x,
  linkLabel: D,
  linkUrl: z,
  tags: T,
  showBorders: k = !0,
  cardLink: N
}) => /* @__PURE__ */ F.jsx(
  Xs,
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
    eventTime: _,
    buttons: x,
    linkLabel: D,
    linkUrl: z,
    tags: T,
    showBorders: k,
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
const Xs = ({
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
  eventTime: _ = "",
  buttons: x = void 0,
  linkLabel: D = void 0,
  linkUrl: z = void 0,
  tags: T = void 0,
  showBorders: k = !0,
  cardLink: N
}) => {
  const H = er("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !k
  });
  return /* @__PURE__ */ F.jsx(F.Fragment, { children: /* @__PURE__ */ F.jsxs(Bc, { className: H, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ F.jsx(
      Vs,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: N,
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
      hi,
      {
        type: e,
        body: g,
        eventFormat: h,
        eventLocation: f,
        eventTime: _,
        title: s,
        buttons: x,
        linkLabel: D,
        linkUrl: z,
        tags: T,
        cardLink: N
      }
    ) }) : /* @__PURE__ */ F.jsx(
      hi,
      {
        type: e,
        body: g,
        eventFormat: h,
        eventLocation: f,
        eventTime: _,
        title: s,
        buttons: x,
        linkLabel: D,
        linkUrl: z,
        tags: T,
        cardLink: N
      }
    )
  ] }) });
};
Xs.propTypes = {
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
const hi = ({
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
  cardLink: _
}) => /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
  !!s && /* @__PURE__ */ F.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ F.jsx("h3", { className: "card-title", children: _ ? /* @__PURE__ */ F.jsx("a", { href: _, children: s }) : s }) }),
  !!t && /* @__PURE__ */ F.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ F.jsx("div", { dangerouslySetInnerHTML: jr(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ F.jsx(
    Ks,
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
        js,
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
  h && g && /* @__PURE__ */ F.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ F.jsx(
    cr,
    {
      gaData: {
        ...Gc,
        section: s,
        text: g
      },
      children: /* @__PURE__ */ F.jsx("a", { href: qc(h), children: g })
    }
  ) }),
  f && /* @__PURE__ */ F.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((x) => (
    // @ts-ignore
    /* @__PURE__ */ F.jsx(
      Ys,
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
hi.propTypes = {
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
const Ks = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ F.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ F.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ F.jsx("div", { children: /* @__PURE__ */ F.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ F.jsx("div", { dangerouslySetInnerHTML: jr(r) })
  ] }),
  t && /* @__PURE__ */ F.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ F.jsx("div", { children: /* @__PURE__ */ F.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ F.jsx(
      "div",
      {
        dangerouslySetInnerHTML: jr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
  r && /* @__PURE__ */ F.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ F.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ F.jsx("div", { children: /* @__PURE__ */ F.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ F.jsx("div", { dangerouslySetInnerHTML: jr(r) })
  ] }) }),
  t && /* @__PURE__ */ F.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ F.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ F.jsx("div", { children: /* @__PURE__ */ F.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ F.jsx("span", { children: /* @__PURE__ */ F.jsx(
      "div",
      {
        dangerouslySetInnerHTML: jr(t)
      }
    ) })
  ] }) })
] });
Ks.propTypes = {
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
const Yc = tr.div`
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
`, Vc = () => /* @__PURE__ */ F.jsxs(Yc, { children: [
  /* @__PURE__ */ F.jsx("div", {}),
  /* @__PURE__ */ F.jsx("div", {}),
  /* @__PURE__ */ F.jsx("div", {}),
  /* @__PURE__ */ F.jsx("div", {})
] }), Xc = tr.section``, wa = Bl(null), Js = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: a,
  dataTransformer: s,
  dataFilter: d,
  maxItems: g
}) => {
  const [{ data: h, loading: f, error: _ }, x] = tu(), [D, z] = Hr([]), T = { ...e.dataSource, ...t };
  return Er(() => {
    x(T == null ? void 0 : T.url);
  }, [T == null ? void 0 : T.url]), Er(() => {
    const k = h == null ? void 0 : h.nodes.map(s), N = k == null ? void 0 : k.filter(
      (H) => d(H, t == null ? void 0 : t.filters)
    );
    z(g ? N == null ? void 0 : N.slice(0, g) : N);
  }, [h]), // Init the context to be used on its childrens
  /* @__PURE__ */ F.jsx(wa.Provider, { value: { feeds: D }, children: /* @__PURE__ */ F.jsxs(Xc, { children: [
    n,
    _ ? /* @__PURE__ */ F.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
      f && !(D != null && D.length) && /* @__PURE__ */ F.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ F.jsx(Vc, {}) }),
      D != null && D.length ? a : !f && /* @__PURE__ */ F.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
Js.propTypes = {
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
}), Li = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), Zs = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), Qs = l.shape({
  url: l.string,
  filters: l.string
}), Kc = l.shape({
  header: Ni,
  ctaButton: Li,
  dataSource: Qs,
  maxItems: l.number
}), Jc = tr.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, el = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, a = { ...e.ctaButton, ...r }, s = n.tag || "h2", d = s !== "h2", g = `text-${n.color} ${d ? "h2" : ""}`.trim();
  return /* @__PURE__ */ F.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ F.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ F.jsx(s, { className: g, children: n.text }) }),
        /* @__PURE__ */ F.jsx(Jc, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ F.jsx(
          cr,
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
el.propTypes = {
  defaultProps: Kc,
  header: Ni,
  ctaButton: Li
};
const tl = ({ children: e }) => /* @__PURE__ */ F.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ F.jsx("div", { className: "col", children: e }) });
tl.propTypes = {
  children: l.element
};
tr.img`
  width: 100%;
`;
l.oneOf(["heading-hero", "story-hero"]), l.arrayOf(Ua), l.string;
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
const Zc = Ei(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: s,
    leftKeyPressed: d,
    rightKeyPressed: g,
    icon: h,
    gaData: f
  } = e, { isReact: _, isBootstrap: x } = Ds(), D = Wl(null);
  ql(t, () => ({
    focus() {
      D.current.focus();
    },
    scrollIntoView() {
      var T, k, N, H, U, G, q;
      const C = ((T = D.current) == null ? void 0 : T.offsetWidth) / 2 + D.current.offsetLeft, ae = ((N = (k = D.current) == null ? void 0 : k.offsetParent) == null ? void 0 : N.scrollLeft) + ((U = (H = D.current) == null ? void 0 : H.offsetParent) == null ? void 0 : U.offsetWidth) / 2;
      (q = (G = D.current) == null ? void 0 : G.offsetParent) == null || q.scrollBy({
        left: C - ae
      });
    }
  }), []);
  const z = (T) => {
    T.keyCode === 37 ? (T.preventDefault(), d()) : T.keyCode === 39 && (T.preventDefault(), g());
  };
  return /* @__PURE__ */ F.jsx(cr, { gaData: { ...f, text: a }, children: /* @__PURE__ */ F.jsxs(
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
      onClick: _ && ((T) => s(T, r, a)),
      onKeyDown: _ && z,
      tabIndex: n ? "" : "-1",
      children: [
        a,
        " ",
        h && /* @__PURE__ */ F.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` })
      ]
    }
  ) });
});
Zc.propTypes = {
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
const Qc = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, rl = ({ children: e }) => /* @__PURE__ */ F.jsx(
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
rl.propTypes = {
  children: l.oneOfType([
    l.element,
    l.arrayOf(l.element)
  ]).isRequired
};
const nl = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ F.jsx(cr, { gaData: Qc, children: /* @__PURE__ */ F.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ F.jsx(rl, { children: t });
};
nl.propTypes = {
  buttonCount: l.number.isRequired
};
l.arrayOf(l.string).isRequired, l.func;
const al = ({ onClick: e = () => null }) => /* @__PURE__ */ F.jsx(
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
al.propTypes = {
  onClick: l.func
};
const il = ({ onClick: e = () => null }) => /* @__PURE__ */ F.jsx(
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
il.propTypes = {
  onClick: l.func
};
const Uo = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, ol = ({ children: e = null }) => /* @__PURE__ */ F.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
ol.propTypes = {
  children: l.arrayOf(l.element)
};
const sl = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ F.jsxs(ol, { children: [
  /* @__PURE__ */ F.jsx(cr, { gaData: { ...Uo, text: "left chevron" }, children: /* @__PURE__ */ F.jsx(il, { onClick: e }) }),
  t,
  /* @__PURE__ */ F.jsx(cr, { gaData: { ...Uo, text: "right chevron" }, children: /* @__PURE__ */ F.jsx(al, { onClick: e }) })
] });
sl.propTypes = {
  children: l.element,
  onClick: l.func
};
const ll = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ F.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ F.jsx("ul", { className: "glide__slides", children: t });
};
ll.propTypes = {
  carouselItems: l.arrayOf(l.object)
};
function Bo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bo(Object(r), !0).forEach(function(n) {
      td(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bo(Object(r)).forEach(function(n) {
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
function ed(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ka(e, t, r) {
  return t && ed(e.prototype, t), e;
}
function td(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function rd(e, t) {
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
function nd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ad(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function id(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ad(e);
}
function od(e) {
  var t = nd();
  return function() {
    var r = qr(e), n;
    if (t) {
      var a = qr(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return id(this, n);
  };
}
function sd(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = qr(e), e !== null); )
    ;
  return e;
}
function sa() {
  return typeof Reflect < "u" && Reflect.get ? sa = Reflect.get : sa = function(e, t, r) {
    var n = sd(e, t);
    if (n) {
      var a = Object.getOwnPropertyDescriptor(n, t);
      return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
    }
  }, sa.apply(this, arguments);
}
var ld = {
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
function Gr(e) {
  var t = oa(e);
  return t === "function" || t === "object" && !!e;
}
function ha(e) {
  return typeof e == "function";
}
function ul(e) {
  return typeof e > "u";
}
function yi(e) {
  return e.constructor === Array;
}
function cd(e, t, r) {
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
function dd(e) {
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
      t.classes.hasOwnProperty(a) && (r.classes[a] = Wo(Wo({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var fd = /* @__PURE__ */ function() {
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
}(), pd = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Sa(this, e), this._c = {}, this._t = [], this._e = new fd(), this.disabled = !1, this.selector = t, this.settings = bi(ld, r), this.index = this.settings.startAt;
  }
  return ka(e, [{
    key: "mount",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Gr(t) ? this._c = cd(this, t, this._e) : vr("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      Gr(t) ? this._o = t : vr("Options must be an `object` instance.");
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
function hd(e, t, r) {
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
      var h = this.move, f = this.length, _ = h.steps, x = h.direction, D = 1;
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
      if (x === "|" && (D = e.settings.perView || 1), x === ">" || x === "|" && _ === ">") {
        var z = a(D);
        z > f && (this._o = !0), e.index = s(z, D);
        return;
      }
      if (x === "<" || x === "|" && _ === "<") {
        var T = d(D);
        T < 0 && (this._o = !0), e.index = g(T, D);
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
    var _ = n.length;
    return h <= _ ? h : e.isType("carousel") ? h - (_ + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? _ : 0 : n.isBound() ? _ : Math.floor(_ / f) * f;
  }
  function d(h) {
    var f = e.index;
    if (e.isType("carousel"))
      return f - h;
    var _ = Math.ceil(f / h);
    return (_ - 1) * h;
  }
  function g(h, f) {
    var _ = n.length;
    return h >= 0 ? h : e.isType("carousel") ? h + (_ + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? _ : Math.floor(_ / f) * f : 0;
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
function qo() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function xa(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, s, d, g = 0, h = function() {
    g = r.leading === !1 ? 0 : qo(), n = null, d = e.apply(a, s), n || (a = s = null);
  }, f = function() {
    var _ = qo();
    !g && r.leading === !1 && (g = _);
    var x = t - (_ - g);
    return a = this, s = arguments, x <= 0 || x > t ? (n && (clearTimeout(n), n = null), g = _, d = e.apply(a, s), n || (a = s = null)) : !n && r.trailing !== !1 && (n = setTimeout(h, x)), d;
  };
  return f.cancel = function() {
    clearTimeout(n), g = 0, n = a = s = null;
  }, f;
}
var Xn = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function md(e, t, r) {
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
function cl(e) {
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
var gd = '[data-glide-el="track"]';
function yd(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(gd), this.collectSlides();
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
function bd(e, t, r) {
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
      Gr(a) ? (a.before = wt(a.before), a.after = wt(a.after)) : a = wt(a), n._v = a;
    }
  }), rt(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var a = n.value, s = e.settings.perView;
      return Gr(a) ? a.before / s + a.after / s : a * 2 / s;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function vd(e, t, r) {
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
      n._o = ul(a) ? 0 : wt(a);
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
function wd(e, t, r) {
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
function Sd(e, t, r) {
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
      s && (s.classList.add(a.slide.active), cl(s).forEach(function(d) {
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
function kd(e, t, r) {
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
        for (var _ = +!!e.settings.peek, x = g + _ + Math.round(g / 2), D = s.slice(0, x).reverse(), z = s.slice(x * -1), T = 0; T < Math.max(f, Math.floor(g / s.length)); T++) {
          for (var k = 0; k < D.length; k++) {
            var N = D[k].cloneNode(!0);
            N.classList.add(h.slide.clone), a.push(N);
          }
          for (var H = 0; H < z.length; H++) {
            var U = z[H].cloneNode(!0);
            U.classList.add(h.slide.clone), a.unshift(U);
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
      for (var a = this.items, s = t.Html, d = s.wrapper, g = s.slides, h = Math.floor(a.length / 2), f = a.slice(0, h).reverse(), _ = a.slice(h * -1).reverse(), x = "".concat(t.Sizes.slideWidth, "px"), D = 0; D < _.length; D++)
        d.appendChild(_[D]);
      for (var z = 0; z < f.length; z++)
        d.insertBefore(f[z], g[0]);
      for (var T = 0; T < a.length; T++)
        a[T].style.width = x;
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
function xd(e, t, r) {
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
var _d = ["ltr", "rtl"], Td = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Cd(e, t, r) {
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
      return this.is("rtl") ? a.split(s).join(Td[s]) : a;
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
      _d.indexOf(a) > -1 ? n._v = a : vr("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Ed(e, t) {
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
function Ad(e, t) {
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
function Od(e, t) {
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
function Rd(e, t) {
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
        return Gr(n) ? r - n.before : r - n;
      }
      return r;
    }
  };
}
function Id(e, t) {
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
function Nd(e, t, r) {
  var n = [Ad, Od, Rd, Id].concat(e._t, [Ed]);
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
      var s = Nd(e, t).mutate(a), d = "translate3d(".concat(-1 * s, "px, 0px, 0px)");
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
function Pd(e, t, r) {
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
var dl = !1;
try {
  var Go = Object.defineProperty({}, "passive", {
    get: function() {
      dl = !0;
    }
  });
  window.addEventListener("testPassive", null, Go), window.removeEventListener("testPassive", null, Go);
} catch {
}
var wi = dl, Kn = ["touchstart", "mousedown"], Yo = ["touchmove", "mousemove"], Vo = ["touchend", "touchcancel", "mouseup", "mouseleave"], Xo = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Dd(e, t, r) {
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
    start: function(_) {
      if (!g && !e.disabled) {
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
        var x = e.settings, D = x.touchAngle, z = x.touchRatio, T = x.classes, k = this.touches(_), N = wt(k.pageX) - s, H = wt(k.pageY) - d, U = Math.abs(N << 2), G = Math.abs(H << 2), q = Math.sqrt(U + G), C = Math.sqrt(G);
        if (a = Math.asin(C / q), a * 180 / Math.PI < D)
          _.stopPropagation(), t.Move.make(N * ud(z)), t.Html.root.classList.add(T.dragging), r.emit("swipe.move");
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
        var x = e.settings, D = x.perSwipe, z = x.touchAngle, T = x.classes, k = this.touches(_), N = this.threshold(_), H = k.pageX - s, U = a * 180 / Math.PI;
        this.enable(), H > N && U < z ? t.Run.make(t.Direction.resolve("".concat(D, "<"))) : H < -N && U < z ? t.Run.make(t.Direction.resolve("".concat(D, ">"))) : t.Move.make(), t.Html.root.classList.remove(T.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var _ = this, x = e.settings, D = x.swipeThreshold, z = x.dragThreshold;
      D && n.on(Kn[0], t.Html.wrapper, function(T) {
        _.start(T);
      }, h), z && n.on(Kn[1], t.Html.wrapper, function(T) {
        _.start(T);
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
      var _ = this;
      n.on(Yo, t.Html.wrapper, xa(function(x) {
        _.move(x);
      }, e.settings.throttle), h);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(Yo, t.Html.wrapper, h);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var _ = this;
      n.on(Vo, t.Html.wrapper, function(x) {
        _.end(x);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(Vo, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(_) {
      return Xo.indexOf(_.type) > -1 ? _ : _.touches[0] || _.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(_) {
      var x = e.settings;
      return Xo.indexOf(_.type) > -1 ? x.dragThreshold : x.swipeThreshold;
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
function jd(e, t, r) {
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
function Fd(e, t, r) {
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
var Md = '[data-glide-el="controls[nav]"]', Pi = '[data-glide-el^="controls"]', zd = "".concat(Pi, ' [data-glide-dir*="<"]'), Hd = "".concat(Pi, ' [data-glide-dir*=">"]');
function $d(e, t, r) {
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
      this._n = t.Html.root.querySelectorAll(Md), this._c = t.Html.root.querySelectorAll(Pi), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(zd),
        next: t.Html.root.querySelectorAll(Hd)
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
      h && (h.classList.add(g.classes.nav.active), cl(h).forEach(function(f) {
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
      h.forEach(function(_) {
        vi(_).forEach(function(x) {
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
      for (var d = e.settings, g = arguments.length, h = new Array(g), f = 0; f < g; f++)
        h[f] = arguments[f];
      h.forEach(function(_) {
        vi(_).forEach(function(x) {
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
function Ud(e, t, r) {
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
function Bd(e, t, r) {
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
      this._e && (this.enable(), e.settings.autoplay && ul(this._i) && (this._i = setInterval(function() {
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
function Ko(e) {
  return Gr(e) ? dd(e) : (vr("Breakpoints option must be an object"), {});
}
function Wd(e, t, r) {
  var n = new Ar(), a = e.settings, s = Ko(a.breakpoints), d = Object.assign({}, a), g = {
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
    s = Ko(s), d = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), g;
}
var qd = {
  // Required
  Html: yd,
  Translate: Ld,
  Transition: Pd,
  Direction: Cd,
  Peek: bd,
  Sizes: wd,
  Gaps: md,
  Move: vd,
  Clones: kd,
  Resize: xd,
  Build: Sd,
  Run: hd,
  // Optional
  Swipe: Dd,
  Images: jd,
  Anchors: Fd,
  Controls: $d,
  Keyboard: Ud,
  Autoplay: Bd,
  Breakpoints: Wd
}, Gd = /* @__PURE__ */ function(e) {
  rd(r, e);
  var t = od(r);
  function r() {
    return Sa(this, r), t.apply(this, arguments);
  }
  return ka(r, [{
    key: "mount",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return sa(qr(r.prototype), "mount", this).call(this, Object.assign({}, qd, n));
    }
  }]), r;
}(pd);
function Yd(e) {
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
function Vd(e = 1, t, r = !0, n) {
  const { perViewSm: a, perViewMd: s, perViewLg: d } = Yd(e), g = r ? 24 : 0, h = r ? { before: 48, after: 48 } : 0, f = r ? { before: 124, after: 124 } : 0;
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
function Xd(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), a = e.querySelector(".glide__arrow--next"), s = e.querySelector(".glide__track"), d = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || a)) return;
  const g = ["slider-start", "slider-mid", "slider-end"], h = "glide__arrow--disabled";
  s == null || s.classList.remove(...g), d == null || d.classList.remove(...g), t === 0 ? (s == null || s.classList.add("slider-start"), d == null || d.classList.add("slider-start"), n == null || n.classList.add(h), n == null || n.setAttribute("aria-disabled", "true"), a == null || a.classList.remove(h), a == null || a.setAttribute("aria-disabled", "false")) : t >= r - 1 ? (s == null || s.classList.add("slider-end"), d == null || d.classList.add("slider-end"), n == null || n.classList.remove(h), n == null || n.setAttribute("aria-disabled", "false"), a == null || a.classList.add(h), a == null || a.setAttribute("aria-disabled", "true")) : (s == null || s.classList.add("slider-mid"), d == null || d.classList.add("slider-mid"), n == null || n.classList.remove(h), a == null || a.classList.remove(h), n == null || n.setAttribute("aria-disabled", "false"), a == null || a.setAttribute("aria-disabled", "false"));
}
function Kd(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), a = t, s = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((d, g) => {
    g < a || g > s ? (d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("inert", "")) : (d.setAttribute("aria-hidden", "false"), d.removeAttribute("tabindex"), d.removeAttribute("inert"));
  });
}
function Jd({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: a,
  hasPeek: s = !0,
  isDraggable: d
}) {
  const g = Vd(t, n, s, d), h = new Gd(`#${e}`, g);
  let f = document.querySelector(`#${e}`);
  return f.addEventListener("keyup", (_) => {
    const x = _;
    x.keyCode === 39 ? h.go(">") : x.keyCode === 37 ? h.go("<") : x.keyCode === 13 && h.go(document.activeElement.dataset.glideDir);
  }), h.on("build.before", () => {
    f = document.querySelector(`#${e}`), f && f.classList.add("slider-start");
  }), h.on("move", () => {
    if (f = document.querySelector(`#${e}`), !f) return;
    const _ = h.index;
    Kd(f, _, t);
    const x = f.querySelector(".navigation-slider"), D = f.querySelector(".image-navigator-images");
    if (x && D) {
      const z = x.querySelectorAll(
        ".bullet-image-container"
      ), T = x.clientWidth, k = 82, N = z[_], H = D.getBoundingClientRect().x, U = x.getBoundingClientRect().x - H, G = N.getBoundingClientRect().x - H, q = N.getBoundingClientRect().x + N.getBoundingClientRect().width - H;
      if (_ === 0 || G <= 0 + k)
        x.style.left = `${U - G + k}px`;
      else if (q >= T - k) {
        const C = q - T;
        x.style.left = `${U - C - k}px`;
      }
    }
    Xd(f, _, r), f.setAttribute("data-current-index", _), a && a(_);
  }), h.mount(), h;
}
function Zd(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const fl = ({
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
  hasNavButtons: _ = !0,
  hasPositionIndicators: x = !0,
  imageAutoSize: D = !0,
  onItemClick: z = () => null,
  hasPeek: T = !0,
  isDraggable: k = !0,
  hasShadow: N = !0
}) => {
  const H = `glide-${Math.ceil(Math.random() * 1e4)}`, U = Zd(n.length, e);
  return Er(() => {
    Jd({
      instanceName: H,
      perView: e,
      buttonCount: U,
      isFullWidth: h,
      onItemClick: z,
      hasPeek: T,
      isDraggable: k
    });
  }, [
    H,
    e,
    U,
    h,
    z,
    T,
    k
  ]), /* @__PURE__ */ F.jsxs(
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
        /* @__PURE__ */ F.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ F.jsx(ll, { carouselItems: n }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ F.jsx(s, { instanceName: H })
        ) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
          x && /* @__PURE__ */ F.jsx(nl, { buttonCount: U }),
          _ && /* @__PURE__ */ F.jsx(sl, {})
        ] })
      ]
    }
  );
};
fl.propTypes = {
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
const Qd = ({
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
  tags: _
}, x, D, z) => {
  var T;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ F.jsx(
      gr,
      {
        type: x,
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
        tags: _
      }
    )
  };
}, pl = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: a = !1,
  width: s = void 0,
  maxWidth: d = void 0,
  imageAutoSize: g = !0
}) => {
  const h = parseInt(`${e}`, 10), [f, _] = Hr(h), x = 1024, D = 768;
  Er(() => {
    const k = () => {
      const N = window.innerWidth;
      let H;
      switch (h) {
        case 3:
          N > x ? H = 3 : N > D ? H = 2 : H = 1;
          break;
        case 2:
          H = N < D ? 1 : 2;
          break;
        default:
          H = 1;
          break;
      }
      _(H);
    };
    return k(), window.addEventListener("resize", k), () => window.removeEventListener("resize", k);
  }, [h]);
  const z = t.map(
    (k) => Qd(k, r, a, n)
  ), T = t.length > f;
  return /* @__PURE__ */ F.jsx(
    fl,
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
pl.propTypes = {
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
var Jn = {}, Jo;
function ef() {
  if (Jo) return Jn;
  Jo = 1;
  var e = Es;
  return Jn.createRoot = e.createRoot, Jn.hydrateRoot = e.hydrateRoot, Jn;
}
ef();
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const {
  entries: hl,
  setPrototypeOf: Zo,
  isFrozen: tf,
  getPrototypeOf: rf,
  getOwnPropertyDescriptor: nf
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
const Zn = Et(Array.prototype.forEach), af = Et(Array.prototype.lastIndexOf), Qo = Et(Array.prototype.pop), fn = Et(Array.prototype.push), of = Et(Array.prototype.splice), ua = Et(String.prototype.toLowerCase), Ga = Et(String.prototype.toString), Ya = Et(String.prototype.match), pn = Et(String.prototype.replace), sf = Et(String.prototype.indexOf), lf = Et(String.prototype.trim), Ft = Et(Object.prototype.hasOwnProperty), xt = Et(RegExp.prototype.test), hn = uf(TypeError);
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
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ua;
  Zo && Zo(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (tf(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function cf(e) {
  for (let t = 0; t < e.length; t++)
    Ft(e, t) || (e[t] = null);
  return e;
}
function ur(e) {
  const t = la(null);
  for (const [r, n] of hl(e))
    Ft(e, r) && (Array.isArray(n) ? t[r] = cf(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = ur(n) : t[r] = n);
  return t;
}
function mn(e, t) {
  for (; e !== null; ) {
    const n = nf(e, t);
    if (n) {
      if (n.get)
        return Et(n.get);
      if (typeof n.value == "function")
        return Et(n.value);
    }
    e = rf(e);
  }
  function r() {
    return null;
  }
  return r;
}
const es = Ct(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Va = Ct(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Xa = Ct(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), df = Ct(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ka = Ct(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ff = Ct(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ts = Ct(["#text"]), rs = Ct(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ja = Ct(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ns = Ct(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Qn = Ct(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), pf = Ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm), hf = Ut(/<%[\w\W]*|[\w\W]*%>/gm), mf = Ut(/\$\{[\w\W]*/gm), gf = Ut(/^data-[\-\w.\u00B7-\uFFFF]+$/), yf = Ut(/^aria-[\-\w]+$/), ml = Ut(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), bf = Ut(/^(?:\w+script|data):/i), vf = Ut(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), gl = Ut(/^html$/i), wf = Ut(/^[a-z][.\w]*(-[.\w]+)+$/i);
var as = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: yf,
  ATTR_WHITESPACE: vf,
  CUSTOM_ELEMENT: wf,
  DATA_ATTR: gf,
  DOCTYPE_NAME: gl,
  ERB_EXPR: hf,
  IS_ALLOWED_URI: ml,
  IS_SCRIPT_OR_DATA: bf,
  MUSTACHE_EXPR: pf,
  TMPLIT_EXPR: mf
});
const gn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Sf = function() {
  return typeof window > "u" ? null : window;
}, kf = function(t, r) {
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
}, is = function() {
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
function yl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Sf();
  const t = (y) => yl(y);
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
    NamedNodeMap: _ = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: x,
    DOMParser: D,
    trustedTypes: z
  } = e, T = h.prototype, k = mn(T, "cloneNode"), N = mn(T, "remove"), H = mn(T, "nextSibling"), U = mn(T, "childNodes"), G = mn(T, "parentNode");
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
    importNode: Ye
  } = n;
  let ce = is();
  t.isSupported = typeof hl == "function" && typeof G == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Ce,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: Be
  } = as;
  let {
    IS_ALLOWED_URI: et
  } = as, se = null;
  const $ = Ae({}, [...es, ...Va, ...Xa, ...Ka, ...ts]);
  let O = null;
  const M = Ae({}, [...rs, ...Ja, ...ns, ...Qn]);
  let j = Object.seal(la(null, {
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
  let ie = !0, Q = !0, te = !1, X = !0, ne = !1, de = !0, J = !1, ge = !1, re = !1, le = !1, $e = !1, ue = !1, ot = !0, We = !1;
  const ke = "user-content-";
  let Y = !0, oe = !1, Xe = {}, Le = null;
  const Pe = Ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let rr = null;
  const nr = Ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const Wt = Ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ht = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let pt = nt, qt = !1, Gt = null;
  const mt = Ae({}, [ht, At, nt], Ga);
  let St = Ae({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Ae({}, ["annotation-xml"]);
  const De = Ae({}, ["title", "style", "font", "a", "script"]);
  let ut = null;
  const ar = ["application/xhtml+xml", "text/html"], Yt = "text/html";
  let fe = null, st = null;
  const Ot = r.createElement("form"), ir = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, Rt = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(st && st === v)) {
      if ((!v || typeof v != "object") && (v = {}), v = ur(v), ut = // eslint-disable-next-line unicorn/prefer-includes
      ar.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? Yt : v.PARSER_MEDIA_TYPE, fe = ut === "application/xhtml+xml" ? Ga : ua, se = Ft(v, "ALLOWED_TAGS") ? Ae({}, v.ALLOWED_TAGS, fe) : $, O = Ft(v, "ALLOWED_ATTR") ? Ae({}, v.ALLOWED_ATTR, fe) : M, Gt = Ft(v, "ALLOWED_NAMESPACES") ? Ae({}, v.ALLOWED_NAMESPACES, Ga) : mt, Bt = Ft(v, "ADD_URI_SAFE_ATTR") ? Ae(ur(Wt), v.ADD_URI_SAFE_ATTR, fe) : Wt, rr = Ft(v, "ADD_DATA_URI_TAGS") ? Ae(ur(nr), v.ADD_DATA_URI_TAGS, fe) : nr, Le = Ft(v, "FORBID_CONTENTS") ? Ae({}, v.FORBID_CONTENTS, fe) : Pe, b = Ft(v, "FORBID_TAGS") ? Ae({}, v.FORBID_TAGS, fe) : ur({}), ee = Ft(v, "FORBID_ATTR") ? Ae({}, v.FORBID_ATTR, fe) : ur({}), Xe = Ft(v, "USE_PROFILES") ? v.USE_PROFILES : !1, ie = v.ALLOW_ARIA_ATTR !== !1, Q = v.ALLOW_DATA_ATTR !== !1, te = v.ALLOW_UNKNOWN_PROTOCOLS || !1, X = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = v.SAFE_FOR_TEMPLATES || !1, de = v.SAFE_FOR_XML !== !1, J = v.WHOLE_DOCUMENT || !1, le = v.RETURN_DOM || !1, $e = v.RETURN_DOM_FRAGMENT || !1, ue = v.RETURN_TRUSTED_TYPE || !1, re = v.FORCE_BODY || !1, ot = v.SANITIZE_DOM !== !1, We = v.SANITIZE_NAMED_PROPS || !1, Y = v.KEEP_CONTENT !== !1, oe = v.IN_PLACE || !1, et = v.ALLOWED_URI_REGEXP || ml, pt = v.NAMESPACE || nt, St = v.MATHML_TEXT_INTEGRATION_POINTS || St, gt = v.HTML_INTEGRATION_POINTS || gt, j = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && ir(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && ir(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), $e && (le = !0), Xe && (se = Ae({}, ts), O = la(null), Xe.html === !0 && (Ae(se, es), Ae(O, rs)), Xe.svg === !0 && (Ae(se, Va), Ae(O, Ja), Ae(O, Qn)), Xe.svgFilters === !0 && (Ae(se, Xa), Ae(O, Ja), Ae(O, Qn)), Xe.mathMl === !0 && (Ae(se, Ka), Ae(O, ns), Ae(O, Qn))), Ft(v, "ADD_TAGS") || (E.tagCheck = null), Ft(v, "ADD_ATTR") || (E.attributeCheck = null), v.ADD_TAGS && (typeof v.ADD_TAGS == "function" ? E.tagCheck = v.ADD_TAGS : (se === $ && (se = ur(se)), Ae(se, v.ADD_TAGS, fe))), v.ADD_ATTR && (typeof v.ADD_ATTR == "function" ? E.attributeCheck = v.ADD_ATTR : (O === M && (O = ur(O)), Ae(O, v.ADD_ATTR, fe))), v.ADD_URI_SAFE_ATTR && Ae(Bt, v.ADD_URI_SAFE_ATTR, fe), v.FORBID_CONTENTS && (Le === Pe && (Le = ur(Le)), Ae(Le, v.FORBID_CONTENTS, fe)), v.ADD_FORBID_CONTENTS && (Le === Pe && (Le = ur(Le)), Ae(Le, v.ADD_FORBID_CONTENTS, fe)), Y && (se["#text"] = !0), J && Ae(se, ["html", "head", "body"]), se.table && (Ae(se, ["tbody"]), delete b.tbody), v.TRUSTED_TYPES_POLICY) {
        if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        q = v.TRUSTED_TYPES_POLICY, C = q.createHTML("");
      } else
        q === void 0 && (q = kf(z, a)), q !== null && typeof C == "string" && (C = q.createHTML(""));
      Ct && Ct(v), st = v;
    }
  }, Vt = Ae({}, [...Va, ...Xa, ...df]), or = Ae({}, [...Ka, ...ff]), Sr = function(v) {
    let A = G(v);
    (!A || !A.tagName) && (A = {
      namespaceURI: pt,
      tagName: "template"
    });
    const V = ua(v.tagName), ye = ua(A.tagName);
    return Gt[v.namespaceURI] ? v.namespaceURI === At ? A.namespaceURI === nt ? V === "svg" : A.namespaceURI === ht ? V === "svg" && (ye === "annotation-xml" || St[ye]) : !!Vt[V] : v.namespaceURI === ht ? A.namespaceURI === nt ? V === "math" : A.namespaceURI === At ? V === "math" && gt[ye] : !!or[V] : v.namespaceURI === nt ? A.namespaceURI === At && !gt[ye] || A.namespaceURI === ht && !St[ye] ? !1 : !or[V] && (De[V] || !Vt[V]) : !!(ut === "application/xhtml+xml" && Gt[v.namespaceURI]) : !1;
  }, at = function(v) {
    fn(t.removed, {
      element: v
    });
    try {
      G(v).removeChild(v);
    } catch {
      N(v);
    }
  }, ct = function(v, A) {
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
      const we = Ya(v, /^[\r\n\t ]+/);
      V = we && we[0];
    }
    ut === "application/xhtml+xml" && pt === nt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const ye = q ? q.createHTML(v) : v;
    if (pt === nt)
      try {
        A = new D().parseFromString(ye, ut);
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
    return v instanceof x && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof _) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
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
    if (Ze(ce.beforeSanitizeElements, v, null), zt(v))
      return at(v), !0;
    const V = fe(v.nodeName);
    if (Ze(ce.uponSanitizeElement, v, {
      tagName: V,
      allowedTags: se
    }), de && v.hasChildNodes() && !Ht(v.firstElementChild) && xt(/<[/\w!]/g, v.innerHTML) && xt(/<[/\w!]/g, v.textContent) || v.nodeType === gn.progressingInstruction || de && v.nodeType === gn.comment && xt(/<[/\w]/g, v.data))
      return at(v), !0;
    if (!(E.tagCheck instanceof Function && E.tagCheck(V)) && (!se[V] || b[V])) {
      if (!b[V] && pr(V) && (j.tagNameCheck instanceof RegExp && xt(j.tagNameCheck, V) || j.tagNameCheck instanceof Function && j.tagNameCheck(V)))
        return !1;
      if (Y && !Le[V]) {
        const ye = G(v) || v.parentNode, ve = U(v) || v.childNodes;
        if (ve && ye) {
          const we = ve.length;
          for (let Me = we - 1; Me >= 0; --Me) {
            const Ve = k(ve[Me], !0);
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
    }), v.textContent = A)), Ze(ce.afterSanitizeElements, v, null), !1);
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
              !(pr(v) && (j.tagNameCheck instanceof RegExp && xt(j.tagNameCheck, v) || j.tagNameCheck instanceof Function && j.tagNameCheck(v)) && (j.attributeNameCheck instanceof RegExp && xt(j.attributeNameCheck, A) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(A, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              A === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && xt(j.tagNameCheck, V) || j.tagNameCheck instanceof Function && j.tagNameCheck(V)))
            ) return !1;
          } else if (!Bt[A]) {
            if (!xt(et, pn(V, Oe, ""))) {
              if (!((A === "src" || A === "xlink:href" || A === "href") && v !== "script" && sf(V, "data:") === 0 && rr[v])) {
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
    return v !== "annotation-xml" && Ya(v, Be);
  }, Xt = function(v) {
    Ze(ce.beforeSanitizeAttributes, v, null);
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
      let Ue = we === "value" ? Ke : lf(Ke);
      if (V.attrName = yt, V.attrValue = Ue, V.keepAttr = !0, V.forceKeepAttr = void 0, Ze(ce.uponSanitizeAttribute, v, V), Ue = V.attrValue, We && (yt === "id" || yt === "name") && (ct(we, v), Ue = ke + Ue), de && xt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ue)) {
        ct(we, v);
        continue;
      }
      if (yt === "attributename" && Ya(Ue, "href")) {
        ct(we, v);
        continue;
      }
      if (V.forceKeepAttr)
        continue;
      if (!V.keepAttr) {
        ct(we, v);
        continue;
      }
      if (!X && xt(/\/>/i, Ue)) {
        ct(we, v);
        continue;
      }
      ne && Zn([me, Re, Ne], (Or) => {
        Ue = pn(Ue, Or, " ");
      });
      const Nt = fe(v.nodeName);
      if (!It(Nt, yt, Ue)) {
        ct(we, v);
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
          Me ? v.setAttributeNS(Me, we, Ue) : v.setAttribute(we, Ue), zt(v) ? at(v) : Qo(t.removed);
        } catch {
          ct(we, v);
        }
    }
    Ze(ce.afterSanitizeAttributes, v, null);
  }, sr = function y(v) {
    let A = null;
    const V = Mt(v);
    for (Ze(ce.beforeSanitizeShadowDOM, v, null); A = V.nextNode(); )
      Ze(ce.uponSanitizeShadowNode, A, null), fr(A), Xt(A), A.content instanceof s && y(A.content);
    Ze(ce.afterSanitizeShadowDOM, v, null);
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
        return q && ue ? q.createHTML(y) : y;
      if (A = dr(y), !A)
        return le ? null : ue ? C : "";
    }
    A && re && at(A.firstChild);
    const we = Mt(oe ? y : A);
    for (; ye = we.nextNode(); )
      fr(ye), Xt(ye), ye.content instanceof s && sr(ye.content);
    if (oe)
      return y;
    if (le) {
      if ($e)
        for (ve = Ie.call(A.ownerDocument); A.firstChild; )
          ve.appendChild(A.firstChild);
      else
        ve = A;
      return (O.shadowroot || O.shadowrootmode) && (ve = Ye.call(n, ve, !0)), ve;
    }
    let Me = J ? A.outerHTML : A.innerHTML;
    return J && se["!doctype"] && A.ownerDocument && A.ownerDocument.doctype && A.ownerDocument.doctype.name && xt(gl, A.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + A.ownerDocument.doctype.name + `>
` + Me), ne && Zn([me, Re, Ne], (Ve) => {
      Me = pn(Me, Ve, " ");
    }), q && ue ? q.createHTML(Me) : Me;
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
    typeof v == "function" && fn(ce[y], v);
  }, t.removeHook = function(y, v) {
    if (v !== void 0) {
      const A = af(ce[y], v);
      return A === -1 ? void 0 : of(ce[y], A, 1)[0];
    }
    return Qo(ce[y]);
  }, t.removeHooks = function(y) {
    ce[y] = [];
  }, t.removeAllHooks = function() {
    ce = is();
  }, t;
}
yl();
var Za = { exports: {} }, Qa, os;
function xf() {
  if (os) return Qa;
  os = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qa = e, Qa;
}
var ei, ss;
function _f() {
  if (ss) return ei;
  ss = 1;
  var e = /* @__PURE__ */ xf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ei = function() {
    function n(d, g, h, f, _, x) {
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
  }, ei;
}
var ls;
function Tf() {
  return ls || (ls = 1, Za.exports = /* @__PURE__ */ _f()()), Za.exports;
}
var Cf = /* @__PURE__ */ Tf();
const dt = /* @__PURE__ */ As(Cf);
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
function Ef() {
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
Ef();
({
  ...Cn.propTypes
});
const bl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ it.jsx("div", { className: t, ...r, children: /* @__PURE__ */ it.jsx("div", { className: "row", children: e }) });
bl.propTypes = {
  children: Cn.propTypes.children
};
({
  ...bl.propTypes
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
}, cs = ["newsUnits", "interests", "audiences", "eventTypes"], Af = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < cs.length; n += 1) {
    const a = cs[n];
    for (let s = 0; s < r.length; s += 1) {
      const d = r[s], h = (e[a] || "").match(new RegExp(d, "gi"));
      if ((h == null ? void 0 : h.length) > 0) return !0;
    }
  }
  return !1;
}, ds = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, Of = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_alt,
  title: ds(e.title, 80),
  content: ds(e == null ? void 0 : e.clas_teaser, 140),
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
    Js,
    {
      renderHeader: t && r ? /* @__PURE__ */ it.jsx(
        el,
        {
          header: t,
          ctaButton: r,
          defaultProps: Sn
        }
      ) : null,
      renderBody: /* @__PURE__ */ it.jsx(tl, { children: e }),
      dataTransformer: Of,
      dataFilter: Af,
      dataSource: d,
      defaultProps: Sn,
      noFeedText: "No news to show.",
      maxItems: a
    }
  );
};
Mr.propTypes = {
  header: Ni,
  ctaButton: Li,
  dataSource: Qs,
  maxItems: dt.number,
  children: dt.element
};
var ri = { exports: {} }, Ge = {};
var fs;
function Rf() {
  if (fs) return Ge;
  fs = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), z = Symbol.for("react.client.reference");
  function T(k) {
    if (typeof k == "object" && k !== null) {
      var N = k.$$typeof;
      switch (N) {
        case e:
          switch (k = k.type, k) {
            case r:
            case a:
            case n:
            case h:
            case f:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case d:
                case g:
                case x:
                case _:
                  return k;
                case s:
                  return k;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return Ge.ContextConsumer = s, Ge.ContextProvider = d, Ge.Element = e, Ge.ForwardRef = g, Ge.Fragment = r, Ge.Lazy = x, Ge.Memo = _, Ge.Portal = t, Ge.Profiler = a, Ge.StrictMode = n, Ge.Suspense = h, Ge.SuspenseList = f, Ge.isContextConsumer = function(k) {
    return T(k) === s;
  }, Ge.isContextProvider = function(k) {
    return T(k) === d;
  }, Ge.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, Ge.isForwardRef = function(k) {
    return T(k) === g;
  }, Ge.isFragment = function(k) {
    return T(k) === r;
  }, Ge.isLazy = function(k) {
    return T(k) === x;
  }, Ge.isMemo = function(k) {
    return T(k) === _;
  }, Ge.isPortal = function(k) {
    return T(k) === t;
  }, Ge.isProfiler = function(k) {
    return T(k) === a;
  }, Ge.isStrictMode = function(k) {
    return T(k) === n;
  }, Ge.isSuspense = function(k) {
    return T(k) === h;
  }, Ge.isSuspenseList = function(k) {
    return T(k) === f;
  }, Ge.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === a || k === n || k === h || k === f || k === D || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === _ || k.$$typeof === d || k.$$typeof === s || k.$$typeof === g || k.$$typeof === z || k.getModuleId !== void 0);
  }, Ge.typeOf = T, Ge;
}
var ps;
function If() {
  return ps || (ps = 1, ri.exports = /* @__PURE__ */ Rf()), ri.exports;
}
var vl = /* @__PURE__ */ If();
function Nf(e) {
  function t($, O, M, j, b) {
    for (var ee = 0, E = 0, ie = 0, Q = 0, te, X, ne = 0, de = 0, J, ge = J = te = 0, re = 0, le = 0, $e = 0, ue = 0, ot = M.length, We = ot - 1, ke, Y = "", oe = "", Xe = "", Le = "", Pe; re < ot; ) {
      if (X = M.charCodeAt(re), re === We && E + Q + ie + ee !== 0 && (E !== 0 && (X = E === 47 ? 10 : 47), Q = ie = ee = 0, ot++, We++), E + Q + ie + ee === 0) {
        if (re === We && (0 < le && (Y = Y.replace(D, "")), 0 < Y.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Y += M.charAt(re);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (Y = Y.trim(), te = Y.charCodeAt(0), J = 1, ue = ++re; re < ot; ) {
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
            switch (J = M.substring(ue, re), te === 0 && (te = (Y = Y.replace(x, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (Y = Y.replace(D, "")), X = Y.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = O;
                    break;
                  default:
                    le = lt;
                }
                if (J = t(O, le, J, X, b + 1), ue = J.length, 0 < Oe && (le = r(lt, Y, $e), Pe = g(3, J, le, O, Re, me, ue, X, b, j), Y = le.join(""), Pe !== void 0 && (ue = (J = Pe.trim()).length) === 0 && (X = 0, J = "")), 0 < ue) switch (X) {
                  case 115:
                    Y = Y.replace(ae, d);
                  case 100:
                  case 109:
                  case 45:
                    J = Y + "{" + J + "}";
                    break;
                  case 107:
                    Y = Y.replace(U, "$1 $2"), J = Y + "{" + J + "}", J = Ce === 1 || Ce === 2 && s("@" + J, 3) ? "@-webkit-" + J + "@" + J : "@" + J;
                    break;
                  default:
                    J = Y + J, j === 112 && (J = (oe += J, ""));
                }
                else J = "";
                break;
              default:
                J = t(O, r(O, Y, $e), J, j, b + 1);
            }
            Xe += J, J = $e = le = ge = te = 0, Y = "", X = M.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (Y = (0 < le ? Y.replace(D, "") : Y).trim(), 1 < (ue = Y.length)) switch (ge === 0 && (te = Y.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ue = (Y = Y.replace(" ", ":")).length), 0 < Oe && (Pe = g(1, Y, O, $, Re, me, oe.length, j, b, j)) !== void 0 && (ue = (Y = Pe.trim()).length) === 0 && (Y = "\0\0"), te = Y.charCodeAt(0), X = Y.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  Le += Y + M.charAt(re);
                  break;
                }
              default:
                Y.charCodeAt(ue - 1) !== 58 && (oe += a(Y, te, X, Y.charCodeAt(2)));
            }
            $e = le = ge = te = 0, Y = "", X = M.charCodeAt(++re);
        }
      }
      switch (X) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + te === 0 && j !== 107 && 0 < Y.length && (le = 1, Y += "\0"), 0 < Oe * et && g(0, Y, O, $, Re, me, oe.length, j, b, j), me = 1, Re++;
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
                      ue = re, E = 42;
                  }
                  break;
                case 42:
                  X === 47 && ne === 42 && ue + 2 !== re && (M.charCodeAt(ue + 2) === 33 && (oe += M.substring(ue, re + 1)), ke = "", E = 0);
              }
          }
          E === 0 && (Y += ke);
      }
      de = ne, ne = X, re++;
    }
    if (ue = oe.length, 0 < ue) {
      if (le = O, 0 < Oe && (Pe = g(2, oe, le, $, Re, me, ue, j, b, j), Pe !== void 0 && (oe = Pe).length === 0)) return Le + oe + Xe;
      if (oe = le.join(",") + "{" + oe + "}", Ce * Ne !== 0) {
        switch (Ce !== 2 || s(oe, 2) || (Ne = 0), Ne) {
          case 111:
            oe = oe.replace(q, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(G, "::-webkit-input-$1") + oe.replace(G, "::-moz-$1") + oe.replace(G, ":-ms-input-$1") + oe;
        }
        Ne = 0;
      }
    }
    return Le + oe + Xe;
  }
  function r($, O, M) {
    var j = O.trim().split(N);
    O = j;
    var b = j.length, ee = $.length;
    switch (ee) {
      case 0:
      case 1:
        var E = 0;
        for ($ = ee === 0 ? "" : $[0] + " "; E < b; ++E)
          O[E] = n($, O[E], M).trim();
        break;
      default:
        var ie = E = 0;
        for (O = []; E < b; ++E)
          for (var Q = 0; Q < ee; ++Q)
            O[ie++] = n($[Q] + " ", j[E], M).trim();
    }
    return O;
  }
  function n($, O, M) {
    var j = O.charCodeAt(0);
    switch (33 > j && (j = (O = O.trim()).charCodeAt(0)), j) {
      case 38:
        return O.replace(H, "$1" + $.trim());
      case 58:
        return $.trim() + O.replace(H, "$1" + $.trim());
      default:
        if (0 < 1 * M && 0 < O.indexOf("\f")) return O.replace(H, ($.charCodeAt(0) === 58 ? "" : "$1") + $.trim());
    }
    return $ + O;
  }
  function a($, O, M, j) {
    var b = $ + ";", ee = 2 * O + 3 * M + 4 * j;
    if (ee === 944) {
      $ = b.indexOf(":", 9) + 1;
      var E = b.substring($, b.length - 1).trim();
      return E = b.substring(0, $).trim() + E + ";", Ce === 1 || Ce === 2 && s(E, 1) ? "-webkit-" + E + E : E;
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
        if (0 < b.indexOf("image-set(", 11)) return b.replace(ce, "$1-webkit-$2") + b;
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
        switch (O = (b = $).length - 10, E = (b.charCodeAt(O) === 33 ? b.substring(0, O) : b).substring($.indexOf(":", 7) + 1).trim(), ee = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
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
        if (Ye.test($) === !0) return (E = $.substring($.indexOf(":") + 1)).charCodeAt(0) === 115 ? a($.replace("stretch", "fill-available"), O, M, j).replace(":fill-available", ":stretch") : b.replace(E, "-webkit-" + E) + b.replace(E, "-moz-" + E.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, M + j === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + b;
    }
    return b;
  }
  function s($, O) {
    var M = $.indexOf(O === 1 ? ":" : "{"), j = $.substring(0, O !== 3 ? M : 10);
    return M = $.substring(M + 1, $.length - 1), Be(O !== 2 ? j : j.replace(je, "$1"), M, O);
  }
  function d($, O) {
    var M = a(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
    return M !== O + ";" ? M.replace(Se, " or ($1)").substring(4) : "(" + O + ")";
  }
  function g($, O, M, j, b, ee, E, ie, Q, te) {
    for (var X = 0, ne = O, de; X < Oe; ++X)
      switch (de = Fe[X].call(_, $, ne, M, j, b, ee, E, ie, Q, te)) {
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
  function h($) {
    switch ($) {
      case void 0:
      case null:
        Oe = Fe.length = 0;
        break;
      default:
        if (typeof $ == "function") Fe[Oe++] = $;
        else if (typeof $ == "object") for (var O = 0, M = $.length; O < M; ++O)
          h($[O]);
        else et = !!$ | 0;
    }
    return h;
  }
  function f($) {
    return $ = $.prefix, $ !== void 0 && (Be = null, $ ? typeof $ != "function" ? Ce = 1 : (Ce = 2, Be = $) : Ce = 0), f;
  }
  function _($, O) {
    var M = $;
    if (33 > M.charCodeAt(0) && (M = M.trim()), se = M, M = [se], 0 < Oe) {
      var j = g(-1, O, M, M, Re, me, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (O = j);
    }
    var b = t(lt, M, O, 0, 0);
    return 0 < Oe && (j = g(-2, b, M, M, Re, me, b.length, 0, 0, 0), j !== void 0 && (b = j)), se = "", Ne = 0, me = Re = 1, b;
  }
  var x = /^\0+/g, D = /[\0\r\f]/g, z = /: */g, T = /zoo|gra/, k = /([,: ])(transform)/g, N = /,\r+?/g, H = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, q = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, Se = /([\s\S]*?);/g, Ie = /-self|flex-/g, je = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ye = /stretch|:\s*\w+\-(?:conte|avail)/, ce = /([^-])(image-set\()/, me = 1, Re = 1, Ne = 0, Ce = 1, lt = [], Fe = [], Oe = 0, Be = null, et = 0, se = "";
  return _.use = h, _.set = f, e !== void 0 && f(e), _;
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
function Pf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Df = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, hs = /* @__PURE__ */ Pf(
  function(e) {
    return Df.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ni = { exports: {} }, He = {};
var ms;
function jf() {
  if (ms) return He;
  ms = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, D = e ? Symbol.for("react.suspense_list") : 60120, z = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function G(C) {
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
            case x:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case g:
                case _:
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
    return G(C) === f;
  }
  return He.AsyncMode = h, He.ConcurrentMode = f, He.ContextConsumer = g, He.ContextProvider = d, He.Element = t, He.ForwardRef = _, He.Fragment = n, He.Lazy = T, He.Memo = z, He.Portal = r, He.Profiler = s, He.StrictMode = a, He.Suspense = x, He.isAsyncMode = function(C) {
    return q(C) || G(C) === h;
  }, He.isConcurrentMode = q, He.isContextConsumer = function(C) {
    return G(C) === g;
  }, He.isContextProvider = function(C) {
    return G(C) === d;
  }, He.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, He.isForwardRef = function(C) {
    return G(C) === _;
  }, He.isFragment = function(C) {
    return G(C) === n;
  }, He.isLazy = function(C) {
    return G(C) === T;
  }, He.isMemo = function(C) {
    return G(C) === z;
  }, He.isPortal = function(C) {
    return G(C) === r;
  }, He.isProfiler = function(C) {
    return G(C) === s;
  }, He.isStrictMode = function(C) {
    return G(C) === a;
  }, He.isSuspense = function(C) {
    return G(C) === x;
  }, He.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === a || C === x || C === D || typeof C == "object" && C !== null && (C.$$typeof === T || C.$$typeof === z || C.$$typeof === d || C.$$typeof === g || C.$$typeof === _ || C.$$typeof === N || C.$$typeof === H || C.$$typeof === U || C.$$typeof === k);
  }, He.typeOf = G, He;
}
var gs;
function Ff() {
  return gs || (gs = 1, ni.exports = jf()), ni.exports;
}
var ai, ys;
function Mf() {
  if (ys) return ai;
  ys = 1;
  var e = Ff(), t = {
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
  var g = Object.defineProperty, h = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, _ = Object.getOwnPropertyDescriptor, x = Object.getPrototypeOf, D = Object.prototype;
  function z(T, k, N) {
    if (typeof k != "string") {
      if (D) {
        var H = x(k);
        H && H !== D && z(T, H, N);
      }
      var U = h(k);
      f && (U = U.concat(f(k)));
      for (var G = d(T), q = d(k), C = 0; C < U.length; ++C) {
        var ae = U[C];
        if (!r[ae] && !(N && N[ae]) && !(q && q[ae]) && !(G && G[ae])) {
          var Se = _(k, ae);
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
var zf = Mf();
const Hf = /* @__PURE__ */ As(zf);
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
var bs = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, xi = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !vl.typeOf(e);
}, ga = Object.freeze([]), Cr = Object.freeze({});
function kn(e) {
  return typeof e == "function";
}
function vs(e) {
  return e.displayName || e.name || "Component";
}
function ji(e) {
  return e && typeof e.styledComponentId == "string";
}
var Yr = typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_ATTR || vt.env.SC_ATTR) || "data-styled", Fi = typeof window < "u" && "HTMLElement" in window, $f = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && vt.env.REACT_APP_SC_DISABLE_SPEEDY : vt.env.SC_DISABLE_SPEEDY !== void 0 && vt.env.SC_DISABLE_SPEEDY !== "" ? vt.env.SC_DISABLE_SPEEDY !== "false" && vt.env.SC_DISABLE_SPEEDY : vt.env.NODE_ENV !== "production"));
function En(e) {
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
      for (var a = this.groupSizes, s = a.length, d = s; r >= d; ) (d <<= 1) < 0 && En(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(a), this.length = d;
      for (var g = s; g < d; g++) this.groupSizes[g] = 0;
    }
    for (var h = this.indexOfGroup(r + 1), f = 0, _ = n.length; f < _; f++) this.tag.insertRule(h, n[f]) && (this.groupSizes[r]++, h++);
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
}(), ca = /* @__PURE__ */ new Map(), ya = /* @__PURE__ */ new Map(), vn = 1, ea = function(e) {
  if (ca.has(e)) return ca.get(e);
  for (; ya.has(vn); ) vn++;
  var t = vn++;
  return ca.set(e, t), ya.set(t, e), t;
}, Bf = function(e) {
  return ya.get(e);
}, Wf = function(e, t) {
  t >= vn && (vn = t + 1), ca.set(e, t), ya.set(t, e);
}, qf = "style[" + Yr + '][data-styled-version="5.3.11"]', Gf = new RegExp("^" + Yr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Yf = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, Vf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var g = d.match(Gf);
      if (g) {
        var h = 0 | parseInt(g[1], 10), f = g[2];
        h !== 0 && (Wf(f, h), Yf(e, f, g[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Xf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, wl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(g) {
    for (var h = g.childNodes, f = h.length; f >= 0; f--) {
      var _ = h[f];
      if (_ && _.nodeType === 1 && _.hasAttribute(Yr)) return _;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Yr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Xf();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, Kf = function() {
  function e(r) {
    var n = this.element = wl(r);
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
}(), Jf = function() {
  function e(r) {
    var n = this.element = wl(r);
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
}(), Zf = function() {
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
}(), ws = Fi, Qf = { isServer: !Fi, useCSSOMInjection: !$f }, Sl = function() {
  function e(r, n, a) {
    r === void 0 && (r = Cr), n === void 0 && (n = {}), this.options = br({}, Qf, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Fi && ws && (ws = !1, function(s) {
      for (var d = document.querySelectorAll(qf), g = 0, h = d.length; g < h; g++) {
        var f = d[g];
        f && f.getAttribute(Yr) !== "active" && (Vf(s, f), f.parentNode && f.parentNode.removeChild(f));
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
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new Zf(d) : s ? new Kf(d) : new Jf(d), new Uf(r)));
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
        var g = Bf(d);
        if (g !== void 0) {
          var h = r.names.get(g), f = n.getGroup(d);
          if (h && f && h.size) {
            var _ = Yr + ".g" + d + '[id="' + g + '"]', x = "";
            h !== void 0 && h.forEach(function(D) {
              D.length > 0 && (x += D + ",");
            }), s += "" + f + _ + '{content:"' + x + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), ep = /(a)(d)/gi, Ss = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function _i(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ss(t % 52) + r;
  return (Ss(t % 52) + r).replace(ep, "$1-$2");
}
var Ur = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, kl = function(e) {
  return Ur(5381, e);
};
function tp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (kn(r) && !ji(r)) return !1;
  }
  return !0;
}
var rp = kl("5.3.11"), np = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && tp(t), this.componentId = r, this.baseHash = Ur(rp, r), this.baseStyle = n, Sl.registerId(r);
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
      for (var f = this.rules.length, _ = Ur(this.baseHash, n.hash), x = "", D = 0; D < f; D++) {
        var z = this.rules[D];
        if (typeof z == "string") x += z;
        else if (z) {
          var T = Vr(z, t, r, n), k = Array.isArray(T) ? T.join("") : T;
          _ = Ur(_, k + D), x += k;
        }
      }
      if (x) {
        var N = _i(_ >>> 0);
        if (!r.hasNameForId(a, N)) {
          var H = n(x, "." + N, void 0, a);
          r.insertRules(a, N, H);
        }
        s.push(N);
      }
    }
    return s.join(" ");
  }, e;
}(), ap = /^\s*\/\/.*$/gm, ip = [":", "[", ".", "#"];
function op(e) {
  var t, r, n, a, s = Cr, d = s.options, g = d === void 0 ? Cr : d, h = s.plugins, f = h === void 0 ? ga : h, _ = new Nf(g), x = [], D = /* @__PURE__ */ function(k) {
    function N(H) {
      if (H) try {
        k(H + "}");
      } catch {
      }
    }
    return function(H, U, G, q, C, ae, Se, Ie, je, Ye) {
      switch (H) {
        case 1:
          if (je === 0 && U.charCodeAt(0) === 64) return k(U + ";"), "";
          break;
        case 2:
          if (Ie === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return k(G[0] + U), "";
            default:
              return U + (Ye === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(N);
      }
    };
  }(function(k) {
    x.push(k);
  }), z = function(k, N, H) {
    return N === 0 && ip.indexOf(H[r.length]) !== -1 || H.match(a) ? k : "." + t;
  };
  function T(k, N, H, U) {
    U === void 0 && (U = "&");
    var G = k.replace(ap, ""), q = N && H ? H + " " + N + " { " + G + " }" : G;
    return t = U, r = N, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), _(H || !N ? "" : N, q);
  }
  return _.use([].concat(f, [function(k, N, H) {
    k === 2 && H.length && H[0].lastIndexOf(r) > 0 && (H[0] = H[0].replace(n, z));
  }, D, function(k) {
    if (k === -2) {
      var N = x;
      return x = [], N;
    }
  }])), T.hash = f.length ? f.reduce(function(k, N) {
    return N.name || En(15), Ur(k, N.name);
  }, 5381).toString() : "", T;
}
var xl = ft.createContext();
xl.Consumer;
var _l = ft.createContext(), sp = (_l.Consumer, new Sl()), Ti = op();
function lp() {
  return wr(xl) || sp;
}
function up() {
  return wr(_l) || Ti;
}
var cp = function() {
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
}(), dp = /([A-Z])/, fp = /([A-Z])/g, pp = /^ms-/, hp = function(e) {
  return "-" + e.toLowerCase();
};
function ks(e) {
  return dp.test(e) ? e.replace(fp, hp).replace(pp, "-ms-") : e;
}
var xs = function(e) {
  return e == null || e === !1 || e === "";
};
function Vr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, g = e.length; d < g; d += 1) (a = Vr(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (xs(e)) return "";
  if (ji(e)) return "." + e.styledComponentId;
  if (kn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return Vr(h, t, r, n);
  }
  var f;
  return e instanceof cp ? r ? (e.inject(r, n), e.getName(n)) : e : xi(e) ? function _(x, D) {
    var z, T, k = [];
    for (var N in x) x.hasOwnProperty(N) && !xs(x[N]) && (Array.isArray(x[N]) && x[N].isCss || kn(x[N]) ? k.push(ks(N) + ":", x[N], ";") : xi(x[N]) ? k.push.apply(k, _(x[N], N)) : k.push(ks(N) + ": " + (z = N, (T = x[N]) == null || typeof T == "boolean" || T === "" ? "" : typeof T != "number" || T === 0 || z in Lf || z.startsWith("--") ? String(T).trim() : T + "px") + ";"));
    return D ? [D + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var _s = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function mp(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return kn(e) || xi(e) ? _s(Vr(bs(ga, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : _s(Vr(bs(e, r)));
}
var gp = function(e, t, r) {
  return r === void 0 && (r = Cr), e.theme !== r.theme && e.theme || t || r.theme;
}, yp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, bp = /(^-|-$)/g;
function ii(e) {
  return e.replace(yp, "-").replace(bp, "");
}
var vp = function(e) {
  return _i(kl(e) >>> 0);
};
function ta(e) {
  return typeof e == "string" && vt.env.NODE_ENV === "production";
}
var Ci = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, wp = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Sp(e, t, r) {
  var n = e[r];
  Ci(t) && Ci(n) ? Tl(n, t) : e[r] = t;
}
function Tl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (Ci(d)) for (var g in d) wp(g) && Sp(e, d[g], g);
  }
  return e;
}
var Cl = ft.createContext();
Cl.Consumer;
var oi = {};
function El(e, t, r) {
  var n = ji(e), a = !ta(e), s = t.attrs, d = s === void 0 ? ga : s, g = t.componentId, h = g === void 0 ? function(U, G) {
    var q = typeof U != "string" ? "sc" : ii(U);
    oi[q] = (oi[q] || 0) + 1;
    var C = q + "-" + vp("5.3.11" + q + oi[q]);
    return G ? G + "-" + C : C;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, _ = f === void 0 ? function(U) {
    return ta(U) ? "styled." + U : "Styled(" + vs(U) + ")";
  }(e) : f, x = t.displayName && t.componentId ? ii(t.displayName) + "-" + t.componentId : t.componentId || h, D = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, z = t.shouldForwardProp;
  n && e.shouldForwardProp && (z = t.shouldForwardProp ? function(U, G, q) {
    return e.shouldForwardProp(U, G, q) && t.shouldForwardProp(U, G, q);
  } : e.shouldForwardProp);
  var T, k = new np(r, x, n ? e.componentStyle : void 0), N = k.isStatic && d.length === 0, H = function(U, G) {
    return function(q, C, ae, Se) {
      var Ie = q.attrs, je = q.componentStyle, Ye = q.defaultProps, ce = q.foldedComponentIds, me = q.shouldForwardProp, Re = q.styledComponentId, Ne = q.target, Ce = function(j, b, ee) {
        j === void 0 && (j = Cr);
        var E = br({}, b, { theme: j }), ie = {};
        return ee.forEach(function(Q) {
          var te, X, ne, de = Q;
          for (te in kn(de) && (de = de(E)), de) E[te] = ie[te] = te === "className" ? (X = ie[te], ne = de[te], X && ne ? X + " " + ne : X || ne) : de[te];
        }), [E, ie];
      }(gp(C, wr(Cl), Ye) || Cr, C, Ie), lt = Ce[0], Fe = Ce[1], Oe = function(j, b, ee, E) {
        var ie = lp(), Q = up(), te = b ? j.generateAndInjectStyles(Cr, ie, Q) : j.generateAndInjectStyles(ee, ie, Q);
        return te;
      }(je, Se, lt), Be = ae, et = Fe.$as || C.$as || Fe.as || C.as || Ne, se = ta(et), $ = Fe !== C ? br({}, C, {}, Fe) : C, O = {};
      for (var M in $) M[0] !== "$" && M !== "as" && (M === "forwardedAs" ? O.as = $[M] : (me ? me(M, hs, et) : !se || hs(M)) && (O[M] = $[M]));
      return C.style && Fe.style !== C.style && (O.style = br({}, C.style, {}, Fe.style)), O.className = Array.prototype.concat(ce, Re, Oe !== Re ? Oe : null, C.className, Fe.className).filter(Boolean).join(" "), O.ref = Be, Cs(et, O);
    }(T, U, G, N);
  };
  return H.displayName = _, (T = ft.forwardRef(H)).attrs = D, T.componentStyle = k, T.displayName = _, T.shouldForwardProp = z, T.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ga, T.styledComponentId = x, T.target = n ? e.target : e, T.withComponent = function(U) {
    var G = t.componentId, q = function(ae, Se) {
      if (ae == null) return {};
      var Ie, je, Ye = {}, ce = Object.keys(ae);
      for (je = 0; je < ce.length; je++) Ie = ce[je], Se.indexOf(Ie) >= 0 || (Ye[Ie] = ae[Ie]);
      return Ye;
    }(t, ["componentId"]), C = G && G + "-" + (ta(U) ? U : ii(vs(U)));
    return El(U, br({}, q, { attrs: D, componentId: C }), r);
  }, Object.defineProperty(T, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? Tl({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(T, "toString", { value: function() {
    return "." + T.styledComponentId;
  } }), a && Hf(T, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), T;
}
var xn = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Cr), !vl.isValidElementType(n)) return En(1, String(n));
    var s = function() {
      return r(n, a, mp.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, br({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, br({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(El, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  xn[e] = xn(e);
});
const kp = xn.section``, xp = (e, t, r) => ({
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
}), _p = ({ cardButton: e }) => {
  const { feeds: t } = wr(wa), r = t == null ? void 0 : t.map(
    (n, a) => xp(n, a, e)
  );
  return /* @__PURE__ */ it.jsx(kp, { children: /* @__PURE__ */ it.jsx(
    pl,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, Al = ({ cardButton: e, ...t }) => (Er(() => {
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
  _p,
  {
    cardButton: { ...Sn.cardButton, ...e }
  }
) }));
Al.propTypes = Mr.propTypes;
const Ol = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), Tp = xn.section`
  .c-card {
    height: 100%;
  }
`, Cp = (e, t, r) => /* @__PURE__ */ it.jsx(
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
        tags: r ? [] : Ol(e == null ? void 0 : e.interests)
      }
    )
  },
  e.id
), Ep = ({ cardButton: e, hideTags: t }) => {
  const { feeds: r } = wr(wa), n = t === !0 || t === "true";
  return /* @__PURE__ */ it.jsx(Tp, { className: "row row-spaced", "data-testid": "grid-view-container", children: r == null ? void 0 : r.map((a, s) => /* @__PURE__ */ it.jsx(ft.Fragment, { children: Cp(a, e, n) }, s)) });
}, Rl = ({ cardButton: e, hideTags: t = !0, ...r }) => (Er(() => {
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
  Ep,
  {
    cardButton: { ...Sn.cardButton, ...e },
    hideTags: t
  }
) }));
Rl.propTypes = {
  ...Mr.propTypes,
  cardButton: Zs,
  hideTags: dt.oneOf(["true", "false", !0, !1])
};
const Ap = xn.section``, Op = (e, t, r) => /* @__PURE__ */ it.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ it.jsx(
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
    tags: r ? [] : Ol(e == null ? void 0 : e.interests)
  }
) }, e.id), Rp = ({ cardButton: e, hideTags: t }) => {
  const { feeds: r } = wr(wa), n = t === !0 || t === "true";
  return /* @__PURE__ */ it.jsx(Ap, { className: "row-spaced", "data-testid": "list-view-container", children: r == null ? void 0 : r.map((a, s) => /* @__PURE__ */ it.jsx(ft.Fragment, { children: Op(a, e, n) }, s)) });
}, Il = ({ cardButton: e, hideTags: t = !0, ...r }) => (Er(() => {
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
  Rp,
  {
    cardButton: { ...Sn.cardButton, ...e },
    hideTags: t
  }
) }));
Il.propTypes = {
  ...Mr.propTypes,
  feedCardButtonShape: Zs,
  hideTags: dt.oneOf(["true", "false", !0, !1])
};
var ra = {}, Ts;
function Ip() {
  if (Ts) return ra;
  Ts = 1;
  var e = Es;
  return ra.createRoot = e.createRoot, ra.hydrateRoot = e.hydrateRoot, ra;
}
var Np = Ip();
const Mi = (e, t, r) => {
  Np.createRoot(r).render(ft.createElement(e, t));
}, Dp = ({ targetSelector: e, props: t }) => {
  Mi(Rl, t, document.querySelector(e));
}, jp = ({ targetSelector: e, props: t }) => {
  Mi(Il, t, document.querySelector(e));
}, Fp = ({ targetSelector: e, props: t }) => {
  Mi(Al, t, document.querySelector(e));
};
export {
  Al as CardCarouselNews,
  Rl as CardGridNews,
  Il as CardListlNews,
  Fp as initCardCarouselNewsComponent,
  Dp as initCardGridNewsComponent,
  jp as initCardListNewsComponent
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
