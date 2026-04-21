import mt, { forwardRef as Gi, Component as mu, createContext as ll, useRef as Br, useImperativeHandle as hu, useId as cl, useContext as Gt, createElement as ul, useState as ct, useEffect as At, useLayoutEffect as gu, useMemo as dl, Fragment as pl, createRef as bu } from "react";
import fl from "react-dom";
function Yi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Va = { exports: {} }, bn = {};
var Do;
function yu() {
  if (Do) return bn;
  Do = 1;
  var e = mt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, b, f) {
    var k, A = {}, j = null, F = null;
    f !== void 0 && (j = "" + f), b.key !== void 0 && (j = "" + b.key), b.ref !== void 0 && (F = b.ref);
    for (k in b) n.call(b, k) && !s.hasOwnProperty(k) && (A[k] = b[k]);
    if (m && m.defaultProps) for (k in b = m.defaultProps, b) A[k] === void 0 && (A[k] = b[k]);
    return { $$typeof: t, type: m, key: j, ref: F, props: A, _owner: a.current };
  }
  return bn.Fragment = r, bn.jsx = p, bn.jsxs = p, bn;
}
var Lo;
function xu() {
  return Lo || (Lo = 1, Va.exports = yu()), Va.exports;
}
var d = xu();
function Xi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mo = { exports: {} }, yn = {}, Fo;
function vu() {
  if (Fo) return yn;
  Fo = 1;
  var e = mt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, b, f) {
    var k, A = {}, j = null, F = null;
    f !== void 0 && (j = "" + f), b.key !== void 0 && (j = "" + b.key), b.ref !== void 0 && (F = b.ref);
    for (k in b) n.call(b, k) && !s.hasOwnProperty(k) && (A[k] = b[k]);
    if (m && m.defaultProps) for (k in b = m.defaultProps, b) A[k] === void 0 && (A[k] = b[k]);
    return { $$typeof: t, type: m, key: j, ref: F, props: A, _owner: a.current };
  }
  return yn.Fragment = r, yn.jsx = p, yn.jsxs = p, yn;
}
var $o;
function wu() {
  return $o || ($o = 1, Mo.exports = vu()), Mo.exports;
}
var U = wu(), Uo = { exports: {} }, Ga, zo;
function Su() {
  if (zo) return Ga;
  zo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ga = e, Ga;
}
var Ya, qo;
function ku() {
  if (qo) return Ya;
  qo = 1;
  var e = /* @__PURE__ */ Su();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ya = function() {
    function n(p, m, b, f, k, A) {
      if (A !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
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
  }, Ya;
}
var Wo;
function Tu() {
  return Wo || (Wo = 1, Uo.exports = /* @__PURE__ */ ku()()), Uo.exports;
}
var Cu = /* @__PURE__ */ Tu();
const l = /* @__PURE__ */ Xi(Cu);
function _u(e) {
  const [t, r] = ct(!1);
  return At(() => {
    const n = window.matchMedia(e);
    n.matches !== t && r(n.matches);
    const a = () => {
      r(n.matches);
    };
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [t, e]), t;
}
const Ho = (e, t, r) => e ? t : r, Au = (e) => (e || []).join(" "), {
  entries: ml,
  setPrototypeOf: Bo,
  isFrozen: Eu,
  getPrototypeOf: ju,
  getOwnPropertyDescriptor: Nu
} = Object;
let {
  freeze: Et,
  seal: Ht,
  create: Nn
} = Object, {
  apply: Ai,
  construct: Ei
} = typeof Reflect < "u" && Reflect;
Et || (Et = function(e) {
  return e;
});
Ht || (Ht = function(e) {
  return e;
});
Ai || (Ai = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  return e.apply(t, n);
});
Ei || (Ei = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return new e(...r);
});
const xn = jt(Array.prototype.forEach), Ru = jt(Array.prototype.lastIndexOf), Vo = jt(Array.prototype.pop), vn = jt(Array.prototype.push), Ou = jt(Array.prototype.splice), ba = jt(String.prototype.toLowerCase), Xa = jt(String.prototype.toString), Za = jt(String.prototype.match), Zr = jt(String.prototype.replace), Iu = jt(String.prototype.indexOf), Pu = jt(String.prototype.trim), or = jt(Object.prototype.hasOwnProperty), Ct = jt(RegExp.prototype.test), wn = Du(TypeError);
function jt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Ai(e, t, n);
  };
}
function Du(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ei(e, r);
  };
}
function Le(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ba;
  Bo && Bo(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Eu(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function Lu(e) {
  for (let t = 0; t < e.length; t++)
    or(e, t) || (e[t] = null);
  return e;
}
function mr(e) {
  const t = Nn(null);
  for (const [r, n] of ml(e))
    or(e, r) && (Array.isArray(n) ? t[r] = Lu(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = mr(n) : t[r] = n);
  return t;
}
function Sn(e, t) {
  for (; e !== null; ) {
    const n = Nu(e, t);
    if (n) {
      if (n.get)
        return jt(n.get);
      if (typeof n.value == "function")
        return jt(n.value);
    }
    e = ju(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Go = Et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ka = Et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ja = Et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Mu = Et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Qa = Et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Fu = Et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Yo = Et(["#text"]), Xo = Et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ei = Et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Zo = Et(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), oa = Et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $u = Ht(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Uu = Ht(/<%[\w\W]*|[\w\W]*%>/gm), zu = Ht(/\$\{[\w\W]*/gm), qu = Ht(/^data-[\-\w.\u00B7-\uFFFF]+$/), Wu = Ht(/^aria-[\-\w]+$/), hl = Ht(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Hu = Ht(/^(?:\w+script|data):/i), Bu = Ht(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), gl = Ht(/^html$/i), Vu = Ht(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ko = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Wu,
  ATTR_WHITESPACE: Bu,
  CUSTOM_ELEMENT: Vu,
  DATA_ATTR: qu,
  DOCTYPE_NAME: gl,
  ERB_EXPR: Uu,
  IS_ALLOWED_URI: hl,
  IS_SCRIPT_OR_DATA: Hu,
  MUSTACHE_EXPR: $u,
  TMPLIT_EXPR: zu
});
const kn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Gu = function() {
  return typeof window > "u" ? null : window;
}, Yu = function(e, t) {
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
}, Jo = function() {
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
function bl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gu();
  const t = (x) => bl(x);
  if (t.version = "3.4.0", t.removed = [], !e || !e.document || e.document.nodeType !== kn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: m,
    Element: b,
    NodeFilter: f,
    NamedNodeMap: k = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: A,
    DOMParser: j,
    trustedTypes: F
  } = e, E = b.prototype, S = Sn(E, "cloneNode"), R = Sn(E, "remove"), W = Sn(E, "nextSibling"), z = Sn(E, "childNodes"), G = Sn(E, "parentNode");
  if (typeof p == "function") {
    const x = r.createElement("template");
    x.content && x.content.ownerDocument && (r = x.content.ownerDocument);
  }
  let $, y = "";
  const {
    implementation: J,
    createNodeIterator: ce,
    createDocumentFragment: Se,
    getElementsByTagName: je
  } = r, {
    importNode: Pe
  } = n;
  let ie = Jo();
  t.isSupported = typeof ml == "function" && typeof G == "function" && J && J.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ue,
    ERB_EXPR: be,
    TMPLIT_EXPR: ke,
    DATA_ATTR: ye,
    ARIA_ATTR: Qe,
    IS_SCRIPT_OR_DATA: Re,
    ATTR_WHITESPACE: Ee,
    CUSTOM_ELEMENT: Fe
  } = Ko;
  let {
    IS_ALLOWED_URI: He
  } = Ko, de = null;
  const B = Le({}, [...Go, ...Ka, ...Ja, ...Qa, ...Yo]);
  let I = null;
  const H = Le({}, [...Xo, ...ei, ...Zo, ...oa]);
  let q = Object.seal(Nn(null, {
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
  })), v = null, ne = null;
  const N = Object.seal(Nn(null, {
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
  let le = !0, te = !0, ae = !1, Z = !0, se = !1, me = !0, ee = !1, we = !1, oe = !1, fe = !1, Ge = !1, he = !1, dt = !0, Xe = !1;
  const Ne = "user-content-";
  let X = !0, pe = !1, et = {}, Ue = null;
  const ze = Le({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let cr = null;
  const ur = Le({}, ["audio", "video", "img", "source", "image", "track"]);
  let Yt = null;
  const Xt = Le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), xt = "http://www.w3.org/1998/Math/MathML", It = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let yt = nt, Zt = !1, Kt = null;
  const vt = Le({}, [xt, It, nt], Xa);
  let Tt = Le({}, ["mi", "mo", "mn", "ms", "mtext"]), wt = Le({}, ["annotation-xml"]);
  const qe = Le({}, ["title", "style", "font", "a", "script"]);
  let ht = null;
  const dr = ["application/xhtml+xml", "text/html"], Jt = "text/html";
  let ge = null, pt = null;
  const Pt = r.createElement("form"), pr = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, Dt = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(pt && pt === x)) {
      if ((!x || typeof x != "object") && (x = {}), x = mr(x), ht = // eslint-disable-next-line unicorn/prefer-includes
      dr.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? Jt : x.PARSER_MEDIA_TYPE, ge = ht === "application/xhtml+xml" ? Xa : ba, de = or(x, "ALLOWED_TAGS") ? Le({}, x.ALLOWED_TAGS, ge) : B, I = or(x, "ALLOWED_ATTR") ? Le({}, x.ALLOWED_ATTR, ge) : H, Kt = or(x, "ALLOWED_NAMESPACES") ? Le({}, x.ALLOWED_NAMESPACES, Xa) : vt, Yt = or(x, "ADD_URI_SAFE_ATTR") ? Le(mr(Xt), x.ADD_URI_SAFE_ATTR, ge) : Xt, cr = or(x, "ADD_DATA_URI_TAGS") ? Le(mr(ur), x.ADD_DATA_URI_TAGS, ge) : ur, Ue = or(x, "FORBID_CONTENTS") ? Le({}, x.FORBID_CONTENTS, ge) : ze, v = or(x, "FORBID_TAGS") ? Le({}, x.FORBID_TAGS, ge) : mr({}), ne = or(x, "FORBID_ATTR") ? Le({}, x.FORBID_ATTR, ge) : mr({}), et = or(x, "USE_PROFILES") ? x.USE_PROFILES : !1, le = x.ALLOW_ARIA_ATTR !== !1, te = x.ALLOW_DATA_ATTR !== !1, ae = x.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, se = x.SAFE_FOR_TEMPLATES || !1, me = x.SAFE_FOR_XML !== !1, ee = x.WHOLE_DOCUMENT || !1, fe = x.RETURN_DOM || !1, Ge = x.RETURN_DOM_FRAGMENT || !1, he = x.RETURN_TRUSTED_TYPE || !1, oe = x.FORCE_BODY || !1, dt = x.SANITIZE_DOM !== !1, Xe = x.SANITIZE_NAMED_PROPS || !1, X = x.KEEP_CONTENT !== !1, pe = x.IN_PLACE || !1, He = x.ALLOWED_URI_REGEXP || hl, yt = x.NAMESPACE || nt, Tt = x.MATHML_TEXT_INTEGRATION_POINTS || Tt, wt = x.HTML_INTEGRATION_POINTS || wt, q = x.CUSTOM_ELEMENT_HANDLING || Nn(null), x.CUSTOM_ELEMENT_HANDLING && pr(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && pr(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), se && (te = !1), Ge && (fe = !0), et && (de = Le({}, Yo), I = Nn(null), et.html === !0 && (Le(de, Go), Le(I, Xo)), et.svg === !0 && (Le(de, Ka), Le(I, ei), Le(I, oa)), et.svgFilters === !0 && (Le(de, Ja), Le(I, ei), Le(I, oa)), et.mathMl === !0 && (Le(de, Qa), Le(I, Zo), Le(I, oa))), N.tagCheck = null, N.attributeCheck = null, x.ADD_TAGS && (typeof x.ADD_TAGS == "function" ? N.tagCheck = x.ADD_TAGS : (de === B && (de = mr(de)), Le(de, x.ADD_TAGS, ge))), x.ADD_ATTR && (typeof x.ADD_ATTR == "function" ? N.attributeCheck = x.ADD_ATTR : (I === H && (I = mr(I)), Le(I, x.ADD_ATTR, ge))), x.ADD_URI_SAFE_ATTR && Le(Yt, x.ADD_URI_SAFE_ATTR, ge), x.FORBID_CONTENTS && (Ue === ze && (Ue = mr(Ue)), Le(Ue, x.FORBID_CONTENTS, ge)), x.ADD_FORBID_CONTENTS && (Ue === ze && (Ue = mr(Ue)), Le(Ue, x.ADD_FORBID_CONTENTS, ge)), X && (de["#text"] = !0), ee && Le(de, ["html", "head", "body"]), de.table && (Le(de, ["tbody"]), delete v.tbody), x.TRUSTED_TYPES_POLICY) {
        if (typeof x.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw wn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof x.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw wn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        $ = x.TRUSTED_TYPES_POLICY, y = $.createHTML("");
      } else
        $ === void 0 && ($ = Yu(F, a)), $ !== null && typeof y == "string" && (y = $.createHTML(""));
      Et && Et(x), pt = x;
    }
  }, Qt = Le({}, [...Ka, ...Ja, ...Mu]), fr = Le({}, [...Qa, ...Fu]), _r = function(x) {
    let w = G(x);
    (!w || !w.tagName) && (w = {
      namespaceURI: yt,
      tagName: "template"
    });
    const O = ba(x.tagName), K = ba(w.tagName);
    return Kt[x.namespaceURI] ? x.namespaceURI === It ? w.namespaceURI === nt ? O === "svg" : w.namespaceURI === xt ? O === "svg" && (K === "annotation-xml" || Tt[K]) : !!Qt[O] : x.namespaceURI === xt ? w.namespaceURI === nt ? O === "math" : w.namespaceURI === It ? O === "math" && wt[K] : !!fr[O] : x.namespaceURI === nt ? w.namespaceURI === It && !wt[K] || w.namespaceURI === xt && !Tt[K] ? !1 : !fr[O] && (qe[O] || !Qt[O]) : !!(ht === "application/xhtml+xml" && Kt[x.namespaceURI]) : !1;
  }, ot = function(x) {
    vn(t.removed, {
      element: x
    });
    try {
      G(x).removeChild(x);
    } catch {
      R(x);
    }
  }, gt = function(x, w) {
    try {
      vn(t.removed, {
        attribute: w.getAttributeNode(x),
        from: w
      });
    } catch {
      vn(t.removed, {
        attribute: null,
        from: w
      });
    }
    if (w.removeAttribute(x), x === "is")
      if (fe || Ge)
        try {
          ot(w);
        } catch {
        }
      else
        try {
          w.setAttribute(x, "");
        } catch {
        }
  }, br = function(x) {
    let w = null, O = null;
    if (oe)
      x = "<remove></remove>" + x;
    else {
      const _e = Za(x, /^[\r\n\t ]+/);
      O = _e && _e[0];
    }
    ht === "application/xhtml+xml" && yt === nt && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    const K = $ ? $.createHTML(x) : x;
    if (yt === nt)
      try {
        w = new j().parseFromString(K, ht);
      } catch {
      }
    if (!w || !w.documentElement) {
      w = J.createDocument(yt, "template", null);
      try {
        w.documentElement.innerHTML = Zt ? y : K;
      } catch {
      }
    }
    const Te = w.body || w.documentElement;
    return x && O && Te.insertBefore(r.createTextNode(O), Te.childNodes[0] || null), yt === nt ? je.call(w, ee ? "html" : "body")[0] : ee ? w.documentElement : Te;
  }, zt = function(x) {
    return ce.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, qt = function(x) {
    return x instanceof A && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof k) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, Ot = function(x) {
    return typeof m == "function" && x instanceof m;
  };
  function at(x, w, O) {
    xn(x, (K) => {
      K.call(t, w, O, pt);
    });
  }
  const yr = function(x) {
    let w = null;
    if (at(ie.beforeSanitizeElements, x, null), qt(x))
      return ot(x), !0;
    const O = ge(x.nodeName);
    if (at(ie.uponSanitizeElement, x, {
      tagName: O,
      allowedTags: de
    }), me && x.hasChildNodes() && !Ot(x.firstElementChild) && Ct(/<[/\w!]/g, x.innerHTML) && Ct(/<[/\w!]/g, x.textContent) || me && x.namespaceURI === nt && O === "style" && Ot(x.firstElementChild) || x.nodeType === kn.progressingInstruction || me && x.nodeType === kn.comment && Ct(/<[/\w]/g, x.data))
      return ot(x), !0;
    if (v[O] || !(N.tagCheck instanceof Function && N.tagCheck(O)) && !de[O]) {
      if (!v[O] && xr(O) && (q.tagNameCheck instanceof RegExp && Ct(q.tagNameCheck, O) || q.tagNameCheck instanceof Function && q.tagNameCheck(O)))
        return !1;
      if (X && !Ue[O]) {
        const K = G(x) || x.parentNode, Te = z(x) || x.childNodes;
        if (Te && K) {
          const _e = Te.length;
          for (let Ae = _e - 1; Ae >= 0; --Ae) {
            const We = S(Te[Ae], !0);
            We.__removalCount = (x.__removalCount || 0) + 1, K.insertBefore(We, W(x));
          }
        }
      }
      return ot(x), !0;
    }
    return x instanceof b && !_r(x) || (O === "noscript" || O === "noembed" || O === "noframes") && Ct(/<\/no(script|embed|frames)/i, x.innerHTML) ? (ot(x), !0) : (se && x.nodeType === kn.text && (w = x.textContent, xn([ue, be, ke], (K) => {
      w = Zr(w, K, " ");
    }), x.textContent !== w && (vn(t.removed, {
      element: x.cloneNode()
    }), x.textContent = w)), at(ie.afterSanitizeElements, x, null), !1);
  }, Lt = function(x, w, O) {
    if (ne[w] || dt && (w === "id" || w === "name") && (O in r || O in Pt))
      return !1;
    if (!(te && !ne[w] && Ct(ye, w)) && !(le && Ct(Qe, w)) && !(N.attributeCheck instanceof Function && N.attributeCheck(w, x))) {
      if (!I[w] || ne[w]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(xr(x) && (q.tagNameCheck instanceof RegExp && Ct(q.tagNameCheck, x) || q.tagNameCheck instanceof Function && q.tagNameCheck(x)) && (q.attributeNameCheck instanceof RegExp && Ct(q.attributeNameCheck, w) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(w, x)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          w === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && Ct(q.tagNameCheck, O) || q.tagNameCheck instanceof Function && q.tagNameCheck(O)))
        ) return !1;
      } else if (!Yt[w] && !Ct(He, Zr(O, Ee, "")) && !((w === "src" || w === "xlink:href" || w === "href") && x !== "script" && Iu(O, "data:") === 0 && cr[x]) && !(ae && !Ct(Re, Zr(O, Ee, ""))) && O)
        return !1;
    }
    return !0;
  }, xr = function(x) {
    return x !== "annotation-xml" && Za(x, Fe);
  }, er = function(x) {
    at(ie.beforeSanitizeAttributes, x, null);
    const {
      attributes: w
    } = x;
    if (!w || qt(x))
      return;
    const O = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: I,
      forceKeepAttr: void 0
    };
    let K = w.length;
    for (; K--; ) {
      const Te = w[K], {
        name: _e,
        namespaceURI: Ae,
        value: We
      } = Te, $e = ge(_e), ft = We;
      let tt = _e === "value" ? ft : Pu(ft);
      if (O.attrName = $e, O.attrValue = tt, O.keepAttr = !0, O.forceKeepAttr = void 0, at(ie.uponSanitizeAttribute, x, O), tt = O.attrValue, Xe && ($e === "id" || $e === "name") && (gt(_e, x), tt = Ne + tt), me && Ct(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, tt)) {
        gt(_e, x);
        continue;
      }
      if ($e === "attributename" && Za(tt, "href")) {
        gt(_e, x);
        continue;
      }
      if (O.forceKeepAttr)
        continue;
      if (!O.keepAttr) {
        gt(_e, x);
        continue;
      }
      if (!Z && Ct(/\/>/i, tt)) {
        gt(_e, x);
        continue;
      }
      se && xn([ue, be, ke], (Mt) => {
        tt = Zr(tt, Mt, " ");
      });
      const Ye = ge(x.nodeName);
      if (!Lt(Ye, $e, tt)) {
        gt(_e, x);
        continue;
      }
      if ($ && typeof F == "object" && typeof F.getAttributeType == "function" && !Ae)
        switch (F.getAttributeType(Ye, $e)) {
          case "TrustedHTML": {
            tt = $.createHTML(tt);
            break;
          }
          case "TrustedScriptURL": {
            tt = $.createScriptURL(tt);
            break;
          }
        }
      if (tt !== ft)
        try {
          Ae ? x.setAttributeNS(Ae, _e, tt) : x.setAttribute(_e, tt), qt(x) ? ot(x) : Vo(t.removed);
        } catch {
          gt(_e, x);
        }
    }
    at(ie.afterSanitizeAttributes, x, null);
  }, Wt = function(x) {
    let w = null;
    const O = zt(x);
    for (at(ie.beforeSanitizeShadowDOM, x, null); w = O.nextNode(); )
      at(ie.uponSanitizeShadowNode, w, null), yr(w), er(w), w.content instanceof s && Wt(w.content);
    at(ie.afterSanitizeShadowDOM, x, null);
  };
  return t.sanitize = function(x) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O = null, K = null, Te = null, _e = null;
    if (Zt = !x, Zt && (x = "<!-->"), typeof x != "string" && !Ot(x))
      if (typeof x.toString == "function") {
        if (x = x.toString(), typeof x != "string")
          throw wn("dirty is not a string, aborting");
      } else
        throw wn("toString is not a function");
    if (!t.isSupported)
      return x;
    if (we || Dt(w), t.removed = [], typeof x == "string" && (pe = !1), pe) {
      if (x.nodeName) {
        const $e = ge(x.nodeName);
        if (!de[$e] || v[$e])
          throw wn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (x instanceof m)
      O = br("<!---->"), K = O.ownerDocument.importNode(x, !0), K.nodeType === kn.element && K.nodeName === "BODY" || K.nodeName === "HTML" ? O = K : O.appendChild(K);
    else {
      if (!fe && !se && !ee && // eslint-disable-next-line unicorn/prefer-includes
      x.indexOf("<") === -1)
        return $ && he ? $.createHTML(x) : x;
      if (O = br(x), !O)
        return fe ? null : he ? y : "";
    }
    O && oe && ot(O.firstChild);
    const Ae = zt(pe ? x : O);
    for (; Te = Ae.nextNode(); )
      yr(Te), er(Te), Te.content instanceof s && Wt(Te.content);
    if (pe)
      return x;
    if (fe) {
      if (se) {
        O.normalize();
        let $e = O.innerHTML;
        xn([ue, be, ke], (ft) => {
          $e = Zr($e, ft, " ");
        }), O.innerHTML = $e;
      }
      if (Ge)
        for (_e = Se.call(O.ownerDocument); O.firstChild; )
          _e.appendChild(O.firstChild);
      else
        _e = O;
      return (I.shadowroot || I.shadowrootmode) && (_e = Pe.call(n, _e, !0)), _e;
    }
    let We = ee ? O.outerHTML : O.innerHTML;
    return ee && de["!doctype"] && O.ownerDocument && O.ownerDocument.doctype && O.ownerDocument.doctype.name && Ct(gl, O.ownerDocument.doctype.name) && (We = "<!DOCTYPE " + O.ownerDocument.doctype.name + `>
` + We), se && xn([ue, be, ke], ($e) => {
      We = Zr(We, $e, " ");
    }), $ && he ? $.createHTML(We) : We;
  }, t.setConfig = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Dt(x), we = !0;
  }, t.clearConfig = function() {
    pt = null, we = !1;
  }, t.isValidAttribute = function(x, w, O) {
    pt || Dt({});
    const K = ge(x), Te = ge(w);
    return Lt(K, Te, O);
  }, t.addHook = function(x, w) {
    typeof w == "function" && vn(ie[x], w);
  }, t.removeHook = function(x, w) {
    if (w !== void 0) {
      const O = Ru(ie[x], w);
      return O === -1 ? void 0 : Ou(ie[x], O, 1)[0];
    }
    return Vo(ie[x]);
  }, t.removeHooks = function(x) {
    ie[x] = [];
  }, t.removeAllHooks = function() {
    ie = Jo();
  }, t;
}
var Qo = bl();
let sa = null;
function Xu() {
  return sa || (typeof window < "u" ? sa = Qo(window) : sa = Qo), sa;
}
function Zu(e) {
  const t = e ? document.querySelector(e) : document;
  return t ? t.querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  ) : null;
}
const qr = (e) => ({ __html: Xu().sanitize(e) }), es = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; )
    n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
let ti = !1;
const Ku = (e, t) => {
  ti || (ti = !0, setTimeout(() => {
    e(), ti = !1;
  }, t));
};
let ts;
const Ju = (e, t) => {
  window.clearTimeout(ts), ts = window.setTimeout(e, t);
};
function Qu(e) {
  if (e && typeof e.getBoundingClientRect == "function") {
    const { bottom: t, top: r } = e.getBoundingClientRect(), { offsetTop: n } = e;
    if (r < 0 && t > 0) {
      const a = e.style;
      e.style = `${a};transition: height 0s !important; overflow:hidden; height:${t}px!important;max-height:${t}px!important`, window.scrollTo({ behavior: "instant", top: n }), setTimeout(() => {
        e.style = a, window.scrollTo({
          behavior: "smooth",
          top: e.offsetTop - t / 2
        });
      }, 50);
    }
  }
}
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
const yl = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: p = "",
  component: m = ""
}) => {
  const { dataLayer: b } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: m.toLowerCase()
  };
  b && b.push(f);
}, Fn = ({ children: e }) => /* @__PURE__ */ U.jsx(U.Fragment, { children: e });
Fn.propTypes = {
  children: l.oneOfType([
    l.arrayOf(l.node),
    l.node,
    l.string
  ])
};
var rs = { exports: {} }, ns;
function ed() {
  return ns || (ns = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var s = "", p = 0; p < arguments.length; p++) {
          var m = arguments[p];
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
        var p = "";
        for (var m in s)
          t.call(s, m) && s[m] && (p = a(p, m));
        return p;
      }
      function a(s, p) {
        return p ? s ? s + " " + p : s + p : s;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(rs)), rs.exports;
}
var td = ed();
const lt = /* @__PURE__ */ Xi(td);
({
  ...Fn.propTypes
});
const xl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ U.jsx("div", { className: t, ...r, children: /* @__PURE__ */ U.jsx("div", { className: "row", children: e }) });
xl.propTypes = {
  children: Fn.propTypes.children
};
({
  ...xl.propTypes
});
Fn.propTypes.children, l.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Fn.propTypes.children;
const rd = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), ri = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), vl = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.arrayOf(l.string),
    header: l.string,
    body: l.string
  })
}), Zi = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var jr = {}, $r = {}, as;
function nd() {
  if (as) return $r;
  as = 1;
  var e = mt;
  function t(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, g = 1; g < arguments.length; g++) u += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function p(i) {
    return r.call(s, i) ? !0 : r.call(a, i) ? !1 : n.test(i) ? s[i] = !0 : (a[i] = !0, !1);
  }
  function m(i, u, g, C, M, P, V) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = C, this.attributeNamespace = M, this.mustUseProperty = g, this.propertyName = i, this.type = u, this.sanitizeURL = P, this.removeEmptyString = V;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    b[i] = new m(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var u = i[0];
    b[u] = new m(u, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    b[i] = new m(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    b[i] = new m(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    b[i] = new m(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    b[i] = new m(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    b[i] = new m(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    b[i] = new m(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    b[i] = new m(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var f = /[\-:]([a-z])/g;
  function k(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var u = i.replace(
      f,
      k
    );
    b[u] = new m(u, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var u = i.replace(f, k);
    b[u] = new m(u, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var u = i.replace(f, k);
    b[u] = new m(u, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    b[i] = new m(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    b[i] = new m(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var A = {
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
  Object.keys(A).forEach(function(i) {
    j.forEach(function(u) {
      u = u + i.charAt(0).toUpperCase() + i.substring(1), A[u] = A[i];
    });
  });
  var F = /["'&<>]/;
  function E(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var u = F.exec(i);
    if (u) {
      var g = "", C, M = 0;
      for (C = u.index; C < i.length; C++) {
        switch (i.charCodeAt(C)) {
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
        M !== C && (g += i.substring(M, C)), M = C + 1, g += u;
      }
      i = M !== C ? g + i.substring(M, C) : g;
    }
    return i;
  }
  var S = /([A-Z])/g, R = /^ms-/, W = Array.isArray;
  function z(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function G(i, u, g) {
    switch (u) {
      case "select":
        return z(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return z(2, null);
      case "math":
        return z(3, null);
      case "foreignObject":
        return z(1, null);
      case "table":
        return z(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return z(5, null);
      case "colgroup":
        return z(7, null);
      case "tr":
        return z(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? z(1, null) : i;
  }
  var $ = /* @__PURE__ */ new Map();
  function y(i, u, g) {
    if (typeof g != "object") throw Error(t(62));
    u = !0;
    for (var C in g) if (r.call(g, C)) {
      var M = g[C];
      if (M != null && typeof M != "boolean" && M !== "") {
        if (C.indexOf("--") === 0) {
          var P = E(C);
          M = E(("" + M).trim());
        } else {
          P = C;
          var V = $.get(P);
          V !== void 0 || (V = E(P.replace(S, "-$1").toLowerCase().replace(R, "-ms-")), $.set(P, V)), P = V, M = typeof M == "number" ? M === 0 || r.call(A, C) ? "" + M : M + "px" : E(("" + M).trim());
        }
        u ? (u = !1, i.push(' style="', P, ":", M)) : i.push(";", P, ":", M);
      }
    }
    u || i.push('"');
  }
  function J(i, u, g, C) {
    switch (g) {
      case "style":
        y(i, u, C);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (u = b.hasOwnProperty(g) ? b[g] : null, u !== null) {
        switch (typeof C) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (g = u.attributeName, u.type) {
          case 3:
            C && i.push(" ", g, '=""');
            break;
          case 4:
            C === !0 ? i.push(" ", g, '=""') : C !== !1 && i.push(" ", g, '="', E(C), '"');
            break;
          case 5:
            isNaN(C) || i.push(" ", g, '="', E(C), '"');
            break;
          case 6:
            !isNaN(C) && 1 <= C && i.push(" ", g, '="', E(C), '"');
            break;
          default:
            u.sanitizeURL && (C = "" + C), i.push(" ", g, '="', E(C), '"');
        }
      } else if (p(g)) {
        switch (typeof C) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = g.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push(" ", g, '="', E(C), '"');
      }
    }
  }
  function ce(i, u, g) {
    if (u != null) {
      if (g != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && i.push("" + u);
    }
  }
  function Se(i) {
    var u = "";
    return e.Children.forEach(i, function(g) {
      g != null && (u += g);
    }), u;
  }
  function je(i, u, g, C) {
    i.push(ue(g));
    var M = g = null, P;
    for (P in u) if (r.call(u, P)) {
      var V = u[P];
      if (V != null) switch (P) {
        case "children":
          g = V;
          break;
        case "dangerouslySetInnerHTML":
          M = V;
          break;
        default:
          J(i, C, P, V);
      }
    }
    return i.push(">"), ce(i, M, g), typeof g == "string" ? (i.push(E(g)), null) : g;
  }
  var Pe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ie = /* @__PURE__ */ new Map();
  function ue(i) {
    var u = ie.get(i);
    if (u === void 0) {
      if (!Pe.test(i)) throw Error(t(65, i));
      u = "<" + i, ie.set(i, u);
    }
    return u;
  }
  function be(i, u, g, C, M) {
    switch (u) {
      case "select":
        i.push(ue("select"));
        var P = null, V = null;
        for (Oe in g) if (r.call(g, Oe)) {
          var re = g[Oe];
          if (re != null) switch (Oe) {
            case "children":
              P = re;
              break;
            case "dangerouslySetInnerHTML":
              V = re;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              J(i, C, Oe, re);
          }
        }
        return i.push(">"), ce(i, V, P), P;
      case "option":
        V = M.selectedValue, i.push(ue("option"));
        var xe = re = null, Ce = null, Oe = null;
        for (P in g) if (r.call(g, P)) {
          var st = g[P];
          if (st != null) switch (P) {
            case "children":
              re = st;
              break;
            case "selected":
              Ce = st;
              break;
            case "dangerouslySetInnerHTML":
              Oe = st;
              break;
            case "value":
              xe = st;
            default:
              J(i, C, P, st);
          }
        }
        if (V != null) if (g = xe !== null ? "" + xe : Se(re), W(V)) {
          for (C = 0; C < V.length; C++)
            if ("" + V[C] === g) {
              i.push(' selected=""');
              break;
            }
        } else "" + V === g && i.push(' selected=""');
        else Ce && i.push(' selected=""');
        return i.push(">"), ce(i, Oe, re), re;
      case "textarea":
        i.push(ue("textarea")), Oe = V = P = null;
        for (re in g) if (r.call(g, re) && (xe = g[re], xe != null)) switch (re) {
          case "children":
            Oe = xe;
            break;
          case "value":
            P = xe;
            break;
          case "defaultValue":
            V = xe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            J(
              i,
              C,
              re,
              xe
            );
        }
        if (P === null && V !== null && (P = V), i.push(">"), Oe != null) {
          if (P != null) throw Error(t(92));
          if (W(Oe) && 1 < Oe.length) throw Error(t(93));
          P = "" + Oe;
        }
        return typeof P == "string" && P[0] === `
` && i.push(`
`), P !== null && i.push(E("" + P)), null;
      case "input":
        i.push(ue("input")), xe = Oe = re = P = null;
        for (V in g) if (r.call(g, V) && (Ce = g[V], Ce != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            xe = Ce;
            break;
          case "defaultValue":
            re = Ce;
            break;
          case "checked":
            Oe = Ce;
            break;
          case "value":
            P = Ce;
            break;
          default:
            J(i, C, V, Ce);
        }
        return Oe !== null ? J(i, C, "checked", Oe) : xe !== null && J(i, C, "checked", xe), P !== null ? J(i, C, "value", P) : re !== null && J(i, C, "value", re), i.push("/>"), null;
      case "menuitem":
        i.push(ue("menuitem"));
        for (var tr in g) if (r.call(g, tr) && (P = g[tr], P != null)) switch (tr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            J(i, C, tr, P);
        }
        return i.push(">"), null;
      case "title":
        i.push(ue("title")), P = null;
        for (st in g) if (r.call(g, st) && (V = g[st], V != null)) switch (st) {
          case "children":
            P = V;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            J(i, C, st, V);
        }
        return i.push(">"), P;
      case "listing":
      case "pre":
        i.push(ue(u)), V = P = null;
        for (xe in g) if (r.call(g, xe) && (re = g[xe], re != null)) switch (xe) {
          case "children":
            P = re;
            break;
          case "dangerouslySetInnerHTML":
            V = re;
            break;
          default:
            J(i, C, xe, re);
        }
        if (i.push(">"), V != null) {
          if (P != null) throw Error(t(60));
          if (typeof V != "object" || !("__html" in V)) throw Error(t(61));
          g = V.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? i.push(`
`, g) : i.push("" + g));
        }
        return typeof P == "string" && P[0] === `
` && i.push(`
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
        i.push(ue(u));
        for (var rr in g) if (r.call(g, rr) && (P = g[rr], P != null)) switch (rr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            J(i, C, rr, P);
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
          g,
          u,
          C
        );
      case "html":
        return M.insertionMode === 0 && i.push("<!DOCTYPE html>"), je(i, g, u, C);
      default:
        if (u.indexOf("-") === -1 && typeof g.is != "string") return je(i, g, u, C);
        i.push(ue(u)), V = P = null;
        for (Ce in g) if (r.call(g, Ce) && (re = g[Ce], re != null)) switch (Ce) {
          case "children":
            P = re;
            break;
          case "dangerouslySetInnerHTML":
            V = re;
            break;
          case "style":
            y(i, C, re);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            p(Ce) && typeof re != "function" && typeof re != "symbol" && i.push(" ", Ce, '="', E(re), '"');
        }
        return i.push(">"), ce(i, V, P), P;
    }
  }
  function ke(i, u, g) {
    if (i.push('<!--$?--><template id="'), g === null) throw Error(t(395));
    return i.push(g), i.push('"></template>');
  }
  function ye(i, u, g, C) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return i.push('<div hidden id="'), i.push(u.segmentPrefix), u = C.toString(16), i.push(u), i.push('">');
      case 2:
        return i.push('<svg aria-hidden="true" style="display:none" id="'), i.push(u.segmentPrefix), u = C.toString(16), i.push(u), i.push('">');
      case 3:
        return i.push('<math aria-hidden="true" style="display:none" id="'), i.push(u.segmentPrefix), u = C.toString(16), i.push(u), i.push('">');
      case 4:
        return i.push('<table hidden id="'), i.push(u.segmentPrefix), u = C.toString(16), i.push(u), i.push('">');
      case 5:
        return i.push('<table hidden><tbody id="'), i.push(u.segmentPrefix), u = C.toString(16), i.push(u), i.push('">');
      case 6:
        return i.push('<table hidden><tr id="'), i.push(u.segmentPrefix), u = C.toString(16), i.push(u), i.push('">');
      case 7:
        return i.push('<table hidden><colgroup id="'), i.push(u.segmentPrefix), u = C.toString(16), i.push(u), i.push('">');
      default:
        throw Error(t(397));
    }
  }
  function Qe(i, u) {
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
  var Re = /[<\u2028\u2029]/g;
  function Ee(i) {
    return JSON.stringify(i).replace(Re, function(u) {
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
  function Fe(i, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: i };
  }
  function He(i, u, g, C) {
    return g.generateStaticMarkup ? (i.push(E(u)), !1) : (u === "" ? i = C : (C && i.push("<!-- -->"), i.push(E(u)), i = !0), i);
  }
  var de = Object.assign, B = Symbol.for("react.element"), I = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), N = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), me = Symbol.for("react.scope"), ee = Symbol.for("react.debug_trace_mode"), we = Symbol.for("react.legacy_hidden"), oe = Symbol.for("react.default_value"), fe = Symbol.iterator;
  function Ge(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case H:
        return "Fragment";
      case I:
        return "Portal";
      case v:
        return "Profiler";
      case q:
        return "StrictMode";
      case te:
        return "Suspense";
      case ae:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case N:
        return (i.displayName || "Context") + ".Consumer";
      case ne:
        return (i._context.displayName || "Context") + ".Provider";
      case le:
        var u = i.render;
        return i = i.displayName, i || (i = u.displayName || u.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case Z:
        return u = i.displayName || null, u !== null ? u : Ge(i.type) || "Memo";
      case se:
        u = i._payload, i = i._init;
        try {
          return Ge(i(u));
        } catch {
        }
    }
    return null;
  }
  var he = {};
  function dt(i, u) {
    if (i = i.contextTypes, !i) return he;
    var g = {}, C;
    for (C in i) g[C] = u[C];
    return g;
  }
  var Xe = null;
  function Ne(i, u) {
    if (i !== u) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var g = u.parent;
      if (i === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        Ne(i, g);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function X(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && X(i);
  }
  function pe(i) {
    var u = i.parent;
    u !== null && pe(u), i.context._currentValue2 = i.value;
  }
  function et(i, u) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === u.depth ? Ne(i, u) : et(i, u);
  }
  function Ue(i, u) {
    var g = u.parent;
    if (g === null) throw Error(t(402));
    i.depth === g.depth ? Ne(i, g) : Ue(i, g), u.context._currentValue2 = u.value;
  }
  function ze(i) {
    var u = Xe;
    u !== i && (u === null ? pe(i) : i === null ? X(u) : u.depth === i.depth ? Ne(u, i) : u.depth > i.depth ? et(u, i) : Ue(u, i), Xe = i);
  }
  var cr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function ur(i, u, g, C) {
    var M = i.state !== void 0 ? i.state : null;
    i.updater = cr, i.props = g, i.state = M;
    var P = { queue: [], replace: !1 };
    i._reactInternals = P;
    var V = u.contextType;
    if (i.context = typeof V == "object" && V !== null ? V._currentValue2 : C, V = u.getDerivedStateFromProps, typeof V == "function" && (V = V(g, M), M = V == null ? M : de({}, M, V), i.state = M), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && cr.enqueueReplaceState(i, i.state, null), P.queue !== null && 0 < P.queue.length) if (u = P.queue, V = P.replace, P.queue = null, P.replace = !1, V && u.length === 1) i.state = u[0];
    else {
      for (P = V ? u[0] : i.state, M = !0, V = V ? 1 : 0; V < u.length; V++) {
        var re = u[V];
        re = typeof re == "function" ? re.call(i, P, g, C) : re, re != null && (M ? (M = !1, P = de({}, P, re)) : de(P, re));
      }
      i.state = P;
    }
    else P.queue = null;
  }
  var Yt = { id: 1, overflow: "" };
  function Xt(i, u, g) {
    var C = i.id;
    i = i.overflow;
    var M = 32 - xt(C) - 1;
    C &= ~(1 << M), g += 1;
    var P = 32 - xt(u) + M;
    if (30 < P) {
      var V = M - M % 5;
      return P = (C & (1 << V) - 1).toString(32), C >>= V, M -= V, { id: 1 << 32 - xt(u) + M | g << M | C, overflow: P + i };
    }
    return { id: 1 << P | g << M | C, overflow: i };
  }
  var xt = Math.clz32 ? Math.clz32 : yt, It = Math.log, nt = Math.LN2;
  function yt(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (It(i) / nt | 0) | 0;
  }
  function Zt(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var Kt = typeof Object.is == "function" ? Object.is : Zt, vt = null, Tt = null, wt = null, qe = null, ht = !1, dr = !1, Jt = 0, ge = null, pt = 0;
  function Pt() {
    if (vt === null) throw Error(t(321));
    return vt;
  }
  function pr() {
    if (0 < pt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Dt() {
    return qe === null ? wt === null ? (ht = !1, wt = qe = pr()) : (ht = !0, qe = wt) : qe.next === null ? (ht = !1, qe = qe.next = pr()) : (ht = !0, qe = qe.next), qe;
  }
  function Qt() {
    Tt = vt = null, dr = !1, wt = null, pt = 0, qe = ge = null;
  }
  function fr(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function _r(i, u, g) {
    if (vt = Pt(), qe = Dt(), ht) {
      var C = qe.queue;
      if (u = C.dispatch, ge !== null && (g = ge.get(C), g !== void 0)) {
        ge.delete(C), C = qe.memoizedState;
        do
          C = i(C, g.action), g = g.next;
        while (g !== null);
        return qe.memoizedState = C, [C, u];
      }
      return [qe.memoizedState, u];
    }
    return i = i === fr ? typeof u == "function" ? u() : u : g !== void 0 ? g(u) : u, qe.memoizedState = i, i = qe.queue = { last: null, dispatch: null }, i = i.dispatch = gt.bind(null, vt, i), [qe.memoizedState, i];
  }
  function ot(i, u) {
    if (vt = Pt(), qe = Dt(), u = u === void 0 ? null : u, qe !== null) {
      var g = qe.memoizedState;
      if (g !== null && u !== null) {
        var C = g[1];
        e: if (C === null) C = !1;
        else {
          for (var M = 0; M < C.length && M < u.length; M++) if (!Kt(u[M], C[M])) {
            C = !1;
            break e;
          }
          C = !0;
        }
        if (C) return g[0];
      }
    }
    return i = i(), qe.memoizedState = [i, u], i;
  }
  function gt(i, u, g) {
    if (25 <= pt) throw Error(t(301));
    if (i === vt) if (dr = !0, i = { action: g, next: null }, ge === null && (ge = /* @__PURE__ */ new Map()), g = ge.get(u), g === void 0) ge.set(u, i);
    else {
      for (u = g; u.next !== null; ) u = u.next;
      u.next = i;
    }
  }
  function br() {
    throw Error(t(394));
  }
  function zt() {
  }
  var qt = { readContext: function(i) {
    return i._currentValue2;
  }, useContext: function(i) {
    return Pt(), i._currentValue2;
  }, useMemo: ot, useReducer: _r, useRef: function(i) {
    vt = Pt(), qe = Dt();
    var u = qe.memoizedState;
    return u === null ? (i = { current: i }, qe.memoizedState = i) : u;
  }, useState: function(i) {
    return _r(fr, i);
  }, useInsertionEffect: zt, useLayoutEffect: function() {
  }, useCallback: function(i, u) {
    return ot(function() {
      return i;
    }, u);
  }, useImperativeHandle: zt, useEffect: zt, useDebugValue: zt, useDeferredValue: function(i) {
    return Pt(), i;
  }, useTransition: function() {
    return Pt(), [
      !1,
      br
    ];
  }, useId: function() {
    var i = Tt.treeContext, u = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - xt(i) - 1)).toString(32) + u;
    var g = Ot;
    if (g === null) throw Error(t(404));
    return u = Jt++, i = ":" + g.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return Pt(), u(i._source);
  }, useSyncExternalStore: function(i, u, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, Ot = null, at = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function yr(i) {
    return console.error(i), null;
  }
  function Lt() {
  }
  function xr(i, u, g, C, M, P, V, re, xe) {
    var Ce = [], Oe = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: C, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Oe, pingedTasks: Ce, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: M === void 0 ? yr : M, onAllReady: Lt, onShellReady: V === void 0 ? Lt : V, onShellError: Lt, onFatalError: Lt }, g = Wt(u, 0, null, g, !1, !1), g.parentFlushed = !0, i = er(u, i, null, g, Oe, he, null, Yt), Ce.push(i), u;
  }
  function er(i, u, g, C, M, P, V, re) {
    i.allPendingTasks++, g === null ? i.pendingRootTasks++ : g.pendingTasks++;
    var xe = { node: u, ping: function() {
      var Ce = i.pingedTasks;
      Ce.push(xe), Ce.length === 1 && Ir(i);
    }, blockedBoundary: g, blockedSegment: C, abortSet: M, legacyContext: P, context: V, treeContext: re };
    return M.add(xe), xe;
  }
  function Wt(i, u, g, C, M, P) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: C, boundary: g, lastPushedText: M, textEmbedded: P };
  }
  function x(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function w(i, u) {
    var g = i.onShellError;
    g(u), g = i.onFatalError, g(u), i.destination !== null ? (i.status = 2, i.destination.destroy(u)) : (i.status = 1, i.fatalError = u);
  }
  function O(i, u, g, C, M) {
    for (vt = {}, Tt = u, Jt = 0, i = g(C, M); dr; ) dr = !1, Jt = 0, pt += 1, qe = null, i = g(C, M);
    return Qt(), i;
  }
  function K(i, u, g, C) {
    var M = g.render(), P = C.childContextTypes;
    if (P != null) {
      var V = u.legacyContext;
      if (typeof g.getChildContext != "function") C = V;
      else {
        g = g.getChildContext();
        for (var re in g) if (!(re in P)) throw Error(t(108, Ge(C) || "Unknown", re));
        C = de({}, V, g);
      }
      u.legacyContext = C, Ae(i, u, M), u.legacyContext = V;
    } else Ae(i, u, M);
  }
  function Te(i, u) {
    if (i && i.defaultProps) {
      u = de({}, u), i = i.defaultProps;
      for (var g in i) u[g] === void 0 && (u[g] = i[g]);
      return u;
    }
    return u;
  }
  function _e(i, u, g, C, M) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      M = dt(g, u.legacyContext);
      var P = g.contextType;
      P = new g(C, typeof P == "object" && P !== null ? P._currentValue2 : M), ur(P, g, C, M), K(i, u, P, g);
    } else {
      P = dt(g, u.legacyContext), M = O(i, u, g, C, P);
      var V = Jt !== 0;
      if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) ur(M, g, C, P), K(i, u, M, g);
      else if (V) {
        C = u.treeContext, u.treeContext = Xt(C, 1, 0);
        try {
          Ae(i, u, M);
        } finally {
          u.treeContext = C;
        }
      } else Ae(i, u, M);
    }
    else if (typeof g == "string") {
      switch (M = u.blockedSegment, P = be(M.chunks, g, C, i.responseState, M.formatContext), M.lastPushedText = !1, V = M.formatContext, M.formatContext = G(V, g, C), $e(i, u, P), M.formatContext = V, g) {
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
          M.chunks.push("</", g, ">");
      }
      M.lastPushedText = !1;
    } else {
      switch (g) {
        case we:
        case ee:
        case q:
        case v:
        case H:
          Ae(i, u, C.children);
          return;
        case ae:
          Ae(i, u, C.children);
          return;
        case me:
          throw Error(t(343));
        case te:
          e: {
            g = u.blockedBoundary, M = u.blockedSegment, P = C.fallback, C = C.children, V = /* @__PURE__ */ new Set();
            var re = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: V, errorDigest: null }, xe = Wt(i, M.chunks.length, re, M.formatContext, !1, !1);
            M.children.push(xe), M.lastPushedText = !1;
            var Ce = Wt(i, 0, null, M.formatContext, !1, !1);
            Ce.parentFlushed = !0, u.blockedBoundary = re, u.blockedSegment = Ce;
            try {
              if ($e(
                i,
                u,
                C
              ), i.responseState.generateStaticMarkup || Ce.lastPushedText && Ce.textEmbedded && Ce.chunks.push("<!-- -->"), Ce.status = 1, Ye(re, Ce), re.pendingTasks === 0) break e;
            } catch (Oe) {
              Ce.status = 4, re.forceClientRender = !0, re.errorDigest = x(i, Oe);
            } finally {
              u.blockedBoundary = g, u.blockedSegment = M;
            }
            u = er(i, P, g, xe, V, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case le:
          if (C = O(i, u, g.render, C, M), Jt !== 0) {
            g = u.treeContext, u.treeContext = Xt(g, 1, 0);
            try {
              Ae(i, u, C);
            } finally {
              u.treeContext = g;
            }
          } else Ae(i, u, C);
          return;
        case Z:
          g = g.type, C = Te(g, C), _e(i, u, g, C, M);
          return;
        case ne:
          if (M = C.children, g = g._context, C = C.value, P = g._currentValue2, g._currentValue2 = C, V = Xe, Xe = C = { parent: V, depth: V === null ? 0 : V.depth + 1, context: g, parentValue: P, value: C }, u.context = C, Ae(i, u, M), i = Xe, i === null) throw Error(t(403));
          C = i.parentValue, i.context._currentValue2 = C === oe ? i.context._defaultValue : C, i = Xe = i.parent, u.context = i;
          return;
        case N:
          C = C.children, C = C(g._currentValue2), Ae(i, u, C);
          return;
        case se:
          M = g._init, g = M(g._payload), C = Te(g, C), _e(
            i,
            u,
            g,
            C,
            void 0
          );
          return;
      }
      throw Error(t(130, g == null ? g : typeof g, ""));
    }
  }
  function Ae(i, u, g) {
    if (u.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case B:
          _e(i, u, g.type, g.props, g.ref);
          return;
        case I:
          throw Error(t(257));
        case se:
          var C = g._init;
          g = C(g._payload), Ae(i, u, g);
          return;
      }
      if (W(g)) {
        We(i, u, g);
        return;
      }
      if (g === null || typeof g != "object" ? C = null : (C = fe && g[fe] || g["@@iterator"], C = typeof C == "function" ? C : null), C && (C = C.call(g))) {
        if (g = C.next(), !g.done) {
          var M = [];
          do
            M.push(g.value), g = C.next();
          while (!g.done);
          We(i, u, M);
        }
        return;
      }
      throw i = Object.prototype.toString.call(g), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : i));
    }
    typeof g == "string" ? (C = u.blockedSegment, C.lastPushedText = He(u.blockedSegment.chunks, g, i.responseState, C.lastPushedText)) : typeof g == "number" && (C = u.blockedSegment, C.lastPushedText = He(u.blockedSegment.chunks, "" + g, i.responseState, C.lastPushedText));
  }
  function We(i, u, g) {
    for (var C = g.length, M = 0; M < C; M++) {
      var P = u.treeContext;
      u.treeContext = Xt(P, C, M);
      try {
        $e(i, u, g[M]);
      } finally {
        u.treeContext = P;
      }
    }
  }
  function $e(i, u, g) {
    var C = u.blockedSegment.formatContext, M = u.legacyContext, P = u.context;
    try {
      return Ae(i, u, g);
    } catch (xe) {
      if (Qt(), typeof xe == "object" && xe !== null && typeof xe.then == "function") {
        g = xe;
        var V = u.blockedSegment, re = Wt(i, V.chunks.length, null, V.formatContext, V.lastPushedText, !0);
        V.children.push(re), V.lastPushedText = !1, i = er(i, u.node, u.blockedBoundary, re, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, g.then(i, i), u.blockedSegment.formatContext = C, u.legacyContext = M, u.context = P, ze(P);
      } else throw u.blockedSegment.formatContext = C, u.legacyContext = M, u.context = P, ze(P), xe;
    }
  }
  function ft(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Mt(this, u, i);
  }
  function tt(i, u, g) {
    var C = i.blockedBoundary;
    i.blockedSegment.status = 3, C === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (C.pendingTasks--, C.forceClientRender || (C.forceClientRender = !0, i = g === void 0 ? Error(t(432)) : g, C.errorDigest = u.onError(i), C.parentFlushed && u.clientRenderedBoundaries.push(C)), C.fallbackAbortableTasks.forEach(function(M) {
      return tt(M, u, g);
    }), C.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (C = u.onAllReady, C()));
  }
  function Ye(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var g = u.children[0];
      g.id = u.id, g.parentFlushed = !0, g.status === 1 && Ye(i, g);
    } else i.completedSegments.push(u);
  }
  function Mt(i, u, g) {
    if (u === null) {
      if (g.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = g;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Lt, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && Ye(u, g), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(ft, i), u.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (Ye(u, g), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Ir(i) {
    if (i.status !== 2) {
      var u = Xe, g = at.current;
      at.current = qt;
      var C = Ot;
      Ot = i.responseState;
      try {
        var M = i.pingedTasks, P;
        for (P = 0; P < M.length; P++) {
          var V = M[P], re = i, xe = V.blockedSegment;
          if (xe.status === 0) {
            ze(V.context);
            try {
              Ae(re, V, V.node), re.responseState.generateStaticMarkup || xe.lastPushedText && xe.textEmbedded && xe.chunks.push("<!-- -->"), V.abortSet.delete(V), xe.status = 1, Mt(re, V.blockedBoundary, xe);
            } catch (Ft) {
              if (Qt(), typeof Ft == "object" && Ft !== null && typeof Ft.then == "function") {
                var Ce = V.ping;
                Ft.then(Ce, Ce);
              } else {
                V.abortSet.delete(V), xe.status = 4;
                var Oe = V.blockedBoundary, st = Ft, tr = x(re, st);
                if (Oe === null ? w(re, st) : (Oe.pendingTasks--, Oe.forceClientRender || (Oe.forceClientRender = !0, Oe.errorDigest = tr, Oe.parentFlushed && re.clientRenderedBoundaries.push(Oe))), re.allPendingTasks--, re.allPendingTasks === 0) {
                  var rr = re.onAllReady;
                  rr();
                }
              }
            } finally {
            }
          }
        }
        M.splice(0, P), i.destination !== null && Xr(i, i.destination);
      } catch (Ft) {
        x(i, Ft), w(i, Ft);
      } finally {
        Ot = C, at.current = g, g === qt && ze(u);
      }
    }
  }
  function Pr(i, u, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var C = g.id = i.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, i = i.responseState, u.push('<template id="'), u.push(i.placeholderPrefix), i = C.toString(16), u.push(i), u.push('"></template>');
      case 1:
        g.status = 2;
        var M = !0;
        C = g.chunks;
        var P = 0;
        g = g.children;
        for (var V = 0; V < g.length; V++) {
          for (M = g[V]; P < M.index; P++) u.push(C[P]);
          M = Dr(i, u, M);
        }
        for (; P < C.length - 1; P++) u.push(C[P]);
        return P < C.length && (M = u.push(C[P])), M;
      default:
        throw Error(t(390));
    }
  }
  function Dr(i, u, g) {
    var C = g.boundary;
    if (C === null) return Pr(i, u, g);
    if (C.parentFlushed = !0, C.forceClientRender) return i.responseState.generateStaticMarkup || (C = C.errorDigest, u.push("<!--$!-->"), u.push("<template"), C && (u.push(' data-dgst="'), C = E(C), u.push(C), u.push('"')), u.push("></template>")), Pr(i, u, g), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
    if (0 < C.pendingTasks) {
      C.rootSegmentID = i.nextSegmentId++, 0 < C.completedSegments.length && i.partialBoundaries.push(C);
      var M = i.responseState, P = M.nextSuspenseID++;
      return M = M.boundaryPrefix + P.toString(16), C = C.id = M, ke(u, i.responseState, C), Pr(i, u, g), u.push("<!--/$-->");
    }
    if (C.byteSize > i.progressiveChunkSize) return C.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(C), ke(u, i.responseState, C.id), Pr(i, u, g), u.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || u.push("<!--$-->"), g = C.completedSegments, g.length !== 1) throw Error(t(391));
    return Dr(i, u, g[0]), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
  }
  function ln(i, u, g) {
    return ye(u, i.responseState, g.formatContext, g.id), Dr(i, u, g), Qe(u, g.formatContext);
  }
  function cn(i, u, g) {
    for (var C = g.completedSegments, M = 0; M < C.length; M++) un(i, u, g, C[M]);
    if (C.length = 0, i = i.responseState, C = g.id, g = g.rootSegmentID, u.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? u.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), C === null) throw Error(t(395));
    return g = g.toString(16), u.push(C), u.push('","'), u.push(i.segmentPrefix), u.push(g), u.push('")<\/script>');
  }
  function un(i, u, g, C) {
    if (C.status === 2) return !0;
    var M = C.id;
    if (M === -1) {
      if ((C.id = g.rootSegmentID) === -1) throw Error(t(392));
      return ln(i, u, C);
    }
    return ln(i, u, C), i = i.responseState, u.push(i.startInlineScript), i.sentCompleteSegmentFunction ? u.push('$RS("') : (i.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(i.segmentPrefix), M = M.toString(16), u.push(M), u.push('","'), u.push(i.placeholderPrefix), u.push(M), u.push('")<\/script>');
  }
  function Xr(i, u) {
    try {
      var g = i.completedRootSegment;
      if (g !== null && i.pendingRootTasks === 0) {
        Dr(i, u, g), i.completedRootSegment = null;
        var C = i.responseState.bootstrapChunks;
        for (g = 0; g < C.length - 1; g++) u.push(C[g]);
        g < C.length && u.push(C[g]);
      }
      var M = i.clientRenderedBoundaries, P;
      for (P = 0; P < M.length; P++) {
        var V = M[P];
        C = u;
        var re = i.responseState, xe = V.id, Ce = V.errorDigest, Oe = V.errorMessage, st = V.errorComponentStack;
        if (C.push(re.startInlineScript), re.sentClientRenderFunction ? C.push('$RX("') : (re.sentClientRenderFunction = !0, C.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), xe === null) throw Error(t(395));
        if (C.push(xe), C.push('"'), Ce || Oe || st) {
          C.push(",");
          var tr = Ee(Ce || "");
          C.push(tr);
        }
        if (Oe || st) {
          C.push(",");
          var rr = Ee(Oe || "");
          C.push(rr);
        }
        if (st) {
          C.push(",");
          var Ft = Ee(st);
          C.push(Ft);
        }
        if (!C.push(")<\/script>")) {
          i.destination = null, P++, M.splice(0, P);
          return;
        }
      }
      M.splice(0, P);
      var Lr = i.completedBoundaries;
      for (P = 0; P < Lr.length; P++) if (!cn(i, u, Lr[P])) {
        i.destination = null, P++, Lr.splice(0, P);
        return;
      }
      Lr.splice(0, P);
      var vr = i.partialBoundaries;
      for (P = 0; P < vr.length; P++) {
        var pn = vr[P];
        e: {
          M = i, V = u;
          var Mr = pn.completedSegments;
          for (re = 0; re < Mr.length; re++) if (!un(M, V, pn, Mr[re])) {
            re++, Mr.splice(0, re);
            var Gn = !1;
            break e;
          }
          Mr.splice(0, re), Gn = !0;
        }
        if (!Gn) {
          i.destination = null, P++, vr.splice(0, P);
          return;
        }
      }
      vr.splice(0, P);
      var Ar = i.completedBoundaries;
      for (P = 0; P < Ar.length; P++) if (!cn(i, u, Ar[P])) {
        i.destination = null, P++, Ar.splice(0, P);
        return;
      }
      Ar.splice(0, P);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Bn(i, u) {
    try {
      var g = i.abortableTasks;
      g.forEach(function(C) {
        return tt(C, i, u);
      }), g.clear(), i.destination !== null && Xr(i, i.destination);
    } catch (C) {
      x(i, C), w(i, C);
    }
  }
  function Vn() {
  }
  function dn(i, u, g, C) {
    var M = !1, P = null, V = "", re = { push: function(Ce) {
      return Ce !== null && (V += Ce), !0;
    }, destroy: function(Ce) {
      M = !0, P = Ce;
    } }, xe = !1;
    if (i = xr(i, Fe(g, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Vn, void 0, function() {
      xe = !0;
    }), Ir(i), Bn(i, C), i.status === 1) i.status = 2, re.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = re;
      try {
        Xr(i, re);
      } catch (Ce) {
        x(i, Ce), w(i, Ce);
      }
    }
    if (M) throw P;
    if (!xe) throw Error(t(426));
    return V;
  }
  return $r.renderToNodeStream = function() {
    throw Error(t(207));
  }, $r.renderToStaticMarkup = function(i, u) {
    return dn(i, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, $r.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, $r.renderToString = function(i, u) {
    return dn(i, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, $r.version = "18.3.1", $r;
}
var la = {}, is;
function ad() {
  if (is) return la;
  is = 1;
  var e = mt;
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
  function p(o) {
    r && 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var m = new TextEncoder();
  function b(o) {
    return m.encode(o);
  }
  function f(o) {
    return m.encode(o);
  }
  function k(o, c) {
    typeof o.error == "function" ? o.error(c) : o.close();
  }
  var A = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, F = {}, E = {};
  function S(o) {
    return A.call(E, o) ? !0 : A.call(F, o) ? !1 : j.test(o) ? E[o] = !0 : (F[o] = !0, !1);
  }
  function R(o, c, h, T, L, D, Y) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = T, this.attributeNamespace = L, this.mustUseProperty = h, this.propertyName = o, this.type = c, this.sanitizeURL = D, this.removeEmptyString = Y;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    W[o] = new R(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var c = o[0];
    W[c] = new R(c, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    W[o] = new R(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    W[o] = new R(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    W[o] = new R(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    W[o] = new R(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    W[o] = new R(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    W[o] = new R(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    W[o] = new R(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var z = /[\-:]([a-z])/g;
  function G(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var c = o.replace(
      z,
      G
    );
    W[c] = new R(c, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var c = o.replace(z, G);
    W[c] = new R(c, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var c = o.replace(z, G);
    W[c] = new R(c, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    W[o] = new R(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    W[o] = new R(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var $ = {
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
  }, y = ["Webkit", "ms", "Moz", "O"];
  Object.keys($).forEach(function(o) {
    y.forEach(function(c) {
      c = c + o.charAt(0).toUpperCase() + o.substring(1), $[c] = $[o];
    });
  });
  var J = /["'&<>]/;
  function ce(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var c = J.exec(o);
    if (c) {
      var h = "", T, L = 0;
      for (T = c.index; T < o.length; T++) {
        switch (o.charCodeAt(T)) {
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
        L !== T && (h += o.substring(L, T)), L = T + 1, h += c;
      }
      o = L !== T ? h + o.substring(L, T) : h;
    }
    return o;
  }
  var Se = /([A-Z])/g, je = /^ms-/, Pe = Array.isArray, ie = f("<script>"), ue = f("<\/script>"), be = f('<script src="'), ke = f('<script type="module" src="'), ye = f('" async=""><\/script>'), Qe = /(<\/|<)(s)(cript)/gi;
  function Re(o, c, h, T) {
    return "" + c + (h === "s" ? "\\u0073" : "\\u0053") + T;
  }
  function Ee(o, c, h, T, L) {
    o = o === void 0 ? "" : o, c = c === void 0 ? ie : f('<script nonce="' + ce(c) + '">');
    var D = [];
    if (h !== void 0 && D.push(c, b(("" + h).replace(Qe, Re)), ue), T !== void 0) for (h = 0; h < T.length; h++) D.push(be, b(ce(T[h])), ye);
    if (L !== void 0) for (T = 0; T < L.length; T++) D.push(ke, b(ce(L[T])), ye);
    return { bootstrapChunks: D, startInlineScript: c, placeholderPrefix: f(o + "P:"), segmentPrefix: f(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Fe(o, c) {
    return { insertionMode: o, selectedValue: c };
  }
  function He(o) {
    return Fe(o === "http://www.w3.org/2000/svg" ? 2 : o === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function de(o, c, h) {
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
    return 4 <= o.insertionMode || o.insertionMode === 0 ? Fe(1, null) : o;
  }
  var B = f("<!-- -->");
  function I(o, c, h, T) {
    return c === "" ? T : (T && o.push(B), o.push(b(ce(c))), !0);
  }
  var H = /* @__PURE__ */ new Map(), q = f(' style="'), v = f(":"), ne = f(";");
  function N(o, c, h) {
    if (typeof h != "object") throw Error(t(62));
    c = !0;
    for (var T in h) if (A.call(h, T)) {
      var L = h[T];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (T.indexOf("--") === 0) {
          var D = b(ce(T));
          L = b(ce(("" + L).trim()));
        } else {
          D = T;
          var Y = H.get(D);
          Y !== void 0 || (Y = f(ce(D.replace(Se, "-$1").toLowerCase().replace(je, "-ms-"))), H.set(D, Y)), D = Y, L = typeof L == "number" ? L === 0 || A.call($, T) ? b("" + L) : b(L + "px") : b(ce(("" + L).trim()));
        }
        c ? (c = !1, o.push(q, D, v, L)) : o.push(ne, D, v, L);
      }
    }
    c || o.push(ae);
  }
  var le = f(" "), te = f('="'), ae = f('"'), Z = f('=""');
  function se(o, c, h, T) {
    switch (h) {
      case "style":
        N(o, c, T);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (c = W.hasOwnProperty(h) ? W[h] : null, c !== null) {
        switch (typeof T) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (h = b(c.attributeName), c.type) {
          case 3:
            T && o.push(le, h, Z);
            break;
          case 4:
            T === !0 ? o.push(le, h, Z) : T !== !1 && o.push(le, h, te, b(ce(T)), ae);
            break;
          case 5:
            isNaN(T) || o.push(le, h, te, b(ce(T)), ae);
            break;
          case 6:
            !isNaN(T) && 1 <= T && o.push(le, h, te, b(ce(T)), ae);
            break;
          default:
            c.sanitizeURL && (T = "" + T), o.push(le, h, te, b(ce(T)), ae);
        }
      } else if (S(h)) {
        switch (typeof T) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = h.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        o.push(le, b(h), te, b(ce(T)), ae);
      }
    }
  }
  var me = f(">"), ee = f("/>");
  function we(o, c, h) {
    if (c != null) {
      if (h != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && o.push(b("" + c));
    }
  }
  function oe(o) {
    var c = "";
    return e.Children.forEach(o, function(h) {
      h != null && (c += h);
    }), c;
  }
  var fe = f(' selected=""');
  function Ge(o, c, h, T) {
    o.push(Ne(h));
    var L = h = null, D;
    for (D in c) if (A.call(c, D)) {
      var Y = c[D];
      if (Y != null) switch (D) {
        case "children":
          h = Y;
          break;
        case "dangerouslySetInnerHTML":
          L = Y;
          break;
        default:
          se(o, T, D, Y);
      }
    }
    return o.push(me), we(o, L, h), typeof h == "string" ? (o.push(b(ce(h))), null) : h;
  }
  var he = f(`
`), dt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Xe = /* @__PURE__ */ new Map();
  function Ne(o) {
    var c = Xe.get(o);
    if (c === void 0) {
      if (!dt.test(o)) throw Error(t(65, o));
      c = f("<" + o), Xe.set(o, c);
    }
    return c;
  }
  var X = f("<!DOCTYPE html>");
  function pe(o, c, h, T, L) {
    switch (c) {
      case "select":
        o.push(Ne("select"));
        var D = null, Y = null;
        for (Ie in h) if (A.call(h, Ie)) {
          var Q = h[Ie];
          if (Q != null) switch (Ie) {
            case "children":
              D = Q;
              break;
            case "dangerouslySetInnerHTML":
              Y = Q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              se(o, T, Ie, Q);
          }
        }
        return o.push(me), we(o, Y, D), D;
      case "option":
        Y = L.selectedValue, o.push(Ne("option"));
        var ve = Q = null, De = null, Ie = null;
        for (D in h) if (A.call(h, D)) {
          var it = h[D];
          if (it != null) switch (D) {
            case "children":
              Q = it;
              break;
            case "selected":
              De = it;
              break;
            case "dangerouslySetInnerHTML":
              Ie = it;
              break;
            case "value":
              ve = it;
            default:
              se(o, T, D, it);
          }
        }
        if (Y != null) if (h = ve !== null ? "" + ve : oe(Q), Pe(Y)) {
          for (T = 0; T < Y.length; T++)
            if ("" + Y[T] === h) {
              o.push(fe);
              break;
            }
        } else "" + Y === h && o.push(fe);
        else De && o.push(fe);
        return o.push(me), we(o, Ie, Q), Q;
      case "textarea":
        o.push(Ne("textarea")), Ie = Y = D = null;
        for (Q in h) if (A.call(h, Q) && (ve = h[Q], ve != null)) switch (Q) {
          case "children":
            Ie = ve;
            break;
          case "value":
            D = ve;
            break;
          case "defaultValue":
            Y = ve;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            se(o, T, Q, ve);
        }
        if (D === null && Y !== null && (D = Y), o.push(me), Ie != null) {
          if (D != null) throw Error(t(92));
          if (Pe(Ie) && 1 < Ie.length) throw Error(t(93));
          D = "" + Ie;
        }
        return typeof D == "string" && D[0] === `
` && o.push(he), D !== null && o.push(b(ce("" + D))), null;
      case "input":
        o.push(Ne("input")), ve = Ie = Q = D = null;
        for (Y in h) if (A.call(h, Y) && (De = h[Y], De != null)) switch (Y) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ve = De;
            break;
          case "defaultValue":
            Q = De;
            break;
          case "checked":
            Ie = De;
            break;
          case "value":
            D = De;
            break;
          default:
            se(o, T, Y, De);
        }
        return Ie !== null ? se(
          o,
          T,
          "checked",
          Ie
        ) : ve !== null && se(o, T, "checked", ve), D !== null ? se(o, T, "value", D) : Q !== null && se(o, T, "value", Q), o.push(ee), null;
      case "menuitem":
        o.push(Ne("menuitem"));
        for (var Ut in h) if (A.call(h, Ut) && (D = h[Ut], D != null)) switch (Ut) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            se(o, T, Ut, D);
        }
        return o.push(me), null;
      case "title":
        o.push(Ne("title")), D = null;
        for (it in h) if (A.call(h, it) && (Y = h[it], Y != null)) switch (it) {
          case "children":
            D = Y;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            se(o, T, it, Y);
        }
        return o.push(me), D;
      case "listing":
      case "pre":
        o.push(Ne(c)), Y = D = null;
        for (ve in h) if (A.call(h, ve) && (Q = h[ve], Q != null)) switch (ve) {
          case "children":
            D = Q;
            break;
          case "dangerouslySetInnerHTML":
            Y = Q;
            break;
          default:
            se(o, T, ve, Q);
        }
        if (o.push(me), Y != null) {
          if (D != null) throw Error(t(60));
          if (typeof Y != "object" || !("__html" in Y)) throw Error(t(61));
          h = Y.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? o.push(he, b(h)) : o.push(b("" + h)));
        }
        return typeof D == "string" && D[0] === `
` && o.push(he), D;
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
        o.push(Ne(c));
        for (var nr in h) if (A.call(h, nr) && (D = h[nr], D != null)) switch (nr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            se(o, T, nr, D);
        }
        return o.push(ee), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ge(o, h, c, T);
      case "html":
        return L.insertionMode === 0 && o.push(X), Ge(o, h, c, T);
      default:
        if (c.indexOf("-") === -1 && typeof h.is != "string") return Ge(o, h, c, T);
        o.push(Ne(c)), Y = D = null;
        for (De in h) if (A.call(h, De) && (Q = h[De], Q != null)) switch (De) {
          case "children":
            D = Q;
            break;
          case "dangerouslySetInnerHTML":
            Y = Q;
            break;
          case "style":
            N(o, T, Q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            S(De) && typeof Q != "function" && typeof Q != "symbol" && o.push(le, b(De), te, b(ce(Q)), ae);
        }
        return o.push(me), we(o, Y, D), D;
    }
  }
  var et = f("</"), Ue = f(">"), ze = f('<template id="'), cr = f('"></template>'), ur = f("<!--$-->"), Yt = f('<!--$?--><template id="'), Xt = f('"></template>'), xt = f("<!--$!-->"), It = f("<!--/$-->"), nt = f("<template"), yt = f('"'), Zt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Kt = f("></template>");
  function vt(o, c, h) {
    if (a(o, Yt), h === null) throw Error(t(395));
    return a(o, h), s(o, Xt);
  }
  var Tt = f('<div hidden id="'), wt = f('">'), qe = f("</div>"), ht = f('<svg aria-hidden="true" style="display:none" id="'), dr = f('">'), Jt = f("</svg>"), ge = f('<math aria-hidden="true" style="display:none" id="'), pt = f('">'), Pt = f("</math>"), pr = f('<table hidden id="'), Dt = f('">'), Qt = f("</table>"), fr = f('<table hidden><tbody id="'), _r = f('">'), ot = f("</tbody></table>"), gt = f('<table hidden><tr id="'), br = f('">'), zt = f("</tr></table>"), qt = f('<table hidden><colgroup id="'), Ot = f('">'), at = f("</colgroup></table>");
  function yr(o, c, h, T) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return a(o, Tt), a(o, c.segmentPrefix), a(o, b(T.toString(16))), s(o, wt);
      case 2:
        return a(o, ht), a(o, c.segmentPrefix), a(o, b(T.toString(16))), s(o, dr);
      case 3:
        return a(o, ge), a(o, c.segmentPrefix), a(o, b(T.toString(16))), s(o, pt);
      case 4:
        return a(o, pr), a(o, c.segmentPrefix), a(o, b(T.toString(16))), s(o, Dt);
      case 5:
        return a(o, fr), a(o, c.segmentPrefix), a(o, b(T.toString(16))), s(o, _r);
      case 6:
        return a(o, gt), a(o, c.segmentPrefix), a(o, b(T.toString(16))), s(o, br);
      case 7:
        return a(
          o,
          qt
        ), a(o, c.segmentPrefix), a(o, b(T.toString(16))), s(o, Ot);
      default:
        throw Error(t(397));
    }
  }
  function Lt(o, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(o, qe);
      case 2:
        return s(o, Jt);
      case 3:
        return s(o, Pt);
      case 4:
        return s(o, Qt);
      case 5:
        return s(o, ot);
      case 6:
        return s(o, zt);
      case 7:
        return s(o, at);
      default:
        throw Error(t(397));
    }
  }
  var xr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), er = f('$RS("'), Wt = f('","'), x = f('")<\/script>'), w = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), O = f('$RC("'), K = f('","'), Te = f('")<\/script>'), _e = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ae = f('$RX("'), We = f('"'), $e = f(")<\/script>"), ft = f(","), tt = /[<\u2028\u2029]/g;
  function Ye(o) {
    return JSON.stringify(o).replace(tt, function(c) {
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
  var Mt = Object.assign, Ir = Symbol.for("react.element"), Pr = Symbol.for("react.portal"), Dr = Symbol.for("react.fragment"), ln = Symbol.for("react.strict_mode"), cn = Symbol.for("react.profiler"), un = Symbol.for("react.provider"), Xr = Symbol.for("react.context"), Bn = Symbol.for("react.forward_ref"), Vn = Symbol.for("react.suspense"), dn = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), C = Symbol.for("react.debug_trace_mode"), M = Symbol.for("react.legacy_hidden"), P = Symbol.for("react.default_value"), V = Symbol.iterator;
  function re(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case Dr:
        return "Fragment";
      case Pr:
        return "Portal";
      case cn:
        return "Profiler";
      case ln:
        return "StrictMode";
      case Vn:
        return "Suspense";
      case dn:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case Xr:
        return (o.displayName || "Context") + ".Consumer";
      case un:
        return (o._context.displayName || "Context") + ".Provider";
      case Bn:
        var c = o.render;
        return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case i:
        return c = o.displayName || null, c !== null ? c : re(o.type) || "Memo";
      case u:
        c = o._payload, o = o._init;
        try {
          return re(o(c));
        } catch {
        }
    }
    return null;
  }
  var xe = {};
  function Ce(o, c) {
    if (o = o.contextTypes, !o) return xe;
    var h = {}, T;
    for (T in o) h[T] = c[T];
    return h;
  }
  var Oe = null;
  function st(o, c) {
    if (o !== c) {
      o.context._currentValue = o.parentValue, o = o.parent;
      var h = c.parent;
      if (o === null) {
        if (h !== null) throw Error(t(401));
      } else {
        if (h === null) throw Error(t(401));
        st(o, h);
      }
      c.context._currentValue = c.value;
    }
  }
  function tr(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && tr(o);
  }
  function rr(o) {
    var c = o.parent;
    c !== null && rr(c), o.context._currentValue = o.value;
  }
  function Ft(o, c) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === c.depth ? st(o, c) : Ft(o, c);
  }
  function Lr(o, c) {
    var h = c.parent;
    if (h === null) throw Error(t(402));
    o.depth === h.depth ? st(o, h) : Lr(o, h), c.context._currentValue = c.value;
  }
  function vr(o) {
    var c = Oe;
    c !== o && (c === null ? rr(o) : o === null ? tr(c) : c.depth === o.depth ? st(c, o) : c.depth > o.depth ? Ft(c, o) : Lr(c, o), Oe = o);
  }
  var pn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, c) {
    o = o._reactInternals, o.queue !== null && o.queue.push(c);
  }, enqueueReplaceState: function(o, c) {
    o = o._reactInternals, o.replace = !0, o.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Mr(o, c, h, T) {
    var L = o.state !== void 0 ? o.state : null;
    o.updater = pn, o.props = h, o.state = L;
    var D = { queue: [], replace: !1 };
    o._reactInternals = D;
    var Y = c.contextType;
    if (o.context = typeof Y == "object" && Y !== null ? Y._currentValue : T, Y = c.getDerivedStateFromProps, typeof Y == "function" && (Y = Y(h, L), L = Y == null ? L : Mt({}, L, Y), o.state = L), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (c = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), c !== o.state && pn.enqueueReplaceState(o, o.state, null), D.queue !== null && 0 < D.queue.length) if (c = D.queue, Y = D.replace, D.queue = null, D.replace = !1, Y && c.length === 1) o.state = c[0];
    else {
      for (D = Y ? c[0] : o.state, L = !0, Y = Y ? 1 : 0; Y < c.length; Y++) {
        var Q = c[Y];
        Q = typeof Q == "function" ? Q.call(o, D, h, T) : Q, Q != null && (L ? (L = !1, D = Mt({}, D, Q)) : Mt(D, Q));
      }
      o.state = D;
    }
    else D.queue = null;
  }
  var Gn = { id: 1, overflow: "" };
  function Ar(o, c, h) {
    var T = o.id;
    o = o.overflow;
    var L = 32 - Yn(T) - 1;
    T &= ~(1 << L), h += 1;
    var D = 32 - Yn(c) + L;
    if (30 < D) {
      var Y = L - L % 5;
      return D = (T & (1 << Y) - 1).toString(32), T >>= Y, L -= Y, { id: 1 << 32 - Yn(c) + L | h << L | T, overflow: D + o };
    }
    return { id: 1 << D | h << L | T, overflow: o };
  }
  var Yn = Math.clz32 ? Math.clz32 : ou, au = Math.log, iu = Math.LN2;
  function ou(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (au(o) / iu | 0) | 0;
  }
  function su(o, c) {
    return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
  }
  var lu = typeof Object.is == "function" ? Object.is : su, wr = null, Ma = null, Xn = null, rt = null, fn = !1, Zn = !1, mn = 0, Er = null, Kn = 0;
  function Fr() {
    if (wr === null) throw Error(t(321));
    return wr;
  }
  function yo() {
    if (0 < Kn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Fa() {
    return rt === null ? Xn === null ? (fn = !1, Xn = rt = yo()) : (fn = !0, rt = Xn) : rt.next === null ? (fn = !1, rt = rt.next = yo()) : (fn = !0, rt = rt.next), rt;
  }
  function $a() {
    Ma = wr = null, Zn = !1, Xn = null, Kn = 0, rt = Er = null;
  }
  function xo(o, c) {
    return typeof c == "function" ? c(o) : c;
  }
  function vo(o, c, h) {
    if (wr = Fr(), rt = Fa(), fn) {
      var T = rt.queue;
      if (c = T.dispatch, Er !== null && (h = Er.get(T), h !== void 0)) {
        Er.delete(T), T = rt.memoizedState;
        do
          T = o(T, h.action), h = h.next;
        while (h !== null);
        return rt.memoizedState = T, [T, c];
      }
      return [rt.memoizedState, c];
    }
    return o = o === xo ? typeof c == "function" ? c() : c : h !== void 0 ? h(c) : c, rt.memoizedState = o, o = rt.queue = { last: null, dispatch: null }, o = o.dispatch = cu.bind(null, wr, o), [rt.memoizedState, o];
  }
  function wo(o, c) {
    if (wr = Fr(), rt = Fa(), c = c === void 0 ? null : c, rt !== null) {
      var h = rt.memoizedState;
      if (h !== null && c !== null) {
        var T = h[1];
        e: if (T === null) T = !1;
        else {
          for (var L = 0; L < T.length && L < c.length; L++) if (!lu(c[L], T[L])) {
            T = !1;
            break e;
          }
          T = !0;
        }
        if (T) return h[0];
      }
    }
    return o = o(), rt.memoizedState = [o, c], o;
  }
  function cu(o, c, h) {
    if (25 <= Kn) throw Error(t(301));
    if (o === wr) if (Zn = !0, o = { action: h, next: null }, Er === null && (Er = /* @__PURE__ */ new Map()), h = Er.get(c), h === void 0) Er.set(c, o);
    else {
      for (c = h; c.next !== null; ) c = c.next;
      c.next = o;
    }
  }
  function uu() {
    throw Error(t(394));
  }
  function Jn() {
  }
  var So = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return Fr(), o._currentValue;
  }, useMemo: wo, useReducer: vo, useRef: function(o) {
    wr = Fr(), rt = Fa();
    var c = rt.memoizedState;
    return c === null ? (o = { current: o }, rt.memoizedState = o) : c;
  }, useState: function(o) {
    return vo(xo, o);
  }, useInsertionEffect: Jn, useLayoutEffect: function() {
  }, useCallback: function(o, c) {
    return wo(function() {
      return o;
    }, c);
  }, useImperativeHandle: Jn, useEffect: Jn, useDebugValue: Jn, useDeferredValue: function(o) {
    return Fr(), o;
  }, useTransition: function() {
    return Fr(), [!1, uu];
  }, useId: function() {
    var o = Ma.treeContext, c = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Yn(o) - 1)).toString(32) + c;
    var h = Qn;
    if (h === null) throw Error(t(404));
    return c = mn++, o = ":" + h.idPrefix + "R" + o, 0 < c && (o += "H" + c.toString(32)), o + ":";
  }, useMutableSource: function(o, c) {
    return Fr(), c(o._source);
  }, useSyncExternalStore: function(o, c, h) {
    if (h === void 0) throw Error(t(407));
    return h();
  } }, Qn = null, Ua = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function du(o) {
    return console.error(o), null;
  }
  function hn() {
  }
  function pu(o, c, h, T, L, D, Y, Q, ve) {
    var De = [], Ie = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: T === void 0 ? 12800 : T, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ie, pingedTasks: De, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? du : L, onAllReady: D === void 0 ? hn : D, onShellReady: Y === void 0 ? hn : Y, onShellError: Q === void 0 ? hn : Q, onFatalError: ve === void 0 ? hn : ve }, h = ea(c, 0, null, h, !1, !1), h.parentFlushed = !0, o = za(c, o, null, h, Ie, xe, null, Gn), De.push(o), c;
  }
  function za(o, c, h, T, L, D, Y, Q) {
    o.allPendingTasks++, h === null ? o.pendingRootTasks++ : h.pendingTasks++;
    var ve = { node: c, ping: function() {
      var De = o.pingedTasks;
      De.push(ve), De.length === 1 && jo(o);
    }, blockedBoundary: h, blockedSegment: T, abortSet: L, legacyContext: D, context: Y, treeContext: Q };
    return L.add(ve), ve;
  }
  function ea(o, c, h, T, L, D) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: T, boundary: h, lastPushedText: L, textEmbedded: D };
  }
  function gn(o, c) {
    if (o = o.onError(c), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function ta(o, c) {
    var h = o.onShellError;
    h(c), h = o.onFatalError, h(c), o.destination !== null ? (o.status = 2, k(o.destination, c)) : (o.status = 1, o.fatalError = c);
  }
  function ko(o, c, h, T, L) {
    for (wr = {}, Ma = c, mn = 0, o = h(T, L); Zn; ) Zn = !1, mn = 0, Kn += 1, rt = null, o = h(T, L);
    return $a(), o;
  }
  function To(o, c, h, T) {
    var L = h.render(), D = T.childContextTypes;
    if (D != null) {
      var Y = c.legacyContext;
      if (typeof h.getChildContext != "function") T = Y;
      else {
        h = h.getChildContext();
        for (var Q in h) if (!(Q in D)) throw Error(t(108, re(T) || "Unknown", Q));
        T = Mt({}, Y, h);
      }
      c.legacyContext = T, $t(o, c, L), c.legacyContext = Y;
    } else $t(o, c, L);
  }
  function Co(o, c) {
    if (o && o.defaultProps) {
      c = Mt({}, c), o = o.defaultProps;
      for (var h in o) c[h] === void 0 && (c[h] = o[h]);
      return c;
    }
    return c;
  }
  function qa(o, c, h, T, L) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      L = Ce(h, c.legacyContext);
      var D = h.contextType;
      D = new h(T, typeof D == "object" && D !== null ? D._currentValue : L), Mr(D, h, T, L), To(o, c, D, h);
    } else {
      D = Ce(h, c.legacyContext), L = ko(o, c, h, T, D);
      var Y = mn !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) Mr(L, h, T, D), To(o, c, L, h);
      else if (Y) {
        T = c.treeContext, c.treeContext = Ar(T, 1, 0);
        try {
          $t(o, c, L);
        } finally {
          c.treeContext = T;
        }
      } else $t(o, c, L);
    }
    else if (typeof h == "string") {
      switch (L = c.blockedSegment, D = pe(L.chunks, h, T, o.responseState, L.formatContext), L.lastPushedText = !1, Y = L.formatContext, L.formatContext = de(Y, h, T), Wa(o, c, D), L.formatContext = Y, h) {
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
          L.chunks.push(et, b(h), Ue);
      }
      L.lastPushedText = !1;
    } else {
      switch (h) {
        case M:
        case C:
        case ln:
        case cn:
        case Dr:
          $t(o, c, T.children);
          return;
        case dn:
          $t(o, c, T.children);
          return;
        case g:
          throw Error(t(343));
        case Vn:
          e: {
            h = c.blockedBoundary, L = c.blockedSegment, D = T.fallback, T = T.children, Y = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Y, errorDigest: null }, ve = ea(o, L.chunks.length, Q, L.formatContext, !1, !1);
            L.children.push(ve), L.lastPushedText = !1;
            var De = ea(o, 0, null, L.formatContext, !1, !1);
            De.parentFlushed = !0, c.blockedBoundary = Q, c.blockedSegment = De;
            try {
              if (Wa(
                o,
                c,
                T
              ), De.lastPushedText && De.textEmbedded && De.chunks.push(B), De.status = 1, ra(Q, De), Q.pendingTasks === 0) break e;
            } catch (Ie) {
              De.status = 4, Q.forceClientRender = !0, Q.errorDigest = gn(o, Ie);
            } finally {
              c.blockedBoundary = h, c.blockedSegment = L;
            }
            c = za(o, D, h, ve, Y, c.legacyContext, c.context, c.treeContext), o.pingedTasks.push(c);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case Bn:
          if (T = ko(o, c, h.render, T, L), mn !== 0) {
            h = c.treeContext, c.treeContext = Ar(h, 1, 0);
            try {
              $t(o, c, T);
            } finally {
              c.treeContext = h;
            }
          } else $t(o, c, T);
          return;
        case i:
          h = h.type, T = Co(h, T), qa(o, c, h, T, L);
          return;
        case un:
          if (L = T.children, h = h._context, T = T.value, D = h._currentValue, h._currentValue = T, Y = Oe, Oe = T = { parent: Y, depth: Y === null ? 0 : Y.depth + 1, context: h, parentValue: D, value: T }, c.context = T, $t(o, c, L), o = Oe, o === null) throw Error(t(403));
          T = o.parentValue, o.context._currentValue = T === P ? o.context._defaultValue : T, o = Oe = o.parent, c.context = o;
          return;
        case Xr:
          T = T.children, T = T(h._currentValue), $t(o, c, T);
          return;
        case u:
          L = h._init, h = L(h._payload), T = Co(h, T), qa(o, c, h, T, void 0);
          return;
      }
      throw Error(t(
        130,
        h == null ? h : typeof h,
        ""
      ));
    }
  }
  function $t(o, c, h) {
    if (c.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ir:
          qa(o, c, h.type, h.props, h.ref);
          return;
        case Pr:
          throw Error(t(257));
        case u:
          var T = h._init;
          h = T(h._payload), $t(o, c, h);
          return;
      }
      if (Pe(h)) {
        _o(o, c, h);
        return;
      }
      if (h === null || typeof h != "object" ? T = null : (T = V && h[V] || h["@@iterator"], T = typeof T == "function" ? T : null), T && (T = T.call(h))) {
        if (h = T.next(), !h.done) {
          var L = [];
          do
            L.push(h.value), h = T.next();
          while (!h.done);
          _o(o, c, L);
        }
        return;
      }
      throw o = Object.prototype.toString.call(h), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : o));
    }
    typeof h == "string" ? (T = c.blockedSegment, T.lastPushedText = I(c.blockedSegment.chunks, h, o.responseState, T.lastPushedText)) : typeof h == "number" && (T = c.blockedSegment, T.lastPushedText = I(c.blockedSegment.chunks, "" + h, o.responseState, T.lastPushedText));
  }
  function _o(o, c, h) {
    for (var T = h.length, L = 0; L < T; L++) {
      var D = c.treeContext;
      c.treeContext = Ar(D, T, L);
      try {
        Wa(o, c, h[L]);
      } finally {
        c.treeContext = D;
      }
    }
  }
  function Wa(o, c, h) {
    var T = c.blockedSegment.formatContext, L = c.legacyContext, D = c.context;
    try {
      return $t(o, c, h);
    } catch (ve) {
      if ($a(), typeof ve == "object" && ve !== null && typeof ve.then == "function") {
        h = ve;
        var Y = c.blockedSegment, Q = ea(o, Y.chunks.length, null, Y.formatContext, Y.lastPushedText, !0);
        Y.children.push(Q), Y.lastPushedText = !1, o = za(o, c.node, c.blockedBoundary, Q, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, h.then(o, o), c.blockedSegment.formatContext = T, c.legacyContext = L, c.context = D, vr(D);
      } else throw c.blockedSegment.formatContext = T, c.legacyContext = L, c.context = D, vr(D), ve;
    }
  }
  function fu(o) {
    var c = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Eo(this, c, o);
  }
  function Ao(o, c, h) {
    var T = o.blockedBoundary;
    o.blockedSegment.status = 3, T === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (T.pendingTasks--, T.forceClientRender || (T.forceClientRender = !0, o = h === void 0 ? Error(t(432)) : h, T.errorDigest = c.onError(o), T.parentFlushed && c.clientRenderedBoundaries.push(T)), T.fallbackAbortableTasks.forEach(function(L) {
      return Ao(L, c, h);
    }), T.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (T = c.onAllReady, T()));
  }
  function ra(o, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var h = c.children[0];
      h.id = c.id, h.parentFlushed = !0, h.status === 1 && ra(o, h);
    } else o.completedSegments.push(c);
  }
  function Eo(o, c, h) {
    if (c === null) {
      if (h.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = h;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = hn, c = o.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && ra(c, h), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(fu, o), c.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (ra(c, h), c.completedSegments.length === 1 && c.parentFlushed && o.partialBoundaries.push(c)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function jo(o) {
    if (o.status !== 2) {
      var c = Oe, h = Ua.current;
      Ua.current = So;
      var T = Qn;
      Qn = o.responseState;
      try {
        var L = o.pingedTasks, D;
        for (D = 0; D < L.length; D++) {
          var Y = L[D], Q = o, ve = Y.blockedSegment;
          if (ve.status === 0) {
            vr(Y.context);
            try {
              $t(Q, Y, Y.node), ve.lastPushedText && ve.textEmbedded && ve.chunks.push(B), Y.abortSet.delete(Y), ve.status = 1, Eo(Q, Y.blockedBoundary, ve);
            } catch (ar) {
              if ($a(), typeof ar == "object" && ar !== null && typeof ar.then == "function") {
                var De = Y.ping;
                ar.then(De, De);
              } else {
                Y.abortSet.delete(Y), ve.status = 4;
                var Ie = Y.blockedBoundary, it = ar, Ut = gn(Q, it);
                if (Ie === null ? ta(Q, it) : (Ie.pendingTasks--, Ie.forceClientRender || (Ie.forceClientRender = !0, Ie.errorDigest = Ut, Ie.parentFlushed && Q.clientRenderedBoundaries.push(Ie))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var nr = Q.onAllReady;
                  nr();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, D), o.destination !== null && Ha(o, o.destination);
      } catch (ar) {
        gn(o, ar), ta(o, ar);
      } finally {
        Qn = T, Ua.current = h, h === So && vr(c);
      }
    }
  }
  function na(o, c, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var T = h.id = o.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, o = o.responseState, a(c, ze), a(c, o.placeholderPrefix), o = b(T.toString(16)), a(c, o), s(c, cr);
      case 1:
        h.status = 2;
        var L = !0;
        T = h.chunks;
        var D = 0;
        h = h.children;
        for (var Y = 0; Y < h.length; Y++) {
          for (L = h[Y]; D < L.index; D++) a(c, T[D]);
          L = aa(o, c, L);
        }
        for (; D < T.length - 1; D++) a(c, T[D]);
        return D < T.length && (L = s(c, T[D])), L;
      default:
        throw Error(t(390));
    }
  }
  function aa(o, c, h) {
    var T = h.boundary;
    if (T === null) return na(o, c, h);
    if (T.parentFlushed = !0, T.forceClientRender) T = T.errorDigest, s(c, xt), a(c, nt), T && (a(c, Zt), a(c, b(ce(T))), a(c, yt)), s(c, Kt), na(o, c, h);
    else if (0 < T.pendingTasks) {
      T.rootSegmentID = o.nextSegmentId++, 0 < T.completedSegments.length && o.partialBoundaries.push(T);
      var L = o.responseState, D = L.nextSuspenseID++;
      L = f(L.boundaryPrefix + D.toString(16)), T = T.id = L, vt(c, o.responseState, T), na(o, c, h);
    } else if (T.byteSize > o.progressiveChunkSize) T.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(T), vt(c, o.responseState, T.id), na(o, c, h);
    else {
      if (s(c, ur), h = T.completedSegments, h.length !== 1) throw Error(t(391));
      aa(o, c, h[0]);
    }
    return s(c, It);
  }
  function No(o, c, h) {
    return yr(c, o.responseState, h.formatContext, h.id), aa(o, c, h), Lt(c, h.formatContext);
  }
  function Ro(o, c, h) {
    for (var T = h.completedSegments, L = 0; L < T.length; L++) Oo(o, c, h, T[L]);
    if (T.length = 0, o = o.responseState, T = h.id, h = h.rootSegmentID, a(c, o.startInlineScript), o.sentCompleteBoundaryFunction ? a(c, O) : (o.sentCompleteBoundaryFunction = !0, a(c, w)), T === null) throw Error(t(395));
    return h = b(h.toString(16)), a(c, T), a(c, K), a(c, o.segmentPrefix), a(c, h), s(c, Te);
  }
  function Oo(o, c, h, T) {
    if (T.status === 2) return !0;
    var L = T.id;
    if (L === -1) {
      if ((T.id = h.rootSegmentID) === -1) throw Error(t(392));
      return No(o, c, T);
    }
    return No(o, c, T), o = o.responseState, a(c, o.startInlineScript), o.sentCompleteSegmentFunction ? a(c, er) : (o.sentCompleteSegmentFunction = !0, a(c, xr)), a(c, o.segmentPrefix), L = b(L.toString(16)), a(c, L), a(c, Wt), a(c, o.placeholderPrefix), a(c, L), s(c, x);
  }
  function Ha(o, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var h = o.completedRootSegment;
      if (h !== null && o.pendingRootTasks === 0) {
        aa(o, c, h), o.completedRootSegment = null;
        var T = o.responseState.bootstrapChunks;
        for (h = 0; h < T.length - 1; h++) a(c, T[h]);
        h < T.length && s(c, T[h]);
      }
      var L = o.clientRenderedBoundaries, D;
      for (D = 0; D < L.length; D++) {
        var Y = L[D];
        T = c;
        var Q = o.responseState, ve = Y.id, De = Y.errorDigest, Ie = Y.errorMessage, it = Y.errorComponentStack;
        if (a(T, Q.startInlineScript), Q.sentClientRenderFunction ? a(T, Ae) : (Q.sentClientRenderFunction = !0, a(
          T,
          _e
        )), ve === null) throw Error(t(395));
        a(T, ve), a(T, We), (De || Ie || it) && (a(T, ft), a(T, b(Ye(De || "")))), (Ie || it) && (a(T, ft), a(T, b(Ye(Ie || "")))), it && (a(T, ft), a(T, b(Ye(it)))), s(T, $e);
      }
      L.splice(0, D);
      var Ut = o.completedBoundaries;
      for (D = 0; D < Ut.length; D++) Ro(o, c, Ut[D]);
      Ut.splice(0, D), p(c), r = new Uint8Array(512), n = 0;
      var nr = o.partialBoundaries;
      for (D = 0; D < nr.length; D++) {
        var ar = nr[D];
        e: {
          L = o, Y = c;
          var ia = ar.completedSegments;
          for (Q = 0; Q < ia.length; Q++) if (!Oo(
            L,
            Y,
            ar,
            ia[Q]
          )) {
            Q++, ia.splice(0, Q);
            var Po = !1;
            break e;
          }
          ia.splice(0, Q), Po = !0;
        }
        if (!Po) {
          o.destination = null, D++, nr.splice(0, D);
          return;
        }
      }
      nr.splice(0, D);
      var Ba = o.completedBoundaries;
      for (D = 0; D < Ba.length; D++) Ro(o, c, Ba[D]);
      Ba.splice(0, D);
    } finally {
      p(c), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && c.close();
    }
  }
  function Io(o, c) {
    try {
      var h = o.abortableTasks;
      h.forEach(function(T) {
        return Ao(T, o, c);
      }), h.clear(), o.destination !== null && Ha(o, o.destination);
    } catch (T) {
      gn(o, T), ta(o, T);
    }
  }
  return la.renderToReadableStream = function(o, c) {
    return new Promise(function(h, T) {
      var L, D, Y = new Promise(function(Ie, it) {
        D = Ie, L = it;
      }), Q = pu(o, Ee(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), He(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, D, function() {
        var Ie = new ReadableStream({ type: "bytes", pull: function(it) {
          if (Q.status === 1) Q.status = 2, k(it, Q.fatalError);
          else if (Q.status !== 2 && Q.destination === null) {
            Q.destination = it;
            try {
              Ha(Q, it);
            } catch (Ut) {
              gn(Q, Ut), ta(Q, Ut);
            }
          }
        }, cancel: function() {
          Io(Q);
        } }, { highWaterMark: 0 });
        Ie.allReady = Y, h(Ie);
      }, function(Ie) {
        Y.catch(function() {
        }), T(Ie);
      }, L);
      if (c && c.signal) {
        var ve = c.signal, De = function() {
          Io(Q, ve.reason), ve.removeEventListener("abort", De);
        };
        ve.addEventListener("abort", De);
      }
      jo(Q);
    });
  }, la.version = "18.3.1", la;
}
var os;
function id() {
  if (os) return jr;
  os = 1;
  var e, t;
  return e = nd(), t = ad(), jr.version = e.version, jr.renderToString = e.renderToString, jr.renderToStaticMarkup = e.renderToStaticMarkup, jr.renderToNodeStream = e.renderToNodeStream, jr.renderToStaticNodeStream = e.renderToStaticNodeStream, jr.renderToReadableStream = t.renderToReadableStream, jr;
}
id();
const od = "staticMarkup";
function Ki() {
  const e = cl().indexOf(od) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Tr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Ki(), { onClick: a, ...s } = r.props;
  if (n)
    return mt.cloneElement(r, {
      ...s,
      onClick: (b) => (e && e.event && e.action && yl(e), a ? a(b) : !0)
    });
  let p = "";
  ["input", "header", "header-input"].includes(t) && (p = `-${t}`);
  const m = {
    [`data-ga${p}`]: e.text,
    [`data-ga${p}-name`]: e.name,
    [`data-ga${p}-event`]: e.event,
    [`data-ga${p}-action`]: e.action,
    [`data-ga${p}-type`]: e.type,
    [`data-ga${p}-region`]: e.region,
    [`data-ga${p}-section`]: e.section,
    [`data-ga${p}-component`]: e.component
  };
  return mt.cloneElement(r, {
    ...s,
    onClick: a,
    ...m
  });
}, wl = Gi(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: n,
    onClick: a,
    gaData: s
  }, p) => {
    var m, b, f, k, A, j;
    const F = e === n, E = F ? "open" : "close";
    return /* @__PURE__ */ U.jsxs(
      "div",
      {
        ref: p,
        className: lt("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (m = r.content) == null ? void 0 : m.icon
        }),
        children: [
          /* @__PURE__ */ U.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ U.jsx("h4", { children: /* @__PURE__ */ U.jsx(
            Tr,
            {
              gaData: {
                ...s,
                action: E,
                text: r.content.header
              },
              children: /* @__PURE__ */ U.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: lt({ collapsed: !F }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": F,
                  "aria-controls": `card-body-${e}`,
                  onClick: (S) => a(S, e),
                  children: [
                    (b = r.content) != null && b.icon ? /* @__PURE__ */ U.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ U.jsx(
                        "i",
                        {
                          className: `${(f = r.content.icon) == null ? void 0 : f[0]} fa-${(k = r.content.icon) == null ? void 0 : k[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (A = r.content) == null ? void 0 : A.header,
                    /* @__PURE__ */ U.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          ((j = r.content) == null ? void 0 : j.body) && /* @__PURE__ */ U.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: lt("collapse", { show: F }),
              children: /* @__PURE__ */ U.jsx(
                "div",
                {
                  className: "accordion-body",
                  dangerouslySetInnerHTML: qr(
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
wl.propTypes = {
  id: l.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: vl,
  parentId: l.string,
  openCard: l.number,
  onClick: l.func,
  gaData: l.object
};
const sd = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Ji = ({ cards: e, openedCard: t }) => {
  const [r, n] = ct(t), a = `accordion-${cl()}`, s = Br(
    /** @type { HTMLDivElement[]} */
    []
  ), p = (m, b) => {
    if (m.preventDefault(), r !== b) {
      const f = s.current[r - 1], k = f == null ? void 0 : f.lastElementChild;
      Qu(k), n(b);
    } else
      n(null);
  };
  return /* @__PURE__ */ U.jsx("div", { className: "accordion", id: a, children: e == null ? void 0 : e.map(
    (m, b) => m.content.body && m.content.header && /* @__PURE__ */ U.jsx(
      wl,
      {
        ref: (f) => {
          s.current[b] = f;
        },
        id: b + 1,
        parentId: a,
        item: m,
        openCard: r,
        onClick: p,
        gaData: sd
      },
      b + 1
    )
  ) });
};
Ji.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: l.arrayOf(vl).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: l.number
};
const ss = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Cr = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  block: a,
  color: s = "gray",
  disabled: p,
  element: m = "button",
  href: b,
  icon: f,
  innerRef: k,
  onClick: A,
  size: j = "default",
  variant: F,
  classes: E,
  target: S = "_self",
  ...R
}) => {
  if (F) {
    const G = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, $ = lt("btn", G[F], {
      [`btn-${G[F]}-${s}`]: !0,
      "btn-medium": j === "medium",
      "btn-small": j === "small",
      "btn-large": j === "large" || j === "default",
      disabled: p
    });
    let y = m;
    return b && m === "button" && (y = "a"), /* @__PURE__ */ U.jsx(
      Tr,
      {
        gaData: {
          ...ss,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ U.jsxs(
          y,
          {
            type: y === "button" && A ? "button" : void 0,
            ...R,
            className: lt(E) || $,
            href: b,
            ref: k,
            onClick: A,
            "aria-label": n,
            target: y === "a" ? S : null,
            disabled: p,
            children: [
              f && /* @__PURE__ */ U.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
              e
            ]
          }
        )
      }
    );
  }
  const W = lt("btn", {
    [`btn-${s}`]: !0,
    "btn-md": j === "small",
    "btn-sm": j === "xsmall",
    "btn-block": a,
    disabled: p
  });
  let z = m;
  return b && m === "button" && (z = "a"), /* @__PURE__ */ U.jsx(
    Tr,
    {
      gaData: {
        ...ss,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ U.jsxs(
        z,
        {
          type: z === "button" && A ? "button" : void 0,
          ...R,
          className: lt(E) || W,
          href: b,
          ref: k,
          onClick: A,
          "aria-label": n,
          target: z === "a" ? S : null,
          children: [
            f && /* @__PURE__ */ U.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Cr.propTypes = {
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
  gaData: Zi,
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
var ls = { exports: {} }, Ze = {}, cs;
function ld() {
  if (cs) return Ze;
  cs = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), F = Symbol.for("react.client.reference");
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var R = S.$$typeof;
      switch (R) {
        case e:
          switch (S = S.type, S) {
            case r:
            case a:
            case n:
            case b:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case p:
                case m:
                case A:
                case k:
                  return S;
                case s:
                  return S;
                default:
                  return R;
              }
          }
        case t:
          return R;
      }
    }
  }
  return Ze.ContextConsumer = s, Ze.ContextProvider = p, Ze.Element = e, Ze.ForwardRef = m, Ze.Fragment = r, Ze.Lazy = A, Ze.Memo = k, Ze.Portal = t, Ze.Profiler = a, Ze.StrictMode = n, Ze.Suspense = b, Ze.SuspenseList = f, Ze.isContextConsumer = function(S) {
    return E(S) === s;
  }, Ze.isContextProvider = function(S) {
    return E(S) === p;
  }, Ze.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Ze.isForwardRef = function(S) {
    return E(S) === m;
  }, Ze.isFragment = function(S) {
    return E(S) === r;
  }, Ze.isLazy = function(S) {
    return E(S) === A;
  }, Ze.isMemo = function(S) {
    return E(S) === k;
  }, Ze.isPortal = function(S) {
    return E(S) === t;
  }, Ze.isProfiler = function(S) {
    return E(S) === a;
  }, Ze.isStrictMode = function(S) {
    return E(S) === n;
  }, Ze.isSuspense = function(S) {
    return E(S) === b;
  }, Ze.isSuspenseList = function(S) {
    return E(S) === f;
  }, Ze.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === a || S === n || S === b || S === f || S === j || typeof S == "object" && S !== null && (S.$$typeof === A || S.$$typeof === k || S.$$typeof === p || S.$$typeof === s || S.$$typeof === m || S.$$typeof === F || S.getModuleId !== void 0);
  }, Ze.typeOf = E, Ze;
}
var us;
function cd() {
  return us || (us = 1, ls.exports = /* @__PURE__ */ ld()), ls.exports;
}
var Sl = /* @__PURE__ */ cd();
function ud(e) {
  function t(B, I, H, q, v) {
    for (var ne = 0, N = 0, le = 0, te = 0, ae, Z, se = 0, me = 0, ee, we = ee = ae = 0, oe = 0, fe = 0, Ge = 0, he = 0, dt = H.length, Xe = dt - 1, Ne, X = "", pe = "", et = "", Ue = "", ze; oe < dt; ) {
      if (Z = H.charCodeAt(oe), oe === Xe && N + te + le + ne !== 0 && (N !== 0 && (Z = N === 47 ? 10 : 47), te = le = ne = 0, dt++, Xe++), N + te + le + ne === 0) {
        if (oe === Xe && (0 < fe && (X = X.replace(j, "")), 0 < X.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              X += H.charAt(oe);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for (X = X.trim(), ae = X.charCodeAt(0), ee = 1, he = ++oe; oe < dt; ) {
              switch (Z = H.charCodeAt(oe)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (Z = H.charCodeAt(oe + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (we = oe + 1; we < Xe; ++we)
                          switch (H.charCodeAt(we)) {
                            case 47:
                              if (Z === 42 && H.charCodeAt(we - 1) === 42 && oe + 2 !== we) {
                                oe = we + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                oe = we + 1;
                                break e;
                              }
                          }
                        oe = we;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; oe++ < Xe && H.charCodeAt(oe) !== Z; )
                    ;
              }
              if (ee === 0) break;
              oe++;
            }
            switch (ee = H.substring(he, oe), ae === 0 && (ae = (X = X.replace(A, "").trim()).charCodeAt(0)), ae) {
              case 64:
                switch (0 < fe && (X = X.replace(j, "")), Z = X.charCodeAt(1), Z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = I;
                    break;
                  default:
                    fe = Qe;
                }
                if (ee = t(I, fe, ee, Z, v + 1), he = ee.length, 0 < Ee && (fe = r(Qe, X, Ge), ze = m(3, ee, fe, I, be, ue, he, Z, v, q), X = fe.join(""), ze !== void 0 && (he = (ee = ze.trim()).length) === 0 && (Z = 0, ee = "")), 0 < he) switch (Z) {
                  case 115:
                    X = X.replace(J, p);
                  case 100:
                  case 109:
                  case 45:
                    ee = X + "{" + ee + "}";
                    break;
                  case 107:
                    X = X.replace(z, "$1 $2"), ee = X + "{" + ee + "}", ee = ye === 1 || ye === 2 && s("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                    break;
                  default:
                    ee = X + ee, q === 112 && (ee = (pe += ee, ""));
                }
                else ee = "";
                break;
              default:
                ee = t(I, r(I, X, Ge), ee, q, v + 1);
            }
            et += ee, ee = Ge = fe = we = ae = 0, X = "", Z = H.charCodeAt(++oe);
            break;
          case 125:
          case 59:
            if (X = (0 < fe ? X.replace(j, "") : X).trim(), 1 < (he = X.length)) switch (we === 0 && (ae = X.charCodeAt(0), ae === 45 || 96 < ae && 123 > ae) && (he = (X = X.replace(" ", ":")).length), 0 < Ee && (ze = m(1, X, I, B, be, ue, pe.length, q, v, q)) !== void 0 && (he = (X = ze.trim()).length) === 0 && (X = "\0\0"), ae = X.charCodeAt(0), Z = X.charCodeAt(1), ae) {
              case 0:
                break;
              case 64:
                if (Z === 105 || Z === 99) {
                  Ue += X + H.charAt(oe);
                  break;
                }
              default:
                X.charCodeAt(he - 1) !== 58 && (pe += a(X, ae, Z, X.charCodeAt(2)));
            }
            Ge = fe = we = ae = 0, X = "", Z = H.charCodeAt(++oe);
        }
      }
      switch (Z) {
        case 13:
        case 10:
          N === 47 ? N = 0 : 1 + ae === 0 && q !== 107 && 0 < X.length && (fe = 1, X += "\0"), 0 < Ee * He && m(0, X, I, B, be, ue, pe.length, q, v, q), ue = 1, be++;
          break;
        case 59:
        case 125:
          if (N + te + le + ne === 0) {
            ue++;
            break;
          }
        default:
          switch (ue++, Ne = H.charAt(oe), Z) {
            case 9:
            case 32:
              if (te + ne + N === 0) switch (se) {
                case 44:
                case 58:
                case 9:
                case 32:
                  Ne = "";
                  break;
                default:
                  Z !== 32 && (Ne = " ");
              }
              break;
            case 0:
              Ne = "\\0";
              break;
            case 12:
              Ne = "\\f";
              break;
            case 11:
              Ne = "\\v";
              break;
            case 38:
              te + N + ne === 0 && (fe = Ge = 1, Ne = "\f" + Ne);
              break;
            case 108:
              if (te + N + ne + ke === 0 && 0 < we) switch (oe - we) {
                case 2:
                  se === 112 && H.charCodeAt(oe - 3) === 58 && (ke = se);
                case 8:
                  me === 111 && (ke = me);
              }
              break;
            case 58:
              te + N + ne === 0 && (we = oe);
              break;
            case 44:
              N + le + te + ne === 0 && (fe = 1, Ne += "\r");
              break;
            case 34:
            case 39:
              N === 0 && (te = te === Z ? 0 : te === 0 ? Z : te);
              break;
            case 91:
              te + N + le === 0 && ne++;
              break;
            case 93:
              te + N + le === 0 && ne--;
              break;
            case 41:
              te + N + ne === 0 && le--;
              break;
            case 40:
              if (te + N + ne === 0) {
                if (ae === 0) switch (2 * se + 3 * me) {
                  case 533:
                    break;
                  default:
                    ae = 1;
                }
                le++;
              }
              break;
            case 64:
              N + le + te + ne + we + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + ne + le)) switch (N) {
                case 0:
                  switch (2 * Z + 3 * H.charCodeAt(oe + 1)) {
                    case 235:
                      N = 47;
                      break;
                    case 220:
                      he = oe, N = 42;
                  }
                  break;
                case 42:
                  Z === 47 && se === 42 && he + 2 !== oe && (H.charCodeAt(he + 2) === 33 && (pe += H.substring(he, oe + 1)), Ne = "", N = 0);
              }
          }
          N === 0 && (X += Ne);
      }
      me = se, se = Z, oe++;
    }
    if (he = pe.length, 0 < he) {
      if (fe = I, 0 < Ee && (ze = m(2, pe, fe, B, be, ue, he, q, v, q), ze !== void 0 && (pe = ze).length === 0)) return Ue + pe + et;
      if (pe = fe.join(",") + "{" + pe + "}", ye * ke !== 0) {
        switch (ye !== 2 || s(pe, 2) || (ke = 0), ke) {
          case 111:
            pe = pe.replace($, ":-moz-$1") + pe;
            break;
          case 112:
            pe = pe.replace(G, "::-webkit-input-$1") + pe.replace(G, "::-moz-$1") + pe.replace(G, ":-ms-input-$1") + pe;
        }
        ke = 0;
      }
    }
    return Ue + pe + et;
  }
  function r(B, I, H) {
    var q = I.trim().split(R);
    I = q;
    var v = q.length, ne = B.length;
    switch (ne) {
      case 0:
      case 1:
        var N = 0;
        for (B = ne === 0 ? "" : B[0] + " "; N < v; ++N)
          I[N] = n(B, I[N], H).trim();
        break;
      default:
        var le = N = 0;
        for (I = []; N < v; ++N)
          for (var te = 0; te < ne; ++te)
            I[le++] = n(B[te] + " ", q[N], H).trim();
    }
    return I;
  }
  function n(B, I, H) {
    var q = I.charCodeAt(0);
    switch (33 > q && (q = (I = I.trim()).charCodeAt(0)), q) {
      case 38:
        return I.replace(W, "$1" + B.trim());
      case 58:
        return B.trim() + I.replace(W, "$1" + B.trim());
      default:
        if (0 < 1 * H && 0 < I.indexOf("\f")) return I.replace(W, (B.charCodeAt(0) === 58 ? "" : "$1") + B.trim());
    }
    return B + I;
  }
  function a(B, I, H, q) {
    var v = B + ";", ne = 2 * I + 3 * H + 4 * q;
    if (ne === 944) {
      B = v.indexOf(":", 9) + 1;
      var N = v.substring(B, v.length - 1).trim();
      return N = v.substring(0, B).trim() + N + ";", ye === 1 || ye === 2 && s(N, 1) ? "-webkit-" + N + N : N;
    }
    if (ye === 0 || ye === 2 && !s(v, 1)) return v;
    switch (ne) {
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
        if (0 < v.indexOf("image-set(", 11)) return v.replace(ie, "$1-webkit-$2") + v;
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
        return N = v.substring(v.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + N + "-webkit-" + v + "-ms-flex-pack" + N + v;
      case 1005:
        return E.test(v) ? v.replace(F, ":-webkit-") + v.replace(F, ":-moz-") + v : v;
      case 1e3:
        switch (N = v.substring(13).trim(), I = N.indexOf("-") + 1, N.charCodeAt(0) + N.charCodeAt(I)) {
          case 226:
            N = v.replace(y, "tb");
            break;
          case 232:
            N = v.replace(y, "tb-rl");
            break;
          case 220:
            N = v.replace(y, "lr");
            break;
          default:
            return v;
        }
        return "-webkit-" + v + "-ms-" + N + v;
      case 1017:
        if (v.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (I = (v = B).length - 10, N = (v.charCodeAt(I) === 33 ? v.substring(0, I) : v).substring(B.indexOf(":", 7) + 1).trim(), ne = N.charCodeAt(0) + (N.charCodeAt(7) | 0)) {
          case 203:
            if (111 > N.charCodeAt(8)) break;
          case 115:
            v = v.replace(N, "-webkit-" + N) + ";" + v;
            break;
          case 207:
          case 102:
            v = v.replace(N, "-webkit-" + (102 < ne ? "inline-" : "") + "box") + ";" + v.replace(N, "-webkit-" + N) + ";" + v.replace(N, "-ms-" + N + "box") + ";" + v;
        }
        return v + ";";
      case 938:
        if (v.charCodeAt(5) === 45) switch (v.charCodeAt(6)) {
          case 105:
            return N = v.replace("-items", ""), "-webkit-" + v + "-webkit-box-" + N + "-ms-flex-" + N + v;
          case 115:
            return "-webkit-" + v + "-ms-flex-item-" + v.replace(Se, "") + v;
          default:
            return "-webkit-" + v + "-ms-flex-line-pack" + v.replace("align-content", "").replace(Se, "") + v;
        }
        break;
      case 973:
      case 989:
        if (v.charCodeAt(3) !== 45 || v.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Pe.test(B) === !0) return (N = B.substring(B.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(B.replace("stretch", "fill-available"), I, H, q).replace(":fill-available", ":stretch") : v.replace(N, "-webkit-" + N) + v.replace(N, "-moz-" + N.replace("fill-", "")) + v;
        break;
      case 962:
        if (v = "-webkit-" + v + (v.charCodeAt(5) === 102 ? "-ms-" + v : "") + v, H + q === 211 && v.charCodeAt(13) === 105 && 0 < v.indexOf("transform", 10)) return v.substring(0, v.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + v;
    }
    return v;
  }
  function s(B, I) {
    var H = B.indexOf(I === 1 ? ":" : "{"), q = B.substring(0, I !== 3 ? H : 10);
    return H = B.substring(H + 1, B.length - 1), Fe(I !== 2 ? q : q.replace(je, "$1"), H, I);
  }
  function p(B, I) {
    var H = a(I, I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2));
    return H !== I + ";" ? H.replace(ce, " or ($1)").substring(4) : "(" + I + ")";
  }
  function m(B, I, H, q, v, ne, N, le, te, ae) {
    for (var Z = 0, se = I, me; Z < Ee; ++Z)
      switch (me = Re[Z].call(k, B, se, H, q, v, ne, N, le, te, ae)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = me;
      }
    if (se !== I) return se;
  }
  function b(B) {
    switch (B) {
      case void 0:
      case null:
        Ee = Re.length = 0;
        break;
      default:
        if (typeof B == "function") Re[Ee++] = B;
        else if (typeof B == "object") for (var I = 0, H = B.length; I < H; ++I)
          b(B[I]);
        else He = !!B | 0;
    }
    return b;
  }
  function f(B) {
    return B = B.prefix, B !== void 0 && (Fe = null, B ? typeof B != "function" ? ye = 1 : (ye = 2, Fe = B) : ye = 0), f;
  }
  function k(B, I) {
    var H = B;
    if (33 > H.charCodeAt(0) && (H = H.trim()), de = H, H = [de], 0 < Ee) {
      var q = m(-1, I, H, H, be, ue, 0, 0, 0, 0);
      q !== void 0 && typeof q == "string" && (I = q);
    }
    var v = t(Qe, H, I, 0, 0);
    return 0 < Ee && (q = m(-2, v, H, H, be, ue, v.length, 0, 0, 0), q !== void 0 && (v = q)), de = "", ke = 0, ue = be = 1, v;
  }
  var A = /^\0+/g, j = /[\0\r\f]/g, F = /: */g, E = /zoo|gra/, S = /([,: ])(transform)/g, R = /,\r+?/g, W = /([\t\r\n ])*\f?&/g, z = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, $ = /:(read-only)/g, y = /[svh]\w+-[tblr]{2}/, J = /\(\s*(.*)\s*\)/g, ce = /([\s\S]*?);/g, Se = /-self|flex-/g, je = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Pe = /stretch|:\s*\w+\-(?:conte|avail)/, ie = /([^-])(image-set\()/, ue = 1, be = 1, ke = 0, ye = 1, Qe = [], Re = [], Ee = 0, Fe = null, He = 0, de = "";
  return k.use = b, k.set = f, e !== void 0 && f(e), k;
}
var dd = {
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
function pd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var fd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ds = /* @__PURE__ */ pd(
  function(e) {
    return fd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ps = { exports: {} }, Be = {}, fs;
function md() {
  if (fs) return Be;
  fs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, k = e ? Symbol.for("react.forward_ref") : 60112, A = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, F = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, W = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function G(y) {
    if (typeof y == "object" && y !== null) {
      var J = y.$$typeof;
      switch (J) {
        case t:
          switch (y = y.type, y) {
            case b:
            case f:
            case n:
            case s:
            case a:
            case A:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case m:
                case k:
                case E:
                case F:
                case p:
                  return y;
                default:
                  return J;
              }
          }
        case r:
          return J;
      }
    }
  }
  function $(y) {
    return G(y) === f;
  }
  return Be.AsyncMode = b, Be.ConcurrentMode = f, Be.ContextConsumer = m, Be.ContextProvider = p, Be.Element = t, Be.ForwardRef = k, Be.Fragment = n, Be.Lazy = E, Be.Memo = F, Be.Portal = r, Be.Profiler = s, Be.StrictMode = a, Be.Suspense = A, Be.isAsyncMode = function(y) {
    return $(y) || G(y) === b;
  }, Be.isConcurrentMode = $, Be.isContextConsumer = function(y) {
    return G(y) === m;
  }, Be.isContextProvider = function(y) {
    return G(y) === p;
  }, Be.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Be.isForwardRef = function(y) {
    return G(y) === k;
  }, Be.isFragment = function(y) {
    return G(y) === n;
  }, Be.isLazy = function(y) {
    return G(y) === E;
  }, Be.isMemo = function(y) {
    return G(y) === F;
  }, Be.isPortal = function(y) {
    return G(y) === r;
  }, Be.isProfiler = function(y) {
    return G(y) === s;
  }, Be.isStrictMode = function(y) {
    return G(y) === a;
  }, Be.isSuspense = function(y) {
    return G(y) === A;
  }, Be.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === f || y === s || y === a || y === A || y === j || typeof y == "object" && y !== null && (y.$$typeof === E || y.$$typeof === F || y.$$typeof === p || y.$$typeof === m || y.$$typeof === k || y.$$typeof === R || y.$$typeof === W || y.$$typeof === z || y.$$typeof === S);
  }, Be.typeOf = G, Be;
}
var ms;
function hd() {
  return ms || (ms = 1, ps.exports = md()), ps.exports;
}
var ni, hs;
function gd() {
  if (hs) return ni;
  hs = 1;
  var e = hd(), t = {
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
  function p(E) {
    return e.isMemo(E) ? a : s[E.$$typeof] || t;
  }
  var m = Object.defineProperty, b = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, k = Object.getOwnPropertyDescriptor, A = Object.getPrototypeOf, j = Object.prototype;
  function F(E, S, R) {
    if (typeof S != "string") {
      if (j) {
        var W = A(S);
        W && W !== j && F(E, W, R);
      }
      var z = b(S);
      f && (z = z.concat(f(S)));
      for (var G = p(E), $ = p(S), y = 0; y < z.length; ++y) {
        var J = z[y];
        if (!r[J] && !(R && R[J]) && !($ && $[J]) && !(G && G[J])) {
          var ce = k(S, J);
          try {
            m(E, J, ce);
          } catch {
          }
        }
      }
    }
    return E;
  }
  return ni = F, ni;
}
var bd = gd();
const yd = /* @__PURE__ */ Xi(bd);
var St = { env: { NODE_ENV: "production" } };
function Sr() {
  return (Sr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var gs = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ji = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Sl.typeOf(e);
}, ka = Object.freeze([]), Nr = Object.freeze({});
function Ln(e) {
  return typeof e == "function";
}
function bs(e) {
  return e.displayName || e.name || "Component";
}
function Qi(e) {
  return e && typeof e.styledComponentId == "string";
}
var tn = typeof St < "u" && St.env !== void 0 && (St.env.REACT_APP_SC_ATTR || St.env.SC_ATTR) || "data-styled", eo = typeof window < "u" && "HTMLElement" in window, xd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof St < "u" && St.env !== void 0 && (St.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && St.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? St.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && St.env.REACT_APP_SC_DISABLE_SPEEDY : St.env.SC_DISABLE_SPEEDY !== void 0 && St.env.SC_DISABLE_SPEEDY !== "" ? St.env.SC_DISABLE_SPEEDY !== "false" && St.env.SC_DISABLE_SPEEDY : St.env.NODE_ENV !== "production"));
function $n(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var vd = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, p = s; r >= p; ) (p <<= 1) < 0 && $n(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(a), this.length = p;
      for (var m = s; m < p; m++) this.groupSizes[m] = 0;
    }
    for (var b = this.indexOfGroup(r + 1), f = 0, k = n.length; f < k; f++) this.tag.insertRule(b, n[f]) && (this.groupSizes[r]++, b++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var p = a; p < s; p++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), p = s + a, m = s; m < p; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), ya = /* @__PURE__ */ new Map(), Ta = /* @__PURE__ */ new Map(), In = 1, ca = function(e) {
  if (ya.has(e)) return ya.get(e);
  for (; Ta.has(In); ) In++;
  var t = In++;
  return ya.set(e, t), Ta.set(t, e), t;
}, wd = function(e) {
  return Ta.get(e);
}, Sd = function(e, t) {
  t >= In && (In = t + 1), ya.set(e, t), Ta.set(t, e);
}, kd = "style[" + tn + '][data-styled-version="5.3.11"]', Td = new RegExp("^" + tn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Cd = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, p = a.length; s < p; s++) (n = a[s]) && e.registerName(t, n);
}, _d = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var p = r[a].trim();
    if (p) {
      var m = p.match(Td);
      if (m) {
        var b = 0 | parseInt(m[1], 10), f = m[2];
        b !== 0 && (Sd(f, b), Cd(e, f, m[3]), e.getTag().insertRules(b, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, Ad = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, kl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(m) {
    for (var b = m.childNodes, f = b.length; f >= 0; f--) {
      var k = b[f];
      if (k && k.nodeType === 1 && k.hasAttribute(tn)) return k;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(tn, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = Ad();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, Ed = function() {
  function e(r) {
    var n = this.element = kl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, p = 0, m = s.length; p < m; p++) {
        var b = s[p];
        if (b.ownerNode === a) return b;
      }
      $n(17);
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
}(), jd = function() {
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
}(), Nd = function() {
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
}(), ys = eo, Rd = { isServer: !eo, useCSSOMInjection: !xd }, Tl = function() {
  function e(r, n, a) {
    r === void 0 && (r = Nr), n === void 0 && (n = {}), this.options = Sr({}, Rd, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && eo && ys && (ys = !1, function(s) {
      for (var p = document.querySelectorAll(kd), m = 0, b = p.length; m < b; m++) {
        var f = p[m];
        f && f.getAttribute(tn) !== "active" && (_d(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ca(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Sr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = a ? new Nd(p) : s ? new Ed(p) : new jd(p), new vd(r)));
    var r, n, a, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ca(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(ca(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ca(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", p = 0; p < a; p++) {
        var m = wd(p);
        if (m !== void 0) {
          var b = r.names.get(m), f = n.getGroup(p);
          if (b && f && b.size) {
            var k = tn + ".g" + p + '[id="' + m + '"]', A = "";
            b !== void 0 && b.forEach(function(j) {
              j.length > 0 && (A += j + ",");
            }), s += "" + f + k + '{content:"' + A + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Od = /(a)(d)/gi, xs = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ni(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = xs(t % 52) + r;
  return (xs(t % 52) + r).replace(Od, "$1-$2");
}
var Qr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Cl = function(e) {
  return Qr(5381, e);
};
function Id(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ln(r) && !Qi(r)) return !1;
  }
  return !0;
}
var Pd = Cl("5.3.11"), Dd = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Id(t), this.componentId = r, this.baseHash = Qr(Pd, r), this.baseStyle = n, Tl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = rn(this.rules, t, r, n).join(""), m = Ni(Qr(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(a, m)) {
        var b = n(p, "." + m, void 0, a);
        r.insertRules(a, m, b);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, k = Qr(this.baseHash, n.hash), A = "", j = 0; j < f; j++) {
        var F = this.rules[j];
        if (typeof F == "string") A += F;
        else if (F) {
          var E = rn(F, t, r, n), S = Array.isArray(E) ? E.join("") : E;
          k = Qr(k, S + j), A += S;
        }
      }
      if (A) {
        var R = Ni(k >>> 0);
        if (!r.hasNameForId(a, R)) {
          var W = n(A, "." + R, void 0, a);
          r.insertRules(a, R, W);
        }
        s.push(R);
      }
    }
    return s.join(" ");
  }, e;
}(), Ld = /^\s*\/\/.*$/gm, Md = [":", "[", ".", "#"];
function Fd(e) {
  var t, r, n, a, s = Nr, p = s.options, m = p === void 0 ? Nr : p, b = s.plugins, f = b === void 0 ? ka : b, k = new ud(m), A = [], j = /* @__PURE__ */ function(S) {
    function R(W) {
      if (W) try {
        S(W + "}");
      } catch {
      }
    }
    return function(W, z, G, $, y, J, ce, Se, je, Pe) {
      switch (W) {
        case 1:
          if (je === 0 && z.charCodeAt(0) === 64) return S(z + ";"), "";
          break;
        case 2:
          if (Se === 0) return z + "/*|*/";
          break;
        case 3:
          switch (Se) {
            case 102:
            case 112:
              return S(G[0] + z), "";
            default:
              return z + (Pe === 0 ? "/*|*/" : "");
          }
        case -2:
          z.split("/*|*/}").forEach(R);
      }
    };
  }(function(S) {
    A.push(S);
  }), F = function(S, R, W) {
    return R === 0 && Md.indexOf(W[r.length]) !== -1 || W.match(a) ? S : "." + t;
  };
  function E(S, R, W, z) {
    z === void 0 && (z = "&");
    var G = S.replace(Ld, ""), $ = R && W ? W + " " + R + " { " + G + " }" : G;
    return t = z, r = R, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), k(W || !R ? "" : R, $);
  }
  return k.use([].concat(f, [function(S, R, W) {
    S === 2 && W.length && W[0].lastIndexOf(r) > 0 && (W[0] = W[0].replace(n, F));
  }, j, function(S) {
    if (S === -2) {
      var R = A;
      return A = [], R;
    }
  }])), E.hash = f.length ? f.reduce(function(S, R) {
    return R.name || $n(15), Qr(S, R.name);
  }, 5381).toString() : "", E;
}
var _l = mt.createContext();
_l.Consumer;
var Al = mt.createContext(), $d = (Al.Consumer, new Tl()), Ri = Fd();
function Ud() {
  return Gt(_l) || $d;
}
function zd() {
  return Gt(Al) || Ri;
}
var qd = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = Ri);
      var p = n.name + s.hash;
      a.hasNameForId(n.id, p) || a.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return $n(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ri), this.name + t.hash;
  }, e;
}(), Wd = /([A-Z])/, Hd = /([A-Z])/g, Bd = /^ms-/, Vd = function(e) {
  return "-" + e.toLowerCase();
};
function vs(e) {
  return Wd.test(e) ? e.replace(Hd, Vd).replace(Bd, "-ms-") : e;
}
var ws = function(e) {
  return e == null || e === !1 || e === "";
};
function rn(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], p = 0, m = e.length; p < m; p += 1) (a = rn(e[p], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (ws(e)) return "";
  if (Qi(e)) return "." + e.styledComponentId;
  if (Ln(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return rn(b, t, r, n);
  }
  var f;
  return e instanceof qd ? r ? (e.inject(r, n), e.getName(n)) : e : ji(e) ? function k(A, j) {
    var F, E, S = [];
    for (var R in A) A.hasOwnProperty(R) && !ws(A[R]) && (Array.isArray(A[R]) && A[R].isCss || Ln(A[R]) ? S.push(vs(R) + ":", A[R], ";") : ji(A[R]) ? S.push.apply(S, k(A[R], R)) : S.push(vs(R) + ": " + (F = R, (E = A[R]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || F in dd || F.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return j ? [j + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var Ss = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Gd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Ln(e) || ji(e) ? Ss(rn(gs(ka, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ss(rn(gs(e, r)));
}
var Yd = function(e, t, r) {
  return r === void 0 && (r = Nr), e.theme !== r.theme && e.theme || t || r.theme;
}, Xd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Zd = /(^-|-$)/g;
function ai(e) {
  return e.replace(Xd, "-").replace(Zd, "");
}
var Kd = function(e) {
  return Ni(Cl(e) >>> 0);
};
function ua(e) {
  return typeof e == "string" && St.env.NODE_ENV === "production";
}
var Oi = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Jd = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Qd(e, t, r) {
  var n = e[r];
  Oi(t) && Oi(n) ? El(n, t) : e[r] = t;
}
function El(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var p = s[a];
    if (Oi(p)) for (var m in p) Jd(m) && Qd(e, p[m], m);
  }
  return e;
}
var jl = mt.createContext();
jl.Consumer;
var ii = {};
function Nl(e, t, r) {
  var n = Qi(e), a = !ua(e), s = t.attrs, p = s === void 0 ? ka : s, m = t.componentId, b = m === void 0 ? function(z, G) {
    var $ = typeof z != "string" ? "sc" : ai(z);
    ii[$] = (ii[$] || 0) + 1;
    var y = $ + "-" + Kd("5.3.11" + $ + ii[$]);
    return G ? G + "-" + y : y;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, k = f === void 0 ? function(z) {
    return ua(z) ? "styled." + z : "Styled(" + bs(z) + ")";
  }(e) : f, A = t.displayName && t.componentId ? ai(t.displayName) + "-" + t.componentId : t.componentId || b, j = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, F = t.shouldForwardProp;
  n && e.shouldForwardProp && (F = t.shouldForwardProp ? function(z, G, $) {
    return e.shouldForwardProp(z, G, $) && t.shouldForwardProp(z, G, $);
  } : e.shouldForwardProp);
  var E, S = new Dd(r, A, n ? e.componentStyle : void 0), R = S.isStatic && p.length === 0, W = function(z, G) {
    return function($, y, J, ce) {
      var Se = $.attrs, je = $.componentStyle, Pe = $.defaultProps, ie = $.foldedComponentIds, ue = $.shouldForwardProp, be = $.styledComponentId, ke = $.target, ye = function(q, v, ne) {
        q === void 0 && (q = Nr);
        var N = Sr({}, v, { theme: q }), le = {};
        return ne.forEach(function(te) {
          var ae, Z, se, me = te;
          for (ae in Ln(me) && (me = me(N)), me) N[ae] = le[ae] = ae === "className" ? (Z = le[ae], se = me[ae], Z && se ? Z + " " + se : Z || se) : me[ae];
        }), [N, le];
      }(Yd(y, Gt(jl), Pe) || Nr, y, Se), Qe = ye[0], Re = ye[1], Ee = function(q, v, ne, N) {
        var le = Ud(), te = zd(), ae = v ? q.generateAndInjectStyles(Nr, le, te) : q.generateAndInjectStyles(ne, le, te);
        return ae;
      }(je, ce, Qe), Fe = J, He = Re.$as || y.$as || Re.as || y.as || ke, de = ua(He), B = Re !== y ? Sr({}, y, {}, Re) : y, I = {};
      for (var H in B) H[0] !== "$" && H !== "as" && (H === "forwardedAs" ? I.as = B[H] : (ue ? ue(H, ds, He) : !de || ds(H)) && (I[H] = B[H]));
      return y.style && Re.style !== y.style && (I.style = Sr({}, y.style, {}, Re.style)), I.className = Array.prototype.concat(ie, be, Ee !== be ? Ee : null, y.className, Re.className).filter(Boolean).join(" "), I.ref = Fe, ul(He, I);
    }(E, z, G, R);
  };
  return W.displayName = k, (E = mt.forwardRef(W)).attrs = j, E.componentStyle = S, E.displayName = k, E.shouldForwardProp = F, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ka, E.styledComponentId = A, E.target = n ? e.target : e, E.withComponent = function(z) {
    var G = t.componentId, $ = function(J, ce) {
      if (J == null) return {};
      var Se, je, Pe = {}, ie = Object.keys(J);
      for (je = 0; je < ie.length; je++) Se = ie[je], ce.indexOf(Se) >= 0 || (Pe[Se] = J[Se]);
      return Pe;
    }(t, ["componentId"]), y = G && G + "-" + (ua(z) ? z : ai(bs(z)));
    return Nl(z, Sr({}, $, { attrs: j, componentId: y }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(z) {
    this._foldedDefaultProps = n ? El({}, e.defaultProps, z) : z;
  } }), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), a && yd(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var lr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Nr), !Sl.isValidElementType(n)) return $n(1, String(n));
    var s = function() {
      return r(n, a, Gd.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, Sr({}, a, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, Sr({}, a, { attrs: Array.prototype.concat(a.attrs, p).filter(Boolean) }));
    }, s;
  }(Nl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  lr[e] = lr(e);
});
const ep = lr.div`
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
`, xa = "On This Page", tp = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: xa
}, Rl = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const { isReact: n, isBootstrap: a } = Ki(), s = Br(null), p = _u("(max-width: 991px)"), [m, b] = ct({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), f = () => document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader"), k = () => {
    const y = f();
    return Math.max((y == null ? void 0 : y.getBoundingClientRect().bottom) || 0, 0);
  }, A = () => {
    var y;
    const J = {}, ce = window.scrollY, Se = k(), je = (y = document.getElementById(t)) == null ? void 0 : y.getBoundingClientRect().top, Pe = 103;
    je >= 0 && (J.sticky = !1, J.activeContainer = ""), ce > s.current.getBoundingClientRect().top && (J.sticky = !0);
    const ie = m.hasHeader ? Se + Pe : Pe;
    e == null || e.forEach(({ targetIdName: ue }) => {
      const be = document.getElementById(ue), ke = (be == null ? void 0 : be.getBoundingClientRect().top) - ie, ye = (be == null ? void 0 : be.getBoundingClientRect().bottom) - ie;
      ke < 0 && ye > 0 && (J.activeContainer = ue);
    }), b((ue) => ({
      ...ue,
      ...J
    }));
  }, j = () => {
    Ku(A, 150), Ju(A, 150);
  }, F = () => !!f(), E = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function S(y = null) {
    if (y === null) return m.containerClass;
    const J = Object.values(y.classList).filter(
      (ce) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(ce)
    );
    return J.length > 0 ? J.join(" ") : S(y.parentElement);
  }
  At(() => {
    const y = document.getElementById(t) || null, J = {
      hasHeader: F(),
      hasAltMenuSpacing: E(),
      containerClass: S(y)
    };
    b((ce) => ({
      ...ce,
      ...J
    }));
  }, []), At(() => (window == null || window.addEventListener("scroll", j), () => window.removeEventListener("scroll", j)), [m.hasHeader]);
  const R = (y) => {
    var J, ce;
    const Se = k(), je = window.scrollY - (m.hasHeader ? Se + 100 : 100), Pe = p ? 410 : 90;
    let ie = ((J = document.getElementById(y)) == null ? void 0 : J.getBoundingClientRect().top) + je;
    s.current.classList.contains("sticky") || (ie -= Pe), r && ((ce = Zu(`#${y}`)) == null || ce.focus()), window.scrollTo({ top: ie, behavior: "smooth" });
  }, W = () => {
    b((y) => ({
      ...y,
      showMenu: !y.showMenu
    }));
  }, z = m.hasHeader ? k() : 0, G = a ? "div" : ep, $ = a ? {} : {
    // @ts-ignore
    requiresAltMenuSpacing: m.hasAltMenuSpacing
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ U.jsx(
    G,
    {
      ...$,
      ref: s,
      id: "uds-anchor-menu",
      className: lt(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: m.sticky,
          "with-header": m.hasHeader
        }
      ),
      style: {
        ...m.showMenu ? { borderBottom: 0 } : {},
        "--uds-anchor-menu-top": `${z}px`
      },
      children: /* @__PURE__ */ U.jsxs("div", { className: `${m.containerClass} uds-anchor-menu-wrapper`, children: [
        p ? /* @__PURE__ */ U.jsx(
          Tr,
          {
            gaData: {
              ...tp,
              action: m.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ U.jsx(
              "button",
              {
                className: lt("mobile-menu-toggler", {
                  "show-menu": m.showMenu
                }),
                type: "button",
                onClick: W,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ U.jsxs("h2", { children: [
                  xa,
                  ":",
                  /* @__PURE__ */ U.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ U.jsxs("h2", { children: [
          xa,
          ":"
        ] }),
        /* @__PURE__ */ U.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: lt("card", "card-body", "collapse", {
              show: m.showMenu
            }),
            children: /* @__PURE__ */ U.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": xa,
                children: e == null ? void 0 : e.map((y) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ U.jsx(
                    Cr,
                    {
                      "data-testid": `anchor-item-${y.targetIdName}`,
                      classes: lt("nav-link", {
                        active: m.activeContainer === y.targetIdName
                      }).split(" "),
                      ariaLabel: y.text,
                      label: y.text,
                      icon: y.icon,
                      onClick: n && (() => R(y.targetIdName)),
                      href: a && `#${y.targetIdName}`
                    },
                    y.targetIdName
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
Rl.propTypes = {
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
function Ra(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var rp = /* @__PURE__ */ function() {
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
}(), Wr = function() {
  return Wr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Wr.apply(this, arguments);
}, np = function(e, t, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(p) {
      p(s);
    });
  }
  return new (r || (r = Promise))(function(s, p) {
    function m(k) {
      try {
        f(n.next(k));
      } catch (A) {
        p(A);
      }
    }
    function b(k) {
      try {
        f(n.throw(k));
      } catch (A) {
        p(A);
      }
    }
    function f(k) {
      k.done ? s(k.value) : a(k.value).then(m, b);
    }
    f((n = n.apply(e, [])).next());
  });
}, ap = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, a, s, p;
  return p = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
    return this;
  }), p;
  function m(f) {
    return function(k) {
      return b([f, k]);
    };
  }
  function b(f) {
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
    } catch (k) {
      f = [6, k], a = 0;
    } finally {
      n = s = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, Ol = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, ip = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, op = function(e, t) {
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
  var n = t.height, a = t.width, s = Ol(t, ["height", "width"]), p = Wr({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), m = window.open(e, "", Object.keys(p).map(function(f) {
    return "".concat(f, "=").concat(p[f]);
  }).join(", "));
  if (r)
    var b = window.setInterval(function() {
      try {
        (m === null || m.closed) && (window.clearInterval(b), r(m));
      } catch (f) {
        console.error(f);
      }
    }, 1e3);
  return m;
}
var cp = (
  /** @class */
  function(e) {
    rp(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, s = a.onShareWindowClose, p = a.windowHeight, m = p === void 0 ? 400 : p, b = a.windowPosition, f = b === void 0 ? "windowCenter" : b, k = a.windowWidth, A = k === void 0 ? 550 : k, j = Wr({ height: m, width: A }, f === "windowCenter" ? op(A, m) : sp(A, m));
        lp(n, j, s);
      }, r.handleClick = function(n) {
        return np(r, void 0, void 0, function() {
          var a, s, p, m, b, f, k, A, j, F;
          return ap(this, function(E) {
            switch (E.label) {
              case 0:
                return a = this.props, s = a.beforeOnClick, p = a.disabled, m = a.networkLink, b = a.onClick, f = a.url, k = a.openShareDialogOnClick, A = a.opts, j = m(f, A), p ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (F = s(), ip(F) ? [4, F] : [3, 2]) : [3, 2]);
              case 1:
                E.sent(), E.label = 2;
              case 2:
                return k && this.openShareDialog(j), b && b(n, j), [
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
      var n = r.children, a = r.className, s = r.disabled, p = r.disabledStyle, m = r.forwardedRef;
      r.networkLink;
      var b = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, k = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var A = Ol(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), j = lt("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), F = Wr(Wr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, k), s && p);
      return mt.createElement("button", Wr({}, A, { "aria-label": A["aria-label"] || b, className: j, onClick: this.handleClick, ref: m, style: F }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(mu)
), Ca = function() {
  return Ca = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Ca.apply(this, arguments);
};
function Oa(e, t, r, n) {
  function a(s, p) {
    var m = r(s), b = Ca({}, s), f = Object.keys(m);
    return f.forEach(function(k) {
      delete b[k];
    }), mt.createElement(cp, Ca({}, n, b, { forwardedRef: p, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), Gi(a);
}
function up(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + Ra({ subject: r, body: n ? n + a + e : e });
}
Oa("email", up, function(e) {
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
function Pn(e, t) {
  if (!e)
    throw new pp(t);
}
function fp(e, t) {
  var r = t.quote, n = t.hashtag;
  return Pn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Ra({
    u: e,
    quote: r,
    hashtag: n
  });
}
Oa("facebook", fp, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function mp(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return Pn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Ra({ url: e, mini: "true", title: r, summary: n, source: a });
}
Oa("linkedin", mp, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function hp(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, p = t.related, m = p === void 0 ? [] : p;
  return Pn(e, "twitter.url"), Pn(Array.isArray(s), "twitter.hashtags is not an array"), Pn(Array.isArray(m), "twitter.related is not an array"), "https://twitter.com/share" + Ra({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: m.length > 0 ? m.join(",") : void 0
  });
}
Oa("twitter", hp, function(e) {
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
function Ii(e) {
  "@babel/helpers - typeof";
  return Ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ii(e);
}
var gp = (typeof window > "u" ? "undefined" : Ii(window)) === "object" && window.Element || function() {
};
function bp(e, t, r) {
  if (!(e[t] instanceof gp))
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
lr.div`
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
lr.div`
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
}, Il = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: n,
  color: a = "gray",
  disabled: s,
  element: p = "button",
  innerRef: m,
  href: b,
  onClick: f,
  ...k
}) => {
  const A = lt("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let j = p;
  return b && p === "button" && (j = "a"), /* @__PURE__ */ U.jsx(
    Tr,
    {
      gaData: {
        ...yp,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ U.jsx(
        j,
        {
          type: j === "button" && f ? "button" : void 0,
          ...k,
          className: A,
          href: b,
          ref: m,
          onClick: f,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Il.propTypes = {
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
  gaData: Zi,
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
const Pl = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: s,
  fetchPriority: p = "auto",
  width: m,
  height: b,
  cardLink: f,
  title: k,
  caption: A,
  captionTitle: j,
  border: F,
  dropShadow: E
}) => {
  const S = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: p,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Au(r) },
    ...s && { "data-testid": s },
    ...m && { width: m },
    ...b && { height: b }
  }, R = lt("uds-img", {
    borderless: !F,
    "uds-img-drop-shadow": E
  }), W = (G) => {
    const $ = G ? `${S.className} ${G}` : S.className;
    return f ? /* @__PURE__ */ U.jsxs("a", { href: f, children: [
      /* @__PURE__ */ U.jsx("img", { ...S, className: $ }),
      /* @__PURE__ */ U.jsx("span", { className: "visually-hidden", children: k })
    ] }) : /* @__PURE__ */ U.jsx("img", { ...S, className: $ });
  }, z = () => /* @__PURE__ */ U.jsx("div", { className: R, children: /* @__PURE__ */ U.jsxs("figure", { className: "figure uds-figure", children: [
    W(),
    A && /* @__PURE__ */ U.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      j && /* @__PURE__ */ U.jsx("h3", { children: j }),
      /* @__PURE__ */ U.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: qr(A)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ U.jsx(U.Fragment, { children: A ? z() : W(R) });
};
Pl.propTypes = {
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
const xp = lr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, vp = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), wp = (e) => !e.startsWith("https://") && !e.startsWith("http://") && vp(e) ? `mailto:${e}` : e, ks = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Dl = (e) => e === "event" || e === "news", bt = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n,
  imageAltText: a,
  title: s,
  icon: p,
  body: m,
  eventFormat: b = "stack",
  eventLocation: f,
  eventTime: k,
  buttons: A,
  linkLabel: j,
  linkUrl: F,
  tags: E,
  showBorders: S = !0,
  cardLink: R
}) => /* @__PURE__ */ U.jsx(
  Ll,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: s,
    icon: p,
    body: m,
    eventFormat: b,
    eventLocation: f,
    eventTime: k,
    buttons: A,
    linkLabel: j,
    linkUrl: F,
    tags: E,
    showBorders: S,
    cardLink: R
  }
);
bt.propTypes = {
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
const Ll = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: n = "",
  imageAltText: a = "",
  title: s,
  icon: p = void 0,
  body: m = "",
  eventFormat: b = "stack",
  eventLocation: f = "",
  eventTime: k = "",
  buttons: A = void 0,
  linkLabel: j = void 0,
  linkUrl: F = void 0,
  tags: E = void 0,
  showBorders: S = !0,
  cardLink: R
}) => {
  const W = lt("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    "card-news": e === "news",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !S
  }), z = typeof n == "string" && n.length > 0, G = !Dl(e);
  return /* @__PURE__ */ U.jsxs(xp, { className: W, "data-testid": "card-container", children: [
    z && /* @__PURE__ */ U.jsx(
      Pl,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        title: s,
        cardLink: G ? R : void 0
      }
    ),
    !n && p && /* @__PURE__ */ U.jsx(
      "i",
      {
        className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    /* @__PURE__ */ U.jsx("div", { className: r ? "card-content-wrapper" : void 0, children: /* @__PURE__ */ U.jsx(
      Ml,
      {
        type: e,
        body: m,
        eventFormat: b,
        eventLocation: f,
        eventTime: k,
        title: s,
        buttons: A,
        linkLabel: j,
        linkUrl: F,
        tags: E,
        cardLink: R
      }
    ) })
  ] });
};
Ll.propTypes = {
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
const Ml = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: n = "",
  eventTime: a = "",
  title: s,
  buttons: p = void 0,
  linkLabel: m = void 0,
  linkUrl: b = void 0,
  tags: f = void 0,
  cardLink: k
}) => {
  const A = Dl(e), j = k && !A, F = A && k, E = e === "event" && (a || n);
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ U.jsx("h3", { className: "card-title", children: j ? /* @__PURE__ */ U.jsx("a", { href: k, children: s }) : s }) }),
    t && /* @__PURE__ */ U.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ U.jsx("div", { dangerouslySetInnerHTML: qr(t) }) }),
    E && /* @__PURE__ */ U.jsx(
      Fl,
      {
        eventFormat: r,
        eventTime: a,
        eventLocation: n
      }
    ),
    F ? /* @__PURE__ */ U.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ U.jsx(
      Tr,
      {
        gaData: {
          ...ks,
          text: s
        },
        children: /* @__PURE__ */ U.jsx("a", { href: k, className: "card-arrow-link", "aria-label": s, children: /* @__PURE__ */ U.jsx("i", { className: "fas fa-arrow-right", "aria-hidden": "true" }) })
      }
    ) }) : /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
      p && /* @__PURE__ */ U.jsx("div", { className: "card-buttons", children: p.map((S) => /* @__PURE__ */ U.jsx(
        "div",
        {
          className: "card-button",
          "data-testid": "card-button",
          children: /* @__PURE__ */ U.jsx(
            Cr,
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
      b && m && /* @__PURE__ */ U.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ U.jsx(
        Tr,
        {
          gaData: {
            ...ks,
            section: s,
            text: m
          },
          children: /* @__PURE__ */ U.jsx("a", { href: wp(b), children: m })
        }
      ) })
    ] }),
    f && /* @__PURE__ */ U.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((S) => (
      // @ts-ignore
      /* @__PURE__ */ U.jsx(
        Il,
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
Ml.propTypes = {
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
const Fl = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ U.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ U.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ U.jsx("div", { children: /* @__PURE__ */ U.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ U.jsx("div", { dangerouslySetInnerHTML: qr(r) })
  ] }),
  t && /* @__PURE__ */ U.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ U.jsx("div", { children: /* @__PURE__ */ U.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ U.jsx(
      "div",
      {
        dangerouslySetInnerHTML: qr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
  r && /* @__PURE__ */ U.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ U.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ U.jsx("div", { children: /* @__PURE__ */ U.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ U.jsx("div", { dangerouslySetInnerHTML: qr(r) })
  ] }) }),
  t && /* @__PURE__ */ U.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ U.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ U.jsx("div", { children: /* @__PURE__ */ U.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ U.jsx("span", { children: /* @__PURE__ */ U.jsx(
      "div",
      {
        dangerouslySetInnerHTML: qr(t)
      }
    ) })
  ] }) })
] });
Fl.propTypes = {
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
lr.div`
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
lr.section``;
ll(null);
l.element, l.element, l.number, l.func, l.func, l.string;
const Sp = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), kp = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
});
l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
});
const Tp = l.shape({
  url: l.string,
  filters: l.string
});
l.shape({
  header: Sp,
  ctaButton: kp,
  dataSource: Tp,
  maxItems: l.number
});
lr.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`;
l.element;
const Cp = lr.img`
  width: 100%;
`;
function _p({ image: e, title: t, contents: r }) {
  return console.log({ image: e, title: t, contents: r }), /* @__PURE__ */ U.jsx("div", { children: "TODO: to be implemented" });
}
function Ap({
  image: e,
  subTitle: t,
  title: r,
  contents: n,
  contentsColor: a
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
  }, m = {
    black: "text-dark",
    white: "text-white",
    undefined: ""
  };
  return /* @__PURE__ */ U.jsxs(
    "div",
    {
      className: lt("uds-hero", {
        [s[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ U.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ U.jsx(
          Cp,
          {
            className: "hero",
            src: e == null ? void 0 : e.url,
            alt: e == null ? void 0 : e.altText,
            "data-testid": "hero-image"
          }
        ),
        t && /* @__PURE__ */ U.jsx("div", { role: "doc-subtitle", "data-testid": "hero-subtitle", children: /* @__PURE__ */ U.jsx(
          "span",
          {
            className: lt({
              [m[t.color]]: t.color,
              [p[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ U.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ U.jsx(
          "span",
          {
            className: lt({
              [m[r.color]]: r.color,
              [p[r.highlightColor]]: r.highlightColor
            }),
            children: r.text
          }
        ) }),
        n && /* @__PURE__ */ U.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: lt("content", {
              [m[a]]: a
            }),
            children: n.map((b, f) => /* @__PURE__ */ U.jsx("p", { children: b.text }, `content-${f}`))
          }
        )
      ]
    }
  );
}
const Un = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => Ap(e),
    "story-hero": () => _p(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
Un.propTypes = {
  type: l.oneOf(["heading-hero", "story-hero"]),
  image: rd,
  title: ri,
  subTitle: ri,
  contents: l.arrayOf(ri),
  contentsColor: l.string
};
const ir = ({
  dataId: e,
  isClickeable: t = !1,
  disabled: r = !1,
  pageLinkIcon: n = !1,
  selectedPage: a = !1,
  onClick: s = () => {
  },
  ellipses: p,
  ariaLabel: m,
  children: b,
  ariaDisabled: f
}) => /* @__PURE__ */ U.jsx(
  "li",
  {
    className: lt("page-item", {
      disabled: r,
      active: a,
      elipses: p
    }),
    children: t ? /* @__PURE__ */ U.jsxs(
      "button",
      {
        type: "button",
        "aria-label": m,
        className: lt("page-link", {
          "page-link-icon": n
        }),
        onClick: s,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": a ? "page" : null,
        "aria-disabled": f,
        children: [
          b,
          a && /* @__PURE__ */ U.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ U.jsx("span", { className: "page-link", "data-testid": "page-link", children: b })
  }
);
ir.propTypes = {
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
const Ep = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, $l = ({
  type: e,
  background: t,
  currentPage: r = 1,
  totalPages: n = 10,
  onChange: a
}) => {
  const [s, p] = ct(null);
  At(() => {
    p(r);
  }, [r]);
  const m = (k) => {
    yl({ ...Ep, text: `page ${k}` });
  }, b = (k, A) => {
    const j = {
      first: 1,
      prev: s === 1 ? 1 : s - 1,
      next: s === n ? n : s + 1,
      last: n
    }[A] ?? A;
    p(j), m(j), a == null || a(k, j);
  }, f = () => {
    if (n < 5)
      return /* @__PURE__ */ U.jsx(U.Fragment, { children: Array.from({ length: n }, (R, W) => {
        const z = W + 1;
        return /* @__PURE__ */ U.jsx(
          ir,
          {
            ariaLabel: `Page ${z} of ${n}`,
            isClickeable: !0,
            selectedPage: s === z,
            onClick: (G) => b(G, z),
            children: z
          },
          z
        );
      }) });
    const k = 2, A = Ho(
      s === n - 1,
      1,
      s === n ? 2 : 1
    ), j = Ho(
      s === 1,
      2,
      1
    ), F = es(
      s - A,
      s,
      n
    ), E = es(
      s,
      s + 1 + j,
      n
    ), S = [...F, ...E];
    return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
      S[0] !== 1 && /* @__PURE__ */ U.jsx(
        ir,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: s === 1,
          onClick: (R) => b(R, "first"),
          children: "1"
        }
      ),
      s > n - k && /* @__PURE__ */ U.jsx(
        ir,
        {
          isClickeable: !0,
          ariaLabel: `Page 2 of ${n}`,
          selectedPage: s === 2,
          onClick: (R) => b(R, 2),
          children: "2"
        }
      ),
      S[0] > 2 && /* @__PURE__ */ U.jsx(ir, { ellipses: !0, children: "..." }),
      S.map((R) => /* @__PURE__ */ U.jsx(
        ir,
        {
          ariaLabel: `Page ${R} of ${n}`,
          isClickeable: !0,
          selectedPage: s === R,
          onClick: (W) => b(W, R),
          children: R
        },
        R
      )),
      S[S.length - 1] < n - 1 && /* @__PURE__ */ U.jsx(ir, { ellipses: !0, children: "..." }),
      s < k + 1 && /* @__PURE__ */ U.jsx(
        ir,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n - 1} of ${n}`,
          selectedPage: s === n - 1,
          onClick: (R) => b(R, n - 1),
          children: n - 1
        }
      ),
      S[S.length - 1] !== n && /* @__PURE__ */ U.jsx(
        ir,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: s === n,
          onClick: (R) => b(R, "last"),
          children: n
        }
      )
    ] });
  };
  return /* @__PURE__ */ U.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ U.jsxs(
    "ul",
    {
      className: lt(
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
        /* @__PURE__ */ U.jsx(
          ir,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: s === 1,
            pageLinkIcon: !0,
            onClick: (k) => b(k, "prev"),
            ariaDisabled: s === 1,
            ariaLabel: "Previous Page"
          }
        ),
        f(),
        /* @__PURE__ */ U.jsx(
          ir,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: s === n,
            disabled: s === n,
            pageLinkIcon: !0,
            onClick: (k) => b(k, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
$l.propTypes = {
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
   * Callback fired when the page is changed
   */
  onChange: l.func.isRequired
};
lr.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const jp = Gi(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: s,
    leftKeyPressed: p,
    rightKeyPressed: m,
    icon: b,
    gaData: f
  } = e, { isReact: k, isBootstrap: A } = Ki(), j = Br(null);
  hu(t, () => ({
    focus() {
      j.current.focus();
    },
    scrollIntoView() {
      var E, S, R, W, z, G, $;
      const y = ((E = j.current) == null ? void 0 : E.offsetWidth) / 2 + j.current.offsetLeft, J = ((R = (S = j.current) == null ? void 0 : S.offsetParent) == null ? void 0 : R.scrollLeft) + ((z = (W = j.current) == null ? void 0 : W.offsetParent) == null ? void 0 : z.offsetWidth) / 2;
      ($ = (G = j.current) == null ? void 0 : G.offsetParent) == null || $.scrollBy({
        left: y - J
      });
    }
  }), []);
  const F = (E) => {
    E.keyCode === 37 ? (E.preventDefault(), p()) : E.keyCode === 39 && (E.preventDefault(), m());
  };
  return /* @__PURE__ */ U.jsx(Tr, { gaData: { ...f, text: a }, children: /* @__PURE__ */ U.jsxs(
    "a",
    {
      ref: j,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      "data-bs-toggle": A && "tab",
      onClick: k && ((E) => s(E, r, a)),
      onKeyDown: k && F,
      tabIndex: n ? "" : "-1",
      children: [
        a,
        " ",
        b && /* @__PURE__ */ U.jsx("i", { className: `${b == null ? void 0 : b[0]} fa-${b == null ? void 0 : b[1]} me-1` })
      ]
    }
  ) });
});
jp.propTypes = {
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
}, Rp = ({
  url: e = "",
  vttUrl: t,
  caption: r,
  title: n = "",
  className: a,
  controls: s = !0
}) => {
  const p = Br(null);
  return /* @__PURE__ */ U.jsxs(
    "div",
    {
      className: lt(`uds-video-container ${a}`, {
        "uds-video-with-caption": r
      }),
      children: [
        /* @__PURE__ */ U.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ U.jsx(Tr, { gaData: { ...Np, section: n }, children: /* @__PURE__ */ U.jsxs(
          "video",
          {
            ref: p,
            title: n,
            playsInline: !0,
            controls: s || !0,
            children: [
              /* @__PURE__ */ U.jsx("source", { src: e }),
              /* @__PURE__ */ U.jsx(
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
        r && /* @__PURE__ */ U.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ U.jsx("figcaption", { children: r }) })
      ]
    }
  );
}, Op = ({ title: e = "", caption: t, url: r = "", className: n }) => /* @__PURE__ */ U.jsxs(
  "div",
  {
    className: lt(`uds-video-container ${n}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ U.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ U.jsx("iframe", { title: e, src: r }) }),
      t && /* @__PURE__ */ U.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ U.jsx("figcaption", { children: t }) })
    ]
  }
), to = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: a = "",
    caption: s,
    className: p,
    controls: m = !0
  } = e;
  return t === "youtube" ? Op({ url: r, title: a, caption: s, className: p }) : Rp({
    url: r,
    vttUrl: n,
    title: a,
    caption: s,
    className: p,
    controls: m
  });
};
to.propTypes = {
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
var Ip = !1;
try {
  var Ts = Object.defineProperty({}, "passive", {
    get: function() {
      Ip = !0;
    }
  });
  window.addEventListener("testPassive", null, Ts), window.removeEventListener("testPassive", null, Ts);
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
    buttons: bt.propTypes.buttons,
    linkLabel: l.string,
    linkUrl: l.string,
    tags: bt.propTypes.tags
  })
).isRequired, bt.propTypes.type, bt.propTypes.eventFormat, bt.propTypes.horizontal, l.string, l.string, l.bool;
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const _a = {
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
l.string, _a.imageItems, _a.hasContent;
_a.imageItems.isRequired, _a.hasContent, l.string, l.string, l.bool;
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
var da = {}, Cs;
function Pp() {
  if (Cs) return da;
  Cs = 1;
  var e = fl;
  return da.createRoot = e.createRoot, da.hydrateRoot = e.hydrateRoot, da;
}
Pp();
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const Ul = () => {
  const [e, t] = ct(null), [r, n] = ct(!1), [a, s] = ct(null), [p, m] = ct("");
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
  }, [p]), [{ data: e, loading: r, error: a }, m];
}, nn = (e) => (e || []).join(" ");
const {
  entries: zl,
  setPrototypeOf: _s,
  isFrozen: Dp,
  getPrototypeOf: Lp,
  getOwnPropertyDescriptor: Mp
} = Object;
let {
  freeze: Nt,
  seal: Bt,
  create: Rn
} = Object, {
  apply: Pi,
  construct: Di
} = typeof Reflect < "u" && Reflect;
Nt || (Nt = function(t) {
  return t;
});
Bt || (Bt = function(t) {
  return t;
});
Pi || (Pi = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    a[s - 2] = arguments[s];
  return t.apply(r, a);
});
Di || (Di = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Tn = Rt(Array.prototype.forEach), Fp = Rt(Array.prototype.lastIndexOf), As = Rt(Array.prototype.pop), Cn = Rt(Array.prototype.push), $p = Rt(Array.prototype.splice), va = Rt(String.prototype.toLowerCase), oi = Rt(String.prototype.toString), si = Rt(String.prototype.match), Kr = Rt(String.prototype.replace), Up = Rt(String.prototype.indexOf), zp = Rt(String.prototype.trim), sr = Rt(Object.prototype.hasOwnProperty), _t = Rt(RegExp.prototype.test), _n = qp(TypeError);
function Rt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Pi(e, t, n);
  };
}
function qp(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Di(e, r);
  };
}
function Me(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : va;
  _s && _s(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (Dp(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function Wp(e) {
  for (let t = 0; t < e.length; t++)
    sr(e, t) || (e[t] = null);
  return e;
}
function hr(e) {
  const t = Rn(null);
  for (const [r, n] of zl(e))
    sr(e, r) && (Array.isArray(n) ? t[r] = Wp(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = hr(n) : t[r] = n);
  return t;
}
function An(e, t) {
  for (; e !== null; ) {
    const n = Mp(e, t);
    if (n) {
      if (n.get)
        return Rt(n.get);
      if (typeof n.value == "function")
        return Rt(n.value);
    }
    e = Lp(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Es = Nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), li = Nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ci = Nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Hp = Nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ui = Nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Bp = Nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), js = Nt(["#text"]), Ns = Nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), di = Nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Rs = Nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pa = Nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Vp = Bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Gp = Bt(/<%[\w\W]*|[\w\W]*%>/gm), Yp = Bt(/\$\{[\w\W]*/gm), Xp = Bt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Zp = Bt(/^aria-[\-\w]+$/), ql = Bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Kp = Bt(/^(?:\w+script|data):/i), Jp = Bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Wl = Bt(/^html$/i), Qp = Bt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Os = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Zp,
  ATTR_WHITESPACE: Jp,
  CUSTOM_ELEMENT: Qp,
  DATA_ATTR: Xp,
  DOCTYPE_NAME: Wl,
  ERB_EXPR: Gp,
  IS_ALLOWED_URI: ql,
  IS_SCRIPT_OR_DATA: Kp,
  MUSTACHE_EXPR: Vp,
  TMPLIT_EXPR: Yp
});
const En = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, ef = function() {
  return typeof window > "u" ? null : window;
}, tf = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (n = r.getAttribute(a));
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
}, Is = function() {
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
function Hl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ef();
  const t = (x) => Hl(x);
  if (t.version = "3.4.0", t.removed = [], !e || !e.document || e.document.nodeType !== En.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: p,
    Node: m,
    Element: b,
    NodeFilter: f,
    NamedNodeMap: k = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: A,
    DOMParser: j,
    trustedTypes: F
  } = e, E = b.prototype, S = An(E, "cloneNode"), R = An(E, "remove"), W = An(E, "nextSibling"), z = An(E, "childNodes"), G = An(E, "parentNode");
  if (typeof p == "function") {
    const x = r.createElement("template");
    x.content && x.content.ownerDocument && (r = x.content.ownerDocument);
  }
  let $, y = "";
  const {
    implementation: J,
    createNodeIterator: ce,
    createDocumentFragment: Se,
    getElementsByTagName: je
  } = r, {
    importNode: Pe
  } = n;
  let ie = Is();
  t.isSupported = typeof zl == "function" && typeof G == "function" && J && J.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ue,
    ERB_EXPR: be,
    TMPLIT_EXPR: ke,
    DATA_ATTR: ye,
    ARIA_ATTR: Qe,
    IS_SCRIPT_OR_DATA: Re,
    ATTR_WHITESPACE: Ee,
    CUSTOM_ELEMENT: Fe
  } = Os;
  let {
    IS_ALLOWED_URI: He
  } = Os, de = null;
  const B = Me({}, [...Es, ...li, ...ci, ...ui, ...js]);
  let I = null;
  const H = Me({}, [...Ns, ...di, ...Rs, ...pa]);
  let q = Object.seal(Rn(null, {
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
  })), v = null, ne = null;
  const N = Object.seal(Rn(null, {
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
  let le = !0, te = !0, ae = !1, Z = !0, se = !1, me = !0, ee = !1, we = !1, oe = !1, fe = !1, Ge = !1, he = !1, dt = !0, Xe = !1;
  const Ne = "user-content-";
  let X = !0, pe = !1, et = {}, Ue = null;
  const ze = Me({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let cr = null;
  const ur = Me({}, ["audio", "video", "img", "source", "image", "track"]);
  let Yt = null;
  const Xt = Me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), xt = "http://www.w3.org/1998/Math/MathML", It = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let yt = nt, Zt = !1, Kt = null;
  const vt = Me({}, [xt, It, nt], oi);
  let Tt = Me({}, ["mi", "mo", "mn", "ms", "mtext"]), wt = Me({}, ["annotation-xml"]);
  const qe = Me({}, ["title", "style", "font", "a", "script"]);
  let ht = null;
  const dr = ["application/xhtml+xml", "text/html"], Jt = "text/html";
  let ge = null, pt = null;
  const Pt = r.createElement("form"), pr = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Dt = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(pt && pt === w)) {
      if ((!w || typeof w != "object") && (w = {}), w = hr(w), ht = // eslint-disable-next-line unicorn/prefer-includes
      dr.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Jt : w.PARSER_MEDIA_TYPE, ge = ht === "application/xhtml+xml" ? oi : va, de = sr(w, "ALLOWED_TAGS") ? Me({}, w.ALLOWED_TAGS, ge) : B, I = sr(w, "ALLOWED_ATTR") ? Me({}, w.ALLOWED_ATTR, ge) : H, Kt = sr(w, "ALLOWED_NAMESPACES") ? Me({}, w.ALLOWED_NAMESPACES, oi) : vt, Yt = sr(w, "ADD_URI_SAFE_ATTR") ? Me(hr(Xt), w.ADD_URI_SAFE_ATTR, ge) : Xt, cr = sr(w, "ADD_DATA_URI_TAGS") ? Me(hr(ur), w.ADD_DATA_URI_TAGS, ge) : ur, Ue = sr(w, "FORBID_CONTENTS") ? Me({}, w.FORBID_CONTENTS, ge) : ze, v = sr(w, "FORBID_TAGS") ? Me({}, w.FORBID_TAGS, ge) : hr({}), ne = sr(w, "FORBID_ATTR") ? Me({}, w.FORBID_ATTR, ge) : hr({}), et = sr(w, "USE_PROFILES") ? w.USE_PROFILES : !1, le = w.ALLOW_ARIA_ATTR !== !1, te = w.ALLOW_DATA_ATTR !== !1, ae = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, se = w.SAFE_FOR_TEMPLATES || !1, me = w.SAFE_FOR_XML !== !1, ee = w.WHOLE_DOCUMENT || !1, fe = w.RETURN_DOM || !1, Ge = w.RETURN_DOM_FRAGMENT || !1, he = w.RETURN_TRUSTED_TYPE || !1, oe = w.FORCE_BODY || !1, dt = w.SANITIZE_DOM !== !1, Xe = w.SANITIZE_NAMED_PROPS || !1, X = w.KEEP_CONTENT !== !1, pe = w.IN_PLACE || !1, He = w.ALLOWED_URI_REGEXP || ql, yt = w.NAMESPACE || nt, Tt = w.MATHML_TEXT_INTEGRATION_POINTS || Tt, wt = w.HTML_INTEGRATION_POINTS || wt, q = w.CUSTOM_ELEMENT_HANDLING || Rn(null), w.CUSTOM_ELEMENT_HANDLING && pr(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && pr(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), se && (te = !1), Ge && (fe = !0), et && (de = Me({}, js), I = Rn(null), et.html === !0 && (Me(de, Es), Me(I, Ns)), et.svg === !0 && (Me(de, li), Me(I, di), Me(I, pa)), et.svgFilters === !0 && (Me(de, ci), Me(I, di), Me(I, pa)), et.mathMl === !0 && (Me(de, ui), Me(I, Rs), Me(I, pa))), N.tagCheck = null, N.attributeCheck = null, w.ADD_TAGS && (typeof w.ADD_TAGS == "function" ? N.tagCheck = w.ADD_TAGS : (de === B && (de = hr(de)), Me(de, w.ADD_TAGS, ge))), w.ADD_ATTR && (typeof w.ADD_ATTR == "function" ? N.attributeCheck = w.ADD_ATTR : (I === H && (I = hr(I)), Me(I, w.ADD_ATTR, ge))), w.ADD_URI_SAFE_ATTR && Me(Yt, w.ADD_URI_SAFE_ATTR, ge), w.FORBID_CONTENTS && (Ue === ze && (Ue = hr(Ue)), Me(Ue, w.FORBID_CONTENTS, ge)), w.ADD_FORBID_CONTENTS && (Ue === ze && (Ue = hr(Ue)), Me(Ue, w.ADD_FORBID_CONTENTS, ge)), X && (de["#text"] = !0), ee && Me(de, ["html", "head", "body"]), de.table && (Me(de, ["tbody"]), delete v.tbody), w.TRUSTED_TYPES_POLICY) {
        if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw _n('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw _n('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        $ = w.TRUSTED_TYPES_POLICY, y = $.createHTML("");
      } else
        $ === void 0 && ($ = tf(F, a)), $ !== null && typeof y == "string" && (y = $.createHTML(""));
      Nt && Nt(w), pt = w;
    }
  }, Qt = Me({}, [...li, ...ci, ...Hp]), fr = Me({}, [...ui, ...Bp]), _r = function(w) {
    let O = G(w);
    (!O || !O.tagName) && (O = {
      namespaceURI: yt,
      tagName: "template"
    });
    const K = va(w.tagName), Te = va(O.tagName);
    return Kt[w.namespaceURI] ? w.namespaceURI === It ? O.namespaceURI === nt ? K === "svg" : O.namespaceURI === xt ? K === "svg" && (Te === "annotation-xml" || Tt[Te]) : !!Qt[K] : w.namespaceURI === xt ? O.namespaceURI === nt ? K === "math" : O.namespaceURI === It ? K === "math" && wt[Te] : !!fr[K] : w.namespaceURI === nt ? O.namespaceURI === It && !wt[Te] || O.namespaceURI === xt && !Tt[Te] ? !1 : !fr[K] && (qe[K] || !Qt[K]) : !!(ht === "application/xhtml+xml" && Kt[w.namespaceURI]) : !1;
  }, ot = function(w) {
    Cn(t.removed, {
      element: w
    });
    try {
      G(w).removeChild(w);
    } catch {
      R(w);
    }
  }, gt = function(w, O) {
    try {
      Cn(t.removed, {
        attribute: O.getAttributeNode(w),
        from: O
      });
    } catch {
      Cn(t.removed, {
        attribute: null,
        from: O
      });
    }
    if (O.removeAttribute(w), w === "is")
      if (fe || Ge)
        try {
          ot(O);
        } catch {
        }
      else
        try {
          O.setAttribute(w, "");
        } catch {
        }
  }, br = function(w) {
    let O = null, K = null;
    if (oe)
      w = "<remove></remove>" + w;
    else {
      const Ae = si(w, /^[\r\n\t ]+/);
      K = Ae && Ae[0];
    }
    ht === "application/xhtml+xml" && yt === nt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const Te = $ ? $.createHTML(w) : w;
    if (yt === nt)
      try {
        O = new j().parseFromString(Te, ht);
      } catch {
      }
    if (!O || !O.documentElement) {
      O = J.createDocument(yt, "template", null);
      try {
        O.documentElement.innerHTML = Zt ? y : Te;
      } catch {
      }
    }
    const _e = O.body || O.documentElement;
    return w && K && _e.insertBefore(r.createTextNode(K), _e.childNodes[0] || null), yt === nt ? je.call(O, ee ? "html" : "body")[0] : ee ? O.documentElement : _e;
  }, zt = function(w) {
    return ce.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, qt = function(w) {
    return w instanceof A && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof k) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, Ot = function(w) {
    return typeof m == "function" && w instanceof m;
  };
  function at(x, w, O) {
    Tn(x, (K) => {
      K.call(t, w, O, pt);
    });
  }
  const yr = function(w) {
    let O = null;
    if (at(ie.beforeSanitizeElements, w, null), qt(w))
      return ot(w), !0;
    const K = ge(w.nodeName);
    if (at(ie.uponSanitizeElement, w, {
      tagName: K,
      allowedTags: de
    }), me && w.hasChildNodes() && !Ot(w.firstElementChild) && _t(/<[/\w!]/g, w.innerHTML) && _t(/<[/\w!]/g, w.textContent) || me && w.namespaceURI === nt && K === "style" && Ot(w.firstElementChild) || w.nodeType === En.progressingInstruction || me && w.nodeType === En.comment && _t(/<[/\w]/g, w.data))
      return ot(w), !0;
    if (v[K] || !(N.tagCheck instanceof Function && N.tagCheck(K)) && !de[K]) {
      if (!v[K] && xr(K) && (q.tagNameCheck instanceof RegExp && _t(q.tagNameCheck, K) || q.tagNameCheck instanceof Function && q.tagNameCheck(K)))
        return !1;
      if (X && !Ue[K]) {
        const Te = G(w) || w.parentNode, _e = z(w) || w.childNodes;
        if (_e && Te) {
          const Ae = _e.length;
          for (let We = Ae - 1; We >= 0; --We) {
            const $e = S(_e[We], !0);
            $e.__removalCount = (w.__removalCount || 0) + 1, Te.insertBefore($e, W(w));
          }
        }
      }
      return ot(w), !0;
    }
    return w instanceof b && !_r(w) || (K === "noscript" || K === "noembed" || K === "noframes") && _t(/<\/no(script|embed|frames)/i, w.innerHTML) ? (ot(w), !0) : (se && w.nodeType === En.text && (O = w.textContent, Tn([ue, be, ke], (Te) => {
      O = Kr(O, Te, " ");
    }), w.textContent !== O && (Cn(t.removed, {
      element: w.cloneNode()
    }), w.textContent = O)), at(ie.afterSanitizeElements, w, null), !1);
  }, Lt = function(w, O, K) {
    if (ne[O] || dt && (O === "id" || O === "name") && (K in r || K in Pt))
      return !1;
    if (!(te && !ne[O] && _t(ye, O))) {
      if (!(le && _t(Qe, O))) {
        if (!(N.attributeCheck instanceof Function && N.attributeCheck(O, w))) {
          if (!I[O] || ne[O]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(xr(w) && (q.tagNameCheck instanceof RegExp && _t(q.tagNameCheck, w) || q.tagNameCheck instanceof Function && q.tagNameCheck(w)) && (q.attributeNameCheck instanceof RegExp && _t(q.attributeNameCheck, O) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(O, w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              O === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && _t(q.tagNameCheck, K) || q.tagNameCheck instanceof Function && q.tagNameCheck(K)))
            ) return !1;
          } else if (!Yt[O]) {
            if (!_t(He, Kr(K, Ee, ""))) {
              if (!((O === "src" || O === "xlink:href" || O === "href") && w !== "script" && Up(K, "data:") === 0 && cr[w])) {
                if (!(ae && !_t(Re, Kr(K, Ee, "")))) {
                  if (K)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, xr = function(w) {
    return w !== "annotation-xml" && si(w, Fe);
  }, er = function(w) {
    at(ie.beforeSanitizeAttributes, w, null);
    const {
      attributes: O
    } = w;
    if (!O || qt(w))
      return;
    const K = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: I,
      forceKeepAttr: void 0
    };
    let Te = O.length;
    for (; Te--; ) {
      const _e = O[Te], {
        name: Ae,
        namespaceURI: We,
        value: $e
      } = _e, ft = ge(Ae), tt = $e;
      let Ye = Ae === "value" ? tt : zp(tt);
      if (K.attrName = ft, K.attrValue = Ye, K.keepAttr = !0, K.forceKeepAttr = void 0, at(ie.uponSanitizeAttribute, w, K), Ye = K.attrValue, Xe && (ft === "id" || ft === "name") && (gt(Ae, w), Ye = Ne + Ye), me && _t(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ye)) {
        gt(Ae, w);
        continue;
      }
      if (ft === "attributename" && si(Ye, "href")) {
        gt(Ae, w);
        continue;
      }
      if (K.forceKeepAttr)
        continue;
      if (!K.keepAttr) {
        gt(Ae, w);
        continue;
      }
      if (!Z && _t(/\/>/i, Ye)) {
        gt(Ae, w);
        continue;
      }
      se && Tn([ue, be, ke], (Ir) => {
        Ye = Kr(Ye, Ir, " ");
      });
      const Mt = ge(w.nodeName);
      if (!Lt(Mt, ft, Ye)) {
        gt(Ae, w);
        continue;
      }
      if ($ && typeof F == "object" && typeof F.getAttributeType == "function" && !We)
        switch (F.getAttributeType(Mt, ft)) {
          case "TrustedHTML": {
            Ye = $.createHTML(Ye);
            break;
          }
          case "TrustedScriptURL": {
            Ye = $.createScriptURL(Ye);
            break;
          }
        }
      if (Ye !== tt)
        try {
          We ? w.setAttributeNS(We, Ae, Ye) : w.setAttribute(Ae, Ye), qt(w) ? ot(w) : As(t.removed);
        } catch {
          gt(Ae, w);
        }
    }
    at(ie.afterSanitizeAttributes, w, null);
  }, Wt = function(w) {
    let O = null;
    const K = zt(w);
    for (at(ie.beforeSanitizeShadowDOM, w, null); O = K.nextNode(); )
      at(ie.uponSanitizeShadowNode, O, null), yr(O), er(O), O.content instanceof s && Wt(O.content);
    at(ie.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(x) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O = null, K = null, Te = null, _e = null;
    if (Zt = !x, Zt && (x = "<!-->"), typeof x != "string" && !Ot(x))
      if (typeof x.toString == "function") {
        if (x = x.toString(), typeof x != "string")
          throw _n("dirty is not a string, aborting");
      } else
        throw _n("toString is not a function");
    if (!t.isSupported)
      return x;
    if (we || Dt(w), t.removed = [], typeof x == "string" && (pe = !1), pe) {
      if (x.nodeName) {
        const $e = ge(x.nodeName);
        if (!de[$e] || v[$e])
          throw _n("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (x instanceof m)
      O = br("<!---->"), K = O.ownerDocument.importNode(x, !0), K.nodeType === En.element && K.nodeName === "BODY" || K.nodeName === "HTML" ? O = K : O.appendChild(K);
    else {
      if (!fe && !se && !ee && // eslint-disable-next-line unicorn/prefer-includes
      x.indexOf("<") === -1)
        return $ && he ? $.createHTML(x) : x;
      if (O = br(x), !O)
        return fe ? null : he ? y : "";
    }
    O && oe && ot(O.firstChild);
    const Ae = zt(pe ? x : O);
    for (; Te = Ae.nextNode(); )
      yr(Te), er(Te), Te.content instanceof s && Wt(Te.content);
    if (pe)
      return x;
    if (fe) {
      if (se) {
        O.normalize();
        let $e = O.innerHTML;
        Tn([ue, be, ke], (ft) => {
          $e = Kr($e, ft, " ");
        }), O.innerHTML = $e;
      }
      if (Ge)
        for (_e = Se.call(O.ownerDocument); O.firstChild; )
          _e.appendChild(O.firstChild);
      else
        _e = O;
      return (I.shadowroot || I.shadowrootmode) && (_e = Pe.call(n, _e, !0)), _e;
    }
    let We = ee ? O.outerHTML : O.innerHTML;
    return ee && de["!doctype"] && O.ownerDocument && O.ownerDocument.doctype && O.ownerDocument.doctype.name && _t(Wl, O.ownerDocument.doctype.name) && (We = "<!DOCTYPE " + O.ownerDocument.doctype.name + `>
` + We), se && Tn([ue, be, ke], ($e) => {
      We = Kr(We, $e, " ");
    }), $ && he ? $.createHTML(We) : We;
  }, t.setConfig = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Dt(x), we = !0;
  }, t.clearConfig = function() {
    pt = null, we = !1;
  }, t.isValidAttribute = function(x, w, O) {
    pt || Dt({});
    const K = ge(x), Te = ge(w);
    return Lt(K, Te, O);
  }, t.addHook = function(x, w) {
    typeof w == "function" && Cn(ie[x], w);
  }, t.removeHook = function(x, w) {
    if (w !== void 0) {
      const O = Fp(ie[x], w);
      return O === -1 ? void 0 : $p(ie[x], O, 1)[0];
    }
    return As(ie[x]);
  }, t.removeHooks = function(x) {
    ie[x] = [];
  }, t.removeAllHooks = function() {
    ie = Is();
  }, t;
}
var Ps = Hl();
let fa = null;
function rf() {
  return fa || (typeof window < "u" ? fa = Ps(window) : fa = Ps), fa;
}
const Vt = (e) => ({ __html: rf().sanitize(e) });
function* Yr(e = "id-", t = 0) {
  let r = t;
  for (; ; )
    r += 1, yield e + r;
}
function nf() {
  const e = (
    // @ts-ignore
    (document.currentScript && document.currentScript.src || "").match(
      /(.*\/)/
    )
  );
  return e && e.length > 0 ? e[0].substr(0, e[0].length - 1) : "/";
}
var pi = { exports: {} }, fi, Ds;
function af() {
  if (Ds) return fi;
  Ds = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return fi = e, fi;
}
var mi, Ls;
function of() {
  if (Ls) return mi;
  Ls = 1;
  var e = /* @__PURE__ */ af();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, mi = function() {
    function n(p, m, b, f, k, A) {
      if (A !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
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
  }, mi;
}
var Ms;
function sf() {
  return Ms || (Ms = 1, pi.exports = /* @__PURE__ */ of()()), pi.exports;
}
var wa = /* @__PURE__ */ sf();
const _ = /* @__PURE__ */ Yi(wa);
_.shape({
  event: _.string,
  action: _.string,
  name: _.string,
  region: _.string,
  section: _.string,
  component: _.string,
  type: _.string,
  text: _.string
});
const zn = ({ children: e }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: e });
zn.propTypes = {
  children: _.oneOfType([
    _.arrayOf(_.node),
    _.node,
    _.string
  ])
};
var hi = { exports: {} };
var Fs;
function lf() {
  return Fs || (Fs = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var s = "", p = 0; p < arguments.length; p++) {
          var m = arguments[p];
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
        var p = "";
        for (var m in s)
          t.call(s, m) && s[m] && (p = a(p, m));
        return p;
      }
      function a(s, p) {
        return p ? s ? s + " " + p : s + p : s;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(hi)), hi.exports;
}
var cf = lf();
const uf = /* @__PURE__ */ Yi(cf);
({
  ...zn.propTypes
});
const Bl = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ d.jsx("div", { className: t, ...r, children: /* @__PURE__ */ d.jsx("div", { className: "row", children: e }) });
Bl.propTypes = {
  children: zn.propTypes.children
};
({
  ...Bl.propTypes
});
zn.propTypes.children, _.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
zn.propTypes.children;
function Vl({
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
var gi = { exports: {} }, Ke = {};
var $s;
function df() {
  if ($s) return Ke;
  $s = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), F = Symbol.for("react.client.reference");
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var R = S.$$typeof;
      switch (R) {
        case e:
          switch (S = S.type, S) {
            case r:
            case a:
            case n:
            case b:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case p:
                case m:
                case A:
                case k:
                  return S;
                case s:
                  return S;
                default:
                  return R;
              }
          }
        case t:
          return R;
      }
    }
  }
  return Ke.ContextConsumer = s, Ke.ContextProvider = p, Ke.Element = e, Ke.ForwardRef = m, Ke.Fragment = r, Ke.Lazy = A, Ke.Memo = k, Ke.Portal = t, Ke.Profiler = a, Ke.StrictMode = n, Ke.Suspense = b, Ke.SuspenseList = f, Ke.isContextConsumer = function(S) {
    return E(S) === s;
  }, Ke.isContextProvider = function(S) {
    return E(S) === p;
  }, Ke.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Ke.isForwardRef = function(S) {
    return E(S) === m;
  }, Ke.isFragment = function(S) {
    return E(S) === r;
  }, Ke.isLazy = function(S) {
    return E(S) === A;
  }, Ke.isMemo = function(S) {
    return E(S) === k;
  }, Ke.isPortal = function(S) {
    return E(S) === t;
  }, Ke.isProfiler = function(S) {
    return E(S) === a;
  }, Ke.isStrictMode = function(S) {
    return E(S) === n;
  }, Ke.isSuspense = function(S) {
    return E(S) === b;
  }, Ke.isSuspenseList = function(S) {
    return E(S) === f;
  }, Ke.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === a || S === n || S === b || S === f || S === j || typeof S == "object" && S !== null && (S.$$typeof === A || S.$$typeof === k || S.$$typeof === p || S.$$typeof === s || S.$$typeof === m || S.$$typeof === F || S.getModuleId !== void 0);
  }, Ke.typeOf = E, Ke;
}
var Us;
function pf() {
  return Us || (Us = 1, gi.exports = /* @__PURE__ */ df()), gi.exports;
}
var Gl = /* @__PURE__ */ pf();
function ff(e) {
  function t(B, I, H, q, v) {
    for (var ne = 0, N = 0, le = 0, te = 0, ae, Z, se = 0, me = 0, ee, we = ee = ae = 0, oe = 0, fe = 0, Ge = 0, he = 0, dt = H.length, Xe = dt - 1, Ne, X = "", pe = "", et = "", Ue = "", ze; oe < dt; ) {
      if (Z = H.charCodeAt(oe), oe === Xe && N + te + le + ne !== 0 && (N !== 0 && (Z = N === 47 ? 10 : 47), te = le = ne = 0, dt++, Xe++), N + te + le + ne === 0) {
        if (oe === Xe && (0 < fe && (X = X.replace(j, "")), 0 < X.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              X += H.charAt(oe);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for (X = X.trim(), ae = X.charCodeAt(0), ee = 1, he = ++oe; oe < dt; ) {
              switch (Z = H.charCodeAt(oe)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (Z = H.charCodeAt(oe + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (we = oe + 1; we < Xe; ++we)
                          switch (H.charCodeAt(we)) {
                            case 47:
                              if (Z === 42 && H.charCodeAt(we - 1) === 42 && oe + 2 !== we) {
                                oe = we + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                oe = we + 1;
                                break e;
                              }
                          }
                        oe = we;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; oe++ < Xe && H.charCodeAt(oe) !== Z; )
                    ;
              }
              if (ee === 0) break;
              oe++;
            }
            switch (ee = H.substring(he, oe), ae === 0 && (ae = (X = X.replace(A, "").trim()).charCodeAt(0)), ae) {
              case 64:
                switch (0 < fe && (X = X.replace(j, "")), Z = X.charCodeAt(1), Z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = I;
                    break;
                  default:
                    fe = Qe;
                }
                if (ee = t(I, fe, ee, Z, v + 1), he = ee.length, 0 < Ee && (fe = r(Qe, X, Ge), ze = m(3, ee, fe, I, be, ue, he, Z, v, q), X = fe.join(""), ze !== void 0 && (he = (ee = ze.trim()).length) === 0 && (Z = 0, ee = "")), 0 < he) switch (Z) {
                  case 115:
                    X = X.replace(J, p);
                  case 100:
                  case 109:
                  case 45:
                    ee = X + "{" + ee + "}";
                    break;
                  case 107:
                    X = X.replace(z, "$1 $2"), ee = X + "{" + ee + "}", ee = ye === 1 || ye === 2 && s("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                    break;
                  default:
                    ee = X + ee, q === 112 && (ee = (pe += ee, ""));
                }
                else ee = "";
                break;
              default:
                ee = t(I, r(I, X, Ge), ee, q, v + 1);
            }
            et += ee, ee = Ge = fe = we = ae = 0, X = "", Z = H.charCodeAt(++oe);
            break;
          case 125:
          case 59:
            if (X = (0 < fe ? X.replace(j, "") : X).trim(), 1 < (he = X.length)) switch (we === 0 && (ae = X.charCodeAt(0), ae === 45 || 96 < ae && 123 > ae) && (he = (X = X.replace(" ", ":")).length), 0 < Ee && (ze = m(1, X, I, B, be, ue, pe.length, q, v, q)) !== void 0 && (he = (X = ze.trim()).length) === 0 && (X = "\0\0"), ae = X.charCodeAt(0), Z = X.charCodeAt(1), ae) {
              case 0:
                break;
              case 64:
                if (Z === 105 || Z === 99) {
                  Ue += X + H.charAt(oe);
                  break;
                }
              default:
                X.charCodeAt(he - 1) !== 58 && (pe += a(X, ae, Z, X.charCodeAt(2)));
            }
            Ge = fe = we = ae = 0, X = "", Z = H.charCodeAt(++oe);
        }
      }
      switch (Z) {
        case 13:
        case 10:
          N === 47 ? N = 0 : 1 + ae === 0 && q !== 107 && 0 < X.length && (fe = 1, X += "\0"), 0 < Ee * He && m(0, X, I, B, be, ue, pe.length, q, v, q), ue = 1, be++;
          break;
        case 59:
        case 125:
          if (N + te + le + ne === 0) {
            ue++;
            break;
          }
        default:
          switch (ue++, Ne = H.charAt(oe), Z) {
            case 9:
            case 32:
              if (te + ne + N === 0) switch (se) {
                case 44:
                case 58:
                case 9:
                case 32:
                  Ne = "";
                  break;
                default:
                  Z !== 32 && (Ne = " ");
              }
              break;
            case 0:
              Ne = "\\0";
              break;
            case 12:
              Ne = "\\f";
              break;
            case 11:
              Ne = "\\v";
              break;
            case 38:
              te + N + ne === 0 && (fe = Ge = 1, Ne = "\f" + Ne);
              break;
            case 108:
              if (te + N + ne + ke === 0 && 0 < we) switch (oe - we) {
                case 2:
                  se === 112 && H.charCodeAt(oe - 3) === 58 && (ke = se);
                case 8:
                  me === 111 && (ke = me);
              }
              break;
            case 58:
              te + N + ne === 0 && (we = oe);
              break;
            case 44:
              N + le + te + ne === 0 && (fe = 1, Ne += "\r");
              break;
            case 34:
            case 39:
              N === 0 && (te = te === Z ? 0 : te === 0 ? Z : te);
              break;
            case 91:
              te + N + le === 0 && ne++;
              break;
            case 93:
              te + N + le === 0 && ne--;
              break;
            case 41:
              te + N + ne === 0 && le--;
              break;
            case 40:
              if (te + N + ne === 0) {
                if (ae === 0) switch (2 * se + 3 * me) {
                  case 533:
                    break;
                  default:
                    ae = 1;
                }
                le++;
              }
              break;
            case 64:
              N + le + te + ne + we + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + ne + le)) switch (N) {
                case 0:
                  switch (2 * Z + 3 * H.charCodeAt(oe + 1)) {
                    case 235:
                      N = 47;
                      break;
                    case 220:
                      he = oe, N = 42;
                  }
                  break;
                case 42:
                  Z === 47 && se === 42 && he + 2 !== oe && (H.charCodeAt(he + 2) === 33 && (pe += H.substring(he, oe + 1)), Ne = "", N = 0);
              }
          }
          N === 0 && (X += Ne);
      }
      me = se, se = Z, oe++;
    }
    if (he = pe.length, 0 < he) {
      if (fe = I, 0 < Ee && (ze = m(2, pe, fe, B, be, ue, he, q, v, q), ze !== void 0 && (pe = ze).length === 0)) return Ue + pe + et;
      if (pe = fe.join(",") + "{" + pe + "}", ye * ke !== 0) {
        switch (ye !== 2 || s(pe, 2) || (ke = 0), ke) {
          case 111:
            pe = pe.replace($, ":-moz-$1") + pe;
            break;
          case 112:
            pe = pe.replace(G, "::-webkit-input-$1") + pe.replace(G, "::-moz-$1") + pe.replace(G, ":-ms-input-$1") + pe;
        }
        ke = 0;
      }
    }
    return Ue + pe + et;
  }
  function r(B, I, H) {
    var q = I.trim().split(R);
    I = q;
    var v = q.length, ne = B.length;
    switch (ne) {
      case 0:
      case 1:
        var N = 0;
        for (B = ne === 0 ? "" : B[0] + " "; N < v; ++N)
          I[N] = n(B, I[N], H).trim();
        break;
      default:
        var le = N = 0;
        for (I = []; N < v; ++N)
          for (var te = 0; te < ne; ++te)
            I[le++] = n(B[te] + " ", q[N], H).trim();
    }
    return I;
  }
  function n(B, I, H) {
    var q = I.charCodeAt(0);
    switch (33 > q && (q = (I = I.trim()).charCodeAt(0)), q) {
      case 38:
        return I.replace(W, "$1" + B.trim());
      case 58:
        return B.trim() + I.replace(W, "$1" + B.trim());
      default:
        if (0 < 1 * H && 0 < I.indexOf("\f")) return I.replace(W, (B.charCodeAt(0) === 58 ? "" : "$1") + B.trim());
    }
    return B + I;
  }
  function a(B, I, H, q) {
    var v = B + ";", ne = 2 * I + 3 * H + 4 * q;
    if (ne === 944) {
      B = v.indexOf(":", 9) + 1;
      var N = v.substring(B, v.length - 1).trim();
      return N = v.substring(0, B).trim() + N + ";", ye === 1 || ye === 2 && s(N, 1) ? "-webkit-" + N + N : N;
    }
    if (ye === 0 || ye === 2 && !s(v, 1)) return v;
    switch (ne) {
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
        if (0 < v.indexOf("image-set(", 11)) return v.replace(ie, "$1-webkit-$2") + v;
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
        return N = v.substring(v.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + N + "-webkit-" + v + "-ms-flex-pack" + N + v;
      case 1005:
        return E.test(v) ? v.replace(F, ":-webkit-") + v.replace(F, ":-moz-") + v : v;
      case 1e3:
        switch (N = v.substring(13).trim(), I = N.indexOf("-") + 1, N.charCodeAt(0) + N.charCodeAt(I)) {
          case 226:
            N = v.replace(y, "tb");
            break;
          case 232:
            N = v.replace(y, "tb-rl");
            break;
          case 220:
            N = v.replace(y, "lr");
            break;
          default:
            return v;
        }
        return "-webkit-" + v + "-ms-" + N + v;
      case 1017:
        if (v.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (I = (v = B).length - 10, N = (v.charCodeAt(I) === 33 ? v.substring(0, I) : v).substring(B.indexOf(":", 7) + 1).trim(), ne = N.charCodeAt(0) + (N.charCodeAt(7) | 0)) {
          case 203:
            if (111 > N.charCodeAt(8)) break;
          case 115:
            v = v.replace(N, "-webkit-" + N) + ";" + v;
            break;
          case 207:
          case 102:
            v = v.replace(N, "-webkit-" + (102 < ne ? "inline-" : "") + "box") + ";" + v.replace(N, "-webkit-" + N) + ";" + v.replace(N, "-ms-" + N + "box") + ";" + v;
        }
        return v + ";";
      case 938:
        if (v.charCodeAt(5) === 45) switch (v.charCodeAt(6)) {
          case 105:
            return N = v.replace("-items", ""), "-webkit-" + v + "-webkit-box-" + N + "-ms-flex-" + N + v;
          case 115:
            return "-webkit-" + v + "-ms-flex-item-" + v.replace(Se, "") + v;
          default:
            return "-webkit-" + v + "-ms-flex-line-pack" + v.replace("align-content", "").replace(Se, "") + v;
        }
        break;
      case 973:
      case 989:
        if (v.charCodeAt(3) !== 45 || v.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Pe.test(B) === !0) return (N = B.substring(B.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(B.replace("stretch", "fill-available"), I, H, q).replace(":fill-available", ":stretch") : v.replace(N, "-webkit-" + N) + v.replace(N, "-moz-" + N.replace("fill-", "")) + v;
        break;
      case 962:
        if (v = "-webkit-" + v + (v.charCodeAt(5) === 102 ? "-ms-" + v : "") + v, H + q === 211 && v.charCodeAt(13) === 105 && 0 < v.indexOf("transform", 10)) return v.substring(0, v.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + v;
    }
    return v;
  }
  function s(B, I) {
    var H = B.indexOf(I === 1 ? ":" : "{"), q = B.substring(0, I !== 3 ? H : 10);
    return H = B.substring(H + 1, B.length - 1), Fe(I !== 2 ? q : q.replace(je, "$1"), H, I);
  }
  function p(B, I) {
    var H = a(I, I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2));
    return H !== I + ";" ? H.replace(ce, " or ($1)").substring(4) : "(" + I + ")";
  }
  function m(B, I, H, q, v, ne, N, le, te, ae) {
    for (var Z = 0, se = I, me; Z < Ee; ++Z)
      switch (me = Re[Z].call(k, B, se, H, q, v, ne, N, le, te, ae)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = me;
      }
    if (se !== I) return se;
  }
  function b(B) {
    switch (B) {
      case void 0:
      case null:
        Ee = Re.length = 0;
        break;
      default:
        if (typeof B == "function") Re[Ee++] = B;
        else if (typeof B == "object") for (var I = 0, H = B.length; I < H; ++I)
          b(B[I]);
        else He = !!B | 0;
    }
    return b;
  }
  function f(B) {
    return B = B.prefix, B !== void 0 && (Fe = null, B ? typeof B != "function" ? ye = 1 : (ye = 2, Fe = B) : ye = 0), f;
  }
  function k(B, I) {
    var H = B;
    if (33 > H.charCodeAt(0) && (H = H.trim()), de = H, H = [de], 0 < Ee) {
      var q = m(-1, I, H, H, be, ue, 0, 0, 0, 0);
      q !== void 0 && typeof q == "string" && (I = q);
    }
    var v = t(Qe, H, I, 0, 0);
    return 0 < Ee && (q = m(-2, v, H, H, be, ue, v.length, 0, 0, 0), q !== void 0 && (v = q)), de = "", ke = 0, ue = be = 1, v;
  }
  var A = /^\0+/g, j = /[\0\r\f]/g, F = /: */g, E = /zoo|gra/, S = /([,: ])(transform)/g, R = /,\r+?/g, W = /([\t\r\n ])*\f?&/g, z = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, $ = /:(read-only)/g, y = /[svh]\w+-[tblr]{2}/, J = /\(\s*(.*)\s*\)/g, ce = /([\s\S]*?);/g, Se = /-self|flex-/g, je = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Pe = /stretch|:\s*\w+\-(?:conte|avail)/, ie = /([^-])(image-set\()/, ue = 1, be = 1, ke = 0, ye = 1, Qe = [], Re = [], Ee = 0, Fe = null, He = 0, de = "";
  return k.use = b, k.set = f, e !== void 0 && f(e), k;
}
var mf = {
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
function hf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var gf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, zs = /* @__PURE__ */ hf(
  function(e) {
    return gf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), bi = { exports: {} }, Ve = {};
var qs;
function bf() {
  if (qs) return Ve;
  qs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, k = e ? Symbol.for("react.forward_ref") : 60112, A = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, F = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, W = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function G(y) {
    if (typeof y == "object" && y !== null) {
      var J = y.$$typeof;
      switch (J) {
        case t:
          switch (y = y.type, y) {
            case b:
            case f:
            case n:
            case s:
            case a:
            case A:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case m:
                case k:
                case E:
                case F:
                case p:
                  return y;
                default:
                  return J;
              }
          }
        case r:
          return J;
      }
    }
  }
  function $(y) {
    return G(y) === f;
  }
  return Ve.AsyncMode = b, Ve.ConcurrentMode = f, Ve.ContextConsumer = m, Ve.ContextProvider = p, Ve.Element = t, Ve.ForwardRef = k, Ve.Fragment = n, Ve.Lazy = E, Ve.Memo = F, Ve.Portal = r, Ve.Profiler = s, Ve.StrictMode = a, Ve.Suspense = A, Ve.isAsyncMode = function(y) {
    return $(y) || G(y) === b;
  }, Ve.isConcurrentMode = $, Ve.isContextConsumer = function(y) {
    return G(y) === m;
  }, Ve.isContextProvider = function(y) {
    return G(y) === p;
  }, Ve.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Ve.isForwardRef = function(y) {
    return G(y) === k;
  }, Ve.isFragment = function(y) {
    return G(y) === n;
  }, Ve.isLazy = function(y) {
    return G(y) === E;
  }, Ve.isMemo = function(y) {
    return G(y) === F;
  }, Ve.isPortal = function(y) {
    return G(y) === r;
  }, Ve.isProfiler = function(y) {
    return G(y) === s;
  }, Ve.isStrictMode = function(y) {
    return G(y) === a;
  }, Ve.isSuspense = function(y) {
    return G(y) === A;
  }, Ve.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === f || y === s || y === a || y === A || y === j || typeof y == "object" && y !== null && (y.$$typeof === E || y.$$typeof === F || y.$$typeof === p || y.$$typeof === m || y.$$typeof === k || y.$$typeof === R || y.$$typeof === W || y.$$typeof === z || y.$$typeof === S);
  }, Ve.typeOf = G, Ve;
}
var Ws;
function yf() {
  return Ws || (Ws = 1, bi.exports = bf()), bi.exports;
}
var yi, Hs;
function xf() {
  if (Hs) return yi;
  Hs = 1;
  var e = yf(), t = {
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
  function p(E) {
    return e.isMemo(E) ? a : s[E.$$typeof] || t;
  }
  var m = Object.defineProperty, b = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, k = Object.getOwnPropertyDescriptor, A = Object.getPrototypeOf, j = Object.prototype;
  function F(E, S, R) {
    if (typeof S != "string") {
      if (j) {
        var W = A(S);
        W && W !== j && F(E, W, R);
      }
      var z = b(S);
      f && (z = z.concat(f(S)));
      for (var G = p(E), $ = p(S), y = 0; y < z.length; ++y) {
        var J = z[y];
        if (!r[J] && !(R && R[J]) && !($ && $[J]) && !(G && G[J])) {
          var ce = k(S, J);
          try {
            m(E, J, ce);
          } catch {
          }
        }
      }
    }
    return E;
  }
  return yi = F, yi;
}
var vf = xf();
const wf = /* @__PURE__ */ Yi(vf);
var kt = { env: { NODE_ENV: "production" } };
function gr() {
  return (gr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Bs = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Li = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Gl.typeOf(e);
}, Aa = Object.freeze([]), Rr = Object.freeze({});
function Mn(e) {
  return typeof e == "function";
}
function Vs(e) {
  return e.displayName || e.name || "Component";
}
function ro(e) {
  return e && typeof e.styledComponentId == "string";
}
var an = typeof kt < "u" && kt.env !== void 0 && (kt.env.REACT_APP_SC_ATTR || kt.env.SC_ATTR) || "data-styled", no = typeof window < "u" && "HTMLElement" in window, Sf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof kt < "u" && kt.env !== void 0 && (kt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && kt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? kt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && kt.env.REACT_APP_SC_DISABLE_SPEEDY : kt.env.SC_DISABLE_SPEEDY !== void 0 && kt.env.SC_DISABLE_SPEEDY !== "" ? kt.env.SC_DISABLE_SPEEDY !== "false" && kt.env.SC_DISABLE_SPEEDY : kt.env.NODE_ENV !== "production")), kf = {};
function qn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Tf = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, p = s; r >= p; ) (p <<= 1) < 0 && qn(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(a), this.length = p;
      for (var m = s; m < p; m++) this.groupSizes[m] = 0;
    }
    for (var b = this.indexOfGroup(r + 1), f = 0, k = n.length; f < k; f++) this.tag.insertRule(b, n[f]) && (this.groupSizes[r]++, b++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var p = a; p < s; p++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), p = s + a, m = s; m < p; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), Sa = /* @__PURE__ */ new Map(), Ea = /* @__PURE__ */ new Map(), Dn = 1, ma = function(e) {
  if (Sa.has(e)) return Sa.get(e);
  for (; Ea.has(Dn); ) Dn++;
  var t = Dn++;
  return Sa.set(e, t), Ea.set(t, e), t;
}, Cf = function(e) {
  return Ea.get(e);
}, _f = function(e, t) {
  t >= Dn && (Dn = t + 1), Sa.set(e, t), Ea.set(t, e);
}, Af = "style[" + an + '][data-styled-version="5.3.11"]', Ef = new RegExp("^" + an + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), jf = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, p = a.length; s < p; s++) (n = a[s]) && e.registerName(t, n);
}, Nf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var p = r[a].trim();
    if (p) {
      var m = p.match(Ef);
      if (m) {
        var b = 0 | parseInt(m[1], 10), f = m[2];
        b !== 0 && (_f(f, b), jf(e, f, m[3]), e.getTag().insertRules(b, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, Rf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Yl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(m) {
    for (var b = m.childNodes, f = b.length; f >= 0; f--) {
      var k = b[f];
      if (k && k.nodeType === 1 && k.hasAttribute(an)) return k;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(an, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = Rf();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, Of = function() {
  function e(r) {
    var n = this.element = Yl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, p = 0, m = s.length; p < m; p++) {
        var b = s[p];
        if (b.ownerNode === a) return b;
      }
      qn(17);
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
}(), If = function() {
  function e(r) {
    var n = this.element = Yl(r);
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
}(), Pf = function() {
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
}(), Gs = no, Df = { isServer: !no, useCSSOMInjection: !Sf }, ja = function() {
  function e(r, n, a) {
    r === void 0 && (r = Rr), n === void 0 && (n = {}), this.options = gr({}, Df, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && no && Gs && (Gs = !1, function(s) {
      for (var p = document.querySelectorAll(Af), m = 0, b = p.length; m < b; m++) {
        var f = p[m];
        f && f.getAttribute(an) !== "active" && (Nf(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ma(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(gr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = a ? new Pf(p) : s ? new Of(p) : new If(p), new Tf(r)));
    var r, n, a, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ma(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(ma(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ma(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", p = 0; p < a; p++) {
        var m = Cf(p);
        if (m !== void 0) {
          var b = r.names.get(m), f = n.getGroup(p);
          if (b && f && b.size) {
            var k = an + ".g" + p + '[id="' + m + '"]', A = "";
            b !== void 0 && b.forEach(function(j) {
              j.length > 0 && (A += j + ",");
            }), s += "" + f + k + '{content:"' + A + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Lf = /(a)(d)/gi, Ys = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Mi(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ys(t % 52) + r;
  return (Ys(t % 52) + r).replace(Lf, "$1-$2");
}
var en = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Xl = function(e) {
  return en(5381, e);
};
function Zl(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Mn(r) && !ro(r)) return !1;
  }
  return !0;
}
var Mf = Xl("5.3.11"), Ff = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Zl(t), this.componentId = r, this.baseHash = en(Mf, r), this.baseStyle = n, ja.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = Vr(this.rules, t, r, n).join(""), m = Mi(en(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(a, m)) {
        var b = n(p, "." + m, void 0, a);
        r.insertRules(a, m, b);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, k = en(this.baseHash, n.hash), A = "", j = 0; j < f; j++) {
        var F = this.rules[j];
        if (typeof F == "string") A += F;
        else if (F) {
          var E = Vr(F, t, r, n), S = Array.isArray(E) ? E.join("") : E;
          k = en(k, S + j), A += S;
        }
      }
      if (A) {
        var R = Mi(k >>> 0);
        if (!r.hasNameForId(a, R)) {
          var W = n(A, "." + R, void 0, a);
          r.insertRules(a, R, W);
        }
        s.push(R);
      }
    }
    return s.join(" ");
  }, e;
}(), $f = /^\s*\/\/.*$/gm, Uf = [":", "[", ".", "#"];
function zf(e) {
  var t, r, n, a, s = Rr, p = s.options, m = p === void 0 ? Rr : p, b = s.plugins, f = b === void 0 ? Aa : b, k = new ff(m), A = [], j = /* @__PURE__ */ function(S) {
    function R(W) {
      if (W) try {
        S(W + "}");
      } catch {
      }
    }
    return function(W, z, G, $, y, J, ce, Se, je, Pe) {
      switch (W) {
        case 1:
          if (je === 0 && z.charCodeAt(0) === 64) return S(z + ";"), "";
          break;
        case 2:
          if (Se === 0) return z + "/*|*/";
          break;
        case 3:
          switch (Se) {
            case 102:
            case 112:
              return S(G[0] + z), "";
            default:
              return z + (Pe === 0 ? "/*|*/" : "");
          }
        case -2:
          z.split("/*|*/}").forEach(R);
      }
    };
  }(function(S) {
    A.push(S);
  }), F = function(S, R, W) {
    return R === 0 && Uf.indexOf(W[r.length]) !== -1 || W.match(a) ? S : "." + t;
  };
  function E(S, R, W, z) {
    z === void 0 && (z = "&");
    var G = S.replace($f, ""), $ = R && W ? W + " " + R + " { " + G + " }" : G;
    return t = z, r = R, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), k(W || !R ? "" : R, $);
  }
  return k.use([].concat(f, [function(S, R, W) {
    S === 2 && W.length && W[0].lastIndexOf(r) > 0 && (W[0] = W[0].replace(n, F));
  }, j, function(S) {
    if (S === -2) {
      var R = A;
      return A = [], R;
    }
  }])), E.hash = f.length ? f.reduce(function(S, R) {
    return R.name || qn(15), en(S, R.name);
  }, 5381).toString() : "", E;
}
var Kl = mt.createContext();
Kl.Consumer;
var Jl = mt.createContext(), qf = (Jl.Consumer, new ja()), Fi = zf();
function Ql() {
  return Gt(Kl) || qf;
}
function ec() {
  return Gt(Jl) || Fi;
}
var Wf = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = Fi);
      var p = n.name + s.hash;
      a.hasNameForId(n.id, p) || a.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return qn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Fi), this.name + t.hash;
  }, e;
}(), Hf = /([A-Z])/, Bf = /([A-Z])/g, Vf = /^ms-/, Gf = function(e) {
  return "-" + e.toLowerCase();
};
function Xs(e) {
  return Hf.test(e) ? e.replace(Bf, Gf).replace(Vf, "-ms-") : e;
}
var Zs = function(e) {
  return e == null || e === !1 || e === "";
};
function Vr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], p = 0, m = e.length; p < m; p += 1) (a = Vr(e[p], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (Zs(e)) return "";
  if (ro(e)) return "." + e.styledComponentId;
  if (Mn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Vr(b, t, r, n);
  }
  var f;
  return e instanceof Wf ? r ? (e.inject(r, n), e.getName(n)) : e : Li(e) ? function k(A, j) {
    var F, E, S = [];
    for (var R in A) A.hasOwnProperty(R) && !Zs(A[R]) && (Array.isArray(A[R]) && A[R].isCss || Mn(A[R]) ? S.push(Xs(R) + ":", A[R], ";") : Li(A[R]) ? S.push.apply(S, k(A[R], R)) : S.push(Xs(R) + ": " + (F = R, (E = A[R]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || F in mf || F.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return j ? [j + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var Ks = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function ao(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Mn(e) || Li(e) ? Ks(Vr(Bs(Aa, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ks(Vr(Bs(e, r)));
}
var tc = function(e, t, r) {
  return r === void 0 && (r = Rr), e.theme !== r.theme && e.theme || t || r.theme;
}, Yf = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Xf = /(^-|-$)/g;
function xi(e) {
  return e.replace(Yf, "-").replace(Xf, "");
}
var rc = function(e) {
  return Mi(Xl(e) >>> 0);
};
function ha(e) {
  return typeof e == "string" && kt.env.NODE_ENV === "production";
}
var $i = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Zf = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Kf(e, t, r) {
  var n = e[r];
  $i(t) && $i(n) ? nc(n, t) : e[r] = t;
}
function nc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var p = s[a];
    if ($i(p)) for (var m in p) Zf(m) && Kf(e, p[m], m);
  }
  return e;
}
var io = mt.createContext();
io.Consumer;
var vi = {};
function ac(e, t, r) {
  var n = ro(e), a = !ha(e), s = t.attrs, p = s === void 0 ? Aa : s, m = t.componentId, b = m === void 0 ? function(z, G) {
    var $ = typeof z != "string" ? "sc" : xi(z);
    vi[$] = (vi[$] || 0) + 1;
    var y = $ + "-" + rc("5.3.11" + $ + vi[$]);
    return G ? G + "-" + y : y;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, k = f === void 0 ? function(z) {
    return ha(z) ? "styled." + z : "Styled(" + Vs(z) + ")";
  }(e) : f, A = t.displayName && t.componentId ? xi(t.displayName) + "-" + t.componentId : t.componentId || b, j = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, F = t.shouldForwardProp;
  n && e.shouldForwardProp && (F = t.shouldForwardProp ? function(z, G, $) {
    return e.shouldForwardProp(z, G, $) && t.shouldForwardProp(z, G, $);
  } : e.shouldForwardProp);
  var E, S = new Ff(r, A, n ? e.componentStyle : void 0), R = S.isStatic && p.length === 0, W = function(z, G) {
    return function($, y, J, ce) {
      var Se = $.attrs, je = $.componentStyle, Pe = $.defaultProps, ie = $.foldedComponentIds, ue = $.shouldForwardProp, be = $.styledComponentId, ke = $.target, ye = function(q, v, ne) {
        q === void 0 && (q = Rr);
        var N = gr({}, v, { theme: q }), le = {};
        return ne.forEach(function(te) {
          var ae, Z, se, me = te;
          for (ae in Mn(me) && (me = me(N)), me) N[ae] = le[ae] = ae === "className" ? (Z = le[ae], se = me[ae], Z && se ? Z + " " + se : Z || se) : me[ae];
        }), [N, le];
      }(tc(y, Gt(io), Pe) || Rr, y, Se), Qe = ye[0], Re = ye[1], Ee = function(q, v, ne, N) {
        var le = Ql(), te = ec(), ae = v ? q.generateAndInjectStyles(Rr, le, te) : q.generateAndInjectStyles(ne, le, te);
        return ae;
      }(je, ce, Qe), Fe = J, He = Re.$as || y.$as || Re.as || y.as || ke, de = ha(He), B = Re !== y ? gr({}, y, {}, Re) : y, I = {};
      for (var H in B) H[0] !== "$" && H !== "as" && (H === "forwardedAs" ? I.as = B[H] : (ue ? ue(H, zs, He) : !de || zs(H)) && (I[H] = B[H]));
      return y.style && Re.style !== y.style && (I.style = gr({}, y.style, {}, Re.style)), I.className = Array.prototype.concat(ie, be, Ee !== be ? Ee : null, y.className, Re.className).filter(Boolean).join(" "), I.ref = Fe, ul(He, I);
    }(E, z, G, R);
  };
  return W.displayName = k, (E = mt.forwardRef(W)).attrs = j, E.componentStyle = S, E.displayName = k, E.shouldForwardProp = F, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Aa, E.styledComponentId = A, E.target = n ? e.target : e, E.withComponent = function(z) {
    var G = t.componentId, $ = function(J, ce) {
      if (J == null) return {};
      var Se, je, Pe = {}, ie = Object.keys(J);
      for (je = 0; je < ie.length; je++) Se = ie[je], ce.indexOf(Se) >= 0 || (Pe[Se] = J[Se]);
      return Pe;
    }(t, ["componentId"]), y = G && G + "-" + (ha(z) ? z : xi(Vs(z)));
    return ac(z, gr({}, $, { attrs: j, componentId: y }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(z) {
    this._foldedDefaultProps = n ? nc({}, e.defaultProps, z) : z;
  } }), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), a && wf(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var Je = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Rr), !Gl.isValidElementType(n)) return qn(1, String(n));
    var s = function() {
      return r(n, a, ao.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, gr({}, a, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, gr({}, a, { attrs: Array.prototype.concat(a.attrs, p).filter(Boolean) }));
    }, s;
  }(ac, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Je[e] = Je(e);
});
var Jf = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = Zl(r), ja.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(r, n, a, s) {
    var p = s(Vr(this.rules, n, a, s).join(""), ""), m = this.componentId + r;
    a.insertRules(m, m, p);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, a, s) {
    r > 2 && ja.registerId(this.componentId + r), this.removeStyles(r, a), this.createStyles(r, n, a, s);
  }, e;
}();
function Ia(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  var a = ao.apply(void 0, [e].concat(r)), s = "sc-global-" + rc(JSON.stringify(a)), p = new Jf(a, s);
  function m(f) {
    var k = Ql(), A = ec(), j = Gt(io), F = Br(k.allocateGSInstance(s)).current;
    return k.server && b(F, f, k, j, A), gu(function() {
      if (!k.server) return b(F, f, k, j, A), function() {
        return p.removeStyles(F, k);
      };
    }, [F, f, k, j, A]), null;
  }
  function b(f, k, A, j, F) {
    if (p.isStatic) p.renderStyles(f, kf, A, F);
    else {
      var E = gr({}, k, { theme: tc(k, j, m.defaultProps) });
      p.renderStyles(f, E, A, F);
    }
  }
  return mt.memo(m);
}
const Wn = ({ href: e = null }) => (
  // @ts-ignore
  /* @__PURE__ */ d.jsx(Cr, { label: "Apply now", ariaLabel: "Apply now", href: e, color: "gold" })
);
Wn.propTypes = {
  href: _.string
};
_.string;
function oo({ message: e, type: t }) {
  const [r, n] = ct(""), s = {
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
oo.propTypes = {
  type: _.oneOf(["error", "info"]).isRequired,
  message: _.string.isRequired
};
function ic({ message: e }) {
  return /* @__PURE__ */ d.jsx(oo, { message: e, type: "error" });
}
function Qf({ message: e }) {
  return /* @__PURE__ */ d.jsx(oo, { message: e, type: "info" });
}
const em = Je.div`
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
function oc() {
  return /* @__PURE__ */ d.jsxs(em, { "data-testid": "loader", className: "container ball-loader mt-4", children: [
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball1" }),
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball2" }),
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball3" })
  ] });
}
_.shape({
  color: _.oneOf(["gold", "maroon", "gray", "dark"]),
  content: _.shape({
    icon: _.string,
    header: _.string,
    body: _.string
  })
});
const sc = _.shape({
  ariaLabel: _.string,
  color: _.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: _.string,
  href: _.string,
  label: _.string,
  onClick: _.func,
  size: _.oneOf(["default", "small", "xsmall"])
}), so = {
  url: _.string,
  altText: _.string,
  cssClass: _.arrayOf(_.string)
}, lc = {
  text: _.string,
  cssClass: _.arrayOf(_.string)
}, lo = {
  type: _.oneOf(["video", "youtube"]),
  url: _.string,
  altText: _.string,
  vttUrl: _.string,
  title: _.string
}, tm = {
  url: _.string,
  text: _.string,
  isActive: _.bool
}, kr = _.shape({
  ...so
}), Na = _.shape({
  ...lc
}), rm = _.shape({
  ...lo
}), Hr = _.shape({
  ...tm
}), cc = _.shape({
  id: _.string,
  sourceType: _.oneOf(["api", "shared-data-source", "static-json"]),
  // default `api`
  sharedDataSourceId: _.string,
  // only if `dataSourceType == "shared-data-source"``
  data: _.arrayOf(_.object),
  // only if `dataSourceType == "static-json"``
  apiUrl: _.string
  // only if `dataSourceType == "api"``
}), Ui = _.shape({
  text: _.string,
  url: _.string
}), Ur = _.shape({
  icon: _.arrayOf(_.string),
  title: _.string,
  content: _.string,
  buttonLink: sc
}), zi = _.arrayOf(
  _.shape({
    title: _.string,
    url: _.string
  })
), uc = _.shape({
  career: Hr,
  growth: _.oneOfType([_.number, _.string]),
  medianSalary: _.string,
  brightOutlook: _.bool,
  greenOccupation: _.bool
}), nm = {
  hideCollegeSchool: _.bool,
  defaultView: _.oneOf(["list-view", "grid-view"]),
  cardDefaultImage: kr
}, am = _.shape({
  ...nm
}), co = {
  atAGlance: _.bool,
  applicationRequirements: _.bool,
  changeMajorRequirements: _.bool,
  nextSteps: _.bool,
  affordingCollege: _.bool,
  flexibleDegreeOptions: _.bool,
  careerOutlook: _.bool,
  exampleCareers: _.bool,
  customizeYourCollegeExperience: _.bool,
  globalOpportunity: _.bool,
  attendOnline: _.bool,
  whyChooseAsu: _.bool,
  programContactInfo: _.bool,
  externalAnchors: _.arrayOf(
    _.shape({
      targetIdName: _.string,
      text: _.string
    })
  )
}, Jr = _.shape({
  image: kr,
  title: _.string,
  text: _.string,
  button: sc
}), Js = _.shape({
  faculty: Jr,
  programs: Jr,
  research: Jr,
  inclusion: Jr,
  mentors: Jr,
  honors: Jr
}), dc = {
  hide: _.bool,
  sectionIntroText: _.string,
  cards: Js,
  defaultCards: Js
};
_.shape({
  ...co
});
const wi = _.shape({
  id: _.oneOfType([_.string, _.number]),
  value: _.string
}), pc = _.shape({
  locations: _.arrayOf(wi),
  asuLocals: _.arrayOf(wi),
  acceleratedConcurrent: wi
}), im = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, fc = Object.values(im), Qs = {
  offeredBy: { icon: "university", title: "Offered by" },
  locations: { icon: "map-marker-alt", title: "Location" },
  firstRequirementMathCourse: {
    icon: "pencil-alt",
    title: "First Required math Course"
  },
  mathIntensity: { icon: "calculator", title: "Math intensity" },
  timeCommitment: { icon: "calendar-alt", title: "Time commitment" },
  stemOptText: { icon: "star", title: "STEM-OPT extension eligible" }
}, mc = "grid-view", qi = "list-view", hc = "degree-list-programs", gc = "Sorry, Something went wrong.", om = "STEM-OPT for international students on F-1 visas", sm = `This degree is not found.
  This may be a temporary issue. Please try again in 5 minutes.
  If the issue persists, the degree may no longer be available.`, lm = nf(), cm = (e) => {
  const t = e || lm, r = `${t}/assets/img/detail-page`, n = `${t}/assets/img/listing-page`, a = {
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
    detailPageDefault: a,
    listingPageDefault: s
  };
}, um = (e) => {
  if (typeof e == "string") return "Degrees";
  const { program: t, cert: r } = e;
  return t === "undergrad" && r === "true" ? "Undergraduate Minors and Certificates" : t === "undergrad" ? "Undergraduate Degrees" : t === "graduate" && r === "true" ? "Graduate Certificates" : t === "graduate" ? "Graduate Degrees" : "Degrees";
}, uo = [
  { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", text: "Polytechnic campus" },
  { id: 2, value: "TEMPE", text: "Tempe campus" },
  { id: 3, value: "WEST", text: "West Valley campus" },
  { id: 4, value: "ONLNE", text: "ASU Online" }
], dm = uo[4], bc = [
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
], po = [
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
], pm = po[0], Wi = (e) => (e == null ? void 0 : e.value) && (e == null ? void 0 : e.value) !== "all", fm = (e) => {
  var t;
  return ((t = [
    ...uo,
    ...bc,
    ...po
  ].find(({ value: r }) => r === e)) == null ? void 0 : t.text) || e;
}, ut = {
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
}, mm = {
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
}, el = (e, t) => {
  const r = ["TUCSN", "AWC"], n = e.toUpperCase(), a = r.includes(n) ? `${n}-${t}` : n;
  return mm[a];
};
function yc({ anchorMenu: e }) {
  var n, a;
  const t = (n = e == null ? void 0 : e.externalAnchors) == null ? void 0 : n.map((s) => {
    const { targetIdName: p, text: m } = s;
    return {
      targetIdName: p.startsWith("#") ? p.substring(1) : p,
      text: m,
      icon: null
    };
  }), r = Object.keys(ut).filter((s) => e[s]).map((s) => ut[s]).concat(t || []);
  return /* @__PURE__ */ d.jsx(
    Rl,
    {
      items: r,
      firstElementId: (a = r[0]) == null ? void 0 : a.targetIdName,
      focusFirstFocusableElement: !1
    }
  );
}
yc.propTypes = {
  anchorMenu: _.shape(co)
};
function hm(e, t) {
  const r = Math.floor(e / t), n = e % t;
  return r + (n > 0 ? 1 : 0);
}
const gm = "https://degrees.apps.asu.edu", bm = "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan/", ym = {
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
}, xm = {
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
}, tl = (e) => e.map((t) => ({
  title: t.acadPlanDescription,
  url: t.academicOfficeUrl
})).sort((t, r) => t.title.localeCompare(r.title)), vm = (e) => e == null ? void 0 : e.map((t) => ({
  career: {
    text: t.alternateTitle,
    url: `${gm}/career-details/${t.onetCode}`
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
function xc(e, t) {
  const r = { ...t, ...e };
  if (r.collegeAcadOrg && (r.collegeOrg = r.collegeAcadOrg, delete r.collegeAcadOrg), r.program) {
    const { program: m } = r;
    r.cert === "true" && m === "all" ? r.degreeType = "GR,UGCM" : m === "all" ? r.degreeType = "GR,UG" : r.cert === "true" && m === "undergrad" ? r.degreeType = "UGCM" : m === "graduate" ? r.degreeType = "GR" : r.degreeType = "UG", delete r.program;
  }
  r.acadPlan && (r.endpoint += `/${r.acadPlan}`, delete r.acadPlan);
  const { endpoint: n, ...a } = r, s = (m, b) => !b || m === void 0 ? "" : Array.isArray(b) ? `${m}=${b}` : b.split(",").map((f) => `${m}=${f.trim()}`).join("&"), p = Object.keys(a).reduce(
    (m, b) => `${m}&${s(
      b,
      r[b]
    )}`,
    ""
  );
  return `${n}?${p}`;
}
function Pa(e, t = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    fc.includes(e.component) ? e.component : t
  );
}
function Hi(e) {
  return typeof e != "string" ? console.error("Invalid string", e) : e == null ? void 0 : e.replace(
    /\w\S*/g,
    (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
  );
}
function wm(e) {
  return /<\/?[a-z][\s\S]*>/i.test(e);
}
const vc = "AsuDevTools", Sm = {
  isDebug: !1
};
function km() {
  const e = JSON.parse(localStorage.getItem(vc));
  return e == null ? void 0 : e.isDebug;
}
window.__AsuDevTools = {
  enableDebug(e) {
    const t = JSON.stringify({
      ...Sm,
      isDebug: e
    });
    localStorage.setItem(vc, t);
  }
};
async function Si(e) {
  return e != null && e.length ? (await Promise.all(
    e.map(async (r) => {
      try {
        return await (await Promise.race([
          fetch(
            `${bm}${r}?include=academicOfficeUrl&include=acadPlanDescription`
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
function Tm(e, t) {
  Promise.all(e).then((r) => {
    const n = r[0], a = r[1];
    t({ accelerateData: n, concurrentData: a });
  }).catch(() => {
    t({ accelerateData: [], concurrentData: [] });
  });
}
function Hn({ contents: e = [] }) {
  const t = Yr("paragrap-");
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map(
    (r) => wm(r.text) ? /* @__PURE__ */ d.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Vt(r.text)
      },
      t.next().value
    ) : /* @__PURE__ */ d.jsx(
      "p",
      {
        className: `${nn(r.cssClass)}`,
        children: r.text
      },
      t.next().value
    )
  ) });
}
Hn.propTypes = {
  contents: _.arrayOf(Na)
};
const Cm = Ia`
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
`, _m = Je.div`
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
`, Am = Je.img`
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
function on({
  title: e,
  image: t,
  contentDirection: r = "left",
  contents: n = [],
  contentChildren: a = null,
  headingTag: s = "H3"
}) {
  const p = Br(), m = Br(), b = Pa(s);
  function f() {
    const A = p.current.offsetHeight;
    m.current.style.height = `${A * 1.2}px`;
  }
  return At(() => {
    f();
    let k;
    const A = () => {
      clearTimeout(k), k = setTimeout(() => f(), 150);
    };
    return window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
  }, [m, p]), /* @__PURE__ */ d.jsxs("div", { className: `uds-image-overlap content-${r}`, children: [
    /* @__PURE__ */ d.jsx(Cm, {}),
    /* @__PURE__ */ d.jsx(
      Am,
      {
        ref: m,
        className: "img-fluid",
        src: t == null ? void 0 : t.url,
        alt: t == null ? void 0 : t.altText,
        onError: (k) => {
          k.currentTarget.style.display = "none";
        }
      }
    ),
    /* @__PURE__ */ d.jsxs(_m, { ref: p, className: "content-wrapper", children: [
      /* @__PURE__ */ d.jsx(b, { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: e }) }),
      /* @__PURE__ */ d.jsx(Hn, { contents: n }),
      a
    ] })
  ] });
}
on.propTypes = {
  headingTag: _.string,
  title: _.string,
  contentDirection: _.oneOf(["left", "right"]),
  contents: _.arrayOf(
    _.shape({
      text: _.string
    })
  ),
  image: kr,
  contentChildren: _.element
};
const wc = Ia`
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
`, Sc = Je.main`
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
function Em({
  baseIconClassName1: e,
  baseIconAriaLabel1: t,
  baseIconStyle1: r,
  baseIconAriaLabel2: n,
  baseIconClassName2: a,
  baseIconStyle2: s,
  ariaLabel: p,
  ariaControls: m,
  dataId: b,
  onClick: f = () => null
}) {
  const [k, A] = ct(!1), j = (S, R, W, z) => /* @__PURE__ */ d.jsx(
    "span",
    {
      style: {
        cursor: "pointer",
        display: R
      },
      children: /* @__PURE__ */ d.jsx(
        "i",
        {
          className: `${S}`,
          "aria-label": W,
          title: W,
          style: z
        }
      )
    }
  ), F = () => {
    A(!k), f(!k);
  }, E = /* @__PURE__ */ d.jsxs(
    "span",
    {
      "data-testid": b,
      role: "button",
      className: "element-focus",
      tabIndex: 0,
      onKeyDown: (S) => S.key === "Enter" && F(),
      onClick: F,
      "aria-label": p,
      "aria-expanded": k,
      "aria-controls": m,
      children: [
        j(
          e,
          k ? "" : "none",
          t,
          r
        ),
        j(
          a,
          k ? "none" : "",
          n,
          s
        )
      ]
    }
  );
  return dl(() => E, [k]);
}
Je.div`
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
const ki = (e) => /* @__PURE__ */ d.jsx("span", {}), jm = ({
  onClick: e = () => null,
  ariaLabel: t,
  ariaControls: r,
  dataId: n
}) => Em({
  dataId: n,
  baseIconClassName1: "fas fa-chevron-up",
  baseIconClassName2: "fas fa-chevron-down",
  onClick: e,
  ariaLabel: t,
  ariaControls: r
}), sn = ll(null), fo = ({ listPageProps: e, detailPageProps: t, children: r }) => {
  const { detailPageDefault: n, listingPageDefault: a } = dl(
    () => cm((e || t).appPathFolder),
    []
  ), s = {
    detailPageDefault: n,
    listingPageDefault: a
  }, p = {
    listPageProps: e,
    detailPageProps: t
  };
  return /* @__PURE__ */ d.jsx(
    sn.Provider,
    {
      value: {
        state: p,
        defaultState: s
      },
      children: r
    }
  );
};
fo.propTypes = {
  children: _.oneOfType([
    _.arrayOf(_.element),
    _.element
  ]),
  listPageProps: _.shape({}),
  detailPageProps: _.shape({})
};
const Nm = ({
  dataSource: e,
  tableView: t = [],
  programs: r,
  stateFilters: n
}) => {
  const { collegeAcadOrg: a, departmentCode: s } = e;
  At(() => {
    if (!r || !km()) return;
    const p = "background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;", m = "font-size:30px;", b = "font-size:24px;", f = "font-size: 18px; margin-left: 0.5rem;";
    console.group("<< ASU Degree Page >>"), console.log("%c🏫 Listing Page Programs 📚", p + m), console.log(
      `%cTotal programs found: ${r.length}`,
      p + f
    ), console.log("%cPrograms found", p + f), console.log(r), console.log(
      `%cTotal programs loaded: ${t.length}`,
      p + f
    ), console.log("%cPrograms loaded", p + f), console.log(t), console.log("%cPage Filters", p + b), console.log(
      `%c- collegeAcadOrg:${a}`,
      p + f
    ), console.log(
      `%c- departmentCode:${s}`,
      p + f
    ), console.log("%cSearch Filters", p + b), console.log(n), console.groupEnd();
  });
}, rl = (e) => e.degreeType === "UG", kc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Tc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Rm = (e) => Object.keys(e).length > 0 ? Tc(e) || kc(e) : !0, jn = (e) => {
  const { owners: t } = e;
  return t ? t.reduce(
    (n, a) => n.percentOwned > a.percentOwned ? n : a
  ) : null;
};
function Gr(e = {}) {
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
    isUndergradProgram: () => rl(e),
    isPhdOrMasters: () => e.degreeDescriptionShort !== "CERT",
    // Only called in functions that already checked if its a grad program
    isGradProgram: () => e.degreeType === "GR",
    // GR is present for grad degrees and grad certificates
    isMinorOrCertificate: () => e.degreeType === "UGCM" || e.degreeType === "GR" && e.acadPlanTypeDescription === "Certificate",
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => rl(e) ? "undergrad" : "graduate",
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
        const a = t.join(", or<br />");
        r = a ? `<p>${a}</p>` : "";
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
        (a) => a.defaultFlag === !0
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
    getAccelerateDegrees: async () => e.acceleratedAcadPlanCodes ? Si(e.acceleratedAcadPlanCodes) : [],
    getConcurrentDegrees: async () => e.concurrentAcadPlanCodes ? Si(e.concurrentAcadPlanCodes) : [],
    getCollegeDesc: () => {
      var t;
      return (t = jn(e)) == null ? void 0 : t.collegeDescription;
    },
    getCollegeUrl: () => {
      var t;
      return ((t = jn(e)) == null ? void 0 : t.collegeUrl) || "";
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
      } catch (a) {
        return console.error("Error parsing HTML: ", a.message), "";
      }
      return n;
    },
    /** @return {string} */
    getDepartmentName: () => {
      var t;
      return (t = jn(e)) == null ? void 0 : t.departmentDescription;
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
      const { subject: r, catalogNumber: n, description: a } = t;
      return `${r} ${n} - ${a}`;
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
    getConcurrentDegreeMajorMaps: () => Si(e.concurrentAcadPlanCodes),
    getChangeMajor: () => e.changeMajorRequirementsText,
    getAsuCareerOpportunity: () => e.careerOpportunities,
    getGlobalExp: () => {
      var t;
      return (t = e.globalExperienceText) == null ? void 0 : t.trim();
    },
    /** @return {string} */
    getCollegeAcadOrg: () => {
      var t;
      return (t = jn(e)) == null ? void 0 : t.collegeAcadOrg;
    },
    /** @return {Array} */
    getCollegeAcadOrgJoint: () => {
      const { owners: t } = e;
      return t ? t.map((n) => n.collegeAcadOrg) : [];
    },
    /** @return {string} */
    getDepartmentCode: () => {
      var t;
      return (t = jn(e)) == null ? void 0 : t.departmentAcadOrg;
    },
    /** @return {Object.<string, string>} */
    getGraduateApplyDates: () => e.applicationDeadlines,
    hasGraduateApplyDates: () => kc(e),
    /** @return {Object.<string, string>} */
    getPlanDeadlines: () => e.applicationDeadlines,
    hasPlanDeadlines: () => Tc(e),
    isValidActiveProgram: () => Rm(e),
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
        (k) => k.campusesOffered
      );
      const r = [...e.majorMapSubplans], n = (k) => {
        if (!k || k.length !== 4) return !1;
        const A = (/* @__PURE__ */ new Date()).getFullYear();
        return parseInt(`20${k.substring(0, 2)}`, 10) >= A;
      }, a = (k, A) => k.filter((j) => j.acadSubPlanCode !== A), s = (k, A) => k.some((j) => j.acadSubPlanCode === A), p = (k, A) => A.some(
        (j) => j.acadSubPlanCode === k.acadSubPlanCode
      ), m = t.filter(
        (k) => k.timePeriod && n(k.timePeriod)
      ), b = r.some(
        (k) => k.defaultFlag || s(t, k.acadSubPlanCode)
      ), f = [];
      for (const k of r)
        k.timePeriod && n(k.timePeriod) && !p(k, f) && (f.push(k), t = a(t, k.acadSubPlanCode));
      if (!b) {
        for (const k of r)
          !p(k, f) && s(m, k.acadSubPlanCode) && f.push(k);
        return f;
      }
      for (let k = r.length - 1; k >= 0 && t.length !== 0; k -= 1) {
        const A = r[k];
        if (p(A, f)) continue;
        const j = A.defaultFlag, F = s(
          t,
          A.acadSubPlanCode
        );
        (j || F) && (t = a(t, A.acadSubPlanCode), f.push(A));
      }
      return f;
    },
    getSubPln: () => e.subplans
  };
}
function Om(e) {
  const t = e.getProgramType(), r = [], n = (m) => ({
    text: m,
    url: ""
  }), a = (m) => ({
    text: "Online",
    url: m
  }), s = e.getCampusList().map((m) => m.campusCode);
  s.length > 0 && r.push(
    ...s.map(
      (m) => m === "ONLNE" && a(e.getCurriculumUrl()) || el(m, t) || n(m)
    )
  );
  const p = e.getCampusWue();
  return p && r.push(
    el(p, t) || n(p)
  ), r;
}
const Im = (e, t) => {
  const r = { ...e };
  return r.globalOpportunity && !t.getGlobalExp() && (r.globalOpportunity = !1), r.careerOutlook && !t.getAsuCareerOpportunity() && (r.careerOutlook = !1), r.attendOnline && !t.getCurriculumUrl() && (r.attendOnline = !1), r;
}, Pm = (e) => {
  var a;
  const t = Object.values(e).filter(
    (s) => s === !0
  );
  return ((a = e == null ? void 0 : e.externalAnchors) == null ? void 0 : a.length) > 0 || t.length > 0;
};
function Dm(e) {
  return "";
}
function Lm(e) {
  return "";
}
function Mm() {
  return "";
}
function Da(e, t) {
  let r = t || "";
  return r = r.replaceAll("{INSTITUTION_CODE}", e.getInstitution()).replaceAll("{ACAD_PLAN_CODE}", e.getAcadPlan()), r;
}
function Cc(e, t) {
  return `${Da(e, t)}#${ut.flexibleDegreeOptions.acceleratedId}`;
}
function nl({
  programs: e = [],
  filters: {
    collegeAcadOrg: t,
    departmentCode: r,
    acceleratedConcurrent: n,
    locations: a = [],
    keyword: s,
    blacklistAcadPlans: p,
    program: m,
    showCerts: b
  }
}) {
  const f = ($) => !t || $.getCollegeAcadOrgJoint().includes(t), k = ($) => !r || $.getDepartmentCode().includes(r), A = ($) => {
    var y;
    return !a.length || ((y = $.getCampusList()) == null ? void 0 : y.some((J) => a.some((ce) => ce.value === J.campusCode)));
  }, j = ($ = {}) => {
    var y;
    return !Wi(n) || ((y = $[n.value]) == null ? void 0 : y.length) > 0;
  }, F = ($, y) => !!(!y || new RegExp(y, "i").test($.getMajorDesc())), E = ($, y) => !!(!y || new RegExp(y, "i").test($.getFullDescription())), S = ($) => !(p != null && p.includes($.getAcadPlan())), R = ($) => m === "undergrad" ? !0 : b === "true" ? $.isMinorOrCertificate() : $.isPhdOrMasters(), W = ($) => {
    const y = Gr($);
    return f(y) && k(y) && A(y) && j($) && S(y) && R(y);
  }, z = [], G = [];
  return e.filter(($) => {
    const y = Gr($), J = F(y, s), ce = E(
      y,
      s
    );
    return (J || ce) && W($) ? (J ? z.push($) : G.push($), !0) : !1;
  }), z.concat(G);
}
const Fm = (e) => e.sort(
  (r, n) => r.acadPlanMarketingDescription.localeCompare(
    n.acadPlanMarketingDescription
  )
), Or = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: p = "",
  component: m = ""
}) => {
  const { dataLayer: b } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: m.toLowerCase()
  };
  b && b.push(f);
};
function mo({ breadcrumbs: e, section: t }) {
  const r = Yr("breadcrumb-");
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
            onClick: () => Or({
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
        onClick: () => Or({
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
mo.propTypes = {
  breadcrumbs: _.arrayOf(Hr),
  section: _.string
};
const $m = () => /* @__PURE__ */ d.jsx("div", { className: "container", "data-testid": "browse-title", children: /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Browse degrees" }) }) }), Ti = ({
  id: e,
  label: t,
  selected: r,
  multiple: n,
  options: a,
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
      children: a == null ? void 0 : a.map((p) => /* @__PURE__ */ d.jsx(
        "option",
        {
          id: `${p.value}-${p.id}`,
          value: p.value,
          children: p.text
        },
        p.id
      ))
    }
  )
] }), Um = Je.div`
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
`, zm = Je.button`
  font-weight: 400;
  text-decoration: underline;
`, qm = {
  event: "select",
  action: "click",
  name: "onclick"
}, Wm = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link"
}, On = {
  isActive: !1,
  locations: [],
  asuLocals: [],
  acceleratedConcurrent: { value: "all", text: "" },
  keyword: null,
  blacklistAcadPlans: []
}, Ci = (e) => ({
  id: e.id,
  value: e.value,
  text: e.text
}), Hm = (e) => e.map((t) => t.text).join(", "), al = (e, t) => {
  Or({ ...qm, type: e, text: t });
}, il = (e) => {
  Or({ ...Wm, text: e });
}, _c = ({ value: e, onChange: t, onApply: r, onClean: n }) => {
  const a = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (b, { target: { selectedOptions: f } }) => {
      let k = [], A = [];
      const j = Array.from(f, Ci), { locations: F, asuLocals: E } = e;
      ({
        locationsRender: () => {
          k = j, A = E;
        },
        asuLocalsRender: () => {
          A = j, k = F;
        }
      })[`${b}Render`](), t({
        ...e,
        locations: k,
        asuLocals: A
      }), al({
        locations: "location or online",
        asuLocals: "as local"
      }[b], Hm(j));
    }
  ), s = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (b, { target: { selectedOptions: f } }) => {
      t({ ...e, [b]: Ci(f[0]) }), al(
        "accelerated/concurrent",
        Ci(f[0]).text
      );
    }
  ), p = () => {
    r == null || r({
      ...e,
      isActive: !0
    });
  }, m = () => {
    t(On), n == null || n();
  };
  return /* @__PURE__ */ d.jsxs(Um, { className: "container", "data-testid": "filters", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Filter your results" }),
    /* @__PURE__ */ d.jsxs("form", { className: "mt-3 uds-form row", children: [
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        Ti,
        {
          multiple: !0,
          id: "locations",
          label: "Campuses or online",
          selected: e.locations.map((b) => b.value),
          options: uo,
          onChange: a
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        Ti,
        {
          multiple: !0,
          id: "asuLocals",
          label: "ASU location, ASU Local",
          selected: e.asuLocals.map((b) => b.value),
          options: bc,
          onChange: a
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        Ti,
        {
          id: "acceleratedConcurrent",
          label: "Accelerated, Concurrent",
          selected: e.acceleratedConcurrent.value,
          options: po,
          onChange: s
        }
      ) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "hint-container", children: /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("small", { children: "*CTRL + Click to select multiple" }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "filter-action-buttons", children: [
      /* @__PURE__ */ d.jsx(
        Cr,
        {
          "data-testid": "btn-apply-filter",
          color: "maroon",
          label: "Apply filters",
          ariaLabel: "Apply filters",
          size: "default",
          onClick: () => {
            p(), il("apply filters");
          }
        }
      ),
      /* @__PURE__ */ d.jsx(
        zm,
        {
          "data-testid": "btn-clear-filters",
          className: "btn btn-link",
          onClick: () => {
            m(), il("clean filters");
          },
          children: "Clear filters"
        }
      )
    ] })
  ] });
};
_c.propTypes = {
  value: pc,
  onChange: _.func,
  onApply: _.func,
  onClean: _.func
};
function Ac({
  value: { isActive: e, locations: t, asuLocals: r, acceleratedConcurrent: n } = {},
  onRemove: a
}) {
  const s = Yr("filter-"), p = (t == null ? void 0 : t.length) + (r == null ? void 0 : r.length) + (Wi(n) ? 1 : 0), m = (b, f) => {
    const { text: k } = f;
    return /* @__PURE__ */ d.jsxs(
      "span",
      {
        tabIndex: -1,
        role: "button",
        "aria-label": `Remove filter ${k}`,
        "data-filter-id": b,
        onKeyDown: () => a(b, f),
        onClick: () => a(b, f),
        className: "btn btn-tag btn-tag-alt-white d-inline-flex align-items-center me-2",
        children: [
          /* @__PURE__ */ d.jsx("span", { className: "pe-1", children: k }),
          /* @__PURE__ */ d.jsx("i", { className: "fas fa-times" })
        ]
      },
      s.next().value
    );
  };
  return /* @__PURE__ */ d.jsxs("div", { "data-testid": "filters-summary", children: [
    /* @__PURE__ */ d.jsx("header", { children: /* @__PURE__ */ d.jsx("strong", { children: "Applied filters" }) }),
    /* @__PURE__ */ d.jsx("div", { "data-testid": "summary-filter-tags", children: !e || p === 0 ? /* @__PURE__ */ d.jsx("span", { children: "No filters applied" }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      t.map((b) => m("locations", b)),
      r.map((b) => m("asuLocals", b)),
      (Wi(n) ? [n] : []).map((b) => m("acceleratedConcurrent", b))
    ] }) })
  ] });
}
Ac.propTypes = {
  value: pc,
  onRemove: _.func
};
const Bm = Je.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`, Vm = Je.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;
function Gm({
  applyNowUrl: e,
  title: t,
  contents: r,
  photoGrid: n
}) {
  const a = Pa(t);
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      className: "container",
      "data-type": "text-photo-grid",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(a, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${nn(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Hn, { contents: r }),
          /* @__PURE__ */ d.jsx(Wn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-7 d-none d-sm-none d-md-block", children: /* @__PURE__ */ d.jsx(Bm, { className: "row", children: n.images.map((s, p) => /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "photo-item col-sm-12 col-md-6 col-lg-6",
            children: /* @__PURE__ */ d.jsx(
              "img",
              {
                className: `mg-fluid ${nn(s.cssClass)}`,
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
function Ym({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n,
  video: a
}) {
  const s = Pa(t);
  return /* @__PURE__ */ d.jsx(
    Vm,
    {
      className: "container",
      "data-type": "text-media",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row gy-3", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(s, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${nn(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Hn, { contents: r }),
          /* @__PURE__ */ d.jsx(Wn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7 mt-2 mt-sm-0", children: [
          a && /* @__PURE__ */ d.jsx(
            to,
            {
              type: a.type,
              url: a.url,
              vttUrl: a.vttUrl,
              title: a.title,
              className: "mt-0"
            }
          ),
          n && /* @__PURE__ */ d.jsx("div", { className: "uds-img", children: /* @__PURE__ */ d.jsx("img", { src: n.url, className: "img-fluid", alt: n.altText }) })
        ] })
      ] })
    }
  );
}
function Xm({
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
        on,
        {
          title: t.text,
          contents: r,
          image: n,
          contentDirection: "right",
          contentChildren: /* @__PURE__ */ d.jsx("div", { className: "mt-2", children: /* @__PURE__ */ d.jsx(Wn, { href: e }) })
        }
      ) }) })
    }
  );
}
const Zm = ({ applyNowUrl: e, title: t, contents: r }) => {
  const n = Pa(t);
  return /* @__PURE__ */ d.jsx("section", { className: "container", "data-type": "text", "data-testid": "intro-content", children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-5", children: /* @__PURE__ */ d.jsx(n, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${nn(t.cssClass)}`, children: t.text }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7", children: [
      /* @__PURE__ */ d.jsx(Hn, { contents: r }),
      /* @__PURE__ */ d.jsx(Wn, { href: e })
    ] })
  ] }) });
}, ho = ({
  applyNowUrl: e,
  type: t,
  title: r,
  contents: n,
  image: a,
  video: s,
  photoGrid: p
}) => ({
  text: () => Zm({ applyNowUrl: e, title: r, contents: n }),
  "text-media": () => Ym({
    applyNowUrl: e,
    title: r,
    contents: n,
    image: a,
    video: s
  }),
  "text-image-overlay": () => Xm({ applyNowUrl: e, title: r, contents: n, image: a }),
  "text-photo-grid": () => Gm({
    applyNowUrl: e,
    title: r,
    contents: n,
    photoGrid: p
  }),
  undefined: () => (console.error(
    `the type '${t}' is not supported by the 'IntroContent' component.`
  ), null)
})[t]();
ho.propTypes = {
  applyNowUrl: _.string,
  type: _.oneOf([
    "text",
    "text-media",
    "text-image-overlay",
    "text-photo-grid"
  ]).isRequired,
  video: _.shape({ ...lo }),
  image: _.shape({ ...so }),
  header: Na,
  title: _.shape({
    ...lc,
    component: _.oneOf(fc)
  }),
  contents: _.arrayOf(Na),
  photoGrid: _.shape({
    images: _.arrayOf(kr)
  })
};
const La = {
  programs: _.arrayOf(_.object),
  totalRows: _.number,
  loading: _.bool,
  actionUrls: _.shape({
    applyNowUrl: _.string,
    majorInfoUrl: _.string,
    majorInfoOnlineUrl: _.string
  }),
  degreesPerPage: _.number
}, Km = Je.div`
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
`, Ec = ({ programs: e, actionUrls: t }) => {
  var p, m, b, f, k;
  const { state: r } = Gt(sn), n = (m = (p = r == null ? void 0 : r.listPageProps) == null ? void 0 : p.programList) == null ? void 0 : m.settings, a = ((k = (f = (b = r == null ? void 0 : r.listPageProps) == null ? void 0 : b.programList) == null ? void 0 : f.dataSource) == null ? void 0 : k.program) === "graduate", s = e.map((A) => {
    const j = Gr(A), F = () => {
      var z;
      const R = j.isOnline() ? j.getOnlineMajorMapURL() : j.getGeneralDegreeMajorMap();
      let W;
      try {
        W = `<a href=${(z = new URL(R)) == null ? void 0 : z.toString()}>${j.getRequiredCoursesLabel()} Map</a>`;
      } catch {
        return "";
      }
      return W;
    }, E = () => `<div>
        ${j.hasConcurrentDegrees() ? "<div className='cell-container'>concurrent</div>" : ""}
        ${j.hasAccelerateDegrees() ? `<div className="cell-container">
                <a href=${Cc(
      j,
      t.majorInfoUrl
    )}>
                  4+1 years
                </a>
              </div>` : ""}
    </div>`;
    return {
      content: {
        header: j.getMajorDesc(),
        body: `<ul>
        <li>
          <strong>Major:</strong>
          <br />
            <a href=${Da(j, t.majorInfoUrl)}>
              ${j.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${j.getDegree()}
        </li>
        ${a ? "" : `<li>
              <strong>Required Courses:</strong>
              <br />${F()}
            </li>`}
        <li>
          <strong>Campus or location:</strong>
          <br />${j.getCampusList().map((S) => Hi(S.campusCode)).join(", ")}
        </li>
        <li>
          <strong>Accelerated/Concurrent:</strong>
          <br />${E() || "-"}
        </li>
        ${n != null && n.hideCollegeSchool ? "" : ` <li>
                  <strong>College/School:</strong>
                  <br />
                  <a href=${j.getCollegeUrl()}>
                    ${j.getCollegeDesc()}
                  </a>
                </li>`}
      </ul>`
      }
    };
  });
  return /* @__PURE__ */ d.jsx(Km, { "data-testid": "accordion-view", children: /* @__PURE__ */ d.jsx(Ji, { cards: s }) });
};
Ec.propTypes = {
  ...La
};
const Jm = Je.section`
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
function jc({ programs: e, loading: t, actionUrls: r }) {
  var b, f, k, A;
  const { defaultState: n, state: a } = Gt(sn), s = (A = (k = (f = (b = a == null ? void 0 : a.listPageProps) == null ? void 0 : b.programList) == null ? void 0 : f.settings) == null ? void 0 : k.cardDefaultImage) == null ? void 0 : A.url, p = n.detailPageDefault.hero.image.url, m = s || p;
  return /* @__PURE__ */ d.jsx(
    Jm,
    {
      id: hc,
      className: "container row",
      "data-loading": t,
      "data-testid": "grid-view",
      children: e.map((j) => {
        const F = Gr(j);
        return /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-4 col-lg-3 mb-2", children: /* @__PURE__ */ d.jsx(
          bt,
          {
            type: "degree",
            horizontal: !1,
            clickable: !1,
            image: m,
            imageAltText: "An example image",
            title: F.getMajorDesc(),
            linkLabel: "View Program Details",
            linkUrl: Da(F, r.majorInfoUrl),
            buttons: [
              {
                color: "maroon",
                size: "small",
                label: "Reqeuest Info",
                href: Mm()
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
jc.propTypes = {
  ...La
};
const Qm = [
  {
    dataKey: "Major",
    label: "Major",
    className: "major",
    sortable: !0,
    contentTemplate: ({ resolver: e, rowIndex: t, actionUrls: r, onClick: n }) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ d.jsx("a", { href: Da(e, r == null ? void 0 : r.majorInfoUrl), children: e.getMajorDesc() }),
      /* @__PURE__ */ d.jsx(
        jm,
        {
          dataId: "show-row-detail",
          ariaLabel: `${e.getMajorDesc()} arrow`,
          ariaControls: `row-info-${t}`,
          onClick: (a) => n(t, a)
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
        ki,
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
      var a;
      const r = e.isOnline() ? e.getOnlineMajorMapURL() : e.getGeneralDegreeMajorMap();
      let n;
      try {
        const s = (a = new URL(r)) == null ? void 0 : a.toString();
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
      const t = Yr("campus-");
      return /* @__PURE__ */ d.jsx("div", { children: e.getCampusList().map((r, n, a) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ d.jsx("span", { children: `${Hi(
          fm(r.campusCode)
        )}${n < a.length - 1 ? ", " : ""}` }, r.campusCode),
        /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx(
          ki,
          {
            popover: {
              title: Hi(r.campusCode),
              body: () => fetch(Dm(r.campusCode)),
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
        /* @__PURE__ */ d.jsx("a", { href: Cc(e, t.majorInfoUrl), children: "4+1 years" }),
        /* @__PURE__ */ d.jsx(
          ki,
          {
            popover: {
              title: "4+1 years",
              body: () => fetch(Lm(e.getAcadPlan())),
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
], eh = ao`
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
`, th = Je.table`
  ${eh}
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
        box-shadow:
          0px 0px 0px 2px #fff,
          0px 0px 0px 4px #191919 !important;
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
`, rh = ({ resolver: e, id: t }) => {
  const r = bu(), n = (a) => {
    a.key === "Enter" && (r == null || r.current.click());
  };
  return /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("header", { children: /* @__PURE__ */ d.jsx("strong", { children: "Program Description:" }) }),
    /* @__PURE__ */ d.jsx("input", { className: "togle-more-text", type: "checkbox", id: `#${t}` }),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        className: "desc-long",
        id: t,
        dangerouslySetInnerHTML: Vt(
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
}, nh = ({ resolver: e }) => /* @__PURE__ */ d.jsxs("div", { children: [
  /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "Additional Program Fee: " }),
    e.hasAsuProgramFee() ? "Yes" : "No"
  ] }),
  /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "Second Language Requirement: " }),
    e.hasAsuLangReqFlag() ? "Yes" : "No"
  ] }),
  e.hasMathReqFlag() && /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "First Required Math Course: " }),
    /* @__PURE__ */ d.jsx("span", { children: e.getMinMathReq() }),
    e.getOtherMathReqCourse() && /* @__PURE__ */ d.jsx(
      "span",
      {
        dangerouslySetInnerHTML: Vt(
          e.getOtherMathReqCourse()
        )
      }
    )
  ] }) }),
  e.getMathIntensity() && /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "Math Intensity: " }),
    e.getMathIntensity()
  ] }),
  e.hasStemOptText() && /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "STEM OPT: " }),
    e.hasStemOptText()
  ] })
] }), ah = Yr("row-"), Nc = ({ programs: e, totalRows: t, loading: r, actionUrls: n }) => {
  var k, A;
  const a = mt.useRef(null), s = mt.useRef(null), { state: p } = Gt(sn), m = (A = (k = p == null ? void 0 : p.listPageProps) == null ? void 0 : k.programList) == null ? void 0 : A.settings;
  let b = Qm;
  p.listPageProps.programList.dataSource.program === "graduate" && (b = b.filter((j) => j.dataKey !== "RequiredCourses")), m != null && m.hideCollegeSchool && (b = b.filter((j) => j.dataKey !== "CollegeSchool"));
  const f = (j, F) => {
    const E = s.current.children;
    Array.prototype.forEach.call(
      E,
      (R, W) => W !== j && R.setAttribute("data-is-open", "false")
    ), s.current.children[j].setAttribute("data-is-open", String(F));
  };
  return /* @__PURE__ */ d.jsx("section", { className: "container mb-4", "data-testid": "list-view", children: /* @__PURE__ */ d.jsxs(
    th,
    {
      id: hc,
      ref: a,
      "data-loading": r,
      title: `${t} program found`,
      children: [
        /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { role: "row", children: b.map((j) => {
          var F;
          return /* @__PURE__ */ d.jsx(
            "th",
            {
              tabIndex: 0,
              className: `${j.className}`,
              scope: "col",
              "aria-label": j.ariaLabel,
              children: ((F = j.headerTemplate) == null ? void 0 : F.call(j)) || /* @__PURE__ */ d.jsx("span", { children: j.label })
            },
            j.dataKey
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
          e.map((j, F) => {
            const E = ah.next().value, S = F * 2, R = Gr(j);
            return /* @__PURE__ */ d.jsxs(pl, { children: [
              /* @__PURE__ */ d.jsx("tr", { role: "row", children: b.map((W) => {
                var z;
                return /* @__PURE__ */ d.jsx(
                  "td",
                  {
                    className: `${W.className}`,
                    children: (z = W.contentTemplate) == null ? void 0 : z.call(W, {
                      resolver: R,
                      col: W,
                      row: j,
                      rowIndex: S,
                      onClick: f,
                      actionUrls: n
                    })
                  },
                  `${E}-${W.dataKey}`
                );
              }) }, E),
              /* @__PURE__ */ d.jsxs(
                "tr",
                {
                  id: `row-info-${S}`,
                  className: "row-info",
                  children: [
                    /* @__PURE__ */ d.jsx("td", { colSpan: 3, children: rh({ resolver: R, id: `${E}-more-text` }) }, `${E}-info`),
                    /* @__PURE__ */ d.jsx("td", { colSpan: 2, children: nh({ resolver: R }) }, `${E}-extra-info`)
                  ]
                },
                `${E}-row-info`
              )
            ] }, E);
          })
        ] })
      ]
    }
  ) });
};
Nc.propTypes = {
  ...La
};
const ih = Ia`

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
`, oh = {
  [mc]: jc,
  [qi]: Nc
};
function Rc({
  dataViewComponent: e,
  loading: t,
  programs: r,
  actionUrls: n,
  degreesPerPage: a
}) {
  let s;
  a ? typeof a != "number" && (s = parseInt(a, 10)) : s = 8;
  const p = a || s, m = hm(r.length, p), b = oh[e], [f, k] = ct([]), A = (j, F) => {
    const E = (F - 1) * p, S = E + p;
    k(r.slice(E, S));
  };
  return At(() => {
    k(r.slice(0, p));
  }, [r]), /* @__PURE__ */ d.jsxs("section", { "data-testid": "program-list", "data-view-type": e, children: [
    /* @__PURE__ */ d.jsx(ih, {}),
    /* @__PURE__ */ d.jsx("div", { className: "desktop-view", children: /* @__PURE__ */ d.jsx(
      b,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: a || s
      }
    ) }),
    /* @__PURE__ */ d.jsx("div", { className: "mobile-view mb-2", children: /* @__PURE__ */ d.jsx(
      Ec,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: a || s
      }
    ) }),
    r.length > 0 ? /* @__PURE__ */ d.jsx(
      $l,
      {
        totalNumbers: 7,
        type: "default",
        background: "white",
        totalPages: m,
        onChange: A,
        showFirstButton: !0,
        showLastButton: !0
      }
    ) : /* @__PURE__ */ d.jsx("section", { className: "container no-space", children: /* @__PURE__ */ d.jsx(Qf, { message: "No result found for the filters applied" }) })
  ] });
}
Rc.propTypes = {
  dataViewComponent: _.string,
  ...La,
  degreesPerPage: _.number
};
const sh = Je.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow:
      0px 0px 0px 2px #ffffff,
      0px 0px 0px 4px #191919 !important;
  }
`, Oc = ({ value: e, onChange: t, onSearch: r }) => {
  const [n, a] = ct(!1);
  let s;
  At(() => () => clearTimeout(s), []);
  const p = (m) => {
    Or({
      event: "search",
      action: "type",
      name: "onenter",
      type: "search degree programs",
      text: m
    });
  };
  return /* @__PURE__ */ d.jsx(
    sh,
    {
      className: "container mt-5",
      "data-searching": n,
      "data-testid": "search-bar",
      children: /* @__PURE__ */ d.jsx("search", { children: /* @__PURE__ */ d.jsx(
        "form",
        {
          "data-testid": "search-bar-form",
          className: "uds-form p-0 col-md-6 col-sm-12",
          onSubmit: (m) => {
            m.preventDefault(), r(), a(!0), s = setTimeout(() => a(!1), 500), clearTimeout(s);
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
                  onChange: (m) => {
                    t(m.target.value), p(m.target.value);
                  }
                }
              ) }),
              /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-6 mt-2 mt-sm-0", children: /* @__PURE__ */ d.jsx(
                Cr,
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
      ) })
    }
  );
};
Oc.propTypes = {
  value: _.string,
  onChange: _.func,
  onSearch: _.func
};
const lh = Je(Sc)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`, ch = Ia`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`, uh = Je.div.attrs({ className: "container" })`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`, go = ({
  appPathFolder: e,
  actionUrls: t,
  hasSearchBar: r = !0,
  hasFilters: n = !0,
  hero: a,
  introContent: s,
  programList: p,
  degreesPerPage: m
}) => {
  var ne;
  const [{ data: b, loading: f, error: k }, A] = Ul(), [j, F] = ct(!1), [E, S] = ct([]), [R, W] = ct([]), [z, G] = ct(""), $ = (ne = p == null ? void 0 : p.settings) == null ? void 0 : ne.defaultView, y = [qi, mc].includes($) ? $ : qi, [J, ce] = ct(y), Se = xc(p.dataSource, ym), { defaultState: je } = Gt(sn), { listingPageDefault: Pe } = je, {
    collegeAcadOrg: ie,
    departmentCode: ue,
    showInactivePrograms: be,
    blacklistAcadPlans: ke,
    program: ye,
    cert: Qe
  } = p.dataSource, [Re, Ee] = ct({
    ...On
  }), [Fe, He] = ct({
    ...On
  });
  Nm({
    dataSource: p.dataSource,
    tableView: E,
    programs: b,
    stateFilters: Re
  }), At(() => {
    typeof window < "u" && Vl({
      packageName: "app-degree-pages",
      component: "ListingPage",
      type: "NA",
      configuration: {
        programList: p,
        degreesPerPage: m
      }
    });
  }, []), At(() => {
    A(Se);
  }, [Se]), At(() => {
    let N = Fm(b || []);
    N = nl({
      programs: N,
      filters: {
        collegeAcadOrg: ie,
        departmentCode: ue,
        blacklistAcadPlans: ke,
        program: ye,
        showCerts: Qe
      }
    }), W(N), S(N);
  }, [b, m]);
  const de = async (N) => {
    const { acceleratedConcurrent: le, locations: te, asuLocals: ae, keyword: Z } = N;
    F(!0), A(Se);
    const se = nl({
      programs: R,
      filters: {
        collegeAcadOrg: ie,
        departmentCode: ue,
        acceleratedConcurrent: le,
        locations: ae.length > 0 ? te.concat(dm) : te,
        keyword: Z,
        blacklistAcadPlans: ke,
        program: ye
      }
    });
    Ee({ ...N }), He({ ...N }), S(se), F(!1);
  }, B = async () => {
    const N = {
      ...Fe,
      keyword: z
    };
    de(N);
  }, I = (N) => {
    f || j || de(N);
  }, H = async (N) => {
    Ee(N);
  }, q = () => {
    Ee(On), He(On), S(R), G("");
  }, v = (N, { value: le }) => {
    const te = N === "acceleratedConcurrent" ? pm : Fe[N].filter((Z) => Z.value !== le), ae = {
      ...Fe,
      [N]: te
    };
    de(ae);
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(wc, {}),
    /* @__PURE__ */ d.jsx(ch, {}),
    k && /* @__PURE__ */ d.jsx(ic, { message: gc }),
    a != null && a.hide ? null : /* @__PURE__ */ d.jsx("section", { "data-testid": "hero", children: /* @__PURE__ */ d.jsx(
      Un,
      {
        image: (a == null ? void 0 : a.image) || Pe.hero.image,
        title: {
          text: um(p.dataSource),
          highlightColor: "gold",
          ...a == null ? void 0 : a.title,
          maxWidth: "100%"
        },
        contents: a == null ? void 0 : a.contents
      }
    ) }),
    /* @__PURE__ */ d.jsxs(lh, { "data-is-loading": f, className: "main-section dg-margin-top", children: [
      (s == null ? void 0 : s.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        mo,
        {
          breadcrumbs: s.breadcrumbs,
          section: a ? a.title.text : ""
        }
      ) }),
      s ? /* @__PURE__ */ d.jsx(
        ho,
        {
          applyNowUrl: (t == null ? void 0 : t.applyNowUrl) || Pe.actionUrls.applyNowUrl,
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
        /* @__PURE__ */ d.jsx($m, {}),
        r ? /* @__PURE__ */ d.jsx(
          Oc,
          {
            value: z,
            onChange: G,
            onSearch: B
          }
        ) : null,
        n ? /* @__PURE__ */ d.jsx(
          _c,
          {
            value: Re,
            onChange: H,
            onApply: I,
            onClean: q
          }
        ) : null,
        /* @__PURE__ */ d.jsx(uh, {})
      ] }) : null,
      /* @__PURE__ */ d.jsx("section", { className: "container", children: /* @__PURE__ */ d.jsx("div", { className: "d-flex justify-content-between filter-switch-container", children: n ? /* @__PURE__ */ d.jsx(
        Ac,
        {
          value: Fe,
          onRemove: v
        }
      ) : null }) }),
      f || j ? /* @__PURE__ */ d.jsx(oc, {}) : /* @__PURE__ */ d.jsx(
        Rc,
        {
          dataViewComponent: J,
          loading: f || j,
          programs: E,
          actionUrls: t,
          degreesPerPage: m
        }
      )
    ] })
  ] });
};
go.propTypes = {
  appPathFolder: _.string,
  actionUrls: _.shape({
    applyNowUrl: _.string
  }),
  hasSearchBar: _.bool,
  hasFilters: _.bool,
  hero: _.shape(Un.propTypes),
  introContent: _.shape(ho.propTypes),
  programList: _.shape({
    dataSource: cc,
    settings: am
  }),
  degreesPerPage: _.number
};
const Ic = (e) => /* @__PURE__ */ d.jsx(fo, { listPageProps: e, children: /* @__PURE__ */ d.jsx(go, { ...e }) });
Ic.propTypes = go.propTypes;
const dh = Je.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`, ph = Je.div`
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
function fh() {
  return /* @__PURE__ */ d.jsxs(
    dh,
    {
      className: "container",
      id: ut.affordingCollege.targetIdName,
      "data-testid": "affording-college",
      children: [
        /* @__PURE__ */ d.jsx(ph, {}),
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Affording college" }) }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
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
            bt,
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
            bt,
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
const Pc = Je.ul`
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
`, mh = ({
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
      Pc,
      {
        className: uf("", {
          "mb-0": n.length === 0
        }),
        children: r.map(({ label: a, href: s }) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
          Cr,
          {
            ariaLabel: a,
            color: "maroon",
            href: s,
            label: a,
            size: "small"
          }
        ) }, a))
      }
    ),
    n.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "mt-2 mb-4", children: /* @__PURE__ */ d.jsx(Ji, { cards: n, openedCard: 1 }) })
  ] });
}, hh = (e) => {
  const t = "View Curriculum";
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("p", { children: "View curriculum below for a detailed list of courses and other requirements." }),
    /* @__PURE__ */ d.jsx(Pc, { children: /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
      Cr,
      {
        ariaLabel: t,
        color: "maroon",
        href: e,
        label: t,
        size: "small"
      }
    ) }) })
  ] });
};
function Dc({
  graduateRequirements: e,
  transferRequirements: t,
  isMinorOrCertificate: r,
  additionalRequirements: n,
  minorRequirements: a,
  majorMapURL: s
}) {
  if (!e && !r)
    return /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: ut.applicationRequirements.targetIdName,
        "data-testid": "application-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Admission requirements" }) }),
          mh({
            transferRequirements: t,
            additionalRequirements: n
          })
        ]
      }
    );
  const p = r ? "Program requirements" : "Degree requirements", m = e || a;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: ut.applicationRequirements.targetIdName,
        "data-testid": "application-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: p }) }),
          m ? /* @__PURE__ */ d.jsx(
            "div",
            {
              dangerouslySetInnerHTML: Vt(m)
            }
          ) : hh(s)
        ]
      }
    ),
    /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: ut.degreeRequirements.targetIdName,
        "data-testid": "degree-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Admission requirements" }) }),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              dangerouslySetInnerHTML: Vt(
                n
              )
            }
          )
        ]
      }
    )
  ] });
}
Dc.propTypes = {
  graduateRequirements: _.string,
  transferRequirements: _.string,
  isMinorOrCertificate: _.bool,
  additionalRequirements: _.string,
  minorRequirements: _.string,
  majorMapURL: _.string
};
const zr = ({ item: e, type: t }) => {
  const r = Yr("glance-"), n = () => typeof e == "object" ? e.map((a, s) => {
    const p = ["", "#"].includes(a.url) ? null : a.url;
    let m = "";
    return s > 0 && s < e.length - 1 && (m = ", "), s === e.length - 1 && e.length > 1 && (m = " or "), /* @__PURE__ */ d.jsxs(pl, { children: [
      m,
      /* @__PURE__ */ d.jsx("a", { href: p, rel: "noreferrer", target: "_blank", children: a.text })
    ] }, r.next().value);
  }) : e;
  return /* @__PURE__ */ d.jsxs("li", { children: [
    /* @__PURE__ */ d.jsx("i", { className: `fas fa-${Qs[t].icon} fa-li` }),
    /* @__PURE__ */ d.jsxs("strong", { children: [
      Qs[t].title,
      ": "
    ] }),
    n()
  ] });
};
zr.propTypes = {
  item: _.oneOfType([
    _.arrayOf(Ui),
    _.string
  ]),
  type: _.string
};
const Lc = ({
  offeredBy: e,
  locations: t,
  firstRequirementMathCourse: r,
  mathIntensity: n,
  timeCommitment: a,
  stemOptText: s
}) => /* @__PURE__ */ d.jsxs(
  "section",
  {
    id: ut.atAGlance.targetIdName,
    "data-testid": "at-aglance",
    children: [
      /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "At a glance: program details" }) }),
      /* @__PURE__ */ d.jsxs("ul", { className: "uds-list fa-ul maroon pt-2 pb-0 pe-0", children: [
        e && /* @__PURE__ */ d.jsx(zr, { item: [e], type: "offeredBy" }),
        t && /* @__PURE__ */ d.jsx(zr, { item: t, type: "locations" }),
        r && /* @__PURE__ */ d.jsx(
          zr,
          {
            item: r,
            type: "firstRequirementMathCourse"
          }
        ),
        n && /* @__PURE__ */ d.jsx(zr, { item: n, type: "mathIntensity" }),
        a && /* @__PURE__ */ d.jsx(zr, { item: a, type: "timeCommitment" }),
        s && /* @__PURE__ */ d.jsx(zr, { item: s, type: "stemOptText" })
      ] })
    ]
  }
);
Lc.propTypes = {
  offeredBy: Ui.isRequired,
  locations: _.arrayOf(Ui).isRequired,
  firstRequirementMathCourse: _.string.isRequired,
  mathIntensity: _.string,
  timeCommitment: _.string,
  stemOptText: _.string
};
const gh = `
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;
function Mc({ image: e, learnMoreLink: t, contents: r }) {
  const n = `linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${e.url}')`, a = Yr("attend-online-");
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      id: ut.attendOnline.targetIdName,
      className: "uds-card-and-image",
      style: {
        backgroundImage: n
      },
      "data-testid": "attend-online",
      children: /* @__PURE__ */ d.jsx("div", { className: "uds-card-and-image-container", children: /* @__PURE__ */ d.jsxs("div", { className: "card card-centered", children: [
        /* @__PURE__ */ d.jsx("i", { className: "fas fa-wifi fa-2x card-icon-top" }),
        /* @__PURE__ */ d.jsx("div", { className: "card-header", children: /* @__PURE__ */ d.jsx("h3", { className: "card-title", children: "Attend online" }) }),
        /* @__PURE__ */ d.jsx("div", { className: "card-body", children: r ? r.map((s) => /* @__PURE__ */ d.jsx("p", { children: s }, a.next().value)) : /* @__PURE__ */ d.jsx("p", { children: gh }) }),
        /* @__PURE__ */ d.jsx("div", { className: "card-button", children: /* @__PURE__ */ d.jsx(
          Cr,
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
Mc.propTypes = {
  learnMoreLink: _.string,
  image: kr,
  contents: _.arrayOf(
    _.shape({
      text: _.string
    })
  )
};
const bh = Je.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Fc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  bh,
  {
    id: ut.careerOutlook.targetIdName,
    "data-testid": "career-outlook",
    children: /* @__PURE__ */ d.jsx(
      on,
      {
        headingTag: "H2",
        title: ut.careerOutlook.text,
        contents: e,
        image: t
      }
    )
  }
);
Fc.propTypes = on.propTypes;
const yh = Je.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;
function $c({ content: e }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ut.changeMajorRequirements.targetIdName,
      className: "change-your-major",
      "data-testid": "change-your-major",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Change your major requirements for current students" }) }),
        /* @__PURE__ */ d.jsx(
          yh,
          {
            dangerouslySetInnerHTML: Vt(e)
          }
        )
      ]
    }
  );
}
$c.propTypes = {
  content: _.string
};
function Uc({ content: e = "" }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-testid": "custom-text",
      className: "mt-3",
      dangerouslySetInnerHTML: Vt(e)
    }
  );
}
Uc.propTypes = {
  content: _.string
};
const zc = `
  width: unset !important;
  min-width: unset !important;
`, qc = Je.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${zc}
`, Wc = Je.i`
  color: #78be21;
  ${zc}
`;
function Hc({ data: e }) {
  return /* @__PURE__ */ d.jsx("div", { className: "uds-table mb-1", children: /* @__PURE__ */ d.jsxs("table", { children: [
    /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsx("th", { scope: "col", children: "Career" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Growth*" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Median Salary*" })
    ] }) }),
    /* @__PURE__ */ d.jsx("tbody", { children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsxs("th", { scope: "row", style: { fontWeight: "normal" }, children: [
        /* @__PURE__ */ d.jsx("a", { href: t.career.url, target: "_blank", rel: "noreferrer", children: t.career.text }),
        t.greenOccupation && /* @__PURE__ */ d.jsx(Wc, { className: "fas fa-leaf ms-1" }),
        t.brightOutlook && /* @__PURE__ */ d.jsx(qc, { className: "fas fa-sun ms-1" })
      ] }),
      /* @__PURE__ */ d.jsxs("td", { className: "text-end", children: [
        +t.growth,
        "%"
      ] }),
      /* @__PURE__ */ d.jsx("td", { className: "text-end", children: t.medianSalary || 0 })
    ] }, t.career.url)) })
  ] }) });
}
Hc.propTypes = {
  data: _.arrayOf(uc)
};
function Bc({ tableData: e }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ut.exampleCareers.targetIdName,
      className: "container",
      "data-testid": "example-careers",
      children: [
        /* @__PURE__ */ d.jsx("h3", { children: "Example careers" }),
        /* @__PURE__ */ d.jsx("p", { children: "Example job titles and salaries listed below are not necessarily entry level, and students should take into consideration how years of experience and geographical location may affect pay scales. Some jobs also may require advanced degrees, certifications or state-specific licensure." }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-4 mb-4", children: [
          /* @__PURE__ */ d.jsx(Hc, { data: e }),
          /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("small", { children: "* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)." }) })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "d-flex", children: [
          /* @__PURE__ */ d.jsxs("p", { className: "me-3", children: [
            /* @__PURE__ */ d.jsx(qc, { className: "fas fa-sun me-1" }),
            "Bright outlook"
          ] }),
          /* @__PURE__ */ d.jsxs("p", { children: [
            /* @__PURE__ */ d.jsx(Wc, { className: "fas fa-leaf me-1" }),
            "Green occupation"
          ] })
        ] })
      ]
    }
  );
}
Bc.propTypes = {
  tableData: _.arrayOf(uc)
};
const xh = Je.ul`
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
`, Bi = ({ id: e, title: t, links: r }) => /* @__PURE__ */ d.jsxs("div", { id: e, className: "mt-4", children: [
  /* @__PURE__ */ d.jsx("h3", { children: t }),
  /* @__PURE__ */ d.jsx("p", { children: "This program allows students to obtain both a bachelor's and master's degree in as little as five years. It is offered as an accelerated bachelor's and master's degree with:" }),
  /* @__PURE__ */ d.jsx(xh, { className: "mt-3 mb-3", children: r.map((n, a) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: n.url, target: "_blank", rel: "noreferrer", children: n.title }) }, `${n.title}-${a}`)) }),
  /* @__PURE__ */ d.jsx("p", { className: "mb-0", children: "Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply." })
] });
Bi.propTypes = {
  id: _.string,
  title: _.string,
  links: zi
};
function Vc({ acceleratedLinks: e, concurrentLinks: t }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ut.flexibleDegreeOptions.targetIdName,
      className: "container",
      "data-testid": "flexible-degree-options",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Flexible degree options" }) }),
        !!e.length && /* @__PURE__ */ d.jsx(
          Bi,
          {
            id: ut.flexibleDegreeOptions.acceleratedId,
            title: "Accelerated program options",
            links: e
          }
        ),
        !!t.length && /* @__PURE__ */ d.jsx(
          Bi,
          {
            id: ut.flexibleDegreeOptions.concurrentId,
            title: "Concurrent degree program",
            links: t
          }
        )
      ]
    }
  );
}
Vc.propTypes = {
  acceleratedLinks: zi,
  concurrentLinks: zi
};
const vh = Je.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Gc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  vh,
  {
    id: ut.globalOpportunity.targetIdName,
    "data-testid": "global-opportunity",
    children: /* @__PURE__ */ d.jsx(
      on,
      {
        headingTag: "H2",
        title: ut.globalOpportunity.text,
        contents: e,
        image: t
      }
    )
  }
);
Gc.propTypes = on.propTypes;
const Yc = ({ url: e, altText: t }) => /* @__PURE__ */ d.jsx("div", { className: "uds-img pt-3 pb-3", "data-testid": "intro-image", children: /* @__PURE__ */ d.jsx("img", { src: e, className: "img-fluid", alt: t }) });
Yc.propTypes = { ...so };
const wh = (e, t) => {
  if (e !== "youtube")
    return t;
  const r = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, n = t.match(r);
  return n && n[7].length === 11 ? `https://www.youtube.com/embed/${n[7]}` : t;
}, Sh = Je.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`, Xc = ({ type: e, url: t, vttUrl: r, title: n }) => /* @__PURE__ */ d.jsx(Sh, { "data-testid": "intro-video", children: /* @__PURE__ */ d.jsx(
  to,
  {
    type: e,
    url: wh(e, t),
    vttUrl: r,
    title: n,
    controls: !0
  }
) });
Xc.propTypes = { ...lo };
function Zc({ contents: e = [] }) {
  return /* @__PURE__ */ d.jsx("div", { "data-testid": "market-text", children: e.map((t, r) => /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `mt-3 ${nn(t.cssClass)}`,
      dangerouslySetInnerHTML: Vt(t.text)
    },
    `content-${r + 1}`
  )) });
}
Zc.propTypes = {
  contents: _.arrayOf(Na)
};
function Kc({ cards: e, defaultCards: t }) {
  var r, n, a, s, p, m, b, f, k, A, j, F;
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      className: "container",
      id: ut.nextSteps.targetIdName,
      "data-testid": "next-steps",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: "Next steps to attend ASU" }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              icon: ((r = e == null ? void 0 : e.learnMore) == null ? void 0 : r.icon) ?? t.learnMore.icon,
              title: ((n = e == null ? void 0 : e.learnMore) == null ? void 0 : n.title) ?? t.learnMore.title,
              body: ((a = e == null ? void 0 : e.learnMore) == null ? void 0 : a.content) ?? t.learnMore.content,
              buttons: [
                ((s = e == null ? void 0 : e.learnMore) == null ? void 0 : s.buttonLink) ?? t.learnMore.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              icon: ((p = e == null ? void 0 : e.apply) == null ? void 0 : p.icon) ?? t.apply.icon,
              title: ((m = e == null ? void 0 : e.apply) == null ? void 0 : m.title) ?? t.apply.title,
              body: ((b = e == null ? void 0 : e.apply) == null ? void 0 : b.content) ?? t.apply.content,
              buttons: [
                ((f = e == null ? void 0 : e.apply) == null ? void 0 : f.buttonLink) ?? t.apply.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              icon: ((k = e == null ? void 0 : e.visit) == null ? void 0 : k.icon) ?? t.visit.icon,
              title: ((A = e == null ? void 0 : e.visit) == null ? void 0 : A.title) ?? t.visit.title,
              body: ((j = e == null ? void 0 : e.visit) == null ? void 0 : j.content) ?? t.visit.content,
              buttons: [
                ((F = e == null ? void 0 : e.visit) == null ? void 0 : F.buttonLink) ?? t.visit.buttonLink
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
Kc.propTypes = {
  cards: _.shape({
    learnMore: Ur,
    apply: Ur,
    visit: Ur
  }),
  defaultCards: _.shape({
    learnMore: Ur,
    apply: Ur,
    visit: Ur
  })
};
function Jc({ content: e = "" }) {
  return /* @__PURE__ */ d.jsxs("section", { className: "container", "data-testid": "professional-licensure", children: [
    /* @__PURE__ */ d.jsx("h3", { children: "Professional licensure" }),
    /* @__PURE__ */ d.jsx("p", { dangerouslySetInnerHTML: Vt(e) })
  ] });
}
Jc.propTypes = {
  content: _.node
};
const _i = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content",
  section: "Program contact information"
}, kh = Je.ul`
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
function Qc({ department: e, asuOfficeLoc: t, email: r, phone: n }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ut.programContactInfo.targetIdName,
      "data-testid": "program-contact-info",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Program contact information" }) }),
        /* @__PURE__ */ d.jsx("p", { children: "If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below." }),
        /* @__PURE__ */ d.jsxs(kh, { className: "text-maroon", children: [
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
                onClick: () => Or({ ..._i, text: e.text }),
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
                onClick: () => Or({ ..._i, text: r.text }),
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
                onClick: () => Or({ ..._i, text: n }),
                children: n
              }
            )
          ] })
        ] })
      ]
    }
  );
}
Qc.propTypes = {
  department: Hr,
  asuOfficeLoc: _.string,
  email: Hr,
  phone: _.string
};
function Vi({ content: e, stemOptText: t, programNotFound: r }) {
  return /* @__PURE__ */ d.jsxs("div", { "data-testid": "program-description", children: [
    /* @__PURE__ */ d.jsx("h2", { children: r ? "Program not found" : "Program description" }),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        "data-testid": "program-description-body",
        dangerouslySetInnerHTML: Vt(e)
      }
    ),
    t && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("strong", { children: om }) }),
      /* @__PURE__ */ d.jsx(
        "div",
        {
          "data-testid": "stem-opt-text",
          dangerouslySetInnerHTML: Vt(t)
        }
      )
    ] })
  ] });
}
Vi.propTypes = {
  content: _.string,
  stemOptText: _.string,
  programNotFound: _.bool
};
const Th = "https://changemajor.apps.asu.edu/", Ch = "On-campus students", _h = "Online students", Ah = "View major map -", ol = "View major map";
function eu({
  onlineMajorMapURL: e = "",
  majorMapOnCampusURL: t = "",
  subPlnMajorMaps: r = [],
  subPlns: n = []
}) {
  const a = (k) => {
    const A = n.find(
      (j) => j.acadSubPlanCode === k
    );
    return A ? A.description : "";
  }, s = (k, A, j) => {
    k && j.push({
      href: k,
      text: A
    });
  }, p = [], m = [];
  r.forEach((k) => {
    const A = a(k.acadSubPlanCode), j = `${Ah} ${A}`;
    s(k.url, j, p);
  }), t && s(t, ol, p), e && s(e, ol, m);
  const b = (k, A) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("h5", { children: k }),
    /* @__PURE__ */ d.jsx("ul", { className: "mb-3", children: A.map((j) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: j.href, children: j.text }) }, j.href)) })
  ] }), f = () => /* @__PURE__ */ d.jsxs("section", { className: "container ps-0", "data-testid": "required-course", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Required courses (major map)" }),
    p.length > 0 && b(Ch, p),
    m.length > 0 && b(_h, m),
    /* @__PURE__ */ d.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ d.jsx("strong", { children: "What if:" }),
      " See how your courses can be applied to another major and find out how to ",
      /* @__PURE__ */ d.jsx("a", { href: Th, children: "change your major" })
    ] })
  ] });
  return !(r != null && r.length) && !e && !t ? /* @__PURE__ */ d.jsx("div", {}) : f();
}
eu.propTypes = {
  onlineMajorMapURL: _.string,
  majorMapOnCampusURL: _.string,
  subPlnMajorMaps: _.arrayOf(
    _.shape({
      campus: _.string,
      acadSubPlanCode: _.string,
      defaultFlag: _.bool,
      url: _.string
    })
  ),
  subPlns: _.arrayOf(
    _.shape({
      acadSubPlanCode: _.string,
      description: _.string
    })
  )
};
const tu = ({ sectionIntroText: e, cards: t, defaultCards: r }) => {
  var n, a, s, p, m, b, f, k, A, j, F, E, S, R, W, z, G, $, y, J, ce, Se, je, Pe, ie, ue, be, ke, ye, Qe, Re, Ee, Fe, He, de, B, I, H, q, v, ne, N;
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: ut.whyChooseAsu.targetIdName,
      className: "container",
      "data-testid": "why-choose-asu",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: "Why choose ASU" }),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            dangerouslySetInnerHTML: Vt(e)
          }
        ),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              image: ((a = (n = t == null ? void 0 : t.faculty) == null ? void 0 : n.image) == null ? void 0 : a.url) ?? r.faculty.image.url,
              imageAltText: ((p = (s = t == null ? void 0 : t.faculty) == null ? void 0 : s.image) == null ? void 0 : p.altText) ?? r.faculty.image.altText,
              title: ((m = t == null ? void 0 : t.faculty) == null ? void 0 : m.title) ?? r.faculty.title,
              body: ((b = t == null ? void 0 : t.faculty) == null ? void 0 : b.text) ?? r.faculty.text,
              buttons: [((f = t == null ? void 0 : t.faculty) == null ? void 0 : f.button) ?? r.faculty.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              image: ((A = (k = t == null ? void 0 : t.programs) == null ? void 0 : k.image) == null ? void 0 : A.url) ?? r.programs.image.url,
              imageAltText: ((F = (j = t == null ? void 0 : t.programs) == null ? void 0 : j.image) == null ? void 0 : F.altText) ?? r.programs.image.altText,
              title: ((E = t == null ? void 0 : t.programs) == null ? void 0 : E.title) ?? r.programs.title,
              body: ((S = t == null ? void 0 : t.programs) == null ? void 0 : S.text) ?? r.programs.text,
              buttons: [((R = t == null ? void 0 : t.programs) == null ? void 0 : R.button) ?? r.programs.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              image: ((z = (W = t == null ? void 0 : t.research) == null ? void 0 : W.image) == null ? void 0 : z.url) ?? r.research.image.url,
              imageAltText: (($ = (G = t == null ? void 0 : t.research) == null ? void 0 : G.image) == null ? void 0 : $.altText) ?? r.research.image.altText,
              title: ((y = t == null ? void 0 : t.research) == null ? void 0 : y.title) ?? r.research.title,
              body: ((J = t == null ? void 0 : t.research) == null ? void 0 : J.text) ?? r.research.text,
              buttons: [((ce = t == null ? void 0 : t.research) == null ? void 0 : ce.button) ?? r.research.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              image: ((je = (Se = t == null ? void 0 : t.inclusion) == null ? void 0 : Se.image) == null ? void 0 : je.url) ?? r.inclusion.image.url,
              imageAltText: ((ie = (Pe = t == null ? void 0 : t.inclusion) == null ? void 0 : Pe.image) == null ? void 0 : ie.altText) ?? r.inclusion.image.altText,
              title: ((ue = t == null ? void 0 : t.inclusion) == null ? void 0 : ue.title) ?? r.inclusion.title,
              body: ((be = t == null ? void 0 : t.inclusion) == null ? void 0 : be.text) ?? r.inclusion.text,
              buttons: [
                ((ke = t == null ? void 0 : t.inclusion) == null ? void 0 : ke.button) ?? r.inclusion.button
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              image: ((Qe = (ye = t == null ? void 0 : t.mentors) == null ? void 0 : ye.image) == null ? void 0 : Qe.url) ?? r.mentors.image.url,
              imageAltText: ((Ee = (Re = t == null ? void 0 : t.mentors) == null ? void 0 : Re.image) == null ? void 0 : Ee.altText) ?? r.mentors.image.altText,
              title: ((Fe = t == null ? void 0 : t.mentors) == null ? void 0 : Fe.title) ?? r.mentors.title,
              body: ((He = t == null ? void 0 : t.mentors) == null ? void 0 : He.text) ?? r.mentors.text,
              buttons: [((de = t == null ? void 0 : t.mentors) == null ? void 0 : de.button) ?? r.mentors.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            bt,
            {
              image: ((I = (B = t == null ? void 0 : t.honors) == null ? void 0 : B.image) == null ? void 0 : I.url) ?? r.honors.image.url,
              imageAltText: ((q = (H = t == null ? void 0 : t.honors) == null ? void 0 : H.image) == null ? void 0 : q.altText) ?? r.honors.image.altText,
              title: ((v = t == null ? void 0 : t.honors) == null ? void 0 : v.title) ?? r.honors.title,
              body: ((ne = t == null ? void 0 : t.honors) == null ? void 0 : ne.text) ?? r.honors.text,
              buttons: [((N = t == null ? void 0 : t.honors) == null ? void 0 : N.button) ?? r.honors.button]
            }
          ) })
        ] })
      ]
    }
  );
};
tu.propTypes = dc;
const bo = ({
  appPathFolder: e,
  dataSource: t,
  anchorMenu: r,
  hero: n,
  introContent: a,
  atAGlance: s,
  applicationRequirements: p,
  changeMajorRequirements: m,
  affordingCollege: b,
  flexibleDegreeOptions: f,
  careerOutlook: k,
  exampleCareers: A,
  globalOpportunity: j,
  attendOnline: F,
  programContactInfo: E,
  nextSteps: S,
  whyChooseAsu: R
}) => {
  var be, ke, ye, Qe;
  const [{ data: W, loading: z, error: G }, $] = Ul(), [y, J] = ct(Gr({})), [ce, Se] = ct({ accelerateData: [], concurrentData: [] }), je = xc(t, xm), { defaultState: Pe } = Gt(sn), { detailPageDefault: ie } = Pe;
  At(() => {
    typeof window < "u" && Vl({
      packageName: "app-degree-pages",
      component: "DetailPage",
      type: "NA",
      configuration: {
        dataSource: t
      }
    });
  }, []), At(() => {
    $(je);
  }, [je]), At(() => {
    if (W) {
      const Re = Gr(W);
      J(Re), Re.hasConcurrentOrAccelerateDegrees() && Tm(
        [
          Re.getAccelerateDegrees(),
          Re.getConcurrentDegrees()
        ],
        Se
      );
    }
  }, [W]);
  const ue = r ? Im(r, y) : null;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(wc, {}),
    G && /* @__PURE__ */ d.jsx(ic, { message: gc }),
    !(n != null && n.hide) && /* @__PURE__ */ d.jsx("section", { children: /* @__PURE__ */ d.jsx(
      Un,
      {
        image: (n == null ? void 0 : n.image) || ie.hero.image,
        title: {
          ...ie.hero.title,
          text: y.getMajorDesc(),
          ...n == null ? void 0 : n.title
        },
        contents: n == null ? void 0 : n.contents
      }
    ) }),
    /* @__PURE__ */ d.jsxs(Sc, { as: "div", "data-is-loading": z, className: "main-section", children: [
      !z && ue && Pm(ue) && /* @__PURE__ */ d.jsx(yc, { anchorMenu: ue }),
      z && /* @__PURE__ */ d.jsx(oc, {}),
      !z && (W != null && W.error ? /* @__PURE__ */ d.jsx("section", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        Vi,
        {
          content: sm,
          programNotFound: !0
        }
      ) }) : /* @__PURE__ */ d.jsxs("section", { className: "container mt-4 mb-0", children: [
        (a == null ? void 0 : a.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "row col-12", children: /* @__PURE__ */ d.jsx(
          mo,
          {
            breadcrumbs: a.breadcrumbs,
            section: n ? n.title.text : y.getMajorDesc()
          }
        ) }),
        /* @__PURE__ */ d.jsxs("div", { className: "row flex-column-reverse flex-sm-row", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-7 col-lg-7", children: [
            /* @__PURE__ */ d.jsxs("section", { className: "intro", children: [
              !y.isValidActiveProgram() && /* @__PURE__ */ d.jsx(Uc, { content: y.getAsuCustomText() }),
              !(a != null && a.hideMarketText) && ((a == null ? void 0 : a.contents) || y.getMarketText()) && /* @__PURE__ */ d.jsx(
                Zc,
                {
                  contents: (a == null ? void 0 : a.contents) || [
                    { text: y.getMarketText() }
                  ]
                }
              ),
              !(a != null && a.hideProgramDesc) && /* @__PURE__ */ d.jsx(
                Vi,
                {
                  content: y.getFullDescription(),
                  stemOptText: y.getStemOptText()
                }
              )
            ] }),
            !(s != null && s.hide) && /* @__PURE__ */ d.jsx(
              Lc,
              {
                offeredBy: (s == null ? void 0 : s.offeredBy) || {
                  text: y.getCollegeDesc(),
                  url: y.getCollegeUrl()
                },
                locations: (s == null ? void 0 : s.locations) || Om(y),
                firstRequirementMathCourse: (s == null ? void 0 : s.firstRequirementMathCourse) || y.getMinMathReq(),
                mathIntensity: (s == null ? void 0 : s.mathIntensity) || y.getMathIntensity(),
                stemOptText: y.hasStemOptText()
              }
            ),
            !(a != null && a.hideRequiredCourses) && !y.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
              eu,
              {
                onlineMajorMapURL: y.getOnlineMajorMapURL(),
                majorMapOnCampusURL: y.getGeneralDegreeMajorMap(),
                subPlnMajorMaps: y.getSubPlnMajorMaps(),
                subPlns: y.getSubPln()
              }
            ),
            !(p != null && p.hide) && /* @__PURE__ */ d.jsx(
              Dc,
              {
                graduateRequirements: y.isGradProgram() ? y.getGraduateRequirements() : null,
                isMinorOrCertificate: y.isMinorOrCertificate(),
                minorRequirements: y.getMinorCourseRequirements(),
                additionalRequirements: y.getAdmissionsRequirementsText(),
                transferRequirements: y.getTransferAdmission(),
                majorMapURL: y.getGeneralDegreeMajorMap()
              }
            ),
            !(m != null && m.hide) && !y.isMinorOrCertificate() && !y.isGradProgram() && /* @__PURE__ */ d.jsx($c, { content: y.getChangeMajor() })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-5 col-lg-5", children: [
            (a == null ? void 0 : a.video) && /* @__PURE__ */ d.jsx(
              Xc,
              {
                type: a.video.type,
                url: a.video.url,
                vttUrl: a.video.vttUrl,
                title: a.video.title
              }
            ),
            !(a != null && a.video) && /* @__PURE__ */ d.jsx(
              Yc,
              {
                url: ((be = a == null ? void 0 : a.image) == null ? void 0 : be.url) || ie.introContent.image.url,
                altText: ((ke = a == null ? void 0 : a.image) == null ? void 0 : ke.altText) || ie.introContent.image.altText
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
          !(S != null && S.hide) && !y.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
            Kc,
            {
              cards: S == null ? void 0 : S.cards,
              defaultCards: ie.nextSteps.cards
            }
          ),
          !(b != null && b.hide) && /* @__PURE__ */ d.jsx(fh, {}),
          !(f != null && f.hide) && y.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ d.jsx(
            Vc,
            {
              acceleratedLinks: tl(
                ce.accelerateData
              ),
              concurrentLinks: tl(
                ce.concurrentData
              )
            }
          ),
          !(k != null && k.hide) && y.getAsuCareerOpportunity() && /* @__PURE__ */ d.jsx(
            Fc,
            {
              image: (k == null ? void 0 : k.image) || ie.careerOutlook.image,
              contents: [{ text: y.getAsuCareerOpportunity() }]
            }
          ),
          !(A != null && A.hide) && y.hasCareerData() && /* @__PURE__ */ d.jsx(
            Bc,
            {
              tableData: vm(y.getCareerData())
            }
          ),
          y.getProfessionalLicensureText() && /* @__PURE__ */ d.jsx(
            Jc,
            {
              content: y.getProfessionalLicensureText()
            }
          ),
          !(j != null && j.hide) && y.getGlobalExp() && /* @__PURE__ */ d.jsx(
            Gc,
            {
              contents: [{ text: y.getGlobalExp() }],
              image: (j == null ? void 0 : j.image) || ie.globalOpportunity.image
            }
          ),
          !(R != null && R.hide) && /* @__PURE__ */ d.jsx(
            tu,
            {
              sectionIntroText: (R == null ? void 0 : R.sectionIntroText) || ie.whyChooseAsu.sectionIntroText,
              cards: R == null ? void 0 : R.cards,
              defaultCards: ie.whyChooseAsu.cards
            }
          ),
          !(F != null && F.hide) && y.isOnline() && /* @__PURE__ */ d.jsx(
            Mc,
            {
              learnMoreLink: y.getCurriculumUrl(),
              image: (F == null ? void 0 : F.image) || ie.attendOnline.image
            }
          )
        ] }),
        !(E != null && E.hide) && /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-6 col-lg-6 ", children: /* @__PURE__ */ d.jsx(
          Qc,
          {
            department: {
              text: y.getDepartmentName(),
              url: ((ye = E == null ? void 0 : E.department) == null ? void 0 : ye.url) || y.getPlanUrl()
            },
            email: {
              text: y.getEmailAddress(),
              url: ((Qe = E == null ? void 0 : E.email) == null ? void 0 : Qe.url) || y.getEmailAddress()
            },
            asuOfficeLoc: y.getAsuOfficeLoc(),
            phone: y.getPhone()
          }
        ) }) })
      ] }))
    ] })
  ] });
};
bo.propTypes = {
  appPathFolder: _.string,
  dataSource: cc,
  anchorMenu: _.shape(co),
  hero: _.shape(Un.propTypes),
  introContent: _.shape({
    hideMarketText: _.bool,
    hideProgramDesc: _.bool,
    hideRequiredCourses: _.bool,
    breadcrumbs: wa.arrayOf(Hr),
    contents: wa.arrayOf(_.object),
    video: rm,
    image: kr
  }),
  atAGlance: _.shape({
    hide: _.bool,
    offeredBy: Hr,
    locations: wa.arrayOf(Hr),
    firstRequirementMathCourse: _.string,
    mathIntensity: _.string,
    timeCommitment: _.string
  }),
  applicationRequirements: _.shape({ hide: _.bool }),
  changeMajorRequirements: _.shape({ hide: _.bool }),
  affordingCollege: _.shape({ hide: _.bool }),
  flexibleDegreeOptions: _.shape({ hide: _.bool }),
  careerOutlook: _.shape({
    hide: _.bool,
    image: kr
  }),
  exampleCareers: _.shape({ hide: _.bool }),
  globalOpportunity: _.shape({
    hide: _.bool,
    image: kr
  }),
  attendOnline: _.shape({
    hide: _.bool,
    image: kr
  }),
  programContactInfo: _.shape({
    hide: _.bool,
    department: _.string,
    email: _.string
  }),
  nextSteps: _.shape({
    hide: _.bool,
    cards: _.arrayOf(Ur)
  }),
  whyChooseAsu: _.shape(dc)
};
const ru = (e) => /* @__PURE__ */ d.jsx(fo, { detailPageProps: e, children: /* @__PURE__ */ d.jsx(bo, { ...e }) });
ru.propTypes = bo.propTypes;
var ga = {}, sl;
function Eh() {
  if (sl) return ga;
  sl = 1;
  var e = fl;
  return ga.createRoot = e.createRoot, ga.hydrateRoot = e.hydrateRoot, ga;
}
var jh = Eh();
const nu = (e, t, r) => {
  const n = document.querySelector(r);
  jh.createRoot(n).render(mt.createElement(e, t));
}, Oh = ({ targetSelector: e, props: t }) => {
  nu(Ic, t, e);
}, Ih = ({ targetSelector: e, props: t }) => {
  nu(ru, t, e);
};
export {
  ru as DetailPage,
  Ic as ListingPage,
  Oh as initListingPage,
  Ih as initProgramDetailPage
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
