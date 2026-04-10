import ft, { forwardRef as Ci, Component as Wl, createContext as ql, useRef as Vl, useImperativeHandle as Yl, useId as Gl, useContext as wr, createElement as Cs, useState as Ur, useEffect as Er } from "react";
import Es from "react-dom";
function As(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pa = { exports: {} }, an = {};
var to;
function Xl() {
  if (to) return an;
  to = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, h, f) {
    var _, x = {}, L = null, z = null;
    f !== void 0 && (L = "" + f), h.key !== void 0 && (L = "" + h.key), h.ref !== void 0 && (z = h.ref);
    for (_ in h) n.call(h, _) && !s.hasOwnProperty(_) && (x[_] = h[_]);
    if (g && g.defaultProps) for (_ in h = g.defaultProps, h) x[_] === void 0 && (x[_] = h[_]);
    return { $$typeof: t, type: g, key: L, ref: z, props: x, _owner: a.current };
  }
  return an.Fragment = r, an.jsx = d, an.jsxs = d, an;
}
var ro;
function Zl() {
  return ro || (ro = 1, Pa.exports = Xl()), Pa.exports;
}
var it = Zl();
function Ei(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var no = { exports: {} }, on = {}, ao;
function Kl() {
  if (ao) return on;
  ao = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, h, f) {
    var _, x = {}, L = null, z = null;
    f !== void 0 && (L = "" + f), h.key !== void 0 && (L = "" + h.key), h.ref !== void 0 && (z = h.ref);
    for (_ in h) n.call(h, _) && !s.hasOwnProperty(_) && (x[_] = h[_]);
    if (g && g.defaultProps) for (_ in h = g.defaultProps, h) x[_] === void 0 && (x[_] = h[_]);
    return { $$typeof: t, type: g, key: L, ref: z, props: x, _owner: a.current };
  }
  return on.Fragment = r, on.jsx = d, on.jsxs = d, on;
}
var io;
function Ql() {
  return io || (io = 1, no.exports = Kl()), no.exports;
}
var M = Ql(), oo = { exports: {} }, Da, so;
function Jl() {
  if (so) return Da;
  so = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Da = e, Da;
}
var La, lo;
function ec() {
  if (lo) return La;
  lo = 1;
  var e = /* @__PURE__ */ Jl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, La = function() {
    function n(d, g, h, f, _, x) {
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
  }, La;
}
var co;
function tc() {
  return co || (co = 1, oo.exports = /* @__PURE__ */ ec()()), oo.exports;
}
var rc = /* @__PURE__ */ tc();
const l = /* @__PURE__ */ Ei(rc), nc = () => {
  const [e, t] = Ur(null), [r, n] = Ur(!1), [a, s] = Ur(null), [d, g] = Ur("");
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
  setPrototypeOf: uo,
  isFrozen: ic,
  getPrototypeOf: oc,
  getOwnPropertyDescriptor: sc
} = Object;
let {
  freeze: xt,
  seal: $t,
  create: na
} = Object, {
  apply: si,
  construct: li
} = typeof Reflect < "u" && Reflect;
xt || (xt = function(e) {
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
const Bn = Tt(Array.prototype.forEach), lc = Tt(Array.prototype.lastIndexOf), fo = Tt(Array.prototype.pop), sn = Tt(Array.prototype.push), cc = Tt(Array.prototype.splice), aa = Tt(String.prototype.toLowerCase), Ma = Tt(String.prototype.toString), ja = Tt(String.prototype.match), ln = Tt(String.prototype.replace), uc = Tt(String.prototype.indexOf), dc = Tt(String.prototype.trim), Mt = Tt(Object.prototype.hasOwnProperty), St = Tt(RegExp.prototype.test), cn = fc(TypeError);
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
  uo && uo(e, null);
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
    Mt(e, t) || (e[t] = null);
  return e;
}
function cr(e) {
  const t = na(null);
  for (const [r, n] of Rs(e))
    Mt(e, r) && (Array.isArray(n) ? t[r] = pc(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = cr(n) : t[r] = n);
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
const po = xt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Fa = xt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), za = xt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), hc = xt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ua = xt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), mc = xt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ho = xt(["#text"]), mo = xt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), $a = xt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), go = xt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Wn = xt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), gc = $t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), bc = $t(/<%[\w\W]*|[\w\W]*%>/gm), yc = $t(/\$\{[\w\W]*/gm), vc = $t(/^data-[\-\w.\u00B7-\uFFFF]+$/), wc = $t(/^aria-[\-\w]+$/), Os = $t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), kc = $t(/^(?:\w+script|data):/i), Sc = $t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ns = $t(/^html$/i), _c = $t(/^[a-z][.\w]*(-[.\w]+)+$/i);
var bo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: wc,
  ATTR_WHITESPACE: Sc,
  CUSTOM_ELEMENT: _c,
  DATA_ATTR: vc,
  DOCTYPE_NAME: Ns,
  ERB_EXPR: bc,
  IS_ALLOWED_URI: Os,
  IS_SCRIPT_OR_DATA: kc,
  MUSTACHE_EXPR: gc,
  TMPLIT_EXPR: yc
});
const dn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, xc = function() {
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
}, yo = function() {
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
function Is() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xc();
  const t = (b) => Is(b);
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
    DOMParser: L,
    trustedTypes: z
  } = e, T = h.prototype, k = un(T, "cloneNode"), I = un(T, "remove"), U = un(T, "nextSibling"), $ = un(T, "childNodes"), V = un(T, "parentNode");
  if (typeof d == "function") {
    const b = r.createElement("template");
    b.content && b.content.ownerDocument && (r = b.content.ownerDocument);
  }
  let q, C = "";
  const {
    implementation: ae,
    createNodeIterator: ke,
    createDocumentFragment: Ne,
    getElementsByTagName: Me
  } = r, {
    importNode: Ye
  } = n;
  let ue = yo();
  t.isSupported = typeof Rs == "function" && typeof V == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Oe,
    TMPLIT_EXPR: Ie,
    DATA_ATTR: Ce,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: Re,
    CUSTOM_ELEMENT: Be
  } = bo;
  let {
    IS_ALLOWED_URI: et
  } = bo, se = null;
  const H = Ee({}, [...po, ...Fa, ...za, ...Ua, ...ho]);
  let R = null;
  const F = Ee({}, [...mo, ...$a, ...go, ...Wn]);
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
  })), y = null, ee = null;
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
  let ie = !0, J = !0, te = !1, X = !0, ne = !1, de = !0, K = !1, ge = !1, re = !1, le = !1, $e = !1, ce = !1, ot = !0, We = !1;
  const Se = "user-content-";
  let Y = !0, oe = !1, Xe = {}, Pe = null;
  const De = Ee({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let nr = null;
  const ar = Ee({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const Wt = Ee({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ht = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let pt = nt, qt = !1, Vt = null;
  const mt = Ee({}, [ht, At, nt], Ma);
  let kt = Ee({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Ee({}, ["annotation-xml"]);
  const Le = Ee({}, ["title", "style", "font", "a", "script"]);
  let ct = null;
  const ir = ["application/xhtml+xml", "text/html"], Yt = "text/html";
  let fe = null, st = null;
  const Rt = r.createElement("form"), or = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Ot = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(st && st === b)) {
      if ((!b || typeof b != "object") && (b = {}), b = cr(b), ct = // eslint-disable-next-line unicorn/prefer-includes
      ir.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Yt : b.PARSER_MEDIA_TYPE, fe = ct === "application/xhtml+xml" ? Ma : aa, se = Mt(b, "ALLOWED_TAGS") ? Ee({}, b.ALLOWED_TAGS, fe) : H, R = Mt(b, "ALLOWED_ATTR") ? Ee({}, b.ALLOWED_ATTR, fe) : F, Vt = Mt(b, "ALLOWED_NAMESPACES") ? Ee({}, b.ALLOWED_NAMESPACES, Ma) : mt, Bt = Mt(b, "ADD_URI_SAFE_ATTR") ? Ee(cr(Wt), b.ADD_URI_SAFE_ATTR, fe) : Wt, nr = Mt(b, "ADD_DATA_URI_TAGS") ? Ee(cr(ar), b.ADD_DATA_URI_TAGS, fe) : ar, Pe = Mt(b, "FORBID_CONTENTS") ? Ee({}, b.FORBID_CONTENTS, fe) : De, y = Mt(b, "FORBID_TAGS") ? Ee({}, b.FORBID_TAGS, fe) : cr({}), ee = Mt(b, "FORBID_ATTR") ? Ee({}, b.FORBID_ATTR, fe) : cr({}), Xe = Mt(b, "USE_PROFILES") ? b.USE_PROFILES : !1, ie = b.ALLOW_ARIA_ATTR !== !1, J = b.ALLOW_DATA_ATTR !== !1, te = b.ALLOW_UNKNOWN_PROTOCOLS || !1, X = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = b.SAFE_FOR_TEMPLATES || !1, de = b.SAFE_FOR_XML !== !1, K = b.WHOLE_DOCUMENT || !1, le = b.RETURN_DOM || !1, $e = b.RETURN_DOM_FRAGMENT || !1, ce = b.RETURN_TRUSTED_TYPE || !1, re = b.FORCE_BODY || !1, ot = b.SANITIZE_DOM !== !1, We = b.SANITIZE_NAMED_PROPS || !1, Y = b.KEEP_CONTENT !== !1, oe = b.IN_PLACE || !1, et = b.ALLOWED_URI_REGEXP || Os, pt = b.NAMESPACE || nt, kt = b.MATHML_TEXT_INTEGRATION_POINTS || kt, gt = b.HTML_INTEGRATION_POINTS || gt, j = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && or(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && or(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (J = !1), $e && (le = !0), Xe && (se = Ee({}, ho), R = na(null), Xe.html === !0 && (Ee(se, po), Ee(R, mo)), Xe.svg === !0 && (Ee(se, Fa), Ee(R, $a), Ee(R, Wn)), Xe.svgFilters === !0 && (Ee(se, za), Ee(R, $a), Ee(R, Wn)), Xe.mathMl === !0 && (Ee(se, Ua), Ee(R, go), Ee(R, Wn))), Mt(b, "ADD_TAGS") || (E.tagCheck = null), Mt(b, "ADD_ATTR") || (E.attributeCheck = null), b.ADD_TAGS && (typeof b.ADD_TAGS == "function" ? E.tagCheck = b.ADD_TAGS : (se === H && (se = cr(se)), Ee(se, b.ADD_TAGS, fe))), b.ADD_ATTR && (typeof b.ADD_ATTR == "function" ? E.attributeCheck = b.ADD_ATTR : (R === F && (R = cr(R)), Ee(R, b.ADD_ATTR, fe))), b.ADD_URI_SAFE_ATTR && Ee(Bt, b.ADD_URI_SAFE_ATTR, fe), b.FORBID_CONTENTS && (Pe === De && (Pe = cr(Pe)), Ee(Pe, b.FORBID_CONTENTS, fe)), b.ADD_FORBID_CONTENTS && (Pe === De && (Pe = cr(Pe)), Ee(Pe, b.ADD_FORBID_CONTENTS, fe)), Y && (se["#text"] = !0), K && Ee(se, ["html", "head", "body"]), se.table && (Ee(se, ["tbody"]), delete y.tbody), b.TRUSTED_TYPES_POLICY) {
        if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        q = b.TRUSTED_TYPES_POLICY, C = q.createHTML("");
      } else
        q === void 0 && (q = Tc(z, a)), q !== null && typeof C == "string" && (C = q.createHTML(""));
      xt && xt(b), st = b;
    }
  }, Gt = Ee({}, [...Fa, ...za, ...hc]), sr = Ee({}, [...Ua, ...mc]), kr = function(b) {
    let v = V(b);
    (!v || !v.tagName) && (v = {
      namespaceURI: pt,
      tagName: "template"
    });
    const A = aa(b.tagName), G = aa(v.tagName);
    return Vt[b.namespaceURI] ? b.namespaceURI === At ? v.namespaceURI === nt ? A === "svg" : v.namespaceURI === ht ? A === "svg" && (G === "annotation-xml" || kt[G]) : !!Gt[A] : b.namespaceURI === ht ? v.namespaceURI === nt ? A === "math" : v.namespaceURI === At ? A === "math" && gt[G] : !!sr[A] : b.namespaceURI === nt ? v.namespaceURI === At && !gt[G] || v.namespaceURI === ht && !kt[G] ? !1 : !sr[A] && (Le[A] || !Gt[A]) : !!(ct === "application/xhtml+xml" && Vt[b.namespaceURI]) : !1;
  }, at = function(b) {
    sn(t.removed, {
      element: b
    });
    try {
      V(b).removeChild(b);
    } catch {
      I(b);
    }
  }, ut = function(b, v) {
    try {
      sn(t.removed, {
        attribute: v.getAttributeNode(b),
        from: v
      });
    } catch {
      sn(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(b), b === "is")
      if (le || $e)
        try {
          at(v);
        } catch {
        }
      else
        try {
          v.setAttribute(b, "");
        } catch {
        }
  }, dr = function(b) {
    let v = null, A = null;
    if (re)
      b = "<remove></remove>" + b;
    else {
      const ve = ja(b, /^[\r\n\t ]+/);
      A = ve && ve[0];
    }
    ct === "application/xhtml+xml" && pt === nt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const G = q ? q.createHTML(b) : b;
    if (pt === nt)
      try {
        v = new L().parseFromString(G, ct);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = ae.createDocument(pt, "template", null);
      try {
        v.documentElement.innerHTML = qt ? C : G;
      } catch {
      }
    }
    const be = v.body || v.documentElement;
    return b && A && be.insertBefore(r.createTextNode(A), be.childNodes[0] || null), pt === nt ? Me.call(v, K ? "html" : "body")[0] : K ? v.documentElement : be;
  }, Ft = function(b) {
    return ke.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, zt = function(b) {
    return b instanceof x && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof _) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, Ut = function(b) {
    return typeof g == "function" && b instanceof g;
  };
  function Qe(b, v, A) {
    Bn(b, (G) => {
      G.call(t, v, A, st);
    });
  }
  const fr = function(b) {
    let v = null;
    if (Qe(ue.beforeSanitizeElements, b, null), zt(b))
      return at(b), !0;
    const A = fe(b.nodeName);
    if (Qe(ue.uponSanitizeElement, b, {
      tagName: A,
      allowedTags: se
    }), de && b.hasChildNodes() && !Ut(b.firstElementChild) && St(/<[/\w!]/g, b.innerHTML) && St(/<[/\w!]/g, b.textContent) || b.nodeType === dn.progressingInstruction || de && b.nodeType === dn.comment && St(/<[/\w]/g, b.data))
      return at(b), !0;
    if (!(E.tagCheck instanceof Function && E.tagCheck(A)) && (!se[A] || y[A])) {
      if (!y[A] && pr(A) && (j.tagNameCheck instanceof RegExp && St(j.tagNameCheck, A) || j.tagNameCheck instanceof Function && j.tagNameCheck(A)))
        return !1;
      if (Y && !Pe[A]) {
        const G = V(b) || b.parentNode, be = $(b) || b.childNodes;
        if (be && G) {
          const ve = be.length;
          for (let we = ve - 1; we >= 0; --we) {
            const Fe = k(be[we], !0);
            Fe.__removalCount = (b.__removalCount || 0) + 1, G.insertBefore(Fe, U(b));
          }
        }
      }
      return at(b), !0;
    }
    return b instanceof h && !kr(b) || (A === "noscript" || A === "noembed" || A === "noframes") && St(/<\/no(script|embed|frames)/i, b.innerHTML) ? (at(b), !0) : (ne && b.nodeType === dn.text && (v = b.textContent, Bn([me, Oe, Ie], (G) => {
      v = ln(v, G, " ");
    }), b.textContent !== v && (sn(t.removed, {
      element: b.cloneNode()
    }), b.textContent = v)), Qe(ue.afterSanitizeElements, b, null), !1);
  }, Nt = function(b, v, A) {
    if (ee[v] || ot && (v === "id" || v === "name") && (A in r || A in Rt))
      return !1;
    if (!(J && !ee[v] && St(Ce, v)) && !(ie && St(lt, v)) && !(E.attributeCheck instanceof Function && E.attributeCheck(v, b))) {
      if (!R[v] || ee[v]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(pr(b) && (j.tagNameCheck instanceof RegExp && St(j.tagNameCheck, b) || j.tagNameCheck instanceof Function && j.tagNameCheck(b)) && (j.attributeNameCheck instanceof RegExp && St(j.attributeNameCheck, v) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(v, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && St(j.tagNameCheck, A) || j.tagNameCheck instanceof Function && j.tagNameCheck(A)))
        ) return !1;
      } else if (!Bt[v] && !St(et, ln(A, Re, "")) && !((v === "src" || v === "xlink:href" || v === "href") && b !== "script" && uc(A, "data:") === 0 && nr[b]) && !(te && !St(je, ln(A, Re, ""))) && A)
        return !1;
    }
    return !0;
  }, pr = function(b) {
    return b !== "annotation-xml" && ja(b, Be);
  }, Xt = function(b) {
    Qe(ue.beforeSanitizeAttributes, b, null);
    const {
      attributes: v
    } = b;
    if (!v || zt(b))
      return;
    const A = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let G = v.length;
    for (; G--; ) {
      const be = v[G], {
        name: ve,
        namespaceURI: we,
        value: Fe
      } = be, Ge = fe(ve), bt = Fe;
      let Ze = ve === "value" ? bt : dc(bt);
      if (A.attrName = Ge, A.attrValue = Ze, A.keepAttr = !0, A.forceKeepAttr = void 0, Qe(ue.uponSanitizeAttribute, b, A), Ze = A.attrValue, We && (Ge === "id" || Ge === "name") && (ut(ve, b), Ze = Se + Ze), de && St(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ze)) {
        ut(ve, b);
        continue;
      }
      if (Ge === "attributename" && ja(Ze, "href")) {
        ut(ve, b);
        continue;
      }
      if (A.forceKeepAttr)
        continue;
      if (!A.keepAttr) {
        ut(ve, b);
        continue;
      }
      if (!X && St(/\/>/i, Ze)) {
        ut(ve, b);
        continue;
      }
      ne && Bn([me, Oe, Ie], (It) => {
        Ze = ln(Ze, It, " ");
      });
      const He = fe(b.nodeName);
      if (!Nt(He, Ge, Ze)) {
        ut(ve, b);
        continue;
      }
      if (q && typeof z == "object" && typeof z.getAttributeType == "function" && !we)
        switch (z.getAttributeType(He, Ge)) {
          case "TrustedHTML": {
            Ze = q.createHTML(Ze);
            break;
          }
          case "TrustedScriptURL": {
            Ze = q.createScriptURL(Ze);
            break;
          }
        }
      if (Ze !== bt)
        try {
          we ? b.setAttributeNS(we, ve, Ze) : b.setAttribute(ve, Ze), zt(b) ? at(b) : fo(t.removed);
        } catch {
          ut(ve, b);
        }
    }
    Qe(ue.afterSanitizeAttributes, b, null);
  }, lr = function b(v) {
    let A = null;
    const G = Ft(v);
    for (Qe(ue.beforeSanitizeShadowDOM, v, null); A = G.nextNode(); )
      Qe(ue.uponSanitizeShadowNode, A, null), fr(A), Xt(A), A.content instanceof s && b(A.content);
    Qe(ue.afterSanitizeShadowDOM, v, null);
  };
  return t.sanitize = function(b) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, A = null, G = null, be = null, ve = null;
    if (qt = !b, qt && (b = "<!-->"), typeof b != "string" && !Ut(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw cn("dirty is not a string, aborting");
      } else
        throw cn("toString is not a function");
    if (!t.isSupported)
      return b;
    if (ge || Ot(v), t.removed = [], typeof b == "string" && (oe = !1), oe) {
      if (b.nodeName) {
        const Ge = fe(b.nodeName);
        if (!se[Ge] || y[Ge])
          throw cn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof g)
      A = dr("<!---->"), G = A.ownerDocument.importNode(b, !0), G.nodeType === dn.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? A = G : A.appendChild(G);
    else {
      if (!le && !ne && !K && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return q && ce ? q.createHTML(b) : b;
      if (A = dr(b), !A)
        return le ? null : ce ? C : "";
    }
    A && re && at(A.firstChild);
    const we = Ft(oe ? b : A);
    for (; be = we.nextNode(); )
      fr(be), Xt(be), be.content instanceof s && lr(be.content);
    if (oe)
      return b;
    if (le) {
      if ($e)
        for (ve = Ne.call(A.ownerDocument); A.firstChild; )
          ve.appendChild(A.firstChild);
      else
        ve = A;
      return (R.shadowroot || R.shadowrootmode) && (ve = Ye.call(n, ve, !0)), ve;
    }
    let Fe = K ? A.outerHTML : A.innerHTML;
    return K && se["!doctype"] && A.ownerDocument && A.ownerDocument.doctype && A.ownerDocument.doctype.name && St(Ns, A.ownerDocument.doctype.name) && (Fe = "<!DOCTYPE " + A.ownerDocument.doctype.name + `>
` + Fe), ne && Bn([me, Oe, Ie], (Ge) => {
      Fe = ln(Fe, Ge, " ");
    }), q && ce ? q.createHTML(Fe) : Fe;
  }, t.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ot(b), ge = !0;
  }, t.clearConfig = function() {
    st = null, ge = !1;
  }, t.isValidAttribute = function(b, v, A) {
    st || Ot({});
    const G = fe(b), be = fe(v);
    return Nt(G, be, A);
  }, t.addHook = function(b, v) {
    typeof v == "function" && sn(ue[b], v);
  }, t.removeHook = function(b, v) {
    if (v !== void 0) {
      const A = lc(ue[b], v);
      return A === -1 ? void 0 : cc(ue[b], A, 1)[0];
    }
    return fo(ue[b]);
  }, t.removeHooks = function(b) {
    ue[b] = [];
  }, t.removeAllHooks = function() {
    ue = yo();
  }, t;
}
var vo = Is();
let qn = null;
function Cc() {
  return qn || (typeof window < "u" ? qn = vo(window) : qn = vo), qn;
}
const Mr = (e) => ({ __html: Cc().sanitize(e) });
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
}, xn = ({ children: e }) => /* @__PURE__ */ M.jsx(M.Fragment, { children: e });
xn.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node,
    l.string
  ])
};
var wo = { exports: {} }, ko;
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
  }(wo)), wo.exports;
}
var Rc = Ac();
const er = /* @__PURE__ */ Ei(Rc);
({
  ...xn.propTypes
});
const Ps = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ M.jsx("div", { className: t, ...r, children: /* @__PURE__ */ M.jsx("div", { className: "row", children: e }) });
Ps.propTypes = {
  children: xn.propTypes.children
};
({
  ...Ps.propTypes
});
xn.propTypes.children, l.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
xn.propTypes.children;
const Oc = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), Ha = l.shape({
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
}), Ai = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var xr = {}, Lr = {}, So;
function Nc() {
  if (So) return Lr;
  So = 1;
  var e = ft;
  function t(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, m = 1; m < arguments.length; m++) u += "&args[]=" + encodeURIComponent(arguments[m]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function d(i) {
    return r.call(s, i) ? !0 : r.call(a, i) ? !1 : n.test(i) ? s[i] = !0 : (a[i] = !0, !1);
  }
  function g(i, u, m, S, D, O, B) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = S, this.attributeNamespace = D, this.mustUseProperty = m, this.propertyName = i, this.type = u, this.sanitizeURL = O, this.removeEmptyString = B;
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
  function _(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var u = i.replace(
      f,
      _
    );
    h[u] = new g(u, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var u = i.replace(f, _);
    h[u] = new g(u, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var u = i.replace(f, _);
    h[u] = new g(u, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
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
  }, L = ["Webkit", "ms", "Moz", "O"];
  Object.keys(x).forEach(function(i) {
    L.forEach(function(u) {
      u = u + i.charAt(0).toUpperCase() + i.substring(1), x[u] = x[i];
    });
  });
  var z = /["'&<>]/;
  function T(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var u = z.exec(i);
    if (u) {
      var m = "", S, D = 0;
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
        D !== S && (m += i.substring(D, S)), D = S + 1, m += u;
      }
      i = D !== S ? m + i.substring(D, S) : m;
    }
    return i;
  }
  var k = /([A-Z])/g, I = /^ms-/, U = Array.isArray;
  function $(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function V(i, u, m) {
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
    for (var S in m) if (r.call(m, S)) {
      var D = m[S];
      if (D != null && typeof D != "boolean" && D !== "") {
        if (S.indexOf("--") === 0) {
          var O = T(S);
          D = T(("" + D).trim());
        } else {
          O = S;
          var B = q.get(O);
          B !== void 0 || (B = T(O.replace(k, "-$1").toLowerCase().replace(I, "-ms-")), q.set(O, B)), O = B, D = typeof D == "number" ? D === 0 || r.call(x, S) ? "" + D : D + "px" : T(("" + D).trim());
        }
        u ? (u = !1, i.push(' style="', O, ":", D)) : i.push(";", O, ":", D);
      }
    }
    u || i.push('"');
  }
  function ae(i, u, m, S) {
    switch (m) {
      case "style":
        C(i, u, S);
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
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (m = u.attributeName, u.type) {
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
            u.sanitizeURL && (S = "" + S), i.push(" ", m, '="', T(S), '"');
        }
      } else if (d(m)) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = m.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push(" ", m, '="', T(S), '"');
      }
    }
  }
  function ke(i, u, m) {
    if (u != null) {
      if (m != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && i.push("" + u);
    }
  }
  function Ne(i) {
    var u = "";
    return e.Children.forEach(i, function(m) {
      m != null && (u += m);
    }), u;
  }
  function Me(i, u, m, S) {
    i.push(me(m));
    var D = m = null, O;
    for (O in u) if (r.call(u, O)) {
      var B = u[O];
      if (B != null) switch (O) {
        case "children":
          m = B;
          break;
        case "dangerouslySetInnerHTML":
          D = B;
          break;
        default:
          ae(i, S, O, B);
      }
    }
    return i.push(">"), ke(i, D, m), typeof m == "string" ? (i.push(T(m)), null) : m;
  }
  var Ye = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ue = /* @__PURE__ */ new Map();
  function me(i) {
    var u = ue.get(i);
    if (u === void 0) {
      if (!Ye.test(i)) throw Error(t(65, i));
      u = "<" + i, ue.set(i, u);
    }
    return u;
  }
  function Oe(i, u, m, S, D) {
    switch (u) {
      case "select":
        i.push(me("select"));
        var O = null, B = null;
        for (_e in m) if (r.call(m, _e)) {
          var Q = m[_e];
          if (Q != null) switch (_e) {
            case "children":
              O = Q;
              break;
            case "dangerouslySetInnerHTML":
              B = Q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ae(i, S, _e, Q);
          }
        }
        return i.push(">"), ke(i, B, O), O;
      case "option":
        B = D.selectedValue, i.push(me("option"));
        var pe = Q = null, ye = null, _e = null;
        for (O in m) if (r.call(m, O)) {
          var tt = m[O];
          if (tt != null) switch (O) {
            case "children":
              Q = tt;
              break;
            case "selected":
              ye = tt;
              break;
            case "dangerouslySetInnerHTML":
              _e = tt;
              break;
            case "value":
              pe = tt;
            default:
              ae(i, S, O, tt);
          }
        }
        if (B != null) if (m = pe !== null ? "" + pe : Ne(Q), U(B)) {
          for (S = 0; S < B.length; S++)
            if ("" + B[S] === m) {
              i.push(' selected=""');
              break;
            }
        } else "" + B === m && i.push(' selected=""');
        else ye && i.push(' selected=""');
        return i.push(">"), ke(i, _e, Q), Q;
      case "textarea":
        i.push(me("textarea")), _e = B = O = null;
        for (Q in m) if (r.call(m, Q) && (pe = m[Q], pe != null)) switch (Q) {
          case "children":
            _e = pe;
            break;
          case "value":
            O = pe;
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
              Q,
              pe
            );
        }
        if (O === null && B !== null && (O = B), i.push(">"), _e != null) {
          if (O != null) throw Error(t(92));
          if (U(_e) && 1 < _e.length) throw Error(t(93));
          O = "" + _e;
        }
        return typeof O == "string" && O[0] === `
` && i.push(`
`), O !== null && i.push(T("" + O)), null;
      case "input":
        i.push(me("input")), pe = _e = Q = O = null;
        for (B in m) if (r.call(m, B) && (ye = m[B], ye != null)) switch (B) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            pe = ye;
            break;
          case "defaultValue":
            Q = ye;
            break;
          case "checked":
            _e = ye;
            break;
          case "value":
            O = ye;
            break;
          default:
            ae(i, S, B, ye);
        }
        return _e !== null ? ae(i, S, "checked", _e) : pe !== null && ae(i, S, "checked", pe), O !== null ? ae(i, S, "value", O) : Q !== null && ae(i, S, "value", Q), i.push("/>"), null;
      case "menuitem":
        i.push(me("menuitem"));
        for (var Zt in m) if (r.call(m, Zt) && (O = m[Zt], O != null)) switch (Zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ae(i, S, Zt, O);
        }
        return i.push(">"), null;
      case "title":
        i.push(me("title")), O = null;
        for (tt in m) if (r.call(m, tt) && (B = m[tt], B != null)) switch (tt) {
          case "children":
            O = B;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ae(i, S, tt, B);
        }
        return i.push(">"), O;
      case "listing":
      case "pre":
        i.push(me(u)), B = O = null;
        for (pe in m) if (r.call(m, pe) && (Q = m[pe], Q != null)) switch (pe) {
          case "children":
            O = Q;
            break;
          case "dangerouslySetInnerHTML":
            B = Q;
            break;
          default:
            ae(i, S, pe, Q);
        }
        if (i.push(">"), B != null) {
          if (O != null) throw Error(t(60));
          if (typeof B != "object" || !("__html" in B)) throw Error(t(61));
          m = B.__html, m != null && (typeof m == "string" && 0 < m.length && m[0] === `
` ? i.push(`
`, m) : i.push("" + m));
        }
        return typeof O == "string" && O[0] === `
` && i.push(`
`), O;
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
        for (var Kt in m) if (r.call(m, Kt) && (O = m[Kt], O != null)) switch (Kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ae(i, S, Kt, O);
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
        return Me(
          i,
          m,
          u,
          S
        );
      case "html":
        return D.insertionMode === 0 && i.push("<!DOCTYPE html>"), Me(i, m, u, S);
      default:
        if (u.indexOf("-") === -1 && typeof m.is != "string") return Me(i, m, u, S);
        i.push(me(u)), B = O = null;
        for (ye in m) if (r.call(m, ye) && (Q = m[ye], Q != null)) switch (ye) {
          case "children":
            O = Q;
            break;
          case "dangerouslySetInnerHTML":
            B = Q;
            break;
          case "style":
            C(i, S, Q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(ye) && typeof Q != "function" && typeof Q != "symbol" && i.push(" ", ye, '="', T(Q), '"');
        }
        return i.push(">"), ke(i, B, O), O;
    }
  }
  function Ie(i, u, m) {
    if (i.push('<!--$?--><template id="'), m === null) throw Error(t(395));
    return i.push(m), i.push('"></template>');
  }
  function Ce(i, u, m, S) {
    switch (m.insertionMode) {
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
  var je = /[<\u2028\u2029]/g;
  function Re(i) {
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
  function Be(i, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: i };
  }
  function et(i, u, m, S) {
    return m.generateStaticMarkup ? (i.push(T(u)), !1) : (u === "" ? i = S : (S && i.push("<!-- -->"), i.push(T(u)), i = !0), i);
  }
  var se = Object.assign, H = Symbol.for("react.element"), R = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), E = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), de = Symbol.for("react.scope"), K = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), re = Symbol.for("react.default_value"), le = Symbol.iterator;
  function $e(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case F:
        return "Fragment";
      case R:
        return "Portal";
      case y:
        return "Profiler";
      case j:
        return "StrictMode";
      case J:
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
    var m = {}, S;
    for (S in i) m[S] = u[S];
    return m;
  }
  var We = null;
  function Se(i, u) {
    if (i !== u) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var m = u.parent;
      if (i === null) {
        if (m !== null) throw Error(t(401));
      } else {
        if (m === null) throw Error(t(401));
        Se(i, m);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function Y(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && Y(i);
  }
  function oe(i) {
    var u = i.parent;
    u !== null && oe(u), i.context._currentValue2 = i.value;
  }
  function Xe(i, u) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === u.depth ? Se(i, u) : Xe(i, u);
  }
  function Pe(i, u) {
    var m = u.parent;
    if (m === null) throw Error(t(402));
    i.depth === m.depth ? Se(i, m) : Pe(i, m), u.context._currentValue2 = u.value;
  }
  function De(i) {
    var u = We;
    u !== i && (u === null ? oe(i) : i === null ? Y(u) : u.depth === i.depth ? Se(u, i) : u.depth > i.depth ? Xe(u, i) : Pe(u, i), We = i);
  }
  var nr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function ar(i, u, m, S) {
    var D = i.state !== void 0 ? i.state : null;
    i.updater = nr, i.props = m, i.state = D;
    var O = { queue: [], replace: !1 };
    i._reactInternals = O;
    var B = u.contextType;
    if (i.context = typeof B == "object" && B !== null ? B._currentValue2 : S, B = u.getDerivedStateFromProps, typeof B == "function" && (B = B(m, D), D = B == null ? D : se({}, D, B), i.state = D), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && nr.enqueueReplaceState(i, i.state, null), O.queue !== null && 0 < O.queue.length) if (u = O.queue, B = O.replace, O.queue = null, O.replace = !1, B && u.length === 1) i.state = u[0];
    else {
      for (O = B ? u[0] : i.state, D = !0, B = B ? 1 : 0; B < u.length; B++) {
        var Q = u[B];
        Q = typeof Q == "function" ? Q.call(i, O, m, S) : Q, Q != null && (D ? (D = !1, O = se({}, O, Q)) : se(O, Q));
      }
      i.state = O;
    }
    else O.queue = null;
  }
  var Bt = { id: 1, overflow: "" };
  function Wt(i, u, m) {
    var S = i.id;
    i = i.overflow;
    var D = 32 - ht(S) - 1;
    S &= ~(1 << D), m += 1;
    var O = 32 - ht(u) + D;
    if (30 < O) {
      var B = D - D % 5;
      return O = (S & (1 << B) - 1).toString(32), S >>= B, D -= B, { id: 1 << 32 - ht(u) + D | m << D | S, overflow: O + i };
    }
    return { id: 1 << O | m << D | S, overflow: i };
  }
  var ht = Math.clz32 ? Math.clz32 : pt, At = Math.log, nt = Math.LN2;
  function pt(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (At(i) / nt | 0) | 0;
  }
  function qt(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var Vt = typeof Object.is == "function" ? Object.is : qt, mt = null, kt = null, gt = null, Le = null, ct = !1, ir = !1, Yt = 0, fe = null, st = 0;
  function Rt() {
    if (mt === null) throw Error(t(321));
    return mt;
  }
  function or() {
    if (0 < st) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ot() {
    return Le === null ? gt === null ? (ct = !1, gt = Le = or()) : (ct = !0, Le = gt) : Le.next === null ? (ct = !1, Le = Le.next = or()) : (ct = !0, Le = Le.next), Le;
  }
  function Gt() {
    kt = mt = null, ir = !1, gt = null, st = 0, Le = fe = null;
  }
  function sr(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function kr(i, u, m) {
    if (mt = Rt(), Le = Ot(), ct) {
      var S = Le.queue;
      if (u = S.dispatch, fe !== null && (m = fe.get(S), m !== void 0)) {
        fe.delete(S), S = Le.memoizedState;
        do
          S = i(S, m.action), m = m.next;
        while (m !== null);
        return Le.memoizedState = S, [S, u];
      }
      return [Le.memoizedState, u];
    }
    return i = i === sr ? typeof u == "function" ? u() : u : m !== void 0 ? m(u) : u, Le.memoizedState = i, i = Le.queue = { last: null, dispatch: null }, i = i.dispatch = ut.bind(null, mt, i), [Le.memoizedState, i];
  }
  function at(i, u) {
    if (mt = Rt(), Le = Ot(), u = u === void 0 ? null : u, Le !== null) {
      var m = Le.memoizedState;
      if (m !== null && u !== null) {
        var S = m[1];
        e: if (S === null) S = !1;
        else {
          for (var D = 0; D < S.length && D < u.length; D++) if (!Vt(u[D], S[D])) {
            S = !1;
            break e;
          }
          S = !0;
        }
        if (S) return m[0];
      }
    }
    return i = i(), Le.memoizedState = [i, u], i;
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
  function Ft() {
  }
  var zt = { readContext: function(i) {
    return i._currentValue2;
  }, useContext: function(i) {
    return Rt(), i._currentValue2;
  }, useMemo: at, useReducer: kr, useRef: function(i) {
    mt = Rt(), Le = Ot();
    var u = Le.memoizedState;
    return u === null ? (i = { current: i }, Le.memoizedState = i) : u;
  }, useState: function(i) {
    return kr(sr, i);
  }, useInsertionEffect: Ft, useLayoutEffect: function() {
  }, useCallback: function(i, u) {
    return at(function() {
      return i;
    }, u);
  }, useImperativeHandle: Ft, useEffect: Ft, useDebugValue: Ft, useDeferredValue: function(i) {
    return Rt(), i;
  }, useTransition: function() {
    return Rt(), [
      !1,
      dr
    ];
  }, useId: function() {
    var i = kt.treeContext, u = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - ht(i) - 1)).toString(32) + u;
    var m = Ut;
    if (m === null) throw Error(t(404));
    return u = Yt++, i = ":" + m.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return Rt(), u(i._source);
  }, useSyncExternalStore: function(i, u, m) {
    if (m === void 0) throw Error(t(407));
    return m();
  } }, Ut = null, Qe = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function fr(i) {
    return console.error(i), null;
  }
  function Nt() {
  }
  function pr(i, u, m, S, D, O, B, Q, pe) {
    var ye = [], _e = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: S, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: _e, pingedTasks: ye, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: D === void 0 ? fr : D, onAllReady: Nt, onShellReady: B === void 0 ? Nt : B, onShellError: Nt, onFatalError: Nt }, m = lr(u, 0, null, m, !1, !1), m.parentFlushed = !0, i = Xt(u, i, null, m, _e, ce, null, Bt), ye.push(i), u;
  }
  function Xt(i, u, m, S, D, O, B, Q) {
    i.allPendingTasks++, m === null ? i.pendingRootTasks++ : m.pendingTasks++;
    var pe = { node: u, ping: function() {
      var ye = i.pingedTasks;
      ye.push(pe), ye.length === 1 && Rr(i);
    }, blockedBoundary: m, blockedSegment: S, abortSet: D, legacyContext: O, context: B, treeContext: Q };
    return D.add(pe), pe;
  }
  function lr(i, u, m, S, D, O) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: S, boundary: m, lastPushedText: D, textEmbedded: O };
  }
  function b(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function v(i, u) {
    var m = i.onShellError;
    m(u), m = i.onFatalError, m(u), i.destination !== null ? (i.status = 2, i.destination.destroy(u)) : (i.status = 1, i.fatalError = u);
  }
  function A(i, u, m, S, D) {
    for (mt = {}, kt = u, Yt = 0, i = m(S, D); ir; ) ir = !1, Yt = 0, st += 1, Le = null, i = m(S, D);
    return Gt(), i;
  }
  function G(i, u, m, S) {
    var D = m.render(), O = S.childContextTypes;
    if (O != null) {
      var B = u.legacyContext;
      if (typeof m.getChildContext != "function") S = B;
      else {
        m = m.getChildContext();
        for (var Q in m) if (!(Q in O)) throw Error(t(108, $e(S) || "Unknown", Q));
        S = se({}, B, m);
      }
      u.legacyContext = S, we(i, u, D), u.legacyContext = B;
    } else we(i, u, D);
  }
  function be(i, u) {
    if (i && i.defaultProps) {
      u = se({}, u), i = i.defaultProps;
      for (var m in i) u[m] === void 0 && (u[m] = i[m]);
      return u;
    }
    return u;
  }
  function ve(i, u, m, S, D) {
    if (typeof m == "function") if (m.prototype && m.prototype.isReactComponent) {
      D = ot(m, u.legacyContext);
      var O = m.contextType;
      O = new m(S, typeof O == "object" && O !== null ? O._currentValue2 : D), ar(O, m, S, D), G(i, u, O, m);
    } else {
      O = ot(m, u.legacyContext), D = A(i, u, m, S, O);
      var B = Yt !== 0;
      if (typeof D == "object" && D !== null && typeof D.render == "function" && D.$$typeof === void 0) ar(D, m, S, O), G(i, u, D, m);
      else if (B) {
        S = u.treeContext, u.treeContext = Wt(S, 1, 0);
        try {
          we(i, u, D);
        } finally {
          u.treeContext = S;
        }
      } else we(i, u, D);
    }
    else if (typeof m == "string") {
      switch (D = u.blockedSegment, O = Oe(D.chunks, m, S, i.responseState, D.formatContext), D.lastPushedText = !1, B = D.formatContext, D.formatContext = V(B, m, S), Ge(i, u, O), D.formatContext = B, m) {
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
          D.chunks.push("</", m, ">");
      }
      D.lastPushedText = !1;
    } else {
      switch (m) {
        case ge:
        case K:
        case j:
        case y:
        case F:
          we(i, u, S.children);
          return;
        case te:
          we(i, u, S.children);
          return;
        case de:
          throw Error(t(343));
        case J:
          e: {
            m = u.blockedBoundary, D = u.blockedSegment, O = S.fallback, S = S.children, B = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: B, errorDigest: null }, pe = lr(i, D.chunks.length, Q, D.formatContext, !1, !1);
            D.children.push(pe), D.lastPushedText = !1;
            var ye = lr(i, 0, null, D.formatContext, !1, !1);
            ye.parentFlushed = !0, u.blockedBoundary = Q, u.blockedSegment = ye;
            try {
              if (Ge(
                i,
                u,
                S
              ), i.responseState.generateStaticMarkup || ye.lastPushedText && ye.textEmbedded && ye.chunks.push("<!-- -->"), ye.status = 1, He(Q, ye), Q.pendingTasks === 0) break e;
            } catch (_e) {
              ye.status = 4, Q.forceClientRender = !0, Q.errorDigest = b(i, _e);
            } finally {
              u.blockedBoundary = m, u.blockedSegment = D;
            }
            u = Xt(i, O, m, pe, B, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof m == "object" && m !== null) switch (m.$$typeof) {
        case ie:
          if (S = A(i, u, m.render, S, D), Yt !== 0) {
            m = u.treeContext, u.treeContext = Wt(m, 1, 0);
            try {
              we(i, u, S);
            } finally {
              u.treeContext = m;
            }
          } else we(i, u, S);
          return;
        case X:
          m = m.type, S = be(m, S), ve(i, u, m, S, D);
          return;
        case ee:
          if (D = S.children, m = m._context, S = S.value, O = m._currentValue2, m._currentValue2 = S, B = We, We = S = { parent: B, depth: B === null ? 0 : B.depth + 1, context: m, parentValue: O, value: S }, u.context = S, we(i, u, D), i = We, i === null) throw Error(t(403));
          S = i.parentValue, i.context._currentValue2 = S === re ? i.context._defaultValue : S, i = We = i.parent, u.context = i;
          return;
        case E:
          S = S.children, S = S(m._currentValue2), we(i, u, S);
          return;
        case ne:
          D = m._init, m = D(m._payload), S = be(m, S), ve(
            i,
            u,
            m,
            S,
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
        case H:
          ve(i, u, m.type, m.props, m.ref);
          return;
        case R:
          throw Error(t(257));
        case ne:
          var S = m._init;
          m = S(m._payload), we(i, u, m);
          return;
      }
      if (U(m)) {
        Fe(i, u, m);
        return;
      }
      if (m === null || typeof m != "object" ? S = null : (S = le && m[le] || m["@@iterator"], S = typeof S == "function" ? S : null), S && (S = S.call(m))) {
        if (m = S.next(), !m.done) {
          var D = [];
          do
            D.push(m.value), m = S.next();
          while (!m.done);
          Fe(i, u, D);
        }
        return;
      }
      throw i = Object.prototype.toString.call(m), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : i));
    }
    typeof m == "string" ? (S = u.blockedSegment, S.lastPushedText = et(u.blockedSegment.chunks, m, i.responseState, S.lastPushedText)) : typeof m == "number" && (S = u.blockedSegment, S.lastPushedText = et(u.blockedSegment.chunks, "" + m, i.responseState, S.lastPushedText));
  }
  function Fe(i, u, m) {
    for (var S = m.length, D = 0; D < S; D++) {
      var O = u.treeContext;
      u.treeContext = Wt(O, S, D);
      try {
        Ge(i, u, m[D]);
      } finally {
        u.treeContext = O;
      }
    }
  }
  function Ge(i, u, m) {
    var S = u.blockedSegment.formatContext, D = u.legacyContext, O = u.context;
    try {
      return we(i, u, m);
    } catch (pe) {
      if (Gt(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        m = pe;
        var B = u.blockedSegment, Q = lr(i, B.chunks.length, null, B.formatContext, B.lastPushedText, !0);
        B.children.push(Q), B.lastPushedText = !1, i = Xt(i, u.node, u.blockedBoundary, Q, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, m.then(i, i), u.blockedSegment.formatContext = S, u.legacyContext = D, u.context = O, De(O);
      } else throw u.blockedSegment.formatContext = S, u.legacyContext = D, u.context = O, De(O), pe;
    }
  }
  function bt(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, It(this, u, i);
  }
  function Ze(i, u, m) {
    var S = i.blockedBoundary;
    i.blockedSegment.status = 3, S === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (S.pendingTasks--, S.forceClientRender || (S.forceClientRender = !0, i = m === void 0 ? Error(t(432)) : m, S.errorDigest = u.onError(i), S.parentFlushed && u.clientRenderedBoundaries.push(S)), S.fallbackAbortableTasks.forEach(function(D) {
      return Ze(D, u, m);
    }), S.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (S = u.onAllReady, S()));
  }
  function He(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var m = u.children[0];
      m.id = u.id, m.parentFlushed = !0, m.status === 1 && He(i, m);
    } else i.completedSegments.push(u);
  }
  function It(i, u, m) {
    if (u === null) {
      if (m.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = m;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Nt, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (m.parentFlushed && m.status === 1 && He(u, m), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(bt, i), u.fallbackAbortableTasks.clear()) : m.parentFlushed && m.status === 1 && (He(u, m), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Rr(i) {
    if (i.status !== 2) {
      var u = We, m = Qe.current;
      Qe.current = zt;
      var S = Ut;
      Ut = i.responseState;
      try {
        var D = i.pingedTasks, O;
        for (O = 0; O < D.length; O++) {
          var B = D[O], Q = i, pe = B.blockedSegment;
          if (pe.status === 0) {
            De(B.context);
            try {
              we(Q, B, B.node), Q.responseState.generateStaticMarkup || pe.lastPushedText && pe.textEmbedded && pe.chunks.push("<!-- -->"), B.abortSet.delete(B), pe.status = 1, It(Q, B.blockedBoundary, pe);
            } catch (Pt) {
              if (Gt(), typeof Pt == "object" && Pt !== null && typeof Pt.then == "function") {
                var ye = B.ping;
                Pt.then(ye, ye);
              } else {
                B.abortSet.delete(B), pe.status = 4;
                var _e = B.blockedBoundary, tt = Pt, Zt = b(Q, tt);
                if (_e === null ? v(Q, tt) : (_e.pendingTasks--, _e.forceClientRender || (_e.forceClientRender = !0, _e.errorDigest = Zt, _e.parentFlushed && Q.clientRenderedBoundaries.push(_e))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var Kt = Q.onAllReady;
                  Kt();
                }
              }
            } finally {
            }
          }
        }
        D.splice(0, O), i.destination !== null && zr(i, i.destination);
      } catch (Pt) {
        b(i, Pt), v(i, Pt);
      } finally {
        Ut = S, Qe.current = m, m === zt && De(u);
      }
    }
  }
  function Or(i, u, m) {
    switch (m.parentFlushed = !0, m.status) {
      case 0:
        var S = m.id = i.nextSegmentId++;
        return m.lastPushedText = !1, m.textEmbedded = !1, i = i.responseState, u.push('<template id="'), u.push(i.placeholderPrefix), i = S.toString(16), u.push(i), u.push('"></template>');
      case 1:
        m.status = 2;
        var D = !0;
        S = m.chunks;
        var O = 0;
        m = m.children;
        for (var B = 0; B < m.length; B++) {
          for (D = m[B]; O < D.index; O++) u.push(S[O]);
          D = Nr(i, u, D);
        }
        for (; O < S.length - 1; O++) u.push(S[O]);
        return O < S.length && (D = u.push(S[O])), D;
      default:
        throw Error(t(390));
    }
  }
  function Nr(i, u, m) {
    var S = m.boundary;
    if (S === null) return Or(i, u, m);
    if (S.parentFlushed = !0, S.forceClientRender) return i.responseState.generateStaticMarkup || (S = S.errorDigest, u.push("<!--$!-->"), u.push("<template"), S && (u.push(' data-dgst="'), S = T(S), u.push(S), u.push('"')), u.push("></template>")), Or(i, u, m), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
    if (0 < S.pendingTasks) {
      S.rootSegmentID = i.nextSegmentId++, 0 < S.completedSegments.length && i.partialBoundaries.push(S);
      var D = i.responseState, O = D.nextSuspenseID++;
      return D = D.boundaryPrefix + O.toString(16), S = S.id = D, Ie(u, i.responseState, S), Or(i, u, m), u.push("<!--/$-->");
    }
    if (S.byteSize > i.progressiveChunkSize) return S.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(S), Ie(u, i.responseState, S.id), Or(i, u, m), u.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || u.push("<!--$-->"), m = S.completedSegments, m.length !== 1) throw Error(t(391));
    return Nr(i, u, m[0]), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
  }
  function Xr(i, u, m) {
    return Ce(u, i.responseState, m.formatContext, m.id), Nr(i, u, m), lt(u, m.formatContext);
  }
  function Zr(i, u, m) {
    for (var S = m.completedSegments, D = 0; D < S.length; D++) Kr(i, u, m, S[D]);
    if (S.length = 0, i = i.responseState, S = m.id, m = m.rootSegmentID, u.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? u.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), S === null) throw Error(t(395));
    return m = m.toString(16), u.push(S), u.push('","'), u.push(i.segmentPrefix), u.push(m), u.push('")<\/script>');
  }
  function Kr(i, u, m, S) {
    if (S.status === 2) return !0;
    var D = S.id;
    if (D === -1) {
      if ((S.id = m.rootSegmentID) === -1) throw Error(t(392));
      return Xr(i, u, S);
    }
    return Xr(i, u, S), i = i.responseState, u.push(i.startInlineScript), i.sentCompleteSegmentFunction ? u.push('$RS("') : (i.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(i.segmentPrefix), D = D.toString(16), u.push(D), u.push('","'), u.push(i.placeholderPrefix), u.push(D), u.push('")<\/script>');
  }
  function zr(i, u) {
    try {
      var m = i.completedRootSegment;
      if (m !== null && i.pendingRootTasks === 0) {
        Nr(i, u, m), i.completedRootSegment = null;
        var S = i.responseState.bootstrapChunks;
        for (m = 0; m < S.length - 1; m++) u.push(S[m]);
        m < S.length && u.push(S[m]);
      }
      var D = i.clientRenderedBoundaries, O;
      for (O = 0; O < D.length; O++) {
        var B = D[O];
        S = u;
        var Q = i.responseState, pe = B.id, ye = B.errorDigest, _e = B.errorMessage, tt = B.errorComponentStack;
        if (S.push(Q.startInlineScript), Q.sentClientRenderFunction ? S.push('$RX("') : (Q.sentClientRenderFunction = !0, S.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), pe === null) throw Error(t(395));
        if (S.push(pe), S.push('"'), ye || _e || tt) {
          S.push(",");
          var Zt = Re(ye || "");
          S.push(Zt);
        }
        if (_e || tt) {
          S.push(",");
          var Kt = Re(_e || "");
          S.push(Kt);
        }
        if (tt) {
          S.push(",");
          var Pt = Re(tt);
          S.push(Pt);
        }
        if (!S.push(")<\/script>")) {
          i.destination = null, O++, D.splice(0, O);
          return;
        }
      }
      D.splice(0, O);
      var Ir = i.completedBoundaries;
      for (O = 0; O < Ir.length; O++) if (!Zr(i, u, Ir[O])) {
        i.destination = null, O++, Ir.splice(0, O);
        return;
      }
      Ir.splice(0, O);
      var hr = i.partialBoundaries;
      for (O = 0; O < hr.length; O++) {
        var Jr = hr[O];
        e: {
          D = i, B = u;
          var Pr = Jr.completedSegments;
          for (Q = 0; Q < Pr.length; Q++) if (!Kr(D, B, Jr, Pr[Q])) {
            Q++, Pr.splice(0, Q);
            var On = !1;
            break e;
          }
          Pr.splice(0, Q), On = !0;
        }
        if (!On) {
          i.destination = null, O++, hr.splice(0, O);
          return;
        }
      }
      hr.splice(0, O);
      var Sr = i.completedBoundaries;
      for (O = 0; O < Sr.length; O++) if (!Zr(i, u, Sr[O])) {
        i.destination = null, O++, Sr.splice(0, O);
        return;
      }
      Sr.splice(0, O);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function An(i, u) {
    try {
      var m = i.abortableTasks;
      m.forEach(function(S) {
        return Ze(S, i, u);
      }), m.clear(), i.destination !== null && zr(i, i.destination);
    } catch (S) {
      b(i, S), v(i, S);
    }
  }
  function Rn() {
  }
  function Qr(i, u, m, S) {
    var D = !1, O = null, B = "", Q = { push: function(ye) {
      return ye !== null && (B += ye), !0;
    }, destroy: function(ye) {
      D = !0, O = ye;
    } }, pe = !1;
    if (i = pr(i, Be(m, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Rn, void 0, function() {
      pe = !0;
    }), Rr(i), An(i, S), i.status === 1) i.status = 2, Q.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = Q;
      try {
        zr(i, Q);
      } catch (ye) {
        b(i, ye), v(i, ye);
      }
    }
    if (D) throw O;
    if (!pe) throw Error(t(426));
    return B;
  }
  return Lr.renderToNodeStream = function() {
    throw Error(t(207));
  }, Lr.renderToStaticMarkup = function(i, u) {
    return Qr(i, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Lr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Lr.renderToString = function(i, u) {
    return Qr(i, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Lr.version = "18.3.1", Lr;
}
var Vn = {}, _o;
function Ic() {
  if (_o) return Vn;
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
  function _(o, c) {
    typeof o.error == "function" ? o.error(c) : o.close();
  }
  var x = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, T = {};
  function k(o) {
    return x.call(T, o) ? !0 : x.call(z, o) ? !1 : L.test(o) ? T[o] = !0 : (z[o] = !0, !1);
  }
  function I(o, c, p, w, P, N, W) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = w, this.attributeNamespace = P, this.mustUseProperty = p, this.propertyName = o, this.type = c, this.sanitizeURL = N, this.removeEmptyString = W;
  }
  var U = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    U[o] = new I(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var c = o[0];
    U[c] = new I(c, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    U[o] = new I(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    U[o] = new I(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    U[o] = new I(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    U[o] = new I(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    U[o] = new I(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    U[o] = new I(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    U[o] = new I(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var $ = /[\-:]([a-z])/g;
  function V(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var c = o.replace(
      $,
      V
    );
    U[c] = new I(c, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var c = o.replace($, V);
    U[c] = new I(c, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var c = o.replace($, V);
    U[c] = new I(c, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    U[o] = new I(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), U.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    U[o] = new I(o, 1, !1, o.toLowerCase(), null, !0, !0);
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
  function ke(o) {
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
  var Ne = /([A-Z])/g, Me = /^ms-/, Ye = Array.isArray, ue = f("<script>"), me = f("<\/script>"), Oe = f('<script src="'), Ie = f('<script type="module" src="'), Ce = f('" async=""><\/script>'), lt = /(<\/|<)(s)(cript)/gi;
  function je(o, c, p, w) {
    return "" + c + (p === "s" ? "\\u0073" : "\\u0053") + w;
  }
  function Re(o, c, p, w, P) {
    o = o === void 0 ? "" : o, c = c === void 0 ? ue : f('<script nonce="' + ke(c) + '">');
    var N = [];
    if (p !== void 0 && N.push(c, h(("" + p).replace(lt, je)), me), w !== void 0) for (p = 0; p < w.length; p++) N.push(Oe, h(ke(w[p])), Ce);
    if (P !== void 0) for (w = 0; w < P.length; w++) N.push(Ie, h(ke(P[w])), Ce);
    return { bootstrapChunks: N, startInlineScript: c, placeholderPrefix: f(o + "P:"), segmentPrefix: f(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
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
  var H = f("<!-- -->");
  function R(o, c, p, w) {
    return c === "" ? w : (w && o.push(H), o.push(h(ke(c))), !0);
  }
  var F = /* @__PURE__ */ new Map(), j = f(' style="'), y = f(":"), ee = f(";");
  function E(o, c, p) {
    if (typeof p != "object") throw Error(t(62));
    c = !0;
    for (var w in p) if (x.call(p, w)) {
      var P = p[w];
      if (P != null && typeof P != "boolean" && P !== "") {
        if (w.indexOf("--") === 0) {
          var N = h(ke(w));
          P = h(ke(("" + P).trim()));
        } else {
          N = w;
          var W = F.get(N);
          W !== void 0 || (W = f(ke(N.replace(Ne, "-$1").toLowerCase().replace(Me, "-ms-"))), F.set(N, W)), N = W, P = typeof P == "number" ? P === 0 || x.call(q, w) ? h("" + P) : h(P + "px") : h(ke(("" + P).trim()));
        }
        c ? (c = !1, o.push(j, N, y, P)) : o.push(ee, N, y, P);
      }
    }
    c || o.push(te);
  }
  var ie = f(" "), J = f('="'), te = f('"'), X = f('=""');
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
      if (c = U.hasOwnProperty(p) ? U[p] : null, c !== null) {
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
            w === !0 ? o.push(ie, p, X) : w !== !1 && o.push(ie, p, J, h(ke(w)), te);
            break;
          case 5:
            isNaN(w) || o.push(ie, p, J, h(ke(w)), te);
            break;
          case 6:
            !isNaN(w) && 1 <= w && o.push(ie, p, J, h(ke(w)), te);
            break;
          default:
            c.sanitizeURL && (w = "" + w), o.push(ie, p, J, h(ke(w)), te);
        }
      } else if (k(p)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = p.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        o.push(ie, h(p), J, h(ke(w)), te);
      }
    }
  }
  var de = f(">"), K = f("/>");
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
    o.push(Se(p));
    var P = p = null, N;
    for (N in c) if (x.call(c, N)) {
      var W = c[N];
      if (W != null) switch (N) {
        case "children":
          p = W;
          break;
        case "dangerouslySetInnerHTML":
          P = W;
          break;
        default:
          ne(o, w, N, W);
      }
    }
    return o.push(de), ge(o, P, p), typeof p == "string" ? (o.push(h(ke(p))), null) : p;
  }
  var ce = f(`
`), ot = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, We = /* @__PURE__ */ new Map();
  function Se(o) {
    var c = We.get(o);
    if (c === void 0) {
      if (!ot.test(o)) throw Error(t(65, o));
      c = f("<" + o), We.set(o, c);
    }
    return c;
  }
  var Y = f("<!DOCTYPE html>");
  function oe(o, c, p, w, P) {
    switch (c) {
      case "select":
        o.push(Se("select"));
        var N = null, W = null;
        for (xe in p) if (x.call(p, xe)) {
          var Z = p[xe];
          if (Z != null) switch (xe) {
            case "children":
              N = Z;
              break;
            case "dangerouslySetInnerHTML":
              W = Z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(o, w, xe, Z);
          }
        }
        return o.push(de), ge(o, W, N), N;
      case "option":
        W = P.selectedValue, o.push(Se("option"));
        var he = Z = null, Te = null, xe = null;
        for (N in p) if (x.call(p, N)) {
          var Je = p[N];
          if (Je != null) switch (N) {
            case "children":
              Z = Je;
              break;
            case "selected":
              Te = Je;
              break;
            case "dangerouslySetInnerHTML":
              xe = Je;
              break;
            case "value":
              he = Je;
            default:
              ne(o, w, N, Je);
          }
        }
        if (W != null) if (p = he !== null ? "" + he : re(Z), Ye(W)) {
          for (w = 0; w < W.length; w++)
            if ("" + W[w] === p) {
              o.push(le);
              break;
            }
        } else "" + W === p && o.push(le);
        else Te && o.push(le);
        return o.push(de), ge(o, xe, Z), Z;
      case "textarea":
        o.push(Se("textarea")), xe = W = N = null;
        for (Z in p) if (x.call(p, Z) && (he = p[Z], he != null)) switch (Z) {
          case "children":
            xe = he;
            break;
          case "value":
            N = he;
            break;
          case "defaultValue":
            W = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(o, w, Z, he);
        }
        if (N === null && W !== null && (N = W), o.push(de), xe != null) {
          if (N != null) throw Error(t(92));
          if (Ye(xe) && 1 < xe.length) throw Error(t(93));
          N = "" + xe;
        }
        return typeof N == "string" && N[0] === `
` && o.push(ce), N !== null && o.push(h(ke("" + N))), null;
      case "input":
        o.push(Se("input")), he = xe = Z = N = null;
        for (W in p) if (x.call(p, W) && (Te = p[W], Te != null)) switch (W) {
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
            N = Te;
            break;
          default:
            ne(o, w, W, Te);
        }
        return xe !== null ? ne(
          o,
          w,
          "checked",
          xe
        ) : he !== null && ne(o, w, "checked", he), N !== null ? ne(o, w, "value", N) : Z !== null && ne(o, w, "value", Z), o.push(K), null;
      case "menuitem":
        o.push(Se("menuitem"));
        for (var Lt in p) if (x.call(p, Lt) && (N = p[Lt], N != null)) switch (Lt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(o, w, Lt, N);
        }
        return o.push(de), null;
      case "title":
        o.push(Se("title")), N = null;
        for (Je in p) if (x.call(p, Je) && (W = p[Je], W != null)) switch (Je) {
          case "children":
            N = W;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(o, w, Je, W);
        }
        return o.push(de), N;
      case "listing":
      case "pre":
        o.push(Se(c)), W = N = null;
        for (he in p) if (x.call(p, he) && (Z = p[he], Z != null)) switch (he) {
          case "children":
            N = Z;
            break;
          case "dangerouslySetInnerHTML":
            W = Z;
            break;
          default:
            ne(o, w, he, Z);
        }
        if (o.push(de), W != null) {
          if (N != null) throw Error(t(60));
          if (typeof W != "object" || !("__html" in W)) throw Error(t(61));
          p = W.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? o.push(ce, h(p)) : o.push(h("" + p)));
        }
        return typeof N == "string" && N[0] === `
` && o.push(ce), N;
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
        for (var Qt in p) if (x.call(p, Qt) && (N = p[Qt], N != null)) switch (Qt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            ne(o, w, Qt, N);
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
        return $e(o, p, c, w);
      case "html":
        return P.insertionMode === 0 && o.push(Y), $e(o, p, c, w);
      default:
        if (c.indexOf("-") === -1 && typeof p.is != "string") return $e(o, p, c, w);
        o.push(Se(c)), W = N = null;
        for (Te in p) if (x.call(p, Te) && (Z = p[Te], Z != null)) switch (Te) {
          case "children":
            N = Z;
            break;
          case "dangerouslySetInnerHTML":
            W = Z;
            break;
          case "style":
            E(o, w, Z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            k(Te) && typeof Z != "function" && typeof Z != "symbol" && o.push(ie, h(Te), J, h(ke(Z)), te);
        }
        return o.push(de), ge(o, W, N), N;
    }
  }
  var Xe = f("</"), Pe = f(">"), De = f('<template id="'), nr = f('"></template>'), ar = f("<!--$-->"), Bt = f('<!--$?--><template id="'), Wt = f('"></template>'), ht = f("<!--$!-->"), At = f("<!--/$-->"), nt = f("<template"), pt = f('"'), qt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Vt = f("></template>");
  function mt(o, c, p) {
    if (a(o, Bt), p === null) throw Error(t(395));
    return a(o, p), s(o, Wt);
  }
  var kt = f('<div hidden id="'), gt = f('">'), Le = f("</div>"), ct = f('<svg aria-hidden="true" style="display:none" id="'), ir = f('">'), Yt = f("</svg>"), fe = f('<math aria-hidden="true" style="display:none" id="'), st = f('">'), Rt = f("</math>"), or = f('<table hidden id="'), Ot = f('">'), Gt = f("</table>"), sr = f('<table hidden><tbody id="'), kr = f('">'), at = f("</tbody></table>"), ut = f('<table hidden><tr id="'), dr = f('">'), Ft = f("</tr></table>"), zt = f('<table hidden><colgroup id="'), Ut = f('">'), Qe = f("</colgroup></table>");
  function fr(o, c, p, w) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return a(o, kt), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, gt);
      case 2:
        return a(o, ct), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, ir);
      case 3:
        return a(o, fe), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, st);
      case 4:
        return a(o, or), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, Ot);
      case 5:
        return a(o, sr), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, kr);
      case 6:
        return a(o, ut), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, dr);
      case 7:
        return a(
          o,
          zt
        ), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, Ut);
      default:
        throw Error(t(397));
    }
  }
  function Nt(o, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(o, Le);
      case 2:
        return s(o, Yt);
      case 3:
        return s(o, Rt);
      case 4:
        return s(o, Gt);
      case 5:
        return s(o, at);
      case 6:
        return s(o, Ft);
      case 7:
        return s(o, Qe);
      default:
        throw Error(t(397));
    }
  }
  var pr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Xt = f('$RS("'), lr = f('","'), b = f('")<\/script>'), v = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), A = f('$RC("'), G = f('","'), be = f('")<\/script>'), ve = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = f('$RX("'), Fe = f('"'), Ge = f(")<\/script>"), bt = f(","), Ze = /[<\u2028\u2029]/g;
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
  var It = Object.assign, Rr = Symbol.for("react.element"), Or = Symbol.for("react.portal"), Nr = Symbol.for("react.fragment"), Xr = Symbol.for("react.strict_mode"), Zr = Symbol.for("react.profiler"), Kr = Symbol.for("react.provider"), zr = Symbol.for("react.context"), An = Symbol.for("react.forward_ref"), Rn = Symbol.for("react.suspense"), Qr = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), m = Symbol.for("react.scope"), S = Symbol.for("react.debug_trace_mode"), D = Symbol.for("react.legacy_hidden"), O = Symbol.for("react.default_value"), B = Symbol.iterator;
  function Q(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case Nr:
        return "Fragment";
      case Or:
        return "Portal";
      case Zr:
        return "Profiler";
      case Xr:
        return "StrictMode";
      case Rn:
        return "Suspense";
      case Qr:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case zr:
        return (o.displayName || "Context") + ".Consumer";
      case Kr:
        return (o._context.displayName || "Context") + ".Provider";
      case An:
        var c = o.render;
        return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case i:
        return c = o.displayName || null, c !== null ? c : Q(o.type) || "Memo";
      case u:
        c = o._payload, o = o._init;
        try {
          return Q(o(c));
        } catch {
        }
    }
    return null;
  }
  var pe = {};
  function ye(o, c) {
    if (o = o.contextTypes, !o) return pe;
    var p = {}, w;
    for (w in o) p[w] = c[w];
    return p;
  }
  var _e = null;
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
  function Zt(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && Zt(o);
  }
  function Kt(o) {
    var c = o.parent;
    c !== null && Kt(c), o.context._currentValue = o.value;
  }
  function Pt(o, c) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === c.depth ? tt(o, c) : Pt(o, c);
  }
  function Ir(o, c) {
    var p = c.parent;
    if (p === null) throw Error(t(402));
    o.depth === p.depth ? tt(o, p) : Ir(o, p), c.context._currentValue = c.value;
  }
  function hr(o) {
    var c = _e;
    c !== o && (c === null ? Kt(o) : o === null ? Zt(c) : c.depth === o.depth ? tt(c, o) : c.depth > o.depth ? Pt(c, o) : Ir(c, o), _e = o);
  }
  var Jr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, c) {
    o = o._reactInternals, o.queue !== null && o.queue.push(c);
  }, enqueueReplaceState: function(o, c) {
    o = o._reactInternals, o.replace = !0, o.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Pr(o, c, p, w) {
    var P = o.state !== void 0 ? o.state : null;
    o.updater = Jr, o.props = p, o.state = P;
    var N = { queue: [], replace: !1 };
    o._reactInternals = N;
    var W = c.contextType;
    if (o.context = typeof W == "object" && W !== null ? W._currentValue : w, W = c.getDerivedStateFromProps, typeof W == "function" && (W = W(p, P), P = W == null ? P : It({}, P, W), o.state = P), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (c = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), c !== o.state && Jr.enqueueReplaceState(o, o.state, null), N.queue !== null && 0 < N.queue.length) if (c = N.queue, W = N.replace, N.queue = null, N.replace = !1, W && c.length === 1) o.state = c[0];
    else {
      for (N = W ? c[0] : o.state, P = !0, W = W ? 1 : 0; W < c.length; W++) {
        var Z = c[W];
        Z = typeof Z == "function" ? Z.call(o, N, p, w) : Z, Z != null && (P ? (P = !1, N = It({}, N, Z)) : It(N, Z));
      }
      o.state = N;
    }
    else N.queue = null;
  }
  var On = { id: 1, overflow: "" };
  function Sr(o, c, p) {
    var w = o.id;
    o = o.overflow;
    var P = 32 - Nn(w) - 1;
    w &= ~(1 << P), p += 1;
    var N = 32 - Nn(c) + P;
    if (30 < N) {
      var W = P - P % 5;
      return N = (w & (1 << W) - 1).toString(32), w >>= W, P -= W, { id: 1 << 32 - Nn(c) + P | p << P | w, overflow: N + o };
    }
    return { id: 1 << N | p << P | w, overflow: o };
  }
  var Nn = Math.clz32 ? Math.clz32 : Ml, Dl = Math.log, Ll = Math.LN2;
  function Ml(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Dl(o) / Ll | 0) | 0;
  }
  function jl(o, c) {
    return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
  }
  var Fl = typeof Object.is == "function" ? Object.is : jl, mr = null, xa = null, In = null, Ke = null, en = !1, Pn = !1, tn = 0, _r = null, Dn = 0;
  function Dr() {
    if (mr === null) throw Error(t(321));
    return mr;
  }
  function Fi() {
    if (0 < Dn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ta() {
    return Ke === null ? In === null ? (en = !1, In = Ke = Fi()) : (en = !0, Ke = In) : Ke.next === null ? (en = !1, Ke = Ke.next = Fi()) : (en = !0, Ke = Ke.next), Ke;
  }
  function Ca() {
    xa = mr = null, Pn = !1, In = null, Dn = 0, Ke = _r = null;
  }
  function zi(o, c) {
    return typeof c == "function" ? c(o) : c;
  }
  function Ui(o, c, p) {
    if (mr = Dr(), Ke = Ta(), en) {
      var w = Ke.queue;
      if (c = w.dispatch, _r !== null && (p = _r.get(w), p !== void 0)) {
        _r.delete(w), w = Ke.memoizedState;
        do
          w = o(w, p.action), p = p.next;
        while (p !== null);
        return Ke.memoizedState = w, [w, c];
      }
      return [Ke.memoizedState, c];
    }
    return o = o === zi ? typeof c == "function" ? c() : c : p !== void 0 ? p(c) : c, Ke.memoizedState = o, o = Ke.queue = { last: null, dispatch: null }, o = o.dispatch = zl.bind(null, mr, o), [Ke.memoizedState, o];
  }
  function $i(o, c) {
    if (mr = Dr(), Ke = Ta(), c = c === void 0 ? null : c, Ke !== null) {
      var p = Ke.memoizedState;
      if (p !== null && c !== null) {
        var w = p[1];
        e: if (w === null) w = !1;
        else {
          for (var P = 0; P < w.length && P < c.length; P++) if (!Fl(c[P], w[P])) {
            w = !1;
            break e;
          }
          w = !0;
        }
        if (w) return p[0];
      }
    }
    return o = o(), Ke.memoizedState = [o, c], o;
  }
  function zl(o, c, p) {
    if (25 <= Dn) throw Error(t(301));
    if (o === mr) if (Pn = !0, o = { action: p, next: null }, _r === null && (_r = /* @__PURE__ */ new Map()), p = _r.get(c), p === void 0) _r.set(c, o);
    else {
      for (c = p; c.next !== null; ) c = c.next;
      c.next = o;
    }
  }
  function Ul() {
    throw Error(t(394));
  }
  function Ln() {
  }
  var Hi = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return Dr(), o._currentValue;
  }, useMemo: $i, useReducer: Ui, useRef: function(o) {
    mr = Dr(), Ke = Ta();
    var c = Ke.memoizedState;
    return c === null ? (o = { current: o }, Ke.memoizedState = o) : c;
  }, useState: function(o) {
    return Ui(zi, o);
  }, useInsertionEffect: Ln, useLayoutEffect: function() {
  }, useCallback: function(o, c) {
    return $i(function() {
      return o;
    }, c);
  }, useImperativeHandle: Ln, useEffect: Ln, useDebugValue: Ln, useDeferredValue: function(o) {
    return Dr(), o;
  }, useTransition: function() {
    return Dr(), [!1, Ul];
  }, useId: function() {
    var o = xa.treeContext, c = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Nn(o) - 1)).toString(32) + c;
    var p = Mn;
    if (p === null) throw Error(t(404));
    return c = tn++, o = ":" + p.idPrefix + "R" + o, 0 < c && (o += "H" + c.toString(32)), o + ":";
  }, useMutableSource: function(o, c) {
    return Dr(), c(o._source);
  }, useSyncExternalStore: function(o, c, p) {
    if (p === void 0) throw Error(t(407));
    return p();
  } }, Mn = null, Ea = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function $l(o) {
    return console.error(o), null;
  }
  function rn() {
  }
  function Hl(o, c, p, w, P, N, W, Z, he) {
    var Te = [], xe = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: Te, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: P === void 0 ? $l : P, onAllReady: N === void 0 ? rn : N, onShellReady: W === void 0 ? rn : W, onShellError: Z === void 0 ? rn : Z, onFatalError: he === void 0 ? rn : he }, p = jn(c, 0, null, p, !1, !1), p.parentFlushed = !0, o = Aa(c, o, null, p, xe, pe, null, On), Te.push(o), c;
  }
  function Aa(o, c, p, w, P, N, W, Z) {
    o.allPendingTasks++, p === null ? o.pendingRootTasks++ : p.pendingTasks++;
    var he = { node: c, ping: function() {
      var Te = o.pingedTasks;
      Te.push(he), Te.length === 1 && Xi(o);
    }, blockedBoundary: p, blockedSegment: w, abortSet: P, legacyContext: N, context: W, treeContext: Z };
    return P.add(he), he;
  }
  function jn(o, c, p, w, P, N) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: p, lastPushedText: P, textEmbedded: N };
  }
  function nn(o, c) {
    if (o = o.onError(c), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function Fn(o, c) {
    var p = o.onShellError;
    p(c), p = o.onFatalError, p(c), o.destination !== null ? (o.status = 2, _(o.destination, c)) : (o.status = 1, o.fatalError = c);
  }
  function Bi(o, c, p, w, P) {
    for (mr = {}, xa = c, tn = 0, o = p(w, P); Pn; ) Pn = !1, tn = 0, Dn += 1, Ke = null, o = p(w, P);
    return Ca(), o;
  }
  function Wi(o, c, p, w) {
    var P = p.render(), N = w.childContextTypes;
    if (N != null) {
      var W = c.legacyContext;
      if (typeof p.getChildContext != "function") w = W;
      else {
        p = p.getChildContext();
        for (var Z in p) if (!(Z in N)) throw Error(t(108, Q(w) || "Unknown", Z));
        w = It({}, W, p);
      }
      c.legacyContext = w, Dt(o, c, P), c.legacyContext = W;
    } else Dt(o, c, P);
  }
  function qi(o, c) {
    if (o && o.defaultProps) {
      c = It({}, c), o = o.defaultProps;
      for (var p in o) c[p] === void 0 && (c[p] = o[p]);
      return c;
    }
    return c;
  }
  function Ra(o, c, p, w, P) {
    if (typeof p == "function") if (p.prototype && p.prototype.isReactComponent) {
      P = ye(p, c.legacyContext);
      var N = p.contextType;
      N = new p(w, typeof N == "object" && N !== null ? N._currentValue : P), Pr(N, p, w, P), Wi(o, c, N, p);
    } else {
      N = ye(p, c.legacyContext), P = Bi(o, c, p, w, N);
      var W = tn !== 0;
      if (typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0) Pr(P, p, w, N), Wi(o, c, P, p);
      else if (W) {
        w = c.treeContext, c.treeContext = Sr(w, 1, 0);
        try {
          Dt(o, c, P);
        } finally {
          c.treeContext = w;
        }
      } else Dt(o, c, P);
    }
    else if (typeof p == "string") {
      switch (P = c.blockedSegment, N = oe(P.chunks, p, w, o.responseState, P.formatContext), P.lastPushedText = !1, W = P.formatContext, P.formatContext = se(W, p, w), Oa(o, c, N), P.formatContext = W, p) {
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
        case D:
        case S:
        case Xr:
        case Zr:
        case Nr:
          Dt(o, c, w.children);
          return;
        case Qr:
          Dt(o, c, w.children);
          return;
        case m:
          throw Error(t(343));
        case Rn:
          e: {
            p = c.blockedBoundary, P = c.blockedSegment, N = w.fallback, w = w.children, W = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: W, errorDigest: null }, he = jn(o, P.chunks.length, Z, P.formatContext, !1, !1);
            P.children.push(he), P.lastPushedText = !1;
            var Te = jn(o, 0, null, P.formatContext, !1, !1);
            Te.parentFlushed = !0, c.blockedBoundary = Z, c.blockedSegment = Te;
            try {
              if (Oa(
                o,
                c,
                w
              ), Te.lastPushedText && Te.textEmbedded && Te.chunks.push(H), Te.status = 1, zn(Z, Te), Z.pendingTasks === 0) break e;
            } catch (xe) {
              Te.status = 4, Z.forceClientRender = !0, Z.errorDigest = nn(o, xe);
            } finally {
              c.blockedBoundary = p, c.blockedSegment = P;
            }
            c = Aa(o, N, p, he, W, c.legacyContext, c.context, c.treeContext), o.pingedTasks.push(c);
          }
          return;
      }
      if (typeof p == "object" && p !== null) switch (p.$$typeof) {
        case An:
          if (w = Bi(o, c, p.render, w, P), tn !== 0) {
            p = c.treeContext, c.treeContext = Sr(p, 1, 0);
            try {
              Dt(o, c, w);
            } finally {
              c.treeContext = p;
            }
          } else Dt(o, c, w);
          return;
        case i:
          p = p.type, w = qi(p, w), Ra(o, c, p, w, P);
          return;
        case Kr:
          if (P = w.children, p = p._context, w = w.value, N = p._currentValue, p._currentValue = w, W = _e, _e = w = { parent: W, depth: W === null ? 0 : W.depth + 1, context: p, parentValue: N, value: w }, c.context = w, Dt(o, c, P), o = _e, o === null) throw Error(t(403));
          w = o.parentValue, o.context._currentValue = w === O ? o.context._defaultValue : w, o = _e = o.parent, c.context = o;
          return;
        case zr:
          w = w.children, w = w(p._currentValue), Dt(o, c, w);
          return;
        case u:
          P = p._init, p = P(p._payload), w = qi(p, w), Ra(o, c, p, w, void 0);
          return;
      }
      throw Error(t(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function Dt(o, c, p) {
    if (c.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Rr:
          Ra(o, c, p.type, p.props, p.ref);
          return;
        case Or:
          throw Error(t(257));
        case u:
          var w = p._init;
          p = w(p._payload), Dt(o, c, p);
          return;
      }
      if (Ye(p)) {
        Vi(o, c, p);
        return;
      }
      if (p === null || typeof p != "object" ? w = null : (w = B && p[B] || p["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(p))) {
        if (p = w.next(), !p.done) {
          var P = [];
          do
            P.push(p.value), p = w.next();
          while (!p.done);
          Vi(o, c, P);
        }
        return;
      }
      throw o = Object.prototype.toString.call(p), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : o));
    }
    typeof p == "string" ? (w = c.blockedSegment, w.lastPushedText = R(c.blockedSegment.chunks, p, o.responseState, w.lastPushedText)) : typeof p == "number" && (w = c.blockedSegment, w.lastPushedText = R(c.blockedSegment.chunks, "" + p, o.responseState, w.lastPushedText));
  }
  function Vi(o, c, p) {
    for (var w = p.length, P = 0; P < w; P++) {
      var N = c.treeContext;
      c.treeContext = Sr(N, w, P);
      try {
        Oa(o, c, p[P]);
      } finally {
        c.treeContext = N;
      }
    }
  }
  function Oa(o, c, p) {
    var w = c.blockedSegment.formatContext, P = c.legacyContext, N = c.context;
    try {
      return Dt(o, c, p);
    } catch (he) {
      if (Ca(), typeof he == "object" && he !== null && typeof he.then == "function") {
        p = he;
        var W = c.blockedSegment, Z = jn(o, W.chunks.length, null, W.formatContext, W.lastPushedText, !0);
        W.children.push(Z), W.lastPushedText = !1, o = Aa(o, c.node, c.blockedBoundary, Z, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, p.then(o, o), c.blockedSegment.formatContext = w, c.legacyContext = P, c.context = N, hr(N);
      } else throw c.blockedSegment.formatContext = w, c.legacyContext = P, c.context = N, hr(N), he;
    }
  }
  function Bl(o) {
    var c = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Gi(this, c, o);
  }
  function Yi(o, c, p) {
    var w = o.blockedBoundary;
    o.blockedSegment.status = 3, w === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, o = p === void 0 ? Error(t(432)) : p, w.errorDigest = c.onError(o), w.parentFlushed && c.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(P) {
      return Yi(P, c, p);
    }), w.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (w = c.onAllReady, w()));
  }
  function zn(o, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var p = c.children[0];
      p.id = c.id, p.parentFlushed = !0, p.status === 1 && zn(o, p);
    } else o.completedSegments.push(c);
  }
  function Gi(o, c, p) {
    if (c === null) {
      if (p.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = p;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = rn, c = o.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && zn(c, p), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(Bl, o), c.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (zn(c, p), c.completedSegments.length === 1 && c.parentFlushed && o.partialBoundaries.push(c)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function Xi(o) {
    if (o.status !== 2) {
      var c = _e, p = Ea.current;
      Ea.current = Hi;
      var w = Mn;
      Mn = o.responseState;
      try {
        var P = o.pingedTasks, N;
        for (N = 0; N < P.length; N++) {
          var W = P[N], Z = o, he = W.blockedSegment;
          if (he.status === 0) {
            hr(W.context);
            try {
              Dt(Z, W, W.node), he.lastPushedText && he.textEmbedded && he.chunks.push(H), W.abortSet.delete(W), he.status = 1, Gi(Z, W.blockedBoundary, he);
            } catch (Jt) {
              if (Ca(), typeof Jt == "object" && Jt !== null && typeof Jt.then == "function") {
                var Te = W.ping;
                Jt.then(Te, Te);
              } else {
                W.abortSet.delete(W), he.status = 4;
                var xe = W.blockedBoundary, Je = Jt, Lt = nn(Z, Je);
                if (xe === null ? Fn(Z, Je) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Lt, xe.parentFlushed && Z.clientRenderedBoundaries.push(xe))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var Qt = Z.onAllReady;
                  Qt();
                }
              }
            } finally {
            }
          }
        }
        P.splice(0, N), o.destination !== null && Na(o, o.destination);
      } catch (Jt) {
        nn(o, Jt), Fn(o, Jt);
      } finally {
        Mn = w, Ea.current = p, p === Hi && hr(c);
      }
    }
  }
  function Un(o, c, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var w = p.id = o.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, o = o.responseState, a(c, De), a(c, o.placeholderPrefix), o = h(w.toString(16)), a(c, o), s(c, nr);
      case 1:
        p.status = 2;
        var P = !0;
        w = p.chunks;
        var N = 0;
        p = p.children;
        for (var W = 0; W < p.length; W++) {
          for (P = p[W]; N < P.index; N++) a(c, w[N]);
          P = $n(o, c, P);
        }
        for (; N < w.length - 1; N++) a(c, w[N]);
        return N < w.length && (P = s(c, w[N])), P;
      default:
        throw Error(t(390));
    }
  }
  function $n(o, c, p) {
    var w = p.boundary;
    if (w === null) return Un(o, c, p);
    if (w.parentFlushed = !0, w.forceClientRender) w = w.errorDigest, s(c, ht), a(c, nt), w && (a(c, qt), a(c, h(ke(w))), a(c, pt)), s(c, Vt), Un(o, c, p);
    else if (0 < w.pendingTasks) {
      w.rootSegmentID = o.nextSegmentId++, 0 < w.completedSegments.length && o.partialBoundaries.push(w);
      var P = o.responseState, N = P.nextSuspenseID++;
      P = f(P.boundaryPrefix + N.toString(16)), w = w.id = P, mt(c, o.responseState, w), Un(o, c, p);
    } else if (w.byteSize > o.progressiveChunkSize) w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), mt(c, o.responseState, w.id), Un(o, c, p);
    else {
      if (s(c, ar), p = w.completedSegments, p.length !== 1) throw Error(t(391));
      $n(o, c, p[0]);
    }
    return s(c, At);
  }
  function Zi(o, c, p) {
    return fr(c, o.responseState, p.formatContext, p.id), $n(o, c, p), Nt(c, p.formatContext);
  }
  function Ki(o, c, p) {
    for (var w = p.completedSegments, P = 0; P < w.length; P++) Qi(o, c, p, w[P]);
    if (w.length = 0, o = o.responseState, w = p.id, p = p.rootSegmentID, a(c, o.startInlineScript), o.sentCompleteBoundaryFunction ? a(c, A) : (o.sentCompleteBoundaryFunction = !0, a(c, v)), w === null) throw Error(t(395));
    return p = h(p.toString(16)), a(c, w), a(c, G), a(c, o.segmentPrefix), a(c, p), s(c, be);
  }
  function Qi(o, c, p, w) {
    if (w.status === 2) return !0;
    var P = w.id;
    if (P === -1) {
      if ((w.id = p.rootSegmentID) === -1) throw Error(t(392));
      return Zi(o, c, w);
    }
    return Zi(o, c, w), o = o.responseState, a(c, o.startInlineScript), o.sentCompleteSegmentFunction ? a(c, Xt) : (o.sentCompleteSegmentFunction = !0, a(c, pr)), a(c, o.segmentPrefix), P = h(P.toString(16)), a(c, P), a(c, lr), a(c, o.placeholderPrefix), a(c, P), s(c, b);
  }
  function Na(o, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var p = o.completedRootSegment;
      if (p !== null && o.pendingRootTasks === 0) {
        $n(o, c, p), o.completedRootSegment = null;
        var w = o.responseState.bootstrapChunks;
        for (p = 0; p < w.length - 1; p++) a(c, w[p]);
        p < w.length && s(c, w[p]);
      }
      var P = o.clientRenderedBoundaries, N;
      for (N = 0; N < P.length; N++) {
        var W = P[N];
        w = c;
        var Z = o.responseState, he = W.id, Te = W.errorDigest, xe = W.errorMessage, Je = W.errorComponentStack;
        if (a(w, Z.startInlineScript), Z.sentClientRenderFunction ? a(w, we) : (Z.sentClientRenderFunction = !0, a(
          w,
          ve
        )), he === null) throw Error(t(395));
        a(w, he), a(w, Fe), (Te || xe || Je) && (a(w, bt), a(w, h(He(Te || "")))), (xe || Je) && (a(w, bt), a(w, h(He(xe || "")))), Je && (a(w, bt), a(w, h(He(Je)))), s(w, Ge);
      }
      P.splice(0, N);
      var Lt = o.completedBoundaries;
      for (N = 0; N < Lt.length; N++) Ki(o, c, Lt[N]);
      Lt.splice(0, N), d(c), r = new Uint8Array(512), n = 0;
      var Qt = o.partialBoundaries;
      for (N = 0; N < Qt.length; N++) {
        var Jt = Qt[N];
        e: {
          P = o, W = c;
          var Hn = Jt.completedSegments;
          for (Z = 0; Z < Hn.length; Z++) if (!Qi(
            P,
            W,
            Jt,
            Hn[Z]
          )) {
            Z++, Hn.splice(0, Z);
            var eo = !1;
            break e;
          }
          Hn.splice(0, Z), eo = !0;
        }
        if (!eo) {
          o.destination = null, N++, Qt.splice(0, N);
          return;
        }
      }
      Qt.splice(0, N);
      var Ia = o.completedBoundaries;
      for (N = 0; N < Ia.length; N++) Ki(o, c, Ia[N]);
      Ia.splice(0, N);
    } finally {
      d(c), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && c.close();
    }
  }
  function Ji(o, c) {
    try {
      var p = o.abortableTasks;
      p.forEach(function(w) {
        return Yi(w, o, c);
      }), p.clear(), o.destination !== null && Na(o, o.destination);
    } catch (w) {
      nn(o, w), Fn(o, w);
    }
  }
  return Vn.renderToReadableStream = function(o, c) {
    return new Promise(function(p, w) {
      var P, N, W = new Promise(function(xe, Je) {
        N = xe, P = Je;
      }), Z = Hl(o, Re(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), et(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, N, function() {
        var xe = new ReadableStream({ type: "bytes", pull: function(Je) {
          if (Z.status === 1) Z.status = 2, _(Je, Z.fatalError);
          else if (Z.status !== 2 && Z.destination === null) {
            Z.destination = Je;
            try {
              Na(Z, Je);
            } catch (Lt) {
              nn(Z, Lt), Fn(Z, Lt);
            }
          }
        }, cancel: function() {
          Ji(Z);
        } }, { highWaterMark: 0 });
        xe.allReady = W, p(xe);
      }, function(xe) {
        W.catch(function() {
        }), w(xe);
      }, P);
      if (c && c.signal) {
        var he = c.signal, Te = function() {
          Ji(Z, he.reason), he.removeEventListener("abort", Te);
        };
        he.addEventListener("abort", Te);
      }
      Xi(Z);
    });
  }, Vn.version = "18.3.1", Vn;
}
var xo;
function Pc() {
  if (xo) return xr;
  xo = 1;
  var e, t;
  return e = Nc(), t = Ic(), xr.version = e.version, xr.renderToString = e.renderToString, xr.renderToStaticMarkup = e.renderToStaticMarkup, xr.renderToNodeStream = e.renderToNodeStream, xr.renderToStaticNodeStream = e.renderToStaticNodeStream, xr.renderToReadableStream = t.renderToReadableStream, xr;
}
Pc();
const Dc = "staticMarkup";
function Ls() {
  const e = Gl().indexOf(Dc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const tr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Ls(), { onClick: a, ...s } = r.props;
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
}, Lc = Ci(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: n,
    onClick: a,
    gaData: s
  }, d) => {
    var g, h, f, _, x, L;
    const z = e === n, T = z ? "open" : "close";
    return /* @__PURE__ */ M.jsxs(
      "div",
      {
        ref: d,
        className: er("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (g = r.content) == null ? void 0 : g.icon
        }),
        children: [
          /* @__PURE__ */ M.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ M.jsx("h4", { children: /* @__PURE__ */ M.jsx(
            tr,
            {
              gaData: {
                ...s,
                action: T,
                text: r.content.header
              },
              children: /* @__PURE__ */ M.jsxs(
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
                    (h = r.content) != null && h.icon ? /* @__PURE__ */ M.jsxs("span", { className: "accordion-icon", children: [
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
              className: er("collapse", { show: z }),
              children: /* @__PURE__ */ M.jsx(
                "div",
                {
                  className: "accordion-body",
                  dangerouslySetInnerHTML: Mr(
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
Lc.propTypes = {
  id: l.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: Ds,
  parentId: l.string,
  openCard: l.number,
  onClick: l.func,
  gaData: l.object
};
l.arrayOf(Ds).isRequired, l.number;
const To = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ms = ({
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
  size: L = "default",
  variant: z,
  classes: T,
  target: k = "_self",
  ...I
}) => {
  if (z) {
    const V = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, q = er("btn", V[z], {
      [`btn-${V[z]}-${s}`]: !0,
      "btn-medium": L === "medium",
      "btn-small": L === "small",
      "btn-large": L === "large" || L === "default",
      disabled: d
    });
    let C = g;
    return h && g === "button" && (C = "a"), /* @__PURE__ */ M.jsx(
      tr,
      {
        gaData: {
          ...To,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ M.jsxs(
          C,
          {
            type: C === "button" && x ? "button" : void 0,
            ...I,
            className: er(T) || q,
            href: h,
            ref: _,
            onClick: x,
            "aria-label": n,
            target: C === "a" ? k : null,
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
  const U = er("btn", {
    [`btn-${s}`]: !0,
    "btn-md": L === "small",
    "btn-sm": L === "xsmall",
    "btn-block": a,
    disabled: d
  });
  let $ = g;
  return h && g === "button" && ($ = "a"), /* @__PURE__ */ M.jsx(
    tr,
    {
      gaData: {
        ...To,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ M.jsxs(
        $,
        {
          type: $ === "button" && x ? "button" : void 0,
          ...I,
          className: er(T) || U,
          href: h,
          ref: _,
          onClick: x,
          "aria-label": n,
          target: $ === "a" ? k : null,
          children: [
            f && /* @__PURE__ */ M.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Ms.propTypes = {
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
  gaData: Ai,
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
var Co = { exports: {} }, qe = {}, Eo;
function Mc() {
  if (Eo) return qe;
  Eo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), z = Symbol.for("react.client.reference");
  function T(k) {
    if (typeof k == "object" && k !== null) {
      var I = k.$$typeof;
      switch (I) {
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
                  return I;
              }
          }
        case t:
          return I;
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
    return typeof k == "string" || typeof k == "function" || k === r || k === a || k === n || k === h || k === f || k === L || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === _ || k.$$typeof === d || k.$$typeof === s || k.$$typeof === g || k.$$typeof === z || k.getModuleId !== void 0);
  }, qe.typeOf = T, qe;
}
var Ao;
function jc() {
  return Ao || (Ao = 1, Co.exports = /* @__PURE__ */ Mc()), Co.exports;
}
var js = /* @__PURE__ */ jc();
function Fc(e) {
  function t(H, R, F, j, y) {
    for (var ee = 0, E = 0, ie = 0, J = 0, te, X, ne = 0, de = 0, K, ge = K = te = 0, re = 0, le = 0, $e = 0, ce = 0, ot = F.length, We = ot - 1, Se, Y = "", oe = "", Xe = "", Pe = "", De; re < ot; ) {
      if (X = F.charCodeAt(re), re === We && E + J + ie + ee !== 0 && (E !== 0 && (X = E === 47 ? 10 : 47), J = ie = ee = 0, ot++, We++), E + J + ie + ee === 0) {
        if (re === We && (0 < le && (Y = Y.replace(L, "")), 0 < Y.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Y += F.charAt(re);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (Y = Y.trim(), te = Y.charCodeAt(0), K = 1, ce = ++re; re < ot; ) {
              switch (X = F.charCodeAt(re)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (X = F.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < We; ++ge)
                          switch (F.charCodeAt(ge)) {
                            case 47:
                              if (X === 42 && F.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
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
                  for (; re++ < We && F.charCodeAt(re) !== X; )
                    ;
              }
              if (K === 0) break;
              re++;
            }
            switch (K = F.substring(ce, re), te === 0 && (te = (Y = Y.replace(x, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (Y = Y.replace(L, "")), X = Y.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = R;
                    break;
                  default:
                    le = lt;
                }
                if (K = t(R, le, K, X, y + 1), ce = K.length, 0 < Re && (le = r(lt, Y, $e), De = g(3, K, le, R, Oe, me, ce, X, y, j), Y = le.join(""), De !== void 0 && (ce = (K = De.trim()).length) === 0 && (X = 0, K = "")), 0 < ce) switch (X) {
                  case 115:
                    Y = Y.replace(ae, d);
                  case 100:
                  case 109:
                  case 45:
                    K = Y + "{" + K + "}";
                    break;
                  case 107:
                    Y = Y.replace($, "$1 $2"), K = Y + "{" + K + "}", K = Ce === 1 || Ce === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = Y + K, j === 112 && (K = (oe += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(R, r(R, Y, $e), K, j, y + 1);
            }
            Xe += K, K = $e = le = ge = te = 0, Y = "", X = F.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (Y = (0 < le ? Y.replace(L, "") : Y).trim(), 1 < (ce = Y.length)) switch (ge === 0 && (te = Y.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ce = (Y = Y.replace(" ", ":")).length), 0 < Re && (De = g(1, Y, R, H, Oe, me, oe.length, j, y, j)) !== void 0 && (ce = (Y = De.trim()).length) === 0 && (Y = "\0\0"), te = Y.charCodeAt(0), X = Y.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  Pe += Y + F.charAt(re);
                  break;
                }
              default:
                Y.charCodeAt(ce - 1) !== 58 && (oe += a(Y, te, X, Y.charCodeAt(2)));
            }
            $e = le = ge = te = 0, Y = "", X = F.charCodeAt(++re);
        }
      }
      switch (X) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + te === 0 && j !== 107 && 0 < Y.length && (le = 1, Y += "\0"), 0 < Re * et && g(0, Y, R, H, Oe, me, oe.length, j, y, j), me = 1, Oe++;
          break;
        case 59:
        case 125:
          if (E + J + ie + ee === 0) {
            me++;
            break;
          }
        default:
          switch (me++, Se = F.charAt(re), X) {
            case 9:
            case 32:
              if (J + ee + E === 0) switch (ne) {
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
              J + E + ee === 0 && (le = $e = 1, Se = "\f" + Se);
              break;
            case 108:
              if (J + E + ee + Ie === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && F.charCodeAt(re - 3) === 58 && (Ie = ne);
                case 8:
                  de === 111 && (Ie = de);
              }
              break;
            case 58:
              J + E + ee === 0 && (ge = re);
              break;
            case 44:
              E + ie + J + ee === 0 && (le = 1, Se += "\r");
              break;
            case 34:
            case 39:
              E === 0 && (J = J === X ? 0 : J === 0 ? X : J);
              break;
            case 91:
              J + E + ie === 0 && ee++;
              break;
            case 93:
              J + E + ie === 0 && ee--;
              break;
            case 41:
              J + E + ee === 0 && ie--;
              break;
            case 40:
              if (J + E + ee === 0) {
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
              E + ie + J + ee + ge + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + ee + ie)) switch (E) {
                case 0:
                  switch (2 * X + 3 * F.charCodeAt(re + 1)) {
                    case 235:
                      E = 47;
                      break;
                    case 220:
                      ce = re, E = 42;
                  }
                  break;
                case 42:
                  X === 47 && ne === 42 && ce + 2 !== re && (F.charCodeAt(ce + 2) === 33 && (oe += F.substring(ce, re + 1)), Se = "", E = 0);
              }
          }
          E === 0 && (Y += Se);
      }
      de = ne, ne = X, re++;
    }
    if (ce = oe.length, 0 < ce) {
      if (le = R, 0 < Re && (De = g(2, oe, le, H, Oe, me, ce, j, y, j), De !== void 0 && (oe = De).length === 0)) return Pe + oe + Xe;
      if (oe = le.join(",") + "{" + oe + "}", Ce * Ie !== 0) {
        switch (Ce !== 2 || s(oe, 2) || (Ie = 0), Ie) {
          case 111:
            oe = oe.replace(q, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(V, "::-webkit-input-$1") + oe.replace(V, "::-moz-$1") + oe.replace(V, ":-ms-input-$1") + oe;
        }
        Ie = 0;
      }
    }
    return Pe + oe + Xe;
  }
  function r(H, R, F) {
    var j = R.trim().split(I);
    R = j;
    var y = j.length, ee = H.length;
    switch (ee) {
      case 0:
      case 1:
        var E = 0;
        for (H = ee === 0 ? "" : H[0] + " "; E < y; ++E)
          R[E] = n(H, R[E], F).trim();
        break;
      default:
        var ie = E = 0;
        for (R = []; E < y; ++E)
          for (var J = 0; J < ee; ++J)
            R[ie++] = n(H[J] + " ", j[E], F).trim();
    }
    return R;
  }
  function n(H, R, F) {
    var j = R.charCodeAt(0);
    switch (33 > j && (j = (R = R.trim()).charCodeAt(0)), j) {
      case 38:
        return R.replace(U, "$1" + H.trim());
      case 58:
        return H.trim() + R.replace(U, "$1" + H.trim());
      default:
        if (0 < 1 * F && 0 < R.indexOf("\f")) return R.replace(U, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + R;
  }
  function a(H, R, F, j) {
    var y = H + ";", ee = 2 * R + 3 * F + 4 * j;
    if (ee === 944) {
      H = y.indexOf(":", 9) + 1;
      var E = y.substring(H, y.length - 1).trim();
      return E = y.substring(0, H).trim() + E + ";", Ce === 1 || Ce === 2 && s(E, 1) ? "-webkit-" + E + E : E;
    }
    if (Ce === 0 || Ce === 2 && !s(y, 1)) return y;
    switch (ee) {
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
        return E = y.substring(y.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + E + "-webkit-" + y + "-ms-flex-pack" + E + y;
      case 1005:
        return T.test(y) ? y.replace(z, ":-webkit-") + y.replace(z, ":-moz-") + y : y;
      case 1e3:
        switch (E = y.substring(13).trim(), R = E.indexOf("-") + 1, E.charCodeAt(0) + E.charCodeAt(R)) {
          case 226:
            E = y.replace(C, "tb");
            break;
          case 232:
            E = y.replace(C, "tb-rl");
            break;
          case 220:
            E = y.replace(C, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + E + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (R = (y = H).length - 10, E = (y.charCodeAt(R) === 33 ? y.substring(0, R) : y).substring(H.indexOf(":", 7) + 1).trim(), ee = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
          case 203:
            if (111 > E.charCodeAt(8)) break;
          case 115:
            y = y.replace(E, "-webkit-" + E) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(E, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + y.replace(E, "-webkit-" + E) + ";" + y.replace(E, "-ms-" + E + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return E = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + E + "-ms-flex-" + E + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(Ne, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(Ne, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ye.test(H) === !0) return (E = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(H.replace("stretch", "fill-available"), R, F, j).replace(":fill-available", ":stretch") : y.replace(E, "-webkit-" + E) + y.replace(E, "-moz-" + E.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, F + j === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(H, R) {
    var F = H.indexOf(R === 1 ? ":" : "{"), j = H.substring(0, R !== 3 ? F : 10);
    return F = H.substring(F + 1, H.length - 1), Be(R !== 2 ? j : j.replace(Me, "$1"), F, R);
  }
  function d(H, R) {
    var F = a(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return F !== R + ";" ? F.replace(ke, " or ($1)").substring(4) : "(" + R + ")";
  }
  function g(H, R, F, j, y, ee, E, ie, J, te) {
    for (var X = 0, ne = R, de; X < Re; ++X)
      switch (de = je[X].call(_, H, ne, F, j, y, ee, E, ie, J, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = de;
      }
    if (ne !== R) return ne;
  }
  function h(H) {
    switch (H) {
      case void 0:
      case null:
        Re = je.length = 0;
        break;
      default:
        if (typeof H == "function") je[Re++] = H;
        else if (typeof H == "object") for (var R = 0, F = H.length; R < F; ++R)
          h(H[R]);
        else et = !!H | 0;
    }
    return h;
  }
  function f(H) {
    return H = H.prefix, H !== void 0 && (Be = null, H ? typeof H != "function" ? Ce = 1 : (Ce = 2, Be = H) : Ce = 0), f;
  }
  function _(H, R) {
    var F = H;
    if (33 > F.charCodeAt(0) && (F = F.trim()), se = F, F = [se], 0 < Re) {
      var j = g(-1, R, F, F, Oe, me, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (R = j);
    }
    var y = t(lt, F, R, 0, 0);
    return 0 < Re && (j = g(-2, y, F, F, Oe, me, y.length, 0, 0, 0), j !== void 0 && (y = j)), se = "", Ie = 0, me = Oe = 1, y;
  }
  var x = /^\0+/g, L = /[\0\r\f]/g, z = /: */g, T = /zoo|gra/, k = /([,: ])(transform)/g, I = /,\r+?/g, U = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, V = /::(place)/g, q = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, ke = /([\s\S]*?);/g, Ne = /-self|flex-/g, Me = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ye = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Oe = 1, Ie = 0, Ce = 1, lt = [], je = [], Re = 0, Be = null, et = 0, se = "";
  return _.use = h, _.set = f, e !== void 0 && f(e), _;
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
function Uc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var $c = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ro = /* @__PURE__ */ Uc(
  function(e) {
    return $c.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Oo = { exports: {} }, ze = {}, No;
function Hc() {
  if (No) return ze;
  No = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, z = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, U = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function V(C) {
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
    return V(C) === f;
  }
  return ze.AsyncMode = h, ze.ConcurrentMode = f, ze.ContextConsumer = g, ze.ContextProvider = d, ze.Element = t, ze.ForwardRef = _, ze.Fragment = n, ze.Lazy = T, ze.Memo = z, ze.Portal = r, ze.Profiler = s, ze.StrictMode = a, ze.Suspense = x, ze.isAsyncMode = function(C) {
    return q(C) || V(C) === h;
  }, ze.isConcurrentMode = q, ze.isContextConsumer = function(C) {
    return V(C) === g;
  }, ze.isContextProvider = function(C) {
    return V(C) === d;
  }, ze.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, ze.isForwardRef = function(C) {
    return V(C) === _;
  }, ze.isFragment = function(C) {
    return V(C) === n;
  }, ze.isLazy = function(C) {
    return V(C) === T;
  }, ze.isMemo = function(C) {
    return V(C) === z;
  }, ze.isPortal = function(C) {
    return V(C) === r;
  }, ze.isProfiler = function(C) {
    return V(C) === s;
  }, ze.isStrictMode = function(C) {
    return V(C) === a;
  }, ze.isSuspense = function(C) {
    return V(C) === x;
  }, ze.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === a || C === x || C === L || typeof C == "object" && C !== null && (C.$$typeof === T || C.$$typeof === z || C.$$typeof === d || C.$$typeof === g || C.$$typeof === _ || C.$$typeof === I || C.$$typeof === U || C.$$typeof === $ || C.$$typeof === k);
  }, ze.typeOf = V, ze;
}
var Io;
function Bc() {
  return Io || (Io = 1, Oo.exports = Hc()), Oo.exports;
}
var Ba, Po;
function Wc() {
  if (Po) return Ba;
  Po = 1;
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
  var g = Object.defineProperty, h = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, _ = Object.getOwnPropertyDescriptor, x = Object.getPrototypeOf, L = Object.prototype;
  function z(T, k, I) {
    if (typeof k != "string") {
      if (L) {
        var U = x(k);
        U && U !== L && z(T, U, I);
      }
      var $ = h(k);
      f && ($ = $.concat(f(k)));
      for (var V = d(T), q = d(k), C = 0; C < $.length; ++C) {
        var ae = $[C];
        if (!r[ae] && !(I && I[ae]) && !(q && q[ae]) && !(V && V[ae])) {
          var ke = _(k, ae);
          try {
            g(T, ae, ke);
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
const Vc = /* @__PURE__ */ Ei(qc);
var yt = { env: { NODE_ENV: "production" } };
function br() {
  return (br = Object.assign || function(e) {
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
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !js.typeOf(e);
}, da = Object.freeze([]), Tr = Object.freeze({});
function wn(e) {
  return typeof e == "function";
}
function Lo(e) {
  return e.displayName || e.name || "Component";
}
function Ri(e) {
  return e && typeof e.styledComponentId == "string";
}
var Br = typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_ATTR || yt.env.SC_ATTR) || "data-styled", Oi = typeof window < "u" && "HTMLElement" in window, Yc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && yt.env.REACT_APP_SC_DISABLE_SPEEDY : yt.env.SC_DISABLE_SPEEDY !== void 0 && yt.env.SC_DISABLE_SPEEDY !== "" ? yt.env.SC_DISABLE_SPEEDY !== "false" && yt.env.SC_DISABLE_SPEEDY : yt.env.NODE_ENV !== "production"));
function Tn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Gc = function() {
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
}(), ia = /* @__PURE__ */ new Map(), fa = /* @__PURE__ */ new Map(), bn = 1, Yn = function(e) {
  if (ia.has(e)) return ia.get(e);
  for (; fa.has(bn); ) bn++;
  var t = bn++;
  return ia.set(e, t), fa.set(t, e), t;
}, Xc = function(e) {
  return fa.get(e);
}, Zc = function(e, t) {
  t >= bn && (bn = t + 1), ia.set(e, t), fa.set(t, e);
}, Kc = "style[" + Br + '][data-styled-version="5.3.11"]', Qc = new RegExp("^" + Br + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Jc = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, eu = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var g = d.match(Qc);
      if (g) {
        var h = 0 | parseInt(g[1], 10), f = g[2];
        h !== 0 && (Zc(f, h), Jc(e, f, g[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, tu = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Fs = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(g) {
    for (var h = g.childNodes, f = h.length; f >= 0; f--) {
      var _ = h[f];
      if (_ && _.nodeType === 1 && _.hasAttribute(Br)) return _;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Br, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = tu();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, ru = function() {
  function e(r) {
    var n = this.element = Fs(r);
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
    var n = this.element = Fs(r);
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
}(), Mo = Oi, iu = { isServer: !Oi, useCSSOMInjection: !Yc }, zs = function() {
  function e(r, n, a) {
    r === void 0 && (r = Tr), n === void 0 && (n = {}), this.options = br({}, iu, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Oi && Mo && (Mo = !1, function(s) {
      for (var d = document.querySelectorAll(Kc), g = 0, h = d.length; g < h; g++) {
        var f = d[g];
        f && f.getAttribute(Br) !== "active" && (eu(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Yn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(br({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new au(d) : s ? new ru(d) : new nu(d), new Gc(r)));
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
        var g = Xc(d);
        if (g !== void 0) {
          var h = r.names.get(g), f = n.getGroup(d);
          if (h && f && h.size) {
            var _ = Br + ".g" + d + '[id="' + g + '"]', x = "";
            h !== void 0 && h.forEach(function(L) {
              L.length > 0 && (x += L + ",");
            }), s += "" + f + _ + '{content:"' + x + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), ou = /(a)(d)/gi, jo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ui(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = jo(t % 52) + r;
  return (jo(t % 52) + r).replace(ou, "$1-$2");
}
var $r = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Us = function(e) {
  return $r(5381, e);
};
function su(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (wn(r) && !Ri(r)) return !1;
  }
  return !0;
}
var lu = Us("5.3.11"), cu = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && su(t), this.componentId = r, this.baseHash = $r(lu, r), this.baseStyle = n, zs.registerId(r);
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
      for (var f = this.rules.length, _ = $r(this.baseHash, n.hash), x = "", L = 0; L < f; L++) {
        var z = this.rules[L];
        if (typeof z == "string") x += z;
        else if (z) {
          var T = Wr(z, t, r, n), k = Array.isArray(T) ? T.join("") : T;
          _ = $r(_, k + L), x += k;
        }
      }
      if (x) {
        var I = ui(_ >>> 0);
        if (!r.hasNameForId(a, I)) {
          var U = n(x, "." + I, void 0, a);
          r.insertRules(a, I, U);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), uu = /^\s*\/\/.*$/gm, du = [":", "[", ".", "#"];
function fu(e) {
  var t, r, n, a, s = Tr, d = s.options, g = d === void 0 ? Tr : d, h = s.plugins, f = h === void 0 ? da : h, _ = new Fc(g), x = [], L = /* @__PURE__ */ function(k) {
    function I(U) {
      if (U) try {
        k(U + "}");
      } catch {
      }
    }
    return function(U, $, V, q, C, ae, ke, Ne, Me, Ye) {
      switch (U) {
        case 1:
          if (Me === 0 && $.charCodeAt(0) === 64) return k($ + ";"), "";
          break;
        case 2:
          if (Ne === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (Ne) {
            case 102:
            case 112:
              return k(V[0] + $), "";
            default:
              return $ + (Ye === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(I);
      }
    };
  }(function(k) {
    x.push(k);
  }), z = function(k, I, U) {
    return I === 0 && du.indexOf(U[r.length]) !== -1 || U.match(a) ? k : "." + t;
  };
  function T(k, I, U, $) {
    $ === void 0 && ($ = "&");
    var V = k.replace(uu, ""), q = I && U ? U + " " + I + " { " + V + " }" : V;
    return t = $, r = I, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), _(U || !I ? "" : I, q);
  }
  return _.use([].concat(f, [function(k, I, U) {
    k === 2 && U.length && U[0].lastIndexOf(r) > 0 && (U[0] = U[0].replace(n, z));
  }, L, function(k) {
    if (k === -2) {
      var I = x;
      return x = [], I;
    }
  }])), T.hash = f.length ? f.reduce(function(k, I) {
    return I.name || Tn(15), $r(k, I.name);
  }, 5381).toString() : "", T;
}
var $s = ft.createContext();
$s.Consumer;
var Hs = ft.createContext(), pu = (Hs.Consumer, new zs()), di = fu();
function hu() {
  return wr($s) || pu;
}
function mu() {
  return wr(Hs) || di;
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
}(), bu = /([A-Z])/, yu = /([A-Z])/g, vu = /^ms-/, wu = function(e) {
  return "-" + e.toLowerCase();
};
function Fo(e) {
  return bu.test(e) ? e.replace(yu, wu).replace(vu, "-ms-") : e;
}
var zo = function(e) {
  return e == null || e === !1 || e === "";
};
function Wr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, g = e.length; d < g; d += 1) (a = Wr(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (zo(e)) return "";
  if (Ri(e)) return "." + e.styledComponentId;
  if (wn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return Wr(h, t, r, n);
  }
  var f;
  return e instanceof gu ? r ? (e.inject(r, n), e.getName(n)) : e : ci(e) ? function _(x, L) {
    var z, T, k = [];
    for (var I in x) x.hasOwnProperty(I) && !zo(x[I]) && (Array.isArray(x[I]) && x[I].isCss || wn(x[I]) ? k.push(Fo(I) + ":", x[I], ";") : ci(x[I]) ? k.push.apply(k, _(x[I], I)) : k.push(Fo(I) + ": " + (z = I, (T = x[I]) == null || typeof T == "boolean" || T === "" ? "" : typeof T != "number" || T === 0 || z in zc || z.startsWith("--") ? String(T).trim() : T + "px") + ";"));
    return L ? [L + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var Uo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function ku(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return wn(e) || ci(e) ? Uo(Wr(Do(da, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Uo(Wr(Do(e, r)));
}
var Su = function(e, t, r) {
  return r === void 0 && (r = Tr), e.theme !== r.theme && e.theme || t || r.theme;
}, _u = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, xu = /(^-|-$)/g;
function Wa(e) {
  return e.replace(_u, "-").replace(xu, "");
}
var Tu = function(e) {
  return ui(Us(e) >>> 0);
};
function Gn(e) {
  return typeof e == "string" && yt.env.NODE_ENV === "production";
}
var fi = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Cu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Eu(e, t, r) {
  var n = e[r];
  fi(t) && fi(n) ? Bs(n, t) : e[r] = t;
}
function Bs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (fi(d)) for (var g in d) Cu(g) && Eu(e, d[g], g);
  }
  return e;
}
var Ws = ft.createContext();
Ws.Consumer;
var qa = {};
function qs(e, t, r) {
  var n = Ri(e), a = !Gn(e), s = t.attrs, d = s === void 0 ? da : s, g = t.componentId, h = g === void 0 ? function($, V) {
    var q = typeof $ != "string" ? "sc" : Wa($);
    qa[q] = (qa[q] || 0) + 1;
    var C = q + "-" + Tu("5.3.11" + q + qa[q]);
    return V ? V + "-" + C : C;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, _ = f === void 0 ? function($) {
    return Gn($) ? "styled." + $ : "Styled(" + Lo($) + ")";
  }(e) : f, x = t.displayName && t.componentId ? Wa(t.displayName) + "-" + t.componentId : t.componentId || h, L = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, z = t.shouldForwardProp;
  n && e.shouldForwardProp && (z = t.shouldForwardProp ? function($, V, q) {
    return e.shouldForwardProp($, V, q) && t.shouldForwardProp($, V, q);
  } : e.shouldForwardProp);
  var T, k = new cu(r, x, n ? e.componentStyle : void 0), I = k.isStatic && d.length === 0, U = function($, V) {
    return function(q, C, ae, ke) {
      var Ne = q.attrs, Me = q.componentStyle, Ye = q.defaultProps, ue = q.foldedComponentIds, me = q.shouldForwardProp, Oe = q.styledComponentId, Ie = q.target, Ce = function(j, y, ee) {
        j === void 0 && (j = Tr);
        var E = br({}, y, { theme: j }), ie = {};
        return ee.forEach(function(J) {
          var te, X, ne, de = J;
          for (te in wn(de) && (de = de(E)), de) E[te] = ie[te] = te === "className" ? (X = ie[te], ne = de[te], X && ne ? X + " " + ne : X || ne) : de[te];
        }), [E, ie];
      }(Su(C, wr(Ws), Ye) || Tr, C, Ne), lt = Ce[0], je = Ce[1], Re = function(j, y, ee, E) {
        var ie = hu(), J = mu(), te = y ? j.generateAndInjectStyles(Tr, ie, J) : j.generateAndInjectStyles(ee, ie, J);
        return te;
      }(Me, ke, lt), Be = ae, et = je.$as || C.$as || je.as || C.as || Ie, se = Gn(et), H = je !== C ? br({}, C, {}, je) : C, R = {};
      for (var F in H) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? R.as = H[F] : (me ? me(F, Ro, et) : !se || Ro(F)) && (R[F] = H[F]));
      return C.style && je.style !== C.style && (R.style = br({}, C.style, {}, je.style)), R.className = Array.prototype.concat(ue, Oe, Re !== Oe ? Re : null, C.className, je.className).filter(Boolean).join(" "), R.ref = Be, Cs(et, R);
    }(T, $, V, I);
  };
  return U.displayName = _, (T = ft.forwardRef(U)).attrs = L, T.componentStyle = k, T.displayName = _, T.shouldForwardProp = z, T.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : da, T.styledComponentId = x, T.target = n ? e.target : e, T.withComponent = function($) {
    var V = t.componentId, q = function(ae, ke) {
      if (ae == null) return {};
      var Ne, Me, Ye = {}, ue = Object.keys(ae);
      for (Me = 0; Me < ue.length; Me++) Ne = ue[Me], ke.indexOf(Ne) >= 0 || (Ye[Ne] = ae[Ne]);
      return Ye;
    }(t, ["componentId"]), C = V && V + "-" + (Gn($) ? $ : Wa(Lo($)));
    return qs($, br({}, q, { attrs: L, componentId: C }), r);
  }, Object.defineProperty(T, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = n ? Bs({}, e.defaultProps, $) : $;
  } }), Object.defineProperty(T, "toString", { value: function() {
    return "." + T.styledComponentId;
  } }), a && Vc(T, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), T;
}
var rr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Tr), !js.isValidElementType(n)) return Tn(1, String(n));
    var s = function() {
      return r(n, a, ku.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, br({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, br({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(qs, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  rr[e] = rr(e);
});
rr.div`
  &.sticky {
    position: fixed;
    top: var(--uds-anchor-menu-top, 0px);
    left: 0;
    width: 100%;
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
function ya(e) {
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
}(), jr = function() {
  return jr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, jr.apply(this, arguments);
}, Ru = function(e, t, r, n) {
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
}, Ou = function(e, t) {
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
}, Vs = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, Nu = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Iu = function(e, t) {
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
function Du(e, t, r) {
  var n = t.height, a = t.width, s = Vs(t, ["height", "width"]), d = jr({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), g = window.open(e, "", Object.keys(d).map(function(f) {
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
var Lu = (
  /** @class */
  function(e) {
    Au(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, s = a.onShareWindowClose, d = a.windowHeight, g = d === void 0 ? 400 : d, h = a.windowPosition, f = h === void 0 ? "windowCenter" : h, _ = a.windowWidth, x = _ === void 0 ? 550 : _, L = jr({ height: g, width: x }, f === "windowCenter" ? Iu(x, g) : Pu(x, g));
        Du(n, L, s);
      }, r.handleClick = function(n) {
        return Ru(r, void 0, void 0, function() {
          var a, s, d, g, h, f, _, x, L, z;
          return Ou(this, function(T) {
            switch (T.label) {
              case 0:
                return a = this.props, s = a.beforeOnClick, d = a.disabled, g = a.networkLink, h = a.onClick, f = a.url, _ = a.openShareDialogOnClick, x = a.opts, L = g(f, x), d ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (z = s(), Nu(z) ? [4, z] : [3, 2]) : [3, 2]);
              case 1:
                T.sent(), T.label = 2;
              case 2:
                return _ && this.openShareDialog(L), h && h(n, L), [
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
      var x = Vs(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), L = er("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), z = jr(jr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, _), s && d);
      return ft.createElement("button", jr({}, x, { "aria-label": x["aria-label"] || h, className: L, onClick: this.handleClick, ref: g, style: z }), n);
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
    return f.forEach(function(_) {
      delete h[_];
    }), ft.createElement(Lu, pa({}, n, h, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), Ci(a);
}
function Mu(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + ya({ subject: r, body: n ? n + a + e : e });
}
va("email", Mu, function(e) {
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
var ju = /* @__PURE__ */ function() {
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
}(), Fu = (
  /** @class */
  function(e) {
    ju(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function yn(e, t) {
  if (!e)
    throw new Fu(t);
}
function zu(e, t) {
  var r = t.quote, n = t.hashtag;
  return yn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ya({
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
function Uu(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return yn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + ya({ url: e, mini: "true", title: r, summary: n, source: a });
}
va("linkedin", Uu, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function $u(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, d = t.related, g = d === void 0 ? [] : d;
  return yn(e, "twitter.url"), yn(Array.isArray(s), "twitter.hashtags is not an array"), yn(Array.isArray(g), "twitter.related is not an array"), "https://twitter.com/share" + ya({
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
var Hu = (typeof window > "u" ? "undefined" : pi(window)) === "object" && window.Element || function() {
};
function Bu(e, t, r) {
  if (!(e[t] instanceof Hu))
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
  let L = d;
  return h && d === "button" && (L = "a"), /* @__PURE__ */ M.jsx(
    tr,
    {
      gaData: {
        ...Wu,
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
  gaData: Ai,
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
const Gs = ({
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
  captionTitle: L,
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
    ...(r == null ? void 0 : r.length) > 0 && { className: ac(r) },
    ...s && { "data-testid": s },
    ...g && { width: g },
    ...h && { height: h }
  }, I = er("uds-img", {
    borderless: !z,
    "uds-img-drop-shadow": T
  }), U = (V) => {
    const q = V ? `${k.className} ${V}` : k.className;
    return f ? /* @__PURE__ */ M.jsxs("a", { href: f, children: [
      /* @__PURE__ */ M.jsx("img", { ...k, className: q }),
      /* @__PURE__ */ M.jsx("span", { className: "visually-hidden", children: _ })
    ] }) : /* @__PURE__ */ M.jsx("img", { ...k, className: q });
  }, $ = () => /* @__PURE__ */ M.jsx("div", { className: I, children: /* @__PURE__ */ M.jsxs("figure", { className: "figure uds-figure", children: [
    U(),
    x && /* @__PURE__ */ M.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      L && /* @__PURE__ */ M.jsx("h3", { children: L }),
      /* @__PURE__ */ M.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Mr(x)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ M.jsx(M.Fragment, { children: x ? $() : U(I) });
};
Gs.propTypes = {
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
`, Vu = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Yu = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Vu(e) ? `mailto:${e}` : e, $o = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Xs = (e) => e === "event" || e === "news", gr = ({
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
  linkLabel: L,
  linkUrl: z,
  tags: T,
  showBorders: k = !0,
  cardLink: I
}) => /* @__PURE__ */ M.jsx(
  Zs,
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
    linkLabel: L,
    linkUrl: z,
    tags: T,
    showBorders: k,
    cardLink: I
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
const Zs = ({
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
  linkLabel: L = void 0,
  linkUrl: z = void 0,
  tags: T = void 0,
  showBorders: k = !0,
  cardLink: I
}) => {
  const U = er("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    "card-news": e === "news",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !k
  }), $ = typeof n == "string" && n.length > 0, V = !Xs(e);
  return /* @__PURE__ */ M.jsxs(qu, { className: U, "data-testid": "card-container", children: [
    $ && /* @__PURE__ */ M.jsx(
      Gs,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        title: s,
        cardLink: V ? I : void 0
      }
    ),
    !n && d && /* @__PURE__ */ M.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    /* @__PURE__ */ M.jsx("div", { className: r ? "card-content-wrapper" : void 0, children: /* @__PURE__ */ M.jsx(
      Ks,
      {
        type: e,
        body: g,
        eventFormat: h,
        eventLocation: f,
        eventTime: _,
        title: s,
        buttons: x,
        linkLabel: L,
        linkUrl: z,
        tags: T,
        cardLink: I
      }
    ) })
  ] });
};
Zs.propTypes = {
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
const Ks = ({
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
}) => {
  const x = Xs(e), L = _ && !x, z = x && _, T = e === "event" && (a || n);
  return /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    /* @__PURE__ */ M.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ M.jsx("h3", { className: "card-title", children: L ? /* @__PURE__ */ M.jsx("a", { href: _, children: s }) : s }) }),
    t && /* @__PURE__ */ M.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ M.jsx("div", { dangerouslySetInnerHTML: Mr(t) }) }),
    T && /* @__PURE__ */ M.jsx(
      Qs,
      {
        eventFormat: r,
        eventTime: a,
        eventLocation: n
      }
    ),
    z ? /* @__PURE__ */ M.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ M.jsx(
      tr,
      {
        gaData: {
          ...$o,
          text: s
        },
        children: /* @__PURE__ */ M.jsx("a", { href: _, className: "card-arrow-link", "aria-label": s, children: /* @__PURE__ */ M.jsx("i", { className: "fas fa-arrow-right", "aria-hidden": "true" }) })
      }
    ) }) : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      d && /* @__PURE__ */ M.jsx("div", { className: "card-buttons", children: d.map((k) => /* @__PURE__ */ M.jsx(
        "div",
        {
          className: "card-button",
          "data-testid": "card-button",
          children: /* @__PURE__ */ M.jsx(
            Ms,
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
      h && g && /* @__PURE__ */ M.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ M.jsx(
        tr,
        {
          gaData: {
            ...$o,
            section: s,
            text: g
          },
          children: /* @__PURE__ */ M.jsx("a", { href: Yu(h), children: g })
        }
      ) })
    ] }),
    f && /* @__PURE__ */ M.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((k) => (
      // @ts-ignore
      /* @__PURE__ */ M.jsx(
        Ys,
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
};
Ks.propTypes = {
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
const Qs = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ M.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ M.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ M.jsx("div", { dangerouslySetInnerHTML: Mr(r) })
  ] }),
  t && /* @__PURE__ */ M.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ M.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Mr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
  r && /* @__PURE__ */ M.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ M.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ M.jsx("div", { dangerouslySetInnerHTML: Mr(r) })
  ] }) }),
  t && /* @__PURE__ */ M.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ M.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ M.jsx("span", { children: /* @__PURE__ */ M.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Mr(t)
      }
    ) })
  ] }) })
] });
Qs.propTypes = {
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
const Gu = rr.div`
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
`, Xu = () => /* @__PURE__ */ M.jsxs(Gu, { children: [
  /* @__PURE__ */ M.jsx("div", {}),
  /* @__PURE__ */ M.jsx("div", {}),
  /* @__PURE__ */ M.jsx("div", {}),
  /* @__PURE__ */ M.jsx("div", {})
] }), Zu = rr.section``, wa = ql(null), Js = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: a,
  dataTransformer: s,
  dataFilter: d,
  maxItems: g
}) => {
  const [{ data: h, loading: f, error: _ }, x] = nc(), [L, z] = Ur([]), T = { ...e.dataSource, ...t };
  return Er(() => {
    x(T == null ? void 0 : T.url);
  }, [T == null ? void 0 : T.url]), Er(() => {
    const k = h == null ? void 0 : h.nodes.map(s), I = k == null ? void 0 : k.filter(
      (U) => d(U, t == null ? void 0 : t.filters)
    );
    z(g ? I == null ? void 0 : I.slice(0, g) : I);
  }, [h]), // Init the context to be used on its childrens
  /* @__PURE__ */ M.jsx(wa.Provider, { value: { feeds: L }, children: /* @__PURE__ */ M.jsxs(Zu, { children: [
    n,
    _ ? /* @__PURE__ */ M.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      f && !(L != null && L.length) && /* @__PURE__ */ M.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ M.jsx(Xu, {}) }),
      L != null && L.length ? a : !f && /* @__PURE__ */ M.jsx("p", { className: "text-center", children: r })
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
}), Ii = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), el = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), tl = l.shape({
  url: l.string,
  filters: l.string
}), Ku = l.shape({
  header: Ni,
  ctaButton: Ii,
  dataSource: tl,
  maxItems: l.number
}), Qu = rr.div`
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
  return /* @__PURE__ */ M.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ M.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ M.jsx(s, { className: g, children: n.text }) }),
        /* @__PURE__ */ M.jsx(Qu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ M.jsx(
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
            children: /* @__PURE__ */ M.jsx("a", { className: `btn btn-${a.color}`, href: a.url, children: a.text })
          }
        ) })
      ]
    }
  );
};
rl.propTypes = {
  defaultProps: Ku,
  header: Ni,
  ctaButton: Ii
};
const nl = ({ children: e }) => /* @__PURE__ */ M.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ M.jsx("div", { className: "col", children: e }) });
nl.propTypes = {
  children: l.element
};
rr.img`
  width: 100%;
`;
l.oneOf(["heading-hero", "story-hero"]), l.arrayOf(Ha), l.string;
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
const Ju = Ci(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: s,
    leftKeyPressed: d,
    rightKeyPressed: g,
    icon: h,
    gaData: f
  } = e, { isReact: _, isBootstrap: x } = Ls(), L = Vl(null);
  Yl(t, () => ({
    focus() {
      L.current.focus();
    },
    scrollIntoView() {
      var T, k, I, U, $, V, q;
      const C = ((T = L.current) == null ? void 0 : T.offsetWidth) / 2 + L.current.offsetLeft, ae = ((I = (k = L.current) == null ? void 0 : k.offsetParent) == null ? void 0 : I.scrollLeft) + (($ = (U = L.current) == null ? void 0 : U.offsetParent) == null ? void 0 : $.offsetWidth) / 2;
      (q = (V = L.current) == null ? void 0 : V.offsetParent) == null || q.scrollBy({
        left: C - ae
      });
    }
  }), []);
  const z = (T) => {
    T.keyCode === 37 ? (T.preventDefault(), d()) : T.keyCode === 39 && (T.preventDefault(), g());
  };
  return /* @__PURE__ */ M.jsx(tr, { gaData: { ...f, text: a }, children: /* @__PURE__ */ M.jsxs(
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
      onClick: _ && ((T) => s(T, r, a)),
      onKeyDown: _ && z,
      tabIndex: n ? "" : "-1",
      children: [
        a,
        " ",
        h && /* @__PURE__ */ M.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` })
      ]
    }
  ) });
});
Ju.propTypes = {
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
}, al = ({ children: e }) => /* @__PURE__ */ M.jsx(
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
      /* @__PURE__ */ M.jsx(tr, { gaData: ed, children: /* @__PURE__ */ M.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ M.jsx(al, { children: t });
};
il.propTypes = {
  buttonCount: l.number.isRequired
};
l.arrayOf(l.string).isRequired, l.func;
const ol = ({ onClick: e = () => null }) => /* @__PURE__ */ M.jsx(
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
ol.propTypes = {
  onClick: l.func
};
const sl = ({ onClick: e = () => null }) => /* @__PURE__ */ M.jsx(
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
sl.propTypes = {
  onClick: l.func
};
const Ho = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, ll = ({ children: e = null }) => /* @__PURE__ */ M.jsx(
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
const cl = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ M.jsxs(ll, { children: [
  /* @__PURE__ */ M.jsx(tr, { gaData: { ...Ho, text: "left chevron" }, children: /* @__PURE__ */ M.jsx(sl, { onClick: e }) }),
  t,
  /* @__PURE__ */ M.jsx(tr, { gaData: { ...Ho, text: "right chevron" }, children: /* @__PURE__ */ M.jsx(ol, { onClick: e }) })
] });
cl.propTypes = {
  children: l.element,
  onClick: l.func
};
const ul = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ M.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ M.jsx("ul", { className: "glide__slides", children: t });
};
ul.propTypes = {
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
      rd(e, n, r[n]);
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
function ka(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function td(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Sa(e, t, r) {
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
  }), t && hi(e, t);
}
function qr(e) {
  return qr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, qr(e);
}
function hi(e, t) {
  return hi = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, hi(e, t);
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
function mi(e) {
  return typeof e == "string";
}
function Vr(e) {
  var t = oa(e);
  return t === "function" || t === "object" && !!e;
}
function ha(e) {
  return typeof e == "function";
}
function dl(e) {
  return typeof e > "u";
}
function gi(e) {
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
      t.classes.hasOwnProperty(a) && (r.classes[a] = Wo(Wo({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var pd = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ka(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return Sa(e, [{
    key: "on",
    value: function(t, r) {
      if (gi(t)) {
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
      if (gi(t)) {
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
    ka(this, e), this._c = {}, this._t = [], this._e = new pd(), this.disabled = !1, this.selector = t, this.settings = bi(cd, r), this.index = this.settings.startAt;
  }
  return Sa(e, [{
    key: "mount",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Vr(t) ? this._c = dd(this, t, this._e) : vr("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return gi(t) ? this._t = t : vr("You need to provide a array on `mutate()`"), this;
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
      var h = this.move, f = this.length, _ = h.steps, x = h.direction, L = 1;
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
        var z = a(L);
        z > f && (this._o = !0), e.index = s(z, L);
        return;
      }
      if (x === "<" || x === "|" && _ === "<") {
        var T = d(L);
        T < 0 && (this._o = !0), e.index = g(T, L);
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
function _a(e, t) {
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
  }), r.on(["build.after", "update"], _a(function() {
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
function yi(e) {
  return Array.prototype.slice.call(e);
}
var bd = '[data-glide-el="track"]';
function yd(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(bd), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = yi(this.wrapper.children).filter(function(a) {
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
      mi(a) && (a = document.querySelector(a)), a !== null ? n._r = a : vr("Root element must be a existing Html node");
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
function kd(e, t, r) {
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
function _d(e, t, r) {
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
        for (var _ = +!!e.settings.peek, x = g + _ + Math.round(g / 2), L = s.slice(0, x).reverse(), z = s.slice(x * -1), T = 0; T < Math.max(f, Math.floor(g / s.length)); T++) {
          for (var k = 0; k < L.length; k++) {
            var I = L[k].cloneNode(!0);
            I.classList.add(h.slide.clone), a.push(I);
          }
          for (var U = 0; U < z.length; U++) {
            var $ = z[U].cloneNode(!0);
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
      for (var a = this.items, s = t.Html, d = s.wrapper, g = s.slides, h = Math.floor(a.length / 2), f = a.slice(0, h).reverse(), _ = a.slice(h * -1).reverse(), x = "".concat(t.Sizes.slideWidth, "px"), L = 0; L < _.length; L++)
        d.appendChild(_[L]);
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
    ka(this, e), this.listeners = t;
  }
  return Sa(e, [{
    key: "on",
    value: function(t, r, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      mi(t) && (t = [t]);
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
      mi(t) && (t = [t]);
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
      n.on("resize", window, _a(function() {
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
function Rd(e, t) {
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
function Nd(e, t) {
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
function Pd(e, t, r) {
  var n = [Rd, Od, Nd, Id].concat(e._t, [Ad]);
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
function Dd(e, t, r) {
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
function Ld(e, t, r) {
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
  var Vo = Object.defineProperty({}, "passive", {
    get: function() {
      pl = !0;
    }
  });
  window.addEventListener("testPassive", null, Vo), window.removeEventListener("testPassive", null, Vo);
} catch {
}
var vi = pl, Zn = ["touchstart", "mousedown"], Yo = ["touchmove", "mousemove"], Go = ["touchend", "touchcancel", "mouseup", "mouseleave"], Xo = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Md(e, t, r) {
  var n = new Ar(), a = 0, s = 0, d = 0, g = !1, h = vi ? {
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
        var x = e.settings, L = x.touchAngle, z = x.touchRatio, T = x.classes, k = this.touches(_), I = wt(k.pageX) - s, U = wt(k.pageY) - d, $ = Math.abs(I << 2), V = Math.abs(U << 2), q = Math.sqrt($ + V), C = Math.sqrt(V);
        if (a = Math.asin(C / q), a * 180 / Math.PI < L)
          _.stopPropagation(), t.Move.make(I * ud(z)), t.Html.root.classList.add(T.dragging), r.emit("swipe.move");
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
        var x = e.settings, L = x.perSwipe, z = x.touchAngle, T = x.classes, k = this.touches(_), I = this.threshold(_), U = k.pageX - s, $ = a * 180 / Math.PI;
        this.enable(), U > I && $ < z ? t.Run.make(t.Direction.resolve("".concat(L, "<"))) : U < -I && $ < z ? t.Run.make(t.Direction.resolve("".concat(L, ">"))) : t.Move.make(), t.Html.root.classList.remove(T.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var _ = this, x = e.settings, L = x.swipeThreshold, z = x.dragThreshold;
      L && n.on(Zn[0], t.Html.wrapper, function(T) {
        _.start(T);
      }, h), z && n.on(Zn[1], t.Html.wrapper, function(T) {
        _.start(T);
      }, h);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(Zn[0], t.Html.wrapper, h), n.off(Zn[1], t.Html.wrapper, h);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var _ = this;
      n.on(Yo, t.Html.wrapper, _a(function(x) {
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
      n.on(Go, t.Html.wrapper, function(x) {
        _.end(x);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(Go, t.Html.wrapper);
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
var zd = '[data-glide-el="controls[nav]"]', Pi = '[data-glide-el^="controls"]', Ud = "".concat(Pi, ' [data-glide-dir*="<"]'), $d = "".concat(Pi, ' [data-glide-dir*=">"]');
function Hd(e, t, r) {
  var n = new Ar(), a = vi ? {
    passive: !0
  } : !1, s = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(zd), this._c = t.Html.root.querySelectorAll(Pi), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(Ud),
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
      h.forEach(function(_) {
        yi(_).forEach(function(x) {
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
        yi(_).forEach(function(x) {
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
      !vi && d.type === "touchstart" && d.preventDefault();
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
function Zo(e) {
  return Vr(e) ? fd(e) : (vr("Breakpoints option must be an object"), {});
}
function qd(e, t, r) {
  var n = new Ar(), a = e.settings, s = Zo(a.breakpoints), d = Object.assign({}, a), g = {
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
  return Object.assign(a, g.match(s)), n.on("resize", window, _a(function() {
    e.settings = bi(a, g.match(s));
  }, e.settings.throttle)), r.on("update", function() {
    s = Zo(s), d = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), g;
}
var Vd = {
  // Required
  Html: yd,
  Translate: Dd,
  Transition: Ld,
  Direction: Ed,
  Peek: vd,
  Sizes: kd,
  Gaps: gd,
  Move: wd,
  Clones: _d,
  Resize: xd,
  Build: Sd,
  Run: md,
  // Optional
  Swipe: Md,
  Images: jd,
  Anchors: Fd,
  Controls: Hd,
  Keyboard: Bd,
  Autoplay: Wd,
  Breakpoints: qd
}, Yd = /* @__PURE__ */ function(e) {
  nd(r, e);
  var t = sd(r);
  function r() {
    return ka(this, r), t.apply(this, arguments);
  }
  return Sa(r, [{
    key: "mount",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return sa(qr(r.prototype), "mount", this).call(this, Object.assign({}, Vd, n));
    }
  }]), r;
}(hd);
function Gd(e) {
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
  const { perViewSm: a, perViewMd: s, perViewLg: d } = Gd(e), g = r ? 24 : 0, h = r ? { before: 48, after: 48 } : 0, f = r ? { before: 124, after: 124 } : 0;
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
function Zd(e, t, r) {
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
function Qd({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: a,
  hasPeek: s = !0,
  isDraggable: d
}) {
  const g = Xd(t, n, s, d), h = new Yd(`#${e}`, g);
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
    const x = f.querySelector(".navigation-slider"), L = f.querySelector(".image-navigator-images");
    if (x && L) {
      const z = x.querySelectorAll(
        ".bullet-image-container"
      ), T = x.clientWidth, k = 82, I = z[_], U = L.getBoundingClientRect().x, $ = x.getBoundingClientRect().x - U, V = I.getBoundingClientRect().x - U, q = I.getBoundingClientRect().x + I.getBoundingClientRect().width - U;
      if (_ === 0 || V <= 0 + k)
        x.style.left = `${$ - V + k}px`;
      else if (q >= T - k) {
        const C = q - T;
        x.style.left = `${$ - C - k}px`;
      }
    }
    Zd(f, _, r), f.setAttribute("data-current-index", _), a && a(_);
  }), h.mount(), h;
}
function Jd(e, t) {
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
  hasNavButtons: _ = !0,
  hasPositionIndicators: x = !0,
  imageAutoSize: L = !0,
  onItemClick: z = () => null,
  hasPeek: T = !0,
  isDraggable: k = !0,
  hasShadow: I = !0
}) => {
  const U = `glide-${Math.ceil(Math.random() * 1e4)}`, $ = Jd(n.length, e);
  return Er(() => {
    Qd({
      instanceName: U,
      perView: e,
      buttonCount: $,
      isFullWidth: h,
      onItemClick: z,
      hasPeek: T,
      isDraggable: k
    });
  }, [
    U,
    e,
    $,
    h,
    z,
    T,
    k
  ]), /* @__PURE__ */ M.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": g,
      className: `glide ${a}`,
      id: U,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": f,
      "data-image-auto-size": L,
      "data-has-shadow": I,
      children: [
        /* @__PURE__ */ M.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ M.jsx(ul, { carouselItems: n }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ M.jsx(s, { instanceName: U })
        ) : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
          x && /* @__PURE__ */ M.jsx(il, { buttonCount: $ }),
          _ && /* @__PURE__ */ M.jsx(cl, {})
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
  tags: _
}, x, L, z) => {
  var T, k;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ M.jsx(
      gr,
      {
        type: x,
        horizontal: L,
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
        tags: _,
        cardLink: f || ((k = g == null ? void 0 : g[0]) == null ? void 0 : k.href)
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
  const h = parseInt(`${e}`, 10), [f, _] = Ur(h), x = 1024, L = 768;
  Er(() => {
    const k = () => {
      const I = window.innerWidth;
      let U;
      switch (h) {
        case 3:
          I > x ? U = 3 : I > L ? U = 2 : U = 1;
          break;
        case 2:
          U = I < L ? 1 : 2;
          break;
        default:
          U = 1;
          break;
      }
      _(U);
    };
    return k(), window.addEventListener("resize", k), () => window.removeEventListener("resize", k);
  }, [h]);
  const z = t.map(
    (k) => ef(k, r, a, n)
  ), T = t.length > f;
  return /* @__PURE__ */ M.jsx(
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
var Kn = {}, Ko;
function tf() {
  if (Ko) return Kn;
  Ko = 1;
  var e = Es;
  return Kn.createRoot = e.createRoot, Kn.hydrateRoot = e.hydrateRoot, Kn;
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
  seal: Ht,
  create: la
} = Object, {
  apply: wi,
  construct: ki
} = typeof Reflect < "u" && Reflect;
Ct || (Ct = function(t) {
  return t;
});
Ht || (Ht = function(t) {
  return t;
});
wi || (wi = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    a[s - 2] = arguments[s];
  return t.apply(r, a);
});
ki || (ki = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Qn = Et(Array.prototype.forEach), of = Et(Array.prototype.lastIndexOf), Jo = Et(Array.prototype.pop), fn = Et(Array.prototype.push), sf = Et(Array.prototype.splice), ca = Et(String.prototype.toLowerCase), Va = Et(String.prototype.toString), Ya = Et(String.prototype.match), pn = Et(String.prototype.replace), lf = Et(String.prototype.indexOf), cf = Et(String.prototype.trim), jt = Et(Object.prototype.hasOwnProperty), _t = Et(RegExp.prototype.test), hn = uf(TypeError);
function Et(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return wi(e, t, n);
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
    jt(e, t) || (e[t] = null);
  return e;
}
function ur(e) {
  const t = la(null);
  for (const [r, n] of gl(e))
    jt(e, r) && (Array.isArray(n) ? t[r] = df(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = ur(n) : t[r] = n);
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
const es = Ct(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ga = Ct(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Xa = Ct(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ff = Ct(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Za = Ct(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), pf = Ct(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ts = Ct(["#text"]), rs = Ct(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ka = Ct(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ns = Ct(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Jn = Ct(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), hf = Ht(/\{\{[\w\W]*|[\w\W]*\}\}/gm), mf = Ht(/<%[\w\W]*|[\w\W]*%>/gm), gf = Ht(/\$\{[\w\W]*/gm), bf = Ht(/^data-[\-\w.\u00B7-\uFFFF]+$/), yf = Ht(/^aria-[\-\w]+$/), bl = Ht(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), vf = Ht(/^(?:\w+script|data):/i), wf = Ht(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), yl = Ht(/^html$/i), kf = Ht(/^[a-z][.\w]*(-[.\w]+)+$/i);
var as = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: yf,
  ATTR_WHITESPACE: wf,
  CUSTOM_ELEMENT: kf,
  DATA_ATTR: bf,
  DOCTYPE_NAME: yl,
  ERB_EXPR: mf,
  IS_ALLOWED_URI: bl,
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
}, Sf = function() {
  return typeof window > "u" ? null : window;
}, _f = function(t, r) {
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
function vl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Sf();
  const t = (b) => vl(b);
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
    DOMParser: L,
    trustedTypes: z
  } = e, T = h.prototype, k = mn(T, "cloneNode"), I = mn(T, "remove"), U = mn(T, "nextSibling"), $ = mn(T, "childNodes"), V = mn(T, "parentNode");
  if (typeof d == "function") {
    const b = r.createElement("template");
    b.content && b.content.ownerDocument && (r = b.content.ownerDocument);
  }
  let q, C = "";
  const {
    implementation: ae,
    createNodeIterator: ke,
    createDocumentFragment: Ne,
    getElementsByTagName: Me
  } = r, {
    importNode: Ye
  } = n;
  let ue = is();
  t.isSupported = typeof gl == "function" && typeof V == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Oe,
    TMPLIT_EXPR: Ie,
    DATA_ATTR: Ce,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: Re,
    CUSTOM_ELEMENT: Be
  } = as;
  let {
    IS_ALLOWED_URI: et
  } = as, se = null;
  const H = Ae({}, [...es, ...Ga, ...Xa, ...Za, ...ts]);
  let R = null;
  const F = Ae({}, [...rs, ...Ka, ...ns, ...Jn]);
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
  })), y = null, ee = null;
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
  let ie = !0, J = !0, te = !1, X = !0, ne = !1, de = !0, K = !1, ge = !1, re = !1, le = !1, $e = !1, ce = !1, ot = !0, We = !1;
  const Se = "user-content-";
  let Y = !0, oe = !1, Xe = {}, Pe = null;
  const De = Ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let nr = null;
  const ar = Ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const Wt = Ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ht = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let pt = nt, qt = !1, Vt = null;
  const mt = Ae({}, [ht, At, nt], Va);
  let kt = Ae({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Ae({}, ["annotation-xml"]);
  const Le = Ae({}, ["title", "style", "font", "a", "script"]);
  let ct = null;
  const ir = ["application/xhtml+xml", "text/html"], Yt = "text/html";
  let fe = null, st = null;
  const Rt = r.createElement("form"), or = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, Ot = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(st && st === v)) {
      if ((!v || typeof v != "object") && (v = {}), v = ur(v), ct = // eslint-disable-next-line unicorn/prefer-includes
      ir.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? Yt : v.PARSER_MEDIA_TYPE, fe = ct === "application/xhtml+xml" ? Va : ca, se = jt(v, "ALLOWED_TAGS") ? Ae({}, v.ALLOWED_TAGS, fe) : H, R = jt(v, "ALLOWED_ATTR") ? Ae({}, v.ALLOWED_ATTR, fe) : F, Vt = jt(v, "ALLOWED_NAMESPACES") ? Ae({}, v.ALLOWED_NAMESPACES, Va) : mt, Bt = jt(v, "ADD_URI_SAFE_ATTR") ? Ae(ur(Wt), v.ADD_URI_SAFE_ATTR, fe) : Wt, nr = jt(v, "ADD_DATA_URI_TAGS") ? Ae(ur(ar), v.ADD_DATA_URI_TAGS, fe) : ar, Pe = jt(v, "FORBID_CONTENTS") ? Ae({}, v.FORBID_CONTENTS, fe) : De, y = jt(v, "FORBID_TAGS") ? Ae({}, v.FORBID_TAGS, fe) : ur({}), ee = jt(v, "FORBID_ATTR") ? Ae({}, v.FORBID_ATTR, fe) : ur({}), Xe = jt(v, "USE_PROFILES") ? v.USE_PROFILES : !1, ie = v.ALLOW_ARIA_ATTR !== !1, J = v.ALLOW_DATA_ATTR !== !1, te = v.ALLOW_UNKNOWN_PROTOCOLS || !1, X = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = v.SAFE_FOR_TEMPLATES || !1, de = v.SAFE_FOR_XML !== !1, K = v.WHOLE_DOCUMENT || !1, le = v.RETURN_DOM || !1, $e = v.RETURN_DOM_FRAGMENT || !1, ce = v.RETURN_TRUSTED_TYPE || !1, re = v.FORCE_BODY || !1, ot = v.SANITIZE_DOM !== !1, We = v.SANITIZE_NAMED_PROPS || !1, Y = v.KEEP_CONTENT !== !1, oe = v.IN_PLACE || !1, et = v.ALLOWED_URI_REGEXP || bl, pt = v.NAMESPACE || nt, kt = v.MATHML_TEXT_INTEGRATION_POINTS || kt, gt = v.HTML_INTEGRATION_POINTS || gt, j = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && or(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && or(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (J = !1), $e && (le = !0), Xe && (se = Ae({}, ts), R = la(null), Xe.html === !0 && (Ae(se, es), Ae(R, rs)), Xe.svg === !0 && (Ae(se, Ga), Ae(R, Ka), Ae(R, Jn)), Xe.svgFilters === !0 && (Ae(se, Xa), Ae(R, Ka), Ae(R, Jn)), Xe.mathMl === !0 && (Ae(se, Za), Ae(R, ns), Ae(R, Jn))), jt(v, "ADD_TAGS") || (E.tagCheck = null), jt(v, "ADD_ATTR") || (E.attributeCheck = null), v.ADD_TAGS && (typeof v.ADD_TAGS == "function" ? E.tagCheck = v.ADD_TAGS : (se === H && (se = ur(se)), Ae(se, v.ADD_TAGS, fe))), v.ADD_ATTR && (typeof v.ADD_ATTR == "function" ? E.attributeCheck = v.ADD_ATTR : (R === F && (R = ur(R)), Ae(R, v.ADD_ATTR, fe))), v.ADD_URI_SAFE_ATTR && Ae(Bt, v.ADD_URI_SAFE_ATTR, fe), v.FORBID_CONTENTS && (Pe === De && (Pe = ur(Pe)), Ae(Pe, v.FORBID_CONTENTS, fe)), v.ADD_FORBID_CONTENTS && (Pe === De && (Pe = ur(Pe)), Ae(Pe, v.ADD_FORBID_CONTENTS, fe)), Y && (se["#text"] = !0), K && Ae(se, ["html", "head", "body"]), se.table && (Ae(se, ["tbody"]), delete y.tbody), v.TRUSTED_TYPES_POLICY) {
        if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        q = v.TRUSTED_TYPES_POLICY, C = q.createHTML("");
      } else
        q === void 0 && (q = _f(z, a)), q !== null && typeof C == "string" && (C = q.createHTML(""));
      Ct && Ct(v), st = v;
    }
  }, Gt = Ae({}, [...Ga, ...Xa, ...ff]), sr = Ae({}, [...Za, ...pf]), kr = function(v) {
    let A = V(v);
    (!A || !A.tagName) && (A = {
      namespaceURI: pt,
      tagName: "template"
    });
    const G = ca(v.tagName), be = ca(A.tagName);
    return Vt[v.namespaceURI] ? v.namespaceURI === At ? A.namespaceURI === nt ? G === "svg" : A.namespaceURI === ht ? G === "svg" && (be === "annotation-xml" || kt[be]) : !!Gt[G] : v.namespaceURI === ht ? A.namespaceURI === nt ? G === "math" : A.namespaceURI === At ? G === "math" && gt[be] : !!sr[G] : v.namespaceURI === nt ? A.namespaceURI === At && !gt[be] || A.namespaceURI === ht && !kt[be] ? !1 : !sr[G] && (Le[G] || !Gt[G]) : !!(ct === "application/xhtml+xml" && Vt[v.namespaceURI]) : !1;
  }, at = function(v) {
    fn(t.removed, {
      element: v
    });
    try {
      V(v).removeChild(v);
    } catch {
      I(v);
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
    let A = null, G = null;
    if (re)
      v = "<remove></remove>" + v;
    else {
      const we = Ya(v, /^[\r\n\t ]+/);
      G = we && we[0];
    }
    ct === "application/xhtml+xml" && pt === nt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const be = q ? q.createHTML(v) : v;
    if (pt === nt)
      try {
        A = new L().parseFromString(be, ct);
      } catch {
      }
    if (!A || !A.documentElement) {
      A = ae.createDocument(pt, "template", null);
      try {
        A.documentElement.innerHTML = qt ? C : be;
      } catch {
      }
    }
    const ve = A.body || A.documentElement;
    return v && G && ve.insertBefore(r.createTextNode(G), ve.childNodes[0] || null), pt === nt ? Me.call(A, K ? "html" : "body")[0] : K ? A.documentElement : ve;
  }, Ft = function(v) {
    return ke.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, zt = function(v) {
    return v instanceof x && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof _) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
  }, Ut = function(v) {
    return typeof g == "function" && v instanceof g;
  };
  function Qe(b, v, A) {
    Qn(b, (G) => {
      G.call(t, v, A, st);
    });
  }
  const fr = function(v) {
    let A = null;
    if (Qe(ue.beforeSanitizeElements, v, null), zt(v))
      return at(v), !0;
    const G = fe(v.nodeName);
    if (Qe(ue.uponSanitizeElement, v, {
      tagName: G,
      allowedTags: se
    }), de && v.hasChildNodes() && !Ut(v.firstElementChild) && _t(/<[/\w!]/g, v.innerHTML) && _t(/<[/\w!]/g, v.textContent) || v.nodeType === gn.progressingInstruction || de && v.nodeType === gn.comment && _t(/<[/\w]/g, v.data))
      return at(v), !0;
    if (!(E.tagCheck instanceof Function && E.tagCheck(G)) && (!se[G] || y[G])) {
      if (!y[G] && pr(G) && (j.tagNameCheck instanceof RegExp && _t(j.tagNameCheck, G) || j.tagNameCheck instanceof Function && j.tagNameCheck(G)))
        return !1;
      if (Y && !Pe[G]) {
        const be = V(v) || v.parentNode, ve = $(v) || v.childNodes;
        if (ve && be) {
          const we = ve.length;
          for (let Fe = we - 1; Fe >= 0; --Fe) {
            const Ge = k(ve[Fe], !0);
            Ge.__removalCount = (v.__removalCount || 0) + 1, be.insertBefore(Ge, U(v));
          }
        }
      }
      return at(v), !0;
    }
    return v instanceof h && !kr(v) || (G === "noscript" || G === "noembed" || G === "noframes") && _t(/<\/no(script|embed|frames)/i, v.innerHTML) ? (at(v), !0) : (ne && v.nodeType === gn.text && (A = v.textContent, Qn([me, Oe, Ie], (be) => {
      A = pn(A, be, " ");
    }), v.textContent !== A && (fn(t.removed, {
      element: v.cloneNode()
    }), v.textContent = A)), Qe(ue.afterSanitizeElements, v, null), !1);
  }, Nt = function(v, A, G) {
    if (ee[A] || ot && (A === "id" || A === "name") && (G in r || G in Rt))
      return !1;
    if (!(J && !ee[A] && _t(Ce, A))) {
      if (!(ie && _t(lt, A))) {
        if (!(E.attributeCheck instanceof Function && E.attributeCheck(A, v))) {
          if (!R[A] || ee[A]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(pr(v) && (j.tagNameCheck instanceof RegExp && _t(j.tagNameCheck, v) || j.tagNameCheck instanceof Function && j.tagNameCheck(v)) && (j.attributeNameCheck instanceof RegExp && _t(j.attributeNameCheck, A) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(A, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              A === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && _t(j.tagNameCheck, G) || j.tagNameCheck instanceof Function && j.tagNameCheck(G)))
            ) return !1;
          } else if (!Bt[A]) {
            if (!_t(et, pn(G, Re, ""))) {
              if (!((A === "src" || A === "xlink:href" || A === "href") && v !== "script" && lf(G, "data:") === 0 && nr[v])) {
                if (!(te && !_t(je, pn(G, Re, "")))) {
                  if (G)
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
    Qe(ue.beforeSanitizeAttributes, v, null);
    const {
      attributes: A
    } = v;
    if (!A || zt(v))
      return;
    const G = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let be = A.length;
    for (; be--; ) {
      const ve = A[be], {
        name: we,
        namespaceURI: Fe,
        value: Ge
      } = ve, bt = fe(we), Ze = Ge;
      let He = we === "value" ? Ze : cf(Ze);
      if (G.attrName = bt, G.attrValue = He, G.keepAttr = !0, G.forceKeepAttr = void 0, Qe(ue.uponSanitizeAttribute, v, G), He = G.attrValue, We && (bt === "id" || bt === "name") && (ut(we, v), He = Se + He), de && _t(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, He)) {
        ut(we, v);
        continue;
      }
      if (bt === "attributename" && Ya(He, "href")) {
        ut(we, v);
        continue;
      }
      if (G.forceKeepAttr)
        continue;
      if (!G.keepAttr) {
        ut(we, v);
        continue;
      }
      if (!X && _t(/\/>/i, He)) {
        ut(we, v);
        continue;
      }
      ne && Qn([me, Oe, Ie], (Rr) => {
        He = pn(He, Rr, " ");
      });
      const It = fe(v.nodeName);
      if (!Nt(It, bt, He)) {
        ut(we, v);
        continue;
      }
      if (q && typeof z == "object" && typeof z.getAttributeType == "function" && !Fe)
        switch (z.getAttributeType(It, bt)) {
          case "TrustedHTML": {
            He = q.createHTML(He);
            break;
          }
          case "TrustedScriptURL": {
            He = q.createScriptURL(He);
            break;
          }
        }
      if (He !== Ze)
        try {
          Fe ? v.setAttributeNS(Fe, we, He) : v.setAttribute(we, He), zt(v) ? at(v) : Jo(t.removed);
        } catch {
          ut(we, v);
        }
    }
    Qe(ue.afterSanitizeAttributes, v, null);
  }, lr = function b(v) {
    let A = null;
    const G = Ft(v);
    for (Qe(ue.beforeSanitizeShadowDOM, v, null); A = G.nextNode(); )
      Qe(ue.uponSanitizeShadowNode, A, null), fr(A), Xt(A), A.content instanceof s && b(A.content);
    Qe(ue.afterSanitizeShadowDOM, v, null);
  };
  return t.sanitize = function(b) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, A = null, G = null, be = null, ve = null;
    if (qt = !b, qt && (b = "<!-->"), typeof b != "string" && !Ut(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw hn("dirty is not a string, aborting");
      } else
        throw hn("toString is not a function");
    if (!t.isSupported)
      return b;
    if (ge || Ot(v), t.removed = [], typeof b == "string" && (oe = !1), oe) {
      if (b.nodeName) {
        const Ge = fe(b.nodeName);
        if (!se[Ge] || y[Ge])
          throw hn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof g)
      A = dr("<!---->"), G = A.ownerDocument.importNode(b, !0), G.nodeType === gn.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? A = G : A.appendChild(G);
    else {
      if (!le && !ne && !K && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return q && ce ? q.createHTML(b) : b;
      if (A = dr(b), !A)
        return le ? null : ce ? C : "";
    }
    A && re && at(A.firstChild);
    const we = Ft(oe ? b : A);
    for (; be = we.nextNode(); )
      fr(be), Xt(be), be.content instanceof s && lr(be.content);
    if (oe)
      return b;
    if (le) {
      if ($e)
        for (ve = Ne.call(A.ownerDocument); A.firstChild; )
          ve.appendChild(A.firstChild);
      else
        ve = A;
      return (R.shadowroot || R.shadowrootmode) && (ve = Ye.call(n, ve, !0)), ve;
    }
    let Fe = K ? A.outerHTML : A.innerHTML;
    return K && se["!doctype"] && A.ownerDocument && A.ownerDocument.doctype && A.ownerDocument.doctype.name && _t(yl, A.ownerDocument.doctype.name) && (Fe = "<!DOCTYPE " + A.ownerDocument.doctype.name + `>
` + Fe), ne && Qn([me, Oe, Ie], (Ge) => {
      Fe = pn(Fe, Ge, " ");
    }), q && ce ? q.createHTML(Fe) : Fe;
  }, t.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ot(b), ge = !0;
  }, t.clearConfig = function() {
    st = null, ge = !1;
  }, t.isValidAttribute = function(b, v, A) {
    st || Ot({});
    const G = fe(b), be = fe(v);
    return Nt(G, be, A);
  }, t.addHook = function(b, v) {
    typeof v == "function" && fn(ue[b], v);
  }, t.removeHook = function(b, v) {
    if (v !== void 0) {
      const A = of(ue[b], v);
      return A === -1 ? void 0 : sf(ue[b], A, 1)[0];
    }
    return Jo(ue[b]);
  }, t.removeHooks = function(b) {
    ue[b] = [];
  }, t.removeAllHooks = function() {
    ue = is();
  }, t;
}
vl();
var Qa = { exports: {} }, Ja, os;
function xf() {
  if (os) return Ja;
  os = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ja = e, Ja;
}
var ei, ss;
function Tf() {
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
  }, ei;
}
var ls;
function Cf() {
  return ls || (ls = 1, Qa.exports = /* @__PURE__ */ Tf()()), Qa.exports;
}
var Ef = /* @__PURE__ */ Cf();
const dt = /* @__PURE__ */ As(Ef);
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
var cs;
function Af() {
  return cs || (cs = 1, function(e) {
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
const kn = {
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
}, us = ["newsUnits", "interests", "audiences", "eventTypes"], Rf = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < us.length; n += 1) {
    const a = us[n];
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
}), Fr = ({
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
        rl,
        {
          header: t,
          ctaButton: r,
          defaultProps: kn
        }
      ) : null,
      renderBody: /* @__PURE__ */ it.jsx(nl, { children: e }),
      dataTransformer: Of,
      dataFilter: Rf,
      dataSource: d,
      defaultProps: kn,
      noFeedText: "No news to show.",
      maxItems: a
    }
  );
};
Fr.propTypes = {
  header: Ni,
  ctaButton: Ii,
  dataSource: tl,
  maxItems: dt.number,
  children: dt.element
};
var ri = { exports: {} }, Ve = {};
var fs;
function Nf() {
  if (fs) return Ve;
  fs = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), z = Symbol.for("react.client.reference");
  function T(k) {
    if (typeof k == "object" && k !== null) {
      var I = k.$$typeof;
      switch (I) {
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
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  return Ve.ContextConsumer = s, Ve.ContextProvider = d, Ve.Element = e, Ve.ForwardRef = g, Ve.Fragment = r, Ve.Lazy = x, Ve.Memo = _, Ve.Portal = t, Ve.Profiler = a, Ve.StrictMode = n, Ve.Suspense = h, Ve.SuspenseList = f, Ve.isContextConsumer = function(k) {
    return T(k) === s;
  }, Ve.isContextProvider = function(k) {
    return T(k) === d;
  }, Ve.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, Ve.isForwardRef = function(k) {
    return T(k) === g;
  }, Ve.isFragment = function(k) {
    return T(k) === r;
  }, Ve.isLazy = function(k) {
    return T(k) === x;
  }, Ve.isMemo = function(k) {
    return T(k) === _;
  }, Ve.isPortal = function(k) {
    return T(k) === t;
  }, Ve.isProfiler = function(k) {
    return T(k) === a;
  }, Ve.isStrictMode = function(k) {
    return T(k) === n;
  }, Ve.isSuspense = function(k) {
    return T(k) === h;
  }, Ve.isSuspenseList = function(k) {
    return T(k) === f;
  }, Ve.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === a || k === n || k === h || k === f || k === L || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === _ || k.$$typeof === d || k.$$typeof === s || k.$$typeof === g || k.$$typeof === z || k.getModuleId !== void 0);
  }, Ve.typeOf = T, Ve;
}
var ps;
function If() {
  return ps || (ps = 1, ri.exports = /* @__PURE__ */ Nf()), ri.exports;
}
var kl = /* @__PURE__ */ If();
function Pf(e) {
  function t(H, R, F, j, y) {
    for (var ee = 0, E = 0, ie = 0, J = 0, te, X, ne = 0, de = 0, K, ge = K = te = 0, re = 0, le = 0, $e = 0, ce = 0, ot = F.length, We = ot - 1, Se, Y = "", oe = "", Xe = "", Pe = "", De; re < ot; ) {
      if (X = F.charCodeAt(re), re === We && E + J + ie + ee !== 0 && (E !== 0 && (X = E === 47 ? 10 : 47), J = ie = ee = 0, ot++, We++), E + J + ie + ee === 0) {
        if (re === We && (0 < le && (Y = Y.replace(L, "")), 0 < Y.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Y += F.charAt(re);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (Y = Y.trim(), te = Y.charCodeAt(0), K = 1, ce = ++re; re < ot; ) {
              switch (X = F.charCodeAt(re)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (X = F.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < We; ++ge)
                          switch (F.charCodeAt(ge)) {
                            case 47:
                              if (X === 42 && F.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
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
                  for (; re++ < We && F.charCodeAt(re) !== X; )
                    ;
              }
              if (K === 0) break;
              re++;
            }
            switch (K = F.substring(ce, re), te === 0 && (te = (Y = Y.replace(x, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (Y = Y.replace(L, "")), X = Y.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = R;
                    break;
                  default:
                    le = lt;
                }
                if (K = t(R, le, K, X, y + 1), ce = K.length, 0 < Re && (le = r(lt, Y, $e), De = g(3, K, le, R, Oe, me, ce, X, y, j), Y = le.join(""), De !== void 0 && (ce = (K = De.trim()).length) === 0 && (X = 0, K = "")), 0 < ce) switch (X) {
                  case 115:
                    Y = Y.replace(ae, d);
                  case 100:
                  case 109:
                  case 45:
                    K = Y + "{" + K + "}";
                    break;
                  case 107:
                    Y = Y.replace($, "$1 $2"), K = Y + "{" + K + "}", K = Ce === 1 || Ce === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = Y + K, j === 112 && (K = (oe += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(R, r(R, Y, $e), K, j, y + 1);
            }
            Xe += K, K = $e = le = ge = te = 0, Y = "", X = F.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (Y = (0 < le ? Y.replace(L, "") : Y).trim(), 1 < (ce = Y.length)) switch (ge === 0 && (te = Y.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ce = (Y = Y.replace(" ", ":")).length), 0 < Re && (De = g(1, Y, R, H, Oe, me, oe.length, j, y, j)) !== void 0 && (ce = (Y = De.trim()).length) === 0 && (Y = "\0\0"), te = Y.charCodeAt(0), X = Y.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  Pe += Y + F.charAt(re);
                  break;
                }
              default:
                Y.charCodeAt(ce - 1) !== 58 && (oe += a(Y, te, X, Y.charCodeAt(2)));
            }
            $e = le = ge = te = 0, Y = "", X = F.charCodeAt(++re);
        }
      }
      switch (X) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + te === 0 && j !== 107 && 0 < Y.length && (le = 1, Y += "\0"), 0 < Re * et && g(0, Y, R, H, Oe, me, oe.length, j, y, j), me = 1, Oe++;
          break;
        case 59:
        case 125:
          if (E + J + ie + ee === 0) {
            me++;
            break;
          }
        default:
          switch (me++, Se = F.charAt(re), X) {
            case 9:
            case 32:
              if (J + ee + E === 0) switch (ne) {
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
              J + E + ee === 0 && (le = $e = 1, Se = "\f" + Se);
              break;
            case 108:
              if (J + E + ee + Ie === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && F.charCodeAt(re - 3) === 58 && (Ie = ne);
                case 8:
                  de === 111 && (Ie = de);
              }
              break;
            case 58:
              J + E + ee === 0 && (ge = re);
              break;
            case 44:
              E + ie + J + ee === 0 && (le = 1, Se += "\r");
              break;
            case 34:
            case 39:
              E === 0 && (J = J === X ? 0 : J === 0 ? X : J);
              break;
            case 91:
              J + E + ie === 0 && ee++;
              break;
            case 93:
              J + E + ie === 0 && ee--;
              break;
            case 41:
              J + E + ee === 0 && ie--;
              break;
            case 40:
              if (J + E + ee === 0) {
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
              E + ie + J + ee + ge + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + ee + ie)) switch (E) {
                case 0:
                  switch (2 * X + 3 * F.charCodeAt(re + 1)) {
                    case 235:
                      E = 47;
                      break;
                    case 220:
                      ce = re, E = 42;
                  }
                  break;
                case 42:
                  X === 47 && ne === 42 && ce + 2 !== re && (F.charCodeAt(ce + 2) === 33 && (oe += F.substring(ce, re + 1)), Se = "", E = 0);
              }
          }
          E === 0 && (Y += Se);
      }
      de = ne, ne = X, re++;
    }
    if (ce = oe.length, 0 < ce) {
      if (le = R, 0 < Re && (De = g(2, oe, le, H, Oe, me, ce, j, y, j), De !== void 0 && (oe = De).length === 0)) return Pe + oe + Xe;
      if (oe = le.join(",") + "{" + oe + "}", Ce * Ie !== 0) {
        switch (Ce !== 2 || s(oe, 2) || (Ie = 0), Ie) {
          case 111:
            oe = oe.replace(q, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(V, "::-webkit-input-$1") + oe.replace(V, "::-moz-$1") + oe.replace(V, ":-ms-input-$1") + oe;
        }
        Ie = 0;
      }
    }
    return Pe + oe + Xe;
  }
  function r(H, R, F) {
    var j = R.trim().split(I);
    R = j;
    var y = j.length, ee = H.length;
    switch (ee) {
      case 0:
      case 1:
        var E = 0;
        for (H = ee === 0 ? "" : H[0] + " "; E < y; ++E)
          R[E] = n(H, R[E], F).trim();
        break;
      default:
        var ie = E = 0;
        for (R = []; E < y; ++E)
          for (var J = 0; J < ee; ++J)
            R[ie++] = n(H[J] + " ", j[E], F).trim();
    }
    return R;
  }
  function n(H, R, F) {
    var j = R.charCodeAt(0);
    switch (33 > j && (j = (R = R.trim()).charCodeAt(0)), j) {
      case 38:
        return R.replace(U, "$1" + H.trim());
      case 58:
        return H.trim() + R.replace(U, "$1" + H.trim());
      default:
        if (0 < 1 * F && 0 < R.indexOf("\f")) return R.replace(U, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + R;
  }
  function a(H, R, F, j) {
    var y = H + ";", ee = 2 * R + 3 * F + 4 * j;
    if (ee === 944) {
      H = y.indexOf(":", 9) + 1;
      var E = y.substring(H, y.length - 1).trim();
      return E = y.substring(0, H).trim() + E + ";", Ce === 1 || Ce === 2 && s(E, 1) ? "-webkit-" + E + E : E;
    }
    if (Ce === 0 || Ce === 2 && !s(y, 1)) return y;
    switch (ee) {
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
        return E = y.substring(y.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + E + "-webkit-" + y + "-ms-flex-pack" + E + y;
      case 1005:
        return T.test(y) ? y.replace(z, ":-webkit-") + y.replace(z, ":-moz-") + y : y;
      case 1e3:
        switch (E = y.substring(13).trim(), R = E.indexOf("-") + 1, E.charCodeAt(0) + E.charCodeAt(R)) {
          case 226:
            E = y.replace(C, "tb");
            break;
          case 232:
            E = y.replace(C, "tb-rl");
            break;
          case 220:
            E = y.replace(C, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + E + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (R = (y = H).length - 10, E = (y.charCodeAt(R) === 33 ? y.substring(0, R) : y).substring(H.indexOf(":", 7) + 1).trim(), ee = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
          case 203:
            if (111 > E.charCodeAt(8)) break;
          case 115:
            y = y.replace(E, "-webkit-" + E) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(E, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + y.replace(E, "-webkit-" + E) + ";" + y.replace(E, "-ms-" + E + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return E = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + E + "-ms-flex-" + E + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(Ne, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(Ne, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ye.test(H) === !0) return (E = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(H.replace("stretch", "fill-available"), R, F, j).replace(":fill-available", ":stretch") : y.replace(E, "-webkit-" + E) + y.replace(E, "-moz-" + E.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, F + j === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(H, R) {
    var F = H.indexOf(R === 1 ? ":" : "{"), j = H.substring(0, R !== 3 ? F : 10);
    return F = H.substring(F + 1, H.length - 1), Be(R !== 2 ? j : j.replace(Me, "$1"), F, R);
  }
  function d(H, R) {
    var F = a(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return F !== R + ";" ? F.replace(ke, " or ($1)").substring(4) : "(" + R + ")";
  }
  function g(H, R, F, j, y, ee, E, ie, J, te) {
    for (var X = 0, ne = R, de; X < Re; ++X)
      switch (de = je[X].call(_, H, ne, F, j, y, ee, E, ie, J, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = de;
      }
    if (ne !== R) return ne;
  }
  function h(H) {
    switch (H) {
      case void 0:
      case null:
        Re = je.length = 0;
        break;
      default:
        if (typeof H == "function") je[Re++] = H;
        else if (typeof H == "object") for (var R = 0, F = H.length; R < F; ++R)
          h(H[R]);
        else et = !!H | 0;
    }
    return h;
  }
  function f(H) {
    return H = H.prefix, H !== void 0 && (Be = null, H ? typeof H != "function" ? Ce = 1 : (Ce = 2, Be = H) : Ce = 0), f;
  }
  function _(H, R) {
    var F = H;
    if (33 > F.charCodeAt(0) && (F = F.trim()), se = F, F = [se], 0 < Re) {
      var j = g(-1, R, F, F, Oe, me, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (R = j);
    }
    var y = t(lt, F, R, 0, 0);
    return 0 < Re && (j = g(-2, y, F, F, Oe, me, y.length, 0, 0, 0), j !== void 0 && (y = j)), se = "", Ie = 0, me = Oe = 1, y;
  }
  var x = /^\0+/g, L = /[\0\r\f]/g, z = /: */g, T = /zoo|gra/, k = /([,: ])(transform)/g, I = /,\r+?/g, U = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, V = /::(place)/g, q = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, ke = /([\s\S]*?);/g, Ne = /-self|flex-/g, Me = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ye = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Oe = 1, Ie = 0, Ce = 1, lt = [], je = [], Re = 0, Be = null, et = 0, se = "";
  return _.use = h, _.set = f, e !== void 0 && f(e), _;
}
var Df = {
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
function Lf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Mf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, hs = /* @__PURE__ */ Lf(
  function(e) {
    return Mf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ni = { exports: {} }, Ue = {};
var ms;
function jf() {
  if (ms) return Ue;
  ms = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, z = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, U = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function V(C) {
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
    return V(C) === f;
  }
  return Ue.AsyncMode = h, Ue.ConcurrentMode = f, Ue.ContextConsumer = g, Ue.ContextProvider = d, Ue.Element = t, Ue.ForwardRef = _, Ue.Fragment = n, Ue.Lazy = T, Ue.Memo = z, Ue.Portal = r, Ue.Profiler = s, Ue.StrictMode = a, Ue.Suspense = x, Ue.isAsyncMode = function(C) {
    return q(C) || V(C) === h;
  }, Ue.isConcurrentMode = q, Ue.isContextConsumer = function(C) {
    return V(C) === g;
  }, Ue.isContextProvider = function(C) {
    return V(C) === d;
  }, Ue.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, Ue.isForwardRef = function(C) {
    return V(C) === _;
  }, Ue.isFragment = function(C) {
    return V(C) === n;
  }, Ue.isLazy = function(C) {
    return V(C) === T;
  }, Ue.isMemo = function(C) {
    return V(C) === z;
  }, Ue.isPortal = function(C) {
    return V(C) === r;
  }, Ue.isProfiler = function(C) {
    return V(C) === s;
  }, Ue.isStrictMode = function(C) {
    return V(C) === a;
  }, Ue.isSuspense = function(C) {
    return V(C) === x;
  }, Ue.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === a || C === x || C === L || typeof C == "object" && C !== null && (C.$$typeof === T || C.$$typeof === z || C.$$typeof === d || C.$$typeof === g || C.$$typeof === _ || C.$$typeof === I || C.$$typeof === U || C.$$typeof === $ || C.$$typeof === k);
  }, Ue.typeOf = V, Ue;
}
var gs;
function Ff() {
  return gs || (gs = 1, ni.exports = jf()), ni.exports;
}
var ai, bs;
function zf() {
  if (bs) return ai;
  bs = 1;
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
  var g = Object.defineProperty, h = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, _ = Object.getOwnPropertyDescriptor, x = Object.getPrototypeOf, L = Object.prototype;
  function z(T, k, I) {
    if (typeof k != "string") {
      if (L) {
        var U = x(k);
        U && U !== L && z(T, U, I);
      }
      var $ = h(k);
      f && ($ = $.concat(f(k)));
      for (var V = d(T), q = d(k), C = 0; C < $.length; ++C) {
        var ae = $[C];
        if (!r[ae] && !(I && I[ae]) && !(q && q[ae]) && !(V && V[ae])) {
          var ke = _(k, ae);
          try {
            g(T, ae, ke);
          } catch {
          }
        }
      }
    }
    return T;
  }
  return ai = z, ai;
}
var Uf = zf();
const $f = /* @__PURE__ */ As(Uf);
var vt = { env: { NODE_ENV: "production" } };
function yr() {
  return (yr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ys = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Si = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !kl.typeOf(e);
}, ga = Object.freeze([]), Cr = Object.freeze({});
function Sn(e) {
  return typeof e == "function";
}
function vs(e) {
  return e.displayName || e.name || "Component";
}
function Li(e) {
  return e && typeof e.styledComponentId == "string";
}
var Yr = typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_ATTR || vt.env.SC_ATTR) || "data-styled", Mi = typeof window < "u" && "HTMLElement" in window, Hf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && vt.env.REACT_APP_SC_DISABLE_SPEEDY : vt.env.SC_DISABLE_SPEEDY !== void 0 && vt.env.SC_DISABLE_SPEEDY !== "" ? vt.env.SC_DISABLE_SPEEDY !== "false" && vt.env.SC_DISABLE_SPEEDY : vt.env.NODE_ENV !== "production"));
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
}(), ua = /* @__PURE__ */ new Map(), ba = /* @__PURE__ */ new Map(), vn = 1, ea = function(e) {
  if (ua.has(e)) return ua.get(e);
  for (; ba.has(vn); ) vn++;
  var t = vn++;
  return ua.set(e, t), ba.set(t, e), t;
}, Wf = function(e) {
  return ba.get(e);
}, qf = function(e, t) {
  t >= vn && (vn = t + 1), ua.set(e, t), ba.set(t, e);
}, Vf = "style[" + Yr + '][data-styled-version="5.3.11"]', Yf = new RegExp("^" + Yr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Gf = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, Xf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var g = d.match(Yf);
      if (g) {
        var h = 0 | parseInt(g[1], 10), f = g[2];
        h !== 0 && (qf(f, h), Gf(e, f, g[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Zf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Sl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(g) {
    for (var h = g.childNodes, f = h.length; f >= 0; f--) {
      var _ = h[f];
      if (_ && _.nodeType === 1 && _.hasAttribute(Yr)) return _;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Yr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Zf();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, Kf = function() {
  function e(r) {
    var n = this.element = Sl(r);
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
}(), Qf = function() {
  function e(r) {
    var n = this.element = Sl(r);
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
}(), Jf = function() {
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
}(), ws = Mi, ep = { isServer: !Mi, useCSSOMInjection: !Hf }, _l = function() {
  function e(r, n, a) {
    r === void 0 && (r = Cr), n === void 0 && (n = {}), this.options = yr({}, ep, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Mi && ws && (ws = !1, function(s) {
      for (var d = document.querySelectorAll(Vf), g = 0, h = d.length; g < h; g++) {
        var f = d[g];
        f && f.getAttribute(Yr) !== "active" && (Xf(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ea(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(yr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new Jf(d) : s ? new Kf(d) : new Qf(d), new Bf(r)));
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
            var _ = Yr + ".g" + d + '[id="' + g + '"]', x = "";
            h !== void 0 && h.forEach(function(L) {
              L.length > 0 && (x += L + ",");
            }), s += "" + f + _ + '{content:"' + x + `"}/*!sc*/
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
var Hr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, xl = function(e) {
  return Hr(5381, e);
};
function rp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Sn(r) && !Li(r)) return !1;
  }
  return !0;
}
var np = xl("5.3.11"), ap = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && rp(t), this.componentId = r, this.baseHash = Hr(np, r), this.baseStyle = n, _l.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Gr(this.rules, t, r, n).join(""), g = _i(Hr(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, g)) {
        var h = n(d, "." + g, void 0, a);
        r.insertRules(a, g, h);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var f = this.rules.length, _ = Hr(this.baseHash, n.hash), x = "", L = 0; L < f; L++) {
        var z = this.rules[L];
        if (typeof z == "string") x += z;
        else if (z) {
          var T = Gr(z, t, r, n), k = Array.isArray(T) ? T.join("") : T;
          _ = Hr(_, k + L), x += k;
        }
      }
      if (x) {
        var I = _i(_ >>> 0);
        if (!r.hasNameForId(a, I)) {
          var U = n(x, "." + I, void 0, a);
          r.insertRules(a, I, U);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), ip = /^\s*\/\/.*$/gm, op = [":", "[", ".", "#"];
function sp(e) {
  var t, r, n, a, s = Cr, d = s.options, g = d === void 0 ? Cr : d, h = s.plugins, f = h === void 0 ? ga : h, _ = new Pf(g), x = [], L = /* @__PURE__ */ function(k) {
    function I(U) {
      if (U) try {
        k(U + "}");
      } catch {
      }
    }
    return function(U, $, V, q, C, ae, ke, Ne, Me, Ye) {
      switch (U) {
        case 1:
          if (Me === 0 && $.charCodeAt(0) === 64) return k($ + ";"), "";
          break;
        case 2:
          if (Ne === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (Ne) {
            case 102:
            case 112:
              return k(V[0] + $), "";
            default:
              return $ + (Ye === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(I);
      }
    };
  }(function(k) {
    x.push(k);
  }), z = function(k, I, U) {
    return I === 0 && op.indexOf(U[r.length]) !== -1 || U.match(a) ? k : "." + t;
  };
  function T(k, I, U, $) {
    $ === void 0 && ($ = "&");
    var V = k.replace(ip, ""), q = I && U ? U + " " + I + " { " + V + " }" : V;
    return t = $, r = I, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), _(U || !I ? "" : I, q);
  }
  return _.use([].concat(f, [function(k, I, U) {
    k === 2 && U.length && U[0].lastIndexOf(r) > 0 && (U[0] = U[0].replace(n, z));
  }, L, function(k) {
    if (k === -2) {
      var I = x;
      return x = [], I;
    }
  }])), T.hash = f.length ? f.reduce(function(k, I) {
    return I.name || En(15), Hr(k, I.name);
  }, 5381).toString() : "", T;
}
var Tl = ft.createContext();
Tl.Consumer;
var Cl = ft.createContext(), lp = (Cl.Consumer, new _l()), xi = sp();
function cp() {
  return wr(Tl) || lp;
}
function up() {
  return wr(Cl) || xi;
}
var dp = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = xi);
      var d = n.name + s.hash;
      a.hasNameForId(n.id, d) || a.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return En(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = xi), this.name + t.hash;
  }, e;
}(), fp = /([A-Z])/, pp = /([A-Z])/g, hp = /^ms-/, mp = function(e) {
  return "-" + e.toLowerCase();
};
function Ss(e) {
  return fp.test(e) ? e.replace(pp, mp).replace(hp, "-ms-") : e;
}
var _s = function(e) {
  return e == null || e === !1 || e === "";
};
function Gr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, g = e.length; d < g; d += 1) (a = Gr(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (_s(e)) return "";
  if (Li(e)) return "." + e.styledComponentId;
  if (Sn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return Gr(h, t, r, n);
  }
  var f;
  return e instanceof dp ? r ? (e.inject(r, n), e.getName(n)) : e : Si(e) ? function _(x, L) {
    var z, T, k = [];
    for (var I in x) x.hasOwnProperty(I) && !_s(x[I]) && (Array.isArray(x[I]) && x[I].isCss || Sn(x[I]) ? k.push(Ss(I) + ":", x[I], ";") : Si(x[I]) ? k.push.apply(k, _(x[I], I)) : k.push(Ss(I) + ": " + (z = I, (T = x[I]) == null || typeof T == "boolean" || T === "" ? "" : typeof T != "number" || T === 0 || z in Df || z.startsWith("--") ? String(T).trim() : T + "px") + ";"));
    return L ? [L + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var xs = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function gp(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Sn(e) || Si(e) ? xs(Gr(ys(ga, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : xs(Gr(ys(e, r)));
}
var bp = function(e, t, r) {
  return r === void 0 && (r = Cr), e.theme !== r.theme && e.theme || t || r.theme;
}, yp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, vp = /(^-|-$)/g;
function ii(e) {
  return e.replace(yp, "-").replace(vp, "");
}
var wp = function(e) {
  return _i(xl(e) >>> 0);
};
function ta(e) {
  return typeof e == "string" && vt.env.NODE_ENV === "production";
}
var Ti = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, kp = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Sp(e, t, r) {
  var n = e[r];
  Ti(t) && Ti(n) ? El(n, t) : e[r] = t;
}
function El(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (Ti(d)) for (var g in d) kp(g) && Sp(e, d[g], g);
  }
  return e;
}
var Al = ft.createContext();
Al.Consumer;
var oi = {};
function Rl(e, t, r) {
  var n = Li(e), a = !ta(e), s = t.attrs, d = s === void 0 ? ga : s, g = t.componentId, h = g === void 0 ? function($, V) {
    var q = typeof $ != "string" ? "sc" : ii($);
    oi[q] = (oi[q] || 0) + 1;
    var C = q + "-" + wp("5.3.11" + q + oi[q]);
    return V ? V + "-" + C : C;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, _ = f === void 0 ? function($) {
    return ta($) ? "styled." + $ : "Styled(" + vs($) + ")";
  }(e) : f, x = t.displayName && t.componentId ? ii(t.displayName) + "-" + t.componentId : t.componentId || h, L = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, z = t.shouldForwardProp;
  n && e.shouldForwardProp && (z = t.shouldForwardProp ? function($, V, q) {
    return e.shouldForwardProp($, V, q) && t.shouldForwardProp($, V, q);
  } : e.shouldForwardProp);
  var T, k = new ap(r, x, n ? e.componentStyle : void 0), I = k.isStatic && d.length === 0, U = function($, V) {
    return function(q, C, ae, ke) {
      var Ne = q.attrs, Me = q.componentStyle, Ye = q.defaultProps, ue = q.foldedComponentIds, me = q.shouldForwardProp, Oe = q.styledComponentId, Ie = q.target, Ce = function(j, y, ee) {
        j === void 0 && (j = Cr);
        var E = yr({}, y, { theme: j }), ie = {};
        return ee.forEach(function(J) {
          var te, X, ne, de = J;
          for (te in Sn(de) && (de = de(E)), de) E[te] = ie[te] = te === "className" ? (X = ie[te], ne = de[te], X && ne ? X + " " + ne : X || ne) : de[te];
        }), [E, ie];
      }(bp(C, wr(Al), Ye) || Cr, C, Ne), lt = Ce[0], je = Ce[1], Re = function(j, y, ee, E) {
        var ie = cp(), J = up(), te = y ? j.generateAndInjectStyles(Cr, ie, J) : j.generateAndInjectStyles(ee, ie, J);
        return te;
      }(Me, ke, lt), Be = ae, et = je.$as || C.$as || je.as || C.as || Ie, se = ta(et), H = je !== C ? yr({}, C, {}, je) : C, R = {};
      for (var F in H) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? R.as = H[F] : (me ? me(F, hs, et) : !se || hs(F)) && (R[F] = H[F]));
      return C.style && je.style !== C.style && (R.style = yr({}, C.style, {}, je.style)), R.className = Array.prototype.concat(ue, Oe, Re !== Oe ? Re : null, C.className, je.className).filter(Boolean).join(" "), R.ref = Be, Cs(et, R);
    }(T, $, V, I);
  };
  return U.displayName = _, (T = ft.forwardRef(U)).attrs = L, T.componentStyle = k, T.displayName = _, T.shouldForwardProp = z, T.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ga, T.styledComponentId = x, T.target = n ? e.target : e, T.withComponent = function($) {
    var V = t.componentId, q = function(ae, ke) {
      if (ae == null) return {};
      var Ne, Me, Ye = {}, ue = Object.keys(ae);
      for (Me = 0; Me < ue.length; Me++) Ne = ue[Me], ke.indexOf(Ne) >= 0 || (Ye[Ne] = ae[Ne]);
      return Ye;
    }(t, ["componentId"]), C = V && V + "-" + (ta($) ? $ : ii(vs($)));
    return Rl($, yr({}, q, { attrs: L, componentId: C }), r);
  }, Object.defineProperty(T, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = n ? El({}, e.defaultProps, $) : $;
  } }), Object.defineProperty(T, "toString", { value: function() {
    return "." + T.styledComponentId;
  } }), a && $f(T, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), T;
}
var _n = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Cr), !kl.isValidElementType(n)) return En(1, String(n));
    var s = function() {
      return r(n, a, gp.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, yr({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, yr({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(Rl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  _n[e] = _n(e);
});
const _p = _n.section``, xp = (e, t, r) => ({
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
  ],
  cardLink: e.eventButtonUrl || (e == null ? void 0 : e.buttonLink)
}), Tp = ({ cardButton: e }) => {
  const { feeds: t } = wr(wa), r = t == null ? void 0 : t.map(
    (n, a) => xp(n, a, e)
  );
  return /* @__PURE__ */ it.jsx(_p, { children: /* @__PURE__ */ it.jsx(
    ml,
    {
      width: "auto",
      cardType: "news",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, Ol = ({ cardButton: e, ...t }) => (Er(() => {
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
/* @__PURE__ */ it.jsx(Fr, { ...t, children: /* @__PURE__ */ it.jsx(
  Tp,
  {
    cardButton: { ...kn.cardButton, ...e }
  }
) }));
Ol.propTypes = Fr.propTypes;
const Nl = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), Cp = _n.section`
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
        type: "news",
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
        tags: r ? [] : Nl(e == null ? void 0 : e.interests),
        cardLink: e.eventButtonUrl || (e == null ? void 0 : e.buttonLink)
      }
    )
  },
  e.id
), Ap = ({ cardButton: e, hideTags: t }) => {
  const { feeds: r } = wr(wa), n = t === !0 || t === "true";
  return /* @__PURE__ */ it.jsx(Cp, { className: "row row-spaced", "data-testid": "grid-view-container", children: r == null ? void 0 : r.map((a, s) => /* @__PURE__ */ it.jsx(ft.Fragment, { children: Ep(a, e, n) }, s)) });
}, Il = ({ cardButton: e, hideTags: t = !0, ...r }) => (Er(() => {
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
/* @__PURE__ */ it.jsx(Fr, { ...r, children: /* @__PURE__ */ it.jsx(
  Ap,
  {
    cardButton: { ...kn.cardButton, ...e },
    hideTags: t
  }
) }));
Il.propTypes = {
  ...Fr.propTypes,
  cardButton: el,
  hideTags: dt.oneOf(["true", "false", !0, !1])
};
const Rp = _n.section``, Op = (e, t, r) => /* @__PURE__ */ it.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ it.jsx(
  gr,
  {
    type: "news",
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
    tags: r ? [] : Nl(e == null ? void 0 : e.interests),
    cardLink: e.eventButtonUrl || (e == null ? void 0 : e.buttonLink)
  }
) }, e.id), Np = ({ cardButton: e, hideTags: t }) => {
  const { feeds: r } = wr(wa), n = t === !0 || t === "true";
  return /* @__PURE__ */ it.jsx(Rp, { className: "row-spaced", "data-testid": "list-view-container", children: r == null ? void 0 : r.map((a, s) => /* @__PURE__ */ it.jsx(ft.Fragment, { children: Op(a, e, n) }, s)) });
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
/* @__PURE__ */ it.jsx(Fr, { ...r, children: /* @__PURE__ */ it.jsx(
  Np,
  {
    cardButton: { ...kn.cardButton, ...e },
    hideTags: t
  }
) }));
Pl.propTypes = {
  ...Fr.propTypes,
  feedCardButtonShape: el,
  hideTags: dt.oneOf(["true", "false", !0, !1])
};
var ra = {}, Ts;
function Ip() {
  if (Ts) return ra;
  Ts = 1;
  var e = Es;
  return ra.createRoot = e.createRoot, ra.hydrateRoot = e.hydrateRoot, ra;
}
var Pp = Ip();
const ji = (e, t, r) => {
  Pp.createRoot(r).render(ft.createElement(e, t));
}, Mp = ({ targetSelector: e, props: t }) => {
  ji(Il, t, document.querySelector(e));
}, jp = ({ targetSelector: e, props: t }) => {
  ji(Pl, t, document.querySelector(e));
}, Fp = ({ targetSelector: e, props: t }) => {
  ji(Ol, t, document.querySelector(e));
};
export {
  Ol as CardCarouselNews,
  Il as CardGridNews,
  Pl as CardListlNews,
  Fp as initCardCarouselNewsComponent,
  Mp as initCardGridNewsComponent,
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
