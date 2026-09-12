import ht, { forwardRef as rn, createContext as ow, useState as Vo, useRef as th, useId as g1, useCallback as Ob, useEffect as gi, Children as y1, isValidElement as b1, createElement as v1, useContext as tv } from "react";
import S1 from "react-dom";
function uw(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Fy = { exports: {} }, hm = {};
var Sv;
function sw() {
  if (Sv) return hm;
  Sv = 1;
  var r = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function s(f, c, p) {
    var g = null;
    if (p !== void 0 && (g = "" + p), c.key !== void 0 && (g = "" + c.key), "key" in c) {
      p = {};
      for (var T in c)
        T !== "key" && (p[T] = c[T]);
    } else p = c;
    return c = p.ref, {
      $$typeof: r,
      type: f,
      key: g,
      ref: c !== void 0 ? c : null,
      props: p
    };
  }
  return hm.Fragment = o, hm.jsx = s, hm.jsxs = s, hm;
}
var wv;
function cw() {
  return wv || (wv = 1, Fy.exports = sw()), Fy.exports;
}
var yn = cw();
function nv(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Tv = { exports: {} }, gm = {}, kv;
function fw() {
  if (kv) return gm;
  kv = 1;
  var r = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function s(f, c, p) {
    var g = null;
    if (p !== void 0 && (g = "" + p), c.key !== void 0 && (g = "" + c.key), "key" in c) {
      p = {};
      for (var T in c)
        T !== "key" && (p[T] = c[T]);
    } else p = c;
    return c = p.ref, {
      $$typeof: r,
      type: f,
      key: g,
      ref: c !== void 0 ? c : null,
      props: p
    };
  }
  return gm.Fragment = o, gm.jsx = s, gm.jsxs = s, gm;
}
var Ev;
function dw() {
  return Ev || (Ev = 1, Tv.exports = fw()), Tv.exports;
}
var B = dw(), xv = { exports: {} }, Xy, _v;
function pw() {
  if (_v) return Xy;
  _v = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xy = r, Xy;
}
var Iy, Av;
function mw() {
  if (Av) return Iy;
  Av = 1;
  var r = /* @__PURE__ */ pw();
  function o() {
  }
  function s() {
  }
  return s.resetWarningCache = o, Iy = function() {
    function f(g, T, S, k, C, O) {
      if (O !== r) {
        var R = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw R.name = "Invariant Violation", R;
      }
    }
    f.isRequired = f;
    function c() {
      return f;
    }
    var p = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: c,
      element: f,
      elementType: f,
      instanceOf: c,
      node: f,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: s,
      resetWarningCache: o
    };
    return p.PropTypes = p, p;
  }, Iy;
}
var zv;
function hw() {
  return zv || (zv = 1, xv.exports = /* @__PURE__ */ mw()()), xv.exports;
}
var gw = /* @__PURE__ */ hw();
const h = /* @__PURE__ */ nv(gw), yw = () => {
  const [r, o] = Vo(null), [s, f] = Vo(!1), [c, p] = Vo(null), [g, T] = Vo("");
  return gi(() => {
    g && (() => {
      p(null), f(!0);
      try {
        fetch(g).then((S) => S.json()).then((S) => {
          o(S), f(!1);
        }).catch((S) => {
          p(S), f(!1);
        });
      } catch (S) {
        p(S);
      }
    })();
  }, [g]), [{ data: r, loading: s, error: c }, T];
}, bw = (r) => (r || []).join(" ");
function Nv(r, o) {
  (o == null || o > r.length) && (o = r.length);
  for (var s = 0, f = Array(o); s < o; s++) f[s] = r[s];
  return f;
}
function vw(r) {
  if (Array.isArray(r)) return r;
}
function Sw(r, o) {
  var s = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (s != null) {
    var f, c, p, g, T = [], S = !0, k = !1;
    try {
      if (p = (s = s.call(r)).next, o !== 0) for (; !(S = (f = p.call(s)).done) && (T.push(f.value), T.length !== o); S = !0) ;
    } catch (C) {
      k = !0, c = C;
    } finally {
      try {
        if (!S && s.return != null && (g = s.return(), Object(g) !== g)) return;
      } finally {
        if (k) throw c;
      }
    }
    return T;
  }
}
function ww() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tw(r, o) {
  return vw(r) || Sw(r, o) || kw(r, o) || ww();
}
function kw(r, o) {
  if (r) {
    if (typeof r == "string") return Nv(r, o);
    var s = {}.toString.call(r).slice(8, -1);
    return s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set" ? Array.from(r) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? Nv(r, o) : void 0;
  }
}
const w1 = Object.entries, Ov = Object.setPrototypeOf, Ew = Object.isFrozen, xw = Object.getPrototypeOf, _w = Object.getOwnPropertyDescriptor;
let Ga = Object.freeze, Fa = Object.seal, xc = Object.create, T1 = typeof Reflect < "u" && Reflect, Cb = T1.apply, Rb = T1.construct;
Ga || (Ga = function(r) {
  return r;
});
Fa || (Fa = function(r) {
  return r;
});
Cb || (Cb = function(r, o) {
  for (var s = arguments.length, f = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++)
    f[c - 2] = arguments[c];
  return r.apply(o, f);
});
Rb || (Rb = function(r) {
  for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++)
    s[f - 1] = arguments[f];
  return new r(...s);
});
const ym = Cn(Array.prototype.forEach), Aw = Cn(Array.prototype.lastIndexOf), Cv = Cn(Array.prototype.pop), wc = Cn(Array.prototype.push), zw = Cn(Array.prototype.splice), $o = Array.isArray, Am = Cn(String.prototype.toLowerCase), Qy = Cn(String.prototype.toString), Rv = Cn(String.prototype.match), bm = Cn(String.prototype.replace), Dv = Cn(String.prototype.indexOf), Nw = Cn(String.prototype.trim), Ow = Cn(Number.prototype.toString), Cw = Cn(Boolean.prototype.toString), Mv = typeof BigInt > "u" ? null : Cn(BigInt.prototype.toString), Lv = typeof Symbol > "u" ? null : Cn(Symbol.prototype.toString), la = Cn(Object.prototype.hasOwnProperty), vm = Cn(Object.prototype.toString), qa = Cn(RegExp.prototype.test), lc = Rw(TypeError);
function Cn(r) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
      f[c - 1] = arguments[c];
    return Cb(r, o, f);
  };
}
function Rw(r) {
  return function() {
    for (var o = arguments.length, s = new Array(o), f = 0; f < o; f++)
      s[f] = arguments[f];
    return Rb(r, s);
  };
}
function ft(r, o) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Am;
  if (Ov && Ov(r, null), !$o(o))
    return r;
  let f = o.length;
  for (; f--; ) {
    let c = o[f];
    if (typeof c == "string") {
      const p = s(c);
      p !== c && (Ew(o) || (o[f] = p), c = p);
    }
    r[c] = !0;
  }
  return r;
}
function Dw(r) {
  for (let o = 0; o < r.length; o++)
    la(r, o) || (r[o] = null);
  return r;
}
function vl(r) {
  const o = xc(null);
  for (const f of w1(r)) {
    var s = Tw(f, 2);
    const c = s[0], p = s[1];
    la(r, c) && ($o(p) ? o[c] = Dw(p) : p && typeof p == "object" && p.constructor === Object ? o[c] = vl(p) : o[c] = p);
  }
  return o;
}
function Mw(r) {
  switch (typeof r) {
    case "string":
      return r;
    case "number":
      return Ow(r);
    case "boolean":
      return Cw(r);
    case "bigint":
      return Mv ? Mv(r) : "0";
    case "symbol":
      return Lv ? Lv(r) : "Symbol()";
    case "undefined":
      return vm(r);
    case "function":
    case "object": {
      if (r === null)
        return vm(r);
      const o = r, s = vi(o, "toString");
      if (typeof s == "function") {
        const f = s(o);
        return typeof f == "string" ? f : vm(f);
      }
      return vm(r);
    }
    default:
      return vm(r);
  }
}
function vi(r, o) {
  for (; r !== null; ) {
    const f = _w(r, o);
    if (f) {
      if (f.get)
        return Cn(f.get);
      if (typeof f.value == "function")
        return Cn(f.value);
    }
    r = xw(r);
  }
  function s() {
    return null;
  }
  return s;
}
function Lw(r) {
  try {
    return qa(r, ""), !0;
  } catch {
    return !1;
  }
}
const jv = Ga(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), $y = Ga(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Py = Ga(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), jw = Ga(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ky = Ga(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Uw = Ga(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Uv = Ga(["#text"]), Hv = Ga(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Zy = Ga(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Bv = Ga(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Fm = Ga(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Hw = Fa(/{{[\w\W]*|^[\w\W]*}}/g), Bw = Fa(/<%[\w\W]*|^[\w\W]*%>/g), qw = Fa(/\${[\w\W]*/g), Vw = Fa(/^data-[\-\w.\u00B7-\uFFFF]+$/), Gw = Fa(/^aria-[\-\w]+$/), qv = Fa(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Yw = Fa(/^(?:\w+script|data):/i), Fw = Fa(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Xw = Fa(/^html$/i), Iw = Fa(/^[a-z][.\w]*(-[.\w]+)+$/i), Vv = Fa(/<[/\w!]/g), Qw = Fa(/<[/\w]/g), $w = Fa(/<\/no(script|embed|frames)/i), Pw = Fa(/\/>/i), yi = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, Kw = function() {
  return typeof window > "u" ? null : window;
}, Zw = function(r, o) {
  if (typeof r != "object" || typeof r.createPolicy != "function")
    return null;
  let s = null;
  const f = "data-tt-policy-suffix";
  o && o.hasAttribute(f) && (s = o.getAttribute(f));
  const c = "dompurify" + (s ? "#" + s : "");
  try {
    return r.createPolicy(c, {
      createHTML(p) {
        return p;
      },
      createScriptURL(p) {
        return p;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + c + " could not be created."), null;
  }
}, Gv = function() {
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
}, Fo = function(r, o, s, f) {
  return la(r, o) && $o(r[o]) ? ft(f.base ? vl(f.base) : {}, r[o], f.transform) : s;
};
function k1() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Kw();
  const o = (v) => k1(v);
  if (o.version = "3.4.11", o.removed = [], !r || !r.document || r.document.nodeType !== yi.document || !r.Element)
    return o.isSupported = !1, o;
  let s = r.document;
  const f = s, c = f.currentScript;
  r.DocumentFragment;
  const p = r.HTMLTemplateElement, g = r.Node, T = r.Element, S = r.NodeFilter;
  r.NamedNodeMap === void 0 && (r.NamedNodeMap || r.MozNamedAttrMap), r.HTMLFormElement;
  const C = r.DOMParser, O = r.trustedTypes, R = T.prototype, $ = vi(R, "cloneNode"), j = vi(R, "remove"), V = vi(R, "nextSibling"), I = vi(R, "childNodes"), P = vi(R, "parentNode"), H = vi(R, "shadowRoot"), ce = vi(R, "attributes"), J = g && g.prototype ? vi(g.prototype, "nodeType") : null, ne = g && g.prototype ? vi(g.prototype, "nodeName") : null;
  if (typeof p == "function") {
    const v = s.createElement("template");
    v.content && v.content.ownerDocument && (s = v.content.ownerDocument);
  }
  let Y, F = "", ee, Ee = !1, He = 0;
  const qe = function() {
    if (He > 0)
      throw lc('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Be = function(v) {
    qe(), He++;
    try {
      return Y.createHTML(v);
    } finally {
      He--;
    }
  }, Ae = function(v) {
    qe(), He++;
    try {
      return Y.createScriptURL(v);
    } finally {
      He--;
    }
  }, yt = function() {
    return Ee || (ee = Zw(O, c), Ee = !0), ee;
  }, Qe = s, U = Qe.implementation, L = Qe.createNodeIterator, G = Qe.createDocumentFragment, re = Qe.getElementsByTagName, se = f.importNode;
  let ie = Gv();
  o.isSupported = typeof w1 == "function" && typeof P == "function" && U && U.createHTMLDocument !== void 0;
  const we = Hw, ue = Bw, Z = qw, ye = Vw, bt = Gw, tt = Yw, fn = Fw, dn = Iw;
  let nt = qv, Re = null;
  const Qa = ft({}, [...jv, ...$y, ...Py, ...Ky, ...Uv]);
  let De = null;
  const dr = ft({}, [...Hv, ...Zy, ...Bv, ...Fm]);
  let ke = Object.seal(xc(null, {
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
  })), Dn = null, wl = null;
  const bn = Object.seal(xc(null, {
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
  let pr = !0, $a = !0, Tl = !1, kl = !0, vn = !1, Pa = !0, Ye = !1, mr = !1, El = null, xl = null, ia = !1, oa = !1, Ka = !1, _l = !1, ki = !0, ua = !1;
  const pt = "user-content-";
  let It = !0, rt = !1, sa = {}, Qt = null;
  const hr = ft({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let Za = null;
  const Wa = ft({}, ["audio", "video", "img", "source", "image", "track"]);
  let ca = null;
  const Sn = ft({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Mn = "http://www.w3.org/1998/Math/MathML", wn = "http://www.w3.org/2000/svg", $t = "http://www.w3.org/1999/xhtml";
  let Ln = $t, Ja = !1, jn = null;
  const Jo = ft({}, [Mn, wn, $t], Qy), gr = Ga(["mi", "mo", "mn", "ms", "mtext"]);
  let Al = ft({}, gr);
  const yr = Ga(["annotation-xml"]);
  let el = ft({}, yr);
  const br = ft({}, ["title", "style", "font", "a", "script"]);
  let fa = null;
  const Ei = ["application/xhtml+xml", "text/html"], Tn = "text/html";
  let oe = null, Fe = null;
  const da = s.createElement("form"), zl = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, vr = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Fe && Fe === v)
      return;
    (!v || typeof v != "object") && (v = {}), v = vl(v), fa = // eslint-disable-next-line unicorn/prefer-includes
    Ei.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? Tn : v.PARSER_MEDIA_TYPE, oe = fa === "application/xhtml+xml" ? Qy : Am, Re = Fo(v, "ALLOWED_TAGS", Qa, {
      transform: oe
    }), De = Fo(v, "ALLOWED_ATTR", dr, {
      transform: oe
    }), jn = Fo(v, "ALLOWED_NAMESPACES", Jo, {
      transform: Qy
    }), ca = Fo(v, "ADD_URI_SAFE_ATTR", Sn, {
      transform: oe,
      base: Sn
    }), Za = Fo(v, "ADD_DATA_URI_TAGS", Wa, {
      transform: oe,
      base: Wa
    }), Qt = Fo(v, "FORBID_CONTENTS", hr, {
      transform: oe
    }), Dn = Fo(v, "FORBID_TAGS", vl({}), {
      transform: oe
    }), wl = Fo(v, "FORBID_ATTR", vl({}), {
      transform: oe
    }), sa = la(v, "USE_PROFILES") ? v.USE_PROFILES && typeof v.USE_PROFILES == "object" ? vl(v.USE_PROFILES) : v.USE_PROFILES : !1, pr = v.ALLOW_ARIA_ATTR !== !1, $a = v.ALLOW_DATA_ATTR !== !1, Tl = v.ALLOW_UNKNOWN_PROTOCOLS || !1, kl = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, vn = v.SAFE_FOR_TEMPLATES || !1, Pa = v.SAFE_FOR_XML !== !1, Ye = v.WHOLE_DOCUMENT || !1, oa = v.RETURN_DOM || !1, Ka = v.RETURN_DOM_FRAGMENT || !1, _l = v.RETURN_TRUSTED_TYPE || !1, ia = v.FORCE_BODY || !1, ki = v.SANITIZE_DOM !== !1, ua = v.SANITIZE_NAMED_PROPS || !1, It = v.KEEP_CONTENT !== !1, rt = v.IN_PLACE || !1, nt = Lw(v.ALLOWED_URI_REGEXP) ? v.ALLOWED_URI_REGEXP : qv, Ln = typeof v.NAMESPACE == "string" ? v.NAMESPACE : $t, Al = la(v, "MATHML_TEXT_INTEGRATION_POINTS") && v.MATHML_TEXT_INTEGRATION_POINTS && typeof v.MATHML_TEXT_INTEGRATION_POINTS == "object" ? vl(v.MATHML_TEXT_INTEGRATION_POINTS) : ft({}, gr), el = la(v, "HTML_INTEGRATION_POINTS") && v.HTML_INTEGRATION_POINTS && typeof v.HTML_INTEGRATION_POINTS == "object" ? vl(v.HTML_INTEGRATION_POINTS) : ft({}, yr);
    const y = la(v, "CUSTOM_ELEMENT_HANDLING") && v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING == "object" ? vl(v.CUSTOM_ELEMENT_HANDLING) : xc(null);
    if (ke = xc(null), la(y, "tagNameCheck") && zl(y.tagNameCheck) && (ke.tagNameCheck = y.tagNameCheck), la(y, "attributeNameCheck") && zl(y.attributeNameCheck) && (ke.attributeNameCheck = y.attributeNameCheck), la(y, "allowCustomizedBuiltInElements") && typeof y.allowCustomizedBuiltInElements == "boolean" && (ke.allowCustomizedBuiltInElements = y.allowCustomizedBuiltInElements), Fa(ke), vn && ($a = !1), Ka && (oa = !0), sa && (Re = ft({}, Uv), De = xc(null), sa.html === !0 && (ft(Re, jv), ft(De, Hv)), sa.svg === !0 && (ft(Re, $y), ft(De, Zy), ft(De, Fm)), sa.svgFilters === !0 && (ft(Re, Py), ft(De, Zy), ft(De, Fm)), sa.mathMl === !0 && (ft(Re, Ky), ft(De, Bv), ft(De, Fm))), bn.tagCheck = null, bn.attributeCheck = null, la(v, "ADD_TAGS") && (typeof v.ADD_TAGS == "function" ? bn.tagCheck = v.ADD_TAGS : $o(v.ADD_TAGS) && (Re === Qa && (Re = vl(Re)), ft(Re, v.ADD_TAGS, oe))), la(v, "ADD_ATTR") && (typeof v.ADD_ATTR == "function" ? bn.attributeCheck = v.ADD_ATTR : $o(v.ADD_ATTR) && (De === dr && (De = vl(De)), ft(De, v.ADD_ATTR, oe))), la(v, "ADD_URI_SAFE_ATTR") && $o(v.ADD_URI_SAFE_ATTR) && ft(ca, v.ADD_URI_SAFE_ATTR, oe), la(v, "FORBID_CONTENTS") && $o(v.FORBID_CONTENTS) && (Qt === hr && (Qt = vl(Qt)), ft(Qt, v.FORBID_CONTENTS, oe)), la(v, "ADD_FORBID_CONTENTS") && $o(v.ADD_FORBID_CONTENTS) && (Qt === hr && (Qt = vl(Qt)), ft(Qt, v.ADD_FORBID_CONTENTS, oe)), It && (Re["#text"] = !0), Ye && ft(Re, ["html", "head", "body"]), Re.table && (ft(Re, ["tbody"]), delete Dn.tbody), v.TRUSTED_TYPES_POLICY) {
      if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw lc('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw lc('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const z = Y;
      Y = v.TRUSTED_TYPES_POLICY;
      try {
        F = Be("");
      } catch (q) {
        throw Y = z, q;
      }
    } else v.TRUSTED_TYPES_POLICY === null ? (Y = void 0, F = "") : (Y === void 0 && (Y = yt()), Y && typeof F == "string" && (F = Be("")));
    Ga && Ga(v), Fe = v;
  }, xi = ft({}, [...$y, ...Py, ...jw]), Sr = ft({}, [...Ky, ...Uw]), tl = function(v, y, z) {
    return y.namespaceURI === $t ? v === "svg" : y.namespaceURI === Mn ? v === "svg" && (z === "annotation-xml" || Al[z]) : !!xi[v];
  }, wr = function(v, y, z) {
    return y.namespaceURI === $t ? v === "math" : y.namespaceURI === wn ? v === "math" && el[z] : !!Sr[v];
  }, pa = function(v, y, z) {
    return y.namespaceURI === wn && !el[z] || y.namespaceURI === Mn && !Al[z] ? !1 : !Sr[v] && (br[v] || !xi[v]);
  }, ma = function(v) {
    let y = P(v);
    (!y || !y.tagName) && (y = {
      namespaceURI: Ln,
      tagName: "template"
    });
    const z = Am(v.tagName), q = Am(y.tagName);
    return jn[v.namespaceURI] ? v.namespaceURI === wn ? tl(z, y, q) : v.namespaceURI === Mn ? wr(z, y, q) : v.namespaceURI === $t ? pa(z, y, q) : !!(fa === "application/xhtml+xml" && jn[v.namespaceURI]) : !1;
  }, Dt = function(v) {
    wc(o.removed, {
      element: v
    });
    try {
      P(v).removeChild(v);
    } catch {
      if (j(v), !P(v))
        throw lc("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Un = function(v) {
    const y = I(v);
    if (y) {
      const q = [];
      ym(y, (K) => {
        wc(q, K);
      }), ym(q, (K) => {
        try {
          j(K);
        } catch {
        }
      });
    }
    const z = ce(v);
    if (z)
      for (let q = z.length - 1; q >= 0; --q) {
        const K = z[q], he = K && K.name;
        if (typeof he == "string")
          try {
            v.removeAttribute(he);
          } catch {
          }
      }
  }, Me = function(v, y) {
    try {
      wc(o.removed, {
        attribute: y.getAttributeNode(v),
        from: y
      });
    } catch {
      wc(o.removed, {
        attribute: null,
        from: y
      });
    }
    if (y.removeAttribute(v), v === "is")
      if (oa || Ka)
        try {
          Dt(y);
        } catch {
        }
      else
        try {
          y.setAttribute(v, "");
        } catch {
        }
  }, _i = function(v) {
    const y = ce(v);
    if (y)
      for (let z = y.length - 1; z >= 0; --z) {
        const q = y[z], K = q && q.name;
        if (!(typeof K != "string" || De[oe(K)]))
          try {
            v.removeAttribute(K);
          } catch {
          }
      }
  }, Ai = function(v) {
    const y = [v];
    for (; y.length > 0; ) {
      const z = y.pop();
      (J ? J(z) : z.nodeType) === yi.element && _i(z);
      const q = I(z);
      if (q)
        for (let K = q.length - 1; K >= 0; --K)
          y.push(q[K]);
    }
  }, kn = function(v) {
    let y = null, z = null;
    if (ia)
      v = "<remove></remove>" + v;
    else {
      const he = Rv(v, /^[\r\n\t ]+/);
      z = he && he[0];
    }
    fa === "application/xhtml+xml" && Ln === $t && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const q = Y ? Be(v) : v;
    if (Ln === $t)
      try {
        y = new C().parseFromString(q, fa);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = U.createDocument(Ln, "template", null);
      try {
        y.documentElement.innerHTML = Ja ? F : q;
      } catch {
      }
    }
    const K = y.body || y.documentElement;
    return v && z && K.insertBefore(s.createTextNode(z), K.childNodes[0] || null), Ln === $t ? re.call(y, Ye ? "html" : "body")[0] : Ye ? y.documentElement : K;
  }, Hn = function(v) {
    return L.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      S.SHOW_ELEMENT | S.SHOW_COMMENT | S.SHOW_TEXT | S.SHOW_PROCESSING_INSTRUCTION | S.SHOW_CDATA_SECTION,
      null
    );
  }, Nl = function(v) {
    return v = bm(v, we, " "), v = bm(v, ue, " "), v = bm(v, Z, " "), v;
  }, Ol = function(v) {
    var y;
    v.normalize();
    const z = L.call(
      v.ownerDocument || v,
      v,
      // eslint-disable-next-line no-bitwise
      S.SHOW_TEXT | S.SHOW_COMMENT | S.SHOW_CDATA_SECTION | S.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let q = z.nextNode();
    for (; q; )
      q.data = Nl(q.data), q = z.nextNode();
    const K = (y = v.querySelectorAll) === null || y === void 0 ? void 0 : y.call(v, "template");
    K && ym(K, (he) => {
      ha(he.content) && Ol(he.content);
    });
  }, nl = function(v) {
    const y = ne ? ne(v) : null;
    return typeof y != "string" || oe(y) !== "form" ? !1 : typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    v.attributes !== ce(v) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    v.nodeType !== J(v) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    v.childNodes !== I(v);
  }, ha = function(v) {
    if (!J || typeof v != "object" || v === null)
      return !1;
    try {
      return J(v) === yi.documentFragment;
    } catch {
      return !1;
    }
  }, En = function(v) {
    if (!J || typeof v != "object" || v === null)
      return !1;
    try {
      return typeof J(v) == "number";
    } catch {
      return !1;
    }
  };
  function Et(v, y, z) {
    v.length !== 0 && ym(v, (q) => {
      q.call(o, y, z, Fe);
    });
  }
  const pn = function(v, y) {
    return !!(Pa && v.hasChildNodes() && !En(v.firstElementChild) && qa(Vv, v.textContent) && qa(Vv, v.innerHTML) || Pa && v.namespaceURI === $t && y === "style" && En(v.firstElementChild) || v.nodeType === yi.processingInstruction || Pa && v.nodeType === yi.comment && qa(Qw, v.data));
  }, xt = function(v, y) {
    if (!Dn[y] && Er(y) && (ke.tagNameCheck instanceof RegExp && qa(ke.tagNameCheck, y) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(y)))
      return !1;
    if (It && !Qt[y]) {
      const z = P(v), q = I(v);
      if (q && z) {
        const K = q.length;
        for (let he = K - 1; he >= 0; --he) {
          const be = rt ? q[he] : $(q[he], !0);
          z.insertBefore(be, V(v));
        }
      }
    }
    return Dt(v), !0;
  }, Tr = function(v) {
    if (Et(ie.beforeSanitizeElements, v, null), nl(v))
      return Dt(v), !0;
    const y = oe(ne ? ne(v) : v.nodeName);
    if (Et(ie.uponSanitizeElement, v, {
      tagName: y,
      allowedTags: Re
    }), pn(v, y))
      return Dt(v), !0;
    if (Dn[y] || !(bn.tagCheck instanceof Function && bn.tagCheck(y)) && !Re[y])
      return xt(v, y);
    if ((J ? J(v) : v.nodeType) === yi.element && !ma(v) || (y === "noscript" || y === "noembed" || y === "noframes") && qa($w, v.innerHTML))
      return Dt(v), !0;
    if (vn && v.nodeType === yi.text) {
      const z = Nl(v.textContent);
      v.textContent !== z && (wc(o.removed, {
        element: v.cloneNode()
      }), v.textContent = z);
    }
    return Et(ie.afterSanitizeElements, v, null), !1;
  }, zi = function(v, y, z) {
    if (wl[y] || ki && (y === "id" || y === "name") && (z in s || z in da))
      return !1;
    const q = De[y] || bn.attributeCheck instanceof Function && bn.attributeCheck(y, v);
    if (!($a && qa(ye, y)) && !(pr && qa(bt, y))) {
      if (q) {
        if (!ca[y] && !qa(nt, bm(z, fn, "")) && !((y === "src" || y === "xlink:href" || y === "href") && v !== "script" && Dv(z, "data:") === 0 && Za[v]) && !(Tl && !qa(tt, bm(z, fn, ""))) && z)
          return !1;
      } else if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        !(Er(v) && (ke.tagNameCheck instanceof RegExp && qa(ke.tagNameCheck, v) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(v)) && (ke.attributeNameCheck instanceof RegExp && qa(ke.attributeNameCheck, y) || ke.attributeNameCheck instanceof Function && ke.attributeNameCheck(y, v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        y === "is" && ke.allowCustomizedBuiltInElements && (ke.tagNameCheck instanceof RegExp && qa(ke.tagNameCheck, z) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(z)))
      ) return !1;
    }
    return !0;
  }, kr = ft({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Er = function(v) {
    return !kr[Am(v)] && qa(dn, v);
  }, Cl = function(v, y, z, q) {
    if (Y && typeof O == "object" && typeof O.getAttributeType == "function" && !z)
      switch (O.getAttributeType(v, y)) {
        case "TrustedHTML":
          return Be(q);
        case "TrustedScriptURL":
          return Ae(q);
      }
    return q;
  }, eu = function(v, y, z, q) {
    try {
      z ? v.setAttributeNS(z, y, q) : v.setAttribute(y, q), nl(v) ? Dt(v) : Cv(o.removed);
    } catch {
      Me(y, v);
    }
  }, kt = function(v) {
    Et(ie.beforeSanitizeAttributes, v, null);
    const y = v.attributes;
    if (!y || nl(v))
      return;
    const z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: De,
      forceKeepAttr: void 0
    };
    let q = y.length;
    const K = oe(v.nodeName);
    for (; q--; ) {
      const he = y[q], be = he.name, mt = he.namespaceURI, at = he.value, vt = oe(be), on = at;
      let _t = be === "value" ? on : Nw(on);
      if (z.attrName = vt, z.attrValue = _t, z.keepAttr = !0, z.forceKeepAttr = void 0, Et(ie.uponSanitizeAttribute, v, z), _t = z.attrValue, ua && (vt === "id" || vt === "name") && Dv(_t, pt) !== 0 && (Me(be, v), _t = pt + _t), Pa && qa(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, _t)) {
        Me(be, v);
        continue;
      }
      if (vt === "attributename" && Rv(_t, "href")) {
        Me(be, v);
        continue;
      }
      if (!z.forceKeepAttr) {
        if (!z.keepAttr) {
          Me(be, v);
          continue;
        }
        if (!kl && qa(Pw, _t)) {
          Me(be, v);
          continue;
        }
        if (vn && (_t = Nl(_t)), !zi(K, vt, _t)) {
          Me(be, v);
          continue;
        }
        _t = Cl(K, vt, mt, _t), _t !== on && eu(v, be, mt, _t);
      }
    }
    Et(ie.afterSanitizeAttributes, v, null);
  }, ga = function(v) {
    let y = null;
    const z = Hn(v);
    for (Et(ie.beforeSanitizeShadowDOM, v, null); y = z.nextNode(); )
      if (Et(ie.uponSanitizeShadowNode, y, null), Tr(y), kt(y), ha(y.content) && ga(y.content), (J ? J(y) : y.nodeType) === yi.element) {
        const q = H(y);
        ha(q) && (Rl(q), ga(q));
      }
    Et(ie.afterSanitizeShadowDOM, v, null);
  }, Rl = function(v) {
    const y = [{
      node: v,
      shadow: null
    }];
    for (; y.length > 0; ) {
      const z = y.pop();
      if (z.shadow) {
        ga(z.shadow);
        continue;
      }
      const q = z.node, K = (J ? J(q) : q.nodeType) === yi.element, he = I(q);
      if (he)
        for (let be = he.length - 1; be >= 0; --be)
          y.push({
            node: he[be],
            shadow: null
          });
      if (K) {
        const be = ne ? ne(q) : null;
        if (typeof be == "string" && oe(be) === "template") {
          const mt = q.content;
          ha(mt) && y.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (K) {
        const be = H(q);
        ha(be) && y.push({
          node: null,
          shadow: be
        }, {
          node: be,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(v) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, q = null, K = null, he = null;
    if (Ja = !v, Ja && (v = "<!-->"), typeof v != "string" && !En(v) && (v = Mw(v), typeof v != "string"))
      throw lc("dirty is not a string, aborting");
    if (!o.isSupported)
      return v;
    mr ? (Re = El, De = xl) : vr(y), (ie.uponSanitizeElement.length > 0 || ie.uponSanitizeAttribute.length > 0) && (Re = vl(Re)), ie.uponSanitizeAttribute.length > 0 && (De = vl(De)), o.removed = [];
    const be = rt && typeof v != "string" && En(v);
    if (be) {
      const vt = ne ? ne(v) : v.nodeName;
      if (typeof vt == "string") {
        const on = oe(vt);
        if (!Re[on] || Dn[on])
          throw lc("root node is forbidden and cannot be sanitized in-place");
      }
      if (nl(v))
        throw lc("root node is clobbered and cannot be sanitized in-place");
      try {
        Rl(v);
      } catch (on) {
        throw Un(v), on;
      }
    } else if (En(v))
      z = kn("<!---->"), q = z.ownerDocument.importNode(v, !0), q.nodeType === yi.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? z = q : z.appendChild(q), Rl(q);
    else {
      if (!oa && !vn && !Ye && // eslint-disable-next-line unicorn/prefer-includes
      v.indexOf("<") === -1)
        return Y && _l ? Be(v) : v;
      if (z = kn(v), !z)
        return oa ? null : _l ? F : "";
    }
    z && ia && Dt(z.firstChild);
    const mt = Hn(be ? v : z);
    try {
      for (; K = mt.nextNode(); )
        Tr(K), kt(K), ha(K.content) && ga(K.content);
    } catch (vt) {
      throw be && Un(v), vt;
    }
    if (be)
      return ym(o.removed, (vt) => {
        vt.element && Ai(vt.element);
      }), vn && Ol(v), v;
    if (oa) {
      if (vn && Ol(z), Ka)
        for (he = G.call(z.ownerDocument); z.firstChild; )
          he.appendChild(z.firstChild);
      else
        he = z;
      return (De.shadowroot || De.shadowrootmode) && (he = se.call(f, he, !0)), he;
    }
    let at = Ye ? z.outerHTML : z.innerHTML;
    return Ye && Re["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && qa(Xw, z.ownerDocument.doctype.name) && (at = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + at), vn && (at = Nl(at)), Y && _l ? Be(at) : at;
  }, o.setConfig = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    vr(v), mr = !0, El = Re, xl = De;
  }, o.clearConfig = function() {
    Fe = null, mr = !1, El = null, xl = null, Y = ee, F = "";
  }, o.isValidAttribute = function(v, y, z) {
    Fe || vr({});
    const q = oe(v), K = oe(y);
    return zi(q, K, z);
  }, o.addHook = function(v, y) {
    typeof y == "function" && la(ie, v) && wc(ie[v], y);
  }, o.removeHook = function(v, y) {
    if (la(ie, v)) {
      if (y !== void 0) {
        const z = Aw(ie[v], y);
        return z === -1 ? void 0 : zw(ie[v], z, 1)[0];
      }
      return Cv(ie[v]);
    }
  }, o.removeHooks = function(v) {
    la(ie, v) && (ie[v] = []);
  }, o.removeAllHooks = function() {
    ie = Gv();
  }, o;
}
var Yv = k1();
let Xm = null;
function Ww() {
  return Xm || (typeof window < "u" ? Xm = Yv(window) : Xm = Yv), Xm;
}
const Ac = (r) => ({ __html: Ww().sanitize(r) });
h.shape({
  event: h.string,
  action: h.string,
  name: h.string,
  region: h.string,
  section: h.string,
  component: h.string,
  type: h.string,
  text: h.string
});
const Jw = ({
  event: r = "",
  action: o = "",
  name: s = "",
  type: f = "",
  section: c = "",
  text: p = "",
  region: g = "",
  component: T = "",
  eventCallback: S,
  eventTimeout: k
}) => {
  const { dataLayer: C } = window, O = {
    event: r.toLowerCase(),
    action: o.toLowerCase(),
    name: s.toLowerCase(),
    type: f.toLowerCase(),
    region: g.toLowerCase(),
    section: c.toLowerCase(),
    text: p.toLowerCase(),
    component: T.toLowerCase()
  };
  S && (O.eventCallback = S), k && (O.eventTimeout = k), C ? C.push(O) : S && S();
}, qm = ({ children: r }) => /* @__PURE__ */ B.jsx(B.Fragment, { children: r });
qm.propTypes = {
  children: h.oneOfType([
    h.arrayOf(h.node),
    h.node,
    h.string
  ])
};
var Fv = { exports: {} }, Xv;
function eT() {
  return Xv || (Xv = 1, (function(r) {
    (function() {
      var o = {}.hasOwnProperty;
      function s() {
        for (var p = "", g = 0; g < arguments.length; g++) {
          var T = arguments[g];
          T && (p = c(p, f(T)));
        }
        return p;
      }
      function f(p) {
        if (typeof p == "string" || typeof p == "number")
          return p;
        if (typeof p != "object")
          return "";
        if (Array.isArray(p))
          return s.apply(null, p);
        if (p.toString !== Object.prototype.toString && !p.toString.toString().includes("[native code]"))
          return p.toString();
        var g = "";
        for (var T in p)
          o.call(p, T) && p[T] && (g = c(g, T));
        return g;
      }
      function c(p, g) {
        return g ? p ? p + " " + g : p + g : p;
      }
      r.exports ? (s.default = s, r.exports = s) : window.classNames = s;
    })();
  })(Fv)), Fv.exports;
}
var tT = eT();
const Go = /* @__PURE__ */ nv(tT);
({
  ...qm.propTypes
});
const E1 = ({ children: r, className: o = "container", ...s }) => /* @__PURE__ */ B.jsx("div", { className: o, ...s, children: /* @__PURE__ */ B.jsx("div", { className: "row", children: r }) });
E1.propTypes = {
  children: qm.propTypes.children
};
({
  ...E1.propTypes
});
qm.propTypes.children, h.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
qm.propTypes.children;
const nT = h.shape({
  url: h.string,
  altText: h.string,
  cssClass: h.arrayOf(h.string),
  size: h.oneOf(["small", "medium", "large"])
}), Wy = h.shape({
  text: h.string,
  maxWidth: h.string,
  cssClass: h.arrayOf(h.string),
  highlightColor: h.oneOf(["gold", "black"])
}), x1 = h.shape({
  color: h.oneOf(["gold", "maroon", "gray", "dark"]),
  content: h.shape({
    icon: h.arrayOf(h.string),
    header: h.string,
    body: h.string
  })
}), av = h.shape({
  text: h.string,
  name: h.string,
  event: h.string,
  action: h.string,
  type: h.string,
  region: h.string,
  section: h.string,
  component: h.string
}), aT = "staticMarkup";
function lT() {
  const r = g1().indexOf(aT) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const wi = ({ gaData: r, prefix: o = "", children: s }) => {
  const { isReact: f } = lT(), { onClick: c, ...p } = s.props;
  if (f)
    return ht.cloneElement(s, {
      ...p,
      onClick: (S) => (r && r.event && r.action && Jw(r), c ? c(S) : !0)
    });
  let g = "";
  ["input", "header", "header-input"].includes(o) && (g = `-${o}`);
  const T = {
    [`data-ga${g}`]: r.text,
    [`data-ga${g}-name`]: r.name,
    [`data-ga${g}-event`]: r.event,
    [`data-ga${g}-action`]: r.action,
    [`data-ga${g}-type`]: r.type,
    [`data-ga${g}-region`]: r.region,
    [`data-ga${g}-section`]: r.section,
    [`data-ga${g}-component`]: r.component
  };
  return ht.cloneElement(s, {
    ...p,
    onClick: c,
    ...T
  });
};
h.number, h.string, h.number, h.func, h.object;
h.arrayOf(x1).isRequired, h.number;
const Iv = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, lv = ({
  label: r = "",
  cardTitle: o = "",
  gaData: s,
  ariaLabel: f,
  block: c,
  color: p = "gray",
  disabled: g,
  element: T = "button",
  href: S,
  icon: k,
  innerRef: C,
  onClick: O,
  size: R = "default",
  variant: $,
  classes: j,
  target: V = "_self",
  ...I
}) => {
  if ($) {
    const ce = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, J = Go("btn", ce[$], {
      [`btn-${ce[$]}-${p}`]: !0,
      "btn-medium": R === "medium",
      "btn-small": R === "small",
      "btn-large": R === "large" || R === "default",
      disabled: g
    });
    let ne = T;
    return S && T === "button" && (ne = "a"), /* @__PURE__ */ B.jsx(
      wi,
      {
        gaData: {
          ...Iv,
          section: o,
          ...s,
          text: r
        },
        children: /* @__PURE__ */ B.jsxs(
          ne,
          {
            type: ne === "button" && O ? "button" : void 0,
            ...I,
            className: Go(j) || J,
            href: S,
            ref: C,
            onClick: O,
            "aria-label": f,
            target: ne === "a" ? V : null,
            disabled: g,
            children: [
              k && /* @__PURE__ */ B.jsx("i", { className: `${k == null ? void 0 : k[0]} fa-${k == null ? void 0 : k[1]} me-1` }),
              r
            ]
          }
        )
      }
    );
  }
  const P = Go("btn", {
    [`btn-${p}`]: !0,
    "btn-md": R === "small",
    "btn-sm": R === "xsmall",
    "btn-block": c,
    disabled: g
  });
  let H = T;
  return S && T === "button" && (H = "a"), /* @__PURE__ */ B.jsx(
    wi,
    {
      gaData: {
        ...Iv,
        section: o,
        // @deprecated - remove at some point
        ...s,
        text: r
      },
      children: /* @__PURE__ */ B.jsxs(
        H,
        {
          type: H === "button" && O ? "button" : void 0,
          ...I,
          className: Go(j) || P,
          href: S,
          ref: C,
          onClick: O,
          "aria-label": f,
          target: H === "a" ? V : null,
          children: [
            k && /* @__PURE__ */ B.jsx("i", { className: `${k == null ? void 0 : k[0]} fa-${k == null ? void 0 : k[1]} me-1` }),
            r
          ]
        }
      )
    }
  );
};
lv.propTypes = {
  /**
   * Button label
   */
  label: h.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: h.string,
  /**
   * Google Analytics event data
   */
  gaData: av,
  /**
    ARIA label for accessibility
  */
  ariaLabel: h.string,
  /**
    Render button as a block-button?
  */
  block: h.bool,
  /**
    Button background color
  */
  color: h.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: h.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: h.oneOfType([
    h.func,
    h.string,
    h.shape({ $$typeof: h.symbol, render: h.func }),
    h.arrayOf(
      h.oneOfType([
        h.func,
        h.string,
        h.shape({ $$typeof: h.symbol, render: h.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: h.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: h.arrayOf(h.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: h.oneOfType([
    h.object,
    h.func,
    h.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: h.func,
  /**
    Button size. Legacy sizes (default, small, xsmall) or new sizes (large, medium, small) when used with variant prop.
  */
  size: h.oneOf(["default", "small", "xsmall", "large", "medium"]),
  /**
    Button style variant (borderless, outline, filled). When provided, uses new UDS button styles.
  */
  variant: h.oneOf(["borderless", "outline", "filled"]),
  /**
    Classes to add to button
  */
  classes: h.arrayOf(h.string),
  /**
   Link target type
   */
  target: h.oneOf(["_blank", "_self", "_top", "_parent"])
};
function rT(r) {
  var o = /* @__PURE__ */ Object.create(null);
  return function(s) {
    return o[s] === void 0 && (o[s] = r(s)), o[s];
  };
}
var iT = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, oT = /* @__PURE__ */ rT(
  function(r) {
    return iT.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), nn = "-ms-", Dm = "-moz-", wt = "-webkit-", _1 = "comm", kh = "rule", rv = "decl", uT = "@import", sT = "@namespace", A1 = "@keyframes", cT = "@layer", z1 = Math.abs, iv = String.fromCharCode, Db = Object.assign;
function fT(r, o) {
  return na(r, 0) ^ 45 ? (((o << 2 ^ na(r, 0)) << 2 ^ na(r, 1)) << 2 ^ na(r, 2)) << 2 ^ na(r, 3) : 0;
}
function N1(r) {
  return r.trim();
}
function Ho(r, o) {
  return (r = o.exec(r)) ? r[0] : r;
}
function We(r, o, s) {
  return r.replace(o, s);
}
function nh(r, o, s) {
  return r.indexOf(o, s);
}
function na(r, o) {
  return r.charCodeAt(o) | 0;
}
function dc(r, o, s) {
  return r.slice(o, s);
}
function di(r) {
  return r.length;
}
function O1(r) {
  return r.length;
}
function zm(r, o) {
  return o.push(r), r;
}
function dT(r, o) {
  return r.map(o).join("");
}
function Qv(r, o) {
  return r.filter(function(s) {
    return !Ho(s, o);
  });
}
var Eh = 1, zc = 1, C1 = 0, cr = 0, Nn = 0, Mc = "";
function xh(r, o, s, f, c, p, g, T) {
  return { value: r, root: o, parent: s, type: f, props: c, children: p, line: Eh, column: zc, length: g, return: "", siblings: T };
}
function Io(r, o) {
  return Db(xh("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, o);
}
function Tc(r) {
  for (; r.root; )
    r = Io(r.root, { children: [r] });
  zm(r, r.siblings);
}
function pT() {
  return Nn;
}
function mT() {
  return Nn = cr > 0 ? na(Mc, --cr) : 0, zc--, Nn === 10 && (zc = 1, Eh--), Nn;
}
function mi() {
  return Nn = cr < C1 ? na(Mc, cr++) : 0, zc++, Nn === 10 && (zc = 1, Eh++), Nn;
}
function Ko() {
  return na(Mc, cr);
}
function ah() {
  return cr;
}
function _h(r, o) {
  return dc(Mc, r, o);
}
function Um(r) {
  switch (r) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function hT(r) {
  return Eh = zc = 1, C1 = di(Mc = r), cr = 0, [];
}
function gT(r) {
  return Mc = "", r;
}
function Jy(r) {
  return N1(_h(cr - 1, Mb(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function yT(r) {
  for (; (Nn = Ko()) && Nn < 33; )
    mi();
  return Um(r) > 2 || Um(Nn) > 3 ? "" : " ";
}
function bT(r, o) {
  for (; --o && mi() && !(Nn < 48 || Nn > 102 || Nn > 57 && Nn < 65 || Nn > 70 && Nn < 97); )
    ;
  return _h(r, ah() + (o < 6 && Ko() == 32 && mi() == 32));
}
function Mb(r) {
  for (; mi(); )
    switch (Nn) {
      // ] ) " '
      case r:
        return cr;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && Mb(Nn);
        break;
      // (
      case 40:
        r === 41 && Mb(r);
        break;
      // \
      case 92:
        mi();
        break;
    }
  return cr;
}
function vT(r, o) {
  for (; mi() && r + Nn !== 57 && !(r + Nn === 84 && Ko() === 47); )
    ;
  return "/*" + _h(o, cr - 1) + "*" + iv(r === 47 ? r : mi());
}
function ST(r) {
  for (; !Um(Ko()); )
    mi();
  return _h(r, cr);
}
function wT(r) {
  return gT(lh("", null, null, null, [""], r = hT(r), 0, [0], r));
}
function lh(r, o, s, f, c, p, g, T, S) {
  for (var k = 0, C = 0, O = g, R = 0, $ = 0, j = 0, V = 1, I = 1, P = 1, H = 0, ce = "", J = c, ne = p, Y = f, F = ce; I; )
    switch (j = H, H = mi()) {
      // (
      case 40:
        if (j != 108 && na(F, O - 1) == 58) {
          nh(F += We(Jy(H), "&", "&\f"), "&\f", z1(k ? T[k - 1] : 0)) != -1 && (P = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        F += Jy(H);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        F += yT(j);
        break;
      // \
      case 92:
        F += bT(ah() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ko()) {
          case 42:
          case 47:
            zm(TT(vT(mi(), ah()), o, s, S), S), (Um(j || 1) == 5 || Um(Ko() || 1) == 5) && di(F) && dc(F, -1, void 0) !== " " && (F += " ");
            break;
          default:
            F += "/";
        }
        break;
      // {
      case 123 * V:
        T[k++] = di(F) * P;
      // } ; \0
      case 125 * V:
      case 59:
      case 0:
        switch (H) {
          // \0 }
          case 0:
          case 125:
            I = 0;
          // ;
          case 59 + C:
            P == -1 && (F = We(F, /\f/g, "")), $ > 0 && (di(F) - O || V === 0 && j === 47) && zm($ > 32 ? Pv(F + ";", f, s, O - 1, S) : Pv(We(F, " ", "") + ";", f, s, O - 2, S), S);
            break;
          // @ ;
          case 59:
            F += ";";
          // { rule/at-rule
          default:
            if (zm(Y = $v(F, o, s, k, C, c, T, ce, J = [], ne = [], O, p), p), H === 123)
              if (C === 0)
                lh(F, o, Y, Y, J, p, O, T, ne);
              else {
                switch (R) {
                  // c(ontainer)
                  case 99:
                    if (na(F, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (na(F, 2) === 97) break;
                  default:
                    C = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                C ? lh(r, Y, Y, f && zm($v(r, Y, Y, 0, 0, c, T, ce, c, J = [], O, ne), ne), c, ne, O, T, f ? J : ne) : lh(F, Y, Y, Y, [""], ne, 0, T, ne);
              }
        }
        k = C = $ = 0, V = P = 1, ce = F = "", O = g;
        break;
      // :
      case 58:
        O = 1 + di(F), $ = j;
      default:
        if (V < 1) {
          if (H == 123)
            --V;
          else if (H == 125 && V++ == 0 && mT() == 125)
            continue;
        }
        switch (F += iv(H), H * V) {
          // &
          case 38:
            P = C > 0 ? 1 : (F += "\f", -1);
            break;
          // ,
          case 44:
            T[k++] = (di(F) - 1) * P, P = 1;
            break;
          // @
          case 64:
            Ko() === 45 && (F += Jy(mi())), R = Ko(), C = O = di(ce = F += ST(ah())), H++;
            break;
          // -
          case 45:
            j === 45 && di(F) == 2 && (V = 0);
        }
    }
  return p;
}
function $v(r, o, s, f, c, p, g, T, S, k, C, O) {
  for (var R = c - 1, $ = c === 0 ? p : [""], j = O1($), V = 0, I = 0, P = 0; V < f; ++V)
    for (var H = 0, ce = dc(r, R + 1, R = z1(I = g[V])), J = r; H < j; ++H)
      (J = N1(I > 0 ? $[H] + " " + ce : We(ce, /&\f/g, $[H]))) && (S[P++] = J);
  return xh(r, o, s, c === 0 ? kh : T, S, k, C, O);
}
function TT(r, o, s, f) {
  return xh(r, o, s, _1, iv(pT()), dc(r, 2, -2), 0, f);
}
function Pv(r, o, s, f, c) {
  return xh(r, o, s, rv, dc(r, 0, f), dc(r, f + 1, -1), f, c);
}
function R1(r, o, s) {
  switch (fT(r, o)) {
    // color-adjust
    case 5103:
      return wt + "print-" + r + r;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return wt + r + r;
    // mask-composite
    case 4855:
      return wt + r.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + r;
    // tab-size
    case 4789:
      return Dm + r + r;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return wt + r + Dm + r + nn + r + r;
    // writing-mode
    case 5936:
      switch (na(r, o + 11)) {
        // vertical-l(r)
        case 114:
          return wt + r + nn + We(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        // vertical-r(l)
        case 108:
          return wt + r + nn + We(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        // horizontal(-)tb
        case 45:
          return wt + r + nn + We(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return wt + r + nn + r + r;
    // order
    case 6165:
      return wt + r + nn + "flex-" + r + r;
    // align-items
    case 5187:
      return wt + r + We(r, /(\w+).+(:[^]+)/, wt + "box-$1$2" + nn + "flex-$1$2") + r;
    // align-self
    case 5443:
      return wt + r + nn + "flex-item-" + We(r, /flex-|-self/g, "") + (Ho(r, /flex-|baseline/) ? "" : nn + "grid-row-" + We(r, /flex-|-self/g, "")) + r;
    // align-content
    case 4675:
      return wt + r + nn + "flex-line-pack" + We(r, /align-content|flex-|-self/g, "") + r;
    // flex-shrink
    case 5548:
      return wt + r + nn + We(r, "shrink", "negative") + r;
    // flex-basis
    case 5292:
      return wt + r + nn + We(r, "basis", "preferred-size") + r;
    // flex-grow
    case 6060:
      return wt + "box-" + We(r, "-grow", "") + wt + r + nn + We(r, "grow", "positive") + r;
    // transition
    case 4554:
      return wt + We(r, /([^-])(transform)/g, "$1" + wt + "$2") + r;
    // cursor
    case 6187:
      return We(We(We(r, /(zoom-|grab)/, wt + "$1"), /(image-set)/, wt + "$1"), r, "") + r;
    // background, background-image
    case 5495:
    case 3959:
      return We(r, /(image-set\([^]*)/, wt + "$1$`$1");
    // justify-content
    case 4968:
      return We(We(r, /(.+:)(flex-)?(.*)/, wt + "box-pack:$3" + nn + "flex-pack:$3"), /space-between/, "justify") + wt + r + r;
    // justify-self
    case 4200:
      if (!Ho(r, /flex-|baseline/)) return nn + "grid-column-align" + dc(r, o) + r;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return nn + We(r, "template-", "") + r;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return s && s.some(function(f, c) {
        return o = c, Ho(f.props, /grid-\w+-end/);
      }) ? ~nh(r + (s = s[o].value), "span", 0) ? r : nn + We(r, "-start", "") + r + nn + "grid-row-span:" + (~nh(s, "span", 0) ? Ho(s, /\d+/) : +Ho(s, /\d+/) - +Ho(r, /\d+/)) + ";" : nn + We(r, "-start", "") + r;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return s && s.some(function(f) {
        return Ho(f.props, /grid-\w+-start/);
      }) ? r : nn + We(We(r, "-end", "-span"), "span ", "") + r;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return We(r, /(.+)-inline(.+)/, wt + "$1$2") + r;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (di(r) - 1 - o > 6)
        switch (na(r, o + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (na(r, o + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return We(r, /(.+:)(.+)-([^]+)/, "$1" + wt + "$2-$3$1" + Dm + (na(r, o + 3) == 108 ? "$3" : "$2-$3")) + r;
          // (s)tretch
          case 115:
            return ~nh(r, "stretch", 0) ? R1(We(r, "stretch", "fill-available"), o, s) + r : r;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return We(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(f, c, p, g, T, S, k) {
        return nn + c + ":" + p + k + (g ? nn + c + "-span:" + (T ? S : +S - +p) + k : "") + r;
      });
    // position: sticky
    case 4949:
      if (na(r, o + 6) === 121)
        return We(r, ":", ":" + wt) + r;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (na(r, na(r, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return We(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + wt + (na(r, 14) === 45 ? "inline-" : "") + "box$3$1" + wt + "$2$3$1" + nn + "$2box$3") + r;
        // (inline-)?gri(d)
        case 100:
          return We(r, ":", ":" + nn) + r;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return We(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function gh(r, o) {
  for (var s = "", f = 0; f < r.length; f++)
    s += o(r[f], f, r, o) || "";
  return s;
}
function kT(r, o, s, f) {
  switch (r.type) {
    case cT:
      if (r.children.length) break;
    case uT:
    case sT:
    case rv:
      return r.return = r.return || r.value;
    case _1:
      return "";
    case A1:
      return r.return = r.value + "{" + gh(r.children, f) + "}";
    case kh:
      if (!di(r.value = r.props.join(","))) return "";
  }
  return di(s = gh(r.children, f)) ? r.return = r.value + "{" + s + "}" : "";
}
function ET(r) {
  var o = O1(r);
  return function(s, f, c, p) {
    for (var g = "", T = 0; T < o; T++)
      g += r[T](s, f, c, p) || "";
    return g;
  };
}
function xT(r) {
  return function(o) {
    o.root || (o = o.return) && r(o);
  };
}
function _T(r, o, s, f) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case rv:
        r.return = R1(r.value, r.length, s);
        return;
      case A1:
        return gh([Io(r, { value: We(r.value, "@", "@" + wt) })], f);
      case kh:
        if (r.length)
          return dT(s = r.props, function(c) {
            switch (Ho(c, f = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Tc(Io(r, { props: [We(c, /:(read-\w+)/, ":" + Dm + "$1")] })), Tc(Io(r, { props: [c] })), Db(r, { props: Qv(s, f) });
                break;
              // :placeholder
              case "::placeholder":
                Tc(Io(r, { props: [We(c, /:(plac\w+)/, ":" + wt + "input-$1")] })), Tc(Io(r, { props: [We(c, /:(plac\w+)/, ":" + Dm + "$1")] })), Tc(Io(r, { props: [We(c, /:(plac\w+)/, nn + "input-$1")] })), Tc(Io(r, { props: [c] })), Db(r, { props: Qv(s, f) });
                break;
            }
            return "";
          });
    }
}
var Mt = { env: { NODE_ENV: "production" } }, eb, tb;
const pc = typeof Mt < "u" && Mt.env !== void 0 && (Mt.env.REACT_APP_SC_ATTR || Mt.env.SC_ATTR) || "data-styled", D1 = "active", M1 = "data-styled-version", Ah = "6.4.2", ov = `/*!sc*/
`, Mm = typeof window < "u" && typeof document < "u";
function Kv(r) {
  if (typeof Mt < "u" && Mt.env !== void 0) {
    const o = Mt.env[r];
    if (o !== void 0 && o !== "") return o !== "false";
  }
}
const AT = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (tb = (eb = Kv("REACT_APP_SC_DISABLE_SPEEDY")) !== null && eb !== void 0 ? eb : Kv("SC_DISABLE_SPEEDY")) !== null && tb !== void 0 ? tb : typeof Mt < "u" && Mt.env !== void 0 && Mt.env.NODE_ENV !== "production"), zT = "sc-keyframes-", NT = Mt.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?

`, 18: `Accessing \`useTheme\` hook outside of a \`<ThemeProvider>\` element.

\`\`\`jsx
import { useTheme } from 'styled-components';
export function StyledCompoent({ children }) {
  const theme = useTheme();
  return <div style={{ width: theme.sizes.full }}>{children}</div>;
}

import { StyledComponent } from './StyledComponent';
import { theme } from './theme';
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledComponent />
    </ThemeProvider>
  );
}
\`\`\`

If you need access to the theme in an uncertain composition scenario, \`React.useContext(ThemeContext)\` will not emit an error if there is no \`ThemeProvider\` ancestor.
` } : {};
function Vm(r, ...o) {
  return Mt.env.NODE_ENV === "production" ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${r} for more information.${o.length > 0 ? ` Args: ${o.join(", ")}` : ""}`) : new Error((function(...s) {
    let f = s[0];
    const c = [];
    for (let p = 1, g = s.length; p < g; p += 1) c.push(s[p]);
    return c.forEach((p) => {
      f = f.replace(/%[a-z]/, p);
    }), f;
  })(NT[r], ...o).trim());
}
const OT = 1 << 30;
let rh = /* @__PURE__ */ new Map(), yh = /* @__PURE__ */ new Map(), ih = 1;
const Im = (r) => {
  if (rh.has(r)) return rh.get(r);
  for (; yh.has(ih); ) ih++;
  const o = ih++;
  if (Mt.env.NODE_ENV !== "production" && ((0 | o) < 0 || o > OT)) throw Vm(16, `${o}`);
  return rh.set(r, o), yh.set(o, r), o;
}, CT = (r) => yh.get(r), RT = (r, o) => {
  ih = o + 1, rh.set(r, o), yh.set(o, r);
}, Zv = /invalid hook call/i, Qm = /* @__PURE__ */ new Set(), DT = (r, o) => {
  if (Mt.env.NODE_ENV !== "production") {
    const s = `The component ${r}${o ? ` with the id of "${o}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, f = console.error;
    try {
      let c = !0;
      console.error = (p, ...g) => {
        Zv.test(p) ? (c = !1, Qm.delete(s)) : f(p, ...g);
      }, typeof ht.useState == "function" && ht.useState(null), c && !Qm.has(s) && (console.warn(s), Qm.add(s));
    } catch (c) {
      Zv.test(c.message) && Qm.delete(s);
    } finally {
      console.error = f;
    }
  }
}, uv = Object.freeze([]), Nc = Object.freeze({});
function MT(r, o, s = Nc) {
  return r.theme !== s.theme && r.theme || o || s.theme;
}
const LT = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, jT = /(^-|-$)/g;
function L1(r) {
  return r.replace(LT, "-").replace(jT, "");
}
const UT = /(a)(d)/gi, Wv = (r) => String.fromCharCode(r + (r > 25 ? 39 : 97));
function j1(r) {
  let o, s = "";
  for (o = Math.abs(r); o > 52; o = o / 52 | 0) s = Wv(o % 52) + s;
  return (Wv(o % 52) + s).replace(UT, "$1-$2");
}
const Lb = 5381, uc = (r, o) => {
  let s = o.length;
  for (; s; ) r = 33 * r ^ o.charCodeAt(--s);
  return r;
}, U1 = (r) => uc(Lb, r);
function HT(r) {
  return j1(U1(r) >>> 0);
}
function sv(r) {
  return Mt.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function oh(r) {
  return typeof r == "string" && (Mt.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
function BT(r) {
  return oh(r) ? `styled.${r}` : `Styled(${sv(r)})`;
}
const H1 = Symbol.for("react.memo"), qT = Symbol.for("react.forward_ref"), VT = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, GT = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, B1 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, YT = { [qT]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [H1]: B1 };
function Jv(r) {
  return ("type" in (o = r) && o.type.$$typeof) === H1 ? B1 : "$$typeof" in r ? YT[r.$$typeof] : VT;
  var o;
}
const FT = Object.defineProperty, XT = Object.getOwnPropertyNames, IT = Object.getOwnPropertySymbols, QT = Object.getOwnPropertyDescriptor, $T = Object.getPrototypeOf, PT = Object.prototype;
function q1(r, o, s) {
  if (typeof o != "string") {
    const f = $T(o);
    f && f !== PT && q1(r, f, s);
    const c = XT(o).concat(IT(o)), p = Jv(r), g = Jv(o);
    for (let T = 0; T < c.length; ++T) {
      const S = c[T];
      if (!(S in GT || s && s[S] || g && S in g || p && S in p)) {
        const k = QT(o, S);
        try {
          FT(r, S, k);
        } catch {
        }
      }
    }
  }
  return r;
}
function zh(r) {
  return typeof r == "function";
}
const KT = Symbol.for("react.forward_ref");
function V1(r) {
  return r != null && (typeof r == "object" || typeof r == "function") && r.$$typeof === KT && "styledComponentId" in r;
}
function Nm(r, o) {
  return r && o ? r + " " + o : r || o || "";
}
function e0(r, o) {
  return r.join("");
}
function mc(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function jb(r, o, s = !1) {
  if (!s && !mc(r) && !Array.isArray(r)) return o;
  if (Array.isArray(o)) for (let f = 0; f < o.length; f++) r[f] = jb(r[f], o[f]);
  else if (mc(o)) for (const f in o) r[f] = jb(r[f], o[f]);
  return r;
}
function G1(r, o) {
  Object.defineProperty(r, "toString", { value: o });
}
const ZT = class {
  constructor(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(r) {
    if (r === this._cGroup) return this._cIndex;
    let o = this._cIndex;
    if (r > this._cGroup) for (let s = this._cGroup; s < r; s++) o += this.groupSizes[s];
    else for (let s = this._cGroup - 1; s >= r; s--) o -= this.groupSizes[s];
    return this._cGroup = r, this._cIndex = o, o;
  }
  insertRules(r, o) {
    if (r >= this.groupSizes.length) {
      const c = this.groupSizes, p = c.length;
      let g = p;
      for (; r >= g; ) if (g <<= 1, g < 0) throw Vm(16, `${r}`);
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(c), this.length = g;
      for (let T = p; T < g; T++) this.groupSizes[T] = 0;
    }
    let s = this.indexOfGroup(r + 1), f = 0;
    for (let c = 0, p = o.length; c < p; c++) this.tag.insertRule(s, o[c]) && (this.groupSizes[r]++, s++, f++);
    f > 0 && this._cGroup > r && (this._cIndex += f);
  }
  clearGroup(r) {
    if (r < this.length) {
      const o = this.groupSizes[r], s = this.indexOfGroup(r), f = s + o;
      this.groupSizes[r] = 0;
      for (let c = s; c < f; c++) this.tag.deleteRule(s);
      o > 0 && this._cGroup > r && (this._cIndex -= o);
    }
  }
  getGroup(r) {
    let o = "";
    if (r >= this.length || this.groupSizes[r] === 0) return o;
    const s = this.groupSizes[r], f = this.indexOfGroup(r), c = f + s;
    for (let p = f; p < c; p++) o += this.tag.getRule(p) + ov;
    return o;
  }
}, WT = `style[${pc}][${M1}="${Ah}"]`, JT = new RegExp(`^${pc}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), t0 = (r) => typeof ShadowRoot < "u" && r instanceof ShadowRoot || "host" in r && r.nodeType === 11, Ub = (r) => {
  if (!r) return document;
  if (t0(r)) return r;
  if ("getRootNode" in r) {
    const o = r.getRootNode();
    if (t0(o)) return o;
  }
  return document;
}, ek = (r, o, s) => {
  const f = s.split(",");
  let c;
  for (let p = 0, g = f.length; p < g; p++) (c = f[p]) && r.registerName(o, c);
}, tk = (r, o) => {
  var s;
  const f = ((s = o.textContent) !== null && s !== void 0 ? s : "").split(ov), c = [];
  for (let p = 0, g = f.length; p < g; p++) {
    const T = f[p].trim();
    if (!T) continue;
    const S = T.match(JT);
    if (S) {
      const k = 0 | parseInt(S[1], 10), C = S[2];
      k !== 0 && (RT(C, k), ek(r, C, S[3]), r.getTag().insertRules(k, c)), c.length = 0;
    } else c.push(T);
  }
}, nb = (r) => {
  const o = Ub(r.options.target).querySelectorAll(WT);
  for (let s = 0, f = o.length; s < f; s++) {
    const c = o[s];
    c && c.getAttribute(pc) !== D1 && (tk(r, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
let Sm = !1;
function nk() {
  if (Sm !== !1) return Sm;
  if (typeof document < "u") {
    const r = document.head.querySelector('meta[property="csp-nonce"]');
    if (r) return Sm = r.nonce || r.getAttribute("content") || void 0;
    const o = document.head.querySelector('meta[name="sc-nonce"]');
    if (o) return Sm = o.getAttribute("content") || void 0;
  }
  return Sm = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const Y1 = (r, o) => {
  const s = document.head, f = r || s, c = document.createElement("style"), p = ((S) => {
    const k = Array.from(S.querySelectorAll(`style[${pc}]`));
    return k[k.length - 1];
  })(f), g = p !== void 0 ? p.nextSibling : null;
  c.setAttribute(pc, D1), c.setAttribute(M1, Ah);
  const T = o || nk();
  return T && c.setAttribute("nonce", T), f.insertBefore(c, g), c;
}, ak = class {
  constructor(r, o) {
    this.element = Y1(r, o), this.element.appendChild(document.createTextNode("")), this.sheet = ((s) => {
      var f;
      if (s.sheet) return s.sheet;
      const c = (f = s.getRootNode().styleSheets) !== null && f !== void 0 ? f : document.styleSheets;
      for (let p = 0, g = c.length; p < g; p++) {
        const T = c[p];
        if (T.ownerNode === s) return T;
      }
      throw Vm(17);
    })(this.element), this.length = 0;
  }
  insertRule(r, o) {
    try {
      return this.sheet.insertRule(o, r), this.length++, !0;
    } catch {
      return !1;
    }
  }
  deleteRule(r) {
    this.sheet.deleteRule(r), this.length--;
  }
  getRule(r) {
    const o = this.sheet.cssRules[r];
    return o && o.cssText ? o.cssText : "";
  }
}, lk = class {
  constructor(r, o) {
    this.element = Y1(r, o), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(r, o) {
    if (r <= this.length && r >= 0) {
      const s = document.createTextNode(o);
      return this.element.insertBefore(s, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }
  deleteRule(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }
  getRule(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }
};
let n0 = Mm;
const rk = { isServer: !Mm, useCSSOMInjection: !AT };
class Nh {
  static registerId(o) {
    return Im(o);
  }
  constructor(o = Nc, s = {}, f) {
    this.options = Object.assign(Object.assign({}, rk), o), this.gs = s, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(f), this.server = !!o.isServer, !this.server && Mm && n0 && (n0 = !1, nb(this)), G1(this, () => ((c) => {
      const p = c.getTag(), { length: g } = p;
      let T = "";
      for (let S = 0; S < g; S++) {
        const k = CT(S);
        if (k === void 0) continue;
        const C = c.names.get(k);
        if (C === void 0 || !C.size) continue;
        const O = p.getGroup(S);
        if (O.length === 0) continue;
        const R = pc + ".g" + S + '[id="' + k + '"]';
        let $ = "";
        for (const j of C) j.length > 0 && ($ += j + ",");
        T += O + R + '{content:"' + $ + '"}' + ov;
      }
      return T;
    })(this));
  }
  rehydrate() {
    !this.server && Mm && nb(this);
  }
  reconstructWithOptions(o, s = !0) {
    const f = new Nh(Object.assign(Object.assign({}, this.options), o), this.gs, s && this.names || void 0);
    return f.keyframeIds = new Set(this.keyframeIds), !this.server && Mm && o.target !== this.options.target && Ub(this.options.target) !== Ub(o.target) && nb(f), f;
  }
  allocateGSInstance(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (o = (({ useCSSOMInjection: s, target: f, nonce: c }) => s ? new ak(f, c) : new lk(f, c))(this.options), new ZT(o)));
    var o;
  }
  hasNameForId(o, s) {
    var f, c;
    return (c = (f = this.names.get(o)) === null || f === void 0 ? void 0 : f.has(s)) !== null && c !== void 0 && c;
  }
  registerName(o, s) {
    Im(o), o.startsWith(zT) && this.keyframeIds.add(o);
    const f = this.names.get(o);
    f ? f.add(s) : this.names.set(o, /* @__PURE__ */ new Set([s]));
  }
  insertRules(o, s, f) {
    this.registerName(o, s), this.getTag().insertRules(Im(o), f);
  }
  clearNames(o) {
    this.names.has(o) && this.names.get(o).clear();
  }
  clearRules(o) {
    this.getTag().clearGroup(Im(o)), this.clearNames(o);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const F1 = /* @__PURE__ */ new WeakSet(), ik = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function ok(r, o) {
  return o == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || r in ik || r.startsWith("--") ? String(o).trim() : o + "px";
}
const ic = 47;
function a0(r) {
  if (r.charCodeAt(0) === 45 && r.charCodeAt(1) === 45) return r;
  let o = "";
  for (let s = 0; s < r.length; s++) {
    const f = r.charCodeAt(s);
    o += f >= 65 && f <= 90 ? "-" + String.fromCharCode(f + 32) : r[s];
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
const uk = Symbol.for("sc-keyframes");
function Hb(r) {
  return typeof r == "object" && r !== null && uk in r;
}
function X1(r) {
  return zh(r) && !(r.prototype && r.prototype.isReactComponent);
}
const I1 = (r) => r == null || r === !1 || r === "", sk = Symbol.for("react.client.reference");
function l0(r) {
  return r.$$typeof === sk;
}
function r0(r) {
  const o = r.$$id, s = (o && o.includes("#") ? o.split("#").pop() : o) || r.name || "unknown";
  console.warn(`Interpolating a client component (${s}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function Q1(r, o) {
  for (const s in r) {
    const f = r[s];
    r.hasOwnProperty(s) && !I1(f) && (Array.isArray(f) && F1.has(f) || zh(f) ? o.push(a0(s) + ":", f, ";") : mc(f) ? (o.push(s + " {"), Q1(f, o), o.push("}")) : o.push(a0(s) + ": " + ok(s, f) + ";"));
  }
}
function sc(r, o, s, f, c = []) {
  if (I1(r)) return c;
  const p = typeof r;
  if (p === "string") return c.push(r), c;
  if (p === "function") {
    if (l0(r)) return Mt.env.NODE_ENV !== "production" && r0(r), c;
    if (X1(r) && o) {
      const g = r(o);
      return Mt.env.NODE_ENV === "production" || typeof g != "object" || Array.isArray(g) || Hb(g) || mc(g) || g === null || console.error(`${sv(r)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), sc(g, o, s, f, c);
    }
    return c.push(r), c;
  }
  if (Array.isArray(r)) {
    for (let g = 0; g < r.length; g++) sc(r[g], o, s, f, c);
    return c;
  }
  return V1(r) ? (c.push(`.${r.styledComponentId}`), c) : Hb(r) ? (s ? (r.inject(s, f), c.push(r.getName(f))) : c.push(r), c) : l0(r) ? (Mt.env.NODE_ENV !== "production" && r0(r), c) : mc(r) ? r.toString !== Object.prototype.toString ? (c.push(r.toString()), c) : (Q1(r, c), c) : (c.push(r.toString()), c);
}
const ck = U1(Ah);
class fk {
  constructor(o, s, f) {
    this.rules = o, this.componentId = s, this.baseHash = uc(ck, s), this.baseStyle = f, Nh.registerId(s);
  }
  generateAndInjectStyles(o, s, f) {
    let c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, s, f) : "";
    {
      let p = "";
      for (let g = 0; g < this.rules.length; g++) {
        const T = this.rules[g];
        if (typeof T == "string") p += T;
        else if (T) if (X1(T)) {
          const S = T(o);
          typeof S == "string" ? p += S : S != null && S !== !1 && (Mt.env.NODE_ENV === "production" || typeof S != "object" || Array.isArray(S) || Hb(S) || mc(S) || console.error(`${sv(T)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), p += e0(sc(S, o, s, f)));
        } else p += e0(sc(T, o, s, f));
      }
      if (p) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const g = f.hash ? f.hash + p : p;
        let T = this.dynamicNameCache.get(g);
        if (!T) {
          if (T = j1(uc(uc(this.baseHash, f.hash), p) >>> 0), this.dynamicNameCache.size >= 200) {
            const S = this.dynamicNameCache.keys().next().value;
            S !== void 0 && this.dynamicNameCache.delete(S);
          }
          this.dynamicNameCache.set(g, T);
        }
        if (!s.hasNameForId(this.componentId, T)) {
          const S = f(p, "." + T, void 0, this.componentId);
          s.insertRules(this.componentId, T, S);
        }
        c = Nm(c, T);
      }
    }
    return c;
  }
}
const dk = /&/g;
function $1(r, o) {
  let s = 0;
  for (; --o >= 0 && r.charCodeAt(o) === 92; ) s++;
  return !(1 & ~s);
}
function ab(r) {
  const o = r.length;
  let s = "", f = 0, c = 0, p = 0, g = !1, T = !1;
  for (let S = 0; S < o; S++) {
    const k = r.charCodeAt(S);
    if (p !== 0 || g || k !== ic || r.charCodeAt(S + 1) !== 42) if (g) k === 42 && r.charCodeAt(S + 1) === ic && (g = !1, S++);
    else if (k !== 34 && k !== 39 || $1(r, S)) {
      if (p === 0) if (k === 123) c++;
      else if (k === 125) {
        if (c--, c < 0) {
          T = !0;
          let C = S + 1;
          for (; C < o; ) {
            const O = r.charCodeAt(C);
            if (O === 59 || O === 10) break;
            C++;
          }
          C < o && r.charCodeAt(C) === 59 && C++, c = 0, S = C - 1, f = C;
          continue;
        }
        c === 0 && (s += r.substring(f, S + 1), f = S + 1);
      } else k === 59 && c === 0 && (s += r.substring(f, S + 1), f = S + 1);
    } else p === 0 ? p = k : p === k && (p = 0);
    else g = !0, S++;
  }
  return T || c !== 0 || p !== 0 ? (f < o && c === 0 && p === 0 && (s += r.substring(f)), s) : r;
}
function P1(r, o) {
  const s = o + " ", f = "," + s;
  for (let c = 0; c < r.length; c++) {
    const p = r[c];
    if (p.type === "rule") {
      p.value = (s + p.value).replaceAll(",", f);
      const g = p.props, T = [];
      for (let S = 0; S < g.length; S++) T[S] = s + g[S];
      p.props = T;
    }
    Array.isArray(p.children) && p.type !== "@keyframes" && P1(p.children, o);
  }
  return r;
}
function pk({ options: r = Nc, plugins: o = uv } = Nc) {
  let s, f, c;
  const p = (R, $, j) => j.startsWith(f) && j.endsWith(f) && j.replaceAll(f, "").length > 0 ? `.${s}` : R, g = o.slice();
  g.push((R) => {
    R.type === kh && R.value.includes("&") && (c || (c = new RegExp(`\\${f}\\b`, "g")), R.props[0] = R.props[0].replace(dk, f).replace(c, p));
  }), r.prefix && g.push(_T), g.push(kT);
  let T = [];
  const S = ET(g.concat(xT((R) => T.push(R)))), k = (R, $ = "", j = "", V = "&") => {
    s = V, f = $, c = void 0;
    const I = (function(H) {
      const ce = H.indexOf("//") !== -1, J = H.indexOf("}") !== -1;
      if (!ce && !J) return H;
      if (!ce) return ab(H);
      const ne = H.length;
      let Y = "", F = 0, ee = 0, Ee = 0, He = 0, qe = 0, Be = !1;
      for (; ee < ne; ) {
        const Ae = H.charCodeAt(ee);
        if (Ae !== 34 && Ae !== 39 || $1(H, ee)) if (Ee === 0) if (Ae === ic && ee + 1 < ne && H.charCodeAt(ee + 1) === 42) {
          for (ee += 2; ee + 1 < ne && (H.charCodeAt(ee) !== 42 || H.charCodeAt(ee + 1) !== ic); ) ee++;
          ee += 2;
        } else if (Ae !== 40) if (Ae !== 41) if (He > 0) ee++;
        else if (Ae === 42 && ee + 1 < ne && H.charCodeAt(ee + 1) === ic) Y += H.substring(F, ee), ee += 2, F = ee, Be = !0;
        else if (Ae === ic && ee + 1 < ne && H.charCodeAt(ee + 1) === ic) {
          for (Y += H.substring(F, ee); ee < ne && H.charCodeAt(ee) !== 10; ) ee++;
          F = ee, Be = !0;
        } else Ae === 123 ? qe++ : Ae === 125 && qe--, ee++;
        else He > 0 && He--, ee++;
        else He++, ee++;
        else ee++;
        else Ee === 0 ? Ee = Ae : Ee === Ae && (Ee = 0), ee++;
      }
      return Be ? (F < ne && (Y += H.substring(F)), qe === 0 ? Y : ab(Y)) : qe === 0 ? H : ab(H);
    })(R);
    let P = wT(j || $ ? j + " " + $ + " { " + I + " }" : I);
    return r.namespace && (P = P1(P, r.namespace)), T = [], gh(P, S), T;
  }, C = r;
  let O = Lb;
  for (let R = 0; R < o.length; R++) o[R].name || Vm(15), O = uc(O, o[R].name);
  return C != null && C.namespace && (O = uc(O, C.namespace)), C != null && C.prefix && (O = uc(O, "p")), k.hash = O !== Lb ? O.toString() : "", k;
}
const mk = new Nh(), hk = pk(), K1 = ht.createContext({ shouldForwardProp: void 0, styleSheet: mk, stylis: hk, stylisPlugins: void 0 });
K1.Consumer;
function gk() {
  return ht.useContext(K1);
}
const Z1 = ht.createContext(void 0);
Z1.Consumer;
const i0 = Object.prototype.hasOwnProperty, lb = {};
function yk(r, o) {
  const s = typeof r != "string" ? "sc" : L1(r);
  lb[s] = (lb[s] || 0) + 1;
  const f = s + "-" + HT(Ah + s + lb[s]);
  return o ? o + "-" + f : f;
}
let rb;
function bk(r, o, s) {
  const f = V1(r), c = r, p = !oh(r), { attrs: g = uv, componentId: T = yk(o.displayName, o.parentComponentId), displayName: S = BT(r) } = o, k = o.displayName && o.componentId ? L1(o.displayName) + "-" + o.componentId : o.componentId || T, C = f && c.attrs ? c.attrs.concat(g).filter(Boolean) : g;
  let { shouldForwardProp: O } = o;
  if (f && c.shouldForwardProp) {
    const V = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      const I = o.shouldForwardProp;
      O = (P, H) => V(P, H) && I(P, H);
    } else O = V;
  }
  const R = new fk(s, k, f ? c.componentStyle : void 0);
  function $(V, I) {
    return (function(P, H, ce) {
      const { attrs: J, componentStyle: ne, defaultProps: Y, foldedComponentIds: F, styledComponentId: ee, target: Ee } = P, He = ht.useContext(Z1), qe = gk(), Be = P.shouldForwardProp || qe.shouldForwardProp;
      Mt.env.NODE_ENV !== "production" && ht.useDebugValue && ht.useDebugValue(ee);
      const Ae = MT(H, He, Y) || Nc;
      let yt, Qe;
      {
        const re = ht.useRef(null), se = re.current;
        if (se !== null && se[1] === Ae && se[2] === qe.styleSheet && se[3] === qe.stylis && se[7] === ne && (function(ie, we, ue) {
          const Z = ie, ye = we;
          let bt = 0;
          for (const tt in ye) if (i0.call(ye, tt) && (bt++, Z[tt] !== ye[tt])) return !1;
          return bt === ue;
        })(se[0], H, se[4])) yt = se[5], Qe = se[6];
        else {
          yt = (function(we, ue, Z) {
            const ye = Object.assign(Object.assign({}, ue), { className: void 0, theme: Z }), bt = we.length > 1;
            for (let tt = 0; tt < we.length; tt++) {
              const fn = we[tt], dn = zh(fn) ? fn(bt ? Object.assign({}, ye) : ye) : fn;
              for (const nt in dn) nt === "className" ? ye.className = Nm(ye.className, dn[nt]) : nt === "style" ? ye.style = Object.assign(Object.assign({}, ye.style), dn[nt]) : nt in ue && ue[nt] === void 0 || (ye[nt] = dn[nt]);
            }
            return "className" in ue && typeof ue.className == "string" && (ye.className = Nm(ye.className, ue.className)), ye;
          })(J, H, Ae), Qe = (function(we, ue, Z, ye) {
            const bt = we.generateAndInjectStyles(ue, Z, ye);
            return Mt.env.NODE_ENV !== "production" && ht.useDebugValue && ht.useDebugValue(bt), bt;
          })(ne, yt, qe.styleSheet, qe.stylis);
          let ie = 0;
          for (const we in H) i0.call(H, we) && ie++;
          re.current = [H, Ae, qe.styleSheet, qe.stylis, ie, yt, Qe, ne];
        }
      }
      Mt.env.NODE_ENV !== "production" && P.warnTooManyClasses && P.warnTooManyClasses(Qe);
      const U = yt.as || Ee, L = (function(re, se, ie, we) {
        const ue = {};
        for (const Z in re) re[Z] === void 0 || Z[0] === "$" || Z === "as" || Z === "theme" && re.theme === ie || (Z === "forwardedAs" ? ue.as = re.forwardedAs : we && !we(Z, se) || (ue[Z] = re[Z], we || Mt.env.NODE_ENV !== "development" || oT(Z) || (rb || (rb = /* @__PURE__ */ new Set())).has(Z) || !oh(se) || se.includes("-") || (rb.add(Z), console.warn(`styled-components: it looks like an unknown prop "${Z}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return ue;
      })(yt, U, Ae, Be);
      let G = Nm(F, ee);
      return Qe && (G += " " + Qe), yt.className && (G += " " + yt.className), L[oh(U) && U.includes("-") ? "class" : "className"] = G, ce && (L.ref = ce), v1(U, L);
    })(j, V, I);
  }
  $.displayName = S;
  let j = ht.forwardRef($);
  return j.attrs = C, j.componentStyle = R, j.displayName = S, j.shouldForwardProp = O, j.foldedComponentIds = f ? Nm(c.foldedComponentIds, c.styledComponentId) : "", j.styledComponentId = k, j.target = f ? c.target : r, Object.defineProperty(j, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(V) {
    this._foldedDefaultProps = f ? (function(I, ...P) {
      for (const H of P) jb(I, H, !0);
      return I;
    })({}, c.defaultProps, V) : V;
  } }), Mt.env.NODE_ENV !== "production" && (DT(S, k), j.warnTooManyClasses = /* @__PURE__ */ ((V, I) => {
    let P = {}, H = !1;
    return (ce) => {
      !H && (P[ce] = !0, Object.keys(P).length >= 200) && (console.warn(`Over 200 classes were generated for component ${V}${I ? ` with the id of "${I}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), H = !0, P = {});
    };
  })(S, k)), G1(j, () => `.${j.styledComponentId}`), p && q1(j, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), j;
}
var vk = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function o0(r, o) {
  const s = [r[0]];
  for (let f = 0, c = o.length; f < c; f += 1) s.push(o[f], r[f + 1]);
  return s;
}
const u0 = (r) => (F1.add(r), r);
function Sk(r, ...o) {
  if (zh(r) || mc(r)) return u0(sc(o0(uv, [r, ...o])));
  const s = r;
  return o.length === 0 && s.length === 1 && typeof s[0] == "string" ? sc(s) : u0(sc(o0(s, o)));
}
function Bb(r, o, s = Nc) {
  if (!o) throw Vm(1, o);
  const f = (c, ...p) => r(o, s, Sk(c, ...p));
  return f.attrs = (c) => Bb(r, o, Object.assign(Object.assign({}, s), { attrs: Array.prototype.concat(s.attrs, c).filter(Boolean) })), f.withConfig = (c) => Bb(r, o, Object.assign(Object.assign({}, s), c)), f;
}
const W1 = (r) => Bb(bk, r), Ti = W1;
vk.forEach((r) => {
  Ti[r] = W1(r);
});
Mt.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://styled-components.com/docs/basics#react-native`);
const $m = `__sc-${pc}__`;
Mt.env.NODE_ENV !== "production" && Mt.env.NODE_ENV !== "test" && typeof window < "u" && (window[$m] || (window[$m] = 0), window[$m] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`), window[$m] += 1);
Ti.div`
  &.sticky {
    position: fixed;
    top: var(--uds-anchor-menu-top, 0px);
    left: 0;
    width: 100%;
  }
  .mobile-menu-toggler {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: inherit;
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
h.arrayOf(
  h.shape({
    text: h.string.isRequired,
    targetIdName: h.string.isRequired,
    icon: h.arrayOf(h.string)
  })
).isRequired, h.string.isRequired, h.bool;
var ib = { exports: {} }, ob = { exports: {} }, ub, s0;
function wk() {
  if (s0) return ub;
  s0 = 1;
  var r = 1e3, o = r * 60, s = o * 60, f = s * 24, c = f * 365.25;
  ub = function(k, C) {
    C = C || {};
    var O = typeof k;
    if (O === "string" && k.length > 0)
      return p(k);
    if (O === "number" && isNaN(k) === !1)
      return C.long ? T(k) : g(k);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(k)
    );
  };
  function p(k) {
    if (k = String(k), !(k.length > 100)) {
      var C = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        k
      );
      if (C) {
        var O = parseFloat(C[1]), R = (C[2] || "ms").toLowerCase();
        switch (R) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return O * c;
          case "days":
          case "day":
          case "d":
            return O * f;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return O * s;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return O * o;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return O * r;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return O;
          default:
            return;
        }
      }
    }
  }
  function g(k) {
    return k >= f ? Math.round(k / f) + "d" : k >= s ? Math.round(k / s) + "h" : k >= o ? Math.round(k / o) + "m" : k >= r ? Math.round(k / r) + "s" : k + "ms";
  }
  function T(k) {
    return S(k, f, "day") || S(k, s, "hour") || S(k, o, "minute") || S(k, r, "second") || k + " ms";
  }
  function S(k, C, O) {
    if (!(k < C))
      return k < C * 1.5 ? Math.floor(k / C) + " " + O : Math.ceil(k / C) + " " + O + "s";
  }
  return ub;
}
var c0;
function Tk() {
  return c0 || (c0 = 1, (function(r, o) {
    o = r.exports = c.debug = c.default = c, o.coerce = S, o.disable = g, o.enable = p, o.enabled = T, o.humanize = wk(), o.names = [], o.skips = [], o.formatters = {};
    var s;
    function f(k) {
      var C = 0, O;
      for (O in k)
        C = (C << 5) - C + k.charCodeAt(O), C |= 0;
      return o.colors[Math.abs(C) % o.colors.length];
    }
    function c(k) {
      function C() {
        if (C.enabled) {
          var O = C, R = +/* @__PURE__ */ new Date(), $ = R - (s || R);
          O.diff = $, O.prev = s, O.curr = R, s = R;
          for (var j = new Array(arguments.length), V = 0; V < j.length; V++)
            j[V] = arguments[V];
          j[0] = o.coerce(j[0]), typeof j[0] != "string" && j.unshift("%O");
          var I = 0;
          j[0] = j[0].replace(/%([a-zA-Z%])/g, function(H, ce) {
            if (H === "%%") return H;
            I++;
            var J = o.formatters[ce];
            if (typeof J == "function") {
              var ne = j[I];
              H = J.call(O, ne), j.splice(I, 1), I--;
            }
            return H;
          }), o.formatArgs.call(O, j);
          var P = C.log || o.log || console.log.bind(console);
          P.apply(O, j);
        }
      }
      return C.namespace = k, C.enabled = o.enabled(k), C.useColors = o.useColors(), C.color = f(k), typeof o.init == "function" && o.init(C), C;
    }
    function p(k) {
      o.save(k), o.names = [], o.skips = [];
      for (var C = (typeof k == "string" ? k : "").split(/[\s,]+/), O = C.length, R = 0; R < O; R++)
        C[R] && (k = C[R].replace(/\*/g, ".*?"), k[0] === "-" ? o.skips.push(new RegExp("^" + k.substr(1) + "$")) : o.names.push(new RegExp("^" + k + "$")));
    }
    function g() {
      o.enable("");
    }
    function T(k) {
      var C, O;
      for (C = 0, O = o.skips.length; C < O; C++)
        if (o.skips[C].test(k))
          return !1;
      for (C = 0, O = o.names.length; C < O; C++)
        if (o.names[C].test(k))
          return !0;
      return !1;
    }
    function S(k) {
      return k instanceof Error ? k.stack || k.message : k;
    }
  })(ob, ob.exports)), ob.exports;
}
var f0;
function kk() {
  return f0 || (f0 = 1, (function(r, o) {
    var s = { env: { NODE_ENV: "production" } };
    o = r.exports = Tk(), o.log = p, o.formatArgs = c, o.save = g, o.load = T, o.useColors = f, o.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : S(), o.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function f() {
      return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    o.formatters.j = function(k) {
      try {
        return JSON.stringify(k);
      } catch (C) {
        return "[UnexpectedJSONParseError]: " + C.message;
      }
    };
    function c(k) {
      var C = this.useColors;
      if (k[0] = (C ? "%c" : "") + this.namespace + (C ? " %c" : " ") + k[0] + (C ? "%c " : " ") + "+" + o.humanize(this.diff), !!C) {
        var O = "color: " + this.color;
        k.splice(1, 0, O, "color: inherit");
        var R = 0, $ = 0;
        k[0].replace(/%[a-zA-Z%]/g, function(j) {
          j !== "%%" && (R++, j === "%c" && ($ = R));
        }), k.splice($, 0, O);
      }
    }
    function p() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function g(k) {
      try {
        k == null ? o.storage.removeItem("debug") : o.storage.debug = k;
      } catch {
      }
    }
    function T() {
      var k;
      try {
        k = o.storage.debug;
      } catch {
      }
      return !k && typeof s < "u" && "env" in s && (k = s.env.DEBUG), k;
    }
    o.enable(T());
    function S() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  })(ib, ib.exports)), ib.exports;
}
var sb, d0;
function Ek() {
  if (d0) return sb;
  d0 = 1;
  var r = kk()("jsonp");
  sb = f;
  var o = 0;
  function s() {
  }
  function f(c, p, g) {
    typeof p == "function" && (g = p, p = {}), p || (p = {});
    var T = p.prefix || "__jp", S = p.name || T + o++, k = p.param || "callback", C = p.timeout != null ? p.timeout : 6e4, O = encodeURIComponent, R = document.getElementsByTagName("script")[0] || document.head, $, j;
    C && (j = setTimeout(function() {
      V(), g && g(new Error("Timeout"));
    }, C));
    function V() {
      $.parentNode && $.parentNode.removeChild($), window[S] = s, j && clearTimeout(j);
    }
    function I() {
      window[S] && V();
    }
    return window[S] = function(P) {
      r("jsonp got", P), V(), g && g(null, P);
    }, c += (~c.indexOf("?") ? "&" : "?") + k + "=" + O(S), c = c.replace("?&", "?"), r('jsonp req "%s"', c), $ = document.createElement("script"), $.src = c, R.parentNode.insertBefore($, R), I;
  }
  return sb;
}
var xk = Ek();
const bc = /* @__PURE__ */ nv(xk);
var _k = Object.defineProperty, Ak = Object.defineProperties, zk = Object.getOwnPropertyDescriptors, bh = Object.getOwnPropertySymbols, J1 = Object.prototype.hasOwnProperty, eS = Object.prototype.propertyIsEnumerable, p0 = (r, o, s) => o in r ? _k(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[o] = s, gt = (r, o) => {
  for (var s in o || (o = {}))
    J1.call(o, s) && p0(r, s, o[s]);
  if (bh)
    for (var s of bh(o))
      eS.call(o, s) && p0(r, s, o[s]);
  return r;
}, Ft = (r, o) => Ak(r, zk(o)), Xt = (r, o) => {
  var s = {};
  for (var f in r)
    J1.call(r, f) && o.indexOf(f) < 0 && (s[f] = r[f]);
  if (r != null && bh)
    for (var f of bh(r))
      o.indexOf(f) < 0 && eS.call(r, f) && (s[f] = r[f]);
  return s;
};
class Nk extends Error {
  constructor(o) {
    super(o), this.name = "AssertionError";
  }
}
function ln(r, o) {
  if (!r)
    throw new Nk(o);
}
function jt(r) {
  const o = Object.entries(r).filter(([, s]) => s != null).map(([s, f]) => `${encodeURIComponent(s)}=${encodeURIComponent(String(f))}`);
  return o.length > 0 ? `?${o.join("&")}` : "";
}
const Ok = {
  bluesky: "Share on Bluesky",
  email: "Share by email",
  facebook: "Share on Facebook",
  facebookmessenger: "Share in Messenger",
  gab: "Share on Gab",
  hatena: "Share on Hatena",
  instapaper: "Save to Instapaper",
  line: "Share on Line",
  linkedin: "Share on LinkedIn",
  livejournal: "Share on LiveJournal",
  mailru: "Share on Mail.ru",
  ok: "Share on OK",
  pinterest: "Pin on Pinterest",
  pocket: "Save to Pocket",
  reddit: "Share on Reddit",
  telegram: "Share on Telegram",
  threads: "Share on Threads",
  tumblr: "Share on Tumblr",
  twitter: "Share on X",
  viber: "Share on Viber",
  vk: "Share on VK",
  weibo: "Share on Weibo",
  whatsapp: "Share on WhatsApp",
  workplace: "Share on Workplace"
}, Ck = (r) => !!r && (typeof r == "object" || typeof r == "function") && "then" in r && typeof r.then == "function", Rk = (r, o) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - r / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - o / 2
}), Dk = (r, o) => ({
  top: (window.screen.height - o) / 2,
  left: (window.screen.width - r) / 2
});
function Mk(r) {
  var o;
  const s = y1.toArray(r);
  if (s.length !== 1)
    return;
  const [f] = s;
  if (b1(f))
    return f.props.round ? "50%" : (o = f.props.borderRadius) != null ? o : 0;
}
function tS(r) {
  return y1.toArray(r).some((o) => typeof o == "string" ? o.trim().length > 0 : typeof o == "number" ? !0 : b1(o) ? tS(o.props.children) : !1);
}
function Lk(r, o, s) {
  var f = o, { height: c, width: p } = f, g = Xt(f, ["height", "width"]);
  const T = gt({
    height: c,
    width: p,
    location: "no",
    toolbar: "no",
    status: "no",
    directories: "no",
    menubar: "no",
    scrollbars: "yes",
    resizable: "no",
    centerscreen: "yes",
    chrome: "yes"
  }, g), S = window.open(
    r,
    "",
    Object.keys(T).map((k) => `${k}=${T[k]}`).join(", ")
  );
  if (s) {
    const k = window.setInterval(() => {
      try {
        (S === null || S.closed) && (window.clearInterval(k), s(S));
      } catch (C) {
        console.error(C);
      }
    }, 1e3);
  }
  return S;
}
function cn(r) {
  var o = r, {
    "aria-label": s,
    "aria-labelledby": f,
    beforeOnClick: c,
    children: p,
    className: g,
    disabled: T,
    disabledStyle: S = { opacity: 0.6 },
    forwardedRef: k,
    htmlTitle: C,
    networkLink: O,
    networkName: R,
    onClick: $,
    onShareWindowClose: j,
    openShareDialogOnClick: V = !0,
    opts: I,
    resetButtonStyle: P = !0,
    style: H,
    title: ce,
    type: J = "button",
    url: ne,
    windowHeight: Y = 400,
    windowPosition: F = "windowCenter",
    windowWidth: ee = 550
  } = o, Ee = Xt(o, [
    "aria-label",
    "aria-labelledby",
    "beforeOnClick",
    "children",
    "className",
    "disabled",
    "disabledStyle",
    "forwardedRef",
    "htmlTitle",
    "networkLink",
    "networkName",
    // deconstructed from ...rest to prevent passing it to the button element
    "onClick",
    "onShareWindowClose",
    "openShareDialogOnClick",
    "opts",
    "resetButtonStyle",
    "style",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "title",
    // deconstructed from ...rest to prevent passing it to the button element
    "type",
    "url",
    "windowHeight",
    "windowPosition",
    "windowWidth"
  ]);
  const He = Mk(p), qe = !s && !f && !tS(p) ? Ok[R] : void 0, Be = async (Qe) => {
    if (T)
      return;
    const U = O(ne, I);
    if (Qe.preventDefault(), c) {
      const L = c();
      Ck(L) && await L;
    }
    if (V) {
      const L = gt({
        height: Y,
        width: ee
      }, F === "windowCenter" ? Rk(ee, Y) : Dk(ee, Y));
      Lk(U, L, j);
    }
    $ && $(Qe, U);
  }, Ae = Go(
    "react-share__ShareButton",
    {
      "react-share__ShareButton--disabled": !!T,
      disabled: !!T
    },
    g
  ), yt = gt(gt(P ? {
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    display: "inline-flex",
    borderRadius: He,
    outlineOffset: 2,
    font: "inherit",
    color: "inherit",
    cursor: "pointer"
  } : {}, H), T && S);
  return /* @__PURE__ */ B.jsx(
    "button",
    Ft(gt({}, Ee), {
      "aria-label": s || qe,
      "aria-labelledby": f,
      className: Ae,
      disabled: T,
      onClick: Be,
      ref: k,
      style: yt,
      title: C,
      type: J,
      children: p
    })
  );
}
function jk(r, { title: o, separator: s }) {
  return ln(r, "bluesky.url"), "https://bsky.app/intent/compose" + jt({
    text: o ? o + s + r : r
  });
}
const Uk = rn(
  (r, o) => {
    var s = r, { separator: f, title: c } = s, p = Xt(s, ["separator", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "bluesky",
        networkLink: jk,
        opts: {
          title: c,
          separator: f || " "
        },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
Uk.displayName = "BlueskyShareButton";
function Hk(r, { subject: o, body: s, separator: f }) {
  return "mailto:" + jt({ subject: o, body: s ? s + f + r : r });
}
const Bk = rn(
  (r, o) => {
    var s = r, { body: f, separator: c, subject: p } = s, g = Xt(s, ["body", "separator", "subject"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, g), {
        forwardedRef: o,
        networkName: "email",
        networkLink: Hk,
        onClick: (T, S) => {
          window.location.href = S;
        },
        openShareDialogOnClick: !1,
        opts: {
          subject: p,
          body: f,
          separator: c || " "
        }
      })
    );
  }
);
Bk.displayName = "EmailShareButton";
function qk(r, { appId: o, redirectUri: s, to: f }) {
  return "https://www.facebook.com/dialog/send" + jt({
    link: r,
    redirect_uri: s || r,
    app_id: o,
    to: f
  });
}
const Vk = rn((r, o) => {
  var s = r, { appId: f, redirectUri: c, to: p } = s, g = Xt(s, ["appId", "redirectUri", "to"]);
  return /* @__PURE__ */ B.jsx(
    cn,
    Ft(gt({}, g), {
      forwardedRef: o,
      networkName: "facebookmessenger",
      networkLink: qk,
      opts: {
        appId: f,
        redirectUri: c,
        to: p
      },
      windowHeight: 820,
      windowWidth: 1e3
    })
  );
});
Vk.displayName = "FacebookMessengerShareButton";
function Gk(r, { hashtag: o }) {
  return ln(r, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + jt({ u: r, hashtag: o });
}
const Yk = rn(
  (r, o) => {
    var s = r, { hashtag: f } = s, c = Xt(s, ["hashtag"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "facebook",
        networkLink: Gk,
        opts: { hashtag: f },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
Yk.displayName = "FacebookShareButton";
function Fk() {
  const r = th(!1);
  return gi(() => (r.current = !0, () => {
    r.current = !1;
  }), []), Ob(() => r.current, []);
}
function Xk(r) {
  var o = r, {
    children: s = (R) => R,
    className: f,
    getCount: c,
    url: p
  } = o, g = Xt(o, [
    "children",
    "className",
    "getCount",
    "url"
  ]);
  const T = Fk(), [S, k] = Vo(void 0), [C, O] = Vo(!1);
  return gi(() => {
    O(!0), c(p, (R) => {
      T() && (k(R), O(!1));
    });
  }, [p]), /* @__PURE__ */ B.jsx("span", Ft(gt({ className: Go("react-share__ShareCount", f) }, g), { children: !C && S !== void 0 && s(S) }));
}
function vc(r) {
  const o = (s) => /* @__PURE__ */ B.jsx(Xk, gt({ getCount: r }, s));
  return o.displayName = `ShareCount(${r.name})`, o;
}
function Ik(r, o) {
  const s = `https://graph.facebook.com/?id=${r}&fields=og_object{engagement}`;
  bc(s, (f, c) => {
    o(
      !f && c && c.og_object && c.og_object.engagement ? c.og_object.engagement.count : void 0
    );
  });
}
vc(Ik);
function Qk(r, { title: o }) {
  return ln(r, "hatena.url"), `http://b.hatena.ne.jp/add?mode=confirm&url=${r}&title=${o}`;
}
const $k = rn(
  (r, o) => {
    var s = r, { title: f } = s, c = Xt(s, ["title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "hatena",
        networkLink: Qk,
        opts: { title: f },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
$k.displayName = "HatenaShareButton";
function Pk(r, o) {
  bc(
    "https://bookmark.hatenaapis.com/count/entry" + jt({
      url: r
    }),
    (s, f) => {
      o(f ?? void 0);
    }
  );
}
vc(Pk);
function Kk(r, { title: o, description: s }) {
  return ln(r, "instapaper.url"), "http://www.instapaper.com/hello2" + jt({
    url: r,
    title: o,
    description: s
  });
}
const Zk = rn(
  (r, o) => {
    var s = r, { description: f, title: c } = s, p = Xt(s, ["description", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "instapaper",
        networkLink: Kk,
        opts: {
          title: c,
          description: f
        },
        windowHeight: 500,
        windowPosition: "windowCenter",
        windowWidth: 500
      })
    );
  }
);
Zk.displayName = "InstapaperShareButton";
function Wk(r, { title: o }) {
  return ln(r, "line.url"), "https://social-plugins.line.me/lineit/share" + jt({
    url: r,
    text: o
  });
}
const Jk = rn(
  (r, o) => {
    var s = r, { title: f } = s, c = Xt(s, ["title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "line",
        networkLink: Wk,
        opts: { title: f },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
Jk.displayName = "LineShareButton";
function eE(r, { title: o, summary: s, source: f }) {
  return ln(r, "linkedin.url"), "https://linkedin.com/shareArticle" + jt({ url: r, mini: "true", title: o, summary: s, source: f });
}
const tE = rn(
  (r, o) => {
    var s = r, { source: f, summary: c, title: p } = s, g = Xt(s, ["source", "summary", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, g), {
        forwardedRef: o,
        networkName: "linkedin",
        networkLink: eE,
        opts: { title: p, summary: c, source: f },
        windowHeight: 600,
        windowWidth: 750
      })
    );
  }
);
tE.displayName = "LinkedinShareButton";
function nE(r, { title: o, description: s }) {
  return ln(r, "livejournal.url"), "https://www.livejournal.com/update.bml" + jt({
    subject: o,
    event: s
  });
}
const aE = rn(
  (r, o) => {
    var s = r, { description: f, title: c } = s, p = Xt(s, ["description", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "livejournal",
        networkLink: nE,
        opts: {
          title: c,
          description: f
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
aE.displayName = "LivejournalShareButton";
function lE(r, { title: o, description: s, imageUrl: f }) {
  return ln(r, "mailru.url"), "https://connect.mail.ru/share" + jt({
    url: r,
    title: o,
    description: s,
    image_url: f
  });
}
const rE = rn(
  (r, o) => {
    var s = r, { description: f, imageUrl: c, title: p } = s, g = Xt(s, ["description", "imageUrl", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, g), {
        forwardedRef: o,
        networkName: "mailru",
        networkLink: lE,
        opts: {
          title: p,
          description: f,
          imageUrl: c
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
rE.displayName = "MailruShareButton";
function iE(r, { title: o, description: s, image: f }) {
  return ln(r, "ok.url"), "https://connect.ok.ru/offer" + jt({
    url: r,
    title: o,
    description: s,
    imageUrl: f
  });
}
const oE = rn(
  (r, o) => {
    var s = r, { description: f, image: c, title: p } = s, g = Xt(s, ["description", "image", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, g), {
        forwardedRef: o,
        networkName: "ok",
        networkLink: iE,
        opts: {
          title: p,
          description: f,
          image: c
        },
        windowHeight: 480,
        windowPosition: "screenCenter",
        windowWidth: 588
      })
    );
  }
);
oE.displayName = "OKShareButton";
function uE(r, o) {
  window.OK || (window.OK = {
    Share: {
      count: function(c, p) {
        var g, T;
        (T = (g = window.OK.callbacks)[c]) == null || T.call(g, p);
      }
    },
    callbacks: []
  });
  const s = "https://connect.ok.ru/dk", f = window.OK.callbacks.length;
  return window.ODKL = {
    updateCount(c, p) {
      var g, T;
      const S = c === "" ? 0 : parseInt(c.replace("react-share-", ""), 10);
      (T = (g = window.OK.callbacks)[S]) == null || T.call(g, p === "" ? void 0 : parseInt(p, 10));
    }
  }, window.OK.callbacks.push(o), bc(
    s + jt({
      "st.cmd": "extLike",
      uid: `react-share-${f}`,
      ref: r
    })
  );
}
vc(uE);
function sE(r, { media: o, description: s, pinId: f }) {
  return f ? `https://pinterest.com/pin/${f}/repin/x/` : (ln(r, "pinterest.url"), ln(o, "pinterest.media"), "https://pinterest.com/pin/create/button/" + jt({
    url: r,
    media: o,
    description: s
  }));
}
const cE = rn(
  (r, o) => {
    var s = r, { description: f, media: c, pinId: p } = s, g = Xt(s, ["description", "media", "pinId"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, g), {
        forwardedRef: o,
        networkName: "pinterest",
        networkLink: sE,
        opts: {
          media: c,
          description: f,
          pinId: p
        },
        windowHeight: 730,
        windowWidth: 1e3
      })
    );
  }
);
cE.displayName = "PinterestShareButton";
function fE(r, o) {
  bc(
    "https://api.pinterest.com/v1/urls/count.json" + jt({
      url: r
    }),
    (s, f) => {
      o(f ? f.count : void 0);
    }
  );
}
vc(fE);
function dE(r, { title: o }) {
  return ln(r, "pocket.url"), "https://getpocket.com/save" + jt({
    url: r,
    title: o
  });
}
const pE = rn(
  (r, o) => {
    var s = r, { title: f } = s, c = Xt(s, ["title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "pocket",
        networkLink: dE,
        opts: { title: f },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
pE.displayName = "PocketShareButton";
function mE(r, { title: o }) {
  return ln(r, "reddit.url"), "https://www.reddit.com/submit" + jt({
    url: r,
    title: o
  });
}
const hE = rn(
  (r, o) => {
    var s = r, { title: f } = s, c = Xt(s, ["title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "reddit",
        networkLink: mE,
        opts: { title: f },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
hE.displayName = "RedditShareButton";
function gE(r, { title: o }) {
  return ln(r, "gab.url"), "https://gab.com/compose" + jt({
    url: r,
    text: o
  });
}
const yE = rn(
  (r, o) => {
    var s = r, { title: f } = s, c = Xt(s, ["title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "gab",
        networkLink: gE,
        opts: { title: f },
        windowHeight: 640,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
yE.displayName = "GabShareButton";
function bE(r, o) {
  const s = `https://www.reddit.com/api/info.json?limit=1&url=${r}`;
  bc(s, { param: "jsonp" }, (f, c) => {
    o(
      !f && c && c.data && c.data.children.length > 0 && c.data.children[0].data.score ? c.data.children[0].data.score : void 0
    );
  });
}
vc(bE);
function vE(r, { title: o }) {
  return ln(r, "telegram.url"), "https://telegram.me/share/url" + jt({
    url: r,
    text: o
  });
}
const SE = rn(
  (r, o) => {
    var s = r, { title: f } = s, c = Xt(s, ["title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "telegram",
        networkLink: vE,
        opts: { title: f },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
SE.displayName = "TelegramShareButton";
function wE(r, { title: o }) {
  return ln(r, "threads.url"), "https://threads.net/intent/post" + jt({
    url: r,
    text: o
  });
}
const TE = rn(
  (r, o) => {
    var s = r, { hashtags: f, related: c, title: p, via: g } = s, T = Xt(s, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, T), {
        forwardedRef: o,
        networkName: "threads",
        networkLink: wE,
        opts: { title: p },
        windowHeight: 600,
        windowWidth: 550
      })
    );
  }
);
TE.displayName = "ThreadsShareButton";
function kE(r, {
  title: o,
  caption: s,
  tags: f,
  posttype: c
}) {
  return ln(r, "tumblr.url"), "https://www.tumblr.com/widgets/share/tool" + jt({
    canonicalUrl: r,
    title: o,
    caption: s,
    tags: f,
    posttype: c
  });
}
const EE = rn(
  (r, o) => {
    var s = r, { caption: f, posttype: c, tags: p, title: g } = s, T = Xt(s, ["caption", "posttype", "tags", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, T), {
        forwardedRef: o,
        networkName: "tumblr",
        networkLink: kE,
        opts: {
          title: g,
          tags: (p || []).join(","),
          caption: f,
          posttype: c || "link"
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
EE.displayName = "TumblrShareButton";
function xE(r, o) {
  return bc(
    "https://api.tumblr.com/v2/share/stats" + jt({
      url: r
    }),
    (s, f) => {
      o(!s && f && f.response ? f.response.note_count : void 0);
    }
  );
}
vc(xE);
function _E(r, {
  title: o,
  via: s,
  hashtags: f = [],
  related: c = []
}) {
  return ln(r, "x.url"), ln(Array.isArray(f), "x.hashtags is not an array"), ln(Array.isArray(c), "x.related is not an array"), "https://twitter.com/intent/tweet" + jt({
    url: r,
    text: o,
    via: s,
    hashtags: f.length > 0 ? f.join(",") : void 0,
    related: c.length > 0 ? c.join(",") : void 0
  });
}
const nS = rn(
  (r, o) => {
    var s = r, { hashtags: f, related: c, title: p, via: g } = s, T = Xt(s, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, T), {
        forwardedRef: o,
        networkName: "twitter",
        networkLink: _E,
        opts: {
          hashtags: f,
          title: p,
          via: g,
          related: c
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
nS.displayName = "XShareButton";
const AE = rn((r, o) => /* @__PURE__ */ B.jsx(nS, Ft(gt({}, r), { ref: o })));
AE.displayName = "TwitterShareButton";
function zE(r, { title: o, separator: s }) {
  return ln(r, "viber.url"), "viber://forward" + jt({
    text: o ? o + s + r : r
  });
}
const NE = rn(
  (r, o) => {
    var s = r, { separator: f, title: c } = s, p = Xt(s, ["separator", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "viber",
        networkLink: zE,
        opts: {
          title: c,
          separator: f || " "
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
NE.displayName = "ViberShareButton";
function OE(r, { title: o, image: s, noParse: f, noVkLinks: c }) {
  return ln(r, "vk.url"), "https://vk.com/share.php" + jt({
    url: r,
    title: o,
    image: s,
    noparse: f ? 1 : 0,
    no_vk_links: c ? 1 : 0
  });
}
const CE = rn(
  (r, o) => {
    var s = r, { image: f, noParse: c, noVkLinks: p, title: g } = s, T = Xt(s, ["image", "noParse", "noVkLinks", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, T), {
        forwardedRef: o,
        networkName: "vk",
        networkLink: OE,
        opts: {
          title: g,
          image: f,
          noParse: c,
          noVkLinks: p
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
CE.displayName = "VKShareButton";
function RE(r, o) {
  window.VK || (window.VK = {}), window.VK.Share = {
    count: (c, p) => {
      var g, T;
      return (T = (g = window.VK.callbacks) == null ? void 0 : g[c]) == null ? void 0 : T.call(g, p);
    }
  }, window.VK.callbacks = [];
  const s = "https://vk.com/share.php", f = window.VK.callbacks.length;
  return window.VK.callbacks.push(o), bc(
    s + jt({
      act: "count",
      index: f,
      url: r
    })
  );
}
vc(RE);
function DE(r, { title: o, image: s }) {
  return ln(r, "weibo.url"), "http://service.weibo.com/share/share.php" + jt({
    url: r,
    title: o,
    pic: s
  });
}
const ME = rn(
  (r, o) => {
    var s = r, { image: f, title: c } = s, p = Xt(s, ["image", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "weibo",
        networkLink: DE,
        opts: {
          title: c,
          image: f
        },
        windowHeight: 550,
        windowPosition: "screenCenter",
        windowWidth: 660
      })
    );
  }
);
ME.displayName = "WeiboShareButton";
function LE(r, { title: o, separator: s }) {
  return ln(r, "whatsapp.url"), "https://api.whatsapp.com/send" + jt({
    text: o ? o + s + r : r
  });
}
const jE = rn(
  (r, o) => {
    var s = r, { separator: f, title: c } = s, p = Xt(s, ["separator", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "whatsapp",
        networkLink: LE,
        opts: {
          title: c,
          separator: f || " "
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
jE.displayName = "WhatsappShareButton";
function UE(r, { quote: o, hashtag: s }) {
  return ln(r, "workplace.url"), "https://work.facebook.com/sharer.php" + jt({
    u: r,
    quote: o,
    hashtag: s
  });
}
const HE = rn(
  (r, o) => {
    var s = r, { hashtag: f, quote: c } = s, p = Xt(s, ["hashtag", "quote"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "workplace",
        networkLink: UE,
        opts: {
          quote: c,
          hashtag: f
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
HE.displayName = "WorkplaceShareButton";
Ti.div`
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
Ti.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`;
h.oneOf(["event", "news"]), h.string.isRequired, h.string.isRequired, h.string.isRequired, h.string.isRequired, h.string, h.string.isRequired, h.string, h.string, h.arrayOf(
  h.shape({
    title: h.string,
    url: h.string,
    active: h.bool
  })
), h.string, h.string, h.string, h.string, h.string, h.string;
h.oneOf(["white", "gray", "black"]), h.arrayOf(h.string), h.oneOfType([
  h.object,
  h.func,
  h.string
]), h.func, h.string, h.oneOf(["large", "small"]), h.string;
const BE = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, aS = ({
  label: r = "",
  cardTitle: o = "",
  gaData: s,
  ariaLabel: f,
  color: c = "gray",
  disabled: p,
  element: g = "button",
  innerRef: T,
  href: S,
  onClick: k,
  ...C
}) => {
  const O = Go("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: p
  });
  let R = g;
  return S && g === "button" && (R = "a"), /* @__PURE__ */ B.jsx(
    wi,
    {
      gaData: {
        ...BE,
        section: o,
        // @deprecated - remove at some point
        ...s,
        text: r
      },
      children: /* @__PURE__ */ B.jsx(
        R,
        {
          type: R === "button" && k ? "button" : void 0,
          ...C,
          className: O,
          href: S,
          ref: T,
          onClick: k,
          "aria-label": f,
          children: r
        }
      )
    }
  );
};
aS.propTypes = {
  /**
    Button tag label
  */
  label: h.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: h.string,
  /**
   * Google Analytics event data
   */
  gaData: av,
  /**
    ARIA label for accessibility
  */
  ariaLabel: h.string,
  /**
    Button background color
  */
  color: h.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: h.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: h.oneOfType([
    h.func,
    h.string,
    h.shape({ $$typeof: h.symbol, render: h.func }),
    h.arrayOf(
      h.oneOfType([
        h.func,
        h.string,
        h.shape({ $$typeof: h.symbol, render: h.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: h.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: h.oneOfType([
    h.object,
    h.func,
    h.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: h.func
};
const lS = ({
  src: r,
  alt: o,
  cssClasses: s,
  loading: f = "lazy",
  decoding: c = "async",
  dataTestId: p,
  fetchPriority: g = "auto",
  width: T,
  height: S,
  cardLink: k,
  title: C,
  caption: O,
  captionTitle: R,
  buttons: $,
  border: j,
  dropShadow: V
}) => {
  const I = {
    src: r,
    alt: o,
    loading: f,
    decoding: c,
    fetchpriority: g,
    // React attribute bug workaround
    ...(s == null ? void 0 : s.length) > 0 && { className: bw(s) },
    ...p && { "data-testid": p },
    ...T && { width: T },
    ...S && { height: S }
  }, P = Go("uds-img", {
    borderless: !j,
    "uds-img-drop-shadow": V
  }), H = (J) => {
    const ne = J ? `${I.className} ${J}` : I.className;
    return k ? /* @__PURE__ */ B.jsxs("a", { href: k, children: [
      /* @__PURE__ */ B.jsx("img", { ...I, className: ne }),
      /* @__PURE__ */ B.jsx("span", { className: "visually-hidden", children: C })
    ] }) : /* @__PURE__ */ B.jsx("img", { ...I, className: ne });
  }, ce = () => /* @__PURE__ */ B.jsx(B.Fragment, { children: $ && /* @__PURE__ */ B.jsx("div", { className: "card-buttons", style: { marginTop: O ? 20 : 0 }, children: $.map((J) => /* @__PURE__ */ B.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ B.jsx(
        lv,
        {
          ariaLabel: J.ariaLabel,
          color: J.color,
          icon: J.icon,
          href: J.href,
          label: J.label,
          onClick: J.onClick,
          size: J.size,
          target: J.target,
          cardTitle: C
        }
      )
    },
    `${J.label}-${J.href}`
  )) }) });
  return $ || O ? /* @__PURE__ */ B.jsx("div", { className: P, children: /* @__PURE__ */ B.jsxs("figure", { className: "figure uds-figure", children: [
    H(),
    /* @__PURE__ */ B.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      R && /* @__PURE__ */ B.jsx("h3", { children: R }),
      O && /* @__PURE__ */ B.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ac(O)
        }
      ),
      ce()
    ] })
  ] }) }) : H(P);
};
lS.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: h.string.isRequired,
  /**
   * Image alt text
   */
  alt: h.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: h.arrayOf(h.string),
  /**
   * Image loading mode
   */
  loading: h.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: h.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: h.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: h.string,
  /**
   * Height of the image
   */
  height: h.string,
  dataTestId: h.string,
  cardLink: h.string,
  title: h.string,
  caption: h.string,
  captionTitle: h.string,
  border: h.bool,
  dropShadow: h.bool
};
const qE = Ti.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, VE = (r) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(r), GE = (r) => !r.startsWith("https://") && !r.startsWith("http://") && VE(r) ? `mailto:${r}` : r, m0 = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, rS = (r) => r === "event" || r === "news", qo = ({
  type: r = "default",
  width: o = "100%",
  horizontal: s = !1,
  image: f,
  imageAltText: c,
  title: p,
  icon: g,
  body: T,
  eventFormat: S = "stack",
  eventLocation: k,
  eventTime: C,
  buttons: O,
  linkLabel: R,
  linkUrl: $,
  tags: j,
  showBorders: V = !0,
  cardLink: I
}) => /* @__PURE__ */ B.jsx(
  iS,
  {
    type: r,
    width: o,
    horizontal: s,
    image: f,
    imageAltText: c,
    title: p,
    icon: g,
    body: T,
    eventFormat: S,
    eventLocation: k,
    eventTime: C,
    buttons: O,
    linkLabel: R,
    linkUrl: $,
    tags: j,
    showBorders: V,
    cardLink: I
  }
);
qo.propTypes = {
  /**
   * Type of card
   */
  type: h.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: h.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: h.bool,
  /**
   * Card title
   */
  title: h.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: h.arrayOf(h.string),
  /**
   * Card body content
   */
  body: h.string,
  /**
   * Event info format
   */
  eventFormat: h.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: h.string,
  /**
   * Event start time
   */
  eventTime: h.string,
  /**
   * Card header image
   */
  image: h.string,
  /**
   * Card header image alt text
   */
  imageAltText: h.string,
  /**
   * Buttons
   */
  buttons: h.arrayOf(
    h.shape({
      ariaLabel: h.string,
      color: h.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: h.arrayOf(h.string),
      href: h.string,
      label: h.string,
      onClick: h.func,
      size: h.oneOf(["default", "small", "xsmall"]),
      target: h.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: h.string,
  linkUrl: h.string,
  /**
   * Tags
   */
  tags: h.arrayOf(
    h.shape({
      ariaLabel: h.string,
      color: h.oneOf(["white", "gray", "dark"]),
      href: h.string,
      label: h.string,
      onClick: h.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: h.bool,
  /**
   * Card link
   */
  cardLink: h.string
};
const iS = ({
  type: r = "default",
  width: o = "100%",
  horizontal: s = !1,
  image: f = "",
  imageAltText: c = "",
  title: p,
  icon: g = void 0,
  body: T = "",
  eventFormat: S = "stack",
  eventLocation: k = "",
  eventTime: C = "",
  buttons: O = void 0,
  linkLabel: R = void 0,
  linkUrl: $ = void 0,
  tags: j = void 0,
  showBorders: V = !0,
  cardLink: I
}) => {
  const P = Go("card", "cards-components", {
    "card-degree": r === "degree",
    "card-event": r === "event",
    "card-story": r === "story",
    "card-news": r === "news",
    [`w-${o.replace("%", "")}`]: o !== "100%",
    "card-horizontal": s,
    borderless: !V
  }), H = typeof f == "string" && f.length > 0, ce = !rS(r);
  return /* @__PURE__ */ B.jsxs(qE, { className: P, "data-testid": "card-container", children: [
    H && /* @__PURE__ */ B.jsx(
      lS,
      {
        src: f,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        title: p,
        cardLink: ce ? I : void 0
      }
    ),
    !f && g && /* @__PURE__ */ B.jsx(
      "i",
      {
        className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    /* @__PURE__ */ B.jsx("div", { className: s ? "card-content-wrapper" : void 0, children: /* @__PURE__ */ B.jsx(
      oS,
      {
        type: r,
        body: T,
        eventFormat: S,
        eventLocation: k,
        eventTime: C,
        title: p,
        buttons: O,
        linkLabel: R,
        linkUrl: $,
        tags: j,
        cardLink: I
      }
    ) })
  ] });
};
iS.propTypes = {
  type: h.oneOf(["default", "degree", "event", "news", "story"]),
  width: h.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: h.bool,
  title: h.string.isRequired,
  icon: h.arrayOf(h.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: h.string,
  eventFormat: h.oneOf(["stack", "inline"]),
  eventLocation: h.string,
  eventTime: h.string,
  image: h.string,
  imageAltText: h.string,
  buttons: h.arrayOf(
    h.shape({
      ariaLabel: h.string,
      color: h.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: h.arrayOf(h.string),
      href: h.string,
      label: h.string,
      onClick: h.func,
      size: h.oneOf(["default", "small", "xsmall"]),
      target: h.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: h.string,
  linkUrl: h.string,
  tags: h.arrayOf(
    h.shape({
      ariaLabel: h.string,
      color: h.oneOf(["white", "gray", "dark"]),
      href: h.string,
      label: h.string,
      onClick: h.func
    })
  ),
  showBorders: h.bool,
  cardLink: h.string
};
const oS = ({
  type: r = "default",
  body: o = "",
  eventFormat: s = "stack",
  eventLocation: f = "",
  eventTime: c = "",
  title: p,
  buttons: g = void 0,
  linkLabel: T = void 0,
  linkUrl: S = void 0,
  tags: k = void 0,
  cardLink: C
}) => {
  const O = rS(r), R = C && !O, $ = O && C, j = r === "event" && (c || f);
  return /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    p && /* @__PURE__ */ B.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ B.jsx("h3", { className: "card-title", children: R ? /* @__PURE__ */ B.jsx("a", { href: C, children: p }) : p }) }),
    o && /* @__PURE__ */ B.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Ac(o) }) }),
    j && /* @__PURE__ */ B.jsx(
      uS,
      {
        eventFormat: s,
        eventTime: c,
        eventLocation: f
      }
    ),
    $ ? /* @__PURE__ */ B.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ B.jsx(
      wi,
      {
        gaData: {
          ...m0,
          text: p
        },
        children: /* @__PURE__ */ B.jsx("a", { href: C, className: "card-arrow-link", "aria-label": p, children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-arrow-right", "aria-hidden": "true" }) })
      }
    ) }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      !p && !o && !j && /* @__PURE__ */ B.jsx("br", {}),
      g && /* @__PURE__ */ B.jsx("div", { className: "card-buttons", children: g.map((V) => /* @__PURE__ */ B.jsx(
        "div",
        {
          className: "card-button",
          "data-testid": "card-button",
          children: /* @__PURE__ */ B.jsx(
            lv,
            {
              ariaLabel: V.ariaLabel,
              color: V.color,
              icon: V.icon,
              href: V.href,
              label: V.label,
              onClick: V.onClick,
              size: V.size,
              target: V.target,
              cardTitle: p
            }
          )
        },
        `${V.label}-${V.href}`
      )) }),
      S && T && /* @__PURE__ */ B.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ B.jsx(
        wi,
        {
          gaData: {
            ...m0,
            section: p,
            text: T
          },
          children: /* @__PURE__ */ B.jsx("a", { href: GE(S), children: T })
        }
      ) })
    ] }),
    k && /* @__PURE__ */ B.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: k.map((V) => (
      // @ts-ignore
      /* @__PURE__ */ B.jsx(
        aS,
        {
          ariaLabel: V.ariaLabel,
          color: V.color,
          href: V.href,
          label: V.label,
          onClick: V.onClick,
          cardTitle: p
        },
        `${V.label}-${V.href}`
      )
    )) })
  ] });
};
oS.propTypes = {
  type: h.oneOf(["default", "degree", "event", "news", "story"]),
  body: h.string,
  eventFormat: h.oneOf(["stack", "inline"]),
  eventLocation: h.string,
  eventTime: h.string,
  title: h.string.isRequired,
  buttons: h.arrayOf(
    h.shape({
      ariaLabel: h.string,
      color: h.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: h.arrayOf(h.string),
      href: h.string,
      label: h.string,
      onClick: h.func,
      size: h.oneOf(["default", "small", "xsmall"]),
      target: h.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: h.string,
  linkUrl: h.string,
  tags: h.arrayOf(
    h.shape({
      ariaLabel: h.string,
      color: h.oneOf(["white", "gray", "dark"]),
      href: h.string,
      label: h.string,
      onClick: h.func
    })
  ),
  cardLink: h.string
};
const uS = ({
  eventFormat: r = "stack",
  eventLocation: o = "",
  eventTime: s = ""
}) => r === "inline" ? /* @__PURE__ */ B.jsxs("div", { className: "card-event-details", children: [
  s && /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Ac(s) })
  ] }),
  o && /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ B.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ac(o)
      }
    )
  ] })
] }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
  s && /* @__PURE__ */ B.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Ac(s) })
  ] }) }),
  o && /* @__PURE__ */ B.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ B.jsx("span", { children: /* @__PURE__ */ B.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ac(o)
      }
    ) })
  ] }) })
] });
uS.propTypes = {
  eventFormat: h.oneOf(["stack", "inline"]),
  eventLocation: h.string,
  eventTime: h.string
};
h.oneOf(["small", "large"]), h.string.isRequired, h.string.isRequired, h.string;
h.oneOf(["small", "large"]).isRequired, h.string.isRequired, h.string.isRequired, h.string.isRequired, h.string.isRequired, h.string, h.string;
h.arrayOf(h.object).isRequired, h.oneOf(["card", "ranking", "image"]), h.oneOf([1, 2, 3, 4, "1", "2", "3", "4"]);
h.string.isRequired, h.oneOfType([
  h.string,
  h.arrayOf(h.string)
]), h.node.isRequired, h.string, h.string, h.shape({
  label: h.string.isRequired,
  href: h.string.isRequired,
  color: h.string
});
const YE = Ti.div`
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
`, FE = () => /* @__PURE__ */ B.jsxs(YE, { children: [
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {})
] }), XE = Ti.section``, Oh = ow(null), sS = ({
  defaultProps: r,
  dataSource: o,
  noFeedText: s,
  renderHeader: f,
  renderBody: c,
  dataTransformer: p,
  dataFilter: g,
  maxItems: T
}) => {
  const [{ data: S, loading: k, error: C }, O] = yw(), [R, $] = Vo([]), j = { ...r.dataSource, ...o };
  return gi(() => {
    O(j == null ? void 0 : j.url);
  }, [j == null ? void 0 : j.url]), gi(() => {
    const V = S == null ? void 0 : S.nodes.map(p), I = V == null ? void 0 : V.filter(
      (P) => g(P, o == null ? void 0 : o.filters)
    );
    $(T ? I == null ? void 0 : I.slice(0, T) : I);
  }, [S]), // Init the context to be used on its childrens
  /* @__PURE__ */ B.jsx(Oh.Provider, { value: { feeds: R }, children: /* @__PURE__ */ B.jsxs(XE, { children: [
    f,
    C ? /* @__PURE__ */ B.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      k && !(R != null && R.length) && /* @__PURE__ */ B.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ B.jsx(FE, {}) }),
      R != null && R.length ? c : !k && /* @__PURE__ */ B.jsx("p", { className: "text-center", children: s })
    ] })
  ] }) });
};
sS.propTypes = {
  renderHeader: h.element,
  renderBody: h.element,
  maxItems: h.number,
  dataTransformer: h.func,
  dataFilter: h.func,
  noFeedText: h.string
};
const cv = h.shape({
  color: h.oneOf(["white", "dark"]),
  text: h.string
}), fv = h.shape({
  color: h.oneOf(["gold", "maroon", "gray", "dark"]),
  text: h.string
}), cS = h.shape({
  color: h.oneOf(["gold", "maroon", "gray", "dark"]),
  text: h.string,
  size: h.string
}), fS = h.shape({
  url: h.string,
  filters: h.string
}), IE = h.shape({
  header: cv,
  ctaButton: fv,
  dataSource: fS,
  maxItems: h.number
}), QE = Ti.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, dS = ({
  defaultProps: r,
  header: o,
  ctaButton: s
}) => {
  const f = { ...r.header, ...o }, c = { ...r.ctaButton, ...s }, p = f.tag || "h2", g = p !== "h2", T = `text-${f.color} ${g ? "h2" : ""}`.trim();
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ B.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ B.jsx(p, { className: T, children: f.text }) }),
        /* @__PURE__ */ B.jsx(QE, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ B.jsx(
          wi,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: f.text,
              text: c.text
            },
            children: /* @__PURE__ */ B.jsx("a", { className: `btn btn-${c.color}`, href: c.url, children: c.text })
          }
        ) })
      ]
    }
  );
};
dS.propTypes = {
  defaultProps: IE,
  header: cv,
  ctaButton: fv
};
const pS = ({ children: r }) => /* @__PURE__ */ B.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ B.jsx("div", { className: "col", children: r }) });
pS.propTypes = {
  children: h.element
};
Ti.img`
  width: 100%;
`;
h.oneOf(["heading-hero", "story-hero"]), h.arrayOf(Wy), h.string;
h.bool, h.bool, h.bool, h.bool, h.string, h.func, h.node, h.bool, h.string, h.bool;
h.oneOf(["default", "bordered"]).isRequired, h.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, h.number, h.number, h.func.isRequired;
Ti.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }

  .scroll-control-prev,
  .scroll-control-next {
    outline: none;
    border: none;
    width: 80px;
    position: absolute;
    height: 100%;
    top: 0;
  }

  .scroll-control-prev {
    background: linear-gradient(
      90deg,
      rgba(25, 25, 25, 0.25) 0%,
      rgba(25, 25, 25, 0) 100%
    );
    left: 0;
  }

  .scroll-control-next {
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(25, 25, 25, 0) 0%,
      rgba(25, 25, 25, 0.25) 100%
    );

    .carousel-control-next-icon {
      margin: 0 12px 0 42px;
    }
  }

  .scroll-control-prev .carousel-control-prev-icon,
  .scroll-control-next .carousel-control-next-icon {
    background-size: 60% 60%;
    display: block;
    opacity: 1;
    padding: 12px;
    position: relative;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    background-color: #fafafa; // $asu-gray-7
    border: solid 1px #d0d0d0; // $asu-gray-5
    border-radius: 100%;
    color: #000;
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' data-fa-i2svg=''><path fill='currentColor' d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path></svg>");
    background-position: 80% 50%;
  }

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' data-fa-i2svg=''><path fill='currentColor' d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'></path></svg>");
    background-position: 60% 50%;
  }

  @media screen and (max-width: 768px) {
    // $uds-breakpoint-md
    .scroll-control-prev,
    .scroll-control-next {
      width: 48px;
    }

    .scroll-control-next .carousel-control-next-icon,
    .scroll-control-prev .carousel-control-prev-icon {
      margin: 0px 12px 0px 8px;
    }

    .scroll-control-prev .carousel-control-prev-icon {
      margin-left: 0px;
    }
  }
`;
h.object, h.bool, h.bool, h.func.isRequired;
const $E = ht.forwardRef(({
  overflowTabs: r,
  idToChild: o,
  activeTabID: s,
  selectTab: f,
  gaData: c,
  openRight: p = !1
}, g) => {
  const [T, S] = Vo(!1), k = th(null), C = th(null), O = th([]), R = Array.isArray(r) ? r : [], $ = g1(), j = R.includes(s ?? ""), V = R.map((Y) => {
    const F = o == null ? void 0 : o[Y];
    return F ? {
      id: Y,
      title: F.props.title,
      icon: F.props.icon ?? null
    } : { id: Y, title: Y, icon: null };
  }), I = Ob((Y = !0) => {
    var F;
    S(!1), Y && ((F = C.current) == null || F.focus());
  }, []), P = (Y) => {
    Y.preventDefault(), S((F) => !F);
  };
  gi(() => {
    function Y(F) {
      var ee;
      (ee = k.current) != null && ee.contains(F.target) || S(!1);
    }
    return document.addEventListener("mousedown", Y), () => document.removeEventListener("mousedown", Y);
  }, []);
  const H = Ob(
    (Y, F) => {
      var ee, Ee;
      switch (Y.key) {
        case "ArrowDown": {
          Y.preventDefault();
          const He = O.current[F + 1] ?? O.current[0];
          He == null || He.focus();
          break;
        }
        case "ArrowUp": {
          Y.preventDefault();
          const He = O.current[F - 1] ?? O.current[V.length - 1];
          He == null || He.focus();
          break;
        }
        case "Home":
          Y.preventDefault(), (ee = O.current[0]) == null || ee.focus();
          break;
        case "End":
          Y.preventDefault(), (Ee = O.current[V.length - 1]) == null || Ee.focus();
          break;
        case "Escape":
          Y.preventDefault(), I();
          break;
        case "Tab":
          S(!1);
          break;
      }
    },
    [V.length, I]
  ), ce = (Y, F, ee) => {
    Y.preventDefault(), I(!1), f == null || f(Y, F, ee);
  }, J = V.length === 0, ne = (Y) => {
    k.current = Y, typeof g == "function" ? g(Y) : g && (g.current = Y);
  };
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      ref: ne,
      className: `uds-more-dropdown${p ? " dropdown-open-right" : ""}${J ? " uds-more-dropdown-hidden" : ""}`,
      "aria-hidden": J || void 0,
      children: [
        /* @__PURE__ */ B.jsx(wi, { gaData: c ?? {}, children: /* @__PURE__ */ B.jsxs(
          "button",
          {
            ref: C,
            type: "button",
            onClick: P,
            onKeyDown: (Y) => {
              var F, ee;
              Y.key === "Enter" || Y.key === " " ? (Y.preventDefault(), T ? I() : (S(!0), requestAnimationFrame(() => {
                var Ee;
                return (Ee = O.current[0]) == null ? void 0 : Ee.focus();
              }))) : T && Y.key === "ArrowDown" ? (Y.preventDefault(), (F = O.current[0]) == null || F.focus()) : T && Y.key === "ArrowUp" ? (Y.preventDefault(), (ee = O.current[V.length - 1]) == null || ee.focus()) : T && Y.key === "Escape" && (Y.preventDefault(), I());
            },
            "aria-haspopup": "true",
            "aria-expanded": T,
            "aria-controls": $,
            "aria-label": `More, ${V.length} additional tab${V.length !== 1 ? "s" : ""}`,
            className: `uds-tab more-dropdown-button${j ? " active" : ""}`,
            children: [
              /* @__PURE__ */ B.jsxs("span", { className: "more-dropdown-button-inner", children: [
                /* @__PURE__ */ B.jsx("span", { "aria-hidden": "true", children: "More" }),
                /* @__PURE__ */ B.jsx(
                  "i",
                  {
                    "aria-hidden": "true",
                    className: "fas fa-chevron-down more-dropdown-icon"
                  }
                )
              ] }),
              /* @__PURE__ */ B.jsx("span", { className: "more-dropdown-button-indicator", "aria-hidden": "true" })
            ]
          }
        ) }),
        /* @__PURE__ */ B.jsx(
          "ul",
          {
            id: $,
            role: "menu",
            "aria-label": "More tabs",
            "aria-hidden": !T,
            className: `more-dropdown-menu uds-more-dropdown-list${T ? " open" : ""}`,
            children: V.map((Y, F) => {
              const ee = Y.id === s;
              return /* @__PURE__ */ B.jsx("li", { role: "none", children: /* @__PURE__ */ B.jsxs(
                "button",
                {
                  ref: (Ee) => {
                    Ee && (O.current[F] = Ee);
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: -1,
                  onClick: (Ee) => ce(Ee, Y.id, Y.title),
                  onKeyDown: (Ee) => H(Ee, F),
                  className: "more-dropdown-item",
                  "aria-current": ee || void 0,
                  children: [
                    Y.icon && /* @__PURE__ */ B.jsx(
                      "i",
                      {
                        "aria-hidden": "true",
                        className: `${Y.icon[0]} fa-${Y.icon[1]} me-1`
                      }
                    ),
                    Y.title
                  ]
                }
              ) }, Y.id);
            })
          }
        )
      ]
    }
  );
});
$E.displayName = "MoreDropdown";
h.shape({
  title: h.string,
  content: h.string,
  cite: h.shape({
    name: h.string,
    description: h.string
  })
}).isRequired, h.string, h.string, h.shape({
  containerCssClass: h.arrayOf(h.string),
  titleCssClass: h.arrayOf(h.string),
  contentCssClass: h.arrayOf(h.string)
});
h.oneOf(["video", "youtube"]), h.string, h.string, h.string, h.string, h.string, h.bool;
const PE = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, mS = ({ children: r }) => /* @__PURE__ */ B.jsx(
  "div",
  {
    role: "group",
    className: "glide__bullets",
    "data-glide-el": "controls[nav]",
    "data-testid": "bullets-container",
    onClick: (o) => o.stopPropagation(),
    onKeyDown: (o) => o.stopPropagation(),
    children: r
  }
);
mS.propTypes = {
  children: h.oneOfType([
    h.element,
    h.arrayOf(h.element)
  ]).isRequired
};
const hS = ({ buttonCount: r }) => {
  const o = [];
  for (let s = 0; s < r; s += 1)
    o.push(
      /* @__PURE__ */ B.jsx(wi, { gaData: PE, children: /* @__PURE__ */ B.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${s}`,
          "aria-label": `Slide view ${s + 1}`
        }
      ) }, `bullet-${s}`)
    );
  return /* @__PURE__ */ B.jsx(mS, { children: o });
};
hS.propTypes = {
  buttonCount: h.number.isRequired
};
h.arrayOf(h.string).isRequired, h.func;
const gS = ({ onClick: r = () => null }) => /* @__PURE__ */ B.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: r,
    children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
gS.propTypes = {
  onClick: h.func
};
const yS = ({ onClick: r = () => null }) => /* @__PURE__ */ B.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: r,
    children: /* @__PURE__ */ B.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
yS.propTypes = {
  onClick: h.func
};
const h0 = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, bS = ({ children: r = null }) => /* @__PURE__ */ B.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: r
  }
);
bS.propTypes = {
  children: h.arrayOf(h.element)
};
const vS = ({ onClick: r = () => null, children: o = void 0 }) => (
  // @ts-ignore
  /* @__PURE__ */ B.jsxs(bS, { children: [
    /* @__PURE__ */ B.jsx(wi, { gaData: { ...h0, text: "left chevron" }, children: /* @__PURE__ */ B.jsx(yS, { onClick: r }) }),
    o,
    /* @__PURE__ */ B.jsx(wi, { gaData: { ...h0, text: "right chevron" }, children: /* @__PURE__ */ B.jsx(gS, { onClick: r }) })
  ] })
);
vS.propTypes = {
  children: h.element,
  onClick: h.func
};
const SS = ({ carouselItems: r }) => {
  const o = r.map((s) => /* @__PURE__ */ B.jsx("li", { className: "glide__slide slider", children: s.item }, s.id.toString()));
  return /* @__PURE__ */ B.jsx("ul", { className: "glide__slides", children: o });
};
SS.propTypes = {
  carouselItems: h.arrayOf(h.object)
};
function g0(r, o) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(r);
    o && (f = f.filter(function(c) {
      return Object.getOwnPropertyDescriptor(r, c).enumerable;
    })), s.push.apply(s, f);
  }
  return s;
}
function y0(r) {
  for (var o = 1; o < arguments.length; o++) {
    var s = arguments[o] != null ? arguments[o] : {};
    o % 2 ? g0(Object(s), !0).forEach(function(f) {
      ZE(r, f, s[f]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : g0(Object(s)).forEach(function(f) {
      Object.defineProperty(r, f, Object.getOwnPropertyDescriptor(s, f));
    });
  }
  return r;
}
function uh(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? uh = function(o) {
    return typeof o;
  } : uh = function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, uh(r);
}
function Ch(r, o) {
  if (!(r instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function KE(r, o) {
  for (var s = 0; s < o.length; s++) {
    var f = o[s];
    f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(r, f.key, f);
  }
}
function Rh(r, o, s) {
  return o && KE(r.prototype, o), r;
}
function ZE(r, o, s) {
  return o in r ? Object.defineProperty(r, o, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[o] = s, r;
}
function WE(r, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(o && o.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), o && qb(r, o);
}
function Oc(r) {
  return Oc = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, Oc(r);
}
function qb(r, o) {
  return qb = Object.setPrototypeOf || function(s, f) {
    return s.__proto__ = f, s;
  }, qb(r, o);
}
function JE() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ex(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function tx(r, o) {
  if (o && (typeof o == "object" || typeof o == "function"))
    return o;
  if (o !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ex(r);
}
function nx(r) {
  var o = JE();
  return function() {
    var s = Oc(r), f;
    if (o) {
      var c = Oc(this).constructor;
      f = Reflect.construct(s, arguments, c);
    } else
      f = s.apply(this, arguments);
    return tx(this, f);
  };
}
function ax(r, o) {
  for (; !Object.prototype.hasOwnProperty.call(r, o) && (r = Oc(r), r !== null); )
    ;
  return r;
}
function sh() {
  return typeof Reflect < "u" && Reflect.get ? sh = Reflect.get : sh = function(r, o, s) {
    var f = ax(r, o);
    if (f) {
      var c = Object.getOwnPropertyDescriptor(f, o);
      return c.get ? c.get.call(arguments.length < 3 ? r : s) : c.value;
    }
  }, sh.apply(this, arguments);
}
var lx = {
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
function Yo(r) {
  console.error("[Glide warn]: ".concat(r));
}
function Ia(r) {
  return parseInt(r);
}
function rx(r) {
  return parseFloat(r);
}
function Vb(r) {
  return typeof r == "string";
}
function Cc(r) {
  var o = uh(r);
  return o === "function" || o === "object" && !!r;
}
function vh(r) {
  return typeof r == "function";
}
function wS(r) {
  return typeof r > "u";
}
function Gb(r) {
  return r.constructor === Array;
}
function ix(r, o, s) {
  var f = {};
  for (var c in o)
    vh(o[c]) ? f[c] = o[c](r, f, s) : Yo("Extension must be a function");
  for (var p in f)
    vh(f[p].mount) && f[p].mount();
  return f;
}
function sn(r, o, s) {
  Object.defineProperty(r, o, s);
}
function ox(r) {
  return Object.keys(r).sort().reduce(function(o, s) {
    return o[s] = r[s], o[s], o;
  }, {});
}
function Yb(r, o) {
  var s = Object.assign({}, r, o);
  if (o.hasOwnProperty("classes")) {
    s.classes = Object.assign({}, r.classes, o.classes);
    var f = ["direction", "type", "slide", "arrow", "nav"];
    f.forEach(function(c) {
      o.classes.hasOwnProperty(c) && (s.classes[c] = y0(y0({}, r.classes[c]), o.classes[c]));
    });
  }
  return o.hasOwnProperty("breakpoints") && (s.breakpoints = Object.assign({}, r.breakpoints, o.breakpoints)), s;
}
var ux = /* @__PURE__ */ (function() {
  function r() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ch(this, r), this.events = o, this.hop = o.hasOwnProperty;
  }
  return Rh(r, [{
    key: "on",
    value: function(o, s) {
      if (Gb(o)) {
        for (var f = 0; f < o.length; f++)
          this.on(o[f], s);
        return;
      }
      this.hop.call(this.events, o) || (this.events[o] = []);
      var c = this.events[o].push(s) - 1;
      return {
        remove: function() {
          delete this.events[o][c];
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
    value: function(o, s) {
      if (Gb(o)) {
        for (var f = 0; f < o.length; f++)
          this.emit(o[f], s);
        return;
      }
      this.hop.call(this.events, o) && this.events[o].forEach(function(c) {
        c(s || {});
      });
    }
  }]), r;
})(), sx = /* @__PURE__ */ (function() {
  function r(o) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Ch(this, r), this._c = {}, this._t = [], this._e = new ux(), this.disabled = !1, this.selector = o, this.settings = Yb(lx, s), this.index = this.settings.startAt;
  }
  return Rh(r, [{
    key: "mount",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Cc(o) ? this._c = ix(this, o, this._e) : Yo("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return Gb(o) ? this._t = o : Yo("You need to provide a array on `mutate()`"), this;
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
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.settings = Yb(this.settings, o), o.hasOwnProperty("startAt") && (this.index = o.startAt), this._e.emit("update"), this;
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
    value: function(o) {
      return this._c.Run.make(o), this;
    }
    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */
  }, {
    key: "move",
    value: function(o) {
      return this._c.Transition.disable(), this._c.Move.make(o), this;
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
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return o && (this.settings.autoplay = o), this._e.emit("play"), this;
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
    value: function(o, s) {
      return this._e.on(o, s), this;
    }
    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */
  }, {
    key: "isType",
    value: function(o) {
      return this.settings.type === o;
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
    set: function(o) {
      Cc(o) ? this._o = o : Yo("Options must be an `object` instance.");
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
    set: function(o) {
      this._i = Ia(o);
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
    set: function(o) {
      this._d = !!o;
    }
  }]), r;
})();
function cx(r, o, s) {
  var f = {
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
    make: function(S) {
      var k = this;
      r.disabled || (!r.settings.waitForTransition || r.disable(), this.move = S, s.emit("run.before", this.move), this.calculate(), s.emit("run", this.move), o.Transition.after(function() {
        k.isStart() && s.emit("run.start", k.move), k.isEnd() && s.emit("run.end", k.move), k.isOffset() && (k._o = !1, s.emit("run.offset", k.move)), s.emit("run.after", k.move), r.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var S = this.move, k = this.length, C = S.steps, O = S.direction, R = 1;
      if (O === "=") {
        if (r.settings.bound && Ia(C) > k) {
          r.index = k;
          return;
        }
        r.index = C;
        return;
      }
      if (O === ">" && C === ">") {
        r.index = k;
        return;
      }
      if (O === "<" && C === "<") {
        r.index = 0;
        return;
      }
      if (O === "|" && (R = r.settings.perView || 1), O === ">" || O === "|" && C === ">") {
        var $ = c(R);
        $ > k && (this._o = !0), r.index = p($, R);
        return;
      }
      if (O === "<" || O === "|" && C === "<") {
        var j = g(R);
        j < 0 && (this._o = !0), r.index = T(j, R);
        return;
      }
      Yo("Invalid direction pattern [".concat(O).concat(C, "] has been used"));
    },
    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function() {
      return r.index <= 0;
    },
    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function() {
      return r.index >= this.length;
    },
    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function() {
      var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return S ? this._o ? S === "|>" ? this.move.direction === "|" && this.move.steps === ">" : S === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === S : !1 : this._o;
    },
    /**
     * Checks if bound mode is active
     *
     * @return {Boolean}
     */
    isBound: function() {
      return r.isType("slider") && r.settings.focusAt !== "center" && r.settings.bound;
    }
  };
  function c(S) {
    var k = r.index;
    return r.isType("carousel") ? k + S : k + (S - k % S);
  }
  function p(S, k) {
    var C = f.length;
    return S <= C ? S : r.isType("carousel") ? S - (C + 1) : r.settings.rewind ? f.isBound() && !f.isEnd() ? C : 0 : f.isBound() ? C : Math.floor(C / k) * k;
  }
  function g(S) {
    var k = r.index;
    if (r.isType("carousel"))
      return k - S;
    var C = Math.ceil(k / S);
    return (C - 1) * S;
  }
  function T(S, k) {
    var C = f.length;
    return S >= 0 ? S : r.isType("carousel") ? S + (C + 1) : r.settings.rewind ? f.isBound() && f.isStart() ? C : Math.floor(C / k) * k : 0;
  }
  return sn(f, "move", {
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
    set: function(S) {
      var k = S.substr(1);
      this._m = {
        direction: S.substr(0, 1),
        steps: k ? Ia(k) ? Ia(k) : k : 0
      };
    }
  }), sn(f, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var S = r.settings, k = o.Html.slides.length;
      return this.isBound() ? k - 1 - (Ia(S.perView) - 1) + Ia(S.focusAt) : k - 1;
    }
  }), sn(f, "offset", {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function() {
      return this._o;
    }
  }), f;
}
function b0() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Dh(r, o) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, f, c, p, g, T = 0, S = function() {
    T = s.leading === !1 ? 0 : b0(), f = null, g = r.apply(c, p), f || (c = p = null);
  }, k = function() {
    var C = b0();
    !T && s.leading === !1 && (T = C);
    var O = o - (C - T);
    return c = this, p = arguments, O <= 0 || O > o ? (f && (clearTimeout(f), f = null), T = C, g = r.apply(c, p), f || (c = p = null)) : !f && s.trailing !== !1 && (f = setTimeout(S, O)), g;
  };
  return k.cancel = function() {
    clearTimeout(f), T = 0, f = c = p = null;
  }, k;
}
var Pm = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function fx(r, o, s) {
  var f = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(c) {
      for (var p = 0, g = c.length; p < g; p++) {
        var T = c[p].style, S = o.Direction.value;
        p !== 0 ? T[Pm[S][0]] = "".concat(this.value / 2, "px") : T[Pm[S][0]] = "", p !== c.length - 1 ? T[Pm[S][1]] = "".concat(this.value / 2, "px") : T[Pm[S][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(c) {
      for (var p = 0, g = c.length; p < g; p++) {
        var T = c[p].style;
        T.marginLeft = "", T.marginRight = "";
      }
    }
  };
  return sn(f, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return Ia(r.settings.gap);
    }
  }), sn(f, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return f.value * o.Sizes.length;
    }
  }), sn(f, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var c = r.settings.perView;
      return f.value * (c - 1) / c;
    }
  }), s.on(["build.after", "update"], Dh(function() {
    f.apply(o.Html.wrapper.children);
  }, 30)), s.on("destroy", function() {
    f.remove(o.Html.wrapper.children);
  }), f;
}
function TS(r) {
  if (r && r.parentNode) {
    for (var o = r.parentNode.firstChild, s = []; o; o = o.nextSibling)
      o.nodeType === 1 && o !== r && s.push(o);
    return s;
  }
  return [];
}
function Fb(r) {
  return Array.prototype.slice.call(r);
}
var dx = '[data-glide-el="track"]';
function px(r, o, s) {
  var f = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = r.selector, this.track = this.root.querySelector(dx), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = Fb(this.wrapper.children).filter(function(c) {
        return !c.classList.contains(r.settings.classes.slide.clone);
      });
    }
  };
  return sn(f, "root", {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function() {
      return f._r;
    },
    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function(c) {
      Vb(c) && (c = document.querySelector(c)), c !== null ? f._r = c : Yo("Root element must be a existing Html node");
    }
  }), sn(f, "track", {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function() {
      return f._t;
    },
    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function(c) {
      f._t = c;
    }
  }), sn(f, "wrapper", {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function() {
      return f.track.children[0];
    }
  }), s.on("update", function() {
    f.collectSlides();
  }), f;
}
function mx(r, o, s) {
  var f = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = r.settings.peek;
    }
  };
  return sn(f, "value", {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function() {
      return f._v;
    },
    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function(c) {
      Cc(c) ? (c.before = Ia(c.before), c.after = Ia(c.after)) : c = Ia(c), f._v = c;
    }
  }), sn(f, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var c = f.value, p = r.settings.perView;
      return Cc(c) ? c.before / p + c.after / p : c * 2 / p;
    }
  }), s.on(["resize", "update"], function() {
    f.mount();
  }), f;
}
function hx(r, o, s) {
  var f = {
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
      var c = this, p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = p, s.emit("move", {
        movement: this.value
      }), o.Transition.after(function() {
        s.emit("move.after", {
          movement: c.value
        });
      });
    }
  };
  return sn(f, "offset", {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function() {
      return f._o;
    },
    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function(c) {
      f._o = wS(c) ? 0 : Ia(c);
    }
  }), sn(f, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return o.Sizes.slideWidth * r.index;
    }
  }), sn(f, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var c = this.offset, p = this.translate;
      return o.Direction.is("rtl") ? p + c : p - c;
    }
  }), s.on(["build.before", "run"], function() {
    f.make();
  }), f;
}
function gx(r, o, s) {
  var f = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var c = "".concat(this.slideWidth, "px"), p = o.Html.slides, g = 0; g < p.length; g++)
        p[g].style.width = c;
    },
    /**
     * Setups dimensions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function() {
      o.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
    },
    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function() {
      for (var c = o.Html.slides, p = 0; p < c.length; p++)
        c[p].style.width = "";
      o.Html.wrapper.style.width = "";
    }
  };
  return sn(f, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return o.Html.slides.length;
    }
  }), sn(f, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return o.Html.track.offsetWidth;
    }
  }), sn(f, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return f.slideWidth * f.length + o.Gaps.grow + o.Clones.grow;
    }
  }), sn(f, "slideWidth", {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get: function() {
      return f.width / r.settings.perView - o.Peek.reductor - o.Gaps.reductor;
    }
  }), s.on(["build.before", "resize", "update"], function() {
    f.setupSlides(), f.setupWrapper();
  }), s.on("destroy", function() {
    f.remove();
  }), f;
}
function yx(r, o, s) {
  var f = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function() {
      s.emit("build.before"), this.typeClass(), this.activeClass(), s.emit("build.after");
    },
    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function() {
      o.Html.root.classList.add(r.settings.classes.type[r.settings.type]);
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function() {
      var c = r.settings.classes, p = o.Html.slides[r.index];
      p && (p.classList.add(c.slide.active), TS(p).forEach(function(g) {
        g.classList.remove(c.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var c = r.settings.classes, p = c.type, g = c.slide;
      o.Html.root.classList.remove(p[r.settings.type]), o.Html.slides.forEach(function(T) {
        T.classList.remove(g.active);
      });
    }
  };
  return s.on(["destroy", "update"], function() {
    f.removeClasses();
  }), s.on(["resize", "update"], function() {
    f.mount();
  }), s.on("move.after", function() {
    f.activeClass();
  }), f;
}
function bx(r, o, s) {
  var f = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function() {
      this.items = [], r.isType("carousel") && (this.items = this.collect());
    },
    /**
     * Collect clones with pattern.
     *
     * @return {[]}
     */
    collect: function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], p = o.Html.slides, g = r.settings, T = g.perView, S = g.classes, k = g.cloningRatio;
      if (p.length > 0)
        for (var C = +!!r.settings.peek, O = T + C + Math.round(T / 2), R = p.slice(0, O).reverse(), $ = p.slice(O * -1), j = 0; j < Math.max(k, Math.floor(T / p.length)); j++) {
          for (var V = 0; V < R.length; V++) {
            var I = R[V].cloneNode(!0);
            I.classList.add(S.slide.clone), c.push(I);
          }
          for (var P = 0; P < $.length; P++) {
            var H = $[P].cloneNode(!0);
            H.classList.add(S.slide.clone), c.unshift(H);
          }
        }
      return c;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var c = this.items, p = o.Html, g = p.wrapper, T = p.slides, S = Math.floor(c.length / 2), k = c.slice(0, S).reverse(), C = c.slice(S * -1).reverse(), O = "".concat(o.Sizes.slideWidth, "px"), R = 0; R < C.length; R++)
        g.appendChild(C[R]);
      for (var $ = 0; $ < k.length; $++)
        g.insertBefore(k[$], T[0]);
      for (var j = 0; j < c.length; j++)
        c[j].style.width = O;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var c = this.items, p = 0; p < c.length; p++)
        o.Html.wrapper.removeChild(c[p]);
    }
  };
  return sn(f, "grow", {
    /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */
    get: function() {
      return (o.Sizes.slideWidth + o.Gaps.value) * f.items.length;
    }
  }), s.on("update", function() {
    f.remove(), f.mount(), f.append();
  }), s.on("build.before", function() {
    r.isType("carousel") && f.append();
  }), s.on("destroy", function() {
    f.remove();
  }), f;
}
var Wo = /* @__PURE__ */ (function() {
  function r() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ch(this, r), this.listeners = o;
  }
  return Rh(r, [{
    key: "on",
    value: function(o, s, f) {
      var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      Vb(o) && (o = [o]);
      for (var p = 0; p < o.length; p++)
        this.listeners[o[p]] = f, s.addEventListener(o[p], this.listeners[o[p]], c);
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
    value: function(o, s) {
      var f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      Vb(o) && (o = [o]);
      for (var c = 0; c < o.length; c++)
        s.removeEventListener(o[c], this.listeners[o[c]], f);
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
  }]), r;
})();
function vx(r, o, s) {
  var f = new Wo(), c = {
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
      f.on("resize", window, Dh(function() {
        s.emit("resize");
      }, r.settings.throttle));
    },
    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function() {
      f.off("resize", window);
    }
  };
  return s.on("destroy", function() {
    c.unbind(), f.destroy();
  }), c;
}
var Sx = ["ltr", "rtl"], wx = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Tx(r, o, s) {
  var f = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = r.settings.direction;
    },
    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function(c) {
      var p = c.slice(0, 1);
      return this.is("rtl") ? c.split(p).join(wx[p]) : c;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(c) {
      return this.value === c;
    },
    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function() {
      o.Html.root.classList.add(r.settings.classes.direction[this.value]);
    },
    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function() {
      o.Html.root.classList.remove(r.settings.classes.direction[this.value]);
    }
  };
  return sn(f, "value", {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function() {
      return f._v;
    },
    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function(c) {
      Sx.indexOf(c) > -1 ? f._v = c : Yo("Direction value must be `ltr` or `rtl`");
    }
  }), s.on(["destroy", "update"], function() {
    f.removeClass();
  }), s.on("update", function() {
    f.mount();
  }), s.on(["build.before", "update"], function() {
    f.addClass();
  }), f;
}
function kx(r, o) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(s) {
      return o.Direction.is("rtl") ? -s : s;
    }
  };
}
function Ex(r, o) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(s) {
      var f = Math.floor(s / o.Sizes.slideWidth);
      return s + o.Gaps.value * f;
    }
  };
}
function xx(r, o) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(s) {
      return s + o.Clones.grow / 2;
    }
  };
}
function _x(r, o) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(s) {
      if (r.settings.focusAt >= 0) {
        var f = o.Peek.value;
        return Cc(f) ? s - f.before : s - f;
      }
      return s;
    }
  };
}
function Ax(r, o) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(s) {
      var f = o.Gaps.value, c = o.Sizes.width, p = r.settings.focusAt, g = o.Sizes.slideWidth;
      return p === "center" ? s - (c / 2 - g / 2) : s - g * p - f * p;
    }
  };
}
function zx(r, o, s) {
  var f = [Ex, xx, _x, Ax].concat(r._t, [kx]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(c) {
      for (var p = 0; p < f.length; p++) {
        var g = f[p];
        vh(g) && vh(g().modify) ? c = g(r, o, s).modify(c) : Yo("Transformer should be a function that returns an object with `modify()` method");
      }
      return c;
    }
  };
}
function Nx(r, o, s) {
  var f = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(c) {
      var p = zx(r, o).mutate(c), g = "translate3d(".concat(-1 * p, "px, 0px, 0px)");
      o.Html.wrapper.style.mozTransform = g, o.Html.wrapper.style.webkitTransform = g, o.Html.wrapper.style.transform = g;
    },
    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      o.Html.wrapper.style.transform = "";
    },
    /**
     * @return {number}
     */
    getStartIndex: function() {
      var c = o.Sizes.length, p = r.index, g = r.settings.perView;
      return o.Run.isOffset(">") || o.Run.isOffset("|>") ? c + (p - g) : (p + g) % c;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var c = o.Sizes.slideWidth * r.settings.perView;
      return o.Run.isOffset(">") || o.Run.isOffset("|>") ? c * -1 : c;
    }
  };
  return s.on("move", function(c) {
    if (!r.isType("carousel") || !o.Run.isOffset())
      return f.set(c.movement);
    o.Transition.after(function() {
      s.emit("translate.jump"), f.set(o.Sizes.slideWidth * r.index);
    });
    var p = o.Sizes.slideWidth * o.Translate.getStartIndex();
    return f.set(p - o.Translate.getTravelDistance());
  }), s.on("destroy", function() {
    f.remove();
  }), f;
}
function Ox(r, o, s) {
  var f = !1, c = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(p) {
      var g = r.settings;
      return f ? "".concat(p, " 0ms ").concat(g.animationTimingFunc) : "".concat(p, " ").concat(this.duration, "ms ").concat(g.animationTimingFunc);
    },
    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function() {
      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      o.Html.wrapper.style.transition = this.compose(p);
    },
    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      o.Html.wrapper.style.transition = "";
    },
    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function(p) {
      setTimeout(function() {
        p();
      }, this.duration);
    },
    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function() {
      f = !1, this.set();
    },
    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function() {
      f = !0, this.set();
    }
  };
  return sn(c, "duration", {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function() {
      var p = r.settings;
      return r.isType("slider") && o.Run.offset ? p.rewindDuration : p.animationDuration;
    }
  }), s.on("move", function() {
    c.set();
  }), s.on(["build.before", "resize", "translate.jump"], function() {
    c.disable();
  }), s.on("run", function() {
    c.enable();
  }), s.on("destroy", function() {
    c.remove();
  }), c;
}
var kS = !1;
try {
  var v0 = Object.defineProperty({}, "passive", {
    get: function() {
      kS = !0;
    }
  });
  window.addEventListener("testPassive", null, v0), window.removeEventListener("testPassive", null, v0);
} catch {
}
var Xb = kS, Km = ["touchstart", "mousedown"], S0 = ["touchmove", "mousemove"], w0 = ["touchend", "touchcancel", "mouseup", "mouseleave"], T0 = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Cx(r, o, s) {
  var f = new Wo(), c = 0, p = 0, g = 0, T = !1, S = Xb ? {
    passive: !0
  } : !1, k = {
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
    start: function(C) {
      if (!T && !r.disabled) {
        this.disable();
        var O = this.touches(C);
        c = null, p = Ia(O.pageX), g = Ia(O.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), s.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(C) {
      if (!r.disabled) {
        var O = r.settings, R = O.touchAngle, $ = O.touchRatio, j = O.classes, V = this.touches(C), I = Ia(V.pageX) - p, P = Ia(V.pageY) - g, H = Math.abs(I << 2), ce = Math.abs(P << 2), J = Math.sqrt(H + ce), ne = Math.sqrt(ce);
        if (c = Math.asin(ne / J), c * 180 / Math.PI < R)
          C.stopPropagation(), o.Move.make(I * rx($)), o.Html.root.classList.add(j.dragging), s.emit("swipe.move");
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
    end: function(C) {
      if (!r.disabled) {
        var O = r.settings, R = O.perSwipe, $ = O.touchAngle, j = O.classes, V = this.touches(C), I = this.threshold(C), P = V.pageX - p, H = c * 180 / Math.PI;
        this.enable(), P > I && H < $ ? o.Run.make(o.Direction.resolve("".concat(R, "<"))) : P < -I && H < $ ? o.Run.make(o.Direction.resolve("".concat(R, ">"))) : o.Move.make(), o.Html.root.classList.remove(j.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), s.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var C = this, O = r.settings, R = O.swipeThreshold, $ = O.dragThreshold;
      R && f.on(Km[0], o.Html.wrapper, function(j) {
        C.start(j);
      }, S), $ && f.on(Km[1], o.Html.wrapper, function(j) {
        C.start(j);
      }, S);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      f.off(Km[0], o.Html.wrapper, S), f.off(Km[1], o.Html.wrapper, S);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var C = this;
      f.on(S0, o.Html.wrapper, Dh(function(O) {
        C.move(O);
      }, r.settings.throttle), S);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      f.off(S0, o.Html.wrapper, S);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var C = this;
      f.on(w0, o.Html.wrapper, function(O) {
        C.end(O);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      f.off(w0, o.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(C) {
      return T0.indexOf(C.type) > -1 ? C : C.touches[0] || C.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(C) {
      var O = r.settings;
      return T0.indexOf(C.type) > -1 ? O.dragThreshold : O.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return T = !1, o.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return T = !0, o.Transition.disable(), this;
    }
  };
  return s.on("build.after", function() {
    o.Html.root.classList.add(r.settings.classes.swipeable);
  }), s.on("destroy", function() {
    k.unbindSwipeStart(), k.unbindSwipeMove(), k.unbindSwipeEnd(), f.destroy();
  }), k;
}
function Rx(r, o, s) {
  var f = new Wo(), c = {
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
      f.on("dragstart", o.Html.wrapper, this.dragstart);
    },
    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function() {
      f.off("dragstart", o.Html.wrapper);
    },
    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function(p) {
      p.preventDefault();
    }
  };
  return s.on("destroy", function() {
    c.unbind(), f.destroy();
  }), c;
}
function Dx(r, o, s) {
  var f = new Wo(), c = !1, p = !1, g = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function() {
      this._a = o.Html.wrapper.querySelectorAll("a"), this.bind();
    },
    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function() {
      f.on("click", o.Html.wrapper, this.click);
    },
    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function() {
      f.off("click", o.Html.wrapper);
    },
    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function(T) {
      p && (T.stopPropagation(), T.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (p = !0, !c) {
        for (var T = 0; T < this.items.length; T++)
          this.items[T].draggable = !1;
        c = !0;
      }
      return this;
    },
    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function() {
      if (p = !1, c) {
        for (var T = 0; T < this.items.length; T++)
          this.items[T].draggable = !0;
        c = !1;
      }
      return this;
    }
  };
  return sn(g, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return g._a;
    }
  }), s.on("swipe.move", function() {
    g.detach();
  }), s.on("swipe.end", function() {
    o.Transition.after(function() {
      g.attach();
    });
  }), s.on("destroy", function() {
    g.attach(), g.unbind(), f.destroy();
  }), g;
}
var Mx = '[data-glide-el="controls[nav]"]', dv = '[data-glide-el^="controls"]', Lx = "".concat(dv, ' [data-glide-dir*="<"]'), jx = "".concat(dv, ' [data-glide-dir*=">"]');
function Ux(r, o, s) {
  var f = new Wo(), c = Xb ? {
    passive: !0
  } : !1, p = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = o.Html.root.querySelectorAll(Mx), this._c = o.Html.root.querySelectorAll(dv), this._arrowControls = {
        previous: o.Html.root.querySelectorAll(Lx),
        next: o.Html.root.querySelectorAll(jx)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var g = 0; g < this._n.length; g++)
        this.addClass(this._n[g].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var g = 0; g < this._n.length; g++)
        this.removeClass(this._n[g].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(g) {
      var T = r.settings, S = g[r.index];
      S && (S.classList.add(T.classes.nav.active), TS(S).forEach(function(k) {
        k.classList.remove(T.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(g) {
      var T = g[r.index];
      T == null || T.classList.remove(r.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!r.settings.rewind) {
        var g = p._arrowControls.next, T = p._arrowControls.previous;
        this.resetArrowState(g, T), r.index === 0 && this.disableArrow(T), r.index === o.Run.length && this.disableArrow(g);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var g = r.settings, T = arguments.length, S = new Array(T), k = 0; k < T; k++)
        S[k] = arguments[k];
      S.forEach(function(C) {
        Fb(C).forEach(function(O) {
          O.classList.remove(g.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var g = r.settings, T = arguments.length, S = new Array(T), k = 0; k < T; k++)
        S[k] = arguments[k];
      S.forEach(function(C) {
        Fb(C).forEach(function(O) {
          O.classList.add(g.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var g = 0; g < this._c.length; g++)
        this.bind(this._c[g].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var g = 0; g < this._c.length; g++)
        this.unbind(this._c[g].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(g) {
      for (var T = 0; T < g.length; T++)
        f.on("click", g[T], this.click), f.on("touchstart", g[T], this.click, c);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(g) {
      for (var T = 0; T < g.length; T++)
        f.off(["click", "touchstart"], g[T]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(g) {
      !Xb && g.type === "touchstart" && g.preventDefault();
      var T = g.currentTarget.getAttribute("data-glide-dir");
      o.Run.make(o.Direction.resolve(T));
    }
  };
  return sn(p, "items", {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return p._c;
    }
  }), s.on(["mount.after", "move.after"], function() {
    p.setActive();
  }), s.on(["mount.after", "run"], function() {
    p.setArrowState();
  }), s.on("destroy", function() {
    p.removeBindings(), p.removeActive(), f.destroy();
  }), p;
}
function Hx(r, o, s) {
  var f = new Wo(), c = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function() {
      r.settings.keyboard && this.bind();
    },
    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function() {
      f.on("keyup", document, this.press);
    },
    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function() {
      f.off("keyup", document);
    },
    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function(p) {
      var g = r.settings.perSwipe, T = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(p.code) && o.Run.make(o.Direction.resolve("".concat(g).concat(T[p.code])));
    }
  };
  return s.on(["destroy", "update"], function() {
    c.unbind();
  }), s.on("update", function() {
    c.mount();
  }), s.on("destroy", function() {
    f.destroy();
  }), c;
}
function Bx(r, o, s) {
  var f = new Wo(), c = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function() {
      this.enable(), this.start(), r.settings.hoverpause && this.bind();
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
      var p = this;
      this._e && (this.enable(), r.settings.autoplay && wS(this._i) && (this._i = setInterval(function() {
        p.stop(), o.Run.make(">"), p.start(), s.emit("autoplay");
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
      var p = this;
      f.on("mouseover", o.Html.root, function() {
        p._e && p.stop();
      }), f.on("mouseout", o.Html.root, function() {
        p._e && p.start();
      });
    },
    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function() {
      f.off(["mouseover", "mouseout"], o.Html.root);
    }
  };
  return sn(c, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var p = o.Html.slides[r.index].getAttribute("data-glide-autoplay");
      return Ia(p || r.settings.autoplay);
    }
  }), s.on(["destroy", "update"], function() {
    c.unbind();
  }), s.on(["run.before", "swipe.start", "update"], function() {
    c.stop();
  }), s.on(["pause", "destroy"], function() {
    c.disable(), c.stop();
  }), s.on(["run.after", "swipe.end"], function() {
    c.start();
  }), s.on(["play"], function() {
    c.enable(), c.start();
  }), s.on("update", function() {
    c.mount();
  }), s.on("destroy", function() {
    f.destroy();
  }), c;
}
function k0(r) {
  return Cc(r) ? ox(r) : (Yo("Breakpoints option must be an object"), {});
}
function qx(r, o, s) {
  var f = new Wo(), c = r.settings, p = k0(c.breakpoints), g = Object.assign({}, c), T = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(S) {
      if (typeof window.matchMedia < "u") {
        for (var k in S)
          if (S.hasOwnProperty(k) && window.matchMedia("(max-width: ".concat(k, "px)")).matches)
            return S[k];
      }
      return g;
    }
  };
  return Object.assign(c, T.match(p)), f.on("resize", window, Dh(function() {
    r.settings = Yb(c, T.match(p));
  }, r.settings.throttle)), s.on("update", function() {
    p = k0(p), g = Object.assign({}, c);
  }), s.on("destroy", function() {
    f.off("resize", window);
  }), T;
}
var Vx = {
  // Required
  Html: px,
  Translate: Nx,
  Transition: Ox,
  Direction: Tx,
  Peek: mx,
  Sizes: gx,
  Gaps: fx,
  Move: hx,
  Clones: bx,
  Resize: vx,
  Build: yx,
  Run: cx,
  // Optional
  Swipe: Cx,
  Images: Rx,
  Anchors: Dx,
  Controls: Ux,
  Keyboard: Hx,
  Autoplay: Bx,
  Breakpoints: qx
}, Gx = /* @__PURE__ */ (function(r) {
  WE(s, r);
  var o = nx(s);
  function s() {
    return Ch(this, s), o.apply(this, arguments);
  }
  return Rh(s, [{
    key: "mount",
    value: function() {
      var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return sh(Oc(s.prototype), "mount", this).call(this, Object.assign({}, Vx, f));
    }
  }]), s;
})(sx);
function Yx(r) {
  let o, s, f;
  switch (r) {
    case 3:
      o = 1, s = 2, f = 3;
      break;
    case 2:
      o = 1, s = 2, f = 2;
      break;
    case 1:
    default:
      o = 1, s = 1, f = 1;
  }
  return {
    perViewSm: o,
    perViewMd: s,
    perViewLg: f
  };
}
function Fx(r = 1, o, s = !0, f) {
  const { perViewSm: c, perViewMd: p, perViewLg: g } = Yx(r), T = s ? 24 : 0, S = s ? { before: 48, after: 48 } : 0, k = s ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: T,
    // Space between slides... may be impacted by viewport size.
    // `keyboard` Left/Right arrow key support for slides - true is default.
    // Is not fully Accessible, on keydown allcarousels move simultaneously
    // A custome keyboard handler is implemented
    keyboard: !1,
    startAt: 0,
    swipeThreshold: 80,
    // Distance required for swipe to change slide.
    dragThreshold: f ? 120 : !1,
    // Distance for mouse drag to change slide.
    perTouch: 1,
    // Number of slides that can be moved per each swipe/drag.
    perView: g,
    // Can be overwritten at breakpoints
    peek: k,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: o ? null : {
      576: {
        // BS4 sm
        perView: c,
        peek: S
      },
      768: {
        // BS4 md
        perView: p,
        peek: S
      },
      992: {
        // BS4 lg
        perView: g,
        peek: S
      },
      1260: {
        // BS4 xl
        perView: g,
        peek: S
      },
      1400: {
        perView: g,
        peek: k
      },
      1920: {
        perView: g,
        peek: k
      }
    }
  };
}
function Xx(r, o, s) {
  const f = r.querySelector(".glide__arrow--prev"), c = r.querySelector(".glide__arrow--next"), p = r.querySelector(".glide__track"), g = r.querySelector(
    ".image-navigator-images"
  );
  if (!(f || c)) return;
  const T = ["slider-start", "slider-mid", "slider-end"], S = "glide__arrow--disabled";
  p == null || p.classList.remove(...T), g == null || g.classList.remove(...T), o === 0 ? (p == null || p.classList.add("slider-start"), g == null || g.classList.add("slider-start"), f == null || f.classList.add(S), f == null || f.setAttribute("aria-disabled", "true"), c == null || c.classList.remove(S), c == null || c.setAttribute("aria-disabled", "false")) : o >= s - 1 ? (p == null || p.classList.add("slider-end"), g == null || g.classList.add("slider-end"), f == null || f.classList.remove(S), f == null || f.setAttribute("aria-disabled", "false"), c == null || c.classList.add(S), c == null || c.setAttribute("aria-disabled", "true")) : (p == null || p.classList.add("slider-mid"), g == null || g.classList.add("slider-mid"), f == null || f.classList.remove(S), c == null || c.classList.remove(S), f == null || f.setAttribute("aria-disabled", "false"), c == null || c.setAttribute("aria-disabled", "false"));
}
function Ix(r, o, s) {
  const f = r.querySelectorAll(".glide__slide"), c = o, p = Math.min(
    f.length - 1,
    o + s - 1
  );
  f.forEach((g, T) => {
    T < c || T > p ? (g.setAttribute("aria-hidden", "true"), g.setAttribute("tabindex", "-1"), g.setAttribute("inert", "")) : (g.setAttribute("aria-hidden", "false"), g.removeAttribute("tabindex"), g.removeAttribute("inert"));
  });
}
function Qx({
  instanceName: r,
  perView: o,
  buttonCount: s,
  isFullWidth: f = !1,
  onItemClick: c,
  hasPeek: p = !0,
  isDraggable: g
}) {
  const T = Fx(o, f, p, g), S = new Gx(`#${r}`, T);
  let k = document.querySelector(`#${r}`);
  return k.addEventListener("keyup", (C) => {
    const O = C;
    O.keyCode === 39 ? S.go(">") : O.keyCode === 37 ? S.go("<") : O.keyCode === 13 && S.go(document.activeElement.dataset.glideDir);
  }), S.on("build.before", () => {
    k = document.querySelector(`#${r}`), k && k.classList.add("slider-start");
  }), S.on("move", () => {
    if (k = document.querySelector(`#${r}`), !k) return;
    const C = S.index;
    Ix(k, C, o);
    const O = k.querySelector(".navigation-slider"), R = k.querySelector(".image-navigator-images");
    if (O && R) {
      const $ = O.querySelectorAll(
        ".bullet-image-container"
      ), j = O.clientWidth, V = 82, I = $[C], P = R.getBoundingClientRect().x, H = O.getBoundingClientRect().x - P, ce = I.getBoundingClientRect().x - P, J = I.getBoundingClientRect().x + I.getBoundingClientRect().width - P;
      if (C === 0 || ce <= 0 + V)
        O.style.left = `${H - ce + V}px`;
      else if (J >= j - V) {
        const ne = J - j;
        O.style.left = `${H - ne - V}px`;
      }
    }
    Xx(k, C, s), k.setAttribute("data-current-index", C), c && c(C);
  }), S.mount(), S;
}
function $x(r, o) {
  let s;
  const f = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return s = r, f >= 992 && (o >= 2 && (s = r - 1), o >= 3 && (s = r - 2)), s;
}
const ES = ({
  perView: r = 1,
  width: o = "",
  maxWidth: s = "",
  // @ts-ignore
  carouselItems: f,
  cssClass: c = "",
  CustomNavComponent: p = void 0,
  role: g = "",
  ariaLabelledBy: T = "",
  isFullWidth: S = !1,
  removeSideBackground: k = !1,
  hasNavButtons: C = !0,
  hasPositionIndicators: O = !0,
  imageAutoSize: R = !0,
  onItemClick: $ = () => null,
  hasPeek: j = !0,
  isDraggable: V = !0,
  hasShadow: I = !0,
  bgColor: P = ""
}) => {
  const H = `glide-${Math.ceil(Math.random() * 1e4)}`, ce = $x(f.length, r);
  return gi(() => {
    Qx({
      instanceName: H,
      perView: r,
      buttonCount: ce,
      isFullWidth: S,
      onItemClick: $,
      hasPeek: j,
      isDraggable: V
    });
  }, [
    H,
    r,
    ce,
    S,
    $,
    j,
    V
  ]), /* @__PURE__ */ B.jsxs(
    "div",
    {
      role: g,
      "aria-labelledby": T,
      className: `glide ${c} ${P}`,
      id: H,
      style: { width: o, maxWidth: s },
      "data-remove-side-background": k,
      "data-image-auto-size": R,
      "data-has-shadow": I,
      children: [
        /* @__PURE__ */ B.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ B.jsx(SS, { carouselItems: f }) }),
        p ? (
          // @ts-ignore
          /* @__PURE__ */ B.jsx(p, { instanceName: H })
        ) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
          O && /* @__PURE__ */ B.jsx(hS, { buttonCount: ce }),
          C && /* @__PURE__ */ B.jsx(vS, {})
        ] })
      ]
    }
  );
};
ES.propTypes = {
  perView: h.number,
  width: h.string,
  maxWidth: h.string,
  carouselItems: h.arrayOf(h.object).isRequired,
  cssClass: h.string,
  CustomNavComponent: h.func,
  role: h.string,
  ariaLabelledBy: h.string,
  onItemClick: h.func,
  isFullWidth: h.bool,
  removeSideBackground: h.bool,
  hasNavButtons: h.bool,
  hasPositionIndicators: h.bool,
  imageAutoSize: h.bool,
  bgColor: h.string,
  hasPeek: h.bool,
  isDraggable: h.bool,
  hasShadow: h.bool
};
const Px = ({
  id: r,
  imageSource: o,
  imageAltText: s,
  title: f,
  content: c,
  eventLocation: p,
  eventTime: g,
  buttons: T,
  linkLabel: S,
  linkUrl: k,
  tags: C
}, O, R, $) => {
  var j, V;
  return {
    // @ts-ignore
    id: r,
    item: /* @__PURE__ */ B.jsx(
      qo,
      {
        type: O,
        horizontal: R,
        image: o,
        imageAltText: s,
        title: f,
        body: c,
        eventFormat: $,
        eventLocation: p,
        eventTime: g,
        buttons: T,
        linkLabel: S,
        linkUrl: k || ((j = T == null ? void 0 : T[0]) == null ? void 0 : j.href),
        tags: C,
        cardLink: k || ((V = T == null ? void 0 : T[0]) == null ? void 0 : V.href)
      }
    )
  };
}, xS = ({
  perView: r = 0,
  cardItems: o = [],
  cardType: s = "default",
  cardEventFormat: f = "stack",
  cardHorizontal: c = !1,
  width: p = void 0,
  maxWidth: g = void 0,
  imageAutoSize: T = !0,
  bgColor: S = ""
}) => {
  const k = parseInt(`${r}`, 10), [C, O] = Vo(k), R = 1024, $ = 768;
  gi(() => {
    const I = () => {
      const P = window.innerWidth;
      let H;
      switch (k) {
        case 3:
          P > R ? H = 3 : P > $ ? H = 2 : H = 1;
          break;
        case 2:
          H = P < $ ? 1 : 2;
          break;
        default:
          H = 1;
          break;
      }
      O(H);
    };
    return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
  }, [k]);
  const j = o.map(
    (I) => Px(I, s, c, f)
  ), V = o.length > C;
  return /* @__PURE__ */ B.jsx(
    ES,
    {
      perView: +C,
      maxWidth: g,
      width: p,
      carouselItems: j,
      cssClass: "aligned-carousel",
      imageAutoSize: T,
      removeSideBackground: o.length <= C,
      hasPositionIndicators: V,
      hasNavButtons: V,
      isDraggable: V,
      hasShadow: !0,
      bgColor: S,
      CustomNavComponent: void 0,
      role: void 0,
      ariaLabelledBy: void 0,
      isFullWidth: void 0
    }
  );
};
xS.propTypes = {
  perView: h.string.isRequired,
  cardItems: h.arrayOf(
    h.shape({
      title: h.string.isRequired,
      content: h.string,
      eventLocation: h.string,
      eventTime: h.string,
      image: h.string,
      imageAltText: h.string,
      buttons: qo.propTypes.buttons,
      linkLabel: h.string,
      linkUrl: h.string,
      tags: qo.propTypes.tags
    })
  ).isRequired,
  cardType: qo.propTypes.type,
  cardEventFormat: qo.propTypes.eventFormat,
  cardHorizontal: qo.propTypes.horizontal,
  width: h.string,
  maxWidth: h.string,
  imageAutoSize: h.bool,
  bgColor: h.string
};
h.number.isRequired, h.arrayOf(h.object).isRequired, h.string, h.string, h.bool, h.string;
const Sh = {
  imageItems: h.arrayOf(
    h.shape({
      id: h.number,
      imageSource: h.string,
      thumbnailSource: h.string,
      imageAltText: h.string,
      content: h.oneOfType([h.string, h.element])
    })
  ),
  hasContent: h.bool
};
h.string, Sh.imageItems, Sh.hasContent;
Sh.imageItems.isRequired, Sh.hasContent, h.string, h.string, h.bool;
h.arrayOf(
  h.shape({
    title: h.string,
    content: h.string,
    cite: h.shape({
      name: h.string,
      description: h.string
    })
  })
).isRequired, h.shape({
  containerCssClass: h.arrayOf(h.string),
  titleCssClass: h.arrayOf(h.string),
  contentCssClass: h.arrayOf(h.string)
}), h.string, h.string, h.bool, h.bool, h.bool;
var cb = { exports: {} }, wm = {}, E0 = { exports: {} }, x0 = {}, _0;
function Kx() {
  return _0 || (_0 = 1, (function(r) {
    function o(U, L) {
      var G = U.length;
      U.push(L);
      e: for (; 0 < G; ) {
        var re = G - 1 >>> 1, se = U[re];
        if (0 < c(se, L))
          U[re] = L, U[G] = se, G = re;
        else break e;
      }
    }
    function s(U) {
      return U.length === 0 ? null : U[0];
    }
    function f(U) {
      if (U.length === 0) return null;
      var L = U[0], G = U.pop();
      if (G !== L) {
        U[0] = G;
        e: for (var re = 0, se = U.length, ie = se >>> 1; re < ie; ) {
          var we = 2 * (re + 1) - 1, ue = U[we], Z = we + 1, ye = U[Z];
          if (0 > c(ue, G))
            Z < se && 0 > c(ye, ue) ? (U[re] = ye, U[Z] = G, re = Z) : (U[re] = ue, U[we] = G, re = we);
          else if (Z < se && 0 > c(ye, G))
            U[re] = ye, U[Z] = G, re = Z;
          else break e;
        }
      }
      return L;
    }
    function c(U, L) {
      var G = U.sortIndex - L.sortIndex;
      return G !== 0 ? G : U.id - L.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      r.unstable_now = function() {
        return p.now();
      };
    } else {
      var g = Date, T = g.now();
      r.unstable_now = function() {
        return g.now() - T;
      };
    }
    var S = [], k = [], C = 1, O = null, R = 3, $ = !1, j = !1, V = !1, I = !1, P = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
    function J(U) {
      for (var L = s(k); L !== null; ) {
        if (L.callback === null) f(k);
        else if (L.startTime <= U)
          f(k), L.sortIndex = L.expirationTime, o(S, L);
        else break;
        L = s(k);
      }
    }
    function ne(U) {
      if (V = !1, J(U), !j)
        if (s(S) !== null)
          j = !0, Y || (Y = !0, Be());
        else {
          var L = s(k);
          L !== null && Qe(ne, L.startTime - U);
        }
    }
    var Y = !1, F = -1, ee = 5, Ee = -1;
    function He() {
      return I ? !0 : !(r.unstable_now() - Ee < ee);
    }
    function qe() {
      if (I = !1, Y) {
        var U = r.unstable_now();
        Ee = U;
        var L = !0;
        try {
          e: {
            j = !1, V && (V = !1, H(F), F = -1), $ = !0;
            var G = R;
            try {
              t: {
                for (J(U), O = s(S); O !== null && !(O.expirationTime > U && He()); ) {
                  var re = O.callback;
                  if (typeof re == "function") {
                    O.callback = null, R = O.priorityLevel;
                    var se = re(
                      O.expirationTime <= U
                    );
                    if (U = r.unstable_now(), typeof se == "function") {
                      O.callback = se, J(U), L = !0;
                      break t;
                    }
                    O === s(S) && f(S), J(U);
                  } else f(S);
                  O = s(S);
                }
                if (O !== null) L = !0;
                else {
                  var ie = s(k);
                  ie !== null && Qe(
                    ne,
                    ie.startTime - U
                  ), L = !1;
                }
              }
              break e;
            } finally {
              O = null, R = G, $ = !1;
            }
            L = void 0;
          }
        } finally {
          L ? Be() : Y = !1;
        }
      }
    }
    var Be;
    if (typeof ce == "function")
      Be = function() {
        ce(qe);
      };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), yt = Ae.port2;
      Ae.port1.onmessage = qe, Be = function() {
        yt.postMessage(null);
      };
    } else
      Be = function() {
        P(qe, 0);
      };
    function Qe(U, L) {
      F = P(function() {
        U(r.unstable_now());
      }, L);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, r.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ee = 0 < U ? Math.floor(1e3 / U) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, r.unstable_next = function(U) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = R;
      }
      var G = R;
      R = L;
      try {
        return U();
      } finally {
        R = G;
      }
    }, r.unstable_requestPaint = function() {
      I = !0;
    }, r.unstable_runWithPriority = function(U, L) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var G = R;
      R = U;
      try {
        return L();
      } finally {
        R = G;
      }
    }, r.unstable_scheduleCallback = function(U, L, G) {
      var re = r.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? re + G : re) : G = re, U) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return se = G + se, U = {
        id: C++,
        callback: L,
        priorityLevel: U,
        startTime: G,
        expirationTime: se,
        sortIndex: -1
      }, G > re ? (U.sortIndex = G, o(k, U), s(S) === null && U === s(k) && (V ? (H(F), F = -1) : V = !0, Qe(ne, G - re))) : (U.sortIndex = se, o(S, U), j || $ || (j = !0, Y || (Y = !0, Be()))), U;
    }, r.unstable_shouldYield = He, r.unstable_wrapCallback = function(U) {
      var L = R;
      return function() {
        var G = R;
        R = L;
        try {
          return U.apply(this, arguments);
        } finally {
          R = G;
        }
      };
    };
  })(x0)), x0;
}
var A0;
function Zx() {
  return A0 || (A0 = 1, E0.exports = Kx()), E0.exports;
}
var z0;
function Wx() {
  if (z0) return wm;
  z0 = 1;
  var r = { env: { NODE_ENV: "production" } }, o = Zx(), s = ht, f = S1;
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function p(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function g(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function T(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function S(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function k(e) {
    if (g(e) !== e)
      throw Error(c(188));
  }
  function C(e) {
    var t = e.alternate;
    if (!t) {
      if (t = g(e), t === null) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (a = l.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return k(l), e;
          if (i === a) return k(l), t;
          i = i.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== a.return) n = l, a = i;
      else {
        for (var u = !1, d = l.child; d; ) {
          if (d === n) {
            u = !0, n = l, a = i;
            break;
          }
          if (d === a) {
            u = !0, a = l, n = i;
            break;
          }
          d = d.sibling;
        }
        if (!u) {
          for (d = i.child; d; ) {
            if (d === n) {
              u = !0, n = i, a = l;
              break;
            }
            if (d === a) {
              u = !0, a = i, n = l;
              break;
            }
            d = d.sibling;
          }
          if (!u) throw Error(c(189));
        }
      }
      if (n.alternate !== a) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function O(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = O(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var R = Object.assign, $ = Symbol.for("react.element"), j = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), ce = Symbol.for("react.consumer"), J = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), He = Symbol.for("react.activity"), qe = Symbol.for("react.memo_cache_sentinel"), Be = Symbol.iterator;
  function Ae(e) {
    return e === null || typeof e != "object" ? null : (e = Be && e[Be] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var yt = Symbol.for("react.client.reference");
  function Qe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === yt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case I:
        return "Fragment";
      case H:
        return "Profiler";
      case P:
        return "StrictMode";
      case Y:
        return "Suspense";
      case F:
        return "SuspenseList";
      case He:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case V:
          return "Portal";
        case J:
          return e.displayName || "Context";
        case ce:
          return (e._context.displayName || "Context") + ".Consumer";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ee:
          return t = e.displayName || null, t !== null ? t : Qe(e.type) || "Memo";
        case Ee:
          t = e._payload, e = e._init;
          try {
            return Qe(e(t));
          } catch {
          }
      }
    return null;
  }
  var U = Array.isArray, L = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, se = [], ie = -1;
  function we(e) {
    return { current: e };
  }
  function ue(e) {
    0 > ie || (e.current = se[ie], se[ie] = null, ie--);
  }
  function Z(e, t) {
    ie++, se[ie] = e.current, e.current = t;
  }
  var ye = we(null), bt = we(null), tt = we(null), fn = we(null);
  function dn(e, t) {
    switch (Z(tt, t), Z(bt, e), Z(ye, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Hp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Hp(t), e = Bp(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ue(ye), Z(ye, e);
  }
  function nt() {
    ue(ye), ue(bt), ue(tt);
  }
  function Re(e) {
    e.memoizedState !== null && Z(fn, e);
    var t = ye.current, n = Bp(t, e.type);
    t !== n && (Z(bt, e), Z(ye, n));
  }
  function Qa(e) {
    bt.current === e && (ue(ye), ue(bt)), fn.current === e && (ue(fn), ui._currentValue = re);
  }
  var De, dr;
  function ke(e) {
    if (De === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        De = t && t[1] || "", dr = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + De + e + dr;
  }
  var Dn = !1;
  function wl(e, t) {
    if (!e || Dn) return "";
    Dn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var M = function() {
                throw Error();
              };
              if (Object.defineProperty(M.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(M, []);
                } catch (A) {
                  var _ = A;
                }
                Reflect.construct(e, [], M);
              } else {
                try {
                  M.call();
                } catch (A) {
                  _ = A;
                }
                e.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                _ = A;
              }
              (M = e()) && typeof M.catch == "function" && M.catch(function() {
              });
            }
          } catch (A) {
            if (A && _ && typeof A.stack == "string")
              return [A.stack, _.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      l && l.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = a.DetermineComponentFrameRoot(), u = i[0], d = i[1];
      if (u && d) {
        var m = u.split(`
`), x = d.split(`
`);
        for (l = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < x.length && !x[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === m.length || l === x.length)
          for (a = m.length - 1, l = x.length - 1; 1 <= a && 0 <= l && m[a] !== x[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (m[a] !== x[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || m[a] !== x[l]) {
                  var N = `
` + m[a].replace(" at new ", " at ");
                  return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      Dn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? ke(n) : "";
  }
  function bn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ke(e.type);
      case 16:
        return ke("Lazy");
      case 13:
        return e.child !== t && t !== null ? ke("Suspense Fallback") : ke("Suspense");
      case 19:
        return ke("SuspenseList");
      case 0:
      case 15:
        return wl(e.type, !1);
      case 11:
        return wl(e.type.render, !1);
      case 1:
        return wl(e.type, !0);
      case 31:
        return ke("Activity");
      default:
        return "";
    }
  }
  function pr(e) {
    try {
      var t = "", n = null;
      do
        t += bn(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var $a = Object.prototype.hasOwnProperty, Tl = o.unstable_scheduleCallback, kl = o.unstable_cancelCallback, vn = o.unstable_shouldYield, Pa = o.unstable_requestPaint, Ye = o.unstable_now, mr = o.unstable_getCurrentPriorityLevel, El = o.unstable_ImmediatePriority, xl = o.unstable_UserBlockingPriority, ia = o.unstable_NormalPriority, oa = o.unstable_LowPriority, Ka = o.unstable_IdlePriority, _l = o.log, ki = o.unstable_setDisableYieldValue, ua = null, pt = null;
  function It(e) {
    if (typeof _l == "function" && ki(e), pt && typeof pt.setStrictMode == "function")
      try {
        pt.setStrictMode(ua, e);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : hr, sa = Math.log, Qt = Math.LN2;
  function hr(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (sa(e) / Qt | 0) | 0;
  }
  var Za = 256, Wa = 262144, ca = 4194304;
  function Sn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Mn(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0, i = e.suspendedLanes, u = e.pingedLanes;
    e = e.warmLanes;
    var d = a & 134217727;
    return d !== 0 ? (a = d & ~i, a !== 0 ? l = Sn(a) : (u &= d, u !== 0 ? l = Sn(u) : n || (n = d & ~e, n !== 0 && (l = Sn(n))))) : (d = a & ~i, d !== 0 ? l = Sn(d) : u !== 0 ? l = Sn(u) : n || (n = a & ~e, n !== 0 && (l = Sn(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
  }
  function wn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function $t(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ln() {
    var e = ca;
    return ca <<= 1, (ca & 62914560) === 0 && (ca = 4194304), e;
  }
  function Ja(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function jn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Jo(e, t, n, a, l, i) {
    var u = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var d = e.entanglements, m = e.expirationTimes, x = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var N = 31 - rt(n), M = 1 << N;
      d[N] = 0, m[N] = -1;
      var _ = x[N];
      if (_ !== null)
        for (x[N] = null, N = 0; N < _.length; N++) {
          var A = _[N];
          A !== null && (A.lane &= -536870913);
        }
      n &= ~M;
    }
    a !== 0 && gr(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(u & ~t));
  }
  function gr(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - rt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Al(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - rt(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  function yr(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : el(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function el(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function br(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function fa() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : um(e.type));
  }
  function Ei(e, t) {
    var n = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = n;
    }
  }
  var Tn = Math.random().toString(36).slice(2), oe = "__reactFiber$" + Tn, Fe = "__reactProps$" + Tn, da = "__reactContainer$" + Tn, zl = "__reactEvents$" + Tn, vr = "__reactListeners$" + Tn, xi = "__reactHandles$" + Tn, Sr = "__reactResources$" + Tn, tl = "__reactMarker$" + Tn;
  function wr(e) {
    delete e[oe], delete e[Fe], delete e[zl], delete e[vr], delete e[xi];
  }
  function pa(e) {
    var t = e[oe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[da] || n[oe]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Ip(e); e !== null; ) {
            if (n = e[oe]) return n;
            e = Ip(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ma(e) {
    if (e = e[oe] || e[da]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Dt(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Un(e) {
    var t = e[Sr];
    return t || (t = e[Sr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Me(e) {
    e[tl] = !0;
  }
  var _i = /* @__PURE__ */ new Set(), Ai = {};
  function kn(e, t) {
    Hn(e, t), Hn(e + "Capture", t);
  }
  function Hn(e, t) {
    for (Ai[e] = t, e = 0; e < t.length; e++)
      _i.add(t[e]);
  }
  var Nl = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ol = {}, nl = {};
  function ha(e) {
    return $a.call(nl, e) ? !0 : $a.call(Ol, e) ? !1 : Nl.test(e) ? nl[e] = !0 : (Ol[e] = !0, !1);
  }
  function En(e, t, n) {
    if (ha(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Et(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function pn(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  function xt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Tr(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function zi(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var l = a.get, i = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return l.call(this);
        },
        set: function(u) {
          n = "" + u, i.call(this, u);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(u) {
          n = "" + u;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function kr(e) {
    if (!e._valueTracker) {
      var t = Tr(e) ? "checked" : "value";
      e._valueTracker = zi(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Er(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Tr(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Cl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var eu = /[\n"\\]/g;
  function kt(e) {
    return e.replace(
      eu,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ga(e, t, n, a, l, i, u, d) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + xt(t)) : e.value !== "" + xt(t) && (e.value = "" + xt(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? v(e, u, xt(t)) : n != null ? v(e, u, xt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + xt(d) : e.removeAttribute("name");
  }
  function Rl(e, t, n, a, l, i, u, d) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        kr(e);
        return;
      }
      n = n != null ? "" + xt(n) : "", t = t != null ? "" + xt(t) : n, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = d ? e.checked : !!a, e.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), kr(e);
  }
  function v(e, t, n) {
    t === "number" && Cl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function y(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, a && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function z(e, t, n) {
    if (t != null && (t = "" + xt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + xt(n) : "";
  }
  function q(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (U(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = xt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), kr(e);
  }
  function K(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var he = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function be(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || he.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function mt(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && be(e, l, a);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && be(e, i, t[i]);
  }
  function at(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vt = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), on = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _t(e) {
    return on.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function it() {
  }
  var tu = null;
  function nu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Dl = null, Ml = null;
  function jc(e) {
    var t = ma(e);
    if (t && (e = t.stateNode)) {
      var n = e[Fe] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ga(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + kt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[Fe] || null;
                if (!l) throw Error(c(90));
                ga(
                  a,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              a = n[t], a.form === e.form && Er(a);
          }
          break e;
        case "textarea":
          z(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && y(e, !!n.multiple, t, !1);
      }
    }
  }
  var au = !1;
  function Uc(e, t, n) {
    if (au) return e(t, n);
    au = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (au = !1, (Dl !== null || Ml !== null) && (go(), Dl && (t = Dl, e = Ml, Ml = Dl = null, jc(t), e)))
        for (t = 0; t < e.length; t++) jc(e[t]);
    }
  }
  function xr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[Fe] || null;
    if (a === null) return null;
    n = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        c(231, t, typeof n)
      );
    return n;
  }
  var Bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lu = !1;
  if (Bn)
    try {
      var _r = {};
      Object.defineProperty(_r, "passive", {
        get: function() {
          lu = !0;
        }
      }), window.addEventListener("test", _r, _r), window.removeEventListener("test", _r, _r);
    } catch {
      lu = !1;
    }
  var ya = null, ru = null, Ni = null;
  function Hc() {
    if (Ni) return Ni;
    var e, t = ru, n = t.length, a, l = "value" in ya ? ya.value : ya.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var u = n - e;
    for (a = 1; a <= u && t[n - a] === l[i - a]; a++) ;
    return Ni = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Oi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ci() {
    return !0;
  }
  function Bc() {
    return !1;
  }
  function At(e) {
    function t(n, a, l, i, u) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (n = e[d], this[d] = n ? n(i) : i[d]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ci : Bc, this.isPropagationStopped = Bc, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ci);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ci);
      },
      persist: function() {
      },
      isPersistent: Ci
    }), t;
  }
  var al = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ri = At(al), Ar = R({}, al, { view: 0, detail: 0 }), Gh = At(Ar), iu, ou, zr, Di = R({}, Ar, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: su,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== zr && (zr && e.type === "mousemove" ? (iu = e.screenX - zr.screenX, ou = e.screenY - zr.screenY) : ou = iu = 0, zr = e), iu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ou;
    }
  }), qc = At(Di), Yh = R({}, Di, { dataTransfer: 0 }), Fh = At(Yh), Xh = R({}, Ar, { relatedTarget: 0 }), uu = At(Xh), Ih = R({}, al, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Qh = At(Ih), $h = R({}, al, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Ph = At($h), Kh = R({}, al, { data: 0 }), Vc = At(Kh), Zh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Wh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Jh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function eg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Jh[e]) ? !!t[e] : !1;
  }
  function su() {
    return eg;
  }
  var tg = R({}, Ar, {
    key: function(e) {
      if (e.key) {
        var t = Zh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: su,
    charCode: function(e) {
      return e.type === "keypress" ? Oi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), ng = At(tg), ag = R({}, Di, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Gc = At(ag), lg = R({}, Ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: su
  }), rg = At(lg), ig = R({}, al, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), og = At(ig), ug = R({}, Di, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sg = At(ug), cg = R({}, al, {
    newState: 0,
    oldState: 0
  }), fg = At(cg), dg = [9, 13, 27, 32], cu = Bn && "CompositionEvent" in window, Nr = null;
  Bn && "documentMode" in document && (Nr = document.documentMode);
  var pg = Bn && "TextEvent" in window && !Nr, Yc = Bn && (!cu || Nr && 8 < Nr && 11 >= Nr), Fc = " ", Xc = !1;
  function Ic(e, t) {
    switch (e) {
      case "keyup":
        return dg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Qc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ll = !1;
  function mg(e, t) {
    switch (e) {
      case "compositionend":
        return Qc(t);
      case "keypress":
        return t.which !== 32 ? null : (Xc = !0, Fc);
      case "textInput":
        return e = t.data, e === Fc && Xc ? null : e;
      default:
        return null;
    }
  }
  function hg(e, t) {
    if (Ll)
      return e === "compositionend" || !cu && Ic(e, t) ? (e = Hc(), Ni = ru = ya = null, Ll = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Yc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var gg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function $c(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gg[e.type] : t === "textarea";
  }
  function Pc(e, t, n, a) {
    Dl ? Ml ? Ml.push(a) : Ml = [a] : Dl = a, t = ko(t, "onChange"), 0 < t.length && (n = new Ri(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Or = null, Cr = null;
  function yg(e) {
    Rp(e, 0);
  }
  function Mi(e) {
    var t = Dt(e);
    if (Er(t)) return e;
  }
  function Kc(e, t) {
    if (e === "change") return t;
  }
  var Zc = !1;
  if (Bn) {
    var fu;
    if (Bn) {
      var du = "oninput" in document;
      if (!du) {
        var Wc = document.createElement("div");
        Wc.setAttribute("oninput", "return;"), du = typeof Wc.oninput == "function";
      }
      fu = du;
    } else fu = !1;
    Zc = fu && (!document.documentMode || 9 < document.documentMode);
  }
  function Jc() {
    Or && (Or.detachEvent("onpropertychange", ef), Cr = Or = null);
  }
  function ef(e) {
    if (e.propertyName === "value" && Mi(Cr)) {
      var t = [];
      Pc(
        t,
        Cr,
        e,
        nu(e)
      ), Uc(yg, t);
    }
  }
  function bg(e, t, n) {
    e === "focusin" ? (Jc(), Or = t, Cr = n, Or.attachEvent("onpropertychange", ef)) : e === "focusout" && Jc();
  }
  function vg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Mi(Cr);
  }
  function Sg(e, t) {
    if (e === "click") return Mi(t);
  }
  function wg(e, t) {
    if (e === "input" || e === "change")
      return Mi(t);
  }
  function Tg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ut = typeof Object.is == "function" ? Object.is : Tg;
  function Rr(e, t) {
    if (Ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!$a.call(t, l) || !Ut(e[l], t[l]))
        return !1;
    }
    return !0;
  }
  function tf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nf(e, t) {
    var n = tf(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = e + n.textContent.length, e <= t && a >= t)
          return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = tf(n);
    }
  }
  function af(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? af(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function lf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Cl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Cl(e.document);
    }
    return t;
  }
  function pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var kg = Bn && "documentMode" in document && 11 >= document.documentMode, jl = null, mu = null, Dr = null, hu = !1;
  function rf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    hu || jl == null || jl !== Cl(a) || (a = jl, "selectionStart" in a && pu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Dr && Rr(Dr, a) || (Dr = a, a = ko(mu, "onSelect"), 0 < a.length && (t = new Ri(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = jl)));
  }
  function ll(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ul = {
    animationend: ll("Animation", "AnimationEnd"),
    animationiteration: ll("Animation", "AnimationIteration"),
    animationstart: ll("Animation", "AnimationStart"),
    transitionrun: ll("Transition", "TransitionRun"),
    transitionstart: ll("Transition", "TransitionStart"),
    transitioncancel: ll("Transition", "TransitionCancel"),
    transitionend: ll("Transition", "TransitionEnd")
  }, gu = {}, of = {};
  Bn && (of = document.createElement("div").style, "AnimationEvent" in window || (delete Ul.animationend.animation, delete Ul.animationiteration.animation, delete Ul.animationstart.animation), "TransitionEvent" in window || delete Ul.transitionend.transition);
  function rl(e) {
    if (gu[e]) return gu[e];
    if (!Ul[e]) return e;
    var t = Ul[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in of)
        return gu[e] = t[n];
    return e;
  }
  var uf = rl("animationend"), sf = rl("animationiteration"), cf = rl("animationstart"), Eg = rl("transitionrun"), xg = rl("transitionstart"), _g = rl("transitioncancel"), ff = rl("transitionend"), df = /* @__PURE__ */ new Map(), yu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yu.push("scrollEnd");
  function mn(e, t) {
    df.set(e, t), kn(t, [e]);
  }
  var Li = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof r == "object" && typeof r.emit == "function") {
      r.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Pt = [], Hl = 0, bu = 0;
  function ji() {
    for (var e = Hl, t = bu = Hl = 0; t < e; ) {
      var n = Pt[t];
      Pt[t++] = null;
      var a = Pt[t];
      Pt[t++] = null;
      var l = Pt[t];
      Pt[t++] = null;
      var i = Pt[t];
      if (Pt[t++] = null, a !== null && l !== null) {
        var u = a.pending;
        u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l;
      }
      i !== 0 && pf(n, l, i);
    }
  }
  function Ui(e, t, n, a) {
    Pt[Hl++] = e, Pt[Hl++] = t, Pt[Hl++] = n, Pt[Hl++] = a, bu |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function vu(e, t, n, a) {
    return Ui(e, t, n, a), Hi(e);
  }
  function il(e, t) {
    return Ui(e, null, null, t), Hi(e);
  }
  function pf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, i = e.return; i !== null; )
      i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - rt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
  }
  function Hi(e) {
    if (50 < ti)
      throw ti = 0, zs = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Bl = {};
  function Ag(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, n, a) {
    return new Ag(e, t, n, a);
  }
  function Su(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function qn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ht(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function mf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Bi(e, t, n, a, l, i) {
    var u = 0;
    if (a = e, typeof e == "function") Su(e) && (u = 1);
    else if (typeof e == "string")
      u = Ry(
        e,
        n,
        ye.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case He:
          return e = Ht(31, n, t, l), e.elementType = He, e.lanes = i, e;
        case I:
          return ol(n.children, l, i, t);
        case P:
          u = 8, l |= 24;
          break;
        case H:
          return e = Ht(12, n, t, l | 2), e.elementType = H, e.lanes = i, e;
        case Y:
          return e = Ht(13, n, t, l), e.elementType = Y, e.lanes = i, e;
        case F:
          return e = Ht(19, n, t, l), e.elementType = F, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case J:
                u = 10;
                break e;
              case ce:
                u = 9;
                break e;
              case ne:
                u = 11;
                break e;
              case ee:
                u = 14;
                break e;
              case Ee:
                u = 16, a = null;
                break e;
            }
          u = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Ht(u, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
  }
  function ol(e, t, n, a) {
    return e = Ht(7, e, a, t), e.lanes = n, e;
  }
  function wu(e, t, n) {
    return e = Ht(6, e, null, t), e.lanes = n, e;
  }
  function hf(e) {
    var t = Ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Tu(e, t, n) {
    return t = Ht(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var gf = /* @__PURE__ */ new WeakMap();
  function Kt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = gf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: pr(t)
      }, gf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: pr(t)
    };
  }
  var ql = [], Vl = 0, qi = null, Mr = 0, Zt = [], Wt = 0, ba = null, xn = 1, _n = "";
  function Vn(e, t) {
    ql[Vl++] = Mr, ql[Vl++] = qi, qi = e, Mr = t;
  }
  function yf(e, t, n) {
    Zt[Wt++] = xn, Zt[Wt++] = _n, Zt[Wt++] = ba, ba = e;
    var a = xn;
    e = _n;
    var l = 32 - rt(a) - 1;
    a &= ~(1 << l), n += 1;
    var i = 32 - rt(t) + l;
    if (30 < i) {
      var u = l - l % 5;
      i = (a & (1 << u) - 1).toString(32), a >>= u, l -= u, xn = 1 << 32 - rt(t) + l | n << l | a, _n = i + e;
    } else
      xn = 1 << i | n << l | a, _n = e;
  }
  function ku(e) {
    e.return !== null && (Vn(e, 1), yf(e, 1, 0));
  }
  function Eu(e) {
    for (; e === qi; )
      qi = ql[--Vl], ql[Vl] = null, Mr = ql[--Vl], ql[Vl] = null;
    for (; e === ba; )
      ba = Zt[--Wt], Zt[Wt] = null, _n = Zt[--Wt], Zt[Wt] = null, xn = Zt[--Wt], Zt[Wt] = null;
  }
  function bf(e, t) {
    Zt[Wt++] = xn, Zt[Wt++] = _n, Zt[Wt++] = ba, xn = t.id, _n = t.overflow, ba = e;
  }
  var ot = null, Le = null, ge = !1, va = null, Jt = !1, xu = Error(c(519));
  function Sa(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Lr(Kt(t, e)), xu;
  }
  function vf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[oe] = e, t[Fe] = a, n) {
      case "dialog":
        de("cancel", t), de("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        de("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ai.length; n++)
          de(ai[n], t);
        break;
      case "source":
        de("error", t);
        break;
      case "img":
      case "image":
      case "link":
        de("error", t), de("load", t);
        break;
      case "details":
        de("toggle", t);
        break;
      case "input":
        de("invalid", t), Rl(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), q(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || jp(t.textContent, n) ? (a.popover != null && (de("beforetoggle", t), de("toggle", t)), a.onScroll != null && de("scroll", t), a.onScrollEnd != null && de("scrollend", t), a.onClick != null && (t.onclick = it), t = !0) : t = !1, t || Sa(e, !0);
  }
  function Sf(e) {
    for (ot = e.return; ot; )
      switch (ot.tag) {
        case 5:
        case 31:
        case 13:
          Jt = !1;
          return;
        case 27:
        case 3:
          Jt = !0;
          return;
        default:
          ot = ot.return;
      }
  }
  function Gl(e) {
    if (e !== ot) return !1;
    if (!ge) return Sf(e), ge = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Ys(e.type, e.memoizedProps)), n = !n), n && Le && Sa(e), Sf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = Xp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = Xp(e);
    } else
      t === 27 ? (t = Le, Ma(e.type) ? (e = $s, $s = null, Le = e) : Le = t) : Le = ot ? en(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ul() {
    Le = ot = null, ge = !1;
  }
  function _u() {
    var e = va;
    return e !== null && (Ct === null ? Ct = e : Ct.push.apply(
      Ct,
      e
    ), va = null), e;
  }
  function Lr(e) {
    va === null ? va = [e] : va.push(e);
  }
  var Au = we(null), sl = null, Gn = null;
  function wa(e, t, n) {
    Z(Au, t._currentValue), t._currentValue = n;
  }
  function Yn(e) {
    e._currentValue = Au.current, ue(Au);
  }
  function zu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Nu(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var i = l.dependencies;
      if (i !== null) {
        var u = l.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var d = i;
          i = l;
          for (var m = 0; m < t.length; m++)
            if (d.context === t[m]) {
              i.lanes |= n, d = i.alternate, d !== null && (d.lanes |= n), zu(
                i.return,
                n,
                e
              ), a || (u = null);
              break e;
            }
          i = d.next;
        }
      } else if (l.tag === 18) {
        if (u = l.return, u === null) throw Error(c(341));
        u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), zu(u, n, e), u = null;
      } else u = l.child;
      if (u !== null) u.return = l;
      else
        for (u = l; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          if (l = u.sibling, l !== null) {
            l.return = u.return, u = l;
            break;
          }
          u = u.return;
        }
      l = u;
    }
  }
  function Yl(e, t, n, a) {
    e = null;
    for (var l = t, i = !1; l !== null; ) {
      if (!i) {
        if ((l.flags & 524288) !== 0) i = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var u = l.alternate;
        if (u === null) throw Error(c(387));
        if (u = u.memoizedProps, u !== null) {
          var d = l.type;
          Ut(l.pendingProps.value, u.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (l === fn.current) {
        if (u = l.alternate, u === null) throw Error(c(387));
        u.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(ui) : e = [ui]);
      }
      l = l.return;
    }
    e !== null && Nu(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function Vi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ut(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function cl(e) {
    sl = e, Gn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ut(e) {
    return wf(sl, e);
  }
  function Gi(e, t) {
    return sl === null && cl(e), wf(e, t);
  }
  function wf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Gn === null) {
      if (e === null) throw Error(c(308));
      Gn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Gn = Gn.next = t;
    return n;
  }
  var zg = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, Ng = o.unstable_scheduleCallback, Og = o.unstable_NormalPriority, $e = {
    $$typeof: J,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ou() {
    return {
      controller: new zg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function jr(e) {
    e.refCount--, e.refCount === 0 && Ng(Og, function() {
      e.controller.abort();
    });
  }
  var Ur = null, Cu = 0, Fl = 0, Xl = null;
  function Cg(e, t) {
    if (Ur === null) {
      var n = Ur = [];
      Cu = 0, Fl = Ms(), Xl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Cu++, t.then(Tf, Tf), t;
  }
  function Tf() {
    if (--Cu === 0 && Ur !== null) {
      Xl !== null && (Xl.status = "fulfilled");
      var e = Ur;
      Ur = null, Fl = 0, Xl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Rg(e, t) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(l) {
        n.push(l);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var l = 0; l < n.length; l++) (0, n[l])(t);
      },
      function(l) {
        for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
          (0, n[l])(void 0);
      }
    ), a;
  }
  var kf = L.S;
  L.S = function(e, t) {
    ip = Ye(), typeof t == "object" && t !== null && typeof t.then == "function" && Cg(e, t), kf !== null && kf(e, t);
  };
  var fl = we(null);
  function Ru() {
    var e = fl.current;
    return e !== null ? e : Ce.pooledCache;
  }
  function Yi(e, t) {
    t === null ? Z(fl, fl.current) : Z(fl, t.pool);
  }
  function Ef() {
    var e = Ru();
    return e === null ? null : { parent: $e._currentValue, pool: e };
  }
  var Il = Error(c(460)), Du = Error(c(474)), Fi = Error(c(542)), Xi = { then: function() {
  } };
  function xf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function _f(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(it, it), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, zf(e), e;
      default:
        if (typeof t.status == "string") t.then(it, it);
        else {
          if (e = Ce, e !== null && 100 < e.shellSuspendCounter)
            throw Error(c(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var l = t;
                l.status = "fulfilled", l.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var l = t;
                l.status = "rejected", l.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, zf(e), e;
        }
        throw pl = t, Il;
    }
  }
  function dl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (pl = n, Il) : n;
    }
  }
  var pl = null;
  function Af() {
    if (pl === null) throw Error(c(459));
    var e = pl;
    return pl = null, e;
  }
  function zf(e) {
    if (e === Il || e === Fi)
      throw Error(c(483));
  }
  var Ql = null, Hr = 0;
  function Ii(e) {
    var t = Hr;
    return Hr += 1, Ql === null && (Ql = []), _f(Ql, e, t);
  }
  function Br(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Qi(e, t) {
    throw t.$$typeof === $ ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Nf(e) {
    function t(w, b) {
      if (e) {
        var E = w.deletions;
        E === null ? (w.deletions = [b], w.flags |= 16) : E.push(b);
      }
    }
    function n(w, b) {
      if (!e) return null;
      for (; b !== null; )
        t(w, b), b = b.sibling;
      return null;
    }
    function a(w) {
      for (var b = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? b.set(w.key, w) : b.set(w.index, w), w = w.sibling;
      return b;
    }
    function l(w, b) {
      return w = qn(w, b), w.index = 0, w.sibling = null, w;
    }
    function i(w, b, E) {
      return w.index = E, e ? (E = w.alternate, E !== null ? (E = E.index, E < b ? (w.flags |= 67108866, b) : E) : (w.flags |= 67108866, b)) : (w.flags |= 1048576, b);
    }
    function u(w) {
      return e && w.alternate === null && (w.flags |= 67108866), w;
    }
    function d(w, b, E, D) {
      return b === null || b.tag !== 6 ? (b = wu(E, w.mode, D), b.return = w, b) : (b = l(b, E), b.return = w, b);
    }
    function m(w, b, E, D) {
      var W = E.type;
      return W === I ? N(
        w,
        b,
        E.props.children,
        D,
        E.key
      ) : b !== null && (b.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ee && dl(W) === b.type) ? (b = l(b, E.props), Br(b, E), b.return = w, b) : (b = Bi(
        E.type,
        E.key,
        E.props,
        null,
        w.mode,
        D
      ), Br(b, E), b.return = w, b);
    }
    function x(w, b, E, D) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== E.containerInfo || b.stateNode.implementation !== E.implementation ? (b = Tu(E, w.mode, D), b.return = w, b) : (b = l(b, E.children || []), b.return = w, b);
    }
    function N(w, b, E, D, W) {
      return b === null || b.tag !== 7 ? (b = ol(
        E,
        w.mode,
        D,
        W
      ), b.return = w, b) : (b = l(b, E), b.return = w, b);
    }
    function M(w, b, E) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return b = wu(
          "" + b,
          w.mode,
          E
        ), b.return = w, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case j:
            return E = Bi(
              b.type,
              b.key,
              b.props,
              null,
              w.mode,
              E
            ), Br(E, b), E.return = w, E;
          case V:
            return b = Tu(
              b,
              w.mode,
              E
            ), b.return = w, b;
          case Ee:
            return b = dl(b), M(w, b, E);
        }
        if (U(b) || Ae(b))
          return b = ol(
            b,
            w.mode,
            E,
            null
          ), b.return = w, b;
        if (typeof b.then == "function")
          return M(w, Ii(b), E);
        if (b.$$typeof === J)
          return M(
            w,
            Gi(w, b),
            E
          );
        Qi(w, b);
      }
      return null;
    }
    function _(w, b, E, D) {
      var W = b !== null ? b.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return W !== null ? null : d(w, b, "" + E, D);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case j:
            return E.key === W ? m(w, b, E, D) : null;
          case V:
            return E.key === W ? x(w, b, E, D) : null;
          case Ee:
            return E = dl(E), _(w, b, E, D);
        }
        if (U(E) || Ae(E))
          return W !== null ? null : N(w, b, E, D, null);
        if (typeof E.then == "function")
          return _(
            w,
            b,
            Ii(E),
            D
          );
        if (E.$$typeof === J)
          return _(
            w,
            b,
            Gi(w, E),
            D
          );
        Qi(w, E);
      }
      return null;
    }
    function A(w, b, E, D, W) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return w = w.get(E) || null, d(b, w, "" + D, W);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case j:
            return w = w.get(
              D.key === null ? E : D.key
            ) || null, m(b, w, D, W);
          case V:
            return w = w.get(
              D.key === null ? E : D.key
            ) || null, x(b, w, D, W);
          case Ee:
            return D = dl(D), A(
              w,
              b,
              E,
              D,
              W
            );
        }
        if (U(D) || Ae(D))
          return w = w.get(E) || null, N(b, w, D, W, null);
        if (typeof D.then == "function")
          return A(
            w,
            b,
            E,
            Ii(D),
            W
          );
        if (D.$$typeof === J)
          return A(
            w,
            b,
            E,
            Gi(b, D),
            W
          );
        Qi(b, D);
      }
      return null;
    }
    function X(w, b, E, D) {
      for (var W = null, ve = null, Q = b, le = b = 0, me = null; Q !== null && le < E.length; le++) {
        Q.index > le ? (me = Q, Q = null) : me = Q.sibling;
        var Se = _(
          w,
          Q,
          E[le],
          D
        );
        if (Se === null) {
          Q === null && (Q = me);
          break;
        }
        e && Q && Se.alternate === null && t(w, Q), b = i(Se, b, le), ve === null ? W = Se : ve.sibling = Se, ve = Se, Q = me;
      }
      if (le === E.length)
        return n(w, Q), ge && Vn(w, le), W;
      if (Q === null) {
        for (; le < E.length; le++)
          Q = M(w, E[le], D), Q !== null && (b = i(
            Q,
            b,
            le
          ), ve === null ? W = Q : ve.sibling = Q, ve = Q);
        return ge && Vn(w, le), W;
      }
      for (Q = a(Q); le < E.length; le++)
        me = A(
          Q,
          w,
          le,
          E[le],
          D
        ), me !== null && (e && me.alternate !== null && Q.delete(
          me.key === null ? le : me.key
        ), b = i(
          me,
          b,
          le
        ), ve === null ? W = me : ve.sibling = me, ve = me);
      return e && Q.forEach(function(Ba) {
        return t(w, Ba);
      }), ge && Vn(w, le), W;
    }
    function te(w, b, E, D) {
      if (E == null) throw Error(c(151));
      for (var W = null, ve = null, Q = b, le = b = 0, me = null, Se = E.next(); Q !== null && !Se.done; le++, Se = E.next()) {
        Q.index > le ? (me = Q, Q = null) : me = Q.sibling;
        var Ba = _(w, Q, Se.value, D);
        if (Ba === null) {
          Q === null && (Q = me);
          break;
        }
        e && Q && Ba.alternate === null && t(w, Q), b = i(Ba, b, le), ve === null ? W = Ba : ve.sibling = Ba, ve = Ba, Q = me;
      }
      if (Se.done)
        return n(w, Q), ge && Vn(w, le), W;
      if (Q === null) {
        for (; !Se.done; le++, Se = E.next())
          Se = M(w, Se.value, D), Se !== null && (b = i(Se, b, le), ve === null ? W = Se : ve.sibling = Se, ve = Se);
        return ge && Vn(w, le), W;
      }
      for (Q = a(Q); !Se.done; le++, Se = E.next())
        Se = A(Q, w, le, Se.value, D), Se !== null && (e && Se.alternate !== null && Q.delete(Se.key === null ? le : Se.key), b = i(Se, b, le), ve === null ? W = Se : ve.sibling = Se, ve = Se);
      return e && Q.forEach(function(Yy) {
        return t(w, Yy);
      }), ge && Vn(w, le), W;
    }
    function Oe(w, b, E, D) {
      if (typeof E == "object" && E !== null && E.type === I && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case j:
            e: {
              for (var W = E.key; b !== null; ) {
                if (b.key === W) {
                  if (W = E.type, W === I) {
                    if (b.tag === 7) {
                      n(
                        w,
                        b.sibling
                      ), D = l(
                        b,
                        E.props.children
                      ), D.return = w, w = D;
                      break e;
                    }
                  } else if (b.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ee && dl(W) === b.type) {
                    n(
                      w,
                      b.sibling
                    ), D = l(b, E.props), Br(D, E), D.return = w, w = D;
                    break e;
                  }
                  n(w, b);
                  break;
                } else t(w, b);
                b = b.sibling;
              }
              E.type === I ? (D = ol(
                E.props.children,
                w.mode,
                D,
                E.key
              ), D.return = w, w = D) : (D = Bi(
                E.type,
                E.key,
                E.props,
                null,
                w.mode,
                D
              ), Br(D, E), D.return = w, w = D);
            }
            return u(w);
          case V:
            e: {
              for (W = E.key; b !== null; ) {
                if (b.key === W)
                  if (b.tag === 4 && b.stateNode.containerInfo === E.containerInfo && b.stateNode.implementation === E.implementation) {
                    n(
                      w,
                      b.sibling
                    ), D = l(b, E.children || []), D.return = w, w = D;
                    break e;
                  } else {
                    n(w, b);
                    break;
                  }
                else t(w, b);
                b = b.sibling;
              }
              D = Tu(E, w.mode, D), D.return = w, w = D;
            }
            return u(w);
          case Ee:
            return E = dl(E), Oe(
              w,
              b,
              E,
              D
            );
        }
        if (U(E))
          return X(
            w,
            b,
            E,
            D
          );
        if (Ae(E)) {
          if (W = Ae(E), typeof W != "function") throw Error(c(150));
          return E = W.call(E), te(
            w,
            b,
            E,
            D
          );
        }
        if (typeof E.then == "function")
          return Oe(
            w,
            b,
            Ii(E),
            D
          );
        if (E.$$typeof === J)
          return Oe(
            w,
            b,
            Gi(w, E),
            D
          );
        Qi(w, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, b !== null && b.tag === 6 ? (n(w, b.sibling), D = l(b, E), D.return = w, w = D) : (n(w, b), D = wu(E, w.mode, D), D.return = w, w = D), u(w)) : n(w, b);
    }
    return function(w, b, E, D) {
      try {
        Hr = 0;
        var W = Oe(
          w,
          b,
          E,
          D
        );
        return Ql = null, W;
      } catch (Q) {
        if (Q === Il || Q === Fi) throw Q;
        var ve = Ht(29, Q, null, w.mode);
        return ve.lanes = D, ve.return = w, ve;
      } finally {
      }
    };
  }
  var ml = Nf(!0), Of = Nf(!1), Ta = !1;
  function Mu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Lu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ka(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ea(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Te & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = Hi(e), pf(e, null, n), t;
    }
    return Ui(e, a, t, n), Hi(e);
  }
  function qr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Al(e, n);
    }
  }
  function ju(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          i === null ? l = i = u : i = i.next = u, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Uu = !1;
  function Vr() {
    if (Uu) {
      var e = Xl;
      if (e !== null) throw e;
    }
  }
  function Gr(e, t, n, a) {
    Uu = !1;
    var l = e.updateQueue;
    Ta = !1;
    var i = l.firstBaseUpdate, u = l.lastBaseUpdate, d = l.shared.pending;
    if (d !== null) {
      l.shared.pending = null;
      var m = d, x = m.next;
      m.next = null, u === null ? i = x : u.next = x, u = m;
      var N = e.alternate;
      N !== null && (N = N.updateQueue, d = N.lastBaseUpdate, d !== u && (d === null ? N.firstBaseUpdate = x : d.next = x, N.lastBaseUpdate = m));
    }
    if (i !== null) {
      var M = l.baseState;
      u = 0, N = x = m = null, d = i;
      do {
        var _ = d.lane & -536870913, A = _ !== d.lane;
        if (A ? (pe & _) === _ : (a & _) === _) {
          _ !== 0 && _ === Fl && (Uu = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e, te = d;
            _ = t;
            var Oe = n;
            switch (te.tag) {
              case 1:
                if (X = te.payload, typeof X == "function") {
                  M = X.call(Oe, M, _);
                  break e;
                }
                M = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = te.payload, _ = typeof X == "function" ? X.call(Oe, M, _) : X, _ == null) break e;
                M = R({}, M, _);
                break e;
              case 2:
                Ta = !0;
            }
          }
          _ = d.callback, _ !== null && (e.flags |= 64, A && (e.flags |= 8192), A = l.callbacks, A === null ? l.callbacks = [_] : A.push(_));
        } else
          A = {
            lane: _,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, N === null ? (x = N = A, m = M) : N = N.next = A, u |= _;
        if (d = d.next, d === null) {
          if (d = l.shared.pending, d === null)
            break;
          A = d, d = A.next, A.next = null, l.lastBaseUpdate = A, l.shared.pending = null;
        }
      } while (!0);
      N === null && (m = M), l.baseState = m, l.firstBaseUpdate = x, l.lastBaseUpdate = N, i === null && (l.shared.lanes = 0), Na |= u, e.lanes = u, e.memoizedState = M;
    }
  }
  function Cf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Rf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Cf(n[e], t);
  }
  var $l = we(null), $i = we(0);
  function Df(e, t) {
    e = Wn, Z($i, e), Z($l, t), Wn = e | t.baseLanes;
  }
  function Hu() {
    Z($i, Wn), Z($l, $l.current);
  }
  function Bu() {
    Wn = $i.current, ue($l), ue($i);
  }
  var Bt = we(null), un = null;
  function xa(e) {
    var t = e.alternate;
    Z(Xe, Xe.current & 1), Z(Bt, e), un === null && (t === null || $l.current !== null || t.memoizedState !== null) && (un = e);
  }
  function qu(e) {
    Z(Xe, Xe.current), Z(Bt, e), un === null && (un = e);
  }
  function Mf(e) {
    e.tag === 22 ? (Z(Xe, Xe.current), Z(Bt, e), un === null && (un = e)) : _a();
  }
  function _a() {
    Z(Xe, Xe.current), Z(Bt, Bt.current);
  }
  function qt(e) {
    ue(Bt), un === e && (un = null), ue(Xe);
  }
  var Xe = we(0);
  function Pi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Is(n) || Qs(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Fn = 0, ae = null, ze = null, Pe = null, Ki = !1, Pl = !1, hl = !1, Zi = 0, Yr = 0, Kl = null, Dg = 0;
  function Ve() {
    throw Error(c(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ut(e[n], t[n])) return !1;
    return !0;
  }
  function Gu(e, t, n, a, l, i) {
    return Fn = i, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, L.H = e === null || e.memoizedState === null ? yd : as, hl = !1, i = n(a, l), hl = !1, Pl && (i = jf(
      t,
      n,
      a,
      l
    )), Lf(e), i;
  }
  function Lf(e) {
    L.H = Ir;
    var t = ze !== null && ze.next !== null;
    if (Fn = 0, Pe = ze = ae = null, Ki = !1, Yr = 0, Kl = null, t) throw Error(c(300));
    e === null || Ke || (e = e.dependencies, e !== null && Vi(e) && (Ke = !0));
  }
  function jf(e, t, n, a) {
    ae = e;
    var l = 0;
    do {
      if (Pl && (Kl = null), Yr = 0, Pl = !1, 25 <= l) throw Error(c(301));
      if (l += 1, Pe = ze = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      L.H = bd, i = t(n, a);
    } while (Pl);
    return i;
  }
  function Mg() {
    var e = L.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Fr(t) : t, e = e.useState()[0], (ze !== null ? ze.memoizedState : null) !== e && (ae.flags |= 1024), t;
  }
  function Yu() {
    var e = Zi !== 0;
    return Zi = 0, e;
  }
  function Fu(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Xu(e) {
    if (Ki) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Ki = !1;
    }
    Fn = 0, Pe = ze = ae = null, Pl = !1, Yr = Zi = 0, Kl = null;
  }
  function St() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Pe === null ? ae.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
  }
  function Ie() {
    if (ze === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = Pe === null ? ae.memoizedState : Pe.next;
    if (t !== null)
      Pe = t, ze = e;
    else {
      if (e === null)
        throw ae.alternate === null ? Error(c(467)) : Error(c(310));
      ze = e, e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null
      }, Pe === null ? ae.memoizedState = Pe = e : Pe = Pe.next = e;
    }
    return Pe;
  }
  function Wi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fr(e) {
    var t = Yr;
    return Yr += 1, Kl === null && (Kl = []), e = _f(Kl, e, t), t = ae, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, L.H = t === null || t.memoizedState === null ? yd : as), e;
  }
  function Ji(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Fr(e);
      if (e.$$typeof === J) return ut(e);
    }
    throw Error(c(438, String(e)));
  }
  function Iu(e) {
    var t = null, n = ae.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = ae.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(l) {
          return l.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Wi(), ae.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = qe;
    return t.index++, n;
  }
  function Xn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function eo(e) {
    var t = Ie();
    return Qu(t, ze, e);
  }
  function Qu(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = n;
    var l = e.baseQueue, i = a.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        l.next = i.next, i.next = u;
      }
      t.baseQueue = l = i, a.pending = null;
    }
    if (i = e.baseState, l === null) e.memoizedState = i;
    else {
      t = l.next;
      var d = u = null, m = null, x = t, N = !1;
      do {
        var M = x.lane & -536870913;
        if (M !== x.lane ? (pe & M) === M : (Fn & M) === M) {
          var _ = x.revertLane;
          if (_ === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), M === Fl && (N = !0);
          else if ((Fn & _) === _) {
            x = x.next, _ === Fl && (N = !0);
            continue;
          } else
            M = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, m === null ? (d = m = M, u = i) : m = m.next = M, ae.lanes |= _, Na |= _;
          M = x.action, hl && n(i, M), i = x.hasEagerState ? x.eagerState : n(i, M);
        } else
          _ = {
            lane: M,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, m === null ? (d = m = _, u = i) : m = m.next = _, ae.lanes |= M, Na |= M;
        x = x.next;
      } while (x !== null && x !== t);
      if (m === null ? u = i : m.next = d, !Ut(i, e.memoizedState) && (Ke = !0, N && (n = Xl, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = u, e.baseQueue = m, a.lastRenderedState = i;
    }
    return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function $u(e) {
    var t = Ie(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = l = l.next;
      do
        i = e(i, u.action), u = u.next;
      while (u !== l);
      Ut(i, t.memoizedState) || (Ke = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, a];
  }
  function Uf(e, t, n) {
    var a = ae, l = Ie(), i = ge;
    if (i) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var u = !Ut(
      (ze || l).memoizedState,
      n
    );
    if (u && (l.memoizedState = n, Ke = !0), l = l.queue, Zu(qf.bind(null, a, l, e), [
      e
    ]), l.getSnapshot !== t || u || Pe !== null && Pe.memoizedState.tag & 1) {
      if (a.flags |= 2048, Zl(
        9,
        { destroy: void 0 },
        Bf.bind(
          null,
          a,
          l,
          n,
          t
        ),
        null
      ), Ce === null) throw Error(c(349));
      i || (Fn & 127) !== 0 || Hf(a, t, n);
    }
    return n;
  }
  function Hf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ae.updateQueue, t === null ? (t = Wi(), ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Bf(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Vf(t) && Gf(e);
  }
  function qf(e, t, n) {
    return n(function() {
      Vf(t) && Gf(e);
    });
  }
  function Vf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ut(e, n);
    } catch {
      return !0;
    }
  }
  function Gf(e) {
    var t = il(e, 2);
    t !== null && Rt(t, e, 2);
  }
  function Pu(e) {
    var t = St();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), hl) {
        It(!0);
        try {
          n();
        } finally {
          It(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xn,
      lastRenderedState: e
    }, t;
  }
  function Yf(e, t, n, a) {
    return e.baseState = n, Qu(
      e,
      ze,
      typeof a == "function" ? a : Xn
    );
  }
  function Lg(e, t, n, a, l) {
    if (ao(e)) throw Error(c(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: l,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(u) {
          i.listeners.push(u);
        }
      };
      L.T !== null ? n(!0) : i.isTransition = !1, a(i), n = t.pending, n === null ? (i.next = t.pending = i, Ff(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function Ff(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var i = L.T, u = {};
      L.T = u;
      try {
        var d = n(l, a), m = L.S;
        m !== null && m(u, d), Xf(e, t, d);
      } catch (x) {
        Ku(e, t, x);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), L.T = i;
      }
    } else
      try {
        i = n(l, a), Xf(e, t, i);
      } catch (x) {
        Ku(e, t, x);
      }
  }
  function Xf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        If(e, t, a);
      },
      function(a) {
        return Ku(e, t, a);
      }
    ) : If(e, t, n);
  }
  function If(e, t, n) {
    t.status = "fulfilled", t.value = n, Qf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Ff(e, n)));
  }
  function Ku(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, Qf(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Qf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function $f(e, t) {
    return t;
  }
  function Pf(e, t) {
    if (ge) {
      var n = Ce.formState;
      if (n !== null) {
        e: {
          var a = ae;
          if (ge) {
            if (Le) {
              t: {
                for (var l = Le, i = Jt; l.nodeType !== 8; ) {
                  if (!i) {
                    l = null;
                    break t;
                  }
                  if (l = en(
                    l.nextSibling
                  ), l === null) {
                    l = null;
                    break t;
                  }
                }
                i = l.data, l = i === "F!" || i === "F" ? l : null;
              }
              if (l) {
                Le = en(
                  l.nextSibling
                ), a = l.data === "F!";
                break e;
              }
            }
            Sa(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = St(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $f,
      lastRenderedState: t
    }, n.queue = a, n = md.bind(
      null,
      ae,
      a
    ), a.dispatch = n, a = Pu(!1), i = ns.bind(
      null,
      ae,
      !1,
      a.queue
    ), a = St(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = Lg.bind(
      null,
      ae,
      l,
      i,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function Kf(e) {
    var t = Ie();
    return Zf(t, ze, e);
  }
  function Zf(e, t, n) {
    if (t = Qu(
      e,
      t,
      $f
    )[0], e = eo(Xn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Fr(t);
      } catch (u) {
        throw u === Il ? Fi : u;
      }
    else a = t;
    t = Ie();
    var l = t.queue, i = l.dispatch;
    return n !== t.memoizedState && (ae.flags |= 2048, Zl(
      9,
      { destroy: void 0 },
      jg.bind(null, l, n),
      null
    )), [a, i, e];
  }
  function jg(e, t) {
    e.action = t;
  }
  function Wf(e) {
    var t = Ie(), n = ze;
    if (n !== null)
      return Zf(t, n, e);
    Ie(), t = t.memoizedState, n = Ie();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function Zl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = ae.updateQueue, t === null && (t = Wi(), ae.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Jf() {
    return Ie().memoizedState;
  }
  function to(e, t, n, a) {
    var l = St();
    ae.flags |= e, l.memoizedState = Zl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function no(e, t, n, a) {
    var l = Ie();
    a = a === void 0 ? null : a;
    var i = l.memoizedState.inst;
    ze !== null && a !== null && Vu(a, ze.memoizedState.deps) ? l.memoizedState = Zl(t, i, n, a) : (ae.flags |= e, l.memoizedState = Zl(
      1 | t,
      i,
      n,
      a
    ));
  }
  function ed(e, t) {
    to(8390656, 8, e, t);
  }
  function Zu(e, t) {
    no(2048, 8, e, t);
  }
  function Ug(e) {
    ae.flags |= 4;
    var t = ae.updateQueue;
    if (t === null)
      t = Wi(), ae.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function td(e) {
    var t = Ie().memoizedState;
    return Ug({ ref: t, nextImpl: e }), function() {
      if ((Te & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function nd(e, t) {
    return no(4, 2, e, t);
  }
  function ad(e, t) {
    return no(4, 4, e, t);
  }
  function ld(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function rd(e, t, n) {
    n = n != null ? n.concat([e]) : null, no(4, 4, ld.bind(null, t, e), n);
  }
  function Wu() {
  }
  function id(e, t) {
    var n = Ie();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Vu(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function od(e, t) {
    var n = Ie();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Vu(t, a[1]))
      return a[0];
    if (a = e(), hl) {
      It(!0);
      try {
        e();
      } finally {
        It(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Ju(e, t, n) {
    return n === void 0 || (Fn & 1073741824) !== 0 && (pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = up(), ae.lanes |= e, Na |= e, n);
  }
  function ud(e, t, n, a) {
    return Ut(n, t) ? n : $l.current !== null ? (e = Ju(e, n, a), Ut(e, t) || (Ke = !0), e) : (Fn & 42) === 0 || (Fn & 1073741824) !== 0 && (pe & 261930) === 0 ? (Ke = !0, e.memoizedState = n) : (e = up(), ae.lanes |= e, Na |= e, t);
  }
  function sd(e, t, n, a, l) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var u = L.T, d = {};
    L.T = d, ns(e, !1, t, n);
    try {
      var m = l(), x = L.S;
      if (x !== null && x(d, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var N = Rg(
          m,
          a
        );
        Xr(
          e,
          t,
          N,
          Yt(e)
        );
      } else
        Xr(
          e,
          t,
          a,
          Yt(e)
        );
    } catch (M) {
      Xr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: M },
        Yt()
      );
    } finally {
      G.p = i, u !== null && d.types !== null && (u.types = d.types), L.T = u;
    }
  }
  function Hg() {
  }
  function es(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var l = cd(e).queue;
    sd(
      e,
      l,
      t,
      re,
      n === null ? Hg : function() {
        return fd(e), n(a);
      }
    );
  }
  function cd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: re,
      baseState: re,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xn,
        lastRenderedState: re
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function fd(e) {
    var t = cd(e);
    t.next === null && (t = e.alternate.memoizedState), Xr(
      e,
      t.next.queue,
      {},
      Yt()
    );
  }
  function ts() {
    return ut(ui);
  }
  function dd() {
    return Ie().memoizedState;
  }
  function pd() {
    return Ie().memoizedState;
  }
  function Bg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Yt();
          e = ka(n);
          var a = Ea(t, e, n);
          a !== null && (Rt(a, t, n), qr(a, t, n)), t = { cache: Ou() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function qg(e, t, n) {
    var a = Yt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ao(e) ? hd(t, n) : (n = vu(e, t, n, a), n !== null && (Rt(n, e, a), gd(n, t, a)));
  }
  function md(e, t, n) {
    var a = Yt();
    Xr(e, t, n, a);
  }
  function Xr(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ao(e)) hd(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var u = t.lastRenderedState, d = i(u, n);
          if (l.hasEagerState = !0, l.eagerState = d, Ut(d, u))
            return Ui(e, t, l, 0), Ce === null && ji(), !1;
        } catch {
        } finally {
        }
      if (n = vu(e, t, l, a), n !== null)
        return Rt(n, e, a), gd(n, t, a), !0;
    }
    return !1;
  }
  function ns(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Ms(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ao(e)) {
      if (t) throw Error(c(479));
    } else
      t = vu(
        e,
        n,
        a,
        2
      ), t !== null && Rt(t, e, 2);
  }
  function ao(e) {
    var t = e.alternate;
    return e === ae || t !== null && t === ae;
  }
  function hd(e, t) {
    Pl = Ki = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function gd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Al(e, n);
    }
  }
  var Ir = {
    readContext: ut,
    use: Ji,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useLayoutEffect: Ve,
    useInsertionEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    useHostTransitionStatus: Ve,
    useFormState: Ve,
    useActionState: Ve,
    useOptimistic: Ve,
    useMemoCache: Ve,
    useCacheRefresh: Ve
  };
  Ir.useEffectEvent = Ve;
  var yd = {
    readContext: ut,
    use: Ji,
    useCallback: function(e, t) {
      return St().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ut,
    useEffect: ed,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, to(
        4194308,
        4,
        ld.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return to(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      to(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = St();
      t = t === void 0 ? null : t;
      var a = e();
      if (hl) {
        It(!0);
        try {
          e();
        } finally {
          It(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = St();
      if (n !== void 0) {
        var l = n(t);
        if (hl) {
          It(!0);
          try {
            n(t);
          } finally {
            It(!1);
          }
        }
      } else l = t;
      return a.memoizedState = a.baseState = l, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      }, a.queue = e, e = e.dispatch = qg.bind(
        null,
        ae,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = St();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Pu(e);
      var t = e.queue, n = md.bind(null, ae, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Wu,
    useDeferredValue: function(e, t) {
      var n = St();
      return Ju(n, e, t);
    },
    useTransition: function() {
      var e = Pu(!1);
      return e = sd.bind(
        null,
        ae,
        e.queue,
        !0,
        !1
      ), St().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = ae, l = St();
      if (ge) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Ce === null)
          throw Error(c(349));
        (pe & 127) !== 0 || Hf(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return l.queue = i, ed(qf.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, Zl(
        9,
        { destroy: void 0 },
        Bf.bind(
          null,
          a,
          i,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = St(), t = Ce.identifierPrefix;
      if (ge) {
        var n = _n, a = xn;
        n = (a & ~(1 << 32 - rt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Zi++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Dg++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: ts,
    useFormState: Pf,
    useActionState: Pf,
    useOptimistic: function(e) {
      var t = St();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = ns.bind(
        null,
        ae,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Iu,
    useCacheRefresh: function() {
      return St().memoizedState = Bg.bind(
        null,
        ae
      );
    },
    useEffectEvent: function(e) {
      var t = St(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Te & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, as = {
    readContext: ut,
    use: Ji,
    useCallback: id,
    useContext: ut,
    useEffect: Zu,
    useImperativeHandle: rd,
    useInsertionEffect: nd,
    useLayoutEffect: ad,
    useMemo: od,
    useReducer: eo,
    useRef: Jf,
    useState: function() {
      return eo(Xn);
    },
    useDebugValue: Wu,
    useDeferredValue: function(e, t) {
      var n = Ie();
      return ud(
        n,
        ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = eo(Xn)[0], t = Ie().memoizedState;
      return [
        typeof e == "boolean" ? e : Fr(e),
        t
      ];
    },
    useSyncExternalStore: Uf,
    useId: dd,
    useHostTransitionStatus: ts,
    useFormState: Kf,
    useActionState: Kf,
    useOptimistic: function(e, t) {
      var n = Ie();
      return Yf(n, ze, e, t);
    },
    useMemoCache: Iu,
    useCacheRefresh: pd
  };
  as.useEffectEvent = td;
  var bd = {
    readContext: ut,
    use: Ji,
    useCallback: id,
    useContext: ut,
    useEffect: Zu,
    useImperativeHandle: rd,
    useInsertionEffect: nd,
    useLayoutEffect: ad,
    useMemo: od,
    useReducer: $u,
    useRef: Jf,
    useState: function() {
      return $u(Xn);
    },
    useDebugValue: Wu,
    useDeferredValue: function(e, t) {
      var n = Ie();
      return ze === null ? Ju(n, e, t) : ud(
        n,
        ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = $u(Xn)[0], t = Ie().memoizedState;
      return [
        typeof e == "boolean" ? e : Fr(e),
        t
      ];
    },
    useSyncExternalStore: Uf,
    useId: dd,
    useHostTransitionStatus: ts,
    useFormState: Wf,
    useActionState: Wf,
    useOptimistic: function(e, t) {
      var n = Ie();
      return ze !== null ? Yf(n, ze, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Iu,
    useCacheRefresh: pd
  };
  bd.useEffectEvent = td;
  function ls(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : R({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var rs = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Yt(), l = ka(a);
      l.payload = t, n != null && (l.callback = n), t = Ea(e, l, a), t !== null && (Rt(t, e, a), qr(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Yt(), l = ka(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Ea(e, l, a), t !== null && (Rt(t, e, a), qr(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Yt(), a = ka(n);
      a.tag = 2, t != null && (a.callback = t), t = Ea(e, a, n), t !== null && (Rt(t, e, n), qr(t, e, n));
    }
  };
  function vd(e, t, n, a, l, i, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, u) : t.prototype && t.prototype.isPureReactComponent ? !Rr(n, a) || !Rr(l, i) : !0;
  }
  function Sd(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && rs.enqueueReplaceState(t, t.state, null);
  }
  function gl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = R({}, n));
      for (var l in e)
        n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function wd(e) {
    Li(e);
  }
  function Td(e) {
    console.error(e);
  }
  function kd(e) {
    Li(e);
  }
  function lo(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Ed(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function is(e, t, n) {
    return n = ka(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      lo(e, t);
    }, n;
  }
  function xd(e) {
    return e = ka(e), e.tag = 3, e;
  }
  function _d(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      e.payload = function() {
        return l(i);
      }, e.callback = function() {
        Ed(t, n, a);
      };
    }
    var u = n.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      Ed(t, n, a), typeof l != "function" && (Oa === null ? Oa = /* @__PURE__ */ new Set([this]) : Oa.add(this));
      var d = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function Vg(e, t, n, a, l) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Yl(
        t,
        n,
        l,
        !0
      ), n = Bt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return un === null ? yo() : n.alternate === null && Ge === 0 && (Ge = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === Xi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Cs(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === Xi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Cs(e, a, l)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Cs(e, a, l), yo(), !1;
    }
    if (ge)
      return t = Bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== xu && (e = Error(c(422), { cause: a }), Lr(Kt(e, n)))) : (a !== xu && (t = Error(c(423), {
        cause: a
      }), Lr(
        Kt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = Kt(a, n), l = is(
        e.stateNode,
        a,
        l
      ), ju(e, l), Ge !== 4 && (Ge = 2)), !1;
    var i = Error(c(520), { cause: a });
    if (i = Kt(i, n), ei === null ? ei = [i] : ei.push(i), Ge !== 4 && (Ge = 2), t === null) return !0;
    a = Kt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = is(n.stateNode, a, e), ju(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Oa === null || !Oa.has(i))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = xd(l), _d(
              l,
              e,
              n,
              a
            ), ju(n, l), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var os = Error(c(461)), Ke = !1;
  function st(e, t, n, a) {
    t.child = e === null ? Of(t, null, n, a) : ml(
      t,
      e.child,
      n,
      a
    );
  }
  function Ad(e, t, n, a, l) {
    n = n.render;
    var i = t.ref;
    if ("ref" in a) {
      var u = {};
      for (var d in a)
        d !== "ref" && (u[d] = a[d]);
    } else u = a;
    return cl(t), a = Gu(
      e,
      t,
      n,
      u,
      i,
      l
    ), d = Yu(), e !== null && !Ke ? (Fu(e, t, l), In(e, t, l)) : (ge && d && ku(t), t.flags |= 1, st(e, t, a, l), t.child);
  }
  function zd(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Su(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Nd(
        e,
        t,
        i,
        a,
        l
      )) : (e = Bi(
        n.type,
        null,
        a,
        t,
        t.mode,
        l
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !hs(e, l)) {
      var u = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Rr, n(u, a) && e.ref === t.ref)
        return In(e, t, l);
    }
    return t.flags |= 1, e = qn(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Nd(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Rr(i, a) && e.ref === t.ref)
        if (Ke = !1, t.pendingProps = a = i, hs(e, l))
          (e.flags & 131072) !== 0 && (Ke = !0);
        else
          return t.lanes = e.lanes, In(e, t, l);
    }
    return us(
      e,
      t,
      n,
      a,
      l
    );
  }
  function Od(e, t, n, a) {
    var l = a.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, l = 0; a !== null; )
            l = l | a.lanes | a.childLanes, a = a.sibling;
          a = l & ~i;
        } else a = 0, t.child = null;
        return Cd(
          e,
          t,
          i,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Yi(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? Df(t, i) : Hu(), Mf(t);
      else
        return a = t.lanes = 536870912, Cd(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          a
        );
    } else
      i !== null ? (Yi(t, i.cachePool), Df(t, i), _a(), t.memoizedState = null) : (e !== null && Yi(t, null), Hu(), _a());
    return st(e, t, l, n), t.child;
  }
  function Qr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Cd(e, t, n, a, l) {
    var i = Ru();
    return i = i === null ? null : { parent: $e._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && Yi(t, null), Hu(), Mf(t), e !== null && Yl(e, t, a, !0), t.childLanes = l, null;
  }
  function ro(e, t) {
    return t = oo(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Rd(e, t, n) {
    return ml(t, e.child, null, n), e = ro(t, t.pendingProps), e.flags |= 2, qt(t), t.memoizedState = null, e;
  }
  function Gg(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ge) {
        if (a.mode === "hidden")
          return e = ro(t, a), t.lanes = 536870912, Qr(null, e);
        if (qu(t), (e = Le) ? (e = Fp(
          e,
          Jt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ba !== null ? { id: xn, overflow: _n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = hf(e), n.return = t, t.child = n, ot = t, Le = null)) : e = null, e === null) throw Sa(t);
        return t.lanes = 536870912, null;
      }
      return ro(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (qu(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = Rd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (Ke || Yl(e, t, n, !1), l = (n & e.childLanes) !== 0, Ke || l) {
        if (a = Ce, a !== null && (u = yr(a, n), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, il(e, u), Rt(a, e, u), os;
        yo(), t = Rd(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, Le = en(u.nextSibling), ot = t, ge = !0, va = null, Jt = !1, e !== null && bf(t, e), t = ro(t, a), t.flags |= 4096;
      return t;
    }
    return e = qn(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function io(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function us(e, t, n, a, l) {
    return cl(t), n = Gu(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Yu(), e !== null && !Ke ? (Fu(e, t, l), In(e, t, l)) : (ge && a && ku(t), t.flags |= 1, st(e, t, n, l), t.child);
  }
  function Dd(e, t, n, a, l, i) {
    return cl(t), t.updateQueue = null, n = jf(
      t,
      a,
      n,
      l
    ), Lf(e), a = Yu(), e !== null && !Ke ? (Fu(e, t, i), In(e, t, i)) : (ge && a && ku(t), t.flags |= 1, st(e, t, n, i), t.child);
  }
  function Md(e, t, n, a, l) {
    if (cl(t), t.stateNode === null) {
      var i = Bl, u = n.contextType;
      typeof u == "object" && u !== null && (i = ut(u)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = rs, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Mu(t), u = n.contextType, i.context = typeof u == "object" && u !== null ? ut(u) : Bl, i.state = t.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (ls(
        t,
        n,
        u,
        a
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && rs.enqueueReplaceState(i, i.state, null), Gr(t, a, i, l), Vr(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var d = t.memoizedProps, m = gl(n, d);
      i.props = m;
      var x = i.context, N = n.contextType;
      u = Bl, typeof N == "object" && N !== null && (u = ut(N));
      var M = n.getDerivedStateFromProps;
      N = typeof M == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, N || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || x !== u) && Sd(
        t,
        i,
        a,
        u
      ), Ta = !1;
      var _ = t.memoizedState;
      i.state = _, Gr(t, a, i, l), Vr(), x = t.memoizedState, d || _ !== x || Ta ? (typeof M == "function" && (ls(
        t,
        n,
        M,
        a
      ), x = t.memoizedState), (m = Ta || vd(
        t,
        n,
        m,
        a,
        _,
        x,
        u
      )) ? (N || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = x), i.props = a, i.state = x, i.context = u, a = m) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Lu(e, t), u = t.memoizedProps, N = gl(n, u), i.props = N, M = t.pendingProps, _ = i.context, x = n.contextType, m = Bl, typeof x == "object" && x !== null && (m = ut(x)), d = n.getDerivedStateFromProps, (x = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== M || _ !== m) && Sd(
        t,
        i,
        a,
        m
      ), Ta = !1, _ = t.memoizedState, i.state = _, Gr(t, a, i, l), Vr();
      var A = t.memoizedState;
      u !== M || _ !== A || Ta || e !== null && e.dependencies !== null && Vi(e.dependencies) ? (typeof d == "function" && (ls(
        t,
        n,
        d,
        a
      ), A = t.memoizedState), (N = Ta || vd(
        t,
        n,
        N,
        a,
        _,
        A,
        m
      ) || e !== null && e.dependencies !== null && Vi(e.dependencies)) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, A, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        A,
        m
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = A), i.props = a, i.state = A, i.context = m, a = N) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return i = a, io(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = ml(
      t,
      e.child,
      null,
      l
    ), t.child = ml(
      t,
      null,
      n,
      l
    )) : st(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = In(
      e,
      t,
      l
    ), e;
  }
  function Ld(e, t, n, a) {
    return ul(), t.flags |= 256, st(e, t, n, a), t.child;
  }
  var ss = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function cs(e) {
    return { baseLanes: e, cachePool: Ef() };
  }
  function fs(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Gt), e;
  }
  function jd(e, t, n) {
    var a = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), u && (l = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (l ? xa(t) : _a(), (e = Le) ? (e = Fp(
          e,
          Jt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ba !== null ? { id: xn, overflow: _n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = hf(e), n.return = t, t.child = n, ot = t, Le = null)) : e = null, e === null) throw Sa(t);
        return Qs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var d = a.children;
      return a = a.fallback, l ? (_a(), l = t.mode, d = oo(
        { mode: "hidden", children: d },
        l
      ), a = ol(
        a,
        l,
        n,
        null
      ), d.return = t, a.return = t, d.sibling = a, t.child = d, a = t.child, a.memoizedState = cs(n), a.childLanes = fs(
        e,
        u,
        n
      ), t.memoizedState = ss, Qr(null, a)) : (xa(t), ds(t, d));
    }
    var m = e.memoizedState;
    if (m !== null && (d = m.dehydrated, d !== null)) {
      if (i)
        t.flags & 256 ? (xa(t), t.flags &= -257, t = ps(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (_a(), t.child = e.child, t.flags |= 128, t = null) : (_a(), d = a.fallback, l = t.mode, a = oo(
          { mode: "visible", children: a.children },
          l
        ), d = ol(
          d,
          l,
          n,
          null
        ), d.flags |= 2, a.return = t, d.return = t, a.sibling = d, t.child = a, ml(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = cs(n), a.childLanes = fs(
          e,
          u,
          n
        ), t.memoizedState = ss, t = Qr(null, a));
      else if (xa(t), Qs(d)) {
        if (u = d.nextSibling && d.nextSibling.dataset, u) var x = u.dgst;
        u = x, a = Error(c(419)), a.stack = "", a.digest = u, Lr({ value: a, source: null, stack: null }), t = ps(
          e,
          t,
          n
        );
      } else if (Ke || Yl(e, t, n, !1), u = (n & e.childLanes) !== 0, Ke || u) {
        if (u = Ce, u !== null && (a = yr(u, n), a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, il(e, a), Rt(u, e, a), os;
        Is(d) || yo(), t = ps(
          e,
          t,
          n
        );
      } else
        Is(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Le = en(
          d.nextSibling
        ), ot = t, ge = !0, va = null, Jt = !1, e !== null && bf(t, e), t = ds(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return l ? (_a(), d = a.fallback, l = t.mode, m = e.child, x = m.sibling, a = qn(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, x !== null ? d = qn(
      x,
      d
    ) : (d = ol(
      d,
      l,
      n,
      null
    ), d.flags |= 2), d.return = t, a.return = t, a.sibling = d, t.child = a, Qr(null, a), a = t.child, d = e.child.memoizedState, d === null ? d = cs(n) : (l = d.cachePool, l !== null ? (m = $e._currentValue, l = l.parent !== m ? { parent: m, pool: m } : l) : l = Ef(), d = {
      baseLanes: d.baseLanes | n,
      cachePool: l
    }), a.memoizedState = d, a.childLanes = fs(
      e,
      u,
      n
    ), t.memoizedState = ss, Qr(e.child, a)) : (xa(t), n = e.child, e = n.sibling, n = qn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (u = t.deletions, u === null ? (t.deletions = [e], t.flags |= 16) : u.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function ds(e, t) {
    return t = oo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function oo(e, t) {
    return e = Ht(22, e, null, t), e.lanes = 0, e;
  }
  function ps(e, t, n) {
    return ml(t, e.child, null, n), e = ds(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ud(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), zu(e.return, t, n);
  }
  function ms(e, t, n, a, l, i) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: l,
      treeForkCount: i
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = n, u.tailMode = l, u.treeForkCount = i);
  }
  function Hd(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, i = a.tail;
    a = a.children;
    var u = Xe.current, d = (u & 2) !== 0;
    if (d ? (u = u & 1 | 2, t.flags |= 128) : u &= 1, Z(Xe, u), st(e, t, a, n), a = ge ? Mr : 0, !d && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Ud(e, n, t);
        else if (e.tag === 19)
          Ud(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && Pi(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ms(
          t,
          !1,
          l,
          n,
          i,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Pi(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ms(
          t,
          !0,
          n,
          null,
          i,
          a
        );
        break;
      case "together":
        ms(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function In(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Na |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Yl(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = qn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = qn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function hs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Vi(e)));
  }
  function Yg(e, t, n) {
    switch (t.tag) {
      case 3:
        dn(t, t.stateNode.containerInfo), wa(t, $e, e.memoizedState.cache), ul();
        break;
      case 27:
      case 5:
        Re(t);
        break;
      case 4:
        dn(t, t.stateNode.containerInfo);
        break;
      case 10:
        wa(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, qu(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (xa(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? jd(e, t, n) : (xa(t), e = In(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        xa(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Yl(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), l) {
          if (a)
            return Hd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Z(Xe, Xe.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Od(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        wa(t, $e, e.memoizedState.cache);
    }
    return In(e, t, n);
  }
  function Bd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ke = !0;
      else {
        if (!hs(e, n) && (t.flags & 128) === 0)
          return Ke = !1, Yg(
            e,
            t,
            n
          );
        Ke = (e.flags & 131072) !== 0;
      }
    else
      Ke = !1, ge && (t.flags & 1048576) !== 0 && yf(t, Mr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = dl(t.elementType), t.type = e, typeof e == "function")
            Su(e) ? (a = gl(e, a), t.tag = 1, t = Md(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = us(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === ne) {
                t.tag = 11, t = Ad(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === ee) {
                t.tag = 14, t = zd(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = Qe(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return us(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, l = gl(
          a,
          t.pendingProps
        ), Md(
          e,
          t,
          a,
          l,
          n
        );
      case 3:
        e: {
          if (dn(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          l = i.element, Lu(e, t), Gr(t, a, null, n);
          var u = t.memoizedState;
          if (a = u.cache, wa(t, $e, a), a !== i.cache && Nu(
            t,
            [$e],
            n,
            !0
          ), Vr(), a = u.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: u.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = Ld(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== l) {
              l = Kt(
                Error(c(424)),
                t
              ), Lr(l), t = Ld(
                e,
                t,
                a,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Le = en(e.firstChild), ot = t, ge = !0, va = null, Jt = !0, n = Of(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (ul(), a === l) {
              t = In(
                e,
                t,
                n
              );
              break e;
            }
            st(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return io(e, t), e === null ? (n = Kp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : ge || (n = t.type, e = t.pendingProps, a = Eo(
          tt.current
        ).createElement(n), a[oe] = t, a[Fe] = e, ct(a, n, e), Me(a), t.stateNode = a) : t.memoizedState = Kp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Re(t), e === null && ge && (a = t.stateNode = Qp(
          t.type,
          t.pendingProps,
          tt.current
        ), ot = t, Jt = !0, l = Le, Ma(t.type) ? ($s = l, Le = en(a.firstChild)) : Le = l), st(
          e,
          t,
          t.pendingProps.children,
          n
        ), io(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ge && ((l = a = Le) && (a = vy(
          a,
          t.type,
          t.pendingProps,
          Jt
        ), a !== null ? (t.stateNode = a, ot = t, Le = en(a.firstChild), Jt = !1, l = !0) : l = !1), l || Sa(t)), Re(t), l = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, a = i.children, Ys(l, i) ? a = null : u !== null && Ys(l, u) && (t.flags |= 32), t.memoizedState !== null && (l = Gu(
          e,
          t,
          Mg,
          null,
          null,
          n
        ), ui._currentValue = l), io(e, t), st(e, t, a, n), t.child;
      case 6:
        return e === null && ge && ((e = n = Le) && (n = Sy(
          n,
          t.pendingProps,
          Jt
        ), n !== null ? (t.stateNode = n, ot = t, Le = null, e = !0) : e = !1), e || Sa(t)), null;
      case 13:
        return jd(e, t, n);
      case 4:
        return dn(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ml(
          t,
          null,
          a,
          n
        ) : st(e, t, a, n), t.child;
      case 11:
        return Ad(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return st(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return st(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return st(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return a = t.pendingProps, wa(t, t.type, a.value), st(e, t, a.children, n), t.child;
      case 9:
        return l = t.type._context, a = t.pendingProps.children, cl(t), l = ut(l), a = a(l), t.flags |= 1, st(e, t, a, n), t.child;
      case 14:
        return zd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Nd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Hd(e, t, n);
      case 31:
        return Gg(e, t, n);
      case 22:
        return Od(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return cl(t), a = ut($e), e === null ? (l = Ru(), l === null && (l = Ce, i = Ou(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, Mu(t), wa(t, $e, l)) : ((e.lanes & n) !== 0 && (Lu(e, t), Gr(t, null, null, n), Vr()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), wa(t, $e, a)) : (a = i.cache, wa(t, $e, a), a !== l.cache && Nu(
          t,
          [$e],
          n,
          !0
        ))), st(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function Qn(e) {
    e.flags |= 4;
  }
  function gs(e, t, n, a, l) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (dp()) e.flags |= 8192;
        else
          throw pl = Xi, Du;
    } else e.flags &= -16777217;
  }
  function qd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !tm(t))
      if (dp()) e.flags |= 8192;
      else
        throw pl = Xi, Du;
  }
  function uo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ln() : 536870912, e.lanes |= t, tr |= t);
  }
  function $r(e, t) {
    if (!ge)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 65011712, a |= l.flags & 65011712, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Fg(e, t, n) {
    var a = t.pendingProps;
    switch (Eu(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return je(t), null;
      case 1:
        return je(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yn($e), nt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Gl(t) ? Qn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, _u())), je(t), null;
      case 26:
        var l = t.type, i = t.memoizedState;
        return e === null ? (Qn(t), i !== null ? (je(t), qd(t, i)) : (je(t), gs(
          t,
          l,
          null,
          a,
          n
        ))) : i ? i !== e.memoizedState ? (Qn(t), je(t), qd(t, i)) : (je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Qn(t), je(t), gs(
          t,
          l,
          e,
          a,
          n
        )), null;
      case 27:
        if (Qa(t), n = tt.current, l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Qn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return je(t), null;
          }
          e = ye.current, Gl(t) ? vf(t) : (e = Qp(l, a, n), t.stateNode = e, Qn(t));
        }
        return je(t), null;
      case 5:
        if (Qa(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Qn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return je(t), null;
          }
          if (i = ye.current, Gl(t))
            vf(t);
          else {
            var u = Eo(
              tt.current
            );
            switch (i) {
              case 1:
                i = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                i = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    i = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    i = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    i = u.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? u.createElement("select", {
                      is: a.is
                    }) : u.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? u.createElement(l, { is: a.is }) : u.createElement(l);
                }
            }
            i[oe] = t, i[Fe] = a;
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                i.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t)
                  break e;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            t.stateNode = i;
            e: switch (ct(i, l, a), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && Qn(t);
          }
        }
        return je(t), gs(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Qn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = tt.current, Gl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = ot, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[oe] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || jp(e.nodeValue, n)), e || Sa(t, !0);
          } else
            e = Eo(e).createTextNode(
              a
            ), e[oe] = t, t.stateNode = e;
        }
        return je(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Gl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[oe] = t;
            } else
              ul(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), e = !1;
          } else
            n = _u(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (qt(t), t) : (qt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return je(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (l = Gl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(c(317));
              l[oe] = t;
            } else
              ul(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), l = !1;
          } else
            l = _u(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? (qt(t), t) : (qt(t), null);
        }
        return qt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), uo(t, t.updateQueue), je(t), null);
      case 4:
        return nt(), e === null && Hs(t.stateNode.containerInfo), je(t), null;
      case 10:
        return Yn(t.type), je(t), null;
      case 19:
        if (ue(Xe), a = t.memoizedState, a === null) return je(t), null;
        if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (l) $r(a, !1);
          else {
            if (Ge !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Pi(e), i !== null) {
                  for (t.flags |= 128, $r(a, !1), e = i.updateQueue, t.updateQueue = e, uo(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    mf(n, e), n = n.sibling;
                  return Z(
                    Xe,
                    Xe.current & 1 | 2
                  ), ge && Vn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Ye() > mo && (t.flags |= 128, l = !0, $r(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Pi(i), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, uo(t, e), $r(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ge)
                return je(t), null;
            } else
              2 * Ye() - a.renderingStartTime > mo && n !== 536870912 && (t.flags |= 128, l = !0, $r(a, !1), t.lanes = 4194304);
          a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ye(), e.sibling = null, n = Xe.current, Z(
          Xe,
          l ? n & 1 | 2 : n & 1
        ), ge && Vn(t, a.treeForkCount), e) : (je(t), null);
      case 22:
      case 23:
        return qt(t), Bu(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), n = t.updateQueue, n !== null && uo(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && ue(fl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Yn($e), je(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Xg(e, t) {
    switch (Eu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Yn($e), nt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Qa(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (qt(t), t.alternate === null)
            throw Error(c(340));
          ul();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (qt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          ul();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ue(Xe), null;
      case 4:
        return nt(), null;
      case 10:
        return Yn(t.type), null;
      case 22:
      case 23:
        return qt(t), Bu(), e !== null && ue(fl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Yn($e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vd(e, t) {
    switch (Eu(t), t.tag) {
      case 3:
        Yn($e), nt();
        break;
      case 26:
      case 27:
      case 5:
        Qa(t);
        break;
      case 4:
        nt();
        break;
      case 31:
        t.memoizedState !== null && qt(t);
        break;
      case 13:
        qt(t);
        break;
      case 19:
        ue(Xe);
        break;
      case 10:
        Yn(t.type);
        break;
      case 22:
      case 23:
        qt(t), Bu(), e !== null && ue(fl);
        break;
      case 24:
        Yn($e);
    }
  }
  function Pr(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var i = n.create, u = n.inst;
            a = i(), u.destroy = a;
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (d) {
      _e(t, t.return, d);
    }
  }
  function Aa(e, t, n) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var u = a.inst, d = u.destroy;
            if (d !== void 0) {
              u.destroy = void 0, l = t;
              var m = n, x = d;
              try {
                x();
              } catch (N) {
                _e(
                  l,
                  m,
                  N
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (N) {
      _e(t, t.return, N);
    }
  }
  function Gd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Rf(t, n);
      } catch (a) {
        _e(e, e.return, a);
      }
    }
  }
  function Yd(e, t, n) {
    n.props = gl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      _e(e, t, a);
    }
  }
  function Kr(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(a) : n.current = a;
      }
    } catch (l) {
      _e(e, t, l);
    }
  }
  function An(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          _e(e, t, l);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          _e(e, t, l);
        }
      else n.current = null;
  }
  function Fd(e) {
    var t = e.type, n = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (l) {
      _e(e, e.return, l);
    }
  }
  function ys(e, t, n) {
    try {
      var a = e.stateNode;
      py(a, e.type, n, t), a[Fe] = t;
    } catch (l) {
      _e(e, e.return, l);
    }
  }
  function Xd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ma(e.type) || e.tag === 4;
  }
  function bs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ma(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vs(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = it));
    else if (a !== 4 && (a === 27 && Ma(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (vs(e, t, n), e = e.sibling; e !== null; )
        vs(e, t, n), e = e.sibling;
  }
  function so(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && Ma(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (so(e, t, n), e = e.sibling; e !== null; )
        so(e, t, n), e = e.sibling;
  }
  function Id(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      ct(t, a, n), t[oe] = e, t[Fe] = n;
    } catch (i) {
      _e(e, e.return, i);
    }
  }
  var $n = !1, Ze = !1, Ss = !1, Qd = typeof WeakSet == "function" ? WeakSet : Set, lt = null;
  function Ig(e, t) {
    if (e = e.containerInfo, Vs = Co, e = lf(e), pu(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var l = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0, d = -1, m = -1, x = 0, N = 0, M = e, _ = null;
            t: for (; ; ) {
              for (var A; M !== n || l !== 0 && M.nodeType !== 3 || (d = u + l), M !== i || a !== 0 && M.nodeType !== 3 || (m = u + a), M.nodeType === 3 && (u += M.nodeValue.length), (A = M.firstChild) !== null; )
                _ = M, M = A;
              for (; ; ) {
                if (M === e) break t;
                if (_ === n && ++x === l && (d = u), _ === i && ++N === a && (m = u), (A = M.nextSibling) !== null) break;
                M = _, _ = M.parentNode;
              }
              M = A;
            }
            n = d === -1 || m === -1 ? null : { start: d, end: m };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Gs = { focusedElem: e, selectionRange: n }, Co = !1, lt = t; lt !== null; )
      if (t = lt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, lt = e;
      else
        for (; lt !== null; ) {
          switch (t = lt, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  l = e[n], l.ref.impl = l.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, n = t, l = i.memoizedProps, i = i.memoizedState, a = n.stateNode;
                try {
                  var X = gl(
                    n.type,
                    l
                  );
                  e = a.getSnapshotBeforeUpdate(
                    X,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (te) {
                  _e(
                    n,
                    n.return,
                    te
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Xs(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xs(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, lt = e;
            break;
          }
          lt = t.return;
        }
  }
  function $d(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Kn(e, n), a & 4 && Pr(5, n);
        break;
      case 1:
        if (Kn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (u) {
              _e(n, n.return, u);
            }
          else {
            var l = gl(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                l,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (u) {
              _e(
                n,
                n.return,
                u
              );
            }
          }
        a & 64 && Gd(n), a & 512 && Kr(n, n.return);
        break;
      case 3:
        if (Kn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Rf(e, t);
          } catch (u) {
            _e(n, n.return, u);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Id(n);
      case 26:
      case 5:
        Kn(e, n), t === null && a & 4 && Fd(n), a & 512 && Kr(n, n.return);
        break;
      case 12:
        Kn(e, n);
        break;
      case 31:
        Kn(e, n), a & 4 && Zd(e, n);
        break;
      case 13:
        Kn(e, n), a & 4 && Wd(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = ty.bind(
          null,
          n
        ), wy(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || $n, !a) {
          t = t !== null && t.memoizedState !== null || Ze, l = $n;
          var i = Ze;
          $n = a, (Ze = t) && !i ? Zn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Kn(e, n), $n = l, Ze = i;
        }
        break;
      case 30:
        break;
      default:
        Kn(e, n);
    }
  }
  function Pd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && wr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ue = null, zt = !1;
  function Pn(e, t, n) {
    for (n = n.child; n !== null; )
      Kd(e, t, n), n = n.sibling;
  }
  function Kd(e, t, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(ua, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Ze || An(n, t), Pn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ze || An(n, t);
        var a = Ue, l = zt;
        Ma(n.type) && (Ue = n.stateNode, zt = !1), Pn(
          e,
          t,
          n
        ), ri(n.stateNode), Ue = a, zt = l;
        break;
      case 5:
        Ze || An(n, t);
      case 6:
        if (a = Ue, l = zt, Ue = null, Pn(
          e,
          t,
          n
        ), Ue = a, zt = l, Ue !== null)
          if (zt)
            try {
              (Ue.nodeType === 9 ? Ue.body : Ue.nodeName === "HTML" ? Ue.ownerDocument.body : Ue).removeChild(n.stateNode);
            } catch (i) {
              _e(
                n,
                t,
                i
              );
            }
          else
            try {
              Ue.removeChild(n.stateNode);
            } catch (i) {
              _e(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        Ue !== null && (zt ? (e = Ue, Gp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), sr(e)) : Gp(Ue, n.stateNode));
        break;
      case 4:
        a = Ue, l = zt, Ue = n.stateNode.containerInfo, zt = !0, Pn(
          e,
          t,
          n
        ), Ue = a, zt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Aa(2, n, t), Ze || Aa(4, n, t), Pn(
          e,
          t,
          n
        );
        break;
      case 1:
        Ze || (An(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Yd(
          n,
          t,
          a
        )), Pn(
          e,
          t,
          n
        );
        break;
      case 21:
        Pn(
          e,
          t,
          n
        );
        break;
      case 22:
        Ze = (a = Ze) || n.memoizedState !== null, Pn(
          e,
          t,
          n
        ), Ze = a;
        break;
      default:
        Pn(
          e,
          t,
          n
        );
    }
  }
  function Zd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        sr(e);
      } catch (n) {
        _e(t, t.return, n);
      }
    }
  }
  function Wd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        sr(e);
      } catch (n) {
        _e(t, t.return, n);
      }
  }
  function Qg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Qd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Qd()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function co(e, t) {
    var n = Qg(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = ny.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function Nt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a], i = e, u = t, d = u;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Ma(d.type)) {
                Ue = d.stateNode, zt = !1;
                break e;
              }
              break;
            case 5:
              Ue = d.stateNode, zt = !1;
              break e;
            case 3:
            case 4:
              Ue = d.stateNode.containerInfo, zt = !0;
              break e;
          }
          d = d.return;
        }
        if (Ue === null) throw Error(c(160));
        Kd(i, u, l), Ue = null, zt = !1, i = l.alternate, i !== null && (i.return = null), l.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Jd(t, e), t = t.sibling;
  }
  var hn = null;
  function Jd(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Nt(t, e), Ot(e), a & 4 && (Aa(3, e, e.return), Pr(3, e), Aa(5, e, e.return));
        break;
      case 1:
        Nt(t, e), Ot(e), a & 512 && (Ze || n === null || An(n, n.return)), a & 64 && $n && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var l = hn;
        if (Nt(t, e), Ot(e), a & 512 && (Ze || n === null || An(n, n.return)), a & 4) {
          var i = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                  t: switch (a) {
                    case "title":
                      i = l.getElementsByTagName("title")[0], (!i || i[tl] || i[oe] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(a), l.head.insertBefore(
                        i,
                        l.querySelector("head > title")
                      )), ct(i, a, n), i[oe] = e, Me(i), a = i;
                      break e;
                    case "link":
                      var u = Jp(
                        "link",
                        "href",
                        l
                      ).get(a + (n.href || ""));
                      if (u) {
                        for (var d = 0; d < u.length; d++)
                          if (i = u[d], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            u.splice(d, 1);
                            break t;
                          }
                      }
                      i = l.createElement(a), ct(i, a, n), l.head.appendChild(i);
                      break;
                    case "meta":
                      if (u = Jp(
                        "meta",
                        "content",
                        l
                      ).get(a + (n.content || ""))) {
                        for (d = 0; d < u.length; d++)
                          if (i = u[d], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            u.splice(d, 1);
                            break t;
                          }
                      }
                      i = l.createElement(a), ct(i, a, n), l.head.appendChild(i);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  i[oe] = e, Me(i), a = i;
                }
                e.stateNode = a;
              } else
                em(
                  l,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Wp(
                l,
                a,
                e.memoizedProps
              );
          else
            i !== a ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, a === null ? em(
              l,
              e.type,
              e.stateNode
            ) : Wp(
              l,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && ys(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Nt(t, e), Ot(e), a & 512 && (Ze || n === null || An(n, n.return)), n !== null && a & 4 && ys(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Nt(t, e), Ot(e), a & 512 && (Ze || n === null || An(n, n.return)), e.flags & 32) {
          l = e.stateNode;
          try {
            K(l, "");
          } catch (X) {
            _e(e, e.return, X);
          }
        }
        a & 4 && e.stateNode != null && (l = e.memoizedProps, ys(
          e,
          l,
          n !== null ? n.memoizedProps : l
        )), a & 1024 && (Ss = !0);
        break;
      case 6:
        if (Nt(t, e), Ot(e), a & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (X) {
            _e(e, e.return, X);
          }
        }
        break;
      case 3:
        if (Ao = null, l = hn, hn = xo(t.containerInfo), Nt(t, e), hn = l, Ot(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            sr(t.containerInfo);
          } catch (X) {
            _e(e, e.return, X);
          }
        Ss && (Ss = !1, ep(e));
        break;
      case 4:
        a = hn, hn = xo(
          e.stateNode.containerInfo
        ), Nt(t, e), Ot(e), hn = a;
        break;
      case 12:
        Nt(t, e), Ot(e);
        break;
      case 31:
        Nt(t, e), Ot(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, co(e, a)));
        break;
      case 13:
        Nt(t, e), Ot(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (po = Ye()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, co(e, a)));
        break;
      case 22:
        l = e.memoizedState !== null;
        var m = n !== null && n.memoizedState !== null, x = $n, N = Ze;
        if ($n = x || l, Ze = N || m, Nt(t, e), Ze = N, $n = x, Ot(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || m || $n || Ze || yl(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                m = n = t;
                try {
                  if (i = m.stateNode, l)
                    u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    d = m.stateNode;
                    var M = m.memoizedProps.style, _ = M != null && M.hasOwnProperty("display") ? M.display : null;
                    d.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (X) {
                  _e(m, m.return, X);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                m = t;
                try {
                  m.stateNode.nodeValue = l ? "" : m.memoizedProps;
                } catch (X) {
                  _e(m, m.return, X);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                m = t;
                try {
                  var A = m.stateNode;
                  l ? Yp(A, !0) : Yp(m.stateNode, !1);
                } catch (X) {
                  _e(m, m.return, X);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, co(e, n))));
        break;
      case 19:
        Nt(t, e), Ot(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, co(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Nt(t, e), Ot(e);
    }
  }
  function Ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Xd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode, i = bs(e);
            so(e, i, l);
            break;
          case 5:
            var u = n.stateNode;
            n.flags & 32 && (K(u, ""), n.flags &= -33);
            var d = bs(e);
            so(e, d, u);
            break;
          case 3:
          case 4:
            var m = n.stateNode.containerInfo, x = bs(e);
            vs(
              e,
              x,
              m
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (N) {
        _e(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ep(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ep(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Kn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        $d(e, t.alternate, t), t = t.sibling;
  }
  function yl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Aa(4, t, t.return), yl(t);
          break;
        case 1:
          An(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Yd(
            t,
            t.return,
            n
          ), yl(t);
          break;
        case 27:
          ri(t.stateNode);
        case 26:
        case 5:
          An(t, t.return), yl(t);
          break;
        case 22:
          t.memoizedState === null && yl(t);
          break;
        case 30:
          yl(t);
          break;
        default:
          yl(t);
      }
      e = e.sibling;
    }
  }
  function Zn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, l = e, i = t, u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Zn(
            l,
            i,
            n
          ), Pr(4, i);
          break;
        case 1:
          if (Zn(
            l,
            i,
            n
          ), a = i, l = a.stateNode, typeof l.componentDidMount == "function")
            try {
              l.componentDidMount();
            } catch (x) {
              _e(a, a.return, x);
            }
          if (a = i, l = a.updateQueue, l !== null) {
            var d = a.stateNode;
            try {
              var m = l.shared.hiddenCallbacks;
              if (m !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < m.length; l++)
                  Cf(m[l], d);
            } catch (x) {
              _e(a, a.return, x);
            }
          }
          n && u & 64 && Gd(i), Kr(i, i.return);
          break;
        case 27:
          Id(i);
        case 26:
        case 5:
          Zn(
            l,
            i,
            n
          ), n && a === null && u & 4 && Fd(i), Kr(i, i.return);
          break;
        case 12:
          Zn(
            l,
            i,
            n
          );
          break;
        case 31:
          Zn(
            l,
            i,
            n
          ), n && u & 4 && Zd(l, i);
          break;
        case 13:
          Zn(
            l,
            i,
            n
          ), n && u & 4 && Wd(l, i);
          break;
        case 22:
          i.memoizedState === null && Zn(
            l,
            i,
            n
          ), Kr(i, i.return);
          break;
        case 30:
          break;
        default:
          Zn(
            l,
            i,
            n
          );
      }
      t = t.sibling;
    }
  }
  function ws(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && jr(n));
  }
  function Ts(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && jr(e));
  }
  function gn(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        tp(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function tp(e, t, n, a) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        gn(
          e,
          t,
          n,
          a
        ), l & 2048 && Pr(9, t);
        break;
      case 1:
        gn(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        gn(
          e,
          t,
          n,
          a
        ), l & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && jr(e)));
        break;
      case 12:
        if (l & 2048) {
          gn(
            e,
            t,
            n,
            a
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, u = i.id, d = i.onPostCommit;
            typeof d == "function" && d(
              u,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (m) {
            _e(t, t.return, m);
          }
        } else
          gn(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        gn(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        gn(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, u = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? gn(
          e,
          t,
          n,
          a
        ) : Zr(e, t) : i._visibility & 2 ? gn(
          e,
          t,
          n,
          a
        ) : (i._visibility |= 2, Wl(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), l & 2048 && ws(u, t);
        break;
      case 24:
        gn(
          e,
          t,
          n,
          a
        ), l & 2048 && Ts(t.alternate, t);
        break;
      default:
        gn(
          e,
          t,
          n,
          a
        );
    }
  }
  function Wl(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, u = t, d = n, m = a, x = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Wl(
            i,
            u,
            d,
            m,
            l
          ), Pr(8, u);
          break;
        case 23:
          break;
        case 22:
          var N = u.stateNode;
          u.memoizedState !== null ? N._visibility & 2 ? Wl(
            i,
            u,
            d,
            m,
            l
          ) : Zr(
            i,
            u
          ) : (N._visibility |= 2, Wl(
            i,
            u,
            d,
            m,
            l
          )), l && x & 2048 && ws(
            u.alternate,
            u
          );
          break;
        case 24:
          Wl(
            i,
            u,
            d,
            m,
            l
          ), l && x & 2048 && Ts(u.alternate, u);
          break;
        default:
          Wl(
            i,
            u,
            d,
            m,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Zr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, l = a.flags;
        switch (a.tag) {
          case 22:
            Zr(n, a), l & 2048 && ws(
              a.alternate,
              a
            );
            break;
          case 24:
            Zr(n, a), l & 2048 && Ts(a.alternate, a);
            break;
          default:
            Zr(n, a);
        }
        t = t.sibling;
      }
  }
  var Wr = 8192;
  function Jl(e, t, n) {
    if (e.subtreeFlags & Wr)
      for (e = e.child; e !== null; )
        np(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function np(e, t, n) {
    switch (e.tag) {
      case 26:
        Jl(
          e,
          t,
          n
        ), e.flags & Wr && e.memoizedState !== null && Dy(
          n,
          hn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Jl(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = hn;
        hn = xo(e.stateNode.containerInfo), Jl(
          e,
          t,
          n
        ), hn = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Wr, Wr = 16777216, Jl(
          e,
          t,
          n
        ), Wr = a) : Jl(
          e,
          t,
          n
        ));
        break;
      default:
        Jl(
          e,
          t,
          n
        );
    }
  }
  function ap(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Jr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          lt = a, rp(
            a,
            e
          );
        }
      ap(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        lp(e), e = e.sibling;
  }
  function lp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Jr(e), e.flags & 2048 && Aa(9, e, e.return);
        break;
      case 3:
        Jr(e);
        break;
      case 12:
        Jr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, fo(e)) : Jr(e);
        break;
      default:
        Jr(e);
    }
  }
  function fo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          lt = a, rp(
            a,
            e
          );
        }
      ap(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Aa(8, t, t.return), fo(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, fo(t));
          break;
        default:
          fo(t);
      }
      e = e.sibling;
    }
  }
  function rp(e, t) {
    for (; lt !== null; ) {
      var n = lt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Aa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          jr(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, lt = a;
      else
        e: for (n = e; lt !== null; ) {
          a = lt;
          var l = a.sibling, i = a.return;
          if (Pd(a), a === n) {
            lt = null;
            break e;
          }
          if (l !== null) {
            l.return = i, lt = l;
            break e;
          }
          lt = i;
        }
    }
  }
  var $g = {
    getCacheForType: function(e) {
      var t = ut($e), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return ut($e).controller.signal;
    }
  }, Pg = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, Ce = null, fe = null, pe = 0, xe = 0, Vt = null, za = !1, er = !1, ks = !1, Wn = 0, Ge = 0, Na = 0, bl = 0, Es = 0, Gt = 0, tr = 0, ei = null, Ct = null, xs = !1, po = 0, ip = 0, mo = 1 / 0, ho = null, Oa = null, et = 0, Ca = null, nr = null, Jn = 0, _s = 0, As = null, op = null, ti = 0, zs = null;
  function Yt() {
    return (Te & 2) !== 0 && pe !== 0 ? pe & -pe : L.T !== null ? Ms() : fa();
  }
  function up() {
    if (Gt === 0)
      if ((pe & 536870912) === 0 || ge) {
        var e = Wa;
        Wa <<= 1, (Wa & 3932160) === 0 && (Wa = 262144), Gt = e;
      } else Gt = 536870912;
    return e = Bt.current, e !== null && (e.flags |= 32), Gt;
  }
  function Rt(e, t, n) {
    (e === Ce && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (ar(e, 0), Ra(
      e,
      pe,
      Gt,
      !1
    )), jn(e, n), ((Te & 2) === 0 || e !== Ce) && (e === Ce && ((Te & 2) === 0 && (bl |= n), Ge === 4 && Ra(
      e,
      pe,
      Gt,
      !1
    )), zn(e));
  }
  function sp(e, t, n) {
    if ((Te & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || wn(e, t), l = a ? Wg(e, t) : Os(e, t, !0), i = a;
    do {
      if (l === 0) {
        er && !a && Ra(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Kg(n)) {
          l = Os(e, t, !1), i = !1;
          continue;
        }
        if (l === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var u = 0;
          else
            u = e.pendingLanes & -536870913, u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
          if (u !== 0) {
            t = u;
            e: {
              var d = e;
              l = ei;
              var m = d.current.memoizedState.isDehydrated;
              if (m && (ar(d, u).flags |= 256), u = Os(
                d,
                u,
                !1
              ), u !== 2) {
                if (ks && !m) {
                  d.errorRecoveryDisabledLanes |= i, bl |= i, l = 4;
                  break e;
                }
                i = Ct, Ct = l, i !== null && (Ct === null ? Ct = i : Ct.push.apply(
                  Ct,
                  i
                ));
              }
              l = u;
            }
            if (i = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          ar(e, 0), Ra(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, i = l, i) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ra(
                a,
                t,
                Gt,
                !za
              );
              break e;
            case 2:
              Ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (l = po + 300 - Ye(), 10 < l)) {
            if (Ra(
              a,
              t,
              Gt,
              !za
            ), Mn(a, 0, !0) !== 0) break e;
            Jn = t, a.timeoutHandle = qp(
              cp.bind(
                null,
                a,
                n,
                Ct,
                ho,
                xs,
                t,
                Gt,
                bl,
                tr,
                za,
                i,
                "Throttled",
                -0,
                0
              ),
              l
            );
            break e;
          }
          cp(
            a,
            n,
            Ct,
            ho,
            xs,
            t,
            Gt,
            bl,
            tr,
            za,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    zn(e);
  }
  function cp(e, t, n, a, l, i, u, d, m, x, N, M, _, A) {
    if (e.timeoutHandle = -1, M = t.subtreeFlags, M & 8192 || (M & 16785408) === 16785408) {
      M = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: it
      }, np(
        t,
        i,
        M
      );
      var X = (i & 62914560) === i ? po - Ye() : (i & 4194048) === i ? ip - Ye() : 0;
      if (X = My(
        M,
        X
      ), X !== null) {
        Jn = i, e.cancelPendingCommit = X(
          bp.bind(
            null,
            e,
            t,
            i,
            n,
            a,
            l,
            u,
            d,
            m,
            N,
            M,
            null,
            _,
            A
          )
        ), Ra(e, i, u, !x);
        return;
      }
    }
    bp(
      e,
      t,
      i,
      n,
      a,
      l,
      u,
      d,
      m
    );
  }
  function Kg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var l = n[a], i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ut(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ra(e, t, n, a) {
    t &= ~Es, t &= ~bl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var i = 31 - rt(l), u = 1 << i;
      a[i] = -1, l &= ~u;
    }
    n !== 0 && gr(e, n, t);
  }
  function go() {
    return (Te & 6) === 0 ? (ni(0), !1) : !0;
  }
  function Ns() {
    if (fe !== null) {
      if (xe === 0)
        var e = fe.return;
      else
        e = fe, Gn = sl = null, Xu(e), Ql = null, Hr = 0, e = fe;
      for (; e !== null; )
        Vd(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function ar(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, gy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Jn = 0, Ns(), Ce = e, fe = n = qn(e.current, null), pe = t, xe = 0, Vt = null, za = !1, er = wn(e, t), ks = !1, tr = Gt = Es = bl = Na = Ge = 0, Ct = ei = null, xs = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - rt(a), i = 1 << l;
        t |= e[l], a &= ~i;
      }
    return Wn = t, ji(), n;
  }
  function fp(e, t) {
    ae = null, L.H = Ir, t === Il || t === Fi ? (t = Af(), xe = 3) : t === Du ? (t = Af(), xe = 4) : xe = t === os ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, fe === null && (Ge = 1, lo(
      e,
      Kt(t, e.current)
    ));
  }
  function dp() {
    var e = Bt.current;
    return e === null ? !0 : (pe & 4194048) === pe ? un === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? e === un : !1;
  }
  function pp() {
    var e = L.H;
    return L.H = Ir, e === null ? Ir : e;
  }
  function mp() {
    var e = L.A;
    return L.A = $g, e;
  }
  function yo() {
    Ge = 4, za || (pe & 4194048) !== pe && Bt.current !== null || (er = !0), (Na & 134217727) === 0 && (bl & 134217727) === 0 || Ce === null || Ra(
      Ce,
      pe,
      Gt,
      !1
    );
  }
  function Os(e, t, n) {
    var a = Te;
    Te |= 2;
    var l = pp(), i = mp();
    (Ce !== e || pe !== t) && (ho = null, ar(e, t)), t = !1;
    var u = Ge;
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          var d = fe, m = Vt;
          switch (xe) {
            case 8:
              Ns(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Bt.current === null && (t = !0);
              var x = xe;
              if (xe = 0, Vt = null, lr(e, d, m, x), n && er) {
                u = 0;
                break e;
              }
              break;
            default:
              x = xe, xe = 0, Vt = null, lr(e, d, m, x);
          }
        }
        Zg(), u = Ge;
        break;
      } catch (N) {
        fp(e, N);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = sl = null, Te = a, L.H = l, L.A = i, fe === null && (Ce = null, pe = 0, ji()), u;
  }
  function Zg() {
    for (; fe !== null; ) hp(fe);
  }
  function Wg(e, t) {
    var n = Te;
    Te |= 2;
    var a = pp(), l = mp();
    Ce !== e || pe !== t ? (ho = null, mo = Ye() + 500, ar(e, t)) : er = wn(
      e,
      t
    );
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          t = fe;
          var i = Vt;
          t: switch (xe) {
            case 1:
              xe = 0, Vt = null, lr(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (xf(i)) {
                xe = 0, Vt = null, gp(t);
                break;
              }
              t = function() {
                xe !== 2 && xe !== 9 || Ce !== e || (xe = 7), zn(e);
              }, i.then(t, t);
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              xf(i) ? (xe = 0, Vt = null, gp(t)) : (xe = 0, Vt = null, lr(e, t, i, 7));
              break;
            case 5:
              var u = null;
              switch (fe.tag) {
                case 26:
                  u = fe.memoizedState;
                case 5:
                case 27:
                  var d = fe;
                  if (u ? tm(u) : d.stateNode.complete) {
                    xe = 0, Vt = null;
                    var m = d.sibling;
                    if (m !== null) fe = m;
                    else {
                      var x = d.return;
                      x !== null ? (fe = x, bo(x)) : fe = null;
                    }
                    break t;
                  }
              }
              xe = 0, Vt = null, lr(e, t, i, 5);
              break;
            case 6:
              xe = 0, Vt = null, lr(e, t, i, 6);
              break;
            case 8:
              Ns(), Ge = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Jg();
        break;
      } catch (N) {
        fp(e, N);
      }
    while (!0);
    return Gn = sl = null, L.H = a, L.A = l, Te = n, fe !== null ? 0 : (Ce = null, pe = 0, ji(), Ge);
  }
  function Jg() {
    for (; fe !== null && !vn(); )
      hp(fe);
  }
  function hp(e) {
    var t = Bd(e.alternate, e, Wn);
    e.memoizedProps = e.pendingProps, t === null ? bo(e) : fe = t;
  }
  function gp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Dd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          pe
        );
        break;
      case 11:
        t = Dd(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          pe
        );
        break;
      case 5:
        Xu(t);
      default:
        Vd(n, t), t = fe = mf(t, Wn), t = Bd(n, t, Wn);
    }
    e.memoizedProps = e.pendingProps, t === null ? bo(e) : fe = t;
  }
  function lr(e, t, n, a) {
    Gn = sl = null, Xu(t), Ql = null, Hr = 0;
    var l = t.return;
    try {
      if (Vg(
        e,
        l,
        t,
        n,
        pe
      )) {
        Ge = 1, lo(
          e,
          Kt(n, e.current)
        ), fe = null;
        return;
      }
    } catch (i) {
      if (l !== null) throw fe = l, i;
      Ge = 1, lo(
        e,
        Kt(n, e.current)
      ), fe = null;
      return;
    }
    t.flags & 32768 ? (ge || a === 1 ? e = !0 : er || (pe & 536870912) !== 0 ? e = !1 : (za = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Bt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), yp(t, e)) : bo(t);
  }
  function bo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        yp(
          t,
          za
        );
        return;
      }
      e = t.return;
      var n = Fg(
        t.alternate,
        t,
        Wn
      );
      if (n !== null) {
        fe = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }
  function yp(e, t) {
    do {
      var n = Xg(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, fe = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        fe = e;
        return;
      }
      fe = e = n;
    } while (e !== null);
    Ge = 6, fe = null;
  }
  function bp(e, t, n, a, l, i, u, d, m) {
    e.cancelPendingCommit = null;
    do
      vo();
    while (et !== 0);
    if ((Te & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (i = t.lanes | t.childLanes, i |= bu, Jo(
        e,
        n,
        i,
        u,
        d,
        m
      ), e === Ce && (fe = Ce = null, pe = 0), nr = t, Ca = e, Jn = n, _s = i, As = l, op = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ay(ia, function() {
        return kp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = L.T, L.T = null, l = G.p, G.p = 2, u = Te, Te |= 4;
        try {
          Ig(e, t, n);
        } finally {
          Te = u, G.p = l, L.T = a;
        }
      }
      et = 1, vp(), Sp(), wp();
    }
  }
  function vp() {
    if (et === 1) {
      et = 0;
      var e = Ca, t = nr, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = L.T, L.T = null;
        var a = G.p;
        G.p = 2;
        var l = Te;
        Te |= 4;
        try {
          Jd(t, e);
          var i = Gs, u = lf(e.containerInfo), d = i.focusedElem, m = i.selectionRange;
          if (u !== d && d && d.ownerDocument && af(
            d.ownerDocument.documentElement,
            d
          )) {
            if (m !== null && pu(d)) {
              var x = m.start, N = m.end;
              if (N === void 0 && (N = x), "selectionStart" in d)
                d.selectionStart = x, d.selectionEnd = Math.min(
                  N,
                  d.value.length
                );
              else {
                var M = d.ownerDocument || document, _ = M && M.defaultView || window;
                if (_.getSelection) {
                  var A = _.getSelection(), X = d.textContent.length, te = Math.min(m.start, X), Oe = m.end === void 0 ? te : Math.min(m.end, X);
                  !A.extend && te > Oe && (u = Oe, Oe = te, te = u);
                  var w = nf(
                    d,
                    te
                  ), b = nf(
                    d,
                    Oe
                  );
                  if (w && b && (A.rangeCount !== 1 || A.anchorNode !== w.node || A.anchorOffset !== w.offset || A.focusNode !== b.node || A.focusOffset !== b.offset)) {
                    var E = M.createRange();
                    E.setStart(w.node, w.offset), A.removeAllRanges(), te > Oe ? (A.addRange(E), A.extend(b.node, b.offset)) : (E.setEnd(b.node, b.offset), A.addRange(E));
                  }
                }
              }
            }
            for (M = [], A = d; A = A.parentNode; )
              A.nodeType === 1 && M.push({
                element: A,
                left: A.scrollLeft,
                top: A.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < M.length; d++) {
              var D = M[d];
              D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
            }
          }
          Co = !!Vs, Gs = Vs = null;
        } finally {
          Te = l, G.p = a, L.T = n;
        }
      }
      e.current = t, et = 2;
    }
  }
  function Sp() {
    if (et === 2) {
      et = 0;
      var e = Ca, t = nr, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = L.T, L.T = null;
        var a = G.p;
        G.p = 2;
        var l = Te;
        Te |= 4;
        try {
          $d(e, t.alternate, t);
        } finally {
          Te = l, G.p = a, L.T = n;
        }
      }
      et = 3;
    }
  }
  function wp() {
    if (et === 4 || et === 3) {
      et = 0, Pa();
      var e = Ca, t = nr, n = Jn, a = op;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? et = 5 : (et = 0, nr = Ca = null, Tp(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (l === 0 && (Oa = null), br(n), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function")
        try {
          pt.onCommitFiberRoot(
            ua,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = L.T, l = G.p, G.p = 2, L.T = null;
        try {
          for (var i = e.onRecoverableError, u = 0; u < a.length; u++) {
            var d = a[u];
            i(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          L.T = t, G.p = l;
        }
      }
      (Jn & 3) !== 0 && vo(), zn(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === zs ? ti++ : (ti = 0, zs = e) : ti = 0, ni(0);
    }
  }
  function Tp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, jr(t)));
  }
  function vo() {
    return vp(), Sp(), wp(), kp();
  }
  function kp() {
    if (et !== 5) return !1;
    var e = Ca, t = _s;
    _s = 0;
    var n = br(Jn), a = L.T, l = G.p;
    try {
      G.p = 32 > n ? 32 : n, L.T = null, n = As, As = null;
      var i = Ca, u = Jn;
      if (et = 0, nr = Ca = null, Jn = 0, (Te & 6) !== 0) throw Error(c(331));
      var d = Te;
      if (Te |= 4, lp(i.current), tp(
        i,
        i.current,
        u,
        n
      ), Te = d, ni(0, !1), pt && typeof pt.onPostCommitFiberRoot == "function")
        try {
          pt.onPostCommitFiberRoot(ua, i);
        } catch {
        }
      return !0;
    } finally {
      G.p = l, L.T = a, Tp(e, t);
    }
  }
  function Ep(e, t, n) {
    t = Kt(n, t), t = is(e.stateNode, t, 2), e = Ea(e, t, 2), e !== null && (jn(e, 2), zn(e));
  }
  function _e(e, t, n) {
    if (e.tag === 3)
      Ep(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ep(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Oa === null || !Oa.has(a))) {
            e = Kt(n, e), n = xd(2), a = Ea(t, n, 2), a !== null && (_d(
              n,
              a,
              t,
              e
            ), jn(a, 2), zn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Cs(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Pg();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (ks = !0, l.add(n), e = ey.bind(null, e, t, n), t.then(e, e));
  }
  function ey(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ce === e && (pe & n) === n && (Ge === 4 || Ge === 3 && (pe & 62914560) === pe && 300 > Ye() - po ? (Te & 2) === 0 && ar(e, 0) : Es |= n, tr === pe && (tr = 0)), zn(e);
  }
  function xp(e, t) {
    t === 0 && (t = Ln()), e = il(e, t), e !== null && (jn(e, t), zn(e));
  }
  function ty(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), xp(e, n);
  }
  function ny(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    a !== null && a.delete(t), xp(e, n);
  }
  function ay(e, t) {
    return Tl(e, t);
  }
  var So = null, rr = null, Rs = !1, wo = !1, Ds = !1, Da = 0;
  function zn(e) {
    e !== rr && e.next === null && (rr === null ? So = rr = e : rr = rr.next = e), wo = !0, Rs || (Rs = !0, ry());
  }
  function ni(e, t) {
    if (!Ds && wo) {
      Ds = !0;
      do
        for (var n = !1, a = So; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var u = a.suspendedLanes, d = a.pingedLanes;
              i = (1 << 31 - rt(42 | e) + 1) - 1, i &= l & ~(u & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, Np(a, i));
          } else
            i = pe, i = Mn(
              a,
              a === Ce ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || wn(a, i) || (n = !0, Np(a, i));
          a = a.next;
        }
      while (n);
      Ds = !1;
    }
  }
  function ly() {
    _p();
  }
  function _p() {
    wo = Rs = !1;
    var e = 0;
    Da !== 0 && hy() && (e = Da);
    for (var t = Ye(), n = null, a = So; a !== null; ) {
      var l = a.next, i = Ap(a, t);
      i === 0 ? (a.next = null, n === null ? So = l : n.next = l, l === null && (rr = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (wo = !0)), a = l;
    }
    et !== 0 && et !== 5 || ni(e), Da !== 0 && (Da = 0);
  }
  function Ap(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - rt(i), d = 1 << u, m = l[u];
      m === -1 ? ((d & n) === 0 || (d & a) !== 0) && (l[u] = $t(d, t)) : m <= t && (e.expiredLanes |= d), i &= ~d;
    }
    if (t = Ce, n = pe, n = Mn(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && kl(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || wn(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && kl(a), br(n)) {
        case 2:
        case 8:
          n = xl;
          break;
        case 32:
          n = ia;
          break;
        case 268435456:
          n = Ka;
          break;
        default:
          n = ia;
      }
      return a = zp.bind(null, e), n = Tl(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && kl(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function zp(e, t) {
    if (et !== 0 && et !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (vo() && e.callbackNode !== n)
      return null;
    var a = pe;
    return a = Mn(
      e,
      e === Ce ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (sp(e, a, t), Ap(e, Ye()), e.callbackNode != null && e.callbackNode === n ? zp.bind(null, e) : null);
  }
  function Np(e, t) {
    if (vo()) return null;
    sp(e, t, !0);
  }
  function ry() {
    yy(function() {
      (Te & 6) !== 0 ? Tl(
        El,
        ly
      ) : _p();
    });
  }
  function Ms() {
    if (Da === 0) {
      var e = Fl;
      e === 0 && (e = Za, Za <<= 1, (Za & 261888) === 0 && (Za = 256)), Da = e;
    }
    return Da;
  }
  function Op(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _t("" + e);
  }
  function Cp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function iy(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = Op(
        (l[Fe] || null).action
      ), u = a.submitter;
      u && (t = (t = u[Fe] || null) ? Op(t.formAction) : u.getAttribute("formAction"), t !== null && (i = t, u = null));
      var d = new Ri(
        "action",
        "action",
        null,
        a,
        l
      );
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Da !== 0) {
                  var m = u ? Cp(l, u) : new FormData(l);
                  es(
                    n,
                    {
                      pending: !0,
                      data: m,
                      method: l.method,
                      action: i
                    },
                    null,
                    m
                  );
                }
              } else
                typeof i == "function" && (d.preventDefault(), m = u ? Cp(l, u) : new FormData(l), es(
                  n,
                  {
                    pending: !0,
                    data: m,
                    method: l.method,
                    action: i
                  },
                  i,
                  m
                ));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var Ls = 0; Ls < yu.length; Ls++) {
    var js = yu[Ls], oy = js.toLowerCase(), uy = js[0].toUpperCase() + js.slice(1);
    mn(
      oy,
      "on" + uy
    );
  }
  mn(uf, "onAnimationEnd"), mn(sf, "onAnimationIteration"), mn(cf, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(Eg, "onTransitionRun"), mn(xg, "onTransitionStart"), mn(_g, "onTransitionCancel"), mn(ff, "onTransitionEnd"), Hn("onMouseEnter", ["mouseout", "mouseover"]), Hn("onMouseLeave", ["mouseout", "mouseover"]), Hn("onPointerEnter", ["pointerout", "pointerover"]), Hn("onPointerLeave", ["pointerout", "pointerover"]), kn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), kn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), kn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), kn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), kn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), kn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), sy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai)
  );
  function Rp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = a.length - 1; 0 <= u; u--) {
            var d = a[u], m = d.instance, x = d.currentTarget;
            if (d = d.listener, m !== i && l.isPropagationStopped())
              break e;
            i = d, l.currentTarget = x;
            try {
              i(l);
            } catch (N) {
              Li(N);
            }
            l.currentTarget = null, i = m;
          }
        else
          for (u = 0; u < a.length; u++) {
            if (d = a[u], m = d.instance, x = d.currentTarget, d = d.listener, m !== i && l.isPropagationStopped())
              break e;
            i = d, l.currentTarget = x;
            try {
              i(l);
            } catch (N) {
              Li(N);
            }
            l.currentTarget = null, i = m;
          }
      }
    }
  }
  function de(e, t) {
    var n = t[zl];
    n === void 0 && (n = t[zl] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Dp(t, e, 2, !1), n.add(a));
  }
  function Us(e, t, n) {
    var a = 0;
    t && (a |= 4), Dp(
      n,
      e,
      a,
      t
    );
  }
  var To = "_reactListening" + Math.random().toString(36).slice(2);
  function Hs(e) {
    if (!e[To]) {
      e[To] = !0, _i.forEach(function(n) {
        n !== "selectionchange" && (sy.has(n) || Us(n, !1, e), Us(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[To] || (t[To] = !0, Us("selectionchange", !1, t));
    }
  }
  function Dp(e, t, n, a) {
    switch (um(t)) {
      case 2:
        var l = Uy;
        break;
      case 8:
        l = Hy;
        break;
      default:
        l = Js;
    }
    n = l.bind(
      null,
      t,
      n,
      e
    ), l = void 0, !lu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, !1);
  }
  function Bs(e, t, n, a, l) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var d = a.stateNode.containerInfo;
          if (d === l) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var m = u.tag;
              if ((m === 3 || m === 4) && u.stateNode.containerInfo === l)
                return;
              u = u.return;
            }
          for (; d !== null; ) {
            if (u = pa(d), u === null) return;
            if (m = u.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = i = u;
              continue e;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    Uc(function() {
      var x = i, N = nu(n), M = [];
      e: {
        var _ = df.get(e);
        if (_ !== void 0) {
          var A = Ri, X = e;
          switch (e) {
            case "keypress":
              if (Oi(n) === 0) break e;
            case "keydown":
            case "keyup":
              A = ng;
              break;
            case "focusin":
              X = "focus", A = uu;
              break;
            case "focusout":
              X = "blur", A = uu;
              break;
            case "beforeblur":
            case "afterblur":
              A = uu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = qc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = Fh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = rg;
              break;
            case uf:
            case sf:
            case cf:
              A = Qh;
              break;
            case ff:
              A = og;
              break;
            case "scroll":
            case "scrollend":
              A = Gh;
              break;
            case "wheel":
              A = sg;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = Ph;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = Gc;
              break;
            case "toggle":
            case "beforetoggle":
              A = fg;
          }
          var te = (t & 4) !== 0, Oe = !te && (e === "scroll" || e === "scrollend"), w = te ? _ !== null ? _ + "Capture" : null : _;
          te = [];
          for (var b = x, E; b !== null; ) {
            var D = b;
            if (E = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || E === null || w === null || (D = xr(b, w), D != null && te.push(
              li(b, D, E)
            )), Oe) break;
            b = b.return;
          }
          0 < te.length && (_ = new A(
            _,
            X,
            null,
            n,
            N
          ), M.push({ event: _, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_ = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", _ && n !== tu && (X = n.relatedTarget || n.fromElement) && (pa(X) || X[da]))
            break e;
          if ((A || _) && (_ = N.window === N ? N : (_ = N.ownerDocument) ? _.defaultView || _.parentWindow : window, A ? (X = n.relatedTarget || n.toElement, A = x, X = X ? pa(X) : null, X !== null && (Oe = g(X), te = X.tag, X !== Oe || te !== 5 && te !== 27 && te !== 6) && (X = null)) : (A = null, X = x), A !== X)) {
            if (te = qc, D = "onMouseLeave", w = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (te = Gc, D = "onPointerLeave", w = "onPointerEnter", b = "pointer"), Oe = A == null ? _ : Dt(A), E = X == null ? _ : Dt(X), _ = new te(
              D,
              b + "leave",
              A,
              n,
              N
            ), _.target = Oe, _.relatedTarget = E, D = null, pa(N) === x && (te = new te(
              w,
              b + "enter",
              X,
              n,
              N
            ), te.target = E, te.relatedTarget = Oe, D = te), Oe = D, A && X)
              t: {
                for (te = cy, w = A, b = X, E = 0, D = w; D; D = te(D))
                  E++;
                D = 0;
                for (var W = b; W; W = te(W))
                  D++;
                for (; 0 < E - D; )
                  w = te(w), E--;
                for (; 0 < D - E; )
                  b = te(b), D--;
                for (; E--; ) {
                  if (w === b || b !== null && w === b.alternate) {
                    te = w;
                    break t;
                  }
                  w = te(w), b = te(b);
                }
                te = null;
              }
            else te = null;
            A !== null && Mp(
              M,
              _,
              A,
              te,
              !1
            ), X !== null && Oe !== null && Mp(
              M,
              Oe,
              X,
              te,
              !0
            );
          }
        }
        e: {
          if (_ = x ? Dt(x) : window, A = _.nodeName && _.nodeName.toLowerCase(), A === "select" || A === "input" && _.type === "file")
            var ve = Kc;
          else if ($c(_))
            if (Zc)
              ve = wg;
            else {
              ve = vg;
              var Q = bg;
            }
          else
            A = _.nodeName, !A || A.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? x && at(x.elementType) && (ve = Kc) : ve = Sg;
          if (ve && (ve = ve(e, x))) {
            Pc(
              M,
              ve,
              n,
              N
            );
            break e;
          }
          Q && Q(e, _, x), e === "focusout" && x && _.type === "number" && x.memoizedProps.value != null && v(_, "number", _.value);
        }
        switch (Q = x ? Dt(x) : window, e) {
          case "focusin":
            ($c(Q) || Q.contentEditable === "true") && (jl = Q, mu = x, Dr = null);
            break;
          case "focusout":
            Dr = mu = jl = null;
            break;
          case "mousedown":
            hu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hu = !1, rf(M, n, N);
            break;
          case "selectionchange":
            if (kg) break;
          case "keydown":
          case "keyup":
            rf(M, n, N);
        }
        var le;
        if (cu)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          Ll ? Ic(e, n) && (me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (me = "onCompositionStart");
        me && (Yc && n.locale !== "ko" && (Ll || me !== "onCompositionStart" ? me === "onCompositionEnd" && Ll && (le = Hc()) : (ya = N, ru = "value" in ya ? ya.value : ya.textContent, Ll = !0)), Q = ko(x, me), 0 < Q.length && (me = new Vc(
          me,
          e,
          null,
          n,
          N
        ), M.push({ event: me, listeners: Q }), le ? me.data = le : (le = Qc(n), le !== null && (me.data = le)))), (le = pg ? mg(e, n) : hg(e, n)) && (me = ko(x, "onBeforeInput"), 0 < me.length && (Q = new Vc(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          N
        ), M.push({
          event: Q,
          listeners: me
        }), Q.data = le)), iy(
          M,
          e,
          x,
          n,
          N
        );
      }
      Rp(M, t);
    });
  }
  function li(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function ko(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, i = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = xr(e, n), l != null && a.unshift(
        li(e, l, i)
      ), l = xr(e, t), l != null && a.push(
        li(e, l, i)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function cy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Mp(e, t, n, a, l) {
    for (var i = t._reactName, u = []; n !== null && n !== a; ) {
      var d = n, m = d.alternate, x = d.stateNode;
      if (d = d.tag, m !== null && m === a) break;
      d !== 5 && d !== 26 && d !== 27 || x === null || (m = x, l ? (x = xr(n, i), x != null && u.unshift(
        li(n, x, m)
      )) : l || (x = xr(n, i), x != null && u.push(
        li(n, x, m)
      ))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var fy = /\r\n?/g, dy = /\u0000|\uFFFD/g;
  function Lp(e) {
    return (typeof e == "string" ? e : "" + e).replace(fy, `
`).replace(dy, "");
  }
  function jp(e, t) {
    return t = Lp(t), Lp(e) === t;
  }
  function Ne(e, t, n, a, l, i) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || K(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && K(e, "" + a);
        break;
      case "className":
        Et(e, "class", a);
        break;
      case "tabIndex":
        Et(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Et(e, n, a);
        break;
      case "style":
        mt(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          Et(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = _t("" + a), e.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (n === "formAction" ? (t !== "input" && Ne(e, t, "name", l.name, l, null), Ne(
            e,
            t,
            "formEncType",
            l.formEncType,
            l,
            null
          ), Ne(
            e,
            t,
            "formMethod",
            l.formMethod,
            l,
            null
          ), Ne(
            e,
            t,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (Ne(e, t, "encType", l.encType, l, null), Ne(e, t, "method", l.method, l, null), Ne(e, t, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = _t("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = it);
        break;
      case "onScroll":
        a != null && de("scroll", e);
        break;
      case "onScrollEnd":
        a != null && de("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = _t("" + a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
        break;
      case "popover":
        de("beforetoggle", e), de("toggle", e), En(e, "popover", a);
        break;
      case "xlinkActuate":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        En(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = vt.get(n) || n, En(e, n, a));
    }
  }
  function qs(e, t, n, a, l, i) {
    switch (n) {
      case "style":
        mt(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? K(e, a) : (typeof a == "number" || typeof a == "bigint") && K(e, "" + a);
        break;
      case "onScroll":
        a != null && de("scroll", e);
        break;
      case "onScrollEnd":
        a != null && de("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = it);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ai.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), i = e[Fe] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, l), typeof a == "function")) {
              typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : En(e, n, a);
          }
    }
  }
  function ct(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        de("error", e), de("load", e);
        var a = !1, l = !1, i;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var u = n[i];
            if (u != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Ne(e, t, i, u, n, null);
              }
          }
        l && Ne(e, t, "srcSet", n.srcSet, n, null), a && Ne(e, t, "src", n.src, n, null);
        return;
      case "input":
        de("invalid", e);
        var d = i = u = l = null, m = null, x = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var N = n[a];
            if (N != null)
              switch (a) {
                case "name":
                  l = N;
                  break;
                case "type":
                  u = N;
                  break;
                case "checked":
                  m = N;
                  break;
                case "defaultChecked":
                  x = N;
                  break;
                case "value":
                  i = N;
                  break;
                case "defaultValue":
                  d = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Ne(e, t, a, N, n, null);
              }
          }
        Rl(
          e,
          i,
          d,
          m,
          x,
          u,
          l,
          !1
        );
        return;
      case "select":
        de("invalid", e), a = u = i = null;
        for (l in n)
          if (n.hasOwnProperty(l) && (d = n[l], d != null))
            switch (l) {
              case "value":
                i = d;
                break;
              case "defaultValue":
                u = d;
                break;
              case "multiple":
                a = d;
              default:
                Ne(e, t, l, d, n, null);
            }
        t = i, n = u, e.multiple = !!a, t != null ? y(e, !!a, t, !1) : n != null && y(e, !!a, n, !0);
        return;
      case "textarea":
        de("invalid", e), i = l = a = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (d = n[u], d != null))
            switch (u) {
              case "value":
                a = d;
                break;
              case "defaultValue":
                l = d;
                break;
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(c(91));
                break;
              default:
                Ne(e, t, u, d, n, null);
            }
        q(e, a, l, i);
        return;
      case "option":
        for (m in n)
          if (n.hasOwnProperty(m) && (a = n[m], a != null))
            switch (m) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ne(e, t, m, a, n, null);
            }
        return;
      case "dialog":
        de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
        break;
      case "iframe":
      case "object":
        de("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ai.length; a++)
          de(ai[a], e);
        break;
      case "image":
        de("error", e), de("load", e);
        break;
      case "details":
        de("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        de("error", e), de("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (x in n)
          if (n.hasOwnProperty(x) && (a = n[x], a != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ne(e, t, x, a, n, null);
            }
        return;
      default:
        if (at(t)) {
          for (N in n)
            n.hasOwnProperty(N) && (a = n[N], a !== void 0 && qs(
              e,
              t,
              N,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (d in n)
      n.hasOwnProperty(d) && (a = n[d], a != null && Ne(e, t, d, a, n, null));
  }
  function py(e, t, n, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var l = null, i = null, u = null, d = null, m = null, x = null, N = null;
        for (A in n) {
          var M = n[A];
          if (n.hasOwnProperty(A) && M != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = M;
              default:
                a.hasOwnProperty(A) || Ne(e, t, A, null, a, M);
            }
        }
        for (var _ in a) {
          var A = a[_];
          if (M = n[_], a.hasOwnProperty(_) && (A != null || M != null))
            switch (_) {
              case "type":
                i = A;
                break;
              case "name":
                l = A;
                break;
              case "checked":
                x = A;
                break;
              case "defaultChecked":
                N = A;
                break;
              case "value":
                u = A;
                break;
              case "defaultValue":
                d = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(c(137, t));
                break;
              default:
                A !== M && Ne(
                  e,
                  t,
                  _,
                  A,
                  a,
                  M
                );
            }
        }
        ga(
          e,
          u,
          d,
          m,
          x,
          N,
          i,
          l
        );
        return;
      case "select":
        A = u = d = _ = null;
        for (i in n)
          if (m = n[i], n.hasOwnProperty(i) && m != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                A = m;
              default:
                a.hasOwnProperty(i) || Ne(
                  e,
                  t,
                  i,
                  null,
                  a,
                  m
                );
            }
        for (l in a)
          if (i = a[l], m = n[l], a.hasOwnProperty(l) && (i != null || m != null))
            switch (l) {
              case "value":
                _ = i;
                break;
              case "defaultValue":
                d = i;
                break;
              case "multiple":
                u = i;
              default:
                i !== m && Ne(
                  e,
                  t,
                  l,
                  i,
                  a,
                  m
                );
            }
        t = d, n = u, a = A, _ != null ? y(e, !!n, _, !1) : !!a != !!n && (t != null ? y(e, !!n, t, !0) : y(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        A = _ = null;
        for (d in n)
          if (l = n[d], n.hasOwnProperty(d) && l != null && !a.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ne(e, t, d, null, a, l);
            }
        for (u in a)
          if (l = a[u], i = n[u], a.hasOwnProperty(u) && (l != null || i != null))
            switch (u) {
              case "value":
                _ = l;
                break;
              case "defaultValue":
                A = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(c(91));
                break;
              default:
                l !== i && Ne(e, t, u, l, a, i);
            }
        z(e, _, A);
        return;
      case "option":
        for (var X in n)
          if (_ = n[X], n.hasOwnProperty(X) && _ != null && !a.hasOwnProperty(X))
            switch (X) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ne(
                  e,
                  t,
                  X,
                  null,
                  a,
                  _
                );
            }
        for (m in a)
          if (_ = a[m], A = n[m], a.hasOwnProperty(m) && _ !== A && (_ != null || A != null))
            switch (m) {
              case "selected":
                e.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                Ne(
                  e,
                  t,
                  m,
                  _,
                  a,
                  A
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var te in n)
          _ = n[te], n.hasOwnProperty(te) && _ != null && !a.hasOwnProperty(te) && Ne(e, t, te, null, a, _);
        for (x in a)
          if (_ = a[x], A = n[x], a.hasOwnProperty(x) && _ !== A && (_ != null || A != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(c(137, t));
                break;
              default:
                Ne(
                  e,
                  t,
                  x,
                  _,
                  a,
                  A
                );
            }
        return;
      default:
        if (at(t)) {
          for (var Oe in n)
            _ = n[Oe], n.hasOwnProperty(Oe) && _ !== void 0 && !a.hasOwnProperty(Oe) && qs(
              e,
              t,
              Oe,
              void 0,
              a,
              _
            );
          for (N in a)
            _ = a[N], A = n[N], !a.hasOwnProperty(N) || _ === A || _ === void 0 && A === void 0 || qs(
              e,
              t,
              N,
              _,
              a,
              A
            );
          return;
        }
    }
    for (var w in n)
      _ = n[w], n.hasOwnProperty(w) && _ != null && !a.hasOwnProperty(w) && Ne(e, t, w, null, a, _);
    for (M in a)
      _ = a[M], A = n[M], !a.hasOwnProperty(M) || _ === A || _ == null && A == null || Ne(e, t, M, _, a, A);
  }
  function Up(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function my() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], i = l.transferSize, u = l.initiatorType, d = l.duration;
        if (i && d && Up(u)) {
          for (u = 0, d = l.responseEnd, a += 1; a < n.length; a++) {
            var m = n[a], x = m.startTime;
            if (x > d) break;
            var N = m.transferSize, M = m.initiatorType;
            N && Up(M) && (m = m.responseEnd, u += N * (m < d ? 1 : (d - x) / (m - x)));
          }
          if (--a, t += 8 * (i + u) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Vs = null, Gs = null;
  function Eo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Hp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Bp(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Ys(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Fs = null;
  function hy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Fs ? !1 : (Fs = e, !0) : (Fs = null, !1);
  }
  var qp = typeof setTimeout == "function" ? setTimeout : void 0, gy = typeof clearTimeout == "function" ? clearTimeout : void 0, Vp = typeof Promise == "function" ? Promise : void 0, yy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vp < "u" ? function(e) {
    return Vp.resolve(null).then(e).catch(by);
  } : qp;
  function by(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ma(e) {
    return e === "head";
  }
  function Gp(e, t) {
    var n = t, a = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8)
        if (n = l.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(l), sr(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          ri(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, ri(n);
          for (var i = n.firstChild; i; ) {
            var u = i.nextSibling, d = i.nodeName;
            i[tl] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = u;
          }
        } else
          n === "body" && ri(e.ownerDocument.body);
      n = l;
    } while (n);
    sr(t);
  }
  function Yp(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = a;
    } while (n);
  }
  function Xs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xs(n), wr(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function vy(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[tl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence") || i !== l.rel || e.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || e.getAttribute("title") !== (l.title == null ? null : l.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (l.src == null ? null : l.src) || e.getAttribute("type") !== (l.type == null ? null : l.type) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = en(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Sy(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = en(e.nextSibling), e === null)) return null;
    return e;
  }
  function Fp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = en(e.nextSibling), e === null)) return null;
    return e;
  }
  function Is(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Qs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function wy(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function en(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var $s = null;
  function Xp(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return en(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ip(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Qp(e, t, n) {
    switch (t = Eo(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(c(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(c(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function ri(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    wr(e);
  }
  var tn = /* @__PURE__ */ new Map(), $p = /* @__PURE__ */ new Set();
  function xo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ea = G.d;
  G.d = {
    f: Ty,
    r: ky,
    D: Ey,
    C: xy,
    L: _y,
    m: Ay,
    X: Ny,
    S: zy,
    M: Oy
  };
  function Ty() {
    var e = ea.f(), t = go();
    return e || t;
  }
  function ky(e) {
    var t = ma(e);
    t !== null && t.tag === 5 && t.type === "form" ? fd(t) : ea.r(e);
  }
  var ir = typeof document > "u" ? null : document;
  function Pp(e, t, n) {
    var a = ir;
    if (a && typeof t == "string" && t) {
      var l = kt(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), $p.has(l) || ($p.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), ct(t, "link", e), Me(t), a.head.appendChild(t)));
    }
  }
  function Ey(e) {
    ea.D(e), Pp("dns-prefetch", e, null);
  }
  function xy(e, t) {
    ea.C(e, t), Pp("preconnect", e, t);
  }
  function _y(e, t, n) {
    ea.L(e, t, n);
    var a = ir;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + kt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + kt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + kt(
        n.imageSizes
      ) + '"]')) : l += '[href="' + kt(e) + '"]';
      var i = l;
      switch (t) {
        case "style":
          i = or(e);
          break;
        case "script":
          i = ur(e);
      }
      tn.has(i) || (e = R(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), tn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(ii(i)) || t === "script" && a.querySelector(oi(i)) || (t = a.createElement("link"), ct(t, "link", e), Me(t), a.head.appendChild(t)));
    }
  }
  function Ay(e, t) {
    ea.m(e, t);
    var n = ir;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + kt(a) + '"][href="' + kt(e) + '"]', i = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = ur(e);
      }
      if (!tn.has(i) && (e = R({ rel: "modulepreload", href: e }, t), tn.set(i, e), n.querySelector(l) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(oi(i)))
              return;
        }
        a = n.createElement("link"), ct(a, "link", e), Me(a), n.head.appendChild(a);
      }
    }
  }
  function zy(e, t, n) {
    ea.S(e, t, n);
    var a = ir;
    if (a && e) {
      var l = Un(a).hoistableStyles, i = or(e);
      t = t || "default";
      var u = l.get(i);
      if (!u) {
        var d = { loading: 0, preload: null };
        if (u = a.querySelector(
          ii(i)
        ))
          d.loading = 5;
        else {
          e = R(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = tn.get(i)) && Ps(e, n);
          var m = u = a.createElement("link");
          Me(m), ct(m, "link", e), m._p = new Promise(function(x, N) {
            m.onload = x, m.onerror = N;
          }), m.addEventListener("load", function() {
            d.loading |= 1;
          }), m.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, _o(u, t, a);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: d
        }, l.set(i, u);
      }
    }
  }
  function Ny(e, t) {
    ea.X(e, t);
    var n = ir;
    if (n && e) {
      var a = Un(n).hoistableScripts, l = ur(e), i = a.get(l);
      i || (i = n.querySelector(oi(l)), i || (e = R({ src: e, async: !0 }, t), (t = tn.get(l)) && Ks(e, t), i = n.createElement("script"), Me(i), ct(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Oy(e, t) {
    ea.M(e, t);
    var n = ir;
    if (n && e) {
      var a = Un(n).hoistableScripts, l = ur(e), i = a.get(l);
      i || (i = n.querySelector(oi(l)), i || (e = R({ src: e, async: !0, type: "module" }, t), (t = tn.get(l)) && Ks(e, t), i = n.createElement("script"), Me(i), ct(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Kp(e, t, n, a) {
    var l = (l = tt.current) ? xo(l) : null;
    if (!l) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = or(n.href), n = Un(
          l
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = or(n.href);
          var i = Un(
            l
          ).hoistableStyles, u = i.get(e);
          if (u || (l = l.ownerDocument || l, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, u), (i = l.querySelector(
            ii(e)
          )) && !i._p && (u.instance = i, u.state.loading = 5), tn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, tn.set(e, n), i || Cy(
            l,
            e,
            n,
            u.state
          ))), t && a === null)
            throw Error(c(528, ""));
          return u;
        }
        if (t && a !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ur(n), n = Un(
          l
        ).hoistableScripts, a = n.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, e));
    }
  }
  function or(e) {
    return 'href="' + kt(e) + '"';
  }
  function ii(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Zp(e) {
    return R({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Cy(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ct(t, "link", n), Me(t), e.head.appendChild(t));
  }
  function ur(e) {
    return '[src="' + kt(e) + '"]';
  }
  function oi(e) {
    return "script[async]" + e;
  }
  function Wp(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + kt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, Me(a), a;
          var l = R({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Me(a), ct(a, "style", l), _o(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = or(n.href);
          var i = e.querySelector(
            ii(l)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Me(i), i;
          a = Zp(n), (l = tn.get(l)) && Ps(a, l), i = (e.ownerDocument || e).createElement("link"), Me(i);
          var u = i;
          return u._p = new Promise(function(d, m) {
            u.onload = d, u.onerror = m;
          }), ct(i, "link", a), t.state.loading |= 4, _o(i, n.precedence, e), t.instance = i;
        case "script":
          return i = ur(n.src), (l = e.querySelector(
            oi(i)
          )) ? (t.instance = l, Me(l), l) : (a = n, (l = tn.get(i)) && (a = R({}, n), Ks(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), Me(l), ct(l, "link", a), e.head.appendChild(l), t.instance = l);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, _o(a, n.precedence, e));
    return t.instance;
  }
  function _o(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), l = a.length ? a[a.length - 1] : null, i = l, u = 0; u < a.length; u++) {
      var d = a[u];
      if (d.dataset.precedence === t) i = d;
      else if (i !== l) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Ps(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ks(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ao = null;
  function Jp(e, t, n) {
    if (Ao === null) {
      var a = /* @__PURE__ */ new Map(), l = Ao = /* @__PURE__ */ new Map();
      l.set(n, a);
    } else
      l = Ao, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var i = n[l];
      if (!(i[tl] || i[oe] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(t) || "";
        u = e + u;
        var d = a.get(u);
        d ? d.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function em(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Ry(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function tm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Dy(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = or(a.href), i = t.querySelector(
          ii(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = zo.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Me(i);
          return;
        }
        i = t.ownerDocument || t, a = Zp(a), (l = tn.get(l)) && Ps(a, l), i = i.createElement("link"), Me(i);
        var u = i;
        u._p = new Promise(function(d, m) {
          u.onload = d, u.onerror = m;
        }), ct(i, "link", a), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = zo.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Zs = 0;
  function My(e, t) {
    return e.stylesheets && e.count === 0 && Oo(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Oo(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Zs === 0 && (Zs = 62500 * my());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Oo(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > Zs ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(l);
      };
    } : null;
  }
  function zo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Oo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var No = null;
  function Oo(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, No = /* @__PURE__ */ new Map(), t.forEach(Ly, e), No = null, zo.call(e));
  }
  function Ly(e, t) {
    if (!(t.state.loading & 4)) {
      var n = No.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), No.set(e, n);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < l.length; i++) {
          var u = l[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (n.set(u.dataset.precedence, u), a = u);
        }
        a && n.set(null, a);
      }
      l = t.instance, u = l.getAttribute("data-precedence"), i = n.get(u) || a, i === a && n.set(null, l), n.set(u, l), this.count++, a = zo.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ui = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0
  };
  function jy(e, t, n, a, l, i, u, d, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ja(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ja(0), this.hiddenUpdates = Ja(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nm(e, t, n, a, l, i, u, d, m, x, N, M) {
    return e = new jy(
      e,
      t,
      n,
      u,
      m,
      x,
      N,
      M,
      d
    ), t = 1, i === !0 && (t |= 24), i = Ht(3, null, null, t), e.current = i, i.stateNode = e, t = Ou(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Mu(i), e;
  }
  function am(e) {
    return e ? (e = Bl, e) : Bl;
  }
  function lm(e, t, n, a, l, i) {
    l = am(l), a.context === null ? a.context = l : a.pendingContext = l, a = ka(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = Ea(e, a, t), n !== null && (Rt(n, e, t), qr(n, e, t));
  }
  function rm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ws(e, t) {
    rm(e, t), (e = e.alternate) && rm(e, t);
  }
  function im(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = il(e, 67108864);
      t !== null && Rt(t, e, 67108864), Ws(e, 67108864);
    }
  }
  function om(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = el(t);
      var n = il(e, t);
      n !== null && Rt(n, e, t), Ws(e, t);
    }
  }
  var Co = !0;
  function Uy(e, t, n, a) {
    var l = L.T;
    L.T = null;
    var i = G.p;
    try {
      G.p = 2, Js(e, t, n, a);
    } finally {
      G.p = i, L.T = l;
    }
  }
  function Hy(e, t, n, a) {
    var l = L.T;
    L.T = null;
    var i = G.p;
    try {
      G.p = 8, Js(e, t, n, a);
    } finally {
      G.p = i, L.T = l;
    }
  }
  function Js(e, t, n, a) {
    if (Co) {
      var l = ec(a);
      if (l === null)
        Bs(
          e,
          t,
          a,
          Ro,
          n
        ), sm(e, a);
      else if (qy(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (sm(e, a), t & 4 && -1 < By.indexOf(e)) {
        for (; l !== null; ) {
          var i = ma(l);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var u = Sn(i.pendingLanes);
                  if (u !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; u; ) {
                      var m = 1 << 31 - rt(u);
                      d.entanglements[1] |= m, u &= ~m;
                    }
                    zn(i), (Te & 6) === 0 && (mo = Ye() + 500, ni(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = il(i, 2), d !== null && Rt(d, i, 2), go(), Ws(i, 2);
            }
          if (i = ec(a), i === null && Bs(
            e,
            t,
            a,
            Ro,
            n
          ), i === l) break;
          l = i;
        }
        l !== null && a.stopPropagation();
      } else
        Bs(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function ec(e) {
    return e = nu(e), tc(e);
  }
  var Ro = null;
  function tc(e) {
    if (Ro = null, e = pa(e), e !== null) {
      var t = g(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = T(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = S(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ro = e, null;
  }
  function um(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (mr()) {
          case El:
            return 2;
          case xl:
            return 8;
          case ia:
          case oa:
            return 32;
          case Ka:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var nc = !1, La = null, ja = null, Ua = null, si = /* @__PURE__ */ new Map(), ci = /* @__PURE__ */ new Map(), Ha = [], By = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        La = null;
        break;
      case "dragenter":
      case "dragleave":
        ja = null;
        break;
      case "mouseover":
      case "mouseout":
        Ua = null;
        break;
      case "pointerover":
      case "pointerout":
        si.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ci.delete(t.pointerId);
    }
  }
  function fi(e, t, n, a, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [l]
    }, t !== null && (t = ma(t), t !== null && im(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function qy(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return La = fi(
          La,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "dragenter":
        return ja = fi(
          ja,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "mouseover":
        return Ua = fi(
          Ua,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "pointerover":
        var i = l.pointerId;
        return si.set(
          i,
          fi(
            si.get(i) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
      case "gotpointercapture":
        return i = l.pointerId, ci.set(
          i,
          fi(
            ci.get(i) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
    }
    return !1;
  }
  function cm(e) {
    var t = pa(e.target);
    if (t !== null) {
      var n = g(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = T(n), t !== null) {
            e.blockedOn = t, Ei(e.priority, function() {
              om(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = S(n), t !== null) {
            e.blockedOn = t, Ei(e.priority, function() {
              om(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Do(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ec(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        tu = a, n.target.dispatchEvent(a), tu = null;
      } else
        return t = ma(n), t !== null && im(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function fm(e, t, n) {
    Do(e) && n.delete(t);
  }
  function Vy() {
    nc = !1, La !== null && Do(La) && (La = null), ja !== null && Do(ja) && (ja = null), Ua !== null && Do(Ua) && (Ua = null), si.forEach(fm), ci.forEach(fm);
  }
  function Mo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, nc || (nc = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      Vy
    )));
  }
  var Lo = null;
  function dm(e) {
    Lo !== e && (Lo = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Lo === e && (Lo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (tc(a || n) === null)
              continue;
            break;
          }
          var i = ma(n);
          i !== null && (e.splice(t, 3), t -= 3, es(
            i,
            {
              pending: !0,
              data: l,
              method: n.method,
              action: a
            },
            a,
            l
          ));
        }
      }
    ));
  }
  function sr(e) {
    function t(m) {
      return Mo(m, e);
    }
    La !== null && Mo(La, e), ja !== null && Mo(ja, e), Ua !== null && Mo(Ua, e), si.forEach(t), ci.forEach(t);
    for (var n = 0; n < Ha.length; n++) {
      var a = Ha[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Ha.length && (n = Ha[0], n.blockedOn === null); )
      cm(n), n.blockedOn === null && Ha.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], i = n[a + 1], u = l[Fe] || null;
        if (typeof i == "function")
          u || dm(n);
        else if (u) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (l = i, u = i[Fe] || null)
              d = u.formAction;
            else if (tc(l) !== null) continue;
          } else d = u.action;
          typeof d == "function" ? n[a + 1] = d : (n.splice(a, 3), a -= 3), dm(n);
        }
      }
  }
  function pm() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(u) {
            return l = u;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      l !== null && (l(), l = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, l = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), l !== null && (l(), l = null);
      };
    }
  }
  function ac(e) {
    this._internalRoot = e;
  }
  jo.prototype.render = ac.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = Yt();
    lm(n, a, e, t, null, null);
  }, jo.prototype.unmount = ac.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      lm(e.current, 2, null, e, null, null), go(), t[da] = null;
    }
  };
  function jo(e) {
    this._internalRoot = e;
  }
  jo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = fa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ha.length && t !== 0 && t < Ha[n].priority; n++) ;
      Ha.splice(n, 0, e), n === 0 && cm(e);
    }
  };
  var mm = s.version;
  if (mm !== "19.2.6")
    throw Error(
      c(
        527,
        mm,
        "19.2.6"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = C(t), e = e !== null ? O(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Gy = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uo.isDisabled && Uo.supportsFiber)
      try {
        ua = Uo.inject(
          Gy
        ), pt = Uo;
      } catch {
      }
  }
  return wm.createRoot = function(e, t) {
    if (!p(e)) throw Error(c(299));
    var n = !1, a = "", l = wd, i = Td, u = kd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = nm(
      e,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      l,
      i,
      u,
      pm
    ), e[da] = t.current, Hs(e), new ac(t);
  }, wm.hydrateRoot = function(e, t, n) {
    if (!p(e)) throw Error(c(299));
    var a = !1, l = "", i = wd, u = Td, d = kd, m = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (d = n.onRecoverableError), n.formState !== void 0 && (m = n.formState)), t = nm(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      l,
      m,
      i,
      u,
      d,
      pm
    ), t.context = am(null), n = t.current, a = Yt(), a = el(a), l = ka(a), l.callback = null, Ea(n, l, a), n = a, t.current.lanes = n, jn(t, n), zn(t), e[da] = t.current, Hs(e), new jo(t);
  }, wm.version = "19.2.6", wm;
}
var N0;
function Jx() {
  if (N0) return cb.exports;
  N0 = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (o) {
        console.error(o);
      }
  }
  return r(), cb.exports = Wx(), cb.exports;
}
Jx();
(function() {
  var r = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width:1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width:576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.gray-dark-bg .glide__bullet:focus{background-color:#ffc627}.glide.gray-dark-bg .glide__bullet:hover{border:1px solid #ffc627;background-color:#333}.glide.gray-dark-bg .glide__bullet--active{background-color:#ffc627}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width:576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width:1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.gray-dark-bg button:focus,.glide.gray-dark-bg a:focus,.glide.gray-dark-bg input:focus,.glide.gray-dark-bg textarea:focus,.glide.gray-dark-bg select:focus{box-shadow:0 0 0 3px #333,0 0 0 5px #ffc627!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, o = document.createElement("style");
  o.type = "text/css", o.styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), document.head.appendChild(o);
})();
function O0(r, o) {
  (o == null || o > r.length) && (o = r.length);
  for (var s = 0, f = Array(o); s < o; s++) f[s] = r[s];
  return f;
}
function e3(r) {
  if (Array.isArray(r)) return r;
}
function t3(r, o) {
  var s = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (s != null) {
    var f, c, p, g, T = [], S = !0, k = !1;
    try {
      if (p = (s = s.call(r)).next, o !== 0) for (; !(S = (f = p.call(s)).done) && (T.push(f.value), T.length !== o); S = !0) ;
    } catch (C) {
      k = !0, c = C;
    } finally {
      try {
        if (!S && s.return != null && (g = s.return(), Object(g) !== g)) return;
      } finally {
        if (k) throw c;
      }
    }
    return T;
  }
}
function n3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a3(r, o) {
  return e3(r) || t3(r, o) || l3(r, o) || n3();
}
function l3(r, o) {
  if (r) {
    if (typeof r == "string") return O0(r, o);
    var s = {}.toString.call(r).slice(8, -1);
    return s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set" ? Array.from(r) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? O0(r, o) : void 0;
  }
}
const _S = Object.entries, C0 = Object.setPrototypeOf, r3 = Object.isFrozen, i3 = Object.getPrototypeOf, o3 = Object.getOwnPropertyDescriptor;
let Ya = Object.freeze, Xa = Object.seal, _c = Object.create, AS = typeof Reflect < "u" && Reflect, Ib = AS.apply, Qb = AS.construct;
Ya || (Ya = function(o) {
  return o;
});
Xa || (Xa = function(o) {
  return o;
});
Ib || (Ib = function(o, s) {
  for (var f = arguments.length, c = new Array(f > 2 ? f - 2 : 0), p = 2; p < f; p++)
    c[p - 2] = arguments[p];
  return o.apply(s, c);
});
Qb || (Qb = function(o) {
  for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
    f[c - 1] = arguments[c];
  return new o(...f);
});
const Tm = Rn(Array.prototype.forEach), u3 = Rn(Array.prototype.lastIndexOf), R0 = Rn(Array.prototype.pop), kc = Rn(Array.prototype.push), s3 = Rn(Array.prototype.splice), Po = Array.isArray, Om = Rn(String.prototype.toLowerCase), fb = Rn(String.prototype.toString), D0 = Rn(String.prototype.match), km = Rn(String.prototype.replace), M0 = Rn(String.prototype.indexOf), c3 = Rn(String.prototype.trim), f3 = Rn(Number.prototype.toString), d3 = Rn(Boolean.prototype.toString), L0 = typeof BigInt > "u" ? null : Rn(BigInt.prototype.toString), j0 = typeof Symbol > "u" ? null : Rn(Symbol.prototype.toString), ra = Rn(Object.prototype.hasOwnProperty), Em = Rn(Object.prototype.toString), Va = Rn(RegExp.prototype.test), rc = p3(TypeError);
function Rn(r) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
      f[c - 1] = arguments[c];
    return Ib(r, o, f);
  };
}
function p3(r) {
  return function() {
    for (var o = arguments.length, s = new Array(o), f = 0; f < o; f++)
      s[f] = arguments[f];
    return Qb(r, s);
  };
}
function dt(r, o) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Om;
  if (C0 && C0(r, null), !Po(o))
    return r;
  let f = o.length;
  for (; f--; ) {
    let c = o[f];
    if (typeof c == "string") {
      const p = s(c);
      p !== c && (r3(o) || (o[f] = p), c = p);
    }
    r[c] = !0;
  }
  return r;
}
function m3(r) {
  for (let o = 0; o < r.length; o++)
    ra(r, o) || (r[o] = null);
  return r;
}
function Sl(r) {
  const o = _c(null);
  for (const f of _S(r)) {
    var s = a3(f, 2);
    const c = s[0], p = s[1];
    ra(r, c) && (Po(p) ? o[c] = m3(p) : p && typeof p == "object" && p.constructor === Object ? o[c] = Sl(p) : o[c] = p);
  }
  return o;
}
function h3(r) {
  switch (typeof r) {
    case "string":
      return r;
    case "number":
      return f3(r);
    case "boolean":
      return d3(r);
    case "bigint":
      return L0 ? L0(r) : "0";
    case "symbol":
      return j0 ? j0(r) : "Symbol()";
    case "undefined":
      return Em(r);
    case "function":
    case "object": {
      if (r === null)
        return Em(r);
      const o = r, s = Si(o, "toString");
      if (typeof s == "function") {
        const f = s(o);
        return typeof f == "string" ? f : Em(f);
      }
      return Em(r);
    }
    default:
      return Em(r);
  }
}
function Si(r, o) {
  for (; r !== null; ) {
    const f = o3(r, o);
    if (f) {
      if (f.get)
        return Rn(f.get);
      if (typeof f.value == "function")
        return Rn(f.value);
    }
    r = i3(r);
  }
  function s() {
    return null;
  }
  return s;
}
function g3(r) {
  try {
    return Va(r, ""), !0;
  } catch {
    return !1;
  }
}
const U0 = Ya(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), db = Ya(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pb = Ya(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), y3 = Ya(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), mb = Ya(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), b3 = Ya(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), H0 = Ya(["#text"]), B0 = Ya(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), hb = Ya(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), q0 = Ya(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Zm = Ya(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), v3 = Xa(/{{[\w\W]*|^[\w\W]*}}/g), S3 = Xa(/<%[\w\W]*|^[\w\W]*%>/g), w3 = Xa(/\${[\w\W]*/g), T3 = Xa(/^data-[\-\w.\u00B7-\uFFFF]+$/), k3 = Xa(/^aria-[\-\w]+$/), V0 = Xa(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), E3 = Xa(/^(?:\w+script|data):/i), x3 = Xa(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), _3 = Xa(/^html$/i), A3 = Xa(/^[a-z][.\w]*(-[.\w]+)+$/i), G0 = Xa(/<[/\w!]/g), z3 = Xa(/<[/\w]/g), N3 = Xa(/<\/no(script|embed|frames)/i), O3 = Xa(/\/>/i), bi = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, C3 = function() {
  return typeof window > "u" ? null : window;
}, R3 = function(o, s) {
  if (typeof o != "object" || typeof o.createPolicy != "function")
    return null;
  let f = null;
  const c = "data-tt-policy-suffix";
  s && s.hasAttribute(c) && (f = s.getAttribute(c));
  const p = "dompurify" + (f ? "#" + f : "");
  try {
    return o.createPolicy(p, {
      createHTML(g) {
        return g;
      },
      createScriptURL(g) {
        return g;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + p + " could not be created."), null;
  }
}, Y0 = function() {
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
}, Xo = function(o, s, f, c) {
  return ra(o, s) && Po(o[s]) ? dt(c.base ? Sl(c.base) : {}, o[s], c.transform) : f;
};
function zS() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : C3();
  const o = (v) => zS(v);
  if (o.version = "3.4.11", o.removed = [], !r || !r.document || r.document.nodeType !== bi.document || !r.Element)
    return o.isSupported = !1, o;
  let s = r.document;
  const f = s, c = f.currentScript;
  r.DocumentFragment;
  const p = r.HTMLTemplateElement, g = r.Node, T = r.Element, S = r.NodeFilter, k = r.NamedNodeMap;
  k === void 0 && (r.NamedNodeMap || r.MozNamedAttrMap), r.HTMLFormElement;
  const C = r.DOMParser, O = r.trustedTypes, R = T.prototype, $ = Si(R, "cloneNode"), j = Si(R, "remove"), V = Si(R, "nextSibling"), I = Si(R, "childNodes"), P = Si(R, "parentNode"), H = Si(R, "shadowRoot"), ce = Si(R, "attributes"), J = g && g.prototype ? Si(g.prototype, "nodeType") : null, ne = g && g.prototype ? Si(g.prototype, "nodeName") : null;
  if (typeof p == "function") {
    const v = s.createElement("template");
    v.content && v.content.ownerDocument && (s = v.content.ownerDocument);
  }
  let Y, F = "", ee, Ee = !1, He = 0;
  const qe = function() {
    if (He > 0)
      throw rc('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Be = function(y) {
    qe(), He++;
    try {
      return Y.createHTML(y);
    } finally {
      He--;
    }
  }, Ae = function(y) {
    qe(), He++;
    try {
      return Y.createScriptURL(y);
    } finally {
      He--;
    }
  }, yt = function() {
    return Ee || (ee = R3(O, c), Ee = !0), ee;
  }, Qe = s, U = Qe.implementation, L = Qe.createNodeIterator, G = Qe.createDocumentFragment, re = Qe.getElementsByTagName, se = f.importNode;
  let ie = Y0();
  o.isSupported = typeof _S == "function" && typeof P == "function" && U && U.createHTMLDocument !== void 0;
  const we = v3, ue = S3, Z = w3, ye = T3, bt = k3, tt = E3, fn = x3, dn = A3;
  let nt = V0, Re = null;
  const Qa = dt({}, [...U0, ...db, ...pb, ...mb, ...H0]);
  let De = null;
  const dr = dt({}, [...B0, ...hb, ...q0, ...Zm]);
  let ke = Object.seal(_c(null, {
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
  })), Dn = null, wl = null;
  const bn = Object.seal(_c(null, {
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
  let pr = !0, $a = !0, Tl = !1, kl = !0, vn = !1, Pa = !0, Ye = !1, mr = !1, El = null, xl = null, ia = !1, oa = !1, Ka = !1, _l = !1, ki = !0, ua = !1;
  const pt = "user-content-";
  let It = !0, rt = !1, sa = {}, Qt = null;
  const hr = dt({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let Za = null;
  const Wa = dt({}, ["audio", "video", "img", "source", "image", "track"]);
  let ca = null;
  const Sn = dt({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Mn = "http://www.w3.org/1998/Math/MathML", wn = "http://www.w3.org/2000/svg", $t = "http://www.w3.org/1999/xhtml";
  let Ln = $t, Ja = !1, jn = null;
  const Jo = dt({}, [Mn, wn, $t], fb), gr = Ya(["mi", "mo", "mn", "ms", "mtext"]);
  let Al = dt({}, gr);
  const yr = Ya(["annotation-xml"]);
  let el = dt({}, yr);
  const br = dt({}, ["title", "style", "font", "a", "script"]);
  let fa = null;
  const Ei = ["application/xhtml+xml", "text/html"], Tn = "text/html";
  let oe = null, Fe = null;
  const da = s.createElement("form"), zl = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, vr = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Fe && Fe === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = Sl(y), fa = // eslint-disable-next-line unicorn/prefer-includes
    Ei.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Tn : y.PARSER_MEDIA_TYPE, oe = fa === "application/xhtml+xml" ? fb : Om, Re = Xo(y, "ALLOWED_TAGS", Qa, {
      transform: oe
    }), De = Xo(y, "ALLOWED_ATTR", dr, {
      transform: oe
    }), jn = Xo(y, "ALLOWED_NAMESPACES", Jo, {
      transform: fb
    }), ca = Xo(y, "ADD_URI_SAFE_ATTR", Sn, {
      transform: oe,
      base: Sn
    }), Za = Xo(y, "ADD_DATA_URI_TAGS", Wa, {
      transform: oe,
      base: Wa
    }), Qt = Xo(y, "FORBID_CONTENTS", hr, {
      transform: oe
    }), Dn = Xo(y, "FORBID_TAGS", Sl({}), {
      transform: oe
    }), wl = Xo(y, "FORBID_ATTR", Sl({}), {
      transform: oe
    }), sa = ra(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? Sl(y.USE_PROFILES) : y.USE_PROFILES : !1, pr = y.ALLOW_ARIA_ATTR !== !1, $a = y.ALLOW_DATA_ATTR !== !1, Tl = y.ALLOW_UNKNOWN_PROTOCOLS || !1, kl = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, vn = y.SAFE_FOR_TEMPLATES || !1, Pa = y.SAFE_FOR_XML !== !1, Ye = y.WHOLE_DOCUMENT || !1, oa = y.RETURN_DOM || !1, Ka = y.RETURN_DOM_FRAGMENT || !1, _l = y.RETURN_TRUSTED_TYPE || !1, ia = y.FORCE_BODY || !1, ki = y.SANITIZE_DOM !== !1, ua = y.SANITIZE_NAMED_PROPS || !1, It = y.KEEP_CONTENT !== !1, rt = y.IN_PLACE || !1, nt = g3(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : V0, Ln = typeof y.NAMESPACE == "string" ? y.NAMESPACE : $t, Al = ra(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Sl(y.MATHML_TEXT_INTEGRATION_POINTS) : dt({}, gr), el = ra(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? Sl(y.HTML_INTEGRATION_POINTS) : dt({}, yr);
    const z = ra(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? Sl(y.CUSTOM_ELEMENT_HANDLING) : _c(null);
    if (ke = _c(null), ra(z, "tagNameCheck") && zl(z.tagNameCheck) && (ke.tagNameCheck = z.tagNameCheck), ra(z, "attributeNameCheck") && zl(z.attributeNameCheck) && (ke.attributeNameCheck = z.attributeNameCheck), ra(z, "allowCustomizedBuiltInElements") && typeof z.allowCustomizedBuiltInElements == "boolean" && (ke.allowCustomizedBuiltInElements = z.allowCustomizedBuiltInElements), Xa(ke), vn && ($a = !1), Ka && (oa = !0), sa && (Re = dt({}, H0), De = _c(null), sa.html === !0 && (dt(Re, U0), dt(De, B0)), sa.svg === !0 && (dt(Re, db), dt(De, hb), dt(De, Zm)), sa.svgFilters === !0 && (dt(Re, pb), dt(De, hb), dt(De, Zm)), sa.mathMl === !0 && (dt(Re, mb), dt(De, q0), dt(De, Zm))), bn.tagCheck = null, bn.attributeCheck = null, ra(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? bn.tagCheck = y.ADD_TAGS : Po(y.ADD_TAGS) && (Re === Qa && (Re = Sl(Re)), dt(Re, y.ADD_TAGS, oe))), ra(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? bn.attributeCheck = y.ADD_ATTR : Po(y.ADD_ATTR) && (De === dr && (De = Sl(De)), dt(De, y.ADD_ATTR, oe))), ra(y, "ADD_URI_SAFE_ATTR") && Po(y.ADD_URI_SAFE_ATTR) && dt(ca, y.ADD_URI_SAFE_ATTR, oe), ra(y, "FORBID_CONTENTS") && Po(y.FORBID_CONTENTS) && (Qt === hr && (Qt = Sl(Qt)), dt(Qt, y.FORBID_CONTENTS, oe)), ra(y, "ADD_FORBID_CONTENTS") && Po(y.ADD_FORBID_CONTENTS) && (Qt === hr && (Qt = Sl(Qt)), dt(Qt, y.ADD_FORBID_CONTENTS, oe)), It && (Re["#text"] = !0), Ye && dt(Re, ["html", "head", "body"]), Re.table && (dt(Re, ["tbody"]), delete Dn.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw rc('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw rc('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = Y;
      Y = y.TRUSTED_TYPES_POLICY;
      try {
        F = Be("");
      } catch (K) {
        throw Y = q, K;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (Y = void 0, F = "") : (Y === void 0 && (Y = yt()), Y && typeof F == "string" && (F = Be("")));
    Ya && Ya(y), Fe = y;
  }, xi = dt({}, [...db, ...pb, ...y3]), Sr = dt({}, [...mb, ...b3]), tl = function(y, z, q) {
    return z.namespaceURI === $t ? y === "svg" : z.namespaceURI === Mn ? y === "svg" && (q === "annotation-xml" || Al[q]) : !!xi[y];
  }, wr = function(y, z, q) {
    return z.namespaceURI === $t ? y === "math" : z.namespaceURI === wn ? y === "math" && el[q] : !!Sr[y];
  }, pa = function(y, z, q) {
    return z.namespaceURI === wn && !el[q] || z.namespaceURI === Mn && !Al[q] ? !1 : !Sr[y] && (br[y] || !xi[y]);
  }, ma = function(y) {
    let z = P(y);
    (!z || !z.tagName) && (z = {
      namespaceURI: Ln,
      tagName: "template"
    });
    const q = Om(y.tagName), K = Om(z.tagName);
    return jn[y.namespaceURI] ? y.namespaceURI === wn ? tl(q, z, K) : y.namespaceURI === Mn ? wr(q, z, K) : y.namespaceURI === $t ? pa(q, z, K) : !!(fa === "application/xhtml+xml" && jn[y.namespaceURI]) : !1;
  }, Dt = function(y) {
    kc(o.removed, {
      element: y
    });
    try {
      P(y).removeChild(y);
    } catch {
      if (j(y), !P(y))
        throw rc("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Un = function(y) {
    const z = I(y);
    if (z) {
      const K = [];
      Tm(z, (he) => {
        kc(K, he);
      }), Tm(K, (he) => {
        try {
          j(he);
        } catch {
        }
      });
    }
    const q = ce(y);
    if (q)
      for (let K = q.length - 1; K >= 0; --K) {
        const he = q[K], be = he && he.name;
        if (typeof be == "string")
          try {
            y.removeAttribute(be);
          } catch {
          }
      }
  }, Me = function(y, z) {
    try {
      kc(o.removed, {
        attribute: z.getAttributeNode(y),
        from: z
      });
    } catch {
      kc(o.removed, {
        attribute: null,
        from: z
      });
    }
    if (z.removeAttribute(y), y === "is")
      if (oa || Ka)
        try {
          Dt(z);
        } catch {
        }
      else
        try {
          z.setAttribute(y, "");
        } catch {
        }
  }, _i = function(y) {
    const z = ce(y);
    if (z)
      for (let q = z.length - 1; q >= 0; --q) {
        const K = z[q], he = K && K.name;
        if (!(typeof he != "string" || De[oe(he)]))
          try {
            y.removeAttribute(he);
          } catch {
          }
      }
  }, Ai = function(y) {
    const z = [y];
    for (; z.length > 0; ) {
      const q = z.pop();
      (J ? J(q) : q.nodeType) === bi.element && _i(q);
      const he = I(q);
      if (he)
        for (let be = he.length - 1; be >= 0; --be)
          z.push(he[be]);
    }
  }, kn = function(y) {
    let z = null, q = null;
    if (ia)
      y = "<remove></remove>" + y;
    else {
      const be = D0(y, /^[\r\n\t ]+/);
      q = be && be[0];
    }
    fa === "application/xhtml+xml" && Ln === $t && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const K = Y ? Be(y) : y;
    if (Ln === $t)
      try {
        z = new C().parseFromString(K, fa);
      } catch {
      }
    if (!z || !z.documentElement) {
      z = U.createDocument(Ln, "template", null);
      try {
        z.documentElement.innerHTML = Ja ? F : K;
      } catch {
      }
    }
    const he = z.body || z.documentElement;
    return y && q && he.insertBefore(s.createTextNode(q), he.childNodes[0] || null), Ln === $t ? re.call(z, Ye ? "html" : "body")[0] : Ye ? z.documentElement : he;
  }, Hn = function(y) {
    return L.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      S.SHOW_ELEMENT | S.SHOW_COMMENT | S.SHOW_TEXT | S.SHOW_PROCESSING_INSTRUCTION | S.SHOW_CDATA_SECTION,
      null
    );
  }, Nl = function(y) {
    return y = km(y, we, " "), y = km(y, ue, " "), y = km(y, Z, " "), y;
  }, Ol = function(y) {
    var z;
    y.normalize();
    const q = L.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      S.SHOW_TEXT | S.SHOW_COMMENT | S.SHOW_CDATA_SECTION | S.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let K = q.nextNode();
    for (; K; )
      K.data = Nl(K.data), K = q.nextNode();
    const he = (z = y.querySelectorAll) === null || z === void 0 ? void 0 : z.call(y, "template");
    he && Tm(he, (be) => {
      ha(be.content) && Ol(be.content);
    });
  }, nl = function(y) {
    const z = ne ? ne(y) : null;
    return typeof z != "string" || oe(z) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== ce(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== J(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    y.childNodes !== I(y);
  }, ha = function(y) {
    if (!J || typeof y != "object" || y === null)
      return !1;
    try {
      return J(y) === bi.documentFragment;
    } catch {
      return !1;
    }
  }, En = function(y) {
    if (!J || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof J(y) == "number";
    } catch {
      return !1;
    }
  };
  function Et(v, y, z) {
    v.length !== 0 && Tm(v, (q) => {
      q.call(o, y, z, Fe);
    });
  }
  const pn = function(y, z) {
    return !!(Pa && y.hasChildNodes() && !En(y.firstElementChild) && Va(G0, y.textContent) && Va(G0, y.innerHTML) || Pa && y.namespaceURI === $t && z === "style" && En(y.firstElementChild) || y.nodeType === bi.processingInstruction || Pa && y.nodeType === bi.comment && Va(z3, y.data));
  }, xt = function(y, z) {
    if (!Dn[z] && Er(z) && (ke.tagNameCheck instanceof RegExp && Va(ke.tagNameCheck, z) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(z)))
      return !1;
    if (It && !Qt[z]) {
      const q = P(y), K = I(y);
      if (K && q) {
        const he = K.length;
        for (let be = he - 1; be >= 0; --be) {
          const mt = rt ? K[be] : $(K[be], !0);
          q.insertBefore(mt, V(y));
        }
      }
    }
    return Dt(y), !0;
  }, Tr = function(y) {
    if (Et(ie.beforeSanitizeElements, y, null), nl(y))
      return Dt(y), !0;
    const z = oe(ne ? ne(y) : y.nodeName);
    if (Et(ie.uponSanitizeElement, y, {
      tagName: z,
      allowedTags: Re
    }), pn(y, z))
      return Dt(y), !0;
    if (Dn[z] || !(bn.tagCheck instanceof Function && bn.tagCheck(z)) && !Re[z])
      return xt(y, z);
    if ((J ? J(y) : y.nodeType) === bi.element && !ma(y) || (z === "noscript" || z === "noembed" || z === "noframes") && Va(N3, y.innerHTML))
      return Dt(y), !0;
    if (vn && y.nodeType === bi.text) {
      const K = Nl(y.textContent);
      y.textContent !== K && (kc(o.removed, {
        element: y.cloneNode()
      }), y.textContent = K);
    }
    return Et(ie.afterSanitizeElements, y, null), !1;
  }, zi = function(y, z, q) {
    if (wl[z] || ki && (z === "id" || z === "name") && (q in s || q in da))
      return !1;
    const K = De[z] || bn.attributeCheck instanceof Function && bn.attributeCheck(z, y);
    if (!($a && Va(ye, z))) {
      if (!(pr && Va(bt, z))) {
        if (K) {
          if (!ca[z]) {
            if (!Va(nt, km(q, fn, ""))) {
              if (!((z === "src" || z === "xlink:href" || z === "href") && y !== "script" && M0(q, "data:") === 0 && Za[y])) {
                if (!(Tl && !Va(tt, km(q, fn, "")))) {
                  if (q)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Er(y) && (ke.tagNameCheck instanceof RegExp && Va(ke.tagNameCheck, y) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(y)) && (ke.attributeNameCheck instanceof RegExp && Va(ke.attributeNameCheck, z) || ke.attributeNameCheck instanceof Function && ke.attributeNameCheck(z, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          z === "is" && ke.allowCustomizedBuiltInElements && (ke.tagNameCheck instanceof RegExp && Va(ke.tagNameCheck, q) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(q)))
        ) return !1;
      }
    }
    return !0;
  }, kr = dt({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Er = function(y) {
    return !kr[Om(y)] && Va(dn, y);
  }, Cl = function(y, z, q, K) {
    if (Y && typeof O == "object" && typeof O.getAttributeType == "function" && !q)
      switch (O.getAttributeType(y, z)) {
        case "TrustedHTML":
          return Be(K);
        case "TrustedScriptURL":
          return Ae(K);
      }
    return K;
  }, eu = function(y, z, q, K) {
    try {
      q ? y.setAttributeNS(q, z, K) : y.setAttribute(z, K), nl(y) ? Dt(y) : R0(o.removed);
    } catch {
      Me(z, y);
    }
  }, kt = function(y) {
    Et(ie.beforeSanitizeAttributes, y, null);
    const z = y.attributes;
    if (!z || nl(y))
      return;
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: De,
      forceKeepAttr: void 0
    };
    let K = z.length;
    const he = oe(y.nodeName);
    for (; K--; ) {
      const be = z[K], mt = be.name, at = be.namespaceURI, vt = be.value, on = oe(mt), _t = vt;
      let it = mt === "value" ? _t : c3(_t);
      if (q.attrName = on, q.attrValue = it, q.keepAttr = !0, q.forceKeepAttr = void 0, Et(ie.uponSanitizeAttribute, y, q), it = q.attrValue, ua && (on === "id" || on === "name") && M0(it, pt) !== 0 && (Me(mt, y), it = pt + it), Pa && Va(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, it)) {
        Me(mt, y);
        continue;
      }
      if (on === "attributename" && D0(it, "href")) {
        Me(mt, y);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          Me(mt, y);
          continue;
        }
        if (!kl && Va(O3, it)) {
          Me(mt, y);
          continue;
        }
        if (vn && (it = Nl(it)), !zi(he, on, it)) {
          Me(mt, y);
          continue;
        }
        it = Cl(he, on, at, it), it !== _t && eu(y, mt, at, it);
      }
    }
    Et(ie.afterSanitizeAttributes, y, null);
  }, ga = function(y) {
    let z = null;
    const q = Hn(y);
    for (Et(ie.beforeSanitizeShadowDOM, y, null); z = q.nextNode(); )
      if (Et(ie.uponSanitizeShadowNode, z, null), Tr(z), kt(z), ha(z.content) && ga(z.content), (J ? J(z) : z.nodeType) === bi.element) {
        const he = H(z);
        ha(he) && (Rl(he), ga(he));
      }
    Et(ie.afterSanitizeShadowDOM, y, null);
  }, Rl = function(y) {
    const z = [{
      node: y,
      shadow: null
    }];
    for (; z.length > 0; ) {
      const q = z.pop();
      if (q.shadow) {
        ga(q.shadow);
        continue;
      }
      const K = q.node, be = (J ? J(K) : K.nodeType) === bi.element, mt = I(K);
      if (mt)
        for (let at = mt.length - 1; at >= 0; --at)
          z.push({
            node: mt[at],
            shadow: null
          });
      if (be) {
        const at = ne ? ne(K) : null;
        if (typeof at == "string" && oe(at) === "template") {
          const vt = K.content;
          ha(vt) && z.push({
            node: vt,
            shadow: null
          });
        }
      }
      if (be) {
        const at = H(K);
        ha(at) && z.push({
          node: null,
          shadow: at
        }, {
          node: at,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(v) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, q = null, K = null, he = null;
    if (Ja = !v, Ja && (v = "<!-->"), typeof v != "string" && !En(v) && (v = h3(v), typeof v != "string"))
      throw rc("dirty is not a string, aborting");
    if (!o.isSupported)
      return v;
    mr ? (Re = El, De = xl) : vr(y), (ie.uponSanitizeElement.length > 0 || ie.uponSanitizeAttribute.length > 0) && (Re = Sl(Re)), ie.uponSanitizeAttribute.length > 0 && (De = Sl(De)), o.removed = [];
    const be = rt && typeof v != "string" && En(v);
    if (be) {
      const vt = ne ? ne(v) : v.nodeName;
      if (typeof vt == "string") {
        const on = oe(vt);
        if (!Re[on] || Dn[on])
          throw rc("root node is forbidden and cannot be sanitized in-place");
      }
      if (nl(v))
        throw rc("root node is clobbered and cannot be sanitized in-place");
      try {
        Rl(v);
      } catch (on) {
        throw Un(v), on;
      }
    } else if (En(v))
      z = kn("<!---->"), q = z.ownerDocument.importNode(v, !0), q.nodeType === bi.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? z = q : z.appendChild(q), Rl(q);
    else {
      if (!oa && !vn && !Ye && // eslint-disable-next-line unicorn/prefer-includes
      v.indexOf("<") === -1)
        return Y && _l ? Be(v) : v;
      if (z = kn(v), !z)
        return oa ? null : _l ? F : "";
    }
    z && ia && Dt(z.firstChild);
    const mt = Hn(be ? v : z);
    try {
      for (; K = mt.nextNode(); )
        Tr(K), kt(K), ha(K.content) && ga(K.content);
    } catch (vt) {
      throw be && Un(v), vt;
    }
    if (be)
      return Tm(o.removed, (vt) => {
        vt.element && Ai(vt.element);
      }), vn && Ol(v), v;
    if (oa) {
      if (vn && Ol(z), Ka)
        for (he = G.call(z.ownerDocument); z.firstChild; )
          he.appendChild(z.firstChild);
      else
        he = z;
      return (De.shadowroot || De.shadowrootmode) && (he = se.call(f, he, !0)), he;
    }
    let at = Ye ? z.outerHTML : z.innerHTML;
    return Ye && Re["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && Va(_3, z.ownerDocument.doctype.name) && (at = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + at), vn && (at = Nl(at)), Y && _l ? Be(at) : at;
  }, o.setConfig = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    vr(v), mr = !0, El = Re, xl = De;
  }, o.clearConfig = function() {
    Fe = null, mr = !1, El = null, xl = null, Y = ee, F = "";
  }, o.isValidAttribute = function(v, y, z) {
    Fe || vr({});
    const q = oe(v), K = oe(y);
    return zi(q, K, z);
  }, o.addHook = function(v, y) {
    typeof y == "function" && ra(ie, v) && kc(ie[v], y);
  }, o.removeHook = function(v, y) {
    if (ra(ie, v)) {
      if (y !== void 0) {
        const z = u3(ie[v], y);
        return z === -1 ? void 0 : s3(ie[v], z, 1)[0];
      }
      return R0(ie[v]);
    }
  }, o.removeHooks = function(v) {
    ra(ie, v) && (ie[v] = []);
  }, o.removeAllHooks = function() {
    ie = Y0();
  }, o;
}
zS();
var gb = { exports: {} }, yb, F0;
function D3() {
  if (F0) return yb;
  F0 = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yb = r, yb;
}
var bb, X0;
function M3() {
  if (X0) return bb;
  X0 = 1;
  var r = /* @__PURE__ */ D3();
  function o() {
  }
  function s() {
  }
  return s.resetWarningCache = o, bb = function() {
    function f(g, T, S, k, C, O) {
      if (O !== r) {
        var R = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw R.name = "Invariant Violation", R;
      }
    }
    f.isRequired = f;
    function c() {
      return f;
    }
    var p = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: c,
      element: f,
      elementType: f,
      instanceOf: c,
      node: f,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: s,
      resetWarningCache: o
    };
    return p.PropTypes = p, p;
  }, bb;
}
var I0;
function L3() {
  return I0 || (I0 = 1, gb.exports = /* @__PURE__ */ M3()()), gb.exports;
}
var j3 = /* @__PURE__ */ L3();
const ta = /* @__PURE__ */ uw(j3);
ta.shape({
  event: ta.string,
  action: ta.string,
  name: ta.string,
  region: ta.string,
  section: ta.string,
  component: ta.string,
  type: ta.string,
  text: ta.string
});
const Gm = ({ children: r }) => /* @__PURE__ */ yn.jsx(yn.Fragment, { children: r });
Gm.propTypes = {
  children: ta.oneOfType([
    ta.arrayOf(ta.node),
    ta.node,
    ta.string
  ])
};
var vb = { exports: {} };
var Q0;
function U3() {
  return Q0 || (Q0 = 1, (function(r) {
    (function() {
      var o = {}.hasOwnProperty;
      function s() {
        for (var p = "", g = 0; g < arguments.length; g++) {
          var T = arguments[g];
          T && (p = c(p, f(T)));
        }
        return p;
      }
      function f(p) {
        if (typeof p == "string" || typeof p == "number")
          return p;
        if (typeof p != "object")
          return "";
        if (Array.isArray(p))
          return s.apply(null, p);
        if (p.toString !== Object.prototype.toString && !p.toString.toString().includes("[native code]"))
          return p.toString();
        var g = "";
        for (var T in p)
          o.call(p, T) && p[T] && (g = c(g, T));
        return g;
      }
      function c(p, g) {
        return g ? p ? p + " " + g : p + g : p;
      }
      r.exports ? (s.default = s, r.exports = s) : window.classNames = s;
    })();
  })(vb)), vb.exports;
}
U3();
({
  ...Gm.propTypes
});
const NS = ({ children: r, className: o = "container", ...s }) => /* @__PURE__ */ yn.jsx("div", { className: o, ...s, children: /* @__PURE__ */ yn.jsx("div", { className: "row", children: r }) });
NS.propTypes = {
  children: Gm.propTypes.children
};
({
  ...NS.propTypes
});
Gm.propTypes.children, ta.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Gm.propTypes.children;
function pv({
  packageName: r = "",
  component: o = "",
  type: s = "",
  configuration: f = {}
}) {
  if (!r || !o) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[r] = {
    component: o,
    type: s,
    configuration: f
  };
}
const Hm = {
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
}, $0 = ["newsUnits", "interests", "audiences", "eventTypes"], H3 = (r, o = "") => {
  if (!o) return !0;
  const s = o.split(",");
  for (let f = 0; f < $0.length; f += 1) {
    const c = $0[f];
    for (let p = 0; p < s.length; p += 1) {
      const g = s[p], S = (r[c] || "").match(new RegExp(g, "gi"));
      if ((S == null ? void 0 : S.length) > 0) return !0;
    }
  }
  return !1;
}, P0 = (r, o) => {
  let s = r;
  return s.length > o && (s = s.substr(0, s.lastIndexOf(" ", o)), s += "..."), s;
}, B3 = ({ node: r }, o) => ({
  index: o,
  id: r.nid,
  imageUrl: r.image_url,
  imageAltText: r.image_alt,
  title: P0(r.title, 80),
  content: P0(r == null ? void 0 : r.clas_teaser, 140),
  buttonLink: r.path,
  interests: r.interests,
  newsUnits: r.news_units,
  eventTypes: r.event_types,
  alias: r.path
  // Used for card link in title, matches component-events data transformer
}), Sc = ({
  children: r,
  header: o,
  ctaButton: s,
  dataSource: f,
  maxItems: c
}) => {
  var T;
  const p = (T = f == null ? void 0 : f.filters) == null ? void 0 : T.replace(/_/g, " "), g = { ...f, filters: p };
  return /* @__PURE__ */ yn.jsx(
    sS,
    {
      renderHeader: o && s ? /* @__PURE__ */ yn.jsx(
        dS,
        {
          header: o,
          ctaButton: s,
          defaultProps: Hm
        }
      ) : null,
      renderBody: /* @__PURE__ */ yn.jsx(pS, { children: r }),
      dataTransformer: B3,
      dataFilter: H3,
      dataSource: g,
      defaultProps: Hm,
      noFeedText: "No news to show.",
      maxItems: c
    }
  );
};
Sc.propTypes = {
  header: cv,
  ctaButton: fv,
  dataSource: fS,
  maxItems: ta.number,
  children: ta.element
};
function q3(r) {
  var o = /* @__PURE__ */ Object.create(null);
  return function(s) {
    return o[s] === void 0 && (o[s] = r(s)), o[s];
  };
}
var V3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, G3 = /* @__PURE__ */ q3(
  function(r) {
    return V3.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), an = "-ms-", Lm = "-moz-", Tt = "-webkit-", OS = "comm", Mh = "rule", mv = "decl", Y3 = "@import", F3 = "@namespace", CS = "@keyframes", X3 = "@layer", RS = Math.abs, hv = String.fromCharCode, $b = Object.assign;
function I3(r, o) {
  return aa(r, 0) ^ 45 ? (((o << 2 ^ aa(r, 0)) << 2 ^ aa(r, 1)) << 2 ^ aa(r, 2)) << 2 ^ aa(r, 3) : 0;
}
function DS(r) {
  return r.trim();
}
function Bo(r, o) {
  return (r = o.exec(r)) ? r[0] : r;
}
function Je(r, o, s) {
  return r.replace(o, s);
}
function ch(r, o, s) {
  return r.indexOf(o, s);
}
function aa(r, o) {
  return r.charCodeAt(o) | 0;
}
function hc(r, o, s) {
  return r.slice(o, s);
}
function pi(r) {
  return r.length;
}
function MS(r) {
  return r.length;
}
function Cm(r, o) {
  return o.push(r), r;
}
function Q3(r, o) {
  return r.map(o).join("");
}
function K0(r, o) {
  return r.filter(function(s) {
    return !Bo(s, o);
  });
}
var Lh = 1, Rc = 1, LS = 0, fr = 0, On = 0, Lc = "";
function jh(r, o, s, f, c, p, g, T) {
  return { value: r, root: o, parent: s, type: f, props: c, children: p, line: Lh, column: Rc, length: g, return: "", siblings: T };
}
function Qo(r, o) {
  return $b(jh("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, o);
}
function Ec(r) {
  for (; r.root; )
    r = Qo(r.root, { children: [r] });
  Cm(r, r.siblings);
}
function $3() {
  return On;
}
function P3() {
  return On = fr > 0 ? aa(Lc, --fr) : 0, Rc--, On === 10 && (Rc = 1, Lh--), On;
}
function hi() {
  return On = fr < LS ? aa(Lc, fr++) : 0, Rc++, On === 10 && (Rc = 1, Lh++), On;
}
function Zo() {
  return aa(Lc, fr);
}
function fh() {
  return fr;
}
function Uh(r, o) {
  return hc(Lc, r, o);
}
function Bm(r) {
  switch (r) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function K3(r) {
  return Lh = Rc = 1, LS = pi(Lc = r), fr = 0, [];
}
function Z3(r) {
  return Lc = "", r;
}
function Sb(r) {
  return DS(Uh(fr - 1, Pb(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function W3(r) {
  for (; (On = Zo()) && On < 33; )
    hi();
  return Bm(r) > 2 || Bm(On) > 3 ? "" : " ";
}
function J3(r, o) {
  for (; --o && hi() && !(On < 48 || On > 102 || On > 57 && On < 65 || On > 70 && On < 97); )
    ;
  return Uh(r, fh() + (o < 6 && Zo() == 32 && hi() == 32));
}
function Pb(r) {
  for (; hi(); )
    switch (On) {
      // ] ) " '
      case r:
        return fr;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && Pb(On);
        break;
      // (
      case 40:
        r === 41 && Pb(r);
        break;
      // \
      case 92:
        hi();
        break;
    }
  return fr;
}
function e_(r, o) {
  for (; hi() && r + On !== 57; )
    if (r + On === 84 && Zo() === 47)
      break;
  return "/*" + Uh(o, fr - 1) + "*" + hv(r === 47 ? r : hi());
}
function t_(r) {
  for (; !Bm(Zo()); )
    hi();
  return Uh(r, fr);
}
function n_(r) {
  return Z3(dh("", null, null, null, [""], r = K3(r), 0, [0], r));
}
function dh(r, o, s, f, c, p, g, T, S) {
  for (var k = 0, C = 0, O = g, R = 0, $ = 0, j = 0, V = 1, I = 1, P = 1, H = 0, ce = "", J = c, ne = p, Y = f, F = ce; I; )
    switch (j = H, H = hi()) {
      // (
      case 40:
        if (j != 108 && aa(F, O - 1) == 58) {
          ch(F += Je(Sb(H), "&", "&\f"), "&\f", RS(k ? T[k - 1] : 0)) != -1 && (P = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        F += Sb(H);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        F += W3(j);
        break;
      // \
      case 92:
        F += J3(fh() - 1, 7);
        continue;
      // /
      case 47:
        switch (Zo()) {
          case 42:
          case 47:
            Cm(a_(e_(hi(), fh()), o, s, S), S), (Bm(j || 1) == 5 || Bm(Zo() || 1) == 5) && pi(F) && hc(F, -1, void 0) !== " " && (F += " ");
            break;
          default:
            F += "/";
        }
        break;
      // {
      case 123 * V:
        T[k++] = pi(F) * P;
      // } ; \0
      case 125 * V:
      case 59:
      case 0:
        switch (H) {
          // \0 }
          case 0:
          case 125:
            I = 0;
          // ;
          case 59 + C:
            P == -1 && (F = Je(F, /\f/g, "")), $ > 0 && (pi(F) - O || V === 0 && j === 47) && Cm($ > 32 ? W0(F + ";", f, s, O - 1, S) : W0(Je(F, " ", "") + ";", f, s, O - 2, S), S);
            break;
          // @ ;
          case 59:
            F += ";";
          // { rule/at-rule
          default:
            if (Cm(Y = Z0(F, o, s, k, C, c, T, ce, J = [], ne = [], O, p), p), H === 123)
              if (C === 0)
                dh(F, o, Y, Y, J, p, O, T, ne);
              else {
                switch (R) {
                  // c(ontainer)
                  case 99:
                    if (aa(F, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (aa(F, 2) === 97) break;
                  default:
                    C = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                C ? dh(r, Y, Y, f && Cm(Z0(r, Y, Y, 0, 0, c, T, ce, c, J = [], O, ne), ne), c, ne, O, T, f ? J : ne) : dh(F, Y, Y, Y, [""], ne, 0, T, ne);
              }
        }
        k = C = $ = 0, V = P = 1, ce = F = "", O = g;
        break;
      // :
      case 58:
        O = 1 + pi(F), $ = j;
      default:
        if (V < 1) {
          if (H == 123)
            --V;
          else if (H == 125 && V++ == 0 && P3() == 125)
            continue;
        }
        switch (F += hv(H), H * V) {
          // &
          case 38:
            P = C > 0 ? 1 : (F += "\f", -1);
            break;
          // ,
          case 44:
            T[k++] = (pi(F) - 1) * P, P = 1;
            break;
          // @
          case 64:
            Zo() === 45 && (F += Sb(hi())), R = Zo(), C = O = pi(ce = F += t_(fh())), H++;
            break;
          // -
          case 45:
            j === 45 && pi(F) == 2 && (V = 0);
        }
    }
  return p;
}
function Z0(r, o, s, f, c, p, g, T, S, k, C, O) {
  for (var R = c - 1, $ = c === 0 ? p : [""], j = MS($), V = 0, I = 0, P = 0; V < f; ++V)
    for (var H = 0, ce = hc(r, R + 1, R = RS(I = g[V])), J = r; H < j; ++H)
      (J = DS(I > 0 ? $[H] + " " + ce : Je(ce, /&\f/g, $[H]))) && (S[P++] = J);
  return jh(r, o, s, c === 0 ? Mh : T, S, k, C, O);
}
function a_(r, o, s, f) {
  return jh(r, o, s, OS, hv($3()), hc(r, 2, -2), 0, f);
}
function W0(r, o, s, f, c) {
  return jh(r, o, s, mv, hc(r, 0, f), hc(r, f + 1, -1), f, c);
}
function jS(r, o, s) {
  switch (I3(r, o)) {
    // color-adjust
    case 5103:
      return Tt + "print-" + r + r;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return Tt + r + r;
    // mask-composite
    case 4855:
      return Tt + r.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + r;
    // tab-size
    case 4789:
      return Lm + r + r;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Tt + r + Lm + r + an + r + r;
    // writing-mode
    case 5936:
      switch (aa(r, o + 11)) {
        // vertical-l(r)
        case 114:
          return Tt + r + an + Je(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        // vertical-r(l)
        case 108:
          return Tt + r + an + Je(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        // horizontal(-)tb
        case 45:
          return Tt + r + an + Je(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Tt + r + an + r + r;
    // order
    case 6165:
      return Tt + r + an + "flex-" + r + r;
    // align-items
    case 5187:
      return Tt + r + Je(r, /(\w+).+(:[^]+)/, Tt + "box-$1$2" + an + "flex-$1$2") + r;
    // align-self
    case 5443:
      return Tt + r + an + "flex-item-" + Je(r, /flex-|-self/g, "") + (Bo(r, /flex-|baseline/) ? "" : an + "grid-row-" + Je(r, /flex-|-self/g, "")) + r;
    // align-content
    case 4675:
      return Tt + r + an + "flex-line-pack" + Je(r, /align-content|flex-|-self/g, "") + r;
    // flex-shrink
    case 5548:
      return Tt + r + an + Je(r, "shrink", "negative") + r;
    // flex-basis
    case 5292:
      return Tt + r + an + Je(r, "basis", "preferred-size") + r;
    // flex-grow
    case 6060:
      return Tt + "box-" + Je(r, "-grow", "") + Tt + r + an + Je(r, "grow", "positive") + r;
    // transition
    case 4554:
      return Tt + Je(r, /([^-])(transform)/g, "$1" + Tt + "$2") + r;
    // cursor
    case 6187:
      return Je(Je(Je(r, /(zoom-|grab)/, Tt + "$1"), /(image-set)/, Tt + "$1"), r, "") + r;
    // background, background-image
    case 5495:
    case 3959:
      return Je(r, /(image-set\([^]*)/, Tt + "$1$`$1");
    // justify-content
    case 4968:
      return Je(Je(r, /(.+:)(flex-)?(.*)/, Tt + "box-pack:$3" + an + "flex-pack:$3"), /space-between/, "justify") + Tt + r + r;
    // justify-self
    case 4200:
      if (!Bo(r, /flex-|baseline/)) return an + "grid-column-align" + hc(r, o) + r;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return an + Je(r, "template-", "") + r;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return s && s.some(function(f, c) {
        return o = c, Bo(f.props, /grid-\w+-end/);
      }) ? ~ch(r + (s = s[o].value), "span", 0) ? r : an + Je(r, "-start", "") + r + an + "grid-row-span:" + (~ch(s, "span", 0) ? Bo(s, /\d+/) : +Bo(s, /\d+/) - +Bo(r, /\d+/)) + ";" : an + Je(r, "-start", "") + r;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return s && s.some(function(f) {
        return Bo(f.props, /grid-\w+-start/);
      }) ? r : an + Je(Je(r, "-end", "-span"), "span ", "") + r;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Je(r, /(.+)-inline(.+)/, Tt + "$1$2") + r;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (pi(r) - 1 - o > 6)
        switch (aa(r, o + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (aa(r, o + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return Je(r, /(.+:)(.+)-([^]+)/, "$1" + Tt + "$2-$3$1" + Lm + (aa(r, o + 3) == 108 ? "$3" : "$2-$3")) + r;
          // (s)tretch
          case 115:
            return ~ch(r, "stretch", 0) ? jS(Je(r, "stretch", "fill-available"), o, s) + r : r;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return Je(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(f, c, p, g, T, S, k) {
        return an + c + ":" + p + k + (g ? an + c + "-span:" + (T ? S : +S - +p) + k : "") + r;
      });
    // position: sticky
    case 4949:
      if (aa(r, o + 6) === 121)
        return Je(r, ":", ":" + Tt) + r;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (aa(r, aa(r, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return Je(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Tt + (aa(r, 14) === 45 ? "inline-" : "") + "box$3$1" + Tt + "$2$3$1" + an + "$2box$3") + r;
        // (inline-)?gri(d)
        case 100:
          return Je(r, ":", ":" + an) + r;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Je(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function wh(r, o) {
  for (var s = "", f = 0; f < r.length; f++)
    s += o(r[f], f, r, o) || "";
  return s;
}
function l_(r, o, s, f) {
  switch (r.type) {
    case X3:
      if (r.children.length) break;
    case Y3:
    case F3:
    case mv:
      return r.return = r.return || r.value;
    case OS:
      return "";
    case CS:
      return r.return = r.value + "{" + wh(r.children, f) + "}";
    case Mh:
      if (!pi(r.value = r.props.join(","))) return "";
  }
  return pi(s = wh(r.children, f)) ? r.return = r.value + "{" + s + "}" : "";
}
function r_(r) {
  var o = MS(r);
  return function(s, f, c, p) {
    for (var g = "", T = 0; T < o; T++)
      g += r[T](s, f, c, p) || "";
    return g;
  };
}
function i_(r) {
  return function(o) {
    o.root || (o = o.return) && r(o);
  };
}
function o_(r, o, s, f) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case mv:
        r.return = jS(r.value, r.length, s);
        return;
      case CS:
        return wh([Qo(r, { value: Je(r.value, "@", "@" + Tt) })], f);
      case Mh:
        if (r.length)
          return Q3(s = r.props, function(c) {
            switch (Bo(c, f = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ec(Qo(r, { props: [Je(c, /:(read-\w+)/, ":" + Lm + "$1")] })), Ec(Qo(r, { props: [c] })), $b(r, { props: K0(s, f) });
                break;
              // :placeholder
              case "::placeholder":
                Ec(Qo(r, { props: [Je(c, /:(plac\w+)/, ":" + Tt + "input-$1")] })), Ec(Qo(r, { props: [Je(c, /:(plac\w+)/, ":" + Lm + "$1")] })), Ec(Qo(r, { props: [Je(c, /:(plac\w+)/, an + "input-$1")] })), Ec(Qo(r, { props: [c] })), $b(r, { props: K0(s, f) });
                break;
            }
            return "";
          });
    }
}
var Lt = { env: { NODE_ENV: "production" } }, wb, Tb;
const gc = typeof Lt < "u" && Lt.env !== void 0 && (Lt.env.REACT_APP_SC_ATTR || Lt.env.SC_ATTR) || "data-styled", US = "active", HS = "data-styled-version", Hh = "6.4.2", gv = `/*!sc*/
`, jm = typeof window < "u" && typeof document < "u";
function J0(r) {
  if (typeof Lt < "u" && Lt.env !== void 0) {
    const o = Lt.env[r];
    if (o !== void 0 && o !== "") return o !== "false";
  }
}
const u_ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (Tb = (wb = J0("REACT_APP_SC_DISABLE_SPEEDY")) !== null && wb !== void 0 ? wb : J0("SC_DISABLE_SPEEDY")) !== null && Tb !== void 0 ? Tb : typeof Lt < "u" && Lt.env !== void 0 && Lt.env.NODE_ENV !== "production"), s_ = "sc-keyframes-", c_ = Lt.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?

`, 18: `Accessing \`useTheme\` hook outside of a \`<ThemeProvider>\` element.

\`\`\`jsx
import { useTheme } from 'styled-components';
export function StyledCompoent({ children }) {
  const theme = useTheme();
  return <div style={{ width: theme.sizes.full }}>{children}</div>;
}

import { StyledComponent } from './StyledComponent';
import { theme } from './theme';
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledComponent />
    </ThemeProvider>
  );
}
\`\`\`

If you need access to the theme in an uncertain composition scenario, \`React.useContext(ThemeContext)\` will not emit an error if there is no \`ThemeProvider\` ancestor.
` } : {};
function Ym(r, ...o) {
  return Lt.env.NODE_ENV === "production" ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${r} for more information.${o.length > 0 ? ` Args: ${o.join(", ")}` : ""}`) : new Error((function(...s) {
    let f = s[0];
    const c = [];
    for (let p = 1, g = s.length; p < g; p += 1) c.push(s[p]);
    return c.forEach((p) => {
      f = f.replace(/%[a-z]/, p);
    }), f;
  })(c_[r], ...o).trim());
}
const f_ = 1 << 30;
let ph = /* @__PURE__ */ new Map(), Th = /* @__PURE__ */ new Map(), mh = 1;
const Wm = (r) => {
  if (ph.has(r)) return ph.get(r);
  for (; Th.has(mh); ) mh++;
  const o = mh++;
  if (Lt.env.NODE_ENV !== "production" && ((0 | o) < 0 || o > f_)) throw Ym(16, `${o}`);
  return ph.set(r, o), Th.set(o, r), o;
}, d_ = (r) => Th.get(r), p_ = (r, o) => {
  mh = o + 1, ph.set(r, o), Th.set(o, r);
}, e1 = /invalid hook call/i, Jm = /* @__PURE__ */ new Set(), m_ = (r, o) => {
  if (Lt.env.NODE_ENV !== "production") {
    const s = `The component ${r}${o ? ` with the id of "${o}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, f = console.error;
    try {
      let c = !0;
      console.error = (p, ...g) => {
        e1.test(p) ? (c = !1, Jm.delete(s)) : f(p, ...g);
      }, typeof ht.useState == "function" && ht.useState(null), c && !Jm.has(s) && (console.warn(s), Jm.add(s));
    } catch (c) {
      e1.test(c.message) && Jm.delete(s);
    } finally {
      console.error = f;
    }
  }
}, yv = Object.freeze([]), Dc = Object.freeze({});
function h_(r, o, s = Dc) {
  return r.theme !== s.theme && r.theme || o || s.theme;
}
const g_ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, y_ = /(^-|-$)/g;
function BS(r) {
  return r.replace(g_, "-").replace(y_, "");
}
const b_ = /(a)(d)/gi, t1 = (r) => String.fromCharCode(r + (r > 25 ? 39 : 97));
function qS(r) {
  let o, s = "";
  for (o = Math.abs(r); o > 52; o = o / 52 | 0) s = t1(o % 52) + s;
  return (t1(o % 52) + s).replace(b_, "$1-$2");
}
const Kb = 5381, cc = (r, o) => {
  let s = o.length;
  for (; s; ) r = 33 * r ^ o.charCodeAt(--s);
  return r;
}, VS = (r) => cc(Kb, r);
function v_(r) {
  return qS(VS(r) >>> 0);
}
function bv(r) {
  return Lt.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function hh(r) {
  return typeof r == "string" && (Lt.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
function S_(r) {
  return hh(r) ? `styled.${r}` : `Styled(${bv(r)})`;
}
const GS = Symbol.for("react.memo"), w_ = Symbol.for("react.forward_ref"), T_ = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, k_ = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, YS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, E_ = { [w_]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [GS]: YS };
function n1(r) {
  return ("type" in (o = r) && o.type.$$typeof) === GS ? YS : "$$typeof" in r ? E_[r.$$typeof] : T_;
  var o;
}
const x_ = Object.defineProperty, __ = Object.getOwnPropertyNames, A_ = Object.getOwnPropertySymbols, z_ = Object.getOwnPropertyDescriptor, N_ = Object.getPrototypeOf, O_ = Object.prototype;
function FS(r, o, s) {
  if (typeof o != "string") {
    const f = N_(o);
    f && f !== O_ && FS(r, f, s);
    const c = __(o).concat(A_(o)), p = n1(r), g = n1(o);
    for (let T = 0; T < c.length; ++T) {
      const S = c[T];
      if (!(S in k_ || s && s[S] || g && S in g || p && S in p)) {
        const k = z_(o, S);
        try {
          x_(r, S, k);
        } catch {
        }
      }
    }
  }
  return r;
}
function Bh(r) {
  return typeof r == "function";
}
const C_ = Symbol.for("react.forward_ref");
function XS(r) {
  return r != null && (typeof r == "object" || typeof r == "function") && r.$$typeof === C_ && "styledComponentId" in r;
}
function Rm(r, o) {
  return r && o ? r + " " + o : r || o || "";
}
function a1(r, o) {
  return r.join("");
}
function yc(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function Zb(r, o, s = !1) {
  if (!s && !yc(r) && !Array.isArray(r)) return o;
  if (Array.isArray(o)) for (let f = 0; f < o.length; f++) r[f] = Zb(r[f], o[f]);
  else if (yc(o)) for (const f in o) r[f] = Zb(r[f], o[f]);
  return r;
}
function IS(r, o) {
  Object.defineProperty(r, "toString", { value: o });
}
const R_ = class {
  constructor(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(r) {
    if (r === this._cGroup) return this._cIndex;
    let o = this._cIndex;
    if (r > this._cGroup) for (let s = this._cGroup; s < r; s++) o += this.groupSizes[s];
    else for (let s = this._cGroup - 1; s >= r; s--) o -= this.groupSizes[s];
    return this._cGroup = r, this._cIndex = o, o;
  }
  insertRules(r, o) {
    if (r >= this.groupSizes.length) {
      const c = this.groupSizes, p = c.length;
      let g = p;
      for (; r >= g; ) if (g <<= 1, g < 0) throw Ym(16, `${r}`);
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(c), this.length = g;
      for (let T = p; T < g; T++) this.groupSizes[T] = 0;
    }
    let s = this.indexOfGroup(r + 1), f = 0;
    for (let c = 0, p = o.length; c < p; c++) this.tag.insertRule(s, o[c]) && (this.groupSizes[r]++, s++, f++);
    f > 0 && this._cGroup > r && (this._cIndex += f);
  }
  clearGroup(r) {
    if (r < this.length) {
      const o = this.groupSizes[r], s = this.indexOfGroup(r), f = s + o;
      this.groupSizes[r] = 0;
      for (let c = s; c < f; c++) this.tag.deleteRule(s);
      o > 0 && this._cGroup > r && (this._cIndex -= o);
    }
  }
  getGroup(r) {
    let o = "";
    if (r >= this.length || this.groupSizes[r] === 0) return o;
    const s = this.groupSizes[r], f = this.indexOfGroup(r), c = f + s;
    for (let p = f; p < c; p++) o += this.tag.getRule(p) + gv;
    return o;
  }
}, D_ = `style[${gc}][${HS}="${Hh}"]`, M_ = new RegExp(`^${gc}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), l1 = (r) => typeof ShadowRoot < "u" && r instanceof ShadowRoot || "host" in r && r.nodeType === 11, Wb = (r) => {
  if (!r) return document;
  if (l1(r)) return r;
  if ("getRootNode" in r) {
    const o = r.getRootNode();
    if (l1(o)) return o;
  }
  return document;
}, L_ = (r, o, s) => {
  const f = s.split(",");
  let c;
  for (let p = 0, g = f.length; p < g; p++) (c = f[p]) && r.registerName(o, c);
}, j_ = (r, o) => {
  var s;
  const f = ((s = o.textContent) !== null && s !== void 0 ? s : "").split(gv), c = [];
  for (let p = 0, g = f.length; p < g; p++) {
    const T = f[p].trim();
    if (!T) continue;
    const S = T.match(M_);
    if (S) {
      const k = 0 | parseInt(S[1], 10), C = S[2];
      k !== 0 && (p_(C, k), L_(r, C, S[3]), r.getTag().insertRules(k, c)), c.length = 0;
    } else c.push(T);
  }
}, kb = (r) => {
  const o = Wb(r.options.target).querySelectorAll(D_);
  for (let s = 0, f = o.length; s < f; s++) {
    const c = o[s];
    c && c.getAttribute(gc) !== US && (j_(r, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
let xm = !1;
function U_() {
  if (xm !== !1) return xm;
  if (typeof document < "u") {
    const r = document.head.querySelector('meta[property="csp-nonce"]');
    if (r) return xm = r.nonce || r.getAttribute("content") || void 0;
    const o = document.head.querySelector('meta[name="sc-nonce"]');
    if (o) return xm = o.getAttribute("content") || void 0;
  }
  return xm = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const QS = (r, o) => {
  const s = document.head, f = r || s, c = document.createElement("style"), p = ((S) => {
    const k = Array.from(S.querySelectorAll(`style[${gc}]`));
    return k[k.length - 1];
  })(f), g = p !== void 0 ? p.nextSibling : null;
  c.setAttribute(gc, US), c.setAttribute(HS, Hh);
  const T = o || U_();
  return T && c.setAttribute("nonce", T), f.insertBefore(c, g), c;
}, H_ = class {
  constructor(r, o) {
    this.element = QS(r, o), this.element.appendChild(document.createTextNode("")), this.sheet = ((s) => {
      var f;
      if (s.sheet) return s.sheet;
      const c = (f = s.getRootNode().styleSheets) !== null && f !== void 0 ? f : document.styleSheets;
      for (let p = 0, g = c.length; p < g; p++) {
        const T = c[p];
        if (T.ownerNode === s) return T;
      }
      throw Ym(17);
    })(this.element), this.length = 0;
  }
  insertRule(r, o) {
    try {
      return this.sheet.insertRule(o, r), this.length++, !0;
    } catch {
      return !1;
    }
  }
  deleteRule(r) {
    this.sheet.deleteRule(r), this.length--;
  }
  getRule(r) {
    const o = this.sheet.cssRules[r];
    return o && o.cssText ? o.cssText : "";
  }
}, B_ = class {
  constructor(r, o) {
    this.element = QS(r, o), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(r, o) {
    if (r <= this.length && r >= 0) {
      const s = document.createTextNode(o);
      return this.element.insertBefore(s, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }
  deleteRule(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }
  getRule(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }
};
let r1 = jm;
const q_ = { isServer: !jm, useCSSOMInjection: !u_ };
class qh {
  static registerId(o) {
    return Wm(o);
  }
  constructor(o = Dc, s = {}, f) {
    this.options = Object.assign(Object.assign({}, q_), o), this.gs = s, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(f), this.server = !!o.isServer, !this.server && jm && r1 && (r1 = !1, kb(this)), IS(this, () => ((c) => {
      const p = c.getTag(), { length: g } = p;
      let T = "";
      for (let S = 0; S < g; S++) {
        const k = d_(S);
        if (k === void 0) continue;
        const C = c.names.get(k);
        if (C === void 0 || !C.size) continue;
        const O = p.getGroup(S);
        if (O.length === 0) continue;
        const R = gc + ".g" + S + '[id="' + k + '"]';
        let $ = "";
        for (const j of C) j.length > 0 && ($ += j + ",");
        T += O + R + '{content:"' + $ + '"}' + gv;
      }
      return T;
    })(this));
  }
  rehydrate() {
    !this.server && jm && kb(this);
  }
  reconstructWithOptions(o, s = !0) {
    const f = new qh(Object.assign(Object.assign({}, this.options), o), this.gs, s && this.names || void 0);
    return f.keyframeIds = new Set(this.keyframeIds), !this.server && jm && o.target !== this.options.target && Wb(this.options.target) !== Wb(o.target) && kb(f), f;
  }
  allocateGSInstance(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (o = (({ useCSSOMInjection: s, target: f, nonce: c }) => s ? new H_(f, c) : new B_(f, c))(this.options), new R_(o)));
    var o;
  }
  hasNameForId(o, s) {
    var f, c;
    return (c = (f = this.names.get(o)) === null || f === void 0 ? void 0 : f.has(s)) !== null && c !== void 0 && c;
  }
  registerName(o, s) {
    Wm(o), o.startsWith(s_) && this.keyframeIds.add(o);
    const f = this.names.get(o);
    f ? f.add(s) : this.names.set(o, /* @__PURE__ */ new Set([s]));
  }
  insertRules(o, s, f) {
    this.registerName(o, s), this.getTag().insertRules(Wm(o), f);
  }
  clearNames(o) {
    this.names.has(o) && this.names.get(o).clear();
  }
  clearRules(o) {
    this.getTag().clearGroup(Wm(o)), this.clearNames(o);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const $S = /* @__PURE__ */ new WeakSet(), V_ = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function G_(r, o) {
  return o == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || r in V_ || r.startsWith("--") ? String(o).trim() : o + "px";
}
const oc = 47;
function i1(r) {
  if (r.charCodeAt(0) === 45 && r.charCodeAt(1) === 45) return r;
  let o = "";
  for (let s = 0; s < r.length; s++) {
    const f = r.charCodeAt(s);
    o += f >= 65 && f <= 90 ? "-" + String.fromCharCode(f + 32) : r[s];
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
const Y_ = Symbol.for("sc-keyframes");
function Jb(r) {
  return typeof r == "object" && r !== null && Y_ in r;
}
function PS(r) {
  return Bh(r) && !(r.prototype && r.prototype.isReactComponent);
}
const KS = (r) => r == null || r === !1 || r === "", F_ = Symbol.for("react.client.reference");
function o1(r) {
  return r.$$typeof === F_;
}
function u1(r) {
  const o = r.$$id, s = (o && o.includes("#") ? o.split("#").pop() : o) || r.name || "unknown";
  console.warn(`Interpolating a client component (${s}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function ZS(r, o) {
  for (const s in r) {
    const f = r[s];
    r.hasOwnProperty(s) && !KS(f) && (Array.isArray(f) && $S.has(f) || Bh(f) ? o.push(i1(s) + ":", f, ";") : yc(f) ? (o.push(s + " {"), ZS(f, o), o.push("}")) : o.push(i1(s) + ": " + G_(s, f) + ";"));
  }
}
function fc(r, o, s, f, c = []) {
  if (KS(r)) return c;
  const p = typeof r;
  if (p === "string") return c.push(r), c;
  if (p === "function") {
    if (o1(r)) return Lt.env.NODE_ENV !== "production" && u1(r), c;
    if (PS(r) && o) {
      const g = r(o);
      return Lt.env.NODE_ENV === "production" || typeof g != "object" || Array.isArray(g) || Jb(g) || yc(g) || g === null || console.error(`${bv(r)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), fc(g, o, s, f, c);
    }
    return c.push(r), c;
  }
  if (Array.isArray(r)) {
    for (let g = 0; g < r.length; g++) fc(r[g], o, s, f, c);
    return c;
  }
  return XS(r) ? (c.push(`.${r.styledComponentId}`), c) : Jb(r) ? (s ? (r.inject(s, f), c.push(r.getName(f))) : c.push(r), c) : o1(r) ? (Lt.env.NODE_ENV !== "production" && u1(r), c) : yc(r) ? r.toString !== Object.prototype.toString ? (c.push(r.toString()), c) : (ZS(r, c), c) : (c.push(r.toString()), c);
}
const X_ = VS(Hh);
class I_ {
  constructor(o, s, f) {
    this.rules = o, this.componentId = s, this.baseHash = cc(X_, s), this.baseStyle = f, qh.registerId(s);
  }
  generateAndInjectStyles(o, s, f) {
    let c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, s, f) : "";
    {
      let p = "";
      for (let g = 0; g < this.rules.length; g++) {
        const T = this.rules[g];
        if (typeof T == "string") p += T;
        else if (T) if (PS(T)) {
          const S = T(o);
          typeof S == "string" ? p += S : S != null && S !== !1 && (Lt.env.NODE_ENV === "production" || typeof S != "object" || Array.isArray(S) || Jb(S) || yc(S) || console.error(`${bv(T)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), p += a1(fc(S, o, s, f)));
        } else p += a1(fc(T, o, s, f));
      }
      if (p) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const g = f.hash ? f.hash + p : p;
        let T = this.dynamicNameCache.get(g);
        if (!T) {
          if (T = qS(cc(cc(this.baseHash, f.hash), p) >>> 0), this.dynamicNameCache.size >= 200) {
            const S = this.dynamicNameCache.keys().next().value;
            S !== void 0 && this.dynamicNameCache.delete(S);
          }
          this.dynamicNameCache.set(g, T);
        }
        if (!s.hasNameForId(this.componentId, T)) {
          const S = f(p, "." + T, void 0, this.componentId);
          s.insertRules(this.componentId, T, S);
        }
        c = Rm(c, T);
      }
    }
    return c;
  }
}
const Q_ = /&/g;
function WS(r, o) {
  let s = 0;
  for (; --o >= 0 && r.charCodeAt(o) === 92; ) s++;
  return !(1 & ~s);
}
function Eb(r) {
  const o = r.length;
  let s = "", f = 0, c = 0, p = 0, g = !1, T = !1;
  for (let S = 0; S < o; S++) {
    const k = r.charCodeAt(S);
    if (p !== 0 || g || k !== oc || r.charCodeAt(S + 1) !== 42) if (g) k === 42 && r.charCodeAt(S + 1) === oc && (g = !1, S++);
    else if (k !== 34 && k !== 39 || WS(r, S)) {
      if (p === 0) if (k === 123) c++;
      else if (k === 125) {
        if (c--, c < 0) {
          T = !0;
          let C = S + 1;
          for (; C < o; ) {
            const O = r.charCodeAt(C);
            if (O === 59 || O === 10) break;
            C++;
          }
          C < o && r.charCodeAt(C) === 59 && C++, c = 0, S = C - 1, f = C;
          continue;
        }
        c === 0 && (s += r.substring(f, S + 1), f = S + 1);
      } else k === 59 && c === 0 && (s += r.substring(f, S + 1), f = S + 1);
    } else p === 0 ? p = k : p === k && (p = 0);
    else g = !0, S++;
  }
  return T || c !== 0 || p !== 0 ? (f < o && c === 0 && p === 0 && (s += r.substring(f)), s) : r;
}
function JS(r, o) {
  const s = o + " ", f = "," + s;
  for (let c = 0; c < r.length; c++) {
    const p = r[c];
    if (p.type === "rule") {
      p.value = (s + p.value).replaceAll(",", f);
      const g = p.props, T = [];
      for (let S = 0; S < g.length; S++) T[S] = s + g[S];
      p.props = T;
    }
    Array.isArray(p.children) && p.type !== "@keyframes" && JS(p.children, o);
  }
  return r;
}
function $_({ options: r = Dc, plugins: o = yv } = Dc) {
  let s, f, c;
  const p = (R, $, j) => j.startsWith(f) && j.endsWith(f) && j.replaceAll(f, "").length > 0 ? `.${s}` : R, g = o.slice();
  g.push((R) => {
    R.type === Mh && R.value.includes("&") && (c || (c = new RegExp(`\\${f}\\b`, "g")), R.props[0] = R.props[0].replace(Q_, f).replace(c, p));
  }), r.prefix && g.push(o_), g.push(l_);
  let T = [];
  const S = r_(g.concat(i_((R) => T.push(R)))), k = (R, $ = "", j = "", V = "&") => {
    s = V, f = $, c = void 0;
    const I = (function(H) {
      const ce = H.indexOf("//") !== -1, J = H.indexOf("}") !== -1;
      if (!ce && !J) return H;
      if (!ce) return Eb(H);
      const ne = H.length;
      let Y = "", F = 0, ee = 0, Ee = 0, He = 0, qe = 0, Be = !1;
      for (; ee < ne; ) {
        const Ae = H.charCodeAt(ee);
        if (Ae !== 34 && Ae !== 39 || WS(H, ee)) if (Ee === 0) if (Ae === oc && ee + 1 < ne && H.charCodeAt(ee + 1) === 42) {
          for (ee += 2; ee + 1 < ne && (H.charCodeAt(ee) !== 42 || H.charCodeAt(ee + 1) !== oc); ) ee++;
          ee += 2;
        } else if (Ae !== 40) if (Ae !== 41) if (He > 0) ee++;
        else if (Ae === 42 && ee + 1 < ne && H.charCodeAt(ee + 1) === oc) Y += H.substring(F, ee), ee += 2, F = ee, Be = !0;
        else if (Ae === oc && ee + 1 < ne && H.charCodeAt(ee + 1) === oc) {
          for (Y += H.substring(F, ee); ee < ne && H.charCodeAt(ee) !== 10; ) ee++;
          F = ee, Be = !0;
        } else Ae === 123 ? qe++ : Ae === 125 && qe--, ee++;
        else He > 0 && He--, ee++;
        else He++, ee++;
        else ee++;
        else Ee === 0 ? Ee = Ae : Ee === Ae && (Ee = 0), ee++;
      }
      return Be ? (F < ne && (Y += H.substring(F)), qe === 0 ? Y : Eb(Y)) : qe === 0 ? H : Eb(H);
    })(R);
    let P = n_(j || $ ? j + " " + $ + " { " + I + " }" : I);
    return r.namespace && (P = JS(P, r.namespace)), T = [], wh(P, S), T;
  }, C = r;
  let O = Kb;
  for (let R = 0; R < o.length; R++) o[R].name || Ym(15), O = cc(O, o[R].name);
  return C != null && C.namespace && (O = cc(O, C.namespace)), C != null && C.prefix && (O = cc(O, "p")), k.hash = O !== Kb ? O.toString() : "", k;
}
const P_ = new qh(), K_ = $_(), ew = ht.createContext({ shouldForwardProp: void 0, styleSheet: P_, stylis: K_, stylisPlugins: void 0 });
ew.Consumer;
function Z_() {
  return ht.useContext(ew);
}
const tw = ht.createContext(void 0);
tw.Consumer;
const s1 = Object.prototype.hasOwnProperty, xb = {};
function W_(r, o) {
  const s = typeof r != "string" ? "sc" : BS(r);
  xb[s] = (xb[s] || 0) + 1;
  const f = s + "-" + v_(Hh + s + xb[s]);
  return o ? o + "-" + f : f;
}
let _b;
function J_(r, o, s) {
  const f = XS(r), c = r, p = !hh(r), { attrs: g = yv, componentId: T = W_(o.displayName, o.parentComponentId), displayName: S = S_(r) } = o, k = o.displayName && o.componentId ? BS(o.displayName) + "-" + o.componentId : o.componentId || T, C = f && c.attrs ? c.attrs.concat(g).filter(Boolean) : g;
  let { shouldForwardProp: O } = o;
  if (f && c.shouldForwardProp) {
    const V = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      const I = o.shouldForwardProp;
      O = (P, H) => V(P, H) && I(P, H);
    } else O = V;
  }
  const R = new I_(s, k, f ? c.componentStyle : void 0);
  function $(V, I) {
    return (function(P, H, ce) {
      const { attrs: J, componentStyle: ne, defaultProps: Y, foldedComponentIds: F, styledComponentId: ee, target: Ee } = P, He = ht.useContext(tw), qe = Z_(), Be = P.shouldForwardProp || qe.shouldForwardProp;
      Lt.env.NODE_ENV !== "production" && ht.useDebugValue && ht.useDebugValue(ee);
      const Ae = h_(H, He, Y) || Dc;
      let yt, Qe;
      {
        const re = ht.useRef(null), se = re.current;
        if (se !== null && se[1] === Ae && se[2] === qe.styleSheet && se[3] === qe.stylis && se[7] === ne && (function(ie, we, ue) {
          const Z = ie, ye = we;
          let bt = 0;
          for (const tt in ye) if (s1.call(ye, tt) && (bt++, Z[tt] !== ye[tt])) return !1;
          return bt === ue;
        })(se[0], H, se[4])) yt = se[5], Qe = se[6];
        else {
          yt = (function(we, ue, Z) {
            const ye = Object.assign(Object.assign({}, ue), { className: void 0, theme: Z }), bt = we.length > 1;
            for (let tt = 0; tt < we.length; tt++) {
              const fn = we[tt], dn = Bh(fn) ? fn(bt ? Object.assign({}, ye) : ye) : fn;
              for (const nt in dn) nt === "className" ? ye.className = Rm(ye.className, dn[nt]) : nt === "style" ? ye.style = Object.assign(Object.assign({}, ye.style), dn[nt]) : nt in ue && ue[nt] === void 0 || (ye[nt] = dn[nt]);
            }
            return "className" in ue && typeof ue.className == "string" && (ye.className = Rm(ye.className, ue.className)), ye;
          })(J, H, Ae), Qe = (function(we, ue, Z, ye) {
            const bt = we.generateAndInjectStyles(ue, Z, ye);
            return Lt.env.NODE_ENV !== "production" && ht.useDebugValue && ht.useDebugValue(bt), bt;
          })(ne, yt, qe.styleSheet, qe.stylis);
          let ie = 0;
          for (const we in H) s1.call(H, we) && ie++;
          re.current = [H, Ae, qe.styleSheet, qe.stylis, ie, yt, Qe, ne];
        }
      }
      Lt.env.NODE_ENV !== "production" && P.warnTooManyClasses && P.warnTooManyClasses(Qe);
      const U = yt.as || Ee, L = (function(re, se, ie, we) {
        const ue = {};
        for (const Z in re) re[Z] === void 0 || Z[0] === "$" || Z === "as" || Z === "theme" && re.theme === ie || (Z === "forwardedAs" ? ue.as = re.forwardedAs : we && !we(Z, se) || (ue[Z] = re[Z], we || Lt.env.NODE_ENV !== "development" || G3(Z) || (_b || (_b = /* @__PURE__ */ new Set())).has(Z) || !hh(se) || se.includes("-") || (_b.add(Z), console.warn(`styled-components: it looks like an unknown prop "${Z}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return ue;
      })(yt, U, Ae, Be);
      let G = Rm(F, ee);
      return Qe && (G += " " + Qe), yt.className && (G += " " + yt.className), L[hh(U) && U.includes("-") ? "class" : "className"] = G, ce && (L.ref = ce), v1(U, L);
    })(j, V, I);
  }
  $.displayName = S;
  let j = ht.forwardRef($);
  return j.attrs = C, j.componentStyle = R, j.displayName = S, j.shouldForwardProp = O, j.foldedComponentIds = f ? Rm(c.foldedComponentIds, c.styledComponentId) : "", j.styledComponentId = k, j.target = f ? c.target : r, Object.defineProperty(j, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(V) {
    this._foldedDefaultProps = f ? (function(I, ...P) {
      for (const H of P) Zb(I, H, !0);
      return I;
    })({}, c.defaultProps, V) : V;
  } }), Lt.env.NODE_ENV !== "production" && (m_(S, k), j.warnTooManyClasses = /* @__PURE__ */ ((V, I) => {
    let P = {}, H = !1;
    return (ce) => {
      !H && (P[ce] = !0, Object.keys(P).length >= 200) && (console.warn(`Over 200 classes were generated for component ${V}${I ? ` with the id of "${I}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), H = !0, P = {});
    };
  })(S, k)), IS(j, () => `.${j.styledComponentId}`), p && FS(j, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), j;
}
var eA = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function c1(r, o) {
  const s = [r[0]];
  for (let f = 0, c = o.length; f < c; f += 1) s.push(o[f], r[f + 1]);
  return s;
}
const f1 = (r) => ($S.add(r), r);
function tA(r, ...o) {
  if (Bh(r) || yc(r)) return f1(fc(c1(yv, [r, ...o])));
  const s = r;
  return o.length === 0 && s.length === 1 && typeof s[0] == "string" ? fc(s) : f1(fc(c1(s, o)));
}
function ev(r, o, s = Dc) {
  if (!o) throw Ym(1, o);
  const f = (c, ...p) => r(o, s, tA(c, ...p));
  return f.attrs = (c) => ev(r, o, Object.assign(Object.assign({}, s), { attrs: Array.prototype.concat(s.attrs, c).filter(Boolean) })), f.withConfig = (c) => ev(r, o, Object.assign(Object.assign({}, s), c)), f;
}
const nw = (r) => ev(J_, r), Vh = nw;
eA.forEach((r) => {
  Vh[r] = nw(r);
});
Lt.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://styled-components.com/docs/basics#react-native`);
const eh = `__sc-${gc}__`;
Lt.env.NODE_ENV !== "production" && Lt.env.NODE_ENV !== "test" && typeof window < "u" && (window[eh] || (window[eh] = 0), window[eh] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`), window[eh] += 1);
const nA = Vh.section``, aA = (r, o, s) => ({
  id: o,
  imageSource: r.imageUrl,
  imageAltText: r.imageAltText,
  title: r.title,
  content: r.content,
  buttons: [
    {
      ariaLabel: s.text,
      color: s.color,
      label: s.text,
      size: s.size,
      href: r.buttonLink
    }
  ],
  cardLink: r.eventButtonUrl || (r == null ? void 0 : r.buttonLink)
}), lA = ({ cardButton: r }) => {
  const { feeds: o } = tv(Oh), s = o == null ? void 0 : o.map(
    (f, c) => aA(f, c, r)
  );
  return /* @__PURE__ */ yn.jsx(nA, { children: /* @__PURE__ */ yn.jsx(
    xS,
    {
      width: "auto",
      cardType: "news",
      perView: "3",
      cardItems: s || []
    }
  ) });
}, aw = ({ cardButton: r, ...o }) => (gi(() => {
  typeof window < "u" && pv({
    packageName: "component-news",
    component: "CardCarouselNews",
    type: "NA",
    configuration: {
      cardButton: r,
      props: o
    }
  });
}, []), // Calling the high order component that fetches the data
/* @__PURE__ */ yn.jsx(Sc, { ...o, children: /* @__PURE__ */ yn.jsx(
  lA,
  {
    cardButton: { ...Hm.cardButton, ...r }
  }
) }));
aw.propTypes = Sc.propTypes;
const lw = (r = "") => (r == null ? void 0 : r.length) === 0 ? [] : r.split("|").map((s) => ({
  label: s
})).filter((s) => s), rA = Vh.section`
  .c-card {
    height: 100%;
  }
`, iA = (r, o, s) => /* @__PURE__ */ yn.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ yn.jsx(
      qo,
      {
        type: "news",
        eventFormat: "inline",
        eventLocation: r.location,
        clickable: !!r.buttonLink,
        title: r.title,
        body: `<p class="card-text text-dark">${r.content}</p>`,
        image: r.imageUrl,
        imageAltText: r.imageAltText,
        linkLabel: r.eventButtonText,
        linkUrl: r.eventButtonUrl || r.buttonLink,
        buttons: [
          {
            ariaLabel: o.text,
            color: o.color,
            label: o.text,
            size: o.size,
            href: r.buttonLink
          }
        ],
        tags: s ? [] : lw(r == null ? void 0 : r.interests),
        cardLink: r.eventButtonUrl || (r == null ? void 0 : r.buttonLink)
      }
    )
  },
  r.id
), oA = ({ cardButton: r, hideTags: o }) => {
  const { feeds: s } = tv(Oh), f = o === !0 || o === "true";
  return /* @__PURE__ */ yn.jsx(rA, { className: "row row-spaced", "data-testid": "grid-view-container", children: s == null ? void 0 : s.map((c, p) => /* @__PURE__ */ yn.jsx(ht.Fragment, { children: iA(c, r, f) }, p)) });
}, rw = ({ cardButton: r, hideTags: o = !0, ...s }) => (gi(() => {
  typeof window < "u" && pv({
    packageName: "component-news",
    component: "CardGridNews",
    type: "NA",
    configuration: {
      cardButton: r,
      ...s
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ yn.jsx(Sc, { ...s, children: /* @__PURE__ */ yn.jsx(
  oA,
  {
    cardButton: { ...Hm.cardButton, ...r },
    hideTags: o
  }
) }));
rw.propTypes = {
  ...Sc.propTypes,
  cardButton: cS,
  hideTags: ta.oneOf(["true", "false", !0, !1])
};
const uA = Vh.section``, sA = (r, o, s) => /* @__PURE__ */ yn.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ yn.jsx(
  qo,
  {
    type: "news",
    horizontal: !0,
    eventFormat: "inline",
    eventLocation: r.location,
    clickable: !!r.buttonLink,
    title: r.title,
    body: `<p class="card-text text-dark">${r.content}</p>`,
    image: r.imageUrl,
    imageAltText: r.imageAltText,
    linkLabel: r.eventButtonText,
    linkUrl: r.eventButtonUrl || (r == null ? void 0 : r.buttonLink),
    buttons: [
      {
        ariaLabel: o.text,
        color: o.color,
        label: o.text,
        size: o.size,
        href: r.buttonLink
      }
    ],
    tags: s ? [] : lw(r == null ? void 0 : r.interests),
    cardLink: r.eventButtonUrl || (r == null ? void 0 : r.buttonLink)
  }
) }, r.id), cA = ({ cardButton: r, hideTags: o }) => {
  const { feeds: s } = tv(Oh), f = o === !0 || o === "true";
  return /* @__PURE__ */ yn.jsx(uA, { className: "row-spaced", "data-testid": "list-view-container", children: s == null ? void 0 : s.map((c, p) => /* @__PURE__ */ yn.jsx(ht.Fragment, { children: sA(c, r, f) }, p)) });
}, iw = ({ cardButton: r, hideTags: o = !0, ...s }) => (gi(() => {
  typeof window < "u" && pv({
    packageName: "component-news",
    component: "CardListlNews",
    type: "NA",
    configuration: {
      cardButton: r,
      ...s
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ yn.jsx(Sc, { ...s, children: /* @__PURE__ */ yn.jsx(
  cA,
  {
    cardButton: { ...Hm.cardButton, ...r },
    hideTags: o
  }
) }));
iw.propTypes = {
  ...Sc.propTypes,
  feedCardButtonShape: cS,
  hideTags: ta.oneOf(["true", "false", !0, !1])
};
var Ab = { exports: {} }, _m = {}, zb = { exports: {} }, Nb = {};
var d1;
function fA() {
  return d1 || (d1 = 1, (function(r) {
    function o(U, L) {
      var G = U.length;
      U.push(L);
      e: for (; 0 < G; ) {
        var re = G - 1 >>> 1, se = U[re];
        if (0 < c(se, L))
          U[re] = L, U[G] = se, G = re;
        else break e;
      }
    }
    function s(U) {
      return U.length === 0 ? null : U[0];
    }
    function f(U) {
      if (U.length === 0) return null;
      var L = U[0], G = U.pop();
      if (G !== L) {
        U[0] = G;
        e: for (var re = 0, se = U.length, ie = se >>> 1; re < ie; ) {
          var we = 2 * (re + 1) - 1, ue = U[we], Z = we + 1, ye = U[Z];
          if (0 > c(ue, G))
            Z < se && 0 > c(ye, ue) ? (U[re] = ye, U[Z] = G, re = Z) : (U[re] = ue, U[we] = G, re = we);
          else if (Z < se && 0 > c(ye, G))
            U[re] = ye, U[Z] = G, re = Z;
          else break e;
        }
      }
      return L;
    }
    function c(U, L) {
      var G = U.sortIndex - L.sortIndex;
      return G !== 0 ? G : U.id - L.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      r.unstable_now = function() {
        return p.now();
      };
    } else {
      var g = Date, T = g.now();
      r.unstable_now = function() {
        return g.now() - T;
      };
    }
    var S = [], k = [], C = 1, O = null, R = 3, $ = !1, j = !1, V = !1, I = !1, P = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
    function J(U) {
      for (var L = s(k); L !== null; ) {
        if (L.callback === null) f(k);
        else if (L.startTime <= U)
          f(k), L.sortIndex = L.expirationTime, o(S, L);
        else break;
        L = s(k);
      }
    }
    function ne(U) {
      if (V = !1, J(U), !j)
        if (s(S) !== null)
          j = !0, Y || (Y = !0, Be());
        else {
          var L = s(k);
          L !== null && Qe(ne, L.startTime - U);
        }
    }
    var Y = !1, F = -1, ee = 5, Ee = -1;
    function He() {
      return I ? !0 : !(r.unstable_now() - Ee < ee);
    }
    function qe() {
      if (I = !1, Y) {
        var U = r.unstable_now();
        Ee = U;
        var L = !0;
        try {
          e: {
            j = !1, V && (V = !1, H(F), F = -1), $ = !0;
            var G = R;
            try {
              t: {
                for (J(U), O = s(S); O !== null && !(O.expirationTime > U && He()); ) {
                  var re = O.callback;
                  if (typeof re == "function") {
                    O.callback = null, R = O.priorityLevel;
                    var se = re(
                      O.expirationTime <= U
                    );
                    if (U = r.unstable_now(), typeof se == "function") {
                      O.callback = se, J(U), L = !0;
                      break t;
                    }
                    O === s(S) && f(S), J(U);
                  } else f(S);
                  O = s(S);
                }
                if (O !== null) L = !0;
                else {
                  var ie = s(k);
                  ie !== null && Qe(
                    ne,
                    ie.startTime - U
                  ), L = !1;
                }
              }
              break e;
            } finally {
              O = null, R = G, $ = !1;
            }
            L = void 0;
          }
        } finally {
          L ? Be() : Y = !1;
        }
      }
    }
    var Be;
    if (typeof ce == "function")
      Be = function() {
        ce(qe);
      };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), yt = Ae.port2;
      Ae.port1.onmessage = qe, Be = function() {
        yt.postMessage(null);
      };
    } else
      Be = function() {
        P(qe, 0);
      };
    function Qe(U, L) {
      F = P(function() {
        U(r.unstable_now());
      }, L);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, r.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ee = 0 < U ? Math.floor(1e3 / U) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, r.unstable_next = function(U) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = R;
      }
      var G = R;
      R = L;
      try {
        return U();
      } finally {
        R = G;
      }
    }, r.unstable_requestPaint = function() {
      I = !0;
    }, r.unstable_runWithPriority = function(U, L) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var G = R;
      R = U;
      try {
        return L();
      } finally {
        R = G;
      }
    }, r.unstable_scheduleCallback = function(U, L, G) {
      var re = r.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? re + G : re) : G = re, U) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return se = G + se, U = {
        id: C++,
        callback: L,
        priorityLevel: U,
        startTime: G,
        expirationTime: se,
        sortIndex: -1
      }, G > re ? (U.sortIndex = G, o(k, U), s(S) === null && U === s(k) && (V ? (H(F), F = -1) : V = !0, Qe(ne, G - re))) : (U.sortIndex = se, o(S, U), j || $ || (j = !0, Y || (Y = !0, Be()))), U;
    }, r.unstable_shouldYield = He, r.unstable_wrapCallback = function(U) {
      var L = R;
      return function() {
        var G = R;
        R = L;
        try {
          return U.apply(this, arguments);
        } finally {
          R = G;
        }
      };
    };
  })(Nb)), Nb;
}
var p1;
function dA() {
  return p1 || (p1 = 1, zb.exports = fA()), zb.exports;
}
var m1;
function pA() {
  if (m1) return _m;
  m1 = 1;
  var r = { env: { NODE_ENV: "production" } };
  var o = dA(), s = ht, f = S1;
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function p(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function g(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function T(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function S(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function k(e) {
    if (g(e) !== e)
      throw Error(c(188));
  }
  function C(e) {
    var t = e.alternate;
    if (!t) {
      if (t = g(e), t === null) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (a = l.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return k(l), e;
          if (i === a) return k(l), t;
          i = i.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== a.return) n = l, a = i;
      else {
        for (var u = !1, d = l.child; d; ) {
          if (d === n) {
            u = !0, n = l, a = i;
            break;
          }
          if (d === a) {
            u = !0, a = l, n = i;
            break;
          }
          d = d.sibling;
        }
        if (!u) {
          for (d = i.child; d; ) {
            if (d === n) {
              u = !0, n = i, a = l;
              break;
            }
            if (d === a) {
              u = !0, a = i, n = l;
              break;
            }
            d = d.sibling;
          }
          if (!u) throw Error(c(189));
        }
      }
      if (n.alternate !== a) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function O(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = O(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var R = Object.assign, $ = Symbol.for("react.element"), j = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), ce = Symbol.for("react.consumer"), J = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), He = Symbol.for("react.activity"), qe = Symbol.for("react.memo_cache_sentinel"), Be = Symbol.iterator;
  function Ae(e) {
    return e === null || typeof e != "object" ? null : (e = Be && e[Be] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var yt = Symbol.for("react.client.reference");
  function Qe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === yt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case I:
        return "Fragment";
      case H:
        return "Profiler";
      case P:
        return "StrictMode";
      case Y:
        return "Suspense";
      case F:
        return "SuspenseList";
      case He:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case V:
          return "Portal";
        case J:
          return e.displayName || "Context";
        case ce:
          return (e._context.displayName || "Context") + ".Consumer";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ee:
          return t = e.displayName || null, t !== null ? t : Qe(e.type) || "Memo";
        case Ee:
          t = e._payload, e = e._init;
          try {
            return Qe(e(t));
          } catch {
          }
      }
    return null;
  }
  var U = Array.isArray, L = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, se = [], ie = -1;
  function we(e) {
    return { current: e };
  }
  function ue(e) {
    0 > ie || (e.current = se[ie], se[ie] = null, ie--);
  }
  function Z(e, t) {
    ie++, se[ie] = e.current, e.current = t;
  }
  var ye = we(null), bt = we(null), tt = we(null), fn = we(null);
  function dn(e, t) {
    switch (Z(tt, t), Z(bt, e), Z(ye, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Hp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Hp(t), e = Bp(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ue(ye), Z(ye, e);
  }
  function nt() {
    ue(ye), ue(bt), ue(tt);
  }
  function Re(e) {
    e.memoizedState !== null && Z(fn, e);
    var t = ye.current, n = Bp(t, e.type);
    t !== n && (Z(bt, e), Z(ye, n));
  }
  function Qa(e) {
    bt.current === e && (ue(ye), ue(bt)), fn.current === e && (ue(fn), ui._currentValue = re);
  }
  var De, dr;
  function ke(e) {
    if (De === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        De = t && t[1] || "", dr = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + De + e + dr;
  }
  var Dn = !1;
  function wl(e, t) {
    if (!e || Dn) return "";
    Dn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var M = function() {
                throw Error();
              };
              if (Object.defineProperty(M.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(M, []);
                } catch (A) {
                  var _ = A;
                }
                Reflect.construct(e, [], M);
              } else {
                try {
                  M.call();
                } catch (A) {
                  _ = A;
                }
                e.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                _ = A;
              }
              (M = e()) && typeof M.catch == "function" && M.catch(function() {
              });
            }
          } catch (A) {
            if (A && _ && typeof A.stack == "string")
              return [A.stack, _.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      l && l.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = a.DetermineComponentFrameRoot(), u = i[0], d = i[1];
      if (u && d) {
        var m = u.split(`
`), x = d.split(`
`);
        for (l = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < x.length && !x[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === m.length || l === x.length)
          for (a = m.length - 1, l = x.length - 1; 1 <= a && 0 <= l && m[a] !== x[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (m[a] !== x[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || m[a] !== x[l]) {
                  var N = `
` + m[a].replace(" at new ", " at ");
                  return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      Dn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? ke(n) : "";
  }
  function bn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ke(e.type);
      case 16:
        return ke("Lazy");
      case 13:
        return e.child !== t && t !== null ? ke("Suspense Fallback") : ke("Suspense");
      case 19:
        return ke("SuspenseList");
      case 0:
      case 15:
        return wl(e.type, !1);
      case 11:
        return wl(e.type.render, !1);
      case 1:
        return wl(e.type, !0);
      case 31:
        return ke("Activity");
      default:
        return "";
    }
  }
  function pr(e) {
    try {
      var t = "", n = null;
      do
        t += bn(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var $a = Object.prototype.hasOwnProperty, Tl = o.unstable_scheduleCallback, kl = o.unstable_cancelCallback, vn = o.unstable_shouldYield, Pa = o.unstable_requestPaint, Ye = o.unstable_now, mr = o.unstable_getCurrentPriorityLevel, El = o.unstable_ImmediatePriority, xl = o.unstable_UserBlockingPriority, ia = o.unstable_NormalPriority, oa = o.unstable_LowPriority, Ka = o.unstable_IdlePriority, _l = o.log, ki = o.unstable_setDisableYieldValue, ua = null, pt = null;
  function It(e) {
    if (typeof _l == "function" && ki(e), pt && typeof pt.setStrictMode == "function")
      try {
        pt.setStrictMode(ua, e);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : hr, sa = Math.log, Qt = Math.LN2;
  function hr(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (sa(e) / Qt | 0) | 0;
  }
  var Za = 256, Wa = 262144, ca = 4194304;
  function Sn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Mn(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0, i = e.suspendedLanes, u = e.pingedLanes;
    e = e.warmLanes;
    var d = a & 134217727;
    return d !== 0 ? (a = d & ~i, a !== 0 ? l = Sn(a) : (u &= d, u !== 0 ? l = Sn(u) : n || (n = d & ~e, n !== 0 && (l = Sn(n))))) : (d = a & ~i, d !== 0 ? l = Sn(d) : u !== 0 ? l = Sn(u) : n || (n = a & ~e, n !== 0 && (l = Sn(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
  }
  function wn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function $t(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ln() {
    var e = ca;
    return ca <<= 1, (ca & 62914560) === 0 && (ca = 4194304), e;
  }
  function Ja(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function jn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Jo(e, t, n, a, l, i) {
    var u = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var d = e.entanglements, m = e.expirationTimes, x = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var N = 31 - rt(n), M = 1 << N;
      d[N] = 0, m[N] = -1;
      var _ = x[N];
      if (_ !== null)
        for (x[N] = null, N = 0; N < _.length; N++) {
          var A = _[N];
          A !== null && (A.lane &= -536870913);
        }
      n &= ~M;
    }
    a !== 0 && gr(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(u & ~t));
  }
  function gr(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - rt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Al(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - rt(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  function yr(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : el(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function el(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function br(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function fa() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : um(e.type));
  }
  function Ei(e, t) {
    var n = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = n;
    }
  }
  var Tn = Math.random().toString(36).slice(2), oe = "__reactFiber$" + Tn, Fe = "__reactProps$" + Tn, da = "__reactContainer$" + Tn, zl = "__reactEvents$" + Tn, vr = "__reactListeners$" + Tn, xi = "__reactHandles$" + Tn, Sr = "__reactResources$" + Tn, tl = "__reactMarker$" + Tn;
  function wr(e) {
    delete e[oe], delete e[Fe], delete e[zl], delete e[vr], delete e[xi];
  }
  function pa(e) {
    var t = e[oe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[da] || n[oe]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Ip(e); e !== null; ) {
            if (n = e[oe]) return n;
            e = Ip(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ma(e) {
    if (e = e[oe] || e[da]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Dt(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Un(e) {
    var t = e[Sr];
    return t || (t = e[Sr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Me(e) {
    e[tl] = !0;
  }
  var _i = /* @__PURE__ */ new Set(), Ai = {};
  function kn(e, t) {
    Hn(e, t), Hn(e + "Capture", t);
  }
  function Hn(e, t) {
    for (Ai[e] = t, e = 0; e < t.length; e++)
      _i.add(t[e]);
  }
  var Nl = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ol = {}, nl = {};
  function ha(e) {
    return $a.call(nl, e) ? !0 : $a.call(Ol, e) ? !1 : Nl.test(e) ? nl[e] = !0 : (Ol[e] = !0, !1);
  }
  function En(e, t, n) {
    if (ha(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Et(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function pn(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  function xt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Tr(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function zi(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var l = a.get, i = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return l.call(this);
        },
        set: function(u) {
          n = "" + u, i.call(this, u);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(u) {
          n = "" + u;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function kr(e) {
    if (!e._valueTracker) {
      var t = Tr(e) ? "checked" : "value";
      e._valueTracker = zi(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Er(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Tr(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Cl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var eu = /[\n"\\]/g;
  function kt(e) {
    return e.replace(
      eu,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ga(e, t, n, a, l, i, u, d) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + xt(t)) : e.value !== "" + xt(t) && (e.value = "" + xt(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? v(e, u, xt(t)) : n != null ? v(e, u, xt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + xt(d) : e.removeAttribute("name");
  }
  function Rl(e, t, n, a, l, i, u, d) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        kr(e);
        return;
      }
      n = n != null ? "" + xt(n) : "", t = t != null ? "" + xt(t) : n, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = d ? e.checked : !!a, e.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), kr(e);
  }
  function v(e, t, n) {
    t === "number" && Cl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function y(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, a && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function z(e, t, n) {
    if (t != null && (t = "" + xt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + xt(n) : "";
  }
  function q(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (U(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = xt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), kr(e);
  }
  function K(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var he = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function be(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || he.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function mt(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && be(e, l, a);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && be(e, i, t[i]);
  }
  function at(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vt = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), on = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _t(e) {
    return on.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function it() {
  }
  var tu = null;
  function nu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Dl = null, Ml = null;
  function jc(e) {
    var t = ma(e);
    if (t && (e = t.stateNode)) {
      var n = e[Fe] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ga(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + kt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[Fe] || null;
                if (!l) throw Error(c(90));
                ga(
                  a,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              a = n[t], a.form === e.form && Er(a);
          }
          break e;
        case "textarea":
          z(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && y(e, !!n.multiple, t, !1);
      }
    }
  }
  var au = !1;
  function Uc(e, t, n) {
    if (au) return e(t, n);
    au = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (au = !1, (Dl !== null || Ml !== null) && (go(), Dl && (t = Dl, e = Ml, Ml = Dl = null, jc(t), e)))
        for (t = 0; t < e.length; t++) jc(e[t]);
    }
  }
  function xr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[Fe] || null;
    if (a === null) return null;
    n = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        c(231, t, typeof n)
      );
    return n;
  }
  var Bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lu = !1;
  if (Bn)
    try {
      var _r = {};
      Object.defineProperty(_r, "passive", {
        get: function() {
          lu = !0;
        }
      }), window.addEventListener("test", _r, _r), window.removeEventListener("test", _r, _r);
    } catch {
      lu = !1;
    }
  var ya = null, ru = null, Ni = null;
  function Hc() {
    if (Ni) return Ni;
    var e, t = ru, n = t.length, a, l = "value" in ya ? ya.value : ya.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var u = n - e;
    for (a = 1; a <= u && t[n - a] === l[i - a]; a++) ;
    return Ni = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Oi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ci() {
    return !0;
  }
  function Bc() {
    return !1;
  }
  function At(e) {
    function t(n, a, l, i, u) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (n = e[d], this[d] = n ? n(i) : i[d]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ci : Bc, this.isPropagationStopped = Bc, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ci);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ci);
      },
      persist: function() {
      },
      isPersistent: Ci
    }), t;
  }
  var al = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ri = At(al), Ar = R({}, al, { view: 0, detail: 0 }), Gh = At(Ar), iu, ou, zr, Di = R({}, Ar, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: su,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== zr && (zr && e.type === "mousemove" ? (iu = e.screenX - zr.screenX, ou = e.screenY - zr.screenY) : ou = iu = 0, zr = e), iu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ou;
    }
  }), qc = At(Di), Yh = R({}, Di, { dataTransfer: 0 }), Fh = At(Yh), Xh = R({}, Ar, { relatedTarget: 0 }), uu = At(Xh), Ih = R({}, al, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Qh = At(Ih), $h = R({}, al, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Ph = At($h), Kh = R({}, al, { data: 0 }), Vc = At(Kh), Zh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Wh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Jh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function eg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Jh[e]) ? !!t[e] : !1;
  }
  function su() {
    return eg;
  }
  var tg = R({}, Ar, {
    key: function(e) {
      if (e.key) {
        var t = Zh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: su,
    charCode: function(e) {
      return e.type === "keypress" ? Oi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), ng = At(tg), ag = R({}, Di, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Gc = At(ag), lg = R({}, Ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: su
  }), rg = At(lg), ig = R({}, al, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), og = At(ig), ug = R({}, Di, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sg = At(ug), cg = R({}, al, {
    newState: 0,
    oldState: 0
  }), fg = At(cg), dg = [9, 13, 27, 32], cu = Bn && "CompositionEvent" in window, Nr = null;
  Bn && "documentMode" in document && (Nr = document.documentMode);
  var pg = Bn && "TextEvent" in window && !Nr, Yc = Bn && (!cu || Nr && 8 < Nr && 11 >= Nr), Fc = " ", Xc = !1;
  function Ic(e, t) {
    switch (e) {
      case "keyup":
        return dg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Qc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ll = !1;
  function mg(e, t) {
    switch (e) {
      case "compositionend":
        return Qc(t);
      case "keypress":
        return t.which !== 32 ? null : (Xc = !0, Fc);
      case "textInput":
        return e = t.data, e === Fc && Xc ? null : e;
      default:
        return null;
    }
  }
  function hg(e, t) {
    if (Ll)
      return e === "compositionend" || !cu && Ic(e, t) ? (e = Hc(), Ni = ru = ya = null, Ll = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Yc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var gg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function $c(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gg[e.type] : t === "textarea";
  }
  function Pc(e, t, n, a) {
    Dl ? Ml ? Ml.push(a) : Ml = [a] : Dl = a, t = ko(t, "onChange"), 0 < t.length && (n = new Ri(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Or = null, Cr = null;
  function yg(e) {
    Rp(e, 0);
  }
  function Mi(e) {
    var t = Dt(e);
    if (Er(t)) return e;
  }
  function Kc(e, t) {
    if (e === "change") return t;
  }
  var Zc = !1;
  if (Bn) {
    var fu;
    if (Bn) {
      var du = "oninput" in document;
      if (!du) {
        var Wc = document.createElement("div");
        Wc.setAttribute("oninput", "return;"), du = typeof Wc.oninput == "function";
      }
      fu = du;
    } else fu = !1;
    Zc = fu && (!document.documentMode || 9 < document.documentMode);
  }
  function Jc() {
    Or && (Or.detachEvent("onpropertychange", ef), Cr = Or = null);
  }
  function ef(e) {
    if (e.propertyName === "value" && Mi(Cr)) {
      var t = [];
      Pc(
        t,
        Cr,
        e,
        nu(e)
      ), Uc(yg, t);
    }
  }
  function bg(e, t, n) {
    e === "focusin" ? (Jc(), Or = t, Cr = n, Or.attachEvent("onpropertychange", ef)) : e === "focusout" && Jc();
  }
  function vg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Mi(Cr);
  }
  function Sg(e, t) {
    if (e === "click") return Mi(t);
  }
  function wg(e, t) {
    if (e === "input" || e === "change")
      return Mi(t);
  }
  function Tg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ut = typeof Object.is == "function" ? Object.is : Tg;
  function Rr(e, t) {
    if (Ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!$a.call(t, l) || !Ut(e[l], t[l]))
        return !1;
    }
    return !0;
  }
  function tf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nf(e, t) {
    var n = tf(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = e + n.textContent.length, e <= t && a >= t)
          return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = tf(n);
    }
  }
  function af(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? af(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function lf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Cl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Cl(e.document);
    }
    return t;
  }
  function pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var kg = Bn && "documentMode" in document && 11 >= document.documentMode, jl = null, mu = null, Dr = null, hu = !1;
  function rf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    hu || jl == null || jl !== Cl(a) || (a = jl, "selectionStart" in a && pu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Dr && Rr(Dr, a) || (Dr = a, a = ko(mu, "onSelect"), 0 < a.length && (t = new Ri(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = jl)));
  }
  function ll(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ul = {
    animationend: ll("Animation", "AnimationEnd"),
    animationiteration: ll("Animation", "AnimationIteration"),
    animationstart: ll("Animation", "AnimationStart"),
    transitionrun: ll("Transition", "TransitionRun"),
    transitionstart: ll("Transition", "TransitionStart"),
    transitioncancel: ll("Transition", "TransitionCancel"),
    transitionend: ll("Transition", "TransitionEnd")
  }, gu = {}, of = {};
  Bn && (of = document.createElement("div").style, "AnimationEvent" in window || (delete Ul.animationend.animation, delete Ul.animationiteration.animation, delete Ul.animationstart.animation), "TransitionEvent" in window || delete Ul.transitionend.transition);
  function rl(e) {
    if (gu[e]) return gu[e];
    if (!Ul[e]) return e;
    var t = Ul[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in of)
        return gu[e] = t[n];
    return e;
  }
  var uf = rl("animationend"), sf = rl("animationiteration"), cf = rl("animationstart"), Eg = rl("transitionrun"), xg = rl("transitionstart"), _g = rl("transitioncancel"), ff = rl("transitionend"), df = /* @__PURE__ */ new Map(), yu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yu.push("scrollEnd");
  function mn(e, t) {
    df.set(e, t), kn(t, [e]);
  }
  var Li = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof r == "object" && typeof r.emit == "function") {
      r.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Pt = [], Hl = 0, bu = 0;
  function ji() {
    for (var e = Hl, t = bu = Hl = 0; t < e; ) {
      var n = Pt[t];
      Pt[t++] = null;
      var a = Pt[t];
      Pt[t++] = null;
      var l = Pt[t];
      Pt[t++] = null;
      var i = Pt[t];
      if (Pt[t++] = null, a !== null && l !== null) {
        var u = a.pending;
        u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l;
      }
      i !== 0 && pf(n, l, i);
    }
  }
  function Ui(e, t, n, a) {
    Pt[Hl++] = e, Pt[Hl++] = t, Pt[Hl++] = n, Pt[Hl++] = a, bu |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function vu(e, t, n, a) {
    return Ui(e, t, n, a), Hi(e);
  }
  function il(e, t) {
    return Ui(e, null, null, t), Hi(e);
  }
  function pf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, i = e.return; i !== null; )
      i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - rt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
  }
  function Hi(e) {
    if (50 < ti)
      throw ti = 0, zs = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Bl = {};
  function Ag(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, n, a) {
    return new Ag(e, t, n, a);
  }
  function Su(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function qn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ht(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function mf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Bi(e, t, n, a, l, i) {
    var u = 0;
    if (a = e, typeof e == "function") Su(e) && (u = 1);
    else if (typeof e == "string")
      u = Ry(
        e,
        n,
        ye.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case He:
          return e = Ht(31, n, t, l), e.elementType = He, e.lanes = i, e;
        case I:
          return ol(n.children, l, i, t);
        case P:
          u = 8, l |= 24;
          break;
        case H:
          return e = Ht(12, n, t, l | 2), e.elementType = H, e.lanes = i, e;
        case Y:
          return e = Ht(13, n, t, l), e.elementType = Y, e.lanes = i, e;
        case F:
          return e = Ht(19, n, t, l), e.elementType = F, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case J:
                u = 10;
                break e;
              case ce:
                u = 9;
                break e;
              case ne:
                u = 11;
                break e;
              case ee:
                u = 14;
                break e;
              case Ee:
                u = 16, a = null;
                break e;
            }
          u = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Ht(u, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
  }
  function ol(e, t, n, a) {
    return e = Ht(7, e, a, t), e.lanes = n, e;
  }
  function wu(e, t, n) {
    return e = Ht(6, e, null, t), e.lanes = n, e;
  }
  function hf(e) {
    var t = Ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Tu(e, t, n) {
    return t = Ht(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var gf = /* @__PURE__ */ new WeakMap();
  function Kt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = gf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: pr(t)
      }, gf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: pr(t)
    };
  }
  var ql = [], Vl = 0, qi = null, Mr = 0, Zt = [], Wt = 0, ba = null, xn = 1, _n = "";
  function Vn(e, t) {
    ql[Vl++] = Mr, ql[Vl++] = qi, qi = e, Mr = t;
  }
  function yf(e, t, n) {
    Zt[Wt++] = xn, Zt[Wt++] = _n, Zt[Wt++] = ba, ba = e;
    var a = xn;
    e = _n;
    var l = 32 - rt(a) - 1;
    a &= ~(1 << l), n += 1;
    var i = 32 - rt(t) + l;
    if (30 < i) {
      var u = l - l % 5;
      i = (a & (1 << u) - 1).toString(32), a >>= u, l -= u, xn = 1 << 32 - rt(t) + l | n << l | a, _n = i + e;
    } else
      xn = 1 << i | n << l | a, _n = e;
  }
  function ku(e) {
    e.return !== null && (Vn(e, 1), yf(e, 1, 0));
  }
  function Eu(e) {
    for (; e === qi; )
      qi = ql[--Vl], ql[Vl] = null, Mr = ql[--Vl], ql[Vl] = null;
    for (; e === ba; )
      ba = Zt[--Wt], Zt[Wt] = null, _n = Zt[--Wt], Zt[Wt] = null, xn = Zt[--Wt], Zt[Wt] = null;
  }
  function bf(e, t) {
    Zt[Wt++] = xn, Zt[Wt++] = _n, Zt[Wt++] = ba, xn = t.id, _n = t.overflow, ba = e;
  }
  var ot = null, Le = null, ge = !1, va = null, Jt = !1, xu = Error(c(519));
  function Sa(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Lr(Kt(t, e)), xu;
  }
  function vf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[oe] = e, t[Fe] = a, n) {
      case "dialog":
        de("cancel", t), de("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        de("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ai.length; n++)
          de(ai[n], t);
        break;
      case "source":
        de("error", t);
        break;
      case "img":
      case "image":
      case "link":
        de("error", t), de("load", t);
        break;
      case "details":
        de("toggle", t);
        break;
      case "input":
        de("invalid", t), Rl(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), q(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || jp(t.textContent, n) ? (a.popover != null && (de("beforetoggle", t), de("toggle", t)), a.onScroll != null && de("scroll", t), a.onScrollEnd != null && de("scrollend", t), a.onClick != null && (t.onclick = it), t = !0) : t = !1, t || Sa(e, !0);
  }
  function Sf(e) {
    for (ot = e.return; ot; )
      switch (ot.tag) {
        case 5:
        case 31:
        case 13:
          Jt = !1;
          return;
        case 27:
        case 3:
          Jt = !0;
          return;
        default:
          ot = ot.return;
      }
  }
  function Gl(e) {
    if (e !== ot) return !1;
    if (!ge) return Sf(e), ge = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Ys(e.type, e.memoizedProps)), n = !n), n && Le && Sa(e), Sf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = Xp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = Xp(e);
    } else
      t === 27 ? (t = Le, Ma(e.type) ? (e = $s, $s = null, Le = e) : Le = t) : Le = ot ? en(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ul() {
    Le = ot = null, ge = !1;
  }
  function _u() {
    var e = va;
    return e !== null && (Ct === null ? Ct = e : Ct.push.apply(
      Ct,
      e
    ), va = null), e;
  }
  function Lr(e) {
    va === null ? va = [e] : va.push(e);
  }
  var Au = we(null), sl = null, Gn = null;
  function wa(e, t, n) {
    Z(Au, t._currentValue), t._currentValue = n;
  }
  function Yn(e) {
    e._currentValue = Au.current, ue(Au);
  }
  function zu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Nu(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var i = l.dependencies;
      if (i !== null) {
        var u = l.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var d = i;
          i = l;
          for (var m = 0; m < t.length; m++)
            if (d.context === t[m]) {
              i.lanes |= n, d = i.alternate, d !== null && (d.lanes |= n), zu(
                i.return,
                n,
                e
              ), a || (u = null);
              break e;
            }
          i = d.next;
        }
      } else if (l.tag === 18) {
        if (u = l.return, u === null) throw Error(c(341));
        u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), zu(u, n, e), u = null;
      } else u = l.child;
      if (u !== null) u.return = l;
      else
        for (u = l; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          if (l = u.sibling, l !== null) {
            l.return = u.return, u = l;
            break;
          }
          u = u.return;
        }
      l = u;
    }
  }
  function Yl(e, t, n, a) {
    e = null;
    for (var l = t, i = !1; l !== null; ) {
      if (!i) {
        if ((l.flags & 524288) !== 0) i = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var u = l.alternate;
        if (u === null) throw Error(c(387));
        if (u = u.memoizedProps, u !== null) {
          var d = l.type;
          Ut(l.pendingProps.value, u.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (l === fn.current) {
        if (u = l.alternate, u === null) throw Error(c(387));
        u.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(ui) : e = [ui]);
      }
      l = l.return;
    }
    e !== null && Nu(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function Vi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ut(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function cl(e) {
    sl = e, Gn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ut(e) {
    return wf(sl, e);
  }
  function Gi(e, t) {
    return sl === null && cl(e), wf(e, t);
  }
  function wf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Gn === null) {
      if (e === null) throw Error(c(308));
      Gn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Gn = Gn.next = t;
    return n;
  }
  var zg = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, Ng = o.unstable_scheduleCallback, Og = o.unstable_NormalPriority, $e = {
    $$typeof: J,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ou() {
    return {
      controller: new zg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function jr(e) {
    e.refCount--, e.refCount === 0 && Ng(Og, function() {
      e.controller.abort();
    });
  }
  var Ur = null, Cu = 0, Fl = 0, Xl = null;
  function Cg(e, t) {
    if (Ur === null) {
      var n = Ur = [];
      Cu = 0, Fl = Ms(), Xl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Cu++, t.then(Tf, Tf), t;
  }
  function Tf() {
    if (--Cu === 0 && Ur !== null) {
      Xl !== null && (Xl.status = "fulfilled");
      var e = Ur;
      Ur = null, Fl = 0, Xl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Rg(e, t) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(l) {
        n.push(l);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var l = 0; l < n.length; l++) (0, n[l])(t);
      },
      function(l) {
        for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
          (0, n[l])(void 0);
      }
    ), a;
  }
  var kf = L.S;
  L.S = function(e, t) {
    ip = Ye(), typeof t == "object" && t !== null && typeof t.then == "function" && Cg(e, t), kf !== null && kf(e, t);
  };
  var fl = we(null);
  function Ru() {
    var e = fl.current;
    return e !== null ? e : Ce.pooledCache;
  }
  function Yi(e, t) {
    t === null ? Z(fl, fl.current) : Z(fl, t.pool);
  }
  function Ef() {
    var e = Ru();
    return e === null ? null : { parent: $e._currentValue, pool: e };
  }
  var Il = Error(c(460)), Du = Error(c(474)), Fi = Error(c(542)), Xi = { then: function() {
  } };
  function xf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function _f(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(it, it), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, zf(e), e;
      default:
        if (typeof t.status == "string") t.then(it, it);
        else {
          if (e = Ce, e !== null && 100 < e.shellSuspendCounter)
            throw Error(c(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var l = t;
                l.status = "fulfilled", l.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var l = t;
                l.status = "rejected", l.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, zf(e), e;
        }
        throw pl = t, Il;
    }
  }
  function dl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (pl = n, Il) : n;
    }
  }
  var pl = null;
  function Af() {
    if (pl === null) throw Error(c(459));
    var e = pl;
    return pl = null, e;
  }
  function zf(e) {
    if (e === Il || e === Fi)
      throw Error(c(483));
  }
  var Ql = null, Hr = 0;
  function Ii(e) {
    var t = Hr;
    return Hr += 1, Ql === null && (Ql = []), _f(Ql, e, t);
  }
  function Br(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Qi(e, t) {
    throw t.$$typeof === $ ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Nf(e) {
    function t(w, b) {
      if (e) {
        var E = w.deletions;
        E === null ? (w.deletions = [b], w.flags |= 16) : E.push(b);
      }
    }
    function n(w, b) {
      if (!e) return null;
      for (; b !== null; )
        t(w, b), b = b.sibling;
      return null;
    }
    function a(w) {
      for (var b = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? b.set(w.key, w) : b.set(w.index, w), w = w.sibling;
      return b;
    }
    function l(w, b) {
      return w = qn(w, b), w.index = 0, w.sibling = null, w;
    }
    function i(w, b, E) {
      return w.index = E, e ? (E = w.alternate, E !== null ? (E = E.index, E < b ? (w.flags |= 67108866, b) : E) : (w.flags |= 67108866, b)) : (w.flags |= 1048576, b);
    }
    function u(w) {
      return e && w.alternate === null && (w.flags |= 67108866), w;
    }
    function d(w, b, E, D) {
      return b === null || b.tag !== 6 ? (b = wu(E, w.mode, D), b.return = w, b) : (b = l(b, E), b.return = w, b);
    }
    function m(w, b, E, D) {
      var W = E.type;
      return W === I ? N(
        w,
        b,
        E.props.children,
        D,
        E.key
      ) : b !== null && (b.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ee && dl(W) === b.type) ? (b = l(b, E.props), Br(b, E), b.return = w, b) : (b = Bi(
        E.type,
        E.key,
        E.props,
        null,
        w.mode,
        D
      ), Br(b, E), b.return = w, b);
    }
    function x(w, b, E, D) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== E.containerInfo || b.stateNode.implementation !== E.implementation ? (b = Tu(E, w.mode, D), b.return = w, b) : (b = l(b, E.children || []), b.return = w, b);
    }
    function N(w, b, E, D, W) {
      return b === null || b.tag !== 7 ? (b = ol(
        E,
        w.mode,
        D,
        W
      ), b.return = w, b) : (b = l(b, E), b.return = w, b);
    }
    function M(w, b, E) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return b = wu(
          "" + b,
          w.mode,
          E
        ), b.return = w, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case j:
            return E = Bi(
              b.type,
              b.key,
              b.props,
              null,
              w.mode,
              E
            ), Br(E, b), E.return = w, E;
          case V:
            return b = Tu(
              b,
              w.mode,
              E
            ), b.return = w, b;
          case Ee:
            return b = dl(b), M(w, b, E);
        }
        if (U(b) || Ae(b))
          return b = ol(
            b,
            w.mode,
            E,
            null
          ), b.return = w, b;
        if (typeof b.then == "function")
          return M(w, Ii(b), E);
        if (b.$$typeof === J)
          return M(
            w,
            Gi(w, b),
            E
          );
        Qi(w, b);
      }
      return null;
    }
    function _(w, b, E, D) {
      var W = b !== null ? b.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return W !== null ? null : d(w, b, "" + E, D);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case j:
            return E.key === W ? m(w, b, E, D) : null;
          case V:
            return E.key === W ? x(w, b, E, D) : null;
          case Ee:
            return E = dl(E), _(w, b, E, D);
        }
        if (U(E) || Ae(E))
          return W !== null ? null : N(w, b, E, D, null);
        if (typeof E.then == "function")
          return _(
            w,
            b,
            Ii(E),
            D
          );
        if (E.$$typeof === J)
          return _(
            w,
            b,
            Gi(w, E),
            D
          );
        Qi(w, E);
      }
      return null;
    }
    function A(w, b, E, D, W) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return w = w.get(E) || null, d(b, w, "" + D, W);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case j:
            return w = w.get(
              D.key === null ? E : D.key
            ) || null, m(b, w, D, W);
          case V:
            return w = w.get(
              D.key === null ? E : D.key
            ) || null, x(b, w, D, W);
          case Ee:
            return D = dl(D), A(
              w,
              b,
              E,
              D,
              W
            );
        }
        if (U(D) || Ae(D))
          return w = w.get(E) || null, N(b, w, D, W, null);
        if (typeof D.then == "function")
          return A(
            w,
            b,
            E,
            Ii(D),
            W
          );
        if (D.$$typeof === J)
          return A(
            w,
            b,
            E,
            Gi(b, D),
            W
          );
        Qi(b, D);
      }
      return null;
    }
    function X(w, b, E, D) {
      for (var W = null, ve = null, Q = b, le = b = 0, me = null; Q !== null && le < E.length; le++) {
        Q.index > le ? (me = Q, Q = null) : me = Q.sibling;
        var Se = _(
          w,
          Q,
          E[le],
          D
        );
        if (Se === null) {
          Q === null && (Q = me);
          break;
        }
        e && Q && Se.alternate === null && t(w, Q), b = i(Se, b, le), ve === null ? W = Se : ve.sibling = Se, ve = Se, Q = me;
      }
      if (le === E.length)
        return n(w, Q), ge && Vn(w, le), W;
      if (Q === null) {
        for (; le < E.length; le++)
          Q = M(w, E[le], D), Q !== null && (b = i(
            Q,
            b,
            le
          ), ve === null ? W = Q : ve.sibling = Q, ve = Q);
        return ge && Vn(w, le), W;
      }
      for (Q = a(Q); le < E.length; le++)
        me = A(
          Q,
          w,
          le,
          E[le],
          D
        ), me !== null && (e && me.alternate !== null && Q.delete(
          me.key === null ? le : me.key
        ), b = i(
          me,
          b,
          le
        ), ve === null ? W = me : ve.sibling = me, ve = me);
      return e && Q.forEach(function(Ba) {
        return t(w, Ba);
      }), ge && Vn(w, le), W;
    }
    function te(w, b, E, D) {
      if (E == null) throw Error(c(151));
      for (var W = null, ve = null, Q = b, le = b = 0, me = null, Se = E.next(); Q !== null && !Se.done; le++, Se = E.next()) {
        Q.index > le ? (me = Q, Q = null) : me = Q.sibling;
        var Ba = _(w, Q, Se.value, D);
        if (Ba === null) {
          Q === null && (Q = me);
          break;
        }
        e && Q && Ba.alternate === null && t(w, Q), b = i(Ba, b, le), ve === null ? W = Ba : ve.sibling = Ba, ve = Ba, Q = me;
      }
      if (Se.done)
        return n(w, Q), ge && Vn(w, le), W;
      if (Q === null) {
        for (; !Se.done; le++, Se = E.next())
          Se = M(w, Se.value, D), Se !== null && (b = i(Se, b, le), ve === null ? W = Se : ve.sibling = Se, ve = Se);
        return ge && Vn(w, le), W;
      }
      for (Q = a(Q); !Se.done; le++, Se = E.next())
        Se = A(Q, w, le, Se.value, D), Se !== null && (e && Se.alternate !== null && Q.delete(Se.key === null ? le : Se.key), b = i(Se, b, le), ve === null ? W = Se : ve.sibling = Se, ve = Se);
      return e && Q.forEach(function(Yy) {
        return t(w, Yy);
      }), ge && Vn(w, le), W;
    }
    function Oe(w, b, E, D) {
      if (typeof E == "object" && E !== null && E.type === I && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case j:
            e: {
              for (var W = E.key; b !== null; ) {
                if (b.key === W) {
                  if (W = E.type, W === I) {
                    if (b.tag === 7) {
                      n(
                        w,
                        b.sibling
                      ), D = l(
                        b,
                        E.props.children
                      ), D.return = w, w = D;
                      break e;
                    }
                  } else if (b.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ee && dl(W) === b.type) {
                    n(
                      w,
                      b.sibling
                    ), D = l(b, E.props), Br(D, E), D.return = w, w = D;
                    break e;
                  }
                  n(w, b);
                  break;
                } else t(w, b);
                b = b.sibling;
              }
              E.type === I ? (D = ol(
                E.props.children,
                w.mode,
                D,
                E.key
              ), D.return = w, w = D) : (D = Bi(
                E.type,
                E.key,
                E.props,
                null,
                w.mode,
                D
              ), Br(D, E), D.return = w, w = D);
            }
            return u(w);
          case V:
            e: {
              for (W = E.key; b !== null; ) {
                if (b.key === W)
                  if (b.tag === 4 && b.stateNode.containerInfo === E.containerInfo && b.stateNode.implementation === E.implementation) {
                    n(
                      w,
                      b.sibling
                    ), D = l(b, E.children || []), D.return = w, w = D;
                    break e;
                  } else {
                    n(w, b);
                    break;
                  }
                else t(w, b);
                b = b.sibling;
              }
              D = Tu(E, w.mode, D), D.return = w, w = D;
            }
            return u(w);
          case Ee:
            return E = dl(E), Oe(
              w,
              b,
              E,
              D
            );
        }
        if (U(E))
          return X(
            w,
            b,
            E,
            D
          );
        if (Ae(E)) {
          if (W = Ae(E), typeof W != "function") throw Error(c(150));
          return E = W.call(E), te(
            w,
            b,
            E,
            D
          );
        }
        if (typeof E.then == "function")
          return Oe(
            w,
            b,
            Ii(E),
            D
          );
        if (E.$$typeof === J)
          return Oe(
            w,
            b,
            Gi(w, E),
            D
          );
        Qi(w, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, b !== null && b.tag === 6 ? (n(w, b.sibling), D = l(b, E), D.return = w, w = D) : (n(w, b), D = wu(E, w.mode, D), D.return = w, w = D), u(w)) : n(w, b);
    }
    return function(w, b, E, D) {
      try {
        Hr = 0;
        var W = Oe(
          w,
          b,
          E,
          D
        );
        return Ql = null, W;
      } catch (Q) {
        if (Q === Il || Q === Fi) throw Q;
        var ve = Ht(29, Q, null, w.mode);
        return ve.lanes = D, ve.return = w, ve;
      } finally {
      }
    };
  }
  var ml = Nf(!0), Of = Nf(!1), Ta = !1;
  function Mu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Lu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ka(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ea(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Te & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = Hi(e), pf(e, null, n), t;
    }
    return Ui(e, a, t, n), Hi(e);
  }
  function qr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Al(e, n);
    }
  }
  function ju(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          i === null ? l = i = u : i = i.next = u, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Uu = !1;
  function Vr() {
    if (Uu) {
      var e = Xl;
      if (e !== null) throw e;
    }
  }
  function Gr(e, t, n, a) {
    Uu = !1;
    var l = e.updateQueue;
    Ta = !1;
    var i = l.firstBaseUpdate, u = l.lastBaseUpdate, d = l.shared.pending;
    if (d !== null) {
      l.shared.pending = null;
      var m = d, x = m.next;
      m.next = null, u === null ? i = x : u.next = x, u = m;
      var N = e.alternate;
      N !== null && (N = N.updateQueue, d = N.lastBaseUpdate, d !== u && (d === null ? N.firstBaseUpdate = x : d.next = x, N.lastBaseUpdate = m));
    }
    if (i !== null) {
      var M = l.baseState;
      u = 0, N = x = m = null, d = i;
      do {
        var _ = d.lane & -536870913, A = _ !== d.lane;
        if (A ? (pe & _) === _ : (a & _) === _) {
          _ !== 0 && _ === Fl && (Uu = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e, te = d;
            _ = t;
            var Oe = n;
            switch (te.tag) {
              case 1:
                if (X = te.payload, typeof X == "function") {
                  M = X.call(Oe, M, _);
                  break e;
                }
                M = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = te.payload, _ = typeof X == "function" ? X.call(Oe, M, _) : X, _ == null) break e;
                M = R({}, M, _);
                break e;
              case 2:
                Ta = !0;
            }
          }
          _ = d.callback, _ !== null && (e.flags |= 64, A && (e.flags |= 8192), A = l.callbacks, A === null ? l.callbacks = [_] : A.push(_));
        } else
          A = {
            lane: _,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, N === null ? (x = N = A, m = M) : N = N.next = A, u |= _;
        if (d = d.next, d === null) {
          if (d = l.shared.pending, d === null)
            break;
          A = d, d = A.next, A.next = null, l.lastBaseUpdate = A, l.shared.pending = null;
        }
      } while (!0);
      N === null && (m = M), l.baseState = m, l.firstBaseUpdate = x, l.lastBaseUpdate = N, i === null && (l.shared.lanes = 0), Na |= u, e.lanes = u, e.memoizedState = M;
    }
  }
  function Cf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Rf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Cf(n[e], t);
  }
  var $l = we(null), $i = we(0);
  function Df(e, t) {
    e = Wn, Z($i, e), Z($l, t), Wn = e | t.baseLanes;
  }
  function Hu() {
    Z($i, Wn), Z($l, $l.current);
  }
  function Bu() {
    Wn = $i.current, ue($l), ue($i);
  }
  var Bt = we(null), un = null;
  function xa(e) {
    var t = e.alternate;
    Z(Xe, Xe.current & 1), Z(Bt, e), un === null && (t === null || $l.current !== null || t.memoizedState !== null) && (un = e);
  }
  function qu(e) {
    Z(Xe, Xe.current), Z(Bt, e), un === null && (un = e);
  }
  function Mf(e) {
    e.tag === 22 ? (Z(Xe, Xe.current), Z(Bt, e), un === null && (un = e)) : _a();
  }
  function _a() {
    Z(Xe, Xe.current), Z(Bt, Bt.current);
  }
  function qt(e) {
    ue(Bt), un === e && (un = null), ue(Xe);
  }
  var Xe = we(0);
  function Pi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Is(n) || Qs(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Fn = 0, ae = null, ze = null, Pe = null, Ki = !1, Pl = !1, hl = !1, Zi = 0, Yr = 0, Kl = null, Dg = 0;
  function Ve() {
    throw Error(c(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ut(e[n], t[n])) return !1;
    return !0;
  }
  function Gu(e, t, n, a, l, i) {
    return Fn = i, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, L.H = e === null || e.memoizedState === null ? yd : as, hl = !1, i = n(a, l), hl = !1, Pl && (i = jf(
      t,
      n,
      a,
      l
    )), Lf(e), i;
  }
  function Lf(e) {
    L.H = Ir;
    var t = ze !== null && ze.next !== null;
    if (Fn = 0, Pe = ze = ae = null, Ki = !1, Yr = 0, Kl = null, t) throw Error(c(300));
    e === null || Ke || (e = e.dependencies, e !== null && Vi(e) && (Ke = !0));
  }
  function jf(e, t, n, a) {
    ae = e;
    var l = 0;
    do {
      if (Pl && (Kl = null), Yr = 0, Pl = !1, 25 <= l) throw Error(c(301));
      if (l += 1, Pe = ze = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      L.H = bd, i = t(n, a);
    } while (Pl);
    return i;
  }
  function Mg() {
    var e = L.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Fr(t) : t, e = e.useState()[0], (ze !== null ? ze.memoizedState : null) !== e && (ae.flags |= 1024), t;
  }
  function Yu() {
    var e = Zi !== 0;
    return Zi = 0, e;
  }
  function Fu(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Xu(e) {
    if (Ki) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Ki = !1;
    }
    Fn = 0, Pe = ze = ae = null, Pl = !1, Yr = Zi = 0, Kl = null;
  }
  function St() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Pe === null ? ae.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
  }
  function Ie() {
    if (ze === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = Pe === null ? ae.memoizedState : Pe.next;
    if (t !== null)
      Pe = t, ze = e;
    else {
      if (e === null)
        throw ae.alternate === null ? Error(c(467)) : Error(c(310));
      ze = e, e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null
      }, Pe === null ? ae.memoizedState = Pe = e : Pe = Pe.next = e;
    }
    return Pe;
  }
  function Wi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fr(e) {
    var t = Yr;
    return Yr += 1, Kl === null && (Kl = []), e = _f(Kl, e, t), t = ae, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, L.H = t === null || t.memoizedState === null ? yd : as), e;
  }
  function Ji(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Fr(e);
      if (e.$$typeof === J) return ut(e);
    }
    throw Error(c(438, String(e)));
  }
  function Iu(e) {
    var t = null, n = ae.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = ae.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(l) {
          return l.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Wi(), ae.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = qe;
    return t.index++, n;
  }
  function Xn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function eo(e) {
    var t = Ie();
    return Qu(t, ze, e);
  }
  function Qu(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = n;
    var l = e.baseQueue, i = a.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        l.next = i.next, i.next = u;
      }
      t.baseQueue = l = i, a.pending = null;
    }
    if (i = e.baseState, l === null) e.memoizedState = i;
    else {
      t = l.next;
      var d = u = null, m = null, x = t, N = !1;
      do {
        var M = x.lane & -536870913;
        if (M !== x.lane ? (pe & M) === M : (Fn & M) === M) {
          var _ = x.revertLane;
          if (_ === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), M === Fl && (N = !0);
          else if ((Fn & _) === _) {
            x = x.next, _ === Fl && (N = !0);
            continue;
          } else
            M = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, m === null ? (d = m = M, u = i) : m = m.next = M, ae.lanes |= _, Na |= _;
          M = x.action, hl && n(i, M), i = x.hasEagerState ? x.eagerState : n(i, M);
        } else
          _ = {
            lane: M,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, m === null ? (d = m = _, u = i) : m = m.next = _, ae.lanes |= M, Na |= M;
        x = x.next;
      } while (x !== null && x !== t);
      if (m === null ? u = i : m.next = d, !Ut(i, e.memoizedState) && (Ke = !0, N && (n = Xl, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = u, e.baseQueue = m, a.lastRenderedState = i;
    }
    return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function $u(e) {
    var t = Ie(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = l = l.next;
      do
        i = e(i, u.action), u = u.next;
      while (u !== l);
      Ut(i, t.memoizedState) || (Ke = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, a];
  }
  function Uf(e, t, n) {
    var a = ae, l = Ie(), i = ge;
    if (i) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var u = !Ut(
      (ze || l).memoizedState,
      n
    );
    if (u && (l.memoizedState = n, Ke = !0), l = l.queue, Zu(qf.bind(null, a, l, e), [
      e
    ]), l.getSnapshot !== t || u || Pe !== null && Pe.memoizedState.tag & 1) {
      if (a.flags |= 2048, Zl(
        9,
        { destroy: void 0 },
        Bf.bind(
          null,
          a,
          l,
          n,
          t
        ),
        null
      ), Ce === null) throw Error(c(349));
      i || (Fn & 127) !== 0 || Hf(a, t, n);
    }
    return n;
  }
  function Hf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ae.updateQueue, t === null ? (t = Wi(), ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Bf(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Vf(t) && Gf(e);
  }
  function qf(e, t, n) {
    return n(function() {
      Vf(t) && Gf(e);
    });
  }
  function Vf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ut(e, n);
    } catch {
      return !0;
    }
  }
  function Gf(e) {
    var t = il(e, 2);
    t !== null && Rt(t, e, 2);
  }
  function Pu(e) {
    var t = St();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), hl) {
        It(!0);
        try {
          n();
        } finally {
          It(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xn,
      lastRenderedState: e
    }, t;
  }
  function Yf(e, t, n, a) {
    return e.baseState = n, Qu(
      e,
      ze,
      typeof a == "function" ? a : Xn
    );
  }
  function Lg(e, t, n, a, l) {
    if (ao(e)) throw Error(c(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: l,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(u) {
          i.listeners.push(u);
        }
      };
      L.T !== null ? n(!0) : i.isTransition = !1, a(i), n = t.pending, n === null ? (i.next = t.pending = i, Ff(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function Ff(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var i = L.T, u = {};
      L.T = u;
      try {
        var d = n(l, a), m = L.S;
        m !== null && m(u, d), Xf(e, t, d);
      } catch (x) {
        Ku(e, t, x);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), L.T = i;
      }
    } else
      try {
        i = n(l, a), Xf(e, t, i);
      } catch (x) {
        Ku(e, t, x);
      }
  }
  function Xf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        If(e, t, a);
      },
      function(a) {
        return Ku(e, t, a);
      }
    ) : If(e, t, n);
  }
  function If(e, t, n) {
    t.status = "fulfilled", t.value = n, Qf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Ff(e, n)));
  }
  function Ku(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, Qf(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Qf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function $f(e, t) {
    return t;
  }
  function Pf(e, t) {
    if (ge) {
      var n = Ce.formState;
      if (n !== null) {
        e: {
          var a = ae;
          if (ge) {
            if (Le) {
              t: {
                for (var l = Le, i = Jt; l.nodeType !== 8; ) {
                  if (!i) {
                    l = null;
                    break t;
                  }
                  if (l = en(
                    l.nextSibling
                  ), l === null) {
                    l = null;
                    break t;
                  }
                }
                i = l.data, l = i === "F!" || i === "F" ? l : null;
              }
              if (l) {
                Le = en(
                  l.nextSibling
                ), a = l.data === "F!";
                break e;
              }
            }
            Sa(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = St(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $f,
      lastRenderedState: t
    }, n.queue = a, n = md.bind(
      null,
      ae,
      a
    ), a.dispatch = n, a = Pu(!1), i = ns.bind(
      null,
      ae,
      !1,
      a.queue
    ), a = St(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = Lg.bind(
      null,
      ae,
      l,
      i,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function Kf(e) {
    var t = Ie();
    return Zf(t, ze, e);
  }
  function Zf(e, t, n) {
    if (t = Qu(
      e,
      t,
      $f
    )[0], e = eo(Xn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Fr(t);
      } catch (u) {
        throw u === Il ? Fi : u;
      }
    else a = t;
    t = Ie();
    var l = t.queue, i = l.dispatch;
    return n !== t.memoizedState && (ae.flags |= 2048, Zl(
      9,
      { destroy: void 0 },
      jg.bind(null, l, n),
      null
    )), [a, i, e];
  }
  function jg(e, t) {
    e.action = t;
  }
  function Wf(e) {
    var t = Ie(), n = ze;
    if (n !== null)
      return Zf(t, n, e);
    Ie(), t = t.memoizedState, n = Ie();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function Zl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = ae.updateQueue, t === null && (t = Wi(), ae.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Jf() {
    return Ie().memoizedState;
  }
  function to(e, t, n, a) {
    var l = St();
    ae.flags |= e, l.memoizedState = Zl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function no(e, t, n, a) {
    var l = Ie();
    a = a === void 0 ? null : a;
    var i = l.memoizedState.inst;
    ze !== null && a !== null && Vu(a, ze.memoizedState.deps) ? l.memoizedState = Zl(t, i, n, a) : (ae.flags |= e, l.memoizedState = Zl(
      1 | t,
      i,
      n,
      a
    ));
  }
  function ed(e, t) {
    to(8390656, 8, e, t);
  }
  function Zu(e, t) {
    no(2048, 8, e, t);
  }
  function Ug(e) {
    ae.flags |= 4;
    var t = ae.updateQueue;
    if (t === null)
      t = Wi(), ae.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function td(e) {
    var t = Ie().memoizedState;
    return Ug({ ref: t, nextImpl: e }), function() {
      if ((Te & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function nd(e, t) {
    return no(4, 2, e, t);
  }
  function ad(e, t) {
    return no(4, 4, e, t);
  }
  function ld(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function rd(e, t, n) {
    n = n != null ? n.concat([e]) : null, no(4, 4, ld.bind(null, t, e), n);
  }
  function Wu() {
  }
  function id(e, t) {
    var n = Ie();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Vu(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function od(e, t) {
    var n = Ie();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Vu(t, a[1]))
      return a[0];
    if (a = e(), hl) {
      It(!0);
      try {
        e();
      } finally {
        It(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Ju(e, t, n) {
    return n === void 0 || (Fn & 1073741824) !== 0 && (pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = up(), ae.lanes |= e, Na |= e, n);
  }
  function ud(e, t, n, a) {
    return Ut(n, t) ? n : $l.current !== null ? (e = Ju(e, n, a), Ut(e, t) || (Ke = !0), e) : (Fn & 42) === 0 || (Fn & 1073741824) !== 0 && (pe & 261930) === 0 ? (Ke = !0, e.memoizedState = n) : (e = up(), ae.lanes |= e, Na |= e, t);
  }
  function sd(e, t, n, a, l) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var u = L.T, d = {};
    L.T = d, ns(e, !1, t, n);
    try {
      var m = l(), x = L.S;
      if (x !== null && x(d, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var N = Rg(
          m,
          a
        );
        Xr(
          e,
          t,
          N,
          Yt(e)
        );
      } else
        Xr(
          e,
          t,
          a,
          Yt(e)
        );
    } catch (M) {
      Xr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: M },
        Yt()
      );
    } finally {
      G.p = i, u !== null && d.types !== null && (u.types = d.types), L.T = u;
    }
  }
  function Hg() {
  }
  function es(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var l = cd(e).queue;
    sd(
      e,
      l,
      t,
      re,
      n === null ? Hg : function() {
        return fd(e), n(a);
      }
    );
  }
  function cd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: re,
      baseState: re,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xn,
        lastRenderedState: re
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function fd(e) {
    var t = cd(e);
    t.next === null && (t = e.alternate.memoizedState), Xr(
      e,
      t.next.queue,
      {},
      Yt()
    );
  }
  function ts() {
    return ut(ui);
  }
  function dd() {
    return Ie().memoizedState;
  }
  function pd() {
    return Ie().memoizedState;
  }
  function Bg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Yt();
          e = ka(n);
          var a = Ea(t, e, n);
          a !== null && (Rt(a, t, n), qr(a, t, n)), t = { cache: Ou() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function qg(e, t, n) {
    var a = Yt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ao(e) ? hd(t, n) : (n = vu(e, t, n, a), n !== null && (Rt(n, e, a), gd(n, t, a)));
  }
  function md(e, t, n) {
    var a = Yt();
    Xr(e, t, n, a);
  }
  function Xr(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ao(e)) hd(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var u = t.lastRenderedState, d = i(u, n);
          if (l.hasEagerState = !0, l.eagerState = d, Ut(d, u))
            return Ui(e, t, l, 0), Ce === null && ji(), !1;
        } catch {
        } finally {
        }
      if (n = vu(e, t, l, a), n !== null)
        return Rt(n, e, a), gd(n, t, a), !0;
    }
    return !1;
  }
  function ns(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Ms(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ao(e)) {
      if (t) throw Error(c(479));
    } else
      t = vu(
        e,
        n,
        a,
        2
      ), t !== null && Rt(t, e, 2);
  }
  function ao(e) {
    var t = e.alternate;
    return e === ae || t !== null && t === ae;
  }
  function hd(e, t) {
    Pl = Ki = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function gd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Al(e, n);
    }
  }
  var Ir = {
    readContext: ut,
    use: Ji,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useLayoutEffect: Ve,
    useInsertionEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    useHostTransitionStatus: Ve,
    useFormState: Ve,
    useActionState: Ve,
    useOptimistic: Ve,
    useMemoCache: Ve,
    useCacheRefresh: Ve
  };
  Ir.useEffectEvent = Ve;
  var yd = {
    readContext: ut,
    use: Ji,
    useCallback: function(e, t) {
      return St().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ut,
    useEffect: ed,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, to(
        4194308,
        4,
        ld.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return to(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      to(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = St();
      t = t === void 0 ? null : t;
      var a = e();
      if (hl) {
        It(!0);
        try {
          e();
        } finally {
          It(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = St();
      if (n !== void 0) {
        var l = n(t);
        if (hl) {
          It(!0);
          try {
            n(t);
          } finally {
            It(!1);
          }
        }
      } else l = t;
      return a.memoizedState = a.baseState = l, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      }, a.queue = e, e = e.dispatch = qg.bind(
        null,
        ae,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = St();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Pu(e);
      var t = e.queue, n = md.bind(null, ae, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Wu,
    useDeferredValue: function(e, t) {
      var n = St();
      return Ju(n, e, t);
    },
    useTransition: function() {
      var e = Pu(!1);
      return e = sd.bind(
        null,
        ae,
        e.queue,
        !0,
        !1
      ), St().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = ae, l = St();
      if (ge) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Ce === null)
          throw Error(c(349));
        (pe & 127) !== 0 || Hf(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return l.queue = i, ed(qf.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, Zl(
        9,
        { destroy: void 0 },
        Bf.bind(
          null,
          a,
          i,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = St(), t = Ce.identifierPrefix;
      if (ge) {
        var n = _n, a = xn;
        n = (a & ~(1 << 32 - rt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Zi++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Dg++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: ts,
    useFormState: Pf,
    useActionState: Pf,
    useOptimistic: function(e) {
      var t = St();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = ns.bind(
        null,
        ae,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Iu,
    useCacheRefresh: function() {
      return St().memoizedState = Bg.bind(
        null,
        ae
      );
    },
    useEffectEvent: function(e) {
      var t = St(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Te & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, as = {
    readContext: ut,
    use: Ji,
    useCallback: id,
    useContext: ut,
    useEffect: Zu,
    useImperativeHandle: rd,
    useInsertionEffect: nd,
    useLayoutEffect: ad,
    useMemo: od,
    useReducer: eo,
    useRef: Jf,
    useState: function() {
      return eo(Xn);
    },
    useDebugValue: Wu,
    useDeferredValue: function(e, t) {
      var n = Ie();
      return ud(
        n,
        ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = eo(Xn)[0], t = Ie().memoizedState;
      return [
        typeof e == "boolean" ? e : Fr(e),
        t
      ];
    },
    useSyncExternalStore: Uf,
    useId: dd,
    useHostTransitionStatus: ts,
    useFormState: Kf,
    useActionState: Kf,
    useOptimistic: function(e, t) {
      var n = Ie();
      return Yf(n, ze, e, t);
    },
    useMemoCache: Iu,
    useCacheRefresh: pd
  };
  as.useEffectEvent = td;
  var bd = {
    readContext: ut,
    use: Ji,
    useCallback: id,
    useContext: ut,
    useEffect: Zu,
    useImperativeHandle: rd,
    useInsertionEffect: nd,
    useLayoutEffect: ad,
    useMemo: od,
    useReducer: $u,
    useRef: Jf,
    useState: function() {
      return $u(Xn);
    },
    useDebugValue: Wu,
    useDeferredValue: function(e, t) {
      var n = Ie();
      return ze === null ? Ju(n, e, t) : ud(
        n,
        ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = $u(Xn)[0], t = Ie().memoizedState;
      return [
        typeof e == "boolean" ? e : Fr(e),
        t
      ];
    },
    useSyncExternalStore: Uf,
    useId: dd,
    useHostTransitionStatus: ts,
    useFormState: Wf,
    useActionState: Wf,
    useOptimistic: function(e, t) {
      var n = Ie();
      return ze !== null ? Yf(n, ze, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Iu,
    useCacheRefresh: pd
  };
  bd.useEffectEvent = td;
  function ls(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : R({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var rs = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Yt(), l = ka(a);
      l.payload = t, n != null && (l.callback = n), t = Ea(e, l, a), t !== null && (Rt(t, e, a), qr(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Yt(), l = ka(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Ea(e, l, a), t !== null && (Rt(t, e, a), qr(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Yt(), a = ka(n);
      a.tag = 2, t != null && (a.callback = t), t = Ea(e, a, n), t !== null && (Rt(t, e, n), qr(t, e, n));
    }
  };
  function vd(e, t, n, a, l, i, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, u) : t.prototype && t.prototype.isPureReactComponent ? !Rr(n, a) || !Rr(l, i) : !0;
  }
  function Sd(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && rs.enqueueReplaceState(t, t.state, null);
  }
  function gl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = R({}, n));
      for (var l in e)
        n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function wd(e) {
    Li(e);
  }
  function Td(e) {
    console.error(e);
  }
  function kd(e) {
    Li(e);
  }
  function lo(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Ed(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function is(e, t, n) {
    return n = ka(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      lo(e, t);
    }, n;
  }
  function xd(e) {
    return e = ka(e), e.tag = 3, e;
  }
  function _d(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      e.payload = function() {
        return l(i);
      }, e.callback = function() {
        Ed(t, n, a);
      };
    }
    var u = n.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      Ed(t, n, a), typeof l != "function" && (Oa === null ? Oa = /* @__PURE__ */ new Set([this]) : Oa.add(this));
      var d = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function Vg(e, t, n, a, l) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Yl(
        t,
        n,
        l,
        !0
      ), n = Bt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return un === null ? yo() : n.alternate === null && Ge === 0 && (Ge = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === Xi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Cs(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === Xi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Cs(e, a, l)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Cs(e, a, l), yo(), !1;
    }
    if (ge)
      return t = Bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== xu && (e = Error(c(422), { cause: a }), Lr(Kt(e, n)))) : (a !== xu && (t = Error(c(423), {
        cause: a
      }), Lr(
        Kt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = Kt(a, n), l = is(
        e.stateNode,
        a,
        l
      ), ju(e, l), Ge !== 4 && (Ge = 2)), !1;
    var i = Error(c(520), { cause: a });
    if (i = Kt(i, n), ei === null ? ei = [i] : ei.push(i), Ge !== 4 && (Ge = 2), t === null) return !0;
    a = Kt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = is(n.stateNode, a, e), ju(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Oa === null || !Oa.has(i))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = xd(l), _d(
              l,
              e,
              n,
              a
            ), ju(n, l), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var os = Error(c(461)), Ke = !1;
  function st(e, t, n, a) {
    t.child = e === null ? Of(t, null, n, a) : ml(
      t,
      e.child,
      n,
      a
    );
  }
  function Ad(e, t, n, a, l) {
    n = n.render;
    var i = t.ref;
    if ("ref" in a) {
      var u = {};
      for (var d in a)
        d !== "ref" && (u[d] = a[d]);
    } else u = a;
    return cl(t), a = Gu(
      e,
      t,
      n,
      u,
      i,
      l
    ), d = Yu(), e !== null && !Ke ? (Fu(e, t, l), In(e, t, l)) : (ge && d && ku(t), t.flags |= 1, st(e, t, a, l), t.child);
  }
  function zd(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Su(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Nd(
        e,
        t,
        i,
        a,
        l
      )) : (e = Bi(
        n.type,
        null,
        a,
        t,
        t.mode,
        l
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !hs(e, l)) {
      var u = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Rr, n(u, a) && e.ref === t.ref)
        return In(e, t, l);
    }
    return t.flags |= 1, e = qn(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Nd(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Rr(i, a) && e.ref === t.ref)
        if (Ke = !1, t.pendingProps = a = i, hs(e, l))
          (e.flags & 131072) !== 0 && (Ke = !0);
        else
          return t.lanes = e.lanes, In(e, t, l);
    }
    return us(
      e,
      t,
      n,
      a,
      l
    );
  }
  function Od(e, t, n, a) {
    var l = a.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, l = 0; a !== null; )
            l = l | a.lanes | a.childLanes, a = a.sibling;
          a = l & ~i;
        } else a = 0, t.child = null;
        return Cd(
          e,
          t,
          i,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Yi(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? Df(t, i) : Hu(), Mf(t);
      else
        return a = t.lanes = 536870912, Cd(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          a
        );
    } else
      i !== null ? (Yi(t, i.cachePool), Df(t, i), _a(), t.memoizedState = null) : (e !== null && Yi(t, null), Hu(), _a());
    return st(e, t, l, n), t.child;
  }
  function Qr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Cd(e, t, n, a, l) {
    var i = Ru();
    return i = i === null ? null : { parent: $e._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && Yi(t, null), Hu(), Mf(t), e !== null && Yl(e, t, a, !0), t.childLanes = l, null;
  }
  function ro(e, t) {
    return t = oo(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Rd(e, t, n) {
    return ml(t, e.child, null, n), e = ro(t, t.pendingProps), e.flags |= 2, qt(t), t.memoizedState = null, e;
  }
  function Gg(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ge) {
        if (a.mode === "hidden")
          return e = ro(t, a), t.lanes = 536870912, Qr(null, e);
        if (qu(t), (e = Le) ? (e = Fp(
          e,
          Jt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ba !== null ? { id: xn, overflow: _n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = hf(e), n.return = t, t.child = n, ot = t, Le = null)) : e = null, e === null) throw Sa(t);
        return t.lanes = 536870912, null;
      }
      return ro(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (qu(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = Rd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (Ke || Yl(e, t, n, !1), l = (n & e.childLanes) !== 0, Ke || l) {
        if (a = Ce, a !== null && (u = yr(a, n), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, il(e, u), Rt(a, e, u), os;
        yo(), t = Rd(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, Le = en(u.nextSibling), ot = t, ge = !0, va = null, Jt = !1, e !== null && bf(t, e), t = ro(t, a), t.flags |= 4096;
      return t;
    }
    return e = qn(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function io(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function us(e, t, n, a, l) {
    return cl(t), n = Gu(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Yu(), e !== null && !Ke ? (Fu(e, t, l), In(e, t, l)) : (ge && a && ku(t), t.flags |= 1, st(e, t, n, l), t.child);
  }
  function Dd(e, t, n, a, l, i) {
    return cl(t), t.updateQueue = null, n = jf(
      t,
      a,
      n,
      l
    ), Lf(e), a = Yu(), e !== null && !Ke ? (Fu(e, t, i), In(e, t, i)) : (ge && a && ku(t), t.flags |= 1, st(e, t, n, i), t.child);
  }
  function Md(e, t, n, a, l) {
    if (cl(t), t.stateNode === null) {
      var i = Bl, u = n.contextType;
      typeof u == "object" && u !== null && (i = ut(u)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = rs, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Mu(t), u = n.contextType, i.context = typeof u == "object" && u !== null ? ut(u) : Bl, i.state = t.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (ls(
        t,
        n,
        u,
        a
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && rs.enqueueReplaceState(i, i.state, null), Gr(t, a, i, l), Vr(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var d = t.memoizedProps, m = gl(n, d);
      i.props = m;
      var x = i.context, N = n.contextType;
      u = Bl, typeof N == "object" && N !== null && (u = ut(N));
      var M = n.getDerivedStateFromProps;
      N = typeof M == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, N || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || x !== u) && Sd(
        t,
        i,
        a,
        u
      ), Ta = !1;
      var _ = t.memoizedState;
      i.state = _, Gr(t, a, i, l), Vr(), x = t.memoizedState, d || _ !== x || Ta ? (typeof M == "function" && (ls(
        t,
        n,
        M,
        a
      ), x = t.memoizedState), (m = Ta || vd(
        t,
        n,
        m,
        a,
        _,
        x,
        u
      )) ? (N || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = x), i.props = a, i.state = x, i.context = u, a = m) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Lu(e, t), u = t.memoizedProps, N = gl(n, u), i.props = N, M = t.pendingProps, _ = i.context, x = n.contextType, m = Bl, typeof x == "object" && x !== null && (m = ut(x)), d = n.getDerivedStateFromProps, (x = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== M || _ !== m) && Sd(
        t,
        i,
        a,
        m
      ), Ta = !1, _ = t.memoizedState, i.state = _, Gr(t, a, i, l), Vr();
      var A = t.memoizedState;
      u !== M || _ !== A || Ta || e !== null && e.dependencies !== null && Vi(e.dependencies) ? (typeof d == "function" && (ls(
        t,
        n,
        d,
        a
      ), A = t.memoizedState), (N = Ta || vd(
        t,
        n,
        N,
        a,
        _,
        A,
        m
      ) || e !== null && e.dependencies !== null && Vi(e.dependencies)) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, A, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        A,
        m
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = A), i.props = a, i.state = A, i.context = m, a = N) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return i = a, io(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = ml(
      t,
      e.child,
      null,
      l
    ), t.child = ml(
      t,
      null,
      n,
      l
    )) : st(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = In(
      e,
      t,
      l
    ), e;
  }
  function Ld(e, t, n, a) {
    return ul(), t.flags |= 256, st(e, t, n, a), t.child;
  }
  var ss = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function cs(e) {
    return { baseLanes: e, cachePool: Ef() };
  }
  function fs(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Gt), e;
  }
  function jd(e, t, n) {
    var a = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), u && (l = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (l ? xa(t) : _a(), (e = Le) ? (e = Fp(
          e,
          Jt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ba !== null ? { id: xn, overflow: _n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = hf(e), n.return = t, t.child = n, ot = t, Le = null)) : e = null, e === null) throw Sa(t);
        return Qs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var d = a.children;
      return a = a.fallback, l ? (_a(), l = t.mode, d = oo(
        { mode: "hidden", children: d },
        l
      ), a = ol(
        a,
        l,
        n,
        null
      ), d.return = t, a.return = t, d.sibling = a, t.child = d, a = t.child, a.memoizedState = cs(n), a.childLanes = fs(
        e,
        u,
        n
      ), t.memoizedState = ss, Qr(null, a)) : (xa(t), ds(t, d));
    }
    var m = e.memoizedState;
    if (m !== null && (d = m.dehydrated, d !== null)) {
      if (i)
        t.flags & 256 ? (xa(t), t.flags &= -257, t = ps(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (_a(), t.child = e.child, t.flags |= 128, t = null) : (_a(), d = a.fallback, l = t.mode, a = oo(
          { mode: "visible", children: a.children },
          l
        ), d = ol(
          d,
          l,
          n,
          null
        ), d.flags |= 2, a.return = t, d.return = t, a.sibling = d, t.child = a, ml(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = cs(n), a.childLanes = fs(
          e,
          u,
          n
        ), t.memoizedState = ss, t = Qr(null, a));
      else if (xa(t), Qs(d)) {
        if (u = d.nextSibling && d.nextSibling.dataset, u) var x = u.dgst;
        u = x, a = Error(c(419)), a.stack = "", a.digest = u, Lr({ value: a, source: null, stack: null }), t = ps(
          e,
          t,
          n
        );
      } else if (Ke || Yl(e, t, n, !1), u = (n & e.childLanes) !== 0, Ke || u) {
        if (u = Ce, u !== null && (a = yr(u, n), a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, il(e, a), Rt(u, e, a), os;
        Is(d) || yo(), t = ps(
          e,
          t,
          n
        );
      } else
        Is(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Le = en(
          d.nextSibling
        ), ot = t, ge = !0, va = null, Jt = !1, e !== null && bf(t, e), t = ds(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return l ? (_a(), d = a.fallback, l = t.mode, m = e.child, x = m.sibling, a = qn(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, x !== null ? d = qn(
      x,
      d
    ) : (d = ol(
      d,
      l,
      n,
      null
    ), d.flags |= 2), d.return = t, a.return = t, a.sibling = d, t.child = a, Qr(null, a), a = t.child, d = e.child.memoizedState, d === null ? d = cs(n) : (l = d.cachePool, l !== null ? (m = $e._currentValue, l = l.parent !== m ? { parent: m, pool: m } : l) : l = Ef(), d = {
      baseLanes: d.baseLanes | n,
      cachePool: l
    }), a.memoizedState = d, a.childLanes = fs(
      e,
      u,
      n
    ), t.memoizedState = ss, Qr(e.child, a)) : (xa(t), n = e.child, e = n.sibling, n = qn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (u = t.deletions, u === null ? (t.deletions = [e], t.flags |= 16) : u.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function ds(e, t) {
    return t = oo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function oo(e, t) {
    return e = Ht(22, e, null, t), e.lanes = 0, e;
  }
  function ps(e, t, n) {
    return ml(t, e.child, null, n), e = ds(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ud(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), zu(e.return, t, n);
  }
  function ms(e, t, n, a, l, i) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: l,
      treeForkCount: i
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = n, u.tailMode = l, u.treeForkCount = i);
  }
  function Hd(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, i = a.tail;
    a = a.children;
    var u = Xe.current, d = (u & 2) !== 0;
    if (d ? (u = u & 1 | 2, t.flags |= 128) : u &= 1, Z(Xe, u), st(e, t, a, n), a = ge ? Mr : 0, !d && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Ud(e, n, t);
        else if (e.tag === 19)
          Ud(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && Pi(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ms(
          t,
          !1,
          l,
          n,
          i,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Pi(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ms(
          t,
          !0,
          n,
          null,
          i,
          a
        );
        break;
      case "together":
        ms(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function In(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Na |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Yl(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = qn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = qn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function hs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Vi(e)));
  }
  function Yg(e, t, n) {
    switch (t.tag) {
      case 3:
        dn(t, t.stateNode.containerInfo), wa(t, $e, e.memoizedState.cache), ul();
        break;
      case 27:
      case 5:
        Re(t);
        break;
      case 4:
        dn(t, t.stateNode.containerInfo);
        break;
      case 10:
        wa(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, qu(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (xa(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? jd(e, t, n) : (xa(t), e = In(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        xa(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Yl(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), l) {
          if (a)
            return Hd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Z(Xe, Xe.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Od(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        wa(t, $e, e.memoizedState.cache);
    }
    return In(e, t, n);
  }
  function Bd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ke = !0;
      else {
        if (!hs(e, n) && (t.flags & 128) === 0)
          return Ke = !1, Yg(
            e,
            t,
            n
          );
        Ke = (e.flags & 131072) !== 0;
      }
    else
      Ke = !1, ge && (t.flags & 1048576) !== 0 && yf(t, Mr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = dl(t.elementType), t.type = e, typeof e == "function")
            Su(e) ? (a = gl(e, a), t.tag = 1, t = Md(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = us(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === ne) {
                t.tag = 11, t = Ad(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === ee) {
                t.tag = 14, t = zd(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = Qe(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return us(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, l = gl(
          a,
          t.pendingProps
        ), Md(
          e,
          t,
          a,
          l,
          n
        );
      case 3:
        e: {
          if (dn(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          l = i.element, Lu(e, t), Gr(t, a, null, n);
          var u = t.memoizedState;
          if (a = u.cache, wa(t, $e, a), a !== i.cache && Nu(
            t,
            [$e],
            n,
            !0
          ), Vr(), a = u.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: u.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = Ld(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== l) {
              l = Kt(
                Error(c(424)),
                t
              ), Lr(l), t = Ld(
                e,
                t,
                a,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Le = en(e.firstChild), ot = t, ge = !0, va = null, Jt = !0, n = Of(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (ul(), a === l) {
              t = In(
                e,
                t,
                n
              );
              break e;
            }
            st(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return io(e, t), e === null ? (n = Kp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : ge || (n = t.type, e = t.pendingProps, a = Eo(
          tt.current
        ).createElement(n), a[oe] = t, a[Fe] = e, ct(a, n, e), Me(a), t.stateNode = a) : t.memoizedState = Kp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Re(t), e === null && ge && (a = t.stateNode = Qp(
          t.type,
          t.pendingProps,
          tt.current
        ), ot = t, Jt = !0, l = Le, Ma(t.type) ? ($s = l, Le = en(a.firstChild)) : Le = l), st(
          e,
          t,
          t.pendingProps.children,
          n
        ), io(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ge && ((l = a = Le) && (a = vy(
          a,
          t.type,
          t.pendingProps,
          Jt
        ), a !== null ? (t.stateNode = a, ot = t, Le = en(a.firstChild), Jt = !1, l = !0) : l = !1), l || Sa(t)), Re(t), l = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, a = i.children, Ys(l, i) ? a = null : u !== null && Ys(l, u) && (t.flags |= 32), t.memoizedState !== null && (l = Gu(
          e,
          t,
          Mg,
          null,
          null,
          n
        ), ui._currentValue = l), io(e, t), st(e, t, a, n), t.child;
      case 6:
        return e === null && ge && ((e = n = Le) && (n = Sy(
          n,
          t.pendingProps,
          Jt
        ), n !== null ? (t.stateNode = n, ot = t, Le = null, e = !0) : e = !1), e || Sa(t)), null;
      case 13:
        return jd(e, t, n);
      case 4:
        return dn(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ml(
          t,
          null,
          a,
          n
        ) : st(e, t, a, n), t.child;
      case 11:
        return Ad(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return st(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return st(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return st(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return a = t.pendingProps, wa(t, t.type, a.value), st(e, t, a.children, n), t.child;
      case 9:
        return l = t.type._context, a = t.pendingProps.children, cl(t), l = ut(l), a = a(l), t.flags |= 1, st(e, t, a, n), t.child;
      case 14:
        return zd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Nd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Hd(e, t, n);
      case 31:
        return Gg(e, t, n);
      case 22:
        return Od(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return cl(t), a = ut($e), e === null ? (l = Ru(), l === null && (l = Ce, i = Ou(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, Mu(t), wa(t, $e, l)) : ((e.lanes & n) !== 0 && (Lu(e, t), Gr(t, null, null, n), Vr()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), wa(t, $e, a)) : (a = i.cache, wa(t, $e, a), a !== l.cache && Nu(
          t,
          [$e],
          n,
          !0
        ))), st(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function Qn(e) {
    e.flags |= 4;
  }
  function gs(e, t, n, a, l) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (dp()) e.flags |= 8192;
        else
          throw pl = Xi, Du;
    } else e.flags &= -16777217;
  }
  function qd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !tm(t))
      if (dp()) e.flags |= 8192;
      else
        throw pl = Xi, Du;
  }
  function uo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ln() : 536870912, e.lanes |= t, tr |= t);
  }
  function $r(e, t) {
    if (!ge)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 65011712, a |= l.flags & 65011712, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Fg(e, t, n) {
    var a = t.pendingProps;
    switch (Eu(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return je(t), null;
      case 1:
        return je(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yn($e), nt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Gl(t) ? Qn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, _u())), je(t), null;
      case 26:
        var l = t.type, i = t.memoizedState;
        return e === null ? (Qn(t), i !== null ? (je(t), qd(t, i)) : (je(t), gs(
          t,
          l,
          null,
          a,
          n
        ))) : i ? i !== e.memoizedState ? (Qn(t), je(t), qd(t, i)) : (je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Qn(t), je(t), gs(
          t,
          l,
          e,
          a,
          n
        )), null;
      case 27:
        if (Qa(t), n = tt.current, l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Qn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return je(t), null;
          }
          e = ye.current, Gl(t) ? vf(t) : (e = Qp(l, a, n), t.stateNode = e, Qn(t));
        }
        return je(t), null;
      case 5:
        if (Qa(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Qn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return je(t), null;
          }
          if (i = ye.current, Gl(t))
            vf(t);
          else {
            var u = Eo(
              tt.current
            );
            switch (i) {
              case 1:
                i = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                i = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    i = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    i = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    i = u.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? u.createElement("select", {
                      is: a.is
                    }) : u.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? u.createElement(l, { is: a.is }) : u.createElement(l);
                }
            }
            i[oe] = t, i[Fe] = a;
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                i.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t)
                  break e;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            t.stateNode = i;
            e: switch (ct(i, l, a), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && Qn(t);
          }
        }
        return je(t), gs(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Qn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = tt.current, Gl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = ot, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[oe] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || jp(e.nodeValue, n)), e || Sa(t, !0);
          } else
            e = Eo(e).createTextNode(
              a
            ), e[oe] = t, t.stateNode = e;
        }
        return je(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Gl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[oe] = t;
            } else
              ul(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), e = !1;
          } else
            n = _u(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (qt(t), t) : (qt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return je(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (l = Gl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(c(317));
              l[oe] = t;
            } else
              ul(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), l = !1;
          } else
            l = _u(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? (qt(t), t) : (qt(t), null);
        }
        return qt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), uo(t, t.updateQueue), je(t), null);
      case 4:
        return nt(), e === null && Hs(t.stateNode.containerInfo), je(t), null;
      case 10:
        return Yn(t.type), je(t), null;
      case 19:
        if (ue(Xe), a = t.memoizedState, a === null) return je(t), null;
        if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (l) $r(a, !1);
          else {
            if (Ge !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Pi(e), i !== null) {
                  for (t.flags |= 128, $r(a, !1), e = i.updateQueue, t.updateQueue = e, uo(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    mf(n, e), n = n.sibling;
                  return Z(
                    Xe,
                    Xe.current & 1 | 2
                  ), ge && Vn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Ye() > mo && (t.flags |= 128, l = !0, $r(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Pi(i), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, uo(t, e), $r(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ge)
                return je(t), null;
            } else
              2 * Ye() - a.renderingStartTime > mo && n !== 536870912 && (t.flags |= 128, l = !0, $r(a, !1), t.lanes = 4194304);
          a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ye(), e.sibling = null, n = Xe.current, Z(
          Xe,
          l ? n & 1 | 2 : n & 1
        ), ge && Vn(t, a.treeForkCount), e) : (je(t), null);
      case 22:
      case 23:
        return qt(t), Bu(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), n = t.updateQueue, n !== null && uo(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && ue(fl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Yn($e), je(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Xg(e, t) {
    switch (Eu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Yn($e), nt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Qa(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (qt(t), t.alternate === null)
            throw Error(c(340));
          ul();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (qt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          ul();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ue(Xe), null;
      case 4:
        return nt(), null;
      case 10:
        return Yn(t.type), null;
      case 22:
      case 23:
        return qt(t), Bu(), e !== null && ue(fl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Yn($e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vd(e, t) {
    switch (Eu(t), t.tag) {
      case 3:
        Yn($e), nt();
        break;
      case 26:
      case 27:
      case 5:
        Qa(t);
        break;
      case 4:
        nt();
        break;
      case 31:
        t.memoizedState !== null && qt(t);
        break;
      case 13:
        qt(t);
        break;
      case 19:
        ue(Xe);
        break;
      case 10:
        Yn(t.type);
        break;
      case 22:
      case 23:
        qt(t), Bu(), e !== null && ue(fl);
        break;
      case 24:
        Yn($e);
    }
  }
  function Pr(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var i = n.create, u = n.inst;
            a = i(), u.destroy = a;
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (d) {
      _e(t, t.return, d);
    }
  }
  function Aa(e, t, n) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var u = a.inst, d = u.destroy;
            if (d !== void 0) {
              u.destroy = void 0, l = t;
              var m = n, x = d;
              try {
                x();
              } catch (N) {
                _e(
                  l,
                  m,
                  N
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (N) {
      _e(t, t.return, N);
    }
  }
  function Gd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Rf(t, n);
      } catch (a) {
        _e(e, e.return, a);
      }
    }
  }
  function Yd(e, t, n) {
    n.props = gl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      _e(e, t, a);
    }
  }
  function Kr(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(a) : n.current = a;
      }
    } catch (l) {
      _e(e, t, l);
    }
  }
  function An(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          _e(e, t, l);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          _e(e, t, l);
        }
      else n.current = null;
  }
  function Fd(e) {
    var t = e.type, n = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (l) {
      _e(e, e.return, l);
    }
  }
  function ys(e, t, n) {
    try {
      var a = e.stateNode;
      py(a, e.type, n, t), a[Fe] = t;
    } catch (l) {
      _e(e, e.return, l);
    }
  }
  function Xd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ma(e.type) || e.tag === 4;
  }
  function bs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ma(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vs(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = it));
    else if (a !== 4 && (a === 27 && Ma(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (vs(e, t, n), e = e.sibling; e !== null; )
        vs(e, t, n), e = e.sibling;
  }
  function so(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && Ma(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (so(e, t, n), e = e.sibling; e !== null; )
        so(e, t, n), e = e.sibling;
  }
  function Id(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      ct(t, a, n), t[oe] = e, t[Fe] = n;
    } catch (i) {
      _e(e, e.return, i);
    }
  }
  var $n = !1, Ze = !1, Ss = !1, Qd = typeof WeakSet == "function" ? WeakSet : Set, lt = null;
  function Ig(e, t) {
    if (e = e.containerInfo, Vs = Co, e = lf(e), pu(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var l = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0, d = -1, m = -1, x = 0, N = 0, M = e, _ = null;
            t: for (; ; ) {
              for (var A; M !== n || l !== 0 && M.nodeType !== 3 || (d = u + l), M !== i || a !== 0 && M.nodeType !== 3 || (m = u + a), M.nodeType === 3 && (u += M.nodeValue.length), (A = M.firstChild) !== null; )
                _ = M, M = A;
              for (; ; ) {
                if (M === e) break t;
                if (_ === n && ++x === l && (d = u), _ === i && ++N === a && (m = u), (A = M.nextSibling) !== null) break;
                M = _, _ = M.parentNode;
              }
              M = A;
            }
            n = d === -1 || m === -1 ? null : { start: d, end: m };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Gs = { focusedElem: e, selectionRange: n }, Co = !1, lt = t; lt !== null; )
      if (t = lt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, lt = e;
      else
        for (; lt !== null; ) {
          switch (t = lt, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  l = e[n], l.ref.impl = l.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, n = t, l = i.memoizedProps, i = i.memoizedState, a = n.stateNode;
                try {
                  var X = gl(
                    n.type,
                    l
                  );
                  e = a.getSnapshotBeforeUpdate(
                    X,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (te) {
                  _e(
                    n,
                    n.return,
                    te
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Xs(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xs(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, lt = e;
            break;
          }
          lt = t.return;
        }
  }
  function $d(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Kn(e, n), a & 4 && Pr(5, n);
        break;
      case 1:
        if (Kn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (u) {
              _e(n, n.return, u);
            }
          else {
            var l = gl(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                l,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (u) {
              _e(
                n,
                n.return,
                u
              );
            }
          }
        a & 64 && Gd(n), a & 512 && Kr(n, n.return);
        break;
      case 3:
        if (Kn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Rf(e, t);
          } catch (u) {
            _e(n, n.return, u);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Id(n);
      case 26:
      case 5:
        Kn(e, n), t === null && a & 4 && Fd(n), a & 512 && Kr(n, n.return);
        break;
      case 12:
        Kn(e, n);
        break;
      case 31:
        Kn(e, n), a & 4 && Zd(e, n);
        break;
      case 13:
        Kn(e, n), a & 4 && Wd(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = ty.bind(
          null,
          n
        ), wy(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || $n, !a) {
          t = t !== null && t.memoizedState !== null || Ze, l = $n;
          var i = Ze;
          $n = a, (Ze = t) && !i ? Zn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Kn(e, n), $n = l, Ze = i;
        }
        break;
      case 30:
        break;
      default:
        Kn(e, n);
    }
  }
  function Pd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && wr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ue = null, zt = !1;
  function Pn(e, t, n) {
    for (n = n.child; n !== null; )
      Kd(e, t, n), n = n.sibling;
  }
  function Kd(e, t, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(ua, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Ze || An(n, t), Pn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ze || An(n, t);
        var a = Ue, l = zt;
        Ma(n.type) && (Ue = n.stateNode, zt = !1), Pn(
          e,
          t,
          n
        ), ri(n.stateNode), Ue = a, zt = l;
        break;
      case 5:
        Ze || An(n, t);
      case 6:
        if (a = Ue, l = zt, Ue = null, Pn(
          e,
          t,
          n
        ), Ue = a, zt = l, Ue !== null)
          if (zt)
            try {
              (Ue.nodeType === 9 ? Ue.body : Ue.nodeName === "HTML" ? Ue.ownerDocument.body : Ue).removeChild(n.stateNode);
            } catch (i) {
              _e(
                n,
                t,
                i
              );
            }
          else
            try {
              Ue.removeChild(n.stateNode);
            } catch (i) {
              _e(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        Ue !== null && (zt ? (e = Ue, Gp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), sr(e)) : Gp(Ue, n.stateNode));
        break;
      case 4:
        a = Ue, l = zt, Ue = n.stateNode.containerInfo, zt = !0, Pn(
          e,
          t,
          n
        ), Ue = a, zt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Aa(2, n, t), Ze || Aa(4, n, t), Pn(
          e,
          t,
          n
        );
        break;
      case 1:
        Ze || (An(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Yd(
          n,
          t,
          a
        )), Pn(
          e,
          t,
          n
        );
        break;
      case 21:
        Pn(
          e,
          t,
          n
        );
        break;
      case 22:
        Ze = (a = Ze) || n.memoizedState !== null, Pn(
          e,
          t,
          n
        ), Ze = a;
        break;
      default:
        Pn(
          e,
          t,
          n
        );
    }
  }
  function Zd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        sr(e);
      } catch (n) {
        _e(t, t.return, n);
      }
    }
  }
  function Wd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        sr(e);
      } catch (n) {
        _e(t, t.return, n);
      }
  }
  function Qg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Qd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Qd()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function co(e, t) {
    var n = Qg(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = ny.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function Nt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a], i = e, u = t, d = u;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Ma(d.type)) {
                Ue = d.stateNode, zt = !1;
                break e;
              }
              break;
            case 5:
              Ue = d.stateNode, zt = !1;
              break e;
            case 3:
            case 4:
              Ue = d.stateNode.containerInfo, zt = !0;
              break e;
          }
          d = d.return;
        }
        if (Ue === null) throw Error(c(160));
        Kd(i, u, l), Ue = null, zt = !1, i = l.alternate, i !== null && (i.return = null), l.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Jd(t, e), t = t.sibling;
  }
  var hn = null;
  function Jd(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Nt(t, e), Ot(e), a & 4 && (Aa(3, e, e.return), Pr(3, e), Aa(5, e, e.return));
        break;
      case 1:
        Nt(t, e), Ot(e), a & 512 && (Ze || n === null || An(n, n.return)), a & 64 && $n && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var l = hn;
        if (Nt(t, e), Ot(e), a & 512 && (Ze || n === null || An(n, n.return)), a & 4) {
          var i = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                  t: switch (a) {
                    case "title":
                      i = l.getElementsByTagName("title")[0], (!i || i[tl] || i[oe] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(a), l.head.insertBefore(
                        i,
                        l.querySelector("head > title")
                      )), ct(i, a, n), i[oe] = e, Me(i), a = i;
                      break e;
                    case "link":
                      var u = Jp(
                        "link",
                        "href",
                        l
                      ).get(a + (n.href || ""));
                      if (u) {
                        for (var d = 0; d < u.length; d++)
                          if (i = u[d], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            u.splice(d, 1);
                            break t;
                          }
                      }
                      i = l.createElement(a), ct(i, a, n), l.head.appendChild(i);
                      break;
                    case "meta":
                      if (u = Jp(
                        "meta",
                        "content",
                        l
                      ).get(a + (n.content || ""))) {
                        for (d = 0; d < u.length; d++)
                          if (i = u[d], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            u.splice(d, 1);
                            break t;
                          }
                      }
                      i = l.createElement(a), ct(i, a, n), l.head.appendChild(i);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  i[oe] = e, Me(i), a = i;
                }
                e.stateNode = a;
              } else
                em(
                  l,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Wp(
                l,
                a,
                e.memoizedProps
              );
          else
            i !== a ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, a === null ? em(
              l,
              e.type,
              e.stateNode
            ) : Wp(
              l,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && ys(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Nt(t, e), Ot(e), a & 512 && (Ze || n === null || An(n, n.return)), n !== null && a & 4 && ys(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Nt(t, e), Ot(e), a & 512 && (Ze || n === null || An(n, n.return)), e.flags & 32) {
          l = e.stateNode;
          try {
            K(l, "");
          } catch (X) {
            _e(e, e.return, X);
          }
        }
        a & 4 && e.stateNode != null && (l = e.memoizedProps, ys(
          e,
          l,
          n !== null ? n.memoizedProps : l
        )), a & 1024 && (Ss = !0);
        break;
      case 6:
        if (Nt(t, e), Ot(e), a & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (X) {
            _e(e, e.return, X);
          }
        }
        break;
      case 3:
        if (Ao = null, l = hn, hn = xo(t.containerInfo), Nt(t, e), hn = l, Ot(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            sr(t.containerInfo);
          } catch (X) {
            _e(e, e.return, X);
          }
        Ss && (Ss = !1, ep(e));
        break;
      case 4:
        a = hn, hn = xo(
          e.stateNode.containerInfo
        ), Nt(t, e), Ot(e), hn = a;
        break;
      case 12:
        Nt(t, e), Ot(e);
        break;
      case 31:
        Nt(t, e), Ot(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, co(e, a)));
        break;
      case 13:
        Nt(t, e), Ot(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (po = Ye()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, co(e, a)));
        break;
      case 22:
        l = e.memoizedState !== null;
        var m = n !== null && n.memoizedState !== null, x = $n, N = Ze;
        if ($n = x || l, Ze = N || m, Nt(t, e), Ze = N, $n = x, Ot(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || m || $n || Ze || yl(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                m = n = t;
                try {
                  if (i = m.stateNode, l)
                    u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    d = m.stateNode;
                    var M = m.memoizedProps.style, _ = M != null && M.hasOwnProperty("display") ? M.display : null;
                    d.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (X) {
                  _e(m, m.return, X);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                m = t;
                try {
                  m.stateNode.nodeValue = l ? "" : m.memoizedProps;
                } catch (X) {
                  _e(m, m.return, X);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                m = t;
                try {
                  var A = m.stateNode;
                  l ? Yp(A, !0) : Yp(m.stateNode, !1);
                } catch (X) {
                  _e(m, m.return, X);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, co(e, n))));
        break;
      case 19:
        Nt(t, e), Ot(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, co(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Nt(t, e), Ot(e);
    }
  }
  function Ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Xd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode, i = bs(e);
            so(e, i, l);
            break;
          case 5:
            var u = n.stateNode;
            n.flags & 32 && (K(u, ""), n.flags &= -33);
            var d = bs(e);
            so(e, d, u);
            break;
          case 3:
          case 4:
            var m = n.stateNode.containerInfo, x = bs(e);
            vs(
              e,
              x,
              m
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (N) {
        _e(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ep(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ep(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Kn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        $d(e, t.alternate, t), t = t.sibling;
  }
  function yl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Aa(4, t, t.return), yl(t);
          break;
        case 1:
          An(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Yd(
            t,
            t.return,
            n
          ), yl(t);
          break;
        case 27:
          ri(t.stateNode);
        case 26:
        case 5:
          An(t, t.return), yl(t);
          break;
        case 22:
          t.memoizedState === null && yl(t);
          break;
        case 30:
          yl(t);
          break;
        default:
          yl(t);
      }
      e = e.sibling;
    }
  }
  function Zn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, l = e, i = t, u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Zn(
            l,
            i,
            n
          ), Pr(4, i);
          break;
        case 1:
          if (Zn(
            l,
            i,
            n
          ), a = i, l = a.stateNode, typeof l.componentDidMount == "function")
            try {
              l.componentDidMount();
            } catch (x) {
              _e(a, a.return, x);
            }
          if (a = i, l = a.updateQueue, l !== null) {
            var d = a.stateNode;
            try {
              var m = l.shared.hiddenCallbacks;
              if (m !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < m.length; l++)
                  Cf(m[l], d);
            } catch (x) {
              _e(a, a.return, x);
            }
          }
          n && u & 64 && Gd(i), Kr(i, i.return);
          break;
        case 27:
          Id(i);
        case 26:
        case 5:
          Zn(
            l,
            i,
            n
          ), n && a === null && u & 4 && Fd(i), Kr(i, i.return);
          break;
        case 12:
          Zn(
            l,
            i,
            n
          );
          break;
        case 31:
          Zn(
            l,
            i,
            n
          ), n && u & 4 && Zd(l, i);
          break;
        case 13:
          Zn(
            l,
            i,
            n
          ), n && u & 4 && Wd(l, i);
          break;
        case 22:
          i.memoizedState === null && Zn(
            l,
            i,
            n
          ), Kr(i, i.return);
          break;
        case 30:
          break;
        default:
          Zn(
            l,
            i,
            n
          );
      }
      t = t.sibling;
    }
  }
  function ws(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && jr(n));
  }
  function Ts(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && jr(e));
  }
  function gn(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        tp(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function tp(e, t, n, a) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        gn(
          e,
          t,
          n,
          a
        ), l & 2048 && Pr(9, t);
        break;
      case 1:
        gn(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        gn(
          e,
          t,
          n,
          a
        ), l & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && jr(e)));
        break;
      case 12:
        if (l & 2048) {
          gn(
            e,
            t,
            n,
            a
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, u = i.id, d = i.onPostCommit;
            typeof d == "function" && d(
              u,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (m) {
            _e(t, t.return, m);
          }
        } else
          gn(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        gn(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        gn(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, u = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? gn(
          e,
          t,
          n,
          a
        ) : Zr(e, t) : i._visibility & 2 ? gn(
          e,
          t,
          n,
          a
        ) : (i._visibility |= 2, Wl(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), l & 2048 && ws(u, t);
        break;
      case 24:
        gn(
          e,
          t,
          n,
          a
        ), l & 2048 && Ts(t.alternate, t);
        break;
      default:
        gn(
          e,
          t,
          n,
          a
        );
    }
  }
  function Wl(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, u = t, d = n, m = a, x = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Wl(
            i,
            u,
            d,
            m,
            l
          ), Pr(8, u);
          break;
        case 23:
          break;
        case 22:
          var N = u.stateNode;
          u.memoizedState !== null ? N._visibility & 2 ? Wl(
            i,
            u,
            d,
            m,
            l
          ) : Zr(
            i,
            u
          ) : (N._visibility |= 2, Wl(
            i,
            u,
            d,
            m,
            l
          )), l && x & 2048 && ws(
            u.alternate,
            u
          );
          break;
        case 24:
          Wl(
            i,
            u,
            d,
            m,
            l
          ), l && x & 2048 && Ts(u.alternate, u);
          break;
        default:
          Wl(
            i,
            u,
            d,
            m,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Zr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, l = a.flags;
        switch (a.tag) {
          case 22:
            Zr(n, a), l & 2048 && ws(
              a.alternate,
              a
            );
            break;
          case 24:
            Zr(n, a), l & 2048 && Ts(a.alternate, a);
            break;
          default:
            Zr(n, a);
        }
        t = t.sibling;
      }
  }
  var Wr = 8192;
  function Jl(e, t, n) {
    if (e.subtreeFlags & Wr)
      for (e = e.child; e !== null; )
        np(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function np(e, t, n) {
    switch (e.tag) {
      case 26:
        Jl(
          e,
          t,
          n
        ), e.flags & Wr && e.memoizedState !== null && Dy(
          n,
          hn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Jl(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = hn;
        hn = xo(e.stateNode.containerInfo), Jl(
          e,
          t,
          n
        ), hn = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Wr, Wr = 16777216, Jl(
          e,
          t,
          n
        ), Wr = a) : Jl(
          e,
          t,
          n
        ));
        break;
      default:
        Jl(
          e,
          t,
          n
        );
    }
  }
  function ap(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Jr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          lt = a, rp(
            a,
            e
          );
        }
      ap(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        lp(e), e = e.sibling;
  }
  function lp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Jr(e), e.flags & 2048 && Aa(9, e, e.return);
        break;
      case 3:
        Jr(e);
        break;
      case 12:
        Jr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, fo(e)) : Jr(e);
        break;
      default:
        Jr(e);
    }
  }
  function fo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          lt = a, rp(
            a,
            e
          );
        }
      ap(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Aa(8, t, t.return), fo(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, fo(t));
          break;
        default:
          fo(t);
      }
      e = e.sibling;
    }
  }
  function rp(e, t) {
    for (; lt !== null; ) {
      var n = lt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Aa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          jr(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, lt = a;
      else
        e: for (n = e; lt !== null; ) {
          a = lt;
          var l = a.sibling, i = a.return;
          if (Pd(a), a === n) {
            lt = null;
            break e;
          }
          if (l !== null) {
            l.return = i, lt = l;
            break e;
          }
          lt = i;
        }
    }
  }
  var $g = {
    getCacheForType: function(e) {
      var t = ut($e), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return ut($e).controller.signal;
    }
  }, Pg = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, Ce = null, fe = null, pe = 0, xe = 0, Vt = null, za = !1, er = !1, ks = !1, Wn = 0, Ge = 0, Na = 0, bl = 0, Es = 0, Gt = 0, tr = 0, ei = null, Ct = null, xs = !1, po = 0, ip = 0, mo = 1 / 0, ho = null, Oa = null, et = 0, Ca = null, nr = null, Jn = 0, _s = 0, As = null, op = null, ti = 0, zs = null;
  function Yt() {
    return (Te & 2) !== 0 && pe !== 0 ? pe & -pe : L.T !== null ? Ms() : fa();
  }
  function up() {
    if (Gt === 0)
      if ((pe & 536870912) === 0 || ge) {
        var e = Wa;
        Wa <<= 1, (Wa & 3932160) === 0 && (Wa = 262144), Gt = e;
      } else Gt = 536870912;
    return e = Bt.current, e !== null && (e.flags |= 32), Gt;
  }
  function Rt(e, t, n) {
    (e === Ce && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (ar(e, 0), Ra(
      e,
      pe,
      Gt,
      !1
    )), jn(e, n), ((Te & 2) === 0 || e !== Ce) && (e === Ce && ((Te & 2) === 0 && (bl |= n), Ge === 4 && Ra(
      e,
      pe,
      Gt,
      !1
    )), zn(e));
  }
  function sp(e, t, n) {
    if ((Te & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || wn(e, t), l = a ? Wg(e, t) : Os(e, t, !0), i = a;
    do {
      if (l === 0) {
        er && !a && Ra(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Kg(n)) {
          l = Os(e, t, !1), i = !1;
          continue;
        }
        if (l === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var u = 0;
          else
            u = e.pendingLanes & -536870913, u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
          if (u !== 0) {
            t = u;
            e: {
              var d = e;
              l = ei;
              var m = d.current.memoizedState.isDehydrated;
              if (m && (ar(d, u).flags |= 256), u = Os(
                d,
                u,
                !1
              ), u !== 2) {
                if (ks && !m) {
                  d.errorRecoveryDisabledLanes |= i, bl |= i, l = 4;
                  break e;
                }
                i = Ct, Ct = l, i !== null && (Ct === null ? Ct = i : Ct.push.apply(
                  Ct,
                  i
                ));
              }
              l = u;
            }
            if (i = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          ar(e, 0), Ra(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, i = l, i) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ra(
                a,
                t,
                Gt,
                !za
              );
              break e;
            case 2:
              Ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (l = po + 300 - Ye(), 10 < l)) {
            if (Ra(
              a,
              t,
              Gt,
              !za
            ), Mn(a, 0, !0) !== 0) break e;
            Jn = t, a.timeoutHandle = qp(
              cp.bind(
                null,
                a,
                n,
                Ct,
                ho,
                xs,
                t,
                Gt,
                bl,
                tr,
                za,
                i,
                "Throttled",
                -0,
                0
              ),
              l
            );
            break e;
          }
          cp(
            a,
            n,
            Ct,
            ho,
            xs,
            t,
            Gt,
            bl,
            tr,
            za,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    zn(e);
  }
  function cp(e, t, n, a, l, i, u, d, m, x, N, M, _, A) {
    if (e.timeoutHandle = -1, M = t.subtreeFlags, M & 8192 || (M & 16785408) === 16785408) {
      M = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: it
      }, np(
        t,
        i,
        M
      );
      var X = (i & 62914560) === i ? po - Ye() : (i & 4194048) === i ? ip - Ye() : 0;
      if (X = My(
        M,
        X
      ), X !== null) {
        Jn = i, e.cancelPendingCommit = X(
          bp.bind(
            null,
            e,
            t,
            i,
            n,
            a,
            l,
            u,
            d,
            m,
            N,
            M,
            null,
            _,
            A
          )
        ), Ra(e, i, u, !x);
        return;
      }
    }
    bp(
      e,
      t,
      i,
      n,
      a,
      l,
      u,
      d,
      m
    );
  }
  function Kg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var l = n[a], i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ut(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ra(e, t, n, a) {
    t &= ~Es, t &= ~bl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var i = 31 - rt(l), u = 1 << i;
      a[i] = -1, l &= ~u;
    }
    n !== 0 && gr(e, n, t);
  }
  function go() {
    return (Te & 6) === 0 ? (ni(0), !1) : !0;
  }
  function Ns() {
    if (fe !== null) {
      if (xe === 0)
        var e = fe.return;
      else
        e = fe, Gn = sl = null, Xu(e), Ql = null, Hr = 0, e = fe;
      for (; e !== null; )
        Vd(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function ar(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, gy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Jn = 0, Ns(), Ce = e, fe = n = qn(e.current, null), pe = t, xe = 0, Vt = null, za = !1, er = wn(e, t), ks = !1, tr = Gt = Es = bl = Na = Ge = 0, Ct = ei = null, xs = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - rt(a), i = 1 << l;
        t |= e[l], a &= ~i;
      }
    return Wn = t, ji(), n;
  }
  function fp(e, t) {
    ae = null, L.H = Ir, t === Il || t === Fi ? (t = Af(), xe = 3) : t === Du ? (t = Af(), xe = 4) : xe = t === os ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, fe === null && (Ge = 1, lo(
      e,
      Kt(t, e.current)
    ));
  }
  function dp() {
    var e = Bt.current;
    return e === null ? !0 : (pe & 4194048) === pe ? un === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? e === un : !1;
  }
  function pp() {
    var e = L.H;
    return L.H = Ir, e === null ? Ir : e;
  }
  function mp() {
    var e = L.A;
    return L.A = $g, e;
  }
  function yo() {
    Ge = 4, za || (pe & 4194048) !== pe && Bt.current !== null || (er = !0), (Na & 134217727) === 0 && (bl & 134217727) === 0 || Ce === null || Ra(
      Ce,
      pe,
      Gt,
      !1
    );
  }
  function Os(e, t, n) {
    var a = Te;
    Te |= 2;
    var l = pp(), i = mp();
    (Ce !== e || pe !== t) && (ho = null, ar(e, t)), t = !1;
    var u = Ge;
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          var d = fe, m = Vt;
          switch (xe) {
            case 8:
              Ns(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Bt.current === null && (t = !0);
              var x = xe;
              if (xe = 0, Vt = null, lr(e, d, m, x), n && er) {
                u = 0;
                break e;
              }
              break;
            default:
              x = xe, xe = 0, Vt = null, lr(e, d, m, x);
          }
        }
        Zg(), u = Ge;
        break;
      } catch (N) {
        fp(e, N);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = sl = null, Te = a, L.H = l, L.A = i, fe === null && (Ce = null, pe = 0, ji()), u;
  }
  function Zg() {
    for (; fe !== null; ) hp(fe);
  }
  function Wg(e, t) {
    var n = Te;
    Te |= 2;
    var a = pp(), l = mp();
    Ce !== e || pe !== t ? (ho = null, mo = Ye() + 500, ar(e, t)) : er = wn(
      e,
      t
    );
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          t = fe;
          var i = Vt;
          t: switch (xe) {
            case 1:
              xe = 0, Vt = null, lr(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (xf(i)) {
                xe = 0, Vt = null, gp(t);
                break;
              }
              t = function() {
                xe !== 2 && xe !== 9 || Ce !== e || (xe = 7), zn(e);
              }, i.then(t, t);
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              xf(i) ? (xe = 0, Vt = null, gp(t)) : (xe = 0, Vt = null, lr(e, t, i, 7));
              break;
            case 5:
              var u = null;
              switch (fe.tag) {
                case 26:
                  u = fe.memoizedState;
                case 5:
                case 27:
                  var d = fe;
                  if (u ? tm(u) : d.stateNode.complete) {
                    xe = 0, Vt = null;
                    var m = d.sibling;
                    if (m !== null) fe = m;
                    else {
                      var x = d.return;
                      x !== null ? (fe = x, bo(x)) : fe = null;
                    }
                    break t;
                  }
              }
              xe = 0, Vt = null, lr(e, t, i, 5);
              break;
            case 6:
              xe = 0, Vt = null, lr(e, t, i, 6);
              break;
            case 8:
              Ns(), Ge = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Jg();
        break;
      } catch (N) {
        fp(e, N);
      }
    while (!0);
    return Gn = sl = null, L.H = a, L.A = l, Te = n, fe !== null ? 0 : (Ce = null, pe = 0, ji(), Ge);
  }
  function Jg() {
    for (; fe !== null && !vn(); )
      hp(fe);
  }
  function hp(e) {
    var t = Bd(e.alternate, e, Wn);
    e.memoizedProps = e.pendingProps, t === null ? bo(e) : fe = t;
  }
  function gp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Dd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          pe
        );
        break;
      case 11:
        t = Dd(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          pe
        );
        break;
      case 5:
        Xu(t);
      default:
        Vd(n, t), t = fe = mf(t, Wn), t = Bd(n, t, Wn);
    }
    e.memoizedProps = e.pendingProps, t === null ? bo(e) : fe = t;
  }
  function lr(e, t, n, a) {
    Gn = sl = null, Xu(t), Ql = null, Hr = 0;
    var l = t.return;
    try {
      if (Vg(
        e,
        l,
        t,
        n,
        pe
      )) {
        Ge = 1, lo(
          e,
          Kt(n, e.current)
        ), fe = null;
        return;
      }
    } catch (i) {
      if (l !== null) throw fe = l, i;
      Ge = 1, lo(
        e,
        Kt(n, e.current)
      ), fe = null;
      return;
    }
    t.flags & 32768 ? (ge || a === 1 ? e = !0 : er || (pe & 536870912) !== 0 ? e = !1 : (za = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Bt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), yp(t, e)) : bo(t);
  }
  function bo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        yp(
          t,
          za
        );
        return;
      }
      e = t.return;
      var n = Fg(
        t.alternate,
        t,
        Wn
      );
      if (n !== null) {
        fe = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }
  function yp(e, t) {
    do {
      var n = Xg(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, fe = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        fe = e;
        return;
      }
      fe = e = n;
    } while (e !== null);
    Ge = 6, fe = null;
  }
  function bp(e, t, n, a, l, i, u, d, m) {
    e.cancelPendingCommit = null;
    do
      vo();
    while (et !== 0);
    if ((Te & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (i = t.lanes | t.childLanes, i |= bu, Jo(
        e,
        n,
        i,
        u,
        d,
        m
      ), e === Ce && (fe = Ce = null, pe = 0), nr = t, Ca = e, Jn = n, _s = i, As = l, op = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ay(ia, function() {
        return kp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = L.T, L.T = null, l = G.p, G.p = 2, u = Te, Te |= 4;
        try {
          Ig(e, t, n);
        } finally {
          Te = u, G.p = l, L.T = a;
        }
      }
      et = 1, vp(), Sp(), wp();
    }
  }
  function vp() {
    if (et === 1) {
      et = 0;
      var e = Ca, t = nr, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = L.T, L.T = null;
        var a = G.p;
        G.p = 2;
        var l = Te;
        Te |= 4;
        try {
          Jd(t, e);
          var i = Gs, u = lf(e.containerInfo), d = i.focusedElem, m = i.selectionRange;
          if (u !== d && d && d.ownerDocument && af(
            d.ownerDocument.documentElement,
            d
          )) {
            if (m !== null && pu(d)) {
              var x = m.start, N = m.end;
              if (N === void 0 && (N = x), "selectionStart" in d)
                d.selectionStart = x, d.selectionEnd = Math.min(
                  N,
                  d.value.length
                );
              else {
                var M = d.ownerDocument || document, _ = M && M.defaultView || window;
                if (_.getSelection) {
                  var A = _.getSelection(), X = d.textContent.length, te = Math.min(m.start, X), Oe = m.end === void 0 ? te : Math.min(m.end, X);
                  !A.extend && te > Oe && (u = Oe, Oe = te, te = u);
                  var w = nf(
                    d,
                    te
                  ), b = nf(
                    d,
                    Oe
                  );
                  if (w && b && (A.rangeCount !== 1 || A.anchorNode !== w.node || A.anchorOffset !== w.offset || A.focusNode !== b.node || A.focusOffset !== b.offset)) {
                    var E = M.createRange();
                    E.setStart(w.node, w.offset), A.removeAllRanges(), te > Oe ? (A.addRange(E), A.extend(b.node, b.offset)) : (E.setEnd(b.node, b.offset), A.addRange(E));
                  }
                }
              }
            }
            for (M = [], A = d; A = A.parentNode; )
              A.nodeType === 1 && M.push({
                element: A,
                left: A.scrollLeft,
                top: A.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < M.length; d++) {
              var D = M[d];
              D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
            }
          }
          Co = !!Vs, Gs = Vs = null;
        } finally {
          Te = l, G.p = a, L.T = n;
        }
      }
      e.current = t, et = 2;
    }
  }
  function Sp() {
    if (et === 2) {
      et = 0;
      var e = Ca, t = nr, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = L.T, L.T = null;
        var a = G.p;
        G.p = 2;
        var l = Te;
        Te |= 4;
        try {
          $d(e, t.alternate, t);
        } finally {
          Te = l, G.p = a, L.T = n;
        }
      }
      et = 3;
    }
  }
  function wp() {
    if (et === 4 || et === 3) {
      et = 0, Pa();
      var e = Ca, t = nr, n = Jn, a = op;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? et = 5 : (et = 0, nr = Ca = null, Tp(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (l === 0 && (Oa = null), br(n), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function")
        try {
          pt.onCommitFiberRoot(
            ua,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = L.T, l = G.p, G.p = 2, L.T = null;
        try {
          for (var i = e.onRecoverableError, u = 0; u < a.length; u++) {
            var d = a[u];
            i(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          L.T = t, G.p = l;
        }
      }
      (Jn & 3) !== 0 && vo(), zn(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === zs ? ti++ : (ti = 0, zs = e) : ti = 0, ni(0);
    }
  }
  function Tp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, jr(t)));
  }
  function vo() {
    return vp(), Sp(), wp(), kp();
  }
  function kp() {
    if (et !== 5) return !1;
    var e = Ca, t = _s;
    _s = 0;
    var n = br(Jn), a = L.T, l = G.p;
    try {
      G.p = 32 > n ? 32 : n, L.T = null, n = As, As = null;
      var i = Ca, u = Jn;
      if (et = 0, nr = Ca = null, Jn = 0, (Te & 6) !== 0) throw Error(c(331));
      var d = Te;
      if (Te |= 4, lp(i.current), tp(
        i,
        i.current,
        u,
        n
      ), Te = d, ni(0, !1), pt && typeof pt.onPostCommitFiberRoot == "function")
        try {
          pt.onPostCommitFiberRoot(ua, i);
        } catch {
        }
      return !0;
    } finally {
      G.p = l, L.T = a, Tp(e, t);
    }
  }
  function Ep(e, t, n) {
    t = Kt(n, t), t = is(e.stateNode, t, 2), e = Ea(e, t, 2), e !== null && (jn(e, 2), zn(e));
  }
  function _e(e, t, n) {
    if (e.tag === 3)
      Ep(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ep(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Oa === null || !Oa.has(a))) {
            e = Kt(n, e), n = xd(2), a = Ea(t, n, 2), a !== null && (_d(
              n,
              a,
              t,
              e
            ), jn(a, 2), zn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Cs(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Pg();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (ks = !0, l.add(n), e = ey.bind(null, e, t, n), t.then(e, e));
  }
  function ey(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ce === e && (pe & n) === n && (Ge === 4 || Ge === 3 && (pe & 62914560) === pe && 300 > Ye() - po ? (Te & 2) === 0 && ar(e, 0) : Es |= n, tr === pe && (tr = 0)), zn(e);
  }
  function xp(e, t) {
    t === 0 && (t = Ln()), e = il(e, t), e !== null && (jn(e, t), zn(e));
  }
  function ty(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), xp(e, n);
  }
  function ny(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    a !== null && a.delete(t), xp(e, n);
  }
  function ay(e, t) {
    return Tl(e, t);
  }
  var So = null, rr = null, Rs = !1, wo = !1, Ds = !1, Da = 0;
  function zn(e) {
    e !== rr && e.next === null && (rr === null ? So = rr = e : rr = rr.next = e), wo = !0, Rs || (Rs = !0, ry());
  }
  function ni(e, t) {
    if (!Ds && wo) {
      Ds = !0;
      do
        for (var n = !1, a = So; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var u = a.suspendedLanes, d = a.pingedLanes;
              i = (1 << 31 - rt(42 | e) + 1) - 1, i &= l & ~(u & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, Np(a, i));
          } else
            i = pe, i = Mn(
              a,
              a === Ce ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || wn(a, i) || (n = !0, Np(a, i));
          a = a.next;
        }
      while (n);
      Ds = !1;
    }
  }
  function ly() {
    _p();
  }
  function _p() {
    wo = Rs = !1;
    var e = 0;
    Da !== 0 && hy() && (e = Da);
    for (var t = Ye(), n = null, a = So; a !== null; ) {
      var l = a.next, i = Ap(a, t);
      i === 0 ? (a.next = null, n === null ? So = l : n.next = l, l === null && (rr = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (wo = !0)), a = l;
    }
    et !== 0 && et !== 5 || ni(e), Da !== 0 && (Da = 0);
  }
  function Ap(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - rt(i), d = 1 << u, m = l[u];
      m === -1 ? ((d & n) === 0 || (d & a) !== 0) && (l[u] = $t(d, t)) : m <= t && (e.expiredLanes |= d), i &= ~d;
    }
    if (t = Ce, n = pe, n = Mn(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && kl(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || wn(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && kl(a), br(n)) {
        case 2:
        case 8:
          n = xl;
          break;
        case 32:
          n = ia;
          break;
        case 268435456:
          n = Ka;
          break;
        default:
          n = ia;
      }
      return a = zp.bind(null, e), n = Tl(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && kl(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function zp(e, t) {
    if (et !== 0 && et !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (vo() && e.callbackNode !== n)
      return null;
    var a = pe;
    return a = Mn(
      e,
      e === Ce ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (sp(e, a, t), Ap(e, Ye()), e.callbackNode != null && e.callbackNode === n ? zp.bind(null, e) : null);
  }
  function Np(e, t) {
    if (vo()) return null;
    sp(e, t, !0);
  }
  function ry() {
    yy(function() {
      (Te & 6) !== 0 ? Tl(
        El,
        ly
      ) : _p();
    });
  }
  function Ms() {
    if (Da === 0) {
      var e = Fl;
      e === 0 && (e = Za, Za <<= 1, (Za & 261888) === 0 && (Za = 256)), Da = e;
    }
    return Da;
  }
  function Op(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _t("" + e);
  }
  function Cp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function iy(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = Op(
        (l[Fe] || null).action
      ), u = a.submitter;
      u && (t = (t = u[Fe] || null) ? Op(t.formAction) : u.getAttribute("formAction"), t !== null && (i = t, u = null));
      var d = new Ri(
        "action",
        "action",
        null,
        a,
        l
      );
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Da !== 0) {
                  var m = u ? Cp(l, u) : new FormData(l);
                  es(
                    n,
                    {
                      pending: !0,
                      data: m,
                      method: l.method,
                      action: i
                    },
                    null,
                    m
                  );
                }
              } else
                typeof i == "function" && (d.preventDefault(), m = u ? Cp(l, u) : new FormData(l), es(
                  n,
                  {
                    pending: !0,
                    data: m,
                    method: l.method,
                    action: i
                  },
                  i,
                  m
                ));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var Ls = 0; Ls < yu.length; Ls++) {
    var js = yu[Ls], oy = js.toLowerCase(), uy = js[0].toUpperCase() + js.slice(1);
    mn(
      oy,
      "on" + uy
    );
  }
  mn(uf, "onAnimationEnd"), mn(sf, "onAnimationIteration"), mn(cf, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(Eg, "onTransitionRun"), mn(xg, "onTransitionStart"), mn(_g, "onTransitionCancel"), mn(ff, "onTransitionEnd"), Hn("onMouseEnter", ["mouseout", "mouseover"]), Hn("onMouseLeave", ["mouseout", "mouseover"]), Hn("onPointerEnter", ["pointerout", "pointerover"]), Hn("onPointerLeave", ["pointerout", "pointerover"]), kn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), kn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), kn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), kn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), kn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), kn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), sy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai)
  );
  function Rp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = a.length - 1; 0 <= u; u--) {
            var d = a[u], m = d.instance, x = d.currentTarget;
            if (d = d.listener, m !== i && l.isPropagationStopped())
              break e;
            i = d, l.currentTarget = x;
            try {
              i(l);
            } catch (N) {
              Li(N);
            }
            l.currentTarget = null, i = m;
          }
        else
          for (u = 0; u < a.length; u++) {
            if (d = a[u], m = d.instance, x = d.currentTarget, d = d.listener, m !== i && l.isPropagationStopped())
              break e;
            i = d, l.currentTarget = x;
            try {
              i(l);
            } catch (N) {
              Li(N);
            }
            l.currentTarget = null, i = m;
          }
      }
    }
  }
  function de(e, t) {
    var n = t[zl];
    n === void 0 && (n = t[zl] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Dp(t, e, 2, !1), n.add(a));
  }
  function Us(e, t, n) {
    var a = 0;
    t && (a |= 4), Dp(
      n,
      e,
      a,
      t
    );
  }
  var To = "_reactListening" + Math.random().toString(36).slice(2);
  function Hs(e) {
    if (!e[To]) {
      e[To] = !0, _i.forEach(function(n) {
        n !== "selectionchange" && (sy.has(n) || Us(n, !1, e), Us(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[To] || (t[To] = !0, Us("selectionchange", !1, t));
    }
  }
  function Dp(e, t, n, a) {
    switch (um(t)) {
      case 2:
        var l = Uy;
        break;
      case 8:
        l = Hy;
        break;
      default:
        l = Js;
    }
    n = l.bind(
      null,
      t,
      n,
      e
    ), l = void 0, !lu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, !1);
  }
  function Bs(e, t, n, a, l) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var d = a.stateNode.containerInfo;
          if (d === l) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var m = u.tag;
              if ((m === 3 || m === 4) && u.stateNode.containerInfo === l)
                return;
              u = u.return;
            }
          for (; d !== null; ) {
            if (u = pa(d), u === null) return;
            if (m = u.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = i = u;
              continue e;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    Uc(function() {
      var x = i, N = nu(n), M = [];
      e: {
        var _ = df.get(e);
        if (_ !== void 0) {
          var A = Ri, X = e;
          switch (e) {
            case "keypress":
              if (Oi(n) === 0) break e;
            case "keydown":
            case "keyup":
              A = ng;
              break;
            case "focusin":
              X = "focus", A = uu;
              break;
            case "focusout":
              X = "blur", A = uu;
              break;
            case "beforeblur":
            case "afterblur":
              A = uu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = qc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = Fh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = rg;
              break;
            case uf:
            case sf:
            case cf:
              A = Qh;
              break;
            case ff:
              A = og;
              break;
            case "scroll":
            case "scrollend":
              A = Gh;
              break;
            case "wheel":
              A = sg;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = Ph;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = Gc;
              break;
            case "toggle":
            case "beforetoggle":
              A = fg;
          }
          var te = (t & 4) !== 0, Oe = !te && (e === "scroll" || e === "scrollend"), w = te ? _ !== null ? _ + "Capture" : null : _;
          te = [];
          for (var b = x, E; b !== null; ) {
            var D = b;
            if (E = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || E === null || w === null || (D = xr(b, w), D != null && te.push(
              li(b, D, E)
            )), Oe) break;
            b = b.return;
          }
          0 < te.length && (_ = new A(
            _,
            X,
            null,
            n,
            N
          ), M.push({ event: _, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_ = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", _ && n !== tu && (X = n.relatedTarget || n.fromElement) && (pa(X) || X[da]))
            break e;
          if ((A || _) && (_ = N.window === N ? N : (_ = N.ownerDocument) ? _.defaultView || _.parentWindow : window, A ? (X = n.relatedTarget || n.toElement, A = x, X = X ? pa(X) : null, X !== null && (Oe = g(X), te = X.tag, X !== Oe || te !== 5 && te !== 27 && te !== 6) && (X = null)) : (A = null, X = x), A !== X)) {
            if (te = qc, D = "onMouseLeave", w = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (te = Gc, D = "onPointerLeave", w = "onPointerEnter", b = "pointer"), Oe = A == null ? _ : Dt(A), E = X == null ? _ : Dt(X), _ = new te(
              D,
              b + "leave",
              A,
              n,
              N
            ), _.target = Oe, _.relatedTarget = E, D = null, pa(N) === x && (te = new te(
              w,
              b + "enter",
              X,
              n,
              N
            ), te.target = E, te.relatedTarget = Oe, D = te), Oe = D, A && X)
              t: {
                for (te = cy, w = A, b = X, E = 0, D = w; D; D = te(D))
                  E++;
                D = 0;
                for (var W = b; W; W = te(W))
                  D++;
                for (; 0 < E - D; )
                  w = te(w), E--;
                for (; 0 < D - E; )
                  b = te(b), D--;
                for (; E--; ) {
                  if (w === b || b !== null && w === b.alternate) {
                    te = w;
                    break t;
                  }
                  w = te(w), b = te(b);
                }
                te = null;
              }
            else te = null;
            A !== null && Mp(
              M,
              _,
              A,
              te,
              !1
            ), X !== null && Oe !== null && Mp(
              M,
              Oe,
              X,
              te,
              !0
            );
          }
        }
        e: {
          if (_ = x ? Dt(x) : window, A = _.nodeName && _.nodeName.toLowerCase(), A === "select" || A === "input" && _.type === "file")
            var ve = Kc;
          else if ($c(_))
            if (Zc)
              ve = wg;
            else {
              ve = vg;
              var Q = bg;
            }
          else
            A = _.nodeName, !A || A.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? x && at(x.elementType) && (ve = Kc) : ve = Sg;
          if (ve && (ve = ve(e, x))) {
            Pc(
              M,
              ve,
              n,
              N
            );
            break e;
          }
          Q && Q(e, _, x), e === "focusout" && x && _.type === "number" && x.memoizedProps.value != null && v(_, "number", _.value);
        }
        switch (Q = x ? Dt(x) : window, e) {
          case "focusin":
            ($c(Q) || Q.contentEditable === "true") && (jl = Q, mu = x, Dr = null);
            break;
          case "focusout":
            Dr = mu = jl = null;
            break;
          case "mousedown":
            hu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hu = !1, rf(M, n, N);
            break;
          case "selectionchange":
            if (kg) break;
          case "keydown":
          case "keyup":
            rf(M, n, N);
        }
        var le;
        if (cu)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          Ll ? Ic(e, n) && (me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (me = "onCompositionStart");
        me && (Yc && n.locale !== "ko" && (Ll || me !== "onCompositionStart" ? me === "onCompositionEnd" && Ll && (le = Hc()) : (ya = N, ru = "value" in ya ? ya.value : ya.textContent, Ll = !0)), Q = ko(x, me), 0 < Q.length && (me = new Vc(
          me,
          e,
          null,
          n,
          N
        ), M.push({ event: me, listeners: Q }), le ? me.data = le : (le = Qc(n), le !== null && (me.data = le)))), (le = pg ? mg(e, n) : hg(e, n)) && (me = ko(x, "onBeforeInput"), 0 < me.length && (Q = new Vc(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          N
        ), M.push({
          event: Q,
          listeners: me
        }), Q.data = le)), iy(
          M,
          e,
          x,
          n,
          N
        );
      }
      Rp(M, t);
    });
  }
  function li(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function ko(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, i = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = xr(e, n), l != null && a.unshift(
        li(e, l, i)
      ), l = xr(e, t), l != null && a.push(
        li(e, l, i)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function cy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Mp(e, t, n, a, l) {
    for (var i = t._reactName, u = []; n !== null && n !== a; ) {
      var d = n, m = d.alternate, x = d.stateNode;
      if (d = d.tag, m !== null && m === a) break;
      d !== 5 && d !== 26 && d !== 27 || x === null || (m = x, l ? (x = xr(n, i), x != null && u.unshift(
        li(n, x, m)
      )) : l || (x = xr(n, i), x != null && u.push(
        li(n, x, m)
      ))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var fy = /\r\n?/g, dy = /\u0000|\uFFFD/g;
  function Lp(e) {
    return (typeof e == "string" ? e : "" + e).replace(fy, `
`).replace(dy, "");
  }
  function jp(e, t) {
    return t = Lp(t), Lp(e) === t;
  }
  function Ne(e, t, n, a, l, i) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || K(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && K(e, "" + a);
        break;
      case "className":
        Et(e, "class", a);
        break;
      case "tabIndex":
        Et(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Et(e, n, a);
        break;
      case "style":
        mt(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          Et(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = _t("" + a), e.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (n === "formAction" ? (t !== "input" && Ne(e, t, "name", l.name, l, null), Ne(
            e,
            t,
            "formEncType",
            l.formEncType,
            l,
            null
          ), Ne(
            e,
            t,
            "formMethod",
            l.formMethod,
            l,
            null
          ), Ne(
            e,
            t,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (Ne(e, t, "encType", l.encType, l, null), Ne(e, t, "method", l.method, l, null), Ne(e, t, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = _t("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = it);
        break;
      case "onScroll":
        a != null && de("scroll", e);
        break;
      case "onScrollEnd":
        a != null && de("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = _t("" + a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
        break;
      case "popover":
        de("beforetoggle", e), de("toggle", e), En(e, "popover", a);
        break;
      case "xlinkActuate":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        En(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = vt.get(n) || n, En(e, n, a));
    }
  }
  function qs(e, t, n, a, l, i) {
    switch (n) {
      case "style":
        mt(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? K(e, a) : (typeof a == "number" || typeof a == "bigint") && K(e, "" + a);
        break;
      case "onScroll":
        a != null && de("scroll", e);
        break;
      case "onScrollEnd":
        a != null && de("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = it);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ai.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), i = e[Fe] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, l), typeof a == "function")) {
              typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : En(e, n, a);
          }
    }
  }
  function ct(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        de("error", e), de("load", e);
        var a = !1, l = !1, i;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var u = n[i];
            if (u != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Ne(e, t, i, u, n, null);
              }
          }
        l && Ne(e, t, "srcSet", n.srcSet, n, null), a && Ne(e, t, "src", n.src, n, null);
        return;
      case "input":
        de("invalid", e);
        var d = i = u = l = null, m = null, x = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var N = n[a];
            if (N != null)
              switch (a) {
                case "name":
                  l = N;
                  break;
                case "type":
                  u = N;
                  break;
                case "checked":
                  m = N;
                  break;
                case "defaultChecked":
                  x = N;
                  break;
                case "value":
                  i = N;
                  break;
                case "defaultValue":
                  d = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Ne(e, t, a, N, n, null);
              }
          }
        Rl(
          e,
          i,
          d,
          m,
          x,
          u,
          l,
          !1
        );
        return;
      case "select":
        de("invalid", e), a = u = i = null;
        for (l in n)
          if (n.hasOwnProperty(l) && (d = n[l], d != null))
            switch (l) {
              case "value":
                i = d;
                break;
              case "defaultValue":
                u = d;
                break;
              case "multiple":
                a = d;
              default:
                Ne(e, t, l, d, n, null);
            }
        t = i, n = u, e.multiple = !!a, t != null ? y(e, !!a, t, !1) : n != null && y(e, !!a, n, !0);
        return;
      case "textarea":
        de("invalid", e), i = l = a = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (d = n[u], d != null))
            switch (u) {
              case "value":
                a = d;
                break;
              case "defaultValue":
                l = d;
                break;
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(c(91));
                break;
              default:
                Ne(e, t, u, d, n, null);
            }
        q(e, a, l, i);
        return;
      case "option":
        for (m in n)
          if (n.hasOwnProperty(m) && (a = n[m], a != null))
            switch (m) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ne(e, t, m, a, n, null);
            }
        return;
      case "dialog":
        de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
        break;
      case "iframe":
      case "object":
        de("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ai.length; a++)
          de(ai[a], e);
        break;
      case "image":
        de("error", e), de("load", e);
        break;
      case "details":
        de("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        de("error", e), de("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (x in n)
          if (n.hasOwnProperty(x) && (a = n[x], a != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ne(e, t, x, a, n, null);
            }
        return;
      default:
        if (at(t)) {
          for (N in n)
            n.hasOwnProperty(N) && (a = n[N], a !== void 0 && qs(
              e,
              t,
              N,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (d in n)
      n.hasOwnProperty(d) && (a = n[d], a != null && Ne(e, t, d, a, n, null));
  }
  function py(e, t, n, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var l = null, i = null, u = null, d = null, m = null, x = null, N = null;
        for (A in n) {
          var M = n[A];
          if (n.hasOwnProperty(A) && M != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = M;
              default:
                a.hasOwnProperty(A) || Ne(e, t, A, null, a, M);
            }
        }
        for (var _ in a) {
          var A = a[_];
          if (M = n[_], a.hasOwnProperty(_) && (A != null || M != null))
            switch (_) {
              case "type":
                i = A;
                break;
              case "name":
                l = A;
                break;
              case "checked":
                x = A;
                break;
              case "defaultChecked":
                N = A;
                break;
              case "value":
                u = A;
                break;
              case "defaultValue":
                d = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(c(137, t));
                break;
              default:
                A !== M && Ne(
                  e,
                  t,
                  _,
                  A,
                  a,
                  M
                );
            }
        }
        ga(
          e,
          u,
          d,
          m,
          x,
          N,
          i,
          l
        );
        return;
      case "select":
        A = u = d = _ = null;
        for (i in n)
          if (m = n[i], n.hasOwnProperty(i) && m != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                A = m;
              default:
                a.hasOwnProperty(i) || Ne(
                  e,
                  t,
                  i,
                  null,
                  a,
                  m
                );
            }
        for (l in a)
          if (i = a[l], m = n[l], a.hasOwnProperty(l) && (i != null || m != null))
            switch (l) {
              case "value":
                _ = i;
                break;
              case "defaultValue":
                d = i;
                break;
              case "multiple":
                u = i;
              default:
                i !== m && Ne(
                  e,
                  t,
                  l,
                  i,
                  a,
                  m
                );
            }
        t = d, n = u, a = A, _ != null ? y(e, !!n, _, !1) : !!a != !!n && (t != null ? y(e, !!n, t, !0) : y(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        A = _ = null;
        for (d in n)
          if (l = n[d], n.hasOwnProperty(d) && l != null && !a.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ne(e, t, d, null, a, l);
            }
        for (u in a)
          if (l = a[u], i = n[u], a.hasOwnProperty(u) && (l != null || i != null))
            switch (u) {
              case "value":
                _ = l;
                break;
              case "defaultValue":
                A = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(c(91));
                break;
              default:
                l !== i && Ne(e, t, u, l, a, i);
            }
        z(e, _, A);
        return;
      case "option":
        for (var X in n)
          if (_ = n[X], n.hasOwnProperty(X) && _ != null && !a.hasOwnProperty(X))
            switch (X) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ne(
                  e,
                  t,
                  X,
                  null,
                  a,
                  _
                );
            }
        for (m in a)
          if (_ = a[m], A = n[m], a.hasOwnProperty(m) && _ !== A && (_ != null || A != null))
            switch (m) {
              case "selected":
                e.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                Ne(
                  e,
                  t,
                  m,
                  _,
                  a,
                  A
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var te in n)
          _ = n[te], n.hasOwnProperty(te) && _ != null && !a.hasOwnProperty(te) && Ne(e, t, te, null, a, _);
        for (x in a)
          if (_ = a[x], A = n[x], a.hasOwnProperty(x) && _ !== A && (_ != null || A != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(c(137, t));
                break;
              default:
                Ne(
                  e,
                  t,
                  x,
                  _,
                  a,
                  A
                );
            }
        return;
      default:
        if (at(t)) {
          for (var Oe in n)
            _ = n[Oe], n.hasOwnProperty(Oe) && _ !== void 0 && !a.hasOwnProperty(Oe) && qs(
              e,
              t,
              Oe,
              void 0,
              a,
              _
            );
          for (N in a)
            _ = a[N], A = n[N], !a.hasOwnProperty(N) || _ === A || _ === void 0 && A === void 0 || qs(
              e,
              t,
              N,
              _,
              a,
              A
            );
          return;
        }
    }
    for (var w in n)
      _ = n[w], n.hasOwnProperty(w) && _ != null && !a.hasOwnProperty(w) && Ne(e, t, w, null, a, _);
    for (M in a)
      _ = a[M], A = n[M], !a.hasOwnProperty(M) || _ === A || _ == null && A == null || Ne(e, t, M, _, a, A);
  }
  function Up(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function my() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], i = l.transferSize, u = l.initiatorType, d = l.duration;
        if (i && d && Up(u)) {
          for (u = 0, d = l.responseEnd, a += 1; a < n.length; a++) {
            var m = n[a], x = m.startTime;
            if (x > d) break;
            var N = m.transferSize, M = m.initiatorType;
            N && Up(M) && (m = m.responseEnd, u += N * (m < d ? 1 : (d - x) / (m - x)));
          }
          if (--a, t += 8 * (i + u) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Vs = null, Gs = null;
  function Eo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Hp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Bp(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Ys(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Fs = null;
  function hy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Fs ? !1 : (Fs = e, !0) : (Fs = null, !1);
  }
  var qp = typeof setTimeout == "function" ? setTimeout : void 0, gy = typeof clearTimeout == "function" ? clearTimeout : void 0, Vp = typeof Promise == "function" ? Promise : void 0, yy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vp < "u" ? function(e) {
    return Vp.resolve(null).then(e).catch(by);
  } : qp;
  function by(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ma(e) {
    return e === "head";
  }
  function Gp(e, t) {
    var n = t, a = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8)
        if (n = l.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(l), sr(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          ri(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, ri(n);
          for (var i = n.firstChild; i; ) {
            var u = i.nextSibling, d = i.nodeName;
            i[tl] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = u;
          }
        } else
          n === "body" && ri(e.ownerDocument.body);
      n = l;
    } while (n);
    sr(t);
  }
  function Yp(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = a;
    } while (n);
  }
  function Xs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xs(n), wr(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function vy(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[tl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== l.rel || e.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || e.getAttribute("title") !== (l.title == null ? null : l.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (l.src == null ? null : l.src) || e.getAttribute("type") !== (l.type == null ? null : l.type) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = en(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Sy(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = en(e.nextSibling), e === null)) return null;
    return e;
  }
  function Fp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = en(e.nextSibling), e === null)) return null;
    return e;
  }
  function Is(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Qs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function wy(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function en(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var $s = null;
  function Xp(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return en(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ip(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Qp(e, t, n) {
    switch (t = Eo(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(c(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(c(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function ri(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    wr(e);
  }
  var tn = /* @__PURE__ */ new Map(), $p = /* @__PURE__ */ new Set();
  function xo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ea = G.d;
  G.d = {
    f: Ty,
    r: ky,
    D: Ey,
    C: xy,
    L: _y,
    m: Ay,
    X: Ny,
    S: zy,
    M: Oy
  };
  function Ty() {
    var e = ea.f(), t = go();
    return e || t;
  }
  function ky(e) {
    var t = ma(e);
    t !== null && t.tag === 5 && t.type === "form" ? fd(t) : ea.r(e);
  }
  var ir = typeof document > "u" ? null : document;
  function Pp(e, t, n) {
    var a = ir;
    if (a && typeof t == "string" && t) {
      var l = kt(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), $p.has(l) || ($p.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), ct(t, "link", e), Me(t), a.head.appendChild(t)));
    }
  }
  function Ey(e) {
    ea.D(e), Pp("dns-prefetch", e, null);
  }
  function xy(e, t) {
    ea.C(e, t), Pp("preconnect", e, t);
  }
  function _y(e, t, n) {
    ea.L(e, t, n);
    var a = ir;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + kt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + kt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + kt(
        n.imageSizes
      ) + '"]')) : l += '[href="' + kt(e) + '"]';
      var i = l;
      switch (t) {
        case "style":
          i = or(e);
          break;
        case "script":
          i = ur(e);
      }
      tn.has(i) || (e = R(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), tn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(ii(i)) || t === "script" && a.querySelector(oi(i)) || (t = a.createElement("link"), ct(t, "link", e), Me(t), a.head.appendChild(t)));
    }
  }
  function Ay(e, t) {
    ea.m(e, t);
    var n = ir;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + kt(a) + '"][href="' + kt(e) + '"]', i = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = ur(e);
      }
      if (!tn.has(i) && (e = R({ rel: "modulepreload", href: e }, t), tn.set(i, e), n.querySelector(l) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(oi(i)))
              return;
        }
        a = n.createElement("link"), ct(a, "link", e), Me(a), n.head.appendChild(a);
      }
    }
  }
  function zy(e, t, n) {
    ea.S(e, t, n);
    var a = ir;
    if (a && e) {
      var l = Un(a).hoistableStyles, i = or(e);
      t = t || "default";
      var u = l.get(i);
      if (!u) {
        var d = { loading: 0, preload: null };
        if (u = a.querySelector(
          ii(i)
        ))
          d.loading = 5;
        else {
          e = R(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = tn.get(i)) && Ps(e, n);
          var m = u = a.createElement("link");
          Me(m), ct(m, "link", e), m._p = new Promise(function(x, N) {
            m.onload = x, m.onerror = N;
          }), m.addEventListener("load", function() {
            d.loading |= 1;
          }), m.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, _o(u, t, a);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: d
        }, l.set(i, u);
      }
    }
  }
  function Ny(e, t) {
    ea.X(e, t);
    var n = ir;
    if (n && e) {
      var a = Un(n).hoistableScripts, l = ur(e), i = a.get(l);
      i || (i = n.querySelector(oi(l)), i || (e = R({ src: e, async: !0 }, t), (t = tn.get(l)) && Ks(e, t), i = n.createElement("script"), Me(i), ct(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Oy(e, t) {
    ea.M(e, t);
    var n = ir;
    if (n && e) {
      var a = Un(n).hoistableScripts, l = ur(e), i = a.get(l);
      i || (i = n.querySelector(oi(l)), i || (e = R({ src: e, async: !0, type: "module" }, t), (t = tn.get(l)) && Ks(e, t), i = n.createElement("script"), Me(i), ct(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Kp(e, t, n, a) {
    var l = (l = tt.current) ? xo(l) : null;
    if (!l) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = or(n.href), n = Un(
          l
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = or(n.href);
          var i = Un(
            l
          ).hoistableStyles, u = i.get(e);
          if (u || (l = l.ownerDocument || l, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, u), (i = l.querySelector(
            ii(e)
          )) && !i._p && (u.instance = i, u.state.loading = 5), tn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, tn.set(e, n), i || Cy(
            l,
            e,
            n,
            u.state
          ))), t && a === null)
            throw Error(c(528, ""));
          return u;
        }
        if (t && a !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ur(n), n = Un(
          l
        ).hoistableScripts, a = n.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, e));
    }
  }
  function or(e) {
    return 'href="' + kt(e) + '"';
  }
  function ii(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Zp(e) {
    return R({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Cy(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ct(t, "link", n), Me(t), e.head.appendChild(t));
  }
  function ur(e) {
    return '[src="' + kt(e) + '"]';
  }
  function oi(e) {
    return "script[async]" + e;
  }
  function Wp(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + kt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, Me(a), a;
          var l = R({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Me(a), ct(a, "style", l), _o(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = or(n.href);
          var i = e.querySelector(
            ii(l)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Me(i), i;
          a = Zp(n), (l = tn.get(l)) && Ps(a, l), i = (e.ownerDocument || e).createElement("link"), Me(i);
          var u = i;
          return u._p = new Promise(function(d, m) {
            u.onload = d, u.onerror = m;
          }), ct(i, "link", a), t.state.loading |= 4, _o(i, n.precedence, e), t.instance = i;
        case "script":
          return i = ur(n.src), (l = e.querySelector(
            oi(i)
          )) ? (t.instance = l, Me(l), l) : (a = n, (l = tn.get(i)) && (a = R({}, n), Ks(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), Me(l), ct(l, "link", a), e.head.appendChild(l), t.instance = l);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, _o(a, n.precedence, e));
    return t.instance;
  }
  function _o(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), l = a.length ? a[a.length - 1] : null, i = l, u = 0; u < a.length; u++) {
      var d = a[u];
      if (d.dataset.precedence === t) i = d;
      else if (i !== l) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Ps(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ks(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ao = null;
  function Jp(e, t, n) {
    if (Ao === null) {
      var a = /* @__PURE__ */ new Map(), l = Ao = /* @__PURE__ */ new Map();
      l.set(n, a);
    } else
      l = Ao, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var i = n[l];
      if (!(i[tl] || i[oe] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(t) || "";
        u = e + u;
        var d = a.get(u);
        d ? d.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function em(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Ry(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function tm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Dy(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = or(a.href), i = t.querySelector(
          ii(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = zo.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Me(i);
          return;
        }
        i = t.ownerDocument || t, a = Zp(a), (l = tn.get(l)) && Ps(a, l), i = i.createElement("link"), Me(i);
        var u = i;
        u._p = new Promise(function(d, m) {
          u.onload = d, u.onerror = m;
        }), ct(i, "link", a), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = zo.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Zs = 0;
  function My(e, t) {
    return e.stylesheets && e.count === 0 && Oo(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Oo(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Zs === 0 && (Zs = 62500 * my());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Oo(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > Zs ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(l);
      };
    } : null;
  }
  function zo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Oo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var No = null;
  function Oo(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, No = /* @__PURE__ */ new Map(), t.forEach(Ly, e), No = null, zo.call(e));
  }
  function Ly(e, t) {
    if (!(t.state.loading & 4)) {
      var n = No.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), No.set(e, n);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < l.length; i++) {
          var u = l[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (n.set(u.dataset.precedence, u), a = u);
        }
        a && n.set(null, a);
      }
      l = t.instance, u = l.getAttribute("data-precedence"), i = n.get(u) || a, i === a && n.set(null, l), n.set(u, l), this.count++, a = zo.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ui = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0
  };
  function jy(e, t, n, a, l, i, u, d, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ja(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ja(0), this.hiddenUpdates = Ja(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nm(e, t, n, a, l, i, u, d, m, x, N, M) {
    return e = new jy(
      e,
      t,
      n,
      u,
      m,
      x,
      N,
      M,
      d
    ), t = 1, i === !0 && (t |= 24), i = Ht(3, null, null, t), e.current = i, i.stateNode = e, t = Ou(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Mu(i), e;
  }
  function am(e) {
    return e ? (e = Bl, e) : Bl;
  }
  function lm(e, t, n, a, l, i) {
    l = am(l), a.context === null ? a.context = l : a.pendingContext = l, a = ka(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = Ea(e, a, t), n !== null && (Rt(n, e, t), qr(n, e, t));
  }
  function rm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ws(e, t) {
    rm(e, t), (e = e.alternate) && rm(e, t);
  }
  function im(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = il(e, 67108864);
      t !== null && Rt(t, e, 67108864), Ws(e, 67108864);
    }
  }
  function om(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = el(t);
      var n = il(e, t);
      n !== null && Rt(n, e, t), Ws(e, t);
    }
  }
  var Co = !0;
  function Uy(e, t, n, a) {
    var l = L.T;
    L.T = null;
    var i = G.p;
    try {
      G.p = 2, Js(e, t, n, a);
    } finally {
      G.p = i, L.T = l;
    }
  }
  function Hy(e, t, n, a) {
    var l = L.T;
    L.T = null;
    var i = G.p;
    try {
      G.p = 8, Js(e, t, n, a);
    } finally {
      G.p = i, L.T = l;
    }
  }
  function Js(e, t, n, a) {
    if (Co) {
      var l = ec(a);
      if (l === null)
        Bs(
          e,
          t,
          a,
          Ro,
          n
        ), sm(e, a);
      else if (qy(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (sm(e, a), t & 4 && -1 < By.indexOf(e)) {
        for (; l !== null; ) {
          var i = ma(l);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var u = Sn(i.pendingLanes);
                  if (u !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; u; ) {
                      var m = 1 << 31 - rt(u);
                      d.entanglements[1] |= m, u &= ~m;
                    }
                    zn(i), (Te & 6) === 0 && (mo = Ye() + 500, ni(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = il(i, 2), d !== null && Rt(d, i, 2), go(), Ws(i, 2);
            }
          if (i = ec(a), i === null && Bs(
            e,
            t,
            a,
            Ro,
            n
          ), i === l) break;
          l = i;
        }
        l !== null && a.stopPropagation();
      } else
        Bs(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function ec(e) {
    return e = nu(e), tc(e);
  }
  var Ro = null;
  function tc(e) {
    if (Ro = null, e = pa(e), e !== null) {
      var t = g(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = T(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = S(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ro = e, null;
  }
  function um(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (mr()) {
          case El:
            return 2;
          case xl:
            return 8;
          case ia:
          case oa:
            return 32;
          case Ka:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var nc = !1, La = null, ja = null, Ua = null, si = /* @__PURE__ */ new Map(), ci = /* @__PURE__ */ new Map(), Ha = [], By = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        La = null;
        break;
      case "dragenter":
      case "dragleave":
        ja = null;
        break;
      case "mouseover":
      case "mouseout":
        Ua = null;
        break;
      case "pointerover":
      case "pointerout":
        si.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ci.delete(t.pointerId);
    }
  }
  function fi(e, t, n, a, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [l]
    }, t !== null && (t = ma(t), t !== null && im(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function qy(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return La = fi(
          La,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "dragenter":
        return ja = fi(
          ja,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "mouseover":
        return Ua = fi(
          Ua,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "pointerover":
        var i = l.pointerId;
        return si.set(
          i,
          fi(
            si.get(i) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
      case "gotpointercapture":
        return i = l.pointerId, ci.set(
          i,
          fi(
            ci.get(i) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
    }
    return !1;
  }
  function cm(e) {
    var t = pa(e.target);
    if (t !== null) {
      var n = g(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = T(n), t !== null) {
            e.blockedOn = t, Ei(e.priority, function() {
              om(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = S(n), t !== null) {
            e.blockedOn = t, Ei(e.priority, function() {
              om(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Do(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ec(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        tu = a, n.target.dispatchEvent(a), tu = null;
      } else
        return t = ma(n), t !== null && im(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function fm(e, t, n) {
    Do(e) && n.delete(t);
  }
  function Vy() {
    nc = !1, La !== null && Do(La) && (La = null), ja !== null && Do(ja) && (ja = null), Ua !== null && Do(Ua) && (Ua = null), si.forEach(fm), ci.forEach(fm);
  }
  function Mo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, nc || (nc = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      Vy
    )));
  }
  var Lo = null;
  function dm(e) {
    Lo !== e && (Lo = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Lo === e && (Lo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (tc(a || n) === null)
              continue;
            break;
          }
          var i = ma(n);
          i !== null && (e.splice(t, 3), t -= 3, es(
            i,
            {
              pending: !0,
              data: l,
              method: n.method,
              action: a
            },
            a,
            l
          ));
        }
      }
    ));
  }
  function sr(e) {
    function t(m) {
      return Mo(m, e);
    }
    La !== null && Mo(La, e), ja !== null && Mo(ja, e), Ua !== null && Mo(Ua, e), si.forEach(t), ci.forEach(t);
    for (var n = 0; n < Ha.length; n++) {
      var a = Ha[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Ha.length && (n = Ha[0], n.blockedOn === null); )
      cm(n), n.blockedOn === null && Ha.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], i = n[a + 1], u = l[Fe] || null;
        if (typeof i == "function")
          u || dm(n);
        else if (u) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (l = i, u = i[Fe] || null)
              d = u.formAction;
            else if (tc(l) !== null) continue;
          } else d = u.action;
          typeof d == "function" ? n[a + 1] = d : (n.splice(a, 3), a -= 3), dm(n);
        }
      }
  }
  function pm() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(u) {
            return l = u;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      l !== null && (l(), l = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, l = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), l !== null && (l(), l = null);
      };
    }
  }
  function ac(e) {
    this._internalRoot = e;
  }
  jo.prototype.render = ac.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = Yt();
    lm(n, a, e, t, null, null);
  }, jo.prototype.unmount = ac.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      lm(e.current, 2, null, e, null, null), go(), t[da] = null;
    }
  };
  function jo(e) {
    this._internalRoot = e;
  }
  jo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = fa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ha.length && t !== 0 && t < Ha[n].priority; n++) ;
      Ha.splice(n, 0, e), n === 0 && cm(e);
    }
  };
  var mm = s.version;
  if (mm !== "19.2.6")
    throw Error(
      c(
        527,
        mm,
        "19.2.6"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = C(t), e = e !== null ? O(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Gy = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uo.isDisabled && Uo.supportsFiber)
      try {
        ua = Uo.inject(
          Gy
        ), pt = Uo;
      } catch {
      }
  }
  return _m.createRoot = function(e, t) {
    if (!p(e)) throw Error(c(299));
    var n = !1, a = "", l = wd, i = Td, u = kd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = nm(
      e,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      l,
      i,
      u,
      pm
    ), e[da] = t.current, Hs(e), new ac(t);
  }, _m.hydrateRoot = function(e, t, n) {
    if (!p(e)) throw Error(c(299));
    var a = !1, l = "", i = wd, u = Td, d = kd, m = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (d = n.onRecoverableError), n.formState !== void 0 && (m = n.formState)), t = nm(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      l,
      m,
      i,
      u,
      d,
      pm
    ), t.context = am(null), n = t.current, a = Yt(), a = el(a), l = ka(a), l.callback = null, Ea(n, l, a), n = a, t.current.lanes = n, jn(t, n), zn(t), e[da] = t.current, Hs(e), new jo(t);
  }, _m.version = "19.2.6", _m;
}
var h1;
function mA() {
  if (h1) return Ab.exports;
  h1 = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (o) {
        console.error(o);
      }
  }
  return r(), Ab.exports = pA(), Ab.exports;
}
var hA = mA();
const vv = (r, o, s) => {
  hA.createRoot(s).render(ht.createElement(r, o));
}, bA = ({ targetSelector: r, props: o }) => {
  vv(rw, o, document.querySelector(r));
}, vA = ({ targetSelector: r, props: o }) => {
  vv(iw, o, document.querySelector(r));
}, SA = ({ targetSelector: r, props: o }) => {
  vv(aw, o, document.querySelector(r));
};
export {
  aw as CardCarouselNews,
  rw as CardGridNews,
  iw as CardListlNews,
  SA as initCardCarouselNewsComponent,
  bA as initCardGridNewsComponent,
  vA as initCardListNewsComponent
};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/*!
 * Glide.js v3.7.1
 * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
