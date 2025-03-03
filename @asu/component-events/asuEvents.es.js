import et, { Component as fs, createContext as ps, forwardRef as ti, useRef as hs, useImperativeHandle as gs, useId as ms, useContext as Kt, createElement as ri, useState as Gr, useEffect as Jr } from "react";
import ni from "react-dom";
function ai(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oi = { exports: {} }, zr = {};
var no;
function ys() {
  if (no) return zr;
  no = 1;
  var e = et, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(v, b, g) {
    var O, x = {}, j = null, G = null;
    g !== void 0 && (j = "" + g), b.key !== void 0 && (j = "" + b.key), b.ref !== void 0 && (G = b.ref);
    for (O in b) o.call(b, O) && !f.hasOwnProperty(O) && (x[O] = b[O]);
    if (v && v.defaultProps) for (O in b = v.defaultProps, b) x[O] === void 0 && (x[O] = b[O]);
    return { $$typeof: t, type: v, key: j, ref: G, props: x, _owner: c.current };
  }
  return zr.Fragment = a, zr.jsx = y, zr.jsxs = y, zr;
}
oi.exports = ys();
var gt = oi.exports;
function ii({
  packageName: e = "",
  component: t = "",
  type: a = "",
  configuration: o = {}
}) {
  if (!e || !t) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: t,
    type: a,
    configuration: o
  };
}
function ka(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var si = { exports: {} }, Br = {}, ao;
function bs() {
  if (ao) return Br;
  ao = 1;
  var e = et, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(v, b, g) {
    var O, x = {}, j = null, G = null;
    g !== void 0 && (j = "" + g), b.key !== void 0 && (j = "" + b.key), b.ref !== void 0 && (G = b.ref);
    for (O in b) o.call(b, O) && !f.hasOwnProperty(O) && (x[O] = b[O]);
    if (v && v.defaultProps) for (O in b = v.defaultProps, b) x[O] === void 0 && (x[O] = b[O]);
    return { $$typeof: t, type: v, key: j, ref: G, props: x, _owner: c.current };
  }
  return Br.Fragment = a, Br.jsx = y, Br.jsxs = y, Br;
}
si.exports = bs();
var V = si.exports, li = { exports: {} }, Qn, oo;
function vs() {
  if (oo) return Qn;
  oo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qn = e, Qn;
}
var Jn, io;
function ws() {
  if (io) return Jn;
  io = 1;
  var e = vs();
  function t() {
  }
  function a() {
  }
  return a.resetWarningCache = t, Jn = function() {
    function o(y, v, b, g, O, x) {
      if (x !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
      }
    }
    o.isRequired = o;
    function c() {
      return o;
    }
    var f = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: c,
      element: o,
      elementType: o,
      instanceOf: c,
      node: o,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: a,
      resetWarningCache: t
    };
    return f.PropTypes = f, f;
  }, Jn;
}
li.exports = ws()();
var Ss = li.exports;
const i = /* @__PURE__ */ ka(Ss), ks = i.shape({
  url: i.string,
  altText: i.string,
  cssClass: i.arrayOf(i.string),
  size: i.oneOf(["small", "medium", "large"])
}), Zn = i.shape({
  text: i.string,
  maxWidth: i.string,
  cssClass: i.arrayOf(i.string),
  highlightColor: i.oneOf(["gold", "black"])
}), ci = i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  content: i.shape({
    icon: i.string,
    header: i.string,
    body: i.string
  })
}), xa = i.shape({
  text: i.string,
  name: i.string,
  event: i.string,
  action: i.string,
  type: i.string,
  region: i.string,
  section: i.string,
  component: i.string
});
var ui = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function a() {
      for (var f = "", y = 0; y < arguments.length; y++) {
        var v = arguments[y];
        v && (f = c(f, o(v)));
      }
      return f;
    }
    function o(f) {
      if (typeof f == "string" || typeof f == "number")
        return f;
      if (typeof f != "object")
        return "";
      if (Array.isArray(f))
        return a.apply(null, f);
      if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]"))
        return f.toString();
      var y = "";
      for (var v in f)
        t.call(f, v) && f[v] && (y = c(y, v));
      return y;
    }
    function c(f, y) {
      return y ? f ? f + " " + y : f + y : f;
    }
    e.exports ? (a.default = a, e.exports = a) : window.classNames = a;
  })();
})(ui);
var xs = ui.exports;
const Cr = /* @__PURE__ */ ka(xs), Cs = () => {
  const [e, t] = Gr(), [a, o] = Gr(!1), [c, f] = Gr(!1), [y, v] = Gr("");
  return Jr(() => {
    y && (() => {
      f(null), o(!0);
      try {
        fetch(y).then((b) => b.json()).then((b) => {
          t(b), o(!1);
        }).catch((b) => {
          f(b), o(!1);
        });
      } catch (b) {
        f(b);
      }
    })();
  }, [y]), [{ data: e, loading: a, error: c }, v];
}, _s = (e) => (e || []).join(" "), {
  entries: di,
  setPrototypeOf: so,
  isFrozen: Ts,
  getPrototypeOf: Es,
  getOwnPropertyDescriptor: Rs
} = Object;
let {
  freeze: lt,
  seal: bt,
  create: fi
} = Object, {
  apply: ua,
  construct: da
} = typeof Reflect < "u" && Reflect;
lt || (lt = function(e) {
  return e;
});
bt || (bt = function(e) {
  return e;
});
ua || (ua = function(e, t, a) {
  return e.apply(t, a);
});
da || (da = function(e, t) {
  return new e(...t);
});
const wn = ct(Array.prototype.forEach), As = ct(Array.prototype.lastIndexOf), lo = ct(Array.prototype.pop), Ur = ct(Array.prototype.push), Os = ct(Array.prototype.splice), En = ct(String.prototype.toLowerCase), Kn = ct(String.prototype.toString), co = ct(String.prototype.match), Wr = ct(String.prototype.replace), Is = ct(String.prototype.indexOf), Ns = ct(String.prototype.trim), Ct = ct(Object.prototype.hasOwnProperty), st = ct(RegExp.prototype.test), Vr = Ps(TypeError);
function ct(e) {
  return function(t) {
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
      o[c - 1] = arguments[c];
    return ua(e, t, o);
  };
}
function Ps(e) {
  return function() {
    for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++)
      a[o] = arguments[o];
    return da(e, a);
  };
}
function we(e, t) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : En;
  so && so(e, null);
  let o = t.length;
  for (; o--; ) {
    let c = t[o];
    if (typeof c == "string") {
      const f = a(c);
      f !== c && (Ts(t) || (t[o] = f), c = f);
    }
    e[c] = !0;
  }
  return e;
}
function Ds(e) {
  for (let t = 0; t < e.length; t++)
    Ct(e, t) || (e[t] = null);
  return e;
}
function dr(e) {
  const t = fi(null);
  for (const [a, o] of di(e))
    Ct(e, a) && (Array.isArray(o) ? t[a] = Ds(o) : o && typeof o == "object" && o.constructor === Object ? t[a] = dr(o) : t[a] = o);
  return t;
}
function qr(e, t) {
  for (; e !== null; ) {
    const o = Rs(e, t);
    if (o) {
      if (o.get)
        return ct(o.get);
      if (typeof o.value == "function")
        return ct(o.value);
    }
    e = Es(e);
  }
  function a() {
    return null;
  }
  return a;
}
const uo = lt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ea = lt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ta = lt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ls = lt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ra = lt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ms = lt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), fo = lt(["#text"]), po = lt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), na = lt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ho = lt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Sn = lt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Fs = bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), js = bt(/<%[\w\W]*|[\w\W]*%>/gm), $s = bt(/\$\{[\w\W]*/gm), zs = bt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Bs = bt(/^aria-[\-\w]+$/), pi = bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Us = bt(/^(?:\w+script|data):/i), Ws = bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), hi = bt(/^html$/i), Vs = bt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var go = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Bs,
  ATTR_WHITESPACE: Ws,
  CUSTOM_ELEMENT: Vs,
  DATA_ATTR: zs,
  DOCTYPE_NAME: hi,
  ERB_EXPR: js,
  IS_ALLOWED_URI: pi,
  IS_SCRIPT_OR_DATA: Us,
  MUSTACHE_EXPR: Fs,
  TMPLIT_EXPR: $s
});
const Hr = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, qs = function() {
  return typeof window > "u" ? null : window;
}, Hs = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let a = null;
  const o = "data-tt-policy-suffix";
  t && t.hasAttribute(o) && (a = t.getAttribute(o));
  const c = "dompurify" + (a ? "#" + a : "");
  try {
    return e.createPolicy(c, {
      createHTML(f) {
        return f;
      },
      createScriptURL(f) {
        return f;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + c + " could not be created."), null;
  }
}, mo = function() {
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
function gi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qs();
  const t = (w) => gi(w);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== Hr.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: a
  } = e;
  const o = a, c = o.currentScript, {
    DocumentFragment: f,
    HTMLTemplateElement: y,
    Node: v,
    Element: b,
    NodeFilter: g,
    NamedNodeMap: O = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: x,
    DOMParser: j,
    trustedTypes: G
  } = e, I = b.prototype, S = qr(I, "cloneNode"), N = qr(I, "remove"), B = qr(I, "nextSibling"), U = qr(I, "childNodes"), Y = qr(I, "parentNode");
  if (typeof y == "function") {
    const w = a.createElement("template");
    w.content && w.content.ownerDocument && (a = w.content.ownerDocument);
  }
  let X, k = "";
  const {
    implementation: ue,
    createNodeIterator: be,
    createDocumentFragment: Te,
    getElementsByTagName: Ie
  } = a, {
    importNode: ze
  } = o;
  let ke = mo();
  t.isSupported = typeof di == "function" && typeof Y == "function" && ue && ue.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: fe,
    ERB_EXPR: Ee,
    TMPLIT_EXPR: Re,
    DATA_ATTR: Se,
    ARIA_ATTR: Qe,
    IS_SCRIPT_OR_DATA: Ne,
    ATTR_WHITESPACE: xe,
    CUSTOM_ELEMENT: Fe
  } = go;
  let {
    IS_ALLOWED_URI: Ge
  } = go, ve = null;
  const D = we({}, [...uo, ...ea, ...ta, ...ra, ...fo]);
  let A = null;
  const P = we({}, [...po, ...na, ...ho, ...Sn]);
  let F = Object.seal(fi(null, {
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
  })), p = null, te = null, C = !0, re = !0, J = !1, K = !0, z = !1, ne = !0, se = !1, Z = !1, pe = !1, ee = !1, le = !1, We = !1, de = !0, Je = !1;
  const Ve = "user-content-";
  let he = !0, $ = !1, ae = {}, Xe = null;
  const at = we({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Me = null;
  const er = we({}, ["audio", "video", "img", "source", "image", "track"]);
  let jt = null;
  const pr = we({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Tt = "http://www.w3.org/1998/Math/MathML", vt = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml";
  let Et = ut, tr = !1, rr = null;
  const Or = we({}, [Tt, vt, ut], Kn);
  let Ze = we({}, ["mi", "mo", "mn", "ms", "mtext"]), Rt = we({}, ["annotation-xml"]);
  const $t = we({}, ["title", "style", "font", "a", "script"]);
  let Ce = null;
  const It = ["application/xhtml+xml", "text/html"], zt = "text/html";
  let je = null, Ke = null;
  const Bt = a.createElement("form"), mt = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Ut = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ke && Ke === w)) {
      if ((!w || typeof w != "object") && (w = {}), w = dr(w), Ce = // eslint-disable-next-line unicorn/prefer-includes
      It.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? zt : w.PARSER_MEDIA_TYPE, je = Ce === "application/xhtml+xml" ? Kn : En, ve = Ct(w, "ALLOWED_TAGS") ? we({}, w.ALLOWED_TAGS, je) : D, A = Ct(w, "ALLOWED_ATTR") ? we({}, w.ALLOWED_ATTR, je) : P, rr = Ct(w, "ALLOWED_NAMESPACES") ? we({}, w.ALLOWED_NAMESPACES, Kn) : Or, jt = Ct(w, "ADD_URI_SAFE_ATTR") ? we(dr(pr), w.ADD_URI_SAFE_ATTR, je) : pr, Me = Ct(w, "ADD_DATA_URI_TAGS") ? we(dr(er), w.ADD_DATA_URI_TAGS, je) : er, Xe = Ct(w, "FORBID_CONTENTS") ? we({}, w.FORBID_CONTENTS, je) : at, p = Ct(w, "FORBID_TAGS") ? we({}, w.FORBID_TAGS, je) : {}, te = Ct(w, "FORBID_ATTR") ? we({}, w.FORBID_ATTR, je) : {}, ae = Ct(w, "USE_PROFILES") ? w.USE_PROFILES : !1, C = w.ALLOW_ARIA_ATTR !== !1, re = w.ALLOW_DATA_ATTR !== !1, J = w.ALLOW_UNKNOWN_PROTOCOLS || !1, K = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, z = w.SAFE_FOR_TEMPLATES || !1, ne = w.SAFE_FOR_XML !== !1, se = w.WHOLE_DOCUMENT || !1, ee = w.RETURN_DOM || !1, le = w.RETURN_DOM_FRAGMENT || !1, We = w.RETURN_TRUSTED_TYPE || !1, pe = w.FORCE_BODY || !1, de = w.SANITIZE_DOM !== !1, Je = w.SANITIZE_NAMED_PROPS || !1, he = w.KEEP_CONTENT !== !1, $ = w.IN_PLACE || !1, Ge = w.ALLOWED_URI_REGEXP || pi, Et = w.NAMESPACE || ut, Ze = w.MATHML_TEXT_INTEGRATION_POINTS || Ze, Rt = w.HTML_INTEGRATION_POINTS || Rt, F = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && mt(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (F.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && mt(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (F.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (F.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), z && (re = !1), le && (ee = !0), ae && (ve = we({}, fo), A = [], ae.html === !0 && (we(ve, uo), we(A, po)), ae.svg === !0 && (we(ve, ea), we(A, na), we(A, Sn)), ae.svgFilters === !0 && (we(ve, ta), we(A, na), we(A, Sn)), ae.mathMl === !0 && (we(ve, ra), we(A, ho), we(A, Sn))), w.ADD_TAGS && (ve === D && (ve = dr(ve)), we(ve, w.ADD_TAGS, je)), w.ADD_ATTR && (A === P && (A = dr(A)), we(A, w.ADD_ATTR, je)), w.ADD_URI_SAFE_ATTR && we(jt, w.ADD_URI_SAFE_ATTR, je), w.FORBID_CONTENTS && (Xe === at && (Xe = dr(Xe)), we(Xe, w.FORBID_CONTENTS, je)), he && (ve["#text"] = !0), se && we(ve, ["html", "head", "body"]), ve.table && (we(ve, ["tbody"]), delete p.tbody), w.TRUSTED_TYPES_POLICY) {
        if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Vr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Vr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        X = w.TRUSTED_TYPES_POLICY, k = X.createHTML("");
      } else
        X === void 0 && (X = Hs(G, c)), X !== null && typeof k == "string" && (k = X.createHTML(""));
      lt && lt(w), Ke = w;
    }
  }, Wt = we({}, [...ea, ...ta, ...Ls]), Vt = we({}, [...ra, ...Ms]), hr = function(w) {
    let Q = Y(w);
    (!Q || !Q.tagName) && (Q = {
      namespaceURI: Et,
      tagName: "template"
    });
    const q = En(w.tagName), _e = En(Q.tagName);
    return rr[w.namespaceURI] ? w.namespaceURI === vt ? Q.namespaceURI === ut ? q === "svg" : Q.namespaceURI === Tt ? q === "svg" && (_e === "annotation-xml" || Ze[_e]) : !!Wt[q] : w.namespaceURI === Tt ? Q.namespaceURI === ut ? q === "math" : Q.namespaceURI === vt ? q === "math" && Rt[_e] : !!Vt[q] : w.namespaceURI === ut ? Q.namespaceURI === vt && !Rt[_e] || Q.namespaceURI === Tt && !Ze[_e] ? !1 : !Vt[q] && ($t[q] || !Wt[q]) : !!(Ce === "application/xhtml+xml" && rr[w.namespaceURI]) : !1;
  }, yt = function(w) {
    Ur(t.removed, {
      element: w
    });
    try {
      Y(w).removeChild(w);
    } catch {
      N(w);
    }
  }, Nt = function(w, Q) {
    try {
      Ur(t.removed, {
        attribute: Q.getAttributeNode(w),
        from: Q
      });
    } catch {
      Ur(t.removed, {
        attribute: null,
        from: Q
      });
    }
    if (Q.removeAttribute(w), w === "is")
      if (ee || le)
        try {
          yt(Q);
        } catch {
        }
      else
        try {
          Q.setAttribute(w, "");
        } catch {
        }
  }, gr = function(w) {
    let Q = null, q = null;
    if (pe)
      w = "<remove></remove>" + w;
    else {
      const Be = co(w, /^[\r\n\t ]+/);
      q = Be && Be[0];
    }
    Ce === "application/xhtml+xml" && Et === ut && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const _e = X ? X.createHTML(w) : w;
    if (Et === ut)
      try {
        Q = new j().parseFromString(_e, Ce);
      } catch {
      }
    if (!Q || !Q.documentElement) {
      Q = ue.createDocument(Et, "template", null);
      try {
        Q.documentElement.innerHTML = tr ? k : _e;
      } catch {
      }
    }
    const He = Q.body || Q.documentElement;
    return w && q && He.insertBefore(a.createTextNode(q), He.childNodes[0] || null), Et === ut ? Ie.call(Q, se ? "html" : "body")[0] : se ? Q.documentElement : He;
  }, mr = function(w) {
    return be.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, At = function(w) {
    return w instanceof x && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof O) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, nr = function(w) {
    return typeof v == "function" && w instanceof v;
  };
  function tt(w, Q, q) {
    wn(w, (_e) => {
      _e.call(t, Q, q, Ke);
    });
  }
  const qt = function(w) {
    let Q = null;
    if (tt(ke.beforeSanitizeElements, w, null), At(w))
      return yt(w), !0;
    const q = je(w.nodeName);
    if (tt(ke.uponSanitizeElement, w, {
      tagName: q,
      allowedTags: ve
    }), w.hasChildNodes() && !nr(w.firstElementChild) && st(/<[/\w]/g, w.innerHTML) && st(/<[/\w]/g, w.textContent) || w.nodeType === Hr.progressingInstruction || ne && w.nodeType === Hr.comment && st(/<[/\w]/g, w.data))
      return yt(w), !0;
    if (!ve[q] || p[q]) {
      if (!p[q] && Ot(q) && (F.tagNameCheck instanceof RegExp && st(F.tagNameCheck, q) || F.tagNameCheck instanceof Function && F.tagNameCheck(q)))
        return !1;
      if (he && !Xe[q]) {
        const _e = Y(w) || w.parentNode, He = U(w) || w.childNodes;
        if (He && _e) {
          const Be = He.length;
          for (let ot = Be - 1; ot >= 0; --ot) {
            const Pe = S(He[ot], !0);
            Pe.__removalCount = (w.__removalCount || 0) + 1, _e.insertBefore(Pe, B(w));
          }
        }
      }
      return yt(w), !0;
    }
    return w instanceof b && !hr(w) || (q === "noscript" || q === "noembed" || q === "noframes") && st(/<\/no(script|embed|frames)/i, w.innerHTML) ? (yt(w), !0) : (z && w.nodeType === Hr.text && (Q = w.textContent, wn([fe, Ee, Re], (_e) => {
      Q = Wr(Q, _e, " ");
    }), w.textContent !== Q && (Ur(t.removed, {
      element: w.cloneNode()
    }), w.textContent = Q)), tt(ke.afterSanitizeElements, w, null), !1);
  }, yr = function(w, Q, q) {
    if (de && (Q === "id" || Q === "name") && (q in a || q in Bt))
      return !1;
    if (!(re && !te[Q] && st(Se, Q)) && !(C && st(Qe, Q))) {
      if (!A[Q] || te[Q]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Ot(w) && (F.tagNameCheck instanceof RegExp && st(F.tagNameCheck, w) || F.tagNameCheck instanceof Function && F.tagNameCheck(w)) && (F.attributeNameCheck instanceof RegExp && st(F.attributeNameCheck, Q) || F.attributeNameCheck instanceof Function && F.attributeNameCheck(Q)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          Q === "is" && F.allowCustomizedBuiltInElements && (F.tagNameCheck instanceof RegExp && st(F.tagNameCheck, q) || F.tagNameCheck instanceof Function && F.tagNameCheck(q)))
        ) return !1;
      } else if (!jt[Q] && !st(Ge, Wr(q, xe, "")) && !((Q === "src" || Q === "xlink:href" || Q === "href") && w !== "script" && Is(q, "data:") === 0 && Me[w]) && !(J && !st(Ne, Wr(q, xe, ""))) && q)
        return !1;
    }
    return !0;
  }, Ot = function(w) {
    return w !== "annotation-xml" && co(w, Fe);
  }, br = function(w) {
    tt(ke.beforeSanitizeAttributes, w, null);
    const {
      attributes: Q
    } = w;
    if (!Q || At(w))
      return;
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: A,
      forceKeepAttr: void 0
    };
    let _e = Q.length;
    for (; _e--; ) {
      const He = Q[_e], {
        name: Be,
        namespaceURI: ot,
        value: Pe
      } = He, it = je(Be);
      let Ye = Be === "value" ? Pe : Ns(Pe);
      if (q.attrName = it, q.attrValue = Ye, q.keepAttr = !0, q.forceKeepAttr = void 0, tt(ke.uponSanitizeAttribute, w, q), Ye = q.attrValue, Je && (it === "id" || it === "name") && (Nt(Be, w), Ye = Ve + Ye), ne && st(/((--!?|])>)|<\/(style|title)/i, Ye)) {
        Nt(Be, w);
        continue;
      }
      if (q.forceKeepAttr || (Nt(Be, w), !q.keepAttr))
        continue;
      if (!K && st(/\/>/i, Ye)) {
        Nt(Be, w);
        continue;
      }
      z && wn([fe, Ee, Re], (vr) => {
        Ye = Wr(Ye, vr, " ");
      });
      const Ht = je(w.nodeName);
      if (yr(Ht, it, Ye)) {
        if (X && typeof G == "object" && typeof G.getAttributeType == "function" && !ot)
          switch (G.getAttributeType(Ht, it)) {
            case "TrustedHTML": {
              Ye = X.createHTML(Ye);
              break;
            }
            case "TrustedScriptURL": {
              Ye = X.createScriptURL(Ye);
              break;
            }
          }
        try {
          ot ? w.setAttributeNS(ot, Be, Ye) : w.setAttribute(Be, Ye), At(w) ? yt(w) : lo(t.removed);
        } catch {
        }
      }
    }
    tt(ke.afterSanitizeAttributes, w, null);
  }, ar = function w(Q) {
    let q = null;
    const _e = mr(Q);
    for (tt(ke.beforeSanitizeShadowDOM, Q, null); q = _e.nextNode(); )
      tt(ke.uponSanitizeShadowNode, q, null), qt(q), br(q), q.content instanceof f && w(q.content);
    tt(ke.afterSanitizeShadowDOM, Q, null);
  };
  return t.sanitize = function(w) {
    let Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q = null, _e = null, He = null, Be = null;
    if (tr = !w, tr && (w = "<!-->"), typeof w != "string" && !nr(w))
      if (typeof w.toString == "function") {
        if (w = w.toString(), typeof w != "string")
          throw Vr("dirty is not a string, aborting");
      } else
        throw Vr("toString is not a function");
    if (!t.isSupported)
      return w;
    if (Z || Ut(Q), t.removed = [], typeof w == "string" && ($ = !1), $) {
      if (w.nodeName) {
        const it = je(w.nodeName);
        if (!ve[it] || p[it])
          throw Vr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (w instanceof v)
      q = gr("<!---->"), _e = q.ownerDocument.importNode(w, !0), _e.nodeType === Hr.element && _e.nodeName === "BODY" || _e.nodeName === "HTML" ? q = _e : q.appendChild(_e);
    else {
      if (!ee && !z && !se && // eslint-disable-next-line unicorn/prefer-includes
      w.indexOf("<") === -1)
        return X && We ? X.createHTML(w) : w;
      if (q = gr(w), !q)
        return ee ? null : We ? k : "";
    }
    q && pe && yt(q.firstChild);
    const ot = mr($ ? w : q);
    for (; He = ot.nextNode(); )
      qt(He), br(He), He.content instanceof f && ar(He.content);
    if ($)
      return w;
    if (ee) {
      if (le)
        for (Be = Te.call(q.ownerDocument); q.firstChild; )
          Be.appendChild(q.firstChild);
      else
        Be = q;
      return (A.shadowroot || A.shadowrootmode) && (Be = ze.call(o, Be, !0)), Be;
    }
    let Pe = se ? q.outerHTML : q.innerHTML;
    return se && ve["!doctype"] && q.ownerDocument && q.ownerDocument.doctype && q.ownerDocument.doctype.name && st(hi, q.ownerDocument.doctype.name) && (Pe = "<!DOCTYPE " + q.ownerDocument.doctype.name + `>
` + Pe), z && wn([fe, Ee, Re], (it) => {
      Pe = Wr(Pe, it, " ");
    }), X && We ? X.createHTML(Pe) : Pe;
  }, t.setConfig = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ut(w), Z = !0;
  }, t.clearConfig = function() {
    Ke = null, Z = !1;
  }, t.isValidAttribute = function(w, Q, q) {
    Ke || Ut({});
    const _e = je(w), He = je(Q);
    return yr(_e, He, q);
  }, t.addHook = function(w, Q) {
    typeof Q == "function" && Ur(ke[w], Q);
  }, t.removeHook = function(w, Q) {
    if (Q !== void 0) {
      const q = As(ke[w], Q);
      return q === -1 ? void 0 : Os(ke[w], q, 1)[0];
    }
    return lo(ke[w]);
  }, t.removeHooks = function(w) {
    ke[w] = [];
  }, t.removeAllHooks = function() {
    ke = mo();
  }, t;
}
var Gs = gi();
const Sr = (e) => ({ __html: Gs.sanitize(e) });
i.shape({
  event: i.string,
  action: i.string,
  name: i.string,
  region: i.string,
  section: i.string,
  component: i.string,
  type: i.string,
  text: i.string
});
const Ys = ({
  event: e = "",
  action: t = "",
  name: a = "",
  type: o = "",
  section: c = "",
  text: f = "",
  region: y = "",
  component: v = ""
}) => {
  const { dataLayer: b } = window, g = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: a.toLowerCase(),
    type: o.toLowerCase(),
    region: y.toLowerCase(),
    section: c.toLowerCase(),
    text: f.toLowerCase(),
    component: v.toLowerCase()
  };
  b && b.push(g);
};
var ur = {}, yo;
function Xs() {
  if (yo) return ur;
  yo = 1;
  var e = et;
  function t(r) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, d = 1; d < arguments.length; d++) l += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + r + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = Object.prototype.hasOwnProperty, o = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, f = {};
  function y(r) {
    return a.call(f, r) ? !0 : a.call(c, r) ? !1 : o.test(r) ? f[r] = !0 : (c[r] = !0, !1);
  }
  function v(r, l, d, m, R, _, L) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = m, this.attributeNamespace = R, this.mustUseProperty = d, this.propertyName = r, this.type = l, this.sanitizeURL = _, this.removeEmptyString = L;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    b[r] = new v(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var l = r[0];
    b[l] = new v(l, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    b[r] = new v(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    b[r] = new v(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    b[r] = new v(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    b[r] = new v(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    b[r] = new v(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    b[r] = new v(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    b[r] = new v(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var g = /[\-:]([a-z])/g;
  function O(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var l = r.replace(
      g,
      O
    );
    b[l] = new v(l, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var l = r.replace(g, O);
    b[l] = new v(l, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var l = r.replace(g, O);
    b[l] = new v(l, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    b[r] = new v(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    b[r] = new v(r, 1, !1, r.toLowerCase(), null, !0, !0);
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
  }, j = ["Webkit", "ms", "Moz", "O"];
  Object.keys(x).forEach(function(r) {
    j.forEach(function(l) {
      l = l + r.charAt(0).toUpperCase() + r.substring(1), x[l] = x[r];
    });
  });
  var G = /["'&<>]/;
  function I(r) {
    if (typeof r == "boolean" || typeof r == "number") return "" + r;
    r = "" + r;
    var l = G.exec(r);
    if (l) {
      var d = "", m, R = 0;
      for (m = l.index; m < r.length; m++) {
        switch (r.charCodeAt(m)) {
          case 34:
            l = "&quot;";
            break;
          case 38:
            l = "&amp;";
            break;
          case 39:
            l = "&#x27;";
            break;
          case 60:
            l = "&lt;";
            break;
          case 62:
            l = "&gt;";
            break;
          default:
            continue;
        }
        R !== m && (d += r.substring(R, m)), R = m + 1, d += l;
      }
      r = R !== m ? d + r.substring(R, m) : d;
    }
    return r;
  }
  var S = /([A-Z])/g, N = /^ms-/, B = Array.isArray;
  function U(r, l) {
    return { insertionMode: r, selectedValue: l };
  }
  function Y(r, l, d) {
    switch (l) {
      case "select":
        return U(1, d.value != null ? d.value : d.defaultValue);
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
    return 4 <= r.insertionMode || r.insertionMode === 0 ? U(1, null) : r;
  }
  var X = /* @__PURE__ */ new Map();
  function k(r, l, d) {
    if (typeof d != "object") throw Error(t(62));
    l = !0;
    for (var m in d) if (a.call(d, m)) {
      var R = d[m];
      if (R != null && typeof R != "boolean" && R !== "") {
        if (m.indexOf("--") === 0) {
          var _ = I(m);
          R = I(("" + R).trim());
        } else {
          _ = m;
          var L = X.get(_);
          L !== void 0 || (L = I(_.replace(S, "-$1").toLowerCase().replace(N, "-ms-")), X.set(_, L)), _ = L, R = typeof R == "number" ? R === 0 || a.call(x, m) ? "" + R : R + "px" : I(("" + R).trim());
        }
        l ? (l = !1, r.push(' style="', _, ":", R)) : r.push(";", _, ":", R);
      }
    }
    l || r.push('"');
  }
  function ue(r, l, d, m) {
    switch (d) {
      case "style":
        k(r, l, m);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < d.length) || d[0] !== "o" && d[0] !== "O" || d[1] !== "n" && d[1] !== "N") {
      if (l = b.hasOwnProperty(d) ? b[d] : null, l !== null) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!l.acceptsBooleans) return;
        }
        switch (d = l.attributeName, l.type) {
          case 3:
            m && r.push(" ", d, '=""');
            break;
          case 4:
            m === !0 ? r.push(" ", d, '=""') : m !== !1 && r.push(" ", d, '="', I(m), '"');
            break;
          case 5:
            isNaN(m) || r.push(" ", d, '="', I(m), '"');
            break;
          case 6:
            !isNaN(m) && 1 <= m && r.push(" ", d, '="', I(m), '"');
            break;
          default:
            l.sanitizeURL && (m = "" + m), r.push(" ", d, '="', I(m), '"');
        }
      } else if (y(d)) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = d.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        r.push(" ", d, '="', I(m), '"');
      }
    }
  }
  function be(r, l, d) {
    if (l != null) {
      if (d != null) throw Error(t(60));
      if (typeof l != "object" || !("__html" in l)) throw Error(t(61));
      l = l.__html, l != null && r.push("" + l);
    }
  }
  function Te(r) {
    var l = "";
    return e.Children.forEach(r, function(d) {
      d != null && (l += d);
    }), l;
  }
  function Ie(r, l, d, m) {
    r.push(fe(d));
    var R = d = null, _;
    for (_ in l) if (a.call(l, _)) {
      var L = l[_];
      if (L != null) switch (_) {
        case "children":
          d = L;
          break;
        case "dangerouslySetInnerHTML":
          R = L;
          break;
        default:
          ue(r, m, _, L);
      }
    }
    return r.push(">"), be(r, R, d), typeof d == "string" ? (r.push(I(d)), null) : d;
  }
  var ze = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ke = /* @__PURE__ */ new Map();
  function fe(r) {
    var l = ke.get(r);
    if (l === void 0) {
      if (!ze.test(r)) throw Error(t(65, r));
      l = "<" + r, ke.set(r, l);
    }
    return l;
  }
  function Ee(r, l, d, m, R) {
    switch (l) {
      case "select":
        r.push(fe("select"));
        var _ = null, L = null;
        for (ge in d) if (a.call(d, ge)) {
          var H = d[ge];
          if (H != null) switch (ge) {
            case "children":
              _ = H;
              break;
            case "dangerouslySetInnerHTML":
              L = H;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ue(r, m, ge, H);
          }
        }
        return r.push(">"), be(r, L, _), _;
      case "option":
        L = R.selectedValue, r.push(fe("option"));
        var oe = H = null, ce = null, ge = null;
        for (_ in d) if (a.call(d, _)) {
          var qe = d[_];
          if (qe != null) switch (_) {
            case "children":
              H = qe;
              break;
            case "selected":
              ce = qe;
              break;
            case "dangerouslySetInnerHTML":
              ge = qe;
              break;
            case "value":
              oe = qe;
            default:
              ue(r, m, _, qe);
          }
        }
        if (L != null) if (d = oe !== null ? "" + oe : Te(H), B(L)) {
          for (m = 0; m < L.length; m++)
            if ("" + L[m] === d) {
              r.push(' selected=""');
              break;
            }
        } else "" + L === d && r.push(' selected=""');
        else ce && r.push(' selected=""');
        return r.push(">"), be(r, ge, H), H;
      case "textarea":
        r.push(fe("textarea")), ge = L = _ = null;
        for (H in d) if (a.call(d, H) && (oe = d[H], oe != null)) switch (H) {
          case "children":
            ge = oe;
            break;
          case "value":
            _ = oe;
            break;
          case "defaultValue":
            L = oe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ue(
              r,
              m,
              H,
              oe
            );
        }
        if (_ === null && L !== null && (_ = L), r.push(">"), ge != null) {
          if (_ != null) throw Error(t(92));
          if (B(ge) && 1 < ge.length) throw Error(t(93));
          _ = "" + ge;
        }
        return typeof _ == "string" && _[0] === `
` && r.push(`
`), _ !== null && r.push(I("" + _)), null;
      case "input":
        r.push(fe("input")), oe = ge = H = _ = null;
        for (L in d) if (a.call(d, L) && (ce = d[L], ce != null)) switch (L) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            oe = ce;
            break;
          case "defaultValue":
            H = ce;
            break;
          case "checked":
            ge = ce;
            break;
          case "value":
            _ = ce;
            break;
          default:
            ue(r, m, L, ce);
        }
        return ge !== null ? ue(r, m, "checked", ge) : oe !== null && ue(r, m, "checked", oe), _ !== null ? ue(r, m, "value", _) : H !== null && ue(r, m, "value", H), r.push("/>"), null;
      case "menuitem":
        r.push(fe("menuitem"));
        for (var wt in d) if (a.call(d, wt) && (_ = d[wt], _ != null)) switch (wt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ue(r, m, wt, _);
        }
        return r.push(">"), null;
      case "title":
        r.push(fe("title")), _ = null;
        for (qe in d) if (a.call(d, qe) && (L = d[qe], L != null)) switch (qe) {
          case "children":
            _ = L;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ue(r, m, qe, L);
        }
        return r.push(">"), _;
      case "listing":
      case "pre":
        r.push(fe(l)), L = _ = null;
        for (oe in d) if (a.call(d, oe) && (H = d[oe], H != null)) switch (oe) {
          case "children":
            _ = H;
            break;
          case "dangerouslySetInnerHTML":
            L = H;
            break;
          default:
            ue(r, m, oe, H);
        }
        if (r.push(">"), L != null) {
          if (_ != null) throw Error(t(60));
          if (typeof L != "object" || !("__html" in L)) throw Error(t(61));
          d = L.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? r.push(`
`, d) : r.push("" + d));
        }
        return typeof _ == "string" && _[0] === `
` && r.push(`
`), _;
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
        r.push(fe(l));
        for (var St in d) if (a.call(d, St) && (_ = d[St], _ != null)) switch (St) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, l));
          default:
            ue(r, m, St, _);
        }
        return r.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ie(
          r,
          d,
          l,
          m
        );
      case "html":
        return R.insertionMode === 0 && r.push("<!DOCTYPE html>"), Ie(r, d, l, m);
      default:
        if (l.indexOf("-") === -1 && typeof d.is != "string") return Ie(r, d, l, m);
        r.push(fe(l)), L = _ = null;
        for (ce in d) if (a.call(d, ce) && (H = d[ce], H != null)) switch (ce) {
          case "children":
            _ = H;
            break;
          case "dangerouslySetInnerHTML":
            L = H;
            break;
          case "style":
            k(r, m, H);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            y(ce) && typeof H != "function" && typeof H != "symbol" && r.push(" ", ce, '="', I(H), '"');
        }
        return r.push(">"), be(r, L, _), _;
    }
  }
  function Re(r, l, d) {
    if (r.push('<!--$?--><template id="'), d === null) throw Error(t(395));
    return r.push(d), r.push('"></template>');
  }
  function Se(r, l, d, m) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return r.push('<div hidden id="'), r.push(l.segmentPrefix), l = m.toString(16), r.push(l), r.push('">');
      case 2:
        return r.push('<svg aria-hidden="true" style="display:none" id="'), r.push(l.segmentPrefix), l = m.toString(16), r.push(l), r.push('">');
      case 3:
        return r.push('<math aria-hidden="true" style="display:none" id="'), r.push(l.segmentPrefix), l = m.toString(16), r.push(l), r.push('">');
      case 4:
        return r.push('<table hidden id="'), r.push(l.segmentPrefix), l = m.toString(16), r.push(l), r.push('">');
      case 5:
        return r.push('<table hidden><tbody id="'), r.push(l.segmentPrefix), l = m.toString(16), r.push(l), r.push('">');
      case 6:
        return r.push('<table hidden><tr id="'), r.push(l.segmentPrefix), l = m.toString(16), r.push(l), r.push('">');
      case 7:
        return r.push('<table hidden><colgroup id="'), r.push(l.segmentPrefix), l = m.toString(16), r.push(l), r.push('">');
      default:
        throw Error(t(397));
    }
  }
  function Qe(r, l) {
    switch (l.insertionMode) {
      case 0:
      case 1:
        return r.push("</div>");
      case 2:
        return r.push("</svg>");
      case 3:
        return r.push("</math>");
      case 4:
        return r.push("</table>");
      case 5:
        return r.push("</tbody></table>");
      case 6:
        return r.push("</tr></table>");
      case 7:
        return r.push("</colgroup></table>");
      default:
        throw Error(t(397));
    }
  }
  var Ne = /[<\u2028\u2029]/g;
  function xe(r) {
    return JSON.stringify(r).replace(Ne, function(l) {
      switch (l) {
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
  function Fe(r, l) {
    return l = l === void 0 ? "" : l, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: l + "P:", segmentPrefix: l + "S:", boundaryPrefix: l + "B:", idPrefix: l, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: r };
  }
  function Ge(r, l, d, m) {
    return d.generateStaticMarkup ? (r.push(I(l)), !1) : (l === "" ? r = m : (m && r.push("<!-- -->"), r.push(I(l)), r = !0), r);
  }
  var ve = Object.assign, D = Symbol.for("react.element"), A = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), C = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), Z = Symbol.for("react.debug_trace_mode"), pe = Symbol.for("react.legacy_hidden"), ee = Symbol.for("react.default_value"), le = Symbol.iterator;
  function We(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case P:
        return "Fragment";
      case A:
        return "Portal";
      case p:
        return "Profiler";
      case F:
        return "StrictMode";
      case J:
        return "Suspense";
      case K:
        return "SuspenseList";
    }
    if (typeof r == "object") switch (r.$$typeof) {
      case C:
        return (r.displayName || "Context") + ".Consumer";
      case te:
        return (r._context.displayName || "Context") + ".Provider";
      case re:
        var l = r.render;
        return r = r.displayName, r || (r = l.displayName || l.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case z:
        return l = r.displayName || null, l !== null ? l : We(r.type) || "Memo";
      case ne:
        l = r._payload, r = r._init;
        try {
          return We(r(l));
        } catch {
        }
    }
    return null;
  }
  var de = {};
  function Je(r, l) {
    if (r = r.contextTypes, !r) return de;
    var d = {}, m;
    for (m in r) d[m] = l[m];
    return d;
  }
  var Ve = null;
  function he(r, l) {
    if (r !== l) {
      r.context._currentValue2 = r.parentValue, r = r.parent;
      var d = l.parent;
      if (r === null) {
        if (d !== null) throw Error(t(401));
      } else {
        if (d === null) throw Error(t(401));
        he(r, d);
      }
      l.context._currentValue2 = l.value;
    }
  }
  function $(r) {
    r.context._currentValue2 = r.parentValue, r = r.parent, r !== null && $(r);
  }
  function ae(r) {
    var l = r.parent;
    l !== null && ae(l), r.context._currentValue2 = r.value;
  }
  function Xe(r, l) {
    if (r.context._currentValue2 = r.parentValue, r = r.parent, r === null) throw Error(t(402));
    r.depth === l.depth ? he(r, l) : Xe(r, l);
  }
  function at(r, l) {
    var d = l.parent;
    if (d === null) throw Error(t(402));
    r.depth === d.depth ? he(r, d) : at(r, d), l.context._currentValue2 = l.value;
  }
  function Me(r) {
    var l = Ve;
    l !== r && (l === null ? ae(r) : r === null ? $(l) : l.depth === r.depth ? he(l, r) : l.depth > r.depth ? Xe(l, r) : at(l, r), Ve = r);
  }
  var er = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(r, l) {
    r = r._reactInternals, r.queue !== null && r.queue.push(l);
  }, enqueueReplaceState: function(r, l) {
    r = r._reactInternals, r.replace = !0, r.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function jt(r, l, d, m) {
    var R = r.state !== void 0 ? r.state : null;
    r.updater = er, r.props = d, r.state = R;
    var _ = { queue: [], replace: !1 };
    r._reactInternals = _;
    var L = l.contextType;
    if (r.context = typeof L == "object" && L !== null ? L._currentValue2 : m, L = l.getDerivedStateFromProps, typeof L == "function" && (L = L(d, R), R = L == null ? R : ve({}, R, L), r.state = R), typeof l.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function")) if (l = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), l !== r.state && er.enqueueReplaceState(r, r.state, null), _.queue !== null && 0 < _.queue.length) if (l = _.queue, L = _.replace, _.queue = null, _.replace = !1, L && l.length === 1) r.state = l[0];
    else {
      for (_ = L ? l[0] : r.state, R = !0, L = L ? 1 : 0; L < l.length; L++) {
        var H = l[L];
        H = typeof H == "function" ? H.call(r, _, d, m) : H, H != null && (R ? (R = !1, _ = ve({}, _, H)) : ve(_, H));
      }
      r.state = _;
    }
    else _.queue = null;
  }
  var pr = { id: 1, overflow: "" };
  function Tt(r, l, d) {
    var m = r.id;
    r = r.overflow;
    var R = 32 - vt(m) - 1;
    m &= ~(1 << R), d += 1;
    var _ = 32 - vt(l) + R;
    if (30 < _) {
      var L = R - R % 5;
      return _ = (m & (1 << L) - 1).toString(32), m >>= L, R -= L, { id: 1 << 32 - vt(l) + R | d << R | m, overflow: _ + r };
    }
    return { id: 1 << _ | d << R | m, overflow: r };
  }
  var vt = Math.clz32 ? Math.clz32 : tr, ut = Math.log, Et = Math.LN2;
  function tr(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (ut(r) / Et | 0) | 0;
  }
  function rr(r, l) {
    return r === l && (r !== 0 || 1 / r === 1 / l) || r !== r && l !== l;
  }
  var Or = typeof Object.is == "function" ? Object.is : rr, Ze = null, Rt = null, $t = null, Ce = null, It = !1, zt = !1, je = 0, Ke = null, Bt = 0;
  function mt() {
    if (Ze === null) throw Error(t(321));
    return Ze;
  }
  function Ut() {
    if (0 < Bt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Wt() {
    return Ce === null ? $t === null ? (It = !1, $t = Ce = Ut()) : (It = !0, Ce = $t) : Ce.next === null ? (It = !1, Ce = Ce.next = Ut()) : (It = !0, Ce = Ce.next), Ce;
  }
  function Vt() {
    Rt = Ze = null, zt = !1, $t = null, Bt = 0, Ce = Ke = null;
  }
  function hr(r, l) {
    return typeof l == "function" ? l(r) : l;
  }
  function yt(r, l, d) {
    if (Ze = mt(), Ce = Wt(), It) {
      var m = Ce.queue;
      if (l = m.dispatch, Ke !== null && (d = Ke.get(m), d !== void 0)) {
        Ke.delete(m), m = Ce.memoizedState;
        do
          m = r(m, d.action), d = d.next;
        while (d !== null);
        return Ce.memoizedState = m, [m, l];
      }
      return [Ce.memoizedState, l];
    }
    return r = r === hr ? typeof l == "function" ? l() : l : d !== void 0 ? d(l) : l, Ce.memoizedState = r, r = Ce.queue = { last: null, dispatch: null }, r = r.dispatch = gr.bind(null, Ze, r), [Ce.memoizedState, r];
  }
  function Nt(r, l) {
    if (Ze = mt(), Ce = Wt(), l = l === void 0 ? null : l, Ce !== null) {
      var d = Ce.memoizedState;
      if (d !== null && l !== null) {
        var m = d[1];
        e: if (m === null) m = !1;
        else {
          for (var R = 0; R < m.length && R < l.length; R++) if (!Or(l[R], m[R])) {
            m = !1;
            break e;
          }
          m = !0;
        }
        if (m) return d[0];
      }
    }
    return r = r(), Ce.memoizedState = [r, l], r;
  }
  function gr(r, l, d) {
    if (25 <= Bt) throw Error(t(301));
    if (r === Ze) if (zt = !0, r = { action: d, next: null }, Ke === null && (Ke = /* @__PURE__ */ new Map()), d = Ke.get(l), d === void 0) Ke.set(l, r);
    else {
      for (l = d; l.next !== null; ) l = l.next;
      l.next = r;
    }
  }
  function mr() {
    throw Error(t(394));
  }
  function At() {
  }
  var nr = { readContext: function(r) {
    return r._currentValue2;
  }, useContext: function(r) {
    return mt(), r._currentValue2;
  }, useMemo: Nt, useReducer: yt, useRef: function(r) {
    Ze = mt(), Ce = Wt();
    var l = Ce.memoizedState;
    return l === null ? (r = { current: r }, Ce.memoizedState = r) : l;
  }, useState: function(r) {
    return yt(hr, r);
  }, useInsertionEffect: At, useLayoutEffect: function() {
  }, useCallback: function(r, l) {
    return Nt(function() {
      return r;
    }, l);
  }, useImperativeHandle: At, useEffect: At, useDebugValue: At, useDeferredValue: function(r) {
    return mt(), r;
  }, useTransition: function() {
    return mt(), [
      !1,
      mr
    ];
  }, useId: function() {
    var r = Rt.treeContext, l = r.overflow;
    r = r.id, r = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + l;
    var d = tt;
    if (d === null) throw Error(t(404));
    return l = je++, r = ":" + d.idPrefix + "R" + r, 0 < l && (r += "H" + l.toString(32)), r + ":";
  }, useMutableSource: function(r, l) {
    return mt(), l(r._source);
  }, useSyncExternalStore: function(r, l, d) {
    if (d === void 0) throw Error(t(407));
    return d();
  } }, tt = null, qt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function yr(r) {
    return console.error(r), null;
  }
  function Ot() {
  }
  function br(r, l, d, m, R, _, L, H, oe) {
    var ce = [], ge = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: m, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ge, pingedTasks: ce, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: R === void 0 ? yr : R, onAllReady: Ot, onShellReady: L === void 0 ? Ot : L, onShellError: Ot, onFatalError: Ot }, d = w(l, 0, null, d, !1, !1), d.parentFlushed = !0, r = ar(l, r, null, d, ge, de, null, pr), ce.push(r), l;
  }
  function ar(r, l, d, m, R, _, L, H) {
    r.allPendingTasks++, d === null ? r.pendingRootTasks++ : d.pendingTasks++;
    var oe = { node: l, ping: function() {
      var ce = r.pingedTasks;
      ce.push(oe), ce.length === 1 && nn(r);
    }, blockedBoundary: d, blockedSegment: m, abortSet: R, legacyContext: _, context: L, treeContext: H };
    return R.add(oe), oe;
  }
  function w(r, l, d, m, R, _) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: m, boundary: d, lastPushedText: R, textEmbedded: _ };
  }
  function Q(r, l) {
    if (r = r.onError(l), r != null && typeof r != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof r + '" instead');
    return r;
  }
  function q(r, l) {
    var d = r.onShellError;
    d(l), d = r.onFatalError, d(l), r.destination !== null ? (r.status = 2, r.destination.destroy(l)) : (r.status = 1, r.fatalError = l);
  }
  function _e(r, l, d, m, R) {
    for (Ze = {}, Rt = l, je = 0, r = d(m, R); zt; ) zt = !1, je = 0, Bt += 1, Ce = null, r = d(m, R);
    return Vt(), r;
  }
  function He(r, l, d, m) {
    var R = d.render(), _ = m.childContextTypes;
    if (_ != null) {
      var L = l.legacyContext;
      if (typeof d.getChildContext != "function") m = L;
      else {
        d = d.getChildContext();
        for (var H in d) if (!(H in _)) throw Error(t(108, We(m) || "Unknown", H));
        m = ve({}, L, d);
      }
      l.legacyContext = m, Pe(r, l, R), l.legacyContext = L;
    } else Pe(r, l, R);
  }
  function Be(r, l) {
    if (r && r.defaultProps) {
      l = ve({}, l), r = r.defaultProps;
      for (var d in r) l[d] === void 0 && (l[d] = r[d]);
      return l;
    }
    return l;
  }
  function ot(r, l, d, m, R) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      R = Je(d, l.legacyContext);
      var _ = d.contextType;
      _ = new d(m, typeof _ == "object" && _ !== null ? _._currentValue2 : R), jt(_, d, m, R), He(r, l, _, d);
    } else {
      _ = Je(d, l.legacyContext), R = _e(r, l, d, m, _);
      var L = je !== 0;
      if (typeof R == "object" && R !== null && typeof R.render == "function" && R.$$typeof === void 0) jt(R, d, m, _), He(r, l, R, d);
      else if (L) {
        m = l.treeContext, l.treeContext = Tt(m, 1, 0);
        try {
          Pe(r, l, R);
        } finally {
          l.treeContext = m;
        }
      } else Pe(r, l, R);
    }
    else if (typeof d == "string") {
      switch (R = l.blockedSegment, _ = Ee(R.chunks, d, m, r.responseState, R.formatContext), R.lastPushedText = !1, L = R.formatContext, R.formatContext = Y(L, d, m), Ye(r, l, _), R.formatContext = L, d) {
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
          R.chunks.push("</", d, ">");
      }
      R.lastPushedText = !1;
    } else {
      switch (d) {
        case pe:
        case Z:
        case F:
        case p:
        case P:
          Pe(r, l, m.children);
          return;
        case K:
          Pe(r, l, m.children);
          return;
        case se:
          throw Error(t(343));
        case J:
          e: {
            d = l.blockedBoundary, R = l.blockedSegment, _ = m.fallback, m = m.children, L = /* @__PURE__ */ new Set();
            var H = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: L, errorDigest: null }, oe = w(r, R.chunks.length, H, R.formatContext, !1, !1);
            R.children.push(oe), R.lastPushedText = !1;
            var ce = w(r, 0, null, R.formatContext, !1, !1);
            ce.parentFlushed = !0, l.blockedBoundary = H, l.blockedSegment = ce;
            try {
              if (Ye(
                r,
                l,
                m
              ), r.responseState.generateStaticMarkup || ce.lastPushedText && ce.textEmbedded && ce.chunks.push("<!-- -->"), ce.status = 1, Gt(H, ce), H.pendingTasks === 0) break e;
            } catch (ge) {
              ce.status = 4, H.forceClientRender = !0, H.errorDigest = Q(r, ge);
            } finally {
              l.blockedBoundary = d, l.blockedSegment = R;
            }
            l = ar(r, _, d, oe, L, l.legacyContext, l.context, l.treeContext), r.pingedTasks.push(l);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case re:
          if (m = _e(r, l, d.render, m, R), je !== 0) {
            d = l.treeContext, l.treeContext = Tt(d, 1, 0);
            try {
              Pe(r, l, m);
            } finally {
              l.treeContext = d;
            }
          } else Pe(r, l, m);
          return;
        case z:
          d = d.type, m = Be(d, m), ot(r, l, d, m, R);
          return;
        case te:
          if (R = m.children, d = d._context, m = m.value, _ = d._currentValue2, d._currentValue2 = m, L = Ve, Ve = m = { parent: L, depth: L === null ? 0 : L.depth + 1, context: d, parentValue: _, value: m }, l.context = m, Pe(r, l, R), r = Ve, r === null) throw Error(t(403));
          m = r.parentValue, r.context._currentValue2 = m === ee ? r.context._defaultValue : m, r = Ve = r.parent, l.context = r;
          return;
        case C:
          m = m.children, m = m(d._currentValue2), Pe(r, l, m);
          return;
        case ne:
          R = d._init, d = R(d._payload), m = Be(d, m), ot(
            r,
            l,
            d,
            m,
            void 0
          );
          return;
      }
      throw Error(t(130, d == null ? d : typeof d, ""));
    }
  }
  function Pe(r, l, d) {
    if (l.node = d, typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case D:
          ot(r, l, d.type, d.props, d.ref);
          return;
        case A:
          throw Error(t(257));
        case ne:
          var m = d._init;
          d = m(d._payload), Pe(r, l, d);
          return;
      }
      if (B(d)) {
        it(r, l, d);
        return;
      }
      if (d === null || typeof d != "object" ? m = null : (m = le && d[le] || d["@@iterator"], m = typeof m == "function" ? m : null), m && (m = m.call(d))) {
        if (d = m.next(), !d.done) {
          var R = [];
          do
            R.push(d.value), d = m.next();
          while (!d.done);
          it(r, l, R);
        }
        return;
      }
      throw r = Object.prototype.toString.call(d), Error(t(31, r === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : r));
    }
    typeof d == "string" ? (m = l.blockedSegment, m.lastPushedText = Ge(l.blockedSegment.chunks, d, r.responseState, m.lastPushedText)) : typeof d == "number" && (m = l.blockedSegment, m.lastPushedText = Ge(l.blockedSegment.chunks, "" + d, r.responseState, m.lastPushedText));
  }
  function it(r, l, d) {
    for (var m = d.length, R = 0; R < m; R++) {
      var _ = l.treeContext;
      l.treeContext = Tt(_, m, R);
      try {
        Ye(r, l, d[R]);
      } finally {
        l.treeContext = _;
      }
    }
  }
  function Ye(r, l, d) {
    var m = l.blockedSegment.formatContext, R = l.legacyContext, _ = l.context;
    try {
      return Pe(r, l, d);
    } catch (oe) {
      if (Vt(), typeof oe == "object" && oe !== null && typeof oe.then == "function") {
        d = oe;
        var L = l.blockedSegment, H = w(r, L.chunks.length, null, L.formatContext, L.lastPushedText, !0);
        L.children.push(H), L.lastPushedText = !1, r = ar(r, l.node, l.blockedBoundary, H, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, d.then(r, r), l.blockedSegment.formatContext = m, l.legacyContext = R, l.context = _, Me(_);
      } else throw l.blockedSegment.formatContext = m, l.legacyContext = R, l.context = _, Me(_), oe;
    }
  }
  function Ht(r) {
    var l = r.blockedBoundary;
    r = r.blockedSegment, r.status = 3, Yt(this, l, r);
  }
  function vr(r, l, d) {
    var m = r.blockedBoundary;
    r.blockedSegment.status = 3, m === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.push(null))) : (m.pendingTasks--, m.forceClientRender || (m.forceClientRender = !0, r = d === void 0 ? Error(t(432)) : d, m.errorDigest = l.onError(r), m.parentFlushed && l.clientRenderedBoundaries.push(m)), m.fallbackAbortableTasks.forEach(function(R) {
      return vr(R, l, d);
    }), m.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (m = l.onAllReady, m()));
  }
  function Gt(r, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var d = l.children[0];
      d.id = l.id, d.parentFlushed = !0, d.status === 1 && Gt(r, d);
    } else r.completedSegments.push(l);
  }
  function Yt(r, l, d) {
    if (l === null) {
      if (d.parentFlushed) {
        if (r.completedRootSegment !== null) throw Error(t(389));
        r.completedRootSegment = d;
      }
      r.pendingRootTasks--, r.pendingRootTasks === 0 && (r.onShellError = Ot, l = r.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && Gt(l, d), l.parentFlushed && r.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(Ht, r), l.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (Gt(l, d), l.completedSegments.length === 1 && l.parentFlushed && r.partialBoundaries.push(l)));
    r.allPendingTasks--, r.allPendingTasks === 0 && (r = r.onAllReady, r());
  }
  function nn(r) {
    if (r.status !== 2) {
      var l = Ve, d = qt.current;
      qt.current = nr;
      var m = tt;
      tt = r.responseState;
      try {
        var R = r.pingedTasks, _;
        for (_ = 0; _ < R.length; _++) {
          var L = R[_], H = r, oe = L.blockedSegment;
          if (oe.status === 0) {
            Me(L.context);
            try {
              Pe(H, L, L.node), H.responseState.generateStaticMarkup || oe.lastPushedText && oe.textEmbedded && oe.chunks.push("<!-- -->"), L.abortSet.delete(L), oe.status = 1, Yt(H, L.blockedBoundary, oe);
            } catch (dt) {
              if (Vt(), typeof dt == "object" && dt !== null && typeof dt.then == "function") {
                var ce = L.ping;
                dt.then(ce, ce);
              } else {
                L.abortSet.delete(L), oe.status = 4;
                var ge = L.blockedBoundary, qe = dt, wt = Q(H, qe);
                if (ge === null ? q(H, qe) : (ge.pendingTasks--, ge.forceClientRender || (ge.forceClientRender = !0, ge.errorDigest = wt, ge.parentFlushed && H.clientRenderedBoundaries.push(ge))), H.allPendingTasks--, H.allPendingTasks === 0) {
                  var St = H.onAllReady;
                  St();
                }
              }
            } finally {
            }
          }
        }
        R.splice(0, _), r.destination !== null && wr(r, r.destination);
      } catch (dt) {
        Q(r, dt), q(r, dt);
      } finally {
        tt = m, qt.current = d, d === nr && Me(l);
      }
    }
  }
  function or(r, l, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var m = d.id = r.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, r = r.responseState, l.push('<template id="'), l.push(r.placeholderPrefix), r = m.toString(16), l.push(r), l.push('"></template>');
      case 1:
        d.status = 2;
        var R = !0;
        m = d.chunks;
        var _ = 0;
        d = d.children;
        for (var L = 0; L < d.length; L++) {
          for (R = d[L]; _ < R.index; _++) l.push(m[_]);
          R = ir(r, l, R);
        }
        for (; _ < m.length - 1; _++) l.push(m[_]);
        return _ < m.length && (R = l.push(m[_])), R;
      default:
        throw Error(t(390));
    }
  }
  function ir(r, l, d) {
    var m = d.boundary;
    if (m === null) return or(r, l, d);
    if (m.parentFlushed = !0, m.forceClientRender) return r.responseState.generateStaticMarkup || (m = m.errorDigest, l.push("<!--$!-->"), l.push("<template"), m && (l.push(' data-dgst="'), m = I(m), l.push(m), l.push('"')), l.push("></template>")), or(r, l, d), r = r.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), r;
    if (0 < m.pendingTasks) {
      m.rootSegmentID = r.nextSegmentId++, 0 < m.completedSegments.length && r.partialBoundaries.push(m);
      var R = r.responseState, _ = R.nextSuspenseID++;
      return R = R.boundaryPrefix + _.toString(16), m = m.id = R, Re(l, r.responseState, m), or(r, l, d), l.push("<!--/$-->");
    }
    if (m.byteSize > r.progressiveChunkSize) return m.rootSegmentID = r.nextSegmentId++, r.completedBoundaries.push(m), Re(l, r.responseState, m.id), or(r, l, d), l.push("<!--/$-->");
    if (r.responseState.generateStaticMarkup || l.push("<!--$-->"), d = m.completedSegments, d.length !== 1) throw Error(t(391));
    return ir(r, l, d[0]), r = r.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), r;
  }
  function Ir(r, l, d) {
    return Se(l, r.responseState, d.formatContext, d.id), ir(r, l, d), Qe(l, d.formatContext);
  }
  function Nr(r, l, d) {
    for (var m = d.completedSegments, R = 0; R < m.length; R++) Pr(r, l, d, m[R]);
    if (m.length = 0, r = r.responseState, m = d.id, d = d.rootSegmentID, l.push(r.startInlineScript), r.sentCompleteBoundaryFunction ? l.push('$RC("') : (r.sentCompleteBoundaryFunction = !0, l.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), m === null) throw Error(t(395));
    return d = d.toString(16), l.push(m), l.push('","'), l.push(r.segmentPrefix), l.push(d), l.push('")<\/script>');
  }
  function Pr(r, l, d, m) {
    if (m.status === 2) return !0;
    var R = m.id;
    if (R === -1) {
      if ((m.id = d.rootSegmentID) === -1) throw Error(t(392));
      return Ir(r, l, m);
    }
    return Ir(r, l, m), r = r.responseState, l.push(r.startInlineScript), r.sentCompleteSegmentFunction ? l.push('$RS("') : (r.sentCompleteSegmentFunction = !0, l.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), l.push(r.segmentPrefix), R = R.toString(16), l.push(R), l.push('","'), l.push(r.placeholderPrefix), l.push(R), l.push('")<\/script>');
  }
  function wr(r, l) {
    try {
      var d = r.completedRootSegment;
      if (d !== null && r.pendingRootTasks === 0) {
        ir(r, l, d), r.completedRootSegment = null;
        var m = r.responseState.bootstrapChunks;
        for (d = 0; d < m.length - 1; d++) l.push(m[d]);
        d < m.length && l.push(m[d]);
      }
      var R = r.clientRenderedBoundaries, _;
      for (_ = 0; _ < R.length; _++) {
        var L = R[_];
        m = l;
        var H = r.responseState, oe = L.id, ce = L.errorDigest, ge = L.errorMessage, qe = L.errorComponentStack;
        if (m.push(H.startInlineScript), H.sentClientRenderFunction ? m.push('$RX("') : (H.sentClientRenderFunction = !0, m.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), oe === null) throw Error(t(395));
        if (m.push(oe), m.push('"'), ce || ge || qe) {
          m.push(",");
          var wt = xe(ce || "");
          m.push(wt);
        }
        if (ge || qe) {
          m.push(",");
          var St = xe(ge || "");
          m.push(St);
        }
        if (qe) {
          m.push(",");
          var dt = xe(qe);
          m.push(dt);
        }
        if (!m.push(")<\/script>")) {
          r.destination = null, _++, R.splice(0, _);
          return;
        }
      }
      R.splice(0, _);
      var sr = r.completedBoundaries;
      for (_ = 0; _ < sr.length; _++) if (!Nr(r, l, sr[_])) {
        r.destination = null, _++, sr.splice(0, _);
        return;
      }
      sr.splice(0, _);
      var Pt = r.partialBoundaries;
      for (_ = 0; _ < Pt.length; _++) {
        var Lr = Pt[_];
        e: {
          R = r, L = l;
          var lr = Lr.completedSegments;
          for (H = 0; H < lr.length; H++) if (!Pr(R, L, Lr, lr[H])) {
            H++, lr.splice(0, H);
            var sn = !1;
            break e;
          }
          lr.splice(0, H), sn = !0;
        }
        if (!sn) {
          r.destination = null, _++, Pt.splice(0, _);
          return;
        }
      }
      Pt.splice(0, _);
      var Xt = r.completedBoundaries;
      for (_ = 0; _ < Xt.length; _++) if (!Nr(r, l, Xt[_])) {
        r.destination = null, _++, Xt.splice(0, _);
        return;
      }
      Xt.splice(0, _);
    } finally {
      r.allPendingTasks === 0 && r.pingedTasks.length === 0 && r.clientRenderedBoundaries.length === 0 && r.completedBoundaries.length === 0 && l.push(null);
    }
  }
  function an(r, l) {
    try {
      var d = r.abortableTasks;
      d.forEach(function(m) {
        return vr(m, r, l);
      }), d.clear(), r.destination !== null && wr(r, r.destination);
    } catch (m) {
      Q(r, m), q(r, m);
    }
  }
  function on() {
  }
  function Dr(r, l, d, m) {
    var R = !1, _ = null, L = "", H = { push: function(ce) {
      return ce !== null && (L += ce), !0;
    }, destroy: function(ce) {
      R = !0, _ = ce;
    } }, oe = !1;
    if (r = br(r, Fe(d, l ? l.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, on, void 0, function() {
      oe = !0;
    }), nn(r), an(r, m), r.status === 1) r.status = 2, H.destroy(r.fatalError);
    else if (r.status !== 2 && r.destination === null) {
      r.destination = H;
      try {
        wr(r, H);
      } catch (ce) {
        Q(r, ce), q(r, ce);
      }
    }
    if (R) throw _;
    if (!oe) throw Error(t(426));
    return L;
  }
  return ur.renderToNodeStream = function() {
    throw Error(t(207));
  }, ur.renderToStaticMarkup = function(r, l) {
    return Dr(r, l, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, ur.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, ur.renderToString = function(r, l) {
    return Dr(r, l, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, ur.version = "18.3.1", ur;
}
var kn = {}, bo;
function Qs() {
  if (bo) return kn;
  bo = 1;
  var e = et;
  function t(n) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++) s += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = null, o = 0;
  function c(n, s) {
    if (s.length !== 0) if (512 < s.length) 0 < o && (n.enqueue(new Uint8Array(a.buffer, 0, o)), a = new Uint8Array(512), o = 0), n.enqueue(s);
    else {
      var u = a.length - o;
      u < s.length && (u === 0 ? n.enqueue(a) : (a.set(s.subarray(0, u), o), n.enqueue(a), s = s.subarray(u)), a = new Uint8Array(512), o = 0), a.set(s, o), o += s.length;
    }
  }
  function f(n, s) {
    return c(n, s), !0;
  }
  function y(n) {
    a && 0 < o && (n.enqueue(new Uint8Array(a.buffer, 0, o)), a = null, o = 0);
  }
  var v = new TextEncoder();
  function b(n) {
    return v.encode(n);
  }
  function g(n) {
    return v.encode(n);
  }
  function O(n, s) {
    typeof n.error == "function" ? n.error(s) : n.close();
  }
  var x = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, G = {}, I = {};
  function S(n) {
    return x.call(I, n) ? !0 : x.call(G, n) ? !1 : j.test(n) ? I[n] = !0 : (G[n] = !0, !1);
  }
  function N(n, s, u, h, E, T, M) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = h, this.attributeNamespace = E, this.mustUseProperty = u, this.propertyName = n, this.type = s, this.sanitizeURL = T, this.removeEmptyString = M;
  }
  var B = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    B[n] = new N(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var s = n[0];
    B[s] = new N(s, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    B[n] = new N(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    B[n] = new N(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    B[n] = new N(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    B[n] = new N(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    B[n] = new N(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    B[n] = new N(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    B[n] = new N(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var U = /[\-:]([a-z])/g;
  function Y(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var s = n.replace(
      U,
      Y
    );
    B[s] = new N(s, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var s = n.replace(U, Y);
    B[s] = new N(s, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var s = n.replace(U, Y);
    B[s] = new N(s, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    B[n] = new N(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), B.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    B[n] = new N(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  var X = {
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
  }, k = ["Webkit", "ms", "Moz", "O"];
  Object.keys(X).forEach(function(n) {
    k.forEach(function(s) {
      s = s + n.charAt(0).toUpperCase() + n.substring(1), X[s] = X[n];
    });
  });
  var ue = /["'&<>]/;
  function be(n) {
    if (typeof n == "boolean" || typeof n == "number") return "" + n;
    n = "" + n;
    var s = ue.exec(n);
    if (s) {
      var u = "", h, E = 0;
      for (h = s.index; h < n.length; h++) {
        switch (n.charCodeAt(h)) {
          case 34:
            s = "&quot;";
            break;
          case 38:
            s = "&amp;";
            break;
          case 39:
            s = "&#x27;";
            break;
          case 60:
            s = "&lt;";
            break;
          case 62:
            s = "&gt;";
            break;
          default:
            continue;
        }
        E !== h && (u += n.substring(E, h)), E = h + 1, u += s;
      }
      n = E !== h ? u + n.substring(E, h) : u;
    }
    return n;
  }
  var Te = /([A-Z])/g, Ie = /^ms-/, ze = Array.isArray, ke = g("<script>"), fe = g("<\/script>"), Ee = g('<script src="'), Re = g('<script type="module" src="'), Se = g('" async=""><\/script>'), Qe = /(<\/|<)(s)(cript)/gi;
  function Ne(n, s, u, h) {
    return "" + s + (u === "s" ? "\\u0073" : "\\u0053") + h;
  }
  function xe(n, s, u, h, E) {
    n = n === void 0 ? "" : n, s = s === void 0 ? ke : g('<script nonce="' + be(s) + '">');
    var T = [];
    if (u !== void 0 && T.push(s, b(("" + u).replace(Qe, Ne)), fe), h !== void 0) for (u = 0; u < h.length; u++) T.push(Ee, b(be(h[u])), Se);
    if (E !== void 0) for (h = 0; h < E.length; h++) T.push(Re, b(be(E[h])), Se);
    return { bootstrapChunks: T, startInlineScript: s, placeholderPrefix: g(n + "P:"), segmentPrefix: g(n + "S:"), boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Fe(n, s) {
    return { insertionMode: n, selectedValue: s };
  }
  function Ge(n) {
    return Fe(n === "http://www.w3.org/2000/svg" ? 2 : n === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ve(n, s, u) {
    switch (s) {
      case "select":
        return Fe(1, u.value != null ? u.value : u.defaultValue);
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
    return 4 <= n.insertionMode || n.insertionMode === 0 ? Fe(1, null) : n;
  }
  var D = g("<!-- -->");
  function A(n, s, u, h) {
    return s === "" ? h : (h && n.push(D), n.push(b(be(s))), !0);
  }
  var P = /* @__PURE__ */ new Map(), F = g(' style="'), p = g(":"), te = g(";");
  function C(n, s, u) {
    if (typeof u != "object") throw Error(t(62));
    s = !0;
    for (var h in u) if (x.call(u, h)) {
      var E = u[h];
      if (E != null && typeof E != "boolean" && E !== "") {
        if (h.indexOf("--") === 0) {
          var T = b(be(h));
          E = b(be(("" + E).trim()));
        } else {
          T = h;
          var M = P.get(T);
          M !== void 0 || (M = g(be(T.replace(Te, "-$1").toLowerCase().replace(Ie, "-ms-"))), P.set(T, M)), T = M, E = typeof E == "number" ? E === 0 || x.call(X, h) ? b("" + E) : b(E + "px") : b(be(("" + E).trim()));
        }
        s ? (s = !1, n.push(F, T, p, E)) : n.push(te, T, p, E);
      }
    }
    s || n.push(K);
  }
  var re = g(" "), J = g('="'), K = g('"'), z = g('=""');
  function ne(n, s, u, h) {
    switch (u) {
      case "style":
        C(n, s, h);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") {
      if (s = B.hasOwnProperty(u) ? B[u] : null, s !== null) {
        switch (typeof h) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (u = b(s.attributeName), s.type) {
          case 3:
            h && n.push(re, u, z);
            break;
          case 4:
            h === !0 ? n.push(re, u, z) : h !== !1 && n.push(re, u, J, b(be(h)), K);
            break;
          case 5:
            isNaN(h) || n.push(re, u, J, b(be(h)), K);
            break;
          case 6:
            !isNaN(h) && 1 <= h && n.push(re, u, J, b(be(h)), K);
            break;
          default:
            s.sanitizeURL && (h = "" + h), n.push(re, u, J, b(be(h)), K);
        }
      } else if (S(u)) {
        switch (typeof h) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = u.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        n.push(re, b(u), J, b(be(h)), K);
      }
    }
  }
  var se = g(">"), Z = g("/>");
  function pe(n, s, u) {
    if (s != null) {
      if (u != null) throw Error(t(60));
      if (typeof s != "object" || !("__html" in s)) throw Error(t(61));
      s = s.__html, s != null && n.push(b("" + s));
    }
  }
  function ee(n) {
    var s = "";
    return e.Children.forEach(n, function(u) {
      u != null && (s += u);
    }), s;
  }
  var le = g(' selected=""');
  function We(n, s, u, h) {
    n.push(he(u));
    var E = u = null, T;
    for (T in s) if (x.call(s, T)) {
      var M = s[T];
      if (M != null) switch (T) {
        case "children":
          u = M;
          break;
        case "dangerouslySetInnerHTML":
          E = M;
          break;
        default:
          ne(n, h, T, M);
      }
    }
    return n.push(se), pe(n, E, u), typeof u == "string" ? (n.push(b(be(u))), null) : u;
  }
  var de = g(`
`), Je = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ve = /* @__PURE__ */ new Map();
  function he(n) {
    var s = Ve.get(n);
    if (s === void 0) {
      if (!Je.test(n)) throw Error(t(65, n));
      s = g("<" + n), Ve.set(n, s);
    }
    return s;
  }
  var $ = g("<!DOCTYPE html>");
  function ae(n, s, u, h, E) {
    switch (s) {
      case "select":
        n.push(he("select"));
        var T = null, M = null;
        for (me in u) if (x.call(u, me)) {
          var W = u[me];
          if (W != null) switch (me) {
            case "children":
              T = W;
              break;
            case "dangerouslySetInnerHTML":
              M = W;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(n, h, me, W);
          }
        }
        return n.push(se), pe(n, M, T), T;
      case "option":
        M = E.selectedValue, n.push(he("option"));
        var ie = W = null, ye = null, me = null;
        for (T in u) if (x.call(u, T)) {
          var Ue = u[T];
          if (Ue != null) switch (T) {
            case "children":
              W = Ue;
              break;
            case "selected":
              ye = Ue;
              break;
            case "dangerouslySetInnerHTML":
              me = Ue;
              break;
            case "value":
              ie = Ue;
            default:
              ne(n, h, T, Ue);
          }
        }
        if (M != null) if (u = ie !== null ? "" + ie : ee(W), ze(M)) {
          for (h = 0; h < M.length; h++)
            if ("" + M[h] === u) {
              n.push(le);
              break;
            }
        } else "" + M === u && n.push(le);
        else ye && n.push(le);
        return n.push(se), pe(n, me, W), W;
      case "textarea":
        n.push(he("textarea")), me = M = T = null;
        for (W in u) if (x.call(u, W) && (ie = u[W], ie != null)) switch (W) {
          case "children":
            me = ie;
            break;
          case "value":
            T = ie;
            break;
          case "defaultValue":
            M = ie;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(n, h, W, ie);
        }
        if (T === null && M !== null && (T = M), n.push(se), me != null) {
          if (T != null) throw Error(t(92));
          if (ze(me) && 1 < me.length) throw Error(t(93));
          T = "" + me;
        }
        return typeof T == "string" && T[0] === `
` && n.push(de), T !== null && n.push(b(be("" + T))), null;
      case "input":
        n.push(he("input")), ie = me = W = T = null;
        for (M in u) if (x.call(u, M) && (ye = u[M], ye != null)) switch (M) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ie = ye;
            break;
          case "defaultValue":
            W = ye;
            break;
          case "checked":
            me = ye;
            break;
          case "value":
            T = ye;
            break;
          default:
            ne(n, h, M, ye);
        }
        return me !== null ? ne(
          n,
          h,
          "checked",
          me
        ) : ie !== null && ne(n, h, "checked", ie), T !== null ? ne(n, h, "value", T) : W !== null && ne(n, h, "value", W), n.push(Z), null;
      case "menuitem":
        n.push(he("menuitem"));
        for (var pt in u) if (x.call(u, pt) && (T = u[pt], T != null)) switch (pt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(n, h, pt, T);
        }
        return n.push(se), null;
      case "title":
        n.push(he("title")), T = null;
        for (Ue in u) if (x.call(u, Ue) && (M = u[Ue], M != null)) switch (Ue) {
          case "children":
            T = M;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(n, h, Ue, M);
        }
        return n.push(se), T;
      case "listing":
      case "pre":
        n.push(he(s)), M = T = null;
        for (ie in u) if (x.call(u, ie) && (W = u[ie], W != null)) switch (ie) {
          case "children":
            T = W;
            break;
          case "dangerouslySetInnerHTML":
            M = W;
            break;
          default:
            ne(n, h, ie, W);
        }
        if (n.push(se), M != null) {
          if (T != null) throw Error(t(60));
          if (typeof M != "object" || !("__html" in M)) throw Error(t(61));
          u = M.__html, u != null && (typeof u == "string" && 0 < u.length && u[0] === `
` ? n.push(de, b(u)) : n.push(b("" + u)));
        }
        return typeof T == "string" && T[0] === `
` && n.push(de), T;
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
        n.push(he(s));
        for (var kt in u) if (x.call(u, kt) && (T = u[kt], T != null)) switch (kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, s));
          default:
            ne(n, h, kt, T);
        }
        return n.push(Z), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return We(n, u, s, h);
      case "html":
        return E.insertionMode === 0 && n.push($), We(n, u, s, h);
      default:
        if (s.indexOf("-") === -1 && typeof u.is != "string") return We(n, u, s, h);
        n.push(he(s)), M = T = null;
        for (ye in u) if (x.call(u, ye) && (W = u[ye], W != null)) switch (ye) {
          case "children":
            T = W;
            break;
          case "dangerouslySetInnerHTML":
            M = W;
            break;
          case "style":
            C(n, h, W);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            S(ye) && typeof W != "function" && typeof W != "symbol" && n.push(re, b(ye), J, b(be(W)), K);
        }
        return n.push(se), pe(n, M, T), T;
    }
  }
  var Xe = g("</"), at = g(">"), Me = g('<template id="'), er = g('"></template>'), jt = g("<!--$-->"), pr = g('<!--$?--><template id="'), Tt = g('"></template>'), vt = g("<!--$!-->"), ut = g("<!--/$-->"), Et = g("<template"), tr = g('"'), rr = g(' data-dgst="');
  g(' data-msg="'), g(' data-stck="');
  var Or = g("></template>");
  function Ze(n, s, u) {
    if (c(n, pr), u === null) throw Error(t(395));
    return c(n, u), f(n, Tt);
  }
  var Rt = g('<div hidden id="'), $t = g('">'), Ce = g("</div>"), It = g('<svg aria-hidden="true" style="display:none" id="'), zt = g('">'), je = g("</svg>"), Ke = g('<math aria-hidden="true" style="display:none" id="'), Bt = g('">'), mt = g("</math>"), Ut = g('<table hidden id="'), Wt = g('">'), Vt = g("</table>"), hr = g('<table hidden><tbody id="'), yt = g('">'), Nt = g("</tbody></table>"), gr = g('<table hidden><tr id="'), mr = g('">'), At = g("</tr></table>"), nr = g('<table hidden><colgroup id="'), tt = g('">'), qt = g("</colgroup></table>");
  function yr(n, s, u, h) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return c(n, Rt), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, $t);
      case 2:
        return c(n, It), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, zt);
      case 3:
        return c(n, Ke), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, Bt);
      case 4:
        return c(n, Ut), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, Wt);
      case 5:
        return c(n, hr), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, yt);
      case 6:
        return c(n, gr), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, mr);
      case 7:
        return c(
          n,
          nr
        ), c(n, s.segmentPrefix), c(n, b(h.toString(16))), f(n, tt);
      default:
        throw Error(t(397));
    }
  }
  function Ot(n, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return f(n, Ce);
      case 2:
        return f(n, je);
      case 3:
        return f(n, mt);
      case 4:
        return f(n, Vt);
      case 5:
        return f(n, Nt);
      case 6:
        return f(n, At);
      case 7:
        return f(n, qt);
      default:
        throw Error(t(397));
    }
  }
  var br = g('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), ar = g('$RS("'), w = g('","'), Q = g('")<\/script>'), q = g('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), _e = g('$RC("'), He = g('","'), Be = g('")<\/script>'), ot = g('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Pe = g('$RX("'), it = g('"'), Ye = g(")<\/script>"), Ht = g(","), vr = /[<\u2028\u2029]/g;
  function Gt(n) {
    return JSON.stringify(n).replace(vr, function(s) {
      switch (s) {
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
  var Yt = Object.assign, nn = Symbol.for("react.element"), or = Symbol.for("react.portal"), ir = Symbol.for("react.fragment"), Ir = Symbol.for("react.strict_mode"), Nr = Symbol.for("react.profiler"), Pr = Symbol.for("react.provider"), wr = Symbol.for("react.context"), an = Symbol.for("react.forward_ref"), on = Symbol.for("react.suspense"), Dr = Symbol.for("react.suspense_list"), r = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), d = Symbol.for("react.scope"), m = Symbol.for("react.debug_trace_mode"), R = Symbol.for("react.legacy_hidden"), _ = Symbol.for("react.default_value"), L = Symbol.iterator;
  function H(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ir:
        return "Fragment";
      case or:
        return "Portal";
      case Nr:
        return "Profiler";
      case Ir:
        return "StrictMode";
      case on:
        return "Suspense";
      case Dr:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case wr:
        return (n.displayName || "Context") + ".Consumer";
      case Pr:
        return (n._context.displayName || "Context") + ".Provider";
      case an:
        var s = n.render;
        return n = n.displayName, n || (n = s.displayName || s.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case r:
        return s = n.displayName || null, s !== null ? s : H(n.type) || "Memo";
      case l:
        s = n._payload, n = n._init;
        try {
          return H(n(s));
        } catch {
        }
    }
    return null;
  }
  var oe = {};
  function ce(n, s) {
    if (n = n.contextTypes, !n) return oe;
    var u = {}, h;
    for (h in n) u[h] = s[h];
    return u;
  }
  var ge = null;
  function qe(n, s) {
    if (n !== s) {
      n.context._currentValue = n.parentValue, n = n.parent;
      var u = s.parent;
      if (n === null) {
        if (u !== null) throw Error(t(401));
      } else {
        if (u === null) throw Error(t(401));
        qe(n, u);
      }
      s.context._currentValue = s.value;
    }
  }
  function wt(n) {
    n.context._currentValue = n.parentValue, n = n.parent, n !== null && wt(n);
  }
  function St(n) {
    var s = n.parent;
    s !== null && St(s), n.context._currentValue = n.value;
  }
  function dt(n, s) {
    if (n.context._currentValue = n.parentValue, n = n.parent, n === null) throw Error(t(402));
    n.depth === s.depth ? qe(n, s) : dt(n, s);
  }
  function sr(n, s) {
    var u = s.parent;
    if (u === null) throw Error(t(402));
    n.depth === u.depth ? qe(n, u) : sr(n, u), s.context._currentValue = s.value;
  }
  function Pt(n) {
    var s = ge;
    s !== n && (s === null ? St(n) : n === null ? wt(s) : s.depth === n.depth ? qe(s, n) : s.depth > n.depth ? dt(s, n) : sr(s, n), ge = n);
  }
  var Lr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(n, s) {
    n = n._reactInternals, n.queue !== null && n.queue.push(s);
  }, enqueueReplaceState: function(n, s) {
    n = n._reactInternals, n.replace = !0, n.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function lr(n, s, u, h) {
    var E = n.state !== void 0 ? n.state : null;
    n.updater = Lr, n.props = u, n.state = E;
    var T = { queue: [], replace: !1 };
    n._reactInternals = T;
    var M = s.contextType;
    if (n.context = typeof M == "object" && M !== null ? M._currentValue : h, M = s.getDerivedStateFromProps, typeof M == "function" && (M = M(u, E), E = M == null ? E : Yt({}, E, M), n.state = E), typeof s.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function")) if (s = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), s !== n.state && Lr.enqueueReplaceState(n, n.state, null), T.queue !== null && 0 < T.queue.length) if (s = T.queue, M = T.replace, T.queue = null, T.replace = !1, M && s.length === 1) n.state = s[0];
    else {
      for (T = M ? s[0] : n.state, E = !0, M = M ? 1 : 0; M < s.length; M++) {
        var W = s[M];
        W = typeof W == "function" ? W.call(n, T, u, h) : W, W != null && (E ? (E = !1, T = Yt({}, T, W)) : Yt(T, W));
      }
      n.state = T;
    }
    else T.queue = null;
  }
  var sn = { id: 1, overflow: "" };
  function Xt(n, s, u) {
    var h = n.id;
    n = n.overflow;
    var E = 32 - ln(h) - 1;
    h &= ~(1 << E), u += 1;
    var T = 32 - ln(s) + E;
    if (30 < T) {
      var M = E - E % 5;
      return T = (h & (1 << M) - 1).toString(32), h >>= M, E -= M, { id: 1 << 32 - ln(s) + E | u << E | h, overflow: T + n };
    }
    return { id: 1 << T | u << E | h, overflow: n };
  }
  var ln = Math.clz32 ? Math.clz32 : as, rs = Math.log, ns = Math.LN2;
  function as(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (rs(n) / ns | 0) | 0;
  }
  function os(n, s) {
    return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s;
  }
  var is = typeof Object.is == "function" ? Object.is : os, Dt = null, Bn = null, cn = null, $e = null, Mr = !1, un = !1, Fr = 0, Qt = null, dn = 0;
  function cr() {
    if (Dt === null) throw Error(t(321));
    return Dt;
  }
  function za() {
    if (0 < dn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Un() {
    return $e === null ? cn === null ? (Mr = !1, cn = $e = za()) : (Mr = !0, $e = cn) : $e.next === null ? (Mr = !1, $e = $e.next = za()) : (Mr = !0, $e = $e.next), $e;
  }
  function Wn() {
    Bn = Dt = null, un = !1, cn = null, dn = 0, $e = Qt = null;
  }
  function Ba(n, s) {
    return typeof s == "function" ? s(n) : s;
  }
  function Ua(n, s, u) {
    if (Dt = cr(), $e = Un(), Mr) {
      var h = $e.queue;
      if (s = h.dispatch, Qt !== null && (u = Qt.get(h), u !== void 0)) {
        Qt.delete(h), h = $e.memoizedState;
        do
          h = n(h, u.action), u = u.next;
        while (u !== null);
        return $e.memoizedState = h, [h, s];
      }
      return [$e.memoizedState, s];
    }
    return n = n === Ba ? typeof s == "function" ? s() : s : u !== void 0 ? u(s) : s, $e.memoizedState = n, n = $e.queue = { last: null, dispatch: null }, n = n.dispatch = ss.bind(null, Dt, n), [$e.memoizedState, n];
  }
  function Wa(n, s) {
    if (Dt = cr(), $e = Un(), s = s === void 0 ? null : s, $e !== null) {
      var u = $e.memoizedState;
      if (u !== null && s !== null) {
        var h = u[1];
        e: if (h === null) h = !1;
        else {
          for (var E = 0; E < h.length && E < s.length; E++) if (!is(s[E], h[E])) {
            h = !1;
            break e;
          }
          h = !0;
        }
        if (h) return u[0];
      }
    }
    return n = n(), $e.memoizedState = [n, s], n;
  }
  function ss(n, s, u) {
    if (25 <= dn) throw Error(t(301));
    if (n === Dt) if (un = !0, n = { action: u, next: null }, Qt === null && (Qt = /* @__PURE__ */ new Map()), u = Qt.get(s), u === void 0) Qt.set(s, n);
    else {
      for (s = u; s.next !== null; ) s = s.next;
      s.next = n;
    }
  }
  function ls() {
    throw Error(t(394));
  }
  function fn() {
  }
  var Va = { readContext: function(n) {
    return n._currentValue;
  }, useContext: function(n) {
    return cr(), n._currentValue;
  }, useMemo: Wa, useReducer: Ua, useRef: function(n) {
    Dt = cr(), $e = Un();
    var s = $e.memoizedState;
    return s === null ? (n = { current: n }, $e.memoizedState = n) : s;
  }, useState: function(n) {
    return Ua(Ba, n);
  }, useInsertionEffect: fn, useLayoutEffect: function() {
  }, useCallback: function(n, s) {
    return Wa(function() {
      return n;
    }, s);
  }, useImperativeHandle: fn, useEffect: fn, useDebugValue: fn, useDeferredValue: function(n) {
    return cr(), n;
  }, useTransition: function() {
    return cr(), [!1, ls];
  }, useId: function() {
    var n = Bn.treeContext, s = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - ln(n) - 1)).toString(32) + s;
    var u = pn;
    if (u === null) throw Error(t(404));
    return s = Fr++, n = ":" + u.idPrefix + "R" + n, 0 < s && (n += "H" + s.toString(32)), n + ":";
  }, useMutableSource: function(n, s) {
    return cr(), s(n._source);
  }, useSyncExternalStore: function(n, s, u) {
    if (u === void 0) throw Error(t(407));
    return u();
  } }, pn = null, Vn = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function cs(n) {
    return console.error(n), null;
  }
  function jr() {
  }
  function us(n, s, u, h, E, T, M, W, ie) {
    var ye = [], me = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: h === void 0 ? 12800 : h, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: me, pingedTasks: ye, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: E === void 0 ? cs : E, onAllReady: T === void 0 ? jr : T, onShellReady: M === void 0 ? jr : M, onShellError: W === void 0 ? jr : W, onFatalError: ie === void 0 ? jr : ie }, u = hn(s, 0, null, u, !1, !1), u.parentFlushed = !0, n = qn(s, n, null, u, me, oe, null, sn), ye.push(n), s;
  }
  function qn(n, s, u, h, E, T, M, W) {
    n.allPendingTasks++, u === null ? n.pendingRootTasks++ : u.pendingTasks++;
    var ie = { node: s, ping: function() {
      var ye = n.pingedTasks;
      ye.push(ie), ye.length === 1 && Ja(n);
    }, blockedBoundary: u, blockedSegment: h, abortSet: E, legacyContext: T, context: M, treeContext: W };
    return E.add(ie), ie;
  }
  function hn(n, s, u, h, E, T) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: h, boundary: u, lastPushedText: E, textEmbedded: T };
  }
  function $r(n, s) {
    if (n = n.onError(s), n != null && typeof n != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
    return n;
  }
  function gn(n, s) {
    var u = n.onShellError;
    u(s), u = n.onFatalError, u(s), n.destination !== null ? (n.status = 2, O(n.destination, s)) : (n.status = 1, n.fatalError = s);
  }
  function qa(n, s, u, h, E) {
    for (Dt = {}, Bn = s, Fr = 0, n = u(h, E); un; ) un = !1, Fr = 0, dn += 1, $e = null, n = u(h, E);
    return Wn(), n;
  }
  function Ha(n, s, u, h) {
    var E = u.render(), T = h.childContextTypes;
    if (T != null) {
      var M = s.legacyContext;
      if (typeof u.getChildContext != "function") h = M;
      else {
        u = u.getChildContext();
        for (var W in u) if (!(W in T)) throw Error(t(108, H(h) || "Unknown", W));
        h = Yt({}, M, u);
      }
      s.legacyContext = h, ft(n, s, E), s.legacyContext = M;
    } else ft(n, s, E);
  }
  function Ga(n, s) {
    if (n && n.defaultProps) {
      s = Yt({}, s), n = n.defaultProps;
      for (var u in n) s[u] === void 0 && (s[u] = n[u]);
      return s;
    }
    return s;
  }
  function Hn(n, s, u, h, E) {
    if (typeof u == "function") if (u.prototype && u.prototype.isReactComponent) {
      E = ce(u, s.legacyContext);
      var T = u.contextType;
      T = new u(h, typeof T == "object" && T !== null ? T._currentValue : E), lr(T, u, h, E), Ha(n, s, T, u);
    } else {
      T = ce(u, s.legacyContext), E = qa(n, s, u, h, T);
      var M = Fr !== 0;
      if (typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) lr(E, u, h, T), Ha(n, s, E, u);
      else if (M) {
        h = s.treeContext, s.treeContext = Xt(h, 1, 0);
        try {
          ft(n, s, E);
        } finally {
          s.treeContext = h;
        }
      } else ft(n, s, E);
    }
    else if (typeof u == "string") {
      switch (E = s.blockedSegment, T = ae(E.chunks, u, h, n.responseState, E.formatContext), E.lastPushedText = !1, M = E.formatContext, E.formatContext = ve(M, u, h), Gn(n, s, T), E.formatContext = M, u) {
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
          E.chunks.push(Xe, b(u), at);
      }
      E.lastPushedText = !1;
    } else {
      switch (u) {
        case R:
        case m:
        case Ir:
        case Nr:
        case ir:
          ft(n, s, h.children);
          return;
        case Dr:
          ft(n, s, h.children);
          return;
        case d:
          throw Error(t(343));
        case on:
          e: {
            u = s.blockedBoundary, E = s.blockedSegment, T = h.fallback, h = h.children, M = /* @__PURE__ */ new Set();
            var W = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: M, errorDigest: null }, ie = hn(n, E.chunks.length, W, E.formatContext, !1, !1);
            E.children.push(ie), E.lastPushedText = !1;
            var ye = hn(n, 0, null, E.formatContext, !1, !1);
            ye.parentFlushed = !0, s.blockedBoundary = W, s.blockedSegment = ye;
            try {
              if (Gn(
                n,
                s,
                h
              ), ye.lastPushedText && ye.textEmbedded && ye.chunks.push(D), ye.status = 1, mn(W, ye), W.pendingTasks === 0) break e;
            } catch (me) {
              ye.status = 4, W.forceClientRender = !0, W.errorDigest = $r(n, me);
            } finally {
              s.blockedBoundary = u, s.blockedSegment = E;
            }
            s = qn(n, T, u, ie, M, s.legacyContext, s.context, s.treeContext), n.pingedTasks.push(s);
          }
          return;
      }
      if (typeof u == "object" && u !== null) switch (u.$$typeof) {
        case an:
          if (h = qa(n, s, u.render, h, E), Fr !== 0) {
            u = s.treeContext, s.treeContext = Xt(u, 1, 0);
            try {
              ft(n, s, h);
            } finally {
              s.treeContext = u;
            }
          } else ft(n, s, h);
          return;
        case r:
          u = u.type, h = Ga(u, h), Hn(n, s, u, h, E);
          return;
        case Pr:
          if (E = h.children, u = u._context, h = h.value, T = u._currentValue, u._currentValue = h, M = ge, ge = h = { parent: M, depth: M === null ? 0 : M.depth + 1, context: u, parentValue: T, value: h }, s.context = h, ft(n, s, E), n = ge, n === null) throw Error(t(403));
          h = n.parentValue, n.context._currentValue = h === _ ? n.context._defaultValue : h, n = ge = n.parent, s.context = n;
          return;
        case wr:
          h = h.children, h = h(u._currentValue), ft(n, s, h);
          return;
        case l:
          E = u._init, u = E(u._payload), h = Ga(u, h), Hn(n, s, u, h, void 0);
          return;
      }
      throw Error(t(
        130,
        u == null ? u : typeof u,
        ""
      ));
    }
  }
  function ft(n, s, u) {
    if (s.node = u, typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case nn:
          Hn(n, s, u.type, u.props, u.ref);
          return;
        case or:
          throw Error(t(257));
        case l:
          var h = u._init;
          u = h(u._payload), ft(n, s, u);
          return;
      }
      if (ze(u)) {
        Ya(n, s, u);
        return;
      }
      if (u === null || typeof u != "object" ? h = null : (h = L && u[L] || u["@@iterator"], h = typeof h == "function" ? h : null), h && (h = h.call(u))) {
        if (u = h.next(), !u.done) {
          var E = [];
          do
            E.push(u.value), u = h.next();
          while (!u.done);
          Ya(n, s, E);
        }
        return;
      }
      throw n = Object.prototype.toString.call(u), Error(t(31, n === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : n));
    }
    typeof u == "string" ? (h = s.blockedSegment, h.lastPushedText = A(s.blockedSegment.chunks, u, n.responseState, h.lastPushedText)) : typeof u == "number" && (h = s.blockedSegment, h.lastPushedText = A(s.blockedSegment.chunks, "" + u, n.responseState, h.lastPushedText));
  }
  function Ya(n, s, u) {
    for (var h = u.length, E = 0; E < h; E++) {
      var T = s.treeContext;
      s.treeContext = Xt(T, h, E);
      try {
        Gn(n, s, u[E]);
      } finally {
        s.treeContext = T;
      }
    }
  }
  function Gn(n, s, u) {
    var h = s.blockedSegment.formatContext, E = s.legacyContext, T = s.context;
    try {
      return ft(n, s, u);
    } catch (ie) {
      if (Wn(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
        u = ie;
        var M = s.blockedSegment, W = hn(n, M.chunks.length, null, M.formatContext, M.lastPushedText, !0);
        M.children.push(W), M.lastPushedText = !1, n = qn(n, s.node, s.blockedBoundary, W, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, u.then(n, n), s.blockedSegment.formatContext = h, s.legacyContext = E, s.context = T, Pt(T);
      } else throw s.blockedSegment.formatContext = h, s.legacyContext = E, s.context = T, Pt(T), ie;
    }
  }
  function ds(n) {
    var s = n.blockedBoundary;
    n = n.blockedSegment, n.status = 3, Qa(this, s, n);
  }
  function Xa(n, s, u) {
    var h = n.blockedBoundary;
    n.blockedSegment.status = 3, h === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (h.pendingTasks--, h.forceClientRender || (h.forceClientRender = !0, n = u === void 0 ? Error(t(432)) : u, h.errorDigest = s.onError(n), h.parentFlushed && s.clientRenderedBoundaries.push(h)), h.fallbackAbortableTasks.forEach(function(E) {
      return Xa(E, s, u);
    }), h.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (h = s.onAllReady, h()));
  }
  function mn(n, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var u = s.children[0];
      u.id = s.id, u.parentFlushed = !0, u.status === 1 && mn(n, u);
    } else n.completedSegments.push(s);
  }
  function Qa(n, s, u) {
    if (s === null) {
      if (u.parentFlushed) {
        if (n.completedRootSegment !== null) throw Error(t(389));
        n.completedRootSegment = u;
      }
      n.pendingRootTasks--, n.pendingRootTasks === 0 && (n.onShellError = jr, s = n.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (u.parentFlushed && u.status === 1 && mn(s, u), s.parentFlushed && n.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(ds, n), s.fallbackAbortableTasks.clear()) : u.parentFlushed && u.status === 1 && (mn(s, u), s.completedSegments.length === 1 && s.parentFlushed && n.partialBoundaries.push(s)));
    n.allPendingTasks--, n.allPendingTasks === 0 && (n = n.onAllReady, n());
  }
  function Ja(n) {
    if (n.status !== 2) {
      var s = ge, u = Vn.current;
      Vn.current = Va;
      var h = pn;
      pn = n.responseState;
      try {
        var E = n.pingedTasks, T;
        for (T = 0; T < E.length; T++) {
          var M = E[T], W = n, ie = M.blockedSegment;
          if (ie.status === 0) {
            Pt(M.context);
            try {
              ft(W, M, M.node), ie.lastPushedText && ie.textEmbedded && ie.chunks.push(D), M.abortSet.delete(M), ie.status = 1, Qa(W, M.blockedBoundary, ie);
            } catch (xt) {
              if (Wn(), typeof xt == "object" && xt !== null && typeof xt.then == "function") {
                var ye = M.ping;
                xt.then(ye, ye);
              } else {
                M.abortSet.delete(M), ie.status = 4;
                var me = M.blockedBoundary, Ue = xt, pt = $r(W, Ue);
                if (me === null ? gn(W, Ue) : (me.pendingTasks--, me.forceClientRender || (me.forceClientRender = !0, me.errorDigest = pt, me.parentFlushed && W.clientRenderedBoundaries.push(me))), W.allPendingTasks--, W.allPendingTasks === 0) {
                  var kt = W.onAllReady;
                  kt();
                }
              }
            } finally {
            }
          }
        }
        E.splice(0, T), n.destination !== null && Yn(n, n.destination);
      } catch (xt) {
        $r(n, xt), gn(n, xt);
      } finally {
        pn = h, Vn.current = u, u === Va && Pt(s);
      }
    }
  }
  function yn(n, s, u) {
    switch (u.parentFlushed = !0, u.status) {
      case 0:
        var h = u.id = n.nextSegmentId++;
        return u.lastPushedText = !1, u.textEmbedded = !1, n = n.responseState, c(s, Me), c(s, n.placeholderPrefix), n = b(h.toString(16)), c(s, n), f(s, er);
      case 1:
        u.status = 2;
        var E = !0;
        h = u.chunks;
        var T = 0;
        u = u.children;
        for (var M = 0; M < u.length; M++) {
          for (E = u[M]; T < E.index; T++) c(s, h[T]);
          E = bn(n, s, E);
        }
        for (; T < h.length - 1; T++) c(s, h[T]);
        return T < h.length && (E = f(s, h[T])), E;
      default:
        throw Error(t(390));
    }
  }
  function bn(n, s, u) {
    var h = u.boundary;
    if (h === null) return yn(n, s, u);
    if (h.parentFlushed = !0, h.forceClientRender) h = h.errorDigest, f(s, vt), c(s, Et), h && (c(s, rr), c(s, b(be(h))), c(s, tr)), f(s, Or), yn(n, s, u);
    else if (0 < h.pendingTasks) {
      h.rootSegmentID = n.nextSegmentId++, 0 < h.completedSegments.length && n.partialBoundaries.push(h);
      var E = n.responseState, T = E.nextSuspenseID++;
      E = g(E.boundaryPrefix + T.toString(16)), h = h.id = E, Ze(s, n.responseState, h), yn(n, s, u);
    } else if (h.byteSize > n.progressiveChunkSize) h.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(h), Ze(s, n.responseState, h.id), yn(n, s, u);
    else {
      if (f(s, jt), u = h.completedSegments, u.length !== 1) throw Error(t(391));
      bn(n, s, u[0]);
    }
    return f(s, ut);
  }
  function Za(n, s, u) {
    return yr(s, n.responseState, u.formatContext, u.id), bn(n, s, u), Ot(s, u.formatContext);
  }
  function Ka(n, s, u) {
    for (var h = u.completedSegments, E = 0; E < h.length; E++) eo(n, s, u, h[E]);
    if (h.length = 0, n = n.responseState, h = u.id, u = u.rootSegmentID, c(s, n.startInlineScript), n.sentCompleteBoundaryFunction ? c(s, _e) : (n.sentCompleteBoundaryFunction = !0, c(s, q)), h === null) throw Error(t(395));
    return u = b(u.toString(16)), c(s, h), c(s, He), c(s, n.segmentPrefix), c(s, u), f(s, Be);
  }
  function eo(n, s, u, h) {
    if (h.status === 2) return !0;
    var E = h.id;
    if (E === -1) {
      if ((h.id = u.rootSegmentID) === -1) throw Error(t(392));
      return Za(n, s, h);
    }
    return Za(n, s, h), n = n.responseState, c(s, n.startInlineScript), n.sentCompleteSegmentFunction ? c(s, ar) : (n.sentCompleteSegmentFunction = !0, c(s, br)), c(s, n.segmentPrefix), E = b(E.toString(16)), c(s, E), c(s, w), c(s, n.placeholderPrefix), c(s, E), f(s, Q);
  }
  function Yn(n, s) {
    a = new Uint8Array(512), o = 0;
    try {
      var u = n.completedRootSegment;
      if (u !== null && n.pendingRootTasks === 0) {
        bn(n, s, u), n.completedRootSegment = null;
        var h = n.responseState.bootstrapChunks;
        for (u = 0; u < h.length - 1; u++) c(s, h[u]);
        u < h.length && f(s, h[u]);
      }
      var E = n.clientRenderedBoundaries, T;
      for (T = 0; T < E.length; T++) {
        var M = E[T];
        h = s;
        var W = n.responseState, ie = M.id, ye = M.errorDigest, me = M.errorMessage, Ue = M.errorComponentStack;
        if (c(h, W.startInlineScript), W.sentClientRenderFunction ? c(h, Pe) : (W.sentClientRenderFunction = !0, c(
          h,
          ot
        )), ie === null) throw Error(t(395));
        c(h, ie), c(h, it), (ye || me || Ue) && (c(h, Ht), c(h, b(Gt(ye || "")))), (me || Ue) && (c(h, Ht), c(h, b(Gt(me || "")))), Ue && (c(h, Ht), c(h, b(Gt(Ue)))), f(h, Ye);
      }
      E.splice(0, T);
      var pt = n.completedBoundaries;
      for (T = 0; T < pt.length; T++) Ka(n, s, pt[T]);
      pt.splice(0, T), y(s), a = new Uint8Array(512), o = 0;
      var kt = n.partialBoundaries;
      for (T = 0; T < kt.length; T++) {
        var xt = kt[T];
        e: {
          E = n, M = s;
          var vn = xt.completedSegments;
          for (W = 0; W < vn.length; W++) if (!eo(
            E,
            M,
            xt,
            vn[W]
          )) {
            W++, vn.splice(0, W);
            var ro = !1;
            break e;
          }
          vn.splice(0, W), ro = !0;
        }
        if (!ro) {
          n.destination = null, T++, kt.splice(0, T);
          return;
        }
      }
      kt.splice(0, T);
      var Xn = n.completedBoundaries;
      for (T = 0; T < Xn.length; T++) Ka(n, s, Xn[T]);
      Xn.splice(0, T);
    } finally {
      y(s), n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && s.close();
    }
  }
  function to(n, s) {
    try {
      var u = n.abortableTasks;
      u.forEach(function(h) {
        return Xa(h, n, s);
      }), u.clear(), n.destination !== null && Yn(n, n.destination);
    } catch (h) {
      $r(n, h), gn(n, h);
    }
  }
  return kn.renderToReadableStream = function(n, s) {
    return new Promise(function(u, h) {
      var E, T, M = new Promise(function(me, Ue) {
        T = me, E = Ue;
      }), W = us(n, xe(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), Ge(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, T, function() {
        var me = new ReadableStream({ type: "bytes", pull: function(Ue) {
          if (W.status === 1) W.status = 2, O(Ue, W.fatalError);
          else if (W.status !== 2 && W.destination === null) {
            W.destination = Ue;
            try {
              Yn(W, Ue);
            } catch (pt) {
              $r(W, pt), gn(W, pt);
            }
          }
        }, cancel: function() {
          to(W);
        } }, { highWaterMark: 0 });
        me.allReady = M, u(me);
      }, function(me) {
        M.catch(function() {
        }), h(me);
      }, E);
      if (s && s.signal) {
        var ie = s.signal, ye = function() {
          to(W, ie.reason), ie.removeEventListener("abort", ye);
        };
        ie.addEventListener("abort", ye);
      }
      Ja(W);
    });
  }, kn.version = "18.3.1", kn;
}
var Ar, mi;
Ar = Xs(), mi = Qs();
Ar.version;
Ar.renderToString;
Ar.renderToStaticMarkup;
Ar.renderToNodeStream;
Ar.renderToStaticNodeStream;
mi.renderToReadableStream;
const Js = "staticMarkup";
function Zs() {
  const e = ms().indexOf(Js) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const en = ({ gaData: e, prefix: t = "", children: a }) => {
  const { isReact: o } = Zs(), { onClick: c, ...f } = a.props;
  if (o)
    return et.cloneElement(a, {
      ...f,
      onClick: (b) => (Ys(e), c ? c(b) : !0)
    });
  let y = "";
  ["input", "header", "header-input"].includes(t) && (y = `-${t}`);
  const v = {
    [`data-ga${y}`]: e.text,
    [`data-ga${y}-name`]: e.name,
    [`data-ga${y}-event`]: e.event,
    [`data-ga${y}-action`]: e.action,
    [`data-ga${y}-type`]: e.type,
    [`data-ga${y}-region`]: e.region,
    [`data-ga${y}-section`]: e.section,
    [`data-ga${y}-component`]: e.component
  };
  return et.cloneElement(a, {
    ...f,
    onClick: c,
    ...v
  });
};
i.number, i.number, i.func, i.object;
i.arrayOf(ci).isRequired, i.number;
const Ks = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ca = ({
  label: e,
  cardTitle: t,
  gaData: a,
  ariaLabel: o,
  block: c,
  color: f,
  disabled: y,
  element: v,
  href: b,
  icon: g,
  innerRef: O,
  onClick: x,
  size: j,
  classes: G,
  target: I,
  ...S
}) => {
  const N = Cr("btn", {
    [`btn-${f}`]: !0,
    "btn-md": j === "small",
    "btn-sm": j === "xsmall",
    "btn-block": c,
    disabled: y
  });
  let B = v;
  return b && v === "button" && (B = "a"), /* @__PURE__ */ V.jsx(
    en,
    {
      gaData: {
        ...Ks,
        section: t,
        // @deprecated - remove at some point
        ...a,
        text: e
      },
      children: /* @__PURE__ */ V.jsxs(
        B,
        {
          type: B === "button" && x ? "button" : void 0,
          ...S,
          className: Cr(G) || N,
          href: b,
          ref: O,
          onClick: x,
          "aria-label": o,
          target: B === "a" ? I : null,
          children: [
            g && /* @__PURE__ */ V.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Ca.propTypes = {
  /**
   * Button label
   */
  label: i.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: i.string,
  /**
   * Google Analytics event data
   */
  gaData: xa,
  /**
    ARIA label for accessibility
  */
  ariaLabel: i.string,
  /**
    Render button as a block-button?
  */
  block: i.bool,
  /**
    Button background color
  */
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: i.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: i.oneOfType([
    i.func,
    i.string,
    i.shape({ $$typeof: i.symbol, render: i.func }),
    i.arrayOf(
      i.oneOfType([
        i.func,
        i.string,
        i.shape({ $$typeof: i.symbol, render: i.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: i.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: i.arrayOf(i.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: i.oneOfType([
    i.object,
    i.func,
    i.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: i.func,
  /**
    Button size
  */
  size: i.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: i.arrayOf(i.string),
  /**
   Link target type
   */
  target: i.oneOf(["_blank", "_self", "_top", "_parent"])
};
Ca.defaultProps = {
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
var yi = { exports: {} }, De = {}, vo;
function el() {
  if (vo) return De;
  vo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), y = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), G = Symbol.for("react.client.reference");
  function I(S) {
    if (typeof S == "object" && S !== null) {
      var N = S.$$typeof;
      switch (N) {
        case e:
          switch (S = S.type, S) {
            case a:
            case c:
            case o:
            case b:
            case g:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case y:
                case v:
                case x:
                case O:
                  return S;
                case f:
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
  return De.ContextConsumer = f, De.ContextProvider = y, De.Element = e, De.ForwardRef = v, De.Fragment = a, De.Lazy = x, De.Memo = O, De.Portal = t, De.Profiler = c, De.StrictMode = o, De.Suspense = b, De.SuspenseList = g, De.isContextConsumer = function(S) {
    return I(S) === f;
  }, De.isContextProvider = function(S) {
    return I(S) === y;
  }, De.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, De.isForwardRef = function(S) {
    return I(S) === v;
  }, De.isFragment = function(S) {
    return I(S) === a;
  }, De.isLazy = function(S) {
    return I(S) === x;
  }, De.isMemo = function(S) {
    return I(S) === O;
  }, De.isPortal = function(S) {
    return I(S) === t;
  }, De.isProfiler = function(S) {
    return I(S) === c;
  }, De.isStrictMode = function(S) {
    return I(S) === o;
  }, De.isSuspense = function(S) {
    return I(S) === b;
  }, De.isSuspenseList = function(S) {
    return I(S) === g;
  }, De.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === a || S === c || S === o || S === b || S === g || S === j || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === O || S.$$typeof === y || S.$$typeof === f || S.$$typeof === v || S.$$typeof === G || S.getModuleId !== void 0);
  }, De.typeOf = I, De;
}
yi.exports = el();
var bi = yi.exports;
function tl(e) {
  function t(D, A, P, F, p) {
    for (var te = 0, C = 0, re = 0, J = 0, K, z, ne = 0, se = 0, Z, pe = Z = K = 0, ee = 0, le = 0, We = 0, de = 0, Je = P.length, Ve = Je - 1, he, $ = "", ae = "", Xe = "", at = "", Me; ee < Je; ) {
      if (z = P.charCodeAt(ee), ee === Ve && C + J + re + te !== 0 && (C !== 0 && (z = C === 47 ? 10 : 47), J = re = te = 0, Je++, Ve++), C + J + re + te === 0) {
        if (ee === Ve && (0 < le && ($ = $.replace(j, "")), 0 < $.trim().length)) {
          switch (z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += P.charAt(ee);
          }
          z = 59;
        }
        switch (z) {
          case 123:
            for ($ = $.trim(), K = $.charCodeAt(0), Z = 1, de = ++ee; ee < Je; ) {
              switch (z = P.charCodeAt(ee)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (z = P.charCodeAt(ee + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (pe = ee + 1; pe < Ve; ++pe)
                          switch (P.charCodeAt(pe)) {
                            case 47:
                              if (z === 42 && P.charCodeAt(pe - 1) === 42 && ee + 2 !== pe) {
                                ee = pe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (z === 47) {
                                ee = pe + 1;
                                break e;
                              }
                          }
                        ee = pe;
                      }
                  }
                  break;
                case 91:
                  z++;
                case 40:
                  z++;
                case 34:
                case 39:
                  for (; ee++ < Ve && P.charCodeAt(ee) !== z; )
                    ;
              }
              if (Z === 0) break;
              ee++;
            }
            switch (Z = P.substring(de, ee), K === 0 && (K = ($ = $.replace(x, "").trim()).charCodeAt(0)), K) {
              case 64:
                switch (0 < le && ($ = $.replace(j, "")), z = $.charCodeAt(1), z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = A;
                    break;
                  default:
                    le = Qe;
                }
                if (Z = t(A, le, Z, z, p + 1), de = Z.length, 0 < xe && (le = a(Qe, $, We), Me = v(3, Z, le, A, Ee, fe, de, z, p, F), $ = le.join(""), Me !== void 0 && (de = (Z = Me.trim()).length) === 0 && (z = 0, Z = "")), 0 < de) switch (z) {
                  case 115:
                    $ = $.replace(ue, y);
                  case 100:
                  case 109:
                  case 45:
                    Z = $ + "{" + Z + "}";
                    break;
                  case 107:
                    $ = $.replace(U, "$1 $2"), Z = $ + "{" + Z + "}", Z = Se === 1 || Se === 2 && f("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                    break;
                  default:
                    Z = $ + Z, F === 112 && (Z = (ae += Z, ""));
                }
                else Z = "";
                break;
              default:
                Z = t(A, a(A, $, We), Z, F, p + 1);
            }
            Xe += Z, Z = We = le = pe = K = 0, $ = "", z = P.charCodeAt(++ee);
            break;
          case 125:
          case 59:
            if ($ = (0 < le ? $.replace(j, "") : $).trim(), 1 < (de = $.length)) switch (pe === 0 && (K = $.charCodeAt(0), K === 45 || 96 < K && 123 > K) && (de = ($ = $.replace(" ", ":")).length), 0 < xe && (Me = v(1, $, A, D, Ee, fe, ae.length, F, p, F)) !== void 0 && (de = ($ = Me.trim()).length) === 0 && ($ = "\0\0"), K = $.charCodeAt(0), z = $.charCodeAt(1), K) {
              case 0:
                break;
              case 64:
                if (z === 105 || z === 99) {
                  at += $ + P.charAt(ee);
                  break;
                }
              default:
                $.charCodeAt(de - 1) !== 58 && (ae += c($, K, z, $.charCodeAt(2)));
            }
            We = le = pe = K = 0, $ = "", z = P.charCodeAt(++ee);
        }
      }
      switch (z) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + K === 0 && F !== 107 && 0 < $.length && (le = 1, $ += "\0"), 0 < xe * Ge && v(0, $, A, D, Ee, fe, ae.length, F, p, F), fe = 1, Ee++;
          break;
        case 59:
        case 125:
          if (C + J + re + te === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, he = P.charAt(ee), z) {
            case 9:
            case 32:
              if (J + te + C === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  z !== 32 && (he = " ");
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
              J + C + te === 0 && (le = We = 1, he = "\f" + he);
              break;
            case 108:
              if (J + C + te + Re === 0 && 0 < pe) switch (ee - pe) {
                case 2:
                  ne === 112 && P.charCodeAt(ee - 3) === 58 && (Re = ne);
                case 8:
                  se === 111 && (Re = se);
              }
              break;
            case 58:
              J + C + te === 0 && (pe = ee);
              break;
            case 44:
              C + re + J + te === 0 && (le = 1, he += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (J = J === z ? 0 : J === 0 ? z : J);
              break;
            case 91:
              J + C + re === 0 && te++;
              break;
            case 93:
              J + C + re === 0 && te--;
              break;
            case 41:
              J + C + te === 0 && re--;
              break;
            case 40:
              if (J + C + te === 0) {
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
              C + re + J + te + pe + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + te + re)) switch (C) {
                case 0:
                  switch (2 * z + 3 * P.charCodeAt(ee + 1)) {
                    case 235:
                      C = 47;
                      break;
                    case 220:
                      de = ee, C = 42;
                  }
                  break;
                case 42:
                  z === 47 && ne === 42 && de + 2 !== ee && (P.charCodeAt(de + 2) === 33 && (ae += P.substring(de, ee + 1)), he = "", C = 0);
              }
          }
          C === 0 && ($ += he);
      }
      se = ne, ne = z, ee++;
    }
    if (de = ae.length, 0 < de) {
      if (le = A, 0 < xe && (Me = v(2, ae, le, D, Ee, fe, de, F, p, F), Me !== void 0 && (ae = Me).length === 0)) return at + ae + Xe;
      if (ae = le.join(",") + "{" + ae + "}", Se * Re !== 0) {
        switch (Se !== 2 || f(ae, 2) || (Re = 0), Re) {
          case 111:
            ae = ae.replace(X, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(Y, "::-webkit-input-$1") + ae.replace(Y, "::-moz-$1") + ae.replace(Y, ":-ms-input-$1") + ae;
        }
        Re = 0;
      }
    }
    return at + ae + Xe;
  }
  function a(D, A, P) {
    var F = A.trim().split(N);
    A = F;
    var p = F.length, te = D.length;
    switch (te) {
      case 0:
      case 1:
        var C = 0;
        for (D = te === 0 ? "" : D[0] + " "; C < p; ++C)
          A[C] = o(D, A[C], P).trim();
        break;
      default:
        var re = C = 0;
        for (A = []; C < p; ++C)
          for (var J = 0; J < te; ++J)
            A[re++] = o(D[J] + " ", F[C], P).trim();
    }
    return A;
  }
  function o(D, A, P) {
    var F = A.charCodeAt(0);
    switch (33 > F && (F = (A = A.trim()).charCodeAt(0)), F) {
      case 38:
        return A.replace(B, "$1" + D.trim());
      case 58:
        return D.trim() + A.replace(B, "$1" + D.trim());
      default:
        if (0 < 1 * P && 0 < A.indexOf("\f")) return A.replace(B, (D.charCodeAt(0) === 58 ? "" : "$1") + D.trim());
    }
    return D + A;
  }
  function c(D, A, P, F) {
    var p = D + ";", te = 2 * A + 3 * P + 4 * F;
    if (te === 944) {
      D = p.indexOf(":", 9) + 1;
      var C = p.substring(D, p.length - 1).trim();
      return C = p.substring(0, D).trim() + C + ";", Se === 1 || Se === 2 && f(C, 1) ? "-webkit-" + C + C : C;
    }
    if (Se === 0 || Se === 2 && !f(p, 1)) return p;
    switch (te) {
      case 1015:
        return p.charCodeAt(10) === 97 ? "-webkit-" + p + p : p;
      case 951:
        return p.charCodeAt(3) === 116 ? "-webkit-" + p + p : p;
      case 963:
        return p.charCodeAt(5) === 110 ? "-webkit-" + p + p : p;
      case 1009:
        if (p.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + p + p;
      case 978:
        return "-webkit-" + p + "-moz-" + p + p;
      case 1019:
      case 983:
        return "-webkit-" + p + "-moz-" + p + "-ms-" + p + p;
      case 883:
        if (p.charCodeAt(8) === 45) return "-webkit-" + p + p;
        if (0 < p.indexOf("image-set(", 11)) return p.replace(ke, "$1-webkit-$2") + p;
        break;
      case 932:
        if (p.charCodeAt(4) === 45) switch (p.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + p.replace("-grow", "") + "-webkit-" + p + "-ms-" + p.replace("grow", "positive") + p;
          case 115:
            return "-webkit-" + p + "-ms-" + p.replace("shrink", "negative") + p;
          case 98:
            return "-webkit-" + p + "-ms-" + p.replace("basis", "preferred-size") + p;
        }
        return "-webkit-" + p + "-ms-" + p + p;
      case 964:
        return "-webkit-" + p + "-ms-flex-" + p + p;
      case 1023:
        if (p.charCodeAt(8) !== 99) break;
        return C = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + p + "-ms-flex-pack" + C + p;
      case 1005:
        return I.test(p) ? p.replace(G, ":-webkit-") + p.replace(G, ":-moz-") + p : p;
      case 1e3:
        switch (C = p.substring(13).trim(), A = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(A)) {
          case 226:
            C = p.replace(k, "tb");
            break;
          case 232:
            C = p.replace(k, "tb-rl");
            break;
          case 220:
            C = p.replace(k, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + C + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (A = (p = D).length - 10, C = (p.charCodeAt(A) === 33 ? p.substring(0, A) : p).substring(D.indexOf(":", 7) + 1).trim(), te = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8)) break;
          case 115:
            p = p.replace(C, "-webkit-" + C) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(C, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + p.replace(C, "-webkit-" + C) + ";" + p.replace(C, "-ms-" + C + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return C = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + C + "-ms-flex-" + C + p;
          case 115:
            return "-webkit-" + p + "-ms-flex-item-" + p.replace(Te, "") + p;
          default:
            return "-webkit-" + p + "-ms-flex-line-pack" + p.replace("align-content", "").replace(Te, "") + p;
        }
        break;
      case 973:
      case 989:
        if (p.charCodeAt(3) !== 45 || p.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ze.test(D) === !0) return (C = D.substring(D.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(D.replace("stretch", "fill-available"), A, P, F).replace(":fill-available", ":stretch") : p.replace(C, "-webkit-" + C) + p.replace(C, "-moz-" + C.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, P + F === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + p;
    }
    return p;
  }
  function f(D, A) {
    var P = D.indexOf(A === 1 ? ":" : "{"), F = D.substring(0, A !== 3 ? P : 10);
    return P = D.substring(P + 1, D.length - 1), Fe(A !== 2 ? F : F.replace(Ie, "$1"), P, A);
  }
  function y(D, A) {
    var P = c(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return P !== A + ";" ? P.replace(be, " or ($1)").substring(4) : "(" + A + ")";
  }
  function v(D, A, P, F, p, te, C, re, J, K) {
    for (var z = 0, ne = A, se; z < xe; ++z)
      switch (se = Ne[z].call(O, D, ne, P, F, p, te, C, re, J, K)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = se;
      }
    if (ne !== A) return ne;
  }
  function b(D) {
    switch (D) {
      case void 0:
      case null:
        xe = Ne.length = 0;
        break;
      default:
        if (typeof D == "function") Ne[xe++] = D;
        else if (typeof D == "object") for (var A = 0, P = D.length; A < P; ++A)
          b(D[A]);
        else Ge = !!D | 0;
    }
    return b;
  }
  function g(D) {
    return D = D.prefix, D !== void 0 && (Fe = null, D ? typeof D != "function" ? Se = 1 : (Se = 2, Fe = D) : Se = 0), g;
  }
  function O(D, A) {
    var P = D;
    if (33 > P.charCodeAt(0) && (P = P.trim()), ve = P, P = [ve], 0 < xe) {
      var F = v(-1, A, P, P, Ee, fe, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (A = F);
    }
    var p = t(Qe, P, A, 0, 0);
    return 0 < xe && (F = v(-2, p, P, P, Ee, fe, p.length, 0, 0, 0), F !== void 0 && (p = F)), ve = "", Re = 0, fe = Ee = 1, p;
  }
  var x = /^\0+/g, j = /[\0\r\f]/g, G = /: */g, I = /zoo|gra/, S = /([,: ])(transform)/g, N = /,\r+?/g, B = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, X = /:(read-only)/g, k = /[svh]\w+-[tblr]{2}/, ue = /\(\s*(.*)\s*\)/g, be = /([\s\S]*?);/g, Te = /-self|flex-/g, Ie = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ze = /stretch|:\s*\w+\-(?:conte|avail)/, ke = /([^-])(image-set\()/, fe = 1, Ee = 1, Re = 0, Se = 1, Qe = [], Ne = [], xe = 0, Fe = null, Ge = 0, ve = "";
  return O.use = b, O.set = g, e !== void 0 && g(e), O;
}
var rl = {
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
function nl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(a) {
    return t[a] === void 0 && (t[a] = e(a)), t[a];
  };
}
var al = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wo = /* @__PURE__ */ nl(
  function(e) {
    return al.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), vi = { exports: {} }, Ae = {}, So;
function ol() {
  if (So) return Ae;
  So = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, f = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, O = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, G = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function Y(k) {
    if (typeof k == "object" && k !== null) {
      var ue = k.$$typeof;
      switch (ue) {
        case t:
          switch (k = k.type, k) {
            case b:
            case g:
            case o:
            case f:
            case c:
            case x:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case v:
                case O:
                case I:
                case G:
                case y:
                  return k;
                default:
                  return ue;
              }
          }
        case a:
          return ue;
      }
    }
  }
  function X(k) {
    return Y(k) === g;
  }
  return Ae.AsyncMode = b, Ae.ConcurrentMode = g, Ae.ContextConsumer = v, Ae.ContextProvider = y, Ae.Element = t, Ae.ForwardRef = O, Ae.Fragment = o, Ae.Lazy = I, Ae.Memo = G, Ae.Portal = a, Ae.Profiler = f, Ae.StrictMode = c, Ae.Suspense = x, Ae.isAsyncMode = function(k) {
    return X(k) || Y(k) === b;
  }, Ae.isConcurrentMode = X, Ae.isContextConsumer = function(k) {
    return Y(k) === v;
  }, Ae.isContextProvider = function(k) {
    return Y(k) === y;
  }, Ae.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === t;
  }, Ae.isForwardRef = function(k) {
    return Y(k) === O;
  }, Ae.isFragment = function(k) {
    return Y(k) === o;
  }, Ae.isLazy = function(k) {
    return Y(k) === I;
  }, Ae.isMemo = function(k) {
    return Y(k) === G;
  }, Ae.isPortal = function(k) {
    return Y(k) === a;
  }, Ae.isProfiler = function(k) {
    return Y(k) === f;
  }, Ae.isStrictMode = function(k) {
    return Y(k) === c;
  }, Ae.isSuspense = function(k) {
    return Y(k) === x;
  }, Ae.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === o || k === g || k === f || k === c || k === x || k === j || typeof k == "object" && k !== null && (k.$$typeof === I || k.$$typeof === G || k.$$typeof === y || k.$$typeof === v || k.$$typeof === O || k.$$typeof === N || k.$$typeof === B || k.$$typeof === U || k.$$typeof === S);
  }, Ae.typeOf = Y, Ae;
}
vi.exports = ol();
var il = vi.exports, _a = il, sl = {
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
}, ll = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, cl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ta = {};
Ta[_a.ForwardRef] = cl;
Ta[_a.Memo] = wi;
function ko(e) {
  return _a.isMemo(e) ? wi : Ta[e.$$typeof] || sl;
}
var ul = Object.defineProperty, dl = Object.getOwnPropertyNames, xo = Object.getOwnPropertySymbols, fl = Object.getOwnPropertyDescriptor, pl = Object.getPrototypeOf, Co = Object.prototype;
function Si(e, t, a) {
  if (typeof t != "string") {
    if (Co) {
      var o = pl(t);
      o && o !== Co && Si(e, o, a);
    }
    var c = dl(t);
    xo && (c = c.concat(xo(t)));
    for (var f = ko(e), y = ko(t), v = 0; v < c.length; ++v) {
      var b = c[v];
      if (!ll[b] && !(a && a[b]) && !(y && y[b]) && !(f && f[b])) {
        var g = fl(t, b);
        try {
          ul(e, b, g);
        } catch {
        }
      }
    }
  }
  return e;
}
var hl = Si;
const gl = /* @__PURE__ */ ka(hl);
var rt = { env: { NODE_ENV: "production" } };
function Mt() {
  return (Mt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }
    return e;
  }).apply(this, arguments);
}
var _o = function(e, t) {
  for (var a = [e[0]], o = 0, c = t.length; o < c; o += 1) a.push(t[o], e[o + 1]);
  return a;
}, fa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !bi.typeOf(e);
}, On = Object.freeze([]), Jt = Object.freeze({});
function Zr(e) {
  return typeof e == "function";
}
function To(e) {
  return e.displayName || e.name || "Component";
}
function Ea(e) {
  return e && typeof e.styledComponentId == "string";
}
var _r = typeof rt < "u" && rt.env !== void 0 && (rt.env.REACT_APP_SC_ATTR || rt.env.SC_ATTR) || "data-styled", Ra = typeof window < "u" && "HTMLElement" in window, ml = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof rt < "u" && rt.env !== void 0 && (rt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && rt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? rt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && rt.env.REACT_APP_SC_DISABLE_SPEEDY : rt.env.SC_DISABLE_SPEEDY !== void 0 && rt.env.SC_DISABLE_SPEEDY !== "" ? rt.env.SC_DISABLE_SPEEDY !== "false" && rt.env.SC_DISABLE_SPEEDY : rt.env.NODE_ENV !== "production"));
function tn(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (a.length > 0 ? " Args: " + a.join(", ") : ""));
}
var yl = function() {
  function e(a) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = a;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(a) {
    for (var o = 0, c = 0; c < a; c++) o += this.groupSizes[c];
    return o;
  }, t.insertRules = function(a, o) {
    if (a >= this.groupSizes.length) {
      for (var c = this.groupSizes, f = c.length, y = f; a >= y; ) (y <<= 1) < 0 && tn(16, "" + a);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(c), this.length = y;
      for (var v = f; v < y; v++) this.groupSizes[v] = 0;
    }
    for (var b = this.indexOfGroup(a + 1), g = 0, O = o.length; g < O; g++) this.tag.insertRule(b, o[g]) && (this.groupSizes[a]++, b++);
  }, t.clearGroup = function(a) {
    if (a < this.length) {
      var o = this.groupSizes[a], c = this.indexOfGroup(a), f = c + o;
      this.groupSizes[a] = 0;
      for (var y = c; y < f; y++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(a) {
    var o = "";
    if (a >= this.length || this.groupSizes[a] === 0) return o;
    for (var c = this.groupSizes[a], f = this.indexOfGroup(a), y = f + c, v = f; v < y; v++) o += this.tag.getRule(v) + `/*!sc*/
`;
    return o;
  }, e;
}(), Rn = /* @__PURE__ */ new Map(), In = /* @__PURE__ */ new Map(), Yr = 1, xn = function(e) {
  if (Rn.has(e)) return Rn.get(e);
  for (; In.has(Yr); ) Yr++;
  var t = Yr++;
  return Rn.set(e, t), In.set(t, e), t;
}, bl = function(e) {
  return In.get(e);
}, vl = function(e, t) {
  t >= Yr && (Yr = t + 1), Rn.set(e, t), In.set(t, e);
}, wl = "style[" + _r + '][data-styled-version="5.3.11"]', Sl = new RegExp("^" + _r + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), kl = function(e, t, a) {
  for (var o, c = a.split(","), f = 0, y = c.length; f < y; f++) (o = c[f]) && e.registerName(t, o);
}, xl = function(e, t) {
  for (var a = (t.textContent || "").split(`/*!sc*/
`), o = [], c = 0, f = a.length; c < f; c++) {
    var y = a[c].trim();
    if (y) {
      var v = y.match(Sl);
      if (v) {
        var b = 0 | parseInt(v[1], 10), g = v[2];
        b !== 0 && (vl(g, b), kl(e, g, v[3]), e.getTag().insertRules(b, o)), o.length = 0;
      } else o.push(y);
    }
  }
}, Cl = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ki = function(e) {
  var t = document.head, a = e || t, o = document.createElement("style"), c = function(v) {
    for (var b = v.childNodes, g = b.length; g >= 0; g--) {
      var O = b[g];
      if (O && O.nodeType === 1 && O.hasAttribute(_r)) return O;
    }
  }(a), f = c !== void 0 ? c.nextSibling : null;
  o.setAttribute(_r, "active"), o.setAttribute("data-styled-version", "5.3.11");
  var y = Cl();
  return y && o.setAttribute("nonce", y), a.insertBefore(o, f), o;
}, _l = function() {
  function e(a) {
    var o = this.element = ki(a);
    o.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var f = document.styleSheets, y = 0, v = f.length; y < v; y++) {
        var b = f[y];
        if (b.ownerNode === c) return b;
      }
      tn(17);
    }(o), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(a, o) {
    try {
      return this.sheet.insertRule(o, a), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(a) {
    this.sheet.deleteRule(a), this.length--;
  }, t.getRule = function(a) {
    var o = this.sheet.cssRules[a];
    return o !== void 0 && typeof o.cssText == "string" ? o.cssText : "";
  }, e;
}(), Tl = function() {
  function e(a) {
    var o = this.element = ki(a);
    this.nodes = o.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(a, o) {
    if (a <= this.length && a >= 0) {
      var c = document.createTextNode(o), f = this.nodes[a];
      return this.element.insertBefore(c, f || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(a) {
    this.element.removeChild(this.nodes[a]), this.length--;
  }, t.getRule = function(a) {
    return a < this.length ? this.nodes[a].textContent : "";
  }, e;
}(), El = function() {
  function e(a) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(a, o) {
    return a <= this.length && (this.rules.splice(a, 0, o), this.length++, !0);
  }, t.deleteRule = function(a) {
    this.rules.splice(a, 1), this.length--;
  }, t.getRule = function(a) {
    return a < this.length ? this.rules[a] : "";
  }, e;
}(), Eo = Ra, Rl = { isServer: !Ra, useCSSOMInjection: !ml }, xi = function() {
  function e(a, o, c) {
    a === void 0 && (a = Jt), o === void 0 && (o = {}), this.options = Mt({}, Rl, {}, a), this.gs = o, this.names = new Map(c), this.server = !!a.isServer, !this.server && Ra && Eo && (Eo = !1, function(f) {
      for (var y = document.querySelectorAll(wl), v = 0, b = y.length; v < b; v++) {
        var g = y[v];
        g && g.getAttribute(_r) !== "active" && (xl(f, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this));
  }
  e.registerId = function(a) {
    return xn(a);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(a, o) {
    return o === void 0 && (o = !0), new e(Mt({}, this.options, {}, a), this.gs, o && this.names || void 0);
  }, t.allocateGSInstance = function(a) {
    return this.gs[a] = (this.gs[a] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (o = this.options).isServer, f = o.useCSSOMInjection, y = o.target, a = c ? new El(y) : f ? new _l(y) : new Tl(y), new yl(a)));
    var a, o, c, f, y;
  }, t.hasNameForId = function(a, o) {
    return this.names.has(a) && this.names.get(a).has(o);
  }, t.registerName = function(a, o) {
    if (xn(a), this.names.has(a)) this.names.get(a).add(o);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(o), this.names.set(a, c);
    }
  }, t.insertRules = function(a, o, c) {
    this.registerName(a, o), this.getTag().insertRules(xn(a), c);
  }, t.clearNames = function(a) {
    this.names.has(a) && this.names.get(a).clear();
  }, t.clearRules = function(a) {
    this.getTag().clearGroup(xn(a)), this.clearNames(a);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(a) {
      for (var o = a.getTag(), c = o.length, f = "", y = 0; y < c; y++) {
        var v = bl(y);
        if (v !== void 0) {
          var b = a.names.get(v), g = o.getGroup(y);
          if (b && g && b.size) {
            var O = _r + ".g" + y + '[id="' + v + '"]', x = "";
            b !== void 0 && b.forEach(function(j) {
              j.length > 0 && (x += j + ",");
            }), f += "" + g + O + '{content:"' + x + `"}/*!sc*/
`;
          }
        }
      }
      return f;
    }(this);
  }, e;
}(), Al = /(a)(d)/gi, Ro = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function pa(e) {
  var t, a = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) a = Ro(t % 52) + a;
  return (Ro(t % 52) + a).replace(Al, "$1-$2");
}
var kr = function(e, t) {
  for (var a = t.length; a; ) e = 33 * e ^ t.charCodeAt(--a);
  return e;
}, Ci = function(e) {
  return kr(5381, e);
};
function Ol(e) {
  for (var t = 0; t < e.length; t += 1) {
    var a = e[t];
    if (Zr(a) && !Ea(a)) return !1;
  }
  return !0;
}
var Il = Ci("5.3.11"), Nl = function() {
  function e(t, a, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (o === void 0 || o.isStatic) && Ol(t), this.componentId = a, this.baseHash = kr(Il, a), this.baseStyle = o, xi.registerId(a);
  }
  return e.prototype.generateAndInjectStyles = function(t, a, o) {
    var c = this.componentId, f = [];
    if (this.baseStyle && f.push(this.baseStyle.generateAndInjectStyles(t, a, o)), this.isStatic && !o.hash) if (this.staticRulesId && a.hasNameForId(c, this.staticRulesId)) f.push(this.staticRulesId);
    else {
      var y = Tr(this.rules, t, a, o).join(""), v = pa(kr(this.baseHash, y) >>> 0);
      if (!a.hasNameForId(c, v)) {
        var b = o(y, "." + v, void 0, c);
        a.insertRules(c, v, b);
      }
      f.push(v), this.staticRulesId = v;
    }
    else {
      for (var g = this.rules.length, O = kr(this.baseHash, o.hash), x = "", j = 0; j < g; j++) {
        var G = this.rules[j];
        if (typeof G == "string") x += G;
        else if (G) {
          var I = Tr(G, t, a, o), S = Array.isArray(I) ? I.join("") : I;
          O = kr(O, S + j), x += S;
        }
      }
      if (x) {
        var N = pa(O >>> 0);
        if (!a.hasNameForId(c, N)) {
          var B = o(x, "." + N, void 0, c);
          a.insertRules(c, N, B);
        }
        f.push(N);
      }
    }
    return f.join(" ");
  }, e;
}(), Pl = /^\s*\/\/.*$/gm, Dl = [":", "[", ".", "#"];
function Ll(e) {
  var t, a, o, c, f = Jt, y = f.options, v = y === void 0 ? Jt : y, b = f.plugins, g = b === void 0 ? On : b, O = new tl(v), x = [], j = /* @__PURE__ */ function(S) {
    function N(B) {
      if (B) try {
        S(B + "}");
      } catch {
      }
    }
    return function(B, U, Y, X, k, ue, be, Te, Ie, ze) {
      switch (B) {
        case 1:
          if (Ie === 0 && U.charCodeAt(0) === 64) return S(U + ";"), "";
          break;
        case 2:
          if (Te === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Te) {
            case 102:
            case 112:
              return S(Y[0] + U), "";
            default:
              return U + (ze === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(N);
      }
    };
  }(function(S) {
    x.push(S);
  }), G = function(S, N, B) {
    return N === 0 && Dl.indexOf(B[a.length]) !== -1 || B.match(c) ? S : "." + t;
  };
  function I(S, N, B, U) {
    U === void 0 && (U = "&");
    var Y = S.replace(Pl, ""), X = N && B ? B + " " + N + " { " + Y + " }" : Y;
    return t = U, a = N, o = new RegExp("\\" + a + "\\b", "g"), c = new RegExp("(\\" + a + "\\b){2,}"), O(B || !N ? "" : N, X);
  }
  return O.use([].concat(g, [function(S, N, B) {
    S === 2 && B.length && B[0].lastIndexOf(a) > 0 && (B[0] = B[0].replace(o, G));
  }, j, function(S) {
    if (S === -2) {
      var N = x;
      return x = [], N;
    }
  }])), I.hash = g.length ? g.reduce(function(S, N) {
    return N.name || tn(15), kr(S, N.name);
  }, 5381).toString() : "", I;
}
var _i = et.createContext();
_i.Consumer;
var Ti = et.createContext(), Ml = (Ti.Consumer, new xi()), ha = Ll();
function Fl() {
  return Kt(_i) || Ml;
}
function jl() {
  return Kt(Ti) || ha;
}
var $l = function() {
  function e(t, a) {
    var o = this;
    this.inject = function(c, f) {
      f === void 0 && (f = ha);
      var y = o.name + f.hash;
      c.hasNameForId(o.id, y) || c.insertRules(o.id, y, f(o.rules, y, "@keyframes"));
    }, this.toString = function() {
      return tn(12, String(o.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = a;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ha), this.name + t.hash;
  }, e;
}(), zl = /([A-Z])/, Bl = /([A-Z])/g, Ul = /^ms-/, Wl = function(e) {
  return "-" + e.toLowerCase();
};
function Ao(e) {
  return zl.test(e) ? e.replace(Bl, Wl).replace(Ul, "-ms-") : e;
}
var Oo = function(e) {
  return e == null || e === !1 || e === "";
};
function Tr(e, t, a, o) {
  if (Array.isArray(e)) {
    for (var c, f = [], y = 0, v = e.length; y < v; y += 1) (c = Tr(e[y], t, a, o)) !== "" && (Array.isArray(c) ? f.push.apply(f, c) : f.push(c));
    return f;
  }
  if (Oo(e)) return "";
  if (Ea(e)) return "." + e.styledComponentId;
  if (Zr(e)) {
    if (typeof (g = e) != "function" || g.prototype && g.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Tr(b, t, a, o);
  }
  var g;
  return e instanceof $l ? a ? (e.inject(a, o), e.getName(o)) : e : fa(e) ? function O(x, j) {
    var G, I, S = [];
    for (var N in x) x.hasOwnProperty(N) && !Oo(x[N]) && (Array.isArray(x[N]) && x[N].isCss || Zr(x[N]) ? S.push(Ao(N) + ":", x[N], ";") : fa(x[N]) ? S.push.apply(S, O(x[N], N)) : S.push(Ao(N) + ": " + (G = N, (I = x[N]) == null || typeof I == "boolean" || I === "" ? "" : typeof I != "number" || I === 0 || G in rl || G.startsWith("--") ? String(I).trim() : I + "px") + ";"));
    return j ? [j + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var Io = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Vl(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
  return Zr(e) || fa(e) ? Io(Tr(_o(On, [e].concat(a)))) : a.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Io(Tr(_o(e, a)));
}
var ql = function(e, t, a) {
  return a === void 0 && (a = Jt), e.theme !== a.theme && e.theme || t || a.theme;
}, Hl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Gl = /(^-|-$)/g;
function aa(e) {
  return e.replace(Hl, "-").replace(Gl, "");
}
var Yl = function(e) {
  return pa(Ci(e) >>> 0);
};
function Cn(e) {
  return typeof e == "string" && rt.env.NODE_ENV === "production";
}
var ga = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Xl = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ql(e, t, a) {
  var o = e[a];
  ga(t) && ga(o) ? Ei(o, t) : e[a] = t;
}
function Ei(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
  for (var c = 0, f = a; c < f.length; c++) {
    var y = f[c];
    if (ga(y)) for (var v in y) Xl(v) && Ql(e, y[v], v);
  }
  return e;
}
var Ri = et.createContext();
Ri.Consumer;
var oa = {};
function Ai(e, t, a) {
  var o = Ea(e), c = !Cn(e), f = t.attrs, y = f === void 0 ? On : f, v = t.componentId, b = v === void 0 ? function(U, Y) {
    var X = typeof U != "string" ? "sc" : aa(U);
    oa[X] = (oa[X] || 0) + 1;
    var k = X + "-" + Yl("5.3.11" + X + oa[X]);
    return Y ? Y + "-" + k : k;
  }(t.displayName, t.parentComponentId) : v, g = t.displayName, O = g === void 0 ? function(U) {
    return Cn(U) ? "styled." + U : "Styled(" + To(U) + ")";
  }(e) : g, x = t.displayName && t.componentId ? aa(t.displayName) + "-" + t.componentId : t.componentId || b, j = o && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, G = t.shouldForwardProp;
  o && e.shouldForwardProp && (G = t.shouldForwardProp ? function(U, Y, X) {
    return e.shouldForwardProp(U, Y, X) && t.shouldForwardProp(U, Y, X);
  } : e.shouldForwardProp);
  var I, S = new Nl(a, x, o ? e.componentStyle : void 0), N = S.isStatic && y.length === 0, B = function(U, Y) {
    return function(X, k, ue, be) {
      var Te = X.attrs, Ie = X.componentStyle, ze = X.defaultProps, ke = X.foldedComponentIds, fe = X.shouldForwardProp, Ee = X.styledComponentId, Re = X.target, Se = function(F, p, te) {
        F === void 0 && (F = Jt);
        var C = Mt({}, p, { theme: F }), re = {};
        return te.forEach(function(J) {
          var K, z, ne, se = J;
          for (K in Zr(se) && (se = se(C)), se) C[K] = re[K] = K === "className" ? (z = re[K], ne = se[K], z && ne ? z + " " + ne : z || ne) : se[K];
        }), [C, re];
      }(ql(k, Kt(Ri), ze) || Jt, k, Te), Qe = Se[0], Ne = Se[1], xe = function(F, p, te, C) {
        var re = Fl(), J = jl(), K = p ? F.generateAndInjectStyles(Jt, re, J) : F.generateAndInjectStyles(te, re, J);
        return K;
      }(Ie, be, Qe), Fe = ue, Ge = Ne.$as || k.$as || Ne.as || k.as || Re, ve = Cn(Ge), D = Ne !== k ? Mt({}, k, {}, Ne) : k, A = {};
      for (var P in D) P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? A.as = D[P] : (fe ? fe(P, wo, Ge) : !ve || wo(P)) && (A[P] = D[P]));
      return k.style && Ne.style !== k.style && (A.style = Mt({}, k.style, {}, Ne.style)), A.className = Array.prototype.concat(ke, Ee, xe !== Ee ? xe : null, k.className, Ne.className).filter(Boolean).join(" "), A.ref = Fe, ri(Ge, A);
    }(I, U, Y, N);
  };
  return B.displayName = O, (I = et.forwardRef(B)).attrs = j, I.componentStyle = S, I.displayName = O, I.shouldForwardProp = G, I.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : On, I.styledComponentId = x, I.target = o ? e.target : e, I.withComponent = function(U) {
    var Y = t.componentId, X = function(ue, be) {
      if (ue == null) return {};
      var Te, Ie, ze = {}, ke = Object.keys(ue);
      for (Ie = 0; Ie < ke.length; Ie++) Te = ke[Ie], be.indexOf(Te) >= 0 || (ze[Te] = ue[Te]);
      return ze;
    }(t, ["componentId"]), k = Y && Y + "-" + (Cn(U) ? U : aa(To(U)));
    return Ai(U, Mt({}, X, { attrs: j, componentId: k }), a);
  }, Object.defineProperty(I, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = o ? Ei({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(I, "toString", { value: function() {
    return "." + I.styledComponentId;
  } }), c && gl(I, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), I;
}
var _t = function(e) {
  return function t(a, o, c) {
    if (c === void 0 && (c = Jt), !bi.isValidElementType(o)) return tn(1, String(o));
    var f = function() {
      return a(o, c, Vl.apply(void 0, arguments));
    };
    return f.withConfig = function(y) {
      return t(a, o, Mt({}, c, {}, y));
    }, f.attrs = function(y) {
      return t(a, o, Mt({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, f;
  }(Ai, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  _t[e] = _t(e);
});
_t.div`
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
i.arrayOf(
  i.shape({
    text: i.string.isRequired,
    targetIdName: i.string.isRequired,
    icon: i.arrayOf(i.string)
  })
).isRequired, i.string.isRequired, i.bool;
function $n(e) {
  var t = Object.entries(e).filter(function(a) {
    var o = a[1];
    return o != null;
  }).map(function(a) {
    var o = a[0], c = a[1];
    return "".concat(encodeURIComponent(o), "=").concat(encodeURIComponent(String(c)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Jl = /* @__PURE__ */ function() {
  var e = function(t, a) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, c) {
      o.__proto__ = c;
    } || function(o, c) {
      for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && (o[f] = c[f]);
    }, e(t, a);
  };
  return function(t, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    e(t, a);
    function o() {
      this.constructor = t;
    }
    t.prototype = a === null ? Object.create(a) : (o.prototype = a.prototype, new o());
  };
}(), fr = function() {
  return fr = Object.assign || function(e) {
    for (var t, a = 1, o = arguments.length; a < o; a++) {
      t = arguments[a];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, fr.apply(this, arguments);
}, Zl = function(e, t, a, o) {
  function c(f) {
    return f instanceof a ? f : new a(function(y) {
      y(f);
    });
  }
  return new (a || (a = Promise))(function(f, y) {
    function v(O) {
      try {
        g(o.next(O));
      } catch (x) {
        y(x);
      }
    }
    function b(O) {
      try {
        g(o.throw(O));
      } catch (x) {
        y(x);
      }
    }
    function g(O) {
      O.done ? f(O.value) : c(O.value).then(v, b);
    }
    g((o = o.apply(e, [])).next());
  });
}, Kl = function(e, t) {
  var a = { label: 0, sent: function() {
    if (f[0] & 1) throw f[1];
    return f[1];
  }, trys: [], ops: [] }, o, c, f, y;
  return y = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
  function v(g) {
    return function(O) {
      return b([g, O]);
    };
  }
  function b(g) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; a; ) try {
      if (o = 1, c && (f = g[0] & 2 ? c.return : g[0] ? c.throw || ((f = c.return) && f.call(c), 0) : c.next) && !(f = f.call(c, g[1])).done) return f;
      switch (c = 0, f && (g = [g[0] & 2, f.value]), g[0]) {
        case 0:
        case 1:
          f = g;
          break;
        case 4:
          return a.label++, { value: g[1], done: !1 };
        case 5:
          a.label++, c = g[1], g = [0];
          continue;
        case 7:
          g = a.ops.pop(), a.trys.pop();
          continue;
        default:
          if (f = a.trys, !(f = f.length > 0 && f[f.length - 1]) && (g[0] === 6 || g[0] === 2)) {
            a = 0;
            continue;
          }
          if (g[0] === 3 && (!f || g[1] > f[0] && g[1] < f[3])) {
            a.label = g[1];
            break;
          }
          if (g[0] === 6 && a.label < f[1]) {
            a.label = f[1], f = g;
            break;
          }
          if (f && a.label < f[2]) {
            a.label = f[2], a.ops.push(g);
            break;
          }
          f[2] && a.ops.pop(), a.trys.pop();
          continue;
      }
      g = t.call(e, a);
    } catch (O) {
      g = [6, O], c = 0;
    } finally {
      o = f = 0;
    }
    if (g[0] & 5) throw g[1];
    return { value: g[0] ? g[1] : void 0, done: !0 };
  }
}, Oi = function(e, t) {
  var a = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, o = Object.getOwnPropertySymbols(e); c < o.length; c++)
      t.indexOf(o[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[c]) && (a[o[c]] = e[o[c]]);
  return a;
}, ec = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, tc = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, rc = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function nc(e, t, a) {
  var o = t.height, c = t.width, f = Oi(t, ["height", "width"]), y = fr({ height: o, width: c, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, f), v = window.open(e, "", Object.keys(y).map(function(g) {
    return "".concat(g, "=").concat(y[g]);
  }).join(", "));
  if (a)
    var b = window.setInterval(function() {
      try {
        (v === null || v.closed) && (window.clearInterval(b), a(v));
      } catch (g) {
        console.error(g);
      }
    }, 1e3);
  return v;
}
var ac = (
  /** @class */
  function(e) {
    Jl(t, e);
    function t() {
      var a = e !== null && e.apply(this, arguments) || this;
      return a.openShareDialog = function(o) {
        var c = a.props, f = c.onShareWindowClose, y = c.windowHeight, v = y === void 0 ? 400 : y, b = c.windowPosition, g = b === void 0 ? "windowCenter" : b, O = c.windowWidth, x = O === void 0 ? 550 : O, j = fr({ height: v, width: x }, g === "windowCenter" ? tc(x, v) : rc(x, v));
        nc(o, j, f);
      }, a.handleClick = function(o) {
        return Zl(a, void 0, void 0, function() {
          var c, f, y, v, b, g, O, x, j, G;
          return Kl(this, function(I) {
            switch (I.label) {
              case 0:
                return c = this.props, f = c.beforeOnClick, y = c.disabled, v = c.networkLink, b = c.onClick, g = c.url, O = c.openShareDialogOnClick, x = c.opts, j = v(g, x), y ? [
                  2
                  /*return*/
                ] : (o.preventDefault(), f ? (G = f(), ec(G) ? [4, G] : [3, 2]) : [3, 2]);
              case 1:
                I.sent(), I.label = 2;
              case 2:
                return O && this.openShareDialog(j), b && b(o, j), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, a;
    }
    return t.prototype.render = function() {
      var a = this.props;
      a.beforeOnClick;
      var o = a.children, c = a.className, f = a.disabled, y = a.disabledStyle, v = a.forwardedRef;
      a.networkLink;
      var b = a.networkName;
      a.onShareWindowClose, a.openShareDialogOnClick, a.opts;
      var g = a.resetButtonStyle, O = a.style;
      a.url, a.windowHeight, a.windowPosition, a.windowWidth;
      var x = Oi(a, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), j = Cr("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!f,
        disabled: !!f
      }, c), G = fr(fr(g ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, O), f && y);
      return et.createElement("button", fr({}, x, { "aria-label": x["aria-label"] || b, className: j, onClick: this.handleClick, ref: v, style: G }), o);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(fs)
), Nn = function() {
  return Nn = Object.assign || function(e) {
    for (var t, a = 1, o = arguments.length; a < o; a++) {
      t = arguments[a];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Nn.apply(this, arguments);
};
function zn(e, t, a, o) {
  function c(f, y) {
    var v = a(f), b = Nn({}, f), g = Object.keys(v);
    return g.forEach(function(O) {
      delete b[O];
    }), et.createElement(ac, Nn({}, o, b, { forwardedRef: y, networkName: e, networkLink: t, opts: a(f) }));
  }
  return c.displayName = "ShareButton-".concat(e), ti(c);
}
function oc(e, t) {
  var a = t.subject, o = t.body, c = t.separator;
  return "mailto:" + $n({ subject: a, body: o ? o + c + e : e });
}
zn("email", oc, function(e) {
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
var ic = /* @__PURE__ */ function() {
  var e = function(t, a) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, c) {
      o.__proto__ = c;
    } || function(o, c) {
      for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && (o[f] = c[f]);
    }, e(t, a);
  };
  return function(t, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    e(t, a);
    function o() {
      this.constructor = t;
    }
    t.prototype = a === null ? Object.create(a) : (o.prototype = a.prototype, new o());
  };
}(), sc = (
  /** @class */
  function(e) {
    ic(t, e);
    function t(a) {
      var o = e.call(this, a) || this;
      return o.name = "AssertionError", o;
    }
    return t;
  }(Error)
);
function Xr(e, t) {
  if (!e)
    throw new sc(t);
}
function lc(e, t) {
  var a = t.quote, o = t.hashtag;
  return Xr(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + $n({
    u: e,
    quote: a,
    hashtag: o
  });
}
zn("facebook", lc, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function cc(e, t) {
  var a = t.title, o = t.summary, c = t.source;
  return Xr(e, "linkedin.url"), "https://linkedin.com/shareArticle" + $n({ url: e, mini: "true", title: a, summary: o, source: c });
}
zn("linkedin", cc, function(e) {
  var t = e.title, a = e.summary, o = e.source;
  return { title: t, summary: a, source: o };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function uc(e, t) {
  var a = t.title, o = t.via, c = t.hashtags, f = c === void 0 ? [] : c, y = t.related, v = y === void 0 ? [] : y;
  return Xr(e, "twitter.url"), Xr(Array.isArray(f), "twitter.hashtags is not an array"), Xr(Array.isArray(v), "twitter.related is not an array"), "https://twitter.com/share" + $n({
    url: e,
    text: a,
    via: o,
    hashtags: f.length > 0 ? f.join(",") : void 0,
    related: v.length > 0 ? v.join(",") : void 0
  });
}
zn("twitter", uc, function(e) {
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
function ma(e) {
  "@babel/helpers - typeof";
  return ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ma(e);
}
var dc = (typeof window > "u" ? "undefined" : ma(window)) === "object" && window.Element || function() {
};
function fc(e, t, a) {
  if (!(e[t] instanceof dc))
    return new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Expected prop to be an instance of Element. Validation failed.");
}
i.oneOfType([i.string, i.func, fc, i.shape({
  current: i.any
})]);
i.oneOfType([i.func, i.string, i.shape({
  $$typeof: i.symbol,
  render: i.func
}), i.arrayOf(i.oneOfType([i.func, i.string, i.shape({
  $$typeof: i.symbol,
  render: i.func
})]))]);
i.string, i.node, i.string, i.object, i.string;
i.bool, i.string, i.object;
_t.div`
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
_t.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`;
i.oneOf(["event", "news"]), i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string, i.string.isRequired, i.string, i.string, i.arrayOf(
  i.shape({
    title: i.string,
    url: i.string,
    active: i.bool
  })
), i.string, i.string, i.string, i.string, i.string, i.string;
i.oneOf(["white", "gray", "black"]), i.arrayOf(i.string), i.oneOfType([
  i.object,
  i.func,
  i.string
]), i.func, i.string, i.oneOf(["large", "small"]), i.string;
const pc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Aa = ({
  label: e,
  cardTitle: t,
  gaData: a,
  ariaLabel: o,
  color: c,
  disabled: f,
  element: y = "button",
  innerRef: v,
  href: b,
  onClick: g,
  ...O
}) => {
  const x = Cr("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: f
  });
  let j = y;
  return b && y === "button" && (j = "a"), /* @__PURE__ */ V.jsx(
    en,
    {
      gaData: {
        ...pc,
        section: t,
        // @deprecated - remove at some point
        ...a,
        text: e
      },
      children: /* @__PURE__ */ V.jsx(
        j,
        {
          type: j === "button" && g ? "button" : void 0,
          ...O,
          className: x,
          href: b,
          ref: v,
          onClick: g,
          "aria-label": o,
          children: e
        }
      )
    }
  );
};
Aa.propTypes = {
  /**
    Button tag label
  */
  label: i.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: i.string,
  /**
   * Google Analytics event data
   */
  gaData: xa,
  /**
    ARIA label for accessibility
  */
  ariaLabel: i.string,
  /**
    Button background color
  */
  color: i.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: i.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: i.oneOfType([
    i.func,
    i.string,
    i.shape({ $$typeof: i.symbol, render: i.func }),
    i.arrayOf(
      i.oneOfType([
        i.func,
        i.string,
        i.shape({ $$typeof: i.symbol, render: i.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: i.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: i.oneOfType([
    i.object,
    i.func,
    i.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: i.func
};
Aa.defaultProps = {
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
const Ii = ({
  src: e,
  alt: t,
  cssClasses: a,
  loading: o = "lazy",
  decoding: c = "async",
  dataTestId: f,
  fetchPriority: y = "auto",
  width: v,
  height: b,
  cardLink: g,
  title: O,
  caption: x,
  captionTitle: j,
  border: G,
  dropShadow: I
}) => {
  const S = {
    src: e,
    alt: t,
    loading: o,
    decoding: c,
    fetchpriority: y,
    // React attribute bug workaround
    ...(a == null ? void 0 : a.length) > 0 && { className: _s(a) },
    ...f && { "data-testid": f },
    ...v && { width: v },
    ...b && { height: b }
  }, N = Cr("uds-img", {
    borderless: !G,
    "uds-img-drop-shadow": I
  }), B = (Y) => {
    const X = Y ? `${S.className} ${Y}` : S.className;
    return g ? /* @__PURE__ */ V.jsxs("a", { href: g, children: [
      /* @__PURE__ */ V.jsx("img", { ...S, className: X }),
      /* @__PURE__ */ V.jsx("span", { className: "visually-hidden", children: O })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ V.jsx("img", { ...S, className: X })
    );
  }, U = () => /* @__PURE__ */ V.jsx("div", { className: N, children: /* @__PURE__ */ V.jsxs("figure", { className: "figure uds-figure", children: [
    B(),
    x && /* @__PURE__ */ V.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      j && /* @__PURE__ */ V.jsx("h3", { children: j }),
      /* @__PURE__ */ V.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Sr(x)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ V.jsx(V.Fragment, { children: x ? U() : B(N) });
};
Ii.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: i.string.isRequired,
  /**
   * Image alt text
   */
  alt: i.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: i.arrayOf(i.string),
  /**
   * Image loading mode
   */
  loading: i.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: i.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: i.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: i.string,
  /**
   * Height of the image
   */
  height: i.string,
  dataTestId: i.string,
  cardLink: i.string,
  title: i.string,
  caption: i.string,
  captionTitle: i.string,
  border: i.bool,
  dropShadow: i.bool
};
const hc = _t.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, gc = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), mc = (e) => !e.startsWith("https://") && !e.startsWith("http://") && gc(e) ? `mailto:${e}` : e, yc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Lt = ({
  type: e,
  width: t,
  horizontal: a,
  image: o,
  imageAltText: c,
  title: f,
  icon: y,
  body: v,
  eventFormat: b,
  eventLocation: g,
  eventTime: O,
  buttons: x,
  linkLabel: j,
  linkUrl: G,
  tags: I,
  showBorders: S,
  cardLink: N
}) => /* @__PURE__ */ V.jsx(
  Oa,
  {
    type: e,
    width: t,
    horizontal: a,
    image: o,
    imageAltText: c,
    title: f,
    icon: y,
    body: v,
    eventFormat: b,
    eventLocation: g,
    eventTime: O,
    buttons: x,
    linkLabel: j,
    linkUrl: G,
    tags: I,
    showBorders: S,
    cardLink: N
  }
);
Lt.propTypes = {
  /**
   * Type of card
   */
  type: i.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: i.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: i.bool,
  /**
   * Card title
   */
  title: i.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: i.arrayOf(i.string),
  /**
   * Card body content
   */
  body: i.string,
  /**
   * Event info format
   */
  eventFormat: i.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: i.string,
  /**
   * Event start time
   */
  eventTime: i.string,
  /**
   * Card header image
   */
  image: i.string,
  /**
   * Card header image alt text
   */
  imageAltText: i.string,
  /**
   * Buttons
   */
  buttons: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: i.arrayOf(i.string),
      href: i.string,
      label: i.string,
      onClick: i.func,
      size: i.oneOf(["default", "small", "xsmall"]),
      target: i.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: i.string,
  linkUrl: i.string,
  /**
   * Tags
   */
  tags: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["white", "gray", "dark"]),
      href: i.string,
      label: i.string,
      onClick: i.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: i.bool,
  /**
   * Card link
   */
  cardLink: i.string
};
Lt.defaultProps = {
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
const Oa = ({
  type: e,
  width: t,
  horizontal: a,
  image: o,
  imageAltText: c,
  title: f,
  icon: y,
  body: v,
  eventFormat: b,
  eventLocation: g,
  eventTime: O,
  buttons: x,
  linkLabel: j,
  linkUrl: G,
  tags: I,
  showBorders: S,
  cardLink: N
}) => {
  const B = Cr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": a,
    borderless: !S
  });
  return /* @__PURE__ */ V.jsx(V.Fragment, { children: /* @__PURE__ */ V.jsxs(hc, { className: B, "data-testid": "card-container", children: [
    !!o && /* @__PURE__ */ V.jsx(
      Ii,
      {
        src: o,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: N,
        title: f
      }
    ),
    !o && y && /* @__PURE__ */ V.jsx(
      "i",
      {
        className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    a ? /* @__PURE__ */ V.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ V.jsx(
      Pn,
      {
        type: e,
        body: v,
        eventFormat: b,
        eventLocation: g,
        eventTime: O,
        title: f,
        buttons: x,
        linkLabel: j,
        linkUrl: G,
        tags: I,
        cardLink: N
      }
    ) }) : /* @__PURE__ */ V.jsx(
      Pn,
      {
        type: e,
        body: v,
        eventFormat: b,
        eventLocation: g,
        eventTime: O,
        title: f,
        buttons: x,
        linkLabel: j,
        linkUrl: G,
        tags: I,
        cardLink: N
      }
    )
  ] }) });
};
Oa.propTypes = {
  type: i.oneOf(["default", "degree", "event", "news", "story"]),
  width: i.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: i.bool,
  title: i.string.isRequired,
  icon: i.arrayOf(i.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: i.string,
  eventFormat: i.oneOf(["stack", "inline"]),
  eventLocation: i.string,
  eventTime: i.string,
  image: i.string,
  imageAltText: i.string,
  buttons: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: i.arrayOf(i.string),
      href: i.string,
      label: i.string,
      onClick: i.func,
      size: i.oneOf(["default", "small", "xsmall"]),
      target: i.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: i.string,
  linkUrl: i.string,
  tags: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["white", "gray", "dark"]),
      href: i.string,
      label: i.string,
      onClick: i.func
    })
  ),
  showBorders: i.bool,
  cardLink: i.string
};
Oa.defaultProps = {
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
const Pn = ({
  type: e,
  body: t,
  eventFormat: a,
  eventLocation: o,
  eventTime: c,
  title: f,
  buttons: y,
  linkLabel: v,
  linkUrl: b,
  tags: g,
  cardLink: O
}) => /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
  !!f && /* @__PURE__ */ V.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ V.jsx("h3", { className: "card-title", children: O ? /* @__PURE__ */ V.jsx("a", { href: O, children: f }) : f }) }),
  !!t && /* @__PURE__ */ V.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ V.jsx("div", { dangerouslySetInnerHTML: Sr(t) }) }),
  e === "event" && (c || o) && /* @__PURE__ */ V.jsx(
    Ia,
    {
      eventFormat: a,
      eventTime: c,
      eventLocation: o
    }
  ),
  y && /* @__PURE__ */ V.jsx("div", { className: "card-buttons", children: y.map((x) => /* @__PURE__ */ V.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ V.jsx(
        Ca,
        {
          ariaLabel: x.ariaLabel,
          color: x.color,
          icon: x.icon,
          href: x.href,
          label: x.label,
          onClick: x.onClick,
          size: x.size,
          target: x.target,
          cardTitle: f
        }
      )
    },
    `${x.label}-${x.href}`
  )) }),
  b && v && /* @__PURE__ */ V.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ V.jsx(
    en,
    {
      gaData: {
        ...yc,
        section: f,
        text: v
      },
      children: /* @__PURE__ */ V.jsx("a", { href: mc(b), children: v })
    }
  ) }),
  g && /* @__PURE__ */ V.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: g.map((x) => (
    // @ts-ignore
    /* @__PURE__ */ V.jsx(
      Aa,
      {
        ariaLabel: x.ariaLabel,
        color: x.color,
        href: x.href,
        label: x.label,
        onClick: x.onClick,
        cardTitle: f
      },
      `${x.label}-${x.href}`
    )
  )) })
] });
Pn.propTypes = {
  type: i.oneOf(["default", "degree", "event", "news", "story"]),
  body: i.string,
  eventFormat: i.oneOf(["stack", "inline"]),
  eventLocation: i.string,
  eventTime: i.string,
  title: i.string.isRequired,
  buttons: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: i.arrayOf(i.string),
      href: i.string,
      label: i.string,
      onClick: i.func,
      size: i.oneOf(["default", "small", "xsmall"]),
      target: i.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: i.string,
  linkUrl: i.string,
  tags: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["white", "gray", "dark"]),
      href: i.string,
      label: i.string,
      onClick: i.func
    })
  ),
  cardLink: i.string
};
Pn.defaultProps = {
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
const Ia = ({ eventFormat: e, eventTime: t, eventLocation: a }) => e === "inline" ? /* @__PURE__ */ V.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ V.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ V.jsx("div", { dangerouslySetInnerHTML: Sr(t) })
  ] }),
  a && /* @__PURE__ */ V.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ V.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Sr(a)
      }
    )
  ] })
] }) : /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
  t && /* @__PURE__ */ V.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ V.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ V.jsx("div", { dangerouslySetInnerHTML: Sr(t) })
  ] }) }),
  a && /* @__PURE__ */ V.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ V.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ V.jsx("span", { children: /* @__PURE__ */ V.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Sr(a)
      }
    ) })
  ] }) })
] });
Ia.propTypes = {
  eventFormat: i.oneOf(["stack", "inline"]),
  eventLocation: i.string,
  eventTime: i.string
};
Ia.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const bc = _t.div`
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
`, vc = () => /* @__PURE__ */ V.jsxs(bc, { children: [
  /* @__PURE__ */ V.jsx("div", {}),
  /* @__PURE__ */ V.jsx("div", {}),
  /* @__PURE__ */ V.jsx("div", {}),
  /* @__PURE__ */ V.jsx("div", {})
] }), wc = _t.section``, Na = ps(null), Ni = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: a,
  renderHeader: o,
  renderBody: c,
  dataTransformer: f,
  dataFilter: y,
  maxItems: v
}) => {
  const [{ data: b, loading: g, error: O }, x] = Cs(), [j, G] = Gr([]), I = { ...e.dataSource, ...t };
  return Jr(() => {
    x(I == null ? void 0 : I.url);
  }, [I == null ? void 0 : I.url]), Jr(() => {
    const S = b == null ? void 0 : b.nodes.map(f), N = S == null ? void 0 : S.filter(
      (B) => y(B, t == null ? void 0 : t.filters)
    );
    G(v ? N == null ? void 0 : N.slice(0, v) : N);
  }, [b]), // Init the context to be used on its childrens
  /* @__PURE__ */ V.jsx(Na.Provider, { value: { feeds: j }, children: /* @__PURE__ */ V.jsxs(wc, { children: [
    o,
    O ? /* @__PURE__ */ V.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
      g && !(j != null && j.length) && /* @__PURE__ */ V.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ V.jsx(vc, {}) }),
      j != null && j.length ? c : !g && /* @__PURE__ */ V.jsx("p", { className: "text-center", children: a })
    ] })
  ] }) });
};
Ni.propTypes = {
  renderHeader: i.element,
  renderBody: i.element,
  maxItems: i.number,
  dataTransformer: i.func,
  dataFilter: i.func,
  noFeedText: i.string
};
const Pa = i.shape({
  color: i.oneOf(["white", "dark"]),
  text: i.string
}), Da = i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  text: i.string
});
i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  text: i.string,
  size: i.string
});
const Pi = i.shape({
  url: i.string,
  filters: i.string
}), Sc = i.shape({
  header: Pa,
  ctaButton: Da,
  dataSource: Pi,
  maxItems: i.number
}), kc = _t.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Di = ({
  defaultProps: e,
  header: t,
  ctaButton: a
}) => {
  const o = { ...e.header, ...t }, c = { ...e.ctaButton, ...a };
  return /* @__PURE__ */ V.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ V.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ V.jsx("h2", { className: `text-${o.color}`, children: o.text }) }),
        /* @__PURE__ */ V.jsx(kc, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ V.jsx(
          en,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: o.text,
              text: c.text
            },
            children: /* @__PURE__ */ V.jsx("a", { className: `btn btn-${c.color}`, href: c.url, children: c.text })
          }
        ) })
      ]
    }
  );
};
Di.propTypes = {
  defaultProps: Sc,
  header: Pa,
  ctaButton: Da
};
const Li = ({ children: e }) => /* @__PURE__ */ V.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ V.jsx("div", { className: "col", children: e }) });
Li.propTypes = {
  children: i.element
};
_t.img`
  width: 100%;
`;
i.oneOf(["heading-hero", "story-hero"]), i.arrayOf(Zn), i.string;
i.bool, i.bool, i.bool, i.bool, i.string, i.func, i.node, i.bool, i.string, i.bool;
i.oneOf(["default", "bordered"]).isRequired, i.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, i.number, i.number, i.func.isRequired;
i.oneOf(["small", "large"]), i.string.isRequired, i.string.isRequired, i.string;
i.oneOf(["small", "large"]).isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string, i.string;
_t.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
i.object, i.bool, i.bool, i.func.isRequired;
const xc = ti(function(e, t) {
  const {
    id: a,
    selected: o,
    title: c,
    selectTab: f,
    leftKeyPressed: y,
    rightKeyPressed: v,
    icon: b,
    gaData: g
  } = e, O = hs(null);
  gs(
    t,
    () => ({
      focus() {
        O.current.focus();
      },
      scrollIntoView() {
        var j, G, I, S, N, B, U;
        const Y = ((j = O.current) == null ? void 0 : j.offsetWidth) / 2 + O.current.offsetLeft, X = ((I = (G = O.current) == null ? void 0 : G.offsetParent) == null ? void 0 : I.scrollLeft) + ((N = (S = O.current) == null ? void 0 : S.offsetParent) == null ? void 0 : N.offsetWidth) / 2;
        (U = (B = O.current) == null ? void 0 : B.offsetParent) == null || U.scrollBy({
          left: Y - X
        });
      }
    }),
    []
  );
  const x = (j) => {
    j.keyCode === 37 ? (j.preventDefault(), y()) : j.keyCode === 39 && (j.preventDefault(), v());
  };
  return /* @__PURE__ */ V.jsx(en, { gaData: { ...g, text: c }, children: /* @__PURE__ */ V.jsxs(
    "a",
    {
      ref: O,
      className: `nav-item nav-link ${o ? "active" : ""}`,
      id: a,
      href: `#nav-${a}`,
      role: "tab",
      "aria-controls": `nav-${a}`,
      "aria-selected": o,
      onClick: (j) => f(j, a, c),
      onKeyDown: x,
      tabIndex: o ? "" : "-1",
      children: [
        c,
        " ",
        b && /* @__PURE__ */ V.jsx("i", { className: `${b == null ? void 0 : b[0]} fa-${b == null ? void 0 : b[1]} me-1` })
      ]
    }
  ) });
});
xc.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: i.object,
  id: i.string.isRequired,
  selected: i.bool.isRequired,
  title: i.string.isRequired,
  selectTab: i.func.isRequired,
  leftKeyPressed: i.func.isRequired,
  rightKeyPressed: i.func.isRequired,
  icon: i.arrayOf(i.string)
};
i.string.isRequired, i.string, i.bool, i.oneOfType([i.array, i.element]);
i.string, i.arrayOf(i.element).isRequired, i.string, i.func;
i.shape({
  title: i.string,
  content: i.string,
  cite: i.shape({
    name: i.string,
    description: i.string
  })
}).isRequired, i.string, i.string, i.shape({
  containerCssClass: i.arrayOf(i.string),
  titleCssClass: i.arrayOf(i.string),
  contentCssClass: i.arrayOf(i.string)
});
i.oneOf(["video", "youtube"]), i.string, i.string, i.string, i.string, i.string, i.bool;
i.oneOfType([
  i.element,
  i.arrayOf(i.element)
]).isRequired;
i.number.isRequired;
i.arrayOf(i.string).isRequired, i.func;
i.func;
i.func;
i.arrayOf(i.element);
i.element, i.func;
i.arrayOf(i.object);
var Cc = !1;
try {
  var No = Object.defineProperty({}, "passive", {
    get: function() {
      Cc = !0;
    }
  });
  window.addEventListener("testPassive", null, No), window.removeEventListener("testPassive", null, No);
} catch {
}
i.number, i.string, i.string, i.arrayOf(i.object).isRequired, i.string, i.func, i.string, i.string, i.func, i.bool, i.bool, i.bool, i.bool, i.bool, i.bool, i.bool, i.bool;
i.string.isRequired, i.arrayOf(
  i.shape({
    title: i.string.isRequired,
    content: i.string,
    eventLocation: i.string,
    eventTime: i.string,
    image: i.string,
    imageAltText: i.string,
    buttons: Lt.propTypes.buttons,
    linkLabel: i.string,
    linkUrl: i.string,
    tags: Lt.propTypes.tags
  })
).isRequired, Lt.propTypes.type, Lt.propTypes.eventFormat, Lt.propTypes.horizontal, i.string, i.string, i.bool;
i.number.isRequired, i.arrayOf(i.object).isRequired, i.string, i.string, i.bool;
const Dn = {
  imageItems: i.arrayOf(
    i.shape({
      id: i.number,
      imageSource: i.string,
      thumbnailSource: i.string,
      imageAltText: i.string,
      content: i.oneOfType([i.string, i.element])
    })
  ),
  hasContent: i.bool
};
i.string, Dn.imageItems, Dn.hasContent;
Dn.imageItems.isRequired, Dn.hasContent, i.string, i.string, i.bool;
i.arrayOf(
  i.shape({
    title: i.string,
    content: i.string,
    cite: i.shape({
      name: i.string,
      description: i.string
    })
  })
).isRequired, i.shape({
  containerCssClass: i.arrayOf(i.string),
  titleCssClass: i.arrayOf(i.string),
  contentCssClass: i.arrayOf(i.string)
}), i.string, i.string, i.bool, i.bool, i.bool;
var Po = ni;
Po.createRoot, Po.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
var Mi = { exports: {} }, ia, Do;
function _c() {
  if (Do) return ia;
  Do = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ia = e, ia;
}
var sa, Lo;
function Tc() {
  if (Lo) return sa;
  Lo = 1;
  var e = _c();
  function t() {
  }
  function a() {
  }
  return a.resetWarningCache = t, sa = function() {
    function o(y, v, b, g, O, x) {
      if (x !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
      }
    }
    o.isRequired = o;
    function c() {
      return o;
    }
    var f = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: c,
      element: o,
      elementType: o,
      instanceOf: c,
      node: o,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: a,
      resetWarningCache: t
    };
    return f.PropTypes = f, f;
  }, sa;
}
Mi.exports = Tc()();
var Ec = Mi.exports;
const ht = /* @__PURE__ */ ai(Ec), Mo = {
  header: {
    color: "dark",
    text: "Events list"
  },
  ctaButton: {
    color: "gold",
    text: "Click to see more events",
    url: "https://asuevents.asu.edu/"
  },
  dataSource: {
    url: "https://asuevents.asu.edu/feed-json/"
  }
}, Fo = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], jo = (e) => e.toLowerCase().split(" ").join("_"), Rc = (e, t) => {
  if (!t) return !0;
  const a = t.split(",");
  for (let o = 0; o < a.length; o += 1) {
    const c = jo(a[o]);
    for (let f = 0; f < Fo.length; f += 1) {
      const y = Fo[f];
      if (jo(e[y] || "").includes(c)) return !0;
    }
  }
  return !1;
}, Ac = (e) => ({
  id: e.node.nid,
  title: e.node.title,
  imageUrl: e.node.image_url,
  location: (e.node.campus || "").trim(),
  interests: e.node.interests,
  startDate: e.node.very_start_date,
  endDate: e.node.very_end_date,
  alias: e.node.alias,
  // Also used for card link in title of card
  audiences: e.node.audiences,
  eventUnits: e.node.event_units,
  eventTopics: e.node.event_topics,
  eventTypes: e.node.event_types,
  collegeUnit: e.node.college_unit,
  eventButtonUrl: e.node.ticketing_rsvp_url,
  eventButtonText: e.node.ticketing_rsvp_txt
}), La = ({ children: e, header: t, ctaButton: a, dataSource: o, maxItems: c }) => (
  // Calling the unity-react-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the unity-react-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ gt.jsx(
    Ni,
    {
      renderHeader: t && a ? /* @__PURE__ */ gt.jsx(
        Di,
        {
          header: t,
          ctaButton: a,
          defaultProps: Mo
        }
      ) : null,
      renderBody: /* @__PURE__ */ gt.jsx(Li, { children: e }),
      dataTransformer: Ac,
      dataFilter: Rc,
      dataSource: o,
      defaultProps: Mo,
      noFeedText: "No events to show.",
      maxItems: c
    }
  )
);
La.propTypes = {
  header: Pa,
  ctaButton: Da,
  dataSource: Pi,
  maxItems: ht.number,
  children: ht.element
};
const Oc = ht.shape({
  color: ht.oneOf(["white", "dark"]),
  text: ht.string
}), Ic = ht.shape({
  color: ht.oneOf(["gold", "maroon", "gray", "dark"]),
  text: ht.string,
  url: ht.string
}), Nc = ht.shape({
  url: ht.string.isRequired,
  filters: ht.string
}).isRequired, Fi = {
  header: Oc,
  ctaButton: Ic,
  dataSource: Nc,
  maxItems: ht.number
}, Pc = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), $o = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), ya = (e) => {
  let t = e.split("T");
  return t = t.length > 1 ? t.join("T") : `${t[0].split(":")[0]}T00:00:00Z`, t;
}, zo = (e) => {
  let t = e.getHours(), a = e.getMinutes();
  const o = t >= 12 ? "p.m." : "a.m.";
  return t %= 12, t = t || 12, a = a < 10 ? `0${a}` : a, `${t}:${a} ${o}`;
}, ji = (e, t) => {
  const a = ya(e), o = ya(t);
  let c = $o(new Date(a)), f = $o(new Date(o));
  return c = zo(new Date(c)), f = zo(new Date(f)), e === t ? c : `${c} - ${f}`;
}, Ln = (e, t) => {
  const a = ya(e);
  return {
    ISO: a.split("T")[0],
    COMPLETE: Pc(new Date(a))
  }[t];
};
var $i = { exports: {} }, Le = {};
var Bo;
function Dc() {
  if (Bo) return Le;
  Bo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), y = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), G = Symbol.for("react.client.reference");
  function I(S) {
    if (typeof S == "object" && S !== null) {
      var N = S.$$typeof;
      switch (N) {
        case e:
          switch (S = S.type, S) {
            case a:
            case c:
            case o:
            case b:
            case g:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case y:
                case v:
                case x:
                case O:
                  return S;
                case f:
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
  return Le.ContextConsumer = f, Le.ContextProvider = y, Le.Element = e, Le.ForwardRef = v, Le.Fragment = a, Le.Lazy = x, Le.Memo = O, Le.Portal = t, Le.Profiler = c, Le.StrictMode = o, Le.Suspense = b, Le.SuspenseList = g, Le.isContextConsumer = function(S) {
    return I(S) === f;
  }, Le.isContextProvider = function(S) {
    return I(S) === y;
  }, Le.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Le.isForwardRef = function(S) {
    return I(S) === v;
  }, Le.isFragment = function(S) {
    return I(S) === a;
  }, Le.isLazy = function(S) {
    return I(S) === x;
  }, Le.isMemo = function(S) {
    return I(S) === O;
  }, Le.isPortal = function(S) {
    return I(S) === t;
  }, Le.isProfiler = function(S) {
    return I(S) === c;
  }, Le.isStrictMode = function(S) {
    return I(S) === o;
  }, Le.isSuspense = function(S) {
    return I(S) === b;
  }, Le.isSuspenseList = function(S) {
    return I(S) === g;
  }, Le.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === a || S === c || S === o || S === b || S === g || S === j || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === O || S.$$typeof === y || S.$$typeof === f || S.$$typeof === v || S.$$typeof === G || S.getModuleId !== void 0);
  }, Le.typeOf = I, Le;
}
$i.exports = Dc();
var zi = $i.exports;
function Lc(e) {
  function t(D, A, P, F, p) {
    for (var te = 0, C = 0, re = 0, J = 0, K, z, ne = 0, se = 0, Z, pe = Z = K = 0, ee = 0, le = 0, We = 0, de = 0, Je = P.length, Ve = Je - 1, he, $ = "", ae = "", Xe = "", at = "", Me; ee < Je; ) {
      if (z = P.charCodeAt(ee), ee === Ve && C + J + re + te !== 0 && (C !== 0 && (z = C === 47 ? 10 : 47), J = re = te = 0, Je++, Ve++), C + J + re + te === 0) {
        if (ee === Ve && (0 < le && ($ = $.replace(j, "")), 0 < $.trim().length)) {
          switch (z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += P.charAt(ee);
          }
          z = 59;
        }
        switch (z) {
          case 123:
            for ($ = $.trim(), K = $.charCodeAt(0), Z = 1, de = ++ee; ee < Je; ) {
              switch (z = P.charCodeAt(ee)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (z = P.charCodeAt(ee + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (pe = ee + 1; pe < Ve; ++pe)
                          switch (P.charCodeAt(pe)) {
                            case 47:
                              if (z === 42 && P.charCodeAt(pe - 1) === 42 && ee + 2 !== pe) {
                                ee = pe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (z === 47) {
                                ee = pe + 1;
                                break e;
                              }
                          }
                        ee = pe;
                      }
                  }
                  break;
                case 91:
                  z++;
                case 40:
                  z++;
                case 34:
                case 39:
                  for (; ee++ < Ve && P.charCodeAt(ee) !== z; )
                    ;
              }
              if (Z === 0) break;
              ee++;
            }
            switch (Z = P.substring(de, ee), K === 0 && (K = ($ = $.replace(x, "").trim()).charCodeAt(0)), K) {
              case 64:
                switch (0 < le && ($ = $.replace(j, "")), z = $.charCodeAt(1), z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = A;
                    break;
                  default:
                    le = Qe;
                }
                if (Z = t(A, le, Z, z, p + 1), de = Z.length, 0 < xe && (le = a(Qe, $, We), Me = v(3, Z, le, A, Ee, fe, de, z, p, F), $ = le.join(""), Me !== void 0 && (de = (Z = Me.trim()).length) === 0 && (z = 0, Z = "")), 0 < de) switch (z) {
                  case 115:
                    $ = $.replace(ue, y);
                  case 100:
                  case 109:
                  case 45:
                    Z = $ + "{" + Z + "}";
                    break;
                  case 107:
                    $ = $.replace(U, "$1 $2"), Z = $ + "{" + Z + "}", Z = Se === 1 || Se === 2 && f("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                    break;
                  default:
                    Z = $ + Z, F === 112 && (Z = (ae += Z, ""));
                }
                else Z = "";
                break;
              default:
                Z = t(A, a(A, $, We), Z, F, p + 1);
            }
            Xe += Z, Z = We = le = pe = K = 0, $ = "", z = P.charCodeAt(++ee);
            break;
          case 125:
          case 59:
            if ($ = (0 < le ? $.replace(j, "") : $).trim(), 1 < (de = $.length)) switch (pe === 0 && (K = $.charCodeAt(0), K === 45 || 96 < K && 123 > K) && (de = ($ = $.replace(" ", ":")).length), 0 < xe && (Me = v(1, $, A, D, Ee, fe, ae.length, F, p, F)) !== void 0 && (de = ($ = Me.trim()).length) === 0 && ($ = "\0\0"), K = $.charCodeAt(0), z = $.charCodeAt(1), K) {
              case 0:
                break;
              case 64:
                if (z === 105 || z === 99) {
                  at += $ + P.charAt(ee);
                  break;
                }
              default:
                $.charCodeAt(de - 1) !== 58 && (ae += c($, K, z, $.charCodeAt(2)));
            }
            We = le = pe = K = 0, $ = "", z = P.charCodeAt(++ee);
        }
      }
      switch (z) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + K === 0 && F !== 107 && 0 < $.length && (le = 1, $ += "\0"), 0 < xe * Ge && v(0, $, A, D, Ee, fe, ae.length, F, p, F), fe = 1, Ee++;
          break;
        case 59:
        case 125:
          if (C + J + re + te === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, he = P.charAt(ee), z) {
            case 9:
            case 32:
              if (J + te + C === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  z !== 32 && (he = " ");
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
              J + C + te === 0 && (le = We = 1, he = "\f" + he);
              break;
            case 108:
              if (J + C + te + Re === 0 && 0 < pe) switch (ee - pe) {
                case 2:
                  ne === 112 && P.charCodeAt(ee - 3) === 58 && (Re = ne);
                case 8:
                  se === 111 && (Re = se);
              }
              break;
            case 58:
              J + C + te === 0 && (pe = ee);
              break;
            case 44:
              C + re + J + te === 0 && (le = 1, he += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (J = J === z ? 0 : J === 0 ? z : J);
              break;
            case 91:
              J + C + re === 0 && te++;
              break;
            case 93:
              J + C + re === 0 && te--;
              break;
            case 41:
              J + C + te === 0 && re--;
              break;
            case 40:
              if (J + C + te === 0) {
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
              C + re + J + te + pe + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + te + re)) switch (C) {
                case 0:
                  switch (2 * z + 3 * P.charCodeAt(ee + 1)) {
                    case 235:
                      C = 47;
                      break;
                    case 220:
                      de = ee, C = 42;
                  }
                  break;
                case 42:
                  z === 47 && ne === 42 && de + 2 !== ee && (P.charCodeAt(de + 2) === 33 && (ae += P.substring(de, ee + 1)), he = "", C = 0);
              }
          }
          C === 0 && ($ += he);
      }
      se = ne, ne = z, ee++;
    }
    if (de = ae.length, 0 < de) {
      if (le = A, 0 < xe && (Me = v(2, ae, le, D, Ee, fe, de, F, p, F), Me !== void 0 && (ae = Me).length === 0)) return at + ae + Xe;
      if (ae = le.join(",") + "{" + ae + "}", Se * Re !== 0) {
        switch (Se !== 2 || f(ae, 2) || (Re = 0), Re) {
          case 111:
            ae = ae.replace(X, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(Y, "::-webkit-input-$1") + ae.replace(Y, "::-moz-$1") + ae.replace(Y, ":-ms-input-$1") + ae;
        }
        Re = 0;
      }
    }
    return at + ae + Xe;
  }
  function a(D, A, P) {
    var F = A.trim().split(N);
    A = F;
    var p = F.length, te = D.length;
    switch (te) {
      case 0:
      case 1:
        var C = 0;
        for (D = te === 0 ? "" : D[0] + " "; C < p; ++C)
          A[C] = o(D, A[C], P).trim();
        break;
      default:
        var re = C = 0;
        for (A = []; C < p; ++C)
          for (var J = 0; J < te; ++J)
            A[re++] = o(D[J] + " ", F[C], P).trim();
    }
    return A;
  }
  function o(D, A, P) {
    var F = A.charCodeAt(0);
    switch (33 > F && (F = (A = A.trim()).charCodeAt(0)), F) {
      case 38:
        return A.replace(B, "$1" + D.trim());
      case 58:
        return D.trim() + A.replace(B, "$1" + D.trim());
      default:
        if (0 < 1 * P && 0 < A.indexOf("\f")) return A.replace(B, (D.charCodeAt(0) === 58 ? "" : "$1") + D.trim());
    }
    return D + A;
  }
  function c(D, A, P, F) {
    var p = D + ";", te = 2 * A + 3 * P + 4 * F;
    if (te === 944) {
      D = p.indexOf(":", 9) + 1;
      var C = p.substring(D, p.length - 1).trim();
      return C = p.substring(0, D).trim() + C + ";", Se === 1 || Se === 2 && f(C, 1) ? "-webkit-" + C + C : C;
    }
    if (Se === 0 || Se === 2 && !f(p, 1)) return p;
    switch (te) {
      case 1015:
        return p.charCodeAt(10) === 97 ? "-webkit-" + p + p : p;
      case 951:
        return p.charCodeAt(3) === 116 ? "-webkit-" + p + p : p;
      case 963:
        return p.charCodeAt(5) === 110 ? "-webkit-" + p + p : p;
      case 1009:
        if (p.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + p + p;
      case 978:
        return "-webkit-" + p + "-moz-" + p + p;
      case 1019:
      case 983:
        return "-webkit-" + p + "-moz-" + p + "-ms-" + p + p;
      case 883:
        if (p.charCodeAt(8) === 45) return "-webkit-" + p + p;
        if (0 < p.indexOf("image-set(", 11)) return p.replace(ke, "$1-webkit-$2") + p;
        break;
      case 932:
        if (p.charCodeAt(4) === 45) switch (p.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + p.replace("-grow", "") + "-webkit-" + p + "-ms-" + p.replace("grow", "positive") + p;
          case 115:
            return "-webkit-" + p + "-ms-" + p.replace("shrink", "negative") + p;
          case 98:
            return "-webkit-" + p + "-ms-" + p.replace("basis", "preferred-size") + p;
        }
        return "-webkit-" + p + "-ms-" + p + p;
      case 964:
        return "-webkit-" + p + "-ms-flex-" + p + p;
      case 1023:
        if (p.charCodeAt(8) !== 99) break;
        return C = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + p + "-ms-flex-pack" + C + p;
      case 1005:
        return I.test(p) ? p.replace(G, ":-webkit-") + p.replace(G, ":-moz-") + p : p;
      case 1e3:
        switch (C = p.substring(13).trim(), A = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(A)) {
          case 226:
            C = p.replace(k, "tb");
            break;
          case 232:
            C = p.replace(k, "tb-rl");
            break;
          case 220:
            C = p.replace(k, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + C + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (A = (p = D).length - 10, C = (p.charCodeAt(A) === 33 ? p.substring(0, A) : p).substring(D.indexOf(":", 7) + 1).trim(), te = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8)) break;
          case 115:
            p = p.replace(C, "-webkit-" + C) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(C, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + p.replace(C, "-webkit-" + C) + ";" + p.replace(C, "-ms-" + C + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return C = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + C + "-ms-flex-" + C + p;
          case 115:
            return "-webkit-" + p + "-ms-flex-item-" + p.replace(Te, "") + p;
          default:
            return "-webkit-" + p + "-ms-flex-line-pack" + p.replace("align-content", "").replace(Te, "") + p;
        }
        break;
      case 973:
      case 989:
        if (p.charCodeAt(3) !== 45 || p.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ze.test(D) === !0) return (C = D.substring(D.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(D.replace("stretch", "fill-available"), A, P, F).replace(":fill-available", ":stretch") : p.replace(C, "-webkit-" + C) + p.replace(C, "-moz-" + C.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, P + F === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + p;
    }
    return p;
  }
  function f(D, A) {
    var P = D.indexOf(A === 1 ? ":" : "{"), F = D.substring(0, A !== 3 ? P : 10);
    return P = D.substring(P + 1, D.length - 1), Fe(A !== 2 ? F : F.replace(Ie, "$1"), P, A);
  }
  function y(D, A) {
    var P = c(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return P !== A + ";" ? P.replace(be, " or ($1)").substring(4) : "(" + A + ")";
  }
  function v(D, A, P, F, p, te, C, re, J, K) {
    for (var z = 0, ne = A, se; z < xe; ++z)
      switch (se = Ne[z].call(O, D, ne, P, F, p, te, C, re, J, K)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = se;
      }
    if (ne !== A) return ne;
  }
  function b(D) {
    switch (D) {
      case void 0:
      case null:
        xe = Ne.length = 0;
        break;
      default:
        if (typeof D == "function") Ne[xe++] = D;
        else if (typeof D == "object") for (var A = 0, P = D.length; A < P; ++A)
          b(D[A]);
        else Ge = !!D | 0;
    }
    return b;
  }
  function g(D) {
    return D = D.prefix, D !== void 0 && (Fe = null, D ? typeof D != "function" ? Se = 1 : (Se = 2, Fe = D) : Se = 0), g;
  }
  function O(D, A) {
    var P = D;
    if (33 > P.charCodeAt(0) && (P = P.trim()), ve = P, P = [ve], 0 < xe) {
      var F = v(-1, A, P, P, Ee, fe, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (A = F);
    }
    var p = t(Qe, P, A, 0, 0);
    return 0 < xe && (F = v(-2, p, P, P, Ee, fe, p.length, 0, 0, 0), F !== void 0 && (p = F)), ve = "", Re = 0, fe = Ee = 1, p;
  }
  var x = /^\0+/g, j = /[\0\r\f]/g, G = /: */g, I = /zoo|gra/, S = /([,: ])(transform)/g, N = /,\r+?/g, B = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, X = /:(read-only)/g, k = /[svh]\w+-[tblr]{2}/, ue = /\(\s*(.*)\s*\)/g, be = /([\s\S]*?);/g, Te = /-self|flex-/g, Ie = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ze = /stretch|:\s*\w+\-(?:conte|avail)/, ke = /([^-])(image-set\()/, fe = 1, Ee = 1, Re = 0, Se = 1, Qe = [], Ne = [], xe = 0, Fe = null, Ge = 0, ve = "";
  return O.use = b, O.set = g, e !== void 0 && g(e), O;
}
var Mc = {
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
function Fc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(a) {
    return t[a] === void 0 && (t[a] = e(a)), t[a];
  };
}
var jc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Uo = /* @__PURE__ */ Fc(
  function(e) {
    return jc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Bi = { exports: {} }, Oe = {};
var Wo;
function $c() {
  if (Wo) return Oe;
  Wo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, f = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, O = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, G = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function Y(k) {
    if (typeof k == "object" && k !== null) {
      var ue = k.$$typeof;
      switch (ue) {
        case t:
          switch (k = k.type, k) {
            case b:
            case g:
            case o:
            case f:
            case c:
            case x:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case v:
                case O:
                case I:
                case G:
                case y:
                  return k;
                default:
                  return ue;
              }
          }
        case a:
          return ue;
      }
    }
  }
  function X(k) {
    return Y(k) === g;
  }
  return Oe.AsyncMode = b, Oe.ConcurrentMode = g, Oe.ContextConsumer = v, Oe.ContextProvider = y, Oe.Element = t, Oe.ForwardRef = O, Oe.Fragment = o, Oe.Lazy = I, Oe.Memo = G, Oe.Portal = a, Oe.Profiler = f, Oe.StrictMode = c, Oe.Suspense = x, Oe.isAsyncMode = function(k) {
    return X(k) || Y(k) === b;
  }, Oe.isConcurrentMode = X, Oe.isContextConsumer = function(k) {
    return Y(k) === v;
  }, Oe.isContextProvider = function(k) {
    return Y(k) === y;
  }, Oe.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === t;
  }, Oe.isForwardRef = function(k) {
    return Y(k) === O;
  }, Oe.isFragment = function(k) {
    return Y(k) === o;
  }, Oe.isLazy = function(k) {
    return Y(k) === I;
  }, Oe.isMemo = function(k) {
    return Y(k) === G;
  }, Oe.isPortal = function(k) {
    return Y(k) === a;
  }, Oe.isProfiler = function(k) {
    return Y(k) === f;
  }, Oe.isStrictMode = function(k) {
    return Y(k) === c;
  }, Oe.isSuspense = function(k) {
    return Y(k) === x;
  }, Oe.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === o || k === g || k === f || k === c || k === x || k === j || typeof k == "object" && k !== null && (k.$$typeof === I || k.$$typeof === G || k.$$typeof === y || k.$$typeof === v || k.$$typeof === O || k.$$typeof === N || k.$$typeof === B || k.$$typeof === U || k.$$typeof === S);
  }, Oe.typeOf = Y, Oe;
}
Bi.exports = $c();
var zc = Bi.exports, Ma = zc, Bc = {
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
}, Uc = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Wc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ui = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Fa = {};
Fa[Ma.ForwardRef] = Wc;
Fa[Ma.Memo] = Ui;
function Vo(e) {
  return Ma.isMemo(e) ? Ui : Fa[e.$$typeof] || Bc;
}
var Vc = Object.defineProperty, qc = Object.getOwnPropertyNames, qo = Object.getOwnPropertySymbols, Hc = Object.getOwnPropertyDescriptor, Gc = Object.getPrototypeOf, Ho = Object.prototype;
function Wi(e, t, a) {
  if (typeof t != "string") {
    if (Ho) {
      var o = Gc(t);
      o && o !== Ho && Wi(e, o, a);
    }
    var c = qc(t);
    qo && (c = c.concat(qo(t)));
    for (var f = Vo(e), y = Vo(t), v = 0; v < c.length; ++v) {
      var b = c[v];
      if (!Uc[b] && !(a && a[b]) && !(y && y[b]) && !(f && f[b])) {
        var g = Hc(t, b);
        try {
          Vc(e, b, g);
        } catch {
        }
      }
    }
  }
  return e;
}
var Yc = Wi;
const Xc = /* @__PURE__ */ ai(Yc);
var nt = { env: { NODE_ENV: "production" } };
function Ft() {
  return (Ft = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }
    return e;
  }).apply(this, arguments);
}
var Go = function(e, t) {
  for (var a = [e[0]], o = 0, c = t.length; o < c; o += 1) a.push(t[o], e[o + 1]);
  return a;
}, ba = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !zi.typeOf(e);
}, Mn = Object.freeze([]), Zt = Object.freeze({});
function Kr(e) {
  return typeof e == "function";
}
function Yo(e) {
  return e.displayName || e.name || "Component";
}
function ja(e) {
  return e && typeof e.styledComponentId == "string";
}
var Er = typeof nt < "u" && nt.env !== void 0 && (nt.env.REACT_APP_SC_ATTR || nt.env.SC_ATTR) || "data-styled", $a = typeof window < "u" && "HTMLElement" in window, Qc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof nt < "u" && nt.env !== void 0 && (nt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && nt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? nt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && nt.env.REACT_APP_SC_DISABLE_SPEEDY : nt.env.SC_DISABLE_SPEEDY !== void 0 && nt.env.SC_DISABLE_SPEEDY !== "" ? nt.env.SC_DISABLE_SPEEDY !== "false" && nt.env.SC_DISABLE_SPEEDY : nt.env.NODE_ENV !== "production"));
function rn(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (a.length > 0 ? " Args: " + a.join(", ") : ""));
}
var Jc = function() {
  function e(a) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = a;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(a) {
    for (var o = 0, c = 0; c < a; c++) o += this.groupSizes[c];
    return o;
  }, t.insertRules = function(a, o) {
    if (a >= this.groupSizes.length) {
      for (var c = this.groupSizes, f = c.length, y = f; a >= y; ) (y <<= 1) < 0 && rn(16, "" + a);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(c), this.length = y;
      for (var v = f; v < y; v++) this.groupSizes[v] = 0;
    }
    for (var b = this.indexOfGroup(a + 1), g = 0, O = o.length; g < O; g++) this.tag.insertRule(b, o[g]) && (this.groupSizes[a]++, b++);
  }, t.clearGroup = function(a) {
    if (a < this.length) {
      var o = this.groupSizes[a], c = this.indexOfGroup(a), f = c + o;
      this.groupSizes[a] = 0;
      for (var y = c; y < f; y++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(a) {
    var o = "";
    if (a >= this.length || this.groupSizes[a] === 0) return o;
    for (var c = this.groupSizes[a], f = this.indexOfGroup(a), y = f + c, v = f; v < y; v++) o += this.tag.getRule(v) + `/*!sc*/
`;
    return o;
  }, e;
}(), An = /* @__PURE__ */ new Map(), Fn = /* @__PURE__ */ new Map(), Qr = 1, _n = function(e) {
  if (An.has(e)) return An.get(e);
  for (; Fn.has(Qr); ) Qr++;
  var t = Qr++;
  return An.set(e, t), Fn.set(t, e), t;
}, Zc = function(e) {
  return Fn.get(e);
}, Kc = function(e, t) {
  t >= Qr && (Qr = t + 1), An.set(e, t), Fn.set(t, e);
}, eu = "style[" + Er + '][data-styled-version="5.3.11"]', tu = new RegExp("^" + Er + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ru = function(e, t, a) {
  for (var o, c = a.split(","), f = 0, y = c.length; f < y; f++) (o = c[f]) && e.registerName(t, o);
}, nu = function(e, t) {
  for (var a = (t.textContent || "").split(`/*!sc*/
`), o = [], c = 0, f = a.length; c < f; c++) {
    var y = a[c].trim();
    if (y) {
      var v = y.match(tu);
      if (v) {
        var b = 0 | parseInt(v[1], 10), g = v[2];
        b !== 0 && (Kc(g, b), ru(e, g, v[3]), e.getTag().insertRules(b, o)), o.length = 0;
      } else o.push(y);
    }
  }
}, au = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Vi = function(e) {
  var t = document.head, a = e || t, o = document.createElement("style"), c = function(v) {
    for (var b = v.childNodes, g = b.length; g >= 0; g--) {
      var O = b[g];
      if (O && O.nodeType === 1 && O.hasAttribute(Er)) return O;
    }
  }(a), f = c !== void 0 ? c.nextSibling : null;
  o.setAttribute(Er, "active"), o.setAttribute("data-styled-version", "5.3.11");
  var y = au();
  return y && o.setAttribute("nonce", y), a.insertBefore(o, f), o;
}, ou = function() {
  function e(a) {
    var o = this.element = Vi(a);
    o.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var f = document.styleSheets, y = 0, v = f.length; y < v; y++) {
        var b = f[y];
        if (b.ownerNode === c) return b;
      }
      rn(17);
    }(o), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(a, o) {
    try {
      return this.sheet.insertRule(o, a), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(a) {
    this.sheet.deleteRule(a), this.length--;
  }, t.getRule = function(a) {
    var o = this.sheet.cssRules[a];
    return o !== void 0 && typeof o.cssText == "string" ? o.cssText : "";
  }, e;
}(), iu = function() {
  function e(a) {
    var o = this.element = Vi(a);
    this.nodes = o.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(a, o) {
    if (a <= this.length && a >= 0) {
      var c = document.createTextNode(o), f = this.nodes[a];
      return this.element.insertBefore(c, f || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(a) {
    this.element.removeChild(this.nodes[a]), this.length--;
  }, t.getRule = function(a) {
    return a < this.length ? this.nodes[a].textContent : "";
  }, e;
}(), su = function() {
  function e(a) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(a, o) {
    return a <= this.length && (this.rules.splice(a, 0, o), this.length++, !0);
  }, t.deleteRule = function(a) {
    this.rules.splice(a, 1), this.length--;
  }, t.getRule = function(a) {
    return a < this.length ? this.rules[a] : "";
  }, e;
}(), Xo = $a, lu = { isServer: !$a, useCSSOMInjection: !Qc }, qi = function() {
  function e(a, o, c) {
    a === void 0 && (a = Zt), o === void 0 && (o = {}), this.options = Ft({}, lu, {}, a), this.gs = o, this.names = new Map(c), this.server = !!a.isServer, !this.server && $a && Xo && (Xo = !1, function(f) {
      for (var y = document.querySelectorAll(eu), v = 0, b = y.length; v < b; v++) {
        var g = y[v];
        g && g.getAttribute(Er) !== "active" && (nu(f, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this));
  }
  e.registerId = function(a) {
    return _n(a);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(a, o) {
    return o === void 0 && (o = !0), new e(Ft({}, this.options, {}, a), this.gs, o && this.names || void 0);
  }, t.allocateGSInstance = function(a) {
    return this.gs[a] = (this.gs[a] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (o = this.options).isServer, f = o.useCSSOMInjection, y = o.target, a = c ? new su(y) : f ? new ou(y) : new iu(y), new Jc(a)));
    var a, o, c, f, y;
  }, t.hasNameForId = function(a, o) {
    return this.names.has(a) && this.names.get(a).has(o);
  }, t.registerName = function(a, o) {
    if (_n(a), this.names.has(a)) this.names.get(a).add(o);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(o), this.names.set(a, c);
    }
  }, t.insertRules = function(a, o, c) {
    this.registerName(a, o), this.getTag().insertRules(_n(a), c);
  }, t.clearNames = function(a) {
    this.names.has(a) && this.names.get(a).clear();
  }, t.clearRules = function(a) {
    this.getTag().clearGroup(_n(a)), this.clearNames(a);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(a) {
      for (var o = a.getTag(), c = o.length, f = "", y = 0; y < c; y++) {
        var v = Zc(y);
        if (v !== void 0) {
          var b = a.names.get(v), g = o.getGroup(y);
          if (b && g && b.size) {
            var O = Er + ".g" + y + '[id="' + v + '"]', x = "";
            b !== void 0 && b.forEach(function(j) {
              j.length > 0 && (x += j + ",");
            }), f += "" + g + O + '{content:"' + x + `"}/*!sc*/
`;
          }
        }
      }
      return f;
    }(this);
  }, e;
}(), cu = /(a)(d)/gi, Qo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function va(e) {
  var t, a = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) a = Qo(t % 52) + a;
  return (Qo(t % 52) + a).replace(cu, "$1-$2");
}
var xr = function(e, t) {
  for (var a = t.length; a; ) e = 33 * e ^ t.charCodeAt(--a);
  return e;
}, Hi = function(e) {
  return xr(5381, e);
};
function uu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var a = e[t];
    if (Kr(a) && !ja(a)) return !1;
  }
  return !0;
}
var du = Hi("5.3.11"), fu = function() {
  function e(t, a, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (o === void 0 || o.isStatic) && uu(t), this.componentId = a, this.baseHash = xr(du, a), this.baseStyle = o, qi.registerId(a);
  }
  return e.prototype.generateAndInjectStyles = function(t, a, o) {
    var c = this.componentId, f = [];
    if (this.baseStyle && f.push(this.baseStyle.generateAndInjectStyles(t, a, o)), this.isStatic && !o.hash) if (this.staticRulesId && a.hasNameForId(c, this.staticRulesId)) f.push(this.staticRulesId);
    else {
      var y = Rr(this.rules, t, a, o).join(""), v = va(xr(this.baseHash, y) >>> 0);
      if (!a.hasNameForId(c, v)) {
        var b = o(y, "." + v, void 0, c);
        a.insertRules(c, v, b);
      }
      f.push(v), this.staticRulesId = v;
    }
    else {
      for (var g = this.rules.length, O = xr(this.baseHash, o.hash), x = "", j = 0; j < g; j++) {
        var G = this.rules[j];
        if (typeof G == "string") x += G;
        else if (G) {
          var I = Rr(G, t, a, o), S = Array.isArray(I) ? I.join("") : I;
          O = xr(O, S + j), x += S;
        }
      }
      if (x) {
        var N = va(O >>> 0);
        if (!a.hasNameForId(c, N)) {
          var B = o(x, "." + N, void 0, c);
          a.insertRules(c, N, B);
        }
        f.push(N);
      }
    }
    return f.join(" ");
  }, e;
}(), pu = /^\s*\/\/.*$/gm, hu = [":", "[", ".", "#"];
function gu(e) {
  var t, a, o, c, f = Zt, y = f.options, v = y === void 0 ? Zt : y, b = f.plugins, g = b === void 0 ? Mn : b, O = new Lc(v), x = [], j = /* @__PURE__ */ function(S) {
    function N(B) {
      if (B) try {
        S(B + "}");
      } catch {
      }
    }
    return function(B, U, Y, X, k, ue, be, Te, Ie, ze) {
      switch (B) {
        case 1:
          if (Ie === 0 && U.charCodeAt(0) === 64) return S(U + ";"), "";
          break;
        case 2:
          if (Te === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Te) {
            case 102:
            case 112:
              return S(Y[0] + U), "";
            default:
              return U + (ze === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(N);
      }
    };
  }(function(S) {
    x.push(S);
  }), G = function(S, N, B) {
    return N === 0 && hu.indexOf(B[a.length]) !== -1 || B.match(c) ? S : "." + t;
  };
  function I(S, N, B, U) {
    U === void 0 && (U = "&");
    var Y = S.replace(pu, ""), X = N && B ? B + " " + N + " { " + Y + " }" : Y;
    return t = U, a = N, o = new RegExp("\\" + a + "\\b", "g"), c = new RegExp("(\\" + a + "\\b){2,}"), O(B || !N ? "" : N, X);
  }
  return O.use([].concat(g, [function(S, N, B) {
    S === 2 && B.length && B[0].lastIndexOf(a) > 0 && (B[0] = B[0].replace(o, G));
  }, j, function(S) {
    if (S === -2) {
      var N = x;
      return x = [], N;
    }
  }])), I.hash = g.length ? g.reduce(function(S, N) {
    return N.name || rn(15), xr(S, N.name);
  }, 5381).toString() : "", I;
}
var Gi = et.createContext();
Gi.Consumer;
var Yi = et.createContext(), mu = (Yi.Consumer, new qi()), wa = gu();
function yu() {
  return Kt(Gi) || mu;
}
function bu() {
  return Kt(Yi) || wa;
}
var vu = function() {
  function e(t, a) {
    var o = this;
    this.inject = function(c, f) {
      f === void 0 && (f = wa);
      var y = o.name + f.hash;
      c.hasNameForId(o.id, y) || c.insertRules(o.id, y, f(o.rules, y, "@keyframes"));
    }, this.toString = function() {
      return rn(12, String(o.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = a;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = wa), this.name + t.hash;
  }, e;
}(), wu = /([A-Z])/, Su = /([A-Z])/g, ku = /^ms-/, xu = function(e) {
  return "-" + e.toLowerCase();
};
function Jo(e) {
  return wu.test(e) ? e.replace(Su, xu).replace(ku, "-ms-") : e;
}
var Zo = function(e) {
  return e == null || e === !1 || e === "";
};
function Rr(e, t, a, o) {
  if (Array.isArray(e)) {
    for (var c, f = [], y = 0, v = e.length; y < v; y += 1) (c = Rr(e[y], t, a, o)) !== "" && (Array.isArray(c) ? f.push.apply(f, c) : f.push(c));
    return f;
  }
  if (Zo(e)) return "";
  if (ja(e)) return "." + e.styledComponentId;
  if (Kr(e)) {
    if (typeof (g = e) != "function" || g.prototype && g.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Rr(b, t, a, o);
  }
  var g;
  return e instanceof vu ? a ? (e.inject(a, o), e.getName(o)) : e : ba(e) ? function O(x, j) {
    var G, I, S = [];
    for (var N in x) x.hasOwnProperty(N) && !Zo(x[N]) && (Array.isArray(x[N]) && x[N].isCss || Kr(x[N]) ? S.push(Jo(N) + ":", x[N], ";") : ba(x[N]) ? S.push.apply(S, O(x[N], N)) : S.push(Jo(N) + ": " + (G = N, (I = x[N]) == null || typeof I == "boolean" || I === "" ? "" : typeof I != "number" || I === 0 || G in Mc || G.startsWith("--") ? String(I).trim() : I + "px") + ";"));
    return j ? [j + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var Ko = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Cu(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
  return Kr(e) || ba(e) ? Ko(Rr(Go(Mn, [e].concat(a)))) : a.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ko(Rr(Go(e, a)));
}
var _u = function(e, t, a) {
  return a === void 0 && (a = Zt), e.theme !== a.theme && e.theme || t || a.theme;
}, Tu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Eu = /(^-|-$)/g;
function la(e) {
  return e.replace(Tu, "-").replace(Eu, "");
}
var Ru = function(e) {
  return va(Hi(e) >>> 0);
};
function Tn(e) {
  return typeof e == "string" && nt.env.NODE_ENV === "production";
}
var Sa = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Au = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ou(e, t, a) {
  var o = e[a];
  Sa(t) && Sa(o) ? Xi(o, t) : e[a] = t;
}
function Xi(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
  for (var c = 0, f = a; c < f.length; c++) {
    var y = f[c];
    if (Sa(y)) for (var v in y) Au(v) && Ou(e, y[v], v);
  }
  return e;
}
var Qi = et.createContext();
Qi.Consumer;
var ca = {};
function Ji(e, t, a) {
  var o = ja(e), c = !Tn(e), f = t.attrs, y = f === void 0 ? Mn : f, v = t.componentId, b = v === void 0 ? function(U, Y) {
    var X = typeof U != "string" ? "sc" : la(U);
    ca[X] = (ca[X] || 0) + 1;
    var k = X + "-" + Ru("5.3.11" + X + ca[X]);
    return Y ? Y + "-" + k : k;
  }(t.displayName, t.parentComponentId) : v, g = t.displayName, O = g === void 0 ? function(U) {
    return Tn(U) ? "styled." + U : "Styled(" + Yo(U) + ")";
  }(e) : g, x = t.displayName && t.componentId ? la(t.displayName) + "-" + t.componentId : t.componentId || b, j = o && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, G = t.shouldForwardProp;
  o && e.shouldForwardProp && (G = t.shouldForwardProp ? function(U, Y, X) {
    return e.shouldForwardProp(U, Y, X) && t.shouldForwardProp(U, Y, X);
  } : e.shouldForwardProp);
  var I, S = new fu(a, x, o ? e.componentStyle : void 0), N = S.isStatic && y.length === 0, B = function(U, Y) {
    return function(X, k, ue, be) {
      var Te = X.attrs, Ie = X.componentStyle, ze = X.defaultProps, ke = X.foldedComponentIds, fe = X.shouldForwardProp, Ee = X.styledComponentId, Re = X.target, Se = function(F, p, te) {
        F === void 0 && (F = Zt);
        var C = Ft({}, p, { theme: F }), re = {};
        return te.forEach(function(J) {
          var K, z, ne, se = J;
          for (K in Kr(se) && (se = se(C)), se) C[K] = re[K] = K === "className" ? (z = re[K], ne = se[K], z && ne ? z + " " + ne : z || ne) : se[K];
        }), [C, re];
      }(_u(k, Kt(Qi), ze) || Zt, k, Te), Qe = Se[0], Ne = Se[1], xe = function(F, p, te, C) {
        var re = yu(), J = bu(), K = p ? F.generateAndInjectStyles(Zt, re, J) : F.generateAndInjectStyles(te, re, J);
        return K;
      }(Ie, be, Qe), Fe = ue, Ge = Ne.$as || k.$as || Ne.as || k.as || Re, ve = Tn(Ge), D = Ne !== k ? Ft({}, k, {}, Ne) : k, A = {};
      for (var P in D) P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? A.as = D[P] : (fe ? fe(P, Uo, Ge) : !ve || Uo(P)) && (A[P] = D[P]));
      return k.style && Ne.style !== k.style && (A.style = Ft({}, k.style, {}, Ne.style)), A.className = Array.prototype.concat(ke, Ee, xe !== Ee ? xe : null, k.className, Ne.className).filter(Boolean).join(" "), A.ref = Fe, ri(Ge, A);
    }(I, U, Y, N);
  };
  return B.displayName = O, (I = et.forwardRef(B)).attrs = j, I.componentStyle = S, I.displayName = O, I.shouldForwardProp = G, I.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Mn, I.styledComponentId = x, I.target = o ? e.target : e, I.withComponent = function(U) {
    var Y = t.componentId, X = function(ue, be) {
      if (ue == null) return {};
      var Te, Ie, ze = {}, ke = Object.keys(ue);
      for (Ie = 0; Ie < ke.length; Ie++) Te = ke[Ie], be.indexOf(Te) >= 0 || (ze[Te] = ue[Te]);
      return ze;
    }(t, ["componentId"]), k = Y && Y + "-" + (Tn(U) ? U : la(Yo(U)));
    return Ji(U, Ft({}, X, { attrs: j, componentId: k }), a);
  }, Object.defineProperty(I, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = o ? Xi({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(I, "toString", { value: function() {
    return "." + I.styledComponentId;
  } }), c && Xc(I, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), I;
}
var jn = function(e) {
  return function t(a, o, c) {
    if (c === void 0 && (c = Zt), !zi.isValidElementType(o)) return rn(1, String(o));
    var f = function() {
      return a(o, c, Cu.apply(void 0, arguments));
    };
    return f.withConfig = function(y) {
      return t(a, o, Ft({}, c, {}, y));
    }, f.attrs = function(y) {
      return t(a, o, Ft({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, f;
  }(Ji, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  jn[e] = jn(e);
});
const Iu = jn.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  column-gap: 24px;
  row-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  li {
    .card-img-top {
      border-radius: 0 !important;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .card-event-details {
      flex-direction: column;
      .card-event-icons {
        width: 100%;
        &:nth-child(1) {
          margin-bottom: 24px;
        }
      }
    }
  }
`, Nu = () => {
  const { feeds: e } = Kt(Na);
  return /* @__PURE__ */ gt.jsx(Iu, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ gt.jsx("li", { children: /* @__PURE__ */ gt.jsx(
    Lt,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${Ln(t.startDate, "COMPLETE")} <br /> ${ji(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${Ln(
        t.startDate,
        "ISO"
      )}`,
      title: t.title,
      image: t.imageUrl,
      imageAltText: t.title,
      linkLabel: t.eventButtonText,
      linkUrl: t.eventButtonUrl
    }
  ) }, t.id)) });
}, Zi = ({ header: e, ctaButton: t, dataSource: a, maxItems: o }) => (Jr(() => {
  typeof window < "u" && ii({
    packageName: "component-events",
    component: "CardsGridEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: t,
      dataSource: a,
      maxItems: o
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ gt.jsx(La, { header: e, ctaButton: t, dataSource: a, maxItems: o, children: /* @__PURE__ */ gt.jsx(Nu, {}) }));
Zi.propTypes = Fi;
const Pu = jn.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  li {
    max-width: 100%;
    width: 100%;
  }
  .card {
    height: 235px;
    .card-img-top {
      width: 235px;
      height: auto;
      border-radius: 0 !important;
    }
    .card-event-icons {
      &:nth-child(1) {
        width: 58%;
      }
      &:nth-child(2) {
        width: 42%;
      }
    }
  }
  @media (max-width: 992px) {
    .card {
      height: 100%;
      .card-event-details {
        flex-direction: column;
        .card-event-icons {
          width: 100%;
          &:nth-child(1) {
            margin-bottom: 24px;
          }
        }
      }
      .card-img-top {
        height: auto;
        width: auto;
      }
    }
  }
`, Du = () => {
  const { feeds: e } = Kt(Na);
  return /* @__PURE__ */ gt.jsx(Pu, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ gt.jsx("li", { children: /* @__PURE__ */ gt.jsx(
    Lt,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${Ln(t.startDate, "COMPLETE")} <br /> ${ji(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${Ln(
        t.startDate,
        "ISO"
      )}`,
      title: t.title,
      image: t.imageUrl,
      imageAltText: t.title,
      linkLabel: t.eventButtonText,
      linkUrl: t.eventButtonUrl
    }
  ) }, t.id)) });
}, Ki = ({ header: e, ctaButton: t, dataSource: a, maxItems: o }) => (Jr(() => {
  typeof window < "u" && ii({
    packageName: "component-events",
    component: "CardsListEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: t,
      dataSource: a,
      maxItems: o
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ gt.jsx(La, { header: e, ctaButton: t, dataSource: a, maxItems: o, children: /* @__PURE__ */ gt.jsx(Du, {}) }));
Ki.propTypes = Fi;
var es, ei = ni;
es = ei.createRoot, ei.hydrateRoot;
const ts = (e, t, a) => {
  es(a).render(et.createElement(e, t));
}, Fu = ({ targetSelector: e, props: t }) => {
  ts(Zi, t, document.querySelector(e));
}, ju = ({ targetSelector: e, props: t }) => {
  ts(Ki, t, document.querySelector(e));
};
export {
  Zi as CardsGridEvents,
  Ki as CardsListEvents,
  Fu as initCardsGridEventsComponent,
  ju as initCardsListEventsComponent
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
