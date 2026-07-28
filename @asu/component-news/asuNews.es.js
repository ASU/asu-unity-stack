import ht, { forwardRef as rn, createContext as ow, useState as Vo, useRef as th, useId as h1, useCallback as Cv, useEffect as gi, Children as g1, isValidElement as y1, createElement as v1, useContext as tb } from "react";
import b1 from "react-dom";
function uw(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Fy = { exports: {} }, hm = {};
var bb;
function sw() {
  if (bb) return hm;
  bb = 1;
  var r = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function s(f, c, p) {
    var h = null;
    if (p !== void 0 && (h = "" + p), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      p = {};
      for (var T in c)
        T !== "key" && (p[T] = c[T]);
    } else p = c;
    return c = p.ref, {
      $$typeof: r,
      type: f,
      key: h,
      ref: c !== void 0 ? c : null,
      props: p
    };
  }
  return hm.Fragment = o, hm.jsx = s, hm.jsxs = s, hm;
}
var Sb;
function cw() {
  return Sb || (Sb = 1, Fy.exports = sw()), Fy.exports;
}
var yn = cw();
function nb(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var wb = { exports: {} }, gm = {}, Tb;
function fw() {
  if (Tb) return gm;
  Tb = 1;
  var r = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function s(f, c, p) {
    var h = null;
    if (p !== void 0 && (h = "" + p), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      p = {};
      for (var T in c)
        T !== "key" && (p[T] = c[T]);
    } else p = c;
    return c = p.ref, {
      $$typeof: r,
      type: f,
      key: h,
      ref: c !== void 0 ? c : null,
      props: p
    };
  }
  return gm.Fragment = o, gm.jsx = s, gm.jsxs = s, gm;
}
var xb;
function dw() {
  return xb || (xb = 1, wb.exports = fw()), wb.exports;
}
var B = dw(), kb = { exports: {} }, Xy, Eb;
function pw() {
  if (Eb) return Xy;
  Eb = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xy = r, Xy;
}
var Iy, _b;
function mw() {
  if (_b) return Iy;
  _b = 1;
  var r = /* @__PURE__ */ pw();
  function o() {
  }
  function s() {
  }
  return s.resetWarningCache = o, Iy = function() {
    function f(h, T, S, x, D, C) {
      if (C !== r) {
        var z = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw z.name = "Invariant Violation", z;
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
var Ab;
function hw() {
  return Ab || (Ab = 1, kb.exports = /* @__PURE__ */ mw()()), kb.exports;
}
var gw = /* @__PURE__ */ hw();
const g = /* @__PURE__ */ nb(gw), yw = () => {
  const [r, o] = Vo(null), [s, f] = Vo(!1), [c, p] = Vo(null), [h, T] = Vo("");
  return gi(() => {
    h && (() => {
      p(null), f(!0);
      try {
        fetch(h).then((S) => S.json()).then((S) => {
          o(S), f(!1);
        }).catch((S) => {
          p(S), f(!1);
        });
      } catch (S) {
        p(S);
      }
    })();
  }, [h]), [{ data: r, loading: s, error: c }, T];
}, vw = (r) => (r || []).join(" ");
function Nb(r, o) {
  (o == null || o > r.length) && (o = r.length);
  for (var s = 0, f = Array(o); s < o; s++) f[s] = r[s];
  return f;
}
function bw(r) {
  if (Array.isArray(r)) return r;
}
function Sw(r, o) {
  var s = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (s != null) {
    var f, c, p, h, T = [], S = !0, x = !1;
    try {
      if (p = (s = s.call(r)).next, o !== 0) for (; !(S = (f = p.call(s)).done) && (T.push(f.value), T.length !== o); S = !0) ;
    } catch (D) {
      x = !0, c = D;
    } finally {
      try {
        if (!S && s.return != null && (h = s.return(), Object(h) !== h)) return;
      } finally {
        if (x) throw c;
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
  return bw(r) || Sw(r, o) || xw(r, o) || ww();
}
function xw(r, o) {
  if (r) {
    if (typeof r == "string") return Nb(r, o);
    var s = {}.toString.call(r).slice(8, -1);
    return s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set" ? Array.from(r) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? Nb(r, o) : void 0;
  }
}
const S1 = Object.entries, Ob = Object.setPrototypeOf, kw = Object.isFrozen, Ew = Object.getPrototypeOf, _w = Object.getOwnPropertyDescriptor;
let Ga = Object.freeze, Fa = Object.seal, Ec = Object.create, w1 = typeof Reflect < "u" && Reflect, zv = w1.apply, Dv = w1.construct;
Ga || (Ga = function(r) {
  return r;
});
Fa || (Fa = function(r) {
  return r;
});
zv || (zv = function(r, o) {
  for (var s = arguments.length, f = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++)
    f[c - 2] = arguments[c];
  return r.apply(o, f);
});
Dv || (Dv = function(r) {
  for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++)
    s[f - 1] = arguments[f];
  return new r(...s);
});
const ym = zn(Array.prototype.forEach), Aw = zn(Array.prototype.lastIndexOf), Cb = zn(Array.prototype.pop), wc = zn(Array.prototype.push), Nw = zn(Array.prototype.splice), $o = Array.isArray, Am = zn(String.prototype.toLowerCase), Qy = zn(String.prototype.toString), zb = zn(String.prototype.match), vm = zn(String.prototype.replace), Db = zn(String.prototype.indexOf), Ow = zn(String.prototype.trim), Cw = zn(Number.prototype.toString), zw = zn(Boolean.prototype.toString), Rb = typeof BigInt > "u" ? null : zn(BigInt.prototype.toString), Mb = typeof Symbol > "u" ? null : zn(Symbol.prototype.toString), la = zn(Object.prototype.hasOwnProperty), bm = zn(Object.prototype.toString), qa = zn(RegExp.prototype.test), lc = Dw(TypeError);
function zn(r) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
      f[c - 1] = arguments[c];
    return zv(r, o, f);
  };
}
function Dw(r) {
  return function() {
    for (var o = arguments.length, s = new Array(o), f = 0; f < o; f++)
      s[f] = arguments[f];
    return Dv(r, s);
  };
}
function ft(r, o) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Am;
  if (Ob && Ob(r, null), !$o(o))
    return r;
  let f = o.length;
  for (; f--; ) {
    let c = o[f];
    if (typeof c == "string") {
      const p = s(c);
      p !== c && (kw(o) || (o[f] = p), c = p);
    }
    r[c] = !0;
  }
  return r;
}
function Rw(r) {
  for (let o = 0; o < r.length; o++)
    la(r, o) || (r[o] = null);
  return r;
}
function bl(r) {
  const o = Ec(null);
  for (const f of S1(r)) {
    var s = Tw(f, 2);
    const c = s[0], p = s[1];
    la(r, c) && ($o(p) ? o[c] = Rw(p) : p && typeof p == "object" && p.constructor === Object ? o[c] = bl(p) : o[c] = p);
  }
  return o;
}
function Mw(r) {
  switch (typeof r) {
    case "string":
      return r;
    case "number":
      return Cw(r);
    case "boolean":
      return zw(r);
    case "bigint":
      return Rb ? Rb(r) : "0";
    case "symbol":
      return Mb ? Mb(r) : "Symbol()";
    case "undefined":
      return bm(r);
    case "function":
    case "object": {
      if (r === null)
        return bm(r);
      const o = r, s = bi(o, "toString");
      if (typeof s == "function") {
        const f = s(o);
        return typeof f == "string" ? f : bm(f);
      }
      return bm(r);
    }
    default:
      return bm(r);
  }
}
function bi(r, o) {
  for (; r !== null; ) {
    const f = _w(r, o);
    if (f) {
      if (f.get)
        return zn(f.get);
      if (typeof f.value == "function")
        return zn(f.value);
    }
    r = Ew(r);
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
const Lb = Ga(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), $y = Ga(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Py = Ga(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), jw = Ga(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ky = Ga(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Uw = Ga(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), jb = Ga(["#text"]), Ub = Ga(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Zy = Ga(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Hb = Ga(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Fm = Ga(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Hw = Fa(/{{[\w\W]*|^[\w\W]*}}/g), Bw = Fa(/<%[\w\W]*|^[\w\W]*%>/g), qw = Fa(/\${[\w\W]*/g), Vw = Fa(/^data-[\-\w.\u00B7-\uFFFF]+$/), Gw = Fa(/^aria-[\-\w]+$/), Bb = Fa(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Yw = Fa(/^(?:\w+script|data):/i), Fw = Fa(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Xw = Fa(/^html$/i), Iw = Fa(/^[a-z][.\w]*(-[.\w]+)+$/i), qb = Fa(/<[/\w!]/g), Qw = Fa(/<[/\w]/g), $w = Fa(/<\/no(script|embed|frames)/i), Pw = Fa(/\/>/i), yi = {
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
}, Vb = function() {
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
  return la(r, o) && $o(r[o]) ? ft(f.base ? bl(f.base) : {}, r[o], f.transform) : s;
};
function T1() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Kw();
  const o = (b) => T1(b);
  if (o.version = "3.4.11", o.removed = [], !r || !r.document || r.document.nodeType !== yi.document || !r.Element)
    return o.isSupported = !1, o;
  let s = r.document;
  const f = s, c = f.currentScript;
  r.DocumentFragment;
  const p = r.HTMLTemplateElement, h = r.Node, T = r.Element, S = r.NodeFilter;
  r.NamedNodeMap === void 0 && (r.NamedNodeMap || r.MozNamedAttrMap), r.HTMLFormElement;
  const D = r.DOMParser, C = r.trustedTypes, z = T.prototype, P = bi(z, "cloneNode"), j = bi(z, "remove"), H = bi(z, "nextSibling"), $ = bi(z, "childNodes"), Q = bi(z, "parentNode"), V = bi(z, "shadowRoot"), me = bi(z, "attributes"), te = h && h.prototype ? bi(h.prototype, "nodeType") : null, ne = h && h.prototype ? bi(h.prototype, "nodeName") : null;
  if (typeof p == "function") {
    const b = s.createElement("template");
    b.content && b.content.ownerDocument && (s = b.content.ownerDocument);
  }
  let Y, F = "", J, ke = !1, He = 0;
  const qe = function() {
    if (He > 0)
      throw lc('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Be = function(b) {
    qe(), He++;
    try {
      return Y.createHTML(b);
    } finally {
      He--;
    }
  }, Ae = function(b) {
    qe(), He++;
    try {
      return Y.createScriptURL(b);
    } finally {
      He--;
    }
  }, yt = function() {
    return ke || (J = Zw(C, c), ke = !0), J;
  }, Qe = s, U = Qe.implementation, L = Qe.createNodeIterator, G = Qe.createDocumentFragment, re = Qe.getElementsByTagName, se = f.importNode;
  let ie = Vb();
  o.isSupported = typeof S1 == "function" && typeof Q == "function" && U && U.createHTMLDocument !== void 0;
  const we = Hw, ue = Bw, Z = qw, ye = Vw, vt = Gw, tt = Yw, fn = Fw, dn = Iw;
  let nt = Bb, De = null;
  const Qa = ft({}, [...Lb, ...$y, ...Py, ...Ky, ...jb]);
  let Re = null;
  const dr = ft({}, [...Ub, ...Zy, ...Hb, ...Fm]);
  let xe = Object.seal(Ec(null, {
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
  })), Rn = null, wl = null;
  const vn = Object.seal(Ec(null, {
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
  let pr = !0, $a = !0, Tl = !1, xl = !0, bn = !1, Pa = !0, Ye = !1, mr = !1, kl = null, El = null, ia = !1, oa = !1, Ka = !1, _l = !1, xi = !0, ua = !1;
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
  const vr = ft({}, ["title", "style", "font", "a", "script"]);
  let fa = null;
  const ki = ["application/xhtml+xml", "text/html"], Tn = "text/html";
  let oe = null, Fe = null;
  const da = s.createElement("form"), Nl = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, br = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Fe && Fe === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = bl(b), fa = // eslint-disable-next-line unicorn/prefer-includes
    ki.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Tn : b.PARSER_MEDIA_TYPE, oe = fa === "application/xhtml+xml" ? Qy : Am, De = Fo(b, "ALLOWED_TAGS", Qa, {
      transform: oe
    }), Re = Fo(b, "ALLOWED_ATTR", dr, {
      transform: oe
    }), jn = Fo(b, "ALLOWED_NAMESPACES", Jo, {
      transform: Qy
    }), ca = Fo(b, "ADD_URI_SAFE_ATTR", Sn, {
      transform: oe,
      base: Sn
    }), Za = Fo(b, "ADD_DATA_URI_TAGS", Wa, {
      transform: oe,
      base: Wa
    }), Qt = Fo(b, "FORBID_CONTENTS", hr, {
      transform: oe
    }), Rn = Fo(b, "FORBID_TAGS", bl({}), {
      transform: oe
    }), wl = Fo(b, "FORBID_ATTR", bl({}), {
      transform: oe
    }), sa = la(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? bl(b.USE_PROFILES) : b.USE_PROFILES : !1, pr = b.ALLOW_ARIA_ATTR !== !1, $a = b.ALLOW_DATA_ATTR !== !1, Tl = b.ALLOW_UNKNOWN_PROTOCOLS || !1, xl = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, bn = b.SAFE_FOR_TEMPLATES || !1, Pa = b.SAFE_FOR_XML !== !1, Ye = b.WHOLE_DOCUMENT || !1, oa = b.RETURN_DOM || !1, Ka = b.RETURN_DOM_FRAGMENT || !1, _l = b.RETURN_TRUSTED_TYPE || !1, ia = b.FORCE_BODY || !1, xi = b.SANITIZE_DOM !== !1, ua = b.SANITIZE_NAMED_PROPS || !1, It = b.KEEP_CONTENT !== !1, rt = b.IN_PLACE || !1, nt = Lw(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : Bb, Ln = typeof b.NAMESPACE == "string" ? b.NAMESPACE : $t, Al = la(b, "MATHML_TEXT_INTEGRATION_POINTS") && b.MATHML_TEXT_INTEGRATION_POINTS && typeof b.MATHML_TEXT_INTEGRATION_POINTS == "object" ? bl(b.MATHML_TEXT_INTEGRATION_POINTS) : ft({}, gr), el = la(b, "HTML_INTEGRATION_POINTS") && b.HTML_INTEGRATION_POINTS && typeof b.HTML_INTEGRATION_POINTS == "object" ? bl(b.HTML_INTEGRATION_POINTS) : ft({}, yr);
    const y = la(b, "CUSTOM_ELEMENT_HANDLING") && b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING == "object" ? bl(b.CUSTOM_ELEMENT_HANDLING) : Ec(null);
    if (xe = Ec(null), la(y, "tagNameCheck") && Nl(y.tagNameCheck) && (xe.tagNameCheck = y.tagNameCheck), la(y, "attributeNameCheck") && Nl(y.attributeNameCheck) && (xe.attributeNameCheck = y.attributeNameCheck), la(y, "allowCustomizedBuiltInElements") && typeof y.allowCustomizedBuiltInElements == "boolean" && (xe.allowCustomizedBuiltInElements = y.allowCustomizedBuiltInElements), Fa(xe), bn && ($a = !1), Ka && (oa = !0), sa && (De = ft({}, jb), Re = Ec(null), sa.html === !0 && (ft(De, Lb), ft(Re, Ub)), sa.svg === !0 && (ft(De, $y), ft(Re, Zy), ft(Re, Fm)), sa.svgFilters === !0 && (ft(De, Py), ft(Re, Zy), ft(Re, Fm)), sa.mathMl === !0 && (ft(De, Ky), ft(Re, Hb), ft(Re, Fm))), vn.tagCheck = null, vn.attributeCheck = null, la(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? vn.tagCheck = b.ADD_TAGS : $o(b.ADD_TAGS) && (De === Qa && (De = bl(De)), ft(De, b.ADD_TAGS, oe))), la(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? vn.attributeCheck = b.ADD_ATTR : $o(b.ADD_ATTR) && (Re === dr && (Re = bl(Re)), ft(Re, b.ADD_ATTR, oe))), la(b, "ADD_URI_SAFE_ATTR") && $o(b.ADD_URI_SAFE_ATTR) && ft(ca, b.ADD_URI_SAFE_ATTR, oe), la(b, "FORBID_CONTENTS") && $o(b.FORBID_CONTENTS) && (Qt === hr && (Qt = bl(Qt)), ft(Qt, b.FORBID_CONTENTS, oe)), la(b, "ADD_FORBID_CONTENTS") && $o(b.ADD_FORBID_CONTENTS) && (Qt === hr && (Qt = bl(Qt)), ft(Qt, b.ADD_FORBID_CONTENTS, oe)), It && (De["#text"] = !0), Ye && ft(De, ["html", "head", "body"]), De.table && (ft(De, ["tbody"]), delete Rn.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw lc('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw lc('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const N = Y;
      Y = b.TRUSTED_TYPES_POLICY;
      try {
        F = Be("");
      } catch (q) {
        throw Y = N, q;
      }
    } else b.TRUSTED_TYPES_POLICY === null ? (Y = void 0, F = "") : (Y === void 0 && (Y = yt()), Y && typeof F == "string" && (F = Be("")));
    Ga && Ga(b), Fe = b;
  }, Ei = ft({}, [...$y, ...Py, ...jw]), Sr = ft({}, [...Ky, ...Uw]), tl = function(b, y, N) {
    return y.namespaceURI === $t ? b === "svg" : y.namespaceURI === Mn ? b === "svg" && (N === "annotation-xml" || Al[N]) : !!Ei[b];
  }, wr = function(b, y, N) {
    return y.namespaceURI === $t ? b === "math" : y.namespaceURI === wn ? b === "math" && el[N] : !!Sr[b];
  }, pa = function(b, y, N) {
    return y.namespaceURI === wn && !el[N] || y.namespaceURI === Mn && !Al[N] ? !1 : !Sr[b] && (vr[b] || !Ei[b]);
  }, ma = function(b) {
    let y = Q(b);
    (!y || !y.tagName) && (y = {
      namespaceURI: Ln,
      tagName: "template"
    });
    const N = Am(b.tagName), q = Am(y.tagName);
    return jn[b.namespaceURI] ? b.namespaceURI === wn ? tl(N, y, q) : b.namespaceURI === Mn ? wr(N, y, q) : b.namespaceURI === $t ? pa(N, y, q) : !!(fa === "application/xhtml+xml" && jn[b.namespaceURI]) : !1;
  }, Rt = function(b) {
    wc(o.removed, {
      element: b
    });
    try {
      Q(b).removeChild(b);
    } catch {
      if (j(b), !Q(b))
        throw lc("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Un = function(b) {
    const y = $(b);
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
    const N = me(b);
    if (N)
      for (let q = N.length - 1; q >= 0; --q) {
        const K = N[q], he = K && K.name;
        if (typeof he == "string")
          try {
            b.removeAttribute(he);
          } catch {
          }
      }
  }, Me = function(b, y) {
    try {
      wc(o.removed, {
        attribute: y.getAttributeNode(b),
        from: y
      });
    } catch {
      wc(o.removed, {
        attribute: null,
        from: y
      });
    }
    if (y.removeAttribute(b), b === "is")
      if (oa || Ka)
        try {
          Rt(y);
        } catch {
        }
      else
        try {
          y.setAttribute(b, "");
        } catch {
        }
  }, _i = function(b) {
    const y = me(b);
    if (y)
      for (let N = y.length - 1; N >= 0; --N) {
        const q = y[N], K = q && q.name;
        if (!(typeof K != "string" || Re[oe(K)]))
          try {
            b.removeAttribute(K);
          } catch {
          }
      }
  }, Ai = function(b) {
    const y = [b];
    for (; y.length > 0; ) {
      const N = y.pop();
      (te ? te(N) : N.nodeType) === yi.element && _i(N);
      const q = $(N);
      if (q)
        for (let K = q.length - 1; K >= 0; --K)
          y.push(q[K]);
    }
  }, xn = function(b) {
    let y = null, N = null;
    if (ia)
      b = "<remove></remove>" + b;
    else {
      const he = zb(b, /^[\r\n\t ]+/);
      N = he && he[0];
    }
    fa === "application/xhtml+xml" && Ln === $t && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const q = Y ? Be(b) : b;
    if (Ln === $t)
      try {
        y = new D().parseFromString(q, fa);
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
    return b && N && K.insertBefore(s.createTextNode(N), K.childNodes[0] || null), Ln === $t ? re.call(y, Ye ? "html" : "body")[0] : Ye ? y.documentElement : K;
  }, Hn = function(b) {
    return L.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      S.SHOW_ELEMENT | S.SHOW_COMMENT | S.SHOW_TEXT | S.SHOW_PROCESSING_INSTRUCTION | S.SHOW_CDATA_SECTION,
      null
    );
  }, Ol = function(b) {
    return b = vm(b, we, " "), b = vm(b, ue, " "), b = vm(b, Z, " "), b;
  }, Cl = function(b) {
    var y;
    b.normalize();
    const N = L.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      S.SHOW_TEXT | S.SHOW_COMMENT | S.SHOW_CDATA_SECTION | S.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let q = N.nextNode();
    for (; q; )
      q.data = Ol(q.data), q = N.nextNode();
    const K = (y = b.querySelectorAll) === null || y === void 0 ? void 0 : y.call(b, "template");
    K && ym(K, (he) => {
      ha(he.content) && Cl(he.content);
    });
  }, nl = function(b) {
    const y = ne ? ne(b) : null;
    return typeof y != "string" || oe(y) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    b.attributes !== me(b) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    b.nodeType !== te(b) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    b.childNodes !== $(b);
  }, ha = function(b) {
    if (!te || typeof b != "object" || b === null)
      return !1;
    try {
      return te(b) === yi.documentFragment;
    } catch {
      return !1;
    }
  }, kn = function(b) {
    if (!te || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof te(b) == "number";
    } catch {
      return !1;
    }
  };
  function kt(b, y, N) {
    b.length !== 0 && ym(b, (q) => {
      q.call(o, y, N, Fe);
    });
  }
  const pn = function(b, y) {
    return !!(Pa && b.hasChildNodes() && !kn(b.firstElementChild) && qa(qb, b.textContent) && qa(qb, b.innerHTML) || Pa && b.namespaceURI === $t && y === "style" && kn(b.firstElementChild) || b.nodeType === yi.processingInstruction || Pa && b.nodeType === yi.comment && qa(Qw, b.data));
  }, Et = function(b, y) {
    if (!Rn[y] && kr(y) && (xe.tagNameCheck instanceof RegExp && qa(xe.tagNameCheck, y) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(y)))
      return !1;
    if (It && !Qt[y]) {
      const N = Q(b), q = $(b);
      if (q && N) {
        const K = q.length;
        for (let he = K - 1; he >= 0; --he) {
          const ve = rt ? q[he] : P(q[he], !0);
          N.insertBefore(ve, H(b));
        }
      }
    }
    return Rt(b), !0;
  }, Tr = function(b) {
    if (kt(ie.beforeSanitizeElements, b, null), nl(b))
      return Rt(b), !0;
    const y = oe(ne ? ne(b) : b.nodeName);
    if (kt(ie.uponSanitizeElement, b, {
      tagName: y,
      allowedTags: De
    }), pn(b, y))
      return Rt(b), !0;
    if (Rn[y] || !(vn.tagCheck instanceof Function && vn.tagCheck(y)) && !De[y])
      return Et(b, y);
    if ((te ? te(b) : b.nodeType) === yi.element && !ma(b) || (y === "noscript" || y === "noembed" || y === "noframes") && qa($w, b.innerHTML))
      return Rt(b), !0;
    if (bn && b.nodeType === yi.text) {
      const N = Ol(b.textContent);
      b.textContent !== N && (wc(o.removed, {
        element: b.cloneNode()
      }), b.textContent = N);
    }
    return kt(ie.afterSanitizeElements, b, null), !1;
  }, Ni = function(b, y, N) {
    if (wl[y] || xi && (y === "id" || y === "name") && (N in s || N in da))
      return !1;
    const q = Re[y] || vn.attributeCheck instanceof Function && vn.attributeCheck(y, b);
    if (!($a && qa(ye, y)) && !(pr && qa(vt, y))) {
      if (q) {
        if (!ca[y] && !qa(nt, vm(N, fn, "")) && !((y === "src" || y === "xlink:href" || y === "href") && b !== "script" && Db(N, "data:") === 0 && Za[b]) && !(Tl && !qa(tt, vm(N, fn, ""))) && N)
          return !1;
      } else if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        !(kr(b) && (xe.tagNameCheck instanceof RegExp && qa(xe.tagNameCheck, b) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(b)) && (xe.attributeNameCheck instanceof RegExp && qa(xe.attributeNameCheck, y) || xe.attributeNameCheck instanceof Function && xe.attributeNameCheck(y, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        y === "is" && xe.allowCustomizedBuiltInElements && (xe.tagNameCheck instanceof RegExp && qa(xe.tagNameCheck, N) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(N)))
      ) return !1;
    }
    return !0;
  }, xr = ft({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), kr = function(b) {
    return !xr[Am(b)] && qa(dn, b);
  }, zl = function(b, y, N, q) {
    if (Y && typeof C == "object" && typeof C.getAttributeType == "function" && !N)
      switch (C.getAttributeType(b, y)) {
        case "TrustedHTML":
          return Be(q);
        case "TrustedScriptURL":
          return Ae(q);
      }
    return q;
  }, eu = function(b, y, N, q) {
    try {
      N ? b.setAttributeNS(N, y, q) : b.setAttribute(y, q), nl(b) ? Rt(b) : Cb(o.removed);
    } catch {
      Me(y, b);
    }
  }, xt = function(b) {
    kt(ie.beforeSanitizeAttributes, b, null);
    const y = b.attributes;
    if (!y || nl(b))
      return;
    const N = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Re,
      forceKeepAttr: void 0
    };
    let q = y.length;
    const K = oe(b.nodeName);
    for (; q--; ) {
      const he = y[q], ve = he.name, mt = he.namespaceURI, at = he.value, bt = oe(ve), on = at;
      let _t = ve === "value" ? on : Ow(on);
      if (N.attrName = bt, N.attrValue = _t, N.keepAttr = !0, N.forceKeepAttr = void 0, kt(ie.uponSanitizeAttribute, b, N), _t = N.attrValue, ua && (bt === "id" || bt === "name") && Db(_t, pt) !== 0 && (Me(ve, b), _t = pt + _t), Pa && qa(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, _t)) {
        Me(ve, b);
        continue;
      }
      if (bt === "attributename" && zb(_t, "href")) {
        Me(ve, b);
        continue;
      }
      if (!N.forceKeepAttr) {
        if (!N.keepAttr) {
          Me(ve, b);
          continue;
        }
        if (!xl && qa(Pw, _t)) {
          Me(ve, b);
          continue;
        }
        if (bn && (_t = Ol(_t)), !Ni(K, bt, _t)) {
          Me(ve, b);
          continue;
        }
        _t = zl(K, bt, mt, _t), _t !== on && eu(b, ve, mt, _t);
      }
    }
    kt(ie.afterSanitizeAttributes, b, null);
  }, ga = function(b) {
    let y = null;
    const N = Hn(b);
    for (kt(ie.beforeSanitizeShadowDOM, b, null); y = N.nextNode(); )
      if (kt(ie.uponSanitizeShadowNode, y, null), Tr(y), xt(y), ha(y.content) && ga(y.content), (te ? te(y) : y.nodeType) === yi.element) {
        const q = V(y);
        ha(q) && (Dl(q), ga(q));
      }
    kt(ie.afterSanitizeShadowDOM, b, null);
  }, Dl = function(b) {
    const y = [{
      node: b,
      shadow: null
    }];
    for (; y.length > 0; ) {
      const N = y.pop();
      if (N.shadow) {
        ga(N.shadow);
        continue;
      }
      const q = N.node, K = (te ? te(q) : q.nodeType) === yi.element, he = $(q);
      if (he)
        for (let ve = he.length - 1; ve >= 0; --ve)
          y.push({
            node: he[ve],
            shadow: null
          });
      if (K) {
        const ve = ne ? ne(q) : null;
        if (typeof ve == "string" && oe(ve) === "template") {
          const mt = q.content;
          ha(mt) && y.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (K) {
        const ve = V(q);
        ha(ve) && y.push({
          node: null,
          shadow: ve
        }, {
          node: ve,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(b) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, q = null, K = null, he = null;
    if (Ja = !b, Ja && (b = "<!-->"), typeof b != "string" && !kn(b) && (b = Mw(b), typeof b != "string"))
      throw lc("dirty is not a string, aborting");
    if (!o.isSupported)
      return b;
    mr ? (De = kl, Re = El) : br(y), (ie.uponSanitizeElement.length > 0 || ie.uponSanitizeAttribute.length > 0) && (De = bl(De)), ie.uponSanitizeAttribute.length > 0 && (Re = bl(Re)), o.removed = [];
    const ve = rt && typeof b != "string" && kn(b);
    if (ve) {
      const bt = ne ? ne(b) : b.nodeName;
      if (typeof bt == "string") {
        const on = oe(bt);
        if (!De[on] || Rn[on])
          throw lc("root node is forbidden and cannot be sanitized in-place");
      }
      if (nl(b))
        throw lc("root node is clobbered and cannot be sanitized in-place");
      try {
        Dl(b);
      } catch (on) {
        throw Un(b), on;
      }
    } else if (kn(b))
      N = xn("<!---->"), q = N.ownerDocument.importNode(b, !0), q.nodeType === yi.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? N = q : N.appendChild(q), Dl(q);
    else {
      if (!oa && !bn && !Ye && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return Y && _l ? Be(b) : b;
      if (N = xn(b), !N)
        return oa ? null : _l ? F : "";
    }
    N && ia && Rt(N.firstChild);
    const mt = Hn(ve ? b : N);
    try {
      for (; K = mt.nextNode(); )
        Tr(K), xt(K), ha(K.content) && ga(K.content);
    } catch (bt) {
      throw ve && Un(b), bt;
    }
    if (ve)
      return ym(o.removed, (bt) => {
        bt.element && Ai(bt.element);
      }), bn && Cl(b), b;
    if (oa) {
      if (bn && Cl(N), Ka)
        for (he = G.call(N.ownerDocument); N.firstChild; )
          he.appendChild(N.firstChild);
      else
        he = N;
      return (Re.shadowroot || Re.shadowrootmode) && (he = se.call(f, he, !0)), he;
    }
    let at = Ye ? N.outerHTML : N.innerHTML;
    return Ye && De["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && qa(Xw, N.ownerDocument.doctype.name) && (at = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + at), bn && (at = Ol(at)), Y && _l ? Be(at) : at;
  }, o.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    br(b), mr = !0, kl = De, El = Re;
  }, o.clearConfig = function() {
    Fe = null, mr = !1, kl = null, El = null, Y = J, F = "";
  }, o.isValidAttribute = function(b, y, N) {
    Fe || br({});
    const q = oe(b), K = oe(y);
    return Ni(q, K, N);
  }, o.addHook = function(b, y) {
    typeof y == "function" && la(ie, b) && wc(ie[b], y);
  }, o.removeHook = function(b, y) {
    if (la(ie, b)) {
      if (y !== void 0) {
        const N = Aw(ie[b], y);
        return N === -1 ? void 0 : Nw(ie[b], N, 1)[0];
      }
      return Cb(ie[b]);
    }
  }, o.removeHooks = function(b) {
    la(ie, b) && (ie[b] = []);
  }, o.removeAllHooks = function() {
    ie = Vb();
  }, o;
}
var Gb = T1();
let Xm = null;
function Ww() {
  return Xm || (typeof window < "u" ? Xm = Gb(window) : Xm = Gb), Xm;
}
const Ac = (r) => ({ __html: Ww().sanitize(r) });
g.shape({
  event: g.string,
  action: g.string,
  name: g.string,
  region: g.string,
  section: g.string,
  component: g.string,
  type: g.string,
  text: g.string
});
const Jw = ({
  event: r = "",
  action: o = "",
  name: s = "",
  type: f = "",
  section: c = "",
  text: p = "",
  region: h = "",
  component: T = "",
  eventCallback: S,
  eventTimeout: x
}) => {
  const { dataLayer: D } = window, C = {
    event: r.toLowerCase(),
    action: o.toLowerCase(),
    name: s.toLowerCase(),
    type: f.toLowerCase(),
    region: h.toLowerCase(),
    section: c.toLowerCase(),
    text: p.toLowerCase(),
    component: T.toLowerCase()
  };
  S && (C.eventCallback = S), x && (C.eventTimeout = x), D ? D.push(C) : S && S();
}, qm = ({ children: r }) => /* @__PURE__ */ B.jsx(B.Fragment, { children: r });
qm.propTypes = {
  children: g.oneOfType([
    g.arrayOf(g.node),
    g.node,
    g.string
  ])
};
var Yb = { exports: {} }, Fb;
function eT() {
  return Fb || (Fb = 1, (function(r) {
    (function() {
      var o = {}.hasOwnProperty;
      function s() {
        for (var p = "", h = 0; h < arguments.length; h++) {
          var T = arguments[h];
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
        var h = "";
        for (var T in p)
          o.call(p, T) && p[T] && (h = c(h, T));
        return h;
      }
      function c(p, h) {
        return h ? p ? p + " " + h : p + h : p;
      }
      r.exports ? (s.default = s, r.exports = s) : window.classNames = s;
    })();
  })(Yb)), Yb.exports;
}
var tT = eT();
const Go = /* @__PURE__ */ nb(tT);
({
  ...qm.propTypes
});
const x1 = ({ children: r, className: o = "container", ...s }) => /* @__PURE__ */ B.jsx("div", { className: o, ...s, children: /* @__PURE__ */ B.jsx("div", { className: "row", children: r }) });
x1.propTypes = {
  children: qm.propTypes.children
};
({
  ...x1.propTypes
});
qm.propTypes.children, g.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
qm.propTypes.children;
const nT = g.shape({
  url: g.string,
  altText: g.string,
  cssClass: g.arrayOf(g.string),
  size: g.oneOf(["small", "medium", "large"])
}), Wy = g.shape({
  text: g.string,
  maxWidth: g.string,
  cssClass: g.arrayOf(g.string),
  highlightColor: g.oneOf(["gold", "black"])
}), k1 = g.shape({
  color: g.oneOf(["gold", "maroon", "gray", "dark"]),
  content: g.shape({
    icon: g.arrayOf(g.string),
    header: g.string,
    body: g.string
  })
}), ab = g.shape({
  text: g.string,
  name: g.string,
  event: g.string,
  action: g.string,
  type: g.string,
  region: g.string,
  section: g.string,
  component: g.string
}), aT = "staticMarkup";
function lT() {
  const r = h1().indexOf(aT) > -1 ? !0 : void 0;
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
  let h = "";
  ["input", "header", "header-input"].includes(o) && (h = `-${o}`);
  const T = {
    [`data-ga${h}`]: r.text,
    [`data-ga${h}-name`]: r.name,
    [`data-ga${h}-event`]: r.event,
    [`data-ga${h}-action`]: r.action,
    [`data-ga${h}-type`]: r.type,
    [`data-ga${h}-region`]: r.region,
    [`data-ga${h}-section`]: r.section,
    [`data-ga${h}-component`]: r.component
  };
  return ht.cloneElement(s, {
    ...p,
    onClick: c,
    ...T
  });
};
g.number, g.string, g.number, g.func, g.object;
g.arrayOf(k1).isRequired, g.number;
const Xb = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, E1 = ({
  label: r = "",
  cardTitle: o = "",
  gaData: s,
  ariaLabel: f,
  block: c,
  color: p = "gray",
  disabled: h,
  element: T = "button",
  href: S,
  icon: x,
  innerRef: D,
  onClick: C,
  size: z = "default",
  variant: P,
  classes: j,
  target: H = "_self",
  ...$
}) => {
  if (P) {
    const me = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, te = Go("btn", me[P], {
      [`btn-${me[P]}-${p}`]: !0,
      "btn-medium": z === "medium",
      "btn-small": z === "small",
      "btn-large": z === "large" || z === "default",
      disabled: h
    });
    let ne = T;
    return S && T === "button" && (ne = "a"), /* @__PURE__ */ B.jsx(
      wi,
      {
        gaData: {
          ...Xb,
          section: o,
          ...s,
          text: r
        },
        children: /* @__PURE__ */ B.jsxs(
          ne,
          {
            type: ne === "button" && C ? "button" : void 0,
            ...$,
            className: Go(j) || te,
            href: S,
            ref: D,
            onClick: C,
            "aria-label": f,
            target: ne === "a" ? H : null,
            disabled: h,
            children: [
              x && /* @__PURE__ */ B.jsx("i", { className: `${x == null ? void 0 : x[0]} fa-${x == null ? void 0 : x[1]} me-1` }),
              r
            ]
          }
        )
      }
    );
  }
  const Q = Go("btn", {
    [`btn-${p}`]: !0,
    "btn-md": z === "small",
    "btn-sm": z === "xsmall",
    "btn-block": c,
    disabled: h
  });
  let V = T;
  return S && T === "button" && (V = "a"), /* @__PURE__ */ B.jsx(
    wi,
    {
      gaData: {
        ...Xb,
        section: o,
        // @deprecated - remove at some point
        ...s,
        text: r
      },
      children: /* @__PURE__ */ B.jsxs(
        V,
        {
          type: V === "button" && C ? "button" : void 0,
          ...$,
          className: Go(j) || Q,
          href: S,
          ref: D,
          onClick: C,
          "aria-label": f,
          target: V === "a" ? H : null,
          children: [
            x && /* @__PURE__ */ B.jsx("i", { className: `${x == null ? void 0 : x[0]} fa-${x == null ? void 0 : x[1]} me-1` }),
            r
          ]
        }
      )
    }
  );
};
E1.propTypes = {
  /**
   * Button label
   */
  label: g.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: g.string,
  /**
   * Google Analytics event data
   */
  gaData: ab,
  /**
    ARIA label for accessibility
  */
  ariaLabel: g.string,
  /**
    Render button as a block-button?
  */
  block: g.bool,
  /**
    Button background color
  */
  color: g.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: g.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: g.oneOfType([
    g.func,
    g.string,
    g.shape({ $$typeof: g.symbol, render: g.func }),
    g.arrayOf(
      g.oneOfType([
        g.func,
        g.string,
        g.shape({ $$typeof: g.symbol, render: g.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: g.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: g.arrayOf(g.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: g.oneOfType([
    g.object,
    g.func,
    g.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: g.func,
  /**
    Button size. Legacy sizes (default, small, xsmall) or new sizes (large, medium, small) when used with variant prop.
  */
  size: g.oneOf(["default", "small", "xsmall", "large", "medium"]),
  /**
    Button style variant (borderless, outline, filled). When provided, uses new UDS button styles.
  */
  variant: g.oneOf(["borderless", "outline", "filled"]),
  /**
    Classes to add to button
  */
  classes: g.arrayOf(g.string),
  /**
   Link target type
   */
  target: g.oneOf(["_blank", "_self", "_top", "_parent"])
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
), nn = "-ms-", Rm = "-moz-", wt = "-webkit-", _1 = "comm", xh = "rule", lb = "decl", uT = "@import", sT = "@namespace", A1 = "@keyframes", cT = "@layer", N1 = Math.abs, rb = String.fromCharCode, Rv = Object.assign;
function fT(r, o) {
  return na(r, 0) ^ 45 ? (((o << 2 ^ na(r, 0)) << 2 ^ na(r, 1)) << 2 ^ na(r, 2)) << 2 ^ na(r, 3) : 0;
}
function O1(r) {
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
function C1(r) {
  return r.length;
}
function Nm(r, o) {
  return o.push(r), r;
}
function dT(r, o) {
  return r.map(o).join("");
}
function Ib(r, o) {
  return r.filter(function(s) {
    return !Ho(s, o);
  });
}
var kh = 1, Nc = 1, z1 = 0, cr = 0, On = 0, Mc = "";
function Eh(r, o, s, f, c, p, h, T) {
  return { value: r, root: o, parent: s, type: f, props: c, children: p, line: kh, column: Nc, length: h, return: "", siblings: T };
}
function Io(r, o) {
  return Rv(Eh("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, o);
}
function Tc(r) {
  for (; r.root; )
    r = Io(r.root, { children: [r] });
  Nm(r, r.siblings);
}
function pT() {
  return On;
}
function mT() {
  return On = cr > 0 ? na(Mc, --cr) : 0, Nc--, On === 10 && (Nc = 1, kh--), On;
}
function mi() {
  return On = cr < z1 ? na(Mc, cr++) : 0, Nc++, On === 10 && (Nc = 1, kh++), On;
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
  return kh = Nc = 1, z1 = di(Mc = r), cr = 0, [];
}
function gT(r) {
  return Mc = "", r;
}
function Jy(r) {
  return O1(_h(cr - 1, Mv(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function yT(r) {
  for (; (On = Ko()) && On < 33; )
    mi();
  return Um(r) > 2 || Um(On) > 3 ? "" : " ";
}
function vT(r, o) {
  for (; --o && mi() && !(On < 48 || On > 102 || On > 57 && On < 65 || On > 70 && On < 97); )
    ;
  return _h(r, ah() + (o < 6 && Ko() == 32 && mi() == 32));
}
function Mv(r) {
  for (; mi(); )
    switch (On) {
      // ] ) " '
      case r:
        return cr;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && Mv(On);
        break;
      // (
      case 40:
        r === 41 && Mv(r);
        break;
      // \
      case 92:
        mi();
        break;
    }
  return cr;
}
function bT(r, o) {
  for (; mi() && r + On !== 57 && !(r + On === 84 && Ko() === 47); )
    ;
  return "/*" + _h(o, cr - 1) + "*" + rb(r === 47 ? r : mi());
}
function ST(r) {
  for (; !Um(Ko()); )
    mi();
  return _h(r, cr);
}
function wT(r) {
  return gT(lh("", null, null, null, [""], r = hT(r), 0, [0], r));
}
function lh(r, o, s, f, c, p, h, T, S) {
  for (var x = 0, D = 0, C = h, z = 0, P = 0, j = 0, H = 1, $ = 1, Q = 1, V = 0, me = "", te = c, ne = p, Y = f, F = me; $; )
    switch (j = V, V = mi()) {
      // (
      case 40:
        if (j != 108 && na(F, C - 1) == 58) {
          nh(F += We(Jy(V), "&", "&\f"), "&\f", N1(x ? T[x - 1] : 0)) != -1 && (Q = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        F += Jy(V);
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
        F += vT(ah() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ko()) {
          case 42:
          case 47:
            Nm(TT(bT(mi(), ah()), o, s, S), S), (Um(j || 1) == 5 || Um(Ko() || 1) == 5) && di(F) && dc(F, -1, void 0) !== " " && (F += " ");
            break;
          default:
            F += "/";
        }
        break;
      // {
      case 123 * H:
        T[x++] = di(F) * Q;
      // } ; \0
      case 125 * H:
      case 59:
      case 0:
        switch (V) {
          // \0 }
          case 0:
          case 125:
            $ = 0;
          // ;
          case 59 + D:
            Q == -1 && (F = We(F, /\f/g, "")), P > 0 && (di(F) - C || H === 0 && j === 47) && Nm(P > 32 ? $b(F + ";", f, s, C - 1, S) : $b(We(F, " ", "") + ";", f, s, C - 2, S), S);
            break;
          // @ ;
          case 59:
            F += ";";
          // { rule/at-rule
          default:
            if (Nm(Y = Qb(F, o, s, x, D, c, T, me, te = [], ne = [], C, p), p), V === 123)
              if (D === 0)
                lh(F, o, Y, Y, te, p, C, T, ne);
              else {
                switch (z) {
                  // c(ontainer)
                  case 99:
                    if (na(F, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (na(F, 2) === 97) break;
                  default:
                    D = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                D ? lh(r, Y, Y, f && Nm(Qb(r, Y, Y, 0, 0, c, T, me, c, te = [], C, ne), ne), c, ne, C, T, f ? te : ne) : lh(F, Y, Y, Y, [""], ne, 0, T, ne);
              }
        }
        x = D = P = 0, H = Q = 1, me = F = "", C = h;
        break;
      // :
      case 58:
        C = 1 + di(F), P = j;
      default:
        if (H < 1) {
          if (V == 123)
            --H;
          else if (V == 125 && H++ == 0 && mT() == 125)
            continue;
        }
        switch (F += rb(V), V * H) {
          // &
          case 38:
            Q = D > 0 ? 1 : (F += "\f", -1);
            break;
          // ,
          case 44:
            T[x++] = (di(F) - 1) * Q, Q = 1;
            break;
          // @
          case 64:
            Ko() === 45 && (F += Jy(mi())), z = Ko(), D = C = di(me = F += ST(ah())), V++;
            break;
          // -
          case 45:
            j === 45 && di(F) == 2 && (H = 0);
        }
    }
  return p;
}
function Qb(r, o, s, f, c, p, h, T, S, x, D, C) {
  for (var z = c - 1, P = c === 0 ? p : [""], j = C1(P), H = 0, $ = 0, Q = 0; H < f; ++H)
    for (var V = 0, me = dc(r, z + 1, z = N1($ = h[H])), te = r; V < j; ++V)
      (te = O1($ > 0 ? P[V] + " " + me : We(me, /&\f/g, P[V]))) && (S[Q++] = te);
  return Eh(r, o, s, c === 0 ? xh : T, S, x, D, C);
}
function TT(r, o, s, f) {
  return Eh(r, o, s, _1, rb(pT()), dc(r, 2, -2), 0, f);
}
function $b(r, o, s, f, c) {
  return Eh(r, o, s, lb, dc(r, 0, f), dc(r, f + 1, -1), f, c);
}
function D1(r, o, s) {
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
      return Rm + r + r;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return wt + r + Rm + r + nn + r + r;
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
            return We(r, /(.+:)(.+)-([^]+)/, "$1" + wt + "$2-$3$1" + Rm + (na(r, o + 3) == 108 ? "$3" : "$2-$3")) + r;
          // (s)tretch
          case 115:
            return ~nh(r, "stretch", 0) ? D1(We(r, "stretch", "fill-available"), o, s) + r : r;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return We(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(f, c, p, h, T, S, x) {
        return nn + c + ":" + p + x + (h ? nn + c + "-span:" + (T ? S : +S - +p) + x : "") + r;
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
function xT(r, o, s, f) {
  switch (r.type) {
    case cT:
      if (r.children.length) break;
    case uT:
    case sT:
    case lb:
      return r.return = r.return || r.value;
    case _1:
      return "";
    case A1:
      return r.return = r.value + "{" + gh(r.children, f) + "}";
    case xh:
      if (!di(r.value = r.props.join(","))) return "";
  }
  return di(s = gh(r.children, f)) ? r.return = r.value + "{" + s + "}" : "";
}
function kT(r) {
  var o = C1(r);
  return function(s, f, c, p) {
    for (var h = "", T = 0; T < o; T++)
      h += r[T](s, f, c, p) || "";
    return h;
  };
}
function ET(r) {
  return function(o) {
    o.root || (o = o.return) && r(o);
  };
}
function _T(r, o, s, f) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case lb:
        r.return = D1(r.value, r.length, s);
        return;
      case A1:
        return gh([Io(r, { value: We(r.value, "@", "@" + wt) })], f);
      case xh:
        if (r.length)
          return dT(s = r.props, function(c) {
            switch (Ho(c, f = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Tc(Io(r, { props: [We(c, /:(read-\w+)/, ":" + Rm + "$1")] })), Tc(Io(r, { props: [c] })), Rv(r, { props: Ib(s, f) });
                break;
              // :placeholder
              case "::placeholder":
                Tc(Io(r, { props: [We(c, /:(plac\w+)/, ":" + wt + "input-$1")] })), Tc(Io(r, { props: [We(c, /:(plac\w+)/, ":" + Rm + "$1")] })), Tc(Io(r, { props: [We(c, /:(plac\w+)/, nn + "input-$1")] })), Tc(Io(r, { props: [c] })), Rv(r, { props: Ib(s, f) });
                break;
            }
            return "";
          });
    }
}
var Mt = { env: { NODE_ENV: "production" } }, ev, tv;
const pc = typeof Mt < "u" && Mt.env !== void 0 && (Mt.env.REACT_APP_SC_ATTR || Mt.env.SC_ATTR) || "data-styled", R1 = "active", M1 = "data-styled-version", Ah = "6.4.2", ib = `/*!sc*/
`, Mm = typeof window < "u" && typeof document < "u";
function Pb(r) {
  if (typeof Mt < "u" && Mt.env !== void 0) {
    const o = Mt.env[r];
    if (o !== void 0 && o !== "") return o !== "false";
  }
}
const AT = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (tv = (ev = Pb("REACT_APP_SC_DISABLE_SPEEDY")) !== null && ev !== void 0 ? ev : Pb("SC_DISABLE_SPEEDY")) !== null && tv !== void 0 ? tv : typeof Mt < "u" && Mt.env !== void 0 && Mt.env.NODE_ENV !== "production"), NT = "sc-keyframes-", OT = Mt.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
    for (let p = 1, h = s.length; p < h; p += 1) c.push(s[p]);
    return c.forEach((p) => {
      f = f.replace(/%[a-z]/, p);
    }), f;
  })(OT[r], ...o).trim());
}
const CT = 1 << 30;
let rh = /* @__PURE__ */ new Map(), yh = /* @__PURE__ */ new Map(), ih = 1;
const Im = (r) => {
  if (rh.has(r)) return rh.get(r);
  for (; yh.has(ih); ) ih++;
  const o = ih++;
  if (Mt.env.NODE_ENV !== "production" && ((0 | o) < 0 || o > CT)) throw Vm(16, `${o}`);
  return rh.set(r, o), yh.set(o, r), o;
}, zT = (r) => yh.get(r), DT = (r, o) => {
  ih = o + 1, rh.set(r, o), yh.set(o, r);
}, Kb = /invalid hook call/i, Qm = /* @__PURE__ */ new Set(), RT = (r, o) => {
  if (Mt.env.NODE_ENV !== "production") {
    const s = `The component ${r}${o ? ` with the id of "${o}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, f = console.error;
    try {
      let c = !0;
      console.error = (p, ...h) => {
        Kb.test(p) ? (c = !1, Qm.delete(s)) : f(p, ...h);
      }, typeof ht.useState == "function" && ht.useState(null), c && !Qm.has(s) && (console.warn(s), Qm.add(s));
    } catch (c) {
      Kb.test(c.message) && Qm.delete(s);
    } finally {
      console.error = f;
    }
  }
}, ob = Object.freeze([]), Oc = Object.freeze({});
function MT(r, o, s = Oc) {
  return r.theme !== s.theme && r.theme || o || s.theme;
}
const LT = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, jT = /(^-|-$)/g;
function L1(r) {
  return r.replace(LT, "-").replace(jT, "");
}
const UT = /(a)(d)/gi, Zb = (r) => String.fromCharCode(r + (r > 25 ? 39 : 97));
function j1(r) {
  let o, s = "";
  for (o = Math.abs(r); o > 52; o = o / 52 | 0) s = Zb(o % 52) + s;
  return (Zb(o % 52) + s).replace(UT, "$1-$2");
}
const Lv = 5381, uc = (r, o) => {
  let s = o.length;
  for (; s; ) r = 33 * r ^ o.charCodeAt(--s);
  return r;
}, U1 = (r) => uc(Lv, r);
function HT(r) {
  return j1(U1(r) >>> 0);
}
function ub(r) {
  return Mt.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function oh(r) {
  return typeof r == "string" && (Mt.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
function BT(r) {
  return oh(r) ? `styled.${r}` : `Styled(${ub(r)})`;
}
const H1 = Symbol.for("react.memo"), qT = Symbol.for("react.forward_ref"), VT = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, GT = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, B1 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, YT = { [qT]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [H1]: B1 };
function Wb(r) {
  return ("type" in (o = r) && o.type.$$typeof) === H1 ? B1 : "$$typeof" in r ? YT[r.$$typeof] : VT;
  var o;
}
const FT = Object.defineProperty, XT = Object.getOwnPropertyNames, IT = Object.getOwnPropertySymbols, QT = Object.getOwnPropertyDescriptor, $T = Object.getPrototypeOf, PT = Object.prototype;
function q1(r, o, s) {
  if (typeof o != "string") {
    const f = $T(o);
    f && f !== PT && q1(r, f, s);
    const c = XT(o).concat(IT(o)), p = Wb(r), h = Wb(o);
    for (let T = 0; T < c.length; ++T) {
      const S = c[T];
      if (!(S in GT || s && s[S] || h && S in h || p && S in p)) {
        const x = QT(o, S);
        try {
          FT(r, S, x);
        } catch {
        }
      }
    }
  }
  return r;
}
function Nh(r) {
  return typeof r == "function";
}
const KT = Symbol.for("react.forward_ref");
function V1(r) {
  return r != null && (typeof r == "object" || typeof r == "function") && r.$$typeof === KT && "styledComponentId" in r;
}
function Om(r, o) {
  return r && o ? r + " " + o : r || o || "";
}
function Jb(r, o) {
  return r.join("");
}
function mc(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function jv(r, o, s = !1) {
  if (!s && !mc(r) && !Array.isArray(r)) return o;
  if (Array.isArray(o)) for (let f = 0; f < o.length; f++) r[f] = jv(r[f], o[f]);
  else if (mc(o)) for (const f in o) r[f] = jv(r[f], o[f]);
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
      let h = p;
      for (; r >= h; ) if (h <<= 1, h < 0) throw Vm(16, `${r}`);
      this.groupSizes = new Uint32Array(h), this.groupSizes.set(c), this.length = h;
      for (let T = p; T < h; T++) this.groupSizes[T] = 0;
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
    for (let p = f; p < c; p++) o += this.tag.getRule(p) + ib;
    return o;
  }
}, WT = `style[${pc}][${M1}="${Ah}"]`, JT = new RegExp(`^${pc}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), e0 = (r) => typeof ShadowRoot < "u" && r instanceof ShadowRoot || "host" in r && r.nodeType === 11, Uv = (r) => {
  if (!r) return document;
  if (e0(r)) return r;
  if ("getRootNode" in r) {
    const o = r.getRootNode();
    if (e0(o)) return o;
  }
  return document;
}, ex = (r, o, s) => {
  const f = s.split(",");
  let c;
  for (let p = 0, h = f.length; p < h; p++) (c = f[p]) && r.registerName(o, c);
}, tx = (r, o) => {
  var s;
  const f = ((s = o.textContent) !== null && s !== void 0 ? s : "").split(ib), c = [];
  for (let p = 0, h = f.length; p < h; p++) {
    const T = f[p].trim();
    if (!T) continue;
    const S = T.match(JT);
    if (S) {
      const x = 0 | parseInt(S[1], 10), D = S[2];
      x !== 0 && (DT(D, x), ex(r, D, S[3]), r.getTag().insertRules(x, c)), c.length = 0;
    } else c.push(T);
  }
}, nv = (r) => {
  const o = Uv(r.options.target).querySelectorAll(WT);
  for (let s = 0, f = o.length; s < f; s++) {
    const c = o[s];
    c && c.getAttribute(pc) !== R1 && (tx(r, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
let Sm = !1;
function nx() {
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
    const x = Array.from(S.querySelectorAll(`style[${pc}]`));
    return x[x.length - 1];
  })(f), h = p !== void 0 ? p.nextSibling : null;
  c.setAttribute(pc, R1), c.setAttribute(M1, Ah);
  const T = o || nx();
  return T && c.setAttribute("nonce", T), f.insertBefore(c, h), c;
}, ax = class {
  constructor(r, o) {
    this.element = Y1(r, o), this.element.appendChild(document.createTextNode("")), this.sheet = ((s) => {
      var f;
      if (s.sheet) return s.sheet;
      const c = (f = s.getRootNode().styleSheets) !== null && f !== void 0 ? f : document.styleSheets;
      for (let p = 0, h = c.length; p < h; p++) {
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
}, lx = class {
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
let t0 = Mm;
const rx = { isServer: !Mm, useCSSOMInjection: !AT };
class Oh {
  static registerId(o) {
    return Im(o);
  }
  constructor(o = Oc, s = {}, f) {
    this.options = Object.assign(Object.assign({}, rx), o), this.gs = s, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(f), this.server = !!o.isServer, !this.server && Mm && t0 && (t0 = !1, nv(this)), G1(this, () => ((c) => {
      const p = c.getTag(), { length: h } = p;
      let T = "";
      for (let S = 0; S < h; S++) {
        const x = zT(S);
        if (x === void 0) continue;
        const D = c.names.get(x);
        if (D === void 0 || !D.size) continue;
        const C = p.getGroup(S);
        if (C.length === 0) continue;
        const z = pc + ".g" + S + '[id="' + x + '"]';
        let P = "";
        for (const j of D) j.length > 0 && (P += j + ",");
        T += C + z + '{content:"' + P + '"}' + ib;
      }
      return T;
    })(this));
  }
  rehydrate() {
    !this.server && Mm && nv(this);
  }
  reconstructWithOptions(o, s = !0) {
    const f = new Oh(Object.assign(Object.assign({}, this.options), o), this.gs, s && this.names || void 0);
    return f.keyframeIds = new Set(this.keyframeIds), !this.server && Mm && o.target !== this.options.target && Uv(this.options.target) !== Uv(o.target) && nv(f), f;
  }
  allocateGSInstance(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (o = (({ useCSSOMInjection: s, target: f, nonce: c }) => s ? new ax(f, c) : new lx(f, c))(this.options), new ZT(o)));
    var o;
  }
  hasNameForId(o, s) {
    var f, c;
    return (c = (f = this.names.get(o)) === null || f === void 0 ? void 0 : f.has(s)) !== null && c !== void 0 && c;
  }
  registerName(o, s) {
    Im(o), o.startsWith(NT) && this.keyframeIds.add(o);
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
const F1 = /* @__PURE__ */ new WeakSet(), ix = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function ox(r, o) {
  return o == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || r in ix || r.startsWith("--") ? String(o).trim() : o + "px";
}
const ic = 47;
function n0(r) {
  if (r.charCodeAt(0) === 45 && r.charCodeAt(1) === 45) return r;
  let o = "";
  for (let s = 0; s < r.length; s++) {
    const f = r.charCodeAt(s);
    o += f >= 65 && f <= 90 ? "-" + String.fromCharCode(f + 32) : r[s];
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
const ux = Symbol.for("sc-keyframes");
function Hv(r) {
  return typeof r == "object" && r !== null && ux in r;
}
function X1(r) {
  return Nh(r) && !(r.prototype && r.prototype.isReactComponent);
}
const I1 = (r) => r == null || r === !1 || r === "", sx = Symbol.for("react.client.reference");
function a0(r) {
  return r.$$typeof === sx;
}
function l0(r) {
  const o = r.$$id, s = (o && o.includes("#") ? o.split("#").pop() : o) || r.name || "unknown";
  console.warn(`Interpolating a client component (${s}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function Q1(r, o) {
  for (const s in r) {
    const f = r[s];
    r.hasOwnProperty(s) && !I1(f) && (Array.isArray(f) && F1.has(f) || Nh(f) ? o.push(n0(s) + ":", f, ";") : mc(f) ? (o.push(s + " {"), Q1(f, o), o.push("}")) : o.push(n0(s) + ": " + ox(s, f) + ";"));
  }
}
function sc(r, o, s, f, c = []) {
  if (I1(r)) return c;
  const p = typeof r;
  if (p === "string") return c.push(r), c;
  if (p === "function") {
    if (a0(r)) return Mt.env.NODE_ENV !== "production" && l0(r), c;
    if (X1(r) && o) {
      const h = r(o);
      return Mt.env.NODE_ENV === "production" || typeof h != "object" || Array.isArray(h) || Hv(h) || mc(h) || h === null || console.error(`${ub(r)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), sc(h, o, s, f, c);
    }
    return c.push(r), c;
  }
  if (Array.isArray(r)) {
    for (let h = 0; h < r.length; h++) sc(r[h], o, s, f, c);
    return c;
  }
  return V1(r) ? (c.push(`.${r.styledComponentId}`), c) : Hv(r) ? (s ? (r.inject(s, f), c.push(r.getName(f))) : c.push(r), c) : a0(r) ? (Mt.env.NODE_ENV !== "production" && l0(r), c) : mc(r) ? r.toString !== Object.prototype.toString ? (c.push(r.toString()), c) : (Q1(r, c), c) : (c.push(r.toString()), c);
}
const cx = U1(Ah);
class fx {
  constructor(o, s, f) {
    this.rules = o, this.componentId = s, this.baseHash = uc(cx, s), this.baseStyle = f, Oh.registerId(s);
  }
  generateAndInjectStyles(o, s, f) {
    let c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, s, f) : "";
    {
      let p = "";
      for (let h = 0; h < this.rules.length; h++) {
        const T = this.rules[h];
        if (typeof T == "string") p += T;
        else if (T) if (X1(T)) {
          const S = T(o);
          typeof S == "string" ? p += S : S != null && S !== !1 && (Mt.env.NODE_ENV === "production" || typeof S != "object" || Array.isArray(S) || Hv(S) || mc(S) || console.error(`${ub(T)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), p += Jb(sc(S, o, s, f)));
        } else p += Jb(sc(T, o, s, f));
      }
      if (p) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const h = f.hash ? f.hash + p : p;
        let T = this.dynamicNameCache.get(h);
        if (!T) {
          if (T = j1(uc(uc(this.baseHash, f.hash), p) >>> 0), this.dynamicNameCache.size >= 200) {
            const S = this.dynamicNameCache.keys().next().value;
            S !== void 0 && this.dynamicNameCache.delete(S);
          }
          this.dynamicNameCache.set(h, T);
        }
        if (!s.hasNameForId(this.componentId, T)) {
          const S = f(p, "." + T, void 0, this.componentId);
          s.insertRules(this.componentId, T, S);
        }
        c = Om(c, T);
      }
    }
    return c;
  }
}
const dx = /&/g;
function $1(r, o) {
  let s = 0;
  for (; --o >= 0 && r.charCodeAt(o) === 92; ) s++;
  return !(1 & ~s);
}
function av(r) {
  const o = r.length;
  let s = "", f = 0, c = 0, p = 0, h = !1, T = !1;
  for (let S = 0; S < o; S++) {
    const x = r.charCodeAt(S);
    if (p !== 0 || h || x !== ic || r.charCodeAt(S + 1) !== 42) if (h) x === 42 && r.charCodeAt(S + 1) === ic && (h = !1, S++);
    else if (x !== 34 && x !== 39 || $1(r, S)) {
      if (p === 0) if (x === 123) c++;
      else if (x === 125) {
        if (c--, c < 0) {
          T = !0;
          let D = S + 1;
          for (; D < o; ) {
            const C = r.charCodeAt(D);
            if (C === 59 || C === 10) break;
            D++;
          }
          D < o && r.charCodeAt(D) === 59 && D++, c = 0, S = D - 1, f = D;
          continue;
        }
        c === 0 && (s += r.substring(f, S + 1), f = S + 1);
      } else x === 59 && c === 0 && (s += r.substring(f, S + 1), f = S + 1);
    } else p === 0 ? p = x : p === x && (p = 0);
    else h = !0, S++;
  }
  return T || c !== 0 || p !== 0 ? (f < o && c === 0 && p === 0 && (s += r.substring(f)), s) : r;
}
function P1(r, o) {
  const s = o + " ", f = "," + s;
  for (let c = 0; c < r.length; c++) {
    const p = r[c];
    if (p.type === "rule") {
      p.value = (s + p.value).replaceAll(",", f);
      const h = p.props, T = [];
      for (let S = 0; S < h.length; S++) T[S] = s + h[S];
      p.props = T;
    }
    Array.isArray(p.children) && p.type !== "@keyframes" && P1(p.children, o);
  }
  return r;
}
function px({ options: r = Oc, plugins: o = ob } = Oc) {
  let s, f, c;
  const p = (z, P, j) => j.startsWith(f) && j.endsWith(f) && j.replaceAll(f, "").length > 0 ? `.${s}` : z, h = o.slice();
  h.push((z) => {
    z.type === xh && z.value.includes("&") && (c || (c = new RegExp(`\\${f}\\b`, "g")), z.props[0] = z.props[0].replace(dx, f).replace(c, p));
  }), r.prefix && h.push(_T), h.push(xT);
  let T = [];
  const S = kT(h.concat(ET((z) => T.push(z)))), x = (z, P = "", j = "", H = "&") => {
    s = H, f = P, c = void 0;
    const $ = (function(V) {
      const me = V.indexOf("//") !== -1, te = V.indexOf("}") !== -1;
      if (!me && !te) return V;
      if (!me) return av(V);
      const ne = V.length;
      let Y = "", F = 0, J = 0, ke = 0, He = 0, qe = 0, Be = !1;
      for (; J < ne; ) {
        const Ae = V.charCodeAt(J);
        if (Ae !== 34 && Ae !== 39 || $1(V, J)) if (ke === 0) if (Ae === ic && J + 1 < ne && V.charCodeAt(J + 1) === 42) {
          for (J += 2; J + 1 < ne && (V.charCodeAt(J) !== 42 || V.charCodeAt(J + 1) !== ic); ) J++;
          J += 2;
        } else if (Ae !== 40) if (Ae !== 41) if (He > 0) J++;
        else if (Ae === 42 && J + 1 < ne && V.charCodeAt(J + 1) === ic) Y += V.substring(F, J), J += 2, F = J, Be = !0;
        else if (Ae === ic && J + 1 < ne && V.charCodeAt(J + 1) === ic) {
          for (Y += V.substring(F, J); J < ne && V.charCodeAt(J) !== 10; ) J++;
          F = J, Be = !0;
        } else Ae === 123 ? qe++ : Ae === 125 && qe--, J++;
        else He > 0 && He--, J++;
        else He++, J++;
        else J++;
        else ke === 0 ? ke = Ae : ke === Ae && (ke = 0), J++;
      }
      return Be ? (F < ne && (Y += V.substring(F)), qe === 0 ? Y : av(Y)) : qe === 0 ? V : av(V);
    })(z);
    let Q = wT(j || P ? j + " " + P + " { " + $ + " }" : $);
    return r.namespace && (Q = P1(Q, r.namespace)), T = [], gh(Q, S), T;
  }, D = r;
  let C = Lv;
  for (let z = 0; z < o.length; z++) o[z].name || Vm(15), C = uc(C, o[z].name);
  return D != null && D.namespace && (C = uc(C, D.namespace)), D != null && D.prefix && (C = uc(C, "p")), x.hash = C !== Lv ? C.toString() : "", x;
}
const mx = new Oh(), hx = px(), K1 = ht.createContext({ shouldForwardProp: void 0, styleSheet: mx, stylis: hx, stylisPlugins: void 0 });
K1.Consumer;
function gx() {
  return ht.useContext(K1);
}
const Z1 = ht.createContext(void 0);
Z1.Consumer;
const r0 = Object.prototype.hasOwnProperty, lv = {};
function yx(r, o) {
  const s = typeof r != "string" ? "sc" : L1(r);
  lv[s] = (lv[s] || 0) + 1;
  const f = s + "-" + HT(Ah + s + lv[s]);
  return o ? o + "-" + f : f;
}
let rv;
function vx(r, o, s) {
  const f = V1(r), c = r, p = !oh(r), { attrs: h = ob, componentId: T = yx(o.displayName, o.parentComponentId), displayName: S = BT(r) } = o, x = o.displayName && o.componentId ? L1(o.displayName) + "-" + o.componentId : o.componentId || T, D = f && c.attrs ? c.attrs.concat(h).filter(Boolean) : h;
  let { shouldForwardProp: C } = o;
  if (f && c.shouldForwardProp) {
    const H = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      const $ = o.shouldForwardProp;
      C = (Q, V) => H(Q, V) && $(Q, V);
    } else C = H;
  }
  const z = new fx(s, x, f ? c.componentStyle : void 0);
  function P(H, $) {
    return (function(Q, V, me) {
      const { attrs: te, componentStyle: ne, defaultProps: Y, foldedComponentIds: F, styledComponentId: J, target: ke } = Q, He = ht.useContext(Z1), qe = gx(), Be = Q.shouldForwardProp || qe.shouldForwardProp;
      Mt.env.NODE_ENV !== "production" && ht.useDebugValue && ht.useDebugValue(J);
      const Ae = MT(V, He, Y) || Oc;
      let yt, Qe;
      {
        const re = ht.useRef(null), se = re.current;
        if (se !== null && se[1] === Ae && se[2] === qe.styleSheet && se[3] === qe.stylis && se[7] === ne && (function(ie, we, ue) {
          const Z = ie, ye = we;
          let vt = 0;
          for (const tt in ye) if (r0.call(ye, tt) && (vt++, Z[tt] !== ye[tt])) return !1;
          return vt === ue;
        })(se[0], V, se[4])) yt = se[5], Qe = se[6];
        else {
          yt = (function(we, ue, Z) {
            const ye = Object.assign(Object.assign({}, ue), { className: void 0, theme: Z }), vt = we.length > 1;
            for (let tt = 0; tt < we.length; tt++) {
              const fn = we[tt], dn = Nh(fn) ? fn(vt ? Object.assign({}, ye) : ye) : fn;
              for (const nt in dn) nt === "className" ? ye.className = Om(ye.className, dn[nt]) : nt === "style" ? ye.style = Object.assign(Object.assign({}, ye.style), dn[nt]) : nt in ue && ue[nt] === void 0 || (ye[nt] = dn[nt]);
            }
            return "className" in ue && typeof ue.className == "string" && (ye.className = Om(ye.className, ue.className)), ye;
          })(te, V, Ae), Qe = (function(we, ue, Z, ye) {
            const vt = we.generateAndInjectStyles(ue, Z, ye);
            return Mt.env.NODE_ENV !== "production" && ht.useDebugValue && ht.useDebugValue(vt), vt;
          })(ne, yt, qe.styleSheet, qe.stylis);
          let ie = 0;
          for (const we in V) r0.call(V, we) && ie++;
          re.current = [V, Ae, qe.styleSheet, qe.stylis, ie, yt, Qe, ne];
        }
      }
      Mt.env.NODE_ENV !== "production" && Q.warnTooManyClasses && Q.warnTooManyClasses(Qe);
      const U = yt.as || ke, L = (function(re, se, ie, we) {
        const ue = {};
        for (const Z in re) re[Z] === void 0 || Z[0] === "$" || Z === "as" || Z === "theme" && re.theme === ie || (Z === "forwardedAs" ? ue.as = re.forwardedAs : we && !we(Z, se) || (ue[Z] = re[Z], we || Mt.env.NODE_ENV !== "development" || oT(Z) || (rv || (rv = /* @__PURE__ */ new Set())).has(Z) || !oh(se) || se.includes("-") || (rv.add(Z), console.warn(`styled-components: it looks like an unknown prop "${Z}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return ue;
      })(yt, U, Ae, Be);
      let G = Om(F, J);
      return Qe && (G += " " + Qe), yt.className && (G += " " + yt.className), L[oh(U) && U.includes("-") ? "class" : "className"] = G, me && (L.ref = me), v1(U, L);
    })(j, H, $);
  }
  P.displayName = S;
  let j = ht.forwardRef(P);
  return j.attrs = D, j.componentStyle = z, j.displayName = S, j.shouldForwardProp = C, j.foldedComponentIds = f ? Om(c.foldedComponentIds, c.styledComponentId) : "", j.styledComponentId = x, j.target = f ? c.target : r, Object.defineProperty(j, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(H) {
    this._foldedDefaultProps = f ? (function($, ...Q) {
      for (const V of Q) jv($, V, !0);
      return $;
    })({}, c.defaultProps, H) : H;
  } }), Mt.env.NODE_ENV !== "production" && (RT(S, x), j.warnTooManyClasses = /* @__PURE__ */ ((H, $) => {
    let Q = {}, V = !1;
    return (me) => {
      !V && (Q[me] = !0, Object.keys(Q).length >= 200) && (console.warn(`Over 200 classes were generated for component ${H}${$ ? ` with the id of "${$}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), V = !0, Q = {});
    };
  })(S, x)), G1(j, () => `.${j.styledComponentId}`), p && q1(j, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), j;
}
var bx = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function i0(r, o) {
  const s = [r[0]];
  for (let f = 0, c = o.length; f < c; f += 1) s.push(o[f], r[f + 1]);
  return s;
}
const o0 = (r) => (F1.add(r), r);
function Sx(r, ...o) {
  if (Nh(r) || mc(r)) return o0(sc(i0(ob, [r, ...o])));
  const s = r;
  return o.length === 0 && s.length === 1 && typeof s[0] == "string" ? sc(s) : o0(sc(i0(s, o)));
}
function Bv(r, o, s = Oc) {
  if (!o) throw Vm(1, o);
  const f = (c, ...p) => r(o, s, Sx(c, ...p));
  return f.attrs = (c) => Bv(r, o, Object.assign(Object.assign({}, s), { attrs: Array.prototype.concat(s.attrs, c).filter(Boolean) })), f.withConfig = (c) => Bv(r, o, Object.assign(Object.assign({}, s), c)), f;
}
const W1 = (r) => Bv(vx, r), Ti = W1;
bx.forEach((r) => {
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
g.arrayOf(
  g.shape({
    text: g.string.isRequired,
    targetIdName: g.string.isRequired,
    icon: g.arrayOf(g.string)
  })
).isRequired, g.string.isRequired, g.bool;
var iv = { exports: {} }, ov = { exports: {} }, uv, u0;
function wx() {
  if (u0) return uv;
  u0 = 1;
  var r = 1e3, o = r * 60, s = o * 60, f = s * 24, c = f * 365.25;
  uv = function(x, D) {
    D = D || {};
    var C = typeof x;
    if (C === "string" && x.length > 0)
      return p(x);
    if (C === "number" && isNaN(x) === !1)
      return D.long ? T(x) : h(x);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(x)
    );
  };
  function p(x) {
    if (x = String(x), !(x.length > 100)) {
      var D = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        x
      );
      if (D) {
        var C = parseFloat(D[1]), z = (D[2] || "ms").toLowerCase();
        switch (z) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return C * c;
          case "days":
          case "day":
          case "d":
            return C * f;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return C * s;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return C * o;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return C * r;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return C;
          default:
            return;
        }
      }
    }
  }
  function h(x) {
    return x >= f ? Math.round(x / f) + "d" : x >= s ? Math.round(x / s) + "h" : x >= o ? Math.round(x / o) + "m" : x >= r ? Math.round(x / r) + "s" : x + "ms";
  }
  function T(x) {
    return S(x, f, "day") || S(x, s, "hour") || S(x, o, "minute") || S(x, r, "second") || x + " ms";
  }
  function S(x, D, C) {
    if (!(x < D))
      return x < D * 1.5 ? Math.floor(x / D) + " " + C : Math.ceil(x / D) + " " + C + "s";
  }
  return uv;
}
var s0;
function Tx() {
  return s0 || (s0 = 1, (function(r, o) {
    o = r.exports = c.debug = c.default = c, o.coerce = S, o.disable = h, o.enable = p, o.enabled = T, o.humanize = wx(), o.names = [], o.skips = [], o.formatters = {};
    var s;
    function f(x) {
      var D = 0, C;
      for (C in x)
        D = (D << 5) - D + x.charCodeAt(C), D |= 0;
      return o.colors[Math.abs(D) % o.colors.length];
    }
    function c(x) {
      function D() {
        if (D.enabled) {
          var C = D, z = +/* @__PURE__ */ new Date(), P = z - (s || z);
          C.diff = P, C.prev = s, C.curr = z, s = z;
          for (var j = new Array(arguments.length), H = 0; H < j.length; H++)
            j[H] = arguments[H];
          j[0] = o.coerce(j[0]), typeof j[0] != "string" && j.unshift("%O");
          var $ = 0;
          j[0] = j[0].replace(/%([a-zA-Z%])/g, function(V, me) {
            if (V === "%%") return V;
            $++;
            var te = o.formatters[me];
            if (typeof te == "function") {
              var ne = j[$];
              V = te.call(C, ne), j.splice($, 1), $--;
            }
            return V;
          }), o.formatArgs.call(C, j);
          var Q = D.log || o.log || console.log.bind(console);
          Q.apply(C, j);
        }
      }
      return D.namespace = x, D.enabled = o.enabled(x), D.useColors = o.useColors(), D.color = f(x), typeof o.init == "function" && o.init(D), D;
    }
    function p(x) {
      o.save(x), o.names = [], o.skips = [];
      for (var D = (typeof x == "string" ? x : "").split(/[\s,]+/), C = D.length, z = 0; z < C; z++)
        D[z] && (x = D[z].replace(/\*/g, ".*?"), x[0] === "-" ? o.skips.push(new RegExp("^" + x.substr(1) + "$")) : o.names.push(new RegExp("^" + x + "$")));
    }
    function h() {
      o.enable("");
    }
    function T(x) {
      var D, C;
      for (D = 0, C = o.skips.length; D < C; D++)
        if (o.skips[D].test(x))
          return !1;
      for (D = 0, C = o.names.length; D < C; D++)
        if (o.names[D].test(x))
          return !0;
      return !1;
    }
    function S(x) {
      return x instanceof Error ? x.stack || x.message : x;
    }
  })(ov, ov.exports)), ov.exports;
}
var c0;
function xx() {
  return c0 || (c0 = 1, (function(r, o) {
    var s = { env: { NODE_ENV: "production" } };
    o = r.exports = Tx(), o.log = p, o.formatArgs = c, o.save = h, o.load = T, o.useColors = f, o.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : S(), o.colors = [
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
    o.formatters.j = function(x) {
      try {
        return JSON.stringify(x);
      } catch (D) {
        return "[UnexpectedJSONParseError]: " + D.message;
      }
    };
    function c(x) {
      var D = this.useColors;
      if (x[0] = (D ? "%c" : "") + this.namespace + (D ? " %c" : " ") + x[0] + (D ? "%c " : " ") + "+" + o.humanize(this.diff), !!D) {
        var C = "color: " + this.color;
        x.splice(1, 0, C, "color: inherit");
        var z = 0, P = 0;
        x[0].replace(/%[a-zA-Z%]/g, function(j) {
          j !== "%%" && (z++, j === "%c" && (P = z));
        }), x.splice(P, 0, C);
      }
    }
    function p() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function h(x) {
      try {
        x == null ? o.storage.removeItem("debug") : o.storage.debug = x;
      } catch {
      }
    }
    function T() {
      var x;
      try {
        x = o.storage.debug;
      } catch {
      }
      return !x && typeof s < "u" && "env" in s && (x = s.env.DEBUG), x;
    }
    o.enable(T());
    function S() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  })(iv, iv.exports)), iv.exports;
}
var sv, f0;
function kx() {
  if (f0) return sv;
  f0 = 1;
  var r = xx()("jsonp");
  sv = f;
  var o = 0;
  function s() {
  }
  function f(c, p, h) {
    typeof p == "function" && (h = p, p = {}), p || (p = {});
    var T = p.prefix || "__jp", S = p.name || T + o++, x = p.param || "callback", D = p.timeout != null ? p.timeout : 6e4, C = encodeURIComponent, z = document.getElementsByTagName("script")[0] || document.head, P, j;
    D && (j = setTimeout(function() {
      H(), h && h(new Error("Timeout"));
    }, D));
    function H() {
      P.parentNode && P.parentNode.removeChild(P), window[S] = s, j && clearTimeout(j);
    }
    function $() {
      window[S] && H();
    }
    return window[S] = function(Q) {
      r("jsonp got", Q), H(), h && h(null, Q);
    }, c += (~c.indexOf("?") ? "&" : "?") + x + "=" + C(S), c = c.replace("?&", "?"), r('jsonp req "%s"', c), P = document.createElement("script"), P.src = c, z.parentNode.insertBefore(P, z), $;
  }
  return sv;
}
var Ex = kx();
const vc = /* @__PURE__ */ nb(Ex);
var _x = Object.defineProperty, Ax = Object.defineProperties, Nx = Object.getOwnPropertyDescriptors, vh = Object.getOwnPropertySymbols, J1 = Object.prototype.hasOwnProperty, eS = Object.prototype.propertyIsEnumerable, d0 = (r, o, s) => o in r ? _x(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[o] = s, gt = (r, o) => {
  for (var s in o || (o = {}))
    J1.call(o, s) && d0(r, s, o[s]);
  if (vh)
    for (var s of vh(o))
      eS.call(o, s) && d0(r, s, o[s]);
  return r;
}, Ft = (r, o) => Ax(r, Nx(o)), Xt = (r, o) => {
  var s = {};
  for (var f in r)
    J1.call(r, f) && o.indexOf(f) < 0 && (s[f] = r[f]);
  if (r != null && vh)
    for (var f of vh(r))
      o.indexOf(f) < 0 && eS.call(r, f) && (s[f] = r[f]);
  return s;
};
class Ox extends Error {
  constructor(o) {
    super(o), this.name = "AssertionError";
  }
}
function ln(r, o) {
  if (!r)
    throw new Ox(o);
}
function jt(r) {
  const o = Object.entries(r).filter(([, s]) => s != null).map(([s, f]) => `${encodeURIComponent(s)}=${encodeURIComponent(String(f))}`);
  return o.length > 0 ? `?${o.join("&")}` : "";
}
const Cx = {
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
}, zx = (r) => !!r && (typeof r == "object" || typeof r == "function") && "then" in r && typeof r.then == "function", Dx = (r, o) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - r / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - o / 2
}), Rx = (r, o) => ({
  top: (window.screen.height - o) / 2,
  left: (window.screen.width - r) / 2
});
function Mx(r) {
  var o;
  const s = g1.toArray(r);
  if (s.length !== 1)
    return;
  const [f] = s;
  if (y1(f))
    return f.props.round ? "50%" : (o = f.props.borderRadius) != null ? o : 0;
}
function tS(r) {
  return g1.toArray(r).some((o) => typeof o == "string" ? o.trim().length > 0 : typeof o == "number" ? !0 : y1(o) ? tS(o.props.children) : !1);
}
function Lx(r, o, s) {
  var f = o, { height: c, width: p } = f, h = Xt(f, ["height", "width"]);
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
  }, h), S = window.open(
    r,
    "",
    Object.keys(T).map((x) => `${x}=${T[x]}`).join(", ")
  );
  if (s) {
    const x = window.setInterval(() => {
      try {
        (S === null || S.closed) && (window.clearInterval(x), s(S));
      } catch (D) {
        console.error(D);
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
    className: h,
    disabled: T,
    disabledStyle: S = { opacity: 0.6 },
    forwardedRef: x,
    htmlTitle: D,
    networkLink: C,
    networkName: z,
    onClick: P,
    onShareWindowClose: j,
    openShareDialogOnClick: H = !0,
    opts: $,
    resetButtonStyle: Q = !0,
    style: V,
    title: me,
    type: te = "button",
    url: ne,
    windowHeight: Y = 400,
    windowPosition: F = "windowCenter",
    windowWidth: J = 550
  } = o, ke = Xt(o, [
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
  const He = Mx(p), qe = !s && !f && !tS(p) ? Cx[z] : void 0, Be = async (Qe) => {
    if (T)
      return;
    const U = C(ne, $);
    if (Qe.preventDefault(), c) {
      const L = c();
      zx(L) && await L;
    }
    if (H) {
      const L = gt({
        height: Y,
        width: J
      }, F === "windowCenter" ? Dx(J, Y) : Rx(J, Y));
      Lx(U, L, j);
    }
    P && P(Qe, U);
  }, Ae = Go(
    "react-share__ShareButton",
    {
      "react-share__ShareButton--disabled": !!T,
      disabled: !!T
    },
    h
  ), yt = gt(gt(Q ? {
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    display: "inline-flex",
    borderRadius: He,
    outlineOffset: 2,
    font: "inherit",
    color: "inherit",
    cursor: "pointer"
  } : {}, V), T && S);
  return /* @__PURE__ */ B.jsx(
    "button",
    Ft(gt({}, ke), {
      "aria-label": s || qe,
      "aria-labelledby": f,
      className: Ae,
      disabled: T,
      onClick: Be,
      ref: x,
      style: yt,
      title: D,
      type: te,
      children: p
    })
  );
}
function jx(r, { title: o, separator: s }) {
  return ln(r, "bluesky.url"), "https://bsky.app/intent/compose" + jt({
    text: o ? o + s + r : r
  });
}
const Ux = rn(
  (r, o) => {
    var s = r, { separator: f, title: c } = s, p = Xt(s, ["separator", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "bluesky",
        networkLink: jx,
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
Ux.displayName = "BlueskyShareButton";
function Hx(r, { subject: o, body: s, separator: f }) {
  return "mailto:" + jt({ subject: o, body: s ? s + f + r : r });
}
const Bx = rn(
  (r, o) => {
    var s = r, { body: f, separator: c, subject: p } = s, h = Xt(s, ["body", "separator", "subject"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, h), {
        forwardedRef: o,
        networkName: "email",
        networkLink: Hx,
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
Bx.displayName = "EmailShareButton";
function qx(r, { appId: o, redirectUri: s, to: f }) {
  return "https://www.facebook.com/dialog/send" + jt({
    link: r,
    redirect_uri: s || r,
    app_id: o,
    to: f
  });
}
const Vx = rn((r, o) => {
  var s = r, { appId: f, redirectUri: c, to: p } = s, h = Xt(s, ["appId", "redirectUri", "to"]);
  return /* @__PURE__ */ B.jsx(
    cn,
    Ft(gt({}, h), {
      forwardedRef: o,
      networkName: "facebookmessenger",
      networkLink: qx,
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
Vx.displayName = "FacebookMessengerShareButton";
function Gx(r, { hashtag: o }) {
  return ln(r, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + jt({ u: r, hashtag: o });
}
const Yx = rn(
  (r, o) => {
    var s = r, { hashtag: f } = s, c = Xt(s, ["hashtag"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "facebook",
        networkLink: Gx,
        opts: { hashtag: f },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
Yx.displayName = "FacebookShareButton";
function Fx() {
  const r = th(!1);
  return gi(() => (r.current = !0, () => {
    r.current = !1;
  }), []), Cv(() => r.current, []);
}
function Xx(r) {
  var o = r, {
    children: s = (z) => z,
    className: f,
    getCount: c,
    url: p
  } = o, h = Xt(o, [
    "children",
    "className",
    "getCount",
    "url"
  ]);
  const T = Fx(), [S, x] = Vo(void 0), [D, C] = Vo(!1);
  return gi(() => {
    C(!0), c(p, (z) => {
      T() && (x(z), C(!1));
    });
  }, [p]), /* @__PURE__ */ B.jsx("span", Ft(gt({ className: Go("react-share__ShareCount", f) }, h), { children: !D && S !== void 0 && s(S) }));
}
function bc(r) {
  const o = (s) => /* @__PURE__ */ B.jsx(Xx, gt({ getCount: r }, s));
  return o.displayName = `ShareCount(${r.name})`, o;
}
function Ix(r, o) {
  const s = `https://graph.facebook.com/?id=${r}&fields=og_object{engagement}`;
  vc(s, (f, c) => {
    o(
      !f && c && c.og_object && c.og_object.engagement ? c.og_object.engagement.count : void 0
    );
  });
}
bc(Ix);
function Qx(r, { title: o }) {
  return ln(r, "hatena.url"), `http://b.hatena.ne.jp/add?mode=confirm&url=${r}&title=${o}`;
}
const $x = rn(
  (r, o) => {
    var s = r, { title: f } = s, c = Xt(s, ["title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "hatena",
        networkLink: Qx,
        opts: { title: f },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
$x.displayName = "HatenaShareButton";
function Px(r, o) {
  vc(
    "https://bookmark.hatenaapis.com/count/entry" + jt({
      url: r
    }),
    (s, f) => {
      o(f ?? void 0);
    }
  );
}
bc(Px);
function Kx(r, { title: o, description: s }) {
  return ln(r, "instapaper.url"), "http://www.instapaper.com/hello2" + jt({
    url: r,
    title: o,
    description: s
  });
}
const Zx = rn(
  (r, o) => {
    var s = r, { description: f, title: c } = s, p = Xt(s, ["description", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "instapaper",
        networkLink: Kx,
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
Zx.displayName = "InstapaperShareButton";
function Wx(r, { title: o }) {
  return ln(r, "line.url"), "https://social-plugins.line.me/lineit/share" + jt({
    url: r,
    text: o
  });
}
const Jx = rn(
  (r, o) => {
    var s = r, { title: f } = s, c = Xt(s, ["title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "line",
        networkLink: Wx,
        opts: { title: f },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
Jx.displayName = "LineShareButton";
function ek(r, { title: o, summary: s, source: f }) {
  return ln(r, "linkedin.url"), "https://linkedin.com/shareArticle" + jt({ url: r, mini: "true", title: o, summary: s, source: f });
}
const tk = rn(
  (r, o) => {
    var s = r, { source: f, summary: c, title: p } = s, h = Xt(s, ["source", "summary", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, h), {
        forwardedRef: o,
        networkName: "linkedin",
        networkLink: ek,
        opts: { title: p, summary: c, source: f },
        windowHeight: 600,
        windowWidth: 750
      })
    );
  }
);
tk.displayName = "LinkedinShareButton";
function nk(r, { title: o, description: s }) {
  return ln(r, "livejournal.url"), "https://www.livejournal.com/update.bml" + jt({
    subject: o,
    event: s
  });
}
const ak = rn(
  (r, o) => {
    var s = r, { description: f, title: c } = s, p = Xt(s, ["description", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "livejournal",
        networkLink: nk,
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
ak.displayName = "LivejournalShareButton";
function lk(r, { title: o, description: s, imageUrl: f }) {
  return ln(r, "mailru.url"), "https://connect.mail.ru/share" + jt({
    url: r,
    title: o,
    description: s,
    image_url: f
  });
}
const rk = rn(
  (r, o) => {
    var s = r, { description: f, imageUrl: c, title: p } = s, h = Xt(s, ["description", "imageUrl", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, h), {
        forwardedRef: o,
        networkName: "mailru",
        networkLink: lk,
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
rk.displayName = "MailruShareButton";
function ik(r, { title: o, description: s, image: f }) {
  return ln(r, "ok.url"), "https://connect.ok.ru/offer" + jt({
    url: r,
    title: o,
    description: s,
    imageUrl: f
  });
}
const ok = rn(
  (r, o) => {
    var s = r, { description: f, image: c, title: p } = s, h = Xt(s, ["description", "image", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, h), {
        forwardedRef: o,
        networkName: "ok",
        networkLink: ik,
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
ok.displayName = "OKShareButton";
function uk(r, o) {
  window.OK || (window.OK = {
    Share: {
      count: function(c, p) {
        var h, T;
        (T = (h = window.OK.callbacks)[c]) == null || T.call(h, p);
      }
    },
    callbacks: []
  });
  const s = "https://connect.ok.ru/dk", f = window.OK.callbacks.length;
  return window.ODKL = {
    updateCount(c, p) {
      var h, T;
      const S = c === "" ? 0 : parseInt(c.replace("react-share-", ""), 10);
      (T = (h = window.OK.callbacks)[S]) == null || T.call(h, p === "" ? void 0 : parseInt(p, 10));
    }
  }, window.OK.callbacks.push(o), vc(
    s + jt({
      "st.cmd": "extLike",
      uid: `react-share-${f}`,
      ref: r
    })
  );
}
bc(uk);
function sk(r, { media: o, description: s, pinId: f }) {
  return f ? `https://pinterest.com/pin/${f}/repin/x/` : (ln(r, "pinterest.url"), ln(o, "pinterest.media"), "https://pinterest.com/pin/create/button/" + jt({
    url: r,
    media: o,
    description: s
  }));
}
const ck = rn(
  (r, o) => {
    var s = r, { description: f, media: c, pinId: p } = s, h = Xt(s, ["description", "media", "pinId"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, h), {
        forwardedRef: o,
        networkName: "pinterest",
        networkLink: sk,
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
ck.displayName = "PinterestShareButton";
function fk(r, o) {
  vc(
    "https://api.pinterest.com/v1/urls/count.json" + jt({
      url: r
    }),
    (s, f) => {
      o(f ? f.count : void 0);
    }
  );
}
bc(fk);
function dk(r, { title: o }) {
  return ln(r, "pocket.url"), "https://getpocket.com/save" + jt({
    url: r,
    title: o
  });
}
const pk = rn(
  (r, o) => {
    var s = r, { title: f } = s, c = Xt(s, ["title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "pocket",
        networkLink: dk,
        opts: { title: f },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
pk.displayName = "PocketShareButton";
function mk(r, { title: o }) {
  return ln(r, "reddit.url"), "https://www.reddit.com/submit" + jt({
    url: r,
    title: o
  });
}
const hk = rn(
  (r, o) => {
    var s = r, { title: f } = s, c = Xt(s, ["title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "reddit",
        networkLink: mk,
        opts: { title: f },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
hk.displayName = "RedditShareButton";
function gk(r, { title: o }) {
  return ln(r, "gab.url"), "https://gab.com/compose" + jt({
    url: r,
    text: o
  });
}
const yk = rn(
  (r, o) => {
    var s = r, { title: f } = s, c = Xt(s, ["title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "gab",
        networkLink: gk,
        opts: { title: f },
        windowHeight: 640,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
yk.displayName = "GabShareButton";
function vk(r, o) {
  const s = `https://www.reddit.com/api/info.json?limit=1&url=${r}`;
  vc(s, { param: "jsonp" }, (f, c) => {
    o(
      !f && c && c.data && c.data.children.length > 0 && c.data.children[0].data.score ? c.data.children[0].data.score : void 0
    );
  });
}
bc(vk);
function bk(r, { title: o }) {
  return ln(r, "telegram.url"), "https://telegram.me/share/url" + jt({
    url: r,
    text: o
  });
}
const Sk = rn(
  (r, o) => {
    var s = r, { title: f } = s, c = Xt(s, ["title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, c), {
        forwardedRef: o,
        networkName: "telegram",
        networkLink: bk,
        opts: { title: f },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
Sk.displayName = "TelegramShareButton";
function wk(r, { title: o }) {
  return ln(r, "threads.url"), "https://threads.net/intent/post" + jt({
    url: r,
    text: o
  });
}
const Tk = rn(
  (r, o) => {
    var s = r, { hashtags: f, related: c, title: p, via: h } = s, T = Xt(s, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, T), {
        forwardedRef: o,
        networkName: "threads",
        networkLink: wk,
        opts: { title: p },
        windowHeight: 600,
        windowWidth: 550
      })
    );
  }
);
Tk.displayName = "ThreadsShareButton";
function xk(r, {
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
const kk = rn(
  (r, o) => {
    var s = r, { caption: f, posttype: c, tags: p, title: h } = s, T = Xt(s, ["caption", "posttype", "tags", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, T), {
        forwardedRef: o,
        networkName: "tumblr",
        networkLink: xk,
        opts: {
          title: h,
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
kk.displayName = "TumblrShareButton";
function Ek(r, o) {
  return vc(
    "https://api.tumblr.com/v2/share/stats" + jt({
      url: r
    }),
    (s, f) => {
      o(!s && f && f.response ? f.response.note_count : void 0);
    }
  );
}
bc(Ek);
function _k(r, {
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
    var s = r, { hashtags: f, related: c, title: p, via: h } = s, T = Xt(s, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, T), {
        forwardedRef: o,
        networkName: "twitter",
        networkLink: _k,
        opts: {
          hashtags: f,
          title: p,
          via: h,
          related: c
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
nS.displayName = "XShareButton";
const Ak = rn((r, o) => /* @__PURE__ */ B.jsx(nS, Ft(gt({}, r), { ref: o })));
Ak.displayName = "TwitterShareButton";
function Nk(r, { title: o, separator: s }) {
  return ln(r, "viber.url"), "viber://forward" + jt({
    text: o ? o + s + r : r
  });
}
const Ok = rn(
  (r, o) => {
    var s = r, { separator: f, title: c } = s, p = Xt(s, ["separator", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "viber",
        networkLink: Nk,
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
Ok.displayName = "ViberShareButton";
function Ck(r, { title: o, image: s, noParse: f, noVkLinks: c }) {
  return ln(r, "vk.url"), "https://vk.com/share.php" + jt({
    url: r,
    title: o,
    image: s,
    noparse: f ? 1 : 0,
    no_vk_links: c ? 1 : 0
  });
}
const zk = rn(
  (r, o) => {
    var s = r, { image: f, noParse: c, noVkLinks: p, title: h } = s, T = Xt(s, ["image", "noParse", "noVkLinks", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, T), {
        forwardedRef: o,
        networkName: "vk",
        networkLink: Ck,
        opts: {
          title: h,
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
zk.displayName = "VKShareButton";
function Dk(r, o) {
  window.VK || (window.VK = {}), window.VK.Share = {
    count: (c, p) => {
      var h, T;
      return (T = (h = window.VK.callbacks) == null ? void 0 : h[c]) == null ? void 0 : T.call(h, p);
    }
  }, window.VK.callbacks = [];
  const s = "https://vk.com/share.php", f = window.VK.callbacks.length;
  return window.VK.callbacks.push(o), vc(
    s + jt({
      act: "count",
      index: f,
      url: r
    })
  );
}
bc(Dk);
function Rk(r, { title: o, image: s }) {
  return ln(r, "weibo.url"), "http://service.weibo.com/share/share.php" + jt({
    url: r,
    title: o,
    pic: s
  });
}
const Mk = rn(
  (r, o) => {
    var s = r, { image: f, title: c } = s, p = Xt(s, ["image", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "weibo",
        networkLink: Rk,
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
Mk.displayName = "WeiboShareButton";
function Lk(r, { title: o, separator: s }) {
  return ln(r, "whatsapp.url"), "https://api.whatsapp.com/send" + jt({
    text: o ? o + s + r : r
  });
}
const jk = rn(
  (r, o) => {
    var s = r, { separator: f, title: c } = s, p = Xt(s, ["separator", "title"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "whatsapp",
        networkLink: Lk,
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
jk.displayName = "WhatsappShareButton";
function Uk(r, { quote: o, hashtag: s }) {
  return ln(r, "workplace.url"), "https://work.facebook.com/sharer.php" + jt({
    u: r,
    quote: o,
    hashtag: s
  });
}
const Hk = rn(
  (r, o) => {
    var s = r, { hashtag: f, quote: c } = s, p = Xt(s, ["hashtag", "quote"]);
    return /* @__PURE__ */ B.jsx(
      cn,
      Ft(gt({}, p), {
        forwardedRef: o,
        networkName: "workplace",
        networkLink: Uk,
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
Hk.displayName = "WorkplaceShareButton";
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
g.oneOf(["event", "news"]), g.string.isRequired, g.string.isRequired, g.string.isRequired, g.string.isRequired, g.string, g.string.isRequired, g.string, g.string, g.arrayOf(
  g.shape({
    title: g.string,
    url: g.string,
    active: g.bool
  })
), g.string, g.string, g.string, g.string, g.string, g.string;
g.oneOf(["white", "gray", "black"]), g.arrayOf(g.string), g.oneOfType([
  g.object,
  g.func,
  g.string
]), g.func, g.string, g.oneOf(["large", "small"]), g.string;
const Bk = {
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
  element: h = "button",
  innerRef: T,
  href: S,
  onClick: x,
  ...D
}) => {
  const C = Go("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: p
  });
  let z = h;
  return S && h === "button" && (z = "a"), /* @__PURE__ */ B.jsx(
    wi,
    {
      gaData: {
        ...Bk,
        section: o,
        // @deprecated - remove at some point
        ...s,
        text: r
      },
      children: /* @__PURE__ */ B.jsx(
        z,
        {
          type: z === "button" && x ? "button" : void 0,
          ...D,
          className: C,
          href: S,
          ref: T,
          onClick: x,
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
  label: g.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: g.string,
  /**
   * Google Analytics event data
   */
  gaData: ab,
  /**
    ARIA label for accessibility
  */
  ariaLabel: g.string,
  /**
    Button background color
  */
  color: g.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: g.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: g.oneOfType([
    g.func,
    g.string,
    g.shape({ $$typeof: g.symbol, render: g.func }),
    g.arrayOf(
      g.oneOfType([
        g.func,
        g.string,
        g.shape({ $$typeof: g.symbol, render: g.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: g.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: g.oneOfType([
    g.object,
    g.func,
    g.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: g.func
};
const lS = ({
  src: r,
  alt: o,
  cssClasses: s,
  loading: f = "lazy",
  decoding: c = "async",
  dataTestId: p,
  fetchPriority: h = "auto",
  width: T,
  height: S,
  cardLink: x,
  title: D,
  caption: C,
  captionTitle: z,
  border: P,
  dropShadow: j
}) => {
  const H = {
    src: r,
    alt: o,
    loading: f,
    decoding: c,
    fetchpriority: h,
    // React attribute bug workaround
    ...(s == null ? void 0 : s.length) > 0 && { className: vw(s) },
    ...p && { "data-testid": p },
    ...T && { width: T },
    ...S && { height: S }
  }, $ = Go("uds-img", {
    borderless: !P,
    "uds-img-drop-shadow": j
  }), Q = (me) => {
    const te = me ? `${H.className} ${me}` : H.className;
    return x ? /* @__PURE__ */ B.jsxs("a", { href: x, children: [
      /* @__PURE__ */ B.jsx("img", { ...H, className: te }),
      /* @__PURE__ */ B.jsx("span", { className: "visually-hidden", children: D })
    ] }) : /* @__PURE__ */ B.jsx("img", { ...H, className: te });
  }, V = () => /* @__PURE__ */ B.jsx("div", { className: $, children: /* @__PURE__ */ B.jsxs("figure", { className: "figure uds-figure", children: [
    Q(),
    C && /* @__PURE__ */ B.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      z && /* @__PURE__ */ B.jsx("h3", { children: z }),
      /* @__PURE__ */ B.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ac(C)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ B.jsx(B.Fragment, { children: C ? V() : Q($) });
};
lS.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: g.string.isRequired,
  /**
   * Image alt text
   */
  alt: g.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: g.arrayOf(g.string),
  /**
   * Image loading mode
   */
  loading: g.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: g.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: g.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: g.string,
  /**
   * Height of the image
   */
  height: g.string,
  dataTestId: g.string,
  cardLink: g.string,
  title: g.string,
  caption: g.string,
  captionTitle: g.string,
  border: g.bool,
  dropShadow: g.bool
};
const qk = Ti.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Vk = (r) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(r), Gk = (r) => !r.startsWith("https://") && !r.startsWith("http://") && Vk(r) ? `mailto:${r}` : r, p0 = {
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
  icon: h,
  body: T,
  eventFormat: S = "stack",
  eventLocation: x,
  eventTime: D,
  buttons: C,
  linkLabel: z,
  linkUrl: P,
  tags: j,
  showBorders: H = !0,
  cardLink: $
}) => /* @__PURE__ */ B.jsx(
  iS,
  {
    type: r,
    width: o,
    horizontal: s,
    image: f,
    imageAltText: c,
    title: p,
    icon: h,
    body: T,
    eventFormat: S,
    eventLocation: x,
    eventTime: D,
    buttons: C,
    linkLabel: z,
    linkUrl: P,
    tags: j,
    showBorders: H,
    cardLink: $
  }
);
qo.propTypes = {
  /**
   * Type of card
   */
  type: g.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: g.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: g.bool,
  /**
   * Card title
   */
  title: g.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: g.arrayOf(g.string),
  /**
   * Card body content
   */
  body: g.string,
  /**
   * Event info format
   */
  eventFormat: g.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: g.string,
  /**
   * Event start time
   */
  eventTime: g.string,
  /**
   * Card header image
   */
  image: g.string,
  /**
   * Card header image alt text
   */
  imageAltText: g.string,
  /**
   * Buttons
   */
  buttons: g.arrayOf(
    g.shape({
      ariaLabel: g.string,
      color: g.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: g.arrayOf(g.string),
      href: g.string,
      label: g.string,
      onClick: g.func,
      size: g.oneOf(["default", "small", "xsmall"]),
      target: g.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: g.string,
  linkUrl: g.string,
  /**
   * Tags
   */
  tags: g.arrayOf(
    g.shape({
      ariaLabel: g.string,
      color: g.oneOf(["white", "gray", "dark"]),
      href: g.string,
      label: g.string,
      onClick: g.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: g.bool,
  /**
   * Card link
   */
  cardLink: g.string
};
const iS = ({
  type: r = "default",
  width: o = "100%",
  horizontal: s = !1,
  image: f = "",
  imageAltText: c = "",
  title: p,
  icon: h = void 0,
  body: T = "",
  eventFormat: S = "stack",
  eventLocation: x = "",
  eventTime: D = "",
  buttons: C = void 0,
  linkLabel: z = void 0,
  linkUrl: P = void 0,
  tags: j = void 0,
  showBorders: H = !0,
  cardLink: $
}) => {
  const Q = Go("card", "cards-components", {
    "card-degree": r === "degree",
    "card-event": r === "event",
    "card-story": r === "story",
    "card-news": r === "news",
    [`w-${o.replace("%", "")}`]: o !== "100%",
    "card-horizontal": s,
    borderless: !H
  }), V = typeof f == "string" && f.length > 0, me = !rS(r);
  return /* @__PURE__ */ B.jsxs(qk, { className: Q, "data-testid": "card-container", children: [
    V && /* @__PURE__ */ B.jsx(
      lS,
      {
        src: f,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        title: p,
        cardLink: me ? $ : void 0
      }
    ),
    !f && h && /* @__PURE__ */ B.jsx(
      "i",
      {
        className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    /* @__PURE__ */ B.jsx("div", { className: s ? "card-content-wrapper" : void 0, children: /* @__PURE__ */ B.jsx(
      oS,
      {
        type: r,
        body: T,
        eventFormat: S,
        eventLocation: x,
        eventTime: D,
        title: p,
        buttons: C,
        linkLabel: z,
        linkUrl: P,
        tags: j,
        cardLink: $
      }
    ) })
  ] });
};
iS.propTypes = {
  type: g.oneOf(["default", "degree", "event", "news", "story"]),
  width: g.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: g.bool,
  title: g.string.isRequired,
  icon: g.arrayOf(g.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: g.string,
  eventFormat: g.oneOf(["stack", "inline"]),
  eventLocation: g.string,
  eventTime: g.string,
  image: g.string,
  imageAltText: g.string,
  buttons: g.arrayOf(
    g.shape({
      ariaLabel: g.string,
      color: g.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: g.arrayOf(g.string),
      href: g.string,
      label: g.string,
      onClick: g.func,
      size: g.oneOf(["default", "small", "xsmall"]),
      target: g.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: g.string,
  linkUrl: g.string,
  tags: g.arrayOf(
    g.shape({
      ariaLabel: g.string,
      color: g.oneOf(["white", "gray", "dark"]),
      href: g.string,
      label: g.string,
      onClick: g.func
    })
  ),
  showBorders: g.bool,
  cardLink: g.string
};
const oS = ({
  type: r = "default",
  body: o = "",
  eventFormat: s = "stack",
  eventLocation: f = "",
  eventTime: c = "",
  title: p,
  buttons: h = void 0,
  linkLabel: T = void 0,
  linkUrl: S = void 0,
  tags: x = void 0,
  cardLink: D
}) => {
  const C = rS(r), z = D && !C, P = C && D, j = r === "event" && (c || f);
  return /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    p && /* @__PURE__ */ B.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ B.jsx("h3", { className: "card-title", children: z ? /* @__PURE__ */ B.jsx("a", { href: D, children: p }) : p }) }),
    o && /* @__PURE__ */ B.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Ac(o) }) }),
    j && /* @__PURE__ */ B.jsx(
      uS,
      {
        eventFormat: s,
        eventTime: c,
        eventLocation: f
      }
    ),
    P ? /* @__PURE__ */ B.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ B.jsx(
      wi,
      {
        gaData: {
          ...p0,
          text: p
        },
        children: /* @__PURE__ */ B.jsx("a", { href: D, className: "card-arrow-link", "aria-label": p, children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-arrow-right", "aria-hidden": "true" }) })
      }
    ) }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      h && /* @__PURE__ */ B.jsx("div", { className: "card-buttons", children: h.map((H) => /* @__PURE__ */ B.jsx(
        "div",
        {
          className: "card-button",
          "data-testid": "card-button",
          children: /* @__PURE__ */ B.jsx(
            E1,
            {
              ariaLabel: H.ariaLabel,
              color: H.color,
              icon: H.icon,
              href: H.href,
              label: H.label,
              onClick: H.onClick,
              size: H.size,
              target: H.target,
              cardTitle: p
            }
          )
        },
        `${H.label}-${H.href}`
      )) }),
      S && T && /* @__PURE__ */ B.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ B.jsx(
        wi,
        {
          gaData: {
            ...p0,
            section: p,
            text: T
          },
          children: /* @__PURE__ */ B.jsx("a", { href: Gk(S), children: T })
        }
      ) })
    ] }),
    x && /* @__PURE__ */ B.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: x.map((H) => (
      // @ts-ignore
      /* @__PURE__ */ B.jsx(
        aS,
        {
          ariaLabel: H.ariaLabel,
          color: H.color,
          href: H.href,
          label: H.label,
          onClick: H.onClick,
          cardTitle: p
        },
        `${H.label}-${H.href}`
      )
    )) })
  ] });
};
oS.propTypes = {
  type: g.oneOf(["default", "degree", "event", "news", "story"]),
  body: g.string,
  eventFormat: g.oneOf(["stack", "inline"]),
  eventLocation: g.string,
  eventTime: g.string,
  title: g.string.isRequired,
  buttons: g.arrayOf(
    g.shape({
      ariaLabel: g.string,
      color: g.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: g.arrayOf(g.string),
      href: g.string,
      label: g.string,
      onClick: g.func,
      size: g.oneOf(["default", "small", "xsmall"]),
      target: g.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: g.string,
  linkUrl: g.string,
  tags: g.arrayOf(
    g.shape({
      ariaLabel: g.string,
      color: g.oneOf(["white", "gray", "dark"]),
      href: g.string,
      label: g.string,
      onClick: g.func
    })
  ),
  cardLink: g.string
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
  eventFormat: g.oneOf(["stack", "inline"]),
  eventLocation: g.string,
  eventTime: g.string
};
g.oneOf(["small", "large"]), g.string.isRequired, g.string.isRequired, g.string;
g.oneOf(["small", "large"]).isRequired, g.string.isRequired, g.string.isRequired, g.string.isRequired, g.string.isRequired, g.string, g.string;
g.arrayOf(g.object).isRequired, g.oneOf(["card", "ranking", "image"]), g.oneOf([1, 2, 3, 4, "1", "2", "3", "4"]);
g.string.isRequired, g.oneOfType([
  g.string,
  g.arrayOf(g.string)
]), g.node.isRequired, g.string, g.string, g.shape({
  label: g.string.isRequired,
  href: g.string.isRequired,
  color: g.string
});
const Yk = Ti.div`
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
`, Fk = () => /* @__PURE__ */ B.jsxs(Yk, { children: [
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {})
] }), Xk = Ti.section``, Ch = ow(null), sS = ({
  defaultProps: r,
  dataSource: o,
  noFeedText: s,
  renderHeader: f,
  renderBody: c,
  dataTransformer: p,
  dataFilter: h,
  maxItems: T
}) => {
  const [{ data: S, loading: x, error: D }, C] = yw(), [z, P] = Vo([]), j = { ...r.dataSource, ...o };
  return gi(() => {
    C(j == null ? void 0 : j.url);
  }, [j == null ? void 0 : j.url]), gi(() => {
    const H = S == null ? void 0 : S.nodes.map(p), $ = H == null ? void 0 : H.filter(
      (Q) => h(Q, o == null ? void 0 : o.filters)
    );
    P(T ? $ == null ? void 0 : $.slice(0, T) : $);
  }, [S]), // Init the context to be used on its childrens
  /* @__PURE__ */ B.jsx(Ch.Provider, { value: { feeds: z }, children: /* @__PURE__ */ B.jsxs(Xk, { children: [
    f,
    D ? /* @__PURE__ */ B.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      x && !(z != null && z.length) && /* @__PURE__ */ B.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ B.jsx(Fk, {}) }),
      z != null && z.length ? c : !x && /* @__PURE__ */ B.jsx("p", { className: "text-center", children: s })
    ] })
  ] }) });
};
sS.propTypes = {
  renderHeader: g.element,
  renderBody: g.element,
  maxItems: g.number,
  dataTransformer: g.func,
  dataFilter: g.func,
  noFeedText: g.string
};
const sb = g.shape({
  color: g.oneOf(["white", "dark"]),
  text: g.string
}), cb = g.shape({
  color: g.oneOf(["gold", "maroon", "gray", "dark"]),
  text: g.string
}), cS = g.shape({
  color: g.oneOf(["gold", "maroon", "gray", "dark"]),
  text: g.string,
  size: g.string
}), fS = g.shape({
  url: g.string,
  filters: g.string
}), Ik = g.shape({
  header: sb,
  ctaButton: cb,
  dataSource: fS,
  maxItems: g.number
}), Qk = Ti.div`
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
  const f = { ...r.header, ...o }, c = { ...r.ctaButton, ...s }, p = f.tag || "h2", h = p !== "h2", T = `text-${f.color} ${h ? "h2" : ""}`.trim();
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ B.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ B.jsx(p, { className: T, children: f.text }) }),
        /* @__PURE__ */ B.jsx(Qk, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ B.jsx(
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
  defaultProps: Ik,
  header: sb,
  ctaButton: cb
};
const pS = ({ children: r }) => /* @__PURE__ */ B.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ B.jsx("div", { className: "col", children: r }) });
pS.propTypes = {
  children: g.element
};
Ti.img`
  width: 100%;
`;
g.oneOf(["heading-hero", "story-hero"]), g.arrayOf(Wy), g.string;
g.bool, g.bool, g.bool, g.bool, g.string, g.func, g.node, g.bool, g.string, g.bool;
g.oneOf(["default", "bordered"]).isRequired, g.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, g.number, g.number, g.func.isRequired;
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
g.object, g.bool, g.bool, g.func.isRequired;
const $k = ht.forwardRef(({
  overflowTabs: r,
  idToChild: o,
  activeTabID: s,
  selectTab: f,
  gaData: c,
  openRight: p = !1
}, h) => {
  const [T, S] = Vo(!1), x = th(null), D = th(null), C = th([]), z = Array.isArray(r) ? r : [], P = h1(), j = z.includes(s ?? ""), H = z.map((Y) => {
    const F = o == null ? void 0 : o[Y];
    return F ? {
      id: Y,
      title: F.props.title,
      icon: F.props.icon ?? null
    } : { id: Y, title: Y, icon: null };
  }), $ = Cv((Y = !0) => {
    var F;
    S(!1), Y && ((F = D.current) == null || F.focus());
  }, []), Q = (Y) => {
    Y.preventDefault(), S((F) => !F);
  };
  gi(() => {
    function Y(F) {
      var J;
      (J = x.current) != null && J.contains(F.target) || S(!1);
    }
    return document.addEventListener("mousedown", Y), () => document.removeEventListener("mousedown", Y);
  }, []);
  const V = Cv(
    (Y, F) => {
      var J, ke;
      switch (Y.key) {
        case "ArrowDown": {
          Y.preventDefault();
          const He = C.current[F + 1] ?? C.current[0];
          He == null || He.focus();
          break;
        }
        case "ArrowUp": {
          Y.preventDefault();
          const He = C.current[F - 1] ?? C.current[H.length - 1];
          He == null || He.focus();
          break;
        }
        case "Home":
          Y.preventDefault(), (J = C.current[0]) == null || J.focus();
          break;
        case "End":
          Y.preventDefault(), (ke = C.current[H.length - 1]) == null || ke.focus();
          break;
        case "Escape":
          Y.preventDefault(), $();
          break;
        case "Tab":
          S(!1);
          break;
      }
    },
    [H.length, $]
  ), me = (Y, F, J) => {
    Y.preventDefault(), $(!1), f == null || f(Y, F, J);
  }, te = H.length === 0, ne = (Y) => {
    x.current = Y, typeof h == "function" ? h(Y) : h && (h.current = Y);
  };
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      ref: ne,
      className: `uds-more-dropdown${p ? " dropdown-open-right" : ""}${te ? " uds-more-dropdown-hidden" : ""}`,
      "aria-hidden": te || void 0,
      children: [
        /* @__PURE__ */ B.jsx(wi, { gaData: c ?? {}, children: /* @__PURE__ */ B.jsxs(
          "button",
          {
            ref: D,
            type: "button",
            onClick: Q,
            onKeyDown: (Y) => {
              var F, J;
              Y.key === "Enter" || Y.key === " " ? (Y.preventDefault(), T ? $() : (S(!0), requestAnimationFrame(() => {
                var ke;
                return (ke = C.current[0]) == null ? void 0 : ke.focus();
              }))) : T && Y.key === "ArrowDown" ? (Y.preventDefault(), (F = C.current[0]) == null || F.focus()) : T && Y.key === "ArrowUp" ? (Y.preventDefault(), (J = C.current[H.length - 1]) == null || J.focus()) : T && Y.key === "Escape" && (Y.preventDefault(), $());
            },
            "aria-haspopup": "true",
            "aria-expanded": T,
            "aria-controls": P,
            "aria-label": `More, ${H.length} additional tab${H.length !== 1 ? "s" : ""}`,
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
            id: P,
            role: "menu",
            "aria-label": "More tabs",
            "aria-hidden": !T,
            className: `more-dropdown-menu uds-more-dropdown-list${T ? " open" : ""}`,
            children: H.map((Y, F) => {
              const J = Y.id === s;
              return /* @__PURE__ */ B.jsx("li", { role: "none", children: /* @__PURE__ */ B.jsxs(
                "button",
                {
                  ref: (ke) => {
                    ke && (C.current[F] = ke);
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: -1,
                  onClick: (ke) => me(ke, Y.id, Y.title),
                  onKeyDown: (ke) => V(ke, F),
                  className: "more-dropdown-item",
                  "aria-current": J || void 0,
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
$k.displayName = "MoreDropdown";
g.shape({
  title: g.string,
  content: g.string,
  cite: g.shape({
    name: g.string,
    description: g.string
  })
}).isRequired, g.string, g.string, g.shape({
  containerCssClass: g.arrayOf(g.string),
  titleCssClass: g.arrayOf(g.string),
  contentCssClass: g.arrayOf(g.string)
});
g.oneOf(["video", "youtube"]), g.string, g.string, g.string, g.string, g.string, g.bool;
const Pk = {
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
  children: g.oneOfType([
    g.element,
    g.arrayOf(g.element)
  ]).isRequired
};
const hS = ({ buttonCount: r }) => {
  const o = [];
  for (let s = 0; s < r; s += 1)
    o.push(
      /* @__PURE__ */ B.jsx(wi, { gaData: Pk, children: /* @__PURE__ */ B.jsx(
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
  buttonCount: g.number.isRequired
};
g.arrayOf(g.string).isRequired, g.func;
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
  onClick: g.func
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
  onClick: g.func
};
const m0 = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, vS = ({ children: r = null }) => /* @__PURE__ */ B.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: r
  }
);
vS.propTypes = {
  children: g.arrayOf(g.element)
};
const bS = ({ onClick: r = () => null, children: o = null }) => /* @__PURE__ */ B.jsxs(vS, { children: [
  /* @__PURE__ */ B.jsx(wi, { gaData: { ...m0, text: "left chevron" }, children: /* @__PURE__ */ B.jsx(yS, { onClick: r }) }),
  o,
  /* @__PURE__ */ B.jsx(wi, { gaData: { ...m0, text: "right chevron" }, children: /* @__PURE__ */ B.jsx(gS, { onClick: r }) })
] });
bS.propTypes = {
  children: g.element,
  onClick: g.func
};
const SS = ({ carouselItems: r }) => {
  const o = r.map((s) => /* @__PURE__ */ B.jsx("li", { className: "glide__slide slider", children: s.item }, s.id.toString()));
  return /* @__PURE__ */ B.jsx("ul", { className: "glide__slides", children: o });
};
SS.propTypes = {
  carouselItems: g.arrayOf(g.object)
};
function h0(r, o) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(r);
    o && (f = f.filter(function(c) {
      return Object.getOwnPropertyDescriptor(r, c).enumerable;
    })), s.push.apply(s, f);
  }
  return s;
}
function g0(r) {
  for (var o = 1; o < arguments.length; o++) {
    var s = arguments[o] != null ? arguments[o] : {};
    o % 2 ? h0(Object(s), !0).forEach(function(f) {
      Zk(r, f, s[f]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : h0(Object(s)).forEach(function(f) {
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
function zh(r, o) {
  if (!(r instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function Kk(r, o) {
  for (var s = 0; s < o.length; s++) {
    var f = o[s];
    f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(r, f.key, f);
  }
}
function Dh(r, o, s) {
  return o && Kk(r.prototype, o), r;
}
function Zk(r, o, s) {
  return o in r ? Object.defineProperty(r, o, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[o] = s, r;
}
function Wk(r, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(o && o.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), o && qv(r, o);
}
function Cc(r) {
  return Cc = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, Cc(r);
}
function qv(r, o) {
  return qv = Object.setPrototypeOf || function(s, f) {
    return s.__proto__ = f, s;
  }, qv(r, o);
}
function Jk() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function eE(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function tE(r, o) {
  if (o && (typeof o == "object" || typeof o == "function"))
    return o;
  if (o !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return eE(r);
}
function nE(r) {
  var o = Jk();
  return function() {
    var s = Cc(r), f;
    if (o) {
      var c = Cc(this).constructor;
      f = Reflect.construct(s, arguments, c);
    } else
      f = s.apply(this, arguments);
    return tE(this, f);
  };
}
function aE(r, o) {
  for (; !Object.prototype.hasOwnProperty.call(r, o) && (r = Cc(r), r !== null); )
    ;
  return r;
}
function sh() {
  return typeof Reflect < "u" && Reflect.get ? sh = Reflect.get : sh = function(r, o, s) {
    var f = aE(r, o);
    if (f) {
      var c = Object.getOwnPropertyDescriptor(f, o);
      return c.get ? c.get.call(arguments.length < 3 ? r : s) : c.value;
    }
  }, sh.apply(this, arguments);
}
var lE = {
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
function rE(r) {
  return parseFloat(r);
}
function Vv(r) {
  return typeof r == "string";
}
function zc(r) {
  var o = uh(r);
  return o === "function" || o === "object" && !!r;
}
function bh(r) {
  return typeof r == "function";
}
function wS(r) {
  return typeof r > "u";
}
function Gv(r) {
  return r.constructor === Array;
}
function iE(r, o, s) {
  var f = {};
  for (var c in o)
    bh(o[c]) ? f[c] = o[c](r, f, s) : Yo("Extension must be a function");
  for (var p in f)
    bh(f[p].mount) && f[p].mount();
  return f;
}
function sn(r, o, s) {
  Object.defineProperty(r, o, s);
}
function oE(r) {
  return Object.keys(r).sort().reduce(function(o, s) {
    return o[s] = r[s], o[s], o;
  }, {});
}
function Yv(r, o) {
  var s = Object.assign({}, r, o);
  if (o.hasOwnProperty("classes")) {
    s.classes = Object.assign({}, r.classes, o.classes);
    var f = ["direction", "type", "slide", "arrow", "nav"];
    f.forEach(function(c) {
      o.classes.hasOwnProperty(c) && (s.classes[c] = g0(g0({}, r.classes[c]), o.classes[c]));
    });
  }
  return o.hasOwnProperty("breakpoints") && (s.breakpoints = Object.assign({}, r.breakpoints, o.breakpoints)), s;
}
var uE = /* @__PURE__ */ (function() {
  function r() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zh(this, r), this.events = o, this.hop = o.hasOwnProperty;
  }
  return Dh(r, [{
    key: "on",
    value: function(o, s) {
      if (Gv(o)) {
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
      if (Gv(o)) {
        for (var f = 0; f < o.length; f++)
          this.emit(o[f], s);
        return;
      }
      this.hop.call(this.events, o) && this.events[o].forEach(function(c) {
        c(s || {});
      });
    }
  }]), r;
})(), sE = /* @__PURE__ */ (function() {
  function r(o) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    zh(this, r), this._c = {}, this._t = [], this._e = new uE(), this.disabled = !1, this.selector = o, this.settings = Yv(lE, s), this.index = this.settings.startAt;
  }
  return Dh(r, [{
    key: "mount",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), zc(o) ? this._c = iE(this, o, this._e) : Yo("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return Gv(o) ? this._t = o : Yo("You need to provide a array on `mutate()`"), this;
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
      return this.settings = Yv(this.settings, o), o.hasOwnProperty("startAt") && (this.index = o.startAt), this._e.emit("update"), this;
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
      zc(o) ? this._o = o : Yo("Options must be an `object` instance.");
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
function cE(r, o, s) {
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
      var x = this;
      r.disabled || (!r.settings.waitForTransition || r.disable(), this.move = S, s.emit("run.before", this.move), this.calculate(), s.emit("run", this.move), o.Transition.after(function() {
        x.isStart() && s.emit("run.start", x.move), x.isEnd() && s.emit("run.end", x.move), x.isOffset() && (x._o = !1, s.emit("run.offset", x.move)), s.emit("run.after", x.move), r.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var S = this.move, x = this.length, D = S.steps, C = S.direction, z = 1;
      if (C === "=") {
        if (r.settings.bound && Ia(D) > x) {
          r.index = x;
          return;
        }
        r.index = D;
        return;
      }
      if (C === ">" && D === ">") {
        r.index = x;
        return;
      }
      if (C === "<" && D === "<") {
        r.index = 0;
        return;
      }
      if (C === "|" && (z = r.settings.perView || 1), C === ">" || C === "|" && D === ">") {
        var P = c(z);
        P > x && (this._o = !0), r.index = p(P, z);
        return;
      }
      if (C === "<" || C === "|" && D === "<") {
        var j = h(z);
        j < 0 && (this._o = !0), r.index = T(j, z);
        return;
      }
      Yo("Invalid direction pattern [".concat(C).concat(D, "] has been used"));
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
    var x = r.index;
    return r.isType("carousel") ? x + S : x + (S - x % S);
  }
  function p(S, x) {
    var D = f.length;
    return S <= D ? S : r.isType("carousel") ? S - (D + 1) : r.settings.rewind ? f.isBound() && !f.isEnd() ? D : 0 : f.isBound() ? D : Math.floor(D / x) * x;
  }
  function h(S) {
    var x = r.index;
    if (r.isType("carousel"))
      return x - S;
    var D = Math.ceil(x / S);
    return (D - 1) * S;
  }
  function T(S, x) {
    var D = f.length;
    return S >= 0 ? S : r.isType("carousel") ? S + (D + 1) : r.settings.rewind ? f.isBound() && f.isStart() ? D : Math.floor(D / x) * x : 0;
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
      var x = S.substr(1);
      this._m = {
        direction: S.substr(0, 1),
        steps: x ? Ia(x) ? Ia(x) : x : 0
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
      var S = r.settings, x = o.Html.slides.length;
      return this.isBound() ? x - 1 - (Ia(S.perView) - 1) + Ia(S.focusAt) : x - 1;
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
function y0() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Rh(r, o) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, f, c, p, h, T = 0, S = function() {
    T = s.leading === !1 ? 0 : y0(), f = null, h = r.apply(c, p), f || (c = p = null);
  }, x = function() {
    var D = y0();
    !T && s.leading === !1 && (T = D);
    var C = o - (D - T);
    return c = this, p = arguments, C <= 0 || C > o ? (f && (clearTimeout(f), f = null), T = D, h = r.apply(c, p), f || (c = p = null)) : !f && s.trailing !== !1 && (f = setTimeout(S, C)), h;
  };
  return x.cancel = function() {
    clearTimeout(f), T = 0, f = c = p = null;
  }, x;
}
var Pm = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function fE(r, o, s) {
  var f = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(c) {
      for (var p = 0, h = c.length; p < h; p++) {
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
      for (var p = 0, h = c.length; p < h; p++) {
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
  }), s.on(["build.after", "update"], Rh(function() {
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
function Fv(r) {
  return Array.prototype.slice.call(r);
}
var dE = '[data-glide-el="track"]';
function pE(r, o, s) {
  var f = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = r.selector, this.track = this.root.querySelector(dE), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = Fv(this.wrapper.children).filter(function(c) {
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
      Vv(c) && (c = document.querySelector(c)), c !== null ? f._r = c : Yo("Root element must be a existing Html node");
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
function mE(r, o, s) {
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
      zc(c) ? (c.before = Ia(c.before), c.after = Ia(c.after)) : c = Ia(c), f._v = c;
    }
  }), sn(f, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var c = f.value, p = r.settings.perView;
      return zc(c) ? c.before / p + c.after / p : c * 2 / p;
    }
  }), s.on(["resize", "update"], function() {
    f.mount();
  }), f;
}
function hE(r, o, s) {
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
function gE(r, o, s) {
  var f = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var c = "".concat(this.slideWidth, "px"), p = o.Html.slides, h = 0; h < p.length; h++)
        p[h].style.width = c;
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
function yE(r, o, s) {
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
      p && (p.classList.add(c.slide.active), TS(p).forEach(function(h) {
        h.classList.remove(c.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var c = r.settings.classes, p = c.type, h = c.slide;
      o.Html.root.classList.remove(p[r.settings.type]), o.Html.slides.forEach(function(T) {
        T.classList.remove(h.active);
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
function vE(r, o, s) {
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
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], p = o.Html.slides, h = r.settings, T = h.perView, S = h.classes, x = h.cloningRatio;
      if (p.length > 0)
        for (var D = +!!r.settings.peek, C = T + D + Math.round(T / 2), z = p.slice(0, C).reverse(), P = p.slice(C * -1), j = 0; j < Math.max(x, Math.floor(T / p.length)); j++) {
          for (var H = 0; H < z.length; H++) {
            var $ = z[H].cloneNode(!0);
            $.classList.add(S.slide.clone), c.push($);
          }
          for (var Q = 0; Q < P.length; Q++) {
            var V = P[Q].cloneNode(!0);
            V.classList.add(S.slide.clone), c.unshift(V);
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
      for (var c = this.items, p = o.Html, h = p.wrapper, T = p.slides, S = Math.floor(c.length / 2), x = c.slice(0, S).reverse(), D = c.slice(S * -1).reverse(), C = "".concat(o.Sizes.slideWidth, "px"), z = 0; z < D.length; z++)
        h.appendChild(D[z]);
      for (var P = 0; P < x.length; P++)
        h.insertBefore(x[P], T[0]);
      for (var j = 0; j < c.length; j++)
        c[j].style.width = C;
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
    zh(this, r), this.listeners = o;
  }
  return Dh(r, [{
    key: "on",
    value: function(o, s, f) {
      var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      Vv(o) && (o = [o]);
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
      Vv(o) && (o = [o]);
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
function bE(r, o, s) {
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
      f.on("resize", window, Rh(function() {
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
var SE = ["ltr", "rtl"], wE = {
  ">": "<",
  "<": ">",
  "=": "="
};
function TE(r, o, s) {
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
      return this.is("rtl") ? c.split(p).join(wE[p]) : c;
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
      SE.indexOf(c) > -1 ? f._v = c : Yo("Direction value must be `ltr` or `rtl`");
    }
  }), s.on(["destroy", "update"], function() {
    f.removeClass();
  }), s.on("update", function() {
    f.mount();
  }), s.on(["build.before", "update"], function() {
    f.addClass();
  }), f;
}
function xE(r, o) {
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
function kE(r, o) {
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
function EE(r, o) {
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
function _E(r, o) {
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
        return zc(f) ? s - f.before : s - f;
      }
      return s;
    }
  };
}
function AE(r, o) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(s) {
      var f = o.Gaps.value, c = o.Sizes.width, p = r.settings.focusAt, h = o.Sizes.slideWidth;
      return p === "center" ? s - (c / 2 - h / 2) : s - h * p - f * p;
    }
  };
}
function NE(r, o, s) {
  var f = [kE, EE, _E, AE].concat(r._t, [xE]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(c) {
      for (var p = 0; p < f.length; p++) {
        var h = f[p];
        bh(h) && bh(h().modify) ? c = h(r, o, s).modify(c) : Yo("Transformer should be a function that returns an object with `modify()` method");
      }
      return c;
    }
  };
}
function OE(r, o, s) {
  var f = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(c) {
      var p = NE(r, o).mutate(c), h = "translate3d(".concat(-1 * p, "px, 0px, 0px)");
      o.Html.wrapper.style.mozTransform = h, o.Html.wrapper.style.webkitTransform = h, o.Html.wrapper.style.transform = h;
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
      var c = o.Sizes.length, p = r.index, h = r.settings.perView;
      return o.Run.isOffset(">") || o.Run.isOffset("|>") ? c + (p - h) : (p + h) % c;
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
function CE(r, o, s) {
  var f = !1, c = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(p) {
      var h = r.settings;
      return f ? "".concat(p, " 0ms ").concat(h.animationTimingFunc) : "".concat(p, " ").concat(this.duration, "ms ").concat(h.animationTimingFunc);
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
var xS = !1;
try {
  var v0 = Object.defineProperty({}, "passive", {
    get: function() {
      xS = !0;
    }
  });
  window.addEventListener("testPassive", null, v0), window.removeEventListener("testPassive", null, v0);
} catch {
}
var Xv = xS, Km = ["touchstart", "mousedown"], b0 = ["touchmove", "mousemove"], S0 = ["touchend", "touchcancel", "mouseup", "mouseleave"], w0 = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function zE(r, o, s) {
  var f = new Wo(), c = 0, p = 0, h = 0, T = !1, S = Xv ? {
    passive: !0
  } : !1, x = {
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
    start: function(D) {
      if (!T && !r.disabled) {
        this.disable();
        var C = this.touches(D);
        c = null, p = Ia(C.pageX), h = Ia(C.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), s.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(D) {
      if (!r.disabled) {
        var C = r.settings, z = C.touchAngle, P = C.touchRatio, j = C.classes, H = this.touches(D), $ = Ia(H.pageX) - p, Q = Ia(H.pageY) - h, V = Math.abs($ << 2), me = Math.abs(Q << 2), te = Math.sqrt(V + me), ne = Math.sqrt(me);
        if (c = Math.asin(ne / te), c * 180 / Math.PI < z)
          D.stopPropagation(), o.Move.make($ * rE(P)), o.Html.root.classList.add(j.dragging), s.emit("swipe.move");
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
    end: function(D) {
      if (!r.disabled) {
        var C = r.settings, z = C.perSwipe, P = C.touchAngle, j = C.classes, H = this.touches(D), $ = this.threshold(D), Q = H.pageX - p, V = c * 180 / Math.PI;
        this.enable(), Q > $ && V < P ? o.Run.make(o.Direction.resolve("".concat(z, "<"))) : Q < -$ && V < P ? o.Run.make(o.Direction.resolve("".concat(z, ">"))) : o.Move.make(), o.Html.root.classList.remove(j.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), s.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var D = this, C = r.settings, z = C.swipeThreshold, P = C.dragThreshold;
      z && f.on(Km[0], o.Html.wrapper, function(j) {
        D.start(j);
      }, S), P && f.on(Km[1], o.Html.wrapper, function(j) {
        D.start(j);
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
      var D = this;
      f.on(b0, o.Html.wrapper, Rh(function(C) {
        D.move(C);
      }, r.settings.throttle), S);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      f.off(b0, o.Html.wrapper, S);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var D = this;
      f.on(S0, o.Html.wrapper, function(C) {
        D.end(C);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      f.off(S0, o.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(D) {
      return w0.indexOf(D.type) > -1 ? D : D.touches[0] || D.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(D) {
      var C = r.settings;
      return w0.indexOf(D.type) > -1 ? C.dragThreshold : C.swipeThreshold;
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
    x.unbindSwipeStart(), x.unbindSwipeMove(), x.unbindSwipeEnd(), f.destroy();
  }), x;
}
function DE(r, o, s) {
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
function RE(r, o, s) {
  var f = new Wo(), c = !1, p = !1, h = {
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
  return sn(h, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return h._a;
    }
  }), s.on("swipe.move", function() {
    h.detach();
  }), s.on("swipe.end", function() {
    o.Transition.after(function() {
      h.attach();
    });
  }), s.on("destroy", function() {
    h.attach(), h.unbind(), f.destroy();
  }), h;
}
var ME = '[data-glide-el="controls[nav]"]', fb = '[data-glide-el^="controls"]', LE = "".concat(fb, ' [data-glide-dir*="<"]'), jE = "".concat(fb, ' [data-glide-dir*=">"]');
function UE(r, o, s) {
  var f = new Wo(), c = Xv ? {
    passive: !0
  } : !1, p = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = o.Html.root.querySelectorAll(ME), this._c = o.Html.root.querySelectorAll(fb), this._arrowControls = {
        previous: o.Html.root.querySelectorAll(LE),
        next: o.Html.root.querySelectorAll(jE)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var h = 0; h < this._n.length; h++)
        this.addClass(this._n[h].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var h = 0; h < this._n.length; h++)
        this.removeClass(this._n[h].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(h) {
      var T = r.settings, S = h[r.index];
      S && (S.classList.add(T.classes.nav.active), TS(S).forEach(function(x) {
        x.classList.remove(T.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(h) {
      var T = h[r.index];
      T == null || T.classList.remove(r.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!r.settings.rewind) {
        var h = p._arrowControls.next, T = p._arrowControls.previous;
        this.resetArrowState(h, T), r.index === 0 && this.disableArrow(T), r.index === o.Run.length && this.disableArrow(h);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var h = r.settings, T = arguments.length, S = new Array(T), x = 0; x < T; x++)
        S[x] = arguments[x];
      S.forEach(function(D) {
        Fv(D).forEach(function(C) {
          C.classList.remove(h.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var h = r.settings, T = arguments.length, S = new Array(T), x = 0; x < T; x++)
        S[x] = arguments[x];
      S.forEach(function(D) {
        Fv(D).forEach(function(C) {
          C.classList.add(h.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var h = 0; h < this._c.length; h++)
        this.bind(this._c[h].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var h = 0; h < this._c.length; h++)
        this.unbind(this._c[h].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(h) {
      for (var T = 0; T < h.length; T++)
        f.on("click", h[T], this.click), f.on("touchstart", h[T], this.click, c);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(h) {
      for (var T = 0; T < h.length; T++)
        f.off(["click", "touchstart"], h[T]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(h) {
      !Xv && h.type === "touchstart" && h.preventDefault();
      var T = h.currentTarget.getAttribute("data-glide-dir");
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
function HE(r, o, s) {
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
      var h = r.settings.perSwipe, T = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(p.code) && o.Run.make(o.Direction.resolve("".concat(h).concat(T[p.code])));
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
function BE(r, o, s) {
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
function T0(r) {
  return zc(r) ? oE(r) : (Yo("Breakpoints option must be an object"), {});
}
function qE(r, o, s) {
  var f = new Wo(), c = r.settings, p = T0(c.breakpoints), h = Object.assign({}, c), T = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(S) {
      if (typeof window.matchMedia < "u") {
        for (var x in S)
          if (S.hasOwnProperty(x) && window.matchMedia("(max-width: ".concat(x, "px)")).matches)
            return S[x];
      }
      return h;
    }
  };
  return Object.assign(c, T.match(p)), f.on("resize", window, Rh(function() {
    r.settings = Yv(c, T.match(p));
  }, r.settings.throttle)), s.on("update", function() {
    p = T0(p), h = Object.assign({}, c);
  }), s.on("destroy", function() {
    f.off("resize", window);
  }), T;
}
var VE = {
  // Required
  Html: pE,
  Translate: OE,
  Transition: CE,
  Direction: TE,
  Peek: mE,
  Sizes: gE,
  Gaps: fE,
  Move: hE,
  Clones: vE,
  Resize: bE,
  Build: yE,
  Run: cE,
  // Optional
  Swipe: zE,
  Images: DE,
  Anchors: RE,
  Controls: UE,
  Keyboard: HE,
  Autoplay: BE,
  Breakpoints: qE
}, GE = /* @__PURE__ */ (function(r) {
  Wk(s, r);
  var o = nE(s);
  function s() {
    return zh(this, s), o.apply(this, arguments);
  }
  return Dh(s, [{
    key: "mount",
    value: function() {
      var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return sh(Cc(s.prototype), "mount", this).call(this, Object.assign({}, VE, f));
    }
  }]), s;
})(sE);
function YE(r) {
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
function FE(r = 1, o, s = !0, f) {
  const { perViewSm: c, perViewMd: p, perViewLg: h } = YE(r), T = s ? 24 : 0, S = s ? { before: 48, after: 48 } : 0, x = s ? { before: 124, after: 124 } : 0;
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
    perView: h,
    // Can be overwritten at breakpoints
    peek: x,
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
        perView: h,
        peek: S
      },
      1260: {
        // BS4 xl
        perView: h,
        peek: S
      },
      1400: {
        perView: h,
        peek: x
      },
      1920: {
        perView: h,
        peek: x
      }
    }
  };
}
function XE(r, o, s) {
  const f = r.querySelector(".glide__arrow--prev"), c = r.querySelector(".glide__arrow--next"), p = r.querySelector(".glide__track"), h = r.querySelector(
    ".image-navigator-images"
  );
  if (!(f || c)) return;
  const T = ["slider-start", "slider-mid", "slider-end"], S = "glide__arrow--disabled";
  p == null || p.classList.remove(...T), h == null || h.classList.remove(...T), o === 0 ? (p == null || p.classList.add("slider-start"), h == null || h.classList.add("slider-start"), f == null || f.classList.add(S), f == null || f.setAttribute("aria-disabled", "true"), c == null || c.classList.remove(S), c == null || c.setAttribute("aria-disabled", "false")) : o >= s - 1 ? (p == null || p.classList.add("slider-end"), h == null || h.classList.add("slider-end"), f == null || f.classList.remove(S), f == null || f.setAttribute("aria-disabled", "false"), c == null || c.classList.add(S), c == null || c.setAttribute("aria-disabled", "true")) : (p == null || p.classList.add("slider-mid"), h == null || h.classList.add("slider-mid"), f == null || f.classList.remove(S), c == null || c.classList.remove(S), f == null || f.setAttribute("aria-disabled", "false"), c == null || c.setAttribute("aria-disabled", "false"));
}
function IE(r, o, s) {
  const f = r.querySelectorAll(".glide__slide"), c = o, p = Math.min(
    f.length - 1,
    o + s - 1
  );
  f.forEach((h, T) => {
    T < c || T > p ? (h.setAttribute("aria-hidden", "true"), h.setAttribute("tabindex", "-1"), h.setAttribute("inert", "")) : (h.setAttribute("aria-hidden", "false"), h.removeAttribute("tabindex"), h.removeAttribute("inert"));
  });
}
function QE({
  instanceName: r,
  perView: o,
  buttonCount: s,
  isFullWidth: f = !1,
  onItemClick: c,
  hasPeek: p = !0,
  isDraggable: h
}) {
  const T = FE(o, f, p, h), S = new GE(`#${r}`, T);
  let x = document.querySelector(`#${r}`);
  return x.addEventListener("keyup", (D) => {
    const C = D;
    C.keyCode === 39 ? S.go(">") : C.keyCode === 37 ? S.go("<") : C.keyCode === 13 && S.go(document.activeElement.dataset.glideDir);
  }), S.on("build.before", () => {
    x = document.querySelector(`#${r}`), x && x.classList.add("slider-start");
  }), S.on("move", () => {
    if (x = document.querySelector(`#${r}`), !x) return;
    const D = S.index;
    IE(x, D, o);
    const C = x.querySelector(".navigation-slider"), z = x.querySelector(".image-navigator-images");
    if (C && z) {
      const P = C.querySelectorAll(
        ".bullet-image-container"
      ), j = C.clientWidth, H = 82, $ = P[D], Q = z.getBoundingClientRect().x, V = C.getBoundingClientRect().x - Q, me = $.getBoundingClientRect().x - Q, te = $.getBoundingClientRect().x + $.getBoundingClientRect().width - Q;
      if (D === 0 || me <= 0 + H)
        C.style.left = `${V - me + H}px`;
      else if (te >= j - H) {
        const ne = te - j;
        C.style.left = `${V - ne - H}px`;
      }
    }
    XE(x, D, s), x.setAttribute("data-current-index", D), c && c(D);
  }), S.mount(), S;
}
function $E(r, o) {
  let s;
  const f = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return s = r, f >= 992 && (o >= 2 && (s = r - 1), o >= 3 && (s = r - 2)), s;
}
const kS = ({
  perView: r = 1,
  width: o,
  maxWidth: s,
  carouselItems: f,
  cssClass: c = "",
  CustomNavComponent: p,
  role: h,
  ariaLabelledBy: T,
  isFullWidth: S,
  removeSideBackground: x = !1,
  hasNavButtons: D = !0,
  hasPositionIndicators: C = !0,
  imageAutoSize: z = !0,
  onItemClick: P = () => null,
  hasPeek: j = !0,
  isDraggable: H = !0,
  hasShadow: $ = !0
}) => {
  const Q = `glide-${Math.ceil(Math.random() * 1e4)}`, V = $E(f.length, r);
  return gi(() => {
    QE({
      instanceName: Q,
      perView: r,
      buttonCount: V,
      isFullWidth: S,
      onItemClick: P,
      hasPeek: j,
      isDraggable: H
    });
  }, [
    Q,
    r,
    V,
    S,
    P,
    j,
    H
  ]), /* @__PURE__ */ B.jsxs(
    "div",
    {
      role: h,
      "aria-labelledby": T,
      className: `glide ${c}`,
      id: Q,
      style: { width: o, maxWidth: s },
      "data-remove-side-background": x,
      "data-image-auto-size": z,
      "data-has-shadow": $,
      children: [
        /* @__PURE__ */ B.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ B.jsx(SS, { carouselItems: f }) }),
        p ? (
          // @ts-ignore
          /* @__PURE__ */ B.jsx(p, { instanceName: Q })
        ) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
          C && /* @__PURE__ */ B.jsx(hS, { buttonCount: V }),
          D && /* @__PURE__ */ B.jsx(bS, {})
        ] })
      ]
    }
  );
};
kS.propTypes = {
  perView: g.number,
  width: g.string,
  maxWidth: g.string,
  carouselItems: g.arrayOf(g.object).isRequired,
  cssClass: g.string,
  CustomNavComponent: g.func,
  role: g.string,
  ariaLabelledBy: g.string,
  onItemClick: g.func,
  isFullWidth: g.bool,
  removeSideBackground: g.bool,
  hasNavButtons: g.bool,
  hasPositionIndicators: g.bool,
  imageAutoSize: g.bool,
  hasPeek: g.bool,
  isDraggable: g.bool,
  hasShadow: g.bool
};
const PE = ({
  id: r,
  imageSource: o,
  imageAltText: s,
  title: f,
  content: c,
  eventLocation: p,
  eventTime: h,
  buttons: T,
  linkLabel: S,
  linkUrl: x,
  tags: D
}, C, z, P) => {
  var j, H;
  return {
    // @ts-ignore
    id: r,
    item: /* @__PURE__ */ B.jsx(
      qo,
      {
        type: C,
        horizontal: z,
        image: o,
        imageAltText: s,
        title: f,
        body: c,
        eventFormat: P,
        eventLocation: p,
        eventTime: h,
        buttons: T,
        linkLabel: S,
        linkUrl: x || ((j = T == null ? void 0 : T[0]) == null ? void 0 : j.href),
        tags: D,
        cardLink: x || ((H = T == null ? void 0 : T[0]) == null ? void 0 : H.href)
      }
    )
  };
}, ES = ({
  perView: r = 0,
  cardItems: o = [],
  cardType: s = "default",
  cardEventFormat: f = "stack",
  cardHorizontal: c = !1,
  width: p = void 0,
  maxWidth: h = void 0,
  imageAutoSize: T = !0
}) => {
  const S = parseInt(`${r}`, 10), [x, D] = Vo(S), C = 1024, z = 768;
  gi(() => {
    const H = () => {
      const $ = window.innerWidth;
      let Q;
      switch (S) {
        case 3:
          $ > C ? Q = 3 : $ > z ? Q = 2 : Q = 1;
          break;
        case 2:
          Q = $ < z ? 1 : 2;
          break;
        default:
          Q = 1;
          break;
      }
      D(Q);
    };
    return H(), window.addEventListener("resize", H), () => window.removeEventListener("resize", H);
  }, [S]);
  const P = o.map(
    (H) => PE(H, s, c, f)
  ), j = o.length > x;
  return /* @__PURE__ */ B.jsx(
    kS,
    {
      perView: +x,
      maxWidth: h,
      width: p,
      carouselItems: P,
      cssClass: "aligned-carousel",
      imageAutoSize: T,
      removeSideBackground: o.length <= x,
      hasPositionIndicators: j,
      hasNavButtons: j,
      isDraggable: j,
      hasShadow: !0
    }
  );
};
ES.propTypes = {
  perView: g.string.isRequired,
  cardItems: g.arrayOf(
    g.shape({
      title: g.string.isRequired,
      content: g.string,
      eventLocation: g.string,
      eventTime: g.string,
      image: g.string,
      imageAltText: g.string,
      buttons: qo.propTypes.buttons,
      linkLabel: g.string,
      linkUrl: g.string,
      tags: qo.propTypes.tags
    })
  ).isRequired,
  cardType: qo.propTypes.type,
  cardEventFormat: qo.propTypes.eventFormat,
  cardHorizontal: qo.propTypes.horizontal,
  width: g.string,
  maxWidth: g.string,
  imageAutoSize: g.bool
};
g.number.isRequired, g.arrayOf(g.object).isRequired, g.string, g.string, g.bool;
const Sh = {
  imageItems: g.arrayOf(
    g.shape({
      id: g.number,
      imageSource: g.string,
      thumbnailSource: g.string,
      imageAltText: g.string,
      content: g.oneOfType([g.string, g.element])
    })
  ),
  hasContent: g.bool
};
g.string, Sh.imageItems, Sh.hasContent;
Sh.imageItems.isRequired, Sh.hasContent, g.string, g.string, g.bool;
g.arrayOf(
  g.shape({
    title: g.string,
    content: g.string,
    cite: g.shape({
      name: g.string,
      description: g.string
    })
  })
).isRequired, g.shape({
  containerCssClass: g.arrayOf(g.string),
  titleCssClass: g.arrayOf(g.string),
  contentCssClass: g.arrayOf(g.string)
}), g.string, g.string, g.bool, g.bool, g.bool;
var cv = { exports: {} }, wm = {}, x0 = { exports: {} }, k0 = {}, E0;
function KE() {
  return E0 || (E0 = 1, (function(r) {
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
      var h = Date, T = h.now();
      r.unstable_now = function() {
        return h.now() - T;
      };
    }
    var S = [], x = [], D = 1, C = null, z = 3, P = !1, j = !1, H = !1, $ = !1, Q = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, me = typeof setImmediate < "u" ? setImmediate : null;
    function te(U) {
      for (var L = s(x); L !== null; ) {
        if (L.callback === null) f(x);
        else if (L.startTime <= U)
          f(x), L.sortIndex = L.expirationTime, o(S, L);
        else break;
        L = s(x);
      }
    }
    function ne(U) {
      if (H = !1, te(U), !j)
        if (s(S) !== null)
          j = !0, Y || (Y = !0, Be());
        else {
          var L = s(x);
          L !== null && Qe(ne, L.startTime - U);
        }
    }
    var Y = !1, F = -1, J = 5, ke = -1;
    function He() {
      return $ ? !0 : !(r.unstable_now() - ke < J);
    }
    function qe() {
      if ($ = !1, Y) {
        var U = r.unstable_now();
        ke = U;
        var L = !0;
        try {
          e: {
            j = !1, H && (H = !1, V(F), F = -1), P = !0;
            var G = z;
            try {
              t: {
                for (te(U), C = s(S); C !== null && !(C.expirationTime > U && He()); ) {
                  var re = C.callback;
                  if (typeof re == "function") {
                    C.callback = null, z = C.priorityLevel;
                    var se = re(
                      C.expirationTime <= U
                    );
                    if (U = r.unstable_now(), typeof se == "function") {
                      C.callback = se, te(U), L = !0;
                      break t;
                    }
                    C === s(S) && f(S), te(U);
                  } else f(S);
                  C = s(S);
                }
                if (C !== null) L = !0;
                else {
                  var ie = s(x);
                  ie !== null && Qe(
                    ne,
                    ie.startTime - U
                  ), L = !1;
                }
              }
              break e;
            } finally {
              C = null, z = G, P = !1;
            }
            L = void 0;
          }
        } finally {
          L ? Be() : Y = !1;
        }
      }
    }
    var Be;
    if (typeof me == "function")
      Be = function() {
        me(qe);
      };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), yt = Ae.port2;
      Ae.port1.onmessage = qe, Be = function() {
        yt.postMessage(null);
      };
    } else
      Be = function() {
        Q(qe, 0);
      };
    function Qe(U, L) {
      F = Q(function() {
        U(r.unstable_now());
      }, L);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, r.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < U ? Math.floor(1e3 / U) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, r.unstable_next = function(U) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = z;
      }
      var G = z;
      z = L;
      try {
        return U();
      } finally {
        z = G;
      }
    }, r.unstable_requestPaint = function() {
      $ = !0;
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
      var G = z;
      z = U;
      try {
        return L();
      } finally {
        z = G;
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
        id: D++,
        callback: L,
        priorityLevel: U,
        startTime: G,
        expirationTime: se,
        sortIndex: -1
      }, G > re ? (U.sortIndex = G, o(x, U), s(S) === null && U === s(x) && (H ? (V(F), F = -1) : H = !0, Qe(ne, G - re))) : (U.sortIndex = se, o(S, U), j || P || (j = !0, Y || (Y = !0, Be()))), U;
    }, r.unstable_shouldYield = He, r.unstable_wrapCallback = function(U) {
      var L = z;
      return function() {
        var G = z;
        z = L;
        try {
          return U.apply(this, arguments);
        } finally {
          z = G;
        }
      };
    };
  })(k0)), k0;
}
var _0;
function ZE() {
  return _0 || (_0 = 1, x0.exports = KE()), x0.exports;
}
var A0;
function WE() {
  if (A0) return wm;
  A0 = 1;
  var r = { env: { NODE_ENV: "production" } }, o = ZE(), s = ht, f = b1;
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
  function h(e) {
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
  function x(e) {
    if (h(e) !== e)
      throw Error(c(188));
  }
  function D(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(c(188));
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
          if (i === n) return x(l), e;
          if (i === a) return x(l), t;
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
  function C(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = C(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var z = Object.assign, P = Symbol.for("react.element"), j = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), me = Symbol.for("react.consumer"), te = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), He = Symbol.for("react.activity"), qe = Symbol.for("react.memo_cache_sentinel"), Be = Symbol.iterator;
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
      case $:
        return "Fragment";
      case V:
        return "Profiler";
      case Q:
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
        case H:
          return "Portal";
        case te:
          return e.displayName || "Context";
        case me:
          return (e._context.displayName || "Context") + ".Consumer";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case J:
          return t = e.displayName || null, t !== null ? t : Qe(e.type) || "Memo";
        case ke:
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
  var ye = we(null), vt = we(null), tt = we(null), fn = we(null);
  function dn(e, t) {
    switch (Z(tt, t), Z(vt, e), Z(ye, null), t.nodeType) {
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
    ue(ye), ue(vt), ue(tt);
  }
  function De(e) {
    e.memoizedState !== null && Z(fn, e);
    var t = ye.current, n = Bp(t, e.type);
    t !== n && (Z(vt, e), Z(ye, n));
  }
  function Qa(e) {
    vt.current === e && (ue(ye), ue(vt)), fn.current === e && (ue(fn), ui._currentValue = re);
  }
  var Re, dr;
  function xe(e) {
    if (Re === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Re = t && t[1] || "", dr = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Re + e + dr;
  }
  var Rn = !1;
  function wl(e, t) {
    if (!e || Rn) return "";
    Rn = !0;
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
`), E = d.split(`
`);
        for (l = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < E.length && !E[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === m.length || l === E.length)
          for (a = m.length - 1, l = E.length - 1; 1 <= a && 0 <= l && m[a] !== E[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (m[a] !== E[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || m[a] !== E[l]) {
                  var O = `
` + m[a].replace(" at new ", " at ");
                  return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), O;
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      Rn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? xe(n) : "";
  }
  function vn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return xe(e.type);
      case 16:
        return xe("Lazy");
      case 13:
        return e.child !== t && t !== null ? xe("Suspense Fallback") : xe("Suspense");
      case 19:
        return xe("SuspenseList");
      case 0:
      case 15:
        return wl(e.type, !1);
      case 11:
        return wl(e.type.render, !1);
      case 1:
        return wl(e.type, !0);
      case 31:
        return xe("Activity");
      default:
        return "";
    }
  }
  function pr(e) {
    try {
      var t = "", n = null;
      do
        t += vn(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var $a = Object.prototype.hasOwnProperty, Tl = o.unstable_scheduleCallback, xl = o.unstable_cancelCallback, bn = o.unstable_shouldYield, Pa = o.unstable_requestPaint, Ye = o.unstable_now, mr = o.unstable_getCurrentPriorityLevel, kl = o.unstable_ImmediatePriority, El = o.unstable_UserBlockingPriority, ia = o.unstable_NormalPriority, oa = o.unstable_LowPriority, Ka = o.unstable_IdlePriority, _l = o.log, xi = o.unstable_setDisableYieldValue, ua = null, pt = null;
  function It(e) {
    if (typeof _l == "function" && xi(e), pt && typeof pt.setStrictMode == "function")
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
    var d = e.entanglements, m = e.expirationTimes, E = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var O = 31 - rt(n), M = 1 << O;
      d[O] = 0, m[O] = -1;
      var _ = E[O];
      if (_ !== null)
        for (E[O] = null, O = 0; O < _.length; O++) {
          var A = _[O];
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
  function vr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function fa() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : um(e.type));
  }
  function ki(e, t) {
    var n = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = n;
    }
  }
  var Tn = Math.random().toString(36).slice(2), oe = "__reactFiber$" + Tn, Fe = "__reactProps$" + Tn, da = "__reactContainer$" + Tn, Nl = "__reactEvents$" + Tn, br = "__reactListeners$" + Tn, Ei = "__reactHandles$" + Tn, Sr = "__reactResources$" + Tn, tl = "__reactMarker$" + Tn;
  function wr(e) {
    delete e[oe], delete e[Fe], delete e[Nl], delete e[br], delete e[Ei];
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
  function Rt(e) {
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
  function xn(e, t) {
    Hn(e, t), Hn(e + "Capture", t);
  }
  function Hn(e, t) {
    for (Ai[e] = t, e = 0; e < t.length; e++)
      _i.add(t[e]);
  }
  var Ol = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Cl = {}, nl = {};
  function ha(e) {
    return $a.call(nl, e) ? !0 : $a.call(Cl, e) ? !1 : Ol.test(e) ? nl[e] = !0 : (Cl[e] = !0, !1);
  }
  function kn(e, t, n) {
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
  function kt(e, t, n) {
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
  function Et(e) {
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
  function Ni(e, t, n) {
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
  function xr(e) {
    if (!e._valueTracker) {
      var t = Tr(e) ? "checked" : "value";
      e._valueTracker = Ni(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function kr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Tr(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function zl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var eu = /[\n"\\]/g;
  function xt(e) {
    return e.replace(
      eu,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ga(e, t, n, a, l, i, u, d) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Et(t)) : e.value !== "" + Et(t) && (e.value = "" + Et(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? b(e, u, Et(t)) : n != null ? b(e, u, Et(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + Et(d) : e.removeAttribute("name");
  }
  function Dl(e, t, n, a, l, i, u, d) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        xr(e);
        return;
      }
      n = n != null ? "" + Et(n) : "", t = t != null ? "" + Et(t) : n, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = d ? e.checked : !!a, e.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), xr(e);
  }
  function b(e, t, n) {
    t === "number" && zl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function y(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Et(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, a && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function N(e, t, n) {
    if (t != null && (t = "" + Et(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Et(n) : "";
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
    n = Et(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), xr(e);
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
  function ve(e, t, n) {
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
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && ve(e, l, a);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && ve(e, i, t[i]);
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
  var bt = /* @__PURE__ */ new Map([
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
  var Rl = null, Ml = null;
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
              'input[name="' + xt(
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
              a = n[t], a.form === e.form && kr(a);
          }
          break e;
        case "textarea":
          N(e, n.value, n.defaultValue);
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
      if (au = !1, (Rl !== null || Ml !== null) && (go(), Rl && (t = Rl, e = Ml, Ml = Rl = null, jc(t), e)))
        for (t = 0; t < e.length; t++) jc(e[t]);
    }
  }
  function Er(e, t) {
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
  var ya = null, ru = null, Oi = null;
  function Hc() {
    if (Oi) return Oi;
    var e, t = ru, n = t.length, a, l = "value" in ya ? ya.value : ya.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var u = n - e;
    for (a = 1; a <= u && t[n - a] === l[i - a]; a++) ;
    return Oi = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Ci(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function zi() {
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
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? zi : Bc, this.isPropagationStopped = Bc, this;
    }
    return z(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = zi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = zi);
      },
      persist: function() {
      },
      isPersistent: zi
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
  }, Di = At(al), Ar = z({}, al, { view: 0, detail: 0 }), Gh = At(Ar), iu, ou, Nr, Ri = z({}, Ar, {
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
      return "movementX" in e ? e.movementX : (e !== Nr && (Nr && e.type === "mousemove" ? (iu = e.screenX - Nr.screenX, ou = e.screenY - Nr.screenY) : ou = iu = 0, Nr = e), iu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ou;
    }
  }), qc = At(Ri), Yh = z({}, Ri, { dataTransfer: 0 }), Fh = At(Yh), Xh = z({}, Ar, { relatedTarget: 0 }), uu = At(Xh), Ih = z({}, al, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Qh = At(Ih), $h = z({}, al, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Ph = At($h), Kh = z({}, al, { data: 0 }), Vc = At(Kh), Zh = {
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
  var tg = z({}, Ar, {
    key: function(e) {
      if (e.key) {
        var t = Zh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ci(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wh[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? Ci(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ci(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), ng = At(tg), ag = z({}, Ri, {
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
  }), Gc = At(ag), lg = z({}, Ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: su
  }), rg = At(lg), ig = z({}, al, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), og = At(ig), ug = z({}, Ri, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sg = At(ug), cg = z({}, al, {
    newState: 0,
    oldState: 0
  }), fg = At(cg), dg = [9, 13, 27, 32], cu = Bn && "CompositionEvent" in window, Or = null;
  Bn && "documentMode" in document && (Or = document.documentMode);
  var pg = Bn && "TextEvent" in window && !Or, Yc = Bn && (!cu || Or && 8 < Or && 11 >= Or), Fc = " ", Xc = !1;
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
      return e === "compositionend" || !cu && Ic(e, t) ? (e = Hc(), Oi = ru = ya = null, Ll = !1, e) : null;
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
    Rl ? Ml ? Ml.push(a) : Ml = [a] : Rl = a, t = xo(t, "onChange"), 0 < t.length && (n = new Di(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Cr = null, zr = null;
  function yg(e) {
    Dp(e, 0);
  }
  function Mi(e) {
    var t = Rt(e);
    if (kr(t)) return e;
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
    Cr && (Cr.detachEvent("onpropertychange", ef), zr = Cr = null);
  }
  function ef(e) {
    if (e.propertyName === "value" && Mi(zr)) {
      var t = [];
      Pc(
        t,
        zr,
        e,
        nu(e)
      ), Uc(yg, t);
    }
  }
  function vg(e, t, n) {
    e === "focusin" ? (Jc(), Cr = t, zr = n, Cr.attachEvent("onpropertychange", ef)) : e === "focusout" && Jc();
  }
  function bg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Mi(zr);
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
  function Dr(e, t) {
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
    for (var t = zl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = zl(e.document);
    }
    return t;
  }
  function pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var xg = Bn && "documentMode" in document && 11 >= document.documentMode, jl = null, mu = null, Rr = null, hu = !1;
  function rf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    hu || jl == null || jl !== zl(a) || (a = jl, "selectionStart" in a && pu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Rr && Dr(Rr, a) || (Rr = a, a = xo(mu, "onSelect"), 0 < a.length && (t = new Di(
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
  var uf = rl("animationend"), sf = rl("animationiteration"), cf = rl("animationstart"), kg = rl("transitionrun"), Eg = rl("transitionstart"), _g = rl("transitioncancel"), ff = rl("transitionend"), df = /* @__PURE__ */ new Map(), yu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yu.push("scrollEnd");
  function mn(e, t) {
    df.set(e, t), xn(t, [e]);
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
  }, Pt = [], Hl = 0, vu = 0;
  function ji() {
    for (var e = Hl, t = vu = Hl = 0; t < e; ) {
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
    Pt[Hl++] = e, Pt[Hl++] = t, Pt[Hl++] = n, Pt[Hl++] = a, vu |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function bu(e, t, n, a) {
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
      throw ti = 0, Ns = null, Error(c(185));
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
      u = Dy(
        e,
        n,
        ye.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case He:
          return e = Ht(31, n, t, l), e.elementType = He, e.lanes = i, e;
        case $:
          return ol(n.children, l, i, t);
        case Q:
          u = 8, l |= 24;
          break;
        case V:
          return e = Ht(12, n, t, l | 2), e.elementType = V, e.lanes = i, e;
        case Y:
          return e = Ht(13, n, t, l), e.elementType = Y, e.lanes = i, e;
        case F:
          return e = Ht(19, n, t, l), e.elementType = F, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case te:
                u = 10;
                break e;
              case me:
                u = 9;
                break e;
              case ne:
                u = 11;
                break e;
              case J:
                u = 14;
                break e;
              case ke:
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
  var ql = [], Vl = 0, qi = null, Mr = 0, Zt = [], Wt = 0, va = null, En = 1, _n = "";
  function Vn(e, t) {
    ql[Vl++] = Mr, ql[Vl++] = qi, qi = e, Mr = t;
  }
  function yf(e, t, n) {
    Zt[Wt++] = En, Zt[Wt++] = _n, Zt[Wt++] = va, va = e;
    var a = En;
    e = _n;
    var l = 32 - rt(a) - 1;
    a &= ~(1 << l), n += 1;
    var i = 32 - rt(t) + l;
    if (30 < i) {
      var u = l - l % 5;
      i = (a & (1 << u) - 1).toString(32), a >>= u, l -= u, En = 1 << 32 - rt(t) + l | n << l | a, _n = i + e;
    } else
      En = 1 << i | n << l | a, _n = e;
  }
  function xu(e) {
    e.return !== null && (Vn(e, 1), yf(e, 1, 0));
  }
  function ku(e) {
    for (; e === qi; )
      qi = ql[--Vl], ql[Vl] = null, Mr = ql[--Vl], ql[Vl] = null;
    for (; e === va; )
      va = Zt[--Wt], Zt[Wt] = null, _n = Zt[--Wt], Zt[Wt] = null, En = Zt[--Wt], Zt[Wt] = null;
  }
  function vf(e, t) {
    Zt[Wt++] = En, Zt[Wt++] = _n, Zt[Wt++] = va, En = t.id, _n = t.overflow, va = e;
  }
  var ot = null, Le = null, ge = !1, ba = null, Jt = !1, Eu = Error(c(519));
  function Sa(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Lr(Kt(t, e)), Eu;
  }
  function bf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[oe] = e, t[Fe] = a, n) {
      case "dialog":
        fe("cancel", t), fe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        fe("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ai.length; n++)
          fe(ai[n], t);
        break;
      case "source":
        fe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        fe("error", t), fe("load", t);
        break;
      case "details":
        fe("toggle", t);
        break;
      case "input":
        fe("invalid", t), Dl(
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
        fe("invalid", t);
        break;
      case "textarea":
        fe("invalid", t), q(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || jp(t.textContent, n) ? (a.popover != null && (fe("beforetoggle", t), fe("toggle", t)), a.onScroll != null && fe("scroll", t), a.onScrollEnd != null && fe("scrollend", t), a.onClick != null && (t.onclick = it), t = !0) : t = !1, t || Sa(e, !0);
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
    var e = ba;
    return e !== null && (zt === null ? zt = e : zt.push.apply(
      zt,
      e
    ), ba = null), e;
  }
  function Lr(e) {
    ba === null ? ba = [e] : ba.push(e);
  }
  var Au = we(null), sl = null, Gn = null;
  function wa(e, t, n) {
    Z(Au, t._currentValue), t._currentValue = n;
  }
  function Yn(e) {
    e._currentValue = Au.current, ue(Au);
  }
  function Nu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ou(e, t, n, a) {
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
              i.lanes |= n, d = i.alternate, d !== null && (d.lanes |= n), Nu(
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
        u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), Nu(u, n, e), u = null;
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
    e !== null && Ou(
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
  var Ng = typeof AbortController < "u" ? AbortController : function() {
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
  }, Og = o.unstable_scheduleCallback, Cg = o.unstable_NormalPriority, $e = {
    $$typeof: te,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Cu() {
    return {
      controller: new Ng(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function jr(e) {
    e.refCount--, e.refCount === 0 && Og(Cg, function() {
      e.controller.abort();
    });
  }
  var Ur = null, zu = 0, Fl = 0, Xl = null;
  function zg(e, t) {
    if (Ur === null) {
      var n = Ur = [];
      zu = 0, Fl = Ms(), Xl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return zu++, t.then(Tf, Tf), t;
  }
  function Tf() {
    if (--zu === 0 && Ur !== null) {
      Xl !== null && (Xl.status = "fulfilled");
      var e = Ur;
      Ur = null, Fl = 0, Xl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Dg(e, t) {
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
  var xf = L.S;
  L.S = function(e, t) {
    ip = Ye(), typeof t == "object" && t !== null && typeof t.then == "function" && zg(e, t), xf !== null && xf(e, t);
  };
  var fl = we(null);
  function Du() {
    var e = fl.current;
    return e !== null ? e : ze.pooledCache;
  }
  function Yi(e, t) {
    t === null ? Z(fl, fl.current) : Z(fl, t.pool);
  }
  function kf() {
    var e = Du();
    return e === null ? null : { parent: $e._currentValue, pool: e };
  }
  var Il = Error(c(460)), Ru = Error(c(474)), Fi = Error(c(542)), Xi = { then: function() {
  } };
  function Ef(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function _f(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(it, it), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Nf(e), e;
      default:
        if (typeof t.status == "string") t.then(it, it);
        else {
          if (e = ze, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Nf(e), e;
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
  function Nf(e) {
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
    throw t.$$typeof === P ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Of(e) {
    function t(w, v) {
      if (e) {
        var k = w.deletions;
        k === null ? (w.deletions = [v], w.flags |= 16) : k.push(v);
      }
    }
    function n(w, v) {
      if (!e) return null;
      for (; v !== null; )
        t(w, v), v = v.sibling;
      return null;
    }
    function a(w) {
      for (var v = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? v.set(w.key, w) : v.set(w.index, w), w = w.sibling;
      return v;
    }
    function l(w, v) {
      return w = qn(w, v), w.index = 0, w.sibling = null, w;
    }
    function i(w, v, k) {
      return w.index = k, e ? (k = w.alternate, k !== null ? (k = k.index, k < v ? (w.flags |= 67108866, v) : k) : (w.flags |= 67108866, v)) : (w.flags |= 1048576, v);
    }
    function u(w) {
      return e && w.alternate === null && (w.flags |= 67108866), w;
    }
    function d(w, v, k, R) {
      return v === null || v.tag !== 6 ? (v = wu(k, w.mode, R), v.return = w, v) : (v = l(v, k), v.return = w, v);
    }
    function m(w, v, k, R) {
      var W = k.type;
      return W === $ ? O(
        w,
        v,
        k.props.children,
        R,
        k.key
      ) : v !== null && (v.elementType === W || typeof W == "object" && W !== null && W.$$typeof === ke && dl(W) === v.type) ? (v = l(v, k.props), Br(v, k), v.return = w, v) : (v = Bi(
        k.type,
        k.key,
        k.props,
        null,
        w.mode,
        R
      ), Br(v, k), v.return = w, v);
    }
    function E(w, v, k, R) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== k.containerInfo || v.stateNode.implementation !== k.implementation ? (v = Tu(k, w.mode, R), v.return = w, v) : (v = l(v, k.children || []), v.return = w, v);
    }
    function O(w, v, k, R, W) {
      return v === null || v.tag !== 7 ? (v = ol(
        k,
        w.mode,
        R,
        W
      ), v.return = w, v) : (v = l(v, k), v.return = w, v);
    }
    function M(w, v, k) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = wu(
          "" + v,
          w.mode,
          k
        ), v.return = w, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case j:
            return k = Bi(
              v.type,
              v.key,
              v.props,
              null,
              w.mode,
              k
            ), Br(k, v), k.return = w, k;
          case H:
            return v = Tu(
              v,
              w.mode,
              k
            ), v.return = w, v;
          case ke:
            return v = dl(v), M(w, v, k);
        }
        if (U(v) || Ae(v))
          return v = ol(
            v,
            w.mode,
            k,
            null
          ), v.return = w, v;
        if (typeof v.then == "function")
          return M(w, Ii(v), k);
        if (v.$$typeof === te)
          return M(
            w,
            Gi(w, v),
            k
          );
        Qi(w, v);
      }
      return null;
    }
    function _(w, v, k, R) {
      var W = v !== null ? v.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return W !== null ? null : d(w, v, "" + k, R);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case j:
            return k.key === W ? m(w, v, k, R) : null;
          case H:
            return k.key === W ? E(w, v, k, R) : null;
          case ke:
            return k = dl(k), _(w, v, k, R);
        }
        if (U(k) || Ae(k))
          return W !== null ? null : O(w, v, k, R, null);
        if (typeof k.then == "function")
          return _(
            w,
            v,
            Ii(k),
            R
          );
        if (k.$$typeof === te)
          return _(
            w,
            v,
            Gi(w, k),
            R
          );
        Qi(w, k);
      }
      return null;
    }
    function A(w, v, k, R, W) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return w = w.get(k) || null, d(v, w, "" + R, W);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case j:
            return w = w.get(
              R.key === null ? k : R.key
            ) || null, m(v, w, R, W);
          case H:
            return w = w.get(
              R.key === null ? k : R.key
            ) || null, E(v, w, R, W);
          case ke:
            return R = dl(R), A(
              w,
              v,
              k,
              R,
              W
            );
        }
        if (U(R) || Ae(R))
          return w = w.get(k) || null, O(v, w, R, W, null);
        if (typeof R.then == "function")
          return A(
            w,
            v,
            k,
            Ii(R),
            W
          );
        if (R.$$typeof === te)
          return A(
            w,
            v,
            k,
            Gi(v, R),
            W
          );
        Qi(v, R);
      }
      return null;
    }
    function X(w, v, k, R) {
      for (var W = null, be = null, I = v, le = v = 0, pe = null; I !== null && le < k.length; le++) {
        I.index > le ? (pe = I, I = null) : pe = I.sibling;
        var Se = _(
          w,
          I,
          k[le],
          R
        );
        if (Se === null) {
          I === null && (I = pe);
          break;
        }
        e && I && Se.alternate === null && t(w, I), v = i(Se, v, le), be === null ? W = Se : be.sibling = Se, be = Se, I = pe;
      }
      if (le === k.length)
        return n(w, I), ge && Vn(w, le), W;
      if (I === null) {
        for (; le < k.length; le++)
          I = M(w, k[le], R), I !== null && (v = i(
            I,
            v,
            le
          ), be === null ? W = I : be.sibling = I, be = I);
        return ge && Vn(w, le), W;
      }
      for (I = a(I); le < k.length; le++)
        pe = A(
          I,
          w,
          le,
          k[le],
          R
        ), pe !== null && (e && pe.alternate !== null && I.delete(
          pe.key === null ? le : pe.key
        ), v = i(
          pe,
          v,
          le
        ), be === null ? W = pe : be.sibling = pe, be = pe);
      return e && I.forEach(function(Ba) {
        return t(w, Ba);
      }), ge && Vn(w, le), W;
    }
    function ee(w, v, k, R) {
      if (k == null) throw Error(c(151));
      for (var W = null, be = null, I = v, le = v = 0, pe = null, Se = k.next(); I !== null && !Se.done; le++, Se = k.next()) {
        I.index > le ? (pe = I, I = null) : pe = I.sibling;
        var Ba = _(w, I, Se.value, R);
        if (Ba === null) {
          I === null && (I = pe);
          break;
        }
        e && I && Ba.alternate === null && t(w, I), v = i(Ba, v, le), be === null ? W = Ba : be.sibling = Ba, be = Ba, I = pe;
      }
      if (Se.done)
        return n(w, I), ge && Vn(w, le), W;
      if (I === null) {
        for (; !Se.done; le++, Se = k.next())
          Se = M(w, Se.value, R), Se !== null && (v = i(Se, v, le), be === null ? W = Se : be.sibling = Se, be = Se);
        return ge && Vn(w, le), W;
      }
      for (I = a(I); !Se.done; le++, Se = k.next())
        Se = A(I, w, le, Se.value, R), Se !== null && (e && Se.alternate !== null && I.delete(Se.key === null ? le : Se.key), v = i(Se, v, le), be === null ? W = Se : be.sibling = Se, be = Se);
      return e && I.forEach(function(Yy) {
        return t(w, Yy);
      }), ge && Vn(w, le), W;
    }
    function Ce(w, v, k, R) {
      if (typeof k == "object" && k !== null && k.type === $ && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case j:
            e: {
              for (var W = k.key; v !== null; ) {
                if (v.key === W) {
                  if (W = k.type, W === $) {
                    if (v.tag === 7) {
                      n(
                        w,
                        v.sibling
                      ), R = l(
                        v,
                        k.props.children
                      ), R.return = w, w = R;
                      break e;
                    }
                  } else if (v.elementType === W || typeof W == "object" && W !== null && W.$$typeof === ke && dl(W) === v.type) {
                    n(
                      w,
                      v.sibling
                    ), R = l(v, k.props), Br(R, k), R.return = w, w = R;
                    break e;
                  }
                  n(w, v);
                  break;
                } else t(w, v);
                v = v.sibling;
              }
              k.type === $ ? (R = ol(
                k.props.children,
                w.mode,
                R,
                k.key
              ), R.return = w, w = R) : (R = Bi(
                k.type,
                k.key,
                k.props,
                null,
                w.mode,
                R
              ), Br(R, k), R.return = w, w = R);
            }
            return u(w);
          case H:
            e: {
              for (W = k.key; v !== null; ) {
                if (v.key === W)
                  if (v.tag === 4 && v.stateNode.containerInfo === k.containerInfo && v.stateNode.implementation === k.implementation) {
                    n(
                      w,
                      v.sibling
                    ), R = l(v, k.children || []), R.return = w, w = R;
                    break e;
                  } else {
                    n(w, v);
                    break;
                  }
                else t(w, v);
                v = v.sibling;
              }
              R = Tu(k, w.mode, R), R.return = w, w = R;
            }
            return u(w);
          case ke:
            return k = dl(k), Ce(
              w,
              v,
              k,
              R
            );
        }
        if (U(k))
          return X(
            w,
            v,
            k,
            R
          );
        if (Ae(k)) {
          if (W = Ae(k), typeof W != "function") throw Error(c(150));
          return k = W.call(k), ee(
            w,
            v,
            k,
            R
          );
        }
        if (typeof k.then == "function")
          return Ce(
            w,
            v,
            Ii(k),
            R
          );
        if (k.$$typeof === te)
          return Ce(
            w,
            v,
            Gi(w, k),
            R
          );
        Qi(w, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint" ? (k = "" + k, v !== null && v.tag === 6 ? (n(w, v.sibling), R = l(v, k), R.return = w, w = R) : (n(w, v), R = wu(k, w.mode, R), R.return = w, w = R), u(w)) : n(w, v);
    }
    return function(w, v, k, R) {
      try {
        Hr = 0;
        var W = Ce(
          w,
          v,
          k,
          R
        );
        return Ql = null, W;
      } catch (I) {
        if (I === Il || I === Fi) throw I;
        var be = Ht(29, I, null, w.mode);
        return be.lanes = R, be.return = w, be;
      } finally {
      }
    };
  }
  var ml = Of(!0), Cf = Of(!1), Ta = !1;
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
  function xa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ka(e, t, n) {
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
      var m = d, E = m.next;
      m.next = null, u === null ? i = E : u.next = E, u = m;
      var O = e.alternate;
      O !== null && (O = O.updateQueue, d = O.lastBaseUpdate, d !== u && (d === null ? O.firstBaseUpdate = E : d.next = E, O.lastBaseUpdate = m));
    }
    if (i !== null) {
      var M = l.baseState;
      u = 0, O = E = m = null, d = i;
      do {
        var _ = d.lane & -536870913, A = _ !== d.lane;
        if (A ? (de & _) === _ : (a & _) === _) {
          _ !== 0 && _ === Fl && (Uu = !0), O !== null && (O = O.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e, ee = d;
            _ = t;
            var Ce = n;
            switch (ee.tag) {
              case 1:
                if (X = ee.payload, typeof X == "function") {
                  M = X.call(Ce, M, _);
                  break e;
                }
                M = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = ee.payload, _ = typeof X == "function" ? X.call(Ce, M, _) : X, _ == null) break e;
                M = z({}, M, _);
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
          }, O === null ? (E = O = A, m = M) : O = O.next = A, u |= _;
        if (d = d.next, d === null) {
          if (d = l.shared.pending, d === null)
            break;
          A = d, d = A.next, A.next = null, l.lastBaseUpdate = A, l.shared.pending = null;
        }
      } while (!0);
      O === null && (m = M), l.baseState = m, l.firstBaseUpdate = E, l.lastBaseUpdate = O, i === null && (l.shared.lanes = 0), Oa |= u, e.lanes = u, e.memoizedState = M;
    }
  }
  function zf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Df(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        zf(n[e], t);
  }
  var $l = we(null), $i = we(0);
  function Rf(e, t) {
    e = Wn, Z($i, e), Z($l, t), Wn = e | t.baseLanes;
  }
  function Hu() {
    Z($i, Wn), Z($l, $l.current);
  }
  function Bu() {
    Wn = $i.current, ue($l), ue($i);
  }
  var Bt = we(null), un = null;
  function Ea(e) {
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
  var Fn = 0, ae = null, Ne = null, Pe = null, Ki = !1, Pl = !1, hl = !1, Zi = 0, Yr = 0, Kl = null, Rg = 0;
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
    var t = Ne !== null && Ne.next !== null;
    if (Fn = 0, Pe = Ne = ae = null, Ki = !1, Yr = 0, Kl = null, t) throw Error(c(300));
    e === null || Ke || (e = e.dependencies, e !== null && Vi(e) && (Ke = !0));
  }
  function jf(e, t, n, a) {
    ae = e;
    var l = 0;
    do {
      if (Pl && (Kl = null), Yr = 0, Pl = !1, 25 <= l) throw Error(c(301));
      if (l += 1, Pe = Ne = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      L.H = vd, i = t(n, a);
    } while (Pl);
    return i;
  }
  function Mg() {
    var e = L.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Fr(t) : t, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (ae.flags |= 1024), t;
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
    Fn = 0, Pe = Ne = ae = null, Pl = !1, Yr = Zi = 0, Kl = null;
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
    if (Ne === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = Pe === null ? ae.memoizedState : Pe.next;
    if (t !== null)
      Pe = t, Ne = e;
    else {
      if (e === null)
        throw ae.alternate === null ? Error(c(467)) : Error(c(310));
      Ne = e, e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
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
      if (e.$$typeof === te) return ut(e);
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
    return Qu(t, Ne, e);
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
      var d = u = null, m = null, E = t, O = !1;
      do {
        var M = E.lane & -536870913;
        if (M !== E.lane ? (de & M) === M : (Fn & M) === M) {
          var _ = E.revertLane;
          if (_ === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), M === Fl && (O = !0);
          else if ((Fn & _) === _) {
            E = E.next, _ === Fl && (O = !0);
            continue;
          } else
            M = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, m === null ? (d = m = M, u = i) : m = m.next = M, ae.lanes |= _, Oa |= _;
          M = E.action, hl && n(i, M), i = E.hasEagerState ? E.eagerState : n(i, M);
        } else
          _ = {
            lane: M,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, m === null ? (d = m = _, u = i) : m = m.next = _, ae.lanes |= M, Oa |= M;
        E = E.next;
      } while (E !== null && E !== t);
      if (m === null ? u = i : m.next = d, !Ut(i, e.memoizedState) && (Ke = !0, O && (n = Xl, n !== null)))
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
      (Ne || l).memoizedState,
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
      ), ze === null) throw Error(c(349));
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
    t !== null && Dt(t, e, 2);
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
      Ne,
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
      } catch (E) {
        Ku(e, t, E);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), L.T = i;
      }
    } else
      try {
        i = n(l, a), Xf(e, t, i);
      } catch (E) {
        Ku(e, t, E);
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
      var n = ze.formState;
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
    return Zf(t, Ne, e);
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
    var t = Ie(), n = Ne;
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
    Ne !== null && a !== null && Vu(a, Ne.memoizedState.deps) ? l.memoizedState = Zl(t, i, n, a) : (ae.flags |= e, l.memoizedState = Zl(
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
    return n === void 0 || (Fn & 1073741824) !== 0 && (de & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = up(), ae.lanes |= e, Oa |= e, n);
  }
  function ud(e, t, n, a) {
    return Ut(n, t) ? n : $l.current !== null ? (e = Ju(e, n, a), Ut(e, t) || (Ke = !0), e) : (Fn & 42) === 0 || (Fn & 1073741824) !== 0 && (de & 261930) === 0 ? (Ke = !0, e.memoizedState = n) : (e = up(), ae.lanes |= e, Oa |= e, t);
  }
  function sd(e, t, n, a, l) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var u = L.T, d = {};
    L.T = d, ns(e, !1, t, n);
    try {
      var m = l(), E = L.S;
      if (E !== null && E(d, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var O = Dg(
          m,
          a
        );
        Xr(
          e,
          t,
          O,
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
          e = xa(n);
          var a = ka(t, e, n);
          a !== null && (Dt(a, t, n), qr(a, t, n)), t = { cache: Cu() }, e.payload = t;
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
    }, ao(e) ? hd(t, n) : (n = bu(e, t, n, a), n !== null && (Dt(n, e, a), gd(n, t, a)));
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
            return Ui(e, t, l, 0), ze === null && ji(), !1;
        } catch {
        } finally {
        }
      if (n = bu(e, t, l, a), n !== null)
        return Dt(n, e, a), gd(n, t, a), !0;
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
      t = bu(
        e,
        n,
        a,
        2
      ), t !== null && Dt(t, e, 2);
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
        if (n = t(), ze === null)
          throw Error(c(349));
        (de & 127) !== 0 || Hf(a, t, n);
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
      var e = St(), t = ze.identifierPrefix;
      if (ge) {
        var n = _n, a = En;
        n = (a & ~(1 << 32 - rt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Zi++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Rg++, t = "_" + t + "r_" + n.toString(32) + "_";
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
        Ne.memoizedState,
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
      return Yf(n, Ne, e, t);
    },
    useMemoCache: Iu,
    useCacheRefresh: pd
  };
  as.useEffectEvent = td;
  var vd = {
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
      return Ne === null ? Ju(n, e, t) : ud(
        n,
        Ne.memoizedState,
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
      return Ne !== null ? Yf(n, Ne, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Iu,
    useCacheRefresh: pd
  };
  vd.useEffectEvent = td;
  function ls(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var rs = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Yt(), l = xa(a);
      l.payload = t, n != null && (l.callback = n), t = ka(e, l, a), t !== null && (Dt(t, e, a), qr(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Yt(), l = xa(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = ka(e, l, a), t !== null && (Dt(t, e, a), qr(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Yt(), a = xa(n);
      a.tag = 2, t != null && (a.callback = t), t = ka(e, a, n), t !== null && (Dt(t, e, n), qr(t, e, n));
    }
  };
  function bd(e, t, n, a, l, i, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, u) : t.prototype && t.prototype.isPureReactComponent ? !Dr(n, a) || !Dr(l, i) : !0;
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
      n === t && (n = z({}, n));
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
  function xd(e) {
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
  function kd(e, t, n) {
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
    return n = xa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      lo(e, t);
    }, n;
  }
  function Ed(e) {
    return e = xa(e), e.tag = 3, e;
  }
  function _d(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      e.payload = function() {
        return l(i);
      }, e.callback = function() {
        kd(t, n, a);
      };
    }
    var u = n.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      kd(t, n, a), typeof l != "function" && (Ca === null ? Ca = /* @__PURE__ */ new Set([this]) : Ca.add(this));
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
            return un === null ? yo() : n.alternate === null && Ge === 0 && (Ge = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === Xi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), zs(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === Xi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), zs(e, a, l)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return zs(e, a, l), yo(), !1;
    }
    if (ge)
      return t = Bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Eu && (e = Error(c(422), { cause: a }), Lr(Kt(e, n)))) : (a !== Eu && (t = Error(c(423), {
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
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ca === null || !Ca.has(i))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = Ed(l), _d(
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
    t.child = e === null ? Cf(t, null, n, a) : ml(
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
    ), d = Yu(), e !== null && !Ke ? (Fu(e, t, l), In(e, t, l)) : (ge && d && xu(t), t.flags |= 1, st(e, t, a, l), t.child);
  }
  function Nd(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Su(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Od(
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
      if (n = n.compare, n = n !== null ? n : Dr, n(u, a) && e.ref === t.ref)
        return In(e, t, l);
    }
    return t.flags |= 1, e = qn(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Od(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Dr(i, a) && e.ref === t.ref)
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
  function Cd(e, t, n, a) {
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
        return zd(
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
        ), i !== null ? Rf(t, i) : Hu(), Mf(t);
      else
        return a = t.lanes = 536870912, zd(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          a
        );
    } else
      i !== null ? (Yi(t, i.cachePool), Rf(t, i), _a(), t.memoizedState = null) : (e !== null && Yi(t, null), Hu(), _a());
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
  function zd(e, t, n, a, l) {
    var i = Du();
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
  function Dd(e, t, n) {
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
          treeContext: va !== null ? { id: En, overflow: _n } : null,
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
          t.flags &= -257, t = Dd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (Ke || Yl(e, t, n, !1), l = (n & e.childLanes) !== 0, Ke || l) {
        if (a = ze, a !== null && (u = yr(a, n), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, il(e, u), Dt(a, e, u), os;
        yo(), t = Dd(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, Le = en(u.nextSibling), ot = t, ge = !0, ba = null, Jt = !1, e !== null && vf(t, e), t = ro(t, a), t.flags |= 4096;
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
    ), a = Yu(), e !== null && !Ke ? (Fu(e, t, l), In(e, t, l)) : (ge && a && xu(t), t.flags |= 1, st(e, t, n, l), t.child);
  }
  function Rd(e, t, n, a, l, i) {
    return cl(t), t.updateQueue = null, n = jf(
      t,
      a,
      n,
      l
    ), Lf(e), a = Yu(), e !== null && !Ke ? (Fu(e, t, i), In(e, t, i)) : (ge && a && xu(t), t.flags |= 1, st(e, t, n, i), t.child);
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
      var E = i.context, O = n.contextType;
      u = Bl, typeof O == "object" && O !== null && (u = ut(O));
      var M = n.getDerivedStateFromProps;
      O = typeof M == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, O || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || E !== u) && Sd(
        t,
        i,
        a,
        u
      ), Ta = !1;
      var _ = t.memoizedState;
      i.state = _, Gr(t, a, i, l), Vr(), E = t.memoizedState, d || _ !== E || Ta ? (typeof M == "function" && (ls(
        t,
        n,
        M,
        a
      ), E = t.memoizedState), (m = Ta || bd(
        t,
        n,
        m,
        a,
        _,
        E,
        u
      )) ? (O || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = E), i.props = a, i.state = E, i.context = u, a = m) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Lu(e, t), u = t.memoizedProps, O = gl(n, u), i.props = O, M = t.pendingProps, _ = i.context, E = n.contextType, m = Bl, typeof E == "object" && E !== null && (m = ut(E)), d = n.getDerivedStateFromProps, (E = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== M || _ !== m) && Sd(
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
      ), A = t.memoizedState), (O = Ta || bd(
        t,
        n,
        O,
        a,
        _,
        A,
        m
      ) || e !== null && e.dependencies !== null && Vi(e.dependencies)) ? (E || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, A, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        A,
        m
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = A), i.props = a, i.state = A, i.context = m, a = O) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), a = !1);
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
    return { baseLanes: e, cachePool: kf() };
  }
  function fs(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Gt), e;
  }
  function jd(e, t, n) {
    var a = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), u && (l = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (l ? Ea(t) : _a(), (e = Le) ? (e = Fp(
          e,
          Jt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: va !== null ? { id: En, overflow: _n } : null,
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
      ), t.memoizedState = ss, Qr(null, a)) : (Ea(t), ds(t, d));
    }
    var m = e.memoizedState;
    if (m !== null && (d = m.dehydrated, d !== null)) {
      if (i)
        t.flags & 256 ? (Ea(t), t.flags &= -257, t = ps(
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
      else if (Ea(t), Qs(d)) {
        if (u = d.nextSibling && d.nextSibling.dataset, u) var E = u.dgst;
        u = E, a = Error(c(419)), a.stack = "", a.digest = u, Lr({ value: a, source: null, stack: null }), t = ps(
          e,
          t,
          n
        );
      } else if (Ke || Yl(e, t, n, !1), u = (n & e.childLanes) !== 0, Ke || u) {
        if (u = ze, u !== null && (a = yr(u, n), a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, il(e, a), Dt(u, e, a), os;
        Is(d) || yo(), t = ps(
          e,
          t,
          n
        );
      } else
        Is(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Le = en(
          d.nextSibling
        ), ot = t, ge = !0, ba = null, Jt = !1, e !== null && vf(t, e), t = ds(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return l ? (_a(), d = a.fallback, l = t.mode, m = e.child, E = m.sibling, a = qn(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, E !== null ? d = qn(
      E,
      d
    ) : (d = ol(
      d,
      l,
      n,
      null
    ), d.flags |= 2), d.return = t, a.return = t, a.sibling = d, t.child = a, Qr(null, a), a = t.child, d = e.child.memoizedState, d === null ? d = cs(n) : (l = d.cachePool, l !== null ? (m = $e._currentValue, l = l.parent !== m ? { parent: m, pool: m } : l) : l = kf(), d = {
      baseLanes: d.baseLanes | n,
      cachePool: l
    }), a.memoizedState = d, a.childLanes = fs(
      e,
      u,
      n
    ), t.memoizedState = ss, Qr(e.child, a)) : (Ea(t), n = e.child, e = n.sibling, n = qn(n, {
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
    a !== null && (a.lanes |= t), Nu(e.return, t, n);
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
    if (e !== null && (t.dependencies = e.dependencies), Oa |= t.lanes, (n & t.childLanes) === 0)
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
        De(t);
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
          return a.dehydrated !== null ? (Ea(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? jd(e, t, n) : (Ea(t), e = In(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Ea(t);
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
        return t.lanes = 0, Cd(
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
              } else if (l === J) {
                t.tag = 14, t = Nd(
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
          if (a = u.cache, wa(t, $e, a), a !== i.cache && Ou(
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
              for (Le = en(e.firstChild), ot = t, ge = !0, ba = null, Jt = !0, n = Cf(
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
        )) ? t.memoizedState = n : ge || (n = t.type, e = t.pendingProps, a = ko(
          tt.current
        ).createElement(n), a[oe] = t, a[Fe] = e, ct(a, n, e), Me(a), t.stateNode = a) : t.memoizedState = Kp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return De(t), e === null && ge && (a = t.stateNode = Qp(
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
        return e === null && ge && ((l = a = Le) && (a = by(
          a,
          t.type,
          t.pendingProps,
          Jt
        ), a !== null ? (t.stateNode = a, ot = t, Le = en(a.firstChild), Jt = !1, l = !0) : l = !1), l || Sa(t)), De(t), l = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, a = i.children, Ys(l, i) ? a = null : u !== null && Ys(l, u) && (t.flags |= 32), t.memoizedState !== null && (l = Gu(
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
        return Nd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Od(
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
        return Cd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return cl(t), a = ut($e), e === null ? (l = Du(), l === null && (l = ze, i = Cu(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, Mu(t), wa(t, $e, l)) : ((e.lanes & n) !== 0 && (Lu(e, t), Gr(t, null, null, n), Vr()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), wa(t, $e, a)) : (a = i.cache, wa(t, $e, a), a !== l.cache && Ou(
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
          throw pl = Xi, Ru;
    } else e.flags &= -16777217;
  }
  function qd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !tm(t))
      if (dp()) e.flags |= 8192;
      else
        throw pl = Xi, Ru;
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
    switch (ku(t), t.tag) {
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
          e = ye.current, Gl(t) ? bf(t) : (e = Qp(l, a, n), t.stateNode = e, Qn(t));
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
            bf(t);
          else {
            var u = ko(
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
            e = ko(e).createTextNode(
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
    switch (ku(t), t.tag) {
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
    switch (ku(t), t.tag) {
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
              var m = n, E = d;
              try {
                E();
              } catch (O) {
                _e(
                  l,
                  m,
                  O
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (O) {
      _e(t, t.return, O);
    }
  }
  function Gd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Df(t, n);
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
  function vs(e) {
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
  function bs(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = it));
    else if (a !== 4 && (a === 27 && Ma(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (bs(e, t, n), e = e.sibling; e !== null; )
        bs(e, t, n), e = e.sibling;
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
    if (e = e.containerInfo, Vs = zo, e = lf(e), pu(e)) {
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
            var u = 0, d = -1, m = -1, E = 0, O = 0, M = e, _ = null;
            t: for (; ; ) {
              for (var A; M !== n || l !== 0 && M.nodeType !== 3 || (d = u + l), M !== i || a !== 0 && M.nodeType !== 3 || (m = u + a), M.nodeType === 3 && (u += M.nodeValue.length), (A = M.firstChild) !== null; )
                _ = M, M = A;
              for (; ; ) {
                if (M === e) break t;
                if (_ === n && ++E === l && (d = u), _ === i && ++O === a && (m = u), (A = M.nextSibling) !== null) break;
                M = _, _ = M.parentNode;
              }
              M = A;
            }
            n = d === -1 || m === -1 ? null : { start: d, end: m };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Gs = { focusedElem: e, selectionRange: n }, zo = !1, lt = t; lt !== null; )
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
                } catch (ee) {
                  _e(
                    n,
                    n.return,
                    ee
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
            Df(e, t);
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
  var Ue = null, Nt = !1;
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
        var a = Ue, l = Nt;
        Ma(n.type) && (Ue = n.stateNode, Nt = !1), Pn(
          e,
          t,
          n
        ), ri(n.stateNode), Ue = a, Nt = l;
        break;
      case 5:
        Ze || An(n, t);
      case 6:
        if (a = Ue, l = Nt, Ue = null, Pn(
          e,
          t,
          n
        ), Ue = a, Nt = l, Ue !== null)
          if (Nt)
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
        Ue !== null && (Nt ? (e = Ue, Gp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), sr(e)) : Gp(Ue, n.stateNode));
        break;
      case 4:
        a = Ue, l = Nt, Ue = n.stateNode.containerInfo, Nt = !0, Pn(
          e,
          t,
          n
        ), Ue = a, Nt = l;
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
  function Ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a], i = e, u = t, d = u;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Ma(d.type)) {
                Ue = d.stateNode, Nt = !1;
                break e;
              }
              break;
            case 5:
              Ue = d.stateNode, Nt = !1;
              break e;
            case 3:
            case 4:
              Ue = d.stateNode.containerInfo, Nt = !0;
              break e;
          }
          d = d.return;
        }
        if (Ue === null) throw Error(c(160));
        Kd(i, u, l), Ue = null, Nt = !1, i = l.alternate, i !== null && (i.return = null), l.return = null;
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
        Ot(t, e), Ct(e), a & 4 && (Aa(3, e, e.return), Pr(3, e), Aa(5, e, e.return));
        break;
      case 1:
        Ot(t, e), Ct(e), a & 512 && (Ze || n === null || An(n, n.return)), a & 64 && $n && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var l = hn;
        if (Ot(t, e), Ct(e), a & 512 && (Ze || n === null || An(n, n.return)), a & 4) {
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
        Ot(t, e), Ct(e), a & 512 && (Ze || n === null || An(n, n.return)), n !== null && a & 4 && ys(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ot(t, e), Ct(e), a & 512 && (Ze || n === null || An(n, n.return)), e.flags & 32) {
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
        if (Ot(t, e), Ct(e), a & 4) {
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
        if (Ao = null, l = hn, hn = Eo(t.containerInfo), Ot(t, e), hn = l, Ct(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            sr(t.containerInfo);
          } catch (X) {
            _e(e, e.return, X);
          }
        Ss && (Ss = !1, ep(e));
        break;
      case 4:
        a = hn, hn = Eo(
          e.stateNode.containerInfo
        ), Ot(t, e), Ct(e), hn = a;
        break;
      case 12:
        Ot(t, e), Ct(e);
        break;
      case 31:
        Ot(t, e), Ct(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, co(e, a)));
        break;
      case 13:
        Ot(t, e), Ct(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (po = Ye()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, co(e, a)));
        break;
      case 22:
        l = e.memoizedState !== null;
        var m = n !== null && n.memoizedState !== null, E = $n, O = Ze;
        if ($n = E || l, Ze = O || m, Ot(t, e), Ze = O, $n = E, Ct(e), a & 8192)
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
        Ot(t, e), Ct(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, co(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ot(t, e), Ct(e);
    }
  }
  function Ct(e) {
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
            var l = n.stateNode, i = vs(e);
            so(e, i, l);
            break;
          case 5:
            var u = n.stateNode;
            n.flags & 32 && (K(u, ""), n.flags &= -33);
            var d = vs(e);
            so(e, d, u);
            break;
          case 3:
          case 4:
            var m = n.stateNode.containerInfo, E = vs(e);
            bs(
              e,
              E,
              m
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (O) {
        _e(e, e.return, O);
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
            } catch (E) {
              _e(a, a.return, E);
            }
          if (a = i, l = a.updateQueue, l !== null) {
            var d = a.stateNode;
            try {
              var m = l.shared.hiddenCallbacks;
              if (m !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < m.length; l++)
                  zf(m[l], d);
            } catch (E) {
              _e(a, a.return, E);
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
      var i = e, u = t, d = n, m = a, E = u.flags;
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
          var O = u.stateNode;
          u.memoizedState !== null ? O._visibility & 2 ? Wl(
            i,
            u,
            d,
            m,
            l
          ) : Zr(
            i,
            u
          ) : (O._visibility |= 2, Wl(
            i,
            u,
            d,
            m,
            l
          )), l && E & 2048 && ws(
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
          ), l && E & 2048 && Ts(u.alternate, u);
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
        ), e.flags & Wr && e.memoizedState !== null && Ry(
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
        hn = Eo(e.stateNode.containerInfo), Jl(
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
  }, Pg = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, ze = null, ce = null, de = 0, Ee = 0, Vt = null, Na = !1, er = !1, xs = !1, Wn = 0, Ge = 0, Oa = 0, vl = 0, ks = 0, Gt = 0, tr = 0, ei = null, zt = null, Es = !1, po = 0, ip = 0, mo = 1 / 0, ho = null, Ca = null, et = 0, za = null, nr = null, Jn = 0, _s = 0, As = null, op = null, ti = 0, Ns = null;
  function Yt() {
    return (Te & 2) !== 0 && de !== 0 ? de & -de : L.T !== null ? Ms() : fa();
  }
  function up() {
    if (Gt === 0)
      if ((de & 536870912) === 0 || ge) {
        var e = Wa;
        Wa <<= 1, (Wa & 3932160) === 0 && (Wa = 262144), Gt = e;
      } else Gt = 536870912;
    return e = Bt.current, e !== null && (e.flags |= 32), Gt;
  }
  function Dt(e, t, n) {
    (e === ze && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (ar(e, 0), Da(
      e,
      de,
      Gt,
      !1
    )), jn(e, n), ((Te & 2) === 0 || e !== ze) && (e === ze && ((Te & 2) === 0 && (vl |= n), Ge === 4 && Da(
      e,
      de,
      Gt,
      !1
    )), Nn(e));
  }
  function sp(e, t, n) {
    if ((Te & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || wn(e, t), l = a ? Wg(e, t) : Cs(e, t, !0), i = a;
    do {
      if (l === 0) {
        er && !a && Da(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Kg(n)) {
          l = Cs(e, t, !1), i = !1;
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
              if (m && (ar(d, u).flags |= 256), u = Cs(
                d,
                u,
                !1
              ), u !== 2) {
                if (xs && !m) {
                  d.errorRecoveryDisabledLanes |= i, vl |= i, l = 4;
                  break e;
                }
                i = zt, zt = l, i !== null && (zt === null ? zt = i : zt.push.apply(
                  zt,
                  i
                ));
              }
              l = u;
            }
            if (i = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          ar(e, 0), Da(e, t, 0, !0);
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
              Da(
                a,
                t,
                Gt,
                !Na
              );
              break e;
            case 2:
              zt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (l = po + 300 - Ye(), 10 < l)) {
            if (Da(
              a,
              t,
              Gt,
              !Na
            ), Mn(a, 0, !0) !== 0) break e;
            Jn = t, a.timeoutHandle = qp(
              cp.bind(
                null,
                a,
                n,
                zt,
                ho,
                Es,
                t,
                Gt,
                vl,
                tr,
                Na,
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
            zt,
            ho,
            Es,
            t,
            Gt,
            vl,
            tr,
            Na,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Nn(e);
  }
  function cp(e, t, n, a, l, i, u, d, m, E, O, M, _, A) {
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
          vp.bind(
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
            O,
            M,
            null,
            _,
            A
          )
        ), Da(e, i, u, !E);
        return;
      }
    }
    vp(
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
  function Da(e, t, n, a) {
    t &= ~ks, t &= ~vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var i = 31 - rt(l), u = 1 << i;
      a[i] = -1, l &= ~u;
    }
    n !== 0 && gr(e, n, t);
  }
  function go() {
    return (Te & 6) === 0 ? (ni(0), !1) : !0;
  }
  function Os() {
    if (ce !== null) {
      if (Ee === 0)
        var e = ce.return;
      else
        e = ce, Gn = sl = null, Xu(e), Ql = null, Hr = 0, e = ce;
      for (; e !== null; )
        Vd(e.alternate, e), e = e.return;
      ce = null;
    }
  }
  function ar(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, gy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Jn = 0, Os(), ze = e, ce = n = qn(e.current, null), de = t, Ee = 0, Vt = null, Na = !1, er = wn(e, t), xs = !1, tr = Gt = ks = vl = Oa = Ge = 0, zt = ei = null, Es = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - rt(a), i = 1 << l;
        t |= e[l], a &= ~i;
      }
    return Wn = t, ji(), n;
  }
  function fp(e, t) {
    ae = null, L.H = Ir, t === Il || t === Fi ? (t = Af(), Ee = 3) : t === Ru ? (t = Af(), Ee = 4) : Ee = t === os ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, ce === null && (Ge = 1, lo(
      e,
      Kt(t, e.current)
    ));
  }
  function dp() {
    var e = Bt.current;
    return e === null ? !0 : (de & 4194048) === de ? un === null : (de & 62914560) === de || (de & 536870912) !== 0 ? e === un : !1;
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
    Ge = 4, Na || (de & 4194048) !== de && Bt.current !== null || (er = !0), (Oa & 134217727) === 0 && (vl & 134217727) === 0 || ze === null || Da(
      ze,
      de,
      Gt,
      !1
    );
  }
  function Cs(e, t, n) {
    var a = Te;
    Te |= 2;
    var l = pp(), i = mp();
    (ze !== e || de !== t) && (ho = null, ar(e, t)), t = !1;
    var u = Ge;
    e: do
      try {
        if (Ee !== 0 && ce !== null) {
          var d = ce, m = Vt;
          switch (Ee) {
            case 8:
              Os(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Bt.current === null && (t = !0);
              var E = Ee;
              if (Ee = 0, Vt = null, lr(e, d, m, E), n && er) {
                u = 0;
                break e;
              }
              break;
            default:
              E = Ee, Ee = 0, Vt = null, lr(e, d, m, E);
          }
        }
        Zg(), u = Ge;
        break;
      } catch (O) {
        fp(e, O);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = sl = null, Te = a, L.H = l, L.A = i, ce === null && (ze = null, de = 0, ji()), u;
  }
  function Zg() {
    for (; ce !== null; ) hp(ce);
  }
  function Wg(e, t) {
    var n = Te;
    Te |= 2;
    var a = pp(), l = mp();
    ze !== e || de !== t ? (ho = null, mo = Ye() + 500, ar(e, t)) : er = wn(
      e,
      t
    );
    e: do
      try {
        if (Ee !== 0 && ce !== null) {
          t = ce;
          var i = Vt;
          t: switch (Ee) {
            case 1:
              Ee = 0, Vt = null, lr(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Ef(i)) {
                Ee = 0, Vt = null, gp(t);
                break;
              }
              t = function() {
                Ee !== 2 && Ee !== 9 || ze !== e || (Ee = 7), Nn(e);
              }, i.then(t, t);
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              Ef(i) ? (Ee = 0, Vt = null, gp(t)) : (Ee = 0, Vt = null, lr(e, t, i, 7));
              break;
            case 5:
              var u = null;
              switch (ce.tag) {
                case 26:
                  u = ce.memoizedState;
                case 5:
                case 27:
                  var d = ce;
                  if (u ? tm(u) : d.stateNode.complete) {
                    Ee = 0, Vt = null;
                    var m = d.sibling;
                    if (m !== null) ce = m;
                    else {
                      var E = d.return;
                      E !== null ? (ce = E, vo(E)) : ce = null;
                    }
                    break t;
                  }
              }
              Ee = 0, Vt = null, lr(e, t, i, 5);
              break;
            case 6:
              Ee = 0, Vt = null, lr(e, t, i, 6);
              break;
            case 8:
              Os(), Ge = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Jg();
        break;
      } catch (O) {
        fp(e, O);
      }
    while (!0);
    return Gn = sl = null, L.H = a, L.A = l, Te = n, ce !== null ? 0 : (ze = null, de = 0, ji(), Ge);
  }
  function Jg() {
    for (; ce !== null && !bn(); )
      hp(ce);
  }
  function hp(e) {
    var t = Bd(e.alternate, e, Wn);
    e.memoizedProps = e.pendingProps, t === null ? vo(e) : ce = t;
  }
  function gp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Rd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          de
        );
        break;
      case 11:
        t = Rd(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          de
        );
        break;
      case 5:
        Xu(t);
      default:
        Vd(n, t), t = ce = mf(t, Wn), t = Bd(n, t, Wn);
    }
    e.memoizedProps = e.pendingProps, t === null ? vo(e) : ce = t;
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
        de
      )) {
        Ge = 1, lo(
          e,
          Kt(n, e.current)
        ), ce = null;
        return;
      }
    } catch (i) {
      if (l !== null) throw ce = l, i;
      Ge = 1, lo(
        e,
        Kt(n, e.current)
      ), ce = null;
      return;
    }
    t.flags & 32768 ? (ge || a === 1 ? e = !0 : er || (de & 536870912) !== 0 ? e = !1 : (Na = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Bt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), yp(t, e)) : vo(t);
  }
  function vo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        yp(
          t,
          Na
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
        ce = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ce = t;
        return;
      }
      ce = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }
  function yp(e, t) {
    do {
      var n = Xg(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        ce = e;
        return;
      }
      ce = e = n;
    } while (e !== null);
    Ge = 6, ce = null;
  }
  function vp(e, t, n, a, l, i, u, d, m) {
    e.cancelPendingCommit = null;
    do
      bo();
    while (et !== 0);
    if ((Te & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (i = t.lanes | t.childLanes, i |= vu, Jo(
        e,
        n,
        i,
        u,
        d,
        m
      ), e === ze && (ce = ze = null, de = 0), nr = t, za = e, Jn = n, _s = i, As = l, op = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ay(ia, function() {
        return xp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = L.T, L.T = null, l = G.p, G.p = 2, u = Te, Te |= 4;
        try {
          Ig(e, t, n);
        } finally {
          Te = u, G.p = l, L.T = a;
        }
      }
      et = 1, bp(), Sp(), wp();
    }
  }
  function bp() {
    if (et === 1) {
      et = 0;
      var e = za, t = nr, n = (t.flags & 13878) !== 0;
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
              var E = m.start, O = m.end;
              if (O === void 0 && (O = E), "selectionStart" in d)
                d.selectionStart = E, d.selectionEnd = Math.min(
                  O,
                  d.value.length
                );
              else {
                var M = d.ownerDocument || document, _ = M && M.defaultView || window;
                if (_.getSelection) {
                  var A = _.getSelection(), X = d.textContent.length, ee = Math.min(m.start, X), Ce = m.end === void 0 ? ee : Math.min(m.end, X);
                  !A.extend && ee > Ce && (u = Ce, Ce = ee, ee = u);
                  var w = nf(
                    d,
                    ee
                  ), v = nf(
                    d,
                    Ce
                  );
                  if (w && v && (A.rangeCount !== 1 || A.anchorNode !== w.node || A.anchorOffset !== w.offset || A.focusNode !== v.node || A.focusOffset !== v.offset)) {
                    var k = M.createRange();
                    k.setStart(w.node, w.offset), A.removeAllRanges(), ee > Ce ? (A.addRange(k), A.extend(v.node, v.offset)) : (k.setEnd(v.node, v.offset), A.addRange(k));
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
              var R = M[d];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          zo = !!Vs, Gs = Vs = null;
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
      var e = za, t = nr, n = (t.flags & 8772) !== 0;
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
      var e = za, t = nr, n = Jn, a = op;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? et = 5 : (et = 0, nr = za = null, Tp(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (l === 0 && (Ca = null), vr(n), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function")
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
      (Jn & 3) !== 0 && bo(), Nn(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === Ns ? ti++ : (ti = 0, Ns = e) : ti = 0, ni(0);
    }
  }
  function Tp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, jr(t)));
  }
  function bo() {
    return bp(), Sp(), wp(), xp();
  }
  function xp() {
    if (et !== 5) return !1;
    var e = za, t = _s;
    _s = 0;
    var n = vr(Jn), a = L.T, l = G.p;
    try {
      G.p = 32 > n ? 32 : n, L.T = null, n = As, As = null;
      var i = za, u = Jn;
      if (et = 0, nr = za = null, Jn = 0, (Te & 6) !== 0) throw Error(c(331));
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
  function kp(e, t, n) {
    t = Kt(n, t), t = is(e.stateNode, t, 2), e = ka(e, t, 2), e !== null && (jn(e, 2), Nn(e));
  }
  function _e(e, t, n) {
    if (e.tag === 3)
      kp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          kp(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ca === null || !Ca.has(a))) {
            e = Kt(n, e), n = Ed(2), a = ka(t, n, 2), a !== null && (_d(
              n,
              a,
              t,
              e
            ), jn(a, 2), Nn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function zs(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Pg();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (xs = !0, l.add(n), e = ey.bind(null, e, t, n), t.then(e, e));
  }
  function ey(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ze === e && (de & n) === n && (Ge === 4 || Ge === 3 && (de & 62914560) === de && 300 > Ye() - po ? (Te & 2) === 0 && ar(e, 0) : ks |= n, tr === de && (tr = 0)), Nn(e);
  }
  function Ep(e, t) {
    t === 0 && (t = Ln()), e = il(e, t), e !== null && (jn(e, t), Nn(e));
  }
  function ty(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ep(e, n);
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
    a !== null && a.delete(t), Ep(e, n);
  }
  function ay(e, t) {
    return Tl(e, t);
  }
  var So = null, rr = null, Ds = !1, wo = !1, Rs = !1, Ra = 0;
  function Nn(e) {
    e !== rr && e.next === null && (rr === null ? So = rr = e : rr = rr.next = e), wo = !0, Ds || (Ds = !0, ry());
  }
  function ni(e, t) {
    if (!Rs && wo) {
      Rs = !0;
      do
        for (var n = !1, a = So; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var u = a.suspendedLanes, d = a.pingedLanes;
              i = (1 << 31 - rt(42 | e) + 1) - 1, i &= l & ~(u & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, Op(a, i));
          } else
            i = de, i = Mn(
              a,
              a === ze ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || wn(a, i) || (n = !0, Op(a, i));
          a = a.next;
        }
      while (n);
      Rs = !1;
    }
  }
  function ly() {
    _p();
  }
  function _p() {
    wo = Ds = !1;
    var e = 0;
    Ra !== 0 && hy() && (e = Ra);
    for (var t = Ye(), n = null, a = So; a !== null; ) {
      var l = a.next, i = Ap(a, t);
      i === 0 ? (a.next = null, n === null ? So = l : n.next = l, l === null && (rr = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (wo = !0)), a = l;
    }
    et !== 0 && et !== 5 || ni(e), Ra !== 0 && (Ra = 0);
  }
  function Ap(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - rt(i), d = 1 << u, m = l[u];
      m === -1 ? ((d & n) === 0 || (d & a) !== 0) && (l[u] = $t(d, t)) : m <= t && (e.expiredLanes |= d), i &= ~d;
    }
    if (t = ze, n = de, n = Mn(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && xl(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || wn(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && xl(a), vr(n)) {
        case 2:
        case 8:
          n = El;
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
      return a = Np.bind(null, e), n = Tl(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && xl(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Np(e, t) {
    if (et !== 0 && et !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (bo() && e.callbackNode !== n)
      return null;
    var a = de;
    return a = Mn(
      e,
      e === ze ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (sp(e, a, t), Ap(e, Ye()), e.callbackNode != null && e.callbackNode === n ? Np.bind(null, e) : null);
  }
  function Op(e, t) {
    if (bo()) return null;
    sp(e, t, !0);
  }
  function ry() {
    yy(function() {
      (Te & 6) !== 0 ? Tl(
        kl,
        ly
      ) : _p();
    });
  }
  function Ms() {
    if (Ra === 0) {
      var e = Fl;
      e === 0 && (e = Za, Za <<= 1, (Za & 261888) === 0 && (Za = 256)), Ra = e;
    }
    return Ra;
  }
  function Cp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _t("" + e);
  }
  function zp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function iy(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = Cp(
        (l[Fe] || null).action
      ), u = a.submitter;
      u && (t = (t = u[Fe] || null) ? Cp(t.formAction) : u.getAttribute("formAction"), t !== null && (i = t, u = null));
      var d = new Di(
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
                if (Ra !== 0) {
                  var m = u ? zp(l, u) : new FormData(l);
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
                typeof i == "function" && (d.preventDefault(), m = u ? zp(l, u) : new FormData(l), es(
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
  mn(uf, "onAnimationEnd"), mn(sf, "onAnimationIteration"), mn(cf, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(kg, "onTransitionRun"), mn(Eg, "onTransitionStart"), mn(_g, "onTransitionCancel"), mn(ff, "onTransitionEnd"), Hn("onMouseEnter", ["mouseout", "mouseover"]), Hn("onMouseLeave", ["mouseout", "mouseover"]), Hn("onPointerEnter", ["pointerout", "pointerover"]), Hn("onPointerLeave", ["pointerout", "pointerover"]), xn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), xn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), xn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), xn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), xn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), xn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), sy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai)
  );
  function Dp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = a.length - 1; 0 <= u; u--) {
            var d = a[u], m = d.instance, E = d.currentTarget;
            if (d = d.listener, m !== i && l.isPropagationStopped())
              break e;
            i = d, l.currentTarget = E;
            try {
              i(l);
            } catch (O) {
              Li(O);
            }
            l.currentTarget = null, i = m;
          }
        else
          for (u = 0; u < a.length; u++) {
            if (d = a[u], m = d.instance, E = d.currentTarget, d = d.listener, m !== i && l.isPropagationStopped())
              break e;
            i = d, l.currentTarget = E;
            try {
              i(l);
            } catch (O) {
              Li(O);
            }
            l.currentTarget = null, i = m;
          }
      }
    }
  }
  function fe(e, t) {
    var n = t[Nl];
    n === void 0 && (n = t[Nl] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Rp(t, e, 2, !1), n.add(a));
  }
  function Us(e, t, n) {
    var a = 0;
    t && (a |= 4), Rp(
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
  function Rp(e, t, n, a) {
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
      var E = i, O = nu(n), M = [];
      e: {
        var _ = df.get(e);
        if (_ !== void 0) {
          var A = Di, X = e;
          switch (e) {
            case "keypress":
              if (Ci(n) === 0) break e;
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
          var ee = (t & 4) !== 0, Ce = !ee && (e === "scroll" || e === "scrollend"), w = ee ? _ !== null ? _ + "Capture" : null : _;
          ee = [];
          for (var v = E, k; v !== null; ) {
            var R = v;
            if (k = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || k === null || w === null || (R = Er(v, w), R != null && ee.push(
              li(v, R, k)
            )), Ce) break;
            v = v.return;
          }
          0 < ee.length && (_ = new A(
            _,
            X,
            null,
            n,
            O
          ), M.push({ event: _, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_ = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", _ && n !== tu && (X = n.relatedTarget || n.fromElement) && (pa(X) || X[da]))
            break e;
          if ((A || _) && (_ = O.window === O ? O : (_ = O.ownerDocument) ? _.defaultView || _.parentWindow : window, A ? (X = n.relatedTarget || n.toElement, A = E, X = X ? pa(X) : null, X !== null && (Ce = h(X), ee = X.tag, X !== Ce || ee !== 5 && ee !== 27 && ee !== 6) && (X = null)) : (A = null, X = E), A !== X)) {
            if (ee = qc, R = "onMouseLeave", w = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Gc, R = "onPointerLeave", w = "onPointerEnter", v = "pointer"), Ce = A == null ? _ : Rt(A), k = X == null ? _ : Rt(X), _ = new ee(
              R,
              v + "leave",
              A,
              n,
              O
            ), _.target = Ce, _.relatedTarget = k, R = null, pa(O) === E && (ee = new ee(
              w,
              v + "enter",
              X,
              n,
              O
            ), ee.target = k, ee.relatedTarget = Ce, R = ee), Ce = R, A && X)
              t: {
                for (ee = cy, w = A, v = X, k = 0, R = w; R; R = ee(R))
                  k++;
                R = 0;
                for (var W = v; W; W = ee(W))
                  R++;
                for (; 0 < k - R; )
                  w = ee(w), k--;
                for (; 0 < R - k; )
                  v = ee(v), R--;
                for (; k--; ) {
                  if (w === v || v !== null && w === v.alternate) {
                    ee = w;
                    break t;
                  }
                  w = ee(w), v = ee(v);
                }
                ee = null;
              }
            else ee = null;
            A !== null && Mp(
              M,
              _,
              A,
              ee,
              !1
            ), X !== null && Ce !== null && Mp(
              M,
              Ce,
              X,
              ee,
              !0
            );
          }
        }
        e: {
          if (_ = E ? Rt(E) : window, A = _.nodeName && _.nodeName.toLowerCase(), A === "select" || A === "input" && _.type === "file")
            var be = Kc;
          else if ($c(_))
            if (Zc)
              be = wg;
            else {
              be = bg;
              var I = vg;
            }
          else
            A = _.nodeName, !A || A.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? E && at(E.elementType) && (be = Kc) : be = Sg;
          if (be && (be = be(e, E))) {
            Pc(
              M,
              be,
              n,
              O
            );
            break e;
          }
          I && I(e, _, E), e === "focusout" && E && _.type === "number" && E.memoizedProps.value != null && b(_, "number", _.value);
        }
        switch (I = E ? Rt(E) : window, e) {
          case "focusin":
            ($c(I) || I.contentEditable === "true") && (jl = I, mu = E, Rr = null);
            break;
          case "focusout":
            Rr = mu = jl = null;
            break;
          case "mousedown":
            hu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hu = !1, rf(M, n, O);
            break;
          case "selectionchange":
            if (xg) break;
          case "keydown":
          case "keyup":
            rf(M, n, O);
        }
        var le;
        if (cu)
          e: {
            switch (e) {
              case "compositionstart":
                var pe = "onCompositionStart";
                break e;
              case "compositionend":
                pe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                pe = "onCompositionUpdate";
                break e;
            }
            pe = void 0;
          }
        else
          Ll ? Ic(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (Yc && n.locale !== "ko" && (Ll || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Ll && (le = Hc()) : (ya = O, ru = "value" in ya ? ya.value : ya.textContent, Ll = !0)), I = xo(E, pe), 0 < I.length && (pe = new Vc(
          pe,
          e,
          null,
          n,
          O
        ), M.push({ event: pe, listeners: I }), le ? pe.data = le : (le = Qc(n), le !== null && (pe.data = le)))), (le = pg ? mg(e, n) : hg(e, n)) && (pe = xo(E, "onBeforeInput"), 0 < pe.length && (I = new Vc(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          O
        ), M.push({
          event: I,
          listeners: pe
        }), I.data = le)), iy(
          M,
          e,
          E,
          n,
          O
        );
      }
      Dp(M, t);
    });
  }
  function li(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function xo(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, i = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = Er(e, n), l != null && a.unshift(
        li(e, l, i)
      ), l = Er(e, t), l != null && a.push(
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
      var d = n, m = d.alternate, E = d.stateNode;
      if (d = d.tag, m !== null && m === a) break;
      d !== 5 && d !== 26 && d !== 27 || E === null || (m = E, l ? (E = Er(n, i), E != null && u.unshift(
        li(n, E, m)
      )) : l || (E = Er(n, i), E != null && u.push(
        li(n, E, m)
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
  function Oe(e, t, n, a, l, i) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || K(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && K(e, "" + a);
        break;
      case "className":
        kt(e, "class", a);
        break;
      case "tabIndex":
        kt(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        kt(e, n, a);
        break;
      case "style":
        mt(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          kt(e, "data", a);
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
          typeof i == "function" && (n === "formAction" ? (t !== "input" && Oe(e, t, "name", l.name, l, null), Oe(
            e,
            t,
            "formEncType",
            l.formEncType,
            l,
            null
          ), Oe(
            e,
            t,
            "formMethod",
            l.formMethod,
            l,
            null
          ), Oe(
            e,
            t,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (Oe(e, t, "encType", l.encType, l, null), Oe(e, t, "method", l.method, l, null), Oe(e, t, "target", l.target, l, null)));
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
        a != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && fe("scrollend", e);
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
        fe("beforetoggle", e), fe("toggle", e), kn(e, "popover", a);
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
        kn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = bt.get(n) || n, kn(e, n, a));
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
        a != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && fe("scrollend", e);
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
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : kn(e, n, a);
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
        fe("error", e), fe("load", e);
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
                  Oe(e, t, i, u, n, null);
              }
          }
        l && Oe(e, t, "srcSet", n.srcSet, n, null), a && Oe(e, t, "src", n.src, n, null);
        return;
      case "input":
        fe("invalid", e);
        var d = i = u = l = null, m = null, E = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var O = n[a];
            if (O != null)
              switch (a) {
                case "name":
                  l = O;
                  break;
                case "type":
                  u = O;
                  break;
                case "checked":
                  m = O;
                  break;
                case "defaultChecked":
                  E = O;
                  break;
                case "value":
                  i = O;
                  break;
                case "defaultValue":
                  d = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Oe(e, t, a, O, n, null);
              }
          }
        Dl(
          e,
          i,
          d,
          m,
          E,
          u,
          l,
          !1
        );
        return;
      case "select":
        fe("invalid", e), a = u = i = null;
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
                Oe(e, t, l, d, n, null);
            }
        t = i, n = u, e.multiple = !!a, t != null ? y(e, !!a, t, !1) : n != null && y(e, !!a, n, !0);
        return;
      case "textarea":
        fe("invalid", e), i = l = a = null;
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
                Oe(e, t, u, d, n, null);
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
                Oe(e, t, m, a, n, null);
            }
        return;
      case "dialog":
        fe("beforetoggle", e), fe("toggle", e), fe("cancel", e), fe("close", e);
        break;
      case "iframe":
      case "object":
        fe("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ai.length; a++)
          fe(ai[a], e);
        break;
      case "image":
        fe("error", e), fe("load", e);
        break;
      case "details":
        fe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        fe("error", e), fe("load", e);
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
        for (E in n)
          if (n.hasOwnProperty(E) && (a = n[E], a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Oe(e, t, E, a, n, null);
            }
        return;
      default:
        if (at(t)) {
          for (O in n)
            n.hasOwnProperty(O) && (a = n[O], a !== void 0 && qs(
              e,
              t,
              O,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (d in n)
      n.hasOwnProperty(d) && (a = n[d], a != null && Oe(e, t, d, a, n, null));
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
        var l = null, i = null, u = null, d = null, m = null, E = null, O = null;
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
                a.hasOwnProperty(A) || Oe(e, t, A, null, a, M);
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
                E = A;
                break;
              case "defaultChecked":
                O = A;
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
                A !== M && Oe(
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
          E,
          O,
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
                a.hasOwnProperty(i) || Oe(
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
                i !== m && Oe(
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
                Oe(e, t, d, null, a, l);
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
                l !== i && Oe(e, t, u, l, a, i);
            }
        N(e, _, A);
        return;
      case "option":
        for (var X in n)
          if (_ = n[X], n.hasOwnProperty(X) && _ != null && !a.hasOwnProperty(X))
            switch (X) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Oe(
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
                Oe(
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
        for (var ee in n)
          _ = n[ee], n.hasOwnProperty(ee) && _ != null && !a.hasOwnProperty(ee) && Oe(e, t, ee, null, a, _);
        for (E in a)
          if (_ = a[E], A = n[E], a.hasOwnProperty(E) && _ !== A && (_ != null || A != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(c(137, t));
                break;
              default:
                Oe(
                  e,
                  t,
                  E,
                  _,
                  a,
                  A
                );
            }
        return;
      default:
        if (at(t)) {
          for (var Ce in n)
            _ = n[Ce], n.hasOwnProperty(Ce) && _ !== void 0 && !a.hasOwnProperty(Ce) && qs(
              e,
              t,
              Ce,
              void 0,
              a,
              _
            );
          for (O in a)
            _ = a[O], A = n[O], !a.hasOwnProperty(O) || _ === A || _ === void 0 && A === void 0 || qs(
              e,
              t,
              O,
              _,
              a,
              A
            );
          return;
        }
    }
    for (var w in n)
      _ = n[w], n.hasOwnProperty(w) && _ != null && !a.hasOwnProperty(w) && Oe(e, t, w, null, a, _);
    for (M in a)
      _ = a[M], A = n[M], !a.hasOwnProperty(M) || _ === A || _ == null && A == null || Oe(e, t, M, _, a, A);
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
            var m = n[a], E = m.startTime;
            if (E > d) break;
            var O = m.transferSize, M = m.initiatorType;
            O && Up(M) && (m = m.responseEnd, u += O * (m < d ? 1 : (d - E) / (m - E)));
          }
          if (--a, t += 8 * (i + u) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Vs = null, Gs = null;
  function ko(e) {
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
    return Vp.resolve(null).then(e).catch(vy);
  } : qp;
  function vy(e) {
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
  function by(e, t, n, a) {
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
    switch (t = ko(n), e) {
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
  function Eo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ea = G.d;
  G.d = {
    f: Ty,
    r: xy,
    D: ky,
    C: Ey,
    L: _y,
    m: Ay,
    X: Oy,
    S: Ny,
    M: Cy
  };
  function Ty() {
    var e = ea.f(), t = go();
    return e || t;
  }
  function xy(e) {
    var t = ma(e);
    t !== null && t.tag === 5 && t.type === "form" ? fd(t) : ea.r(e);
  }
  var ir = typeof document > "u" ? null : document;
  function Pp(e, t, n) {
    var a = ir;
    if (a && typeof t == "string" && t) {
      var l = xt(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), $p.has(l) || ($p.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), ct(t, "link", e), Me(t), a.head.appendChild(t)));
    }
  }
  function ky(e) {
    ea.D(e), Pp("dns-prefetch", e, null);
  }
  function Ey(e, t) {
    ea.C(e, t), Pp("preconnect", e, t);
  }
  function _y(e, t, n) {
    ea.L(e, t, n);
    var a = ir;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + xt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + xt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + xt(
        n.imageSizes
      ) + '"]')) : l += '[href="' + xt(e) + '"]';
      var i = l;
      switch (t) {
        case "style":
          i = or(e);
          break;
        case "script":
          i = ur(e);
      }
      tn.has(i) || (e = z(
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
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + xt(a) + '"][href="' + xt(e) + '"]', i = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = ur(e);
      }
      if (!tn.has(i) && (e = z({ rel: "modulepreload", href: e }, t), tn.set(i, e), n.querySelector(l) === null)) {
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
  function Ny(e, t, n) {
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
          e = z(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = tn.get(i)) && Ps(e, n);
          var m = u = a.createElement("link");
          Me(m), ct(m, "link", e), m._p = new Promise(function(E, O) {
            m.onload = E, m.onerror = O;
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
  function Oy(e, t) {
    ea.X(e, t);
    var n = ir;
    if (n && e) {
      var a = Un(n).hoistableScripts, l = ur(e), i = a.get(l);
      i || (i = n.querySelector(oi(l)), i || (e = z({ src: e, async: !0 }, t), (t = tn.get(l)) && Ks(e, t), i = n.createElement("script"), Me(i), ct(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Cy(e, t) {
    ea.M(e, t);
    var n = ir;
    if (n && e) {
      var a = Un(n).hoistableScripts, l = ur(e), i = a.get(l);
      i || (i = n.querySelector(oi(l)), i || (e = z({ src: e, async: !0, type: "module" }, t), (t = tn.get(l)) && Ks(e, t), i = n.createElement("script"), Me(i), ct(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Kp(e, t, n, a) {
    var l = (l = tt.current) ? Eo(l) : null;
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
          }, tn.set(e, n), i || zy(
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
    return 'href="' + xt(e) + '"';
  }
  function ii(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Zp(e) {
    return z({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function zy(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ct(t, "link", n), Me(t), e.head.appendChild(t));
  }
  function ur(e) {
    return '[src="' + xt(e) + '"]';
  }
  function oi(e) {
    return "script[async]" + e;
  }
  function Wp(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + xt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, Me(a), a;
          var l = z({}, n, {
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
          )) ? (t.instance = l, Me(l), l) : (a = n, (l = tn.get(i)) && (a = z({}, n), Ks(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), Me(l), ct(l, "link", a), e.head.appendChild(l), t.instance = l);
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
  function Dy(e, t, n) {
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
  function Ry(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = or(a.href), i = t.querySelector(
          ii(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = No.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Me(i);
          return;
        }
        i = t.ownerDocument || t, a = Zp(a), (l = tn.get(l)) && Ps(a, l), i = i.createElement("link"), Me(i);
        var u = i;
        u._p = new Promise(function(d, m) {
          u.onload = d, u.onerror = m;
        }), ct(i, "link", a), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = No.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Zs = 0;
  function My(e, t) {
    return e.stylesheets && e.count === 0 && Co(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Co(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Zs === 0 && (Zs = 62500 * my());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Co(e, e.stylesheets), e.unsuspend)) {
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
  function No() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Co(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Oo = null;
  function Co(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Oo = /* @__PURE__ */ new Map(), t.forEach(Ly, e), Oo = null, No.call(e));
  }
  function Ly(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Oo.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Oo.set(e, n);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < l.length; i++) {
          var u = l[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (n.set(u.dataset.precedence, u), a = u);
        }
        a && n.set(null, a);
      }
      l = t.instance, u = l.getAttribute("data-precedence"), i = n.get(u) || a, i === a && n.set(null, l), n.set(u, l), this.count++, a = No.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ui = {
    $$typeof: te,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0
  };
  function jy(e, t, n, a, l, i, u, d, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ja(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ja(0), this.hiddenUpdates = Ja(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nm(e, t, n, a, l, i, u, d, m, E, O, M) {
    return e = new jy(
      e,
      t,
      n,
      u,
      m,
      E,
      O,
      M,
      d
    ), t = 1, i === !0 && (t |= 24), i = Ht(3, null, null, t), e.current = i, i.stateNode = e, t = Cu(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Mu(i), e;
  }
  function am(e) {
    return e ? (e = Bl, e) : Bl;
  }
  function lm(e, t, n, a, l, i) {
    l = am(l), a.context === null ? a.context = l : a.pendingContext = l, a = xa(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = ka(e, a, t), n !== null && (Dt(n, e, t), qr(n, e, t));
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
      t !== null && Dt(t, e, 67108864), Ws(e, 67108864);
    }
  }
  function om(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = el(t);
      var n = il(e, t);
      n !== null && Dt(n, e, t), Ws(e, t);
    }
  }
  var zo = !0;
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
    if (zo) {
      var l = ec(a);
      if (l === null)
        Bs(
          e,
          t,
          a,
          Do,
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
                    Nn(i), (Te & 6) === 0 && (mo = Ye() + 500, ni(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = il(i, 2), d !== null && Dt(d, i, 2), go(), Ws(i, 2);
            }
          if (i = ec(a), i === null && Bs(
            e,
            t,
            a,
            Do,
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
  var Do = null;
  function tc(e) {
    if (Do = null, e = pa(e), e !== null) {
      var t = h(e);
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
    return Do = e, null;
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
          case kl:
            return 2;
          case El:
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
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = T(n), t !== null) {
            e.blockedOn = t, ki(e.priority, function() {
              om(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = S(n), t !== null) {
            e.blockedOn = t, ki(e.priority, function() {
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
  function Ro(e) {
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
    Ro(e) && n.delete(t);
  }
  function Vy() {
    nc = !1, La !== null && Ro(La) && (La = null), ja !== null && Ro(ja) && (ja = null), Ua !== null && Ro(Ua) && (Ua = null), si.forEach(fm), ci.forEach(fm);
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
    return e = D(t), e = e !== null ? C(e) : null, e = e === null ? null : e.stateNode, e;
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
    var n = !1, a = "", l = wd, i = Td, u = xd;
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
    var a = !1, l = "", i = wd, u = Td, d = xd, m = null;
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
    ), t.context = am(null), n = t.current, a = Yt(), a = el(a), l = xa(a), l.callback = null, ka(n, l, a), n = a, t.current.lanes = n, jn(t, n), Nn(t), e[da] = t.current, Hs(e), new jo(t);
  }, wm.version = "19.2.6", wm;
}
var N0;
function JE() {
  if (N0) return cv.exports;
  N0 = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (o) {
        console.error(o);
      }
  }
  return r(), cv.exports = WE(), cv.exports;
}
JE();
(function() {
  var r = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width:1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width:576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width:576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width:1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
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
    var f, c, p, h, T = [], S = !0, x = !1;
    try {
      if (p = (s = s.call(r)).next, o !== 0) for (; !(S = (f = p.call(s)).done) && (T.push(f.value), T.length !== o); S = !0) ;
    } catch (D) {
      x = !0, c = D;
    } finally {
      try {
        if (!S && s.return != null && (h = s.return(), Object(h) !== h)) return;
      } finally {
        if (x) throw c;
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
let Ya = Object.freeze, Xa = Object.seal, _c = Object.create, AS = typeof Reflect < "u" && Reflect, Iv = AS.apply, Qv = AS.construct;
Ya || (Ya = function(o) {
  return o;
});
Xa || (Xa = function(o) {
  return o;
});
Iv || (Iv = function(o, s) {
  for (var f = arguments.length, c = new Array(f > 2 ? f - 2 : 0), p = 2; p < f; p++)
    c[p - 2] = arguments[p];
  return o.apply(s, c);
});
Qv || (Qv = function(o) {
  for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
    f[c - 1] = arguments[c];
  return new o(...f);
});
const Tm = Dn(Array.prototype.forEach), u3 = Dn(Array.prototype.lastIndexOf), z0 = Dn(Array.prototype.pop), xc = Dn(Array.prototype.push), s3 = Dn(Array.prototype.splice), Po = Array.isArray, Cm = Dn(String.prototype.toLowerCase), fv = Dn(String.prototype.toString), D0 = Dn(String.prototype.match), xm = Dn(String.prototype.replace), R0 = Dn(String.prototype.indexOf), c3 = Dn(String.prototype.trim), f3 = Dn(Number.prototype.toString), d3 = Dn(Boolean.prototype.toString), M0 = typeof BigInt > "u" ? null : Dn(BigInt.prototype.toString), L0 = typeof Symbol > "u" ? null : Dn(Symbol.prototype.toString), ra = Dn(Object.prototype.hasOwnProperty), km = Dn(Object.prototype.toString), Va = Dn(RegExp.prototype.test), rc = p3(TypeError);
function Dn(r) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
      f[c - 1] = arguments[c];
    return Iv(r, o, f);
  };
}
function p3(r) {
  return function() {
    for (var o = arguments.length, s = new Array(o), f = 0; f < o; f++)
      s[f] = arguments[f];
    return Qv(r, s);
  };
}
function dt(r, o) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Cm;
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
      return M0 ? M0(r) : "0";
    case "symbol":
      return L0 ? L0(r) : "Symbol()";
    case "undefined":
      return km(r);
    case "function":
    case "object": {
      if (r === null)
        return km(r);
      const o = r, s = Si(o, "toString");
      if (typeof s == "function") {
        const f = s(o);
        return typeof f == "string" ? f : km(f);
      }
      return km(r);
    }
    default:
      return km(r);
  }
}
function Si(r, o) {
  for (; r !== null; ) {
    const f = o3(r, o);
    if (f) {
      if (f.get)
        return Dn(f.get);
      if (typeof f.value == "function")
        return Dn(f.value);
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
const j0 = Ya(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), dv = Ya(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pv = Ya(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), y3 = Ya(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), mv = Ya(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), v3 = Ya(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), U0 = Ya(["#text"]), H0 = Ya(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), hv = Ya(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), B0 = Ya(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Zm = Ya(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), b3 = Xa(/{{[\w\W]*|^[\w\W]*}}/g), S3 = Xa(/<%[\w\W]*|^[\w\W]*%>/g), w3 = Xa(/\${[\w\W]*/g), T3 = Xa(/^data-[\-\w.\u00B7-\uFFFF]+$/), x3 = Xa(/^aria-[\-\w]+$/), q0 = Xa(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), k3 = Xa(/^(?:\w+script|data):/i), E3 = Xa(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), _3 = Xa(/^html$/i), A3 = Xa(/^[a-z][.\w]*(-[.\w]+)+$/i), V0 = Xa(/<[/\w!]/g), N3 = Xa(/<[/\w]/g), O3 = Xa(/<\/no(script|embed|frames)/i), C3 = Xa(/\/>/i), vi = {
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
}, z3 = function() {
  return typeof window > "u" ? null : window;
}, D3 = function(o, s) {
  if (typeof o != "object" || typeof o.createPolicy != "function")
    return null;
  let f = null;
  const c = "data-tt-policy-suffix";
  s && s.hasAttribute(c) && (f = s.getAttribute(c));
  const p = "dompurify" + (f ? "#" + f : "");
  try {
    return o.createPolicy(p, {
      createHTML(h) {
        return h;
      },
      createScriptURL(h) {
        return h;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + p + " could not be created."), null;
  }
}, G0 = function() {
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
function NS() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : z3();
  const o = (b) => NS(b);
  if (o.version = "3.4.11", o.removed = [], !r || !r.document || r.document.nodeType !== vi.document || !r.Element)
    return o.isSupported = !1, o;
  let s = r.document;
  const f = s, c = f.currentScript;
  r.DocumentFragment;
  const p = r.HTMLTemplateElement, h = r.Node, T = r.Element, S = r.NodeFilter, x = r.NamedNodeMap;
  x === void 0 && (r.NamedNodeMap || r.MozNamedAttrMap), r.HTMLFormElement;
  const D = r.DOMParser, C = r.trustedTypes, z = T.prototype, P = Si(z, "cloneNode"), j = Si(z, "remove"), H = Si(z, "nextSibling"), $ = Si(z, "childNodes"), Q = Si(z, "parentNode"), V = Si(z, "shadowRoot"), me = Si(z, "attributes"), te = h && h.prototype ? Si(h.prototype, "nodeType") : null, ne = h && h.prototype ? Si(h.prototype, "nodeName") : null;
  if (typeof p == "function") {
    const b = s.createElement("template");
    b.content && b.content.ownerDocument && (s = b.content.ownerDocument);
  }
  let Y, F = "", J, ke = !1, He = 0;
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
    return ke || (J = D3(C, c), ke = !0), J;
  }, Qe = s, U = Qe.implementation, L = Qe.createNodeIterator, G = Qe.createDocumentFragment, re = Qe.getElementsByTagName, se = f.importNode;
  let ie = G0();
  o.isSupported = typeof _S == "function" && typeof Q == "function" && U && U.createHTMLDocument !== void 0;
  const we = b3, ue = S3, Z = w3, ye = T3, vt = x3, tt = k3, fn = E3, dn = A3;
  let nt = q0, De = null;
  const Qa = dt({}, [...j0, ...dv, ...pv, ...mv, ...U0]);
  let Re = null;
  const dr = dt({}, [...H0, ...hv, ...B0, ...Zm]);
  let xe = Object.seal(_c(null, {
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
  })), Rn = null, wl = null;
  const vn = Object.seal(_c(null, {
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
  let pr = !0, $a = !0, Tl = !1, xl = !0, bn = !1, Pa = !0, Ye = !1, mr = !1, kl = null, El = null, ia = !1, oa = !1, Ka = !1, _l = !1, xi = !0, ua = !1;
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
  const Jo = dt({}, [Mn, wn, $t], fv), gr = Ya(["mi", "mo", "mn", "ms", "mtext"]);
  let Al = dt({}, gr);
  const yr = Ya(["annotation-xml"]);
  let el = dt({}, yr);
  const vr = dt({}, ["title", "style", "font", "a", "script"]);
  let fa = null;
  const ki = ["application/xhtml+xml", "text/html"], Tn = "text/html";
  let oe = null, Fe = null;
  const da = s.createElement("form"), Nl = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, br = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Fe && Fe === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = Sl(y), fa = // eslint-disable-next-line unicorn/prefer-includes
    ki.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Tn : y.PARSER_MEDIA_TYPE, oe = fa === "application/xhtml+xml" ? fv : Cm, De = Xo(y, "ALLOWED_TAGS", Qa, {
      transform: oe
    }), Re = Xo(y, "ALLOWED_ATTR", dr, {
      transform: oe
    }), jn = Xo(y, "ALLOWED_NAMESPACES", Jo, {
      transform: fv
    }), ca = Xo(y, "ADD_URI_SAFE_ATTR", Sn, {
      transform: oe,
      base: Sn
    }), Za = Xo(y, "ADD_DATA_URI_TAGS", Wa, {
      transform: oe,
      base: Wa
    }), Qt = Xo(y, "FORBID_CONTENTS", hr, {
      transform: oe
    }), Rn = Xo(y, "FORBID_TAGS", Sl({}), {
      transform: oe
    }), wl = Xo(y, "FORBID_ATTR", Sl({}), {
      transform: oe
    }), sa = ra(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? Sl(y.USE_PROFILES) : y.USE_PROFILES : !1, pr = y.ALLOW_ARIA_ATTR !== !1, $a = y.ALLOW_DATA_ATTR !== !1, Tl = y.ALLOW_UNKNOWN_PROTOCOLS || !1, xl = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, bn = y.SAFE_FOR_TEMPLATES || !1, Pa = y.SAFE_FOR_XML !== !1, Ye = y.WHOLE_DOCUMENT || !1, oa = y.RETURN_DOM || !1, Ka = y.RETURN_DOM_FRAGMENT || !1, _l = y.RETURN_TRUSTED_TYPE || !1, ia = y.FORCE_BODY || !1, xi = y.SANITIZE_DOM !== !1, ua = y.SANITIZE_NAMED_PROPS || !1, It = y.KEEP_CONTENT !== !1, rt = y.IN_PLACE || !1, nt = g3(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : q0, Ln = typeof y.NAMESPACE == "string" ? y.NAMESPACE : $t, Al = ra(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Sl(y.MATHML_TEXT_INTEGRATION_POINTS) : dt({}, gr), el = ra(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? Sl(y.HTML_INTEGRATION_POINTS) : dt({}, yr);
    const N = ra(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? Sl(y.CUSTOM_ELEMENT_HANDLING) : _c(null);
    if (xe = _c(null), ra(N, "tagNameCheck") && Nl(N.tagNameCheck) && (xe.tagNameCheck = N.tagNameCheck), ra(N, "attributeNameCheck") && Nl(N.attributeNameCheck) && (xe.attributeNameCheck = N.attributeNameCheck), ra(N, "allowCustomizedBuiltInElements") && typeof N.allowCustomizedBuiltInElements == "boolean" && (xe.allowCustomizedBuiltInElements = N.allowCustomizedBuiltInElements), Xa(xe), bn && ($a = !1), Ka && (oa = !0), sa && (De = dt({}, U0), Re = _c(null), sa.html === !0 && (dt(De, j0), dt(Re, H0)), sa.svg === !0 && (dt(De, dv), dt(Re, hv), dt(Re, Zm)), sa.svgFilters === !0 && (dt(De, pv), dt(Re, hv), dt(Re, Zm)), sa.mathMl === !0 && (dt(De, mv), dt(Re, B0), dt(Re, Zm))), vn.tagCheck = null, vn.attributeCheck = null, ra(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? vn.tagCheck = y.ADD_TAGS : Po(y.ADD_TAGS) && (De === Qa && (De = Sl(De)), dt(De, y.ADD_TAGS, oe))), ra(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? vn.attributeCheck = y.ADD_ATTR : Po(y.ADD_ATTR) && (Re === dr && (Re = Sl(Re)), dt(Re, y.ADD_ATTR, oe))), ra(y, "ADD_URI_SAFE_ATTR") && Po(y.ADD_URI_SAFE_ATTR) && dt(ca, y.ADD_URI_SAFE_ATTR, oe), ra(y, "FORBID_CONTENTS") && Po(y.FORBID_CONTENTS) && (Qt === hr && (Qt = Sl(Qt)), dt(Qt, y.FORBID_CONTENTS, oe)), ra(y, "ADD_FORBID_CONTENTS") && Po(y.ADD_FORBID_CONTENTS) && (Qt === hr && (Qt = Sl(Qt)), dt(Qt, y.ADD_FORBID_CONTENTS, oe)), It && (De["#text"] = !0), Ye && dt(De, ["html", "head", "body"]), De.table && (dt(De, ["tbody"]), delete Rn.tbody), y.TRUSTED_TYPES_POLICY) {
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
  }, Ei = dt({}, [...dv, ...pv, ...y3]), Sr = dt({}, [...mv, ...v3]), tl = function(y, N, q) {
    return N.namespaceURI === $t ? y === "svg" : N.namespaceURI === Mn ? y === "svg" && (q === "annotation-xml" || Al[q]) : !!Ei[y];
  }, wr = function(y, N, q) {
    return N.namespaceURI === $t ? y === "math" : N.namespaceURI === wn ? y === "math" && el[q] : !!Sr[y];
  }, pa = function(y, N, q) {
    return N.namespaceURI === wn && !el[q] || N.namespaceURI === Mn && !Al[q] ? !1 : !Sr[y] && (vr[y] || !Ei[y]);
  }, ma = function(y) {
    let N = Q(y);
    (!N || !N.tagName) && (N = {
      namespaceURI: Ln,
      tagName: "template"
    });
    const q = Cm(y.tagName), K = Cm(N.tagName);
    return jn[y.namespaceURI] ? y.namespaceURI === wn ? tl(q, N, K) : y.namespaceURI === Mn ? wr(q, N, K) : y.namespaceURI === $t ? pa(q, N, K) : !!(fa === "application/xhtml+xml" && jn[y.namespaceURI]) : !1;
  }, Rt = function(y) {
    xc(o.removed, {
      element: y
    });
    try {
      Q(y).removeChild(y);
    } catch {
      if (j(y), !Q(y))
        throw rc("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Un = function(y) {
    const N = $(y);
    if (N) {
      const K = [];
      Tm(N, (he) => {
        xc(K, he);
      }), Tm(K, (he) => {
        try {
          j(he);
        } catch {
        }
      });
    }
    const q = me(y);
    if (q)
      for (let K = q.length - 1; K >= 0; --K) {
        const he = q[K], ve = he && he.name;
        if (typeof ve == "string")
          try {
            y.removeAttribute(ve);
          } catch {
          }
      }
  }, Me = function(y, N) {
    try {
      xc(o.removed, {
        attribute: N.getAttributeNode(y),
        from: N
      });
    } catch {
      xc(o.removed, {
        attribute: null,
        from: N
      });
    }
    if (N.removeAttribute(y), y === "is")
      if (oa || Ka)
        try {
          Rt(N);
        } catch {
        }
      else
        try {
          N.setAttribute(y, "");
        } catch {
        }
  }, _i = function(y) {
    const N = me(y);
    if (N)
      for (let q = N.length - 1; q >= 0; --q) {
        const K = N[q], he = K && K.name;
        if (!(typeof he != "string" || Re[oe(he)]))
          try {
            y.removeAttribute(he);
          } catch {
          }
      }
  }, Ai = function(y) {
    const N = [y];
    for (; N.length > 0; ) {
      const q = N.pop();
      (te ? te(q) : q.nodeType) === vi.element && _i(q);
      const he = $(q);
      if (he)
        for (let ve = he.length - 1; ve >= 0; --ve)
          N.push(he[ve]);
    }
  }, xn = function(y) {
    let N = null, q = null;
    if (ia)
      y = "<remove></remove>" + y;
    else {
      const ve = D0(y, /^[\r\n\t ]+/);
      q = ve && ve[0];
    }
    fa === "application/xhtml+xml" && Ln === $t && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const K = Y ? Be(y) : y;
    if (Ln === $t)
      try {
        N = new D().parseFromString(K, fa);
      } catch {
      }
    if (!N || !N.documentElement) {
      N = U.createDocument(Ln, "template", null);
      try {
        N.documentElement.innerHTML = Ja ? F : K;
      } catch {
      }
    }
    const he = N.body || N.documentElement;
    return y && q && he.insertBefore(s.createTextNode(q), he.childNodes[0] || null), Ln === $t ? re.call(N, Ye ? "html" : "body")[0] : Ye ? N.documentElement : he;
  }, Hn = function(y) {
    return L.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      S.SHOW_ELEMENT | S.SHOW_COMMENT | S.SHOW_TEXT | S.SHOW_PROCESSING_INSTRUCTION | S.SHOW_CDATA_SECTION,
      null
    );
  }, Ol = function(y) {
    return y = xm(y, we, " "), y = xm(y, ue, " "), y = xm(y, Z, " "), y;
  }, Cl = function(y) {
    var N;
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
      K.data = Ol(K.data), K = q.nextNode();
    const he = (N = y.querySelectorAll) === null || N === void 0 ? void 0 : N.call(y, "template");
    he && Tm(he, (ve) => {
      ha(ve.content) && Cl(ve.content);
    });
  }, nl = function(y) {
    const N = ne ? ne(y) : null;
    return typeof N != "string" || oe(N) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== me(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== te(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    y.childNodes !== $(y);
  }, ha = function(y) {
    if (!te || typeof y != "object" || y === null)
      return !1;
    try {
      return te(y) === vi.documentFragment;
    } catch {
      return !1;
    }
  }, kn = function(y) {
    if (!te || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof te(y) == "number";
    } catch {
      return !1;
    }
  };
  function kt(b, y, N) {
    b.length !== 0 && Tm(b, (q) => {
      q.call(o, y, N, Fe);
    });
  }
  const pn = function(y, N) {
    return !!(Pa && y.hasChildNodes() && !kn(y.firstElementChild) && Va(V0, y.textContent) && Va(V0, y.innerHTML) || Pa && y.namespaceURI === $t && N === "style" && kn(y.firstElementChild) || y.nodeType === vi.processingInstruction || Pa && y.nodeType === vi.comment && Va(N3, y.data));
  }, Et = function(y, N) {
    if (!Rn[N] && kr(N) && (xe.tagNameCheck instanceof RegExp && Va(xe.tagNameCheck, N) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(N)))
      return !1;
    if (It && !Qt[N]) {
      const q = Q(y), K = $(y);
      if (K && q) {
        const he = K.length;
        for (let ve = he - 1; ve >= 0; --ve) {
          const mt = rt ? K[ve] : P(K[ve], !0);
          q.insertBefore(mt, H(y));
        }
      }
    }
    return Rt(y), !0;
  }, Tr = function(y) {
    if (kt(ie.beforeSanitizeElements, y, null), nl(y))
      return Rt(y), !0;
    const N = oe(ne ? ne(y) : y.nodeName);
    if (kt(ie.uponSanitizeElement, y, {
      tagName: N,
      allowedTags: De
    }), pn(y, N))
      return Rt(y), !0;
    if (Rn[N] || !(vn.tagCheck instanceof Function && vn.tagCheck(N)) && !De[N])
      return Et(y, N);
    if ((te ? te(y) : y.nodeType) === vi.element && !ma(y) || (N === "noscript" || N === "noembed" || N === "noframes") && Va(O3, y.innerHTML))
      return Rt(y), !0;
    if (bn && y.nodeType === vi.text) {
      const K = Ol(y.textContent);
      y.textContent !== K && (xc(o.removed, {
        element: y.cloneNode()
      }), y.textContent = K);
    }
    return kt(ie.afterSanitizeElements, y, null), !1;
  }, Ni = function(y, N, q) {
    if (wl[N] || xi && (N === "id" || N === "name") && (q in s || q in da))
      return !1;
    const K = Re[N] || vn.attributeCheck instanceof Function && vn.attributeCheck(N, y);
    if (!($a && Va(ye, N))) {
      if (!(pr && Va(vt, N))) {
        if (K) {
          if (!ca[N]) {
            if (!Va(nt, xm(q, fn, ""))) {
              if (!((N === "src" || N === "xlink:href" || N === "href") && y !== "script" && R0(q, "data:") === 0 && Za[y])) {
                if (!(Tl && !Va(tt, xm(q, fn, "")))) {
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
          !(kr(y) && (xe.tagNameCheck instanceof RegExp && Va(xe.tagNameCheck, y) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(y)) && (xe.attributeNameCheck instanceof RegExp && Va(xe.attributeNameCheck, N) || xe.attributeNameCheck instanceof Function && xe.attributeNameCheck(N, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          N === "is" && xe.allowCustomizedBuiltInElements && (xe.tagNameCheck instanceof RegExp && Va(xe.tagNameCheck, q) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(q)))
        ) return !1;
      }
    }
    return !0;
  }, xr = dt({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), kr = function(y) {
    return !xr[Cm(y)] && Va(dn, y);
  }, zl = function(y, N, q, K) {
    if (Y && typeof C == "object" && typeof C.getAttributeType == "function" && !q)
      switch (C.getAttributeType(y, N)) {
        case "TrustedHTML":
          return Be(K);
        case "TrustedScriptURL":
          return Ae(K);
      }
    return K;
  }, eu = function(y, N, q, K) {
    try {
      q ? y.setAttributeNS(q, N, K) : y.setAttribute(N, K), nl(y) ? Rt(y) : z0(o.removed);
    } catch {
      Me(N, y);
    }
  }, xt = function(y) {
    kt(ie.beforeSanitizeAttributes, y, null);
    const N = y.attributes;
    if (!N || nl(y))
      return;
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Re,
      forceKeepAttr: void 0
    };
    let K = N.length;
    const he = oe(y.nodeName);
    for (; K--; ) {
      const ve = N[K], mt = ve.name, at = ve.namespaceURI, bt = ve.value, on = oe(mt), _t = bt;
      let it = mt === "value" ? _t : c3(_t);
      if (q.attrName = on, q.attrValue = it, q.keepAttr = !0, q.forceKeepAttr = void 0, kt(ie.uponSanitizeAttribute, y, q), it = q.attrValue, ua && (on === "id" || on === "name") && R0(it, pt) !== 0 && (Me(mt, y), it = pt + it), Pa && Va(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, it)) {
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
        if (!xl && Va(C3, it)) {
          Me(mt, y);
          continue;
        }
        if (bn && (it = Ol(it)), !Ni(he, on, it)) {
          Me(mt, y);
          continue;
        }
        it = zl(he, on, at, it), it !== _t && eu(y, mt, at, it);
      }
    }
    kt(ie.afterSanitizeAttributes, y, null);
  }, ga = function(y) {
    let N = null;
    const q = Hn(y);
    for (kt(ie.beforeSanitizeShadowDOM, y, null); N = q.nextNode(); )
      if (kt(ie.uponSanitizeShadowNode, N, null), Tr(N), xt(N), ha(N.content) && ga(N.content), (te ? te(N) : N.nodeType) === vi.element) {
        const he = V(N);
        ha(he) && (Dl(he), ga(he));
      }
    kt(ie.afterSanitizeShadowDOM, y, null);
  }, Dl = function(y) {
    const N = [{
      node: y,
      shadow: null
    }];
    for (; N.length > 0; ) {
      const q = N.pop();
      if (q.shadow) {
        ga(q.shadow);
        continue;
      }
      const K = q.node, ve = (te ? te(K) : K.nodeType) === vi.element, mt = $(K);
      if (mt)
        for (let at = mt.length - 1; at >= 0; --at)
          N.push({
            node: mt[at],
            shadow: null
          });
      if (ve) {
        const at = ne ? ne(K) : null;
        if (typeof at == "string" && oe(at) === "template") {
          const bt = K.content;
          ha(bt) && N.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (ve) {
        const at = V(K);
        ha(at) && N.push({
          node: null,
          shadow: at
        }, {
          node: at,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(b) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, q = null, K = null, he = null;
    if (Ja = !b, Ja && (b = "<!-->"), typeof b != "string" && !kn(b) && (b = h3(b), typeof b != "string"))
      throw rc("dirty is not a string, aborting");
    if (!o.isSupported)
      return b;
    mr ? (De = kl, Re = El) : br(y), (ie.uponSanitizeElement.length > 0 || ie.uponSanitizeAttribute.length > 0) && (De = Sl(De)), ie.uponSanitizeAttribute.length > 0 && (Re = Sl(Re)), o.removed = [];
    const ve = rt && typeof b != "string" && kn(b);
    if (ve) {
      const bt = ne ? ne(b) : b.nodeName;
      if (typeof bt == "string") {
        const on = oe(bt);
        if (!De[on] || Rn[on])
          throw rc("root node is forbidden and cannot be sanitized in-place");
      }
      if (nl(b))
        throw rc("root node is clobbered and cannot be sanitized in-place");
      try {
        Dl(b);
      } catch (on) {
        throw Un(b), on;
      }
    } else if (kn(b))
      N = xn("<!---->"), q = N.ownerDocument.importNode(b, !0), q.nodeType === vi.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? N = q : N.appendChild(q), Dl(q);
    else {
      if (!oa && !bn && !Ye && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return Y && _l ? Be(b) : b;
      if (N = xn(b), !N)
        return oa ? null : _l ? F : "";
    }
    N && ia && Rt(N.firstChild);
    const mt = Hn(ve ? b : N);
    try {
      for (; K = mt.nextNode(); )
        Tr(K), xt(K), ha(K.content) && ga(K.content);
    } catch (bt) {
      throw ve && Un(b), bt;
    }
    if (ve)
      return Tm(o.removed, (bt) => {
        bt.element && Ai(bt.element);
      }), bn && Cl(b), b;
    if (oa) {
      if (bn && Cl(N), Ka)
        for (he = G.call(N.ownerDocument); N.firstChild; )
          he.appendChild(N.firstChild);
      else
        he = N;
      return (Re.shadowroot || Re.shadowrootmode) && (he = se.call(f, he, !0)), he;
    }
    let at = Ye ? N.outerHTML : N.innerHTML;
    return Ye && De["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && Va(_3, N.ownerDocument.doctype.name) && (at = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + at), bn && (at = Ol(at)), Y && _l ? Be(at) : at;
  }, o.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    br(b), mr = !0, kl = De, El = Re;
  }, o.clearConfig = function() {
    Fe = null, mr = !1, kl = null, El = null, Y = J, F = "";
  }, o.isValidAttribute = function(b, y, N) {
    Fe || br({});
    const q = oe(b), K = oe(y);
    return Ni(q, K, N);
  }, o.addHook = function(b, y) {
    typeof y == "function" && ra(ie, b) && xc(ie[b], y);
  }, o.removeHook = function(b, y) {
    if (ra(ie, b)) {
      if (y !== void 0) {
        const N = u3(ie[b], y);
        return N === -1 ? void 0 : s3(ie[b], N, 1)[0];
      }
      return z0(ie[b]);
    }
  }, o.removeHooks = function(b) {
    ra(ie, b) && (ie[b] = []);
  }, o.removeAllHooks = function() {
    ie = G0();
  }, o;
}
NS();
var gv = { exports: {} }, yv, Y0;
function R3() {
  if (Y0) return yv;
  Y0 = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yv = r, yv;
}
var vv, F0;
function M3() {
  if (F0) return vv;
  F0 = 1;
  var r = /* @__PURE__ */ R3();
  function o() {
  }
  function s() {
  }
  return s.resetWarningCache = o, vv = function() {
    function f(h, T, S, x, D, C) {
      if (C !== r) {
        var z = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw z.name = "Invariant Violation", z;
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
  }, vv;
}
var X0;
function L3() {
  return X0 || (X0 = 1, gv.exports = /* @__PURE__ */ M3()()), gv.exports;
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
var bv = { exports: {} };
var I0;
function U3() {
  return I0 || (I0 = 1, (function(r) {
    (function() {
      var o = {}.hasOwnProperty;
      function s() {
        for (var p = "", h = 0; h < arguments.length; h++) {
          var T = arguments[h];
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
        var h = "";
        for (var T in p)
          o.call(p, T) && p[T] && (h = c(h, T));
        return h;
      }
      function c(p, h) {
        return h ? p ? p + " " + h : p + h : p;
      }
      r.exports ? (s.default = s, r.exports = s) : window.classNames = s;
    })();
  })(bv)), bv.exports;
}
U3();
({
  ...Gm.propTypes
});
const OS = ({ children: r, className: o = "container", ...s }) => /* @__PURE__ */ yn.jsx("div", { className: o, ...s, children: /* @__PURE__ */ yn.jsx("div", { className: "row", children: r }) });
OS.propTypes = {
  children: Gm.propTypes.children
};
({
  ...OS.propTypes
});
Gm.propTypes.children, ta.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Gm.propTypes.children;
function db({
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
}, Q0 = ["newsUnits", "interests", "audiences", "eventTypes"], H3 = (r, o = "") => {
  if (!o) return !0;
  const s = o.split(",");
  for (let f = 0; f < Q0.length; f += 1) {
    const c = Q0[f];
    for (let p = 0; p < s.length; p += 1) {
      const h = s[p], S = (r[c] || "").match(new RegExp(h, "gi"));
      if ((S == null ? void 0 : S.length) > 0) return !0;
    }
  }
  return !1;
}, $0 = (r, o) => {
  let s = r;
  return s.length > o && (s = s.substr(0, s.lastIndexOf(" ", o)), s += "..."), s;
}, B3 = ({ node: r }, o) => ({
  index: o,
  id: r.nid,
  imageUrl: r.image_url,
  imageAltText: r.image_alt,
  title: $0(r.title, 80),
  content: $0(r == null ? void 0 : r.clas_teaser, 140),
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
  const p = (T = f == null ? void 0 : f.filters) == null ? void 0 : T.replace(/_/g, " "), h = { ...f, filters: p };
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
      dataSource: h,
      defaultProps: Hm,
      noFeedText: "No news to show.",
      maxItems: c
    }
  );
};
Sc.propTypes = {
  header: sb,
  ctaButton: cb,
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
), an = "-ms-", Lm = "-moz-", Tt = "-webkit-", CS = "comm", Mh = "rule", pb = "decl", Y3 = "@import", F3 = "@namespace", zS = "@keyframes", X3 = "@layer", DS = Math.abs, mb = String.fromCharCode, $v = Object.assign;
function I3(r, o) {
  return aa(r, 0) ^ 45 ? (((o << 2 ^ aa(r, 0)) << 2 ^ aa(r, 1)) << 2 ^ aa(r, 2)) << 2 ^ aa(r, 3) : 0;
}
function RS(r) {
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
function zm(r, o) {
  return o.push(r), r;
}
function Q3(r, o) {
  return r.map(o).join("");
}
function P0(r, o) {
  return r.filter(function(s) {
    return !Bo(s, o);
  });
}
var Lh = 1, Dc = 1, LS = 0, fr = 0, Cn = 0, Lc = "";
function jh(r, o, s, f, c, p, h, T) {
  return { value: r, root: o, parent: s, type: f, props: c, children: p, line: Lh, column: Dc, length: h, return: "", siblings: T };
}
function Qo(r, o) {
  return $v(jh("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, o);
}
function kc(r) {
  for (; r.root; )
    r = Qo(r.root, { children: [r] });
  zm(r, r.siblings);
}
function $3() {
  return Cn;
}
function P3() {
  return Cn = fr > 0 ? aa(Lc, --fr) : 0, Dc--, Cn === 10 && (Dc = 1, Lh--), Cn;
}
function hi() {
  return Cn = fr < LS ? aa(Lc, fr++) : 0, Dc++, Cn === 10 && (Dc = 1, Lh++), Cn;
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
  return Lh = Dc = 1, LS = pi(Lc = r), fr = 0, [];
}
function Z3(r) {
  return Lc = "", r;
}
function Sv(r) {
  return RS(Uh(fr - 1, Pv(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function W3(r) {
  for (; (Cn = Zo()) && Cn < 33; )
    hi();
  return Bm(r) > 2 || Bm(Cn) > 3 ? "" : " ";
}
function J3(r, o) {
  for (; --o && hi() && !(Cn < 48 || Cn > 102 || Cn > 57 && Cn < 65 || Cn > 70 && Cn < 97); )
    ;
  return Uh(r, fh() + (o < 6 && Zo() == 32 && hi() == 32));
}
function Pv(r) {
  for (; hi(); )
    switch (Cn) {
      // ] ) " '
      case r:
        return fr;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && Pv(Cn);
        break;
      // (
      case 40:
        r === 41 && Pv(r);
        break;
      // \
      case 92:
        hi();
        break;
    }
  return fr;
}
function e_(r, o) {
  for (; hi() && r + Cn !== 57; )
    if (r + Cn === 84 && Zo() === 47)
      break;
  return "/*" + Uh(o, fr - 1) + "*" + mb(r === 47 ? r : hi());
}
function t_(r) {
  for (; !Bm(Zo()); )
    hi();
  return Uh(r, fr);
}
function n_(r) {
  return Z3(dh("", null, null, null, [""], r = K3(r), 0, [0], r));
}
function dh(r, o, s, f, c, p, h, T, S) {
  for (var x = 0, D = 0, C = h, z = 0, P = 0, j = 0, H = 1, $ = 1, Q = 1, V = 0, me = "", te = c, ne = p, Y = f, F = me; $; )
    switch (j = V, V = hi()) {
      // (
      case 40:
        if (j != 108 && aa(F, C - 1) == 58) {
          ch(F += Je(Sv(V), "&", "&\f"), "&\f", DS(x ? T[x - 1] : 0)) != -1 && (Q = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        F += Sv(V);
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
            zm(a_(e_(hi(), fh()), o, s, S), S), (Bm(j || 1) == 5 || Bm(Zo() || 1) == 5) && pi(F) && hc(F, -1, void 0) !== " " && (F += " ");
            break;
          default:
            F += "/";
        }
        break;
      // {
      case 123 * H:
        T[x++] = pi(F) * Q;
      // } ; \0
      case 125 * H:
      case 59:
      case 0:
        switch (V) {
          // \0 }
          case 0:
          case 125:
            $ = 0;
          // ;
          case 59 + D:
            Q == -1 && (F = Je(F, /\f/g, "")), P > 0 && (pi(F) - C || H === 0 && j === 47) && zm(P > 32 ? Z0(F + ";", f, s, C - 1, S) : Z0(Je(F, " ", "") + ";", f, s, C - 2, S), S);
            break;
          // @ ;
          case 59:
            F += ";";
          // { rule/at-rule
          default:
            if (zm(Y = K0(F, o, s, x, D, c, T, me, te = [], ne = [], C, p), p), V === 123)
              if (D === 0)
                dh(F, o, Y, Y, te, p, C, T, ne);
              else {
                switch (z) {
                  // c(ontainer)
                  case 99:
                    if (aa(F, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (aa(F, 2) === 97) break;
                  default:
                    D = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                D ? dh(r, Y, Y, f && zm(K0(r, Y, Y, 0, 0, c, T, me, c, te = [], C, ne), ne), c, ne, C, T, f ? te : ne) : dh(F, Y, Y, Y, [""], ne, 0, T, ne);
              }
        }
        x = D = P = 0, H = Q = 1, me = F = "", C = h;
        break;
      // :
      case 58:
        C = 1 + pi(F), P = j;
      default:
        if (H < 1) {
          if (V == 123)
            --H;
          else if (V == 125 && H++ == 0 && P3() == 125)
            continue;
        }
        switch (F += mb(V), V * H) {
          // &
          case 38:
            Q = D > 0 ? 1 : (F += "\f", -1);
            break;
          // ,
          case 44:
            T[x++] = (pi(F) - 1) * Q, Q = 1;
            break;
          // @
          case 64:
            Zo() === 45 && (F += Sv(hi())), z = Zo(), D = C = pi(me = F += t_(fh())), V++;
            break;
          // -
          case 45:
            j === 45 && pi(F) == 2 && (H = 0);
        }
    }
  return p;
}
function K0(r, o, s, f, c, p, h, T, S, x, D, C) {
  for (var z = c - 1, P = c === 0 ? p : [""], j = MS(P), H = 0, $ = 0, Q = 0; H < f; ++H)
    for (var V = 0, me = hc(r, z + 1, z = DS($ = h[H])), te = r; V < j; ++V)
      (te = RS($ > 0 ? P[V] + " " + me : Je(me, /&\f/g, P[V]))) && (S[Q++] = te);
  return jh(r, o, s, c === 0 ? Mh : T, S, x, D, C);
}
function a_(r, o, s, f) {
  return jh(r, o, s, CS, mb($3()), hc(r, 2, -2), 0, f);
}
function Z0(r, o, s, f, c) {
  return jh(r, o, s, pb, hc(r, 0, f), hc(r, f + 1, -1), f, c);
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
      return Je(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(f, c, p, h, T, S, x) {
        return an + c + ":" + p + x + (h ? an + c + "-span:" + (T ? S : +S - +p) + x : "") + r;
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
    case pb:
      return r.return = r.return || r.value;
    case CS:
      return "";
    case zS:
      return r.return = r.value + "{" + wh(r.children, f) + "}";
    case Mh:
      if (!pi(r.value = r.props.join(","))) return "";
  }
  return pi(s = wh(r.children, f)) ? r.return = r.value + "{" + s + "}" : "";
}
function r_(r) {
  var o = MS(r);
  return function(s, f, c, p) {
    for (var h = "", T = 0; T < o; T++)
      h += r[T](s, f, c, p) || "";
    return h;
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
      case pb:
        r.return = jS(r.value, r.length, s);
        return;
      case zS:
        return wh([Qo(r, { value: Je(r.value, "@", "@" + Tt) })], f);
      case Mh:
        if (r.length)
          return Q3(s = r.props, function(c) {
            switch (Bo(c, f = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                kc(Qo(r, { props: [Je(c, /:(read-\w+)/, ":" + Lm + "$1")] })), kc(Qo(r, { props: [c] })), $v(r, { props: P0(s, f) });
                break;
              // :placeholder
              case "::placeholder":
                kc(Qo(r, { props: [Je(c, /:(plac\w+)/, ":" + Tt + "input-$1")] })), kc(Qo(r, { props: [Je(c, /:(plac\w+)/, ":" + Lm + "$1")] })), kc(Qo(r, { props: [Je(c, /:(plac\w+)/, an + "input-$1")] })), kc(Qo(r, { props: [c] })), $v(r, { props: P0(s, f) });
                break;
            }
            return "";
          });
    }
}
var Lt = { env: { NODE_ENV: "production" } }, wv, Tv;
const gc = typeof Lt < "u" && Lt.env !== void 0 && (Lt.env.REACT_APP_SC_ATTR || Lt.env.SC_ATTR) || "data-styled", US = "active", HS = "data-styled-version", Hh = "6.4.2", hb = `/*!sc*/
`, jm = typeof window < "u" && typeof document < "u";
function W0(r) {
  if (typeof Lt < "u" && Lt.env !== void 0) {
    const o = Lt.env[r];
    if (o !== void 0 && o !== "") return o !== "false";
  }
}
const u_ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (Tv = (wv = W0("REACT_APP_SC_DISABLE_SPEEDY")) !== null && wv !== void 0 ? wv : W0("SC_DISABLE_SPEEDY")) !== null && Tv !== void 0 ? Tv : typeof Lt < "u" && Lt.env !== void 0 && Lt.env.NODE_ENV !== "production"), s_ = "sc-keyframes-", c_ = Lt.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
    for (let p = 1, h = s.length; p < h; p += 1) c.push(s[p]);
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
}, J0 = /invalid hook call/i, Jm = /* @__PURE__ */ new Set(), m_ = (r, o) => {
  if (Lt.env.NODE_ENV !== "production") {
    const s = `The component ${r}${o ? ` with the id of "${o}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, f = console.error;
    try {
      let c = !0;
      console.error = (p, ...h) => {
        J0.test(p) ? (c = !1, Jm.delete(s)) : f(p, ...h);
      }, typeof ht.useState == "function" && ht.useState(null), c && !Jm.has(s) && (console.warn(s), Jm.add(s));
    } catch (c) {
      J0.test(c.message) && Jm.delete(s);
    } finally {
      console.error = f;
    }
  }
}, gb = Object.freeze([]), Rc = Object.freeze({});
function h_(r, o, s = Rc) {
  return r.theme !== s.theme && r.theme || o || s.theme;
}
const g_ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, y_ = /(^-|-$)/g;
function BS(r) {
  return r.replace(g_, "-").replace(y_, "");
}
const v_ = /(a)(d)/gi, e1 = (r) => String.fromCharCode(r + (r > 25 ? 39 : 97));
function qS(r) {
  let o, s = "";
  for (o = Math.abs(r); o > 52; o = o / 52 | 0) s = e1(o % 52) + s;
  return (e1(o % 52) + s).replace(v_, "$1-$2");
}
const Kv = 5381, cc = (r, o) => {
  let s = o.length;
  for (; s; ) r = 33 * r ^ o.charCodeAt(--s);
  return r;
}, VS = (r) => cc(Kv, r);
function b_(r) {
  return qS(VS(r) >>> 0);
}
function yb(r) {
  return Lt.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function hh(r) {
  return typeof r == "string" && (Lt.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
function S_(r) {
  return hh(r) ? `styled.${r}` : `Styled(${yb(r)})`;
}
const GS = Symbol.for("react.memo"), w_ = Symbol.for("react.forward_ref"), T_ = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, x_ = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, YS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, k_ = { [w_]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [GS]: YS };
function t1(r) {
  return ("type" in (o = r) && o.type.$$typeof) === GS ? YS : "$$typeof" in r ? k_[r.$$typeof] : T_;
  var o;
}
const E_ = Object.defineProperty, __ = Object.getOwnPropertyNames, A_ = Object.getOwnPropertySymbols, N_ = Object.getOwnPropertyDescriptor, O_ = Object.getPrototypeOf, C_ = Object.prototype;
function FS(r, o, s) {
  if (typeof o != "string") {
    const f = O_(o);
    f && f !== C_ && FS(r, f, s);
    const c = __(o).concat(A_(o)), p = t1(r), h = t1(o);
    for (let T = 0; T < c.length; ++T) {
      const S = c[T];
      if (!(S in x_ || s && s[S] || h && S in h || p && S in p)) {
        const x = N_(o, S);
        try {
          E_(r, S, x);
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
const z_ = Symbol.for("react.forward_ref");
function XS(r) {
  return r != null && (typeof r == "object" || typeof r == "function") && r.$$typeof === z_ && "styledComponentId" in r;
}
function Dm(r, o) {
  return r && o ? r + " " + o : r || o || "";
}
function n1(r, o) {
  return r.join("");
}
function yc(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function Zv(r, o, s = !1) {
  if (!s && !yc(r) && !Array.isArray(r)) return o;
  if (Array.isArray(o)) for (let f = 0; f < o.length; f++) r[f] = Zv(r[f], o[f]);
  else if (yc(o)) for (const f in o) r[f] = Zv(r[f], o[f]);
  return r;
}
function IS(r, o) {
  Object.defineProperty(r, "toString", { value: o });
}
const D_ = class {
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
      let h = p;
      for (; r >= h; ) if (h <<= 1, h < 0) throw Ym(16, `${r}`);
      this.groupSizes = new Uint32Array(h), this.groupSizes.set(c), this.length = h;
      for (let T = p; T < h; T++) this.groupSizes[T] = 0;
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
    for (let p = f; p < c; p++) o += this.tag.getRule(p) + hb;
    return o;
  }
}, R_ = `style[${gc}][${HS}="${Hh}"]`, M_ = new RegExp(`^${gc}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), a1 = (r) => typeof ShadowRoot < "u" && r instanceof ShadowRoot || "host" in r && r.nodeType === 11, Wv = (r) => {
  if (!r) return document;
  if (a1(r)) return r;
  if ("getRootNode" in r) {
    const o = r.getRootNode();
    if (a1(o)) return o;
  }
  return document;
}, L_ = (r, o, s) => {
  const f = s.split(",");
  let c;
  for (let p = 0, h = f.length; p < h; p++) (c = f[p]) && r.registerName(o, c);
}, j_ = (r, o) => {
  var s;
  const f = ((s = o.textContent) !== null && s !== void 0 ? s : "").split(hb), c = [];
  for (let p = 0, h = f.length; p < h; p++) {
    const T = f[p].trim();
    if (!T) continue;
    const S = T.match(M_);
    if (S) {
      const x = 0 | parseInt(S[1], 10), D = S[2];
      x !== 0 && (p_(D, x), L_(r, D, S[3]), r.getTag().insertRules(x, c)), c.length = 0;
    } else c.push(T);
  }
}, xv = (r) => {
  const o = Wv(r.options.target).querySelectorAll(R_);
  for (let s = 0, f = o.length; s < f; s++) {
    const c = o[s];
    c && c.getAttribute(gc) !== US && (j_(r, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
let Em = !1;
function U_() {
  if (Em !== !1) return Em;
  if (typeof document < "u") {
    const r = document.head.querySelector('meta[property="csp-nonce"]');
    if (r) return Em = r.nonce || r.getAttribute("content") || void 0;
    const o = document.head.querySelector('meta[name="sc-nonce"]');
    if (o) return Em = o.getAttribute("content") || void 0;
  }
  return Em = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const QS = (r, o) => {
  const s = document.head, f = r || s, c = document.createElement("style"), p = ((S) => {
    const x = Array.from(S.querySelectorAll(`style[${gc}]`));
    return x[x.length - 1];
  })(f), h = p !== void 0 ? p.nextSibling : null;
  c.setAttribute(gc, US), c.setAttribute(HS, Hh);
  const T = o || U_();
  return T && c.setAttribute("nonce", T), f.insertBefore(c, h), c;
}, H_ = class {
  constructor(r, o) {
    this.element = QS(r, o), this.element.appendChild(document.createTextNode("")), this.sheet = ((s) => {
      var f;
      if (s.sheet) return s.sheet;
      const c = (f = s.getRootNode().styleSheets) !== null && f !== void 0 ? f : document.styleSheets;
      for (let p = 0, h = c.length; p < h; p++) {
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
let l1 = jm;
const q_ = { isServer: !jm, useCSSOMInjection: !u_ };
class qh {
  static registerId(o) {
    return Wm(o);
  }
  constructor(o = Rc, s = {}, f) {
    this.options = Object.assign(Object.assign({}, q_), o), this.gs = s, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(f), this.server = !!o.isServer, !this.server && jm && l1 && (l1 = !1, xv(this)), IS(this, () => ((c) => {
      const p = c.getTag(), { length: h } = p;
      let T = "";
      for (let S = 0; S < h; S++) {
        const x = d_(S);
        if (x === void 0) continue;
        const D = c.names.get(x);
        if (D === void 0 || !D.size) continue;
        const C = p.getGroup(S);
        if (C.length === 0) continue;
        const z = gc + ".g" + S + '[id="' + x + '"]';
        let P = "";
        for (const j of D) j.length > 0 && (P += j + ",");
        T += C + z + '{content:"' + P + '"}' + hb;
      }
      return T;
    })(this));
  }
  rehydrate() {
    !this.server && jm && xv(this);
  }
  reconstructWithOptions(o, s = !0) {
    const f = new qh(Object.assign(Object.assign({}, this.options), o), this.gs, s && this.names || void 0);
    return f.keyframeIds = new Set(this.keyframeIds), !this.server && jm && o.target !== this.options.target && Wv(this.options.target) !== Wv(o.target) && xv(f), f;
  }
  allocateGSInstance(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (o = (({ useCSSOMInjection: s, target: f, nonce: c }) => s ? new H_(f, c) : new B_(f, c))(this.options), new D_(o)));
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
function r1(r) {
  if (r.charCodeAt(0) === 45 && r.charCodeAt(1) === 45) return r;
  let o = "";
  for (let s = 0; s < r.length; s++) {
    const f = r.charCodeAt(s);
    o += f >= 65 && f <= 90 ? "-" + String.fromCharCode(f + 32) : r[s];
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
const Y_ = Symbol.for("sc-keyframes");
function Jv(r) {
  return typeof r == "object" && r !== null && Y_ in r;
}
function PS(r) {
  return Bh(r) && !(r.prototype && r.prototype.isReactComponent);
}
const KS = (r) => r == null || r === !1 || r === "", F_ = Symbol.for("react.client.reference");
function i1(r) {
  return r.$$typeof === F_;
}
function o1(r) {
  const o = r.$$id, s = (o && o.includes("#") ? o.split("#").pop() : o) || r.name || "unknown";
  console.warn(`Interpolating a client component (${s}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function ZS(r, o) {
  for (const s in r) {
    const f = r[s];
    r.hasOwnProperty(s) && !KS(f) && (Array.isArray(f) && $S.has(f) || Bh(f) ? o.push(r1(s) + ":", f, ";") : yc(f) ? (o.push(s + " {"), ZS(f, o), o.push("}")) : o.push(r1(s) + ": " + G_(s, f) + ";"));
  }
}
function fc(r, o, s, f, c = []) {
  if (KS(r)) return c;
  const p = typeof r;
  if (p === "string") return c.push(r), c;
  if (p === "function") {
    if (i1(r)) return Lt.env.NODE_ENV !== "production" && o1(r), c;
    if (PS(r) && o) {
      const h = r(o);
      return Lt.env.NODE_ENV === "production" || typeof h != "object" || Array.isArray(h) || Jv(h) || yc(h) || h === null || console.error(`${yb(r)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), fc(h, o, s, f, c);
    }
    return c.push(r), c;
  }
  if (Array.isArray(r)) {
    for (let h = 0; h < r.length; h++) fc(r[h], o, s, f, c);
    return c;
  }
  return XS(r) ? (c.push(`.${r.styledComponentId}`), c) : Jv(r) ? (s ? (r.inject(s, f), c.push(r.getName(f))) : c.push(r), c) : i1(r) ? (Lt.env.NODE_ENV !== "production" && o1(r), c) : yc(r) ? r.toString !== Object.prototype.toString ? (c.push(r.toString()), c) : (ZS(r, c), c) : (c.push(r.toString()), c);
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
      for (let h = 0; h < this.rules.length; h++) {
        const T = this.rules[h];
        if (typeof T == "string") p += T;
        else if (T) if (PS(T)) {
          const S = T(o);
          typeof S == "string" ? p += S : S != null && S !== !1 && (Lt.env.NODE_ENV === "production" || typeof S != "object" || Array.isArray(S) || Jv(S) || yc(S) || console.error(`${yb(T)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), p += n1(fc(S, o, s, f)));
        } else p += n1(fc(T, o, s, f));
      }
      if (p) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const h = f.hash ? f.hash + p : p;
        let T = this.dynamicNameCache.get(h);
        if (!T) {
          if (T = qS(cc(cc(this.baseHash, f.hash), p) >>> 0), this.dynamicNameCache.size >= 200) {
            const S = this.dynamicNameCache.keys().next().value;
            S !== void 0 && this.dynamicNameCache.delete(S);
          }
          this.dynamicNameCache.set(h, T);
        }
        if (!s.hasNameForId(this.componentId, T)) {
          const S = f(p, "." + T, void 0, this.componentId);
          s.insertRules(this.componentId, T, S);
        }
        c = Dm(c, T);
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
function kv(r) {
  const o = r.length;
  let s = "", f = 0, c = 0, p = 0, h = !1, T = !1;
  for (let S = 0; S < o; S++) {
    const x = r.charCodeAt(S);
    if (p !== 0 || h || x !== oc || r.charCodeAt(S + 1) !== 42) if (h) x === 42 && r.charCodeAt(S + 1) === oc && (h = !1, S++);
    else if (x !== 34 && x !== 39 || WS(r, S)) {
      if (p === 0) if (x === 123) c++;
      else if (x === 125) {
        if (c--, c < 0) {
          T = !0;
          let D = S + 1;
          for (; D < o; ) {
            const C = r.charCodeAt(D);
            if (C === 59 || C === 10) break;
            D++;
          }
          D < o && r.charCodeAt(D) === 59 && D++, c = 0, S = D - 1, f = D;
          continue;
        }
        c === 0 && (s += r.substring(f, S + 1), f = S + 1);
      } else x === 59 && c === 0 && (s += r.substring(f, S + 1), f = S + 1);
    } else p === 0 ? p = x : p === x && (p = 0);
    else h = !0, S++;
  }
  return T || c !== 0 || p !== 0 ? (f < o && c === 0 && p === 0 && (s += r.substring(f)), s) : r;
}
function JS(r, o) {
  const s = o + " ", f = "," + s;
  for (let c = 0; c < r.length; c++) {
    const p = r[c];
    if (p.type === "rule") {
      p.value = (s + p.value).replaceAll(",", f);
      const h = p.props, T = [];
      for (let S = 0; S < h.length; S++) T[S] = s + h[S];
      p.props = T;
    }
    Array.isArray(p.children) && p.type !== "@keyframes" && JS(p.children, o);
  }
  return r;
}
function $_({ options: r = Rc, plugins: o = gb } = Rc) {
  let s, f, c;
  const p = (z, P, j) => j.startsWith(f) && j.endsWith(f) && j.replaceAll(f, "").length > 0 ? `.${s}` : z, h = o.slice();
  h.push((z) => {
    z.type === Mh && z.value.includes("&") && (c || (c = new RegExp(`\\${f}\\b`, "g")), z.props[0] = z.props[0].replace(Q_, f).replace(c, p));
  }), r.prefix && h.push(o_), h.push(l_);
  let T = [];
  const S = r_(h.concat(i_((z) => T.push(z)))), x = (z, P = "", j = "", H = "&") => {
    s = H, f = P, c = void 0;
    const $ = (function(V) {
      const me = V.indexOf("//") !== -1, te = V.indexOf("}") !== -1;
      if (!me && !te) return V;
      if (!me) return kv(V);
      const ne = V.length;
      let Y = "", F = 0, J = 0, ke = 0, He = 0, qe = 0, Be = !1;
      for (; J < ne; ) {
        const Ae = V.charCodeAt(J);
        if (Ae !== 34 && Ae !== 39 || WS(V, J)) if (ke === 0) if (Ae === oc && J + 1 < ne && V.charCodeAt(J + 1) === 42) {
          for (J += 2; J + 1 < ne && (V.charCodeAt(J) !== 42 || V.charCodeAt(J + 1) !== oc); ) J++;
          J += 2;
        } else if (Ae !== 40) if (Ae !== 41) if (He > 0) J++;
        else if (Ae === 42 && J + 1 < ne && V.charCodeAt(J + 1) === oc) Y += V.substring(F, J), J += 2, F = J, Be = !0;
        else if (Ae === oc && J + 1 < ne && V.charCodeAt(J + 1) === oc) {
          for (Y += V.substring(F, J); J < ne && V.charCodeAt(J) !== 10; ) J++;
          F = J, Be = !0;
        } else Ae === 123 ? qe++ : Ae === 125 && qe--, J++;
        else He > 0 && He--, J++;
        else He++, J++;
        else J++;
        else ke === 0 ? ke = Ae : ke === Ae && (ke = 0), J++;
      }
      return Be ? (F < ne && (Y += V.substring(F)), qe === 0 ? Y : kv(Y)) : qe === 0 ? V : kv(V);
    })(z);
    let Q = n_(j || P ? j + " " + P + " { " + $ + " }" : $);
    return r.namespace && (Q = JS(Q, r.namespace)), T = [], wh(Q, S), T;
  }, D = r;
  let C = Kv;
  for (let z = 0; z < o.length; z++) o[z].name || Ym(15), C = cc(C, o[z].name);
  return D != null && D.namespace && (C = cc(C, D.namespace)), D != null && D.prefix && (C = cc(C, "p")), x.hash = C !== Kv ? C.toString() : "", x;
}
const P_ = new qh(), K_ = $_(), ew = ht.createContext({ shouldForwardProp: void 0, styleSheet: P_, stylis: K_, stylisPlugins: void 0 });
ew.Consumer;
function Z_() {
  return ht.useContext(ew);
}
const tw = ht.createContext(void 0);
tw.Consumer;
const u1 = Object.prototype.hasOwnProperty, Ev = {};
function W_(r, o) {
  const s = typeof r != "string" ? "sc" : BS(r);
  Ev[s] = (Ev[s] || 0) + 1;
  const f = s + "-" + b_(Hh + s + Ev[s]);
  return o ? o + "-" + f : f;
}
let _v;
function J_(r, o, s) {
  const f = XS(r), c = r, p = !hh(r), { attrs: h = gb, componentId: T = W_(o.displayName, o.parentComponentId), displayName: S = S_(r) } = o, x = o.displayName && o.componentId ? BS(o.displayName) + "-" + o.componentId : o.componentId || T, D = f && c.attrs ? c.attrs.concat(h).filter(Boolean) : h;
  let { shouldForwardProp: C } = o;
  if (f && c.shouldForwardProp) {
    const H = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      const $ = o.shouldForwardProp;
      C = (Q, V) => H(Q, V) && $(Q, V);
    } else C = H;
  }
  const z = new I_(s, x, f ? c.componentStyle : void 0);
  function P(H, $) {
    return (function(Q, V, me) {
      const { attrs: te, componentStyle: ne, defaultProps: Y, foldedComponentIds: F, styledComponentId: J, target: ke } = Q, He = ht.useContext(tw), qe = Z_(), Be = Q.shouldForwardProp || qe.shouldForwardProp;
      Lt.env.NODE_ENV !== "production" && ht.useDebugValue && ht.useDebugValue(J);
      const Ae = h_(V, He, Y) || Rc;
      let yt, Qe;
      {
        const re = ht.useRef(null), se = re.current;
        if (se !== null && se[1] === Ae && se[2] === qe.styleSheet && se[3] === qe.stylis && se[7] === ne && (function(ie, we, ue) {
          const Z = ie, ye = we;
          let vt = 0;
          for (const tt in ye) if (u1.call(ye, tt) && (vt++, Z[tt] !== ye[tt])) return !1;
          return vt === ue;
        })(se[0], V, se[4])) yt = se[5], Qe = se[6];
        else {
          yt = (function(we, ue, Z) {
            const ye = Object.assign(Object.assign({}, ue), { className: void 0, theme: Z }), vt = we.length > 1;
            for (let tt = 0; tt < we.length; tt++) {
              const fn = we[tt], dn = Bh(fn) ? fn(vt ? Object.assign({}, ye) : ye) : fn;
              for (const nt in dn) nt === "className" ? ye.className = Dm(ye.className, dn[nt]) : nt === "style" ? ye.style = Object.assign(Object.assign({}, ye.style), dn[nt]) : nt in ue && ue[nt] === void 0 || (ye[nt] = dn[nt]);
            }
            return "className" in ue && typeof ue.className == "string" && (ye.className = Dm(ye.className, ue.className)), ye;
          })(te, V, Ae), Qe = (function(we, ue, Z, ye) {
            const vt = we.generateAndInjectStyles(ue, Z, ye);
            return Lt.env.NODE_ENV !== "production" && ht.useDebugValue && ht.useDebugValue(vt), vt;
          })(ne, yt, qe.styleSheet, qe.stylis);
          let ie = 0;
          for (const we in V) u1.call(V, we) && ie++;
          re.current = [V, Ae, qe.styleSheet, qe.stylis, ie, yt, Qe, ne];
        }
      }
      Lt.env.NODE_ENV !== "production" && Q.warnTooManyClasses && Q.warnTooManyClasses(Qe);
      const U = yt.as || ke, L = (function(re, se, ie, we) {
        const ue = {};
        for (const Z in re) re[Z] === void 0 || Z[0] === "$" || Z === "as" || Z === "theme" && re.theme === ie || (Z === "forwardedAs" ? ue.as = re.forwardedAs : we && !we(Z, se) || (ue[Z] = re[Z], we || Lt.env.NODE_ENV !== "development" || G3(Z) || (_v || (_v = /* @__PURE__ */ new Set())).has(Z) || !hh(se) || se.includes("-") || (_v.add(Z), console.warn(`styled-components: it looks like an unknown prop "${Z}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return ue;
      })(yt, U, Ae, Be);
      let G = Dm(F, J);
      return Qe && (G += " " + Qe), yt.className && (G += " " + yt.className), L[hh(U) && U.includes("-") ? "class" : "className"] = G, me && (L.ref = me), v1(U, L);
    })(j, H, $);
  }
  P.displayName = S;
  let j = ht.forwardRef(P);
  return j.attrs = D, j.componentStyle = z, j.displayName = S, j.shouldForwardProp = C, j.foldedComponentIds = f ? Dm(c.foldedComponentIds, c.styledComponentId) : "", j.styledComponentId = x, j.target = f ? c.target : r, Object.defineProperty(j, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(H) {
    this._foldedDefaultProps = f ? (function($, ...Q) {
      for (const V of Q) Zv($, V, !0);
      return $;
    })({}, c.defaultProps, H) : H;
  } }), Lt.env.NODE_ENV !== "production" && (m_(S, x), j.warnTooManyClasses = /* @__PURE__ */ ((H, $) => {
    let Q = {}, V = !1;
    return (me) => {
      !V && (Q[me] = !0, Object.keys(Q).length >= 200) && (console.warn(`Over 200 classes were generated for component ${H}${$ ? ` with the id of "${$}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), V = !0, Q = {});
    };
  })(S, x)), IS(j, () => `.${j.styledComponentId}`), p && FS(j, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), j;
}
var eA = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function s1(r, o) {
  const s = [r[0]];
  for (let f = 0, c = o.length; f < c; f += 1) s.push(o[f], r[f + 1]);
  return s;
}
const c1 = (r) => ($S.add(r), r);
function tA(r, ...o) {
  if (Bh(r) || yc(r)) return c1(fc(s1(gb, [r, ...o])));
  const s = r;
  return o.length === 0 && s.length === 1 && typeof s[0] == "string" ? fc(s) : c1(fc(s1(s, o)));
}
function eb(r, o, s = Rc) {
  if (!o) throw Ym(1, o);
  const f = (c, ...p) => r(o, s, tA(c, ...p));
  return f.attrs = (c) => eb(r, o, Object.assign(Object.assign({}, s), { attrs: Array.prototype.concat(s.attrs, c).filter(Boolean) })), f.withConfig = (c) => eb(r, o, Object.assign(Object.assign({}, s), c)), f;
}
const nw = (r) => eb(J_, r), Vh = nw;
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
  const { feeds: o } = tb(Ch), s = o == null ? void 0 : o.map(
    (f, c) => aA(f, c, r)
  );
  return /* @__PURE__ */ yn.jsx(nA, { children: /* @__PURE__ */ yn.jsx(
    ES,
    {
      width: "auto",
      cardType: "news",
      perView: "3",
      cardItems: s || []
    }
  ) });
}, aw = ({ cardButton: r, ...o }) => (gi(() => {
  typeof window < "u" && db({
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
  const { feeds: s } = tb(Ch), f = o === !0 || o === "true";
  return /* @__PURE__ */ yn.jsx(rA, { className: "row row-spaced", "data-testid": "grid-view-container", children: s == null ? void 0 : s.map((c, p) => /* @__PURE__ */ yn.jsx(ht.Fragment, { children: iA(c, r, f) }, p)) });
}, rw = ({ cardButton: r, hideTags: o = !0, ...s }) => (gi(() => {
  typeof window < "u" && db({
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
  const { feeds: s } = tb(Ch), f = o === !0 || o === "true";
  return /* @__PURE__ */ yn.jsx(uA, { className: "row-spaced", "data-testid": "list-view-container", children: s == null ? void 0 : s.map((c, p) => /* @__PURE__ */ yn.jsx(ht.Fragment, { children: sA(c, r, f) }, p)) });
}, iw = ({ cardButton: r, hideTags: o = !0, ...s }) => (gi(() => {
  typeof window < "u" && db({
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
var Av = { exports: {} }, _m = {}, Nv = { exports: {} }, Ov = {};
var f1;
function fA() {
  return f1 || (f1 = 1, (function(r) {
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
      var h = Date, T = h.now();
      r.unstable_now = function() {
        return h.now() - T;
      };
    }
    var S = [], x = [], D = 1, C = null, z = 3, P = !1, j = !1, H = !1, $ = !1, Q = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, me = typeof setImmediate < "u" ? setImmediate : null;
    function te(U) {
      for (var L = s(x); L !== null; ) {
        if (L.callback === null) f(x);
        else if (L.startTime <= U)
          f(x), L.sortIndex = L.expirationTime, o(S, L);
        else break;
        L = s(x);
      }
    }
    function ne(U) {
      if (H = !1, te(U), !j)
        if (s(S) !== null)
          j = !0, Y || (Y = !0, Be());
        else {
          var L = s(x);
          L !== null && Qe(ne, L.startTime - U);
        }
    }
    var Y = !1, F = -1, J = 5, ke = -1;
    function He() {
      return $ ? !0 : !(r.unstable_now() - ke < J);
    }
    function qe() {
      if ($ = !1, Y) {
        var U = r.unstable_now();
        ke = U;
        var L = !0;
        try {
          e: {
            j = !1, H && (H = !1, V(F), F = -1), P = !0;
            var G = z;
            try {
              t: {
                for (te(U), C = s(S); C !== null && !(C.expirationTime > U && He()); ) {
                  var re = C.callback;
                  if (typeof re == "function") {
                    C.callback = null, z = C.priorityLevel;
                    var se = re(
                      C.expirationTime <= U
                    );
                    if (U = r.unstable_now(), typeof se == "function") {
                      C.callback = se, te(U), L = !0;
                      break t;
                    }
                    C === s(S) && f(S), te(U);
                  } else f(S);
                  C = s(S);
                }
                if (C !== null) L = !0;
                else {
                  var ie = s(x);
                  ie !== null && Qe(
                    ne,
                    ie.startTime - U
                  ), L = !1;
                }
              }
              break e;
            } finally {
              C = null, z = G, P = !1;
            }
            L = void 0;
          }
        } finally {
          L ? Be() : Y = !1;
        }
      }
    }
    var Be;
    if (typeof me == "function")
      Be = function() {
        me(qe);
      };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), yt = Ae.port2;
      Ae.port1.onmessage = qe, Be = function() {
        yt.postMessage(null);
      };
    } else
      Be = function() {
        Q(qe, 0);
      };
    function Qe(U, L) {
      F = Q(function() {
        U(r.unstable_now());
      }, L);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, r.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < U ? Math.floor(1e3 / U) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, r.unstable_next = function(U) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = z;
      }
      var G = z;
      z = L;
      try {
        return U();
      } finally {
        z = G;
      }
    }, r.unstable_requestPaint = function() {
      $ = !0;
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
      var G = z;
      z = U;
      try {
        return L();
      } finally {
        z = G;
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
        id: D++,
        callback: L,
        priorityLevel: U,
        startTime: G,
        expirationTime: se,
        sortIndex: -1
      }, G > re ? (U.sortIndex = G, o(x, U), s(S) === null && U === s(x) && (H ? (V(F), F = -1) : H = !0, Qe(ne, G - re))) : (U.sortIndex = se, o(S, U), j || P || (j = !0, Y || (Y = !0, Be()))), U;
    }, r.unstable_shouldYield = He, r.unstable_wrapCallback = function(U) {
      var L = z;
      return function() {
        var G = z;
        z = L;
        try {
          return U.apply(this, arguments);
        } finally {
          z = G;
        }
      };
    };
  })(Ov)), Ov;
}
var d1;
function dA() {
  return d1 || (d1 = 1, Nv.exports = fA()), Nv.exports;
}
var p1;
function pA() {
  if (p1) return _m;
  p1 = 1;
  var r = { env: { NODE_ENV: "production" } };
  var o = dA(), s = ht, f = b1;
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
  function h(e) {
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
  function x(e) {
    if (h(e) !== e)
      throw Error(c(188));
  }
  function D(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(c(188));
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
          if (i === n) return x(l), e;
          if (i === a) return x(l), t;
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
  function C(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = C(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var z = Object.assign, P = Symbol.for("react.element"), j = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), me = Symbol.for("react.consumer"), te = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), He = Symbol.for("react.activity"), qe = Symbol.for("react.memo_cache_sentinel"), Be = Symbol.iterator;
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
      case $:
        return "Fragment";
      case V:
        return "Profiler";
      case Q:
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
        case H:
          return "Portal";
        case te:
          return e.displayName || "Context";
        case me:
          return (e._context.displayName || "Context") + ".Consumer";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case J:
          return t = e.displayName || null, t !== null ? t : Qe(e.type) || "Memo";
        case ke:
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
  var ye = we(null), vt = we(null), tt = we(null), fn = we(null);
  function dn(e, t) {
    switch (Z(tt, t), Z(vt, e), Z(ye, null), t.nodeType) {
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
    ue(ye), ue(vt), ue(tt);
  }
  function De(e) {
    e.memoizedState !== null && Z(fn, e);
    var t = ye.current, n = Bp(t, e.type);
    t !== n && (Z(vt, e), Z(ye, n));
  }
  function Qa(e) {
    vt.current === e && (ue(ye), ue(vt)), fn.current === e && (ue(fn), ui._currentValue = re);
  }
  var Re, dr;
  function xe(e) {
    if (Re === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Re = t && t[1] || "", dr = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Re + e + dr;
  }
  var Rn = !1;
  function wl(e, t) {
    if (!e || Rn) return "";
    Rn = !0;
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
`), E = d.split(`
`);
        for (l = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < E.length && !E[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === m.length || l === E.length)
          for (a = m.length - 1, l = E.length - 1; 1 <= a && 0 <= l && m[a] !== E[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (m[a] !== E[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || m[a] !== E[l]) {
                  var O = `
` + m[a].replace(" at new ", " at ");
                  return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), O;
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      Rn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? xe(n) : "";
  }
  function vn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return xe(e.type);
      case 16:
        return xe("Lazy");
      case 13:
        return e.child !== t && t !== null ? xe("Suspense Fallback") : xe("Suspense");
      case 19:
        return xe("SuspenseList");
      case 0:
      case 15:
        return wl(e.type, !1);
      case 11:
        return wl(e.type.render, !1);
      case 1:
        return wl(e.type, !0);
      case 31:
        return xe("Activity");
      default:
        return "";
    }
  }
  function pr(e) {
    try {
      var t = "", n = null;
      do
        t += vn(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var $a = Object.prototype.hasOwnProperty, Tl = o.unstable_scheduleCallback, xl = o.unstable_cancelCallback, bn = o.unstable_shouldYield, Pa = o.unstable_requestPaint, Ye = o.unstable_now, mr = o.unstable_getCurrentPriorityLevel, kl = o.unstable_ImmediatePriority, El = o.unstable_UserBlockingPriority, ia = o.unstable_NormalPriority, oa = o.unstable_LowPriority, Ka = o.unstable_IdlePriority, _l = o.log, xi = o.unstable_setDisableYieldValue, ua = null, pt = null;
  function It(e) {
    if (typeof _l == "function" && xi(e), pt && typeof pt.setStrictMode == "function")
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
    var d = e.entanglements, m = e.expirationTimes, E = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var O = 31 - rt(n), M = 1 << O;
      d[O] = 0, m[O] = -1;
      var _ = E[O];
      if (_ !== null)
        for (E[O] = null, O = 0; O < _.length; O++) {
          var A = _[O];
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
  function vr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function fa() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : um(e.type));
  }
  function ki(e, t) {
    var n = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = n;
    }
  }
  var Tn = Math.random().toString(36).slice(2), oe = "__reactFiber$" + Tn, Fe = "__reactProps$" + Tn, da = "__reactContainer$" + Tn, Nl = "__reactEvents$" + Tn, br = "__reactListeners$" + Tn, Ei = "__reactHandles$" + Tn, Sr = "__reactResources$" + Tn, tl = "__reactMarker$" + Tn;
  function wr(e) {
    delete e[oe], delete e[Fe], delete e[Nl], delete e[br], delete e[Ei];
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
  function Rt(e) {
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
  function xn(e, t) {
    Hn(e, t), Hn(e + "Capture", t);
  }
  function Hn(e, t) {
    for (Ai[e] = t, e = 0; e < t.length; e++)
      _i.add(t[e]);
  }
  var Ol = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Cl = {}, nl = {};
  function ha(e) {
    return $a.call(nl, e) ? !0 : $a.call(Cl, e) ? !1 : Ol.test(e) ? nl[e] = !0 : (Cl[e] = !0, !1);
  }
  function kn(e, t, n) {
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
  function kt(e, t, n) {
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
  function Et(e) {
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
  function Ni(e, t, n) {
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
  function xr(e) {
    if (!e._valueTracker) {
      var t = Tr(e) ? "checked" : "value";
      e._valueTracker = Ni(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function kr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Tr(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function zl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var eu = /[\n"\\]/g;
  function xt(e) {
    return e.replace(
      eu,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ga(e, t, n, a, l, i, u, d) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Et(t)) : e.value !== "" + Et(t) && (e.value = "" + Et(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? b(e, u, Et(t)) : n != null ? b(e, u, Et(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + Et(d) : e.removeAttribute("name");
  }
  function Dl(e, t, n, a, l, i, u, d) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        xr(e);
        return;
      }
      n = n != null ? "" + Et(n) : "", t = t != null ? "" + Et(t) : n, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = d ? e.checked : !!a, e.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), xr(e);
  }
  function b(e, t, n) {
    t === "number" && zl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function y(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Et(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, a && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function N(e, t, n) {
    if (t != null && (t = "" + Et(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Et(n) : "";
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
    n = Et(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), xr(e);
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
  function ve(e, t, n) {
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
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && ve(e, l, a);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && ve(e, i, t[i]);
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
  var bt = /* @__PURE__ */ new Map([
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
  var Rl = null, Ml = null;
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
              'input[name="' + xt(
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
              a = n[t], a.form === e.form && kr(a);
          }
          break e;
        case "textarea":
          N(e, n.value, n.defaultValue);
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
      if (au = !1, (Rl !== null || Ml !== null) && (go(), Rl && (t = Rl, e = Ml, Ml = Rl = null, jc(t), e)))
        for (t = 0; t < e.length; t++) jc(e[t]);
    }
  }
  function Er(e, t) {
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
  var ya = null, ru = null, Oi = null;
  function Hc() {
    if (Oi) return Oi;
    var e, t = ru, n = t.length, a, l = "value" in ya ? ya.value : ya.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var u = n - e;
    for (a = 1; a <= u && t[n - a] === l[i - a]; a++) ;
    return Oi = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Ci(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function zi() {
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
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? zi : Bc, this.isPropagationStopped = Bc, this;
    }
    return z(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = zi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = zi);
      },
      persist: function() {
      },
      isPersistent: zi
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
  }, Di = At(al), Ar = z({}, al, { view: 0, detail: 0 }), Gh = At(Ar), iu, ou, Nr, Ri = z({}, Ar, {
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
      return "movementX" in e ? e.movementX : (e !== Nr && (Nr && e.type === "mousemove" ? (iu = e.screenX - Nr.screenX, ou = e.screenY - Nr.screenY) : ou = iu = 0, Nr = e), iu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ou;
    }
  }), qc = At(Ri), Yh = z({}, Ri, { dataTransfer: 0 }), Fh = At(Yh), Xh = z({}, Ar, { relatedTarget: 0 }), uu = At(Xh), Ih = z({}, al, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Qh = At(Ih), $h = z({}, al, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Ph = At($h), Kh = z({}, al, { data: 0 }), Vc = At(Kh), Zh = {
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
  var tg = z({}, Ar, {
    key: function(e) {
      if (e.key) {
        var t = Zh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ci(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wh[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? Ci(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ci(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), ng = At(tg), ag = z({}, Ri, {
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
  }), Gc = At(ag), lg = z({}, Ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: su
  }), rg = At(lg), ig = z({}, al, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), og = At(ig), ug = z({}, Ri, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sg = At(ug), cg = z({}, al, {
    newState: 0,
    oldState: 0
  }), fg = At(cg), dg = [9, 13, 27, 32], cu = Bn && "CompositionEvent" in window, Or = null;
  Bn && "documentMode" in document && (Or = document.documentMode);
  var pg = Bn && "TextEvent" in window && !Or, Yc = Bn && (!cu || Or && 8 < Or && 11 >= Or), Fc = " ", Xc = !1;
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
      return e === "compositionend" || !cu && Ic(e, t) ? (e = Hc(), Oi = ru = ya = null, Ll = !1, e) : null;
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
    Rl ? Ml ? Ml.push(a) : Ml = [a] : Rl = a, t = xo(t, "onChange"), 0 < t.length && (n = new Di(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Cr = null, zr = null;
  function yg(e) {
    Dp(e, 0);
  }
  function Mi(e) {
    var t = Rt(e);
    if (kr(t)) return e;
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
    Cr && (Cr.detachEvent("onpropertychange", ef), zr = Cr = null);
  }
  function ef(e) {
    if (e.propertyName === "value" && Mi(zr)) {
      var t = [];
      Pc(
        t,
        zr,
        e,
        nu(e)
      ), Uc(yg, t);
    }
  }
  function vg(e, t, n) {
    e === "focusin" ? (Jc(), Cr = t, zr = n, Cr.attachEvent("onpropertychange", ef)) : e === "focusout" && Jc();
  }
  function bg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Mi(zr);
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
  function Dr(e, t) {
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
    for (var t = zl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = zl(e.document);
    }
    return t;
  }
  function pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var xg = Bn && "documentMode" in document && 11 >= document.documentMode, jl = null, mu = null, Rr = null, hu = !1;
  function rf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    hu || jl == null || jl !== zl(a) || (a = jl, "selectionStart" in a && pu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Rr && Dr(Rr, a) || (Rr = a, a = xo(mu, "onSelect"), 0 < a.length && (t = new Di(
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
  var uf = rl("animationend"), sf = rl("animationiteration"), cf = rl("animationstart"), kg = rl("transitionrun"), Eg = rl("transitionstart"), _g = rl("transitioncancel"), ff = rl("transitionend"), df = /* @__PURE__ */ new Map(), yu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yu.push("scrollEnd");
  function mn(e, t) {
    df.set(e, t), xn(t, [e]);
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
  }, Pt = [], Hl = 0, vu = 0;
  function ji() {
    for (var e = Hl, t = vu = Hl = 0; t < e; ) {
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
    Pt[Hl++] = e, Pt[Hl++] = t, Pt[Hl++] = n, Pt[Hl++] = a, vu |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function bu(e, t, n, a) {
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
      throw ti = 0, Ns = null, Error(c(185));
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
      u = Dy(
        e,
        n,
        ye.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case He:
          return e = Ht(31, n, t, l), e.elementType = He, e.lanes = i, e;
        case $:
          return ol(n.children, l, i, t);
        case Q:
          u = 8, l |= 24;
          break;
        case V:
          return e = Ht(12, n, t, l | 2), e.elementType = V, e.lanes = i, e;
        case Y:
          return e = Ht(13, n, t, l), e.elementType = Y, e.lanes = i, e;
        case F:
          return e = Ht(19, n, t, l), e.elementType = F, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case te:
                u = 10;
                break e;
              case me:
                u = 9;
                break e;
              case ne:
                u = 11;
                break e;
              case J:
                u = 14;
                break e;
              case ke:
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
  var ql = [], Vl = 0, qi = null, Mr = 0, Zt = [], Wt = 0, va = null, En = 1, _n = "";
  function Vn(e, t) {
    ql[Vl++] = Mr, ql[Vl++] = qi, qi = e, Mr = t;
  }
  function yf(e, t, n) {
    Zt[Wt++] = En, Zt[Wt++] = _n, Zt[Wt++] = va, va = e;
    var a = En;
    e = _n;
    var l = 32 - rt(a) - 1;
    a &= ~(1 << l), n += 1;
    var i = 32 - rt(t) + l;
    if (30 < i) {
      var u = l - l % 5;
      i = (a & (1 << u) - 1).toString(32), a >>= u, l -= u, En = 1 << 32 - rt(t) + l | n << l | a, _n = i + e;
    } else
      En = 1 << i | n << l | a, _n = e;
  }
  function xu(e) {
    e.return !== null && (Vn(e, 1), yf(e, 1, 0));
  }
  function ku(e) {
    for (; e === qi; )
      qi = ql[--Vl], ql[Vl] = null, Mr = ql[--Vl], ql[Vl] = null;
    for (; e === va; )
      va = Zt[--Wt], Zt[Wt] = null, _n = Zt[--Wt], Zt[Wt] = null, En = Zt[--Wt], Zt[Wt] = null;
  }
  function vf(e, t) {
    Zt[Wt++] = En, Zt[Wt++] = _n, Zt[Wt++] = va, En = t.id, _n = t.overflow, va = e;
  }
  var ot = null, Le = null, ge = !1, ba = null, Jt = !1, Eu = Error(c(519));
  function Sa(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Lr(Kt(t, e)), Eu;
  }
  function bf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[oe] = e, t[Fe] = a, n) {
      case "dialog":
        fe("cancel", t), fe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        fe("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ai.length; n++)
          fe(ai[n], t);
        break;
      case "source":
        fe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        fe("error", t), fe("load", t);
        break;
      case "details":
        fe("toggle", t);
        break;
      case "input":
        fe("invalid", t), Dl(
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
        fe("invalid", t);
        break;
      case "textarea":
        fe("invalid", t), q(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || jp(t.textContent, n) ? (a.popover != null && (fe("beforetoggle", t), fe("toggle", t)), a.onScroll != null && fe("scroll", t), a.onScrollEnd != null && fe("scrollend", t), a.onClick != null && (t.onclick = it), t = !0) : t = !1, t || Sa(e, !0);
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
    var e = ba;
    return e !== null && (zt === null ? zt = e : zt.push.apply(
      zt,
      e
    ), ba = null), e;
  }
  function Lr(e) {
    ba === null ? ba = [e] : ba.push(e);
  }
  var Au = we(null), sl = null, Gn = null;
  function wa(e, t, n) {
    Z(Au, t._currentValue), t._currentValue = n;
  }
  function Yn(e) {
    e._currentValue = Au.current, ue(Au);
  }
  function Nu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ou(e, t, n, a) {
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
              i.lanes |= n, d = i.alternate, d !== null && (d.lanes |= n), Nu(
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
        u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), Nu(u, n, e), u = null;
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
    e !== null && Ou(
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
  var Ng = typeof AbortController < "u" ? AbortController : function() {
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
  }, Og = o.unstable_scheduleCallback, Cg = o.unstable_NormalPriority, $e = {
    $$typeof: te,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Cu() {
    return {
      controller: new Ng(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function jr(e) {
    e.refCount--, e.refCount === 0 && Og(Cg, function() {
      e.controller.abort();
    });
  }
  var Ur = null, zu = 0, Fl = 0, Xl = null;
  function zg(e, t) {
    if (Ur === null) {
      var n = Ur = [];
      zu = 0, Fl = Ms(), Xl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return zu++, t.then(Tf, Tf), t;
  }
  function Tf() {
    if (--zu === 0 && Ur !== null) {
      Xl !== null && (Xl.status = "fulfilled");
      var e = Ur;
      Ur = null, Fl = 0, Xl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Dg(e, t) {
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
  var xf = L.S;
  L.S = function(e, t) {
    ip = Ye(), typeof t == "object" && t !== null && typeof t.then == "function" && zg(e, t), xf !== null && xf(e, t);
  };
  var fl = we(null);
  function Du() {
    var e = fl.current;
    return e !== null ? e : ze.pooledCache;
  }
  function Yi(e, t) {
    t === null ? Z(fl, fl.current) : Z(fl, t.pool);
  }
  function kf() {
    var e = Du();
    return e === null ? null : { parent: $e._currentValue, pool: e };
  }
  var Il = Error(c(460)), Ru = Error(c(474)), Fi = Error(c(542)), Xi = { then: function() {
  } };
  function Ef(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function _f(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(it, it), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Nf(e), e;
      default:
        if (typeof t.status == "string") t.then(it, it);
        else {
          if (e = ze, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Nf(e), e;
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
  function Nf(e) {
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
    throw t.$$typeof === P ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Of(e) {
    function t(w, v) {
      if (e) {
        var k = w.deletions;
        k === null ? (w.deletions = [v], w.flags |= 16) : k.push(v);
      }
    }
    function n(w, v) {
      if (!e) return null;
      for (; v !== null; )
        t(w, v), v = v.sibling;
      return null;
    }
    function a(w) {
      for (var v = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? v.set(w.key, w) : v.set(w.index, w), w = w.sibling;
      return v;
    }
    function l(w, v) {
      return w = qn(w, v), w.index = 0, w.sibling = null, w;
    }
    function i(w, v, k) {
      return w.index = k, e ? (k = w.alternate, k !== null ? (k = k.index, k < v ? (w.flags |= 67108866, v) : k) : (w.flags |= 67108866, v)) : (w.flags |= 1048576, v);
    }
    function u(w) {
      return e && w.alternate === null && (w.flags |= 67108866), w;
    }
    function d(w, v, k, R) {
      return v === null || v.tag !== 6 ? (v = wu(k, w.mode, R), v.return = w, v) : (v = l(v, k), v.return = w, v);
    }
    function m(w, v, k, R) {
      var W = k.type;
      return W === $ ? O(
        w,
        v,
        k.props.children,
        R,
        k.key
      ) : v !== null && (v.elementType === W || typeof W == "object" && W !== null && W.$$typeof === ke && dl(W) === v.type) ? (v = l(v, k.props), Br(v, k), v.return = w, v) : (v = Bi(
        k.type,
        k.key,
        k.props,
        null,
        w.mode,
        R
      ), Br(v, k), v.return = w, v);
    }
    function E(w, v, k, R) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== k.containerInfo || v.stateNode.implementation !== k.implementation ? (v = Tu(k, w.mode, R), v.return = w, v) : (v = l(v, k.children || []), v.return = w, v);
    }
    function O(w, v, k, R, W) {
      return v === null || v.tag !== 7 ? (v = ol(
        k,
        w.mode,
        R,
        W
      ), v.return = w, v) : (v = l(v, k), v.return = w, v);
    }
    function M(w, v, k) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = wu(
          "" + v,
          w.mode,
          k
        ), v.return = w, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case j:
            return k = Bi(
              v.type,
              v.key,
              v.props,
              null,
              w.mode,
              k
            ), Br(k, v), k.return = w, k;
          case H:
            return v = Tu(
              v,
              w.mode,
              k
            ), v.return = w, v;
          case ke:
            return v = dl(v), M(w, v, k);
        }
        if (U(v) || Ae(v))
          return v = ol(
            v,
            w.mode,
            k,
            null
          ), v.return = w, v;
        if (typeof v.then == "function")
          return M(w, Ii(v), k);
        if (v.$$typeof === te)
          return M(
            w,
            Gi(w, v),
            k
          );
        Qi(w, v);
      }
      return null;
    }
    function _(w, v, k, R) {
      var W = v !== null ? v.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return W !== null ? null : d(w, v, "" + k, R);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case j:
            return k.key === W ? m(w, v, k, R) : null;
          case H:
            return k.key === W ? E(w, v, k, R) : null;
          case ke:
            return k = dl(k), _(w, v, k, R);
        }
        if (U(k) || Ae(k))
          return W !== null ? null : O(w, v, k, R, null);
        if (typeof k.then == "function")
          return _(
            w,
            v,
            Ii(k),
            R
          );
        if (k.$$typeof === te)
          return _(
            w,
            v,
            Gi(w, k),
            R
          );
        Qi(w, k);
      }
      return null;
    }
    function A(w, v, k, R, W) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return w = w.get(k) || null, d(v, w, "" + R, W);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case j:
            return w = w.get(
              R.key === null ? k : R.key
            ) || null, m(v, w, R, W);
          case H:
            return w = w.get(
              R.key === null ? k : R.key
            ) || null, E(v, w, R, W);
          case ke:
            return R = dl(R), A(
              w,
              v,
              k,
              R,
              W
            );
        }
        if (U(R) || Ae(R))
          return w = w.get(k) || null, O(v, w, R, W, null);
        if (typeof R.then == "function")
          return A(
            w,
            v,
            k,
            Ii(R),
            W
          );
        if (R.$$typeof === te)
          return A(
            w,
            v,
            k,
            Gi(v, R),
            W
          );
        Qi(v, R);
      }
      return null;
    }
    function X(w, v, k, R) {
      for (var W = null, be = null, I = v, le = v = 0, pe = null; I !== null && le < k.length; le++) {
        I.index > le ? (pe = I, I = null) : pe = I.sibling;
        var Se = _(
          w,
          I,
          k[le],
          R
        );
        if (Se === null) {
          I === null && (I = pe);
          break;
        }
        e && I && Se.alternate === null && t(w, I), v = i(Se, v, le), be === null ? W = Se : be.sibling = Se, be = Se, I = pe;
      }
      if (le === k.length)
        return n(w, I), ge && Vn(w, le), W;
      if (I === null) {
        for (; le < k.length; le++)
          I = M(w, k[le], R), I !== null && (v = i(
            I,
            v,
            le
          ), be === null ? W = I : be.sibling = I, be = I);
        return ge && Vn(w, le), W;
      }
      for (I = a(I); le < k.length; le++)
        pe = A(
          I,
          w,
          le,
          k[le],
          R
        ), pe !== null && (e && pe.alternate !== null && I.delete(
          pe.key === null ? le : pe.key
        ), v = i(
          pe,
          v,
          le
        ), be === null ? W = pe : be.sibling = pe, be = pe);
      return e && I.forEach(function(Ba) {
        return t(w, Ba);
      }), ge && Vn(w, le), W;
    }
    function ee(w, v, k, R) {
      if (k == null) throw Error(c(151));
      for (var W = null, be = null, I = v, le = v = 0, pe = null, Se = k.next(); I !== null && !Se.done; le++, Se = k.next()) {
        I.index > le ? (pe = I, I = null) : pe = I.sibling;
        var Ba = _(w, I, Se.value, R);
        if (Ba === null) {
          I === null && (I = pe);
          break;
        }
        e && I && Ba.alternate === null && t(w, I), v = i(Ba, v, le), be === null ? W = Ba : be.sibling = Ba, be = Ba, I = pe;
      }
      if (Se.done)
        return n(w, I), ge && Vn(w, le), W;
      if (I === null) {
        for (; !Se.done; le++, Se = k.next())
          Se = M(w, Se.value, R), Se !== null && (v = i(Se, v, le), be === null ? W = Se : be.sibling = Se, be = Se);
        return ge && Vn(w, le), W;
      }
      for (I = a(I); !Se.done; le++, Se = k.next())
        Se = A(I, w, le, Se.value, R), Se !== null && (e && Se.alternate !== null && I.delete(Se.key === null ? le : Se.key), v = i(Se, v, le), be === null ? W = Se : be.sibling = Se, be = Se);
      return e && I.forEach(function(Yy) {
        return t(w, Yy);
      }), ge && Vn(w, le), W;
    }
    function Ce(w, v, k, R) {
      if (typeof k == "object" && k !== null && k.type === $ && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case j:
            e: {
              for (var W = k.key; v !== null; ) {
                if (v.key === W) {
                  if (W = k.type, W === $) {
                    if (v.tag === 7) {
                      n(
                        w,
                        v.sibling
                      ), R = l(
                        v,
                        k.props.children
                      ), R.return = w, w = R;
                      break e;
                    }
                  } else if (v.elementType === W || typeof W == "object" && W !== null && W.$$typeof === ke && dl(W) === v.type) {
                    n(
                      w,
                      v.sibling
                    ), R = l(v, k.props), Br(R, k), R.return = w, w = R;
                    break e;
                  }
                  n(w, v);
                  break;
                } else t(w, v);
                v = v.sibling;
              }
              k.type === $ ? (R = ol(
                k.props.children,
                w.mode,
                R,
                k.key
              ), R.return = w, w = R) : (R = Bi(
                k.type,
                k.key,
                k.props,
                null,
                w.mode,
                R
              ), Br(R, k), R.return = w, w = R);
            }
            return u(w);
          case H:
            e: {
              for (W = k.key; v !== null; ) {
                if (v.key === W)
                  if (v.tag === 4 && v.stateNode.containerInfo === k.containerInfo && v.stateNode.implementation === k.implementation) {
                    n(
                      w,
                      v.sibling
                    ), R = l(v, k.children || []), R.return = w, w = R;
                    break e;
                  } else {
                    n(w, v);
                    break;
                  }
                else t(w, v);
                v = v.sibling;
              }
              R = Tu(k, w.mode, R), R.return = w, w = R;
            }
            return u(w);
          case ke:
            return k = dl(k), Ce(
              w,
              v,
              k,
              R
            );
        }
        if (U(k))
          return X(
            w,
            v,
            k,
            R
          );
        if (Ae(k)) {
          if (W = Ae(k), typeof W != "function") throw Error(c(150));
          return k = W.call(k), ee(
            w,
            v,
            k,
            R
          );
        }
        if (typeof k.then == "function")
          return Ce(
            w,
            v,
            Ii(k),
            R
          );
        if (k.$$typeof === te)
          return Ce(
            w,
            v,
            Gi(w, k),
            R
          );
        Qi(w, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint" ? (k = "" + k, v !== null && v.tag === 6 ? (n(w, v.sibling), R = l(v, k), R.return = w, w = R) : (n(w, v), R = wu(k, w.mode, R), R.return = w, w = R), u(w)) : n(w, v);
    }
    return function(w, v, k, R) {
      try {
        Hr = 0;
        var W = Ce(
          w,
          v,
          k,
          R
        );
        return Ql = null, W;
      } catch (I) {
        if (I === Il || I === Fi) throw I;
        var be = Ht(29, I, null, w.mode);
        return be.lanes = R, be.return = w, be;
      } finally {
      }
    };
  }
  var ml = Of(!0), Cf = Of(!1), Ta = !1;
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
  function xa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ka(e, t, n) {
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
      var m = d, E = m.next;
      m.next = null, u === null ? i = E : u.next = E, u = m;
      var O = e.alternate;
      O !== null && (O = O.updateQueue, d = O.lastBaseUpdate, d !== u && (d === null ? O.firstBaseUpdate = E : d.next = E, O.lastBaseUpdate = m));
    }
    if (i !== null) {
      var M = l.baseState;
      u = 0, O = E = m = null, d = i;
      do {
        var _ = d.lane & -536870913, A = _ !== d.lane;
        if (A ? (de & _) === _ : (a & _) === _) {
          _ !== 0 && _ === Fl && (Uu = !0), O !== null && (O = O.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e, ee = d;
            _ = t;
            var Ce = n;
            switch (ee.tag) {
              case 1:
                if (X = ee.payload, typeof X == "function") {
                  M = X.call(Ce, M, _);
                  break e;
                }
                M = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = ee.payload, _ = typeof X == "function" ? X.call(Ce, M, _) : X, _ == null) break e;
                M = z({}, M, _);
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
          }, O === null ? (E = O = A, m = M) : O = O.next = A, u |= _;
        if (d = d.next, d === null) {
          if (d = l.shared.pending, d === null)
            break;
          A = d, d = A.next, A.next = null, l.lastBaseUpdate = A, l.shared.pending = null;
        }
      } while (!0);
      O === null && (m = M), l.baseState = m, l.firstBaseUpdate = E, l.lastBaseUpdate = O, i === null && (l.shared.lanes = 0), Oa |= u, e.lanes = u, e.memoizedState = M;
    }
  }
  function zf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Df(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        zf(n[e], t);
  }
  var $l = we(null), $i = we(0);
  function Rf(e, t) {
    e = Wn, Z($i, e), Z($l, t), Wn = e | t.baseLanes;
  }
  function Hu() {
    Z($i, Wn), Z($l, $l.current);
  }
  function Bu() {
    Wn = $i.current, ue($l), ue($i);
  }
  var Bt = we(null), un = null;
  function Ea(e) {
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
  var Fn = 0, ae = null, Ne = null, Pe = null, Ki = !1, Pl = !1, hl = !1, Zi = 0, Yr = 0, Kl = null, Rg = 0;
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
    var t = Ne !== null && Ne.next !== null;
    if (Fn = 0, Pe = Ne = ae = null, Ki = !1, Yr = 0, Kl = null, t) throw Error(c(300));
    e === null || Ke || (e = e.dependencies, e !== null && Vi(e) && (Ke = !0));
  }
  function jf(e, t, n, a) {
    ae = e;
    var l = 0;
    do {
      if (Pl && (Kl = null), Yr = 0, Pl = !1, 25 <= l) throw Error(c(301));
      if (l += 1, Pe = Ne = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      L.H = vd, i = t(n, a);
    } while (Pl);
    return i;
  }
  function Mg() {
    var e = L.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Fr(t) : t, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (ae.flags |= 1024), t;
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
    Fn = 0, Pe = Ne = ae = null, Pl = !1, Yr = Zi = 0, Kl = null;
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
    if (Ne === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = Pe === null ? ae.memoizedState : Pe.next;
    if (t !== null)
      Pe = t, Ne = e;
    else {
      if (e === null)
        throw ae.alternate === null ? Error(c(467)) : Error(c(310));
      Ne = e, e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
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
      if (e.$$typeof === te) return ut(e);
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
    return Qu(t, Ne, e);
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
      var d = u = null, m = null, E = t, O = !1;
      do {
        var M = E.lane & -536870913;
        if (M !== E.lane ? (de & M) === M : (Fn & M) === M) {
          var _ = E.revertLane;
          if (_ === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), M === Fl && (O = !0);
          else if ((Fn & _) === _) {
            E = E.next, _ === Fl && (O = !0);
            continue;
          } else
            M = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, m === null ? (d = m = M, u = i) : m = m.next = M, ae.lanes |= _, Oa |= _;
          M = E.action, hl && n(i, M), i = E.hasEagerState ? E.eagerState : n(i, M);
        } else
          _ = {
            lane: M,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, m === null ? (d = m = _, u = i) : m = m.next = _, ae.lanes |= M, Oa |= M;
        E = E.next;
      } while (E !== null && E !== t);
      if (m === null ? u = i : m.next = d, !Ut(i, e.memoizedState) && (Ke = !0, O && (n = Xl, n !== null)))
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
      (Ne || l).memoizedState,
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
      ), ze === null) throw Error(c(349));
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
    t !== null && Dt(t, e, 2);
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
      Ne,
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
      } catch (E) {
        Ku(e, t, E);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), L.T = i;
      }
    } else
      try {
        i = n(l, a), Xf(e, t, i);
      } catch (E) {
        Ku(e, t, E);
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
      var n = ze.formState;
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
    return Zf(t, Ne, e);
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
    var t = Ie(), n = Ne;
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
    Ne !== null && a !== null && Vu(a, Ne.memoizedState.deps) ? l.memoizedState = Zl(t, i, n, a) : (ae.flags |= e, l.memoizedState = Zl(
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
    return n === void 0 || (Fn & 1073741824) !== 0 && (de & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = up(), ae.lanes |= e, Oa |= e, n);
  }
  function ud(e, t, n, a) {
    return Ut(n, t) ? n : $l.current !== null ? (e = Ju(e, n, a), Ut(e, t) || (Ke = !0), e) : (Fn & 42) === 0 || (Fn & 1073741824) !== 0 && (de & 261930) === 0 ? (Ke = !0, e.memoizedState = n) : (e = up(), ae.lanes |= e, Oa |= e, t);
  }
  function sd(e, t, n, a, l) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var u = L.T, d = {};
    L.T = d, ns(e, !1, t, n);
    try {
      var m = l(), E = L.S;
      if (E !== null && E(d, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var O = Dg(
          m,
          a
        );
        Xr(
          e,
          t,
          O,
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
          e = xa(n);
          var a = ka(t, e, n);
          a !== null && (Dt(a, t, n), qr(a, t, n)), t = { cache: Cu() }, e.payload = t;
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
    }, ao(e) ? hd(t, n) : (n = bu(e, t, n, a), n !== null && (Dt(n, e, a), gd(n, t, a)));
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
            return Ui(e, t, l, 0), ze === null && ji(), !1;
        } catch {
        } finally {
        }
      if (n = bu(e, t, l, a), n !== null)
        return Dt(n, e, a), gd(n, t, a), !0;
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
      t = bu(
        e,
        n,
        a,
        2
      ), t !== null && Dt(t, e, 2);
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
        if (n = t(), ze === null)
          throw Error(c(349));
        (de & 127) !== 0 || Hf(a, t, n);
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
      var e = St(), t = ze.identifierPrefix;
      if (ge) {
        var n = _n, a = En;
        n = (a & ~(1 << 32 - rt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Zi++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Rg++, t = "_" + t + "r_" + n.toString(32) + "_";
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
        Ne.memoizedState,
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
      return Yf(n, Ne, e, t);
    },
    useMemoCache: Iu,
    useCacheRefresh: pd
  };
  as.useEffectEvent = td;
  var vd = {
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
      return Ne === null ? Ju(n, e, t) : ud(
        n,
        Ne.memoizedState,
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
      return Ne !== null ? Yf(n, Ne, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Iu,
    useCacheRefresh: pd
  };
  vd.useEffectEvent = td;
  function ls(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var rs = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Yt(), l = xa(a);
      l.payload = t, n != null && (l.callback = n), t = ka(e, l, a), t !== null && (Dt(t, e, a), qr(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Yt(), l = xa(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = ka(e, l, a), t !== null && (Dt(t, e, a), qr(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Yt(), a = xa(n);
      a.tag = 2, t != null && (a.callback = t), t = ka(e, a, n), t !== null && (Dt(t, e, n), qr(t, e, n));
    }
  };
  function bd(e, t, n, a, l, i, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, u) : t.prototype && t.prototype.isPureReactComponent ? !Dr(n, a) || !Dr(l, i) : !0;
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
      n === t && (n = z({}, n));
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
  function xd(e) {
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
  function kd(e, t, n) {
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
    return n = xa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      lo(e, t);
    }, n;
  }
  function Ed(e) {
    return e = xa(e), e.tag = 3, e;
  }
  function _d(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      e.payload = function() {
        return l(i);
      }, e.callback = function() {
        kd(t, n, a);
      };
    }
    var u = n.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      kd(t, n, a), typeof l != "function" && (Ca === null ? Ca = /* @__PURE__ */ new Set([this]) : Ca.add(this));
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
            return un === null ? yo() : n.alternate === null && Ge === 0 && (Ge = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === Xi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), zs(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === Xi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), zs(e, a, l)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return zs(e, a, l), yo(), !1;
    }
    if (ge)
      return t = Bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Eu && (e = Error(c(422), { cause: a }), Lr(Kt(e, n)))) : (a !== Eu && (t = Error(c(423), {
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
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ca === null || !Ca.has(i))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = Ed(l), _d(
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
    t.child = e === null ? Cf(t, null, n, a) : ml(
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
    ), d = Yu(), e !== null && !Ke ? (Fu(e, t, l), In(e, t, l)) : (ge && d && xu(t), t.flags |= 1, st(e, t, a, l), t.child);
  }
  function Nd(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Su(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Od(
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
      if (n = n.compare, n = n !== null ? n : Dr, n(u, a) && e.ref === t.ref)
        return In(e, t, l);
    }
    return t.flags |= 1, e = qn(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Od(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Dr(i, a) && e.ref === t.ref)
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
  function Cd(e, t, n, a) {
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
        return zd(
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
        ), i !== null ? Rf(t, i) : Hu(), Mf(t);
      else
        return a = t.lanes = 536870912, zd(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          a
        );
    } else
      i !== null ? (Yi(t, i.cachePool), Rf(t, i), _a(), t.memoizedState = null) : (e !== null && Yi(t, null), Hu(), _a());
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
  function zd(e, t, n, a, l) {
    var i = Du();
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
  function Dd(e, t, n) {
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
          treeContext: va !== null ? { id: En, overflow: _n } : null,
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
          t.flags &= -257, t = Dd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (Ke || Yl(e, t, n, !1), l = (n & e.childLanes) !== 0, Ke || l) {
        if (a = ze, a !== null && (u = yr(a, n), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, il(e, u), Dt(a, e, u), os;
        yo(), t = Dd(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, Le = en(u.nextSibling), ot = t, ge = !0, ba = null, Jt = !1, e !== null && vf(t, e), t = ro(t, a), t.flags |= 4096;
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
    ), a = Yu(), e !== null && !Ke ? (Fu(e, t, l), In(e, t, l)) : (ge && a && xu(t), t.flags |= 1, st(e, t, n, l), t.child);
  }
  function Rd(e, t, n, a, l, i) {
    return cl(t), t.updateQueue = null, n = jf(
      t,
      a,
      n,
      l
    ), Lf(e), a = Yu(), e !== null && !Ke ? (Fu(e, t, i), In(e, t, i)) : (ge && a && xu(t), t.flags |= 1, st(e, t, n, i), t.child);
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
      var E = i.context, O = n.contextType;
      u = Bl, typeof O == "object" && O !== null && (u = ut(O));
      var M = n.getDerivedStateFromProps;
      O = typeof M == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, O || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || E !== u) && Sd(
        t,
        i,
        a,
        u
      ), Ta = !1;
      var _ = t.memoizedState;
      i.state = _, Gr(t, a, i, l), Vr(), E = t.memoizedState, d || _ !== E || Ta ? (typeof M == "function" && (ls(
        t,
        n,
        M,
        a
      ), E = t.memoizedState), (m = Ta || bd(
        t,
        n,
        m,
        a,
        _,
        E,
        u
      )) ? (O || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = E), i.props = a, i.state = E, i.context = u, a = m) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Lu(e, t), u = t.memoizedProps, O = gl(n, u), i.props = O, M = t.pendingProps, _ = i.context, E = n.contextType, m = Bl, typeof E == "object" && E !== null && (m = ut(E)), d = n.getDerivedStateFromProps, (E = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== M || _ !== m) && Sd(
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
      ), A = t.memoizedState), (O = Ta || bd(
        t,
        n,
        O,
        a,
        _,
        A,
        m
      ) || e !== null && e.dependencies !== null && Vi(e.dependencies)) ? (E || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, A, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        A,
        m
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = A), i.props = a, i.state = A, i.context = m, a = O) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), a = !1);
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
    return { baseLanes: e, cachePool: kf() };
  }
  function fs(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Gt), e;
  }
  function jd(e, t, n) {
    var a = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), u && (l = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (l ? Ea(t) : _a(), (e = Le) ? (e = Fp(
          e,
          Jt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: va !== null ? { id: En, overflow: _n } : null,
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
      ), t.memoizedState = ss, Qr(null, a)) : (Ea(t), ds(t, d));
    }
    var m = e.memoizedState;
    if (m !== null && (d = m.dehydrated, d !== null)) {
      if (i)
        t.flags & 256 ? (Ea(t), t.flags &= -257, t = ps(
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
      else if (Ea(t), Qs(d)) {
        if (u = d.nextSibling && d.nextSibling.dataset, u) var E = u.dgst;
        u = E, a = Error(c(419)), a.stack = "", a.digest = u, Lr({ value: a, source: null, stack: null }), t = ps(
          e,
          t,
          n
        );
      } else if (Ke || Yl(e, t, n, !1), u = (n & e.childLanes) !== 0, Ke || u) {
        if (u = ze, u !== null && (a = yr(u, n), a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, il(e, a), Dt(u, e, a), os;
        Is(d) || yo(), t = ps(
          e,
          t,
          n
        );
      } else
        Is(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Le = en(
          d.nextSibling
        ), ot = t, ge = !0, ba = null, Jt = !1, e !== null && vf(t, e), t = ds(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return l ? (_a(), d = a.fallback, l = t.mode, m = e.child, E = m.sibling, a = qn(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, E !== null ? d = qn(
      E,
      d
    ) : (d = ol(
      d,
      l,
      n,
      null
    ), d.flags |= 2), d.return = t, a.return = t, a.sibling = d, t.child = a, Qr(null, a), a = t.child, d = e.child.memoizedState, d === null ? d = cs(n) : (l = d.cachePool, l !== null ? (m = $e._currentValue, l = l.parent !== m ? { parent: m, pool: m } : l) : l = kf(), d = {
      baseLanes: d.baseLanes | n,
      cachePool: l
    }), a.memoizedState = d, a.childLanes = fs(
      e,
      u,
      n
    ), t.memoizedState = ss, Qr(e.child, a)) : (Ea(t), n = e.child, e = n.sibling, n = qn(n, {
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
    a !== null && (a.lanes |= t), Nu(e.return, t, n);
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
    if (e !== null && (t.dependencies = e.dependencies), Oa |= t.lanes, (n & t.childLanes) === 0)
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
        De(t);
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
          return a.dehydrated !== null ? (Ea(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? jd(e, t, n) : (Ea(t), e = In(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Ea(t);
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
        return t.lanes = 0, Cd(
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
              } else if (l === J) {
                t.tag = 14, t = Nd(
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
          if (a = u.cache, wa(t, $e, a), a !== i.cache && Ou(
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
              for (Le = en(e.firstChild), ot = t, ge = !0, ba = null, Jt = !0, n = Cf(
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
        )) ? t.memoizedState = n : ge || (n = t.type, e = t.pendingProps, a = ko(
          tt.current
        ).createElement(n), a[oe] = t, a[Fe] = e, ct(a, n, e), Me(a), t.stateNode = a) : t.memoizedState = Kp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return De(t), e === null && ge && (a = t.stateNode = Qp(
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
        return e === null && ge && ((l = a = Le) && (a = by(
          a,
          t.type,
          t.pendingProps,
          Jt
        ), a !== null ? (t.stateNode = a, ot = t, Le = en(a.firstChild), Jt = !1, l = !0) : l = !1), l || Sa(t)), De(t), l = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, a = i.children, Ys(l, i) ? a = null : u !== null && Ys(l, u) && (t.flags |= 32), t.memoizedState !== null && (l = Gu(
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
        return Nd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Od(
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
        return Cd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return cl(t), a = ut($e), e === null ? (l = Du(), l === null && (l = ze, i = Cu(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, Mu(t), wa(t, $e, l)) : ((e.lanes & n) !== 0 && (Lu(e, t), Gr(t, null, null, n), Vr()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), wa(t, $e, a)) : (a = i.cache, wa(t, $e, a), a !== l.cache && Ou(
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
          throw pl = Xi, Ru;
    } else e.flags &= -16777217;
  }
  function qd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !tm(t))
      if (dp()) e.flags |= 8192;
      else
        throw pl = Xi, Ru;
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
    switch (ku(t), t.tag) {
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
          e = ye.current, Gl(t) ? bf(t) : (e = Qp(l, a, n), t.stateNode = e, Qn(t));
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
            bf(t);
          else {
            var u = ko(
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
            e = ko(e).createTextNode(
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
    switch (ku(t), t.tag) {
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
    switch (ku(t), t.tag) {
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
              var m = n, E = d;
              try {
                E();
              } catch (O) {
                _e(
                  l,
                  m,
                  O
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (O) {
      _e(t, t.return, O);
    }
  }
  function Gd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Df(t, n);
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
  function vs(e) {
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
  function bs(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = it));
    else if (a !== 4 && (a === 27 && Ma(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (bs(e, t, n), e = e.sibling; e !== null; )
        bs(e, t, n), e = e.sibling;
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
    if (e = e.containerInfo, Vs = zo, e = lf(e), pu(e)) {
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
            var u = 0, d = -1, m = -1, E = 0, O = 0, M = e, _ = null;
            t: for (; ; ) {
              for (var A; M !== n || l !== 0 && M.nodeType !== 3 || (d = u + l), M !== i || a !== 0 && M.nodeType !== 3 || (m = u + a), M.nodeType === 3 && (u += M.nodeValue.length), (A = M.firstChild) !== null; )
                _ = M, M = A;
              for (; ; ) {
                if (M === e) break t;
                if (_ === n && ++E === l && (d = u), _ === i && ++O === a && (m = u), (A = M.nextSibling) !== null) break;
                M = _, _ = M.parentNode;
              }
              M = A;
            }
            n = d === -1 || m === -1 ? null : { start: d, end: m };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Gs = { focusedElem: e, selectionRange: n }, zo = !1, lt = t; lt !== null; )
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
                } catch (ee) {
                  _e(
                    n,
                    n.return,
                    ee
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
            Df(e, t);
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
  var Ue = null, Nt = !1;
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
        var a = Ue, l = Nt;
        Ma(n.type) && (Ue = n.stateNode, Nt = !1), Pn(
          e,
          t,
          n
        ), ri(n.stateNode), Ue = a, Nt = l;
        break;
      case 5:
        Ze || An(n, t);
      case 6:
        if (a = Ue, l = Nt, Ue = null, Pn(
          e,
          t,
          n
        ), Ue = a, Nt = l, Ue !== null)
          if (Nt)
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
        Ue !== null && (Nt ? (e = Ue, Gp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), sr(e)) : Gp(Ue, n.stateNode));
        break;
      case 4:
        a = Ue, l = Nt, Ue = n.stateNode.containerInfo, Nt = !0, Pn(
          e,
          t,
          n
        ), Ue = a, Nt = l;
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
  function Ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a], i = e, u = t, d = u;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Ma(d.type)) {
                Ue = d.stateNode, Nt = !1;
                break e;
              }
              break;
            case 5:
              Ue = d.stateNode, Nt = !1;
              break e;
            case 3:
            case 4:
              Ue = d.stateNode.containerInfo, Nt = !0;
              break e;
          }
          d = d.return;
        }
        if (Ue === null) throw Error(c(160));
        Kd(i, u, l), Ue = null, Nt = !1, i = l.alternate, i !== null && (i.return = null), l.return = null;
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
        Ot(t, e), Ct(e), a & 4 && (Aa(3, e, e.return), Pr(3, e), Aa(5, e, e.return));
        break;
      case 1:
        Ot(t, e), Ct(e), a & 512 && (Ze || n === null || An(n, n.return)), a & 64 && $n && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var l = hn;
        if (Ot(t, e), Ct(e), a & 512 && (Ze || n === null || An(n, n.return)), a & 4) {
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
        Ot(t, e), Ct(e), a & 512 && (Ze || n === null || An(n, n.return)), n !== null && a & 4 && ys(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ot(t, e), Ct(e), a & 512 && (Ze || n === null || An(n, n.return)), e.flags & 32) {
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
        if (Ot(t, e), Ct(e), a & 4) {
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
        if (Ao = null, l = hn, hn = Eo(t.containerInfo), Ot(t, e), hn = l, Ct(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            sr(t.containerInfo);
          } catch (X) {
            _e(e, e.return, X);
          }
        Ss && (Ss = !1, ep(e));
        break;
      case 4:
        a = hn, hn = Eo(
          e.stateNode.containerInfo
        ), Ot(t, e), Ct(e), hn = a;
        break;
      case 12:
        Ot(t, e), Ct(e);
        break;
      case 31:
        Ot(t, e), Ct(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, co(e, a)));
        break;
      case 13:
        Ot(t, e), Ct(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (po = Ye()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, co(e, a)));
        break;
      case 22:
        l = e.memoizedState !== null;
        var m = n !== null && n.memoizedState !== null, E = $n, O = Ze;
        if ($n = E || l, Ze = O || m, Ot(t, e), Ze = O, $n = E, Ct(e), a & 8192)
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
        Ot(t, e), Ct(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, co(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ot(t, e), Ct(e);
    }
  }
  function Ct(e) {
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
            var l = n.stateNode, i = vs(e);
            so(e, i, l);
            break;
          case 5:
            var u = n.stateNode;
            n.flags & 32 && (K(u, ""), n.flags &= -33);
            var d = vs(e);
            so(e, d, u);
            break;
          case 3:
          case 4:
            var m = n.stateNode.containerInfo, E = vs(e);
            bs(
              e,
              E,
              m
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (O) {
        _e(e, e.return, O);
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
            } catch (E) {
              _e(a, a.return, E);
            }
          if (a = i, l = a.updateQueue, l !== null) {
            var d = a.stateNode;
            try {
              var m = l.shared.hiddenCallbacks;
              if (m !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < m.length; l++)
                  zf(m[l], d);
            } catch (E) {
              _e(a, a.return, E);
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
      var i = e, u = t, d = n, m = a, E = u.flags;
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
          var O = u.stateNode;
          u.memoizedState !== null ? O._visibility & 2 ? Wl(
            i,
            u,
            d,
            m,
            l
          ) : Zr(
            i,
            u
          ) : (O._visibility |= 2, Wl(
            i,
            u,
            d,
            m,
            l
          )), l && E & 2048 && ws(
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
          ), l && E & 2048 && Ts(u.alternate, u);
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
        ), e.flags & Wr && e.memoizedState !== null && Ry(
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
        hn = Eo(e.stateNode.containerInfo), Jl(
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
  }, Pg = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, ze = null, ce = null, de = 0, Ee = 0, Vt = null, Na = !1, er = !1, xs = !1, Wn = 0, Ge = 0, Oa = 0, vl = 0, ks = 0, Gt = 0, tr = 0, ei = null, zt = null, Es = !1, po = 0, ip = 0, mo = 1 / 0, ho = null, Ca = null, et = 0, za = null, nr = null, Jn = 0, _s = 0, As = null, op = null, ti = 0, Ns = null;
  function Yt() {
    return (Te & 2) !== 0 && de !== 0 ? de & -de : L.T !== null ? Ms() : fa();
  }
  function up() {
    if (Gt === 0)
      if ((de & 536870912) === 0 || ge) {
        var e = Wa;
        Wa <<= 1, (Wa & 3932160) === 0 && (Wa = 262144), Gt = e;
      } else Gt = 536870912;
    return e = Bt.current, e !== null && (e.flags |= 32), Gt;
  }
  function Dt(e, t, n) {
    (e === ze && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (ar(e, 0), Da(
      e,
      de,
      Gt,
      !1
    )), jn(e, n), ((Te & 2) === 0 || e !== ze) && (e === ze && ((Te & 2) === 0 && (vl |= n), Ge === 4 && Da(
      e,
      de,
      Gt,
      !1
    )), Nn(e));
  }
  function sp(e, t, n) {
    if ((Te & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || wn(e, t), l = a ? Wg(e, t) : Cs(e, t, !0), i = a;
    do {
      if (l === 0) {
        er && !a && Da(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Kg(n)) {
          l = Cs(e, t, !1), i = !1;
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
              if (m && (ar(d, u).flags |= 256), u = Cs(
                d,
                u,
                !1
              ), u !== 2) {
                if (xs && !m) {
                  d.errorRecoveryDisabledLanes |= i, vl |= i, l = 4;
                  break e;
                }
                i = zt, zt = l, i !== null && (zt === null ? zt = i : zt.push.apply(
                  zt,
                  i
                ));
              }
              l = u;
            }
            if (i = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          ar(e, 0), Da(e, t, 0, !0);
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
              Da(
                a,
                t,
                Gt,
                !Na
              );
              break e;
            case 2:
              zt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (l = po + 300 - Ye(), 10 < l)) {
            if (Da(
              a,
              t,
              Gt,
              !Na
            ), Mn(a, 0, !0) !== 0) break e;
            Jn = t, a.timeoutHandle = qp(
              cp.bind(
                null,
                a,
                n,
                zt,
                ho,
                Es,
                t,
                Gt,
                vl,
                tr,
                Na,
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
            zt,
            ho,
            Es,
            t,
            Gt,
            vl,
            tr,
            Na,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Nn(e);
  }
  function cp(e, t, n, a, l, i, u, d, m, E, O, M, _, A) {
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
          vp.bind(
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
            O,
            M,
            null,
            _,
            A
          )
        ), Da(e, i, u, !E);
        return;
      }
    }
    vp(
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
  function Da(e, t, n, a) {
    t &= ~ks, t &= ~vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var i = 31 - rt(l), u = 1 << i;
      a[i] = -1, l &= ~u;
    }
    n !== 0 && gr(e, n, t);
  }
  function go() {
    return (Te & 6) === 0 ? (ni(0), !1) : !0;
  }
  function Os() {
    if (ce !== null) {
      if (Ee === 0)
        var e = ce.return;
      else
        e = ce, Gn = sl = null, Xu(e), Ql = null, Hr = 0, e = ce;
      for (; e !== null; )
        Vd(e.alternate, e), e = e.return;
      ce = null;
    }
  }
  function ar(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, gy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Jn = 0, Os(), ze = e, ce = n = qn(e.current, null), de = t, Ee = 0, Vt = null, Na = !1, er = wn(e, t), xs = !1, tr = Gt = ks = vl = Oa = Ge = 0, zt = ei = null, Es = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - rt(a), i = 1 << l;
        t |= e[l], a &= ~i;
      }
    return Wn = t, ji(), n;
  }
  function fp(e, t) {
    ae = null, L.H = Ir, t === Il || t === Fi ? (t = Af(), Ee = 3) : t === Ru ? (t = Af(), Ee = 4) : Ee = t === os ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, ce === null && (Ge = 1, lo(
      e,
      Kt(t, e.current)
    ));
  }
  function dp() {
    var e = Bt.current;
    return e === null ? !0 : (de & 4194048) === de ? un === null : (de & 62914560) === de || (de & 536870912) !== 0 ? e === un : !1;
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
    Ge = 4, Na || (de & 4194048) !== de && Bt.current !== null || (er = !0), (Oa & 134217727) === 0 && (vl & 134217727) === 0 || ze === null || Da(
      ze,
      de,
      Gt,
      !1
    );
  }
  function Cs(e, t, n) {
    var a = Te;
    Te |= 2;
    var l = pp(), i = mp();
    (ze !== e || de !== t) && (ho = null, ar(e, t)), t = !1;
    var u = Ge;
    e: do
      try {
        if (Ee !== 0 && ce !== null) {
          var d = ce, m = Vt;
          switch (Ee) {
            case 8:
              Os(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Bt.current === null && (t = !0);
              var E = Ee;
              if (Ee = 0, Vt = null, lr(e, d, m, E), n && er) {
                u = 0;
                break e;
              }
              break;
            default:
              E = Ee, Ee = 0, Vt = null, lr(e, d, m, E);
          }
        }
        Zg(), u = Ge;
        break;
      } catch (O) {
        fp(e, O);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = sl = null, Te = a, L.H = l, L.A = i, ce === null && (ze = null, de = 0, ji()), u;
  }
  function Zg() {
    for (; ce !== null; ) hp(ce);
  }
  function Wg(e, t) {
    var n = Te;
    Te |= 2;
    var a = pp(), l = mp();
    ze !== e || de !== t ? (ho = null, mo = Ye() + 500, ar(e, t)) : er = wn(
      e,
      t
    );
    e: do
      try {
        if (Ee !== 0 && ce !== null) {
          t = ce;
          var i = Vt;
          t: switch (Ee) {
            case 1:
              Ee = 0, Vt = null, lr(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Ef(i)) {
                Ee = 0, Vt = null, gp(t);
                break;
              }
              t = function() {
                Ee !== 2 && Ee !== 9 || ze !== e || (Ee = 7), Nn(e);
              }, i.then(t, t);
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              Ef(i) ? (Ee = 0, Vt = null, gp(t)) : (Ee = 0, Vt = null, lr(e, t, i, 7));
              break;
            case 5:
              var u = null;
              switch (ce.tag) {
                case 26:
                  u = ce.memoizedState;
                case 5:
                case 27:
                  var d = ce;
                  if (u ? tm(u) : d.stateNode.complete) {
                    Ee = 0, Vt = null;
                    var m = d.sibling;
                    if (m !== null) ce = m;
                    else {
                      var E = d.return;
                      E !== null ? (ce = E, vo(E)) : ce = null;
                    }
                    break t;
                  }
              }
              Ee = 0, Vt = null, lr(e, t, i, 5);
              break;
            case 6:
              Ee = 0, Vt = null, lr(e, t, i, 6);
              break;
            case 8:
              Os(), Ge = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Jg();
        break;
      } catch (O) {
        fp(e, O);
      }
    while (!0);
    return Gn = sl = null, L.H = a, L.A = l, Te = n, ce !== null ? 0 : (ze = null, de = 0, ji(), Ge);
  }
  function Jg() {
    for (; ce !== null && !bn(); )
      hp(ce);
  }
  function hp(e) {
    var t = Bd(e.alternate, e, Wn);
    e.memoizedProps = e.pendingProps, t === null ? vo(e) : ce = t;
  }
  function gp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Rd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          de
        );
        break;
      case 11:
        t = Rd(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          de
        );
        break;
      case 5:
        Xu(t);
      default:
        Vd(n, t), t = ce = mf(t, Wn), t = Bd(n, t, Wn);
    }
    e.memoizedProps = e.pendingProps, t === null ? vo(e) : ce = t;
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
        de
      )) {
        Ge = 1, lo(
          e,
          Kt(n, e.current)
        ), ce = null;
        return;
      }
    } catch (i) {
      if (l !== null) throw ce = l, i;
      Ge = 1, lo(
        e,
        Kt(n, e.current)
      ), ce = null;
      return;
    }
    t.flags & 32768 ? (ge || a === 1 ? e = !0 : er || (de & 536870912) !== 0 ? e = !1 : (Na = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Bt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), yp(t, e)) : vo(t);
  }
  function vo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        yp(
          t,
          Na
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
        ce = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ce = t;
        return;
      }
      ce = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }
  function yp(e, t) {
    do {
      var n = Xg(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        ce = e;
        return;
      }
      ce = e = n;
    } while (e !== null);
    Ge = 6, ce = null;
  }
  function vp(e, t, n, a, l, i, u, d, m) {
    e.cancelPendingCommit = null;
    do
      bo();
    while (et !== 0);
    if ((Te & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (i = t.lanes | t.childLanes, i |= vu, Jo(
        e,
        n,
        i,
        u,
        d,
        m
      ), e === ze && (ce = ze = null, de = 0), nr = t, za = e, Jn = n, _s = i, As = l, op = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ay(ia, function() {
        return xp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = L.T, L.T = null, l = G.p, G.p = 2, u = Te, Te |= 4;
        try {
          Ig(e, t, n);
        } finally {
          Te = u, G.p = l, L.T = a;
        }
      }
      et = 1, bp(), Sp(), wp();
    }
  }
  function bp() {
    if (et === 1) {
      et = 0;
      var e = za, t = nr, n = (t.flags & 13878) !== 0;
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
              var E = m.start, O = m.end;
              if (O === void 0 && (O = E), "selectionStart" in d)
                d.selectionStart = E, d.selectionEnd = Math.min(
                  O,
                  d.value.length
                );
              else {
                var M = d.ownerDocument || document, _ = M && M.defaultView || window;
                if (_.getSelection) {
                  var A = _.getSelection(), X = d.textContent.length, ee = Math.min(m.start, X), Ce = m.end === void 0 ? ee : Math.min(m.end, X);
                  !A.extend && ee > Ce && (u = Ce, Ce = ee, ee = u);
                  var w = nf(
                    d,
                    ee
                  ), v = nf(
                    d,
                    Ce
                  );
                  if (w && v && (A.rangeCount !== 1 || A.anchorNode !== w.node || A.anchorOffset !== w.offset || A.focusNode !== v.node || A.focusOffset !== v.offset)) {
                    var k = M.createRange();
                    k.setStart(w.node, w.offset), A.removeAllRanges(), ee > Ce ? (A.addRange(k), A.extend(v.node, v.offset)) : (k.setEnd(v.node, v.offset), A.addRange(k));
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
              var R = M[d];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          zo = !!Vs, Gs = Vs = null;
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
      var e = za, t = nr, n = (t.flags & 8772) !== 0;
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
      var e = za, t = nr, n = Jn, a = op;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? et = 5 : (et = 0, nr = za = null, Tp(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (l === 0 && (Ca = null), vr(n), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function")
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
      (Jn & 3) !== 0 && bo(), Nn(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === Ns ? ti++ : (ti = 0, Ns = e) : ti = 0, ni(0);
    }
  }
  function Tp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, jr(t)));
  }
  function bo() {
    return bp(), Sp(), wp(), xp();
  }
  function xp() {
    if (et !== 5) return !1;
    var e = za, t = _s;
    _s = 0;
    var n = vr(Jn), a = L.T, l = G.p;
    try {
      G.p = 32 > n ? 32 : n, L.T = null, n = As, As = null;
      var i = za, u = Jn;
      if (et = 0, nr = za = null, Jn = 0, (Te & 6) !== 0) throw Error(c(331));
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
  function kp(e, t, n) {
    t = Kt(n, t), t = is(e.stateNode, t, 2), e = ka(e, t, 2), e !== null && (jn(e, 2), Nn(e));
  }
  function _e(e, t, n) {
    if (e.tag === 3)
      kp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          kp(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ca === null || !Ca.has(a))) {
            e = Kt(n, e), n = Ed(2), a = ka(t, n, 2), a !== null && (_d(
              n,
              a,
              t,
              e
            ), jn(a, 2), Nn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function zs(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Pg();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (xs = !0, l.add(n), e = ey.bind(null, e, t, n), t.then(e, e));
  }
  function ey(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ze === e && (de & n) === n && (Ge === 4 || Ge === 3 && (de & 62914560) === de && 300 > Ye() - po ? (Te & 2) === 0 && ar(e, 0) : ks |= n, tr === de && (tr = 0)), Nn(e);
  }
  function Ep(e, t) {
    t === 0 && (t = Ln()), e = il(e, t), e !== null && (jn(e, t), Nn(e));
  }
  function ty(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ep(e, n);
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
    a !== null && a.delete(t), Ep(e, n);
  }
  function ay(e, t) {
    return Tl(e, t);
  }
  var So = null, rr = null, Ds = !1, wo = !1, Rs = !1, Ra = 0;
  function Nn(e) {
    e !== rr && e.next === null && (rr === null ? So = rr = e : rr = rr.next = e), wo = !0, Ds || (Ds = !0, ry());
  }
  function ni(e, t) {
    if (!Rs && wo) {
      Rs = !0;
      do
        for (var n = !1, a = So; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var u = a.suspendedLanes, d = a.pingedLanes;
              i = (1 << 31 - rt(42 | e) + 1) - 1, i &= l & ~(u & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, Op(a, i));
          } else
            i = de, i = Mn(
              a,
              a === ze ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || wn(a, i) || (n = !0, Op(a, i));
          a = a.next;
        }
      while (n);
      Rs = !1;
    }
  }
  function ly() {
    _p();
  }
  function _p() {
    wo = Ds = !1;
    var e = 0;
    Ra !== 0 && hy() && (e = Ra);
    for (var t = Ye(), n = null, a = So; a !== null; ) {
      var l = a.next, i = Ap(a, t);
      i === 0 ? (a.next = null, n === null ? So = l : n.next = l, l === null && (rr = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (wo = !0)), a = l;
    }
    et !== 0 && et !== 5 || ni(e), Ra !== 0 && (Ra = 0);
  }
  function Ap(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - rt(i), d = 1 << u, m = l[u];
      m === -1 ? ((d & n) === 0 || (d & a) !== 0) && (l[u] = $t(d, t)) : m <= t && (e.expiredLanes |= d), i &= ~d;
    }
    if (t = ze, n = de, n = Mn(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && xl(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || wn(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && xl(a), vr(n)) {
        case 2:
        case 8:
          n = El;
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
      return a = Np.bind(null, e), n = Tl(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && xl(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Np(e, t) {
    if (et !== 0 && et !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (bo() && e.callbackNode !== n)
      return null;
    var a = de;
    return a = Mn(
      e,
      e === ze ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (sp(e, a, t), Ap(e, Ye()), e.callbackNode != null && e.callbackNode === n ? Np.bind(null, e) : null);
  }
  function Op(e, t) {
    if (bo()) return null;
    sp(e, t, !0);
  }
  function ry() {
    yy(function() {
      (Te & 6) !== 0 ? Tl(
        kl,
        ly
      ) : _p();
    });
  }
  function Ms() {
    if (Ra === 0) {
      var e = Fl;
      e === 0 && (e = Za, Za <<= 1, (Za & 261888) === 0 && (Za = 256)), Ra = e;
    }
    return Ra;
  }
  function Cp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _t("" + e);
  }
  function zp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function iy(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = Cp(
        (l[Fe] || null).action
      ), u = a.submitter;
      u && (t = (t = u[Fe] || null) ? Cp(t.formAction) : u.getAttribute("formAction"), t !== null && (i = t, u = null));
      var d = new Di(
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
                if (Ra !== 0) {
                  var m = u ? zp(l, u) : new FormData(l);
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
                typeof i == "function" && (d.preventDefault(), m = u ? zp(l, u) : new FormData(l), es(
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
  mn(uf, "onAnimationEnd"), mn(sf, "onAnimationIteration"), mn(cf, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(kg, "onTransitionRun"), mn(Eg, "onTransitionStart"), mn(_g, "onTransitionCancel"), mn(ff, "onTransitionEnd"), Hn("onMouseEnter", ["mouseout", "mouseover"]), Hn("onMouseLeave", ["mouseout", "mouseover"]), Hn("onPointerEnter", ["pointerout", "pointerover"]), Hn("onPointerLeave", ["pointerout", "pointerover"]), xn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), xn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), xn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), xn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), xn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), xn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), sy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai)
  );
  function Dp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = a.length - 1; 0 <= u; u--) {
            var d = a[u], m = d.instance, E = d.currentTarget;
            if (d = d.listener, m !== i && l.isPropagationStopped())
              break e;
            i = d, l.currentTarget = E;
            try {
              i(l);
            } catch (O) {
              Li(O);
            }
            l.currentTarget = null, i = m;
          }
        else
          for (u = 0; u < a.length; u++) {
            if (d = a[u], m = d.instance, E = d.currentTarget, d = d.listener, m !== i && l.isPropagationStopped())
              break e;
            i = d, l.currentTarget = E;
            try {
              i(l);
            } catch (O) {
              Li(O);
            }
            l.currentTarget = null, i = m;
          }
      }
    }
  }
  function fe(e, t) {
    var n = t[Nl];
    n === void 0 && (n = t[Nl] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Rp(t, e, 2, !1), n.add(a));
  }
  function Us(e, t, n) {
    var a = 0;
    t && (a |= 4), Rp(
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
  function Rp(e, t, n, a) {
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
      var E = i, O = nu(n), M = [];
      e: {
        var _ = df.get(e);
        if (_ !== void 0) {
          var A = Di, X = e;
          switch (e) {
            case "keypress":
              if (Ci(n) === 0) break e;
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
          var ee = (t & 4) !== 0, Ce = !ee && (e === "scroll" || e === "scrollend"), w = ee ? _ !== null ? _ + "Capture" : null : _;
          ee = [];
          for (var v = E, k; v !== null; ) {
            var R = v;
            if (k = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || k === null || w === null || (R = Er(v, w), R != null && ee.push(
              li(v, R, k)
            )), Ce) break;
            v = v.return;
          }
          0 < ee.length && (_ = new A(
            _,
            X,
            null,
            n,
            O
          ), M.push({ event: _, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_ = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", _ && n !== tu && (X = n.relatedTarget || n.fromElement) && (pa(X) || X[da]))
            break e;
          if ((A || _) && (_ = O.window === O ? O : (_ = O.ownerDocument) ? _.defaultView || _.parentWindow : window, A ? (X = n.relatedTarget || n.toElement, A = E, X = X ? pa(X) : null, X !== null && (Ce = h(X), ee = X.tag, X !== Ce || ee !== 5 && ee !== 27 && ee !== 6) && (X = null)) : (A = null, X = E), A !== X)) {
            if (ee = qc, R = "onMouseLeave", w = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Gc, R = "onPointerLeave", w = "onPointerEnter", v = "pointer"), Ce = A == null ? _ : Rt(A), k = X == null ? _ : Rt(X), _ = new ee(
              R,
              v + "leave",
              A,
              n,
              O
            ), _.target = Ce, _.relatedTarget = k, R = null, pa(O) === E && (ee = new ee(
              w,
              v + "enter",
              X,
              n,
              O
            ), ee.target = k, ee.relatedTarget = Ce, R = ee), Ce = R, A && X)
              t: {
                for (ee = cy, w = A, v = X, k = 0, R = w; R; R = ee(R))
                  k++;
                R = 0;
                for (var W = v; W; W = ee(W))
                  R++;
                for (; 0 < k - R; )
                  w = ee(w), k--;
                for (; 0 < R - k; )
                  v = ee(v), R--;
                for (; k--; ) {
                  if (w === v || v !== null && w === v.alternate) {
                    ee = w;
                    break t;
                  }
                  w = ee(w), v = ee(v);
                }
                ee = null;
              }
            else ee = null;
            A !== null && Mp(
              M,
              _,
              A,
              ee,
              !1
            ), X !== null && Ce !== null && Mp(
              M,
              Ce,
              X,
              ee,
              !0
            );
          }
        }
        e: {
          if (_ = E ? Rt(E) : window, A = _.nodeName && _.nodeName.toLowerCase(), A === "select" || A === "input" && _.type === "file")
            var be = Kc;
          else if ($c(_))
            if (Zc)
              be = wg;
            else {
              be = bg;
              var I = vg;
            }
          else
            A = _.nodeName, !A || A.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? E && at(E.elementType) && (be = Kc) : be = Sg;
          if (be && (be = be(e, E))) {
            Pc(
              M,
              be,
              n,
              O
            );
            break e;
          }
          I && I(e, _, E), e === "focusout" && E && _.type === "number" && E.memoizedProps.value != null && b(_, "number", _.value);
        }
        switch (I = E ? Rt(E) : window, e) {
          case "focusin":
            ($c(I) || I.contentEditable === "true") && (jl = I, mu = E, Rr = null);
            break;
          case "focusout":
            Rr = mu = jl = null;
            break;
          case "mousedown":
            hu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hu = !1, rf(M, n, O);
            break;
          case "selectionchange":
            if (xg) break;
          case "keydown":
          case "keyup":
            rf(M, n, O);
        }
        var le;
        if (cu)
          e: {
            switch (e) {
              case "compositionstart":
                var pe = "onCompositionStart";
                break e;
              case "compositionend":
                pe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                pe = "onCompositionUpdate";
                break e;
            }
            pe = void 0;
          }
        else
          Ll ? Ic(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (Yc && n.locale !== "ko" && (Ll || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Ll && (le = Hc()) : (ya = O, ru = "value" in ya ? ya.value : ya.textContent, Ll = !0)), I = xo(E, pe), 0 < I.length && (pe = new Vc(
          pe,
          e,
          null,
          n,
          O
        ), M.push({ event: pe, listeners: I }), le ? pe.data = le : (le = Qc(n), le !== null && (pe.data = le)))), (le = pg ? mg(e, n) : hg(e, n)) && (pe = xo(E, "onBeforeInput"), 0 < pe.length && (I = new Vc(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          O
        ), M.push({
          event: I,
          listeners: pe
        }), I.data = le)), iy(
          M,
          e,
          E,
          n,
          O
        );
      }
      Dp(M, t);
    });
  }
  function li(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function xo(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, i = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = Er(e, n), l != null && a.unshift(
        li(e, l, i)
      ), l = Er(e, t), l != null && a.push(
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
      var d = n, m = d.alternate, E = d.stateNode;
      if (d = d.tag, m !== null && m === a) break;
      d !== 5 && d !== 26 && d !== 27 || E === null || (m = E, l ? (E = Er(n, i), E != null && u.unshift(
        li(n, E, m)
      )) : l || (E = Er(n, i), E != null && u.push(
        li(n, E, m)
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
  function Oe(e, t, n, a, l, i) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || K(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && K(e, "" + a);
        break;
      case "className":
        kt(e, "class", a);
        break;
      case "tabIndex":
        kt(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        kt(e, n, a);
        break;
      case "style":
        mt(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          kt(e, "data", a);
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
          typeof i == "function" && (n === "formAction" ? (t !== "input" && Oe(e, t, "name", l.name, l, null), Oe(
            e,
            t,
            "formEncType",
            l.formEncType,
            l,
            null
          ), Oe(
            e,
            t,
            "formMethod",
            l.formMethod,
            l,
            null
          ), Oe(
            e,
            t,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (Oe(e, t, "encType", l.encType, l, null), Oe(e, t, "method", l.method, l, null), Oe(e, t, "target", l.target, l, null)));
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
        a != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && fe("scrollend", e);
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
        fe("beforetoggle", e), fe("toggle", e), kn(e, "popover", a);
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
        kn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = bt.get(n) || n, kn(e, n, a));
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
        a != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && fe("scrollend", e);
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
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : kn(e, n, a);
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
        fe("error", e), fe("load", e);
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
                  Oe(e, t, i, u, n, null);
              }
          }
        l && Oe(e, t, "srcSet", n.srcSet, n, null), a && Oe(e, t, "src", n.src, n, null);
        return;
      case "input":
        fe("invalid", e);
        var d = i = u = l = null, m = null, E = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var O = n[a];
            if (O != null)
              switch (a) {
                case "name":
                  l = O;
                  break;
                case "type":
                  u = O;
                  break;
                case "checked":
                  m = O;
                  break;
                case "defaultChecked":
                  E = O;
                  break;
                case "value":
                  i = O;
                  break;
                case "defaultValue":
                  d = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Oe(e, t, a, O, n, null);
              }
          }
        Dl(
          e,
          i,
          d,
          m,
          E,
          u,
          l,
          !1
        );
        return;
      case "select":
        fe("invalid", e), a = u = i = null;
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
                Oe(e, t, l, d, n, null);
            }
        t = i, n = u, e.multiple = !!a, t != null ? y(e, !!a, t, !1) : n != null && y(e, !!a, n, !0);
        return;
      case "textarea":
        fe("invalid", e), i = l = a = null;
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
                Oe(e, t, u, d, n, null);
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
                Oe(e, t, m, a, n, null);
            }
        return;
      case "dialog":
        fe("beforetoggle", e), fe("toggle", e), fe("cancel", e), fe("close", e);
        break;
      case "iframe":
      case "object":
        fe("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ai.length; a++)
          fe(ai[a], e);
        break;
      case "image":
        fe("error", e), fe("load", e);
        break;
      case "details":
        fe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        fe("error", e), fe("load", e);
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
        for (E in n)
          if (n.hasOwnProperty(E) && (a = n[E], a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Oe(e, t, E, a, n, null);
            }
        return;
      default:
        if (at(t)) {
          for (O in n)
            n.hasOwnProperty(O) && (a = n[O], a !== void 0 && qs(
              e,
              t,
              O,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (d in n)
      n.hasOwnProperty(d) && (a = n[d], a != null && Oe(e, t, d, a, n, null));
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
        var l = null, i = null, u = null, d = null, m = null, E = null, O = null;
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
                a.hasOwnProperty(A) || Oe(e, t, A, null, a, M);
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
                E = A;
                break;
              case "defaultChecked":
                O = A;
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
                A !== M && Oe(
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
          E,
          O,
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
                a.hasOwnProperty(i) || Oe(
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
                i !== m && Oe(
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
                Oe(e, t, d, null, a, l);
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
                l !== i && Oe(e, t, u, l, a, i);
            }
        N(e, _, A);
        return;
      case "option":
        for (var X in n)
          if (_ = n[X], n.hasOwnProperty(X) && _ != null && !a.hasOwnProperty(X))
            switch (X) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Oe(
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
                Oe(
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
        for (var ee in n)
          _ = n[ee], n.hasOwnProperty(ee) && _ != null && !a.hasOwnProperty(ee) && Oe(e, t, ee, null, a, _);
        for (E in a)
          if (_ = a[E], A = n[E], a.hasOwnProperty(E) && _ !== A && (_ != null || A != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(c(137, t));
                break;
              default:
                Oe(
                  e,
                  t,
                  E,
                  _,
                  a,
                  A
                );
            }
        return;
      default:
        if (at(t)) {
          for (var Ce in n)
            _ = n[Ce], n.hasOwnProperty(Ce) && _ !== void 0 && !a.hasOwnProperty(Ce) && qs(
              e,
              t,
              Ce,
              void 0,
              a,
              _
            );
          for (O in a)
            _ = a[O], A = n[O], !a.hasOwnProperty(O) || _ === A || _ === void 0 && A === void 0 || qs(
              e,
              t,
              O,
              _,
              a,
              A
            );
          return;
        }
    }
    for (var w in n)
      _ = n[w], n.hasOwnProperty(w) && _ != null && !a.hasOwnProperty(w) && Oe(e, t, w, null, a, _);
    for (M in a)
      _ = a[M], A = n[M], !a.hasOwnProperty(M) || _ === A || _ == null && A == null || Oe(e, t, M, _, a, A);
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
            var m = n[a], E = m.startTime;
            if (E > d) break;
            var O = m.transferSize, M = m.initiatorType;
            O && Up(M) && (m = m.responseEnd, u += O * (m < d ? 1 : (d - E) / (m - E)));
          }
          if (--a, t += 8 * (i + u) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Vs = null, Gs = null;
  function ko(e) {
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
    return Vp.resolve(null).then(e).catch(vy);
  } : qp;
  function vy(e) {
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
  function by(e, t, n, a) {
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
    switch (t = ko(n), e) {
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
  function Eo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ea = G.d;
  G.d = {
    f: Ty,
    r: xy,
    D: ky,
    C: Ey,
    L: _y,
    m: Ay,
    X: Oy,
    S: Ny,
    M: Cy
  };
  function Ty() {
    var e = ea.f(), t = go();
    return e || t;
  }
  function xy(e) {
    var t = ma(e);
    t !== null && t.tag === 5 && t.type === "form" ? fd(t) : ea.r(e);
  }
  var ir = typeof document > "u" ? null : document;
  function Pp(e, t, n) {
    var a = ir;
    if (a && typeof t == "string" && t) {
      var l = xt(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), $p.has(l) || ($p.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), ct(t, "link", e), Me(t), a.head.appendChild(t)));
    }
  }
  function ky(e) {
    ea.D(e), Pp("dns-prefetch", e, null);
  }
  function Ey(e, t) {
    ea.C(e, t), Pp("preconnect", e, t);
  }
  function _y(e, t, n) {
    ea.L(e, t, n);
    var a = ir;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + xt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + xt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + xt(
        n.imageSizes
      ) + '"]')) : l += '[href="' + xt(e) + '"]';
      var i = l;
      switch (t) {
        case "style":
          i = or(e);
          break;
        case "script":
          i = ur(e);
      }
      tn.has(i) || (e = z(
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
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + xt(a) + '"][href="' + xt(e) + '"]', i = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = ur(e);
      }
      if (!tn.has(i) && (e = z({ rel: "modulepreload", href: e }, t), tn.set(i, e), n.querySelector(l) === null)) {
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
  function Ny(e, t, n) {
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
          e = z(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = tn.get(i)) && Ps(e, n);
          var m = u = a.createElement("link");
          Me(m), ct(m, "link", e), m._p = new Promise(function(E, O) {
            m.onload = E, m.onerror = O;
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
  function Oy(e, t) {
    ea.X(e, t);
    var n = ir;
    if (n && e) {
      var a = Un(n).hoistableScripts, l = ur(e), i = a.get(l);
      i || (i = n.querySelector(oi(l)), i || (e = z({ src: e, async: !0 }, t), (t = tn.get(l)) && Ks(e, t), i = n.createElement("script"), Me(i), ct(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Cy(e, t) {
    ea.M(e, t);
    var n = ir;
    if (n && e) {
      var a = Un(n).hoistableScripts, l = ur(e), i = a.get(l);
      i || (i = n.querySelector(oi(l)), i || (e = z({ src: e, async: !0, type: "module" }, t), (t = tn.get(l)) && Ks(e, t), i = n.createElement("script"), Me(i), ct(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Kp(e, t, n, a) {
    var l = (l = tt.current) ? Eo(l) : null;
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
          }, tn.set(e, n), i || zy(
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
    return 'href="' + xt(e) + '"';
  }
  function ii(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Zp(e) {
    return z({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function zy(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ct(t, "link", n), Me(t), e.head.appendChild(t));
  }
  function ur(e) {
    return '[src="' + xt(e) + '"]';
  }
  function oi(e) {
    return "script[async]" + e;
  }
  function Wp(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + xt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, Me(a), a;
          var l = z({}, n, {
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
          )) ? (t.instance = l, Me(l), l) : (a = n, (l = tn.get(i)) && (a = z({}, n), Ks(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), Me(l), ct(l, "link", a), e.head.appendChild(l), t.instance = l);
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
  function Dy(e, t, n) {
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
  function Ry(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = or(a.href), i = t.querySelector(
          ii(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = No.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Me(i);
          return;
        }
        i = t.ownerDocument || t, a = Zp(a), (l = tn.get(l)) && Ps(a, l), i = i.createElement("link"), Me(i);
        var u = i;
        u._p = new Promise(function(d, m) {
          u.onload = d, u.onerror = m;
        }), ct(i, "link", a), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = No.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Zs = 0;
  function My(e, t) {
    return e.stylesheets && e.count === 0 && Co(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Co(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Zs === 0 && (Zs = 62500 * my());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Co(e, e.stylesheets), e.unsuspend)) {
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
  function No() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Co(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Oo = null;
  function Co(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Oo = /* @__PURE__ */ new Map(), t.forEach(Ly, e), Oo = null, No.call(e));
  }
  function Ly(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Oo.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Oo.set(e, n);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < l.length; i++) {
          var u = l[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (n.set(u.dataset.precedence, u), a = u);
        }
        a && n.set(null, a);
      }
      l = t.instance, u = l.getAttribute("data-precedence"), i = n.get(u) || a, i === a && n.set(null, l), n.set(u, l), this.count++, a = No.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ui = {
    $$typeof: te,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0
  };
  function jy(e, t, n, a, l, i, u, d, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ja(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ja(0), this.hiddenUpdates = Ja(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nm(e, t, n, a, l, i, u, d, m, E, O, M) {
    return e = new jy(
      e,
      t,
      n,
      u,
      m,
      E,
      O,
      M,
      d
    ), t = 1, i === !0 && (t |= 24), i = Ht(3, null, null, t), e.current = i, i.stateNode = e, t = Cu(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Mu(i), e;
  }
  function am(e) {
    return e ? (e = Bl, e) : Bl;
  }
  function lm(e, t, n, a, l, i) {
    l = am(l), a.context === null ? a.context = l : a.pendingContext = l, a = xa(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = ka(e, a, t), n !== null && (Dt(n, e, t), qr(n, e, t));
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
      t !== null && Dt(t, e, 67108864), Ws(e, 67108864);
    }
  }
  function om(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = el(t);
      var n = il(e, t);
      n !== null && Dt(n, e, t), Ws(e, t);
    }
  }
  var zo = !0;
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
    if (zo) {
      var l = ec(a);
      if (l === null)
        Bs(
          e,
          t,
          a,
          Do,
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
                    Nn(i), (Te & 6) === 0 && (mo = Ye() + 500, ni(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = il(i, 2), d !== null && Dt(d, i, 2), go(), Ws(i, 2);
            }
          if (i = ec(a), i === null && Bs(
            e,
            t,
            a,
            Do,
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
  var Do = null;
  function tc(e) {
    if (Do = null, e = pa(e), e !== null) {
      var t = h(e);
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
    return Do = e, null;
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
          case kl:
            return 2;
          case El:
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
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = T(n), t !== null) {
            e.blockedOn = t, ki(e.priority, function() {
              om(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = S(n), t !== null) {
            e.blockedOn = t, ki(e.priority, function() {
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
  function Ro(e) {
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
    Ro(e) && n.delete(t);
  }
  function Vy() {
    nc = !1, La !== null && Ro(La) && (La = null), ja !== null && Ro(ja) && (ja = null), Ua !== null && Ro(Ua) && (Ua = null), si.forEach(fm), ci.forEach(fm);
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
    return e = D(t), e = e !== null ? C(e) : null, e = e === null ? null : e.stateNode, e;
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
    var n = !1, a = "", l = wd, i = Td, u = xd;
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
    var a = !1, l = "", i = wd, u = Td, d = xd, m = null;
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
    ), t.context = am(null), n = t.current, a = Yt(), a = el(a), l = xa(a), l.callback = null, ka(n, l, a), n = a, t.current.lanes = n, jn(t, n), Nn(t), e[da] = t.current, Hs(e), new jo(t);
  }, _m.version = "19.2.6", _m;
}
var m1;
function mA() {
  if (m1) return Av.exports;
  m1 = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (o) {
        console.error(o);
      }
  }
  return r(), Av.exports = pA(), Av.exports;
}
var hA = mA();
const vb = (r, o, s) => {
  hA.createRoot(s).render(ht.createElement(r, o));
}, vA = ({ targetSelector: r, props: o }) => {
  vb(rw, o, document.querySelector(r));
}, bA = ({ targetSelector: r, props: o }) => {
  vb(iw, o, document.querySelector(r));
}, SA = ({ targetSelector: r, props: o }) => {
  vb(aw, o, document.querySelector(r));
};
export {
  aw as CardCarouselNews,
  rw as CardGridNews,
  iw as CardListlNews,
  SA as initCardCarouselNewsComponent,
  vA as initCardGridNewsComponent,
  bA as initCardListNewsComponent
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
