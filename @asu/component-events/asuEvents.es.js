import rt, { Component as gs, createContext as ms, forwardRef as ci, useRef as Ra, useImperativeHandle as ys, useId as bs, useContext as ar, createElement as ui, useState as Gr, useEffect as Kr } from "react";
import di from "react-dom";
function fi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pi = { exports: {} }, Wr = {};
var ho;
function vs() {
  if (ho) return Wr;
  ho = 1;
  var e = rt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(v, b, y) {
    var T, C = {}, L = null, Z = null;
    y !== void 0 && (L = "" + y), b.key !== void 0 && (L = "" + b.key), b.ref !== void 0 && (Z = b.ref);
    for (T in b) o.call(b, T) && !u.hasOwnProperty(T) && (C[T] = b[T]);
    if (v && v.defaultProps) for (T in b = v.defaultProps, b) C[T] === void 0 && (C[T] = b[T]);
    return { $$typeof: t, type: v, key: L, ref: Z, props: C, _owner: c.current };
  }
  return Wr.Fragment = r, Wr.jsx = g, Wr.jsxs = g, Wr;
}
pi.exports = vs();
var mt = pi.exports;
function hi({
  packageName: e = "",
  component: t = "",
  type: r = "",
  configuration: o = {}
}) {
  if (!e || !t) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: t,
    type: r,
    configuration: o
  };
}
function Oa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gi = { exports: {} }, qr = {}, go;
function ws() {
  if (go) return qr;
  go = 1;
  var e = rt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(v, b, y) {
    var T, C = {}, L = null, Z = null;
    y !== void 0 && (L = "" + y), b.key !== void 0 && (L = "" + b.key), b.ref !== void 0 && (Z = b.ref);
    for (T in b) o.call(b, T) && !u.hasOwnProperty(T) && (C[T] = b[T]);
    if (v && v.defaultProps) for (T in b = v.defaultProps, b) C[T] === void 0 && (C[T] = b[T]);
    return { $$typeof: t, type: v, key: L, ref: Z, props: C, _owner: c.current };
  }
  return qr.Fragment = r, qr.jsx = g, qr.jsxs = g, qr;
}
gi.exports = ws();
var Y = gi.exports, mi = { exports: {} }, Qn, mo;
function xs() {
  if (mo) return Qn;
  mo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qn = e, Qn;
}
var Jn, yo;
function Ss() {
  if (yo) return Jn;
  yo = 1;
  var e = xs();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Jn = function() {
    function o(g, v, b, y, T, C) {
      if (C !== e) {
        var L = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw L.name = "Invariant Violation", L;
      }
    }
    o.isRequired = o;
    function c() {
      return o;
    }
    var u = {
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
      checkPropTypes: r,
      resetWarningCache: t
    };
    return u.PropTypes = u, u;
  }, Jn;
}
mi.exports = Ss()();
var ks = mi.exports;
const i = /* @__PURE__ */ Oa(ks), Cs = i.shape({
  url: i.string,
  altText: i.string,
  cssClass: i.arrayOf(i.string),
  size: i.oneOf(["small", "medium", "large"])
}), ea = i.shape({
  text: i.string,
  maxWidth: i.string,
  cssClass: i.arrayOf(i.string),
  highlightColor: i.oneOf(["gold", "black"])
}), yi = i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  content: i.shape({
    icon: i.string,
    header: i.string,
    body: i.string
  })
}), Ia = i.shape({
  text: i.string,
  name: i.string,
  event: i.string,
  action: i.string,
  type: i.string,
  region: i.string,
  section: i.string,
  component: i.string
});
var bi = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var u = "", g = 0; g < arguments.length; g++) {
        var v = arguments[g];
        v && (u = c(u, o(v)));
      }
      return u;
    }
    function o(u) {
      if (typeof u == "string" || typeof u == "number")
        return u;
      if (typeof u != "object")
        return "";
      if (Array.isArray(u))
        return r.apply(null, u);
      if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
        return u.toString();
      var g = "";
      for (var v in u)
        t.call(u, v) && u[v] && (g = c(g, v));
      return g;
    }
    function c(u, g) {
      return g ? u ? u + " " + g : u + g : u;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(bi);
var _s = bi.exports;
const Tr = /* @__PURE__ */ Oa(_s), Es = () => {
  const [e, t] = Gr(), [r, o] = Gr(!1), [c, u] = Gr(!1), [g, v] = Gr("");
  return Kr(() => {
    g && (() => {
      u(null), o(!0);
      try {
        fetch(g).then((b) => b.json()).then((b) => {
          t(b), o(!1);
        }).catch((b) => {
          u(b), o(!1);
        });
      } catch (b) {
        u(b);
      }
    })();
  }, [g]), [{ data: e, loading: r, error: c }, v];
}, Ts = (e) => (e || []).join(" ");
function tr(e) {
  "@babel/helpers - typeof";
  return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tr(e);
}
function pa(e, t) {
  return pa = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, pa(e, t);
}
function As() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Tn(e, t, r) {
  return As() ? Tn = Reflect.construct : Tn = function(o, c, u) {
    var g = [null];
    g.push.apply(g, c);
    var v = Function.bind.apply(o, g), b = new v();
    return u && pa(b, u.prototype), b;
  }, Tn.apply(null, arguments);
}
function At(e) {
  return Rs(e) || Os(e) || Is(e) || Ns();
}
function Rs(e) {
  if (Array.isArray(e)) return ha(e);
}
function Os(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Is(e, t) {
  if (e) {
    if (typeof e == "string") return ha(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ha(e, t);
  }
}
function ha(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
  return o;
}
function Ns() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ps = Object.hasOwnProperty, bo = Object.setPrototypeOf, Ds = Object.isFrozen, js = Object.getPrototypeOf, Ms = Object.getOwnPropertyDescriptor, ot = Object.freeze, bt = Object.seal, Ls = Object.create, vi = typeof Reflect < "u" && Reflect, In = vi.apply, ga = vi.construct;
In || (In = function(e, t, r) {
  return e.apply(t, r);
});
ot || (ot = function(e) {
  return e;
});
bt || (bt = function(e) {
  return e;
});
ga || (ga = function(e, t) {
  return Tn(e, At(t));
});
var Fs = vt(Array.prototype.forEach), vo = vt(Array.prototype.pop), Hr = vt(Array.prototype.push), An = vt(String.prototype.toLowerCase), ta = vt(String.prototype.toString), wo = vt(String.prototype.match), Tt = vt(String.prototype.replace), zs = vt(String.prototype.indexOf), $s = vt(String.prototype.trim), tt = vt(RegExp.prototype.test), ra = Bs(TypeError);
function vt(e) {
  return function(t) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      o[c - 1] = arguments[c];
    return In(e, t, o);
  };
}
function Bs(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return ga(e, r);
  };
}
function be(e, t, r) {
  var o;
  r = (o = r) !== null && o !== void 0 ? o : An, bo && bo(e, null);
  for (var c = t.length; c--; ) {
    var u = t[c];
    if (typeof u == "string") {
      var g = r(u);
      g !== u && (Ds(t) || (t[c] = g), u = g);
    }
    e[u] = !0;
  }
  return e;
}
function yr(e) {
  var t = Ls(null), r;
  for (r in e)
    In(Ps, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function bn(e, t) {
  for (; e !== null; ) {
    var r = Ms(e, t);
    if (r) {
      if (r.get)
        return vt(r.get);
      if (typeof r.value == "function")
        return vt(r.value);
    }
    e = js(e);
  }
  function o(c) {
    return console.warn("fallback value for", c), null;
  }
  return o;
}
var xo = ot(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), na = ot(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), aa = ot(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Us = ot(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), oa = ot(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Vs = ot(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), So = ot(["#text"]), ko = ot(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), ia = ot(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Co = ot(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), vn = ot(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ws = bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), qs = bt(/<%[\w\W]*|[\w\W]*%>/gm), Hs = bt(/\${[\w\W]*}/gm), Gs = bt(/^data-[\-\w.\u00B7-\uFFFF]/), Ys = bt(/^aria-[\-\w]+$/), Zs = bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Xs = bt(/^(?:\w+script|data):/i), Ks = bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Qs = bt(/^html$/i), Js = bt(/^[a-z][.\w]*(-[.\w]+)+$/i), el = function() {
  return typeof window > "u" ? null : window;
}, tl = function(e, t) {
  if (tr(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var r = null, o = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(o) && (r = t.currentScript.getAttribute(o));
  var c = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(c, {
      createHTML: function(u) {
        return u;
      },
      createScriptURL: function(u) {
        return u;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + c + " could not be created."), null;
  }
};
function wi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : el(), t = function(w) {
    return wi(w);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, o = e.document, c = e.DocumentFragment, u = e.HTMLTemplateElement, g = e.Node, v = e.Element, b = e.NodeFilter, y = e.NamedNodeMap, T = y === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : y, C = e.HTMLFormElement, L = e.DOMParser, Z = e.trustedTypes, I = v.prototype, x = bn(I, "cloneNode"), N = bn(I, "nextSibling"), B = bn(I, "childNodes"), z = bn(I, "parentNode");
  if (typeof u == "function") {
    var q = o.createElement("template");
    q.content && q.content.ownerDocument && (o = q.content.ownerDocument);
  }
  var H = tl(Z, r), S = H ? H.createHTML("") : "", oe = o, pe = oe.implementation, Ce = oe.createNodeIterator, Ne = oe.createDocumentFragment, Be = oe.getElementsByTagName, Ze = r.importNode, he = {};
  try {
    he = yr(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var we = {};
  t.isSupported = typeof z == "function" && pe && pe.createHTMLDocument !== void 0 && he !== 9;
  var Ee = Ws, xe = qs, Xe = Hs, Pe = Gs, ke = Ys, Fe = Xs, Ge = Ks, Ye = Js, D = Zs, R = null, P = be({}, [].concat(At(xo), At(na), At(aa), At(oa), At(So))), F = null, p = be({}, [].concat(At(ko), At(ia), At(Co), At(vn))), G = Object.seal(Object.create(null, {
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
  })), k = null, re = null, J = !0, K = !0, V = !1, ne = !0, ce = !1, ee = !0, le = !1, te = !1, fe = !1, ze = !1, ue = !1, Ke = !1, Ue = !0, ge = !1, $ = "user-content-", ae = !0, et = !1, Qe = {}, _e = null, or = be({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), ir = null, Sr = be({}, ["audio", "video", "img", "source", "image", "track"]), Nt = null, Pt = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ht = "http://www.w3.org/1998/Math/MathML", Gt = "http://www.w3.org/2000/svg", ct = "http://www.w3.org/1999/xhtml", Ot = ct, sr = !1, nt = null, lr = be({}, [Ht, Gt, ct], ta), it, Te = ["application/xhtml+xml", "text/html"], Dt = "text/html", Ve, st = null, yt = o.createElement("form"), jt = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, ut = function(w) {
    st && st === w || ((!w || tr(w) !== "object") && (w = {}), w = yr(w), it = // eslint-disable-next-line unicorn/prefer-includes
    Te.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? it = Dt : it = w.PARSER_MEDIA_TYPE, Ve = it === "application/xhtml+xml" ? ta : An, R = "ALLOWED_TAGS" in w ? be({}, w.ALLOWED_TAGS, Ve) : P, F = "ALLOWED_ATTR" in w ? be({}, w.ALLOWED_ATTR, Ve) : p, nt = "ALLOWED_NAMESPACES" in w ? be({}, w.ALLOWED_NAMESPACES, ta) : lr, Nt = "ADD_URI_SAFE_ATTR" in w ? be(
      yr(Pt),
      // eslint-disable-line indent
      w.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Ve
      // eslint-disable-line indent
    ) : Pt, ir = "ADD_DATA_URI_TAGS" in w ? be(
      yr(Sr),
      // eslint-disable-line indent
      w.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Ve
      // eslint-disable-line indent
    ) : Sr, _e = "FORBID_CONTENTS" in w ? be({}, w.FORBID_CONTENTS, Ve) : or, k = "FORBID_TAGS" in w ? be({}, w.FORBID_TAGS, Ve) : {}, re = "FORBID_ATTR" in w ? be({}, w.FORBID_ATTR, Ve) : {}, Qe = "USE_PROFILES" in w ? w.USE_PROFILES : !1, J = w.ALLOW_ARIA_ATTR !== !1, K = w.ALLOW_DATA_ATTR !== !1, V = w.ALLOW_UNKNOWN_PROTOCOLS || !1, ne = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ce = w.SAFE_FOR_TEMPLATES || !1, ee = w.SAFE_FOR_XML !== !1, le = w.WHOLE_DOCUMENT || !1, ze = w.RETURN_DOM || !1, ue = w.RETURN_DOM_FRAGMENT || !1, Ke = w.RETURN_TRUSTED_TYPE || !1, fe = w.FORCE_BODY || !1, Ue = w.SANITIZE_DOM !== !1, ge = w.SANITIZE_NAMED_PROPS || !1, ae = w.KEEP_CONTENT !== !1, et = w.IN_PLACE || !1, D = w.ALLOWED_URI_REGEXP || D, Ot = w.NAMESPACE || ct, G = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && jt(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (G.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && jt(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (G.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ce && (K = !1), ue && (ze = !0), Qe && (R = be({}, At(So)), F = [], Qe.html === !0 && (be(R, xo), be(F, ko)), Qe.svg === !0 && (be(R, na), be(F, ia), be(F, vn)), Qe.svgFilters === !0 && (be(R, aa), be(F, ia), be(F, vn)), Qe.mathMl === !0 && (be(R, oa), be(F, Co), be(F, vn))), w.ADD_TAGS && (R === P && (R = yr(R)), be(R, w.ADD_TAGS, Ve)), w.ADD_ATTR && (F === p && (F = yr(F)), be(F, w.ADD_ATTR, Ve)), w.ADD_URI_SAFE_ATTR && be(Nt, w.ADD_URI_SAFE_ATTR, Ve), w.FORBID_CONTENTS && (_e === or && (_e = yr(_e)), be(_e, w.FORBID_CONTENTS, Ve)), ae && (R["#text"] = !0), le && be(R, ["html", "head", "body"]), R.table && (be(R, ["tbody"]), delete k.tbody), ot && ot(w), st = w);
  }, cr = be({}, ["mi", "mo", "mn", "ms", "mtext"]), Yt = be({}, ["annotation-xml"]), ur = be({}, ["title", "style", "font", "a", "script"]), Mt = be({}, na);
  be(Mt, aa), be(Mt, Us);
  var Zt = be({}, oa);
  be(Zt, Vs);
  var kr = function(w) {
    var Q = z(w);
    (!Q || !Q.tagName) && (Q = {
      namespaceURI: Ot,
      tagName: "template"
    });
    var U = An(w.tagName), Se = An(Q.tagName);
    return nt[w.namespaceURI] ? w.namespaceURI === Gt ? Q.namespaceURI === ct ? U === "svg" : Q.namespaceURI === Ht ? U === "svg" && (Se === "annotation-xml" || cr[Se]) : !!Mt[U] : w.namespaceURI === Ht ? Q.namespaceURI === ct ? U === "math" : Q.namespaceURI === Gt ? U === "math" && Yt[Se] : !!Zt[U] : w.namespaceURI === ct ? Q.namespaceURI === Gt && !Yt[Se] || Q.namespaceURI === Ht && !cr[Se] ? !1 : !Zt[U] && (ur[U] || !Mt[U]) : !!(it === "application/xhtml+xml" && nt[w.namespaceURI]) : !1;
  }, wt = function(w) {
    Hr(t.removed, {
      element: w
    });
    try {
      w.parentNode.removeChild(w);
    } catch {
      try {
        w.outerHTML = S;
      } catch {
        w.remove();
      }
    }
  }, Xt = function(w, Q) {
    try {
      Hr(t.removed, {
        attribute: Q.getAttributeNode(w),
        from: Q
      });
    } catch {
      Hr(t.removed, {
        attribute: null,
        from: Q
      });
    }
    if (Q.removeAttribute(w), w === "is" && !F[w])
      if (ze || ue)
        try {
          wt(Q);
        } catch {
        }
      else
        try {
          Q.setAttribute(w, "");
        } catch {
        }
  }, Lt = function(w) {
    var Q, U;
    if (fe)
      w = "<remove></remove>" + w;
    else {
      var Se = wo(w, /^[\r\n\t ]+/);
      U = Se && Se[0];
    }
    it === "application/xhtml+xml" && Ot === ct && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    var Le = H ? H.createHTML(w) : w;
    if (Ot === ct)
      try {
        Q = new L().parseFromString(Le, it);
      } catch {
      }
    if (!Q || !Q.documentElement) {
      Q = pe.createDocument(Ot, "template", null);
      try {
        Q.documentElement.innerHTML = sr ? S : Le;
      } catch {
      }
    }
    var De = Q.body || Q.documentElement;
    return w && U && De.insertBefore(o.createTextNode(U), De.childNodes[0] || null), Ot === ct ? Be.call(Q, le ? "html" : "body")[0] : le ? Q.documentElement : De;
  }, dr = function(w) {
    return Ce.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      b.SHOW_ELEMENT | b.SHOW_COMMENT | b.SHOW_TEXT | b.SHOW_PROCESSING_INSTRUCTION | b.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Ft = function(w) {
    return w instanceof C && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof T) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, xt = function(w) {
    return tr(g) === "object" ? w instanceof g : w && tr(w) === "object" && typeof w.nodeType == "number" && typeof w.nodeName == "string";
  }, dt = function(w, Q, U) {
    we[w] && Fs(we[w], function(Se) {
      Se.call(t, Q, U, st);
    });
  }, It = function(w) {
    var Q;
    if (dt("beforeSanitizeElements", w, null), Ft(w) || tt(/[\u0080-\uFFFF]/, w.nodeName))
      return wt(w), !0;
    var U = Ve(w.nodeName);
    if (dt("uponSanitizeElement", w, {
      tagName: U,
      allowedTags: R
    }), w.hasChildNodes() && !xt(w.firstElementChild) && (!xt(w.content) || !xt(w.content.firstElementChild)) && tt(/<[/\w]/g, w.innerHTML) && tt(/<[/\w]/g, w.textContent) || U === "select" && tt(/<template/i, w.innerHTML) || w.nodeType === 7 || ee && w.nodeType === 8 && tt(/<[/\w]/g, w.data))
      return wt(w), !0;
    if (!R[U] || k[U]) {
      if (!k[U] && Kt(U) && (G.tagNameCheck instanceof RegExp && tt(G.tagNameCheck, U) || G.tagNameCheck instanceof Function && G.tagNameCheck(U)))
        return !1;
      if (ae && !_e[U]) {
        var Se = z(w) || w.parentNode, Le = B(w) || w.childNodes;
        if (Le && Se)
          for (var De = Le.length, qe = De - 1; qe >= 0; --qe) {
            var lt = x(Le[qe], !0);
            lt.__removalCount = (w.__removalCount || 0) + 1, Se.insertBefore(lt, N(w));
          }
      }
      return wt(w), !0;
    }
    return w instanceof v && !kr(w) || (U === "noscript" || U === "noembed" || U === "noframes") && tt(/<\/no(script|embed|frames)/i, w.innerHTML) ? (wt(w), !0) : (ce && w.nodeType === 3 && (Q = w.textContent, Q = Tt(Q, Ee, " "), Q = Tt(Q, xe, " "), Q = Tt(Q, Xe, " "), w.textContent !== Q && (Hr(t.removed, {
      element: w.cloneNode()
    }), w.textContent = Q)), dt("afterSanitizeElements", w, null), !1);
  }, Cr = function(w, Q, U) {
    if (Ue && (Q === "id" || Q === "name") && (U in o || U in yt))
      return !1;
    if (!(K && !re[Q] && tt(Pe, Q)) && !(J && tt(ke, Q))) {
      if (!F[Q] || re[Q]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Kt(w) && (G.tagNameCheck instanceof RegExp && tt(G.tagNameCheck, w) || G.tagNameCheck instanceof Function && G.tagNameCheck(w)) && (G.attributeNameCheck instanceof RegExp && tt(G.attributeNameCheck, Q) || G.attributeNameCheck instanceof Function && G.attributeNameCheck(Q)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          Q === "is" && G.allowCustomizedBuiltInElements && (G.tagNameCheck instanceof RegExp && tt(G.tagNameCheck, U) || G.tagNameCheck instanceof Function && G.tagNameCheck(U)))
        ) return !1;
      } else if (!Nt[Q] && !tt(D, Tt(U, Ge, "")) && !((Q === "src" || Q === "xlink:href" || Q === "href") && w !== "script" && zs(U, "data:") === 0 && ir[w]) && !(V && !tt(Fe, Tt(U, Ge, ""))) && U)
        return !1;
    }
    return !0;
  }, Kt = function(w) {
    return w !== "annotation-xml" && wo(w, Ye);
  }, zt = function(w) {
    var Q, U, Se, Le;
    dt("beforeSanitizeAttributes", w, null);
    var De = w.attributes;
    if (De) {
      var qe = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: F
      };
      for (Le = De.length; Le--; ) {
        Q = De[Le];
        var lt = Q, at = lt.name, Je = lt.namespaceURI;
        if (U = at === "value" ? Q.value : $s(Q.value), Se = Ve(at), qe.attrName = Se, qe.attrValue = U, qe.keepAttr = !0, qe.forceKeepAttr = void 0, dt("uponSanitizeAttribute", w, qe), U = qe.attrValue, !qe.forceKeepAttr && (Xt(at, w), !!qe.keepAttr)) {
          if (!ne && tt(/\/>/i, U)) {
            Xt(at, w);
            continue;
          }
          ce && (U = Tt(U, Ee, " "), U = Tt(U, xe, " "), U = Tt(U, Xe, " "));
          var St = Ve(w.nodeName);
          if (Cr(St, Se, U)) {
            if (ge && (Se === "id" || Se === "name") && (Xt(at, w), U = $ + U), ee && tt(/((--!?|])>)|<\/(style|title)/i, U)) {
              Xt(at, w);
              continue;
            }
            if (H && tr(Z) === "object" && typeof Z.getAttributeType == "function" && !Je)
              switch (Z.getAttributeType(St, Se)) {
                case "TrustedHTML": {
                  U = H.createHTML(U);
                  break;
                }
                case "TrustedScriptURL": {
                  U = H.createScriptURL(U);
                  break;
                }
              }
            try {
              Je ? w.setAttributeNS(Je, at, U) : w.setAttribute(at, U), Ft(w) ? wt(w) : vo(t.removed);
            } catch {
            }
          }
        }
      }
      dt("afterSanitizeAttributes", w, null);
    }
  }, $t = function w(Q) {
    var U, Se = dr(Q);
    for (dt("beforeSanitizeShadowDOM", Q, null); U = Se.nextNode(); )
      dt("uponSanitizeShadowNode", U, null), !It(U) && (U.content instanceof c && w(U.content), zt(U));
    dt("afterSanitizeShadowDOM", Q, null);
  };
  return t.sanitize = function(w) {
    var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, U, Se, Le, De, qe;
    if (sr = !w, sr && (w = "<!-->"), typeof w != "string" && !xt(w))
      if (typeof w.toString == "function") {
        if (w = w.toString(), typeof w != "string")
          throw ra("dirty is not a string, aborting");
      } else
        throw ra("toString is not a function");
    if (!t.isSupported) {
      if (tr(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof w == "string")
          return e.toStaticHTML(w);
        if (xt(w))
          return e.toStaticHTML(w.outerHTML);
      }
      return w;
    }
    if (te || ut(Q), t.removed = [], typeof w == "string" && (et = !1), et) {
      if (w.nodeName) {
        var lt = Ve(w.nodeName);
        if (!R[lt] || k[lt])
          throw ra("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (w instanceof g)
      U = Lt("<!---->"), Se = U.ownerDocument.importNode(w, !0), Se.nodeType === 1 && Se.nodeName === "BODY" || Se.nodeName === "HTML" ? U = Se : U.appendChild(Se);
    else {
      if (!ze && !ce && !le && // eslint-disable-next-line unicorn/prefer-includes
      w.indexOf("<") === -1)
        return H && Ke ? H.createHTML(w) : w;
      if (U = Lt(w), !U)
        return ze ? null : Ke ? S : "";
    }
    U && fe && wt(U.firstChild);
    for (var at = dr(et ? w : U); Le = at.nextNode(); )
      Le.nodeType === 3 && Le === De || It(Le) || (Le.content instanceof c && $t(Le.content), zt(Le), De = Le);
    if (De = null, et)
      return w;
    if (ze) {
      if (ue)
        for (qe = Ne.call(U.ownerDocument); U.firstChild; )
          qe.appendChild(U.firstChild);
      else
        qe = U;
      return (F.shadowroot || F.shadowrootmod) && (qe = Ze.call(r, qe, !0)), qe;
    }
    var Je = le ? U.outerHTML : U.innerHTML;
    return le && R["!doctype"] && U.ownerDocument && U.ownerDocument.doctype && U.ownerDocument.doctype.name && tt(Qs, U.ownerDocument.doctype.name) && (Je = "<!DOCTYPE " + U.ownerDocument.doctype.name + `>
` + Je), ce && (Je = Tt(Je, Ee, " "), Je = Tt(Je, xe, " "), Je = Tt(Je, Xe, " ")), H && Ke ? H.createHTML(Je) : Je;
  }, t.setConfig = function(w) {
    ut(w), te = !0;
  }, t.clearConfig = function() {
    st = null, te = !1;
  }, t.isValidAttribute = function(w, Q, U) {
    st || ut({});
    var Se = Ve(w), Le = Ve(Q);
    return Cr(Se, Le, U);
  }, t.addHook = function(w, Q) {
    typeof Q == "function" && (we[w] = we[w] || [], Hr(we[w], Q));
  }, t.removeHook = function(w) {
    if (we[w])
      return vo(we[w]);
  }, t.removeHooks = function(w) {
    we[w] && (we[w] = []);
  }, t.removeAllHooks = function() {
    we = {};
  }, t;
}
var rl = wi();
const Er = (e) => ({ __html: rl.sanitize(e) });
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
const nl = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: o = "",
  section: c = "",
  text: u = "",
  region: g = "",
  component: v = ""
}) => {
  const { dataLayer: b } = window, y = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: o.toLowerCase(),
    region: g.toLowerCase(),
    section: c.toLowerCase(),
    text: u.toLowerCase(),
    component: v.toLowerCase()
  };
  b && b.push(y);
};
var br = {}, _o;
function al() {
  if (_o) return br;
  _o = 1;
  var e = rt;
  function t(n) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, f = 1; f < arguments.length; f++) l += "&args[]=" + encodeURIComponent(arguments[f]);
    return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, o = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, u = {};
  function g(n) {
    return r.call(u, n) ? !0 : r.call(c, n) ? !1 : o.test(n) ? u[n] = !0 : (c[n] = !0, !1);
  }
  function v(n, l, f, m, O, _, j) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = m, this.attributeNamespace = O, this.mustUseProperty = f, this.propertyName = n, this.type = l, this.sanitizeURL = _, this.removeEmptyString = j;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    b[n] = new v(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var l = n[0];
    b[l] = new v(l, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    b[n] = new v(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    b[n] = new v(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    b[n] = new v(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    b[n] = new v(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    b[n] = new v(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    b[n] = new v(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    b[n] = new v(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var y = /[\-:]([a-z])/g;
  function T(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var l = n.replace(
      y,
      T
    );
    b[l] = new v(l, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var l = n.replace(y, T);
    b[l] = new v(l, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var l = n.replace(y, T);
    b[l] = new v(l, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    b[n] = new v(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    b[n] = new v(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  var C = {
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
  Object.keys(C).forEach(function(n) {
    L.forEach(function(l) {
      l = l + n.charAt(0).toUpperCase() + n.substring(1), C[l] = C[n];
    });
  });
  var Z = /["'&<>]/;
  function I(n) {
    if (typeof n == "boolean" || typeof n == "number") return "" + n;
    n = "" + n;
    var l = Z.exec(n);
    if (l) {
      var f = "", m, O = 0;
      for (m = l.index; m < n.length; m++) {
        switch (n.charCodeAt(m)) {
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
        O !== m && (f += n.substring(O, m)), O = m + 1, f += l;
      }
      n = O !== m ? f + n.substring(O, m) : f;
    }
    return n;
  }
  var x = /([A-Z])/g, N = /^ms-/, B = Array.isArray;
  function z(n, l) {
    return { insertionMode: n, selectedValue: l };
  }
  function q(n, l, f) {
    switch (l) {
      case "select":
        return z(1, f.value != null ? f.value : f.defaultValue);
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
    return 4 <= n.insertionMode || n.insertionMode === 0 ? z(1, null) : n;
  }
  var H = /* @__PURE__ */ new Map();
  function S(n, l, f) {
    if (typeof f != "object") throw Error(t(62));
    l = !0;
    for (var m in f) if (r.call(f, m)) {
      var O = f[m];
      if (O != null && typeof O != "boolean" && O !== "") {
        if (m.indexOf("--") === 0) {
          var _ = I(m);
          O = I(("" + O).trim());
        } else {
          _ = m;
          var j = H.get(_);
          j !== void 0 || (j = I(_.replace(x, "-$1").toLowerCase().replace(N, "-ms-")), H.set(_, j)), _ = j, O = typeof O == "number" ? O === 0 || r.call(C, m) ? "" + O : O + "px" : I(("" + O).trim());
        }
        l ? (l = !1, n.push(' style="', _, ":", O)) : n.push(";", _, ":", O);
      }
    }
    l || n.push('"');
  }
  function oe(n, l, f, m) {
    switch (f) {
      case "style":
        S(n, l, m);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < f.length) || f[0] !== "o" && f[0] !== "O" || f[1] !== "n" && f[1] !== "N") {
      if (l = b.hasOwnProperty(f) ? b[f] : null, l !== null) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!l.acceptsBooleans) return;
        }
        switch (f = l.attributeName, l.type) {
          case 3:
            m && n.push(" ", f, '=""');
            break;
          case 4:
            m === !0 ? n.push(" ", f, '=""') : m !== !1 && n.push(" ", f, '="', I(m), '"');
            break;
          case 5:
            isNaN(m) || n.push(" ", f, '="', I(m), '"');
            break;
          case 6:
            !isNaN(m) && 1 <= m && n.push(" ", f, '="', I(m), '"');
            break;
          default:
            l.sanitizeURL && (m = "" + m), n.push(" ", f, '="', I(m), '"');
        }
      } else if (g(f)) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = f.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        n.push(" ", f, '="', I(m), '"');
      }
    }
  }
  function pe(n, l, f) {
    if (l != null) {
      if (f != null) throw Error(t(60));
      if (typeof l != "object" || !("__html" in l)) throw Error(t(61));
      l = l.__html, l != null && n.push("" + l);
    }
  }
  function Ce(n) {
    var l = "";
    return e.Children.forEach(n, function(f) {
      f != null && (l += f);
    }), l;
  }
  function Ne(n, l, f, m) {
    n.push(he(f));
    var O = f = null, _;
    for (_ in l) if (r.call(l, _)) {
      var j = l[_];
      if (j != null) switch (_) {
        case "children":
          f = j;
          break;
        case "dangerouslySetInnerHTML":
          O = j;
          break;
        default:
          oe(n, m, _, j);
      }
    }
    return n.push(">"), pe(n, O, f), typeof f == "string" ? (n.push(I(f)), null) : f;
  }
  var Be = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ze = /* @__PURE__ */ new Map();
  function he(n) {
    var l = Ze.get(n);
    if (l === void 0) {
      if (!Be.test(n)) throw Error(t(65, n));
      l = "<" + n, Ze.set(n, l);
    }
    return l;
  }
  function we(n, l, f, m, O) {
    switch (l) {
      case "select":
        n.push(he("select"));
        var _ = null, j = null;
        for (me in f) if (r.call(f, me)) {
          var X = f[me];
          if (X != null) switch (me) {
            case "children":
              _ = X;
              break;
            case "dangerouslySetInnerHTML":
              j = X;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              oe(n, m, me, X);
          }
        }
        return n.push(">"), pe(n, j, _), _;
      case "option":
        j = O.selectedValue, n.push(he("option"));
        var ie = X = null, de = null, me = null;
        for (_ in f) if (r.call(f, _)) {
          var He = f[_];
          if (He != null) switch (_) {
            case "children":
              X = He;
              break;
            case "selected":
              de = He;
              break;
            case "dangerouslySetInnerHTML":
              me = He;
              break;
            case "value":
              ie = He;
            default:
              oe(n, m, _, He);
          }
        }
        if (j != null) if (f = ie !== null ? "" + ie : Ce(X), B(j)) {
          for (m = 0; m < j.length; m++)
            if ("" + j[m] === f) {
              n.push(' selected=""');
              break;
            }
        } else "" + j === f && n.push(' selected=""');
        else de && n.push(' selected=""');
        return n.push(">"), pe(n, me, X), X;
      case "textarea":
        n.push(he("textarea")), me = j = _ = null;
        for (X in f) if (r.call(f, X) && (ie = f[X], ie != null)) switch (X) {
          case "children":
            me = ie;
            break;
          case "value":
            _ = ie;
            break;
          case "defaultValue":
            j = ie;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            oe(
              n,
              m,
              X,
              ie
            );
        }
        if (_ === null && j !== null && (_ = j), n.push(">"), me != null) {
          if (_ != null) throw Error(t(92));
          if (B(me) && 1 < me.length) throw Error(t(93));
          _ = "" + me;
        }
        return typeof _ == "string" && _[0] === `
` && n.push(`
`), _ !== null && n.push(I("" + _)), null;
      case "input":
        n.push(he("input")), ie = me = X = _ = null;
        for (j in f) if (r.call(f, j) && (de = f[j], de != null)) switch (j) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ie = de;
            break;
          case "defaultValue":
            X = de;
            break;
          case "checked":
            me = de;
            break;
          case "value":
            _ = de;
            break;
          default:
            oe(n, m, j, de);
        }
        return me !== null ? oe(n, m, "checked", me) : ie !== null && oe(n, m, "checked", ie), _ !== null ? oe(n, m, "value", _) : X !== null && oe(n, m, "value", X), n.push("/>"), null;
      case "menuitem":
        n.push(he("menuitem"));
        for (var kt in f) if (r.call(f, kt) && (_ = f[kt], _ != null)) switch (kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            oe(n, m, kt, _);
        }
        return n.push(">"), null;
      case "title":
        n.push(he("title")), _ = null;
        for (He in f) if (r.call(f, He) && (j = f[He], j != null)) switch (He) {
          case "children":
            _ = j;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            oe(n, m, He, j);
        }
        return n.push(">"), _;
      case "listing":
      case "pre":
        n.push(he(l)), j = _ = null;
        for (ie in f) if (r.call(f, ie) && (X = f[ie], X != null)) switch (ie) {
          case "children":
            _ = X;
            break;
          case "dangerouslySetInnerHTML":
            j = X;
            break;
          default:
            oe(n, m, ie, X);
        }
        if (n.push(">"), j != null) {
          if (_ != null) throw Error(t(60));
          if (typeof j != "object" || !("__html" in j)) throw Error(t(61));
          f = j.__html, f != null && (typeof f == "string" && 0 < f.length && f[0] === `
` ? n.push(`
`, f) : n.push("" + f));
        }
        return typeof _ == "string" && _[0] === `
` && n.push(`
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
        n.push(he(l));
        for (var Ct in f) if (r.call(f, Ct) && (_ = f[Ct], _ != null)) switch (Ct) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, l));
          default:
            oe(n, m, Ct, _);
        }
        return n.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ne(
          n,
          f,
          l,
          m
        );
      case "html":
        return O.insertionMode === 0 && n.push("<!DOCTYPE html>"), Ne(n, f, l, m);
      default:
        if (l.indexOf("-") === -1 && typeof f.is != "string") return Ne(n, f, l, m);
        n.push(he(l)), j = _ = null;
        for (de in f) if (r.call(f, de) && (X = f[de], X != null)) switch (de) {
          case "children":
            _ = X;
            break;
          case "dangerouslySetInnerHTML":
            j = X;
            break;
          case "style":
            S(n, m, X);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            g(de) && typeof X != "function" && typeof X != "symbol" && n.push(" ", de, '="', I(X), '"');
        }
        return n.push(">"), pe(n, j, _), _;
    }
  }
  function Ee(n, l, f) {
    if (n.push('<!--$?--><template id="'), f === null) throw Error(t(395));
    return n.push(f), n.push('"></template>');
  }
  function xe(n, l, f, m) {
    switch (f.insertionMode) {
      case 0:
      case 1:
        return n.push('<div hidden id="'), n.push(l.segmentPrefix), l = m.toString(16), n.push(l), n.push('">');
      case 2:
        return n.push('<svg aria-hidden="true" style="display:none" id="'), n.push(l.segmentPrefix), l = m.toString(16), n.push(l), n.push('">');
      case 3:
        return n.push('<math aria-hidden="true" style="display:none" id="'), n.push(l.segmentPrefix), l = m.toString(16), n.push(l), n.push('">');
      case 4:
        return n.push('<table hidden id="'), n.push(l.segmentPrefix), l = m.toString(16), n.push(l), n.push('">');
      case 5:
        return n.push('<table hidden><tbody id="'), n.push(l.segmentPrefix), l = m.toString(16), n.push(l), n.push('">');
      case 6:
        return n.push('<table hidden><tr id="'), n.push(l.segmentPrefix), l = m.toString(16), n.push(l), n.push('">');
      case 7:
        return n.push('<table hidden><colgroup id="'), n.push(l.segmentPrefix), l = m.toString(16), n.push(l), n.push('">');
      default:
        throw Error(t(397));
    }
  }
  function Xe(n, l) {
    switch (l.insertionMode) {
      case 0:
      case 1:
        return n.push("</div>");
      case 2:
        return n.push("</svg>");
      case 3:
        return n.push("</math>");
      case 4:
        return n.push("</table>");
      case 5:
        return n.push("</tbody></table>");
      case 6:
        return n.push("</tr></table>");
      case 7:
        return n.push("</colgroup></table>");
      default:
        throw Error(t(397));
    }
  }
  var Pe = /[<\u2028\u2029]/g;
  function ke(n) {
    return JSON.stringify(n).replace(Pe, function(l) {
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
  function Fe(n, l) {
    return l = l === void 0 ? "" : l, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: l + "P:", segmentPrefix: l + "S:", boundaryPrefix: l + "B:", idPrefix: l, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: n };
  }
  function Ge(n, l, f, m) {
    return f.generateStaticMarkup ? (n.push(I(l)), !1) : (l === "" ? n = m : (m && n.push("<!-- -->"), n.push(I(l)), n = !0), n);
  }
  var Ye = Object.assign, D = Symbol.for("react.element"), R = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), k = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), ce = Symbol.for("react.scope"), ee = Symbol.for("react.debug_trace_mode"), le = Symbol.for("react.legacy_hidden"), te = Symbol.for("react.default_value"), fe = Symbol.iterator;
  function ze(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case P:
        return "Fragment";
      case R:
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
    if (typeof n == "object") switch (n.$$typeof) {
      case k:
        return (n.displayName || "Context") + ".Consumer";
      case G:
        return (n._context.displayName || "Context") + ".Provider";
      case re:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case V:
        return l = n.displayName || null, l !== null ? l : ze(n.type) || "Memo";
      case ne:
        l = n._payload, n = n._init;
        try {
          return ze(n(l));
        } catch {
        }
    }
    return null;
  }
  var ue = {};
  function Ke(n, l) {
    if (n = n.contextTypes, !n) return ue;
    var f = {}, m;
    for (m in n) f[m] = l[m];
    return f;
  }
  var Ue = null;
  function ge(n, l) {
    if (n !== l) {
      n.context._currentValue2 = n.parentValue, n = n.parent;
      var f = l.parent;
      if (n === null) {
        if (f !== null) throw Error(t(401));
      } else {
        if (f === null) throw Error(t(401));
        ge(n, f);
      }
      l.context._currentValue2 = l.value;
    }
  }
  function $(n) {
    n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && $(n);
  }
  function ae(n) {
    var l = n.parent;
    l !== null && ae(l), n.context._currentValue2 = n.value;
  }
  function et(n, l) {
    if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null) throw Error(t(402));
    n.depth === l.depth ? ge(n, l) : et(n, l);
  }
  function Qe(n, l) {
    var f = l.parent;
    if (f === null) throw Error(t(402));
    n.depth === f.depth ? ge(n, f) : Qe(n, f), l.context._currentValue2 = l.value;
  }
  function _e(n) {
    var l = Ue;
    l !== n && (l === null ? ae(n) : n === null ? $(l) : l.depth === n.depth ? ge(l, n) : l.depth > n.depth ? et(l, n) : Qe(l, n), Ue = n);
  }
  var or = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(n, l) {
    n = n._reactInternals, n.queue !== null && n.queue.push(l);
  }, enqueueReplaceState: function(n, l) {
    n = n._reactInternals, n.replace = !0, n.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function ir(n, l, f, m) {
    var O = n.state !== void 0 ? n.state : null;
    n.updater = or, n.props = f, n.state = O;
    var _ = { queue: [], replace: !1 };
    n._reactInternals = _;
    var j = l.contextType;
    if (n.context = typeof j == "object" && j !== null ? j._currentValue2 : m, j = l.getDerivedStateFromProps, typeof j == "function" && (j = j(f, O), O = j == null ? O : Ye({}, O, j), n.state = O), typeof l.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function")) if (l = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && or.enqueueReplaceState(n, n.state, null), _.queue !== null && 0 < _.queue.length) if (l = _.queue, j = _.replace, _.queue = null, _.replace = !1, j && l.length === 1) n.state = l[0];
    else {
      for (_ = j ? l[0] : n.state, O = !0, j = j ? 1 : 0; j < l.length; j++) {
        var X = l[j];
        X = typeof X == "function" ? X.call(n, _, f, m) : X, X != null && (O ? (O = !1, _ = Ye({}, _, X)) : Ye(_, X));
      }
      n.state = _;
    }
    else _.queue = null;
  }
  var Sr = { id: 1, overflow: "" };
  function Nt(n, l, f) {
    var m = n.id;
    n = n.overflow;
    var O = 32 - Pt(m) - 1;
    m &= ~(1 << O), f += 1;
    var _ = 32 - Pt(l) + O;
    if (30 < _) {
      var j = O - O % 5;
      return _ = (m & (1 << j) - 1).toString(32), m >>= j, O -= j, { id: 1 << 32 - Pt(l) + O | f << O | m, overflow: _ + n };
    }
    return { id: 1 << _ | f << O | m, overflow: n };
  }
  var Pt = Math.clz32 ? Math.clz32 : ct, Ht = Math.log, Gt = Math.LN2;
  function ct(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ht(n) / Gt | 0) | 0;
  }
  function Ot(n, l) {
    return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
  }
  var sr = typeof Object.is == "function" ? Object.is : Ot, nt = null, lr = null, it = null, Te = null, Dt = !1, Ve = !1, st = 0, yt = null, jt = 0;
  function ut() {
    if (nt === null) throw Error(t(321));
    return nt;
  }
  function cr() {
    if (0 < jt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Yt() {
    return Te === null ? it === null ? (Dt = !1, it = Te = cr()) : (Dt = !0, Te = it) : Te.next === null ? (Dt = !1, Te = Te.next = cr()) : (Dt = !0, Te = Te.next), Te;
  }
  function ur() {
    lr = nt = null, Ve = !1, it = null, jt = 0, Te = yt = null;
  }
  function Mt(n, l) {
    return typeof l == "function" ? l(n) : l;
  }
  function Zt(n, l, f) {
    if (nt = ut(), Te = Yt(), Dt) {
      var m = Te.queue;
      if (l = m.dispatch, yt !== null && (f = yt.get(m), f !== void 0)) {
        yt.delete(m), m = Te.memoizedState;
        do
          m = n(m, f.action), f = f.next;
        while (f !== null);
        return Te.memoizedState = m, [m, l];
      }
      return [Te.memoizedState, l];
    }
    return n = n === Mt ? typeof l == "function" ? l() : l : f !== void 0 ? f(l) : l, Te.memoizedState = n, n = Te.queue = { last: null, dispatch: null }, n = n.dispatch = wt.bind(null, nt, n), [Te.memoizedState, n];
  }
  function kr(n, l) {
    if (nt = ut(), Te = Yt(), l = l === void 0 ? null : l, Te !== null) {
      var f = Te.memoizedState;
      if (f !== null && l !== null) {
        var m = f[1];
        e: if (m === null) m = !1;
        else {
          for (var O = 0; O < m.length && O < l.length; O++) if (!sr(l[O], m[O])) {
            m = !1;
            break e;
          }
          m = !0;
        }
        if (m) return f[0];
      }
    }
    return n = n(), Te.memoizedState = [n, l], n;
  }
  function wt(n, l, f) {
    if (25 <= jt) throw Error(t(301));
    if (n === nt) if (Ve = !0, n = { action: f, next: null }, yt === null && (yt = /* @__PURE__ */ new Map()), f = yt.get(l), f === void 0) yt.set(l, n);
    else {
      for (l = f; l.next !== null; ) l = l.next;
      l.next = n;
    }
  }
  function Xt() {
    throw Error(t(394));
  }
  function Lt() {
  }
  var dr = { readContext: function(n) {
    return n._currentValue2;
  }, useContext: function(n) {
    return ut(), n._currentValue2;
  }, useMemo: kr, useReducer: Zt, useRef: function(n) {
    nt = ut(), Te = Yt();
    var l = Te.memoizedState;
    return l === null ? (n = { current: n }, Te.memoizedState = n) : l;
  }, useState: function(n) {
    return Zt(Mt, n);
  }, useInsertionEffect: Lt, useLayoutEffect: function() {
  }, useCallback: function(n, l) {
    return kr(function() {
      return n;
    }, l);
  }, useImperativeHandle: Lt, useEffect: Lt, useDebugValue: Lt, useDeferredValue: function(n) {
    return ut(), n;
  }, useTransition: function() {
    return ut(), [
      !1,
      Xt
    ];
  }, useId: function() {
    var n = lr.treeContext, l = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - Pt(n) - 1)).toString(32) + l;
    var f = Ft;
    if (f === null) throw Error(t(404));
    return l = st++, n = ":" + f.idPrefix + "R" + n, 0 < l && (n += "H" + l.toString(32)), n + ":";
  }, useMutableSource: function(n, l) {
    return ut(), l(n._source);
  }, useSyncExternalStore: function(n, l, f) {
    if (f === void 0) throw Error(t(407));
    return f();
  } }, Ft = null, xt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function dt(n) {
    return console.error(n), null;
  }
  function It() {
  }
  function Cr(n, l, f, m, O, _, j, X, ie) {
    var de = [], me = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: m, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: me, pingedTasks: de, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: O === void 0 ? dt : O, onAllReady: It, onShellReady: j === void 0 ? It : j, onShellError: It, onFatalError: It }, f = zt(l, 0, null, f, !1, !1), f.parentFlushed = !0, n = Kt(l, n, null, f, me, ue, null, Sr), de.push(n), l;
  }
  function Kt(n, l, f, m, O, _, j, X) {
    n.allPendingTasks++, f === null ? n.pendingRootTasks++ : f.pendingTasks++;
    var ie = { node: l, ping: function() {
      var de = n.pingedTasks;
      de.push(ie), de.length === 1 && tn(n);
    }, blockedBoundary: f, blockedSegment: m, abortSet: O, legacyContext: _, context: j, treeContext: X };
    return O.add(ie), ie;
  }
  function zt(n, l, f, m, O, _) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: m, boundary: f, lastPushedText: O, textEmbedded: _ };
  }
  function $t(n, l) {
    if (n = n.onError(l), n != null && typeof n != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
    return n;
  }
  function w(n, l) {
    var f = n.onShellError;
    f(l), f = n.onFatalError, f(l), n.destination !== null ? (n.status = 2, n.destination.destroy(l)) : (n.status = 1, n.fatalError = l);
  }
  function Q(n, l, f, m, O) {
    for (nt = {}, lr = l, st = 0, n = f(m, O); Ve; ) Ve = !1, st = 0, jt += 1, Te = null, n = f(m, O);
    return ur(), n;
  }
  function U(n, l, f, m) {
    var O = f.render(), _ = m.childContextTypes;
    if (_ != null) {
      var j = l.legacyContext;
      if (typeof f.getChildContext != "function") m = j;
      else {
        f = f.getChildContext();
        for (var X in f) if (!(X in _)) throw Error(t(108, ze(m) || "Unknown", X));
        m = Ye({}, j, f);
      }
      l.legacyContext = m, De(n, l, O), l.legacyContext = j;
    } else De(n, l, O);
  }
  function Se(n, l) {
    if (n && n.defaultProps) {
      l = Ye({}, l), n = n.defaultProps;
      for (var f in n) l[f] === void 0 && (l[f] = n[f]);
      return l;
    }
    return l;
  }
  function Le(n, l, f, m, O) {
    if (typeof f == "function") if (f.prototype && f.prototype.isReactComponent) {
      O = Ke(f, l.legacyContext);
      var _ = f.contextType;
      _ = new f(m, typeof _ == "object" && _ !== null ? _._currentValue2 : O), ir(_, f, m, O), U(n, l, _, f);
    } else {
      _ = Ke(f, l.legacyContext), O = Q(n, l, f, m, _);
      var j = st !== 0;
      if (typeof O == "object" && O !== null && typeof O.render == "function" && O.$$typeof === void 0) ir(O, f, m, _), U(n, l, O, f);
      else if (j) {
        m = l.treeContext, l.treeContext = Nt(m, 1, 0);
        try {
          De(n, l, O);
        } finally {
          l.treeContext = m;
        }
      } else De(n, l, O);
    }
    else if (typeof f == "string") {
      switch (O = l.blockedSegment, _ = we(O.chunks, f, m, n.responseState, O.formatContext), O.lastPushedText = !1, j = O.formatContext, O.formatContext = q(j, f, m), lt(n, l, _), O.formatContext = j, f) {
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
          O.chunks.push("</", f, ">");
      }
      O.lastPushedText = !1;
    } else {
      switch (f) {
        case le:
        case ee:
        case F:
        case p:
        case P:
          De(n, l, m.children);
          return;
        case K:
          De(n, l, m.children);
          return;
        case ce:
          throw Error(t(343));
        case J:
          e: {
            f = l.blockedBoundary, O = l.blockedSegment, _ = m.fallback, m = m.children, j = /* @__PURE__ */ new Set();
            var X = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: j, errorDigest: null }, ie = zt(n, O.chunks.length, X, O.formatContext, !1, !1);
            O.children.push(ie), O.lastPushedText = !1;
            var de = zt(n, 0, null, O.formatContext, !1, !1);
            de.parentFlushed = !0, l.blockedBoundary = X, l.blockedSegment = de;
            try {
              if (lt(
                n,
                l,
                m
              ), n.responseState.generateStaticMarkup || de.lastPushedText && de.textEmbedded && de.chunks.push("<!-- -->"), de.status = 1, St(X, de), X.pendingTasks === 0) break e;
            } catch (me) {
              de.status = 4, X.forceClientRender = !0, X.errorDigest = $t(n, me);
            } finally {
              l.blockedBoundary = f, l.blockedSegment = O;
            }
            l = Kt(n, _, f, ie, j, l.legacyContext, l.context, l.treeContext), n.pingedTasks.push(l);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case re:
          if (m = Q(n, l, f.render, m, O), st !== 0) {
            f = l.treeContext, l.treeContext = Nt(f, 1, 0);
            try {
              De(n, l, m);
            } finally {
              l.treeContext = f;
            }
          } else De(n, l, m);
          return;
        case V:
          f = f.type, m = Se(f, m), Le(n, l, f, m, O);
          return;
        case G:
          if (O = m.children, f = f._context, m = m.value, _ = f._currentValue2, f._currentValue2 = m, j = Ue, Ue = m = { parent: j, depth: j === null ? 0 : j.depth + 1, context: f, parentValue: _, value: m }, l.context = m, De(n, l, O), n = Ue, n === null) throw Error(t(403));
          m = n.parentValue, n.context._currentValue2 = m === te ? n.context._defaultValue : m, n = Ue = n.parent, l.context = n;
          return;
        case k:
          m = m.children, m = m(f._currentValue2), De(n, l, m);
          return;
        case ne:
          O = f._init, f = O(f._payload), m = Se(f, m), Le(
            n,
            l,
            f,
            m,
            void 0
          );
          return;
      }
      throw Error(t(130, f == null ? f : typeof f, ""));
    }
  }
  function De(n, l, f) {
    if (l.node = f, typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case D:
          Le(n, l, f.type, f.props, f.ref);
          return;
        case R:
          throw Error(t(257));
        case ne:
          var m = f._init;
          f = m(f._payload), De(n, l, f);
          return;
      }
      if (B(f)) {
        qe(n, l, f);
        return;
      }
      if (f === null || typeof f != "object" ? m = null : (m = fe && f[fe] || f["@@iterator"], m = typeof m == "function" ? m : null), m && (m = m.call(f))) {
        if (f = m.next(), !f.done) {
          var O = [];
          do
            O.push(f.value), f = m.next();
          while (!f.done);
          qe(n, l, O);
        }
        return;
      }
      throw n = Object.prototype.toString.call(f), Error(t(31, n === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : n));
    }
    typeof f == "string" ? (m = l.blockedSegment, m.lastPushedText = Ge(l.blockedSegment.chunks, f, n.responseState, m.lastPushedText)) : typeof f == "number" && (m = l.blockedSegment, m.lastPushedText = Ge(l.blockedSegment.chunks, "" + f, n.responseState, m.lastPushedText));
  }
  function qe(n, l, f) {
    for (var m = f.length, O = 0; O < m; O++) {
      var _ = l.treeContext;
      l.treeContext = Nt(_, m, O);
      try {
        lt(n, l, f[O]);
      } finally {
        l.treeContext = _;
      }
    }
  }
  function lt(n, l, f) {
    var m = l.blockedSegment.formatContext, O = l.legacyContext, _ = l.context;
    try {
      return De(n, l, f);
    } catch (ie) {
      if (ur(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
        f = ie;
        var j = l.blockedSegment, X = zt(n, j.chunks.length, null, j.formatContext, j.lastPushedText, !0);
        j.children.push(X), j.lastPushedText = !1, n = Kt(n, l.node, l.blockedBoundary, X, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, f.then(n, n), l.blockedSegment.formatContext = m, l.legacyContext = O, l.context = _, _e(_);
      } else throw l.blockedSegment.formatContext = m, l.legacyContext = O, l.context = _, _e(_), ie;
    }
  }
  function at(n) {
    var l = n.blockedBoundary;
    n = n.blockedSegment, n.status = 3, Qt(this, l, n);
  }
  function Je(n, l, f) {
    var m = n.blockedBoundary;
    n.blockedSegment.status = 3, m === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.push(null))) : (m.pendingTasks--, m.forceClientRender || (m.forceClientRender = !0, n = f === void 0 ? Error(t(432)) : f, m.errorDigest = l.onError(n), m.parentFlushed && l.clientRenderedBoundaries.push(m)), m.fallbackAbortableTasks.forEach(function(O) {
      return Je(O, l, f);
    }), m.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (m = l.onAllReady, m()));
  }
  function St(n, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var f = l.children[0];
      f.id = l.id, f.parentFlushed = !0, f.status === 1 && St(n, f);
    } else n.completedSegments.push(l);
  }
  function Qt(n, l, f) {
    if (l === null) {
      if (f.parentFlushed) {
        if (n.completedRootSegment !== null) throw Error(t(389));
        n.completedRootSegment = f;
      }
      n.pendingRootTasks--, n.pendingRootTasks === 0 && (n.onShellError = It, l = n.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (f.parentFlushed && f.status === 1 && St(l, f), l.parentFlushed && n.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(at, n), l.fallbackAbortableTasks.clear()) : f.parentFlushed && f.status === 1 && (St(l, f), l.completedSegments.length === 1 && l.parentFlushed && n.partialBoundaries.push(l)));
    n.allPendingTasks--, n.allPendingTasks === 0 && (n = n.onAllReady, n());
  }
  function tn(n) {
    if (n.status !== 2) {
      var l = Ue, f = xt.current;
      xt.current = dr;
      var m = Ft;
      Ft = n.responseState;
      try {
        var O = n.pingedTasks, _;
        for (_ = 0; _ < O.length; _++) {
          var j = O[_], X = n, ie = j.blockedSegment;
          if (ie.status === 0) {
            _e(j.context);
            try {
              De(X, j, j.node), X.responseState.generateStaticMarkup || ie.lastPushedText && ie.textEmbedded && ie.chunks.push("<!-- -->"), j.abortSet.delete(j), ie.status = 1, Qt(X, j.blockedBoundary, ie);
            } catch (ft) {
              if (ur(), typeof ft == "object" && ft !== null && typeof ft.then == "function") {
                var de = j.ping;
                ft.then(de, de);
              } else {
                j.abortSet.delete(j), ie.status = 4;
                var me = j.blockedBoundary, He = ft, kt = $t(X, He);
                if (me === null ? w(X, He) : (me.pendingTasks--, me.forceClientRender || (me.forceClientRender = !0, me.errorDigest = kt, me.parentFlushed && X.clientRenderedBoundaries.push(me))), X.allPendingTasks--, X.allPendingTasks === 0) {
                  var Ct = X.onAllReady;
                  Ct();
                }
              }
            } finally {
            }
          }
        }
        O.splice(0, _), n.destination !== null && _r(n, n.destination);
      } catch (ft) {
        $t(n, ft), w(n, ft);
      } finally {
        Ft = m, xt.current = f, f === dr && _e(l);
      }
    }
  }
  function fr(n, l, f) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        var m = f.id = n.nextSegmentId++;
        return f.lastPushedText = !1, f.textEmbedded = !1, n = n.responseState, l.push('<template id="'), l.push(n.placeholderPrefix), n = m.toString(16), l.push(n), l.push('"></template>');
      case 1:
        f.status = 2;
        var O = !0;
        m = f.chunks;
        var _ = 0;
        f = f.children;
        for (var j = 0; j < f.length; j++) {
          for (O = f[j]; _ < O.index; _++) l.push(m[_]);
          O = pr(n, l, O);
        }
        for (; _ < m.length - 1; _++) l.push(m[_]);
        return _ < m.length && (O = l.push(m[_])), O;
      default:
        throw Error(t(390));
    }
  }
  function pr(n, l, f) {
    var m = f.boundary;
    if (m === null) return fr(n, l, f);
    if (m.parentFlushed = !0, m.forceClientRender) return n.responseState.generateStaticMarkup || (m = m.errorDigest, l.push("<!--$!-->"), l.push("<template"), m && (l.push(' data-dgst="'), m = I(m), l.push(m), l.push('"')), l.push("></template>")), fr(n, l, f), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
    if (0 < m.pendingTasks) {
      m.rootSegmentID = n.nextSegmentId++, 0 < m.completedSegments.length && n.partialBoundaries.push(m);
      var O = n.responseState, _ = O.nextSuspenseID++;
      return O = O.boundaryPrefix + _.toString(16), m = m.id = O, Ee(l, n.responseState, m), fr(n, l, f), l.push("<!--/$-->");
    }
    if (m.byteSize > n.progressiveChunkSize) return m.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(m), Ee(l, n.responseState, m.id), fr(n, l, f), l.push("<!--/$-->");
    if (n.responseState.generateStaticMarkup || l.push("<!--$-->"), f = m.completedSegments, f.length !== 1) throw Error(t(391));
    return pr(n, l, f[0]), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
  }
  function jr(n, l, f) {
    return xe(l, n.responseState, f.formatContext, f.id), pr(n, l, f), Xe(l, f.formatContext);
  }
  function Mr(n, l, f) {
    for (var m = f.completedSegments, O = 0; O < m.length; O++) Lr(n, l, f, m[O]);
    if (m.length = 0, n = n.responseState, m = f.id, f = f.rootSegmentID, l.push(n.startInlineScript), n.sentCompleteBoundaryFunction ? l.push('$RC("') : (n.sentCompleteBoundaryFunction = !0, l.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), m === null) throw Error(t(395));
    return f = f.toString(16), l.push(m), l.push('","'), l.push(n.segmentPrefix), l.push(f), l.push('")<\/script>');
  }
  function Lr(n, l, f, m) {
    if (m.status === 2) return !0;
    var O = m.id;
    if (O === -1) {
      if ((m.id = f.rootSegmentID) === -1) throw Error(t(392));
      return jr(n, l, m);
    }
    return jr(n, l, m), n = n.responseState, l.push(n.startInlineScript), n.sentCompleteSegmentFunction ? l.push('$RS("') : (n.sentCompleteSegmentFunction = !0, l.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), l.push(n.segmentPrefix), O = O.toString(16), l.push(O), l.push('","'), l.push(n.placeholderPrefix), l.push(O), l.push('")<\/script>');
  }
  function _r(n, l) {
    try {
      var f = n.completedRootSegment;
      if (f !== null && n.pendingRootTasks === 0) {
        pr(n, l, f), n.completedRootSegment = null;
        var m = n.responseState.bootstrapChunks;
        for (f = 0; f < m.length - 1; f++) l.push(m[f]);
        f < m.length && l.push(m[f]);
      }
      var O = n.clientRenderedBoundaries, _;
      for (_ = 0; _ < O.length; _++) {
        var j = O[_];
        m = l;
        var X = n.responseState, ie = j.id, de = j.errorDigest, me = j.errorMessage, He = j.errorComponentStack;
        if (m.push(X.startInlineScript), X.sentClientRenderFunction ? m.push('$RX("') : (X.sentClientRenderFunction = !0, m.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ie === null) throw Error(t(395));
        if (m.push(ie), m.push('"'), de || me || He) {
          m.push(",");
          var kt = ke(de || "");
          m.push(kt);
        }
        if (me || He) {
          m.push(",");
          var Ct = ke(me || "");
          m.push(Ct);
        }
        if (He) {
          m.push(",");
          var ft = ke(He);
          m.push(ft);
        }
        if (!m.push(")<\/script>")) {
          n.destination = null, _++, O.splice(0, _);
          return;
        }
      }
      O.splice(0, _);
      var hr = n.completedBoundaries;
      for (_ = 0; _ < hr.length; _++) if (!Mr(n, l, hr[_])) {
        n.destination = null, _++, hr.splice(0, _);
        return;
      }
      hr.splice(0, _);
      var Bt = n.partialBoundaries;
      for (_ = 0; _ < Bt.length; _++) {
        var zr = Bt[_];
        e: {
          O = n, j = l;
          var gr = zr.completedSegments;
          for (X = 0; X < gr.length; X++) if (!Lr(O, j, zr, gr[X])) {
            X++, gr.splice(0, X);
            var an = !1;
            break e;
          }
          gr.splice(0, X), an = !0;
        }
        if (!an) {
          n.destination = null, _++, Bt.splice(0, _);
          return;
        }
      }
      Bt.splice(0, _);
      var Jt = n.completedBoundaries;
      for (_ = 0; _ < Jt.length; _++) if (!Mr(n, l, Jt[_])) {
        n.destination = null, _++, Jt.splice(0, _);
        return;
      }
      Jt.splice(0, _);
    } finally {
      n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && l.push(null);
    }
  }
  function rn(n, l) {
    try {
      var f = n.abortableTasks;
      f.forEach(function(m) {
        return Je(m, n, l);
      }), f.clear(), n.destination !== null && _r(n, n.destination);
    } catch (m) {
      $t(n, m), w(n, m);
    }
  }
  function nn() {
  }
  function Fr(n, l, f, m) {
    var O = !1, _ = null, j = "", X = { push: function(de) {
      return de !== null && (j += de), !0;
    }, destroy: function(de) {
      O = !0, _ = de;
    } }, ie = !1;
    if (n = Cr(n, Fe(f, l ? l.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, nn, void 0, function() {
      ie = !0;
    }), tn(n), rn(n, m), n.status === 1) n.status = 2, X.destroy(n.fatalError);
    else if (n.status !== 2 && n.destination === null) {
      n.destination = X;
      try {
        _r(n, X);
      } catch (de) {
        $t(n, de), w(n, de);
      }
    }
    if (O) throw _;
    if (!ie) throw Error(t(426));
    return j;
  }
  return br.renderToNodeStream = function() {
    throw Error(t(207));
  }, br.renderToStaticMarkup = function(n, l) {
    return Fr(n, l, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, br.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, br.renderToString = function(n, l) {
    return Fr(n, l, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, br.version = "18.3.1", br;
}
var wn = {}, Eo;
function ol() {
  if (Eo) return wn;
  Eo = 1;
  var e = rt;
  function t(a) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++) s += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, o = 0;
  function c(a, s) {
    if (s.length !== 0) if (512 < s.length) 0 < o && (a.enqueue(new Uint8Array(r.buffer, 0, o)), r = new Uint8Array(512), o = 0), a.enqueue(s);
    else {
      var d = r.length - o;
      d < s.length && (d === 0 ? a.enqueue(r) : (r.set(s.subarray(0, d), o), a.enqueue(r), s = s.subarray(d)), r = new Uint8Array(512), o = 0), r.set(s, o), o += s.length;
    }
  }
  function u(a, s) {
    return c(a, s), !0;
  }
  function g(a) {
    r && 0 < o && (a.enqueue(new Uint8Array(r.buffer, 0, o)), r = null, o = 0);
  }
  var v = new TextEncoder();
  function b(a) {
    return v.encode(a);
  }
  function y(a) {
    return v.encode(a);
  }
  function T(a, s) {
    typeof a.error == "function" ? a.error(s) : a.close();
  }
  var C = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Z = {}, I = {};
  function x(a) {
    return C.call(I, a) ? !0 : C.call(Z, a) ? !1 : L.test(a) ? I[a] = !0 : (Z[a] = !0, !1);
  }
  function N(a, s, d, h, A, E, M) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = h, this.attributeNamespace = A, this.mustUseProperty = d, this.propertyName = a, this.type = s, this.sanitizeURL = E, this.removeEmptyString = M;
  }
  var B = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    B[a] = new N(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var s = a[0];
    B[s] = new N(s, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    B[a] = new N(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    B[a] = new N(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    B[a] = new N(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    B[a] = new N(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    B[a] = new N(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    B[a] = new N(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    B[a] = new N(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var z = /[\-:]([a-z])/g;
  function q(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var s = a.replace(
      z,
      q
    );
    B[s] = new N(s, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var s = a.replace(z, q);
    B[s] = new N(s, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var s = a.replace(z, q);
    B[s] = new N(s, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    B[a] = new N(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), B.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    B[a] = new N(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var H = {
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
  }, S = ["Webkit", "ms", "Moz", "O"];
  Object.keys(H).forEach(function(a) {
    S.forEach(function(s) {
      s = s + a.charAt(0).toUpperCase() + a.substring(1), H[s] = H[a];
    });
  });
  var oe = /["'&<>]/;
  function pe(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var s = oe.exec(a);
    if (s) {
      var d = "", h, A = 0;
      for (h = s.index; h < a.length; h++) {
        switch (a.charCodeAt(h)) {
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
        A !== h && (d += a.substring(A, h)), A = h + 1, d += s;
      }
      a = A !== h ? d + a.substring(A, h) : d;
    }
    return a;
  }
  var Ce = /([A-Z])/g, Ne = /^ms-/, Be = Array.isArray, Ze = y("<script>"), he = y("<\/script>"), we = y('<script src="'), Ee = y('<script type="module" src="'), xe = y('" async=""><\/script>'), Xe = /(<\/|<)(s)(cript)/gi;
  function Pe(a, s, d, h) {
    return "" + s + (d === "s" ? "\\u0073" : "\\u0053") + h;
  }
  function ke(a, s, d, h, A) {
    a = a === void 0 ? "" : a, s = s === void 0 ? Ze : y('<script nonce="' + pe(s) + '">');
    var E = [];
    if (d !== void 0 && E.push(s, b(("" + d).replace(Xe, Pe)), he), h !== void 0) for (d = 0; d < h.length; d++) E.push(we, b(pe(h[d])), xe);
    if (A !== void 0) for (h = 0; h < A.length; h++) E.push(Ee, b(pe(A[h])), xe);
    return { bootstrapChunks: E, startInlineScript: s, placeholderPrefix: y(a + "P:"), segmentPrefix: y(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Fe(a, s) {
    return { insertionMode: a, selectedValue: s };
  }
  function Ge(a) {
    return Fe(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Ye(a, s, d) {
    switch (s) {
      case "select":
        return Fe(1, d.value != null ? d.value : d.defaultValue);
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
    return 4 <= a.insertionMode || a.insertionMode === 0 ? Fe(1, null) : a;
  }
  var D = y("<!-- -->");
  function R(a, s, d, h) {
    return s === "" ? h : (h && a.push(D), a.push(b(pe(s))), !0);
  }
  var P = /* @__PURE__ */ new Map(), F = y(' style="'), p = y(":"), G = y(";");
  function k(a, s, d) {
    if (typeof d != "object") throw Error(t(62));
    s = !0;
    for (var h in d) if (C.call(d, h)) {
      var A = d[h];
      if (A != null && typeof A != "boolean" && A !== "") {
        if (h.indexOf("--") === 0) {
          var E = b(pe(h));
          A = b(pe(("" + A).trim()));
        } else {
          E = h;
          var M = P.get(E);
          M !== void 0 || (M = y(pe(E.replace(Ce, "-$1").toLowerCase().replace(Ne, "-ms-"))), P.set(E, M)), E = M, A = typeof A == "number" ? A === 0 || C.call(H, h) ? b("" + A) : b(A + "px") : b(pe(("" + A).trim()));
        }
        s ? (s = !1, a.push(F, E, p, A)) : a.push(G, E, p, A);
      }
    }
    s || a.push(K);
  }
  var re = y(" "), J = y('="'), K = y('"'), V = y('=""');
  function ne(a, s, d, h) {
    switch (d) {
      case "style":
        k(a, s, h);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < d.length) || d[0] !== "o" && d[0] !== "O" || d[1] !== "n" && d[1] !== "N") {
      if (s = B.hasOwnProperty(d) ? B[d] : null, s !== null) {
        switch (typeof h) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (d = b(s.attributeName), s.type) {
          case 3:
            h && a.push(re, d, V);
            break;
          case 4:
            h === !0 ? a.push(re, d, V) : h !== !1 && a.push(re, d, J, b(pe(h)), K);
            break;
          case 5:
            isNaN(h) || a.push(re, d, J, b(pe(h)), K);
            break;
          case 6:
            !isNaN(h) && 1 <= h && a.push(re, d, J, b(pe(h)), K);
            break;
          default:
            s.sanitizeURL && (h = "" + h), a.push(re, d, J, b(pe(h)), K);
        }
      } else if (x(d)) {
        switch (typeof h) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = d.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        a.push(re, b(d), J, b(pe(h)), K);
      }
    }
  }
  var ce = y(">"), ee = y("/>");
  function le(a, s, d) {
    if (s != null) {
      if (d != null) throw Error(t(60));
      if (typeof s != "object" || !("__html" in s)) throw Error(t(61));
      s = s.__html, s != null && a.push(b("" + s));
    }
  }
  function te(a) {
    var s = "";
    return e.Children.forEach(a, function(d) {
      d != null && (s += d);
    }), s;
  }
  var fe = y(' selected=""');
  function ze(a, s, d, h) {
    a.push(ge(d));
    var A = d = null, E;
    for (E in s) if (C.call(s, E)) {
      var M = s[E];
      if (M != null) switch (E) {
        case "children":
          d = M;
          break;
        case "dangerouslySetInnerHTML":
          A = M;
          break;
        default:
          ne(a, h, E, M);
      }
    }
    return a.push(ce), le(a, A, d), typeof d == "string" ? (a.push(b(pe(d))), null) : d;
  }
  var ue = y(`
`), Ke = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ue = /* @__PURE__ */ new Map();
  function ge(a) {
    var s = Ue.get(a);
    if (s === void 0) {
      if (!Ke.test(a)) throw Error(t(65, a));
      s = y("<" + a), Ue.set(a, s);
    }
    return s;
  }
  var $ = y("<!DOCTYPE html>");
  function ae(a, s, d, h, A) {
    switch (s) {
      case "select":
        a.push(ge("select"));
        var E = null, M = null;
        for (ye in d) if (C.call(d, ye)) {
          var W = d[ye];
          if (W != null) switch (ye) {
            case "children":
              E = W;
              break;
            case "dangerouslySetInnerHTML":
              M = W;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(a, h, ye, W);
          }
        }
        return a.push(ce), le(a, M, E), E;
      case "option":
        M = A.selectedValue, a.push(ge("option"));
        var se = W = null, ve = null, ye = null;
        for (E in d) if (C.call(d, E)) {
          var We = d[E];
          if (We != null) switch (E) {
            case "children":
              W = We;
              break;
            case "selected":
              ve = We;
              break;
            case "dangerouslySetInnerHTML":
              ye = We;
              break;
            case "value":
              se = We;
            default:
              ne(a, h, E, We);
          }
        }
        if (M != null) if (d = se !== null ? "" + se : te(W), Be(M)) {
          for (h = 0; h < M.length; h++)
            if ("" + M[h] === d) {
              a.push(fe);
              break;
            }
        } else "" + M === d && a.push(fe);
        else ve && a.push(fe);
        return a.push(ce), le(a, ye, W), W;
      case "textarea":
        a.push(ge("textarea")), ye = M = E = null;
        for (W in d) if (C.call(d, W) && (se = d[W], se != null)) switch (W) {
          case "children":
            ye = se;
            break;
          case "value":
            E = se;
            break;
          case "defaultValue":
            M = se;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(a, h, W, se);
        }
        if (E === null && M !== null && (E = M), a.push(ce), ye != null) {
          if (E != null) throw Error(t(92));
          if (Be(ye) && 1 < ye.length) throw Error(t(93));
          E = "" + ye;
        }
        return typeof E == "string" && E[0] === `
` && a.push(ue), E !== null && a.push(b(pe("" + E))), null;
      case "input":
        a.push(ge("input")), se = ye = W = E = null;
        for (M in d) if (C.call(d, M) && (ve = d[M], ve != null)) switch (M) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            se = ve;
            break;
          case "defaultValue":
            W = ve;
            break;
          case "checked":
            ye = ve;
            break;
          case "value":
            E = ve;
            break;
          default:
            ne(a, h, M, ve);
        }
        return ye !== null ? ne(
          a,
          h,
          "checked",
          ye
        ) : se !== null && ne(a, h, "checked", se), E !== null ? ne(a, h, "value", E) : W !== null && ne(a, h, "value", W), a.push(ee), null;
      case "menuitem":
        a.push(ge("menuitem"));
        for (var ht in d) if (C.call(d, ht) && (E = d[ht], E != null)) switch (ht) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(a, h, ht, E);
        }
        return a.push(ce), null;
      case "title":
        a.push(ge("title")), E = null;
        for (We in d) if (C.call(d, We) && (M = d[We], M != null)) switch (We) {
          case "children":
            E = M;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(a, h, We, M);
        }
        return a.push(ce), E;
      case "listing":
      case "pre":
        a.push(ge(s)), M = E = null;
        for (se in d) if (C.call(d, se) && (W = d[se], W != null)) switch (se) {
          case "children":
            E = W;
            break;
          case "dangerouslySetInnerHTML":
            M = W;
            break;
          default:
            ne(a, h, se, W);
        }
        if (a.push(ce), M != null) {
          if (E != null) throw Error(t(60));
          if (typeof M != "object" || !("__html" in M)) throw Error(t(61));
          d = M.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? a.push(ue, b(d)) : a.push(b("" + d)));
        }
        return typeof E == "string" && E[0] === `
` && a.push(ue), E;
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
        a.push(ge(s));
        for (var _t in d) if (C.call(d, _t) && (E = d[_t], E != null)) switch (_t) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, s));
          default:
            ne(a, h, _t, E);
        }
        return a.push(ee), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ze(a, d, s, h);
      case "html":
        return A.insertionMode === 0 && a.push($), ze(a, d, s, h);
      default:
        if (s.indexOf("-") === -1 && typeof d.is != "string") return ze(a, d, s, h);
        a.push(ge(s)), M = E = null;
        for (ve in d) if (C.call(d, ve) && (W = d[ve], W != null)) switch (ve) {
          case "children":
            E = W;
            break;
          case "dangerouslySetInnerHTML":
            M = W;
            break;
          case "style":
            k(a, h, W);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            x(ve) && typeof W != "function" && typeof W != "symbol" && a.push(re, b(ve), J, b(pe(W)), K);
        }
        return a.push(ce), le(a, M, E), E;
    }
  }
  var et = y("</"), Qe = y(">"), _e = y('<template id="'), or = y('"></template>'), ir = y("<!--$-->"), Sr = y('<!--$?--><template id="'), Nt = y('"></template>'), Pt = y("<!--$!-->"), Ht = y("<!--/$-->"), Gt = y("<template"), ct = y('"'), Ot = y(' data-dgst="');
  y(' data-msg="'), y(' data-stck="');
  var sr = y("></template>");
  function nt(a, s, d) {
    if (c(a, Sr), d === null) throw Error(t(395));
    return c(a, d), u(a, Nt);
  }
  var lr = y('<div hidden id="'), it = y('">'), Te = y("</div>"), Dt = y('<svg aria-hidden="true" style="display:none" id="'), Ve = y('">'), st = y("</svg>"), yt = y('<math aria-hidden="true" style="display:none" id="'), jt = y('">'), ut = y("</math>"), cr = y('<table hidden id="'), Yt = y('">'), ur = y("</table>"), Mt = y('<table hidden><tbody id="'), Zt = y('">'), kr = y("</tbody></table>"), wt = y('<table hidden><tr id="'), Xt = y('">'), Lt = y("</tr></table>"), dr = y('<table hidden><colgroup id="'), Ft = y('">'), xt = y("</colgroup></table>");
  function dt(a, s, d, h) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return c(a, lr), c(a, s.segmentPrefix), c(a, b(h.toString(16))), u(a, it);
      case 2:
        return c(a, Dt), c(a, s.segmentPrefix), c(a, b(h.toString(16))), u(a, Ve);
      case 3:
        return c(a, yt), c(a, s.segmentPrefix), c(a, b(h.toString(16))), u(a, jt);
      case 4:
        return c(a, cr), c(a, s.segmentPrefix), c(a, b(h.toString(16))), u(a, Yt);
      case 5:
        return c(a, Mt), c(a, s.segmentPrefix), c(a, b(h.toString(16))), u(a, Zt);
      case 6:
        return c(a, wt), c(a, s.segmentPrefix), c(a, b(h.toString(16))), u(a, Xt);
      case 7:
        return c(
          a,
          dr
        ), c(a, s.segmentPrefix), c(a, b(h.toString(16))), u(a, Ft);
      default:
        throw Error(t(397));
    }
  }
  function It(a, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return u(a, Te);
      case 2:
        return u(a, st);
      case 3:
        return u(a, ut);
      case 4:
        return u(a, ur);
      case 5:
        return u(a, kr);
      case 6:
        return u(a, Lt);
      case 7:
        return u(a, xt);
      default:
        throw Error(t(397));
    }
  }
  var Cr = y('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Kt = y('$RS("'), zt = y('","'), $t = y('")<\/script>'), w = y('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Q = y('$RC("'), U = y('","'), Se = y('")<\/script>'), Le = y('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), De = y('$RX("'), qe = y('"'), lt = y(")<\/script>"), at = y(","), Je = /[<\u2028\u2029]/g;
  function St(a) {
    return JSON.stringify(a).replace(Je, function(s) {
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
  var Qt = Object.assign, tn = Symbol.for("react.element"), fr = Symbol.for("react.portal"), pr = Symbol.for("react.fragment"), jr = Symbol.for("react.strict_mode"), Mr = Symbol.for("react.profiler"), Lr = Symbol.for("react.provider"), _r = Symbol.for("react.context"), rn = Symbol.for("react.forward_ref"), nn = Symbol.for("react.suspense"), Fr = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), f = Symbol.for("react.scope"), m = Symbol.for("react.debug_trace_mode"), O = Symbol.for("react.legacy_hidden"), _ = Symbol.for("react.default_value"), j = Symbol.iterator;
  function X(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case pr:
        return "Fragment";
      case fr:
        return "Portal";
      case Mr:
        return "Profiler";
      case jr:
        return "StrictMode";
      case nn:
        return "Suspense";
      case Fr:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case _r:
        return (a.displayName || "Context") + ".Consumer";
      case Lr:
        return (a._context.displayName || "Context") + ".Provider";
      case rn:
        var s = a.render;
        return a = a.displayName, a || (a = s.displayName || s.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case n:
        return s = a.displayName || null, s !== null ? s : X(a.type) || "Memo";
      case l:
        s = a._payload, a = a._init;
        try {
          return X(a(s));
        } catch {
        }
    }
    return null;
  }
  var ie = {};
  function de(a, s) {
    if (a = a.contextTypes, !a) return ie;
    var d = {}, h;
    for (h in a) d[h] = s[h];
    return d;
  }
  var me = null;
  function He(a, s) {
    if (a !== s) {
      a.context._currentValue = a.parentValue, a = a.parent;
      var d = s.parent;
      if (a === null) {
        if (d !== null) throw Error(t(401));
      } else {
        if (d === null) throw Error(t(401));
        He(a, d);
      }
      s.context._currentValue = s.value;
    }
  }
  function kt(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && kt(a);
  }
  function Ct(a) {
    var s = a.parent;
    s !== null && Ct(s), a.context._currentValue = a.value;
  }
  function ft(a, s) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === s.depth ? He(a, s) : ft(a, s);
  }
  function hr(a, s) {
    var d = s.parent;
    if (d === null) throw Error(t(402));
    a.depth === d.depth ? He(a, d) : hr(a, d), s.context._currentValue = s.value;
  }
  function Bt(a) {
    var s = me;
    s !== a && (s === null ? Ct(a) : a === null ? kt(s) : s.depth === a.depth ? He(s, a) : s.depth > a.depth ? ft(s, a) : hr(s, a), me = a);
  }
  var zr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, s) {
    a = a._reactInternals, a.queue !== null && a.queue.push(s);
  }, enqueueReplaceState: function(a, s) {
    a = a._reactInternals, a.replace = !0, a.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function gr(a, s, d, h) {
    var A = a.state !== void 0 ? a.state : null;
    a.updater = zr, a.props = d, a.state = A;
    var E = { queue: [], replace: !1 };
    a._reactInternals = E;
    var M = s.contextType;
    if (a.context = typeof M == "object" && M !== null ? M._currentValue : h, M = s.getDerivedStateFromProps, typeof M == "function" && (M = M(d, A), A = M == null ? A : Qt({}, A, M), a.state = A), typeof s.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (s = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), s !== a.state && zr.enqueueReplaceState(a, a.state, null), E.queue !== null && 0 < E.queue.length) if (s = E.queue, M = E.replace, E.queue = null, E.replace = !1, M && s.length === 1) a.state = s[0];
    else {
      for (E = M ? s[0] : a.state, A = !0, M = M ? 1 : 0; M < s.length; M++) {
        var W = s[M];
        W = typeof W == "function" ? W.call(a, E, d, h) : W, W != null && (A ? (A = !1, E = Qt({}, E, W)) : Qt(E, W));
      }
      a.state = E;
    }
    else E.queue = null;
  }
  var an = { id: 1, overflow: "" };
  function Jt(a, s, d) {
    var h = a.id;
    a = a.overflow;
    var A = 32 - on(h) - 1;
    h &= ~(1 << A), d += 1;
    var E = 32 - on(s) + A;
    if (30 < E) {
      var M = A - A % 5;
      return E = (h & (1 << M) - 1).toString(32), h >>= M, A -= M, { id: 1 << 32 - on(s) + A | d << A | h, overflow: E + a };
    }
    return { id: 1 << E | d << A | h, overflow: a };
  }
  var on = Math.clz32 ? Math.clz32 : ss, os = Math.log, is = Math.LN2;
  function ss(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (os(a) / is | 0) | 0;
  }
  function ls(a, s) {
    return a === s && (a !== 0 || 1 / a === 1 / s) || a !== a && s !== s;
  }
  var cs = typeof Object.is == "function" ? Object.is : ls, Ut = null, Vn = null, sn = null, $e = null, $r = !1, ln = !1, Br = 0, er = null, cn = 0;
  function mr() {
    if (Ut === null) throw Error(t(321));
    return Ut;
  }
  function Xa() {
    if (0 < cn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Wn() {
    return $e === null ? sn === null ? ($r = !1, sn = $e = Xa()) : ($r = !0, $e = sn) : $e.next === null ? ($r = !1, $e = $e.next = Xa()) : ($r = !0, $e = $e.next), $e;
  }
  function qn() {
    Vn = Ut = null, ln = !1, sn = null, cn = 0, $e = er = null;
  }
  function Ka(a, s) {
    return typeof s == "function" ? s(a) : s;
  }
  function Qa(a, s, d) {
    if (Ut = mr(), $e = Wn(), $r) {
      var h = $e.queue;
      if (s = h.dispatch, er !== null && (d = er.get(h), d !== void 0)) {
        er.delete(h), h = $e.memoizedState;
        do
          h = a(h, d.action), d = d.next;
        while (d !== null);
        return $e.memoizedState = h, [h, s];
      }
      return [$e.memoizedState, s];
    }
    return a = a === Ka ? typeof s == "function" ? s() : s : d !== void 0 ? d(s) : s, $e.memoizedState = a, a = $e.queue = { last: null, dispatch: null }, a = a.dispatch = us.bind(null, Ut, a), [$e.memoizedState, a];
  }
  function Ja(a, s) {
    if (Ut = mr(), $e = Wn(), s = s === void 0 ? null : s, $e !== null) {
      var d = $e.memoizedState;
      if (d !== null && s !== null) {
        var h = d[1];
        e: if (h === null) h = !1;
        else {
          for (var A = 0; A < h.length && A < s.length; A++) if (!cs(s[A], h[A])) {
            h = !1;
            break e;
          }
          h = !0;
        }
        if (h) return d[0];
      }
    }
    return a = a(), $e.memoizedState = [a, s], a;
  }
  function us(a, s, d) {
    if (25 <= cn) throw Error(t(301));
    if (a === Ut) if (ln = !0, a = { action: d, next: null }, er === null && (er = /* @__PURE__ */ new Map()), d = er.get(s), d === void 0) er.set(s, a);
    else {
      for (s = d; s.next !== null; ) s = s.next;
      s.next = a;
    }
  }
  function ds() {
    throw Error(t(394));
  }
  function un() {
  }
  var eo = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return mr(), a._currentValue;
  }, useMemo: Ja, useReducer: Qa, useRef: function(a) {
    Ut = mr(), $e = Wn();
    var s = $e.memoizedState;
    return s === null ? (a = { current: a }, $e.memoizedState = a) : s;
  }, useState: function(a) {
    return Qa(Ka, a);
  }, useInsertionEffect: un, useLayoutEffect: function() {
  }, useCallback: function(a, s) {
    return Ja(function() {
      return a;
    }, s);
  }, useImperativeHandle: un, useEffect: un, useDebugValue: un, useDeferredValue: function(a) {
    return mr(), a;
  }, useTransition: function() {
    return mr(), [!1, ds];
  }, useId: function() {
    var a = Vn.treeContext, s = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - on(a) - 1)).toString(32) + s;
    var d = dn;
    if (d === null) throw Error(t(404));
    return s = Br++, a = ":" + d.idPrefix + "R" + a, 0 < s && (a += "H" + s.toString(32)), a + ":";
  }, useMutableSource: function(a, s) {
    return mr(), s(a._source);
  }, useSyncExternalStore: function(a, s, d) {
    if (d === void 0) throw Error(t(407));
    return d();
  } }, dn = null, Hn = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function fs(a) {
    return console.error(a), null;
  }
  function Ur() {
  }
  function ps(a, s, d, h, A, E, M, W, se) {
    var ve = [], ye = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: h === void 0 ? 12800 : h, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ye, pingedTasks: ve, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: A === void 0 ? fs : A, onAllReady: E === void 0 ? Ur : E, onShellReady: M === void 0 ? Ur : M, onShellError: W === void 0 ? Ur : W, onFatalError: se === void 0 ? Ur : se }, d = fn(s, 0, null, d, !1, !1), d.parentFlushed = !0, a = Gn(s, a, null, d, ye, ie, null, an), ve.push(a), s;
  }
  function Gn(a, s, d, h, A, E, M, W) {
    a.allPendingTasks++, d === null ? a.pendingRootTasks++ : d.pendingTasks++;
    var se = { node: s, ping: function() {
      var ve = a.pingedTasks;
      ve.push(se), ve.length === 1 && so(a);
    }, blockedBoundary: d, blockedSegment: h, abortSet: A, legacyContext: E, context: M, treeContext: W };
    return A.add(se), se;
  }
  function fn(a, s, d, h, A, E) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: h, boundary: d, lastPushedText: A, textEmbedded: E };
  }
  function Vr(a, s) {
    if (a = a.onError(s), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function pn(a, s) {
    var d = a.onShellError;
    d(s), d = a.onFatalError, d(s), a.destination !== null ? (a.status = 2, T(a.destination, s)) : (a.status = 1, a.fatalError = s);
  }
  function to(a, s, d, h, A) {
    for (Ut = {}, Vn = s, Br = 0, a = d(h, A); ln; ) ln = !1, Br = 0, cn += 1, $e = null, a = d(h, A);
    return qn(), a;
  }
  function ro(a, s, d, h) {
    var A = d.render(), E = h.childContextTypes;
    if (E != null) {
      var M = s.legacyContext;
      if (typeof d.getChildContext != "function") h = M;
      else {
        d = d.getChildContext();
        for (var W in d) if (!(W in E)) throw Error(t(108, X(h) || "Unknown", W));
        h = Qt({}, M, d);
      }
      s.legacyContext = h, pt(a, s, A), s.legacyContext = M;
    } else pt(a, s, A);
  }
  function no(a, s) {
    if (a && a.defaultProps) {
      s = Qt({}, s), a = a.defaultProps;
      for (var d in a) s[d] === void 0 && (s[d] = a[d]);
      return s;
    }
    return s;
  }
  function Yn(a, s, d, h, A) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      A = de(d, s.legacyContext);
      var E = d.contextType;
      E = new d(h, typeof E == "object" && E !== null ? E._currentValue : A), gr(E, d, h, A), ro(a, s, E, d);
    } else {
      E = de(d, s.legacyContext), A = to(a, s, d, h, E);
      var M = Br !== 0;
      if (typeof A == "object" && A !== null && typeof A.render == "function" && A.$$typeof === void 0) gr(A, d, h, E), ro(a, s, A, d);
      else if (M) {
        h = s.treeContext, s.treeContext = Jt(h, 1, 0);
        try {
          pt(a, s, A);
        } finally {
          s.treeContext = h;
        }
      } else pt(a, s, A);
    }
    else if (typeof d == "string") {
      switch (A = s.blockedSegment, E = ae(A.chunks, d, h, a.responseState, A.formatContext), A.lastPushedText = !1, M = A.formatContext, A.formatContext = Ye(M, d, h), Zn(a, s, E), A.formatContext = M, d) {
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
          A.chunks.push(et, b(d), Qe);
      }
      A.lastPushedText = !1;
    } else {
      switch (d) {
        case O:
        case m:
        case jr:
        case Mr:
        case pr:
          pt(a, s, h.children);
          return;
        case Fr:
          pt(a, s, h.children);
          return;
        case f:
          throw Error(t(343));
        case nn:
          e: {
            d = s.blockedBoundary, A = s.blockedSegment, E = h.fallback, h = h.children, M = /* @__PURE__ */ new Set();
            var W = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: M, errorDigest: null }, se = fn(a, A.chunks.length, W, A.formatContext, !1, !1);
            A.children.push(se), A.lastPushedText = !1;
            var ve = fn(a, 0, null, A.formatContext, !1, !1);
            ve.parentFlushed = !0, s.blockedBoundary = W, s.blockedSegment = ve;
            try {
              if (Zn(
                a,
                s,
                h
              ), ve.lastPushedText && ve.textEmbedded && ve.chunks.push(D), ve.status = 1, hn(W, ve), W.pendingTasks === 0) break e;
            } catch (ye) {
              ve.status = 4, W.forceClientRender = !0, W.errorDigest = Vr(a, ye);
            } finally {
              s.blockedBoundary = d, s.blockedSegment = A;
            }
            s = Gn(a, E, d, se, M, s.legacyContext, s.context, s.treeContext), a.pingedTasks.push(s);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case rn:
          if (h = to(a, s, d.render, h, A), Br !== 0) {
            d = s.treeContext, s.treeContext = Jt(d, 1, 0);
            try {
              pt(a, s, h);
            } finally {
              s.treeContext = d;
            }
          } else pt(a, s, h);
          return;
        case n:
          d = d.type, h = no(d, h), Yn(a, s, d, h, A);
          return;
        case Lr:
          if (A = h.children, d = d._context, h = h.value, E = d._currentValue, d._currentValue = h, M = me, me = h = { parent: M, depth: M === null ? 0 : M.depth + 1, context: d, parentValue: E, value: h }, s.context = h, pt(a, s, A), a = me, a === null) throw Error(t(403));
          h = a.parentValue, a.context._currentValue = h === _ ? a.context._defaultValue : h, a = me = a.parent, s.context = a;
          return;
        case _r:
          h = h.children, h = h(d._currentValue), pt(a, s, h);
          return;
        case l:
          A = d._init, d = A(d._payload), h = no(d, h), Yn(a, s, d, h, void 0);
          return;
      }
      throw Error(t(
        130,
        d == null ? d : typeof d,
        ""
      ));
    }
  }
  function pt(a, s, d) {
    if (s.node = d, typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case tn:
          Yn(a, s, d.type, d.props, d.ref);
          return;
        case fr:
          throw Error(t(257));
        case l:
          var h = d._init;
          d = h(d._payload), pt(a, s, d);
          return;
      }
      if (Be(d)) {
        ao(a, s, d);
        return;
      }
      if (d === null || typeof d != "object" ? h = null : (h = j && d[j] || d["@@iterator"], h = typeof h == "function" ? h : null), h && (h = h.call(d))) {
        if (d = h.next(), !d.done) {
          var A = [];
          do
            A.push(d.value), d = h.next();
          while (!d.done);
          ao(a, s, A);
        }
        return;
      }
      throw a = Object.prototype.toString.call(d), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : a));
    }
    typeof d == "string" ? (h = s.blockedSegment, h.lastPushedText = R(s.blockedSegment.chunks, d, a.responseState, h.lastPushedText)) : typeof d == "number" && (h = s.blockedSegment, h.lastPushedText = R(s.blockedSegment.chunks, "" + d, a.responseState, h.lastPushedText));
  }
  function ao(a, s, d) {
    for (var h = d.length, A = 0; A < h; A++) {
      var E = s.treeContext;
      s.treeContext = Jt(E, h, A);
      try {
        Zn(a, s, d[A]);
      } finally {
        s.treeContext = E;
      }
    }
  }
  function Zn(a, s, d) {
    var h = s.blockedSegment.formatContext, A = s.legacyContext, E = s.context;
    try {
      return pt(a, s, d);
    } catch (se) {
      if (qn(), typeof se == "object" && se !== null && typeof se.then == "function") {
        d = se;
        var M = s.blockedSegment, W = fn(a, M.chunks.length, null, M.formatContext, M.lastPushedText, !0);
        M.children.push(W), M.lastPushedText = !1, a = Gn(a, s.node, s.blockedBoundary, W, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, d.then(a, a), s.blockedSegment.formatContext = h, s.legacyContext = A, s.context = E, Bt(E);
      } else throw s.blockedSegment.formatContext = h, s.legacyContext = A, s.context = E, Bt(E), se;
    }
  }
  function hs(a) {
    var s = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, io(this, s, a);
  }
  function oo(a, s, d) {
    var h = a.blockedBoundary;
    a.blockedSegment.status = 3, h === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (h.pendingTasks--, h.forceClientRender || (h.forceClientRender = !0, a = d === void 0 ? Error(t(432)) : d, h.errorDigest = s.onError(a), h.parentFlushed && s.clientRenderedBoundaries.push(h)), h.fallbackAbortableTasks.forEach(function(A) {
      return oo(A, s, d);
    }), h.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (h = s.onAllReady, h()));
  }
  function hn(a, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var d = s.children[0];
      d.id = s.id, d.parentFlushed = !0, d.status === 1 && hn(a, d);
    } else a.completedSegments.push(s);
  }
  function io(a, s, d) {
    if (s === null) {
      if (d.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = d;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Ur, s = a.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && hn(s, d), s.parentFlushed && a.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(hs, a), s.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (hn(s, d), s.completedSegments.length === 1 && s.parentFlushed && a.partialBoundaries.push(s)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function so(a) {
    if (a.status !== 2) {
      var s = me, d = Hn.current;
      Hn.current = eo;
      var h = dn;
      dn = a.responseState;
      try {
        var A = a.pingedTasks, E;
        for (E = 0; E < A.length; E++) {
          var M = A[E], W = a, se = M.blockedSegment;
          if (se.status === 0) {
            Bt(M.context);
            try {
              pt(W, M, M.node), se.lastPushedText && se.textEmbedded && se.chunks.push(D), M.abortSet.delete(M), se.status = 1, io(W, M.blockedBoundary, se);
            } catch (Et) {
              if (qn(), typeof Et == "object" && Et !== null && typeof Et.then == "function") {
                var ve = M.ping;
                Et.then(ve, ve);
              } else {
                M.abortSet.delete(M), se.status = 4;
                var ye = M.blockedBoundary, We = Et, ht = Vr(W, We);
                if (ye === null ? pn(W, We) : (ye.pendingTasks--, ye.forceClientRender || (ye.forceClientRender = !0, ye.errorDigest = ht, ye.parentFlushed && W.clientRenderedBoundaries.push(ye))), W.allPendingTasks--, W.allPendingTasks === 0) {
                  var _t = W.onAllReady;
                  _t();
                }
              }
            } finally {
            }
          }
        }
        A.splice(0, E), a.destination !== null && Xn(a, a.destination);
      } catch (Et) {
        Vr(a, Et), pn(a, Et);
      } finally {
        dn = h, Hn.current = d, d === eo && Bt(s);
      }
    }
  }
  function gn(a, s, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var h = d.id = a.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, a = a.responseState, c(s, _e), c(s, a.placeholderPrefix), a = b(h.toString(16)), c(s, a), u(s, or);
      case 1:
        d.status = 2;
        var A = !0;
        h = d.chunks;
        var E = 0;
        d = d.children;
        for (var M = 0; M < d.length; M++) {
          for (A = d[M]; E < A.index; E++) c(s, h[E]);
          A = mn(a, s, A);
        }
        for (; E < h.length - 1; E++) c(s, h[E]);
        return E < h.length && (A = u(s, h[E])), A;
      default:
        throw Error(t(390));
    }
  }
  function mn(a, s, d) {
    var h = d.boundary;
    if (h === null) return gn(a, s, d);
    if (h.parentFlushed = !0, h.forceClientRender) h = h.errorDigest, u(s, Pt), c(s, Gt), h && (c(s, Ot), c(s, b(pe(h))), c(s, ct)), u(s, sr), gn(a, s, d);
    else if (0 < h.pendingTasks) {
      h.rootSegmentID = a.nextSegmentId++, 0 < h.completedSegments.length && a.partialBoundaries.push(h);
      var A = a.responseState, E = A.nextSuspenseID++;
      A = y(A.boundaryPrefix + E.toString(16)), h = h.id = A, nt(s, a.responseState, h), gn(a, s, d);
    } else if (h.byteSize > a.progressiveChunkSize) h.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(h), nt(s, a.responseState, h.id), gn(a, s, d);
    else {
      if (u(s, ir), d = h.completedSegments, d.length !== 1) throw Error(t(391));
      mn(a, s, d[0]);
    }
    return u(s, Ht);
  }
  function lo(a, s, d) {
    return dt(s, a.responseState, d.formatContext, d.id), mn(a, s, d), It(s, d.formatContext);
  }
  function co(a, s, d) {
    for (var h = d.completedSegments, A = 0; A < h.length; A++) uo(a, s, d, h[A]);
    if (h.length = 0, a = a.responseState, h = d.id, d = d.rootSegmentID, c(s, a.startInlineScript), a.sentCompleteBoundaryFunction ? c(s, Q) : (a.sentCompleteBoundaryFunction = !0, c(s, w)), h === null) throw Error(t(395));
    return d = b(d.toString(16)), c(s, h), c(s, U), c(s, a.segmentPrefix), c(s, d), u(s, Se);
  }
  function uo(a, s, d, h) {
    if (h.status === 2) return !0;
    var A = h.id;
    if (A === -1) {
      if ((h.id = d.rootSegmentID) === -1) throw Error(t(392));
      return lo(a, s, h);
    }
    return lo(a, s, h), a = a.responseState, c(s, a.startInlineScript), a.sentCompleteSegmentFunction ? c(s, Kt) : (a.sentCompleteSegmentFunction = !0, c(s, Cr)), c(s, a.segmentPrefix), A = b(A.toString(16)), c(s, A), c(s, zt), c(s, a.placeholderPrefix), c(s, A), u(s, $t);
  }
  function Xn(a, s) {
    r = new Uint8Array(512), o = 0;
    try {
      var d = a.completedRootSegment;
      if (d !== null && a.pendingRootTasks === 0) {
        mn(a, s, d), a.completedRootSegment = null;
        var h = a.responseState.bootstrapChunks;
        for (d = 0; d < h.length - 1; d++) c(s, h[d]);
        d < h.length && u(s, h[d]);
      }
      var A = a.clientRenderedBoundaries, E;
      for (E = 0; E < A.length; E++) {
        var M = A[E];
        h = s;
        var W = a.responseState, se = M.id, ve = M.errorDigest, ye = M.errorMessage, We = M.errorComponentStack;
        if (c(h, W.startInlineScript), W.sentClientRenderFunction ? c(h, De) : (W.sentClientRenderFunction = !0, c(
          h,
          Le
        )), se === null) throw Error(t(395));
        c(h, se), c(h, qe), (ve || ye || We) && (c(h, at), c(h, b(St(ve || "")))), (ye || We) && (c(h, at), c(h, b(St(ye || "")))), We && (c(h, at), c(h, b(St(We)))), u(h, lt);
      }
      A.splice(0, E);
      var ht = a.completedBoundaries;
      for (E = 0; E < ht.length; E++) co(a, s, ht[E]);
      ht.splice(0, E), g(s), r = new Uint8Array(512), o = 0;
      var _t = a.partialBoundaries;
      for (E = 0; E < _t.length; E++) {
        var Et = _t[E];
        e: {
          A = a, M = s;
          var yn = Et.completedSegments;
          for (W = 0; W < yn.length; W++) if (!uo(
            A,
            M,
            Et,
            yn[W]
          )) {
            W++, yn.splice(0, W);
            var po = !1;
            break e;
          }
          yn.splice(0, W), po = !0;
        }
        if (!po) {
          a.destination = null, E++, _t.splice(0, E);
          return;
        }
      }
      _t.splice(0, E);
      var Kn = a.completedBoundaries;
      for (E = 0; E < Kn.length; E++) co(a, s, Kn[E]);
      Kn.splice(0, E);
    } finally {
      g(s), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && s.close();
    }
  }
  function fo(a, s) {
    try {
      var d = a.abortableTasks;
      d.forEach(function(h) {
        return oo(h, a, s);
      }), d.clear(), a.destination !== null && Xn(a, a.destination);
    } catch (h) {
      Vr(a, h), pn(a, h);
    }
  }
  return wn.renderToReadableStream = function(a, s) {
    return new Promise(function(d, h) {
      var A, E, M = new Promise(function(ye, We) {
        E = ye, A = We;
      }), W = ps(a, ke(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), Ge(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, E, function() {
        var ye = new ReadableStream({ type: "bytes", pull: function(We) {
          if (W.status === 1) W.status = 2, T(We, W.fatalError);
          else if (W.status !== 2 && W.destination === null) {
            W.destination = We;
            try {
              Xn(W, We);
            } catch (ht) {
              Vr(W, ht), pn(W, ht);
            }
          }
        }, cancel: function() {
          fo(W);
        } }, { highWaterMark: 0 });
        ye.allReady = M, d(ye);
      }, function(ye) {
        M.catch(function() {
        }), h(ye);
      }, A);
      if (s && s.signal) {
        var se = s.signal, ve = function() {
          fo(W, se.reason), se.removeEventListener("abort", ve);
        };
        se.addEventListener("abort", ve);
      }
      so(W);
    });
  }, wn.version = "18.3.1", wn;
}
var Nr, xi;
Nr = al(), xi = ol();
Nr.version;
Nr.renderToString;
Nr.renderToStaticMarkup;
Nr.renderToNodeStream;
Nr.renderToStaticNodeStream;
xi.renderToReadableStream;
const il = "staticMarkup";
function sl() {
  const e = bs().indexOf(il) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const en = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: o } = sl(), { onClick: c, ...u } = r.props;
  if (o)
    return rt.cloneElement(r, {
      ...u,
      onClick: (b) => (nl(e), c ? c(b) : !0)
    });
  let g = "";
  ["input", "header", "header-input"].includes(t) && (g = `-${t}`);
  const v = {
    [`data-ga${g}`]: e.text,
    [`data-ga${g}-name`]: e.name,
    [`data-ga${g}-event`]: e.event,
    [`data-ga${g}-action`]: e.action,
    [`data-ga${g}-type`]: e.type,
    [`data-ga${g}-region`]: e.region,
    [`data-ga${g}-section`]: e.section,
    [`data-ga${g}-component`]: e.component
  };
  return rt.cloneElement(r, {
    ...u,
    onClick: c,
    ...v
  });
};
i.number, i.number, i.func, i.object;
i.arrayOf(yi).isRequired, i.number;
const ll = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Na = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: o,
  block: c,
  color: u,
  disabled: g,
  element: v,
  href: b,
  icon: y,
  innerRef: T,
  onClick: C,
  size: L,
  classes: Z,
  target: I,
  ...x
}) => {
  const N = Tr("btn", {
    [`btn-${u}`]: !0,
    "btn-md": L === "small",
    "btn-sm": L === "xsmall",
    "btn-block": c,
    disabled: g
  });
  let B = v;
  return b && v === "button" && (B = "a"), /* @__PURE__ */ Y.jsx(
    en,
    {
      gaData: {
        ...ll,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ Y.jsxs(
        B,
        {
          type: B === "button" && C ? "button" : void 0,
          ...x,
          className: Tr(Z) || N,
          href: b,
          ref: T,
          onClick: C,
          "aria-label": o,
          target: B === "a" ? I : null,
          children: [
            y && /* @__PURE__ */ Y.jsx("i", { className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Na.propTypes = {
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
  gaData: Ia,
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
Na.defaultProps = {
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
var Si = { exports: {} }, je = {}, To;
function cl() {
  if (To) return je;
  To = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), g = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), Z = Symbol.for("react.client.reference");
  function I(x) {
    if (typeof x == "object" && x !== null) {
      var N = x.$$typeof;
      switch (N) {
        case e:
          switch (x = x.type, x) {
            case r:
            case c:
            case o:
            case b:
            case y:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case g:
                case v:
                case C:
                case T:
                  return x;
                case u:
                  return x;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return je.ContextConsumer = u, je.ContextProvider = g, je.Element = e, je.ForwardRef = v, je.Fragment = r, je.Lazy = C, je.Memo = T, je.Portal = t, je.Profiler = c, je.StrictMode = o, je.Suspense = b, je.SuspenseList = y, je.isContextConsumer = function(x) {
    return I(x) === u;
  }, je.isContextProvider = function(x) {
    return I(x) === g;
  }, je.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, je.isForwardRef = function(x) {
    return I(x) === v;
  }, je.isFragment = function(x) {
    return I(x) === r;
  }, je.isLazy = function(x) {
    return I(x) === C;
  }, je.isMemo = function(x) {
    return I(x) === T;
  }, je.isPortal = function(x) {
    return I(x) === t;
  }, je.isProfiler = function(x) {
    return I(x) === c;
  }, je.isStrictMode = function(x) {
    return I(x) === o;
  }, je.isSuspense = function(x) {
    return I(x) === b;
  }, je.isSuspenseList = function(x) {
    return I(x) === y;
  }, je.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === c || x === o || x === b || x === y || x === L || typeof x == "object" && x !== null && (x.$$typeof === C || x.$$typeof === T || x.$$typeof === g || x.$$typeof === u || x.$$typeof === v || x.$$typeof === Z || x.getModuleId !== void 0);
  }, je.typeOf = I, je;
}
Si.exports = cl();
var Pa = Si.exports;
function ul(e) {
  function t(D, R, P, F, p) {
    for (var G = 0, k = 0, re = 0, J = 0, K, V, ne = 0, ce = 0, ee, le = ee = K = 0, te = 0, fe = 0, ze = 0, ue = 0, Ke = P.length, Ue = Ke - 1, ge, $ = "", ae = "", et = "", Qe = "", _e; te < Ke; ) {
      if (V = P.charCodeAt(te), te === Ue && k + J + re + G !== 0 && (k !== 0 && (V = k === 47 ? 10 : 47), J = re = G = 0, Ke++, Ue++), k + J + re + G === 0) {
        if (te === Ue && (0 < fe && ($ = $.replace(L, "")), 0 < $.trim().length)) {
          switch (V) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += P.charAt(te);
          }
          V = 59;
        }
        switch (V) {
          case 123:
            for ($ = $.trim(), K = $.charCodeAt(0), ee = 1, ue = ++te; te < Ke; ) {
              switch (V = P.charCodeAt(te)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (V = P.charCodeAt(te + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (le = te + 1; le < Ue; ++le)
                          switch (P.charCodeAt(le)) {
                            case 47:
                              if (V === 42 && P.charCodeAt(le - 1) === 42 && te + 2 !== le) {
                                te = le + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (V === 47) {
                                te = le + 1;
                                break e;
                              }
                          }
                        te = le;
                      }
                  }
                  break;
                case 91:
                  V++;
                case 40:
                  V++;
                case 34:
                case 39:
                  for (; te++ < Ue && P.charCodeAt(te) !== V; )
                    ;
              }
              if (ee === 0) break;
              te++;
            }
            switch (ee = P.substring(ue, te), K === 0 && (K = ($ = $.replace(C, "").trim()).charCodeAt(0)), K) {
              case 64:
                switch (0 < fe && ($ = $.replace(L, "")), V = $.charCodeAt(1), V) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = R;
                    break;
                  default:
                    fe = Xe;
                }
                if (ee = t(R, fe, ee, V, p + 1), ue = ee.length, 0 < ke && (fe = r(Xe, $, ze), _e = v(3, ee, fe, R, we, he, ue, V, p, F), $ = fe.join(""), _e !== void 0 && (ue = (ee = _e.trim()).length) === 0 && (V = 0, ee = "")), 0 < ue) switch (V) {
                  case 115:
                    $ = $.replace(oe, g);
                  case 100:
                  case 109:
                  case 45:
                    ee = $ + "{" + ee + "}";
                    break;
                  case 107:
                    $ = $.replace(z, "$1 $2"), ee = $ + "{" + ee + "}", ee = xe === 1 || xe === 2 && u("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                    break;
                  default:
                    ee = $ + ee, F === 112 && (ee = (ae += ee, ""));
                }
                else ee = "";
                break;
              default:
                ee = t(R, r(R, $, ze), ee, F, p + 1);
            }
            et += ee, ee = ze = fe = le = K = 0, $ = "", V = P.charCodeAt(++te);
            break;
          case 125:
          case 59:
            if ($ = (0 < fe ? $.replace(L, "") : $).trim(), 1 < (ue = $.length)) switch (le === 0 && (K = $.charCodeAt(0), K === 45 || 96 < K && 123 > K) && (ue = ($ = $.replace(" ", ":")).length), 0 < ke && (_e = v(1, $, R, D, we, he, ae.length, F, p, F)) !== void 0 && (ue = ($ = _e.trim()).length) === 0 && ($ = "\0\0"), K = $.charCodeAt(0), V = $.charCodeAt(1), K) {
              case 0:
                break;
              case 64:
                if (V === 105 || V === 99) {
                  Qe += $ + P.charAt(te);
                  break;
                }
              default:
                $.charCodeAt(ue - 1) !== 58 && (ae += c($, K, V, $.charCodeAt(2)));
            }
            ze = fe = le = K = 0, $ = "", V = P.charCodeAt(++te);
        }
      }
      switch (V) {
        case 13:
        case 10:
          k === 47 ? k = 0 : 1 + K === 0 && F !== 107 && 0 < $.length && (fe = 1, $ += "\0"), 0 < ke * Ge && v(0, $, R, D, we, he, ae.length, F, p, F), he = 1, we++;
          break;
        case 59:
        case 125:
          if (k + J + re + G === 0) {
            he++;
            break;
          }
        default:
          switch (he++, ge = P.charAt(te), V) {
            case 9:
            case 32:
              if (J + G + k === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ge = "";
                  break;
                default:
                  V !== 32 && (ge = " ");
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
              J + k + G === 0 && (fe = ze = 1, ge = "\f" + ge);
              break;
            case 108:
              if (J + k + G + Ee === 0 && 0 < le) switch (te - le) {
                case 2:
                  ne === 112 && P.charCodeAt(te - 3) === 58 && (Ee = ne);
                case 8:
                  ce === 111 && (Ee = ce);
              }
              break;
            case 58:
              J + k + G === 0 && (le = te);
              break;
            case 44:
              k + re + J + G === 0 && (fe = 1, ge += "\r");
              break;
            case 34:
            case 39:
              k === 0 && (J = J === V ? 0 : J === 0 ? V : J);
              break;
            case 91:
              J + k + re === 0 && G++;
              break;
            case 93:
              J + k + re === 0 && G--;
              break;
            case 41:
              J + k + G === 0 && re--;
              break;
            case 40:
              if (J + k + G === 0) {
                if (K === 0) switch (2 * ne + 3 * ce) {
                  case 533:
                    break;
                  default:
                    K = 1;
                }
                re++;
              }
              break;
            case 64:
              k + re + J + G + le + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + G + re)) switch (k) {
                case 0:
                  switch (2 * V + 3 * P.charCodeAt(te + 1)) {
                    case 235:
                      k = 47;
                      break;
                    case 220:
                      ue = te, k = 42;
                  }
                  break;
                case 42:
                  V === 47 && ne === 42 && ue + 2 !== te && (P.charCodeAt(ue + 2) === 33 && (ae += P.substring(ue, te + 1)), ge = "", k = 0);
              }
          }
          k === 0 && ($ += ge);
      }
      ce = ne, ne = V, te++;
    }
    if (ue = ae.length, 0 < ue) {
      if (fe = R, 0 < ke && (_e = v(2, ae, fe, D, we, he, ue, F, p, F), _e !== void 0 && (ae = _e).length === 0)) return Qe + ae + et;
      if (ae = fe.join(",") + "{" + ae + "}", xe * Ee !== 0) {
        switch (xe !== 2 || u(ae, 2) || (Ee = 0), Ee) {
          case 111:
            ae = ae.replace(H, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(q, "::-webkit-input-$1") + ae.replace(q, "::-moz-$1") + ae.replace(q, ":-ms-input-$1") + ae;
        }
        Ee = 0;
      }
    }
    return Qe + ae + et;
  }
  function r(D, R, P) {
    var F = R.trim().split(N);
    R = F;
    var p = F.length, G = D.length;
    switch (G) {
      case 0:
      case 1:
        var k = 0;
        for (D = G === 0 ? "" : D[0] + " "; k < p; ++k)
          R[k] = o(D, R[k], P).trim();
        break;
      default:
        var re = k = 0;
        for (R = []; k < p; ++k)
          for (var J = 0; J < G; ++J)
            R[re++] = o(D[J] + " ", F[k], P).trim();
    }
    return R;
  }
  function o(D, R, P) {
    var F = R.charCodeAt(0);
    switch (33 > F && (F = (R = R.trim()).charCodeAt(0)), F) {
      case 38:
        return R.replace(B, "$1" + D.trim());
      case 58:
        return D.trim() + R.replace(B, "$1" + D.trim());
      default:
        if (0 < 1 * P && 0 < R.indexOf("\f")) return R.replace(B, (D.charCodeAt(0) === 58 ? "" : "$1") + D.trim());
    }
    return D + R;
  }
  function c(D, R, P, F) {
    var p = D + ";", G = 2 * R + 3 * P + 4 * F;
    if (G === 944) {
      D = p.indexOf(":", 9) + 1;
      var k = p.substring(D, p.length - 1).trim();
      return k = p.substring(0, D).trim() + k + ";", xe === 1 || xe === 2 && u(k, 1) ? "-webkit-" + k + k : k;
    }
    if (xe === 0 || xe === 2 && !u(p, 1)) return p;
    switch (G) {
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
        if (0 < p.indexOf("image-set(", 11)) return p.replace(Ze, "$1-webkit-$2") + p;
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
        return k = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + k + "-webkit-" + p + "-ms-flex-pack" + k + p;
      case 1005:
        return I.test(p) ? p.replace(Z, ":-webkit-") + p.replace(Z, ":-moz-") + p : p;
      case 1e3:
        switch (k = p.substring(13).trim(), R = k.indexOf("-") + 1, k.charCodeAt(0) + k.charCodeAt(R)) {
          case 226:
            k = p.replace(S, "tb");
            break;
          case 232:
            k = p.replace(S, "tb-rl");
            break;
          case 220:
            k = p.replace(S, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + k + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (R = (p = D).length - 10, k = (p.charCodeAt(R) === 33 ? p.substring(0, R) : p).substring(D.indexOf(":", 7) + 1).trim(), G = k.charCodeAt(0) + (k.charCodeAt(7) | 0)) {
          case 203:
            if (111 > k.charCodeAt(8)) break;
          case 115:
            p = p.replace(k, "-webkit-" + k) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(k, "-webkit-" + (102 < G ? "inline-" : "") + "box") + ";" + p.replace(k, "-webkit-" + k) + ";" + p.replace(k, "-ms-" + k + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return k = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + k + "-ms-flex-" + k + p;
          case 115:
            return "-webkit-" + p + "-ms-flex-item-" + p.replace(Ce, "") + p;
          default:
            return "-webkit-" + p + "-ms-flex-line-pack" + p.replace("align-content", "").replace(Ce, "") + p;
        }
        break;
      case 973:
      case 989:
        if (p.charCodeAt(3) !== 45 || p.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Be.test(D) === !0) return (k = D.substring(D.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(D.replace("stretch", "fill-available"), R, P, F).replace(":fill-available", ":stretch") : p.replace(k, "-webkit-" + k) + p.replace(k, "-moz-" + k.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, P + F === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(x, "$1-webkit-$2") + p;
    }
    return p;
  }
  function u(D, R) {
    var P = D.indexOf(R === 1 ? ":" : "{"), F = D.substring(0, R !== 3 ? P : 10);
    return P = D.substring(P + 1, D.length - 1), Fe(R !== 2 ? F : F.replace(Ne, "$1"), P, R);
  }
  function g(D, R) {
    var P = c(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return P !== R + ";" ? P.replace(pe, " or ($1)").substring(4) : "(" + R + ")";
  }
  function v(D, R, P, F, p, G, k, re, J, K) {
    for (var V = 0, ne = R, ce; V < ke; ++V)
      switch (ce = Pe[V].call(T, D, ne, P, F, p, G, k, re, J, K)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = ce;
      }
    if (ne !== R) return ne;
  }
  function b(D) {
    switch (D) {
      case void 0:
      case null:
        ke = Pe.length = 0;
        break;
      default:
        if (typeof D == "function") Pe[ke++] = D;
        else if (typeof D == "object") for (var R = 0, P = D.length; R < P; ++R)
          b(D[R]);
        else Ge = !!D | 0;
    }
    return b;
  }
  function y(D) {
    return D = D.prefix, D !== void 0 && (Fe = null, D ? typeof D != "function" ? xe = 1 : (xe = 2, Fe = D) : xe = 0), y;
  }
  function T(D, R) {
    var P = D;
    if (33 > P.charCodeAt(0) && (P = P.trim()), Ye = P, P = [Ye], 0 < ke) {
      var F = v(-1, R, P, P, we, he, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (R = F);
    }
    var p = t(Xe, P, R, 0, 0);
    return 0 < ke && (F = v(-2, p, P, P, we, he, p.length, 0, 0, 0), F !== void 0 && (p = F)), Ye = "", Ee = 0, he = we = 1, p;
  }
  var C = /^\0+/g, L = /[\0\r\f]/g, Z = /: */g, I = /zoo|gra/, x = /([,: ])(transform)/g, N = /,\r+?/g, B = /([\t\r\n ])*\f?&/g, z = /@(k\w+)\s*(\S*)\s*/, q = /::(place)/g, H = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, oe = /\(\s*(.*)\s*\)/g, pe = /([\s\S]*?);/g, Ce = /-self|flex-/g, Ne = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Be = /stretch|:\s*\w+\-(?:conte|avail)/, Ze = /([^-])(image-set\()/, he = 1, we = 1, Ee = 0, xe = 1, Xe = [], Pe = [], ke = 0, Fe = null, Ge = 0, Ye = "";
  return T.use = b, T.set = y, e !== void 0 && y(e), T;
}
var dl = {
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
function fl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var pl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ao = /* @__PURE__ */ fl(
  function(e) {
    return pl.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ki = { exports: {} }, Ae = {}, Ro;
function hl() {
  if (Ro) return Ae;
  Ro = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, g = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, T = e ? Symbol.for("react.forward_ref") : 60112, C = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, Z = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function q(S) {
    if (typeof S == "object" && S !== null) {
      var oe = S.$$typeof;
      switch (oe) {
        case t:
          switch (S = S.type, S) {
            case b:
            case y:
            case o:
            case u:
            case c:
            case C:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case v:
                case T:
                case I:
                case Z:
                case g:
                  return S;
                default:
                  return oe;
              }
          }
        case r:
          return oe;
      }
    }
  }
  function H(S) {
    return q(S) === y;
  }
  return Ae.AsyncMode = b, Ae.ConcurrentMode = y, Ae.ContextConsumer = v, Ae.ContextProvider = g, Ae.Element = t, Ae.ForwardRef = T, Ae.Fragment = o, Ae.Lazy = I, Ae.Memo = Z, Ae.Portal = r, Ae.Profiler = u, Ae.StrictMode = c, Ae.Suspense = C, Ae.isAsyncMode = function(S) {
    return H(S) || q(S) === b;
  }, Ae.isConcurrentMode = H, Ae.isContextConsumer = function(S) {
    return q(S) === v;
  }, Ae.isContextProvider = function(S) {
    return q(S) === g;
  }, Ae.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Ae.isForwardRef = function(S) {
    return q(S) === T;
  }, Ae.isFragment = function(S) {
    return q(S) === o;
  }, Ae.isLazy = function(S) {
    return q(S) === I;
  }, Ae.isMemo = function(S) {
    return q(S) === Z;
  }, Ae.isPortal = function(S) {
    return q(S) === r;
  }, Ae.isProfiler = function(S) {
    return q(S) === u;
  }, Ae.isStrictMode = function(S) {
    return q(S) === c;
  }, Ae.isSuspense = function(S) {
    return q(S) === C;
  }, Ae.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === o || S === y || S === u || S === c || S === C || S === L || typeof S == "object" && S !== null && (S.$$typeof === I || S.$$typeof === Z || S.$$typeof === g || S.$$typeof === v || S.$$typeof === T || S.$$typeof === N || S.$$typeof === B || S.$$typeof === z || S.$$typeof === x);
  }, Ae.typeOf = q, Ae;
}
ki.exports = hl();
var gl = ki.exports, Da = gl, ml = {
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
}, yl = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, bl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ci = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ja = {};
ja[Da.ForwardRef] = bl;
ja[Da.Memo] = Ci;
function Oo(e) {
  return Da.isMemo(e) ? Ci : ja[e.$$typeof] || ml;
}
var vl = Object.defineProperty, wl = Object.getOwnPropertyNames, Io = Object.getOwnPropertySymbols, xl = Object.getOwnPropertyDescriptor, Sl = Object.getPrototypeOf, No = Object.prototype;
function _i(e, t, r) {
  if (typeof t != "string") {
    if (No) {
      var o = Sl(t);
      o && o !== No && _i(e, o, r);
    }
    var c = wl(t);
    Io && (c = c.concat(Io(t)));
    for (var u = Oo(e), g = Oo(t), v = 0; v < c.length; ++v) {
      var b = c[v];
      if (!yl[b] && !(r && r[b]) && !(g && g[b]) && !(u && u[b])) {
        var y = xl(t, b);
        try {
          vl(e, b, y);
        } catch {
        }
      }
    }
  }
  return e;
}
var kl = _i;
const Cl = /* @__PURE__ */ Oa(kl);
var Oe = { env: { NODE_ENV: "production" } };
function Wt() {
  return (Wt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }).apply(this, arguments);
}
var Po = function(e, t) {
  for (var r = [e[0]], o = 0, c = t.length; o < c; o += 1) r.push(t[o], e[o + 1]);
  return r;
}, ma = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Pa.typeOf(e);
}, Nn = Object.freeze([]), rr = Object.freeze({});
function Qr(e) {
  return typeof e == "function";
}
function ya(e) {
  return Oe.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ma(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ar = typeof Oe < "u" && Oe.env !== void 0 && (Oe.env.REACT_APP_SC_ATTR || Oe.env.SC_ATTR) || "data-styled", La = typeof window < "u" && "HTMLElement" in window, _l = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Oe < "u" && Oe.env !== void 0 && (Oe.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Oe.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Oe.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Oe.env.REACT_APP_SC_DISABLE_SPEEDY : Oe.env.SC_DISABLE_SPEEDY !== void 0 && Oe.env.SC_DISABLE_SPEEDY !== "" ? Oe.env.SC_DISABLE_SPEEDY !== "false" && Oe.env.SC_DISABLE_SPEEDY : Oe.env.NODE_ENV !== "production")), El = Oe.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Tl() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, o = arguments.length; r < o; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(c) {
    e = e.replace(/%[a-z]/, c);
  }), e;
}
function Pr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  throw Oe.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Tl.apply(void 0, [El[e]].concat(r)).trim());
}
var Al = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var o = 0, c = 0; c < r; c++) o += this.groupSizes[c];
    return o;
  }, t.insertRules = function(r, o) {
    if (r >= this.groupSizes.length) {
      for (var c = this.groupSizes, u = c.length, g = u; r >= g; ) (g <<= 1) < 0 && Pr(16, "" + r);
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(c), this.length = g;
      for (var v = u; v < g; v++) this.groupSizes[v] = 0;
    }
    for (var b = this.indexOfGroup(r + 1), y = 0, T = o.length; y < T; y++) this.tag.insertRule(b, o[y]) && (this.groupSizes[r]++, b++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var o = this.groupSizes[r], c = this.indexOfGroup(r), u = c + o;
      this.groupSizes[r] = 0;
      for (var g = c; g < u; g++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var o = "";
    if (r >= this.length || this.groupSizes[r] === 0) return o;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), g = u + c, v = u; v < g; v++) o += this.tag.getRule(v) + `/*!sc*/
`;
    return o;
  }, e;
}(), Rn = /* @__PURE__ */ new Map(), Pn = /* @__PURE__ */ new Map(), Yr = 1, xn = function(e) {
  if (Rn.has(e)) return Rn.get(e);
  for (; Pn.has(Yr); ) Yr++;
  var t = Yr++;
  return Oe.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Pr(16, "" + t), Rn.set(e, t), Pn.set(t, e), t;
}, Rl = function(e) {
  return Pn.get(e);
}, Ol = function(e, t) {
  t >= Yr && (Yr = t + 1), Rn.set(e, t), Pn.set(t, e);
}, Il = "style[" + Ar + '][data-styled-version="5.3.11"]', Nl = new RegExp("^" + Ar + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Pl = function(e, t, r) {
  for (var o, c = r.split(","), u = 0, g = c.length; u < g; u++) (o = c[u]) && e.registerName(t, o);
}, Dl = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), o = [], c = 0, u = r.length; c < u; c++) {
    var g = r[c].trim();
    if (g) {
      var v = g.match(Nl);
      if (v) {
        var b = 0 | parseInt(v[1], 10), y = v[2];
        b !== 0 && (Ol(y, b), Pl(e, y, v[3]), e.getTag().insertRules(b, o)), o.length = 0;
      } else o.push(g);
    }
  }
}, jl = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ei = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), c = function(v) {
    for (var b = v.childNodes, y = b.length; y >= 0; y--) {
      var T = b[y];
      if (T && T.nodeType === 1 && T.hasAttribute(Ar)) return T;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  o.setAttribute(Ar, "active"), o.setAttribute("data-styled-version", "5.3.11");
  var g = jl();
  return g && o.setAttribute("nonce", g), r.insertBefore(o, u), o;
}, Ml = function() {
  function e(r) {
    var o = this.element = Ei(r);
    o.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, g = 0, v = u.length; g < v; g++) {
        var b = u[g];
        if (b.ownerNode === c) return b;
      }
      Pr(17);
    }(o), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    try {
      return this.sheet.insertRule(o, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var o = this.sheet.cssRules[r];
    return o !== void 0 && typeof o.cssText == "string" ? o.cssText : "";
  }, e;
}(), Ll = function() {
  function e(r) {
    var o = this.element = Ei(r);
    this.nodes = o.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    if (r <= this.length && r >= 0) {
      var c = document.createTextNode(o), u = this.nodes[r];
      return this.element.insertBefore(c, u || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Fl = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    return r <= this.length && (this.rules.splice(r, 0, o), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Do = La, zl = { isServer: !La, useCSSOMInjection: !_l }, Ti = function() {
  function e(r, o, c) {
    r === void 0 && (r = rr), o === void 0 && (o = {}), this.options = Wt({}, zl, {}, r), this.gs = o, this.names = new Map(c), this.server = !!r.isServer, !this.server && La && Do && (Do = !1, function(u) {
      for (var g = document.querySelectorAll(Il), v = 0, b = g.length; v < b; v++) {
        var y = g[v];
        y && y.getAttribute(Ar) !== "active" && (Dl(u, y), y.parentNode && y.parentNode.removeChild(y));
      }
    }(this));
  }
  e.registerId = function(r) {
    return xn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, o) {
    return o === void 0 && (o = !0), new e(Wt({}, this.options, {}, r), this.gs, o && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (o = this.options).isServer, u = o.useCSSOMInjection, g = o.target, r = c ? new Fl(g) : u ? new Ml(g) : new Ll(g), new Al(r)));
    var r, o, c, u, g;
  }, t.hasNameForId = function(r, o) {
    return this.names.has(r) && this.names.get(r).has(o);
  }, t.registerName = function(r, o) {
    if (xn(r), this.names.has(r)) this.names.get(r).add(o);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(o), this.names.set(r, c);
    }
  }, t.insertRules = function(r, o, c) {
    this.registerName(r, o), this.getTag().insertRules(xn(r), c);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(xn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var o = r.getTag(), c = o.length, u = "", g = 0; g < c; g++) {
        var v = Rl(g);
        if (v !== void 0) {
          var b = r.names.get(v), y = o.getGroup(g);
          if (b && y && b.size) {
            var T = Ar + ".g" + g + '[id="' + v + '"]', C = "";
            b !== void 0 && b.forEach(function(L) {
              L.length > 0 && (C += L + ",");
            }), u += "" + y + T + '{content:"' + C + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), $l = /(a)(d)/gi, jo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ba(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = jo(t % 52) + r;
  return (jo(t % 52) + r).replace($l, "$1-$2");
}
var vr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ai = function(e) {
  return vr(5381, e);
};
function Bl(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Qr(r) && !Ma(r)) return !1;
  }
  return !0;
}
var Ul = Ai("5.3.11"), Vl = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = Oe.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && Bl(t), this.componentId = r, this.baseHash = vr(Ul, r), this.baseStyle = o, Ti.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, o)), this.isStatic && !o.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var g = Rr(this.rules, t, r, o).join(""), v = ba(vr(this.baseHash, g) >>> 0);
      if (!r.hasNameForId(c, v)) {
        var b = o(g, "." + v, void 0, c);
        r.insertRules(c, v, b);
      }
      u.push(v), this.staticRulesId = v;
    }
    else {
      for (var y = this.rules.length, T = vr(this.baseHash, o.hash), C = "", L = 0; L < y; L++) {
        var Z = this.rules[L];
        if (typeof Z == "string") C += Z, Oe.env.NODE_ENV !== "production" && (T = vr(T, Z + L));
        else if (Z) {
          var I = Rr(Z, t, r, o), x = Array.isArray(I) ? I.join("") : I;
          T = vr(T, x + L), C += x;
        }
      }
      if (C) {
        var N = ba(T >>> 0);
        if (!r.hasNameForId(c, N)) {
          var B = o(C, "." + N, void 0, c);
          r.insertRules(c, N, B);
        }
        u.push(N);
      }
    }
    return u.join(" ");
  }, e;
}(), Wl = /^\s*\/\/.*$/gm, ql = [":", "[", ".", "#"];
function Hl(e) {
  var t, r, o, c, u = rr, g = u.options, v = g === void 0 ? rr : g, b = u.plugins, y = b === void 0 ? Nn : b, T = new ul(v), C = [], L = /* @__PURE__ */ function(x) {
    function N(B) {
      if (B) try {
        x(B + "}");
      } catch {
      }
    }
    return function(B, z, q, H, S, oe, pe, Ce, Ne, Be) {
      switch (B) {
        case 1:
          if (Ne === 0 && z.charCodeAt(0) === 64) return x(z + ";"), "";
          break;
        case 2:
          if (Ce === 0) return z + "/*|*/";
          break;
        case 3:
          switch (Ce) {
            case 102:
            case 112:
              return x(q[0] + z), "";
            default:
              return z + (Be === 0 ? "/*|*/" : "");
          }
        case -2:
          z.split("/*|*/}").forEach(N);
      }
    };
  }(function(x) {
    C.push(x);
  }), Z = function(x, N, B) {
    return N === 0 && ql.indexOf(B[r.length]) !== -1 || B.match(c) ? x : "." + t;
  };
  function I(x, N, B, z) {
    z === void 0 && (z = "&");
    var q = x.replace(Wl, ""), H = N && B ? B + " " + N + " { " + q + " }" : q;
    return t = z, r = N, o = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), T(B || !N ? "" : N, H);
  }
  return T.use([].concat(y, [function(x, N, B) {
    x === 2 && B.length && B[0].lastIndexOf(r) > 0 && (B[0] = B[0].replace(o, Z));
  }, L, function(x) {
    if (x === -2) {
      var N = C;
      return C = [], N;
    }
  }])), I.hash = y.length ? y.reduce(function(x, N) {
    return N.name || Pr(15), vr(x, N.name);
  }, 5381).toString() : "", I;
}
var Ri = rt.createContext();
Ri.Consumer;
var Oi = rt.createContext(), Gl = (Oi.Consumer, new Ti()), va = Hl();
function Yl() {
  return ar(Ri) || Gl;
}
function Zl() {
  return ar(Oi) || va;
}
var Xl = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(c, u) {
      u === void 0 && (u = va);
      var g = o.name + u.hash;
      c.hasNameForId(o.id, g) || c.insertRules(o.id, g, u(o.rules, g, "@keyframes"));
    }, this.toString = function() {
      return Pr(12, String(o.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = va), this.name + t.hash;
  }, e;
}(), Kl = /([A-Z])/, Ql = /([A-Z])/g, Jl = /^ms-/, ec = function(e) {
  return "-" + e.toLowerCase();
};
function Mo(e) {
  return Kl.test(e) ? e.replace(Ql, ec).replace(Jl, "-ms-") : e;
}
var Lo = function(e) {
  return e == null || e === !1 || e === "";
};
function Rr(e, t, r, o) {
  if (Array.isArray(e)) {
    for (var c, u = [], g = 0, v = e.length; g < v; g += 1) (c = Rr(e[g], t, r, o)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Lo(e)) return "";
  if (Ma(e)) return "." + e.styledComponentId;
  if (Qr(e)) {
    if (typeof (y = e) != "function" || y.prototype && y.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Oe.env.NODE_ENV !== "production" && Pa.isElement(b) && console.warn(ya(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Rr(b, t, r, o);
  }
  var y;
  return e instanceof Xl ? r ? (e.inject(r, o), e.getName(o)) : e : ma(e) ? function T(C, L) {
    var Z, I, x = [];
    for (var N in C) C.hasOwnProperty(N) && !Lo(C[N]) && (Array.isArray(C[N]) && C[N].isCss || Qr(C[N]) ? x.push(Mo(N) + ":", C[N], ";") : ma(C[N]) ? x.push.apply(x, T(C[N], N)) : x.push(Mo(N) + ": " + (Z = N, (I = C[N]) == null || typeof I == "boolean" || I === "" ? "" : typeof I != "number" || I === 0 || Z in dl || Z.startsWith("--") ? String(I).trim() : I + "px") + ";"));
    return L ? [L + " {"].concat(x, ["}"]) : x;
  }(e) : e.toString();
}
var Fo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function tc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  return Qr(e) || ma(e) ? Fo(Rr(Po(Nn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Fo(Rr(Po(e, r)));
}
var zo = /invalid hook call/i, Sn = /* @__PURE__ */ new Set(), rc = function(e, t) {
  if (Oe.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var c = !0;
      console.error = function(u) {
        if (zo.test(u)) c = !1, Sn.delete(r);
        else {
          for (var g = arguments.length, v = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++) v[b - 1] = arguments[b];
          o.apply(void 0, [u].concat(v));
        }
      }, Ra(), c && !Sn.has(r) && (console.warn(r), Sn.add(r));
    } catch (u) {
      zo.test(u.message) && Sn.delete(r);
    } finally {
      console.error = o;
    }
  }
}, nc = function(e, t, r) {
  return r === void 0 && (r = rr), e.theme !== r.theme && e.theme || t || r.theme;
}, ac = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, oc = /(^-|-$)/g;
function sa(e) {
  return e.replace(ac, "-").replace(oc, "");
}
var ic = function(e) {
  return ba(Ai(e) >>> 0);
};
function kn(e) {
  return typeof e == "string" && (Oe.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var wa = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, sc = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function lc(e, t, r) {
  var o = e[r];
  wa(t) && wa(o) ? Ii(o, t) : e[r] = t;
}
function Ii(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  for (var c = 0, u = r; c < u.length; c++) {
    var g = u[c];
    if (wa(g)) for (var v in g) sc(v) && lc(e, g[v], v);
  }
  return e;
}
var Ni = rt.createContext();
Ni.Consumer;
var la = {};
function Pi(e, t, r) {
  var o = Ma(e), c = !kn(e), u = t.attrs, g = u === void 0 ? Nn : u, v = t.componentId, b = v === void 0 ? function(z, q) {
    var H = typeof z != "string" ? "sc" : sa(z);
    la[H] = (la[H] || 0) + 1;
    var S = H + "-" + ic("5.3.11" + H + la[H]);
    return q ? q + "-" + S : S;
  }(t.displayName, t.parentComponentId) : v, y = t.displayName, T = y === void 0 ? function(z) {
    return kn(z) ? "styled." + z : "Styled(" + ya(z) + ")";
  }(e) : y, C = t.displayName && t.componentId ? sa(t.displayName) + "-" + t.componentId : t.componentId || b, L = o && e.attrs ? Array.prototype.concat(e.attrs, g).filter(Boolean) : g, Z = t.shouldForwardProp;
  o && e.shouldForwardProp && (Z = t.shouldForwardProp ? function(z, q, H) {
    return e.shouldForwardProp(z, q, H) && t.shouldForwardProp(z, q, H);
  } : e.shouldForwardProp);
  var I, x = new Vl(r, C, o ? e.componentStyle : void 0), N = x.isStatic && g.length === 0, B = function(z, q) {
    return function(H, S, oe, pe) {
      var Ce = H.attrs, Ne = H.componentStyle, Be = H.defaultProps, Ze = H.foldedComponentIds, he = H.shouldForwardProp, we = H.styledComponentId, Ee = H.target, xe = function(F, p, G) {
        F === void 0 && (F = rr);
        var k = Wt({}, p, { theme: F }), re = {};
        return G.forEach(function(J) {
          var K, V, ne, ce = J;
          for (K in Qr(ce) && (ce = ce(k)), ce) k[K] = re[K] = K === "className" ? (V = re[K], ne = ce[K], V && ne ? V + " " + ne : V || ne) : ce[K];
        }), [k, re];
      }(nc(S, ar(Ni), Be) || rr, S, Ce), Xe = xe[0], Pe = xe[1], ke = function(F, p, G, k) {
        var re = Yl(), J = Zl(), K = p ? F.generateAndInjectStyles(rr, re, J) : F.generateAndInjectStyles(G, re, J);
        return Oe.env.NODE_ENV !== "production" && !p && k && k(K), K;
      }(Ne, pe, Xe, Oe.env.NODE_ENV !== "production" ? H.warnTooManyClasses : void 0), Fe = oe, Ge = Pe.$as || S.$as || Pe.as || S.as || Ee, Ye = kn(Ge), D = Pe !== S ? Wt({}, S, {}, Pe) : S, R = {};
      for (var P in D) P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? R.as = D[P] : (he ? he(P, Ao, Ge) : !Ye || Ao(P)) && (R[P] = D[P]));
      return S.style && Pe.style !== S.style && (R.style = Wt({}, S.style, {}, Pe.style)), R.className = Array.prototype.concat(Ze, we, ke !== we ? ke : null, S.className, Pe.className).filter(Boolean).join(" "), R.ref = Fe, ui(Ge, R);
    }(I, z, q, N);
  };
  return B.displayName = T, (I = rt.forwardRef(B)).attrs = L, I.componentStyle = x, I.displayName = T, I.shouldForwardProp = Z, I.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Nn, I.styledComponentId = C, I.target = o ? e.target : e, I.withComponent = function(z) {
    var q = t.componentId, H = function(oe, pe) {
      if (oe == null) return {};
      var Ce, Ne, Be = {}, Ze = Object.keys(oe);
      for (Ne = 0; Ne < Ze.length; Ne++) Ce = Ze[Ne], pe.indexOf(Ce) >= 0 || (Be[Ce] = oe[Ce]);
      return Be;
    }(t, ["componentId"]), S = q && q + "-" + (kn(z) ? z : sa(ya(z)));
    return Pi(z, Wt({}, H, { attrs: L, componentId: S }), r);
  }, Object.defineProperty(I, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(z) {
    this._foldedDefaultProps = o ? Ii({}, e.defaultProps, z) : z;
  } }), Oe.env.NODE_ENV !== "production" && (rc(T, C), I.warnTooManyClasses = /* @__PURE__ */ function(z, q) {
    var H = {}, S = !1;
    return function(oe) {
      if (!S && (H[oe] = !0, Object.keys(H).length >= 200)) {
        var pe = q ? ' with the id of "' + q + '"' : "";
        console.warn("Over 200 classes were generated for component " + z + pe + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, H = {};
      }
    };
  }(T, C)), Object.defineProperty(I, "toString", { value: function() {
    return "." + I.styledComponentId;
  } }), c && Cl(I, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), I;
}
var Rt = function(e) {
  return function t(r, o, c) {
    if (c === void 0 && (c = rr), !Pa.isValidElementType(o)) return Pr(1, String(o));
    var u = function() {
      return r(o, c, tc.apply(void 0, arguments));
    };
    return u.withConfig = function(g) {
      return t(r, o, Wt({}, c, {}, g));
    }, u.attrs = function(g) {
      return t(r, o, Wt({}, c, { attrs: Array.prototype.concat(c.attrs, g).filter(Boolean) }));
    }, u;
  }(Pi, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Rt[e] = Rt(e);
});
Oe.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), Oe.env.NODE_ENV !== "production" && Oe.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
Rt.div`
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
function Bn(e) {
  var t = Object.entries(e).filter(function(r) {
    var o = r[1];
    return o != null;
  }).map(function(r) {
    var o = r[0], c = r[1];
    return "".concat(encodeURIComponent(o), "=").concat(encodeURIComponent(String(c)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var cc = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, c) {
      o.__proto__ = c;
    } || function(o, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (o[u] = c[u]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function o() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
  };
}(), xr = function() {
  return xr = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, xr.apply(this, arguments);
}, uc = function(e, t, r, o) {
  function c(u) {
    return u instanceof r ? u : new r(function(g) {
      g(u);
    });
  }
  return new (r || (r = Promise))(function(u, g) {
    function v(T) {
      try {
        y(o.next(T));
      } catch (C) {
        g(C);
      }
    }
    function b(T) {
      try {
        y(o.throw(T));
      } catch (C) {
        g(C);
      }
    }
    function y(T) {
      T.done ? u(T.value) : c(T.value).then(v, b);
    }
    y((o = o.apply(e, [])).next());
  });
}, dc = function(e, t) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1) throw u[1];
    return u[1];
  }, trys: [], ops: [] }, o, c, u, g;
  return g = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function v(y) {
    return function(T) {
      return b([y, T]);
    };
  }
  function b(y) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (o = 1, c && (u = y[0] & 2 ? c.return : y[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, y[1])).done) return u;
      switch (c = 0, u && (y = [y[0] & 2, u.value]), y[0]) {
        case 0:
        case 1:
          u = y;
          break;
        case 4:
          return r.label++, { value: y[1], done: !1 };
        case 5:
          r.label++, c = y[1], y = [0];
          continue;
        case 7:
          y = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (y[0] === 6 || y[0] === 2)) {
            r = 0;
            continue;
          }
          if (y[0] === 3 && (!u || y[1] > u[0] && y[1] < u[3])) {
            r.label = y[1];
            break;
          }
          if (y[0] === 6 && r.label < u[1]) {
            r.label = u[1], u = y;
            break;
          }
          if (u && r.label < u[2]) {
            r.label = u[2], r.ops.push(y);
            break;
          }
          u[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      y = t.call(e, r);
    } catch (T) {
      y = [6, T], c = 0;
    } finally {
      o = u = 0;
    }
    if (y[0] & 5) throw y[1];
    return { value: y[0] ? y[1] : void 0, done: !0 };
  }
}, Di = function(e, t) {
  var r = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, o = Object.getOwnPropertySymbols(e); c < o.length; c++)
      t.indexOf(o[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[c]) && (r[o[c]] = e[o[c]]);
  return r;
}, fc = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, pc = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, hc = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function gc(e, t, r) {
  var o = t.height, c = t.width, u = Di(t, ["height", "width"]), g = xr({ height: o, width: c, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, u), v = window.open(e, "", Object.keys(g).map(function(y) {
    return "".concat(y, "=").concat(g[y]);
  }).join(", "));
  if (r)
    var b = window.setInterval(function() {
      try {
        (v === null || v.closed) && (window.clearInterval(b), r(v));
      } catch (y) {
        console.error(y);
      }
    }, 1e3);
  return v;
}
var mc = (
  /** @class */
  function(e) {
    cc(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(o) {
        var c = r.props, u = c.onShareWindowClose, g = c.windowHeight, v = g === void 0 ? 400 : g, b = c.windowPosition, y = b === void 0 ? "windowCenter" : b, T = c.windowWidth, C = T === void 0 ? 550 : T, L = xr({ height: v, width: C }, y === "windowCenter" ? pc(C, v) : hc(C, v));
        gc(o, L, u);
      }, r.handleClick = function(o) {
        return uc(r, void 0, void 0, function() {
          var c, u, g, v, b, y, T, C, L, Z;
          return dc(this, function(I) {
            switch (I.label) {
              case 0:
                return c = this.props, u = c.beforeOnClick, g = c.disabled, v = c.networkLink, b = c.onClick, y = c.url, T = c.openShareDialogOnClick, C = c.opts, L = v(y, C), g ? [
                  2
                  /*return*/
                ] : (o.preventDefault(), u ? (Z = u(), fc(Z) ? [4, Z] : [3, 2]) : [3, 2]);
              case 1:
                I.sent(), I.label = 2;
              case 2:
                return T && this.openShareDialog(L), b && b(o, L), [
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
      var o = r.children, c = r.className, u = r.disabled, g = r.disabledStyle, v = r.forwardedRef;
      r.networkLink;
      var b = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var y = r.resetButtonStyle, T = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var C = Di(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), L = Tr("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!u,
        disabled: !!u
      }, c), Z = xr(xr(y ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, T), u && g);
      return rt.createElement("button", xr({}, C, { "aria-label": C["aria-label"] || b, className: L, onClick: this.handleClick, ref: v, style: Z }), o);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(gs)
), Dn = function() {
  return Dn = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Dn.apply(this, arguments);
};
function Un(e, t, r, o) {
  function c(u, g) {
    var v = r(u), b = Dn({}, u), y = Object.keys(v);
    return y.forEach(function(T) {
      delete b[T];
    }), rt.createElement(mc, Dn({}, o, b, { forwardedRef: g, networkName: e, networkLink: t, opts: r(u) }));
  }
  return c.displayName = "ShareButton-".concat(e), ci(c);
}
function yc(e, t) {
  var r = t.subject, o = t.body, c = t.separator;
  return "mailto:" + Bn({ subject: r, body: o ? o + c + e : e });
}
Un("email", yc, function(e) {
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
var bc = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, c) {
      o.__proto__ = c;
    } || function(o, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (o[u] = c[u]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function o() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
  };
}(), vc = (
  /** @class */
  function(e) {
    bc(t, e);
    function t(r) {
      var o = e.call(this, r) || this;
      return o.name = "AssertionError", o;
    }
    return t;
  }(Error)
);
function Zr(e, t) {
  if (!e)
    throw new vc(t);
}
function wc(e, t) {
  var r = t.quote, o = t.hashtag;
  return Zr(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Bn({
    u: e,
    quote: r,
    hashtag: o
  });
}
Un("facebook", wc, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function xc(e, t) {
  var r = t.title, o = t.summary, c = t.source;
  return Zr(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Bn({ url: e, mini: "true", title: r, summary: o, source: c });
}
Un("linkedin", xc, function(e) {
  var t = e.title, r = e.summary, o = e.source;
  return { title: t, summary: r, source: o };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Sc(e, t) {
  var r = t.title, o = t.via, c = t.hashtags, u = c === void 0 ? [] : c, g = t.related, v = g === void 0 ? [] : g;
  return Zr(e, "twitter.url"), Zr(Array.isArray(u), "twitter.hashtags is not an array"), Zr(Array.isArray(v), "twitter.related is not an array"), "https://twitter.com/share" + Bn({
    url: e,
    text: r,
    via: o,
    hashtags: u.length > 0 ? u.join(",") : void 0,
    related: v.length > 0 ? v.join(",") : void 0
  });
}
Un("twitter", Sc, function(e) {
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
function xa(e) {
  "@babel/helpers - typeof";
  return xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xa(e);
}
var kc = (typeof window > "u" ? "undefined" : xa(window)) === "object" && window.Element || function() {
};
function Cc(e, t, r) {
  if (!(e[t] instanceof kc))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
i.oneOfType([i.string, i.func, Cc, i.shape({
  current: i.any
})]);
var Sa = i.oneOfType([i.func, i.string, i.shape({
  $$typeof: i.symbol,
  render: i.func
}), i.arrayOf(i.oneOfType([i.func, i.string, i.shape({
  $$typeof: i.symbol,
  render: i.func
})]))]);
i.string, i.node, i.string, i.object, i.string;
i.bool, i.string, i.object;
Rt.div`
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
Rt.div`
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
const _c = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Fa = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: o,
  color: c,
  disabled: u,
  element: g = "button",
  innerRef: v,
  href: b,
  onClick: y,
  ...T
}) => {
  const C = Tr("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: u
  });
  let L = g;
  return b && g === "button" && (L = "a"), /* @__PURE__ */ Y.jsx(
    en,
    {
      gaData: {
        ..._c,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ Y.jsx(
        L,
        {
          type: L === "button" && y ? "button" : void 0,
          ...T,
          className: C,
          href: b,
          ref: v,
          onClick: y,
          "aria-label": o,
          children: e
        }
      )
    }
  );
};
Fa.propTypes = {
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
  gaData: Ia,
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
Fa.defaultProps = {
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
const ji = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: o = "lazy",
  decoding: c = "async",
  dataTestId: u,
  fetchPriority: g = "auto",
  width: v,
  height: b,
  cardLink: y,
  title: T,
  caption: C,
  captionTitle: L,
  border: Z,
  dropShadow: I
}) => {
  const x = {
    src: e,
    alt: t,
    loading: o,
    decoding: c,
    fetchpriority: g,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Ts(r) },
    ...u && { "data-testid": u },
    ...v && { width: v },
    ...b && { height: b }
  }, N = Tr("uds-img", {
    borderless: !Z,
    "uds-img-drop-shadow": I
  }), B = (q) => {
    const H = q ? `${x.className} ${q}` : x.className;
    return y ? /* @__PURE__ */ Y.jsxs("a", { href: y, children: [
      /* @__PURE__ */ Y.jsx("img", { ...x, className: H }),
      /* @__PURE__ */ Y.jsx("span", { className: "visually-hidden", children: T })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ Y.jsx("img", { ...x, className: H })
    );
  }, z = () => /* @__PURE__ */ Y.jsx("div", { className: N, children: /* @__PURE__ */ Y.jsxs("figure", { className: "figure uds-figure", children: [
    B(),
    C && /* @__PURE__ */ Y.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      L && /* @__PURE__ */ Y.jsx("h3", { children: L }),
      /* @__PURE__ */ Y.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Er(C)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ Y.jsx(Y.Fragment, { children: C ? z() : B(N) });
};
ji.propTypes = {
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
const Ec = Rt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Tc = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Ac = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Tc(e) ? `mailto:${e}` : e, Rc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Vt = ({
  type: e,
  width: t,
  horizontal: r,
  image: o,
  imageAltText: c,
  title: u,
  icon: g,
  body: v,
  eventFormat: b,
  eventLocation: y,
  eventTime: T,
  buttons: C,
  linkLabel: L,
  linkUrl: Z,
  tags: I,
  showBorders: x,
  cardLink: N
}) => /* @__PURE__ */ Y.jsx(
  za,
  {
    type: e,
    width: t,
    horizontal: r,
    image: o,
    imageAltText: c,
    title: u,
    icon: g,
    body: v,
    eventFormat: b,
    eventLocation: y,
    eventTime: T,
    buttons: C,
    linkLabel: L,
    linkUrl: Z,
    tags: I,
    showBorders: x,
    cardLink: N
  }
);
Vt.propTypes = {
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
Vt.defaultProps = {
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
const za = ({
  type: e,
  width: t,
  horizontal: r,
  image: o,
  imageAltText: c,
  title: u,
  icon: g,
  body: v,
  eventFormat: b,
  eventLocation: y,
  eventTime: T,
  buttons: C,
  linkLabel: L,
  linkUrl: Z,
  tags: I,
  showBorders: x,
  cardLink: N
}) => {
  const B = Tr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !x
  });
  return /* @__PURE__ */ Y.jsx(Y.Fragment, { children: /* @__PURE__ */ Y.jsxs(Ec, { className: B, "data-testid": "card-container", children: [
    !!o && /* @__PURE__ */ Y.jsx(
      ji,
      {
        src: o,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: N,
        title: u
      }
    ),
    !o && g && /* @__PURE__ */ Y.jsx(
      "i",
      {
        className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ Y.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ Y.jsx(
      jn,
      {
        type: e,
        body: v,
        eventFormat: b,
        eventLocation: y,
        eventTime: T,
        title: u,
        buttons: C,
        linkLabel: L,
        linkUrl: Z,
        tags: I,
        cardLink: N
      }
    ) }) : /* @__PURE__ */ Y.jsx(
      jn,
      {
        type: e,
        body: v,
        eventFormat: b,
        eventLocation: y,
        eventTime: T,
        title: u,
        buttons: C,
        linkLabel: L,
        linkUrl: Z,
        tags: I,
        cardLink: N
      }
    )
  ] }) });
};
za.propTypes = {
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
za.defaultProps = {
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
const jn = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: o,
  eventTime: c,
  title: u,
  buttons: g,
  linkLabel: v,
  linkUrl: b,
  tags: y,
  cardLink: T
}) => /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
  !!u && /* @__PURE__ */ Y.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ Y.jsx("h3", { className: "card-title", children: T ? /* @__PURE__ */ Y.jsx("a", { href: T, children: u }) : u }) }),
  !!t && /* @__PURE__ */ Y.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ Y.jsx("div", { dangerouslySetInnerHTML: Er(t) }) }),
  e === "event" && (c || o) && /* @__PURE__ */ Y.jsx(
    $a,
    {
      eventFormat: r,
      eventTime: c,
      eventLocation: o
    }
  ),
  g && /* @__PURE__ */ Y.jsx("div", { className: "card-buttons", children: g.map((C) => /* @__PURE__ */ Y.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ Y.jsx(
        Na,
        {
          ariaLabel: C.ariaLabel,
          color: C.color,
          icon: C.icon,
          href: C.href,
          label: C.label,
          onClick: C.onClick,
          size: C.size,
          target: C.target,
          cardTitle: u
        }
      )
    },
    `${C.label}-${C.href}`
  )) }),
  b && v && /* @__PURE__ */ Y.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ Y.jsx(
    en,
    {
      gaData: {
        ...Rc,
        section: u,
        text: v
      },
      children: /* @__PURE__ */ Y.jsx("a", { href: Ac(b), children: v })
    }
  ) }),
  y && /* @__PURE__ */ Y.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: y.map((C) => (
    // @ts-ignore
    /* @__PURE__ */ Y.jsx(
      Fa,
      {
        ariaLabel: C.ariaLabel,
        color: C.color,
        href: C.href,
        label: C.label,
        onClick: C.onClick,
        cardTitle: u
      },
      `${C.label}-${C.href}`
    )
  )) })
] });
jn.propTypes = {
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
jn.defaultProps = {
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
const $a = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ Y.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ Y.jsx("div", { dangerouslySetInnerHTML: Er(t) })
  ] }),
  r && /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ Y.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Er(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
  t && /* @__PURE__ */ Y.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ Y.jsx("div", { dangerouslySetInnerHTML: Er(t) })
  ] }) }),
  r && /* @__PURE__ */ Y.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ Y.jsx("span", { children: /* @__PURE__ */ Y.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Er(r)
      }
    ) })
  ] }) })
] });
$a.propTypes = {
  eventFormat: i.oneOf(["stack", "inline"]),
  eventLocation: i.string,
  eventTime: i.string
};
$a.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const Oc = Rt.div`
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
`, Ic = () => /* @__PURE__ */ Y.jsxs(Oc, { children: [
  /* @__PURE__ */ Y.jsx("div", {}),
  /* @__PURE__ */ Y.jsx("div", {}),
  /* @__PURE__ */ Y.jsx("div", {}),
  /* @__PURE__ */ Y.jsx("div", {})
] }), Nc = Rt.section``, Ba = ms(null), Mi = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: o,
  renderBody: c,
  dataTransformer: u,
  dataFilter: g,
  maxItems: v
}) => {
  const [{ data: b, loading: y, error: T }, C] = Es(), [L, Z] = Gr([]), I = { ...e.dataSource, ...t };
  return Kr(() => {
    C(I == null ? void 0 : I.url);
  }, [I == null ? void 0 : I.url]), Kr(() => {
    const x = b == null ? void 0 : b.nodes.map(u), N = x == null ? void 0 : x.filter(
      (B) => g(B, t == null ? void 0 : t.filters)
    );
    Z(v ? N == null ? void 0 : N.slice(0, v) : N);
  }, [b]), // Init the context to be used on its childrens
  /* @__PURE__ */ Y.jsx(Ba.Provider, { value: { feeds: L }, children: /* @__PURE__ */ Y.jsxs(Nc, { children: [
    o,
    T ? /* @__PURE__ */ Y.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
      y && !(L != null && L.length) && /* @__PURE__ */ Y.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ Y.jsx(Ic, {}) }),
      L != null && L.length ? c : !y && /* @__PURE__ */ Y.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
Mi.propTypes = {
  renderHeader: i.element,
  renderBody: i.element,
  maxItems: i.number,
  dataTransformer: i.func,
  dataFilter: i.func,
  noFeedText: i.string
};
const Ua = i.shape({
  color: i.oneOf(["white", "dark"]),
  text: i.string
}), Va = i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  text: i.string
});
i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  text: i.string,
  size: i.string
});
const Li = i.shape({
  url: i.string,
  filters: i.string
}), Pc = i.shape({
  header: Ua,
  ctaButton: Va,
  dataSource: Li,
  maxItems: i.number
}), Dc = Rt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Fi = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const o = { ...e.header, ...t }, c = { ...e.ctaButton, ...r };
  return /* @__PURE__ */ Y.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ Y.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ Y.jsx("h2", { className: `text-${o.color}`, children: o.text }) }),
        /* @__PURE__ */ Y.jsx(Dc, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ Y.jsx(
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
            children: /* @__PURE__ */ Y.jsx("a", { className: `btn btn-${c.color}`, href: c.url, children: c.text })
          }
        ) })
      ]
    }
  );
};
Fi.propTypes = {
  defaultProps: Pc,
  header: Ua,
  ctaButton: Va
};
const zi = ({ children: e }) => /* @__PURE__ */ Y.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ Y.jsx("div", { className: "col", children: e }) });
zi.propTypes = {
  children: i.element
};
Rt.img`
  width: 100%;
`;
i.oneOf(["heading-hero", "story-hero"]), i.arrayOf(ea), i.string;
i.bool, i.bool, i.bool, i.bool, i.string, i.func, i.node, i.bool, i.string, i.bool;
i.oneOf(["default", "bordered"]).isRequired, i.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, i.number, i.number, i.func.isRequired;
i.oneOf(["small", "large"]), i.string.isRequired, i.string.isRequired, i.string;
i.oneOf(["small", "large"]).isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string, i.string;
Rt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
i.object, i.bool, i.bool, i.func.isRequired;
const jc = ci(function(e, t) {
  const {
    id: r,
    selected: o,
    title: c,
    selectTab: u,
    leftKeyPressed: g,
    rightKeyPressed: v,
    icon: b,
    gaData: y
  } = e, T = Ra(null);
  ys(
    t,
    () => ({
      focus() {
        T.current.focus();
      },
      scrollIntoView() {
        var L, Z, I, x, N, B, z;
        const q = ((L = T.current) == null ? void 0 : L.offsetWidth) / 2 + T.current.offsetLeft, H = ((I = (Z = T.current) == null ? void 0 : Z.offsetParent) == null ? void 0 : I.scrollLeft) + ((N = (x = T.current) == null ? void 0 : x.offsetParent) == null ? void 0 : N.offsetWidth) / 2;
        (z = (B = T.current) == null ? void 0 : B.offsetParent) == null || z.scrollBy({
          left: q - H
        });
      }
    }),
    []
  );
  const C = (L) => {
    L.keyCode === 37 ? (L.preventDefault(), g()) : L.keyCode === 39 && (L.preventDefault(), v());
  };
  return /* @__PURE__ */ Y.jsx(en, { gaData: { ...y, text: c }, children: /* @__PURE__ */ Y.jsxs(
    "a",
    {
      ref: T,
      className: `nav-item nav-link ${o ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": o,
      onClick: (L) => u(L, r, c),
      onKeyDown: C,
      tabIndex: o ? "" : "-1",
      children: [
        c,
        " ",
        b && /* @__PURE__ */ Y.jsx("i", { className: `${b == null ? void 0 : b[0]} fa-${b == null ? void 0 : b[1]} me-1` })
      ]
    }
  ) });
});
jc.propTypes = {
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
var Mc = !1;
try {
  var $o = Object.defineProperty({}, "passive", {
    get: function() {
      Mc = !0;
    }
  });
  window.addEventListener("testPassive", null, $o), window.removeEventListener("testPassive", null, $o);
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
    buttons: Vt.propTypes.buttons,
    linkLabel: i.string,
    linkUrl: i.string,
    tags: Vt.propTypes.tags
  })
).isRequired, Vt.propTypes.type, Vt.propTypes.eventFormat, Vt.propTypes.horizontal, i.string, i.string, i.bool;
i.number.isRequired, i.arrayOf(i.object).isRequired, i.string, i.string, i.bool;
const Mn = {
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
i.string, Mn.imageItems, Mn.hasContent;
Mn.imageItems.isRequired, Mn.hasContent, i.string, i.string, i.bool;
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
var Bo = di;
Bo.createRoot, Bo.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .75rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
var $i = { exports: {} }, ca, Uo;
function Lc() {
  if (Uo) return ca;
  Uo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ca = e, ca;
}
var ua, Vo;
function Fc() {
  if (Vo) return ua;
  Vo = 1;
  var e = Lc();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ua = function() {
    function o(g, v, b, y, T, C) {
      if (C !== e) {
        var L = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw L.name = "Invariant Violation", L;
      }
    }
    o.isRequired = o;
    function c() {
      return o;
    }
    var u = {
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
      checkPropTypes: r,
      resetWarningCache: t
    };
    return u.PropTypes = u, u;
  }, ua;
}
$i.exports = Fc()();
var zc = $i.exports;
const gt = /* @__PURE__ */ fi(zc), Wo = {
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
}, qo = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], Ho = (e) => e.toLowerCase().split(" ").join("_"), $c = (e, t) => {
  if (!t) return !0;
  const r = t.split(",");
  for (let o = 0; o < r.length; o += 1) {
    const c = Ho(r[o]);
    for (let u = 0; u < qo.length; u += 1) {
      const g = qo[u];
      if (Ho(e[g] || "").includes(c)) return !0;
    }
  }
  return !1;
}, Bc = (e) => ({
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
}), Wa = ({ children: e, header: t, ctaButton: r, dataSource: o, maxItems: c }) => (
  // Calling the unity-react-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the unity-react-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ mt.jsx(
    Mi,
    {
      renderHeader: t && r ? /* @__PURE__ */ mt.jsx(
        Fi,
        {
          header: t,
          ctaButton: r,
          defaultProps: Wo
        }
      ) : null,
      renderBody: /* @__PURE__ */ mt.jsx(zi, { children: e }),
      dataTransformer: Bc,
      dataFilter: $c,
      dataSource: o,
      defaultProps: Wo,
      noFeedText: "No events to show.",
      maxItems: c
    }
  )
);
Wa.propTypes = {
  header: Ua,
  ctaButton: Va,
  dataSource: Li,
  maxItems: gt.number,
  children: gt.element
};
const Uc = gt.shape({
  color: gt.oneOf(["white", "dark"]),
  text: gt.string
}), Vc = gt.shape({
  color: gt.oneOf(["gold", "maroon", "gray", "dark"]),
  text: gt.string,
  url: gt.string
}), Wc = gt.shape({
  url: gt.string.isRequired,
  filters: gt.string
}).isRequired, Bi = {
  header: Uc,
  ctaButton: Vc,
  dataSource: Wc,
  maxItems: gt.number
}, qc = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), Go = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), ka = (e) => {
  let t = e.split("T");
  return t = t.length > 1 ? t.join("T") : `${t[0].split(":")[0]}T00:00:00Z`, t;
}, Yo = (e) => {
  let t = e.getHours(), r = e.getMinutes();
  const o = t >= 12 ? "p.m." : "a.m.";
  return t %= 12, t = t || 12, r = r < 10 ? `0${r}` : r, `${t}:${r} ${o}`;
}, Ui = (e, t) => {
  const r = ka(e), o = ka(t);
  let c = Go(new Date(r)), u = Go(new Date(o));
  return c = Yo(new Date(c)), u = Yo(new Date(u)), e === t ? c : `${c} - ${u}`;
}, Ln = (e, t) => {
  const r = ka(e);
  return {
    ISO: r.split("T")[0],
    COMPLETE: qc(new Date(r))
  }[t];
};
var Vi = { exports: {} }, Me = {};
var Zo;
function Hc() {
  if (Zo) return Me;
  Zo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), g = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), Z = Symbol.for("react.client.reference");
  function I(x) {
    if (typeof x == "object" && x !== null) {
      var N = x.$$typeof;
      switch (N) {
        case e:
          switch (x = x.type, x) {
            case r:
            case c:
            case o:
            case b:
            case y:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case g:
                case v:
                case C:
                case T:
                  return x;
                case u:
                  return x;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return Me.ContextConsumer = u, Me.ContextProvider = g, Me.Element = e, Me.ForwardRef = v, Me.Fragment = r, Me.Lazy = C, Me.Memo = T, Me.Portal = t, Me.Profiler = c, Me.StrictMode = o, Me.Suspense = b, Me.SuspenseList = y, Me.isContextConsumer = function(x) {
    return I(x) === u;
  }, Me.isContextProvider = function(x) {
    return I(x) === g;
  }, Me.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, Me.isForwardRef = function(x) {
    return I(x) === v;
  }, Me.isFragment = function(x) {
    return I(x) === r;
  }, Me.isLazy = function(x) {
    return I(x) === C;
  }, Me.isMemo = function(x) {
    return I(x) === T;
  }, Me.isPortal = function(x) {
    return I(x) === t;
  }, Me.isProfiler = function(x) {
    return I(x) === c;
  }, Me.isStrictMode = function(x) {
    return I(x) === o;
  }, Me.isSuspense = function(x) {
    return I(x) === b;
  }, Me.isSuspenseList = function(x) {
    return I(x) === y;
  }, Me.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === c || x === o || x === b || x === y || x === L || typeof x == "object" && x !== null && (x.$$typeof === C || x.$$typeof === T || x.$$typeof === g || x.$$typeof === u || x.$$typeof === v || x.$$typeof === Z || x.getModuleId !== void 0);
  }, Me.typeOf = I, Me;
}
Vi.exports = Hc();
var qa = Vi.exports;
function Gc(e) {
  function t(D, R, P, F, p) {
    for (var G = 0, k = 0, re = 0, J = 0, K, V, ne = 0, ce = 0, ee, le = ee = K = 0, te = 0, fe = 0, ze = 0, ue = 0, Ke = P.length, Ue = Ke - 1, ge, $ = "", ae = "", et = "", Qe = "", _e; te < Ke; ) {
      if (V = P.charCodeAt(te), te === Ue && k + J + re + G !== 0 && (k !== 0 && (V = k === 47 ? 10 : 47), J = re = G = 0, Ke++, Ue++), k + J + re + G === 0) {
        if (te === Ue && (0 < fe && ($ = $.replace(L, "")), 0 < $.trim().length)) {
          switch (V) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += P.charAt(te);
          }
          V = 59;
        }
        switch (V) {
          case 123:
            for ($ = $.trim(), K = $.charCodeAt(0), ee = 1, ue = ++te; te < Ke; ) {
              switch (V = P.charCodeAt(te)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (V = P.charCodeAt(te + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (le = te + 1; le < Ue; ++le)
                          switch (P.charCodeAt(le)) {
                            case 47:
                              if (V === 42 && P.charCodeAt(le - 1) === 42 && te + 2 !== le) {
                                te = le + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (V === 47) {
                                te = le + 1;
                                break e;
                              }
                          }
                        te = le;
                      }
                  }
                  break;
                case 91:
                  V++;
                case 40:
                  V++;
                case 34:
                case 39:
                  for (; te++ < Ue && P.charCodeAt(te) !== V; )
                    ;
              }
              if (ee === 0) break;
              te++;
            }
            switch (ee = P.substring(ue, te), K === 0 && (K = ($ = $.replace(C, "").trim()).charCodeAt(0)), K) {
              case 64:
                switch (0 < fe && ($ = $.replace(L, "")), V = $.charCodeAt(1), V) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = R;
                    break;
                  default:
                    fe = Xe;
                }
                if (ee = t(R, fe, ee, V, p + 1), ue = ee.length, 0 < ke && (fe = r(Xe, $, ze), _e = v(3, ee, fe, R, we, he, ue, V, p, F), $ = fe.join(""), _e !== void 0 && (ue = (ee = _e.trim()).length) === 0 && (V = 0, ee = "")), 0 < ue) switch (V) {
                  case 115:
                    $ = $.replace(oe, g);
                  case 100:
                  case 109:
                  case 45:
                    ee = $ + "{" + ee + "}";
                    break;
                  case 107:
                    $ = $.replace(z, "$1 $2"), ee = $ + "{" + ee + "}", ee = xe === 1 || xe === 2 && u("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                    break;
                  default:
                    ee = $ + ee, F === 112 && (ee = (ae += ee, ""));
                }
                else ee = "";
                break;
              default:
                ee = t(R, r(R, $, ze), ee, F, p + 1);
            }
            et += ee, ee = ze = fe = le = K = 0, $ = "", V = P.charCodeAt(++te);
            break;
          case 125:
          case 59:
            if ($ = (0 < fe ? $.replace(L, "") : $).trim(), 1 < (ue = $.length)) switch (le === 0 && (K = $.charCodeAt(0), K === 45 || 96 < K && 123 > K) && (ue = ($ = $.replace(" ", ":")).length), 0 < ke && (_e = v(1, $, R, D, we, he, ae.length, F, p, F)) !== void 0 && (ue = ($ = _e.trim()).length) === 0 && ($ = "\0\0"), K = $.charCodeAt(0), V = $.charCodeAt(1), K) {
              case 0:
                break;
              case 64:
                if (V === 105 || V === 99) {
                  Qe += $ + P.charAt(te);
                  break;
                }
              default:
                $.charCodeAt(ue - 1) !== 58 && (ae += c($, K, V, $.charCodeAt(2)));
            }
            ze = fe = le = K = 0, $ = "", V = P.charCodeAt(++te);
        }
      }
      switch (V) {
        case 13:
        case 10:
          k === 47 ? k = 0 : 1 + K === 0 && F !== 107 && 0 < $.length && (fe = 1, $ += "\0"), 0 < ke * Ge && v(0, $, R, D, we, he, ae.length, F, p, F), he = 1, we++;
          break;
        case 59:
        case 125:
          if (k + J + re + G === 0) {
            he++;
            break;
          }
        default:
          switch (he++, ge = P.charAt(te), V) {
            case 9:
            case 32:
              if (J + G + k === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ge = "";
                  break;
                default:
                  V !== 32 && (ge = " ");
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
              J + k + G === 0 && (fe = ze = 1, ge = "\f" + ge);
              break;
            case 108:
              if (J + k + G + Ee === 0 && 0 < le) switch (te - le) {
                case 2:
                  ne === 112 && P.charCodeAt(te - 3) === 58 && (Ee = ne);
                case 8:
                  ce === 111 && (Ee = ce);
              }
              break;
            case 58:
              J + k + G === 0 && (le = te);
              break;
            case 44:
              k + re + J + G === 0 && (fe = 1, ge += "\r");
              break;
            case 34:
            case 39:
              k === 0 && (J = J === V ? 0 : J === 0 ? V : J);
              break;
            case 91:
              J + k + re === 0 && G++;
              break;
            case 93:
              J + k + re === 0 && G--;
              break;
            case 41:
              J + k + G === 0 && re--;
              break;
            case 40:
              if (J + k + G === 0) {
                if (K === 0) switch (2 * ne + 3 * ce) {
                  case 533:
                    break;
                  default:
                    K = 1;
                }
                re++;
              }
              break;
            case 64:
              k + re + J + G + le + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + G + re)) switch (k) {
                case 0:
                  switch (2 * V + 3 * P.charCodeAt(te + 1)) {
                    case 235:
                      k = 47;
                      break;
                    case 220:
                      ue = te, k = 42;
                  }
                  break;
                case 42:
                  V === 47 && ne === 42 && ue + 2 !== te && (P.charCodeAt(ue + 2) === 33 && (ae += P.substring(ue, te + 1)), ge = "", k = 0);
              }
          }
          k === 0 && ($ += ge);
      }
      ce = ne, ne = V, te++;
    }
    if (ue = ae.length, 0 < ue) {
      if (fe = R, 0 < ke && (_e = v(2, ae, fe, D, we, he, ue, F, p, F), _e !== void 0 && (ae = _e).length === 0)) return Qe + ae + et;
      if (ae = fe.join(",") + "{" + ae + "}", xe * Ee !== 0) {
        switch (xe !== 2 || u(ae, 2) || (Ee = 0), Ee) {
          case 111:
            ae = ae.replace(H, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(q, "::-webkit-input-$1") + ae.replace(q, "::-moz-$1") + ae.replace(q, ":-ms-input-$1") + ae;
        }
        Ee = 0;
      }
    }
    return Qe + ae + et;
  }
  function r(D, R, P) {
    var F = R.trim().split(N);
    R = F;
    var p = F.length, G = D.length;
    switch (G) {
      case 0:
      case 1:
        var k = 0;
        for (D = G === 0 ? "" : D[0] + " "; k < p; ++k)
          R[k] = o(D, R[k], P).trim();
        break;
      default:
        var re = k = 0;
        for (R = []; k < p; ++k)
          for (var J = 0; J < G; ++J)
            R[re++] = o(D[J] + " ", F[k], P).trim();
    }
    return R;
  }
  function o(D, R, P) {
    var F = R.charCodeAt(0);
    switch (33 > F && (F = (R = R.trim()).charCodeAt(0)), F) {
      case 38:
        return R.replace(B, "$1" + D.trim());
      case 58:
        return D.trim() + R.replace(B, "$1" + D.trim());
      default:
        if (0 < 1 * P && 0 < R.indexOf("\f")) return R.replace(B, (D.charCodeAt(0) === 58 ? "" : "$1") + D.trim());
    }
    return D + R;
  }
  function c(D, R, P, F) {
    var p = D + ";", G = 2 * R + 3 * P + 4 * F;
    if (G === 944) {
      D = p.indexOf(":", 9) + 1;
      var k = p.substring(D, p.length - 1).trim();
      return k = p.substring(0, D).trim() + k + ";", xe === 1 || xe === 2 && u(k, 1) ? "-webkit-" + k + k : k;
    }
    if (xe === 0 || xe === 2 && !u(p, 1)) return p;
    switch (G) {
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
        if (0 < p.indexOf("image-set(", 11)) return p.replace(Ze, "$1-webkit-$2") + p;
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
        return k = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + k + "-webkit-" + p + "-ms-flex-pack" + k + p;
      case 1005:
        return I.test(p) ? p.replace(Z, ":-webkit-") + p.replace(Z, ":-moz-") + p : p;
      case 1e3:
        switch (k = p.substring(13).trim(), R = k.indexOf("-") + 1, k.charCodeAt(0) + k.charCodeAt(R)) {
          case 226:
            k = p.replace(S, "tb");
            break;
          case 232:
            k = p.replace(S, "tb-rl");
            break;
          case 220:
            k = p.replace(S, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + k + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (R = (p = D).length - 10, k = (p.charCodeAt(R) === 33 ? p.substring(0, R) : p).substring(D.indexOf(":", 7) + 1).trim(), G = k.charCodeAt(0) + (k.charCodeAt(7) | 0)) {
          case 203:
            if (111 > k.charCodeAt(8)) break;
          case 115:
            p = p.replace(k, "-webkit-" + k) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(k, "-webkit-" + (102 < G ? "inline-" : "") + "box") + ";" + p.replace(k, "-webkit-" + k) + ";" + p.replace(k, "-ms-" + k + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return k = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + k + "-ms-flex-" + k + p;
          case 115:
            return "-webkit-" + p + "-ms-flex-item-" + p.replace(Ce, "") + p;
          default:
            return "-webkit-" + p + "-ms-flex-line-pack" + p.replace("align-content", "").replace(Ce, "") + p;
        }
        break;
      case 973:
      case 989:
        if (p.charCodeAt(3) !== 45 || p.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Be.test(D) === !0) return (k = D.substring(D.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(D.replace("stretch", "fill-available"), R, P, F).replace(":fill-available", ":stretch") : p.replace(k, "-webkit-" + k) + p.replace(k, "-moz-" + k.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, P + F === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(x, "$1-webkit-$2") + p;
    }
    return p;
  }
  function u(D, R) {
    var P = D.indexOf(R === 1 ? ":" : "{"), F = D.substring(0, R !== 3 ? P : 10);
    return P = D.substring(P + 1, D.length - 1), Fe(R !== 2 ? F : F.replace(Ne, "$1"), P, R);
  }
  function g(D, R) {
    var P = c(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return P !== R + ";" ? P.replace(pe, " or ($1)").substring(4) : "(" + R + ")";
  }
  function v(D, R, P, F, p, G, k, re, J, K) {
    for (var V = 0, ne = R, ce; V < ke; ++V)
      switch (ce = Pe[V].call(T, D, ne, P, F, p, G, k, re, J, K)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = ce;
      }
    if (ne !== R) return ne;
  }
  function b(D) {
    switch (D) {
      case void 0:
      case null:
        ke = Pe.length = 0;
        break;
      default:
        if (typeof D == "function") Pe[ke++] = D;
        else if (typeof D == "object") for (var R = 0, P = D.length; R < P; ++R)
          b(D[R]);
        else Ge = !!D | 0;
    }
    return b;
  }
  function y(D) {
    return D = D.prefix, D !== void 0 && (Fe = null, D ? typeof D != "function" ? xe = 1 : (xe = 2, Fe = D) : xe = 0), y;
  }
  function T(D, R) {
    var P = D;
    if (33 > P.charCodeAt(0) && (P = P.trim()), Ye = P, P = [Ye], 0 < ke) {
      var F = v(-1, R, P, P, we, he, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (R = F);
    }
    var p = t(Xe, P, R, 0, 0);
    return 0 < ke && (F = v(-2, p, P, P, we, he, p.length, 0, 0, 0), F !== void 0 && (p = F)), Ye = "", Ee = 0, he = we = 1, p;
  }
  var C = /^\0+/g, L = /[\0\r\f]/g, Z = /: */g, I = /zoo|gra/, x = /([,: ])(transform)/g, N = /,\r+?/g, B = /([\t\r\n ])*\f?&/g, z = /@(k\w+)\s*(\S*)\s*/, q = /::(place)/g, H = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, oe = /\(\s*(.*)\s*\)/g, pe = /([\s\S]*?);/g, Ce = /-self|flex-/g, Ne = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Be = /stretch|:\s*\w+\-(?:conte|avail)/, Ze = /([^-])(image-set\()/, he = 1, we = 1, Ee = 0, xe = 1, Xe = [], Pe = [], ke = 0, Fe = null, Ge = 0, Ye = "";
  return T.use = b, T.set = y, e !== void 0 && y(e), T;
}
var Yc = {
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
function Zc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Xc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Xo = /* @__PURE__ */ Zc(
  function(e) {
    return Xc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Wi = { exports: {} }, Re = {};
var Ko;
function Kc() {
  if (Ko) return Re;
  Ko = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, g = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, T = e ? Symbol.for("react.forward_ref") : 60112, C = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, Z = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function q(S) {
    if (typeof S == "object" && S !== null) {
      var oe = S.$$typeof;
      switch (oe) {
        case t:
          switch (S = S.type, S) {
            case b:
            case y:
            case o:
            case u:
            case c:
            case C:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case v:
                case T:
                case I:
                case Z:
                case g:
                  return S;
                default:
                  return oe;
              }
          }
        case r:
          return oe;
      }
    }
  }
  function H(S) {
    return q(S) === y;
  }
  return Re.AsyncMode = b, Re.ConcurrentMode = y, Re.ContextConsumer = v, Re.ContextProvider = g, Re.Element = t, Re.ForwardRef = T, Re.Fragment = o, Re.Lazy = I, Re.Memo = Z, Re.Portal = r, Re.Profiler = u, Re.StrictMode = c, Re.Suspense = C, Re.isAsyncMode = function(S) {
    return H(S) || q(S) === b;
  }, Re.isConcurrentMode = H, Re.isContextConsumer = function(S) {
    return q(S) === v;
  }, Re.isContextProvider = function(S) {
    return q(S) === g;
  }, Re.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Re.isForwardRef = function(S) {
    return q(S) === T;
  }, Re.isFragment = function(S) {
    return q(S) === o;
  }, Re.isLazy = function(S) {
    return q(S) === I;
  }, Re.isMemo = function(S) {
    return q(S) === Z;
  }, Re.isPortal = function(S) {
    return q(S) === r;
  }, Re.isProfiler = function(S) {
    return q(S) === u;
  }, Re.isStrictMode = function(S) {
    return q(S) === c;
  }, Re.isSuspense = function(S) {
    return q(S) === C;
  }, Re.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === o || S === y || S === u || S === c || S === C || S === L || typeof S == "object" && S !== null && (S.$$typeof === I || S.$$typeof === Z || S.$$typeof === g || S.$$typeof === v || S.$$typeof === T || S.$$typeof === N || S.$$typeof === B || S.$$typeof === z || S.$$typeof === x);
  }, Re.typeOf = q, Re;
}
Wi.exports = Kc();
var Qc = Wi.exports, Ha = Qc, Jc = {
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
}, eu = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, tu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, qi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ga = {};
Ga[Ha.ForwardRef] = tu;
Ga[Ha.Memo] = qi;
function Qo(e) {
  return Ha.isMemo(e) ? qi : Ga[e.$$typeof] || Jc;
}
var ru = Object.defineProperty, nu = Object.getOwnPropertyNames, Jo = Object.getOwnPropertySymbols, au = Object.getOwnPropertyDescriptor, ou = Object.getPrototypeOf, ei = Object.prototype;
function Hi(e, t, r) {
  if (typeof t != "string") {
    if (ei) {
      var o = ou(t);
      o && o !== ei && Hi(e, o, r);
    }
    var c = nu(t);
    Jo && (c = c.concat(Jo(t)));
    for (var u = Qo(e), g = Qo(t), v = 0; v < c.length; ++v) {
      var b = c[v];
      if (!eu[b] && !(r && r[b]) && !(g && g[b]) && !(u && u[b])) {
        var y = au(t, b);
        try {
          ru(e, b, y);
        } catch {
        }
      }
    }
  }
  return e;
}
var iu = Hi;
const su = /* @__PURE__ */ fi(iu);
var Ie = { env: { NODE_ENV: "production" } };
function qt() {
  return (qt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }).apply(this, arguments);
}
var ti = function(e, t) {
  for (var r = [e[0]], o = 0, c = t.length; o < c; o += 1) r.push(t[o], e[o + 1]);
  return r;
}, Ca = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !qa.typeOf(e);
}, Fn = Object.freeze([]), nr = Object.freeze({});
function Jr(e) {
  return typeof e == "function";
}
function _a(e) {
  return Ie.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ya(e) {
  return e && typeof e.styledComponentId == "string";
}
var Or = typeof Ie < "u" && Ie.env !== void 0 && (Ie.env.REACT_APP_SC_ATTR || Ie.env.SC_ATTR) || "data-styled", Za = typeof window < "u" && "HTMLElement" in window, lu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Ie < "u" && Ie.env !== void 0 && (Ie.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Ie.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Ie.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Ie.env.REACT_APP_SC_DISABLE_SPEEDY : Ie.env.SC_DISABLE_SPEEDY !== void 0 && Ie.env.SC_DISABLE_SPEEDY !== "" ? Ie.env.SC_DISABLE_SPEEDY !== "false" && Ie.env.SC_DISABLE_SPEEDY : Ie.env.NODE_ENV !== "production")), cu = Ie.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function uu() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, o = arguments.length; r < o; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(c) {
    e = e.replace(/%[a-z]/, c);
  }), e;
}
function Dr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  throw Ie.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(uu.apply(void 0, [cu[e]].concat(r)).trim());
}
var du = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var o = 0, c = 0; c < r; c++) o += this.groupSizes[c];
    return o;
  }, t.insertRules = function(r, o) {
    if (r >= this.groupSizes.length) {
      for (var c = this.groupSizes, u = c.length, g = u; r >= g; ) (g <<= 1) < 0 && Dr(16, "" + r);
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(c), this.length = g;
      for (var v = u; v < g; v++) this.groupSizes[v] = 0;
    }
    for (var b = this.indexOfGroup(r + 1), y = 0, T = o.length; y < T; y++) this.tag.insertRule(b, o[y]) && (this.groupSizes[r]++, b++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var o = this.groupSizes[r], c = this.indexOfGroup(r), u = c + o;
      this.groupSizes[r] = 0;
      for (var g = c; g < u; g++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var o = "";
    if (r >= this.length || this.groupSizes[r] === 0) return o;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), g = u + c, v = u; v < g; v++) o += this.tag.getRule(v) + `/*!sc*/
`;
    return o;
  }, e;
}(), On = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), Xr = 1, Cn = function(e) {
  if (On.has(e)) return On.get(e);
  for (; zn.has(Xr); ) Xr++;
  var t = Xr++;
  return Ie.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Dr(16, "" + t), On.set(e, t), zn.set(t, e), t;
}, fu = function(e) {
  return zn.get(e);
}, pu = function(e, t) {
  t >= Xr && (Xr = t + 1), On.set(e, t), zn.set(t, e);
}, hu = "style[" + Or + '][data-styled-version="5.3.11"]', gu = new RegExp("^" + Or + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), mu = function(e, t, r) {
  for (var o, c = r.split(","), u = 0, g = c.length; u < g; u++) (o = c[u]) && e.registerName(t, o);
}, yu = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), o = [], c = 0, u = r.length; c < u; c++) {
    var g = r[c].trim();
    if (g) {
      var v = g.match(gu);
      if (v) {
        var b = 0 | parseInt(v[1], 10), y = v[2];
        b !== 0 && (pu(y, b), mu(e, y, v[3]), e.getTag().insertRules(b, o)), o.length = 0;
      } else o.push(g);
    }
  }
}, bu = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Gi = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), c = function(v) {
    for (var b = v.childNodes, y = b.length; y >= 0; y--) {
      var T = b[y];
      if (T && T.nodeType === 1 && T.hasAttribute(Or)) return T;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  o.setAttribute(Or, "active"), o.setAttribute("data-styled-version", "5.3.11");
  var g = bu();
  return g && o.setAttribute("nonce", g), r.insertBefore(o, u), o;
}, vu = function() {
  function e(r) {
    var o = this.element = Gi(r);
    o.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, g = 0, v = u.length; g < v; g++) {
        var b = u[g];
        if (b.ownerNode === c) return b;
      }
      Dr(17);
    }(o), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    try {
      return this.sheet.insertRule(o, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var o = this.sheet.cssRules[r];
    return o !== void 0 && typeof o.cssText == "string" ? o.cssText : "";
  }, e;
}(), wu = function() {
  function e(r) {
    var o = this.element = Gi(r);
    this.nodes = o.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    if (r <= this.length && r >= 0) {
      var c = document.createTextNode(o), u = this.nodes[r];
      return this.element.insertBefore(c, u || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), xu = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    return r <= this.length && (this.rules.splice(r, 0, o), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), ri = Za, Su = { isServer: !Za, useCSSOMInjection: !lu }, Yi = function() {
  function e(r, o, c) {
    r === void 0 && (r = nr), o === void 0 && (o = {}), this.options = qt({}, Su, {}, r), this.gs = o, this.names = new Map(c), this.server = !!r.isServer, !this.server && Za && ri && (ri = !1, function(u) {
      for (var g = document.querySelectorAll(hu), v = 0, b = g.length; v < b; v++) {
        var y = g[v];
        y && y.getAttribute(Or) !== "active" && (yu(u, y), y.parentNode && y.parentNode.removeChild(y));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Cn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, o) {
    return o === void 0 && (o = !0), new e(qt({}, this.options, {}, r), this.gs, o && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (o = this.options).isServer, u = o.useCSSOMInjection, g = o.target, r = c ? new xu(g) : u ? new vu(g) : new wu(g), new du(r)));
    var r, o, c, u, g;
  }, t.hasNameForId = function(r, o) {
    return this.names.has(r) && this.names.get(r).has(o);
  }, t.registerName = function(r, o) {
    if (Cn(r), this.names.has(r)) this.names.get(r).add(o);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(o), this.names.set(r, c);
    }
  }, t.insertRules = function(r, o, c) {
    this.registerName(r, o), this.getTag().insertRules(Cn(r), c);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Cn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var o = r.getTag(), c = o.length, u = "", g = 0; g < c; g++) {
        var v = fu(g);
        if (v !== void 0) {
          var b = r.names.get(v), y = o.getGroup(g);
          if (b && y && b.size) {
            var T = Or + ".g" + g + '[id="' + v + '"]', C = "";
            b !== void 0 && b.forEach(function(L) {
              L.length > 0 && (C += L + ",");
            }), u += "" + y + T + '{content:"' + C + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), ku = /(a)(d)/gi, ni = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ea(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ni(t % 52) + r;
  return (ni(t % 52) + r).replace(ku, "$1-$2");
}
var wr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Zi = function(e) {
  return wr(5381, e);
};
function Cu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Jr(r) && !Ya(r)) return !1;
  }
  return !0;
}
var _u = Zi("5.3.11"), Eu = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = Ie.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && Cu(t), this.componentId = r, this.baseHash = wr(_u, r), this.baseStyle = o, Yi.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, o)), this.isStatic && !o.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var g = Ir(this.rules, t, r, o).join(""), v = Ea(wr(this.baseHash, g) >>> 0);
      if (!r.hasNameForId(c, v)) {
        var b = o(g, "." + v, void 0, c);
        r.insertRules(c, v, b);
      }
      u.push(v), this.staticRulesId = v;
    }
    else {
      for (var y = this.rules.length, T = wr(this.baseHash, o.hash), C = "", L = 0; L < y; L++) {
        var Z = this.rules[L];
        if (typeof Z == "string") C += Z, Ie.env.NODE_ENV !== "production" && (T = wr(T, Z + L));
        else if (Z) {
          var I = Ir(Z, t, r, o), x = Array.isArray(I) ? I.join("") : I;
          T = wr(T, x + L), C += x;
        }
      }
      if (C) {
        var N = Ea(T >>> 0);
        if (!r.hasNameForId(c, N)) {
          var B = o(C, "." + N, void 0, c);
          r.insertRules(c, N, B);
        }
        u.push(N);
      }
    }
    return u.join(" ");
  }, e;
}(), Tu = /^\s*\/\/.*$/gm, Au = [":", "[", ".", "#"];
function Ru(e) {
  var t, r, o, c, u = nr, g = u.options, v = g === void 0 ? nr : g, b = u.plugins, y = b === void 0 ? Fn : b, T = new Gc(v), C = [], L = /* @__PURE__ */ function(x) {
    function N(B) {
      if (B) try {
        x(B + "}");
      } catch {
      }
    }
    return function(B, z, q, H, S, oe, pe, Ce, Ne, Be) {
      switch (B) {
        case 1:
          if (Ne === 0 && z.charCodeAt(0) === 64) return x(z + ";"), "";
          break;
        case 2:
          if (Ce === 0) return z + "/*|*/";
          break;
        case 3:
          switch (Ce) {
            case 102:
            case 112:
              return x(q[0] + z), "";
            default:
              return z + (Be === 0 ? "/*|*/" : "");
          }
        case -2:
          z.split("/*|*/}").forEach(N);
      }
    };
  }(function(x) {
    C.push(x);
  }), Z = function(x, N, B) {
    return N === 0 && Au.indexOf(B[r.length]) !== -1 || B.match(c) ? x : "." + t;
  };
  function I(x, N, B, z) {
    z === void 0 && (z = "&");
    var q = x.replace(Tu, ""), H = N && B ? B + " " + N + " { " + q + " }" : q;
    return t = z, r = N, o = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), T(B || !N ? "" : N, H);
  }
  return T.use([].concat(y, [function(x, N, B) {
    x === 2 && B.length && B[0].lastIndexOf(r) > 0 && (B[0] = B[0].replace(o, Z));
  }, L, function(x) {
    if (x === -2) {
      var N = C;
      return C = [], N;
    }
  }])), I.hash = y.length ? y.reduce(function(x, N) {
    return N.name || Dr(15), wr(x, N.name);
  }, 5381).toString() : "", I;
}
var Xi = rt.createContext();
Xi.Consumer;
var Ki = rt.createContext(), Ou = (Ki.Consumer, new Yi()), Ta = Ru();
function Iu() {
  return ar(Xi) || Ou;
}
function Nu() {
  return ar(Ki) || Ta;
}
var Pu = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(c, u) {
      u === void 0 && (u = Ta);
      var g = o.name + u.hash;
      c.hasNameForId(o.id, g) || c.insertRules(o.id, g, u(o.rules, g, "@keyframes"));
    }, this.toString = function() {
      return Dr(12, String(o.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ta), this.name + t.hash;
  }, e;
}(), Du = /([A-Z])/, ju = /([A-Z])/g, Mu = /^ms-/, Lu = function(e) {
  return "-" + e.toLowerCase();
};
function ai(e) {
  return Du.test(e) ? e.replace(ju, Lu).replace(Mu, "-ms-") : e;
}
var oi = function(e) {
  return e == null || e === !1 || e === "";
};
function Ir(e, t, r, o) {
  if (Array.isArray(e)) {
    for (var c, u = [], g = 0, v = e.length; g < v; g += 1) (c = Ir(e[g], t, r, o)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (oi(e)) return "";
  if (Ya(e)) return "." + e.styledComponentId;
  if (Jr(e)) {
    if (typeof (y = e) != "function" || y.prototype && y.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Ie.env.NODE_ENV !== "production" && qa.isElement(b) && console.warn(_a(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ir(b, t, r, o);
  }
  var y;
  return e instanceof Pu ? r ? (e.inject(r, o), e.getName(o)) : e : Ca(e) ? function T(C, L) {
    var Z, I, x = [];
    for (var N in C) C.hasOwnProperty(N) && !oi(C[N]) && (Array.isArray(C[N]) && C[N].isCss || Jr(C[N]) ? x.push(ai(N) + ":", C[N], ";") : Ca(C[N]) ? x.push.apply(x, T(C[N], N)) : x.push(ai(N) + ": " + (Z = N, (I = C[N]) == null || typeof I == "boolean" || I === "" ? "" : typeof I != "number" || I === 0 || Z in Yc || Z.startsWith("--") ? String(I).trim() : I + "px") + ";"));
    return L ? [L + " {"].concat(x, ["}"]) : x;
  }(e) : e.toString();
}
var ii = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Fu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  return Jr(e) || Ca(e) ? ii(Ir(ti(Fn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ii(Ir(ti(e, r)));
}
var si = /invalid hook call/i, _n = /* @__PURE__ */ new Set(), zu = function(e, t) {
  if (Ie.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var c = !0;
      console.error = function(u) {
        if (si.test(u)) c = !1, _n.delete(r);
        else {
          for (var g = arguments.length, v = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++) v[b - 1] = arguments[b];
          o.apply(void 0, [u].concat(v));
        }
      }, Ra(), c && !_n.has(r) && (console.warn(r), _n.add(r));
    } catch (u) {
      si.test(u.message) && _n.delete(r);
    } finally {
      console.error = o;
    }
  }
}, $u = function(e, t, r) {
  return r === void 0 && (r = nr), e.theme !== r.theme && e.theme || t || r.theme;
}, Bu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Uu = /(^-|-$)/g;
function da(e) {
  return e.replace(Bu, "-").replace(Uu, "");
}
var Vu = function(e) {
  return Ea(Zi(e) >>> 0);
};
function En(e) {
  return typeof e == "string" && (Ie.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Aa = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Wu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function qu(e, t, r) {
  var o = e[r];
  Aa(t) && Aa(o) ? Qi(o, t) : e[r] = t;
}
function Qi(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  for (var c = 0, u = r; c < u.length; c++) {
    var g = u[c];
    if (Aa(g)) for (var v in g) Wu(v) && qu(e, g[v], v);
  }
  return e;
}
var Ji = rt.createContext();
Ji.Consumer;
var fa = {};
function es(e, t, r) {
  var o = Ya(e), c = !En(e), u = t.attrs, g = u === void 0 ? Fn : u, v = t.componentId, b = v === void 0 ? function(z, q) {
    var H = typeof z != "string" ? "sc" : da(z);
    fa[H] = (fa[H] || 0) + 1;
    var S = H + "-" + Vu("5.3.11" + H + fa[H]);
    return q ? q + "-" + S : S;
  }(t.displayName, t.parentComponentId) : v, y = t.displayName, T = y === void 0 ? function(z) {
    return En(z) ? "styled." + z : "Styled(" + _a(z) + ")";
  }(e) : y, C = t.displayName && t.componentId ? da(t.displayName) + "-" + t.componentId : t.componentId || b, L = o && e.attrs ? Array.prototype.concat(e.attrs, g).filter(Boolean) : g, Z = t.shouldForwardProp;
  o && e.shouldForwardProp && (Z = t.shouldForwardProp ? function(z, q, H) {
    return e.shouldForwardProp(z, q, H) && t.shouldForwardProp(z, q, H);
  } : e.shouldForwardProp);
  var I, x = new Eu(r, C, o ? e.componentStyle : void 0), N = x.isStatic && g.length === 0, B = function(z, q) {
    return function(H, S, oe, pe) {
      var Ce = H.attrs, Ne = H.componentStyle, Be = H.defaultProps, Ze = H.foldedComponentIds, he = H.shouldForwardProp, we = H.styledComponentId, Ee = H.target, xe = function(F, p, G) {
        F === void 0 && (F = nr);
        var k = qt({}, p, { theme: F }), re = {};
        return G.forEach(function(J) {
          var K, V, ne, ce = J;
          for (K in Jr(ce) && (ce = ce(k)), ce) k[K] = re[K] = K === "className" ? (V = re[K], ne = ce[K], V && ne ? V + " " + ne : V || ne) : ce[K];
        }), [k, re];
      }($u(S, ar(Ji), Be) || nr, S, Ce), Xe = xe[0], Pe = xe[1], ke = function(F, p, G, k) {
        var re = Iu(), J = Nu(), K = p ? F.generateAndInjectStyles(nr, re, J) : F.generateAndInjectStyles(G, re, J);
        return Ie.env.NODE_ENV !== "production" && !p && k && k(K), K;
      }(Ne, pe, Xe, Ie.env.NODE_ENV !== "production" ? H.warnTooManyClasses : void 0), Fe = oe, Ge = Pe.$as || S.$as || Pe.as || S.as || Ee, Ye = En(Ge), D = Pe !== S ? qt({}, S, {}, Pe) : S, R = {};
      for (var P in D) P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? R.as = D[P] : (he ? he(P, Xo, Ge) : !Ye || Xo(P)) && (R[P] = D[P]));
      return S.style && Pe.style !== S.style && (R.style = qt({}, S.style, {}, Pe.style)), R.className = Array.prototype.concat(Ze, we, ke !== we ? ke : null, S.className, Pe.className).filter(Boolean).join(" "), R.ref = Fe, ui(Ge, R);
    }(I, z, q, N);
  };
  return B.displayName = T, (I = rt.forwardRef(B)).attrs = L, I.componentStyle = x, I.displayName = T, I.shouldForwardProp = Z, I.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Fn, I.styledComponentId = C, I.target = o ? e.target : e, I.withComponent = function(z) {
    var q = t.componentId, H = function(oe, pe) {
      if (oe == null) return {};
      var Ce, Ne, Be = {}, Ze = Object.keys(oe);
      for (Ne = 0; Ne < Ze.length; Ne++) Ce = Ze[Ne], pe.indexOf(Ce) >= 0 || (Be[Ce] = oe[Ce]);
      return Be;
    }(t, ["componentId"]), S = q && q + "-" + (En(z) ? z : da(_a(z)));
    return es(z, qt({}, H, { attrs: L, componentId: S }), r);
  }, Object.defineProperty(I, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(z) {
    this._foldedDefaultProps = o ? Qi({}, e.defaultProps, z) : z;
  } }), Ie.env.NODE_ENV !== "production" && (zu(T, C), I.warnTooManyClasses = /* @__PURE__ */ function(z, q) {
    var H = {}, S = !1;
    return function(oe) {
      if (!S && (H[oe] = !0, Object.keys(H).length >= 200)) {
        var pe = q ? ' with the id of "' + q + '"' : "";
        console.warn("Over 200 classes were generated for component " + z + pe + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, H = {};
      }
    };
  }(T, C)), Object.defineProperty(I, "toString", { value: function() {
    return "." + I.styledComponentId;
  } }), c && su(I, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), I;
}
var $n = function(e) {
  return function t(r, o, c) {
    if (c === void 0 && (c = nr), !qa.isValidElementType(o)) return Dr(1, String(o));
    var u = function() {
      return r(o, c, Fu.apply(void 0, arguments));
    };
    return u.withConfig = function(g) {
      return t(r, o, qt({}, c, {}, g));
    }, u.attrs = function(g) {
      return t(r, o, qt({}, c, { attrs: Array.prototype.concat(c.attrs, g).filter(Boolean) }));
    }, u;
  }(es, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  $n[e] = $n(e);
});
Ie.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), Ie.env.NODE_ENV !== "production" && Ie.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Hu = $n.ul`
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
`, Gu = () => {
  const { feeds: e } = ar(Ba);
  return /* @__PURE__ */ mt.jsx(Hu, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ mt.jsx("li", { children: /* @__PURE__ */ mt.jsx(
    Vt,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${Ln(t.startDate, "COMPLETE")} <br /> ${Ui(
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
}, ts = ({ header: e, ctaButton: t, dataSource: r, maxItems: o }) => (Kr(() => {
  typeof window < "u" && hi({
    packageName: "component-events",
    component: "CardsGridEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: t,
      dataSource: r,
      maxItems: o
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ mt.jsx(Wa, { header: e, ctaButton: t, dataSource: r, maxItems: o, children: /* @__PURE__ */ mt.jsx(Gu, {}) }));
ts.propTypes = Bi;
const Yu = $n.ul`
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
`, Zu = () => {
  const { feeds: e } = ar(Ba);
  return /* @__PURE__ */ mt.jsx(Yu, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ mt.jsx("li", { children: /* @__PURE__ */ mt.jsx(
    Vt,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${Ln(t.startDate, "COMPLETE")} <br /> ${Ui(
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
}, rs = ({ header: e, ctaButton: t, dataSource: r, maxItems: o }) => (Kr(() => {
  typeof window < "u" && hi({
    packageName: "component-events",
    component: "CardsListEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: t,
      dataSource: r,
      maxItems: o
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ mt.jsx(Wa, { header: e, ctaButton: t, dataSource: r, maxItems: o, children: /* @__PURE__ */ mt.jsx(Zu, {}) }));
rs.propTypes = Bi;
var ns, li = di;
ns = li.createRoot, li.hydrateRoot;
const as = (e, t, r) => {
  ns(r).render(rt.createElement(e, t));
}, Qu = ({ targetSelector: e, props: t }) => {
  as(ts, t, document.querySelector(e));
}, Ju = ({ targetSelector: e, props: t }) => {
  as(rs, t, document.querySelector(e));
};
export {
  ts as CardsGridEvents,
  rs as CardsListEvents,
  Qu as initCardsGridEventsComponent,
  Ju as initCardsListEventsComponent
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
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
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
