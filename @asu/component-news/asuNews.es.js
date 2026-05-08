import pt, { forwardRef as Ci, Component as Bl, createContext as ql, useRef as Vl, useImperativeHandle as Yl, useId as Gl, useContext as wr, createElement as Cs, useState as Hr, useEffect as Er } from "react";
import Es from "react-dom";
function As(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pa = { exports: {} }, sn = {};
var to;
function Xl() {
  if (to) return sn;
  to = 1;
  var e = pt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, h, f) {
    var _, x = {}, L = null, z = null;
    f !== void 0 && (L = "" + f), h.key !== void 0 && (L = "" + h.key), h.ref !== void 0 && (z = h.ref);
    for (_ in h) n.call(h, _) && !s.hasOwnProperty(_) && (x[_] = h[_]);
    if (g && g.defaultProps) for (_ in h = g.defaultProps, h) x[_] === void 0 && (x[_] = h[_]);
    return { $$typeof: t, type: g, key: L, ref: z, props: x, _owner: a.current };
  }
  return sn.Fragment = r, sn.jsx = d, sn.jsxs = d, sn;
}
var ro;
function Zl() {
  return ro || (ro = 1, Pa.exports = Xl()), Pa.exports;
}
var it = Zl();
function Ei(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var no = { exports: {} }, ln = {}, ao;
function Kl() {
  if (ao) return ln;
  ao = 1;
  var e = pt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, h, f) {
    var _, x = {}, L = null, z = null;
    f !== void 0 && (L = "" + f), h.key !== void 0 && (L = "" + h.key), h.ref !== void 0 && (z = h.ref);
    for (_ in h) n.call(h, _) && !s.hasOwnProperty(_) && (x[_] = h[_]);
    if (g && g.defaultProps) for (_ in h = g.defaultProps, h) x[_] === void 0 && (x[_] = h[_]);
    return { $$typeof: t, type: g, key: L, ref: z, props: x, _owner: a.current };
  }
  return ln.Fragment = r, ln.jsx = d, ln.jsxs = d, ln;
}
var io;
function Jl() {
  return io || (io = 1, no.exports = Kl()), no.exports;
}
var M = Jl(), oo = { exports: {} }, Da, so;
function Ql() {
  if (so) return Da;
  so = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Da = e, Da;
}
var La, lo;
function eu() {
  if (lo) return La;
  lo = 1;
  var e = /* @__PURE__ */ Ql();
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
var uo;
function tu() {
  return uo || (uo = 1, oo.exports = /* @__PURE__ */ eu()()), oo.exports;
}
var ru = /* @__PURE__ */ tu();
const l = /* @__PURE__ */ Ei(ru), nu = () => {
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
}, au = (e) => (e || []).join(" "), {
  entries: Rs,
  setPrototypeOf: co,
  isFrozen: iu,
  getPrototypeOf: ou,
  getOwnPropertyDescriptor: su
} = Object;
let {
  freeze: xt,
  seal: Ut,
  create: vn
} = Object, {
  apply: si,
  construct: li
} = typeof Reflect < "u" && Reflect;
xt || (xt = function(e) {
  return e;
});
Ut || (Ut = function(e) {
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
const un = Tt(Array.prototype.forEach), lu = Tt(Array.prototype.lastIndexOf), fo = Tt(Array.prototype.pop), cn = Tt(Array.prototype.push), uu = Tt(Array.prototype.splice), ia = Tt(String.prototype.toLowerCase), Ma = Tt(String.prototype.toString), ja = Tt(String.prototype.match), Ur = Tt(String.prototype.replace), cu = Tt(String.prototype.indexOf), du = Tt(String.prototype.trim), Qt = Tt(Object.prototype.hasOwnProperty), St = Tt(RegExp.prototype.test), dn = fu(TypeError);
function Tt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return si(e, t, n);
  };
}
function fu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return li(e, r);
  };
}
function Ee(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ia;
  co && co(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (iu(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function pu(e) {
  for (let t = 0; t < e.length; t++)
    Qt(e, t) || (e[t] = null);
  return e;
}
function ur(e) {
  const t = vn(null);
  for (const [r, n] of Rs(e))
    Qt(e, r) && (Array.isArray(n) ? t[r] = pu(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = ur(n) : t[r] = n);
  return t;
}
function fn(e, t) {
  for (; e !== null; ) {
    const n = su(e, t);
    if (n) {
      if (n.get)
        return Tt(n.get);
      if (typeof n.value == "function")
        return Tt(n.value);
    }
    e = ou(e);
  }
  function r() {
    return null;
  }
  return r;
}
const po = xt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Fa = xt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), za = xt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), hu = xt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ua = xt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), mu = xt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ho = xt(["#text"]), mo = xt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), $a = xt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), go = xt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Yn = xt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), gu = Ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm), bu = Ut(/<%[\w\W]*|[\w\W]*%>/gm), yu = Ut(/\$\{[\w\W]*/gm), vu = Ut(/^data-[\-\w.\u00B7-\uFFFF]+$/), wu = Ut(/^aria-[\-\w]+$/), Os = Ut(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ku = Ut(/^(?:\w+script|data):/i), Su = Ut(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ns = Ut(/^html$/i), _u = Ut(/^[a-z][.\w]*(-[.\w]+)+$/i);
var bo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: wu,
  ATTR_WHITESPACE: Su,
  CUSTOM_ELEMENT: _u,
  DATA_ATTR: vu,
  DOCTYPE_NAME: Ns,
  ERB_EXPR: bu,
  IS_ALLOWED_URI: Os,
  IS_SCRIPT_OR_DATA: ku,
  MUSTACHE_EXPR: gu,
  TMPLIT_EXPR: yu
});
const pn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, xu = function() {
  return typeof window > "u" ? null : window;
}, Tu = function(e, t) {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xu();
  const t = (b) => Is(b);
  if (t.version = "3.4.0", t.removed = [], !e || !e.document || e.document.nodeType !== pn.document || !e.Element)
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
  } = e, T = h.prototype, k = fn(T, "cloneNode"), I = fn(T, "remove"), U = fn(T, "nextSibling"), $ = fn(T, "childNodes"), V = fn(T, "parentNode");
  if (typeof d == "function") {
    const b = r.createElement("template");
    b.content && b.content.ownerDocument && (r = b.content.ownerDocument);
  }
  let q, C = "";
  const {
    implementation: ae,
    createNodeIterator: ke,
    createDocumentFragment: Pe,
    getElementsByTagName: je
  } = r, {
    importNode: Ge
  } = n;
  let de = yo();
  t.isSupported = typeof Rs == "function" && typeof V == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: fe,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Ce,
    ARIA_ATTR: ut,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: Be
  } = bo;
  let {
    IS_ALLOWED_URI: tt
  } = bo, se = null;
  const H = Ee({}, [...po, ...Fa, ...za, ...Ua, ...ho]);
  let R = null;
  const F = Ee({}, [...mo, ...$a, ...go, ...Yn]);
  let j = Object.seal(vn(null, {
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
  })), v = null, ee = null;
  const A = Object.seal(vn(null, {
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
  let ie = !0, Q = !0, te = !1, G = !0, ne = !1, ue = !0, K = !1, ge = !1, re = !1, le = !1, He = !1, ce = !1, ot = !0, qe = !1;
  const Se = "user-content-";
  let Y = !0, oe = !1, Xe = {}, De = null;
  const Le = Ee({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ar = null;
  const ir = Ee({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ht = null;
  const Wt = Ee({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), mt = "http://www.w3.org/1998/Math/MathML", Rt = "http://www.w3.org/2000/svg", Je = "http://www.w3.org/1999/xhtml";
  let ht = Je, Bt = !1, qt = null;
  const gt = Ee({}, [mt, Rt, Je], Ma);
  let kt = Ee({}, ["mi", "mo", "mn", "ms", "mtext"]), bt = Ee({}, ["annotation-xml"]);
  const Me = Ee({}, ["title", "style", "font", "a", "script"]);
  let ct = null;
  const or = ["application/xhtml+xml", "text/html"], Vt = "text/html";
  let pe = null, st = null;
  const Ot = r.createElement("form"), sr = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Nt = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(st && st === b)) {
      if ((!b || typeof b != "object") && (b = {}), b = ur(b), ct = // eslint-disable-next-line unicorn/prefer-includes
      or.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Vt : b.PARSER_MEDIA_TYPE, pe = ct === "application/xhtml+xml" ? Ma : ia, se = Qt(b, "ALLOWED_TAGS") ? Ee({}, b.ALLOWED_TAGS, pe) : H, R = Qt(b, "ALLOWED_ATTR") ? Ee({}, b.ALLOWED_ATTR, pe) : F, qt = Qt(b, "ALLOWED_NAMESPACES") ? Ee({}, b.ALLOWED_NAMESPACES, Ma) : gt, Ht = Qt(b, "ADD_URI_SAFE_ATTR") ? Ee(ur(Wt), b.ADD_URI_SAFE_ATTR, pe) : Wt, ar = Qt(b, "ADD_DATA_URI_TAGS") ? Ee(ur(ir), b.ADD_DATA_URI_TAGS, pe) : ir, De = Qt(b, "FORBID_CONTENTS") ? Ee({}, b.FORBID_CONTENTS, pe) : Le, v = Qt(b, "FORBID_TAGS") ? Ee({}, b.FORBID_TAGS, pe) : ur({}), ee = Qt(b, "FORBID_ATTR") ? Ee({}, b.FORBID_ATTR, pe) : ur({}), Xe = Qt(b, "USE_PROFILES") ? b.USE_PROFILES : !1, ie = b.ALLOW_ARIA_ATTR !== !1, Q = b.ALLOW_DATA_ATTR !== !1, te = b.ALLOW_UNKNOWN_PROTOCOLS || !1, G = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = b.SAFE_FOR_TEMPLATES || !1, ue = b.SAFE_FOR_XML !== !1, K = b.WHOLE_DOCUMENT || !1, le = b.RETURN_DOM || !1, He = b.RETURN_DOM_FRAGMENT || !1, ce = b.RETURN_TRUSTED_TYPE || !1, re = b.FORCE_BODY || !1, ot = b.SANITIZE_DOM !== !1, qe = b.SANITIZE_NAMED_PROPS || !1, Y = b.KEEP_CONTENT !== !1, oe = b.IN_PLACE || !1, tt = b.ALLOWED_URI_REGEXP || Os, ht = b.NAMESPACE || Je, kt = b.MATHML_TEXT_INTEGRATION_POINTS || kt, bt = b.HTML_INTEGRATION_POINTS || bt, j = b.CUSTOM_ELEMENT_HANDLING || vn(null), b.CUSTOM_ELEMENT_HANDLING && sr(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && sr(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), He && (le = !0), Xe && (se = Ee({}, ho), R = vn(null), Xe.html === !0 && (Ee(se, po), Ee(R, mo)), Xe.svg === !0 && (Ee(se, Fa), Ee(R, $a), Ee(R, Yn)), Xe.svgFilters === !0 && (Ee(se, za), Ee(R, $a), Ee(R, Yn)), Xe.mathMl === !0 && (Ee(se, Ua), Ee(R, go), Ee(R, Yn))), A.tagCheck = null, A.attributeCheck = null, b.ADD_TAGS && (typeof b.ADD_TAGS == "function" ? A.tagCheck = b.ADD_TAGS : (se === H && (se = ur(se)), Ee(se, b.ADD_TAGS, pe))), b.ADD_ATTR && (typeof b.ADD_ATTR == "function" ? A.attributeCheck = b.ADD_ATTR : (R === F && (R = ur(R)), Ee(R, b.ADD_ATTR, pe))), b.ADD_URI_SAFE_ATTR && Ee(Ht, b.ADD_URI_SAFE_ATTR, pe), b.FORBID_CONTENTS && (De === Le && (De = ur(De)), Ee(De, b.FORBID_CONTENTS, pe)), b.ADD_FORBID_CONTENTS && (De === Le && (De = ur(De)), Ee(De, b.ADD_FORBID_CONTENTS, pe)), Y && (se["#text"] = !0), K && Ee(se, ["html", "head", "body"]), se.table && (Ee(se, ["tbody"]), delete v.tbody), b.TRUSTED_TYPES_POLICY) {
        if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw dn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw dn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        q = b.TRUSTED_TYPES_POLICY, C = q.createHTML("");
      } else
        q === void 0 && (q = Tu(z, a)), q !== null && typeof C == "string" && (C = q.createHTML(""));
      xt && xt(b), st = b;
    }
  }, Yt = Ee({}, [...Fa, ...za, ...hu]), lr = Ee({}, [...Ua, ...mu]), kr = function(b) {
    let y = V(b);
    (!y || !y.tagName) && (y = {
      namespaceURI: ht,
      tagName: "template"
    });
    const E = ia(b.tagName), X = ia(y.tagName);
    return qt[b.namespaceURI] ? b.namespaceURI === Rt ? y.namespaceURI === Je ? E === "svg" : y.namespaceURI === mt ? E === "svg" && (X === "annotation-xml" || kt[X]) : !!Yt[E] : b.namespaceURI === mt ? y.namespaceURI === Je ? E === "math" : y.namespaceURI === Rt ? E === "math" && bt[X] : !!lr[E] : b.namespaceURI === Je ? y.namespaceURI === Rt && !bt[X] || y.namespaceURI === mt && !kt[X] ? !1 : !lr[E] && (Me[E] || !Yt[E]) : !!(ct === "application/xhtml+xml" && qt[b.namespaceURI]) : !1;
  }, rt = function(b) {
    cn(t.removed, {
      element: b
    });
    try {
      V(b).removeChild(b);
    } catch {
      I(b);
    }
  }, dt = function(b, y) {
    try {
      cn(t.removed, {
        attribute: y.getAttributeNode(b),
        from: y
      });
    } catch {
      cn(t.removed, {
        attribute: null,
        from: y
      });
    }
    if (y.removeAttribute(b), b === "is")
      if (le || He)
        try {
          rt(y);
        } catch {
        }
      else
        try {
          y.setAttribute(b, "");
        } catch {
        }
  }, dr = function(b) {
    let y = null, E = null;
    if (re)
      b = "<remove></remove>" + b;
    else {
      const ve = ja(b, /^[\r\n\t ]+/);
      E = ve && ve[0];
    }
    ct === "application/xhtml+xml" && ht === Je && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const X = q ? q.createHTML(b) : b;
    if (ht === Je)
      try {
        y = new L().parseFromString(X, ct);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = ae.createDocument(ht, "template", null);
      try {
        y.documentElement.innerHTML = Bt ? C : X;
      } catch {
      }
    }
    const be = y.body || y.documentElement;
    return b && E && be.insertBefore(r.createTextNode(E), be.childNodes[0] || null), ht === Je ? je.call(y, K ? "html" : "body")[0] : K ? y.documentElement : be;
  }, jt = function(b) {
    return ke.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Ft = function(b) {
    return b instanceof x && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof _) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, At = function(b) {
    return typeof g == "function" && b instanceof g;
  };
  function Qe(b, y, E) {
    un(b, (X) => {
      X.call(t, y, E, st);
    });
  }
  const fr = function(b) {
    let y = null;
    if (Qe(de.beforeSanitizeElements, b, null), Ft(b))
      return rt(b), !0;
    const E = pe(b.nodeName);
    if (Qe(de.uponSanitizeElement, b, {
      tagName: E,
      allowedTags: se
    }), ue && b.hasChildNodes() && !At(b.firstElementChild) && St(/<[/\w!]/g, b.innerHTML) && St(/<[/\w!]/g, b.textContent) || ue && b.namespaceURI === Je && E === "style" && At(b.firstElementChild) || b.nodeType === pn.progressingInstruction || ue && b.nodeType === pn.comment && St(/<[/\w]/g, b.data))
      return rt(b), !0;
    if (v[E] || !(A.tagCheck instanceof Function && A.tagCheck(E)) && !se[E]) {
      if (!v[E] && pr(E) && (j.tagNameCheck instanceof RegExp && St(j.tagNameCheck, E) || j.tagNameCheck instanceof Function && j.tagNameCheck(E)))
        return !1;
      if (Y && !De[E]) {
        const X = V(b) || b.parentNode, be = $(b) || b.childNodes;
        if (be && X) {
          const ve = be.length;
          for (let we = ve - 1; we >= 0; --we) {
            const ze = k(be[we], !0);
            ze.__removalCount = (b.__removalCount || 0) + 1, X.insertBefore(ze, U(b));
          }
        }
      }
      return rt(b), !0;
    }
    return b instanceof h && !kr(b) || (E === "noscript" || E === "noembed" || E === "noframes") && St(/<\/no(script|embed|frames)/i, b.innerHTML) ? (rt(b), !0) : (ne && b.nodeType === pn.text && (y = b.textContent, un([fe, Re, Ne], (X) => {
      y = Ur(y, X, " ");
    }), b.textContent !== y && (cn(t.removed, {
      element: b.cloneNode()
    }), b.textContent = y)), Qe(de.afterSanitizeElements, b, null), !1);
  }, It = function(b, y, E) {
    if (ee[y] || ot && (y === "id" || y === "name") && (E in r || E in Ot))
      return !1;
    if (!(Q && !ee[y] && St(Ce, y)) && !(ie && St(ut, y)) && !(A.attributeCheck instanceof Function && A.attributeCheck(y, b))) {
      if (!R[y] || ee[y]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(pr(b) && (j.tagNameCheck instanceof RegExp && St(j.tagNameCheck, b) || j.tagNameCheck instanceof Function && j.tagNameCheck(b)) && (j.attributeNameCheck instanceof RegExp && St(j.attributeNameCheck, y) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(y, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          y === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && St(j.tagNameCheck, E) || j.tagNameCheck instanceof Function && j.tagNameCheck(E)))
        ) return !1;
      } else if (!Ht[y] && !St(tt, Ur(E, Oe, "")) && !((y === "src" || y === "xlink:href" || y === "href") && b !== "script" && cu(E, "data:") === 0 && ar[b]) && !(te && !St(Fe, Ur(E, Oe, ""))) && E)
        return !1;
    }
    return !0;
  }, pr = function(b) {
    return b !== "annotation-xml" && ja(b, Be);
  }, Gt = function(b) {
    Qe(de.beforeSanitizeAttributes, b, null);
    const {
      attributes: y
    } = b;
    if (!y || Ft(b))
      return;
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let X = y.length;
    for (; X--; ) {
      const be = y[X], {
        name: ve,
        namespaceURI: we,
        value: ze
      } = be, Ie = pe(ve), lt = ze;
      let Ze = ve === "value" ? lt : du(lt);
      if (E.attrName = Ie, E.attrValue = Ze, E.keepAttr = !0, E.forceKeepAttr = void 0, Qe(de.uponSanitizeAttribute, b, E), Ze = E.attrValue, qe && (Ie === "id" || Ie === "name") && (dt(ve, b), Ze = Se + Ze), ue && St(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ze)) {
        dt(ve, b);
        continue;
      }
      if (Ie === "attributename" && ja(Ze, "href")) {
        dt(ve, b);
        continue;
      }
      if (E.forceKeepAttr)
        continue;
      if (!E.keepAttr) {
        dt(ve, b);
        continue;
      }
      if (!G && St(/\/>/i, Ze)) {
        dt(ve, b);
        continue;
      }
      ne && un([fe, Re, Ne], (Pt) => {
        Ze = Ur(Ze, Pt, " ");
      });
      const We = pe(b.nodeName);
      if (!It(We, Ie, Ze)) {
        dt(ve, b);
        continue;
      }
      if (q && typeof z == "object" && typeof z.getAttributeType == "function" && !we)
        switch (z.getAttributeType(We, Ie)) {
          case "TrustedHTML": {
            Ze = q.createHTML(Ze);
            break;
          }
          case "TrustedScriptURL": {
            Ze = q.createScriptURL(Ze);
            break;
          }
        }
      if (Ze !== lt)
        try {
          we ? b.setAttributeNS(we, ve, Ze) : b.setAttribute(ve, Ze), Ft(b) ? rt(b) : fo(t.removed);
        } catch {
          dt(ve, b);
        }
    }
    Qe(de.afterSanitizeAttributes, b, null);
  }, zt = function(b) {
    let y = null;
    const E = jt(b);
    for (Qe(de.beforeSanitizeShadowDOM, b, null); y = E.nextNode(); )
      Qe(de.uponSanitizeShadowNode, y, null), fr(y), Gt(y), y.content instanceof s && zt(y.content);
    Qe(de.afterSanitizeShadowDOM, b, null);
  };
  return t.sanitize = function(b) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = null, X = null, be = null, ve = null;
    if (Bt = !b, Bt && (b = "<!-->"), typeof b != "string" && !At(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw dn("dirty is not a string, aborting");
      } else
        throw dn("toString is not a function");
    if (!t.isSupported)
      return b;
    if (ge || Nt(y), t.removed = [], typeof b == "string" && (oe = !1), oe) {
      if (b.nodeName) {
        const Ie = pe(b.nodeName);
        if (!se[Ie] || v[Ie])
          throw dn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof g)
      E = dr("<!---->"), X = E.ownerDocument.importNode(b, !0), X.nodeType === pn.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? E = X : E.appendChild(X);
    else {
      if (!le && !ne && !K && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return q && ce ? q.createHTML(b) : b;
      if (E = dr(b), !E)
        return le ? null : ce ? C : "";
    }
    E && re && rt(E.firstChild);
    const we = jt(oe ? b : E);
    for (; be = we.nextNode(); )
      fr(be), Gt(be), be.content instanceof s && zt(be.content);
    if (oe)
      return b;
    if (le) {
      if (ne) {
        E.normalize();
        let Ie = E.innerHTML;
        un([fe, Re, Ne], (lt) => {
          Ie = Ur(Ie, lt, " ");
        }), E.innerHTML = Ie;
      }
      if (He)
        for (ve = Pe.call(E.ownerDocument); E.firstChild; )
          ve.appendChild(E.firstChild);
      else
        ve = E;
      return (R.shadowroot || R.shadowrootmode) && (ve = Ge.call(n, ve, !0)), ve;
    }
    let ze = K ? E.outerHTML : E.innerHTML;
    return K && se["!doctype"] && E.ownerDocument && E.ownerDocument.doctype && E.ownerDocument.doctype.name && St(Ns, E.ownerDocument.doctype.name) && (ze = "<!DOCTYPE " + E.ownerDocument.doctype.name + `>
` + ze), ne && un([fe, Re, Ne], (Ie) => {
      ze = Ur(ze, Ie, " ");
    }), q && ce ? q.createHTML(ze) : ze;
  }, t.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Nt(b), ge = !0;
  }, t.clearConfig = function() {
    st = null, ge = !1;
  }, t.isValidAttribute = function(b, y, E) {
    st || Nt({});
    const X = pe(b), be = pe(y);
    return It(X, be, E);
  }, t.addHook = function(b, y) {
    typeof y == "function" && cn(de[b], y);
  }, t.removeHook = function(b, y) {
    if (y !== void 0) {
      const E = lu(de[b], y);
      return E === -1 ? void 0 : uu(de[b], E, 1)[0];
    }
    return fo(de[b]);
  }, t.removeHooks = function(b) {
    de[b] = [];
  }, t.removeAllHooks = function() {
    de = yo();
  }, t;
}
var vo = Is();
let Gn = null;
function Cu() {
  return Gn || (typeof window < "u" ? Gn = vo(window) : Gn = vo), Gn;
}
const Mr = (e) => ({ __html: Cu().sanitize(e) });
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
const Eu = ({
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
}, An = ({ children: e }) => /* @__PURE__ */ M.jsx(M.Fragment, { children: e });
An.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node,
    l.string
  ])
};
var wo = { exports: {} }, ko;
function Au() {
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
var Ru = Au();
const tr = /* @__PURE__ */ Ei(Ru);
({
  ...An.propTypes
});
const Ps = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ M.jsx("div", { className: t, ...r, children: /* @__PURE__ */ M.jsx("div", { className: "row", children: e }) });
Ps.propTypes = {
  children: An.propTypes.children
};
({
  ...Ps.propTypes
});
An.propTypes.children, l.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
An.propTypes.children;
const Ou = l.shape({
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
function Nu() {
  if (So) return Lr;
  So = 1;
  var e = pt;
  function t(i) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, m = 1; m < arguments.length; m++) c += "&args[]=" + encodeURIComponent(arguments[m]);
    return "Minified React error #" + i + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function d(i) {
    return r.call(s, i) ? !0 : r.call(a, i) ? !1 : n.test(i) ? s[i] = !0 : (a[i] = !0, !1);
  }
  function g(i, c, m, S, D, O, W) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = S, this.attributeNamespace = D, this.mustUseProperty = m, this.propertyName = i, this.type = c, this.sanitizeURL = O, this.removeEmptyString = W;
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
  }, L = ["Webkit", "ms", "Moz", "O"];
  Object.keys(x).forEach(function(i) {
    L.forEach(function(c) {
      c = c + i.charAt(0).toUpperCase() + i.substring(1), x[c] = x[i];
    });
  });
  var z = /["'&<>]/;
  function T(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var c = z.exec(i);
    if (c) {
      var m = "", S, D = 0;
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
        D !== S && (m += i.substring(D, S)), D = S + 1, m += c;
      }
      i = D !== S ? m + i.substring(D, S) : m;
    }
    return i;
  }
  var k = /([A-Z])/g, I = /^ms-/, U = Array.isArray;
  function $(i, c) {
    return { insertionMode: i, selectedValue: c };
  }
  function V(i, c, m) {
    switch (c) {
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
  function C(i, c, m) {
    if (typeof m != "object") throw Error(t(62));
    c = !0;
    for (var S in m) if (r.call(m, S)) {
      var D = m[S];
      if (D != null && typeof D != "boolean" && D !== "") {
        if (S.indexOf("--") === 0) {
          var O = T(S);
          D = T(("" + D).trim());
        } else {
          O = S;
          var W = q.get(O);
          W !== void 0 || (W = T(O.replace(k, "-$1").toLowerCase().replace(I, "-ms-")), q.set(O, W)), O = W, D = typeof D == "number" ? D === 0 || r.call(x, S) ? "" + D : D + "px" : T(("" + D).trim());
        }
        c ? (c = !1, i.push(' style="', O, ":", D)) : i.push(";", O, ":", D);
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
  function ke(i, c, m) {
    if (c != null) {
      if (m != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && i.push("" + c);
    }
  }
  function Pe(i) {
    var c = "";
    return e.Children.forEach(i, function(m) {
      m != null && (c += m);
    }), c;
  }
  function je(i, c, m, S) {
    i.push(fe(m));
    var D = m = null, O;
    for (O in c) if (r.call(c, O)) {
      var W = c[O];
      if (W != null) switch (O) {
        case "children":
          m = W;
          break;
        case "dangerouslySetInnerHTML":
          D = W;
          break;
        default:
          ae(i, S, O, W);
      }
    }
    return i.push(">"), ke(i, D, m), typeof m == "string" ? (i.push(T(m)), null) : m;
  }
  var Ge = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, de = /* @__PURE__ */ new Map();
  function fe(i) {
    var c = de.get(i);
    if (c === void 0) {
      if (!Ge.test(i)) throw Error(t(65, i));
      c = "<" + i, de.set(i, c);
    }
    return c;
  }
  function Re(i, c, m, S, D) {
    switch (c) {
      case "select":
        i.push(fe("select"));
        var O = null, W = null;
        for (_e in m) if (r.call(m, _e)) {
          var J = m[_e];
          if (J != null) switch (_e) {
            case "children":
              O = J;
              break;
            case "dangerouslySetInnerHTML":
              W = J;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ae(i, S, _e, J);
          }
        }
        return i.push(">"), ke(i, W, O), O;
      case "option":
        W = D.selectedValue, i.push(fe("option"));
        var he = J = null, ye = null, _e = null;
        for (O in m) if (r.call(m, O)) {
          var nt = m[O];
          if (nt != null) switch (O) {
            case "children":
              J = nt;
              break;
            case "selected":
              ye = nt;
              break;
            case "dangerouslySetInnerHTML":
              _e = nt;
              break;
            case "value":
              he = nt;
            default:
              ae(i, S, O, nt);
          }
        }
        if (W != null) if (m = he !== null ? "" + he : Pe(J), U(W)) {
          for (S = 0; S < W.length; S++)
            if ("" + W[S] === m) {
              i.push(' selected=""');
              break;
            }
        } else "" + W === m && i.push(' selected=""');
        else ye && i.push(' selected=""');
        return i.push(">"), ke(i, _e, J), J;
      case "textarea":
        i.push(fe("textarea")), _e = W = O = null;
        for (J in m) if (r.call(m, J) && (he = m[J], he != null)) switch (J) {
          case "children":
            _e = he;
            break;
          case "value":
            O = he;
            break;
          case "defaultValue":
            W = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ae(
              i,
              S,
              J,
              he
            );
        }
        if (O === null && W !== null && (O = W), i.push(">"), _e != null) {
          if (O != null) throw Error(t(92));
          if (U(_e) && 1 < _e.length) throw Error(t(93));
          O = "" + _e;
        }
        return typeof O == "string" && O[0] === `
` && i.push(`
`), O !== null && i.push(T("" + O)), null;
      case "input":
        i.push(fe("input")), he = _e = J = O = null;
        for (W in m) if (r.call(m, W) && (ye = m[W], ye != null)) switch (W) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            he = ye;
            break;
          case "defaultValue":
            J = ye;
            break;
          case "checked":
            _e = ye;
            break;
          case "value":
            O = ye;
            break;
          default:
            ae(i, S, W, ye);
        }
        return _e !== null ? ae(i, S, "checked", _e) : he !== null && ae(i, S, "checked", he), O !== null ? ae(i, S, "value", O) : J !== null && ae(i, S, "value", J), i.push("/>"), null;
      case "menuitem":
        i.push(fe("menuitem"));
        for (var Xt in m) if (r.call(m, Xt) && (O = m[Xt], O != null)) switch (Xt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ae(i, S, Xt, O);
        }
        return i.push(">"), null;
      case "title":
        i.push(fe("title")), O = null;
        for (nt in m) if (r.call(m, nt) && (W = m[nt], W != null)) switch (nt) {
          case "children":
            O = W;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ae(i, S, nt, W);
        }
        return i.push(">"), O;
      case "listing":
      case "pre":
        i.push(fe(c)), W = O = null;
        for (he in m) if (r.call(m, he) && (J = m[he], J != null)) switch (he) {
          case "children":
            O = J;
            break;
          case "dangerouslySetInnerHTML":
            W = J;
            break;
          default:
            ae(i, S, he, J);
        }
        if (i.push(">"), W != null) {
          if (O != null) throw Error(t(60));
          if (typeof W != "object" || !("__html" in W)) throw Error(t(61));
          m = W.__html, m != null && (typeof m == "string" && 0 < m.length && m[0] === `
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
        i.push(fe(c));
        for (var Zt in m) if (r.call(m, Zt) && (O = m[Zt], O != null)) switch (Zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            ae(i, S, Zt, O);
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
        return D.insertionMode === 0 && i.push("<!DOCTYPE html>"), je(i, m, c, S);
      default:
        if (c.indexOf("-") === -1 && typeof m.is != "string") return je(i, m, c, S);
        i.push(fe(c)), W = O = null;
        for (ye in m) if (r.call(m, ye) && (J = m[ye], J != null)) switch (ye) {
          case "children":
            O = J;
            break;
          case "dangerouslySetInnerHTML":
            W = J;
            break;
          case "style":
            C(i, S, J);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(ye) && typeof J != "function" && typeof J != "symbol" && i.push(" ", ye, '="', T(J), '"');
        }
        return i.push(">"), ke(i, W, O), O;
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
  function ut(i, c) {
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
  function tt(i, c, m, S) {
    return m.generateStaticMarkup ? (i.push(T(c)), !1) : (c === "" ? i = S : (S && i.push("<!-- -->"), i.push(T(c)), i = !0), i);
  }
  var se = Object.assign, H = Symbol.for("react.element"), R = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), A = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), ue = Symbol.for("react.scope"), K = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), re = Symbol.for("react.default_value"), le = Symbol.iterator;
  function He(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case F:
        return "Fragment";
      case R:
        return "Portal";
      case v:
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
      case ie:
        var c = i.render;
        return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case G:
        return c = i.displayName || null, c !== null ? c : He(i.type) || "Memo";
      case ne:
        c = i._payload, i = i._init;
        try {
          return He(i(c));
        } catch {
        }
    }
    return null;
  }
  var ce = {};
  function ot(i, c) {
    if (i = i.contextTypes, !i) return ce;
    var m = {}, S;
    for (S in i) m[S] = c[S];
    return m;
  }
  var qe = null;
  function Se(i, c) {
    if (i !== c) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var m = c.parent;
      if (i === null) {
        if (m !== null) throw Error(t(401));
      } else {
        if (m === null) throw Error(t(401));
        Se(i, m);
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
    i.depth === c.depth ? Se(i, c) : Xe(i, c);
  }
  function De(i, c) {
    var m = c.parent;
    if (m === null) throw Error(t(402));
    i.depth === m.depth ? Se(i, m) : De(i, m), c.context._currentValue2 = c.value;
  }
  function Le(i) {
    var c = qe;
    c !== i && (c === null ? oe(i) : i === null ? Y(c) : c.depth === i.depth ? Se(c, i) : c.depth > i.depth ? Xe(c, i) : De(c, i), qe = i);
  }
  var ar = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, c) {
    i = i._reactInternals, i.queue !== null && i.queue.push(c);
  }, enqueueReplaceState: function(i, c) {
    i = i._reactInternals, i.replace = !0, i.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function ir(i, c, m, S) {
    var D = i.state !== void 0 ? i.state : null;
    i.updater = ar, i.props = m, i.state = D;
    var O = { queue: [], replace: !1 };
    i._reactInternals = O;
    var W = c.contextType;
    if (i.context = typeof W == "object" && W !== null ? W._currentValue2 : S, W = c.getDerivedStateFromProps, typeof W == "function" && (W = W(m, D), D = W == null ? D : se({}, D, W), i.state = D), typeof c.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && ar.enqueueReplaceState(i, i.state, null), O.queue !== null && 0 < O.queue.length) if (c = O.queue, W = O.replace, O.queue = null, O.replace = !1, W && c.length === 1) i.state = c[0];
    else {
      for (O = W ? c[0] : i.state, D = !0, W = W ? 1 : 0; W < c.length; W++) {
        var J = c[W];
        J = typeof J == "function" ? J.call(i, O, m, S) : J, J != null && (D ? (D = !1, O = se({}, O, J)) : se(O, J));
      }
      i.state = O;
    }
    else O.queue = null;
  }
  var Ht = { id: 1, overflow: "" };
  function Wt(i, c, m) {
    var S = i.id;
    i = i.overflow;
    var D = 32 - mt(S) - 1;
    S &= ~(1 << D), m += 1;
    var O = 32 - mt(c) + D;
    if (30 < O) {
      var W = D - D % 5;
      return O = (S & (1 << W) - 1).toString(32), S >>= W, D -= W, { id: 1 << 32 - mt(c) + D | m << D | S, overflow: O + i };
    }
    return { id: 1 << O | m << D | S, overflow: i };
  }
  var mt = Math.clz32 ? Math.clz32 : ht, Rt = Math.log, Je = Math.LN2;
  function ht(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Rt(i) / Je | 0) | 0;
  }
  function Bt(i, c) {
    return i === c && (i !== 0 || 1 / i === 1 / c) || i !== i && c !== c;
  }
  var qt = typeof Object.is == "function" ? Object.is : Bt, gt = null, kt = null, bt = null, Me = null, ct = !1, or = !1, Vt = 0, pe = null, st = 0;
  function Ot() {
    if (gt === null) throw Error(t(321));
    return gt;
  }
  function sr() {
    if (0 < st) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Nt() {
    return Me === null ? bt === null ? (ct = !1, bt = Me = sr()) : (ct = !0, Me = bt) : Me.next === null ? (ct = !1, Me = Me.next = sr()) : (ct = !0, Me = Me.next), Me;
  }
  function Yt() {
    kt = gt = null, or = !1, bt = null, st = 0, Me = pe = null;
  }
  function lr(i, c) {
    return typeof c == "function" ? c(i) : c;
  }
  function kr(i, c, m) {
    if (gt = Ot(), Me = Nt(), ct) {
      var S = Me.queue;
      if (c = S.dispatch, pe !== null && (m = pe.get(S), m !== void 0)) {
        pe.delete(S), S = Me.memoizedState;
        do
          S = i(S, m.action), m = m.next;
        while (m !== null);
        return Me.memoizedState = S, [S, c];
      }
      return [Me.memoizedState, c];
    }
    return i = i === lr ? typeof c == "function" ? c() : c : m !== void 0 ? m(c) : c, Me.memoizedState = i, i = Me.queue = { last: null, dispatch: null }, i = i.dispatch = dt.bind(null, gt, i), [Me.memoizedState, i];
  }
  function rt(i, c) {
    if (gt = Ot(), Me = Nt(), c = c === void 0 ? null : c, Me !== null) {
      var m = Me.memoizedState;
      if (m !== null && c !== null) {
        var S = m[1];
        e: if (S === null) S = !1;
        else {
          for (var D = 0; D < S.length && D < c.length; D++) if (!qt(c[D], S[D])) {
            S = !1;
            break e;
          }
          S = !0;
        }
        if (S) return m[0];
      }
    }
    return i = i(), Me.memoizedState = [i, c], i;
  }
  function dt(i, c, m) {
    if (25 <= st) throw Error(t(301));
    if (i === gt) if (or = !0, i = { action: m, next: null }, pe === null && (pe = /* @__PURE__ */ new Map()), m = pe.get(c), m === void 0) pe.set(c, i);
    else {
      for (c = m; c.next !== null; ) c = c.next;
      c.next = i;
    }
  }
  function dr() {
    throw Error(t(394));
  }
  function jt() {
  }
  var Ft = { readContext: function(i) {
    return i._currentValue2;
  }, useContext: function(i) {
    return Ot(), i._currentValue2;
  }, useMemo: rt, useReducer: kr, useRef: function(i) {
    gt = Ot(), Me = Nt();
    var c = Me.memoizedState;
    return c === null ? (i = { current: i }, Me.memoizedState = i) : c;
  }, useState: function(i) {
    return kr(lr, i);
  }, useInsertionEffect: jt, useLayoutEffect: function() {
  }, useCallback: function(i, c) {
    return rt(function() {
      return i;
    }, c);
  }, useImperativeHandle: jt, useEffect: jt, useDebugValue: jt, useDeferredValue: function(i) {
    return Ot(), i;
  }, useTransition: function() {
    return Ot(), [
      !1,
      dr
    ];
  }, useId: function() {
    var i = kt.treeContext, c = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - mt(i) - 1)).toString(32) + c;
    var m = At;
    if (m === null) throw Error(t(404));
    return c = Vt++, i = ":" + m.idPrefix + "R" + i, 0 < c && (i += "H" + c.toString(32)), i + ":";
  }, useMutableSource: function(i, c) {
    return Ot(), c(i._source);
  }, useSyncExternalStore: function(i, c, m) {
    if (m === void 0) throw Error(t(407));
    return m();
  } }, At = null, Qe = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function fr(i) {
    return console.error(i), null;
  }
  function It() {
  }
  function pr(i, c, m, S, D, O, W, J, he) {
    var ye = [], _e = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: S, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: _e, pingedTasks: ye, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: D === void 0 ? fr : D, onAllReady: It, onShellReady: W === void 0 ? It : W, onShellError: It, onFatalError: It }, m = zt(c, 0, null, m, !1, !1), m.parentFlushed = !0, i = Gt(c, i, null, m, _e, ce, null, Ht), ye.push(i), c;
  }
  function Gt(i, c, m, S, D, O, W, J) {
    i.allPendingTasks++, m === null ? i.pendingRootTasks++ : m.pendingTasks++;
    var he = { node: c, ping: function() {
      var ye = i.pingedTasks;
      ye.push(he), ye.length === 1 && Rr(i);
    }, blockedBoundary: m, blockedSegment: S, abortSet: D, legacyContext: O, context: W, treeContext: J };
    return D.add(he), he;
  }
  function zt(i, c, m, S, D, O) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: S, boundary: m, lastPushedText: D, textEmbedded: O };
  }
  function b(i, c) {
    if (i = i.onError(c), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function y(i, c) {
    var m = i.onShellError;
    m(c), m = i.onFatalError, m(c), i.destination !== null ? (i.status = 2, i.destination.destroy(c)) : (i.status = 1, i.fatalError = c);
  }
  function E(i, c, m, S, D) {
    for (gt = {}, kt = c, Vt = 0, i = m(S, D); or; ) or = !1, Vt = 0, st += 1, Me = null, i = m(S, D);
    return Yt(), i;
  }
  function X(i, c, m, S) {
    var D = m.render(), O = S.childContextTypes;
    if (O != null) {
      var W = c.legacyContext;
      if (typeof m.getChildContext != "function") S = W;
      else {
        m = m.getChildContext();
        for (var J in m) if (!(J in O)) throw Error(t(108, He(S) || "Unknown", J));
        S = se({}, W, m);
      }
      c.legacyContext = S, we(i, c, D), c.legacyContext = W;
    } else we(i, c, D);
  }
  function be(i, c) {
    if (i && i.defaultProps) {
      c = se({}, c), i = i.defaultProps;
      for (var m in i) c[m] === void 0 && (c[m] = i[m]);
      return c;
    }
    return c;
  }
  function ve(i, c, m, S, D) {
    if (typeof m == "function") if (m.prototype && m.prototype.isReactComponent) {
      D = ot(m, c.legacyContext);
      var O = m.contextType;
      O = new m(S, typeof O == "object" && O !== null ? O._currentValue2 : D), ir(O, m, S, D), X(i, c, O, m);
    } else {
      O = ot(m, c.legacyContext), D = E(i, c, m, S, O);
      var W = Vt !== 0;
      if (typeof D == "object" && D !== null && typeof D.render == "function" && D.$$typeof === void 0) ir(D, m, S, O), X(i, c, D, m);
      else if (W) {
        S = c.treeContext, c.treeContext = Wt(S, 1, 0);
        try {
          we(i, c, D);
        } finally {
          c.treeContext = S;
        }
      } else we(i, c, D);
    }
    else if (typeof m == "string") {
      switch (D = c.blockedSegment, O = Re(D.chunks, m, S, i.responseState, D.formatContext), D.lastPushedText = !1, W = D.formatContext, D.formatContext = V(W, m, S), Ie(i, c, O), D.formatContext = W, m) {
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
        case v:
        case F:
          we(i, c, S.children);
          return;
        case te:
          we(i, c, S.children);
          return;
        case ue:
          throw Error(t(343));
        case Q:
          e: {
            m = c.blockedBoundary, D = c.blockedSegment, O = S.fallback, S = S.children, W = /* @__PURE__ */ new Set();
            var J = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: W, errorDigest: null }, he = zt(i, D.chunks.length, J, D.formatContext, !1, !1);
            D.children.push(he), D.lastPushedText = !1;
            var ye = zt(i, 0, null, D.formatContext, !1, !1);
            ye.parentFlushed = !0, c.blockedBoundary = J, c.blockedSegment = ye;
            try {
              if (Ie(
                i,
                c,
                S
              ), i.responseState.generateStaticMarkup || ye.lastPushedText && ye.textEmbedded && ye.chunks.push("<!-- -->"), ye.status = 1, We(J, ye), J.pendingTasks === 0) break e;
            } catch (_e) {
              ye.status = 4, J.forceClientRender = !0, J.errorDigest = b(i, _e);
            } finally {
              c.blockedBoundary = m, c.blockedSegment = D;
            }
            c = Gt(i, O, m, he, W, c.legacyContext, c.context, c.treeContext), i.pingedTasks.push(c);
          }
          return;
      }
      if (typeof m == "object" && m !== null) switch (m.$$typeof) {
        case ie:
          if (S = E(i, c, m.render, S, D), Vt !== 0) {
            m = c.treeContext, c.treeContext = Wt(m, 1, 0);
            try {
              we(i, c, S);
            } finally {
              c.treeContext = m;
            }
          } else we(i, c, S);
          return;
        case G:
          m = m.type, S = be(m, S), ve(i, c, m, S, D);
          return;
        case ee:
          if (D = S.children, m = m._context, S = S.value, O = m._currentValue2, m._currentValue2 = S, W = qe, qe = S = { parent: W, depth: W === null ? 0 : W.depth + 1, context: m, parentValue: O, value: S }, c.context = S, we(i, c, D), i = qe, i === null) throw Error(t(403));
          S = i.parentValue, i.context._currentValue2 = S === re ? i.context._defaultValue : S, i = qe = i.parent, c.context = i;
          return;
        case A:
          S = S.children, S = S(m._currentValue2), we(i, c, S);
          return;
        case ne:
          D = m._init, m = D(m._payload), S = be(m, S), ve(
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
        case H:
          ve(i, c, m.type, m.props, m.ref);
          return;
        case R:
          throw Error(t(257));
        case ne:
          var S = m._init;
          m = S(m._payload), we(i, c, m);
          return;
      }
      if (U(m)) {
        ze(i, c, m);
        return;
      }
      if (m === null || typeof m != "object" ? S = null : (S = le && m[le] || m["@@iterator"], S = typeof S == "function" ? S : null), S && (S = S.call(m))) {
        if (m = S.next(), !m.done) {
          var D = [];
          do
            D.push(m.value), m = S.next();
          while (!m.done);
          ze(i, c, D);
        }
        return;
      }
      throw i = Object.prototype.toString.call(m), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : i));
    }
    typeof m == "string" ? (S = c.blockedSegment, S.lastPushedText = tt(c.blockedSegment.chunks, m, i.responseState, S.lastPushedText)) : typeof m == "number" && (S = c.blockedSegment, S.lastPushedText = tt(c.blockedSegment.chunks, "" + m, i.responseState, S.lastPushedText));
  }
  function ze(i, c, m) {
    for (var S = m.length, D = 0; D < S; D++) {
      var O = c.treeContext;
      c.treeContext = Wt(O, S, D);
      try {
        Ie(i, c, m[D]);
      } finally {
        c.treeContext = O;
      }
    }
  }
  function Ie(i, c, m) {
    var S = c.blockedSegment.formatContext, D = c.legacyContext, O = c.context;
    try {
      return we(i, c, m);
    } catch (he) {
      if (Yt(), typeof he == "object" && he !== null && typeof he.then == "function") {
        m = he;
        var W = c.blockedSegment, J = zt(i, W.chunks.length, null, W.formatContext, W.lastPushedText, !0);
        W.children.push(J), W.lastPushedText = !1, i = Gt(i, c.node, c.blockedBoundary, J, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, m.then(i, i), c.blockedSegment.formatContext = S, c.legacyContext = D, c.context = O, Le(O);
      } else throw c.blockedSegment.formatContext = S, c.legacyContext = D, c.context = O, Le(O), he;
    }
  }
  function lt(i) {
    var c = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Pt(this, c, i);
  }
  function Ze(i, c, m) {
    var S = i.blockedBoundary;
    i.blockedSegment.status = 3, S === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.push(null))) : (S.pendingTasks--, S.forceClientRender || (S.forceClientRender = !0, i = m === void 0 ? Error(t(432)) : m, S.errorDigest = c.onError(i), S.parentFlushed && c.clientRenderedBoundaries.push(S)), S.fallbackAbortableTasks.forEach(function(D) {
      return Ze(D, c, m);
    }), S.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (S = c.onAllReady, S()));
  }
  function We(i, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var m = c.children[0];
      m.id = c.id, m.parentFlushed = !0, m.status === 1 && We(i, m);
    } else i.completedSegments.push(c);
  }
  function Pt(i, c, m) {
    if (c === null) {
      if (m.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = m;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = It, c = i.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (m.parentFlushed && m.status === 1 && We(c, m), c.parentFlushed && i.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(lt, i), c.fallbackAbortableTasks.clear()) : m.parentFlushed && m.status === 1 && (We(c, m), c.completedSegments.length === 1 && c.parentFlushed && i.partialBoundaries.push(c)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Rr(i) {
    if (i.status !== 2) {
      var c = qe, m = Qe.current;
      Qe.current = Ft;
      var S = At;
      At = i.responseState;
      try {
        var D = i.pingedTasks, O;
        for (O = 0; O < D.length; O++) {
          var W = D[O], J = i, he = W.blockedSegment;
          if (he.status === 0) {
            Le(W.context);
            try {
              we(J, W, W.node), J.responseState.generateStaticMarkup || he.lastPushedText && he.textEmbedded && he.chunks.push("<!-- -->"), W.abortSet.delete(W), he.status = 1, Pt(J, W.blockedBoundary, he);
            } catch (Dt) {
              if (Yt(), typeof Dt == "object" && Dt !== null && typeof Dt.then == "function") {
                var ye = W.ping;
                Dt.then(ye, ye);
              } else {
                W.abortSet.delete(W), he.status = 4;
                var _e = W.blockedBoundary, nt = Dt, Xt = b(J, nt);
                if (_e === null ? y(J, nt) : (_e.pendingTasks--, _e.forceClientRender || (_e.forceClientRender = !0, _e.errorDigest = Xt, _e.parentFlushed && J.clientRenderedBoundaries.push(_e))), J.allPendingTasks--, J.allPendingTasks === 0) {
                  var Zt = J.onAllReady;
                  Zt();
                }
              }
            } finally {
            }
          }
        }
        D.splice(0, O), i.destination !== null && zr(i, i.destination);
      } catch (Dt) {
        b(i, Dt), y(i, Dt);
      } finally {
        At = S, Qe.current = m, m === Ft && Le(c);
      }
    }
  }
  function Or(i, c, m) {
    switch (m.parentFlushed = !0, m.status) {
      case 0:
        var S = m.id = i.nextSegmentId++;
        return m.lastPushedText = !1, m.textEmbedded = !1, i = i.responseState, c.push('<template id="'), c.push(i.placeholderPrefix), i = S.toString(16), c.push(i), c.push('"></template>');
      case 1:
        m.status = 2;
        var D = !0;
        S = m.chunks;
        var O = 0;
        m = m.children;
        for (var W = 0; W < m.length; W++) {
          for (D = m[W]; O < D.index; O++) c.push(S[O]);
          D = Nr(i, c, D);
        }
        for (; O < S.length - 1; O++) c.push(S[O]);
        return O < S.length && (D = c.push(S[O])), D;
      default:
        throw Error(t(390));
    }
  }
  function Nr(i, c, m) {
    var S = m.boundary;
    if (S === null) return Or(i, c, m);
    if (S.parentFlushed = !0, S.forceClientRender) return i.responseState.generateStaticMarkup || (S = S.errorDigest, c.push("<!--$!-->"), c.push("<template"), S && (c.push(' data-dgst="'), S = T(S), c.push(S), c.push('"')), c.push("></template>")), Or(i, c, m), i = i.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), i;
    if (0 < S.pendingTasks) {
      S.rootSegmentID = i.nextSegmentId++, 0 < S.completedSegments.length && i.partialBoundaries.push(S);
      var D = i.responseState, O = D.nextSuspenseID++;
      return D = D.boundaryPrefix + O.toString(16), S = S.id = D, Ne(c, i.responseState, S), Or(i, c, m), c.push("<!--/$-->");
    }
    if (S.byteSize > i.progressiveChunkSize) return S.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(S), Ne(c, i.responseState, S.id), Or(i, c, m), c.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || c.push("<!--$-->"), m = S.completedSegments, m.length !== 1) throw Error(t(391));
    return Nr(i, c, m[0]), i = i.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), i;
  }
  function Kr(i, c, m) {
    return Ce(c, i.responseState, m.formatContext, m.id), Nr(i, c, m), ut(c, m.formatContext);
  }
  function Jr(i, c, m) {
    for (var S = m.completedSegments, D = 0; D < S.length; D++) Qr(i, c, m, S[D]);
    if (S.length = 0, i = i.responseState, S = m.id, m = m.rootSegmentID, c.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? c.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, c.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), S === null) throw Error(t(395));
    return m = m.toString(16), c.push(S), c.push('","'), c.push(i.segmentPrefix), c.push(m), c.push('")<\/script>');
  }
  function Qr(i, c, m, S) {
    if (S.status === 2) return !0;
    var D = S.id;
    if (D === -1) {
      if ((S.id = m.rootSegmentID) === -1) throw Error(t(392));
      return Kr(i, c, S);
    }
    return Kr(i, c, S), i = i.responseState, c.push(i.startInlineScript), i.sentCompleteSegmentFunction ? c.push('$RS("') : (i.sentCompleteSegmentFunction = !0, c.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), c.push(i.segmentPrefix), D = D.toString(16), c.push(D), c.push('","'), c.push(i.placeholderPrefix), c.push(D), c.push('")<\/script>');
  }
  function zr(i, c) {
    try {
      var m = i.completedRootSegment;
      if (m !== null && i.pendingRootTasks === 0) {
        Nr(i, c, m), i.completedRootSegment = null;
        var S = i.responseState.bootstrapChunks;
        for (m = 0; m < S.length - 1; m++) c.push(S[m]);
        m < S.length && c.push(S[m]);
      }
      var D = i.clientRenderedBoundaries, O;
      for (O = 0; O < D.length; O++) {
        var W = D[O];
        S = c;
        var J = i.responseState, he = W.id, ye = W.errorDigest, _e = W.errorMessage, nt = W.errorComponentStack;
        if (S.push(J.startInlineScript), J.sentClientRenderFunction ? S.push('$RX("') : (J.sentClientRenderFunction = !0, S.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), he === null) throw Error(t(395));
        if (S.push(he), S.push('"'), ye || _e || nt) {
          S.push(",");
          var Xt = Oe(ye || "");
          S.push(Xt);
        }
        if (_e || nt) {
          S.push(",");
          var Zt = Oe(_e || "");
          S.push(Zt);
        }
        if (nt) {
          S.push(",");
          var Dt = Oe(nt);
          S.push(Dt);
        }
        if (!S.push(")<\/script>")) {
          i.destination = null, O++, D.splice(0, O);
          return;
        }
      }
      D.splice(0, O);
      var Ir = i.completedBoundaries;
      for (O = 0; O < Ir.length; O++) if (!Jr(i, c, Ir[O])) {
        i.destination = null, O++, Ir.splice(0, O);
        return;
      }
      Ir.splice(0, O);
      var hr = i.partialBoundaries;
      for (O = 0; O < hr.length; O++) {
        var tn = hr[O];
        e: {
          D = i, W = c;
          var Pr = tn.completedSegments;
          for (J = 0; J < Pr.length; J++) if (!Qr(D, W, tn, Pr[J])) {
            J++, Pr.splice(0, J);
            var Dn = !1;
            break e;
          }
          Pr.splice(0, J), Dn = !0;
        }
        if (!Dn) {
          i.destination = null, O++, hr.splice(0, O);
          return;
        }
      }
      hr.splice(0, O);
      var Sr = i.completedBoundaries;
      for (O = 0; O < Sr.length; O++) if (!Jr(i, c, Sr[O])) {
        i.destination = null, O++, Sr.splice(0, O);
        return;
      }
      Sr.splice(0, O);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && c.push(null);
    }
  }
  function In(i, c) {
    try {
      var m = i.abortableTasks;
      m.forEach(function(S) {
        return Ze(S, i, c);
      }), m.clear(), i.destination !== null && zr(i, i.destination);
    } catch (S) {
      b(i, S), y(i, S);
    }
  }
  function Pn() {
  }
  function en(i, c, m, S) {
    var D = !1, O = null, W = "", J = { push: function(ye) {
      return ye !== null && (W += ye), !0;
    }, destroy: function(ye) {
      D = !0, O = ye;
    } }, he = !1;
    if (i = pr(i, Be(m, c ? c.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Pn, void 0, function() {
      he = !0;
    }), Rr(i), In(i, S), i.status === 1) i.status = 2, J.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = J;
      try {
        zr(i, J);
      } catch (ye) {
        b(i, ye), y(i, ye);
      }
    }
    if (D) throw O;
    if (!he) throw Error(t(426));
    return W;
  }
  return Lr.renderToNodeStream = function() {
    throw Error(t(207));
  }, Lr.renderToStaticMarkup = function(i, c) {
    return en(i, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Lr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Lr.renderToString = function(i, c) {
    return en(i, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Lr.version = "18.3.1", Lr;
}
var Xn = {}, _o;
function Iu() {
  if (_o) return Xn;
  _o = 1;
  var e = pt;
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
  var x = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, T = {};
  function k(o) {
    return x.call(T, o) ? !0 : x.call(z, o) ? !1 : L.test(o) ? T[o] = !0 : (z[o] = !0, !1);
  }
  function I(o, u, p, w, P, N, B) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = w, this.attributeNamespace = P, this.mustUseProperty = p, this.propertyName = o, this.type = u, this.sanitizeURL = N, this.removeEmptyString = B;
  }
  var U = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    U[o] = new I(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var u = o[0];
    U[u] = new I(u, 1, !1, o[1], null, !1, !1);
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
    var u = o.replace(
      $,
      V
    );
    U[u] = new I(u, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var u = o.replace($, V);
    U[u] = new I(u, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var u = o.replace($, V);
    U[u] = new I(u, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
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
    C.forEach(function(u) {
      u = u + o.charAt(0).toUpperCase() + o.substring(1), q[u] = q[o];
    });
  });
  var ae = /["'&<>]/;
  function ke(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var u = ae.exec(o);
    if (u) {
      var p = "", w, P = 0;
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
        P !== w && (p += o.substring(P, w)), P = w + 1, p += u;
      }
      o = P !== w ? p + o.substring(P, w) : p;
    }
    return o;
  }
  var Pe = /([A-Z])/g, je = /^ms-/, Ge = Array.isArray, de = f("<script>"), fe = f("<\/script>"), Re = f('<script src="'), Ne = f('<script type="module" src="'), Ce = f('" async=""><\/script>'), ut = /(<\/|<)(s)(cript)/gi;
  function Fe(o, u, p, w) {
    return "" + u + (p === "s" ? "\\u0073" : "\\u0053") + w;
  }
  function Oe(o, u, p, w, P) {
    o = o === void 0 ? "" : o, u = u === void 0 ? de : f('<script nonce="' + ke(u) + '">');
    var N = [];
    if (p !== void 0 && N.push(u, h(("" + p).replace(ut, Fe)), fe), w !== void 0) for (p = 0; p < w.length; p++) N.push(Re, h(ke(w[p])), Ce);
    if (P !== void 0) for (w = 0; w < P.length; w++) N.push(Ne, h(ke(P[w])), Ce);
    return { bootstrapChunks: N, startInlineScript: u, placeholderPrefix: f(o + "P:"), segmentPrefix: f(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Be(o, u) {
    return { insertionMode: o, selectedValue: u };
  }
  function tt(o) {
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
  var H = f("<!-- -->");
  function R(o, u, p, w) {
    return u === "" ? w : (w && o.push(H), o.push(h(ke(u))), !0);
  }
  var F = /* @__PURE__ */ new Map(), j = f(' style="'), v = f(":"), ee = f(";");
  function A(o, u, p) {
    if (typeof p != "object") throw Error(t(62));
    u = !0;
    for (var w in p) if (x.call(p, w)) {
      var P = p[w];
      if (P != null && typeof P != "boolean" && P !== "") {
        if (w.indexOf("--") === 0) {
          var N = h(ke(w));
          P = h(ke(("" + P).trim()));
        } else {
          N = w;
          var B = F.get(N);
          B !== void 0 || (B = f(ke(N.replace(Pe, "-$1").toLowerCase().replace(je, "-ms-"))), F.set(N, B)), N = B, P = typeof P == "number" ? P === 0 || x.call(q, w) ? h("" + P) : h(P + "px") : h(ke(("" + P).trim()));
        }
        u ? (u = !1, o.push(j, N, v, P)) : o.push(ee, N, v, P);
      }
    }
    u || o.push(te);
  }
  var ie = f(" "), Q = f('="'), te = f('"'), G = f('=""');
  function ne(o, u, p, w) {
    switch (p) {
      case "style":
        A(o, u, w);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
      if (u = U.hasOwnProperty(p) ? U[p] : null, u !== null) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (p = h(u.attributeName), u.type) {
          case 3:
            w && o.push(ie, p, G);
            break;
          case 4:
            w === !0 ? o.push(ie, p, G) : w !== !1 && o.push(ie, p, Q, h(ke(w)), te);
            break;
          case 5:
            isNaN(w) || o.push(ie, p, Q, h(ke(w)), te);
            break;
          case 6:
            !isNaN(w) && 1 <= w && o.push(ie, p, Q, h(ke(w)), te);
            break;
          default:
            u.sanitizeURL && (w = "" + w), o.push(ie, p, Q, h(ke(w)), te);
        }
      } else if (k(p)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = p.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        o.push(ie, h(p), Q, h(ke(w)), te);
      }
    }
  }
  var ue = f(">"), K = f("/>");
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
  function He(o, u, p, w) {
    o.push(Se(p));
    var P = p = null, N;
    for (N in u) if (x.call(u, N)) {
      var B = u[N];
      if (B != null) switch (N) {
        case "children":
          p = B;
          break;
        case "dangerouslySetInnerHTML":
          P = B;
          break;
        default:
          ne(o, w, N, B);
      }
    }
    return o.push(ue), ge(o, P, p), typeof p == "string" ? (o.push(h(ke(p))), null) : p;
  }
  var ce = f(`
`), ot = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, qe = /* @__PURE__ */ new Map();
  function Se(o) {
    var u = qe.get(o);
    if (u === void 0) {
      if (!ot.test(o)) throw Error(t(65, o));
      u = f("<" + o), qe.set(o, u);
    }
    return u;
  }
  var Y = f("<!DOCTYPE html>");
  function oe(o, u, p, w, P) {
    switch (u) {
      case "select":
        o.push(Se("select"));
        var N = null, B = null;
        for (xe in p) if (x.call(p, xe)) {
          var Z = p[xe];
          if (Z != null) switch (xe) {
            case "children":
              N = Z;
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
        return o.push(ue), ge(o, B, N), N;
      case "option":
        B = P.selectedValue, o.push(Se("option"));
        var me = Z = null, Te = null, xe = null;
        for (N in p) if (x.call(p, N)) {
          var et = p[N];
          if (et != null) switch (N) {
            case "children":
              Z = et;
              break;
            case "selected":
              Te = et;
              break;
            case "dangerouslySetInnerHTML":
              xe = et;
              break;
            case "value":
              me = et;
            default:
              ne(o, w, N, et);
          }
        }
        if (B != null) if (p = me !== null ? "" + me : re(Z), Ge(B)) {
          for (w = 0; w < B.length; w++)
            if ("" + B[w] === p) {
              o.push(le);
              break;
            }
        } else "" + B === p && o.push(le);
        else Te && o.push(le);
        return o.push(ue), ge(o, xe, Z), Z;
      case "textarea":
        o.push(Se("textarea")), xe = B = N = null;
        for (Z in p) if (x.call(p, Z) && (me = p[Z], me != null)) switch (Z) {
          case "children":
            xe = me;
            break;
          case "value":
            N = me;
            break;
          case "defaultValue":
            B = me;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(o, w, Z, me);
        }
        if (N === null && B !== null && (N = B), o.push(ue), xe != null) {
          if (N != null) throw Error(t(92));
          if (Ge(xe) && 1 < xe.length) throw Error(t(93));
          N = "" + xe;
        }
        return typeof N == "string" && N[0] === `
` && o.push(ce), N !== null && o.push(h(ke("" + N))), null;
      case "input":
        o.push(Se("input")), me = xe = Z = N = null;
        for (B in p) if (x.call(p, B) && (Te = p[B], Te != null)) switch (B) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            me = Te;
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
            ne(o, w, B, Te);
        }
        return xe !== null ? ne(
          o,
          w,
          "checked",
          xe
        ) : me !== null && ne(o, w, "checked", me), N !== null ? ne(o, w, "value", N) : Z !== null && ne(o, w, "value", Z), o.push(K), null;
      case "menuitem":
        o.push(Se("menuitem"));
        for (var Mt in p) if (x.call(p, Mt) && (N = p[Mt], N != null)) switch (Mt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(o, w, Mt, N);
        }
        return o.push(ue), null;
      case "title":
        o.push(Se("title")), N = null;
        for (et in p) if (x.call(p, et) && (B = p[et], B != null)) switch (et) {
          case "children":
            N = B;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(o, w, et, B);
        }
        return o.push(ue), N;
      case "listing":
      case "pre":
        o.push(Se(u)), B = N = null;
        for (me in p) if (x.call(p, me) && (Z = p[me], Z != null)) switch (me) {
          case "children":
            N = Z;
            break;
          case "dangerouslySetInnerHTML":
            B = Z;
            break;
          default:
            ne(o, w, me, Z);
        }
        if (o.push(ue), B != null) {
          if (N != null) throw Error(t(60));
          if (typeof B != "object" || !("__html" in B)) throw Error(t(61));
          p = B.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
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
        o.push(Se(u));
        for (var Kt in p) if (x.call(p, Kt) && (N = p[Kt], N != null)) switch (Kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ne(o, w, Kt, N);
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
        return He(o, p, u, w);
      case "html":
        return P.insertionMode === 0 && o.push(Y), He(o, p, u, w);
      default:
        if (u.indexOf("-") === -1 && typeof p.is != "string") return He(o, p, u, w);
        o.push(Se(u)), B = N = null;
        for (Te in p) if (x.call(p, Te) && (Z = p[Te], Z != null)) switch (Te) {
          case "children":
            N = Z;
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
            k(Te) && typeof Z != "function" && typeof Z != "symbol" && o.push(ie, h(Te), Q, h(ke(Z)), te);
        }
        return o.push(ue), ge(o, B, N), N;
    }
  }
  var Xe = f("</"), De = f(">"), Le = f('<template id="'), ar = f('"></template>'), ir = f("<!--$-->"), Ht = f('<!--$?--><template id="'), Wt = f('"></template>'), mt = f("<!--$!-->"), Rt = f("<!--/$-->"), Je = f("<template"), ht = f('"'), Bt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var qt = f("></template>");
  function gt(o, u, p) {
    if (a(o, Ht), p === null) throw Error(t(395));
    return a(o, p), s(o, Wt);
  }
  var kt = f('<div hidden id="'), bt = f('">'), Me = f("</div>"), ct = f('<svg aria-hidden="true" style="display:none" id="'), or = f('">'), Vt = f("</svg>"), pe = f('<math aria-hidden="true" style="display:none" id="'), st = f('">'), Ot = f("</math>"), sr = f('<table hidden id="'), Nt = f('">'), Yt = f("</table>"), lr = f('<table hidden><tbody id="'), kr = f('">'), rt = f("</tbody></table>"), dt = f('<table hidden><tr id="'), dr = f('">'), jt = f("</tr></table>"), Ft = f('<table hidden><colgroup id="'), At = f('">'), Qe = f("</colgroup></table>");
  function fr(o, u, p, w) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return a(o, kt), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, bt);
      case 2:
        return a(o, ct), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, or);
      case 3:
        return a(o, pe), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, st);
      case 4:
        return a(o, sr), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, Nt);
      case 5:
        return a(o, lr), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, kr);
      case 6:
        return a(o, dt), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, dr);
      case 7:
        return a(
          o,
          Ft
        ), a(o, u.segmentPrefix), a(o, h(w.toString(16))), s(o, At);
      default:
        throw Error(t(397));
    }
  }
  function It(o, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return s(o, Me);
      case 2:
        return s(o, Vt);
      case 3:
        return s(o, Ot);
      case 4:
        return s(o, Yt);
      case 5:
        return s(o, rt);
      case 6:
        return s(o, jt);
      case 7:
        return s(o, Qe);
      default:
        throw Error(t(397));
    }
  }
  var pr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Gt = f('$RS("'), zt = f('","'), b = f('")<\/script>'), y = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), E = f('$RC("'), X = f('","'), be = f('")<\/script>'), ve = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = f('$RX("'), ze = f('"'), Ie = f(")<\/script>"), lt = f(","), Ze = /[<\u2028\u2029]/g;
  function We(o) {
    return JSON.stringify(o).replace(Ze, function(u) {
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
  var Pt = Object.assign, Rr = Symbol.for("react.element"), Or = Symbol.for("react.portal"), Nr = Symbol.for("react.fragment"), Kr = Symbol.for("react.strict_mode"), Jr = Symbol.for("react.profiler"), Qr = Symbol.for("react.provider"), zr = Symbol.for("react.context"), In = Symbol.for("react.forward_ref"), Pn = Symbol.for("react.suspense"), en = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), m = Symbol.for("react.scope"), S = Symbol.for("react.debug_trace_mode"), D = Symbol.for("react.legacy_hidden"), O = Symbol.for("react.default_value"), W = Symbol.iterator;
  function J(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case Nr:
        return "Fragment";
      case Or:
        return "Portal";
      case Jr:
        return "Profiler";
      case Kr:
        return "StrictMode";
      case Pn:
        return "Suspense";
      case en:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case zr:
        return (o.displayName || "Context") + ".Consumer";
      case Qr:
        return (o._context.displayName || "Context") + ".Provider";
      case In:
        var u = o.render;
        return o = o.displayName, o || (o = u.displayName || u.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case i:
        return u = o.displayName || null, u !== null ? u : J(o.type) || "Memo";
      case c:
        u = o._payload, o = o._init;
        try {
          return J(o(u));
        } catch {
        }
    }
    return null;
  }
  var he = {};
  function ye(o, u) {
    if (o = o.contextTypes, !o) return he;
    var p = {}, w;
    for (w in o) p[w] = u[w];
    return p;
  }
  var _e = null;
  function nt(o, u) {
    if (o !== u) {
      o.context._currentValue = o.parentValue, o = o.parent;
      var p = u.parent;
      if (o === null) {
        if (p !== null) throw Error(t(401));
      } else {
        if (p === null) throw Error(t(401));
        nt(o, p);
      }
      u.context._currentValue = u.value;
    }
  }
  function Xt(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && Xt(o);
  }
  function Zt(o) {
    var u = o.parent;
    u !== null && Zt(u), o.context._currentValue = o.value;
  }
  function Dt(o, u) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === u.depth ? nt(o, u) : Dt(o, u);
  }
  function Ir(o, u) {
    var p = u.parent;
    if (p === null) throw Error(t(402));
    o.depth === p.depth ? nt(o, p) : Ir(o, p), u.context._currentValue = u.value;
  }
  function hr(o) {
    var u = _e;
    u !== o && (u === null ? Zt(o) : o === null ? Xt(u) : u.depth === o.depth ? nt(u, o) : u.depth > o.depth ? Dt(u, o) : Ir(u, o), _e = o);
  }
  var tn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, u) {
    o = o._reactInternals, o.queue !== null && o.queue.push(u);
  }, enqueueReplaceState: function(o, u) {
    o = o._reactInternals, o.replace = !0, o.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Pr(o, u, p, w) {
    var P = o.state !== void 0 ? o.state : null;
    o.updater = tn, o.props = p, o.state = P;
    var N = { queue: [], replace: !1 };
    o._reactInternals = N;
    var B = u.contextType;
    if (o.context = typeof B == "object" && B !== null ? B._currentValue : w, B = u.getDerivedStateFromProps, typeof B == "function" && (B = B(p, P), P = B == null ? P : Pt({}, P, B), o.state = P), typeof u.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (u = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), u !== o.state && tn.enqueueReplaceState(o, o.state, null), N.queue !== null && 0 < N.queue.length) if (u = N.queue, B = N.replace, N.queue = null, N.replace = !1, B && u.length === 1) o.state = u[0];
    else {
      for (N = B ? u[0] : o.state, P = !0, B = B ? 1 : 0; B < u.length; B++) {
        var Z = u[B];
        Z = typeof Z == "function" ? Z.call(o, N, p, w) : Z, Z != null && (P ? (P = !1, N = Pt({}, N, Z)) : Pt(N, Z));
      }
      o.state = N;
    }
    else N.queue = null;
  }
  var Dn = { id: 1, overflow: "" };
  function Sr(o, u, p) {
    var w = o.id;
    o = o.overflow;
    var P = 32 - Ln(w) - 1;
    w &= ~(1 << P), p += 1;
    var N = 32 - Ln(u) + P;
    if (30 < N) {
      var B = P - P % 5;
      return N = (w & (1 << B) - 1).toString(32), w >>= B, P -= B, { id: 1 << 32 - Ln(u) + P | p << P | w, overflow: N + o };
    }
    return { id: 1 << N | p << P | w, overflow: o };
  }
  var Ln = Math.clz32 ? Math.clz32 : Ml, Dl = Math.log, Ll = Math.LN2;
  function Ml(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Dl(o) / Ll | 0) | 0;
  }
  function jl(o, u) {
    return o === u && (o !== 0 || 1 / o === 1 / u) || o !== o && u !== u;
  }
  var Fl = typeof Object.is == "function" ? Object.is : jl, mr = null, xa = null, Mn = null, Ke = null, rn = !1, jn = !1, nn = 0, _r = null, Fn = 0;
  function Dr() {
    if (mr === null) throw Error(t(321));
    return mr;
  }
  function Fi() {
    if (0 < Fn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ta() {
    return Ke === null ? Mn === null ? (rn = !1, Mn = Ke = Fi()) : (rn = !0, Ke = Mn) : Ke.next === null ? (rn = !1, Ke = Ke.next = Fi()) : (rn = !0, Ke = Ke.next), Ke;
  }
  function Ca() {
    xa = mr = null, jn = !1, Mn = null, Fn = 0, Ke = _r = null;
  }
  function zi(o, u) {
    return typeof u == "function" ? u(o) : u;
  }
  function Ui(o, u, p) {
    if (mr = Dr(), Ke = Ta(), rn) {
      var w = Ke.queue;
      if (u = w.dispatch, _r !== null && (p = _r.get(w), p !== void 0)) {
        _r.delete(w), w = Ke.memoizedState;
        do
          w = o(w, p.action), p = p.next;
        while (p !== null);
        return Ke.memoizedState = w, [w, u];
      }
      return [Ke.memoizedState, u];
    }
    return o = o === zi ? typeof u == "function" ? u() : u : p !== void 0 ? p(u) : u, Ke.memoizedState = o, o = Ke.queue = { last: null, dispatch: null }, o = o.dispatch = zl.bind(null, mr, o), [Ke.memoizedState, o];
  }
  function $i(o, u) {
    if (mr = Dr(), Ke = Ta(), u = u === void 0 ? null : u, Ke !== null) {
      var p = Ke.memoizedState;
      if (p !== null && u !== null) {
        var w = p[1];
        e: if (w === null) w = !1;
        else {
          for (var P = 0; P < w.length && P < u.length; P++) if (!Fl(u[P], w[P])) {
            w = !1;
            break e;
          }
          w = !0;
        }
        if (w) return p[0];
      }
    }
    return o = o(), Ke.memoizedState = [o, u], o;
  }
  function zl(o, u, p) {
    if (25 <= Fn) throw Error(t(301));
    if (o === mr) if (jn = !0, o = { action: p, next: null }, _r === null && (_r = /* @__PURE__ */ new Map()), p = _r.get(u), p === void 0) _r.set(u, o);
    else {
      for (u = p; u.next !== null; ) u = u.next;
      u.next = o;
    }
  }
  function Ul() {
    throw Error(t(394));
  }
  function zn() {
  }
  var Hi = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return Dr(), o._currentValue;
  }, useMemo: $i, useReducer: Ui, useRef: function(o) {
    mr = Dr(), Ke = Ta();
    var u = Ke.memoizedState;
    return u === null ? (o = { current: o }, Ke.memoizedState = o) : u;
  }, useState: function(o) {
    return Ui(zi, o);
  }, useInsertionEffect: zn, useLayoutEffect: function() {
  }, useCallback: function(o, u) {
    return $i(function() {
      return o;
    }, u);
  }, useImperativeHandle: zn, useEffect: zn, useDebugValue: zn, useDeferredValue: function(o) {
    return Dr(), o;
  }, useTransition: function() {
    return Dr(), [!1, Ul];
  }, useId: function() {
    var o = xa.treeContext, u = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Ln(o) - 1)).toString(32) + u;
    var p = Un;
    if (p === null) throw Error(t(404));
    return u = nn++, o = ":" + p.idPrefix + "R" + o, 0 < u && (o += "H" + u.toString(32)), o + ":";
  }, useMutableSource: function(o, u) {
    return Dr(), u(o._source);
  }, useSyncExternalStore: function(o, u, p) {
    if (p === void 0) throw Error(t(407));
    return p();
  } }, Un = null, Ea = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function $l(o) {
    return console.error(o), null;
  }
  function an() {
  }
  function Hl(o, u, p, w, P, N, B, Z, me) {
    var Te = [], xe = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: Te, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: P === void 0 ? $l : P, onAllReady: N === void 0 ? an : N, onShellReady: B === void 0 ? an : B, onShellError: Z === void 0 ? an : Z, onFatalError: me === void 0 ? an : me }, p = $n(u, 0, null, p, !1, !1), p.parentFlushed = !0, o = Aa(u, o, null, p, xe, he, null, Dn), Te.push(o), u;
  }
  function Aa(o, u, p, w, P, N, B, Z) {
    o.allPendingTasks++, p === null ? o.pendingRootTasks++ : p.pendingTasks++;
    var me = { node: u, ping: function() {
      var Te = o.pingedTasks;
      Te.push(me), Te.length === 1 && Xi(o);
    }, blockedBoundary: p, blockedSegment: w, abortSet: P, legacyContext: N, context: B, treeContext: Z };
    return P.add(me), me;
  }
  function $n(o, u, p, w, P, N) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: p, lastPushedText: P, textEmbedded: N };
  }
  function on(o, u) {
    if (o = o.onError(u), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function Hn(o, u) {
    var p = o.onShellError;
    p(u), p = o.onFatalError, p(u), o.destination !== null ? (o.status = 2, _(o.destination, u)) : (o.status = 1, o.fatalError = u);
  }
  function Wi(o, u, p, w, P) {
    for (mr = {}, xa = u, nn = 0, o = p(w, P); jn; ) jn = !1, nn = 0, Fn += 1, Ke = null, o = p(w, P);
    return Ca(), o;
  }
  function Bi(o, u, p, w) {
    var P = p.render(), N = w.childContextTypes;
    if (N != null) {
      var B = u.legacyContext;
      if (typeof p.getChildContext != "function") w = B;
      else {
        p = p.getChildContext();
        for (var Z in p) if (!(Z in N)) throw Error(t(108, J(w) || "Unknown", Z));
        w = Pt({}, B, p);
      }
      u.legacyContext = w, Lt(o, u, P), u.legacyContext = B;
    } else Lt(o, u, P);
  }
  function qi(o, u) {
    if (o && o.defaultProps) {
      u = Pt({}, u), o = o.defaultProps;
      for (var p in o) u[p] === void 0 && (u[p] = o[p]);
      return u;
    }
    return u;
  }
  function Ra(o, u, p, w, P) {
    if (typeof p == "function") if (p.prototype && p.prototype.isReactComponent) {
      P = ye(p, u.legacyContext);
      var N = p.contextType;
      N = new p(w, typeof N == "object" && N !== null ? N._currentValue : P), Pr(N, p, w, P), Bi(o, u, N, p);
    } else {
      N = ye(p, u.legacyContext), P = Wi(o, u, p, w, N);
      var B = nn !== 0;
      if (typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0) Pr(P, p, w, N), Bi(o, u, P, p);
      else if (B) {
        w = u.treeContext, u.treeContext = Sr(w, 1, 0);
        try {
          Lt(o, u, P);
        } finally {
          u.treeContext = w;
        }
      } else Lt(o, u, P);
    }
    else if (typeof p == "string") {
      switch (P = u.blockedSegment, N = oe(P.chunks, p, w, o.responseState, P.formatContext), P.lastPushedText = !1, B = P.formatContext, P.formatContext = se(B, p, w), Oa(o, u, N), P.formatContext = B, p) {
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
          P.chunks.push(Xe, h(p), De);
      }
      P.lastPushedText = !1;
    } else {
      switch (p) {
        case D:
        case S:
        case Kr:
        case Jr:
        case Nr:
          Lt(o, u, w.children);
          return;
        case en:
          Lt(o, u, w.children);
          return;
        case m:
          throw Error(t(343));
        case Pn:
          e: {
            p = u.blockedBoundary, P = u.blockedSegment, N = w.fallback, w = w.children, B = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: B, errorDigest: null }, me = $n(o, P.chunks.length, Z, P.formatContext, !1, !1);
            P.children.push(me), P.lastPushedText = !1;
            var Te = $n(o, 0, null, P.formatContext, !1, !1);
            Te.parentFlushed = !0, u.blockedBoundary = Z, u.blockedSegment = Te;
            try {
              if (Oa(
                o,
                u,
                w
              ), Te.lastPushedText && Te.textEmbedded && Te.chunks.push(H), Te.status = 1, Wn(Z, Te), Z.pendingTasks === 0) break e;
            } catch (xe) {
              Te.status = 4, Z.forceClientRender = !0, Z.errorDigest = on(o, xe);
            } finally {
              u.blockedBoundary = p, u.blockedSegment = P;
            }
            u = Aa(o, N, p, me, B, u.legacyContext, u.context, u.treeContext), o.pingedTasks.push(u);
          }
          return;
      }
      if (typeof p == "object" && p !== null) switch (p.$$typeof) {
        case In:
          if (w = Wi(o, u, p.render, w, P), nn !== 0) {
            p = u.treeContext, u.treeContext = Sr(p, 1, 0);
            try {
              Lt(o, u, w);
            } finally {
              u.treeContext = p;
            }
          } else Lt(o, u, w);
          return;
        case i:
          p = p.type, w = qi(p, w), Ra(o, u, p, w, P);
          return;
        case Qr:
          if (P = w.children, p = p._context, w = w.value, N = p._currentValue, p._currentValue = w, B = _e, _e = w = { parent: B, depth: B === null ? 0 : B.depth + 1, context: p, parentValue: N, value: w }, u.context = w, Lt(o, u, P), o = _e, o === null) throw Error(t(403));
          w = o.parentValue, o.context._currentValue = w === O ? o.context._defaultValue : w, o = _e = o.parent, u.context = o;
          return;
        case zr:
          w = w.children, w = w(p._currentValue), Lt(o, u, w);
          return;
        case c:
          P = p._init, p = P(p._payload), w = qi(p, w), Ra(o, u, p, w, void 0);
          return;
      }
      throw Error(t(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function Lt(o, u, p) {
    if (u.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Rr:
          Ra(o, u, p.type, p.props, p.ref);
          return;
        case Or:
          throw Error(t(257));
        case c:
          var w = p._init;
          p = w(p._payload), Lt(o, u, p);
          return;
      }
      if (Ge(p)) {
        Vi(o, u, p);
        return;
      }
      if (p === null || typeof p != "object" ? w = null : (w = W && p[W] || p["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(p))) {
        if (p = w.next(), !p.done) {
          var P = [];
          do
            P.push(p.value), p = w.next();
          while (!p.done);
          Vi(o, u, P);
        }
        return;
      }
      throw o = Object.prototype.toString.call(p), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : o));
    }
    typeof p == "string" ? (w = u.blockedSegment, w.lastPushedText = R(u.blockedSegment.chunks, p, o.responseState, w.lastPushedText)) : typeof p == "number" && (w = u.blockedSegment, w.lastPushedText = R(u.blockedSegment.chunks, "" + p, o.responseState, w.lastPushedText));
  }
  function Vi(o, u, p) {
    for (var w = p.length, P = 0; P < w; P++) {
      var N = u.treeContext;
      u.treeContext = Sr(N, w, P);
      try {
        Oa(o, u, p[P]);
      } finally {
        u.treeContext = N;
      }
    }
  }
  function Oa(o, u, p) {
    var w = u.blockedSegment.formatContext, P = u.legacyContext, N = u.context;
    try {
      return Lt(o, u, p);
    } catch (me) {
      if (Ca(), typeof me == "object" && me !== null && typeof me.then == "function") {
        p = me;
        var B = u.blockedSegment, Z = $n(o, B.chunks.length, null, B.formatContext, B.lastPushedText, !0);
        B.children.push(Z), B.lastPushedText = !1, o = Aa(o, u.node, u.blockedBoundary, Z, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, p.then(o, o), u.blockedSegment.formatContext = w, u.legacyContext = P, u.context = N, hr(N);
      } else throw u.blockedSegment.formatContext = w, u.legacyContext = P, u.context = N, hr(N), me;
    }
  }
  function Wl(o) {
    var u = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Gi(this, u, o);
  }
  function Yi(o, u, p) {
    var w = o.blockedBoundary;
    o.blockedSegment.status = 3, w === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.close())) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, o = p === void 0 ? Error(t(432)) : p, w.errorDigest = u.onError(o), w.parentFlushed && u.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(P) {
      return Yi(P, u, p);
    }), w.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (w = u.onAllReady, w()));
  }
  function Wn(o, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var p = u.children[0];
      p.id = u.id, p.parentFlushed = !0, p.status === 1 && Wn(o, p);
    } else o.completedSegments.push(u);
  }
  function Gi(o, u, p) {
    if (u === null) {
      if (p.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = p;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = an, u = o.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && Wn(u, p), u.parentFlushed && o.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Wl, o), u.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (Wn(u, p), u.completedSegments.length === 1 && u.parentFlushed && o.partialBoundaries.push(u)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function Xi(o) {
    if (o.status !== 2) {
      var u = _e, p = Ea.current;
      Ea.current = Hi;
      var w = Un;
      Un = o.responseState;
      try {
        var P = o.pingedTasks, N;
        for (N = 0; N < P.length; N++) {
          var B = P[N], Z = o, me = B.blockedSegment;
          if (me.status === 0) {
            hr(B.context);
            try {
              Lt(Z, B, B.node), me.lastPushedText && me.textEmbedded && me.chunks.push(H), B.abortSet.delete(B), me.status = 1, Gi(Z, B.blockedBoundary, me);
            } catch (Jt) {
              if (Ca(), typeof Jt == "object" && Jt !== null && typeof Jt.then == "function") {
                var Te = B.ping;
                Jt.then(Te, Te);
              } else {
                B.abortSet.delete(B), me.status = 4;
                var xe = B.blockedBoundary, et = Jt, Mt = on(Z, et);
                if (xe === null ? Hn(Z, et) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Mt, xe.parentFlushed && Z.clientRenderedBoundaries.push(xe))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var Kt = Z.onAllReady;
                  Kt();
                }
              }
            } finally {
            }
          }
        }
        P.splice(0, N), o.destination !== null && Na(o, o.destination);
      } catch (Jt) {
        on(o, Jt), Hn(o, Jt);
      } finally {
        Un = w, Ea.current = p, p === Hi && hr(u);
      }
    }
  }
  function Bn(o, u, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var w = p.id = o.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, o = o.responseState, a(u, Le), a(u, o.placeholderPrefix), o = h(w.toString(16)), a(u, o), s(u, ar);
      case 1:
        p.status = 2;
        var P = !0;
        w = p.chunks;
        var N = 0;
        p = p.children;
        for (var B = 0; B < p.length; B++) {
          for (P = p[B]; N < P.index; N++) a(u, w[N]);
          P = qn(o, u, P);
        }
        for (; N < w.length - 1; N++) a(u, w[N]);
        return N < w.length && (P = s(u, w[N])), P;
      default:
        throw Error(t(390));
    }
  }
  function qn(o, u, p) {
    var w = p.boundary;
    if (w === null) return Bn(o, u, p);
    if (w.parentFlushed = !0, w.forceClientRender) w = w.errorDigest, s(u, mt), a(u, Je), w && (a(u, Bt), a(u, h(ke(w))), a(u, ht)), s(u, qt), Bn(o, u, p);
    else if (0 < w.pendingTasks) {
      w.rootSegmentID = o.nextSegmentId++, 0 < w.completedSegments.length && o.partialBoundaries.push(w);
      var P = o.responseState, N = P.nextSuspenseID++;
      P = f(P.boundaryPrefix + N.toString(16)), w = w.id = P, gt(u, o.responseState, w), Bn(o, u, p);
    } else if (w.byteSize > o.progressiveChunkSize) w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), gt(u, o.responseState, w.id), Bn(o, u, p);
    else {
      if (s(u, ir), p = w.completedSegments, p.length !== 1) throw Error(t(391));
      qn(o, u, p[0]);
    }
    return s(u, Rt);
  }
  function Zi(o, u, p) {
    return fr(u, o.responseState, p.formatContext, p.id), qn(o, u, p), It(u, p.formatContext);
  }
  function Ki(o, u, p) {
    for (var w = p.completedSegments, P = 0; P < w.length; P++) Ji(o, u, p, w[P]);
    if (w.length = 0, o = o.responseState, w = p.id, p = p.rootSegmentID, a(u, o.startInlineScript), o.sentCompleteBoundaryFunction ? a(u, E) : (o.sentCompleteBoundaryFunction = !0, a(u, y)), w === null) throw Error(t(395));
    return p = h(p.toString(16)), a(u, w), a(u, X), a(u, o.segmentPrefix), a(u, p), s(u, be);
  }
  function Ji(o, u, p, w) {
    if (w.status === 2) return !0;
    var P = w.id;
    if (P === -1) {
      if ((w.id = p.rootSegmentID) === -1) throw Error(t(392));
      return Zi(o, u, w);
    }
    return Zi(o, u, w), o = o.responseState, a(u, o.startInlineScript), o.sentCompleteSegmentFunction ? a(u, Gt) : (o.sentCompleteSegmentFunction = !0, a(u, pr)), a(u, o.segmentPrefix), P = h(P.toString(16)), a(u, P), a(u, zt), a(u, o.placeholderPrefix), a(u, P), s(u, b);
  }
  function Na(o, u) {
    r = new Uint8Array(512), n = 0;
    try {
      var p = o.completedRootSegment;
      if (p !== null && o.pendingRootTasks === 0) {
        qn(o, u, p), o.completedRootSegment = null;
        var w = o.responseState.bootstrapChunks;
        for (p = 0; p < w.length - 1; p++) a(u, w[p]);
        p < w.length && s(u, w[p]);
      }
      var P = o.clientRenderedBoundaries, N;
      for (N = 0; N < P.length; N++) {
        var B = P[N];
        w = u;
        var Z = o.responseState, me = B.id, Te = B.errorDigest, xe = B.errorMessage, et = B.errorComponentStack;
        if (a(w, Z.startInlineScript), Z.sentClientRenderFunction ? a(w, we) : (Z.sentClientRenderFunction = !0, a(
          w,
          ve
        )), me === null) throw Error(t(395));
        a(w, me), a(w, ze), (Te || xe || et) && (a(w, lt), a(w, h(We(Te || "")))), (xe || et) && (a(w, lt), a(w, h(We(xe || "")))), et && (a(w, lt), a(w, h(We(et)))), s(w, Ie);
      }
      P.splice(0, N);
      var Mt = o.completedBoundaries;
      for (N = 0; N < Mt.length; N++) Ki(o, u, Mt[N]);
      Mt.splice(0, N), d(u), r = new Uint8Array(512), n = 0;
      var Kt = o.partialBoundaries;
      for (N = 0; N < Kt.length; N++) {
        var Jt = Kt[N];
        e: {
          P = o, B = u;
          var Vn = Jt.completedSegments;
          for (Z = 0; Z < Vn.length; Z++) if (!Ji(
            P,
            B,
            Jt,
            Vn[Z]
          )) {
            Z++, Vn.splice(0, Z);
            var eo = !1;
            break e;
          }
          Vn.splice(0, Z), eo = !0;
        }
        if (!eo) {
          o.destination = null, N++, Kt.splice(0, N);
          return;
        }
      }
      Kt.splice(0, N);
      var Ia = o.completedBoundaries;
      for (N = 0; N < Ia.length; N++) Ki(o, u, Ia[N]);
      Ia.splice(0, N);
    } finally {
      d(u), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && u.close();
    }
  }
  function Qi(o, u) {
    try {
      var p = o.abortableTasks;
      p.forEach(function(w) {
        return Yi(w, o, u);
      }), p.clear(), o.destination !== null && Na(o, o.destination);
    } catch (w) {
      on(o, w), Hn(o, w);
    }
  }
  return Xn.renderToReadableStream = function(o, u) {
    return new Promise(function(p, w) {
      var P, N, B = new Promise(function(xe, et) {
        N = xe, P = et;
      }), Z = Hl(o, Oe(u ? u.identifierPrefix : void 0, u ? u.nonce : void 0, u ? u.bootstrapScriptContent : void 0, u ? u.bootstrapScripts : void 0, u ? u.bootstrapModules : void 0), tt(u ? u.namespaceURI : void 0), u ? u.progressiveChunkSize : void 0, u ? u.onError : void 0, N, function() {
        var xe = new ReadableStream({ type: "bytes", pull: function(et) {
          if (Z.status === 1) Z.status = 2, _(et, Z.fatalError);
          else if (Z.status !== 2 && Z.destination === null) {
            Z.destination = et;
            try {
              Na(Z, et);
            } catch (Mt) {
              on(Z, Mt), Hn(Z, Mt);
            }
          }
        }, cancel: function() {
          Qi(Z);
        } }, { highWaterMark: 0 });
        xe.allReady = B, p(xe);
      }, function(xe) {
        B.catch(function() {
        }), w(xe);
      }, P);
      if (u && u.signal) {
        var me = u.signal, Te = function() {
          Qi(Z, me.reason), me.removeEventListener("abort", Te);
        };
        me.addEventListener("abort", Te);
      }
      Xi(Z);
    });
  }, Xn.version = "18.3.1", Xn;
}
var xo;
function Pu() {
  if (xo) return xr;
  xo = 1;
  var e, t;
  return e = Nu(), t = Iu(), xr.version = e.version, xr.renderToString = e.renderToString, xr.renderToStaticMarkup = e.renderToStaticMarkup, xr.renderToNodeStream = e.renderToNodeStream, xr.renderToStaticNodeStream = e.renderToStaticNodeStream, xr.renderToReadableStream = t.renderToReadableStream, xr;
}
Pu();
const Du = "staticMarkup";
function Ls() {
  const e = Gl().indexOf(Du) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const rr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Ls(), { onClick: a, ...s } = r.props;
  if (n)
    return pt.cloneElement(r, {
      ...s,
      onClick: (h) => (e && e.event && e.action && Eu(e), a ? a(h) : !0)
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
  return pt.cloneElement(r, {
    ...s,
    onClick: a,
    ...g
  });
}, Lu = Ci(
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
        className: tr("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (g = r.content) == null ? void 0 : g.icon
        }),
        children: [
          /* @__PURE__ */ M.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ M.jsx("h4", { children: /* @__PURE__ */ M.jsx(
            rr,
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
                  className: tr({ collapsed: !z }),
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
              className: tr("collapse", { show: z }),
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
Lu.propTypes = {
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
    }, q = tr("btn", V[z], {
      [`btn-${V[z]}-${s}`]: !0,
      "btn-medium": L === "medium",
      "btn-small": L === "small",
      "btn-large": L === "large" || L === "default",
      disabled: d
    });
    let C = g;
    return h && g === "button" && (C = "a"), /* @__PURE__ */ M.jsx(
      rr,
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
            className: tr(T) || q,
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
  const U = tr("btn", {
    [`btn-${s}`]: !0,
    "btn-md": L === "small",
    "btn-sm": L === "xsmall",
    "btn-block": a,
    disabled: d
  });
  let $ = g;
  return h && g === "button" && ($ = "a"), /* @__PURE__ */ M.jsx(
    rr,
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
          className: tr(T) || U,
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
var Co = { exports: {} }, Ve = {}, Eo;
function Mu() {
  if (Eo) return Ve;
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
var Ao;
function ju() {
  return Ao || (Ao = 1, Co.exports = /* @__PURE__ */ Mu()), Co.exports;
}
var js = /* @__PURE__ */ ju();
function Fu(e) {
  function t(H, R, F, j, v) {
    for (var ee = 0, A = 0, ie = 0, Q = 0, te, G, ne = 0, ue = 0, K, ge = K = te = 0, re = 0, le = 0, He = 0, ce = 0, ot = F.length, qe = ot - 1, Se, Y = "", oe = "", Xe = "", De = "", Le; re < ot; ) {
      if (G = F.charCodeAt(re), re === qe && A + Q + ie + ee !== 0 && (A !== 0 && (G = A === 47 ? 10 : 47), Q = ie = ee = 0, ot++, qe++), A + Q + ie + ee === 0) {
        if (re === qe && (0 < le && (Y = Y.replace(L, "")), 0 < Y.trim().length)) {
          switch (G) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Y += F.charAt(re);
          }
          G = 59;
        }
        switch (G) {
          case 123:
            for (Y = Y.trim(), te = Y.charCodeAt(0), K = 1, ce = ++re; re < ot; ) {
              switch (G = F.charCodeAt(re)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (G = F.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < qe; ++ge)
                          switch (F.charCodeAt(ge)) {
                            case 47:
                              if (G === 42 && F.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (G === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  G++;
                case 40:
                  G++;
                case 34:
                case 39:
                  for (; re++ < qe && F.charCodeAt(re) !== G; )
                    ;
              }
              if (K === 0) break;
              re++;
            }
            switch (K = F.substring(ce, re), te === 0 && (te = (Y = Y.replace(x, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (Y = Y.replace(L, "")), G = Y.charCodeAt(1), G) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = R;
                    break;
                  default:
                    le = ut;
                }
                if (K = t(R, le, K, G, v + 1), ce = K.length, 0 < Oe && (le = r(ut, Y, He), Le = g(3, K, le, R, Re, fe, ce, G, v, j), Y = le.join(""), Le !== void 0 && (ce = (K = Le.trim()).length) === 0 && (G = 0, K = "")), 0 < ce) switch (G) {
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
                K = t(R, r(R, Y, He), K, j, v + 1);
            }
            Xe += K, K = He = le = ge = te = 0, Y = "", G = F.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (Y = (0 < le ? Y.replace(L, "") : Y).trim(), 1 < (ce = Y.length)) switch (ge === 0 && (te = Y.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ce = (Y = Y.replace(" ", ":")).length), 0 < Oe && (Le = g(1, Y, R, H, Re, fe, oe.length, j, v, j)) !== void 0 && (ce = (Y = Le.trim()).length) === 0 && (Y = "\0\0"), te = Y.charCodeAt(0), G = Y.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (G === 105 || G === 99) {
                  De += Y + F.charAt(re);
                  break;
                }
              default:
                Y.charCodeAt(ce - 1) !== 58 && (oe += a(Y, te, G, Y.charCodeAt(2)));
            }
            He = le = ge = te = 0, Y = "", G = F.charCodeAt(++re);
        }
      }
      switch (G) {
        case 13:
        case 10:
          A === 47 ? A = 0 : 1 + te === 0 && j !== 107 && 0 < Y.length && (le = 1, Y += "\0"), 0 < Oe * tt && g(0, Y, R, H, Re, fe, oe.length, j, v, j), fe = 1, Re++;
          break;
        case 59:
        case 125:
          if (A + Q + ie + ee === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, Se = F.charAt(re), G) {
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
                  G !== 32 && (Se = " ");
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
              Q + A + ee === 0 && (le = He = 1, Se = "\f" + Se);
              break;
            case 108:
              if (Q + A + ee + Ne === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && F.charCodeAt(re - 3) === 58 && (Ne = ne);
                case 8:
                  ue === 111 && (Ne = ue);
              }
              break;
            case 58:
              Q + A + ee === 0 && (ge = re);
              break;
            case 44:
              A + ie + Q + ee === 0 && (le = 1, Se += "\r");
              break;
            case 34:
            case 39:
              A === 0 && (Q = Q === G ? 0 : Q === 0 ? G : Q);
              break;
            case 91:
              Q + A + ie === 0 && ee++;
              break;
            case 93:
              Q + A + ie === 0 && ee--;
              break;
            case 41:
              Q + A + ee === 0 && ie--;
              break;
            case 40:
              if (Q + A + ee === 0) {
                if (te === 0) switch (2 * ne + 3 * ue) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ie++;
              }
              break;
            case 64:
              A + ie + Q + ee + ge + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + ee + ie)) switch (A) {
                case 0:
                  switch (2 * G + 3 * F.charCodeAt(re + 1)) {
                    case 235:
                      A = 47;
                      break;
                    case 220:
                      ce = re, A = 42;
                  }
                  break;
                case 42:
                  G === 47 && ne === 42 && ce + 2 !== re && (F.charCodeAt(ce + 2) === 33 && (oe += F.substring(ce, re + 1)), Se = "", A = 0);
              }
          }
          A === 0 && (Y += Se);
      }
      ue = ne, ne = G, re++;
    }
    if (ce = oe.length, 0 < ce) {
      if (le = R, 0 < Oe && (Le = g(2, oe, le, H, Re, fe, ce, j, v, j), Le !== void 0 && (oe = Le).length === 0)) return De + oe + Xe;
      if (oe = le.join(",") + "{" + oe + "}", Ce * Ne !== 0) {
        switch (Ce !== 2 || s(oe, 2) || (Ne = 0), Ne) {
          case 111:
            oe = oe.replace(q, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(V, "::-webkit-input-$1") + oe.replace(V, "::-moz-$1") + oe.replace(V, ":-ms-input-$1") + oe;
        }
        Ne = 0;
      }
    }
    return De + oe + Xe;
  }
  function r(H, R, F) {
    var j = R.trim().split(I);
    R = j;
    var v = j.length, ee = H.length;
    switch (ee) {
      case 0:
      case 1:
        var A = 0;
        for (H = ee === 0 ? "" : H[0] + " "; A < v; ++A)
          R[A] = n(H, R[A], F).trim();
        break;
      default:
        var ie = A = 0;
        for (R = []; A < v; ++A)
          for (var Q = 0; Q < ee; ++Q)
            R[ie++] = n(H[Q] + " ", j[A], F).trim();
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
    var v = H + ";", ee = 2 * R + 3 * F + 4 * j;
    if (ee === 944) {
      H = v.indexOf(":", 9) + 1;
      var A = v.substring(H, v.length - 1).trim();
      return A = v.substring(0, H).trim() + A + ";", Ce === 1 || Ce === 2 && s(A, 1) ? "-webkit-" + A + A : A;
    }
    if (Ce === 0 || Ce === 2 && !s(v, 1)) return v;
    switch (ee) {
      case 1015:
        return v.charCodeAt(10) === 97 ? "-webkit-" + v + v : v;
      case 951:
        return v.charCodeAt(3) === 116 ? "-webkit-" + v + v : v;
      case 963:
        return v.charCodeAt(5) === 110 ? "-webkit-" + v + v : v;
      case 1009:
        if (v.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + v + v;
      case 978:
        return "-webkit-" + v + "-moz-" + v + v;
      case 1019:
      case 983:
        return "-webkit-" + v + "-moz-" + v + "-ms-" + v + v;
      case 883:
        if (v.charCodeAt(8) === 45) return "-webkit-" + v + v;
        if (0 < v.indexOf("image-set(", 11)) return v.replace(de, "$1-webkit-$2") + v;
        break;
      case 932:
        if (v.charCodeAt(4) === 45) switch (v.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + v.replace("-grow", "") + "-webkit-" + v + "-ms-" + v.replace("grow", "positive") + v;
          case 115:
            return "-webkit-" + v + "-ms-" + v.replace("shrink", "negative") + v;
          case 98:
            return "-webkit-" + v + "-ms-" + v.replace("basis", "preferred-size") + v;
        }
        return "-webkit-" + v + "-ms-" + v + v;
      case 964:
        return "-webkit-" + v + "-ms-flex-" + v + v;
      case 1023:
        if (v.charCodeAt(8) !== 99) break;
        return A = v.substring(v.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + A + "-webkit-" + v + "-ms-flex-pack" + A + v;
      case 1005:
        return T.test(v) ? v.replace(z, ":-webkit-") + v.replace(z, ":-moz-") + v : v;
      case 1e3:
        switch (A = v.substring(13).trim(), R = A.indexOf("-") + 1, A.charCodeAt(0) + A.charCodeAt(R)) {
          case 226:
            A = v.replace(C, "tb");
            break;
          case 232:
            A = v.replace(C, "tb-rl");
            break;
          case 220:
            A = v.replace(C, "lr");
            break;
          default:
            return v;
        }
        return "-webkit-" + v + "-ms-" + A + v;
      case 1017:
        if (v.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (R = (v = H).length - 10, A = (v.charCodeAt(R) === 33 ? v.substring(0, R) : v).substring(H.indexOf(":", 7) + 1).trim(), ee = A.charCodeAt(0) + (A.charCodeAt(7) | 0)) {
          case 203:
            if (111 > A.charCodeAt(8)) break;
          case 115:
            v = v.replace(A, "-webkit-" + A) + ";" + v;
            break;
          case 207:
          case 102:
            v = v.replace(A, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + v.replace(A, "-webkit-" + A) + ";" + v.replace(A, "-ms-" + A + "box") + ";" + v;
        }
        return v + ";";
      case 938:
        if (v.charCodeAt(5) === 45) switch (v.charCodeAt(6)) {
          case 105:
            return A = v.replace("-items", ""), "-webkit-" + v + "-webkit-box-" + A + "-ms-flex-" + A + v;
          case 115:
            return "-webkit-" + v + "-ms-flex-item-" + v.replace(Pe, "") + v;
          default:
            return "-webkit-" + v + "-ms-flex-line-pack" + v.replace("align-content", "").replace(Pe, "") + v;
        }
        break;
      case 973:
      case 989:
        if (v.charCodeAt(3) !== 45 || v.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ge.test(H) === !0) return (A = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(H.replace("stretch", "fill-available"), R, F, j).replace(":fill-available", ":stretch") : v.replace(A, "-webkit-" + A) + v.replace(A, "-moz-" + A.replace("fill-", "")) + v;
        break;
      case 962:
        if (v = "-webkit-" + v + (v.charCodeAt(5) === 102 ? "-ms-" + v : "") + v, F + j === 211 && v.charCodeAt(13) === 105 && 0 < v.indexOf("transform", 10)) return v.substring(0, v.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + v;
    }
    return v;
  }
  function s(H, R) {
    var F = H.indexOf(R === 1 ? ":" : "{"), j = H.substring(0, R !== 3 ? F : 10);
    return F = H.substring(F + 1, H.length - 1), Be(R !== 2 ? j : j.replace(je, "$1"), F, R);
  }
  function d(H, R) {
    var F = a(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return F !== R + ";" ? F.replace(ke, " or ($1)").substring(4) : "(" + R + ")";
  }
  function g(H, R, F, j, v, ee, A, ie, Q, te) {
    for (var G = 0, ne = R, ue; G < Oe; ++G)
      switch (ue = Fe[G].call(_, H, ne, F, j, v, ee, A, ie, Q, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = ue;
      }
    if (ne !== R) return ne;
  }
  function h(H) {
    switch (H) {
      case void 0:
      case null:
        Oe = Fe.length = 0;
        break;
      default:
        if (typeof H == "function") Fe[Oe++] = H;
        else if (typeof H == "object") for (var R = 0, F = H.length; R < F; ++R)
          h(H[R]);
        else tt = !!H | 0;
    }
    return h;
  }
  function f(H) {
    return H = H.prefix, H !== void 0 && (Be = null, H ? typeof H != "function" ? Ce = 1 : (Ce = 2, Be = H) : Ce = 0), f;
  }
  function _(H, R) {
    var F = H;
    if (33 > F.charCodeAt(0) && (F = F.trim()), se = F, F = [se], 0 < Oe) {
      var j = g(-1, R, F, F, Re, fe, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (R = j);
    }
    var v = t(ut, F, R, 0, 0);
    return 0 < Oe && (j = g(-2, v, F, F, Re, fe, v.length, 0, 0, 0), j !== void 0 && (v = j)), se = "", Ne = 0, fe = Re = 1, v;
  }
  var x = /^\0+/g, L = /[\0\r\f]/g, z = /: */g, T = /zoo|gra/, k = /([,: ])(transform)/g, I = /,\r+?/g, U = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, V = /::(place)/g, q = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, ke = /([\s\S]*?);/g, Pe = /-self|flex-/g, je = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ge = /stretch|:\s*\w+\-(?:conte|avail)/, de = /([^-])(image-set\()/, fe = 1, Re = 1, Ne = 0, Ce = 1, ut = [], Fe = [], Oe = 0, Be = null, tt = 0, se = "";
  return _.use = h, _.set = f, e !== void 0 && f(e), _;
}
var zu = {
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
function Uu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var $u = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ro = /* @__PURE__ */ Uu(
  function(e) {
    return $u.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Oo = { exports: {} }, Ue = {}, No;
function Hu() {
  if (No) return Ue;
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
var Io;
function Wu() {
  return Io || (Io = 1, Oo.exports = Hu()), Oo.exports;
}
var Wa, Po;
function Bu() {
  if (Po) return Wa;
  Po = 1;
  var e = Wu(), t = {
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
  return Wa = z, Wa;
}
var qu = Bu();
const Vu = /* @__PURE__ */ Ei(qu);
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
}, ui = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !js.typeOf(e);
}, da = Object.freeze([]), Tr = Object.freeze({});
function xn(e) {
  return typeof e == "function";
}
function Lo(e) {
  return e.displayName || e.name || "Component";
}
function Ri(e) {
  return e && typeof e.styledComponentId == "string";
}
var qr = typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_ATTR || yt.env.SC_ATTR) || "data-styled", Oi = typeof window < "u" && "HTMLElement" in window, Yu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && yt.env.REACT_APP_SC_DISABLE_SPEEDY : yt.env.SC_DISABLE_SPEEDY !== void 0 && yt.env.SC_DISABLE_SPEEDY !== "" ? yt.env.SC_DISABLE_SPEEDY !== "false" && yt.env.SC_DISABLE_SPEEDY : yt.env.NODE_ENV !== "production"));
function Rn(e) {
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
      for (var a = this.groupSizes, s = a.length, d = s; r >= d; ) (d <<= 1) < 0 && Rn(16, "" + r);
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
}(), oa = /* @__PURE__ */ new Map(), fa = /* @__PURE__ */ new Map(), kn = 1, Zn = function(e) {
  if (oa.has(e)) return oa.get(e);
  for (; fa.has(kn); ) kn++;
  var t = kn++;
  return oa.set(e, t), fa.set(t, e), t;
}, Xu = function(e) {
  return fa.get(e);
}, Zu = function(e, t) {
  t >= kn && (kn = t + 1), oa.set(e, t), fa.set(t, e);
}, Ku = "style[" + qr + '][data-styled-version="5.3.11"]', Ju = new RegExp("^" + qr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Qu = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, ec = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var g = d.match(Ju);
      if (g) {
        var h = 0 | parseInt(g[1], 10), f = g[2];
        h !== 0 && (Zu(f, h), Qu(e, f, g[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, tc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Fs = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(g) {
    for (var h = g.childNodes, f = h.length; f >= 0; f--) {
      var _ = h[f];
      if (_ && _.nodeType === 1 && _.hasAttribute(qr)) return _;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(qr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = tc();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, rc = function() {
  function e(r) {
    var n = this.element = Fs(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, d = 0, g = s.length; d < g; d++) {
        var h = s[d];
        if (h.ownerNode === a) return h;
      }
      Rn(17);
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
}(), nc = function() {
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
}(), ac = function() {
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
}(), Mo = Oi, ic = { isServer: !Oi, useCSSOMInjection: !Yu }, zs = function() {
  function e(r, n, a) {
    r === void 0 && (r = Tr), n === void 0 && (n = {}), this.options = br({}, ic, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Oi && Mo && (Mo = !1, function(s) {
      for (var d = document.querySelectorAll(Ku), g = 0, h = d.length; g < h; g++) {
        var f = d[g];
        f && f.getAttribute(qr) !== "active" && (ec(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Zn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(br({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new ac(d) : s ? new rc(d) : new nc(d), new Gu(r)));
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
        var g = Xu(d);
        if (g !== void 0) {
          var h = r.names.get(g), f = n.getGroup(d);
          if (h && f && h.size) {
            var _ = qr + ".g" + d + '[id="' + g + '"]', x = "";
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
}(), oc = /(a)(d)/gi, jo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ci(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = jo(t % 52) + r;
  return (jo(t % 52) + r).replace(oc, "$1-$2");
}
var Wr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Us = function(e) {
  return Wr(5381, e);
};
function sc(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (xn(r) && !Ri(r)) return !1;
  }
  return !0;
}
var lc = Us("5.3.11"), uc = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && sc(t), this.componentId = r, this.baseHash = Wr(lc, r), this.baseStyle = n, zs.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Vr(this.rules, t, r, n).join(""), g = ci(Wr(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, g)) {
        var h = n(d, "." + g, void 0, a);
        r.insertRules(a, g, h);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var f = this.rules.length, _ = Wr(this.baseHash, n.hash), x = "", L = 0; L < f; L++) {
        var z = this.rules[L];
        if (typeof z == "string") x += z;
        else if (z) {
          var T = Vr(z, t, r, n), k = Array.isArray(T) ? T.join("") : T;
          _ = Wr(_, k + L), x += k;
        }
      }
      if (x) {
        var I = ci(_ >>> 0);
        if (!r.hasNameForId(a, I)) {
          var U = n(x, "." + I, void 0, a);
          r.insertRules(a, I, U);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), cc = /^\s*\/\/.*$/gm, dc = [":", "[", ".", "#"];
function fc(e) {
  var t, r, n, a, s = Tr, d = s.options, g = d === void 0 ? Tr : d, h = s.plugins, f = h === void 0 ? da : h, _ = new Fu(g), x = [], L = /* @__PURE__ */ function(k) {
    function I(U) {
      if (U) try {
        k(U + "}");
      } catch {
      }
    }
    return function(U, $, V, q, C, ae, ke, Pe, je, Ge) {
      switch (U) {
        case 1:
          if (je === 0 && $.charCodeAt(0) === 64) return k($ + ";"), "";
          break;
        case 2:
          if (Pe === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (Pe) {
            case 102:
            case 112:
              return k(V[0] + $), "";
            default:
              return $ + (Ge === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(I);
      }
    };
  }(function(k) {
    x.push(k);
  }), z = function(k, I, U) {
    return I === 0 && dc.indexOf(U[r.length]) !== -1 || U.match(a) ? k : "." + t;
  };
  function T(k, I, U, $) {
    $ === void 0 && ($ = "&");
    var V = k.replace(cc, ""), q = I && U ? U + " " + I + " { " + V + " }" : V;
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
    return I.name || Rn(15), Wr(k, I.name);
  }, 5381).toString() : "", T;
}
var $s = pt.createContext();
$s.Consumer;
var Hs = pt.createContext(), pc = (Hs.Consumer, new zs()), di = fc();
function hc() {
  return wr($s) || pc;
}
function mc() {
  return wr(Hs) || di;
}
var gc = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = di);
      var d = n.name + s.hash;
      a.hasNameForId(n.id, d) || a.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return Rn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = di), this.name + t.hash;
  }, e;
}(), bc = /([A-Z])/, yc = /([A-Z])/g, vc = /^ms-/, wc = function(e) {
  return "-" + e.toLowerCase();
};
function Fo(e) {
  return bc.test(e) ? e.replace(yc, wc).replace(vc, "-ms-") : e;
}
var zo = function(e) {
  return e == null || e === !1 || e === "";
};
function Vr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, g = e.length; d < g; d += 1) (a = Vr(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (zo(e)) return "";
  if (Ri(e)) return "." + e.styledComponentId;
  if (xn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return Vr(h, t, r, n);
  }
  var f;
  return e instanceof gc ? r ? (e.inject(r, n), e.getName(n)) : e : ui(e) ? function _(x, L) {
    var z, T, k = [];
    for (var I in x) x.hasOwnProperty(I) && !zo(x[I]) && (Array.isArray(x[I]) && x[I].isCss || xn(x[I]) ? k.push(Fo(I) + ":", x[I], ";") : ui(x[I]) ? k.push.apply(k, _(x[I], I)) : k.push(Fo(I) + ": " + (z = I, (T = x[I]) == null || typeof T == "boolean" || T === "" ? "" : typeof T != "number" || T === 0 || z in zu || z.startsWith("--") ? String(T).trim() : T + "px") + ";"));
    return L ? [L + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var Uo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function kc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return xn(e) || ui(e) ? Uo(Vr(Do(da, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Uo(Vr(Do(e, r)));
}
var Sc = function(e, t, r) {
  return r === void 0 && (r = Tr), e.theme !== r.theme && e.theme || t || r.theme;
}, _c = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, xc = /(^-|-$)/g;
function Ba(e) {
  return e.replace(_c, "-").replace(xc, "");
}
var Tc = function(e) {
  return ci(Us(e) >>> 0);
};
function Kn(e) {
  return typeof e == "string" && yt.env.NODE_ENV === "production";
}
var fi = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Cc = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ec(e, t, r) {
  var n = e[r];
  fi(t) && fi(n) ? Ws(n, t) : e[r] = t;
}
function Ws(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (fi(d)) for (var g in d) Cc(g) && Ec(e, d[g], g);
  }
  return e;
}
var Bs = pt.createContext();
Bs.Consumer;
var qa = {};
function qs(e, t, r) {
  var n = Ri(e), a = !Kn(e), s = t.attrs, d = s === void 0 ? da : s, g = t.componentId, h = g === void 0 ? function($, V) {
    var q = typeof $ != "string" ? "sc" : Ba($);
    qa[q] = (qa[q] || 0) + 1;
    var C = q + "-" + Tc("5.3.11" + q + qa[q]);
    return V ? V + "-" + C : C;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, _ = f === void 0 ? function($) {
    return Kn($) ? "styled." + $ : "Styled(" + Lo($) + ")";
  }(e) : f, x = t.displayName && t.componentId ? Ba(t.displayName) + "-" + t.componentId : t.componentId || h, L = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, z = t.shouldForwardProp;
  n && e.shouldForwardProp && (z = t.shouldForwardProp ? function($, V, q) {
    return e.shouldForwardProp($, V, q) && t.shouldForwardProp($, V, q);
  } : e.shouldForwardProp);
  var T, k = new uc(r, x, n ? e.componentStyle : void 0), I = k.isStatic && d.length === 0, U = function($, V) {
    return function(q, C, ae, ke) {
      var Pe = q.attrs, je = q.componentStyle, Ge = q.defaultProps, de = q.foldedComponentIds, fe = q.shouldForwardProp, Re = q.styledComponentId, Ne = q.target, Ce = function(j, v, ee) {
        j === void 0 && (j = Tr);
        var A = br({}, v, { theme: j }), ie = {};
        return ee.forEach(function(Q) {
          var te, G, ne, ue = Q;
          for (te in xn(ue) && (ue = ue(A)), ue) A[te] = ie[te] = te === "className" ? (G = ie[te], ne = ue[te], G && ne ? G + " " + ne : G || ne) : ue[te];
        }), [A, ie];
      }(Sc(C, wr(Bs), Ge) || Tr, C, Pe), ut = Ce[0], Fe = Ce[1], Oe = function(j, v, ee, A) {
        var ie = hc(), Q = mc(), te = v ? j.generateAndInjectStyles(Tr, ie, Q) : j.generateAndInjectStyles(ee, ie, Q);
        return te;
      }(je, ke, ut), Be = ae, tt = Fe.$as || C.$as || Fe.as || C.as || Ne, se = Kn(tt), H = Fe !== C ? br({}, C, {}, Fe) : C, R = {};
      for (var F in H) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? R.as = H[F] : (fe ? fe(F, Ro, tt) : !se || Ro(F)) && (R[F] = H[F]));
      return C.style && Fe.style !== C.style && (R.style = br({}, C.style, {}, Fe.style)), R.className = Array.prototype.concat(de, Re, Oe !== Re ? Oe : null, C.className, Fe.className).filter(Boolean).join(" "), R.ref = Be, Cs(tt, R);
    }(T, $, V, I);
  };
  return U.displayName = _, (T = pt.forwardRef(U)).attrs = L, T.componentStyle = k, T.displayName = _, T.shouldForwardProp = z, T.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : da, T.styledComponentId = x, T.target = n ? e.target : e, T.withComponent = function($) {
    var V = t.componentId, q = function(ae, ke) {
      if (ae == null) return {};
      var Pe, je, Ge = {}, de = Object.keys(ae);
      for (je = 0; je < de.length; je++) Pe = de[je], ke.indexOf(Pe) >= 0 || (Ge[Pe] = ae[Pe]);
      return Ge;
    }(t, ["componentId"]), C = V && V + "-" + (Kn($) ? $ : Ba(Lo($)));
    return qs($, br({}, q, { attrs: L, componentId: C }), r);
  }, Object.defineProperty(T, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = n ? Ws({}, e.defaultProps, $) : $;
  } }), Object.defineProperty(T, "toString", { value: function() {
    return "." + T.styledComponentId;
  } }), a && Vu(T, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), T;
}
var nr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Tr), !js.isValidElementType(n)) return Rn(1, String(n));
    var s = function() {
      return r(n, a, kc.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, br({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, br({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(qs, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  nr[e] = nr(e);
});
nr.div`
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
var Ac = /* @__PURE__ */ function() {
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
}, Rc = function(e, t, r, n) {
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
}, Oc = function(e, t) {
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
}, Nc = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Ic = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, Pc = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Dc(e, t, r) {
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
var Lc = (
  /** @class */
  function(e) {
    Ac(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, s = a.onShareWindowClose, d = a.windowHeight, g = d === void 0 ? 400 : d, h = a.windowPosition, f = h === void 0 ? "windowCenter" : h, _ = a.windowWidth, x = _ === void 0 ? 550 : _, L = jr({ height: g, width: x }, f === "windowCenter" ? Ic(x, g) : Pc(x, g));
        Dc(n, L, s);
      }, r.handleClick = function(n) {
        return Rc(r, void 0, void 0, function() {
          var a, s, d, g, h, f, _, x, L, z;
          return Oc(this, function(T) {
            switch (T.label) {
              case 0:
                return a = this.props, s = a.beforeOnClick, d = a.disabled, g = a.networkLink, h = a.onClick, f = a.url, _ = a.openShareDialogOnClick, x = a.opts, L = g(f, x), d ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (z = s(), Nc(z) ? [4, z] : [3, 2]) : [3, 2]);
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
      var x = Vs(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), L = tr("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), z = jr(jr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, _), s && d);
      return pt.createElement("button", jr({}, x, { "aria-label": x["aria-label"] || h, className: L, onClick: this.handleClick, ref: g, style: z }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Bl)
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
    }), pt.createElement(Lc, pa({}, n, h, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), Ci(a);
}
function Mc(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + ya({ subject: r, body: n ? n + a + e : e });
}
va("email", Mc, function(e) {
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
var jc = /* @__PURE__ */ function() {
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
}(), Fc = (
  /** @class */
  function(e) {
    jc(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function Sn(e, t) {
  if (!e)
    throw new Fc(t);
}
function zc(e, t) {
  var r = t.quote, n = t.hashtag;
  return Sn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ya({
    u: e,
    quote: r,
    hashtag: n
  });
}
va("facebook", zc, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Uc(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return Sn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + ya({ url: e, mini: "true", title: r, summary: n, source: a });
}
va("linkedin", Uc, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function $c(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, d = t.related, g = d === void 0 ? [] : d;
  return Sn(e, "twitter.url"), Sn(Array.isArray(s), "twitter.hashtags is not an array"), Sn(Array.isArray(g), "twitter.related is not an array"), "https://twitter.com/share" + ya({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: g.length > 0 ? g.join(",") : void 0
  });
}
va("twitter", $c, function(e) {
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
function Wc(e, t, r) {
  if (!(e[t] instanceof Hc))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, Wc, l.shape({
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
nr.div`
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
nr.div`
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
const Bc = {
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
  const x = tr("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let L = d;
  return h && d === "button" && (L = "a"), /* @__PURE__ */ M.jsx(
    rr,
    {
      gaData: {
        ...Bc,
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
    ...(r == null ? void 0 : r.length) > 0 && { className: au(r) },
    ...s && { "data-testid": s },
    ...g && { width: g },
    ...h && { height: h }
  }, I = tr("uds-img", {
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
const qc = nr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Vc = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Yc = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Vc(e) ? `mailto:${e}` : e, $o = {
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
  const U = tr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    "card-news": e === "news",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !k
  }), $ = typeof n == "string" && n.length > 0, V = !Xs(e);
  return /* @__PURE__ */ M.jsxs(qc, { className: U, "data-testid": "card-container", children: [
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
    s && /* @__PURE__ */ M.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ M.jsx("h3", { className: "card-title", children: L ? /* @__PURE__ */ M.jsx("a", { href: _, children: s }) : s }) }),
    t && /* @__PURE__ */ M.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ M.jsx("div", { dangerouslySetInnerHTML: Mr(t) }) }),
    T && /* @__PURE__ */ M.jsx(
      Js,
      {
        eventFormat: r,
        eventTime: a,
        eventLocation: n
      }
    ),
    z ? /* @__PURE__ */ M.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ M.jsx(
      rr,
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
        rr,
        {
          gaData: {
            ...$o,
            section: s,
            text: g
          },
          children: /* @__PURE__ */ M.jsx("a", { href: Yc(h), children: g })
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
const Js = ({
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
Js.propTypes = {
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
const Gc = nr.div`
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
`, Xc = () => /* @__PURE__ */ M.jsxs(Gc, { children: [
  /* @__PURE__ */ M.jsx("div", {}),
  /* @__PURE__ */ M.jsx("div", {}),
  /* @__PURE__ */ M.jsx("div", {}),
  /* @__PURE__ */ M.jsx("div", {})
] }), Zc = nr.section``, wa = ql(null), Qs = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: a,
  dataTransformer: s,
  dataFilter: d,
  maxItems: g
}) => {
  const [{ data: h, loading: f, error: _ }, x] = nu(), [L, z] = Hr([]), T = { ...e.dataSource, ...t };
  return Er(() => {
    x(T == null ? void 0 : T.url);
  }, [T == null ? void 0 : T.url]), Er(() => {
    const k = h == null ? void 0 : h.nodes.map(s), I = k == null ? void 0 : k.filter(
      (U) => d(U, t == null ? void 0 : t.filters)
    );
    z(g ? I == null ? void 0 : I.slice(0, g) : I);
  }, [h]), // Init the context to be used on its childrens
  /* @__PURE__ */ M.jsx(wa.Provider, { value: { feeds: L }, children: /* @__PURE__ */ M.jsxs(Zc, { children: [
    n,
    _ ? /* @__PURE__ */ M.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      f && !(L != null && L.length) && /* @__PURE__ */ M.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ M.jsx(Xc, {}) }),
      L != null && L.length ? a : !f && /* @__PURE__ */ M.jsx("p", { className: "text-center", children: r })
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
}), Kc = l.shape({
  header: Ni,
  ctaButton: Ii,
  dataSource: tl,
  maxItems: l.number
}), Jc = nr.div`
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
        /* @__PURE__ */ M.jsx(Jc, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ M.jsx(
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
rl.propTypes = {
  defaultProps: Kc,
  header: Ni,
  ctaButton: Ii
};
const nl = ({ children: e }) => /* @__PURE__ */ M.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ M.jsx("div", { className: "col", children: e }) });
nl.propTypes = {
  children: l.element
};
nr.img`
  width: 100%;
`;
l.oneOf(["heading-hero", "story-hero"]), l.arrayOf(Ha), l.string;
l.bool, l.bool, l.bool, l.bool, l.string, l.func, l.node, l.bool, l.string, l.bool;
l.oneOf(["default", "bordered"]).isRequired, l.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, l.number, l.number, l.func.isRequired;
nr.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const Qc = Ci(function(e, t) {
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
Qc.propTypes = {
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
      /* @__PURE__ */ M.jsx(rr, { gaData: ed, children: /* @__PURE__ */ M.jsx(
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
const ul = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ M.jsxs(ll, { children: [
  /* @__PURE__ */ M.jsx(rr, { gaData: { ...Ho, text: "left chevron" }, children: /* @__PURE__ */ M.jsx(sl, { onClick: e }) }),
  t,
  /* @__PURE__ */ M.jsx(rr, { gaData: { ...Ho, text: "right chevron" }, children: /* @__PURE__ */ M.jsx(ol, { onClick: e }) })
] });
ul.propTypes = {
  children: l.element,
  onClick: l.func
};
const cl = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ M.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ M.jsx("ul", { className: "glide__slides", children: t });
};
cl.propTypes = {
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
function Bo(e) {
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
function sa(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? sa = function(t) {
    return typeof t;
  } : sa = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sa(e);
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
function Yr(e) {
  return Yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Yr(e);
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
    var r = Yr(e), n;
    if (t) {
      var a = Yr(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return od(this, n);
  };
}
function ld(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Yr(e), e !== null); )
    ;
  return e;
}
function la() {
  return typeof Reflect < "u" && Reflect.get ? la = Reflect.get : la = function(e, t, r) {
    var n = ld(e, t);
    if (n) {
      var a = Object.getOwnPropertyDescriptor(n, t);
      return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
    }
  }, la.apply(this, arguments);
}
var ud = {
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
function cd(e) {
  return parseFloat(e);
}
function mi(e) {
  return typeof e == "string";
}
function Gr(e) {
  var t = sa(e);
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
function at(e, t, r) {
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
      t.classes.hasOwnProperty(a) && (r.classes[a] = Bo(Bo({}, e.classes[a]), t.classes[a]));
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
    ka(this, e), this._c = {}, this._t = [], this._e = new pd(), this.disabled = !1, this.selector = t, this.settings = bi(ud, r), this.index = this.settings.startAt;
  }
  return Sa(e, [{
    key: "mount",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Gr(t) ? this._c = dd(this, t, this._e) : vr("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
  return at(n, "move", {
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
  }), at(n, "length", {
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
  }), at(n, "offset", {
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
var Jn = {
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
        s !== 0 ? g[Jn[h][0]] = "".concat(this.value / 2, "px") : g[Jn[h][0]] = "", s !== a.length - 1 ? g[Jn[h][1]] = "".concat(this.value / 2, "px") : g[Jn[h][1]] = "";
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
  return at(n, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return wt(e.settings.gap);
    }
  }), at(n, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return n.value * t.Sizes.length;
    }
  }), at(n, "reductor", {
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
  return at(n, "root", {
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
  }), at(n, "track", {
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
  }), at(n, "wrapper", {
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
  return at(n, "value", {
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
  }), at(n, "reductor", {
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
  return at(n, "offset", {
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
  }), at(n, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), at(n, "value", {
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
  return at(n, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), at(n, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), at(n, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow;
    }
  }), at(n, "slideWidth", {
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
  return at(n, "grow", {
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
  return at(n, "value", {
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
  return at(a, "duration", {
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
var vi = pl, Qn = ["touchstart", "mousedown"], Yo = ["touchmove", "mousemove"], Go = ["touchend", "touchcancel", "mouseup", "mouseleave"], Xo = ["mousedown", "mousemove", "mouseup", "mouseleave"];
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
          _.stopPropagation(), t.Move.make(I * cd(z)), t.Html.root.classList.add(T.dragging), r.emit("swipe.move");
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
      L && n.on(Qn[0], t.Html.wrapper, function(T) {
        _.start(T);
      }, h), z && n.on(Qn[1], t.Html.wrapper, function(T) {
        _.start(T);
      }, h);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(Qn[0], t.Html.wrapper, h), n.off(Qn[1], t.Html.wrapper, h);
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
  return at(d, "items", {
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
  return at(s, "items", {
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
function Wd(e, t, r) {
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
  return at(a, "time", {
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
  return Gr(e) ? fd(e) : (vr("Breakpoints option must be an object"), {});
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
  Keyboard: Wd,
  Autoplay: Bd,
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
      return la(Yr(r.prototype), "mount", this).call(this, Object.assign({}, Vd, n));
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
function Jd({
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
  hasNavButtons: _ = !0,
  hasPositionIndicators: x = !0,
  imageAutoSize: L = !0,
  onItemClick: z = () => null,
  hasPeek: T = !0,
  isDraggable: k = !0,
  hasShadow: I = !0
}) => {
  const U = `glide-${Math.ceil(Math.random() * 1e4)}`, $ = Qd(n.length, e);
  return Er(() => {
    Jd({
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
        /* @__PURE__ */ M.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ M.jsx(cl, { carouselItems: n }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ M.jsx(s, { instanceName: U })
        ) : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
          x && /* @__PURE__ */ M.jsx(il, { buttonCount: $ }),
          _ && /* @__PURE__ */ M.jsx(ul, {})
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
  const h = parseInt(`${e}`, 10), [f, _] = Hr(h), x = 1024, L = 768;
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
var ea = {}, Ko;
function tf() {
  if (Ko) return ea;
  Ko = 1;
  var e = Es;
  return ea.createRoot = e.createRoot, ea.hydrateRoot = e.hydrateRoot, ea;
}
tf();
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const {
  entries: gl,
  setPrototypeOf: Jo,
  isFrozen: rf,
  getPrototypeOf: nf,
  getOwnPropertyDescriptor: af
} = Object;
let {
  freeze: Ct,
  seal: $t,
  create: wn
} = Object, {
  apply: wi,
  construct: ki
} = typeof Reflect < "u" && Reflect;
Ct || (Ct = function(t) {
  return t;
});
$t || ($t = function(t) {
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
const hn = Et(Array.prototype.forEach), of = Et(Array.prototype.lastIndexOf), Qo = Et(Array.prototype.pop), mn = Et(Array.prototype.push), sf = Et(Array.prototype.splice), ua = Et(String.prototype.toLowerCase), Va = Et(String.prototype.toString), Ya = Et(String.prototype.match), $r = Et(String.prototype.replace), lf = Et(String.prototype.indexOf), uf = Et(String.prototype.trim), er = Et(Object.prototype.hasOwnProperty), _t = Et(RegExp.prototype.test), gn = cf(TypeError);
function Et(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return wi(e, t, n);
  };
}
function cf(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ki(e, r);
  };
}
function Ae(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ua;
  Jo && Jo(e, null);
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
    er(e, t) || (e[t] = null);
  return e;
}
function cr(e) {
  const t = wn(null);
  for (const [r, n] of gl(e))
    er(e, r) && (Array.isArray(n) ? t[r] = df(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = cr(n) : t[r] = n);
  return t;
}
function bn(e, t) {
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
const es = Ct(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ga = Ct(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Xa = Ct(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ff = Ct(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Za = Ct(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), pf = Ct(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ts = Ct(["#text"]), rs = Ct(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ka = Ct(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ns = Ct(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ta = Ct(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), hf = $t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), mf = $t(/<%[\w\W]*|[\w\W]*%>/gm), gf = $t(/\$\{[\w\W]*/gm), bf = $t(/^data-[\-\w.\u00B7-\uFFFF]+$/), yf = $t(/^aria-[\-\w]+$/), bl = $t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), vf = $t(/^(?:\w+script|data):/i), wf = $t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), yl = $t(/^html$/i), kf = $t(/^[a-z][.\w]*(-[.\w]+)+$/i);
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
const yn = {
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
  if (t.version = "3.4.0", t.removed = [], !e || !e.document || e.document.nodeType !== yn.document || !e.Element)
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
  } = e, T = h.prototype, k = bn(T, "cloneNode"), I = bn(T, "remove"), U = bn(T, "nextSibling"), $ = bn(T, "childNodes"), V = bn(T, "parentNode");
  if (typeof d == "function") {
    const b = r.createElement("template");
    b.content && b.content.ownerDocument && (r = b.content.ownerDocument);
  }
  let q, C = "";
  const {
    implementation: ae,
    createNodeIterator: ke,
    createDocumentFragment: Pe,
    getElementsByTagName: je
  } = r, {
    importNode: Ge
  } = n;
  let de = is();
  t.isSupported = typeof gl == "function" && typeof V == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: fe,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Ce,
    ARIA_ATTR: ut,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: Be
  } = as;
  let {
    IS_ALLOWED_URI: tt
  } = as, se = null;
  const H = Ae({}, [...es, ...Ga, ...Xa, ...Za, ...ts]);
  let R = null;
  const F = Ae({}, [...rs, ...Ka, ...ns, ...ta]);
  let j = Object.seal(wn(null, {
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
  })), v = null, ee = null;
  const A = Object.seal(wn(null, {
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
  let ie = !0, Q = !0, te = !1, G = !0, ne = !1, ue = !0, K = !1, ge = !1, re = !1, le = !1, He = !1, ce = !1, ot = !0, qe = !1;
  const Se = "user-content-";
  let Y = !0, oe = !1, Xe = {}, De = null;
  const Le = Ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ar = null;
  const ir = Ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ht = null;
  const Wt = Ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), mt = "http://www.w3.org/1998/Math/MathML", Rt = "http://www.w3.org/2000/svg", Je = "http://www.w3.org/1999/xhtml";
  let ht = Je, Bt = !1, qt = null;
  const gt = Ae({}, [mt, Rt, Je], Va);
  let kt = Ae({}, ["mi", "mo", "mn", "ms", "mtext"]), bt = Ae({}, ["annotation-xml"]);
  const Me = Ae({}, ["title", "style", "font", "a", "script"]);
  let ct = null;
  const or = ["application/xhtml+xml", "text/html"], Vt = "text/html";
  let pe = null, st = null;
  const Ot = r.createElement("form"), sr = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Nt = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(st && st === y)) {
      if ((!y || typeof y != "object") && (y = {}), y = cr(y), ct = // eslint-disable-next-line unicorn/prefer-includes
      or.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Vt : y.PARSER_MEDIA_TYPE, pe = ct === "application/xhtml+xml" ? Va : ua, se = er(y, "ALLOWED_TAGS") ? Ae({}, y.ALLOWED_TAGS, pe) : H, R = er(y, "ALLOWED_ATTR") ? Ae({}, y.ALLOWED_ATTR, pe) : F, qt = er(y, "ALLOWED_NAMESPACES") ? Ae({}, y.ALLOWED_NAMESPACES, Va) : gt, Ht = er(y, "ADD_URI_SAFE_ATTR") ? Ae(cr(Wt), y.ADD_URI_SAFE_ATTR, pe) : Wt, ar = er(y, "ADD_DATA_URI_TAGS") ? Ae(cr(ir), y.ADD_DATA_URI_TAGS, pe) : ir, De = er(y, "FORBID_CONTENTS") ? Ae({}, y.FORBID_CONTENTS, pe) : Le, v = er(y, "FORBID_TAGS") ? Ae({}, y.FORBID_TAGS, pe) : cr({}), ee = er(y, "FORBID_ATTR") ? Ae({}, y.FORBID_ATTR, pe) : cr({}), Xe = er(y, "USE_PROFILES") ? y.USE_PROFILES : !1, ie = y.ALLOW_ARIA_ATTR !== !1, Q = y.ALLOW_DATA_ATTR !== !1, te = y.ALLOW_UNKNOWN_PROTOCOLS || !1, G = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = y.SAFE_FOR_TEMPLATES || !1, ue = y.SAFE_FOR_XML !== !1, K = y.WHOLE_DOCUMENT || !1, le = y.RETURN_DOM || !1, He = y.RETURN_DOM_FRAGMENT || !1, ce = y.RETURN_TRUSTED_TYPE || !1, re = y.FORCE_BODY || !1, ot = y.SANITIZE_DOM !== !1, qe = y.SANITIZE_NAMED_PROPS || !1, Y = y.KEEP_CONTENT !== !1, oe = y.IN_PLACE || !1, tt = y.ALLOWED_URI_REGEXP || bl, ht = y.NAMESPACE || Je, kt = y.MATHML_TEXT_INTEGRATION_POINTS || kt, bt = y.HTML_INTEGRATION_POINTS || bt, j = y.CUSTOM_ELEMENT_HANDLING || wn(null), y.CUSTOM_ELEMENT_HANDLING && sr(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = y.CUSTOM_ELEMENT_HANDLING.tagNameCheck), y.CUSTOM_ELEMENT_HANDLING && sr(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), He && (le = !0), Xe && (se = Ae({}, ts), R = wn(null), Xe.html === !0 && (Ae(se, es), Ae(R, rs)), Xe.svg === !0 && (Ae(se, Ga), Ae(R, Ka), Ae(R, ta)), Xe.svgFilters === !0 && (Ae(se, Xa), Ae(R, Ka), Ae(R, ta)), Xe.mathMl === !0 && (Ae(se, Za), Ae(R, ns), Ae(R, ta))), A.tagCheck = null, A.attributeCheck = null, y.ADD_TAGS && (typeof y.ADD_TAGS == "function" ? A.tagCheck = y.ADD_TAGS : (se === H && (se = cr(se)), Ae(se, y.ADD_TAGS, pe))), y.ADD_ATTR && (typeof y.ADD_ATTR == "function" ? A.attributeCheck = y.ADD_ATTR : (R === F && (R = cr(R)), Ae(R, y.ADD_ATTR, pe))), y.ADD_URI_SAFE_ATTR && Ae(Ht, y.ADD_URI_SAFE_ATTR, pe), y.FORBID_CONTENTS && (De === Le && (De = cr(De)), Ae(De, y.FORBID_CONTENTS, pe)), y.ADD_FORBID_CONTENTS && (De === Le && (De = cr(De)), Ae(De, y.ADD_FORBID_CONTENTS, pe)), Y && (se["#text"] = !0), K && Ae(se, ["html", "head", "body"]), se.table && (Ae(se, ["tbody"]), delete v.tbody), y.TRUSTED_TYPES_POLICY) {
        if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw gn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw gn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        q = y.TRUSTED_TYPES_POLICY, C = q.createHTML("");
      } else
        q === void 0 && (q = _f(z, a)), q !== null && typeof C == "string" && (C = q.createHTML(""));
      Ct && Ct(y), st = y;
    }
  }, Yt = Ae({}, [...Ga, ...Xa, ...ff]), lr = Ae({}, [...Za, ...pf]), kr = function(y) {
    let E = V(y);
    (!E || !E.tagName) && (E = {
      namespaceURI: ht,
      tagName: "template"
    });
    const X = ua(y.tagName), be = ua(E.tagName);
    return qt[y.namespaceURI] ? y.namespaceURI === Rt ? E.namespaceURI === Je ? X === "svg" : E.namespaceURI === mt ? X === "svg" && (be === "annotation-xml" || kt[be]) : !!Yt[X] : y.namespaceURI === mt ? E.namespaceURI === Je ? X === "math" : E.namespaceURI === Rt ? X === "math" && bt[be] : !!lr[X] : y.namespaceURI === Je ? E.namespaceURI === Rt && !bt[be] || E.namespaceURI === mt && !kt[be] ? !1 : !lr[X] && (Me[X] || !Yt[X]) : !!(ct === "application/xhtml+xml" && qt[y.namespaceURI]) : !1;
  }, rt = function(y) {
    mn(t.removed, {
      element: y
    });
    try {
      V(y).removeChild(y);
    } catch {
      I(y);
    }
  }, dt = function(y, E) {
    try {
      mn(t.removed, {
        attribute: E.getAttributeNode(y),
        from: E
      });
    } catch {
      mn(t.removed, {
        attribute: null,
        from: E
      });
    }
    if (E.removeAttribute(y), y === "is")
      if (le || He)
        try {
          rt(E);
        } catch {
        }
      else
        try {
          E.setAttribute(y, "");
        } catch {
        }
  }, dr = function(y) {
    let E = null, X = null;
    if (re)
      y = "<remove></remove>" + y;
    else {
      const we = Ya(y, /^[\r\n\t ]+/);
      X = we && we[0];
    }
    ct === "application/xhtml+xml" && ht === Je && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const be = q ? q.createHTML(y) : y;
    if (ht === Je)
      try {
        E = new L().parseFromString(be, ct);
      } catch {
      }
    if (!E || !E.documentElement) {
      E = ae.createDocument(ht, "template", null);
      try {
        E.documentElement.innerHTML = Bt ? C : be;
      } catch {
      }
    }
    const ve = E.body || E.documentElement;
    return y && X && ve.insertBefore(r.createTextNode(X), ve.childNodes[0] || null), ht === Je ? je.call(E, K ? "html" : "body")[0] : K ? E.documentElement : ve;
  }, jt = function(y) {
    return ke.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Ft = function(y) {
    return y instanceof x && (typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || !(y.attributes instanceof _) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function");
  }, At = function(y) {
    return typeof g == "function" && y instanceof g;
  };
  function Qe(b, y, E) {
    hn(b, (X) => {
      X.call(t, y, E, st);
    });
  }
  const fr = function(y) {
    let E = null;
    if (Qe(de.beforeSanitizeElements, y, null), Ft(y))
      return rt(y), !0;
    const X = pe(y.nodeName);
    if (Qe(de.uponSanitizeElement, y, {
      tagName: X,
      allowedTags: se
    }), ue && y.hasChildNodes() && !At(y.firstElementChild) && _t(/<[/\w!]/g, y.innerHTML) && _t(/<[/\w!]/g, y.textContent) || ue && y.namespaceURI === Je && X === "style" && At(y.firstElementChild) || y.nodeType === yn.progressingInstruction || ue && y.nodeType === yn.comment && _t(/<[/\w]/g, y.data))
      return rt(y), !0;
    if (v[X] || !(A.tagCheck instanceof Function && A.tagCheck(X)) && !se[X]) {
      if (!v[X] && pr(X) && (j.tagNameCheck instanceof RegExp && _t(j.tagNameCheck, X) || j.tagNameCheck instanceof Function && j.tagNameCheck(X)))
        return !1;
      if (Y && !De[X]) {
        const be = V(y) || y.parentNode, ve = $(y) || y.childNodes;
        if (ve && be) {
          const we = ve.length;
          for (let ze = we - 1; ze >= 0; --ze) {
            const Ie = k(ve[ze], !0);
            Ie.__removalCount = (y.__removalCount || 0) + 1, be.insertBefore(Ie, U(y));
          }
        }
      }
      return rt(y), !0;
    }
    return y instanceof h && !kr(y) || (X === "noscript" || X === "noembed" || X === "noframes") && _t(/<\/no(script|embed|frames)/i, y.innerHTML) ? (rt(y), !0) : (ne && y.nodeType === yn.text && (E = y.textContent, hn([fe, Re, Ne], (be) => {
      E = $r(E, be, " ");
    }), y.textContent !== E && (mn(t.removed, {
      element: y.cloneNode()
    }), y.textContent = E)), Qe(de.afterSanitizeElements, y, null), !1);
  }, It = function(y, E, X) {
    if (ee[E] || ot && (E === "id" || E === "name") && (X in r || X in Ot))
      return !1;
    if (!(Q && !ee[E] && _t(Ce, E))) {
      if (!(ie && _t(ut, E))) {
        if (!(A.attributeCheck instanceof Function && A.attributeCheck(E, y))) {
          if (!R[E] || ee[E]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(pr(y) && (j.tagNameCheck instanceof RegExp && _t(j.tagNameCheck, y) || j.tagNameCheck instanceof Function && j.tagNameCheck(y)) && (j.attributeNameCheck instanceof RegExp && _t(j.attributeNameCheck, E) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(E, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              E === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && _t(j.tagNameCheck, X) || j.tagNameCheck instanceof Function && j.tagNameCheck(X)))
            ) return !1;
          } else if (!Ht[E]) {
            if (!_t(tt, $r(X, Oe, ""))) {
              if (!((E === "src" || E === "xlink:href" || E === "href") && y !== "script" && lf(X, "data:") === 0 && ar[y])) {
                if (!(te && !_t(Fe, $r(X, Oe, "")))) {
                  if (X)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, pr = function(y) {
    return y !== "annotation-xml" && Ya(y, Be);
  }, Gt = function(y) {
    Qe(de.beforeSanitizeAttributes, y, null);
    const {
      attributes: E
    } = y;
    if (!E || Ft(y))
      return;
    const X = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let be = E.length;
    for (; be--; ) {
      const ve = E[be], {
        name: we,
        namespaceURI: ze,
        value: Ie
      } = ve, lt = pe(we), Ze = Ie;
      let We = we === "value" ? Ze : uf(Ze);
      if (X.attrName = lt, X.attrValue = We, X.keepAttr = !0, X.forceKeepAttr = void 0, Qe(de.uponSanitizeAttribute, y, X), We = X.attrValue, qe && (lt === "id" || lt === "name") && (dt(we, y), We = Se + We), ue && _t(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, We)) {
        dt(we, y);
        continue;
      }
      if (lt === "attributename" && Ya(We, "href")) {
        dt(we, y);
        continue;
      }
      if (X.forceKeepAttr)
        continue;
      if (!X.keepAttr) {
        dt(we, y);
        continue;
      }
      if (!G && _t(/\/>/i, We)) {
        dt(we, y);
        continue;
      }
      ne && hn([fe, Re, Ne], (Rr) => {
        We = $r(We, Rr, " ");
      });
      const Pt = pe(y.nodeName);
      if (!It(Pt, lt, We)) {
        dt(we, y);
        continue;
      }
      if (q && typeof z == "object" && typeof z.getAttributeType == "function" && !ze)
        switch (z.getAttributeType(Pt, lt)) {
          case "TrustedHTML": {
            We = q.createHTML(We);
            break;
          }
          case "TrustedScriptURL": {
            We = q.createScriptURL(We);
            break;
          }
        }
      if (We !== Ze)
        try {
          ze ? y.setAttributeNS(ze, we, We) : y.setAttribute(we, We), Ft(y) ? rt(y) : Qo(t.removed);
        } catch {
          dt(we, y);
        }
    }
    Qe(de.afterSanitizeAttributes, y, null);
  }, zt = function(y) {
    let E = null;
    const X = jt(y);
    for (Qe(de.beforeSanitizeShadowDOM, y, null); E = X.nextNode(); )
      Qe(de.uponSanitizeShadowNode, E, null), fr(E), Gt(E), E.content instanceof s && zt(E.content);
    Qe(de.afterSanitizeShadowDOM, y, null);
  };
  return t.sanitize = function(b) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = null, X = null, be = null, ve = null;
    if (Bt = !b, Bt && (b = "<!-->"), typeof b != "string" && !At(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw gn("dirty is not a string, aborting");
      } else
        throw gn("toString is not a function");
    if (!t.isSupported)
      return b;
    if (ge || Nt(y), t.removed = [], typeof b == "string" && (oe = !1), oe) {
      if (b.nodeName) {
        const Ie = pe(b.nodeName);
        if (!se[Ie] || v[Ie])
          throw gn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof g)
      E = dr("<!---->"), X = E.ownerDocument.importNode(b, !0), X.nodeType === yn.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? E = X : E.appendChild(X);
    else {
      if (!le && !ne && !K && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return q && ce ? q.createHTML(b) : b;
      if (E = dr(b), !E)
        return le ? null : ce ? C : "";
    }
    E && re && rt(E.firstChild);
    const we = jt(oe ? b : E);
    for (; be = we.nextNode(); )
      fr(be), Gt(be), be.content instanceof s && zt(be.content);
    if (oe)
      return b;
    if (le) {
      if (ne) {
        E.normalize();
        let Ie = E.innerHTML;
        hn([fe, Re, Ne], (lt) => {
          Ie = $r(Ie, lt, " ");
        }), E.innerHTML = Ie;
      }
      if (He)
        for (ve = Pe.call(E.ownerDocument); E.firstChild; )
          ve.appendChild(E.firstChild);
      else
        ve = E;
      return (R.shadowroot || R.shadowrootmode) && (ve = Ge.call(n, ve, !0)), ve;
    }
    let ze = K ? E.outerHTML : E.innerHTML;
    return K && se["!doctype"] && E.ownerDocument && E.ownerDocument.doctype && E.ownerDocument.doctype.name && _t(yl, E.ownerDocument.doctype.name) && (ze = "<!DOCTYPE " + E.ownerDocument.doctype.name + `>
` + ze), ne && hn([fe, Re, Ne], (Ie) => {
      ze = $r(ze, Ie, " ");
    }), q && ce ? q.createHTML(ze) : ze;
  }, t.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Nt(b), ge = !0;
  }, t.clearConfig = function() {
    st = null, ge = !1;
  }, t.isValidAttribute = function(b, y, E) {
    st || Nt({});
    const X = pe(b), be = pe(y);
    return It(X, be, E);
  }, t.addHook = function(b, y) {
    typeof y == "function" && mn(de[b], y);
  }, t.removeHook = function(b, y) {
    if (y !== void 0) {
      const E = of(de[b], y);
      return E === -1 ? void 0 : sf(de[b], E, 1)[0];
    }
    return Qo(de[b]);
  }, t.removeHooks = function(b) {
    de[b] = [];
  }, t.removeAllHooks = function() {
    de = is();
  }, t;
}
vl();
var Ja = { exports: {} }, Qa, os;
function xf() {
  if (os) return Qa;
  os = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qa = e, Qa;
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
  return ls || (ls = 1, Ja.exports = /* @__PURE__ */ Tf()()), Ja.exports;
}
var Ef = /* @__PURE__ */ Cf();
const ft = /* @__PURE__ */ As(Ef);
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
const On = ({ children: e }) => /* @__PURE__ */ it.jsx(it.Fragment, { children: e });
On.propTypes = {
  children: ft.oneOfType([
    ft.arrayOf(ft.node),
    ft.node,
    ft.string
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
  ...On.propTypes
});
const wl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ it.jsx("div", { className: t, ...r, children: /* @__PURE__ */ it.jsx("div", { className: "row", children: e }) });
wl.propTypes = {
  children: On.propTypes.children
};
({
  ...wl.propTypes
});
On.propTypes.children, ft.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
On.propTypes.children;
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
const Tn = {
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
}, cs = ["newsUnits", "interests", "audiences", "eventTypes"], Rf = (e, t = "") => {
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
    Qs,
    {
      renderHeader: t && r ? /* @__PURE__ */ it.jsx(
        rl,
        {
          header: t,
          ctaButton: r,
          defaultProps: Tn
        }
      ) : null,
      renderBody: /* @__PURE__ */ it.jsx(nl, { children: e }),
      dataTransformer: Of,
      dataFilter: Rf,
      dataSource: d,
      defaultProps: Tn,
      noFeedText: "No news to show.",
      maxItems: a
    }
  );
};
Fr.propTypes = {
  header: Ni,
  ctaButton: Ii,
  dataSource: tl,
  maxItems: ft.number,
  children: ft.element
};
var ri = { exports: {} }, Ye = {};
var fs;
function Nf() {
  if (fs) return Ye;
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
  return Ye.ContextConsumer = s, Ye.ContextProvider = d, Ye.Element = e, Ye.ForwardRef = g, Ye.Fragment = r, Ye.Lazy = x, Ye.Memo = _, Ye.Portal = t, Ye.Profiler = a, Ye.StrictMode = n, Ye.Suspense = h, Ye.SuspenseList = f, Ye.isContextConsumer = function(k) {
    return T(k) === s;
  }, Ye.isContextProvider = function(k) {
    return T(k) === d;
  }, Ye.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, Ye.isForwardRef = function(k) {
    return T(k) === g;
  }, Ye.isFragment = function(k) {
    return T(k) === r;
  }, Ye.isLazy = function(k) {
    return T(k) === x;
  }, Ye.isMemo = function(k) {
    return T(k) === _;
  }, Ye.isPortal = function(k) {
    return T(k) === t;
  }, Ye.isProfiler = function(k) {
    return T(k) === a;
  }, Ye.isStrictMode = function(k) {
    return T(k) === n;
  }, Ye.isSuspense = function(k) {
    return T(k) === h;
  }, Ye.isSuspenseList = function(k) {
    return T(k) === f;
  }, Ye.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === a || k === n || k === h || k === f || k === L || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === _ || k.$$typeof === d || k.$$typeof === s || k.$$typeof === g || k.$$typeof === z || k.getModuleId !== void 0);
  }, Ye.typeOf = T, Ye;
}
var ps;
function If() {
  return ps || (ps = 1, ri.exports = /* @__PURE__ */ Nf()), ri.exports;
}
var kl = /* @__PURE__ */ If();
function Pf(e) {
  function t(H, R, F, j, v) {
    for (var ee = 0, A = 0, ie = 0, Q = 0, te, G, ne = 0, ue = 0, K, ge = K = te = 0, re = 0, le = 0, He = 0, ce = 0, ot = F.length, qe = ot - 1, Se, Y = "", oe = "", Xe = "", De = "", Le; re < ot; ) {
      if (G = F.charCodeAt(re), re === qe && A + Q + ie + ee !== 0 && (A !== 0 && (G = A === 47 ? 10 : 47), Q = ie = ee = 0, ot++, qe++), A + Q + ie + ee === 0) {
        if (re === qe && (0 < le && (Y = Y.replace(L, "")), 0 < Y.trim().length)) {
          switch (G) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Y += F.charAt(re);
          }
          G = 59;
        }
        switch (G) {
          case 123:
            for (Y = Y.trim(), te = Y.charCodeAt(0), K = 1, ce = ++re; re < ot; ) {
              switch (G = F.charCodeAt(re)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (G = F.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < qe; ++ge)
                          switch (F.charCodeAt(ge)) {
                            case 47:
                              if (G === 42 && F.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (G === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  G++;
                case 40:
                  G++;
                case 34:
                case 39:
                  for (; re++ < qe && F.charCodeAt(re) !== G; )
                    ;
              }
              if (K === 0) break;
              re++;
            }
            switch (K = F.substring(ce, re), te === 0 && (te = (Y = Y.replace(x, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (Y = Y.replace(L, "")), G = Y.charCodeAt(1), G) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = R;
                    break;
                  default:
                    le = ut;
                }
                if (K = t(R, le, K, G, v + 1), ce = K.length, 0 < Oe && (le = r(ut, Y, He), Le = g(3, K, le, R, Re, fe, ce, G, v, j), Y = le.join(""), Le !== void 0 && (ce = (K = Le.trim()).length) === 0 && (G = 0, K = "")), 0 < ce) switch (G) {
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
                K = t(R, r(R, Y, He), K, j, v + 1);
            }
            Xe += K, K = He = le = ge = te = 0, Y = "", G = F.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (Y = (0 < le ? Y.replace(L, "") : Y).trim(), 1 < (ce = Y.length)) switch (ge === 0 && (te = Y.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ce = (Y = Y.replace(" ", ":")).length), 0 < Oe && (Le = g(1, Y, R, H, Re, fe, oe.length, j, v, j)) !== void 0 && (ce = (Y = Le.trim()).length) === 0 && (Y = "\0\0"), te = Y.charCodeAt(0), G = Y.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (G === 105 || G === 99) {
                  De += Y + F.charAt(re);
                  break;
                }
              default:
                Y.charCodeAt(ce - 1) !== 58 && (oe += a(Y, te, G, Y.charCodeAt(2)));
            }
            He = le = ge = te = 0, Y = "", G = F.charCodeAt(++re);
        }
      }
      switch (G) {
        case 13:
        case 10:
          A === 47 ? A = 0 : 1 + te === 0 && j !== 107 && 0 < Y.length && (le = 1, Y += "\0"), 0 < Oe * tt && g(0, Y, R, H, Re, fe, oe.length, j, v, j), fe = 1, Re++;
          break;
        case 59:
        case 125:
          if (A + Q + ie + ee === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, Se = F.charAt(re), G) {
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
                  G !== 32 && (Se = " ");
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
              Q + A + ee === 0 && (le = He = 1, Se = "\f" + Se);
              break;
            case 108:
              if (Q + A + ee + Ne === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && F.charCodeAt(re - 3) === 58 && (Ne = ne);
                case 8:
                  ue === 111 && (Ne = ue);
              }
              break;
            case 58:
              Q + A + ee === 0 && (ge = re);
              break;
            case 44:
              A + ie + Q + ee === 0 && (le = 1, Se += "\r");
              break;
            case 34:
            case 39:
              A === 0 && (Q = Q === G ? 0 : Q === 0 ? G : Q);
              break;
            case 91:
              Q + A + ie === 0 && ee++;
              break;
            case 93:
              Q + A + ie === 0 && ee--;
              break;
            case 41:
              Q + A + ee === 0 && ie--;
              break;
            case 40:
              if (Q + A + ee === 0) {
                if (te === 0) switch (2 * ne + 3 * ue) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ie++;
              }
              break;
            case 64:
              A + ie + Q + ee + ge + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + ee + ie)) switch (A) {
                case 0:
                  switch (2 * G + 3 * F.charCodeAt(re + 1)) {
                    case 235:
                      A = 47;
                      break;
                    case 220:
                      ce = re, A = 42;
                  }
                  break;
                case 42:
                  G === 47 && ne === 42 && ce + 2 !== re && (F.charCodeAt(ce + 2) === 33 && (oe += F.substring(ce, re + 1)), Se = "", A = 0);
              }
          }
          A === 0 && (Y += Se);
      }
      ue = ne, ne = G, re++;
    }
    if (ce = oe.length, 0 < ce) {
      if (le = R, 0 < Oe && (Le = g(2, oe, le, H, Re, fe, ce, j, v, j), Le !== void 0 && (oe = Le).length === 0)) return De + oe + Xe;
      if (oe = le.join(",") + "{" + oe + "}", Ce * Ne !== 0) {
        switch (Ce !== 2 || s(oe, 2) || (Ne = 0), Ne) {
          case 111:
            oe = oe.replace(q, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(V, "::-webkit-input-$1") + oe.replace(V, "::-moz-$1") + oe.replace(V, ":-ms-input-$1") + oe;
        }
        Ne = 0;
      }
    }
    return De + oe + Xe;
  }
  function r(H, R, F) {
    var j = R.trim().split(I);
    R = j;
    var v = j.length, ee = H.length;
    switch (ee) {
      case 0:
      case 1:
        var A = 0;
        for (H = ee === 0 ? "" : H[0] + " "; A < v; ++A)
          R[A] = n(H, R[A], F).trim();
        break;
      default:
        var ie = A = 0;
        for (R = []; A < v; ++A)
          for (var Q = 0; Q < ee; ++Q)
            R[ie++] = n(H[Q] + " ", j[A], F).trim();
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
    var v = H + ";", ee = 2 * R + 3 * F + 4 * j;
    if (ee === 944) {
      H = v.indexOf(":", 9) + 1;
      var A = v.substring(H, v.length - 1).trim();
      return A = v.substring(0, H).trim() + A + ";", Ce === 1 || Ce === 2 && s(A, 1) ? "-webkit-" + A + A : A;
    }
    if (Ce === 0 || Ce === 2 && !s(v, 1)) return v;
    switch (ee) {
      case 1015:
        return v.charCodeAt(10) === 97 ? "-webkit-" + v + v : v;
      case 951:
        return v.charCodeAt(3) === 116 ? "-webkit-" + v + v : v;
      case 963:
        return v.charCodeAt(5) === 110 ? "-webkit-" + v + v : v;
      case 1009:
        if (v.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + v + v;
      case 978:
        return "-webkit-" + v + "-moz-" + v + v;
      case 1019:
      case 983:
        return "-webkit-" + v + "-moz-" + v + "-ms-" + v + v;
      case 883:
        if (v.charCodeAt(8) === 45) return "-webkit-" + v + v;
        if (0 < v.indexOf("image-set(", 11)) return v.replace(de, "$1-webkit-$2") + v;
        break;
      case 932:
        if (v.charCodeAt(4) === 45) switch (v.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + v.replace("-grow", "") + "-webkit-" + v + "-ms-" + v.replace("grow", "positive") + v;
          case 115:
            return "-webkit-" + v + "-ms-" + v.replace("shrink", "negative") + v;
          case 98:
            return "-webkit-" + v + "-ms-" + v.replace("basis", "preferred-size") + v;
        }
        return "-webkit-" + v + "-ms-" + v + v;
      case 964:
        return "-webkit-" + v + "-ms-flex-" + v + v;
      case 1023:
        if (v.charCodeAt(8) !== 99) break;
        return A = v.substring(v.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + A + "-webkit-" + v + "-ms-flex-pack" + A + v;
      case 1005:
        return T.test(v) ? v.replace(z, ":-webkit-") + v.replace(z, ":-moz-") + v : v;
      case 1e3:
        switch (A = v.substring(13).trim(), R = A.indexOf("-") + 1, A.charCodeAt(0) + A.charCodeAt(R)) {
          case 226:
            A = v.replace(C, "tb");
            break;
          case 232:
            A = v.replace(C, "tb-rl");
            break;
          case 220:
            A = v.replace(C, "lr");
            break;
          default:
            return v;
        }
        return "-webkit-" + v + "-ms-" + A + v;
      case 1017:
        if (v.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (R = (v = H).length - 10, A = (v.charCodeAt(R) === 33 ? v.substring(0, R) : v).substring(H.indexOf(":", 7) + 1).trim(), ee = A.charCodeAt(0) + (A.charCodeAt(7) | 0)) {
          case 203:
            if (111 > A.charCodeAt(8)) break;
          case 115:
            v = v.replace(A, "-webkit-" + A) + ";" + v;
            break;
          case 207:
          case 102:
            v = v.replace(A, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + v.replace(A, "-webkit-" + A) + ";" + v.replace(A, "-ms-" + A + "box") + ";" + v;
        }
        return v + ";";
      case 938:
        if (v.charCodeAt(5) === 45) switch (v.charCodeAt(6)) {
          case 105:
            return A = v.replace("-items", ""), "-webkit-" + v + "-webkit-box-" + A + "-ms-flex-" + A + v;
          case 115:
            return "-webkit-" + v + "-ms-flex-item-" + v.replace(Pe, "") + v;
          default:
            return "-webkit-" + v + "-ms-flex-line-pack" + v.replace("align-content", "").replace(Pe, "") + v;
        }
        break;
      case 973:
      case 989:
        if (v.charCodeAt(3) !== 45 || v.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ge.test(H) === !0) return (A = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(H.replace("stretch", "fill-available"), R, F, j).replace(":fill-available", ":stretch") : v.replace(A, "-webkit-" + A) + v.replace(A, "-moz-" + A.replace("fill-", "")) + v;
        break;
      case 962:
        if (v = "-webkit-" + v + (v.charCodeAt(5) === 102 ? "-ms-" + v : "") + v, F + j === 211 && v.charCodeAt(13) === 105 && 0 < v.indexOf("transform", 10)) return v.substring(0, v.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + v;
    }
    return v;
  }
  function s(H, R) {
    var F = H.indexOf(R === 1 ? ":" : "{"), j = H.substring(0, R !== 3 ? F : 10);
    return F = H.substring(F + 1, H.length - 1), Be(R !== 2 ? j : j.replace(je, "$1"), F, R);
  }
  function d(H, R) {
    var F = a(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return F !== R + ";" ? F.replace(ke, " or ($1)").substring(4) : "(" + R + ")";
  }
  function g(H, R, F, j, v, ee, A, ie, Q, te) {
    for (var G = 0, ne = R, ue; G < Oe; ++G)
      switch (ue = Fe[G].call(_, H, ne, F, j, v, ee, A, ie, Q, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = ue;
      }
    if (ne !== R) return ne;
  }
  function h(H) {
    switch (H) {
      case void 0:
      case null:
        Oe = Fe.length = 0;
        break;
      default:
        if (typeof H == "function") Fe[Oe++] = H;
        else if (typeof H == "object") for (var R = 0, F = H.length; R < F; ++R)
          h(H[R]);
        else tt = !!H | 0;
    }
    return h;
  }
  function f(H) {
    return H = H.prefix, H !== void 0 && (Be = null, H ? typeof H != "function" ? Ce = 1 : (Ce = 2, Be = H) : Ce = 0), f;
  }
  function _(H, R) {
    var F = H;
    if (33 > F.charCodeAt(0) && (F = F.trim()), se = F, F = [se], 0 < Oe) {
      var j = g(-1, R, F, F, Re, fe, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (R = j);
    }
    var v = t(ut, F, R, 0, 0);
    return 0 < Oe && (j = g(-2, v, F, F, Re, fe, v.length, 0, 0, 0), j !== void 0 && (v = j)), se = "", Ne = 0, fe = Re = 1, v;
  }
  var x = /^\0+/g, L = /[\0\r\f]/g, z = /: */g, T = /zoo|gra/, k = /([,: ])(transform)/g, I = /,\r+?/g, U = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, V = /::(place)/g, q = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, ke = /([\s\S]*?);/g, Pe = /-self|flex-/g, je = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ge = /stretch|:\s*\w+\-(?:conte|avail)/, de = /([^-])(image-set\()/, fe = 1, Re = 1, Ne = 0, Ce = 1, ut = [], Fe = [], Oe = 0, Be = null, tt = 0, se = "";
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
), ni = { exports: {} }, $e = {};
var ms;
function jf() {
  if (ms) return $e;
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
  return $e.AsyncMode = h, $e.ConcurrentMode = f, $e.ContextConsumer = g, $e.ContextProvider = d, $e.Element = t, $e.ForwardRef = _, $e.Fragment = n, $e.Lazy = T, $e.Memo = z, $e.Portal = r, $e.Profiler = s, $e.StrictMode = a, $e.Suspense = x, $e.isAsyncMode = function(C) {
    return q(C) || V(C) === h;
  }, $e.isConcurrentMode = q, $e.isContextConsumer = function(C) {
    return V(C) === g;
  }, $e.isContextProvider = function(C) {
    return V(C) === d;
  }, $e.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, $e.isForwardRef = function(C) {
    return V(C) === _;
  }, $e.isFragment = function(C) {
    return V(C) === n;
  }, $e.isLazy = function(C) {
    return V(C) === T;
  }, $e.isMemo = function(C) {
    return V(C) === z;
  }, $e.isPortal = function(C) {
    return V(C) === r;
  }, $e.isProfiler = function(C) {
    return V(C) === s;
  }, $e.isStrictMode = function(C) {
    return V(C) === a;
  }, $e.isSuspense = function(C) {
    return V(C) === x;
  }, $e.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === a || C === x || C === L || typeof C == "object" && C !== null && (C.$$typeof === T || C.$$typeof === z || C.$$typeof === d || C.$$typeof === g || C.$$typeof === _ || C.$$typeof === I || C.$$typeof === U || C.$$typeof === $ || C.$$typeof === k);
  }, $e.typeOf = V, $e;
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
function Cn(e) {
  return typeof e == "function";
}
function vs(e) {
  return e.displayName || e.name || "Component";
}
function Li(e) {
  return e && typeof e.styledComponentId == "string";
}
var Xr = typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_ATTR || vt.env.SC_ATTR) || "data-styled", Mi = typeof window < "u" && "HTMLElement" in window, Hf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof vt < "u" && vt.env !== void 0 && (vt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? vt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && vt.env.REACT_APP_SC_DISABLE_SPEEDY : vt.env.SC_DISABLE_SPEEDY !== void 0 && vt.env.SC_DISABLE_SPEEDY !== "" ? vt.env.SC_DISABLE_SPEEDY !== "false" && vt.env.SC_DISABLE_SPEEDY : vt.env.NODE_ENV !== "production"));
function Nn(e) {
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
      for (var a = this.groupSizes, s = a.length, d = s; r >= d; ) (d <<= 1) < 0 && Nn(16, "" + r);
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
}(), ca = /* @__PURE__ */ new Map(), ba = /* @__PURE__ */ new Map(), _n = 1, ra = function(e) {
  if (ca.has(e)) return ca.get(e);
  for (; ba.has(_n); ) _n++;
  var t = _n++;
  return ca.set(e, t), ba.set(t, e), t;
}, Bf = function(e) {
  return ba.get(e);
}, qf = function(e, t) {
  t >= _n && (_n = t + 1), ca.set(e, t), ba.set(t, e);
}, Vf = "style[" + Xr + '][data-styled-version="5.3.11"]', Yf = new RegExp("^" + Xr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Gf = function(e, t, r) {
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
      if (_ && _.nodeType === 1 && _.hasAttribute(Xr)) return _;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Xr, "active"), n.setAttribute("data-styled-version", "5.3.11");
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
      Nn(17);
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
}(), ws = Mi, ep = { isServer: !Mi, useCSSOMInjection: !Hf }, _l = function() {
  function e(r, n, a) {
    r === void 0 && (r = Cr), n === void 0 && (n = {}), this.options = yr({}, ep, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Mi && ws && (ws = !1, function(s) {
      for (var d = document.querySelectorAll(Vf), g = 0, h = d.length; g < h; g++) {
        var f = d[g];
        f && f.getAttribute(Xr) !== "active" && (Xf(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ra(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(yr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new Qf(d) : s ? new Kf(d) : new Jf(d), new Wf(r)));
    var r, n, a, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ra(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(ra(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ra(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", d = 0; d < a; d++) {
        var g = Bf(d);
        if (g !== void 0) {
          var h = r.names.get(g), f = n.getGroup(d);
          if (h && f && h.size) {
            var _ = Xr + ".g" + d + '[id="' + g + '"]', x = "";
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
var Br = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, xl = function(e) {
  return Br(5381, e);
};
function rp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Cn(r) && !Li(r)) return !1;
  }
  return !0;
}
var np = xl("5.3.11"), ap = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && rp(t), this.componentId = r, this.baseHash = Br(np, r), this.baseStyle = n, _l.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Zr(this.rules, t, r, n).join(""), g = _i(Br(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, g)) {
        var h = n(d, "." + g, void 0, a);
        r.insertRules(a, g, h);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var f = this.rules.length, _ = Br(this.baseHash, n.hash), x = "", L = 0; L < f; L++) {
        var z = this.rules[L];
        if (typeof z == "string") x += z;
        else if (z) {
          var T = Zr(z, t, r, n), k = Array.isArray(T) ? T.join("") : T;
          _ = Br(_, k + L), x += k;
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
    return function(U, $, V, q, C, ae, ke, Pe, je, Ge) {
      switch (U) {
        case 1:
          if (je === 0 && $.charCodeAt(0) === 64) return k($ + ";"), "";
          break;
        case 2:
          if (Pe === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (Pe) {
            case 102:
            case 112:
              return k(V[0] + $), "";
            default:
              return $ + (Ge === 0 ? "/*|*/" : "");
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
    return I.name || Nn(15), Br(k, I.name);
  }, 5381).toString() : "", T;
}
var Tl = pt.createContext();
Tl.Consumer;
var Cl = pt.createContext(), lp = (Cl.Consumer, new _l()), xi = sp();
function up() {
  return wr(Tl) || lp;
}
function cp() {
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
      return Nn(12, String(n.name));
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
function Zr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, g = e.length; d < g; d += 1) (a = Zr(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (_s(e)) return "";
  if (Li(e)) return "." + e.styledComponentId;
  if (Cn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return Zr(h, t, r, n);
  }
  var f;
  return e instanceof dp ? r ? (e.inject(r, n), e.getName(n)) : e : Si(e) ? function _(x, L) {
    var z, T, k = [];
    for (var I in x) x.hasOwnProperty(I) && !_s(x[I]) && (Array.isArray(x[I]) && x[I].isCss || Cn(x[I]) ? k.push(Ss(I) + ":", x[I], ";") : Si(x[I]) ? k.push.apply(k, _(x[I], I)) : k.push(Ss(I) + ": " + (z = I, (T = x[I]) == null || typeof T == "boolean" || T === "" ? "" : typeof T != "number" || T === 0 || z in Df || z.startsWith("--") ? String(T).trim() : T + "px") + ";"));
    return L ? [L + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var xs = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function gp(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Cn(e) || Si(e) ? xs(Zr(ys(ga, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : xs(Zr(ys(e, r)));
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
function na(e) {
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
var Al = pt.createContext();
Al.Consumer;
var oi = {};
function Rl(e, t, r) {
  var n = Li(e), a = !na(e), s = t.attrs, d = s === void 0 ? ga : s, g = t.componentId, h = g === void 0 ? function($, V) {
    var q = typeof $ != "string" ? "sc" : ii($);
    oi[q] = (oi[q] || 0) + 1;
    var C = q + "-" + wp("5.3.11" + q + oi[q]);
    return V ? V + "-" + C : C;
  }(t.displayName, t.parentComponentId) : g, f = t.displayName, _ = f === void 0 ? function($) {
    return na($) ? "styled." + $ : "Styled(" + vs($) + ")";
  }(e) : f, x = t.displayName && t.componentId ? ii(t.displayName) + "-" + t.componentId : t.componentId || h, L = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, z = t.shouldForwardProp;
  n && e.shouldForwardProp && (z = t.shouldForwardProp ? function($, V, q) {
    return e.shouldForwardProp($, V, q) && t.shouldForwardProp($, V, q);
  } : e.shouldForwardProp);
  var T, k = new ap(r, x, n ? e.componentStyle : void 0), I = k.isStatic && d.length === 0, U = function($, V) {
    return function(q, C, ae, ke) {
      var Pe = q.attrs, je = q.componentStyle, Ge = q.defaultProps, de = q.foldedComponentIds, fe = q.shouldForwardProp, Re = q.styledComponentId, Ne = q.target, Ce = function(j, v, ee) {
        j === void 0 && (j = Cr);
        var A = yr({}, v, { theme: j }), ie = {};
        return ee.forEach(function(Q) {
          var te, G, ne, ue = Q;
          for (te in Cn(ue) && (ue = ue(A)), ue) A[te] = ie[te] = te === "className" ? (G = ie[te], ne = ue[te], G && ne ? G + " " + ne : G || ne) : ue[te];
        }), [A, ie];
      }(bp(C, wr(Al), Ge) || Cr, C, Pe), ut = Ce[0], Fe = Ce[1], Oe = function(j, v, ee, A) {
        var ie = up(), Q = cp(), te = v ? j.generateAndInjectStyles(Cr, ie, Q) : j.generateAndInjectStyles(ee, ie, Q);
        return te;
      }(je, ke, ut), Be = ae, tt = Fe.$as || C.$as || Fe.as || C.as || Ne, se = na(tt), H = Fe !== C ? yr({}, C, {}, Fe) : C, R = {};
      for (var F in H) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? R.as = H[F] : (fe ? fe(F, hs, tt) : !se || hs(F)) && (R[F] = H[F]));
      return C.style && Fe.style !== C.style && (R.style = yr({}, C.style, {}, Fe.style)), R.className = Array.prototype.concat(de, Re, Oe !== Re ? Oe : null, C.className, Fe.className).filter(Boolean).join(" "), R.ref = Be, Cs(tt, R);
    }(T, $, V, I);
  };
  return U.displayName = _, (T = pt.forwardRef(U)).attrs = L, T.componentStyle = k, T.displayName = _, T.shouldForwardProp = z, T.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ga, T.styledComponentId = x, T.target = n ? e.target : e, T.withComponent = function($) {
    var V = t.componentId, q = function(ae, ke) {
      if (ae == null) return {};
      var Pe, je, Ge = {}, de = Object.keys(ae);
      for (je = 0; je < de.length; je++) Pe = de[je], ke.indexOf(Pe) >= 0 || (Ge[Pe] = ae[Pe]);
      return Ge;
    }(t, ["componentId"]), C = V && V + "-" + (na($) ? $ : ii(vs($)));
    return Rl($, yr({}, q, { attrs: L, componentId: C }), r);
  }, Object.defineProperty(T, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = n ? El({}, e.defaultProps, $) : $;
  } }), Object.defineProperty(T, "toString", { value: function() {
    return "." + T.styledComponentId;
  } }), a && $f(T, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), T;
}
var En = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Cr), !kl.isValidElementType(n)) return Nn(1, String(n));
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
  En[e] = En(e);
});
const _p = En.section``, xp = (e, t, r) => ({
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
    cardButton: { ...Tn.cardButton, ...e }
  }
) }));
Ol.propTypes = Fr.propTypes;
const Nl = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), Cp = En.section`
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
  return /* @__PURE__ */ it.jsx(Cp, { className: "row row-spaced", "data-testid": "grid-view-container", children: r == null ? void 0 : r.map((a, s) => /* @__PURE__ */ it.jsx(pt.Fragment, { children: Ep(a, e, n) }, s)) });
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
    cardButton: { ...Tn.cardButton, ...e },
    hideTags: t
  }
) }));
Il.propTypes = {
  ...Fr.propTypes,
  cardButton: el,
  hideTags: ft.oneOf(["true", "false", !0, !1])
};
const Rp = En.section``, Op = (e, t, r) => /* @__PURE__ */ it.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ it.jsx(
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
  return /* @__PURE__ */ it.jsx(Rp, { className: "row-spaced", "data-testid": "list-view-container", children: r == null ? void 0 : r.map((a, s) => /* @__PURE__ */ it.jsx(pt.Fragment, { children: Op(a, e, n) }, s)) });
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
    cardButton: { ...Tn.cardButton, ...e },
    hideTags: t
  }
) }));
Pl.propTypes = {
  ...Fr.propTypes,
  feedCardButtonShape: el,
  hideTags: ft.oneOf(["true", "false", !0, !1])
};
var aa = {}, Ts;
function Ip() {
  if (Ts) return aa;
  Ts = 1;
  var e = Es;
  return aa.createRoot = e.createRoot, aa.hydrateRoot = e.hydrateRoot, aa;
}
var Pp = Ip();
const ji = (e, t, r) => {
  Pp.createRoot(r).render(pt.createElement(e, t));
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
/*! @license DOMPurify 3.4.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.0/LICENSE */
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
