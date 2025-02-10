import ht, { Component as Qc, createContext as Ws, forwardRef as Vs, useRef as Ir, useImperativeHandle as eu, useId as tu, useContext as Yt, createElement as Gs, useState as ft, useEffect as Tt, useLayoutEffect as ru, useMemo as Ys, Fragment as Zs, createRef as nu } from "react";
import Xs from "react-dom";
function Ui(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ks = { exports: {} }, wn = {};
var Lo;
function au() {
  if (Lo) return wn;
  Lo = 1;
  var e = ht, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, h, m) {
    var C, _ = {}, O = null, U = null;
    m !== void 0 && (O = "" + m), h.key !== void 0 && (O = "" + h.key), h.ref !== void 0 && (U = h.ref);
    for (C in h) n.call(h, C) && !s.hasOwnProperty(C) && (_[C] = h[C]);
    if (f && f.defaultProps) for (C in h = f.defaultProps, h) _[C] === void 0 && (_[C] = h[C]);
    return { $$typeof: t, type: f, key: O, ref: U, props: _, _owner: a.current };
  }
  return wn.Fragment = r, wn.jsx = d, wn.jsxs = d, wn;
}
Ks.exports = au();
var p = Ks.exports;
function zi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Js = { exports: {} }, Sn = {}, Mo;
function iu() {
  if (Mo) return Sn;
  Mo = 1;
  var e = ht, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, h, m) {
    var C, _ = {}, O = null, U = null;
    m !== void 0 && (O = "" + m), h.key !== void 0 && (O = "" + h.key), h.ref !== void 0 && (U = h.ref);
    for (C in h) n.call(h, C) && !s.hasOwnProperty(C) && (_[C] = h[C]);
    if (f && f.defaultProps) for (C in h = f.defaultProps, h) _[C] === void 0 && (_[C] = h[C]);
    return { $$typeof: t, type: f, key: O, ref: U, props: _, _owner: a.current };
  }
  return Sn.Fragment = r, Sn.jsx = d, Sn.jsxs = d, Sn;
}
Js.exports = iu();
var H = Js.exports, Qs = { exports: {} }, za, Fo;
function ou() {
  if (Fo) return za;
  Fo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return za = e, za;
}
var Ba, $o;
function su() {
  if ($o) return Ba;
  $o = 1;
  var e = ou();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ba = function() {
    function n(d, f, h, m, C, _) {
      if (_ !== e) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
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
  }, Ba;
}
Qs.exports = su()();
var lu = Qs.exports;
const l = /* @__PURE__ */ zi(lu), cu = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), qa = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), el = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.string,
    header: l.string,
    body: l.string
  })
}), Bi = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var tl = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", d = 0; d < arguments.length; d++) {
        var f = arguments[d];
        f && (s = a(s, n(f)));
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
      for (var f in s)
        t.call(s, f) && s[f] && (d = a(d, f));
      return d;
    }
    function a(s, d) {
      return d ? s ? s + " " + d : s + d : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(tl);
var uu = tl.exports;
const dt = /* @__PURE__ */ zi(uu);
function du(e) {
  const [t, r] = ft(!1);
  return Tt(() => {
    const n = window.matchMedia(e);
    n.matches !== t && r(n.matches);
    const a = () => {
      r(n.matches);
    };
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [t, e]), t;
}
const Uo = (e, t, r) => e ? t : r, pu = (e) => (e || []).join(" ");
function Er(e) {
  "@babel/helpers - typeof";
  return Er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Er(e);
}
function mi(e, t) {
  return mi = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, mi(e, t);
}
function fu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function sa(e, t, r) {
  return fu() ? sa = Reflect.construct : sa = function(n, a, s) {
    var d = [null];
    d.push.apply(d, a);
    var f = Function.bind.apply(n, d), h = new f();
    return s && mi(h, s.prototype), h;
  }, sa.apply(null, arguments);
}
function sr(e) {
  return hu(e) || mu(e) || gu(e) || yu();
}
function hu(e) {
  if (Array.isArray(e)) return gi(e);
}
function mu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function gu(e, t) {
  if (e) {
    if (typeof e == "string") return gi(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gi(e, t);
  }
}
function gi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var bu = Object.hasOwnProperty, zo = Object.setPrototypeOf, vu = Object.isFrozen, xu = Object.getPrototypeOf, wu = Object.getOwnPropertyDescriptor, Ct = Object.freeze, qt = Object.seal, Su = Object.create, rl = typeof Reflect < "u" && Reflect, ma = rl.apply, yi = rl.construct;
ma || (ma = function(e, t, r) {
  return e.apply(t, r);
});
Ct || (Ct = function(e) {
  return e;
});
qt || (qt = function(e) {
  return e;
});
yi || (yi = function(e, t) {
  return sa(e, sr(t));
});
var ku = Ht(Array.prototype.forEach), Bo = Ht(Array.prototype.pop), kn = Ht(Array.prototype.push), la = Ht(String.prototype.toLowerCase), Ha = Ht(String.prototype.toString), qo = Ht(String.prototype.match), ir = Ht(String.prototype.replace), Tu = Ht(String.prototype.indexOf), Cu = Ht(String.prototype.trim), wt = Ht(RegExp.prototype.test), Wa = Au(TypeError);
function Ht(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return ma(e, t, n);
  };
}
function Au(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return yi(e, r);
  };
}
function Ne(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : la, zo && zo(e, null);
  for (var a = t.length; a--; ) {
    var s = t[a];
    if (typeof s == "string") {
      var d = r(s);
      d !== s && (vu(t) || (t[a] = d), s = d);
    }
    e[s] = !0;
  }
  return e;
}
function $r(e) {
  var t = Su(null), r;
  for (r in e)
    ma(bu, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function Xn(e, t) {
  for (; e !== null; ) {
    var r = wu(e, t);
    if (r) {
      if (r.get)
        return Ht(r.get);
      if (typeof r.value == "function")
        return Ht(r.value);
    }
    e = xu(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var Ho = Ct(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Va = Ct(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ga = Ct(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _u = Ct(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ya = Ct(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Eu = Ct(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Wo = Ct(["#text"]), Vo = Ct(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Za = Ct(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Go = Ct(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Kn = Ct(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ju = qt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ou = qt(/<%[\w\W]*|[\w\W]*%>/gm), Nu = qt(/\${[\w\W]*}/gm), Ru = qt(/^data-[\-\w.\u00B7-\uFFFF]/), Iu = qt(/^aria-[\-\w]+$/), Du = qt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Pu = qt(/^(?:\w+script|data):/i), Lu = qt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Mu = qt(/^html$/i), Fu = qt(/^[a-z][.\w]*(-[.\w]+)+$/i), $u = function() {
  return typeof window > "u" ? null : window;
}, Uu = function(e, t) {
  if (Er(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var r = null, n = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(n) && (r = t.currentScript.getAttribute(n));
  var a = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(a, {
      createHTML: function(s) {
        return s;
      },
      createScriptURL: function(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
};
function nl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $u(), t = function(b) {
    return nl(b);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, s = e.HTMLTemplateElement, d = e.Node, f = e.Element, h = e.NodeFilter, m = e.NamedNodeMap, C = m === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : m, _ = e.HTMLFormElement, O = e.DOMParser, U = e.trustedTypes, E = f.prototype, S = Xn(E, "cloneNode"), I = Xn(E, "nextSibling"), F = Xn(E, "childNodes"), $ = Xn(E, "parentNode");
  if (typeof s == "function") {
    var X = n.createElement("template");
    X.content && X.content.ownerDocument && (n = X.content.ownerDocument);
  }
  var G = Uu(U, r), T = G ? G.createHTML("") : "", oe = n, ce = oe.implementation, Se = oe.createNodeIterator, Ie = oe.createDocumentFragment, $e = oe.getElementsByTagName, De = r.importNode, fe = {};
  try {
    fe = $r(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var ue = {};
  t.isSupported = typeof $ == "function" && ce && ce.createHTMLDocument !== void 0 && fe !== 9;
  var Ce = ju, ge = Ou, He = Nu, Ae = Ru, _e = Iu, Fe = Pu, We = Lu, Ve = Fu, B = Du, R = null, z = Ne({}, [].concat(sr(Ho), sr(Va), sr(Ga), sr(Ya), sr(Wo))), q = null, v = Ne({}, [].concat(sr(Vo), sr(Za), sr(Go), sr(Kn))), Y = Object.seal(Object.create(null, {
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
  })), j = null, ie = null, re = !0, ee = !0, K = !1, se = !0, he = !1, ne = !0, de = !1, ae = !1, ye = !1, Ue = !1, me = !1, nt = !1, Xe = !0, we = !1, J = "user-content-", pe = !0, at = !1, et = {}, Me = null, ur = Ne({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), dr = null, mr = Ne({}, ["audio", "video", "img", "source", "image", "track"]), jt = null, Mt = Ne({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ot = "http://www.w3.org/1998/Math/MathML", Nt = "http://www.w3.org/2000/svg", lt = "http://www.w3.org/1999/xhtml", bt = lt, Zt = !1, mt = null, gr = Ne({}, [Ot, Nt, lt], Ha), ut, Be = ["application/xhtml+xml", "text/html"], Xt = "text/html", ke, pt = null, _t = n.createElement("form"), Ft = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, vt = function(b) {
    pt && pt === b || ((!b || Er(b) !== "object") && (b = {}), b = $r(b), ut = // eslint-disable-next-line unicorn/prefer-includes
    Be.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? ut = Xt : ut = b.PARSER_MEDIA_TYPE, ke = ut === "application/xhtml+xml" ? Ha : la, R = "ALLOWED_TAGS" in b ? Ne({}, b.ALLOWED_TAGS, ke) : z, q = "ALLOWED_ATTR" in b ? Ne({}, b.ALLOWED_ATTR, ke) : v, mt = "ALLOWED_NAMESPACES" in b ? Ne({}, b.ALLOWED_NAMESPACES, Ha) : gr, jt = "ADD_URI_SAFE_ATTR" in b ? Ne(
      $r(Mt),
      // eslint-disable-line indent
      b.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      ke
      // eslint-disable-line indent
    ) : Mt, dr = "ADD_DATA_URI_TAGS" in b ? Ne(
      $r(mr),
      // eslint-disable-line indent
      b.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      ke
      // eslint-disable-line indent
    ) : mr, Me = "FORBID_CONTENTS" in b ? Ne({}, b.FORBID_CONTENTS, ke) : ur, j = "FORBID_TAGS" in b ? Ne({}, b.FORBID_TAGS, ke) : {}, ie = "FORBID_ATTR" in b ? Ne({}, b.FORBID_ATTR, ke) : {}, et = "USE_PROFILES" in b ? b.USE_PROFILES : !1, re = b.ALLOW_ARIA_ATTR !== !1, ee = b.ALLOW_DATA_ATTR !== !1, K = b.ALLOW_UNKNOWN_PROTOCOLS || !1, se = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, he = b.SAFE_FOR_TEMPLATES || !1, ne = b.SAFE_FOR_XML !== !1, de = b.WHOLE_DOCUMENT || !1, Ue = b.RETURN_DOM || !1, me = b.RETURN_DOM_FRAGMENT || !1, nt = b.RETURN_TRUSTED_TYPE || !1, ye = b.FORCE_BODY || !1, Xe = b.SANITIZE_DOM !== !1, we = b.SANITIZE_NAMED_PROPS || !1, pe = b.KEEP_CONTENT !== !1, at = b.IN_PLACE || !1, B = b.ALLOWED_URI_REGEXP || B, bt = b.NAMESPACE || lt, Y = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && Ft(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Y.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && Ft(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Y.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Y.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), he && (ee = !1), me && (Ue = !0), et && (R = Ne({}, sr(Wo)), q = [], et.html === !0 && (Ne(R, Ho), Ne(q, Vo)), et.svg === !0 && (Ne(R, Va), Ne(q, Za), Ne(q, Kn)), et.svgFilters === !0 && (Ne(R, Ga), Ne(q, Za), Ne(q, Kn)), et.mathMl === !0 && (Ne(R, Ya), Ne(q, Go), Ne(q, Kn))), b.ADD_TAGS && (R === z && (R = $r(R)), Ne(R, b.ADD_TAGS, ke)), b.ADD_ATTR && (q === v && (q = $r(q)), Ne(q, b.ADD_ATTR, ke)), b.ADD_URI_SAFE_ATTR && Ne(jt, b.ADD_URI_SAFE_ATTR, ke), b.FORBID_CONTENTS && (Me === ur && (Me = $r(Me)), Ne(Me, b.FORBID_CONTENTS, ke)), pe && (R["#text"] = !0), de && Ne(R, ["html", "head", "body"]), R.table && (Ne(R, ["tbody"]), delete j.tbody), Ct && Ct(b), pt = b);
  }, pr = Ne({}, ["mi", "mo", "mn", "ms", "mtext"]), Kt = Ne({}, ["annotation-xml"]), yr = Ne({}, ["title", "style", "font", "a", "script"]), Et = Ne({}, Va);
  Ne(Et, Ga), Ne(Et, _u);
  var $t = Ne({}, Ya);
  Ne($t, Eu);
  var Cr = function(b) {
    var x = $(b);
    (!x || !x.tagName) && (x = {
      namespaceURI: bt,
      tagName: "template"
    });
    var N = la(b.tagName), Z = la(x.tagName);
    return mt[b.namespaceURI] ? b.namespaceURI === Nt ? x.namespaceURI === lt ? N === "svg" : x.namespaceURI === Ot ? N === "svg" && (Z === "annotation-xml" || pr[Z]) : !!Et[N] : b.namespaceURI === Ot ? x.namespaceURI === lt ? N === "math" : x.namespaceURI === Nt ? N === "math" && Kt[Z] : !!$t[N] : b.namespaceURI === lt ? x.namespaceURI === Nt && !Kt[Z] || x.namespaceURI === Ot && !pr[Z] ? !1 : !$t[N] && (yr[N] || !Et[N]) : !!(ut === "application/xhtml+xml" && mt[b.namespaceURI]) : !1;
  }, it = function(b) {
    kn(t.removed, {
      element: b
    });
    try {
      b.parentNode.removeChild(b);
    } catch {
      try {
        b.outerHTML = T;
      } catch {
        b.remove();
      }
    }
  }, Rt = function(b, x) {
    try {
      kn(t.removed, {
        attribute: x.getAttributeNode(b),
        from: x
      });
    } catch {
      kn(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(b), b === "is" && !q[b])
      if (Ue || me)
        try {
          it(x);
        } catch {
        }
      else
        try {
          x.setAttribute(b, "");
        } catch {
        }
  }, Ut = function(b) {
    var x, N;
    if (ye)
      b = "<remove></remove>" + b;
    else {
      var Z = qo(b, /^[\r\n\t ]+/);
      N = Z && Z[0];
    }
    ut === "application/xhtml+xml" && bt === lt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    var le = G ? G.createHTML(b) : b;
    if (bt === lt)
      try {
        x = new O().parseFromString(le, ut);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = ce.createDocument(bt, "template", null);
      try {
        x.documentElement.innerHTML = Zt ? T : le;
      } catch {
      }
    }
    var Te = x.body || x.documentElement;
    return b && N && Te.insertBefore(n.createTextNode(N), Te.childNodes[0] || null), bt === lt ? $e.call(x, de ? "html" : "body")[0] : de ? x.documentElement : Te;
  }, fr = function(b) {
    return Se.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, zt = function(b) {
    return b instanceof _ && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof C) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, xt = function(b) {
    return Er(d) === "object" ? b instanceof d : b && Er(b) === "object" && typeof b.nodeType == "number" && typeof b.nodeName == "string";
  }, ct = function(b, x, N) {
    ue[b] && ku(ue[b], function(Z) {
      Z.call(t, x, N, pt);
    });
  }, It = function(b) {
    var x;
    if (ct("beforeSanitizeElements", b, null), zt(b) || wt(/[\u0080-\uFFFF]/, b.nodeName))
      return it(b), !0;
    var N = ke(b.nodeName);
    if (ct("uponSanitizeElement", b, {
      tagName: N,
      allowedTags: R
    }), b.hasChildNodes() && !xt(b.firstElementChild) && (!xt(b.content) || !xt(b.content.firstElementChild)) && wt(/<[/\w]/g, b.innerHTML) && wt(/<[/\w]/g, b.textContent) || N === "select" && wt(/<template/i, b.innerHTML) || b.nodeType === 7 || ne && b.nodeType === 8 && wt(/<[/\w]/g, b.data))
      return it(b), !0;
    if (!R[N] || j[N]) {
      if (!j[N] && Jt(N) && (Y.tagNameCheck instanceof RegExp && wt(Y.tagNameCheck, N) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(N)))
        return !1;
      if (pe && !Me[N]) {
        var Z = $(b) || b.parentNode, le = F(b) || b.childNodes;
        if (le && Z)
          for (var Te = le.length, je = Te - 1; je >= 0; --je) {
            var qe = S(le[je], !0);
            qe.__removalCount = (b.__removalCount || 0) + 1, Z.insertBefore(qe, I(b));
          }
      }
      return it(b), !0;
    }
    return b instanceof f && !Cr(b) || (N === "noscript" || N === "noembed" || N === "noframes") && wt(/<\/no(script|embed|frames)/i, b.innerHTML) ? (it(b), !0) : (he && b.nodeType === 3 && (x = b.textContent, x = ir(x, Ce, " "), x = ir(x, ge, " "), x = ir(x, He, " "), b.textContent !== x && (kn(t.removed, {
      element: b.cloneNode()
    }), b.textContent = x)), ct("afterSanitizeElements", b, null), !1);
  }, br = function(b, x, N) {
    if (Xe && (x === "id" || x === "name") && (N in n || N in _t))
      return !1;
    if (!(ee && !ie[x] && wt(Ae, x)) && !(re && wt(_e, x))) {
      if (!q[x] || ie[x]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Jt(b) && (Y.tagNameCheck instanceof RegExp && wt(Y.tagNameCheck, b) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(b)) && (Y.attributeNameCheck instanceof RegExp && wt(Y.attributeNameCheck, x) || Y.attributeNameCheck instanceof Function && Y.attributeNameCheck(x)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && Y.allowCustomizedBuiltInElements && (Y.tagNameCheck instanceof RegExp && wt(Y.tagNameCheck, N) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(N)))
        ) return !1;
      } else if (!jt[x] && !wt(B, ir(N, We, "")) && !((x === "src" || x === "xlink:href" || x === "href") && b !== "script" && Tu(N, "data:") === 0 && dr[b]) && !(K && !wt(Fe, ir(N, We, ""))) && N)
        return !1;
    }
    return !0;
  }, Jt = function(b) {
    return b !== "annotation-xml" && qo(b, Ve);
  }, Bt = function(b) {
    var x, N, Z, le;
    ct("beforeSanitizeAttributes", b, null);
    var Te = b.attributes;
    if (Te) {
      var je = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: q
      };
      for (le = Te.length; le--; ) {
        x = Te[le];
        var qe = x, ot = qe.name, Pe = qe.namespaceURI;
        if (N = ot === "value" ? x.value : Cu(x.value), Z = ke(ot), je.attrName = Z, je.attrValue = N, je.keepAttr = !0, je.forceKeepAttr = void 0, ct("uponSanitizeAttribute", b, je), N = je.attrValue, !je.forceKeepAttr && (Rt(ot, b), !!je.keepAttr)) {
          if (!se && wt(/\/>/i, N)) {
            Rt(ot, b);
            continue;
          }
          he && (N = ir(N, Ce, " "), N = ir(N, ge, " "), N = ir(N, He, " "));
          var kt = ke(b.nodeName);
          if (br(kt, Z, N)) {
            if (we && (Z === "id" || Z === "name") && (Rt(ot, b), N = J + N), ne && wt(/((--!?|])>)|<\/(style|title)/i, N)) {
              Rt(ot, b);
              continue;
            }
            if (G && Er(U) === "object" && typeof U.getAttributeType == "function" && !Pe)
              switch (U.getAttributeType(kt, Z)) {
                case "TrustedHTML": {
                  N = G.createHTML(N);
                  break;
                }
                case "TrustedScriptURL": {
                  N = G.createScriptURL(N);
                  break;
                }
              }
            try {
              Pe ? b.setAttributeNS(Pe, ot, N) : b.setAttribute(ot, N), zt(b) ? it(b) : Bo(t.removed);
            } catch {
            }
          }
        }
      }
      ct("afterSanitizeAttributes", b, null);
    }
  }, Qt = function b(x) {
    var N, Z = fr(x);
    for (ct("beforeSanitizeShadowDOM", x, null); N = Z.nextNode(); )
      ct("uponSanitizeShadowNode", N, null), !It(N) && (N.content instanceof a && b(N.content), Bt(N));
    ct("afterSanitizeShadowDOM", x, null);
  };
  return t.sanitize = function(b) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N, Z, le, Te, je;
    if (Zt = !b, Zt && (b = "<!-->"), typeof b != "string" && !xt(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw Wa("dirty is not a string, aborting");
      } else
        throw Wa("toString is not a function");
    if (!t.isSupported) {
      if (Er(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof b == "string")
          return e.toStaticHTML(b);
        if (xt(b))
          return e.toStaticHTML(b.outerHTML);
      }
      return b;
    }
    if (ae || vt(x), t.removed = [], typeof b == "string" && (at = !1), at) {
      if (b.nodeName) {
        var qe = ke(b.nodeName);
        if (!R[qe] || j[qe])
          throw Wa("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof d)
      N = Ut("<!---->"), Z = N.ownerDocument.importNode(b, !0), Z.nodeType === 1 && Z.nodeName === "BODY" || Z.nodeName === "HTML" ? N = Z : N.appendChild(Z);
    else {
      if (!Ue && !he && !de && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return G && nt ? G.createHTML(b) : b;
      if (N = Ut(b), !N)
        return Ue ? null : nt ? T : "";
    }
    N && ye && it(N.firstChild);
    for (var ot = fr(at ? b : N); le = ot.nextNode(); )
      le.nodeType === 3 && le === Te || It(le) || (le.content instanceof a && Qt(le.content), Bt(le), Te = le);
    if (Te = null, at)
      return b;
    if (Ue) {
      if (me)
        for (je = Ie.call(N.ownerDocument); N.firstChild; )
          je.appendChild(N.firstChild);
      else
        je = N;
      return (q.shadowroot || q.shadowrootmod) && (je = De.call(r, je, !0)), je;
    }
    var Pe = de ? N.outerHTML : N.innerHTML;
    return de && R["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && wt(Mu, N.ownerDocument.doctype.name) && (Pe = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + Pe), he && (Pe = ir(Pe, Ce, " "), Pe = ir(Pe, ge, " "), Pe = ir(Pe, He, " ")), G && nt ? G.createHTML(Pe) : Pe;
  }, t.setConfig = function(b) {
    vt(b), ae = !0;
  }, t.clearConfig = function() {
    pt = null, ae = !1;
  }, t.isValidAttribute = function(b, x, N) {
    pt || vt({});
    var Z = ke(b), le = ke(x);
    return br(Z, le, N);
  }, t.addHook = function(b, x) {
    typeof x == "function" && (ue[b] = ue[b] || [], kn(ue[b], x));
  }, t.removeHook = function(b) {
    if (ue[b])
      return Bo(ue[b]);
  }, t.removeHooks = function(b) {
    ue[b] && (ue[b] = []);
  }, t.removeAllHooks = function() {
    ue = {};
  }, t;
}
var zu = nl();
function Bu(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
const Wr = (e) => ({ __html: zu.sanitize(e) }), Yo = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; )
    n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
let Xa = !1;
const qu = (e, t) => {
  Xa || (Xa = !0, setTimeout(() => {
    e(), Xa = !1;
  }, t));
};
let Zo;
const Hu = (e, t) => {
  window.clearTimeout(Zo), Zo = window.setTimeout(e, t);
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
const al = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: d = "",
  component: f = ""
}) => {
  const { dataLayer: h } = window, m = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: d.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: f.toLowerCase()
  };
  h && h.push(m);
};
var Ur = {}, Xo;
function Wu() {
  if (Xo) return Ur;
  Xo = 1;
  var e = ht;
  function t(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, y = 1; y < arguments.length; y++) u += "&args[]=" + encodeURIComponent(arguments[y]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function d(i) {
    return r.call(s, i) ? !0 : r.call(a, i) ? !1 : n.test(i) ? s[i] = !0 : (a[i] = !0, !1);
  }
  function f(i, u, y, k, M, D, W) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = k, this.attributeNamespace = M, this.mustUseProperty = y, this.propertyName = i, this.type = u, this.sanitizeURL = D, this.removeEmptyString = W;
  }
  var h = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    h[i] = new f(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var u = i[0];
    h[u] = new f(u, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    h[i] = new f(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    h[i] = new f(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    h[i] = new f(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    h[i] = new f(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    h[i] = new f(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    h[i] = new f(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    h[i] = new f(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var m = /[\-:]([a-z])/g;
  function C(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var u = i.replace(
      m,
      C
    );
    h[u] = new f(u, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var u = i.replace(m, C);
    h[u] = new f(u, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var u = i.replace(m, C);
    h[u] = new f(u, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    h[i] = new f(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), h.xlinkHref = new f("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    h[i] = new f(i, 1, !1, i.toLowerCase(), null, !0, !0);
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
  }, O = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_).forEach(function(i) {
    O.forEach(function(u) {
      u = u + i.charAt(0).toUpperCase() + i.substring(1), _[u] = _[i];
    });
  });
  var U = /["'&<>]/;
  function E(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var u = U.exec(i);
    if (u) {
      var y = "", k, M = 0;
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
        M !== k && (y += i.substring(M, k)), M = k + 1, y += u;
      }
      i = M !== k ? y + i.substring(M, k) : y;
    }
    return i;
  }
  var S = /([A-Z])/g, I = /^ms-/, F = Array.isArray;
  function $(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function X(i, u, y) {
    switch (u) {
      case "select":
        return $(1, y.value != null ? y.value : y.defaultValue);
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
  var G = /* @__PURE__ */ new Map();
  function T(i, u, y) {
    if (typeof y != "object") throw Error(t(62));
    u = !0;
    for (var k in y) if (r.call(y, k)) {
      var M = y[k];
      if (M != null && typeof M != "boolean" && M !== "") {
        if (k.indexOf("--") === 0) {
          var D = E(k);
          M = E(("" + M).trim());
        } else {
          D = k;
          var W = G.get(D);
          W !== void 0 || (W = E(D.replace(S, "-$1").toLowerCase().replace(I, "-ms-")), G.set(D, W)), D = W, M = typeof M == "number" ? M === 0 || r.call(_, k) ? "" + M : M + "px" : E(("" + M).trim());
        }
        u ? (u = !1, i.push(' style="', D, ":", M)) : i.push(";", D, ":", M);
      }
    }
    u || i.push('"');
  }
  function oe(i, u, y, k) {
    switch (y) {
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
    if (!(2 < y.length) || y[0] !== "o" && y[0] !== "O" || y[1] !== "n" && y[1] !== "N") {
      if (u = h.hasOwnProperty(y) ? h[y] : null, u !== null) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (y = u.attributeName, u.type) {
          case 3:
            k && i.push(" ", y, '=""');
            break;
          case 4:
            k === !0 ? i.push(" ", y, '=""') : k !== !1 && i.push(" ", y, '="', E(k), '"');
            break;
          case 5:
            isNaN(k) || i.push(" ", y, '="', E(k), '"');
            break;
          case 6:
            !isNaN(k) && 1 <= k && i.push(" ", y, '="', E(k), '"');
            break;
          default:
            u.sanitizeURL && (k = "" + k), i.push(" ", y, '="', E(k), '"');
        }
      } else if (d(y)) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = y.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push(" ", y, '="', E(k), '"');
      }
    }
  }
  function ce(i, u, y) {
    if (u != null) {
      if (y != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && i.push("" + u);
    }
  }
  function Se(i) {
    var u = "";
    return e.Children.forEach(i, function(y) {
      y != null && (u += y);
    }), u;
  }
  function Ie(i, u, y, k) {
    i.push(fe(y));
    var M = y = null, D;
    for (D in u) if (r.call(u, D)) {
      var W = u[D];
      if (W != null) switch (D) {
        case "children":
          y = W;
          break;
        case "dangerouslySetInnerHTML":
          M = W;
          break;
        default:
          oe(i, k, D, W);
      }
    }
    return i.push(">"), ce(i, M, y), typeof y == "string" ? (i.push(E(y)), null) : y;
  }
  var $e = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, De = /* @__PURE__ */ new Map();
  function fe(i) {
    var u = De.get(i);
    if (u === void 0) {
      if (!$e.test(i)) throw Error(t(65, i));
      u = "<" + i, De.set(i, u);
    }
    return u;
  }
  function ue(i, u, y, k, M) {
    switch (u) {
      case "select":
        i.push(fe("select"));
        var D = null, W = null;
        for (Ee in y) if (r.call(y, Ee)) {
          var te = y[Ee];
          if (te != null) switch (Ee) {
            case "children":
              D = te;
              break;
            case "dangerouslySetInnerHTML":
              W = te;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              oe(i, k, Ee, te);
          }
        }
        return i.push(">"), ce(i, W, D), D;
      case "option":
        W = M.selectedValue, i.push(fe("option"));
        var be = te = null, xe = null, Ee = null;
        for (D in y) if (r.call(y, D)) {
          var st = y[D];
          if (st != null) switch (D) {
            case "children":
              te = st;
              break;
            case "selected":
              xe = st;
              break;
            case "dangerouslySetInnerHTML":
              Ee = st;
              break;
            case "value":
              be = st;
            default:
              oe(i, k, D, st);
          }
        }
        if (W != null) if (y = be !== null ? "" + be : Se(te), F(W)) {
          for (k = 0; k < W.length; k++)
            if ("" + W[k] === y) {
              i.push(' selected=""');
              break;
            }
        } else "" + W === y && i.push(' selected=""');
        else xe && i.push(' selected=""');
        return i.push(">"), ce(i, Ee, te), te;
      case "textarea":
        i.push(fe("textarea")), Ee = W = D = null;
        for (te in y) if (r.call(y, te) && (be = y[te], be != null)) switch (te) {
          case "children":
            Ee = be;
            break;
          case "value":
            D = be;
            break;
          case "defaultValue":
            W = be;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            oe(
              i,
              k,
              te,
              be
            );
        }
        if (D === null && W !== null && (D = W), i.push(">"), Ee != null) {
          if (D != null) throw Error(t(92));
          if (F(Ee) && 1 < Ee.length) throw Error(t(93));
          D = "" + Ee;
        }
        return typeof D == "string" && D[0] === `
` && i.push(`
`), D !== null && i.push(E("" + D)), null;
      case "input":
        i.push(fe("input")), be = Ee = te = D = null;
        for (W in y) if (r.call(y, W) && (xe = y[W], xe != null)) switch (W) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            be = xe;
            break;
          case "defaultValue":
            te = xe;
            break;
          case "checked":
            Ee = xe;
            break;
          case "value":
            D = xe;
            break;
          default:
            oe(i, k, W, xe);
        }
        return Ee !== null ? oe(i, k, "checked", Ee) : be !== null && oe(i, k, "checked", be), D !== null ? oe(i, k, "value", D) : te !== null && oe(i, k, "value", te), i.push("/>"), null;
      case "menuitem":
        i.push(fe("menuitem"));
        for (var tr in y) if (r.call(y, tr) && (D = y[tr], D != null)) switch (tr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            oe(i, k, tr, D);
        }
        return i.push(">"), null;
      case "title":
        i.push(fe("title")), D = null;
        for (st in y) if (r.call(y, st) && (W = y[st], W != null)) switch (st) {
          case "children":
            D = W;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            oe(i, k, st, W);
        }
        return i.push(">"), D;
      case "listing":
      case "pre":
        i.push(fe(u)), W = D = null;
        for (be in y) if (r.call(y, be) && (te = y[be], te != null)) switch (be) {
          case "children":
            D = te;
            break;
          case "dangerouslySetInnerHTML":
            W = te;
            break;
          default:
            oe(i, k, be, te);
        }
        if (i.push(">"), W != null) {
          if (D != null) throw Error(t(60));
          if (typeof W != "object" || !("__html" in W)) throw Error(t(61));
          y = W.__html, y != null && (typeof y == "string" && 0 < y.length && y[0] === `
` ? i.push(`
`, y) : i.push("" + y));
        }
        return typeof D == "string" && D[0] === `
` && i.push(`
`), D;
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
        i.push(fe(u));
        for (var rr in y) if (r.call(y, rr) && (D = y[rr], D != null)) switch (rr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            oe(i, k, rr, D);
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
        return Ie(
          i,
          y,
          u,
          k
        );
      case "html":
        return M.insertionMode === 0 && i.push("<!DOCTYPE html>"), Ie(i, y, u, k);
      default:
        if (u.indexOf("-") === -1 && typeof y.is != "string") return Ie(i, y, u, k);
        i.push(fe(u)), W = D = null;
        for (xe in y) if (r.call(y, xe) && (te = y[xe], te != null)) switch (xe) {
          case "children":
            D = te;
            break;
          case "dangerouslySetInnerHTML":
            W = te;
            break;
          case "style":
            T(i, k, te);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(xe) && typeof te != "function" && typeof te != "symbol" && i.push(" ", xe, '="', E(te), '"');
        }
        return i.push(">"), ce(i, W, D), D;
    }
  }
  function Ce(i, u, y) {
    if (i.push('<!--$?--><template id="'), y === null) throw Error(t(395));
    return i.push(y), i.push('"></template>');
  }
  function ge(i, u, y, k) {
    switch (y.insertionMode) {
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
  function He(i, u) {
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
  var Ae = /[<\u2028\u2029]/g;
  function _e(i) {
    return JSON.stringify(i).replace(Ae, function(u) {
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
  function We(i, u, y, k) {
    return y.generateStaticMarkup ? (i.push(E(u)), !1) : (u === "" ? i = k : (k && i.push("<!-- -->"), i.push(E(u)), i = !0), i);
  }
  var Ve = Object.assign, B = Symbol.for("react.element"), R = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), j = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), he = Symbol.for("react.scope"), ne = Symbol.for("react.debug_trace_mode"), de = Symbol.for("react.legacy_hidden"), ae = Symbol.for("react.default_value"), ye = Symbol.iterator;
  function Ue(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case z:
        return "Fragment";
      case R:
        return "Portal";
      case v:
        return "Profiler";
      case q:
        return "StrictMode";
      case re:
        return "Suspense";
      case ee:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case j:
        return (i.displayName || "Context") + ".Consumer";
      case Y:
        return (i._context.displayName || "Context") + ".Provider";
      case ie:
        var u = i.render;
        return i = i.displayName, i || (i = u.displayName || u.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case K:
        return u = i.displayName || null, u !== null ? u : Ue(i.type) || "Memo";
      case se:
        u = i._payload, i = i._init;
        try {
          return Ue(i(u));
        } catch {
        }
    }
    return null;
  }
  var me = {};
  function nt(i, u) {
    if (i = i.contextTypes, !i) return me;
    var y = {}, k;
    for (k in i) y[k] = u[k];
    return y;
  }
  var Xe = null;
  function we(i, u) {
    if (i !== u) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var y = u.parent;
      if (i === null) {
        if (y !== null) throw Error(t(401));
      } else {
        if (y === null) throw Error(t(401));
        we(i, y);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function J(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && J(i);
  }
  function pe(i) {
    var u = i.parent;
    u !== null && pe(u), i.context._currentValue2 = i.value;
  }
  function at(i, u) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === u.depth ? we(i, u) : at(i, u);
  }
  function et(i, u) {
    var y = u.parent;
    if (y === null) throw Error(t(402));
    i.depth === y.depth ? we(i, y) : et(i, y), u.context._currentValue2 = u.value;
  }
  function Me(i) {
    var u = Xe;
    u !== i && (u === null ? pe(i) : i === null ? J(u) : u.depth === i.depth ? we(u, i) : u.depth > i.depth ? at(u, i) : et(u, i), Xe = i);
  }
  var ur = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function dr(i, u, y, k) {
    var M = i.state !== void 0 ? i.state : null;
    i.updater = ur, i.props = y, i.state = M;
    var D = { queue: [], replace: !1 };
    i._reactInternals = D;
    var W = u.contextType;
    if (i.context = typeof W == "object" && W !== null ? W._currentValue2 : k, W = u.getDerivedStateFromProps, typeof W == "function" && (W = W(y, M), M = W == null ? M : Ve({}, M, W), i.state = M), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && ur.enqueueReplaceState(i, i.state, null), D.queue !== null && 0 < D.queue.length) if (u = D.queue, W = D.replace, D.queue = null, D.replace = !1, W && u.length === 1) i.state = u[0];
    else {
      for (D = W ? u[0] : i.state, M = !0, W = W ? 1 : 0; W < u.length; W++) {
        var te = u[W];
        te = typeof te == "function" ? te.call(i, D, y, k) : te, te != null && (M ? (M = !1, D = Ve({}, D, te)) : Ve(D, te));
      }
      i.state = D;
    }
    else D.queue = null;
  }
  var mr = { id: 1, overflow: "" };
  function jt(i, u, y) {
    var k = i.id;
    i = i.overflow;
    var M = 32 - Mt(k) - 1;
    k &= ~(1 << M), y += 1;
    var D = 32 - Mt(u) + M;
    if (30 < D) {
      var W = M - M % 5;
      return D = (k & (1 << W) - 1).toString(32), k >>= W, M -= W, { id: 1 << 32 - Mt(u) + M | y << M | k, overflow: D + i };
    }
    return { id: 1 << D | y << M | k, overflow: i };
  }
  var Mt = Math.clz32 ? Math.clz32 : lt, Ot = Math.log, Nt = Math.LN2;
  function lt(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Ot(i) / Nt | 0) | 0;
  }
  function bt(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var Zt = typeof Object.is == "function" ? Object.is : bt, mt = null, gr = null, ut = null, Be = null, Xt = !1, ke = !1, pt = 0, _t = null, Ft = 0;
  function vt() {
    if (mt === null) throw Error(t(321));
    return mt;
  }
  function pr() {
    if (0 < Ft) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Kt() {
    return Be === null ? ut === null ? (Xt = !1, ut = Be = pr()) : (Xt = !0, Be = ut) : Be.next === null ? (Xt = !1, Be = Be.next = pr()) : (Xt = !0, Be = Be.next), Be;
  }
  function yr() {
    gr = mt = null, ke = !1, ut = null, Ft = 0, Be = _t = null;
  }
  function Et(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function $t(i, u, y) {
    if (mt = vt(), Be = Kt(), Xt) {
      var k = Be.queue;
      if (u = k.dispatch, _t !== null && (y = _t.get(k), y !== void 0)) {
        _t.delete(k), k = Be.memoizedState;
        do
          k = i(k, y.action), y = y.next;
        while (y !== null);
        return Be.memoizedState = k, [k, u];
      }
      return [Be.memoizedState, u];
    }
    return i = i === Et ? typeof u == "function" ? u() : u : y !== void 0 ? y(u) : u, Be.memoizedState = i, i = Be.queue = { last: null, dispatch: null }, i = i.dispatch = it.bind(null, mt, i), [Be.memoizedState, i];
  }
  function Cr(i, u) {
    if (mt = vt(), Be = Kt(), u = u === void 0 ? null : u, Be !== null) {
      var y = Be.memoizedState;
      if (y !== null && u !== null) {
        var k = y[1];
        e: if (k === null) k = !1;
        else {
          for (var M = 0; M < k.length && M < u.length; M++) if (!Zt(u[M], k[M])) {
            k = !1;
            break e;
          }
          k = !0;
        }
        if (k) return y[0];
      }
    }
    return i = i(), Be.memoizedState = [i, u], i;
  }
  function it(i, u, y) {
    if (25 <= Ft) throw Error(t(301));
    if (i === mt) if (ke = !0, i = { action: y, next: null }, _t === null && (_t = /* @__PURE__ */ new Map()), y = _t.get(u), y === void 0) _t.set(u, i);
    else {
      for (u = y; u.next !== null; ) u = u.next;
      u.next = i;
    }
  }
  function Rt() {
    throw Error(t(394));
  }
  function Ut() {
  }
  var fr = { readContext: function(i) {
    return i._currentValue2;
  }, useContext: function(i) {
    return vt(), i._currentValue2;
  }, useMemo: Cr, useReducer: $t, useRef: function(i) {
    mt = vt(), Be = Kt();
    var u = Be.memoizedState;
    return u === null ? (i = { current: i }, Be.memoizedState = i) : u;
  }, useState: function(i) {
    return $t(Et, i);
  }, useInsertionEffect: Ut, useLayoutEffect: function() {
  }, useCallback: function(i, u) {
    return Cr(function() {
      return i;
    }, u);
  }, useImperativeHandle: Ut, useEffect: Ut, useDebugValue: Ut, useDeferredValue: function(i) {
    return vt(), i;
  }, useTransition: function() {
    return vt(), [
      !1,
      Rt
    ];
  }, useId: function() {
    var i = gr.treeContext, u = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Mt(i) - 1)).toString(32) + u;
    var y = zt;
    if (y === null) throw Error(t(404));
    return u = pt++, i = ":" + y.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return vt(), u(i._source);
  }, useSyncExternalStore: function(i, u, y) {
    if (y === void 0) throw Error(t(407));
    return y();
  } }, zt = null, xt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ct(i) {
    return console.error(i), null;
  }
  function It() {
  }
  function br(i, u, y, k, M, D, W, te, be) {
    var xe = [], Ee = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: k, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ee, pingedTasks: xe, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: M === void 0 ? ct : M, onAllReady: It, onShellReady: W === void 0 ? It : W, onShellError: It, onFatalError: It }, y = Bt(u, 0, null, y, !1, !1), y.parentFlushed = !0, i = Jt(u, i, null, y, Ee, me, null, mr), xe.push(i), u;
  }
  function Jt(i, u, y, k, M, D, W, te) {
    i.allPendingTasks++, y === null ? i.pendingRootTasks++ : y.pendingTasks++;
    var be = { node: u, ping: function() {
      var xe = i.pingedTasks;
      xe.push(be), xe.length === 1 && dn(i);
    }, blockedBoundary: y, blockedSegment: k, abortSet: M, legacyContext: D, context: W, treeContext: te };
    return M.add(be), be;
  }
  function Bt(i, u, y, k, M, D) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: k, boundary: y, lastPushedText: M, textEmbedded: D };
  }
  function Qt(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function b(i, u) {
    var y = i.onShellError;
    y(u), y = i.onFatalError, y(u), i.destination !== null ? (i.status = 2, i.destination.destroy(u)) : (i.status = 1, i.fatalError = u);
  }
  function x(i, u, y, k, M) {
    for (mt = {}, gr = u, pt = 0, i = y(k, M); ke; ) ke = !1, pt = 0, Ft += 1, Be = null, i = y(k, M);
    return yr(), i;
  }
  function N(i, u, y, k) {
    var M = y.render(), D = k.childContextTypes;
    if (D != null) {
      var W = u.legacyContext;
      if (typeof y.getChildContext != "function") k = W;
      else {
        y = y.getChildContext();
        for (var te in y) if (!(te in D)) throw Error(t(108, Ue(k) || "Unknown", te));
        k = Ve({}, W, y);
      }
      u.legacyContext = k, Te(i, u, M), u.legacyContext = W;
    } else Te(i, u, M);
  }
  function Z(i, u) {
    if (i && i.defaultProps) {
      u = Ve({}, u), i = i.defaultProps;
      for (var y in i) u[y] === void 0 && (u[y] = i[y]);
      return u;
    }
    return u;
  }
  function le(i, u, y, k, M) {
    if (typeof y == "function") if (y.prototype && y.prototype.isReactComponent) {
      M = nt(y, u.legacyContext);
      var D = y.contextType;
      D = new y(k, typeof D == "object" && D !== null ? D._currentValue2 : M), dr(D, y, k, M), N(i, u, D, y);
    } else {
      D = nt(y, u.legacyContext), M = x(i, u, y, k, D);
      var W = pt !== 0;
      if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) dr(M, y, k, D), N(i, u, M, y);
      else if (W) {
        k = u.treeContext, u.treeContext = jt(k, 1, 0);
        try {
          Te(i, u, M);
        } finally {
          u.treeContext = k;
        }
      } else Te(i, u, M);
    }
    else if (typeof y == "string") {
      switch (M = u.blockedSegment, D = ue(M.chunks, y, k, i.responseState, M.formatContext), M.lastPushedText = !1, W = M.formatContext, M.formatContext = X(W, y, k), qe(i, u, D), M.formatContext = W, y) {
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
          M.chunks.push("</", y, ">");
      }
      M.lastPushedText = !1;
    } else {
      switch (y) {
        case de:
        case ne:
        case q:
        case v:
        case z:
          Te(i, u, k.children);
          return;
        case ee:
          Te(i, u, k.children);
          return;
        case he:
          throw Error(t(343));
        case re:
          e: {
            y = u.blockedBoundary, M = u.blockedSegment, D = k.fallback, k = k.children, W = /* @__PURE__ */ new Set();
            var te = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: W, errorDigest: null }, be = Bt(i, M.chunks.length, te, M.formatContext, !1, !1);
            M.children.push(be), M.lastPushedText = !1;
            var xe = Bt(i, 0, null, M.formatContext, !1, !1);
            xe.parentFlushed = !0, u.blockedBoundary = te, u.blockedSegment = xe;
            try {
              if (qe(
                i,
                u,
                k
              ), i.responseState.generateStaticMarkup || xe.lastPushedText && xe.textEmbedded && xe.chunks.push("<!-- -->"), xe.status = 1, kt(te, xe), te.pendingTasks === 0) break e;
            } catch (Ee) {
              xe.status = 4, te.forceClientRender = !0, te.errorDigest = Qt(i, Ee);
            } finally {
              u.blockedBoundary = y, u.blockedSegment = M;
            }
            u = Jt(i, D, y, be, W, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof y == "object" && y !== null) switch (y.$$typeof) {
        case ie:
          if (k = x(i, u, y.render, k, M), pt !== 0) {
            y = u.treeContext, u.treeContext = jt(y, 1, 0);
            try {
              Te(i, u, k);
            } finally {
              u.treeContext = y;
            }
          } else Te(i, u, k);
          return;
        case K:
          y = y.type, k = Z(y, k), le(i, u, y, k, M);
          return;
        case Y:
          if (M = k.children, y = y._context, k = k.value, D = y._currentValue2, y._currentValue2 = k, W = Xe, Xe = k = { parent: W, depth: W === null ? 0 : W.depth + 1, context: y, parentValue: D, value: k }, u.context = k, Te(i, u, M), i = Xe, i === null) throw Error(t(403));
          k = i.parentValue, i.context._currentValue2 = k === ae ? i.context._defaultValue : k, i = Xe = i.parent, u.context = i;
          return;
        case j:
          k = k.children, k = k(y._currentValue2), Te(i, u, k);
          return;
        case se:
          M = y._init, y = M(y._payload), k = Z(y, k), le(
            i,
            u,
            y,
            k,
            void 0
          );
          return;
      }
      throw Error(t(130, y == null ? y : typeof y, ""));
    }
  }
  function Te(i, u, y) {
    if (u.node = y, typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case B:
          le(i, u, y.type, y.props, y.ref);
          return;
        case R:
          throw Error(t(257));
        case se:
          var k = y._init;
          y = k(y._payload), Te(i, u, y);
          return;
      }
      if (F(y)) {
        je(i, u, y);
        return;
      }
      if (y === null || typeof y != "object" ? k = null : (k = ye && y[ye] || y["@@iterator"], k = typeof k == "function" ? k : null), k && (k = k.call(y))) {
        if (y = k.next(), !y.done) {
          var M = [];
          do
            M.push(y.value), y = k.next();
          while (!y.done);
          je(i, u, M);
        }
        return;
      }
      throw i = Object.prototype.toString.call(y), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : i));
    }
    typeof y == "string" ? (k = u.blockedSegment, k.lastPushedText = We(u.blockedSegment.chunks, y, i.responseState, k.lastPushedText)) : typeof y == "number" && (k = u.blockedSegment, k.lastPushedText = We(u.blockedSegment.chunks, "" + y, i.responseState, k.lastPushedText));
  }
  function je(i, u, y) {
    for (var k = y.length, M = 0; M < k; M++) {
      var D = u.treeContext;
      u.treeContext = jt(D, k, M);
      try {
        qe(i, u, y[M]);
      } finally {
        u.treeContext = D;
      }
    }
  }
  function qe(i, u, y) {
    var k = u.blockedSegment.formatContext, M = u.legacyContext, D = u.context;
    try {
      return Te(i, u, y);
    } catch (be) {
      if (yr(), typeof be == "object" && be !== null && typeof be.then == "function") {
        y = be;
        var W = u.blockedSegment, te = Bt(i, W.chunks.length, null, W.formatContext, W.lastPushedText, !0);
        W.children.push(te), W.lastPushedText = !1, i = Jt(i, u.node, u.blockedBoundary, te, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, y.then(i, i), u.blockedSegment.formatContext = k, u.legacyContext = M, u.context = D, Me(D);
      } else throw u.blockedSegment.formatContext = k, u.legacyContext = M, u.context = D, Me(D), be;
    }
  }
  function ot(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, er(this, u, i);
  }
  function Pe(i, u, y) {
    var k = i.blockedBoundary;
    i.blockedSegment.status = 3, k === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (k.pendingTasks--, k.forceClientRender || (k.forceClientRender = !0, i = y === void 0 ? Error(t(432)) : y, k.errorDigest = u.onError(i), k.parentFlushed && u.clientRenderedBoundaries.push(k)), k.fallbackAbortableTasks.forEach(function(M) {
      return Pe(M, u, y);
    }), k.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (k = u.onAllReady, k()));
  }
  function kt(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var y = u.children[0];
      y.id = u.id, y.parentFlushed = !0, y.status === 1 && kt(i, y);
    } else i.completedSegments.push(u);
  }
  function er(i, u, y) {
    if (u === null) {
      if (y.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = y;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = It, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (y.parentFlushed && y.status === 1 && kt(u, y), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(ot, i), u.fallbackAbortableTasks.clear()) : y.parentFlushed && y.status === 1 && (kt(u, y), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function dn(i) {
    if (i.status !== 2) {
      var u = Xe, y = xt.current;
      xt.current = fr;
      var k = zt;
      zt = i.responseState;
      try {
        var M = i.pingedTasks, D;
        for (D = 0; D < M.length; D++) {
          var W = M[D], te = i, be = W.blockedSegment;
          if (be.status === 0) {
            Me(W.context);
            try {
              Te(te, W, W.node), te.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), W.abortSet.delete(W), be.status = 1, er(te, W.blockedBoundary, be);
            } catch (Dt) {
              if (yr(), typeof Dt == "object" && Dt !== null && typeof Dt.then == "function") {
                var xe = W.ping;
                Dt.then(xe, xe);
              } else {
                W.abortSet.delete(W), be.status = 4;
                var Ee = W.blockedBoundary, st = Dt, tr = Qt(te, st);
                if (Ee === null ? b(te, st) : (Ee.pendingTasks--, Ee.forceClientRender || (Ee.forceClientRender = !0, Ee.errorDigest = tr, Ee.parentFlushed && te.clientRenderedBoundaries.push(Ee))), te.allPendingTasks--, te.allPendingTasks === 0) {
                  var rr = te.onAllReady;
                  rr();
                }
              }
            } finally {
            }
          }
        }
        M.splice(0, D), i.destination !== null && Kr(i, i.destination);
      } catch (Dt) {
        Qt(i, Dt), b(i, Dt);
      } finally {
        zt = k, xt.current = y, y === fr && Me(u);
      }
    }
  }
  function Dr(i, u, y) {
    switch (y.parentFlushed = !0, y.status) {
      case 0:
        var k = y.id = i.nextSegmentId++;
        return y.lastPushedText = !1, y.textEmbedded = !1, i = i.responseState, u.push('<template id="'), u.push(i.placeholderPrefix), i = k.toString(16), u.push(i), u.push('"></template>');
      case 1:
        y.status = 2;
        var M = !0;
        k = y.chunks;
        var D = 0;
        y = y.children;
        for (var W = 0; W < y.length; W++) {
          for (M = y[W]; D < M.index; D++) u.push(k[D]);
          M = Pr(i, u, M);
        }
        for (; D < k.length - 1; D++) u.push(k[D]);
        return D < k.length && (M = u.push(k[D])), M;
      default:
        throw Error(t(390));
    }
  }
  function Pr(i, u, y) {
    var k = y.boundary;
    if (k === null) return Dr(i, u, y);
    if (k.parentFlushed = !0, k.forceClientRender) return i.responseState.generateStaticMarkup || (k = k.errorDigest, u.push("<!--$!-->"), u.push("<template"), k && (u.push(' data-dgst="'), k = E(k), u.push(k), u.push('"')), u.push("></template>")), Dr(i, u, y), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
    if (0 < k.pendingTasks) {
      k.rootSegmentID = i.nextSegmentId++, 0 < k.completedSegments.length && i.partialBoundaries.push(k);
      var M = i.responseState, D = M.nextSuspenseID++;
      return M = M.boundaryPrefix + D.toString(16), k = k.id = M, Ce(u, i.responseState, k), Dr(i, u, y), u.push("<!--/$-->");
    }
    if (k.byteSize > i.progressiveChunkSize) return k.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(k), Ce(u, i.responseState, k.id), Dr(i, u, y), u.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || u.push("<!--$-->"), y = k.completedSegments, y.length !== 1) throw Error(t(391));
    return Pr(i, u, y[0]), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
  }
  function pn(i, u, y) {
    return ge(u, i.responseState, y.formatContext, y.id), Pr(i, u, y), He(u, y.formatContext);
  }
  function fn(i, u, y) {
    for (var k = y.completedSegments, M = 0; M < k.length; M++) hn(i, u, y, k[M]);
    if (k.length = 0, i = i.responseState, k = y.id, y = y.rootSegmentID, u.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? u.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), k === null) throw Error(t(395));
    return y = y.toString(16), u.push(k), u.push('","'), u.push(i.segmentPrefix), u.push(y), u.push('")<\/script>');
  }
  function hn(i, u, y, k) {
    if (k.status === 2) return !0;
    var M = k.id;
    if (M === -1) {
      if ((k.id = y.rootSegmentID) === -1) throw Error(t(392));
      return pn(i, u, k);
    }
    return pn(i, u, k), i = i.responseState, u.push(i.startInlineScript), i.sentCompleteSegmentFunction ? u.push('$RS("') : (i.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(i.segmentPrefix), M = M.toString(16), u.push(M), u.push('","'), u.push(i.placeholderPrefix), u.push(M), u.push('")<\/script>');
  }
  function Kr(i, u) {
    try {
      var y = i.completedRootSegment;
      if (y !== null && i.pendingRootTasks === 0) {
        Pr(i, u, y), i.completedRootSegment = null;
        var k = i.responseState.bootstrapChunks;
        for (y = 0; y < k.length - 1; y++) u.push(k[y]);
        y < k.length && u.push(k[y]);
      }
      var M = i.clientRenderedBoundaries, D;
      for (D = 0; D < M.length; D++) {
        var W = M[D];
        k = u;
        var te = i.responseState, be = W.id, xe = W.errorDigest, Ee = W.errorMessage, st = W.errorComponentStack;
        if (k.push(te.startInlineScript), te.sentClientRenderFunction ? k.push('$RX("') : (te.sentClientRenderFunction = !0, k.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), be === null) throw Error(t(395));
        if (k.push(be), k.push('"'), xe || Ee || st) {
          k.push(",");
          var tr = _e(xe || "");
          k.push(tr);
        }
        if (Ee || st) {
          k.push(",");
          var rr = _e(Ee || "");
          k.push(rr);
        }
        if (st) {
          k.push(",");
          var Dt = _e(st);
          k.push(Dt);
        }
        if (!k.push(")<\/script>")) {
          i.destination = null, D++, M.splice(0, D);
          return;
        }
      }
      M.splice(0, D);
      var Lr = i.completedBoundaries;
      for (D = 0; D < Lr.length; D++) if (!fn(i, u, Lr[D])) {
        i.destination = null, D++, Lr.splice(0, D);
        return;
      }
      Lr.splice(0, D);
      var vr = i.partialBoundaries;
      for (D = 0; D < vr.length; D++) {
        var gn = vr[D];
        e: {
          M = i, W = u;
          var Mr = gn.completedSegments;
          for (te = 0; te < Mr.length; te++) if (!hn(M, W, gn, Mr[te])) {
            te++, Mr.splice(0, te);
            var Mn = !1;
            break e;
          }
          Mr.splice(0, te), Mn = !0;
        }
        if (!Mn) {
          i.destination = null, D++, vr.splice(0, D);
          return;
        }
      }
      vr.splice(0, D);
      var Ar = i.completedBoundaries;
      for (D = 0; D < Ar.length; D++) if (!fn(i, u, Ar[D])) {
        i.destination = null, D++, Ar.splice(0, D);
        return;
      }
      Ar.splice(0, D);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Pn(i, u) {
    try {
      var y = i.abortableTasks;
      y.forEach(function(k) {
        return Pe(k, i, u);
      }), y.clear(), i.destination !== null && Kr(i, i.destination);
    } catch (k) {
      Qt(i, k), b(i, k);
    }
  }
  function Ln() {
  }
  function mn(i, u, y, k) {
    var M = !1, D = null, W = "", te = { push: function(xe) {
      return xe !== null && (W += xe), !0;
    }, destroy: function(xe) {
      M = !0, D = xe;
    } }, be = !1;
    if (i = br(i, Fe(y, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Ln, void 0, function() {
      be = !0;
    }), dn(i), Pn(i, k), i.status === 1) i.status = 2, te.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = te;
      try {
        Kr(i, te);
      } catch (xe) {
        Qt(i, xe), b(i, xe);
      }
    }
    if (M) throw D;
    if (!be) throw Error(t(426));
    return W;
  }
  return Ur.renderToNodeStream = function() {
    throw Error(t(207));
  }, Ur.renderToStaticMarkup = function(i, u) {
    return mn(i, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ur.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Ur.renderToString = function(i, u) {
    return mn(i, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ur.version = "18.3.1", Ur;
}
var Jn = {}, Ko;
function Vu() {
  if (Ko) return Jn;
  Ko = 1;
  var e = ht;
  function t(o) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, g = 1; g < arguments.length; g++) c += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + o + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(o, c) {
    if (c.length !== 0) if (512 < c.length) 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), o.enqueue(c);
    else {
      var g = r.length - n;
      g < c.length && (g === 0 ? o.enqueue(r) : (r.set(c.subarray(0, g), n), o.enqueue(r), c = c.subarray(g)), r = new Uint8Array(512), n = 0), r.set(c, n), n += c.length;
    }
  }
  function s(o, c) {
    return a(o, c), !0;
  }
  function d(o) {
    r && 0 < n && (o.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var f = new TextEncoder();
  function h(o) {
    return f.encode(o);
  }
  function m(o) {
    return f.encode(o);
  }
  function C(o, c) {
    typeof o.error == "function" ? o.error(c) : o.close();
  }
  var _ = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, U = {}, E = {};
  function S(o) {
    return _.call(E, o) ? !0 : _.call(U, o) ? !1 : O.test(o) ? E[o] = !0 : (U[o] = !0, !1);
  }
  function I(o, c, g, w, L, P, V) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = w, this.attributeNamespace = L, this.mustUseProperty = g, this.propertyName = o, this.type = c, this.sanitizeURL = P, this.removeEmptyString = V;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    F[o] = new I(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var c = o[0];
    F[c] = new I(c, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    F[o] = new I(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    F[o] = new I(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    F[o] = new I(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    F[o] = new I(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    F[o] = new I(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    F[o] = new I(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    F[o] = new I(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var $ = /[\-:]([a-z])/g;
  function X(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var c = o.replace(
      $,
      X
    );
    F[c] = new I(c, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var c = o.replace($, X);
    F[c] = new I(c, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var c = o.replace($, X);
    F[c] = new I(c, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    F[o] = new I(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    F[o] = new I(o, 1, !1, o.toLowerCase(), null, !0, !0);
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
  Object.keys(G).forEach(function(o) {
    T.forEach(function(c) {
      c = c + o.charAt(0).toUpperCase() + o.substring(1), G[c] = G[o];
    });
  });
  var oe = /["'&<>]/;
  function ce(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var c = oe.exec(o);
    if (c) {
      var g = "", w, L = 0;
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
        L !== w && (g += o.substring(L, w)), L = w + 1, g += c;
      }
      o = L !== w ? g + o.substring(L, w) : g;
    }
    return o;
  }
  var Se = /([A-Z])/g, Ie = /^ms-/, $e = Array.isArray, De = m("<script>"), fe = m("<\/script>"), ue = m('<script src="'), Ce = m('<script type="module" src="'), ge = m('" async=""><\/script>'), He = /(<\/|<)(s)(cript)/gi;
  function Ae(o, c, g, w) {
    return "" + c + (g === "s" ? "\\u0073" : "\\u0053") + w;
  }
  function _e(o, c, g, w, L) {
    o = o === void 0 ? "" : o, c = c === void 0 ? De : m('<script nonce="' + ce(c) + '">');
    var P = [];
    if (g !== void 0 && P.push(c, h(("" + g).replace(He, Ae)), fe), w !== void 0) for (g = 0; g < w.length; g++) P.push(ue, h(ce(w[g])), ge);
    if (L !== void 0) for (w = 0; w < L.length; w++) P.push(Ce, h(ce(L[w])), ge);
    return { bootstrapChunks: P, startInlineScript: c, placeholderPrefix: m(o + "P:"), segmentPrefix: m(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Fe(o, c) {
    return { insertionMode: o, selectedValue: c };
  }
  function We(o) {
    return Fe(o === "http://www.w3.org/2000/svg" ? 2 : o === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Ve(o, c, g) {
    switch (c) {
      case "select":
        return Fe(1, g.value != null ? g.value : g.defaultValue);
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
  var B = m("<!-- -->");
  function R(o, c, g, w) {
    return c === "" ? w : (w && o.push(B), o.push(h(ce(c))), !0);
  }
  var z = /* @__PURE__ */ new Map(), q = m(' style="'), v = m(":"), Y = m(";");
  function j(o, c, g) {
    if (typeof g != "object") throw Error(t(62));
    c = !0;
    for (var w in g) if (_.call(g, w)) {
      var L = g[w];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (w.indexOf("--") === 0) {
          var P = h(ce(w));
          L = h(ce(("" + L).trim()));
        } else {
          P = w;
          var V = z.get(P);
          V !== void 0 || (V = m(ce(P.replace(Se, "-$1").toLowerCase().replace(Ie, "-ms-"))), z.set(P, V)), P = V, L = typeof L == "number" ? L === 0 || _.call(G, w) ? h("" + L) : h(L + "px") : h(ce(("" + L).trim()));
        }
        c ? (c = !1, o.push(q, P, v, L)) : o.push(Y, P, v, L);
      }
    }
    c || o.push(ee);
  }
  var ie = m(" "), re = m('="'), ee = m('"'), K = m('=""');
  function se(o, c, g, w) {
    switch (g) {
      case "style":
        j(o, c, w);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (c = F.hasOwnProperty(g) ? F[g] : null, c !== null) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (g = h(c.attributeName), c.type) {
          case 3:
            w && o.push(ie, g, K);
            break;
          case 4:
            w === !0 ? o.push(ie, g, K) : w !== !1 && o.push(ie, g, re, h(ce(w)), ee);
            break;
          case 5:
            isNaN(w) || o.push(ie, g, re, h(ce(w)), ee);
            break;
          case 6:
            !isNaN(w) && 1 <= w && o.push(ie, g, re, h(ce(w)), ee);
            break;
          default:
            c.sanitizeURL && (w = "" + w), o.push(ie, g, re, h(ce(w)), ee);
        }
      } else if (S(g)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = g.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        o.push(ie, h(g), re, h(ce(w)), ee);
      }
    }
  }
  var he = m(">"), ne = m("/>");
  function de(o, c, g) {
    if (c != null) {
      if (g != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && o.push(h("" + c));
    }
  }
  function ae(o) {
    var c = "";
    return e.Children.forEach(o, function(g) {
      g != null && (c += g);
    }), c;
  }
  var ye = m(' selected=""');
  function Ue(o, c, g, w) {
    o.push(we(g));
    var L = g = null, P;
    for (P in c) if (_.call(c, P)) {
      var V = c[P];
      if (V != null) switch (P) {
        case "children":
          g = V;
          break;
        case "dangerouslySetInnerHTML":
          L = V;
          break;
        default:
          se(o, w, P, V);
      }
    }
    return o.push(he), de(o, L, g), typeof g == "string" ? (o.push(h(ce(g))), null) : g;
  }
  var me = m(`
`), nt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Xe = /* @__PURE__ */ new Map();
  function we(o) {
    var c = Xe.get(o);
    if (c === void 0) {
      if (!nt.test(o)) throw Error(t(65, o));
      c = m("<" + o), Xe.set(o, c);
    }
    return c;
  }
  var J = m("<!DOCTYPE html>");
  function pe(o, c, g, w, L) {
    switch (c) {
      case "select":
        o.push(we("select"));
        var P = null, V = null;
        for (Oe in g) if (_.call(g, Oe)) {
          var Q = g[Oe];
          if (Q != null) switch (Oe) {
            case "children":
              P = Q;
              break;
            case "dangerouslySetInnerHTML":
              V = Q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              se(o, w, Oe, Q);
          }
        }
        return o.push(he), de(o, V, P), P;
      case "option":
        V = L.selectedValue, o.push(we("option"));
        var ve = Q = null, Le = null, Oe = null;
        for (P in g) if (_.call(g, P)) {
          var rt = g[P];
          if (rt != null) switch (P) {
            case "children":
              Q = rt;
              break;
            case "selected":
              Le = rt;
              break;
            case "dangerouslySetInnerHTML":
              Oe = rt;
              break;
            case "value":
              ve = rt;
            default:
              se(o, w, P, rt);
          }
        }
        if (V != null) if (g = ve !== null ? "" + ve : ae(Q), $e(V)) {
          for (w = 0; w < V.length; w++)
            if ("" + V[w] === g) {
              o.push(ye);
              break;
            }
        } else "" + V === g && o.push(ye);
        else Le && o.push(ye);
        return o.push(he), de(o, Oe, Q), Q;
      case "textarea":
        o.push(we("textarea")), Oe = V = P = null;
        for (Q in g) if (_.call(g, Q) && (ve = g[Q], ve != null)) switch (Q) {
          case "children":
            Oe = ve;
            break;
          case "value":
            P = ve;
            break;
          case "defaultValue":
            V = ve;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            se(o, w, Q, ve);
        }
        if (P === null && V !== null && (P = V), o.push(he), Oe != null) {
          if (P != null) throw Error(t(92));
          if ($e(Oe) && 1 < Oe.length) throw Error(t(93));
          P = "" + Oe;
        }
        return typeof P == "string" && P[0] === `
` && o.push(me), P !== null && o.push(h(ce("" + P))), null;
      case "input":
        o.push(we("input")), ve = Oe = Q = P = null;
        for (V in g) if (_.call(g, V) && (Le = g[V], Le != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ve = Le;
            break;
          case "defaultValue":
            Q = Le;
            break;
          case "checked":
            Oe = Le;
            break;
          case "value":
            P = Le;
            break;
          default:
            se(o, w, V, Le);
        }
        return Oe !== null ? se(
          o,
          w,
          "checked",
          Oe
        ) : ve !== null && se(o, w, "checked", ve), P !== null ? se(o, w, "value", P) : Q !== null && se(o, w, "value", Q), o.push(ne), null;
      case "menuitem":
        o.push(we("menuitem"));
        for (var Lt in g) if (_.call(g, Lt) && (P = g[Lt], P != null)) switch (Lt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            se(o, w, Lt, P);
        }
        return o.push(he), null;
      case "title":
        o.push(we("title")), P = null;
        for (rt in g) if (_.call(g, rt) && (V = g[rt], V != null)) switch (rt) {
          case "children":
            P = V;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            se(o, w, rt, V);
        }
        return o.push(he), P;
      case "listing":
      case "pre":
        o.push(we(c)), V = P = null;
        for (ve in g) if (_.call(g, ve) && (Q = g[ve], Q != null)) switch (ve) {
          case "children":
            P = Q;
            break;
          case "dangerouslySetInnerHTML":
            V = Q;
            break;
          default:
            se(o, w, ve, Q);
        }
        if (o.push(he), V != null) {
          if (P != null) throw Error(t(60));
          if (typeof V != "object" || !("__html" in V)) throw Error(t(61));
          g = V.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? o.push(me, h(g)) : o.push(h("" + g)));
        }
        return typeof P == "string" && P[0] === `
` && o.push(me), P;
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
        o.push(we(c));
        for (var nr in g) if (_.call(g, nr) && (P = g[nr], P != null)) switch (nr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            se(o, w, nr, P);
        }
        return o.push(ne), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ue(o, g, c, w);
      case "html":
        return L.insertionMode === 0 && o.push(J), Ue(o, g, c, w);
      default:
        if (c.indexOf("-") === -1 && typeof g.is != "string") return Ue(o, g, c, w);
        o.push(we(c)), V = P = null;
        for (Le in g) if (_.call(g, Le) && (Q = g[Le], Q != null)) switch (Le) {
          case "children":
            P = Q;
            break;
          case "dangerouslySetInnerHTML":
            V = Q;
            break;
          case "style":
            j(o, w, Q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            S(Le) && typeof Q != "function" && typeof Q != "symbol" && o.push(ie, h(Le), re, h(ce(Q)), ee);
        }
        return o.push(he), de(o, V, P), P;
    }
  }
  var at = m("</"), et = m(">"), Me = m('<template id="'), ur = m('"></template>'), dr = m("<!--$-->"), mr = m('<!--$?--><template id="'), jt = m('"></template>'), Mt = m("<!--$!-->"), Ot = m("<!--/$-->"), Nt = m("<template"), lt = m('"'), bt = m(' data-dgst="');
  m(' data-msg="'), m(' data-stck="');
  var Zt = m("></template>");
  function mt(o, c, g) {
    if (a(o, mr), g === null) throw Error(t(395));
    return a(o, g), s(o, jt);
  }
  var gr = m('<div hidden id="'), ut = m('">'), Be = m("</div>"), Xt = m('<svg aria-hidden="true" style="display:none" id="'), ke = m('">'), pt = m("</svg>"), _t = m('<math aria-hidden="true" style="display:none" id="'), Ft = m('">'), vt = m("</math>"), pr = m('<table hidden id="'), Kt = m('">'), yr = m("</table>"), Et = m('<table hidden><tbody id="'), $t = m('">'), Cr = m("</tbody></table>"), it = m('<table hidden><tr id="'), Rt = m('">'), Ut = m("</tr></table>"), fr = m('<table hidden><colgroup id="'), zt = m('">'), xt = m("</colgroup></table>");
  function ct(o, c, g, w) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return a(o, gr), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, ut);
      case 2:
        return a(o, Xt), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, ke);
      case 3:
        return a(o, _t), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, Ft);
      case 4:
        return a(o, pr), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, Kt);
      case 5:
        return a(o, Et), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, $t);
      case 6:
        return a(o, it), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, Rt);
      case 7:
        return a(
          o,
          fr
        ), a(o, c.segmentPrefix), a(o, h(w.toString(16))), s(o, zt);
      default:
        throw Error(t(397));
    }
  }
  function It(o, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(o, Be);
      case 2:
        return s(o, pt);
      case 3:
        return s(o, vt);
      case 4:
        return s(o, yr);
      case 5:
        return s(o, Cr);
      case 6:
        return s(o, Ut);
      case 7:
        return s(o, xt);
      default:
        throw Error(t(397));
    }
  }
  var br = m('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Jt = m('$RS("'), Bt = m('","'), Qt = m('")<\/script>'), b = m('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), x = m('$RC("'), N = m('","'), Z = m('")<\/script>'), le = m('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Te = m('$RX("'), je = m('"'), qe = m(")<\/script>"), ot = m(","), Pe = /[<\u2028\u2029]/g;
  function kt(o) {
    return JSON.stringify(o).replace(Pe, function(c) {
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
  var er = Object.assign, dn = Symbol.for("react.element"), Dr = Symbol.for("react.portal"), Pr = Symbol.for("react.fragment"), pn = Symbol.for("react.strict_mode"), fn = Symbol.for("react.profiler"), hn = Symbol.for("react.provider"), Kr = Symbol.for("react.context"), Pn = Symbol.for("react.forward_ref"), Ln = Symbol.for("react.suspense"), mn = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), y = Symbol.for("react.scope"), k = Symbol.for("react.debug_trace_mode"), M = Symbol.for("react.legacy_hidden"), D = Symbol.for("react.default_value"), W = Symbol.iterator;
  function te(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case Pr:
        return "Fragment";
      case Dr:
        return "Portal";
      case fn:
        return "Profiler";
      case pn:
        return "StrictMode";
      case Ln:
        return "Suspense";
      case mn:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case Kr:
        return (o.displayName || "Context") + ".Consumer";
      case hn:
        return (o._context.displayName || "Context") + ".Provider";
      case Pn:
        var c = o.render;
        return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case i:
        return c = o.displayName || null, c !== null ? c : te(o.type) || "Memo";
      case u:
        c = o._payload, o = o._init;
        try {
          return te(o(c));
        } catch {
        }
    }
    return null;
  }
  var be = {};
  function xe(o, c) {
    if (o = o.contextTypes, !o) return be;
    var g = {}, w;
    for (w in o) g[w] = c[w];
    return g;
  }
  var Ee = null;
  function st(o, c) {
    if (o !== c) {
      o.context._currentValue = o.parentValue, o = o.parent;
      var g = c.parent;
      if (o === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        st(o, g);
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
  function Dt(o, c) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === c.depth ? st(o, c) : Dt(o, c);
  }
  function Lr(o, c) {
    var g = c.parent;
    if (g === null) throw Error(t(402));
    o.depth === g.depth ? st(o, g) : Lr(o, g), c.context._currentValue = c.value;
  }
  function vr(o) {
    var c = Ee;
    c !== o && (c === null ? rr(o) : o === null ? tr(c) : c.depth === o.depth ? st(c, o) : c.depth > o.depth ? Dt(c, o) : Lr(c, o), Ee = o);
  }
  var gn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, c) {
    o = o._reactInternals, o.queue !== null && o.queue.push(c);
  }, enqueueReplaceState: function(o, c) {
    o = o._reactInternals, o.replace = !0, o.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Mr(o, c, g, w) {
    var L = o.state !== void 0 ? o.state : null;
    o.updater = gn, o.props = g, o.state = L;
    var P = { queue: [], replace: !1 };
    o._reactInternals = P;
    var V = c.contextType;
    if (o.context = typeof V == "object" && V !== null ? V._currentValue : w, V = c.getDerivedStateFromProps, typeof V == "function" && (V = V(g, L), L = V == null ? L : er({}, L, V), o.state = L), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (c = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), c !== o.state && gn.enqueueReplaceState(o, o.state, null), P.queue !== null && 0 < P.queue.length) if (c = P.queue, V = P.replace, P.queue = null, P.replace = !1, V && c.length === 1) o.state = c[0];
    else {
      for (P = V ? c[0] : o.state, L = !0, V = V ? 1 : 0; V < c.length; V++) {
        var Q = c[V];
        Q = typeof Q == "function" ? Q.call(o, P, g, w) : Q, Q != null && (L ? (L = !1, P = er({}, P, Q)) : er(P, Q));
      }
      o.state = P;
    }
    else P.queue = null;
  }
  var Mn = { id: 1, overflow: "" };
  function Ar(o, c, g) {
    var w = o.id;
    o = o.overflow;
    var L = 32 - Fn(w) - 1;
    w &= ~(1 << L), g += 1;
    var P = 32 - Fn(c) + L;
    if (30 < P) {
      var V = L - L % 5;
      return P = (w & (1 << V) - 1).toString(32), w >>= V, L -= V, { id: 1 << 32 - Fn(c) + L | g << L | w, overflow: P + o };
    }
    return { id: 1 << P | g << L | w, overflow: o };
  }
  var Fn = Math.clz32 ? Math.clz32 : Wc, qc = Math.log, Hc = Math.LN2;
  function Wc(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (qc(o) / Hc | 0) | 0;
  }
  function Vc(o, c) {
    return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
  }
  var Gc = typeof Object.is == "function" ? Object.is : Vc, xr = null, Ra = null, $n = null, tt = null, yn = !1, Un = !1, bn = 0, _r = null, zn = 0;
  function Fr() {
    if (xr === null) throw Error(t(321));
    return xr;
  }
  function vo() {
    if (0 < zn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ia() {
    return tt === null ? $n === null ? (yn = !1, $n = tt = vo()) : (yn = !0, tt = $n) : tt.next === null ? (yn = !1, tt = tt.next = vo()) : (yn = !0, tt = tt.next), tt;
  }
  function Da() {
    Ra = xr = null, Un = !1, $n = null, zn = 0, tt = _r = null;
  }
  function xo(o, c) {
    return typeof c == "function" ? c(o) : c;
  }
  function wo(o, c, g) {
    if (xr = Fr(), tt = Ia(), yn) {
      var w = tt.queue;
      if (c = w.dispatch, _r !== null && (g = _r.get(w), g !== void 0)) {
        _r.delete(w), w = tt.memoizedState;
        do
          w = o(w, g.action), g = g.next;
        while (g !== null);
        return tt.memoizedState = w, [w, c];
      }
      return [tt.memoizedState, c];
    }
    return o = o === xo ? typeof c == "function" ? c() : c : g !== void 0 ? g(c) : c, tt.memoizedState = o, o = tt.queue = { last: null, dispatch: null }, o = o.dispatch = Yc.bind(null, xr, o), [tt.memoizedState, o];
  }
  function So(o, c) {
    if (xr = Fr(), tt = Ia(), c = c === void 0 ? null : c, tt !== null) {
      var g = tt.memoizedState;
      if (g !== null && c !== null) {
        var w = g[1];
        e: if (w === null) w = !1;
        else {
          for (var L = 0; L < w.length && L < c.length; L++) if (!Gc(c[L], w[L])) {
            w = !1;
            break e;
          }
          w = !0;
        }
        if (w) return g[0];
      }
    }
    return o = o(), tt.memoizedState = [o, c], o;
  }
  function Yc(o, c, g) {
    if (25 <= zn) throw Error(t(301));
    if (o === xr) if (Un = !0, o = { action: g, next: null }, _r === null && (_r = /* @__PURE__ */ new Map()), g = _r.get(c), g === void 0) _r.set(c, o);
    else {
      for (c = g; c.next !== null; ) c = c.next;
      c.next = o;
    }
  }
  function Zc() {
    throw Error(t(394));
  }
  function Bn() {
  }
  var ko = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return Fr(), o._currentValue;
  }, useMemo: So, useReducer: wo, useRef: function(o) {
    xr = Fr(), tt = Ia();
    var c = tt.memoizedState;
    return c === null ? (o = { current: o }, tt.memoizedState = o) : c;
  }, useState: function(o) {
    return wo(xo, o);
  }, useInsertionEffect: Bn, useLayoutEffect: function() {
  }, useCallback: function(o, c) {
    return So(function() {
      return o;
    }, c);
  }, useImperativeHandle: Bn, useEffect: Bn, useDebugValue: Bn, useDeferredValue: function(o) {
    return Fr(), o;
  }, useTransition: function() {
    return Fr(), [!1, Zc];
  }, useId: function() {
    var o = Ra.treeContext, c = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Fn(o) - 1)).toString(32) + c;
    var g = qn;
    if (g === null) throw Error(t(404));
    return c = bn++, o = ":" + g.idPrefix + "R" + o, 0 < c && (o += "H" + c.toString(32)), o + ":";
  }, useMutableSource: function(o, c) {
    return Fr(), c(o._source);
  }, useSyncExternalStore: function(o, c, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, qn = null, Pa = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Xc(o) {
    return console.error(o), null;
  }
  function vn() {
  }
  function Kc(o, c, g, w, L, P, V, Q, ve) {
    var Le = [], Oe = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Oe, pingedTasks: Le, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? Xc : L, onAllReady: P === void 0 ? vn : P, onShellReady: V === void 0 ? vn : V, onShellError: Q === void 0 ? vn : Q, onFatalError: ve === void 0 ? vn : ve }, g = Hn(c, 0, null, g, !1, !1), g.parentFlushed = !0, o = La(c, o, null, g, Oe, be, null, Mn), Le.push(o), c;
  }
  function La(o, c, g, w, L, P, V, Q) {
    o.allPendingTasks++, g === null ? o.pendingRootTasks++ : g.pendingTasks++;
    var ve = { node: c, ping: function() {
      var Le = o.pingedTasks;
      Le.push(ve), Le.length === 1 && Oo(o);
    }, blockedBoundary: g, blockedSegment: w, abortSet: L, legacyContext: P, context: V, treeContext: Q };
    return L.add(ve), ve;
  }
  function Hn(o, c, g, w, L, P) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: g, lastPushedText: L, textEmbedded: P };
  }
  function xn(o, c) {
    if (o = o.onError(c), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function Wn(o, c) {
    var g = o.onShellError;
    g(c), g = o.onFatalError, g(c), o.destination !== null ? (o.status = 2, C(o.destination, c)) : (o.status = 1, o.fatalError = c);
  }
  function To(o, c, g, w, L) {
    for (xr = {}, Ra = c, bn = 0, o = g(w, L); Un; ) Un = !1, bn = 0, zn += 1, tt = null, o = g(w, L);
    return Da(), o;
  }
  function Co(o, c, g, w) {
    var L = g.render(), P = w.childContextTypes;
    if (P != null) {
      var V = c.legacyContext;
      if (typeof g.getChildContext != "function") w = V;
      else {
        g = g.getChildContext();
        for (var Q in g) if (!(Q in P)) throw Error(t(108, te(w) || "Unknown", Q));
        w = er({}, V, g);
      }
      c.legacyContext = w, Pt(o, c, L), c.legacyContext = V;
    } else Pt(o, c, L);
  }
  function Ao(o, c) {
    if (o && o.defaultProps) {
      c = er({}, c), o = o.defaultProps;
      for (var g in o) c[g] === void 0 && (c[g] = o[g]);
      return c;
    }
    return c;
  }
  function Ma(o, c, g, w, L) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      L = xe(g, c.legacyContext);
      var P = g.contextType;
      P = new g(w, typeof P == "object" && P !== null ? P._currentValue : L), Mr(P, g, w, L), Co(o, c, P, g);
    } else {
      P = xe(g, c.legacyContext), L = To(o, c, g, w, P);
      var V = bn !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) Mr(L, g, w, P), Co(o, c, L, g);
      else if (V) {
        w = c.treeContext, c.treeContext = Ar(w, 1, 0);
        try {
          Pt(o, c, L);
        } finally {
          c.treeContext = w;
        }
      } else Pt(o, c, L);
    }
    else if (typeof g == "string") {
      switch (L = c.blockedSegment, P = pe(L.chunks, g, w, o.responseState, L.formatContext), L.lastPushedText = !1, V = L.formatContext, L.formatContext = Ve(V, g, w), Fa(o, c, P), L.formatContext = V, g) {
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
          L.chunks.push(at, h(g), et);
      }
      L.lastPushedText = !1;
    } else {
      switch (g) {
        case M:
        case k:
        case pn:
        case fn:
        case Pr:
          Pt(o, c, w.children);
          return;
        case mn:
          Pt(o, c, w.children);
          return;
        case y:
          throw Error(t(343));
        case Ln:
          e: {
            g = c.blockedBoundary, L = c.blockedSegment, P = w.fallback, w = w.children, V = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: V, errorDigest: null }, ve = Hn(o, L.chunks.length, Q, L.formatContext, !1, !1);
            L.children.push(ve), L.lastPushedText = !1;
            var Le = Hn(o, 0, null, L.formatContext, !1, !1);
            Le.parentFlushed = !0, c.blockedBoundary = Q, c.blockedSegment = Le;
            try {
              if (Fa(
                o,
                c,
                w
              ), Le.lastPushedText && Le.textEmbedded && Le.chunks.push(B), Le.status = 1, Vn(Q, Le), Q.pendingTasks === 0) break e;
            } catch (Oe) {
              Le.status = 4, Q.forceClientRender = !0, Q.errorDigest = xn(o, Oe);
            } finally {
              c.blockedBoundary = g, c.blockedSegment = L;
            }
            c = La(o, P, g, ve, V, c.legacyContext, c.context, c.treeContext), o.pingedTasks.push(c);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case Pn:
          if (w = To(o, c, g.render, w, L), bn !== 0) {
            g = c.treeContext, c.treeContext = Ar(g, 1, 0);
            try {
              Pt(o, c, w);
            } finally {
              c.treeContext = g;
            }
          } else Pt(o, c, w);
          return;
        case i:
          g = g.type, w = Ao(g, w), Ma(o, c, g, w, L);
          return;
        case hn:
          if (L = w.children, g = g._context, w = w.value, P = g._currentValue, g._currentValue = w, V = Ee, Ee = w = { parent: V, depth: V === null ? 0 : V.depth + 1, context: g, parentValue: P, value: w }, c.context = w, Pt(o, c, L), o = Ee, o === null) throw Error(t(403));
          w = o.parentValue, o.context._currentValue = w === D ? o.context._defaultValue : w, o = Ee = o.parent, c.context = o;
          return;
        case Kr:
          w = w.children, w = w(g._currentValue), Pt(o, c, w);
          return;
        case u:
          L = g._init, g = L(g._payload), w = Ao(g, w), Ma(o, c, g, w, void 0);
          return;
      }
      throw Error(t(
        130,
        g == null ? g : typeof g,
        ""
      ));
    }
  }
  function Pt(o, c, g) {
    if (c.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case dn:
          Ma(o, c, g.type, g.props, g.ref);
          return;
        case Dr:
          throw Error(t(257));
        case u:
          var w = g._init;
          g = w(g._payload), Pt(o, c, g);
          return;
      }
      if ($e(g)) {
        _o(o, c, g);
        return;
      }
      if (g === null || typeof g != "object" ? w = null : (w = W && g[W] || g["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(g))) {
        if (g = w.next(), !g.done) {
          var L = [];
          do
            L.push(g.value), g = w.next();
          while (!g.done);
          _o(o, c, L);
        }
        return;
      }
      throw o = Object.prototype.toString.call(g), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : o));
    }
    typeof g == "string" ? (w = c.blockedSegment, w.lastPushedText = R(c.blockedSegment.chunks, g, o.responseState, w.lastPushedText)) : typeof g == "number" && (w = c.blockedSegment, w.lastPushedText = R(c.blockedSegment.chunks, "" + g, o.responseState, w.lastPushedText));
  }
  function _o(o, c, g) {
    for (var w = g.length, L = 0; L < w; L++) {
      var P = c.treeContext;
      c.treeContext = Ar(P, w, L);
      try {
        Fa(o, c, g[L]);
      } finally {
        c.treeContext = P;
      }
    }
  }
  function Fa(o, c, g) {
    var w = c.blockedSegment.formatContext, L = c.legacyContext, P = c.context;
    try {
      return Pt(o, c, g);
    } catch (ve) {
      if (Da(), typeof ve == "object" && ve !== null && typeof ve.then == "function") {
        g = ve;
        var V = c.blockedSegment, Q = Hn(o, V.chunks.length, null, V.formatContext, V.lastPushedText, !0);
        V.children.push(Q), V.lastPushedText = !1, o = La(o, c.node, c.blockedBoundary, Q, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, g.then(o, o), c.blockedSegment.formatContext = w, c.legacyContext = L, c.context = P, vr(P);
      } else throw c.blockedSegment.formatContext = w, c.legacyContext = L, c.context = P, vr(P), ve;
    }
  }
  function Jc(o) {
    var c = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, jo(this, c, o);
  }
  function Eo(o, c, g) {
    var w = o.blockedBoundary;
    o.blockedSegment.status = 3, w === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, o = g === void 0 ? Error(t(432)) : g, w.errorDigest = c.onError(o), w.parentFlushed && c.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(L) {
      return Eo(L, c, g);
    }), w.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (w = c.onAllReady, w()));
  }
  function Vn(o, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var g = c.children[0];
      g.id = c.id, g.parentFlushed = !0, g.status === 1 && Vn(o, g);
    } else o.completedSegments.push(c);
  }
  function jo(o, c, g) {
    if (c === null) {
      if (g.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = g;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = vn, c = o.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && Vn(c, g), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(Jc, o), c.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (Vn(c, g), c.completedSegments.length === 1 && c.parentFlushed && o.partialBoundaries.push(c)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function Oo(o) {
    if (o.status !== 2) {
      var c = Ee, g = Pa.current;
      Pa.current = ko;
      var w = qn;
      qn = o.responseState;
      try {
        var L = o.pingedTasks, P;
        for (P = 0; P < L.length; P++) {
          var V = L[P], Q = o, ve = V.blockedSegment;
          if (ve.status === 0) {
            vr(V.context);
            try {
              Pt(Q, V, V.node), ve.lastPushedText && ve.textEmbedded && ve.chunks.push(B), V.abortSet.delete(V), ve.status = 1, jo(Q, V.blockedBoundary, ve);
            } catch (ar) {
              if (Da(), typeof ar == "object" && ar !== null && typeof ar.then == "function") {
                var Le = V.ping;
                ar.then(Le, Le);
              } else {
                V.abortSet.delete(V), ve.status = 4;
                var Oe = V.blockedBoundary, rt = ar, Lt = xn(Q, rt);
                if (Oe === null ? Wn(Q, rt) : (Oe.pendingTasks--, Oe.forceClientRender || (Oe.forceClientRender = !0, Oe.errorDigest = Lt, Oe.parentFlushed && Q.clientRenderedBoundaries.push(Oe))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var nr = Q.onAllReady;
                  nr();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, P), o.destination !== null && $a(o, o.destination);
      } catch (ar) {
        xn(o, ar), Wn(o, ar);
      } finally {
        qn = w, Pa.current = g, g === ko && vr(c);
      }
    }
  }
  function Gn(o, c, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var w = g.id = o.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, o = o.responseState, a(c, Me), a(c, o.placeholderPrefix), o = h(w.toString(16)), a(c, o), s(c, ur);
      case 1:
        g.status = 2;
        var L = !0;
        w = g.chunks;
        var P = 0;
        g = g.children;
        for (var V = 0; V < g.length; V++) {
          for (L = g[V]; P < L.index; P++) a(c, w[P]);
          L = Yn(o, c, L);
        }
        for (; P < w.length - 1; P++) a(c, w[P]);
        return P < w.length && (L = s(c, w[P])), L;
      default:
        throw Error(t(390));
    }
  }
  function Yn(o, c, g) {
    var w = g.boundary;
    if (w === null) return Gn(o, c, g);
    if (w.parentFlushed = !0, w.forceClientRender) w = w.errorDigest, s(c, Mt), a(c, Nt), w && (a(c, bt), a(c, h(ce(w))), a(c, lt)), s(c, Zt), Gn(o, c, g);
    else if (0 < w.pendingTasks) {
      w.rootSegmentID = o.nextSegmentId++, 0 < w.completedSegments.length && o.partialBoundaries.push(w);
      var L = o.responseState, P = L.nextSuspenseID++;
      L = m(L.boundaryPrefix + P.toString(16)), w = w.id = L, mt(c, o.responseState, w), Gn(o, c, g);
    } else if (w.byteSize > o.progressiveChunkSize) w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), mt(c, o.responseState, w.id), Gn(o, c, g);
    else {
      if (s(c, dr), g = w.completedSegments, g.length !== 1) throw Error(t(391));
      Yn(o, c, g[0]);
    }
    return s(c, Ot);
  }
  function No(o, c, g) {
    return ct(c, o.responseState, g.formatContext, g.id), Yn(o, c, g), It(c, g.formatContext);
  }
  function Ro(o, c, g) {
    for (var w = g.completedSegments, L = 0; L < w.length; L++) Io(o, c, g, w[L]);
    if (w.length = 0, o = o.responseState, w = g.id, g = g.rootSegmentID, a(c, o.startInlineScript), o.sentCompleteBoundaryFunction ? a(c, x) : (o.sentCompleteBoundaryFunction = !0, a(c, b)), w === null) throw Error(t(395));
    return g = h(g.toString(16)), a(c, w), a(c, N), a(c, o.segmentPrefix), a(c, g), s(c, Z);
  }
  function Io(o, c, g, w) {
    if (w.status === 2) return !0;
    var L = w.id;
    if (L === -1) {
      if ((w.id = g.rootSegmentID) === -1) throw Error(t(392));
      return No(o, c, w);
    }
    return No(o, c, w), o = o.responseState, a(c, o.startInlineScript), o.sentCompleteSegmentFunction ? a(c, Jt) : (o.sentCompleteSegmentFunction = !0, a(c, br)), a(c, o.segmentPrefix), L = h(L.toString(16)), a(c, L), a(c, Bt), a(c, o.placeholderPrefix), a(c, L), s(c, Qt);
  }
  function $a(o, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var g = o.completedRootSegment;
      if (g !== null && o.pendingRootTasks === 0) {
        Yn(o, c, g), o.completedRootSegment = null;
        var w = o.responseState.bootstrapChunks;
        for (g = 0; g < w.length - 1; g++) a(c, w[g]);
        g < w.length && s(c, w[g]);
      }
      var L = o.clientRenderedBoundaries, P;
      for (P = 0; P < L.length; P++) {
        var V = L[P];
        w = c;
        var Q = o.responseState, ve = V.id, Le = V.errorDigest, Oe = V.errorMessage, rt = V.errorComponentStack;
        if (a(w, Q.startInlineScript), Q.sentClientRenderFunction ? a(w, Te) : (Q.sentClientRenderFunction = !0, a(
          w,
          le
        )), ve === null) throw Error(t(395));
        a(w, ve), a(w, je), (Le || Oe || rt) && (a(w, ot), a(w, h(kt(Le || "")))), (Oe || rt) && (a(w, ot), a(w, h(kt(Oe || "")))), rt && (a(w, ot), a(w, h(kt(rt)))), s(w, qe);
      }
      L.splice(0, P);
      var Lt = o.completedBoundaries;
      for (P = 0; P < Lt.length; P++) Ro(o, c, Lt[P]);
      Lt.splice(0, P), d(c), r = new Uint8Array(512), n = 0;
      var nr = o.partialBoundaries;
      for (P = 0; P < nr.length; P++) {
        var ar = nr[P];
        e: {
          L = o, V = c;
          var Zn = ar.completedSegments;
          for (Q = 0; Q < Zn.length; Q++) if (!Io(
            L,
            V,
            ar,
            Zn[Q]
          )) {
            Q++, Zn.splice(0, Q);
            var Po = !1;
            break e;
          }
          Zn.splice(0, Q), Po = !0;
        }
        if (!Po) {
          o.destination = null, P++, nr.splice(0, P);
          return;
        }
      }
      nr.splice(0, P);
      var Ua = o.completedBoundaries;
      for (P = 0; P < Ua.length; P++) Ro(o, c, Ua[P]);
      Ua.splice(0, P);
    } finally {
      d(c), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && c.close();
    }
  }
  function Do(o, c) {
    try {
      var g = o.abortableTasks;
      g.forEach(function(w) {
        return Eo(w, o, c);
      }), g.clear(), o.destination !== null && $a(o, o.destination);
    } catch (w) {
      xn(o, w), Wn(o, w);
    }
  }
  return Jn.renderToReadableStream = function(o, c) {
    return new Promise(function(g, w) {
      var L, P, V = new Promise(function(Oe, rt) {
        P = Oe, L = rt;
      }), Q = Kc(o, _e(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), We(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, P, function() {
        var Oe = new ReadableStream({ type: "bytes", pull: function(rt) {
          if (Q.status === 1) Q.status = 2, C(rt, Q.fatalError);
          else if (Q.status !== 2 && Q.destination === null) {
            Q.destination = rt;
            try {
              $a(Q, rt);
            } catch (Lt) {
              xn(Q, Lt), Wn(Q, Lt);
            }
          }
        }, cancel: function() {
          Do(Q);
        } }, { highWaterMark: 0 });
        Oe.allReady = V, g(Oe);
      }, function(Oe) {
        V.catch(function() {
        }), w(Oe);
      }, L);
      if (c && c.signal) {
        var ve = c.signal, Le = function() {
          Do(Q, ve.reason), ve.removeEventListener("abort", Le);
        };
        ve.addEventListener("abort", Le);
      }
      Oo(Q);
    });
  }, Jn.version = "18.3.1", Jn;
}
var on, il;
on = Wu(), il = Vu();
on.version;
on.renderToString;
on.renderToStaticMarkup;
on.renderToNodeStream;
on.renderToStaticNodeStream;
il.renderToReadableStream;
const Gu = "staticMarkup";
function Yu() {
  const e = tu().indexOf(Gu) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Zr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Yu(), { onClick: a, ...s } = r.props;
  if (n)
    return ht.cloneElement(r, {
      ...s,
      onClick: (h) => (al(e), a ? a(h) : !0)
    });
  let d = "";
  ["input", "header", "header-input"].includes(t) && (d = `-${t}`);
  const f = {
    [`data-ga${d}`]: e.text,
    [`data-ga${d}-name`]: e.name,
    [`data-ga${d}-event`]: e.event,
    [`data-ga${d}-action`]: e.action,
    [`data-ga${d}-type`]: e.type,
    [`data-ga${d}-region`]: e.region,
    [`data-ga${d}-section`]: e.section,
    [`data-ga${d}-component`]: e.component
  };
  return ht.cloneElement(r, {
    ...s,
    onClick: a,
    ...f
  });
}, ol = ({ id: e, item: t, openCard: r, onClick: n, gaData: a }) => {
  var s, d, f, h, m, C;
  const _ = e === r, O = _ ? "open" : "close";
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      className: dt("accordion-item", "mt-3", {
        [`accordion-item-${t.color}`]: t.color,
        "accordion-header-icon": (s = t.content) == null ? void 0 : s.icon
      }),
      children: [
        /* @__PURE__ */ H.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ H.jsx("h4", { children: /* @__PURE__ */ H.jsx(
          Zr,
          {
            gaData: { ...a, action: O, text: t.content.header },
            children: /* @__PURE__ */ H.jsxs(
              "a",
              {
                "data-testid": "accordion-opener",
                className: dt({ collapsed: !_ }),
                "data-bs-toggle": "collapse",
                href: `#card-body-${e}`,
                role: "button",
                "aria-expanded": _,
                "aria-controls": `card-body-${e}`,
                onClick: (U) => n(U, e),
                children: [
                  (d = t.content) != null && d.icon ? /* @__PURE__ */ H.jsxs("span", { className: "accordion-icon", children: [
                    /* @__PURE__ */ H.jsx(
                      "i",
                      {
                        className: `${(f = t.content.icon) == null ? void 0 : f[0]} fa-${(h = t.content.icon) == null ? void 0 : h[1]} me-2`
                      }
                    ),
                    t.content.header
                  ] }) : (m = t.content) == null ? void 0 : m.header,
                  /* @__PURE__ */ H.jsx("i", { className: "fas fa-chevron-up" })
                ]
              }
            )
          }
        ) }) }),
        ((C = t.content) == null ? void 0 : C.body) && /* @__PURE__ */ H.jsx(
          "div",
          {
            id: `card-body-${e}`,
            className: dt("collapse", { show: _ }),
            children: /* @__PURE__ */ H.jsx(
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
ol.propTypes = {
  id: l.number,
  item: el,
  openCard: l.number,
  onClick: l.func,
  // eslint-disable-next-line react/forbid-prop-types
  gaData: l.object
};
const Zu = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, qi = ({ cards: e, openedCard: t }) => {
  const [r, n] = ft(t), a = (s, d) => {
    s.preventDefault(), n(r !== d ? d : null);
  };
  return /* @__PURE__ */ H.jsx("div", { className: "accordion", children: e == null ? void 0 : e.map(
    (s, d) => s.content.body && s.content.header && /* @__PURE__ */ H.jsx(
      ol,
      {
        id: d + 1,
        item: s,
        openCard: r,
        onClick: a,
        gaData: Zu
      },
      d + 1
    )
  ) });
};
qi.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: l.arrayOf(el).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: l.number
};
const Xu = {
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
  block: a,
  color: s,
  disabled: d,
  element: f,
  href: h,
  icon: m,
  innerRef: C,
  onClick: _,
  size: O,
  classes: U,
  target: E,
  ...S
}) => {
  const I = dt("btn", {
    [`btn-${s}`]: !0,
    "btn-md": O === "small",
    "btn-sm": O === "xsmall",
    "btn-block": a,
    disabled: d
  });
  let F = f;
  return h && f === "button" && (F = "a"), /* @__PURE__ */ H.jsx(
    Zr,
    {
      gaData: {
        ...Xu,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ H.jsxs(
        F,
        {
          type: F === "button" && _ ? "button" : void 0,
          ...S,
          className: dt(U) || I,
          href: h,
          ref: C,
          onClick: _,
          "aria-label": n,
          target: F === "a" ? E : null,
          children: [
            m && /* @__PURE__ */ H.jsx("i", { className: `${m == null ? void 0 : m[0]} fa-${m == null ? void 0 : m[1]} me-1` }),
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
  gaData: Bi,
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
var sl = { exports: {} }, Ke = {}, Jo;
function Ku() {
  if (Jo) return Ke;
  Jo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), U = Symbol.for("react.client.reference");
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var I = S.$$typeof;
      switch (I) {
        case e:
          switch (S = S.type, S) {
            case r:
            case a:
            case n:
            case h:
            case m:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case d:
                case f:
                case _:
                case C:
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
  return Ke.ContextConsumer = s, Ke.ContextProvider = d, Ke.Element = e, Ke.ForwardRef = f, Ke.Fragment = r, Ke.Lazy = _, Ke.Memo = C, Ke.Portal = t, Ke.Profiler = a, Ke.StrictMode = n, Ke.Suspense = h, Ke.SuspenseList = m, Ke.isContextConsumer = function(S) {
    return E(S) === s;
  }, Ke.isContextProvider = function(S) {
    return E(S) === d;
  }, Ke.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Ke.isForwardRef = function(S) {
    return E(S) === f;
  }, Ke.isFragment = function(S) {
    return E(S) === r;
  }, Ke.isLazy = function(S) {
    return E(S) === _;
  }, Ke.isMemo = function(S) {
    return E(S) === C;
  }, Ke.isPortal = function(S) {
    return E(S) === t;
  }, Ke.isProfiler = function(S) {
    return E(S) === a;
  }, Ke.isStrictMode = function(S) {
    return E(S) === n;
  }, Ke.isSuspense = function(S) {
    return E(S) === h;
  }, Ke.isSuspenseList = function(S) {
    return E(S) === m;
  }, Ke.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === a || S === n || S === h || S === m || S === O || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === C || S.$$typeof === d || S.$$typeof === s || S.$$typeof === f || S.$$typeof === U || S.getModuleId !== void 0);
  }, Ke.typeOf = E, Ke;
}
sl.exports = Ku();
var Hi = sl.exports;
function Ju(e) {
  function t(B, R, z, q, v) {
    for (var Y = 0, j = 0, ie = 0, re = 0, ee, K, se = 0, he = 0, ne, de = ne = ee = 0, ae = 0, ye = 0, Ue = 0, me = 0, nt = z.length, Xe = nt - 1, we, J = "", pe = "", at = "", et = "", Me; ae < nt; ) {
      if (K = z.charCodeAt(ae), ae === Xe && j + re + ie + Y !== 0 && (j !== 0 && (K = j === 47 ? 10 : 47), re = ie = Y = 0, nt++, Xe++), j + re + ie + Y === 0) {
        if (ae === Xe && (0 < ye && (J = J.replace(O, "")), 0 < J.trim().length)) {
          switch (K) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += z.charAt(ae);
          }
          K = 59;
        }
        switch (K) {
          case 123:
            for (J = J.trim(), ee = J.charCodeAt(0), ne = 1, me = ++ae; ae < nt; ) {
              switch (K = z.charCodeAt(ae)) {
                case 123:
                  ne++;
                  break;
                case 125:
                  ne--;
                  break;
                case 47:
                  switch (K = z.charCodeAt(ae + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (de = ae + 1; de < Xe; ++de)
                          switch (z.charCodeAt(de)) {
                            case 47:
                              if (K === 42 && z.charCodeAt(de - 1) === 42 && ae + 2 !== de) {
                                ae = de + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (K === 47) {
                                ae = de + 1;
                                break e;
                              }
                          }
                        ae = de;
                      }
                  }
                  break;
                case 91:
                  K++;
                case 40:
                  K++;
                case 34:
                case 39:
                  for (; ae++ < Xe && z.charCodeAt(ae) !== K; )
                    ;
              }
              if (ne === 0) break;
              ae++;
            }
            switch (ne = z.substring(me, ae), ee === 0 && (ee = (J = J.replace(_, "").trim()).charCodeAt(0)), ee) {
              case 64:
                switch (0 < ye && (J = J.replace(O, "")), K = J.charCodeAt(1), K) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ye = R;
                    break;
                  default:
                    ye = He;
                }
                if (ne = t(R, ye, ne, K, v + 1), me = ne.length, 0 < _e && (ye = r(He, J, Ue), Me = f(3, ne, ye, R, ue, fe, me, K, v, q), J = ye.join(""), Me !== void 0 && (me = (ne = Me.trim()).length) === 0 && (K = 0, ne = "")), 0 < me) switch (K) {
                  case 115:
                    J = J.replace(oe, d);
                  case 100:
                  case 109:
                  case 45:
                    ne = J + "{" + ne + "}";
                    break;
                  case 107:
                    J = J.replace($, "$1 $2"), ne = J + "{" + ne + "}", ne = ge === 1 || ge === 2 && s("@" + ne, 3) ? "@-webkit-" + ne + "@" + ne : "@" + ne;
                    break;
                  default:
                    ne = J + ne, q === 112 && (ne = (pe += ne, ""));
                }
                else ne = "";
                break;
              default:
                ne = t(R, r(R, J, Ue), ne, q, v + 1);
            }
            at += ne, ne = Ue = ye = de = ee = 0, J = "", K = z.charCodeAt(++ae);
            break;
          case 125:
          case 59:
            if (J = (0 < ye ? J.replace(O, "") : J).trim(), 1 < (me = J.length)) switch (de === 0 && (ee = J.charCodeAt(0), ee === 45 || 96 < ee && 123 > ee) && (me = (J = J.replace(" ", ":")).length), 0 < _e && (Me = f(1, J, R, B, ue, fe, pe.length, q, v, q)) !== void 0 && (me = (J = Me.trim()).length) === 0 && (J = "\0\0"), ee = J.charCodeAt(0), K = J.charCodeAt(1), ee) {
              case 0:
                break;
              case 64:
                if (K === 105 || K === 99) {
                  et += J + z.charAt(ae);
                  break;
                }
              default:
                J.charCodeAt(me - 1) !== 58 && (pe += a(J, ee, K, J.charCodeAt(2)));
            }
            Ue = ye = de = ee = 0, J = "", K = z.charCodeAt(++ae);
        }
      }
      switch (K) {
        case 13:
        case 10:
          j === 47 ? j = 0 : 1 + ee === 0 && q !== 107 && 0 < J.length && (ye = 1, J += "\0"), 0 < _e * We && f(0, J, R, B, ue, fe, pe.length, q, v, q), fe = 1, ue++;
          break;
        case 59:
        case 125:
          if (j + re + ie + Y === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, we = z.charAt(ae), K) {
            case 9:
            case 32:
              if (re + Y + j === 0) switch (se) {
                case 44:
                case 58:
                case 9:
                case 32:
                  we = "";
                  break;
                default:
                  K !== 32 && (we = " ");
              }
              break;
            case 0:
              we = "\\0";
              break;
            case 12:
              we = "\\f";
              break;
            case 11:
              we = "\\v";
              break;
            case 38:
              re + j + Y === 0 && (ye = Ue = 1, we = "\f" + we);
              break;
            case 108:
              if (re + j + Y + Ce === 0 && 0 < de) switch (ae - de) {
                case 2:
                  se === 112 && z.charCodeAt(ae - 3) === 58 && (Ce = se);
                case 8:
                  he === 111 && (Ce = he);
              }
              break;
            case 58:
              re + j + Y === 0 && (de = ae);
              break;
            case 44:
              j + ie + re + Y === 0 && (ye = 1, we += "\r");
              break;
            case 34:
            case 39:
              j === 0 && (re = re === K ? 0 : re === 0 ? K : re);
              break;
            case 91:
              re + j + ie === 0 && Y++;
              break;
            case 93:
              re + j + ie === 0 && Y--;
              break;
            case 41:
              re + j + Y === 0 && ie--;
              break;
            case 40:
              if (re + j + Y === 0) {
                if (ee === 0) switch (2 * se + 3 * he) {
                  case 533:
                    break;
                  default:
                    ee = 1;
                }
                ie++;
              }
              break;
            case 64:
              j + ie + re + Y + de + ne === 0 && (ne = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + Y + ie)) switch (j) {
                case 0:
                  switch (2 * K + 3 * z.charCodeAt(ae + 1)) {
                    case 235:
                      j = 47;
                      break;
                    case 220:
                      me = ae, j = 42;
                  }
                  break;
                case 42:
                  K === 47 && se === 42 && me + 2 !== ae && (z.charCodeAt(me + 2) === 33 && (pe += z.substring(me, ae + 1)), we = "", j = 0);
              }
          }
          j === 0 && (J += we);
      }
      he = se, se = K, ae++;
    }
    if (me = pe.length, 0 < me) {
      if (ye = R, 0 < _e && (Me = f(2, pe, ye, B, ue, fe, me, q, v, q), Me !== void 0 && (pe = Me).length === 0)) return et + pe + at;
      if (pe = ye.join(",") + "{" + pe + "}", ge * Ce !== 0) {
        switch (ge !== 2 || s(pe, 2) || (Ce = 0), Ce) {
          case 111:
            pe = pe.replace(G, ":-moz-$1") + pe;
            break;
          case 112:
            pe = pe.replace(X, "::-webkit-input-$1") + pe.replace(X, "::-moz-$1") + pe.replace(X, ":-ms-input-$1") + pe;
        }
        Ce = 0;
      }
    }
    return et + pe + at;
  }
  function r(B, R, z) {
    var q = R.trim().split(I);
    R = q;
    var v = q.length, Y = B.length;
    switch (Y) {
      case 0:
      case 1:
        var j = 0;
        for (B = Y === 0 ? "" : B[0] + " "; j < v; ++j)
          R[j] = n(B, R[j], z).trim();
        break;
      default:
        var ie = j = 0;
        for (R = []; j < v; ++j)
          for (var re = 0; re < Y; ++re)
            R[ie++] = n(B[re] + " ", q[j], z).trim();
    }
    return R;
  }
  function n(B, R, z) {
    var q = R.charCodeAt(0);
    switch (33 > q && (q = (R = R.trim()).charCodeAt(0)), q) {
      case 38:
        return R.replace(F, "$1" + B.trim());
      case 58:
        return B.trim() + R.replace(F, "$1" + B.trim());
      default:
        if (0 < 1 * z && 0 < R.indexOf("\f")) return R.replace(F, (B.charCodeAt(0) === 58 ? "" : "$1") + B.trim());
    }
    return B + R;
  }
  function a(B, R, z, q) {
    var v = B + ";", Y = 2 * R + 3 * z + 4 * q;
    if (Y === 944) {
      B = v.indexOf(":", 9) + 1;
      var j = v.substring(B, v.length - 1).trim();
      return j = v.substring(0, B).trim() + j + ";", ge === 1 || ge === 2 && s(j, 1) ? "-webkit-" + j + j : j;
    }
    if (ge === 0 || ge === 2 && !s(v, 1)) return v;
    switch (Y) {
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
        if (0 < v.indexOf("image-set(", 11)) return v.replace(De, "$1-webkit-$2") + v;
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
        return j = v.substring(v.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + j + "-webkit-" + v + "-ms-flex-pack" + j + v;
      case 1005:
        return E.test(v) ? v.replace(U, ":-webkit-") + v.replace(U, ":-moz-") + v : v;
      case 1e3:
        switch (j = v.substring(13).trim(), R = j.indexOf("-") + 1, j.charCodeAt(0) + j.charCodeAt(R)) {
          case 226:
            j = v.replace(T, "tb");
            break;
          case 232:
            j = v.replace(T, "tb-rl");
            break;
          case 220:
            j = v.replace(T, "lr");
            break;
          default:
            return v;
        }
        return "-webkit-" + v + "-ms-" + j + v;
      case 1017:
        if (v.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (R = (v = B).length - 10, j = (v.charCodeAt(R) === 33 ? v.substring(0, R) : v).substring(B.indexOf(":", 7) + 1).trim(), Y = j.charCodeAt(0) + (j.charCodeAt(7) | 0)) {
          case 203:
            if (111 > j.charCodeAt(8)) break;
          case 115:
            v = v.replace(j, "-webkit-" + j) + ";" + v;
            break;
          case 207:
          case 102:
            v = v.replace(j, "-webkit-" + (102 < Y ? "inline-" : "") + "box") + ";" + v.replace(j, "-webkit-" + j) + ";" + v.replace(j, "-ms-" + j + "box") + ";" + v;
        }
        return v + ";";
      case 938:
        if (v.charCodeAt(5) === 45) switch (v.charCodeAt(6)) {
          case 105:
            return j = v.replace("-items", ""), "-webkit-" + v + "-webkit-box-" + j + "-ms-flex-" + j + v;
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
        if ($e.test(B) === !0) return (j = B.substring(B.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(B.replace("stretch", "fill-available"), R, z, q).replace(":fill-available", ":stretch") : v.replace(j, "-webkit-" + j) + v.replace(j, "-moz-" + j.replace("fill-", "")) + v;
        break;
      case 962:
        if (v = "-webkit-" + v + (v.charCodeAt(5) === 102 ? "-ms-" + v : "") + v, z + q === 211 && v.charCodeAt(13) === 105 && 0 < v.indexOf("transform", 10)) return v.substring(0, v.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + v;
    }
    return v;
  }
  function s(B, R) {
    var z = B.indexOf(R === 1 ? ":" : "{"), q = B.substring(0, R !== 3 ? z : 10);
    return z = B.substring(z + 1, B.length - 1), Fe(R !== 2 ? q : q.replace(Ie, "$1"), z, R);
  }
  function d(B, R) {
    var z = a(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return z !== R + ";" ? z.replace(ce, " or ($1)").substring(4) : "(" + R + ")";
  }
  function f(B, R, z, q, v, Y, j, ie, re, ee) {
    for (var K = 0, se = R, he; K < _e; ++K)
      switch (he = Ae[K].call(C, B, se, z, q, v, Y, j, ie, re, ee)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = he;
      }
    if (se !== R) return se;
  }
  function h(B) {
    switch (B) {
      case void 0:
      case null:
        _e = Ae.length = 0;
        break;
      default:
        if (typeof B == "function") Ae[_e++] = B;
        else if (typeof B == "object") for (var R = 0, z = B.length; R < z; ++R)
          h(B[R]);
        else We = !!B | 0;
    }
    return h;
  }
  function m(B) {
    return B = B.prefix, B !== void 0 && (Fe = null, B ? typeof B != "function" ? ge = 1 : (ge = 2, Fe = B) : ge = 0), m;
  }
  function C(B, R) {
    var z = B;
    if (33 > z.charCodeAt(0) && (z = z.trim()), Ve = z, z = [Ve], 0 < _e) {
      var q = f(-1, R, z, z, ue, fe, 0, 0, 0, 0);
      q !== void 0 && typeof q == "string" && (R = q);
    }
    var v = t(He, z, R, 0, 0);
    return 0 < _e && (q = f(-2, v, z, z, ue, fe, v.length, 0, 0, 0), q !== void 0 && (v = q)), Ve = "", Ce = 0, fe = ue = 1, v;
  }
  var _ = /^\0+/g, O = /[\0\r\f]/g, U = /: */g, E = /zoo|gra/, S = /([,: ])(transform)/g, I = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, X = /::(place)/g, G = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, oe = /\(\s*(.*)\s*\)/g, ce = /([\s\S]*?);/g, Se = /-self|flex-/g, Ie = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $e = /stretch|:\s*\w+\-(?:conte|avail)/, De = /([^-])(image-set\()/, fe = 1, ue = 1, Ce = 0, ge = 1, He = [], Ae = [], _e = 0, Fe = null, We = 0, Ve = "";
  return C.use = h, C.set = m, e !== void 0 && m(e), C;
}
var Qu = {
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
function ed(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var td = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Qo = /* @__PURE__ */ ed(
  function(e) {
    return td.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ll = { exports: {} }, Ge = {}, es;
function rd() {
  if (es) return Ge;
  es = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, C = e ? Symbol.for("react.forward_ref") : 60112, _ = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, U = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function X(T) {
    if (typeof T == "object" && T !== null) {
      var oe = T.$$typeof;
      switch (oe) {
        case t:
          switch (T = T.type, T) {
            case h:
            case m:
            case n:
            case s:
            case a:
            case _:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case f:
                case C:
                case E:
                case U:
                case d:
                  return T;
                default:
                  return oe;
              }
          }
        case r:
          return oe;
      }
    }
  }
  function G(T) {
    return X(T) === m;
  }
  return Ge.AsyncMode = h, Ge.ConcurrentMode = m, Ge.ContextConsumer = f, Ge.ContextProvider = d, Ge.Element = t, Ge.ForwardRef = C, Ge.Fragment = n, Ge.Lazy = E, Ge.Memo = U, Ge.Portal = r, Ge.Profiler = s, Ge.StrictMode = a, Ge.Suspense = _, Ge.isAsyncMode = function(T) {
    return G(T) || X(T) === h;
  }, Ge.isConcurrentMode = G, Ge.isContextConsumer = function(T) {
    return X(T) === f;
  }, Ge.isContextProvider = function(T) {
    return X(T) === d;
  }, Ge.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, Ge.isForwardRef = function(T) {
    return X(T) === C;
  }, Ge.isFragment = function(T) {
    return X(T) === n;
  }, Ge.isLazy = function(T) {
    return X(T) === E;
  }, Ge.isMemo = function(T) {
    return X(T) === U;
  }, Ge.isPortal = function(T) {
    return X(T) === r;
  }, Ge.isProfiler = function(T) {
    return X(T) === s;
  }, Ge.isStrictMode = function(T) {
    return X(T) === a;
  }, Ge.isSuspense = function(T) {
    return X(T) === _;
  }, Ge.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === m || T === s || T === a || T === _ || T === O || typeof T == "object" && T !== null && (T.$$typeof === E || T.$$typeof === U || T.$$typeof === d || T.$$typeof === f || T.$$typeof === C || T.$$typeof === I || T.$$typeof === F || T.$$typeof === $ || T.$$typeof === S);
  }, Ge.typeOf = X, Ge;
}
ll.exports = rd();
var nd = ll.exports, Wi = nd, ad = {
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
}, id = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, od = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, cl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Vi = {};
Vi[Wi.ForwardRef] = od;
Vi[Wi.Memo] = cl;
function ts(e) {
  return Wi.isMemo(e) ? cl : Vi[e.$$typeof] || ad;
}
var sd = Object.defineProperty, ld = Object.getOwnPropertyNames, rs = Object.getOwnPropertySymbols, cd = Object.getOwnPropertyDescriptor, ud = Object.getPrototypeOf, ns = Object.prototype;
function ul(e, t, r) {
  if (typeof t != "string") {
    if (ns) {
      var n = ud(t);
      n && n !== ns && ul(e, n, r);
    }
    var a = ld(t);
    rs && (a = a.concat(rs(t)));
    for (var s = ts(e), d = ts(t), f = 0; f < a.length; ++f) {
      var h = a[f];
      if (!id[h] && !(r && r[h]) && !(d && d[h]) && !(s && s[h])) {
        var m = cd(t, h);
        try {
          sd(e, h, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var dd = ul;
const pd = /* @__PURE__ */ zi(dd);
var Ze = { env: { NODE_ENV: "production" } };
function Sr() {
  return (Sr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var as = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, bi = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Hi.typeOf(e);
}, ga = Object.freeze([]), Or = Object.freeze({});
function On(e) {
  return typeof e == "function";
}
function vi(e) {
  return Ze.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Gi(e) {
  return e && typeof e.styledComponentId == "string";
}
var en = typeof Ze < "u" && Ze.env !== void 0 && (Ze.env.REACT_APP_SC_ATTR || Ze.env.SC_ATTR) || "data-styled", Yi = typeof window < "u" && "HTMLElement" in window, fd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Ze < "u" && Ze.env !== void 0 && (Ze.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Ze.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Ze.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Ze.env.REACT_APP_SC_DISABLE_SPEEDY : Ze.env.SC_DISABLE_SPEEDY !== void 0 && Ze.env.SC_DISABLE_SPEEDY !== "" ? Ze.env.SC_DISABLE_SPEEDY !== "false" && Ze.env.SC_DISABLE_SPEEDY : Ze.env.NODE_ENV !== "production")), hd = Ze.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function md() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function sn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw Ze.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(md.apply(void 0, [hd[e]].concat(r)).trim());
}
var gd = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, d = s; r >= d; ) (d <<= 1) < 0 && sn(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(a), this.length = d;
      for (var f = s; f < d; f++) this.groupSizes[f] = 0;
    }
    for (var h = this.indexOfGroup(r + 1), m = 0, C = n.length; m < C; m++) this.tag.insertRule(h, n[m]) && (this.groupSizes[r]++, h++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var d = a; d < s; d++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), d = s + a, f = s; f < d; f++) n += this.tag.getRule(f) + `/*!sc*/
`;
    return n;
  }, e;
}(), ca = /* @__PURE__ */ new Map(), ya = /* @__PURE__ */ new Map(), _n = 1, Qn = function(e) {
  if (ca.has(e)) return ca.get(e);
  for (; ya.has(_n); ) _n++;
  var t = _n++;
  return Ze.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && sn(16, "" + t), ca.set(e, t), ya.set(t, e), t;
}, yd = function(e) {
  return ya.get(e);
}, bd = function(e, t) {
  t >= _n && (_n = t + 1), ca.set(e, t), ya.set(t, e);
}, vd = "style[" + en + '][data-styled-version="5.3.11"]', xd = new RegExp("^" + en + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), wd = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, Sd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var f = d.match(xd);
      if (f) {
        var h = 0 | parseInt(f[1], 10), m = f[2];
        h !== 0 && (bd(m, h), wd(e, m, f[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, kd = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, dl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(f) {
    for (var h = f.childNodes, m = h.length; m >= 0; m--) {
      var C = h[m];
      if (C && C.nodeType === 1 && C.hasAttribute(en)) return C;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(en, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = kd();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, Td = function() {
  function e(r) {
    var n = this.element = dl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, d = 0, f = s.length; d < f; d++) {
        var h = s[d];
        if (h.ownerNode === a) return h;
      }
      sn(17);
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
}(), Cd = function() {
  function e(r) {
    var n = this.element = dl(r);
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
}(), Ad = function() {
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
}(), is = Yi, _d = { isServer: !Yi, useCSSOMInjection: !fd }, pl = function() {
  function e(r, n, a) {
    r === void 0 && (r = Or), n === void 0 && (n = {}), this.options = Sr({}, _d, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Yi && is && (is = !1, function(s) {
      for (var d = document.querySelectorAll(vd), f = 0, h = d.length; f < h; f++) {
        var m = d[f];
        m && m.getAttribute(en) !== "active" && (Sd(s, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Qn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Sr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new Ad(d) : s ? new Td(d) : new Cd(d), new gd(r)));
    var r, n, a, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Qn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Qn(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Qn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", d = 0; d < a; d++) {
        var f = yd(d);
        if (f !== void 0) {
          var h = r.names.get(f), m = n.getGroup(d);
          if (h && m && h.size) {
            var C = en + ".g" + d + '[id="' + f + '"]', _ = "";
            h !== void 0 && h.forEach(function(O) {
              O.length > 0 && (_ += O + ",");
            }), s += "" + m + C + '{content:"' + _ + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Ed = /(a)(d)/gi, os = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function xi(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = os(t % 52) + r;
  return (os(t % 52) + r).replace(Ed, "$1-$2");
}
var qr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, fl = function(e) {
  return qr(5381, e);
};
function jd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (On(r) && !Gi(r)) return !1;
  }
  return !0;
}
var Od = fl("5.3.11"), Nd = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = Ze.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && jd(t), this.componentId = r, this.baseHash = qr(Od, r), this.baseStyle = n, pl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = tn(this.rules, t, r, n).join(""), f = xi(qr(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, f)) {
        var h = n(d, "." + f, void 0, a);
        r.insertRules(a, f, h);
      }
      s.push(f), this.staticRulesId = f;
    }
    else {
      for (var m = this.rules.length, C = qr(this.baseHash, n.hash), _ = "", O = 0; O < m; O++) {
        var U = this.rules[O];
        if (typeof U == "string") _ += U, Ze.env.NODE_ENV !== "production" && (C = qr(C, U + O));
        else if (U) {
          var E = tn(U, t, r, n), S = Array.isArray(E) ? E.join("") : E;
          C = qr(C, S + O), _ += S;
        }
      }
      if (_) {
        var I = xi(C >>> 0);
        if (!r.hasNameForId(a, I)) {
          var F = n(_, "." + I, void 0, a);
          r.insertRules(a, I, F);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), Rd = /^\s*\/\/.*$/gm, Id = [":", "[", ".", "#"];
function Dd(e) {
  var t, r, n, a, s = Or, d = s.options, f = d === void 0 ? Or : d, h = s.plugins, m = h === void 0 ? ga : h, C = new Ju(f), _ = [], O = /* @__PURE__ */ function(S) {
    function I(F) {
      if (F) try {
        S(F + "}");
      } catch {
      }
    }
    return function(F, $, X, G, T, oe, ce, Se, Ie, $e) {
      switch (F) {
        case 1:
          if (Ie === 0 && $.charCodeAt(0) === 64) return S($ + ";"), "";
          break;
        case 2:
          if (Se === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (Se) {
            case 102:
            case 112:
              return S(X[0] + $), "";
            default:
              return $ + ($e === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(I);
      }
    };
  }(function(S) {
    _.push(S);
  }), U = function(S, I, F) {
    return I === 0 && Id.indexOf(F[r.length]) !== -1 || F.match(a) ? S : "." + t;
  };
  function E(S, I, F, $) {
    $ === void 0 && ($ = "&");
    var X = S.replace(Rd, ""), G = I && F ? F + " " + I + " { " + X + " }" : X;
    return t = $, r = I, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), C(F || !I ? "" : I, G);
  }
  return C.use([].concat(m, [function(S, I, F) {
    S === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, U));
  }, O, function(S) {
    if (S === -2) {
      var I = _;
      return _ = [], I;
    }
  }])), E.hash = m.length ? m.reduce(function(S, I) {
    return I.name || sn(15), qr(S, I.name);
  }, 5381).toString() : "", E;
}
var hl = ht.createContext();
hl.Consumer;
var ml = ht.createContext(), Pd = (ml.Consumer, new pl()), wi = Dd();
function Ld() {
  return Yt(hl) || Pd;
}
function Md() {
  return Yt(ml) || wi;
}
var Fd = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = wi);
      var d = n.name + s.hash;
      a.hasNameForId(n.id, d) || a.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return sn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = wi), this.name + t.hash;
  }, e;
}(), $d = /([A-Z])/, Ud = /([A-Z])/g, zd = /^ms-/, Bd = function(e) {
  return "-" + e.toLowerCase();
};
function ss(e) {
  return $d.test(e) ? e.replace(Ud, Bd).replace(zd, "-ms-") : e;
}
var ls = function(e) {
  return e == null || e === !1 || e === "";
};
function tn(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, f = e.length; d < f; d += 1) (a = tn(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (ls(e)) return "";
  if (Gi(e)) return "." + e.styledComponentId;
  if (On(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return Ze.env.NODE_ENV !== "production" && Hi.isElement(h) && console.warn(vi(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), tn(h, t, r, n);
  }
  var m;
  return e instanceof Fd ? r ? (e.inject(r, n), e.getName(n)) : e : bi(e) ? function C(_, O) {
    var U, E, S = [];
    for (var I in _) _.hasOwnProperty(I) && !ls(_[I]) && (Array.isArray(_[I]) && _[I].isCss || On(_[I]) ? S.push(ss(I) + ":", _[I], ";") : bi(_[I]) ? S.push.apply(S, C(_[I], I)) : S.push(ss(I) + ": " + (U = I, (E = _[I]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || U in Qu || U.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return O ? [O + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var cs = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function qd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return On(e) || bi(e) ? cs(tn(as(ga, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : cs(tn(as(e, r)));
}
var us = /invalid hook call/i, ea = /* @__PURE__ */ new Set(), Hd = function(e, t) {
  if (Ze.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(s) {
        if (us.test(s)) a = !1, ea.delete(r);
        else {
          for (var d = arguments.length, f = new Array(d > 1 ? d - 1 : 0), h = 1; h < d; h++) f[h - 1] = arguments[h];
          n.apply(void 0, [s].concat(f));
        }
      }, Ir(), a && !ea.has(r) && (console.warn(r), ea.add(r));
    } catch (s) {
      us.test(s.message) && ea.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Wd = function(e, t, r) {
  return r === void 0 && (r = Or), e.theme !== r.theme && e.theme || t || r.theme;
}, Vd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Gd = /(^-|-$)/g;
function Ka(e) {
  return e.replace(Vd, "-").replace(Gd, "");
}
var Yd = function(e) {
  return xi(fl(e) >>> 0);
};
function ta(e) {
  return typeof e == "string" && (Ze.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Si = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Zd = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Xd(e, t, r) {
  var n = e[r];
  Si(t) && Si(n) ? gl(n, t) : e[r] = t;
}
function gl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (Si(d)) for (var f in d) Zd(f) && Xd(e, d[f], f);
  }
  return e;
}
var yl = ht.createContext();
yl.Consumer;
var Ja = {};
function bl(e, t, r) {
  var n = Gi(e), a = !ta(e), s = t.attrs, d = s === void 0 ? ga : s, f = t.componentId, h = f === void 0 ? function($, X) {
    var G = typeof $ != "string" ? "sc" : Ka($);
    Ja[G] = (Ja[G] || 0) + 1;
    var T = G + "-" + Yd("5.3.11" + G + Ja[G]);
    return X ? X + "-" + T : T;
  }(t.displayName, t.parentComponentId) : f, m = t.displayName, C = m === void 0 ? function($) {
    return ta($) ? "styled." + $ : "Styled(" + vi($) + ")";
  }(e) : m, _ = t.displayName && t.componentId ? Ka(t.displayName) + "-" + t.componentId : t.componentId || h, O = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, U = t.shouldForwardProp;
  n && e.shouldForwardProp && (U = t.shouldForwardProp ? function($, X, G) {
    return e.shouldForwardProp($, X, G) && t.shouldForwardProp($, X, G);
  } : e.shouldForwardProp);
  var E, S = new Nd(r, _, n ? e.componentStyle : void 0), I = S.isStatic && d.length === 0, F = function($, X) {
    return function(G, T, oe, ce) {
      var Se = G.attrs, Ie = G.componentStyle, $e = G.defaultProps, De = G.foldedComponentIds, fe = G.shouldForwardProp, ue = G.styledComponentId, Ce = G.target, ge = function(q, v, Y) {
        q === void 0 && (q = Or);
        var j = Sr({}, v, { theme: q }), ie = {};
        return Y.forEach(function(re) {
          var ee, K, se, he = re;
          for (ee in On(he) && (he = he(j)), he) j[ee] = ie[ee] = ee === "className" ? (K = ie[ee], se = he[ee], K && se ? K + " " + se : K || se) : he[ee];
        }), [j, ie];
      }(Wd(T, Yt(yl), $e) || Or, T, Se), He = ge[0], Ae = ge[1], _e = function(q, v, Y, j) {
        var ie = Ld(), re = Md(), ee = v ? q.generateAndInjectStyles(Or, ie, re) : q.generateAndInjectStyles(Y, ie, re);
        return Ze.env.NODE_ENV !== "production" && !v && j && j(ee), ee;
      }(Ie, ce, He, Ze.env.NODE_ENV !== "production" ? G.warnTooManyClasses : void 0), Fe = oe, We = Ae.$as || T.$as || Ae.as || T.as || Ce, Ve = ta(We), B = Ae !== T ? Sr({}, T, {}, Ae) : T, R = {};
      for (var z in B) z[0] !== "$" && z !== "as" && (z === "forwardedAs" ? R.as = B[z] : (fe ? fe(z, Qo, We) : !Ve || Qo(z)) && (R[z] = B[z]));
      return T.style && Ae.style !== T.style && (R.style = Sr({}, T.style, {}, Ae.style)), R.className = Array.prototype.concat(De, ue, _e !== ue ? _e : null, T.className, Ae.className).filter(Boolean).join(" "), R.ref = Fe, Gs(We, R);
    }(E, $, X, I);
  };
  return F.displayName = C, (E = ht.forwardRef(F)).attrs = O, E.componentStyle = S, E.displayName = C, E.shouldForwardProp = U, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ga, E.styledComponentId = _, E.target = n ? e.target : e, E.withComponent = function($) {
    var X = t.componentId, G = function(oe, ce) {
      if (oe == null) return {};
      var Se, Ie, $e = {}, De = Object.keys(oe);
      for (Ie = 0; Ie < De.length; Ie++) Se = De[Ie], ce.indexOf(Se) >= 0 || ($e[Se] = oe[Se]);
      return $e;
    }(t, ["componentId"]), T = X && X + "-" + (ta($) ? $ : Ka(vi($)));
    return bl($, Sr({}, G, { attrs: O, componentId: T }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = n ? gl({}, e.defaultProps, $) : $;
  } }), Ze.env.NODE_ENV !== "production" && (Hd(C, _), E.warnTooManyClasses = /* @__PURE__ */ function($, X) {
    var G = {}, T = !1;
    return function(oe) {
      if (!T && (G[oe] = !0, Object.keys(G).length >= 200)) {
        var ce = X ? ' with the id of "' + X + '"' : "";
        console.warn("Over 200 classes were generated for component " + $ + ce + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), T = !0, G = {};
      }
    };
  }(C, _)), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), a && pd(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var cr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Or), !Hi.isValidElementType(n)) return sn(1, String(n));
    var s = function() {
      return r(n, a, qd.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, Sr({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, Sr({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(bl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  cr[e] = cr(e);
});
Ze.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), Ze.env.NODE_ENV !== "production" && Ze.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Kd = cr.div`
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
`, ua = "On This Page", Jd = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: ua
}, vl = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const n = Ir(null), a = du("(max-width: 991px)"), [s, d] = ft({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), f = a ? 110 : 142, h = () => {
    var S;
    const I = {}, F = window.scrollY, $ = (S = document.getElementById(t)) == null ? void 0 : S.getBoundingClientRect().top, X = 103;
    $ >= 0 && (I.sticky = !1, I.activeContainer = ""), F > n.current.getBoundingClientRect().top && (I.sticky = !0);
    const G = s.hasHeader ? f + X : X;
    e == null || e.forEach(({ targetIdName: T }) => {
      const oe = document.getElementById(T), ce = (oe == null ? void 0 : oe.getBoundingClientRect().top) - G, Se = (oe == null ? void 0 : oe.getBoundingClientRect().bottom) - G;
      ce < 0 && Se > 0 && (I.activeContainer = T);
    }), d((T) => ({
      ...T,
      ...I
    }));
  }, m = () => {
    qu(h, 150), Hu(h, 150);
  }, C = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), _ = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function O(S = null) {
    if (S === null) return s.containerClass;
    const I = Object.values(S.classList).filter(
      (F) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(F)
    );
    return I.length > 0 ? I.join(" ") : O(S.parentElement);
  }
  Tt(() => {
    const S = document.getElementById(t) || null, I = {
      hasHeader: C(),
      hasAltMenuSpacing: _(),
      containerClass: O(S)
    };
    d((F) => ({
      ...F,
      ...I
    }));
  }, []), Tt(() => (window == null || window.addEventListener("scroll", m), () => window.removeEventListener("scroll", m)), [s.hasHeader]);
  const U = (S) => {
    var I, F;
    const $ = window.scrollY - (s.hasHeader ? f + 100 : 100), X = a ? 410 : 90;
    let G = ((I = document.getElementById(S)) == null ? void 0 : I.getBoundingClientRect().top) + $;
    n.current.classList.contains("sticky") || (G -= X), r && ((F = Bu(`#${S}`)) == null || F.focus()), window.scrollTo({ top: G, behavior: "smooth" });
  }, E = () => {
    d((S) => ({
      ...S,
      showMenu: !S.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ H.jsx(
    Kd,
    {
      requiresAltMenuSpacing: s.hasAltMenuSpacing,
      ref: n,
      className: dt(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: s.sticky,
          "with-header": s.hasHeader
        }
      ),
      style: s.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ H.jsxs("div", { className: `${s.containerClass} uds-anchor-menu-wrapper`, children: [
        a ? /* @__PURE__ */ H.jsx(
          Zr,
          {
            gaData: {
              ...Jd,
              action: s.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ H.jsx(
              "button",
              {
                className: dt("mobile-menu-toggler", {
                  "show-menu": s.showMenu
                }),
                type: "button",
                onClick: E,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ H.jsxs("h4", { children: [
                  ua,
                  ":",
                  /* @__PURE__ */ H.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ H.jsxs("h4", { children: [
          ua,
          ":"
        ] }),
        /* @__PURE__ */ H.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: dt("card", "card-body", "collapse", {
              show: s.showMenu
            }),
            children: /* @__PURE__ */ H.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": ua,
                children: e == null ? void 0 : e.map((S) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ H.jsx(
                    Tr,
                    {
                      "data-testid": `anchor-item-${S.targetIdName}`,
                      classes: dt("nav-link", {
                        active: s.activeContainer === S.targetIdName
                      }).split(" "),
                      ariaLabel: S.text,
                      label: S.text,
                      icon: S.icon,
                      onClick: () => U(S.targetIdName)
                    },
                    S.targetIdName
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
vl.propTypes = {
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
function Aa(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Qd = /* @__PURE__ */ function() {
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
}(), Vr = function() {
  return Vr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Vr.apply(this, arguments);
}, ep = function(e, t, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(d) {
      d(s);
    });
  }
  return new (r || (r = Promise))(function(s, d) {
    function f(C) {
      try {
        m(n.next(C));
      } catch (_) {
        d(_);
      }
    }
    function h(C) {
      try {
        m(n.throw(C));
      } catch (_) {
        d(_);
      }
    }
    function m(C) {
      C.done ? s(C.value) : a(C.value).then(f, h);
    }
    m((n = n.apply(e, [])).next());
  });
}, tp = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, a, s, d;
  return d = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function f(m) {
    return function(C) {
      return h([m, C]);
    };
  }
  function h(m) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, a && (s = m[0] & 2 ? a.return : m[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, m[1])).done) return s;
      switch (a = 0, s && (m = [m[0] & 2, s.value]), m[0]) {
        case 0:
        case 1:
          s = m;
          break;
        case 4:
          return r.label++, { value: m[1], done: !1 };
        case 5:
          r.label++, a = m[1], m = [0];
          continue;
        case 7:
          m = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (m[0] === 6 || m[0] === 2)) {
            r = 0;
            continue;
          }
          if (m[0] === 3 && (!s || m[1] > s[0] && m[1] < s[3])) {
            r.label = m[1];
            break;
          }
          if (m[0] === 6 && r.label < s[1]) {
            r.label = s[1], s = m;
            break;
          }
          if (s && r.label < s[2]) {
            r.label = s[2], r.ops.push(m);
            break;
          }
          s[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      m = t.call(e, r);
    } catch (C) {
      m = [6, C], a = 0;
    } finally {
      n = s = 0;
    }
    if (m[0] & 5) throw m[1];
    return { value: m[0] ? m[1] : void 0, done: !0 };
  }
}, xl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, rp = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, np = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, ap = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function ip(e, t, r) {
  var n = t.height, a = t.width, s = xl(t, ["height", "width"]), d = Vr({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), f = window.open(e, "", Object.keys(d).map(function(m) {
    return "".concat(m, "=").concat(d[m]);
  }).join(", "));
  if (r)
    var h = window.setInterval(function() {
      try {
        (f === null || f.closed) && (window.clearInterval(h), r(f));
      } catch (m) {
        console.error(m);
      }
    }, 1e3);
  return f;
}
var op = (
  /** @class */
  function(e) {
    Qd(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, s = a.onShareWindowClose, d = a.windowHeight, f = d === void 0 ? 400 : d, h = a.windowPosition, m = h === void 0 ? "windowCenter" : h, C = a.windowWidth, _ = C === void 0 ? 550 : C, O = Vr({ height: f, width: _ }, m === "windowCenter" ? np(_, f) : ap(_, f));
        ip(n, O, s);
      }, r.handleClick = function(n) {
        return ep(r, void 0, void 0, function() {
          var a, s, d, f, h, m, C, _, O, U;
          return tp(this, function(E) {
            switch (E.label) {
              case 0:
                return a = this.props, s = a.beforeOnClick, d = a.disabled, f = a.networkLink, h = a.onClick, m = a.url, C = a.openShareDialogOnClick, _ = a.opts, O = f(m, _), d ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (U = s(), rp(U) ? [4, U] : [3, 2]) : [3, 2]);
              case 1:
                E.sent(), E.label = 2;
              case 2:
                return C && this.openShareDialog(O), h && h(n, O), [
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
      var n = r.children, a = r.className, s = r.disabled, d = r.disabledStyle, f = r.forwardedRef;
      r.networkLink;
      var h = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var m = r.resetButtonStyle, C = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var _ = xl(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), O = dt("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), U = Vr(Vr(m ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, C), s && d);
      return ht.createElement("button", Vr({}, _, { "aria-label": _["aria-label"] || h, className: O, onClick: this.handleClick, ref: f, style: U }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Qc)
), ba = function() {
  return ba = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ba.apply(this, arguments);
};
function _a(e, t, r, n) {
  function a(s, d) {
    var f = r(s), h = ba({}, s), m = Object.keys(f);
    return m.forEach(function(C) {
      delete h[C];
    }), ht.createElement(op, ba({}, n, h, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), Vs(a);
}
function sp(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + Aa({ subject: r, body: n ? n + a + e : e });
}
_a("email", sp, function(e) {
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
var lp = /* @__PURE__ */ function() {
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
}(), cp = (
  /** @class */
  function(e) {
    lp(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function En(e, t) {
  if (!e)
    throw new cp(t);
}
function up(e, t) {
  var r = t.quote, n = t.hashtag;
  return En(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Aa({
    u: e,
    quote: r,
    hashtag: n
  });
}
_a("facebook", up, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function dp(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return En(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Aa({ url: e, mini: "true", title: r, summary: n, source: a });
}
_a("linkedin", dp, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function pp(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, d = t.related, f = d === void 0 ? [] : d;
  return En(e, "twitter.url"), En(Array.isArray(s), "twitter.hashtags is not an array"), En(Array.isArray(f), "twitter.related is not an array"), "https://twitter.com/share" + Aa({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: f.length > 0 ? f.join(",") : void 0
  });
}
_a("twitter", pp, function(e) {
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
function ki(e) {
  "@babel/helpers - typeof";
  return ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ki(e);
}
var fp = (typeof window > "u" ? "undefined" : ki(window)) === "object" && window.Element || function() {
};
function hp(e, t, r) {
  if (!(e[t] instanceof fp))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, hp, l.shape({
  current: l.any
})]);
var Ti = l.oneOfType([l.func, l.string, l.shape({
  $$typeof: l.symbol,
  render: l.func
}), l.arrayOf(l.oneOfType([l.func, l.string, l.shape({
  $$typeof: l.symbol,
  render: l.func
})]))]);
l.string, l.node, l.string, l.object, l.string;
l.bool, l.string, l.object;
cr.div`
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
cr.div`
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
const mp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Zi = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: a,
  disabled: s,
  element: d = "button",
  innerRef: f,
  href: h,
  onClick: m,
  ...C
}) => {
  const _ = dt("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let O = d;
  return h && d === "button" && (O = "a"), /* @__PURE__ */ H.jsx(
    Zr,
    {
      gaData: {
        ...mp,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ H.jsx(
        O,
        {
          type: O === "button" && m ? "button" : void 0,
          ...C,
          className: _,
          href: h,
          ref: f,
          onClick: m,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Zi.propTypes = {
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
  gaData: Bi,
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
Zi.defaultProps = {
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
const wl = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: s,
  fetchPriority: d = "auto",
  width: f,
  height: h,
  cardLink: m,
  title: C,
  caption: _,
  captionTitle: O,
  border: U,
  dropShadow: E
}) => {
  const S = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: d,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: pu(r) },
    ...s && { "data-testid": s },
    ...f && { width: f },
    ...h && { height: h }
  }, I = dt("uds-img", {
    borderless: !U,
    "uds-img-drop-shadow": E
  }), F = (X) => {
    const G = X ? `${S.className} ${X}` : S.className;
    return m ? /* @__PURE__ */ H.jsxs("a", { href: m, children: [
      /* @__PURE__ */ H.jsx("img", { ...S, className: G }),
      /* @__PURE__ */ H.jsx("span", { className: "visually-hidden", children: C })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ H.jsx("img", { ...S, className: G })
    );
  }, $ = () => /* @__PURE__ */ H.jsx("div", { className: I, children: /* @__PURE__ */ H.jsxs("figure", { className: "figure uds-figure", children: [
    F(),
    _ && /* @__PURE__ */ H.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      O && /* @__PURE__ */ H.jsx("h3", { children: O }),
      /* @__PURE__ */ H.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Wr(_)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ H.jsx(H.Fragment, { children: _ ? $() : F(I) });
};
wl.propTypes = {
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
const gp = cr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, yp = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), bp = (e) => !e.startsWith("https://") && !e.startsWith("http://") && yp(e) ? `mailto:${e}` : e, vp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, gt = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: s,
  icon: d,
  body: f,
  eventFormat: h,
  eventLocation: m,
  eventTime: C,
  buttons: _,
  linkLabel: O,
  linkUrl: U,
  tags: E,
  showBorders: S,
  cardLink: I
}) => /* @__PURE__ */ H.jsx(
  Xi,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: s,
    icon: d,
    body: f,
    eventFormat: h,
    eventLocation: m,
    eventTime: C,
    buttons: _,
    linkLabel: O,
    linkUrl: U,
    tags: E,
    showBorders: S,
    cardLink: I
  }
);
gt.propTypes = {
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
gt.defaultProps = {
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
const Xi = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: s,
  icon: d,
  body: f,
  eventFormat: h,
  eventLocation: m,
  eventTime: C,
  buttons: _,
  linkLabel: O,
  linkUrl: U,
  tags: E,
  showBorders: S,
  cardLink: I
}) => {
  const F = dt("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !S
  });
  return /* @__PURE__ */ H.jsx(H.Fragment, { children: /* @__PURE__ */ H.jsxs(gp, { className: F, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ H.jsx(
      wl,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: I,
        title: s
      }
    ),
    !n && d && /* @__PURE__ */ H.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ H.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ H.jsx(
      va,
      {
        type: e,
        body: f,
        eventFormat: h,
        eventLocation: m,
        eventTime: C,
        title: s,
        buttons: _,
        linkLabel: O,
        linkUrl: U,
        tags: E,
        cardLink: I
      }
    ) }) : /* @__PURE__ */ H.jsx(
      va,
      {
        type: e,
        body: f,
        eventFormat: h,
        eventLocation: m,
        eventTime: C,
        title: s,
        buttons: _,
        linkLabel: O,
        linkUrl: U,
        tags: E,
        cardLink: I
      }
    )
  ] }) });
};
Xi.propTypes = {
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
Xi.defaultProps = {
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
const va = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: a,
  title: s,
  buttons: d,
  linkLabel: f,
  linkUrl: h,
  tags: m,
  cardLink: C
}) => /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
  !!s && /* @__PURE__ */ H.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ H.jsx("h3", { className: "card-title", children: C ? /* @__PURE__ */ H.jsx("a", { href: C, children: s }) : s }) }),
  !!t && /* @__PURE__ */ H.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: Wr(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ H.jsx(
    Ki,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  d && /* @__PURE__ */ H.jsx("div", { className: "card-buttons", children: d.map((_) => /* @__PURE__ */ H.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ H.jsx(
        Tr,
        {
          ariaLabel: _.ariaLabel,
          color: _.color,
          icon: _.icon,
          href: _.href,
          label: _.label,
          onClick: _.onClick,
          size: _.size,
          target: _.target,
          cardTitle: s
        }
      )
    },
    `${_.label}-${_.href}`
  )) }),
  h && f && /* @__PURE__ */ H.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ H.jsx(
    Zr,
    {
      gaData: {
        ...vp,
        section: s,
        text: f
      },
      children: /* @__PURE__ */ H.jsx("a", { href: bp(h), children: f })
    }
  ) }),
  m && /* @__PURE__ */ H.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: m.map((_) => (
    // @ts-ignore
    /* @__PURE__ */ H.jsx(
      Zi,
      {
        ariaLabel: _.ariaLabel,
        color: _.color,
        href: _.href,
        label: _.label,
        onClick: _.onClick,
        cardTitle: s
      },
      `${_.label}-${_.href}`
    )
  )) })
] });
va.propTypes = {
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
va.defaultProps = {
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
const Ki = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ H.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: Wr(t) })
  ] }),
  r && /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ H.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Wr(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
  t && /* @__PURE__ */ H.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: Wr(t) })
  ] }) }),
  r && /* @__PURE__ */ H.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ H.jsx("span", { children: /* @__PURE__ */ H.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Wr(r)
      }
    ) })
  ] }) })
] });
Ki.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
};
Ki.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
cr.div`
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
cr.section``;
Ws(null);
l.element, l.element, l.number, l.func, l.func, l.string;
const xp = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), wp = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
});
l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
});
const Sp = l.shape({
  url: l.string,
  filters: l.string
});
l.shape({
  header: xp,
  ctaButton: wp,
  dataSource: Sp,
  maxItems: l.number
});
cr.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`;
l.element;
const kp = cr.img`
  width: 100%;
`;
function Tp({ image: e, title: t, contents: r }) {
  return console.log({ image: e, title: t, contents: r }), /* @__PURE__ */ H.jsx("div", { children: "TODO: to be implemented" });
}
function Cp({
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
  }, d = {
    gold: "highlight-gold",
    black: "highlight-black",
    white: "highlight-white",
    none: "text-white",
    undefined: ""
  }, f = {
    black: "text-dark",
    white: "text-white",
    undefined: ""
  };
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      className: dt("uds-hero", {
        [s[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ H.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ H.jsx(
          kp,
          {
            className: "hero",
            src: e == null ? void 0 : e.url,
            alt: e == null ? void 0 : e.altText,
            "data-testid": "hero-image"
          }
        ),
        t && /* @__PURE__ */ H.jsx("div", { role: "doc-subtitle", "data-testid": "hero-subtitle", children: /* @__PURE__ */ H.jsx(
          "span",
          {
            className: dt({
              [f[t.color]]: t.color,
              [d[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ H.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ H.jsx(
          "span",
          {
            className: dt({
              [f[r.color]]: r.color,
              [d[r.highlightColor]]: r.highlightColor
            }),
            children: r.text
          }
        ) }),
        n && /* @__PURE__ */ H.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: dt("content", {
              [f[a]]: a
            }),
            children: n.map((h, m) => (
              // eslint-disable-next-line react/no-array-index-key
              /* @__PURE__ */ H.jsx("p", { children: h.text }, `content-${m}`)
            ))
          }
        )
      ]
    }
  );
}
const Rn = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => Cp(e),
    "story-hero": () => Tp(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
Rn.propTypes = {
  type: l.oneOf(["heading-hero", "story-hero"]),
  image: cu,
  title: qa,
  subTitle: qa,
  contents: l.arrayOf(qa),
  contentsColor: l.string
};
const wr = ({
  dataId: e,
  isClickeable: t,
  disabled: r,
  pageLinkIcon: n,
  selectedPage: a,
  onClick: s,
  ellipses: d,
  ariaLabel: f,
  children: h,
  ariaDisabled: m
}) => /* @__PURE__ */ H.jsx(
  "li",
  {
    className: dt("page-item", {
      disabled: r,
      active: a,
      elipses: d
    }),
    children: t ? /* @__PURE__ */ H.jsxs(
      "button",
      {
        type: "button",
        "aria-label": f,
        className: dt("page-link", {
          "page-link-icon": n
        }),
        onClick: s,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": a ? "page" : null,
        "aria-disabled": m,
        children: [
          h,
          a && /* @__PURE__ */ H.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ H.jsx("span", { className: "page-link", "data-testid": "page-link", children: h })
  }
);
wr.propTypes = {
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
wr.defaultProps = {
  isClickeable: !1,
  disabled: !1,
  pageLinkIcon: !1,
  selectedPage: !1,
  onClick: () => {
  }
};
const Ap = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, Ji = ({
  type: e,
  background: t,
  currentPage: r,
  totalPages: n,
  onChange: a
}) => {
  const [s, d] = ft(null);
  Tt(() => {
    d(r);
  }, [r]);
  const f = (C) => {
    al({ ...Ap, text: `page ${C}` });
  }, h = (C, _) => {
    const O = {
      first: 1,
      prev: s === 1 ? 1 : s - 1,
      next: s === n ? n : s + 1,
      last: n
    }[_] ?? _;
    d(O), f(O), a == null || a(C, O);
  }, m = () => {
    const C = Uo(
      s === n - 1,
      2,
      s === n ? 3 : 1
    ), _ = Uo(
      s === 1,
      3,
      s === 2 ? 2 : 1
    ), O = Yo(
      s - C,
      s,
      n
    ), U = Yo(
      s,
      s + 1 + _,
      n
    ), E = [...O, ...U];
    return /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
      E[0] !== 1 && /* @__PURE__ */ H.jsx(
        wr,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: s === 1,
          onClick: (S) => h(S, "first"),
          children: "1"
        }
      ),
      E[0] > 2 && /* @__PURE__ */ H.jsx(wr, { ellipses: !0, children: "..." }),
      E.map((S) => /* @__PURE__ */ H.jsx(
        wr,
        {
          ariaLabel: `Page ${S} of ${n}`,
          isClickeable: !0,
          selectedPage: s === S,
          onClick: (I) => h(I, S),
          children: S
        },
        S
      )),
      E[E.length - 1] < n - 1 && /* @__PURE__ */ H.jsx(wr, { ellipses: !0, children: "..." }),
      E[E.length - 1] !== n && /* @__PURE__ */ H.jsx(
        wr,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: s === n,
          onClick: (S) => h(S, "last"),
          children: n
        }
      )
    ] });
  };
  return /* @__PURE__ */ H.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ H.jsxs(
    "ul",
    {
      className: dt(
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
        /* @__PURE__ */ H.jsx(
          wr,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: s === 1,
            pageLinkIcon: !0,
            onClick: (C) => h(C, "prev"),
            ariaDisabled: s === 1,
            ariaLabel: "Previous Page"
          }
        ),
        m(),
        /* @__PURE__ */ H.jsx(
          wr,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: s === n,
            disabled: s === n,
            pageLinkIcon: !0,
            onClick: (C) => h(C, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
Ji.propTypes = {
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
Ji.defaultProps = {
  currentPage: 1,
  totalPages: 10
};
l.oneOf(["small", "large"]), l.string.isRequired, l.string.isRequired, l.string;
l.oneOf(["small", "large"]).isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string, l.string;
cr.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const _p = Vs(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: s,
    leftKeyPressed: d,
    rightKeyPressed: f,
    icon: h,
    gaData: m
  } = e, C = Ir(null);
  eu(
    t,
    () => ({
      focus() {
        C.current.focus();
      },
      scrollIntoView() {
        var O, U, E, S, I, F, $;
        const X = ((O = C.current) == null ? void 0 : O.offsetWidth) / 2 + C.current.offsetLeft, G = ((E = (U = C.current) == null ? void 0 : U.offsetParent) == null ? void 0 : E.scrollLeft) + ((I = (S = C.current) == null ? void 0 : S.offsetParent) == null ? void 0 : I.offsetWidth) / 2;
        ($ = (F = C.current) == null ? void 0 : F.offsetParent) == null || $.scrollBy({
          left: X - G
        });
      }
    }),
    []
  );
  const _ = (O) => {
    O.keyCode === 37 ? (O.preventDefault(), d()) : O.keyCode === 39 && (O.preventDefault(), f());
  };
  return /* @__PURE__ */ H.jsx(Zr, { gaData: { ...m, text: a }, children: /* @__PURE__ */ H.jsxs(
    "a",
    {
      ref: C,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      onClick: (O) => s(O, r, a),
      onKeyDown: _,
      tabIndex: n ? "" : "-1",
      children: [
        a,
        " ",
        h && /* @__PURE__ */ H.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` })
      ]
    }
  ) });
});
_p.propTypes = {
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
const Ep = {
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
  className: a,
  controls: s = !0
}) => {
  const d = Ir(null);
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      className: dt(`uds-video-container ${a}`, {
        "uds-video-with-caption": r
      }),
      children: [
        /* @__PURE__ */ H.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ H.jsx(Zr, { gaData: { ...Ep, section: n }, children: /* @__PURE__ */ H.jsxs(
          "video",
          {
            ref: d,
            title: n,
            playsInline: !0,
            controls: s || !0,
            children: [
              /* @__PURE__ */ H.jsx("source", { src: e }),
              /* @__PURE__ */ H.jsx(
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
        r && /* @__PURE__ */ H.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ H.jsx("figcaption", { children: r }) })
      ]
    }
  );
}, Op = ({ title: e = "", caption: t, url: r = "", className: n }) => /* @__PURE__ */ H.jsxs(
  "div",
  {
    className: dt(`uds-video-container ${n}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ H.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ H.jsx("iframe", { title: e, src: r }) }),
      t && /* @__PURE__ */ H.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ H.jsx("figcaption", { children: t }) })
    ]
  }
), Qi = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: a = "",
    caption: s,
    className: d,
    controls: f = !0
  } = e;
  return t === "youtube" ? Op({ url: r, title: a, caption: s, className: d }) : jp({
    url: r,
    vttUrl: n,
    title: a,
    caption: s,
    className: d,
    controls: f
  });
};
Qi.propTypes = {
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
var Np = !1;
try {
  var ds = Object.defineProperty({}, "passive", {
    get: function() {
      Np = !0;
    }
  });
  window.addEventListener("testPassive", null, ds), window.removeEventListener("testPassive", null, ds);
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
    buttons: gt.propTypes.buttons,
    linkLabel: l.string,
    linkUrl: l.string,
    tags: gt.propTypes.tags
  })
).isRequired, gt.propTypes.type, gt.propTypes.eventFormat, gt.propTypes.horizontal, l.string, l.string, l.bool;
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const xa = {
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
l.string, xa.imageItems, xa.hasContent;
xa.imageItems.isRequired, xa.hasContent, l.string, l.string, l.bool;
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
var ps = Xs;
ps.createRoot, ps.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .75rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
var Sl = { exports: {} }, Qa, fs;
function Rp() {
  if (fs) return Qa;
  fs = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qa = e, Qa;
}
var ei, hs;
function Ip() {
  if (hs) return ei;
  hs = 1;
  var e = Rp();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ei = function() {
    function n(d, f, h, m, C, _) {
      if (_ !== e) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
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
Sl.exports = Ip()();
var da = Sl.exports;
const A = /* @__PURE__ */ Ui(da);
var kl = { exports: {} }, Je = {};
var ms;
function Dp() {
  if (ms) return Je;
  ms = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), U = Symbol.for("react.client.reference");
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var I = S.$$typeof;
      switch (I) {
        case e:
          switch (S = S.type, S) {
            case r:
            case a:
            case n:
            case h:
            case m:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case d:
                case f:
                case _:
                case C:
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
  return Je.ContextConsumer = s, Je.ContextProvider = d, Je.Element = e, Je.ForwardRef = f, Je.Fragment = r, Je.Lazy = _, Je.Memo = C, Je.Portal = t, Je.Profiler = a, Je.StrictMode = n, Je.Suspense = h, Je.SuspenseList = m, Je.isContextConsumer = function(S) {
    return E(S) === s;
  }, Je.isContextProvider = function(S) {
    return E(S) === d;
  }, Je.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Je.isForwardRef = function(S) {
    return E(S) === f;
  }, Je.isFragment = function(S) {
    return E(S) === r;
  }, Je.isLazy = function(S) {
    return E(S) === _;
  }, Je.isMemo = function(S) {
    return E(S) === C;
  }, Je.isPortal = function(S) {
    return E(S) === t;
  }, Je.isProfiler = function(S) {
    return E(S) === a;
  }, Je.isStrictMode = function(S) {
    return E(S) === n;
  }, Je.isSuspense = function(S) {
    return E(S) === h;
  }, Je.isSuspenseList = function(S) {
    return E(S) === m;
  }, Je.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === a || S === n || S === h || S === m || S === O || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === C || S.$$typeof === d || S.$$typeof === s || S.$$typeof === f || S.$$typeof === U || S.getModuleId !== void 0);
  }, Je.typeOf = E, Je;
}
kl.exports = Dp();
var eo = kl.exports;
function Pp(e) {
  function t(B, R, z, q, v) {
    for (var Y = 0, j = 0, ie = 0, re = 0, ee, K, se = 0, he = 0, ne, de = ne = ee = 0, ae = 0, ye = 0, Ue = 0, me = 0, nt = z.length, Xe = nt - 1, we, J = "", pe = "", at = "", et = "", Me; ae < nt; ) {
      if (K = z.charCodeAt(ae), ae === Xe && j + re + ie + Y !== 0 && (j !== 0 && (K = j === 47 ? 10 : 47), re = ie = Y = 0, nt++, Xe++), j + re + ie + Y === 0) {
        if (ae === Xe && (0 < ye && (J = J.replace(O, "")), 0 < J.trim().length)) {
          switch (K) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += z.charAt(ae);
          }
          K = 59;
        }
        switch (K) {
          case 123:
            for (J = J.trim(), ee = J.charCodeAt(0), ne = 1, me = ++ae; ae < nt; ) {
              switch (K = z.charCodeAt(ae)) {
                case 123:
                  ne++;
                  break;
                case 125:
                  ne--;
                  break;
                case 47:
                  switch (K = z.charCodeAt(ae + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (de = ae + 1; de < Xe; ++de)
                          switch (z.charCodeAt(de)) {
                            case 47:
                              if (K === 42 && z.charCodeAt(de - 1) === 42 && ae + 2 !== de) {
                                ae = de + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (K === 47) {
                                ae = de + 1;
                                break e;
                              }
                          }
                        ae = de;
                      }
                  }
                  break;
                case 91:
                  K++;
                case 40:
                  K++;
                case 34:
                case 39:
                  for (; ae++ < Xe && z.charCodeAt(ae) !== K; )
                    ;
              }
              if (ne === 0) break;
              ae++;
            }
            switch (ne = z.substring(me, ae), ee === 0 && (ee = (J = J.replace(_, "").trim()).charCodeAt(0)), ee) {
              case 64:
                switch (0 < ye && (J = J.replace(O, "")), K = J.charCodeAt(1), K) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ye = R;
                    break;
                  default:
                    ye = He;
                }
                if (ne = t(R, ye, ne, K, v + 1), me = ne.length, 0 < _e && (ye = r(He, J, Ue), Me = f(3, ne, ye, R, ue, fe, me, K, v, q), J = ye.join(""), Me !== void 0 && (me = (ne = Me.trim()).length) === 0 && (K = 0, ne = "")), 0 < me) switch (K) {
                  case 115:
                    J = J.replace(oe, d);
                  case 100:
                  case 109:
                  case 45:
                    ne = J + "{" + ne + "}";
                    break;
                  case 107:
                    J = J.replace($, "$1 $2"), ne = J + "{" + ne + "}", ne = ge === 1 || ge === 2 && s("@" + ne, 3) ? "@-webkit-" + ne + "@" + ne : "@" + ne;
                    break;
                  default:
                    ne = J + ne, q === 112 && (ne = (pe += ne, ""));
                }
                else ne = "";
                break;
              default:
                ne = t(R, r(R, J, Ue), ne, q, v + 1);
            }
            at += ne, ne = Ue = ye = de = ee = 0, J = "", K = z.charCodeAt(++ae);
            break;
          case 125:
          case 59:
            if (J = (0 < ye ? J.replace(O, "") : J).trim(), 1 < (me = J.length)) switch (de === 0 && (ee = J.charCodeAt(0), ee === 45 || 96 < ee && 123 > ee) && (me = (J = J.replace(" ", ":")).length), 0 < _e && (Me = f(1, J, R, B, ue, fe, pe.length, q, v, q)) !== void 0 && (me = (J = Me.trim()).length) === 0 && (J = "\0\0"), ee = J.charCodeAt(0), K = J.charCodeAt(1), ee) {
              case 0:
                break;
              case 64:
                if (K === 105 || K === 99) {
                  et += J + z.charAt(ae);
                  break;
                }
              default:
                J.charCodeAt(me - 1) !== 58 && (pe += a(J, ee, K, J.charCodeAt(2)));
            }
            Ue = ye = de = ee = 0, J = "", K = z.charCodeAt(++ae);
        }
      }
      switch (K) {
        case 13:
        case 10:
          j === 47 ? j = 0 : 1 + ee === 0 && q !== 107 && 0 < J.length && (ye = 1, J += "\0"), 0 < _e * We && f(0, J, R, B, ue, fe, pe.length, q, v, q), fe = 1, ue++;
          break;
        case 59:
        case 125:
          if (j + re + ie + Y === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, we = z.charAt(ae), K) {
            case 9:
            case 32:
              if (re + Y + j === 0) switch (se) {
                case 44:
                case 58:
                case 9:
                case 32:
                  we = "";
                  break;
                default:
                  K !== 32 && (we = " ");
              }
              break;
            case 0:
              we = "\\0";
              break;
            case 12:
              we = "\\f";
              break;
            case 11:
              we = "\\v";
              break;
            case 38:
              re + j + Y === 0 && (ye = Ue = 1, we = "\f" + we);
              break;
            case 108:
              if (re + j + Y + Ce === 0 && 0 < de) switch (ae - de) {
                case 2:
                  se === 112 && z.charCodeAt(ae - 3) === 58 && (Ce = se);
                case 8:
                  he === 111 && (Ce = he);
              }
              break;
            case 58:
              re + j + Y === 0 && (de = ae);
              break;
            case 44:
              j + ie + re + Y === 0 && (ye = 1, we += "\r");
              break;
            case 34:
            case 39:
              j === 0 && (re = re === K ? 0 : re === 0 ? K : re);
              break;
            case 91:
              re + j + ie === 0 && Y++;
              break;
            case 93:
              re + j + ie === 0 && Y--;
              break;
            case 41:
              re + j + Y === 0 && ie--;
              break;
            case 40:
              if (re + j + Y === 0) {
                if (ee === 0) switch (2 * se + 3 * he) {
                  case 533:
                    break;
                  default:
                    ee = 1;
                }
                ie++;
              }
              break;
            case 64:
              j + ie + re + Y + de + ne === 0 && (ne = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + Y + ie)) switch (j) {
                case 0:
                  switch (2 * K + 3 * z.charCodeAt(ae + 1)) {
                    case 235:
                      j = 47;
                      break;
                    case 220:
                      me = ae, j = 42;
                  }
                  break;
                case 42:
                  K === 47 && se === 42 && me + 2 !== ae && (z.charCodeAt(me + 2) === 33 && (pe += z.substring(me, ae + 1)), we = "", j = 0);
              }
          }
          j === 0 && (J += we);
      }
      he = se, se = K, ae++;
    }
    if (me = pe.length, 0 < me) {
      if (ye = R, 0 < _e && (Me = f(2, pe, ye, B, ue, fe, me, q, v, q), Me !== void 0 && (pe = Me).length === 0)) return et + pe + at;
      if (pe = ye.join(",") + "{" + pe + "}", ge * Ce !== 0) {
        switch (ge !== 2 || s(pe, 2) || (Ce = 0), Ce) {
          case 111:
            pe = pe.replace(G, ":-moz-$1") + pe;
            break;
          case 112:
            pe = pe.replace(X, "::-webkit-input-$1") + pe.replace(X, "::-moz-$1") + pe.replace(X, ":-ms-input-$1") + pe;
        }
        Ce = 0;
      }
    }
    return et + pe + at;
  }
  function r(B, R, z) {
    var q = R.trim().split(I);
    R = q;
    var v = q.length, Y = B.length;
    switch (Y) {
      case 0:
      case 1:
        var j = 0;
        for (B = Y === 0 ? "" : B[0] + " "; j < v; ++j)
          R[j] = n(B, R[j], z).trim();
        break;
      default:
        var ie = j = 0;
        for (R = []; j < v; ++j)
          for (var re = 0; re < Y; ++re)
            R[ie++] = n(B[re] + " ", q[j], z).trim();
    }
    return R;
  }
  function n(B, R, z) {
    var q = R.charCodeAt(0);
    switch (33 > q && (q = (R = R.trim()).charCodeAt(0)), q) {
      case 38:
        return R.replace(F, "$1" + B.trim());
      case 58:
        return B.trim() + R.replace(F, "$1" + B.trim());
      default:
        if (0 < 1 * z && 0 < R.indexOf("\f")) return R.replace(F, (B.charCodeAt(0) === 58 ? "" : "$1") + B.trim());
    }
    return B + R;
  }
  function a(B, R, z, q) {
    var v = B + ";", Y = 2 * R + 3 * z + 4 * q;
    if (Y === 944) {
      B = v.indexOf(":", 9) + 1;
      var j = v.substring(B, v.length - 1).trim();
      return j = v.substring(0, B).trim() + j + ";", ge === 1 || ge === 2 && s(j, 1) ? "-webkit-" + j + j : j;
    }
    if (ge === 0 || ge === 2 && !s(v, 1)) return v;
    switch (Y) {
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
        if (0 < v.indexOf("image-set(", 11)) return v.replace(De, "$1-webkit-$2") + v;
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
        return j = v.substring(v.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + j + "-webkit-" + v + "-ms-flex-pack" + j + v;
      case 1005:
        return E.test(v) ? v.replace(U, ":-webkit-") + v.replace(U, ":-moz-") + v : v;
      case 1e3:
        switch (j = v.substring(13).trim(), R = j.indexOf("-") + 1, j.charCodeAt(0) + j.charCodeAt(R)) {
          case 226:
            j = v.replace(T, "tb");
            break;
          case 232:
            j = v.replace(T, "tb-rl");
            break;
          case 220:
            j = v.replace(T, "lr");
            break;
          default:
            return v;
        }
        return "-webkit-" + v + "-ms-" + j + v;
      case 1017:
        if (v.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (R = (v = B).length - 10, j = (v.charCodeAt(R) === 33 ? v.substring(0, R) : v).substring(B.indexOf(":", 7) + 1).trim(), Y = j.charCodeAt(0) + (j.charCodeAt(7) | 0)) {
          case 203:
            if (111 > j.charCodeAt(8)) break;
          case 115:
            v = v.replace(j, "-webkit-" + j) + ";" + v;
            break;
          case 207:
          case 102:
            v = v.replace(j, "-webkit-" + (102 < Y ? "inline-" : "") + "box") + ";" + v.replace(j, "-webkit-" + j) + ";" + v.replace(j, "-ms-" + j + "box") + ";" + v;
        }
        return v + ";";
      case 938:
        if (v.charCodeAt(5) === 45) switch (v.charCodeAt(6)) {
          case 105:
            return j = v.replace("-items", ""), "-webkit-" + v + "-webkit-box-" + j + "-ms-flex-" + j + v;
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
        if ($e.test(B) === !0) return (j = B.substring(B.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(B.replace("stretch", "fill-available"), R, z, q).replace(":fill-available", ":stretch") : v.replace(j, "-webkit-" + j) + v.replace(j, "-moz-" + j.replace("fill-", "")) + v;
        break;
      case 962:
        if (v = "-webkit-" + v + (v.charCodeAt(5) === 102 ? "-ms-" + v : "") + v, z + q === 211 && v.charCodeAt(13) === 105 && 0 < v.indexOf("transform", 10)) return v.substring(0, v.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + v;
    }
    return v;
  }
  function s(B, R) {
    var z = B.indexOf(R === 1 ? ":" : "{"), q = B.substring(0, R !== 3 ? z : 10);
    return z = B.substring(z + 1, B.length - 1), Fe(R !== 2 ? q : q.replace(Ie, "$1"), z, R);
  }
  function d(B, R) {
    var z = a(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
    return z !== R + ";" ? z.replace(ce, " or ($1)").substring(4) : "(" + R + ")";
  }
  function f(B, R, z, q, v, Y, j, ie, re, ee) {
    for (var K = 0, se = R, he; K < _e; ++K)
      switch (he = Ae[K].call(C, B, se, z, q, v, Y, j, ie, re, ee)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = he;
      }
    if (se !== R) return se;
  }
  function h(B) {
    switch (B) {
      case void 0:
      case null:
        _e = Ae.length = 0;
        break;
      default:
        if (typeof B == "function") Ae[_e++] = B;
        else if (typeof B == "object") for (var R = 0, z = B.length; R < z; ++R)
          h(B[R]);
        else We = !!B | 0;
    }
    return h;
  }
  function m(B) {
    return B = B.prefix, B !== void 0 && (Fe = null, B ? typeof B != "function" ? ge = 1 : (ge = 2, Fe = B) : ge = 0), m;
  }
  function C(B, R) {
    var z = B;
    if (33 > z.charCodeAt(0) && (z = z.trim()), Ve = z, z = [Ve], 0 < _e) {
      var q = f(-1, R, z, z, ue, fe, 0, 0, 0, 0);
      q !== void 0 && typeof q == "string" && (R = q);
    }
    var v = t(He, z, R, 0, 0);
    return 0 < _e && (q = f(-2, v, z, z, ue, fe, v.length, 0, 0, 0), q !== void 0 && (v = q)), Ve = "", Ce = 0, fe = ue = 1, v;
  }
  var _ = /^\0+/g, O = /[\0\r\f]/g, U = /: */g, E = /zoo|gra/, S = /([,: ])(transform)/g, I = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, X = /::(place)/g, G = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, oe = /\(\s*(.*)\s*\)/g, ce = /([\s\S]*?);/g, Se = /-self|flex-/g, Ie = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $e = /stretch|:\s*\w+\-(?:conte|avail)/, De = /([^-])(image-set\()/, fe = 1, ue = 1, Ce = 0, ge = 1, He = [], Ae = [], _e = 0, Fe = null, We = 0, Ve = "";
  return C.use = h, C.set = m, e !== void 0 && m(e), C;
}
var Lp = {
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
function Mp(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Fp = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gs = /* @__PURE__ */ Mp(
  function(e) {
    return Fp.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Tl = { exports: {} }, Ye = {};
var ys;
function $p() {
  if (ys) return Ye;
  ys = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, C = e ? Symbol.for("react.forward_ref") : 60112, _ = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, U = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function X(T) {
    if (typeof T == "object" && T !== null) {
      var oe = T.$$typeof;
      switch (oe) {
        case t:
          switch (T = T.type, T) {
            case h:
            case m:
            case n:
            case s:
            case a:
            case _:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case f:
                case C:
                case E:
                case U:
                case d:
                  return T;
                default:
                  return oe;
              }
          }
        case r:
          return oe;
      }
    }
  }
  function G(T) {
    return X(T) === m;
  }
  return Ye.AsyncMode = h, Ye.ConcurrentMode = m, Ye.ContextConsumer = f, Ye.ContextProvider = d, Ye.Element = t, Ye.ForwardRef = C, Ye.Fragment = n, Ye.Lazy = E, Ye.Memo = U, Ye.Portal = r, Ye.Profiler = s, Ye.StrictMode = a, Ye.Suspense = _, Ye.isAsyncMode = function(T) {
    return G(T) || X(T) === h;
  }, Ye.isConcurrentMode = G, Ye.isContextConsumer = function(T) {
    return X(T) === f;
  }, Ye.isContextProvider = function(T) {
    return X(T) === d;
  }, Ye.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, Ye.isForwardRef = function(T) {
    return X(T) === C;
  }, Ye.isFragment = function(T) {
    return X(T) === n;
  }, Ye.isLazy = function(T) {
    return X(T) === E;
  }, Ye.isMemo = function(T) {
    return X(T) === U;
  }, Ye.isPortal = function(T) {
    return X(T) === r;
  }, Ye.isProfiler = function(T) {
    return X(T) === s;
  }, Ye.isStrictMode = function(T) {
    return X(T) === a;
  }, Ye.isSuspense = function(T) {
    return X(T) === _;
  }, Ye.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === m || T === s || T === a || T === _ || T === O || typeof T == "object" && T !== null && (T.$$typeof === E || T.$$typeof === U || T.$$typeof === d || T.$$typeof === f || T.$$typeof === C || T.$$typeof === I || T.$$typeof === F || T.$$typeof === $ || T.$$typeof === S);
  }, Ye.typeOf = X, Ye;
}
Tl.exports = $p();
var Up = Tl.exports, to = Up, zp = {
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
}, Bp = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, qp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Cl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ro = {};
ro[to.ForwardRef] = qp;
ro[to.Memo] = Cl;
function bs(e) {
  return to.isMemo(e) ? Cl : ro[e.$$typeof] || zp;
}
var Hp = Object.defineProperty, Wp = Object.getOwnPropertyNames, vs = Object.getOwnPropertySymbols, Vp = Object.getOwnPropertyDescriptor, Gp = Object.getPrototypeOf, xs = Object.prototype;
function Al(e, t, r) {
  if (typeof t != "string") {
    if (xs) {
      var n = Gp(t);
      n && n !== xs && Al(e, n, r);
    }
    var a = Wp(t);
    vs && (a = a.concat(vs(t)));
    for (var s = bs(e), d = bs(t), f = 0; f < a.length; ++f) {
      var h = a[f];
      if (!Bp[h] && !(r && r[h]) && !(d && d[h]) && !(s && s[h])) {
        var m = Vp(t, h);
        try {
          Hp(e, h, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var Yp = Al;
const Zp = /* @__PURE__ */ Ui(Yp);
var ze = { env: { NODE_ENV: "production" } };
function hr() {
  return (hr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ws = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Ci = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !eo.typeOf(e);
}, wa = Object.freeze([]), Nr = Object.freeze({});
function Nn(e) {
  return typeof e == "function";
}
function Ai(e) {
  return ze.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function no(e) {
  return e && typeof e.styledComponentId == "string";
}
var rn = typeof ze < "u" && ze.env !== void 0 && (ze.env.REACT_APP_SC_ATTR || ze.env.SC_ATTR) || "data-styled", ao = typeof window < "u" && "HTMLElement" in window, Xp = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ze < "u" && ze.env !== void 0 && (ze.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ze.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ze.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ze.env.REACT_APP_SC_DISABLE_SPEEDY : ze.env.SC_DISABLE_SPEEDY !== void 0 && ze.env.SC_DISABLE_SPEEDY !== "" ? ze.env.SC_DISABLE_SPEEDY !== "false" && ze.env.SC_DISABLE_SPEEDY : ze.env.NODE_ENV !== "production")), Kp = {}, Jp = ze.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Qp() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function ln(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw ze.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Qp.apply(void 0, [Jp[e]].concat(r)).trim());
}
var ef = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, d = s; r >= d; ) (d <<= 1) < 0 && ln(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(a), this.length = d;
      for (var f = s; f < d; f++) this.groupSizes[f] = 0;
    }
    for (var h = this.indexOfGroup(r + 1), m = 0, C = n.length; m < C; m++) this.tag.insertRule(h, n[m]) && (this.groupSizes[r]++, h++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var d = a; d < s; d++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), d = s + a, f = s; f < d; f++) n += this.tag.getRule(f) + `/*!sc*/
`;
    return n;
  }, e;
}(), pa = /* @__PURE__ */ new Map(), Sa = /* @__PURE__ */ new Map(), jn = 1, ra = function(e) {
  if (pa.has(e)) return pa.get(e);
  for (; Sa.has(jn); ) jn++;
  var t = jn++;
  return ze.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && ln(16, "" + t), pa.set(e, t), Sa.set(t, e), t;
}, tf = function(e) {
  return Sa.get(e);
}, rf = function(e, t) {
  t >= jn && (jn = t + 1), pa.set(e, t), Sa.set(t, e);
}, nf = "style[" + rn + '][data-styled-version="5.3.11"]', af = new RegExp("^" + rn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), of = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, d = a.length; s < d; s++) (n = a[s]) && e.registerName(t, n);
}, sf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var d = r[a].trim();
    if (d) {
      var f = d.match(af);
      if (f) {
        var h = 0 | parseInt(f[1], 10), m = f[2];
        h !== 0 && (rf(m, h), of(e, m, f[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, lf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, _l = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(f) {
    for (var h = f.childNodes, m = h.length; m >= 0; m--) {
      var C = h[m];
      if (C && C.nodeType === 1 && C.hasAttribute(rn)) return C;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(rn, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = lf();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, cf = function() {
  function e(r) {
    var n = this.element = _l(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, d = 0, f = s.length; d < f; d++) {
        var h = s[d];
        if (h.ownerNode === a) return h;
      }
      ln(17);
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
}(), uf = function() {
  function e(r) {
    var n = this.element = _l(r);
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
}(), df = function() {
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
}(), Ss = ao, pf = { isServer: !ao, useCSSOMInjection: !Xp }, ka = function() {
  function e(r, n, a) {
    r === void 0 && (r = Nr), n === void 0 && (n = {}), this.options = hr({}, pf, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && ao && Ss && (Ss = !1, function(s) {
      for (var d = document.querySelectorAll(nf), f = 0, h = d.length; f < h; f++) {
        var m = d[f];
        m && m.getAttribute(rn) !== "active" && (sf(s, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ra(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(hr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = a ? new df(d) : s ? new cf(d) : new uf(d), new ef(r)));
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
        var f = tf(d);
        if (f !== void 0) {
          var h = r.names.get(f), m = n.getGroup(d);
          if (h && m && h.size) {
            var C = rn + ".g" + d + '[id="' + f + '"]', _ = "";
            h !== void 0 && h.forEach(function(O) {
              O.length > 0 && (_ += O + ",");
            }), s += "" + m + C + '{content:"' + _ + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), ff = /(a)(d)/gi, ks = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function _i(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ks(t % 52) + r;
  return (ks(t % 52) + r).replace(ff, "$1-$2");
}
var Hr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, El = function(e) {
  return Hr(5381, e);
};
function jl(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Nn(r) && !no(r)) return !1;
  }
  return !0;
}
var hf = El("5.3.11"), mf = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = ze.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && jl(t), this.componentId = r, this.baseHash = Hr(hf, r), this.baseStyle = n, ka.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Yr(this.rules, t, r, n).join(""), f = _i(Hr(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(a, f)) {
        var h = n(d, "." + f, void 0, a);
        r.insertRules(a, f, h);
      }
      s.push(f), this.staticRulesId = f;
    }
    else {
      for (var m = this.rules.length, C = Hr(this.baseHash, n.hash), _ = "", O = 0; O < m; O++) {
        var U = this.rules[O];
        if (typeof U == "string") _ += U, ze.env.NODE_ENV !== "production" && (C = Hr(C, U + O));
        else if (U) {
          var E = Yr(U, t, r, n), S = Array.isArray(E) ? E.join("") : E;
          C = Hr(C, S + O), _ += S;
        }
      }
      if (_) {
        var I = _i(C >>> 0);
        if (!r.hasNameForId(a, I)) {
          var F = n(_, "." + I, void 0, a);
          r.insertRules(a, I, F);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), gf = /^\s*\/\/.*$/gm, yf = [":", "[", ".", "#"];
function bf(e) {
  var t, r, n, a, s = Nr, d = s.options, f = d === void 0 ? Nr : d, h = s.plugins, m = h === void 0 ? wa : h, C = new Pp(f), _ = [], O = /* @__PURE__ */ function(S) {
    function I(F) {
      if (F) try {
        S(F + "}");
      } catch {
      }
    }
    return function(F, $, X, G, T, oe, ce, Se, Ie, $e) {
      switch (F) {
        case 1:
          if (Ie === 0 && $.charCodeAt(0) === 64) return S($ + ";"), "";
          break;
        case 2:
          if (Se === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (Se) {
            case 102:
            case 112:
              return S(X[0] + $), "";
            default:
              return $ + ($e === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(I);
      }
    };
  }(function(S) {
    _.push(S);
  }), U = function(S, I, F) {
    return I === 0 && yf.indexOf(F[r.length]) !== -1 || F.match(a) ? S : "." + t;
  };
  function E(S, I, F, $) {
    $ === void 0 && ($ = "&");
    var X = S.replace(gf, ""), G = I && F ? F + " " + I + " { " + X + " }" : X;
    return t = $, r = I, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), C(F || !I ? "" : I, G);
  }
  return C.use([].concat(m, [function(S, I, F) {
    S === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, U));
  }, O, function(S) {
    if (S === -2) {
      var I = _;
      return _ = [], I;
    }
  }])), E.hash = m.length ? m.reduce(function(S, I) {
    return I.name || ln(15), Hr(S, I.name);
  }, 5381).toString() : "", E;
}
var Ol = ht.createContext();
Ol.Consumer;
var Nl = ht.createContext(), vf = (Nl.Consumer, new ka()), Ei = bf();
function Rl() {
  return Yt(Ol) || vf;
}
function Il() {
  return Yt(Nl) || Ei;
}
var xf = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = Ei);
      var d = n.name + s.hash;
      a.hasNameForId(n.id, d) || a.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return ln(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ei), this.name + t.hash;
  }, e;
}(), wf = /([A-Z])/, Sf = /([A-Z])/g, kf = /^ms-/, Tf = function(e) {
  return "-" + e.toLowerCase();
};
function Ts(e) {
  return wf.test(e) ? e.replace(Sf, Tf).replace(kf, "-ms-") : e;
}
var Cs = function(e) {
  return e == null || e === !1 || e === "";
};
function Yr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, f = e.length; d < f; d += 1) (a = Yr(e[d], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (Cs(e)) return "";
  if (no(e)) return "." + e.styledComponentId;
  if (Nn(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return ze.env.NODE_ENV !== "production" && eo.isElement(h) && console.warn(Ai(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Yr(h, t, r, n);
  }
  var m;
  return e instanceof xf ? r ? (e.inject(r, n), e.getName(n)) : e : Ci(e) ? function C(_, O) {
    var U, E, S = [];
    for (var I in _) _.hasOwnProperty(I) && !Cs(_[I]) && (Array.isArray(_[I]) && _[I].isCss || Nn(_[I]) ? S.push(Ts(I) + ":", _[I], ";") : Ci(_[I]) ? S.push.apply(S, C(_[I], I)) : S.push(Ts(I) + ": " + (U = I, (E = _[I]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || U in Lp || U.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return O ? [O + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var As = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function io(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Nn(e) || Ci(e) ? As(Yr(ws(wa, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : As(Yr(ws(e, r)));
}
var _s = /invalid hook call/i, na = /* @__PURE__ */ new Set(), Dl = function(e, t) {
  if (ze.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(s) {
        if (_s.test(s)) a = !1, na.delete(r);
        else {
          for (var d = arguments.length, f = new Array(d > 1 ? d - 1 : 0), h = 1; h < d; h++) f[h - 1] = arguments[h];
          n.apply(void 0, [s].concat(f));
        }
      }, Ir(), a && !na.has(r) && (console.warn(r), na.add(r));
    } catch (s) {
      _s.test(s.message) && na.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Pl = function(e, t, r) {
  return r === void 0 && (r = Nr), e.theme !== r.theme && e.theme || t || r.theme;
}, Cf = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Af = /(^-|-$)/g;
function ti(e) {
  return e.replace(Cf, "-").replace(Af, "");
}
var Ll = function(e) {
  return _i(El(e) >>> 0);
};
function aa(e) {
  return typeof e == "string" && (ze.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ji = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, _f = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ef(e, t, r) {
  var n = e[r];
  ji(t) && ji(n) ? Ml(n, t) : e[r] = t;
}
function Ml(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var d = s[a];
    if (ji(d)) for (var f in d) _f(f) && Ef(e, d[f], f);
  }
  return e;
}
var oo = ht.createContext();
oo.Consumer;
var ri = {};
function Fl(e, t, r) {
  var n = no(e), a = !aa(e), s = t.attrs, d = s === void 0 ? wa : s, f = t.componentId, h = f === void 0 ? function($, X) {
    var G = typeof $ != "string" ? "sc" : ti($);
    ri[G] = (ri[G] || 0) + 1;
    var T = G + "-" + Ll("5.3.11" + G + ri[G]);
    return X ? X + "-" + T : T;
  }(t.displayName, t.parentComponentId) : f, m = t.displayName, C = m === void 0 ? function($) {
    return aa($) ? "styled." + $ : "Styled(" + Ai($) + ")";
  }(e) : m, _ = t.displayName && t.componentId ? ti(t.displayName) + "-" + t.componentId : t.componentId || h, O = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, U = t.shouldForwardProp;
  n && e.shouldForwardProp && (U = t.shouldForwardProp ? function($, X, G) {
    return e.shouldForwardProp($, X, G) && t.shouldForwardProp($, X, G);
  } : e.shouldForwardProp);
  var E, S = new mf(r, _, n ? e.componentStyle : void 0), I = S.isStatic && d.length === 0, F = function($, X) {
    return function(G, T, oe, ce) {
      var Se = G.attrs, Ie = G.componentStyle, $e = G.defaultProps, De = G.foldedComponentIds, fe = G.shouldForwardProp, ue = G.styledComponentId, Ce = G.target, ge = function(q, v, Y) {
        q === void 0 && (q = Nr);
        var j = hr({}, v, { theme: q }), ie = {};
        return Y.forEach(function(re) {
          var ee, K, se, he = re;
          for (ee in Nn(he) && (he = he(j)), he) j[ee] = ie[ee] = ee === "className" ? (K = ie[ee], se = he[ee], K && se ? K + " " + se : K || se) : he[ee];
        }), [j, ie];
      }(Pl(T, Yt(oo), $e) || Nr, T, Se), He = ge[0], Ae = ge[1], _e = function(q, v, Y, j) {
        var ie = Rl(), re = Il(), ee = v ? q.generateAndInjectStyles(Nr, ie, re) : q.generateAndInjectStyles(Y, ie, re);
        return ze.env.NODE_ENV !== "production" && !v && j && j(ee), ee;
      }(Ie, ce, He, ze.env.NODE_ENV !== "production" ? G.warnTooManyClasses : void 0), Fe = oe, We = Ae.$as || T.$as || Ae.as || T.as || Ce, Ve = aa(We), B = Ae !== T ? hr({}, T, {}, Ae) : T, R = {};
      for (var z in B) z[0] !== "$" && z !== "as" && (z === "forwardedAs" ? R.as = B[z] : (fe ? fe(z, gs, We) : !Ve || gs(z)) && (R[z] = B[z]));
      return T.style && Ae.style !== T.style && (R.style = hr({}, T.style, {}, Ae.style)), R.className = Array.prototype.concat(De, ue, _e !== ue ? _e : null, T.className, Ae.className).filter(Boolean).join(" "), R.ref = Fe, Gs(We, R);
    }(E, $, X, I);
  };
  return F.displayName = C, (E = ht.forwardRef(F)).attrs = O, E.componentStyle = S, E.displayName = C, E.shouldForwardProp = U, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : wa, E.styledComponentId = _, E.target = n ? e.target : e, E.withComponent = function($) {
    var X = t.componentId, G = function(oe, ce) {
      if (oe == null) return {};
      var Se, Ie, $e = {}, De = Object.keys(oe);
      for (Ie = 0; Ie < De.length; Ie++) Se = De[Ie], ce.indexOf(Se) >= 0 || ($e[Se] = oe[Se]);
      return $e;
    }(t, ["componentId"]), T = X && X + "-" + (aa($) ? $ : ti(Ai($)));
    return Fl($, hr({}, G, { attrs: O, componentId: T }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = n ? Ml({}, e.defaultProps, $) : $;
  } }), ze.env.NODE_ENV !== "production" && (Dl(C, _), E.warnTooManyClasses = /* @__PURE__ */ function($, X) {
    var G = {}, T = !1;
    return function(oe) {
      if (!T && (G[oe] = !0, Object.keys(G).length >= 200)) {
        var ce = X ? ' with the id of "' + X + '"' : "";
        console.warn("Over 200 classes were generated for component " + $ + ce + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), T = !0, G = {};
      }
    };
  }(C, _)), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), a && Zp(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var Qe = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Nr), !eo.isValidElementType(n)) return ln(1, String(n));
    var s = function() {
      return r(n, a, io.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, hr({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, hr({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(Fl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Qe[e] = Qe(e);
});
var jf = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = jl(r), ka.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(r, n, a, s) {
    var d = s(Yr(this.rules, n, a, s).join(""), ""), f = this.componentId + r;
    a.insertRules(f, f, d);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, a, s) {
    r > 2 && ka.registerId(this.componentId + r), this.removeStyles(r, a), this.createStyles(r, n, a, s);
  }, e;
}();
function Ea(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  var a = io.apply(void 0, [e].concat(r)), s = "sc-global-" + Ll(JSON.stringify(a)), d = new jf(a, s);
  function f(m) {
    var C = Rl(), _ = Il(), O = Yt(oo), U = Ir(C.allocateGSInstance(s)).current;
    return ze.env.NODE_ENV !== "production" && ht.Children.count(m.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), ze.env.NODE_ENV !== "production" && a.some(function(E) {
      return typeof E == "string" && E.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), C.server && h(U, m, C, O, _), ru(function() {
      if (!C.server) return h(U, m, C, O, _), function() {
        return d.removeStyles(U, C);
      };
    }, [U, m, C, O, _]), null;
  }
  function h(m, C, _, O, U) {
    if (d.isStatic) d.renderStyles(m, Kp, _, U);
    else {
      var E = hr({}, C, { theme: Pl(C, O, f.defaultProps) });
      d.renderStyles(m, E, _, U);
    }
  }
  return ze.env.NODE_ENV !== "production" && Dl(s), ht.memo(f);
}
ze.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), ze.env.NODE_ENV !== "production" && ze.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const $l = () => {
  const [e, t] = ft(), [r, n] = ft(!1), [a, s] = ft(!1), [d, f] = ft("");
  return Tt(() => {
    if (!d) return;
    (() => {
      s(null), n(!0);
      try {
        fetch(d).then((m) => m.json()).then((m) => {
          t(m), n(!1);
        }).catch((m) => {
          s(m), n(!1);
        });
      } catch (m) {
        s(m);
      }
    })();
  }, [d]), [{ data: e, loading: r, error: a }, f];
}, nn = (e) => (e || []).join(" ");
function jr(e) {
  "@babel/helpers - typeof";
  return jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jr(e);
}
function Oi(e, t) {
  return Oi = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, Oi(e, t);
}
function Of() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function fa(e, t, r) {
  return Of() ? fa = Reflect.construct : fa = function(a, s, d) {
    var f = [null];
    f.push.apply(f, s);
    var h = Function.bind.apply(a, f), m = new h();
    return d && Oi(m, d.prototype), m;
  }, fa.apply(null, arguments);
}
function lr(e) {
  return Nf(e) || Rf(e) || If(e) || Df();
}
function Nf(e) {
  if (Array.isArray(e)) return Ni(e);
}
function Rf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function If(e, t) {
  if (e) {
    if (typeof e == "string") return Ni(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ni(e, t);
  }
}
function Ni(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Df() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Pf = Object.hasOwnProperty, Es = Object.setPrototypeOf, Lf = Object.isFrozen, Mf = Object.getPrototypeOf, Ff = Object.getOwnPropertyDescriptor, At = Object.freeze, Wt = Object.seal, $f = Object.create, Ul = typeof Reflect < "u" && Reflect, Ta = Ul.apply, Ri = Ul.construct;
Ta || (Ta = function(t, r, n) {
  return t.apply(r, n);
});
At || (At = function(t) {
  return t;
});
Wt || (Wt = function(t) {
  return t;
});
Ri || (Ri = function(t, r) {
  return fa(t, lr(r));
});
var Uf = Vt(Array.prototype.forEach), js = Vt(Array.prototype.pop), Tn = Vt(Array.prototype.push), ha = Vt(String.prototype.toLowerCase), ni = Vt(String.prototype.toString), Os = Vt(String.prototype.match), or = Vt(String.prototype.replace), zf = Vt(String.prototype.indexOf), Bf = Vt(String.prototype.trim), St = Vt(RegExp.prototype.test), ai = qf(TypeError);
function Vt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Ta(e, t, n);
  };
}
function qf(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ri(e, r);
  };
}
function Re(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : ha, Es && Es(e, null);
  for (var a = t.length; a--; ) {
    var s = t[a];
    if (typeof s == "string") {
      var d = r(s);
      d !== s && (Lf(t) || (t[a] = d), s = d);
    }
    e[s] = !0;
  }
  return e;
}
function zr(e) {
  var t = $f(null), r;
  for (r in e)
    Ta(Pf, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function ia(e, t) {
  for (; e !== null; ) {
    var r = Ff(e, t);
    if (r) {
      if (r.get)
        return Vt(r.get);
      if (typeof r.value == "function")
        return Vt(r.value);
    }
    e = Mf(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var Ns = At(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ii = At(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), oi = At(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Hf = At(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), si = At(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Wf = At(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rs = At(["#text"]), Is = At(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), li = At(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ds = At(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), oa = At(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Vf = Wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Gf = Wt(/<%[\w\W]*|[\w\W]*%>/gm), Yf = Wt(/\${[\w\W]*}/gm), Zf = Wt(/^data-[\-\w.\u00B7-\uFFFF]/), Xf = Wt(/^aria-[\-\w]+$/), Kf = Wt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Jf = Wt(/^(?:\w+script|data):/i), Qf = Wt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), eh = Wt(/^html$/i), th = Wt(/^[a-z][.\w]*(-[.\w]+)+$/i), rh = function() {
  return typeof window > "u" ? null : window;
}, nh = function(t, r) {
  if (jr(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var n = null, a = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(a) && (n = r.currentScript.getAttribute(a));
  var s = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(s, {
      createHTML: function(f) {
        return f;
      },
      createScriptURL: function(f) {
        return f;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function zl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : rh(), t = function(x) {
    return zl(x);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, s = e.HTMLTemplateElement, d = e.Node, f = e.Element, h = e.NodeFilter, m = e.NamedNodeMap, C = m === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : m, _ = e.HTMLFormElement, O = e.DOMParser, U = e.trustedTypes, E = f.prototype, S = ia(E, "cloneNode"), I = ia(E, "nextSibling"), F = ia(E, "childNodes"), $ = ia(E, "parentNode");
  if (typeof s == "function") {
    var X = n.createElement("template");
    X.content && X.content.ownerDocument && (n = X.content.ownerDocument);
  }
  var G = nh(U, r), T = G ? G.createHTML("") : "", oe = n, ce = oe.implementation, Se = oe.createNodeIterator, Ie = oe.createDocumentFragment, $e = oe.getElementsByTagName, De = r.importNode, fe = {};
  try {
    fe = zr(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var ue = {};
  t.isSupported = typeof $ == "function" && ce && ce.createHTMLDocument !== void 0 && fe !== 9;
  var Ce = Vf, ge = Gf, He = Yf, Ae = Zf, _e = Xf, Fe = Jf, We = Qf, Ve = th, B = Kf, R = null, z = Re({}, [].concat(lr(Ns), lr(ii), lr(oi), lr(si), lr(Rs))), q = null, v = Re({}, [].concat(lr(Is), lr(li), lr(Ds), lr(oa))), Y = Object.seal(Object.create(null, {
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
  })), j = null, ie = null, re = !0, ee = !0, K = !1, se = !0, he = !1, ne = !0, de = !1, ae = !1, ye = !1, Ue = !1, me = !1, nt = !1, Xe = !0, we = !1, J = "user-content-", pe = !0, at = !1, et = {}, Me = null, ur = Re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), dr = null, mr = Re({}, ["audio", "video", "img", "source", "image", "track"]), jt = null, Mt = Re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ot = "http://www.w3.org/1998/Math/MathML", Nt = "http://www.w3.org/2000/svg", lt = "http://www.w3.org/1999/xhtml", bt = lt, Zt = !1, mt = null, gr = Re({}, [Ot, Nt, lt], ni), ut, Be = ["application/xhtml+xml", "text/html"], Xt = "text/html", ke, pt = null, _t = n.createElement("form"), Ft = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, vt = function(x) {
    pt && pt === x || ((!x || jr(x) !== "object") && (x = {}), x = zr(x), ut = // eslint-disable-next-line unicorn/prefer-includes
    Be.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? ut = Xt : ut = x.PARSER_MEDIA_TYPE, ke = ut === "application/xhtml+xml" ? ni : ha, R = "ALLOWED_TAGS" in x ? Re({}, x.ALLOWED_TAGS, ke) : z, q = "ALLOWED_ATTR" in x ? Re({}, x.ALLOWED_ATTR, ke) : v, mt = "ALLOWED_NAMESPACES" in x ? Re({}, x.ALLOWED_NAMESPACES, ni) : gr, jt = "ADD_URI_SAFE_ATTR" in x ? Re(
      zr(Mt),
      // eslint-disable-line indent
      x.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      ke
      // eslint-disable-line indent
    ) : Mt, dr = "ADD_DATA_URI_TAGS" in x ? Re(
      zr(mr),
      // eslint-disable-line indent
      x.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      ke
      // eslint-disable-line indent
    ) : mr, Me = "FORBID_CONTENTS" in x ? Re({}, x.FORBID_CONTENTS, ke) : ur, j = "FORBID_TAGS" in x ? Re({}, x.FORBID_TAGS, ke) : {}, ie = "FORBID_ATTR" in x ? Re({}, x.FORBID_ATTR, ke) : {}, et = "USE_PROFILES" in x ? x.USE_PROFILES : !1, re = x.ALLOW_ARIA_ATTR !== !1, ee = x.ALLOW_DATA_ATTR !== !1, K = x.ALLOW_UNKNOWN_PROTOCOLS || !1, se = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, he = x.SAFE_FOR_TEMPLATES || !1, ne = x.SAFE_FOR_XML !== !1, de = x.WHOLE_DOCUMENT || !1, Ue = x.RETURN_DOM || !1, me = x.RETURN_DOM_FRAGMENT || !1, nt = x.RETURN_TRUSTED_TYPE || !1, ye = x.FORCE_BODY || !1, Xe = x.SANITIZE_DOM !== !1, we = x.SANITIZE_NAMED_PROPS || !1, pe = x.KEEP_CONTENT !== !1, at = x.IN_PLACE || !1, B = x.ALLOWED_URI_REGEXP || B, bt = x.NAMESPACE || lt, Y = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && Ft(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Y.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && Ft(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Y.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Y.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), he && (ee = !1), me && (Ue = !0), et && (R = Re({}, lr(Rs)), q = [], et.html === !0 && (Re(R, Ns), Re(q, Is)), et.svg === !0 && (Re(R, ii), Re(q, li), Re(q, oa)), et.svgFilters === !0 && (Re(R, oi), Re(q, li), Re(q, oa)), et.mathMl === !0 && (Re(R, si), Re(q, Ds), Re(q, oa))), x.ADD_TAGS && (R === z && (R = zr(R)), Re(R, x.ADD_TAGS, ke)), x.ADD_ATTR && (q === v && (q = zr(q)), Re(q, x.ADD_ATTR, ke)), x.ADD_URI_SAFE_ATTR && Re(jt, x.ADD_URI_SAFE_ATTR, ke), x.FORBID_CONTENTS && (Me === ur && (Me = zr(Me)), Re(Me, x.FORBID_CONTENTS, ke)), pe && (R["#text"] = !0), de && Re(R, ["html", "head", "body"]), R.table && (Re(R, ["tbody"]), delete j.tbody), At && At(x), pt = x);
  }, pr = Re({}, ["mi", "mo", "mn", "ms", "mtext"]), Kt = Re({}, ["annotation-xml"]), yr = Re({}, ["title", "style", "font", "a", "script"]), Et = Re({}, ii);
  Re(Et, oi), Re(Et, Hf);
  var $t = Re({}, si);
  Re($t, Wf);
  var Cr = function(x) {
    var N = $(x);
    (!N || !N.tagName) && (N = {
      namespaceURI: bt,
      tagName: "template"
    });
    var Z = ha(x.tagName), le = ha(N.tagName);
    return mt[x.namespaceURI] ? x.namespaceURI === Nt ? N.namespaceURI === lt ? Z === "svg" : N.namespaceURI === Ot ? Z === "svg" && (le === "annotation-xml" || pr[le]) : !!Et[Z] : x.namespaceURI === Ot ? N.namespaceURI === lt ? Z === "math" : N.namespaceURI === Nt ? Z === "math" && Kt[le] : !!$t[Z] : x.namespaceURI === lt ? N.namespaceURI === Nt && !Kt[le] || N.namespaceURI === Ot && !pr[le] ? !1 : !$t[Z] && (yr[Z] || !Et[Z]) : !!(ut === "application/xhtml+xml" && mt[x.namespaceURI]) : !1;
  }, it = function(x) {
    Tn(t.removed, {
      element: x
    });
    try {
      x.parentNode.removeChild(x);
    } catch {
      try {
        x.outerHTML = T;
      } catch {
        x.remove();
      }
    }
  }, Rt = function(x, N) {
    try {
      Tn(t.removed, {
        attribute: N.getAttributeNode(x),
        from: N
      });
    } catch {
      Tn(t.removed, {
        attribute: null,
        from: N
      });
    }
    if (N.removeAttribute(x), x === "is" && !q[x])
      if (Ue || me)
        try {
          it(N);
        } catch {
        }
      else
        try {
          N.setAttribute(x, "");
        } catch {
        }
  }, Ut = function(x) {
    var N, Z;
    if (ye)
      x = "<remove></remove>" + x;
    else {
      var le = Os(x, /^[\r\n\t ]+/);
      Z = le && le[0];
    }
    ut === "application/xhtml+xml" && bt === lt && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    var Te = G ? G.createHTML(x) : x;
    if (bt === lt)
      try {
        N = new O().parseFromString(Te, ut);
      } catch {
      }
    if (!N || !N.documentElement) {
      N = ce.createDocument(bt, "template", null);
      try {
        N.documentElement.innerHTML = Zt ? T : Te;
      } catch {
      }
    }
    var je = N.body || N.documentElement;
    return x && Z && je.insertBefore(n.createTextNode(Z), je.childNodes[0] || null), bt === lt ? $e.call(N, de ? "html" : "body")[0] : de ? N.documentElement : je;
  }, fr = function(x) {
    return Se.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, zt = function(x) {
    return x instanceof _ && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof C) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, xt = function(x) {
    return jr(d) === "object" ? x instanceof d : x && jr(x) === "object" && typeof x.nodeType == "number" && typeof x.nodeName == "string";
  }, ct = function(x, N, Z) {
    ue[x] && Uf(ue[x], function(le) {
      le.call(t, N, Z, pt);
    });
  }, It = function(x) {
    var N;
    if (ct("beforeSanitizeElements", x, null), zt(x) || St(/[\u0080-\uFFFF]/, x.nodeName))
      return it(x), !0;
    var Z = ke(x.nodeName);
    if (ct("uponSanitizeElement", x, {
      tagName: Z,
      allowedTags: R
    }), x.hasChildNodes() && !xt(x.firstElementChild) && (!xt(x.content) || !xt(x.content.firstElementChild)) && St(/<[/\w]/g, x.innerHTML) && St(/<[/\w]/g, x.textContent) || Z === "select" && St(/<template/i, x.innerHTML) || x.nodeType === 7 || ne && x.nodeType === 8 && St(/<[/\w]/g, x.data))
      return it(x), !0;
    if (!R[Z] || j[Z]) {
      if (!j[Z] && Jt(Z) && (Y.tagNameCheck instanceof RegExp && St(Y.tagNameCheck, Z) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(Z)))
        return !1;
      if (pe && !Me[Z]) {
        var le = $(x) || x.parentNode, Te = F(x) || x.childNodes;
        if (Te && le)
          for (var je = Te.length, qe = je - 1; qe >= 0; --qe) {
            var ot = S(Te[qe], !0);
            ot.__removalCount = (x.__removalCount || 0) + 1, le.insertBefore(ot, I(x));
          }
      }
      return it(x), !0;
    }
    return x instanceof f && !Cr(x) || (Z === "noscript" || Z === "noembed" || Z === "noframes") && St(/<\/no(script|embed|frames)/i, x.innerHTML) ? (it(x), !0) : (he && x.nodeType === 3 && (N = x.textContent, N = or(N, Ce, " "), N = or(N, ge, " "), N = or(N, He, " "), x.textContent !== N && (Tn(t.removed, {
      element: x.cloneNode()
    }), x.textContent = N)), ct("afterSanitizeElements", x, null), !1);
  }, br = function(x, N, Z) {
    if (Xe && (N === "id" || N === "name") && (Z in n || Z in _t))
      return !1;
    if (!(ee && !ie[N] && St(Ae, N))) {
      if (!(re && St(_e, N))) {
        if (!q[N] || ie[N]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Jt(x) && (Y.tagNameCheck instanceof RegExp && St(Y.tagNameCheck, x) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(x)) && (Y.attributeNameCheck instanceof RegExp && St(Y.attributeNameCheck, N) || Y.attributeNameCheck instanceof Function && Y.attributeNameCheck(N)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            N === "is" && Y.allowCustomizedBuiltInElements && (Y.tagNameCheck instanceof RegExp && St(Y.tagNameCheck, Z) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(Z)))
          ) return !1;
        } else if (!jt[N]) {
          if (!St(B, or(Z, We, ""))) {
            if (!((N === "src" || N === "xlink:href" || N === "href") && x !== "script" && zf(Z, "data:") === 0 && dr[x])) {
              if (!(K && !St(Fe, or(Z, We, "")))) {
                if (Z)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Jt = function(x) {
    return x !== "annotation-xml" && Os(x, Ve);
  }, Bt = function(x) {
    var N, Z, le, Te;
    ct("beforeSanitizeAttributes", x, null);
    var je = x.attributes;
    if (je) {
      var qe = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: q
      };
      for (Te = je.length; Te--; ) {
        N = je[Te];
        var ot = N, Pe = ot.name, kt = ot.namespaceURI;
        if (Z = Pe === "value" ? N.value : Bf(N.value), le = ke(Pe), qe.attrName = le, qe.attrValue = Z, qe.keepAttr = !0, qe.forceKeepAttr = void 0, ct("uponSanitizeAttribute", x, qe), Z = qe.attrValue, !qe.forceKeepAttr && (Rt(Pe, x), !!qe.keepAttr)) {
          if (!se && St(/\/>/i, Z)) {
            Rt(Pe, x);
            continue;
          }
          he && (Z = or(Z, Ce, " "), Z = or(Z, ge, " "), Z = or(Z, He, " "));
          var er = ke(x.nodeName);
          if (br(er, le, Z)) {
            if (we && (le === "id" || le === "name") && (Rt(Pe, x), Z = J + Z), ne && St(/((--!?|])>)|<\/(style|title)/i, Z)) {
              Rt(Pe, x);
              continue;
            }
            if (G && jr(U) === "object" && typeof U.getAttributeType == "function" && !kt)
              switch (U.getAttributeType(er, le)) {
                case "TrustedHTML": {
                  Z = G.createHTML(Z);
                  break;
                }
                case "TrustedScriptURL": {
                  Z = G.createScriptURL(Z);
                  break;
                }
              }
            try {
              kt ? x.setAttributeNS(kt, Pe, Z) : x.setAttribute(Pe, Z), zt(x) ? it(x) : js(t.removed);
            } catch {
            }
          }
        }
      }
      ct("afterSanitizeAttributes", x, null);
    }
  }, Qt = function b(x) {
    var N, Z = fr(x);
    for (ct("beforeSanitizeShadowDOM", x, null); N = Z.nextNode(); )
      ct("uponSanitizeShadowNode", N, null), !It(N) && (N.content instanceof a && b(N.content), Bt(N));
    ct("afterSanitizeShadowDOM", x, null);
  };
  return t.sanitize = function(b) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N, Z, le, Te, je;
    if (Zt = !b, Zt && (b = "<!-->"), typeof b != "string" && !xt(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw ai("dirty is not a string, aborting");
      } else
        throw ai("toString is not a function");
    if (!t.isSupported) {
      if (jr(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof b == "string")
          return e.toStaticHTML(b);
        if (xt(b))
          return e.toStaticHTML(b.outerHTML);
      }
      return b;
    }
    if (ae || vt(x), t.removed = [], typeof b == "string" && (at = !1), at) {
      if (b.nodeName) {
        var qe = ke(b.nodeName);
        if (!R[qe] || j[qe])
          throw ai("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof d)
      N = Ut("<!---->"), Z = N.ownerDocument.importNode(b, !0), Z.nodeType === 1 && Z.nodeName === "BODY" || Z.nodeName === "HTML" ? N = Z : N.appendChild(Z);
    else {
      if (!Ue && !he && !de && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return G && nt ? G.createHTML(b) : b;
      if (N = Ut(b), !N)
        return Ue ? null : nt ? T : "";
    }
    N && ye && it(N.firstChild);
    for (var ot = fr(at ? b : N); le = ot.nextNode(); )
      le.nodeType === 3 && le === Te || It(le) || (le.content instanceof a && Qt(le.content), Bt(le), Te = le);
    if (Te = null, at)
      return b;
    if (Ue) {
      if (me)
        for (je = Ie.call(N.ownerDocument); N.firstChild; )
          je.appendChild(N.firstChild);
      else
        je = N;
      return (q.shadowroot || q.shadowrootmod) && (je = De.call(r, je, !0)), je;
    }
    var Pe = de ? N.outerHTML : N.innerHTML;
    return de && R["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && St(eh, N.ownerDocument.doctype.name) && (Pe = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + Pe), he && (Pe = or(Pe, Ce, " "), Pe = or(Pe, ge, " "), Pe = or(Pe, He, " ")), G && nt ? G.createHTML(Pe) : Pe;
  }, t.setConfig = function(b) {
    vt(b), ae = !0;
  }, t.clearConfig = function() {
    pt = null, ae = !1;
  }, t.isValidAttribute = function(b, x, N) {
    pt || vt({});
    var Z = ke(b), le = ke(x);
    return br(Z, le, N);
  }, t.addHook = function(b, x) {
    typeof x == "function" && (ue[b] = ue[b] || [], Tn(ue[b], x));
  }, t.removeHook = function(b) {
    if (ue[b])
      return js(ue[b]);
  }, t.removeHooks = function(b) {
    ue[b] && (ue[b] = []);
  }, t.removeAllHooks = function() {
    ue = {};
  }, t;
}
var ah = zl();
const Gt = (e) => ({ __html: ah.sanitize(e) });
function* Xr(e = "id-", t = 0) {
  let r = t;
  for (; ; )
    r += 1, yield e + r;
}
function ih() {
  const e = (
    // @ts-ignore
    (document.currentScript && document.currentScript.src || "").match(/(.*\/)/)
  );
  return e && e.length > 0 ? e[0].substr(0, e[0].length - 1) : "/";
}
A.shape({
  event: A.string,
  action: A.string,
  name: A.string,
  region: A.string,
  section: A.string,
  component: A.string,
  type: A.string,
  text: A.string
});
function Bl({
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
const In = ({ href: e = null }) => (
  // @ts-ignore
  /* @__PURE__ */ p.jsx(Tr, { label: "Apply now", ariaLabel: "Apply now", href: e, color: "gold" })
);
In.propTypes = {
  href: A.string
};
A.string;
function so({ message: e, type: t }) {
  const [r, n] = ft(""), s = {
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
  return /* @__PURE__ */ p.jsxs(
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
        /* @__PURE__ */ p.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ p.jsx(
          "span",
          {
            "aria-label": s.ariaLabel,
            className: `fa fa-icon ${s.icon}`
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "alert-content", children: e }),
        /* @__PURE__ */ p.jsx("div", { className: "alert-close", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-circle btn-circle-alt-black close",
            "aria-label": "Close",
            onClick: () => n("none"),
            children: /* @__PURE__ */ p.jsx("i", { className: "fas fa-times" })
          }
        ) })
      ]
    }
  );
}
so.propTypes = {
  type: A.oneOf(["error", "info"]).isRequired,
  message: A.string.isRequired
};
function ql({ message: e }) {
  return /* @__PURE__ */ p.jsx(so, { message: e, type: "error" });
}
function oh({ message: e }) {
  return /* @__PURE__ */ p.jsx(so, { message: e, type: "info" });
}
const sh = Qe.div`
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
function Hl() {
  return /* @__PURE__ */ p.jsxs(sh, { "data-testid": "loader", className: "container ball-loader mt-4", children: [
    /* @__PURE__ */ p.jsx("div", { className: "ball-loader-ball ball1" }),
    /* @__PURE__ */ p.jsx("div", { className: "ball-loader-ball ball2" }),
    /* @__PURE__ */ p.jsx("div", { className: "ball-loader-ball ball3" })
  ] });
}
A.shape({
  color: A.oneOf(["gold", "maroon", "gray", "dark"]),
  content: A.shape({
    icon: A.string,
    header: A.string,
    body: A.string
  })
});
const Wl = A.shape({
  ariaLabel: A.string,
  color: A.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: A.string,
  href: A.string,
  label: A.string,
  onClick: A.func,
  size: A.oneOf(["default", "small", "xsmall"])
}), lo = {
  url: A.string,
  altText: A.string,
  cssClass: A.arrayOf(A.string)
}, Vl = {
  text: A.string,
  cssClass: A.arrayOf(A.string)
}, co = {
  type: A.oneOf(["video", "youtube"]),
  url: A.string,
  altText: A.string,
  vttUrl: A.string,
  title: A.string
}, lh = {
  url: A.string,
  text: A.string,
  isActive: A.bool
}, kr = A.shape({
  ...lo
}), Ca = A.shape({
  ...Vl
}), ch = A.shape({
  ...co
}), Gr = A.shape({
  ...lh
}), Gl = A.shape({
  id: A.string,
  sourceType: A.oneOf(["api", "shared-data-source", "static-json"]),
  // default `api`
  sharedDataSourceId: A.string,
  // only if `dataSourceType == "shared-data-source"``
  // eslint-disable-next-line react/forbid-prop-types
  data: A.arrayOf(A.object),
  // only if `dataSourceType == "static-json"``
  apiUrl: A.string
  // only if `dataSourceType == "api"``
}), Ii = A.shape({
  text: A.string,
  url: A.string
}), Br = A.shape({
  icon: A.arrayOf(A.string),
  title: A.string,
  content: A.string,
  buttonLink: Wl
}), Di = A.arrayOf(
  A.shape({
    title: A.string,
    url: A.string
  })
), Yl = A.shape({
  career: Gr,
  growth: A.oneOfType([A.number, A.string]),
  medianSalary: A.string,
  brightOutlook: A.bool,
  greenOccupation: A.bool
}), uh = {
  hideCollegeSchool: A.bool,
  defaultView: A.oneOf(["list-view", "grid-view"]),
  cardDefaultImage: kr
}, dh = A.shape({
  ...uh
}), uo = {
  atAGlance: A.bool,
  applicationRequirements: A.bool,
  changeMajorRequirements: A.bool,
  nextSteps: A.bool,
  affordingCollege: A.bool,
  flexibleDegreeOptions: A.bool,
  careerOutlook: A.bool,
  exampleCareers: A.bool,
  customizeYourCollegeExperience: A.bool,
  globalOpportunity: A.bool,
  attendOnline: A.bool,
  whyChooseAsu: A.bool,
  programContactInfo: A.bool,
  externalAnchors: A.arrayOf(
    A.shape({
      targetIdName: A.string,
      text: A.string
    })
  )
}, Jr = A.shape({
  image: kr,
  title: A.string,
  text: A.string,
  button: Wl
}), Ps = A.shape({
  faculty: Jr,
  programs: Jr,
  research: Jr,
  inclusion: Jr,
  mentors: Jr,
  honors: Jr
}), Zl = {
  hide: A.bool,
  sectionIntroText: A.string,
  cards: Ps,
  defaultCards: Ps
};
A.shape({
  ...uo
});
const ci = A.shape({
  id: A.oneOfType([A.string, A.number]),
  value: A.string
}), Xl = A.shape({
  locations: A.arrayOf(ci),
  asuLocals: A.arrayOf(ci),
  acceleratedConcurrent: ci
}), ph = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, Kl = Object.values(ph), Ls = {
  offeredBy: { icon: "university", title: "Offered by" },
  locations: { icon: "map-marker-alt", title: "Location" },
  firstRequirementMathCourse: {
    icon: "pencil-alt",
    title: "First Required math Course"
  },
  mathIntensity: { icon: "calculator", title: "Math intensity" },
  timeCommitment: { icon: "calendar-alt", title: "Time commitment" }
}, Jl = "grid-view", Pi = "list-view", Ql = "degree-list-programs", ec = "Sorry, Something went wrong.", fh = "STEM-OPT for international students on F-1 visas", hh = `This degree is not found.
  This may be a temporary issue. Please try again in 5 minutes.
  If the issue persists, the degree may no longer be available.`, mh = ih(), gh = (e) => {
  const t = e || mh, r = `${t}/assets/img/detail-page`, n = `${t}/assets/img/listing-page`, a = {
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
}, yh = (e) => {
  if (typeof e == "string") return "Degrees";
  const { program: t, cert: r } = e;
  return t === "undergrad" && r === "true" ? "Undergraduate Minors and Certificates" : t === "undergrad" ? "Undergraduate Degrees" : t === "graduate" && r === "true" ? "Graduate Certificates" : t === "graduate" ? "Graduate Degrees" : "Degrees";
}, po = [
  { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", text: "Polytechnic campus" },
  { id: 2, value: "TEMPE", text: "Tempe campus" },
  { id: 3, value: "WEST", text: "West Valley campus" },
  { id: 4, value: "ONLNE", text: "ASU Online" }
], bh = po[4], tc = [
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
], fo = [
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
], vh = fo[0], Li = (e) => (e == null ? void 0 : e.value) && (e == null ? void 0 : e.value) !== "all", xh = (e) => {
  var t;
  return ((t = [
    ...po,
    ...tc,
    ...fo
  ].find(({ value: r }) => r === e)) == null ? void 0 : t.text) || e;
}, yt = {
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
}, wh = {
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
    text: "",
    url: "https://admission.asu.edu/transfer/thegilavalley"
  },
  CAC: {
    text: "",
    url: "https://admission.asu.edu/transfer/pinal"
  },
  ONLNE: {
    text: "Online",
    url: "https://asuonline.asu.edu"
  },
  CALHC: {
    text: "Lake Havasu",
    url: "https://havasu.asu.edu"
  },
  COCHS: {
    text: "",
    url: "https://admission.asu.edu/transfer/asu-cochise"
  },
  WASHD: {
    text: "",
    url: "https://washingtondc.asu.edu"
  },
  YAVAP: {
    text: "",
    url: "https://admission.asu.edu/transfer/asuyavapai"
  },
  PIMA: {
    text: "",
    url: "https://admission.asu.edu/transfer/pima"
  },
  NEAZ: {
    text: "",
    url: "https://admission.asu.edu/transfer/asu-northeastern-arizona"
  },
  LOSAN: {
    text: "ASU@Los Angeles",
    url: "https://california.asu.edu"
  },
  "TUCSN-undergrad": {
    text: "",
    url: "https://transfer.asu.edu/tucson"
  },
  "TUCSN-graduate": {
    text: "",
    url: "https://admission.asu.edu/contact/graduate"
  },
  MXCTY: {
    text: "",
    url: "https://admission.asu.edu/contact/graduate"
  },
  "AWC-undergrad": {
    text: "",
    url: "https://admission.asu.edu/transfer/asu-yuma"
  },
  "AWC-graduate": {
    text: "",
    url: "https://admission.asu.edu/contact/graduate"
  }
}, Ms = (e, t) => {
  const r = ["TUCSN", "AWC"], n = e.toUpperCase(), a = r.includes(n) ? `${n}-${t}` : n;
  return wh[a];
};
function rc({ anchorMenu: e }) {
  var n, a;
  const t = (n = e == null ? void 0 : e.externalAnchors) == null ? void 0 : n.map((s) => {
    const { targetIdName: d, text: f } = s;
    return {
      targetIdName: d.startsWith("#") ? d.substring(1) : d,
      text: f,
      icon: null
    };
  }), r = Object.keys(yt).filter((s) => e[s]).map((s) => yt[s]).concat(t || []);
  return /* @__PURE__ */ p.jsx(
    vl,
    {
      items: r,
      firstElementId: (a = r[0]) == null ? void 0 : a.targetIdName,
      focusFirstFocusableElement: !1
    }
  );
}
rc.propTypes = {
  anchorMenu: A.shape(uo)
};
function Sh(e, t) {
  const r = Math.floor(e / t), n = e % t;
  return r + (n > 0 ? 1 : 0);
}
const kh = "https://degrees.apps.asu.edu", Th = "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan/", Ch = {
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
}, Ah = {
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
}, Fs = (e) => e.map((t) => ({
  title: t.acadPlanDescription,
  url: t.academicOfficeUrl
})).sort((t, r) => t.title.localeCompare(r.title)), _h = (e) => e == null ? void 0 : e.map((t) => ({
  career: {
    text: t.alternateTitle,
    url: `${kh}/career-details/${t.onetCode}`
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
function nc(e, t) {
  const r = { ...t, ...e };
  if (r.collegeAcadOrg && (r.collegeOrg = r.collegeAcadOrg, delete r.collegeAcadOrg), r.program) {
    const { program: h } = r;
    r.cert === "true" && h === "undergrad" ? r.degreeType = "UGCM" : h === "graduate" ? r.degreeType = "GR" : r.degreeType = "UG", delete r.program;
  }
  r.acadPlan && (r.endpoint += `/${r.acadPlan}`, delete r.acadPlan);
  const { endpoint: n, include: a, ...s } = r, d = a.split(",").map((h) => `include=${h.trim()}`).join("&"), f = Object.keys(s).reduce(
    (h, m) => `${h}&${m}=${r[m]}`,
    ""
  );
  return `${n}?${f}&${d}`;
}
function ja(e, t = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    Kl.includes(e.component) ? e.component : t
  );
}
function Mi(e) {
  return typeof e != "string" ? console.error("Invalid string", e) : e == null ? void 0 : e.replace(
    /\w\S*/g,
    (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
  );
}
function Eh(e) {
  return /<\/?[a-z][\s\S]*>/i.test(e);
}
const ac = "AsuDevTools", jh = {
  isDebug: !1
};
function Oh() {
  const e = JSON.parse(localStorage.getItem(ac));
  return e == null ? void 0 : e.isDebug;
}
window.__AsuDevTools = {
  enableDebug(e) {
    const t = JSON.stringify({
      ...jh,
      isDebug: e
    });
    localStorage.setItem(ac, t);
  }
};
async function ui(e) {
  return e != null && e.length ? (await Promise.all(
    e.map(async (r) => {
      try {
        return await (await Promise.race([
          fetch(
            `${Th}${r}?include=academicOfficeUrl&include=acadPlanDescription`
          ),
          // Timeout after 5 seconds
          new Promise(
            (s, d) => setTimeout(() => d(new Error("timeout")), 1e4)
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
function Nh(e, t) {
  Promise.all(e).then((r) => {
    const n = r[0], a = r[1];
    t({ accelerateData: n, concurrentData: a });
  }).catch(() => {
    t({ accelerateData: [], concurrentData: [] });
  });
}
function Dn({ contents: e = [] }) {
  const t = Xr("paragrap-");
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: e.map(
    (r) => Eh(r.text) ? /* @__PURE__ */ p.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Gt(r.text)
      },
      t.next().value
    ) : /* @__PURE__ */ p.jsx(
      "p",
      {
        className: `${nn(r.cssClass)}`,
        children: r.text
      },
      t.next().value
    )
  ) });
}
Dn.propTypes = {
  contents: A.arrayOf(Ca)
};
const Rh = Ea`
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
`, Ih = Qe.div`
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
`, Dh = Qe.img`
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
function cn({
  title: e,
  image: t,
  contentDirection: r = "left",
  contents: n = [],
  contentChildren: a = null,
  headingTag: s = "H3"
}) {
  const d = Ir(), f = Ir(), h = ja(s);
  function m() {
    const _ = d.current.offsetHeight;
    f.current.style.height = `${_ * 1.2}px`;
  }
  return Tt(() => {
    m();
    let C;
    const _ = () => {
      clearTimeout(C), C = setTimeout(() => m(), 150);
    };
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, [f, d]), /* @__PURE__ */ p.jsxs("div", { className: `uds-image-overlap content-${r}`, children: [
    /* @__PURE__ */ p.jsx(Rh, {}),
    /* @__PURE__ */ p.jsx(
      Dh,
      {
        ref: f,
        className: "img-fluid",
        src: t == null ? void 0 : t.url,
        alt: t == null ? void 0 : t.altText,
        onError: (C) => {
          C.currentTarget.style.display = "none";
        }
      }
    ),
    /* @__PURE__ */ p.jsxs(Ih, { ref: d, className: "content-wrapper", children: [
      /* @__PURE__ */ p.jsx(h, { children: /* @__PURE__ */ p.jsx("span", { className: "highlight-gold", children: e }) }),
      /* @__PURE__ */ p.jsx(Dn, { contents: n }),
      a
    ] })
  ] });
}
cn.propTypes = {
  headingTag: A.string,
  title: A.string,
  contentDirection: A.oneOf(["left", "right"]),
  contents: A.arrayOf(
    A.shape({
      text: A.string
    })
  ),
  image: kr,
  contentChildren: A.element
};
const ic = Ea`
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
`, oc = Qe.main`
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
function Ph({
  baseIconClassName1: e,
  baseIconAriaLabel1: t,
  baseIconStyle1: r,
  baseIconAriaLabel2: n,
  baseIconClassName2: a,
  baseIconStyle2: s,
  ariaLabel: d,
  ariaControls: f,
  dataId: h,
  onClick: m = () => null
}) {
  const [C, _] = ft(!1), O = (S, I, F, $) => /* @__PURE__ */ p.jsx(
    "span",
    {
      style: {
        cursor: "pointer",
        display: I
      },
      children: /* @__PURE__ */ p.jsx(
        "i",
        {
          className: `${S}`,
          "aria-label": F,
          title: F,
          style: $
        }
      )
    }
  ), U = () => {
    _(!C), m(!C);
  }, E = /* @__PURE__ */ p.jsxs(
    "span",
    {
      "data-testid": h,
      role: "button",
      className: "element-focus",
      tabIndex: 0,
      onKeyDown: (S) => S.key === "Enter" && U(),
      onClick: U,
      "aria-label": d,
      "aria-expanded": C,
      "aria-controls": f,
      children: [
        O(
          e,
          C ? "" : "none",
          t,
          r
        ),
        O(
          a,
          C ? "none" : "",
          n,
          s
        )
      ]
    }
  );
  return Ys(() => E, [C]);
}
Qe.div`
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
const di = (e) => /* @__PURE__ */ p.jsx("span", {}), Lh = ({
  onClick: e = () => null,
  ariaLabel: t,
  ariaControls: r,
  dataId: n
}) => Ph({
  dataId: n,
  baseIconClassName1: "fas fa-chevron-up",
  baseIconClassName2: "fas fa-chevron-down",
  onClick: e,
  ariaLabel: t,
  ariaControls: r
}), un = Ws(null), ho = ({ listPageProps: e, detailPageProps: t, children: r }) => {
  const { detailPageDefault: n, listingPageDefault: a } = Ys(
    () => gh((e || t).appPathFolder),
    []
  ), s = {
    detailPageDefault: n,
    listingPageDefault: a
  }, d = {
    listPageProps: e,
    detailPageProps: t
  };
  return /* @__PURE__ */ p.jsx(
    un.Provider,
    {
      value: {
        state: d,
        defaultState: s
      },
      children: r
    }
  );
};
ho.propTypes = {
  children: A.oneOfType([
    A.arrayOf(A.element),
    A.element
  ]),
  listPageProps: A.shape({}),
  detailPageProps: A.shape({})
};
const Mh = ({
  dataSource: e,
  tableView: t = [],
  programs: r,
  stateFilters: n
}) => {
  const { collegeAcadOrg: a, departmentCode: s } = e;
  Tt(() => {
    if (!r || !Oh()) return;
    const d = "background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;", f = "font-size:30px;", h = "font-size:24px;", m = "font-size: 18px; margin-left: 0.5rem;";
    console.group("<< ASU Degree Page >>"), console.log("%c🏫 Listing Page Programs 📚", d + f), console.log(
      `%cTotal programs found: ${r.length}`,
      d + m
    ), console.log("%cPrograms found", d + m), console.log(r), console.log(
      `%cTotal programs loaded: ${t.length}`,
      d + m
    ), console.log("%cPrograms loaded", d + m), console.log(t), console.log("%cPage Filters", d + h), console.log(
      `%c- collegeAcadOrg:${a}`,
      d + m
    ), console.log(
      `%c- departmentCode:${s}`,
      d + m
    ), console.log("%cSearch Filters", d + h), console.log(n), console.groupEnd();
  });
}, $s = (e) => e.degreeType === "UG", sc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, lc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Fh = (e) => Object.keys(e).length > 0 ? lc(e) || sc(e) : !0, Cn = (e) => {
  const { owners: t } = e;
  return t ? t.reduce(
    (n, a) => n.percentOwned > a.percentOwned ? n : a
  ) : null;
};
function an(e = {}) {
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
    isUndergradProgram: () => $s(e),
    isPhdOrMasters: () => e.degreeDescriptionShort !== "CERT",
    // Only called in functions that already checked if its a grad program
    isGradProgram: () => e.degreeType === "GR",
    // GR is present for grad degrees and grad certificates
    isMinorOrCertificate: () => e.degreeType === "UGCM" || e.degreeType === "GR" && e.acadPlanTypeDescription === "Certificate",
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => $s(e) ? "undergrad" : "graduate",
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
        return r = e.degreeMajorMap, `${r}`;
      const n = e.degreeRequirements;
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
    getAccelerateDegrees: async () => e.acceleratedAcadPlanCodes ? ui(e.acceleratedAcadPlanCodes) : [],
    getConcurrentDegrees: async () => e.concurrentAcadPlanCodes ? ui(e.concurrentAcadPlanCodes) : [],
    getCollegeDesc: () => {
      var t;
      return (t = Cn(e)) == null ? void 0 : t.collegeDescription;
    },
    getCollegeUrl: () => {
      var t;
      return ((t = Cn(e)) == null ? void 0 : t.collegeUrl) || "";
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
      return (t = Cn(e)) == null ? void 0 : t.departmentDescription;
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
    getConcurrentDegreeMajorMaps: () => ui(e.concurrentAcadPlanCodes),
    getChangeMajor: () => e.changeMajorRequirementsText,
    getAsuCareerOpportunity: () => e.careerOpportunities,
    getGlobalExp: () => {
      var t;
      return (t = e.globalExperienceText) == null ? void 0 : t.trim();
    },
    /** @return {string} */
    getCollegeAcadOrg: () => {
      var t;
      return (t = Cn(e)) == null ? void 0 : t.collegeAcadOrg;
    },
    /** @return {Array} */
    getCollegeAcadOrgJoint: () => {
      const { owners: t } = e;
      return t ? t.map((n) => n.collegeAcadOrg) : [];
    },
    /** @return {string} */
    getDepartmentCode: () => {
      var t;
      return (t = Cn(e)) == null ? void 0 : t.departmentAcadOrg;
    },
    /** @return {Object.<string, string>} */
    getGraduateApplyDates: () => e.applicationDeadlines,
    hasGraduateApplyDates: () => sc(e),
    /** @return {Object.<string, string>} */
    getPlanDeadlines: () => e.applicationDeadlines,
    hasPlanDeadlines: () => lc(e),
    isValidActiveProgram: () => Fh(e),
    /** @return {boolean} */
    getAsuDegSrchFlg: () => e.activeInDegreeSearch,
    getAsuCustomText: () => e.customText,
    getRequiredCoursesLabel: () => e.acadPlanTypeDescription === "Minor" ? "Minor" : e.acadPlanTypeDescription === "Certificate" ? "Certificate" : "Major",
    getStemOptText: () => e.stemOptText,
    getSubPlnMajorMaps: () => {
      if (!e.subplans || !e.majorMapSubplans) return [];
      let t = [...e.subplans].filter(
        (d) => d.campusesOffered
      );
      const r = [...e.majorMapSubplans], n = (d, f) => d.filter(
        (h) => h.acadSubPlanCode !== f
      ), a = (d, f) => d.some(
        (h) => h.acadSubPlanCode !== f
      ), s = [];
      for (let d = r.length - 1; d >= 0 && t.length !== 0; d -= 1) {
        const f = r[d];
        (f.defaultFlag || a(
          t,
          f.acadSubPlanCode
        )) && (t = n(
          t,
          f.acadSubPlanCode
        ), s.push(f));
      }
      return s;
    },
    getSubPln: () => e.subplans
  };
}
function $h(e) {
  const t = e.getProgramType(), r = [], n = (f) => ({
    text: f,
    url: ""
  }), a = (f) => ({
    text: "Online",
    url: f
  }), s = e.getCampusList().map((f) => f.campusCode);
  s.length > 0 && r.push(
    ...s.map(
      (f) => f === "ONLNE" && a(e.getCurriculumUrl()) || Ms(f, t) || n(f)
    )
  );
  const d = e.getCampusWue();
  return d && r.push(
    Ms(d, t) || n(d)
  ), r;
}
const Uh = (e, t) => {
  const r = { ...e };
  return r.globalOpportunity && !t.getGlobalExp() && (r.globalOpportunity = !1), r.careerOutlook && !t.getAsuCareerOpportunity() && (r.careerOutlook = !1), r.attendOnline && !t.getCurriculumUrl() && (r.attendOnline = !1), r;
}, zh = (e) => {
  var a;
  const t = Object.values(e).filter(
    (s) => s === !0
  );
  return ((a = e == null ? void 0 : e.externalAnchors) == null ? void 0 : a.length) > 0 || t.length > 0;
};
function Bh(e) {
  return "";
}
function qh(e) {
  return "";
}
function Hh() {
  return "";
}
function Oa(e, t) {
  let r = t || "";
  return r = r.replaceAll("{INSTITUTION_CODE}", e.getInstitution()).replaceAll("{ACAD_PLAN_CODE}", e.getAcadPlan()), r;
}
function cc(e, t) {
  return `${Oa(e, t)}#${yt.flexibleDegreeOptions.acceleratedId}`;
}
function Us({
  programs: e = [],
  filters: {
    collegeAcadOrg: t,
    departmentCode: r,
    acceleratedConcurrent: n,
    locations: a = [],
    keyword: s,
    blacklistAcadPlans: d,
    program: f,
    showCerts: h
  }
}) {
  const m = (F) => !t || F.getCollegeAcadOrgJoint().includes(t), C = (F) => !r || F.getDepartmentCode().includes(r), _ = (F) => {
    var $;
    return !a.length || (($ = F.getCampusList()) == null ? void 0 : $.some((X) => a.some((G) => G.value === X.campusCode)));
  }, O = (F = {}) => {
    var $;
    return !Li(n) || (($ = F[n.value]) == null ? void 0 : $.length) > 0;
  }, U = (F, $) => $ ? new RegExp($, "i").test(F.getFullDescription()) : !0, E = (F) => !(d != null && d.includes(F.getAcadPlan())), S = (F) => f === "undergrad" ? !0 : h === "true" && f === "graduate" ? F.isMinorOrCertificate() : F.isPhdOrMasters(), I = (F) => {
    const $ = an(F);
    return m($) && C($) && _($) && O(F) && U($, s) && E($) && S($);
  };
  return e.filter(I);
}
const Wh = (e) => e.sort(
  (r, n) => r.acadPlanMarketingDescription.localeCompare(
    n.acadPlanMarketingDescription
  )
), Rr = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: d = "",
  component: f = ""
}) => {
  const { dataLayer: h } = window, m = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: d.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: f.toLowerCase()
  };
  h && h.push(m);
};
function mo({ breadcrumbs: e, section: t }) {
  const r = Xr("breadcrumb-");
  return e && /* @__PURE__ */ p.jsx("nav", { "aria-label": "breadcrumbs", "data-testid": "breadcrumbs", children: /* @__PURE__ */ p.jsx("ol", { className: "breadcrumb bg-white", children: e.map(
    (n) => n != null && n.isActive ? /* @__PURE__ */ p.jsx(
      "li",
      {
        className: "breadcrumb-item active",
        "aria-current": "page",
        children: /* @__PURE__ */ p.jsx(
          "a",
          {
            href: n == null ? void 0 : n.url,
            onClick: () => Rr({
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
    ) : /* @__PURE__ */ p.jsx("li", { className: "breadcrumb-item", children: /* @__PURE__ */ p.jsx(
      "a",
      {
        href: n == null ? void 0 : n.url,
        onClick: () => Rr({
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
  breadcrumbs: A.arrayOf(Gr),
  section: A.string
};
const Vh = () => /* @__PURE__ */ p.jsx("div", { className: "container", "data-testid": "browse-title", children: /* @__PURE__ */ p.jsx("h2", { children: /* @__PURE__ */ p.jsx("span", { className: "highlight-gold", children: "Browse degrees" }) }) }), pi = ({
  id: e,
  label: t,
  selected: r,
  multiple: n,
  options: a,
  onChange: s
}) => /* @__PURE__ */ p.jsxs("div", { className: "form-group", children: [
  /* @__PURE__ */ p.jsx("label", { htmlFor: e, children: t }),
  /* @__PURE__ */ p.jsx(
    "select",
    {
      className: "form-select",
      id: e,
      "data-testid": e,
      multiple: n,
      onChange: (d) => s(e, d),
      value: r,
      children: a == null ? void 0 : a.map((d) => /* @__PURE__ */ p.jsx("option", { id: d.id, value: d.value, children: d.text }, d.id))
    }
  )
] }), Gh = Qe.div`
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
`, Yh = Qe.button`
  font-weight: 400;
  text-decoration: underline;
`, Zh = {
  event: "select",
  action: "click",
  name: "onclick"
}, Xh = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link"
}, An = {
  isActive: !1,
  locations: [],
  asuLocals: [],
  acceleratedConcurrent: { value: "all", text: "" },
  keyword: null,
  blacklistAcadPlans: []
}, fi = (e) => ({
  id: e.id,
  value: e.value,
  text: e.text
}), Kh = (e) => e.map((t) => t.text).join(", "), zs = (e, t) => {
  Rr({ ...Zh, type: e, text: t });
}, Bs = (e) => {
  Rr({ ...Xh, text: e });
}, uc = ({ value: e, onChange: t, onApply: r, onClean: n }) => {
  const a = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (h, { target: { selectedOptions: m } }) => {
      let C = [], _ = [];
      const O = Array.from(m, fi), { locations: U, asuLocals: E } = e;
      ({
        locationsRender: () => {
          C = O, _ = E;
        },
        asuLocalsRender: () => {
          _ = O, C = U;
        }
      })[`${h}Render`](), t({
        ...e,
        locations: C,
        asuLocals: _
      }), zs({
        locations: "location or online",
        asuLocals: "as local"
      }[h], Kh(O));
    }
  ), s = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (h, { target: { selectedOptions: m } }) => {
      t({ ...e, [h]: fi(m[0]) }), zs(
        "accelerated/concurrent",
        fi(m[0]).text
      );
    }
  ), d = () => {
    r == null || r({
      ...e,
      isActive: !0
    });
  }, f = () => {
    t(An), n == null || n();
  };
  return /* @__PURE__ */ p.jsxs(Gh, { className: "container", "data-testid": "filters", children: [
    /* @__PURE__ */ p.jsx("h4", { children: "Filter your results" }),
    /* @__PURE__ */ p.jsxs("form", { className: "mt-3 uds-form row", children: [
      /* @__PURE__ */ p.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ p.jsx(
        pi,
        {
          multiple: !0,
          id: "locations",
          label: "Campuses or online",
          selected: e.locations.map((h) => h.value),
          options: po,
          onChange: a
        }
      ) }),
      /* @__PURE__ */ p.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ p.jsx(
        pi,
        {
          multiple: !0,
          id: "asuLocals",
          label: "ASU location, ASU Local",
          selected: e.asuLocals.map((h) => h.value),
          options: tc,
          onChange: a
        }
      ) }),
      /* @__PURE__ */ p.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ p.jsx(
        pi,
        {
          id: "acceleratedConcurrent",
          label: "Accelerated, Concurrent",
          selected: e.acceleratedConcurrent.value,
          options: fo,
          onChange: s
        }
      ) })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "hint-container", children: /* @__PURE__ */ p.jsx("p", { children: /* @__PURE__ */ p.jsx("small", { children: "*CTRL + Click to select multiple" }) }) }),
    /* @__PURE__ */ p.jsxs("div", { className: "filter-action-buttons", children: [
      /* @__PURE__ */ p.jsx(
        Tr,
        {
          "data-testid": "btn-apply-filter",
          color: "maroon",
          label: "Apply filters",
          ariaLabel: "Apply filters",
          size: "default",
          onClick: () => {
            d(), Bs("apply filters");
          }
        }
      ),
      /* @__PURE__ */ p.jsx(
        Yh,
        {
          "data-testid": "btn-clear-filters",
          className: "btn btn-link",
          onClick: () => {
            f(), Bs("clean filters");
          },
          children: "Clear filters"
        }
      )
    ] })
  ] });
};
uc.propTypes = {
  value: Xl,
  onChange: A.func,
  onApply: A.func,
  onClean: A.func
};
function dc({
  value: { isActive: e, locations: t, asuLocals: r, acceleratedConcurrent: n } = {},
  onRemove: a
}) {
  const s = Xr("filter-"), d = (t == null ? void 0 : t.length) + (r == null ? void 0 : r.length) + (Li(n) ? 1 : 0), f = (h, m) => {
    const { text: C } = m;
    return /* @__PURE__ */ p.jsxs(
      "span",
      {
        tabIndex: -1,
        role: "button",
        "aria-label": `Remove filter ${C}`,
        "data-filter-id": h,
        onKeyDown: () => a(h, m),
        onClick: () => a(h, m),
        className: "btn btn-tag btn-tag-alt-white d-inline-flex align-items-center me-2",
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "pe-1", children: C }),
          /* @__PURE__ */ p.jsx("i", { className: "fas fa-times" })
        ]
      },
      s.next().value
    );
  };
  return /* @__PURE__ */ p.jsxs("div", { "data-testid": "filters-summary", children: [
    /* @__PURE__ */ p.jsx("header", { children: /* @__PURE__ */ p.jsx("strong", { children: "Applied filters" }) }),
    /* @__PURE__ */ p.jsx("div", { "data-testid": "summary-filter-tags", children: !e || d === 0 ? /* @__PURE__ */ p.jsx("span", { children: "No filters applied" }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      t.map((h) => f("locations", h)),
      r.map((h) => f("asuLocals", h)),
      (Li(n) ? [n] : []).map((h) => f("acceleratedConcurrent", h))
    ] }) })
  ] });
}
dc.propTypes = {
  value: Xl,
  onRemove: A.func
};
const Jh = Qe.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`, Qh = Qe.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;
function em({
  applyNowUrl: e,
  title: t,
  contents: r,
  photoGrid: n
}) {
  const a = ja(t);
  return /* @__PURE__ */ p.jsx(
    "section",
    {
      className: "container",
      "data-type": "text-photo-grid",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ p.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ p.jsx(a, { className: "mt-0", children: /* @__PURE__ */ p.jsx("span", { className: `${nn(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ p.jsx(Dn, { contents: r }),
          /* @__PURE__ */ p.jsx(In, { href: e })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "col-sm-12 col-md-7 d-none d-sm-none d-md-block", children: /* @__PURE__ */ p.jsx(Jh, { className: "row", children: n.images.map((s, d) => /* @__PURE__ */ p.jsx(
          "div",
          {
            className: "photo-item col-sm-12 col-md-6 col-lg-6",
            children: /* @__PURE__ */ p.jsx(
              "img",
              {
                className: `mg-fluid ${nn(s.cssClass)}`,
                src: s.url,
                alt: s.altText,
                style: { maxWidth: "100%" }
              }
            )
          },
          `img-${d + 1}`
        )) }) })
      ] })
    }
  );
}
function tm({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n,
  video: a
}) {
  const s = ja(t);
  return /* @__PURE__ */ p.jsx(
    Qh,
    {
      className: "container",
      "data-type": "text-media",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ p.jsxs("div", { className: "row gy-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ p.jsx(s, { className: "mt-0", children: /* @__PURE__ */ p.jsx("span", { className: `${nn(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ p.jsx(Dn, { contents: r }),
          /* @__PURE__ */ p.jsx(In, { href: e })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "col-sm-12 col-md-7 mt-2 mt-sm-0", children: [
          a && /* @__PURE__ */ p.jsx(
            Qi,
            {
              type: a.type,
              url: a.url,
              vttUrl: a.vttUrl,
              title: a.title,
              className: "mt-0"
            }
          ),
          n && /* @__PURE__ */ p.jsx("div", { className: "uds-img", children: /* @__PURE__ */ p.jsx("img", { src: n.url, className: "img-fluid", alt: n.altText }) })
        ] })
      ] })
    }
  );
}
function rm({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n
}) {
  return /* @__PURE__ */ p.jsx(
    "section",
    {
      className: "container",
      "data-type": "text-image-overlay",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ p.jsx("div", { className: "row", children: /* @__PURE__ */ p.jsx("div", { className: "col-md-12", children: /* @__PURE__ */ p.jsx(
        cn,
        {
          title: t.text,
          contents: r,
          image: n,
          contentDirection: "right",
          contentChildren: /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(In, { href: e }) })
        }
      ) }) })
    }
  );
}
const nm = ({ applyNowUrl: e, title: t, contents: r }) => {
  const n = ja(t);
  return /* @__PURE__ */ p.jsx("section", { className: "container", "data-type": "text", "data-testid": "intro-content", children: /* @__PURE__ */ p.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ p.jsx("div", { className: "col-sm-12 col-md-5", children: /* @__PURE__ */ p.jsx(n, { className: "mt-0", children: /* @__PURE__ */ p.jsx("span", { className: `${nn(t.cssClass)}`, children: t.text }) }) }),
    /* @__PURE__ */ p.jsxs("div", { className: "col-sm-12 col-md-7", children: [
      /* @__PURE__ */ p.jsx(Dn, { contents: r }),
      /* @__PURE__ */ p.jsx(In, { href: e })
    ] })
  ] }) });
}, go = ({
  applyNowUrl: e,
  type: t,
  title: r,
  contents: n,
  image: a,
  video: s,
  photoGrid: d
}) => ({
  text: () => nm({ applyNowUrl: e, title: r, contents: n }),
  "text-media": () => tm({
    applyNowUrl: e,
    title: r,
    contents: n,
    image: a,
    video: s
  }),
  "text-image-overlay": () => rm({ applyNowUrl: e, title: r, contents: n, image: a }),
  "text-photo-grid": () => em({
    applyNowUrl: e,
    title: r,
    contents: n,
    image: a,
    photoGrid: d
  }),
  undefined: () => (console.error(
    `the type '${t}' is not supported by the 'IntroContent' component.`
  ), null)
})[t]();
go.propTypes = {
  applyNowUrl: A.string,
  type: A.oneOf([
    "text",
    "text-media",
    "text-image-overlay",
    "text-photo-grid"
  ]).isRequired,
  video: A.shape({ ...co }),
  image: A.shape({ ...lo }),
  header: Ca,
  title: A.shape({
    ...Vl,
    component: A.oneOf(Kl)
  }),
  contents: A.arrayOf(Ca),
  photoGrid: A.shape({
    images: A.arrayOf(kr)
  })
};
const Na = {
  programs: A.arrayOf(A.object),
  totalRows: A.number,
  loading: A.bool,
  actionUrls: A.shape({
    applyNowUrl: A.string,
    majorInfoUrl: A.string,
    majorInfoOnlineUrl: A.string
  }),
  degreesPerPage: A.number
}, am = Qe.div`
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
`, pc = ({ programs: e, actionUrls: t }) => {
  var d, f, h, m, C;
  const { state: r } = Yt(un), n = (f = (d = r == null ? void 0 : r.listPageProps) == null ? void 0 : d.programList) == null ? void 0 : f.settings, a = ((C = (m = (h = r == null ? void 0 : r.listPageProps) == null ? void 0 : h.programList) == null ? void 0 : m.dataSource) == null ? void 0 : C.program) === "graduate", s = e.map((_) => {
    const O = an(_), U = () => {
      var $;
      const I = O.isOnline() ? O.getOnlineMajorMapURL() : O.getGeneralDegreeMajorMap();
      let F;
      try {
        F = `<a href=${($ = new URL(I)) == null ? void 0 : $.toString()}>${O.getRequiredCoursesLabel()} Map</a>`;
      } catch {
        return "";
      }
      return F;
    }, E = () => `<div>
        ${O.hasConcurrentDegrees() ? "<div className='cell-container'>concurrent</div>" : ""}
        ${O.hasAccelerateDegrees() ? `<div className="cell-container">
                <a href=${cc(
      O,
      t.majorInfoUrl
    )}>
                  4+1 years
                </a>
              </div>` : ""}
    </div>`;
    return {
      content: {
        header: O.getMajorDesc(),
        body: `<ul>
        <li>
          <strong>Major:</strong>
          <br />
            <a href=${Oa(O, t.majorInfoUrl)}>
              ${O.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${O.getDegree()}
        </li>
        ${a ? "" : `<li>
              <strong>Required Courses:</strong>
              <br />${U()}
            </li>`}
        <li>
          <strong>Campus or location:</strong>
          <br />${O.getCampusList().map((S) => Mi(S.campusCode)).join(", ")}
        </li>
        <li>
          <strong>Accelerated/Concurrent:</strong>
          <br />${E() || "-"}
        </li>
        ${n != null && n.hideCollegeSchool ? "" : ` <li>
                  <strong>College/School:</strong>
                  <br />
                  <a href=${O.getCollegeUrl()}>
                    ${O.getCollegeDesc()}
                  </a>
                </li>`}
      </ul>`
      }
    };
  });
  return /* @__PURE__ */ p.jsx(am, { "data-testid": "accordion-view", children: /* @__PURE__ */ p.jsx(qi, { cards: s }) });
};
pc.propTypes = {
  ...Na
};
const im = Qe.section`
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
function fc({ programs: e, loading: t, actionUrls: r }) {
  var h, m, C, _;
  const { defaultState: n, state: a } = Yt(un), s = (_ = (C = (m = (h = a == null ? void 0 : a.listPageProps) == null ? void 0 : h.programList) == null ? void 0 : m.settings) == null ? void 0 : C.cardDefaultImage) == null ? void 0 : _.url, d = n.detailPageDefault.hero.image.url, f = s || d;
  return /* @__PURE__ */ p.jsx(
    im,
    {
      id: Ql,
      className: "container row",
      "data-loading": t,
      "data-testid": "grid-view",
      children: e.map((O) => {
        const U = an(O);
        return /* @__PURE__ */ p.jsx("div", { className: "col col-sm-12 col-md-4 col-lg-3 mb-2", children: /* @__PURE__ */ p.jsx(
          gt,
          {
            type: "degree",
            horizontal: !1,
            clickable: !1,
            image: f,
            imageAltText: "An example image",
            title: U.getMajorDesc(),
            linkLabel: "View Program Details",
            linkUrl: Oa(U, r.majorInfoUrl),
            buttons: [
              {
                color: "maroon",
                size: "small",
                label: "Reqeuest Info",
                href: Hh()
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
fc.propTypes = {
  ...Na
};
const om = [
  {
    dataKey: "Major",
    label: "Major",
    className: "major",
    sortable: !0,
    contentTemplate: ({ resolver: e, rowIndex: t, actionUrls: r, onClick: n }) => /* @__PURE__ */ p.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ p.jsx("a", { href: Oa(e, r == null ? void 0 : r.majorInfoUrl), children: e.getMajorDesc() }),
      /* @__PURE__ */ p.jsx(
        Lh,
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
    contentTemplate: ({ resolver: e }) => /* @__PURE__ */ p.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ p.jsx("span", { children: e.getDegree() }),
      /* @__PURE__ */ p.jsx(
        di,
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
        n = /* @__PURE__ */ p.jsxs("a", { href: s, children: [
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
      const t = Xr("campus-");
      return /* @__PURE__ */ p.jsx("div", { children: e.getCampusList().map((r, n, a) => /* @__PURE__ */ p.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ p.jsx("span", { children: `${Mi(
          xh(r.campusCode)
        )}${n < a.length - 1 ? ", " : ""}` }, r.campusCode),
        /* @__PURE__ */ p.jsx("span", { children: /* @__PURE__ */ p.jsx(
          di,
          {
            popover: {
              title: Mi(r.campusCode),
              body: () => fetch(Bh(r.campusCode)),
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
    contentTemplate: ({ resolver: e, actionUrls: t }) => /* @__PURE__ */ p.jsxs("div", { children: [
      e.getConcurrentDegrees().then((r) => r).length > 0 && /* @__PURE__ */ p.jsx("div", { className: "cell-container", children: "concurrent" }),
      e.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ p.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ p.jsx("a", { href: cc(e, t.majorInfoUrl), children: "4+1 years" }),
        /* @__PURE__ */ p.jsx(
          di,
          {
            popover: {
              title: "4+1 years",
              body: () => fetch(qh(e.getAcadPlan())),
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
    contentTemplate: ({ resolver: e }) => /* @__PURE__ */ p.jsx("a", { href: e.getCollegeUrl(), children: e.getCollegeDesc() })
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
], sm = io`
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
`, lm = Qe.table`
  ${sm}
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
`, cm = ({ resolver: e, id: t }) => {
  const r = nu(), n = (a) => {
    a.key === "Enter" && (r == null || r.current.click());
  };
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsx("header", { children: /* @__PURE__ */ p.jsx("strong", { children: "Program Description:" }) }),
    /* @__PURE__ */ p.jsx("input", { className: "togle-more-text", type: "checkbox", id: `#${t}` }),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "desc-long",
        id: t,
        dangerouslySetInnerHTML: Gt(
          e.getFullDescription()
        )
      }
    ),
    /* @__PURE__ */ p.jsxs(
      "label",
      {
        ref: r,
        className: "label-more-less element-focus",
        htmlFor: `#${t}`,
        role: "button",
        tabIndex: 0,
        onKeyDown: n,
        children: [
          /* @__PURE__ */ p.jsx("span", { "data-testid": "more-text", className: "label-more", children: "[...more]" }),
          /* @__PURE__ */ p.jsx("span", { "data-testid": "less-text", className: "label-less", children: "[...less]" })
        ]
      }
    )
  ] });
}, um = ({ resolver: e }) => /* @__PURE__ */ p.jsxs("div", { children: [
  /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsx("strong", { children: "Additional Program Fee: " }),
    e.hasAsuProgramFee() ? "Yes" : "No"
  ] }),
  /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsx("strong", { children: "Second Language Requirement: " }),
    e.hasAsuLangReqFlag() ? "Yes" : "No"
  ] }),
  e.hasMathReqFlag() && /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsx("strong", { children: "First Required Math Course:" }),
    /* @__PURE__ */ p.jsx("span", { children: e.getMinMathReq() }),
    e.getOtherMathReqCourse() && /* @__PURE__ */ p.jsx(
      "span",
      {
        dangerouslySetInnerHTML: Gt(
          e.getOtherMathReqCourse()
        )
      }
    )
  ] }) }),
  e.getMathIntensity() && /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsx("strong", { children: "Math Intensity:" }),
    e.getMathIntensity()
  ] })
] }), dm = Xr("row-"), hc = ({ programs: e, totalRows: t, loading: r, actionUrls: n }) => {
  var C, _;
  const a = ht.useRef(null), s = ht.useRef(null), { state: d } = Yt(un), f = (_ = (C = d == null ? void 0 : d.listPageProps) == null ? void 0 : C.programList) == null ? void 0 : _.settings;
  let h = om;
  d.listPageProps.programList.dataSource.program === "graduate" && (h = h.filter((O) => O.dataKey !== "RequiredCourses")), f != null && f.hideCollegeSchool && (h = h.filter((O) => O.dataKey !== "CollegeSchool"));
  const m = (O, U) => {
    const E = s.current.children;
    Array.prototype.forEach.call(
      E,
      (I, F) => F !== O && I.setAttribute("data-is-open", "false")
    ), s.current.children[O].setAttribute("data-is-open", String(U));
  };
  return /* @__PURE__ */ p.jsx("section", { className: "container mb-4", "data-testid": "list-view", children: /* @__PURE__ */ p.jsxs(
    lm,
    {
      id: Ql,
      ref: a,
      "data-loading": r,
      title: `${t} program found`,
      children: [
        /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsx("tr", { role: "row", children: h.map((O) => {
          var U;
          return /* @__PURE__ */ p.jsx(
            "th",
            {
              tabIndex: 0,
              className: `${O.className}`,
              scope: "col",
              "aria-label": O.ariaLabel,
              children: ((U = O.headerTemplate) == null ? void 0 : U.call(O)) || /* @__PURE__ */ p.jsx("span", { children: O.label })
            },
            O.dataKey
          );
        }) }) }),
        /* @__PURE__ */ p.jsxs("tbody", { ref: s, "data-testid": "program-rows", children: [
          e.length === 0 ? /* @__PURE__ */ p.jsx("tr", { role: "presentation", children: /* @__PURE__ */ p.jsx(
            "td",
            {
              colSpan: h.length,
              "aria-label": "No result found for the filters applied",
              children: " "
            }
          ) }) : null,
          // programs
          e.map((O, U) => {
            const E = dm.next().value, S = U * 2, I = an(O);
            return /* @__PURE__ */ p.jsxs(Zs, { children: [
              /* @__PURE__ */ p.jsx("tr", { role: "row", children: h.map((F) => {
                var $;
                return /* @__PURE__ */ p.jsx(
                  "td",
                  {
                    className: `${F.className}`,
                    children: ($ = F.contentTemplate) == null ? void 0 : $.call(F, {
                      resolver: I,
                      col: F,
                      row: O,
                      rowIndex: S,
                      onClick: m,
                      actionUrls: n
                    })
                  },
                  `${E}-${F.dataKey}`
                );
              }) }, E),
              /* @__PURE__ */ p.jsxs(
                "tr",
                {
                  id: `row-info-${S}`,
                  className: "row-info",
                  children: [
                    /* @__PURE__ */ p.jsx("td", { colSpan: 3, children: cm({ resolver: I, id: `${E}-more-text` }) }, `${E}-info`),
                    /* @__PURE__ */ p.jsx("td", { colSpan: 2, children: um({ resolver: I }) }, `${E}-extra-info`)
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
hc.propTypes = {
  ...Na
};
const pm = Ea`

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
`, fm = {
  [Jl]: fc,
  [Pi]: hc
};
function mc({
  dataViewComponent: e,
  loading: t,
  programs: r,
  actionUrls: n,
  degreesPerPage: a
}) {
  let s;
  a ? typeof a != "number" && (s = parseInt(a, 10)) : s = 8;
  const d = a || s, f = Sh(r.length, d), h = fm[e], [m, C] = ft([]), _ = (O, U) => {
    const E = (U - 1) * d, S = E + d;
    C(r.slice(E, S));
  };
  return Tt(() => {
    C(r.slice(0, d));
  }, [r]), /* @__PURE__ */ p.jsxs("section", { "data-testid": "program-list", "data-view-type": e, children: [
    /* @__PURE__ */ p.jsx(pm, {}),
    /* @__PURE__ */ p.jsx("div", { className: "desktop-view", children: /* @__PURE__ */ p.jsx(
      h,
      {
        loading: t,
        programs: m,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: a || s
      }
    ) }),
    /* @__PURE__ */ p.jsx("div", { className: "mobile-view mb-2", children: /* @__PURE__ */ p.jsx(
      pc,
      {
        loading: t,
        programs: m,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: a || s
      }
    ) }),
    r.length > 0 ? /* @__PURE__ */ p.jsx(
      Ji,
      {
        totalNumbers: 7,
        type: "default",
        background: "white",
        totalPages: f,
        onChange: _,
        showFirstButton: !0,
        showLastButton: !0
      }
    ) : /* @__PURE__ */ p.jsx("section", { className: "container no-space", children: /* @__PURE__ */ p.jsx(oh, { message: "No result found for the filters applied" }) })
  ] });
}
mc.propTypes = {
  dataViewComponent: A.string,
  ...Na,
  degreesPerPage: A.number
};
const hm = Qe.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
  }
`, gc = ({ value: e, onChange: t, onSearch: r }) => {
  const [n, a] = ft(!1);
  let s;
  Tt(() => () => clearTimeout(s), []);
  const d = (f) => {
    Rr({
      event: "search",
      action: "type",
      name: "onenter",
      type: "search degree programs",
      text: f
    });
  };
  return /* @__PURE__ */ p.jsx(
    hm,
    {
      className: "container mt-5",
      "data-searching": n,
      "data-testid": "search-bar",
      children: /* @__PURE__ */ p.jsx(
        "form",
        {
          "data-testid": "search-bar-form",
          className: "uds-form p-0 col-md-6 col-sm-12",
          onSubmit: (f) => {
            f.preventDefault(), r(), a(!0), s = setTimeout(() => a(!1), 500), clearTimeout(s);
          },
          children: /* @__PURE__ */ p.jsxs("div", { className: "form-group mb-0 me-2", children: [
            /* @__PURE__ */ p.jsx("label", { htmlFor: "search-field", children: "Search" }),
            /* @__PURE__ */ p.jsxs("div", { className: "d-flex row align-items-baseline g-3", children: [
              /* @__PURE__ */ p.jsx("div", { className: "col-sm-12 col-md-6 align-self-end", children: /* @__PURE__ */ p.jsx(
                "input",
                {
                  "data-testid": "search-field",
                  id: "search-field",
                  value: e,
                  type: "text",
                  className: "form-control",
                  placeholder: "Search degree programs",
                  onChange: (f) => {
                    t(f.target.value), d(f.target.value);
                  }
                }
              ) }),
              /* @__PURE__ */ p.jsx("div", { className: "col-sm-12 col-md-6 mt-2 mt-sm-0", children: /* @__PURE__ */ p.jsx(
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
gc.propTypes = {
  value: A.string,
  onChange: A.func,
  onSearch: A.func
};
const mm = Qe(oc)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`, gm = Ea`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`, ym = Qe.div.attrs({ className: "container" })`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`, yo = ({
  appPathFolder: e,
  actionUrls: t,
  hasSearchBar: r = !0,
  hasFilters: n = !0,
  hero: a,
  introContent: s,
  programList: d,
  degreesPerPage: f
}) => {
  var Y;
  const [{ data: h, loading: m, error: C }, _] = $l(), [O, U] = ft(!1), [E, S] = ft([]), [I, F] = ft([]), [$, X] = ft(""), G = (Y = d.settings) == null ? void 0 : Y.defaultView, T = [Pi, Jl].includes(G) ? G : Pi, [oe, ce] = ft(T), Se = nc(d.dataSource, Ch), { defaultState: Ie } = Yt(un), { listingPageDefault: $e } = Ie, {
    collegeAcadOrg: De,
    departmentCode: fe,
    showInactivePrograms: ue,
    blacklistAcadPlans: Ce,
    program: ge,
    cert: He
  } = d.dataSource, [Ae, _e] = ft({
    ...An
  }), [Fe, We] = ft({
    ...An
  });
  Mh({
    dataSource: d.dataSource,
    tableView: E,
    programs: h,
    stateFilters: Ae
  }), Tt(() => {
    typeof window < "u" && Bl({
      packageName: "app-degree-pages",
      component: "ListingPage",
      type: "NA",
      configuration: {
        programList: d,
        degreesPerPage: f
      }
    });
  }, []), Tt(() => {
    _(Se);
  }, [Se]), Tt(() => {
    let j = Wh(h || []);
    j = Us({
      programs: j,
      filters: {
        collegeAcadOrg: De,
        departmentCode: fe,
        blacklistAcadPlans: Ce,
        program: ge,
        showCerts: He
      }
    }), F(j), S(j);
  }, [h, f]);
  const Ve = async (j) => {
    const { acceleratedConcurrent: ie, locations: re, asuLocals: ee, keyword: K } = j;
    U(!0), _(Se);
    const se = Us({
      programs: I,
      filters: {
        collegeAcadOrg: De,
        departmentCode: fe,
        acceleratedConcurrent: ie,
        locations: ee.length > 0 ? re.concat(bh) : re,
        keyword: K,
        showInactivePrograms: ue ?? !1,
        blacklistAcadPlans: Ce,
        program: ge
      }
    });
    _e({ ...j }), We({ ...j }), S(se), U(!1);
  }, B = async () => {
    const j = {
      ...Fe,
      keyword: $
    };
    Ve(j);
  }, R = (j) => {
    m || O || Ve(j);
  }, z = async (j) => {
    _e(j);
  }, q = () => {
    _e(An), We(An), S(I), X("");
  }, v = (j, { value: ie }) => {
    const re = j === "acceleratedConcurrent" ? vh : Fe[j].filter((K) => K.value !== ie), ee = {
      ...Fe,
      [j]: re
    };
    Ve(ee);
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(ic, {}),
    /* @__PURE__ */ p.jsx(gm, {}),
    C && /* @__PURE__ */ p.jsx(ql, { message: ec }),
    a != null && a.hide ? null : /* @__PURE__ */ p.jsx("section", { "data-testid": "hero", children: /* @__PURE__ */ p.jsx(
      Rn,
      {
        image: (a == null ? void 0 : a.image) || $e.hero.image,
        title: {
          text: yh(d.dataSource),
          highlightColor: "gold",
          ...a == null ? void 0 : a.title,
          maxWidth: "100%"
        },
        contents: a == null ? void 0 : a.contents
      }
    ) }),
    /* @__PURE__ */ p.jsxs(mm, { "data-is-loading": m, className: "main-section dg-margin-top", children: [
      (s == null ? void 0 : s.breadcrumbs) && /* @__PURE__ */ p.jsx("div", { className: "container mt-4 mb-0", children: /* @__PURE__ */ p.jsx(
        mo,
        {
          breadcrumbs: s.breadcrumbs,
          section: a ? a.title.text : ""
        }
      ) }),
      s ? /* @__PURE__ */ p.jsx(
        go,
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
      r || n ? /* @__PURE__ */ p.jsxs("section", { className: "no-space", children: [
        /* @__PURE__ */ p.jsx(Vh, {}),
        r ? /* @__PURE__ */ p.jsx(
          gc,
          {
            value: $,
            onChange: X,
            onSearch: B
          }
        ) : null,
        n ? /* @__PURE__ */ p.jsx(
          uc,
          {
            value: Ae,
            onChange: z,
            onApply: R,
            onClean: q
          }
        ) : null,
        /* @__PURE__ */ p.jsx(ym, {})
      ] }) : null,
      /* @__PURE__ */ p.jsx("section", { className: "container", children: /* @__PURE__ */ p.jsx("div", { className: "d-flex justify-content-between filter-switch-container", children: n ? /* @__PURE__ */ p.jsx(
        dc,
        {
          value: Fe,
          onRemove: v
        }
      ) : null }) }),
      m || O ? /* @__PURE__ */ p.jsx(Hl, {}) : /* @__PURE__ */ p.jsx(
        mc,
        {
          dataViewComponent: oe,
          loading: m || O,
          programs: E,
          actionUrls: t,
          degreesPerPage: f
        }
      )
    ] })
  ] });
};
yo.propTypes = {
  appPathFolder: A.string,
  actionUrls: A.shape({
    applyNowUrl: A.string
  }),
  hasSearchBar: A.bool,
  hasFilters: A.bool,
  hero: A.shape(Rn.propTypes),
  introContent: A.shape(go.propTypes),
  programList: A.shape({
    dataSource: Gl,
    settings: dh
  }),
  degreesPerPage: A.number
};
const yc = (e) => /* @__PURE__ */ p.jsx(ho, { listPageProps: e, children: /* @__PURE__ */ p.jsx(yo, { ...e }) });
yc.propTypes = yo.propTypes;
const bm = Qe.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`, vm = Qe.div`
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
function xm() {
  return /* @__PURE__ */ p.jsxs(
    bm,
    {
      className: "container",
      id: yt.affordingCollege.targetIdName,
      "data-testid": "affording-college",
      children: [
        /* @__PURE__ */ p.jsx(vm, {}),
        /* @__PURE__ */ p.jsx("h2", { children: /* @__PURE__ */ p.jsx("span", { className: "highlight-gold", children: "Affording college" }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ p.jsx(
            gt,
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
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ p.jsx(
            gt,
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
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ p.jsx(
            gt,
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
var bc = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", d = 0; d < arguments.length; d++) {
        var f = arguments[d];
        f && (s = a(s, n(f)));
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
      for (var f in s)
        t.call(s, f) && s[f] && (d = a(d, f));
      return d;
    }
    function a(s, d) {
      return d ? s ? s + " " + d : s + d : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(bc);
var wm = bc.exports;
const Sm = /* @__PURE__ */ Ui(wm), km = Qe.ul`
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
`, Tm = ({
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
  }), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("p", { children: "All students are required to meet general university admission requirements" }),
    /* @__PURE__ */ p.jsx(
      km,
      {
        className: Sm("", {
          "mb-0": n.length === 0
        }),
        children: r.map(({ label: a, href: s }) => /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
          Tr,
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
    n.length > 0 && /* @__PURE__ */ p.jsx("div", { className: "mt-2 mb-4", children: /* @__PURE__ */ p.jsx(qi, { cards: n, openedCard: 1 }) })
  ] });
};
function vc({
  graduateRequirements: e,
  transferRequirements: t,
  isMinorOrCertificate: r,
  additionalRequirements: n,
  minorRequirements: a
}) {
  let s;
  return e || r ? s = r ? "Program requirements" : "Degree requirements" : s = r ? "Program requirements" : "Admission requirements", /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs(
      "section",
      {
        id: yt.applicationRequirements.targetIdName,
        "data-testid": "application-requirements",
        children: [
          /* @__PURE__ */ p.jsx("h2", { children: /* @__PURE__ */ p.jsx("span", { className: "highlight-gold", children: s }) }),
          e || r ? /* @__PURE__ */ p.jsx(
            "div",
            {
              dangerouslySetInnerHTML: Gt(
                e || a
              )
            }
          ) : Tm({
            transferRequirements: t,
            additionalRequirements: n
          })
        ]
      }
    ),
    e || r ? /* @__PURE__ */ p.jsxs(
      "section",
      {
        id: yt.degreeRequirements.targetIdName,
        "data-testid": "degree-requirements",
        children: [
          /* @__PURE__ */ p.jsx("h2", { children: /* @__PURE__ */ p.jsx("span", { className: "highlight-gold", children: "Admission requirements" }) }),
          /* @__PURE__ */ p.jsx(
            "div",
            {
              dangerouslySetInnerHTML: Gt(
                n
              )
            }
          )
        ]
      }
    ) : null
  ] });
}
vc.propTypes = {
  graduateRequirements: A.string,
  transferRequirements: A.string,
  isMinorOrCertificate: A.bool,
  additionalRequirements: A.string,
  minorRequirements: A.string
};
const Qr = ({ item: e, type: t }) => {
  const r = Xr("glance-"), n = () => typeof e == "object" ? e.map((a, s) => {
    const d = ["", "#"].includes(a.url) ? null : a.url;
    let f = "";
    return s > 0 && s < e.length - 1 && (f = ", "), s === e.length - 1 && e.length > 1 && (f = " or "), /* @__PURE__ */ p.jsxs(Zs, { children: [
      f,
      /* @__PURE__ */ p.jsx("a", { href: d, rel: "noreferrer", target: "_blank", children: a.text })
    ] }, r.next().value);
  }) : e;
  return /* @__PURE__ */ p.jsxs("li", { children: [
    /* @__PURE__ */ p.jsx("i", { className: `fas fa-${Ls[t].icon} fa-li` }),
    /* @__PURE__ */ p.jsxs("strong", { children: [
      Ls[t].title,
      ": "
    ] }),
    n()
  ] });
};
Qr.propTypes = {
  item: A.oneOfType([
    A.arrayOf(Ii),
    A.string
  ]),
  type: A.string
};
const xc = ({
  offeredBy: e,
  locations: t,
  firstRequirementMathCourse: r,
  mathIntensity: n,
  timeCommitment: a
}) => /* @__PURE__ */ p.jsxs(
  "section",
  {
    id: yt.atAGlance.targetIdName,
    "data-testid": "at-aglance",
    children: [
      /* @__PURE__ */ p.jsx("h2", { children: /* @__PURE__ */ p.jsx("span", { className: "highlight-gold", children: "At a glance: program details" }) }),
      /* @__PURE__ */ p.jsxs("ul", { className: "uds-list fa-ul maroon pt-2 pb-0 pe-0", children: [
        e && /* @__PURE__ */ p.jsx(Qr, { item: [e], type: "offeredBy" }),
        t && /* @__PURE__ */ p.jsx(Qr, { item: t, type: "locations" }),
        r && /* @__PURE__ */ p.jsx(
          Qr,
          {
            item: r,
            type: "firstRequirementMathCourse"
          }
        ),
        n && /* @__PURE__ */ p.jsx(Qr, { item: n, type: "mathIntensity" }),
        a && /* @__PURE__ */ p.jsx(Qr, { item: a, type: "timeCommitment" })
      ] })
    ]
  }
);
xc.propTypes = {
  offeredBy: Ii.isRequired,
  locations: A.arrayOf(Ii).isRequired,
  firstRequirementMathCourse: A.string.isRequired,
  mathIntensity: A.string,
  timeCommitment: A.string
};
const Cm = `
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;
function wc({ image: e, learnMoreLink: t, contents: r }) {
  const n = `linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${e.url}')`, a = Xr("attend-online-");
  return /* @__PURE__ */ p.jsx(
    "section",
    {
      id: yt.attendOnline.targetIdName,
      className: "uds-card-and-image",
      style: {
        backgroundImage: n
      },
      "data-testid": "attend-online",
      children: /* @__PURE__ */ p.jsx("div", { className: "uds-card-and-image-container", children: /* @__PURE__ */ p.jsxs("div", { className: "card card-centered", children: [
        /* @__PURE__ */ p.jsx("i", { className: "fas fa-wifi fa-2x card-icon-top" }),
        /* @__PURE__ */ p.jsx("div", { className: "card-header", children: /* @__PURE__ */ p.jsx("h3", { className: "card-title", children: "Attend online" }) }),
        /* @__PURE__ */ p.jsx("div", { className: "card-body", children: r ? r.map((s) => /* @__PURE__ */ p.jsx("p", { children: s }, a.next().value)) : /* @__PURE__ */ p.jsx("p", { children: Cm }) }),
        /* @__PURE__ */ p.jsx("div", { className: "card-button", children: /* @__PURE__ */ p.jsx(
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
wc.propTypes = {
  learnMoreLink: A.string,
  image: kr,
  contents: A.arrayOf(
    A.shape({
      text: A.string
    })
  )
};
const Am = Qe.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Sc = ({ contents: e, image: t }) => /* @__PURE__ */ p.jsx(
  Am,
  {
    id: yt.careerOutlook.targetIdName,
    "data-testid": "career-outlook",
    children: /* @__PURE__ */ p.jsx(
      cn,
      {
        headingTag: "H2",
        title: yt.careerOutlook.text,
        contents: e,
        image: t
      }
    )
  }
);
Sc.propTypes = cn.propTypes;
const _m = Qe.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;
function kc({ content: e }) {
  return /* @__PURE__ */ p.jsxs(
    "section",
    {
      id: yt.changeMajorRequirements.targetIdName,
      className: "change-your-major",
      "data-testid": "change-your-major",
      children: [
        /* @__PURE__ */ p.jsx("h2", { children: /* @__PURE__ */ p.jsx("span", { className: "highlight-gold", children: "Change your major requirements for current students" }) }),
        /* @__PURE__ */ p.jsx(
          _m,
          {
            dangerouslySetInnerHTML: Gt(e)
          }
        )
      ]
    }
  );
}
kc.propTypes = {
  content: A.string
};
function Tc({ content: e = "" }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-testid": "custom-text",
      className: "mt-3",
      dangerouslySetInnerHTML: Gt(e)
    }
  );
}
Tc.propTypes = {
  content: A.string
};
const Cc = `
  width: unset !important;
  min-width: unset !important;
`, Ac = Qe.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${Cc}
`, _c = Qe.i`
  color: #78be21;
  ${Cc}
`;
function Ec({ data: e }) {
  return /* @__PURE__ */ p.jsx("div", { className: "uds-table mb-1", children: /* @__PURE__ */ p.jsxs("table", { children: [
    /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
      /* @__PURE__ */ p.jsx("th", { scope: "col", children: "Career" }),
      /* @__PURE__ */ p.jsx("th", { scope: "col", className: "text-end", children: "Growth*" }),
      /* @__PURE__ */ p.jsx("th", { scope: "col", className: "text-end", children: "Median Salary*" })
    ] }) }),
    /* @__PURE__ */ p.jsx("tbody", { children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ p.jsxs("tr", { children: [
      /* @__PURE__ */ p.jsxs("th", { scope: "row", style: { fontWeight: "normal" }, children: [
        /* @__PURE__ */ p.jsx("a", { href: t.career.url, target: "_blank", rel: "noreferrer", children: t.career.text }),
        t.greenOccupation && /* @__PURE__ */ p.jsx(_c, { className: "fas fa-leaf ms-1" }),
        t.brightOutlook && /* @__PURE__ */ p.jsx(Ac, { className: "fas fa-sun ms-1" })
      ] }),
      /* @__PURE__ */ p.jsxs("td", { className: "text-end", children: [
        +t.growth,
        "%"
      ] }),
      /* @__PURE__ */ p.jsx("td", { className: "text-end", children: t.medianSalary || 0 })
    ] }, t.career.url)) })
  ] }) });
}
Ec.propTypes = {
  data: A.arrayOf(Yl)
};
function jc({ tableData: e }) {
  return /* @__PURE__ */ p.jsxs(
    "section",
    {
      id: yt.exampleCareers.targetIdName,
      className: "container",
      "data-testid": "example-careers",
      children: [
        /* @__PURE__ */ p.jsx("h3", { children: "Example careers" }),
        /* @__PURE__ */ p.jsx("p", { children: "Example job titles and salaries listed below are not necessarily entry level, and students should take into consideration how years of experience and geographical location may affect pay scales. Some jobs also may require advanced degrees, certifications or state-specific licensure." }),
        /* @__PURE__ */ p.jsxs("div", { className: "mt-4 mb-4", children: [
          /* @__PURE__ */ p.jsx(Ec, { data: e }),
          /* @__PURE__ */ p.jsx("p", { children: /* @__PURE__ */ p.jsx("small", { children: "* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)." }) })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "d-flex", children: [
          /* @__PURE__ */ p.jsxs("p", { className: "me-3", children: [
            /* @__PURE__ */ p.jsx(Ac, { className: "fas fa-sun me-1" }),
            "Bright outlook"
          ] }),
          /* @__PURE__ */ p.jsxs("p", { children: [
            /* @__PURE__ */ p.jsx(_c, { className: "fas fa-leaf me-1" }),
            "Green occupation"
          ] })
        ] })
      ]
    }
  );
}
jc.propTypes = {
  tableData: A.arrayOf(Yl)
};
const Em = Qe.ul`
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
`, Fi = ({ id: e, title: t, links: r }) => /* @__PURE__ */ p.jsxs("div", { id: e, className: "mt-4", children: [
  /* @__PURE__ */ p.jsx("h3", { children: t }),
  /* @__PURE__ */ p.jsx("p", { children: "This program allows students to obtain both a bachelor's and master's degree in as little as five years. It is offered as an accelerated bachelor's and master's degree with:" }),
  /* @__PURE__ */ p.jsx(Em, { className: "mt-3 mb-3", children: r.map((n, a) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: n.url, target: "_blank", rel: "noreferrer", children: n.title }) }, `${n.title}-${a}`)
  )) }),
  /* @__PURE__ */ p.jsx("p", { className: "mb-0", children: "Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply." })
] });
Fi.propTypes = {
  id: A.string,
  title: A.string,
  links: Di
};
function Oc({ acceleratedLinks: e, concurrentLinks: t }) {
  return /* @__PURE__ */ p.jsxs(
    "section",
    {
      id: yt.flexibleDegreeOptions.targetIdName,
      className: "container",
      "data-testid": "flexible-degree-options",
      children: [
        /* @__PURE__ */ p.jsx("h2", { children: /* @__PURE__ */ p.jsx("span", { className: "highlight-gold", children: "Flexible degree options" }) }),
        !!e.length && /* @__PURE__ */ p.jsx(
          Fi,
          {
            id: yt.flexibleDegreeOptions.acceleratedId,
            title: "Accelerated program options",
            links: e
          }
        ),
        !!t.length && /* @__PURE__ */ p.jsx(
          Fi,
          {
            id: yt.flexibleDegreeOptions.concurrentId,
            title: "Concurrent degree program",
            links: t
          }
        )
      ]
    }
  );
}
Oc.propTypes = {
  acceleratedLinks: Di,
  concurrentLinks: Di
};
const jm = Qe.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Nc = ({ contents: e, image: t }) => /* @__PURE__ */ p.jsx(
  jm,
  {
    id: yt.globalOpportunity.targetIdName,
    "data-testid": "global-opportunity",
    children: /* @__PURE__ */ p.jsx(
      cn,
      {
        headingTag: "H2",
        title: yt.globalOpportunity.text,
        contents: e,
        image: t
      }
    )
  }
);
Nc.propTypes = cn.propTypes;
const Rc = ({ url: e, altText: t }) => /* @__PURE__ */ p.jsx("div", { className: "uds-img pt-3 pb-3", "data-testid": "intro-image", children: /* @__PURE__ */ p.jsx("img", { src: e, className: "img-fluid", alt: t }) });
Rc.propTypes = { ...lo };
const Om = (e, t) => {
  if (e !== "youtube")
    return t;
  const r = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, n = t.match(r);
  return n && n[7].length === 11 ? `https://www.youtube.com/embed/${n[7]}` : t;
}, Nm = Qe.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`, Ic = ({ type: e, url: t, vttUrl: r, title: n }) => /* @__PURE__ */ p.jsx(Nm, { "data-testid": "intro-video", children: /* @__PURE__ */ p.jsx(
  Qi,
  {
    type: e,
    url: Om(e, t),
    vttUrl: r,
    title: n,
    controls: !0
  }
) });
Ic.propTypes = { ...co };
function Dc({ contents: e = [] }) {
  return /* @__PURE__ */ p.jsx("div", { "data-testid": "market-text", children: e.map((t, r) => /* @__PURE__ */ p.jsx(
    "div",
    {
      className: `mt-3 ${nn(t.cssClass)}`,
      dangerouslySetInnerHTML: Gt(t.text)
    },
    `content-${r + 1}`
  )) });
}
Dc.propTypes = {
  contents: A.arrayOf(Ca)
};
function Pc({ cards: e, defaultCards: t }) {
  var r, n, a, s, d, f, h, m, C, _, O, U;
  return /* @__PURE__ */ p.jsxs(
    "section",
    {
      className: "container",
      id: yt.nextSteps.targetIdName,
      "data-testid": "next-steps",
      children: [
        /* @__PURE__ */ p.jsx("h2", { children: "Next steps to attend ASU" }),
        /* @__PURE__ */ p.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ p.jsx(
            gt,
            {
              icon: ((r = e == null ? void 0 : e.learnMore) == null ? void 0 : r.icon) ?? t.learnMore.icon,
              title: ((n = e == null ? void 0 : e.learnMore) == null ? void 0 : n.title) ?? t.learnMore.title,
              body: ((a = e == null ? void 0 : e.learnMore) == null ? void 0 : a.content) ?? t.learnMore.content,
              buttons: [
                ((s = e == null ? void 0 : e.learnMore) == null ? void 0 : s.buttonLink) ?? t.learnMore.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ p.jsx(
            gt,
            {
              icon: ((d = e == null ? void 0 : e.apply) == null ? void 0 : d.icon) ?? t.apply.icon,
              title: ((f = e == null ? void 0 : e.apply) == null ? void 0 : f.title) ?? t.apply.title,
              body: ((h = e == null ? void 0 : e.apply) == null ? void 0 : h.content) ?? t.apply.content,
              buttons: [
                ((m = e == null ? void 0 : e.apply) == null ? void 0 : m.buttonLink) ?? t.apply.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ p.jsx(
            gt,
            {
              icon: ((C = e == null ? void 0 : e.visit) == null ? void 0 : C.icon) ?? t.visit.icon,
              title: ((_ = e == null ? void 0 : e.visit) == null ? void 0 : _.title) ?? t.visit.title,
              body: ((O = e == null ? void 0 : e.visit) == null ? void 0 : O.content) ?? t.visit.content,
              buttons: [
                ((U = e == null ? void 0 : e.visit) == null ? void 0 : U.buttonLink) ?? t.visit.buttonLink
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
Pc.propTypes = {
  cards: A.shape({
    learnMore: Br,
    apply: Br,
    visit: Br
  }),
  defaultCards: A.shape({
    learnMore: Br,
    apply: Br,
    visit: Br
  })
};
function Lc({ content: e = "" }) {
  return /* @__PURE__ */ p.jsxs("section", { className: "container", "data-testid": "professional-licensure", children: [
    /* @__PURE__ */ p.jsx("h3", { children: "Professional licensure" }),
    /* @__PURE__ */ p.jsx("p", { dangerouslySetInnerHTML: Gt(e) })
  ] });
}
Lc.propTypes = {
  content: A.node
};
const hi = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content",
  section: "Program contact information"
}, Rm = Qe.ul`
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
function Mc({ department: e, asuOfficeLoc: t, email: r, phone: n }) {
  return /* @__PURE__ */ p.jsxs(
    "section",
    {
      id: yt.programContactInfo.targetIdName,
      "data-testid": "program-contact-info",
      children: [
        /* @__PURE__ */ p.jsx("h2", { children: /* @__PURE__ */ p.jsx("span", { className: "highlight-gold", children: "Program contact information" }) }),
        /* @__PURE__ */ p.jsx("p", { children: "If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below." }),
        /* @__PURE__ */ p.jsxs(Rm, { className: "text-maroon", children: [
          /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsxs("div", { children: [
            /* @__PURE__ */ p.jsx(
              "i",
              {
                className: "c-icon fas icon-small fa-map-marker-alt",
                title: "Department  Address"
              }
            ),
            /* @__PURE__ */ p.jsx(
              "a",
              {
                href: e.url,
                onClick: () => Rr({ ...hi, text: e.text }),
                children: e.text
              }
            )
          ] }) }),
          /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("div", { className: "c-icon text-dark office-loc", children: t }) }),
          /* @__PURE__ */ p.jsxs("li", { children: [
            /* @__PURE__ */ p.jsx("i", { className: "c-icon fas icon-small fa-envelope", title: "Email" }),
            /* @__PURE__ */ p.jsx(
              "a",
              {
                href: `mailto:${r.url || r.text}`,
                onClick: () => Rr({ ...hi, text: r.text }),
                children: r.text
              }
            )
          ] }),
          /* @__PURE__ */ p.jsxs("li", { children: [
            /* @__PURE__ */ p.jsx("i", { className: "c-icon fas icon-small fa-phone", title: "Phone" }),
            /* @__PURE__ */ p.jsx(
              "a",
              {
                href: `tel:${n}`,
                onClick: () => Rr({ ...hi, text: n }),
                children: n
              }
            )
          ] })
        ] })
      ]
    }
  );
}
Mc.propTypes = {
  department: Gr,
  asuOfficeLoc: A.string,
  email: Gr,
  phone: A.string
};
function $i({ content: e, stemOptText: t, programNotFound: r }) {
  return /* @__PURE__ */ p.jsxs("div", { "data-testid": "program-description", children: [
    /* @__PURE__ */ p.jsx("h2", { children: r ? "Program not found" : "Program description" }),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        "data-testid": "program-description-body",
        dangerouslySetInnerHTML: Gt(e)
      }
    ),
    t && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("p", { children: /* @__PURE__ */ p.jsx("strong", { children: fh }) }),
      /* @__PURE__ */ p.jsx(
        "div",
        {
          "data-testid": "stem-opt-text",
          dangerouslySetInnerHTML: Gt(t)
        }
      )
    ] })
  ] });
}
$i.propTypes = {
  content: A.string,
  stemOptText: A.string,
  programNotFound: A.bool
};
const Im = "https://changemajor.apps.asu.edu/", Dm = "On-campus students", Pm = "Online students", Lm = "View major map -", qs = "View major map";
function Fc({
  onlineMajorMapURL: e = "",
  majorMapOnCampusURL: t = "",
  subPlnMajorMaps: r = [],
  subPlns: n = []
}) {
  const a = (C) => {
    const _ = n.find(
      (O) => O.acadSubPlanCode === C
    );
    return _ ? _.description : "";
  }, s = (C, _, O) => {
    C && O.push({
      href: C,
      text: _
    });
  }, d = [], f = [];
  r.forEach((C) => {
    const _ = a(C.acadSubPlanCode), O = `${Lm} ${_}`;
    s(C.url, O, d);
  }), t && s(t, qs, d), e && s(e, qs, f);
  const h = (C, _) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("h5", { children: C }),
    /* @__PURE__ */ p.jsx("ul", { className: "mb-3", children: _.map((O) => /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: O.href, children: O.text }) }, O.href)) })
  ] }), m = () => /* @__PURE__ */ p.jsxs("section", { className: "container ps-0", "data-testid": "required-course", children: [
    /* @__PURE__ */ p.jsx("h4", { children: "Required courses (major map)" }),
    d.length > 0 && h(Dm, d),
    f.length > 0 && h(Pm, f),
    /* @__PURE__ */ p.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ p.jsx("strong", { children: "What if:" }),
      " See how your courses can be applied to another major and find out how to ",
      /* @__PURE__ */ p.jsx("a", { href: Im, children: "change your major" })
    ] })
  ] });
  return !(r != null && r.length) && !e && !t ? /* @__PURE__ */ p.jsx("div", {}) : m();
}
Fc.propTypes = {
  onlineMajorMapURL: A.string,
  majorMapOnCampusURL: A.string,
  subPlnMajorMaps: A.arrayOf(
    A.shape({
      campus: A.string,
      acadSubPlanCode: A.string,
      defaultFlag: A.bool,
      url: A.string
    })
  ),
  subPlns: A.arrayOf(
    A.shape({
      acadSubPlanCode: A.string,
      description: A.string
    })
  )
};
const $c = ({ sectionIntroText: e, cards: t, defaultCards: r }) => {
  var n, a, s, d, f, h, m, C, _, O, U, E, S, I, F, $, X, G, T, oe, ce, Se, Ie, $e, De, fe, ue, Ce, ge, He, Ae, _e, Fe, We, Ve, B, R, z, q, v, Y, j;
  return /* @__PURE__ */ p.jsxs(
    "section",
    {
      id: yt.whyChooseAsu.targetIdName,
      className: "container",
      "data-testid": "why-choose-asu",
      children: [
        /* @__PURE__ */ p.jsx("h2", { children: "Why choose ASU" }),
        /* @__PURE__ */ p.jsx(
          "div",
          {
            dangerouslySetInnerHTML: Gt(e)
          }
        ),
        /* @__PURE__ */ p.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ p.jsx(
            gt,
            {
              image: ((a = (n = t == null ? void 0 : t.faculty) == null ? void 0 : n.image) == null ? void 0 : a.url) ?? r.faculty.image.url,
              imageAltText: ((d = (s = t == null ? void 0 : t.faculty) == null ? void 0 : s.image) == null ? void 0 : d.altText) ?? r.faculty.image.altText,
              title: ((f = t == null ? void 0 : t.faculty) == null ? void 0 : f.title) ?? r.faculty.title,
              body: ((h = t == null ? void 0 : t.faculty) == null ? void 0 : h.text) ?? r.faculty.text,
              buttons: [((m = t == null ? void 0 : t.faculty) == null ? void 0 : m.button) ?? r.faculty.button]
            }
          ) }),
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ p.jsx(
            gt,
            {
              image: ((_ = (C = t == null ? void 0 : t.programs) == null ? void 0 : C.image) == null ? void 0 : _.url) ?? r.programs.image.url,
              imageAltText: ((U = (O = t == null ? void 0 : t.programs) == null ? void 0 : O.image) == null ? void 0 : U.altText) ?? r.programs.image.altText,
              title: ((E = t == null ? void 0 : t.programs) == null ? void 0 : E.title) ?? r.programs.title,
              body: ((S = t == null ? void 0 : t.programs) == null ? void 0 : S.text) ?? r.programs.text,
              buttons: [((I = t == null ? void 0 : t.programs) == null ? void 0 : I.button) ?? r.programs.button]
            }
          ) }),
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ p.jsx(
            gt,
            {
              image: (($ = (F = t == null ? void 0 : t.research) == null ? void 0 : F.image) == null ? void 0 : $.url) ?? r.research.image.url,
              imageAltText: ((G = (X = t == null ? void 0 : t.research) == null ? void 0 : X.image) == null ? void 0 : G.altText) ?? r.research.image.altText,
              title: ((T = t == null ? void 0 : t.research) == null ? void 0 : T.title) ?? r.research.title,
              body: ((oe = t == null ? void 0 : t.research) == null ? void 0 : oe.text) ?? r.research.text,
              buttons: [((ce = t == null ? void 0 : t.research) == null ? void 0 : ce.button) ?? r.research.button]
            }
          ) }),
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ p.jsx(
            gt,
            {
              image: ((Ie = (Se = t == null ? void 0 : t.inclusion) == null ? void 0 : Se.image) == null ? void 0 : Ie.url) ?? r.inclusion.image.url,
              imageAltText: ((De = ($e = t == null ? void 0 : t.inclusion) == null ? void 0 : $e.image) == null ? void 0 : De.altText) ?? r.inclusion.image.altText,
              title: ((fe = t == null ? void 0 : t.inclusion) == null ? void 0 : fe.title) ?? r.inclusion.title,
              body: ((ue = t == null ? void 0 : t.inclusion) == null ? void 0 : ue.text) ?? r.inclusion.text,
              buttons: [
                ((Ce = t == null ? void 0 : t.inclusion) == null ? void 0 : Ce.button) ?? r.inclusion.button
              ]
            }
          ) }),
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ p.jsx(
            gt,
            {
              image: ((He = (ge = t == null ? void 0 : t.mentors) == null ? void 0 : ge.image) == null ? void 0 : He.url) ?? r.mentors.image.url,
              imageAltText: ((_e = (Ae = t == null ? void 0 : t.mentors) == null ? void 0 : Ae.image) == null ? void 0 : _e.altText) ?? r.mentors.image.altText,
              title: ((Fe = t == null ? void 0 : t.mentors) == null ? void 0 : Fe.title) ?? r.mentors.title,
              body: ((We = t == null ? void 0 : t.mentors) == null ? void 0 : We.text) ?? r.mentors.text,
              buttons: [((Ve = t == null ? void 0 : t.mentors) == null ? void 0 : Ve.button) ?? r.mentors.button]
            }
          ) }),
          /* @__PURE__ */ p.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ p.jsx(
            gt,
            {
              image: ((R = (B = t == null ? void 0 : t.honors) == null ? void 0 : B.image) == null ? void 0 : R.url) ?? r.honors.image.url,
              imageAltText: ((q = (z = t == null ? void 0 : t.honors) == null ? void 0 : z.image) == null ? void 0 : q.altText) ?? r.honors.image.altText,
              title: ((v = t == null ? void 0 : t.honors) == null ? void 0 : v.title) ?? r.honors.title,
              body: ((Y = t == null ? void 0 : t.honors) == null ? void 0 : Y.text) ?? r.honors.text,
              buttons: [((j = t == null ? void 0 : t.honors) == null ? void 0 : j.button) ?? r.honors.button]
            }
          ) })
        ] })
      ]
    }
  );
};
$c.propTypes = Zl;
const bo = ({
  appPathFolder: e,
  dataSource: t,
  anchorMenu: r,
  hero: n,
  introContent: a,
  atAGlance: s,
  applicationRequirements: d,
  changeMajorRequirements: f,
  affordingCollege: h,
  flexibleDegreeOptions: m,
  careerOutlook: C,
  exampleCareers: _,
  globalOpportunity: O,
  attendOnline: U,
  programContactInfo: E,
  nextSteps: S,
  whyChooseAsu: I
}) => {
  var ue, Ce, ge, He;
  const [{ data: F, loading: $, error: X }, G] = $l(), [T, oe] = ft(an({})), [ce, Se] = ft({ accelerateData: [], concurrentData: [] }), Ie = nc(t, Ah), { defaultState: $e } = Yt(un), { detailPageDefault: De } = $e;
  Tt(() => {
    typeof window < "u" && Bl({
      packageName: "app-degree-pages",
      component: "DetailPage",
      type: "NA",
      configuration: {
        dataSource: t
      }
    });
  }, []), Tt(() => {
    G(Ie);
  }, [Ie]), Tt(() => {
    if (F) {
      const Ae = an(F);
      oe(Ae), Ae.hasConcurrentOrAccelerateDegrees() && Nh(
        [
          Ae.getAccelerateDegrees(),
          Ae.getConcurrentDegrees()
        ],
        Se
      );
    }
  }, [F]);
  const fe = Uh(r, T);
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(ic, {}),
    X && /* @__PURE__ */ p.jsx(ql, { message: ec }),
    !(n != null && n.hide) && /* @__PURE__ */ p.jsx("section", { children: /* @__PURE__ */ p.jsx(
      Rn,
      {
        image: (n == null ? void 0 : n.image) || De.hero.image,
        title: {
          ...De.hero.title,
          text: T.getMajorDesc(),
          ...n == null ? void 0 : n.title
        },
        contents: n == null ? void 0 : n.contents
      }
    ) }),
    !$ && zh(fe) && /* @__PURE__ */ p.jsx(rc, { anchorMenu: fe }),
    /* @__PURE__ */ p.jsxs(oc, { as: "div", "data-is-loading": $, className: "main-section", children: [
      $ && /* @__PURE__ */ p.jsx(Hl, {}),
      !$ && (F != null && F.error ? /* @__PURE__ */ p.jsx("section", { className: "container mt-4 mb-0", children: /* @__PURE__ */ p.jsx(
        $i,
        {
          content: hh,
          programNotFound: !0
        }
      ) }) : /* @__PURE__ */ p.jsxs("section", { className: "container mt-4 mb-0", children: [
        (a == null ? void 0 : a.breadcrumbs) && /* @__PURE__ */ p.jsx("div", { className: "row col-12", children: /* @__PURE__ */ p.jsx(
          mo,
          {
            breadcrumbs: a.breadcrumbs,
            section: n ? n.title.text : T.getMajorDesc()
          }
        ) }),
        /* @__PURE__ */ p.jsxs("div", { className: "row flex-column-reverse flex-sm-row", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "col col-sm-12 col-md-7 col-lg-7", children: [
            /* @__PURE__ */ p.jsxs("section", { className: "intro", children: [
              !T.isValidActiveProgram() && /* @__PURE__ */ p.jsx(Tc, { content: T.getAsuCustomText() }),
              !(a != null && a.hideMarketText) && ((a == null ? void 0 : a.contents) || T.getMarketText()) && /* @__PURE__ */ p.jsx(
                Dc,
                {
                  contents: (a == null ? void 0 : a.contents) || [
                    { text: T.getMarketText() }
                  ]
                }
              ),
              !(a != null && a.hideProgramDesc) && /* @__PURE__ */ p.jsx(
                $i,
                {
                  content: T.getFullDescription(),
                  stemOptText: T.getStemOptText()
                }
              )
            ] }),
            !(s != null && s.hide) && /* @__PURE__ */ p.jsx(
              xc,
              {
                offeredBy: (s == null ? void 0 : s.offeredBy) || {
                  text: T.getCollegeDesc(),
                  url: T.getCollegeUrl()
                },
                locations: (s == null ? void 0 : s.locations) || $h(T),
                firstRequirementMathCourse: (s == null ? void 0 : s.firstRequirementMathCourse) || T.getMinMathReq(),
                mathIntensity: (s == null ? void 0 : s.mathIntensity) || T.getMathIntensity()
              }
            ),
            !(a != null && a.hideRequiredCourses) && !T.isMinorOrCertificate() && /* @__PURE__ */ p.jsx(
              Fc,
              {
                onlineMajorMapURL: T.getOnlineMajorMapURL(),
                majorMapOnCampusURL: T.getGeneralDegreeMajorMap(),
                subPlnMajorMaps: T.getSubPlnMajorMaps(),
                subPlns: T.getSubPln()
              }
            ),
            !(d != null && d.hide) && /* @__PURE__ */ p.jsx(
              vc,
              {
                graduateRequirements: T.isGradProgram() ? T.getGraduateRequirements() : null,
                isMinorOrCertificate: T.isMinorOrCertificate(),
                minorRequirements: T.getMinorCourseRequirements(),
                additionalRequirements: T.getAdmissionsRequirementsText(),
                transferRequirements: T.getTransferAdmission()
              }
            ),
            !(f != null && f.hide) && !T.isMinorOrCertificate() && !T.isGradProgram() && /* @__PURE__ */ p.jsx(kc, { content: T.getChangeMajor() })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "col col-sm-12 col-md-5 col-lg-5", children: [
            (a == null ? void 0 : a.video) && /* @__PURE__ */ p.jsx(
              Ic,
              {
                type: a.video.type,
                url: a.video.url,
                vttUrl: a.video.vttUrl,
                title: a.video.title
              }
            ),
            !(a != null && a.video) && /* @__PURE__ */ p.jsx(
              Rc,
              {
                url: ((ue = a == null ? void 0 : a.image) == null ? void 0 : ue.url) || De.introContent.image.url,
                altText: ((Ce = a == null ? void 0 : a.image) == null ? void 0 : Ce.altText) || De.introContent.image.altText
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "row", children: [
          !(S != null && S.hide) && !T.isMinorOrCertificate() && /* @__PURE__ */ p.jsx(
            Pc,
            {
              cards: S == null ? void 0 : S.cards,
              defaultCards: De.nextSteps.cards
            }
          ),
          !(h != null && h.hide) && /* @__PURE__ */ p.jsx(xm, {}),
          !(m != null && m.hide) && T.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ p.jsx(
            Oc,
            {
              acceleratedLinks: Fs(
                ce.accelerateData
              ),
              concurrentLinks: Fs(
                ce.concurrentData
              )
            }
          ),
          !(C != null && C.hide) && T.getAsuCareerOpportunity() && /* @__PURE__ */ p.jsx(
            Sc,
            {
              image: (C == null ? void 0 : C.image) || De.careerOutlook.image,
              contents: [{ text: T.getAsuCareerOpportunity() }]
            }
          ),
          !(_ != null && _.hide) && T.hasCareerData() && /* @__PURE__ */ p.jsx(
            jc,
            {
              tableData: _h(T.getCareerData())
            }
          ),
          T.getProfessionalLicensureText() && /* @__PURE__ */ p.jsx(
            Lc,
            {
              content: T.getProfessionalLicensureText()
            }
          ),
          !(O != null && O.hide) && T.getGlobalExp() && /* @__PURE__ */ p.jsx(
            Nc,
            {
              contents: [{ text: T.getGlobalExp() }],
              image: (O == null ? void 0 : O.image) || De.globalOpportunity.image
            }
          ),
          !(I != null && I.hide) && /* @__PURE__ */ p.jsx(
            $c,
            {
              sectionIntroText: (I == null ? void 0 : I.sectionIntroText) || De.whyChooseAsu.sectionIntroText,
              cards: I == null ? void 0 : I.cards,
              defaultCards: De.whyChooseAsu.cards
            }
          ),
          !(U != null && U.hide) && T.isOnline() && /* @__PURE__ */ p.jsx(
            wc,
            {
              learnMoreLink: T.getCurriculumUrl(),
              image: (U == null ? void 0 : U.image) || De.attendOnline.image
            }
          )
        ] }),
        !(E != null && E.hide) && /* @__PURE__ */ p.jsx("div", { className: "row", children: /* @__PURE__ */ p.jsx("div", { className: "col col-sm-12 col-md-6 col-lg-6 ", children: /* @__PURE__ */ p.jsx(
          Mc,
          {
            department: {
              text: T.getDepartmentName(),
              url: ((ge = E == null ? void 0 : E.department) == null ? void 0 : ge.url) || T.getPlanUrl()
            },
            email: {
              text: T.getEmailAddress(),
              url: ((He = E == null ? void 0 : E.email) == null ? void 0 : He.url) || T.getEmailAddress()
            },
            asuOfficeLoc: T.getAsuOfficeLoc(),
            phone: T.getPhone()
          }
        ) }) })
      ] }))
    ] })
  ] });
};
bo.propTypes = {
  appPathFolder: A.string,
  dataSource: Gl,
  anchorMenu: A.shape(uo),
  hero: A.shape(Rn.propTypes),
  introContent: A.shape({
    hideMarketText: A.bool,
    hideProgramDesc: A.bool,
    hideRequiredCourses: A.bool,
    breadcrumbs: da.arrayOf(Gr),
    // eslint-disable-next-line react/forbid-prop-types
    contents: da.arrayOf(A.object),
    video: ch,
    image: kr
  }),
  atAGlance: A.shape({
    hide: A.bool,
    offeredBy: Gr,
    locations: da.arrayOf(Gr),
    firstRequirementMathCourse: A.string,
    mathIntensity: A.string,
    timeCommitment: A.string
  }),
  applicationRequirements: A.shape({ hide: A.bool }),
  changeMajorRequirements: A.shape({ hide: A.bool }),
  affordingCollege: A.shape({ hide: A.bool }),
  flexibleDegreeOptions: A.shape({ hide: A.bool }),
  careerOutlook: A.shape({
    hide: A.bool,
    image: kr
  }),
  exampleCareers: A.shape({ hide: A.bool }),
  globalOpportunity: A.shape({
    hide: A.bool,
    image: kr
  }),
  attendOnline: A.shape({
    hide: A.bool,
    image: kr
  }),
  programContactInfo: A.shape({
    hide: A.bool,
    department: A.string,
    email: A.string
  }),
  nextSteps: A.shape({
    hide: A.bool,
    cards: A.arrayOf(Br)
  }),
  whyChooseAsu: A.shape(Zl)
};
const Uc = (e) => /* @__PURE__ */ p.jsx(ho, { detailPageProps: e, children: /* @__PURE__ */ p.jsx(bo, { ...e }) });
Uc.propTypes = bo.propTypes;
var zc, Hs = Xs;
zc = Hs.createRoot, Hs.hydrateRoot;
const Bc = (e, t, r) => {
  const n = document.querySelector(r);
  zc(n).render(ht.createElement(e, t));
}, $m = ({ targetSelector: e, props: t }) => {
  Bc(yc, t, e);
}, Um = ({ targetSelector: e, props: t }) => {
  Bc(Uc, t, e);
};
export {
  Uc as DetailPage,
  yc as ListingPage,
  $m as initListingPage,
  Um as initProgramDetailPage
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
