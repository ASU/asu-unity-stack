import et, { Component as Gs, createContext as Ys, forwardRef as Ri, useRef as Zs, useImperativeHandle as Xs, useId as Js, useContext as Yt, createElement as Oi, useState as Er, useEffect as sr } from "react";
import Ei from "react-dom";
function Ii(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ni = { exports: {} }, Jr = {};
var Aa;
function Ks() {
  if (Aa) return Jr;
  Aa = 1;
  var e = et, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, p, f) {
    var k, S = {}, P = null, $ = null;
    f !== void 0 && (P = "" + f), p.key !== void 0 && (P = "" + p.key), p.ref !== void 0 && ($ = p.ref);
    for (k in p) n.call(p, k) && !s.hasOwnProperty(k) && (S[k] = p[k]);
    if (m && m.defaultProps) for (k in p = m.defaultProps, p) S[k] === void 0 && (S[k] = p[k]);
    return { $$typeof: t, type: m, key: P, ref: $, props: S, _owner: i.current };
  }
  return Jr.Fragment = r, Jr.jsx = d, Jr.jsxs = d, Jr;
}
Ni.exports = Ks();
var Qe = Ni.exports;
function Vo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pi = { exports: {} }, Kr = {}, Ra;
function Qs() {
  if (Ra) return Kr;
  Ra = 1;
  var e = et, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, p, f) {
    var k, S = {}, P = null, $ = null;
    f !== void 0 && (P = "" + f), p.key !== void 0 && (P = "" + p.key), p.ref !== void 0 && ($ = p.ref);
    for (k in p) n.call(p, k) && !s.hasOwnProperty(k) && (S[k] = p[k]);
    if (m && m.defaultProps) for (k in p = m.defaultProps, p) S[k] === void 0 && (S[k] = p[k]);
    return { $$typeof: t, type: m, key: P, ref: $, props: S, _owner: i.current };
  }
  return Kr.Fragment = r, Kr.jsx = d, Kr.jsxs = d, Kr;
}
Pi.exports = Qs();
var D = Pi.exports, Li = { exports: {} }, fo, Oa;
function el() {
  if (Oa) return fo;
  Oa = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return fo = e, fo;
}
var po, Ea;
function tl() {
  if (Ea) return po;
  Ea = 1;
  var e = el();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, po = function() {
    function n(d, m, p, f, k, S) {
      if (S !== e) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    n.isRequired = n;
    function i() {
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
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, po;
}
Li.exports = tl()();
var rl = Li.exports;
const l = /* @__PURE__ */ Vo(rl), nl = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), ho = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), ji = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.string,
    header: l.string,
    body: l.string
  })
}), qo = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var Mi = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", d = 0; d < arguments.length; d++) {
        var m = arguments[d];
        m && (s = i(s, n(m)));
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
        t.call(s, m) && s[m] && (d = i(d, m));
      return d;
    }
    function i(s, d) {
      return d ? s ? s + " " + d : s + d : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Mi);
var ol = Mi.exports;
const Lr = /* @__PURE__ */ Vo(ol), al = () => {
  const [e, t] = Er(), [r, n] = Er(!1), [i, s] = Er(!1), [d, m] = Er("");
  return sr(() => {
    d && (() => {
      s(null), n(!0);
      try {
        fetch(d).then((p) => p.json()).then((p) => {
          t(p), n(!1);
        }).catch((p) => {
          s(p), n(!1);
        });
      } catch (p) {
        s(p);
      }
    })();
  }, [d]), [{ data: e, loading: r, error: i }, m];
}, il = (e) => (e || []).join(" ");
function or(e) {
  "@babel/helpers - typeof";
  return or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, or(e);
}
function Ao(e, t) {
  return Ao = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, Ao(e, t);
}
function sl() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function jn(e, t, r) {
  return sl() ? jn = Reflect.construct : jn = function(n, i, s) {
    var d = [null];
    d.push.apply(d, i);
    var m = Function.bind.apply(n, d), p = new m();
    return s && Ao(p, s.prototype), p;
  }, jn.apply(null, arguments);
}
function Ot(e) {
  return ll(e) || ul(e) || cl(e) || dl();
}
function ll(e) {
  if (Array.isArray(e)) return Ro(e);
}
function ul(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function cl(e, t) {
  if (e) {
    if (typeof e == "string") return Ro(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ro(e, t);
  }
}
function Ro(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var fl = Object.hasOwnProperty, Ia = Object.setPrototypeOf, pl = Object.isFrozen, hl = Object.getPrototypeOf, gl = Object.getOwnPropertyDescriptor, lt = Object.freeze, bt = Object.seal, ml = Object.create, Fi = typeof Reflect < "u" && Reflect, Un = Fi.apply, Oo = Fi.construct;
Un || (Un = function(e, t, r) {
  return e.apply(t, r);
});
lt || (lt = function(e) {
  return e;
});
bt || (bt = function(e) {
  return e;
});
Oo || (Oo = function(e, t) {
  return jn(e, Ot(t));
});
var yl = wt(Array.prototype.forEach), Na = wt(Array.prototype.pop), Qr = wt(Array.prototype.push), Mn = wt(String.prototype.toLowerCase), go = wt(String.prototype.toString), Pa = wt(String.prototype.match), Rt = wt(String.prototype.replace), vl = wt(String.prototype.indexOf), bl = wt(String.prototype.trim), rt = wt(RegExp.prototype.test), mo = wl(TypeError);
function wt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Un(e, t, n);
  };
}
function wl(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Oo(e, r);
  };
}
function ve(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : Mn, Ia && Ia(e, null);
  for (var i = t.length; i--; ) {
    var s = t[i];
    if (typeof s == "string") {
      var d = r(s);
      d !== s && (pl(t) || (t[i] = d), s = d);
    }
    e[s] = !0;
  }
  return e;
}
function Sr(e) {
  var t = ml(null), r;
  for (r in e)
    Un(fl, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function Tn(e, t) {
  for (; e !== null; ) {
    var r = gl(e, t);
    if (r) {
      if (r.get)
        return wt(r.get);
      if (typeof r.value == "function")
        return wt(r.value);
    }
    e = hl(e);
  }
  function n(i) {
    return console.warn("fallback value for", i), null;
  }
  return n;
}
var La = lt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yo = lt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), vo = lt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), xl = lt(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), bo = lt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Sl = lt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ja = lt(["#text"]), Ma = lt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), wo = lt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Fa = lt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), An = lt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), kl = bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Cl = bt(/<%[\w\W]*|[\w\W]*%>/gm), _l = bt(/\${[\w\W]*}/gm), Tl = bt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Al = bt(/^aria-[\-\w]+$/), Rl = bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ol = bt(/^(?:\w+script|data):/i), El = bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Il = bt(/^html$/i), Nl = bt(/^[a-z][.\w]*(-[.\w]+)+$/i), Pl = function() {
  return typeof window > "u" ? null : window;
}, Ll = function(e, t) {
  if (or(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var r = null, n = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(n) && (r = t.currentScript.getAttribute(n));
  var i = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(i, {
      createHTML: function(s) {
        return s;
      },
      createScriptURL: function(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function zi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Pl(), t = function(x) {
    return zi(x);
  };
  if (t.version = "2.5.8", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, i = e.DocumentFragment, s = e.HTMLTemplateElement, d = e.Node, m = e.Element, p = e.NodeFilter, f = e.NamedNodeMap, k = f === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : f, S = e.HTMLFormElement, P = e.DOMParser, $ = e.trustedTypes, _ = m.prototype, w = Tn(_, "cloneNode"), N = Tn(_, "nextSibling"), F = Tn(_, "childNodes"), U = Tn(_, "parentNode");
  if (typeof s == "function") {
    var G = n.createElement("template");
    G.content && G.content.ownerDocument && (n = G.content.ownerDocument);
  }
  var X = Ll($, r), C = X ? X.createHTML("") : "", de = n, ye = de.implementation, Ce = de.createNodeIterator, Ee = de.createDocumentFragment, De = de.getElementsByTagName, Ye = r.importNode, pe = {};
  try {
    pe = Sr(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var we = {};
  t.isSupported = typeof U == "function" && ye && ye.createHTMLDocument !== void 0 && pe !== 9;
  var Te = kl, xe = Cl, Ze = _l, Ie = Tl, ke = Al, Me = Ol, qe = El, Ge = Nl, j = Rl, E = null, L = ve({}, [].concat(Ot(La), Ot(yo), Ot(vo), Ot(bo), Ot(ja))), B = null, y = ve({}, [].concat(Ot(Ma), Ot(wo), Ot(Fa), Ot(An))), Y = Object.seal(Object.create(null, {
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
  })), T = null, re = null, K = !0, Q = !0, V = !1, ne = !0, le = !1, ee = !0, se = !1, te = !1, fe = !1, Fe = !1, ue = !1, Xe = !1, $e = !0, he = !1, W = "user-content-", oe = !0, tt = !1, Je = {}, _e = null, cr = ve({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), dr = null, Tr = ve({}, ["audio", "video", "img", "source", "image", "track"]), jt = null, Mt = ve({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Zt = "http://www.w3.org/1998/Math/MathML", Xt = "http://www.w3.org/2000/svg", ft = "http://www.w3.org/1999/xhtml", It = ft, fr = !1, nt = null, pr = ve({}, [Zt, Xt, ft], go), ut, Ae = ["application/xhtml+xml", "text/html"], Ft = "text/html", Ue, ct = null, vt = n.createElement("form"), zt = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, pt = function(x) {
    ct && ct === x || ((!x || or(x) !== "object") && (x = {}), x = Sr(x), ut = // eslint-disable-next-line unicorn/prefer-includes
    Ae.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? ut = Ft : ut = x.PARSER_MEDIA_TYPE, Ue = ut === "application/xhtml+xml" ? go : Mn, E = "ALLOWED_TAGS" in x ? ve({}, x.ALLOWED_TAGS, Ue) : L, B = "ALLOWED_ATTR" in x ? ve({}, x.ALLOWED_ATTR, Ue) : y, nt = "ALLOWED_NAMESPACES" in x ? ve({}, x.ALLOWED_NAMESPACES, go) : pr, jt = "ADD_URI_SAFE_ATTR" in x ? ve(
      Sr(Mt),
      // eslint-disable-line indent
      x.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Ue
      // eslint-disable-line indent
    ) : Mt, dr = "ADD_DATA_URI_TAGS" in x ? ve(
      Sr(Tr),
      // eslint-disable-line indent
      x.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Ue
      // eslint-disable-line indent
    ) : Tr, _e = "FORBID_CONTENTS" in x ? ve({}, x.FORBID_CONTENTS, Ue) : cr, T = "FORBID_TAGS" in x ? ve({}, x.FORBID_TAGS, Ue) : {}, re = "FORBID_ATTR" in x ? ve({}, x.FORBID_ATTR, Ue) : {}, Je = "USE_PROFILES" in x ? x.USE_PROFILES : !1, K = x.ALLOW_ARIA_ATTR !== !1, Q = x.ALLOW_DATA_ATTR !== !1, V = x.ALLOW_UNKNOWN_PROTOCOLS || !1, ne = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, le = x.SAFE_FOR_TEMPLATES || !1, ee = x.SAFE_FOR_XML !== !1, se = x.WHOLE_DOCUMENT || !1, Fe = x.RETURN_DOM || !1, ue = x.RETURN_DOM_FRAGMENT || !1, Xe = x.RETURN_TRUSTED_TYPE || !1, fe = x.FORCE_BODY || !1, $e = x.SANITIZE_DOM !== !1, he = x.SANITIZE_NAMED_PROPS || !1, oe = x.KEEP_CONTENT !== !1, tt = x.IN_PLACE || !1, j = x.ALLOWED_URI_REGEXP || j, It = x.NAMESPACE || ft, Y = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && zt(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Y.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && zt(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Y.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Y.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), le && (Q = !1), ue && (Fe = !0), Je && (E = ve({}, Ot(ja)), B = [], Je.html === !0 && (ve(E, La), ve(B, Ma)), Je.svg === !0 && (ve(E, yo), ve(B, wo), ve(B, An)), Je.svgFilters === !0 && (ve(E, vo), ve(B, wo), ve(B, An)), Je.mathMl === !0 && (ve(E, bo), ve(B, Fa), ve(B, An))), x.ADD_TAGS && (E === L && (E = Sr(E)), ve(E, x.ADD_TAGS, Ue)), x.ADD_ATTR && (B === y && (B = Sr(B)), ve(B, x.ADD_ATTR, Ue)), x.ADD_URI_SAFE_ATTR && ve(jt, x.ADD_URI_SAFE_ATTR, Ue), x.FORBID_CONTENTS && (_e === cr && (_e = Sr(_e)), ve(_e, x.FORBID_CONTENTS, Ue)), oe && (E["#text"] = !0), se && ve(E, ["html", "head", "body"]), E.table && (ve(E, ["tbody"]), delete T.tbody), lt && lt(x), ct = x);
  }, hr = ve({}, ["mi", "mo", "mn", "ms", "mtext"]), Jt = ve({}, ["annotation-xml"]), gr = ve({}, ["title", "style", "font", "a", "script"]), Dt = ve({}, yo);
  ve(Dt, vo), ve(Dt, xl);
  var Kt = ve({}, bo);
  ve(Kt, Sl);
  var Ar = function(x) {
    var J = U(x);
    (!J || !J.tagName) && (J = {
      namespaceURI: It,
      tagName: "template"
    });
    var H = Mn(x.tagName), Se = Mn(J.tagName);
    return nt[x.namespaceURI] ? x.namespaceURI === Xt ? J.namespaceURI === ft ? H === "svg" : J.namespaceURI === Zt ? H === "svg" && (Se === "annotation-xml" || hr[Se]) : !!Dt[H] : x.namespaceURI === Zt ? J.namespaceURI === ft ? H === "math" : J.namespaceURI === Xt ? H === "math" && Jt[Se] : !!Kt[H] : x.namespaceURI === ft ? J.namespaceURI === Xt && !Jt[Se] || J.namespaceURI === Zt && !hr[Se] ? !1 : !Kt[H] && (gr[H] || !Dt[H]) : !!(ut === "application/xhtml+xml" && nt[x.namespaceURI]) : !1;
  }, xt = function(x) {
    Qr(t.removed, {
      element: x
    });
    try {
      x.parentNode.removeChild(x);
    } catch {
      try {
        x.outerHTML = C;
      } catch {
        x.remove();
      }
    }
  }, Qt = function(x, J) {
    try {
      Qr(t.removed, {
        attribute: J.getAttributeNode(x),
        from: J
      });
    } catch {
      Qr(t.removed, {
        attribute: null,
        from: J
      });
    }
    if (J.removeAttribute(x), x === "is" && !B[x])
      if (Fe || ue)
        try {
          xt(J);
        } catch {
        }
      else
        try {
          J.setAttribute(x, "");
        } catch {
        }
  }, $t = function(x) {
    var J, H;
    if (fe)
      x = "<remove></remove>" + x;
    else {
      var Se = Pa(x, /^[\r\n\t ]+/);
      H = Se && Se[0];
    }
    ut === "application/xhtml+xml" && It === ft && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    var je = X ? X.createHTML(x) : x;
    if (It === ft)
      try {
        J = new P().parseFromString(je, ut);
      } catch {
      }
    if (!J || !J.documentElement) {
      J = ye.createDocument(It, "template", null);
      try {
        J.documentElement.innerHTML = fr ? C : je;
      } catch {
      }
    }
    var Ne = J.body || J.documentElement;
    return x && H && Ne.insertBefore(n.createTextNode(H), Ne.childNodes[0] || null), It === ft ? De.call(J, se ? "html" : "body")[0] : se ? J.documentElement : Ne;
  }, mr = function(x) {
    return Ce.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Nt = function(x) {
    return x instanceof S && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof k) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, St = function(x) {
    return or(d) === "object" ? x instanceof d : x && or(x) === "object" && typeof x.nodeType == "number" && typeof x.nodeName == "string";
  }, ht = function(x, J, H) {
    we[x] && yl(we[x], function(Se) {
      Se.call(t, J, H, ct);
    });
  }, Pt = function(x) {
    var J;
    if (ht("beforeSanitizeElements", x, null), Nt(x) || rt(/[\u0080-\uFFFF]/, x.nodeName))
      return xt(x), !0;
    var H = Ue(x.nodeName);
    if (ht("uponSanitizeElement", x, {
      tagName: H,
      allowedTags: E
    }), x.hasChildNodes() && !St(x.firstElementChild) && (!St(x.content) || !St(x.content.firstElementChild)) && rt(/<[/\w]/g, x.innerHTML) && rt(/<[/\w]/g, x.textContent) || H === "select" && rt(/<template/i, x.innerHTML) || x.nodeType === 7 || ee && x.nodeType === 8 && rt(/<[/\w]/g, x.data))
      return xt(x), !0;
    if (!E[H] || T[H]) {
      if (!T[H] && er(H) && (Y.tagNameCheck instanceof RegExp && rt(Y.tagNameCheck, H) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(H)))
        return !1;
      if (oe && !_e[H]) {
        var Se = U(x) || x.parentNode, je = F(x) || x.childNodes;
        if (je && Se)
          for (var Ne = je.length, We = Ne - 1; We >= 0; --We) {
            var dt = w(je[We], !0);
            dt.__removalCount = (x.__removalCount || 0) + 1, Se.insertBefore(dt, N(x));
          }
      }
      return xt(x), !0;
    }
    return x instanceof m && !Ar(x) || (H === "noscript" || H === "noembed" || H === "noframes") && rt(/<\/no(script|embed|frames)/i, x.innerHTML) ? (xt(x), !0) : (le && x.nodeType === 3 && (J = x.textContent, J = Rt(J, Te, " "), J = Rt(J, xe, " "), J = Rt(J, Ze, " "), x.textContent !== J && (Qr(t.removed, {
      element: x.cloneNode()
    }), x.textContent = J)), ht("afterSanitizeElements", x, null), !1);
  }, Rr = function(x, J, H) {
    if ($e && (J === "id" || J === "name") && (H in n || H in vt))
      return !1;
    if (!(Q && !re[J] && rt(Ie, J)) && !(K && rt(ke, J))) {
      if (!B[J] || re[J]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(er(x) && (Y.tagNameCheck instanceof RegExp && rt(Y.tagNameCheck, x) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(x)) && (Y.attributeNameCheck instanceof RegExp && rt(Y.attributeNameCheck, J) || Y.attributeNameCheck instanceof Function && Y.attributeNameCheck(J)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          J === "is" && Y.allowCustomizedBuiltInElements && (Y.tagNameCheck instanceof RegExp && rt(Y.tagNameCheck, H) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(H)))
        ) return !1;
      } else if (!jt[J] && !rt(j, Rt(H, qe, "")) && !((J === "src" || J === "xlink:href" || J === "href") && x !== "script" && vl(H, "data:") === 0 && dr[x]) && !(V && !rt(Me, Rt(H, qe, ""))) && H)
        return !1;
    }
    return !0;
  }, er = function(x) {
    return x !== "annotation-xml" && Pa(x, Ge);
  }, Ut = function(x) {
    var J, H, Se, je;
    ht("beforeSanitizeAttributes", x, null);
    var Ne = x.attributes;
    if (!(!Ne || Nt(x))) {
      var We = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: B
      };
      for (je = Ne.length; je--; ) {
        J = Ne[je];
        var dt = J, ot = dt.name, Ke = dt.namespaceURI;
        if (H = ot === "value" ? J.value : bl(J.value), Se = Ue(ot), We.attrName = Se, We.attrValue = H, We.keepAttr = !0, We.forceKeepAttr = void 0, ht("uponSanitizeAttribute", x, We), H = We.attrValue, !We.forceKeepAttr && (Qt(ot, x), !!We.keepAttr)) {
          if (!ne && rt(/\/>/i, H)) {
            Qt(ot, x);
            continue;
          }
          le && (H = Rt(H, Te, " "), H = Rt(H, xe, " "), H = Rt(H, Ze, " "));
          var kt = Ue(x.nodeName);
          if (Rr(kt, Se, H)) {
            if (he && (Se === "id" || Se === "name") && (Qt(ot, x), H = W + H), ee && rt(/((--!?|])>)|<\/(style|title)/i, H)) {
              Qt(ot, x);
              continue;
            }
            if (X && or($) === "object" && typeof $.getAttributeType == "function" && !Ke)
              switch ($.getAttributeType(kt, Se)) {
                case "TrustedHTML": {
                  H = X.createHTML(H);
                  break;
                }
                case "TrustedScriptURL": {
                  H = X.createScriptURL(H);
                  break;
                }
              }
            try {
              Ke ? x.setAttributeNS(Ke, ot, H) : x.setAttribute(ot, H), Nt(x) ? xt(x) : Na(t.removed);
            } catch {
            }
          }
        }
      }
      ht("afterSanitizeAttributes", x, null);
    }
  }, Bt = function x(J) {
    var H, Se = mr(J);
    for (ht("beforeSanitizeShadowDOM", J, null); H = Se.nextNode(); )
      ht("uponSanitizeShadowNode", H, null), Pt(H), Ut(H), H.content instanceof i && x(H.content);
    ht("afterSanitizeShadowDOM", J, null);
  };
  return t.sanitize = function(x) {
    var J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, H, Se, je, Ne, We;
    if (fr = !x, fr && (x = "<!-->"), typeof x != "string" && !St(x))
      if (typeof x.toString == "function") {
        if (x = x.toString(), typeof x != "string")
          throw mo("dirty is not a string, aborting");
      } else
        throw mo("toString is not a function");
    if (!t.isSupported) {
      if (or(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof x == "string")
          return e.toStaticHTML(x);
        if (St(x))
          return e.toStaticHTML(x.outerHTML);
      }
      return x;
    }
    if (te || pt(J), t.removed = [], typeof x == "string" && (tt = !1), tt) {
      if (x.nodeName) {
        var dt = Ue(x.nodeName);
        if (!E[dt] || T[dt])
          throw mo("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (x instanceof d)
      H = $t("<!---->"), Se = H.ownerDocument.importNode(x, !0), Se.nodeType === 1 && Se.nodeName === "BODY" || Se.nodeName === "HTML" ? H = Se : H.appendChild(Se);
    else {
      if (!Fe && !le && !se && // eslint-disable-next-line unicorn/prefer-includes
      x.indexOf("<") === -1)
        return X && Xe ? X.createHTML(x) : x;
      if (H = $t(x), !H)
        return Fe ? null : Xe ? C : "";
    }
    H && fe && xt(H.firstChild);
    for (var ot = mr(tt ? x : H); je = ot.nextNode(); )
      je.nodeType === 3 && je === Ne || (Pt(je), Ut(je), je.content instanceof i && Bt(je.content), Ne = je);
    if (Ne = null, tt)
      return x;
    if (Fe) {
      if (ue)
        for (We = Ee.call(H.ownerDocument); H.firstChild; )
          We.appendChild(H.firstChild);
      else
        We = H;
      return (B.shadowroot || B.shadowrootmod) && (We = Ye.call(r, We, !0)), We;
    }
    var Ke = se ? H.outerHTML : H.innerHTML;
    return se && E["!doctype"] && H.ownerDocument && H.ownerDocument.doctype && H.ownerDocument.doctype.name && rt(Il, H.ownerDocument.doctype.name) && (Ke = "<!DOCTYPE " + H.ownerDocument.doctype.name + `>
` + Ke), le && (Ke = Rt(Ke, Te, " "), Ke = Rt(Ke, xe, " "), Ke = Rt(Ke, Ze, " ")), X && Xe ? X.createHTML(Ke) : Ke;
  }, t.setConfig = function(x) {
    pt(x), te = !0;
  }, t.clearConfig = function() {
    ct = null, te = !1;
  }, t.isValidAttribute = function(x, J, H) {
    ct || pt({});
    var Se = Ue(x), je = Ue(J);
    return Rr(Se, je, H);
  }, t.addHook = function(x, J) {
    typeof J == "function" && (we[x] = we[x] || [], Qr(we[x], J));
  }, t.removeHook = function(x) {
    if (we[x])
      return Na(we[x]);
  }, t.removeHooks = function(x) {
    we[x] && (we[x] = []);
  }, t.removeAllHooks = function() {
    we = {};
  }, t;
}
var jl = zi();
const Ir = (e) => ({ __html: jl.sanitize(e) });
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
const Ml = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: i = "",
  text: s = "",
  region: d = "",
  component: m = ""
}) => {
  const { dataLayer: p } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: d.toLowerCase(),
    section: i.toLowerCase(),
    text: s.toLowerCase(),
    component: m.toLowerCase()
  };
  p && p.push(f);
};
var kr = {}, za;
function Fl() {
  if (za) return kr;
  za = 1;
  var e = et;
  function t(o) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, g = 1; g < arguments.length; g++) c += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + o + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, i = {}, s = {};
  function d(o) {
    return r.call(s, o) ? !0 : r.call(i, o) ? !1 : n.test(o) ? s[o] = !0 : (i[o] = !0, !1);
  }
  function m(o, c, g, b, I, A, M) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = b, this.attributeNamespace = I, this.mustUseProperty = g, this.propertyName = o, this.type = c, this.sanitizeURL = A, this.removeEmptyString = M;
  }
  var p = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    p[o] = new m(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var c = o[0];
    p[c] = new m(c, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    p[o] = new m(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    p[o] = new m(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    p[o] = new m(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    p[o] = new m(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    p[o] = new m(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    p[o] = new m(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    p[o] = new m(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var f = /[\-:]([a-z])/g;
  function k(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var c = o.replace(
      f,
      k
    );
    p[c] = new m(c, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var c = o.replace(f, k);
    p[c] = new m(c, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var c = o.replace(f, k);
    p[c] = new m(c, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    p[o] = new m(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), p.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    p[o] = new m(o, 1, !1, o.toLowerCase(), null, !0, !0);
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
  }, P = ["Webkit", "ms", "Moz", "O"];
  Object.keys(S).forEach(function(o) {
    P.forEach(function(c) {
      c = c + o.charAt(0).toUpperCase() + o.substring(1), S[c] = S[o];
    });
  });
  var $ = /["'&<>]/;
  function _(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var c = $.exec(o);
    if (c) {
      var g = "", b, I = 0;
      for (b = c.index; b < o.length; b++) {
        switch (o.charCodeAt(b)) {
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
        I !== b && (g += o.substring(I, b)), I = b + 1, g += c;
      }
      o = I !== b ? g + o.substring(I, b) : g;
    }
    return o;
  }
  var w = /([A-Z])/g, N = /^ms-/, F = Array.isArray;
  function U(o, c) {
    return { insertionMode: o, selectedValue: c };
  }
  function G(o, c, g) {
    switch (c) {
      case "select":
        return U(1, g.value != null ? g.value : g.defaultValue);
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
    return 4 <= o.insertionMode || o.insertionMode === 0 ? U(1, null) : o;
  }
  var X = /* @__PURE__ */ new Map();
  function C(o, c, g) {
    if (typeof g != "object") throw Error(t(62));
    c = !0;
    for (var b in g) if (r.call(g, b)) {
      var I = g[b];
      if (I != null && typeof I != "boolean" && I !== "") {
        if (b.indexOf("--") === 0) {
          var A = _(b);
          I = _(("" + I).trim());
        } else {
          A = b;
          var M = X.get(A);
          M !== void 0 || (M = _(A.replace(w, "-$1").toLowerCase().replace(N, "-ms-")), X.set(A, M)), A = M, I = typeof I == "number" ? I === 0 || r.call(S, b) ? "" + I : I + "px" : _(("" + I).trim());
        }
        c ? (c = !1, o.push(' style="', A, ":", I)) : o.push(";", A, ":", I);
      }
    }
    c || o.push('"');
  }
  function de(o, c, g, b) {
    switch (g) {
      case "style":
        C(o, c, b);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (c = p.hasOwnProperty(g) ? p[g] : null, c !== null) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (g = c.attributeName, c.type) {
          case 3:
            b && o.push(" ", g, '=""');
            break;
          case 4:
            b === !0 ? o.push(" ", g, '=""') : b !== !1 && o.push(" ", g, '="', _(b), '"');
            break;
          case 5:
            isNaN(b) || o.push(" ", g, '="', _(b), '"');
            break;
          case 6:
            !isNaN(b) && 1 <= b && o.push(" ", g, '="', _(b), '"');
            break;
          default:
            c.sanitizeURL && (b = "" + b), o.push(" ", g, '="', _(b), '"');
        }
      } else if (d(g)) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = g.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        o.push(" ", g, '="', _(b), '"');
      }
    }
  }
  function ye(o, c, g) {
    if (c != null) {
      if (g != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && o.push("" + c);
    }
  }
  function Ce(o) {
    var c = "";
    return e.Children.forEach(o, function(g) {
      g != null && (c += g);
    }), c;
  }
  function Ee(o, c, g, b) {
    o.push(pe(g));
    var I = g = null, A;
    for (A in c) if (r.call(c, A)) {
      var M = c[A];
      if (M != null) switch (A) {
        case "children":
          g = M;
          break;
        case "dangerouslySetInnerHTML":
          I = M;
          break;
        default:
          de(o, b, A, M);
      }
    }
    return o.push(">"), ye(o, I, g), typeof g == "string" ? (o.push(_(g)), null) : g;
  }
  var De = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ye = /* @__PURE__ */ new Map();
  function pe(o) {
    var c = Ye.get(o);
    if (c === void 0) {
      if (!De.test(o)) throw Error(t(65, o));
      c = "<" + o, Ye.set(o, c);
    }
    return c;
  }
  function we(o, c, g, b, I) {
    switch (c) {
      case "select":
        o.push(pe("select"));
        var A = null, M = null;
        for (ge in g) if (r.call(g, ge)) {
          var Z = g[ge];
          if (Z != null) switch (ge) {
            case "children":
              A = Z;
              break;
            case "dangerouslySetInnerHTML":
              M = Z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              de(o, b, ge, Z);
          }
        }
        return o.push(">"), ye(o, M, A), A;
      case "option":
        M = I.selectedValue, o.push(pe("option"));
        var ae = Z = null, ce = null, ge = null;
        for (A in g) if (r.call(g, A)) {
          var He = g[A];
          if (He != null) switch (A) {
            case "children":
              Z = He;
              break;
            case "selected":
              ce = He;
              break;
            case "dangerouslySetInnerHTML":
              ge = He;
              break;
            case "value":
              ae = He;
            default:
              de(o, b, A, He);
          }
        }
        if (M != null) if (g = ae !== null ? "" + ae : Ce(Z), F(M)) {
          for (b = 0; b < M.length; b++)
            if ("" + M[b] === g) {
              o.push(' selected=""');
              break;
            }
        } else "" + M === g && o.push(' selected=""');
        else ce && o.push(' selected=""');
        return o.push(">"), ye(o, ge, Z), Z;
      case "textarea":
        o.push(pe("textarea")), ge = M = A = null;
        for (Z in g) if (r.call(g, Z) && (ae = g[Z], ae != null)) switch (Z) {
          case "children":
            ge = ae;
            break;
          case "value":
            A = ae;
            break;
          case "defaultValue":
            M = ae;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            de(
              o,
              b,
              Z,
              ae
            );
        }
        if (A === null && M !== null && (A = M), o.push(">"), ge != null) {
          if (A != null) throw Error(t(92));
          if (F(ge) && 1 < ge.length) throw Error(t(93));
          A = "" + ge;
        }
        return typeof A == "string" && A[0] === `
` && o.push(`
`), A !== null && o.push(_("" + A)), null;
      case "input":
        o.push(pe("input")), ae = ge = Z = A = null;
        for (M in g) if (r.call(g, M) && (ce = g[M], ce != null)) switch (M) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ae = ce;
            break;
          case "defaultValue":
            Z = ce;
            break;
          case "checked":
            ge = ce;
            break;
          case "value":
            A = ce;
            break;
          default:
            de(o, b, M, ce);
        }
        return ge !== null ? de(o, b, "checked", ge) : ae !== null && de(o, b, "checked", ae), A !== null ? de(o, b, "value", A) : Z !== null && de(o, b, "value", Z), o.push("/>"), null;
      case "menuitem":
        o.push(pe("menuitem"));
        for (var Ct in g) if (r.call(g, Ct) && (A = g[Ct], A != null)) switch (Ct) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            de(o, b, Ct, A);
        }
        return o.push(">"), null;
      case "title":
        o.push(pe("title")), A = null;
        for (He in g) if (r.call(g, He) && (M = g[He], M != null)) switch (He) {
          case "children":
            A = M;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            de(o, b, He, M);
        }
        return o.push(">"), A;
      case "listing":
      case "pre":
        o.push(pe(c)), M = A = null;
        for (ae in g) if (r.call(g, ae) && (Z = g[ae], Z != null)) switch (ae) {
          case "children":
            A = Z;
            break;
          case "dangerouslySetInnerHTML":
            M = Z;
            break;
          default:
            de(o, b, ae, Z);
        }
        if (o.push(">"), M != null) {
          if (A != null) throw Error(t(60));
          if (typeof M != "object" || !("__html" in M)) throw Error(t(61));
          g = M.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? o.push(`
`, g) : o.push("" + g));
        }
        return typeof A == "string" && A[0] === `
` && o.push(`
`), A;
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
        o.push(pe(c));
        for (var _t in g) if (r.call(g, _t) && (A = g[_t], A != null)) switch (_t) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            de(o, b, _t, A);
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
        return Ee(
          o,
          g,
          c,
          b
        );
      case "html":
        return I.insertionMode === 0 && o.push("<!DOCTYPE html>"), Ee(o, g, c, b);
      default:
        if (c.indexOf("-") === -1 && typeof g.is != "string") return Ee(o, g, c, b);
        o.push(pe(c)), M = A = null;
        for (ce in g) if (r.call(g, ce) && (Z = g[ce], Z != null)) switch (ce) {
          case "children":
            A = Z;
            break;
          case "dangerouslySetInnerHTML":
            M = Z;
            break;
          case "style":
            C(o, b, Z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(ce) && typeof Z != "function" && typeof Z != "symbol" && o.push(" ", ce, '="', _(Z), '"');
        }
        return o.push(">"), ye(o, M, A), A;
    }
  }
  function Te(o, c, g) {
    if (o.push('<!--$?--><template id="'), g === null) throw Error(t(395));
    return o.push(g), o.push('"></template>');
  }
  function xe(o, c, g, b) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return o.push('<div hidden id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      case 2:
        return o.push('<svg aria-hidden="true" style="display:none" id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      case 3:
        return o.push('<math aria-hidden="true" style="display:none" id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      case 4:
        return o.push('<table hidden id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      case 5:
        return o.push('<table hidden><tbody id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      case 6:
        return o.push('<table hidden><tr id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      case 7:
        return o.push('<table hidden><colgroup id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      default:
        throw Error(t(397));
    }
  }
  function Ze(o, c) {
    switch (c.insertionMode) {
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
  var Ie = /[<\u2028\u2029]/g;
  function ke(o) {
    return JSON.stringify(o).replace(Ie, function(c) {
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
  function Me(o, c) {
    return c = c === void 0 ? "" : c, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: c + "P:", segmentPrefix: c + "S:", boundaryPrefix: c + "B:", idPrefix: c, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: o };
  }
  function qe(o, c, g, b) {
    return g.generateStaticMarkup ? (o.push(_(c)), !1) : (c === "" ? o = b : (b && o.push("<!-- -->"), o.push(_(c)), o = !0), o);
  }
  var Ge = Object.assign, j = Symbol.for("react.element"), E = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), T = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), le = Symbol.for("react.scope"), ee = Symbol.for("react.debug_trace_mode"), se = Symbol.for("react.legacy_hidden"), te = Symbol.for("react.default_value"), fe = Symbol.iterator;
  function Fe(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case L:
        return "Fragment";
      case E:
        return "Portal";
      case y:
        return "Profiler";
      case B:
        return "StrictMode";
      case K:
        return "Suspense";
      case Q:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case T:
        return (o.displayName || "Context") + ".Consumer";
      case Y:
        return (o._context.displayName || "Context") + ".Provider";
      case re:
        var c = o.render;
        return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case V:
        return c = o.displayName || null, c !== null ? c : Fe(o.type) || "Memo";
      case ne:
        c = o._payload, o = o._init;
        try {
          return Fe(o(c));
        } catch {
        }
    }
    return null;
  }
  var ue = {};
  function Xe(o, c) {
    if (o = o.contextTypes, !o) return ue;
    var g = {}, b;
    for (b in o) g[b] = c[b];
    return g;
  }
  var $e = null;
  function he(o, c) {
    if (o !== c) {
      o.context._currentValue2 = o.parentValue, o = o.parent;
      var g = c.parent;
      if (o === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        he(o, g);
      }
      c.context._currentValue2 = c.value;
    }
  }
  function W(o) {
    o.context._currentValue2 = o.parentValue, o = o.parent, o !== null && W(o);
  }
  function oe(o) {
    var c = o.parent;
    c !== null && oe(c), o.context._currentValue2 = o.value;
  }
  function tt(o, c) {
    if (o.context._currentValue2 = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === c.depth ? he(o, c) : tt(o, c);
  }
  function Je(o, c) {
    var g = c.parent;
    if (g === null) throw Error(t(402));
    o.depth === g.depth ? he(o, g) : Je(o, g), c.context._currentValue2 = c.value;
  }
  function _e(o) {
    var c = $e;
    c !== o && (c === null ? oe(o) : o === null ? W(c) : c.depth === o.depth ? he(c, o) : c.depth > o.depth ? tt(c, o) : Je(c, o), $e = o);
  }
  var cr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, c) {
    o = o._reactInternals, o.queue !== null && o.queue.push(c);
  }, enqueueReplaceState: function(o, c) {
    o = o._reactInternals, o.replace = !0, o.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function dr(o, c, g, b) {
    var I = o.state !== void 0 ? o.state : null;
    o.updater = cr, o.props = g, o.state = I;
    var A = { queue: [], replace: !1 };
    o._reactInternals = A;
    var M = c.contextType;
    if (o.context = typeof M == "object" && M !== null ? M._currentValue2 : b, M = c.getDerivedStateFromProps, typeof M == "function" && (M = M(g, I), I = M == null ? I : Ge({}, I, M), o.state = I), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (c = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), c !== o.state && cr.enqueueReplaceState(o, o.state, null), A.queue !== null && 0 < A.queue.length) if (c = A.queue, M = A.replace, A.queue = null, A.replace = !1, M && c.length === 1) o.state = c[0];
    else {
      for (A = M ? c[0] : o.state, I = !0, M = M ? 1 : 0; M < c.length; M++) {
        var Z = c[M];
        Z = typeof Z == "function" ? Z.call(o, A, g, b) : Z, Z != null && (I ? (I = !1, A = Ge({}, A, Z)) : Ge(A, Z));
      }
      o.state = A;
    }
    else A.queue = null;
  }
  var Tr = { id: 1, overflow: "" };
  function jt(o, c, g) {
    var b = o.id;
    o = o.overflow;
    var I = 32 - Mt(b) - 1;
    b &= ~(1 << I), g += 1;
    var A = 32 - Mt(c) + I;
    if (30 < A) {
      var M = I - I % 5;
      return A = (b & (1 << M) - 1).toString(32), b >>= M, I -= M, { id: 1 << 32 - Mt(c) + I | g << I | b, overflow: A + o };
    }
    return { id: 1 << A | g << I | b, overflow: o };
  }
  var Mt = Math.clz32 ? Math.clz32 : ft, Zt = Math.log, Xt = Math.LN2;
  function ft(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Zt(o) / Xt | 0) | 0;
  }
  function It(o, c) {
    return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
  }
  var fr = typeof Object.is == "function" ? Object.is : It, nt = null, pr = null, ut = null, Ae = null, Ft = !1, Ue = !1, ct = 0, vt = null, zt = 0;
  function pt() {
    if (nt === null) throw Error(t(321));
    return nt;
  }
  function hr() {
    if (0 < zt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Jt() {
    return Ae === null ? ut === null ? (Ft = !1, ut = Ae = hr()) : (Ft = !0, Ae = ut) : Ae.next === null ? (Ft = !1, Ae = Ae.next = hr()) : (Ft = !0, Ae = Ae.next), Ae;
  }
  function gr() {
    pr = nt = null, Ue = !1, ut = null, zt = 0, Ae = vt = null;
  }
  function Dt(o, c) {
    return typeof c == "function" ? c(o) : c;
  }
  function Kt(o, c, g) {
    if (nt = pt(), Ae = Jt(), Ft) {
      var b = Ae.queue;
      if (c = b.dispatch, vt !== null && (g = vt.get(b), g !== void 0)) {
        vt.delete(b), b = Ae.memoizedState;
        do
          b = o(b, g.action), g = g.next;
        while (g !== null);
        return Ae.memoizedState = b, [b, c];
      }
      return [Ae.memoizedState, c];
    }
    return o = o === Dt ? typeof c == "function" ? c() : c : g !== void 0 ? g(c) : c, Ae.memoizedState = o, o = Ae.queue = { last: null, dispatch: null }, o = o.dispatch = xt.bind(null, nt, o), [Ae.memoizedState, o];
  }
  function Ar(o, c) {
    if (nt = pt(), Ae = Jt(), c = c === void 0 ? null : c, Ae !== null) {
      var g = Ae.memoizedState;
      if (g !== null && c !== null) {
        var b = g[1];
        e: if (b === null) b = !1;
        else {
          for (var I = 0; I < b.length && I < c.length; I++) if (!fr(c[I], b[I])) {
            b = !1;
            break e;
          }
          b = !0;
        }
        if (b) return g[0];
      }
    }
    return o = o(), Ae.memoizedState = [o, c], o;
  }
  function xt(o, c, g) {
    if (25 <= zt) throw Error(t(301));
    if (o === nt) if (Ue = !0, o = { action: g, next: null }, vt === null && (vt = /* @__PURE__ */ new Map()), g = vt.get(c), g === void 0) vt.set(c, o);
    else {
      for (c = g; c.next !== null; ) c = c.next;
      c.next = o;
    }
  }
  function Qt() {
    throw Error(t(394));
  }
  function $t() {
  }
  var mr = { readContext: function(o) {
    return o._currentValue2;
  }, useContext: function(o) {
    return pt(), o._currentValue2;
  }, useMemo: Ar, useReducer: Kt, useRef: function(o) {
    nt = pt(), Ae = Jt();
    var c = Ae.memoizedState;
    return c === null ? (o = { current: o }, Ae.memoizedState = o) : c;
  }, useState: function(o) {
    return Kt(Dt, o);
  }, useInsertionEffect: $t, useLayoutEffect: function() {
  }, useCallback: function(o, c) {
    return Ar(function() {
      return o;
    }, c);
  }, useImperativeHandle: $t, useEffect: $t, useDebugValue: $t, useDeferredValue: function(o) {
    return pt(), o;
  }, useTransition: function() {
    return pt(), [
      !1,
      Qt
    ];
  }, useId: function() {
    var o = pr.treeContext, c = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Mt(o) - 1)).toString(32) + c;
    var g = Nt;
    if (g === null) throw Error(t(404));
    return c = ct++, o = ":" + g.idPrefix + "R" + o, 0 < c && (o += "H" + c.toString(32)), o + ":";
  }, useMutableSource: function(o, c) {
    return pt(), c(o._source);
  }, useSyncExternalStore: function(o, c, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, Nt = null, St = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ht(o) {
    return console.error(o), null;
  }
  function Pt() {
  }
  function Rr(o, c, g, b, I, A, M, Z, ae) {
    var ce = [], ge = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: b, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ge, pingedTasks: ce, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: I === void 0 ? ht : I, onAllReady: Pt, onShellReady: M === void 0 ? Pt : M, onShellError: Pt, onFatalError: Pt }, g = Ut(c, 0, null, g, !1, !1), g.parentFlushed = !0, o = er(c, o, null, g, ge, ue, null, Tr), ce.push(o), c;
  }
  function er(o, c, g, b, I, A, M, Z) {
    o.allPendingTasks++, g === null ? o.pendingRootTasks++ : g.pendingTasks++;
    var ae = { node: c, ping: function() {
      var ce = o.pingedTasks;
      ce.push(ae), ce.length === 1 && cn(o);
    }, blockedBoundary: g, blockedSegment: b, abortSet: I, legacyContext: A, context: M, treeContext: Z };
    return I.add(ae), ae;
  }
  function Ut(o, c, g, b, I, A) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: b, boundary: g, lastPushedText: I, textEmbedded: A };
  }
  function Bt(o, c) {
    if (o = o.onError(c), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function x(o, c) {
    var g = o.onShellError;
    g(c), g = o.onFatalError, g(c), o.destination !== null ? (o.status = 2, o.destination.destroy(c)) : (o.status = 1, o.fatalError = c);
  }
  function J(o, c, g, b, I) {
    for (nt = {}, pr = c, ct = 0, o = g(b, I); Ue; ) Ue = !1, ct = 0, zt += 1, Ae = null, o = g(b, I);
    return gr(), o;
  }
  function H(o, c, g, b) {
    var I = g.render(), A = b.childContextTypes;
    if (A != null) {
      var M = c.legacyContext;
      if (typeof g.getChildContext != "function") b = M;
      else {
        g = g.getChildContext();
        for (var Z in g) if (!(Z in A)) throw Error(t(108, Fe(b) || "Unknown", Z));
        b = Ge({}, M, g);
      }
      c.legacyContext = b, Ne(o, c, I), c.legacyContext = M;
    } else Ne(o, c, I);
  }
  function Se(o, c) {
    if (o && o.defaultProps) {
      c = Ge({}, c), o = o.defaultProps;
      for (var g in o) c[g] === void 0 && (c[g] = o[g]);
      return c;
    }
    return c;
  }
  function je(o, c, g, b, I) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      I = Xe(g, c.legacyContext);
      var A = g.contextType;
      A = new g(b, typeof A == "object" && A !== null ? A._currentValue2 : I), dr(A, g, b, I), H(o, c, A, g);
    } else {
      A = Xe(g, c.legacyContext), I = J(o, c, g, b, A);
      var M = ct !== 0;
      if (typeof I == "object" && I !== null && typeof I.render == "function" && I.$$typeof === void 0) dr(I, g, b, A), H(o, c, I, g);
      else if (M) {
        b = c.treeContext, c.treeContext = jt(b, 1, 0);
        try {
          Ne(o, c, I);
        } finally {
          c.treeContext = b;
        }
      } else Ne(o, c, I);
    }
    else if (typeof g == "string") {
      switch (I = c.blockedSegment, A = we(I.chunks, g, b, o.responseState, I.formatContext), I.lastPushedText = !1, M = I.formatContext, I.formatContext = G(M, g, b), dt(o, c, A), I.formatContext = M, g) {
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
          I.chunks.push("</", g, ">");
      }
      I.lastPushedText = !1;
    } else {
      switch (g) {
        case se:
        case ee:
        case B:
        case y:
        case L:
          Ne(o, c, b.children);
          return;
        case Q:
          Ne(o, c, b.children);
          return;
        case le:
          throw Error(t(343));
        case K:
          e: {
            g = c.blockedBoundary, I = c.blockedSegment, A = b.fallback, b = b.children, M = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: M, errorDigest: null }, ae = Ut(o, I.chunks.length, Z, I.formatContext, !1, !1);
            I.children.push(ae), I.lastPushedText = !1;
            var ce = Ut(o, 0, null, I.formatContext, !1, !1);
            ce.parentFlushed = !0, c.blockedBoundary = Z, c.blockedSegment = ce;
            try {
              if (dt(
                o,
                c,
                b
              ), o.responseState.generateStaticMarkup || ce.lastPushedText && ce.textEmbedded && ce.chunks.push("<!-- -->"), ce.status = 1, kt(Z, ce), Z.pendingTasks === 0) break e;
            } catch (ge) {
              ce.status = 4, Z.forceClientRender = !0, Z.errorDigest = Bt(o, ge);
            } finally {
              c.blockedBoundary = g, c.blockedSegment = I;
            }
            c = er(o, A, g, ae, M, c.legacyContext, c.context, c.treeContext), o.pingedTasks.push(c);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case re:
          if (b = J(o, c, g.render, b, I), ct !== 0) {
            g = c.treeContext, c.treeContext = jt(g, 1, 0);
            try {
              Ne(o, c, b);
            } finally {
              c.treeContext = g;
            }
          } else Ne(o, c, b);
          return;
        case V:
          g = g.type, b = Se(g, b), je(o, c, g, b, I);
          return;
        case Y:
          if (I = b.children, g = g._context, b = b.value, A = g._currentValue2, g._currentValue2 = b, M = $e, $e = b = { parent: M, depth: M === null ? 0 : M.depth + 1, context: g, parentValue: A, value: b }, c.context = b, Ne(o, c, I), o = $e, o === null) throw Error(t(403));
          b = o.parentValue, o.context._currentValue2 = b === te ? o.context._defaultValue : b, o = $e = o.parent, c.context = o;
          return;
        case T:
          b = b.children, b = b(g._currentValue2), Ne(o, c, b);
          return;
        case ne:
          I = g._init, g = I(g._payload), b = Se(g, b), je(
            o,
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
  function Ne(o, c, g) {
    if (c.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case j:
          je(o, c, g.type, g.props, g.ref);
          return;
        case E:
          throw Error(t(257));
        case ne:
          var b = g._init;
          g = b(g._payload), Ne(o, c, g);
          return;
      }
      if (F(g)) {
        We(o, c, g);
        return;
      }
      if (g === null || typeof g != "object" ? b = null : (b = fe && g[fe] || g["@@iterator"], b = typeof b == "function" ? b : null), b && (b = b.call(g))) {
        if (g = b.next(), !g.done) {
          var I = [];
          do
            I.push(g.value), g = b.next();
          while (!g.done);
          We(o, c, I);
        }
        return;
      }
      throw o = Object.prototype.toString.call(g), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : o));
    }
    typeof g == "string" ? (b = c.blockedSegment, b.lastPushedText = qe(c.blockedSegment.chunks, g, o.responseState, b.lastPushedText)) : typeof g == "number" && (b = c.blockedSegment, b.lastPushedText = qe(c.blockedSegment.chunks, "" + g, o.responseState, b.lastPushedText));
  }
  function We(o, c, g) {
    for (var b = g.length, I = 0; I < b; I++) {
      var A = c.treeContext;
      c.treeContext = jt(A, b, I);
      try {
        dt(o, c, g[I]);
      } finally {
        c.treeContext = A;
      }
    }
  }
  function dt(o, c, g) {
    var b = c.blockedSegment.formatContext, I = c.legacyContext, A = c.context;
    try {
      return Ne(o, c, g);
    } catch (ae) {
      if (gr(), typeof ae == "object" && ae !== null && typeof ae.then == "function") {
        g = ae;
        var M = c.blockedSegment, Z = Ut(o, M.chunks.length, null, M.formatContext, M.lastPushedText, !0);
        M.children.push(Z), M.lastPushedText = !1, o = er(o, c.node, c.blockedBoundary, Z, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, g.then(o, o), c.blockedSegment.formatContext = b, c.legacyContext = I, c.context = A, _e(A);
      } else throw c.blockedSegment.formatContext = b, c.legacyContext = I, c.context = A, _e(A), ae;
    }
  }
  function ot(o) {
    var c = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, tr(this, c, o);
  }
  function Ke(o, c, g) {
    var b = o.blockedBoundary;
    o.blockedSegment.status = 3, b === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.push(null))) : (b.pendingTasks--, b.forceClientRender || (b.forceClientRender = !0, o = g === void 0 ? Error(t(432)) : g, b.errorDigest = c.onError(o), b.parentFlushed && c.clientRenderedBoundaries.push(b)), b.fallbackAbortableTasks.forEach(function(I) {
      return Ke(I, c, g);
    }), b.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (b = c.onAllReady, b()));
  }
  function kt(o, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var g = c.children[0];
      g.id = c.id, g.parentFlushed = !0, g.status === 1 && kt(o, g);
    } else o.completedSegments.push(c);
  }
  function tr(o, c, g) {
    if (c === null) {
      if (g.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = g;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = Pt, c = o.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && kt(c, g), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(ot, o), c.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (kt(c, g), c.completedSegments.length === 1 && c.parentFlushed && o.partialBoundaries.push(c)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function cn(o) {
    if (o.status !== 2) {
      var c = $e, g = St.current;
      St.current = mr;
      var b = Nt;
      Nt = o.responseState;
      try {
        var I = o.pingedTasks, A;
        for (A = 0; A < I.length; A++) {
          var M = I[A], Z = o, ae = M.blockedSegment;
          if (ae.status === 0) {
            _e(M.context);
            try {
              Ne(Z, M, M.node), Z.responseState.generateStaticMarkup || ae.lastPushedText && ae.textEmbedded && ae.chunks.push("<!-- -->"), M.abortSet.delete(M), ae.status = 1, tr(Z, M.blockedBoundary, ae);
            } catch (gt) {
              if (gr(), typeof gt == "object" && gt !== null && typeof gt.then == "function") {
                var ce = M.ping;
                gt.then(ce, ce);
              } else {
                M.abortSet.delete(M), ae.status = 4;
                var ge = M.blockedBoundary, He = gt, Ct = Bt(Z, He);
                if (ge === null ? x(Z, He) : (ge.pendingTasks--, ge.forceClientRender || (ge.forceClientRender = !0, ge.errorDigest = Ct, ge.parentFlushed && Z.clientRenderedBoundaries.push(ge))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var _t = Z.onAllReady;
                  _t();
                }
              }
            } finally {
            }
          }
        }
        I.splice(0, A), o.destination !== null && Or(o, o.destination);
      } catch (gt) {
        Bt(o, gt), x(o, gt);
      } finally {
        Nt = b, St.current = g, g === mr && _e(c);
      }
    }
  }
  function yr(o, c, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var b = g.id = o.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, o = o.responseState, c.push('<template id="'), c.push(o.placeholderPrefix), o = b.toString(16), c.push(o), c.push('"></template>');
      case 1:
        g.status = 2;
        var I = !0;
        b = g.chunks;
        var A = 0;
        g = g.children;
        for (var M = 0; M < g.length; M++) {
          for (I = g[M]; A < I.index; A++) c.push(b[A]);
          I = vr(o, c, I);
        }
        for (; A < b.length - 1; A++) c.push(b[A]);
        return A < b.length && (I = c.push(b[A])), I;
      default:
        throw Error(t(390));
    }
  }
  function vr(o, c, g) {
    var b = g.boundary;
    if (b === null) return yr(o, c, g);
    if (b.parentFlushed = !0, b.forceClientRender) return o.responseState.generateStaticMarkup || (b = b.errorDigest, c.push("<!--$!-->"), c.push("<template"), b && (c.push(' data-dgst="'), b = _(b), c.push(b), c.push('"')), c.push("></template>")), yr(o, c, g), o = o.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), o;
    if (0 < b.pendingTasks) {
      b.rootSegmentID = o.nextSegmentId++, 0 < b.completedSegments.length && o.partialBoundaries.push(b);
      var I = o.responseState, A = I.nextSuspenseID++;
      return I = I.boundaryPrefix + A.toString(16), b = b.id = I, Te(c, o.responseState, b), yr(o, c, g), c.push("<!--/$-->");
    }
    if (b.byteSize > o.progressiveChunkSize) return b.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(b), Te(c, o.responseState, b.id), yr(o, c, g), c.push("<!--/$-->");
    if (o.responseState.generateStaticMarkup || c.push("<!--$-->"), g = b.completedSegments, g.length !== 1) throw Error(t(391));
    return vr(o, c, g[0]), o = o.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), o;
  }
  function Br(o, c, g) {
    return xe(c, o.responseState, g.formatContext, g.id), vr(o, c, g), Ze(c, g.formatContext);
  }
  function Wr(o, c, g) {
    for (var b = g.completedSegments, I = 0; I < b.length; I++) Hr(o, c, g, b[I]);
    if (b.length = 0, o = o.responseState, b = g.id, g = g.rootSegmentID, c.push(o.startInlineScript), o.sentCompleteBoundaryFunction ? c.push('$RC("') : (o.sentCompleteBoundaryFunction = !0, c.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), b === null) throw Error(t(395));
    return g = g.toString(16), c.push(b), c.push('","'), c.push(o.segmentPrefix), c.push(g), c.push('")<\/script>');
  }
  function Hr(o, c, g, b) {
    if (b.status === 2) return !0;
    var I = b.id;
    if (I === -1) {
      if ((b.id = g.rootSegmentID) === -1) throw Error(t(392));
      return Br(o, c, b);
    }
    return Br(o, c, b), o = o.responseState, c.push(o.startInlineScript), o.sentCompleteSegmentFunction ? c.push('$RS("') : (o.sentCompleteSegmentFunction = !0, c.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), c.push(o.segmentPrefix), I = I.toString(16), c.push(I), c.push('","'), c.push(o.placeholderPrefix), c.push(I), c.push('")<\/script>');
  }
  function Or(o, c) {
    try {
      var g = o.completedRootSegment;
      if (g !== null && o.pendingRootTasks === 0) {
        vr(o, c, g), o.completedRootSegment = null;
        var b = o.responseState.bootstrapChunks;
        for (g = 0; g < b.length - 1; g++) c.push(b[g]);
        g < b.length && c.push(b[g]);
      }
      var I = o.clientRenderedBoundaries, A;
      for (A = 0; A < I.length; A++) {
        var M = I[A];
        b = c;
        var Z = o.responseState, ae = M.id, ce = M.errorDigest, ge = M.errorMessage, He = M.errorComponentStack;
        if (b.push(Z.startInlineScript), Z.sentClientRenderFunction ? b.push('$RX("') : (Z.sentClientRenderFunction = !0, b.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ae === null) throw Error(t(395));
        if (b.push(ae), b.push('"'), ce || ge || He) {
          b.push(",");
          var Ct = ke(ce || "");
          b.push(Ct);
        }
        if (ge || He) {
          b.push(",");
          var _t = ke(ge || "");
          b.push(_t);
        }
        if (He) {
          b.push(",");
          var gt = ke(He);
          b.push(gt);
        }
        if (!b.push(")<\/script>")) {
          o.destination = null, A++, I.splice(0, A);
          return;
        }
      }
      I.splice(0, A);
      var br = o.completedBoundaries;
      for (A = 0; A < br.length; A++) if (!Wr(o, c, br[A])) {
        o.destination = null, A++, br.splice(0, A);
        return;
      }
      br.splice(0, A);
      var Wt = o.partialBoundaries;
      for (A = 0; A < Wt.length; A++) {
        var qr = Wt[A];
        e: {
          I = o, M = c;
          var wr = qr.completedSegments;
          for (Z = 0; Z < wr.length; Z++) if (!Hr(I, M, qr, wr[Z])) {
            Z++, wr.splice(0, Z);
            var pn = !1;
            break e;
          }
          wr.splice(0, Z), pn = !0;
        }
        if (!pn) {
          o.destination = null, A++, Wt.splice(0, A);
          return;
        }
      }
      Wt.splice(0, A);
      var rr = o.completedBoundaries;
      for (A = 0; A < rr.length; A++) if (!Wr(o, c, rr[A])) {
        o.destination = null, A++, rr.splice(0, A);
        return;
      }
      rr.splice(0, A);
    } finally {
      o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && c.push(null);
    }
  }
  function dn(o, c) {
    try {
      var g = o.abortableTasks;
      g.forEach(function(b) {
        return Ke(b, o, c);
      }), g.clear(), o.destination !== null && Or(o, o.destination);
    } catch (b) {
      Bt(o, b), x(o, b);
    }
  }
  function fn() {
  }
  function Vr(o, c, g, b) {
    var I = !1, A = null, M = "", Z = { push: function(ce) {
      return ce !== null && (M += ce), !0;
    }, destroy: function(ce) {
      I = !0, A = ce;
    } }, ae = !1;
    if (o = Rr(o, Me(g, c ? c.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, fn, void 0, function() {
      ae = !0;
    }), cn(o), dn(o, b), o.status === 1) o.status = 2, Z.destroy(o.fatalError);
    else if (o.status !== 2 && o.destination === null) {
      o.destination = Z;
      try {
        Or(o, Z);
      } catch (ce) {
        Bt(o, ce), x(o, ce);
      }
    }
    if (I) throw A;
    if (!ae) throw Error(t(426));
    return M;
  }
  return kr.renderToNodeStream = function() {
    throw Error(t(207));
  }, kr.renderToStaticMarkup = function(o, c) {
    return Vr(o, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, kr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, kr.renderToString = function(o, c) {
    return Vr(o, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, kr.version = "18.3.1", kr;
}
var Rn = {}, Da;
function zl() {
  if (Da) return Rn;
  Da = 1;
  var e = et;
  function t(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, h = 1; h < arguments.length; h++) u += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function i(a, u) {
    if (u.length !== 0) if (512 < u.length) 0 < n && (a.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), a.enqueue(u);
    else {
      var h = r.length - n;
      h < u.length && (h === 0 ? a.enqueue(r) : (r.set(u.subarray(0, h), n), a.enqueue(r), u = u.subarray(h)), r = new Uint8Array(512), n = 0), r.set(u, n), n += u.length;
    }
  }
  function s(a, u) {
    return i(a, u), !0;
  }
  function d(a) {
    r && 0 < n && (a.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var m = new TextEncoder();
  function p(a) {
    return m.encode(a);
  }
  function f(a) {
    return m.encode(a);
  }
  function k(a, u) {
    typeof a.error == "function" ? a.error(u) : a.close();
  }
  var S = Object.prototype.hasOwnProperty, P = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, _ = {};
  function w(a) {
    return S.call(_, a) ? !0 : S.call($, a) ? !1 : P.test(a) ? _[a] = !0 : ($[a] = !0, !1);
  }
  function N(a, u, h, v, O, R, z) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = v, this.attributeNamespace = O, this.mustUseProperty = h, this.propertyName = a, this.type = u, this.sanitizeURL = R, this.removeEmptyString = z;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    F[a] = new N(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    F[u] = new N(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    F[a] = new N(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    F[a] = new N(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    F[a] = new N(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    F[a] = new N(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    F[a] = new N(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    F[a] = new N(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    F[a] = new N(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var U = /[\-:]([a-z])/g;
  function G(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      U,
      G
    );
    F[u] = new N(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(U, G);
    F[u] = new N(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(U, G);
    F[u] = new N(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    F[a] = new N(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    F[a] = new N(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
  }, C = ["Webkit", "ms", "Moz", "O"];
  Object.keys(X).forEach(function(a) {
    C.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), X[u] = X[a];
    });
  });
  var de = /["'&<>]/;
  function ye(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = de.exec(a);
    if (u) {
      var h = "", v, O = 0;
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
        O !== v && (h += a.substring(O, v)), O = v + 1, h += u;
      }
      a = O !== v ? h + a.substring(O, v) : h;
    }
    return a;
  }
  var Ce = /([A-Z])/g, Ee = /^ms-/, De = Array.isArray, Ye = f("<script>"), pe = f("<\/script>"), we = f('<script src="'), Te = f('<script type="module" src="'), xe = f('" async=""><\/script>'), Ze = /(<\/|<)(s)(cript)/gi;
  function Ie(a, u, h, v) {
    return "" + u + (h === "s" ? "\\u0073" : "\\u0053") + v;
  }
  function ke(a, u, h, v, O) {
    a = a === void 0 ? "" : a, u = u === void 0 ? Ye : f('<script nonce="' + ye(u) + '">');
    var R = [];
    if (h !== void 0 && R.push(u, p(("" + h).replace(Ze, Ie)), pe), v !== void 0) for (h = 0; h < v.length; h++) R.push(we, p(ye(v[h])), xe);
    if (O !== void 0) for (v = 0; v < O.length; v++) R.push(Te, p(ye(O[v])), xe);
    return { bootstrapChunks: R, startInlineScript: u, placeholderPrefix: f(a + "P:"), segmentPrefix: f(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Me(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function qe(a) {
    return Me(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Ge(a, u, h) {
    switch (u) {
      case "select":
        return Me(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return Me(2, null);
      case "math":
        return Me(3, null);
      case "foreignObject":
        return Me(1, null);
      case "table":
        return Me(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Me(5, null);
      case "colgroup":
        return Me(7, null);
      case "tr":
        return Me(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? Me(1, null) : a;
  }
  var j = f("<!-- -->");
  function E(a, u, h, v) {
    return u === "" ? v : (v && a.push(j), a.push(p(ye(u))), !0);
  }
  var L = /* @__PURE__ */ new Map(), B = f(' style="'), y = f(":"), Y = f(";");
  function T(a, u, h) {
    if (typeof h != "object") throw Error(t(62));
    u = !0;
    for (var v in h) if (S.call(h, v)) {
      var O = h[v];
      if (O != null && typeof O != "boolean" && O !== "") {
        if (v.indexOf("--") === 0) {
          var R = p(ye(v));
          O = p(ye(("" + O).trim()));
        } else {
          R = v;
          var z = L.get(R);
          z !== void 0 || (z = f(ye(R.replace(Ce, "-$1").toLowerCase().replace(Ee, "-ms-"))), L.set(R, z)), R = z, O = typeof O == "number" ? O === 0 || S.call(X, v) ? p("" + O) : p(O + "px") : p(ye(("" + O).trim()));
        }
        u ? (u = !1, a.push(B, R, y, O)) : a.push(Y, R, y, O);
      }
    }
    u || a.push(Q);
  }
  var re = f(" "), K = f('="'), Q = f('"'), V = f('=""');
  function ne(a, u, h, v) {
    switch (h) {
      case "style":
        T(a, u, v);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (u = F.hasOwnProperty(h) ? F[h] : null, u !== null) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (h = p(u.attributeName), u.type) {
          case 3:
            v && a.push(re, h, V);
            break;
          case 4:
            v === !0 ? a.push(re, h, V) : v !== !1 && a.push(re, h, K, p(ye(v)), Q);
            break;
          case 5:
            isNaN(v) || a.push(re, h, K, p(ye(v)), Q);
            break;
          case 6:
            !isNaN(v) && 1 <= v && a.push(re, h, K, p(ye(v)), Q);
            break;
          default:
            u.sanitizeURL && (v = "" + v), a.push(re, h, K, p(ye(v)), Q);
        }
      } else if (w(h)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = h.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        a.push(re, p(h), K, p(ye(v)), Q);
      }
    }
  }
  var le = f(">"), ee = f("/>");
  function se(a, u, h) {
    if (u != null) {
      if (h != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && a.push(p("" + u));
    }
  }
  function te(a) {
    var u = "";
    return e.Children.forEach(a, function(h) {
      h != null && (u += h);
    }), u;
  }
  var fe = f(' selected=""');
  function Fe(a, u, h, v) {
    a.push(he(h));
    var O = h = null, R;
    for (R in u) if (S.call(u, R)) {
      var z = u[R];
      if (z != null) switch (R) {
        case "children":
          h = z;
          break;
        case "dangerouslySetInnerHTML":
          O = z;
          break;
        default:
          ne(a, v, R, z);
      }
    }
    return a.push(le), se(a, O, h), typeof h == "string" ? (a.push(p(ye(h))), null) : h;
  }
  var ue = f(`
`), Xe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, $e = /* @__PURE__ */ new Map();
  function he(a) {
    var u = $e.get(a);
    if (u === void 0) {
      if (!Xe.test(a)) throw Error(t(65, a));
      u = f("<" + a), $e.set(a, u);
    }
    return u;
  }
  var W = f("<!DOCTYPE html>");
  function oe(a, u, h, v, O) {
    switch (u) {
      case "select":
        a.push(he("select"));
        var R = null, z = null;
        for (me in h) if (S.call(h, me)) {
          var q = h[me];
          if (q != null) switch (me) {
            case "children":
              R = q;
              break;
            case "dangerouslySetInnerHTML":
              z = q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(a, v, me, q);
          }
        }
        return a.push(le), se(a, z, R), R;
      case "option":
        z = O.selectedValue, a.push(he("option"));
        var ie = q = null, be = null, me = null;
        for (R in h) if (S.call(h, R)) {
          var Be = h[R];
          if (Be != null) switch (R) {
            case "children":
              q = Be;
              break;
            case "selected":
              be = Be;
              break;
            case "dangerouslySetInnerHTML":
              me = Be;
              break;
            case "value":
              ie = Be;
            default:
              ne(a, v, R, Be);
          }
        }
        if (z != null) if (h = ie !== null ? "" + ie : te(q), De(z)) {
          for (v = 0; v < z.length; v++)
            if ("" + z[v] === h) {
              a.push(fe);
              break;
            }
        } else "" + z === h && a.push(fe);
        else be && a.push(fe);
        return a.push(le), se(a, me, q), q;
      case "textarea":
        a.push(he("textarea")), me = z = R = null;
        for (q in h) if (S.call(h, q) && (ie = h[q], ie != null)) switch (q) {
          case "children":
            me = ie;
            break;
          case "value":
            R = ie;
            break;
          case "defaultValue":
            z = ie;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(a, v, q, ie);
        }
        if (R === null && z !== null && (R = z), a.push(le), me != null) {
          if (R != null) throw Error(t(92));
          if (De(me) && 1 < me.length) throw Error(t(93));
          R = "" + me;
        }
        return typeof R == "string" && R[0] === `
` && a.push(ue), R !== null && a.push(p(ye("" + R))), null;
      case "input":
        a.push(he("input")), ie = me = q = R = null;
        for (z in h) if (S.call(h, z) && (be = h[z], be != null)) switch (z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ie = be;
            break;
          case "defaultValue":
            q = be;
            break;
          case "checked":
            me = be;
            break;
          case "value":
            R = be;
            break;
          default:
            ne(a, v, z, be);
        }
        return me !== null ? ne(
          a,
          v,
          "checked",
          me
        ) : ie !== null && ne(a, v, "checked", ie), R !== null ? ne(a, v, "value", R) : q !== null && ne(a, v, "value", q), a.push(ee), null;
      case "menuitem":
        a.push(he("menuitem"));
        for (var yt in h) if (S.call(h, yt) && (R = h[yt], R != null)) switch (yt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(a, v, yt, R);
        }
        return a.push(le), null;
      case "title":
        a.push(he("title")), R = null;
        for (Be in h) if (S.call(h, Be) && (z = h[Be], z != null)) switch (Be) {
          case "children":
            R = z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(a, v, Be, z);
        }
        return a.push(le), R;
      case "listing":
      case "pre":
        a.push(he(u)), z = R = null;
        for (ie in h) if (S.call(h, ie) && (q = h[ie], q != null)) switch (ie) {
          case "children":
            R = q;
            break;
          case "dangerouslySetInnerHTML":
            z = q;
            break;
          default:
            ne(a, v, ie, q);
        }
        if (a.push(le), z != null) {
          if (R != null) throw Error(t(60));
          if (typeof z != "object" || !("__html" in z)) throw Error(t(61));
          h = z.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? a.push(ue, p(h)) : a.push(p("" + h)));
        }
        return typeof R == "string" && R[0] === `
` && a.push(ue), R;
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
        a.push(he(u));
        for (var Tt in h) if (S.call(h, Tt) && (R = h[Tt], R != null)) switch (Tt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ne(a, v, Tt, R);
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
        return Fe(a, h, u, v);
      case "html":
        return O.insertionMode === 0 && a.push(W), Fe(a, h, u, v);
      default:
        if (u.indexOf("-") === -1 && typeof h.is != "string") return Fe(a, h, u, v);
        a.push(he(u)), z = R = null;
        for (be in h) if (S.call(h, be) && (q = h[be], q != null)) switch (be) {
          case "children":
            R = q;
            break;
          case "dangerouslySetInnerHTML":
            z = q;
            break;
          case "style":
            T(a, v, q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            w(be) && typeof q != "function" && typeof q != "symbol" && a.push(re, p(be), K, p(ye(q)), Q);
        }
        return a.push(le), se(a, z, R), R;
    }
  }
  var tt = f("</"), Je = f(">"), _e = f('<template id="'), cr = f('"></template>'), dr = f("<!--$-->"), Tr = f('<!--$?--><template id="'), jt = f('"></template>'), Mt = f("<!--$!-->"), Zt = f("<!--/$-->"), Xt = f("<template"), ft = f('"'), It = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var fr = f("></template>");
  function nt(a, u, h) {
    if (i(a, Tr), h === null) throw Error(t(395));
    return i(a, h), s(a, jt);
  }
  var pr = f('<div hidden id="'), ut = f('">'), Ae = f("</div>"), Ft = f('<svg aria-hidden="true" style="display:none" id="'), Ue = f('">'), ct = f("</svg>"), vt = f('<math aria-hidden="true" style="display:none" id="'), zt = f('">'), pt = f("</math>"), hr = f('<table hidden id="'), Jt = f('">'), gr = f("</table>"), Dt = f('<table hidden><tbody id="'), Kt = f('">'), Ar = f("</tbody></table>"), xt = f('<table hidden><tr id="'), Qt = f('">'), $t = f("</tr></table>"), mr = f('<table hidden><colgroup id="'), Nt = f('">'), St = f("</colgroup></table>");
  function ht(a, u, h, v) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return i(a, pr), i(a, u.segmentPrefix), i(a, p(v.toString(16))), s(a, ut);
      case 2:
        return i(a, Ft), i(a, u.segmentPrefix), i(a, p(v.toString(16))), s(a, Ue);
      case 3:
        return i(a, vt), i(a, u.segmentPrefix), i(a, p(v.toString(16))), s(a, zt);
      case 4:
        return i(a, hr), i(a, u.segmentPrefix), i(a, p(v.toString(16))), s(a, Jt);
      case 5:
        return i(a, Dt), i(a, u.segmentPrefix), i(a, p(v.toString(16))), s(a, Kt);
      case 6:
        return i(a, xt), i(a, u.segmentPrefix), i(a, p(v.toString(16))), s(a, Qt);
      case 7:
        return i(
          a,
          mr
        ), i(a, u.segmentPrefix), i(a, p(v.toString(16))), s(a, Nt);
      default:
        throw Error(t(397));
    }
  }
  function Pt(a, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return s(a, Ae);
      case 2:
        return s(a, ct);
      case 3:
        return s(a, pt);
      case 4:
        return s(a, gr);
      case 5:
        return s(a, Ar);
      case 6:
        return s(a, $t);
      case 7:
        return s(a, St);
      default:
        throw Error(t(397));
    }
  }
  var Rr = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), er = f('$RS("'), Ut = f('","'), Bt = f('")<\/script>'), x = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), J = f('$RC("'), H = f('","'), Se = f('")<\/script>'), je = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ne = f('$RX("'), We = f('"'), dt = f(")<\/script>"), ot = f(","), Ke = /[<\u2028\u2029]/g;
  function kt(a) {
    return JSON.stringify(a).replace(Ke, function(u) {
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
  var tr = Object.assign, cn = Symbol.for("react.element"), yr = Symbol.for("react.portal"), vr = Symbol.for("react.fragment"), Br = Symbol.for("react.strict_mode"), Wr = Symbol.for("react.profiler"), Hr = Symbol.for("react.provider"), Or = Symbol.for("react.context"), dn = Symbol.for("react.forward_ref"), fn = Symbol.for("react.suspense"), Vr = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), b = Symbol.for("react.debug_trace_mode"), I = Symbol.for("react.legacy_hidden"), A = Symbol.for("react.default_value"), M = Symbol.iterator;
  function Z(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case vr:
        return "Fragment";
      case yr:
        return "Portal";
      case Wr:
        return "Profiler";
      case Br:
        return "StrictMode";
      case fn:
        return "Suspense";
      case Vr:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Or:
        return (a.displayName || "Context") + ".Consumer";
      case Hr:
        return (a._context.displayName || "Context") + ".Provider";
      case dn:
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case o:
        return u = a.displayName || null, u !== null ? u : Z(a.type) || "Memo";
      case c:
        u = a._payload, a = a._init;
        try {
          return Z(a(u));
        } catch {
        }
    }
    return null;
  }
  var ae = {};
  function ce(a, u) {
    if (a = a.contextTypes, !a) return ae;
    var h = {}, v;
    for (v in a) h[v] = u[v];
    return h;
  }
  var ge = null;
  function He(a, u) {
    if (a !== u) {
      a.context._currentValue = a.parentValue, a = a.parent;
      var h = u.parent;
      if (a === null) {
        if (h !== null) throw Error(t(401));
      } else {
        if (h === null) throw Error(t(401));
        He(a, h);
      }
      u.context._currentValue = u.value;
    }
  }
  function Ct(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && Ct(a);
  }
  function _t(a) {
    var u = a.parent;
    u !== null && _t(u), a.context._currentValue = a.value;
  }
  function gt(a, u) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === u.depth ? He(a, u) : gt(a, u);
  }
  function br(a, u) {
    var h = u.parent;
    if (h === null) throw Error(t(402));
    a.depth === h.depth ? He(a, h) : br(a, h), u.context._currentValue = u.value;
  }
  function Wt(a) {
    var u = ge;
    u !== a && (u === null ? _t(a) : a === null ? Ct(u) : u.depth === a.depth ? He(u, a) : u.depth > a.depth ? gt(u, a) : br(u, a), ge = a);
  }
  var qr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function wr(a, u, h, v) {
    var O = a.state !== void 0 ? a.state : null;
    a.updater = qr, a.props = h, a.state = O;
    var R = { queue: [], replace: !1 };
    a._reactInternals = R;
    var z = u.contextType;
    if (a.context = typeof z == "object" && z !== null ? z._currentValue : v, z = u.getDerivedStateFromProps, typeof z == "function" && (z = z(h, O), O = z == null ? O : tr({}, O, z), a.state = O), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && qr.enqueueReplaceState(a, a.state, null), R.queue !== null && 0 < R.queue.length) if (u = R.queue, z = R.replace, R.queue = null, R.replace = !1, z && u.length === 1) a.state = u[0];
    else {
      for (R = z ? u[0] : a.state, O = !0, z = z ? 1 : 0; z < u.length; z++) {
        var q = u[z];
        q = typeof q == "function" ? q.call(a, R, h, v) : q, q != null && (O ? (O = !1, R = tr({}, R, q)) : tr(R, q));
      }
      a.state = R;
    }
    else R.queue = null;
  }
  var pn = { id: 1, overflow: "" };
  function rr(a, u, h) {
    var v = a.id;
    a = a.overflow;
    var O = 32 - hn(v) - 1;
    v &= ~(1 << O), h += 1;
    var R = 32 - hn(u) + O;
    if (30 < R) {
      var z = O - O % 5;
      return R = (v & (1 << z) - 1).toString(32), v >>= z, O -= z, { id: 1 << 32 - hn(u) + O | h << O | v, overflow: R + a };
    }
    return { id: 1 << R | h << O | v, overflow: a };
  }
  var hn = Math.clz32 ? Math.clz32 : Ds, Fs = Math.log, zs = Math.LN2;
  function Ds(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Fs(a) / zs | 0) | 0;
  }
  function $s(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var Us = typeof Object.is == "function" ? Object.is : $s, Ht = null, ro = null, gn = null, ze = null, Gr = !1, mn = !1, Yr = 0, nr = null, yn = 0;
  function xr() {
    if (Ht === null) throw Error(t(321));
    return Ht;
  }
  function ca() {
    if (0 < yn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function no() {
    return ze === null ? gn === null ? (Gr = !1, gn = ze = ca()) : (Gr = !0, ze = gn) : ze.next === null ? (Gr = !1, ze = ze.next = ca()) : (Gr = !0, ze = ze.next), ze;
  }
  function oo() {
    ro = Ht = null, mn = !1, gn = null, yn = 0, ze = nr = null;
  }
  function da(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function fa(a, u, h) {
    if (Ht = xr(), ze = no(), Gr) {
      var v = ze.queue;
      if (u = v.dispatch, nr !== null && (h = nr.get(v), h !== void 0)) {
        nr.delete(v), v = ze.memoizedState;
        do
          v = a(v, h.action), h = h.next;
        while (h !== null);
        return ze.memoizedState = v, [v, u];
      }
      return [ze.memoizedState, u];
    }
    return a = a === da ? typeof u == "function" ? u() : u : h !== void 0 ? h(u) : u, ze.memoizedState = a, a = ze.queue = { last: null, dispatch: null }, a = a.dispatch = Bs.bind(null, Ht, a), [ze.memoizedState, a];
  }
  function pa(a, u) {
    if (Ht = xr(), ze = no(), u = u === void 0 ? null : u, ze !== null) {
      var h = ze.memoizedState;
      if (h !== null && u !== null) {
        var v = h[1];
        e: if (v === null) v = !1;
        else {
          for (var O = 0; O < v.length && O < u.length; O++) if (!Us(u[O], v[O])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return h[0];
      }
    }
    return a = a(), ze.memoizedState = [a, u], a;
  }
  function Bs(a, u, h) {
    if (25 <= yn) throw Error(t(301));
    if (a === Ht) if (mn = !0, a = { action: h, next: null }, nr === null && (nr = /* @__PURE__ */ new Map()), h = nr.get(u), h === void 0) nr.set(u, a);
    else {
      for (u = h; u.next !== null; ) u = u.next;
      u.next = a;
    }
  }
  function Ws() {
    throw Error(t(394));
  }
  function vn() {
  }
  var ha = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return xr(), a._currentValue;
  }, useMemo: pa, useReducer: fa, useRef: function(a) {
    Ht = xr(), ze = no();
    var u = ze.memoizedState;
    return u === null ? (a = { current: a }, ze.memoizedState = a) : u;
  }, useState: function(a) {
    return fa(da, a);
  }, useInsertionEffect: vn, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return pa(function() {
      return a;
    }, u);
  }, useImperativeHandle: vn, useEffect: vn, useDebugValue: vn, useDeferredValue: function(a) {
    return xr(), a;
  }, useTransition: function() {
    return xr(), [!1, Ws];
  }, useId: function() {
    var a = ro.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - hn(a) - 1)).toString(32) + u;
    var h = bn;
    if (h === null) throw Error(t(404));
    return u = Yr++, a = ":" + h.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return xr(), u(a._source);
  }, useSyncExternalStore: function(a, u, h) {
    if (h === void 0) throw Error(t(407));
    return h();
  } }, bn = null, ao = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Hs(a) {
    return console.error(a), null;
  }
  function Zr() {
  }
  function Vs(a, u, h, v, O, R, z, q, ie) {
    var be = [], me = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: v === void 0 ? 12800 : v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: me, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: O === void 0 ? Hs : O, onAllReady: R === void 0 ? Zr : R, onShellReady: z === void 0 ? Zr : z, onShellError: q === void 0 ? Zr : q, onFatalError: ie === void 0 ? Zr : ie }, h = wn(u, 0, null, h, !1, !1), h.parentFlushed = !0, a = io(u, a, null, h, me, ae, null, pn), be.push(a), u;
  }
  function io(a, u, h, v, O, R, z, q) {
    a.allPendingTasks++, h === null ? a.pendingRootTasks++ : h.pendingTasks++;
    var ie = { node: u, ping: function() {
      var be = a.pingedTasks;
      be.push(ie), be.length === 1 && xa(a);
    }, blockedBoundary: h, blockedSegment: v, abortSet: O, legacyContext: R, context: z, treeContext: q };
    return O.add(ie), ie;
  }
  function wn(a, u, h, v, O, R) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: h, lastPushedText: O, textEmbedded: R };
  }
  function Xr(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function xn(a, u) {
    var h = a.onShellError;
    h(u), h = a.onFatalError, h(u), a.destination !== null ? (a.status = 2, k(a.destination, u)) : (a.status = 1, a.fatalError = u);
  }
  function ga(a, u, h, v, O) {
    for (Ht = {}, ro = u, Yr = 0, a = h(v, O); mn; ) mn = !1, Yr = 0, yn += 1, ze = null, a = h(v, O);
    return oo(), a;
  }
  function ma(a, u, h, v) {
    var O = h.render(), R = v.childContextTypes;
    if (R != null) {
      var z = u.legacyContext;
      if (typeof h.getChildContext != "function") v = z;
      else {
        h = h.getChildContext();
        for (var q in h) if (!(q in R)) throw Error(t(108, Z(v) || "Unknown", q));
        v = tr({}, z, h);
      }
      u.legacyContext = v, mt(a, u, O), u.legacyContext = z;
    } else mt(a, u, O);
  }
  function ya(a, u) {
    if (a && a.defaultProps) {
      u = tr({}, u), a = a.defaultProps;
      for (var h in a) u[h] === void 0 && (u[h] = a[h]);
      return u;
    }
    return u;
  }
  function so(a, u, h, v, O) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      O = ce(h, u.legacyContext);
      var R = h.contextType;
      R = new h(v, typeof R == "object" && R !== null ? R._currentValue : O), wr(R, h, v, O), ma(a, u, R, h);
    } else {
      R = ce(h, u.legacyContext), O = ga(a, u, h, v, R);
      var z = Yr !== 0;
      if (typeof O == "object" && O !== null && typeof O.render == "function" && O.$$typeof === void 0) wr(O, h, v, R), ma(a, u, O, h);
      else if (z) {
        v = u.treeContext, u.treeContext = rr(v, 1, 0);
        try {
          mt(a, u, O);
        } finally {
          u.treeContext = v;
        }
      } else mt(a, u, O);
    }
    else if (typeof h == "string") {
      switch (O = u.blockedSegment, R = oe(O.chunks, h, v, a.responseState, O.formatContext), O.lastPushedText = !1, z = O.formatContext, O.formatContext = Ge(z, h, v), lo(a, u, R), O.formatContext = z, h) {
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
          O.chunks.push(tt, p(h), Je);
      }
      O.lastPushedText = !1;
    } else {
      switch (h) {
        case I:
        case b:
        case Br:
        case Wr:
        case vr:
          mt(a, u, v.children);
          return;
        case Vr:
          mt(a, u, v.children);
          return;
        case g:
          throw Error(t(343));
        case fn:
          e: {
            h = u.blockedBoundary, O = u.blockedSegment, R = v.fallback, v = v.children, z = /* @__PURE__ */ new Set();
            var q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: z, errorDigest: null }, ie = wn(a, O.chunks.length, q, O.formatContext, !1, !1);
            O.children.push(ie), O.lastPushedText = !1;
            var be = wn(a, 0, null, O.formatContext, !1, !1);
            be.parentFlushed = !0, u.blockedBoundary = q, u.blockedSegment = be;
            try {
              if (lo(
                a,
                u,
                v
              ), be.lastPushedText && be.textEmbedded && be.chunks.push(j), be.status = 1, Sn(q, be), q.pendingTasks === 0) break e;
            } catch (me) {
              be.status = 4, q.forceClientRender = !0, q.errorDigest = Xr(a, me);
            } finally {
              u.blockedBoundary = h, u.blockedSegment = O;
            }
            u = io(a, R, h, ie, z, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case dn:
          if (v = ga(a, u, h.render, v, O), Yr !== 0) {
            h = u.treeContext, u.treeContext = rr(h, 1, 0);
            try {
              mt(a, u, v);
            } finally {
              u.treeContext = h;
            }
          } else mt(a, u, v);
          return;
        case o:
          h = h.type, v = ya(h, v), so(a, u, h, v, O);
          return;
        case Hr:
          if (O = v.children, h = h._context, v = v.value, R = h._currentValue, h._currentValue = v, z = ge, ge = v = { parent: z, depth: z === null ? 0 : z.depth + 1, context: h, parentValue: R, value: v }, u.context = v, mt(a, u, O), a = ge, a === null) throw Error(t(403));
          v = a.parentValue, a.context._currentValue = v === A ? a.context._defaultValue : v, a = ge = a.parent, u.context = a;
          return;
        case Or:
          v = v.children, v = v(h._currentValue), mt(a, u, v);
          return;
        case c:
          O = h._init, h = O(h._payload), v = ya(h, v), so(a, u, h, v, void 0);
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
          so(a, u, h.type, h.props, h.ref);
          return;
        case yr:
          throw Error(t(257));
        case c:
          var v = h._init;
          h = v(h._payload), mt(a, u, h);
          return;
      }
      if (De(h)) {
        va(a, u, h);
        return;
      }
      if (h === null || typeof h != "object" ? v = null : (v = M && h[M] || h["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(h))) {
        if (h = v.next(), !h.done) {
          var O = [];
          do
            O.push(h.value), h = v.next();
          while (!h.done);
          va(a, u, O);
        }
        return;
      }
      throw a = Object.prototype.toString.call(h), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : a));
    }
    typeof h == "string" ? (v = u.blockedSegment, v.lastPushedText = E(u.blockedSegment.chunks, h, a.responseState, v.lastPushedText)) : typeof h == "number" && (v = u.blockedSegment, v.lastPushedText = E(u.blockedSegment.chunks, "" + h, a.responseState, v.lastPushedText));
  }
  function va(a, u, h) {
    for (var v = h.length, O = 0; O < v; O++) {
      var R = u.treeContext;
      u.treeContext = rr(R, v, O);
      try {
        lo(a, u, h[O]);
      } finally {
        u.treeContext = R;
      }
    }
  }
  function lo(a, u, h) {
    var v = u.blockedSegment.formatContext, O = u.legacyContext, R = u.context;
    try {
      return mt(a, u, h);
    } catch (ie) {
      if (oo(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
        h = ie;
        var z = u.blockedSegment, q = wn(a, z.chunks.length, null, z.formatContext, z.lastPushedText, !0);
        z.children.push(q), z.lastPushedText = !1, a = io(a, u.node, u.blockedBoundary, q, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, h.then(a, a), u.blockedSegment.formatContext = v, u.legacyContext = O, u.context = R, Wt(R);
      } else throw u.blockedSegment.formatContext = v, u.legacyContext = O, u.context = R, Wt(R), ie;
    }
  }
  function qs(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, wa(this, u, a);
  }
  function ba(a, u, h) {
    var v = a.blockedBoundary;
    a.blockedSegment.status = 3, v === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.close())) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, a = h === void 0 ? Error(t(432)) : h, v.errorDigest = u.onError(a), v.parentFlushed && u.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(O) {
      return ba(O, u, h);
    }), v.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (v = u.onAllReady, v()));
  }
  function Sn(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var h = u.children[0];
      h.id = u.id, h.parentFlushed = !0, h.status === 1 && Sn(a, h);
    } else a.completedSegments.push(u);
  }
  function wa(a, u, h) {
    if (u === null) {
      if (h.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = h;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Zr, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && Sn(u, h), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(qs, a), u.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (Sn(u, h), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function xa(a) {
    if (a.status !== 2) {
      var u = ge, h = ao.current;
      ao.current = ha;
      var v = bn;
      bn = a.responseState;
      try {
        var O = a.pingedTasks, R;
        for (R = 0; R < O.length; R++) {
          var z = O[R], q = a, ie = z.blockedSegment;
          if (ie.status === 0) {
            Wt(z.context);
            try {
              mt(q, z, z.node), ie.lastPushedText && ie.textEmbedded && ie.chunks.push(j), z.abortSet.delete(z), ie.status = 1, wa(q, z.blockedBoundary, ie);
            } catch (At) {
              if (oo(), typeof At == "object" && At !== null && typeof At.then == "function") {
                var be = z.ping;
                At.then(be, be);
              } else {
                z.abortSet.delete(z), ie.status = 4;
                var me = z.blockedBoundary, Be = At, yt = Xr(q, Be);
                if (me === null ? xn(q, Be) : (me.pendingTasks--, me.forceClientRender || (me.forceClientRender = !0, me.errorDigest = yt, me.parentFlushed && q.clientRenderedBoundaries.push(me))), q.allPendingTasks--, q.allPendingTasks === 0) {
                  var Tt = q.onAllReady;
                  Tt();
                }
              }
            } finally {
            }
          }
        }
        O.splice(0, R), a.destination !== null && uo(a, a.destination);
      } catch (At) {
        Xr(a, At), xn(a, At);
      } finally {
        bn = v, ao.current = h, h === ha && Wt(u);
      }
    }
  }
  function kn(a, u, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var v = h.id = a.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, a = a.responseState, i(u, _e), i(u, a.placeholderPrefix), a = p(v.toString(16)), i(u, a), s(u, cr);
      case 1:
        h.status = 2;
        var O = !0;
        v = h.chunks;
        var R = 0;
        h = h.children;
        for (var z = 0; z < h.length; z++) {
          for (O = h[z]; R < O.index; R++) i(u, v[R]);
          O = Cn(a, u, O);
        }
        for (; R < v.length - 1; R++) i(u, v[R]);
        return R < v.length && (O = s(u, v[R])), O;
      default:
        throw Error(t(390));
    }
  }
  function Cn(a, u, h) {
    var v = h.boundary;
    if (v === null) return kn(a, u, h);
    if (v.parentFlushed = !0, v.forceClientRender) v = v.errorDigest, s(u, Mt), i(u, Xt), v && (i(u, It), i(u, p(ye(v))), i(u, ft)), s(u, fr), kn(a, u, h);
    else if (0 < v.pendingTasks) {
      v.rootSegmentID = a.nextSegmentId++, 0 < v.completedSegments.length && a.partialBoundaries.push(v);
      var O = a.responseState, R = O.nextSuspenseID++;
      O = f(O.boundaryPrefix + R.toString(16)), v = v.id = O, nt(u, a.responseState, v), kn(a, u, h);
    } else if (v.byteSize > a.progressiveChunkSize) v.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(v), nt(u, a.responseState, v.id), kn(a, u, h);
    else {
      if (s(u, dr), h = v.completedSegments, h.length !== 1) throw Error(t(391));
      Cn(a, u, h[0]);
    }
    return s(u, Zt);
  }
  function Sa(a, u, h) {
    return ht(u, a.responseState, h.formatContext, h.id), Cn(a, u, h), Pt(u, h.formatContext);
  }
  function ka(a, u, h) {
    for (var v = h.completedSegments, O = 0; O < v.length; O++) Ca(a, u, h, v[O]);
    if (v.length = 0, a = a.responseState, v = h.id, h = h.rootSegmentID, i(u, a.startInlineScript), a.sentCompleteBoundaryFunction ? i(u, J) : (a.sentCompleteBoundaryFunction = !0, i(u, x)), v === null) throw Error(t(395));
    return h = p(h.toString(16)), i(u, v), i(u, H), i(u, a.segmentPrefix), i(u, h), s(u, Se);
  }
  function Ca(a, u, h, v) {
    if (v.status === 2) return !0;
    var O = v.id;
    if (O === -1) {
      if ((v.id = h.rootSegmentID) === -1) throw Error(t(392));
      return Sa(a, u, v);
    }
    return Sa(a, u, v), a = a.responseState, i(u, a.startInlineScript), a.sentCompleteSegmentFunction ? i(u, er) : (a.sentCompleteSegmentFunction = !0, i(u, Rr)), i(u, a.segmentPrefix), O = p(O.toString(16)), i(u, O), i(u, Ut), i(u, a.placeholderPrefix), i(u, O), s(u, Bt);
  }
  function uo(a, u) {
    r = new Uint8Array(512), n = 0;
    try {
      var h = a.completedRootSegment;
      if (h !== null && a.pendingRootTasks === 0) {
        Cn(a, u, h), a.completedRootSegment = null;
        var v = a.responseState.bootstrapChunks;
        for (h = 0; h < v.length - 1; h++) i(u, v[h]);
        h < v.length && s(u, v[h]);
      }
      var O = a.clientRenderedBoundaries, R;
      for (R = 0; R < O.length; R++) {
        var z = O[R];
        v = u;
        var q = a.responseState, ie = z.id, be = z.errorDigest, me = z.errorMessage, Be = z.errorComponentStack;
        if (i(v, q.startInlineScript), q.sentClientRenderFunction ? i(v, Ne) : (q.sentClientRenderFunction = !0, i(
          v,
          je
        )), ie === null) throw Error(t(395));
        i(v, ie), i(v, We), (be || me || Be) && (i(v, ot), i(v, p(kt(be || "")))), (me || Be) && (i(v, ot), i(v, p(kt(me || "")))), Be && (i(v, ot), i(v, p(kt(Be)))), s(v, dt);
      }
      O.splice(0, R);
      var yt = a.completedBoundaries;
      for (R = 0; R < yt.length; R++) ka(a, u, yt[R]);
      yt.splice(0, R), d(u), r = new Uint8Array(512), n = 0;
      var Tt = a.partialBoundaries;
      for (R = 0; R < Tt.length; R++) {
        var At = Tt[R];
        e: {
          O = a, z = u;
          var _n = At.completedSegments;
          for (q = 0; q < _n.length; q++) if (!Ca(
            O,
            z,
            At,
            _n[q]
          )) {
            q++, _n.splice(0, q);
            var Ta = !1;
            break e;
          }
          _n.splice(0, q), Ta = !0;
        }
        if (!Ta) {
          a.destination = null, R++, Tt.splice(0, R);
          return;
        }
      }
      Tt.splice(0, R);
      var co = a.completedBoundaries;
      for (R = 0; R < co.length; R++) ka(a, u, co[R]);
      co.splice(0, R);
    } finally {
      d(u), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.close();
    }
  }
  function _a(a, u) {
    try {
      var h = a.abortableTasks;
      h.forEach(function(v) {
        return ba(v, a, u);
      }), h.clear(), a.destination !== null && uo(a, a.destination);
    } catch (v) {
      Xr(a, v), xn(a, v);
    }
  }
  return Rn.renderToReadableStream = function(a, u) {
    return new Promise(function(h, v) {
      var O, R, z = new Promise(function(me, Be) {
        R = me, O = Be;
      }), q = Vs(a, ke(u ? u.identifierPrefix : void 0, u ? u.nonce : void 0, u ? u.bootstrapScriptContent : void 0, u ? u.bootstrapScripts : void 0, u ? u.bootstrapModules : void 0), qe(u ? u.namespaceURI : void 0), u ? u.progressiveChunkSize : void 0, u ? u.onError : void 0, R, function() {
        var me = new ReadableStream({ type: "bytes", pull: function(Be) {
          if (q.status === 1) q.status = 2, k(Be, q.fatalError);
          else if (q.status !== 2 && q.destination === null) {
            q.destination = Be;
            try {
              uo(q, Be);
            } catch (yt) {
              Xr(q, yt), xn(q, yt);
            }
          }
        }, cancel: function() {
          _a(q);
        } }, { highWaterMark: 0 });
        me.allReady = z, h(me);
      }, function(me) {
        z.catch(function() {
        }), v(me);
      }, O);
      if (u && u.signal) {
        var ie = u.signal, be = function() {
          _a(q, ie.reason), ie.removeEventListener("abort", be);
        };
        ie.addEventListener("abort", be);
      }
      xa(q);
    });
  }, Rn.version = "18.3.1", Rn;
}
var Ur, Di;
Ur = Fl(), Di = zl();
Ur.version;
Ur.renderToString;
Ur.renderToStaticMarkup;
Ur.renderToNodeStream;
Ur.renderToStaticNodeStream;
Di.renderToReadableStream;
const Dl = "staticMarkup";
function $l() {
  const e = Js().indexOf(Dl) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const lr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = $l(), { onClick: i, ...s } = r.props;
  if (n)
    return et.cloneElement(r, {
      ...s,
      onClick: (p) => (Ml(e), i ? i(p) : !0)
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
  return et.cloneElement(r, {
    ...s,
    onClick: i,
    ...m
  });
};
l.number, l.number, l.func, l.object;
l.arrayOf(ji).isRequired, l.number;
const Ul = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Go = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  block: i,
  color: s,
  disabled: d,
  element: m,
  href: p,
  icon: f,
  innerRef: k,
  onClick: S,
  size: P,
  classes: $,
  target: _,
  ...w
}) => {
  const N = Lr("btn", {
    [`btn-${s}`]: !0,
    "btn-md": P === "small",
    "btn-sm": P === "xsmall",
    "btn-block": i,
    disabled: d
  });
  let F = m;
  return p && m === "button" && (F = "a"), /* @__PURE__ */ D.jsx(
    lr,
    {
      gaData: {
        ...Ul,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ D.jsxs(
        F,
        {
          type: F === "button" && S ? "button" : void 0,
          ...w,
          className: Lr($) || N,
          href: p,
          ref: k,
          onClick: S,
          "aria-label": n,
          target: F === "a" ? _ : null,
          children: [
            f && /* @__PURE__ */ D.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Go.propTypes = {
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
  gaData: qo,
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
Go.defaultProps = {
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
var $i = { exports: {} }, Pe = {}, $a;
function Bl() {
  if ($a) return Pe;
  $a = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function _(w) {
    if (typeof w == "object" && w !== null) {
      var N = w.$$typeof;
      switch (N) {
        case e:
          switch (w = w.type, w) {
            case r:
            case i:
            case n:
            case p:
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case d:
                case m:
                case S:
                case k:
                  return w;
                case s:
                  return w;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return Pe.ContextConsumer = s, Pe.ContextProvider = d, Pe.Element = e, Pe.ForwardRef = m, Pe.Fragment = r, Pe.Lazy = S, Pe.Memo = k, Pe.Portal = t, Pe.Profiler = i, Pe.StrictMode = n, Pe.Suspense = p, Pe.SuspenseList = f, Pe.isContextConsumer = function(w) {
    return _(w) === s;
  }, Pe.isContextProvider = function(w) {
    return _(w) === d;
  }, Pe.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Pe.isForwardRef = function(w) {
    return _(w) === m;
  }, Pe.isFragment = function(w) {
    return _(w) === r;
  }, Pe.isLazy = function(w) {
    return _(w) === S;
  }, Pe.isMemo = function(w) {
    return _(w) === k;
  }, Pe.isPortal = function(w) {
    return _(w) === t;
  }, Pe.isProfiler = function(w) {
    return _(w) === i;
  }, Pe.isStrictMode = function(w) {
    return _(w) === n;
  }, Pe.isSuspense = function(w) {
    return _(w) === p;
  }, Pe.isSuspenseList = function(w) {
    return _(w) === f;
  }, Pe.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === i || w === n || w === p || w === f || w === P || typeof w == "object" && w !== null && (w.$$typeof === S || w.$$typeof === k || w.$$typeof === d || w.$$typeof === s || w.$$typeof === m || w.$$typeof === $ || w.getModuleId !== void 0);
  }, Pe.typeOf = _, Pe;
}
$i.exports = Bl();
var Ui = $i.exports;
function Wl(e) {
  function t(j, E, L, B, y) {
    for (var Y = 0, T = 0, re = 0, K = 0, Q, V, ne = 0, le = 0, ee, se = ee = Q = 0, te = 0, fe = 0, Fe = 0, ue = 0, Xe = L.length, $e = Xe - 1, he, W = "", oe = "", tt = "", Je = "", _e; te < Xe; ) {
      if (V = L.charCodeAt(te), te === $e && T + K + re + Y !== 0 && (T !== 0 && (V = T === 47 ? 10 : 47), K = re = Y = 0, Xe++, $e++), T + K + re + Y === 0) {
        if (te === $e && (0 < fe && (W = W.replace(P, "")), 0 < W.trim().length)) {
          switch (V) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              W += L.charAt(te);
          }
          V = 59;
        }
        switch (V) {
          case 123:
            for (W = W.trim(), Q = W.charCodeAt(0), ee = 1, ue = ++te; te < Xe; ) {
              switch (V = L.charCodeAt(te)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (V = L.charCodeAt(te + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (se = te + 1; se < $e; ++se)
                          switch (L.charCodeAt(se)) {
                            case 47:
                              if (V === 42 && L.charCodeAt(se - 1) === 42 && te + 2 !== se) {
                                te = se + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (V === 47) {
                                te = se + 1;
                                break e;
                              }
                          }
                        te = se;
                      }
                  }
                  break;
                case 91:
                  V++;
                case 40:
                  V++;
                case 34:
                case 39:
                  for (; te++ < $e && L.charCodeAt(te) !== V; )
                    ;
              }
              if (ee === 0) break;
              te++;
            }
            switch (ee = L.substring(ue, te), Q === 0 && (Q = (W = W.replace(S, "").trim()).charCodeAt(0)), Q) {
              case 64:
                switch (0 < fe && (W = W.replace(P, "")), V = W.charCodeAt(1), V) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = E;
                    break;
                  default:
                    fe = Ze;
                }
                if (ee = t(E, fe, ee, V, y + 1), ue = ee.length, 0 < ke && (fe = r(Ze, W, Fe), _e = m(3, ee, fe, E, we, pe, ue, V, y, B), W = fe.join(""), _e !== void 0 && (ue = (ee = _e.trim()).length) === 0 && (V = 0, ee = "")), 0 < ue) switch (V) {
                  case 115:
                    W = W.replace(de, d);
                  case 100:
                  case 109:
                  case 45:
                    ee = W + "{" + ee + "}";
                    break;
                  case 107:
                    W = W.replace(U, "$1 $2"), ee = W + "{" + ee + "}", ee = xe === 1 || xe === 2 && s("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                    break;
                  default:
                    ee = W + ee, B === 112 && (ee = (oe += ee, ""));
                }
                else ee = "";
                break;
              default:
                ee = t(E, r(E, W, Fe), ee, B, y + 1);
            }
            tt += ee, ee = Fe = fe = se = Q = 0, W = "", V = L.charCodeAt(++te);
            break;
          case 125:
          case 59:
            if (W = (0 < fe ? W.replace(P, "") : W).trim(), 1 < (ue = W.length)) switch (se === 0 && (Q = W.charCodeAt(0), Q === 45 || 96 < Q && 123 > Q) && (ue = (W = W.replace(" ", ":")).length), 0 < ke && (_e = m(1, W, E, j, we, pe, oe.length, B, y, B)) !== void 0 && (ue = (W = _e.trim()).length) === 0 && (W = "\0\0"), Q = W.charCodeAt(0), V = W.charCodeAt(1), Q) {
              case 0:
                break;
              case 64:
                if (V === 105 || V === 99) {
                  Je += W + L.charAt(te);
                  break;
                }
              default:
                W.charCodeAt(ue - 1) !== 58 && (oe += i(W, Q, V, W.charCodeAt(2)));
            }
            Fe = fe = se = Q = 0, W = "", V = L.charCodeAt(++te);
        }
      }
      switch (V) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + Q === 0 && B !== 107 && 0 < W.length && (fe = 1, W += "\0"), 0 < ke * qe && m(0, W, E, j, we, pe, oe.length, B, y, B), pe = 1, we++;
          break;
        case 59:
        case 125:
          if (T + K + re + Y === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, he = L.charAt(te), V) {
            case 9:
            case 32:
              if (K + Y + T === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  V !== 32 && (he = " ");
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
              K + T + Y === 0 && (fe = Fe = 1, he = "\f" + he);
              break;
            case 108:
              if (K + T + Y + Te === 0 && 0 < se) switch (te - se) {
                case 2:
                  ne === 112 && L.charCodeAt(te - 3) === 58 && (Te = ne);
                case 8:
                  le === 111 && (Te = le);
              }
              break;
            case 58:
              K + T + Y === 0 && (se = te);
              break;
            case 44:
              T + re + K + Y === 0 && (fe = 1, he += "\r");
              break;
            case 34:
            case 39:
              T === 0 && (K = K === V ? 0 : K === 0 ? V : K);
              break;
            case 91:
              K + T + re === 0 && Y++;
              break;
            case 93:
              K + T + re === 0 && Y--;
              break;
            case 41:
              K + T + Y === 0 && re--;
              break;
            case 40:
              if (K + T + Y === 0) {
                if (Q === 0) switch (2 * ne + 3 * le) {
                  case 533:
                    break;
                  default:
                    Q = 1;
                }
                re++;
              }
              break;
            case 64:
              T + re + K + Y + se + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < K + Y + re)) switch (T) {
                case 0:
                  switch (2 * V + 3 * L.charCodeAt(te + 1)) {
                    case 235:
                      T = 47;
                      break;
                    case 220:
                      ue = te, T = 42;
                  }
                  break;
                case 42:
                  V === 47 && ne === 42 && ue + 2 !== te && (L.charCodeAt(ue + 2) === 33 && (oe += L.substring(ue, te + 1)), he = "", T = 0);
              }
          }
          T === 0 && (W += he);
      }
      le = ne, ne = V, te++;
    }
    if (ue = oe.length, 0 < ue) {
      if (fe = E, 0 < ke && (_e = m(2, oe, fe, j, we, pe, ue, B, y, B), _e !== void 0 && (oe = _e).length === 0)) return Je + oe + tt;
      if (oe = fe.join(",") + "{" + oe + "}", xe * Te !== 0) {
        switch (xe !== 2 || s(oe, 2) || (Te = 0), Te) {
          case 111:
            oe = oe.replace(X, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(G, "::-webkit-input-$1") + oe.replace(G, "::-moz-$1") + oe.replace(G, ":-ms-input-$1") + oe;
        }
        Te = 0;
      }
    }
    return Je + oe + tt;
  }
  function r(j, E, L) {
    var B = E.trim().split(N);
    E = B;
    var y = B.length, Y = j.length;
    switch (Y) {
      case 0:
      case 1:
        var T = 0;
        for (j = Y === 0 ? "" : j[0] + " "; T < y; ++T)
          E[T] = n(j, E[T], L).trim();
        break;
      default:
        var re = T = 0;
        for (E = []; T < y; ++T)
          for (var K = 0; K < Y; ++K)
            E[re++] = n(j[K] + " ", B[T], L).trim();
    }
    return E;
  }
  function n(j, E, L) {
    var B = E.charCodeAt(0);
    switch (33 > B && (B = (E = E.trim()).charCodeAt(0)), B) {
      case 38:
        return E.replace(F, "$1" + j.trim());
      case 58:
        return j.trim() + E.replace(F, "$1" + j.trim());
      default:
        if (0 < 1 * L && 0 < E.indexOf("\f")) return E.replace(F, (j.charCodeAt(0) === 58 ? "" : "$1") + j.trim());
    }
    return j + E;
  }
  function i(j, E, L, B) {
    var y = j + ";", Y = 2 * E + 3 * L + 4 * B;
    if (Y === 944) {
      j = y.indexOf(":", 9) + 1;
      var T = y.substring(j, y.length - 1).trim();
      return T = y.substring(0, j).trim() + T + ";", xe === 1 || xe === 2 && s(T, 1) ? "-webkit-" + T + T : T;
    }
    if (xe === 0 || xe === 2 && !s(y, 1)) return y;
    switch (Y) {
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
        if (0 < y.indexOf("image-set(", 11)) return y.replace(Ye, "$1-webkit-$2") + y;
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
        return T = y.substring(y.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + T + "-webkit-" + y + "-ms-flex-pack" + T + y;
      case 1005:
        return _.test(y) ? y.replace($, ":-webkit-") + y.replace($, ":-moz-") + y : y;
      case 1e3:
        switch (T = y.substring(13).trim(), E = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(E)) {
          case 226:
            T = y.replace(C, "tb");
            break;
          case 232:
            T = y.replace(C, "tb-rl");
            break;
          case 220:
            T = y.replace(C, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + T + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (E = (y = j).length - 10, T = (y.charCodeAt(E) === 33 ? y.substring(0, E) : y).substring(j.indexOf(":", 7) + 1).trim(), Y = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
          case 203:
            if (111 > T.charCodeAt(8)) break;
          case 115:
            y = y.replace(T, "-webkit-" + T) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(T, "-webkit-" + (102 < Y ? "inline-" : "") + "box") + ";" + y.replace(T, "-webkit-" + T) + ";" + y.replace(T, "-ms-" + T + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return T = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + T + "-ms-flex-" + T + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(Ce, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(Ce, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (De.test(j) === !0) return (T = j.substring(j.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(j.replace("stretch", "fill-available"), E, L, B).replace(":fill-available", ":stretch") : y.replace(T, "-webkit-" + T) + y.replace(T, "-moz-" + T.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, L + B === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(j, E) {
    var L = j.indexOf(E === 1 ? ":" : "{"), B = j.substring(0, E !== 3 ? L : 10);
    return L = j.substring(L + 1, j.length - 1), Me(E !== 2 ? B : B.replace(Ee, "$1"), L, E);
  }
  function d(j, E) {
    var L = i(E, E.charCodeAt(0), E.charCodeAt(1), E.charCodeAt(2));
    return L !== E + ";" ? L.replace(ye, " or ($1)").substring(4) : "(" + E + ")";
  }
  function m(j, E, L, B, y, Y, T, re, K, Q) {
    for (var V = 0, ne = E, le; V < ke; ++V)
      switch (le = Ie[V].call(k, j, ne, L, B, y, Y, T, re, K, Q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = le;
      }
    if (ne !== E) return ne;
  }
  function p(j) {
    switch (j) {
      case void 0:
      case null:
        ke = Ie.length = 0;
        break;
      default:
        if (typeof j == "function") Ie[ke++] = j;
        else if (typeof j == "object") for (var E = 0, L = j.length; E < L; ++E)
          p(j[E]);
        else qe = !!j | 0;
    }
    return p;
  }
  function f(j) {
    return j = j.prefix, j !== void 0 && (Me = null, j ? typeof j != "function" ? xe = 1 : (xe = 2, Me = j) : xe = 0), f;
  }
  function k(j, E) {
    var L = j;
    if (33 > L.charCodeAt(0) && (L = L.trim()), Ge = L, L = [Ge], 0 < ke) {
      var B = m(-1, E, L, L, we, pe, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (E = B);
    }
    var y = t(Ze, L, E, 0, 0);
    return 0 < ke && (B = m(-2, y, L, L, we, pe, y.length, 0, 0, 0), B !== void 0 && (y = B)), Ge = "", Te = 0, pe = we = 1, y;
  }
  var S = /^\0+/g, P = /[\0\r\f]/g, $ = /: */g, _ = /zoo|gra/, w = /([,: ])(transform)/g, N = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, X = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, de = /\(\s*(.*)\s*\)/g, ye = /([\s\S]*?);/g, Ce = /-self|flex-/g, Ee = /[^]*?(:[rp][el]a[\w-]+)[^]*/, De = /stretch|:\s*\w+\-(?:conte|avail)/, Ye = /([^-])(image-set\()/, pe = 1, we = 1, Te = 0, xe = 1, Ze = [], Ie = [], ke = 0, Me = null, qe = 0, Ge = "";
  return k.use = p, k.set = f, e !== void 0 && f(e), k;
}
var Hl = {
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
function Vl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ql = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ua = /* @__PURE__ */ Vl(
  function(e) {
    return ql.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Bi = { exports: {} }, Re = {}, Ba;
function Gl() {
  if (Ba) return Re;
  Ba = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, k = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function G(C) {
    if (typeof C == "object" && C !== null) {
      var de = C.$$typeof;
      switch (de) {
        case t:
          switch (C = C.type, C) {
            case p:
            case f:
            case n:
            case s:
            case i:
            case S:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case m:
                case k:
                case _:
                case $:
                case d:
                  return C;
                default:
                  return de;
              }
          }
        case r:
          return de;
      }
    }
  }
  function X(C) {
    return G(C) === f;
  }
  return Re.AsyncMode = p, Re.ConcurrentMode = f, Re.ContextConsumer = m, Re.ContextProvider = d, Re.Element = t, Re.ForwardRef = k, Re.Fragment = n, Re.Lazy = _, Re.Memo = $, Re.Portal = r, Re.Profiler = s, Re.StrictMode = i, Re.Suspense = S, Re.isAsyncMode = function(C) {
    return X(C) || G(C) === p;
  }, Re.isConcurrentMode = X, Re.isContextConsumer = function(C) {
    return G(C) === m;
  }, Re.isContextProvider = function(C) {
    return G(C) === d;
  }, Re.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, Re.isForwardRef = function(C) {
    return G(C) === k;
  }, Re.isFragment = function(C) {
    return G(C) === n;
  }, Re.isLazy = function(C) {
    return G(C) === _;
  }, Re.isMemo = function(C) {
    return G(C) === $;
  }, Re.isPortal = function(C) {
    return G(C) === r;
  }, Re.isProfiler = function(C) {
    return G(C) === s;
  }, Re.isStrictMode = function(C) {
    return G(C) === i;
  }, Re.isSuspense = function(C) {
    return G(C) === S;
  }, Re.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === i || C === S || C === P || typeof C == "object" && C !== null && (C.$$typeof === _ || C.$$typeof === $ || C.$$typeof === d || C.$$typeof === m || C.$$typeof === k || C.$$typeof === N || C.$$typeof === F || C.$$typeof === U || C.$$typeof === w);
  }, Re.typeOf = G, Re;
}
Bi.exports = Gl();
var Yl = Bi.exports, Yo = Yl, Zl = {
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
}, Xl = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Jl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Wi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Zo = {};
Zo[Yo.ForwardRef] = Jl;
Zo[Yo.Memo] = Wi;
function Wa(e) {
  return Yo.isMemo(e) ? Wi : Zo[e.$$typeof] || Zl;
}
var Kl = Object.defineProperty, Ql = Object.getOwnPropertyNames, Ha = Object.getOwnPropertySymbols, eu = Object.getOwnPropertyDescriptor, tu = Object.getPrototypeOf, Va = Object.prototype;
function Hi(e, t, r) {
  if (typeof t != "string") {
    if (Va) {
      var n = tu(t);
      n && n !== Va && Hi(e, n, r);
    }
    var i = Ql(t);
    Ha && (i = i.concat(Ha(t)));
    for (var s = Wa(e), d = Wa(t), m = 0; m < i.length; ++m) {
      var p = i[m];
      if (!Xl[p] && !(r && r[p]) && !(d && d[p]) && !(s && s[p])) {
        var f = eu(t, p);
        try {
          Kl(e, p, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var ru = Hi;
const nu = /* @__PURE__ */ Vo(ru);
var at = { env: { NODE_ENV: "production" } };
function Vt() {
  return (Vt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var qa = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Eo = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ui.typeOf(e);
}, Bn = Object.freeze([]), ar = Object.freeze({});
function nn(e) {
  return typeof e == "function";
}
function Ga(e) {
  return e.displayName || e.name || "Component";
}
function Xo(e) {
  return e && typeof e.styledComponentId == "string";
}
var jr = typeof at < "u" && at.env !== void 0 && (at.env.REACT_APP_SC_ATTR || at.env.SC_ATTR) || "data-styled", Jo = typeof window < "u" && "HTMLElement" in window, ou = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof at < "u" && at.env !== void 0 && (at.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && at.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? at.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && at.env.REACT_APP_SC_DISABLE_SPEEDY : at.env.SC_DISABLE_SPEEDY !== void 0 && at.env.SC_DISABLE_SPEEDY !== "" ? at.env.SC_DISABLE_SPEEDY !== "false" && at.env.SC_DISABLE_SPEEDY : at.env.NODE_ENV !== "production"));
function ln(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var au = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++) n += this.groupSizes[i];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, s = i.length, d = s; r >= d; ) (d <<= 1) < 0 && ln(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(i), this.length = d;
      for (var m = s; m < d; m++) this.groupSizes[m] = 0;
    }
    for (var p = this.indexOfGroup(r + 1), f = 0, k = n.length; f < k; f++) this.tag.insertRule(p, n[f]) && (this.groupSizes[r]++, p++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), s = i + n;
      this.groupSizes[r] = 0;
      for (var d = i; d < s; d++) this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var i = this.groupSizes[r], s = this.indexOfGroup(r), d = s + i, m = s; m < d; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), Fn = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map(), en = 1, On = function(e) {
  if (Fn.has(e)) return Fn.get(e);
  for (; Wn.has(en); ) en++;
  var t = en++;
  return Fn.set(e, t), Wn.set(t, e), t;
}, iu = function(e) {
  return Wn.get(e);
}, su = function(e, t) {
  t >= en && (en = t + 1), Fn.set(e, t), Wn.set(t, e);
}, lu = "style[" + jr + '][data-styled-version="5.3.11"]', uu = new RegExp("^" + jr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), cu = function(e, t, r) {
  for (var n, i = r.split(","), s = 0, d = i.length; s < d; s++) (n = i[s]) && e.registerName(t, n);
}, du = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, s = r.length; i < s; i++) {
    var d = r[i].trim();
    if (d) {
      var m = d.match(uu);
      if (m) {
        var p = 0 | parseInt(m[1], 10), f = m[2];
        p !== 0 && (su(f, p), cu(e, f, m[3]), e.getTag().insertRules(p, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, fu = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Vi = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(m) {
    for (var p = m.childNodes, f = p.length; f >= 0; f--) {
      var k = p[f];
      if (k && k.nodeType === 1 && k.hasAttribute(jr)) return k;
    }
  }(r), s = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(jr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = fu();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, pu = function() {
  function e(r) {
    var n = this.element = Vi(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet) return i.sheet;
      for (var s = document.styleSheets, d = 0, m = s.length; d < m; d++) {
        var p = s[d];
        if (p.ownerNode === i) return p;
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
}(), hu = function() {
  function e(r) {
    var n = this.element = Vi(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(i, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), gu = function() {
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
}(), Ya = Jo, mu = { isServer: !Jo, useCSSOMInjection: !ou }, qi = function() {
  function e(r, n, i) {
    r === void 0 && (r = ar), n === void 0 && (n = {}), this.options = Vt({}, mu, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && Jo && Ya && (Ya = !1, function(s) {
      for (var d = document.querySelectorAll(lu), m = 0, p = d.length; m < p; m++) {
        var f = d[m];
        f && f.getAttribute(jr) !== "active" && (du(s, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return On(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Vt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = i ? new gu(d) : s ? new pu(d) : new hu(d), new au(r)));
    var r, n, i, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (On(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(On(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(On(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, s = "", d = 0; d < i; d++) {
        var m = iu(d);
        if (m !== void 0) {
          var p = r.names.get(m), f = n.getGroup(d);
          if (p && f && p.size) {
            var k = jr + ".g" + d + '[id="' + m + '"]', S = "";
            p !== void 0 && p.forEach(function(P) {
              P.length > 0 && (S += P + ",");
            }), s += "" + f + k + '{content:"' + S + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), yu = /(a)(d)/gi, Za = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Io(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Za(t % 52) + r;
  return (Za(t % 52) + r).replace(yu, "$1-$2");
}
var Nr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Gi = function(e) {
  return Nr(5381, e);
};
function vu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (nn(r) && !Xo(r)) return !1;
  }
  return !0;
}
var bu = Gi("5.3.11"), wu = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && vu(t), this.componentId = r, this.baseHash = Nr(bu, r), this.baseStyle = n, qi.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Mr(this.rules, t, r, n).join(""), m = Io(Nr(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(i, m)) {
        var p = n(d, "." + m, void 0, i);
        r.insertRules(i, m, p);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, k = Nr(this.baseHash, n.hash), S = "", P = 0; P < f; P++) {
        var $ = this.rules[P];
        if (typeof $ == "string") S += $;
        else if ($) {
          var _ = Mr($, t, r, n), w = Array.isArray(_) ? _.join("") : _;
          k = Nr(k, w + P), S += w;
        }
      }
      if (S) {
        var N = Io(k >>> 0);
        if (!r.hasNameForId(i, N)) {
          var F = n(S, "." + N, void 0, i);
          r.insertRules(i, N, F);
        }
        s.push(N);
      }
    }
    return s.join(" ");
  }, e;
}(), xu = /^\s*\/\/.*$/gm, Su = [":", "[", ".", "#"];
function ku(e) {
  var t, r, n, i, s = ar, d = s.options, m = d === void 0 ? ar : d, p = s.plugins, f = p === void 0 ? Bn : p, k = new Wl(m), S = [], P = /* @__PURE__ */ function(w) {
    function N(F) {
      if (F) try {
        w(F + "}");
      } catch {
      }
    }
    return function(F, U, G, X, C, de, ye, Ce, Ee, De) {
      switch (F) {
        case 1:
          if (Ee === 0 && U.charCodeAt(0) === 64) return w(U + ";"), "";
          break;
        case 2:
          if (Ce === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Ce) {
            case 102:
            case 112:
              return w(G[0] + U), "";
            default:
              return U + (De === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(N);
      }
    };
  }(function(w) {
    S.push(w);
  }), $ = function(w, N, F) {
    return N === 0 && Su.indexOf(F[r.length]) !== -1 || F.match(i) ? w : "." + t;
  };
  function _(w, N, F, U) {
    U === void 0 && (U = "&");
    var G = w.replace(xu, ""), X = N && F ? F + " " + N + " { " + G + " }" : G;
    return t = U, r = N, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), k(F || !N ? "" : N, X);
  }
  return k.use([].concat(f, [function(w, N, F) {
    w === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, $));
  }, P, function(w) {
    if (w === -2) {
      var N = S;
      return S = [], N;
    }
  }])), _.hash = f.length ? f.reduce(function(w, N) {
    return N.name || ln(15), Nr(w, N.name);
  }, 5381).toString() : "", _;
}
var Yi = et.createContext();
Yi.Consumer;
var Zi = et.createContext(), Cu = (Zi.Consumer, new qi()), No = ku();
function _u() {
  return Yt(Yi) || Cu;
}
function Tu() {
  return Yt(Zi) || No;
}
var Au = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, s) {
      s === void 0 && (s = No);
      var d = n.name + s.hash;
      i.hasNameForId(n.id, d) || i.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return ln(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = No), this.name + t.hash;
  }, e;
}(), Ru = /([A-Z])/, Ou = /([A-Z])/g, Eu = /^ms-/, Iu = function(e) {
  return "-" + e.toLowerCase();
};
function Xa(e) {
  return Ru.test(e) ? e.replace(Ou, Iu).replace(Eu, "-ms-") : e;
}
var Ja = function(e) {
  return e == null || e === !1 || e === "";
};
function Mr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, s = [], d = 0, m = e.length; d < m; d += 1) (i = Mr(e[d], t, r, n)) !== "" && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (Ja(e)) return "";
  if (Xo(e)) return "." + e.styledComponentId;
  if (nn(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var p = e(t);
    return Mr(p, t, r, n);
  }
  var f;
  return e instanceof Au ? r ? (e.inject(r, n), e.getName(n)) : e : Eo(e) ? function k(S, P) {
    var $, _, w = [];
    for (var N in S) S.hasOwnProperty(N) && !Ja(S[N]) && (Array.isArray(S[N]) && S[N].isCss || nn(S[N]) ? w.push(Xa(N) + ":", S[N], ";") : Eo(S[N]) ? w.push.apply(w, k(S[N], N)) : w.push(Xa(N) + ": " + ($ = N, (_ = S[N]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || $ in Hl || $.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return P ? [P + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var Ka = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Nu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return nn(e) || Eo(e) ? Ka(Mr(qa(Bn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ka(Mr(qa(e, r)));
}
var Pu = function(e, t, r) {
  return r === void 0 && (r = ar), e.theme !== r.theme && e.theme || t || r.theme;
}, Lu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ju = /(^-|-$)/g;
function xo(e) {
  return e.replace(Lu, "-").replace(ju, "");
}
var Mu = function(e) {
  return Io(Gi(e) >>> 0);
};
function En(e) {
  return typeof e == "string" && at.env.NODE_ENV === "production";
}
var Po = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Fu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function zu(e, t, r) {
  var n = e[r];
  Po(t) && Po(n) ? Xi(n, t) : e[r] = t;
}
function Xi(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var i = 0, s = r; i < s.length; i++) {
    var d = s[i];
    if (Po(d)) for (var m in d) Fu(m) && zu(e, d[m], m);
  }
  return e;
}
var Ji = et.createContext();
Ji.Consumer;
var So = {};
function Ki(e, t, r) {
  var n = Xo(e), i = !En(e), s = t.attrs, d = s === void 0 ? Bn : s, m = t.componentId, p = m === void 0 ? function(U, G) {
    var X = typeof U != "string" ? "sc" : xo(U);
    So[X] = (So[X] || 0) + 1;
    var C = X + "-" + Mu("5.3.11" + X + So[X]);
    return G ? G + "-" + C : C;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, k = f === void 0 ? function(U) {
    return En(U) ? "styled." + U : "Styled(" + Ga(U) + ")";
  }(e) : f, S = t.displayName && t.componentId ? xo(t.displayName) + "-" + t.componentId : t.componentId || p, P = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(U, G, X) {
    return e.shouldForwardProp(U, G, X) && t.shouldForwardProp(U, G, X);
  } : e.shouldForwardProp);
  var _, w = new wu(r, S, n ? e.componentStyle : void 0), N = w.isStatic && d.length === 0, F = function(U, G) {
    return function(X, C, de, ye) {
      var Ce = X.attrs, Ee = X.componentStyle, De = X.defaultProps, Ye = X.foldedComponentIds, pe = X.shouldForwardProp, we = X.styledComponentId, Te = X.target, xe = function(B, y, Y) {
        B === void 0 && (B = ar);
        var T = Vt({}, y, { theme: B }), re = {};
        return Y.forEach(function(K) {
          var Q, V, ne, le = K;
          for (Q in nn(le) && (le = le(T)), le) T[Q] = re[Q] = Q === "className" ? (V = re[Q], ne = le[Q], V && ne ? V + " " + ne : V || ne) : le[Q];
        }), [T, re];
      }(Pu(C, Yt(Ji), De) || ar, C, Ce), Ze = xe[0], Ie = xe[1], ke = function(B, y, Y, T) {
        var re = _u(), K = Tu(), Q = y ? B.generateAndInjectStyles(ar, re, K) : B.generateAndInjectStyles(Y, re, K);
        return Q;
      }(Ee, ye, Ze), Me = de, qe = Ie.$as || C.$as || Ie.as || C.as || Te, Ge = En(qe), j = Ie !== C ? Vt({}, C, {}, Ie) : C, E = {};
      for (var L in j) L[0] !== "$" && L !== "as" && (L === "forwardedAs" ? E.as = j[L] : (pe ? pe(L, Ua, qe) : !Ge || Ua(L)) && (E[L] = j[L]));
      return C.style && Ie.style !== C.style && (E.style = Vt({}, C.style, {}, Ie.style)), E.className = Array.prototype.concat(Ye, we, ke !== we ? ke : null, C.className, Ie.className).filter(Boolean).join(" "), E.ref = Me, Oi(qe, E);
    }(_, U, G, N);
  };
  return F.displayName = k, (_ = et.forwardRef(F)).attrs = P, _.componentStyle = w, _.displayName = k, _.shouldForwardProp = $, _.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Bn, _.styledComponentId = S, _.target = n ? e.target : e, _.withComponent = function(U) {
    var G = t.componentId, X = function(de, ye) {
      if (de == null) return {};
      var Ce, Ee, De = {}, Ye = Object.keys(de);
      for (Ee = 0; Ee < Ye.length; Ee++) Ce = Ye[Ee], ye.indexOf(Ce) >= 0 || (De[Ce] = de[Ce]);
      return De;
    }(t, ["componentId"]), C = G && G + "-" + (En(U) ? U : xo(Ga(U)));
    return Ki(U, Vt({}, X, { attrs: P, componentId: C }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? Xi({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), i && nu(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var Et = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = ar), !Ui.isValidElementType(n)) return ln(1, String(n));
    var s = function() {
      return r(n, i, Nu.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, Vt({}, i, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, Vt({}, i, { attrs: Array.prototype.concat(i.attrs, d).filter(Boolean) }));
    }, s;
  }(Ki, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Et[e] = Et(e);
});
Et.div`
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
function Xn(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], i = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(i)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Du = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
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
}(), Cr = function() {
  return Cr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Cr.apply(this, arguments);
}, $u = function(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(d) {
      d(s);
    });
  }
  return new (r || (r = Promise))(function(s, d) {
    function m(k) {
      try {
        f(n.next(k));
      } catch (S) {
        d(S);
      }
    }
    function p(k) {
      try {
        f(n.throw(k));
      } catch (S) {
        d(S);
      }
    }
    function f(k) {
      k.done ? s(k.value) : i(k.value).then(m, p);
    }
    f((n = n.apply(e, [])).next());
  });
}, Uu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, d;
  return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function m(f) {
    return function(k) {
      return p([f, k]);
    };
  }
  function p(f) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, i && (s = f[0] & 2 ? i.return : f[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, f[1])).done) return s;
      switch (i = 0, s && (f = [f[0] & 2, s.value]), f[0]) {
        case 0:
        case 1:
          s = f;
          break;
        case 4:
          return r.label++, { value: f[1], done: !1 };
        case 5:
          r.label++, i = f[1], f = [0];
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
      f = [6, k], i = 0;
    } finally {
      n = s = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, Qi = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, Bu = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Wu = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, Hu = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Vu(e, t, r) {
  var n = t.height, i = t.width, s = Qi(t, ["height", "width"]), d = Cr({ height: n, width: i, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), m = window.open(e, "", Object.keys(d).map(function(f) {
    return "".concat(f, "=").concat(d[f]);
  }).join(", "));
  if (r)
    var p = window.setInterval(function() {
      try {
        (m === null || m.closed) && (window.clearInterval(p), r(m));
      } catch (f) {
        console.error(f);
      }
    }, 1e3);
  return m;
}
var qu = (
  /** @class */
  function(e) {
    Du(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var i = r.props, s = i.onShareWindowClose, d = i.windowHeight, m = d === void 0 ? 400 : d, p = i.windowPosition, f = p === void 0 ? "windowCenter" : p, k = i.windowWidth, S = k === void 0 ? 550 : k, P = Cr({ height: m, width: S }, f === "windowCenter" ? Wu(S, m) : Hu(S, m));
        Vu(n, P, s);
      }, r.handleClick = function(n) {
        return $u(r, void 0, void 0, function() {
          var i, s, d, m, p, f, k, S, P, $;
          return Uu(this, function(_) {
            switch (_.label) {
              case 0:
                return i = this.props, s = i.beforeOnClick, d = i.disabled, m = i.networkLink, p = i.onClick, f = i.url, k = i.openShareDialogOnClick, S = i.opts, P = m(f, S), d ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? ($ = s(), Bu($) ? [4, $] : [3, 2]) : [3, 2]);
              case 1:
                _.sent(), _.label = 2;
              case 2:
                return k && this.openShareDialog(P), p && p(n, P), [
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
      var n = r.children, i = r.className, s = r.disabled, d = r.disabledStyle, m = r.forwardedRef;
      r.networkLink;
      var p = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var f = r.resetButtonStyle, k = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var S = Qi(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), P = Lr("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, i), $ = Cr(Cr(f ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, k), s && d);
      return et.createElement("button", Cr({}, S, { "aria-label": S["aria-label"] || p, className: P, onClick: this.handleClick, ref: m, style: $ }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Gs)
), Hn = function() {
  return Hn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Hn.apply(this, arguments);
};
function Jn(e, t, r, n) {
  function i(s, d) {
    var m = r(s), p = Hn({}, s), f = Object.keys(m);
    return f.forEach(function(k) {
      delete p[k];
    }), et.createElement(qu, Hn({}, n, p, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return i.displayName = "ShareButton-".concat(e), Ri(i);
}
function Gu(e, t) {
  var r = t.subject, n = t.body, i = t.separator;
  return "mailto:" + Xn({ subject: r, body: n ? n + i + e : e });
}
Jn("email", Gu, function(e) {
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
var Yu = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
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
}(), Zu = (
  /** @class */
  function(e) {
    Yu(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function tn(e, t) {
  if (!e)
    throw new Zu(t);
}
function Xu(e, t) {
  var r = t.quote, n = t.hashtag;
  return tn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Xn({
    u: e,
    quote: r,
    hashtag: n
  });
}
Jn("facebook", Xu, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Ju(e, t) {
  var r = t.title, n = t.summary, i = t.source;
  return tn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Xn({ url: e, mini: "true", title: r, summary: n, source: i });
}
Jn("linkedin", Ju, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Ku(e, t) {
  var r = t.title, n = t.via, i = t.hashtags, s = i === void 0 ? [] : i, d = t.related, m = d === void 0 ? [] : d;
  return tn(e, "twitter.url"), tn(Array.isArray(s), "twitter.hashtags is not an array"), tn(Array.isArray(m), "twitter.related is not an array"), "https://twitter.com/share" + Xn({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: m.length > 0 ? m.join(",") : void 0
  });
}
Jn("twitter", Ku, function(e) {
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
function Lo(e) {
  "@babel/helpers - typeof";
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lo(e);
}
var Qu = (typeof window > "u" ? "undefined" : Lo(window)) === "object" && window.Element || function() {
};
function ec(e, t, r) {
  if (!(e[t] instanceof Qu))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, ec, l.shape({
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
Et.div`
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
Et.div`
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
const tc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ko = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: i,
  disabled: s,
  element: d = "button",
  innerRef: m,
  href: p,
  onClick: f,
  ...k
}) => {
  const S = Lr("btn", "btn-tag", {
    "btn-tag-alt-white": i === "white",
    "btn-tag-alt-gray": i === "gray",
    "btn-tag-alt-dark": i === "dark",
    disabled: s
  });
  let P = d;
  return p && d === "button" && (P = "a"), /* @__PURE__ */ D.jsx(
    lr,
    {
      gaData: {
        ...tc,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ D.jsx(
        P,
        {
          type: P === "button" && f ? "button" : void 0,
          ...k,
          className: S,
          href: p,
          ref: m,
          onClick: f,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Ko.propTypes = {
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
  gaData: qo,
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
Ko.defaultProps = {
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
const es = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: i = "async",
  dataTestId: s,
  fetchPriority: d = "auto",
  width: m,
  height: p,
  cardLink: f,
  title: k,
  caption: S,
  captionTitle: P,
  border: $,
  dropShadow: _
}) => {
  const w = {
    src: e,
    alt: t,
    loading: n,
    decoding: i,
    fetchpriority: d,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: il(r) },
    ...s && { "data-testid": s },
    ...m && { width: m },
    ...p && { height: p }
  }, N = Lr("uds-img", {
    borderless: !$,
    "uds-img-drop-shadow": _
  }), F = (G) => {
    const X = G ? `${w.className} ${G}` : w.className;
    return f ? /* @__PURE__ */ D.jsxs("a", { href: f, children: [
      /* @__PURE__ */ D.jsx("img", { ...w, className: X }),
      /* @__PURE__ */ D.jsx("span", { className: "visually-hidden", children: k })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ D.jsx("img", { ...w, className: X })
    );
  }, U = () => /* @__PURE__ */ D.jsx("div", { className: N, children: /* @__PURE__ */ D.jsxs("figure", { className: "figure uds-figure", children: [
    F(),
    S && /* @__PURE__ */ D.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      P && /* @__PURE__ */ D.jsx("h3", { children: P }),
      /* @__PURE__ */ D.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ir(S)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ D.jsx(D.Fragment, { children: S ? U() : F(N) });
};
es.propTypes = {
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
const rc = Et.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, nc = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), oc = (e) => !e.startsWith("https://") && !e.startsWith("http://") && nc(e) ? `mailto:${e}` : e, ac = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Lt = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: i,
  title: s,
  icon: d,
  body: m,
  eventFormat: p,
  eventLocation: f,
  eventTime: k,
  buttons: S,
  linkLabel: P,
  linkUrl: $,
  tags: _,
  showBorders: w,
  cardLink: N
}) => /* @__PURE__ */ D.jsx(
  Qo,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: i,
    title: s,
    icon: d,
    body: m,
    eventFormat: p,
    eventLocation: f,
    eventTime: k,
    buttons: S,
    linkLabel: P,
    linkUrl: $,
    tags: _,
    showBorders: w,
    cardLink: N
  }
);
Lt.propTypes = {
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
const Qo = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: i,
  title: s,
  icon: d,
  body: m,
  eventFormat: p,
  eventLocation: f,
  eventTime: k,
  buttons: S,
  linkLabel: P,
  linkUrl: $,
  tags: _,
  showBorders: w,
  cardLink: N
}) => {
  const F = Lr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !w
  });
  return /* @__PURE__ */ D.jsx(D.Fragment, { children: /* @__PURE__ */ D.jsxs(rc, { className: F, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ D.jsx(
      es,
      {
        src: n,
        alt: i,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: N,
        title: s
      }
    ),
    !n && d && /* @__PURE__ */ D.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ D.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ D.jsx(
      Vn,
      {
        type: e,
        body: m,
        eventFormat: p,
        eventLocation: f,
        eventTime: k,
        title: s,
        buttons: S,
        linkLabel: P,
        linkUrl: $,
        tags: _,
        cardLink: N
      }
    ) }) : /* @__PURE__ */ D.jsx(
      Vn,
      {
        type: e,
        body: m,
        eventFormat: p,
        eventLocation: f,
        eventTime: k,
        title: s,
        buttons: S,
        linkLabel: P,
        linkUrl: $,
        tags: _,
        cardLink: N
      }
    )
  ] }) });
};
Qo.propTypes = {
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
Qo.defaultProps = {
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
const Vn = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: i,
  title: s,
  buttons: d,
  linkLabel: m,
  linkUrl: p,
  tags: f,
  cardLink: k
}) => /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
  !!s && /* @__PURE__ */ D.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ D.jsx("h3", { className: "card-title", children: k ? /* @__PURE__ */ D.jsx("a", { href: k, children: s }) : s }) }),
  !!t && /* @__PURE__ */ D.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ D.jsx("div", { dangerouslySetInnerHTML: Ir(t) }) }),
  e === "event" && (i || n) && /* @__PURE__ */ D.jsx(
    ea,
    {
      eventFormat: r,
      eventTime: i,
      eventLocation: n
    }
  ),
  d && /* @__PURE__ */ D.jsx("div", { className: "card-buttons", children: d.map((S) => /* @__PURE__ */ D.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ D.jsx(
        Go,
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
  p && m && /* @__PURE__ */ D.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ D.jsx(
    lr,
    {
      gaData: {
        ...ac,
        section: s,
        text: m
      },
      children: /* @__PURE__ */ D.jsx("a", { href: oc(p), children: m })
    }
  ) }),
  f && /* @__PURE__ */ D.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((S) => (
    // @ts-ignore
    /* @__PURE__ */ D.jsx(
      Ko,
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
Vn.propTypes = {
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
Vn.defaultProps = {
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
const ea = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ D.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ D.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ D.jsx("div", { children: /* @__PURE__ */ D.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ D.jsx("div", { dangerouslySetInnerHTML: Ir(t) })
  ] }),
  r && /* @__PURE__ */ D.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ D.jsx("div", { children: /* @__PURE__ */ D.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ D.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ir(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
  t && /* @__PURE__ */ D.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ D.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ D.jsx("div", { children: /* @__PURE__ */ D.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ D.jsx("div", { dangerouslySetInnerHTML: Ir(t) })
  ] }) }),
  r && /* @__PURE__ */ D.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ D.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ D.jsx("div", { children: /* @__PURE__ */ D.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ D.jsx("span", { children: /* @__PURE__ */ D.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ir(r)
      }
    ) })
  ] }) })
] });
ea.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
};
ea.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const ic = Et.div`
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
`, sc = () => /* @__PURE__ */ D.jsxs(ic, { children: [
  /* @__PURE__ */ D.jsx("div", {}),
  /* @__PURE__ */ D.jsx("div", {}),
  /* @__PURE__ */ D.jsx("div", {}),
  /* @__PURE__ */ D.jsx("div", {})
] }), lc = Et.section``, Kn = Ys(null), ts = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: i,
  dataTransformer: s,
  dataFilter: d,
  maxItems: m
}) => {
  const [{ data: p, loading: f, error: k }, S] = al(), [P, $] = Er([]), _ = { ...e.dataSource, ...t };
  return sr(() => {
    S(_ == null ? void 0 : _.url);
  }, [_ == null ? void 0 : _.url]), sr(() => {
    const w = p == null ? void 0 : p.nodes.map(s), N = w == null ? void 0 : w.filter(
      (F) => d(F, t == null ? void 0 : t.filters)
    );
    $(m ? N == null ? void 0 : N.slice(0, m) : N);
  }, [p]), // Init the context to be used on its childrens
  /* @__PURE__ */ D.jsx(Kn.Provider, { value: { feeds: P }, children: /* @__PURE__ */ D.jsxs(lc, { children: [
    n,
    k ? /* @__PURE__ */ D.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
      f && !(P != null && P.length) && /* @__PURE__ */ D.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ D.jsx(sc, {}) }),
      P != null && P.length ? i : !f && /* @__PURE__ */ D.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
ts.propTypes = {
  renderHeader: l.element,
  renderBody: l.element,
  maxItems: l.number,
  dataTransformer: l.func,
  dataFilter: l.func,
  noFeedText: l.string
};
const ta = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), ra = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), rs = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), ns = l.shape({
  url: l.string,
  filters: l.string
}), uc = l.shape({
  header: ta,
  ctaButton: ra,
  dataSource: ns,
  maxItems: l.number
}), cc = Et.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, os = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, i = { ...e.ctaButton, ...r };
  return /* @__PURE__ */ D.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ D.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ D.jsx("h2", { className: `text-${n.color}`, children: n.text }) }),
        /* @__PURE__ */ D.jsx(cc, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ D.jsx(
          lr,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: n.text,
              text: i.text
            },
            children: /* @__PURE__ */ D.jsx("a", { className: `btn btn-${i.color}`, href: i.url, children: i.text })
          }
        ) })
      ]
    }
  );
};
os.propTypes = {
  defaultProps: uc,
  header: ta,
  ctaButton: ra
};
const as = ({ children: e }) => /* @__PURE__ */ D.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ D.jsx("div", { className: "col", children: e }) });
as.propTypes = {
  children: l.element
};
Et.img`
  width: 100%;
`;
l.oneOf(["heading-hero", "story-hero"]), l.arrayOf(ho), l.string;
l.bool, l.bool, l.bool, l.bool, l.string, l.func, l.node, l.bool, l.string, l.bool;
l.oneOf(["default", "bordered"]).isRequired, l.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, l.number, l.number, l.func.isRequired;
l.oneOf(["small", "large"]), l.string.isRequired, l.string.isRequired, l.string;
l.oneOf(["small", "large"]).isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string.isRequired, l.string, l.string;
Et.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
l.object, l.bool, l.bool, l.func.isRequired;
const dc = Ri(function(e, t) {
  const {
    id: r,
    selected: n,
    title: i,
    selectTab: s,
    leftKeyPressed: d,
    rightKeyPressed: m,
    icon: p,
    gaData: f
  } = e, k = Zs(null);
  Xs(
    t,
    () => ({
      focus() {
        k.current.focus();
      },
      scrollIntoView() {
        var P, $, _, w, N, F, U;
        const G = ((P = k.current) == null ? void 0 : P.offsetWidth) / 2 + k.current.offsetLeft, X = ((_ = ($ = k.current) == null ? void 0 : $.offsetParent) == null ? void 0 : _.scrollLeft) + ((N = (w = k.current) == null ? void 0 : w.offsetParent) == null ? void 0 : N.offsetWidth) / 2;
        (U = (F = k.current) == null ? void 0 : F.offsetParent) == null || U.scrollBy({
          left: G - X
        });
      }
    }),
    []
  );
  const S = (P) => {
    P.keyCode === 37 ? (P.preventDefault(), d()) : P.keyCode === 39 && (P.preventDefault(), m());
  };
  return /* @__PURE__ */ D.jsx(lr, { gaData: { ...f, text: i }, children: /* @__PURE__ */ D.jsxs(
    "a",
    {
      ref: k,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      onClick: (P) => s(P, r, i),
      onKeyDown: S,
      tabIndex: n ? "" : "-1",
      children: [
        i,
        " ",
        p && /* @__PURE__ */ D.jsx("i", { className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} me-1` })
      ]
    }
  ) });
});
dc.propTypes = {
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
const fc = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, is = ({ children: e }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ D.jsx(
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
is.propTypes = {
  children: l.oneOfType([
    l.element,
    l.arrayOf(l.element)
  ]).isRequired
};
const ss = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ D.jsx(lr, { gaData: fc, children: /* @__PURE__ */ D.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ D.jsx(is, { children: t });
};
ss.propTypes = {
  buttonCount: l.number.isRequired
};
l.arrayOf(l.string).isRequired, l.func;
const ls = ({ onClick: e = () => null }) => /* @__PURE__ */ D.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ D.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
ls.propTypes = {
  onClick: l.func
};
const us = ({ onClick: e = () => null }) => /* @__PURE__ */ D.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ D.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
us.propTypes = {
  onClick: l.func
};
const Qa = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, cs = ({ children: e = null }) => /* @__PURE__ */ D.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
cs.propTypes = {
  children: l.arrayOf(l.element)
};
const ds = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ D.jsxs(cs, { children: [
  /* @__PURE__ */ D.jsx(lr, { gaData: { ...Qa, text: "left chevron" }, children: /* @__PURE__ */ D.jsx(us, { onClick: e }) }),
  t,
  /* @__PURE__ */ D.jsx(lr, { gaData: { ...Qa, text: "right chevron" }, children: /* @__PURE__ */ D.jsx(ls, { onClick: e }) })
] });
ds.propTypes = {
  children: l.element,
  onClick: l.func
};
const fs = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ D.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ D.jsx("ul", { className: "glide__slides", children: t });
};
fs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: l.arrayOf(l.object)
};
function ei(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ti(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ei(Object(r), !0).forEach(function(n) {
      hc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ei(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zn(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zn = function(t) {
    return typeof t;
  } : zn = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zn(e);
}
function Qn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function eo(e, t, r) {
  return t && pc(e.prototype, t), e;
}
function hc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function gc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && jo(e, t);
}
function Fr(e) {
  return Fr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Fr(e);
}
function jo(e, t) {
  return jo = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, jo(e, t);
}
function mc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function yc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vc(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yc(e);
}
function bc(e) {
  var t = mc();
  return function() {
    var r = Fr(e), n;
    if (t) {
      var i = Fr(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else
      n = r.apply(this, arguments);
    return vc(this, n);
  };
}
function wc(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Fr(e), e !== null); )
    ;
  return e;
}
function Dn() {
  return typeof Reflect < "u" && Reflect.get ? Dn = Reflect.get : Dn = function(e, t, r) {
    var n = wc(e, t);
    if (n) {
      var i = Object.getOwnPropertyDescriptor(n, t);
      return i.get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
    }
  }, Dn.apply(this, arguments);
}
var xc = {
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
function Sc(e) {
  return parseFloat(e);
}
function Mo(e) {
  return typeof e == "string";
}
function zr(e) {
  var t = zn(e);
  return t === "function" || t === "object" && !!e;
}
function qn(e) {
  return typeof e == "function";
}
function ps(e) {
  return typeof e > "u";
}
function Fo(e) {
  return e.constructor === Array;
}
function kc(e, t, r) {
  var n = {};
  for (var i in t)
    qn(t[i]) ? n[i] = t[i](e, n, r) : Gt("Extension must be a function");
  for (var s in n)
    qn(n[s].mount) && n[s].mount();
  return n;
}
function Ve(e, t, r) {
  Object.defineProperty(e, t, r);
}
function Cc(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function zo(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(i) {
      t.classes.hasOwnProperty(i) && (r.classes[i] = ti(ti({}, e.classes[i]), t.classes[i]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var _c = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Qn(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return eo(e, [{
    key: "on",
    value: function(t, r) {
      if (Fo(t)) {
        for (var n = 0; n < t.length; n++)
          this.on(t[n], r);
        return;
      }
      this.hop.call(this.events, t) || (this.events[t] = []);
      var i = this.events[t].push(r) - 1;
      return {
        remove: function() {
          delete this.events[t][i];
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
      if (Fo(t)) {
        for (var n = 0; n < t.length; n++)
          this.emit(t[n], r);
        return;
      }
      this.hop.call(this.events, t) && this.events[t].forEach(function(i) {
        i(r || {});
      });
    }
  }]), e;
}(), Tc = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Qn(this, e), this._c = {}, this._t = [], this._e = new _c(), this.disabled = !1, this.selector = t, this.settings = zo(xc, r), this.index = this.settings.startAt;
  }
  return eo(e, [{
    key: "mount",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), zr(t) ? this._c = kc(this, t, this._e) : Gt("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return Fo(t) ? this._t = t : Gt("You need to provide a array on `mutate()`"), this;
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
      return this.settings = zo(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this;
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
      zr(t) ? this._o = t : Gt("Options must be an `object` instance.");
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
function Ac(e, t, r) {
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
    make: function(p) {
      var f = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = p, r.emit("run.before", this.move), this.calculate(), r.emit("run", this.move), t.Transition.after(function() {
        f.isStart() && r.emit("run.start", f.move), f.isEnd() && r.emit("run.end", f.move), f.isOffset() && (f._o = !1, r.emit("run.offset", f.move)), r.emit("run.after", f.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var p = this.move, f = this.length, k = p.steps, S = p.direction, P = 1;
      if (S === "=") {
        if (e.settings.bound && st(k) > f) {
          e.index = f;
          return;
        }
        e.index = k;
        return;
      }
      if (S === ">" && k === ">") {
        e.index = f;
        return;
      }
      if (S === "<" && k === "<") {
        e.index = 0;
        return;
      }
      if (S === "|" && (P = e.settings.perView || 1), S === ">" || S === "|" && k === ">") {
        var $ = i(P);
        $ > f && (this._o = !0), e.index = s($, P);
        return;
      }
      if (S === "<" || S === "|" && k === "<") {
        var _ = d(P);
        _ < 0 && (this._o = !0), e.index = m(_, P);
        return;
      }
      Gt("Invalid direction pattern [".concat(S).concat(k, "] has been used"));
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
      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return p ? this._o ? p === "|>" ? this.move.direction === "|" && this.move.steps === ">" : p === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === p : !1 : this._o;
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
  function i(p) {
    var f = e.index;
    return e.isType("carousel") ? f + p : f + (p - f % p);
  }
  function s(p, f) {
    var k = n.length;
    return p <= k ? p : e.isType("carousel") ? p - (k + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? k : 0 : n.isBound() ? k : Math.floor(k / f) * f;
  }
  function d(p) {
    var f = e.index;
    if (e.isType("carousel"))
      return f - p;
    var k = Math.ceil(f / p);
    return (k - 1) * p;
  }
  function m(p, f) {
    var k = n.length;
    return p >= 0 ? p : e.isType("carousel") ? p + (k + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? k : Math.floor(k / f) * f : 0;
  }
  return Ve(n, "move", {
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
    set: function(p) {
      var f = p.substr(1);
      this._m = {
        direction: p.substr(0, 1),
        steps: f ? st(f) ? st(f) : f : 0
      };
    }
  }), Ve(n, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var p = e.settings, f = t.Html.slides.length;
      return this.isBound() ? f - 1 - (st(p.perView) - 1) + st(p.focusAt) : f - 1;
    }
  }), Ve(n, "offset", {
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
function ri() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function to(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, i, s, d, m = 0, p = function() {
    m = r.leading === !1 ? 0 : ri(), n = null, d = e.apply(i, s), n || (i = s = null);
  }, f = function() {
    var k = ri();
    !m && r.leading === !1 && (m = k);
    var S = t - (k - m);
    return i = this, s = arguments, S <= 0 || S > t ? (n && (clearTimeout(n), n = null), m = k, d = e.apply(i, s), n || (i = s = null)) : !n && r.trailing !== !1 && (n = setTimeout(p, S)), d;
  };
  return f.cancel = function() {
    clearTimeout(n), m = 0, n = i = s = null;
  }, f;
}
var In = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function Rc(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(i) {
      for (var s = 0, d = i.length; s < d; s++) {
        var m = i[s].style, p = t.Direction.value;
        s !== 0 ? m[In[p][0]] = "".concat(this.value / 2, "px") : m[In[p][0]] = "", s !== i.length - 1 ? m[In[p][1]] = "".concat(this.value / 2, "px") : m[In[p][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(i) {
      for (var s = 0, d = i.length; s < d; s++) {
        var m = i[s].style;
        m.marginLeft = "", m.marginRight = "";
      }
    }
  };
  return Ve(n, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return st(e.settings.gap);
    }
  }), Ve(n, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return n.value * t.Sizes.length;
    }
  }), Ve(n, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var i = e.settings.perView;
      return n.value * (i - 1) / i;
    }
  }), r.on(["build.after", "update"], to(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function hs(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function Do(e) {
  return Array.prototype.slice.call(e);
}
var Oc = '[data-glide-el="track"]';
function Ec(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(Oc), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = Do(this.wrapper.children).filter(function(i) {
        return !i.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return Ve(n, "root", {
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
    set: function(i) {
      Mo(i) && (i = document.querySelector(i)), i !== null ? n._r = i : Gt("Root element must be a existing Html node");
    }
  }), Ve(n, "track", {
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
    set: function(i) {
      n._t = i;
    }
  }), Ve(n, "wrapper", {
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
function Ic(e, t, r) {
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
  return Ve(n, "value", {
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
    set: function(i) {
      zr(i) ? (i.before = st(i.before), i.after = st(i.after)) : i = st(i), n._v = i;
    }
  }), Ve(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var i = n.value, s = e.settings.perView;
      return zr(i) ? i.before / s + i.after / s : i * 2 / s;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function Nc(e, t, r) {
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
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = s, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: i.value
        });
      });
    }
  };
  return Ve(n, "offset", {
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
    set: function(i) {
      n._o = ps(i) ? 0 : st(i);
    }
  }), Ve(n, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), Ve(n, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var i = this.offset, s = this.translate;
      return t.Direction.is("rtl") ? s + i : s - i;
    }
  }), r.on(["build.before", "run"], function() {
    n.make();
  }), n;
}
function Pc(e, t, r) {
  var n = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var i = "".concat(this.slideWidth, "px"), s = t.Html.slides, d = 0; d < s.length; d++)
        s[d].style.width = i;
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
      for (var i = t.Html.slides, s = 0; s < i.length; s++)
        i[s].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return Ve(n, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), Ve(n, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), Ve(n, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow;
    }
  }), Ve(n, "slideWidth", {
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
function Lc(e, t, r) {
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
      var i = e.settings.classes, s = t.Html.slides[e.index];
      s && (s.classList.add(i.slide.active), hs(s).forEach(function(d) {
        d.classList.remove(i.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var i = e.settings.classes, s = i.type, d = i.slide;
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
function jc(e, t, r) {
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
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = t.Html.slides, d = e.settings, m = d.perView, p = d.classes, f = d.cloningRatio;
      if (s.length > 0)
        for (var k = +!!e.settings.peek, S = m + k + Math.round(m / 2), P = s.slice(0, S).reverse(), $ = s.slice(S * -1), _ = 0; _ < Math.max(f, Math.floor(m / s.length)); _++) {
          for (var w = 0; w < P.length; w++) {
            var N = P[w].cloneNode(!0);
            N.classList.add(p.slide.clone), i.push(N);
          }
          for (var F = 0; F < $.length; F++) {
            var U = $[F].cloneNode(!0);
            U.classList.add(p.slide.clone), i.unshift(U);
          }
        }
      return i;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var i = this.items, s = t.Html, d = s.wrapper, m = s.slides, p = Math.floor(i.length / 2), f = i.slice(0, p).reverse(), k = i.slice(p * -1).reverse(), S = "".concat(t.Sizes.slideWidth, "px"), P = 0; P < k.length; P++)
        d.appendChild(k[P]);
      for (var $ = 0; $ < f.length; $++)
        d.insertBefore(f[$], m[0]);
      for (var _ = 0; _ < i.length; _++)
        i[_].style.width = S;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var i = this.items, s = 0; s < i.length; s++)
        t.Html.wrapper.removeChild(i[s]);
    }
  };
  return Ve(n, "grow", {
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
    Qn(this, e), this.listeners = t;
  }
  return eo(e, [{
    key: "on",
    value: function(t, r, n) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      Mo(t) && (t = [t]);
      for (var s = 0; s < t.length; s++)
        this.listeners[t[s]] = n, r.addEventListener(t[s], this.listeners[t[s]], i);
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
      Mo(t) && (t = [t]);
      for (var i = 0; i < t.length; i++)
        r.removeEventListener(t[i], this.listeners[t[i]], n);
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
function Mc(e, t, r) {
  var n = new ur(), i = {
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
      n.on("resize", window, to(function() {
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
    i.unbind(), n.destroy();
  }), i;
}
var Fc = ["ltr", "rtl"], zc = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Dc(e, t, r) {
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
    resolve: function(i) {
      var s = i.slice(0, 1);
      return this.is("rtl") ? i.split(s).join(zc[s]) : i;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(i) {
      return this.value === i;
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
  return Ve(n, "value", {
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
    set: function(i) {
      Fc.indexOf(i) > -1 ? n._v = i : Gt("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function $c(e, t) {
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
function Uc(e, t) {
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
function Bc(e, t) {
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
function Wc(e, t) {
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
        return zr(n) ? r - n.before : r - n;
      }
      return r;
    }
  };
}
function Hc(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      var n = t.Gaps.value, i = t.Sizes.width, s = e.settings.focusAt, d = t.Sizes.slideWidth;
      return s === "center" ? r - (i / 2 - d / 2) : r - d * s - n * s;
    }
  };
}
function Vc(e, t, r) {
  var n = [Uc, Bc, Wc, Hc].concat(e._t, [$c]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(i) {
      for (var s = 0; s < n.length; s++) {
        var d = n[s];
        qn(d) && qn(d().modify) ? i = d(e, t, r).modify(i) : Gt("Transformer should be a function that returns an object with `modify()` method");
      }
      return i;
    }
  };
}
function qc(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(i) {
      var s = Vc(e, t).mutate(i), d = "translate3d(".concat(-1 * s, "px, 0px, 0px)");
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
      var i = t.Sizes.length, s = e.index, d = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i + (s - d) : (s + d) % i;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var i = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i * -1 : i;
    }
  };
  return r.on("move", function(i) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return n.set(i.movement);
    t.Transition.after(function() {
      r.emit("translate.jump"), n.set(t.Sizes.slideWidth * e.index);
    });
    var s = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return n.set(s - t.Translate.getTravelDistance());
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function Gc(e, t, r) {
  var n = !1, i = {
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
  return Ve(i, "duration", {
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
    i.set();
  }), r.on(["build.before", "resize", "translate.jump"], function() {
    i.disable();
  }), r.on("run", function() {
    i.enable();
  }), r.on("destroy", function() {
    i.remove();
  }), i;
}
var gs = !1;
try {
  var ni = Object.defineProperty({}, "passive", {
    get: function() {
      gs = !0;
    }
  });
  window.addEventListener("testPassive", null, ni), window.removeEventListener("testPassive", null, ni);
} catch {
}
var $o = gs, Nn = ["touchstart", "mousedown"], oi = ["touchmove", "mousemove"], ai = ["touchend", "touchcancel", "mouseup", "mouseleave"], ii = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Yc(e, t, r) {
  var n = new ur(), i = 0, s = 0, d = 0, m = !1, p = $o ? {
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
    start: function(k) {
      if (!m && !e.disabled) {
        this.disable();
        var S = this.touches(k);
        i = null, s = st(S.pageX), d = st(S.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(k) {
      if (!e.disabled) {
        var S = e.settings, P = S.touchAngle, $ = S.touchRatio, _ = S.classes, w = this.touches(k), N = st(w.pageX) - s, F = st(w.pageY) - d, U = Math.abs(N << 2), G = Math.abs(F << 2), X = Math.sqrt(U + G), C = Math.sqrt(G);
        if (i = Math.asin(C / X), i * 180 / Math.PI < P)
          k.stopPropagation(), t.Move.make(N * Sc($)), t.Html.root.classList.add(_.dragging), r.emit("swipe.move");
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
    end: function(k) {
      if (!e.disabled) {
        var S = e.settings, P = S.perSwipe, $ = S.touchAngle, _ = S.classes, w = this.touches(k), N = this.threshold(k), F = w.pageX - s, U = i * 180 / Math.PI;
        this.enable(), F > N && U < $ ? t.Run.make(t.Direction.resolve("".concat(P, "<"))) : F < -N && U < $ ? t.Run.make(t.Direction.resolve("".concat(P, ">"))) : t.Move.make(), t.Html.root.classList.remove(_.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var k = this, S = e.settings, P = S.swipeThreshold, $ = S.dragThreshold;
      P && n.on(Nn[0], t.Html.wrapper, function(_) {
        k.start(_);
      }, p), $ && n.on(Nn[1], t.Html.wrapper, function(_) {
        k.start(_);
      }, p);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(Nn[0], t.Html.wrapper, p), n.off(Nn[1], t.Html.wrapper, p);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var k = this;
      n.on(oi, t.Html.wrapper, to(function(S) {
        k.move(S);
      }, e.settings.throttle), p);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(oi, t.Html.wrapper, p);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var k = this;
      n.on(ai, t.Html.wrapper, function(S) {
        k.end(S);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(ai, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(k) {
      return ii.indexOf(k.type) > -1 ? k : k.touches[0] || k.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(k) {
      var S = e.settings;
      return ii.indexOf(k.type) > -1 ? S.dragThreshold : S.swipeThreshold;
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
    f.unbindSwipeStart(), f.unbindSwipeMove(), f.unbindSwipeEnd(), n.destroy();
  }), f;
}
function Zc(e, t, r) {
  var n = new ur(), i = {
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
    i.unbind(), n.destroy();
  }), i;
}
function Xc(e, t, r) {
  var n = new ur(), i = !1, s = !1, d = {
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
      if (s = !0, !i) {
        for (var m = 0; m < this.items.length; m++)
          this.items[m].draggable = !1;
        i = !0;
      }
      return this;
    },
    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function() {
      if (s = !1, i) {
        for (var m = 0; m < this.items.length; m++)
          this.items[m].draggable = !0;
        i = !1;
      }
      return this;
    }
  };
  return Ve(d, "items", {
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
var Jc = '[data-glide-el="controls[nav]"]', na = '[data-glide-el^="controls"]', Kc = "".concat(na, ' [data-glide-dir*="<"]'), Qc = "".concat(na, ' [data-glide-dir*=">"]');
function ed(e, t, r) {
  var n = new ur(), i = $o ? {
    passive: !0
  } : !1, s = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(Jc), this._c = t.Html.root.querySelectorAll(na), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(Kc),
        next: t.Html.root.querySelectorAll(Qc)
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
      var m = e.settings, p = d[e.index];
      p && (p.classList.add(m.classes.nav.active), hs(p).forEach(function(f) {
        f.classList.remove(m.classes.nav.active);
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
      for (var d = e.settings, m = arguments.length, p = new Array(m), f = 0; f < m; f++)
        p[f] = arguments[f];
      p.forEach(function(k) {
        Do(k).forEach(function(S) {
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
      for (var d = e.settings, m = arguments.length, p = new Array(m), f = 0; f < m; f++)
        p[f] = arguments[f];
      p.forEach(function(k) {
        Do(k).forEach(function(S) {
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
        n.on("click", d[m], this.click), n.on("touchstart", d[m], this.click, i);
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
      !$o && d.type === "touchstart" && d.preventDefault();
      var m = d.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(m));
    }
  };
  return Ve(s, "items", {
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
function td(e, t, r) {
  var n = new ur(), i = {
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
    i.unbind();
  }), r.on("update", function() {
    i.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), i;
}
function rd(e, t, r) {
  var n = new ur(), i = {
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
      this._e && (this.enable(), e.settings.autoplay && ps(this._i) && (this._i = setInterval(function() {
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
  return Ve(i, "time", {
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
    i.unbind();
  }), r.on(["run.before", "swipe.start", "update"], function() {
    i.stop();
  }), r.on(["pause", "destroy"], function() {
    i.disable(), i.stop();
  }), r.on(["run.after", "swipe.end"], function() {
    i.start();
  }), r.on(["play"], function() {
    i.enable(), i.start();
  }), r.on("update", function() {
    i.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), i;
}
function si(e) {
  return zr(e) ? Cc(e) : (Gt("Breakpoints option must be an object"), {});
}
function nd(e, t, r) {
  var n = new ur(), i = e.settings, s = si(i.breakpoints), d = Object.assign({}, i), m = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(p) {
      if (typeof window.matchMedia < "u") {
        for (var f in p)
          if (p.hasOwnProperty(f) && window.matchMedia("(max-width: ".concat(f, "px)")).matches)
            return p[f];
      }
      return d;
    }
  };
  return Object.assign(i, m.match(s)), n.on("resize", window, to(function() {
    e.settings = zo(i, m.match(s));
  }, e.settings.throttle)), r.on("update", function() {
    s = si(s), d = Object.assign({}, i);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), m;
}
var od = {
  // Required
  Html: Ec,
  Translate: qc,
  Transition: Gc,
  Direction: Dc,
  Peek: Ic,
  Sizes: Pc,
  Gaps: Rc,
  Move: Nc,
  Clones: jc,
  Resize: Mc,
  Build: Lc,
  Run: Ac,
  // Optional
  Swipe: Yc,
  Images: Zc,
  Anchors: Xc,
  Controls: ed,
  Keyboard: td,
  Autoplay: rd,
  Breakpoints: nd
}, ad = /* @__PURE__ */ function(e) {
  gc(r, e);
  var t = bc(r);
  function r() {
    return Qn(this, r), t.apply(this, arguments);
  }
  return eo(r, [{
    key: "mount",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Dn(Fr(r.prototype), "mount", this).call(this, Object.assign({}, od, n));
    }
  }]), r;
}(Tc);
function id(e) {
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
function sd(e = 1, t, r = !0, n) {
  const { perViewSm: i, perViewMd: s, perViewLg: d } = id(e), m = r ? 24 : 0, p = r ? { before: 48, after: 48 } : 0, f = r ? { before: 124, after: 124 } : 0;
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
    peek: f,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: t ? null : {
      576: {
        // BS4 sm
        perView: i,
        peek: p
      },
      768: {
        // BS4 md
        perView: s,
        peek: p
      },
      992: {
        // BS4 lg
        perView: d,
        peek: p
      },
      1260: {
        // BS4 xl
        perView: d,
        peek: p
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
function ld(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), i = e.querySelector(".glide__arrow--next"), s = e.querySelector(".glide__track"), d = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || i)) return;
  const m = ["slider-start", "slider-mid", "slider-end"], p = "glide__arrow--disabled";
  s == null || s.classList.remove(...m), d == null || d.classList.remove(...m), t === 0 ? (s == null || s.classList.add("slider-start"), d == null || d.classList.add("slider-start"), n == null || n.classList.add(p), n == null || n.setAttribute("aria-disabled", "true"), i == null || i.classList.remove(p), i == null || i.setAttribute("aria-disabled", "false")) : t >= r - 1 ? (s == null || s.classList.add("slider-end"), d == null || d.classList.add("slider-end"), n == null || n.classList.remove(p), n == null || n.setAttribute("aria-disabled", "false"), i == null || i.classList.add(p), i == null || i.setAttribute("aria-disabled", "true")) : (s == null || s.classList.add("slider-mid"), d == null || d.classList.add("slider-mid"), n == null || n.classList.remove(p), i == null || i.classList.remove(p), n == null || n.setAttribute("aria-disabled", "false"), i == null || i.setAttribute("aria-disabled", "false"));
}
function ud(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), i = t, s = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((d, m) => {
    m < i || m > s ? (d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("inert", "")) : (d.setAttribute("aria-hidden", "false"), d.removeAttribute("tabindex"), d.removeAttribute("inert"));
  });
}
function cd({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: i,
  hasPeek: s = !0,
  isDraggable: d
}) {
  const m = sd(t, n, s, d), p = new ad(`#${e}`, m);
  let f = document.querySelector(`#${e}`);
  return f.addEventListener("keyup", (k) => {
    const S = k;
    S.keyCode === 39 ? p.go(">") : S.keyCode === 37 ? p.go("<") : S.keyCode === 13 && p.go(document.activeElement.dataset.glideDir);
  }), p.on("build.before", () => {
    f = document.querySelector(`#${e}`), f && f.classList.add("slider-start");
  }), p.on("move", () => {
    if (f = document.querySelector(`#${e}`), !f) return;
    const k = p.index;
    ud(f, k, t);
    const S = f.querySelector(".navigation-slider"), P = f.querySelector(".image-navigator-images");
    if (S && P) {
      const $ = S.querySelectorAll(
        ".bullet-image-container"
      ), _ = S.clientWidth, w = 82, N = $[k], F = P.getBoundingClientRect().x, U = S.getBoundingClientRect().x - F, G = N.getBoundingClientRect().x - F, X = N.getBoundingClientRect().x + N.getBoundingClientRect().width - F;
      if (k === 0 || G <= 0 + w)
        S.style.left = `${U - G + w}px`;
      else if (X >= _ - w) {
        const C = X - _;
        S.style.left = `${U - C - w}px`;
      }
    }
    ld(f, k, r), f.setAttribute("data-current-index", k), i && i(k);
  }), p.mount(), p;
}
function dd(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const ms = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: i = "",
  CustomNavComponent: s,
  role: d,
  ariaLabelledBy: m,
  isFullWidth: p,
  removeSideBackground: f = !1,
  hasNavButtons: k = !0,
  hasPositionIndicators: S = !0,
  imageAutoSize: P = !0,
  onItemClick: $ = () => null,
  hasPeek: _ = !0,
  isDraggable: w = !0,
  hasShadow: N = !0
}) => {
  const F = `glide-${Math.ceil(Math.random() * 1e4)}`, U = dd(n.length, e);
  return sr(() => {
    cd({
      instanceName: F,
      perView: e,
      buttonCount: U,
      isFullWidth: p,
      onItemClick: $,
      hasPeek: _,
      isDraggable: w
    });
  }, [
    F,
    e,
    U,
    p,
    $,
    _,
    w
  ]), /* @__PURE__ */ D.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": m,
      className: `glide ${i}`,
      id: F,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": f,
      "data-image-auto-size": P,
      "data-has-shadow": N,
      children: [
        /* @__PURE__ */ D.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ D.jsx(fs, { carouselItems: n }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ D.jsx(s, { instanceName: F })
        ) : /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
          S && /* @__PURE__ */ D.jsx(ss, { buttonCount: U }),
          k && /* @__PURE__ */ D.jsx(ds, {})
        ] })
      ]
    }
  );
};
ms.propTypes = {
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
const fd = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: i,
  eventLocation: s,
  eventTime: d,
  buttons: m,
  linkLabel: p,
  linkUrl: f,
  tags: k
}, S, P, $) => {
  var _;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ D.jsx(
      Lt,
      {
        type: S,
        horizontal: P,
        image: t,
        imageAltText: r,
        title: n,
        body: i,
        eventFormat: $,
        eventLocation: s,
        eventTime: d,
        buttons: m,
        linkLabel: p,
        linkUrl: f || ((_ = m == null ? void 0 : m[0]) == null ? void 0 : _.href),
        tags: k
      }
    )
  };
}, ys = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: i = !1,
  width: s = void 0,
  maxWidth: d = void 0,
  imageAutoSize: m = !0
}) => {
  const p = parseInt(`${e}`, 10), [f, k] = Er(p), S = 1024, P = 768;
  sr(() => {
    const w = () => {
      const N = window.innerWidth;
      let F;
      switch (p) {
        case 3:
          N > S ? F = 3 : N > P ? F = 2 : F = 1;
          break;
        case 2:
          F = N < P ? 1 : 2;
          break;
        default:
          F = 1;
          break;
      }
      k(F);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, [p]);
  const $ = t.map(
    (w) => fd(w, r, i, n)
  ), _ = t.length > f;
  return /* @__PURE__ */ D.jsx(
    ms,
    {
      perView: +f,
      maxWidth: d,
      width: s,
      carouselItems: $,
      cssClass: "aligned-carousel",
      imageAutoSize: m,
      removeSideBackground: t.length <= f,
      hasPositionIndicators: _,
      hasNavButtons: _,
      isDraggable: _,
      hasShadow: !0
    }
  );
};
ys.propTypes = {
  perView: l.string.isRequired,
  cardItems: l.arrayOf(
    l.shape({
      title: l.string.isRequired,
      content: l.string,
      eventLocation: l.string,
      eventTime: l.string,
      image: l.string,
      imageAltText: l.string,
      buttons: Lt.propTypes.buttons,
      linkLabel: l.string,
      linkUrl: l.string,
      tags: Lt.propTypes.tags
    })
  ).isRequired,
  cardType: Lt.propTypes.type,
  cardEventFormat: Lt.propTypes.eventFormat,
  cardHorizontal: Lt.propTypes.horizontal,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
l.number.isRequired, l.arrayOf(l.object).isRequired, l.string, l.string, l.bool;
const Gn = {
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
l.string, Gn.imageItems, Gn.hasContent;
Gn.imageItems.isRequired, Gn.hasContent, l.string, l.string, l.bool;
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
var li = Ei;
li.createRoot, li.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .75rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
function oa({
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
var vs = { exports: {} }, ko, ui;
function pd() {
  if (ui) return ko;
  ui = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ko = e, ko;
}
var Co, ci;
function hd() {
  if (ci) return Co;
  ci = 1;
  var e = pd();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Co = function() {
    function n(d, m, p, f, k, S) {
      if (S !== e) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    n.isRequired = n;
    function i() {
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
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Co;
}
vs.exports = hd()();
var gd = vs.exports;
const di = /* @__PURE__ */ Ii(gd), on = {
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
}, fi = ["newsUnits", "interests", "audiences", "eventTypes"], md = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < fi.length; n += 1) {
    const i = fi[n];
    for (let s = 0; s < r.length; s += 1) {
      const d = r[s], p = (e[i] || "").match(new RegExp(d, "gi"));
      if ((p == null ? void 0 : p.length) > 0) return !0;
    }
  }
  return !1;
}, pi = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, yd = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_alt,
  title: pi(e.title, 80),
  content: pi(e == null ? void 0 : e.clas_teaser, 140),
  buttonLink: e.path,
  interests: e.interests,
  newsUnits: e.news_units,
  eventTypes: e.event_types,
  alias: e.path
  // Used for card link in title, matches component-events data transformer
}), _r = ({
  children: e,
  header: t,
  ctaButton: r,
  dataSource: n,
  maxItems: i
}) => {
  var m;
  const s = (m = n == null ? void 0 : n.filters) == null ? void 0 : m.replace(/_/g, " "), d = { ...n, filters: s };
  return /* @__PURE__ */ Qe.jsx(
    ts,
    {
      renderHeader: t && r ? /* @__PURE__ */ Qe.jsx(
        os,
        {
          header: t,
          ctaButton: r,
          defaultProps: on
        }
      ) : null,
      renderBody: /* @__PURE__ */ Qe.jsx(as, { children: e }),
      dataTransformer: yd,
      dataFilter: md,
      dataSource: d,
      defaultProps: on,
      noFeedText: "No news to show.",
      maxItems: i
    }
  );
};
_r.propTypes = {
  header: ta,
  ctaButton: ra,
  dataSource: ns,
  maxItems: di.number,
  children: di.element
};
var bs = { exports: {} }, Le = {};
var hi;
function vd() {
  if (hi) return Le;
  hi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), $ = Symbol.for("react.client.reference");
  function _(w) {
    if (typeof w == "object" && w !== null) {
      var N = w.$$typeof;
      switch (N) {
        case e:
          switch (w = w.type, w) {
            case r:
            case i:
            case n:
            case p:
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case d:
                case m:
                case S:
                case k:
                  return w;
                case s:
                  return w;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return Le.ContextConsumer = s, Le.ContextProvider = d, Le.Element = e, Le.ForwardRef = m, Le.Fragment = r, Le.Lazy = S, Le.Memo = k, Le.Portal = t, Le.Profiler = i, Le.StrictMode = n, Le.Suspense = p, Le.SuspenseList = f, Le.isContextConsumer = function(w) {
    return _(w) === s;
  }, Le.isContextProvider = function(w) {
    return _(w) === d;
  }, Le.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Le.isForwardRef = function(w) {
    return _(w) === m;
  }, Le.isFragment = function(w) {
    return _(w) === r;
  }, Le.isLazy = function(w) {
    return _(w) === S;
  }, Le.isMemo = function(w) {
    return _(w) === k;
  }, Le.isPortal = function(w) {
    return _(w) === t;
  }, Le.isProfiler = function(w) {
    return _(w) === i;
  }, Le.isStrictMode = function(w) {
    return _(w) === n;
  }, Le.isSuspense = function(w) {
    return _(w) === p;
  }, Le.isSuspenseList = function(w) {
    return _(w) === f;
  }, Le.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === i || w === n || w === p || w === f || w === P || typeof w == "object" && w !== null && (w.$$typeof === S || w.$$typeof === k || w.$$typeof === d || w.$$typeof === s || w.$$typeof === m || w.$$typeof === $ || w.getModuleId !== void 0);
  }, Le.typeOf = _, Le;
}
bs.exports = vd();
var ws = bs.exports;
function bd(e) {
  function t(j, E, L, B, y) {
    for (var Y = 0, T = 0, re = 0, K = 0, Q, V, ne = 0, le = 0, ee, se = ee = Q = 0, te = 0, fe = 0, Fe = 0, ue = 0, Xe = L.length, $e = Xe - 1, he, W = "", oe = "", tt = "", Je = "", _e; te < Xe; ) {
      if (V = L.charCodeAt(te), te === $e && T + K + re + Y !== 0 && (T !== 0 && (V = T === 47 ? 10 : 47), K = re = Y = 0, Xe++, $e++), T + K + re + Y === 0) {
        if (te === $e && (0 < fe && (W = W.replace(P, "")), 0 < W.trim().length)) {
          switch (V) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              W += L.charAt(te);
          }
          V = 59;
        }
        switch (V) {
          case 123:
            for (W = W.trim(), Q = W.charCodeAt(0), ee = 1, ue = ++te; te < Xe; ) {
              switch (V = L.charCodeAt(te)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (V = L.charCodeAt(te + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (se = te + 1; se < $e; ++se)
                          switch (L.charCodeAt(se)) {
                            case 47:
                              if (V === 42 && L.charCodeAt(se - 1) === 42 && te + 2 !== se) {
                                te = se + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (V === 47) {
                                te = se + 1;
                                break e;
                              }
                          }
                        te = se;
                      }
                  }
                  break;
                case 91:
                  V++;
                case 40:
                  V++;
                case 34:
                case 39:
                  for (; te++ < $e && L.charCodeAt(te) !== V; )
                    ;
              }
              if (ee === 0) break;
              te++;
            }
            switch (ee = L.substring(ue, te), Q === 0 && (Q = (W = W.replace(S, "").trim()).charCodeAt(0)), Q) {
              case 64:
                switch (0 < fe && (W = W.replace(P, "")), V = W.charCodeAt(1), V) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = E;
                    break;
                  default:
                    fe = Ze;
                }
                if (ee = t(E, fe, ee, V, y + 1), ue = ee.length, 0 < ke && (fe = r(Ze, W, Fe), _e = m(3, ee, fe, E, we, pe, ue, V, y, B), W = fe.join(""), _e !== void 0 && (ue = (ee = _e.trim()).length) === 0 && (V = 0, ee = "")), 0 < ue) switch (V) {
                  case 115:
                    W = W.replace(de, d);
                  case 100:
                  case 109:
                  case 45:
                    ee = W + "{" + ee + "}";
                    break;
                  case 107:
                    W = W.replace(U, "$1 $2"), ee = W + "{" + ee + "}", ee = xe === 1 || xe === 2 && s("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                    break;
                  default:
                    ee = W + ee, B === 112 && (ee = (oe += ee, ""));
                }
                else ee = "";
                break;
              default:
                ee = t(E, r(E, W, Fe), ee, B, y + 1);
            }
            tt += ee, ee = Fe = fe = se = Q = 0, W = "", V = L.charCodeAt(++te);
            break;
          case 125:
          case 59:
            if (W = (0 < fe ? W.replace(P, "") : W).trim(), 1 < (ue = W.length)) switch (se === 0 && (Q = W.charCodeAt(0), Q === 45 || 96 < Q && 123 > Q) && (ue = (W = W.replace(" ", ":")).length), 0 < ke && (_e = m(1, W, E, j, we, pe, oe.length, B, y, B)) !== void 0 && (ue = (W = _e.trim()).length) === 0 && (W = "\0\0"), Q = W.charCodeAt(0), V = W.charCodeAt(1), Q) {
              case 0:
                break;
              case 64:
                if (V === 105 || V === 99) {
                  Je += W + L.charAt(te);
                  break;
                }
              default:
                W.charCodeAt(ue - 1) !== 58 && (oe += i(W, Q, V, W.charCodeAt(2)));
            }
            Fe = fe = se = Q = 0, W = "", V = L.charCodeAt(++te);
        }
      }
      switch (V) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + Q === 0 && B !== 107 && 0 < W.length && (fe = 1, W += "\0"), 0 < ke * qe && m(0, W, E, j, we, pe, oe.length, B, y, B), pe = 1, we++;
          break;
        case 59:
        case 125:
          if (T + K + re + Y === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, he = L.charAt(te), V) {
            case 9:
            case 32:
              if (K + Y + T === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  V !== 32 && (he = " ");
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
              K + T + Y === 0 && (fe = Fe = 1, he = "\f" + he);
              break;
            case 108:
              if (K + T + Y + Te === 0 && 0 < se) switch (te - se) {
                case 2:
                  ne === 112 && L.charCodeAt(te - 3) === 58 && (Te = ne);
                case 8:
                  le === 111 && (Te = le);
              }
              break;
            case 58:
              K + T + Y === 0 && (se = te);
              break;
            case 44:
              T + re + K + Y === 0 && (fe = 1, he += "\r");
              break;
            case 34:
            case 39:
              T === 0 && (K = K === V ? 0 : K === 0 ? V : K);
              break;
            case 91:
              K + T + re === 0 && Y++;
              break;
            case 93:
              K + T + re === 0 && Y--;
              break;
            case 41:
              K + T + Y === 0 && re--;
              break;
            case 40:
              if (K + T + Y === 0) {
                if (Q === 0) switch (2 * ne + 3 * le) {
                  case 533:
                    break;
                  default:
                    Q = 1;
                }
                re++;
              }
              break;
            case 64:
              T + re + K + Y + se + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < K + Y + re)) switch (T) {
                case 0:
                  switch (2 * V + 3 * L.charCodeAt(te + 1)) {
                    case 235:
                      T = 47;
                      break;
                    case 220:
                      ue = te, T = 42;
                  }
                  break;
                case 42:
                  V === 47 && ne === 42 && ue + 2 !== te && (L.charCodeAt(ue + 2) === 33 && (oe += L.substring(ue, te + 1)), he = "", T = 0);
              }
          }
          T === 0 && (W += he);
      }
      le = ne, ne = V, te++;
    }
    if (ue = oe.length, 0 < ue) {
      if (fe = E, 0 < ke && (_e = m(2, oe, fe, j, we, pe, ue, B, y, B), _e !== void 0 && (oe = _e).length === 0)) return Je + oe + tt;
      if (oe = fe.join(",") + "{" + oe + "}", xe * Te !== 0) {
        switch (xe !== 2 || s(oe, 2) || (Te = 0), Te) {
          case 111:
            oe = oe.replace(X, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(G, "::-webkit-input-$1") + oe.replace(G, "::-moz-$1") + oe.replace(G, ":-ms-input-$1") + oe;
        }
        Te = 0;
      }
    }
    return Je + oe + tt;
  }
  function r(j, E, L) {
    var B = E.trim().split(N);
    E = B;
    var y = B.length, Y = j.length;
    switch (Y) {
      case 0:
      case 1:
        var T = 0;
        for (j = Y === 0 ? "" : j[0] + " "; T < y; ++T)
          E[T] = n(j, E[T], L).trim();
        break;
      default:
        var re = T = 0;
        for (E = []; T < y; ++T)
          for (var K = 0; K < Y; ++K)
            E[re++] = n(j[K] + " ", B[T], L).trim();
    }
    return E;
  }
  function n(j, E, L) {
    var B = E.charCodeAt(0);
    switch (33 > B && (B = (E = E.trim()).charCodeAt(0)), B) {
      case 38:
        return E.replace(F, "$1" + j.trim());
      case 58:
        return j.trim() + E.replace(F, "$1" + j.trim());
      default:
        if (0 < 1 * L && 0 < E.indexOf("\f")) return E.replace(F, (j.charCodeAt(0) === 58 ? "" : "$1") + j.trim());
    }
    return j + E;
  }
  function i(j, E, L, B) {
    var y = j + ";", Y = 2 * E + 3 * L + 4 * B;
    if (Y === 944) {
      j = y.indexOf(":", 9) + 1;
      var T = y.substring(j, y.length - 1).trim();
      return T = y.substring(0, j).trim() + T + ";", xe === 1 || xe === 2 && s(T, 1) ? "-webkit-" + T + T : T;
    }
    if (xe === 0 || xe === 2 && !s(y, 1)) return y;
    switch (Y) {
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
        if (0 < y.indexOf("image-set(", 11)) return y.replace(Ye, "$1-webkit-$2") + y;
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
        return T = y.substring(y.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + T + "-webkit-" + y + "-ms-flex-pack" + T + y;
      case 1005:
        return _.test(y) ? y.replace($, ":-webkit-") + y.replace($, ":-moz-") + y : y;
      case 1e3:
        switch (T = y.substring(13).trim(), E = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(E)) {
          case 226:
            T = y.replace(C, "tb");
            break;
          case 232:
            T = y.replace(C, "tb-rl");
            break;
          case 220:
            T = y.replace(C, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + T + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (E = (y = j).length - 10, T = (y.charCodeAt(E) === 33 ? y.substring(0, E) : y).substring(j.indexOf(":", 7) + 1).trim(), Y = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
          case 203:
            if (111 > T.charCodeAt(8)) break;
          case 115:
            y = y.replace(T, "-webkit-" + T) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(T, "-webkit-" + (102 < Y ? "inline-" : "") + "box") + ";" + y.replace(T, "-webkit-" + T) + ";" + y.replace(T, "-ms-" + T + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return T = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + T + "-ms-flex-" + T + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(Ce, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(Ce, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (De.test(j) === !0) return (T = j.substring(j.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(j.replace("stretch", "fill-available"), E, L, B).replace(":fill-available", ":stretch") : y.replace(T, "-webkit-" + T) + y.replace(T, "-moz-" + T.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, L + B === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + y;
    }
    return y;
  }
  function s(j, E) {
    var L = j.indexOf(E === 1 ? ":" : "{"), B = j.substring(0, E !== 3 ? L : 10);
    return L = j.substring(L + 1, j.length - 1), Me(E !== 2 ? B : B.replace(Ee, "$1"), L, E);
  }
  function d(j, E) {
    var L = i(E, E.charCodeAt(0), E.charCodeAt(1), E.charCodeAt(2));
    return L !== E + ";" ? L.replace(ye, " or ($1)").substring(4) : "(" + E + ")";
  }
  function m(j, E, L, B, y, Y, T, re, K, Q) {
    for (var V = 0, ne = E, le; V < ke; ++V)
      switch (le = Ie[V].call(k, j, ne, L, B, y, Y, T, re, K, Q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = le;
      }
    if (ne !== E) return ne;
  }
  function p(j) {
    switch (j) {
      case void 0:
      case null:
        ke = Ie.length = 0;
        break;
      default:
        if (typeof j == "function") Ie[ke++] = j;
        else if (typeof j == "object") for (var E = 0, L = j.length; E < L; ++E)
          p(j[E]);
        else qe = !!j | 0;
    }
    return p;
  }
  function f(j) {
    return j = j.prefix, j !== void 0 && (Me = null, j ? typeof j != "function" ? xe = 1 : (xe = 2, Me = j) : xe = 0), f;
  }
  function k(j, E) {
    var L = j;
    if (33 > L.charCodeAt(0) && (L = L.trim()), Ge = L, L = [Ge], 0 < ke) {
      var B = m(-1, E, L, L, we, pe, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (E = B);
    }
    var y = t(Ze, L, E, 0, 0);
    return 0 < ke && (B = m(-2, y, L, L, we, pe, y.length, 0, 0, 0), B !== void 0 && (y = B)), Ge = "", Te = 0, pe = we = 1, y;
  }
  var S = /^\0+/g, P = /[\0\r\f]/g, $ = /: */g, _ = /zoo|gra/, w = /([,: ])(transform)/g, N = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, X = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, de = /\(\s*(.*)\s*\)/g, ye = /([\s\S]*?);/g, Ce = /-self|flex-/g, Ee = /[^]*?(:[rp][el]a[\w-]+)[^]*/, De = /stretch|:\s*\w+\-(?:conte|avail)/, Ye = /([^-])(image-set\()/, pe = 1, we = 1, Te = 0, xe = 1, Ze = [], Ie = [], ke = 0, Me = null, qe = 0, Ge = "";
  return k.use = p, k.set = f, e !== void 0 && f(e), k;
}
var wd = {
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
function xd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Sd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gi = /* @__PURE__ */ xd(
  function(e) {
    return Sd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), xs = { exports: {} }, Oe = {};
var mi;
function kd() {
  if (mi) return Oe;
  mi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, k = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function G(C) {
    if (typeof C == "object" && C !== null) {
      var de = C.$$typeof;
      switch (de) {
        case t:
          switch (C = C.type, C) {
            case p:
            case f:
            case n:
            case s:
            case i:
            case S:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case m:
                case k:
                case _:
                case $:
                case d:
                  return C;
                default:
                  return de;
              }
          }
        case r:
          return de;
      }
    }
  }
  function X(C) {
    return G(C) === f;
  }
  return Oe.AsyncMode = p, Oe.ConcurrentMode = f, Oe.ContextConsumer = m, Oe.ContextProvider = d, Oe.Element = t, Oe.ForwardRef = k, Oe.Fragment = n, Oe.Lazy = _, Oe.Memo = $, Oe.Portal = r, Oe.Profiler = s, Oe.StrictMode = i, Oe.Suspense = S, Oe.isAsyncMode = function(C) {
    return X(C) || G(C) === p;
  }, Oe.isConcurrentMode = X, Oe.isContextConsumer = function(C) {
    return G(C) === m;
  }, Oe.isContextProvider = function(C) {
    return G(C) === d;
  }, Oe.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, Oe.isForwardRef = function(C) {
    return G(C) === k;
  }, Oe.isFragment = function(C) {
    return G(C) === n;
  }, Oe.isLazy = function(C) {
    return G(C) === _;
  }, Oe.isMemo = function(C) {
    return G(C) === $;
  }, Oe.isPortal = function(C) {
    return G(C) === r;
  }, Oe.isProfiler = function(C) {
    return G(C) === s;
  }, Oe.isStrictMode = function(C) {
    return G(C) === i;
  }, Oe.isSuspense = function(C) {
    return G(C) === S;
  }, Oe.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === f || C === s || C === i || C === S || C === P || typeof C == "object" && C !== null && (C.$$typeof === _ || C.$$typeof === $ || C.$$typeof === d || C.$$typeof === m || C.$$typeof === k || C.$$typeof === N || C.$$typeof === F || C.$$typeof === U || C.$$typeof === w);
  }, Oe.typeOf = G, Oe;
}
xs.exports = kd();
var Cd = xs.exports, aa = Cd, _d = {
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
}, Td = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ad = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ss = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ia = {};
ia[aa.ForwardRef] = Ad;
ia[aa.Memo] = Ss;
function yi(e) {
  return aa.isMemo(e) ? Ss : ia[e.$$typeof] || _d;
}
var Rd = Object.defineProperty, Od = Object.getOwnPropertyNames, vi = Object.getOwnPropertySymbols, Ed = Object.getOwnPropertyDescriptor, Id = Object.getPrototypeOf, bi = Object.prototype;
function ks(e, t, r) {
  if (typeof t != "string") {
    if (bi) {
      var n = Id(t);
      n && n !== bi && ks(e, n, r);
    }
    var i = Od(t);
    vi && (i = i.concat(vi(t)));
    for (var s = yi(e), d = yi(t), m = 0; m < i.length; ++m) {
      var p = i[m];
      if (!Td[p] && !(r && r[p]) && !(d && d[p]) && !(s && s[p])) {
        var f = Ed(t, p);
        try {
          Rd(e, p, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Nd = ks;
const Pd = /* @__PURE__ */ Ii(Nd);
var it = { env: { NODE_ENV: "production" } };
function qt() {
  return (qt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var wi = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Uo = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !ws.typeOf(e);
}, Yn = Object.freeze([]), ir = Object.freeze({});
function an(e) {
  return typeof e == "function";
}
function xi(e) {
  return e.displayName || e.name || "Component";
}
function sa(e) {
  return e && typeof e.styledComponentId == "string";
}
var Dr = typeof it < "u" && it.env !== void 0 && (it.env.REACT_APP_SC_ATTR || it.env.SC_ATTR) || "data-styled", la = typeof window < "u" && "HTMLElement" in window, Ld = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof it < "u" && it.env !== void 0 && (it.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && it.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? it.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && it.env.REACT_APP_SC_DISABLE_SPEEDY : it.env.SC_DISABLE_SPEEDY !== void 0 && it.env.SC_DISABLE_SPEEDY !== "" ? it.env.SC_DISABLE_SPEEDY !== "false" && it.env.SC_DISABLE_SPEEDY : it.env.NODE_ENV !== "production"));
function un(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var jd = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++) n += this.groupSizes[i];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, s = i.length, d = s; r >= d; ) (d <<= 1) < 0 && un(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(i), this.length = d;
      for (var m = s; m < d; m++) this.groupSizes[m] = 0;
    }
    for (var p = this.indexOfGroup(r + 1), f = 0, k = n.length; f < k; f++) this.tag.insertRule(p, n[f]) && (this.groupSizes[r]++, p++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), s = i + n;
      this.groupSizes[r] = 0;
      for (var d = i; d < s; d++) this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var i = this.groupSizes[r], s = this.indexOfGroup(r), d = s + i, m = s; m < d; m++) n += this.tag.getRule(m) + `/*!sc*/
`;
    return n;
  }, e;
}(), $n = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map(), rn = 1, Pn = function(e) {
  if ($n.has(e)) return $n.get(e);
  for (; Zn.has(rn); ) rn++;
  var t = rn++;
  return $n.set(e, t), Zn.set(t, e), t;
}, Md = function(e) {
  return Zn.get(e);
}, Fd = function(e, t) {
  t >= rn && (rn = t + 1), $n.set(e, t), Zn.set(t, e);
}, zd = "style[" + Dr + '][data-styled-version="5.3.11"]', Dd = new RegExp("^" + Dr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), $d = function(e, t, r) {
  for (var n, i = r.split(","), s = 0, d = i.length; s < d; s++) (n = i[s]) && e.registerName(t, n);
}, Ud = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, s = r.length; i < s; i++) {
    var d = r[i].trim();
    if (d) {
      var m = d.match(Dd);
      if (m) {
        var p = 0 | parseInt(m[1], 10), f = m[2];
        p !== 0 && (Fd(f, p), $d(e, f, m[3]), e.getTag().insertRules(p, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Bd = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Cs = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(m) {
    for (var p = m.childNodes, f = p.length; f >= 0; f--) {
      var k = p[f];
      if (k && k.nodeType === 1 && k.hasAttribute(Dr)) return k;
    }
  }(r), s = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Dr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Bd();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, Wd = function() {
  function e(r) {
    var n = this.element = Cs(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet) return i.sheet;
      for (var s = document.styleSheets, d = 0, m = s.length; d < m; d++) {
        var p = s[d];
        if (p.ownerNode === i) return p;
      }
      un(17);
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
}(), Hd = function() {
  function e(r) {
    var n = this.element = Cs(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(i, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Vd = function() {
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
}(), Si = la, qd = { isServer: !la, useCSSOMInjection: !Ld }, _s = function() {
  function e(r, n, i) {
    r === void 0 && (r = ir), n === void 0 && (n = {}), this.options = qt({}, qd, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && la && Si && (Si = !1, function(s) {
      for (var d = document.querySelectorAll(zd), m = 0, p = d.length; m < p; m++) {
        var f = d[m];
        f && f.getAttribute(Dr) !== "active" && (Ud(s, f), f.parentNode && f.parentNode.removeChild(f));
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
    return this.tag || (this.tag = (i = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = i ? new Vd(d) : s ? new Wd(d) : new Hd(d), new jd(r)));
    var r, n, i, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Pn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(Pn(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Pn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, s = "", d = 0; d < i; d++) {
        var m = Md(d);
        if (m !== void 0) {
          var p = r.names.get(m), f = n.getGroup(d);
          if (p && f && p.size) {
            var k = Dr + ".g" + d + '[id="' + m + '"]', S = "";
            p !== void 0 && p.forEach(function(P) {
              P.length > 0 && (S += P + ",");
            }), s += "" + f + k + '{content:"' + S + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Gd = /(a)(d)/gi, ki = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Bo(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ki(t % 52) + r;
  return (ki(t % 52) + r).replace(Gd, "$1-$2");
}
var Pr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ts = function(e) {
  return Pr(5381, e);
};
function Yd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (an(r) && !sa(r)) return !1;
  }
  return !0;
}
var Zd = Ts("5.3.11"), Xd = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Yd(t), this.componentId = r, this.baseHash = Pr(Zd, r), this.baseStyle = n, _s.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = $r(this.rules, t, r, n).join(""), m = Bo(Pr(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(i, m)) {
        var p = n(d, "." + m, void 0, i);
        r.insertRules(i, m, p);
      }
      s.push(m), this.staticRulesId = m;
    }
    else {
      for (var f = this.rules.length, k = Pr(this.baseHash, n.hash), S = "", P = 0; P < f; P++) {
        var $ = this.rules[P];
        if (typeof $ == "string") S += $;
        else if ($) {
          var _ = $r($, t, r, n), w = Array.isArray(_) ? _.join("") : _;
          k = Pr(k, w + P), S += w;
        }
      }
      if (S) {
        var N = Bo(k >>> 0);
        if (!r.hasNameForId(i, N)) {
          var F = n(S, "." + N, void 0, i);
          r.insertRules(i, N, F);
        }
        s.push(N);
      }
    }
    return s.join(" ");
  }, e;
}(), Jd = /^\s*\/\/.*$/gm, Kd = [":", "[", ".", "#"];
function Qd(e) {
  var t, r, n, i, s = ir, d = s.options, m = d === void 0 ? ir : d, p = s.plugins, f = p === void 0 ? Yn : p, k = new bd(m), S = [], P = /* @__PURE__ */ function(w) {
    function N(F) {
      if (F) try {
        w(F + "}");
      } catch {
      }
    }
    return function(F, U, G, X, C, de, ye, Ce, Ee, De) {
      switch (F) {
        case 1:
          if (Ee === 0 && U.charCodeAt(0) === 64) return w(U + ";"), "";
          break;
        case 2:
          if (Ce === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Ce) {
            case 102:
            case 112:
              return w(G[0] + U), "";
            default:
              return U + (De === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(N);
      }
    };
  }(function(w) {
    S.push(w);
  }), $ = function(w, N, F) {
    return N === 0 && Kd.indexOf(F[r.length]) !== -1 || F.match(i) ? w : "." + t;
  };
  function _(w, N, F, U) {
    U === void 0 && (U = "&");
    var G = w.replace(Jd, ""), X = N && F ? F + " " + N + " { " + G + " }" : G;
    return t = U, r = N, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), k(F || !N ? "" : N, X);
  }
  return k.use([].concat(f, [function(w, N, F) {
    w === 2 && F.length && F[0].lastIndexOf(r) > 0 && (F[0] = F[0].replace(n, $));
  }, P, function(w) {
    if (w === -2) {
      var N = S;
      return S = [], N;
    }
  }])), _.hash = f.length ? f.reduce(function(w, N) {
    return N.name || un(15), Pr(w, N.name);
  }, 5381).toString() : "", _;
}
var As = et.createContext();
As.Consumer;
var Rs = et.createContext(), ef = (Rs.Consumer, new _s()), Wo = Qd();
function tf() {
  return Yt(As) || ef;
}
function rf() {
  return Yt(Rs) || Wo;
}
var nf = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, s) {
      s === void 0 && (s = Wo);
      var d = n.name + s.hash;
      i.hasNameForId(n.id, d) || i.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return un(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Wo), this.name + t.hash;
  }, e;
}(), of = /([A-Z])/, af = /([A-Z])/g, sf = /^ms-/, lf = function(e) {
  return "-" + e.toLowerCase();
};
function Ci(e) {
  return of.test(e) ? e.replace(af, lf).replace(sf, "-ms-") : e;
}
var _i = function(e) {
  return e == null || e === !1 || e === "";
};
function $r(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, s = [], d = 0, m = e.length; d < m; d += 1) (i = $r(e[d], t, r, n)) !== "" && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (_i(e)) return "";
  if (sa(e)) return "." + e.styledComponentId;
  if (an(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var p = e(t);
    return $r(p, t, r, n);
  }
  var f;
  return e instanceof nf ? r ? (e.inject(r, n), e.getName(n)) : e : Uo(e) ? function k(S, P) {
    var $, _, w = [];
    for (var N in S) S.hasOwnProperty(N) && !_i(S[N]) && (Array.isArray(S[N]) && S[N].isCss || an(S[N]) ? w.push(Ci(N) + ":", S[N], ";") : Uo(S[N]) ? w.push.apply(w, k(S[N], N)) : w.push(Ci(N) + ": " + ($ = N, (_ = S[N]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || $ in wd || $.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return P ? [P + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var Ti = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function uf(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return an(e) || Uo(e) ? Ti($r(wi(Yn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ti($r(wi(e, r)));
}
var cf = function(e, t, r) {
  return r === void 0 && (r = ir), e.theme !== r.theme && e.theme || t || r.theme;
}, df = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ff = /(^-|-$)/g;
function _o(e) {
  return e.replace(df, "-").replace(ff, "");
}
var pf = function(e) {
  return Bo(Ts(e) >>> 0);
};
function Ln(e) {
  return typeof e == "string" && it.env.NODE_ENV === "production";
}
var Ho = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, hf = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function gf(e, t, r) {
  var n = e[r];
  Ho(t) && Ho(n) ? Os(n, t) : e[r] = t;
}
function Os(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var i = 0, s = r; i < s.length; i++) {
    var d = s[i];
    if (Ho(d)) for (var m in d) hf(m) && gf(e, d[m], m);
  }
  return e;
}
var Es = et.createContext();
Es.Consumer;
var To = {};
function Is(e, t, r) {
  var n = sa(e), i = !Ln(e), s = t.attrs, d = s === void 0 ? Yn : s, m = t.componentId, p = m === void 0 ? function(U, G) {
    var X = typeof U != "string" ? "sc" : _o(U);
    To[X] = (To[X] || 0) + 1;
    var C = X + "-" + pf("5.3.11" + X + To[X]);
    return G ? G + "-" + C : C;
  }(t.displayName, t.parentComponentId) : m, f = t.displayName, k = f === void 0 ? function(U) {
    return Ln(U) ? "styled." + U : "Styled(" + xi(U) + ")";
  }(e) : f, S = t.displayName && t.componentId ? _o(t.displayName) + "-" + t.componentId : t.componentId || p, P = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, $ = t.shouldForwardProp;
  n && e.shouldForwardProp && ($ = t.shouldForwardProp ? function(U, G, X) {
    return e.shouldForwardProp(U, G, X) && t.shouldForwardProp(U, G, X);
  } : e.shouldForwardProp);
  var _, w = new Xd(r, S, n ? e.componentStyle : void 0), N = w.isStatic && d.length === 0, F = function(U, G) {
    return function(X, C, de, ye) {
      var Ce = X.attrs, Ee = X.componentStyle, De = X.defaultProps, Ye = X.foldedComponentIds, pe = X.shouldForwardProp, we = X.styledComponentId, Te = X.target, xe = function(B, y, Y) {
        B === void 0 && (B = ir);
        var T = qt({}, y, { theme: B }), re = {};
        return Y.forEach(function(K) {
          var Q, V, ne, le = K;
          for (Q in an(le) && (le = le(T)), le) T[Q] = re[Q] = Q === "className" ? (V = re[Q], ne = le[Q], V && ne ? V + " " + ne : V || ne) : le[Q];
        }), [T, re];
      }(cf(C, Yt(Es), De) || ir, C, Ce), Ze = xe[0], Ie = xe[1], ke = function(B, y, Y, T) {
        var re = tf(), K = rf(), Q = y ? B.generateAndInjectStyles(ir, re, K) : B.generateAndInjectStyles(Y, re, K);
        return Q;
      }(Ee, ye, Ze), Me = de, qe = Ie.$as || C.$as || Ie.as || C.as || Te, Ge = Ln(qe), j = Ie !== C ? qt({}, C, {}, Ie) : C, E = {};
      for (var L in j) L[0] !== "$" && L !== "as" && (L === "forwardedAs" ? E.as = j[L] : (pe ? pe(L, gi, qe) : !Ge || gi(L)) && (E[L] = j[L]));
      return C.style && Ie.style !== C.style && (E.style = qt({}, C.style, {}, Ie.style)), E.className = Array.prototype.concat(Ye, we, ke !== we ? ke : null, C.className, Ie.className).filter(Boolean).join(" "), E.ref = Me, Oi(qe, E);
    }(_, U, G, N);
  };
  return F.displayName = k, (_ = et.forwardRef(F)).attrs = P, _.componentStyle = w, _.displayName = k, _.shouldForwardProp = $, _.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Yn, _.styledComponentId = S, _.target = n ? e.target : e, _.withComponent = function(U) {
    var G = t.componentId, X = function(de, ye) {
      if (de == null) return {};
      var Ce, Ee, De = {}, Ye = Object.keys(de);
      for (Ee = 0; Ee < Ye.length; Ee++) Ce = Ye[Ee], ye.indexOf(Ce) >= 0 || (De[Ce] = de[Ce]);
      return De;
    }(t, ["componentId"]), C = G && G + "-" + (Ln(U) ? U : _o(xi(U)));
    return Is(U, qt({}, X, { attrs: P, componentId: C }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = n ? Os({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), i && Pd(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var sn = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = ir), !ws.isValidElementType(n)) return un(1, String(n));
    var s = function() {
      return r(n, i, uf.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, qt({}, i, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, qt({}, i, { attrs: Array.prototype.concat(i.attrs, d).filter(Boolean) }));
    }, s;
  }(Is, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  sn[e] = sn(e);
});
const mf = sn.section``, yf = (e, t, r) => ({
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
}), vf = ({ cardButton: e }) => {
  const { feeds: t } = Yt(Kn), r = t == null ? void 0 : t.map(
    (n, i) => yf(n, i, e)
  );
  return /* @__PURE__ */ Qe.jsx(mf, { children: /* @__PURE__ */ Qe.jsx(
    ys,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, Ns = ({ cardButton: e, ...t }) => (sr(() => {
  typeof window < "u" && oa({
    packageName: "component-news",
    component: "CardCarouselNews",
    type: "NA",
    configuration: {
      cardButton: e,
      props: t
    }
  });
}, []), // Calling the high order component that fetches the data
/* @__PURE__ */ Qe.jsx(_r, { ...t, children: /* @__PURE__ */ Qe.jsx(
  vf,
  {
    cardButton: { ...on.cardButton, ...e }
  }
) }));
Ns.propTypes = _r.propTypes;
const Ps = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), bf = sn.section`
  .c-card {
    height: 100%;
  }
`, wf = (e, t) => /* @__PURE__ */ Qe.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ Qe.jsx(
      Lt,
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
        tags: Ps(e == null ? void 0 : e.interests)
      }
    )
  },
  e.id
), xf = ({ cardButton: e }) => {
  const { feeds: t } = Yt(Kn);
  return /* @__PURE__ */ Qe.jsx(bf, { className: "row row-spaced", "data-testid": "grid-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ Qe.jsx(et.Fragment, { children: wf(r, e) }, n)
  )) });
}, Ls = ({ cardButton: e, ...t }) => (sr(() => {
  typeof window < "u" && oa({
    packageName: "component-news",
    component: "CardGridNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ Qe.jsx(_r, { ...t, children: /* @__PURE__ */ Qe.jsx(
  xf,
  {
    cardButton: { ...on.cardButton, ...e }
  }
) }));
Ls.propTypes = {
  ..._r.propTypes,
  cardButton: rs
};
const Sf = sn.section``, kf = (e, t) => /* @__PURE__ */ Qe.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ Qe.jsx(
  Lt,
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
    tags: Ps(e == null ? void 0 : e.interests)
  }
) }, e.id), Cf = ({ cardButton: e }) => {
  const { feeds: t } = Yt(Kn);
  return /* @__PURE__ */ Qe.jsx(Sf, { className: "row-spaced", "data-testid": "list-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ Qe.jsx(et.Fragment, { children: kf(r, e) }, n)
  )) });
}, js = ({ cardButton: e, ...t }) => (sr(() => {
  typeof window < "u" && oa({
    packageName: "component-news",
    component: "CardListlNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ Qe.jsx(_r, { ...t, children: /* @__PURE__ */ Qe.jsx(
  Cf,
  {
    cardButton: { ...on.cardButton, ...e }
  }
) }));
js.propTypes = { ..._r.propTypes, feedCardButtonShape: rs };
var Ms, Ai = Ei;
Ms = Ai.createRoot, Ai.hydrateRoot;
const ua = (e, t, r) => {
  Ms(r).render(et.createElement(e, t));
}, Af = ({ targetSelector: e, props: t }) => {
  ua(Ls, t, document.querySelector(e));
}, Rf = ({ targetSelector: e, props: t }) => {
  ua(js, t, document.querySelector(e));
}, Of = ({ targetSelector: e, props: t }) => {
  ua(Ns, t, document.querySelector(e));
};
export {
  Ns as CardCarouselNews,
  Ls as CardGridNews,
  js as CardListlNews,
  Of as initCardCarouselNewsComponent,
  Af as initCardGridNewsComponent,
  Rf as initCardListNewsComponent
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
