import rt, { Component as Js, createContext as el, forwardRef as Da, useRef as Zi, useImperativeHandle as tl, useId as rl, useState as Ir, useEffect as sr, useContext as Yt, createElement as Ma } from "react";
import Fa from "react-dom";
function za(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $a = { exports: {} }, Jr = {};
var Lo;
function nl() {
  if (Lo) return Jr;
  Lo = 1;
  var e = rt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, f, p) {
    var x, S = {}, j = null, B = null;
    p !== void 0 && (j = "" + p), f.key !== void 0 && (j = "" + f.key), f.ref !== void 0 && (B = f.ref);
    for (x in f) n.call(f, x) && !s.hasOwnProperty(x) && (S[x] = f[x]);
    if (m && m.defaultProps) for (x in f = m.defaultProps, f) S[x] === void 0 && (S[x] = f[x]);
    return { $$typeof: t, type: m, key: j, ref: B, props: S, _owner: o.current };
  }
  return Jr.Fragment = r, Jr.jsx = d, Jr.jsxs = d, Jr;
}
$a.exports = nl();
var tt = $a.exports;
function Xi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ba = { exports: {} }, en = {}, Do;
function il() {
  if (Do) return en;
  Do = 1;
  var e = rt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, f, p) {
    var x, S = {}, j = null, B = null;
    p !== void 0 && (j = "" + p), f.key !== void 0 && (j = "" + f.key), f.ref !== void 0 && (B = f.ref);
    for (x in f) n.call(f, x) && !s.hasOwnProperty(x) && (S[x] = f[x]);
    if (m && m.defaultProps) for (x in f = m.defaultProps, f) S[x] === void 0 && (S[x] = f[x]);
    return { $$typeof: t, type: m, key: j, ref: B, props: S, _owner: o.current };
  }
  return en.Fragment = r, en.jsx = d, en.jsxs = d, en;
}
Ba.exports = il();
var z = Ba.exports, Va = { exports: {} }, pi, Mo;
function ol() {
  if (Mo) return pi;
  Mo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return pi = e, pi;
}
var hi, Fo;
function al() {
  if (Fo) return hi;
  Fo = 1;
  var e = ol();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, hi = function() {
    function n(d, m, f, p, x, S) {
      if (S !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
      }
    }
    n.isRequired = n;
    function o() {
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
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, hi;
}
Va.exports = al()();
var sl = Va.exports;
const l = /* @__PURE__ */ Xi(sl), ll = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), gi = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), Ua = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.string,
    header: l.string,
    body: l.string
  })
}), Ki = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var Wa = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", d = 0; d < arguments.length; d++) {
        var m = arguments[d];
        m && (s = o(s, n(m)));
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
        t.call(s, m) && s[m] && (d = o(d, m));
      return d;
    }
    function o(s, d) {
      return d ? s ? s + " " + d : s + d : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Wa);
var ul = Wa.exports;
const Pr = /* @__PURE__ */ Xi(ul), cl = () => {
  const [e, t] = Ir(), [r, n] = Ir(!1), [o, s] = Ir(!1), [d, m] = Ir("");
  return sr(() => {
    d && (() => {
      s(null), n(!0);
      try {
        fetch(d).then((f) => f.json()).then((f) => {
          t(f), n(!1);
        }).catch((f) => {
          s(f), n(!1);
        });
      } catch (f) {
        s(f);
      }
    })();
  }, [d]), [{ data: e, loading: r, error: o }, m];
}, dl = (e) => (e || []).join(" ");
function ir(e) {
  "@babel/helpers - typeof";
  return ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ir(e);
}
function Ai(e, t) {
  return Ai = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, Ai(e, t);
}
function fl() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Mn(e, t, r) {
  return fl() ? Mn = Reflect.construct : Mn = function(n, o, s) {
    var d = [null];
    d.push.apply(d, o);
    var m = Function.bind.apply(n, d), f = new m();
    return s && Ai(f, s.prototype), f;
  }, Mn.apply(null, arguments);
}
function Rt(e) {
  return pl(e) || hl(e) || gl(e) || ml();
}
function pl(e) {
  if (Array.isArray(e)) return Ri(e);
}
function hl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function gl(e, t) {
  if (e) {
    if (typeof e == "string") return Ri(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ri(e, t);
  }
}
function Ri(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ml() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var yl = Object.hasOwnProperty, zo = Object.setPrototypeOf, vl = Object.isFrozen, bl = Object.getPrototypeOf, wl = Object.getOwnPropertyDescriptor, lt = Object.freeze, bt = Object.seal, xl = Object.create, Ha = typeof Reflect < "u" && Reflect, Un = Ha.apply, Oi = Ha.construct;
Un || (Un = function(e, t, r) {
  return e.apply(t, r);
});
lt || (lt = function(e) {
  return e;
});
bt || (bt = function(e) {
  return e;
});
Oi || (Oi = function(e, t) {
  return Mn(e, Rt(t));
});
var Sl = wt(Array.prototype.forEach), $o = wt(Array.prototype.pop), tn = wt(Array.prototype.push), Fn = wt(String.prototype.toLowerCase), mi = wt(String.prototype.toString), Bo = wt(String.prototype.match), At = wt(String.prototype.replace), kl = wt(String.prototype.indexOf), _l = wt(String.prototype.trim), it = wt(RegExp.prototype.test), yi = Cl(TypeError);
function wt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return Un(e, t, n);
  };
}
function Cl(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Oi(e, r);
  };
}
function ve(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : Fn, zo && zo(e, null);
  for (var o = t.length; o--; ) {
    var s = t[o];
    if (typeof s == "string") {
      var d = r(s);
      d !== s && (vl(t) || (t[o] = d), s = d);
    }
    e[s] = !0;
  }
  return e;
}
function Sr(e) {
  var t = xl(null), r;
  for (r in e)
    Un(yl, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function En(e, t) {
  for (; e !== null; ) {
    var r = wl(e, t);
    if (r) {
      if (r.get)
        return wt(r.get);
      if (typeof r.value == "function")
        return wt(r.value);
    }
    e = bl(e);
  }
  function n(o) {
    return console.warn("fallback value for", o), null;
  }
  return n;
}
var Vo = lt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), vi = lt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), bi = lt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), El = lt(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), wi = lt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Tl = lt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Uo = lt(["#text"]), Wo = lt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), xi = lt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ho = lt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tn = lt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Al = bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Rl = bt(/<%[\w\W]*|[\w\W]*%>/gm), Ol = bt(/\${[\w\W]*}/gm), Nl = bt(/^data-[\-\w.\u00B7-\uFFFF]/), Il = bt(/^aria-[\-\w]+$/), jl = bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Pl = bt(/^(?:\w+script|data):/i), Ll = bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Dl = bt(/^html$/i), Ml = bt(/^[a-z][.\w]*(-[.\w]+)+$/i), Fl = function() {
  return typeof window > "u" ? null : window;
}, zl = function(e, t) {
  if (ir(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var r = null, n = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(n) && (r = t.currentScript.getAttribute(n));
  var o = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(o, {
      createHTML: function(s) {
        return s;
      },
      createScriptURL: function(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function qa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fl(), t = function(k) {
    return qa(k);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, o = e.DocumentFragment, s = e.HTMLTemplateElement, d = e.Node, m = e.Element, f = e.NodeFilter, p = e.NamedNodeMap, x = p === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : p, S = e.HTMLFormElement, j = e.DOMParser, B = e.trustedTypes, C = m.prototype, w = En(C, "cloneNode"), I = En(C, "nextSibling"), M = En(C, "childNodes"), $ = En(C, "parentNode");
  if (typeof s == "function") {
    var W = n.createElement("template");
    W.content && W.content.ownerDocument && (n = W.content.ownerDocument);
  }
  var H = zl(B, r), _ = H ? H.createHTML("") : "", oe = n, pe = oe.implementation, _e = oe.createNodeIterator, Ie = oe.createDocumentFragment, Be = oe.getElementsByTagName, Xe = r.importNode, he = {};
  try {
    he = Sr(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var we = {};
  t.isSupported = typeof $ == "function" && pe && pe.createHTMLDocument !== void 0 && he !== 9;
  var Ee = Al, xe = Rl, Ke = Ol, je = Nl, ke = Il, Fe = Pl, Ye = Ll, Ze = Ml, L = jl, O = null, P = ve({}, [].concat(Rt(Vo), Rt(vi), Rt(bi), Rt(wi), Rt(Uo))), V = null, y = ve({}, [].concat(Rt(Wo), Rt(xi), Rt(Ho), Rt(Tn))), Z = Object.seal(Object.create(null, {
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
  })), E = null, re = null, J = !0, K = !0, G = !1, ne = !0, ue = !1, ee = !0, le = !1, te = !1, fe = !1, ze = !1, ce = !1, Qe = !1, Ve = !0, ge = !1, U = "user-content-", ie = !0, nt = !1, Je = {}, Ce = null, cr = ve({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), dr = null, Ar = ve({}, ["audio", "video", "img", "source", "image", "track"]), Pt = null, Lt = ve({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Zt = "http://www.w3.org/1998/Math/MathML", Xt = "http://www.w3.org/2000/svg", ft = "http://www.w3.org/1999/xhtml", Nt = ft, fr = !1, ot = null, pr = ve({}, [Zt, Xt, ft], mi), ut, Te = ["application/xhtml+xml", "text/html"], Dt = "text/html", Ue, ct = null, vt = n.createElement("form"), Mt = function(k) {
    return k instanceof RegExp || k instanceof Function;
  }, pt = function(k) {
    ct && ct === k || ((!k || ir(k) !== "object") && (k = {}), k = Sr(k), ut = // eslint-disable-next-line unicorn/prefer-includes
    Te.indexOf(k.PARSER_MEDIA_TYPE) === -1 ? ut = Dt : ut = k.PARSER_MEDIA_TYPE, Ue = ut === "application/xhtml+xml" ? mi : Fn, O = "ALLOWED_TAGS" in k ? ve({}, k.ALLOWED_TAGS, Ue) : P, V = "ALLOWED_ATTR" in k ? ve({}, k.ALLOWED_ATTR, Ue) : y, ot = "ALLOWED_NAMESPACES" in k ? ve({}, k.ALLOWED_NAMESPACES, mi) : pr, Pt = "ADD_URI_SAFE_ATTR" in k ? ve(
      Sr(Lt),
      // eslint-disable-line indent
      k.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Ue
      // eslint-disable-line indent
    ) : Lt, dr = "ADD_DATA_URI_TAGS" in k ? ve(
      Sr(Ar),
      // eslint-disable-line indent
      k.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Ue
      // eslint-disable-line indent
    ) : Ar, Ce = "FORBID_CONTENTS" in k ? ve({}, k.FORBID_CONTENTS, Ue) : cr, E = "FORBID_TAGS" in k ? ve({}, k.FORBID_TAGS, Ue) : {}, re = "FORBID_ATTR" in k ? ve({}, k.FORBID_ATTR, Ue) : {}, Je = "USE_PROFILES" in k ? k.USE_PROFILES : !1, J = k.ALLOW_ARIA_ATTR !== !1, K = k.ALLOW_DATA_ATTR !== !1, G = k.ALLOW_UNKNOWN_PROTOCOLS || !1, ne = k.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ue = k.SAFE_FOR_TEMPLATES || !1, ee = k.SAFE_FOR_XML !== !1, le = k.WHOLE_DOCUMENT || !1, ze = k.RETURN_DOM || !1, ce = k.RETURN_DOM_FRAGMENT || !1, Qe = k.RETURN_TRUSTED_TYPE || !1, fe = k.FORCE_BODY || !1, Ve = k.SANITIZE_DOM !== !1, ge = k.SANITIZE_NAMED_PROPS || !1, ie = k.KEEP_CONTENT !== !1, nt = k.IN_PLACE || !1, L = k.ALLOWED_URI_REGEXP || L, Nt = k.NAMESPACE || ft, Z = k.CUSTOM_ELEMENT_HANDLING || {}, k.CUSTOM_ELEMENT_HANDLING && Mt(k.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Z.tagNameCheck = k.CUSTOM_ELEMENT_HANDLING.tagNameCheck), k.CUSTOM_ELEMENT_HANDLING && Mt(k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Z.attributeNameCheck = k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), k.CUSTOM_ELEMENT_HANDLING && typeof k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Z.allowCustomizedBuiltInElements = k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ue && (K = !1), ce && (ze = !0), Je && (O = ve({}, Rt(Uo)), V = [], Je.html === !0 && (ve(O, Vo), ve(V, Wo)), Je.svg === !0 && (ve(O, vi), ve(V, xi), ve(V, Tn)), Je.svgFilters === !0 && (ve(O, bi), ve(V, xi), ve(V, Tn)), Je.mathMl === !0 && (ve(O, wi), ve(V, Ho), ve(V, Tn))), k.ADD_TAGS && (O === P && (O = Sr(O)), ve(O, k.ADD_TAGS, Ue)), k.ADD_ATTR && (V === y && (V = Sr(V)), ve(V, k.ADD_ATTR, Ue)), k.ADD_URI_SAFE_ATTR && ve(Pt, k.ADD_URI_SAFE_ATTR, Ue), k.FORBID_CONTENTS && (Ce === cr && (Ce = Sr(Ce)), ve(Ce, k.FORBID_CONTENTS, Ue)), ie && (O["#text"] = !0), le && ve(O, ["html", "head", "body"]), O.table && (ve(O, ["tbody"]), delete E.tbody), lt && lt(k), ct = k);
  }, hr = ve({}, ["mi", "mo", "mn", "ms", "mtext"]), Kt = ve({}, ["annotation-xml"]), gr = ve({}, ["title", "style", "font", "a", "script"]), Ft = ve({}, vi);
  ve(Ft, bi), ve(Ft, El);
  var Qt = ve({}, wi);
  ve(Qt, Tl);
  var Rr = function(k) {
    var Q = $(k);
    (!Q || !Q.tagName) && (Q = {
      namespaceURI: Nt,
      tagName: "template"
    });
    var q = Fn(k.tagName), Se = Fn(Q.tagName);
    return ot[k.namespaceURI] ? k.namespaceURI === Xt ? Q.namespaceURI === ft ? q === "svg" : Q.namespaceURI === Zt ? q === "svg" && (Se === "annotation-xml" || hr[Se]) : !!Ft[q] : k.namespaceURI === Zt ? Q.namespaceURI === ft ? q === "math" : Q.namespaceURI === Xt ? q === "math" && Kt[Se] : !!Qt[q] : k.namespaceURI === ft ? Q.namespaceURI === Xt && !Kt[Se] || Q.namespaceURI === Zt && !hr[Se] ? !1 : !Qt[q] && (gr[q] || !Ft[q]) : !!(ut === "application/xhtml+xml" && ot[k.namespaceURI]) : !1;
  }, xt = function(k) {
    tn(t.removed, {
      element: k
    });
    try {
      k.parentNode.removeChild(k);
    } catch {
      try {
        k.outerHTML = _;
      } catch {
        k.remove();
      }
    }
  }, Jt = function(k, Q) {
    try {
      tn(t.removed, {
        attribute: Q.getAttributeNode(k),
        from: Q
      });
    } catch {
      tn(t.removed, {
        attribute: null,
        from: Q
      });
    }
    if (Q.removeAttribute(k), k === "is" && !V[k])
      if (ze || ce)
        try {
          xt(Q);
        } catch {
        }
      else
        try {
          Q.setAttribute(k, "");
        } catch {
        }
  }, zt = function(k) {
    var Q, q;
    if (fe)
      k = "<remove></remove>" + k;
    else {
      var Se = Bo(k, /^[\r\n\t ]+/);
      q = Se && Se[0];
    }
    ut === "application/xhtml+xml" && Nt === ft && (k = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + k + "</body></html>");
    var Me = H ? H.createHTML(k) : k;
    if (Nt === ft)
      try {
        Q = new j().parseFromString(Me, ut);
      } catch {
      }
    if (!Q || !Q.documentElement) {
      Q = pe.createDocument(Nt, "template", null);
      try {
        Q.documentElement.innerHTML = fr ? _ : Me;
      } catch {
      }
    }
    var Pe = Q.body || Q.documentElement;
    return k && q && Pe.insertBefore(n.createTextNode(q), Pe.childNodes[0] || null), Nt === ft ? Be.call(Q, le ? "html" : "body")[0] : le ? Q.documentElement : Pe;
  }, mr = function(k) {
    return _e.call(
      k.ownerDocument || k,
      k,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, $t = function(k) {
    return k instanceof S && (typeof k.nodeName != "string" || typeof k.textContent != "string" || typeof k.removeChild != "function" || !(k.attributes instanceof x) || typeof k.removeAttribute != "function" || typeof k.setAttribute != "function" || typeof k.namespaceURI != "string" || typeof k.insertBefore != "function" || typeof k.hasChildNodes != "function");
  }, St = function(k) {
    return ir(d) === "object" ? k instanceof d : k && ir(k) === "object" && typeof k.nodeType == "number" && typeof k.nodeName == "string";
  }, ht = function(k, Q, q) {
    we[k] && Sl(we[k], function(Se) {
      Se.call(t, Q, q, ct);
    });
  }, It = function(k) {
    var Q;
    if (ht("beforeSanitizeElements", k, null), $t(k) || it(/[\u0080-\uFFFF]/, k.nodeName))
      return xt(k), !0;
    var q = Ue(k.nodeName);
    if (ht("uponSanitizeElement", k, {
      tagName: q,
      allowedTags: O
    }), k.hasChildNodes() && !St(k.firstElementChild) && (!St(k.content) || !St(k.content.firstElementChild)) && it(/<[/\w]/g, k.innerHTML) && it(/<[/\w]/g, k.textContent) || q === "select" && it(/<template/i, k.innerHTML) || k.nodeType === 7 || ee && k.nodeType === 8 && it(/<[/\w]/g, k.data))
      return xt(k), !0;
    if (!O[q] || E[q]) {
      if (!E[q] && er(q) && (Z.tagNameCheck instanceof RegExp && it(Z.tagNameCheck, q) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(q)))
        return !1;
      if (ie && !Ce[q]) {
        var Se = $(k) || k.parentNode, Me = M(k) || k.childNodes;
        if (Me && Se)
          for (var Pe = Me.length, He = Pe - 1; He >= 0; --He) {
            var dt = w(Me[He], !0);
            dt.__removalCount = (k.__removalCount || 0) + 1, Se.insertBefore(dt, I(k));
          }
      }
      return xt(k), !0;
    }
    return k instanceof m && !Rr(k) || (q === "noscript" || q === "noembed" || q === "noframes") && it(/<\/no(script|embed|frames)/i, k.innerHTML) ? (xt(k), !0) : (ue && k.nodeType === 3 && (Q = k.textContent, Q = At(Q, Ee, " "), Q = At(Q, xe, " "), Q = At(Q, Ke, " "), k.textContent !== Q && (tn(t.removed, {
      element: k.cloneNode()
    }), k.textContent = Q)), ht("afterSanitizeElements", k, null), !1);
  }, Or = function(k, Q, q) {
    if (Ve && (Q === "id" || Q === "name") && (q in n || q in vt))
      return !1;
    if (!(K && !re[Q] && it(je, Q)) && !(J && it(ke, Q))) {
      if (!V[Q] || re[Q]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(er(k) && (Z.tagNameCheck instanceof RegExp && it(Z.tagNameCheck, k) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(k)) && (Z.attributeNameCheck instanceof RegExp && it(Z.attributeNameCheck, Q) || Z.attributeNameCheck instanceof Function && Z.attributeNameCheck(Q)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          Q === "is" && Z.allowCustomizedBuiltInElements && (Z.tagNameCheck instanceof RegExp && it(Z.tagNameCheck, q) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(q)))
        ) return !1;
      } else if (!Pt[Q] && !it(L, At(q, Ye, "")) && !((Q === "src" || Q === "xlink:href" || Q === "href") && k !== "script" && kl(q, "data:") === 0 && dr[k]) && !(G && !it(Fe, At(q, Ye, ""))) && q)
        return !1;
    }
    return !0;
  }, er = function(k) {
    return k !== "annotation-xml" && Bo(k, Ze);
  }, Bt = function(k) {
    var Q, q, Se, Me;
    ht("beforeSanitizeAttributes", k, null);
    var Pe = k.attributes;
    if (Pe) {
      var He = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: V
      };
      for (Me = Pe.length; Me--; ) {
        Q = Pe[Me];
        var dt = Q, at = dt.name, et = dt.namespaceURI;
        if (q = at === "value" ? Q.value : _l(Q.value), Se = Ue(at), He.attrName = Se, He.attrValue = q, He.keepAttr = !0, He.forceKeepAttr = void 0, ht("uponSanitizeAttribute", k, He), q = He.attrValue, !He.forceKeepAttr && (Jt(at, k), !!He.keepAttr)) {
          if (!ne && it(/\/>/i, q)) {
            Jt(at, k);
            continue;
          }
          ue && (q = At(q, Ee, " "), q = At(q, xe, " "), q = At(q, Ke, " "));
          var kt = Ue(k.nodeName);
          if (Or(kt, Se, q)) {
            if (ge && (Se === "id" || Se === "name") && (Jt(at, k), q = U + q), ee && it(/((--!?|])>)|<\/(style|title)/i, q)) {
              Jt(at, k);
              continue;
            }
            if (H && ir(B) === "object" && typeof B.getAttributeType == "function" && !et)
              switch (B.getAttributeType(kt, Se)) {
                case "TrustedHTML": {
                  q = H.createHTML(q);
                  break;
                }
                case "TrustedScriptURL": {
                  q = H.createScriptURL(q);
                  break;
                }
              }
            try {
              et ? k.setAttributeNS(et, at, q) : k.setAttribute(at, q), $t(k) ? xt(k) : $o(t.removed);
            } catch {
            }
          }
        }
      }
      ht("afterSanitizeAttributes", k, null);
    }
  }, Vt = function k(Q) {
    var q, Se = mr(Q);
    for (ht("beforeSanitizeShadowDOM", Q, null); q = Se.nextNode(); )
      ht("uponSanitizeShadowNode", q, null), !It(q) && (q.content instanceof o && k(q.content), Bt(q));
    ht("afterSanitizeShadowDOM", Q, null);
  };
  return t.sanitize = function(k) {
    var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q, Se, Me, Pe, He;
    if (fr = !k, fr && (k = "<!-->"), typeof k != "string" && !St(k))
      if (typeof k.toString == "function") {
        if (k = k.toString(), typeof k != "string")
          throw yi("dirty is not a string, aborting");
      } else
        throw yi("toString is not a function");
    if (!t.isSupported) {
      if (ir(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof k == "string")
          return e.toStaticHTML(k);
        if (St(k))
          return e.toStaticHTML(k.outerHTML);
      }
      return k;
    }
    if (te || pt(Q), t.removed = [], typeof k == "string" && (nt = !1), nt) {
      if (k.nodeName) {
        var dt = Ue(k.nodeName);
        if (!O[dt] || E[dt])
          throw yi("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (k instanceof d)
      q = zt("<!---->"), Se = q.ownerDocument.importNode(k, !0), Se.nodeType === 1 && Se.nodeName === "BODY" || Se.nodeName === "HTML" ? q = Se : q.appendChild(Se);
    else {
      if (!ze && !ue && !le && // eslint-disable-next-line unicorn/prefer-includes
      k.indexOf("<") === -1)
        return H && Qe ? H.createHTML(k) : k;
      if (q = zt(k), !q)
        return ze ? null : Qe ? _ : "";
    }
    q && fe && xt(q.firstChild);
    for (var at = mr(nt ? k : q); Me = at.nextNode(); )
      Me.nodeType === 3 && Me === Pe || It(Me) || (Me.content instanceof o && Vt(Me.content), Bt(Me), Pe = Me);
    if (Pe = null, nt)
      return k;
    if (ze) {
      if (ce)
        for (He = Ie.call(q.ownerDocument); q.firstChild; )
          He.appendChild(q.firstChild);
      else
        He = q;
      return (V.shadowroot || V.shadowrootmod) && (He = Xe.call(r, He, !0)), He;
    }
    var et = le ? q.outerHTML : q.innerHTML;
    return le && O["!doctype"] && q.ownerDocument && q.ownerDocument.doctype && q.ownerDocument.doctype.name && it(Dl, q.ownerDocument.doctype.name) && (et = "<!DOCTYPE " + q.ownerDocument.doctype.name + `>
` + et), ue && (et = At(et, Ee, " "), et = At(et, xe, " "), et = At(et, Ke, " ")), H && Qe ? H.createHTML(et) : et;
  }, t.setConfig = function(k) {
    pt(k), te = !0;
  }, t.clearConfig = function() {
    ct = null, te = !1;
  }, t.isValidAttribute = function(k, Q, q) {
    ct || pt({});
    var Se = Ue(k), Me = Ue(Q);
    return Or(Se, Me, q);
  }, t.addHook = function(k, Q) {
    typeof Q == "function" && (we[k] = we[k] || [], tn(we[k], Q));
  }, t.removeHook = function(k) {
    if (we[k])
      return $o(we[k]);
  }, t.removeHooks = function(k) {
    we[k] && (we[k] = []);
  }, t.removeAllHooks = function() {
    we = {};
  }, t;
}
var $l = qa();
const jr = (e) => ({ __html: $l.sanitize(e) });
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
const Bl = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: o = "",
  text: s = "",
  region: d = "",
  component: m = ""
}) => {
  const { dataLayer: f } = window, p = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: d.toLowerCase(),
    section: o.toLowerCase(),
    text: s.toLowerCase(),
    component: m.toLowerCase()
  };
  f && f.push(p);
};
var kr = {}, qo;
function Vl() {
  if (qo) return kr;
  qo = 1;
  var e = rt;
  function t(i) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, g = 1; g < arguments.length; g++) c += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + i + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, o = {}, s = {};
  function d(i) {
    return r.call(s, i) ? !0 : r.call(o, i) ? !1 : n.test(i) ? s[i] = !0 : (o[i] = !0, !1);
  }
  function m(i, c, g, b, N, T, D) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = b, this.attributeNamespace = N, this.mustUseProperty = g, this.propertyName = i, this.type = c, this.sanitizeURL = T, this.removeEmptyString = D;
  }
  var f = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    f[i] = new m(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var c = i[0];
    f[c] = new m(c, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    f[i] = new m(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    f[i] = new m(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    f[i] = new m(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    f[i] = new m(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    f[i] = new m(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    f[i] = new m(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    f[i] = new m(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var p = /[\-:]([a-z])/g;
  function x(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var c = i.replace(
      p,
      x
    );
    f[c] = new m(c, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var c = i.replace(p, x);
    f[c] = new m(c, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var c = i.replace(p, x);
    f[c] = new m(c, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    f[i] = new m(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), f.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    f[i] = new m(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var S = {
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
  Object.keys(S).forEach(function(i) {
    j.forEach(function(c) {
      c = c + i.charAt(0).toUpperCase() + i.substring(1), S[c] = S[i];
    });
  });
  var B = /["'&<>]/;
  function C(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var c = B.exec(i);
    if (c) {
      var g = "", b, N = 0;
      for (b = c.index; b < i.length; b++) {
        switch (i.charCodeAt(b)) {
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
        N !== b && (g += i.substring(N, b)), N = b + 1, g += c;
      }
      i = N !== b ? g + i.substring(N, b) : g;
    }
    return i;
  }
  var w = /([A-Z])/g, I = /^ms-/, M = Array.isArray;
  function $(i, c) {
    return { insertionMode: i, selectedValue: c };
  }
  function W(i, c, g) {
    switch (c) {
      case "select":
        return $(1, g.value != null ? g.value : g.defaultValue);
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
  var H = /* @__PURE__ */ new Map();
  function _(i, c, g) {
    if (typeof g != "object") throw Error(t(62));
    c = !0;
    for (var b in g) if (r.call(g, b)) {
      var N = g[b];
      if (N != null && typeof N != "boolean" && N !== "") {
        if (b.indexOf("--") === 0) {
          var T = C(b);
          N = C(("" + N).trim());
        } else {
          T = b;
          var D = H.get(T);
          D !== void 0 || (D = C(T.replace(w, "-$1").toLowerCase().replace(I, "-ms-")), H.set(T, D)), T = D, N = typeof N == "number" ? N === 0 || r.call(S, b) ? "" + N : N + "px" : C(("" + N).trim());
        }
        c ? (c = !1, i.push(' style="', T, ":", N)) : i.push(";", T, ":", N);
      }
    }
    c || i.push('"');
  }
  function oe(i, c, g, b) {
    switch (g) {
      case "style":
        _(i, c, b);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (c = f.hasOwnProperty(g) ? f[g] : null, c !== null) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (g = c.attributeName, c.type) {
          case 3:
            b && i.push(" ", g, '=""');
            break;
          case 4:
            b === !0 ? i.push(" ", g, '=""') : b !== !1 && i.push(" ", g, '="', C(b), '"');
            break;
          case 5:
            isNaN(b) || i.push(" ", g, '="', C(b), '"');
            break;
          case 6:
            !isNaN(b) && 1 <= b && i.push(" ", g, '="', C(b), '"');
            break;
          default:
            c.sanitizeURL && (b = "" + b), i.push(" ", g, '="', C(b), '"');
        }
      } else if (d(g)) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = g.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        i.push(" ", g, '="', C(b), '"');
      }
    }
  }
  function pe(i, c, g) {
    if (c != null) {
      if (g != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && i.push("" + c);
    }
  }
  function _e(i) {
    var c = "";
    return e.Children.forEach(i, function(g) {
      g != null && (c += g);
    }), c;
  }
  function Ie(i, c, g, b) {
    i.push(he(g));
    var N = g = null, T;
    for (T in c) if (r.call(c, T)) {
      var D = c[T];
      if (D != null) switch (T) {
        case "children":
          g = D;
          break;
        case "dangerouslySetInnerHTML":
          N = D;
          break;
        default:
          oe(i, b, T, D);
      }
    }
    return i.push(">"), pe(i, N, g), typeof g == "string" ? (i.push(C(g)), null) : g;
  }
  var Be = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Xe = /* @__PURE__ */ new Map();
  function he(i) {
    var c = Xe.get(i);
    if (c === void 0) {
      if (!Be.test(i)) throw Error(t(65, i));
      c = "<" + i, Xe.set(i, c);
    }
    return c;
  }
  function we(i, c, g, b, N) {
    switch (c) {
      case "select":
        i.push(he("select"));
        var T = null, D = null;
        for (me in g) if (r.call(g, me)) {
          var X = g[me];
          if (X != null) switch (me) {
            case "children":
              T = X;
              break;
            case "dangerouslySetInnerHTML":
              D = X;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              oe(i, b, me, X);
          }
        }
        return i.push(">"), pe(i, D, T), T;
      case "option":
        D = N.selectedValue, i.push(he("option"));
        var ae = X = null, de = null, me = null;
        for (T in g) if (r.call(g, T)) {
          var qe = g[T];
          if (qe != null) switch (T) {
            case "children":
              X = qe;
              break;
            case "selected":
              de = qe;
              break;
            case "dangerouslySetInnerHTML":
              me = qe;
              break;
            case "value":
              ae = qe;
            default:
              oe(i, b, T, qe);
          }
        }
        if (D != null) if (g = ae !== null ? "" + ae : _e(X), M(D)) {
          for (b = 0; b < D.length; b++)
            if ("" + D[b] === g) {
              i.push(' selected=""');
              break;
            }
        } else "" + D === g && i.push(' selected=""');
        else de && i.push(' selected=""');
        return i.push(">"), pe(i, me, X), X;
      case "textarea":
        i.push(he("textarea")), me = D = T = null;
        for (X in g) if (r.call(g, X) && (ae = g[X], ae != null)) switch (X) {
          case "children":
            me = ae;
            break;
          case "value":
            T = ae;
            break;
          case "defaultValue":
            D = ae;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            oe(
              i,
              b,
              X,
              ae
            );
        }
        if (T === null && D !== null && (T = D), i.push(">"), me != null) {
          if (T != null) throw Error(t(92));
          if (M(me) && 1 < me.length) throw Error(t(93));
          T = "" + me;
        }
        return typeof T == "string" && T[0] === `
` && i.push(`
`), T !== null && i.push(C("" + T)), null;
      case "input":
        i.push(he("input")), ae = me = X = T = null;
        for (D in g) if (r.call(g, D) && (de = g[D], de != null)) switch (D) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ae = de;
            break;
          case "defaultValue":
            X = de;
            break;
          case "checked":
            me = de;
            break;
          case "value":
            T = de;
            break;
          default:
            oe(i, b, D, de);
        }
        return me !== null ? oe(i, b, "checked", me) : ae !== null && oe(i, b, "checked", ae), T !== null ? oe(i, b, "value", T) : X !== null && oe(i, b, "value", X), i.push("/>"), null;
      case "menuitem":
        i.push(he("menuitem"));
        for (var _t in g) if (r.call(g, _t) && (T = g[_t], T != null)) switch (_t) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            oe(i, b, _t, T);
        }
        return i.push(">"), null;
      case "title":
        i.push(he("title")), T = null;
        for (qe in g) if (r.call(g, qe) && (D = g[qe], D != null)) switch (qe) {
          case "children":
            T = D;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            oe(i, b, qe, D);
        }
        return i.push(">"), T;
      case "listing":
      case "pre":
        i.push(he(c)), D = T = null;
        for (ae in g) if (r.call(g, ae) && (X = g[ae], X != null)) switch (ae) {
          case "children":
            T = X;
            break;
          case "dangerouslySetInnerHTML":
            D = X;
            break;
          default:
            oe(i, b, ae, X);
        }
        if (i.push(">"), D != null) {
          if (T != null) throw Error(t(60));
          if (typeof D != "object" || !("__html" in D)) throw Error(t(61));
          g = D.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? i.push(`
`, g) : i.push("" + g));
        }
        return typeof T == "string" && T[0] === `
` && i.push(`
`), T;
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
        i.push(he(c));
        for (var Ct in g) if (r.call(g, Ct) && (T = g[Ct], T != null)) switch (Ct) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            oe(i, b, Ct, T);
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
          g,
          c,
          b
        );
      case "html":
        return N.insertionMode === 0 && i.push("<!DOCTYPE html>"), Ie(i, g, c, b);
      default:
        if (c.indexOf("-") === -1 && typeof g.is != "string") return Ie(i, g, c, b);
        i.push(he(c)), D = T = null;
        for (de in g) if (r.call(g, de) && (X = g[de], X != null)) switch (de) {
          case "children":
            T = X;
            break;
          case "dangerouslySetInnerHTML":
            D = X;
            break;
          case "style":
            _(i, b, X);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(de) && typeof X != "function" && typeof X != "symbol" && i.push(" ", de, '="', C(X), '"');
        }
        return i.push(">"), pe(i, D, T), T;
    }
  }
  function Ee(i, c, g) {
    if (i.push('<!--$?--><template id="'), g === null) throw Error(t(395));
    return i.push(g), i.push('"></template>');
  }
  function xe(i, c, g, b) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return i.push('<div hidden id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      case 2:
        return i.push('<svg aria-hidden="true" style="display:none" id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      case 3:
        return i.push('<math aria-hidden="true" style="display:none" id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      case 4:
        return i.push('<table hidden id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      case 5:
        return i.push('<table hidden><tbody id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      case 6:
        return i.push('<table hidden><tr id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      case 7:
        return i.push('<table hidden><colgroup id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      default:
        throw Error(t(397));
    }
  }
  function Ke(i, c) {
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
  var je = /[<\u2028\u2029]/g;
  function ke(i) {
    return JSON.stringify(i).replace(je, function(c) {
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
  function Fe(i, c) {
    return c = c === void 0 ? "" : c, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: c + "P:", segmentPrefix: c + "S:", boundaryPrefix: c + "B:", idPrefix: c, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: i };
  }
  function Ye(i, c, g, b) {
    return g.generateStaticMarkup ? (i.push(C(c)), !1) : (c === "" ? i = b : (b && i.push("<!-- -->"), i.push(C(c)), i = !0), i);
  }
  var Ze = Object.assign, L = Symbol.for("react.element"), O = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), E = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), ue = Symbol.for("react.scope"), ee = Symbol.for("react.debug_trace_mode"), le = Symbol.for("react.legacy_hidden"), te = Symbol.for("react.default_value"), fe = Symbol.iterator;
  function ze(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case P:
        return "Fragment";
      case O:
        return "Portal";
      case y:
        return "Profiler";
      case V:
        return "StrictMode";
      case J:
        return "Suspense";
      case K:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case E:
        return (i.displayName || "Context") + ".Consumer";
      case Z:
        return (i._context.displayName || "Context") + ".Provider";
      case re:
        var c = i.render;
        return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case G:
        return c = i.displayName || null, c !== null ? c : ze(i.type) || "Memo";
      case ne:
        c = i._payload, i = i._init;
        try {
          return ze(i(c));
        } catch {
        }
    }
    return null;
  }
  var ce = {};
  function Qe(i, c) {
    if (i = i.contextTypes, !i) return ce;
    var g = {}, b;
    for (b in i) g[b] = c[b];
    return g;
  }
  var Ve = null;
  function ge(i, c) {
    if (i !== c) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var g = c.parent;
      if (i === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        ge(i, g);
      }
      c.context._currentValue2 = c.value;
    }
  }
  function U(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && U(i);
  }
  function ie(i) {
    var c = i.parent;
    c !== null && ie(c), i.context._currentValue2 = i.value;
  }
  function nt(i, c) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === c.depth ? ge(i, c) : nt(i, c);
  }
  function Je(i, c) {
    var g = c.parent;
    if (g === null) throw Error(t(402));
    i.depth === g.depth ? ge(i, g) : Je(i, g), c.context._currentValue2 = c.value;
  }
  function Ce(i) {
    var c = Ve;
    c !== i && (c === null ? ie(i) : i === null ? U(c) : c.depth === i.depth ? ge(c, i) : c.depth > i.depth ? nt(c, i) : Je(c, i), Ve = i);
  }
  var cr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, c) {
    i = i._reactInternals, i.queue !== null && i.queue.push(c);
  }, enqueueReplaceState: function(i, c) {
    i = i._reactInternals, i.replace = !0, i.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function dr(i, c, g, b) {
    var N = i.state !== void 0 ? i.state : null;
    i.updater = cr, i.props = g, i.state = N;
    var T = { queue: [], replace: !1 };
    i._reactInternals = T;
    var D = c.contextType;
    if (i.context = typeof D == "object" && D !== null ? D._currentValue2 : b, D = c.getDerivedStateFromProps, typeof D == "function" && (D = D(g, N), N = D == null ? N : Ze({}, N, D), i.state = N), typeof c.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && cr.enqueueReplaceState(i, i.state, null), T.queue !== null && 0 < T.queue.length) if (c = T.queue, D = T.replace, T.queue = null, T.replace = !1, D && c.length === 1) i.state = c[0];
    else {
      for (T = D ? c[0] : i.state, N = !0, D = D ? 1 : 0; D < c.length; D++) {
        var X = c[D];
        X = typeof X == "function" ? X.call(i, T, g, b) : X, X != null && (N ? (N = !1, T = Ze({}, T, X)) : Ze(T, X));
      }
      i.state = T;
    }
    else T.queue = null;
  }
  var Ar = { id: 1, overflow: "" };
  function Pt(i, c, g) {
    var b = i.id;
    i = i.overflow;
    var N = 32 - Lt(b) - 1;
    b &= ~(1 << N), g += 1;
    var T = 32 - Lt(c) + N;
    if (30 < T) {
      var D = N - N % 5;
      return T = (b & (1 << D) - 1).toString(32), b >>= D, N -= D, { id: 1 << 32 - Lt(c) + N | g << N | b, overflow: T + i };
    }
    return { id: 1 << T | g << N | b, overflow: i };
  }
  var Lt = Math.clz32 ? Math.clz32 : ft, Zt = Math.log, Xt = Math.LN2;
  function ft(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Zt(i) / Xt | 0) | 0;
  }
  function Nt(i, c) {
    return i === c && (i !== 0 || 1 / i === 1 / c) || i !== i && c !== c;
  }
  var fr = typeof Object.is == "function" ? Object.is : Nt, ot = null, pr = null, ut = null, Te = null, Dt = !1, Ue = !1, ct = 0, vt = null, Mt = 0;
  function pt() {
    if (ot === null) throw Error(t(321));
    return ot;
  }
  function hr() {
    if (0 < Mt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Kt() {
    return Te === null ? ut === null ? (Dt = !1, ut = Te = hr()) : (Dt = !0, Te = ut) : Te.next === null ? (Dt = !1, Te = Te.next = hr()) : (Dt = !0, Te = Te.next), Te;
  }
  function gr() {
    pr = ot = null, Ue = !1, ut = null, Mt = 0, Te = vt = null;
  }
  function Ft(i, c) {
    return typeof c == "function" ? c(i) : c;
  }
  function Qt(i, c, g) {
    if (ot = pt(), Te = Kt(), Dt) {
      var b = Te.queue;
      if (c = b.dispatch, vt !== null && (g = vt.get(b), g !== void 0)) {
        vt.delete(b), b = Te.memoizedState;
        do
          b = i(b, g.action), g = g.next;
        while (g !== null);
        return Te.memoizedState = b, [b, c];
      }
      return [Te.memoizedState, c];
    }
    return i = i === Ft ? typeof c == "function" ? c() : c : g !== void 0 ? g(c) : c, Te.memoizedState = i, i = Te.queue = { last: null, dispatch: null }, i = i.dispatch = xt.bind(null, ot, i), [Te.memoizedState, i];
  }
  function Rr(i, c) {
    if (ot = pt(), Te = Kt(), c = c === void 0 ? null : c, Te !== null) {
      var g = Te.memoizedState;
      if (g !== null && c !== null) {
        var b = g[1];
        e: if (b === null) b = !1;
        else {
          for (var N = 0; N < b.length && N < c.length; N++) if (!fr(c[N], b[N])) {
            b = !1;
            break e;
          }
          b = !0;
        }
        if (b) return g[0];
      }
    }
    return i = i(), Te.memoizedState = [i, c], i;
  }
  function xt(i, c, g) {
    if (25 <= Mt) throw Error(t(301));
    if (i === ot) if (Ue = !0, i = { action: g, next: null }, vt === null && (vt = /* @__PURE__ */ new Map()), g = vt.get(c), g === void 0) vt.set(c, i);
    else {
      for (c = g; c.next !== null; ) c = c.next;
      c.next = i;
    }
  }
  function Jt() {
    throw Error(t(394));
  }
  function zt() {
  }
  var mr = { readContext: function(i) {
    return i._currentValue2;
  }, useContext: function(i) {
    return pt(), i._currentValue2;
  }, useMemo: Rr, useReducer: Qt, useRef: function(i) {
    ot = pt(), Te = Kt();
    var c = Te.memoizedState;
    return c === null ? (i = { current: i }, Te.memoizedState = i) : c;
  }, useState: function(i) {
    return Qt(Ft, i);
  }, useInsertionEffect: zt, useLayoutEffect: function() {
  }, useCallback: function(i, c) {
    return Rr(function() {
      return i;
    }, c);
  }, useImperativeHandle: zt, useEffect: zt, useDebugValue: zt, useDeferredValue: function(i) {
    return pt(), i;
  }, useTransition: function() {
    return pt(), [
      !1,
      Jt
    ];
  }, useId: function() {
    var i = pr.treeContext, c = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Lt(i) - 1)).toString(32) + c;
    var g = $t;
    if (g === null) throw Error(t(404));
    return c = ct++, i = ":" + g.idPrefix + "R" + i, 0 < c && (i += "H" + c.toString(32)), i + ":";
  }, useMutableSource: function(i, c) {
    return pt(), c(i._source);
  }, useSyncExternalStore: function(i, c, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, $t = null, St = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ht(i) {
    return console.error(i), null;
  }
  function It() {
  }
  function Or(i, c, g, b, N, T, D, X, ae) {
    var de = [], me = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: b, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: me, pingedTasks: de, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: N === void 0 ? ht : N, onAllReady: It, onShellReady: D === void 0 ? It : D, onShellError: It, onFatalError: It }, g = Bt(c, 0, null, g, !1, !1), g.parentFlushed = !0, i = er(c, i, null, g, me, ce, null, Ar), de.push(i), c;
  }
  function er(i, c, g, b, N, T, D, X) {
    i.allPendingTasks++, g === null ? i.pendingRootTasks++ : g.pendingTasks++;
    var ae = { node: c, ping: function() {
      var de = i.pingedTasks;
      de.push(ae), de.length === 1 && cn(i);
    }, blockedBoundary: g, blockedSegment: b, abortSet: N, legacyContext: T, context: D, treeContext: X };
    return N.add(ae), ae;
  }
  function Bt(i, c, g, b, N, T) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: b, boundary: g, lastPushedText: N, textEmbedded: T };
  }
  function Vt(i, c) {
    if (i = i.onError(c), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function k(i, c) {
    var g = i.onShellError;
    g(c), g = i.onFatalError, g(c), i.destination !== null ? (i.status = 2, i.destination.destroy(c)) : (i.status = 1, i.fatalError = c);
  }
  function Q(i, c, g, b, N) {
    for (ot = {}, pr = c, ct = 0, i = g(b, N); Ue; ) Ue = !1, ct = 0, Mt += 1, Te = null, i = g(b, N);
    return gr(), i;
  }
  function q(i, c, g, b) {
    var N = g.render(), T = b.childContextTypes;
    if (T != null) {
      var D = c.legacyContext;
      if (typeof g.getChildContext != "function") b = D;
      else {
        g = g.getChildContext();
        for (var X in g) if (!(X in T)) throw Error(t(108, ze(b) || "Unknown", X));
        b = Ze({}, D, g);
      }
      c.legacyContext = b, Pe(i, c, N), c.legacyContext = D;
    } else Pe(i, c, N);
  }
  function Se(i, c) {
    if (i && i.defaultProps) {
      c = Ze({}, c), i = i.defaultProps;
      for (var g in i) c[g] === void 0 && (c[g] = i[g]);
      return c;
    }
    return c;
  }
  function Me(i, c, g, b, N) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      N = Qe(g, c.legacyContext);
      var T = g.contextType;
      T = new g(b, typeof T == "object" && T !== null ? T._currentValue2 : N), dr(T, g, b, N), q(i, c, T, g);
    } else {
      T = Qe(g, c.legacyContext), N = Q(i, c, g, b, T);
      var D = ct !== 0;
      if (typeof N == "object" && N !== null && typeof N.render == "function" && N.$$typeof === void 0) dr(N, g, b, T), q(i, c, N, g);
      else if (D) {
        b = c.treeContext, c.treeContext = Pt(b, 1, 0);
        try {
          Pe(i, c, N);
        } finally {
          c.treeContext = b;
        }
      } else Pe(i, c, N);
    }
    else if (typeof g == "string") {
      switch (N = c.blockedSegment, T = we(N.chunks, g, b, i.responseState, N.formatContext), N.lastPushedText = !1, D = N.formatContext, N.formatContext = W(D, g, b), dt(i, c, T), N.formatContext = D, g) {
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
          N.chunks.push("</", g, ">");
      }
      N.lastPushedText = !1;
    } else {
      switch (g) {
        case le:
        case ee:
        case V:
        case y:
        case P:
          Pe(i, c, b.children);
          return;
        case K:
          Pe(i, c, b.children);
          return;
        case ue:
          throw Error(t(343));
        case J:
          e: {
            g = c.blockedBoundary, N = c.blockedSegment, T = b.fallback, b = b.children, D = /* @__PURE__ */ new Set();
            var X = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: D, errorDigest: null }, ae = Bt(i, N.chunks.length, X, N.formatContext, !1, !1);
            N.children.push(ae), N.lastPushedText = !1;
            var de = Bt(i, 0, null, N.formatContext, !1, !1);
            de.parentFlushed = !0, c.blockedBoundary = X, c.blockedSegment = de;
            try {
              if (dt(
                i,
                c,
                b
              ), i.responseState.generateStaticMarkup || de.lastPushedText && de.textEmbedded && de.chunks.push("<!-- -->"), de.status = 1, kt(X, de), X.pendingTasks === 0) break e;
            } catch (me) {
              de.status = 4, X.forceClientRender = !0, X.errorDigest = Vt(i, me);
            } finally {
              c.blockedBoundary = g, c.blockedSegment = N;
            }
            c = er(i, T, g, ae, D, c.legacyContext, c.context, c.treeContext), i.pingedTasks.push(c);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case re:
          if (b = Q(i, c, g.render, b, N), ct !== 0) {
            g = c.treeContext, c.treeContext = Pt(g, 1, 0);
            try {
              Pe(i, c, b);
            } finally {
              c.treeContext = g;
            }
          } else Pe(i, c, b);
          return;
        case G:
          g = g.type, b = Se(g, b), Me(i, c, g, b, N);
          return;
        case Z:
          if (N = b.children, g = g._context, b = b.value, T = g._currentValue2, g._currentValue2 = b, D = Ve, Ve = b = { parent: D, depth: D === null ? 0 : D.depth + 1, context: g, parentValue: T, value: b }, c.context = b, Pe(i, c, N), i = Ve, i === null) throw Error(t(403));
          b = i.parentValue, i.context._currentValue2 = b === te ? i.context._defaultValue : b, i = Ve = i.parent, c.context = i;
          return;
        case E:
          b = b.children, b = b(g._currentValue2), Pe(i, c, b);
          return;
        case ne:
          N = g._init, g = N(g._payload), b = Se(g, b), Me(
            i,
            c,
            g,
            b,
            void 0
          );
          return;
      }
      throw Error(t(130, g == null ? g : typeof g, ""));
    }
  }
  function Pe(i, c, g) {
    if (c.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case L:
          Me(i, c, g.type, g.props, g.ref);
          return;
        case O:
          throw Error(t(257));
        case ne:
          var b = g._init;
          g = b(g._payload), Pe(i, c, g);
          return;
      }
      if (M(g)) {
        He(i, c, g);
        return;
      }
      if (g === null || typeof g != "object" ? b = null : (b = fe && g[fe] || g["@@iterator"], b = typeof b == "function" ? b : null), b && (b = b.call(g))) {
        if (g = b.next(), !g.done) {
          var N = [];
          do
            N.push(g.value), g = b.next();
          while (!g.done);
          He(i, c, N);
        }
        return;
      }
      throw i = Object.prototype.toString.call(g), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : i));
    }
    typeof g == "string" ? (b = c.blockedSegment, b.lastPushedText = Ye(c.blockedSegment.chunks, g, i.responseState, b.lastPushedText)) : typeof g == "number" && (b = c.blockedSegment, b.lastPushedText = Ye(c.blockedSegment.chunks, "" + g, i.responseState, b.lastPushedText));
  }
  function He(i, c, g) {
    for (var b = g.length, N = 0; N < b; N++) {
      var T = c.treeContext;
      c.treeContext = Pt(T, b, N);
      try {
        dt(i, c, g[N]);
      } finally {
        c.treeContext = T;
      }
    }
  }
  function dt(i, c, g) {
    var b = c.blockedSegment.formatContext, N = c.legacyContext, T = c.context;
    try {
      return Pe(i, c, g);
    } catch (ae) {
      if (gr(), typeof ae == "object" && ae !== null && typeof ae.then == "function") {
        g = ae;
        var D = c.blockedSegment, X = Bt(i, D.chunks.length, null, D.formatContext, D.lastPushedText, !0);
        D.children.push(X), D.lastPushedText = !1, i = er(i, c.node, c.blockedBoundary, X, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, g.then(i, i), c.blockedSegment.formatContext = b, c.legacyContext = N, c.context = T, Ce(T);
      } else throw c.blockedSegment.formatContext = b, c.legacyContext = N, c.context = T, Ce(T), ae;
    }
  }
  function at(i) {
    var c = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, tr(this, c, i);
  }
  function et(i, c, g) {
    var b = i.blockedBoundary;
    i.blockedSegment.status = 3, b === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.push(null))) : (b.pendingTasks--, b.forceClientRender || (b.forceClientRender = !0, i = g === void 0 ? Error(t(432)) : g, b.errorDigest = c.onError(i), b.parentFlushed && c.clientRenderedBoundaries.push(b)), b.fallbackAbortableTasks.forEach(function(N) {
      return et(N, c, g);
    }), b.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (b = c.onAllReady, b()));
  }
  function kt(i, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var g = c.children[0];
      g.id = c.id, g.parentFlushed = !0, g.status === 1 && kt(i, g);
    } else i.completedSegments.push(c);
  }
  function tr(i, c, g) {
    if (c === null) {
      if (g.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = g;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = It, c = i.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && kt(c, g), c.parentFlushed && i.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(at, i), c.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (kt(c, g), c.completedSegments.length === 1 && c.parentFlushed && i.partialBoundaries.push(c)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function cn(i) {
    if (i.status !== 2) {
      var c = Ve, g = St.current;
      St.current = mr;
      var b = $t;
      $t = i.responseState;
      try {
        var N = i.pingedTasks, T;
        for (T = 0; T < N.length; T++) {
          var D = N[T], X = i, ae = D.blockedSegment;
          if (ae.status === 0) {
            Ce(D.context);
            try {
              Pe(X, D, D.node), X.responseState.generateStaticMarkup || ae.lastPushedText && ae.textEmbedded && ae.chunks.push("<!-- -->"), D.abortSet.delete(D), ae.status = 1, tr(X, D.blockedBoundary, ae);
            } catch (gt) {
              if (gr(), typeof gt == "object" && gt !== null && typeof gt.then == "function") {
                var de = D.ping;
                gt.then(de, de);
              } else {
                D.abortSet.delete(D), ae.status = 4;
                var me = D.blockedBoundary, qe = gt, _t = Vt(X, qe);
                if (me === null ? k(X, qe) : (me.pendingTasks--, me.forceClientRender || (me.forceClientRender = !0, me.errorDigest = _t, me.parentFlushed && X.clientRenderedBoundaries.push(me))), X.allPendingTasks--, X.allPendingTasks === 0) {
                  var Ct = X.onAllReady;
                  Ct();
                }
              }
            } finally {
            }
          }
        }
        N.splice(0, T), i.destination !== null && Nr(i, i.destination);
      } catch (gt) {
        Vt(i, gt), k(i, gt);
      } finally {
        $t = b, St.current = g, g === mr && Ce(c);
      }
    }
  }
  function yr(i, c, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var b = g.id = i.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, i = i.responseState, c.push('<template id="'), c.push(i.placeholderPrefix), i = b.toString(16), c.push(i), c.push('"></template>');
      case 1:
        g.status = 2;
        var N = !0;
        b = g.chunks;
        var T = 0;
        g = g.children;
        for (var D = 0; D < g.length; D++) {
          for (N = g[D]; T < N.index; T++) c.push(b[T]);
          N = vr(i, c, N);
        }
        for (; T < b.length - 1; T++) c.push(b[T]);
        return T < b.length && (N = c.push(b[T])), N;
      default:
        throw Error(t(390));
    }
  }
  function vr(i, c, g) {
    var b = g.boundary;
    if (b === null) return yr(i, c, g);
    if (b.parentFlushed = !0, b.forceClientRender) return i.responseState.generateStaticMarkup || (b = b.errorDigest, c.push("<!--$!-->"), c.push("<template"), b && (c.push(' data-dgst="'), b = C(b), c.push(b), c.push('"')), c.push("></template>")), yr(i, c, g), i = i.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), i;
    if (0 < b.pendingTasks) {
      b.rootSegmentID = i.nextSegmentId++, 0 < b.completedSegments.length && i.partialBoundaries.push(b);
      var N = i.responseState, T = N.nextSuspenseID++;
      return N = N.boundaryPrefix + T.toString(16), b = b.id = N, Ee(c, i.responseState, b), yr(i, c, g), c.push("<!--/$-->");
    }
    if (b.byteSize > i.progressiveChunkSize) return b.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(b), Ee(c, i.responseState, b.id), yr(i, c, g), c.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || c.push("<!--$-->"), g = b.completedSegments, g.length !== 1) throw Error(t(391));
    return vr(i, c, g[0]), i = i.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), i;
  }
  function Wr(i, c, g) {
    return xe(c, i.responseState, g.formatContext, g.id), vr(i, c, g), Ke(c, g.formatContext);
  }
  function Hr(i, c, g) {
    for (var b = g.completedSegments, N = 0; N < b.length; N++) qr(i, c, g, b[N]);
    if (b.length = 0, i = i.responseState, b = g.id, g = g.rootSegmentID, c.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? c.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, c.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), b === null) throw Error(t(395));
    return g = g.toString(16), c.push(b), c.push('","'), c.push(i.segmentPrefix), c.push(g), c.push('")<\/script>');
  }
  function qr(i, c, g, b) {
    if (b.status === 2) return !0;
    var N = b.id;
    if (N === -1) {
      if ((b.id = g.rootSegmentID) === -1) throw Error(t(392));
      return Wr(i, c, b);
    }
    return Wr(i, c, b), i = i.responseState, c.push(i.startInlineScript), i.sentCompleteSegmentFunction ? c.push('$RS("') : (i.sentCompleteSegmentFunction = !0, c.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), c.push(i.segmentPrefix), N = N.toString(16), c.push(N), c.push('","'), c.push(i.placeholderPrefix), c.push(N), c.push('")<\/script>');
  }
  function Nr(i, c) {
    try {
      var g = i.completedRootSegment;
      if (g !== null && i.pendingRootTasks === 0) {
        vr(i, c, g), i.completedRootSegment = null;
        var b = i.responseState.bootstrapChunks;
        for (g = 0; g < b.length - 1; g++) c.push(b[g]);
        g < b.length && c.push(b[g]);
      }
      var N = i.clientRenderedBoundaries, T;
      for (T = 0; T < N.length; T++) {
        var D = N[T];
        b = c;
        var X = i.responseState, ae = D.id, de = D.errorDigest, me = D.errorMessage, qe = D.errorComponentStack;
        if (b.push(X.startInlineScript), X.sentClientRenderFunction ? b.push('$RX("') : (X.sentClientRenderFunction = !0, b.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ae === null) throw Error(t(395));
        if (b.push(ae), b.push('"'), de || me || qe) {
          b.push(",");
          var _t = ke(de || "");
          b.push(_t);
        }
        if (me || qe) {
          b.push(",");
          var Ct = ke(me || "");
          b.push(Ct);
        }
        if (qe) {
          b.push(",");
          var gt = ke(qe);
          b.push(gt);
        }
        if (!b.push(")<\/script>")) {
          i.destination = null, T++, N.splice(0, T);
          return;
        }
      }
      N.splice(0, T);
      var br = i.completedBoundaries;
      for (T = 0; T < br.length; T++) if (!Hr(i, c, br[T])) {
        i.destination = null, T++, br.splice(0, T);
        return;
      }
      br.splice(0, T);
      var Ut = i.partialBoundaries;
      for (T = 0; T < Ut.length; T++) {
        var Yr = Ut[T];
        e: {
          N = i, D = c;
          var wr = Yr.completedSegments;
          for (X = 0; X < wr.length; X++) if (!qr(N, D, Yr, wr[X])) {
            X++, wr.splice(0, X);
            var pn = !1;
            break e;
          }
          wr.splice(0, X), pn = !0;
        }
        if (!pn) {
          i.destination = null, T++, Ut.splice(0, T);
          return;
        }
      }
      Ut.splice(0, T);
      var rr = i.completedBoundaries;
      for (T = 0; T < rr.length; T++) if (!Hr(i, c, rr[T])) {
        i.destination = null, T++, rr.splice(0, T);
        return;
      }
      rr.splice(0, T);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && c.push(null);
    }
  }
  function dn(i, c) {
    try {
      var g = i.abortableTasks;
      g.forEach(function(b) {
        return et(b, i, c);
      }), g.clear(), i.destination !== null && Nr(i, i.destination);
    } catch (b) {
      Vt(i, b), k(i, b);
    }
  }
  function fn() {
  }
  function Gr(i, c, g, b) {
    var N = !1, T = null, D = "", X = { push: function(de) {
      return de !== null && (D += de), !0;
    }, destroy: function(de) {
      N = !0, T = de;
    } }, ae = !1;
    if (i = Or(i, Fe(g, c ? c.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, fn, void 0, function() {
      ae = !0;
    }), cn(i), dn(i, b), i.status === 1) i.status = 2, X.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = X;
      try {
        Nr(i, X);
      } catch (de) {
        Vt(i, de), k(i, de);
      }
    }
    if (N) throw T;
    if (!ae) throw Error(t(426));
    return D;
  }
  return kr.renderToNodeStream = function() {
    throw Error(t(207));
  }, kr.renderToStaticMarkup = function(i, c) {
    return Gr(i, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, kr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, kr.renderToString = function(i, c) {
    return Gr(i, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, kr.version = "18.3.1", kr;
}
var An = {}, Go;
function Ul() {
  if (Go) return An;
  Go = 1;
  var e = rt;
  function t(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, h = 1; h < arguments.length; h++) u += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function o(a, u) {
    if (u.length !== 0) if (512 < u.length) 0 < n && (a.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), a.enqueue(u);
    else {
      var h = r.length - n;
      h < u.length && (h === 0 ? a.enqueue(r) : (r.set(u.subarray(0, h), n), a.enqueue(r), u = u.subarray(h)), r = new Uint8Array(512), n = 0), r.set(u, n), n += u.length;
    }
  }
  function s(a, u) {
    return o(a, u), !0;
  }
  function d(a) {
    r && 0 < n && (a.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var m = new TextEncoder();
  function f(a) {
    return m.encode(a);
  }
  function p(a) {
    return m.encode(a);
  }
  function x(a, u) {
    typeof a.error == "function" ? a.error(u) : a.close();
  }
  var S = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, C = {};
  function w(a) {
    return S.call(C, a) ? !0 : S.call(B, a) ? !1 : j.test(a) ? C[a] = !0 : (B[a] = !0, !1);
  }
  function I(a, u, h, v, R, A, F) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = v, this.attributeNamespace = R, this.mustUseProperty = h, this.propertyName = a, this.type = u, this.sanitizeURL = A, this.removeEmptyString = F;
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    M[a] = new I(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    M[u] = new I(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    M[a] = new I(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    M[a] = new I(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    M[a] = new I(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    M[a] = new I(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    M[a] = new I(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    M[a] = new I(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    M[a] = new I(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var $ = /[\-:]([a-z])/g;
  function W(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      $,
      W
    );
    M[u] = new I(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace($, W);
    M[u] = new I(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace($, W);
    M[u] = new I(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    M[a] = new I(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), M.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    M[a] = new I(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
  }, _ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(H).forEach(function(a) {
    _.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), H[u] = H[a];
    });
  });
  var oe = /["'&<>]/;
  function pe(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = oe.exec(a);
    if (u) {
      var h = "", v, R = 0;
      for (v = u.index; v < a.length; v++) {
        switch (a.charCodeAt(v)) {
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
        R !== v && (h += a.substring(R, v)), R = v + 1, h += u;
      }
      a = R !== v ? h + a.substring(R, v) : h;
    }
    return a;
  }
  var _e = /([A-Z])/g, Ie = /^ms-/, Be = Array.isArray, Xe = p("<script>"), he = p("<\/script>"), we = p('<script src="'), Ee = p('<script type="module" src="'), xe = p('" async=""><\/script>'), Ke = /(<\/|<)(s)(cript)/gi;
  function je(a, u, h, v) {
    return "" + u + (h === "s" ? "\\u0073" : "\\u0053") + v;
  }
  function ke(a, u, h, v, R) {
    a = a === void 0 ? "" : a, u = u === void 0 ? Xe : p('<script nonce="' + pe(u) + '">');
    var A = [];
    if (h !== void 0 && A.push(u, f(("" + h).replace(Ke, je)), he), v !== void 0) for (h = 0; h < v.length; h++) A.push(we, f(pe(v[h])), xe);
    if (R !== void 0) for (v = 0; v < R.length; v++) A.push(Ee, f(pe(R[v])), xe);
    return { bootstrapChunks: A, startInlineScript: u, placeholderPrefix: p(a + "P:"), segmentPrefix: p(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Fe(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function Ye(a) {
    return Fe(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Ze(a, u, h) {
    switch (u) {
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
    return 4 <= a.insertionMode || a.insertionMode === 0 ? Fe(1, null) : a;
  }
  var L = p("<!-- -->");
  function O(a, u, h, v) {
    return u === "" ? v : (v && a.push(L), a.push(f(pe(u))), !0);
  }
  var P = /* @__PURE__ */ new Map(), V = p(' style="'), y = p(":"), Z = p(";");
  function E(a, u, h) {
    if (typeof h != "object") throw Error(t(62));
    u = !0;
    for (var v in h) if (S.call(h, v)) {
      var R = h[v];
      if (R != null && typeof R != "boolean" && R !== "") {
        if (v.indexOf("--") === 0) {
          var A = f(pe(v));
          R = f(pe(("" + R).trim()));
        } else {
          A = v;
          var F = P.get(A);
          F !== void 0 || (F = p(pe(A.replace(_e, "-$1").toLowerCase().replace(Ie, "-ms-"))), P.set(A, F)), A = F, R = typeof R == "number" ? R === 0 || S.call(H, v) ? f("" + R) : f(R + "px") : f(pe(("" + R).trim()));
        }
        u ? (u = !1, a.push(V, A, y, R)) : a.push(Z, A, y, R);
      }
    }
    u || a.push(K);
  }
  var re = p(" "), J = p('="'), K = p('"'), G = p('=""');
  function ne(a, u, h, v) {
    switch (h) {
      case "style":
        E(a, u, v);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (u = M.hasOwnProperty(h) ? M[h] : null, u !== null) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (h = f(u.attributeName), u.type) {
          case 3:
            v && a.push(re, h, G);
            break;
          case 4:
            v === !0 ? a.push(re, h, G) : v !== !1 && a.push(re, h, J, f(pe(v)), K);
            break;
          case 5:
            isNaN(v) || a.push(re, h, J, f(pe(v)), K);
            break;
          case 6:
            !isNaN(v) && 1 <= v && a.push(re, h, J, f(pe(v)), K);
            break;
          default:
            u.sanitizeURL && (v = "" + v), a.push(re, h, J, f(pe(v)), K);
        }
      } else if (w(h)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = h.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        a.push(re, f(h), J, f(pe(v)), K);
      }
    }
  }
  var ue = p(">"), ee = p("/>");
  function le(a, u, h) {
    if (u != null) {
      if (h != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && a.push(f("" + u));
    }
  }
  function te(a) {
    var u = "";
    return e.Children.forEach(a, function(h) {
      h != null && (u += h);
    }), u;
  }
  var fe = p(' selected=""');
  function ze(a, u, h, v) {
    a.push(ge(h));
    var R = h = null, A;
    for (A in u) if (S.call(u, A)) {
      var F = u[A];
      if (F != null) switch (A) {
        case "children":
          h = F;
          break;
        case "dangerouslySetInnerHTML":
          R = F;
          break;
        default:
          ne(a, v, A, F);
      }
    }
    return a.push(ue), le(a, R, h), typeof h == "string" ? (a.push(f(pe(h))), null) : h;
  }
  var ce = p(`
`), Qe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ve = /* @__PURE__ */ new Map();
  function ge(a) {
    var u = Ve.get(a);
    if (u === void 0) {
      if (!Qe.test(a)) throw Error(t(65, a));
      u = p("<" + a), Ve.set(a, u);
    }
    return u;
  }
  var U = p("<!DOCTYPE html>");
  function ie(a, u, h, v, R) {
    switch (u) {
      case "select":
        a.push(ge("select"));
        var A = null, F = null;
        for (ye in h) if (S.call(h, ye)) {
          var Y = h[ye];
          if (Y != null) switch (ye) {
            case "children":
              A = Y;
              break;
            case "dangerouslySetInnerHTML":
              F = Y;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(a, v, ye, Y);
          }
        }
        return a.push(ue), le(a, F, A), A;
      case "option":
        F = R.selectedValue, a.push(ge("option"));
        var se = Y = null, be = null, ye = null;
        for (A in h) if (S.call(h, A)) {
          var We = h[A];
          if (We != null) switch (A) {
            case "children":
              Y = We;
              break;
            case "selected":
              be = We;
              break;
            case "dangerouslySetInnerHTML":
              ye = We;
              break;
            case "value":
              se = We;
            default:
              ne(a, v, A, We);
          }
        }
        if (F != null) if (h = se !== null ? "" + se : te(Y), Be(F)) {
          for (v = 0; v < F.length; v++)
            if ("" + F[v] === h) {
              a.push(fe);
              break;
            }
        } else "" + F === h && a.push(fe);
        else be && a.push(fe);
        return a.push(ue), le(a, ye, Y), Y;
      case "textarea":
        a.push(ge("textarea")), ye = F = A = null;
        for (Y in h) if (S.call(h, Y) && (se = h[Y], se != null)) switch (Y) {
          case "children":
            ye = se;
            break;
          case "value":
            A = se;
            break;
          case "defaultValue":
            F = se;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(a, v, Y, se);
        }
        if (A === null && F !== null && (A = F), a.push(ue), ye != null) {
          if (A != null) throw Error(t(92));
          if (Be(ye) && 1 < ye.length) throw Error(t(93));
          A = "" + ye;
        }
        return typeof A == "string" && A[0] === `
` && a.push(ce), A !== null && a.push(f(pe("" + A))), null;
      case "input":
        a.push(ge("input")), se = ye = Y = A = null;
        for (F in h) if (S.call(h, F) && (be = h[F], be != null)) switch (F) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            se = be;
            break;
          case "defaultValue":
            Y = be;
            break;
          case "checked":
            ye = be;
            break;
          case "value":
            A = be;
            break;
          default:
            ne(a, v, F, be);
        }
        return ye !== null ? ne(
          a,
          v,
          "checked",
          ye
        ) : se !== null && ne(a, v, "checked", se), A !== null ? ne(a, v, "value", A) : Y !== null && ne(a, v, "value", Y), a.push(ee), null;
      case "menuitem":
        a.push(ge("menuitem"));
        for (var yt in h) if (S.call(h, yt) && (A = h[yt], A != null)) switch (yt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(a, v, yt, A);
        }
        return a.push(ue), null;
      case "title":
        a.push(ge("title")), A = null;
        for (We in h) if (S.call(h, We) && (F = h[We], F != null)) switch (We) {
          case "children":
            A = F;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(a, v, We, F);
        }
        return a.push(ue), A;
      case "listing":
      case "pre":
        a.push(ge(u)), F = A = null;
        for (se in h) if (S.call(h, se) && (Y = h[se], Y != null)) switch (se) {
          case "children":
            A = Y;
            break;
          case "dangerouslySetInnerHTML":
            F = Y;
            break;
          default:
            ne(a, v, se, Y);
        }
        if (a.push(ue), F != null) {
          if (A != null) throw Error(t(60));
          if (typeof F != "object" || !("__html" in F)) throw Error(t(61));
          h = F.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? a.push(ce, f(h)) : a.push(f("" + h)));
        }
        return typeof A == "string" && A[0] === `
` && a.push(ce), A;
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
        a.push(ge(u));
        for (var Et in h) if (S.call(h, Et) && (A = h[Et], A != null)) switch (Et) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ne(a, v, Et, A);
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
        return ze(a, h, u, v);
      case "html":
        return R.insertionMode === 0 && a.push(U), ze(a, h, u, v);
      default:
        if (u.indexOf("-") === -1 && typeof h.is != "string") return ze(a, h, u, v);
        a.push(ge(u)), F = A = null;
        for (be in h) if (S.call(h, be) && (Y = h[be], Y != null)) switch (be) {
          case "children":
            A = Y;
            break;
          case "dangerouslySetInnerHTML":
            F = Y;
            break;
          case "style":
            E(a, v, Y);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            w(be) && typeof Y != "function" && typeof Y != "symbol" && a.push(re, f(be), J, f(pe(Y)), K);
        }
        return a.push(ue), le(a, F, A), A;
    }
  }
  var nt = p("</"), Je = p(">"), Ce = p('<template id="'), cr = p('"></template>'), dr = p("<!--$-->"), Ar = p('<!--$?--><template id="'), Pt = p('"></template>'), Lt = p("<!--$!-->"), Zt = p("<!--/$-->"), Xt = p("<template"), ft = p('"'), Nt = p(' data-dgst="');
  p(' data-msg="'), p(' data-stck="');
  var fr = p("></template>");
  function ot(a, u, h) {
    if (o(a, Ar), h === null) throw Error(t(395));
    return o(a, h), s(a, Pt);
  }
  var pr = p('<div hidden id="'), ut = p('">'), Te = p("</div>"), Dt = p('<svg aria-hidden="true" style="display:none" id="'), Ue = p('">'), ct = p("</svg>"), vt = p('<math aria-hidden="true" style="display:none" id="'), Mt = p('">'), pt = p("</math>"), hr = p('<table hidden id="'), Kt = p('">'), gr = p("</table>"), Ft = p('<table hidden><tbody id="'), Qt = p('">'), Rr = p("</tbody></table>"), xt = p('<table hidden><tr id="'), Jt = p('">'), zt = p("</tr></table>"), mr = p('<table hidden><colgroup id="'), $t = p('">'), St = p("</colgroup></table>");
  function ht(a, u, h, v) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return o(a, pr), o(a, u.segmentPrefix), o(a, f(v.toString(16))), s(a, ut);
      case 2:
        return o(a, Dt), o(a, u.segmentPrefix), o(a, f(v.toString(16))), s(a, Ue);
      case 3:
        return o(a, vt), o(a, u.segmentPrefix), o(a, f(v.toString(16))), s(a, Mt);
      case 4:
        return o(a, hr), o(a, u.segmentPrefix), o(a, f(v.toString(16))), s(a, Kt);
      case 5:
        return o(a, Ft), o(a, u.segmentPrefix), o(a, f(v.toString(16))), s(a, Qt);
      case 6:
        return o(a, xt), o(a, u.segmentPrefix), o(a, f(v.toString(16))), s(a, Jt);
      case 7:
        return o(
          a,
          mr
        ), o(a, u.segmentPrefix), o(a, f(v.toString(16))), s(a, $t);
      default:
        throw Error(t(397));
    }
  }
  function It(a, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return s(a, Te);
      case 2:
        return s(a, ct);
      case 3:
        return s(a, pt);
      case 4:
        return s(a, gr);
      case 5:
        return s(a, Rr);
      case 6:
        return s(a, zt);
      case 7:
        return s(a, St);
      default:
        throw Error(t(397));
    }
  }
  var Or = p('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), er = p('$RS("'), Bt = p('","'), Vt = p('")<\/script>'), k = p('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Q = p('$RC("'), q = p('","'), Se = p('")<\/script>'), Me = p('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Pe = p('$RX("'), He = p('"'), dt = p(")<\/script>"), at = p(","), et = /[<\u2028\u2029]/g;
  function kt(a) {
    return JSON.stringify(a).replace(et, function(u) {
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
  var tr = Object.assign, cn = Symbol.for("react.element"), yr = Symbol.for("react.portal"), vr = Symbol.for("react.fragment"), Wr = Symbol.for("react.strict_mode"), Hr = Symbol.for("react.profiler"), qr = Symbol.for("react.provider"), Nr = Symbol.for("react.context"), dn = Symbol.for("react.forward_ref"), fn = Symbol.for("react.suspense"), Gr = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), b = Symbol.for("react.debug_trace_mode"), N = Symbol.for("react.legacy_hidden"), T = Symbol.for("react.default_value"), D = Symbol.iterator;
  function X(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case vr:
        return "Fragment";
      case yr:
        return "Portal";
      case Hr:
        return "Profiler";
      case Wr:
        return "StrictMode";
      case fn:
        return "Suspense";
      case Gr:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Nr:
        return (a.displayName || "Context") + ".Consumer";
      case qr:
        return (a._context.displayName || "Context") + ".Provider";
      case dn:
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case i:
        return u = a.displayName || null, u !== null ? u : X(a.type) || "Memo";
      case c:
        u = a._payload, a = a._init;
        try {
          return X(a(u));
        } catch {
        }
    }
    return null;
  }
  var ae = {};
  function de(a, u) {
    if (a = a.contextTypes, !a) return ae;
    var h = {}, v;
    for (v in a) h[v] = u[v];
    return h;
  }
  var me = null;
  function qe(a, u) {
    if (a !== u) {
      a.context._currentValue = a.parentValue, a = a.parent;
      var h = u.parent;
      if (a === null) {
        if (h !== null) throw Error(t(401));
      } else {
        if (h === null) throw Error(t(401));
        qe(a, h);
      }
      u.context._currentValue = u.value;
    }
  }
  function _t(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && _t(a);
  }
  function Ct(a) {
    var u = a.parent;
    u !== null && Ct(u), a.context._currentValue = a.value;
  }
  function gt(a, u) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === u.depth ? qe(a, u) : gt(a, u);
  }
  function br(a, u) {
    var h = u.parent;
    if (h === null) throw Error(t(402));
    a.depth === h.depth ? qe(a, h) : br(a, h), u.context._currentValue = u.value;
  }
  function Ut(a) {
    var u = me;
    u !== a && (u === null ? Ct(a) : a === null ? _t(u) : u.depth === a.depth ? qe(u, a) : u.depth > a.depth ? gt(u, a) : br(u, a), me = a);
  }
  var Yr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function wr(a, u, h, v) {
    var R = a.state !== void 0 ? a.state : null;
    a.updater = Yr, a.props = h, a.state = R;
    var A = { queue: [], replace: !1 };
    a._reactInternals = A;
    var F = u.contextType;
    if (a.context = typeof F == "object" && F !== null ? F._currentValue : v, F = u.getDerivedStateFromProps, typeof F == "function" && (F = F(h, R), R = F == null ? R : tr({}, R, F), a.state = R), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && Yr.enqueueReplaceState(a, a.state, null), A.queue !== null && 0 < A.queue.length) if (u = A.queue, F = A.replace, A.queue = null, A.replace = !1, F && u.length === 1) a.state = u[0];
    else {
      for (A = F ? u[0] : a.state, R = !0, F = F ? 1 : 0; F < u.length; F++) {
        var Y = u[F];
        Y = typeof Y == "function" ? Y.call(a, A, h, v) : Y, Y != null && (R ? (R = !1, A = tr({}, A, Y)) : tr(A, Y));
      }
      a.state = A;
    }
    else A.queue = null;
  }
  var pn = { id: 1, overflow: "" };
  function rr(a, u, h) {
    var v = a.id;
    a = a.overflow;
    var R = 32 - hn(v) - 1;
    v &= ~(1 << R), h += 1;
    var A = 32 - hn(u) + R;
    if (30 < A) {
      var F = R - R % 5;
      return A = (v & (1 << F) - 1).toString(32), v >>= F, R -= F, { id: 1 << 32 - hn(u) + R | h << R | v, overflow: A + a };
    }
    return { id: 1 << A | h << R | v, overflow: a };
  }
  var hn = Math.clz32 ? Math.clz32 : Hs, Us = Math.log, Ws = Math.LN2;
  function Hs(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Us(a) / Ws | 0) | 0;
  }
  function qs(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var Gs = typeof Object.is == "function" ? Object.is : qs, Wt = null, ii = null, gn = null, $e = null, Zr = !1, mn = !1, Xr = 0, nr = null, yn = 0;
  function xr() {
    if (Wt === null) throw Error(t(321));
    return Wt;
  }
  function vo() {
    if (0 < yn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function oi() {
    return $e === null ? gn === null ? (Zr = !1, gn = $e = vo()) : (Zr = !0, $e = gn) : $e.next === null ? (Zr = !1, $e = $e.next = vo()) : (Zr = !0, $e = $e.next), $e;
  }
  function ai() {
    ii = Wt = null, mn = !1, gn = null, yn = 0, $e = nr = null;
  }
  function bo(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function wo(a, u, h) {
    if (Wt = xr(), $e = oi(), Zr) {
      var v = $e.queue;
      if (u = v.dispatch, nr !== null && (h = nr.get(v), h !== void 0)) {
        nr.delete(v), v = $e.memoizedState;
        do
          v = a(v, h.action), h = h.next;
        while (h !== null);
        return $e.memoizedState = v, [v, u];
      }
      return [$e.memoizedState, u];
    }
    return a = a === bo ? typeof u == "function" ? u() : u : h !== void 0 ? h(u) : u, $e.memoizedState = a, a = $e.queue = { last: null, dispatch: null }, a = a.dispatch = Ys.bind(null, Wt, a), [$e.memoizedState, a];
  }
  function xo(a, u) {
    if (Wt = xr(), $e = oi(), u = u === void 0 ? null : u, $e !== null) {
      var h = $e.memoizedState;
      if (h !== null && u !== null) {
        var v = h[1];
        e: if (v === null) v = !1;
        else {
          for (var R = 0; R < v.length && R < u.length; R++) if (!Gs(u[R], v[R])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return h[0];
      }
    }
    return a = a(), $e.memoizedState = [a, u], a;
  }
  function Ys(a, u, h) {
    if (25 <= yn) throw Error(t(301));
    if (a === Wt) if (mn = !0, a = { action: h, next: null }, nr === null && (nr = /* @__PURE__ */ new Map()), h = nr.get(u), h === void 0) nr.set(u, a);
    else {
      for (u = h; u.next !== null; ) u = u.next;
      u.next = a;
    }
  }
  function Zs() {
    throw Error(t(394));
  }
  function vn() {
  }
  var So = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return xr(), a._currentValue;
  }, useMemo: xo, useReducer: wo, useRef: function(a) {
    Wt = xr(), $e = oi();
    var u = $e.memoizedState;
    return u === null ? (a = { current: a }, $e.memoizedState = a) : u;
  }, useState: function(a) {
    return wo(bo, a);
  }, useInsertionEffect: vn, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return xo(function() {
      return a;
    }, u);
  }, useImperativeHandle: vn, useEffect: vn, useDebugValue: vn, useDeferredValue: function(a) {
    return xr(), a;
  }, useTransition: function() {
    return xr(), [!1, Zs];
  }, useId: function() {
    var a = ii.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - hn(a) - 1)).toString(32) + u;
    var h = bn;
    if (h === null) throw Error(t(404));
    return u = Xr++, a = ":" + h.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return xr(), u(a._source);
  }, useSyncExternalStore: function(a, u, h) {
    if (h === void 0) throw Error(t(407));
    return h();
  } }, bn = null, si = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Xs(a) {
    return console.error(a), null;
  }
  function Kr() {
  }
  function Ks(a, u, h, v, R, A, F, Y, se) {
    var be = [], ye = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: v === void 0 ? 12800 : v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ye, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: R === void 0 ? Xs : R, onAllReady: A === void 0 ? Kr : A, onShellReady: F === void 0 ? Kr : F, onShellError: Y === void 0 ? Kr : Y, onFatalError: se === void 0 ? Kr : se }, h = wn(u, 0, null, h, !1, !1), h.parentFlushed = !0, a = li(u, a, null, h, ye, ae, null, pn), be.push(a), u;
  }
  function li(a, u, h, v, R, A, F, Y) {
    a.allPendingTasks++, h === null ? a.pendingRootTasks++ : h.pendingTasks++;
    var se = { node: u, ping: function() {
      var be = a.pingedTasks;
      be.push(se), be.length === 1 && Ro(a);
    }, blockedBoundary: h, blockedSegment: v, abortSet: R, legacyContext: A, context: F, treeContext: Y };
    return R.add(se), se;
  }
  function wn(a, u, h, v, R, A) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: h, lastPushedText: R, textEmbedded: A };
  }
  function Qr(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function xn(a, u) {
    var h = a.onShellError;
    h(u), h = a.onFatalError, h(u), a.destination !== null ? (a.status = 2, x(a.destination, u)) : (a.status = 1, a.fatalError = u);
  }
  function ko(a, u, h, v, R) {
    for (Wt = {}, ii = u, Xr = 0, a = h(v, R); mn; ) mn = !1, Xr = 0, yn += 1, $e = null, a = h(v, R);
    return ai(), a;
  }
  function _o(a, u, h, v) {
    var R = h.render(), A = v.childContextTypes;
    if (A != null) {
      var F = u.legacyContext;
      if (typeof h.getChildContext != "function") v = F;
      else {
        h = h.getChildContext();
        for (var Y in h) if (!(Y in A)) throw Error(t(108, X(v) || "Unknown", Y));
        v = tr({}, F, h);
      }
      u.legacyContext = v, mt(a, u, R), u.legacyContext = F;
    } else mt(a, u, R);
  }
  function Co(a, u) {
    if (a && a.defaultProps) {
      u = tr({}, u), a = a.defaultProps;
      for (var h in a) u[h] === void 0 && (u[h] = a[h]);
      return u;
    }
    return u;
  }
  function ui(a, u, h, v, R) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      R = de(h, u.legacyContext);
      var A = h.contextType;
      A = new h(v, typeof A == "object" && A !== null ? A._currentValue : R), wr(A, h, v, R), _o(a, u, A, h);
    } else {
      A = de(h, u.legacyContext), R = ko(a, u, h, v, A);
      var F = Xr !== 0;
      if (typeof R == "object" && R !== null && typeof R.render == "function" && R.$$typeof === void 0) wr(R, h, v, A), _o(a, u, R, h);
      else if (F) {
        v = u.treeContext, u.treeContext = rr(v, 1, 0);
        try {
          mt(a, u, R);
        } finally {
          u.treeContext = v;
        }
      } else mt(a, u, R);
    }
    else if (typeof h == "string") {
      switch (R = u.blockedSegment, A = ie(R.chunks, h, v, a.responseState, R.formatContext), R.lastPushedText = !1, F = R.formatContext, R.formatContext = Ze(F, h, v), ci(a, u, A), R.formatContext = F, h) {
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
          R.chunks.push(nt, f(h), Je);
      }
      R.lastPushedText = !1;
    } else {
      switch (h) {
        case N:
        case b:
        case Wr:
        case Hr:
        case vr:
          mt(a, u, v.children);
          return;
        case Gr:
          mt(a, u, v.children);
          return;
        case g:
          throw Error(t(343));
        case fn:
          e: {
            h = u.blockedBoundary, R = u.blockedSegment, A = v.fallback, v = v.children, F = /* @__PURE__ */ new Set();
            var Y = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: F, errorDigest: null }, se = wn(a, R.chunks.length, Y, R.formatContext, !1, !1);
            R.children.push(se), R.lastPushedText = !1;
            var be = wn(a, 0, null, R.formatContext, !1, !1);
            be.parentFlushed = !0, u.blockedBoundary = Y, u.blockedSegment = be;
            try {
              if (ci(
                a,
                u,
                v
              ), be.lastPushedText && be.textEmbedded && be.chunks.push(L), be.status = 1, Sn(Y, be), Y.pendingTasks === 0) break e;
            } catch (ye) {
              be.status = 4, Y.forceClientRender = !0, Y.errorDigest = Qr(a, ye);
            } finally {
              u.blockedBoundary = h, u.blockedSegment = R;
            }
            u = li(a, A, h, se, F, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case dn:
          if (v = ko(a, u, h.render, v, R), Xr !== 0) {
            h = u.treeContext, u.treeContext = rr(h, 1, 0);
            try {
              mt(a, u, v);
            } finally {
              u.treeContext = h;
            }
          } else mt(a, u, v);
          return;
        case i:
          h = h.type, v = Co(h, v), ui(a, u, h, v, R);
          return;
        case qr:
          if (R = v.children, h = h._context, v = v.value, A = h._currentValue, h._currentValue = v, F = me, me = v = { parent: F, depth: F === null ? 0 : F.depth + 1, context: h, parentValue: A, value: v }, u.context = v, mt(a, u, R), a = me, a === null) throw Error(t(403));
          v = a.parentValue, a.context._currentValue = v === T ? a.context._defaultValue : v, a = me = a.parent, u.context = a;
          return;
        case Nr:
          v = v.children, v = v(h._currentValue), mt(a, u, v);
          return;
        case c:
          R = h._init, h = R(h._payload), v = Co(h, v), ui(a, u, h, v, void 0);
          return;
      }
      throw Error(t(
        130,
        h == null ? h : typeof h,
        ""
      ));
    }
  }
  function mt(a, u, h) {
    if (u.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case cn:
          ui(a, u, h.type, h.props, h.ref);
          return;
        case yr:
          throw Error(t(257));
        case c:
          var v = h._init;
          h = v(h._payload), mt(a, u, h);
          return;
      }
      if (Be(h)) {
        Eo(a, u, h);
        return;
      }
      if (h === null || typeof h != "object" ? v = null : (v = D && h[D] || h["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(h))) {
        if (h = v.next(), !h.done) {
          var R = [];
          do
            R.push(h.value), h = v.next();
          while (!h.done);
          Eo(a, u, R);
        }
        return;
      }
      throw a = Object.prototype.toString.call(h), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : a));
    }
    typeof h == "string" ? (v = u.blockedSegment, v.lastPushedText = O(u.blockedSegment.chunks, h, a.responseState, v.lastPushedText)) : typeof h == "number" && (v = u.blockedSegment, v.lastPushedText = O(u.blockedSegment.chunks, "" + h, a.responseState, v.lastPushedText));
  }
  function Eo(a, u, h) {
    for (var v = h.length, R = 0; R < v; R++) {
      var A = u.treeContext;
      u.treeContext = rr(A, v, R);
      try {
        ci(a, u, h[R]);
      } finally {
        u.treeContext = A;
      }
    }
  }
  function ci(a, u, h) {
    var v = u.blockedSegment.formatContext, R = u.legacyContext, A = u.context;
    try {
      return mt(a, u, h);
    } catch (se) {
      if (ai(), typeof se == "object" && se !== null && typeof se.then == "function") {
        h = se;
        var F = u.blockedSegment, Y = wn(a, F.chunks.length, null, F.formatContext, F.lastPushedText, !0);
        F.children.push(Y), F.lastPushedText = !1, a = li(a, u.node, u.blockedBoundary, Y, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, h.then(a, a), u.blockedSegment.formatContext = v, u.legacyContext = R, u.context = A, Ut(A);
      } else throw u.blockedSegment.formatContext = v, u.legacyContext = R, u.context = A, Ut(A), se;
    }
  }
  function Qs(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Ao(this, u, a);
  }
  function To(a, u, h) {
    var v = a.blockedBoundary;
    a.blockedSegment.status = 3, v === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.close())) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, a = h === void 0 ? Error(t(432)) : h, v.errorDigest = u.onError(a), v.parentFlushed && u.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(R) {
      return To(R, u, h);
    }), v.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (v = u.onAllReady, v()));
  }
  function Sn(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var h = u.children[0];
      h.id = u.id, h.parentFlushed = !0, h.status === 1 && Sn(a, h);
    } else a.completedSegments.push(u);
  }
  function Ao(a, u, h) {
    if (u === null) {
      if (h.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = h;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Kr, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && Sn(u, h), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Qs, a), u.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (Sn(u, h), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function Ro(a) {
    if (a.status !== 2) {
      var u = me, h = si.current;
      si.current = So;
      var v = bn;
      bn = a.responseState;
      try {
        var R = a.pingedTasks, A;
        for (A = 0; A < R.length; A++) {
          var F = R[A], Y = a, se = F.blockedSegment;
          if (se.status === 0) {
            Ut(F.context);
            try {
              mt(Y, F, F.node), se.lastPushedText && se.textEmbedded && se.chunks.push(L), F.abortSet.delete(F), se.status = 1, Ao(Y, F.blockedBoundary, se);
            } catch (Tt) {
              if (ai(), typeof Tt == "object" && Tt !== null && typeof Tt.then == "function") {
                var be = F.ping;
                Tt.then(be, be);
              } else {
                F.abortSet.delete(F), se.status = 4;
                var ye = F.blockedBoundary, We = Tt, yt = Qr(Y, We);
                if (ye === null ? xn(Y, We) : (ye.pendingTasks--, ye.forceClientRender || (ye.forceClientRender = !0, ye.errorDigest = yt, ye.parentFlushed && Y.clientRenderedBoundaries.push(ye))), Y.allPendingTasks--, Y.allPendingTasks === 0) {
                  var Et = Y.onAllReady;
                  Et();
                }
              }
            } finally {
            }
          }
        }
        R.splice(0, A), a.destination !== null && di(a, a.destination);
      } catch (Tt) {
        Qr(a, Tt), xn(a, Tt);
      } finally {
        bn = v, si.current = h, h === So && Ut(u);
      }
    }
  }
  function kn(a, u, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var v = h.id = a.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, a = a.responseState, o(u, Ce), o(u, a.placeholderPrefix), a = f(v.toString(16)), o(u, a), s(u, cr);
      case 1:
        h.status = 2;
        var R = !0;
        v = h.chunks;
        var A = 0;
        h = h.children;
        for (var F = 0; F < h.length; F++) {
          for (R = h[F]; A < R.index; A++) o(u, v[A]);
          R = _n(a, u, R);
        }
        for (; A < v.length - 1; A++) o(u, v[A]);
        return A < v.length && (R = s(u, v[A])), R;
      default:
        throw Error(t(390));
    }
  }
  function _n(a, u, h) {
    var v = h.boundary;
    if (v === null) return kn(a, u, h);
    if (v.parentFlushed = !0, v.forceClientRender) v = v.errorDigest, s(u, Lt), o(u, Xt), v && (o(u, Nt), o(u, f(pe(v))), o(u, ft)), s(u, fr), kn(a, u, h);
    else if (0 < v.pendingTasks) {
      v.rootSegmentID = a.nextSegmentId++, 0 < v.completedSegments.length && a.partialBoundaries.push(v);
      var R = a.responseState, A = R.nextSuspenseID++;
      R = p(R.boundaryPrefix + A.toString(16)), v = v.id = R, ot(u, a.responseState, v), kn(a, u, h);
    } else if (v.byteSize > a.progressiveChunkSize) v.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(v), ot(u, a.responseState, v.id), kn(a, u, h);
    else {
      if (s(u, dr), h = v.completedSegments, h.length !== 1) throw Error(t(391));
      _n(a, u, h[0]);
    }
    return s(u, Zt);
  }
  function Oo(a, u, h) {
    return ht(u, a.responseState, h.formatContext, h.id), _n(a, u, h), It(u, h.formatContext);
  }
  function No(a, u, h) {
    for (var v = h.completedSegments, R = 0; R < v.length; R++) Io(a, u, h, v[R]);
    if (v.length = 0, a = a.responseState, v = h.id, h = h.rootSegmentID, o(u, a.startInlineScript), a.sentCompleteBoundaryFunction ? o(u, Q) : (a.sentCompleteBoundaryFunction = !0, o(u, k)), v === null) throw Error(t(395));
    return h = f(h.toString(16)), o(u, v), o(u, q), o(u, a.segmentPrefix), o(u, h), s(u, Se);
  }
  function Io(a, u, h, v) {
    if (v.status === 2) return !0;
    var R = v.id;
    if (R === -1) {
      if ((v.id = h.rootSegmentID) === -1) throw Error(t(392));
      return Oo(a, u, v);
    }
    return Oo(a, u, v), a = a.responseState, o(u, a.startInlineScript), a.sentCompleteSegmentFunction ? o(u, er) : (a.sentCompleteSegmentFunction = !0, o(u, Or)), o(u, a.segmentPrefix), R = f(R.toString(16)), o(u, R), o(u, Bt), o(u, a.placeholderPrefix), o(u, R), s(u, Vt);
  }
  function di(a, u) {
    r = new Uint8Array(512), n = 0;
    try {
      var h = a.completedRootSegment;
      if (h !== null && a.pendingRootTasks === 0) {
        _n(a, u, h), a.completedRootSegment = null;
        var v = a.responseState.bootstrapChunks;
        for (h = 0; h < v.length - 1; h++) o(u, v[h]);
        h < v.length && s(u, v[h]);
      }
      var R = a.clientRenderedBoundaries, A;
      for (A = 0; A < R.length; A++) {
        var F = R[A];
        v = u;
        var Y = a.responseState, se = F.id, be = F.errorDigest, ye = F.errorMessage, We = F.errorComponentStack;
        if (o(v, Y.startInlineScript), Y.sentClientRenderFunction ? o(v, Pe) : (Y.sentClientRenderFunction = !0, o(
          v,
          Me
        )), se === null) throw Error(t(395));
        o(v, se), o(v, He), (be || ye || We) && (o(v, at), o(v, f(kt(be || "")))), (ye || We) && (o(v, at), o(v, f(kt(ye || "")))), We && (o(v, at), o(v, f(kt(We)))), s(v, dt);
      }
      R.splice(0, A);
      var yt = a.completedBoundaries;
      for (A = 0; A < yt.length; A++) No(a, u, yt[A]);
      yt.splice(0, A), d(u), r = new Uint8Array(512), n = 0;
      var Et = a.partialBoundaries;
      for (A = 0; A < Et.length; A++) {
        var Tt = Et[A];
        e: {
          R = a, F = u;
          var Cn = Tt.completedSegments;
          for (Y = 0; Y < Cn.length; Y++) if (!Io(
            R,
            F,
            Tt,
            Cn[Y]
          )) {
            Y++, Cn.splice(0, Y);
            var Po = !1;
            break e;
          }
          Cn.splice(0, Y), Po = !0;
        }
        if (!Po) {
          a.destination = null, A++, Et.splice(0, A);
          return;
        }
      }
      Et.splice(0, A);
      var fi = a.completedBoundaries;
      for (A = 0; A < fi.length; A++) No(a, u, fi[A]);
      fi.splice(0, A);
    } finally {
      d(u), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.close();
    }
  }
  function jo(a, u) {
    try {
      var h = a.abortableTasks;
      h.forEach(function(v) {
        return To(v, a, u);
      }), h.clear(), a.destination !== null && di(a, a.destination);
    } catch (v) {
      Qr(a, v), xn(a, v);
    }
  }
  return An.renderToReadableStream = function(a, u) {
    return new Promise(function(h, v) {
      var R, A, F = new Promise(function(ye, We) {
        A = ye, R = We;
      }), Y = Ks(a, ke(u ? u.identifierPrefix : void 0, u ? u.nonce : void 0, u ? u.bootstrapScriptContent : void 0, u ? u.bootstrapScripts : void 0, u ? u.bootstrapModules : void 0), Ye(u ? u.namespaceURI : void 0), u ? u.progressiveChunkSize : void 0, u ? u.onError : void 0, A, function() {
        var ye = new ReadableStream({ type: "bytes", pull: function(We) {
          if (Y.status === 1) Y.status = 2, x(We, Y.fatalError);
          else if (Y.status !== 2 && Y.destination === null) {
            Y.destination = We;
            try {
              di(Y, We);
            } catch (yt) {
              Qr(Y, yt), xn(Y, yt);
            }
          }
        }, cancel: function() {
          jo(Y);
        } }, { highWaterMark: 0 });
        ye.allReady = F, h(ye);
      }, function(ye) {
        F.catch(function() {
        }), v(ye);
      }, R);
      if (u && u.signal) {
        var se = u.signal, be = function() {
          jo(Y, se.reason), se.removeEventListener("abort", be);
        };
        se.addEventListener("abort", be);
      }
      Ro(Y);
    });
  }, An.version = "18.3.1", An;
}
var Br, Ga;
Br = Vl(), Ga = Ul();
Br.version;
Br.renderToString;
Br.renderToStaticMarkup;
Br.renderToNodeStream;
Br.renderToStaticNodeStream;
Ga.renderToReadableStream;
const Wl = "staticMarkup";
function Hl() {
  const e = rl().indexOf(Wl) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const lr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Hl(), { onClick: o, ...s } = r.props;
  if (n)
    return rt.cloneElement(r, {
      ...s,
      onClick: (f) => (Bl(e), o ? o(f) : !0)
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
  return rt.cloneElement(r, {
    ...s,
    onClick: o,
    ...m
  });
};
l.number, l.number, l.func, l.object;
l.arrayOf(Ua).isRequired, l.number;
const ql = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Qi = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  block: o,
  color: s,
  disabled: d,
  element: m,
  href: f,
  icon: p,
  innerRef: x,
  onClick: S,
  size: j,
  classes: B,
  target: C,
  ...w
}) => {
  const I = Pr("btn", {
    [`btn-${s}`]: !0,
    "btn-md": j === "small",
    "btn-sm": j === "xsmall",
    "btn-block": o,
    disabled: d
  });
  let M = m;
  return f && m === "button" && (M = "a"), /* @__PURE__ */ z.jsx(
    lr,
    {
      gaData: {
        ...ql,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ z.jsxs(
        M,
        {
          type: M === "button" && S ? "button" : void 0,
          ...w,
          className: Pr(B) || I,
          href: f,
          ref: x,
          onClick: S,
          "aria-label": n,
          target: M === "a" ? C : null,
          children: [
            p && /* @__PURE__ */ z.jsx("i", { className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Qi.propTypes = {
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
  gaData: Ki,
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
Qi.defaultProps = {
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
var Ya = { exports: {} }, Le = {}, Yo;
function Gl() {
  if (Yo) return Le;
  Yo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), B = Symbol.for("react.client.reference");
  function C(w) {
    if (typeof w == "object" && w !== null) {
      var I = w.$$typeof;
      switch (I) {
        case e:
          switch (w = w.type, w) {
            case r:
            case o:
            case n:
            case f:
            case p:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case d:
                case m:
                case S:
                case x:
                  return w;
                case s:
                  return w;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  return Le.ContextConsumer = s, Le.ContextProvider = d, Le.Element = e, Le.ForwardRef = m, Le.Fragment = r, Le.Lazy = S, Le.Memo = x, Le.Portal = t, Le.Profiler = o, Le.StrictMode = n, Le.Suspense = f, Le.SuspenseList = p, Le.isContextConsumer = function(w) {
    return C(w) === s;
  }, Le.isContextProvider = function(w) {
    return C(w) === d;
  }, Le.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Le.isForwardRef = function(w) {
    return C(w) === m;
  }, Le.isFragment = function(w) {
    return C(w) === r;
  }, Le.isLazy = function(w) {
    return C(w) === S;
  }, Le.isMemo = function(w) {
    return C(w) === x;
  }, Le.isPortal = function(w) {
    return C(w) === t;
  }, Le.isProfiler = function(w) {
    return C(w) === o;
  }, Le.isStrictMode = function(w) {
    return C(w) === n;
  }, Le.isSuspense = function(w) {
    return C(w) === f;
  }, Le.isSuspenseList = function(w) {
    return C(w) === p;
  }, Le.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === o || w === n || w === f || w === p || w === j || typeof w == "object" && w !== null && (w.$$typeof === S || w.$$typeof === x || w.$$typeof === d || w.$$typeof === s || w.$$typeof === m || w.$$typeof === B || w.getModuleId !== void 0);
  }, Le.typeOf = C, Le;
}
Ya.exports = Gl();
var Ji = Ya.exports;
function Yl(e) {
  function t(L, O, P, V, y) {
    for (var Z = 0, E = 0, re = 0, J = 0, K, G, ne = 0, ue = 0, ee, le = ee = K = 0, te = 0, fe = 0, ze = 0, ce = 0, Qe = P.length, Ve = Qe - 1, ge, U = "", ie = "", nt = "", Je = "", Ce; te < Qe; ) {
      if (G = P.charCodeAt(te), te === Ve && E + J + re + Z !== 0 && (E !== 0 && (G = E === 47 ? 10 : 47), J = re = Z = 0, Qe++, Ve++), E + J + re + Z === 0) {
        if (te === Ve && (0 < fe && (U = U.replace(j, "")), 0 < U.trim().length)) {
          switch (G) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += P.charAt(te);
          }
          G = 59;
        }
        switch (G) {
          case 123:
            for (U = U.trim(), K = U.charCodeAt(0), ee = 1, ce = ++te; te < Qe; ) {
              switch (G = P.charCodeAt(te)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (G = P.charCodeAt(te + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (le = te + 1; le < Ve; ++le)
                          switch (P.charCodeAt(le)) {
                            case 47:
                              if (G === 42 && P.charCodeAt(le - 1) === 42 && te + 2 !== le) {
                                te = le + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (G === 47) {
                                te = le + 1;
                                break e;
                              }
                          }
                        te = le;
                      }
                  }
                  break;
                case 91:
                  G++;
                case 40:
                  G++;
                case 34:
                case 39:
                  for (; te++ < Ve && P.charCodeAt(te) !== G; )
                    ;
              }
              if (ee === 0) break;
              te++;
            }
            switch (ee = P.substring(ce, te), K === 0 && (K = (U = U.replace(S, "").trim()).charCodeAt(0)), K) {
              case 64:
                switch (0 < fe && (U = U.replace(j, "")), G = U.charCodeAt(1), G) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = O;
                    break;
                  default:
                    fe = Ke;
                }
                if (ee = t(O, fe, ee, G, y + 1), ce = ee.length, 0 < ke && (fe = r(Ke, U, ze), Ce = m(3, ee, fe, O, we, he, ce, G, y, V), U = fe.join(""), Ce !== void 0 && (ce = (ee = Ce.trim()).length) === 0 && (G = 0, ee = "")), 0 < ce) switch (G) {
                  case 115:
                    U = U.replace(oe, d);
                  case 100:
                  case 109:
                  case 45:
                    ee = U + "{" + ee + "}";
                    break;
                  case 107:
                    U = U.replace($, "$1 $2"), ee = U + "{" + ee + "}", ee = xe === 1 || xe === 2 && s("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                    break;
                  default:
                    ee = U + ee, V === 112 && (ee = (ie += ee, ""));
                }
                else ee = "";
                break;
              default:
                ee = t(O, r(O, U, ze), ee, V, y + 1);
            }
            nt += ee, ee = ze = fe = le = K = 0, U = "", G = P.charCodeAt(++te);
            break;
          case 125:
          case 59:
            if (U = (0 < fe ? U.replace(j, "") : U).trim(), 1 < (ce = U.length)) switch (le === 0 && (K = U.charCodeAt(0), K === 45 || 96 < K && 123 > K) && (ce = (U = U.replace(" ", ":")).length), 0 < ke && (Ce = m(1, U, O, L, we, he, ie.length, V, y, V)) !== void 0 && (ce = (U = Ce.trim()).length) === 0 && (U = "\0\0"), K = U.charCodeAt(0), G = U.charCodeAt(1), K) {
              case 0:
                break;
              case 64:
                if (G === 105 || G === 99) {
                  Je += U + P.charAt(te);
                  break;
                }
              default:
                U.charCodeAt(ce - 1) !== 58 && (ie += o(U, K, G, U.charCodeAt(2)));
            }
            ze = fe = le = K = 0, U = "", G = P.charCodeAt(++te);
        }
      }
      switch (G) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + K === 0 && V !== 107 && 0 < U.length && (fe = 1, U += "\0"), 0 < ke * Ye && m(0, U, O, L, we, he, ie.length, V, y, V), he = 1, we++;
          break;
        case 59:
        case 125:
          if (E + J + re + Z === 0) {
            he++;
            break;
          }
        default:
          switch (he++, ge = P.charAt(te), G) {
            case 9:
            case 32:
              if (J + Z + E === 0) switch (ne) {
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
              J + E + Z === 0 && (fe = ze = 1, ge = "\f" + ge);
              break;
            case 108:
              if (J + E + Z + Ee === 0 && 0 < le) switch (te - le) {
                case 2:
                  ne === 112 && P.charCodeAt(te - 3) === 58 && (Ee = ne);
                case 8:
                  ue === 111 && (Ee = ue);
              }
              break;
            case 58:
              J + E + Z === 0 && (le = te);
              break;
            case 44:
              E + re + J + Z === 0 && (fe = 1, ge += "\r");
              break;
            case 34:
            case 39:
              E === 0 && (J = J === G ? 0 : J === 0 ? G : J);
              break;
            case 91:
              J + E + re === 0 && Z++;
              break;
            case 93:
              J + E + re === 0 && Z--;
              break;
            case 41:
              J + E + Z === 0 && re--;
              break;
            case 40:
              if (J + E + Z === 0) {
                if (K === 0) switch (2 * ne + 3 * ue) {
                  case 533:
                    break;
                  default:
                    K = 1;
                }
                re++;
              }
              break;
            case 64:
              E + re + J + Z + le + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + Z + re)) switch (E) {
                case 0:
                  switch (2 * G + 3 * P.charCodeAt(te + 1)) {
                    case 235:
                      E = 47;
                      break;
                    case 220:
                      ce = te, E = 42;
                  }
                  break;
                case 42:
                  G === 47 && ne === 42 && ce + 2 !== te && (P.charCodeAt(ce + 2) === 33 && (ie += P.substring(ce, te + 1)), ge = "", E = 0);
              }
          }
          E === 0 && (U += ge);
      }
      ue = ne, ne = G, te++;
    }
    if (ce = ie.length, 0 < ce) {
      if (fe = O, 0 < ke && (Ce = m(2, ie, fe, L, we, he, ce, V, y, V), Ce !== void 0 && (ie = Ce).length === 0)) return Je + ie + nt;
      if (ie = fe.join(",") + "{" + ie + "}", xe * Ee !== 0) {
        switch (xe !== 2 || s(ie, 2) || (Ee = 0), Ee) {
          case 111:
            ie = ie.replace(H, ":-moz-$1") + ie;
            break;
          case 112:
            ie = ie.replace(W, "::-webkit-input-$1") + ie.replace(W, "::-moz-$1") + ie.replace(W, ":-ms-input-$1") + ie;
        }
        Ee = 0;
      }
    }
    return Je + ie + nt;
  }
  function r(L, O, P) {
    var V = O.trim().split(I);
    O = V;
    var y = V.length, Z = L.length;
    switch (Z) {
      case 0:
      case 1:
        var E = 0;
        for (L = Z === 0 ? "" : L[0] + " "; E < y; ++E)
          O[E] = n(L, O[E], P).trim();
        break;
      default:
        var re = E = 0;
        for (O = []; E < y; ++E)
          for (var J = 0; J < Z; ++J)
            O[re++] = n(L[J] + " ", V[E], P).trim();
    }
    return O;
  }
  function n(L, O, P) {
    var V = O.charCodeAt(0);
    switch (33 > V && (V = (O = O.trim()).charCodeAt(0)), V) {
      case 38:
        return O.replace(M, "$1" + L.trim());
      case 58:
        return L.trim() + O.replace(M, "$1" + L.trim());
      default:
        if (0 < 1 * P && 0 < O.indexOf("\f")) return O.replace(M, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + O;
  }
  function o(L, O, P, V) {
    var y = L + ";", Z = 2 * O + 3 * P + 4 * V;
    if (Z === 944) {
      L = y.indexOf(":", 9) + 1;
      var E = y.substring(L, y.length - 1).trim();
      return E = y.substring(0, L).trim() + E + ";", xe === 1 || xe === 2 && s(E, 1) ? "-webkit-" + E + E : E;
    }
    if (xe === 0 || xe === 2 && !s(y, 1)) return y;
    switch (Z) {
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
        if (0 < y.indexOf("image-set(", 11)) return y.replace(Xe, "$1-webkit-$2") + y;
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
        return C.test(y) ? y.replace(B, ":-webkit-") + y.replace(B, ":-moz-") + y : y;
      case 1e3:
        switch (E = y.substring(13).trim(), O = E.indexOf("-") + 1, E.charCodeAt(0) + E.charCodeAt(O)) {
          case 226:
            E = y.replace(_, "tb");
            break;
          case 232:
            E = y.replace(_, "tb-rl");
            break;
          case 220:
            E = y.replace(_, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + E + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (O = (y = L).length - 10, E = (y.charCodeAt(O) === 33 ? y.substring(0, O) : y).substring(L.indexOf(":", 7) + 1).trim(), Z = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
          case 203:
            if (111 > E.charCodeAt(8)) break;
          case 115:
            y = y.replace(E, "-webkit-" + E) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(E, "-webkit-" + (102 < Z ? "inline-" : "") + "box") + ";" + y.replace(E, "-webkit-" + E) + ";" + y.replace(E, "-ms-" + E + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return E = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + E + "-ms-flex-" + E + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(_e, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(_e, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Be.test(L) === !0) return (E = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(L.replace("stretch", "fill-available"), O, P, V).replace(":fill-available", ":stretch") : y.replace(E, "-webkit-" + E) + y.replace(E, "-moz-" + E.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, P + V === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(L, O) {
    var P = L.indexOf(O === 1 ? ":" : "{"), V = L.substring(0, O !== 3 ? P : 10);
    return P = L.substring(P + 1, L.length - 1), Fe(O !== 2 ? V : V.replace(Ie, "$1"), P, O);
  }
  function d(L, O) {
    var P = o(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
    return P !== O + ";" ? P.replace(pe, " or ($1)").substring(4) : "(" + O + ")";
  }
  function m(L, O, P, V, y, Z, E, re, J, K) {
    for (var G = 0, ne = O, ue; G < ke; ++G)
      switch (ue = je[G].call(x, L, ne, P, V, y, Z, E, re, J, K)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = ue;
      }
    if (ne !== O) return ne;
  }
  function f(L) {
    switch (L) {
      case void 0:
      case null:
        ke = je.length = 0;
        break;
      default:
        if (typeof L == "function") je[ke++] = L;
        else if (typeof L == "object") for (var O = 0, P = L.length; O < P; ++O)
          f(L[O]);
        else Ye = !!L | 0;
    }
    return f;
  }
  function p(L) {
    return L = L.prefix, L !== void 0 && (Fe = null, L ? typeof L != "function" ? xe = 1 : (xe = 2, Fe = L) : xe = 0), p;
  }
  function x(L, O) {
    var P = L;
    if (33 > P.charCodeAt(0) && (P = P.trim()), Ze = P, P = [Ze], 0 < ke) {
      var V = m(-1, O, P, P, we, he, 0, 0, 0, 0);
      V !== void 0 && typeof V == "string" && (O = V);
    }
    var y = t(Ke, P, O, 0, 0);
    return 0 < ke && (V = m(-2, y, P, P, we, he, y.length, 0, 0, 0), V !== void 0 && (y = V)), Ze = "", Ee = 0, he = we = 1, y;
  }
  var S = /^\0+/g, j = /[\0\r\f]/g, B = /: */g, C = /zoo|gra/, w = /([,: ])(transform)/g, I = /,\r+?/g, M = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, W = /::(place)/g, H = /:(read-only)/g, _ = /[svh]\w+-[tblr]{2}/, oe = /\(\s*(.*)\s*\)/g, pe = /([\s\S]*?);/g, _e = /-self|flex-/g, Ie = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Be = /stretch|:\s*\w+\-(?:conte|avail)/, Xe = /([^-])(image-set\()/, he = 1, we = 1, Ee = 0, xe = 1, Ke = [], je = [], ke = 0, Fe = null, Ye = 0, Ze = "";
  return x.use = f, x.set = p, e !== void 0 && p(e), x;
}
var Zl = {
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
function Xl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Kl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Zo = /* @__PURE__ */ Xl(
  function(e) {
    return Kl.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Za = { exports: {} }, Ae = {}, Xo;
function Ql() {
  if (Xo) return Ae;
  Xo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, B = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function W(_) {
    if (typeof _ == "object" && _ !== null) {
      var oe = _.$$typeof;
      switch (oe) {
        case t:
          switch (_ = _.type, _) {
            case f:
            case p:
            case n:
            case s:
            case o:
            case S:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case m:
                case x:
                case C:
                case B:
                case d:
                  return _;
                default:
                  return oe;
              }
          }
        case r:
          return oe;
      }
    }
  }
  function H(_) {
    return W(_) === p;
  }
  return Ae.AsyncMode = f, Ae.ConcurrentMode = p, Ae.ContextConsumer = m, Ae.ContextProvider = d, Ae.Element = t, Ae.ForwardRef = x, Ae.Fragment = n, Ae.Lazy = C, Ae.Memo = B, Ae.Portal = r, Ae.Profiler = s, Ae.StrictMode = o, Ae.Suspense = S, Ae.isAsyncMode = function(_) {
    return H(_) || W(_) === f;
  }, Ae.isConcurrentMode = H, Ae.isContextConsumer = function(_) {
    return W(_) === m;
  }, Ae.isContextProvider = function(_) {
    return W(_) === d;
  }, Ae.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, Ae.isForwardRef = function(_) {
    return W(_) === x;
  }, Ae.isFragment = function(_) {
    return W(_) === n;
  }, Ae.isLazy = function(_) {
    return W(_) === C;
  }, Ae.isMemo = function(_) {
    return W(_) === B;
  }, Ae.isPortal = function(_) {
    return W(_) === r;
  }, Ae.isProfiler = function(_) {
    return W(_) === s;
  }, Ae.isStrictMode = function(_) {
    return W(_) === o;
  }, Ae.isSuspense = function(_) {
    return W(_) === S;
  }, Ae.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === p || _ === s || _ === o || _ === S || _ === j || typeof _ == "object" && _ !== null && (_.$$typeof === C || _.$$typeof === B || _.$$typeof === d || _.$$typeof === m || _.$$typeof === x || _.$$typeof === I || _.$$typeof === M || _.$$typeof === $ || _.$$typeof === w);
  }, Ae.typeOf = W, Ae;
}
Za.exports = Ql();
var Jl = Za.exports, eo = Jl, eu = {
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
}, tu = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ru = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Xa = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, to = {};
to[eo.ForwardRef] = ru;
to[eo.Memo] = Xa;
function Ko(e) {
  return eo.isMemo(e) ? Xa : to[e.$$typeof] || eu;
}
var nu = Object.defineProperty, iu = Object.getOwnPropertyNames, Qo = Object.getOwnPropertySymbols, ou = Object.getOwnPropertyDescriptor, au = Object.getPrototypeOf, Jo = Object.prototype;
function Ka(e, t, r) {
  if (typeof t != "string") {
    if (Jo) {
      var n = au(t);
      n && n !== Jo && Ka(e, n, r);
    }
    var o = iu(t);
    Qo && (o = o.concat(Qo(t)));
    for (var s = Ko(e), d = Ko(t), m = 0; m < o.length; ++m) {
      var f = o[m];
      if (!tu[f] && !(r && r[f]) && !(d && d[f]) && !(s && s[f])) {
        var p = ou(t, f);
        try {
          nu(e, f, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var su = Ka;
const lu = /* @__PURE__ */ Xi(su);
var Oe = { env: { NODE_ENV: "production" } };
function Ht() {
  return (Ht = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ea = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Ni = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ji.typeOf(e);
}, Wn = Object.freeze([]), or = Object.freeze({});
function an(e) {
  return typeof e == "function";
}
function Ii(e) {
  return Oe.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function ro(e) {
  return e && typeof e.styledComponentId == "string";
}
var Lr = typeof Oe < "u" && Oe.env !== void 0 && (Oe.env.REACT_APP_SC_ATTR || Oe.env.SC_ATTR) || "data-styled", no = typeof window < "u" && "HTMLElement" in window, uu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Oe < "u" && Oe.env !== void 0 && (Oe.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Oe.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Oe.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Oe.env.REACT_APP_SC_DISABLE_SPEEDY : Oe.env.SC_DISABLE_SPEEDY !== void 0 && Oe.env.SC_DISABLE_SPEEDY !== "" ? Oe.env.SC_DISABLE_SPEEDY !== "false" && Oe.env.SC_DISABLE_SPEEDY : Oe.env.NODE_ENV !== "production")), cu = Oe.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function du() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Vr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw Oe.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(du.apply(void 0, [cu[e]].concat(r)).trim());
}
var fu = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++) n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, d = s; r >= d; ) (d <<= 1) < 0 && Vr(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(o), this.length = d;
      for (var m = s; m < d; m++) this.groupSizes[m] = 0;
    }
    for (var f = this.indexOfGroup(r + 1), p = 0, x = n.length; p < x; p++) this.tag.insertRule(f, n[p]) && (this.groupSizes[r]++, f++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), s = o + n;
      this.groupSizes[r] = 0;
      for (var d = o; d < s; d++) this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var o = this.groupSizes[r], s = this.indexOfGroup(r), d = s + o, m = s; m < d; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), zn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), rn = 1, Rn = function(e) {
  if (zn.has(e)) return zn.get(e);
  for (; Hn.has(rn); ) rn++;
  var t = rn++;
  return Oe.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Vr(16, "" + t), zn.set(e, t), Hn.set(t, e), t;
}, pu = function(e) {
  return Hn.get(e);
}, hu = function(e, t) {
  t >= rn && (rn = t + 1), zn.set(e, t), Hn.set(t, e);
}, gu = "style[" + Lr + '][data-styled-version="5.3.11"]', mu = new RegExp("^" + Lr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), yu = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, d = o.length; s < d; s++) (n = o[s]) && e.registerName(t, n);
}, vu = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = r.length; o < s; o++) {
    var d = r[o].trim();
    if (d) {
      var m = d.match(mu);
      if (m) {
        var f = 0 | parseInt(m[1], 10), p = m[2];
        f !== 0 && (hu(p, f), yu(e, p, m[3]), e.getTag().insertRules(f, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, bu = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Qa = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(m) {
    for (var f = m.childNodes, p = f.length; p >= 0; p--) {
      var x = f[p];
      if (x && x.nodeType === 1 && x.hasAttribute(Lr)) return x;
    }
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Lr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = bu();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, wu = function() {
  function e(r) {
    var n = this.element = Qa(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, d = 0, m = s.length; d < m; d++) {
        var f = s[d];
        if (f.ownerNode === o) return f;
      }
      Vr(17);
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
}(), xu = function() {
  function e(r) {
    var n = this.element = Qa(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Su = function() {
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
}(), ta = no, ku = { isServer: !no, useCSSOMInjection: !uu }, Ja = function() {
  function e(r, n, o) {
    r === void 0 && (r = or), n === void 0 && (n = {}), this.options = Ht({}, ku, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && no && ta && (ta = !1, function(s) {
      for (var d = document.querySelectorAll(gu), m = 0, f = d.length; m < f; m++) {
        var p = d[m];
        p && p.getAttribute(Lr) !== "active" && (vu(s, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Rn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Ht({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = o ? new Su(d) : s ? new wu(d) : new xu(d), new fu(r)));
    var r, n, o, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Rn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(Rn(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Rn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, s = "", d = 0; d < o; d++) {
        var m = pu(d);
        if (m !== void 0) {
          var f = r.names.get(m), p = n.getGroup(d);
          if (f && p && f.size) {
            var x = Lr + ".g" + d + '[id="' + m + '"]', S = "";
            f !== void 0 && f.forEach(function(j) {
              j.length > 0 && (S += j + ",");
            }), s += "" + p + x + '{content:"' + S + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), _u = /(a)(d)/gi, ra = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ji(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ra(t % 52) + r;
  return (ra(t % 52) + r).replace(_u, "$1-$2");
}
var _r = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, es = function(e) {
  return _r(5381, e);
};
function Cu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (an(r) && !ro(r)) return !1;
  }
  return !0;
}
var Eu = es("5.3.11"), Tu = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = Oe.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Cu(t), this.componentId = r, this.baseHash = _r(Eu, r), this.baseStyle = n, Ja.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Dr(this.rules, t, r, n).join(""), m = ji(_r(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(o, m)) {
        var f = n(d, "." + m, void 0, o);
        r.insertRules(o, m, f);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var p = this.rules.length, x = _r(this.baseHash, n.hash), S = "", j = 0; j < p; j++) {
        var B = this.rules[j];
        if (typeof B == "string") S += B, Oe.env.NODE_ENV !== "production" && (x = _r(x, B + j));
        else if (B) {
          var C = Dr(B, t, r, n), w = Array.isArray(C) ? C.join("") : C;
          x = _r(x, w + j), S += w;
        }
      }
      if (S) {
        var I = ji(x >>> 0);
        if (!r.hasNameForId(o, I)) {
          var M = n(S, "." + I, void 0, o);
          r.insertRules(o, I, M);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), Au = /^\s*\/\/.*$/gm, Ru = [":", "[", ".", "#"];
function Ou(e) {
  var t, r, n, o, s = or, d = s.options, m = d === void 0 ? or : d, f = s.plugins, p = f === void 0 ? Wn : f, x = new Yl(m), S = [], j = /* @__PURE__ */ function(w) {
    function I(M) {
      if (M) try {
        w(M + "}");
      } catch {
      }
    }
    return function(M, $, W, H, _, oe, pe, _e, Ie, Be) {
      switch (M) {
        case 1:
          if (Ie === 0 && $.charCodeAt(0) === 64) return w($ + ";"), "";
          break;
        case 2:
          if (_e === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (_e) {
            case 102:
            case 112:
              return w(W[0] + $), "";
            default:
              return $ + (Be === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(I);
      }
    };
  }(function(w) {
    S.push(w);
  }), B = function(w, I, M) {
    return I === 0 && Ru.indexOf(M[r.length]) !== -1 || M.match(o) ? w : "." + t;
  };
  function C(w, I, M, $) {
    $ === void 0 && ($ = "&");
    var W = w.replace(Au, ""), H = I && M ? M + " " + I + " { " + W + " }" : W;
    return t = $, r = I, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), x(M || !I ? "" : I, H);
  }
  return x.use([].concat(p, [function(w, I, M) {
    w === 2 && M.length && M[0].lastIndexOf(r) > 0 && (M[0] = M[0].replace(n, B));
  }, j, function(w) {
    if (w === -2) {
      var I = S;
      return S = [], I;
    }
  }])), C.hash = p.length ? p.reduce(function(w, I) {
    return I.name || Vr(15), _r(w, I.name);
  }, 5381).toString() : "", C;
}
var ts = rt.createContext();
ts.Consumer;
var rs = rt.createContext(), Nu = (rs.Consumer, new Ja()), Pi = Ou();
function Iu() {
  return Yt(ts) || Nu;
}
function ju() {
  return Yt(rs) || Pi;
}
var Pu = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Pi);
      var d = n.name + s.hash;
      o.hasNameForId(n.id, d) || o.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return Vr(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Pi), this.name + t.hash;
  }, e;
}(), Lu = /([A-Z])/, Du = /([A-Z])/g, Mu = /^ms-/, Fu = function(e) {
  return "-" + e.toLowerCase();
};
function na(e) {
  return Lu.test(e) ? e.replace(Du, Fu).replace(Mu, "-ms-") : e;
}
var ia = function(e) {
  return e == null || e === !1 || e === "";
};
function Dr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], d = 0, m = e.length; d < m; d += 1) (o = Dr(e[d], t, r, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (ia(e)) return "";
  if (ro(e)) return "." + e.styledComponentId;
  if (an(e)) {
    if (typeof (p = e) != "function" || p.prototype && p.prototype.isReactComponent || !t) return e;
    var f = e(t);
    return Oe.env.NODE_ENV !== "production" && Ji.isElement(f) && console.warn(Ii(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Dr(f, t, r, n);
  }
  var p;
  return e instanceof Pu ? r ? (e.inject(r, n), e.getName(n)) : e : Ni(e) ? function x(S, j) {
    var B, C, w = [];
    for (var I in S) S.hasOwnProperty(I) && !ia(S[I]) && (Array.isArray(S[I]) && S[I].isCss || an(S[I]) ? w.push(na(I) + ":", S[I], ";") : Ni(S[I]) ? w.push.apply(w, x(S[I], I)) : w.push(na(I) + ": " + (B = I, (C = S[I]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || B in Zl || B.startsWith("--") ? String(C).trim() : C + "px") + ";"));
    return j ? [j + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var oa = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function zu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return an(e) || Ni(e) ? oa(Dr(ea(Wn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : oa(Dr(ea(e, r)));
}
var aa = /invalid hook call/i, On = /* @__PURE__ */ new Set(), $u = function(e, t) {
  if (Oe.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (aa.test(s)) o = !1, On.delete(r);
        else {
          for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) m[f - 1] = arguments[f];
          n.apply(void 0, [s].concat(m));
        }
      }, Zi(), o && !On.has(r) && (console.warn(r), On.add(r));
    } catch (s) {
      aa.test(s.message) && On.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Bu = function(e, t, r) {
  return r === void 0 && (r = or), e.theme !== r.theme && e.theme || t || r.theme;
}, Vu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Uu = /(^-|-$)/g;
function Si(e) {
  return e.replace(Vu, "-").replace(Uu, "");
}
var Wu = function(e) {
  return ji(es(e) >>> 0);
};
function Nn(e) {
  return typeof e == "string" && (Oe.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Li = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Hu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function qu(e, t, r) {
  var n = e[r];
  Li(t) && Li(n) ? ns(n, t) : e[r] = t;
}
function ns(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var o = 0, s = r; o < s.length; o++) {
    var d = s[o];
    if (Li(d)) for (var m in d) Hu(m) && qu(e, d[m], m);
  }
  return e;
}
var is = rt.createContext();
is.Consumer;
var ki = {};
function os(e, t, r) {
  var n = ro(e), o = !Nn(e), s = t.attrs, d = s === void 0 ? Wn : s, m = t.componentId, f = m === void 0 ? function($, W) {
    var H = typeof $ != "string" ? "sc" : Si($);
    ki[H] = (ki[H] || 0) + 1;
    var _ = H + "-" + Wu("5.3.11" + H + ki[H]);
    return W ? W + "-" + _ : _;
  }(t.displayName, t.parentComponentId) : m, p = t.displayName, x = p === void 0 ? function($) {
    return Nn($) ? "styled." + $ : "Styled(" + Ii($) + ")";
  }(e) : p, S = t.displayName && t.componentId ? Si(t.displayName) + "-" + t.componentId : t.componentId || f, j = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, B = t.shouldForwardProp;
  n && e.shouldForwardProp && (B = t.shouldForwardProp ? function($, W, H) {
    return e.shouldForwardProp($, W, H) && t.shouldForwardProp($, W, H);
  } : e.shouldForwardProp);
  var C, w = new Tu(r, S, n ? e.componentStyle : void 0), I = w.isStatic && d.length === 0, M = function($, W) {
    return function(H, _, oe, pe) {
      var _e = H.attrs, Ie = H.componentStyle, Be = H.defaultProps, Xe = H.foldedComponentIds, he = H.shouldForwardProp, we = H.styledComponentId, Ee = H.target, xe = function(V, y, Z) {
        V === void 0 && (V = or);
        var E = Ht({}, y, { theme: V }), re = {};
        return Z.forEach(function(J) {
          var K, G, ne, ue = J;
          for (K in an(ue) && (ue = ue(E)), ue) E[K] = re[K] = K === "className" ? (G = re[K], ne = ue[K], G && ne ? G + " " + ne : G || ne) : ue[K];
        }), [E, re];
      }(Bu(_, Yt(is), Be) || or, _, _e), Ke = xe[0], je = xe[1], ke = function(V, y, Z, E) {
        var re = Iu(), J = ju(), K = y ? V.generateAndInjectStyles(or, re, J) : V.generateAndInjectStyles(Z, re, J);
        return Oe.env.NODE_ENV !== "production" && !y && E && E(K), K;
      }(Ie, pe, Ke, Oe.env.NODE_ENV !== "production" ? H.warnTooManyClasses : void 0), Fe = oe, Ye = je.$as || _.$as || je.as || _.as || Ee, Ze = Nn(Ye), L = je !== _ ? Ht({}, _, {}, je) : _, O = {};
      for (var P in L) P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? O.as = L[P] : (he ? he(P, Zo, Ye) : !Ze || Zo(P)) && (O[P] = L[P]));
      return _.style && je.style !== _.style && (O.style = Ht({}, _.style, {}, je.style)), O.className = Array.prototype.concat(Xe, we, ke !== we ? ke : null, _.className, je.className).filter(Boolean).join(" "), O.ref = Fe, Ma(Ye, O);
    }(C, $, W, I);
  };
  return M.displayName = x, (C = rt.forwardRef(M)).attrs = j, C.componentStyle = w, C.displayName = x, C.shouldForwardProp = B, C.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Wn, C.styledComponentId = S, C.target = n ? e.target : e, C.withComponent = function($) {
    var W = t.componentId, H = function(oe, pe) {
      if (oe == null) return {};
      var _e, Ie, Be = {}, Xe = Object.keys(oe);
      for (Ie = 0; Ie < Xe.length; Ie++) _e = Xe[Ie], pe.indexOf(_e) >= 0 || (Be[_e] = oe[_e]);
      return Be;
    }(t, ["componentId"]), _ = W && W + "-" + (Nn($) ? $ : Si(Ii($)));
    return os($, Ht({}, H, { attrs: j, componentId: _ }), r);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = n ? ns({}, e.defaultProps, $) : $;
  } }), Oe.env.NODE_ENV !== "production" && ($u(x, S), C.warnTooManyClasses = /* @__PURE__ */ function($, W) {
    var H = {}, _ = !1;
    return function(oe) {
      if (!_ && (H[oe] = !0, Object.keys(H).length >= 200)) {
        var pe = W ? ' with the id of "' + W + '"' : "";
        console.warn("Over 200 classes were generated for component " + $ + pe + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, H = {};
      }
    };
  }(x, S)), Object.defineProperty(C, "toString", { value: function() {
    return "." + C.styledComponentId;
  } }), o && lu(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), C;
}
var Ot = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = or), !Ji.isValidElementType(n)) return Vr(1, String(n));
    var s = function() {
      return r(n, o, zu.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, Ht({}, o, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, Ht({}, o, { attrs: Array.prototype.concat(o.attrs, d).filter(Boolean) }));
    }, s;
  }(os, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ot[e] = Ot(e);
});
Oe.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), Oe.env.NODE_ENV !== "production" && Oe.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
Ot.div`
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
function Qn(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], o = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(o)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Gu = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
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
}(), Er = function() {
  return Er = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Er.apply(this, arguments);
}, Yu = function(e, t, r, n) {
  function o(s) {
    return s instanceof r ? s : new r(function(d) {
      d(s);
    });
  }
  return new (r || (r = Promise))(function(s, d) {
    function m(x) {
      try {
        p(n.next(x));
      } catch (S) {
        d(S);
      }
    }
    function f(x) {
      try {
        p(n.throw(x));
      } catch (S) {
        d(S);
      }
    }
    function p(x) {
      x.done ? s(x.value) : o(x.value).then(m, f);
    }
    p((n = n.apply(e, [])).next());
  });
}, Zu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, o, s, d;
  return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function m(p) {
    return function(x) {
      return f([p, x]);
    };
  }
  function f(p) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, o && (s = p[0] & 2 ? o.return : p[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, p[1])).done) return s;
      switch (o = 0, s && (p = [p[0] & 2, s.value]), p[0]) {
        case 0:
        case 1:
          s = p;
          break;
        case 4:
          return r.label++, { value: p[1], done: !1 };
        case 5:
          r.label++, o = p[1], p = [0];
          continue;
        case 7:
          p = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (p[0] === 6 || p[0] === 2)) {
            r = 0;
            continue;
          }
          if (p[0] === 3 && (!s || p[1] > s[0] && p[1] < s[3])) {
            r.label = p[1];
            break;
          }
          if (p[0] === 6 && r.label < s[1]) {
            r.label = s[1], s = p;
            break;
          }
          if (s && r.label < s[2]) {
            r.label = s[2], r.ops.push(p);
            break;
          }
          s[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      p = t.call(e, r);
    } catch (x) {
      p = [6, x], o = 0;
    } finally {
      n = s = 0;
    }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}, as = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}, Xu = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Ku = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, Qu = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Ju(e, t, r) {
  var n = t.height, o = t.width, s = as(t, ["height", "width"]), d = Er({ height: n, width: o, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), m = window.open(e, "", Object.keys(d).map(function(p) {
    return "".concat(p, "=").concat(d[p]);
  }).join(", "));
  if (r)
    var f = window.setInterval(function() {
      try {
        (m === null || m.closed) && (window.clearInterval(f), r(m));
      } catch (p) {
        console.error(p);
      }
    }, 1e3);
  return m;
}
var ec = (
  /** @class */
  function(e) {
    Gu(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var o = r.props, s = o.onShareWindowClose, d = o.windowHeight, m = d === void 0 ? 400 : d, f = o.windowPosition, p = f === void 0 ? "windowCenter" : f, x = o.windowWidth, S = x === void 0 ? 550 : x, j = Er({ height: m, width: S }, p === "windowCenter" ? Ku(S, m) : Qu(S, m));
        Ju(n, j, s);
      }, r.handleClick = function(n) {
        return Yu(r, void 0, void 0, function() {
          var o, s, d, m, f, p, x, S, j, B;
          return Zu(this, function(C) {
            switch (C.label) {
              case 0:
                return o = this.props, s = o.beforeOnClick, d = o.disabled, m = o.networkLink, f = o.onClick, p = o.url, x = o.openShareDialogOnClick, S = o.opts, j = m(p, S), d ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (B = s(), Xu(B) ? [4, B] : [3, 2]) : [3, 2]);
              case 1:
                C.sent(), C.label = 2;
              case 2:
                return x && this.openShareDialog(j), f && f(n, j), [
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
      var n = r.children, o = r.className, s = r.disabled, d = r.disabledStyle, m = r.forwardedRef;
      r.networkLink;
      var f = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var p = r.resetButtonStyle, x = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var S = as(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), j = Pr("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, o), B = Er(Er(p ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, x), s && d);
      return rt.createElement("button", Er({}, S, { "aria-label": S["aria-label"] || f, className: j, onClick: this.handleClick, ref: m, style: B }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Js)
), qn = function() {
  return qn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, qn.apply(this, arguments);
};
function Jn(e, t, r, n) {
  function o(s, d) {
    var m = r(s), f = qn({}, s), p = Object.keys(m);
    return p.forEach(function(x) {
      delete f[x];
    }), rt.createElement(ec, qn({}, n, f, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return o.displayName = "ShareButton-".concat(e), Da(o);
}
function tc(e, t) {
  var r = t.subject, n = t.body, o = t.separator;
  return "mailto:" + Qn({ subject: r, body: n ? n + o + e : e });
}
Jn("email", tc, function(e) {
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
var rc = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
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
}(), nc = (
  /** @class */
  function(e) {
    rc(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function nn(e, t) {
  if (!e)
    throw new nc(t);
}
function ic(e, t) {
  var r = t.quote, n = t.hashtag;
  return nn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Qn({
    u: e,
    quote: r,
    hashtag: n
  });
}
Jn("facebook", ic, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function oc(e, t) {
  var r = t.title, n = t.summary, o = t.source;
  return nn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Qn({ url: e, mini: "true", title: r, summary: n, source: o });
}
Jn("linkedin", oc, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function ac(e, t) {
  var r = t.title, n = t.via, o = t.hashtags, s = o === void 0 ? [] : o, d = t.related, m = d === void 0 ? [] : d;
  return nn(e, "twitter.url"), nn(Array.isArray(s), "twitter.hashtags is not an array"), nn(Array.isArray(m), "twitter.related is not an array"), "https://twitter.com/share" + Qn({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: m.length > 0 ? m.join(",") : void 0
  });
}
Jn("twitter", ac, function(e) {
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
function Di(e) {
  "@babel/helpers - typeof";
  return Di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Di(e);
}
var sc = (typeof window > "u" ? "undefined" : Di(window)) === "object" && window.Element || function() {
};
function lc(e, t, r) {
  if (!(e[t] instanceof sc))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, lc, l.shape({
  current: l.any
})]);
var Mi = l.oneOfType([l.func, l.string, l.shape({
  $$typeof: l.symbol,
  render: l.func
}), l.arrayOf(l.oneOfType([l.func, l.string, l.shape({
  $$typeof: l.symbol,
  render: l.func
})]))]);
l.string, l.node, l.string, l.object, l.string;
l.bool, l.string, l.object;
Ot.div`
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
Ot.div`
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
const uc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, io = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: o,
  disabled: s,
  element: d = "button",
  innerRef: m,
  href: f,
  onClick: p,
  ...x
}) => {
  const S = Pr("btn", "btn-tag", {
    "btn-tag-alt-white": o === "white",
    "btn-tag-alt-gray": o === "gray",
    "btn-tag-alt-dark": o === "dark",
    disabled: s
  });
  let j = d;
  return f && d === "button" && (j = "a"), /* @__PURE__ */ z.jsx(
    lr,
    {
      gaData: {
        ...uc,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ z.jsx(
        j,
        {
          type: j === "button" && p ? "button" : void 0,
          ...x,
          className: S,
          href: f,
          ref: m,
          onClick: p,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
io.propTypes = {
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
  gaData: Ki,
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
io.defaultProps = {
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
const ss = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: o = "async",
  dataTestId: s,
  fetchPriority: d = "auto",
  width: m,
  height: f,
  cardLink: p,
  title: x,
  caption: S,
  captionTitle: j,
  border: B,
  dropShadow: C
}) => {
  const w = {
    src: e,
    alt: t,
    loading: n,
    decoding: o,
    fetchpriority: d,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: dl(r) },
    ...s && { "data-testid": s },
    ...m && { width: m },
    ...f && { height: f }
  }, I = Pr("uds-img", {
    borderless: !B,
    "uds-img-drop-shadow": C
  }), M = (W) => {
    const H = W ? `${w.className} ${W}` : w.className;
    return p ? /* @__PURE__ */ z.jsxs("a", { href: p, children: [
      /* @__PURE__ */ z.jsx("img", { ...w, className: H }),
      /* @__PURE__ */ z.jsx("span", { className: "visually-hidden", children: x })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ z.jsx("img", { ...w, className: H })
    );
  }, $ = () => /* @__PURE__ */ z.jsx("div", { className: I, children: /* @__PURE__ */ z.jsxs("figure", { className: "figure uds-figure", children: [
    M(),
    S && /* @__PURE__ */ z.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      j && /* @__PURE__ */ z.jsx("h3", { children: j }),
      /* @__PURE__ */ z.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: jr(S)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ z.jsx(z.Fragment, { children: S ? $() : M(I) });
};
ss.propTypes = {
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
const cc = Ot.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, dc = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), fc = (e) => !e.startsWith("https://") && !e.startsWith("http://") && dc(e) ? `mailto:${e}` : e, pc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, jt = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: o,
  title: s,
  icon: d,
  body: m,
  eventFormat: f,
  eventLocation: p,
  eventTime: x,
  buttons: S,
  linkLabel: j,
  linkUrl: B,
  tags: C,
  showBorders: w,
  cardLink: I
}) => /* @__PURE__ */ z.jsx(
  oo,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: o,
    title: s,
    icon: d,
    body: m,
    eventFormat: f,
    eventLocation: p,
    eventTime: x,
    buttons: S,
    linkLabel: j,
    linkUrl: B,
    tags: C,
    showBorders: w,
    cardLink: I
  }
);
jt.propTypes = {
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
jt.defaultProps = {
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
const oo = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: o,
  title: s,
  icon: d,
  body: m,
  eventFormat: f,
  eventLocation: p,
  eventTime: x,
  buttons: S,
  linkLabel: j,
  linkUrl: B,
  tags: C,
  showBorders: w,
  cardLink: I
}) => {
  const M = Pr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !w
  });
  return /* @__PURE__ */ z.jsx(z.Fragment, { children: /* @__PURE__ */ z.jsxs(cc, { className: M, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ z.jsx(
      ss,
      {
        src: n,
        alt: o,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: I,
        title: s
      }
    ),
    !n && d && /* @__PURE__ */ z.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ z.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ z.jsx(
      Gn,
      {
        type: e,
        body: m,
        eventFormat: f,
        eventLocation: p,
        eventTime: x,
        title: s,
        buttons: S,
        linkLabel: j,
        linkUrl: B,
        tags: C,
        cardLink: I
      }
    ) }) : /* @__PURE__ */ z.jsx(
      Gn,
      {
        type: e,
        body: m,
        eventFormat: f,
        eventLocation: p,
        eventTime: x,
        title: s,
        buttons: S,
        linkLabel: j,
        linkUrl: B,
        tags: C,
        cardLink: I
      }
    )
  ] }) });
};
oo.propTypes = {
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
oo.defaultProps = {
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
const Gn = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: o,
  title: s,
  buttons: d,
  linkLabel: m,
  linkUrl: f,
  tags: p,
  cardLink: x
}) => /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
  !!s && /* @__PURE__ */ z.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ z.jsx("h3", { className: "card-title", children: x ? /* @__PURE__ */ z.jsx("a", { href: x, children: s }) : s }) }),
  !!t && /* @__PURE__ */ z.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ z.jsx("div", { dangerouslySetInnerHTML: jr(t) }) }),
  e === "event" && (o || n) && /* @__PURE__ */ z.jsx(
    ao,
    {
      eventFormat: r,
      eventTime: o,
      eventLocation: n
    }
  ),
  d && /* @__PURE__ */ z.jsx("div", { className: "card-buttons", children: d.map((S) => /* @__PURE__ */ z.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ z.jsx(
        Qi,
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
  f && m && /* @__PURE__ */ z.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ z.jsx(
    lr,
    {
      gaData: {
        ...pc,
        section: s,
        text: m
      },
      children: /* @__PURE__ */ z.jsx("a", { href: fc(f), children: m })
    }
  ) }),
  p && /* @__PURE__ */ z.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: p.map((S) => (
    // @ts-ignore
    /* @__PURE__ */ z.jsx(
      io,
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
Gn.propTypes = {
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
Gn.defaultProps = {
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
const ao = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ z.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ z.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ z.jsx("div", { children: /* @__PURE__ */ z.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ z.jsx("div", { dangerouslySetInnerHTML: jr(t) })
  ] }),
  r && /* @__PURE__ */ z.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ z.jsx("div", { children: /* @__PURE__ */ z.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ z.jsx(
      "div",
      {
        dangerouslySetInnerHTML: jr(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
  t && /* @__PURE__ */ z.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ z.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ z.jsx("div", { children: /* @__PURE__ */ z.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ z.jsx("div", { dangerouslySetInnerHTML: jr(t) })
  ] }) }),
  r && /* @__PURE__ */ z.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ z.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ z.jsx("div", { children: /* @__PURE__ */ z.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ z.jsx("span", { children: /* @__PURE__ */ z.jsx(
      "div",
      {
        dangerouslySetInnerHTML: jr(r)
      }
    ) })
  ] }) })
] });
ao.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
};
ao.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const hc = Ot.div`
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
`, gc = () => /* @__PURE__ */ z.jsxs(hc, { children: [
  /* @__PURE__ */ z.jsx("div", {}),
  /* @__PURE__ */ z.jsx("div", {}),
  /* @__PURE__ */ z.jsx("div", {}),
  /* @__PURE__ */ z.jsx("div", {})
] }), mc = Ot.section``, ei = el(null), ls = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: o,
  dataTransformer: s,
  dataFilter: d,
  maxItems: m
}) => {
  const [{ data: f, loading: p, error: x }, S] = cl(), [j, B] = Ir([]), C = { ...e.dataSource, ...t };
  return sr(() => {
    S(C == null ? void 0 : C.url);
  }, [C == null ? void 0 : C.url]), sr(() => {
    const w = f == null ? void 0 : f.nodes.map(s), I = w == null ? void 0 : w.filter(
      (M) => d(M, t == null ? void 0 : t.filters)
    );
    B(m ? I == null ? void 0 : I.slice(0, m) : I);
  }, [f]), // Init the context to be used on its childrens
  /* @__PURE__ */ z.jsx(ei.Provider, { value: { feeds: j }, children: /* @__PURE__ */ z.jsxs(mc, { children: [
    n,
    x ? /* @__PURE__ */ z.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
      p && !(j != null && j.length) && /* @__PURE__ */ z.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ z.jsx(gc, {}) }),
      j != null && j.length ? o : !p && /* @__PURE__ */ z.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
ls.propTypes = {
  renderHeader: l.element,
  renderBody: l.element,
  maxItems: l.number,
  dataTransformer: l.func,
  dataFilter: l.func,
  noFeedText: l.string
};
const so = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), lo = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), us = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), cs = l.shape({
  url: l.string,
  filters: l.string
}), yc = l.shape({
  header: so,
  ctaButton: lo,
  dataSource: cs,
  maxItems: l.number
}), vc = Ot.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, ds = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, o = { ...e.ctaButton, ...r };
  return /* @__PURE__ */ z.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ z.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ z.jsx("h2", { className: `text-${n.color}`, children: n.text }) }),
        /* @__PURE__ */ z.jsx(vc, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ z.jsx(
          lr,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: n.text,
              text: o.text
            },
            children: /* @__PURE__ */ z.jsx("a", { className: `btn btn-${o.color}`, href: o.url, children: o.text })
          }
        ) })
      ]
    }
  );
};
ds.propTypes = {
  defaultProps: yc,
  header: so,
  ctaButton: lo
};
const fs = ({ children: e }) => /* @__PURE__ */ z.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ z.jsx("div", { className: "col", children: e }) });
fs.propTypes = {
  children: l.element
};
Ot.img`
  width: 100%;
`;
l.oneOf(["heading-hero", "story-hero"]), l.arrayOf(gi), l.string;
l.bool, l.bool, l.bool, l.bool, l.string, l.func, l.node, l.bool, l.string, l.bool;
l.oneOf(["default", "bordered"]).isRequired, l.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, l.number, l.number, l.func.isRequired;
l.oneOf(["small", "large"]), l.string.isRequired, l.string.isRequired, l.string;
l.oneOf(["small", "large"]).isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string, l.string;
Ot.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const bc = Da(function(e, t) {
  const {
    id: r,
    selected: n,
    title: o,
    selectTab: s,
    leftKeyPressed: d,
    rightKeyPressed: m,
    icon: f,
    gaData: p
  } = e, x = Zi(null);
  tl(
    t,
    () => ({
      focus() {
        x.current.focus();
      },
      scrollIntoView() {
        var j, B, C, w, I, M, $;
        const W = ((j = x.current) == null ? void 0 : j.offsetWidth) / 2 + x.current.offsetLeft, H = ((C = (B = x.current) == null ? void 0 : B.offsetParent) == null ? void 0 : C.scrollLeft) + ((I = (w = x.current) == null ? void 0 : w.offsetParent) == null ? void 0 : I.offsetWidth) / 2;
        ($ = (M = x.current) == null ? void 0 : M.offsetParent) == null || $.scrollBy({
          left: W - H
        });
      }
    }),
    []
  );
  const S = (j) => {
    j.keyCode === 37 ? (j.preventDefault(), d()) : j.keyCode === 39 && (j.preventDefault(), m());
  };
  return /* @__PURE__ */ z.jsx(lr, { gaData: { ...p, text: o }, children: /* @__PURE__ */ z.jsxs(
    "a",
    {
      ref: x,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      onClick: (j) => s(j, r, o),
      onKeyDown: S,
      tabIndex: n ? "" : "-1",
      children: [
        o,
        " ",
        f && /* @__PURE__ */ z.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` })
      ]
    }
  ) });
});
bc.propTypes = {
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
l.oneOf(["video", "youtube"]), l.string, l.string, l.string, l.string, l.string, l.bool;
const wc = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, ps = ({ children: e }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ z.jsx(
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
  )
);
ps.propTypes = {
  children: l.oneOfType([
    l.element,
    l.arrayOf(l.element)
  ]).isRequired
};
const hs = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ z.jsx(lr, { gaData: wc, children: /* @__PURE__ */ z.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ z.jsx(ps, { children: t });
};
hs.propTypes = {
  buttonCount: l.number.isRequired
};
l.arrayOf(l.string).isRequired, l.func;
const gs = ({ onClick: e = () => null }) => /* @__PURE__ */ z.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ z.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
gs.propTypes = {
  onClick: l.func
};
const ms = ({ onClick: e = () => null }) => /* @__PURE__ */ z.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ z.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
ms.propTypes = {
  onClick: l.func
};
const sa = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, ys = ({ children: e = null }) => /* @__PURE__ */ z.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
ys.propTypes = {
  children: l.arrayOf(l.element)
};
const vs = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ z.jsxs(ys, { children: [
  /* @__PURE__ */ z.jsx(lr, { gaData: { ...sa, text: "left chevron" }, children: /* @__PURE__ */ z.jsx(ms, { onClick: e }) }),
  t,
  /* @__PURE__ */ z.jsx(lr, { gaData: { ...sa, text: "right chevron" }, children: /* @__PURE__ */ z.jsx(gs, { onClick: e }) })
] });
vs.propTypes = {
  children: l.element,
  onClick: l.func
};
const bs = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ z.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ z.jsx("ul", { className: "glide__slides", children: t });
};
bs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: l.arrayOf(l.object)
};
function la(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ua(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? la(Object(r), !0).forEach(function(n) {
      Sc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : la(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $n(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $n = function(t) {
    return typeof t;
  } : $n = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $n(e);
}
function ti(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ri(e, t, r) {
  return t && xc(e.prototype, t), e;
}
function Sc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function kc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Fi(e, t);
}
function Mr(e) {
  return Mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Mr(e);
}
function Fi(e, t) {
  return Fi = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, Fi(e, t);
}
function _c() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Cc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ec(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Cc(e);
}
function Tc(e) {
  var t = _c();
  return function() {
    var r = Mr(e), n;
    if (t) {
      var o = Mr(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else
      n = r.apply(this, arguments);
    return Ec(this, n);
  };
}
function Ac(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Mr(e), e !== null); )
    ;
  return e;
}
function Bn() {
  return typeof Reflect < "u" && Reflect.get ? Bn = Reflect.get : Bn = function(e, t, r) {
    var n = Ac(e, t);
    if (n) {
      var o = Object.getOwnPropertyDescriptor(n, t);
      return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value;
    }
  }, Bn.apply(this, arguments);
}
var Rc = {
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
function Gt(e) {
  console.error("[Glide warn]: ".concat(e));
}
function st(e) {
  return parseInt(e);
}
function Oc(e) {
  return parseFloat(e);
}
function zi(e) {
  return typeof e == "string";
}
function Fr(e) {
  var t = $n(e);
  return t === "function" || t === "object" && !!e;
}
function Yn(e) {
  return typeof e == "function";
}
function ws(e) {
  return typeof e > "u";
}
function $i(e) {
  return e.constructor === Array;
}
function Nc(e, t, r) {
  var n = {};
  for (var o in t)
    Yn(t[o]) ? n[o] = t[o](e, n, r) : Gt("Extension must be a function");
  for (var s in n)
    Yn(n[s].mount) && n[s].mount();
  return n;
}
function Ge(e, t, r) {
  Object.defineProperty(e, t, r);
}
function Ic(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function Bi(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(o) {
      t.classes.hasOwnProperty(o) && (r.classes[o] = ua(ua({}, e.classes[o]), t.classes[o]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var jc = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ti(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return ri(e, [{
    key: "on",
    value: function(t, r) {
      if ($i(t)) {
        for (var n = 0; n < t.length; n++)
          this.on(t[n], r);
        return;
      }
      this.hop.call(this.events, t) || (this.events[t] = []);
      var o = this.events[t].push(r) - 1;
      return {
        remove: function() {
          delete this.events[t][o];
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
      if ($i(t)) {
        for (var n = 0; n < t.length; n++)
          this.emit(t[n], r);
        return;
      }
      this.hop.call(this.events, t) && this.events[t].forEach(function(o) {
        o(r || {});
      });
    }
  }]), e;
}(), Pc = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ti(this, e), this._c = {}, this._t = [], this._e = new jc(), this.disabled = !1, this.selector = t, this.settings = Bi(Rc, r), this.index = this.settings.startAt;
  }
  return ri(e, [{
    key: "mount",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Fr(t) ? this._c = Nc(this, t, this._e) : Gt("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return $i(t) ? this._t = t : Gt("You need to provide a array on `mutate()`"), this;
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
      return this.settings = Bi(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this;
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
      Fr(t) ? this._o = t : Gt("Options must be an `object` instance.");
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
      this._i = st(t);
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
function Lc(e, t, r) {
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
    make: function(f) {
      var p = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = f, r.emit("run.before", this.move), this.calculate(), r.emit("run", this.move), t.Transition.after(function() {
        p.isStart() && r.emit("run.start", p.move), p.isEnd() && r.emit("run.end", p.move), p.isOffset() && (p._o = !1, r.emit("run.offset", p.move)), r.emit("run.after", p.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var f = this.move, p = this.length, x = f.steps, S = f.direction, j = 1;
      if (S === "=") {
        if (e.settings.bound && st(x) > p) {
          e.index = p;
          return;
        }
        e.index = x;
        return;
      }
      if (S === ">" && x === ">") {
        e.index = p;
        return;
      }
      if (S === "<" && x === "<") {
        e.index = 0;
        return;
      }
      if (S === "|" && (j = e.settings.perView || 1), S === ">" || S === "|" && x === ">") {
        var B = o(j);
        B > p && (this._o = !0), e.index = s(B, j);
        return;
      }
      if (S === "<" || S === "|" && x === "<") {
        var C = d(j);
        C < 0 && (this._o = !0), e.index = m(C, j);
        return;
      }
      Gt("Invalid direction pattern [".concat(S).concat(x, "] has been used"));
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
      var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return f ? this._o ? f === "|>" ? this.move.direction === "|" && this.move.steps === ">" : f === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === f : !1 : this._o;
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
  function o(f) {
    var p = e.index;
    return e.isType("carousel") ? p + f : p + (f - p % f);
  }
  function s(f, p) {
    var x = n.length;
    return f <= x ? f : e.isType("carousel") ? f - (x + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? x : 0 : n.isBound() ? x : Math.floor(x / p) * p;
  }
  function d(f) {
    var p = e.index;
    if (e.isType("carousel"))
      return p - f;
    var x = Math.ceil(p / f);
    return (x - 1) * f;
  }
  function m(f, p) {
    var x = n.length;
    return f >= 0 ? f : e.isType("carousel") ? f + (x + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? x : Math.floor(x / p) * p : 0;
  }
  return Ge(n, "move", {
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
    set: function(f) {
      var p = f.substr(1);
      this._m = {
        direction: f.substr(0, 1),
        steps: p ? st(p) ? st(p) : p : 0
      };
    }
  }), Ge(n, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var f = e.settings, p = t.Html.slides.length;
      return this.isBound() ? p - 1 - (st(f.perView) - 1) + st(f.focusAt) : p - 1;
    }
  }), Ge(n, "offset", {
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
function ca() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function ni(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, o, s, d, m = 0, f = function() {
    m = r.leading === !1 ? 0 : ca(), n = null, d = e.apply(o, s), n || (o = s = null);
  }, p = function() {
    var x = ca();
    !m && r.leading === !1 && (m = x);
    var S = t - (x - m);
    return o = this, s = arguments, S <= 0 || S > t ? (n && (clearTimeout(n), n = null), m = x, d = e.apply(o, s), n || (o = s = null)) : !n && r.trailing !== !1 && (n = setTimeout(f, S)), d;
  };
  return p.cancel = function() {
    clearTimeout(n), m = 0, n = o = s = null;
  }, p;
}
var In = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function Dc(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(o) {
      for (var s = 0, d = o.length; s < d; s++) {
        var m = o[s].style, f = t.Direction.value;
        s !== 0 ? m[In[f][0]] = "".concat(this.value / 2, "px") : m[In[f][0]] = "", s !== o.length - 1 ? m[In[f][1]] = "".concat(this.value / 2, "px") : m[In[f][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(o) {
      for (var s = 0, d = o.length; s < d; s++) {
        var m = o[s].style;
        m.marginLeft = "", m.marginRight = "";
      }
    }
  };
  return Ge(n, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return st(e.settings.gap);
    }
  }), Ge(n, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return n.value * t.Sizes.length;
    }
  }), Ge(n, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var o = e.settings.perView;
      return n.value * (o - 1) / o;
    }
  }), r.on(["build.after", "update"], ni(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function xs(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function Vi(e) {
  return Array.prototype.slice.call(e);
}
var Mc = '[data-glide-el="track"]';
function Fc(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(Mc), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = Vi(this.wrapper.children).filter(function(o) {
        return !o.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return Ge(n, "root", {
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
    set: function(o) {
      zi(o) && (o = document.querySelector(o)), o !== null ? n._r = o : Gt("Root element must be a existing Html node");
    }
  }), Ge(n, "track", {
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
    set: function(o) {
      n._t = o;
    }
  }), Ge(n, "wrapper", {
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
function zc(e, t, r) {
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
  return Ge(n, "value", {
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
    set: function(o) {
      Fr(o) ? (o.before = st(o.before), o.after = st(o.after)) : o = st(o), n._v = o;
    }
  }), Ge(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var o = n.value, s = e.settings.perView;
      return Fr(o) ? o.before / s + o.after / s : o * 2 / s;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function $c(e, t, r) {
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
      var o = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = s, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: o.value
        });
      });
    }
  };
  return Ge(n, "offset", {
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
    set: function(o) {
      n._o = ws(o) ? 0 : st(o);
    }
  }), Ge(n, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), Ge(n, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var o = this.offset, s = this.translate;
      return t.Direction.is("rtl") ? s + o : s - o;
    }
  }), r.on(["build.before", "run"], function() {
    n.make();
  }), n;
}
function Bc(e, t, r) {
  var n = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var o = "".concat(this.slideWidth, "px"), s = t.Html.slides, d = 0; d < s.length; d++)
        s[d].style.width = o;
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
      for (var o = t.Html.slides, s = 0; s < o.length; s++)
        o[s].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return Ge(n, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), Ge(n, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), Ge(n, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow;
    }
  }), Ge(n, "slideWidth", {
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
function Vc(e, t, r) {
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
      var o = e.settings.classes, s = t.Html.slides[e.index];
      s && (s.classList.add(o.slide.active), xs(s).forEach(function(d) {
        d.classList.remove(o.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var o = e.settings.classes, s = o.type, d = o.slide;
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
function Uc(e, t, r) {
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
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = t.Html.slides, d = e.settings, m = d.perView, f = d.classes, p = d.cloningRatio;
      if (s.length > 0)
        for (var x = +!!e.settings.peek, S = m + x + Math.round(m / 2), j = s.slice(0, S).reverse(), B = s.slice(S * -1), C = 0; C < Math.max(p, Math.floor(m / s.length)); C++) {
          for (var w = 0; w < j.length; w++) {
            var I = j[w].cloneNode(!0);
            I.classList.add(f.slide.clone), o.push(I);
          }
          for (var M = 0; M < B.length; M++) {
            var $ = B[M].cloneNode(!0);
            $.classList.add(f.slide.clone), o.unshift($);
          }
        }
      return o;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var o = this.items, s = t.Html, d = s.wrapper, m = s.slides, f = Math.floor(o.length / 2), p = o.slice(0, f).reverse(), x = o.slice(f * -1).reverse(), S = "".concat(t.Sizes.slideWidth, "px"), j = 0; j < x.length; j++)
        d.appendChild(x[j]);
      for (var B = 0; B < p.length; B++)
        d.insertBefore(p[B], m[0]);
      for (var C = 0; C < o.length; C++)
        o[C].style.width = S;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var o = this.items, s = 0; s < o.length; s++)
        t.Html.wrapper.removeChild(o[s]);
    }
  };
  return Ge(n, "grow", {
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
var ur = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ti(this, e), this.listeners = t;
  }
  return ri(e, [{
    key: "on",
    value: function(t, r, n) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      zi(t) && (t = [t]);
      for (var s = 0; s < t.length; s++)
        this.listeners[t[s]] = n, r.addEventListener(t[s], this.listeners[t[s]], o);
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
      zi(t) && (t = [t]);
      for (var o = 0; o < t.length; o++)
        r.removeEventListener(t[o], this.listeners[t[o]], n);
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
function Wc(e, t, r) {
  var n = new ur(), o = {
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
      n.on("resize", window, ni(function() {
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
    o.unbind(), n.destroy();
  }), o;
}
var Hc = ["ltr", "rtl"], qc = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Gc(e, t, r) {
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
    resolve: function(o) {
      var s = o.slice(0, 1);
      return this.is("rtl") ? o.split(s).join(qc[s]) : o;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(o) {
      return this.value === o;
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
  return Ge(n, "value", {
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
    set: function(o) {
      Hc.indexOf(o) > -1 ? n._v = o : Gt("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Yc(e, t) {
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
function Zc(e, t) {
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
function Xc(e, t) {
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
function Kc(e, t) {
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
        return Fr(n) ? r - n.before : r - n;
      }
      return r;
    }
  };
}
function Qc(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      var n = t.Gaps.value, o = t.Sizes.width, s = e.settings.focusAt, d = t.Sizes.slideWidth;
      return s === "center" ? r - (o / 2 - d / 2) : r - d * s - n * s;
    }
  };
}
function Jc(e, t, r) {
  var n = [Zc, Xc, Kc, Qc].concat(e._t, [Yc]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(o) {
      for (var s = 0; s < n.length; s++) {
        var d = n[s];
        Yn(d) && Yn(d().modify) ? o = d(e, t, r).modify(o) : Gt("Transformer should be a function that returns an object with `modify()` method");
      }
      return o;
    }
  };
}
function ed(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(o) {
      var s = Jc(e, t).mutate(o), d = "translate3d(".concat(-1 * s, "px, 0px, 0px)");
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
      var o = t.Sizes.length, s = e.index, d = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? o + (s - d) : (s + d) % o;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var o = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? o * -1 : o;
    }
  };
  return r.on("move", function(o) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return n.set(o.movement);
    t.Transition.after(function() {
      r.emit("translate.jump"), n.set(t.Sizes.slideWidth * e.index);
    });
    var s = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return n.set(s - t.Translate.getTravelDistance());
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function td(e, t, r) {
  var n = !1, o = {
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
  return Ge(o, "duration", {
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
    o.set();
  }), r.on(["build.before", "resize", "translate.jump"], function() {
    o.disable();
  }), r.on("run", function() {
    o.enable();
  }), r.on("destroy", function() {
    o.remove();
  }), o;
}
var Ss = !1;
try {
  var da = Object.defineProperty({}, "passive", {
    get: function() {
      Ss = !0;
    }
  });
  window.addEventListener("testPassive", null, da), window.removeEventListener("testPassive", null, da);
} catch {
}
var Ui = Ss, jn = ["touchstart", "mousedown"], fa = ["touchmove", "mousemove"], pa = ["touchend", "touchcancel", "mouseup", "mouseleave"], ha = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function rd(e, t, r) {
  var n = new ur(), o = 0, s = 0, d = 0, m = !1, f = Ui ? {
    passive: !0
  } : !1, p = {
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
      if (!m && !e.disabled) {
        this.disable();
        var S = this.touches(x);
        o = null, s = st(S.pageX), d = st(S.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(x) {
      if (!e.disabled) {
        var S = e.settings, j = S.touchAngle, B = S.touchRatio, C = S.classes, w = this.touches(x), I = st(w.pageX) - s, M = st(w.pageY) - d, $ = Math.abs(I << 2), W = Math.abs(M << 2), H = Math.sqrt($ + W), _ = Math.sqrt(W);
        if (o = Math.asin(_ / H), o * 180 / Math.PI < j)
          x.stopPropagation(), t.Move.make(I * Oc(B)), t.Html.root.classList.add(C.dragging), r.emit("swipe.move");
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
        var S = e.settings, j = S.perSwipe, B = S.touchAngle, C = S.classes, w = this.touches(x), I = this.threshold(x), M = w.pageX - s, $ = o * 180 / Math.PI;
        this.enable(), M > I && $ < B ? t.Run.make(t.Direction.resolve("".concat(j, "<"))) : M < -I && $ < B ? t.Run.make(t.Direction.resolve("".concat(j, ">"))) : t.Move.make(), t.Html.root.classList.remove(C.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var x = this, S = e.settings, j = S.swipeThreshold, B = S.dragThreshold;
      j && n.on(jn[0], t.Html.wrapper, function(C) {
        x.start(C);
      }, f), B && n.on(jn[1], t.Html.wrapper, function(C) {
        x.start(C);
      }, f);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(jn[0], t.Html.wrapper, f), n.off(jn[1], t.Html.wrapper, f);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var x = this;
      n.on(fa, t.Html.wrapper, ni(function(S) {
        x.move(S);
      }, e.settings.throttle), f);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(fa, t.Html.wrapper, f);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var x = this;
      n.on(pa, t.Html.wrapper, function(S) {
        x.end(S);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(pa, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(x) {
      return ha.indexOf(x.type) > -1 ? x : x.touches[0] || x.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(x) {
      var S = e.settings;
      return ha.indexOf(x.type) > -1 ? S.dragThreshold : S.swipeThreshold;
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
    p.unbindSwipeStart(), p.unbindSwipeMove(), p.unbindSwipeEnd(), n.destroy();
  }), p;
}
function nd(e, t, r) {
  var n = new ur(), o = {
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
    o.unbind(), n.destroy();
  }), o;
}
function id(e, t, r) {
  var n = new ur(), o = !1, s = !1, d = {
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
      if (s = !0, !o) {
        for (var m = 0; m < this.items.length; m++)
          this.items[m].draggable = !1;
        o = !0;
      }
      return this;
    },
    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function() {
      if (s = !1, o) {
        for (var m = 0; m < this.items.length; m++)
          this.items[m].draggable = !0;
        o = !1;
      }
      return this;
    }
  };
  return Ge(d, "items", {
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
var od = '[data-glide-el="controls[nav]"]', uo = '[data-glide-el^="controls"]', ad = "".concat(uo, ' [data-glide-dir*="<"]'), sd = "".concat(uo, ' [data-glide-dir*=">"]');
function ld(e, t, r) {
  var n = new ur(), o = Ui ? {
    passive: !0
  } : !1, s = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(od), this._c = t.Html.root.querySelectorAll(uo), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(ad),
        next: t.Html.root.querySelectorAll(sd)
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
      var m = e.settings, f = d[e.index];
      f && (f.classList.add(m.classes.nav.active), xs(f).forEach(function(p) {
        p.classList.remove(m.classes.nav.active);
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
      for (var d = e.settings, m = arguments.length, f = new Array(m), p = 0; p < m; p++)
        f[p] = arguments[p];
      f.forEach(function(x) {
        Vi(x).forEach(function(S) {
          S.classList.remove(d.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var d = e.settings, m = arguments.length, f = new Array(m), p = 0; p < m; p++)
        f[p] = arguments[p];
      f.forEach(function(x) {
        Vi(x).forEach(function(S) {
          S.classList.add(d.classes.arrow.disabled);
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
        n.on("click", d[m], this.click), n.on("touchstart", d[m], this.click, o);
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
      !Ui && d.type === "touchstart" && d.preventDefault();
      var m = d.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(m));
    }
  };
  return Ge(s, "items", {
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
function ud(e, t, r) {
  var n = new ur(), o = {
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
    o.unbind();
  }), r.on("update", function() {
    o.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), o;
}
function cd(e, t, r) {
  var n = new ur(), o = {
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
      this._e && (this.enable(), e.settings.autoplay && ws(this._i) && (this._i = setInterval(function() {
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
  return Ge(o, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var s = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return st(s || e.settings.autoplay);
    }
  }), r.on(["destroy", "update"], function() {
    o.unbind();
  }), r.on(["run.before", "swipe.start", "update"], function() {
    o.stop();
  }), r.on(["pause", "destroy"], function() {
    o.disable(), o.stop();
  }), r.on(["run.after", "swipe.end"], function() {
    o.start();
  }), r.on(["play"], function() {
    o.enable(), o.start();
  }), r.on("update", function() {
    o.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), o;
}
function ga(e) {
  return Fr(e) ? Ic(e) : (Gt("Breakpoints option must be an object"), {});
}
function dd(e, t, r) {
  var n = new ur(), o = e.settings, s = ga(o.breakpoints), d = Object.assign({}, o), m = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(f) {
      if (typeof window.matchMedia < "u") {
        for (var p in f)
          if (f.hasOwnProperty(p) && window.matchMedia("(max-width: ".concat(p, "px)")).matches)
            return f[p];
      }
      return d;
    }
  };
  return Object.assign(o, m.match(s)), n.on("resize", window, ni(function() {
    e.settings = Bi(o, m.match(s));
  }, e.settings.throttle)), r.on("update", function() {
    s = ga(s), d = Object.assign({}, o);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), m;
}
var fd = {
  // Required
  Html: Fc,
  Translate: ed,
  Transition: td,
  Direction: Gc,
  Peek: zc,
  Sizes: Bc,
  Gaps: Dc,
  Move: $c,
  Clones: Uc,
  Resize: Wc,
  Build: Vc,
  Run: Lc,
  // Optional
  Swipe: rd,
  Images: nd,
  Anchors: id,
  Controls: ld,
  Keyboard: ud,
  Autoplay: cd,
  Breakpoints: dd
}, pd = /* @__PURE__ */ function(e) {
  kc(r, e);
  var t = Tc(r);
  function r() {
    return ti(this, r), t.apply(this, arguments);
  }
  return ri(r, [{
    key: "mount",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Bn(Mr(r.prototype), "mount", this).call(this, Object.assign({}, fd, n));
    }
  }]), r;
}(Pc);
function hd(e) {
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
function gd(e = 1, t, r = !0, n) {
  const { perViewSm: o, perViewMd: s, perViewLg: d } = hd(e), m = r ? 24 : 0, f = r ? { before: 48, after: 48 } : 0, p = r ? { before: 124, after: 124 } : 0;
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
    peek: p,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: t ? null : {
      576: {
        // BS4 sm
        perView: o,
        peek: f
      },
      768: {
        // BS4 md
        perView: s,
        peek: f
      },
      992: {
        // BS4 lg
        perView: d,
        peek: f
      },
      1260: {
        // BS4 xl
        perView: d,
        peek: f
      },
      1400: {
        perView: d,
        peek: p
      },
      1920: {
        perView: d,
        peek: p
      }
    }
  };
}
function md(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), o = e.querySelector(".glide__arrow--next"), s = e.querySelector(".glide__track"), d = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || o)) return;
  const m = ["slider-start", "slider-mid", "slider-end"], f = "glide__arrow--disabled";
  s == null || s.classList.remove(...m), d == null || d.classList.remove(...m), t === 0 ? (s == null || s.classList.add("slider-start"), d == null || d.classList.add("slider-start"), n == null || n.classList.add(f), n == null || n.setAttribute("aria-disabled", "true"), o == null || o.classList.remove(f), o == null || o.setAttribute("aria-disabled", "false")) : t >= r - 1 ? (s == null || s.classList.add("slider-end"), d == null || d.classList.add("slider-end"), n == null || n.classList.remove(f), n == null || n.setAttribute("aria-disabled", "false"), o == null || o.classList.add(f), o == null || o.setAttribute("aria-disabled", "true")) : (s == null || s.classList.add("slider-mid"), d == null || d.classList.add("slider-mid"), n == null || n.classList.remove(f), o == null || o.classList.remove(f), n == null || n.setAttribute("aria-disabled", "false"), o == null || o.setAttribute("aria-disabled", "false"));
}
function yd(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), o = t, s = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((d, m) => {
    m < o || m > s ? (d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("inert", "")) : (d.setAttribute("aria-hidden", "false"), d.removeAttribute("tabindex"), d.removeAttribute("inert"));
  });
}
function vd({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: o,
  hasPeek: s = !0,
  isDraggable: d
}) {
  const m = gd(t, n, s, d), f = new pd(`#${e}`, m);
  let p = document.querySelector(`#${e}`);
  return p.addEventListener("keyup", (x) => {
    const S = x;
    S.keyCode === 39 ? f.go(">") : S.keyCode === 37 ? f.go("<") : S.keyCode === 13 && f.go(document.activeElement.dataset.glideDir);
  }), f.on("build.before", () => {
    p = document.querySelector(`#${e}`), p && p.classList.add("slider-start");
  }), f.on("move", () => {
    if (p = document.querySelector(`#${e}`), !p) return;
    const x = f.index;
    yd(p, x, t);
    const S = p.querySelector(".navigation-slider"), j = p.querySelector(".image-navigator-images");
    if (S && j) {
      const B = S.querySelectorAll(
        ".bullet-image-container"
      ), C = S.clientWidth, w = 82, I = B[x], M = j.getBoundingClientRect().x, $ = S.getBoundingClientRect().x - M, W = I.getBoundingClientRect().x - M, H = I.getBoundingClientRect().x + I.getBoundingClientRect().width - M;
      if (x === 0 || W <= 0 + w)
        S.style.left = `${$ - W + w}px`;
      else if (H >= C - w) {
        const _ = H - C;
        S.style.left = `${$ - _ - w}px`;
      }
    }
    md(p, x, r), p.setAttribute("data-current-index", x), o && o(x);
  }), f.mount(), f;
}
function bd(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const ks = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: o = "",
  CustomNavComponent: s,
  role: d,
  ariaLabelledBy: m,
  isFullWidth: f,
  removeSideBackground: p = !1,
  hasNavButtons: x = !0,
  hasPositionIndicators: S = !0,
  imageAutoSize: j = !0,
  onItemClick: B = () => null,
  hasPeek: C = !0,
  isDraggable: w = !0,
  hasShadow: I = !0
}) => {
  const M = `glide-${Math.ceil(Math.random() * 1e4)}`, $ = bd(n.length, e);
  return sr(() => {
    vd({
      instanceName: M,
      perView: e,
      buttonCount: $,
      isFullWidth: f,
      onItemClick: B,
      hasPeek: C,
      isDraggable: w
    });
  }, [
    M,
    e,
    $,
    f,
    B,
    C,
    w
  ]), /* @__PURE__ */ z.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": m,
      className: `glide ${o}`,
      id: M,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": p,
      "data-image-auto-size": j,
      "data-has-shadow": I,
      children: [
        /* @__PURE__ */ z.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ z.jsx(bs, { carouselItems: n }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ z.jsx(s, { instanceName: M })
        ) : /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
          S && /* @__PURE__ */ z.jsx(hs, { buttonCount: $ }),
          x && /* @__PURE__ */ z.jsx(vs, {})
        ] })
      ]
    }
  );
};
ks.propTypes = {
  perView: l.number,
  width: l.string,
  maxWidth: l.string,
  // eslint-disable-next-line react/forbid-prop-types
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
const wd = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: o,
  eventLocation: s,
  eventTime: d,
  buttons: m,
  linkLabel: f,
  linkUrl: p,
  tags: x
}, S, j, B) => {
  var C;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ z.jsx(
      jt,
      {
        type: S,
        horizontal: j,
        image: t,
        imageAltText: r,
        title: n,
        body: o,
        eventFormat: B,
        eventLocation: s,
        eventTime: d,
        buttons: m,
        linkLabel: f,
        linkUrl: p || ((C = m == null ? void 0 : m[0]) == null ? void 0 : C.href),
        tags: x
      }
    )
  };
}, _s = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: o = !1,
  width: s = void 0,
  maxWidth: d = void 0,
  imageAutoSize: m = !0
}) => {
  const f = parseInt(`${e}`, 10), [p, x] = Ir(f), S = 1024, j = 768;
  sr(() => {
    const w = () => {
      const I = window.innerWidth;
      let M;
      switch (f) {
        case 3:
          I > S ? M = 3 : I > j ? M = 2 : M = 1;
          break;
        case 2:
          M = I < j ? 1 : 2;
          break;
        default:
          M = 1;
          break;
      }
      x(M);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, [f]);
  const B = t.map(
    (w) => wd(w, r, o, n)
  ), C = t.length > p;
  return /* @__PURE__ */ z.jsx(
    ks,
    {
      perView: +p,
      maxWidth: d,
      width: s,
      carouselItems: B,
      cssClass: "aligned-carousel",
      imageAutoSize: m,
      removeSideBackground: t.length <= p,
      hasPositionIndicators: C,
      hasNavButtons: C,
      isDraggable: C,
      hasShadow: !0
    }
  );
};
_s.propTypes = {
  perView: l.string.isRequired,
  cardItems: l.arrayOf(
    l.shape({
      title: l.string.isRequired,
      content: l.string,
      eventLocation: l.string,
      eventTime: l.string,
      image: l.string,
      imageAltText: l.string,
      buttons: jt.propTypes.buttons,
      linkLabel: l.string,
      linkUrl: l.string,
      tags: jt.propTypes.tags
    })
  ).isRequired,
  cardType: jt.propTypes.type,
  cardEventFormat: jt.propTypes.eventFormat,
  cardHorizontal: jt.propTypes.horizontal,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const Zn = {
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
l.string, Zn.imageItems, Zn.hasContent;
Zn.imageItems.isRequired, Zn.hasContent, l.string, l.string, l.bool;
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
var ma = Fa;
ma.createRoot, ma.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .75rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
function co({
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
var Cs = { exports: {} }, _i, ya;
function xd() {
  if (ya) return _i;
  ya = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _i = e, _i;
}
var Ci, va;
function Sd() {
  if (va) return Ci;
  va = 1;
  var e = xd();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ci = function() {
    function n(d, m, f, p, x, S) {
      if (S !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
      }
    }
    n.isRequired = n;
    function o() {
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
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Ci;
}
Cs.exports = Sd()();
var kd = Cs.exports;
const ba = /* @__PURE__ */ za(kd), sn = {
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
}, wa = ["newsUnits", "interests", "audiences", "eventTypes"], _d = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < wa.length; n += 1) {
    const o = wa[n];
    for (let s = 0; s < r.length; s += 1) {
      const d = r[s], f = (e[o] || "").match(new RegExp(d, "gi"));
      if ((f == null ? void 0 : f.length) > 0) return !0;
    }
  }
  return !1;
}, xa = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, Cd = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_alt,
  title: xa(e.title, 80),
  content: xa(e == null ? void 0 : e.clas_teaser, 140),
  buttonLink: e.path,
  interests: e.interests,
  newsUnits: e.news_units,
  eventTypes: e.event_types,
  alias: e.path
  // Used for card link in title, matches component-events data transformer
}), Tr = ({
  children: e,
  header: t,
  ctaButton: r,
  dataSource: n,
  maxItems: o
}) => {
  var m;
  const s = (m = n == null ? void 0 : n.filters) == null ? void 0 : m.replace(/_/g, " "), d = { ...n, filters: s };
  return /* @__PURE__ */ tt.jsx(
    ls,
    {
      renderHeader: t && r ? /* @__PURE__ */ tt.jsx(
        ds,
        {
          header: t,
          ctaButton: r,
          defaultProps: sn
        }
      ) : null,
      renderBody: /* @__PURE__ */ tt.jsx(fs, { children: e }),
      dataTransformer: Cd,
      dataFilter: _d,
      dataSource: d,
      defaultProps: sn,
      noFeedText: "No news to show.",
      maxItems: o
    }
  );
};
Tr.propTypes = {
  header: so,
  ctaButton: lo,
  dataSource: cs,
  maxItems: ba.number,
  children: ba.element
};
var Es = { exports: {} }, De = {};
var Sa;
function Ed() {
  if (Sa) return De;
  Sa = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), B = Symbol.for("react.client.reference");
  function C(w) {
    if (typeof w == "object" && w !== null) {
      var I = w.$$typeof;
      switch (I) {
        case e:
          switch (w = w.type, w) {
            case r:
            case o:
            case n:
            case f:
            case p:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case d:
                case m:
                case S:
                case x:
                  return w;
                case s:
                  return w;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  return De.ContextConsumer = s, De.ContextProvider = d, De.Element = e, De.ForwardRef = m, De.Fragment = r, De.Lazy = S, De.Memo = x, De.Portal = t, De.Profiler = o, De.StrictMode = n, De.Suspense = f, De.SuspenseList = p, De.isContextConsumer = function(w) {
    return C(w) === s;
  }, De.isContextProvider = function(w) {
    return C(w) === d;
  }, De.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, De.isForwardRef = function(w) {
    return C(w) === m;
  }, De.isFragment = function(w) {
    return C(w) === r;
  }, De.isLazy = function(w) {
    return C(w) === S;
  }, De.isMemo = function(w) {
    return C(w) === x;
  }, De.isPortal = function(w) {
    return C(w) === t;
  }, De.isProfiler = function(w) {
    return C(w) === o;
  }, De.isStrictMode = function(w) {
    return C(w) === n;
  }, De.isSuspense = function(w) {
    return C(w) === f;
  }, De.isSuspenseList = function(w) {
    return C(w) === p;
  }, De.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === o || w === n || w === f || w === p || w === j || typeof w == "object" && w !== null && (w.$$typeof === S || w.$$typeof === x || w.$$typeof === d || w.$$typeof === s || w.$$typeof === m || w.$$typeof === B || w.getModuleId !== void 0);
  }, De.typeOf = C, De;
}
Es.exports = Ed();
var fo = Es.exports;
function Td(e) {
  function t(L, O, P, V, y) {
    for (var Z = 0, E = 0, re = 0, J = 0, K, G, ne = 0, ue = 0, ee, le = ee = K = 0, te = 0, fe = 0, ze = 0, ce = 0, Qe = P.length, Ve = Qe - 1, ge, U = "", ie = "", nt = "", Je = "", Ce; te < Qe; ) {
      if (G = P.charCodeAt(te), te === Ve && E + J + re + Z !== 0 && (E !== 0 && (G = E === 47 ? 10 : 47), J = re = Z = 0, Qe++, Ve++), E + J + re + Z === 0) {
        if (te === Ve && (0 < fe && (U = U.replace(j, "")), 0 < U.trim().length)) {
          switch (G) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += P.charAt(te);
          }
          G = 59;
        }
        switch (G) {
          case 123:
            for (U = U.trim(), K = U.charCodeAt(0), ee = 1, ce = ++te; te < Qe; ) {
              switch (G = P.charCodeAt(te)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (G = P.charCodeAt(te + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (le = te + 1; le < Ve; ++le)
                          switch (P.charCodeAt(le)) {
                            case 47:
                              if (G === 42 && P.charCodeAt(le - 1) === 42 && te + 2 !== le) {
                                te = le + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (G === 47) {
                                te = le + 1;
                                break e;
                              }
                          }
                        te = le;
                      }
                  }
                  break;
                case 91:
                  G++;
                case 40:
                  G++;
                case 34:
                case 39:
                  for (; te++ < Ve && P.charCodeAt(te) !== G; )
                    ;
              }
              if (ee === 0) break;
              te++;
            }
            switch (ee = P.substring(ce, te), K === 0 && (K = (U = U.replace(S, "").trim()).charCodeAt(0)), K) {
              case 64:
                switch (0 < fe && (U = U.replace(j, "")), G = U.charCodeAt(1), G) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = O;
                    break;
                  default:
                    fe = Ke;
                }
                if (ee = t(O, fe, ee, G, y + 1), ce = ee.length, 0 < ke && (fe = r(Ke, U, ze), Ce = m(3, ee, fe, O, we, he, ce, G, y, V), U = fe.join(""), Ce !== void 0 && (ce = (ee = Ce.trim()).length) === 0 && (G = 0, ee = "")), 0 < ce) switch (G) {
                  case 115:
                    U = U.replace(oe, d);
                  case 100:
                  case 109:
                  case 45:
                    ee = U + "{" + ee + "}";
                    break;
                  case 107:
                    U = U.replace($, "$1 $2"), ee = U + "{" + ee + "}", ee = xe === 1 || xe === 2 && s("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                    break;
                  default:
                    ee = U + ee, V === 112 && (ee = (ie += ee, ""));
                }
                else ee = "";
                break;
              default:
                ee = t(O, r(O, U, ze), ee, V, y + 1);
            }
            nt += ee, ee = ze = fe = le = K = 0, U = "", G = P.charCodeAt(++te);
            break;
          case 125:
          case 59:
            if (U = (0 < fe ? U.replace(j, "") : U).trim(), 1 < (ce = U.length)) switch (le === 0 && (K = U.charCodeAt(0), K === 45 || 96 < K && 123 > K) && (ce = (U = U.replace(" ", ":")).length), 0 < ke && (Ce = m(1, U, O, L, we, he, ie.length, V, y, V)) !== void 0 && (ce = (U = Ce.trim()).length) === 0 && (U = "\0\0"), K = U.charCodeAt(0), G = U.charCodeAt(1), K) {
              case 0:
                break;
              case 64:
                if (G === 105 || G === 99) {
                  Je += U + P.charAt(te);
                  break;
                }
              default:
                U.charCodeAt(ce - 1) !== 58 && (ie += o(U, K, G, U.charCodeAt(2)));
            }
            ze = fe = le = K = 0, U = "", G = P.charCodeAt(++te);
        }
      }
      switch (G) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + K === 0 && V !== 107 && 0 < U.length && (fe = 1, U += "\0"), 0 < ke * Ye && m(0, U, O, L, we, he, ie.length, V, y, V), he = 1, we++;
          break;
        case 59:
        case 125:
          if (E + J + re + Z === 0) {
            he++;
            break;
          }
        default:
          switch (he++, ge = P.charAt(te), G) {
            case 9:
            case 32:
              if (J + Z + E === 0) switch (ne) {
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
              J + E + Z === 0 && (fe = ze = 1, ge = "\f" + ge);
              break;
            case 108:
              if (J + E + Z + Ee === 0 && 0 < le) switch (te - le) {
                case 2:
                  ne === 112 && P.charCodeAt(te - 3) === 58 && (Ee = ne);
                case 8:
                  ue === 111 && (Ee = ue);
              }
              break;
            case 58:
              J + E + Z === 0 && (le = te);
              break;
            case 44:
              E + re + J + Z === 0 && (fe = 1, ge += "\r");
              break;
            case 34:
            case 39:
              E === 0 && (J = J === G ? 0 : J === 0 ? G : J);
              break;
            case 91:
              J + E + re === 0 && Z++;
              break;
            case 93:
              J + E + re === 0 && Z--;
              break;
            case 41:
              J + E + Z === 0 && re--;
              break;
            case 40:
              if (J + E + Z === 0) {
                if (K === 0) switch (2 * ne + 3 * ue) {
                  case 533:
                    break;
                  default:
                    K = 1;
                }
                re++;
              }
              break;
            case 64:
              E + re + J + Z + le + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + Z + re)) switch (E) {
                case 0:
                  switch (2 * G + 3 * P.charCodeAt(te + 1)) {
                    case 235:
                      E = 47;
                      break;
                    case 220:
                      ce = te, E = 42;
                  }
                  break;
                case 42:
                  G === 47 && ne === 42 && ce + 2 !== te && (P.charCodeAt(ce + 2) === 33 && (ie += P.substring(ce, te + 1)), ge = "", E = 0);
              }
          }
          E === 0 && (U += ge);
      }
      ue = ne, ne = G, te++;
    }
    if (ce = ie.length, 0 < ce) {
      if (fe = O, 0 < ke && (Ce = m(2, ie, fe, L, we, he, ce, V, y, V), Ce !== void 0 && (ie = Ce).length === 0)) return Je + ie + nt;
      if (ie = fe.join(",") + "{" + ie + "}", xe * Ee !== 0) {
        switch (xe !== 2 || s(ie, 2) || (Ee = 0), Ee) {
          case 111:
            ie = ie.replace(H, ":-moz-$1") + ie;
            break;
          case 112:
            ie = ie.replace(W, "::-webkit-input-$1") + ie.replace(W, "::-moz-$1") + ie.replace(W, ":-ms-input-$1") + ie;
        }
        Ee = 0;
      }
    }
    return Je + ie + nt;
  }
  function r(L, O, P) {
    var V = O.trim().split(I);
    O = V;
    var y = V.length, Z = L.length;
    switch (Z) {
      case 0:
      case 1:
        var E = 0;
        for (L = Z === 0 ? "" : L[0] + " "; E < y; ++E)
          O[E] = n(L, O[E], P).trim();
        break;
      default:
        var re = E = 0;
        for (O = []; E < y; ++E)
          for (var J = 0; J < Z; ++J)
            O[re++] = n(L[J] + " ", V[E], P).trim();
    }
    return O;
  }
  function n(L, O, P) {
    var V = O.charCodeAt(0);
    switch (33 > V && (V = (O = O.trim()).charCodeAt(0)), V) {
      case 38:
        return O.replace(M, "$1" + L.trim());
      case 58:
        return L.trim() + O.replace(M, "$1" + L.trim());
      default:
        if (0 < 1 * P && 0 < O.indexOf("\f")) return O.replace(M, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + O;
  }
  function o(L, O, P, V) {
    var y = L + ";", Z = 2 * O + 3 * P + 4 * V;
    if (Z === 944) {
      L = y.indexOf(":", 9) + 1;
      var E = y.substring(L, y.length - 1).trim();
      return E = y.substring(0, L).trim() + E + ";", xe === 1 || xe === 2 && s(E, 1) ? "-webkit-" + E + E : E;
    }
    if (xe === 0 || xe === 2 && !s(y, 1)) return y;
    switch (Z) {
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
        if (0 < y.indexOf("image-set(", 11)) return y.replace(Xe, "$1-webkit-$2") + y;
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
        return C.test(y) ? y.replace(B, ":-webkit-") + y.replace(B, ":-moz-") + y : y;
      case 1e3:
        switch (E = y.substring(13).trim(), O = E.indexOf("-") + 1, E.charCodeAt(0) + E.charCodeAt(O)) {
          case 226:
            E = y.replace(_, "tb");
            break;
          case 232:
            E = y.replace(_, "tb-rl");
            break;
          case 220:
            E = y.replace(_, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + E + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (O = (y = L).length - 10, E = (y.charCodeAt(O) === 33 ? y.substring(0, O) : y).substring(L.indexOf(":", 7) + 1).trim(), Z = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
          case 203:
            if (111 > E.charCodeAt(8)) break;
          case 115:
            y = y.replace(E, "-webkit-" + E) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(E, "-webkit-" + (102 < Z ? "inline-" : "") + "box") + ";" + y.replace(E, "-webkit-" + E) + ";" + y.replace(E, "-ms-" + E + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return E = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + E + "-ms-flex-" + E + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(_e, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(_e, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Be.test(L) === !0) return (E = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(L.replace("stretch", "fill-available"), O, P, V).replace(":fill-available", ":stretch") : y.replace(E, "-webkit-" + E) + y.replace(E, "-moz-" + E.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, P + V === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(L, O) {
    var P = L.indexOf(O === 1 ? ":" : "{"), V = L.substring(0, O !== 3 ? P : 10);
    return P = L.substring(P + 1, L.length - 1), Fe(O !== 2 ? V : V.replace(Ie, "$1"), P, O);
  }
  function d(L, O) {
    var P = o(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
    return P !== O + ";" ? P.replace(pe, " or ($1)").substring(4) : "(" + O + ")";
  }
  function m(L, O, P, V, y, Z, E, re, J, K) {
    for (var G = 0, ne = O, ue; G < ke; ++G)
      switch (ue = je[G].call(x, L, ne, P, V, y, Z, E, re, J, K)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = ue;
      }
    if (ne !== O) return ne;
  }
  function f(L) {
    switch (L) {
      case void 0:
      case null:
        ke = je.length = 0;
        break;
      default:
        if (typeof L == "function") je[ke++] = L;
        else if (typeof L == "object") for (var O = 0, P = L.length; O < P; ++O)
          f(L[O]);
        else Ye = !!L | 0;
    }
    return f;
  }
  function p(L) {
    return L = L.prefix, L !== void 0 && (Fe = null, L ? typeof L != "function" ? xe = 1 : (xe = 2, Fe = L) : xe = 0), p;
  }
  function x(L, O) {
    var P = L;
    if (33 > P.charCodeAt(0) && (P = P.trim()), Ze = P, P = [Ze], 0 < ke) {
      var V = m(-1, O, P, P, we, he, 0, 0, 0, 0);
      V !== void 0 && typeof V == "string" && (O = V);
    }
    var y = t(Ke, P, O, 0, 0);
    return 0 < ke && (V = m(-2, y, P, P, we, he, y.length, 0, 0, 0), V !== void 0 && (y = V)), Ze = "", Ee = 0, he = we = 1, y;
  }
  var S = /^\0+/g, j = /[\0\r\f]/g, B = /: */g, C = /zoo|gra/, w = /([,: ])(transform)/g, I = /,\r+?/g, M = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, W = /::(place)/g, H = /:(read-only)/g, _ = /[svh]\w+-[tblr]{2}/, oe = /\(\s*(.*)\s*\)/g, pe = /([\s\S]*?);/g, _e = /-self|flex-/g, Ie = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Be = /stretch|:\s*\w+\-(?:conte|avail)/, Xe = /([^-])(image-set\()/, he = 1, we = 1, Ee = 0, xe = 1, Ke = [], je = [], ke = 0, Fe = null, Ye = 0, Ze = "";
  return x.use = f, x.set = p, e !== void 0 && p(e), x;
}
var Ad = {
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
function Rd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Od = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ka = /* @__PURE__ */ Rd(
  function(e) {
    return Od.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ts = { exports: {} }, Re = {};
var _a;
function Nd() {
  if (_a) return Re;
  _a = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, B = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function W(_) {
    if (typeof _ == "object" && _ !== null) {
      var oe = _.$$typeof;
      switch (oe) {
        case t:
          switch (_ = _.type, _) {
            case f:
            case p:
            case n:
            case s:
            case o:
            case S:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case m:
                case x:
                case C:
                case B:
                case d:
                  return _;
                default:
                  return oe;
              }
          }
        case r:
          return oe;
      }
    }
  }
  function H(_) {
    return W(_) === p;
  }
  return Re.AsyncMode = f, Re.ConcurrentMode = p, Re.ContextConsumer = m, Re.ContextProvider = d, Re.Element = t, Re.ForwardRef = x, Re.Fragment = n, Re.Lazy = C, Re.Memo = B, Re.Portal = r, Re.Profiler = s, Re.StrictMode = o, Re.Suspense = S, Re.isAsyncMode = function(_) {
    return H(_) || W(_) === f;
  }, Re.isConcurrentMode = H, Re.isContextConsumer = function(_) {
    return W(_) === m;
  }, Re.isContextProvider = function(_) {
    return W(_) === d;
  }, Re.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, Re.isForwardRef = function(_) {
    return W(_) === x;
  }, Re.isFragment = function(_) {
    return W(_) === n;
  }, Re.isLazy = function(_) {
    return W(_) === C;
  }, Re.isMemo = function(_) {
    return W(_) === B;
  }, Re.isPortal = function(_) {
    return W(_) === r;
  }, Re.isProfiler = function(_) {
    return W(_) === s;
  }, Re.isStrictMode = function(_) {
    return W(_) === o;
  }, Re.isSuspense = function(_) {
    return W(_) === S;
  }, Re.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === p || _ === s || _ === o || _ === S || _ === j || typeof _ == "object" && _ !== null && (_.$$typeof === C || _.$$typeof === B || _.$$typeof === d || _.$$typeof === m || _.$$typeof === x || _.$$typeof === I || _.$$typeof === M || _.$$typeof === $ || _.$$typeof === w);
  }, Re.typeOf = W, Re;
}
Ts.exports = Nd();
var Id = Ts.exports, po = Id, jd = {
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
}, Pd = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ld = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, As = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ho = {};
ho[po.ForwardRef] = Ld;
ho[po.Memo] = As;
function Ca(e) {
  return po.isMemo(e) ? As : ho[e.$$typeof] || jd;
}
var Dd = Object.defineProperty, Md = Object.getOwnPropertyNames, Ea = Object.getOwnPropertySymbols, Fd = Object.getOwnPropertyDescriptor, zd = Object.getPrototypeOf, Ta = Object.prototype;
function Rs(e, t, r) {
  if (typeof t != "string") {
    if (Ta) {
      var n = zd(t);
      n && n !== Ta && Rs(e, n, r);
    }
    var o = Md(t);
    Ea && (o = o.concat(Ea(t)));
    for (var s = Ca(e), d = Ca(t), m = 0; m < o.length; ++m) {
      var f = o[m];
      if (!Pd[f] && !(r && r[f]) && !(d && d[f]) && !(s && s[f])) {
        var p = Fd(t, f);
        try {
          Dd(e, f, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var $d = Rs;
const Bd = /* @__PURE__ */ za($d);
var Ne = { env: { NODE_ENV: "production" } };
function qt() {
  return (qt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Aa = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Wi = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !fo.typeOf(e);
}, Xn = Object.freeze([]), ar = Object.freeze({});
function ln(e) {
  return typeof e == "function";
}
function Hi(e) {
  return Ne.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function go(e) {
  return e && typeof e.styledComponentId == "string";
}
var zr = typeof Ne < "u" && Ne.env !== void 0 && (Ne.env.REACT_APP_SC_ATTR || Ne.env.SC_ATTR) || "data-styled", mo = typeof window < "u" && "HTMLElement" in window, Vd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Ne < "u" && Ne.env !== void 0 && (Ne.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Ne.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Ne.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Ne.env.REACT_APP_SC_DISABLE_SPEEDY : Ne.env.SC_DISABLE_SPEEDY !== void 0 && Ne.env.SC_DISABLE_SPEEDY !== "" ? Ne.env.SC_DISABLE_SPEEDY !== "false" && Ne.env.SC_DISABLE_SPEEDY : Ne.env.NODE_ENV !== "production")), Ud = Ne.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Wd() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ur(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw Ne.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Wd.apply(void 0, [Ud[e]].concat(r)).trim());
}
var Hd = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++) n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, d = s; r >= d; ) (d <<= 1) < 0 && Ur(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(o), this.length = d;
      for (var m = s; m < d; m++) this.groupSizes[m] = 0;
    }
    for (var f = this.indexOfGroup(r + 1), p = 0, x = n.length; p < x; p++) this.tag.insertRule(f, n[p]) && (this.groupSizes[r]++, f++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), s = o + n;
      this.groupSizes[r] = 0;
      for (var d = o; d < s; d++) this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var o = this.groupSizes[r], s = this.indexOfGroup(r), d = s + o, m = s; m < d; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), Vn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), on = 1, Pn = function(e) {
  if (Vn.has(e)) return Vn.get(e);
  for (; Kn.has(on); ) on++;
  var t = on++;
  return Ne.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Ur(16, "" + t), Vn.set(e, t), Kn.set(t, e), t;
}, qd = function(e) {
  return Kn.get(e);
}, Gd = function(e, t) {
  t >= on && (on = t + 1), Vn.set(e, t), Kn.set(t, e);
}, Yd = "style[" + zr + '][data-styled-version="5.3.11"]', Zd = new RegExp("^" + zr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Xd = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, d = o.length; s < d; s++) (n = o[s]) && e.registerName(t, n);
}, Kd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = r.length; o < s; o++) {
    var d = r[o].trim();
    if (d) {
      var m = d.match(Zd);
      if (m) {
        var f = 0 | parseInt(m[1], 10), p = m[2];
        f !== 0 && (Gd(p, f), Xd(e, p, m[3]), e.getTag().insertRules(f, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Qd = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Os = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(m) {
    for (var f = m.childNodes, p = f.length; p >= 0; p--) {
      var x = f[p];
      if (x && x.nodeType === 1 && x.hasAttribute(zr)) return x;
    }
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(zr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Qd();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, Jd = function() {
  function e(r) {
    var n = this.element = Os(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, d = 0, m = s.length; d < m; d++) {
        var f = s[d];
        if (f.ownerNode === o) return f;
      }
      Ur(17);
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
}(), ef = function() {
  function e(r) {
    var n = this.element = Os(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), tf = function() {
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
}(), Ra = mo, rf = { isServer: !mo, useCSSOMInjection: !Vd }, Ns = function() {
  function e(r, n, o) {
    r === void 0 && (r = ar), n === void 0 && (n = {}), this.options = qt({}, rf, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && mo && Ra && (Ra = !1, function(s) {
      for (var d = document.querySelectorAll(Yd), m = 0, f = d.length; m < f; m++) {
        var p = d[m];
        p && p.getAttribute(zr) !== "active" && (Kd(s, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Pn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(qt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = o ? new tf(d) : s ? new Jd(d) : new ef(d), new Hd(r)));
    var r, n, o, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Pn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(Pn(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Pn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, s = "", d = 0; d < o; d++) {
        var m = qd(d);
        if (m !== void 0) {
          var f = r.names.get(m), p = n.getGroup(d);
          if (f && p && f.size) {
            var x = zr + ".g" + d + '[id="' + m + '"]', S = "";
            f !== void 0 && f.forEach(function(j) {
              j.length > 0 && (S += j + ",");
            }), s += "" + p + x + '{content:"' + S + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), nf = /(a)(d)/gi, Oa = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function qi(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Oa(t % 52) + r;
  return (Oa(t % 52) + r).replace(nf, "$1-$2");
}
var Cr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Is = function(e) {
  return Cr(5381, e);
};
function of(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ln(r) && !go(r)) return !1;
  }
  return !0;
}
var af = Is("5.3.11"), sf = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = Ne.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && of(t), this.componentId = r, this.baseHash = Cr(af, r), this.baseStyle = n, Ns.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = $r(this.rules, t, r, n).join(""), m = qi(Cr(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(o, m)) {
        var f = n(d, "." + m, void 0, o);
        r.insertRules(o, m, f);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var p = this.rules.length, x = Cr(this.baseHash, n.hash), S = "", j = 0; j < p; j++) {
        var B = this.rules[j];
        if (typeof B == "string") S += B, Ne.env.NODE_ENV !== "production" && (x = Cr(x, B + j));
        else if (B) {
          var C = $r(B, t, r, n), w = Array.isArray(C) ? C.join("") : C;
          x = Cr(x, w + j), S += w;
        }
      }
      if (S) {
        var I = qi(x >>> 0);
        if (!r.hasNameForId(o, I)) {
          var M = n(S, "." + I, void 0, o);
          r.insertRules(o, I, M);
        }
        s.push(I);
      }
    }
    return s.join(" ");
  }, e;
}(), lf = /^\s*\/\/.*$/gm, uf = [":", "[", ".", "#"];
function cf(e) {
  var t, r, n, o, s = ar, d = s.options, m = d === void 0 ? ar : d, f = s.plugins, p = f === void 0 ? Xn : f, x = new Td(m), S = [], j = /* @__PURE__ */ function(w) {
    function I(M) {
      if (M) try {
        w(M + "}");
      } catch {
      }
    }
    return function(M, $, W, H, _, oe, pe, _e, Ie, Be) {
      switch (M) {
        case 1:
          if (Ie === 0 && $.charCodeAt(0) === 64) return w($ + ";"), "";
          break;
        case 2:
          if (_e === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (_e) {
            case 102:
            case 112:
              return w(W[0] + $), "";
            default:
              return $ + (Be === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(I);
      }
    };
  }(function(w) {
    S.push(w);
  }), B = function(w, I, M) {
    return I === 0 && uf.indexOf(M[r.length]) !== -1 || M.match(o) ? w : "." + t;
  };
  function C(w, I, M, $) {
    $ === void 0 && ($ = "&");
    var W = w.replace(lf, ""), H = I && M ? M + " " + I + " { " + W + " }" : W;
    return t = $, r = I, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), x(M || !I ? "" : I, H);
  }
  return x.use([].concat(p, [function(w, I, M) {
    w === 2 && M.length && M[0].lastIndexOf(r) > 0 && (M[0] = M[0].replace(n, B));
  }, j, function(w) {
    if (w === -2) {
      var I = S;
      return S = [], I;
    }
  }])), C.hash = p.length ? p.reduce(function(w, I) {
    return I.name || Ur(15), Cr(w, I.name);
  }, 5381).toString() : "", C;
}
var js = rt.createContext();
js.Consumer;
var Ps = rt.createContext(), df = (Ps.Consumer, new Ns()), Gi = cf();
function ff() {
  return Yt(js) || df;
}
function pf() {
  return Yt(Ps) || Gi;
}
var hf = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Gi);
      var d = n.name + s.hash;
      o.hasNameForId(n.id, d) || o.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return Ur(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Gi), this.name + t.hash;
  }, e;
}(), gf = /([A-Z])/, mf = /([A-Z])/g, yf = /^ms-/, vf = function(e) {
  return "-" + e.toLowerCase();
};
function Na(e) {
  return gf.test(e) ? e.replace(mf, vf).replace(yf, "-ms-") : e;
}
var Ia = function(e) {
  return e == null || e === !1 || e === "";
};
function $r(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], d = 0, m = e.length; d < m; d += 1) (o = $r(e[d], t, r, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (Ia(e)) return "";
  if (go(e)) return "." + e.styledComponentId;
  if (ln(e)) {
    if (typeof (p = e) != "function" || p.prototype && p.prototype.isReactComponent || !t) return e;
    var f = e(t);
    return Ne.env.NODE_ENV !== "production" && fo.isElement(f) && console.warn(Hi(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), $r(f, t, r, n);
  }
  var p;
  return e instanceof hf ? r ? (e.inject(r, n), e.getName(n)) : e : Wi(e) ? function x(S, j) {
    var B, C, w = [];
    for (var I in S) S.hasOwnProperty(I) && !Ia(S[I]) && (Array.isArray(S[I]) && S[I].isCss || ln(S[I]) ? w.push(Na(I) + ":", S[I], ";") : Wi(S[I]) ? w.push.apply(w, x(S[I], I)) : w.push(Na(I) + ": " + (B = I, (C = S[I]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || B in Ad || B.startsWith("--") ? String(C).trim() : C + "px") + ";"));
    return j ? [j + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var ja = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function bf(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return ln(e) || Wi(e) ? ja($r(Aa(Xn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ja($r(Aa(e, r)));
}
var Pa = /invalid hook call/i, Ln = /* @__PURE__ */ new Set(), wf = function(e, t) {
  if (Ne.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (Pa.test(s)) o = !1, Ln.delete(r);
        else {
          for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) m[f - 1] = arguments[f];
          n.apply(void 0, [s].concat(m));
        }
      }, Zi(), o && !Ln.has(r) && (console.warn(r), Ln.add(r));
    } catch (s) {
      Pa.test(s.message) && Ln.delete(r);
    } finally {
      console.error = n;
    }
  }
}, xf = function(e, t, r) {
  return r === void 0 && (r = ar), e.theme !== r.theme && e.theme || t || r.theme;
}, Sf = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, kf = /(^-|-$)/g;
function Ei(e) {
  return e.replace(Sf, "-").replace(kf, "");
}
var _f = function(e) {
  return qi(Is(e) >>> 0);
};
function Dn(e) {
  return typeof e == "string" && (Ne.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Yi = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Cf = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ef(e, t, r) {
  var n = e[r];
  Yi(t) && Yi(n) ? Ls(n, t) : e[r] = t;
}
function Ls(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var o = 0, s = r; o < s.length; o++) {
    var d = s[o];
    if (Yi(d)) for (var m in d) Cf(m) && Ef(e, d[m], m);
  }
  return e;
}
var Ds = rt.createContext();
Ds.Consumer;
var Ti = {};
function Ms(e, t, r) {
  var n = go(e), o = !Dn(e), s = t.attrs, d = s === void 0 ? Xn : s, m = t.componentId, f = m === void 0 ? function($, W) {
    var H = typeof $ != "string" ? "sc" : Ei($);
    Ti[H] = (Ti[H] || 0) + 1;
    var _ = H + "-" + _f("5.3.11" + H + Ti[H]);
    return W ? W + "-" + _ : _;
  }(t.displayName, t.parentComponentId) : m, p = t.displayName, x = p === void 0 ? function($) {
    return Dn($) ? "styled." + $ : "Styled(" + Hi($) + ")";
  }(e) : p, S = t.displayName && t.componentId ? Ei(t.displayName) + "-" + t.componentId : t.componentId || f, j = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, B = t.shouldForwardProp;
  n && e.shouldForwardProp && (B = t.shouldForwardProp ? function($, W, H) {
    return e.shouldForwardProp($, W, H) && t.shouldForwardProp($, W, H);
  } : e.shouldForwardProp);
  var C, w = new sf(r, S, n ? e.componentStyle : void 0), I = w.isStatic && d.length === 0, M = function($, W) {
    return function(H, _, oe, pe) {
      var _e = H.attrs, Ie = H.componentStyle, Be = H.defaultProps, Xe = H.foldedComponentIds, he = H.shouldForwardProp, we = H.styledComponentId, Ee = H.target, xe = function(V, y, Z) {
        V === void 0 && (V = ar);
        var E = qt({}, y, { theme: V }), re = {};
        return Z.forEach(function(J) {
          var K, G, ne, ue = J;
          for (K in ln(ue) && (ue = ue(E)), ue) E[K] = re[K] = K === "className" ? (G = re[K], ne = ue[K], G && ne ? G + " " + ne : G || ne) : ue[K];
        }), [E, re];
      }(xf(_, Yt(Ds), Be) || ar, _, _e), Ke = xe[0], je = xe[1], ke = function(V, y, Z, E) {
        var re = ff(), J = pf(), K = y ? V.generateAndInjectStyles(ar, re, J) : V.generateAndInjectStyles(Z, re, J);
        return Ne.env.NODE_ENV !== "production" && !y && E && E(K), K;
      }(Ie, pe, Ke, Ne.env.NODE_ENV !== "production" ? H.warnTooManyClasses : void 0), Fe = oe, Ye = je.$as || _.$as || je.as || _.as || Ee, Ze = Dn(Ye), L = je !== _ ? qt({}, _, {}, je) : _, O = {};
      for (var P in L) P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? O.as = L[P] : (he ? he(P, ka, Ye) : !Ze || ka(P)) && (O[P] = L[P]));
      return _.style && je.style !== _.style && (O.style = qt({}, _.style, {}, je.style)), O.className = Array.prototype.concat(Xe, we, ke !== we ? ke : null, _.className, je.className).filter(Boolean).join(" "), O.ref = Fe, Ma(Ye, O);
    }(C, $, W, I);
  };
  return M.displayName = x, (C = rt.forwardRef(M)).attrs = j, C.componentStyle = w, C.displayName = x, C.shouldForwardProp = B, C.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Xn, C.styledComponentId = S, C.target = n ? e.target : e, C.withComponent = function($) {
    var W = t.componentId, H = function(oe, pe) {
      if (oe == null) return {};
      var _e, Ie, Be = {}, Xe = Object.keys(oe);
      for (Ie = 0; Ie < Xe.length; Ie++) _e = Xe[Ie], pe.indexOf(_e) >= 0 || (Be[_e] = oe[_e]);
      return Be;
    }(t, ["componentId"]), _ = W && W + "-" + (Dn($) ? $ : Ei(Hi($)));
    return Ms($, qt({}, H, { attrs: j, componentId: _ }), r);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = n ? Ls({}, e.defaultProps, $) : $;
  } }), Ne.env.NODE_ENV !== "production" && (wf(x, S), C.warnTooManyClasses = /* @__PURE__ */ function($, W) {
    var H = {}, _ = !1;
    return function(oe) {
      if (!_ && (H[oe] = !0, Object.keys(H).length >= 200)) {
        var pe = W ? ' with the id of "' + W + '"' : "";
        console.warn("Over 200 classes were generated for component " + $ + pe + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, H = {};
      }
    };
  }(x, S)), Object.defineProperty(C, "toString", { value: function() {
    return "." + C.styledComponentId;
  } }), o && Bd(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), C;
}
var un = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = ar), !fo.isValidElementType(n)) return Ur(1, String(n));
    var s = function() {
      return r(n, o, bf.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, qt({}, o, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, qt({}, o, { attrs: Array.prototype.concat(o.attrs, d).filter(Boolean) }));
    }, s;
  }(Ms, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  un[e] = un(e);
});
Ne.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), Ne.env.NODE_ENV !== "production" && Ne.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Tf = un.section``, Af = (e, t, r) => ({
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
}), Rf = ({ cardButton: e }) => {
  const { feeds: t } = Yt(ei), r = t == null ? void 0 : t.map(
    (n, o) => Af(n, o, e)
  );
  return /* @__PURE__ */ tt.jsx(Tf, { children: /* @__PURE__ */ tt.jsx(
    _s,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, Fs = ({ cardButton: e, ...t }) => (sr(() => {
  typeof window < "u" && co({
    packageName: "component-news",
    component: "CardCarouselNews",
    type: "NA",
    configuration: {
      cardButton: e,
      props: t
    }
  });
}, []), // Calling the high order component that fetches the data
/* @__PURE__ */ tt.jsx(Tr, { ...t, children: /* @__PURE__ */ tt.jsx(
  Rf,
  {
    cardButton: { ...sn.cardButton, ...e }
  }
) }));
Fs.propTypes = Tr.propTypes;
const zs = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), Of = un.section`
  .c-card {
    height: 100%;
  }
`, Nf = (e, t) => /* @__PURE__ */ tt.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ tt.jsx(
      jt,
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
        tags: zs(e == null ? void 0 : e.interests)
      }
    )
  },
  e.id
), If = ({ cardButton: e }) => {
  const { feeds: t } = Yt(ei);
  return /* @__PURE__ */ tt.jsx(Of, { className: "row row-spaced", "data-testid": "grid-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ tt.jsx(rt.Fragment, { children: Nf(r, e) }, n)
  )) });
}, $s = ({ cardButton: e, ...t }) => (sr(() => {
  typeof window < "u" && co({
    packageName: "component-news",
    component: "CardGridNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ tt.jsx(Tr, { ...t, children: /* @__PURE__ */ tt.jsx(
  If,
  {
    cardButton: { ...sn.cardButton, ...e }
  }
) }));
$s.propTypes = {
  ...Tr.propTypes,
  cardButton: us
};
const jf = un.section``, Pf = (e, t) => /* @__PURE__ */ tt.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ tt.jsx(
  jt,
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
    tags: zs(e == null ? void 0 : e.interests)
  }
) }, e.id), Lf = ({ cardButton: e }) => {
  const { feeds: t } = Yt(ei);
  return /* @__PURE__ */ tt.jsx(jf, { className: "row-spaced", "data-testid": "list-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ tt.jsx(rt.Fragment, { children: Pf(r, e) }, n)
  )) });
}, Bs = ({ cardButton: e, ...t }) => (sr(() => {
  typeof window < "u" && co({
    packageName: "component-news",
    component: "CardListlNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ tt.jsx(Tr, { ...t, children: /* @__PURE__ */ tt.jsx(
  Lf,
  {
    cardButton: { ...sn.cardButton, ...e }
  }
) }));
Bs.propTypes = { ...Tr.propTypes, feedCardButtonShape: us };
var Vs, La = Fa;
Vs = La.createRoot, La.hydrateRoot;
const yo = (e, t, r) => {
  Vs(r).render(rt.createElement(e, t));
}, Ff = ({ targetSelector: e, props: t }) => {
  yo($s, t, document.querySelector(e));
}, zf = ({ targetSelector: e, props: t }) => {
  yo(Bs, t, document.querySelector(e));
}, $f = ({ targetSelector: e, props: t }) => {
  yo(Fs, t, document.querySelector(e));
};
export {
  Fs as CardCarouselNews,
  $s as CardGridNews,
  Bs as CardListlNews,
  $f as initCardCarouselNewsComponent,
  Ff as initCardGridNewsComponent,
  zf as initCardListNewsComponent
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
