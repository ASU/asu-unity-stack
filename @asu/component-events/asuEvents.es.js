import et, { Component as us, createContext as cs, forwardRef as ti, useRef as ds, useImperativeHandle as fs, useId as ps, useContext as or, createElement as ri, useState as Vr, useEffect as Zr } from "react";
import ni from "react-dom";
function oi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ai = { exports: {} }, Br = {};
var ia;
function hs() {
  if (ia) return Br;
  ia = 1;
  var e = et, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, u = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(w, b, m) {
    var O, C = {}, j = null, Y = null;
    m !== void 0 && (j = "" + m), b.key !== void 0 && (j = "" + b.key), b.ref !== void 0 && (Y = b.ref);
    for (O in b) a.call(b, O) && !d.hasOwnProperty(O) && (C[O] = b[O]);
    if (w && w.defaultProps) for (O in b = w.defaultProps, b) C[O] === void 0 && (C[O] = b[O]);
    return { $$typeof: t, type: w, key: j, ref: Y, props: C, _owner: u.current };
  }
  return Br.Fragment = r, Br.jsx = y, Br.jsxs = y, Br;
}
ai.exports = hs();
var mt = ai.exports;
function ii({
  packageName: e = "",
  component: t = "",
  type: r = "",
  configuration: a = {}
}) {
  if (!e || !t) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: t,
    type: r,
    configuration: a
  };
}
function _o(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var si = { exports: {} }, Wr = {}, sa;
function gs() {
  if (sa) return Wr;
  sa = 1;
  var e = et, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, u = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(w, b, m) {
    var O, C = {}, j = null, Y = null;
    m !== void 0 && (j = "" + m), b.key !== void 0 && (j = "" + b.key), b.ref !== void 0 && (Y = b.ref);
    for (O in b) a.call(b, O) && !d.hasOwnProperty(O) && (C[O] = b[O]);
    if (w && w.defaultProps) for (O in b = w.defaultProps, b) C[O] === void 0 && (C[O] = b[O]);
    return { $$typeof: t, type: w, key: j, ref: Y, props: C, _owner: u.current };
  }
  return Wr.Fragment = r, Wr.jsx = y, Wr.jsxs = y, Wr;
}
si.exports = gs();
var H = si.exports, li = { exports: {} }, Jn, la;
function ms() {
  if (la) return Jn;
  la = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jn = e, Jn;
}
var Xn, ua;
function ys() {
  if (ua) return Xn;
  ua = 1;
  var e = ms();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Xn = function() {
    function a(y, w, b, m, O, C) {
      if (C !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
      }
    }
    a.isRequired = a;
    function u() {
      return a;
    }
    var d = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: u,
      element: a,
      elementType: a,
      instanceOf: u,
      node: a,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return d.PropTypes = d, d;
  }, Xn;
}
li.exports = ys()();
var bs = li.exports;
const i = /* @__PURE__ */ _o(bs), vs = i.shape({
  url: i.string,
  altText: i.string,
  cssClass: i.arrayOf(i.string),
  size: i.oneOf(["small", "medium", "large"])
}), Kn = i.shape({
  text: i.string,
  maxWidth: i.string,
  cssClass: i.arrayOf(i.string),
  highlightColor: i.oneOf(["gold", "black"])
}), ui = i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  content: i.shape({
    icon: i.string,
    header: i.string,
    body: i.string
  })
}), To = i.shape({
  text: i.string,
  name: i.string,
  event: i.string,
  action: i.string,
  type: i.string,
  region: i.string,
  section: i.string,
  component: i.string
});
var ci = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var d = "", y = 0; y < arguments.length; y++) {
        var w = arguments[y];
        w && (d = u(d, a(w)));
      }
      return d;
    }
    function a(d) {
      if (typeof d == "string" || typeof d == "number")
        return d;
      if (typeof d != "object")
        return "";
      if (Array.isArray(d))
        return r.apply(null, d);
      if (d.toString !== Object.prototype.toString && !d.toString.toString().includes("[native code]"))
        return d.toString();
      var y = "";
      for (var w in d)
        t.call(d, w) && d[w] && (y = u(y, w));
      return y;
    }
    function u(d, y) {
      return y ? d ? d + " " + y : d + y : d;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(ci);
var ws = ci.exports;
const Er = /* @__PURE__ */ _o(ws), xs = () => {
  const [e, t] = Vr(), [r, a] = Vr(!1), [u, d] = Vr(!1), [y, w] = Vr("");
  return Zr(() => {
    y && (() => {
      d(null), a(!0);
      try {
        fetch(y).then((b) => b.json()).then((b) => {
          t(b), a(!1);
        }).catch((b) => {
          d(b), a(!1);
        });
      } catch (b) {
        d(b);
      }
    })();
  }, [y]), [{ data: e, loading: r, error: u }, w];
}, Ss = (e) => (e || []).join(" ");
function tr(e) {
  "@babel/helpers - typeof";
  return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tr(e);
}
function fo(e, t) {
  return fo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, fo(e, t);
}
function ks() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _n(e, t, r) {
  return ks() ? _n = Reflect.construct : _n = function(a, u, d) {
    var y = [null];
    y.push.apply(y, u);
    var w = Function.bind.apply(a, y), b = new w();
    return d && fo(b, d.prototype), b;
  }, _n.apply(null, arguments);
}
function At(e) {
  return Cs(e) || _s(e) || Ts(e) || Es();
}
function Cs(e) {
  if (Array.isArray(e)) return po(e);
}
function _s(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ts(e, t) {
  if (e) {
    if (typeof e == "string") return po(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return po(e, t);
  }
}
function po(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
  return a;
}
function Es() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var As = Object.hasOwnProperty, ca = Object.setPrototypeOf, Rs = Object.isFrozen, Os = Object.getPrototypeOf, Is = Object.getOwnPropertyDescriptor, at = Object.freeze, bt = Object.seal, Ns = Object.create, di = typeof Reflect < "u" && Reflect, Rn = di.apply, ho = di.construct;
Rn || (Rn = function(e, t, r) {
  return e.apply(t, r);
});
at || (at = function(e) {
  return e;
});
bt || (bt = function(e) {
  return e;
});
ho || (ho = function(e, t) {
  return _n(e, At(t));
});
var Ps = vt(Array.prototype.forEach), da = vt(Array.prototype.pop), qr = vt(Array.prototype.push), Tn = vt(String.prototype.toLowerCase), Qn = vt(String.prototype.toString), fa = vt(String.prototype.match), Et = vt(String.prototype.replace), Ls = vt(String.prototype.indexOf), Ms = vt(String.prototype.trim), Qe = vt(RegExp.prototype.test), eo = Ds(TypeError);
function vt(e) {
  return function(t) {
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
      a[u - 1] = arguments[u];
    return Rn(e, t, a);
  };
}
function Ds(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
      r[a] = arguments[a];
    return ho(e, r);
  };
}
function be(e, t, r) {
  var a;
  r = (a = r) !== null && a !== void 0 ? a : Tn, ca && ca(e, null);
  for (var u = t.length; u--; ) {
    var d = t[u];
    if (typeof d == "string") {
      var y = r(d);
      y !== d && (Rs(t) || (t[u] = y), d = y);
    }
    e[d] = !0;
  }
  return e;
}
function yr(e) {
  var t = Ns(null), r;
  for (r in e)
    Rn(As, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function bn(e, t) {
  for (; e !== null; ) {
    var r = Is(e, t);
    if (r) {
      if (r.get)
        return vt(r.get);
      if (typeof r.value == "function")
        return vt(r.value);
    }
    e = Os(e);
  }
  function a(u) {
    return console.warn("fallback value for", u), null;
  }
  return a;
}
var pa = at(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), to = at(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ro = at(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Fs = at(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), no = at(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), js = at(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ha = at(["#text"]), ga = at(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), oo = at(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ma = at(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), vn = at(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), zs = bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), $s = bt(/<%[\w\W]*|[\w\W]*%>/gm), Us = bt(/\${[\w\W]*}/gm), Bs = bt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ws = bt(/^aria-[\-\w]+$/), qs = bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Vs = bt(/^(?:\w+script|data):/i), Hs = bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Gs = bt(/^html$/i), Ys = bt(/^[a-z][.\w]*(-[.\w]+)+$/i), Zs = function() {
  return typeof window > "u" ? null : window;
}, Js = function(e, t) {
  if (tr(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var r = null, a = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(a) && (r = t.currentScript.getAttribute(a));
  var u = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(u, {
      createHTML: function(d) {
        return d;
      },
      createScriptURL: function(d) {
        return d;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + u + " could not be created."), null;
  }
};
function fi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zs(), t = function(v) {
    return fi(v);
  };
  if (t.version = "2.5.8", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, a = e.document, u = e.DocumentFragment, d = e.HTMLTemplateElement, y = e.Node, w = e.Element, b = e.NodeFilter, m = e.NamedNodeMap, O = m === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : m, C = e.HTMLFormElement, j = e.DOMParser, Y = e.trustedTypes, I = w.prototype, x = bn(I, "cloneNode"), N = bn(I, "nextSibling"), $ = bn(I, "childNodes"), U = bn(I, "parentNode");
  if (typeof d == "function") {
    var Z = a.createElement("template");
    Z.content && Z.content.ownerDocument && (a = Z.content.ownerDocument);
  }
  var J = Js(Y, r), S = J ? J.createHTML("") : "", de = a, ye = de.implementation, Ce = de.createNodeIterator, Oe = de.createDocumentFragment, ze = de.getElementsByTagName, Ge = r.importNode, pe = {};
  try {
    pe = yr(a).documentMode ? a.documentMode : {};
  } catch {
  }
  var we = {};
  t.isSupported = typeof U == "function" && ye && ye.createHTMLDocument !== void 0 && pe !== 9;
  var Te = zs, xe = $s, Ye = Us, Ie = Bs, ke = Ws, De = Vs, Ve = Hs, He = Ys, L = qs, A = null, P = be({}, [].concat(At(pa), At(to), At(ro), At(no), At(ha))), F = null, p = be({}, [].concat(At(ga), At(oo), At(ma), At(vn))), V = Object.seal(Object.create(null, {
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
  })), k = null, re = null, K = !0, Q = !0, W = !1, ne = !0, le = !1, ee = !0, se = !1, te = !1, fe = !1, Fe = !1, ue = !1, Ze = !1, $e = !0, he = !1, z = "user-content-", oe = !0, Ke = !1, Je = {}, _e = null, ar = be({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), ir = null, wr = be({}, ["audio", "video", "img", "source", "image", "track"]), Pt = null, Lt = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ht = "http://www.w3.org/1998/Math/MathML", Gt = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml", Ot = ut, sr = !1, tt = null, lr = be({}, [Ht, Gt, ut], Qn), it, Ee = ["application/xhtml+xml", "text/html"], Mt = "text/html", Ue, st = null, yt = a.createElement("form"), Dt = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, ct = function(v) {
    st && st === v || ((!v || tr(v) !== "object") && (v = {}), v = yr(v), it = // eslint-disable-next-line unicorn/prefer-includes
    Ee.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? it = Mt : it = v.PARSER_MEDIA_TYPE, Ue = it === "application/xhtml+xml" ? Qn : Tn, A = "ALLOWED_TAGS" in v ? be({}, v.ALLOWED_TAGS, Ue) : P, F = "ALLOWED_ATTR" in v ? be({}, v.ALLOWED_ATTR, Ue) : p, tt = "ALLOWED_NAMESPACES" in v ? be({}, v.ALLOWED_NAMESPACES, Qn) : lr, Pt = "ADD_URI_SAFE_ATTR" in v ? be(
      yr(Lt),
      // eslint-disable-line indent
      v.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Ue
      // eslint-disable-line indent
    ) : Lt, ir = "ADD_DATA_URI_TAGS" in v ? be(
      yr(wr),
      // eslint-disable-line indent
      v.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Ue
      // eslint-disable-line indent
    ) : wr, _e = "FORBID_CONTENTS" in v ? be({}, v.FORBID_CONTENTS, Ue) : ar, k = "FORBID_TAGS" in v ? be({}, v.FORBID_TAGS, Ue) : {}, re = "FORBID_ATTR" in v ? be({}, v.FORBID_ATTR, Ue) : {}, Je = "USE_PROFILES" in v ? v.USE_PROFILES : !1, K = v.ALLOW_ARIA_ATTR !== !1, Q = v.ALLOW_DATA_ATTR !== !1, W = v.ALLOW_UNKNOWN_PROTOCOLS || !1, ne = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, le = v.SAFE_FOR_TEMPLATES || !1, ee = v.SAFE_FOR_XML !== !1, se = v.WHOLE_DOCUMENT || !1, Fe = v.RETURN_DOM || !1, ue = v.RETURN_DOM_FRAGMENT || !1, Ze = v.RETURN_TRUSTED_TYPE || !1, fe = v.FORCE_BODY || !1, $e = v.SANITIZE_DOM !== !1, he = v.SANITIZE_NAMED_PROPS || !1, oe = v.KEEP_CONTENT !== !1, Ke = v.IN_PLACE || !1, L = v.ALLOWED_URI_REGEXP || L, Ot = v.NAMESPACE || ut, V = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && Dt(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (V.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && Dt(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (V.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (V.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), le && (Q = !1), ue && (Fe = !0), Je && (A = be({}, At(ha)), F = [], Je.html === !0 && (be(A, pa), be(F, ga)), Je.svg === !0 && (be(A, to), be(F, oo), be(F, vn)), Je.svgFilters === !0 && (be(A, ro), be(F, oo), be(F, vn)), Je.mathMl === !0 && (be(A, no), be(F, ma), be(F, vn))), v.ADD_TAGS && (A === P && (A = yr(A)), be(A, v.ADD_TAGS, Ue)), v.ADD_ATTR && (F === p && (F = yr(F)), be(F, v.ADD_ATTR, Ue)), v.ADD_URI_SAFE_ATTR && be(Pt, v.ADD_URI_SAFE_ATTR, Ue), v.FORBID_CONTENTS && (_e === ar && (_e = yr(_e)), be(_e, v.FORBID_CONTENTS, Ue)), oe && (A["#text"] = !0), se && be(A, ["html", "head", "body"]), A.table && (be(A, ["tbody"]), delete k.tbody), at && at(v), st = v);
  }, ur = be({}, ["mi", "mo", "mn", "ms", "mtext"]), Yt = be({}, ["annotation-xml"]), cr = be({}, ["title", "style", "font", "a", "script"]), Ft = be({}, to);
  be(Ft, ro), be(Ft, Fs);
  var Zt = be({}, no);
  be(Zt, js);
  var xr = function(v) {
    var X = U(v);
    (!X || !X.tagName) && (X = {
      namespaceURI: Ot,
      tagName: "template"
    });
    var B = Tn(v.tagName), Se = Tn(X.tagName);
    return tt[v.namespaceURI] ? v.namespaceURI === Gt ? X.namespaceURI === ut ? B === "svg" : X.namespaceURI === Ht ? B === "svg" && (Se === "annotation-xml" || ur[Se]) : !!Ft[B] : v.namespaceURI === Ht ? X.namespaceURI === ut ? B === "math" : X.namespaceURI === Gt ? B === "math" && Yt[Se] : !!Zt[B] : v.namespaceURI === ut ? X.namespaceURI === Gt && !Yt[Se] || X.namespaceURI === Ht && !ur[Se] ? !1 : !Zt[B] && (cr[B] || !Ft[B]) : !!(it === "application/xhtml+xml" && tt[v.namespaceURI]) : !1;
  }, wt = function(v) {
    qr(t.removed, {
      element: v
    });
    try {
      v.parentNode.removeChild(v);
    } catch {
      try {
        v.outerHTML = S;
      } catch {
        v.remove();
      }
    }
  }, Jt = function(v, X) {
    try {
      qr(t.removed, {
        attribute: X.getAttributeNode(v),
        from: X
      });
    } catch {
      qr(t.removed, {
        attribute: null,
        from: X
      });
    }
    if (X.removeAttribute(v), v === "is" && !F[v])
      if (Fe || ue)
        try {
          wt(X);
        } catch {
        }
      else
        try {
          X.setAttribute(v, "");
        } catch {
        }
  }, jt = function(v) {
    var X, B;
    if (fe)
      v = "<remove></remove>" + v;
    else {
      var Se = fa(v, /^[\r\n\t ]+/);
      B = Se && Se[0];
    }
    it === "application/xhtml+xml" && Ot === ut && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    var Me = J ? J.createHTML(v) : v;
    if (Ot === ut)
      try {
        X = new j().parseFromString(Me, it);
      } catch {
      }
    if (!X || !X.documentElement) {
      X = ye.createDocument(Ot, "template", null);
      try {
        X.documentElement.innerHTML = sr ? S : Me;
      } catch {
      }
    }
    var Ne = X.body || X.documentElement;
    return v && B && Ne.insertBefore(a.createTextNode(B), Ne.childNodes[0] || null), Ot === ut ? ze.call(X, se ? "html" : "body")[0] : se ? X.documentElement : Ne;
  }, dr = function(v) {
    return Ce.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      b.SHOW_ELEMENT | b.SHOW_COMMENT | b.SHOW_TEXT | b.SHOW_PROCESSING_INSTRUCTION | b.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, It = function(v) {
    return v instanceof C && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof O) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
  }, xt = function(v) {
    return tr(y) === "object" ? v instanceof y : v && tr(v) === "object" && typeof v.nodeType == "number" && typeof v.nodeName == "string";
  }, dt = function(v, X, B) {
    we[v] && Ps(we[v], function(Se) {
      Se.call(t, X, B, st);
    });
  }, Nt = function(v) {
    var X;
    if (dt("beforeSanitizeElements", v, null), It(v) || Qe(/[\u0080-\uFFFF]/, v.nodeName))
      return wt(v), !0;
    var B = Ue(v.nodeName);
    if (dt("uponSanitizeElement", v, {
      tagName: B,
      allowedTags: A
    }), v.hasChildNodes() && !xt(v.firstElementChild) && (!xt(v.content) || !xt(v.content.firstElementChild)) && Qe(/<[/\w]/g, v.innerHTML) && Qe(/<[/\w]/g, v.textContent) || B === "select" && Qe(/<template/i, v.innerHTML) || v.nodeType === 7 || ee && v.nodeType === 8 && Qe(/<[/\w]/g, v.data))
      return wt(v), !0;
    if (!A[B] || k[B]) {
      if (!k[B] && Xt(B) && (V.tagNameCheck instanceof RegExp && Qe(V.tagNameCheck, B) || V.tagNameCheck instanceof Function && V.tagNameCheck(B)))
        return !1;
      if (oe && !_e[B]) {
        var Se = U(v) || v.parentNode, Me = $(v) || v.childNodes;
        if (Me && Se)
          for (var Ne = Me.length, We = Ne - 1; We >= 0; --We) {
            var lt = x(Me[We], !0);
            lt.__removalCount = (v.__removalCount || 0) + 1, Se.insertBefore(lt, N(v));
          }
      }
      return wt(v), !0;
    }
    return v instanceof w && !xr(v) || (B === "noscript" || B === "noembed" || B === "noframes") && Qe(/<\/no(script|embed|frames)/i, v.innerHTML) ? (wt(v), !0) : (le && v.nodeType === 3 && (X = v.textContent, X = Et(X, Te, " "), X = Et(X, xe, " "), X = Et(X, Ye, " "), v.textContent !== X && (qr(t.removed, {
      element: v.cloneNode()
    }), v.textContent = X)), dt("afterSanitizeElements", v, null), !1);
  }, Sr = function(v, X, B) {
    if ($e && (X === "id" || X === "name") && (B in a || B in yt))
      return !1;
    if (!(Q && !re[X] && Qe(Ie, X)) && !(K && Qe(ke, X))) {
      if (!F[X] || re[X]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Xt(v) && (V.tagNameCheck instanceof RegExp && Qe(V.tagNameCheck, v) || V.tagNameCheck instanceof Function && V.tagNameCheck(v)) && (V.attributeNameCheck instanceof RegExp && Qe(V.attributeNameCheck, X) || V.attributeNameCheck instanceof Function && V.attributeNameCheck(X)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          X === "is" && V.allowCustomizedBuiltInElements && (V.tagNameCheck instanceof RegExp && Qe(V.tagNameCheck, B) || V.tagNameCheck instanceof Function && V.tagNameCheck(B)))
        ) return !1;
      } else if (!Pt[X] && !Qe(L, Et(B, Ve, "")) && !((X === "src" || X === "xlink:href" || X === "href") && v !== "script" && Ls(B, "data:") === 0 && ir[v]) && !(W && !Qe(De, Et(B, Ve, ""))) && B)
        return !1;
    }
    return !0;
  }, Xt = function(v) {
    return v !== "annotation-xml" && fa(v, He);
  }, zt = function(v) {
    var X, B, Se, Me;
    dt("beforeSanitizeAttributes", v, null);
    var Ne = v.attributes;
    if (!(!Ne || It(v))) {
      var We = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: F
      };
      for (Me = Ne.length; Me--; ) {
        X = Ne[Me];
        var lt = X, rt = lt.name, Xe = lt.namespaceURI;
        if (B = rt === "value" ? X.value : Ms(X.value), Se = Ue(rt), We.attrName = Se, We.attrValue = B, We.keepAttr = !0, We.forceKeepAttr = void 0, dt("uponSanitizeAttribute", v, We), B = We.attrValue, !We.forceKeepAttr && (Jt(rt, v), !!We.keepAttr)) {
          if (!ne && Qe(/\/>/i, B)) {
            Jt(rt, v);
            continue;
          }
          le && (B = Et(B, Te, " "), B = Et(B, xe, " "), B = Et(B, Ye, " "));
          var St = Ue(v.nodeName);
          if (Sr(St, Se, B)) {
            if (he && (Se === "id" || Se === "name") && (Jt(rt, v), B = z + B), ee && Qe(/((--!?|])>)|<\/(style|title)/i, B)) {
              Jt(rt, v);
              continue;
            }
            if (J && tr(Y) === "object" && typeof Y.getAttributeType == "function" && !Xe)
              switch (Y.getAttributeType(St, Se)) {
                case "TrustedHTML": {
                  B = J.createHTML(B);
                  break;
                }
                case "TrustedScriptURL": {
                  B = J.createScriptURL(B);
                  break;
                }
              }
            try {
              Xe ? v.setAttributeNS(Xe, rt, B) : v.setAttribute(rt, B), It(v) ? wt(v) : da(t.removed);
            } catch {
            }
          }
        }
      }
      dt("afterSanitizeAttributes", v, null);
    }
  }, $t = function v(X) {
    var B, Se = dr(X);
    for (dt("beforeSanitizeShadowDOM", X, null); B = Se.nextNode(); )
      dt("uponSanitizeShadowNode", B, null), Nt(B), zt(B), B.content instanceof u && v(B.content);
    dt("afterSanitizeShadowDOM", X, null);
  };
  return t.sanitize = function(v) {
    var X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B, Se, Me, Ne, We;
    if (sr = !v, sr && (v = "<!-->"), typeof v != "string" && !xt(v))
      if (typeof v.toString == "function") {
        if (v = v.toString(), typeof v != "string")
          throw eo("dirty is not a string, aborting");
      } else
        throw eo("toString is not a function");
    if (!t.isSupported) {
      if (tr(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof v == "string")
          return e.toStaticHTML(v);
        if (xt(v))
          return e.toStaticHTML(v.outerHTML);
      }
      return v;
    }
    if (te || ct(X), t.removed = [], typeof v == "string" && (Ke = !1), Ke) {
      if (v.nodeName) {
        var lt = Ue(v.nodeName);
        if (!A[lt] || k[lt])
          throw eo("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (v instanceof y)
      B = jt("<!---->"), Se = B.ownerDocument.importNode(v, !0), Se.nodeType === 1 && Se.nodeName === "BODY" || Se.nodeName === "HTML" ? B = Se : B.appendChild(Se);
    else {
      if (!Fe && !le && !se && // eslint-disable-next-line unicorn/prefer-includes
      v.indexOf("<") === -1)
        return J && Ze ? J.createHTML(v) : v;
      if (B = jt(v), !B)
        return Fe ? null : Ze ? S : "";
    }
    B && fe && wt(B.firstChild);
    for (var rt = dr(Ke ? v : B); Me = rt.nextNode(); )
      Me.nodeType === 3 && Me === Ne || (Nt(Me), zt(Me), Me.content instanceof u && $t(Me.content), Ne = Me);
    if (Ne = null, Ke)
      return v;
    if (Fe) {
      if (ue)
        for (We = Oe.call(B.ownerDocument); B.firstChild; )
          We.appendChild(B.firstChild);
      else
        We = B;
      return (F.shadowroot || F.shadowrootmod) && (We = Ge.call(r, We, !0)), We;
    }
    var Xe = se ? B.outerHTML : B.innerHTML;
    return se && A["!doctype"] && B.ownerDocument && B.ownerDocument.doctype && B.ownerDocument.doctype.name && Qe(Gs, B.ownerDocument.doctype.name) && (Xe = "<!DOCTYPE " + B.ownerDocument.doctype.name + `>
` + Xe), le && (Xe = Et(Xe, Te, " "), Xe = Et(Xe, xe, " "), Xe = Et(Xe, Ye, " ")), J && Ze ? J.createHTML(Xe) : Xe;
  }, t.setConfig = function(v) {
    ct(v), te = !0;
  }, t.clearConfig = function() {
    st = null, te = !1;
  }, t.isValidAttribute = function(v, X, B) {
    st || ct({});
    var Se = Ue(v), Me = Ue(X);
    return Sr(Se, Me, B);
  }, t.addHook = function(v, X) {
    typeof X == "function" && (we[v] = we[v] || [], qr(we[v], X));
  }, t.removeHook = function(v) {
    if (we[v])
      return da(we[v]);
  }, t.removeHooks = function(v) {
    we[v] && (we[v] = []);
  }, t.removeAllHooks = function() {
    we = {};
  }, t;
}
var Xs = fi();
const Cr = (e) => ({ __html: Xs.sanitize(e) });
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
const Ks = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: a = "",
  section: u = "",
  text: d = "",
  region: y = "",
  component: w = ""
}) => {
  const { dataLayer: b } = window, m = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: a.toLowerCase(),
    region: y.toLowerCase(),
    section: u.toLowerCase(),
    text: d.toLowerCase(),
    component: w.toLowerCase()
  };
  b && b.push(m);
};
var br = {}, ya;
function Qs() {
  if (ya) return br;
  ya = 1;
  var e = et;
  function t(n) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, f = 1; f < arguments.length; f++) l += "&args[]=" + encodeURIComponent(arguments[f]);
    return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, a = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, u = {}, d = {};
  function y(n) {
    return r.call(d, n) ? !0 : r.call(u, n) ? !1 : a.test(n) ? d[n] = !0 : (u[n] = !0, !1);
  }
  function w(n, l, f, g, R, _, M) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = g, this.attributeNamespace = R, this.mustUseProperty = f, this.propertyName = n, this.type = l, this.sanitizeURL = _, this.removeEmptyString = M;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    b[n] = new w(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var l = n[0];
    b[l] = new w(l, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    b[n] = new w(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    b[n] = new w(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    b[n] = new w(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    b[n] = new w(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    b[n] = new w(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    b[n] = new w(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    b[n] = new w(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var m = /[\-:]([a-z])/g;
  function O(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var l = n.replace(
      m,
      O
    );
    b[l] = new w(l, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var l = n.replace(m, O);
    b[l] = new w(l, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var l = n.replace(m, O);
    b[l] = new w(l, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    b[n] = new w(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    b[n] = new w(n, 1, !1, n.toLowerCase(), null, !0, !0);
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
  }, j = ["Webkit", "ms", "Moz", "O"];
  Object.keys(C).forEach(function(n) {
    j.forEach(function(l) {
      l = l + n.charAt(0).toUpperCase() + n.substring(1), C[l] = C[n];
    });
  });
  var Y = /["'&<>]/;
  function I(n) {
    if (typeof n == "boolean" || typeof n == "number") return "" + n;
    n = "" + n;
    var l = Y.exec(n);
    if (l) {
      var f = "", g, R = 0;
      for (g = l.index; g < n.length; g++) {
        switch (n.charCodeAt(g)) {
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
        R !== g && (f += n.substring(R, g)), R = g + 1, f += l;
      }
      n = R !== g ? f + n.substring(R, g) : f;
    }
    return n;
  }
  var x = /([A-Z])/g, N = /^ms-/, $ = Array.isArray;
  function U(n, l) {
    return { insertionMode: n, selectedValue: l };
  }
  function Z(n, l, f) {
    switch (l) {
      case "select":
        return U(1, f.value != null ? f.value : f.defaultValue);
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
    return 4 <= n.insertionMode || n.insertionMode === 0 ? U(1, null) : n;
  }
  var J = /* @__PURE__ */ new Map();
  function S(n, l, f) {
    if (typeof f != "object") throw Error(t(62));
    l = !0;
    for (var g in f) if (r.call(f, g)) {
      var R = f[g];
      if (R != null && typeof R != "boolean" && R !== "") {
        if (g.indexOf("--") === 0) {
          var _ = I(g);
          R = I(("" + R).trim());
        } else {
          _ = g;
          var M = J.get(_);
          M !== void 0 || (M = I(_.replace(x, "-$1").toLowerCase().replace(N, "-ms-")), J.set(_, M)), _ = M, R = typeof R == "number" ? R === 0 || r.call(C, g) ? "" + R : R + "px" : I(("" + R).trim());
        }
        l ? (l = !1, n.push(' style="', _, ":", R)) : n.push(";", _, ":", R);
      }
    }
    l || n.push('"');
  }
  function de(n, l, f, g) {
    switch (f) {
      case "style":
        S(n, l, g);
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
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!l.acceptsBooleans) return;
        }
        switch (f = l.attributeName, l.type) {
          case 3:
            g && n.push(" ", f, '=""');
            break;
          case 4:
            g === !0 ? n.push(" ", f, '=""') : g !== !1 && n.push(" ", f, '="', I(g), '"');
            break;
          case 5:
            isNaN(g) || n.push(" ", f, '="', I(g), '"');
            break;
          case 6:
            !isNaN(g) && 1 <= g && n.push(" ", f, '="', I(g), '"');
            break;
          default:
            l.sanitizeURL && (g = "" + g), n.push(" ", f, '="', I(g), '"');
        }
      } else if (y(f)) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = f.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        n.push(" ", f, '="', I(g), '"');
      }
    }
  }
  function ye(n, l, f) {
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
  function Oe(n, l, f, g) {
    n.push(pe(f));
    var R = f = null, _;
    for (_ in l) if (r.call(l, _)) {
      var M = l[_];
      if (M != null) switch (_) {
        case "children":
          f = M;
          break;
        case "dangerouslySetInnerHTML":
          R = M;
          break;
        default:
          de(n, g, _, M);
      }
    }
    return n.push(">"), ye(n, R, f), typeof f == "string" ? (n.push(I(f)), null) : f;
  }
  var ze = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ge = /* @__PURE__ */ new Map();
  function pe(n) {
    var l = Ge.get(n);
    if (l === void 0) {
      if (!ze.test(n)) throw Error(t(65, n));
      l = "<" + n, Ge.set(n, l);
    }
    return l;
  }
  function we(n, l, f, g, R) {
    switch (l) {
      case "select":
        n.push(pe("select"));
        var _ = null, M = null;
        for (ge in f) if (r.call(f, ge)) {
          var G = f[ge];
          if (G != null) switch (ge) {
            case "children":
              _ = G;
              break;
            case "dangerouslySetInnerHTML":
              M = G;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              de(n, g, ge, G);
          }
        }
        return n.push(">"), ye(n, M, _), _;
      case "option":
        M = R.selectedValue, n.push(pe("option"));
        var ae = G = null, ce = null, ge = null;
        for (_ in f) if (r.call(f, _)) {
          var qe = f[_];
          if (qe != null) switch (_) {
            case "children":
              G = qe;
              break;
            case "selected":
              ce = qe;
              break;
            case "dangerouslySetInnerHTML":
              ge = qe;
              break;
            case "value":
              ae = qe;
            default:
              de(n, g, _, qe);
          }
        }
        if (M != null) if (f = ae !== null ? "" + ae : Ce(G), $(M)) {
          for (g = 0; g < M.length; g++)
            if ("" + M[g] === f) {
              n.push(' selected=""');
              break;
            }
        } else "" + M === f && n.push(' selected=""');
        else ce && n.push(' selected=""');
        return n.push(">"), ye(n, ge, G), G;
      case "textarea":
        n.push(pe("textarea")), ge = M = _ = null;
        for (G in f) if (r.call(f, G) && (ae = f[G], ae != null)) switch (G) {
          case "children":
            ge = ae;
            break;
          case "value":
            _ = ae;
            break;
          case "defaultValue":
            M = ae;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            de(
              n,
              g,
              G,
              ae
            );
        }
        if (_ === null && M !== null && (_ = M), n.push(">"), ge != null) {
          if (_ != null) throw Error(t(92));
          if ($(ge) && 1 < ge.length) throw Error(t(93));
          _ = "" + ge;
        }
        return typeof _ == "string" && _[0] === `
` && n.push(`
`), _ !== null && n.push(I("" + _)), null;
      case "input":
        n.push(pe("input")), ae = ge = G = _ = null;
        for (M in f) if (r.call(f, M) && (ce = f[M], ce != null)) switch (M) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ae = ce;
            break;
          case "defaultValue":
            G = ce;
            break;
          case "checked":
            ge = ce;
            break;
          case "value":
            _ = ce;
            break;
          default:
            de(n, g, M, ce);
        }
        return ge !== null ? de(n, g, "checked", ge) : ae !== null && de(n, g, "checked", ae), _ !== null ? de(n, g, "value", _) : G !== null && de(n, g, "value", G), n.push("/>"), null;
      case "menuitem":
        n.push(pe("menuitem"));
        for (var kt in f) if (r.call(f, kt) && (_ = f[kt], _ != null)) switch (kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            de(n, g, kt, _);
        }
        return n.push(">"), null;
      case "title":
        n.push(pe("title")), _ = null;
        for (qe in f) if (r.call(f, qe) && (M = f[qe], M != null)) switch (qe) {
          case "children":
            _ = M;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            de(n, g, qe, M);
        }
        return n.push(">"), _;
      case "listing":
      case "pre":
        n.push(pe(l)), M = _ = null;
        for (ae in f) if (r.call(f, ae) && (G = f[ae], G != null)) switch (ae) {
          case "children":
            _ = G;
            break;
          case "dangerouslySetInnerHTML":
            M = G;
            break;
          default:
            de(n, g, ae, G);
        }
        if (n.push(">"), M != null) {
          if (_ != null) throw Error(t(60));
          if (typeof M != "object" || !("__html" in M)) throw Error(t(61));
          f = M.__html, f != null && (typeof f == "string" && 0 < f.length && f[0] === `
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
        n.push(pe(l));
        for (var Ct in f) if (r.call(f, Ct) && (_ = f[Ct], _ != null)) switch (Ct) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, l));
          default:
            de(n, g, Ct, _);
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
        return Oe(
          n,
          f,
          l,
          g
        );
      case "html":
        return R.insertionMode === 0 && n.push("<!DOCTYPE html>"), Oe(n, f, l, g);
      default:
        if (l.indexOf("-") === -1 && typeof f.is != "string") return Oe(n, f, l, g);
        n.push(pe(l)), M = _ = null;
        for (ce in f) if (r.call(f, ce) && (G = f[ce], G != null)) switch (ce) {
          case "children":
            _ = G;
            break;
          case "dangerouslySetInnerHTML":
            M = G;
            break;
          case "style":
            S(n, g, G);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            y(ce) && typeof G != "function" && typeof G != "symbol" && n.push(" ", ce, '="', I(G), '"');
        }
        return n.push(">"), ye(n, M, _), _;
    }
  }
  function Te(n, l, f) {
    if (n.push('<!--$?--><template id="'), f === null) throw Error(t(395));
    return n.push(f), n.push('"></template>');
  }
  function xe(n, l, f, g) {
    switch (f.insertionMode) {
      case 0:
      case 1:
        return n.push('<div hidden id="'), n.push(l.segmentPrefix), l = g.toString(16), n.push(l), n.push('">');
      case 2:
        return n.push('<svg aria-hidden="true" style="display:none" id="'), n.push(l.segmentPrefix), l = g.toString(16), n.push(l), n.push('">');
      case 3:
        return n.push('<math aria-hidden="true" style="display:none" id="'), n.push(l.segmentPrefix), l = g.toString(16), n.push(l), n.push('">');
      case 4:
        return n.push('<table hidden id="'), n.push(l.segmentPrefix), l = g.toString(16), n.push(l), n.push('">');
      case 5:
        return n.push('<table hidden><tbody id="'), n.push(l.segmentPrefix), l = g.toString(16), n.push(l), n.push('">');
      case 6:
        return n.push('<table hidden><tr id="'), n.push(l.segmentPrefix), l = g.toString(16), n.push(l), n.push('">');
      case 7:
        return n.push('<table hidden><colgroup id="'), n.push(l.segmentPrefix), l = g.toString(16), n.push(l), n.push('">');
      default:
        throw Error(t(397));
    }
  }
  function Ye(n, l) {
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
  var Ie = /[<\u2028\u2029]/g;
  function ke(n) {
    return JSON.stringify(n).replace(Ie, function(l) {
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
  function De(n, l) {
    return l = l === void 0 ? "" : l, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: l + "P:", segmentPrefix: l + "S:", boundaryPrefix: l + "B:", idPrefix: l, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: n };
  }
  function Ve(n, l, f, g) {
    return f.generateStaticMarkup ? (n.push(I(l)), !1) : (l === "" ? n = g : (g && n.push("<!-- -->"), n.push(I(l)), n = !0), n);
  }
  var He = Object.assign, L = Symbol.for("react.element"), A = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), V = Symbol.for("react.provider"), k = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), le = Symbol.for("react.scope"), ee = Symbol.for("react.debug_trace_mode"), se = Symbol.for("react.legacy_hidden"), te = Symbol.for("react.default_value"), fe = Symbol.iterator;
  function Fe(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case P:
        return "Fragment";
      case A:
        return "Portal";
      case p:
        return "Profiler";
      case F:
        return "StrictMode";
      case K:
        return "Suspense";
      case Q:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case k:
        return (n.displayName || "Context") + ".Consumer";
      case V:
        return (n._context.displayName || "Context") + ".Provider";
      case re:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case W:
        return l = n.displayName || null, l !== null ? l : Fe(n.type) || "Memo";
      case ne:
        l = n._payload, n = n._init;
        try {
          return Fe(n(l));
        } catch {
        }
    }
    return null;
  }
  var ue = {};
  function Ze(n, l) {
    if (n = n.contextTypes, !n) return ue;
    var f = {}, g;
    for (g in n) f[g] = l[g];
    return f;
  }
  var $e = null;
  function he(n, l) {
    if (n !== l) {
      n.context._currentValue2 = n.parentValue, n = n.parent;
      var f = l.parent;
      if (n === null) {
        if (f !== null) throw Error(t(401));
      } else {
        if (f === null) throw Error(t(401));
        he(n, f);
      }
      l.context._currentValue2 = l.value;
    }
  }
  function z(n) {
    n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && z(n);
  }
  function oe(n) {
    var l = n.parent;
    l !== null && oe(l), n.context._currentValue2 = n.value;
  }
  function Ke(n, l) {
    if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null) throw Error(t(402));
    n.depth === l.depth ? he(n, l) : Ke(n, l);
  }
  function Je(n, l) {
    var f = l.parent;
    if (f === null) throw Error(t(402));
    n.depth === f.depth ? he(n, f) : Je(n, f), l.context._currentValue2 = l.value;
  }
  function _e(n) {
    var l = $e;
    l !== n && (l === null ? oe(n) : n === null ? z(l) : l.depth === n.depth ? he(l, n) : l.depth > n.depth ? Ke(l, n) : Je(l, n), $e = n);
  }
  var ar = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(n, l) {
    n = n._reactInternals, n.queue !== null && n.queue.push(l);
  }, enqueueReplaceState: function(n, l) {
    n = n._reactInternals, n.replace = !0, n.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function ir(n, l, f, g) {
    var R = n.state !== void 0 ? n.state : null;
    n.updater = ar, n.props = f, n.state = R;
    var _ = { queue: [], replace: !1 };
    n._reactInternals = _;
    var M = l.contextType;
    if (n.context = typeof M == "object" && M !== null ? M._currentValue2 : g, M = l.getDerivedStateFromProps, typeof M == "function" && (M = M(f, R), R = M == null ? R : He({}, R, M), n.state = R), typeof l.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function")) if (l = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && ar.enqueueReplaceState(n, n.state, null), _.queue !== null && 0 < _.queue.length) if (l = _.queue, M = _.replace, _.queue = null, _.replace = !1, M && l.length === 1) n.state = l[0];
    else {
      for (_ = M ? l[0] : n.state, R = !0, M = M ? 1 : 0; M < l.length; M++) {
        var G = l[M];
        G = typeof G == "function" ? G.call(n, _, f, g) : G, G != null && (R ? (R = !1, _ = He({}, _, G)) : He(_, G));
      }
      n.state = _;
    }
    else _.queue = null;
  }
  var wr = { id: 1, overflow: "" };
  function Pt(n, l, f) {
    var g = n.id;
    n = n.overflow;
    var R = 32 - Lt(g) - 1;
    g &= ~(1 << R), f += 1;
    var _ = 32 - Lt(l) + R;
    if (30 < _) {
      var M = R - R % 5;
      return _ = (g & (1 << M) - 1).toString(32), g >>= M, R -= M, { id: 1 << 32 - Lt(l) + R | f << R | g, overflow: _ + n };
    }
    return { id: 1 << _ | f << R | g, overflow: n };
  }
  var Lt = Math.clz32 ? Math.clz32 : ut, Ht = Math.log, Gt = Math.LN2;
  function ut(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ht(n) / Gt | 0) | 0;
  }
  function Ot(n, l) {
    return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
  }
  var sr = typeof Object.is == "function" ? Object.is : Ot, tt = null, lr = null, it = null, Ee = null, Mt = !1, Ue = !1, st = 0, yt = null, Dt = 0;
  function ct() {
    if (tt === null) throw Error(t(321));
    return tt;
  }
  function ur() {
    if (0 < Dt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Yt() {
    return Ee === null ? it === null ? (Mt = !1, it = Ee = ur()) : (Mt = !0, Ee = it) : Ee.next === null ? (Mt = !1, Ee = Ee.next = ur()) : (Mt = !0, Ee = Ee.next), Ee;
  }
  function cr() {
    lr = tt = null, Ue = !1, it = null, Dt = 0, Ee = yt = null;
  }
  function Ft(n, l) {
    return typeof l == "function" ? l(n) : l;
  }
  function Zt(n, l, f) {
    if (tt = ct(), Ee = Yt(), Mt) {
      var g = Ee.queue;
      if (l = g.dispatch, yt !== null && (f = yt.get(g), f !== void 0)) {
        yt.delete(g), g = Ee.memoizedState;
        do
          g = n(g, f.action), f = f.next;
        while (f !== null);
        return Ee.memoizedState = g, [g, l];
      }
      return [Ee.memoizedState, l];
    }
    return n = n === Ft ? typeof l == "function" ? l() : l : f !== void 0 ? f(l) : l, Ee.memoizedState = n, n = Ee.queue = { last: null, dispatch: null }, n = n.dispatch = wt.bind(null, tt, n), [Ee.memoizedState, n];
  }
  function xr(n, l) {
    if (tt = ct(), Ee = Yt(), l = l === void 0 ? null : l, Ee !== null) {
      var f = Ee.memoizedState;
      if (f !== null && l !== null) {
        var g = f[1];
        e: if (g === null) g = !1;
        else {
          for (var R = 0; R < g.length && R < l.length; R++) if (!sr(l[R], g[R])) {
            g = !1;
            break e;
          }
          g = !0;
        }
        if (g) return f[0];
      }
    }
    return n = n(), Ee.memoizedState = [n, l], n;
  }
  function wt(n, l, f) {
    if (25 <= Dt) throw Error(t(301));
    if (n === tt) if (Ue = !0, n = { action: f, next: null }, yt === null && (yt = /* @__PURE__ */ new Map()), f = yt.get(l), f === void 0) yt.set(l, n);
    else {
      for (l = f; l.next !== null; ) l = l.next;
      l.next = n;
    }
  }
  function Jt() {
    throw Error(t(394));
  }
  function jt() {
  }
  var dr = { readContext: function(n) {
    return n._currentValue2;
  }, useContext: function(n) {
    return ct(), n._currentValue2;
  }, useMemo: xr, useReducer: Zt, useRef: function(n) {
    tt = ct(), Ee = Yt();
    var l = Ee.memoizedState;
    return l === null ? (n = { current: n }, Ee.memoizedState = n) : l;
  }, useState: function(n) {
    return Zt(Ft, n);
  }, useInsertionEffect: jt, useLayoutEffect: function() {
  }, useCallback: function(n, l) {
    return xr(function() {
      return n;
    }, l);
  }, useImperativeHandle: jt, useEffect: jt, useDebugValue: jt, useDeferredValue: function(n) {
    return ct(), n;
  }, useTransition: function() {
    return ct(), [
      !1,
      Jt
    ];
  }, useId: function() {
    var n = lr.treeContext, l = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - Lt(n) - 1)).toString(32) + l;
    var f = It;
    if (f === null) throw Error(t(404));
    return l = st++, n = ":" + f.idPrefix + "R" + n, 0 < l && (n += "H" + l.toString(32)), n + ":";
  }, useMutableSource: function(n, l) {
    return ct(), l(n._source);
  }, useSyncExternalStore: function(n, l, f) {
    if (f === void 0) throw Error(t(407));
    return f();
  } }, It = null, xt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function dt(n) {
    return console.error(n), null;
  }
  function Nt() {
  }
  function Sr(n, l, f, g, R, _, M, G, ae) {
    var ce = [], ge = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: g, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ge, pingedTasks: ce, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: R === void 0 ? dt : R, onAllReady: Nt, onShellReady: M === void 0 ? Nt : M, onShellError: Nt, onFatalError: Nt }, f = zt(l, 0, null, f, !1, !1), f.parentFlushed = !0, n = Xt(l, n, null, f, ge, ue, null, wr), ce.push(n), l;
  }
  function Xt(n, l, f, g, R, _, M, G) {
    n.allPendingTasks++, f === null ? n.pendingRootTasks++ : f.pendingTasks++;
    var ae = { node: l, ping: function() {
      var ce = n.pingedTasks;
      ce.push(ae), ce.length === 1 && tn(n);
    }, blockedBoundary: f, blockedSegment: g, abortSet: R, legacyContext: _, context: M, treeContext: G };
    return R.add(ae), ae;
  }
  function zt(n, l, f, g, R, _) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: g, boundary: f, lastPushedText: R, textEmbedded: _ };
  }
  function $t(n, l) {
    if (n = n.onError(l), n != null && typeof n != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
    return n;
  }
  function v(n, l) {
    var f = n.onShellError;
    f(l), f = n.onFatalError, f(l), n.destination !== null ? (n.status = 2, n.destination.destroy(l)) : (n.status = 1, n.fatalError = l);
  }
  function X(n, l, f, g, R) {
    for (tt = {}, lr = l, st = 0, n = f(g, R); Ue; ) Ue = !1, st = 0, Dt += 1, Ee = null, n = f(g, R);
    return cr(), n;
  }
  function B(n, l, f, g) {
    var R = f.render(), _ = g.childContextTypes;
    if (_ != null) {
      var M = l.legacyContext;
      if (typeof f.getChildContext != "function") g = M;
      else {
        f = f.getChildContext();
        for (var G in f) if (!(G in _)) throw Error(t(108, Fe(g) || "Unknown", G));
        g = He({}, M, f);
      }
      l.legacyContext = g, Ne(n, l, R), l.legacyContext = M;
    } else Ne(n, l, R);
  }
  function Se(n, l) {
    if (n && n.defaultProps) {
      l = He({}, l), n = n.defaultProps;
      for (var f in n) l[f] === void 0 && (l[f] = n[f]);
      return l;
    }
    return l;
  }
  function Me(n, l, f, g, R) {
    if (typeof f == "function") if (f.prototype && f.prototype.isReactComponent) {
      R = Ze(f, l.legacyContext);
      var _ = f.contextType;
      _ = new f(g, typeof _ == "object" && _ !== null ? _._currentValue2 : R), ir(_, f, g, R), B(n, l, _, f);
    } else {
      _ = Ze(f, l.legacyContext), R = X(n, l, f, g, _);
      var M = st !== 0;
      if (typeof R == "object" && R !== null && typeof R.render == "function" && R.$$typeof === void 0) ir(R, f, g, _), B(n, l, R, f);
      else if (M) {
        g = l.treeContext, l.treeContext = Pt(g, 1, 0);
        try {
          Ne(n, l, R);
        } finally {
          l.treeContext = g;
        }
      } else Ne(n, l, R);
    }
    else if (typeof f == "string") {
      switch (R = l.blockedSegment, _ = we(R.chunks, f, g, n.responseState, R.formatContext), R.lastPushedText = !1, M = R.formatContext, R.formatContext = Z(M, f, g), lt(n, l, _), R.formatContext = M, f) {
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
          R.chunks.push("</", f, ">");
      }
      R.lastPushedText = !1;
    } else {
      switch (f) {
        case se:
        case ee:
        case F:
        case p:
        case P:
          Ne(n, l, g.children);
          return;
        case Q:
          Ne(n, l, g.children);
          return;
        case le:
          throw Error(t(343));
        case K:
          e: {
            f = l.blockedBoundary, R = l.blockedSegment, _ = g.fallback, g = g.children, M = /* @__PURE__ */ new Set();
            var G = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: M, errorDigest: null }, ae = zt(n, R.chunks.length, G, R.formatContext, !1, !1);
            R.children.push(ae), R.lastPushedText = !1;
            var ce = zt(n, 0, null, R.formatContext, !1, !1);
            ce.parentFlushed = !0, l.blockedBoundary = G, l.blockedSegment = ce;
            try {
              if (lt(
                n,
                l,
                g
              ), n.responseState.generateStaticMarkup || ce.lastPushedText && ce.textEmbedded && ce.chunks.push("<!-- -->"), ce.status = 1, St(G, ce), G.pendingTasks === 0) break e;
            } catch (ge) {
              ce.status = 4, G.forceClientRender = !0, G.errorDigest = $t(n, ge);
            } finally {
              l.blockedBoundary = f, l.blockedSegment = R;
            }
            l = Xt(n, _, f, ae, M, l.legacyContext, l.context, l.treeContext), n.pingedTasks.push(l);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case re:
          if (g = X(n, l, f.render, g, R), st !== 0) {
            f = l.treeContext, l.treeContext = Pt(f, 1, 0);
            try {
              Ne(n, l, g);
            } finally {
              l.treeContext = f;
            }
          } else Ne(n, l, g);
          return;
        case W:
          f = f.type, g = Se(f, g), Me(n, l, f, g, R);
          return;
        case V:
          if (R = g.children, f = f._context, g = g.value, _ = f._currentValue2, f._currentValue2 = g, M = $e, $e = g = { parent: M, depth: M === null ? 0 : M.depth + 1, context: f, parentValue: _, value: g }, l.context = g, Ne(n, l, R), n = $e, n === null) throw Error(t(403));
          g = n.parentValue, n.context._currentValue2 = g === te ? n.context._defaultValue : g, n = $e = n.parent, l.context = n;
          return;
        case k:
          g = g.children, g = g(f._currentValue2), Ne(n, l, g);
          return;
        case ne:
          R = f._init, f = R(f._payload), g = Se(f, g), Me(
            n,
            l,
            f,
            g,
            void 0
          );
          return;
      }
      throw Error(t(130, f == null ? f : typeof f, ""));
    }
  }
  function Ne(n, l, f) {
    if (l.node = f, typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case L:
          Me(n, l, f.type, f.props, f.ref);
          return;
        case A:
          throw Error(t(257));
        case ne:
          var g = f._init;
          f = g(f._payload), Ne(n, l, f);
          return;
      }
      if ($(f)) {
        We(n, l, f);
        return;
      }
      if (f === null || typeof f != "object" ? g = null : (g = fe && f[fe] || f["@@iterator"], g = typeof g == "function" ? g : null), g && (g = g.call(f))) {
        if (f = g.next(), !f.done) {
          var R = [];
          do
            R.push(f.value), f = g.next();
          while (!f.done);
          We(n, l, R);
        }
        return;
      }
      throw n = Object.prototype.toString.call(f), Error(t(31, n === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : n));
    }
    typeof f == "string" ? (g = l.blockedSegment, g.lastPushedText = Ve(l.blockedSegment.chunks, f, n.responseState, g.lastPushedText)) : typeof f == "number" && (g = l.blockedSegment, g.lastPushedText = Ve(l.blockedSegment.chunks, "" + f, n.responseState, g.lastPushedText));
  }
  function We(n, l, f) {
    for (var g = f.length, R = 0; R < g; R++) {
      var _ = l.treeContext;
      l.treeContext = Pt(_, g, R);
      try {
        lt(n, l, f[R]);
      } finally {
        l.treeContext = _;
      }
    }
  }
  function lt(n, l, f) {
    var g = l.blockedSegment.formatContext, R = l.legacyContext, _ = l.context;
    try {
      return Ne(n, l, f);
    } catch (ae) {
      if (cr(), typeof ae == "object" && ae !== null && typeof ae.then == "function") {
        f = ae;
        var M = l.blockedSegment, G = zt(n, M.chunks.length, null, M.formatContext, M.lastPushedText, !0);
        M.children.push(G), M.lastPushedText = !1, n = Xt(n, l.node, l.blockedBoundary, G, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, f.then(n, n), l.blockedSegment.formatContext = g, l.legacyContext = R, l.context = _, _e(_);
      } else throw l.blockedSegment.formatContext = g, l.legacyContext = R, l.context = _, _e(_), ae;
    }
  }
  function rt(n) {
    var l = n.blockedBoundary;
    n = n.blockedSegment, n.status = 3, Kt(this, l, n);
  }
  function Xe(n, l, f) {
    var g = n.blockedBoundary;
    n.blockedSegment.status = 3, g === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.push(null))) : (g.pendingTasks--, g.forceClientRender || (g.forceClientRender = !0, n = f === void 0 ? Error(t(432)) : f, g.errorDigest = l.onError(n), g.parentFlushed && l.clientRenderedBoundaries.push(g)), g.fallbackAbortableTasks.forEach(function(R) {
      return Xe(R, l, f);
    }), g.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (g = l.onAllReady, g()));
  }
  function St(n, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var f = l.children[0];
      f.id = l.id, f.parentFlushed = !0, f.status === 1 && St(n, f);
    } else n.completedSegments.push(l);
  }
  function Kt(n, l, f) {
    if (l === null) {
      if (f.parentFlushed) {
        if (n.completedRootSegment !== null) throw Error(t(389));
        n.completedRootSegment = f;
      }
      n.pendingRootTasks--, n.pendingRootTasks === 0 && (n.onShellError = Nt, l = n.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (f.parentFlushed && f.status === 1 && St(l, f), l.parentFlushed && n.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(rt, n), l.fallbackAbortableTasks.clear()) : f.parentFlushed && f.status === 1 && (St(l, f), l.completedSegments.length === 1 && l.parentFlushed && n.partialBoundaries.push(l)));
    n.allPendingTasks--, n.allPendingTasks === 0 && (n = n.onAllReady, n());
  }
  function tn(n) {
    if (n.status !== 2) {
      var l = $e, f = xt.current;
      xt.current = dr;
      var g = It;
      It = n.responseState;
      try {
        var R = n.pingedTasks, _;
        for (_ = 0; _ < R.length; _++) {
          var M = R[_], G = n, ae = M.blockedSegment;
          if (ae.status === 0) {
            _e(M.context);
            try {
              Ne(G, M, M.node), G.responseState.generateStaticMarkup || ae.lastPushedText && ae.textEmbedded && ae.chunks.push("<!-- -->"), M.abortSet.delete(M), ae.status = 1, Kt(G, M.blockedBoundary, ae);
            } catch (ft) {
              if (cr(), typeof ft == "object" && ft !== null && typeof ft.then == "function") {
                var ce = M.ping;
                ft.then(ce, ce);
              } else {
                M.abortSet.delete(M), ae.status = 4;
                var ge = M.blockedBoundary, qe = ft, kt = $t(G, qe);
                if (ge === null ? v(G, qe) : (ge.pendingTasks--, ge.forceClientRender || (ge.forceClientRender = !0, ge.errorDigest = kt, ge.parentFlushed && G.clientRenderedBoundaries.push(ge))), G.allPendingTasks--, G.allPendingTasks === 0) {
                  var Ct = G.onAllReady;
                  Ct();
                }
              }
            } finally {
            }
          }
        }
        R.splice(0, _), n.destination !== null && kr(n, n.destination);
      } catch (ft) {
        $t(n, ft), v(n, ft);
      } finally {
        It = g, xt.current = f, f === dr && _e(l);
      }
    }
  }
  function fr(n, l, f) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        var g = f.id = n.nextSegmentId++;
        return f.lastPushedText = !1, f.textEmbedded = !1, n = n.responseState, l.push('<template id="'), l.push(n.placeholderPrefix), n = g.toString(16), l.push(n), l.push('"></template>');
      case 1:
        f.status = 2;
        var R = !0;
        g = f.chunks;
        var _ = 0;
        f = f.children;
        for (var M = 0; M < f.length; M++) {
          for (R = f[M]; _ < R.index; _++) l.push(g[_]);
          R = pr(n, l, R);
        }
        for (; _ < g.length - 1; _++) l.push(g[_]);
        return _ < g.length && (R = l.push(g[_])), R;
      default:
        throw Error(t(390));
    }
  }
  function pr(n, l, f) {
    var g = f.boundary;
    if (g === null) return fr(n, l, f);
    if (g.parentFlushed = !0, g.forceClientRender) return n.responseState.generateStaticMarkup || (g = g.errorDigest, l.push("<!--$!-->"), l.push("<template"), g && (l.push(' data-dgst="'), g = I(g), l.push(g), l.push('"')), l.push("></template>")), fr(n, l, f), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
    if (0 < g.pendingTasks) {
      g.rootSegmentID = n.nextSegmentId++, 0 < g.completedSegments.length && n.partialBoundaries.push(g);
      var R = n.responseState, _ = R.nextSuspenseID++;
      return R = R.boundaryPrefix + _.toString(16), g = g.id = R, Te(l, n.responseState, g), fr(n, l, f), l.push("<!--/$-->");
    }
    if (g.byteSize > n.progressiveChunkSize) return g.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(g), Te(l, n.responseState, g.id), fr(n, l, f), l.push("<!--/$-->");
    if (n.responseState.generateStaticMarkup || l.push("<!--$-->"), f = g.completedSegments, f.length !== 1) throw Error(t(391));
    return pr(n, l, f[0]), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
  }
  function Pr(n, l, f) {
    return xe(l, n.responseState, f.formatContext, f.id), pr(n, l, f), Ye(l, f.formatContext);
  }
  function Lr(n, l, f) {
    for (var g = f.completedSegments, R = 0; R < g.length; R++) Mr(n, l, f, g[R]);
    if (g.length = 0, n = n.responseState, g = f.id, f = f.rootSegmentID, l.push(n.startInlineScript), n.sentCompleteBoundaryFunction ? l.push('$RC("') : (n.sentCompleteBoundaryFunction = !0, l.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), g === null) throw Error(t(395));
    return f = f.toString(16), l.push(g), l.push('","'), l.push(n.segmentPrefix), l.push(f), l.push('")<\/script>');
  }
  function Mr(n, l, f, g) {
    if (g.status === 2) return !0;
    var R = g.id;
    if (R === -1) {
      if ((g.id = f.rootSegmentID) === -1) throw Error(t(392));
      return Pr(n, l, g);
    }
    return Pr(n, l, g), n = n.responseState, l.push(n.startInlineScript), n.sentCompleteSegmentFunction ? l.push('$RS("') : (n.sentCompleteSegmentFunction = !0, l.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), l.push(n.segmentPrefix), R = R.toString(16), l.push(R), l.push('","'), l.push(n.placeholderPrefix), l.push(R), l.push('")<\/script>');
  }
  function kr(n, l) {
    try {
      var f = n.completedRootSegment;
      if (f !== null && n.pendingRootTasks === 0) {
        pr(n, l, f), n.completedRootSegment = null;
        var g = n.responseState.bootstrapChunks;
        for (f = 0; f < g.length - 1; f++) l.push(g[f]);
        f < g.length && l.push(g[f]);
      }
      var R = n.clientRenderedBoundaries, _;
      for (_ = 0; _ < R.length; _++) {
        var M = R[_];
        g = l;
        var G = n.responseState, ae = M.id, ce = M.errorDigest, ge = M.errorMessage, qe = M.errorComponentStack;
        if (g.push(G.startInlineScript), G.sentClientRenderFunction ? g.push('$RX("') : (G.sentClientRenderFunction = !0, g.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ae === null) throw Error(t(395));
        if (g.push(ae), g.push('"'), ce || ge || qe) {
          g.push(",");
          var kt = ke(ce || "");
          g.push(kt);
        }
        if (ge || qe) {
          g.push(",");
          var Ct = ke(ge || "");
          g.push(Ct);
        }
        if (qe) {
          g.push(",");
          var ft = ke(qe);
          g.push(ft);
        }
        if (!g.push(")<\/script>")) {
          n.destination = null, _++, R.splice(0, _);
          return;
        }
      }
      R.splice(0, _);
      var hr = n.completedBoundaries;
      for (_ = 0; _ < hr.length; _++) if (!Lr(n, l, hr[_])) {
        n.destination = null, _++, hr.splice(0, _);
        return;
      }
      hr.splice(0, _);
      var Ut = n.partialBoundaries;
      for (_ = 0; _ < Ut.length; _++) {
        var Fr = Ut[_];
        e: {
          R = n, M = l;
          var gr = Fr.completedSegments;
          for (G = 0; G < gr.length; G++) if (!Mr(R, M, Fr, gr[G])) {
            G++, gr.splice(0, G);
            var on = !1;
            break e;
          }
          gr.splice(0, G), on = !0;
        }
        if (!on) {
          n.destination = null, _++, Ut.splice(0, _);
          return;
        }
      }
      Ut.splice(0, _);
      var Qt = n.completedBoundaries;
      for (_ = 0; _ < Qt.length; _++) if (!Lr(n, l, Qt[_])) {
        n.destination = null, _++, Qt.splice(0, _);
        return;
      }
      Qt.splice(0, _);
    } finally {
      n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && l.push(null);
    }
  }
  function rn(n, l) {
    try {
      var f = n.abortableTasks;
      f.forEach(function(g) {
        return Xe(g, n, l);
      }), f.clear(), n.destination !== null && kr(n, n.destination);
    } catch (g) {
      $t(n, g), v(n, g);
    }
  }
  function nn() {
  }
  function Dr(n, l, f, g) {
    var R = !1, _ = null, M = "", G = { push: function(ce) {
      return ce !== null && (M += ce), !0;
    }, destroy: function(ce) {
      R = !0, _ = ce;
    } }, ae = !1;
    if (n = Sr(n, De(f, l ? l.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, nn, void 0, function() {
      ae = !0;
    }), tn(n), rn(n, g), n.status === 1) n.status = 2, G.destroy(n.fatalError);
    else if (n.status !== 2 && n.destination === null) {
      n.destination = G;
      try {
        kr(n, G);
      } catch (ce) {
        $t(n, ce), v(n, ce);
      }
    }
    if (R) throw _;
    if (!ae) throw Error(t(426));
    return M;
  }
  return br.renderToNodeStream = function() {
    throw Error(t(207));
  }, br.renderToStaticMarkup = function(n, l) {
    return Dr(n, l, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, br.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, br.renderToString = function(n, l) {
    return Dr(n, l, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, br.version = "18.3.1", br;
}
var wn = {}, ba;
function el() {
  if (ba) return wn;
  ba = 1;
  var e = et;
  function t(o) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, c = 1; c < arguments.length; c++) s += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + o + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, a = 0;
  function u(o, s) {
    if (s.length !== 0) if (512 < s.length) 0 < a && (o.enqueue(new Uint8Array(r.buffer, 0, a)), r = new Uint8Array(512), a = 0), o.enqueue(s);
    else {
      var c = r.length - a;
      c < s.length && (c === 0 ? o.enqueue(r) : (r.set(s.subarray(0, c), a), o.enqueue(r), s = s.subarray(c)), r = new Uint8Array(512), a = 0), r.set(s, a), a += s.length;
    }
  }
  function d(o, s) {
    return u(o, s), !0;
  }
  function y(o) {
    r && 0 < a && (o.enqueue(new Uint8Array(r.buffer, 0, a)), r = null, a = 0);
  }
  var w = new TextEncoder();
  function b(o) {
    return w.encode(o);
  }
  function m(o) {
    return w.encode(o);
  }
  function O(o, s) {
    typeof o.error == "function" ? o.error(s) : o.close();
  }
  var C = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Y = {}, I = {};
  function x(o) {
    return C.call(I, o) ? !0 : C.call(Y, o) ? !1 : j.test(o) ? I[o] = !0 : (Y[o] = !0, !1);
  }
  function N(o, s, c, h, E, T, D) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = h, this.attributeNamespace = E, this.mustUseProperty = c, this.propertyName = o, this.type = s, this.sanitizeURL = T, this.removeEmptyString = D;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    $[o] = new N(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var s = o[0];
    $[s] = new N(s, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    $[o] = new N(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    $[o] = new N(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    $[o] = new N(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    $[o] = new N(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    $[o] = new N(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    $[o] = new N(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    $[o] = new N(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var U = /[\-:]([a-z])/g;
  function Z(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var s = o.replace(
      U,
      Z
    );
    $[s] = new N(s, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var s = o.replace(U, Z);
    $[s] = new N(s, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var s = o.replace(U, Z);
    $[s] = new N(s, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    $[o] = new N(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    $[o] = new N(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var J = {
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
  Object.keys(J).forEach(function(o) {
    S.forEach(function(s) {
      s = s + o.charAt(0).toUpperCase() + o.substring(1), J[s] = J[o];
    });
  });
  var de = /["'&<>]/;
  function ye(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var s = de.exec(o);
    if (s) {
      var c = "", h, E = 0;
      for (h = s.index; h < o.length; h++) {
        switch (o.charCodeAt(h)) {
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
        E !== h && (c += o.substring(E, h)), E = h + 1, c += s;
      }
      o = E !== h ? c + o.substring(E, h) : c;
    }
    return o;
  }
  var Ce = /([A-Z])/g, Oe = /^ms-/, ze = Array.isArray, Ge = m("<script>"), pe = m("<\/script>"), we = m('<script src="'), Te = m('<script type="module" src="'), xe = m('" async=""><\/script>'), Ye = /(<\/|<)(s)(cript)/gi;
  function Ie(o, s, c, h) {
    return "" + s + (c === "s" ? "\\u0073" : "\\u0053") + h;
  }
  function ke(o, s, c, h, E) {
    o = o === void 0 ? "" : o, s = s === void 0 ? Ge : m('<script nonce="' + ye(s) + '">');
    var T = [];
    if (c !== void 0 && T.push(s, b(("" + c).replace(Ye, Ie)), pe), h !== void 0) for (c = 0; c < h.length; c++) T.push(we, b(ye(h[c])), xe);
    if (E !== void 0) for (h = 0; h < E.length; h++) T.push(Te, b(ye(E[h])), xe);
    return { bootstrapChunks: T, startInlineScript: s, placeholderPrefix: m(o + "P:"), segmentPrefix: m(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function De(o, s) {
    return { insertionMode: o, selectedValue: s };
  }
  function Ve(o) {
    return De(o === "http://www.w3.org/2000/svg" ? 2 : o === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function He(o, s, c) {
    switch (s) {
      case "select":
        return De(1, c.value != null ? c.value : c.defaultValue);
      case "svg":
        return De(2, null);
      case "math":
        return De(3, null);
      case "foreignObject":
        return De(1, null);
      case "table":
        return De(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return De(5, null);
      case "colgroup":
        return De(7, null);
      case "tr":
        return De(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? De(1, null) : o;
  }
  var L = m("<!-- -->");
  function A(o, s, c, h) {
    return s === "" ? h : (h && o.push(L), o.push(b(ye(s))), !0);
  }
  var P = /* @__PURE__ */ new Map(), F = m(' style="'), p = m(":"), V = m(";");
  function k(o, s, c) {
    if (typeof c != "object") throw Error(t(62));
    s = !0;
    for (var h in c) if (C.call(c, h)) {
      var E = c[h];
      if (E != null && typeof E != "boolean" && E !== "") {
        if (h.indexOf("--") === 0) {
          var T = b(ye(h));
          E = b(ye(("" + E).trim()));
        } else {
          T = h;
          var D = P.get(T);
          D !== void 0 || (D = m(ye(T.replace(Ce, "-$1").toLowerCase().replace(Oe, "-ms-"))), P.set(T, D)), T = D, E = typeof E == "number" ? E === 0 || C.call(J, h) ? b("" + E) : b(E + "px") : b(ye(("" + E).trim()));
        }
        s ? (s = !1, o.push(F, T, p, E)) : o.push(V, T, p, E);
      }
    }
    s || o.push(Q);
  }
  var re = m(" "), K = m('="'), Q = m('"'), W = m('=""');
  function ne(o, s, c, h) {
    switch (c) {
      case "style":
        k(o, s, h);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < c.length) || c[0] !== "o" && c[0] !== "O" || c[1] !== "n" && c[1] !== "N") {
      if (s = $.hasOwnProperty(c) ? $[c] : null, s !== null) {
        switch (typeof h) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (c = b(s.attributeName), s.type) {
          case 3:
            h && o.push(re, c, W);
            break;
          case 4:
            h === !0 ? o.push(re, c, W) : h !== !1 && o.push(re, c, K, b(ye(h)), Q);
            break;
          case 5:
            isNaN(h) || o.push(re, c, K, b(ye(h)), Q);
            break;
          case 6:
            !isNaN(h) && 1 <= h && o.push(re, c, K, b(ye(h)), Q);
            break;
          default:
            s.sanitizeURL && (h = "" + h), o.push(re, c, K, b(ye(h)), Q);
        }
      } else if (x(c)) {
        switch (typeof h) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = c.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        o.push(re, b(c), K, b(ye(h)), Q);
      }
    }
  }
  var le = m(">"), ee = m("/>");
  function se(o, s, c) {
    if (s != null) {
      if (c != null) throw Error(t(60));
      if (typeof s != "object" || !("__html" in s)) throw Error(t(61));
      s = s.__html, s != null && o.push(b("" + s));
    }
  }
  function te(o) {
    var s = "";
    return e.Children.forEach(o, function(c) {
      c != null && (s += c);
    }), s;
  }
  var fe = m(' selected=""');
  function Fe(o, s, c, h) {
    o.push(he(c));
    var E = c = null, T;
    for (T in s) if (C.call(s, T)) {
      var D = s[T];
      if (D != null) switch (T) {
        case "children":
          c = D;
          break;
        case "dangerouslySetInnerHTML":
          E = D;
          break;
        default:
          ne(o, h, T, D);
      }
    }
    return o.push(le), se(o, E, c), typeof c == "string" ? (o.push(b(ye(c))), null) : c;
  }
  var ue = m(`
`), Ze = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, $e = /* @__PURE__ */ new Map();
  function he(o) {
    var s = $e.get(o);
    if (s === void 0) {
      if (!Ze.test(o)) throw Error(t(65, o));
      s = m("<" + o), $e.set(o, s);
    }
    return s;
  }
  var z = m("<!DOCTYPE html>");
  function oe(o, s, c, h, E) {
    switch (s) {
      case "select":
        o.push(he("select"));
        var T = null, D = null;
        for (me in c) if (C.call(c, me)) {
          var q = c[me];
          if (q != null) switch (me) {
            case "children":
              T = q;
              break;
            case "dangerouslySetInnerHTML":
              D = q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(o, h, me, q);
          }
        }
        return o.push(le), se(o, D, T), T;
      case "option":
        D = E.selectedValue, o.push(he("option"));
        var ie = q = null, ve = null, me = null;
        for (T in c) if (C.call(c, T)) {
          var Be = c[T];
          if (Be != null) switch (T) {
            case "children":
              q = Be;
              break;
            case "selected":
              ve = Be;
              break;
            case "dangerouslySetInnerHTML":
              me = Be;
              break;
            case "value":
              ie = Be;
            default:
              ne(o, h, T, Be);
          }
        }
        if (D != null) if (c = ie !== null ? "" + ie : te(q), ze(D)) {
          for (h = 0; h < D.length; h++)
            if ("" + D[h] === c) {
              o.push(fe);
              break;
            }
        } else "" + D === c && o.push(fe);
        else ve && o.push(fe);
        return o.push(le), se(o, me, q), q;
      case "textarea":
        o.push(he("textarea")), me = D = T = null;
        for (q in c) if (C.call(c, q) && (ie = c[q], ie != null)) switch (q) {
          case "children":
            me = ie;
            break;
          case "value":
            T = ie;
            break;
          case "defaultValue":
            D = ie;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(o, h, q, ie);
        }
        if (T === null && D !== null && (T = D), o.push(le), me != null) {
          if (T != null) throw Error(t(92));
          if (ze(me) && 1 < me.length) throw Error(t(93));
          T = "" + me;
        }
        return typeof T == "string" && T[0] === `
` && o.push(ue), T !== null && o.push(b(ye("" + T))), null;
      case "input":
        o.push(he("input")), ie = me = q = T = null;
        for (D in c) if (C.call(c, D) && (ve = c[D], ve != null)) switch (D) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ie = ve;
            break;
          case "defaultValue":
            q = ve;
            break;
          case "checked":
            me = ve;
            break;
          case "value":
            T = ve;
            break;
          default:
            ne(o, h, D, ve);
        }
        return me !== null ? ne(
          o,
          h,
          "checked",
          me
        ) : ie !== null && ne(o, h, "checked", ie), T !== null ? ne(o, h, "value", T) : q !== null && ne(o, h, "value", q), o.push(ee), null;
      case "menuitem":
        o.push(he("menuitem"));
        for (var ht in c) if (C.call(c, ht) && (T = c[ht], T != null)) switch (ht) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(o, h, ht, T);
        }
        return o.push(le), null;
      case "title":
        o.push(he("title")), T = null;
        for (Be in c) if (C.call(c, Be) && (D = c[Be], D != null)) switch (Be) {
          case "children":
            T = D;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(o, h, Be, D);
        }
        return o.push(le), T;
      case "listing":
      case "pre":
        o.push(he(s)), D = T = null;
        for (ie in c) if (C.call(c, ie) && (q = c[ie], q != null)) switch (ie) {
          case "children":
            T = q;
            break;
          case "dangerouslySetInnerHTML":
            D = q;
            break;
          default:
            ne(o, h, ie, q);
        }
        if (o.push(le), D != null) {
          if (T != null) throw Error(t(60));
          if (typeof D != "object" || !("__html" in D)) throw Error(t(61));
          c = D.__html, c != null && (typeof c == "string" && 0 < c.length && c[0] === `
` ? o.push(ue, b(c)) : o.push(b("" + c)));
        }
        return typeof T == "string" && T[0] === `
` && o.push(ue), T;
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
        o.push(he(s));
        for (var _t in c) if (C.call(c, _t) && (T = c[_t], T != null)) switch (_t) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, s));
          default:
            ne(o, h, _t, T);
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
        return Fe(o, c, s, h);
      case "html":
        return E.insertionMode === 0 && o.push(z), Fe(o, c, s, h);
      default:
        if (s.indexOf("-") === -1 && typeof c.is != "string") return Fe(o, c, s, h);
        o.push(he(s)), D = T = null;
        for (ve in c) if (C.call(c, ve) && (q = c[ve], q != null)) switch (ve) {
          case "children":
            T = q;
            break;
          case "dangerouslySetInnerHTML":
            D = q;
            break;
          case "style":
            k(o, h, q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            x(ve) && typeof q != "function" && typeof q != "symbol" && o.push(re, b(ve), K, b(ye(q)), Q);
        }
        return o.push(le), se(o, D, T), T;
    }
  }
  var Ke = m("</"), Je = m(">"), _e = m('<template id="'), ar = m('"></template>'), ir = m("<!--$-->"), wr = m('<!--$?--><template id="'), Pt = m('"></template>'), Lt = m("<!--$!-->"), Ht = m("<!--/$-->"), Gt = m("<template"), ut = m('"'), Ot = m(' data-dgst="');
  m(' data-msg="'), m(' data-stck="');
  var sr = m("></template>");
  function tt(o, s, c) {
    if (u(o, wr), c === null) throw Error(t(395));
    return u(o, c), d(o, Pt);
  }
  var lr = m('<div hidden id="'), it = m('">'), Ee = m("</div>"), Mt = m('<svg aria-hidden="true" style="display:none" id="'), Ue = m('">'), st = m("</svg>"), yt = m('<math aria-hidden="true" style="display:none" id="'), Dt = m('">'), ct = m("</math>"), ur = m('<table hidden id="'), Yt = m('">'), cr = m("</table>"), Ft = m('<table hidden><tbody id="'), Zt = m('">'), xr = m("</tbody></table>"), wt = m('<table hidden><tr id="'), Jt = m('">'), jt = m("</tr></table>"), dr = m('<table hidden><colgroup id="'), It = m('">'), xt = m("</colgroup></table>");
  function dt(o, s, c, h) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return u(o, lr), u(o, s.segmentPrefix), u(o, b(h.toString(16))), d(o, it);
      case 2:
        return u(o, Mt), u(o, s.segmentPrefix), u(o, b(h.toString(16))), d(o, Ue);
      case 3:
        return u(o, yt), u(o, s.segmentPrefix), u(o, b(h.toString(16))), d(o, Dt);
      case 4:
        return u(o, ur), u(o, s.segmentPrefix), u(o, b(h.toString(16))), d(o, Yt);
      case 5:
        return u(o, Ft), u(o, s.segmentPrefix), u(o, b(h.toString(16))), d(o, Zt);
      case 6:
        return u(o, wt), u(o, s.segmentPrefix), u(o, b(h.toString(16))), d(o, Jt);
      case 7:
        return u(
          o,
          dr
        ), u(o, s.segmentPrefix), u(o, b(h.toString(16))), d(o, It);
      default:
        throw Error(t(397));
    }
  }
  function Nt(o, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return d(o, Ee);
      case 2:
        return d(o, st);
      case 3:
        return d(o, ct);
      case 4:
        return d(o, cr);
      case 5:
        return d(o, xr);
      case 6:
        return d(o, jt);
      case 7:
        return d(o, xt);
      default:
        throw Error(t(397));
    }
  }
  var Sr = m('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Xt = m('$RS("'), zt = m('","'), $t = m('")<\/script>'), v = m('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), X = m('$RC("'), B = m('","'), Se = m('")<\/script>'), Me = m('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ne = m('$RX("'), We = m('"'), lt = m(")<\/script>"), rt = m(","), Xe = /[<\u2028\u2029]/g;
  function St(o) {
    return JSON.stringify(o).replace(Xe, function(s) {
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
  var Kt = Object.assign, tn = Symbol.for("react.element"), fr = Symbol.for("react.portal"), pr = Symbol.for("react.fragment"), Pr = Symbol.for("react.strict_mode"), Lr = Symbol.for("react.profiler"), Mr = Symbol.for("react.provider"), kr = Symbol.for("react.context"), rn = Symbol.for("react.forward_ref"), nn = Symbol.for("react.suspense"), Dr = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), f = Symbol.for("react.scope"), g = Symbol.for("react.debug_trace_mode"), R = Symbol.for("react.legacy_hidden"), _ = Symbol.for("react.default_value"), M = Symbol.iterator;
  function G(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case pr:
        return "Fragment";
      case fr:
        return "Portal";
      case Lr:
        return "Profiler";
      case Pr:
        return "StrictMode";
      case nn:
        return "Suspense";
      case Dr:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case kr:
        return (o.displayName || "Context") + ".Consumer";
      case Mr:
        return (o._context.displayName || "Context") + ".Provider";
      case rn:
        var s = o.render;
        return o = o.displayName, o || (o = s.displayName || s.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case n:
        return s = o.displayName || null, s !== null ? s : G(o.type) || "Memo";
      case l:
        s = o._payload, o = o._init;
        try {
          return G(o(s));
        } catch {
        }
    }
    return null;
  }
  var ae = {};
  function ce(o, s) {
    if (o = o.contextTypes, !o) return ae;
    var c = {}, h;
    for (h in o) c[h] = s[h];
    return c;
  }
  var ge = null;
  function qe(o, s) {
    if (o !== s) {
      o.context._currentValue = o.parentValue, o = o.parent;
      var c = s.parent;
      if (o === null) {
        if (c !== null) throw Error(t(401));
      } else {
        if (c === null) throw Error(t(401));
        qe(o, c);
      }
      s.context._currentValue = s.value;
    }
  }
  function kt(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && kt(o);
  }
  function Ct(o) {
    var s = o.parent;
    s !== null && Ct(s), o.context._currentValue = o.value;
  }
  function ft(o, s) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === s.depth ? qe(o, s) : ft(o, s);
  }
  function hr(o, s) {
    var c = s.parent;
    if (c === null) throw Error(t(402));
    o.depth === c.depth ? qe(o, c) : hr(o, c), s.context._currentValue = s.value;
  }
  function Ut(o) {
    var s = ge;
    s !== o && (s === null ? Ct(o) : o === null ? kt(s) : s.depth === o.depth ? qe(s, o) : s.depth > o.depth ? ft(s, o) : hr(s, o), ge = o);
  }
  var Fr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, s) {
    o = o._reactInternals, o.queue !== null && o.queue.push(s);
  }, enqueueReplaceState: function(o, s) {
    o = o._reactInternals, o.replace = !0, o.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function gr(o, s, c, h) {
    var E = o.state !== void 0 ? o.state : null;
    o.updater = Fr, o.props = c, o.state = E;
    var T = { queue: [], replace: !1 };
    o._reactInternals = T;
    var D = s.contextType;
    if (o.context = typeof D == "object" && D !== null ? D._currentValue : h, D = s.getDerivedStateFromProps, typeof D == "function" && (D = D(c, E), E = D == null ? E : Kt({}, E, D), o.state = E), typeof s.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (s = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), s !== o.state && Fr.enqueueReplaceState(o, o.state, null), T.queue !== null && 0 < T.queue.length) if (s = T.queue, D = T.replace, T.queue = null, T.replace = !1, D && s.length === 1) o.state = s[0];
    else {
      for (T = D ? s[0] : o.state, E = !0, D = D ? 1 : 0; D < s.length; D++) {
        var q = s[D];
        q = typeof q == "function" ? q.call(o, T, c, h) : q, q != null && (E ? (E = !1, T = Kt({}, T, q)) : Kt(T, q));
      }
      o.state = T;
    }
    else T.queue = null;
  }
  var on = { id: 1, overflow: "" };
  function Qt(o, s, c) {
    var h = o.id;
    o = o.overflow;
    var E = 32 - an(h) - 1;
    h &= ~(1 << E), c += 1;
    var T = 32 - an(s) + E;
    if (30 < T) {
      var D = E - E % 5;
      return T = (h & (1 << D) - 1).toString(32), h >>= D, E -= D, { id: 1 << 32 - an(s) + E | c << E | h, overflow: T + o };
    }
    return { id: 1 << T | c << E | h, overflow: o };
  }
  var an = Math.clz32 ? Math.clz32 : ts, Qi = Math.log, es = Math.LN2;
  function ts(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Qi(o) / es | 0) | 0;
  }
  function rs(o, s) {
    return o === s && (o !== 0 || 1 / o === 1 / s) || o !== o && s !== s;
  }
  var ns = typeof Object.is == "function" ? Object.is : rs, Bt = null, Un = null, sn = null, je = null, jr = !1, ln = !1, zr = 0, er = null, un = 0;
  function mr() {
    if (Bt === null) throw Error(t(321));
    return Bt;
  }
  function Wo() {
    if (0 < un) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Bn() {
    return je === null ? sn === null ? (jr = !1, sn = je = Wo()) : (jr = !0, je = sn) : je.next === null ? (jr = !1, je = je.next = Wo()) : (jr = !0, je = je.next), je;
  }
  function Wn() {
    Un = Bt = null, ln = !1, sn = null, un = 0, je = er = null;
  }
  function qo(o, s) {
    return typeof s == "function" ? s(o) : s;
  }
  function Vo(o, s, c) {
    if (Bt = mr(), je = Bn(), jr) {
      var h = je.queue;
      if (s = h.dispatch, er !== null && (c = er.get(h), c !== void 0)) {
        er.delete(h), h = je.memoizedState;
        do
          h = o(h, c.action), c = c.next;
        while (c !== null);
        return je.memoizedState = h, [h, s];
      }
      return [je.memoizedState, s];
    }
    return o = o === qo ? typeof s == "function" ? s() : s : c !== void 0 ? c(s) : s, je.memoizedState = o, o = je.queue = { last: null, dispatch: null }, o = o.dispatch = os.bind(null, Bt, o), [je.memoizedState, o];
  }
  function Ho(o, s) {
    if (Bt = mr(), je = Bn(), s = s === void 0 ? null : s, je !== null) {
      var c = je.memoizedState;
      if (c !== null && s !== null) {
        var h = c[1];
        e: if (h === null) h = !1;
        else {
          for (var E = 0; E < h.length && E < s.length; E++) if (!ns(s[E], h[E])) {
            h = !1;
            break e;
          }
          h = !0;
        }
        if (h) return c[0];
      }
    }
    return o = o(), je.memoizedState = [o, s], o;
  }
  function os(o, s, c) {
    if (25 <= un) throw Error(t(301));
    if (o === Bt) if (ln = !0, o = { action: c, next: null }, er === null && (er = /* @__PURE__ */ new Map()), c = er.get(s), c === void 0) er.set(s, o);
    else {
      for (s = c; s.next !== null; ) s = s.next;
      s.next = o;
    }
  }
  function as() {
    throw Error(t(394));
  }
  function cn() {
  }
  var Go = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return mr(), o._currentValue;
  }, useMemo: Ho, useReducer: Vo, useRef: function(o) {
    Bt = mr(), je = Bn();
    var s = je.memoizedState;
    return s === null ? (o = { current: o }, je.memoizedState = o) : s;
  }, useState: function(o) {
    return Vo(qo, o);
  }, useInsertionEffect: cn, useLayoutEffect: function() {
  }, useCallback: function(o, s) {
    return Ho(function() {
      return o;
    }, s);
  }, useImperativeHandle: cn, useEffect: cn, useDebugValue: cn, useDeferredValue: function(o) {
    return mr(), o;
  }, useTransition: function() {
    return mr(), [!1, as];
  }, useId: function() {
    var o = Un.treeContext, s = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - an(o) - 1)).toString(32) + s;
    var c = dn;
    if (c === null) throw Error(t(404));
    return s = zr++, o = ":" + c.idPrefix + "R" + o, 0 < s && (o += "H" + s.toString(32)), o + ":";
  }, useMutableSource: function(o, s) {
    return mr(), s(o._source);
  }, useSyncExternalStore: function(o, s, c) {
    if (c === void 0) throw Error(t(407));
    return c();
  } }, dn = null, qn = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function is(o) {
    return console.error(o), null;
  }
  function $r() {
  }
  function ss(o, s, c, h, E, T, D, q, ie) {
    var ve = [], me = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: h === void 0 ? 12800 : h, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: me, pingedTasks: ve, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: E === void 0 ? is : E, onAllReady: T === void 0 ? $r : T, onShellReady: D === void 0 ? $r : D, onShellError: q === void 0 ? $r : q, onFatalError: ie === void 0 ? $r : ie }, c = fn(s, 0, null, c, !1, !1), c.parentFlushed = !0, o = Vn(s, o, null, c, me, ae, null, on), ve.push(o), s;
  }
  function Vn(o, s, c, h, E, T, D, q) {
    o.allPendingTasks++, c === null ? o.pendingRootTasks++ : c.pendingTasks++;
    var ie = { node: s, ping: function() {
      var ve = o.pingedTasks;
      ve.push(ie), ve.length === 1 && ea(o);
    }, blockedBoundary: c, blockedSegment: h, abortSet: E, legacyContext: T, context: D, treeContext: q };
    return E.add(ie), ie;
  }
  function fn(o, s, c, h, E, T) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: h, boundary: c, lastPushedText: E, textEmbedded: T };
  }
  function Ur(o, s) {
    if (o = o.onError(s), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function pn(o, s) {
    var c = o.onShellError;
    c(s), c = o.onFatalError, c(s), o.destination !== null ? (o.status = 2, O(o.destination, s)) : (o.status = 1, o.fatalError = s);
  }
  function Yo(o, s, c, h, E) {
    for (Bt = {}, Un = s, zr = 0, o = c(h, E); ln; ) ln = !1, zr = 0, un += 1, je = null, o = c(h, E);
    return Wn(), o;
  }
  function Zo(o, s, c, h) {
    var E = c.render(), T = h.childContextTypes;
    if (T != null) {
      var D = s.legacyContext;
      if (typeof c.getChildContext != "function") h = D;
      else {
        c = c.getChildContext();
        for (var q in c) if (!(q in T)) throw Error(t(108, G(h) || "Unknown", q));
        h = Kt({}, D, c);
      }
      s.legacyContext = h, pt(o, s, E), s.legacyContext = D;
    } else pt(o, s, E);
  }
  function Jo(o, s) {
    if (o && o.defaultProps) {
      s = Kt({}, s), o = o.defaultProps;
      for (var c in o) s[c] === void 0 && (s[c] = o[c]);
      return s;
    }
    return s;
  }
  function Hn(o, s, c, h, E) {
    if (typeof c == "function") if (c.prototype && c.prototype.isReactComponent) {
      E = ce(c, s.legacyContext);
      var T = c.contextType;
      T = new c(h, typeof T == "object" && T !== null ? T._currentValue : E), gr(T, c, h, E), Zo(o, s, T, c);
    } else {
      T = ce(c, s.legacyContext), E = Yo(o, s, c, h, T);
      var D = zr !== 0;
      if (typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) gr(E, c, h, T), Zo(o, s, E, c);
      else if (D) {
        h = s.treeContext, s.treeContext = Qt(h, 1, 0);
        try {
          pt(o, s, E);
        } finally {
          s.treeContext = h;
        }
      } else pt(o, s, E);
    }
    else if (typeof c == "string") {
      switch (E = s.blockedSegment, T = oe(E.chunks, c, h, o.responseState, E.formatContext), E.lastPushedText = !1, D = E.formatContext, E.formatContext = He(D, c, h), Gn(o, s, T), E.formatContext = D, c) {
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
          E.chunks.push(Ke, b(c), Je);
      }
      E.lastPushedText = !1;
    } else {
      switch (c) {
        case R:
        case g:
        case Pr:
        case Lr:
        case pr:
          pt(o, s, h.children);
          return;
        case Dr:
          pt(o, s, h.children);
          return;
        case f:
          throw Error(t(343));
        case nn:
          e: {
            c = s.blockedBoundary, E = s.blockedSegment, T = h.fallback, h = h.children, D = /* @__PURE__ */ new Set();
            var q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: D, errorDigest: null }, ie = fn(o, E.chunks.length, q, E.formatContext, !1, !1);
            E.children.push(ie), E.lastPushedText = !1;
            var ve = fn(o, 0, null, E.formatContext, !1, !1);
            ve.parentFlushed = !0, s.blockedBoundary = q, s.blockedSegment = ve;
            try {
              if (Gn(
                o,
                s,
                h
              ), ve.lastPushedText && ve.textEmbedded && ve.chunks.push(L), ve.status = 1, hn(q, ve), q.pendingTasks === 0) break e;
            } catch (me) {
              ve.status = 4, q.forceClientRender = !0, q.errorDigest = Ur(o, me);
            } finally {
              s.blockedBoundary = c, s.blockedSegment = E;
            }
            s = Vn(o, T, c, ie, D, s.legacyContext, s.context, s.treeContext), o.pingedTasks.push(s);
          }
          return;
      }
      if (typeof c == "object" && c !== null) switch (c.$$typeof) {
        case rn:
          if (h = Yo(o, s, c.render, h, E), zr !== 0) {
            c = s.treeContext, s.treeContext = Qt(c, 1, 0);
            try {
              pt(o, s, h);
            } finally {
              s.treeContext = c;
            }
          } else pt(o, s, h);
          return;
        case n:
          c = c.type, h = Jo(c, h), Hn(o, s, c, h, E);
          return;
        case Mr:
          if (E = h.children, c = c._context, h = h.value, T = c._currentValue, c._currentValue = h, D = ge, ge = h = { parent: D, depth: D === null ? 0 : D.depth + 1, context: c, parentValue: T, value: h }, s.context = h, pt(o, s, E), o = ge, o === null) throw Error(t(403));
          h = o.parentValue, o.context._currentValue = h === _ ? o.context._defaultValue : h, o = ge = o.parent, s.context = o;
          return;
        case kr:
          h = h.children, h = h(c._currentValue), pt(o, s, h);
          return;
        case l:
          E = c._init, c = E(c._payload), h = Jo(c, h), Hn(o, s, c, h, void 0);
          return;
      }
      throw Error(t(
        130,
        c == null ? c : typeof c,
        ""
      ));
    }
  }
  function pt(o, s, c) {
    if (s.node = c, typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case tn:
          Hn(o, s, c.type, c.props, c.ref);
          return;
        case fr:
          throw Error(t(257));
        case l:
          var h = c._init;
          c = h(c._payload), pt(o, s, c);
          return;
      }
      if (ze(c)) {
        Xo(o, s, c);
        return;
      }
      if (c === null || typeof c != "object" ? h = null : (h = M && c[M] || c["@@iterator"], h = typeof h == "function" ? h : null), h && (h = h.call(c))) {
        if (c = h.next(), !c.done) {
          var E = [];
          do
            E.push(c.value), c = h.next();
          while (!c.done);
          Xo(o, s, E);
        }
        return;
      }
      throw o = Object.prototype.toString.call(c), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : o));
    }
    typeof c == "string" ? (h = s.blockedSegment, h.lastPushedText = A(s.blockedSegment.chunks, c, o.responseState, h.lastPushedText)) : typeof c == "number" && (h = s.blockedSegment, h.lastPushedText = A(s.blockedSegment.chunks, "" + c, o.responseState, h.lastPushedText));
  }
  function Xo(o, s, c) {
    for (var h = c.length, E = 0; E < h; E++) {
      var T = s.treeContext;
      s.treeContext = Qt(T, h, E);
      try {
        Gn(o, s, c[E]);
      } finally {
        s.treeContext = T;
      }
    }
  }
  function Gn(o, s, c) {
    var h = s.blockedSegment.formatContext, E = s.legacyContext, T = s.context;
    try {
      return pt(o, s, c);
    } catch (ie) {
      if (Wn(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
        c = ie;
        var D = s.blockedSegment, q = fn(o, D.chunks.length, null, D.formatContext, D.lastPushedText, !0);
        D.children.push(q), D.lastPushedText = !1, o = Vn(o, s.node, s.blockedBoundary, q, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, c.then(o, o), s.blockedSegment.formatContext = h, s.legacyContext = E, s.context = T, Ut(T);
      } else throw s.blockedSegment.formatContext = h, s.legacyContext = E, s.context = T, Ut(T), ie;
    }
  }
  function ls(o) {
    var s = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Qo(this, s, o);
  }
  function Ko(o, s, c) {
    var h = o.blockedBoundary;
    o.blockedSegment.status = 3, h === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (h.pendingTasks--, h.forceClientRender || (h.forceClientRender = !0, o = c === void 0 ? Error(t(432)) : c, h.errorDigest = s.onError(o), h.parentFlushed && s.clientRenderedBoundaries.push(h)), h.fallbackAbortableTasks.forEach(function(E) {
      return Ko(E, s, c);
    }), h.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (h = s.onAllReady, h()));
  }
  function hn(o, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var c = s.children[0];
      c.id = s.id, c.parentFlushed = !0, c.status === 1 && hn(o, c);
    } else o.completedSegments.push(s);
  }
  function Qo(o, s, c) {
    if (s === null) {
      if (c.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = c;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = $r, s = o.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (c.parentFlushed && c.status === 1 && hn(s, c), s.parentFlushed && o.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(ls, o), s.fallbackAbortableTasks.clear()) : c.parentFlushed && c.status === 1 && (hn(s, c), s.completedSegments.length === 1 && s.parentFlushed && o.partialBoundaries.push(s)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function ea(o) {
    if (o.status !== 2) {
      var s = ge, c = qn.current;
      qn.current = Go;
      var h = dn;
      dn = o.responseState;
      try {
        var E = o.pingedTasks, T;
        for (T = 0; T < E.length; T++) {
          var D = E[T], q = o, ie = D.blockedSegment;
          if (ie.status === 0) {
            Ut(D.context);
            try {
              pt(q, D, D.node), ie.lastPushedText && ie.textEmbedded && ie.chunks.push(L), D.abortSet.delete(D), ie.status = 1, Qo(q, D.blockedBoundary, ie);
            } catch (Tt) {
              if (Wn(), typeof Tt == "object" && Tt !== null && typeof Tt.then == "function") {
                var ve = D.ping;
                Tt.then(ve, ve);
              } else {
                D.abortSet.delete(D), ie.status = 4;
                var me = D.blockedBoundary, Be = Tt, ht = Ur(q, Be);
                if (me === null ? pn(q, Be) : (me.pendingTasks--, me.forceClientRender || (me.forceClientRender = !0, me.errorDigest = ht, me.parentFlushed && q.clientRenderedBoundaries.push(me))), q.allPendingTasks--, q.allPendingTasks === 0) {
                  var _t = q.onAllReady;
                  _t();
                }
              }
            } finally {
            }
          }
        }
        E.splice(0, T), o.destination !== null && Yn(o, o.destination);
      } catch (Tt) {
        Ur(o, Tt), pn(o, Tt);
      } finally {
        dn = h, qn.current = c, c === Go && Ut(s);
      }
    }
  }
  function gn(o, s, c) {
    switch (c.parentFlushed = !0, c.status) {
      case 0:
        var h = c.id = o.nextSegmentId++;
        return c.lastPushedText = !1, c.textEmbedded = !1, o = o.responseState, u(s, _e), u(s, o.placeholderPrefix), o = b(h.toString(16)), u(s, o), d(s, ar);
      case 1:
        c.status = 2;
        var E = !0;
        h = c.chunks;
        var T = 0;
        c = c.children;
        for (var D = 0; D < c.length; D++) {
          for (E = c[D]; T < E.index; T++) u(s, h[T]);
          E = mn(o, s, E);
        }
        for (; T < h.length - 1; T++) u(s, h[T]);
        return T < h.length && (E = d(s, h[T])), E;
      default:
        throw Error(t(390));
    }
  }
  function mn(o, s, c) {
    var h = c.boundary;
    if (h === null) return gn(o, s, c);
    if (h.parentFlushed = !0, h.forceClientRender) h = h.errorDigest, d(s, Lt), u(s, Gt), h && (u(s, Ot), u(s, b(ye(h))), u(s, ut)), d(s, sr), gn(o, s, c);
    else if (0 < h.pendingTasks) {
      h.rootSegmentID = o.nextSegmentId++, 0 < h.completedSegments.length && o.partialBoundaries.push(h);
      var E = o.responseState, T = E.nextSuspenseID++;
      E = m(E.boundaryPrefix + T.toString(16)), h = h.id = E, tt(s, o.responseState, h), gn(o, s, c);
    } else if (h.byteSize > o.progressiveChunkSize) h.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(h), tt(s, o.responseState, h.id), gn(o, s, c);
    else {
      if (d(s, ir), c = h.completedSegments, c.length !== 1) throw Error(t(391));
      mn(o, s, c[0]);
    }
    return d(s, Ht);
  }
  function ta(o, s, c) {
    return dt(s, o.responseState, c.formatContext, c.id), mn(o, s, c), Nt(s, c.formatContext);
  }
  function ra(o, s, c) {
    for (var h = c.completedSegments, E = 0; E < h.length; E++) na(o, s, c, h[E]);
    if (h.length = 0, o = o.responseState, h = c.id, c = c.rootSegmentID, u(s, o.startInlineScript), o.sentCompleteBoundaryFunction ? u(s, X) : (o.sentCompleteBoundaryFunction = !0, u(s, v)), h === null) throw Error(t(395));
    return c = b(c.toString(16)), u(s, h), u(s, B), u(s, o.segmentPrefix), u(s, c), d(s, Se);
  }
  function na(o, s, c, h) {
    if (h.status === 2) return !0;
    var E = h.id;
    if (E === -1) {
      if ((h.id = c.rootSegmentID) === -1) throw Error(t(392));
      return ta(o, s, h);
    }
    return ta(o, s, h), o = o.responseState, u(s, o.startInlineScript), o.sentCompleteSegmentFunction ? u(s, Xt) : (o.sentCompleteSegmentFunction = !0, u(s, Sr)), u(s, o.segmentPrefix), E = b(E.toString(16)), u(s, E), u(s, zt), u(s, o.placeholderPrefix), u(s, E), d(s, $t);
  }
  function Yn(o, s) {
    r = new Uint8Array(512), a = 0;
    try {
      var c = o.completedRootSegment;
      if (c !== null && o.pendingRootTasks === 0) {
        mn(o, s, c), o.completedRootSegment = null;
        var h = o.responseState.bootstrapChunks;
        for (c = 0; c < h.length - 1; c++) u(s, h[c]);
        c < h.length && d(s, h[c]);
      }
      var E = o.clientRenderedBoundaries, T;
      for (T = 0; T < E.length; T++) {
        var D = E[T];
        h = s;
        var q = o.responseState, ie = D.id, ve = D.errorDigest, me = D.errorMessage, Be = D.errorComponentStack;
        if (u(h, q.startInlineScript), q.sentClientRenderFunction ? u(h, Ne) : (q.sentClientRenderFunction = !0, u(
          h,
          Me
        )), ie === null) throw Error(t(395));
        u(h, ie), u(h, We), (ve || me || Be) && (u(h, rt), u(h, b(St(ve || "")))), (me || Be) && (u(h, rt), u(h, b(St(me || "")))), Be && (u(h, rt), u(h, b(St(Be)))), d(h, lt);
      }
      E.splice(0, T);
      var ht = o.completedBoundaries;
      for (T = 0; T < ht.length; T++) ra(o, s, ht[T]);
      ht.splice(0, T), y(s), r = new Uint8Array(512), a = 0;
      var _t = o.partialBoundaries;
      for (T = 0; T < _t.length; T++) {
        var Tt = _t[T];
        e: {
          E = o, D = s;
          var yn = Tt.completedSegments;
          for (q = 0; q < yn.length; q++) if (!na(
            E,
            D,
            Tt,
            yn[q]
          )) {
            q++, yn.splice(0, q);
            var aa = !1;
            break e;
          }
          yn.splice(0, q), aa = !0;
        }
        if (!aa) {
          o.destination = null, T++, _t.splice(0, T);
          return;
        }
      }
      _t.splice(0, T);
      var Zn = o.completedBoundaries;
      for (T = 0; T < Zn.length; T++) ra(o, s, Zn[T]);
      Zn.splice(0, T);
    } finally {
      y(s), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && s.close();
    }
  }
  function oa(o, s) {
    try {
      var c = o.abortableTasks;
      c.forEach(function(h) {
        return Ko(h, o, s);
      }), c.clear(), o.destination !== null && Yn(o, o.destination);
    } catch (h) {
      Ur(o, h), pn(o, h);
    }
  }
  return wn.renderToReadableStream = function(o, s) {
    return new Promise(function(c, h) {
      var E, T, D = new Promise(function(me, Be) {
        T = me, E = Be;
      }), q = ss(o, ke(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), Ve(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, T, function() {
        var me = new ReadableStream({ type: "bytes", pull: function(Be) {
          if (q.status === 1) q.status = 2, O(Be, q.fatalError);
          else if (q.status !== 2 && q.destination === null) {
            q.destination = Be;
            try {
              Yn(q, Be);
            } catch (ht) {
              Ur(q, ht), pn(q, ht);
            }
          }
        }, cancel: function() {
          oa(q);
        } }, { highWaterMark: 0 });
        me.allReady = D, c(me);
      }, function(me) {
        D.catch(function() {
        }), h(me);
      }, E);
      if (s && s.signal) {
        var ie = s.signal, ve = function() {
          oa(q, ie.reason), ie.removeEventListener("abort", ve);
        };
        ie.addEventListener("abort", ve);
      }
      ea(q);
    });
  }, wn.version = "18.3.1", wn;
}
var Nr, pi;
Nr = Qs(), pi = el();
Nr.version;
Nr.renderToString;
Nr.renderToStaticMarkup;
Nr.renderToNodeStream;
Nr.renderToStaticNodeStream;
pi.renderToReadableStream;
const tl = "staticMarkup";
function rl() {
  const e = ps().indexOf(tl) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Kr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: a } = rl(), { onClick: u, ...d } = r.props;
  if (a)
    return et.cloneElement(r, {
      ...d,
      onClick: (b) => (Ks(e), u ? u(b) : !0)
    });
  let y = "";
  ["input", "header", "header-input"].includes(t) && (y = `-${t}`);
  const w = {
    [`data-ga${y}`]: e.text,
    [`data-ga${y}-name`]: e.name,
    [`data-ga${y}-event`]: e.event,
    [`data-ga${y}-action`]: e.action,
    [`data-ga${y}-type`]: e.type,
    [`data-ga${y}-region`]: e.region,
    [`data-ga${y}-section`]: e.section,
    [`data-ga${y}-component`]: e.component
  };
  return et.cloneElement(r, {
    ...d,
    onClick: u,
    ...w
  });
};
i.number, i.number, i.func, i.object;
i.arrayOf(ui).isRequired, i.number;
const nl = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Eo = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: a,
  block: u,
  color: d,
  disabled: y,
  element: w,
  href: b,
  icon: m,
  innerRef: O,
  onClick: C,
  size: j,
  classes: Y,
  target: I,
  ...x
}) => {
  const N = Er("btn", {
    [`btn-${d}`]: !0,
    "btn-md": j === "small",
    "btn-sm": j === "xsmall",
    "btn-block": u,
    disabled: y
  });
  let $ = w;
  return b && w === "button" && ($ = "a"), /* @__PURE__ */ H.jsx(
    Kr,
    {
      gaData: {
        ...nl,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ H.jsxs(
        $,
        {
          type: $ === "button" && C ? "button" : void 0,
          ...x,
          className: Er(Y) || N,
          href: b,
          ref: O,
          onClick: C,
          "aria-label": a,
          target: $ === "a" ? I : null,
          children: [
            m && /* @__PURE__ */ H.jsx("i", { className: `${m == null ? void 0 : m[0]} fa-${m == null ? void 0 : m[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Eo.propTypes = {
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
  gaData: To,
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
Eo.defaultProps = {
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
var hi = { exports: {} }, Pe = {}, va;
function ol() {
  if (va) return Pe;
  va = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), y = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), Y = Symbol.for("react.client.reference");
  function I(x) {
    if (typeof x == "object" && x !== null) {
      var N = x.$$typeof;
      switch (N) {
        case e:
          switch (x = x.type, x) {
            case r:
            case u:
            case a:
            case b:
            case m:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case y:
                case w:
                case C:
                case O:
                  return x;
                case d:
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
  return Pe.ContextConsumer = d, Pe.ContextProvider = y, Pe.Element = e, Pe.ForwardRef = w, Pe.Fragment = r, Pe.Lazy = C, Pe.Memo = O, Pe.Portal = t, Pe.Profiler = u, Pe.StrictMode = a, Pe.Suspense = b, Pe.SuspenseList = m, Pe.isContextConsumer = function(x) {
    return I(x) === d;
  }, Pe.isContextProvider = function(x) {
    return I(x) === y;
  }, Pe.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, Pe.isForwardRef = function(x) {
    return I(x) === w;
  }, Pe.isFragment = function(x) {
    return I(x) === r;
  }, Pe.isLazy = function(x) {
    return I(x) === C;
  }, Pe.isMemo = function(x) {
    return I(x) === O;
  }, Pe.isPortal = function(x) {
    return I(x) === t;
  }, Pe.isProfiler = function(x) {
    return I(x) === u;
  }, Pe.isStrictMode = function(x) {
    return I(x) === a;
  }, Pe.isSuspense = function(x) {
    return I(x) === b;
  }, Pe.isSuspenseList = function(x) {
    return I(x) === m;
  }, Pe.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === a || x === b || x === m || x === j || typeof x == "object" && x !== null && (x.$$typeof === C || x.$$typeof === O || x.$$typeof === y || x.$$typeof === d || x.$$typeof === w || x.$$typeof === Y || x.getModuleId !== void 0);
  }, Pe.typeOf = I, Pe;
}
hi.exports = ol();
var gi = hi.exports;
function al(e) {
  function t(L, A, P, F, p) {
    for (var V = 0, k = 0, re = 0, K = 0, Q, W, ne = 0, le = 0, ee, se = ee = Q = 0, te = 0, fe = 0, Fe = 0, ue = 0, Ze = P.length, $e = Ze - 1, he, z = "", oe = "", Ke = "", Je = "", _e; te < Ze; ) {
      if (W = P.charCodeAt(te), te === $e && k + K + re + V !== 0 && (k !== 0 && (W = k === 47 ? 10 : 47), K = re = V = 0, Ze++, $e++), k + K + re + V === 0) {
        if (te === $e && (0 < fe && (z = z.replace(j, "")), 0 < z.trim().length)) {
          switch (W) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              z += P.charAt(te);
          }
          W = 59;
        }
        switch (W) {
          case 123:
            for (z = z.trim(), Q = z.charCodeAt(0), ee = 1, ue = ++te; te < Ze; ) {
              switch (W = P.charCodeAt(te)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (W = P.charCodeAt(te + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (se = te + 1; se < $e; ++se)
                          switch (P.charCodeAt(se)) {
                            case 47:
                              if (W === 42 && P.charCodeAt(se - 1) === 42 && te + 2 !== se) {
                                te = se + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (W === 47) {
                                te = se + 1;
                                break e;
                              }
                          }
                        te = se;
                      }
                  }
                  break;
                case 91:
                  W++;
                case 40:
                  W++;
                case 34:
                case 39:
                  for (; te++ < $e && P.charCodeAt(te) !== W; )
                    ;
              }
              if (ee === 0) break;
              te++;
            }
            switch (ee = P.substring(ue, te), Q === 0 && (Q = (z = z.replace(C, "").trim()).charCodeAt(0)), Q) {
              case 64:
                switch (0 < fe && (z = z.replace(j, "")), W = z.charCodeAt(1), W) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = A;
                    break;
                  default:
                    fe = Ye;
                }
                if (ee = t(A, fe, ee, W, p + 1), ue = ee.length, 0 < ke && (fe = r(Ye, z, Fe), _e = w(3, ee, fe, A, we, pe, ue, W, p, F), z = fe.join(""), _e !== void 0 && (ue = (ee = _e.trim()).length) === 0 && (W = 0, ee = "")), 0 < ue) switch (W) {
                  case 115:
                    z = z.replace(de, y);
                  case 100:
                  case 109:
                  case 45:
                    ee = z + "{" + ee + "}";
                    break;
                  case 107:
                    z = z.replace(U, "$1 $2"), ee = z + "{" + ee + "}", ee = xe === 1 || xe === 2 && d("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                    break;
                  default:
                    ee = z + ee, F === 112 && (ee = (oe += ee, ""));
                }
                else ee = "";
                break;
              default:
                ee = t(A, r(A, z, Fe), ee, F, p + 1);
            }
            Ke += ee, ee = Fe = fe = se = Q = 0, z = "", W = P.charCodeAt(++te);
            break;
          case 125:
          case 59:
            if (z = (0 < fe ? z.replace(j, "") : z).trim(), 1 < (ue = z.length)) switch (se === 0 && (Q = z.charCodeAt(0), Q === 45 || 96 < Q && 123 > Q) && (ue = (z = z.replace(" ", ":")).length), 0 < ke && (_e = w(1, z, A, L, we, pe, oe.length, F, p, F)) !== void 0 && (ue = (z = _e.trim()).length) === 0 && (z = "\0\0"), Q = z.charCodeAt(0), W = z.charCodeAt(1), Q) {
              case 0:
                break;
              case 64:
                if (W === 105 || W === 99) {
                  Je += z + P.charAt(te);
                  break;
                }
              default:
                z.charCodeAt(ue - 1) !== 58 && (oe += u(z, Q, W, z.charCodeAt(2)));
            }
            Fe = fe = se = Q = 0, z = "", W = P.charCodeAt(++te);
        }
      }
      switch (W) {
        case 13:
        case 10:
          k === 47 ? k = 0 : 1 + Q === 0 && F !== 107 && 0 < z.length && (fe = 1, z += "\0"), 0 < ke * Ve && w(0, z, A, L, we, pe, oe.length, F, p, F), pe = 1, we++;
          break;
        case 59:
        case 125:
          if (k + K + re + V === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, he = P.charAt(te), W) {
            case 9:
            case 32:
              if (K + V + k === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  W !== 32 && (he = " ");
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
              K + k + V === 0 && (fe = Fe = 1, he = "\f" + he);
              break;
            case 108:
              if (K + k + V + Te === 0 && 0 < se) switch (te - se) {
                case 2:
                  ne === 112 && P.charCodeAt(te - 3) === 58 && (Te = ne);
                case 8:
                  le === 111 && (Te = le);
              }
              break;
            case 58:
              K + k + V === 0 && (se = te);
              break;
            case 44:
              k + re + K + V === 0 && (fe = 1, he += "\r");
              break;
            case 34:
            case 39:
              k === 0 && (K = K === W ? 0 : K === 0 ? W : K);
              break;
            case 91:
              K + k + re === 0 && V++;
              break;
            case 93:
              K + k + re === 0 && V--;
              break;
            case 41:
              K + k + V === 0 && re--;
              break;
            case 40:
              if (K + k + V === 0) {
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
              k + re + K + V + se + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < K + V + re)) switch (k) {
                case 0:
                  switch (2 * W + 3 * P.charCodeAt(te + 1)) {
                    case 235:
                      k = 47;
                      break;
                    case 220:
                      ue = te, k = 42;
                  }
                  break;
                case 42:
                  W === 47 && ne === 42 && ue + 2 !== te && (P.charCodeAt(ue + 2) === 33 && (oe += P.substring(ue, te + 1)), he = "", k = 0);
              }
          }
          k === 0 && (z += he);
      }
      le = ne, ne = W, te++;
    }
    if (ue = oe.length, 0 < ue) {
      if (fe = A, 0 < ke && (_e = w(2, oe, fe, L, we, pe, ue, F, p, F), _e !== void 0 && (oe = _e).length === 0)) return Je + oe + Ke;
      if (oe = fe.join(",") + "{" + oe + "}", xe * Te !== 0) {
        switch (xe !== 2 || d(oe, 2) || (Te = 0), Te) {
          case 111:
            oe = oe.replace(J, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(Z, "::-webkit-input-$1") + oe.replace(Z, "::-moz-$1") + oe.replace(Z, ":-ms-input-$1") + oe;
        }
        Te = 0;
      }
    }
    return Je + oe + Ke;
  }
  function r(L, A, P) {
    var F = A.trim().split(N);
    A = F;
    var p = F.length, V = L.length;
    switch (V) {
      case 0:
      case 1:
        var k = 0;
        for (L = V === 0 ? "" : L[0] + " "; k < p; ++k)
          A[k] = a(L, A[k], P).trim();
        break;
      default:
        var re = k = 0;
        for (A = []; k < p; ++k)
          for (var K = 0; K < V; ++K)
            A[re++] = a(L[K] + " ", F[k], P).trim();
    }
    return A;
  }
  function a(L, A, P) {
    var F = A.charCodeAt(0);
    switch (33 > F && (F = (A = A.trim()).charCodeAt(0)), F) {
      case 38:
        return A.replace($, "$1" + L.trim());
      case 58:
        return L.trim() + A.replace($, "$1" + L.trim());
      default:
        if (0 < 1 * P && 0 < A.indexOf("\f")) return A.replace($, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + A;
  }
  function u(L, A, P, F) {
    var p = L + ";", V = 2 * A + 3 * P + 4 * F;
    if (V === 944) {
      L = p.indexOf(":", 9) + 1;
      var k = p.substring(L, p.length - 1).trim();
      return k = p.substring(0, L).trim() + k + ";", xe === 1 || xe === 2 && d(k, 1) ? "-webkit-" + k + k : k;
    }
    if (xe === 0 || xe === 2 && !d(p, 1)) return p;
    switch (V) {
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
        if (0 < p.indexOf("image-set(", 11)) return p.replace(Ge, "$1-webkit-$2") + p;
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
        return I.test(p) ? p.replace(Y, ":-webkit-") + p.replace(Y, ":-moz-") + p : p;
      case 1e3:
        switch (k = p.substring(13).trim(), A = k.indexOf("-") + 1, k.charCodeAt(0) + k.charCodeAt(A)) {
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
        switch (A = (p = L).length - 10, k = (p.charCodeAt(A) === 33 ? p.substring(0, A) : p).substring(L.indexOf(":", 7) + 1).trim(), V = k.charCodeAt(0) + (k.charCodeAt(7) | 0)) {
          case 203:
            if (111 > k.charCodeAt(8)) break;
          case 115:
            p = p.replace(k, "-webkit-" + k) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(k, "-webkit-" + (102 < V ? "inline-" : "") + "box") + ";" + p.replace(k, "-webkit-" + k) + ";" + p.replace(k, "-ms-" + k + "box") + ";" + p;
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
        if (ze.test(L) === !0) return (k = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115 ? u(L.replace("stretch", "fill-available"), A, P, F).replace(":fill-available", ":stretch") : p.replace(k, "-webkit-" + k) + p.replace(k, "-moz-" + k.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, P + F === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(x, "$1-webkit-$2") + p;
    }
    return p;
  }
  function d(L, A) {
    var P = L.indexOf(A === 1 ? ":" : "{"), F = L.substring(0, A !== 3 ? P : 10);
    return P = L.substring(P + 1, L.length - 1), De(A !== 2 ? F : F.replace(Oe, "$1"), P, A);
  }
  function y(L, A) {
    var P = u(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return P !== A + ";" ? P.replace(ye, " or ($1)").substring(4) : "(" + A + ")";
  }
  function w(L, A, P, F, p, V, k, re, K, Q) {
    for (var W = 0, ne = A, le; W < ke; ++W)
      switch (le = Ie[W].call(O, L, ne, P, F, p, V, k, re, K, Q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = le;
      }
    if (ne !== A) return ne;
  }
  function b(L) {
    switch (L) {
      case void 0:
      case null:
        ke = Ie.length = 0;
        break;
      default:
        if (typeof L == "function") Ie[ke++] = L;
        else if (typeof L == "object") for (var A = 0, P = L.length; A < P; ++A)
          b(L[A]);
        else Ve = !!L | 0;
    }
    return b;
  }
  function m(L) {
    return L = L.prefix, L !== void 0 && (De = null, L ? typeof L != "function" ? xe = 1 : (xe = 2, De = L) : xe = 0), m;
  }
  function O(L, A) {
    var P = L;
    if (33 > P.charCodeAt(0) && (P = P.trim()), He = P, P = [He], 0 < ke) {
      var F = w(-1, A, P, P, we, pe, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (A = F);
    }
    var p = t(Ye, P, A, 0, 0);
    return 0 < ke && (F = w(-2, p, P, P, we, pe, p.length, 0, 0, 0), F !== void 0 && (p = F)), He = "", Te = 0, pe = we = 1, p;
  }
  var C = /^\0+/g, j = /[\0\r\f]/g, Y = /: */g, I = /zoo|gra/, x = /([,: ])(transform)/g, N = /,\r+?/g, $ = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, Z = /::(place)/g, J = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, de = /\(\s*(.*)\s*\)/g, ye = /([\s\S]*?);/g, Ce = /-self|flex-/g, Oe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ze = /stretch|:\s*\w+\-(?:conte|avail)/, Ge = /([^-])(image-set\()/, pe = 1, we = 1, Te = 0, xe = 1, Ye = [], Ie = [], ke = 0, De = null, Ve = 0, He = "";
  return O.use = b, O.set = m, e !== void 0 && m(e), O;
}
var il = {
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
function sl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ll = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wa = /* @__PURE__ */ sl(
  function(e) {
    return ll.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), mi = { exports: {} }, Ae = {}, xa;
function ul() {
  if (xa) return Ae;
  xa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, u = e ? Symbol.for("react.strict_mode") : 60108, d = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, w = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, O = e ? Symbol.for("react.forward_ref") : 60112, C = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, Y = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function Z(S) {
    if (typeof S == "object" && S !== null) {
      var de = S.$$typeof;
      switch (de) {
        case t:
          switch (S = S.type, S) {
            case b:
            case m:
            case a:
            case d:
            case u:
            case C:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case w:
                case O:
                case I:
                case Y:
                case y:
                  return S;
                default:
                  return de;
              }
          }
        case r:
          return de;
      }
    }
  }
  function J(S) {
    return Z(S) === m;
  }
  return Ae.AsyncMode = b, Ae.ConcurrentMode = m, Ae.ContextConsumer = w, Ae.ContextProvider = y, Ae.Element = t, Ae.ForwardRef = O, Ae.Fragment = a, Ae.Lazy = I, Ae.Memo = Y, Ae.Portal = r, Ae.Profiler = d, Ae.StrictMode = u, Ae.Suspense = C, Ae.isAsyncMode = function(S) {
    return J(S) || Z(S) === b;
  }, Ae.isConcurrentMode = J, Ae.isContextConsumer = function(S) {
    return Z(S) === w;
  }, Ae.isContextProvider = function(S) {
    return Z(S) === y;
  }, Ae.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Ae.isForwardRef = function(S) {
    return Z(S) === O;
  }, Ae.isFragment = function(S) {
    return Z(S) === a;
  }, Ae.isLazy = function(S) {
    return Z(S) === I;
  }, Ae.isMemo = function(S) {
    return Z(S) === Y;
  }, Ae.isPortal = function(S) {
    return Z(S) === r;
  }, Ae.isProfiler = function(S) {
    return Z(S) === d;
  }, Ae.isStrictMode = function(S) {
    return Z(S) === u;
  }, Ae.isSuspense = function(S) {
    return Z(S) === C;
  }, Ae.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === a || S === m || S === d || S === u || S === C || S === j || typeof S == "object" && S !== null && (S.$$typeof === I || S.$$typeof === Y || S.$$typeof === y || S.$$typeof === w || S.$$typeof === O || S.$$typeof === N || S.$$typeof === $ || S.$$typeof === U || S.$$typeof === x);
  }, Ae.typeOf = Z, Ae;
}
mi.exports = ul();
var cl = mi.exports, Ao = cl, dl = {
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
}, fl = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, pl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, yi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ro = {};
Ro[Ao.ForwardRef] = pl;
Ro[Ao.Memo] = yi;
function Sa(e) {
  return Ao.isMemo(e) ? yi : Ro[e.$$typeof] || dl;
}
var hl = Object.defineProperty, gl = Object.getOwnPropertyNames, ka = Object.getOwnPropertySymbols, ml = Object.getOwnPropertyDescriptor, yl = Object.getPrototypeOf, Ca = Object.prototype;
function bi(e, t, r) {
  if (typeof t != "string") {
    if (Ca) {
      var a = yl(t);
      a && a !== Ca && bi(e, a, r);
    }
    var u = gl(t);
    ka && (u = u.concat(ka(t)));
    for (var d = Sa(e), y = Sa(t), w = 0; w < u.length; ++w) {
      var b = u[w];
      if (!fl[b] && !(r && r[b]) && !(y && y[b]) && !(d && d[b])) {
        var m = ml(t, b);
        try {
          hl(e, b, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var bl = bi;
const vl = /* @__PURE__ */ _o(bl);
var nt = { env: { NODE_ENV: "production" } };
function qt() {
  return (qt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }).apply(this, arguments);
}
var _a = function(e, t) {
  for (var r = [e[0]], a = 0, u = t.length; a < u; a += 1) r.push(t[a], e[a + 1]);
  return r;
}, go = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !gi.typeOf(e);
}, On = Object.freeze([]), rr = Object.freeze({});
function Jr(e) {
  return typeof e == "function";
}
function Ta(e) {
  return e.displayName || e.name || "Component";
}
function Oo(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ar = typeof nt < "u" && nt.env !== void 0 && (nt.env.REACT_APP_SC_ATTR || nt.env.SC_ATTR) || "data-styled", Io = typeof window < "u" && "HTMLElement" in window, wl = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof nt < "u" && nt.env !== void 0 && (nt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && nt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? nt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && nt.env.REACT_APP_SC_DISABLE_SPEEDY : nt.env.SC_DISABLE_SPEEDY !== void 0 && nt.env.SC_DISABLE_SPEEDY !== "" ? nt.env.SC_DISABLE_SPEEDY !== "false" && nt.env.SC_DISABLE_SPEEDY : nt.env.NODE_ENV !== "production"));
function Qr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var xl = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var a = 0, u = 0; u < r; u++) a += this.groupSizes[u];
    return a;
  }, t.insertRules = function(r, a) {
    if (r >= this.groupSizes.length) {
      for (var u = this.groupSizes, d = u.length, y = d; r >= y; ) (y <<= 1) < 0 && Qr(16, "" + r);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(u), this.length = y;
      for (var w = d; w < y; w++) this.groupSizes[w] = 0;
    }
    for (var b = this.indexOfGroup(r + 1), m = 0, O = a.length; m < O; m++) this.tag.insertRule(b, a[m]) && (this.groupSizes[r]++, b++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var a = this.groupSizes[r], u = this.indexOfGroup(r), d = u + a;
      this.groupSizes[r] = 0;
      for (var y = u; y < d; y++) this.tag.deleteRule(u);
    }
  }, t.getGroup = function(r) {
    var a = "";
    if (r >= this.length || this.groupSizes[r] === 0) return a;
    for (var u = this.groupSizes[r], d = this.indexOfGroup(r), y = d + u, w = d; w < y; w++) a += this.tag.getRule(w) + `/*!sc*/
`;
    return a;
  }, e;
}(), En = /* @__PURE__ */ new Map(), In = /* @__PURE__ */ new Map(), Hr = 1, xn = function(e) {
  if (En.has(e)) return En.get(e);
  for (; In.has(Hr); ) Hr++;
  var t = Hr++;
  return En.set(e, t), In.set(t, e), t;
}, Sl = function(e) {
  return In.get(e);
}, kl = function(e, t) {
  t >= Hr && (Hr = t + 1), En.set(e, t), In.set(t, e);
}, Cl = "style[" + Ar + '][data-styled-version="5.3.11"]', _l = new RegExp("^" + Ar + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Tl = function(e, t, r) {
  for (var a, u = r.split(","), d = 0, y = u.length; d < y; d++) (a = u[d]) && e.registerName(t, a);
}, El = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), a = [], u = 0, d = r.length; u < d; u++) {
    var y = r[u].trim();
    if (y) {
      var w = y.match(_l);
      if (w) {
        var b = 0 | parseInt(w[1], 10), m = w[2];
        b !== 0 && (kl(m, b), Tl(e, m, w[3]), e.getTag().insertRules(b, a)), a.length = 0;
      } else a.push(y);
    }
  }
}, Al = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, vi = function(e) {
  var t = document.head, r = e || t, a = document.createElement("style"), u = function(w) {
    for (var b = w.childNodes, m = b.length; m >= 0; m--) {
      var O = b[m];
      if (O && O.nodeType === 1 && O.hasAttribute(Ar)) return O;
    }
  }(r), d = u !== void 0 ? u.nextSibling : null;
  a.setAttribute(Ar, "active"), a.setAttribute("data-styled-version", "5.3.11");
  var y = Al();
  return y && a.setAttribute("nonce", y), r.insertBefore(a, d), a;
}, Rl = function() {
  function e(r) {
    var a = this.element = vi(r);
    a.appendChild(document.createTextNode("")), this.sheet = function(u) {
      if (u.sheet) return u.sheet;
      for (var d = document.styleSheets, y = 0, w = d.length; y < w; y++) {
        var b = d[y];
        if (b.ownerNode === u) return b;
      }
      Qr(17);
    }(a), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, a) {
    try {
      return this.sheet.insertRule(a, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var a = this.sheet.cssRules[r];
    return a !== void 0 && typeof a.cssText == "string" ? a.cssText : "";
  }, e;
}(), Ol = function() {
  function e(r) {
    var a = this.element = vi(r);
    this.nodes = a.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, a) {
    if (r <= this.length && r >= 0) {
      var u = document.createTextNode(a), d = this.nodes[r];
      return this.element.insertBefore(u, d || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Il = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, a) {
    return r <= this.length && (this.rules.splice(r, 0, a), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Ea = Io, Nl = { isServer: !Io, useCSSOMInjection: !wl }, wi = function() {
  function e(r, a, u) {
    r === void 0 && (r = rr), a === void 0 && (a = {}), this.options = qt({}, Nl, {}, r), this.gs = a, this.names = new Map(u), this.server = !!r.isServer, !this.server && Io && Ea && (Ea = !1, function(d) {
      for (var y = document.querySelectorAll(Cl), w = 0, b = y.length; w < b; w++) {
        var m = y[w];
        m && m.getAttribute(Ar) !== "active" && (El(d, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(r) {
    return xn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, a) {
    return a === void 0 && (a = !0), new e(qt({}, this.options, {}, r), this.gs, a && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (u = (a = this.options).isServer, d = a.useCSSOMInjection, y = a.target, r = u ? new Il(y) : d ? new Rl(y) : new Ol(y), new xl(r)));
    var r, a, u, d, y;
  }, t.hasNameForId = function(r, a) {
    return this.names.has(r) && this.names.get(r).has(a);
  }, t.registerName = function(r, a) {
    if (xn(r), this.names.has(r)) this.names.get(r).add(a);
    else {
      var u = /* @__PURE__ */ new Set();
      u.add(a), this.names.set(r, u);
    }
  }, t.insertRules = function(r, a, u) {
    this.registerName(r, a), this.getTag().insertRules(xn(r), u);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(xn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var a = r.getTag(), u = a.length, d = "", y = 0; y < u; y++) {
        var w = Sl(y);
        if (w !== void 0) {
          var b = r.names.get(w), m = a.getGroup(y);
          if (b && m && b.size) {
            var O = Ar + ".g" + y + '[id="' + w + '"]', C = "";
            b !== void 0 && b.forEach(function(j) {
              j.length > 0 && (C += j + ",");
            }), d += "" + m + O + '{content:"' + C + `"}/*!sc*/
`;
          }
        }
      }
      return d;
    }(this);
  }, e;
}(), Pl = /(a)(d)/gi, Aa = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function mo(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Aa(t % 52) + r;
  return (Aa(t % 52) + r).replace(Pl, "$1-$2");
}
var _r = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, xi = function(e) {
  return _r(5381, e);
};
function Ll(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Jr(r) && !Oo(r)) return !1;
  }
  return !0;
}
var Ml = xi("5.3.11"), Dl = function() {
  function e(t, r, a) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (a === void 0 || a.isStatic) && Ll(t), this.componentId = r, this.baseHash = _r(Ml, r), this.baseStyle = a, wi.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, a) {
    var u = this.componentId, d = [];
    if (this.baseStyle && d.push(this.baseStyle.generateAndInjectStyles(t, r, a)), this.isStatic && !a.hash) if (this.staticRulesId && r.hasNameForId(u, this.staticRulesId)) d.push(this.staticRulesId);
    else {
      var y = Rr(this.rules, t, r, a).join(""), w = mo(_r(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(u, w)) {
        var b = a(y, "." + w, void 0, u);
        r.insertRules(u, w, b);
      }
      d.push(w), this.staticRulesId = w;
    }
    else {
      for (var m = this.rules.length, O = _r(this.baseHash, a.hash), C = "", j = 0; j < m; j++) {
        var Y = this.rules[j];
        if (typeof Y == "string") C += Y;
        else if (Y) {
          var I = Rr(Y, t, r, a), x = Array.isArray(I) ? I.join("") : I;
          O = _r(O, x + j), C += x;
        }
      }
      if (C) {
        var N = mo(O >>> 0);
        if (!r.hasNameForId(u, N)) {
          var $ = a(C, "." + N, void 0, u);
          r.insertRules(u, N, $);
        }
        d.push(N);
      }
    }
    return d.join(" ");
  }, e;
}(), Fl = /^\s*\/\/.*$/gm, jl = [":", "[", ".", "#"];
function zl(e) {
  var t, r, a, u, d = rr, y = d.options, w = y === void 0 ? rr : y, b = d.plugins, m = b === void 0 ? On : b, O = new al(w), C = [], j = /* @__PURE__ */ function(x) {
    function N($) {
      if ($) try {
        x($ + "}");
      } catch {
      }
    }
    return function($, U, Z, J, S, de, ye, Ce, Oe, ze) {
      switch ($) {
        case 1:
          if (Oe === 0 && U.charCodeAt(0) === 64) return x(U + ";"), "";
          break;
        case 2:
          if (Ce === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Ce) {
            case 102:
            case 112:
              return x(Z[0] + U), "";
            default:
              return U + (ze === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(N);
      }
    };
  }(function(x) {
    C.push(x);
  }), Y = function(x, N, $) {
    return N === 0 && jl.indexOf($[r.length]) !== -1 || $.match(u) ? x : "." + t;
  };
  function I(x, N, $, U) {
    U === void 0 && (U = "&");
    var Z = x.replace(Fl, ""), J = N && $ ? $ + " " + N + " { " + Z + " }" : Z;
    return t = U, r = N, a = new RegExp("\\" + r + "\\b", "g"), u = new RegExp("(\\" + r + "\\b){2,}"), O($ || !N ? "" : N, J);
  }
  return O.use([].concat(m, [function(x, N, $) {
    x === 2 && $.length && $[0].lastIndexOf(r) > 0 && ($[0] = $[0].replace(a, Y));
  }, j, function(x) {
    if (x === -2) {
      var N = C;
      return C = [], N;
    }
  }])), I.hash = m.length ? m.reduce(function(x, N) {
    return N.name || Qr(15), _r(x, N.name);
  }, 5381).toString() : "", I;
}
var Si = et.createContext();
Si.Consumer;
var ki = et.createContext(), $l = (ki.Consumer, new wi()), yo = zl();
function Ul() {
  return or(Si) || $l;
}
function Bl() {
  return or(ki) || yo;
}
var Wl = function() {
  function e(t, r) {
    var a = this;
    this.inject = function(u, d) {
      d === void 0 && (d = yo);
      var y = a.name + d.hash;
      u.hasNameForId(a.id, y) || u.insertRules(a.id, y, d(a.rules, y, "@keyframes"));
    }, this.toString = function() {
      return Qr(12, String(a.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = yo), this.name + t.hash;
  }, e;
}(), ql = /([A-Z])/, Vl = /([A-Z])/g, Hl = /^ms-/, Gl = function(e) {
  return "-" + e.toLowerCase();
};
function Ra(e) {
  return ql.test(e) ? e.replace(Vl, Gl).replace(Hl, "-ms-") : e;
}
var Oa = function(e) {
  return e == null || e === !1 || e === "";
};
function Rr(e, t, r, a) {
  if (Array.isArray(e)) {
    for (var u, d = [], y = 0, w = e.length; y < w; y += 1) (u = Rr(e[y], t, r, a)) !== "" && (Array.isArray(u) ? d.push.apply(d, u) : d.push(u));
    return d;
  }
  if (Oa(e)) return "";
  if (Oo(e)) return "." + e.styledComponentId;
  if (Jr(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Rr(b, t, r, a);
  }
  var m;
  return e instanceof Wl ? r ? (e.inject(r, a), e.getName(a)) : e : go(e) ? function O(C, j) {
    var Y, I, x = [];
    for (var N in C) C.hasOwnProperty(N) && !Oa(C[N]) && (Array.isArray(C[N]) && C[N].isCss || Jr(C[N]) ? x.push(Ra(N) + ":", C[N], ";") : go(C[N]) ? x.push.apply(x, O(C[N], N)) : x.push(Ra(N) + ": " + (Y = N, (I = C[N]) == null || typeof I == "boolean" || I === "" ? "" : typeof I != "number" || I === 0 || Y in il || Y.startsWith("--") ? String(I).trim() : I + "px") + ";"));
    return j ? [j + " {"].concat(x, ["}"]) : x;
  }(e) : e.toString();
}
var Ia = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Yl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
  return Jr(e) || go(e) ? Ia(Rr(_a(On, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ia(Rr(_a(e, r)));
}
var Zl = function(e, t, r) {
  return r === void 0 && (r = rr), e.theme !== r.theme && e.theme || t || r.theme;
}, Jl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Xl = /(^-|-$)/g;
function ao(e) {
  return e.replace(Jl, "-").replace(Xl, "");
}
var Kl = function(e) {
  return mo(xi(e) >>> 0);
};
function Sn(e) {
  return typeof e == "string" && nt.env.NODE_ENV === "production";
}
var bo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ql = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function eu(e, t, r) {
  var a = e[r];
  bo(t) && bo(a) ? Ci(a, t) : e[r] = t;
}
function Ci(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
  for (var u = 0, d = r; u < d.length; u++) {
    var y = d[u];
    if (bo(y)) for (var w in y) Ql(w) && eu(e, y[w], w);
  }
  return e;
}
var _i = et.createContext();
_i.Consumer;
var io = {};
function Ti(e, t, r) {
  var a = Oo(e), u = !Sn(e), d = t.attrs, y = d === void 0 ? On : d, w = t.componentId, b = w === void 0 ? function(U, Z) {
    var J = typeof U != "string" ? "sc" : ao(U);
    io[J] = (io[J] || 0) + 1;
    var S = J + "-" + Kl("5.3.11" + J + io[J]);
    return Z ? Z + "-" + S : S;
  }(t.displayName, t.parentComponentId) : w, m = t.displayName, O = m === void 0 ? function(U) {
    return Sn(U) ? "styled." + U : "Styled(" + Ta(U) + ")";
  }(e) : m, C = t.displayName && t.componentId ? ao(t.displayName) + "-" + t.componentId : t.componentId || b, j = a && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, Y = t.shouldForwardProp;
  a && e.shouldForwardProp && (Y = t.shouldForwardProp ? function(U, Z, J) {
    return e.shouldForwardProp(U, Z, J) && t.shouldForwardProp(U, Z, J);
  } : e.shouldForwardProp);
  var I, x = new Dl(r, C, a ? e.componentStyle : void 0), N = x.isStatic && y.length === 0, $ = function(U, Z) {
    return function(J, S, de, ye) {
      var Ce = J.attrs, Oe = J.componentStyle, ze = J.defaultProps, Ge = J.foldedComponentIds, pe = J.shouldForwardProp, we = J.styledComponentId, Te = J.target, xe = function(F, p, V) {
        F === void 0 && (F = rr);
        var k = qt({}, p, { theme: F }), re = {};
        return V.forEach(function(K) {
          var Q, W, ne, le = K;
          for (Q in Jr(le) && (le = le(k)), le) k[Q] = re[Q] = Q === "className" ? (W = re[Q], ne = le[Q], W && ne ? W + " " + ne : W || ne) : le[Q];
        }), [k, re];
      }(Zl(S, or(_i), ze) || rr, S, Ce), Ye = xe[0], Ie = xe[1], ke = function(F, p, V, k) {
        var re = Ul(), K = Bl(), Q = p ? F.generateAndInjectStyles(rr, re, K) : F.generateAndInjectStyles(V, re, K);
        return Q;
      }(Oe, ye, Ye), De = de, Ve = Ie.$as || S.$as || Ie.as || S.as || Te, He = Sn(Ve), L = Ie !== S ? qt({}, S, {}, Ie) : S, A = {};
      for (var P in L) P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? A.as = L[P] : (pe ? pe(P, wa, Ve) : !He || wa(P)) && (A[P] = L[P]));
      return S.style && Ie.style !== S.style && (A.style = qt({}, S.style, {}, Ie.style)), A.className = Array.prototype.concat(Ge, we, ke !== we ? ke : null, S.className, Ie.className).filter(Boolean).join(" "), A.ref = De, ri(Ve, A);
    }(I, U, Z, N);
  };
  return $.displayName = O, (I = et.forwardRef($)).attrs = j, I.componentStyle = x, I.displayName = O, I.shouldForwardProp = Y, I.foldedComponentIds = a ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : On, I.styledComponentId = C, I.target = a ? e.target : e, I.withComponent = function(U) {
    var Z = t.componentId, J = function(de, ye) {
      if (de == null) return {};
      var Ce, Oe, ze = {}, Ge = Object.keys(de);
      for (Oe = 0; Oe < Ge.length; Oe++) Ce = Ge[Oe], ye.indexOf(Ce) >= 0 || (ze[Ce] = de[Ce]);
      return ze;
    }(t, ["componentId"]), S = Z && Z + "-" + (Sn(U) ? U : ao(Ta(U)));
    return Ti(U, qt({}, J, { attrs: j, componentId: S }), r);
  }, Object.defineProperty(I, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = a ? Ci({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(I, "toString", { value: function() {
    return "." + I.styledComponentId;
  } }), u && vl(I, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), I;
}
var Rt = function(e) {
  return function t(r, a, u) {
    if (u === void 0 && (u = rr), !gi.isValidElementType(a)) return Qr(1, String(a));
    var d = function() {
      return r(a, u, Yl.apply(void 0, arguments));
    };
    return d.withConfig = function(y) {
      return t(r, a, qt({}, u, {}, y));
    }, d.attrs = function(y) {
      return t(r, a, qt({}, u, { attrs: Array.prototype.concat(u.attrs, y).filter(Boolean) }));
    }, d;
  }(Ti, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Rt[e] = Rt(e);
});
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
function zn(e) {
  var t = Object.entries(e).filter(function(r) {
    var a = r[1];
    return a != null;
  }).map(function(r) {
    var a = r[0], u = r[1];
    return "".concat(encodeURIComponent(a), "=").concat(encodeURIComponent(String(u)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var tu = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var d in u) Object.prototype.hasOwnProperty.call(u, d) && (a[d] = u[d]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function a() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (a.prototype = r.prototype, new a());
  };
}(), vr = function() {
  return vr = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var u in t) Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
    }
    return e;
  }, vr.apply(this, arguments);
}, ru = function(e, t, r, a) {
  function u(d) {
    return d instanceof r ? d : new r(function(y) {
      y(d);
    });
  }
  return new (r || (r = Promise))(function(d, y) {
    function w(O) {
      try {
        m(a.next(O));
      } catch (C) {
        y(C);
      }
    }
    function b(O) {
      try {
        m(a.throw(O));
      } catch (C) {
        y(C);
      }
    }
    function m(O) {
      O.done ? d(O.value) : u(O.value).then(w, b);
    }
    m((a = a.apply(e, [])).next());
  });
}, nu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (d[0] & 1) throw d[1];
    return d[1];
  }, trys: [], ops: [] }, a, u, d, y;
  return y = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
  function w(m) {
    return function(O) {
      return b([m, O]);
    };
  }
  function b(m) {
    if (a) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (a = 1, u && (d = m[0] & 2 ? u.return : m[0] ? u.throw || ((d = u.return) && d.call(u), 0) : u.next) && !(d = d.call(u, m[1])).done) return d;
      switch (u = 0, d && (m = [m[0] & 2, d.value]), m[0]) {
        case 0:
        case 1:
          d = m;
          break;
        case 4:
          return r.label++, { value: m[1], done: !1 };
        case 5:
          r.label++, u = m[1], m = [0];
          continue;
        case 7:
          m = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (d = r.trys, !(d = d.length > 0 && d[d.length - 1]) && (m[0] === 6 || m[0] === 2)) {
            r = 0;
            continue;
          }
          if (m[0] === 3 && (!d || m[1] > d[0] && m[1] < d[3])) {
            r.label = m[1];
            break;
          }
          if (m[0] === 6 && r.label < d[1]) {
            r.label = d[1], d = m;
            break;
          }
          if (d && r.label < d[2]) {
            r.label = d[2], r.ops.push(m);
            break;
          }
          d[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      m = t.call(e, r);
    } catch (O) {
      m = [6, O], u = 0;
    } finally {
      a = d = 0;
    }
    if (m[0] & 5) throw m[1];
    return { value: m[0] ? m[1] : void 0, done: !0 };
  }
}, Ei = function(e, t) {
  var r = {};
  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, a = Object.getOwnPropertySymbols(e); u < a.length; u++)
      t.indexOf(a[u]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[u]) && (r[a[u]] = e[a[u]]);
  return r;
}, ou = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, au = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, iu = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function su(e, t, r) {
  var a = t.height, u = t.width, d = Ei(t, ["height", "width"]), y = vr({ height: a, width: u, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, d), w = window.open(e, "", Object.keys(y).map(function(m) {
    return "".concat(m, "=").concat(y[m]);
  }).join(", "));
  if (r)
    var b = window.setInterval(function() {
      try {
        (w === null || w.closed) && (window.clearInterval(b), r(w));
      } catch (m) {
        console.error(m);
      }
    }, 1e3);
  return w;
}
var lu = (
  /** @class */
  function(e) {
    tu(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(a) {
        var u = r.props, d = u.onShareWindowClose, y = u.windowHeight, w = y === void 0 ? 400 : y, b = u.windowPosition, m = b === void 0 ? "windowCenter" : b, O = u.windowWidth, C = O === void 0 ? 550 : O, j = vr({ height: w, width: C }, m === "windowCenter" ? au(C, w) : iu(C, w));
        su(a, j, d);
      }, r.handleClick = function(a) {
        return ru(r, void 0, void 0, function() {
          var u, d, y, w, b, m, O, C, j, Y;
          return nu(this, function(I) {
            switch (I.label) {
              case 0:
                return u = this.props, d = u.beforeOnClick, y = u.disabled, w = u.networkLink, b = u.onClick, m = u.url, O = u.openShareDialogOnClick, C = u.opts, j = w(m, C), y ? [
                  2
                  /*return*/
                ] : (a.preventDefault(), d ? (Y = d(), ou(Y) ? [4, Y] : [3, 2]) : [3, 2]);
              case 1:
                I.sent(), I.label = 2;
              case 2:
                return O && this.openShareDialog(j), b && b(a, j), [
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
      var a = r.children, u = r.className, d = r.disabled, y = r.disabledStyle, w = r.forwardedRef;
      r.networkLink;
      var b = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var m = r.resetButtonStyle, O = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var C = Ei(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), j = Er("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!d,
        disabled: !!d
      }, u), Y = vr(vr(m ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, O), d && y);
      return et.createElement("button", vr({}, C, { "aria-label": C["aria-label"] || b, className: j, onClick: this.handleClick, ref: w, style: Y }), a);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(us)
), Nn = function() {
  return Nn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var u in t) Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
    }
    return e;
  }, Nn.apply(this, arguments);
};
function $n(e, t, r, a) {
  function u(d, y) {
    var w = r(d), b = Nn({}, d), m = Object.keys(w);
    return m.forEach(function(O) {
      delete b[O];
    }), et.createElement(lu, Nn({}, a, b, { forwardedRef: y, networkName: e, networkLink: t, opts: r(d) }));
  }
  return u.displayName = "ShareButton-".concat(e), ti(u);
}
function uu(e, t) {
  var r = t.subject, a = t.body, u = t.separator;
  return "mailto:" + zn({ subject: r, body: a ? a + u + e : e });
}
$n("email", uu, function(e) {
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
var cu = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var d in u) Object.prototype.hasOwnProperty.call(u, d) && (a[d] = u[d]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function a() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (a.prototype = r.prototype, new a());
  };
}(), du = (
  /** @class */
  function(e) {
    cu(t, e);
    function t(r) {
      var a = e.call(this, r) || this;
      return a.name = "AssertionError", a;
    }
    return t;
  }(Error)
);
function Gr(e, t) {
  if (!e)
    throw new du(t);
}
function fu(e, t) {
  var r = t.quote, a = t.hashtag;
  return Gr(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + zn({
    u: e,
    quote: r,
    hashtag: a
  });
}
$n("facebook", fu, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function pu(e, t) {
  var r = t.title, a = t.summary, u = t.source;
  return Gr(e, "linkedin.url"), "https://linkedin.com/shareArticle" + zn({ url: e, mini: "true", title: r, summary: a, source: u });
}
$n("linkedin", pu, function(e) {
  var t = e.title, r = e.summary, a = e.source;
  return { title: t, summary: r, source: a };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function hu(e, t) {
  var r = t.title, a = t.via, u = t.hashtags, d = u === void 0 ? [] : u, y = t.related, w = y === void 0 ? [] : y;
  return Gr(e, "twitter.url"), Gr(Array.isArray(d), "twitter.hashtags is not an array"), Gr(Array.isArray(w), "twitter.related is not an array"), "https://twitter.com/share" + zn({
    url: e,
    text: r,
    via: a,
    hashtags: d.length > 0 ? d.join(",") : void 0,
    related: w.length > 0 ? w.join(",") : void 0
  });
}
$n("twitter", hu, function(e) {
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
function vo(e) {
  "@babel/helpers - typeof";
  return vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vo(e);
}
var gu = (typeof window > "u" ? "undefined" : vo(window)) === "object" && window.Element || function() {
};
function mu(e, t, r) {
  if (!(e[t] instanceof gu))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
i.oneOfType([i.string, i.func, mu, i.shape({
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
const yu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, No = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: a,
  color: u,
  disabled: d,
  element: y = "button",
  innerRef: w,
  href: b,
  onClick: m,
  ...O
}) => {
  const C = Er("btn", "btn-tag", {
    "btn-tag-alt-white": u === "white",
    "btn-tag-alt-gray": u === "gray",
    "btn-tag-alt-dark": u === "dark",
    disabled: d
  });
  let j = y;
  return b && y === "button" && (j = "a"), /* @__PURE__ */ H.jsx(
    Kr,
    {
      gaData: {
        ...yu,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ H.jsx(
        j,
        {
          type: j === "button" && m ? "button" : void 0,
          ...O,
          className: C,
          href: b,
          ref: w,
          onClick: m,
          "aria-label": a,
          children: e
        }
      )
    }
  );
};
No.propTypes = {
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
  gaData: To,
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
No.defaultProps = {
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
const Ai = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: a = "lazy",
  decoding: u = "async",
  dataTestId: d,
  fetchPriority: y = "auto",
  width: w,
  height: b,
  cardLink: m,
  title: O,
  caption: C,
  captionTitle: j,
  border: Y,
  dropShadow: I
}) => {
  const x = {
    src: e,
    alt: t,
    loading: a,
    decoding: u,
    fetchpriority: y,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Ss(r) },
    ...d && { "data-testid": d },
    ...w && { width: w },
    ...b && { height: b }
  }, N = Er("uds-img", {
    borderless: !Y,
    "uds-img-drop-shadow": I
  }), $ = (Z) => {
    const J = Z ? `${x.className} ${Z}` : x.className;
    return m ? /* @__PURE__ */ H.jsxs("a", { href: m, children: [
      /* @__PURE__ */ H.jsx("img", { ...x, className: J }),
      /* @__PURE__ */ H.jsx("span", { className: "visually-hidden", children: O })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ H.jsx("img", { ...x, className: J })
    );
  }, U = () => /* @__PURE__ */ H.jsx("div", { className: N, children: /* @__PURE__ */ H.jsxs("figure", { className: "figure uds-figure", children: [
    $(),
    C && /* @__PURE__ */ H.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      j && /* @__PURE__ */ H.jsx("h3", { children: j }),
      /* @__PURE__ */ H.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Cr(C)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ H.jsx(H.Fragment, { children: C ? U() : $(N) });
};
Ai.propTypes = {
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
const bu = Rt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, vu = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), wu = (e) => !e.startsWith("https://") && !e.startsWith("http://") && vu(e) ? `mailto:${e}` : e, xu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Wt = ({
  type: e,
  width: t,
  horizontal: r,
  image: a,
  imageAltText: u,
  title: d,
  icon: y,
  body: w,
  eventFormat: b,
  eventLocation: m,
  eventTime: O,
  buttons: C,
  linkLabel: j,
  linkUrl: Y,
  tags: I,
  showBorders: x,
  cardLink: N
}) => /* @__PURE__ */ H.jsx(
  Po,
  {
    type: e,
    width: t,
    horizontal: r,
    image: a,
    imageAltText: u,
    title: d,
    icon: y,
    body: w,
    eventFormat: b,
    eventLocation: m,
    eventTime: O,
    buttons: C,
    linkLabel: j,
    linkUrl: Y,
    tags: I,
    showBorders: x,
    cardLink: N
  }
);
Wt.propTypes = {
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
Wt.defaultProps = {
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
const Po = ({
  type: e,
  width: t,
  horizontal: r,
  image: a,
  imageAltText: u,
  title: d,
  icon: y,
  body: w,
  eventFormat: b,
  eventLocation: m,
  eventTime: O,
  buttons: C,
  linkLabel: j,
  linkUrl: Y,
  tags: I,
  showBorders: x,
  cardLink: N
}) => {
  const $ = Er("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !x
  });
  return /* @__PURE__ */ H.jsx(H.Fragment, { children: /* @__PURE__ */ H.jsxs(bu, { className: $, "data-testid": "card-container", children: [
    !!a && /* @__PURE__ */ H.jsx(
      Ai,
      {
        src: a,
        alt: u,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: N,
        title: d
      }
    ),
    !a && y && /* @__PURE__ */ H.jsx(
      "i",
      {
        className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ H.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ H.jsx(
      Pn,
      {
        type: e,
        body: w,
        eventFormat: b,
        eventLocation: m,
        eventTime: O,
        title: d,
        buttons: C,
        linkLabel: j,
        linkUrl: Y,
        tags: I,
        cardLink: N
      }
    ) }) : /* @__PURE__ */ H.jsx(
      Pn,
      {
        type: e,
        body: w,
        eventFormat: b,
        eventLocation: m,
        eventTime: O,
        title: d,
        buttons: C,
        linkLabel: j,
        linkUrl: Y,
        tags: I,
        cardLink: N
      }
    )
  ] }) });
};
Po.propTypes = {
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
Po.defaultProps = {
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
  eventFormat: r,
  eventLocation: a,
  eventTime: u,
  title: d,
  buttons: y,
  linkLabel: w,
  linkUrl: b,
  tags: m,
  cardLink: O
}) => /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
  !!d && /* @__PURE__ */ H.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ H.jsx("h3", { className: "card-title", children: O ? /* @__PURE__ */ H.jsx("a", { href: O, children: d }) : d }) }),
  !!t && /* @__PURE__ */ H.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: Cr(t) }) }),
  e === "event" && (u || a) && /* @__PURE__ */ H.jsx(
    Lo,
    {
      eventFormat: r,
      eventTime: u,
      eventLocation: a
    }
  ),
  y && /* @__PURE__ */ H.jsx("div", { className: "card-buttons", children: y.map((C) => /* @__PURE__ */ H.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ H.jsx(
        Eo,
        {
          ariaLabel: C.ariaLabel,
          color: C.color,
          icon: C.icon,
          href: C.href,
          label: C.label,
          onClick: C.onClick,
          size: C.size,
          target: C.target,
          cardTitle: d
        }
      )
    },
    `${C.label}-${C.href}`
  )) }),
  b && w && /* @__PURE__ */ H.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ H.jsx(
    Kr,
    {
      gaData: {
        ...xu,
        section: d,
        text: w
      },
      children: /* @__PURE__ */ H.jsx("a", { href: wu(b), children: w })
    }
  ) }),
  m && /* @__PURE__ */ H.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: m.map((C) => (
    // @ts-ignore
    /* @__PURE__ */ H.jsx(
      No,
      {
        ariaLabel: C.ariaLabel,
        color: C.color,
        href: C.href,
        label: C.label,
        onClick: C.onClick,
        cardTitle: d
      },
      `${C.label}-${C.href}`
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
const Lo = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ H.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: Cr(t) })
  ] }),
  r && /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ H.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Cr(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
  t && /* @__PURE__ */ H.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: Cr(t) })
  ] }) }),
  r && /* @__PURE__ */ H.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ H.jsx("span", { children: /* @__PURE__ */ H.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Cr(r)
      }
    ) })
  ] }) })
] });
Lo.propTypes = {
  eventFormat: i.oneOf(["stack", "inline"]),
  eventLocation: i.string,
  eventTime: i.string
};
Lo.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const Su = Rt.div`
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
`, ku = () => /* @__PURE__ */ H.jsxs(Su, { children: [
  /* @__PURE__ */ H.jsx("div", {}),
  /* @__PURE__ */ H.jsx("div", {}),
  /* @__PURE__ */ H.jsx("div", {}),
  /* @__PURE__ */ H.jsx("div", {})
] }), Cu = Rt.section``, Mo = cs(null), Ri = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: a,
  renderBody: u,
  dataTransformer: d,
  dataFilter: y,
  maxItems: w
}) => {
  const [{ data: b, loading: m, error: O }, C] = xs(), [j, Y] = Vr([]), I = { ...e.dataSource, ...t };
  return Zr(() => {
    C(I == null ? void 0 : I.url);
  }, [I == null ? void 0 : I.url]), Zr(() => {
    const x = b == null ? void 0 : b.nodes.map(d), N = x == null ? void 0 : x.filter(
      ($) => y($, t == null ? void 0 : t.filters)
    );
    Y(w ? N == null ? void 0 : N.slice(0, w) : N);
  }, [b]), // Init the context to be used on its childrens
  /* @__PURE__ */ H.jsx(Mo.Provider, { value: { feeds: j }, children: /* @__PURE__ */ H.jsxs(Cu, { children: [
    a,
    O ? /* @__PURE__ */ H.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
      m && !(j != null && j.length) && /* @__PURE__ */ H.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ H.jsx(ku, {}) }),
      j != null && j.length ? u : !m && /* @__PURE__ */ H.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
Ri.propTypes = {
  renderHeader: i.element,
  renderBody: i.element,
  maxItems: i.number,
  dataTransformer: i.func,
  dataFilter: i.func,
  noFeedText: i.string
};
const Do = i.shape({
  color: i.oneOf(["white", "dark"]),
  text: i.string
}), Fo = i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  text: i.string
});
i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  text: i.string,
  size: i.string
});
const Oi = i.shape({
  url: i.string,
  filters: i.string
}), _u = i.shape({
  header: Do,
  ctaButton: Fo,
  dataSource: Oi,
  maxItems: i.number
}), Tu = Rt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Ii = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const a = { ...e.header, ...t }, u = { ...e.ctaButton, ...r };
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ H.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ H.jsx("h2", { className: `text-${a.color}`, children: a.text }) }),
        /* @__PURE__ */ H.jsx(Tu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ H.jsx(
          Kr,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: a.text,
              text: u.text
            },
            children: /* @__PURE__ */ H.jsx("a", { className: `btn btn-${u.color}`, href: u.url, children: u.text })
          }
        ) })
      ]
    }
  );
};
Ii.propTypes = {
  defaultProps: _u,
  header: Do,
  ctaButton: Fo
};
const Ni = ({ children: e }) => /* @__PURE__ */ H.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ H.jsx("div", { className: "col", children: e }) });
Ni.propTypes = {
  children: i.element
};
Rt.img`
  width: 100%;
`;
i.oneOf(["heading-hero", "story-hero"]), i.arrayOf(Kn), i.string;
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
const Eu = ti(function(e, t) {
  const {
    id: r,
    selected: a,
    title: u,
    selectTab: d,
    leftKeyPressed: y,
    rightKeyPressed: w,
    icon: b,
    gaData: m
  } = e, O = ds(null);
  fs(
    t,
    () => ({
      focus() {
        O.current.focus();
      },
      scrollIntoView() {
        var j, Y, I, x, N, $, U;
        const Z = ((j = O.current) == null ? void 0 : j.offsetWidth) / 2 + O.current.offsetLeft, J = ((I = (Y = O.current) == null ? void 0 : Y.offsetParent) == null ? void 0 : I.scrollLeft) + ((N = (x = O.current) == null ? void 0 : x.offsetParent) == null ? void 0 : N.offsetWidth) / 2;
        (U = ($ = O.current) == null ? void 0 : $.offsetParent) == null || U.scrollBy({
          left: Z - J
        });
      }
    }),
    []
  );
  const C = (j) => {
    j.keyCode === 37 ? (j.preventDefault(), y()) : j.keyCode === 39 && (j.preventDefault(), w());
  };
  return /* @__PURE__ */ H.jsx(Kr, { gaData: { ...m, text: u }, children: /* @__PURE__ */ H.jsxs(
    "a",
    {
      ref: O,
      className: `nav-item nav-link ${a ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": a,
      onClick: (j) => d(j, r, u),
      onKeyDown: C,
      tabIndex: a ? "" : "-1",
      children: [
        u,
        " ",
        b && /* @__PURE__ */ H.jsx("i", { className: `${b == null ? void 0 : b[0]} fa-${b == null ? void 0 : b[1]} me-1` })
      ]
    }
  ) });
});
Eu.propTypes = {
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
var Au = !1;
try {
  var Na = Object.defineProperty({}, "passive", {
    get: function() {
      Au = !0;
    }
  });
  window.addEventListener("testPassive", null, Na), window.removeEventListener("testPassive", null, Na);
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
    buttons: Wt.propTypes.buttons,
    linkLabel: i.string,
    linkUrl: i.string,
    tags: Wt.propTypes.tags
  })
).isRequired, Wt.propTypes.type, Wt.propTypes.eventFormat, Wt.propTypes.horizontal, i.string, i.string, i.bool;
i.number.isRequired, i.arrayOf(i.object).isRequired, i.string, i.string, i.bool;
const Ln = {
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
i.string, Ln.imageItems, Ln.hasContent;
Ln.imageItems.isRequired, Ln.hasContent, i.string, i.string, i.bool;
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
var Pa = ni;
Pa.createRoot, Pa.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .75rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
var Pi = { exports: {} }, so, La;
function Ru() {
  if (La) return so;
  La = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return so = e, so;
}
var lo, Ma;
function Ou() {
  if (Ma) return lo;
  Ma = 1;
  var e = Ru();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, lo = function() {
    function a(y, w, b, m, O, C) {
      if (C !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
      }
    }
    a.isRequired = a;
    function u() {
      return a;
    }
    var d = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: u,
      element: a,
      elementType: a,
      instanceOf: u,
      node: a,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return d.PropTypes = d, d;
  }, lo;
}
Pi.exports = Ou()();
var Iu = Pi.exports;
const gt = /* @__PURE__ */ oi(Iu), Da = {
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
}, Fa = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], ja = (e) => e.toLowerCase().split(" ").join("_"), Nu = (e, t) => {
  if (!t) return !0;
  const r = t.split(",");
  for (let a = 0; a < r.length; a += 1) {
    const u = ja(r[a]);
    for (let d = 0; d < Fa.length; d += 1) {
      const y = Fa[d];
      if (ja(e[y] || "").includes(u)) return !0;
    }
  }
  return !1;
}, Pu = (e) => ({
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
}), jo = ({ children: e, header: t, ctaButton: r, dataSource: a, maxItems: u }) => (
  // Calling the unity-react-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the unity-react-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ mt.jsx(
    Ri,
    {
      renderHeader: t && r ? /* @__PURE__ */ mt.jsx(
        Ii,
        {
          header: t,
          ctaButton: r,
          defaultProps: Da
        }
      ) : null,
      renderBody: /* @__PURE__ */ mt.jsx(Ni, { children: e }),
      dataTransformer: Pu,
      dataFilter: Nu,
      dataSource: a,
      defaultProps: Da,
      noFeedText: "No events to show.",
      maxItems: u
    }
  )
);
jo.propTypes = {
  header: Do,
  ctaButton: Fo,
  dataSource: Oi,
  maxItems: gt.number,
  children: gt.element
};
const Lu = gt.shape({
  color: gt.oneOf(["white", "dark"]),
  text: gt.string
}), Mu = gt.shape({
  color: gt.oneOf(["gold", "maroon", "gray", "dark"]),
  text: gt.string,
  url: gt.string
}), Du = gt.shape({
  url: gt.string.isRequired,
  filters: gt.string
}).isRequired, Li = {
  header: Lu,
  ctaButton: Mu,
  dataSource: Du,
  maxItems: gt.number
}, Fu = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), za = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), wo = (e) => {
  let t = e.split("T");
  return t = t.length > 1 ? t.join("T") : `${t[0].split(":")[0]}T00:00:00Z`, t;
}, $a = (e) => {
  let t = e.getHours(), r = e.getMinutes();
  const a = t >= 12 ? "p.m." : "a.m.";
  return t %= 12, t = t || 12, r = r < 10 ? `0${r}` : r, `${t}:${r} ${a}`;
}, Mi = (e, t) => {
  const r = wo(e), a = wo(t);
  let u = za(new Date(r)), d = za(new Date(a));
  return u = $a(new Date(u)), d = $a(new Date(d)), e === t ? u : `${u} - ${d}`;
}, Mn = (e, t) => {
  const r = wo(e);
  return {
    ISO: r.split("T")[0],
    COMPLETE: Fu(new Date(r))
  }[t];
};
var Di = { exports: {} }, Le = {};
var Ua;
function ju() {
  if (Ua) return Le;
  Ua = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), y = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), Y = Symbol.for("react.client.reference");
  function I(x) {
    if (typeof x == "object" && x !== null) {
      var N = x.$$typeof;
      switch (N) {
        case e:
          switch (x = x.type, x) {
            case r:
            case u:
            case a:
            case b:
            case m:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case y:
                case w:
                case C:
                case O:
                  return x;
                case d:
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
  return Le.ContextConsumer = d, Le.ContextProvider = y, Le.Element = e, Le.ForwardRef = w, Le.Fragment = r, Le.Lazy = C, Le.Memo = O, Le.Portal = t, Le.Profiler = u, Le.StrictMode = a, Le.Suspense = b, Le.SuspenseList = m, Le.isContextConsumer = function(x) {
    return I(x) === d;
  }, Le.isContextProvider = function(x) {
    return I(x) === y;
  }, Le.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, Le.isForwardRef = function(x) {
    return I(x) === w;
  }, Le.isFragment = function(x) {
    return I(x) === r;
  }, Le.isLazy = function(x) {
    return I(x) === C;
  }, Le.isMemo = function(x) {
    return I(x) === O;
  }, Le.isPortal = function(x) {
    return I(x) === t;
  }, Le.isProfiler = function(x) {
    return I(x) === u;
  }, Le.isStrictMode = function(x) {
    return I(x) === a;
  }, Le.isSuspense = function(x) {
    return I(x) === b;
  }, Le.isSuspenseList = function(x) {
    return I(x) === m;
  }, Le.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === a || x === b || x === m || x === j || typeof x == "object" && x !== null && (x.$$typeof === C || x.$$typeof === O || x.$$typeof === y || x.$$typeof === d || x.$$typeof === w || x.$$typeof === Y || x.getModuleId !== void 0);
  }, Le.typeOf = I, Le;
}
Di.exports = ju();
var Fi = Di.exports;
function zu(e) {
  function t(L, A, P, F, p) {
    for (var V = 0, k = 0, re = 0, K = 0, Q, W, ne = 0, le = 0, ee, se = ee = Q = 0, te = 0, fe = 0, Fe = 0, ue = 0, Ze = P.length, $e = Ze - 1, he, z = "", oe = "", Ke = "", Je = "", _e; te < Ze; ) {
      if (W = P.charCodeAt(te), te === $e && k + K + re + V !== 0 && (k !== 0 && (W = k === 47 ? 10 : 47), K = re = V = 0, Ze++, $e++), k + K + re + V === 0) {
        if (te === $e && (0 < fe && (z = z.replace(j, "")), 0 < z.trim().length)) {
          switch (W) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              z += P.charAt(te);
          }
          W = 59;
        }
        switch (W) {
          case 123:
            for (z = z.trim(), Q = z.charCodeAt(0), ee = 1, ue = ++te; te < Ze; ) {
              switch (W = P.charCodeAt(te)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (W = P.charCodeAt(te + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (se = te + 1; se < $e; ++se)
                          switch (P.charCodeAt(se)) {
                            case 47:
                              if (W === 42 && P.charCodeAt(se - 1) === 42 && te + 2 !== se) {
                                te = se + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (W === 47) {
                                te = se + 1;
                                break e;
                              }
                          }
                        te = se;
                      }
                  }
                  break;
                case 91:
                  W++;
                case 40:
                  W++;
                case 34:
                case 39:
                  for (; te++ < $e && P.charCodeAt(te) !== W; )
                    ;
              }
              if (ee === 0) break;
              te++;
            }
            switch (ee = P.substring(ue, te), Q === 0 && (Q = (z = z.replace(C, "").trim()).charCodeAt(0)), Q) {
              case 64:
                switch (0 < fe && (z = z.replace(j, "")), W = z.charCodeAt(1), W) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = A;
                    break;
                  default:
                    fe = Ye;
                }
                if (ee = t(A, fe, ee, W, p + 1), ue = ee.length, 0 < ke && (fe = r(Ye, z, Fe), _e = w(3, ee, fe, A, we, pe, ue, W, p, F), z = fe.join(""), _e !== void 0 && (ue = (ee = _e.trim()).length) === 0 && (W = 0, ee = "")), 0 < ue) switch (W) {
                  case 115:
                    z = z.replace(de, y);
                  case 100:
                  case 109:
                  case 45:
                    ee = z + "{" + ee + "}";
                    break;
                  case 107:
                    z = z.replace(U, "$1 $2"), ee = z + "{" + ee + "}", ee = xe === 1 || xe === 2 && d("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                    break;
                  default:
                    ee = z + ee, F === 112 && (ee = (oe += ee, ""));
                }
                else ee = "";
                break;
              default:
                ee = t(A, r(A, z, Fe), ee, F, p + 1);
            }
            Ke += ee, ee = Fe = fe = se = Q = 0, z = "", W = P.charCodeAt(++te);
            break;
          case 125:
          case 59:
            if (z = (0 < fe ? z.replace(j, "") : z).trim(), 1 < (ue = z.length)) switch (se === 0 && (Q = z.charCodeAt(0), Q === 45 || 96 < Q && 123 > Q) && (ue = (z = z.replace(" ", ":")).length), 0 < ke && (_e = w(1, z, A, L, we, pe, oe.length, F, p, F)) !== void 0 && (ue = (z = _e.trim()).length) === 0 && (z = "\0\0"), Q = z.charCodeAt(0), W = z.charCodeAt(1), Q) {
              case 0:
                break;
              case 64:
                if (W === 105 || W === 99) {
                  Je += z + P.charAt(te);
                  break;
                }
              default:
                z.charCodeAt(ue - 1) !== 58 && (oe += u(z, Q, W, z.charCodeAt(2)));
            }
            Fe = fe = se = Q = 0, z = "", W = P.charCodeAt(++te);
        }
      }
      switch (W) {
        case 13:
        case 10:
          k === 47 ? k = 0 : 1 + Q === 0 && F !== 107 && 0 < z.length && (fe = 1, z += "\0"), 0 < ke * Ve && w(0, z, A, L, we, pe, oe.length, F, p, F), pe = 1, we++;
          break;
        case 59:
        case 125:
          if (k + K + re + V === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, he = P.charAt(te), W) {
            case 9:
            case 32:
              if (K + V + k === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  W !== 32 && (he = " ");
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
              K + k + V === 0 && (fe = Fe = 1, he = "\f" + he);
              break;
            case 108:
              if (K + k + V + Te === 0 && 0 < se) switch (te - se) {
                case 2:
                  ne === 112 && P.charCodeAt(te - 3) === 58 && (Te = ne);
                case 8:
                  le === 111 && (Te = le);
              }
              break;
            case 58:
              K + k + V === 0 && (se = te);
              break;
            case 44:
              k + re + K + V === 0 && (fe = 1, he += "\r");
              break;
            case 34:
            case 39:
              k === 0 && (K = K === W ? 0 : K === 0 ? W : K);
              break;
            case 91:
              K + k + re === 0 && V++;
              break;
            case 93:
              K + k + re === 0 && V--;
              break;
            case 41:
              K + k + V === 0 && re--;
              break;
            case 40:
              if (K + k + V === 0) {
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
              k + re + K + V + se + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < K + V + re)) switch (k) {
                case 0:
                  switch (2 * W + 3 * P.charCodeAt(te + 1)) {
                    case 235:
                      k = 47;
                      break;
                    case 220:
                      ue = te, k = 42;
                  }
                  break;
                case 42:
                  W === 47 && ne === 42 && ue + 2 !== te && (P.charCodeAt(ue + 2) === 33 && (oe += P.substring(ue, te + 1)), he = "", k = 0);
              }
          }
          k === 0 && (z += he);
      }
      le = ne, ne = W, te++;
    }
    if (ue = oe.length, 0 < ue) {
      if (fe = A, 0 < ke && (_e = w(2, oe, fe, L, we, pe, ue, F, p, F), _e !== void 0 && (oe = _e).length === 0)) return Je + oe + Ke;
      if (oe = fe.join(",") + "{" + oe + "}", xe * Te !== 0) {
        switch (xe !== 2 || d(oe, 2) || (Te = 0), Te) {
          case 111:
            oe = oe.replace(J, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(Z, "::-webkit-input-$1") + oe.replace(Z, "::-moz-$1") + oe.replace(Z, ":-ms-input-$1") + oe;
        }
        Te = 0;
      }
    }
    return Je + oe + Ke;
  }
  function r(L, A, P) {
    var F = A.trim().split(N);
    A = F;
    var p = F.length, V = L.length;
    switch (V) {
      case 0:
      case 1:
        var k = 0;
        for (L = V === 0 ? "" : L[0] + " "; k < p; ++k)
          A[k] = a(L, A[k], P).trim();
        break;
      default:
        var re = k = 0;
        for (A = []; k < p; ++k)
          for (var K = 0; K < V; ++K)
            A[re++] = a(L[K] + " ", F[k], P).trim();
    }
    return A;
  }
  function a(L, A, P) {
    var F = A.charCodeAt(0);
    switch (33 > F && (F = (A = A.trim()).charCodeAt(0)), F) {
      case 38:
        return A.replace($, "$1" + L.trim());
      case 58:
        return L.trim() + A.replace($, "$1" + L.trim());
      default:
        if (0 < 1 * P && 0 < A.indexOf("\f")) return A.replace($, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + A;
  }
  function u(L, A, P, F) {
    var p = L + ";", V = 2 * A + 3 * P + 4 * F;
    if (V === 944) {
      L = p.indexOf(":", 9) + 1;
      var k = p.substring(L, p.length - 1).trim();
      return k = p.substring(0, L).trim() + k + ";", xe === 1 || xe === 2 && d(k, 1) ? "-webkit-" + k + k : k;
    }
    if (xe === 0 || xe === 2 && !d(p, 1)) return p;
    switch (V) {
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
        if (0 < p.indexOf("image-set(", 11)) return p.replace(Ge, "$1-webkit-$2") + p;
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
        return I.test(p) ? p.replace(Y, ":-webkit-") + p.replace(Y, ":-moz-") + p : p;
      case 1e3:
        switch (k = p.substring(13).trim(), A = k.indexOf("-") + 1, k.charCodeAt(0) + k.charCodeAt(A)) {
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
        switch (A = (p = L).length - 10, k = (p.charCodeAt(A) === 33 ? p.substring(0, A) : p).substring(L.indexOf(":", 7) + 1).trim(), V = k.charCodeAt(0) + (k.charCodeAt(7) | 0)) {
          case 203:
            if (111 > k.charCodeAt(8)) break;
          case 115:
            p = p.replace(k, "-webkit-" + k) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(k, "-webkit-" + (102 < V ? "inline-" : "") + "box") + ";" + p.replace(k, "-webkit-" + k) + ";" + p.replace(k, "-ms-" + k + "box") + ";" + p;
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
        if (ze.test(L) === !0) return (k = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115 ? u(L.replace("stretch", "fill-available"), A, P, F).replace(":fill-available", ":stretch") : p.replace(k, "-webkit-" + k) + p.replace(k, "-moz-" + k.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, P + F === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(x, "$1-webkit-$2") + p;
    }
    return p;
  }
  function d(L, A) {
    var P = L.indexOf(A === 1 ? ":" : "{"), F = L.substring(0, A !== 3 ? P : 10);
    return P = L.substring(P + 1, L.length - 1), De(A !== 2 ? F : F.replace(Oe, "$1"), P, A);
  }
  function y(L, A) {
    var P = u(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return P !== A + ";" ? P.replace(ye, " or ($1)").substring(4) : "(" + A + ")";
  }
  function w(L, A, P, F, p, V, k, re, K, Q) {
    for (var W = 0, ne = A, le; W < ke; ++W)
      switch (le = Ie[W].call(O, L, ne, P, F, p, V, k, re, K, Q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = le;
      }
    if (ne !== A) return ne;
  }
  function b(L) {
    switch (L) {
      case void 0:
      case null:
        ke = Ie.length = 0;
        break;
      default:
        if (typeof L == "function") Ie[ke++] = L;
        else if (typeof L == "object") for (var A = 0, P = L.length; A < P; ++A)
          b(L[A]);
        else Ve = !!L | 0;
    }
    return b;
  }
  function m(L) {
    return L = L.prefix, L !== void 0 && (De = null, L ? typeof L != "function" ? xe = 1 : (xe = 2, De = L) : xe = 0), m;
  }
  function O(L, A) {
    var P = L;
    if (33 > P.charCodeAt(0) && (P = P.trim()), He = P, P = [He], 0 < ke) {
      var F = w(-1, A, P, P, we, pe, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (A = F);
    }
    var p = t(Ye, P, A, 0, 0);
    return 0 < ke && (F = w(-2, p, P, P, we, pe, p.length, 0, 0, 0), F !== void 0 && (p = F)), He = "", Te = 0, pe = we = 1, p;
  }
  var C = /^\0+/g, j = /[\0\r\f]/g, Y = /: */g, I = /zoo|gra/, x = /([,: ])(transform)/g, N = /,\r+?/g, $ = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, Z = /::(place)/g, J = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, de = /\(\s*(.*)\s*\)/g, ye = /([\s\S]*?);/g, Ce = /-self|flex-/g, Oe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ze = /stretch|:\s*\w+\-(?:conte|avail)/, Ge = /([^-])(image-set\()/, pe = 1, we = 1, Te = 0, xe = 1, Ye = [], Ie = [], ke = 0, De = null, Ve = 0, He = "";
  return O.use = b, O.set = m, e !== void 0 && m(e), O;
}
var $u = {
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
var Bu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ba = /* @__PURE__ */ Uu(
  function(e) {
    return Bu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ji = { exports: {} }, Re = {};
var Wa;
function Wu() {
  if (Wa) return Re;
  Wa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, u = e ? Symbol.for("react.strict_mode") : 60108, d = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, w = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, O = e ? Symbol.for("react.forward_ref") : 60112, C = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, Y = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function Z(S) {
    if (typeof S == "object" && S !== null) {
      var de = S.$$typeof;
      switch (de) {
        case t:
          switch (S = S.type, S) {
            case b:
            case m:
            case a:
            case d:
            case u:
            case C:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case w:
                case O:
                case I:
                case Y:
                case y:
                  return S;
                default:
                  return de;
              }
          }
        case r:
          return de;
      }
    }
  }
  function J(S) {
    return Z(S) === m;
  }
  return Re.AsyncMode = b, Re.ConcurrentMode = m, Re.ContextConsumer = w, Re.ContextProvider = y, Re.Element = t, Re.ForwardRef = O, Re.Fragment = a, Re.Lazy = I, Re.Memo = Y, Re.Portal = r, Re.Profiler = d, Re.StrictMode = u, Re.Suspense = C, Re.isAsyncMode = function(S) {
    return J(S) || Z(S) === b;
  }, Re.isConcurrentMode = J, Re.isContextConsumer = function(S) {
    return Z(S) === w;
  }, Re.isContextProvider = function(S) {
    return Z(S) === y;
  }, Re.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Re.isForwardRef = function(S) {
    return Z(S) === O;
  }, Re.isFragment = function(S) {
    return Z(S) === a;
  }, Re.isLazy = function(S) {
    return Z(S) === I;
  }, Re.isMemo = function(S) {
    return Z(S) === Y;
  }, Re.isPortal = function(S) {
    return Z(S) === r;
  }, Re.isProfiler = function(S) {
    return Z(S) === d;
  }, Re.isStrictMode = function(S) {
    return Z(S) === u;
  }, Re.isSuspense = function(S) {
    return Z(S) === C;
  }, Re.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === a || S === m || S === d || S === u || S === C || S === j || typeof S == "object" && S !== null && (S.$$typeof === I || S.$$typeof === Y || S.$$typeof === y || S.$$typeof === w || S.$$typeof === O || S.$$typeof === N || S.$$typeof === $ || S.$$typeof === U || S.$$typeof === x);
  }, Re.typeOf = Z, Re;
}
ji.exports = Wu();
var qu = ji.exports, zo = qu, Vu = {
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
}, Hu = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Gu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, zi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $o = {};
$o[zo.ForwardRef] = Gu;
$o[zo.Memo] = zi;
function qa(e) {
  return zo.isMemo(e) ? zi : $o[e.$$typeof] || Vu;
}
var Yu = Object.defineProperty, Zu = Object.getOwnPropertyNames, Va = Object.getOwnPropertySymbols, Ju = Object.getOwnPropertyDescriptor, Xu = Object.getPrototypeOf, Ha = Object.prototype;
function $i(e, t, r) {
  if (typeof t != "string") {
    if (Ha) {
      var a = Xu(t);
      a && a !== Ha && $i(e, a, r);
    }
    var u = Zu(t);
    Va && (u = u.concat(Va(t)));
    for (var d = qa(e), y = qa(t), w = 0; w < u.length; ++w) {
      var b = u[w];
      if (!Hu[b] && !(r && r[b]) && !(y && y[b]) && !(d && d[b])) {
        var m = Ju(t, b);
        try {
          Yu(e, b, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ku = $i;
const Qu = /* @__PURE__ */ oi(Ku);
var ot = { env: { NODE_ENV: "production" } };
function Vt() {
  return (Vt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }).apply(this, arguments);
}
var Ga = function(e, t) {
  for (var r = [e[0]], a = 0, u = t.length; a < u; a += 1) r.push(t[a], e[a + 1]);
  return r;
}, xo = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Fi.typeOf(e);
}, Dn = Object.freeze([]), nr = Object.freeze({});
function Xr(e) {
  return typeof e == "function";
}
function Ya(e) {
  return e.displayName || e.name || "Component";
}
function Uo(e) {
  return e && typeof e.styledComponentId == "string";
}
var Or = typeof ot < "u" && ot.env !== void 0 && (ot.env.REACT_APP_SC_ATTR || ot.env.SC_ATTR) || "data-styled", Bo = typeof window < "u" && "HTMLElement" in window, ec = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ot < "u" && ot.env !== void 0 && (ot.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ot.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ot.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ot.env.REACT_APP_SC_DISABLE_SPEEDY : ot.env.SC_DISABLE_SPEEDY !== void 0 && ot.env.SC_DISABLE_SPEEDY !== "" ? ot.env.SC_DISABLE_SPEEDY !== "false" && ot.env.SC_DISABLE_SPEEDY : ot.env.NODE_ENV !== "production"));
function en(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var tc = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var a = 0, u = 0; u < r; u++) a += this.groupSizes[u];
    return a;
  }, t.insertRules = function(r, a) {
    if (r >= this.groupSizes.length) {
      for (var u = this.groupSizes, d = u.length, y = d; r >= y; ) (y <<= 1) < 0 && en(16, "" + r);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(u), this.length = y;
      for (var w = d; w < y; w++) this.groupSizes[w] = 0;
    }
    for (var b = this.indexOfGroup(r + 1), m = 0, O = a.length; m < O; m++) this.tag.insertRule(b, a[m]) && (this.groupSizes[r]++, b++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var a = this.groupSizes[r], u = this.indexOfGroup(r), d = u + a;
      this.groupSizes[r] = 0;
      for (var y = u; y < d; y++) this.tag.deleteRule(u);
    }
  }, t.getGroup = function(r) {
    var a = "";
    if (r >= this.length || this.groupSizes[r] === 0) return a;
    for (var u = this.groupSizes[r], d = this.indexOfGroup(r), y = d + u, w = d; w < y; w++) a += this.tag.getRule(w) + `/*!sc*/
`;
    return a;
  }, e;
}(), An = /* @__PURE__ */ new Map(), Fn = /* @__PURE__ */ new Map(), Yr = 1, kn = function(e) {
  if (An.has(e)) return An.get(e);
  for (; Fn.has(Yr); ) Yr++;
  var t = Yr++;
  return An.set(e, t), Fn.set(t, e), t;
}, rc = function(e) {
  return Fn.get(e);
}, nc = function(e, t) {
  t >= Yr && (Yr = t + 1), An.set(e, t), Fn.set(t, e);
}, oc = "style[" + Or + '][data-styled-version="5.3.11"]', ac = new RegExp("^" + Or + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ic = function(e, t, r) {
  for (var a, u = r.split(","), d = 0, y = u.length; d < y; d++) (a = u[d]) && e.registerName(t, a);
}, sc = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), a = [], u = 0, d = r.length; u < d; u++) {
    var y = r[u].trim();
    if (y) {
      var w = y.match(ac);
      if (w) {
        var b = 0 | parseInt(w[1], 10), m = w[2];
        b !== 0 && (nc(m, b), ic(e, m, w[3]), e.getTag().insertRules(b, a)), a.length = 0;
      } else a.push(y);
    }
  }
}, lc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ui = function(e) {
  var t = document.head, r = e || t, a = document.createElement("style"), u = function(w) {
    for (var b = w.childNodes, m = b.length; m >= 0; m--) {
      var O = b[m];
      if (O && O.nodeType === 1 && O.hasAttribute(Or)) return O;
    }
  }(r), d = u !== void 0 ? u.nextSibling : null;
  a.setAttribute(Or, "active"), a.setAttribute("data-styled-version", "5.3.11");
  var y = lc();
  return y && a.setAttribute("nonce", y), r.insertBefore(a, d), a;
}, uc = function() {
  function e(r) {
    var a = this.element = Ui(r);
    a.appendChild(document.createTextNode("")), this.sheet = function(u) {
      if (u.sheet) return u.sheet;
      for (var d = document.styleSheets, y = 0, w = d.length; y < w; y++) {
        var b = d[y];
        if (b.ownerNode === u) return b;
      }
      en(17);
    }(a), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, a) {
    try {
      return this.sheet.insertRule(a, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var a = this.sheet.cssRules[r];
    return a !== void 0 && typeof a.cssText == "string" ? a.cssText : "";
  }, e;
}(), cc = function() {
  function e(r) {
    var a = this.element = Ui(r);
    this.nodes = a.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, a) {
    if (r <= this.length && r >= 0) {
      var u = document.createTextNode(a), d = this.nodes[r];
      return this.element.insertBefore(u, d || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), dc = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, a) {
    return r <= this.length && (this.rules.splice(r, 0, a), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Za = Bo, fc = { isServer: !Bo, useCSSOMInjection: !ec }, Bi = function() {
  function e(r, a, u) {
    r === void 0 && (r = nr), a === void 0 && (a = {}), this.options = Vt({}, fc, {}, r), this.gs = a, this.names = new Map(u), this.server = !!r.isServer, !this.server && Bo && Za && (Za = !1, function(d) {
      for (var y = document.querySelectorAll(oc), w = 0, b = y.length; w < b; w++) {
        var m = y[w];
        m && m.getAttribute(Or) !== "active" && (sc(d, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(r) {
    return kn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, a) {
    return a === void 0 && (a = !0), new e(Vt({}, this.options, {}, r), this.gs, a && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (u = (a = this.options).isServer, d = a.useCSSOMInjection, y = a.target, r = u ? new dc(y) : d ? new uc(y) : new cc(y), new tc(r)));
    var r, a, u, d, y;
  }, t.hasNameForId = function(r, a) {
    return this.names.has(r) && this.names.get(r).has(a);
  }, t.registerName = function(r, a) {
    if (kn(r), this.names.has(r)) this.names.get(r).add(a);
    else {
      var u = /* @__PURE__ */ new Set();
      u.add(a), this.names.set(r, u);
    }
  }, t.insertRules = function(r, a, u) {
    this.registerName(r, a), this.getTag().insertRules(kn(r), u);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(kn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var a = r.getTag(), u = a.length, d = "", y = 0; y < u; y++) {
        var w = rc(y);
        if (w !== void 0) {
          var b = r.names.get(w), m = a.getGroup(y);
          if (b && m && b.size) {
            var O = Or + ".g" + y + '[id="' + w + '"]', C = "";
            b !== void 0 && b.forEach(function(j) {
              j.length > 0 && (C += j + ",");
            }), d += "" + m + O + '{content:"' + C + `"}/*!sc*/
`;
          }
        }
      }
      return d;
    }(this);
  }, e;
}(), pc = /(a)(d)/gi, Ja = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function So(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ja(t % 52) + r;
  return (Ja(t % 52) + r).replace(pc, "$1-$2");
}
var Tr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Wi = function(e) {
  return Tr(5381, e);
};
function hc(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Xr(r) && !Uo(r)) return !1;
  }
  return !0;
}
var gc = Wi("5.3.11"), mc = function() {
  function e(t, r, a) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (a === void 0 || a.isStatic) && hc(t), this.componentId = r, this.baseHash = Tr(gc, r), this.baseStyle = a, Bi.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, a) {
    var u = this.componentId, d = [];
    if (this.baseStyle && d.push(this.baseStyle.generateAndInjectStyles(t, r, a)), this.isStatic && !a.hash) if (this.staticRulesId && r.hasNameForId(u, this.staticRulesId)) d.push(this.staticRulesId);
    else {
      var y = Ir(this.rules, t, r, a).join(""), w = So(Tr(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(u, w)) {
        var b = a(y, "." + w, void 0, u);
        r.insertRules(u, w, b);
      }
      d.push(w), this.staticRulesId = w;
    }
    else {
      for (var m = this.rules.length, O = Tr(this.baseHash, a.hash), C = "", j = 0; j < m; j++) {
        var Y = this.rules[j];
        if (typeof Y == "string") C += Y;
        else if (Y) {
          var I = Ir(Y, t, r, a), x = Array.isArray(I) ? I.join("") : I;
          O = Tr(O, x + j), C += x;
        }
      }
      if (C) {
        var N = So(O >>> 0);
        if (!r.hasNameForId(u, N)) {
          var $ = a(C, "." + N, void 0, u);
          r.insertRules(u, N, $);
        }
        d.push(N);
      }
    }
    return d.join(" ");
  }, e;
}(), yc = /^\s*\/\/.*$/gm, bc = [":", "[", ".", "#"];
function vc(e) {
  var t, r, a, u, d = nr, y = d.options, w = y === void 0 ? nr : y, b = d.plugins, m = b === void 0 ? Dn : b, O = new zu(w), C = [], j = /* @__PURE__ */ function(x) {
    function N($) {
      if ($) try {
        x($ + "}");
      } catch {
      }
    }
    return function($, U, Z, J, S, de, ye, Ce, Oe, ze) {
      switch ($) {
        case 1:
          if (Oe === 0 && U.charCodeAt(0) === 64) return x(U + ";"), "";
          break;
        case 2:
          if (Ce === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Ce) {
            case 102:
            case 112:
              return x(Z[0] + U), "";
            default:
              return U + (ze === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(N);
      }
    };
  }(function(x) {
    C.push(x);
  }), Y = function(x, N, $) {
    return N === 0 && bc.indexOf($[r.length]) !== -1 || $.match(u) ? x : "." + t;
  };
  function I(x, N, $, U) {
    U === void 0 && (U = "&");
    var Z = x.replace(yc, ""), J = N && $ ? $ + " " + N + " { " + Z + " }" : Z;
    return t = U, r = N, a = new RegExp("\\" + r + "\\b", "g"), u = new RegExp("(\\" + r + "\\b){2,}"), O($ || !N ? "" : N, J);
  }
  return O.use([].concat(m, [function(x, N, $) {
    x === 2 && $.length && $[0].lastIndexOf(r) > 0 && ($[0] = $[0].replace(a, Y));
  }, j, function(x) {
    if (x === -2) {
      var N = C;
      return C = [], N;
    }
  }])), I.hash = m.length ? m.reduce(function(x, N) {
    return N.name || en(15), Tr(x, N.name);
  }, 5381).toString() : "", I;
}
var qi = et.createContext();
qi.Consumer;
var Vi = et.createContext(), wc = (Vi.Consumer, new Bi()), ko = vc();
function xc() {
  return or(qi) || wc;
}
function Sc() {
  return or(Vi) || ko;
}
var kc = function() {
  function e(t, r) {
    var a = this;
    this.inject = function(u, d) {
      d === void 0 && (d = ko);
      var y = a.name + d.hash;
      u.hasNameForId(a.id, y) || u.insertRules(a.id, y, d(a.rules, y, "@keyframes"));
    }, this.toString = function() {
      return en(12, String(a.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ko), this.name + t.hash;
  }, e;
}(), Cc = /([A-Z])/, _c = /([A-Z])/g, Tc = /^ms-/, Ec = function(e) {
  return "-" + e.toLowerCase();
};
function Xa(e) {
  return Cc.test(e) ? e.replace(_c, Ec).replace(Tc, "-ms-") : e;
}
var Ka = function(e) {
  return e == null || e === !1 || e === "";
};
function Ir(e, t, r, a) {
  if (Array.isArray(e)) {
    for (var u, d = [], y = 0, w = e.length; y < w; y += 1) (u = Ir(e[y], t, r, a)) !== "" && (Array.isArray(u) ? d.push.apply(d, u) : d.push(u));
    return d;
  }
  if (Ka(e)) return "";
  if (Uo(e)) return "." + e.styledComponentId;
  if (Xr(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t) return e;
    var b = e(t);
    return Ir(b, t, r, a);
  }
  var m;
  return e instanceof kc ? r ? (e.inject(r, a), e.getName(a)) : e : xo(e) ? function O(C, j) {
    var Y, I, x = [];
    for (var N in C) C.hasOwnProperty(N) && !Ka(C[N]) && (Array.isArray(C[N]) && C[N].isCss || Xr(C[N]) ? x.push(Xa(N) + ":", C[N], ";") : xo(C[N]) ? x.push.apply(x, O(C[N], N)) : x.push(Xa(N) + ": " + (Y = N, (I = C[N]) == null || typeof I == "boolean" || I === "" ? "" : typeof I != "number" || I === 0 || Y in $u || Y.startsWith("--") ? String(I).trim() : I + "px") + ";"));
    return j ? [j + " {"].concat(x, ["}"]) : x;
  }(e) : e.toString();
}
var Qa = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ac(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
  return Xr(e) || xo(e) ? Qa(Ir(Ga(Dn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Qa(Ir(Ga(e, r)));
}
var Rc = function(e, t, r) {
  return r === void 0 && (r = nr), e.theme !== r.theme && e.theme || t || r.theme;
}, Oc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ic = /(^-|-$)/g;
function uo(e) {
  return e.replace(Oc, "-").replace(Ic, "");
}
var Nc = function(e) {
  return So(Wi(e) >>> 0);
};
function Cn(e) {
  return typeof e == "string" && ot.env.NODE_ENV === "production";
}
var Co = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Pc = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Lc(e, t, r) {
  var a = e[r];
  Co(t) && Co(a) ? Hi(a, t) : e[r] = t;
}
function Hi(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
  for (var u = 0, d = r; u < d.length; u++) {
    var y = d[u];
    if (Co(y)) for (var w in y) Pc(w) && Lc(e, y[w], w);
  }
  return e;
}
var Gi = et.createContext();
Gi.Consumer;
var co = {};
function Yi(e, t, r) {
  var a = Uo(e), u = !Cn(e), d = t.attrs, y = d === void 0 ? Dn : d, w = t.componentId, b = w === void 0 ? function(U, Z) {
    var J = typeof U != "string" ? "sc" : uo(U);
    co[J] = (co[J] || 0) + 1;
    var S = J + "-" + Nc("5.3.11" + J + co[J]);
    return Z ? Z + "-" + S : S;
  }(t.displayName, t.parentComponentId) : w, m = t.displayName, O = m === void 0 ? function(U) {
    return Cn(U) ? "styled." + U : "Styled(" + Ya(U) + ")";
  }(e) : m, C = t.displayName && t.componentId ? uo(t.displayName) + "-" + t.componentId : t.componentId || b, j = a && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, Y = t.shouldForwardProp;
  a && e.shouldForwardProp && (Y = t.shouldForwardProp ? function(U, Z, J) {
    return e.shouldForwardProp(U, Z, J) && t.shouldForwardProp(U, Z, J);
  } : e.shouldForwardProp);
  var I, x = new mc(r, C, a ? e.componentStyle : void 0), N = x.isStatic && y.length === 0, $ = function(U, Z) {
    return function(J, S, de, ye) {
      var Ce = J.attrs, Oe = J.componentStyle, ze = J.defaultProps, Ge = J.foldedComponentIds, pe = J.shouldForwardProp, we = J.styledComponentId, Te = J.target, xe = function(F, p, V) {
        F === void 0 && (F = nr);
        var k = Vt({}, p, { theme: F }), re = {};
        return V.forEach(function(K) {
          var Q, W, ne, le = K;
          for (Q in Xr(le) && (le = le(k)), le) k[Q] = re[Q] = Q === "className" ? (W = re[Q], ne = le[Q], W && ne ? W + " " + ne : W || ne) : le[Q];
        }), [k, re];
      }(Rc(S, or(Gi), ze) || nr, S, Ce), Ye = xe[0], Ie = xe[1], ke = function(F, p, V, k) {
        var re = xc(), K = Sc(), Q = p ? F.generateAndInjectStyles(nr, re, K) : F.generateAndInjectStyles(V, re, K);
        return Q;
      }(Oe, ye, Ye), De = de, Ve = Ie.$as || S.$as || Ie.as || S.as || Te, He = Cn(Ve), L = Ie !== S ? Vt({}, S, {}, Ie) : S, A = {};
      for (var P in L) P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? A.as = L[P] : (pe ? pe(P, Ba, Ve) : !He || Ba(P)) && (A[P] = L[P]));
      return S.style && Ie.style !== S.style && (A.style = Vt({}, S.style, {}, Ie.style)), A.className = Array.prototype.concat(Ge, we, ke !== we ? ke : null, S.className, Ie.className).filter(Boolean).join(" "), A.ref = De, ri(Ve, A);
    }(I, U, Z, N);
  };
  return $.displayName = O, (I = et.forwardRef($)).attrs = j, I.componentStyle = x, I.displayName = O, I.shouldForwardProp = Y, I.foldedComponentIds = a ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Dn, I.styledComponentId = C, I.target = a ? e.target : e, I.withComponent = function(U) {
    var Z = t.componentId, J = function(de, ye) {
      if (de == null) return {};
      var Ce, Oe, ze = {}, Ge = Object.keys(de);
      for (Oe = 0; Oe < Ge.length; Oe++) Ce = Ge[Oe], ye.indexOf(Ce) >= 0 || (ze[Ce] = de[Ce]);
      return ze;
    }(t, ["componentId"]), S = Z && Z + "-" + (Cn(U) ? U : uo(Ya(U)));
    return Yi(U, Vt({}, J, { attrs: j, componentId: S }), r);
  }, Object.defineProperty(I, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = a ? Hi({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(I, "toString", { value: function() {
    return "." + I.styledComponentId;
  } }), u && Qu(I, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), I;
}
var jn = function(e) {
  return function t(r, a, u) {
    if (u === void 0 && (u = nr), !Fi.isValidElementType(a)) return en(1, String(a));
    var d = function() {
      return r(a, u, Ac.apply(void 0, arguments));
    };
    return d.withConfig = function(y) {
      return t(r, a, Vt({}, u, {}, y));
    }, d.attrs = function(y) {
      return t(r, a, Vt({}, u, { attrs: Array.prototype.concat(u.attrs, y).filter(Boolean) }));
    }, d;
  }(Yi, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  jn[e] = jn(e);
});
const Mc = jn.ul`
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
`, Dc = () => {
  const { feeds: e } = or(Mo);
  return /* @__PURE__ */ mt.jsx(Mc, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ mt.jsx("li", { children: /* @__PURE__ */ mt.jsx(
    Wt,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${Mn(t.startDate, "COMPLETE")} <br /> ${Mi(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${Mn(
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
}, Zi = ({ header: e, ctaButton: t, dataSource: r, maxItems: a }) => (Zr(() => {
  typeof window < "u" && ii({
    packageName: "component-events",
    component: "CardsGridEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: t,
      dataSource: r,
      maxItems: a
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ mt.jsx(jo, { header: e, ctaButton: t, dataSource: r, maxItems: a, children: /* @__PURE__ */ mt.jsx(Dc, {}) }));
Zi.propTypes = Li;
const Fc = jn.ul`
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
`, jc = () => {
  const { feeds: e } = or(Mo);
  return /* @__PURE__ */ mt.jsx(Fc, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ mt.jsx("li", { children: /* @__PURE__ */ mt.jsx(
    Wt,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${Mn(t.startDate, "COMPLETE")} <br /> ${Mi(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${Mn(
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
}, Ji = ({ header: e, ctaButton: t, dataSource: r, maxItems: a }) => (Zr(() => {
  typeof window < "u" && ii({
    packageName: "component-events",
    component: "CardsListEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: t,
      dataSource: r,
      maxItems: a
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ mt.jsx(jo, { header: e, ctaButton: t, dataSource: r, maxItems: a, children: /* @__PURE__ */ mt.jsx(jc, {}) }));
Ji.propTypes = Li;
var Xi, ei = ni;
Xi = ei.createRoot, ei.hydrateRoot;
const Ki = (e, t, r) => {
  Xi(r).render(et.createElement(e, t));
}, Uc = ({ targetSelector: e, props: t }) => {
  Ki(Zi, t, document.querySelector(e));
}, Bc = ({ targetSelector: e, props: t }) => {
  Ki(Ji, t, document.querySelector(e));
};
export {
  Zi as CardsGridEvents,
  Ji as CardsListEvents,
  Uc as initCardsGridEventsComponent,
  Bc as initCardsListEventsComponent
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
