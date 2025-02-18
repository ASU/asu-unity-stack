import mt, { Component as iu, createContext as Ys, forwardRef as Zs, useRef as sn, useImperativeHandle as su, useId as lu, useContext as Zt, createElement as Ks, useState as dt, useEffect as Ct, useLayoutEffect as cu, useMemo as Xs, Fragment as Js, createRef as uu } from "react";
import Qs from "react-dom";
function Vo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var el = { exports: {} }, An = {};
var $i;
function du() {
  if ($i) return An;
  $i = 1;
  var e = mt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, m, f) {
    var A, _ = {}, j = null, $ = null;
    f !== void 0 && (j = "" + f), m.key !== void 0 && (j = "" + m.key), m.ref !== void 0 && ($ = m.ref);
    for (A in m) n.call(m, A) && !s.hasOwnProperty(A) && (_[A] = m[A]);
    if (h && h.defaultProps) for (A in m = h.defaultProps, m) _[A] === void 0 && (_[A] = m[A]);
    return { $$typeof: t, type: h, key: j, ref: $, props: _, _owner: a.current };
  }
  return An.Fragment = r, An.jsx = p, An.jsxs = p, An;
}
el.exports = du();
var d = el.exports;
function Go(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tl = { exports: {} }, _n = {}, zi;
function pu() {
  if (zi) return _n;
  zi = 1;
  var e = mt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, m, f) {
    var A, _ = {}, j = null, $ = null;
    f !== void 0 && (j = "" + f), m.key !== void 0 && (j = "" + m.key), m.ref !== void 0 && ($ = m.ref);
    for (A in m) n.call(m, A) && !s.hasOwnProperty(A) && (_[A] = m[A]);
    if (h && h.defaultProps) for (A in m = h.defaultProps, m) _[A] === void 0 && (_[A] = m[A]);
    return { $$typeof: t, type: h, key: j, ref: $, props: _, _owner: a.current };
  }
  return _n.Fragment = r, _n.jsx = p, _n.jsxs = p, _n;
}
tl.exports = pu();
var H = tl.exports, rl = { exports: {} }, Ga, Ui;
function fu() {
  if (Ui) return Ga;
  Ui = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ga = e, Ga;
}
var Ya, qi;
function hu() {
  if (qi) return Ya;
  qi = 1;
  var e = fu();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ya = function() {
    function n(p, h, m, f, A, _) {
      if (_ !== e) {
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
rl.exports = hu()();
var gu = rl.exports;
const l = /* @__PURE__ */ Go(gu), mu = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), Za = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), nl = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.string,
    header: l.string,
    body: l.string
  })
}), Yo = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var al = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", p = 0; p < arguments.length; p++) {
        var h = arguments[p];
        h && (s = a(s, n(h)));
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
      for (var h in s)
        t.call(s, h) && s[h] && (p = a(p, h));
      return p;
    }
    function a(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(al);
var yu = al.exports;
const ct = /* @__PURE__ */ Go(yu);
function bu(e) {
  const [t, r] = dt(!1);
  return Ct(() => {
    const n = window.matchMedia(e);
    n.matches !== t && r(n.matches);
    const a = () => {
      r(n.matches);
    };
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [t, e]), t;
}
const Bi = (e, t, r) => e ? t : r, xu = (e) => (e || []).join(" ");
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
function So(e, t) {
  return So = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, So(e, t);
}
function vu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function pa(e, t, r) {
  return vu() ? pa = Reflect.construct : pa = function(n, a, s) {
    var p = [null];
    p.push.apply(p, a);
    var h = Function.bind.apply(n, p), m = new h();
    return s && So(m, s.prototype), m;
  }, pa.apply(null, arguments);
}
function lr(e) {
  return wu(e) || Su(e) || ku(e) || Tu();
}
function wu(e) {
  if (Array.isArray(e)) return ko(e);
}
function Su(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ku(e, t) {
  if (e) {
    if (typeof e == "string") return ko(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ko(e, t);
  }
}
function ko(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Tu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Cu = Object.hasOwnProperty, Hi = Object.setPrototypeOf, Au = Object.isFrozen, _u = Object.getPrototypeOf, Eu = Object.getOwnPropertyDescriptor, At = Object.freeze, Ht = Object.seal, Ou = Object.create, ol = typeof Reflect < "u" && Reflect, wa = ol.apply, To = ol.construct;
wa || (wa = function(e, t, r) {
  return e.apply(t, r);
});
At || (At = function(e) {
  return e;
});
Ht || (Ht = function(e) {
  return e;
});
To || (To = function(e, t) {
  return pa(e, lr(t));
});
var ju = Wt(Array.prototype.forEach), Wi = Wt(Array.prototype.pop), En = Wt(Array.prototype.push), fa = Wt(String.prototype.toLowerCase), Ka = Wt(String.prototype.toString), Vi = Wt(String.prototype.match), ir = Wt(String.prototype.replace), Ru = Wt(String.prototype.indexOf), Nu = Wt(String.prototype.trim), vt = Wt(RegExp.prototype.test), Xa = Iu(TypeError);
function Wt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return wa(e, t, n);
  };
}
function Iu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return To(e, r);
  };
}
function Re(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : fa, Hi && Hi(e, null);
  for (var a = t.length; a--; ) {
    var s = t[a];
    if (typeof s == "string") {
      var p = r(s);
      p !== s && (Au(t) || (t[a] = p), s = p);
    }
    e[s] = !0;
  }
  return e;
}
function Br(e) {
  var t = Ou(null), r;
  for (r in e)
    wa(Cu, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function na(e, t) {
  for (; e !== null; ) {
    var r = Eu(e, t);
    if (r) {
      if (r.get)
        return Wt(r.get);
      if (typeof r.value == "function")
        return Wt(r.value);
    }
    e = _u(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var Gi = At(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ja = At(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Qa = At(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Pu = At(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), eo = At(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Lu = At(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Yi = At(["#text"]), Zi = At(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), to = At(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ki = At(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), aa = At(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Du = Ht(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Mu = Ht(/<%[\w\W]*|[\w\W]*%>/gm), Fu = Ht(/\${[\w\W]*}/gm), $u = Ht(/^data-[\-\w.\u00B7-\uFFFF]+$/), zu = Ht(/^aria-[\-\w]+$/), Uu = Ht(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), qu = Ht(/^(?:\w+script|data):/i), Bu = Ht(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = Ht(/^html$/i), Wu = Ht(/^[a-z][.\w]*(-[.\w]+)+$/i), Vu = function() {
  return typeof window > "u" ? null : window;
}, Gu = function(e, t) {
  if (Ir(e) !== "object" || typeof e.createPolicy != "function")
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
function il() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vu(), t = function(b) {
    return il(b);
  };
  if (t.version = "2.5.8", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, s = e.HTMLTemplateElement, p = e.Node, h = e.Element, m = e.NodeFilter, f = e.NamedNodeMap, A = f === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : f, _ = e.HTMLFormElement, j = e.DOMParser, $ = e.trustedTypes, E = h.prototype, S = na(E, "cloneNode"), I = na(E, "nextSibling"), F = na(E, "childNodes"), z = na(E, "parentNode");
  if (typeof s == "function") {
    var K = n.createElement("template");
    K.content && K.content.ownerDocument && (n = K.content.ownerDocument);
  }
  var Z = Gu($, r), C = Z ? Z.createHTML("") : "", ie = n, he = ie.implementation, Se = ie.createNodeIterator, Ie = ie.createDocumentFragment, $e = ie.getElementsByTagName, Pe = r.importNode, pe = {};
  try {
    pe = Br(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var ce = {};
  t.isSupported = typeof z == "function" && he && he.createHTMLDocument !== void 0 && pe !== 9;
  var Ce = Du, me = Mu, Be = Fu, Ae = $u, _e = zu, Fe = qu, He = Bu, We = Wu, q = Uu, N = null, U = Re({}, [].concat(lr(Gi), lr(Ja), lr(Qa), lr(eo), lr(Yi))), B = null, x = Re({}, [].concat(lr(Zi), lr(to), lr(Ki), lr(aa))), G = Object.seal(Object.create(null, {
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
  })), O = null, oe = null, te = !0, re = !0, X = !1, se = !0, fe = !1, ne = !0, ue = !1, ae = !1, ye = !1, ze = !1, ge = !1, tt = !1, Ye = !0, we = !1, J = "user-content-", de = !0, rt = !1, Je = {}, Me = null, dr = Re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), pr = null, br = Re({}, ["audio", "video", "img", "source", "image", "track"]), Rt = null, $t = Re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Nt = "http://www.w3.org/1998/Math/MathML", It = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml", yt = it, Kt = !1, ft = null, xr = Re({}, [Nt, It, it], Ka), lt, Ue = ["application/xhtml+xml", "text/html"], Xt = "text/html", ke, ut = null, Et = n.createElement("form"), zt = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, bt = function(b) {
    ut && ut === b || ((!b || Ir(b) !== "object") && (b = {}), b = Br(b), lt = // eslint-disable-next-line unicorn/prefer-includes
    Ue.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? lt = Xt : lt = b.PARSER_MEDIA_TYPE, ke = lt === "application/xhtml+xml" ? Ka : fa, N = "ALLOWED_TAGS" in b ? Re({}, b.ALLOWED_TAGS, ke) : U, B = "ALLOWED_ATTR" in b ? Re({}, b.ALLOWED_ATTR, ke) : x, ft = "ALLOWED_NAMESPACES" in b ? Re({}, b.ALLOWED_NAMESPACES, Ka) : xr, Rt = "ADD_URI_SAFE_ATTR" in b ? Re(
      Br($t),
      // eslint-disable-line indent
      b.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      ke
      // eslint-disable-line indent
    ) : $t, pr = "ADD_DATA_URI_TAGS" in b ? Re(
      Br(br),
      // eslint-disable-line indent
      b.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      ke
      // eslint-disable-line indent
    ) : br, Me = "FORBID_CONTENTS" in b ? Re({}, b.FORBID_CONTENTS, ke) : dr, O = "FORBID_TAGS" in b ? Re({}, b.FORBID_TAGS, ke) : {}, oe = "FORBID_ATTR" in b ? Re({}, b.FORBID_ATTR, ke) : {}, Je = "USE_PROFILES" in b ? b.USE_PROFILES : !1, te = b.ALLOW_ARIA_ATTR !== !1, re = b.ALLOW_DATA_ATTR !== !1, X = b.ALLOW_UNKNOWN_PROTOCOLS || !1, se = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, fe = b.SAFE_FOR_TEMPLATES || !1, ne = b.SAFE_FOR_XML !== !1, ue = b.WHOLE_DOCUMENT || !1, ze = b.RETURN_DOM || !1, ge = b.RETURN_DOM_FRAGMENT || !1, tt = b.RETURN_TRUSTED_TYPE || !1, ye = b.FORCE_BODY || !1, Ye = b.SANITIZE_DOM !== !1, we = b.SANITIZE_NAMED_PROPS || !1, de = b.KEEP_CONTENT !== !1, rt = b.IN_PLACE || !1, q = b.ALLOWED_URI_REGEXP || q, yt = b.NAMESPACE || it, G = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && zt(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (G.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && zt(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (G.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), fe && (re = !1), ge && (ze = !0), Je && (N = Re({}, lr(Yi)), B = [], Je.html === !0 && (Re(N, Gi), Re(B, Zi)), Je.svg === !0 && (Re(N, Ja), Re(B, to), Re(B, aa)), Je.svgFilters === !0 && (Re(N, Qa), Re(B, to), Re(B, aa)), Je.mathMl === !0 && (Re(N, eo), Re(B, Ki), Re(B, aa))), b.ADD_TAGS && (N === U && (N = Br(N)), Re(N, b.ADD_TAGS, ke)), b.ADD_ATTR && (B === x && (B = Br(B)), Re(B, b.ADD_ATTR, ke)), b.ADD_URI_SAFE_ATTR && Re(Rt, b.ADD_URI_SAFE_ATTR, ke), b.FORBID_CONTENTS && (Me === dr && (Me = Br(Me)), Re(Me, b.FORBID_CONTENTS, ke)), de && (N["#text"] = !0), ue && Re(N, ["html", "head", "body"]), N.table && (Re(N, ["tbody"]), delete O.tbody), At && At(b), ut = b);
  }, fr = Re({}, ["mi", "mo", "mn", "ms", "mtext"]), Jt = Re({}, ["annotation-xml"]), vr = Re({}, ["title", "style", "font", "a", "script"]), Ot = Re({}, Ja);
  Re(Ot, Qa), Re(Ot, Pu);
  var Ut = Re({}, eo);
  Re(Ut, Lu);
  var jr = function(b) {
    var v = z(b);
    (!v || !v.tagName) && (v = {
      namespaceURI: yt,
      tagName: "template"
    });
    var R = fa(b.tagName), Y = fa(v.tagName);
    return ft[b.namespaceURI] ? b.namespaceURI === It ? v.namespaceURI === it ? R === "svg" : v.namespaceURI === Nt ? R === "svg" && (Y === "annotation-xml" || fr[Y]) : !!Ot[R] : b.namespaceURI === Nt ? v.namespaceURI === it ? R === "math" : v.namespaceURI === It ? R === "math" && Jt[Y] : !!Ut[R] : b.namespaceURI === it ? v.namespaceURI === It && !Jt[Y] || v.namespaceURI === Nt && !fr[Y] ? !1 : !Ut[R] && (vr[R] || !Ot[R]) : !!(lt === "application/xhtml+xml" && ft[b.namespaceURI]) : !1;
  }, nt = function(b) {
    En(t.removed, {
      element: b
    });
    try {
      b.parentNode.removeChild(b);
    } catch {
      try {
        b.outerHTML = C;
      } catch {
        b.remove();
      }
    }
  }, Pt = function(b, v) {
    try {
      En(t.removed, {
        attribute: v.getAttributeNode(b),
        from: v
      });
    } catch {
      En(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(b), b === "is" && !B[b])
      if (ze || ge)
        try {
          nt(v);
        } catch {
        }
      else
        try {
          v.setAttribute(b, "");
        } catch {
        }
  }, qt = function(b) {
    var v, R;
    if (ye)
      b = "<remove></remove>" + b;
    else {
      var Y = Vi(b, /^[\r\n\t ]+/);
      R = Y && Y[0];
    }
    lt === "application/xhtml+xml" && yt === it && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    var le = Z ? Z.createHTML(b) : b;
    if (yt === it)
      try {
        v = new j().parseFromString(le, lt);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = he.createDocument(yt, "template", null);
      try {
        v.documentElement.innerHTML = Kt ? C : le;
      } catch {
      }
    }
    var Te = v.body || v.documentElement;
    return b && R && Te.insertBefore(n.createTextNode(R), Te.childNodes[0] || null), yt === it ? $e.call(v, ue ? "html" : "body")[0] : ue ? v.documentElement : Te;
  }, hr = function(b) {
    return Se.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, jt = function(b) {
    return b instanceof _ && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof A) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, xt = function(b) {
    return Ir(p) === "object" ? b instanceof p : b && Ir(b) === "object" && typeof b.nodeType == "number" && typeof b.nodeName == "string";
  }, st = function(b, v, R) {
    ce[b] && ju(ce[b], function(Y) {
      Y.call(t, v, R, ut);
    });
  }, Lt = function(b) {
    var v;
    if (st("beforeSanitizeElements", b, null), jt(b) || vt(/[\u0080-\uFFFF]/, b.nodeName))
      return nt(b), !0;
    var R = ke(b.nodeName);
    if (st("uponSanitizeElement", b, {
      tagName: R,
      allowedTags: N
    }), b.hasChildNodes() && !xt(b.firstElementChild) && (!xt(b.content) || !xt(b.content.firstElementChild)) && vt(/<[/\w]/g, b.innerHTML) && vt(/<[/\w]/g, b.textContent) || R === "select" && vt(/<template/i, b.innerHTML) || b.nodeType === 7 || ne && b.nodeType === 8 && vt(/<[/\w]/g, b.data))
      return nt(b), !0;
    if (!N[R] || O[R]) {
      if (!O[R] && Qt(R) && (G.tagNameCheck instanceof RegExp && vt(G.tagNameCheck, R) || G.tagNameCheck instanceof Function && G.tagNameCheck(R)))
        return !1;
      if (de && !Me[R]) {
        var Y = z(b) || b.parentNode, le = F(b) || b.childNodes;
        if (le && Y)
          for (var Te = le.length, Oe = Te - 1; Oe >= 0; --Oe) {
            var qe = S(le[Oe], !0);
            qe.__removalCount = (b.__removalCount || 0) + 1, Y.insertBefore(qe, I(b));
          }
      }
      return nt(b), !0;
    }
    return b instanceof h && !jr(b) || (R === "noscript" || R === "noembed" || R === "noframes") && vt(/<\/no(script|embed|frames)/i, b.innerHTML) ? (nt(b), !0) : (fe && b.nodeType === 3 && (v = b.textContent, v = ir(v, Ce, " "), v = ir(v, me, " "), v = ir(v, Be, " "), b.textContent !== v && (En(t.removed, {
      element: b.cloneNode()
    }), b.textContent = v)), st("afterSanitizeElements", b, null), !1);
  }, wr = function(b, v, R) {
    if (Ye && (v === "id" || v === "name") && (R in n || R in Et))
      return !1;
    if (!(re && !oe[v] && vt(Ae, v)) && !(te && vt(_e, v))) {
      if (!B[v] || oe[v]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Qt(b) && (G.tagNameCheck instanceof RegExp && vt(G.tagNameCheck, b) || G.tagNameCheck instanceof Function && G.tagNameCheck(b)) && (G.attributeNameCheck instanceof RegExp && vt(G.attributeNameCheck, v) || G.attributeNameCheck instanceof Function && G.attributeNameCheck(v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && G.allowCustomizedBuiltInElements && (G.tagNameCheck instanceof RegExp && vt(G.tagNameCheck, R) || G.tagNameCheck instanceof Function && G.tagNameCheck(R)))
        ) return !1;
      } else if (!Rt[v] && !vt(q, ir(R, He, "")) && !((v === "src" || v === "xlink:href" || v === "href") && b !== "script" && Ru(R, "data:") === 0 && pr[b]) && !(X && !vt(Fe, ir(R, He, ""))) && R)
        return !1;
    }
    return !0;
  }, Qt = function(b) {
    return b !== "annotation-xml" && Vi(b, We);
  }, Bt = function(b) {
    var v, R, Y, le;
    st("beforeSanitizeAttributes", b, null);
    var Te = b.attributes;
    if (!(!Te || jt(b))) {
      var Oe = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: B
      };
      for (le = Te.length; le--; ) {
        v = Te[le];
        var qe = v, at = qe.name, Le = qe.namespaceURI;
        if (R = at === "value" ? v.value : Nu(v.value), Y = ke(at), Oe.attrName = Y, Oe.attrValue = R, Oe.keepAttr = !0, Oe.forceKeepAttr = void 0, st("uponSanitizeAttribute", b, Oe), R = Oe.attrValue, !Oe.forceKeepAttr && (Pt(at, b), !!Oe.keepAttr)) {
          if (!se && vt(/\/>/i, R)) {
            Pt(at, b);
            continue;
          }
          fe && (R = ir(R, Ce, " "), R = ir(R, me, " "), R = ir(R, Be, " "));
          var Tt = ke(b.nodeName);
          if (wr(Tt, Y, R)) {
            if (we && (Y === "id" || Y === "name") && (Pt(at, b), R = J + R), ne && vt(/((--!?|])>)|<\/(style|title)/i, R)) {
              Pt(at, b);
              continue;
            }
            if (Z && Ir($) === "object" && typeof $.getAttributeType == "function" && !Le)
              switch ($.getAttributeType(Tt, Y)) {
                case "TrustedHTML": {
                  R = Z.createHTML(R);
                  break;
                }
                case "TrustedScriptURL": {
                  R = Z.createScriptURL(R);
                  break;
                }
              }
            try {
              Le ? b.setAttributeNS(Le, at, R) : b.setAttribute(at, R), jt(b) ? nt(b) : Wi(t.removed);
            } catch {
            }
          }
        }
      }
      st("afterSanitizeAttributes", b, null);
    }
  }, er = function b(v) {
    var R, Y = hr(v);
    for (st("beforeSanitizeShadowDOM", v, null); R = Y.nextNode(); )
      st("uponSanitizeShadowNode", R, null), Lt(R), Bt(R), R.content instanceof a && b(R.content);
    st("afterSanitizeShadowDOM", v, null);
  };
  return t.sanitize = function(b) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R, Y, le, Te, Oe;
    if (Kt = !b, Kt && (b = "<!-->"), typeof b != "string" && !xt(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw Xa("dirty is not a string, aborting");
      } else
        throw Xa("toString is not a function");
    if (!t.isSupported) {
      if (Ir(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof b == "string")
          return e.toStaticHTML(b);
        if (xt(b))
          return e.toStaticHTML(b.outerHTML);
      }
      return b;
    }
    if (ae || bt(v), t.removed = [], typeof b == "string" && (rt = !1), rt) {
      if (b.nodeName) {
        var qe = ke(b.nodeName);
        if (!N[qe] || O[qe])
          throw Xa("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof p)
      R = qt("<!---->"), Y = R.ownerDocument.importNode(b, !0), Y.nodeType === 1 && Y.nodeName === "BODY" || Y.nodeName === "HTML" ? R = Y : R.appendChild(Y);
    else {
      if (!ze && !fe && !ue && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return Z && tt ? Z.createHTML(b) : b;
      if (R = qt(b), !R)
        return ze ? null : tt ? C : "";
    }
    R && ye && nt(R.firstChild);
    for (var at = hr(rt ? b : R); le = at.nextNode(); )
      le.nodeType === 3 && le === Te || (Lt(le), Bt(le), le.content instanceof a && er(le.content), Te = le);
    if (Te = null, rt)
      return b;
    if (ze) {
      if (ge)
        for (Oe = Ie.call(R.ownerDocument); R.firstChild; )
          Oe.appendChild(R.firstChild);
      else
        Oe = R;
      return (B.shadowroot || B.shadowrootmod) && (Oe = Pe.call(r, Oe, !0)), Oe;
    }
    var Le = ue ? R.outerHTML : R.innerHTML;
    return ue && N["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && vt(Hu, R.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + Le), fe && (Le = ir(Le, Ce, " "), Le = ir(Le, me, " "), Le = ir(Le, Be, " ")), Z && tt ? Z.createHTML(Le) : Le;
  }, t.setConfig = function(b) {
    bt(b), ae = !0;
  }, t.clearConfig = function() {
    ut = null, ae = !1;
  }, t.isValidAttribute = function(b, v, R) {
    ut || bt({});
    var Y = ke(b), le = ke(v);
    return wr(Y, le, R);
  }, t.addHook = function(b, v) {
    typeof v == "function" && (ce[b] = ce[b] || [], En(ce[b], v));
  }, t.removeHook = function(b) {
    if (ce[b])
      return Wi(ce[b]);
  }, t.removeHooks = function(b) {
    ce[b] && (ce[b] = []);
  }, t.removeAllHooks = function() {
    ce = {};
  }, t;
}
var Yu = il();
function Zu(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
const Yr = (e) => ({ __html: Yu.sanitize(e) }), Xi = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; )
    n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
let ro = !1;
const Ku = (e, t) => {
  ro || (ro = !0, setTimeout(() => {
    e(), ro = !1;
  }, t));
};
let Ji;
const Xu = (e, t) => {
  window.clearTimeout(Ji), Ji = window.setTimeout(e, t);
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
const sl = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: p = "",
  component: h = ""
}) => {
  const { dataLayer: m } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: h.toLowerCase()
  };
  m && m.push(f);
};
var Hr = {}, Qi;
function Ju() {
  if (Qi) return Hr;
  Qi = 1;
  var e = mt;
  function t(o) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, y = 1; y < arguments.length; y++) u += "&args[]=" + encodeURIComponent(arguments[y]);
    return "Minified React error #" + o + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function p(o) {
    return r.call(s, o) ? !0 : r.call(a, o) ? !1 : n.test(o) ? s[o] = !0 : (a[o] = !0, !1);
  }
  function h(o, u, y, k, M, P, W) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = k, this.attributeNamespace = M, this.mustUseProperty = y, this.propertyName = o, this.type = u, this.sanitizeURL = P, this.removeEmptyString = W;
  }
  var m = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    m[o] = new h(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var u = o[0];
    m[u] = new h(u, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    m[o] = new h(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    m[o] = new h(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    m[o] = new h(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    m[o] = new h(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    m[o] = new h(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    m[o] = new h(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    m[o] = new h(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var f = /[\-:]([a-z])/g;
  function A(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var u = o.replace(
      f,
      A
    );
    m[u] = new h(u, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var u = o.replace(f, A);
    m[u] = new h(u, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var u = o.replace(f, A);
    m[u] = new h(u, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    m[o] = new h(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), m.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    m[o] = new h(o, 1, !1, o.toLowerCase(), null, !0, !0);
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
  }, j = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_).forEach(function(o) {
    j.forEach(function(u) {
      u = u + o.charAt(0).toUpperCase() + o.substring(1), _[u] = _[o];
    });
  });
  var $ = /["'&<>]/;
  function E(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var u = $.exec(o);
    if (u) {
      var y = "", k, M = 0;
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
        M !== k && (y += o.substring(M, k)), M = k + 1, y += u;
      }
      o = M !== k ? y + o.substring(M, k) : y;
    }
    return o;
  }
  var S = /([A-Z])/g, I = /^ms-/, F = Array.isArray;
  function z(o, u) {
    return { insertionMode: o, selectedValue: u };
  }
  function K(o, u, y) {
    switch (u) {
      case "select":
        return z(1, y.value != null ? y.value : y.defaultValue);
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
    return 4 <= o.insertionMode || o.insertionMode === 0 ? z(1, null) : o;
  }
  var Z = /* @__PURE__ */ new Map();
  function C(o, u, y) {
    if (typeof y != "object") throw Error(t(62));
    u = !0;
    for (var k in y) if (r.call(y, k)) {
      var M = y[k];
      if (M != null && typeof M != "boolean" && M !== "") {
        if (k.indexOf("--") === 0) {
          var P = E(k);
          M = E(("" + M).trim());
        } else {
          P = k;
          var W = Z.get(P);
          W !== void 0 || (W = E(P.replace(S, "-$1").toLowerCase().replace(I, "-ms-")), Z.set(P, W)), P = W, M = typeof M == "number" ? M === 0 || r.call(_, k) ? "" + M : M + "px" : E(("" + M).trim());
        }
        u ? (u = !1, o.push(' style="', P, ":", M)) : o.push(";", P, ":", M);
      }
    }
    u || o.push('"');
  }
  function ie(o, u, y, k) {
    switch (y) {
      case "style":
        C(o, u, k);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < y.length) || y[0] !== "o" && y[0] !== "O" || y[1] !== "n" && y[1] !== "N") {
      if (u = m.hasOwnProperty(y) ? m[y] : null, u !== null) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (y = u.attributeName, u.type) {
          case 3:
            k && o.push(" ", y, '=""');
            break;
          case 4:
            k === !0 ? o.push(" ", y, '=""') : k !== !1 && o.push(" ", y, '="', E(k), '"');
            break;
          case 5:
            isNaN(k) || o.push(" ", y, '="', E(k), '"');
            break;
          case 6:
            !isNaN(k) && 1 <= k && o.push(" ", y, '="', E(k), '"');
            break;
          default:
            u.sanitizeURL && (k = "" + k), o.push(" ", y, '="', E(k), '"');
        }
      } else if (p(y)) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = y.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        o.push(" ", y, '="', E(k), '"');
      }
    }
  }
  function he(o, u, y) {
    if (u != null) {
      if (y != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && o.push("" + u);
    }
  }
  function Se(o) {
    var u = "";
    return e.Children.forEach(o, function(y) {
      y != null && (u += y);
    }), u;
  }
  function Ie(o, u, y, k) {
    o.push(pe(y));
    var M = y = null, P;
    for (P in u) if (r.call(u, P)) {
      var W = u[P];
      if (W != null) switch (P) {
        case "children":
          y = W;
          break;
        case "dangerouslySetInnerHTML":
          M = W;
          break;
        default:
          ie(o, k, P, W);
      }
    }
    return o.push(">"), he(o, M, y), typeof y == "string" ? (o.push(E(y)), null) : y;
  }
  var $e = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Pe = /* @__PURE__ */ new Map();
  function pe(o) {
    var u = Pe.get(o);
    if (u === void 0) {
      if (!$e.test(o)) throw Error(t(65, o));
      u = "<" + o, Pe.set(o, u);
    }
    return u;
  }
  function ce(o, u, y, k, M) {
    switch (u) {
      case "select":
        o.push(pe("select"));
        var P = null, W = null;
        for (Ee in y) if (r.call(y, Ee)) {
          var ee = y[Ee];
          if (ee != null) switch (Ee) {
            case "children":
              P = ee;
              break;
            case "dangerouslySetInnerHTML":
              W = ee;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ie(o, k, Ee, ee);
          }
        }
        return o.push(">"), he(o, W, P), P;
      case "option":
        W = M.selectedValue, o.push(pe("option"));
        var be = ee = null, ve = null, Ee = null;
        for (P in y) if (r.call(y, P)) {
          var ot = y[P];
          if (ot != null) switch (P) {
            case "children":
              ee = ot;
              break;
            case "selected":
              ve = ot;
              break;
            case "dangerouslySetInnerHTML":
              Ee = ot;
              break;
            case "value":
              be = ot;
            default:
              ie(o, k, P, ot);
          }
        }
        if (W != null) if (y = be !== null ? "" + be : Se(ee), F(W)) {
          for (k = 0; k < W.length; k++)
            if ("" + W[k] === y) {
              o.push(' selected=""');
              break;
            }
        } else "" + W === y && o.push(' selected=""');
        else ve && o.push(' selected=""');
        return o.push(">"), he(o, Ee, ee), ee;
      case "textarea":
        o.push(pe("textarea")), Ee = W = P = null;
        for (ee in y) if (r.call(y, ee) && (be = y[ee], be != null)) switch (ee) {
          case "children":
            Ee = be;
            break;
          case "value":
            P = be;
            break;
          case "defaultValue":
            W = be;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ie(
              o,
              k,
              ee,
              be
            );
        }
        if (P === null && W !== null && (P = W), o.push(">"), Ee != null) {
          if (P != null) throw Error(t(92));
          if (F(Ee) && 1 < Ee.length) throw Error(t(93));
          P = "" + Ee;
        }
        return typeof P == "string" && P[0] === `
` && o.push(`
`), P !== null && o.push(E("" + P)), null;
      case "input":
        o.push(pe("input")), be = Ee = ee = P = null;
        for (W in y) if (r.call(y, W) && (ve = y[W], ve != null)) switch (W) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            be = ve;
            break;
          case "defaultValue":
            ee = ve;
            break;
          case "checked":
            Ee = ve;
            break;
          case "value":
            P = ve;
            break;
          default:
            ie(o, k, W, ve);
        }
        return Ee !== null ? ie(o, k, "checked", Ee) : be !== null && ie(o, k, "checked", be), P !== null ? ie(o, k, "value", P) : ee !== null && ie(o, k, "value", ee), o.push("/>"), null;
      case "menuitem":
        o.push(pe("menuitem"));
        for (var rr in y) if (r.call(y, rr) && (P = y[rr], P != null)) switch (rr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ie(o, k, rr, P);
        }
        return o.push(">"), null;
      case "title":
        o.push(pe("title")), P = null;
        for (ot in y) if (r.call(y, ot) && (W = y[ot], W != null)) switch (ot) {
          case "children":
            P = W;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ie(o, k, ot, W);
        }
        return o.push(">"), P;
      case "listing":
      case "pre":
        o.push(pe(u)), W = P = null;
        for (be in y) if (r.call(y, be) && (ee = y[be], ee != null)) switch (be) {
          case "children":
            P = ee;
            break;
          case "dangerouslySetInnerHTML":
            W = ee;
            break;
          default:
            ie(o, k, be, ee);
        }
        if (o.push(">"), W != null) {
          if (P != null) throw Error(t(60));
          if (typeof W != "object" || !("__html" in W)) throw Error(t(61));
          y = W.__html, y != null && (typeof y == "string" && 0 < y.length && y[0] === `
` ? o.push(`
`, y) : o.push("" + y));
        }
        return typeof P == "string" && P[0] === `
` && o.push(`
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
        o.push(pe(u));
        for (var nr in y) if (r.call(y, nr) && (P = y[nr], P != null)) switch (nr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ie(o, k, nr, P);
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
        return Ie(
          o,
          y,
          u,
          k
        );
      case "html":
        return M.insertionMode === 0 && o.push("<!DOCTYPE html>"), Ie(o, y, u, k);
      default:
        if (u.indexOf("-") === -1 && typeof y.is != "string") return Ie(o, y, u, k);
        o.push(pe(u)), W = P = null;
        for (ve in y) if (r.call(y, ve) && (ee = y[ve], ee != null)) switch (ve) {
          case "children":
            P = ee;
            break;
          case "dangerouslySetInnerHTML":
            W = ee;
            break;
          case "style":
            C(o, k, ee);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            p(ve) && typeof ee != "function" && typeof ee != "symbol" && o.push(" ", ve, '="', E(ee), '"');
        }
        return o.push(">"), he(o, W, P), P;
    }
  }
  function Ce(o, u, y) {
    if (o.push('<!--$?--><template id="'), y === null) throw Error(t(395));
    return o.push(y), o.push('"></template>');
  }
  function me(o, u, y, k) {
    switch (y.insertionMode) {
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
  function Be(o, u) {
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
  var Ae = /[<\u2028\u2029]/g;
  function _e(o) {
    return JSON.stringify(o).replace(Ae, function(u) {
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
  function Fe(o, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: o };
  }
  function He(o, u, y, k) {
    return y.generateStaticMarkup ? (o.push(E(u)), !1) : (u === "" ? o = k : (k && o.push("<!-- -->"), o.push(E(u)), o = !0), o);
  }
  var We = Object.assign, q = Symbol.for("react.element"), N = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), O = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), fe = Symbol.for("react.scope"), ne = Symbol.for("react.debug_trace_mode"), ue = Symbol.for("react.legacy_hidden"), ae = Symbol.for("react.default_value"), ye = Symbol.iterator;
  function ze(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case U:
        return "Fragment";
      case N:
        return "Portal";
      case x:
        return "Profiler";
      case B:
        return "StrictMode";
      case te:
        return "Suspense";
      case re:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case O:
        return (o.displayName || "Context") + ".Consumer";
      case G:
        return (o._context.displayName || "Context") + ".Provider";
      case oe:
        var u = o.render;
        return o = o.displayName, o || (o = u.displayName || u.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case X:
        return u = o.displayName || null, u !== null ? u : ze(o.type) || "Memo";
      case se:
        u = o._payload, o = o._init;
        try {
          return ze(o(u));
        } catch {
        }
    }
    return null;
  }
  var ge = {};
  function tt(o, u) {
    if (o = o.contextTypes, !o) return ge;
    var y = {}, k;
    for (k in o) y[k] = u[k];
    return y;
  }
  var Ye = null;
  function we(o, u) {
    if (o !== u) {
      o.context._currentValue2 = o.parentValue, o = o.parent;
      var y = u.parent;
      if (o === null) {
        if (y !== null) throw Error(t(401));
      } else {
        if (y === null) throw Error(t(401));
        we(o, y);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function J(o) {
    o.context._currentValue2 = o.parentValue, o = o.parent, o !== null && J(o);
  }
  function de(o) {
    var u = o.parent;
    u !== null && de(u), o.context._currentValue2 = o.value;
  }
  function rt(o, u) {
    if (o.context._currentValue2 = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === u.depth ? we(o, u) : rt(o, u);
  }
  function Je(o, u) {
    var y = u.parent;
    if (y === null) throw Error(t(402));
    o.depth === y.depth ? we(o, y) : Je(o, y), u.context._currentValue2 = u.value;
  }
  function Me(o) {
    var u = Ye;
    u !== o && (u === null ? de(o) : o === null ? J(u) : u.depth === o.depth ? we(u, o) : u.depth > o.depth ? rt(u, o) : Je(u, o), Ye = o);
  }
  var dr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, u) {
    o = o._reactInternals, o.queue !== null && o.queue.push(u);
  }, enqueueReplaceState: function(o, u) {
    o = o._reactInternals, o.replace = !0, o.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function pr(o, u, y, k) {
    var M = o.state !== void 0 ? o.state : null;
    o.updater = dr, o.props = y, o.state = M;
    var P = { queue: [], replace: !1 };
    o._reactInternals = P;
    var W = u.contextType;
    if (o.context = typeof W == "object" && W !== null ? W._currentValue2 : k, W = u.getDerivedStateFromProps, typeof W == "function" && (W = W(y, M), M = W == null ? M : We({}, M, W), o.state = M), typeof u.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (u = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), u !== o.state && dr.enqueueReplaceState(o, o.state, null), P.queue !== null && 0 < P.queue.length) if (u = P.queue, W = P.replace, P.queue = null, P.replace = !1, W && u.length === 1) o.state = u[0];
    else {
      for (P = W ? u[0] : o.state, M = !0, W = W ? 1 : 0; W < u.length; W++) {
        var ee = u[W];
        ee = typeof ee == "function" ? ee.call(o, P, y, k) : ee, ee != null && (M ? (M = !1, P = We({}, P, ee)) : We(P, ee));
      }
      o.state = P;
    }
    else P.queue = null;
  }
  var br = { id: 1, overflow: "" };
  function Rt(o, u, y) {
    var k = o.id;
    o = o.overflow;
    var M = 32 - $t(k) - 1;
    k &= ~(1 << M), y += 1;
    var P = 32 - $t(u) + M;
    if (30 < P) {
      var W = M - M % 5;
      return P = (k & (1 << W) - 1).toString(32), k >>= W, M -= W, { id: 1 << 32 - $t(u) + M | y << M | k, overflow: P + o };
    }
    return { id: 1 << P | y << M | k, overflow: o };
  }
  var $t = Math.clz32 ? Math.clz32 : it, Nt = Math.log, It = Math.LN2;
  function it(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Nt(o) / It | 0) | 0;
  }
  function yt(o, u) {
    return o === u && (o !== 0 || 1 / o === 1 / u) || o !== o && u !== u;
  }
  var Kt = typeof Object.is == "function" ? Object.is : yt, ft = null, xr = null, lt = null, Ue = null, Xt = !1, ke = !1, ut = 0, Et = null, zt = 0;
  function bt() {
    if (ft === null) throw Error(t(321));
    return ft;
  }
  function fr() {
    if (0 < zt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Jt() {
    return Ue === null ? lt === null ? (Xt = !1, lt = Ue = fr()) : (Xt = !0, Ue = lt) : Ue.next === null ? (Xt = !1, Ue = Ue.next = fr()) : (Xt = !0, Ue = Ue.next), Ue;
  }
  function vr() {
    xr = ft = null, ke = !1, lt = null, zt = 0, Ue = Et = null;
  }
  function Ot(o, u) {
    return typeof u == "function" ? u(o) : u;
  }
  function Ut(o, u, y) {
    if (ft = bt(), Ue = Jt(), Xt) {
      var k = Ue.queue;
      if (u = k.dispatch, Et !== null && (y = Et.get(k), y !== void 0)) {
        Et.delete(k), k = Ue.memoizedState;
        do
          k = o(k, y.action), y = y.next;
        while (y !== null);
        return Ue.memoizedState = k, [k, u];
      }
      return [Ue.memoizedState, u];
    }
    return o = o === Ot ? typeof u == "function" ? u() : u : y !== void 0 ? y(u) : u, Ue.memoizedState = o, o = Ue.queue = { last: null, dispatch: null }, o = o.dispatch = nt.bind(null, ft, o), [Ue.memoizedState, o];
  }
  function jr(o, u) {
    if (ft = bt(), Ue = Jt(), u = u === void 0 ? null : u, Ue !== null) {
      var y = Ue.memoizedState;
      if (y !== null && u !== null) {
        var k = y[1];
        e: if (k === null) k = !1;
        else {
          for (var M = 0; M < k.length && M < u.length; M++) if (!Kt(u[M], k[M])) {
            k = !1;
            break e;
          }
          k = !0;
        }
        if (k) return y[0];
      }
    }
    return o = o(), Ue.memoizedState = [o, u], o;
  }
  function nt(o, u, y) {
    if (25 <= zt) throw Error(t(301));
    if (o === ft) if (ke = !0, o = { action: y, next: null }, Et === null && (Et = /* @__PURE__ */ new Map()), y = Et.get(u), y === void 0) Et.set(u, o);
    else {
      for (u = y; u.next !== null; ) u = u.next;
      u.next = o;
    }
  }
  function Pt() {
    throw Error(t(394));
  }
  function qt() {
  }
  var hr = { readContext: function(o) {
    return o._currentValue2;
  }, useContext: function(o) {
    return bt(), o._currentValue2;
  }, useMemo: jr, useReducer: Ut, useRef: function(o) {
    ft = bt(), Ue = Jt();
    var u = Ue.memoizedState;
    return u === null ? (o = { current: o }, Ue.memoizedState = o) : u;
  }, useState: function(o) {
    return Ut(Ot, o);
  }, useInsertionEffect: qt, useLayoutEffect: function() {
  }, useCallback: function(o, u) {
    return jr(function() {
      return o;
    }, u);
  }, useImperativeHandle: qt, useEffect: qt, useDebugValue: qt, useDeferredValue: function(o) {
    return bt(), o;
  }, useTransition: function() {
    return bt(), [
      !1,
      Pt
    ];
  }, useId: function() {
    var o = xr.treeContext, u = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - $t(o) - 1)).toString(32) + u;
    var y = jt;
    if (y === null) throw Error(t(404));
    return u = ut++, o = ":" + y.idPrefix + "R" + o, 0 < u && (o += "H" + u.toString(32)), o + ":";
  }, useMutableSource: function(o, u) {
    return bt(), u(o._source);
  }, useSyncExternalStore: function(o, u, y) {
    if (y === void 0) throw Error(t(407));
    return y();
  } }, jt = null, xt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function st(o) {
    return console.error(o), null;
  }
  function Lt() {
  }
  function wr(o, u, y, k, M, P, W, ee, be) {
    var ve = [], Ee = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: k, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ee, pingedTasks: ve, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: M === void 0 ? st : M, onAllReady: Lt, onShellReady: W === void 0 ? Lt : W, onShellError: Lt, onFatalError: Lt }, y = Bt(u, 0, null, y, !1, !1), y.parentFlushed = !0, o = Qt(u, o, null, y, Ee, ge, null, br), ve.push(o), u;
  }
  function Qt(o, u, y, k, M, P, W, ee) {
    o.allPendingTasks++, y === null ? o.pendingRootTasks++ : y.pendingTasks++;
    var be = { node: u, ping: function() {
      var ve = o.pingedTasks;
      ve.push(be), ve.length === 1 && mn(o);
    }, blockedBoundary: y, blockedSegment: k, abortSet: M, legacyContext: P, context: W, treeContext: ee };
    return M.add(be), be;
  }
  function Bt(o, u, y, k, M, P) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: k, boundary: y, lastPushedText: M, textEmbedded: P };
  }
  function er(o, u) {
    if (o = o.onError(u), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function b(o, u) {
    var y = o.onShellError;
    y(u), y = o.onFatalError, y(u), o.destination !== null ? (o.status = 2, o.destination.destroy(u)) : (o.status = 1, o.fatalError = u);
  }
  function v(o, u, y, k, M) {
    for (ft = {}, xr = u, ut = 0, o = y(k, M); ke; ) ke = !1, ut = 0, zt += 1, Ue = null, o = y(k, M);
    return vr(), o;
  }
  function R(o, u, y, k) {
    var M = y.render(), P = k.childContextTypes;
    if (P != null) {
      var W = u.legacyContext;
      if (typeof y.getChildContext != "function") k = W;
      else {
        y = y.getChildContext();
        for (var ee in y) if (!(ee in P)) throw Error(t(108, ze(k) || "Unknown", ee));
        k = We({}, W, y);
      }
      u.legacyContext = k, Te(o, u, M), u.legacyContext = W;
    } else Te(o, u, M);
  }
  function Y(o, u) {
    if (o && o.defaultProps) {
      u = We({}, u), o = o.defaultProps;
      for (var y in o) u[y] === void 0 && (u[y] = o[y]);
      return u;
    }
    return u;
  }
  function le(o, u, y, k, M) {
    if (typeof y == "function") if (y.prototype && y.prototype.isReactComponent) {
      M = tt(y, u.legacyContext);
      var P = y.contextType;
      P = new y(k, typeof P == "object" && P !== null ? P._currentValue2 : M), pr(P, y, k, M), R(o, u, P, y);
    } else {
      P = tt(y, u.legacyContext), M = v(o, u, y, k, P);
      var W = ut !== 0;
      if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) pr(M, y, k, P), R(o, u, M, y);
      else if (W) {
        k = u.treeContext, u.treeContext = Rt(k, 1, 0);
        try {
          Te(o, u, M);
        } finally {
          u.treeContext = k;
        }
      } else Te(o, u, M);
    }
    else if (typeof y == "string") {
      switch (M = u.blockedSegment, P = ce(M.chunks, y, k, o.responseState, M.formatContext), M.lastPushedText = !1, W = M.formatContext, M.formatContext = K(W, y, k), qe(o, u, P), M.formatContext = W, y) {
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
        case ue:
        case ne:
        case B:
        case x:
        case U:
          Te(o, u, k.children);
          return;
        case re:
          Te(o, u, k.children);
          return;
        case fe:
          throw Error(t(343));
        case te:
          e: {
            y = u.blockedBoundary, M = u.blockedSegment, P = k.fallback, k = k.children, W = /* @__PURE__ */ new Set();
            var ee = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: W, errorDigest: null }, be = Bt(o, M.chunks.length, ee, M.formatContext, !1, !1);
            M.children.push(be), M.lastPushedText = !1;
            var ve = Bt(o, 0, null, M.formatContext, !1, !1);
            ve.parentFlushed = !0, u.blockedBoundary = ee, u.blockedSegment = ve;
            try {
              if (qe(
                o,
                u,
                k
              ), o.responseState.generateStaticMarkup || ve.lastPushedText && ve.textEmbedded && ve.chunks.push("<!-- -->"), ve.status = 1, Tt(ee, ve), ee.pendingTasks === 0) break e;
            } catch (Ee) {
              ve.status = 4, ee.forceClientRender = !0, ee.errorDigest = er(o, Ee);
            } finally {
              u.blockedBoundary = y, u.blockedSegment = M;
            }
            u = Qt(o, P, y, be, W, u.legacyContext, u.context, u.treeContext), o.pingedTasks.push(u);
          }
          return;
      }
      if (typeof y == "object" && y !== null) switch (y.$$typeof) {
        case oe:
          if (k = v(o, u, y.render, k, M), ut !== 0) {
            y = u.treeContext, u.treeContext = Rt(y, 1, 0);
            try {
              Te(o, u, k);
            } finally {
              u.treeContext = y;
            }
          } else Te(o, u, k);
          return;
        case X:
          y = y.type, k = Y(y, k), le(o, u, y, k, M);
          return;
        case G:
          if (M = k.children, y = y._context, k = k.value, P = y._currentValue2, y._currentValue2 = k, W = Ye, Ye = k = { parent: W, depth: W === null ? 0 : W.depth + 1, context: y, parentValue: P, value: k }, u.context = k, Te(o, u, M), o = Ye, o === null) throw Error(t(403));
          k = o.parentValue, o.context._currentValue2 = k === ae ? o.context._defaultValue : k, o = Ye = o.parent, u.context = o;
          return;
        case O:
          k = k.children, k = k(y._currentValue2), Te(o, u, k);
          return;
        case se:
          M = y._init, y = M(y._payload), k = Y(y, k), le(
            o,
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
  function Te(o, u, y) {
    if (u.node = y, typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case q:
          le(o, u, y.type, y.props, y.ref);
          return;
        case N:
          throw Error(t(257));
        case se:
          var k = y._init;
          y = k(y._payload), Te(o, u, y);
          return;
      }
      if (F(y)) {
        Oe(o, u, y);
        return;
      }
      if (y === null || typeof y != "object" ? k = null : (k = ye && y[ye] || y["@@iterator"], k = typeof k == "function" ? k : null), k && (k = k.call(y))) {
        if (y = k.next(), !y.done) {
          var M = [];
          do
            M.push(y.value), y = k.next();
          while (!y.done);
          Oe(o, u, M);
        }
        return;
      }
      throw o = Object.prototype.toString.call(y), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : o));
    }
    typeof y == "string" ? (k = u.blockedSegment, k.lastPushedText = He(u.blockedSegment.chunks, y, o.responseState, k.lastPushedText)) : typeof y == "number" && (k = u.blockedSegment, k.lastPushedText = He(u.blockedSegment.chunks, "" + y, o.responseState, k.lastPushedText));
  }
  function Oe(o, u, y) {
    for (var k = y.length, M = 0; M < k; M++) {
      var P = u.treeContext;
      u.treeContext = Rt(P, k, M);
      try {
        qe(o, u, y[M]);
      } finally {
        u.treeContext = P;
      }
    }
  }
  function qe(o, u, y) {
    var k = u.blockedSegment.formatContext, M = u.legacyContext, P = u.context;
    try {
      return Te(o, u, y);
    } catch (be) {
      if (vr(), typeof be == "object" && be !== null && typeof be.then == "function") {
        y = be;
        var W = u.blockedSegment, ee = Bt(o, W.chunks.length, null, W.formatContext, W.lastPushedText, !0);
        W.children.push(ee), W.lastPushedText = !1, o = Qt(o, u.node, u.blockedBoundary, ee, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, y.then(o, o), u.blockedSegment.formatContext = k, u.legacyContext = M, u.context = P, Me(P);
      } else throw u.blockedSegment.formatContext = k, u.legacyContext = M, u.context = P, Me(P), be;
    }
  }
  function at(o) {
    var u = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, tr(this, u, o);
  }
  function Le(o, u, y) {
    var k = o.blockedBoundary;
    o.blockedSegment.status = 3, k === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (k.pendingTasks--, k.forceClientRender || (k.forceClientRender = !0, o = y === void 0 ? Error(t(432)) : y, k.errorDigest = u.onError(o), k.parentFlushed && u.clientRenderedBoundaries.push(k)), k.fallbackAbortableTasks.forEach(function(M) {
      return Le(M, u, y);
    }), k.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (k = u.onAllReady, k()));
  }
  function Tt(o, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var y = u.children[0];
      y.id = u.id, y.parentFlushed = !0, y.status === 1 && Tt(o, y);
    } else o.completedSegments.push(u);
  }
  function tr(o, u, y) {
    if (u === null) {
      if (y.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = y;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = Lt, u = o.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (y.parentFlushed && y.status === 1 && Tt(u, y), u.parentFlushed && o.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(at, o), u.fallbackAbortableTasks.clear()) : y.parentFlushed && y.status === 1 && (Tt(u, y), u.completedSegments.length === 1 && u.parentFlushed && o.partialBoundaries.push(u)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function mn(o) {
    if (o.status !== 2) {
      var u = Ye, y = xt.current;
      xt.current = hr;
      var k = jt;
      jt = o.responseState;
      try {
        var M = o.pingedTasks, P;
        for (P = 0; P < M.length; P++) {
          var W = M[P], ee = o, be = W.blockedSegment;
          if (be.status === 0) {
            Me(W.context);
            try {
              Te(ee, W, W.node), ee.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), W.abortSet.delete(W), be.status = 1, tr(ee, W.blockedBoundary, be);
            } catch (Dt) {
              if (vr(), typeof Dt == "object" && Dt !== null && typeof Dt.then == "function") {
                var ve = W.ping;
                Dt.then(ve, ve);
              } else {
                W.abortSet.delete(W), be.status = 4;
                var Ee = W.blockedBoundary, ot = Dt, rr = er(ee, ot);
                if (Ee === null ? b(ee, ot) : (Ee.pendingTasks--, Ee.forceClientRender || (Ee.forceClientRender = !0, Ee.errorDigest = rr, Ee.parentFlushed && ee.clientRenderedBoundaries.push(Ee))), ee.allPendingTasks--, ee.allPendingTasks === 0) {
                  var nr = ee.onAllReady;
                  nr();
                }
              }
            } finally {
            }
          }
        }
        M.splice(0, P), o.destination !== null && tn(o, o.destination);
      } catch (Dt) {
        er(o, Dt), b(o, Dt);
      } finally {
        jt = k, xt.current = y, y === hr && Me(u);
      }
    }
  }
  function Fr(o, u, y) {
    switch (y.parentFlushed = !0, y.status) {
      case 0:
        var k = y.id = o.nextSegmentId++;
        return y.lastPushedText = !1, y.textEmbedded = !1, o = o.responseState, u.push('<template id="'), u.push(o.placeholderPrefix), o = k.toString(16), u.push(o), u.push('"></template>');
      case 1:
        y.status = 2;
        var M = !0;
        k = y.chunks;
        var P = 0;
        y = y.children;
        for (var W = 0; W < y.length; W++) {
          for (M = y[W]; P < M.index; P++) u.push(k[P]);
          M = $r(o, u, M);
        }
        for (; P < k.length - 1; P++) u.push(k[P]);
        return P < k.length && (M = u.push(k[P])), M;
      default:
        throw Error(t(390));
    }
  }
  function $r(o, u, y) {
    var k = y.boundary;
    if (k === null) return Fr(o, u, y);
    if (k.parentFlushed = !0, k.forceClientRender) return o.responseState.generateStaticMarkup || (k = k.errorDigest, u.push("<!--$!-->"), u.push("<template"), k && (u.push(' data-dgst="'), k = E(k), u.push(k), u.push('"')), u.push("></template>")), Fr(o, u, y), o = o.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), o;
    if (0 < k.pendingTasks) {
      k.rootSegmentID = o.nextSegmentId++, 0 < k.completedSegments.length && o.partialBoundaries.push(k);
      var M = o.responseState, P = M.nextSuspenseID++;
      return M = M.boundaryPrefix + P.toString(16), k = k.id = M, Ce(u, o.responseState, k), Fr(o, u, y), u.push("<!--/$-->");
    }
    if (k.byteSize > o.progressiveChunkSize) return k.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(k), Ce(u, o.responseState, k.id), Fr(o, u, y), u.push("<!--/$-->");
    if (o.responseState.generateStaticMarkup || u.push("<!--$-->"), y = k.completedSegments, y.length !== 1) throw Error(t(391));
    return $r(o, u, y[0]), o = o.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), o;
  }
  function yn(o, u, y) {
    return me(u, o.responseState, y.formatContext, y.id), $r(o, u, y), Be(u, y.formatContext);
  }
  function bn(o, u, y) {
    for (var k = y.completedSegments, M = 0; M < k.length; M++) xn(o, u, y, k[M]);
    if (k.length = 0, o = o.responseState, k = y.id, y = y.rootSegmentID, u.push(o.startInlineScript), o.sentCompleteBoundaryFunction ? u.push('$RC("') : (o.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), k === null) throw Error(t(395));
    return y = y.toString(16), u.push(k), u.push('","'), u.push(o.segmentPrefix), u.push(y), u.push('")<\/script>');
  }
  function xn(o, u, y, k) {
    if (k.status === 2) return !0;
    var M = k.id;
    if (M === -1) {
      if ((k.id = y.rootSegmentID) === -1) throw Error(t(392));
      return yn(o, u, k);
    }
    return yn(o, u, k), o = o.responseState, u.push(o.startInlineScript), o.sentCompleteSegmentFunction ? u.push('$RS("') : (o.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(o.segmentPrefix), M = M.toString(16), u.push(M), u.push('","'), u.push(o.placeholderPrefix), u.push(M), u.push('")<\/script>');
  }
  function tn(o, u) {
    try {
      var y = o.completedRootSegment;
      if (y !== null && o.pendingRootTasks === 0) {
        $r(o, u, y), o.completedRootSegment = null;
        var k = o.responseState.bootstrapChunks;
        for (y = 0; y < k.length - 1; y++) u.push(k[y]);
        y < k.length && u.push(k[y]);
      }
      var M = o.clientRenderedBoundaries, P;
      for (P = 0; P < M.length; P++) {
        var W = M[P];
        k = u;
        var ee = o.responseState, be = W.id, ve = W.errorDigest, Ee = W.errorMessage, ot = W.errorComponentStack;
        if (k.push(ee.startInlineScript), ee.sentClientRenderFunction ? k.push('$RX("') : (ee.sentClientRenderFunction = !0, k.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), be === null) throw Error(t(395));
        if (k.push(be), k.push('"'), ve || Ee || ot) {
          k.push(",");
          var rr = _e(ve || "");
          k.push(rr);
        }
        if (Ee || ot) {
          k.push(",");
          var nr = _e(Ee || "");
          k.push(nr);
        }
        if (ot) {
          k.push(",");
          var Dt = _e(ot);
          k.push(Dt);
        }
        if (!k.push(")<\/script>")) {
          o.destination = null, P++, M.splice(0, P);
          return;
        }
      }
      M.splice(0, P);
      var zr = o.completedBoundaries;
      for (P = 0; P < zr.length; P++) if (!bn(o, u, zr[P])) {
        o.destination = null, P++, zr.splice(0, P);
        return;
      }
      zr.splice(0, P);
      var Sr = o.partialBoundaries;
      for (P = 0; P < Sr.length; P++) {
        var wn = Sr[P];
        e: {
          M = o, W = u;
          var Ur = wn.completedSegments;
          for (ee = 0; ee < Ur.length; ee++) if (!xn(M, W, wn, Ur[ee])) {
            ee++, Ur.splice(0, ee);
            var Hn = !1;
            break e;
          }
          Ur.splice(0, ee), Hn = !0;
        }
        if (!Hn) {
          o.destination = null, P++, Sr.splice(0, P);
          return;
        }
      }
      Sr.splice(0, P);
      var Rr = o.completedBoundaries;
      for (P = 0; P < Rr.length; P++) if (!bn(o, u, Rr[P])) {
        o.destination = null, P++, Rr.splice(0, P);
        return;
      }
      Rr.splice(0, P);
    } finally {
      o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function qn(o, u) {
    try {
      var y = o.abortableTasks;
      y.forEach(function(k) {
        return Le(k, o, u);
      }), y.clear(), o.destination !== null && tn(o, o.destination);
    } catch (k) {
      er(o, k), b(o, k);
    }
  }
  function Bn() {
  }
  function vn(o, u, y, k) {
    var M = !1, P = null, W = "", ee = { push: function(ve) {
      return ve !== null && (W += ve), !0;
    }, destroy: function(ve) {
      M = !0, P = ve;
    } }, be = !1;
    if (o = wr(o, Fe(y, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Bn, void 0, function() {
      be = !0;
    }), mn(o), qn(o, k), o.status === 1) o.status = 2, ee.destroy(o.fatalError);
    else if (o.status !== 2 && o.destination === null) {
      o.destination = ee;
      try {
        tn(o, ee);
      } catch (ve) {
        er(o, ve), b(o, ve);
      }
    }
    if (M) throw P;
    if (!be) throw Error(t(426));
    return W;
  }
  return Hr.renderToNodeStream = function() {
    throw Error(t(207));
  }, Hr.renderToStaticMarkup = function(o, u) {
    return vn(o, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Hr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Hr.renderToString = function(o, u) {
    return vn(o, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Hr.version = "18.3.1", Hr;
}
var oa = {}, es;
function Qu() {
  if (es) return oa;
  es = 1;
  var e = mt;
  function t(i) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, g = 1; g < arguments.length; g++) c += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + i + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(i, c) {
    if (c.length !== 0) if (512 < c.length) 0 < n && (i.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), i.enqueue(c);
    else {
      var g = r.length - n;
      g < c.length && (g === 0 ? i.enqueue(r) : (r.set(c.subarray(0, g), n), i.enqueue(r), c = c.subarray(g)), r = new Uint8Array(512), n = 0), r.set(c, n), n += c.length;
    }
  }
  function s(i, c) {
    return a(i, c), !0;
  }
  function p(i) {
    r && 0 < n && (i.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var h = new TextEncoder();
  function m(i) {
    return h.encode(i);
  }
  function f(i) {
    return h.encode(i);
  }
  function A(i, c) {
    typeof i.error == "function" ? i.error(c) : i.close();
  }
  var _ = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, E = {};
  function S(i) {
    return _.call(E, i) ? !0 : _.call($, i) ? !1 : j.test(i) ? E[i] = !0 : ($[i] = !0, !1);
  }
  function I(i, c, g, w, D, L, V) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = w, this.attributeNamespace = D, this.mustUseProperty = g, this.propertyName = i, this.type = c, this.sanitizeURL = L, this.removeEmptyString = V;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    F[i] = new I(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var c = i[0];
    F[c] = new I(c, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    F[i] = new I(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    F[i] = new I(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    F[i] = new I(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    F[i] = new I(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    F[i] = new I(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    F[i] = new I(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    F[i] = new I(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var z = /[\-:]([a-z])/g;
  function K(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var c = i.replace(
      z,
      K
    );
    F[c] = new I(c, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var c = i.replace(z, K);
    F[c] = new I(c, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var c = i.replace(z, K);
    F[c] = new I(c, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    F[i] = new I(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    F[i] = new I(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var Z = {
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
  Object.keys(Z).forEach(function(i) {
    C.forEach(function(c) {
      c = c + i.charAt(0).toUpperCase() + i.substring(1), Z[c] = Z[i];
    });
  });
  var ie = /["'&<>]/;
  function he(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var c = ie.exec(i);
    if (c) {
      var g = "", w, D = 0;
      for (w = c.index; w < i.length; w++) {
        switch (i.charCodeAt(w)) {
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
        D !== w && (g += i.substring(D, w)), D = w + 1, g += c;
      }
      i = D !== w ? g + i.substring(D, w) : g;
    }
    return i;
  }
  var Se = /([A-Z])/g, Ie = /^ms-/, $e = Array.isArray, Pe = f("<script>"), pe = f("<\/script>"), ce = f('<script src="'), Ce = f('<script type="module" src="'), me = f('" async=""><\/script>'), Be = /(<\/|<)(s)(cript)/gi;
  function Ae(i, c, g, w) {
    return "" + c + (g === "s" ? "\\u0073" : "\\u0053") + w;
  }
  function _e(i, c, g, w, D) {
    i = i === void 0 ? "" : i, c = c === void 0 ? Pe : f('<script nonce="' + he(c) + '">');
    var L = [];
    if (g !== void 0 && L.push(c, m(("" + g).replace(Be, Ae)), pe), w !== void 0) for (g = 0; g < w.length; g++) L.push(ce, m(he(w[g])), me);
    if (D !== void 0) for (w = 0; w < D.length; w++) L.push(Ce, m(he(D[w])), me);
    return { bootstrapChunks: L, startInlineScript: c, placeholderPrefix: f(i + "P:"), segmentPrefix: f(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Fe(i, c) {
    return { insertionMode: i, selectedValue: c };
  }
  function He(i) {
    return Fe(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function We(i, c, g) {
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
    return 4 <= i.insertionMode || i.insertionMode === 0 ? Fe(1, null) : i;
  }
  var q = f("<!-- -->");
  function N(i, c, g, w) {
    return c === "" ? w : (w && i.push(q), i.push(m(he(c))), !0);
  }
  var U = /* @__PURE__ */ new Map(), B = f(' style="'), x = f(":"), G = f(";");
  function O(i, c, g) {
    if (typeof g != "object") throw Error(t(62));
    c = !0;
    for (var w in g) if (_.call(g, w)) {
      var D = g[w];
      if (D != null && typeof D != "boolean" && D !== "") {
        if (w.indexOf("--") === 0) {
          var L = m(he(w));
          D = m(he(("" + D).trim()));
        } else {
          L = w;
          var V = U.get(L);
          V !== void 0 || (V = f(he(L.replace(Se, "-$1").toLowerCase().replace(Ie, "-ms-"))), U.set(L, V)), L = V, D = typeof D == "number" ? D === 0 || _.call(Z, w) ? m("" + D) : m(D + "px") : m(he(("" + D).trim()));
        }
        c ? (c = !1, i.push(B, L, x, D)) : i.push(G, L, x, D);
      }
    }
    c || i.push(re);
  }
  var oe = f(" "), te = f('="'), re = f('"'), X = f('=""');
  function se(i, c, g, w) {
    switch (g) {
      case "style":
        O(i, c, w);
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
        switch (g = m(c.attributeName), c.type) {
          case 3:
            w && i.push(oe, g, X);
            break;
          case 4:
            w === !0 ? i.push(oe, g, X) : w !== !1 && i.push(oe, g, te, m(he(w)), re);
            break;
          case 5:
            isNaN(w) || i.push(oe, g, te, m(he(w)), re);
            break;
          case 6:
            !isNaN(w) && 1 <= w && i.push(oe, g, te, m(he(w)), re);
            break;
          default:
            c.sanitizeURL && (w = "" + w), i.push(oe, g, te, m(he(w)), re);
        }
      } else if (S(g)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = g.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        i.push(oe, m(g), te, m(he(w)), re);
      }
    }
  }
  var fe = f(">"), ne = f("/>");
  function ue(i, c, g) {
    if (c != null) {
      if (g != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && i.push(m("" + c));
    }
  }
  function ae(i) {
    var c = "";
    return e.Children.forEach(i, function(g) {
      g != null && (c += g);
    }), c;
  }
  var ye = f(' selected=""');
  function ze(i, c, g, w) {
    i.push(we(g));
    var D = g = null, L;
    for (L in c) if (_.call(c, L)) {
      var V = c[L];
      if (V != null) switch (L) {
        case "children":
          g = V;
          break;
        case "dangerouslySetInnerHTML":
          D = V;
          break;
        default:
          se(i, w, L, V);
      }
    }
    return i.push(fe), ue(i, D, g), typeof g == "string" ? (i.push(m(he(g))), null) : g;
  }
  var ge = f(`
`), tt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ye = /* @__PURE__ */ new Map();
  function we(i) {
    var c = Ye.get(i);
    if (c === void 0) {
      if (!tt.test(i)) throw Error(t(65, i));
      c = f("<" + i), Ye.set(i, c);
    }
    return c;
  }
  var J = f("<!DOCTYPE html>");
  function de(i, c, g, w, D) {
    switch (c) {
      case "select":
        i.push(we("select"));
        var L = null, V = null;
        for (je in g) if (_.call(g, je)) {
          var Q = g[je];
          if (Q != null) switch (je) {
            case "children":
              L = Q;
              break;
            case "dangerouslySetInnerHTML":
              V = Q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              se(i, w, je, Q);
          }
        }
        return i.push(fe), ue(i, V, L), L;
      case "option":
        V = D.selectedValue, i.push(we("option"));
        var xe = Q = null, De = null, je = null;
        for (L in g) if (_.call(g, L)) {
          var et = g[L];
          if (et != null) switch (L) {
            case "children":
              Q = et;
              break;
            case "selected":
              De = et;
              break;
            case "dangerouslySetInnerHTML":
              je = et;
              break;
            case "value":
              xe = et;
            default:
              se(i, w, L, et);
          }
        }
        if (V != null) if (g = xe !== null ? "" + xe : ae(Q), $e(V)) {
          for (w = 0; w < V.length; w++)
            if ("" + V[w] === g) {
              i.push(ye);
              break;
            }
        } else "" + V === g && i.push(ye);
        else De && i.push(ye);
        return i.push(fe), ue(i, je, Q), Q;
      case "textarea":
        i.push(we("textarea")), je = V = L = null;
        for (Q in g) if (_.call(g, Q) && (xe = g[Q], xe != null)) switch (Q) {
          case "children":
            je = xe;
            break;
          case "value":
            L = xe;
            break;
          case "defaultValue":
            V = xe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            se(i, w, Q, xe);
        }
        if (L === null && V !== null && (L = V), i.push(fe), je != null) {
          if (L != null) throw Error(t(92));
          if ($e(je) && 1 < je.length) throw Error(t(93));
          L = "" + je;
        }
        return typeof L == "string" && L[0] === `
` && i.push(ge), L !== null && i.push(m(he("" + L))), null;
      case "input":
        i.push(we("input")), xe = je = Q = L = null;
        for (V in g) if (_.call(g, V) && (De = g[V], De != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            xe = De;
            break;
          case "defaultValue":
            Q = De;
            break;
          case "checked":
            je = De;
            break;
          case "value":
            L = De;
            break;
          default:
            se(i, w, V, De);
        }
        return je !== null ? se(
          i,
          w,
          "checked",
          je
        ) : xe !== null && se(i, w, "checked", xe), L !== null ? se(i, w, "value", L) : Q !== null && se(i, w, "value", Q), i.push(ne), null;
      case "menuitem":
        i.push(we("menuitem"));
        for (var Ft in g) if (_.call(g, Ft) && (L = g[Ft], L != null)) switch (Ft) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            se(i, w, Ft, L);
        }
        return i.push(fe), null;
      case "title":
        i.push(we("title")), L = null;
        for (et in g) if (_.call(g, et) && (V = g[et], V != null)) switch (et) {
          case "children":
            L = V;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            se(i, w, et, V);
        }
        return i.push(fe), L;
      case "listing":
      case "pre":
        i.push(we(c)), V = L = null;
        for (xe in g) if (_.call(g, xe) && (Q = g[xe], Q != null)) switch (xe) {
          case "children":
            L = Q;
            break;
          case "dangerouslySetInnerHTML":
            V = Q;
            break;
          default:
            se(i, w, xe, Q);
        }
        if (i.push(fe), V != null) {
          if (L != null) throw Error(t(60));
          if (typeof V != "object" || !("__html" in V)) throw Error(t(61));
          g = V.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? i.push(ge, m(g)) : i.push(m("" + g)));
        }
        return typeof L == "string" && L[0] === `
` && i.push(ge), L;
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
        i.push(we(c));
        for (var ar in g) if (_.call(g, ar) && (L = g[ar], L != null)) switch (ar) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            se(i, w, ar, L);
        }
        return i.push(ne), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ze(i, g, c, w);
      case "html":
        return D.insertionMode === 0 && i.push(J), ze(i, g, c, w);
      default:
        if (c.indexOf("-") === -1 && typeof g.is != "string") return ze(i, g, c, w);
        i.push(we(c)), V = L = null;
        for (De in g) if (_.call(g, De) && (Q = g[De], Q != null)) switch (De) {
          case "children":
            L = Q;
            break;
          case "dangerouslySetInnerHTML":
            V = Q;
            break;
          case "style":
            O(i, w, Q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            S(De) && typeof Q != "function" && typeof Q != "symbol" && i.push(oe, m(De), te, m(he(Q)), re);
        }
        return i.push(fe), ue(i, V, L), L;
    }
  }
  var rt = f("</"), Je = f(">"), Me = f('<template id="'), dr = f('"></template>'), pr = f("<!--$-->"), br = f('<!--$?--><template id="'), Rt = f('"></template>'), $t = f("<!--$!-->"), Nt = f("<!--/$-->"), It = f("<template"), it = f('"'), yt = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Kt = f("></template>");
  function ft(i, c, g) {
    if (a(i, br), g === null) throw Error(t(395));
    return a(i, g), s(i, Rt);
  }
  var xr = f('<div hidden id="'), lt = f('">'), Ue = f("</div>"), Xt = f('<svg aria-hidden="true" style="display:none" id="'), ke = f('">'), ut = f("</svg>"), Et = f('<math aria-hidden="true" style="display:none" id="'), zt = f('">'), bt = f("</math>"), fr = f('<table hidden id="'), Jt = f('">'), vr = f("</table>"), Ot = f('<table hidden><tbody id="'), Ut = f('">'), jr = f("</tbody></table>"), nt = f('<table hidden><tr id="'), Pt = f('">'), qt = f("</tr></table>"), hr = f('<table hidden><colgroup id="'), jt = f('">'), xt = f("</colgroup></table>");
  function st(i, c, g, w) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return a(i, xr), a(i, c.segmentPrefix), a(i, m(w.toString(16))), s(i, lt);
      case 2:
        return a(i, Xt), a(i, c.segmentPrefix), a(i, m(w.toString(16))), s(i, ke);
      case 3:
        return a(i, Et), a(i, c.segmentPrefix), a(i, m(w.toString(16))), s(i, zt);
      case 4:
        return a(i, fr), a(i, c.segmentPrefix), a(i, m(w.toString(16))), s(i, Jt);
      case 5:
        return a(i, Ot), a(i, c.segmentPrefix), a(i, m(w.toString(16))), s(i, Ut);
      case 6:
        return a(i, nt), a(i, c.segmentPrefix), a(i, m(w.toString(16))), s(i, Pt);
      case 7:
        return a(
          i,
          hr
        ), a(i, c.segmentPrefix), a(i, m(w.toString(16))), s(i, jt);
      default:
        throw Error(t(397));
    }
  }
  function Lt(i, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(i, Ue);
      case 2:
        return s(i, ut);
      case 3:
        return s(i, bt);
      case 4:
        return s(i, vr);
      case 5:
        return s(i, jr);
      case 6:
        return s(i, qt);
      case 7:
        return s(i, xt);
      default:
        throw Error(t(397));
    }
  }
  var wr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Qt = f('$RS("'), Bt = f('","'), er = f('")<\/script>'), b = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), v = f('$RC("'), R = f('","'), Y = f('")<\/script>'), le = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Te = f('$RX("'), Oe = f('"'), qe = f(")<\/script>"), at = f(","), Le = /[<\u2028\u2029]/g;
  function Tt(i) {
    return JSON.stringify(i).replace(Le, function(c) {
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
  var tr = Object.assign, mn = Symbol.for("react.element"), Fr = Symbol.for("react.portal"), $r = Symbol.for("react.fragment"), yn = Symbol.for("react.strict_mode"), bn = Symbol.for("react.profiler"), xn = Symbol.for("react.provider"), tn = Symbol.for("react.context"), qn = Symbol.for("react.forward_ref"), Bn = Symbol.for("react.suspense"), vn = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), y = Symbol.for("react.scope"), k = Symbol.for("react.debug_trace_mode"), M = Symbol.for("react.legacy_hidden"), P = Symbol.for("react.default_value"), W = Symbol.iterator;
  function ee(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case $r:
        return "Fragment";
      case Fr:
        return "Portal";
      case bn:
        return "Profiler";
      case yn:
        return "StrictMode";
      case Bn:
        return "Suspense";
      case vn:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case tn:
        return (i.displayName || "Context") + ".Consumer";
      case xn:
        return (i._context.displayName || "Context") + ".Provider";
      case qn:
        var c = i.render;
        return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case o:
        return c = i.displayName || null, c !== null ? c : ee(i.type) || "Memo";
      case u:
        c = i._payload, i = i._init;
        try {
          return ee(i(c));
        } catch {
        }
    }
    return null;
  }
  var be = {};
  function ve(i, c) {
    if (i = i.contextTypes, !i) return be;
    var g = {}, w;
    for (w in i) g[w] = c[w];
    return g;
  }
  var Ee = null;
  function ot(i, c) {
    if (i !== c) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var g = c.parent;
      if (i === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        ot(i, g);
      }
      c.context._currentValue = c.value;
    }
  }
  function rr(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && rr(i);
  }
  function nr(i) {
    var c = i.parent;
    c !== null && nr(c), i.context._currentValue = i.value;
  }
  function Dt(i, c) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === c.depth ? ot(i, c) : Dt(i, c);
  }
  function zr(i, c) {
    var g = c.parent;
    if (g === null) throw Error(t(402));
    i.depth === g.depth ? ot(i, g) : zr(i, g), c.context._currentValue = c.value;
  }
  function Sr(i) {
    var c = Ee;
    c !== i && (c === null ? nr(i) : i === null ? rr(c) : c.depth === i.depth ? ot(c, i) : c.depth > i.depth ? Dt(c, i) : zr(c, i), Ee = i);
  }
  var wn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, c) {
    i = i._reactInternals, i.queue !== null && i.queue.push(c);
  }, enqueueReplaceState: function(i, c) {
    i = i._reactInternals, i.replace = !0, i.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Ur(i, c, g, w) {
    var D = i.state !== void 0 ? i.state : null;
    i.updater = wn, i.props = g, i.state = D;
    var L = { queue: [], replace: !1 };
    i._reactInternals = L;
    var V = c.contextType;
    if (i.context = typeof V == "object" && V !== null ? V._currentValue : w, V = c.getDerivedStateFromProps, typeof V == "function" && (V = V(g, D), D = V == null ? D : tr({}, D, V), i.state = D), typeof c.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && wn.enqueueReplaceState(i, i.state, null), L.queue !== null && 0 < L.queue.length) if (c = L.queue, V = L.replace, L.queue = null, L.replace = !1, V && c.length === 1) i.state = c[0];
    else {
      for (L = V ? c[0] : i.state, D = !0, V = V ? 1 : 0; V < c.length; V++) {
        var Q = c[V];
        Q = typeof Q == "function" ? Q.call(i, L, g, w) : Q, Q != null && (D ? (D = !1, L = tr({}, L, Q)) : tr(L, Q));
      }
      i.state = L;
    }
    else L.queue = null;
  }
  var Hn = { id: 1, overflow: "" };
  function Rr(i, c, g) {
    var w = i.id;
    i = i.overflow;
    var D = 32 - Wn(w) - 1;
    w &= ~(1 << D), g += 1;
    var L = 32 - Wn(c) + D;
    if (30 < L) {
      var V = D - D % 5;
      return L = (w & (1 << V) - 1).toString(32), w >>= V, D -= V, { id: 1 << 32 - Wn(c) + D | g << D | w, overflow: L + i };
    }
    return { id: 1 << L | g << D | w, overflow: i };
  }
  var Wn = Math.clz32 ? Math.clz32 : Jc, Kc = Math.log, Xc = Math.LN2;
  function Jc(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Kc(i) / Xc | 0) | 0;
  }
  function Qc(i, c) {
    return i === c && (i !== 0 || 1 / i === 1 / c) || i !== i && c !== c;
  }
  var eu = typeof Object.is == "function" ? Object.is : Qc, kr = null, Fa = null, Vn = null, Qe = null, Sn = !1, Gn = !1, kn = 0, Nr = null, Yn = 0;
  function qr() {
    if (kr === null) throw Error(t(321));
    return kr;
  }
  function Si() {
    if (0 < Yn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function $a() {
    return Qe === null ? Vn === null ? (Sn = !1, Vn = Qe = Si()) : (Sn = !0, Qe = Vn) : Qe.next === null ? (Sn = !1, Qe = Qe.next = Si()) : (Sn = !0, Qe = Qe.next), Qe;
  }
  function za() {
    Fa = kr = null, Gn = !1, Vn = null, Yn = 0, Qe = Nr = null;
  }
  function ki(i, c) {
    return typeof c == "function" ? c(i) : c;
  }
  function Ti(i, c, g) {
    if (kr = qr(), Qe = $a(), Sn) {
      var w = Qe.queue;
      if (c = w.dispatch, Nr !== null && (g = Nr.get(w), g !== void 0)) {
        Nr.delete(w), w = Qe.memoizedState;
        do
          w = i(w, g.action), g = g.next;
        while (g !== null);
        return Qe.memoizedState = w, [w, c];
      }
      return [Qe.memoizedState, c];
    }
    return i = i === ki ? typeof c == "function" ? c() : c : g !== void 0 ? g(c) : c, Qe.memoizedState = i, i = Qe.queue = { last: null, dispatch: null }, i = i.dispatch = tu.bind(null, kr, i), [Qe.memoizedState, i];
  }
  function Ci(i, c) {
    if (kr = qr(), Qe = $a(), c = c === void 0 ? null : c, Qe !== null) {
      var g = Qe.memoizedState;
      if (g !== null && c !== null) {
        var w = g[1];
        e: if (w === null) w = !1;
        else {
          for (var D = 0; D < w.length && D < c.length; D++) if (!eu(c[D], w[D])) {
            w = !1;
            break e;
          }
          w = !0;
        }
        if (w) return g[0];
      }
    }
    return i = i(), Qe.memoizedState = [i, c], i;
  }
  function tu(i, c, g) {
    if (25 <= Yn) throw Error(t(301));
    if (i === kr) if (Gn = !0, i = { action: g, next: null }, Nr === null && (Nr = /* @__PURE__ */ new Map()), g = Nr.get(c), g === void 0) Nr.set(c, i);
    else {
      for (c = g; c.next !== null; ) c = c.next;
      c.next = i;
    }
  }
  function ru() {
    throw Error(t(394));
  }
  function Zn() {
  }
  var Ai = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return qr(), i._currentValue;
  }, useMemo: Ci, useReducer: Ti, useRef: function(i) {
    kr = qr(), Qe = $a();
    var c = Qe.memoizedState;
    return c === null ? (i = { current: i }, Qe.memoizedState = i) : c;
  }, useState: function(i) {
    return Ti(ki, i);
  }, useInsertionEffect: Zn, useLayoutEffect: function() {
  }, useCallback: function(i, c) {
    return Ci(function() {
      return i;
    }, c);
  }, useImperativeHandle: Zn, useEffect: Zn, useDebugValue: Zn, useDeferredValue: function(i) {
    return qr(), i;
  }, useTransition: function() {
    return qr(), [!1, ru];
  }, useId: function() {
    var i = Fa.treeContext, c = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Wn(i) - 1)).toString(32) + c;
    var g = Kn;
    if (g === null) throw Error(t(404));
    return c = kn++, i = ":" + g.idPrefix + "R" + i, 0 < c && (i += "H" + c.toString(32)), i + ":";
  }, useMutableSource: function(i, c) {
    return qr(), c(i._source);
  }, useSyncExternalStore: function(i, c, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, Kn = null, Ua = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function nu(i) {
    return console.error(i), null;
  }
  function Tn() {
  }
  function au(i, c, g, w, D, L, V, Q, xe) {
    var De = [], je = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: je, pingedTasks: De, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: D === void 0 ? nu : D, onAllReady: L === void 0 ? Tn : L, onShellReady: V === void 0 ? Tn : V, onShellError: Q === void 0 ? Tn : Q, onFatalError: xe === void 0 ? Tn : xe }, g = Xn(c, 0, null, g, !1, !1), g.parentFlushed = !0, i = qa(c, i, null, g, je, be, null, Hn), De.push(i), c;
  }
  function qa(i, c, g, w, D, L, V, Q) {
    i.allPendingTasks++, g === null ? i.pendingRootTasks++ : g.pendingTasks++;
    var xe = { node: c, ping: function() {
      var De = i.pingedTasks;
      De.push(xe), De.length === 1 && Ii(i);
    }, blockedBoundary: g, blockedSegment: w, abortSet: D, legacyContext: L, context: V, treeContext: Q };
    return D.add(xe), xe;
  }
  function Xn(i, c, g, w, D, L) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: g, lastPushedText: D, textEmbedded: L };
  }
  function Cn(i, c) {
    if (i = i.onError(c), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function Jn(i, c) {
    var g = i.onShellError;
    g(c), g = i.onFatalError, g(c), i.destination !== null ? (i.status = 2, A(i.destination, c)) : (i.status = 1, i.fatalError = c);
  }
  function _i(i, c, g, w, D) {
    for (kr = {}, Fa = c, kn = 0, i = g(w, D); Gn; ) Gn = !1, kn = 0, Yn += 1, Qe = null, i = g(w, D);
    return za(), i;
  }
  function Ei(i, c, g, w) {
    var D = g.render(), L = w.childContextTypes;
    if (L != null) {
      var V = c.legacyContext;
      if (typeof g.getChildContext != "function") w = V;
      else {
        g = g.getChildContext();
        for (var Q in g) if (!(Q in L)) throw Error(t(108, ee(w) || "Unknown", Q));
        w = tr({}, V, g);
      }
      c.legacyContext = w, Mt(i, c, D), c.legacyContext = V;
    } else Mt(i, c, D);
  }
  function Oi(i, c) {
    if (i && i.defaultProps) {
      c = tr({}, c), i = i.defaultProps;
      for (var g in i) c[g] === void 0 && (c[g] = i[g]);
      return c;
    }
    return c;
  }
  function Ba(i, c, g, w, D) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      D = ve(g, c.legacyContext);
      var L = g.contextType;
      L = new g(w, typeof L == "object" && L !== null ? L._currentValue : D), Ur(L, g, w, D), Ei(i, c, L, g);
    } else {
      L = ve(g, c.legacyContext), D = _i(i, c, g, w, L);
      var V = kn !== 0;
      if (typeof D == "object" && D !== null && typeof D.render == "function" && D.$$typeof === void 0) Ur(D, g, w, L), Ei(i, c, D, g);
      else if (V) {
        w = c.treeContext, c.treeContext = Rr(w, 1, 0);
        try {
          Mt(i, c, D);
        } finally {
          c.treeContext = w;
        }
      } else Mt(i, c, D);
    }
    else if (typeof g == "string") {
      switch (D = c.blockedSegment, L = de(D.chunks, g, w, i.responseState, D.formatContext), D.lastPushedText = !1, V = D.formatContext, D.formatContext = We(V, g, w), Ha(i, c, L), D.formatContext = V, g) {
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
          D.chunks.push(rt, m(g), Je);
      }
      D.lastPushedText = !1;
    } else {
      switch (g) {
        case M:
        case k:
        case yn:
        case bn:
        case $r:
          Mt(i, c, w.children);
          return;
        case vn:
          Mt(i, c, w.children);
          return;
        case y:
          throw Error(t(343));
        case Bn:
          e: {
            g = c.blockedBoundary, D = c.blockedSegment, L = w.fallback, w = w.children, V = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: V, errorDigest: null }, xe = Xn(i, D.chunks.length, Q, D.formatContext, !1, !1);
            D.children.push(xe), D.lastPushedText = !1;
            var De = Xn(i, 0, null, D.formatContext, !1, !1);
            De.parentFlushed = !0, c.blockedBoundary = Q, c.blockedSegment = De;
            try {
              if (Ha(
                i,
                c,
                w
              ), De.lastPushedText && De.textEmbedded && De.chunks.push(q), De.status = 1, Qn(Q, De), Q.pendingTasks === 0) break e;
            } catch (je) {
              De.status = 4, Q.forceClientRender = !0, Q.errorDigest = Cn(i, je);
            } finally {
              c.blockedBoundary = g, c.blockedSegment = D;
            }
            c = qa(i, L, g, xe, V, c.legacyContext, c.context, c.treeContext), i.pingedTasks.push(c);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case qn:
          if (w = _i(i, c, g.render, w, D), kn !== 0) {
            g = c.treeContext, c.treeContext = Rr(g, 1, 0);
            try {
              Mt(i, c, w);
            } finally {
              c.treeContext = g;
            }
          } else Mt(i, c, w);
          return;
        case o:
          g = g.type, w = Oi(g, w), Ba(i, c, g, w, D);
          return;
        case xn:
          if (D = w.children, g = g._context, w = w.value, L = g._currentValue, g._currentValue = w, V = Ee, Ee = w = { parent: V, depth: V === null ? 0 : V.depth + 1, context: g, parentValue: L, value: w }, c.context = w, Mt(i, c, D), i = Ee, i === null) throw Error(t(403));
          w = i.parentValue, i.context._currentValue = w === P ? i.context._defaultValue : w, i = Ee = i.parent, c.context = i;
          return;
        case tn:
          w = w.children, w = w(g._currentValue), Mt(i, c, w);
          return;
        case u:
          D = g._init, g = D(g._payload), w = Oi(g, w), Ba(i, c, g, w, void 0);
          return;
      }
      throw Error(t(
        130,
        g == null ? g : typeof g,
        ""
      ));
    }
  }
  function Mt(i, c, g) {
    if (c.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case mn:
          Ba(i, c, g.type, g.props, g.ref);
          return;
        case Fr:
          throw Error(t(257));
        case u:
          var w = g._init;
          g = w(g._payload), Mt(i, c, g);
          return;
      }
      if ($e(g)) {
        ji(i, c, g);
        return;
      }
      if (g === null || typeof g != "object" ? w = null : (w = W && g[W] || g["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(g))) {
        if (g = w.next(), !g.done) {
          var D = [];
          do
            D.push(g.value), g = w.next();
          while (!g.done);
          ji(i, c, D);
        }
        return;
      }
      throw i = Object.prototype.toString.call(g), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : i));
    }
    typeof g == "string" ? (w = c.blockedSegment, w.lastPushedText = N(c.blockedSegment.chunks, g, i.responseState, w.lastPushedText)) : typeof g == "number" && (w = c.blockedSegment, w.lastPushedText = N(c.blockedSegment.chunks, "" + g, i.responseState, w.lastPushedText));
  }
  function ji(i, c, g) {
    for (var w = g.length, D = 0; D < w; D++) {
      var L = c.treeContext;
      c.treeContext = Rr(L, w, D);
      try {
        Ha(i, c, g[D]);
      } finally {
        c.treeContext = L;
      }
    }
  }
  function Ha(i, c, g) {
    var w = c.blockedSegment.formatContext, D = c.legacyContext, L = c.context;
    try {
      return Mt(i, c, g);
    } catch (xe) {
      if (za(), typeof xe == "object" && xe !== null && typeof xe.then == "function") {
        g = xe;
        var V = c.blockedSegment, Q = Xn(i, V.chunks.length, null, V.formatContext, V.lastPushedText, !0);
        V.children.push(Q), V.lastPushedText = !1, i = qa(i, c.node, c.blockedBoundary, Q, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, g.then(i, i), c.blockedSegment.formatContext = w, c.legacyContext = D, c.context = L, Sr(L);
      } else throw c.blockedSegment.formatContext = w, c.legacyContext = D, c.context = L, Sr(L), xe;
    }
  }
  function ou(i) {
    var c = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Ni(this, c, i);
  }
  function Ri(i, c, g) {
    var w = i.blockedBoundary;
    i.blockedSegment.status = 3, w === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, i = g === void 0 ? Error(t(432)) : g, w.errorDigest = c.onError(i), w.parentFlushed && c.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(D) {
      return Ri(D, c, g);
    }), w.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (w = c.onAllReady, w()));
  }
  function Qn(i, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var g = c.children[0];
      g.id = c.id, g.parentFlushed = !0, g.status === 1 && Qn(i, g);
    } else i.completedSegments.push(c);
  }
  function Ni(i, c, g) {
    if (c === null) {
      if (g.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = g;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Tn, c = i.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && Qn(c, g), c.parentFlushed && i.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(ou, i), c.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (Qn(c, g), c.completedSegments.length === 1 && c.parentFlushed && i.partialBoundaries.push(c)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Ii(i) {
    if (i.status !== 2) {
      var c = Ee, g = Ua.current;
      Ua.current = Ai;
      var w = Kn;
      Kn = i.responseState;
      try {
        var D = i.pingedTasks, L;
        for (L = 0; L < D.length; L++) {
          var V = D[L], Q = i, xe = V.blockedSegment;
          if (xe.status === 0) {
            Sr(V.context);
            try {
              Mt(Q, V, V.node), xe.lastPushedText && xe.textEmbedded && xe.chunks.push(q), V.abortSet.delete(V), xe.status = 1, Ni(Q, V.blockedBoundary, xe);
            } catch (or) {
              if (za(), typeof or == "object" && or !== null && typeof or.then == "function") {
                var De = V.ping;
                or.then(De, De);
              } else {
                V.abortSet.delete(V), xe.status = 4;
                var je = V.blockedBoundary, et = or, Ft = Cn(Q, et);
                if (je === null ? Jn(Q, et) : (je.pendingTasks--, je.forceClientRender || (je.forceClientRender = !0, je.errorDigest = Ft, je.parentFlushed && Q.clientRenderedBoundaries.push(je))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var ar = Q.onAllReady;
                  ar();
                }
              }
            } finally {
            }
          }
        }
        D.splice(0, L), i.destination !== null && Wa(i, i.destination);
      } catch (or) {
        Cn(i, or), Jn(i, or);
      } finally {
        Kn = w, Ua.current = g, g === Ai && Sr(c);
      }
    }
  }
  function ea(i, c, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var w = g.id = i.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, i = i.responseState, a(c, Me), a(c, i.placeholderPrefix), i = m(w.toString(16)), a(c, i), s(c, dr);
      case 1:
        g.status = 2;
        var D = !0;
        w = g.chunks;
        var L = 0;
        g = g.children;
        for (var V = 0; V < g.length; V++) {
          for (D = g[V]; L < D.index; L++) a(c, w[L]);
          D = ta(i, c, D);
        }
        for (; L < w.length - 1; L++) a(c, w[L]);
        return L < w.length && (D = s(c, w[L])), D;
      default:
        throw Error(t(390));
    }
  }
  function ta(i, c, g) {
    var w = g.boundary;
    if (w === null) return ea(i, c, g);
    if (w.parentFlushed = !0, w.forceClientRender) w = w.errorDigest, s(c, $t), a(c, It), w && (a(c, yt), a(c, m(he(w))), a(c, it)), s(c, Kt), ea(i, c, g);
    else if (0 < w.pendingTasks) {
      w.rootSegmentID = i.nextSegmentId++, 0 < w.completedSegments.length && i.partialBoundaries.push(w);
      var D = i.responseState, L = D.nextSuspenseID++;
      D = f(D.boundaryPrefix + L.toString(16)), w = w.id = D, ft(c, i.responseState, w), ea(i, c, g);
    } else if (w.byteSize > i.progressiveChunkSize) w.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(w), ft(c, i.responseState, w.id), ea(i, c, g);
    else {
      if (s(c, pr), g = w.completedSegments, g.length !== 1) throw Error(t(391));
      ta(i, c, g[0]);
    }
    return s(c, Nt);
  }
  function Pi(i, c, g) {
    return st(c, i.responseState, g.formatContext, g.id), ta(i, c, g), Lt(c, g.formatContext);
  }
  function Li(i, c, g) {
    for (var w = g.completedSegments, D = 0; D < w.length; D++) Di(i, c, g, w[D]);
    if (w.length = 0, i = i.responseState, w = g.id, g = g.rootSegmentID, a(c, i.startInlineScript), i.sentCompleteBoundaryFunction ? a(c, v) : (i.sentCompleteBoundaryFunction = !0, a(c, b)), w === null) throw Error(t(395));
    return g = m(g.toString(16)), a(c, w), a(c, R), a(c, i.segmentPrefix), a(c, g), s(c, Y);
  }
  function Di(i, c, g, w) {
    if (w.status === 2) return !0;
    var D = w.id;
    if (D === -1) {
      if ((w.id = g.rootSegmentID) === -1) throw Error(t(392));
      return Pi(i, c, w);
    }
    return Pi(i, c, w), i = i.responseState, a(c, i.startInlineScript), i.sentCompleteSegmentFunction ? a(c, Qt) : (i.sentCompleteSegmentFunction = !0, a(c, wr)), a(c, i.segmentPrefix), D = m(D.toString(16)), a(c, D), a(c, Bt), a(c, i.placeholderPrefix), a(c, D), s(c, er);
  }
  function Wa(i, c) {
    r = new Uint8Array(512), n = 0;
    try {
      var g = i.completedRootSegment;
      if (g !== null && i.pendingRootTasks === 0) {
        ta(i, c, g), i.completedRootSegment = null;
        var w = i.responseState.bootstrapChunks;
        for (g = 0; g < w.length - 1; g++) a(c, w[g]);
        g < w.length && s(c, w[g]);
      }
      var D = i.clientRenderedBoundaries, L;
      for (L = 0; L < D.length; L++) {
        var V = D[L];
        w = c;
        var Q = i.responseState, xe = V.id, De = V.errorDigest, je = V.errorMessage, et = V.errorComponentStack;
        if (a(w, Q.startInlineScript), Q.sentClientRenderFunction ? a(w, Te) : (Q.sentClientRenderFunction = !0, a(
          w,
          le
        )), xe === null) throw Error(t(395));
        a(w, xe), a(w, Oe), (De || je || et) && (a(w, at), a(w, m(Tt(De || "")))), (je || et) && (a(w, at), a(w, m(Tt(je || "")))), et && (a(w, at), a(w, m(Tt(et)))), s(w, qe);
      }
      D.splice(0, L);
      var Ft = i.completedBoundaries;
      for (L = 0; L < Ft.length; L++) Li(i, c, Ft[L]);
      Ft.splice(0, L), p(c), r = new Uint8Array(512), n = 0;
      var ar = i.partialBoundaries;
      for (L = 0; L < ar.length; L++) {
        var or = ar[L];
        e: {
          D = i, V = c;
          var ra = or.completedSegments;
          for (Q = 0; Q < ra.length; Q++) if (!Di(
            D,
            V,
            or,
            ra[Q]
          )) {
            Q++, ra.splice(0, Q);
            var Fi = !1;
            break e;
          }
          ra.splice(0, Q), Fi = !0;
        }
        if (!Fi) {
          i.destination = null, L++, ar.splice(0, L);
          return;
        }
      }
      ar.splice(0, L);
      var Va = i.completedBoundaries;
      for (L = 0; L < Va.length; L++) Li(i, c, Va[L]);
      Va.splice(0, L);
    } finally {
      p(c), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && c.close();
    }
  }
  function Mi(i, c) {
    try {
      var g = i.abortableTasks;
      g.forEach(function(w) {
        return Ri(w, i, c);
      }), g.clear(), i.destination !== null && Wa(i, i.destination);
    } catch (w) {
      Cn(i, w), Jn(i, w);
    }
  }
  return oa.renderToReadableStream = function(i, c) {
    return new Promise(function(g, w) {
      var D, L, V = new Promise(function(je, et) {
        L = je, D = et;
      }), Q = au(i, _e(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), He(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, L, function() {
        var je = new ReadableStream({ type: "bytes", pull: function(et) {
          if (Q.status === 1) Q.status = 2, A(et, Q.fatalError);
          else if (Q.status !== 2 && Q.destination === null) {
            Q.destination = et;
            try {
              Wa(Q, et);
            } catch (Ft) {
              Cn(Q, Ft), Jn(Q, Ft);
            }
          }
        }, cancel: function() {
          Mi(Q);
        } }, { highWaterMark: 0 });
        je.allReady = V, g(je);
      }, function(je) {
        V.catch(function() {
        }), w(je);
      }, D);
      if (c && c.signal) {
        var xe = c.signal, De = function() {
          Mi(Q, xe.reason), xe.removeEventListener("abort", De);
        };
        xe.addEventListener("abort", De);
      }
      Ii(Q);
    });
  }, oa.version = "18.3.1", oa;
}
var fn, ll;
fn = Ju(), ll = Qu();
fn.version;
fn.renderToString;
fn.renderToStaticMarkup;
fn.renderToNodeStream;
fn.renderToStaticNodeStream;
ll.renderToReadableStream;
const ed = "staticMarkup";
function td() {
  const e = lu().indexOf(ed) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Qr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = td(), { onClick: a, ...s } = r.props;
  if (n)
    return mt.cloneElement(r, {
      ...s,
      onClick: (m) => (sl(e), a ? a(m) : !0)
    });
  let p = "";
  ["input", "header", "header-input"].includes(t) && (p = `-${t}`);
  const h = {
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
    ...h
  });
}, cl = ({ id: e, item: t, openCard: r, onClick: n, gaData: a }) => {
  var s, p, h, m, f, A;
  const _ = e === r, j = _ ? "open" : "close";
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      className: ct("accordion-item", "mt-3", {
        [`accordion-item-${t.color}`]: t.color,
        "accordion-header-icon": (s = t.content) == null ? void 0 : s.icon
      }),
      children: [
        /* @__PURE__ */ H.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ H.jsx("h4", { children: /* @__PURE__ */ H.jsx(
          Qr,
          {
            gaData: { ...a, action: j, text: t.content.header },
            children: /* @__PURE__ */ H.jsxs(
              "a",
              {
                "data-testid": "accordion-opener",
                className: ct({ collapsed: !_ }),
                "data-bs-toggle": "collapse",
                href: `#card-body-${e}`,
                role: "button",
                "aria-expanded": _,
                "aria-controls": `card-body-${e}`,
                onClick: ($) => n($, e),
                children: [
                  (p = t.content) != null && p.icon ? /* @__PURE__ */ H.jsxs("span", { className: "accordion-icon", children: [
                    /* @__PURE__ */ H.jsx(
                      "i",
                      {
                        className: `${(h = t.content.icon) == null ? void 0 : h[0]} fa-${(m = t.content.icon) == null ? void 0 : m[1]} me-2`
                      }
                    ),
                    t.content.header
                  ] }) : (f = t.content) == null ? void 0 : f.header,
                  /* @__PURE__ */ H.jsx("i", { className: "fas fa-chevron-up" })
                ]
              }
            )
          }
        ) }) }),
        ((A = t.content) == null ? void 0 : A.body) && /* @__PURE__ */ H.jsx(
          "div",
          {
            id: `card-body-${e}`,
            className: ct("collapse", { show: _ }),
            children: /* @__PURE__ */ H.jsx(
              "div",
              {
                className: "accordion-body",
                dangerouslySetInnerHTML: Yr(t.content.body)
              }
            )
          }
        )
      ]
    }
  );
};
cl.propTypes = {
  id: l.number,
  item: nl,
  openCard: l.number,
  onClick: l.func,
  // eslint-disable-next-line react/forbid-prop-types
  gaData: l.object
};
const rd = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Zo = ({ cards: e, openedCard: t }) => {
  const [r, n] = dt(t), a = (s, p) => {
    s.preventDefault(), n(r !== p ? p : null);
  };
  return /* @__PURE__ */ H.jsx("div", { className: "accordion", children: e == null ? void 0 : e.map(
    (s, p) => s.content.body && s.content.header && /* @__PURE__ */ H.jsx(
      cl,
      {
        id: p + 1,
        item: s,
        openCard: r,
        onClick: a,
        gaData: rd
      },
      p + 1
    )
  ) });
};
Zo.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: l.arrayOf(nl).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: l.number
};
const nd = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Er = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  block: a,
  color: s,
  disabled: p,
  element: h,
  href: m,
  icon: f,
  innerRef: A,
  onClick: _,
  size: j,
  classes: $,
  target: E,
  ...S
}) => {
  const I = ct("btn", {
    [`btn-${s}`]: !0,
    "btn-md": j === "small",
    "btn-sm": j === "xsmall",
    "btn-block": a,
    disabled: p
  });
  let F = h;
  return m && h === "button" && (F = "a"), /* @__PURE__ */ H.jsx(
    Qr,
    {
      gaData: {
        ...nd,
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
          className: ct($) || I,
          href: m,
          ref: A,
          onClick: _,
          "aria-label": n,
          target: F === "a" ? E : null,
          children: [
            f && /* @__PURE__ */ H.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Er.propTypes = {
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
  gaData: Yo,
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
Er.defaultProps = {
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
var ul = { exports: {} }, Ze = {}, ts;
function ad() {
  if (ts) return Ze;
  ts = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var I = S.$$typeof;
      switch (I) {
        case e:
          switch (S = S.type, S) {
            case r:
            case a:
            case n:
            case m:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case p:
                case h:
                case _:
                case A:
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
  return Ze.ContextConsumer = s, Ze.ContextProvider = p, Ze.Element = e, Ze.ForwardRef = h, Ze.Fragment = r, Ze.Lazy = _, Ze.Memo = A, Ze.Portal = t, Ze.Profiler = a, Ze.StrictMode = n, Ze.Suspense = m, Ze.SuspenseList = f, Ze.isContextConsumer = function(S) {
    return E(S) === s;
  }, Ze.isContextProvider = function(S) {
    return E(S) === p;
  }, Ze.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Ze.isForwardRef = function(S) {
    return E(S) === h;
  }, Ze.isFragment = function(S) {
    return E(S) === r;
  }, Ze.isLazy = function(S) {
    return E(S) === _;
  }, Ze.isMemo = function(S) {
    return E(S) === A;
  }, Ze.isPortal = function(S) {
    return E(S) === t;
  }, Ze.isProfiler = function(S) {
    return E(S) === a;
  }, Ze.isStrictMode = function(S) {
    return E(S) === n;
  }, Ze.isSuspense = function(S) {
    return E(S) === m;
  }, Ze.isSuspenseList = function(S) {
    return E(S) === f;
  }, Ze.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === a || S === n || S === m || S === f || S === j || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === A || S.$$typeof === p || S.$$typeof === s || S.$$typeof === h || S.$$typeof === $ || S.getModuleId !== void 0);
  }, Ze.typeOf = E, Ze;
}
ul.exports = ad();
var dl = ul.exports;
function od(e) {
  function t(q, N, U, B, x) {
    for (var G = 0, O = 0, oe = 0, te = 0, re, X, se = 0, fe = 0, ne, ue = ne = re = 0, ae = 0, ye = 0, ze = 0, ge = 0, tt = U.length, Ye = tt - 1, we, J = "", de = "", rt = "", Je = "", Me; ae < tt; ) {
      if (X = U.charCodeAt(ae), ae === Ye && O + te + oe + G !== 0 && (O !== 0 && (X = O === 47 ? 10 : 47), te = oe = G = 0, tt++, Ye++), O + te + oe + G === 0) {
        if (ae === Ye && (0 < ye && (J = J.replace(j, "")), 0 < J.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += U.charAt(ae);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (J = J.trim(), re = J.charCodeAt(0), ne = 1, ge = ++ae; ae < tt; ) {
              switch (X = U.charCodeAt(ae)) {
                case 123:
                  ne++;
                  break;
                case 125:
                  ne--;
                  break;
                case 47:
                  switch (X = U.charCodeAt(ae + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ue = ae + 1; ue < Ye; ++ue)
                          switch (U.charCodeAt(ue)) {
                            case 47:
                              if (X === 42 && U.charCodeAt(ue - 1) === 42 && ae + 2 !== ue) {
                                ae = ue + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                ae = ue + 1;
                                break e;
                              }
                          }
                        ae = ue;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; ae++ < Ye && U.charCodeAt(ae) !== X; )
                    ;
              }
              if (ne === 0) break;
              ae++;
            }
            switch (ne = U.substring(ge, ae), re === 0 && (re = (J = J.replace(_, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < ye && (J = J.replace(j, "")), X = J.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ye = N;
                    break;
                  default:
                    ye = Be;
                }
                if (ne = t(N, ye, ne, X, x + 1), ge = ne.length, 0 < _e && (ye = r(Be, J, ze), Me = h(3, ne, ye, N, ce, pe, ge, X, x, B), J = ye.join(""), Me !== void 0 && (ge = (ne = Me.trim()).length) === 0 && (X = 0, ne = "")), 0 < ge) switch (X) {
                  case 115:
                    J = J.replace(ie, p);
                  case 100:
                  case 109:
                  case 45:
                    ne = J + "{" + ne + "}";
                    break;
                  case 107:
                    J = J.replace(z, "$1 $2"), ne = J + "{" + ne + "}", ne = me === 1 || me === 2 && s("@" + ne, 3) ? "@-webkit-" + ne + "@" + ne : "@" + ne;
                    break;
                  default:
                    ne = J + ne, B === 112 && (ne = (de += ne, ""));
                }
                else ne = "";
                break;
              default:
                ne = t(N, r(N, J, ze), ne, B, x + 1);
            }
            rt += ne, ne = ze = ye = ue = re = 0, J = "", X = U.charCodeAt(++ae);
            break;
          case 125:
          case 59:
            if (J = (0 < ye ? J.replace(j, "") : J).trim(), 1 < (ge = J.length)) switch (ue === 0 && (re = J.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (ge = (J = J.replace(" ", ":")).length), 0 < _e && (Me = h(1, J, N, q, ce, pe, de.length, B, x, B)) !== void 0 && (ge = (J = Me.trim()).length) === 0 && (J = "\0\0"), re = J.charCodeAt(0), X = J.charCodeAt(1), re) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  Je += J + U.charAt(ae);
                  break;
                }
              default:
                J.charCodeAt(ge - 1) !== 58 && (de += a(J, re, X, J.charCodeAt(2)));
            }
            ze = ye = ue = re = 0, J = "", X = U.charCodeAt(++ae);
        }
      }
      switch (X) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + re === 0 && B !== 107 && 0 < J.length && (ye = 1, J += "\0"), 0 < _e * He && h(0, J, N, q, ce, pe, de.length, B, x, B), pe = 1, ce++;
          break;
        case 59:
        case 125:
          if (O + te + oe + G === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, we = U.charAt(ae), X) {
            case 9:
            case 32:
              if (te + G + O === 0) switch (se) {
                case 44:
                case 58:
                case 9:
                case 32:
                  we = "";
                  break;
                default:
                  X !== 32 && (we = " ");
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
              te + O + G === 0 && (ye = ze = 1, we = "\f" + we);
              break;
            case 108:
              if (te + O + G + Ce === 0 && 0 < ue) switch (ae - ue) {
                case 2:
                  se === 112 && U.charCodeAt(ae - 3) === 58 && (Ce = se);
                case 8:
                  fe === 111 && (Ce = fe);
              }
              break;
            case 58:
              te + O + G === 0 && (ue = ae);
              break;
            case 44:
              O + oe + te + G === 0 && (ye = 1, we += "\r");
              break;
            case 34:
            case 39:
              O === 0 && (te = te === X ? 0 : te === 0 ? X : te);
              break;
            case 91:
              te + O + oe === 0 && G++;
              break;
            case 93:
              te + O + oe === 0 && G--;
              break;
            case 41:
              te + O + G === 0 && oe--;
              break;
            case 40:
              if (te + O + G === 0) {
                if (re === 0) switch (2 * se + 3 * fe) {
                  case 533:
                    break;
                  default:
                    re = 1;
                }
                oe++;
              }
              break;
            case 64:
              O + oe + te + G + ue + ne === 0 && (ne = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + G + oe)) switch (O) {
                case 0:
                  switch (2 * X + 3 * U.charCodeAt(ae + 1)) {
                    case 235:
                      O = 47;
                      break;
                    case 220:
                      ge = ae, O = 42;
                  }
                  break;
                case 42:
                  X === 47 && se === 42 && ge + 2 !== ae && (U.charCodeAt(ge + 2) === 33 && (de += U.substring(ge, ae + 1)), we = "", O = 0);
              }
          }
          O === 0 && (J += we);
      }
      fe = se, se = X, ae++;
    }
    if (ge = de.length, 0 < ge) {
      if (ye = N, 0 < _e && (Me = h(2, de, ye, q, ce, pe, ge, B, x, B), Me !== void 0 && (de = Me).length === 0)) return Je + de + rt;
      if (de = ye.join(",") + "{" + de + "}", me * Ce !== 0) {
        switch (me !== 2 || s(de, 2) || (Ce = 0), Ce) {
          case 111:
            de = de.replace(Z, ":-moz-$1") + de;
            break;
          case 112:
            de = de.replace(K, "::-webkit-input-$1") + de.replace(K, "::-moz-$1") + de.replace(K, ":-ms-input-$1") + de;
        }
        Ce = 0;
      }
    }
    return Je + de + rt;
  }
  function r(q, N, U) {
    var B = N.trim().split(I);
    N = B;
    var x = B.length, G = q.length;
    switch (G) {
      case 0:
      case 1:
        var O = 0;
        for (q = G === 0 ? "" : q[0] + " "; O < x; ++O)
          N[O] = n(q, N[O], U).trim();
        break;
      default:
        var oe = O = 0;
        for (N = []; O < x; ++O)
          for (var te = 0; te < G; ++te)
            N[oe++] = n(q[te] + " ", B[O], U).trim();
    }
    return N;
  }
  function n(q, N, U) {
    var B = N.charCodeAt(0);
    switch (33 > B && (B = (N = N.trim()).charCodeAt(0)), B) {
      case 38:
        return N.replace(F, "$1" + q.trim());
      case 58:
        return q.trim() + N.replace(F, "$1" + q.trim());
      default:
        if (0 < 1 * U && 0 < N.indexOf("\f")) return N.replace(F, (q.charCodeAt(0) === 58 ? "" : "$1") + q.trim());
    }
    return q + N;
  }
  function a(q, N, U, B) {
    var x = q + ";", G = 2 * N + 3 * U + 4 * B;
    if (G === 944) {
      q = x.indexOf(":", 9) + 1;
      var O = x.substring(q, x.length - 1).trim();
      return O = x.substring(0, q).trim() + O + ";", me === 1 || me === 2 && s(O, 1) ? "-webkit-" + O + O : O;
    }
    if (me === 0 || me === 2 && !s(x, 1)) return x;
    switch (G) {
      case 1015:
        return x.charCodeAt(10) === 97 ? "-webkit-" + x + x : x;
      case 951:
        return x.charCodeAt(3) === 116 ? "-webkit-" + x + x : x;
      case 963:
        return x.charCodeAt(5) === 110 ? "-webkit-" + x + x : x;
      case 1009:
        if (x.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + x + x;
      case 978:
        return "-webkit-" + x + "-moz-" + x + x;
      case 1019:
      case 983:
        return "-webkit-" + x + "-moz-" + x + "-ms-" + x + x;
      case 883:
        if (x.charCodeAt(8) === 45) return "-webkit-" + x + x;
        if (0 < x.indexOf("image-set(", 11)) return x.replace(Pe, "$1-webkit-$2") + x;
        break;
      case 932:
        if (x.charCodeAt(4) === 45) switch (x.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + x.replace("-grow", "") + "-webkit-" + x + "-ms-" + x.replace("grow", "positive") + x;
          case 115:
            return "-webkit-" + x + "-ms-" + x.replace("shrink", "negative") + x;
          case 98:
            return "-webkit-" + x + "-ms-" + x.replace("basis", "preferred-size") + x;
        }
        return "-webkit-" + x + "-ms-" + x + x;
      case 964:
        return "-webkit-" + x + "-ms-flex-" + x + x;
      case 1023:
        if (x.charCodeAt(8) !== 99) break;
        return O = x.substring(x.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + O + "-webkit-" + x + "-ms-flex-pack" + O + x;
      case 1005:
        return E.test(x) ? x.replace($, ":-webkit-") + x.replace($, ":-moz-") + x : x;
      case 1e3:
        switch (O = x.substring(13).trim(), N = O.indexOf("-") + 1, O.charCodeAt(0) + O.charCodeAt(N)) {
          case 226:
            O = x.replace(C, "tb");
            break;
          case 232:
            O = x.replace(C, "tb-rl");
            break;
          case 220:
            O = x.replace(C, "lr");
            break;
          default:
            return x;
        }
        return "-webkit-" + x + "-ms-" + O + x;
      case 1017:
        if (x.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (N = (x = q).length - 10, O = (x.charCodeAt(N) === 33 ? x.substring(0, N) : x).substring(q.indexOf(":", 7) + 1).trim(), G = O.charCodeAt(0) + (O.charCodeAt(7) | 0)) {
          case 203:
            if (111 > O.charCodeAt(8)) break;
          case 115:
            x = x.replace(O, "-webkit-" + O) + ";" + x;
            break;
          case 207:
          case 102:
            x = x.replace(O, "-webkit-" + (102 < G ? "inline-" : "") + "box") + ";" + x.replace(O, "-webkit-" + O) + ";" + x.replace(O, "-ms-" + O + "box") + ";" + x;
        }
        return x + ";";
      case 938:
        if (x.charCodeAt(5) === 45) switch (x.charCodeAt(6)) {
          case 105:
            return O = x.replace("-items", ""), "-webkit-" + x + "-webkit-box-" + O + "-ms-flex-" + O + x;
          case 115:
            return "-webkit-" + x + "-ms-flex-item-" + x.replace(Se, "") + x;
          default:
            return "-webkit-" + x + "-ms-flex-line-pack" + x.replace("align-content", "").replace(Se, "") + x;
        }
        break;
      case 973:
      case 989:
        if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if ($e.test(q) === !0) return (O = q.substring(q.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(q.replace("stretch", "fill-available"), N, U, B).replace(":fill-available", ":stretch") : x.replace(O, "-webkit-" + O) + x.replace(O, "-moz-" + O.replace("fill-", "")) + x;
        break;
      case 962:
        if (x = "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x, U + B === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf("transform", 10)) return x.substring(0, x.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + x;
    }
    return x;
  }
  function s(q, N) {
    var U = q.indexOf(N === 1 ? ":" : "{"), B = q.substring(0, N !== 3 ? U : 10);
    return U = q.substring(U + 1, q.length - 1), Fe(N !== 2 ? B : B.replace(Ie, "$1"), U, N);
  }
  function p(q, N) {
    var U = a(N, N.charCodeAt(0), N.charCodeAt(1), N.charCodeAt(2));
    return U !== N + ";" ? U.replace(he, " or ($1)").substring(4) : "(" + N + ")";
  }
  function h(q, N, U, B, x, G, O, oe, te, re) {
    for (var X = 0, se = N, fe; X < _e; ++X)
      switch (fe = Ae[X].call(A, q, se, U, B, x, G, O, oe, te, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = fe;
      }
    if (se !== N) return se;
  }
  function m(q) {
    switch (q) {
      case void 0:
      case null:
        _e = Ae.length = 0;
        break;
      default:
        if (typeof q == "function") Ae[_e++] = q;
        else if (typeof q == "object") for (var N = 0, U = q.length; N < U; ++N)
          m(q[N]);
        else He = !!q | 0;
    }
    return m;
  }
  function f(q) {
    return q = q.prefix, q !== void 0 && (Fe = null, q ? typeof q != "function" ? me = 1 : (me = 2, Fe = q) : me = 0), f;
  }
  function A(q, N) {
    var U = q;
    if (33 > U.charCodeAt(0) && (U = U.trim()), We = U, U = [We], 0 < _e) {
      var B = h(-1, N, U, U, ce, pe, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (N = B);
    }
    var x = t(Be, U, N, 0, 0);
    return 0 < _e && (B = h(-2, x, U, U, ce, pe, x.length, 0, 0, 0), B !== void 0 && (x = B)), We = "", Ce = 0, pe = ce = 1, x;
  }
  var _ = /^\0+/g, j = /[\0\r\f]/g, $ = /: */g, E = /zoo|gra/, S = /([,: ])(transform)/g, I = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, z = /@(k\w+)\s*(\S*)\s*/, K = /::(place)/g, Z = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, ie = /\(\s*(.*)\s*\)/g, he = /([\s\S]*?);/g, Se = /-self|flex-/g, Ie = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $e = /stretch|:\s*\w+\-(?:conte|avail)/, Pe = /([^-])(image-set\()/, pe = 1, ce = 1, Ce = 0, me = 1, Be = [], Ae = [], _e = 0, Fe = null, He = 0, We = "";
  return A.use = m, A.set = f, e !== void 0 && f(e), A;
}
var id = {
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
function sd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ld = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, rs = /* @__PURE__ */ sd(
  function(e) {
    return ld.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), pl = { exports: {} }, Ve = {}, ns;
function cd() {
  if (ns) return Ve;
  ns = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, h = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, _ = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function K(C) {
    if (typeof C == "object" && C !== null) {
      var ie = C.$$typeof;
      switch (ie) {
        case t:
          switch (C = C.type, C) {
            case m:
            case f:
            case n:
            case s:
            case a:
            case _:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case h:
                case A:
                case E:
                case $:
                case p:
                  return C;
                default:
                  return ie;
              }
          }
        case r:
          return ie;
      }
    }
  }
  function Z(C) {
    return K(C) === f;
  }
  return Ve.AsyncMode = m, Ve.ConcurrentMode = f, Ve.ContextConsumer = h, Ve.ContextProvider = p, Ve.Element = t, Ve.ForwardRef = A, Ve.Fragment = n, Ve.Lazy = E, Ve.Memo = $, Ve.Portal = r, Ve.Profiler = s, Ve.StrictMode = a, Ve.Suspense = _, Ve.isAsyncMode = function(C) {
    return Z(C) || K(C) === m;
  }, Ve.isConcurrentMode = Z, Ve.isContextConsumer = function(C) {
    return K(C) === h;
  }, Ve.isContextProvider = function(C) {
    return K(C) === p;
  }, Ve.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, Ve.isForwardRef = function(C) {
    return K(C) === A;
  }, Ve.isFragment = function(C) {
    return K(C) === n;
  }, Ve.isLazy = function(C) {
    return K(C) === E;
  }, Ve.isMemo = function(C) {
    return K(C) === $;
  }, Ve.isPortal = function(C) {
    return K(C) === r;
  }, Ve.isProfiler = function(C) {
    return K(C) === s;
  }, Ve.isStrictMode = function(C) {
    return K(C) === a;
  }, Ve.isSuspense = function(C) {
    return K(C) === _;
  }, Ve.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === a || C === _ || C === j || typeof C == "object" && C !== null && (C.$$typeof === E || C.$$typeof === $ || C.$$typeof === p || C.$$typeof === h || C.$$typeof === A || C.$$typeof === I || C.$$typeof === F || C.$$typeof === z || C.$$typeof === S);
  }, Ve.typeOf = K, Ve;
}
pl.exports = cd();
var ud = pl.exports, Ko = ud, dd = {
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
}, pd = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, fd = {
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
}, Xo = {};
Xo[Ko.ForwardRef] = fd;
Xo[Ko.Memo] = fl;
function as(e) {
  return Ko.isMemo(e) ? fl : Xo[e.$$typeof] || dd;
}
var hd = Object.defineProperty, gd = Object.getOwnPropertyNames, os = Object.getOwnPropertySymbols, md = Object.getOwnPropertyDescriptor, yd = Object.getPrototypeOf, is = Object.prototype;
function hl(e, t, r) {
  if (typeof t != "string") {
    if (is) {
      var n = yd(t);
      n && n !== is && hl(e, n, r);
    }
    var a = gd(t);
    os && (a = a.concat(os(t)));
    for (var s = as(e), p = as(t), h = 0; h < a.length; ++h) {
      var m = a[h];
      if (!pd[m] && !(r && r[m]) && !(p && p[m]) && !(s && s[m])) {
        var f = md(t, m);
        try {
          hd(e, m, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var bd = hl;
const xd = /* @__PURE__ */ Go(bd);
var St = { env: { NODE_ENV: "production" } };
function Cr() {
  return (Cr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ss = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Co = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !dl.typeOf(e);
}, Sa = Object.freeze([]), Lr = Object.freeze({});
function Ln(e) {
  return typeof e == "function";
}
function ls(e) {
  return e.displayName || e.name || "Component";
}
function Jo(e) {
  return e && typeof e.styledComponentId == "string";
}
var ln = typeof St < "u" && St.env !== void 0 && (St.env.REACT_APP_SC_ATTR || St.env.SC_ATTR) || "data-styled", Qo = typeof window < "u" && "HTMLElement" in window, vd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof St < "u" && St.env !== void 0 && (St.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && St.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? St.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && St.env.REACT_APP_SC_DISABLE_SPEEDY : St.env.SC_DISABLE_SPEEDY !== void 0 && St.env.SC_DISABLE_SPEEDY !== "" ? St.env.SC_DISABLE_SPEEDY !== "false" && St.env.SC_DISABLE_SPEEDY : St.env.NODE_ENV !== "production"));
function Mn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var wd = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, p = s; r >= p; ) (p <<= 1) < 0 && Mn(16, "" + r);
      this.groupSizes = new Uint32Array(p), this.groupSizes.set(a), this.length = p;
      for (var h = s; h < p; h++) this.groupSizes[h] = 0;
    }
    for (var m = this.indexOfGroup(r + 1), f = 0, A = n.length; f < A; f++) this.tag.insertRule(m, n[f]) && (this.groupSizes[r]++, m++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var p = a; p < s; p++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), p = s + a, h = s; h < p; h++) n += this.tag.getRule(h) + `/*!sc*/
`;
    return n;
  }, e;
}(), ha = /* @__PURE__ */ new Map(), ka = /* @__PURE__ */ new Map(), Nn = 1, ia = function(e) {
  if (ha.has(e)) return ha.get(e);
  for (; ka.has(Nn); ) Nn++;
  var t = Nn++;
  return ha.set(e, t), ka.set(t, e), t;
}, Sd = function(e) {
  return ka.get(e);
}, kd = function(e, t) {
  t >= Nn && (Nn = t + 1), ha.set(e, t), ka.set(t, e);
}, Td = "style[" + ln + '][data-styled-version="5.3.11"]', Cd = new RegExp("^" + ln + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ad = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, p = a.length; s < p; s++) (n = a[s]) && e.registerName(t, n);
}, _d = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var p = r[a].trim();
    if (p) {
      var h = p.match(Cd);
      if (h) {
        var m = 0 | parseInt(h[1], 10), f = h[2];
        m !== 0 && (kd(f, m), Ad(e, f, h[3]), e.getTag().insertRules(m, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, Ed = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, gl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(h) {
    for (var m = h.childNodes, f = m.length; f >= 0; f--) {
      var A = m[f];
      if (A && A.nodeType === 1 && A.hasAttribute(ln)) return A;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(ln, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = Ed();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, Od = function() {
  function e(r) {
    var n = this.element = gl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, p = 0, h = s.length; p < h; p++) {
        var m = s[p];
        if (m.ownerNode === a) return m;
      }
      Mn(17);
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
    var n = this.element = gl(r);
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
}(), Rd = function() {
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
}(), cs = Qo, Nd = { isServer: !Qo, useCSSOMInjection: !vd }, ml = function() {
  function e(r, n, a) {
    r === void 0 && (r = Lr), n === void 0 && (n = {}), this.options = Cr({}, Nd, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Qo && cs && (cs = !1, function(s) {
      for (var p = document.querySelectorAll(Td), h = 0, m = p.length; h < m; h++) {
        var f = p[h];
        f && f.getAttribute(ln) !== "active" && (_d(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ia(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Cr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = a ? new Rd(p) : s ? new Od(p) : new jd(p), new wd(r)));
    var r, n, a, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ia(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(ia(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ia(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", p = 0; p < a; p++) {
        var h = Sd(p);
        if (h !== void 0) {
          var m = r.names.get(h), f = n.getGroup(p);
          if (m && f && m.size) {
            var A = ln + ".g" + p + '[id="' + h + '"]', _ = "";
            m !== void 0 && m.forEach(function(j) {
              j.length > 0 && (_ += j + ",");
            }), s += "" + f + A + '{content:"' + _ + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Id = /(a)(d)/gi, us = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ao(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = us(t % 52) + r;
  return (us(t % 52) + r).replace(Id, "$1-$2");
}
var nn = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, yl = function(e) {
  return nn(5381, e);
};
function Pd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ln(r) && !Jo(r)) return !1;
  }
  return !0;
}
var Ld = yl("5.3.11"), Dd = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Pd(t), this.componentId = r, this.baseHash = nn(Ld, r), this.baseStyle = n, ml.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = cn(this.rules, t, r, n).join(""), h = Ao(nn(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(a, h)) {
        var m = n(p, "." + h, void 0, a);
        r.insertRules(a, h, m);
      }
      s.push(h), this.staticRulesId = h;
    }
    else {
      for (var f = this.rules.length, A = nn(this.baseHash, n.hash), _ = "", j = 0; j < f; j++) {
        var $ = this.rules[j];
        if (typeof $ == "string") _ += $;
        else if ($) {
          var E = cn($, t, r, n), S = Array.isArray(E) ? E.join("") : E;
          A = nn(A, S + j), _ += S;
        }
      }
      if (_) {
        var I = Ao(A >>> 0);
        if (!r.hasNameForId(a, I)) {
          var F = n(_, "." + I, void 0, a);
          r.insertRules(a, I, F);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), Md = /^\s*\/\/.*$/gm, Fd = [":", "[", ".", "#"];
function $d(e) {
  var t, r, n, a, s = Lr, p = s.options, h = p === void 0 ? Lr : p, m = s.plugins, f = m === void 0 ? Sa : m, A = new od(h), _ = [], j = /* @__PURE__ */ function(S) {
    function I(F) {
      if (F) try {
        S(F + "}");
      } catch {
      }
    }
    return function(F, z, K, Z, C, ie, he, Se, Ie, $e) {
      switch (F) {
        case 1:
          if (Ie === 0 && z.charCodeAt(0) === 64) return S(z + ";"), "";
          break;
        case 2:
          if (Se === 0) return z + "/*|*/";
          break;
        case 3:
          switch (Se) {
            case 102:
            case 112:
              return S(K[0] + z), "";
            default:
              return z + ($e === 0 ? "/*|*/" : "");
          }
        case -2:
          z.split("/*|*/}").forEach(I);
      }
    };
  }(function(S) {
    _.push(S);
  }), $ = function(S, I, F) {
    return I === 0 && Fd.indexOf(F[r.length]) !== -1 || F.match(a) ? S : "." + t;
  };
  function E(S, I, F, z) {
    z === void 0 && (z = "&");
    var K = S.replace(Md, ""), Z = I && F ? F + " " + I + " { " + K + " }" : K;
    return t = z, r = I, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), A(F || !I ? "" : I, Z);
  }
  return A.use([].concat(f, [function(S, I, F) {
    S === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, $));
  }, j, function(S) {
    if (S === -2) {
      var I = _;
      return _ = [], I;
    }
  }])), E.hash = f.length ? f.reduce(function(S, I) {
    return I.name || Mn(15), nn(S, I.name);
  }, 5381).toString() : "", E;
}
var bl = mt.createContext();
bl.Consumer;
var xl = mt.createContext(), zd = (xl.Consumer, new ml()), _o = $d();
function Ud() {
  return Zt(bl) || zd;
}
function qd() {
  return Zt(xl) || _o;
}
var Bd = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = _o);
      var p = n.name + s.hash;
      a.hasNameForId(n.id, p) || a.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return Mn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = _o), this.name + t.hash;
  }, e;
}(), Hd = /([A-Z])/, Wd = /([A-Z])/g, Vd = /^ms-/, Gd = function(e) {
  return "-" + e.toLowerCase();
};
function ds(e) {
  return Hd.test(e) ? e.replace(Wd, Gd).replace(Vd, "-ms-") : e;
}
var ps = function(e) {
  return e == null || e === !1 || e === "";
};
function cn(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], p = 0, h = e.length; p < h; p += 1) (a = cn(e[p], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (ps(e)) return "";
  if (Jo(e)) return "." + e.styledComponentId;
  if (Ln(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var m = e(t);
    return cn(m, t, r, n);
  }
  var f;
  return e instanceof Bd ? r ? (e.inject(r, n), e.getName(n)) : e : Co(e) ? function A(_, j) {
    var $, E, S = [];
    for (var I in _) _.hasOwnProperty(I) && !ps(_[I]) && (Array.isArray(_[I]) && _[I].isCss || Ln(_[I]) ? S.push(ds(I) + ":", _[I], ";") : Co(_[I]) ? S.push.apply(S, A(_[I], I)) : S.push(ds(I) + ": " + ($ = I, (E = _[I]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || $ in id || $.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return j ? [j + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var fs = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Yd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Ln(e) || Co(e) ? fs(cn(ss(Sa, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : fs(cn(ss(e, r)));
}
var Zd = function(e, t, r) {
  return r === void 0 && (r = Lr), e.theme !== r.theme && e.theme || t || r.theme;
}, Kd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Xd = /(^-|-$)/g;
function no(e) {
  return e.replace(Kd, "-").replace(Xd, "");
}
var Jd = function(e) {
  return Ao(yl(e) >>> 0);
};
function sa(e) {
  return typeof e == "string" && St.env.NODE_ENV === "production";
}
var Eo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Qd = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ep(e, t, r) {
  var n = e[r];
  Eo(t) && Eo(n) ? vl(n, t) : e[r] = t;
}
function vl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var p = s[a];
    if (Eo(p)) for (var h in p) Qd(h) && ep(e, p[h], h);
  }
  return e;
}
var wl = mt.createContext();
wl.Consumer;
var ao = {};
function Sl(e, t, r) {
  var n = Jo(e), a = !sa(e), s = t.attrs, p = s === void 0 ? Sa : s, h = t.componentId, m = h === void 0 ? function(z, K) {
    var Z = typeof z != "string" ? "sc" : no(z);
    ao[Z] = (ao[Z] || 0) + 1;
    var C = Z + "-" + Jd("5.3.11" + Z + ao[Z]);
    return K ? K + "-" + C : C;
  }(t.displayName, t.parentComponentId) : h, f = t.displayName, A = f === void 0 ? function(z) {
    return sa(z) ? "styled." + z : "Styled(" + ls(z) + ")";
  }(e) : f, _ = t.displayName && t.componentId ? no(t.displayName) + "-" + t.componentId : t.componentId || m, j = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(z, K, Z) {
    return e.shouldForwardProp(z, K, Z) && t.shouldForwardProp(z, K, Z);
  } : e.shouldForwardProp);
  var E, S = new Dd(r, _, n ? e.componentStyle : void 0), I = S.isStatic && p.length === 0, F = function(z, K) {
    return function(Z, C, ie, he) {
      var Se = Z.attrs, Ie = Z.componentStyle, $e = Z.defaultProps, Pe = Z.foldedComponentIds, pe = Z.shouldForwardProp, ce = Z.styledComponentId, Ce = Z.target, me = function(B, x, G) {
        B === void 0 && (B = Lr);
        var O = Cr({}, x, { theme: B }), oe = {};
        return G.forEach(function(te) {
          var re, X, se, fe = te;
          for (re in Ln(fe) && (fe = fe(O)), fe) O[re] = oe[re] = re === "className" ? (X = oe[re], se = fe[re], X && se ? X + " " + se : X || se) : fe[re];
        }), [O, oe];
      }(Zd(C, Zt(wl), $e) || Lr, C, Se), Be = me[0], Ae = me[1], _e = function(B, x, G, O) {
        var oe = Ud(), te = qd(), re = x ? B.generateAndInjectStyles(Lr, oe, te) : B.generateAndInjectStyles(G, oe, te);
        return re;
      }(Ie, he, Be), Fe = ie, He = Ae.$as || C.$as || Ae.as || C.as || Ce, We = sa(He), q = Ae !== C ? Cr({}, C, {}, Ae) : C, N = {};
      for (var U in q) U[0] !== "$" && U !== "as" && (U === "forwardedAs" ? N.as = q[U] : (pe ? pe(U, rs, He) : !We || rs(U)) && (N[U] = q[U]));
      return C.style && Ae.style !== C.style && (N.style = Cr({}, C.style, {}, Ae.style)), N.className = Array.prototype.concat(Pe, ce, _e !== ce ? _e : null, C.className, Ae.className).filter(Boolean).join(" "), N.ref = Fe, Ks(He, N);
    }(E, z, K, I);
  };
  return F.displayName = A, (E = mt.forwardRef(F)).attrs = j, E.componentStyle = S, E.displayName = A, E.shouldForwardProp = $, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Sa, E.styledComponentId = _, E.target = n ? e.target : e, E.withComponent = function(z) {
    var K = t.componentId, Z = function(ie, he) {
      if (ie == null) return {};
      var Se, Ie, $e = {}, Pe = Object.keys(ie);
      for (Ie = 0; Ie < Pe.length; Ie++) Se = Pe[Ie], he.indexOf(Se) >= 0 || ($e[Se] = ie[Se]);
      return $e;
    }(t, ["componentId"]), C = K && K + "-" + (sa(z) ? z : no(ls(z)));
    return Sl(z, Cr({}, Z, { attrs: j, componentId: C }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(z) {
    this._foldedDefaultProps = n ? vl({}, e.defaultProps, z) : z;
  } }), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), a && xd(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var ur = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Lr), !dl.isValidElementType(n)) return Mn(1, String(n));
    var s = function() {
      return r(n, a, Yd.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, Cr({}, a, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, Cr({}, a, { attrs: Array.prototype.concat(a.attrs, p).filter(Boolean) }));
    }, s;
  }(Sl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ur[e] = ur(e);
});
const tp = ur.div`
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
`, ga = "On This Page", rp = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: ga
}, kl = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const n = sn(null), a = bu("(max-width: 991px)"), [s, p] = dt({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), h = a ? 110 : 142, m = () => {
    var S;
    const I = {}, F = window.scrollY, z = (S = document.getElementById(t)) == null ? void 0 : S.getBoundingClientRect().top, K = 103;
    z >= 0 && (I.sticky = !1, I.activeContainer = ""), F > n.current.getBoundingClientRect().top && (I.sticky = !0);
    const Z = s.hasHeader ? h + K : K;
    e == null || e.forEach(({ targetIdName: C }) => {
      const ie = document.getElementById(C), he = (ie == null ? void 0 : ie.getBoundingClientRect().top) - Z, Se = (ie == null ? void 0 : ie.getBoundingClientRect().bottom) - Z;
      he < 0 && Se > 0 && (I.activeContainer = C);
    }), p((C) => ({
      ...C,
      ...I
    }));
  }, f = () => {
    Ku(m, 150), Xu(m, 150);
  }, A = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), _ = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function j(S = null) {
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
    return I.length > 0 ? I.join(" ") : j(S.parentElement);
  }
  Ct(() => {
    const S = document.getElementById(t) || null, I = {
      hasHeader: A(),
      hasAltMenuSpacing: _(),
      containerClass: j(S)
    };
    p((F) => ({
      ...F,
      ...I
    }));
  }, []), Ct(() => (window == null || window.addEventListener("scroll", f), () => window.removeEventListener("scroll", f)), [s.hasHeader]);
  const $ = (S) => {
    var I, F;
    const z = window.scrollY - (s.hasHeader ? h + 100 : 100), K = a ? 410 : 90;
    let Z = ((I = document.getElementById(S)) == null ? void 0 : I.getBoundingClientRect().top) + z;
    n.current.classList.contains("sticky") || (Z -= K), r && ((F = Zu(`#${S}`)) == null || F.focus()), window.scrollTo({ top: Z, behavior: "smooth" });
  }, E = () => {
    p((S) => ({
      ...S,
      showMenu: !S.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ H.jsx(
    tp,
    {
      requiresAltMenuSpacing: s.hasAltMenuSpacing,
      ref: n,
      className: ct(
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
          Qr,
          {
            gaData: {
              ...rp,
              action: s.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ H.jsx(
              "button",
              {
                className: ct("mobile-menu-toggler", {
                  "show-menu": s.showMenu
                }),
                type: "button",
                onClick: E,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ H.jsxs("h4", { children: [
                  ga,
                  ":",
                  /* @__PURE__ */ H.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ H.jsxs("h4", { children: [
          ga,
          ":"
        ] }),
        /* @__PURE__ */ H.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: ct("card", "card-body", "collapse", {
              show: s.showMenu
            }),
            children: /* @__PURE__ */ H.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": ga,
                children: e == null ? void 0 : e.map((S) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ H.jsx(
                    Er,
                    {
                      "data-testid": `anchor-item-${S.targetIdName}`,
                      classes: ct("nav-link", {
                        active: s.activeContainer === S.targetIdName
                      }).split(" "),
                      ariaLabel: S.text,
                      label: S.text,
                      icon: S.icon,
                      onClick: () => $(S.targetIdName)
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
kl.propTypes = {
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
function Na(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var np = /* @__PURE__ */ function() {
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
}(), Zr = function() {
  return Zr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Zr.apply(this, arguments);
}, ap = function(e, t, r, n) {
  function a(s) {
    return s instanceof r ? s : new r(function(p) {
      p(s);
    });
  }
  return new (r || (r = Promise))(function(s, p) {
    function h(A) {
      try {
        f(n.next(A));
      } catch (_) {
        p(_);
      }
    }
    function m(A) {
      try {
        f(n.throw(A));
      } catch (_) {
        p(_);
      }
    }
    function f(A) {
      A.done ? s(A.value) : a(A.value).then(h, m);
    }
    f((n = n.apply(e, [])).next());
  });
}, op = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, a, s, p;
  return p = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
    return this;
  }), p;
  function h(f) {
    return function(A) {
      return m([f, A]);
    };
  }
  function m(f) {
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
    } catch (A) {
      f = [6, A], a = 0;
    } finally {
      n = s = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, Tl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, ip = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, sp = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, lp = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function cp(e, t, r) {
  var n = t.height, a = t.width, s = Tl(t, ["height", "width"]), p = Zr({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), h = window.open(e, "", Object.keys(p).map(function(f) {
    return "".concat(f, "=").concat(p[f]);
  }).join(", "));
  if (r)
    var m = window.setInterval(function() {
      try {
        (h === null || h.closed) && (window.clearInterval(m), r(h));
      } catch (f) {
        console.error(f);
      }
    }, 1e3);
  return h;
}
var up = (
  /** @class */
  function(e) {
    np(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, s = a.onShareWindowClose, p = a.windowHeight, h = p === void 0 ? 400 : p, m = a.windowPosition, f = m === void 0 ? "windowCenter" : m, A = a.windowWidth, _ = A === void 0 ? 550 : A, j = Zr({ height: h, width: _ }, f === "windowCenter" ? sp(_, h) : lp(_, h));
        cp(n, j, s);
      }, r.handleClick = function(n) {
        return ap(r, void 0, void 0, function() {
          var a, s, p, h, m, f, A, _, j, $;
          return op(this, function(E) {
            switch (E.label) {
              case 0:
                return a = this.props, s = a.beforeOnClick, p = a.disabled, h = a.networkLink, m = a.onClick, f = a.url, A = a.openShareDialogOnClick, _ = a.opts, j = h(f, _), p ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? ($ = s(), ip($) ? [4, $] : [3, 2]) : [3, 2]);
              case 1:
                E.sent(), E.label = 2;
              case 2:
                return A && this.openShareDialog(j), m && m(n, j), [
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
      var n = r.children, a = r.className, s = r.disabled, p = r.disabledStyle, h = r.forwardedRef;
      r.networkLink;
      var m = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, A = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var _ = Tl(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), j = ct("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), $ = Zr(Zr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, A), s && p);
      return mt.createElement("button", Zr({}, _, { "aria-label": _["aria-label"] || m, className: j, onClick: this.handleClick, ref: h, style: $ }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(iu)
), Ta = function() {
  return Ta = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Ta.apply(this, arguments);
};
function Ia(e, t, r, n) {
  function a(s, p) {
    var h = r(s), m = Ta({}, s), f = Object.keys(h);
    return f.forEach(function(A) {
      delete m[A];
    }), mt.createElement(up, Ta({}, n, m, { forwardedRef: p, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), Zs(a);
}
function dp(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + Na({ subject: r, body: n ? n + a + e : e });
}
Ia("email", dp, function(e) {
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
var pp = /* @__PURE__ */ function() {
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
}(), fp = (
  /** @class */
  function(e) {
    pp(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function In(e, t) {
  if (!e)
    throw new fp(t);
}
function hp(e, t) {
  var r = t.quote, n = t.hashtag;
  return In(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Na({
    u: e,
    quote: r,
    hashtag: n
  });
}
Ia("facebook", hp, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function gp(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return In(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Na({ url: e, mini: "true", title: r, summary: n, source: a });
}
Ia("linkedin", gp, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function mp(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, p = t.related, h = p === void 0 ? [] : p;
  return In(e, "twitter.url"), In(Array.isArray(s), "twitter.hashtags is not an array"), In(Array.isArray(h), "twitter.related is not an array"), "https://twitter.com/share" + Na({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: h.length > 0 ? h.join(",") : void 0
  });
}
Ia("twitter", mp, function(e) {
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
function Oo(e) {
  "@babel/helpers - typeof";
  return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oo(e);
}
var yp = (typeof window > "u" ? "undefined" : Oo(window)) === "object" && window.Element || function() {
};
function bp(e, t, r) {
  if (!(e[t] instanceof yp))
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
ur.div`
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
ur.div`
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
const xp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ei = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: a,
  disabled: s,
  element: p = "button",
  innerRef: h,
  href: m,
  onClick: f,
  ...A
}) => {
  const _ = ct("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let j = p;
  return m && p === "button" && (j = "a"), /* @__PURE__ */ H.jsx(
    Qr,
    {
      gaData: {
        ...xp,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ H.jsx(
        j,
        {
          type: j === "button" && f ? "button" : void 0,
          ...A,
          className: _,
          href: m,
          ref: h,
          onClick: f,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
ei.propTypes = {
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
  gaData: Yo,
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
ei.defaultProps = {
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
const Cl = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: s,
  fetchPriority: p = "auto",
  width: h,
  height: m,
  cardLink: f,
  title: A,
  caption: _,
  captionTitle: j,
  border: $,
  dropShadow: E
}) => {
  const S = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: p,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: xu(r) },
    ...s && { "data-testid": s },
    ...h && { width: h },
    ...m && { height: m }
  }, I = ct("uds-img", {
    borderless: !$,
    "uds-img-drop-shadow": E
  }), F = (K) => {
    const Z = K ? `${S.className} ${K}` : S.className;
    return f ? /* @__PURE__ */ H.jsxs("a", { href: f, children: [
      /* @__PURE__ */ H.jsx("img", { ...S, className: Z }),
      /* @__PURE__ */ H.jsx("span", { className: "visually-hidden", children: A })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ H.jsx("img", { ...S, className: Z })
    );
  }, z = () => /* @__PURE__ */ H.jsx("div", { className: I, children: /* @__PURE__ */ H.jsxs("figure", { className: "figure uds-figure", children: [
    F(),
    _ && /* @__PURE__ */ H.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      j && /* @__PURE__ */ H.jsx("h3", { children: j }),
      /* @__PURE__ */ H.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Yr(_)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ H.jsx(H.Fragment, { children: _ ? z() : F(I) });
};
Cl.propTypes = {
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
const vp = ur.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, wp = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Sp = (e) => !e.startsWith("https://") && !e.startsWith("http://") && wp(e) ? `mailto:${e}` : e, kp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ht = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: s,
  icon: p,
  body: h,
  eventFormat: m,
  eventLocation: f,
  eventTime: A,
  buttons: _,
  linkLabel: j,
  linkUrl: $,
  tags: E,
  showBorders: S,
  cardLink: I
}) => /* @__PURE__ */ H.jsx(
  ti,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: s,
    icon: p,
    body: h,
    eventFormat: m,
    eventLocation: f,
    eventTime: A,
    buttons: _,
    linkLabel: j,
    linkUrl: $,
    tags: E,
    showBorders: S,
    cardLink: I
  }
);
ht.propTypes = {
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
ht.defaultProps = {
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
const ti = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: s,
  icon: p,
  body: h,
  eventFormat: m,
  eventLocation: f,
  eventTime: A,
  buttons: _,
  linkLabel: j,
  linkUrl: $,
  tags: E,
  showBorders: S,
  cardLink: I
}) => {
  const F = ct("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !S
  });
  return /* @__PURE__ */ H.jsx(H.Fragment, { children: /* @__PURE__ */ H.jsxs(vp, { className: F, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ H.jsx(
      Cl,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: I,
        title: s
      }
    ),
    !n && p && /* @__PURE__ */ H.jsx(
      "i",
      {
        className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ H.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ H.jsx(
      Ca,
      {
        type: e,
        body: h,
        eventFormat: m,
        eventLocation: f,
        eventTime: A,
        title: s,
        buttons: _,
        linkLabel: j,
        linkUrl: $,
        tags: E,
        cardLink: I
      }
    ) }) : /* @__PURE__ */ H.jsx(
      Ca,
      {
        type: e,
        body: h,
        eventFormat: m,
        eventLocation: f,
        eventTime: A,
        title: s,
        buttons: _,
        linkLabel: j,
        linkUrl: $,
        tags: E,
        cardLink: I
      }
    )
  ] }) });
};
ti.propTypes = {
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
ti.defaultProps = {
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
const Ca = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: a,
  title: s,
  buttons: p,
  linkLabel: h,
  linkUrl: m,
  tags: f,
  cardLink: A
}) => /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
  !!s && /* @__PURE__ */ H.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ H.jsx("h3", { className: "card-title", children: A ? /* @__PURE__ */ H.jsx("a", { href: A, children: s }) : s }) }),
  !!t && /* @__PURE__ */ H.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: Yr(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ H.jsx(
    ri,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  p && /* @__PURE__ */ H.jsx("div", { className: "card-buttons", children: p.map((_) => /* @__PURE__ */ H.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ H.jsx(
        Er,
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
  m && h && /* @__PURE__ */ H.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ H.jsx(
    Qr,
    {
      gaData: {
        ...kp,
        section: s,
        text: h
      },
      children: /* @__PURE__ */ H.jsx("a", { href: Sp(m), children: h })
    }
  ) }),
  f && /* @__PURE__ */ H.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((_) => (
    // @ts-ignore
    /* @__PURE__ */ H.jsx(
      ei,
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
Ca.propTypes = {
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
Ca.defaultProps = {
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
const ri = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ H.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: Yr(t) })
  ] }),
  r && /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ H.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Yr(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
  t && /* @__PURE__ */ H.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: Yr(t) })
  ] }) }),
  r && /* @__PURE__ */ H.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ H.jsx("span", { children: /* @__PURE__ */ H.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Yr(r)
      }
    ) })
  ] }) })
] });
ri.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
};
ri.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
ur.div`
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
ur.section``;
Ys(null);
l.element, l.element, l.number, l.func, l.func, l.string;
const Tp = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Cp = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
});
l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
});
const Ap = l.shape({
  url: l.string,
  filters: l.string
});
l.shape({
  header: Tp,
  ctaButton: Cp,
  dataSource: Ap,
  maxItems: l.number
});
ur.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`;
l.element;
const _p = ur.img`
  width: 100%;
`;
function Ep({ image: e, title: t, contents: r }) {
  return console.log({ image: e, title: t, contents: r }), /* @__PURE__ */ H.jsx("div", { children: "TODO: to be implemented" });
}
function Op({
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
  }, h = {
    black: "text-dark",
    white: "text-white",
    undefined: ""
  };
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      className: ct("uds-hero", {
        [s[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ H.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ H.jsx(
          _p,
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
            className: ct({
              [h[t.color]]: t.color,
              [p[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ H.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ H.jsx(
          "span",
          {
            className: ct({
              [h[r.color]]: r.color,
              [p[r.highlightColor]]: r.highlightColor
            }),
            children: r.text
          }
        ) }),
        n && /* @__PURE__ */ H.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: ct("content", {
              [h[a]]: a
            }),
            children: n.map((m, f) => (
              // eslint-disable-next-line react/no-array-index-key
              /* @__PURE__ */ H.jsx("p", { children: m.text }, `content-${f}`)
            ))
          }
        )
      ]
    }
  );
}
const Fn = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => Op(e),
    "story-hero": () => Ep(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
Fn.propTypes = {
  type: l.oneOf(["heading-hero", "story-hero"]),
  image: mu,
  title: Za,
  subTitle: Za,
  contents: l.arrayOf(Za),
  contentsColor: l.string
};
const Tr = ({
  dataId: e,
  isClickeable: t,
  disabled: r,
  pageLinkIcon: n,
  selectedPage: a,
  onClick: s,
  ellipses: p,
  ariaLabel: h,
  children: m,
  ariaDisabled: f
}) => /* @__PURE__ */ H.jsx(
  "li",
  {
    className: ct("page-item", {
      disabled: r,
      active: a,
      elipses: p
    }),
    children: t ? /* @__PURE__ */ H.jsxs(
      "button",
      {
        type: "button",
        "aria-label": h,
        className: ct("page-link", {
          "page-link-icon": n
        }),
        onClick: s,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": a ? "page" : null,
        "aria-disabled": f,
        children: [
          m,
          a && /* @__PURE__ */ H.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ H.jsx("span", { className: "page-link", "data-testid": "page-link", children: m })
  }
);
Tr.propTypes = {
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
Tr.defaultProps = {
  isClickeable: !1,
  disabled: !1,
  pageLinkIcon: !1,
  selectedPage: !1,
  onClick: () => {
  }
};
const jp = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, ni = ({
  type: e,
  background: t,
  currentPage: r,
  totalPages: n,
  onChange: a
}) => {
  const [s, p] = dt(null);
  Ct(() => {
    p(r);
  }, [r]);
  const h = (A) => {
    sl({ ...jp, text: `page ${A}` });
  }, m = (A, _) => {
    const j = {
      first: 1,
      prev: s === 1 ? 1 : s - 1,
      next: s === n ? n : s + 1,
      last: n
    }[_] ?? _;
    p(j), h(j), a == null || a(A, j);
  }, f = () => {
    const A = Bi(
      s === n - 1,
      2,
      s === n ? 3 : 1
    ), _ = Bi(
      s === 1,
      3,
      s === 2 ? 2 : 1
    ), j = Xi(
      s - A,
      s,
      n
    ), $ = Xi(
      s,
      s + 1 + _,
      n
    ), E = [...j, ...$];
    return /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
      E[0] !== 1 && /* @__PURE__ */ H.jsx(
        Tr,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: s === 1,
          onClick: (S) => m(S, "first"),
          children: "1"
        }
      ),
      E[0] > 2 && /* @__PURE__ */ H.jsx(Tr, { ellipses: !0, children: "..." }),
      E.map((S) => /* @__PURE__ */ H.jsx(
        Tr,
        {
          ariaLabel: `Page ${S} of ${n}`,
          isClickeable: !0,
          selectedPage: s === S,
          onClick: (I) => m(I, S),
          children: S
        },
        S
      )),
      E[E.length - 1] < n - 1 && /* @__PURE__ */ H.jsx(Tr, { ellipses: !0, children: "..." }),
      E[E.length - 1] !== n && /* @__PURE__ */ H.jsx(
        Tr,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: s === n,
          onClick: (S) => m(S, "last"),
          children: n
        }
      )
    ] });
  };
  return /* @__PURE__ */ H.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ H.jsxs(
    "ul",
    {
      className: ct(
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
          Tr,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: s === 1,
            pageLinkIcon: !0,
            onClick: (A) => m(A, "prev"),
            ariaDisabled: s === 1,
            ariaLabel: "Previous Page"
          }
        ),
        f(),
        /* @__PURE__ */ H.jsx(
          Tr,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: s === n,
            disabled: s === n,
            pageLinkIcon: !0,
            onClick: (A) => m(A, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
ni.propTypes = {
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
ni.defaultProps = {
  currentPage: 1,
  totalPages: 10
};
l.oneOf(["small", "large"]), l.string.isRequired, l.string.isRequired, l.string;
l.oneOf(["small", "large"]).isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string, l.string;
ur.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const Rp = Zs(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: s,
    leftKeyPressed: p,
    rightKeyPressed: h,
    icon: m,
    gaData: f
  } = e, A = sn(null);
  su(
    t,
    () => ({
      focus() {
        A.current.focus();
      },
      scrollIntoView() {
        var j, $, E, S, I, F, z;
        const K = ((j = A.current) == null ? void 0 : j.offsetWidth) / 2 + A.current.offsetLeft, Z = ((E = ($ = A.current) == null ? void 0 : $.offsetParent) == null ? void 0 : E.scrollLeft) + ((I = (S = A.current) == null ? void 0 : S.offsetParent) == null ? void 0 : I.offsetWidth) / 2;
        (z = (F = A.current) == null ? void 0 : F.offsetParent) == null || z.scrollBy({
          left: K - Z
        });
      }
    }),
    []
  );
  const _ = (j) => {
    j.keyCode === 37 ? (j.preventDefault(), p()) : j.keyCode === 39 && (j.preventDefault(), h());
  };
  return /* @__PURE__ */ H.jsx(Qr, { gaData: { ...f, text: a }, children: /* @__PURE__ */ H.jsxs(
    "a",
    {
      ref: A,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      onClick: (j) => s(j, r, a),
      onKeyDown: _,
      tabIndex: n ? "" : "-1",
      children: [
        a,
        " ",
        m && /* @__PURE__ */ H.jsx("i", { className: `${m == null ? void 0 : m[0]} fa-${m == null ? void 0 : m[1]} me-1` })
      ]
    }
  ) });
});
Rp.propTypes = {
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
const Np = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, Ip = ({
  url: e = "",
  vttUrl: t,
  caption: r,
  title: n = "",
  className: a,
  controls: s = !0
}) => {
  const p = sn(null);
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      className: ct(`uds-video-container ${a}`, {
        "uds-video-with-caption": r
      }),
      children: [
        /* @__PURE__ */ H.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ H.jsx(Qr, { gaData: { ...Np, section: n }, children: /* @__PURE__ */ H.jsxs(
          "video",
          {
            ref: p,
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
}, Pp = ({ title: e = "", caption: t, url: r = "", className: n }) => /* @__PURE__ */ H.jsxs(
  "div",
  {
    className: ct(`uds-video-container ${n}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ H.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ H.jsx("iframe", { title: e, src: r }) }),
      t && /* @__PURE__ */ H.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ H.jsx("figcaption", { children: t }) })
    ]
  }
), ai = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: a = "",
    caption: s,
    className: p,
    controls: h = !0
  } = e;
  return t === "youtube" ? Pp({ url: r, title: a, caption: s, className: p }) : Ip({
    url: r,
    vttUrl: n,
    title: a,
    caption: s,
    className: p,
    controls: h
  });
};
ai.propTypes = {
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
var Lp = !1;
try {
  var hs = Object.defineProperty({}, "passive", {
    get: function() {
      Lp = !0;
    }
  });
  window.addEventListener("testPassive", null, hs), window.removeEventListener("testPassive", null, hs);
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
    buttons: ht.propTypes.buttons,
    linkLabel: l.string,
    linkUrl: l.string,
    tags: ht.propTypes.tags
  })
).isRequired, ht.propTypes.type, ht.propTypes.eventFormat, ht.propTypes.horizontal, l.string, l.string, l.bool;
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const Aa = {
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
l.string, Aa.imageItems, Aa.hasContent;
Aa.imageItems.isRequired, Aa.hasContent, l.string, l.string, l.bool;
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
var gs = Qs;
gs.createRoot, gs.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .75rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
var Al = { exports: {} }, oo, ms;
function Dp() {
  if (ms) return oo;
  ms = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return oo = e, oo;
}
var io, ys;
function Mp() {
  if (ys) return io;
  ys = 1;
  var e = Dp();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, io = function() {
    function n(p, h, m, f, A, _) {
      if (_ !== e) {
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
  }, io;
}
Al.exports = Mp()();
var ma = Al.exports;
const T = /* @__PURE__ */ Vo(ma);
var _l = { exports: {} }, Ke = {};
var bs;
function Fp() {
  if (bs) return Ke;
  bs = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var I = S.$$typeof;
      switch (I) {
        case e:
          switch (S = S.type, S) {
            case r:
            case a:
            case n:
            case m:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case p:
                case h:
                case _:
                case A:
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
  return Ke.ContextConsumer = s, Ke.ContextProvider = p, Ke.Element = e, Ke.ForwardRef = h, Ke.Fragment = r, Ke.Lazy = _, Ke.Memo = A, Ke.Portal = t, Ke.Profiler = a, Ke.StrictMode = n, Ke.Suspense = m, Ke.SuspenseList = f, Ke.isContextConsumer = function(S) {
    return E(S) === s;
  }, Ke.isContextProvider = function(S) {
    return E(S) === p;
  }, Ke.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Ke.isForwardRef = function(S) {
    return E(S) === h;
  }, Ke.isFragment = function(S) {
    return E(S) === r;
  }, Ke.isLazy = function(S) {
    return E(S) === _;
  }, Ke.isMemo = function(S) {
    return E(S) === A;
  }, Ke.isPortal = function(S) {
    return E(S) === t;
  }, Ke.isProfiler = function(S) {
    return E(S) === a;
  }, Ke.isStrictMode = function(S) {
    return E(S) === n;
  }, Ke.isSuspense = function(S) {
    return E(S) === m;
  }, Ke.isSuspenseList = function(S) {
    return E(S) === f;
  }, Ke.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === a || S === n || S === m || S === f || S === j || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === A || S.$$typeof === p || S.$$typeof === s || S.$$typeof === h || S.$$typeof === $ || S.getModuleId !== void 0);
  }, Ke.typeOf = E, Ke;
}
_l.exports = Fp();
var El = _l.exports;
function $p(e) {
  function t(q, N, U, B, x) {
    for (var G = 0, O = 0, oe = 0, te = 0, re, X, se = 0, fe = 0, ne, ue = ne = re = 0, ae = 0, ye = 0, ze = 0, ge = 0, tt = U.length, Ye = tt - 1, we, J = "", de = "", rt = "", Je = "", Me; ae < tt; ) {
      if (X = U.charCodeAt(ae), ae === Ye && O + te + oe + G !== 0 && (O !== 0 && (X = O === 47 ? 10 : 47), te = oe = G = 0, tt++, Ye++), O + te + oe + G === 0) {
        if (ae === Ye && (0 < ye && (J = J.replace(j, "")), 0 < J.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += U.charAt(ae);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (J = J.trim(), re = J.charCodeAt(0), ne = 1, ge = ++ae; ae < tt; ) {
              switch (X = U.charCodeAt(ae)) {
                case 123:
                  ne++;
                  break;
                case 125:
                  ne--;
                  break;
                case 47:
                  switch (X = U.charCodeAt(ae + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ue = ae + 1; ue < Ye; ++ue)
                          switch (U.charCodeAt(ue)) {
                            case 47:
                              if (X === 42 && U.charCodeAt(ue - 1) === 42 && ae + 2 !== ue) {
                                ae = ue + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                ae = ue + 1;
                                break e;
                              }
                          }
                        ae = ue;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; ae++ < Ye && U.charCodeAt(ae) !== X; )
                    ;
              }
              if (ne === 0) break;
              ae++;
            }
            switch (ne = U.substring(ge, ae), re === 0 && (re = (J = J.replace(_, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < ye && (J = J.replace(j, "")), X = J.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ye = N;
                    break;
                  default:
                    ye = Be;
                }
                if (ne = t(N, ye, ne, X, x + 1), ge = ne.length, 0 < _e && (ye = r(Be, J, ze), Me = h(3, ne, ye, N, ce, pe, ge, X, x, B), J = ye.join(""), Me !== void 0 && (ge = (ne = Me.trim()).length) === 0 && (X = 0, ne = "")), 0 < ge) switch (X) {
                  case 115:
                    J = J.replace(ie, p);
                  case 100:
                  case 109:
                  case 45:
                    ne = J + "{" + ne + "}";
                    break;
                  case 107:
                    J = J.replace(z, "$1 $2"), ne = J + "{" + ne + "}", ne = me === 1 || me === 2 && s("@" + ne, 3) ? "@-webkit-" + ne + "@" + ne : "@" + ne;
                    break;
                  default:
                    ne = J + ne, B === 112 && (ne = (de += ne, ""));
                }
                else ne = "";
                break;
              default:
                ne = t(N, r(N, J, ze), ne, B, x + 1);
            }
            rt += ne, ne = ze = ye = ue = re = 0, J = "", X = U.charCodeAt(++ae);
            break;
          case 125:
          case 59:
            if (J = (0 < ye ? J.replace(j, "") : J).trim(), 1 < (ge = J.length)) switch (ue === 0 && (re = J.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (ge = (J = J.replace(" ", ":")).length), 0 < _e && (Me = h(1, J, N, q, ce, pe, de.length, B, x, B)) !== void 0 && (ge = (J = Me.trim()).length) === 0 && (J = "\0\0"), re = J.charCodeAt(0), X = J.charCodeAt(1), re) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  Je += J + U.charAt(ae);
                  break;
                }
              default:
                J.charCodeAt(ge - 1) !== 58 && (de += a(J, re, X, J.charCodeAt(2)));
            }
            ze = ye = ue = re = 0, J = "", X = U.charCodeAt(++ae);
        }
      }
      switch (X) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + re === 0 && B !== 107 && 0 < J.length && (ye = 1, J += "\0"), 0 < _e * He && h(0, J, N, q, ce, pe, de.length, B, x, B), pe = 1, ce++;
          break;
        case 59:
        case 125:
          if (O + te + oe + G === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, we = U.charAt(ae), X) {
            case 9:
            case 32:
              if (te + G + O === 0) switch (se) {
                case 44:
                case 58:
                case 9:
                case 32:
                  we = "";
                  break;
                default:
                  X !== 32 && (we = " ");
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
              te + O + G === 0 && (ye = ze = 1, we = "\f" + we);
              break;
            case 108:
              if (te + O + G + Ce === 0 && 0 < ue) switch (ae - ue) {
                case 2:
                  se === 112 && U.charCodeAt(ae - 3) === 58 && (Ce = se);
                case 8:
                  fe === 111 && (Ce = fe);
              }
              break;
            case 58:
              te + O + G === 0 && (ue = ae);
              break;
            case 44:
              O + oe + te + G === 0 && (ye = 1, we += "\r");
              break;
            case 34:
            case 39:
              O === 0 && (te = te === X ? 0 : te === 0 ? X : te);
              break;
            case 91:
              te + O + oe === 0 && G++;
              break;
            case 93:
              te + O + oe === 0 && G--;
              break;
            case 41:
              te + O + G === 0 && oe--;
              break;
            case 40:
              if (te + O + G === 0) {
                if (re === 0) switch (2 * se + 3 * fe) {
                  case 533:
                    break;
                  default:
                    re = 1;
                }
                oe++;
              }
              break;
            case 64:
              O + oe + te + G + ue + ne === 0 && (ne = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + G + oe)) switch (O) {
                case 0:
                  switch (2 * X + 3 * U.charCodeAt(ae + 1)) {
                    case 235:
                      O = 47;
                      break;
                    case 220:
                      ge = ae, O = 42;
                  }
                  break;
                case 42:
                  X === 47 && se === 42 && ge + 2 !== ae && (U.charCodeAt(ge + 2) === 33 && (de += U.substring(ge, ae + 1)), we = "", O = 0);
              }
          }
          O === 0 && (J += we);
      }
      fe = se, se = X, ae++;
    }
    if (ge = de.length, 0 < ge) {
      if (ye = N, 0 < _e && (Me = h(2, de, ye, q, ce, pe, ge, B, x, B), Me !== void 0 && (de = Me).length === 0)) return Je + de + rt;
      if (de = ye.join(",") + "{" + de + "}", me * Ce !== 0) {
        switch (me !== 2 || s(de, 2) || (Ce = 0), Ce) {
          case 111:
            de = de.replace(Z, ":-moz-$1") + de;
            break;
          case 112:
            de = de.replace(K, "::-webkit-input-$1") + de.replace(K, "::-moz-$1") + de.replace(K, ":-ms-input-$1") + de;
        }
        Ce = 0;
      }
    }
    return Je + de + rt;
  }
  function r(q, N, U) {
    var B = N.trim().split(I);
    N = B;
    var x = B.length, G = q.length;
    switch (G) {
      case 0:
      case 1:
        var O = 0;
        for (q = G === 0 ? "" : q[0] + " "; O < x; ++O)
          N[O] = n(q, N[O], U).trim();
        break;
      default:
        var oe = O = 0;
        for (N = []; O < x; ++O)
          for (var te = 0; te < G; ++te)
            N[oe++] = n(q[te] + " ", B[O], U).trim();
    }
    return N;
  }
  function n(q, N, U) {
    var B = N.charCodeAt(0);
    switch (33 > B && (B = (N = N.trim()).charCodeAt(0)), B) {
      case 38:
        return N.replace(F, "$1" + q.trim());
      case 58:
        return q.trim() + N.replace(F, "$1" + q.trim());
      default:
        if (0 < 1 * U && 0 < N.indexOf("\f")) return N.replace(F, (q.charCodeAt(0) === 58 ? "" : "$1") + q.trim());
    }
    return q + N;
  }
  function a(q, N, U, B) {
    var x = q + ";", G = 2 * N + 3 * U + 4 * B;
    if (G === 944) {
      q = x.indexOf(":", 9) + 1;
      var O = x.substring(q, x.length - 1).trim();
      return O = x.substring(0, q).trim() + O + ";", me === 1 || me === 2 && s(O, 1) ? "-webkit-" + O + O : O;
    }
    if (me === 0 || me === 2 && !s(x, 1)) return x;
    switch (G) {
      case 1015:
        return x.charCodeAt(10) === 97 ? "-webkit-" + x + x : x;
      case 951:
        return x.charCodeAt(3) === 116 ? "-webkit-" + x + x : x;
      case 963:
        return x.charCodeAt(5) === 110 ? "-webkit-" + x + x : x;
      case 1009:
        if (x.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + x + x;
      case 978:
        return "-webkit-" + x + "-moz-" + x + x;
      case 1019:
      case 983:
        return "-webkit-" + x + "-moz-" + x + "-ms-" + x + x;
      case 883:
        if (x.charCodeAt(8) === 45) return "-webkit-" + x + x;
        if (0 < x.indexOf("image-set(", 11)) return x.replace(Pe, "$1-webkit-$2") + x;
        break;
      case 932:
        if (x.charCodeAt(4) === 45) switch (x.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + x.replace("-grow", "") + "-webkit-" + x + "-ms-" + x.replace("grow", "positive") + x;
          case 115:
            return "-webkit-" + x + "-ms-" + x.replace("shrink", "negative") + x;
          case 98:
            return "-webkit-" + x + "-ms-" + x.replace("basis", "preferred-size") + x;
        }
        return "-webkit-" + x + "-ms-" + x + x;
      case 964:
        return "-webkit-" + x + "-ms-flex-" + x + x;
      case 1023:
        if (x.charCodeAt(8) !== 99) break;
        return O = x.substring(x.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + O + "-webkit-" + x + "-ms-flex-pack" + O + x;
      case 1005:
        return E.test(x) ? x.replace($, ":-webkit-") + x.replace($, ":-moz-") + x : x;
      case 1e3:
        switch (O = x.substring(13).trim(), N = O.indexOf("-") + 1, O.charCodeAt(0) + O.charCodeAt(N)) {
          case 226:
            O = x.replace(C, "tb");
            break;
          case 232:
            O = x.replace(C, "tb-rl");
            break;
          case 220:
            O = x.replace(C, "lr");
            break;
          default:
            return x;
        }
        return "-webkit-" + x + "-ms-" + O + x;
      case 1017:
        if (x.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (N = (x = q).length - 10, O = (x.charCodeAt(N) === 33 ? x.substring(0, N) : x).substring(q.indexOf(":", 7) + 1).trim(), G = O.charCodeAt(0) + (O.charCodeAt(7) | 0)) {
          case 203:
            if (111 > O.charCodeAt(8)) break;
          case 115:
            x = x.replace(O, "-webkit-" + O) + ";" + x;
            break;
          case 207:
          case 102:
            x = x.replace(O, "-webkit-" + (102 < G ? "inline-" : "") + "box") + ";" + x.replace(O, "-webkit-" + O) + ";" + x.replace(O, "-ms-" + O + "box") + ";" + x;
        }
        return x + ";";
      case 938:
        if (x.charCodeAt(5) === 45) switch (x.charCodeAt(6)) {
          case 105:
            return O = x.replace("-items", ""), "-webkit-" + x + "-webkit-box-" + O + "-ms-flex-" + O + x;
          case 115:
            return "-webkit-" + x + "-ms-flex-item-" + x.replace(Se, "") + x;
          default:
            return "-webkit-" + x + "-ms-flex-line-pack" + x.replace("align-content", "").replace(Se, "") + x;
        }
        break;
      case 973:
      case 989:
        if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if ($e.test(q) === !0) return (O = q.substring(q.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(q.replace("stretch", "fill-available"), N, U, B).replace(":fill-available", ":stretch") : x.replace(O, "-webkit-" + O) + x.replace(O, "-moz-" + O.replace("fill-", "")) + x;
        break;
      case 962:
        if (x = "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x, U + B === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf("transform", 10)) return x.substring(0, x.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + x;
    }
    return x;
  }
  function s(q, N) {
    var U = q.indexOf(N === 1 ? ":" : "{"), B = q.substring(0, N !== 3 ? U : 10);
    return U = q.substring(U + 1, q.length - 1), Fe(N !== 2 ? B : B.replace(Ie, "$1"), U, N);
  }
  function p(q, N) {
    var U = a(N, N.charCodeAt(0), N.charCodeAt(1), N.charCodeAt(2));
    return U !== N + ";" ? U.replace(he, " or ($1)").substring(4) : "(" + N + ")";
  }
  function h(q, N, U, B, x, G, O, oe, te, re) {
    for (var X = 0, se = N, fe; X < _e; ++X)
      switch (fe = Ae[X].call(A, q, se, U, B, x, G, O, oe, te, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = fe;
      }
    if (se !== N) return se;
  }
  function m(q) {
    switch (q) {
      case void 0:
      case null:
        _e = Ae.length = 0;
        break;
      default:
        if (typeof q == "function") Ae[_e++] = q;
        else if (typeof q == "object") for (var N = 0, U = q.length; N < U; ++N)
          m(q[N]);
        else He = !!q | 0;
    }
    return m;
  }
  function f(q) {
    return q = q.prefix, q !== void 0 && (Fe = null, q ? typeof q != "function" ? me = 1 : (me = 2, Fe = q) : me = 0), f;
  }
  function A(q, N) {
    var U = q;
    if (33 > U.charCodeAt(0) && (U = U.trim()), We = U, U = [We], 0 < _e) {
      var B = h(-1, N, U, U, ce, pe, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (N = B);
    }
    var x = t(Be, U, N, 0, 0);
    return 0 < _e && (B = h(-2, x, U, U, ce, pe, x.length, 0, 0, 0), B !== void 0 && (x = B)), We = "", Ce = 0, pe = ce = 1, x;
  }
  var _ = /^\0+/g, j = /[\0\r\f]/g, $ = /: */g, E = /zoo|gra/, S = /([,: ])(transform)/g, I = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, z = /@(k\w+)\s*(\S*)\s*/, K = /::(place)/g, Z = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, ie = /\(\s*(.*)\s*\)/g, he = /([\s\S]*?);/g, Se = /-self|flex-/g, Ie = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $e = /stretch|:\s*\w+\-(?:conte|avail)/, Pe = /([^-])(image-set\()/, pe = 1, ce = 1, Ce = 0, me = 1, Be = [], Ae = [], _e = 0, Fe = null, He = 0, We = "";
  return A.use = m, A.set = f, e !== void 0 && f(e), A;
}
var zp = {
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
function Up(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var qp = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xs = /* @__PURE__ */ Up(
  function(e) {
    return qp.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ol = { exports: {} }, Ge = {};
var vs;
function Bp() {
  if (vs) return Ge;
  vs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, h = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, _ = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function K(C) {
    if (typeof C == "object" && C !== null) {
      var ie = C.$$typeof;
      switch (ie) {
        case t:
          switch (C = C.type, C) {
            case m:
            case f:
            case n:
            case s:
            case a:
            case _:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case h:
                case A:
                case E:
                case $:
                case p:
                  return C;
                default:
                  return ie;
              }
          }
        case r:
          return ie;
      }
    }
  }
  function Z(C) {
    return K(C) === f;
  }
  return Ge.AsyncMode = m, Ge.ConcurrentMode = f, Ge.ContextConsumer = h, Ge.ContextProvider = p, Ge.Element = t, Ge.ForwardRef = A, Ge.Fragment = n, Ge.Lazy = E, Ge.Memo = $, Ge.Portal = r, Ge.Profiler = s, Ge.StrictMode = a, Ge.Suspense = _, Ge.isAsyncMode = function(C) {
    return Z(C) || K(C) === m;
  }, Ge.isConcurrentMode = Z, Ge.isContextConsumer = function(C) {
    return K(C) === h;
  }, Ge.isContextProvider = function(C) {
    return K(C) === p;
  }, Ge.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, Ge.isForwardRef = function(C) {
    return K(C) === A;
  }, Ge.isFragment = function(C) {
    return K(C) === n;
  }, Ge.isLazy = function(C) {
    return K(C) === E;
  }, Ge.isMemo = function(C) {
    return K(C) === $;
  }, Ge.isPortal = function(C) {
    return K(C) === r;
  }, Ge.isProfiler = function(C) {
    return K(C) === s;
  }, Ge.isStrictMode = function(C) {
    return K(C) === a;
  }, Ge.isSuspense = function(C) {
    return K(C) === _;
  }, Ge.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === a || C === _ || C === j || typeof C == "object" && C !== null && (C.$$typeof === E || C.$$typeof === $ || C.$$typeof === p || C.$$typeof === h || C.$$typeof === A || C.$$typeof === I || C.$$typeof === F || C.$$typeof === z || C.$$typeof === S);
  }, Ge.typeOf = K, Ge;
}
Ol.exports = Bp();
var Hp = Ol.exports, oi = Hp, Wp = {
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
}, Vp = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Gp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, jl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ii = {};
ii[oi.ForwardRef] = Gp;
ii[oi.Memo] = jl;
function ws(e) {
  return oi.isMemo(e) ? jl : ii[e.$$typeof] || Wp;
}
var Yp = Object.defineProperty, Zp = Object.getOwnPropertyNames, Ss = Object.getOwnPropertySymbols, Kp = Object.getOwnPropertyDescriptor, Xp = Object.getPrototypeOf, ks = Object.prototype;
function Rl(e, t, r) {
  if (typeof t != "string") {
    if (ks) {
      var n = Xp(t);
      n && n !== ks && Rl(e, n, r);
    }
    var a = Zp(t);
    Ss && (a = a.concat(Ss(t)));
    for (var s = ws(e), p = ws(t), h = 0; h < a.length; ++h) {
      var m = a[h];
      if (!Vp[m] && !(r && r[m]) && !(p && p[m]) && !(s && s[m])) {
        var f = Kp(t, m);
        try {
          Yp(e, m, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Jp = Rl;
const Qp = /* @__PURE__ */ Vo(Jp);
var kt = { env: { NODE_ENV: "production" } };
function yr() {
  return (yr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Ts = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, jo = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !El.typeOf(e);
}, _a = Object.freeze([]), Dr = Object.freeze({});
function Dn(e) {
  return typeof e == "function";
}
function Cs(e) {
  return e.displayName || e.name || "Component";
}
function si(e) {
  return e && typeof e.styledComponentId == "string";
}
var un = typeof kt < "u" && kt.env !== void 0 && (kt.env.REACT_APP_SC_ATTR || kt.env.SC_ATTR) || "data-styled", li = typeof window < "u" && "HTMLElement" in window, ef = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof kt < "u" && kt.env !== void 0 && (kt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && kt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? kt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && kt.env.REACT_APP_SC_DISABLE_SPEEDY : kt.env.SC_DISABLE_SPEEDY !== void 0 && kt.env.SC_DISABLE_SPEEDY !== "" ? kt.env.SC_DISABLE_SPEEDY !== "false" && kt.env.SC_DISABLE_SPEEDY : kt.env.NODE_ENV !== "production")), tf = {};
function $n(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var rf = function() {
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
      for (var h = s; h < p; h++) this.groupSizes[h] = 0;
    }
    for (var m = this.indexOfGroup(r + 1), f = 0, A = n.length; f < A; f++) this.tag.insertRule(m, n[f]) && (this.groupSizes[r]++, m++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var p = a; p < s; p++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), p = s + a, h = s; h < p; h++) n += this.tag.getRule(h) + `/*!sc*/
`;
    return n;
  }, e;
}(), ya = /* @__PURE__ */ new Map(), Ea = /* @__PURE__ */ new Map(), Pn = 1, la = function(e) {
  if (ya.has(e)) return ya.get(e);
  for (; Ea.has(Pn); ) Pn++;
  var t = Pn++;
  return ya.set(e, t), Ea.set(t, e), t;
}, nf = function(e) {
  return Ea.get(e);
}, af = function(e, t) {
  t >= Pn && (Pn = t + 1), ya.set(e, t), Ea.set(t, e);
}, of = "style[" + un + '][data-styled-version="5.3.11"]', sf = new RegExp("^" + un + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), lf = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, p = a.length; s < p; s++) (n = a[s]) && e.registerName(t, n);
}, cf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var p = r[a].trim();
    if (p) {
      var h = p.match(sf);
      if (h) {
        var m = 0 | parseInt(h[1], 10), f = h[2];
        m !== 0 && (af(f, m), lf(e, f, h[3]), e.getTag().insertRules(m, n)), n.length = 0;
      } else n.push(p);
    }
  }
}, uf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Nl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(h) {
    for (var m = h.childNodes, f = m.length; f >= 0; f--) {
      var A = m[f];
      if (A && A.nodeType === 1 && A.hasAttribute(un)) return A;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(un, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var p = uf();
  return p && n.setAttribute("nonce", p), r.insertBefore(n, s), n;
}, df = function() {
  function e(r) {
    var n = this.element = Nl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, p = 0, h = s.length; p < h; p++) {
        var m = s[p];
        if (m.ownerNode === a) return m;
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
}(), pf = function() {
  function e(r) {
    var n = this.element = Nl(r);
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
}(), ff = function() {
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
}(), As = li, hf = { isServer: !li, useCSSOMInjection: !ef }, Oa = function() {
  function e(r, n, a) {
    r === void 0 && (r = Dr), n === void 0 && (n = {}), this.options = yr({}, hf, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && li && As && (As = !1, function(s) {
      for (var p = document.querySelectorAll(of), h = 0, m = p.length; h < m; h++) {
        var f = p[h];
        f && f.getAttribute(un) !== "active" && (cf(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return la(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(yr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, p = n.target, r = a ? new ff(p) : s ? new df(p) : new pf(p), new rf(r)));
    var r, n, a, s, p;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (la(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(la(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(la(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", p = 0; p < a; p++) {
        var h = nf(p);
        if (h !== void 0) {
          var m = r.names.get(h), f = n.getGroup(p);
          if (m && f && m.size) {
            var A = un + ".g" + p + '[id="' + h + '"]', _ = "";
            m !== void 0 && m.forEach(function(j) {
              j.length > 0 && (_ += j + ",");
            }), s += "" + f + A + '{content:"' + _ + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), gf = /(a)(d)/gi, _s = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ro(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = _s(t % 52) + r;
  return (_s(t % 52) + r).replace(gf, "$1-$2");
}
var an = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Il = function(e) {
  return an(5381, e);
};
function Pl(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Dn(r) && !si(r)) return !1;
  }
  return !0;
}
var mf = Il("5.3.11"), yf = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Pl(t), this.componentId = r, this.baseHash = an(mf, r), this.baseStyle = n, Oa.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var p = Jr(this.rules, t, r, n).join(""), h = Ro(an(this.baseHash, p) >>> 0);
      if (!r.hasNameForId(a, h)) {
        var m = n(p, "." + h, void 0, a);
        r.insertRules(a, h, m);
      }
      s.push(h), this.staticRulesId = h;
    }
    else {
      for (var f = this.rules.length, A = an(this.baseHash, n.hash), _ = "", j = 0; j < f; j++) {
        var $ = this.rules[j];
        if (typeof $ == "string") _ += $;
        else if ($) {
          var E = Jr($, t, r, n), S = Array.isArray(E) ? E.join("") : E;
          A = an(A, S + j), _ += S;
        }
      }
      if (_) {
        var I = Ro(A >>> 0);
        if (!r.hasNameForId(a, I)) {
          var F = n(_, "." + I, void 0, a);
          r.insertRules(a, I, F);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), bf = /^\s*\/\/.*$/gm, xf = [":", "[", ".", "#"];
function vf(e) {
  var t, r, n, a, s = Dr, p = s.options, h = p === void 0 ? Dr : p, m = s.plugins, f = m === void 0 ? _a : m, A = new $p(h), _ = [], j = /* @__PURE__ */ function(S) {
    function I(F) {
      if (F) try {
        S(F + "}");
      } catch {
      }
    }
    return function(F, z, K, Z, C, ie, he, Se, Ie, $e) {
      switch (F) {
        case 1:
          if (Ie === 0 && z.charCodeAt(0) === 64) return S(z + ";"), "";
          break;
        case 2:
          if (Se === 0) return z + "/*|*/";
          break;
        case 3:
          switch (Se) {
            case 102:
            case 112:
              return S(K[0] + z), "";
            default:
              return z + ($e === 0 ? "/*|*/" : "");
          }
        case -2:
          z.split("/*|*/}").forEach(I);
      }
    };
  }(function(S) {
    _.push(S);
  }), $ = function(S, I, F) {
    return I === 0 && xf.indexOf(F[r.length]) !== -1 || F.match(a) ? S : "." + t;
  };
  function E(S, I, F, z) {
    z === void 0 && (z = "&");
    var K = S.replace(bf, ""), Z = I && F ? F + " " + I + " { " + K + " }" : K;
    return t = z, r = I, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), A(F || !I ? "" : I, Z);
  }
  return A.use([].concat(f, [function(S, I, F) {
    S === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, $));
  }, j, function(S) {
    if (S === -2) {
      var I = _;
      return _ = [], I;
    }
  }])), E.hash = f.length ? f.reduce(function(S, I) {
    return I.name || $n(15), an(S, I.name);
  }, 5381).toString() : "", E;
}
var Ll = mt.createContext();
Ll.Consumer;
var Dl = mt.createContext(), wf = (Dl.Consumer, new Oa()), No = vf();
function Ml() {
  return Zt(Ll) || wf;
}
function Fl() {
  return Zt(Dl) || No;
}
var Sf = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = No);
      var p = n.name + s.hash;
      a.hasNameForId(n.id, p) || a.insertRules(n.id, p, s(n.rules, p, "@keyframes"));
    }, this.toString = function() {
      return $n(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = No), this.name + t.hash;
  }, e;
}(), kf = /([A-Z])/, Tf = /([A-Z])/g, Cf = /^ms-/, Af = function(e) {
  return "-" + e.toLowerCase();
};
function Es(e) {
  return kf.test(e) ? e.replace(Tf, Af).replace(Cf, "-ms-") : e;
}
var Os = function(e) {
  return e == null || e === !1 || e === "";
};
function Jr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], p = 0, h = e.length; p < h; p += 1) (a = Jr(e[p], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (Os(e)) return "";
  if (si(e)) return "." + e.styledComponentId;
  if (Dn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var m = e(t);
    return Jr(m, t, r, n);
  }
  var f;
  return e instanceof Sf ? r ? (e.inject(r, n), e.getName(n)) : e : jo(e) ? function A(_, j) {
    var $, E, S = [];
    for (var I in _) _.hasOwnProperty(I) && !Os(_[I]) && (Array.isArray(_[I]) && _[I].isCss || Dn(_[I]) ? S.push(Es(I) + ":", _[I], ";") : jo(_[I]) ? S.push.apply(S, A(_[I], I)) : S.push(Es(I) + ": " + ($ = I, (E = _[I]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || $ in zp || $.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return j ? [j + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var js = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function ci(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Dn(e) || jo(e) ? js(Jr(Ts(_a, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : js(Jr(Ts(e, r)));
}
var $l = function(e, t, r) {
  return r === void 0 && (r = Dr), e.theme !== r.theme && e.theme || t || r.theme;
}, _f = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ef = /(^-|-$)/g;
function so(e) {
  return e.replace(_f, "-").replace(Ef, "");
}
var zl = function(e) {
  return Ro(Il(e) >>> 0);
};
function ca(e) {
  return typeof e == "string" && kt.env.NODE_ENV === "production";
}
var Io = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Of = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function jf(e, t, r) {
  var n = e[r];
  Io(t) && Io(n) ? Ul(n, t) : e[r] = t;
}
function Ul(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var p = s[a];
    if (Io(p)) for (var h in p) Of(h) && jf(e, p[h], h);
  }
  return e;
}
var ui = mt.createContext();
ui.Consumer;
var lo = {};
function ql(e, t, r) {
  var n = si(e), a = !ca(e), s = t.attrs, p = s === void 0 ? _a : s, h = t.componentId, m = h === void 0 ? function(z, K) {
    var Z = typeof z != "string" ? "sc" : so(z);
    lo[Z] = (lo[Z] || 0) + 1;
    var C = Z + "-" + zl("5.3.11" + Z + lo[Z]);
    return K ? K + "-" + C : C;
  }(t.displayName, t.parentComponentId) : h, f = t.displayName, A = f === void 0 ? function(z) {
    return ca(z) ? "styled." + z : "Styled(" + Cs(z) + ")";
  }(e) : f, _ = t.displayName && t.componentId ? so(t.displayName) + "-" + t.componentId : t.componentId || m, j = n && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(z, K, Z) {
    return e.shouldForwardProp(z, K, Z) && t.shouldForwardProp(z, K, Z);
  } : e.shouldForwardProp);
  var E, S = new yf(r, _, n ? e.componentStyle : void 0), I = S.isStatic && p.length === 0, F = function(z, K) {
    return function(Z, C, ie, he) {
      var Se = Z.attrs, Ie = Z.componentStyle, $e = Z.defaultProps, Pe = Z.foldedComponentIds, pe = Z.shouldForwardProp, ce = Z.styledComponentId, Ce = Z.target, me = function(B, x, G) {
        B === void 0 && (B = Dr);
        var O = yr({}, x, { theme: B }), oe = {};
        return G.forEach(function(te) {
          var re, X, se, fe = te;
          for (re in Dn(fe) && (fe = fe(O)), fe) O[re] = oe[re] = re === "className" ? (X = oe[re], se = fe[re], X && se ? X + " " + se : X || se) : fe[re];
        }), [O, oe];
      }($l(C, Zt(ui), $e) || Dr, C, Se), Be = me[0], Ae = me[1], _e = function(B, x, G, O) {
        var oe = Ml(), te = Fl(), re = x ? B.generateAndInjectStyles(Dr, oe, te) : B.generateAndInjectStyles(G, oe, te);
        return re;
      }(Ie, he, Be), Fe = ie, He = Ae.$as || C.$as || Ae.as || C.as || Ce, We = ca(He), q = Ae !== C ? yr({}, C, {}, Ae) : C, N = {};
      for (var U in q) U[0] !== "$" && U !== "as" && (U === "forwardedAs" ? N.as = q[U] : (pe ? pe(U, xs, He) : !We || xs(U)) && (N[U] = q[U]));
      return C.style && Ae.style !== C.style && (N.style = yr({}, C.style, {}, Ae.style)), N.className = Array.prototype.concat(Pe, ce, _e !== ce ? _e : null, C.className, Ae.className).filter(Boolean).join(" "), N.ref = Fe, Ks(He, N);
    }(E, z, K, I);
  };
  return F.displayName = A, (E = mt.forwardRef(F)).attrs = j, E.componentStyle = S, E.displayName = A, E.shouldForwardProp = $, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : _a, E.styledComponentId = _, E.target = n ? e.target : e, E.withComponent = function(z) {
    var K = t.componentId, Z = function(ie, he) {
      if (ie == null) return {};
      var Se, Ie, $e = {}, Pe = Object.keys(ie);
      for (Ie = 0; Ie < Pe.length; Ie++) Se = Pe[Ie], he.indexOf(Se) >= 0 || ($e[Se] = ie[Se]);
      return $e;
    }(t, ["componentId"]), C = K && K + "-" + (ca(z) ? z : so(Cs(z)));
    return ql(z, yr({}, Z, { attrs: j, componentId: C }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(z) {
    this._foldedDefaultProps = n ? Ul({}, e.defaultProps, z) : z;
  } }), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), a && Qp(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var Xe = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Dr), !El.isValidElementType(n)) return $n(1, String(n));
    var s = function() {
      return r(n, a, ci.apply(void 0, arguments));
    };
    return s.withConfig = function(p) {
      return t(r, n, yr({}, a, {}, p));
    }, s.attrs = function(p) {
      return t(r, n, yr({}, a, { attrs: Array.prototype.concat(a.attrs, p).filter(Boolean) }));
    }, s;
  }(ql, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Xe[e] = Xe(e);
});
var Rf = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = Pl(r), Oa.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(r, n, a, s) {
    var p = s(Jr(this.rules, n, a, s).join(""), ""), h = this.componentId + r;
    a.insertRules(h, h, p);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, a, s) {
    r > 2 && Oa.registerId(this.componentId + r), this.removeStyles(r, a), this.createStyles(r, n, a, s);
  }, e;
}();
function Pa(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  var a = ci.apply(void 0, [e].concat(r)), s = "sc-global-" + zl(JSON.stringify(a)), p = new Rf(a, s);
  function h(f) {
    var A = Ml(), _ = Fl(), j = Zt(ui), $ = sn(A.allocateGSInstance(s)).current;
    return A.server && m($, f, A, j, _), cu(function() {
      if (!A.server) return m($, f, A, j, _), function() {
        return p.removeStyles($, A);
      };
    }, [$, f, A, j, _]), null;
  }
  function m(f, A, _, j, $) {
    if (p.isStatic) p.renderStyles(f, tf, _, $);
    else {
      var E = yr({}, A, { theme: $l(A, j, h.defaultProps) });
      p.renderStyles(f, E, _, $);
    }
  }
  return mt.memo(h);
}
const Bl = () => {
  const [e, t] = dt(), [r, n] = dt(!1), [a, s] = dt(!1), [p, h] = dt("");
  return Ct(() => {
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
  }, [p]), [{ data: e, loading: r, error: a }, h];
}, dn = (e) => (e || []).join(" ");
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function Po(e, t) {
  return Po = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, Po(e, t);
}
function Nf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ba(e, t, r) {
  return Nf() ? ba = Reflect.construct : ba = function(a, s, p) {
    var h = [null];
    h.push.apply(h, s);
    var m = Function.bind.apply(a, h), f = new m();
    return p && Po(f, p.prototype), f;
  }, ba.apply(null, arguments);
}
function cr(e) {
  return If(e) || Pf(e) || Lf(e) || Df();
}
function If(e) {
  if (Array.isArray(e)) return Lo(e);
}
function Pf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Lf(e, t) {
  if (e) {
    if (typeof e == "string") return Lo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Lo(e, t);
  }
}
function Lo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Df() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Mf = Object.hasOwnProperty, Rs = Object.setPrototypeOf, Ff = Object.isFrozen, $f = Object.getPrototypeOf, zf = Object.getOwnPropertyDescriptor, _t = Object.freeze, Vt = Object.seal, Uf = Object.create, Hl = typeof Reflect < "u" && Reflect, ja = Hl.apply, Do = Hl.construct;
ja || (ja = function(t, r, n) {
  return t.apply(r, n);
});
_t || (_t = function(t) {
  return t;
});
Vt || (Vt = function(t) {
  return t;
});
Do || (Do = function(t, r) {
  return ba(t, cr(r));
});
var qf = Gt(Array.prototype.forEach), Ns = Gt(Array.prototype.pop), On = Gt(Array.prototype.push), xa = Gt(String.prototype.toLowerCase), co = Gt(String.prototype.toString), Is = Gt(String.prototype.match), sr = Gt(String.prototype.replace), Bf = Gt(String.prototype.indexOf), Hf = Gt(String.prototype.trim), wt = Gt(RegExp.prototype.test), uo = Wf(TypeError);
function Gt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return ja(e, t, n);
  };
}
function Wf(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Do(e, r);
  };
}
function Ne(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : xa, Rs && Rs(e, null);
  for (var a = t.length; a--; ) {
    var s = t[a];
    if (typeof s == "string") {
      var p = r(s);
      p !== s && (Ff(t) || (t[a] = p), s = p);
    }
    e[s] = !0;
  }
  return e;
}
function Wr(e) {
  var t = Uf(null), r;
  for (r in e)
    ja(Mf, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function ua(e, t) {
  for (; e !== null; ) {
    var r = zf(e, t);
    if (r) {
      if (r.get)
        return Gt(r.get);
      if (typeof r.value == "function")
        return Gt(r.value);
    }
    e = $f(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var Ps = _t(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), po = _t(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), fo = _t(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Vf = _t(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ho = _t(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Gf = _t(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ls = _t(["#text"]), Ds = _t(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), go = _t(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ms = _t(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), da = _t(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Yf = Vt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Zf = Vt(/<%[\w\W]*|[\w\W]*%>/gm), Kf = Vt(/\${[\w\W]*}/gm), Xf = Vt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Jf = Vt(/^aria-[\-\w]+$/), Qf = Vt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), eh = Vt(/^(?:\w+script|data):/i), th = Vt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), rh = Vt(/^html$/i), nh = Vt(/^[a-z][.\w]*(-[.\w]+)+$/i), ah = function() {
  return typeof window > "u" ? null : window;
}, oh = function(t, r) {
  if (Pr(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var n = null, a = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(a) && (n = r.currentScript.getAttribute(a));
  var s = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(s, {
      createHTML: function(h) {
        return h;
      },
      createScriptURL: function(h) {
        return h;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function Wl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ah(), t = function(v) {
    return Wl(v);
  };
  if (t.version = "2.5.8", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, s = e.HTMLTemplateElement, p = e.Node, h = e.Element, m = e.NodeFilter, f = e.NamedNodeMap, A = f === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : f, _ = e.HTMLFormElement, j = e.DOMParser, $ = e.trustedTypes, E = h.prototype, S = ua(E, "cloneNode"), I = ua(E, "nextSibling"), F = ua(E, "childNodes"), z = ua(E, "parentNode");
  if (typeof s == "function") {
    var K = n.createElement("template");
    K.content && K.content.ownerDocument && (n = K.content.ownerDocument);
  }
  var Z = oh($, r), C = Z ? Z.createHTML("") : "", ie = n, he = ie.implementation, Se = ie.createNodeIterator, Ie = ie.createDocumentFragment, $e = ie.getElementsByTagName, Pe = r.importNode, pe = {};
  try {
    pe = Wr(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var ce = {};
  t.isSupported = typeof z == "function" && he && he.createHTMLDocument !== void 0 && pe !== 9;
  var Ce = Yf, me = Zf, Be = Kf, Ae = Xf, _e = Jf, Fe = eh, He = th, We = nh, q = Qf, N = null, U = Ne({}, [].concat(cr(Ps), cr(po), cr(fo), cr(ho), cr(Ls))), B = null, x = Ne({}, [].concat(cr(Ds), cr(go), cr(Ms), cr(da))), G = Object.seal(Object.create(null, {
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
  })), O = null, oe = null, te = !0, re = !0, X = !1, se = !0, fe = !1, ne = !0, ue = !1, ae = !1, ye = !1, ze = !1, ge = !1, tt = !1, Ye = !0, we = !1, J = "user-content-", de = !0, rt = !1, Je = {}, Me = null, dr = Ne({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), pr = null, br = Ne({}, ["audio", "video", "img", "source", "image", "track"]), Rt = null, $t = Ne({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Nt = "http://www.w3.org/1998/Math/MathML", It = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml", yt = it, Kt = !1, ft = null, xr = Ne({}, [Nt, It, it], co), lt, Ue = ["application/xhtml+xml", "text/html"], Xt = "text/html", ke, ut = null, Et = n.createElement("form"), zt = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, bt = function(v) {
    ut && ut === v || ((!v || Pr(v) !== "object") && (v = {}), v = Wr(v), lt = // eslint-disable-next-line unicorn/prefer-includes
    Ue.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? lt = Xt : lt = v.PARSER_MEDIA_TYPE, ke = lt === "application/xhtml+xml" ? co : xa, N = "ALLOWED_TAGS" in v ? Ne({}, v.ALLOWED_TAGS, ke) : U, B = "ALLOWED_ATTR" in v ? Ne({}, v.ALLOWED_ATTR, ke) : x, ft = "ALLOWED_NAMESPACES" in v ? Ne({}, v.ALLOWED_NAMESPACES, co) : xr, Rt = "ADD_URI_SAFE_ATTR" in v ? Ne(
      Wr($t),
      // eslint-disable-line indent
      v.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      ke
      // eslint-disable-line indent
    ) : $t, pr = "ADD_DATA_URI_TAGS" in v ? Ne(
      Wr(br),
      // eslint-disable-line indent
      v.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      ke
      // eslint-disable-line indent
    ) : br, Me = "FORBID_CONTENTS" in v ? Ne({}, v.FORBID_CONTENTS, ke) : dr, O = "FORBID_TAGS" in v ? Ne({}, v.FORBID_TAGS, ke) : {}, oe = "FORBID_ATTR" in v ? Ne({}, v.FORBID_ATTR, ke) : {}, Je = "USE_PROFILES" in v ? v.USE_PROFILES : !1, te = v.ALLOW_ARIA_ATTR !== !1, re = v.ALLOW_DATA_ATTR !== !1, X = v.ALLOW_UNKNOWN_PROTOCOLS || !1, se = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, fe = v.SAFE_FOR_TEMPLATES || !1, ne = v.SAFE_FOR_XML !== !1, ue = v.WHOLE_DOCUMENT || !1, ze = v.RETURN_DOM || !1, ge = v.RETURN_DOM_FRAGMENT || !1, tt = v.RETURN_TRUSTED_TYPE || !1, ye = v.FORCE_BODY || !1, Ye = v.SANITIZE_DOM !== !1, we = v.SANITIZE_NAMED_PROPS || !1, de = v.KEEP_CONTENT !== !1, rt = v.IN_PLACE || !1, q = v.ALLOWED_URI_REGEXP || q, yt = v.NAMESPACE || it, G = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && zt(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (G.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && zt(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (G.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), fe && (re = !1), ge && (ze = !0), Je && (N = Ne({}, cr(Ls)), B = [], Je.html === !0 && (Ne(N, Ps), Ne(B, Ds)), Je.svg === !0 && (Ne(N, po), Ne(B, go), Ne(B, da)), Je.svgFilters === !0 && (Ne(N, fo), Ne(B, go), Ne(B, da)), Je.mathMl === !0 && (Ne(N, ho), Ne(B, Ms), Ne(B, da))), v.ADD_TAGS && (N === U && (N = Wr(N)), Ne(N, v.ADD_TAGS, ke)), v.ADD_ATTR && (B === x && (B = Wr(B)), Ne(B, v.ADD_ATTR, ke)), v.ADD_URI_SAFE_ATTR && Ne(Rt, v.ADD_URI_SAFE_ATTR, ke), v.FORBID_CONTENTS && (Me === dr && (Me = Wr(Me)), Ne(Me, v.FORBID_CONTENTS, ke)), de && (N["#text"] = !0), ue && Ne(N, ["html", "head", "body"]), N.table && (Ne(N, ["tbody"]), delete O.tbody), _t && _t(v), ut = v);
  }, fr = Ne({}, ["mi", "mo", "mn", "ms", "mtext"]), Jt = Ne({}, ["annotation-xml"]), vr = Ne({}, ["title", "style", "font", "a", "script"]), Ot = Ne({}, po);
  Ne(Ot, fo), Ne(Ot, Vf);
  var Ut = Ne({}, ho);
  Ne(Ut, Gf);
  var jr = function(v) {
    var R = z(v);
    (!R || !R.tagName) && (R = {
      namespaceURI: yt,
      tagName: "template"
    });
    var Y = xa(v.tagName), le = xa(R.tagName);
    return ft[v.namespaceURI] ? v.namespaceURI === It ? R.namespaceURI === it ? Y === "svg" : R.namespaceURI === Nt ? Y === "svg" && (le === "annotation-xml" || fr[le]) : !!Ot[Y] : v.namespaceURI === Nt ? R.namespaceURI === it ? Y === "math" : R.namespaceURI === It ? Y === "math" && Jt[le] : !!Ut[Y] : v.namespaceURI === it ? R.namespaceURI === It && !Jt[le] || R.namespaceURI === Nt && !fr[le] ? !1 : !Ut[Y] && (vr[Y] || !Ot[Y]) : !!(lt === "application/xhtml+xml" && ft[v.namespaceURI]) : !1;
  }, nt = function(v) {
    On(t.removed, {
      element: v
    });
    try {
      v.parentNode.removeChild(v);
    } catch {
      try {
        v.outerHTML = C;
      } catch {
        v.remove();
      }
    }
  }, Pt = function(v, R) {
    try {
      On(t.removed, {
        attribute: R.getAttributeNode(v),
        from: R
      });
    } catch {
      On(t.removed, {
        attribute: null,
        from: R
      });
    }
    if (R.removeAttribute(v), v === "is" && !B[v])
      if (ze || ge)
        try {
          nt(R);
        } catch {
        }
      else
        try {
          R.setAttribute(v, "");
        } catch {
        }
  }, qt = function(v) {
    var R, Y;
    if (ye)
      v = "<remove></remove>" + v;
    else {
      var le = Is(v, /^[\r\n\t ]+/);
      Y = le && le[0];
    }
    lt === "application/xhtml+xml" && yt === it && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    var Te = Z ? Z.createHTML(v) : v;
    if (yt === it)
      try {
        R = new j().parseFromString(Te, lt);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = he.createDocument(yt, "template", null);
      try {
        R.documentElement.innerHTML = Kt ? C : Te;
      } catch {
      }
    }
    var Oe = R.body || R.documentElement;
    return v && Y && Oe.insertBefore(n.createTextNode(Y), Oe.childNodes[0] || null), yt === it ? $e.call(R, ue ? "html" : "body")[0] : ue ? R.documentElement : Oe;
  }, hr = function(v) {
    return Se.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, jt = function(v) {
    return v instanceof _ && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof A) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
  }, xt = function(v) {
    return Pr(p) === "object" ? v instanceof p : v && Pr(v) === "object" && typeof v.nodeType == "number" && typeof v.nodeName == "string";
  }, st = function(v, R, Y) {
    ce[v] && qf(ce[v], function(le) {
      le.call(t, R, Y, ut);
    });
  }, Lt = function(v) {
    var R;
    if (st("beforeSanitizeElements", v, null), jt(v) || wt(/[\u0080-\uFFFF]/, v.nodeName))
      return nt(v), !0;
    var Y = ke(v.nodeName);
    if (st("uponSanitizeElement", v, {
      tagName: Y,
      allowedTags: N
    }), v.hasChildNodes() && !xt(v.firstElementChild) && (!xt(v.content) || !xt(v.content.firstElementChild)) && wt(/<[/\w]/g, v.innerHTML) && wt(/<[/\w]/g, v.textContent) || Y === "select" && wt(/<template/i, v.innerHTML) || v.nodeType === 7 || ne && v.nodeType === 8 && wt(/<[/\w]/g, v.data))
      return nt(v), !0;
    if (!N[Y] || O[Y]) {
      if (!O[Y] && Qt(Y) && (G.tagNameCheck instanceof RegExp && wt(G.tagNameCheck, Y) || G.tagNameCheck instanceof Function && G.tagNameCheck(Y)))
        return !1;
      if (de && !Me[Y]) {
        var le = z(v) || v.parentNode, Te = F(v) || v.childNodes;
        if (Te && le)
          for (var Oe = Te.length, qe = Oe - 1; qe >= 0; --qe) {
            var at = S(Te[qe], !0);
            at.__removalCount = (v.__removalCount || 0) + 1, le.insertBefore(at, I(v));
          }
      }
      return nt(v), !0;
    }
    return v instanceof h && !jr(v) || (Y === "noscript" || Y === "noembed" || Y === "noframes") && wt(/<\/no(script|embed|frames)/i, v.innerHTML) ? (nt(v), !0) : (fe && v.nodeType === 3 && (R = v.textContent, R = sr(R, Ce, " "), R = sr(R, me, " "), R = sr(R, Be, " "), v.textContent !== R && (On(t.removed, {
      element: v.cloneNode()
    }), v.textContent = R)), st("afterSanitizeElements", v, null), !1);
  }, wr = function(v, R, Y) {
    if (Ye && (R === "id" || R === "name") && (Y in n || Y in Et))
      return !1;
    if (!(re && !oe[R] && wt(Ae, R))) {
      if (!(te && wt(_e, R))) {
        if (!B[R] || oe[R]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Qt(v) && (G.tagNameCheck instanceof RegExp && wt(G.tagNameCheck, v) || G.tagNameCheck instanceof Function && G.tagNameCheck(v)) && (G.attributeNameCheck instanceof RegExp && wt(G.attributeNameCheck, R) || G.attributeNameCheck instanceof Function && G.attributeNameCheck(R)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            R === "is" && G.allowCustomizedBuiltInElements && (G.tagNameCheck instanceof RegExp && wt(G.tagNameCheck, Y) || G.tagNameCheck instanceof Function && G.tagNameCheck(Y)))
          ) return !1;
        } else if (!Rt[R]) {
          if (!wt(q, sr(Y, He, ""))) {
            if (!((R === "src" || R === "xlink:href" || R === "href") && v !== "script" && Bf(Y, "data:") === 0 && pr[v])) {
              if (!(X && !wt(Fe, sr(Y, He, "")))) {
                if (Y)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Qt = function(v) {
    return v !== "annotation-xml" && Is(v, We);
  }, Bt = function(v) {
    var R, Y, le, Te;
    st("beforeSanitizeAttributes", v, null);
    var Oe = v.attributes;
    if (!(!Oe || jt(v))) {
      var qe = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: B
      };
      for (Te = Oe.length; Te--; ) {
        R = Oe[Te];
        var at = R, Le = at.name, Tt = at.namespaceURI;
        if (Y = Le === "value" ? R.value : Hf(R.value), le = ke(Le), qe.attrName = le, qe.attrValue = Y, qe.keepAttr = !0, qe.forceKeepAttr = void 0, st("uponSanitizeAttribute", v, qe), Y = qe.attrValue, !qe.forceKeepAttr && (Pt(Le, v), !!qe.keepAttr)) {
          if (!se && wt(/\/>/i, Y)) {
            Pt(Le, v);
            continue;
          }
          fe && (Y = sr(Y, Ce, " "), Y = sr(Y, me, " "), Y = sr(Y, Be, " "));
          var tr = ke(v.nodeName);
          if (wr(tr, le, Y)) {
            if (we && (le === "id" || le === "name") && (Pt(Le, v), Y = J + Y), ne && wt(/((--!?|])>)|<\/(style|title)/i, Y)) {
              Pt(Le, v);
              continue;
            }
            if (Z && Pr($) === "object" && typeof $.getAttributeType == "function" && !Tt)
              switch ($.getAttributeType(tr, le)) {
                case "TrustedHTML": {
                  Y = Z.createHTML(Y);
                  break;
                }
                case "TrustedScriptURL": {
                  Y = Z.createScriptURL(Y);
                  break;
                }
              }
            try {
              Tt ? v.setAttributeNS(Tt, Le, Y) : v.setAttribute(Le, Y), jt(v) ? nt(v) : Ns(t.removed);
            } catch {
            }
          }
        }
      }
      st("afterSanitizeAttributes", v, null);
    }
  }, er = function b(v) {
    var R, Y = hr(v);
    for (st("beforeSanitizeShadowDOM", v, null); R = Y.nextNode(); )
      st("uponSanitizeShadowNode", R, null), Lt(R), Bt(R), R.content instanceof a && b(R.content);
    st("afterSanitizeShadowDOM", v, null);
  };
  return t.sanitize = function(b) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R, Y, le, Te, Oe;
    if (Kt = !b, Kt && (b = "<!-->"), typeof b != "string" && !xt(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw uo("dirty is not a string, aborting");
      } else
        throw uo("toString is not a function");
    if (!t.isSupported) {
      if (Pr(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof b == "string")
          return e.toStaticHTML(b);
        if (xt(b))
          return e.toStaticHTML(b.outerHTML);
      }
      return b;
    }
    if (ae || bt(v), t.removed = [], typeof b == "string" && (rt = !1), rt) {
      if (b.nodeName) {
        var qe = ke(b.nodeName);
        if (!N[qe] || O[qe])
          throw uo("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof p)
      R = qt("<!---->"), Y = R.ownerDocument.importNode(b, !0), Y.nodeType === 1 && Y.nodeName === "BODY" || Y.nodeName === "HTML" ? R = Y : R.appendChild(Y);
    else {
      if (!ze && !fe && !ue && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return Z && tt ? Z.createHTML(b) : b;
      if (R = qt(b), !R)
        return ze ? null : tt ? C : "";
    }
    R && ye && nt(R.firstChild);
    for (var at = hr(rt ? b : R); le = at.nextNode(); )
      le.nodeType === 3 && le === Te || (Lt(le), Bt(le), le.content instanceof a && er(le.content), Te = le);
    if (Te = null, rt)
      return b;
    if (ze) {
      if (ge)
        for (Oe = Ie.call(R.ownerDocument); R.firstChild; )
          Oe.appendChild(R.firstChild);
      else
        Oe = R;
      return (B.shadowroot || B.shadowrootmod) && (Oe = Pe.call(r, Oe, !0)), Oe;
    }
    var Le = ue ? R.outerHTML : R.innerHTML;
    return ue && N["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && wt(rh, R.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + Le), fe && (Le = sr(Le, Ce, " "), Le = sr(Le, me, " "), Le = sr(Le, Be, " ")), Z && tt ? Z.createHTML(Le) : Le;
  }, t.setConfig = function(b) {
    bt(b), ae = !0;
  }, t.clearConfig = function() {
    ut = null, ae = !1;
  }, t.isValidAttribute = function(b, v, R) {
    ut || bt({});
    var Y = ke(b), le = ke(v);
    return wr(Y, le, R);
  }, t.addHook = function(b, v) {
    typeof v == "function" && (ce[b] = ce[b] || [], On(ce[b], v));
  }, t.removeHook = function(b) {
    if (ce[b])
      return Ns(ce[b]);
  }, t.removeHooks = function(b) {
    ce[b] && (ce[b] = []);
  }, t.removeAllHooks = function() {
    ce = {};
  }, t;
}
var ih = Wl();
const Yt = (e) => ({ __html: ih.sanitize(e) });
function* en(e = "id-", t = 0) {
  let r = t;
  for (; ; )
    r += 1, yield e + r;
}
function sh() {
  const e = (
    // @ts-ignore
    (document.currentScript && document.currentScript.src || "").match(/(.*\/)/)
  );
  return e && e.length > 0 ? e[0].substr(0, e[0].length - 1) : "/";
}
T.shape({
  event: T.string,
  action: T.string,
  name: T.string,
  region: T.string,
  section: T.string,
  component: T.string,
  type: T.string,
  text: T.string
});
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
const zn = ({ href: e = null }) => (
  // @ts-ignore
  /* @__PURE__ */ d.jsx(Er, { label: "Apply now", ariaLabel: "Apply now", href: e, color: "gold" })
);
zn.propTypes = {
  href: T.string
};
T.string;
function di({ message: e, type: t }) {
  const [r, n] = dt(""), s = {
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
di.propTypes = {
  type: T.oneOf(["error", "info"]).isRequired,
  message: T.string.isRequired
};
function Gl({ message: e }) {
  return /* @__PURE__ */ d.jsx(di, { message: e, type: "error" });
}
function lh({ message: e }) {
  return /* @__PURE__ */ d.jsx(di, { message: e, type: "info" });
}
const ch = Xe.div`
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
function Yl() {
  return /* @__PURE__ */ d.jsxs(ch, { "data-testid": "loader", className: "container ball-loader mt-4", children: [
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball1" }),
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball2" }),
    /* @__PURE__ */ d.jsx("div", { className: "ball-loader-ball ball3" })
  ] });
}
T.shape({
  color: T.oneOf(["gold", "maroon", "gray", "dark"]),
  content: T.shape({
    icon: T.string,
    header: T.string,
    body: T.string
  })
});
const Zl = T.shape({
  ariaLabel: T.string,
  color: T.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: T.string,
  href: T.string,
  label: T.string,
  onClick: T.func,
  size: T.oneOf(["default", "small", "xsmall"])
}), pi = {
  url: T.string,
  altText: T.string,
  cssClass: T.arrayOf(T.string)
}, Kl = {
  text: T.string,
  cssClass: T.arrayOf(T.string)
}, fi = {
  type: T.oneOf(["video", "youtube"]),
  url: T.string,
  altText: T.string,
  vttUrl: T.string,
  title: T.string
}, uh = {
  url: T.string,
  text: T.string,
  isActive: T.bool
}, Ar = T.shape({
  ...pi
}), Ra = T.shape({
  ...Kl
}), dh = T.shape({
  ...fi
}), Xr = T.shape({
  ...uh
}), Xl = T.shape({
  id: T.string,
  sourceType: T.oneOf(["api", "shared-data-source", "static-json"]),
  // default `api`
  sharedDataSourceId: T.string,
  // only if `dataSourceType == "shared-data-source"``
  // eslint-disable-next-line react/forbid-prop-types
  data: T.arrayOf(T.object),
  // only if `dataSourceType == "static-json"``
  apiUrl: T.string
  // only if `dataSourceType == "api"``
}), Mo = T.shape({
  text: T.string,
  url: T.string
}), Vr = T.shape({
  icon: T.arrayOf(T.string),
  title: T.string,
  content: T.string,
  buttonLink: Zl
}), Fo = T.arrayOf(
  T.shape({
    title: T.string,
    url: T.string
  })
), Jl = T.shape({
  career: Xr,
  growth: T.oneOfType([T.number, T.string]),
  medianSalary: T.string,
  brightOutlook: T.bool,
  greenOccupation: T.bool
}), ph = {
  hideCollegeSchool: T.bool,
  defaultView: T.oneOf(["list-view", "grid-view"]),
  cardDefaultImage: Ar
}, fh = T.shape({
  ...ph
}), hi = {
  atAGlance: T.bool,
  applicationRequirements: T.bool,
  changeMajorRequirements: T.bool,
  nextSteps: T.bool,
  affordingCollege: T.bool,
  flexibleDegreeOptions: T.bool,
  careerOutlook: T.bool,
  exampleCareers: T.bool,
  customizeYourCollegeExperience: T.bool,
  globalOpportunity: T.bool,
  attendOnline: T.bool,
  whyChooseAsu: T.bool,
  programContactInfo: T.bool,
  externalAnchors: T.arrayOf(
    T.shape({
      targetIdName: T.string,
      text: T.string
    })
  )
}, rn = T.shape({
  image: Ar,
  title: T.string,
  text: T.string,
  button: Zl
}), Fs = T.shape({
  faculty: rn,
  programs: rn,
  research: rn,
  inclusion: rn,
  mentors: rn,
  honors: rn
}), Ql = {
  hide: T.bool,
  sectionIntroText: T.string,
  cards: Fs,
  defaultCards: Fs
};
T.shape({
  ...hi
});
const mo = T.shape({
  id: T.oneOfType([T.string, T.number]),
  value: T.string
}), ec = T.shape({
  locations: T.arrayOf(mo),
  asuLocals: T.arrayOf(mo),
  acceleratedConcurrent: mo
});
var pt = {}, gr, mr;
function $o() {
  throw new Error("setTimeout has not been defined");
}
function zo() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? gr = setTimeout : gr = $o;
  } catch {
    gr = $o;
  }
  try {
    typeof clearTimeout == "function" ? mr = clearTimeout : mr = zo;
  } catch {
    mr = zo;
  }
})();
function tc(e) {
  if (gr === setTimeout)
    return setTimeout(e, 0);
  if ((gr === $o || !gr) && setTimeout)
    return gr = setTimeout, setTimeout(e, 0);
  try {
    return gr(e, 0);
  } catch {
    try {
      return gr.call(null, e, 0);
    } catch {
      return gr.call(this, e, 0);
    }
  }
}
function hh(e) {
  if (mr === clearTimeout)
    return clearTimeout(e);
  if ((mr === zo || !mr) && clearTimeout)
    return mr = clearTimeout, clearTimeout(e);
  try {
    return mr(e);
  } catch {
    try {
      return mr.call(null, e);
    } catch {
      return mr.call(this, e);
    }
  }
}
var _r = [], on = !1, Kr, va = -1;
function gh() {
  !on || !Kr || (on = !1, Kr.length ? _r = Kr.concat(_r) : va = -1, _r.length && rc());
}
function rc() {
  if (!on) {
    var e = tc(gh);
    on = !0;
    for (var t = _r.length; t; ) {
      for (Kr = _r, _r = []; ++va < t; )
        Kr && Kr[va].run();
      va = -1, t = _r.length;
    }
    Kr = null, on = !1, hh(e);
  }
}
pt.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  _r.push(new nc(e, t)), _r.length === 1 && !on && tc(rc);
};
function nc(e, t) {
  this.fun = e, this.array = t;
}
nc.prototype.run = function() {
  this.fun.apply(null, this.array);
};
pt.title = "browser";
pt.browser = !0;
pt.env = {};
pt.argv = [];
pt.version = "";
pt.versions = {};
function Or() {
}
pt.on = Or;
pt.addListener = Or;
pt.once = Or;
pt.off = Or;
pt.removeListener = Or;
pt.removeAllListeners = Or;
pt.emit = Or;
pt.prependListener = Or;
pt.prependOnceListener = Or;
pt.listeners = function(e) {
  return [];
};
pt.binding = function(e) {
  throw new Error("process.binding is not supported");
};
pt.cwd = function() {
  return "/";
};
pt.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
pt.umask = function() {
  return 0;
};
const mh = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, ac = Object.values(mh), $s = {
  offeredBy: { icon: "university", title: "Offered by" },
  locations: { icon: "map-marker-alt", title: "Location" },
  firstRequirementMathCourse: {
    icon: "pencil-alt",
    title: "First Required math Course"
  },
  mathIntensity: { icon: "calculator", title: "Math intensity" },
  timeCommitment: { icon: "calendar-alt", title: "Time commitment" },
  stemOptText: { icon: "star", title: "STEM-OPT extension eligible" }
}, oc = "grid-view", Uo = "list-view", ic = "degree-list-programs", sc = "Sorry, Something went wrong.", yh = "STEM-OPT for international students on F-1 visas", bh = `This degree is not found.
  This may be a temporary issue. Please try again in 5 minutes.
  If the issue persists, the degree may no longer be available.`, xh = sh(), vh = (e) => {
  const t = e || xh, r = `${t}/assets/img/detail-page`, n = `${t}/assets/img/listing-page`, a = {
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
}, wh = (e) => {
  if (typeof e == "string") return "Degrees";
  const { program: t, cert: r } = e;
  return t === "undergrad" && r === "true" ? "Undergraduate Minors and Certificates" : t === "undergrad" ? "Undergraduate Degrees" : t === "graduate" && r === "true" ? "Graduate Certificates" : t === "graduate" ? "Graduate Degrees" : "Degrees";
}, gi = [
  { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", text: "Polytechnic campus" },
  { id: 2, value: "TEMPE", text: "Tempe campus" },
  { id: 3, value: "WEST", text: "West Valley campus" },
  { id: 4, value: "ONLNE", text: "ASU Online" }
], Sh = gi[4], lc = [
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
], mi = [
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
], kh = mi[0], qo = (e) => (e == null ? void 0 : e.value) && (e == null ? void 0 : e.value) !== "all", Th = (e) => {
  var t;
  return ((t = [
    ...gi,
    ...lc,
    ...mi
  ].find(({ value: r }) => r === e)) == null ? void 0 : t.text) || e;
}, gt = {
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
}, Ch = {
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
}, zs = (e, t) => {
  const r = ["TUCSN", "AWC"], n = e.toUpperCase(), a = r.includes(n) ? `${n}-${t}` : n;
  return Ch[a];
};
function cc({ anchorMenu: e }) {
  var n, a;
  const t = (n = e == null ? void 0 : e.externalAnchors) == null ? void 0 : n.map((s) => {
    const { targetIdName: p, text: h } = s;
    return {
      targetIdName: p.startsWith("#") ? p.substring(1) : p,
      text: h,
      icon: null
    };
  }), r = Object.keys(gt).filter((s) => e[s]).map((s) => gt[s]).concat(t || []);
  return /* @__PURE__ */ d.jsx(
    kl,
    {
      items: r,
      firstElementId: (a = r[0]) == null ? void 0 : a.targetIdName,
      focusFirstFocusableElement: !1
    }
  );
}
cc.propTypes = {
  anchorMenu: T.shape(hi)
};
function Ah(e, t) {
  const r = Math.floor(e / t), n = e % t;
  return r + (n > 0 ? 1 : 0);
}
const _h = "https://degrees.apps.asu.edu", Eh = "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan/", Oh = {
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
}, jh = {
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
}, Us = (e) => e.map((t) => ({
  title: t.acadPlanDescription,
  url: t.academicOfficeUrl
})).sort((t, r) => t.title.localeCompare(r.title)), Rh = (e) => e == null ? void 0 : e.map((t) => ({
  career: {
    text: t.alternateTitle,
    url: `${_h}/career-details/${t.onetCode}`
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
function uc(e, t) {
  const r = { ...t, ...e };
  if (r.collegeAcadOrg && (r.collegeOrg = r.collegeAcadOrg, delete r.collegeAcadOrg), r.program) {
    const { program: m } = r;
    r.cert === "true" && m === "undergrad" ? r.degreeType = "UGCM" : m === "graduate" ? r.degreeType = "GR" : r.degreeType = "UG", delete r.program;
  }
  r.acadPlan && (r.endpoint += `/${r.acadPlan}`, delete r.acadPlan);
  const { endpoint: n, include: a, ...s } = r, p = a.split(",").map((m) => `include=${m.trim()}`).join("&"), h = Object.keys(s).reduce(
    (m, f) => `${m}&${f}=${r[f]}`,
    ""
  );
  return `${n}?${h}&${p}`;
}
function La(e, t = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    ac.includes(e.component) ? e.component : t
  );
}
function Bo(e) {
  return typeof e != "string" ? console.error("Invalid string", e) : e == null ? void 0 : e.replace(
    /\w\S*/g,
    (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
  );
}
function Nh(e) {
  return /<\/?[a-z][\s\S]*>/i.test(e);
}
const dc = "AsuDevTools", Ih = {
  isDebug: !1
};
function Ph() {
  const e = JSON.parse(localStorage.getItem(dc));
  return e == null ? void 0 : e.isDebug;
}
window.__AsuDevTools = {
  enableDebug(e) {
    const t = JSON.stringify({
      ...Ih,
      isDebug: e
    });
    localStorage.setItem(dc, t);
  }
};
async function yo(e) {
  return e != null && e.length ? (await Promise.all(
    e.map(async (r) => {
      try {
        return await (await Promise.race([
          fetch(
            `${Eh}${r}?include=academicOfficeUrl&include=acadPlanDescription`
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
function Lh(e, t) {
  Promise.all(e).then((r) => {
    const n = r[0], a = r[1];
    t({ accelerateData: n, concurrentData: a });
  }).catch(() => {
    t({ accelerateData: [], concurrentData: [] });
  });
}
function Un({ contents: e = [] }) {
  const t = en("paragrap-");
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map(
    (r) => Nh(r.text) ? /* @__PURE__ */ d.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Yt(r.text)
      },
      t.next().value
    ) : /* @__PURE__ */ d.jsx(
      "p",
      {
        className: `${dn(r.cssClass)}`,
        children: r.text
      },
      t.next().value
    )
  ) });
}
Un.propTypes = {
  contents: T.arrayOf(Ra)
};
const Dh = Pa`
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
`, Mh = Xe.div`
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
`, Fh = Xe.img`
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
function hn({
  title: e,
  image: t,
  contentDirection: r = "left",
  contents: n = [],
  contentChildren: a = null,
  headingTag: s = "H3"
}) {
  const p = sn(), h = sn(), m = La(s);
  function f() {
    const _ = p.current.offsetHeight;
    h.current.style.height = `${_ * 1.2}px`;
  }
  return Ct(() => {
    f();
    let A;
    const _ = () => {
      clearTimeout(A), A = setTimeout(() => f(), 150);
    };
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, [h, p]), /* @__PURE__ */ d.jsxs("div", { className: `uds-image-overlap content-${r}`, children: [
    /* @__PURE__ */ d.jsx(Dh, {}),
    /* @__PURE__ */ d.jsx(
      Fh,
      {
        ref: h,
        className: "img-fluid",
        src: t == null ? void 0 : t.url,
        alt: t == null ? void 0 : t.altText,
        onError: (A) => {
          A.currentTarget.style.display = "none";
        }
      }
    ),
    /* @__PURE__ */ d.jsxs(Mh, { ref: p, className: "content-wrapper", children: [
      /* @__PURE__ */ d.jsx(m, { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: e }) }),
      /* @__PURE__ */ d.jsx(Un, { contents: n }),
      a
    ] })
  ] });
}
hn.propTypes = {
  headingTag: T.string,
  title: T.string,
  contentDirection: T.oneOf(["left", "right"]),
  contents: T.arrayOf(
    T.shape({
      text: T.string
    })
  ),
  image: Ar,
  contentChildren: T.element
};
const pc = Pa`
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
`, fc = Xe.main`
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
function $h({
  baseIconClassName1: e,
  baseIconAriaLabel1: t,
  baseIconStyle1: r,
  baseIconAriaLabel2: n,
  baseIconClassName2: a,
  baseIconStyle2: s,
  ariaLabel: p,
  ariaControls: h,
  dataId: m,
  onClick: f = () => null
}) {
  const [A, _] = dt(!1), j = (S, I, F, z) => /* @__PURE__ */ d.jsx(
    "span",
    {
      style: {
        cursor: "pointer",
        display: I
      },
      children: /* @__PURE__ */ d.jsx(
        "i",
        {
          className: `${S}`,
          "aria-label": F,
          title: F,
          style: z
        }
      )
    }
  ), $ = () => {
    _(!A), f(!A);
  }, E = /* @__PURE__ */ d.jsxs(
    "span",
    {
      "data-testid": m,
      role: "button",
      className: "element-focus",
      tabIndex: 0,
      onKeyDown: (S) => S.key === "Enter" && $(),
      onClick: $,
      "aria-label": p,
      "aria-expanded": A,
      "aria-controls": h,
      children: [
        j(
          e,
          A ? "" : "none",
          t,
          r
        ),
        j(
          a,
          A ? "none" : "",
          n,
          s
        )
      ]
    }
  );
  return Xs(() => E, [A]);
}
Xe.div`
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
const bo = (e) => /* @__PURE__ */ d.jsx("span", {}), zh = ({
  onClick: e = () => null,
  ariaLabel: t,
  ariaControls: r,
  dataId: n
}) => $h({
  dataId: n,
  baseIconClassName1: "fas fa-chevron-up",
  baseIconClassName2: "fas fa-chevron-down",
  onClick: e,
  ariaLabel: t,
  ariaControls: r
}), gn = Ys(null), yi = ({ listPageProps: e, detailPageProps: t, children: r }) => {
  const { detailPageDefault: n, listingPageDefault: a } = Xs(
    () => vh((e || t).appPathFolder),
    []
  ), s = {
    detailPageDefault: n,
    listingPageDefault: a
  }, p = {
    listPageProps: e,
    detailPageProps: t
  };
  return /* @__PURE__ */ d.jsx(
    gn.Provider,
    {
      value: {
        state: p,
        defaultState: s
      },
      children: r
    }
  );
};
yi.propTypes = {
  children: T.oneOfType([
    T.arrayOf(T.element),
    T.element
  ]),
  listPageProps: T.shape({}),
  detailPageProps: T.shape({})
};
const Uh = ({
  dataSource: e,
  tableView: t = [],
  programs: r,
  stateFilters: n
}) => {
  const { collegeAcadOrg: a, departmentCode: s } = e;
  Ct(() => {
    if (!r || !Ph()) return;
    const p = "background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;", h = "font-size:30px;", m = "font-size:24px;", f = "font-size: 18px; margin-left: 0.5rem;";
    console.group("<< ASU Degree Page >>"), console.log("%c🏫 Listing Page Programs 📚", p + h), console.log(
      `%cTotal programs found: ${r.length}`,
      p + f
    ), console.log("%cPrograms found", p + f), console.log(r), console.log(
      `%cTotal programs loaded: ${t.length}`,
      p + f
    ), console.log("%cPrograms loaded", p + f), console.log(t), console.log("%cPage Filters", p + m), console.log(
      `%c- collegeAcadOrg:${a}`,
      p + f
    ), console.log(
      `%c- departmentCode:${s}`,
      p + f
    ), console.log("%cSearch Filters", p + m), console.log(n), console.groupEnd();
  });
}, qs = (e) => e.degreeType === "UG", hc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, gc = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, qh = (e) => Object.keys(e).length > 0 ? gc(e) || hc(e) : !0, jn = (e) => {
  const { owners: t } = e;
  return t ? t.reduce(
    (n, a) => n.percentOwned > a.percentOwned ? n : a
  ) : null;
};
function pn(e = {}) {
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
    isUndergradProgram: () => qs(e),
    isPhdOrMasters: () => e.degreeDescriptionShort !== "CERT",
    // Only called in functions that already checked if its a grad program
    isGradProgram: () => e.degreeType === "GR",
    // GR is present for grad degrees and grad certificates
    isMinorOrCertificate: () => e.degreeType === "UGCM" || e.degreeType === "GR" && e.acadPlanTypeDescription === "Certificate",
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => qs(e) ? "undergrad" : "graduate",
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
    getAccelerateDegrees: async () => e.acceleratedAcadPlanCodes ? yo(e.acceleratedAcadPlanCodes) : [],
    getConcurrentDegrees: async () => e.concurrentAcadPlanCodes ? yo(e.concurrentAcadPlanCodes) : [],
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
    getConcurrentDegreeMajorMaps: () => yo(e.concurrentAcadPlanCodes),
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
    hasGraduateApplyDates: () => hc(e),
    /** @return {Object.<string, string>} */
    getPlanDeadlines: () => e.applicationDeadlines,
    hasPlanDeadlines: () => gc(e),
    isValidActiveProgram: () => qh(e),
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
        (p) => p.campusesOffered
      );
      const r = [...e.majorMapSubplans], n = (p, h) => p.filter(
        (m) => m.acadSubPlanCode !== h
      ), a = (p, h) => p.some(
        (m) => m.acadSubPlanCode !== h
      ), s = [];
      for (let p = r.length - 1; p >= 0 && t.length !== 0; p -= 1) {
        const h = r[p];
        (h.defaultFlag || a(
          t,
          h.acadSubPlanCode
        )) && (t = n(
          t,
          h.acadSubPlanCode
        ), s.push(h));
      }
      return s;
    },
    getSubPln: () => e.subplans
  };
}
function Bh(e) {
  const t = e.getProgramType(), r = [], n = (h) => ({
    text: h,
    url: ""
  }), a = (h) => ({
    text: "Online",
    url: h
  }), s = e.getCampusList().map((h) => h.campusCode);
  s.length > 0 && r.push(
    ...s.map(
      (h) => h === "ONLNE" && a(e.getCurriculumUrl()) || zs(h, t) || n(h)
    )
  );
  const p = e.getCampusWue();
  return p && r.push(
    zs(p, t) || n(p)
  ), r;
}
const Hh = (e, t) => {
  const r = { ...e };
  return r.globalOpportunity && !t.getGlobalExp() && (r.globalOpportunity = !1), r.careerOutlook && !t.getAsuCareerOpportunity() && (r.careerOutlook = !1), r.attendOnline && !t.getCurriculumUrl() && (r.attendOnline = !1), r;
}, Wh = (e) => {
  var a;
  const t = Object.values(e).filter(
    (s) => s === !0
  );
  return ((a = e == null ? void 0 : e.externalAnchors) == null ? void 0 : a.length) > 0 || t.length > 0;
};
function Vh(e) {
  return "";
}
function Gh(e) {
  return "";
}
function Yh() {
  return "";
}
function Da(e, t) {
  let r = t || "";
  return r = r.replaceAll("{INSTITUTION_CODE}", e.getInstitution()).replaceAll("{ACAD_PLAN_CODE}", e.getAcadPlan()), r;
}
function mc(e, t) {
  return `${Da(e, t)}#${gt.flexibleDegreeOptions.acceleratedId}`;
}
function Bs({
  programs: e = [],
  filters: {
    collegeAcadOrg: t,
    departmentCode: r,
    acceleratedConcurrent: n,
    locations: a = [],
    keyword: s,
    blacklistAcadPlans: p,
    program: h,
    showCerts: m
  }
}) {
  const f = (F) => !t || F.getCollegeAcadOrgJoint().includes(t), A = (F) => !r || F.getDepartmentCode().includes(r), _ = (F) => {
    var z;
    return !a.length || ((z = F.getCampusList()) == null ? void 0 : z.some((K) => a.some((Z) => Z.value === K.campusCode)));
  }, j = (F = {}) => {
    var z;
    return !qo(n) || ((z = F[n.value]) == null ? void 0 : z.length) > 0;
  }, $ = (F, z) => z ? new RegExp(z, "i").test(F.getFullDescription()) : !0, E = (F) => !(p != null && p.includes(F.getAcadPlan())), S = (F) => h === "undergrad" ? !0 : m === "true" && h === "graduate" ? F.isMinorOrCertificate() : F.isPhdOrMasters(), I = (F) => {
    const z = pn(F);
    return f(z) && A(z) && _(z) && j(F) && $(z, s) && E(z) && S(z);
  };
  return e.filter(I);
}
const Zh = (e) => e.sort(
  (r, n) => r.acadPlanMarketingDescription.localeCompare(
    n.acadPlanMarketingDescription
  )
), Mr = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: p = "",
  component: h = ""
}) => {
  const { dataLayer: m } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: p.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: h.toLowerCase()
  };
  m && m.push(f);
};
function bi({ breadcrumbs: e, section: t }) {
  const r = en("breadcrumb-");
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
            onClick: () => Mr({
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
        onClick: () => Mr({
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
bi.propTypes = {
  breadcrumbs: T.arrayOf(Xr),
  section: T.string
};
const Kh = () => /* @__PURE__ */ d.jsx("div", { className: "container", "data-testid": "browse-title", children: /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Browse degrees" }) }) }), xo = ({
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
      children: a == null ? void 0 : a.map((p) => /* @__PURE__ */ d.jsx("option", { id: p.id, value: p.value, children: p.text }, p.id))
    }
  )
] }), Xh = Xe.div`
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
`, Jh = Xe.button`
  font-weight: 400;
  text-decoration: underline;
`, Qh = {
  event: "select",
  action: "click",
  name: "onclick"
}, eg = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link"
}, Rn = {
  isActive: !1,
  locations: [],
  asuLocals: [],
  acceleratedConcurrent: { value: "all", text: "" },
  keyword: null,
  blacklistAcadPlans: []
}, vo = (e) => ({
  id: e.id,
  value: e.value,
  text: e.text
}), tg = (e) => e.map((t) => t.text).join(", "), Hs = (e, t) => {
  Mr({ ...Qh, type: e, text: t });
}, Ws = (e) => {
  Mr({ ...eg, text: e });
}, yc = ({ value: e, onChange: t, onApply: r, onClean: n }) => {
  const a = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (m, { target: { selectedOptions: f } }) => {
      let A = [], _ = [];
      const j = Array.from(f, vo), { locations: $, asuLocals: E } = e;
      ({
        locationsRender: () => {
          A = j, _ = E;
        },
        asuLocalsRender: () => {
          _ = j, A = $;
        }
      })[`${m}Render`](), t({
        ...e,
        locations: A,
        asuLocals: _
      }), Hs({
        locations: "location or online",
        asuLocals: "as local"
      }[m], tg(j));
    }
  ), s = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (m, { target: { selectedOptions: f } }) => {
      t({ ...e, [m]: vo(f[0]) }), Hs(
        "accelerated/concurrent",
        vo(f[0]).text
      );
    }
  ), p = () => {
    r == null || r({
      ...e,
      isActive: !0
    });
  }, h = () => {
    t(Rn), n == null || n();
  };
  return /* @__PURE__ */ d.jsxs(Xh, { className: "container", "data-testid": "filters", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Filter your results" }),
    /* @__PURE__ */ d.jsxs("form", { className: "mt-3 uds-form row", children: [
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        xo,
        {
          multiple: !0,
          id: "locations",
          label: "Campuses or online",
          selected: e.locations.map((m) => m.value),
          options: gi,
          onChange: a
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        xo,
        {
          multiple: !0,
          id: "asuLocals",
          label: "ASU location, ASU Local",
          selected: e.asuLocals.map((m) => m.value),
          options: lc,
          onChange: a
        }
      ) }),
      /* @__PURE__ */ d.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ d.jsx(
        xo,
        {
          id: "acceleratedConcurrent",
          label: "Accelerated, Concurrent",
          selected: e.acceleratedConcurrent.value,
          options: mi,
          onChange: s
        }
      ) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "hint-container", children: /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("small", { children: "*CTRL + Click to select multiple" }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "filter-action-buttons", children: [
      /* @__PURE__ */ d.jsx(
        Er,
        {
          "data-testid": "btn-apply-filter",
          color: "maroon",
          label: "Apply filters",
          ariaLabel: "Apply filters",
          size: "default",
          onClick: () => {
            p(), Ws("apply filters");
          }
        }
      ),
      /* @__PURE__ */ d.jsx(
        Jh,
        {
          "data-testid": "btn-clear-filters",
          className: "btn btn-link",
          onClick: () => {
            h(), Ws("clean filters");
          },
          children: "Clear filters"
        }
      )
    ] })
  ] });
};
yc.propTypes = {
  value: ec,
  onChange: T.func,
  onApply: T.func,
  onClean: T.func
};
function bc({
  value: { isActive: e, locations: t, asuLocals: r, acceleratedConcurrent: n } = {},
  onRemove: a
}) {
  const s = en("filter-"), p = (t == null ? void 0 : t.length) + (r == null ? void 0 : r.length) + (qo(n) ? 1 : 0), h = (m, f) => {
    const { text: A } = f;
    return /* @__PURE__ */ d.jsxs(
      "span",
      {
        tabIndex: -1,
        role: "button",
        "aria-label": `Remove filter ${A}`,
        "data-filter-id": m,
        onKeyDown: () => a(m, f),
        onClick: () => a(m, f),
        className: "btn btn-tag btn-tag-alt-white d-inline-flex align-items-center me-2",
        children: [
          /* @__PURE__ */ d.jsx("span", { className: "pe-1", children: A }),
          /* @__PURE__ */ d.jsx("i", { className: "fas fa-times" })
        ]
      },
      s.next().value
    );
  };
  return /* @__PURE__ */ d.jsxs("div", { "data-testid": "filters-summary", children: [
    /* @__PURE__ */ d.jsx("header", { children: /* @__PURE__ */ d.jsx("strong", { children: "Applied filters" }) }),
    /* @__PURE__ */ d.jsx("div", { "data-testid": "summary-filter-tags", children: !e || p === 0 ? /* @__PURE__ */ d.jsx("span", { children: "No filters applied" }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      t.map((m) => h("locations", m)),
      r.map((m) => h("asuLocals", m)),
      (qo(n) ? [n] : []).map((m) => h("acceleratedConcurrent", m))
    ] }) })
  ] });
}
bc.propTypes = {
  value: ec,
  onRemove: T.func
};
const rg = Xe.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`, ng = Xe.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;
function ag({
  applyNowUrl: e,
  title: t,
  contents: r,
  photoGrid: n
}) {
  const a = La(t);
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      className: "container",
      "data-type": "text-photo-grid",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(a, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${dn(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Un, { contents: r }),
          /* @__PURE__ */ d.jsx(zn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-7 d-none d-sm-none d-md-block", children: /* @__PURE__ */ d.jsx(rg, { className: "row", children: n.images.map((s, p) => /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "photo-item col-sm-12 col-md-6 col-lg-6",
            children: /* @__PURE__ */ d.jsx(
              "img",
              {
                className: `mg-fluid ${dn(s.cssClass)}`,
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
function og({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n,
  video: a
}) {
  const s = La(t);
  return /* @__PURE__ */ d.jsx(
    ng,
    {
      className: "container",
      "data-type": "text-media",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ d.jsxs("div", { className: "row gy-3", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ d.jsx(s, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${dn(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ d.jsx(Un, { contents: r }),
          /* @__PURE__ */ d.jsx(zn, { href: e })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7 mt-2 mt-sm-0", children: [
          a && /* @__PURE__ */ d.jsx(
            ai,
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
function ig({
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
        hn,
        {
          title: t.text,
          contents: r,
          image: n,
          contentDirection: "right",
          contentChildren: /* @__PURE__ */ d.jsx("div", { className: "mt-2", children: /* @__PURE__ */ d.jsx(zn, { href: e }) })
        }
      ) }) })
    }
  );
}
const sg = ({ applyNowUrl: e, title: t, contents: r }) => {
  const n = La(t);
  return /* @__PURE__ */ d.jsx("section", { className: "container", "data-type": "text", "data-testid": "intro-content", children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-5", children: /* @__PURE__ */ d.jsx(n, { className: "mt-0", children: /* @__PURE__ */ d.jsx("span", { className: `${dn(t.cssClass)}`, children: t.text }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "col-sm-12 col-md-7", children: [
      /* @__PURE__ */ d.jsx(Un, { contents: r }),
      /* @__PURE__ */ d.jsx(zn, { href: e })
    ] })
  ] }) });
}, xi = ({
  applyNowUrl: e,
  type: t,
  title: r,
  contents: n,
  image: a,
  video: s,
  photoGrid: p
}) => ({
  text: () => sg({ applyNowUrl: e, title: r, contents: n }),
  "text-media": () => og({
    applyNowUrl: e,
    title: r,
    contents: n,
    image: a,
    video: s
  }),
  "text-image-overlay": () => ig({ applyNowUrl: e, title: r, contents: n, image: a }),
  "text-photo-grid": () => ag({
    applyNowUrl: e,
    title: r,
    contents: n,
    photoGrid: p
  }),
  undefined: () => (console.error(
    `the type '${t}' is not supported by the 'IntroContent' component.`
  ), null)
})[t]();
xi.propTypes = {
  applyNowUrl: T.string,
  type: T.oneOf([
    "text",
    "text-media",
    "text-image-overlay",
    "text-photo-grid"
  ]).isRequired,
  video: T.shape({ ...fi }),
  image: T.shape({ ...pi }),
  header: Ra,
  title: T.shape({
    ...Kl,
    component: T.oneOf(ac)
  }),
  contents: T.arrayOf(Ra),
  photoGrid: T.shape({
    images: T.arrayOf(Ar)
  })
};
const Ma = {
  programs: T.arrayOf(T.object),
  totalRows: T.number,
  loading: T.bool,
  actionUrls: T.shape({
    applyNowUrl: T.string,
    majorInfoUrl: T.string,
    majorInfoOnlineUrl: T.string
  }),
  degreesPerPage: T.number
}, lg = Xe.div`
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
`, xc = ({ programs: e, actionUrls: t }) => {
  var p, h, m, f, A;
  const { state: r } = Zt(gn), n = (h = (p = r == null ? void 0 : r.listPageProps) == null ? void 0 : p.programList) == null ? void 0 : h.settings, a = ((A = (f = (m = r == null ? void 0 : r.listPageProps) == null ? void 0 : m.programList) == null ? void 0 : f.dataSource) == null ? void 0 : A.program) === "graduate", s = e.map((_) => {
    const j = pn(_), $ = () => {
      var z;
      const I = j.isOnline() ? j.getOnlineMajorMapURL() : j.getGeneralDegreeMajorMap();
      let F;
      try {
        F = `<a href=${(z = new URL(I)) == null ? void 0 : z.toString()}>${j.getRequiredCoursesLabel()} Map</a>`;
      } catch {
        return "";
      }
      return F;
    }, E = () => `<div>
        ${j.hasConcurrentDegrees() ? "<div className='cell-container'>concurrent</div>" : ""}
        ${j.hasAccelerateDegrees() ? `<div className="cell-container">
                <a href=${mc(
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
              <br />${$()}
            </li>`}
        <li>
          <strong>Campus or location:</strong>
          <br />${j.getCampusList().map((S) => Bo(S.campusCode)).join(", ")}
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
  return /* @__PURE__ */ d.jsx(lg, { "data-testid": "accordion-view", children: /* @__PURE__ */ d.jsx(Zo, { cards: s }) });
};
xc.propTypes = {
  ...Ma
};
const cg = Xe.section`
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
function vc({ programs: e, loading: t, actionUrls: r }) {
  var m, f, A, _;
  const { defaultState: n, state: a } = Zt(gn), s = (_ = (A = (f = (m = a == null ? void 0 : a.listPageProps) == null ? void 0 : m.programList) == null ? void 0 : f.settings) == null ? void 0 : A.cardDefaultImage) == null ? void 0 : _.url, p = n.detailPageDefault.hero.image.url, h = s || p;
  return /* @__PURE__ */ d.jsx(
    cg,
    {
      id: ic,
      className: "container row",
      "data-loading": t,
      "data-testid": "grid-view",
      children: e.map((j) => {
        const $ = pn(j);
        return /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-4 col-lg-3 mb-2", children: /* @__PURE__ */ d.jsx(
          ht,
          {
            type: "degree",
            horizontal: !1,
            clickable: !1,
            image: h,
            imageAltText: "An example image",
            title: $.getMajorDesc(),
            linkLabel: "View Program Details",
            linkUrl: Da($, r.majorInfoUrl),
            buttons: [
              {
                color: "maroon",
                size: "small",
                label: "Reqeuest Info",
                href: Yh()
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
vc.propTypes = {
  ...Ma
};
const ug = [
  {
    dataKey: "Major",
    label: "Major",
    className: "major",
    sortable: !0,
    contentTemplate: ({ resolver: e, rowIndex: t, actionUrls: r, onClick: n }) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ d.jsx("a", { href: Da(e, r == null ? void 0 : r.majorInfoUrl), children: e.getMajorDesc() }),
      /* @__PURE__ */ d.jsx(
        zh,
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
        bo,
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
      const t = en("campus-");
      return /* @__PURE__ */ d.jsx("div", { children: e.getCampusList().map((r, n, a) => /* @__PURE__ */ d.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ d.jsx("span", { children: `${Bo(
          Th(r.campusCode)
        )}${n < a.length - 1 ? ", " : ""}` }, r.campusCode),
        /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx(
          bo,
          {
            popover: {
              title: Bo(r.campusCode),
              body: () => fetch(Vh(r.campusCode)),
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
        /* @__PURE__ */ d.jsx("a", { href: mc(e, t.majorInfoUrl), children: "4+1 years" }),
        /* @__PURE__ */ d.jsx(
          bo,
          {
            popover: {
              title: "4+1 years",
              body: () => fetch(Gh(e.getAcadPlan())),
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
], dg = ci`
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
`, pg = Xe.table`
  ${dg}
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
`, fg = ({ resolver: e, id: t }) => {
  const r = uu(), n = (a) => {
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
        dangerouslySetInnerHTML: Yt(
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
}, hg = ({ resolver: e }) => /* @__PURE__ */ d.jsxs("div", { children: [
  /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "Additional Program Fee: " }),
    e.hasAsuProgramFee() ? "Yes" : "No"
  ] }),
  /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "Second Language Requirement: " }),
    e.hasAsuLangReqFlag() ? "Yes" : "No"
  ] }),
  e.hasMathReqFlag() && /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "First Required Math Course:" }),
    /* @__PURE__ */ d.jsx("span", { children: e.getMinMathReq() }),
    e.getOtherMathReqCourse() && /* @__PURE__ */ d.jsx(
      "span",
      {
        dangerouslySetInnerHTML: Yt(
          e.getOtherMathReqCourse()
        )
      }
    )
  ] }) }),
  e.getMathIntensity() && /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "Math Intensity:" }),
    e.getMathIntensity()
  ] }),
  e.hasStemOptText() && /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("strong", { children: "STEM OPT:" }),
    e.hasStemOptText()
  ] })
] }), gg = en("row-"), wc = ({ programs: e, totalRows: t, loading: r, actionUrls: n }) => {
  var A, _;
  const a = mt.useRef(null), s = mt.useRef(null), { state: p } = Zt(gn), h = (_ = (A = p == null ? void 0 : p.listPageProps) == null ? void 0 : A.programList) == null ? void 0 : _.settings;
  let m = ug;
  p.listPageProps.programList.dataSource.program === "graduate" && (m = m.filter((j) => j.dataKey !== "RequiredCourses")), h != null && h.hideCollegeSchool && (m = m.filter((j) => j.dataKey !== "CollegeSchool"));
  const f = (j, $) => {
    const E = s.current.children;
    Array.prototype.forEach.call(
      E,
      (I, F) => F !== j && I.setAttribute("data-is-open", "false")
    ), s.current.children[j].setAttribute("data-is-open", String($));
  };
  return /* @__PURE__ */ d.jsx("section", { className: "container mb-4", "data-testid": "list-view", children: /* @__PURE__ */ d.jsxs(
    pg,
    {
      id: ic,
      ref: a,
      "data-loading": r,
      title: `${t} program found`,
      children: [
        /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { role: "row", children: m.map((j) => {
          var $;
          return /* @__PURE__ */ d.jsx(
            "th",
            {
              tabIndex: 0,
              className: `${j.className}`,
              scope: "col",
              "aria-label": j.ariaLabel,
              children: (($ = j.headerTemplate) == null ? void 0 : $.call(j)) || /* @__PURE__ */ d.jsx("span", { children: j.label })
            },
            j.dataKey
          );
        }) }) }),
        /* @__PURE__ */ d.jsxs("tbody", { ref: s, "data-testid": "program-rows", children: [
          e.length === 0 ? /* @__PURE__ */ d.jsx("tr", { role: "presentation", children: /* @__PURE__ */ d.jsx(
            "td",
            {
              colSpan: m.length,
              "aria-label": "No result found for the filters applied",
              children: " "
            }
          ) }) : null,
          // programs
          e.map((j, $) => {
            const E = gg.next().value, S = $ * 2, I = pn(j);
            return /* @__PURE__ */ d.jsxs(Js, { children: [
              /* @__PURE__ */ d.jsx("tr", { role: "row", children: m.map((F) => {
                var z;
                return /* @__PURE__ */ d.jsx(
                  "td",
                  {
                    className: `${F.className}`,
                    children: (z = F.contentTemplate) == null ? void 0 : z.call(F, {
                      resolver: I,
                      col: F,
                      row: j,
                      rowIndex: S,
                      onClick: f,
                      actionUrls: n
                    })
                  },
                  `${E}-${F.dataKey}`
                );
              }) }, E),
              /* @__PURE__ */ d.jsxs(
                "tr",
                {
                  id: `row-info-${S}`,
                  className: "row-info",
                  children: [
                    /* @__PURE__ */ d.jsx("td", { colSpan: 3, children: fg({ resolver: I, id: `${E}-more-text` }) }, `${E}-info`),
                    /* @__PURE__ */ d.jsx("td", { colSpan: 2, children: hg({ resolver: I }) }, `${E}-extra-info`)
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
wc.propTypes = {
  ...Ma
};
const mg = Pa`

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
`, yg = {
  [oc]: vc,
  [Uo]: wc
};
function Sc({
  dataViewComponent: e,
  loading: t,
  programs: r,
  actionUrls: n,
  degreesPerPage: a
}) {
  let s;
  a ? typeof a != "number" && (s = parseInt(a, 10)) : s = 8;
  const p = a || s, h = Ah(r.length, p), m = yg[e], [f, A] = dt([]), _ = (j, $) => {
    const E = ($ - 1) * p, S = E + p;
    A(r.slice(E, S));
  };
  return Ct(() => {
    A(r.slice(0, p));
  }, [r]), /* @__PURE__ */ d.jsxs("section", { "data-testid": "program-list", "data-view-type": e, children: [
    /* @__PURE__ */ d.jsx(mg, {}),
    /* @__PURE__ */ d.jsx("div", { className: "desktop-view", children: /* @__PURE__ */ d.jsx(
      m,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: a || s
      }
    ) }),
    /* @__PURE__ */ d.jsx("div", { className: "mobile-view mb-2", children: /* @__PURE__ */ d.jsx(
      xc,
      {
        loading: t,
        programs: f,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: a || s
      }
    ) }),
    r.length > 0 ? /* @__PURE__ */ d.jsx(
      ni,
      {
        totalNumbers: 7,
        type: "default",
        background: "white",
        totalPages: h,
        onChange: _,
        showFirstButton: !0,
        showLastButton: !0
      }
    ) : /* @__PURE__ */ d.jsx("section", { className: "container no-space", children: /* @__PURE__ */ d.jsx(lh, { message: "No result found for the filters applied" }) })
  ] });
}
Sc.propTypes = {
  dataViewComponent: T.string,
  ...Ma,
  degreesPerPage: T.number
};
const bg = Xe.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
  }
`, kc = ({ value: e, onChange: t, onSearch: r }) => {
  const [n, a] = dt(!1);
  let s;
  Ct(() => () => clearTimeout(s), []);
  const p = (h) => {
    Mr({
      event: "search",
      action: "type",
      name: "onenter",
      type: "search degree programs",
      text: h
    });
  };
  return /* @__PURE__ */ d.jsx(
    bg,
    {
      className: "container mt-5",
      "data-searching": n,
      "data-testid": "search-bar",
      children: /* @__PURE__ */ d.jsx(
        "form",
        {
          "data-testid": "search-bar-form",
          className: "uds-form p-0 col-md-6 col-sm-12",
          onSubmit: (h) => {
            h.preventDefault(), r(), a(!0), s = setTimeout(() => a(!1), 500), clearTimeout(s);
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
                  onChange: (h) => {
                    t(h.target.value), p(h.target.value);
                  }
                }
              ) }),
              /* @__PURE__ */ d.jsx("div", { className: "col-sm-12 col-md-6 mt-2 mt-sm-0", children: /* @__PURE__ */ d.jsx(
                Er,
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
kc.propTypes = {
  value: T.string,
  onChange: T.func,
  onSearch: T.func
};
const xg = Xe(fc)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`, vg = Pa`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`, wg = Xe.div.attrs({ className: "container" })`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`, vi = ({
  appPathFolder: e,
  actionUrls: t,
  hasSearchBar: r = !0,
  hasFilters: n = !0,
  hero: a,
  introContent: s,
  programList: p,
  degreesPerPage: h
}) => {
  var G;
  const [{ data: m, loading: f, error: A }, _] = Bl(), [j, $] = dt(!1), [E, S] = dt([]), [I, F] = dt([]), [z, K] = dt(""), Z = (G = p.settings) == null ? void 0 : G.defaultView, C = [Uo, oc].includes(Z) ? Z : Uo, [ie, he] = dt(C), Se = uc(p.dataSource, Oh), { defaultState: Ie } = Zt(gn), { listingPageDefault: $e } = Ie, {
    collegeAcadOrg: Pe,
    departmentCode: pe,
    showInactivePrograms: ce,
    blacklistAcadPlans: Ce,
    program: me,
    cert: Be
  } = p.dataSource, [Ae, _e] = dt({
    ...Rn
  }), [Fe, He] = dt({
    ...Rn
  });
  Uh({
    dataSource: p.dataSource,
    tableView: E,
    programs: m,
    stateFilters: Ae
  }), Ct(() => {
    typeof window < "u" && Vl({
      packageName: "app-degree-pages",
      component: "ListingPage",
      type: "NA",
      configuration: {
        programList: p,
        degreesPerPage: h
      }
    });
  }, []), Ct(() => {
    _(Se);
  }, [Se]), Ct(() => {
    let O = Zh(m || []);
    O = Bs({
      programs: O,
      filters: {
        collegeAcadOrg: Pe,
        departmentCode: pe,
        blacklistAcadPlans: Ce,
        program: me,
        showCerts: Be
      }
    }), F(O), S(O);
  }, [m, h]);
  const We = async (O) => {
    const { acceleratedConcurrent: oe, locations: te, asuLocals: re, keyword: X } = O;
    $(!0), _(Se);
    const se = Bs({
      programs: I,
      filters: {
        collegeAcadOrg: Pe,
        departmentCode: pe,
        acceleratedConcurrent: oe,
        locations: re.length > 0 ? te.concat(Sh) : te,
        keyword: X,
        blacklistAcadPlans: Ce,
        program: me
      }
    });
    _e({ ...O }), He({ ...O }), S(se), $(!1);
  }, q = async () => {
    const O = {
      ...Fe,
      keyword: z
    };
    We(O);
  }, N = (O) => {
    f || j || We(O);
  }, U = async (O) => {
    _e(O);
  }, B = () => {
    _e(Rn), He(Rn), S(I), K("");
  }, x = (O, { value: oe }) => {
    const te = O === "acceleratedConcurrent" ? kh : Fe[O].filter((X) => X.value !== oe), re = {
      ...Fe,
      [O]: te
    };
    We(re);
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(pc, {}),
    /* @__PURE__ */ d.jsx(vg, {}),
    A && /* @__PURE__ */ d.jsx(Gl, { message: sc }),
    a != null && a.hide ? null : /* @__PURE__ */ d.jsx("section", { "data-testid": "hero", children: /* @__PURE__ */ d.jsx(
      Fn,
      {
        image: (a == null ? void 0 : a.image) || $e.hero.image,
        title: {
          text: wh(p.dataSource),
          highlightColor: "gold",
          ...a == null ? void 0 : a.title,
          maxWidth: "100%"
        },
        contents: a == null ? void 0 : a.contents
      }
    ) }),
    /* @__PURE__ */ d.jsxs(xg, { "data-is-loading": f, className: "main-section dg-margin-top", children: [
      (s == null ? void 0 : s.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        bi,
        {
          breadcrumbs: s.breadcrumbs,
          section: a ? a.title.text : ""
        }
      ) }),
      s ? /* @__PURE__ */ d.jsx(
        xi,
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
      r || n ? /* @__PURE__ */ d.jsxs("section", { className: "no-space", children: [
        /* @__PURE__ */ d.jsx(Kh, {}),
        r ? /* @__PURE__ */ d.jsx(
          kc,
          {
            value: z,
            onChange: K,
            onSearch: q
          }
        ) : null,
        n ? /* @__PURE__ */ d.jsx(
          yc,
          {
            value: Ae,
            onChange: U,
            onApply: N,
            onClean: B
          }
        ) : null,
        /* @__PURE__ */ d.jsx(wg, {})
      ] }) : null,
      /* @__PURE__ */ d.jsx("section", { className: "container", children: /* @__PURE__ */ d.jsx("div", { className: "d-flex justify-content-between filter-switch-container", children: n ? /* @__PURE__ */ d.jsx(
        bc,
        {
          value: Fe,
          onRemove: x
        }
      ) : null }) }),
      f || j ? /* @__PURE__ */ d.jsx(Yl, {}) : /* @__PURE__ */ d.jsx(
        Sc,
        {
          dataViewComponent: ie,
          loading: f || j,
          programs: E,
          actionUrls: t,
          degreesPerPage: h
        }
      )
    ] })
  ] });
};
vi.propTypes = {
  appPathFolder: T.string,
  actionUrls: T.shape({
    applyNowUrl: T.string
  }),
  hasSearchBar: T.bool,
  hasFilters: T.bool,
  hero: T.shape(Fn.propTypes),
  introContent: T.shape(xi.propTypes),
  programList: T.shape({
    dataSource: Xl,
    settings: fh
  }),
  degreesPerPage: T.number
};
const Tc = (e) => /* @__PURE__ */ d.jsx(yi, { listPageProps: e, children: /* @__PURE__ */ d.jsx(vi, { ...e }) });
Tc.propTypes = vi.propTypes;
const Sg = Xe.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`, kg = Xe.div`
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
function Tg() {
  return /* @__PURE__ */ d.jsxs(
    Sg,
    {
      className: "container",
      id: gt.affordingCollege.targetIdName,
      "data-testid": "affording-college",
      children: [
        /* @__PURE__ */ d.jsx(kg, {}),
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Affording college" }) }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
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
            ht,
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
            ht,
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
var Cc = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", p = 0; p < arguments.length; p++) {
        var h = arguments[p];
        h && (s = a(s, n(h)));
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
      for (var h in s)
        t.call(s, h) && s[h] && (p = a(p, h));
      return p;
    }
    function a(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Cc);
var Cg = Cc.exports;
const Ag = /* @__PURE__ */ Vo(Cg), _g = Xe.ul`
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
`, Eg = ({
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
      _g,
      {
        className: Ag("", {
          "mb-0": n.length === 0
        }),
        children: r.map(({ label: a, href: s }) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
          Er,
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
    n.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "mt-2 mb-4", children: /* @__PURE__ */ d.jsx(Zo, { cards: n, openedCard: 1 }) })
  ] });
};
function Ac({
  graduateRequirements: e,
  transferRequirements: t,
  isMinorOrCertificate: r,
  additionalRequirements: n,
  minorRequirements: a
}) {
  let s;
  return e || r ? s = r ? "Program requirements" : "Degree requirements" : s = r ? "Program requirements" : "Admission requirements", /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: gt.applicationRequirements.targetIdName,
        "data-testid": "application-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: s }) }),
          e || r ? /* @__PURE__ */ d.jsx(
            "div",
            {
              dangerouslySetInnerHTML: Yt(
                e || a
              )
            }
          ) : Eg({
            transferRequirements: t,
            additionalRequirements: n
          })
        ]
      }
    ),
    e || r ? /* @__PURE__ */ d.jsxs(
      "section",
      {
        id: gt.degreeRequirements.targetIdName,
        "data-testid": "degree-requirements",
        children: [
          /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Admission requirements" }) }),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              dangerouslySetInnerHTML: Yt(
                n
              )
            }
          )
        ]
      }
    ) : null
  ] });
}
Ac.propTypes = {
  graduateRequirements: T.string,
  transferRequirements: T.string,
  isMinorOrCertificate: T.bool,
  additionalRequirements: T.string,
  minorRequirements: T.string
};
const Gr = ({ item: e, type: t }) => {
  const r = en("glance-"), n = () => typeof e == "object" ? e.map((a, s) => {
    const p = ["", "#"].includes(a.url) ? null : a.url;
    let h = "";
    return s > 0 && s < e.length - 1 && (h = ", "), s === e.length - 1 && e.length > 1 && (h = " or "), /* @__PURE__ */ d.jsxs(Js, { children: [
      h,
      /* @__PURE__ */ d.jsx("a", { href: p, rel: "noreferrer", target: "_blank", children: a.text })
    ] }, r.next().value);
  }) : e;
  return /* @__PURE__ */ d.jsxs("li", { children: [
    /* @__PURE__ */ d.jsx("i", { className: `fas fa-${$s[t].icon} fa-li` }),
    /* @__PURE__ */ d.jsxs("strong", { children: [
      $s[t].title,
      ": "
    ] }),
    n()
  ] });
};
Gr.propTypes = {
  item: T.oneOfType([
    T.arrayOf(Mo),
    T.string
  ]),
  type: T.string
};
const _c = ({
  offeredBy: e,
  locations: t,
  firstRequirementMathCourse: r,
  mathIntensity: n,
  timeCommitment: a,
  stemOptText: s
}) => /* @__PURE__ */ d.jsxs(
  "section",
  {
    id: gt.atAGlance.targetIdName,
    "data-testid": "at-aglance",
    children: [
      /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "At a glance: program details" }) }),
      /* @__PURE__ */ d.jsxs("ul", { className: "uds-list fa-ul maroon pt-2 pb-0 pe-0", children: [
        e && /* @__PURE__ */ d.jsx(Gr, { item: [e], type: "offeredBy" }),
        t && /* @__PURE__ */ d.jsx(Gr, { item: t, type: "locations" }),
        r && /* @__PURE__ */ d.jsx(
          Gr,
          {
            item: r,
            type: "firstRequirementMathCourse"
          }
        ),
        n && /* @__PURE__ */ d.jsx(Gr, { item: n, type: "mathIntensity" }),
        a && /* @__PURE__ */ d.jsx(Gr, { item: a, type: "timeCommitment" }),
        s && /* @__PURE__ */ d.jsx(Gr, { item: s, type: "stemOptText" })
      ] })
    ]
  }
);
_c.propTypes = {
  offeredBy: Mo.isRequired,
  locations: T.arrayOf(Mo).isRequired,
  firstRequirementMathCourse: T.string.isRequired,
  mathIntensity: T.string,
  timeCommitment: T.string,
  stemOptText: T.string
};
const Og = `
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;
function Ec({ image: e, learnMoreLink: t, contents: r }) {
  const n = `linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${e.url}')`, a = en("attend-online-");
  return /* @__PURE__ */ d.jsx(
    "section",
    {
      id: gt.attendOnline.targetIdName,
      className: "uds-card-and-image",
      style: {
        backgroundImage: n
      },
      "data-testid": "attend-online",
      children: /* @__PURE__ */ d.jsx("div", { className: "uds-card-and-image-container", children: /* @__PURE__ */ d.jsxs("div", { className: "card card-centered", children: [
        /* @__PURE__ */ d.jsx("i", { className: "fas fa-wifi fa-2x card-icon-top" }),
        /* @__PURE__ */ d.jsx("div", { className: "card-header", children: /* @__PURE__ */ d.jsx("h3", { className: "card-title", children: "Attend online" }) }),
        /* @__PURE__ */ d.jsx("div", { className: "card-body", children: r ? r.map((s) => /* @__PURE__ */ d.jsx("p", { children: s }, a.next().value)) : /* @__PURE__ */ d.jsx("p", { children: Og }) }),
        /* @__PURE__ */ d.jsx("div", { className: "card-button", children: /* @__PURE__ */ d.jsx(
          Er,
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
Ec.propTypes = {
  learnMoreLink: T.string,
  image: Ar,
  contents: T.arrayOf(
    T.shape({
      text: T.string
    })
  )
};
const jg = Xe.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Oc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  jg,
  {
    id: gt.careerOutlook.targetIdName,
    "data-testid": "career-outlook",
    children: /* @__PURE__ */ d.jsx(
      hn,
      {
        headingTag: "H2",
        title: gt.careerOutlook.text,
        contents: e,
        image: t
      }
    )
  }
);
Oc.propTypes = hn.propTypes;
const Rg = Xe.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;
function jc({ content: e }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: gt.changeMajorRequirements.targetIdName,
      className: "change-your-major",
      "data-testid": "change-your-major",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Change your major requirements for current students" }) }),
        /* @__PURE__ */ d.jsx(
          Rg,
          {
            dangerouslySetInnerHTML: Yt(e)
          }
        )
      ]
    }
  );
}
jc.propTypes = {
  content: T.string
};
function Rc({ content: e = "" }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-testid": "custom-text",
      className: "mt-3",
      dangerouslySetInnerHTML: Yt(e)
    }
  );
}
Rc.propTypes = {
  content: T.string
};
const Nc = `
  width: unset !important;
  min-width: unset !important;
`, Ic = Xe.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${Nc}
`, Pc = Xe.i`
  color: #78be21;
  ${Nc}
`;
function Lc({ data: e }) {
  return /* @__PURE__ */ d.jsx("div", { className: "uds-table mb-1", children: /* @__PURE__ */ d.jsxs("table", { children: [
    /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsx("th", { scope: "col", children: "Career" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Growth*" }),
      /* @__PURE__ */ d.jsx("th", { scope: "col", className: "text-end", children: "Median Salary*" })
    ] }) }),
    /* @__PURE__ */ d.jsx("tbody", { children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ d.jsxs("tr", { children: [
      /* @__PURE__ */ d.jsxs("th", { scope: "row", style: { fontWeight: "normal" }, children: [
        /* @__PURE__ */ d.jsx("a", { href: t.career.url, target: "_blank", rel: "noreferrer", children: t.career.text }),
        t.greenOccupation && /* @__PURE__ */ d.jsx(Pc, { className: "fas fa-leaf ms-1" }),
        t.brightOutlook && /* @__PURE__ */ d.jsx(Ic, { className: "fas fa-sun ms-1" })
      ] }),
      /* @__PURE__ */ d.jsxs("td", { className: "text-end", children: [
        +t.growth,
        "%"
      ] }),
      /* @__PURE__ */ d.jsx("td", { className: "text-end", children: t.medianSalary || 0 })
    ] }, t.career.url)) })
  ] }) });
}
Lc.propTypes = {
  data: T.arrayOf(Jl)
};
function Dc({ tableData: e }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: gt.exampleCareers.targetIdName,
      className: "container",
      "data-testid": "example-careers",
      children: [
        /* @__PURE__ */ d.jsx("h3", { children: "Example careers" }),
        /* @__PURE__ */ d.jsx("p", { children: "Example job titles and salaries listed below are not necessarily entry level, and students should take into consideration how years of experience and geographical location may affect pay scales. Some jobs also may require advanced degrees, certifications or state-specific licensure." }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-4 mb-4", children: [
          /* @__PURE__ */ d.jsx(Lc, { data: e }),
          /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("small", { children: "* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)." }) })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "d-flex", children: [
          /* @__PURE__ */ d.jsxs("p", { className: "me-3", children: [
            /* @__PURE__ */ d.jsx(Ic, { className: "fas fa-sun me-1" }),
            "Bright outlook"
          ] }),
          /* @__PURE__ */ d.jsxs("p", { children: [
            /* @__PURE__ */ d.jsx(Pc, { className: "fas fa-leaf me-1" }),
            "Green occupation"
          ] })
        ] })
      ]
    }
  );
}
Dc.propTypes = {
  tableData: T.arrayOf(Jl)
};
const Ng = Xe.ul`
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
`, Ho = ({ id: e, title: t, links: r }) => /* @__PURE__ */ d.jsxs("div", { id: e, className: "mt-4", children: [
  /* @__PURE__ */ d.jsx("h3", { children: t }),
  /* @__PURE__ */ d.jsx("p", { children: "This program allows students to obtain both a bachelor's and master's degree in as little as five years. It is offered as an accelerated bachelor's and master's degree with:" }),
  /* @__PURE__ */ d.jsx(Ng, { className: "mt-3 mb-3", children: r.map((n, a) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: n.url, target: "_blank", rel: "noreferrer", children: n.title }) }, `${n.title}-${a}`)
  )) }),
  /* @__PURE__ */ d.jsx("p", { className: "mb-0", children: "Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply." })
] });
Ho.propTypes = {
  id: T.string,
  title: T.string,
  links: Fo
};
function Mc({ acceleratedLinks: e, concurrentLinks: t }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: gt.flexibleDegreeOptions.targetIdName,
      className: "container",
      "data-testid": "flexible-degree-options",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Flexible degree options" }) }),
        !!e.length && /* @__PURE__ */ d.jsx(
          Ho,
          {
            id: gt.flexibleDegreeOptions.acceleratedId,
            title: "Accelerated program options",
            links: e
          }
        ),
        !!t.length && /* @__PURE__ */ d.jsx(
          Ho,
          {
            id: gt.flexibleDegreeOptions.concurrentId,
            title: "Concurrent degree program",
            links: t
          }
        )
      ]
    }
  );
}
Mc.propTypes = {
  acceleratedLinks: Fo,
  concurrentLinks: Fo
};
const Ig = Xe.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, Fc = ({ contents: e, image: t }) => /* @__PURE__ */ d.jsx(
  Ig,
  {
    id: gt.globalOpportunity.targetIdName,
    "data-testid": "global-opportunity",
    children: /* @__PURE__ */ d.jsx(
      hn,
      {
        headingTag: "H2",
        title: gt.globalOpportunity.text,
        contents: e,
        image: t
      }
    )
  }
);
Fc.propTypes = hn.propTypes;
const $c = ({ url: e, altText: t }) => /* @__PURE__ */ d.jsx("div", { className: "uds-img pt-3 pb-3", "data-testid": "intro-image", children: /* @__PURE__ */ d.jsx("img", { src: e, className: "img-fluid", alt: t }) });
$c.propTypes = { ...pi };
const Pg = (e, t) => {
  if (e !== "youtube")
    return t;
  const r = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, n = t.match(r);
  return n && n[7].length === 11 ? `https://www.youtube.com/embed/${n[7]}` : t;
}, Lg = Xe.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`, zc = ({ type: e, url: t, vttUrl: r, title: n }) => /* @__PURE__ */ d.jsx(Lg, { "data-testid": "intro-video", children: /* @__PURE__ */ d.jsx(
  ai,
  {
    type: e,
    url: Pg(e, t),
    vttUrl: r,
    title: n,
    controls: !0
  }
) });
zc.propTypes = { ...fi };
function Uc({ contents: e = [] }) {
  return /* @__PURE__ */ d.jsx("div", { "data-testid": "market-text", children: e.map((t, r) => /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `mt-3 ${dn(t.cssClass)}`,
      dangerouslySetInnerHTML: Yt(t.text)
    },
    `content-${r + 1}`
  )) });
}
Uc.propTypes = {
  contents: T.arrayOf(Ra)
};
function qc({ cards: e, defaultCards: t }) {
  var r, n, a, s, p, h, m, f, A, _, j, $;
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      className: "container",
      id: gt.nextSteps.targetIdName,
      "data-testid": "next-steps",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: "Next steps to attend ASU" }),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
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
            ht,
            {
              icon: ((p = e == null ? void 0 : e.apply) == null ? void 0 : p.icon) ?? t.apply.icon,
              title: ((h = e == null ? void 0 : e.apply) == null ? void 0 : h.title) ?? t.apply.title,
              body: ((m = e == null ? void 0 : e.apply) == null ? void 0 : m.content) ?? t.apply.content,
              buttons: [
                ((f = e == null ? void 0 : e.apply) == null ? void 0 : f.buttonLink) ?? t.apply.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              icon: ((A = e == null ? void 0 : e.visit) == null ? void 0 : A.icon) ?? t.visit.icon,
              title: ((_ = e == null ? void 0 : e.visit) == null ? void 0 : _.title) ?? t.visit.title,
              body: ((j = e == null ? void 0 : e.visit) == null ? void 0 : j.content) ?? t.visit.content,
              buttons: [
                (($ = e == null ? void 0 : e.visit) == null ? void 0 : $.buttonLink) ?? t.visit.buttonLink
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
qc.propTypes = {
  cards: T.shape({
    learnMore: Vr,
    apply: Vr,
    visit: Vr
  }),
  defaultCards: T.shape({
    learnMore: Vr,
    apply: Vr,
    visit: Vr
  })
};
function Bc({ content: e = "" }) {
  return /* @__PURE__ */ d.jsxs("section", { className: "container", "data-testid": "professional-licensure", children: [
    /* @__PURE__ */ d.jsx("h3", { children: "Professional licensure" }),
    /* @__PURE__ */ d.jsx("p", { dangerouslySetInnerHTML: Yt(e) })
  ] });
}
Bc.propTypes = {
  content: T.node
};
const wo = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content",
  section: "Program contact information"
}, Dg = Xe.ul`
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
function Hc({ department: e, asuOfficeLoc: t, email: r, phone: n }) {
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: gt.programContactInfo.targetIdName,
      "data-testid": "program-contact-info",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: /* @__PURE__ */ d.jsx("span", { className: "highlight-gold", children: "Program contact information" }) }),
        /* @__PURE__ */ d.jsx("p", { children: "If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below." }),
        /* @__PURE__ */ d.jsxs(Dg, { className: "text-maroon", children: [
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
                onClick: () => Mr({ ...wo, text: e.text }),
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
                onClick: () => Mr({ ...wo, text: r.text }),
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
                onClick: () => Mr({ ...wo, text: n }),
                children: n
              }
            )
          ] })
        ] })
      ]
    }
  );
}
Hc.propTypes = {
  department: Xr,
  asuOfficeLoc: T.string,
  email: Xr,
  phone: T.string
};
function Wo({ content: e, stemOptText: t, programNotFound: r }) {
  return /* @__PURE__ */ d.jsxs("div", { "data-testid": "program-description", children: [
    /* @__PURE__ */ d.jsx("h2", { children: r ? "Program not found" : "Program description" }),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        "data-testid": "program-description-body",
        dangerouslySetInnerHTML: Yt(e)
      }
    ),
    t && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx("p", { children: /* @__PURE__ */ d.jsx("strong", { children: yh }) }),
      /* @__PURE__ */ d.jsx(
        "div",
        {
          "data-testid": "stem-opt-text",
          dangerouslySetInnerHTML: Yt(t)
        }
      )
    ] })
  ] });
}
Wo.propTypes = {
  content: T.string,
  stemOptText: T.string,
  programNotFound: T.bool
};
const Mg = "https://changemajor.apps.asu.edu/", Fg = "On-campus students", $g = "Online students", zg = "View major map -", Vs = "View major map";
function Wc({
  onlineMajorMapURL: e = "",
  majorMapOnCampusURL: t = "",
  subPlnMajorMaps: r = [],
  subPlns: n = []
}) {
  const a = (A) => {
    const _ = n.find(
      (j) => j.acadSubPlanCode === A
    );
    return _ ? _.description : "";
  }, s = (A, _, j) => {
    A && j.push({
      href: A,
      text: _
    });
  }, p = [], h = [];
  r.forEach((A) => {
    const _ = a(A.acadSubPlanCode), j = `${zg} ${_}`;
    s(A.url, j, p);
  }), t && s(t, Vs, p), e && s(e, Vs, h);
  const m = (A, _) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("h5", { children: A }),
    /* @__PURE__ */ d.jsx("ul", { className: "mb-3", children: _.map((j) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: j.href, children: j.text }) }, j.href)) })
  ] }), f = () => /* @__PURE__ */ d.jsxs("section", { className: "container ps-0", "data-testid": "required-course", children: [
    /* @__PURE__ */ d.jsx("h4", { children: "Required courses (major map)" }),
    p.length > 0 && m(Fg, p),
    h.length > 0 && m($g, h),
    /* @__PURE__ */ d.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ d.jsx("strong", { children: "What if:" }),
      " See how your courses can be applied to another major and find out how to ",
      /* @__PURE__ */ d.jsx("a", { href: Mg, children: "change your major" })
    ] })
  ] });
  return !(r != null && r.length) && !e && !t ? /* @__PURE__ */ d.jsx("div", {}) : f();
}
Wc.propTypes = {
  onlineMajorMapURL: T.string,
  majorMapOnCampusURL: T.string,
  subPlnMajorMaps: T.arrayOf(
    T.shape({
      campus: T.string,
      acadSubPlanCode: T.string,
      defaultFlag: T.bool,
      url: T.string
    })
  ),
  subPlns: T.arrayOf(
    T.shape({
      acadSubPlanCode: T.string,
      description: T.string
    })
  )
};
const Vc = ({ sectionIntroText: e, cards: t, defaultCards: r }) => {
  var n, a, s, p, h, m, f, A, _, j, $, E, S, I, F, z, K, Z, C, ie, he, Se, Ie, $e, Pe, pe, ce, Ce, me, Be, Ae, _e, Fe, He, We, q, N, U, B, x, G, O;
  return /* @__PURE__ */ d.jsxs(
    "section",
    {
      id: gt.whyChooseAsu.targetIdName,
      className: "container",
      "data-testid": "why-choose-asu",
      children: [
        /* @__PURE__ */ d.jsx("h2", { children: "Why choose ASU" }),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            dangerouslySetInnerHTML: Yt(e)
          }
        ),
        /* @__PURE__ */ d.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((a = (n = t == null ? void 0 : t.faculty) == null ? void 0 : n.image) == null ? void 0 : a.url) ?? r.faculty.image.url,
              imageAltText: ((p = (s = t == null ? void 0 : t.faculty) == null ? void 0 : s.image) == null ? void 0 : p.altText) ?? r.faculty.image.altText,
              title: ((h = t == null ? void 0 : t.faculty) == null ? void 0 : h.title) ?? r.faculty.title,
              body: ((m = t == null ? void 0 : t.faculty) == null ? void 0 : m.text) ?? r.faculty.text,
              buttons: [((f = t == null ? void 0 : t.faculty) == null ? void 0 : f.button) ?? r.faculty.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((_ = (A = t == null ? void 0 : t.programs) == null ? void 0 : A.image) == null ? void 0 : _.url) ?? r.programs.image.url,
              imageAltText: (($ = (j = t == null ? void 0 : t.programs) == null ? void 0 : j.image) == null ? void 0 : $.altText) ?? r.programs.image.altText,
              title: ((E = t == null ? void 0 : t.programs) == null ? void 0 : E.title) ?? r.programs.title,
              body: ((S = t == null ? void 0 : t.programs) == null ? void 0 : S.text) ?? r.programs.text,
              buttons: [((I = t == null ? void 0 : t.programs) == null ? void 0 : I.button) ?? r.programs.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((z = (F = t == null ? void 0 : t.research) == null ? void 0 : F.image) == null ? void 0 : z.url) ?? r.research.image.url,
              imageAltText: ((Z = (K = t == null ? void 0 : t.research) == null ? void 0 : K.image) == null ? void 0 : Z.altText) ?? r.research.image.altText,
              title: ((C = t == null ? void 0 : t.research) == null ? void 0 : C.title) ?? r.research.title,
              body: ((ie = t == null ? void 0 : t.research) == null ? void 0 : ie.text) ?? r.research.text,
              buttons: [((he = t == null ? void 0 : t.research) == null ? void 0 : he.button) ?? r.research.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((Ie = (Se = t == null ? void 0 : t.inclusion) == null ? void 0 : Se.image) == null ? void 0 : Ie.url) ?? r.inclusion.image.url,
              imageAltText: ((Pe = ($e = t == null ? void 0 : t.inclusion) == null ? void 0 : $e.image) == null ? void 0 : Pe.altText) ?? r.inclusion.image.altText,
              title: ((pe = t == null ? void 0 : t.inclusion) == null ? void 0 : pe.title) ?? r.inclusion.title,
              body: ((ce = t == null ? void 0 : t.inclusion) == null ? void 0 : ce.text) ?? r.inclusion.text,
              buttons: [
                ((Ce = t == null ? void 0 : t.inclusion) == null ? void 0 : Ce.button) ?? r.inclusion.button
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((Be = (me = t == null ? void 0 : t.mentors) == null ? void 0 : me.image) == null ? void 0 : Be.url) ?? r.mentors.image.url,
              imageAltText: ((_e = (Ae = t == null ? void 0 : t.mentors) == null ? void 0 : Ae.image) == null ? void 0 : _e.altText) ?? r.mentors.image.altText,
              title: ((Fe = t == null ? void 0 : t.mentors) == null ? void 0 : Fe.title) ?? r.mentors.title,
              body: ((He = t == null ? void 0 : t.mentors) == null ? void 0 : He.text) ?? r.mentors.text,
              buttons: [((We = t == null ? void 0 : t.mentors) == null ? void 0 : We.button) ?? r.mentors.button]
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ d.jsx(
            ht,
            {
              image: ((N = (q = t == null ? void 0 : t.honors) == null ? void 0 : q.image) == null ? void 0 : N.url) ?? r.honors.image.url,
              imageAltText: ((B = (U = t == null ? void 0 : t.honors) == null ? void 0 : U.image) == null ? void 0 : B.altText) ?? r.honors.image.altText,
              title: ((x = t == null ? void 0 : t.honors) == null ? void 0 : x.title) ?? r.honors.title,
              body: ((G = t == null ? void 0 : t.honors) == null ? void 0 : G.text) ?? r.honors.text,
              buttons: [((O = t == null ? void 0 : t.honors) == null ? void 0 : O.button) ?? r.honors.button]
            }
          ) })
        ] })
      ]
    }
  );
};
Vc.propTypes = Ql;
const wi = ({
  appPathFolder: e,
  dataSource: t,
  anchorMenu: r,
  hero: n,
  introContent: a,
  atAGlance: s,
  applicationRequirements: p,
  changeMajorRequirements: h,
  affordingCollege: m,
  flexibleDegreeOptions: f,
  careerOutlook: A,
  exampleCareers: _,
  globalOpportunity: j,
  attendOnline: $,
  programContactInfo: E,
  nextSteps: S,
  whyChooseAsu: I
}) => {
  var ce, Ce, me, Be;
  const [{ data: F, loading: z, error: K }, Z] = Bl(), [C, ie] = dt(pn({})), [he, Se] = dt({ accelerateData: [], concurrentData: [] }), Ie = uc(t, jh), { defaultState: $e } = Zt(gn), { detailPageDefault: Pe } = $e;
  Ct(() => {
    typeof window < "u" && Vl({
      packageName: "app-degree-pages",
      component: "DetailPage",
      type: "NA",
      configuration: {
        dataSource: t
      }
    });
  }, []), Ct(() => {
    Z(Ie);
  }, [Ie]), Ct(() => {
    if (F) {
      const Ae = pn(F);
      ie(Ae), Ae.hasConcurrentOrAccelerateDegrees() && Lh(
        [
          Ae.getAccelerateDegrees(),
          Ae.getConcurrentDegrees()
        ],
        Se
      );
    }
  }, [F]);
  const pe = Hh(r, C);
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(pc, {}),
    K && /* @__PURE__ */ d.jsx(Gl, { message: sc }),
    !(n != null && n.hide) && /* @__PURE__ */ d.jsx("section", { children: /* @__PURE__ */ d.jsx(
      Fn,
      {
        image: (n == null ? void 0 : n.image) || Pe.hero.image,
        title: {
          ...Pe.hero.title,
          text: C.getMajorDesc(),
          ...n == null ? void 0 : n.title
        },
        contents: n == null ? void 0 : n.contents
      }
    ) }),
    !z && Wh(pe) && /* @__PURE__ */ d.jsx(cc, { anchorMenu: pe }),
    /* @__PURE__ */ d.jsxs(fc, { as: "div", "data-is-loading": z, className: "main-section", children: [
      z && /* @__PURE__ */ d.jsx(Yl, {}),
      !z && (F != null && F.error ? /* @__PURE__ */ d.jsx("section", { className: "container mt-4 mb-0", children: /* @__PURE__ */ d.jsx(
        Wo,
        {
          content: bh,
          programNotFound: !0
        }
      ) }) : /* @__PURE__ */ d.jsxs("section", { className: "container mt-4 mb-0", children: [
        (a == null ? void 0 : a.breadcrumbs) && /* @__PURE__ */ d.jsx("div", { className: "row col-12", children: /* @__PURE__ */ d.jsx(
          bi,
          {
            breadcrumbs: a.breadcrumbs,
            section: n ? n.title.text : C.getMajorDesc()
          }
        ) }),
        /* @__PURE__ */ d.jsxs("div", { className: "row flex-column-reverse flex-sm-row", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-7 col-lg-7", children: [
            /* @__PURE__ */ d.jsxs("section", { className: "intro", children: [
              !C.isValidActiveProgram() && /* @__PURE__ */ d.jsx(Rc, { content: C.getAsuCustomText() }),
              !(a != null && a.hideMarketText) && ((a == null ? void 0 : a.contents) || C.getMarketText()) && /* @__PURE__ */ d.jsx(
                Uc,
                {
                  contents: (a == null ? void 0 : a.contents) || [
                    { text: C.getMarketText() }
                  ]
                }
              ),
              !(a != null && a.hideProgramDesc) && /* @__PURE__ */ d.jsx(
                Wo,
                {
                  content: C.getFullDescription(),
                  stemOptText: C.getStemOptText()
                }
              )
            ] }),
            !(s != null && s.hide) && /* @__PURE__ */ d.jsx(
              _c,
              {
                offeredBy: (s == null ? void 0 : s.offeredBy) || {
                  text: C.getCollegeDesc(),
                  url: C.getCollegeUrl()
                },
                locations: (s == null ? void 0 : s.locations) || Bh(C),
                firstRequirementMathCourse: (s == null ? void 0 : s.firstRequirementMathCourse) || C.getMinMathReq(),
                mathIntensity: (s == null ? void 0 : s.mathIntensity) || C.getMathIntensity(),
                stemOptText: C.hasStemOptText()
              }
            ),
            !(a != null && a.hideRequiredCourses) && !C.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
              Wc,
              {
                onlineMajorMapURL: C.getOnlineMajorMapURL(),
                majorMapOnCampusURL: C.getGeneralDegreeMajorMap(),
                subPlnMajorMaps: C.getSubPlnMajorMaps(),
                subPlns: C.getSubPln()
              }
            ),
            !(p != null && p.hide) && /* @__PURE__ */ d.jsx(
              Ac,
              {
                graduateRequirements: C.isGradProgram() ? C.getGraduateRequirements() : null,
                isMinorOrCertificate: C.isMinorOrCertificate(),
                minorRequirements: C.getMinorCourseRequirements(),
                additionalRequirements: C.getAdmissionsRequirementsText(),
                transferRequirements: C.getTransferAdmission()
              }
            ),
            !(h != null && h.hide) && !C.isMinorOrCertificate() && !C.isGradProgram() && /* @__PURE__ */ d.jsx(jc, { content: C.getChangeMajor() })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { className: "col col-sm-12 col-md-5 col-lg-5", children: [
            (a == null ? void 0 : a.video) && /* @__PURE__ */ d.jsx(
              zc,
              {
                type: a.video.type,
                url: a.video.url,
                vttUrl: a.video.vttUrl,
                title: a.video.title
              }
            ),
            !(a != null && a.video) && /* @__PURE__ */ d.jsx(
              $c,
              {
                url: ((ce = a == null ? void 0 : a.image) == null ? void 0 : ce.url) || Pe.introContent.image.url,
                altText: ((Ce = a == null ? void 0 : a.image) == null ? void 0 : Ce.altText) || Pe.introContent.image.altText
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
          !(S != null && S.hide) && !C.isMinorOrCertificate() && /* @__PURE__ */ d.jsx(
            qc,
            {
              cards: S == null ? void 0 : S.cards,
              defaultCards: Pe.nextSteps.cards
            }
          ),
          !(m != null && m.hide) && /* @__PURE__ */ d.jsx(Tg, {}),
          !(f != null && f.hide) && C.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ d.jsx(
            Mc,
            {
              acceleratedLinks: Us(
                he.accelerateData
              ),
              concurrentLinks: Us(
                he.concurrentData
              )
            }
          ),
          !(A != null && A.hide) && C.getAsuCareerOpportunity() && /* @__PURE__ */ d.jsx(
            Oc,
            {
              image: (A == null ? void 0 : A.image) || Pe.careerOutlook.image,
              contents: [{ text: C.getAsuCareerOpportunity() }]
            }
          ),
          !(_ != null && _.hide) && C.hasCareerData() && /* @__PURE__ */ d.jsx(
            Dc,
            {
              tableData: Rh(C.getCareerData())
            }
          ),
          C.getProfessionalLicensureText() && /* @__PURE__ */ d.jsx(
            Bc,
            {
              content: C.getProfessionalLicensureText()
            }
          ),
          !(j != null && j.hide) && C.getGlobalExp() && /* @__PURE__ */ d.jsx(
            Fc,
            {
              contents: [{ text: C.getGlobalExp() }],
              image: (j == null ? void 0 : j.image) || Pe.globalOpportunity.image
            }
          ),
          !(I != null && I.hide) && /* @__PURE__ */ d.jsx(
            Vc,
            {
              sectionIntroText: (I == null ? void 0 : I.sectionIntroText) || Pe.whyChooseAsu.sectionIntroText,
              cards: I == null ? void 0 : I.cards,
              defaultCards: Pe.whyChooseAsu.cards
            }
          ),
          !($ != null && $.hide) && C.isOnline() && /* @__PURE__ */ d.jsx(
            Ec,
            {
              learnMoreLink: C.getCurriculumUrl(),
              image: ($ == null ? void 0 : $.image) || Pe.attendOnline.image
            }
          )
        ] }),
        !(E != null && E.hide) && /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col col-sm-12 col-md-6 col-lg-6 ", children: /* @__PURE__ */ d.jsx(
          Hc,
          {
            department: {
              text: C.getDepartmentName(),
              url: ((me = E == null ? void 0 : E.department) == null ? void 0 : me.url) || C.getPlanUrl()
            },
            email: {
              text: C.getEmailAddress(),
              url: ((Be = E == null ? void 0 : E.email) == null ? void 0 : Be.url) || C.getEmailAddress()
            },
            asuOfficeLoc: C.getAsuOfficeLoc(),
            phone: C.getPhone()
          }
        ) }) })
      ] }))
    ] })
  ] });
};
wi.propTypes = {
  appPathFolder: T.string,
  dataSource: Xl,
  anchorMenu: T.shape(hi),
  hero: T.shape(Fn.propTypes),
  introContent: T.shape({
    hideMarketText: T.bool,
    hideProgramDesc: T.bool,
    hideRequiredCourses: T.bool,
    breadcrumbs: ma.arrayOf(Xr),
    // eslint-disable-next-line react/forbid-prop-types
    contents: ma.arrayOf(T.object),
    video: dh,
    image: Ar
  }),
  atAGlance: T.shape({
    hide: T.bool,
    offeredBy: Xr,
    locations: ma.arrayOf(Xr),
    firstRequirementMathCourse: T.string,
    mathIntensity: T.string,
    timeCommitment: T.string
  }),
  applicationRequirements: T.shape({ hide: T.bool }),
  changeMajorRequirements: T.shape({ hide: T.bool }),
  affordingCollege: T.shape({ hide: T.bool }),
  flexibleDegreeOptions: T.shape({ hide: T.bool }),
  careerOutlook: T.shape({
    hide: T.bool,
    image: Ar
  }),
  exampleCareers: T.shape({ hide: T.bool }),
  globalOpportunity: T.shape({
    hide: T.bool,
    image: Ar
  }),
  attendOnline: T.shape({
    hide: T.bool,
    image: Ar
  }),
  programContactInfo: T.shape({
    hide: T.bool,
    department: T.string,
    email: T.string
  }),
  nextSteps: T.shape({
    hide: T.bool,
    cards: T.arrayOf(Vr)
  }),
  whyChooseAsu: T.shape(Ql)
};
const Gc = (e) => /* @__PURE__ */ d.jsx(yi, { detailPageProps: e, children: /* @__PURE__ */ d.jsx(wi, { ...e }) });
Gc.propTypes = wi.propTypes;
var Yc, Gs = Qs;
Yc = Gs.createRoot, Gs.hydrateRoot;
const Zc = (e, t, r) => {
  const n = document.querySelector(r);
  Yc(n).render(mt.createElement(e, t));
}, Bg = ({ targetSelector: e, props: t }) => {
  Zc(Tc, t, e);
}, Hg = ({ targetSelector: e, props: t }) => {
  Zc(Gc, t, e);
};
export {
  Gc as DetailPage,
  Tc as ListingPage,
  Bg as initListingPage,
  Hg as initProgramDetailPage
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
/*! @license DOMPurify 2.5.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.8/LICENSE */
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
