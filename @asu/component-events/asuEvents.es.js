import Et, { forwardRef as on, createContext as ES, useState as Fo, useRef as Xm, useId as Yv, useCallback as p0, useEffect as $o, Children as Fv, isValidElement as Xv, createElement as Qv, useContext as $v } from "react";
import Iv from "react-dom";
function xS(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var _y = { exports: {} }, um = {};
var Z0;
function AS() {
  if (Z0) return um;
  Z0 = 1;
  var i = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function s(d, c, h) {
    var T = null;
    if (h !== void 0 && (T = "" + h), c.key !== void 0 && (T = "" + c.key), "key" in c) {
      h = {};
      for (var A in c)
        A !== "key" && (h[A] = c[A]);
    } else h = c;
    return c = h.ref, {
      $$typeof: i,
      type: d,
      key: T,
      ref: c !== void 0 ? c : null,
      props: h
    };
  }
  return um.Fragment = o, um.jsx = s, um.jsxs = s, um;
}
var W0;
function _S() {
  return W0 || (W0 = 1, _y.exports = AS()), _y.exports;
}
var Vl = _S();
function J0(i, o) {
  (o == null || o > i.length) && (o = i.length);
  for (var s = 0, d = Array(o); s < o; s++) d[s] = i[s];
  return d;
}
function zS(i) {
  if (Array.isArray(i)) return i;
}
function NS(i, o) {
  var s = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (s != null) {
    var d, c, h, T, A = [], x = !0, O = !1;
    try {
      if (h = (s = s.call(i)).next, o !== 0) for (; !(x = (d = h.call(s)).done) && (A.push(d.value), A.length !== o); x = !0) ;
    } catch (L) {
      O = !0, c = L;
    } finally {
      try {
        if (!x && s.return != null && (T = s.return(), Object(T) !== T)) return;
      } finally {
        if (O) throw c;
      }
    }
    return A;
  }
}
function OS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CS(i, o) {
  return zS(i) || NS(i, o) || DS(i, o) || OS();
}
function DS(i, o) {
  if (i) {
    if (typeof i == "string") return J0(i, o);
    var s = {}.toString.call(i).slice(8, -1);
    return s === "Object" && i.constructor && (s = i.constructor.name), s === "Map" || s === "Set" ? Array.from(i) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? J0(i, o) : void 0;
  }
}
const Kv = Object.entries, eb = Object.setPrototypeOf, RS = Object.isFrozen, MS = Object.getPrototypeOf, LS = Object.getOwnPropertyDescriptor;
let ql = Object.freeze, Yl = Object.seal, Sc = Object.create, Pv = typeof Reflect < "u" && Reflect, m0 = Pv.apply, h0 = Pv.construct;
ql || (ql = function(o) {
  return o;
});
Yl || (Yl = function(o) {
  return o;
});
m0 || (m0 = function(o, s) {
  for (var d = arguments.length, c = new Array(d > 2 ? d - 2 : 0), h = 2; h < d; h++)
    c[h - 2] = arguments[h];
  return o.apply(s, c);
});
h0 || (h0 = function(o) {
  for (var s = arguments.length, d = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
    d[c - 1] = arguments[c];
  return new o(...d);
});
const sm = On(Array.prototype.forEach), US = On(Array.prototype.lastIndexOf), tb = On(Array.prototype.pop), gc = On(Array.prototype.push), jS = On(Array.prototype.splice), Go = Array.isArray, Sm = On(String.prototype.toLowerCase), zy = On(String.prototype.toString), nb = On(String.prototype.match), cm = On(String.prototype.replace), lb = On(String.prototype.indexOf), HS = On(String.prototype.trim), BS = On(Number.prototype.toString), qS = On(Boolean.prototype.toString), ab = typeof BigInt > "u" ? null : On(BigInt.prototype.toString), rb = typeof Symbol > "u" ? null : On(Symbol.prototype.toString), nl = On(Object.prototype.hasOwnProperty), fm = On(Object.prototype.toString), Hl = On(RegExp.prototype.test), Js = GS(TypeError);
function On(i) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var s = arguments.length, d = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
      d[c - 1] = arguments[c];
    return m0(i, o, d);
  };
}
function GS(i) {
  return function() {
    for (var o = arguments.length, s = new Array(o), d = 0; d < o; d++)
      s[d] = arguments[d];
    return h0(i, s);
  };
}
function ft(i, o) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Sm;
  if (eb && eb(i, null), !Go(o))
    return i;
  let d = o.length;
  for (; d--; ) {
    let c = o[d];
    if (typeof c == "string") {
      const h = s(c);
      h !== c && (RS(o) || (o[d] = h), c = h);
    }
    i[c] = !0;
  }
  return i;
}
function VS(i) {
  for (let o = 0; o < i.length; o++)
    nl(i, o) || (i[o] = null);
  return i;
}
function ya(i) {
  const o = Sc(null);
  for (const d of Kv(i)) {
    var s = CS(d, 2);
    const c = s[0], h = s[1];
    nl(i, c) && (Go(h) ? o[c] = VS(h) : h && typeof h == "object" && h.constructor === Object ? o[c] = ya(h) : o[c] = h);
  }
  return o;
}
function YS(i) {
  switch (typeof i) {
    case "string":
      return i;
    case "number":
      return BS(i);
    case "boolean":
      return qS(i);
    case "bigint":
      return ab ? ab(i) : "0";
    case "symbol":
      return rb ? rb(i) : "Symbol()";
    case "undefined":
      return fm(i);
    case "function":
    case "object": {
      if (i === null)
        return fm(i);
      const o = i, s = gi(o, "toString");
      if (typeof s == "function") {
        const d = s(o);
        return typeof d == "string" ? d : fm(d);
      }
      return fm(i);
    }
    default:
      return fm(i);
  }
}
function gi(i, o) {
  for (; i !== null; ) {
    const d = LS(i, o);
    if (d) {
      if (d.get)
        return On(d.get);
      if (typeof d.value == "function")
        return On(d.value);
    }
    i = MS(i);
  }
  function s() {
    return null;
  }
  return s;
}
function FS(i) {
  try {
    return Hl(i, ""), !0;
  } catch {
    return !1;
  }
}
const ib = ql(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ny = ql(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Oy = ql(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), XS = ql(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Cy = ql(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), QS = ql(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ob = ql(["#text"]), ub = ql(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Dy = ql(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), sb = ql(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Um = ql(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $S = Yl(/{{[\w\W]*|^[\w\W]*}}/g), IS = Yl(/<%[\w\W]*|^[\w\W]*%>/g), KS = Yl(/\${[\w\W]*/g), PS = Yl(/^data-[\-\w.\u00B7-\uFFFF]+$/), ZS = Yl(/^aria-[\-\w]+$/), cb = Yl(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), WS = Yl(/^(?:\w+script|data):/i), JS = Yl(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ew = Yl(/^html$/i), tw = Yl(/^[a-z][.\w]*(-[.\w]+)+$/i), fb = Yl(/<[/\w!]/g), nw = Yl(/<[/\w]/g), lw = Yl(/<\/no(script|embed|frames)/i), aw = Yl(/\/>/i), mi = {
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
}, rw = function() {
  return typeof window > "u" ? null : window;
}, iw = function(o, s) {
  if (typeof o != "object" || typeof o.createPolicy != "function")
    return null;
  let d = null;
  const c = "data-tt-policy-suffix";
  s && s.hasAttribute(c) && (d = s.getAttribute(c));
  const h = "dompurify" + (d ? "#" + d : "");
  try {
    return o.createPolicy(h, {
      createHTML(T) {
        return T;
      },
      createScriptURL(T) {
        return T;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + h + " could not be created."), null;
  }
}, db = function() {
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
}, jo = function(o, s, d, c) {
  return nl(o, s) && Go(o[s]) ? ft(c.base ? ya(c.base) : {}, o[s], c.transform) : d;
};
function Zv() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : rw();
  const o = (b) => Zv(b);
  if (o.version = "3.4.11", o.removed = [], !i || !i.document || i.document.nodeType !== mi.document || !i.Element)
    return o.isSupported = !1, o;
  let s = i.document;
  const d = s, c = d.currentScript;
  i.DocumentFragment;
  const h = i.HTMLTemplateElement, T = i.Node, A = i.Element, x = i.NodeFilter, O = i.NamedNodeMap;
  O === void 0 && (i.NamedNodeMap || i.MozNamedAttrMap), i.HTMLFormElement;
  const L = i.DOMParser, M = i.trustedTypes, D = A.prototype, te = gi(D, "cloneNode"), q = gi(D, "remove"), X = gi(D, "nextSibling"), W = gi(D, "childNodes"), ee = gi(D, "parentNode"), B = gi(D, "shadowRoot"), be = gi(D, "attributes"), P = T && T.prototype ? gi(T.prototype, "nodeType") : null, ne = T && T.prototype ? gi(T.prototype, "nodeName") : null;
  if (typeof h == "function") {
    const b = s.createElement("template");
    b.content && b.content.ownerDocument && (s = b.content.ownerDocument);
  }
  let G, V = "", Z, Ee = !1, He = 0;
  const qe = function() {
    if (He > 0)
      throw Js('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Be = function(g) {
    qe(), He++;
    try {
      return G.createHTML(g);
    } finally {
      He--;
    }
  }, _e = function(g) {
    qe(), He++;
    try {
      return G.createScriptURL(g);
    } finally {
      He--;
    }
  }, gt = function() {
    return Ee || (Z = iw(M, c), Ee = !0), Z;
  }, $e = s, U = $e.implementation, R = $e.createNodeIterator, H = $e.createDocumentFragment, re = $e.getElementsByTagName, se = d.importNode;
  let ie = db();
  o.isSupported = typeof Kv == "function" && typeof ee == "function" && U && U.createHTMLDocument !== void 0;
  const we = $S, ue = IS, I = KS, ge = PS, yt = ZS, tt = WS, fn = JS, dn = tw;
  let nt = cb, De = null;
  const Xl = ft({}, [...ib, ...Ny, ...Oy, ...Cy, ...ob]);
  let Re = null;
  const cr = ft({}, [...ub, ...Dy, ...sb, ...Um]);
  let ke = Object.seal(Sc(null, {
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
  })), Dn = null, va = null;
  const yn = Object.seal(Sc(null, {
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
  let fr = !0, Ql = !0, Sa = !1, wa = !0, bn = !1, $l = !0, Ye = !1, dr = !1, Ta = null, ka = null, al = !1, rl = !1, Il = !1, Ea = !1, vi = !0, il = !1;
  const pt = "user-content-";
  let $t = !0, rt = !1, ol = {}, It = null;
  const pr = ft({}, [
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
  let Kl = null;
  const Pl = ft({}, ["audio", "video", "img", "source", "image", "track"]);
  let ul = null;
  const vn = ft({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Rn = "http://www.w3.org/1998/Math/MathML", Sn = "http://www.w3.org/2000/svg", Kt = "http://www.w3.org/1999/xhtml";
  let Mn = Kt, Zl = !1, Ln = null;
  const Io = ft({}, [Rn, Sn, Kt], zy), mr = ql(["mi", "mo", "mn", "ms", "mtext"]);
  let xa = ft({}, mr);
  const hr = ql(["annotation-xml"]);
  let Wl = ft({}, hr);
  const gr = ft({}, ["title", "style", "font", "a", "script"]);
  let sl = null;
  const Si = ["application/xhtml+xml", "text/html"], wn = "text/html";
  let oe = null, Fe = null;
  const cl = s.createElement("form"), Aa = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, yr = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Fe && Fe === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = ya(g), sl = // eslint-disable-next-line unicorn/prefer-includes
    Si.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? wn : g.PARSER_MEDIA_TYPE, oe = sl === "application/xhtml+xml" ? zy : Sm, De = jo(g, "ALLOWED_TAGS", Xl, {
      transform: oe
    }), Re = jo(g, "ALLOWED_ATTR", cr, {
      transform: oe
    }), Ln = jo(g, "ALLOWED_NAMESPACES", Io, {
      transform: zy
    }), ul = jo(g, "ADD_URI_SAFE_ATTR", vn, {
      transform: oe,
      base: vn
    }), Kl = jo(g, "ADD_DATA_URI_TAGS", Pl, {
      transform: oe,
      base: Pl
    }), It = jo(g, "FORBID_CONTENTS", pr, {
      transform: oe
    }), Dn = jo(g, "FORBID_TAGS", ya({}), {
      transform: oe
    }), va = jo(g, "FORBID_ATTR", ya({}), {
      transform: oe
    }), ol = nl(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? ya(g.USE_PROFILES) : g.USE_PROFILES : !1, fr = g.ALLOW_ARIA_ATTR !== !1, Ql = g.ALLOW_DATA_ATTR !== !1, Sa = g.ALLOW_UNKNOWN_PROTOCOLS || !1, wa = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, bn = g.SAFE_FOR_TEMPLATES || !1, $l = g.SAFE_FOR_XML !== !1, Ye = g.WHOLE_DOCUMENT || !1, rl = g.RETURN_DOM || !1, Il = g.RETURN_DOM_FRAGMENT || !1, Ea = g.RETURN_TRUSTED_TYPE || !1, al = g.FORCE_BODY || !1, vi = g.SANITIZE_DOM !== !1, il = g.SANITIZE_NAMED_PROPS || !1, $t = g.KEEP_CONTENT !== !1, rt = g.IN_PLACE || !1, nt = FS(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : cb, Mn = typeof g.NAMESPACE == "string" ? g.NAMESPACE : Kt, xa = nl(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ya(g.MATHML_TEXT_INTEGRATION_POINTS) : ft({}, mr), Wl = nl(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? ya(g.HTML_INTEGRATION_POINTS) : ft({}, hr);
    const _ = nl(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? ya(g.CUSTOM_ELEMENT_HANDLING) : Sc(null);
    if (ke = Sc(null), nl(_, "tagNameCheck") && Aa(_.tagNameCheck) && (ke.tagNameCheck = _.tagNameCheck), nl(_, "attributeNameCheck") && Aa(_.attributeNameCheck) && (ke.attributeNameCheck = _.attributeNameCheck), nl(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (ke.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), Yl(ke), bn && (Ql = !1), Il && (rl = !0), ol && (De = ft({}, ob), Re = Sc(null), ol.html === !0 && (ft(De, ib), ft(Re, ub)), ol.svg === !0 && (ft(De, Ny), ft(Re, Dy), ft(Re, Um)), ol.svgFilters === !0 && (ft(De, Oy), ft(Re, Dy), ft(Re, Um)), ol.mathMl === !0 && (ft(De, Cy), ft(Re, sb), ft(Re, Um))), yn.tagCheck = null, yn.attributeCheck = null, nl(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? yn.tagCheck = g.ADD_TAGS : Go(g.ADD_TAGS) && (De === Xl && (De = ya(De)), ft(De, g.ADD_TAGS, oe))), nl(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? yn.attributeCheck = g.ADD_ATTR : Go(g.ADD_ATTR) && (Re === cr && (Re = ya(Re)), ft(Re, g.ADD_ATTR, oe))), nl(g, "ADD_URI_SAFE_ATTR") && Go(g.ADD_URI_SAFE_ATTR) && ft(ul, g.ADD_URI_SAFE_ATTR, oe), nl(g, "FORBID_CONTENTS") && Go(g.FORBID_CONTENTS) && (It === pr && (It = ya(It)), ft(It, g.FORBID_CONTENTS, oe)), nl(g, "ADD_FORBID_CONTENTS") && Go(g.ADD_FORBID_CONTENTS) && (It === pr && (It = ya(It)), ft(It, g.ADD_FORBID_CONTENTS, oe)), $t && (De["#text"] = !0), Ye && ft(De, ["html", "head", "body"]), De.table && (ft(De, ["tbody"]), delete Dn.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Js('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Js('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const j = G;
      G = g.TRUSTED_TYPES_POLICY;
      try {
        V = Be("");
      } catch ($) {
        throw G = j, $;
      }
    } else g.TRUSTED_TYPES_POLICY === null ? (G = void 0, V = "") : (G === void 0 && (G = gt()), G && typeof V == "string" && (V = Be("")));
    ql && ql(g), Fe = g;
  }, wi = ft({}, [...Ny, ...Oy, ...XS]), br = ft({}, [...Cy, ...QS]), Jl = function(g, _, j) {
    return _.namespaceURI === Kt ? g === "svg" : _.namespaceURI === Rn ? g === "svg" && (j === "annotation-xml" || xa[j]) : !!wi[g];
  }, vr = function(g, _, j) {
    return _.namespaceURI === Kt ? g === "math" : _.namespaceURI === Sn ? g === "math" && Wl[j] : !!br[g];
  }, fl = function(g, _, j) {
    return _.namespaceURI === Sn && !Wl[j] || _.namespaceURI === Rn && !xa[j] ? !1 : !br[g] && (gr[g] || !wi[g]);
  }, dl = function(g) {
    let _ = ee(g);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: Mn,
      tagName: "template"
    });
    const j = Sm(g.tagName), $ = Sm(_.tagName);
    return Ln[g.namespaceURI] ? g.namespaceURI === Sn ? Jl(j, _, $) : g.namespaceURI === Rn ? vr(j, _, $) : g.namespaceURI === Kt ? fl(j, _, $) : !!(sl === "application/xhtml+xml" && Ln[g.namespaceURI]) : !1;
  }, Mt = function(g) {
    gc(o.removed, {
      element: g
    });
    try {
      ee(g).removeChild(g);
    } catch {
      if (q(g), !ee(g))
        throw Js("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Un = function(g) {
    const _ = W(g);
    if (_) {
      const $ = [];
      sm(_, (me) => {
        gc($, me);
      }), sm($, (me) => {
        try {
          q(me);
        } catch {
        }
      });
    }
    const j = be(g);
    if (j)
      for (let $ = j.length - 1; $ >= 0; --$) {
        const me = j[$], ye = me && me.name;
        if (typeof ye == "string")
          try {
            g.removeAttribute(ye);
          } catch {
          }
      }
  }, Me = function(g, _) {
    try {
      gc(o.removed, {
        attribute: _.getAttributeNode(g),
        from: _
      });
    } catch {
      gc(o.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(g), g === "is")
      if (rl || Il)
        try {
          Mt(_);
        } catch {
        }
      else
        try {
          _.setAttribute(g, "");
        } catch {
        }
  }, Ti = function(g) {
    const _ = be(g);
    if (_)
      for (let j = _.length - 1; j >= 0; --j) {
        const $ = _[j], me = $ && $.name;
        if (!(typeof me != "string" || Re[oe(me)]))
          try {
            g.removeAttribute(me);
          } catch {
          }
      }
  }, ki = function(g) {
    const _ = [g];
    for (; _.length > 0; ) {
      const j = _.pop();
      (P ? P(j) : j.nodeType) === mi.element && Ti(j);
      const me = W(j);
      if (me)
        for (let ye = me.length - 1; ye >= 0; --ye)
          _.push(me[ye]);
    }
  }, Tn = function(g) {
    let _ = null, j = null;
    if (al)
      g = "<remove></remove>" + g;
    else {
      const ye = nb(g, /^[\r\n\t ]+/);
      j = ye && ye[0];
    }
    sl === "application/xhtml+xml" && Mn === Kt && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const $ = G ? Be(g) : g;
    if (Mn === Kt)
      try {
        _ = new L().parseFromString($, sl);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = U.createDocument(Mn, "template", null);
      try {
        _.documentElement.innerHTML = Zl ? V : $;
      } catch {
      }
    }
    const me = _.body || _.documentElement;
    return g && j && me.insertBefore(s.createTextNode(j), me.childNodes[0] || null), Mn === Kt ? re.call(_, Ye ? "html" : "body")[0] : Ye ? _.documentElement : me;
  }, jn = function(g) {
    return R.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT | x.SHOW_PROCESSING_INSTRUCTION | x.SHOW_CDATA_SECTION,
      null
    );
  }, _a = function(g) {
    return g = cm(g, we, " "), g = cm(g, ue, " "), g = cm(g, I, " "), g;
  }, za = function(g) {
    var _;
    g.normalize();
    const j = R.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      x.SHOW_TEXT | x.SHOW_COMMENT | x.SHOW_CDATA_SECTION | x.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let $ = j.nextNode();
    for (; $; )
      $.data = _a($.data), $ = j.nextNode();
    const me = (_ = g.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(g, "template");
    me && sm(me, (ye) => {
      pl(ye.content) && za(ye.content);
    });
  }, ea = function(g) {
    const _ = ne ? ne(g) : null;
    return typeof _ != "string" || oe(_) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    g.attributes !== be(g) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    g.nodeType !== P(g) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    g.childNodes !== W(g);
  }, pl = function(g) {
    if (!P || typeof g != "object" || g === null)
      return !1;
    try {
      return P(g) === mi.documentFragment;
    } catch {
      return !1;
    }
  }, kn = function(g) {
    if (!P || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof P(g) == "number";
    } catch {
      return !1;
    }
  };
  function xt(b, g, _) {
    b.length !== 0 && sm(b, (j) => {
      j.call(o, g, _, Fe);
    });
  }
  const pn = function(g, _) {
    return !!($l && g.hasChildNodes() && !kn(g.firstElementChild) && Hl(fb, g.textContent) && Hl(fb, g.innerHTML) || $l && g.namespaceURI === Kt && _ === "style" && kn(g.firstElementChild) || g.nodeType === mi.processingInstruction || $l && g.nodeType === mi.comment && Hl(nw, g.data));
  }, At = function(g, _) {
    if (!Dn[_] && Tr(_) && (ke.tagNameCheck instanceof RegExp && Hl(ke.tagNameCheck, _) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(_)))
      return !1;
    if ($t && !It[_]) {
      const j = ee(g), $ = W(g);
      if ($ && j) {
        const me = $.length;
        for (let ye = me - 1; ye >= 0; --ye) {
          const mt = rt ? $[ye] : te($[ye], !0);
          j.insertBefore(mt, X(g));
        }
      }
    }
    return Mt(g), !0;
  }, Sr = function(g) {
    if (xt(ie.beforeSanitizeElements, g, null), ea(g))
      return Mt(g), !0;
    const _ = oe(ne ? ne(g) : g.nodeName);
    if (xt(ie.uponSanitizeElement, g, {
      tagName: _,
      allowedTags: De
    }), pn(g, _))
      return Mt(g), !0;
    if (Dn[_] || !(yn.tagCheck instanceof Function && yn.tagCheck(_)) && !De[_])
      return At(g, _);
    if ((P ? P(g) : g.nodeType) === mi.element && !dl(g) || (_ === "noscript" || _ === "noembed" || _ === "noframes") && Hl(lw, g.innerHTML))
      return Mt(g), !0;
    if (bn && g.nodeType === mi.text) {
      const $ = _a(g.textContent);
      g.textContent !== $ && (gc(o.removed, {
        element: g.cloneNode()
      }), g.textContent = $);
    }
    return xt(ie.afterSanitizeElements, g, null), !1;
  }, Ei = function(g, _, j) {
    if (va[_] || vi && (_ === "id" || _ === "name") && (j in s || j in cl))
      return !1;
    const $ = Re[_] || yn.attributeCheck instanceof Function && yn.attributeCheck(_, g);
    if (!(Ql && Hl(ge, _))) {
      if (!(fr && Hl(yt, _))) {
        if ($) {
          if (!ul[_]) {
            if (!Hl(nt, cm(j, fn, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && g !== "script" && lb(j, "data:") === 0 && Kl[g])) {
                if (!(Sa && !Hl(tt, cm(j, fn, "")))) {
                  if (j)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Tr(g) && (ke.tagNameCheck instanceof RegExp && Hl(ke.tagNameCheck, g) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(g)) && (ke.attributeNameCheck instanceof RegExp && Hl(ke.attributeNameCheck, _) || ke.attributeNameCheck instanceof Function && ke.attributeNameCheck(_, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          _ === "is" && ke.allowCustomizedBuiltInElements && (ke.tagNameCheck instanceof RegExp && Hl(ke.tagNameCheck, j) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(j)))
        ) return !1;
      }
    }
    return !0;
  }, wr = ft({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Tr = function(g) {
    return !wr[Sm(g)] && Hl(dn, g);
  }, Na = function(g, _, j, $) {
    if (G && typeof M == "object" && typeof M.getAttributeType == "function" && !j)
      switch (M.getAttributeType(g, _)) {
        case "TrustedHTML":
          return Be($);
        case "TrustedScriptURL":
          return _e($);
      }
    return $;
  }, Ko = function(g, _, j, $) {
    try {
      j ? g.setAttributeNS(j, _, $) : g.setAttribute(_, $), ea(g) ? Mt(g) : tb(o.removed);
    } catch {
      Me(_, g);
    }
  }, Tt = function(g) {
    xt(ie.beforeSanitizeAttributes, g, null);
    const _ = g.attributes;
    if (!_ || ea(g))
      return;
    const j = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Re,
      forceKeepAttr: void 0
    };
    let $ = _.length;
    const me = oe(g.nodeName);
    for (; $--; ) {
      const ye = _[$], mt = ye.name, lt = ye.namespaceURI, bt = ye.value, un = oe(mt), _t = bt;
      let it = mt === "value" ? _t : HS(_t);
      if (j.attrName = un, j.attrValue = it, j.keepAttr = !0, j.forceKeepAttr = void 0, xt(ie.uponSanitizeAttribute, g, j), it = j.attrValue, il && (un === "id" || un === "name") && lb(it, pt) !== 0 && (Me(mt, g), it = pt + it), $l && Hl(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, it)) {
        Me(mt, g);
        continue;
      }
      if (un === "attributename" && nb(it, "href")) {
        Me(mt, g);
        continue;
      }
      if (!j.forceKeepAttr) {
        if (!j.keepAttr) {
          Me(mt, g);
          continue;
        }
        if (!wa && Hl(aw, it)) {
          Me(mt, g);
          continue;
        }
        if (bn && (it = _a(it)), !Ei(me, un, it)) {
          Me(mt, g);
          continue;
        }
        it = Na(me, un, lt, it), it !== _t && Ko(g, mt, lt, it);
      }
    }
    xt(ie.afterSanitizeAttributes, g, null);
  }, ml = function(g) {
    let _ = null;
    const j = jn(g);
    for (xt(ie.beforeSanitizeShadowDOM, g, null); _ = j.nextNode(); )
      if (xt(ie.uponSanitizeShadowNode, _, null), Sr(_), Tt(_), pl(_.content) && ml(_.content), (P ? P(_) : _.nodeType) === mi.element) {
        const me = B(_);
        pl(me) && (Oa(me), ml(me));
      }
    xt(ie.afterSanitizeShadowDOM, g, null);
  }, Oa = function(g) {
    const _ = [{
      node: g,
      shadow: null
    }];
    for (; _.length > 0; ) {
      const j = _.pop();
      if (j.shadow) {
        ml(j.shadow);
        continue;
      }
      const $ = j.node, ye = (P ? P($) : $.nodeType) === mi.element, mt = W($);
      if (mt)
        for (let lt = mt.length - 1; lt >= 0; --lt)
          _.push({
            node: mt[lt],
            shadow: null
          });
      if (ye) {
        const lt = ne ? ne($) : null;
        if (typeof lt == "string" && oe(lt) === "template") {
          const bt = $.content;
          pl(bt) && _.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (ye) {
        const lt = B($);
        pl(lt) && _.push({
          node: null,
          shadow: lt
        }, {
          node: lt,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(b) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, j = null, $ = null, me = null;
    if (Zl = !b, Zl && (b = "<!-->"), typeof b != "string" && !kn(b) && (b = YS(b), typeof b != "string"))
      throw Js("dirty is not a string, aborting");
    if (!o.isSupported)
      return b;
    dr ? (De = Ta, Re = ka) : yr(g), (ie.uponSanitizeElement.length > 0 || ie.uponSanitizeAttribute.length > 0) && (De = ya(De)), ie.uponSanitizeAttribute.length > 0 && (Re = ya(Re)), o.removed = [];
    const ye = rt && typeof b != "string" && kn(b);
    if (ye) {
      const bt = ne ? ne(b) : b.nodeName;
      if (typeof bt == "string") {
        const un = oe(bt);
        if (!De[un] || Dn[un])
          throw Js("root node is forbidden and cannot be sanitized in-place");
      }
      if (ea(b))
        throw Js("root node is clobbered and cannot be sanitized in-place");
      try {
        Oa(b);
      } catch (un) {
        throw Un(b), un;
      }
    } else if (kn(b))
      _ = Tn("<!---->"), j = _.ownerDocument.importNode(b, !0), j.nodeType === mi.element && j.nodeName === "BODY" || j.nodeName === "HTML" ? _ = j : _.appendChild(j), Oa(j);
    else {
      if (!rl && !bn && !Ye && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return G && Ea ? Be(b) : b;
      if (_ = Tn(b), !_)
        return rl ? null : Ea ? V : "";
    }
    _ && al && Mt(_.firstChild);
    const mt = jn(ye ? b : _);
    try {
      for (; $ = mt.nextNode(); )
        Sr($), Tt($), pl($.content) && ml($.content);
    } catch (bt) {
      throw ye && Un(b), bt;
    }
    if (ye)
      return sm(o.removed, (bt) => {
        bt.element && ki(bt.element);
      }), bn && za(b), b;
    if (rl) {
      if (bn && za(_), Il)
        for (me = H.call(_.ownerDocument); _.firstChild; )
          me.appendChild(_.firstChild);
      else
        me = _;
      return (Re.shadowroot || Re.shadowrootmode) && (me = se.call(d, me, !0)), me;
    }
    let lt = Ye ? _.outerHTML : _.innerHTML;
    return Ye && De["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && Hl(ew, _.ownerDocument.doctype.name) && (lt = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + lt), bn && (lt = _a(lt)), G && Ea ? Be(lt) : lt;
  }, o.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    yr(b), dr = !0, Ta = De, ka = Re;
  }, o.clearConfig = function() {
    Fe = null, dr = !1, Ta = null, ka = null, G = Z, V = "";
  }, o.isValidAttribute = function(b, g, _) {
    Fe || yr({});
    const j = oe(b), $ = oe(g);
    return Ei(j, $, _);
  }, o.addHook = function(b, g) {
    typeof g == "function" && nl(ie, b) && gc(ie[b], g);
  }, o.removeHook = function(b, g) {
    if (nl(ie, b)) {
      if (g !== void 0) {
        const _ = US(ie[b], g);
        return _ === -1 ? void 0 : jS(ie[b], _, 1)[0];
      }
      return tb(ie[b]);
    }
  }, o.removeHooks = function(b) {
    nl(ie, b) && (ie[b] = []);
  }, o.removeAllHooks = function() {
    ie = db();
  }, o;
}
Zv();
var Ry = { exports: {} }, My, pb;
function ow() {
  if (pb) return My;
  pb = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return My = i, My;
}
var Ly, mb;
function uw() {
  if (mb) return Ly;
  mb = 1;
  var i = /* @__PURE__ */ ow();
  function o() {
  }
  function s() {
  }
  return s.resetWarningCache = o, Ly = function() {
    function d(T, A, x, O, L, M) {
      if (M !== i) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
      }
    }
    d.isRequired = d;
    function c() {
      return d;
    }
    var h = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: c,
      element: d,
      elementType: d,
      instanceOf: c,
      node: d,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: s,
      resetWarningCache: o
    };
    return h.PropTypes = h, h;
  }, Ly;
}
var hb;
function sw() {
  return hb || (hb = 1, Ry.exports = /* @__PURE__ */ uw()()), Ry.exports;
}
var cw = /* @__PURE__ */ sw();
const kt = /* @__PURE__ */ xS(cw);
kt.shape({
  event: kt.string,
  action: kt.string,
  name: kt.string,
  region: kt.string,
  section: kt.string,
  component: kt.string,
  type: kt.string,
  text: kt.string
});
const Dm = ({ children: i }) => /* @__PURE__ */ Vl.jsx(Vl.Fragment, { children: i });
Dm.propTypes = {
  children: kt.oneOfType([
    kt.arrayOf(kt.node),
    kt.node,
    kt.string
  ])
};
var Uy = { exports: {} };
var gb;
function fw() {
  return gb || (gb = 1, (function(i) {
    (function() {
      var o = {}.hasOwnProperty;
      function s() {
        for (var h = "", T = 0; T < arguments.length; T++) {
          var A = arguments[T];
          A && (h = c(h, d(A)));
        }
        return h;
      }
      function d(h) {
        if (typeof h == "string" || typeof h == "number")
          return h;
        if (typeof h != "object")
          return "";
        if (Array.isArray(h))
          return s.apply(null, h);
        if (h.toString !== Object.prototype.toString && !h.toString.toString().includes("[native code]"))
          return h.toString();
        var T = "";
        for (var A in h)
          o.call(h, A) && h[A] && (T = c(T, A));
        return T;
      }
      function c(h, T) {
        return T ? h ? h + " " + T : h + T : h;
      }
      i.exports ? (s.default = s, i.exports = s) : window.classNames = s;
    })();
  })(Uy)), Uy.exports;
}
fw();
({
  ...Dm.propTypes
});
const Wv = ({ children: i, className: o = "container", ...s }) => /* @__PURE__ */ Vl.jsx("div", { className: o, ...s, children: /* @__PURE__ */ Vl.jsx("div", { className: "row", children: i }) });
Wv.propTypes = {
  children: Dm.propTypes.children
};
({
  ...Wv.propTypes
});
Dm.propTypes.children, kt.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Dm.propTypes.children;
function Jv({
  packageName: i = "",
  component: o = "",
  type: s = "",
  configuration: d = {}
}) {
  if (!i || !o) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[i] = {
    component: o,
    type: s,
    configuration: d
  };
}
function R0(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var yb = { exports: {} }, dm = {}, bb;
function dw() {
  if (bb) return dm;
  bb = 1;
  var i = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function s(d, c, h) {
    var T = null;
    if (h !== void 0 && (T = "" + h), c.key !== void 0 && (T = "" + c.key), "key" in c) {
      h = {};
      for (var A in c)
        A !== "key" && (h[A] = c[A]);
    } else h = c;
    return c = h.ref, {
      $$typeof: i,
      type: d,
      key: T,
      ref: c !== void 0 ? c : null,
      props: h
    };
  }
  return dm.Fragment = o, dm.jsx = s, dm.jsxs = s, dm;
}
var vb;
function pw() {
  return vb || (vb = 1, yb.exports = dw()), yb.exports;
}
var Y = pw(), Sb = { exports: {} }, jy, wb;
function mw() {
  if (wb) return jy;
  wb = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jy = i, jy;
}
var Hy, Tb;
function hw() {
  if (Tb) return Hy;
  Tb = 1;
  var i = /* @__PURE__ */ mw();
  function o() {
  }
  function s() {
  }
  return s.resetWarningCache = o, Hy = function() {
    function d(T, A, x, O, L, M) {
      if (M !== i) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
      }
    }
    d.isRequired = d;
    function c() {
      return d;
    }
    var h = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: c,
      element: d,
      elementType: d,
      instanceOf: c,
      node: d,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: s,
      resetWarningCache: o
    };
    return h.PropTypes = h, h;
  }, Hy;
}
var kb;
function gw() {
  return kb || (kb = 1, Sb.exports = /* @__PURE__ */ hw()()), Sb.exports;
}
var yw = /* @__PURE__ */ gw();
const m = /* @__PURE__ */ R0(yw), bw = () => {
  const [i, o] = Fo(null), [s, d] = Fo(!1), [c, h] = Fo(null), [T, A] = Fo("");
  return $o(() => {
    T && (() => {
      h(null), d(!0);
      try {
        fetch(T).then((x) => x.json()).then((x) => {
          o(x), d(!1);
        }).catch((x) => {
          h(x), d(!1);
        });
      } catch (x) {
        h(x);
      }
    })();
  }, [T]), [{ data: i, loading: s, error: c }, A];
}, vw = (i) => (i || []).join(" ");
function Eb(i, o) {
  (o == null || o > i.length) && (o = i.length);
  for (var s = 0, d = Array(o); s < o; s++) d[s] = i[s];
  return d;
}
function Sw(i) {
  if (Array.isArray(i)) return i;
}
function ww(i, o) {
  var s = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (s != null) {
    var d, c, h, T, A = [], x = !0, O = !1;
    try {
      if (h = (s = s.call(i)).next, o !== 0) for (; !(x = (d = h.call(s)).done) && (A.push(d.value), A.length !== o); x = !0) ;
    } catch (L) {
      O = !0, c = L;
    } finally {
      try {
        if (!x && s.return != null && (T = s.return(), Object(T) !== T)) return;
      } finally {
        if (O) throw c;
      }
    }
    return A;
  }
}
function Tw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kw(i, o) {
  return Sw(i) || ww(i, o) || Ew(i, o) || Tw();
}
function Ew(i, o) {
  if (i) {
    if (typeof i == "string") return Eb(i, o);
    var s = {}.toString.call(i).slice(8, -1);
    return s === "Object" && i.constructor && (s = i.constructor.name), s === "Map" || s === "Set" ? Array.from(i) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? Eb(i, o) : void 0;
  }
}
const e1 = Object.entries, xb = Object.setPrototypeOf, xw = Object.isFrozen, Aw = Object.getPrototypeOf, _w = Object.getOwnPropertyDescriptor;
let Gl = Object.freeze, Fl = Object.seal, wc = Object.create, t1 = typeof Reflect < "u" && Reflect, g0 = t1.apply, y0 = t1.construct;
Gl || (Gl = function(i) {
  return i;
});
Fl || (Fl = function(i) {
  return i;
});
g0 || (g0 = function(i, o) {
  for (var s = arguments.length, d = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++)
    d[c - 2] = arguments[c];
  return i.apply(o, d);
});
y0 || (y0 = function(i) {
  for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
    s[d - 1] = arguments[d];
  return new i(...s);
});
const pm = Cn(Array.prototype.forEach), zw = Cn(Array.prototype.lastIndexOf), Ab = Cn(Array.prototype.pop), yc = Cn(Array.prototype.push), Nw = Cn(Array.prototype.splice), Vo = Array.isArray, wm = Cn(String.prototype.toLowerCase), By = Cn(String.prototype.toString), _b = Cn(String.prototype.match), mm = Cn(String.prototype.replace), zb = Cn(String.prototype.indexOf), Ow = Cn(String.prototype.trim), Cw = Cn(Number.prototype.toString), Dw = Cn(Boolean.prototype.toString), Nb = typeof BigInt > "u" ? null : Cn(BigInt.prototype.toString), Ob = typeof Symbol > "u" ? null : Cn(Symbol.prototype.toString), ll = Cn(Object.prototype.hasOwnProperty), hm = Cn(Object.prototype.toString), Bl = Cn(RegExp.prototype.test), ec = Rw(TypeError);
function Cn(i) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var s = arguments.length, d = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
      d[c - 1] = arguments[c];
    return g0(i, o, d);
  };
}
function Rw(i) {
  return function() {
    for (var o = arguments.length, s = new Array(o), d = 0; d < o; d++)
      s[d] = arguments[d];
    return y0(i, s);
  };
}
function dt(i, o) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wm;
  if (xb && xb(i, null), !Vo(o))
    return i;
  let d = o.length;
  for (; d--; ) {
    let c = o[d];
    if (typeof c == "string") {
      const h = s(c);
      h !== c && (xw(o) || (o[d] = h), c = h);
    }
    i[c] = !0;
  }
  return i;
}
function Mw(i) {
  for (let o = 0; o < i.length; o++)
    ll(i, o) || (i[o] = null);
  return i;
}
function ba(i) {
  const o = wc(null);
  for (const d of e1(i)) {
    var s = kw(d, 2);
    const c = s[0], h = s[1];
    ll(i, c) && (Vo(h) ? o[c] = Mw(h) : h && typeof h == "object" && h.constructor === Object ? o[c] = ba(h) : o[c] = h);
  }
  return o;
}
function Lw(i) {
  switch (typeof i) {
    case "string":
      return i;
    case "number":
      return Cw(i);
    case "boolean":
      return Dw(i);
    case "bigint":
      return Nb ? Nb(i) : "0";
    case "symbol":
      return Ob ? Ob(i) : "Symbol()";
    case "undefined":
      return hm(i);
    case "function":
    case "object": {
      if (i === null)
        return hm(i);
      const o = i, s = yi(o, "toString");
      if (typeof s == "function") {
        const d = s(o);
        return typeof d == "string" ? d : hm(d);
      }
      return hm(i);
    }
    default:
      return hm(i);
  }
}
function yi(i, o) {
  for (; i !== null; ) {
    const d = _w(i, o);
    if (d) {
      if (d.get)
        return Cn(d.get);
      if (typeof d.value == "function")
        return Cn(d.value);
    }
    i = Aw(i);
  }
  function s() {
    return null;
  }
  return s;
}
function Uw(i) {
  try {
    return Bl(i, ""), !0;
  } catch {
    return !1;
  }
}
const Cb = Gl(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), qy = Gl(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Gy = Gl(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), jw = Gl(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Vy = Gl(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Hw = Gl(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Db = Gl(["#text"]), Rb = Gl(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Yy = Gl(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Mb = Gl(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), jm = Gl(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Bw = Fl(/{{[\w\W]*|^[\w\W]*}}/g), qw = Fl(/<%[\w\W]*|^[\w\W]*%>/g), Gw = Fl(/\${[\w\W]*/g), Vw = Fl(/^data-[\-\w.\u00B7-\uFFFF]+$/), Yw = Fl(/^aria-[\-\w]+$/), Lb = Fl(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Fw = Fl(/^(?:\w+script|data):/i), Xw = Fl(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Qw = Fl(/^html$/i), $w = Fl(/^[a-z][.\w]*(-[.\w]+)+$/i), Ub = Fl(/<[/\w!]/g), Iw = Fl(/<[/\w]/g), Kw = Fl(/<\/no(script|embed|frames)/i), Pw = Fl(/\/>/i), hi = {
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
}, Zw = function() {
  return typeof window > "u" ? null : window;
}, Ww = function(i, o) {
  if (typeof i != "object" || typeof i.createPolicy != "function")
    return null;
  let s = null;
  const d = "data-tt-policy-suffix";
  o && o.hasAttribute(d) && (s = o.getAttribute(d));
  const c = "dompurify" + (s ? "#" + s : "");
  try {
    return i.createPolicy(c, {
      createHTML(h) {
        return h;
      },
      createScriptURL(h) {
        return h;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + c + " could not be created."), null;
  }
}, jb = function() {
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
}, Ho = function(i, o, s, d) {
  return ll(i, o) && Vo(i[o]) ? dt(d.base ? ba(d.base) : {}, i[o], d.transform) : s;
};
function n1() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zw();
  const o = (b) => n1(b);
  if (o.version = "3.4.11", o.removed = [], !i || !i.document || i.document.nodeType !== hi.document || !i.Element)
    return o.isSupported = !1, o;
  let s = i.document;
  const d = s, c = d.currentScript;
  i.DocumentFragment;
  const h = i.HTMLTemplateElement, T = i.Node, A = i.Element, x = i.NodeFilter;
  i.NamedNodeMap === void 0 && (i.NamedNodeMap || i.MozNamedAttrMap), i.HTMLFormElement;
  const L = i.DOMParser, M = i.trustedTypes, D = A.prototype, te = yi(D, "cloneNode"), q = yi(D, "remove"), X = yi(D, "nextSibling"), W = yi(D, "childNodes"), ee = yi(D, "parentNode"), B = yi(D, "shadowRoot"), be = yi(D, "attributes"), P = T && T.prototype ? yi(T.prototype, "nodeType") : null, ne = T && T.prototype ? yi(T.prototype, "nodeName") : null;
  if (typeof h == "function") {
    const b = s.createElement("template");
    b.content && b.content.ownerDocument && (s = b.content.ownerDocument);
  }
  let G, V = "", Z, Ee = !1, He = 0;
  const qe = function() {
    if (He > 0)
      throw ec('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Be = function(b) {
    qe(), He++;
    try {
      return G.createHTML(b);
    } finally {
      He--;
    }
  }, _e = function(b) {
    qe(), He++;
    try {
      return G.createScriptURL(b);
    } finally {
      He--;
    }
  }, gt = function() {
    return Ee || (Z = Ww(M, c), Ee = !0), Z;
  }, $e = s, U = $e.implementation, R = $e.createNodeIterator, H = $e.createDocumentFragment, re = $e.getElementsByTagName, se = d.importNode;
  let ie = jb();
  o.isSupported = typeof e1 == "function" && typeof ee == "function" && U && U.createHTMLDocument !== void 0;
  const we = Bw, ue = qw, I = Gw, ge = Vw, yt = Yw, tt = Fw, fn = Xw, dn = $w;
  let nt = Lb, De = null;
  const Xl = dt({}, [...Cb, ...qy, ...Gy, ...Vy, ...Db]);
  let Re = null;
  const cr = dt({}, [...Rb, ...Yy, ...Mb, ...jm]);
  let ke = Object.seal(wc(null, {
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
  })), Dn = null, va = null;
  const yn = Object.seal(wc(null, {
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
  let fr = !0, Ql = !0, Sa = !1, wa = !0, bn = !1, $l = !0, Ye = !1, dr = !1, Ta = null, ka = null, al = !1, rl = !1, Il = !1, Ea = !1, vi = !0, il = !1;
  const pt = "user-content-";
  let $t = !0, rt = !1, ol = {}, It = null;
  const pr = dt({}, [
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
  let Kl = null;
  const Pl = dt({}, ["audio", "video", "img", "source", "image", "track"]);
  let ul = null;
  const vn = dt({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Rn = "http://www.w3.org/1998/Math/MathML", Sn = "http://www.w3.org/2000/svg", Kt = "http://www.w3.org/1999/xhtml";
  let Mn = Kt, Zl = !1, Ln = null;
  const Io = dt({}, [Rn, Sn, Kt], By), mr = Gl(["mi", "mo", "mn", "ms", "mtext"]);
  let xa = dt({}, mr);
  const hr = Gl(["annotation-xml"]);
  let Wl = dt({}, hr);
  const gr = dt({}, ["title", "style", "font", "a", "script"]);
  let sl = null;
  const Si = ["application/xhtml+xml", "text/html"], wn = "text/html";
  let oe = null, Fe = null;
  const cl = s.createElement("form"), Aa = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, yr = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Fe && Fe === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = ba(b), sl = // eslint-disable-next-line unicorn/prefer-includes
    Si.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? wn : b.PARSER_MEDIA_TYPE, oe = sl === "application/xhtml+xml" ? By : wm, De = Ho(b, "ALLOWED_TAGS", Xl, {
      transform: oe
    }), Re = Ho(b, "ALLOWED_ATTR", cr, {
      transform: oe
    }), Ln = Ho(b, "ALLOWED_NAMESPACES", Io, {
      transform: By
    }), ul = Ho(b, "ADD_URI_SAFE_ATTR", vn, {
      transform: oe,
      base: vn
    }), Kl = Ho(b, "ADD_DATA_URI_TAGS", Pl, {
      transform: oe,
      base: Pl
    }), It = Ho(b, "FORBID_CONTENTS", pr, {
      transform: oe
    }), Dn = Ho(b, "FORBID_TAGS", ba({}), {
      transform: oe
    }), va = Ho(b, "FORBID_ATTR", ba({}), {
      transform: oe
    }), ol = ll(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? ba(b.USE_PROFILES) : b.USE_PROFILES : !1, fr = b.ALLOW_ARIA_ATTR !== !1, Ql = b.ALLOW_DATA_ATTR !== !1, Sa = b.ALLOW_UNKNOWN_PROTOCOLS || !1, wa = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, bn = b.SAFE_FOR_TEMPLATES || !1, $l = b.SAFE_FOR_XML !== !1, Ye = b.WHOLE_DOCUMENT || !1, rl = b.RETURN_DOM || !1, Il = b.RETURN_DOM_FRAGMENT || !1, Ea = b.RETURN_TRUSTED_TYPE || !1, al = b.FORCE_BODY || !1, vi = b.SANITIZE_DOM !== !1, il = b.SANITIZE_NAMED_PROPS || !1, $t = b.KEEP_CONTENT !== !1, rt = b.IN_PLACE || !1, nt = Uw(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : Lb, Mn = typeof b.NAMESPACE == "string" ? b.NAMESPACE : Kt, xa = ll(b, "MATHML_TEXT_INTEGRATION_POINTS") && b.MATHML_TEXT_INTEGRATION_POINTS && typeof b.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ba(b.MATHML_TEXT_INTEGRATION_POINTS) : dt({}, mr), Wl = ll(b, "HTML_INTEGRATION_POINTS") && b.HTML_INTEGRATION_POINTS && typeof b.HTML_INTEGRATION_POINTS == "object" ? ba(b.HTML_INTEGRATION_POINTS) : dt({}, hr);
    const g = ll(b, "CUSTOM_ELEMENT_HANDLING") && b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING == "object" ? ba(b.CUSTOM_ELEMENT_HANDLING) : wc(null);
    if (ke = wc(null), ll(g, "tagNameCheck") && Aa(g.tagNameCheck) && (ke.tagNameCheck = g.tagNameCheck), ll(g, "attributeNameCheck") && Aa(g.attributeNameCheck) && (ke.attributeNameCheck = g.attributeNameCheck), ll(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (ke.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Fl(ke), bn && (Ql = !1), Il && (rl = !0), ol && (De = dt({}, Db), Re = wc(null), ol.html === !0 && (dt(De, Cb), dt(Re, Rb)), ol.svg === !0 && (dt(De, qy), dt(Re, Yy), dt(Re, jm)), ol.svgFilters === !0 && (dt(De, Gy), dt(Re, Yy), dt(Re, jm)), ol.mathMl === !0 && (dt(De, Vy), dt(Re, Mb), dt(Re, jm))), yn.tagCheck = null, yn.attributeCheck = null, ll(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? yn.tagCheck = b.ADD_TAGS : Vo(b.ADD_TAGS) && (De === Xl && (De = ba(De)), dt(De, b.ADD_TAGS, oe))), ll(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? yn.attributeCheck = b.ADD_ATTR : Vo(b.ADD_ATTR) && (Re === cr && (Re = ba(Re)), dt(Re, b.ADD_ATTR, oe))), ll(b, "ADD_URI_SAFE_ATTR") && Vo(b.ADD_URI_SAFE_ATTR) && dt(ul, b.ADD_URI_SAFE_ATTR, oe), ll(b, "FORBID_CONTENTS") && Vo(b.FORBID_CONTENTS) && (It === pr && (It = ba(It)), dt(It, b.FORBID_CONTENTS, oe)), ll(b, "ADD_FORBID_CONTENTS") && Vo(b.ADD_FORBID_CONTENTS) && (It === pr && (It = ba(It)), dt(It, b.ADD_FORBID_CONTENTS, oe)), $t && (De["#text"] = !0), Ye && dt(De, ["html", "head", "body"]), De.table && (dt(De, ["tbody"]), delete Dn.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ec('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ec('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const _ = G;
      G = b.TRUSTED_TYPES_POLICY;
      try {
        V = Be("");
      } catch (j) {
        throw G = _, j;
      }
    } else b.TRUSTED_TYPES_POLICY === null ? (G = void 0, V = "") : (G === void 0 && (G = gt()), G && typeof V == "string" && (V = Be("")));
    Gl && Gl(b), Fe = b;
  }, wi = dt({}, [...qy, ...Gy, ...jw]), br = dt({}, [...Vy, ...Hw]), Jl = function(b, g, _) {
    return g.namespaceURI === Kt ? b === "svg" : g.namespaceURI === Rn ? b === "svg" && (_ === "annotation-xml" || xa[_]) : !!wi[b];
  }, vr = function(b, g, _) {
    return g.namespaceURI === Kt ? b === "math" : g.namespaceURI === Sn ? b === "math" && Wl[_] : !!br[b];
  }, fl = function(b, g, _) {
    return g.namespaceURI === Sn && !Wl[_] || g.namespaceURI === Rn && !xa[_] ? !1 : !br[b] && (gr[b] || !wi[b]);
  }, dl = function(b) {
    let g = ee(b);
    (!g || !g.tagName) && (g = {
      namespaceURI: Mn,
      tagName: "template"
    });
    const _ = wm(b.tagName), j = wm(g.tagName);
    return Ln[b.namespaceURI] ? b.namespaceURI === Sn ? Jl(_, g, j) : b.namespaceURI === Rn ? vr(_, g, j) : b.namespaceURI === Kt ? fl(_, g, j) : !!(sl === "application/xhtml+xml" && Ln[b.namespaceURI]) : !1;
  }, Mt = function(b) {
    yc(o.removed, {
      element: b
    });
    try {
      ee(b).removeChild(b);
    } catch {
      if (q(b), !ee(b))
        throw ec("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Un = function(b) {
    const g = W(b);
    if (g) {
      const j = [];
      pm(g, ($) => {
        yc(j, $);
      }), pm(j, ($) => {
        try {
          q($);
        } catch {
        }
      });
    }
    const _ = be(b);
    if (_)
      for (let j = _.length - 1; j >= 0; --j) {
        const $ = _[j], me = $ && $.name;
        if (typeof me == "string")
          try {
            b.removeAttribute(me);
          } catch {
          }
      }
  }, Me = function(b, g) {
    try {
      yc(o.removed, {
        attribute: g.getAttributeNode(b),
        from: g
      });
    } catch {
      yc(o.removed, {
        attribute: null,
        from: g
      });
    }
    if (g.removeAttribute(b), b === "is")
      if (rl || Il)
        try {
          Mt(g);
        } catch {
        }
      else
        try {
          g.setAttribute(b, "");
        } catch {
        }
  }, Ti = function(b) {
    const g = be(b);
    if (g)
      for (let _ = g.length - 1; _ >= 0; --_) {
        const j = g[_], $ = j && j.name;
        if (!(typeof $ != "string" || Re[oe($)]))
          try {
            b.removeAttribute($);
          } catch {
          }
      }
  }, ki = function(b) {
    const g = [b];
    for (; g.length > 0; ) {
      const _ = g.pop();
      (P ? P(_) : _.nodeType) === hi.element && Ti(_);
      const j = W(_);
      if (j)
        for (let $ = j.length - 1; $ >= 0; --$)
          g.push(j[$]);
    }
  }, Tn = function(b) {
    let g = null, _ = null;
    if (al)
      b = "<remove></remove>" + b;
    else {
      const me = _b(b, /^[\r\n\t ]+/);
      _ = me && me[0];
    }
    sl === "application/xhtml+xml" && Mn === Kt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const j = G ? Be(b) : b;
    if (Mn === Kt)
      try {
        g = new L().parseFromString(j, sl);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = U.createDocument(Mn, "template", null);
      try {
        g.documentElement.innerHTML = Zl ? V : j;
      } catch {
      }
    }
    const $ = g.body || g.documentElement;
    return b && _ && $.insertBefore(s.createTextNode(_), $.childNodes[0] || null), Mn === Kt ? re.call(g, Ye ? "html" : "body")[0] : Ye ? g.documentElement : $;
  }, jn = function(b) {
    return R.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT | x.SHOW_PROCESSING_INSTRUCTION | x.SHOW_CDATA_SECTION,
      null
    );
  }, _a = function(b) {
    return b = mm(b, we, " "), b = mm(b, ue, " "), b = mm(b, I, " "), b;
  }, za = function(b) {
    var g;
    b.normalize();
    const _ = R.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      x.SHOW_TEXT | x.SHOW_COMMENT | x.SHOW_CDATA_SECTION | x.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let j = _.nextNode();
    for (; j; )
      j.data = _a(j.data), j = _.nextNode();
    const $ = (g = b.querySelectorAll) === null || g === void 0 ? void 0 : g.call(b, "template");
    $ && pm($, (me) => {
      pl(me.content) && za(me.content);
    });
  }, ea = function(b) {
    const g = ne ? ne(b) : null;
    return typeof g != "string" || oe(g) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    b.attributes !== be(b) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    b.nodeType !== P(b) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    b.childNodes !== W(b);
  }, pl = function(b) {
    if (!P || typeof b != "object" || b === null)
      return !1;
    try {
      return P(b) === hi.documentFragment;
    } catch {
      return !1;
    }
  }, kn = function(b) {
    if (!P || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof P(b) == "number";
    } catch {
      return !1;
    }
  };
  function xt(b, g, _) {
    b.length !== 0 && pm(b, (j) => {
      j.call(o, g, _, Fe);
    });
  }
  const pn = function(b, g) {
    return !!($l && b.hasChildNodes() && !kn(b.firstElementChild) && Bl(Ub, b.textContent) && Bl(Ub, b.innerHTML) || $l && b.namespaceURI === Kt && g === "style" && kn(b.firstElementChild) || b.nodeType === hi.processingInstruction || $l && b.nodeType === hi.comment && Bl(Iw, b.data));
  }, At = function(b, g) {
    if (!Dn[g] && Tr(g) && (ke.tagNameCheck instanceof RegExp && Bl(ke.tagNameCheck, g) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(g)))
      return !1;
    if ($t && !It[g]) {
      const _ = ee(b), j = W(b);
      if (j && _) {
        const $ = j.length;
        for (let me = $ - 1; me >= 0; --me) {
          const ye = rt ? j[me] : te(j[me], !0);
          _.insertBefore(ye, X(b));
        }
      }
    }
    return Mt(b), !0;
  }, Sr = function(b) {
    if (xt(ie.beforeSanitizeElements, b, null), ea(b))
      return Mt(b), !0;
    const g = oe(ne ? ne(b) : b.nodeName);
    if (xt(ie.uponSanitizeElement, b, {
      tagName: g,
      allowedTags: De
    }), pn(b, g))
      return Mt(b), !0;
    if (Dn[g] || !(yn.tagCheck instanceof Function && yn.tagCheck(g)) && !De[g])
      return At(b, g);
    if ((P ? P(b) : b.nodeType) === hi.element && !dl(b) || (g === "noscript" || g === "noembed" || g === "noframes") && Bl(Kw, b.innerHTML))
      return Mt(b), !0;
    if (bn && b.nodeType === hi.text) {
      const _ = _a(b.textContent);
      b.textContent !== _ && (yc(o.removed, {
        element: b.cloneNode()
      }), b.textContent = _);
    }
    return xt(ie.afterSanitizeElements, b, null), !1;
  }, Ei = function(b, g, _) {
    if (va[g] || vi && (g === "id" || g === "name") && (_ in s || _ in cl))
      return !1;
    const j = Re[g] || yn.attributeCheck instanceof Function && yn.attributeCheck(g, b);
    if (!(Ql && Bl(ge, g)) && !(fr && Bl(yt, g))) {
      if (j) {
        if (!ul[g] && !Bl(nt, mm(_, fn, "")) && !((g === "src" || g === "xlink:href" || g === "href") && b !== "script" && zb(_, "data:") === 0 && Kl[b]) && !(Sa && !Bl(tt, mm(_, fn, ""))) && _)
          return !1;
      } else if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        !(Tr(b) && (ke.tagNameCheck instanceof RegExp && Bl(ke.tagNameCheck, b) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(b)) && (ke.attributeNameCheck instanceof RegExp && Bl(ke.attributeNameCheck, g) || ke.attributeNameCheck instanceof Function && ke.attributeNameCheck(g, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        g === "is" && ke.allowCustomizedBuiltInElements && (ke.tagNameCheck instanceof RegExp && Bl(ke.tagNameCheck, _) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(_)))
      ) return !1;
    }
    return !0;
  }, wr = dt({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Tr = function(b) {
    return !wr[wm(b)] && Bl(dn, b);
  }, Na = function(b, g, _, j) {
    if (G && typeof M == "object" && typeof M.getAttributeType == "function" && !_)
      switch (M.getAttributeType(b, g)) {
        case "TrustedHTML":
          return Be(j);
        case "TrustedScriptURL":
          return _e(j);
      }
    return j;
  }, Ko = function(b, g, _, j) {
    try {
      _ ? b.setAttributeNS(_, g, j) : b.setAttribute(g, j), ea(b) ? Mt(b) : Ab(o.removed);
    } catch {
      Me(g, b);
    }
  }, Tt = function(b) {
    xt(ie.beforeSanitizeAttributes, b, null);
    const g = b.attributes;
    if (!g || ea(b))
      return;
    const _ = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Re,
      forceKeepAttr: void 0
    };
    let j = g.length;
    const $ = oe(b.nodeName);
    for (; j--; ) {
      const me = g[j], ye = me.name, mt = me.namespaceURI, lt = me.value, bt = oe(ye), un = lt;
      let _t = ye === "value" ? un : Ow(un);
      if (_.attrName = bt, _.attrValue = _t, _.keepAttr = !0, _.forceKeepAttr = void 0, xt(ie.uponSanitizeAttribute, b, _), _t = _.attrValue, il && (bt === "id" || bt === "name") && zb(_t, pt) !== 0 && (Me(ye, b), _t = pt + _t), $l && Bl(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, _t)) {
        Me(ye, b);
        continue;
      }
      if (bt === "attributename" && _b(_t, "href")) {
        Me(ye, b);
        continue;
      }
      if (!_.forceKeepAttr) {
        if (!_.keepAttr) {
          Me(ye, b);
          continue;
        }
        if (!wa && Bl(Pw, _t)) {
          Me(ye, b);
          continue;
        }
        if (bn && (_t = _a(_t)), !Ei($, bt, _t)) {
          Me(ye, b);
          continue;
        }
        _t = Na($, bt, mt, _t), _t !== un && Ko(b, ye, mt, _t);
      }
    }
    xt(ie.afterSanitizeAttributes, b, null);
  }, ml = function(b) {
    let g = null;
    const _ = jn(b);
    for (xt(ie.beforeSanitizeShadowDOM, b, null); g = _.nextNode(); )
      if (xt(ie.uponSanitizeShadowNode, g, null), Sr(g), Tt(g), pl(g.content) && ml(g.content), (P ? P(g) : g.nodeType) === hi.element) {
        const j = B(g);
        pl(j) && (Oa(j), ml(j));
      }
    xt(ie.afterSanitizeShadowDOM, b, null);
  }, Oa = function(b) {
    const g = [{
      node: b,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const _ = g.pop();
      if (_.shadow) {
        ml(_.shadow);
        continue;
      }
      const j = _.node, $ = (P ? P(j) : j.nodeType) === hi.element, me = W(j);
      if (me)
        for (let ye = me.length - 1; ye >= 0; --ye)
          g.push({
            node: me[ye],
            shadow: null
          });
      if ($) {
        const ye = ne ? ne(j) : null;
        if (typeof ye == "string" && oe(ye) === "template") {
          const mt = j.content;
          pl(mt) && g.push({
            node: mt,
            shadow: null
          });
        }
      }
      if ($) {
        const ye = B(j);
        pl(ye) && g.push({
          node: null,
          shadow: ye
        }, {
          node: ye,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(b) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, j = null, $ = null, me = null;
    if (Zl = !b, Zl && (b = "<!-->"), typeof b != "string" && !kn(b) && (b = Lw(b), typeof b != "string"))
      throw ec("dirty is not a string, aborting");
    if (!o.isSupported)
      return b;
    dr ? (De = Ta, Re = ka) : yr(g), (ie.uponSanitizeElement.length > 0 || ie.uponSanitizeAttribute.length > 0) && (De = ba(De)), ie.uponSanitizeAttribute.length > 0 && (Re = ba(Re)), o.removed = [];
    const ye = rt && typeof b != "string" && kn(b);
    if (ye) {
      const bt = ne ? ne(b) : b.nodeName;
      if (typeof bt == "string") {
        const un = oe(bt);
        if (!De[un] || Dn[un])
          throw ec("root node is forbidden and cannot be sanitized in-place");
      }
      if (ea(b))
        throw ec("root node is clobbered and cannot be sanitized in-place");
      try {
        Oa(b);
      } catch (un) {
        throw Un(b), un;
      }
    } else if (kn(b))
      _ = Tn("<!---->"), j = _.ownerDocument.importNode(b, !0), j.nodeType === hi.element && j.nodeName === "BODY" || j.nodeName === "HTML" ? _ = j : _.appendChild(j), Oa(j);
    else {
      if (!rl && !bn && !Ye && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return G && Ea ? Be(b) : b;
      if (_ = Tn(b), !_)
        return rl ? null : Ea ? V : "";
    }
    _ && al && Mt(_.firstChild);
    const mt = jn(ye ? b : _);
    try {
      for (; $ = mt.nextNode(); )
        Sr($), Tt($), pl($.content) && ml($.content);
    } catch (bt) {
      throw ye && Un(b), bt;
    }
    if (ye)
      return pm(o.removed, (bt) => {
        bt.element && ki(bt.element);
      }), bn && za(b), b;
    if (rl) {
      if (bn && za(_), Il)
        for (me = H.call(_.ownerDocument); _.firstChild; )
          me.appendChild(_.firstChild);
      else
        me = _;
      return (Re.shadowroot || Re.shadowrootmode) && (me = se.call(d, me, !0)), me;
    }
    let lt = Ye ? _.outerHTML : _.innerHTML;
    return Ye && De["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && Bl(Qw, _.ownerDocument.doctype.name) && (lt = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + lt), bn && (lt = _a(lt)), G && Ea ? Be(lt) : lt;
  }, o.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    yr(b), dr = !0, Ta = De, ka = Re;
  }, o.clearConfig = function() {
    Fe = null, dr = !1, Ta = null, ka = null, G = Z, V = "";
  }, o.isValidAttribute = function(b, g, _) {
    Fe || yr({});
    const j = oe(b), $ = oe(g);
    return Ei(j, $, _);
  }, o.addHook = function(b, g) {
    typeof g == "function" && ll(ie, b) && yc(ie[b], g);
  }, o.removeHook = function(b, g) {
    if (ll(ie, b)) {
      if (g !== void 0) {
        const _ = zw(ie[b], g);
        return _ === -1 ? void 0 : Nw(ie[b], _, 1)[0];
      }
      return Ab(ie[b]);
    }
  }, o.removeHooks = function(b) {
    ll(ie, b) && (ie[b] = []);
  }, o.removeAllHooks = function() {
    ie = jb();
  }, o;
}
var Hb = n1();
let Hm = null;
function Jw() {
  return Hm || (typeof window < "u" ? Hm = Hb(window) : Hm = Hb), Hm;
}
const Tc = (i) => ({ __html: Jw().sanitize(i) });
m.shape({
  event: m.string,
  action: m.string,
  name: m.string,
  region: m.string,
  section: m.string,
  component: m.string,
  type: m.string,
  text: m.string
});
const eT = ({
  event: i = "",
  action: o = "",
  name: s = "",
  type: d = "",
  section: c = "",
  text: h = "",
  region: T = "",
  component: A = "",
  eventCallback: x,
  eventTimeout: O
}) => {
  const { dataLayer: L } = window, M = {
    event: i.toLowerCase(),
    action: o.toLowerCase(),
    name: s.toLowerCase(),
    type: d.toLowerCase(),
    region: T.toLowerCase(),
    section: c.toLowerCase(),
    text: h.toLowerCase(),
    component: A.toLowerCase()
  };
  x && (M.eventCallback = x), O && (M.eventTimeout = O), L ? L.push(M) : x && x();
}, Rm = ({ children: i }) => /* @__PURE__ */ Y.jsx(Y.Fragment, { children: i });
Rm.propTypes = {
  children: m.oneOfType([
    m.arrayOf(m.node),
    m.node,
    m.string
  ])
};
var Bb = { exports: {} }, qb;
function tT() {
  return qb || (qb = 1, (function(i) {
    (function() {
      var o = {}.hasOwnProperty;
      function s() {
        for (var h = "", T = 0; T < arguments.length; T++) {
          var A = arguments[T];
          A && (h = c(h, d(A)));
        }
        return h;
      }
      function d(h) {
        if (typeof h == "string" || typeof h == "number")
          return h;
        if (typeof h != "object")
          return "";
        if (Array.isArray(h))
          return s.apply(null, h);
        if (h.toString !== Object.prototype.toString && !h.toString.toString().includes("[native code]"))
          return h.toString();
        var T = "";
        for (var A in h)
          o.call(h, A) && h[A] && (T = c(T, A));
        return T;
      }
      function c(h, T) {
        return T ? h ? h + " " + T : h + T : h;
      }
      i.exports ? (s.default = s, i.exports = s) : window.classNames = s;
    })();
  })(Bb)), Bb.exports;
}
var nT = tT();
const Uo = /* @__PURE__ */ R0(nT);
({
  ...Rm.propTypes
});
const l1 = ({ children: i, className: o = "container", ...s }) => /* @__PURE__ */ Y.jsx("div", { className: o, ...s, children: /* @__PURE__ */ Y.jsx("div", { className: "row", children: i }) });
l1.propTypes = {
  children: Rm.propTypes.children
};
({
  ...l1.propTypes
});
Rm.propTypes.children, m.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Rm.propTypes.children;
const lT = m.shape({
  url: m.string,
  altText: m.string,
  cssClass: m.arrayOf(m.string),
  size: m.oneOf(["small", "medium", "large"])
}), Fy = m.shape({
  text: m.string,
  maxWidth: m.string,
  cssClass: m.arrayOf(m.string),
  highlightColor: m.oneOf(["gold", "black"])
}), a1 = m.shape({
  color: m.oneOf(["gold", "maroon", "gray", "dark"]),
  content: m.shape({
    icon: m.arrayOf(m.string),
    header: m.string,
    body: m.string
  })
}), M0 = m.shape({
  text: m.string,
  name: m.string,
  event: m.string,
  action: m.string,
  type: m.string,
  region: m.string,
  section: m.string,
  component: m.string
}), aT = "staticMarkup";
function rT() {
  const i = Yv().indexOf(aT) > -1 ? !0 : void 0;
  return {
    isBootstrap: i,
    isReact: i ? void 0 : !0
  };
}
const oc = ({ gaData: i, prefix: o = "", children: s }) => {
  const { isReact: d } = rT(), { onClick: c, ...h } = s.props;
  if (d)
    return Et.cloneElement(s, {
      ...h,
      onClick: (x) => (i && i.event && i.action && eT(i), c ? c(x) : !0)
    });
  let T = "";
  ["input", "header", "header-input"].includes(o) && (T = `-${o}`);
  const A = {
    [`data-ga${T}`]: i.text,
    [`data-ga${T}-name`]: i.name,
    [`data-ga${T}-event`]: i.event,
    [`data-ga${T}-action`]: i.action,
    [`data-ga${T}-type`]: i.type,
    [`data-ga${T}-region`]: i.region,
    [`data-ga${T}-section`]: i.section,
    [`data-ga${T}-component`]: i.component
  };
  return Et.cloneElement(s, {
    ...h,
    onClick: c,
    ...A
  });
};
m.number, m.string, m.number, m.func, m.object;
m.arrayOf(a1).isRequired, m.number;
const Gb = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, L0 = ({
  label: i = "",
  cardTitle: o = "",
  gaData: s,
  ariaLabel: d,
  block: c,
  color: h = "gray",
  disabled: T,
  element: A = "button",
  href: x,
  icon: O,
  innerRef: L,
  onClick: M,
  size: D = "default",
  variant: te,
  classes: q,
  target: X = "_self",
  ...W
}) => {
  if (te) {
    const be = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, P = Uo("btn", be[te], {
      [`btn-${be[te]}-${h}`]: !0,
      "btn-medium": D === "medium",
      "btn-small": D === "small",
      "btn-large": D === "large" || D === "default",
      disabled: T
    });
    let ne = A;
    return x && A === "button" && (ne = "a"), /* @__PURE__ */ Y.jsx(
      oc,
      {
        gaData: {
          ...Gb,
          section: o,
          ...s,
          text: i
        },
        children: /* @__PURE__ */ Y.jsxs(
          ne,
          {
            type: ne === "button" && M ? "button" : void 0,
            ...W,
            className: Uo(q) || P,
            href: x,
            ref: L,
            onClick: M,
            "aria-label": d,
            target: ne === "a" ? X : null,
            disabled: T,
            children: [
              O && /* @__PURE__ */ Y.jsx("i", { className: `${O == null ? void 0 : O[0]} fa-${O == null ? void 0 : O[1]} me-1` }),
              i
            ]
          }
        )
      }
    );
  }
  const ee = Uo("btn", {
    [`btn-${h}`]: !0,
    "btn-md": D === "small",
    "btn-sm": D === "xsmall",
    "btn-block": c,
    disabled: T
  });
  let B = A;
  return x && A === "button" && (B = "a"), /* @__PURE__ */ Y.jsx(
    oc,
    {
      gaData: {
        ...Gb,
        section: o,
        // @deprecated - remove at some point
        ...s,
        text: i
      },
      children: /* @__PURE__ */ Y.jsxs(
        B,
        {
          type: B === "button" && M ? "button" : void 0,
          ...W,
          className: Uo(q) || ee,
          href: x,
          ref: L,
          onClick: M,
          "aria-label": d,
          target: B === "a" ? X : null,
          children: [
            O && /* @__PURE__ */ Y.jsx("i", { className: `${O == null ? void 0 : O[0]} fa-${O == null ? void 0 : O[1]} me-1` }),
            i
          ]
        }
      )
    }
  );
};
L0.propTypes = {
  /**
   * Button label
   */
  label: m.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: m.string,
  /**
   * Google Analytics event data
   */
  gaData: M0,
  /**
    ARIA label for accessibility
  */
  ariaLabel: m.string,
  /**
    Render button as a block-button?
  */
  block: m.bool,
  /**
    Button background color
  */
  color: m.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: m.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: m.oneOfType([
    m.func,
    m.string,
    m.shape({ $$typeof: m.symbol, render: m.func }),
    m.arrayOf(
      m.oneOfType([
        m.func,
        m.string,
        m.shape({ $$typeof: m.symbol, render: m.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: m.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: m.arrayOf(m.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: m.oneOfType([
    m.object,
    m.func,
    m.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: m.func,
  /**
    Button size. Legacy sizes (default, small, xsmall) or new sizes (large, medium, small) when used with variant prop.
  */
  size: m.oneOf(["default", "small", "xsmall", "large", "medium"]),
  /**
    Button style variant (borderless, outline, filled). When provided, uses new UDS button styles.
  */
  variant: m.oneOf(["borderless", "outline", "filled"]),
  /**
    Classes to add to button
  */
  classes: m.arrayOf(m.string),
  /**
   Link target type
   */
  target: m.oneOf(["_blank", "_self", "_top", "_parent"])
};
function iT(i) {
  var o = /* @__PURE__ */ Object.create(null);
  return function(s) {
    return o[s] === void 0 && (o[s] = i(s)), o[s];
  };
}
var oT = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, uT = /* @__PURE__ */ iT(
  function(i) {
    return oT.test(i) || i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && i.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ln = "-ms-", Am = "-moz-", St = "-webkit-", r1 = "comm", fh = "rule", U0 = "decl", sT = "@import", cT = "@namespace", i1 = "@keyframes", fT = "@layer", o1 = Math.abs, j0 = String.fromCharCode, b0 = Object.assign;
function dT(i, o) {
  return el(i, 0) ^ 45 ? (((o << 2 ^ el(i, 0)) << 2 ^ el(i, 1)) << 2 ^ el(i, 2)) << 2 ^ el(i, 3) : 0;
}
function u1(i) {
  return i.trim();
}
function Mo(i, o) {
  return (i = o.exec(i)) ? i[0] : i;
}
function We(i, o, s) {
  return i.replace(o, s);
}
function Qm(i, o, s) {
  return i.indexOf(o, s);
}
function el(i, o) {
  return i.charCodeAt(o) | 0;
}
function uc(i, o, s) {
  return i.slice(o, s);
}
function ci(i) {
  return i.length;
}
function s1(i) {
  return i.length;
}
function Tm(i, o) {
  return o.push(i), i;
}
function pT(i, o) {
  return i.map(o).join("");
}
function Vb(i, o) {
  return i.filter(function(s) {
    return !Mo(s, o);
  });
}
var dh = 1, kc = 1, c1 = 0, ur = 0, zn = 0, _c = "";
function ph(i, o, s, d, c, h, T, A) {
  return { value: i, root: o, parent: s, type: d, props: c, children: h, line: dh, column: kc, length: T, return: "", siblings: A };
}
function Bo(i, o) {
  return b0(ph("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, o);
}
function bc(i) {
  for (; i.root; )
    i = Bo(i.root, { children: [i] });
  Tm(i, i.siblings);
}
function mT() {
  return zn;
}
function hT() {
  return zn = ur > 0 ? el(_c, --ur) : 0, kc--, zn === 10 && (kc = 1, dh--), zn;
}
function di() {
  return zn = ur < c1 ? el(_c, ur++) : 0, kc++, zn === 10 && (kc = 1, dh++), zn;
}
function Xo() {
  return el(_c, ur);
}
function $m() {
  return ur;
}
function mh(i, o) {
  return uc(_c, i, o);
}
function Om(i) {
  switch (i) {
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
function gT(i) {
  return dh = kc = 1, c1 = ci(_c = i), ur = 0, [];
}
function yT(i) {
  return _c = "", i;
}
function Xy(i) {
  return u1(mh(ur - 1, v0(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function bT(i) {
  for (; (zn = Xo()) && zn < 33; )
    di();
  return Om(i) > 2 || Om(zn) > 3 ? "" : " ";
}
function vT(i, o) {
  for (; --o && di() && !(zn < 48 || zn > 102 || zn > 57 && zn < 65 || zn > 70 && zn < 97); )
    ;
  return mh(i, $m() + (o < 6 && Xo() == 32 && di() == 32));
}
function v0(i) {
  for (; di(); )
    switch (zn) {
      // ] ) " '
      case i:
        return ur;
      // " '
      case 34:
      case 39:
        i !== 34 && i !== 39 && v0(zn);
        break;
      // (
      case 40:
        i === 41 && v0(i);
        break;
      // \
      case 92:
        di();
        break;
    }
  return ur;
}
function ST(i, o) {
  for (; di() && i + zn !== 57 && !(i + zn === 84 && Xo() === 47); )
    ;
  return "/*" + mh(o, ur - 1) + "*" + j0(i === 47 ? i : di());
}
function wT(i) {
  for (; !Om(Xo()); )
    di();
  return mh(i, ur);
}
function TT(i) {
  return yT(Im("", null, null, null, [""], i = gT(i), 0, [0], i));
}
function Im(i, o, s, d, c, h, T, A, x) {
  for (var O = 0, L = 0, M = T, D = 0, te = 0, q = 0, X = 1, W = 1, ee = 1, B = 0, be = "", P = c, ne = h, G = d, V = be; W; )
    switch (q = B, B = di()) {
      // (
      case 40:
        if (q != 108 && el(V, M - 1) == 58) {
          Qm(V += We(Xy(B), "&", "&\f"), "&\f", o1(O ? A[O - 1] : 0)) != -1 && (ee = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        V += Xy(B);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        V += bT(q);
        break;
      // \
      case 92:
        V += vT($m() - 1, 7);
        continue;
      // /
      case 47:
        switch (Xo()) {
          case 42:
          case 47:
            Tm(kT(ST(di(), $m()), o, s, x), x), (Om(q || 1) == 5 || Om(Xo() || 1) == 5) && ci(V) && uc(V, -1, void 0) !== " " && (V += " ");
            break;
          default:
            V += "/";
        }
        break;
      // {
      case 123 * X:
        A[O++] = ci(V) * ee;
      // } ; \0
      case 125 * X:
      case 59:
      case 0:
        switch (B) {
          // \0 }
          case 0:
          case 125:
            W = 0;
          // ;
          case 59 + L:
            ee == -1 && (V = We(V, /\f/g, "")), te > 0 && (ci(V) - M || X === 0 && q === 47) && Tm(te > 32 ? Fb(V + ";", d, s, M - 1, x) : Fb(We(V, " ", "") + ";", d, s, M - 2, x), x);
            break;
          // @ ;
          case 59:
            V += ";";
          // { rule/at-rule
          default:
            if (Tm(G = Yb(V, o, s, O, L, c, A, be, P = [], ne = [], M, h), h), B === 123)
              if (L === 0)
                Im(V, o, G, G, P, h, M, A, ne);
              else {
                switch (D) {
                  // c(ontainer)
                  case 99:
                    if (el(V, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (el(V, 2) === 97) break;
                  default:
                    L = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                L ? Im(i, G, G, d && Tm(Yb(i, G, G, 0, 0, c, A, be, c, P = [], M, ne), ne), c, ne, M, A, d ? P : ne) : Im(V, G, G, G, [""], ne, 0, A, ne);
              }
        }
        O = L = te = 0, X = ee = 1, be = V = "", M = T;
        break;
      // :
      case 58:
        M = 1 + ci(V), te = q;
      default:
        if (X < 1) {
          if (B == 123)
            --X;
          else if (B == 125 && X++ == 0 && hT() == 125)
            continue;
        }
        switch (V += j0(B), B * X) {
          // &
          case 38:
            ee = L > 0 ? 1 : (V += "\f", -1);
            break;
          // ,
          case 44:
            A[O++] = (ci(V) - 1) * ee, ee = 1;
            break;
          // @
          case 64:
            Xo() === 45 && (V += Xy(di())), D = Xo(), L = M = ci(be = V += wT($m())), B++;
            break;
          // -
          case 45:
            q === 45 && ci(V) == 2 && (X = 0);
        }
    }
  return h;
}
function Yb(i, o, s, d, c, h, T, A, x, O, L, M) {
  for (var D = c - 1, te = c === 0 ? h : [""], q = s1(te), X = 0, W = 0, ee = 0; X < d; ++X)
    for (var B = 0, be = uc(i, D + 1, D = o1(W = T[X])), P = i; B < q; ++B)
      (P = u1(W > 0 ? te[B] + " " + be : We(be, /&\f/g, te[B]))) && (x[ee++] = P);
  return ph(i, o, s, c === 0 ? fh : A, x, O, L, M);
}
function kT(i, o, s, d) {
  return ph(i, o, s, r1, j0(mT()), uc(i, 2, -2), 0, d);
}
function Fb(i, o, s, d, c) {
  return ph(i, o, s, U0, uc(i, 0, d), uc(i, d + 1, -1), d, c);
}
function f1(i, o, s) {
  switch (dT(i, o)) {
    // color-adjust
    case 5103:
      return St + "print-" + i + i;
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
      return St + i + i;
    // mask-composite
    case 4855:
      return St + i.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + i;
    // tab-size
    case 4789:
      return Am + i + i;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return St + i + Am + i + ln + i + i;
    // writing-mode
    case 5936:
      switch (el(i, o + 11)) {
        // vertical-l(r)
        case 114:
          return St + i + ln + We(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        // vertical-r(l)
        case 108:
          return St + i + ln + We(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        // horizontal(-)tb
        case 45:
          return St + i + ln + We(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return St + i + ln + i + i;
    // order
    case 6165:
      return St + i + ln + "flex-" + i + i;
    // align-items
    case 5187:
      return St + i + We(i, /(\w+).+(:[^]+)/, St + "box-$1$2" + ln + "flex-$1$2") + i;
    // align-self
    case 5443:
      return St + i + ln + "flex-item-" + We(i, /flex-|-self/g, "") + (Mo(i, /flex-|baseline/) ? "" : ln + "grid-row-" + We(i, /flex-|-self/g, "")) + i;
    // align-content
    case 4675:
      return St + i + ln + "flex-line-pack" + We(i, /align-content|flex-|-self/g, "") + i;
    // flex-shrink
    case 5548:
      return St + i + ln + We(i, "shrink", "negative") + i;
    // flex-basis
    case 5292:
      return St + i + ln + We(i, "basis", "preferred-size") + i;
    // flex-grow
    case 6060:
      return St + "box-" + We(i, "-grow", "") + St + i + ln + We(i, "grow", "positive") + i;
    // transition
    case 4554:
      return St + We(i, /([^-])(transform)/g, "$1" + St + "$2") + i;
    // cursor
    case 6187:
      return We(We(We(i, /(zoom-|grab)/, St + "$1"), /(image-set)/, St + "$1"), i, "") + i;
    // background, background-image
    case 5495:
    case 3959:
      return We(i, /(image-set\([^]*)/, St + "$1$`$1");
    // justify-content
    case 4968:
      return We(We(i, /(.+:)(flex-)?(.*)/, St + "box-pack:$3" + ln + "flex-pack:$3"), /space-between/, "justify") + St + i + i;
    // justify-self
    case 4200:
      if (!Mo(i, /flex-|baseline/)) return ln + "grid-column-align" + uc(i, o) + i;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return ln + We(i, "template-", "") + i;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return s && s.some(function(d, c) {
        return o = c, Mo(d.props, /grid-\w+-end/);
      }) ? ~Qm(i + (s = s[o].value), "span", 0) ? i : ln + We(i, "-start", "") + i + ln + "grid-row-span:" + (~Qm(s, "span", 0) ? Mo(s, /\d+/) : +Mo(s, /\d+/) - +Mo(i, /\d+/)) + ";" : ln + We(i, "-start", "") + i;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return s && s.some(function(d) {
        return Mo(d.props, /grid-\w+-start/);
      }) ? i : ln + We(We(i, "-end", "-span"), "span ", "") + i;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return We(i, /(.+)-inline(.+)/, St + "$1$2") + i;
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
      if (ci(i) - 1 - o > 6)
        switch (el(i, o + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (el(i, o + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return We(i, /(.+:)(.+)-([^]+)/, "$1" + St + "$2-$3$1" + Am + (el(i, o + 3) == 108 ? "$3" : "$2-$3")) + i;
          // (s)tretch
          case 115:
            return ~Qm(i, "stretch", 0) ? f1(We(i, "stretch", "fill-available"), o, s) + i : i;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return We(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(d, c, h, T, A, x, O) {
        return ln + c + ":" + h + O + (T ? ln + c + "-span:" + (A ? x : +x - +h) + O : "") + i;
      });
    // position: sticky
    case 4949:
      if (el(i, o + 6) === 121)
        return We(i, ":", ":" + St) + i;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (el(i, el(i, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return We(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + St + (el(i, 14) === 45 ? "inline-" : "") + "box$3$1" + St + "$2$3$1" + ln + "$2box$3") + i;
        // (inline-)?gri(d)
        case 100:
          return We(i, ":", ":" + ln) + i;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return We(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function ah(i, o) {
  for (var s = "", d = 0; d < i.length; d++)
    s += o(i[d], d, i, o) || "";
  return s;
}
function ET(i, o, s, d) {
  switch (i.type) {
    case fT:
      if (i.children.length) break;
    case sT:
    case cT:
    case U0:
      return i.return = i.return || i.value;
    case r1:
      return "";
    case i1:
      return i.return = i.value + "{" + ah(i.children, d) + "}";
    case fh:
      if (!ci(i.value = i.props.join(","))) return "";
  }
  return ci(s = ah(i.children, d)) ? i.return = i.value + "{" + s + "}" : "";
}
function xT(i) {
  var o = s1(i);
  return function(s, d, c, h) {
    for (var T = "", A = 0; A < o; A++)
      T += i[A](s, d, c, h) || "";
    return T;
  };
}
function AT(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function _T(i, o, s, d) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case U0:
        i.return = f1(i.value, i.length, s);
        return;
      case i1:
        return ah([Bo(i, { value: We(i.value, "@", "@" + St) })], d);
      case fh:
        if (i.length)
          return pT(s = i.props, function(c) {
            switch (Mo(c, d = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                bc(Bo(i, { props: [We(c, /:(read-\w+)/, ":" + Am + "$1")] })), bc(Bo(i, { props: [c] })), b0(i, { props: Vb(s, d) });
                break;
              // :placeholder
              case "::placeholder":
                bc(Bo(i, { props: [We(c, /:(plac\w+)/, ":" + St + "input-$1")] })), bc(Bo(i, { props: [We(c, /:(plac\w+)/, ":" + Am + "$1")] })), bc(Bo(i, { props: [We(c, /:(plac\w+)/, ln + "input-$1")] })), bc(Bo(i, { props: [c] })), b0(i, { props: Vb(s, d) });
                break;
            }
            return "";
          });
    }
}
var Lt = { env: { NODE_ENV: "production" } }, Qy, $y;
const sc = typeof Lt < "u" && Lt.env !== void 0 && (Lt.env.REACT_APP_SC_ATTR || Lt.env.SC_ATTR) || "data-styled", d1 = "active", p1 = "data-styled-version", hh = "6.4.2", H0 = `/*!sc*/
`, _m = typeof window < "u" && typeof document < "u";
function Xb(i) {
  if (typeof Lt < "u" && Lt.env !== void 0) {
    const o = Lt.env[i];
    if (o !== void 0 && o !== "") return o !== "false";
  }
}
const zT = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : ($y = (Qy = Xb("REACT_APP_SC_DISABLE_SPEEDY")) !== null && Qy !== void 0 ? Qy : Xb("SC_DISABLE_SPEEDY")) !== null && $y !== void 0 ? $y : typeof Lt < "u" && Lt.env !== void 0 && Lt.env.NODE_ENV !== "production"), NT = "sc-keyframes-", OT = Lt.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Mm(i, ...o) {
  return Lt.env.NODE_ENV === "production" ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${i} for more information.${o.length > 0 ? ` Args: ${o.join(", ")}` : ""}`) : new Error((function(...s) {
    let d = s[0];
    const c = [];
    for (let h = 1, T = s.length; h < T; h += 1) c.push(s[h]);
    return c.forEach((h) => {
      d = d.replace(/%[a-z]/, h);
    }), d;
  })(OT[i], ...o).trim());
}
const CT = 1 << 30;
let Km = /* @__PURE__ */ new Map(), rh = /* @__PURE__ */ new Map(), Pm = 1;
const Bm = (i) => {
  if (Km.has(i)) return Km.get(i);
  for (; rh.has(Pm); ) Pm++;
  const o = Pm++;
  if (Lt.env.NODE_ENV !== "production" && ((0 | o) < 0 || o > CT)) throw Mm(16, `${o}`);
  return Km.set(i, o), rh.set(o, i), o;
}, DT = (i) => rh.get(i), RT = (i, o) => {
  Pm = o + 1, Km.set(i, o), rh.set(o, i);
}, Qb = /invalid hook call/i, qm = /* @__PURE__ */ new Set(), MT = (i, o) => {
  if (Lt.env.NODE_ENV !== "production") {
    const s = `The component ${i}${o ? ` with the id of "${o}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, d = console.error;
    try {
      let c = !0;
      console.error = (h, ...T) => {
        Qb.test(h) ? (c = !1, qm.delete(s)) : d(h, ...T);
      }, typeof Et.useState == "function" && Et.useState(null), c && !qm.has(s) && (console.warn(s), qm.add(s));
    } catch (c) {
      Qb.test(c.message) && qm.delete(s);
    } finally {
      console.error = d;
    }
  }
}, B0 = Object.freeze([]), Ec = Object.freeze({});
function LT(i, o, s = Ec) {
  return i.theme !== s.theme && i.theme || o || s.theme;
}
const UT = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, jT = /(^-|-$)/g;
function m1(i) {
  return i.replace(UT, "-").replace(jT, "");
}
const HT = /(a)(d)/gi, $b = (i) => String.fromCharCode(i + (i > 25 ? 39 : 97));
function h1(i) {
  let o, s = "";
  for (o = Math.abs(i); o > 52; o = o / 52 | 0) s = $b(o % 52) + s;
  return ($b(o % 52) + s).replace(HT, "$1-$2");
}
const S0 = 5381, lc = (i, o) => {
  let s = o.length;
  for (; s; ) i = 33 * i ^ o.charCodeAt(--s);
  return i;
}, g1 = (i) => lc(S0, i);
function BT(i) {
  return h1(g1(i) >>> 0);
}
function q0(i) {
  return Lt.env.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Zm(i) {
  return typeof i == "string" && (Lt.env.NODE_ENV === "production" || i.charAt(0) === i.charAt(0).toLowerCase());
}
function qT(i) {
  return Zm(i) ? `styled.${i}` : `Styled(${q0(i)})`;
}
const y1 = Symbol.for("react.memo"), GT = Symbol.for("react.forward_ref"), VT = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, YT = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, b1 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, FT = { [GT]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [y1]: b1 };
function Ib(i) {
  return ("type" in (o = i) && o.type.$$typeof) === y1 ? b1 : "$$typeof" in i ? FT[i.$$typeof] : VT;
  var o;
}
const XT = Object.defineProperty, QT = Object.getOwnPropertyNames, $T = Object.getOwnPropertySymbols, IT = Object.getOwnPropertyDescriptor, KT = Object.getPrototypeOf, PT = Object.prototype;
function v1(i, o, s) {
  if (typeof o != "string") {
    const d = KT(o);
    d && d !== PT && v1(i, d, s);
    const c = QT(o).concat($T(o)), h = Ib(i), T = Ib(o);
    for (let A = 0; A < c.length; ++A) {
      const x = c[A];
      if (!(x in YT || s && s[x] || T && x in T || h && x in h)) {
        const O = IT(o, x);
        try {
          XT(i, x, O);
        } catch {
        }
      }
    }
  }
  return i;
}
function gh(i) {
  return typeof i == "function";
}
const ZT = Symbol.for("react.forward_ref");
function S1(i) {
  return i != null && (typeof i == "object" || typeof i == "function") && i.$$typeof === ZT && "styledComponentId" in i;
}
function km(i, o) {
  return i && o ? i + " " + o : i || o || "";
}
function Kb(i, o) {
  return i.join("");
}
function cc(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function w0(i, o, s = !1) {
  if (!s && !cc(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o)) for (let d = 0; d < o.length; d++) i[d] = w0(i[d], o[d]);
  else if (cc(o)) for (const d in o) i[d] = w0(i[d], o[d]);
  return i;
}
function w1(i, o) {
  Object.defineProperty(i, "toString", { value: o });
}
const WT = class {
  constructor(i) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = i, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(i) {
    if (i === this._cGroup) return this._cIndex;
    let o = this._cIndex;
    if (i > this._cGroup) for (let s = this._cGroup; s < i; s++) o += this.groupSizes[s];
    else for (let s = this._cGroup - 1; s >= i; s--) o -= this.groupSizes[s];
    return this._cGroup = i, this._cIndex = o, o;
  }
  insertRules(i, o) {
    if (i >= this.groupSizes.length) {
      const c = this.groupSizes, h = c.length;
      let T = h;
      for (; i >= T; ) if (T <<= 1, T < 0) throw Mm(16, `${i}`);
      this.groupSizes = new Uint32Array(T), this.groupSizes.set(c), this.length = T;
      for (let A = h; A < T; A++) this.groupSizes[A] = 0;
    }
    let s = this.indexOfGroup(i + 1), d = 0;
    for (let c = 0, h = o.length; c < h; c++) this.tag.insertRule(s, o[c]) && (this.groupSizes[i]++, s++, d++);
    d > 0 && this._cGroup > i && (this._cIndex += d);
  }
  clearGroup(i) {
    if (i < this.length) {
      const o = this.groupSizes[i], s = this.indexOfGroup(i), d = s + o;
      this.groupSizes[i] = 0;
      for (let c = s; c < d; c++) this.tag.deleteRule(s);
      o > 0 && this._cGroup > i && (this._cIndex -= o);
    }
  }
  getGroup(i) {
    let o = "";
    if (i >= this.length || this.groupSizes[i] === 0) return o;
    const s = this.groupSizes[i], d = this.indexOfGroup(i), c = d + s;
    for (let h = d; h < c; h++) o += this.tag.getRule(h) + H0;
    return o;
  }
}, JT = `style[${sc}][${p1}="${hh}"]`, ek = new RegExp(`^${sc}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), Pb = (i) => typeof ShadowRoot < "u" && i instanceof ShadowRoot || "host" in i && i.nodeType === 11, T0 = (i) => {
  if (!i) return document;
  if (Pb(i)) return i;
  if ("getRootNode" in i) {
    const o = i.getRootNode();
    if (Pb(o)) return o;
  }
  return document;
}, tk = (i, o, s) => {
  const d = s.split(",");
  let c;
  for (let h = 0, T = d.length; h < T; h++) (c = d[h]) && i.registerName(o, c);
}, nk = (i, o) => {
  var s;
  const d = ((s = o.textContent) !== null && s !== void 0 ? s : "").split(H0), c = [];
  for (let h = 0, T = d.length; h < T; h++) {
    const A = d[h].trim();
    if (!A) continue;
    const x = A.match(ek);
    if (x) {
      const O = 0 | parseInt(x[1], 10), L = x[2];
      O !== 0 && (RT(L, O), tk(i, L, x[3]), i.getTag().insertRules(O, c)), c.length = 0;
    } else c.push(A);
  }
}, Iy = (i) => {
  const o = T0(i.options.target).querySelectorAll(JT);
  for (let s = 0, d = o.length; s < d; s++) {
    const c = o[s];
    c && c.getAttribute(sc) !== d1 && (nk(i, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
let gm = !1;
function lk() {
  if (gm !== !1) return gm;
  if (typeof document < "u") {
    const i = document.head.querySelector('meta[property="csp-nonce"]');
    if (i) return gm = i.nonce || i.getAttribute("content") || void 0;
    const o = document.head.querySelector('meta[name="sc-nonce"]');
    if (o) return gm = o.getAttribute("content") || void 0;
  }
  return gm = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const T1 = (i, o) => {
  const s = document.head, d = i || s, c = document.createElement("style"), h = ((x) => {
    const O = Array.from(x.querySelectorAll(`style[${sc}]`));
    return O[O.length - 1];
  })(d), T = h !== void 0 ? h.nextSibling : null;
  c.setAttribute(sc, d1), c.setAttribute(p1, hh);
  const A = o || lk();
  return A && c.setAttribute("nonce", A), d.insertBefore(c, T), c;
}, ak = class {
  constructor(i, o) {
    this.element = T1(i, o), this.element.appendChild(document.createTextNode("")), this.sheet = ((s) => {
      var d;
      if (s.sheet) return s.sheet;
      const c = (d = s.getRootNode().styleSheets) !== null && d !== void 0 ? d : document.styleSheets;
      for (let h = 0, T = c.length; h < T; h++) {
        const A = c[h];
        if (A.ownerNode === s) return A;
      }
      throw Mm(17);
    })(this.element), this.length = 0;
  }
  insertRule(i, o) {
    try {
      return this.sheet.insertRule(o, i), this.length++, !0;
    } catch {
      return !1;
    }
  }
  deleteRule(i) {
    this.sheet.deleteRule(i), this.length--;
  }
  getRule(i) {
    const o = this.sheet.cssRules[i];
    return o && o.cssText ? o.cssText : "";
  }
}, rk = class {
  constructor(i, o) {
    this.element = T1(i, o), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(i, o) {
    if (i <= this.length && i >= 0) {
      const s = document.createTextNode(o);
      return this.element.insertBefore(s, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }
  deleteRule(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }
  getRule(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }
};
let Zb = _m;
const ik = { isServer: !_m, useCSSOMInjection: !zT };
class yh {
  static registerId(o) {
    return Bm(o);
  }
  constructor(o = Ec, s = {}, d) {
    this.options = Object.assign(Object.assign({}, ik), o), this.gs = s, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(d), this.server = !!o.isServer, !this.server && _m && Zb && (Zb = !1, Iy(this)), w1(this, () => ((c) => {
      const h = c.getTag(), { length: T } = h;
      let A = "";
      for (let x = 0; x < T; x++) {
        const O = DT(x);
        if (O === void 0) continue;
        const L = c.names.get(O);
        if (L === void 0 || !L.size) continue;
        const M = h.getGroup(x);
        if (M.length === 0) continue;
        const D = sc + ".g" + x + '[id="' + O + '"]';
        let te = "";
        for (const q of L) q.length > 0 && (te += q + ",");
        A += M + D + '{content:"' + te + '"}' + H0;
      }
      return A;
    })(this));
  }
  rehydrate() {
    !this.server && _m && Iy(this);
  }
  reconstructWithOptions(o, s = !0) {
    const d = new yh(Object.assign(Object.assign({}, this.options), o), this.gs, s && this.names || void 0);
    return d.keyframeIds = new Set(this.keyframeIds), !this.server && _m && o.target !== this.options.target && T0(this.options.target) !== T0(o.target) && Iy(d), d;
  }
  allocateGSInstance(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (o = (({ useCSSOMInjection: s, target: d, nonce: c }) => s ? new ak(d, c) : new rk(d, c))(this.options), new WT(o)));
    var o;
  }
  hasNameForId(o, s) {
    var d, c;
    return (c = (d = this.names.get(o)) === null || d === void 0 ? void 0 : d.has(s)) !== null && c !== void 0 && c;
  }
  registerName(o, s) {
    Bm(o), o.startsWith(NT) && this.keyframeIds.add(o);
    const d = this.names.get(o);
    d ? d.add(s) : this.names.set(o, /* @__PURE__ */ new Set([s]));
  }
  insertRules(o, s, d) {
    this.registerName(o, s), this.getTag().insertRules(Bm(o), d);
  }
  clearNames(o) {
    this.names.has(o) && this.names.get(o).clear();
  }
  clearRules(o) {
    this.getTag().clearGroup(Bm(o)), this.clearNames(o);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const k1 = /* @__PURE__ */ new WeakSet(), ok = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function uk(i, o) {
  return o == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || i in ok || i.startsWith("--") ? String(o).trim() : o + "px";
}
const tc = 47;
function Wb(i) {
  if (i.charCodeAt(0) === 45 && i.charCodeAt(1) === 45) return i;
  let o = "";
  for (let s = 0; s < i.length; s++) {
    const d = i.charCodeAt(s);
    o += d >= 65 && d <= 90 ? "-" + String.fromCharCode(d + 32) : i[s];
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
const sk = Symbol.for("sc-keyframes");
function k0(i) {
  return typeof i == "object" && i !== null && sk in i;
}
function E1(i) {
  return gh(i) && !(i.prototype && i.prototype.isReactComponent);
}
const x1 = (i) => i == null || i === !1 || i === "", ck = Symbol.for("react.client.reference");
function Jb(i) {
  return i.$$typeof === ck;
}
function ev(i) {
  const o = i.$$id, s = (o && o.includes("#") ? o.split("#").pop() : o) || i.name || "unknown";
  console.warn(`Interpolating a client component (${s}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function A1(i, o) {
  for (const s in i) {
    const d = i[s];
    i.hasOwnProperty(s) && !x1(d) && (Array.isArray(d) && k1.has(d) || gh(d) ? o.push(Wb(s) + ":", d, ";") : cc(d) ? (o.push(s + " {"), A1(d, o), o.push("}")) : o.push(Wb(s) + ": " + uk(s, d) + ";"));
  }
}
function ac(i, o, s, d, c = []) {
  if (x1(i)) return c;
  const h = typeof i;
  if (h === "string") return c.push(i), c;
  if (h === "function") {
    if (Jb(i)) return Lt.env.NODE_ENV !== "production" && ev(i), c;
    if (E1(i) && o) {
      const T = i(o);
      return Lt.env.NODE_ENV === "production" || typeof T != "object" || Array.isArray(T) || k0(T) || cc(T) || T === null || console.error(`${q0(i)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), ac(T, o, s, d, c);
    }
    return c.push(i), c;
  }
  if (Array.isArray(i)) {
    for (let T = 0; T < i.length; T++) ac(i[T], o, s, d, c);
    return c;
  }
  return S1(i) ? (c.push(`.${i.styledComponentId}`), c) : k0(i) ? (s ? (i.inject(s, d), c.push(i.getName(d))) : c.push(i), c) : Jb(i) ? (Lt.env.NODE_ENV !== "production" && ev(i), c) : cc(i) ? i.toString !== Object.prototype.toString ? (c.push(i.toString()), c) : (A1(i, c), c) : (c.push(i.toString()), c);
}
const fk = g1(hh);
class dk {
  constructor(o, s, d) {
    this.rules = o, this.componentId = s, this.baseHash = lc(fk, s), this.baseStyle = d, yh.registerId(s);
  }
  generateAndInjectStyles(o, s, d) {
    let c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, s, d) : "";
    {
      let h = "";
      for (let T = 0; T < this.rules.length; T++) {
        const A = this.rules[T];
        if (typeof A == "string") h += A;
        else if (A) if (E1(A)) {
          const x = A(o);
          typeof x == "string" ? h += x : x != null && x !== !1 && (Lt.env.NODE_ENV === "production" || typeof x != "object" || Array.isArray(x) || k0(x) || cc(x) || console.error(`${q0(A)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), h += Kb(ac(x, o, s, d)));
        } else h += Kb(ac(A, o, s, d));
      }
      if (h) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const T = d.hash ? d.hash + h : h;
        let A = this.dynamicNameCache.get(T);
        if (!A) {
          if (A = h1(lc(lc(this.baseHash, d.hash), h) >>> 0), this.dynamicNameCache.size >= 200) {
            const x = this.dynamicNameCache.keys().next().value;
            x !== void 0 && this.dynamicNameCache.delete(x);
          }
          this.dynamicNameCache.set(T, A);
        }
        if (!s.hasNameForId(this.componentId, A)) {
          const x = d(h, "." + A, void 0, this.componentId);
          s.insertRules(this.componentId, A, x);
        }
        c = km(c, A);
      }
    }
    return c;
  }
}
const pk = /&/g;
function _1(i, o) {
  let s = 0;
  for (; --o >= 0 && i.charCodeAt(o) === 92; ) s++;
  return !(1 & ~s);
}
function Ky(i) {
  const o = i.length;
  let s = "", d = 0, c = 0, h = 0, T = !1, A = !1;
  for (let x = 0; x < o; x++) {
    const O = i.charCodeAt(x);
    if (h !== 0 || T || O !== tc || i.charCodeAt(x + 1) !== 42) if (T) O === 42 && i.charCodeAt(x + 1) === tc && (T = !1, x++);
    else if (O !== 34 && O !== 39 || _1(i, x)) {
      if (h === 0) if (O === 123) c++;
      else if (O === 125) {
        if (c--, c < 0) {
          A = !0;
          let L = x + 1;
          for (; L < o; ) {
            const M = i.charCodeAt(L);
            if (M === 59 || M === 10) break;
            L++;
          }
          L < o && i.charCodeAt(L) === 59 && L++, c = 0, x = L - 1, d = L;
          continue;
        }
        c === 0 && (s += i.substring(d, x + 1), d = x + 1);
      } else O === 59 && c === 0 && (s += i.substring(d, x + 1), d = x + 1);
    } else h === 0 ? h = O : h === O && (h = 0);
    else T = !0, x++;
  }
  return A || c !== 0 || h !== 0 ? (d < o && c === 0 && h === 0 && (s += i.substring(d)), s) : i;
}
function z1(i, o) {
  const s = o + " ", d = "," + s;
  for (let c = 0; c < i.length; c++) {
    const h = i[c];
    if (h.type === "rule") {
      h.value = (s + h.value).replaceAll(",", d);
      const T = h.props, A = [];
      for (let x = 0; x < T.length; x++) A[x] = s + T[x];
      h.props = A;
    }
    Array.isArray(h.children) && h.type !== "@keyframes" && z1(h.children, o);
  }
  return i;
}
function mk({ options: i = Ec, plugins: o = B0 } = Ec) {
  let s, d, c;
  const h = (D, te, q) => q.startsWith(d) && q.endsWith(d) && q.replaceAll(d, "").length > 0 ? `.${s}` : D, T = o.slice();
  T.push((D) => {
    D.type === fh && D.value.includes("&") && (c || (c = new RegExp(`\\${d}\\b`, "g")), D.props[0] = D.props[0].replace(pk, d).replace(c, h));
  }), i.prefix && T.push(_T), T.push(ET);
  let A = [];
  const x = xT(T.concat(AT((D) => A.push(D)))), O = (D, te = "", q = "", X = "&") => {
    s = X, d = te, c = void 0;
    const W = (function(B) {
      const be = B.indexOf("//") !== -1, P = B.indexOf("}") !== -1;
      if (!be && !P) return B;
      if (!be) return Ky(B);
      const ne = B.length;
      let G = "", V = 0, Z = 0, Ee = 0, He = 0, qe = 0, Be = !1;
      for (; Z < ne; ) {
        const _e = B.charCodeAt(Z);
        if (_e !== 34 && _e !== 39 || _1(B, Z)) if (Ee === 0) if (_e === tc && Z + 1 < ne && B.charCodeAt(Z + 1) === 42) {
          for (Z += 2; Z + 1 < ne && (B.charCodeAt(Z) !== 42 || B.charCodeAt(Z + 1) !== tc); ) Z++;
          Z += 2;
        } else if (_e !== 40) if (_e !== 41) if (He > 0) Z++;
        else if (_e === 42 && Z + 1 < ne && B.charCodeAt(Z + 1) === tc) G += B.substring(V, Z), Z += 2, V = Z, Be = !0;
        else if (_e === tc && Z + 1 < ne && B.charCodeAt(Z + 1) === tc) {
          for (G += B.substring(V, Z); Z < ne && B.charCodeAt(Z) !== 10; ) Z++;
          V = Z, Be = !0;
        } else _e === 123 ? qe++ : _e === 125 && qe--, Z++;
        else He > 0 && He--, Z++;
        else He++, Z++;
        else Z++;
        else Ee === 0 ? Ee = _e : Ee === _e && (Ee = 0), Z++;
      }
      return Be ? (V < ne && (G += B.substring(V)), qe === 0 ? G : Ky(G)) : qe === 0 ? B : Ky(B);
    })(D);
    let ee = TT(q || te ? q + " " + te + " { " + W + " }" : W);
    return i.namespace && (ee = z1(ee, i.namespace)), A = [], ah(ee, x), A;
  }, L = i;
  let M = S0;
  for (let D = 0; D < o.length; D++) o[D].name || Mm(15), M = lc(M, o[D].name);
  return L != null && L.namespace && (M = lc(M, L.namespace)), L != null && L.prefix && (M = lc(M, "p")), O.hash = M !== S0 ? M.toString() : "", O;
}
const hk = new yh(), gk = mk(), N1 = Et.createContext({ shouldForwardProp: void 0, styleSheet: hk, stylis: gk, stylisPlugins: void 0 });
N1.Consumer;
function yk() {
  return Et.useContext(N1);
}
const O1 = Et.createContext(void 0);
O1.Consumer;
const tv = Object.prototype.hasOwnProperty, Py = {};
function bk(i, o) {
  const s = typeof i != "string" ? "sc" : m1(i);
  Py[s] = (Py[s] || 0) + 1;
  const d = s + "-" + BT(hh + s + Py[s]);
  return o ? o + "-" + d : d;
}
let Zy;
function vk(i, o, s) {
  const d = S1(i), c = i, h = !Zm(i), { attrs: T = B0, componentId: A = bk(o.displayName, o.parentComponentId), displayName: x = qT(i) } = o, O = o.displayName && o.componentId ? m1(o.displayName) + "-" + o.componentId : o.componentId || A, L = d && c.attrs ? c.attrs.concat(T).filter(Boolean) : T;
  let { shouldForwardProp: M } = o;
  if (d && c.shouldForwardProp) {
    const X = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      const W = o.shouldForwardProp;
      M = (ee, B) => X(ee, B) && W(ee, B);
    } else M = X;
  }
  const D = new dk(s, O, d ? c.componentStyle : void 0);
  function te(X, W) {
    return (function(ee, B, be) {
      const { attrs: P, componentStyle: ne, defaultProps: G, foldedComponentIds: V, styledComponentId: Z, target: Ee } = ee, He = Et.useContext(O1), qe = yk(), Be = ee.shouldForwardProp || qe.shouldForwardProp;
      Lt.env.NODE_ENV !== "production" && Et.useDebugValue && Et.useDebugValue(Z);
      const _e = LT(B, He, G) || Ec;
      let gt, $e;
      {
        const re = Et.useRef(null), se = re.current;
        if (se !== null && se[1] === _e && se[2] === qe.styleSheet && se[3] === qe.stylis && se[7] === ne && (function(ie, we, ue) {
          const I = ie, ge = we;
          let yt = 0;
          for (const tt in ge) if (tv.call(ge, tt) && (yt++, I[tt] !== ge[tt])) return !1;
          return yt === ue;
        })(se[0], B, se[4])) gt = se[5], $e = se[6];
        else {
          gt = (function(we, ue, I) {
            const ge = Object.assign(Object.assign({}, ue), { className: void 0, theme: I }), yt = we.length > 1;
            for (let tt = 0; tt < we.length; tt++) {
              const fn = we[tt], dn = gh(fn) ? fn(yt ? Object.assign({}, ge) : ge) : fn;
              for (const nt in dn) nt === "className" ? ge.className = km(ge.className, dn[nt]) : nt === "style" ? ge.style = Object.assign(Object.assign({}, ge.style), dn[nt]) : nt in ue && ue[nt] === void 0 || (ge[nt] = dn[nt]);
            }
            return "className" in ue && typeof ue.className == "string" && (ge.className = km(ge.className, ue.className)), ge;
          })(P, B, _e), $e = (function(we, ue, I, ge) {
            const yt = we.generateAndInjectStyles(ue, I, ge);
            return Lt.env.NODE_ENV !== "production" && Et.useDebugValue && Et.useDebugValue(yt), yt;
          })(ne, gt, qe.styleSheet, qe.stylis);
          let ie = 0;
          for (const we in B) tv.call(B, we) && ie++;
          re.current = [B, _e, qe.styleSheet, qe.stylis, ie, gt, $e, ne];
        }
      }
      Lt.env.NODE_ENV !== "production" && ee.warnTooManyClasses && ee.warnTooManyClasses($e);
      const U = gt.as || Ee, R = (function(re, se, ie, we) {
        const ue = {};
        for (const I in re) re[I] === void 0 || I[0] === "$" || I === "as" || I === "theme" && re.theme === ie || (I === "forwardedAs" ? ue.as = re.forwardedAs : we && !we(I, se) || (ue[I] = re[I], we || Lt.env.NODE_ENV !== "development" || uT(I) || (Zy || (Zy = /* @__PURE__ */ new Set())).has(I) || !Zm(se) || se.includes("-") || (Zy.add(I), console.warn(`styled-components: it looks like an unknown prop "${I}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return ue;
      })(gt, U, _e, Be);
      let H = km(V, Z);
      return $e && (H += " " + $e), gt.className && (H += " " + gt.className), R[Zm(U) && U.includes("-") ? "class" : "className"] = H, be && (R.ref = be), Qv(U, R);
    })(q, X, W);
  }
  te.displayName = x;
  let q = Et.forwardRef(te);
  return q.attrs = L, q.componentStyle = D, q.displayName = x, q.shouldForwardProp = M, q.foldedComponentIds = d ? km(c.foldedComponentIds, c.styledComponentId) : "", q.styledComponentId = O, q.target = d ? c.target : i, Object.defineProperty(q, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(X) {
    this._foldedDefaultProps = d ? (function(W, ...ee) {
      for (const B of ee) w0(W, B, !0);
      return W;
    })({}, c.defaultProps, X) : X;
  } }), Lt.env.NODE_ENV !== "production" && (MT(x, O), q.warnTooManyClasses = /* @__PURE__ */ ((X, W) => {
    let ee = {}, B = !1;
    return (be) => {
      !B && (ee[be] = !0, Object.keys(ee).length >= 200) && (console.warn(`Over 200 classes were generated for component ${X}${W ? ` with the id of "${W}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), B = !0, ee = {});
    };
  })(x, O)), w1(q, () => `.${q.styledComponentId}`), h && v1(q, i, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), q;
}
var Sk = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function nv(i, o) {
  const s = [i[0]];
  for (let d = 0, c = o.length; d < c; d += 1) s.push(o[d], i[d + 1]);
  return s;
}
const lv = (i) => (k1.add(i), i);
function wk(i, ...o) {
  if (gh(i) || cc(i)) return lv(ac(nv(B0, [i, ...o])));
  const s = i;
  return o.length === 0 && s.length === 1 && typeof s[0] == "string" ? ac(s) : lv(ac(nv(s, o)));
}
function E0(i, o, s = Ec) {
  if (!o) throw Mm(1, o);
  const d = (c, ...h) => i(o, s, wk(c, ...h));
  return d.attrs = (c) => E0(i, o, Object.assign(Object.assign({}, s), { attrs: Array.prototype.concat(s.attrs, c).filter(Boolean) })), d.withConfig = (c) => E0(i, o, Object.assign(Object.assign({}, s), c)), d;
}
const C1 = (i) => E0(vk, i), bi = C1;
Sk.forEach((i) => {
  bi[i] = C1(i);
});
Lt.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://styled-components.com/docs/basics#react-native`);
const Gm = `__sc-${sc}__`;
Lt.env.NODE_ENV !== "production" && Lt.env.NODE_ENV !== "test" && typeof window < "u" && (window[Gm] || (window[Gm] = 0), window[Gm] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`), window[Gm] += 1);
bi.div`
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
m.arrayOf(
  m.shape({
    text: m.string.isRequired,
    targetIdName: m.string.isRequired,
    icon: m.arrayOf(m.string)
  })
).isRequired, m.string.isRequired, m.bool;
var Wy = { exports: {} }, Jy = { exports: {} }, e0, av;
function Tk() {
  if (av) return e0;
  av = 1;
  var i = 1e3, o = i * 60, s = o * 60, d = s * 24, c = d * 365.25;
  e0 = function(O, L) {
    L = L || {};
    var M = typeof O;
    if (M === "string" && O.length > 0)
      return h(O);
    if (M === "number" && isNaN(O) === !1)
      return L.long ? A(O) : T(O);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(O)
    );
  };
  function h(O) {
    if (O = String(O), !(O.length > 100)) {
      var L = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        O
      );
      if (L) {
        var M = parseFloat(L[1]), D = (L[2] || "ms").toLowerCase();
        switch (D) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return M * c;
          case "days":
          case "day":
          case "d":
            return M * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return M * s;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return M * o;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return M * i;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return M;
          default:
            return;
        }
      }
    }
  }
  function T(O) {
    return O >= d ? Math.round(O / d) + "d" : O >= s ? Math.round(O / s) + "h" : O >= o ? Math.round(O / o) + "m" : O >= i ? Math.round(O / i) + "s" : O + "ms";
  }
  function A(O) {
    return x(O, d, "day") || x(O, s, "hour") || x(O, o, "minute") || x(O, i, "second") || O + " ms";
  }
  function x(O, L, M) {
    if (!(O < L))
      return O < L * 1.5 ? Math.floor(O / L) + " " + M : Math.ceil(O / L) + " " + M + "s";
  }
  return e0;
}
var rv;
function kk() {
  return rv || (rv = 1, (function(i, o) {
    o = i.exports = c.debug = c.default = c, o.coerce = x, o.disable = T, o.enable = h, o.enabled = A, o.humanize = Tk(), o.names = [], o.skips = [], o.formatters = {};
    var s;
    function d(O) {
      var L = 0, M;
      for (M in O)
        L = (L << 5) - L + O.charCodeAt(M), L |= 0;
      return o.colors[Math.abs(L) % o.colors.length];
    }
    function c(O) {
      function L() {
        if (L.enabled) {
          var M = L, D = +/* @__PURE__ */ new Date(), te = D - (s || D);
          M.diff = te, M.prev = s, M.curr = D, s = D;
          for (var q = new Array(arguments.length), X = 0; X < q.length; X++)
            q[X] = arguments[X];
          q[0] = o.coerce(q[0]), typeof q[0] != "string" && q.unshift("%O");
          var W = 0;
          q[0] = q[0].replace(/%([a-zA-Z%])/g, function(B, be) {
            if (B === "%%") return B;
            W++;
            var P = o.formatters[be];
            if (typeof P == "function") {
              var ne = q[W];
              B = P.call(M, ne), q.splice(W, 1), W--;
            }
            return B;
          }), o.formatArgs.call(M, q);
          var ee = L.log || o.log || console.log.bind(console);
          ee.apply(M, q);
        }
      }
      return L.namespace = O, L.enabled = o.enabled(O), L.useColors = o.useColors(), L.color = d(O), typeof o.init == "function" && o.init(L), L;
    }
    function h(O) {
      o.save(O), o.names = [], o.skips = [];
      for (var L = (typeof O == "string" ? O : "").split(/[\s,]+/), M = L.length, D = 0; D < M; D++)
        L[D] && (O = L[D].replace(/\*/g, ".*?"), O[0] === "-" ? o.skips.push(new RegExp("^" + O.substr(1) + "$")) : o.names.push(new RegExp("^" + O + "$")));
    }
    function T() {
      o.enable("");
    }
    function A(O) {
      var L, M;
      for (L = 0, M = o.skips.length; L < M; L++)
        if (o.skips[L].test(O))
          return !1;
      for (L = 0, M = o.names.length; L < M; L++)
        if (o.names[L].test(O))
          return !0;
      return !1;
    }
    function x(O) {
      return O instanceof Error ? O.stack || O.message : O;
    }
  })(Jy, Jy.exports)), Jy.exports;
}
var iv;
function Ek() {
  return iv || (iv = 1, (function(i, o) {
    var s = { env: { NODE_ENV: "production" } };
    o = i.exports = kk(), o.log = h, o.formatArgs = c, o.save = T, o.load = A, o.useColors = d, o.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : x(), o.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function d() {
      return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    o.formatters.j = function(O) {
      try {
        return JSON.stringify(O);
      } catch (L) {
        return "[UnexpectedJSONParseError]: " + L.message;
      }
    };
    function c(O) {
      var L = this.useColors;
      if (O[0] = (L ? "%c" : "") + this.namespace + (L ? " %c" : " ") + O[0] + (L ? "%c " : " ") + "+" + o.humanize(this.diff), !!L) {
        var M = "color: " + this.color;
        O.splice(1, 0, M, "color: inherit");
        var D = 0, te = 0;
        O[0].replace(/%[a-zA-Z%]/g, function(q) {
          q !== "%%" && (D++, q === "%c" && (te = D));
        }), O.splice(te, 0, M);
      }
    }
    function h() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function T(O) {
      try {
        O == null ? o.storage.removeItem("debug") : o.storage.debug = O;
      } catch {
      }
    }
    function A() {
      var O;
      try {
        O = o.storage.debug;
      } catch {
      }
      return !O && typeof s < "u" && "env" in s && (O = s.env.DEBUG), O;
    }
    o.enable(A());
    function x() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  })(Wy, Wy.exports)), Wy.exports;
}
var t0, ov;
function xk() {
  if (ov) return t0;
  ov = 1;
  var i = Ek()("jsonp");
  t0 = d;
  var o = 0;
  function s() {
  }
  function d(c, h, T) {
    typeof h == "function" && (T = h, h = {}), h || (h = {});
    var A = h.prefix || "__jp", x = h.name || A + o++, O = h.param || "callback", L = h.timeout != null ? h.timeout : 6e4, M = encodeURIComponent, D = document.getElementsByTagName("script")[0] || document.head, te, q;
    L && (q = setTimeout(function() {
      X(), T && T(new Error("Timeout"));
    }, L));
    function X() {
      te.parentNode && te.parentNode.removeChild(te), window[x] = s, q && clearTimeout(q);
    }
    function W() {
      window[x] && X();
    }
    return window[x] = function(ee) {
      i("jsonp got", ee), X(), T && T(null, ee);
    }, c += (~c.indexOf("?") ? "&" : "?") + O + "=" + M(x), c = c.replace("?&", "?"), i('jsonp req "%s"', c), te = document.createElement("script"), te.src = c, D.parentNode.insertBefore(te, D), W;
  }
  return t0;
}
var Ak = xk();
const mc = /* @__PURE__ */ R0(Ak);
var _k = Object.defineProperty, zk = Object.defineProperties, Nk = Object.getOwnPropertyDescriptors, ih = Object.getOwnPropertySymbols, D1 = Object.prototype.hasOwnProperty, R1 = Object.prototype.propertyIsEnumerable, uv = (i, o, s) => o in i ? _k(i, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[o] = s, ht = (i, o) => {
  for (var s in o || (o = {}))
    D1.call(o, s) && uv(i, s, o[s]);
  if (ih)
    for (var s of ih(o))
      R1.call(o, s) && uv(i, s, o[s]);
  return i;
}, Xt = (i, o) => zk(i, Nk(o)), Qt = (i, o) => {
  var s = {};
  for (var d in i)
    D1.call(i, d) && o.indexOf(d) < 0 && (s[d] = i[d]);
  if (i != null && ih)
    for (var d of ih(i))
      o.indexOf(d) < 0 && R1.call(i, d) && (s[d] = i[d]);
  return s;
};
class Ok extends Error {
  constructor(o) {
    super(o), this.name = "AssertionError";
  }
}
function rn(i, o) {
  if (!i)
    throw new Ok(o);
}
function jt(i) {
  const o = Object.entries(i).filter(([, s]) => s != null).map(([s, d]) => `${encodeURIComponent(s)}=${encodeURIComponent(String(d))}`);
  return o.length > 0 ? `?${o.join("&")}` : "";
}
const Ck = {
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
}, Dk = (i) => !!i && (typeof i == "object" || typeof i == "function") && "then" in i && typeof i.then == "function", Rk = (i, o) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - i / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - o / 2
}), Mk = (i, o) => ({
  top: (window.screen.height - o) / 2,
  left: (window.screen.width - i) / 2
});
function Lk(i) {
  var o;
  const s = Fv.toArray(i);
  if (s.length !== 1)
    return;
  const [d] = s;
  if (Xv(d))
    return d.props.round ? "50%" : (o = d.props.borderRadius) != null ? o : 0;
}
function M1(i) {
  return Fv.toArray(i).some((o) => typeof o == "string" ? o.trim().length > 0 : typeof o == "number" ? !0 : Xv(o) ? M1(o.props.children) : !1);
}
function Uk(i, o, s) {
  var d = o, { height: c, width: h } = d, T = Qt(d, ["height", "width"]);
  const A = ht({
    height: c,
    width: h,
    location: "no",
    toolbar: "no",
    status: "no",
    directories: "no",
    menubar: "no",
    scrollbars: "yes",
    resizable: "no",
    centerscreen: "yes",
    chrome: "yes"
  }, T), x = window.open(
    i,
    "",
    Object.keys(A).map((O) => `${O}=${A[O]}`).join(", ")
  );
  if (s) {
    const O = window.setInterval(() => {
      try {
        (x === null || x.closed) && (window.clearInterval(O), s(x));
      } catch (L) {
        console.error(L);
      }
    }, 1e3);
  }
  return x;
}
function cn(i) {
  var o = i, {
    "aria-label": s,
    "aria-labelledby": d,
    beforeOnClick: c,
    children: h,
    className: T,
    disabled: A,
    disabledStyle: x = { opacity: 0.6 },
    forwardedRef: O,
    htmlTitle: L,
    networkLink: M,
    networkName: D,
    onClick: te,
    onShareWindowClose: q,
    openShareDialogOnClick: X = !0,
    opts: W,
    resetButtonStyle: ee = !0,
    style: B,
    title: be,
    type: P = "button",
    url: ne,
    windowHeight: G = 400,
    windowPosition: V = "windowCenter",
    windowWidth: Z = 550
  } = o, Ee = Qt(o, [
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
  const He = Lk(h), qe = !s && !d && !M1(h) ? Ck[D] : void 0, Be = async ($e) => {
    if (A)
      return;
    const U = M(ne, W);
    if ($e.preventDefault(), c) {
      const R = c();
      Dk(R) && await R;
    }
    if (X) {
      const R = ht({
        height: G,
        width: Z
      }, V === "windowCenter" ? Rk(Z, G) : Mk(Z, G));
      Uk(U, R, q);
    }
    te && te($e, U);
  }, _e = Uo(
    "react-share__ShareButton",
    {
      "react-share__ShareButton--disabled": !!A,
      disabled: !!A
    },
    T
  ), gt = ht(ht(ee ? {
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    display: "inline-flex",
    borderRadius: He,
    outlineOffset: 2,
    font: "inherit",
    color: "inherit",
    cursor: "pointer"
  } : {}, B), A && x);
  return /* @__PURE__ */ Y.jsx(
    "button",
    Xt(ht({}, Ee), {
      "aria-label": s || qe,
      "aria-labelledby": d,
      className: _e,
      disabled: A,
      onClick: Be,
      ref: O,
      style: gt,
      title: L,
      type: P,
      children: h
    })
  );
}
function jk(i, { title: o, separator: s }) {
  return rn(i, "bluesky.url"), "https://bsky.app/intent/compose" + jt({
    text: o ? o + s + i : i
  });
}
const Hk = on(
  (i, o) => {
    var s = i, { separator: d, title: c } = s, h = Qt(s, ["separator", "title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "bluesky",
        networkLink: jk,
        opts: {
          title: c,
          separator: d || " "
        },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
Hk.displayName = "BlueskyShareButton";
function Bk(i, { subject: o, body: s, separator: d }) {
  return "mailto:" + jt({ subject: o, body: s ? s + d + i : i });
}
const qk = on(
  (i, o) => {
    var s = i, { body: d, separator: c, subject: h } = s, T = Qt(s, ["body", "separator", "subject"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, T), {
        forwardedRef: o,
        networkName: "email",
        networkLink: Bk,
        onClick: (A, x) => {
          window.location.href = x;
        },
        openShareDialogOnClick: !1,
        opts: {
          subject: h,
          body: d,
          separator: c || " "
        }
      })
    );
  }
);
qk.displayName = "EmailShareButton";
function Gk(i, { appId: o, redirectUri: s, to: d }) {
  return "https://www.facebook.com/dialog/send" + jt({
    link: i,
    redirect_uri: s || i,
    app_id: o,
    to: d
  });
}
const Vk = on((i, o) => {
  var s = i, { appId: d, redirectUri: c, to: h } = s, T = Qt(s, ["appId", "redirectUri", "to"]);
  return /* @__PURE__ */ Y.jsx(
    cn,
    Xt(ht({}, T), {
      forwardedRef: o,
      networkName: "facebookmessenger",
      networkLink: Gk,
      opts: {
        appId: d,
        redirectUri: c,
        to: h
      },
      windowHeight: 820,
      windowWidth: 1e3
    })
  );
});
Vk.displayName = "FacebookMessengerShareButton";
function Yk(i, { hashtag: o }) {
  return rn(i, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + jt({ u: i, hashtag: o });
}
const Fk = on(
  (i, o) => {
    var s = i, { hashtag: d } = s, c = Qt(s, ["hashtag"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "facebook",
        networkLink: Yk,
        opts: { hashtag: d },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
Fk.displayName = "FacebookShareButton";
function Xk() {
  const i = Xm(!1);
  return $o(() => (i.current = !0, () => {
    i.current = !1;
  }), []), p0(() => i.current, []);
}
function Qk(i) {
  var o = i, {
    children: s = (D) => D,
    className: d,
    getCount: c,
    url: h
  } = o, T = Qt(o, [
    "children",
    "className",
    "getCount",
    "url"
  ]);
  const A = Xk(), [x, O] = Fo(void 0), [L, M] = Fo(!1);
  return $o(() => {
    M(!0), c(h, (D) => {
      A() && (O(D), M(!1));
    });
  }, [h]), /* @__PURE__ */ Y.jsx("span", Xt(ht({ className: Uo("react-share__ShareCount", d) }, T), { children: !L && x !== void 0 && s(x) }));
}
function hc(i) {
  const o = (s) => /* @__PURE__ */ Y.jsx(Qk, ht({ getCount: i }, s));
  return o.displayName = `ShareCount(${i.name})`, o;
}
function $k(i, o) {
  const s = `https://graph.facebook.com/?id=${i}&fields=og_object{engagement}`;
  mc(s, (d, c) => {
    o(
      !d && c && c.og_object && c.og_object.engagement ? c.og_object.engagement.count : void 0
    );
  });
}
hc($k);
function Ik(i, { title: o }) {
  return rn(i, "hatena.url"), `http://b.hatena.ne.jp/add?mode=confirm&url=${i}&title=${o}`;
}
const Kk = on(
  (i, o) => {
    var s = i, { title: d } = s, c = Qt(s, ["title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "hatena",
        networkLink: Ik,
        opts: { title: d },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
Kk.displayName = "HatenaShareButton";
function Pk(i, o) {
  mc(
    "https://bookmark.hatenaapis.com/count/entry" + jt({
      url: i
    }),
    (s, d) => {
      o(d ?? void 0);
    }
  );
}
hc(Pk);
function Zk(i, { title: o, description: s }) {
  return rn(i, "instapaper.url"), "http://www.instapaper.com/hello2" + jt({
    url: i,
    title: o,
    description: s
  });
}
const Wk = on(
  (i, o) => {
    var s = i, { description: d, title: c } = s, h = Qt(s, ["description", "title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "instapaper",
        networkLink: Zk,
        opts: {
          title: c,
          description: d
        },
        windowHeight: 500,
        windowPosition: "windowCenter",
        windowWidth: 500
      })
    );
  }
);
Wk.displayName = "InstapaperShareButton";
function Jk(i, { title: o }) {
  return rn(i, "line.url"), "https://social-plugins.line.me/lineit/share" + jt({
    url: i,
    text: o
  });
}
const eE = on(
  (i, o) => {
    var s = i, { title: d } = s, c = Qt(s, ["title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "line",
        networkLink: Jk,
        opts: { title: d },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
eE.displayName = "LineShareButton";
function tE(i, { title: o, summary: s, source: d }) {
  return rn(i, "linkedin.url"), "https://linkedin.com/shareArticle" + jt({ url: i, mini: "true", title: o, summary: s, source: d });
}
const nE = on(
  (i, o) => {
    var s = i, { source: d, summary: c, title: h } = s, T = Qt(s, ["source", "summary", "title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, T), {
        forwardedRef: o,
        networkName: "linkedin",
        networkLink: tE,
        opts: { title: h, summary: c, source: d },
        windowHeight: 600,
        windowWidth: 750
      })
    );
  }
);
nE.displayName = "LinkedinShareButton";
function lE(i, { title: o, description: s }) {
  return rn(i, "livejournal.url"), "https://www.livejournal.com/update.bml" + jt({
    subject: o,
    event: s
  });
}
const aE = on(
  (i, o) => {
    var s = i, { description: d, title: c } = s, h = Qt(s, ["description", "title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "livejournal",
        networkLink: lE,
        opts: {
          title: c,
          description: d
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
aE.displayName = "LivejournalShareButton";
function rE(i, { title: o, description: s, imageUrl: d }) {
  return rn(i, "mailru.url"), "https://connect.mail.ru/share" + jt({
    url: i,
    title: o,
    description: s,
    image_url: d
  });
}
const iE = on(
  (i, o) => {
    var s = i, { description: d, imageUrl: c, title: h } = s, T = Qt(s, ["description", "imageUrl", "title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, T), {
        forwardedRef: o,
        networkName: "mailru",
        networkLink: rE,
        opts: {
          title: h,
          description: d,
          imageUrl: c
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
iE.displayName = "MailruShareButton";
function oE(i, { title: o, description: s, image: d }) {
  return rn(i, "ok.url"), "https://connect.ok.ru/offer" + jt({
    url: i,
    title: o,
    description: s,
    imageUrl: d
  });
}
const uE = on(
  (i, o) => {
    var s = i, { description: d, image: c, title: h } = s, T = Qt(s, ["description", "image", "title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, T), {
        forwardedRef: o,
        networkName: "ok",
        networkLink: oE,
        opts: {
          title: h,
          description: d,
          image: c
        },
        windowHeight: 480,
        windowPosition: "screenCenter",
        windowWidth: 588
      })
    );
  }
);
uE.displayName = "OKShareButton";
function sE(i, o) {
  window.OK || (window.OK = {
    Share: {
      count: function(c, h) {
        var T, A;
        (A = (T = window.OK.callbacks)[c]) == null || A.call(T, h);
      }
    },
    callbacks: []
  });
  const s = "https://connect.ok.ru/dk", d = window.OK.callbacks.length;
  return window.ODKL = {
    updateCount(c, h) {
      var T, A;
      const x = c === "" ? 0 : parseInt(c.replace("react-share-", ""), 10);
      (A = (T = window.OK.callbacks)[x]) == null || A.call(T, h === "" ? void 0 : parseInt(h, 10));
    }
  }, window.OK.callbacks.push(o), mc(
    s + jt({
      "st.cmd": "extLike",
      uid: `react-share-${d}`,
      ref: i
    })
  );
}
hc(sE);
function cE(i, { media: o, description: s, pinId: d }) {
  return d ? `https://pinterest.com/pin/${d}/repin/x/` : (rn(i, "pinterest.url"), rn(o, "pinterest.media"), "https://pinterest.com/pin/create/button/" + jt({
    url: i,
    media: o,
    description: s
  }));
}
const fE = on(
  (i, o) => {
    var s = i, { description: d, media: c, pinId: h } = s, T = Qt(s, ["description", "media", "pinId"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, T), {
        forwardedRef: o,
        networkName: "pinterest",
        networkLink: cE,
        opts: {
          media: c,
          description: d,
          pinId: h
        },
        windowHeight: 730,
        windowWidth: 1e3
      })
    );
  }
);
fE.displayName = "PinterestShareButton";
function dE(i, o) {
  mc(
    "https://api.pinterest.com/v1/urls/count.json" + jt({
      url: i
    }),
    (s, d) => {
      o(d ? d.count : void 0);
    }
  );
}
hc(dE);
function pE(i, { title: o }) {
  return rn(i, "pocket.url"), "https://getpocket.com/save" + jt({
    url: i,
    title: o
  });
}
const mE = on(
  (i, o) => {
    var s = i, { title: d } = s, c = Qt(s, ["title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "pocket",
        networkLink: pE,
        opts: { title: d },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
mE.displayName = "PocketShareButton";
function hE(i, { title: o }) {
  return rn(i, "reddit.url"), "https://www.reddit.com/submit" + jt({
    url: i,
    title: o
  });
}
const gE = on(
  (i, o) => {
    var s = i, { title: d } = s, c = Qt(s, ["title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "reddit",
        networkLink: hE,
        opts: { title: d },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
gE.displayName = "RedditShareButton";
function yE(i, { title: o }) {
  return rn(i, "gab.url"), "https://gab.com/compose" + jt({
    url: i,
    text: o
  });
}
const bE = on(
  (i, o) => {
    var s = i, { title: d } = s, c = Qt(s, ["title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "gab",
        networkLink: yE,
        opts: { title: d },
        windowHeight: 640,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
bE.displayName = "GabShareButton";
function vE(i, o) {
  const s = `https://www.reddit.com/api/info.json?limit=1&url=${i}`;
  mc(s, { param: "jsonp" }, (d, c) => {
    o(
      !d && c && c.data && c.data.children.length > 0 && c.data.children[0].data.score ? c.data.children[0].data.score : void 0
    );
  });
}
hc(vE);
function SE(i, { title: o }) {
  return rn(i, "telegram.url"), "https://telegram.me/share/url" + jt({
    url: i,
    text: o
  });
}
const wE = on(
  (i, o) => {
    var s = i, { title: d } = s, c = Qt(s, ["title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "telegram",
        networkLink: SE,
        opts: { title: d },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
wE.displayName = "TelegramShareButton";
function TE(i, { title: o }) {
  return rn(i, "threads.url"), "https://threads.net/intent/post" + jt({
    url: i,
    text: o
  });
}
const kE = on(
  (i, o) => {
    var s = i, { hashtags: d, related: c, title: h, via: T } = s, A = Qt(s, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, A), {
        forwardedRef: o,
        networkName: "threads",
        networkLink: TE,
        opts: { title: h },
        windowHeight: 600,
        windowWidth: 550
      })
    );
  }
);
kE.displayName = "ThreadsShareButton";
function EE(i, {
  title: o,
  caption: s,
  tags: d,
  posttype: c
}) {
  return rn(i, "tumblr.url"), "https://www.tumblr.com/widgets/share/tool" + jt({
    canonicalUrl: i,
    title: o,
    caption: s,
    tags: d,
    posttype: c
  });
}
const xE = on(
  (i, o) => {
    var s = i, { caption: d, posttype: c, tags: h, title: T } = s, A = Qt(s, ["caption", "posttype", "tags", "title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, A), {
        forwardedRef: o,
        networkName: "tumblr",
        networkLink: EE,
        opts: {
          title: T,
          tags: (h || []).join(","),
          caption: d,
          posttype: c || "link"
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
xE.displayName = "TumblrShareButton";
function AE(i, o) {
  return mc(
    "https://api.tumblr.com/v2/share/stats" + jt({
      url: i
    }),
    (s, d) => {
      o(!s && d && d.response ? d.response.note_count : void 0);
    }
  );
}
hc(AE);
function _E(i, {
  title: o,
  via: s,
  hashtags: d = [],
  related: c = []
}) {
  return rn(i, "x.url"), rn(Array.isArray(d), "x.hashtags is not an array"), rn(Array.isArray(c), "x.related is not an array"), "https://twitter.com/intent/tweet" + jt({
    url: i,
    text: o,
    via: s,
    hashtags: d.length > 0 ? d.join(",") : void 0,
    related: c.length > 0 ? c.join(",") : void 0
  });
}
const L1 = on(
  (i, o) => {
    var s = i, { hashtags: d, related: c, title: h, via: T } = s, A = Qt(s, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, A), {
        forwardedRef: o,
        networkName: "twitter",
        networkLink: _E,
        opts: {
          hashtags: d,
          title: h,
          via: T,
          related: c
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
L1.displayName = "XShareButton";
const zE = on((i, o) => /* @__PURE__ */ Y.jsx(L1, Xt(ht({}, i), { ref: o })));
zE.displayName = "TwitterShareButton";
function NE(i, { title: o, separator: s }) {
  return rn(i, "viber.url"), "viber://forward" + jt({
    text: o ? o + s + i : i
  });
}
const OE = on(
  (i, o) => {
    var s = i, { separator: d, title: c } = s, h = Qt(s, ["separator", "title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "viber",
        networkLink: NE,
        opts: {
          title: c,
          separator: d || " "
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
OE.displayName = "ViberShareButton";
function CE(i, { title: o, image: s, noParse: d, noVkLinks: c }) {
  return rn(i, "vk.url"), "https://vk.com/share.php" + jt({
    url: i,
    title: o,
    image: s,
    noparse: d ? 1 : 0,
    no_vk_links: c ? 1 : 0
  });
}
const DE = on(
  (i, o) => {
    var s = i, { image: d, noParse: c, noVkLinks: h, title: T } = s, A = Qt(s, ["image", "noParse", "noVkLinks", "title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, A), {
        forwardedRef: o,
        networkName: "vk",
        networkLink: CE,
        opts: {
          title: T,
          image: d,
          noParse: c,
          noVkLinks: h
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
DE.displayName = "VKShareButton";
function RE(i, o) {
  window.VK || (window.VK = {}), window.VK.Share = {
    count: (c, h) => {
      var T, A;
      return (A = (T = window.VK.callbacks) == null ? void 0 : T[c]) == null ? void 0 : A.call(T, h);
    }
  }, window.VK.callbacks = [];
  const s = "https://vk.com/share.php", d = window.VK.callbacks.length;
  return window.VK.callbacks.push(o), mc(
    s + jt({
      act: "count",
      index: d,
      url: i
    })
  );
}
hc(RE);
function ME(i, { title: o, image: s }) {
  return rn(i, "weibo.url"), "http://service.weibo.com/share/share.php" + jt({
    url: i,
    title: o,
    pic: s
  });
}
const LE = on(
  (i, o) => {
    var s = i, { image: d, title: c } = s, h = Qt(s, ["image", "title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "weibo",
        networkLink: ME,
        opts: {
          title: c,
          image: d
        },
        windowHeight: 550,
        windowPosition: "screenCenter",
        windowWidth: 660
      })
    );
  }
);
LE.displayName = "WeiboShareButton";
function UE(i, { title: o, separator: s }) {
  return rn(i, "whatsapp.url"), "https://api.whatsapp.com/send" + jt({
    text: o ? o + s + i : i
  });
}
const jE = on(
  (i, o) => {
    var s = i, { separator: d, title: c } = s, h = Qt(s, ["separator", "title"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "whatsapp",
        networkLink: UE,
        opts: {
          title: c,
          separator: d || " "
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
jE.displayName = "WhatsappShareButton";
function HE(i, { quote: o, hashtag: s }) {
  return rn(i, "workplace.url"), "https://work.facebook.com/sharer.php" + jt({
    u: i,
    quote: o,
    hashtag: s
  });
}
const BE = on(
  (i, o) => {
    var s = i, { hashtag: d, quote: c } = s, h = Qt(s, ["hashtag", "quote"]);
    return /* @__PURE__ */ Y.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "workplace",
        networkLink: HE,
        opts: {
          quote: c,
          hashtag: d
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
BE.displayName = "WorkplaceShareButton";
bi.div`
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
bi.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`;
m.oneOf(["event", "news"]), m.string.isRequired, m.string.isRequired, m.string.isRequired, m.string.isRequired, m.string, m.string.isRequired, m.string, m.string, m.arrayOf(
  m.shape({
    title: m.string,
    url: m.string,
    active: m.bool
  })
), m.string, m.string, m.string, m.string, m.string, m.string;
m.oneOf(["white", "gray", "black"]), m.arrayOf(m.string), m.oneOfType([
  m.object,
  m.func,
  m.string
]), m.func, m.string, m.oneOf(["large", "small"]), m.string;
const qE = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, U1 = ({
  label: i = "",
  cardTitle: o = "",
  gaData: s,
  ariaLabel: d,
  color: c = "gray",
  disabled: h,
  element: T = "button",
  innerRef: A,
  href: x,
  onClick: O,
  ...L
}) => {
  const M = Uo("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: h
  });
  let D = T;
  return x && T === "button" && (D = "a"), /* @__PURE__ */ Y.jsx(
    oc,
    {
      gaData: {
        ...qE,
        section: o,
        // @deprecated - remove at some point
        ...s,
        text: i
      },
      children: /* @__PURE__ */ Y.jsx(
        D,
        {
          type: D === "button" && O ? "button" : void 0,
          ...L,
          className: M,
          href: x,
          ref: A,
          onClick: O,
          "aria-label": d,
          children: i
        }
      )
    }
  );
};
U1.propTypes = {
  /**
    Button tag label
  */
  label: m.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: m.string,
  /**
   * Google Analytics event data
   */
  gaData: M0,
  /**
    ARIA label for accessibility
  */
  ariaLabel: m.string,
  /**
    Button background color
  */
  color: m.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: m.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: m.oneOfType([
    m.func,
    m.string,
    m.shape({ $$typeof: m.symbol, render: m.func }),
    m.arrayOf(
      m.oneOfType([
        m.func,
        m.string,
        m.shape({ $$typeof: m.symbol, render: m.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: m.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: m.oneOfType([
    m.object,
    m.func,
    m.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: m.func
};
const j1 = ({
  src: i,
  alt: o,
  cssClasses: s,
  loading: d = "lazy",
  decoding: c = "async",
  dataTestId: h,
  fetchPriority: T = "auto",
  width: A,
  height: x,
  cardLink: O,
  title: L,
  caption: M,
  captionTitle: D,
  buttons: te,
  border: q,
  dropShadow: X
}) => {
  const W = {
    src: i,
    alt: o,
    loading: d,
    decoding: c,
    fetchpriority: T,
    // React attribute bug workaround
    ...(s == null ? void 0 : s.length) > 0 && { className: vw(s) },
    ...h && { "data-testid": h },
    ...A && { width: A },
    ...x && { height: x }
  }, ee = Uo("uds-img", {
    borderless: !q,
    "uds-img-drop-shadow": X
  }), B = (P) => {
    const ne = P ? `${W.className} ${P}` : W.className;
    return O ? /* @__PURE__ */ Y.jsxs("a", { href: O, children: [
      /* @__PURE__ */ Y.jsx("img", { ...W, className: ne }),
      /* @__PURE__ */ Y.jsx("span", { className: "visually-hidden", children: L })
    ] }) : /* @__PURE__ */ Y.jsx("img", { ...W, className: ne });
  }, be = () => /* @__PURE__ */ Y.jsx(Y.Fragment, { children: te && /* @__PURE__ */ Y.jsx("div", { className: "card-buttons", style: { marginTop: M ? 20 : 0 }, children: te.map((P) => /* @__PURE__ */ Y.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ Y.jsx(
        L0,
        {
          ariaLabel: P.ariaLabel,
          color: P.color,
          icon: P.icon,
          href: P.href,
          label: P.label,
          onClick: P.onClick,
          size: P.size,
          target: P.target,
          cardTitle: L
        }
      )
    },
    `${P.label}-${P.href}`
  )) }) });
  return te || M ? /* @__PURE__ */ Y.jsx("div", { className: ee, children: /* @__PURE__ */ Y.jsxs("figure", { className: "figure uds-figure", children: [
    B(),
    /* @__PURE__ */ Y.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      D && /* @__PURE__ */ Y.jsx("h3", { children: D }),
      M && /* @__PURE__ */ Y.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Tc(M)
        }
      ),
      be()
    ] })
  ] }) }) : B(ee);
};
j1.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: m.string.isRequired,
  /**
   * Image alt text
   */
  alt: m.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: m.arrayOf(m.string),
  /**
   * Image loading mode
   */
  loading: m.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: m.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: m.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: m.string,
  /**
   * Height of the image
   */
  height: m.string,
  dataTestId: m.string,
  cardLink: m.string,
  title: m.string,
  caption: m.string,
  captionTitle: m.string,
  border: m.bool,
  dropShadow: m.bool
};
const GE = bi.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, VE = (i) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(i), YE = (i) => !i.startsWith("https://") && !i.startsWith("http://") && VE(i) ? `mailto:${i}` : i, sv = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, H1 = (i) => i === "event" || i === "news", Yo = ({
  type: i = "default",
  width: o = "100%",
  horizontal: s = !1,
  image: d,
  imageAltText: c,
  title: h,
  icon: T,
  body: A,
  eventFormat: x = "stack",
  eventLocation: O,
  eventTime: L,
  buttons: M,
  linkLabel: D,
  linkUrl: te,
  tags: q,
  showBorders: X = !0,
  cardLink: W
}) => /* @__PURE__ */ Y.jsx(
  B1,
  {
    type: i,
    width: o,
    horizontal: s,
    image: d,
    imageAltText: c,
    title: h,
    icon: T,
    body: A,
    eventFormat: x,
    eventLocation: O,
    eventTime: L,
    buttons: M,
    linkLabel: D,
    linkUrl: te,
    tags: q,
    showBorders: X,
    cardLink: W
  }
);
Yo.propTypes = {
  /**
   * Type of card
   */
  type: m.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: m.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: m.bool,
  /**
   * Card title
   */
  title: m.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: m.arrayOf(m.string),
  /**
   * Card body content
   */
  body: m.string,
  /**
   * Event info format
   */
  eventFormat: m.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: m.string,
  /**
   * Event start time
   */
  eventTime: m.string,
  /**
   * Card header image
   */
  image: m.string,
  /**
   * Card header image alt text
   */
  imageAltText: m.string,
  /**
   * Buttons
   */
  buttons: m.arrayOf(
    m.shape({
      ariaLabel: m.string,
      color: m.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: m.arrayOf(m.string),
      href: m.string,
      label: m.string,
      onClick: m.func,
      size: m.oneOf(["default", "small", "xsmall"]),
      target: m.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: m.string,
  linkUrl: m.string,
  /**
   * Tags
   */
  tags: m.arrayOf(
    m.shape({
      ariaLabel: m.string,
      color: m.oneOf(["white", "gray", "dark"]),
      href: m.string,
      label: m.string,
      onClick: m.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: m.bool,
  /**
   * Card link
   */
  cardLink: m.string
};
const B1 = ({
  type: i = "default",
  width: o = "100%",
  horizontal: s = !1,
  image: d = "",
  imageAltText: c = "",
  title: h,
  icon: T = void 0,
  body: A = "",
  eventFormat: x = "stack",
  eventLocation: O = "",
  eventTime: L = "",
  buttons: M = void 0,
  linkLabel: D = void 0,
  linkUrl: te = void 0,
  tags: q = void 0,
  showBorders: X = !0,
  cardLink: W
}) => {
  const ee = Uo("card", "cards-components", {
    "card-degree": i === "degree",
    "card-event": i === "event",
    "card-story": i === "story",
    "card-news": i === "news",
    [`w-${o.replace("%", "")}`]: o !== "100%",
    "card-horizontal": s,
    borderless: !X
  }), B = typeof d == "string" && d.length > 0, be = !H1(i);
  return /* @__PURE__ */ Y.jsxs(GE, { className: ee, "data-testid": "card-container", children: [
    B && /* @__PURE__ */ Y.jsx(
      j1,
      {
        src: d,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        title: h,
        cardLink: be ? W : void 0
      }
    ),
    !d && T && /* @__PURE__ */ Y.jsx(
      "i",
      {
        className: `${T == null ? void 0 : T[0]} fa-${T == null ? void 0 : T[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    /* @__PURE__ */ Y.jsx("div", { className: s ? "card-content-wrapper" : void 0, children: /* @__PURE__ */ Y.jsx(
      q1,
      {
        type: i,
        body: A,
        eventFormat: x,
        eventLocation: O,
        eventTime: L,
        title: h,
        buttons: M,
        linkLabel: D,
        linkUrl: te,
        tags: q,
        cardLink: W
      }
    ) })
  ] });
};
B1.propTypes = {
  type: m.oneOf(["default", "degree", "event", "news", "story"]),
  width: m.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: m.bool,
  title: m.string.isRequired,
  icon: m.arrayOf(m.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: m.string,
  eventFormat: m.oneOf(["stack", "inline"]),
  eventLocation: m.string,
  eventTime: m.string,
  image: m.string,
  imageAltText: m.string,
  buttons: m.arrayOf(
    m.shape({
      ariaLabel: m.string,
      color: m.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: m.arrayOf(m.string),
      href: m.string,
      label: m.string,
      onClick: m.func,
      size: m.oneOf(["default", "small", "xsmall"]),
      target: m.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: m.string,
  linkUrl: m.string,
  tags: m.arrayOf(
    m.shape({
      ariaLabel: m.string,
      color: m.oneOf(["white", "gray", "dark"]),
      href: m.string,
      label: m.string,
      onClick: m.func
    })
  ),
  showBorders: m.bool,
  cardLink: m.string
};
const q1 = ({
  type: i = "default",
  body: o = "",
  eventFormat: s = "stack",
  eventLocation: d = "",
  eventTime: c = "",
  title: h,
  buttons: T = void 0,
  linkLabel: A = void 0,
  linkUrl: x = void 0,
  tags: O = void 0,
  cardLink: L
}) => {
  const M = H1(i), D = L && !M, te = M && L, q = i === "event" && (c || d);
  return /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
    h && /* @__PURE__ */ Y.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ Y.jsx("h3", { className: "card-title", children: D ? /* @__PURE__ */ Y.jsx("a", { href: L, children: h }) : h }) }),
    o && /* @__PURE__ */ Y.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ Y.jsx("div", { dangerouslySetInnerHTML: Tc(o) }) }),
    q && /* @__PURE__ */ Y.jsx(
      G1,
      {
        eventFormat: s,
        eventTime: c,
        eventLocation: d
      }
    ),
    te ? /* @__PURE__ */ Y.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ Y.jsx(
      oc,
      {
        gaData: {
          ...sv,
          text: h
        },
        children: /* @__PURE__ */ Y.jsx("a", { href: L, className: "card-arrow-link", "aria-label": h, children: /* @__PURE__ */ Y.jsx("i", { className: "fas fa-arrow-right", "aria-hidden": "true" }) })
      }
    ) }) : /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
      !h && !o && !q && /* @__PURE__ */ Y.jsx("br", {}),
      T && /* @__PURE__ */ Y.jsx("div", { className: "card-buttons", children: T.map((X) => /* @__PURE__ */ Y.jsx(
        "div",
        {
          className: "card-button",
          "data-testid": "card-button",
          children: /* @__PURE__ */ Y.jsx(
            L0,
            {
              ariaLabel: X.ariaLabel,
              color: X.color,
              icon: X.icon,
              href: X.href,
              label: X.label,
              onClick: X.onClick,
              size: X.size,
              target: X.target,
              cardTitle: h
            }
          )
        },
        `${X.label}-${X.href}`
      )) }),
      x && A && /* @__PURE__ */ Y.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ Y.jsx(
        oc,
        {
          gaData: {
            ...sv,
            section: h,
            text: A
          },
          children: /* @__PURE__ */ Y.jsx("a", { href: YE(x), children: A })
        }
      ) })
    ] }),
    O && /* @__PURE__ */ Y.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: O.map((X) => (
      // @ts-ignore
      /* @__PURE__ */ Y.jsx(
        U1,
        {
          ariaLabel: X.ariaLabel,
          color: X.color,
          href: X.href,
          label: X.label,
          onClick: X.onClick,
          cardTitle: h
        },
        `${X.label}-${X.href}`
      )
    )) })
  ] });
};
q1.propTypes = {
  type: m.oneOf(["default", "degree", "event", "news", "story"]),
  body: m.string,
  eventFormat: m.oneOf(["stack", "inline"]),
  eventLocation: m.string,
  eventTime: m.string,
  title: m.string.isRequired,
  buttons: m.arrayOf(
    m.shape({
      ariaLabel: m.string,
      color: m.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: m.arrayOf(m.string),
      href: m.string,
      label: m.string,
      onClick: m.func,
      size: m.oneOf(["default", "small", "xsmall"]),
      target: m.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: m.string,
  linkUrl: m.string,
  tags: m.arrayOf(
    m.shape({
      ariaLabel: m.string,
      color: m.oneOf(["white", "gray", "dark"]),
      href: m.string,
      label: m.string,
      onClick: m.func
    })
  ),
  cardLink: m.string
};
const G1 = ({
  eventFormat: i = "stack",
  eventLocation: o = "",
  eventTime: s = ""
}) => i === "inline" ? /* @__PURE__ */ Y.jsxs("div", { className: "card-event-details", children: [
  s && /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ Y.jsx("div", { dangerouslySetInnerHTML: Tc(s) })
  ] }),
  o && /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ Y.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Tc(o)
      }
    )
  ] })
] }) : /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
  s && /* @__PURE__ */ Y.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ Y.jsx("div", { dangerouslySetInnerHTML: Tc(s) })
  ] }) }),
  o && /* @__PURE__ */ Y.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ Y.jsx("span", { children: /* @__PURE__ */ Y.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Tc(o)
      }
    ) })
  ] }) })
] });
G1.propTypes = {
  eventFormat: m.oneOf(["stack", "inline"]),
  eventLocation: m.string,
  eventTime: m.string
};
m.oneOf(["small", "large"]), m.string.isRequired, m.string.isRequired, m.string;
m.oneOf(["small", "large"]).isRequired, m.string.isRequired, m.string.isRequired, m.string.isRequired, m.string.isRequired, m.string, m.string;
m.arrayOf(m.object).isRequired, m.oneOf(["card", "ranking", "image"]), m.oneOf([1, 2, 3, 4, "1", "2", "3", "4"]);
m.string.isRequired, m.oneOfType([
  m.string,
  m.arrayOf(m.string)
]), m.node.isRequired, m.string, m.string, m.shape({
  label: m.string.isRequired,
  href: m.string.isRequired,
  color: m.string
});
const FE = bi.div`
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
`, XE = () => /* @__PURE__ */ Y.jsxs(FE, { children: [
  /* @__PURE__ */ Y.jsx("div", {}),
  /* @__PURE__ */ Y.jsx("div", {}),
  /* @__PURE__ */ Y.jsx("div", {}),
  /* @__PURE__ */ Y.jsx("div", {})
] }), QE = bi.section``, G0 = ES(null), V1 = ({
  defaultProps: i,
  dataSource: o,
  noFeedText: s,
  renderHeader: d,
  renderBody: c,
  dataTransformer: h,
  dataFilter: T,
  maxItems: A
}) => {
  const [{ data: x, loading: O, error: L }, M] = bw(), [D, te] = Fo([]), q = { ...i.dataSource, ...o };
  return $o(() => {
    M(q == null ? void 0 : q.url);
  }, [q == null ? void 0 : q.url]), $o(() => {
    const X = x == null ? void 0 : x.nodes.map(h), W = X == null ? void 0 : X.filter(
      (ee) => T(ee, o == null ? void 0 : o.filters)
    );
    te(A ? W == null ? void 0 : W.slice(0, A) : W);
  }, [x]), // Init the context to be used on its childrens
  /* @__PURE__ */ Y.jsx(G0.Provider, { value: { feeds: D }, children: /* @__PURE__ */ Y.jsxs(QE, { children: [
    d,
    L ? /* @__PURE__ */ Y.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
      O && !(D != null && D.length) && /* @__PURE__ */ Y.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ Y.jsx(XE, {}) }),
      D != null && D.length ? c : !O && /* @__PURE__ */ Y.jsx("p", { className: "text-center", children: s })
    ] })
  ] }) });
};
V1.propTypes = {
  renderHeader: m.element,
  renderBody: m.element,
  maxItems: m.number,
  dataTransformer: m.func,
  dataFilter: m.func,
  noFeedText: m.string
};
const V0 = m.shape({
  color: m.oneOf(["white", "dark"]),
  text: m.string
}), Y0 = m.shape({
  color: m.oneOf(["gold", "maroon", "gray", "dark"]),
  text: m.string
});
m.shape({
  color: m.oneOf(["gold", "maroon", "gray", "dark"]),
  text: m.string,
  size: m.string
});
const Y1 = m.shape({
  url: m.string,
  filters: m.string
}), $E = m.shape({
  header: V0,
  ctaButton: Y0,
  dataSource: Y1,
  maxItems: m.number
}), IE = bi.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, F1 = ({
  defaultProps: i,
  header: o,
  ctaButton: s
}) => {
  const d = { ...i.header, ...o }, c = { ...i.ctaButton, ...s }, h = d.tag || "h2", T = h !== "h2", A = `text-${d.color} ${T ? "h2" : ""}`.trim();
  return /* @__PURE__ */ Y.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ Y.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ Y.jsx(h, { className: A, children: d.text }) }),
        /* @__PURE__ */ Y.jsx(IE, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ Y.jsx(
          oc,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: d.text,
              text: c.text
            },
            children: /* @__PURE__ */ Y.jsx("a", { className: `btn btn-${c.color}`, href: c.url, children: c.text })
          }
        ) })
      ]
    }
  );
};
F1.propTypes = {
  defaultProps: $E,
  header: V0,
  ctaButton: Y0
};
const X1 = ({ children: i }) => /* @__PURE__ */ Y.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ Y.jsx("div", { className: "col", children: i }) });
X1.propTypes = {
  children: m.element
};
bi.img`
  width: 100%;
`;
m.oneOf(["heading-hero", "story-hero"]), m.arrayOf(Fy), m.string;
m.bool, m.bool, m.bool, m.bool, m.string, m.func, m.node, m.bool, m.string, m.bool;
m.oneOf(["default", "bordered"]).isRequired, m.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, m.number, m.number, m.func.isRequired;
bi.div`
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
m.object, m.bool, m.bool, m.func.isRequired;
const KE = Et.forwardRef(({
  overflowTabs: i,
  idToChild: o,
  activeTabID: s,
  selectTab: d,
  gaData: c,
  openRight: h = !1
}, T) => {
  const [A, x] = Fo(!1), O = Xm(null), L = Xm(null), M = Xm([]), D = Array.isArray(i) ? i : [], te = Yv(), q = D.includes(s ?? ""), X = D.map((G) => {
    const V = o == null ? void 0 : o[G];
    return V ? {
      id: G,
      title: V.props.title,
      icon: V.props.icon ?? null
    } : { id: G, title: G, icon: null };
  }), W = p0((G = !0) => {
    var V;
    x(!1), G && ((V = L.current) == null || V.focus());
  }, []), ee = (G) => {
    G.preventDefault(), x((V) => !V);
  };
  $o(() => {
    function G(V) {
      var Z;
      (Z = O.current) != null && Z.contains(V.target) || x(!1);
    }
    return document.addEventListener("mousedown", G), () => document.removeEventListener("mousedown", G);
  }, []);
  const B = p0(
    (G, V) => {
      var Z, Ee;
      switch (G.key) {
        case "ArrowDown": {
          G.preventDefault();
          const He = M.current[V + 1] ?? M.current[0];
          He == null || He.focus();
          break;
        }
        case "ArrowUp": {
          G.preventDefault();
          const He = M.current[V - 1] ?? M.current[X.length - 1];
          He == null || He.focus();
          break;
        }
        case "Home":
          G.preventDefault(), (Z = M.current[0]) == null || Z.focus();
          break;
        case "End":
          G.preventDefault(), (Ee = M.current[X.length - 1]) == null || Ee.focus();
          break;
        case "Escape":
          G.preventDefault(), W();
          break;
        case "Tab":
          x(!1);
          break;
      }
    },
    [X.length, W]
  ), be = (G, V, Z) => {
    G.preventDefault(), W(!1), d == null || d(G, V, Z);
  }, P = X.length === 0, ne = (G) => {
    O.current = G, typeof T == "function" ? T(G) : T && (T.current = G);
  };
  return /* @__PURE__ */ Y.jsxs(
    "div",
    {
      ref: ne,
      className: `uds-more-dropdown${h ? " dropdown-open-right" : ""}${P ? " uds-more-dropdown-hidden" : ""}`,
      "aria-hidden": P || void 0,
      children: [
        /* @__PURE__ */ Y.jsx(oc, { gaData: c ?? {}, children: /* @__PURE__ */ Y.jsxs(
          "button",
          {
            ref: L,
            type: "button",
            onClick: ee,
            onKeyDown: (G) => {
              var V, Z;
              G.key === "Enter" || G.key === " " ? (G.preventDefault(), A ? W() : (x(!0), requestAnimationFrame(() => {
                var Ee;
                return (Ee = M.current[0]) == null ? void 0 : Ee.focus();
              }))) : A && G.key === "ArrowDown" ? (G.preventDefault(), (V = M.current[0]) == null || V.focus()) : A && G.key === "ArrowUp" ? (G.preventDefault(), (Z = M.current[X.length - 1]) == null || Z.focus()) : A && G.key === "Escape" && (G.preventDefault(), W());
            },
            "aria-haspopup": "true",
            "aria-expanded": A,
            "aria-controls": te,
            "aria-label": `More, ${X.length} additional tab${X.length !== 1 ? "s" : ""}`,
            className: `uds-tab more-dropdown-button${q ? " active" : ""}`,
            children: [
              /* @__PURE__ */ Y.jsxs("span", { className: "more-dropdown-button-inner", children: [
                /* @__PURE__ */ Y.jsx("span", { "aria-hidden": "true", children: "More" }),
                /* @__PURE__ */ Y.jsx(
                  "i",
                  {
                    "aria-hidden": "true",
                    className: "fas fa-chevron-down more-dropdown-icon"
                  }
                )
              ] }),
              /* @__PURE__ */ Y.jsx("span", { className: "more-dropdown-button-indicator", "aria-hidden": "true" })
            ]
          }
        ) }),
        /* @__PURE__ */ Y.jsx(
          "ul",
          {
            id: te,
            role: "menu",
            "aria-label": "More tabs",
            "aria-hidden": !A,
            className: `more-dropdown-menu uds-more-dropdown-list${A ? " open" : ""}`,
            children: X.map((G, V) => {
              const Z = G.id === s;
              return /* @__PURE__ */ Y.jsx("li", { role: "none", children: /* @__PURE__ */ Y.jsxs(
                "button",
                {
                  ref: (Ee) => {
                    Ee && (M.current[V] = Ee);
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: -1,
                  onClick: (Ee) => be(Ee, G.id, G.title),
                  onKeyDown: (Ee) => B(Ee, V),
                  className: "more-dropdown-item",
                  "aria-current": Z || void 0,
                  children: [
                    G.icon && /* @__PURE__ */ Y.jsx(
                      "i",
                      {
                        "aria-hidden": "true",
                        className: `${G.icon[0]} fa-${G.icon[1]} me-1`
                      }
                    ),
                    G.title
                  ]
                }
              ) }, G.id);
            })
          }
        )
      ]
    }
  );
});
KE.displayName = "MoreDropdown";
m.shape({
  title: m.string,
  content: m.string,
  cite: m.shape({
    name: m.string,
    description: m.string
  })
}).isRequired, m.string, m.string, m.shape({
  containerCssClass: m.arrayOf(m.string),
  titleCssClass: m.arrayOf(m.string),
  contentCssClass: m.arrayOf(m.string)
});
m.oneOf(["video", "youtube"]), m.string, m.string, m.string, m.string, m.string, m.bool;
m.oneOfType([
  m.element,
  m.arrayOf(m.element)
]).isRequired;
m.number.isRequired;
m.arrayOf(m.string).isRequired, m.func;
m.func;
m.func;
m.arrayOf(m.element);
m.element, m.func;
m.arrayOf(m.object);
var PE = !1;
try {
  var cv = Object.defineProperty({}, "passive", {
    get: function() {
      PE = !0;
    }
  });
  window.addEventListener("testPassive", null, cv), window.removeEventListener("testPassive", null, cv);
} catch {
}
m.number, m.string, m.string, m.arrayOf(m.object).isRequired, m.string, m.func, m.string, m.string, m.func, m.bool, m.bool, m.bool, m.bool, m.bool, m.string, m.bool, m.bool, m.bool;
m.string.isRequired, m.arrayOf(
  m.shape({
    title: m.string.isRequired,
    content: m.string,
    eventLocation: m.string,
    eventTime: m.string,
    image: m.string,
    imageAltText: m.string,
    buttons: Yo.propTypes.buttons,
    linkLabel: m.string,
    linkUrl: m.string,
    tags: Yo.propTypes.tags
  })
).isRequired, Yo.propTypes.type, Yo.propTypes.eventFormat, Yo.propTypes.horizontal, m.string, m.string, m.bool, m.string;
m.number.isRequired, m.arrayOf(m.object).isRequired, m.string, m.string, m.bool, m.string;
const oh = {
  imageItems: m.arrayOf(
    m.shape({
      id: m.number,
      imageSource: m.string,
      thumbnailSource: m.string,
      imageAltText: m.string,
      content: m.oneOfType([m.string, m.element])
    })
  ),
  hasContent: m.bool
};
m.string, oh.imageItems, oh.hasContent;
oh.imageItems.isRequired, oh.hasContent, m.string, m.string, m.bool;
m.arrayOf(
  m.shape({
    title: m.string,
    content: m.string,
    cite: m.shape({
      name: m.string,
      description: m.string
    })
  })
).isRequired, m.shape({
  containerCssClass: m.arrayOf(m.string),
  titleCssClass: m.arrayOf(m.string),
  contentCssClass: m.arrayOf(m.string)
}), m.string, m.string, m.bool, m.bool, m.bool;
var n0 = { exports: {} }, ym = {}, fv = { exports: {} }, dv = {}, pv;
function ZE() {
  return pv || (pv = 1, (function(i) {
    function o(U, R) {
      var H = U.length;
      U.push(R);
      e: for (; 0 < H; ) {
        var re = H - 1 >>> 1, se = U[re];
        if (0 < c(se, R))
          U[re] = R, U[H] = se, H = re;
        else break e;
      }
    }
    function s(U) {
      return U.length === 0 ? null : U[0];
    }
    function d(U) {
      if (U.length === 0) return null;
      var R = U[0], H = U.pop();
      if (H !== R) {
        U[0] = H;
        e: for (var re = 0, se = U.length, ie = se >>> 1; re < ie; ) {
          var we = 2 * (re + 1) - 1, ue = U[we], I = we + 1, ge = U[I];
          if (0 > c(ue, H))
            I < se && 0 > c(ge, ue) ? (U[re] = ge, U[I] = H, re = I) : (U[re] = ue, U[we] = H, re = we);
          else if (I < se && 0 > c(ge, H))
            U[re] = ge, U[I] = H, re = I;
          else break e;
        }
      }
      return R;
    }
    function c(U, R) {
      var H = U.sortIndex - R.sortIndex;
      return H !== 0 ? H : U.id - R.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var T = Date, A = T.now();
      i.unstable_now = function() {
        return T.now() - A;
      };
    }
    var x = [], O = [], L = 1, M = null, D = 3, te = !1, q = !1, X = !1, W = !1, ee = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
    function P(U) {
      for (var R = s(O); R !== null; ) {
        if (R.callback === null) d(O);
        else if (R.startTime <= U)
          d(O), R.sortIndex = R.expirationTime, o(x, R);
        else break;
        R = s(O);
      }
    }
    function ne(U) {
      if (X = !1, P(U), !q)
        if (s(x) !== null)
          q = !0, G || (G = !0, Be());
        else {
          var R = s(O);
          R !== null && $e(ne, R.startTime - U);
        }
    }
    var G = !1, V = -1, Z = 5, Ee = -1;
    function He() {
      return W ? !0 : !(i.unstable_now() - Ee < Z);
    }
    function qe() {
      if (W = !1, G) {
        var U = i.unstable_now();
        Ee = U;
        var R = !0;
        try {
          e: {
            q = !1, X && (X = !1, B(V), V = -1), te = !0;
            var H = D;
            try {
              t: {
                for (P(U), M = s(x); M !== null && !(M.expirationTime > U && He()); ) {
                  var re = M.callback;
                  if (typeof re == "function") {
                    M.callback = null, D = M.priorityLevel;
                    var se = re(
                      M.expirationTime <= U
                    );
                    if (U = i.unstable_now(), typeof se == "function") {
                      M.callback = se, P(U), R = !0;
                      break t;
                    }
                    M === s(x) && d(x), P(U);
                  } else d(x);
                  M = s(x);
                }
                if (M !== null) R = !0;
                else {
                  var ie = s(O);
                  ie !== null && $e(
                    ne,
                    ie.startTime - U
                  ), R = !1;
                }
              }
              break e;
            } finally {
              M = null, D = H, te = !1;
            }
            R = void 0;
          }
        } finally {
          R ? Be() : G = !1;
        }
      }
    }
    var Be;
    if (typeof be == "function")
      Be = function() {
        be(qe);
      };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), gt = _e.port2;
      _e.port1.onmessage = qe, Be = function() {
        gt.postMessage(null);
      };
    } else
      Be = function() {
        ee(qe, 0);
      };
    function $e(U, R) {
      V = ee(function() {
        U(i.unstable_now());
      }, R);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, i.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Z = 0 < U ? Math.floor(1e3 / U) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, i.unstable_next = function(U) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = D;
      }
      var H = D;
      D = R;
      try {
        return U();
      } finally {
        D = H;
      }
    }, i.unstable_requestPaint = function() {
      W = !0;
    }, i.unstable_runWithPriority = function(U, R) {
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
      var H = D;
      D = U;
      try {
        return R();
      } finally {
        D = H;
      }
    }, i.unstable_scheduleCallback = function(U, R, H) {
      var re = i.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? re + H : re) : H = re, U) {
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
      return se = H + se, U = {
        id: L++,
        callback: R,
        priorityLevel: U,
        startTime: H,
        expirationTime: se,
        sortIndex: -1
      }, H > re ? (U.sortIndex = H, o(O, U), s(x) === null && U === s(O) && (X ? (B(V), V = -1) : X = !0, $e(ne, H - re))) : (U.sortIndex = se, o(x, U), q || te || (q = !0, G || (G = !0, Be()))), U;
    }, i.unstable_shouldYield = He, i.unstable_wrapCallback = function(U) {
      var R = D;
      return function() {
        var H = D;
        D = R;
        try {
          return U.apply(this, arguments);
        } finally {
          D = H;
        }
      };
    };
  })(dv)), dv;
}
var mv;
function WE() {
  return mv || (mv = 1, fv.exports = ZE()), fv.exports;
}
var hv;
function JE() {
  if (hv) return ym;
  hv = 1;
  var i = { env: { NODE_ENV: "production" } }, o = WE(), s = Et, d = Iv;
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function T(e) {
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
  function A(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function x(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function O(e) {
    if (T(e) !== e)
      throw Error(c(188));
  }
  function L(e) {
    var t = e.alternate;
    if (!t) {
      if (t = T(e), t === null) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var r = a.alternate;
      if (r === null) {
        if (l = a.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (a.child === r.child) {
        for (r = a.child; r; ) {
          if (r === n) return O(a), e;
          if (r === l) return O(a), t;
          r = r.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) n = a, l = r;
      else {
        for (var u = !1, f = a.child; f; ) {
          if (f === n) {
            u = !0, n = a, l = r;
            break;
          }
          if (f === l) {
            u = !0, l = a, n = r;
            break;
          }
          f = f.sibling;
        }
        if (!u) {
          for (f = r.child; f; ) {
            if (f === n) {
              u = !0, n = r, l = a;
              break;
            }
            if (f === l) {
              u = !0, l = r, n = a;
              break;
            }
            f = f.sibling;
          }
          if (!u) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function M(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = M(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var D = Object.assign, te = Symbol.for("react.element"), q = Symbol.for("react.transitional.element"), X = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), be = Symbol.for("react.consumer"), P = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), He = Symbol.for("react.activity"), qe = Symbol.for("react.memo_cache_sentinel"), Be = Symbol.iterator;
  function _e(e) {
    return e === null || typeof e != "object" ? null : (e = Be && e[Be] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var gt = Symbol.for("react.client.reference");
  function $e(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === gt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case B:
        return "Profiler";
      case ee:
        return "StrictMode";
      case G:
        return "Suspense";
      case V:
        return "SuspenseList";
      case He:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case X:
          return "Portal";
        case P:
          return e.displayName || "Context";
        case be:
          return (e._context.displayName || "Context") + ".Consumer";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Z:
          return t = e.displayName || null, t !== null ? t : $e(e.type) || "Memo";
        case Ee:
          t = e._payload, e = e._init;
          try {
            return $e(e(t));
          } catch {
          }
      }
    return null;
  }
  var U = Array.isArray, R = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = {
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
  function I(e, t) {
    ie++, se[ie] = e.current, e.current = t;
  }
  var ge = we(null), yt = we(null), tt = we(null), fn = we(null);
  function dn(e, t) {
    switch (I(tt, t), I(yt, e), I(ge, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Cp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Cp(t), e = Dp(t, e);
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
    ue(ge), I(ge, e);
  }
  function nt() {
    ue(ge), ue(yt), ue(tt);
  }
  function De(e) {
    e.memoizedState !== null && I(fn, e);
    var t = ge.current, n = Dp(t, e.type);
    t !== n && (I(yt, e), I(ge, n));
  }
  function Xl(e) {
    yt.current === e && (ue(ge), ue(yt)), fn.current === e && (ue(fn), ii._currentValue = re);
  }
  var Re, cr;
  function ke(e) {
    if (Re === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Re = t && t[1] || "", cr = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Re + e + cr;
  }
  var Dn = !1;
  function va(e, t) {
    if (!e || Dn) return "";
    Dn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var C = function() {
                throw Error();
              };
              if (Object.defineProperty(C.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(C, []);
                } catch (E) {
                  var k = E;
                }
                Reflect.construct(e, [], C);
              } else {
                try {
                  C.call();
                } catch (E) {
                  k = E;
                }
                e.call(C.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (E) {
                k = E;
              }
              (C = e()) && typeof C.catch == "function" && C.catch(function() {
              });
            }
          } catch (E) {
            if (E && k && typeof E.stack == "string")
              return [E.stack, k.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = l.DetermineComponentFrameRoot(), u = r[0], f = r[1];
      if (u && f) {
        var p = u.split(`
`), w = f.split(`
`);
        for (a = l = 0; l < p.length && !p[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; a < w.length && !w[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (l === p.length || a === w.length)
          for (l = p.length - 1, a = w.length - 1; 1 <= l && 0 <= a && p[l] !== w[a]; )
            a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (p[l] !== w[a]) {
            if (l !== 1 || a !== 1)
              do
                if (l--, a--, 0 > a || p[l] !== w[a]) {
                  var z = `
` + p[l].replace(" at new ", " at ");
                  return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      Dn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? ke(n) : "";
  }
  function yn(e, t) {
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
        return va(e.type, !1);
      case 11:
        return va(e.type.render, !1);
      case 1:
        return va(e.type, !0);
      case 31:
        return ke("Activity");
      default:
        return "";
    }
  }
  function fr(e) {
    try {
      var t = "", n = null;
      do
        t += yn(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Ql = Object.prototype.hasOwnProperty, Sa = o.unstable_scheduleCallback, wa = o.unstable_cancelCallback, bn = o.unstable_shouldYield, $l = o.unstable_requestPaint, Ye = o.unstable_now, dr = o.unstable_getCurrentPriorityLevel, Ta = o.unstable_ImmediatePriority, ka = o.unstable_UserBlockingPriority, al = o.unstable_NormalPriority, rl = o.unstable_LowPriority, Il = o.unstable_IdlePriority, Ea = o.log, vi = o.unstable_setDisableYieldValue, il = null, pt = null;
  function $t(e) {
    if (typeof Ea == "function" && vi(e), pt && typeof pt.setStrictMode == "function")
      try {
        pt.setStrictMode(il, e);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : pr, ol = Math.log, It = Math.LN2;
  function pr(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ol(e) / It | 0) | 0;
  }
  var Kl = 256, Pl = 262144, ul = 4194304;
  function vn(e) {
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
  function Rn(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, r = e.suspendedLanes, u = e.pingedLanes;
    e = e.warmLanes;
    var f = l & 134217727;
    return f !== 0 ? (l = f & ~r, l !== 0 ? a = vn(l) : (u &= f, u !== 0 ? a = vn(u) : n || (n = f & ~e, n !== 0 && (a = vn(n))))) : (f = l & ~r, f !== 0 ? a = vn(f) : u !== 0 ? a = vn(u) : n || (n = l & ~e, n !== 0 && (a = vn(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & r) === 0 && (r = a & -a, n = t & -t, r >= n || r === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function Sn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Kt(e, t) {
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
  function Mn() {
    var e = ul;
    return ul <<= 1, (ul & 62914560) === 0 && (ul = 4194304), e;
  }
  function Zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ln(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Io(e, t, n, l, a, r) {
    var u = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, p = e.expirationTimes, w = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var z = 31 - rt(n), C = 1 << z;
      f[z] = 0, p[z] = -1;
      var k = w[z];
      if (k !== null)
        for (w[z] = null, z = 0; z < k.length; z++) {
          var E = k[z];
          E !== null && (E.lane &= -536870913);
        }
      n &= ~C;
    }
    l !== 0 && mr(e, l, 0), r !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(u & ~t));
  }
  function mr(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - rt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function xa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - rt(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function hr(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Wl(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Wl(e) {
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
  function gr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function sl() {
    var e = H.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : tm(e.type));
  }
  function Si(e, t) {
    var n = H.p;
    try {
      return H.p = e, t();
    } finally {
      H.p = n;
    }
  }
  var wn = Math.random().toString(36).slice(2), oe = "__reactFiber$" + wn, Fe = "__reactProps$" + wn, cl = "__reactContainer$" + wn, Aa = "__reactEvents$" + wn, yr = "__reactListeners$" + wn, wi = "__reactHandles$" + wn, br = "__reactResources$" + wn, Jl = "__reactMarker$" + wn;
  function vr(e) {
    delete e[oe], delete e[Fe], delete e[Aa], delete e[yr], delete e[wi];
  }
  function fl(e) {
    var t = e[oe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[cl] || n[oe]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Bp(e); e !== null; ) {
            if (n = e[oe]) return n;
            e = Bp(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function dl(e) {
    if (e = e[oe] || e[cl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Mt(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Un(e) {
    var t = e[br];
    return t || (t = e[br] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Me(e) {
    e[Jl] = !0;
  }
  var Ti = /* @__PURE__ */ new Set(), ki = {};
  function Tn(e, t) {
    jn(e, t), jn(e + "Capture", t);
  }
  function jn(e, t) {
    for (ki[e] = t, e = 0; e < t.length; e++)
      Ti.add(t[e]);
  }
  var _a = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), za = {}, ea = {};
  function pl(e) {
    return Ql.call(ea, e) ? !0 : Ql.call(za, e) ? !1 : _a.test(e) ? ea[e] = !0 : (za[e] = !0, !1);
  }
  function kn(e, t, n) {
    if (pl(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function xt(e, t, n) {
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
  function pn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function At(e) {
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
  function Sr(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ei(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var a = l.get, r = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(u) {
          n = "" + u, r.call(this, u);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
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
  function wr(e) {
    if (!e._valueTracker) {
      var t = Sr(e) ? "checked" : "value";
      e._valueTracker = Ei(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Tr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = Sr(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Na(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ko = /[\n"\\]/g;
  function Tt(e) {
    return e.replace(
      Ko,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ml(e, t, n, l, a, r, u, f) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? b(e, u, At(t)) : n != null ? b(e, u, At(n)) : l != null && e.removeAttribute("value"), a == null && r != null && (e.defaultChecked = !!r), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + At(f) : e.removeAttribute("name");
  }
  function Oa(e, t, n, l, a, r, u, f) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || n != null) {
      if (!(r !== "submit" && r !== "reset" || t != null)) {
        wr(e);
        return;
      }
      n = n != null ? "" + At(n) : "", t = t != null ? "" + At(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = f ? e.checked : !!l, e.defaultChecked = !!l, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), wr(e);
  }
  function b(e, t, n) {
    t === "number" && Na(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function g(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++)
        t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + At(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _(e, t, n) {
    if (t != null && (t = "" + At(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + At(n) : "";
  }
  function j(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (U(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = At(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), wr(e);
  }
  function $(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var me = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ye(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || me.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function mt(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && ye(e, a, l);
    } else
      for (var r in t)
        t.hasOwnProperty(r) && ye(e, r, t[r]);
  }
  function lt(e) {
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
  ]), un = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _t(e) {
    return un.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function it() {
  }
  var Po = null;
  function Zo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ca = null, Da = null;
  function Nc(e) {
    var t = dl(e);
    if (t && (e = t.stateNode)) {
      var n = e[Fe] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ml(
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
              'input[name="' + Tt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[Fe] || null;
                if (!a) throw Error(c(90));
                ml(
                  l,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && Tr(l);
          }
          break e;
        case "textarea":
          _(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && g(e, !!n.multiple, t, !1);
      }
    }
  }
  var Wo = !1;
  function Oc(e, t, n) {
    if (Wo) return e(t, n);
    Wo = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Wo = !1, (Ca !== null || Da !== null) && (fo(), Ca && (t = Ca, e = Da, Da = Ca = null, Nc(t), e)))
        for (t = 0; t < e.length; t++) Nc(e[t]);
    }
  }
  function kr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Fe] || null;
    if (l === null) return null;
    n = l[t];
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
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
  var Hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jo = !1;
  if (Hn)
    try {
      var Er = {};
      Object.defineProperty(Er, "passive", {
        get: function() {
          Jo = !0;
        }
      }), window.addEventListener("test", Er, Er), window.removeEventListener("test", Er, Er);
    } catch {
      Jo = !1;
    }
  var hl = null, eu = null, xi = null;
  function Cc() {
    if (xi) return xi;
    var e, t = eu, n = t.length, l, a = "value" in hl ? hl.value : hl.textContent, r = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var u = n - e;
    for (l = 1; l <= u && t[n - l] === a[r - l]; l++) ;
    return xi = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Ai(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _i() {
    return !0;
  }
  function Dc() {
    return !1;
  }
  function zt(e) {
    function t(n, l, a, r, u) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = r, this.target = u, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(r) : r[f]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? _i : Dc, this.isPropagationStopped = Dc, this;
    }
    return D(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _i);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _i);
      },
      persist: function() {
      },
      isPersistent: _i
    }), t;
  }
  var ta = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, zi = zt(ta), xr = D({}, ta, { view: 0, detail: 0 }), xh = zt(xr), tu, nu, Ar, Ni = D({}, xr, {
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
    getModifierState: au,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ar && (Ar && e.type === "mousemove" ? (tu = e.screenX - Ar.screenX, nu = e.screenY - Ar.screenY) : nu = tu = 0, Ar = e), tu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : nu;
    }
  }), Rc = zt(Ni), Ah = D({}, Ni, { dataTransfer: 0 }), _h = zt(Ah), zh = D({}, xr, { relatedTarget: 0 }), lu = zt(zh), Nh = D({}, ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Oh = zt(Nh), Ch = D({}, ta, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Dh = zt(Ch), Rh = D({}, ta, { data: 0 }), Mc = zt(Rh), Mh = {
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
  }, Lh = {
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
  }, Uh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function jh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Uh[e]) ? !!t[e] : !1;
  }
  function au() {
    return jh;
  }
  var Hh = D({}, xr, {
    key: function(e) {
      if (e.key) {
        var t = Mh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ai(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: au,
    charCode: function(e) {
      return e.type === "keypress" ? Ai(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ai(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Bh = zt(Hh), qh = D({}, Ni, {
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
  }), Lc = zt(qh), Gh = D({}, xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: au
  }), Vh = zt(Gh), Yh = D({}, ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fh = zt(Yh), Xh = D({}, Ni, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qh = zt(Xh), $h = D({}, ta, {
    newState: 0,
    oldState: 0
  }), Ih = zt($h), Kh = [9, 13, 27, 32], ru = Hn && "CompositionEvent" in window, _r = null;
  Hn && "documentMode" in document && (_r = document.documentMode);
  var Ph = Hn && "TextEvent" in window && !_r, Uc = Hn && (!ru || _r && 8 < _r && 11 >= _r), jc = " ", Hc = !1;
  function Bc(e, t) {
    switch (e) {
      case "keyup":
        return Kh.indexOf(t.keyCode) !== -1;
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
  function qc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ra = !1;
  function Zh(e, t) {
    switch (e) {
      case "compositionend":
        return qc(t);
      case "keypress":
        return t.which !== 32 ? null : (Hc = !0, jc);
      case "textInput":
        return e = t.data, e === jc && Hc ? null : e;
      default:
        return null;
    }
  }
  function Wh(e, t) {
    if (Ra)
      return e === "compositionend" || !ru && Bc(e, t) ? (e = Cc(), xi = eu = hl = null, Ra = !1, e) : null;
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
        return Uc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Jh = {
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
  function Gc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Jh[e.type] : t === "textarea";
  }
  function Vc(e, t, n, l) {
    Ca ? Da ? Da.push(l) : Da = [l] : Ca = l, t = vo(t, "onChange"), 0 < t.length && (n = new zi(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var zr = null, Nr = null;
  function eg(e) {
    xp(e, 0);
  }
  function Oi(e) {
    var t = Mt(e);
    if (Tr(t)) return e;
  }
  function Yc(e, t) {
    if (e === "change") return t;
  }
  var Fc = !1;
  if (Hn) {
    var iu;
    if (Hn) {
      var ou = "oninput" in document;
      if (!ou) {
        var Xc = document.createElement("div");
        Xc.setAttribute("oninput", "return;"), ou = typeof Xc.oninput == "function";
      }
      iu = ou;
    } else iu = !1;
    Fc = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function Qc() {
    zr && (zr.detachEvent("onpropertychange", $c), Nr = zr = null);
  }
  function $c(e) {
    if (e.propertyName === "value" && Oi(Nr)) {
      var t = [];
      Vc(
        t,
        Nr,
        e,
        Zo(e)
      ), Oc(eg, t);
    }
  }
  function tg(e, t, n) {
    e === "focusin" ? (Qc(), zr = t, Nr = n, zr.attachEvent("onpropertychange", $c)) : e === "focusout" && Qc();
  }
  function ng(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Oi(Nr);
  }
  function lg(e, t) {
    if (e === "click") return Oi(t);
  }
  function ag(e, t) {
    if (e === "input" || e === "change")
      return Oi(t);
  }
  function rg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ht = typeof Object.is == "function" ? Object.is : rg;
  function Or(e, t) {
    if (Ht(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!Ql.call(t, a) || !Ht(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function Ic(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Kc(e, t) {
    var n = Ic(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
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
      n = Ic(n);
    }
  }
  function Pc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zc(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Na(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Na(e.document);
    }
    return t;
  }
  function uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var ig = Hn && "documentMode" in document && 11 >= document.documentMode, Ma = null, su = null, Cr = null, cu = !1;
  function Wc(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    cu || Ma == null || Ma !== Na(l) || (l = Ma, "selectionStart" in l && uu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Cr && Or(Cr, l) || (Cr = l, l = vo(su, "onSelect"), 0 < l.length && (t = new zi(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = Ma)));
  }
  function na(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var La = {
    animationend: na("Animation", "AnimationEnd"),
    animationiteration: na("Animation", "AnimationIteration"),
    animationstart: na("Animation", "AnimationStart"),
    transitionrun: na("Transition", "TransitionRun"),
    transitionstart: na("Transition", "TransitionStart"),
    transitioncancel: na("Transition", "TransitionCancel"),
    transitionend: na("Transition", "TransitionEnd")
  }, fu = {}, Jc = {};
  Hn && (Jc = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);
  function la(e) {
    if (fu[e]) return fu[e];
    if (!La[e]) return e;
    var t = La[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Jc)
        return fu[e] = t[n];
    return e;
  }
  var ef = la("animationend"), tf = la("animationiteration"), nf = la("animationstart"), og = la("transitionrun"), ug = la("transitionstart"), sg = la("transitioncancel"), lf = la("transitionend"), af = /* @__PURE__ */ new Map(), du = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  du.push("scrollEnd");
  function mn(e, t) {
    af.set(e, t), Tn(t, [e]);
  }
  var Ci = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof i == "object" && typeof i.emit == "function") {
      i.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Pt = [], Ua = 0, pu = 0;
  function Di() {
    for (var e = Ua, t = pu = Ua = 0; t < e; ) {
      var n = Pt[t];
      Pt[t++] = null;
      var l = Pt[t];
      Pt[t++] = null;
      var a = Pt[t];
      Pt[t++] = null;
      var r = Pt[t];
      if (Pt[t++] = null, l !== null && a !== null) {
        var u = l.pending;
        u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a;
      }
      r !== 0 && rf(n, a, r);
    }
  }
  function Ri(e, t, n, l) {
    Pt[Ua++] = e, Pt[Ua++] = t, Pt[Ua++] = n, Pt[Ua++] = l, pu |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function mu(e, t, n, l) {
    return Ri(e, t, n, l), Mi(e);
  }
  function aa(e, t) {
    return Ri(e, null, null, t), Mi(e);
  }
  function rf(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, r = e.return; r !== null; )
      r.childLanes |= n, l = r.alternate, l !== null && (l.childLanes |= n), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (a = !0)), e = r, r = r.return;
    return e.tag === 3 ? (r = e.stateNode, a && t !== null && (a = 31 - rt(n), e = r.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), r) : null;
  }
  function Mi(e) {
    if (50 < Jr)
      throw Jr = 0, ks = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ja = {};
  function cg(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Bt(e, t, n, l) {
    return new cg(e, t, n, l);
  }
  function hu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Bn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Bt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function of(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Li(e, t, n, l, a, r) {
    var u = 0;
    if (l = e, typeof e == "function") hu(e) && (u = 1);
    else if (typeof e == "string")
      u = hy(
        e,
        n,
        ge.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case He:
          return e = Bt(31, n, t, a), e.elementType = He, e.lanes = r, e;
        case W:
          return ra(n.children, a, r, t);
        case ee:
          u = 8, a |= 24;
          break;
        case B:
          return e = Bt(12, n, t, a | 2), e.elementType = B, e.lanes = r, e;
        case G:
          return e = Bt(13, n, t, a), e.elementType = G, e.lanes = r, e;
        case V:
          return e = Bt(19, n, t, a), e.elementType = V, e.lanes = r, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case P:
                u = 10;
                break e;
              case be:
                u = 9;
                break e;
              case ne:
                u = 11;
                break e;
              case Z:
                u = 14;
                break e;
              case Ee:
                u = 16, l = null;
                break e;
            }
          u = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Bt(u, n, t, a), t.elementType = e, t.type = l, t.lanes = r, t;
  }
  function ra(e, t, n, l) {
    return e = Bt(7, e, l, t), e.lanes = n, e;
  }
  function gu(e, t, n) {
    return e = Bt(6, e, null, t), e.lanes = n, e;
  }
  function uf(e) {
    var t = Bt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function yu(e, t, n) {
    return t = Bt(
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
  var sf = /* @__PURE__ */ new WeakMap();
  function Zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = sf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: fr(t)
      }, sf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: fr(t)
    };
  }
  var Ha = [], Ba = 0, Ui = null, Dr = 0, Wt = [], Jt = 0, gl = null, En = 1, xn = "";
  function qn(e, t) {
    Ha[Ba++] = Dr, Ha[Ba++] = Ui, Ui = e, Dr = t;
  }
  function cf(e, t, n) {
    Wt[Jt++] = En, Wt[Jt++] = xn, Wt[Jt++] = gl, gl = e;
    var l = En;
    e = xn;
    var a = 32 - rt(l) - 1;
    l &= ~(1 << a), n += 1;
    var r = 32 - rt(t) + a;
    if (30 < r) {
      var u = a - a % 5;
      r = (l & (1 << u) - 1).toString(32), l >>= u, a -= u, En = 1 << 32 - rt(t) + a | n << a | l, xn = r + e;
    } else
      En = 1 << r | n << a | l, xn = e;
  }
  function bu(e) {
    e.return !== null && (qn(e, 1), cf(e, 1, 0));
  }
  function vu(e) {
    for (; e === Ui; )
      Ui = Ha[--Ba], Ha[Ba] = null, Dr = Ha[--Ba], Ha[Ba] = null;
    for (; e === gl; )
      gl = Wt[--Jt], Wt[Jt] = null, xn = Wt[--Jt], Wt[Jt] = null, En = Wt[--Jt], Wt[Jt] = null;
  }
  function ff(e, t) {
    Wt[Jt++] = En, Wt[Jt++] = xn, Wt[Jt++] = gl, En = t.id, xn = t.overflow, gl = e;
  }
  var ot = null, Le = null, he = !1, yl = null, en = !1, Su = Error(c(519));
  function bl(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Rr(Zt(t, e)), Su;
  }
  function df(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[oe] = e, t[Fe] = l, n) {
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
        for (n = 0; n < ti.length; n++)
          fe(ti[n], t);
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
        fe("invalid", t), Oa(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        fe("invalid", t);
        break;
      case "textarea":
        fe("invalid", t), j(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Np(t.textContent, n) ? (l.popover != null && (fe("beforetoggle", t), fe("toggle", t)), l.onScroll != null && fe("scroll", t), l.onScrollEnd != null && fe("scrollend", t), l.onClick != null && (t.onclick = it), t = !0) : t = !1, t || bl(e, !0);
  }
  function pf(e) {
    for (ot = e.return; ot; )
      switch (ot.tag) {
        case 5:
        case 31:
        case 13:
          en = !1;
          return;
        case 27:
        case 3:
          en = !0;
          return;
        default:
          ot = ot.return;
      }
  }
  function qa(e) {
    if (e !== ot) return !1;
    if (!he) return pf(e), he = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Hs(e.type, e.memoizedProps)), n = !n), n && Le && bl(e), pf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = Hp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = Hp(e);
    } else
      t === 27 ? (t = Le, Dl(e.type) ? (e = Ys, Ys = null, Le = e) : Le = t) : Le = ot ? tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ia() {
    Le = ot = null, he = !1;
  }
  function wu() {
    var e = yl;
    return e !== null && (Dt === null ? Dt = e : Dt.push.apply(
      Dt,
      e
    ), yl = null), e;
  }
  function Rr(e) {
    yl === null ? yl = [e] : yl.push(e);
  }
  var Tu = we(null), oa = null, Gn = null;
  function vl(e, t, n) {
    I(Tu, t._currentValue), t._currentValue = n;
  }
  function Vn(e) {
    e._currentValue = Tu.current, ue(Tu);
  }
  function ku(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Eu(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var r = a.dependencies;
      if (r !== null) {
        var u = a.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var f = r;
          r = a;
          for (var p = 0; p < t.length; p++)
            if (f.context === t[p]) {
              r.lanes |= n, f = r.alternate, f !== null && (f.lanes |= n), ku(
                r.return,
                n,
                e
              ), l || (u = null);
              break e;
            }
          r = f.next;
        }
      } else if (a.tag === 18) {
        if (u = a.return, u === null) throw Error(c(341));
        u.lanes |= n, r = u.alternate, r !== null && (r.lanes |= n), ku(u, n, e), u = null;
      } else u = a.child;
      if (u !== null) u.return = a;
      else
        for (u = a; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          if (a = u.sibling, a !== null) {
            a.return = u.return, u = a;
            break;
          }
          u = u.return;
        }
      a = u;
    }
  }
  function Ga(e, t, n, l) {
    e = null;
    for (var a = t, r = !1; a !== null; ) {
      if (!r) {
        if ((a.flags & 524288) !== 0) r = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var u = a.alternate;
        if (u === null) throw Error(c(387));
        if (u = u.memoizedProps, u !== null) {
          var f = a.type;
          Ht(a.pendingProps.value, u.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (a === fn.current) {
        if (u = a.alternate, u === null) throw Error(c(387));
        u.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(ii) : e = [ii]);
      }
      a = a.return;
    }
    e !== null && Eu(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function ji(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ht(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ua(e) {
    oa = e, Gn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ut(e) {
    return mf(oa, e);
  }
  function Hi(e, t) {
    return oa === null && ua(e), mf(e, t);
  }
  function mf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Gn === null) {
      if (e === null) throw Error(c(308));
      Gn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Gn = Gn.next = t;
    return n;
  }
  var fg = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, dg = o.unstable_scheduleCallback, pg = o.unstable_NormalPriority, Ie = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function xu() {
    return {
      controller: new fg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Mr(e) {
    e.refCount--, e.refCount === 0 && dg(pg, function() {
      e.controller.abort();
    });
  }
  var Lr = null, Au = 0, Va = 0, Ya = null;
  function mg(e, t) {
    if (Lr === null) {
      var n = Lr = [];
      Au = 0, Va = Ns(), Ya = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Au++, t.then(hf, hf), t;
  }
  function hf() {
    if (--Au === 0 && Lr !== null) {
      Ya !== null && (Ya.status = "fulfilled");
      var e = Lr;
      Lr = null, Va = 0, Ya = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function hg(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        n.push(a);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var a = 0; a < n.length; a++) (0, n[a])(t);
      },
      function(a) {
        for (l.status = "rejected", l.reason = a, a = 0; a < n.length; a++)
          (0, n[a])(void 0);
      }
    ), l;
  }
  var gf = R.S;
  R.S = function(e, t) {
    Jd = Ye(), typeof t == "object" && t !== null && typeof t.then == "function" && mg(e, t), gf !== null && gf(e, t);
  };
  var sa = we(null);
  function _u() {
    var e = sa.current;
    return e !== null ? e : Ce.pooledCache;
  }
  function Bi(e, t) {
    t === null ? I(sa, sa.current) : I(sa, t.pool);
  }
  function yf() {
    var e = _u();
    return e === null ? null : { parent: Ie._currentValue, pool: e };
  }
  var Fa = Error(c(460)), zu = Error(c(474)), qi = Error(c(542)), Gi = { then: function() {
  } };
  function bf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function vf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(it, it), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, wf(e), e;
      default:
        if (typeof t.status == "string") t.then(it, it);
        else {
          if (e = Ce, e !== null && 100 < e.shellSuspendCounter)
            throw Error(c(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, wf(e), e;
        }
        throw fa = t, Fa;
    }
  }
  function ca(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (fa = n, Fa) : n;
    }
  }
  var fa = null;
  function Sf() {
    if (fa === null) throw Error(c(459));
    var e = fa;
    return fa = null, e;
  }
  function wf(e) {
    if (e === Fa || e === qi)
      throw Error(c(483));
  }
  var Xa = null, Ur = 0;
  function Vi(e) {
    var t = Ur;
    return Ur += 1, Xa === null && (Xa = []), vf(Xa, e, t);
  }
  function jr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Yi(e, t) {
    throw t.$$typeof === te ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Tf(e) {
    function t(v, y) {
      if (e) {
        var S = v.deletions;
        S === null ? (v.deletions = [y], v.flags |= 16) : S.push(y);
      }
    }
    function n(v, y) {
      if (!e) return null;
      for (; y !== null; )
        t(v, y), y = y.sibling;
      return null;
    }
    function l(v) {
      for (var y = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? y.set(v.key, v) : y.set(v.index, v), v = v.sibling;
      return y;
    }
    function a(v, y) {
      return v = Bn(v, y), v.index = 0, v.sibling = null, v;
    }
    function r(v, y, S) {
      return v.index = S, e ? (S = v.alternate, S !== null ? (S = S.index, S < y ? (v.flags |= 67108866, y) : S) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
    }
    function u(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function f(v, y, S, N) {
      return y === null || y.tag !== 6 ? (y = gu(S, v.mode, N), y.return = v, y) : (y = a(y, S), y.return = v, y);
    }
    function p(v, y, S, N) {
      var K = S.type;
      return K === W ? z(
        v,
        y,
        S.props.children,
        N,
        S.key
      ) : y !== null && (y.elementType === K || typeof K == "object" && K !== null && K.$$typeof === Ee && ca(K) === y.type) ? (y = a(y, S.props), jr(y, S), y.return = v, y) : (y = Li(
        S.type,
        S.key,
        S.props,
        null,
        v.mode,
        N
      ), jr(y, S), y.return = v, y);
    }
    function w(v, y, S, N) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== S.containerInfo || y.stateNode.implementation !== S.implementation ? (y = yu(S, v.mode, N), y.return = v, y) : (y = a(y, S.children || []), y.return = v, y);
    }
    function z(v, y, S, N, K) {
      return y === null || y.tag !== 7 ? (y = ra(
        S,
        v.mode,
        N,
        K
      ), y.return = v, y) : (y = a(y, S), y.return = v, y);
    }
    function C(v, y, S) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = gu(
          "" + y,
          v.mode,
          S
        ), y.return = v, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case q:
            return S = Li(
              y.type,
              y.key,
              y.props,
              null,
              v.mode,
              S
            ), jr(S, y), S.return = v, S;
          case X:
            return y = yu(
              y,
              v.mode,
              S
            ), y.return = v, y;
          case Ee:
            return y = ca(y), C(v, y, S);
        }
        if (U(y) || _e(y))
          return y = ra(
            y,
            v.mode,
            S,
            null
          ), y.return = v, y;
        if (typeof y.then == "function")
          return C(v, Vi(y), S);
        if (y.$$typeof === P)
          return C(
            v,
            Hi(v, y),
            S
          );
        Yi(v, y);
      }
      return null;
    }
    function k(v, y, S, N) {
      var K = y !== null ? y.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return K !== null ? null : f(v, y, "" + S, N);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case q:
            return S.key === K ? p(v, y, S, N) : null;
          case X:
            return S.key === K ? w(v, y, S, N) : null;
          case Ee:
            return S = ca(S), k(v, y, S, N);
        }
        if (U(S) || _e(S))
          return K !== null ? null : z(v, y, S, N, null);
        if (typeof S.then == "function")
          return k(
            v,
            y,
            Vi(S),
            N
          );
        if (S.$$typeof === P)
          return k(
            v,
            y,
            Hi(v, S),
            N
          );
        Yi(v, S);
      }
      return null;
    }
    function E(v, y, S, N, K) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return v = v.get(S) || null, f(y, v, "" + N, K);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case q:
            return v = v.get(
              N.key === null ? S : N.key
            ) || null, p(y, v, N, K);
          case X:
            return v = v.get(
              N.key === null ? S : N.key
            ) || null, w(y, v, N, K);
          case Ee:
            return N = ca(N), E(
              v,
              y,
              S,
              N,
              K
            );
        }
        if (U(N) || _e(N))
          return v = v.get(S) || null, z(y, v, N, K, null);
        if (typeof N.then == "function")
          return E(
            v,
            y,
            S,
            Vi(N),
            K
          );
        if (N.$$typeof === P)
          return E(
            v,
            y,
            S,
            Hi(y, N),
            K
          );
        Yi(y, N);
      }
      return null;
    }
    function F(v, y, S, N) {
      for (var K = null, ve = null, Q = y, ae = y = 0, pe = null; Q !== null && ae < S.length; ae++) {
        Q.index > ae ? (pe = Q, Q = null) : pe = Q.sibling;
        var Se = k(
          v,
          Q,
          S[ae],
          N
        );
        if (Se === null) {
          Q === null && (Q = pe);
          break;
        }
        e && Q && Se.alternate === null && t(v, Q), y = r(Se, y, ae), ve === null ? K = Se : ve.sibling = Se, ve = Se, Q = pe;
      }
      if (ae === S.length)
        return n(v, Q), he && qn(v, ae), K;
      if (Q === null) {
        for (; ae < S.length; ae++)
          Q = C(v, S[ae], N), Q !== null && (y = r(
            Q,
            y,
            ae
          ), ve === null ? K = Q : ve.sibling = Q, ve = Q);
        return he && qn(v, ae), K;
      }
      for (Q = l(Q); ae < S.length; ae++)
        pe = E(
          Q,
          v,
          ae,
          S[ae],
          N
        ), pe !== null && (e && pe.alternate !== null && Q.delete(
          pe.key === null ? ae : pe.key
        ), y = r(
          pe,
          y,
          ae
        ), ve === null ? K = pe : ve.sibling = pe, ve = pe);
      return e && Q.forEach(function(jl) {
        return t(v, jl);
      }), he && qn(v, ae), K;
    }
    function J(v, y, S, N) {
      if (S == null) throw Error(c(151));
      for (var K = null, ve = null, Q = y, ae = y = 0, pe = null, Se = S.next(); Q !== null && !Se.done; ae++, Se = S.next()) {
        Q.index > ae ? (pe = Q, Q = null) : pe = Q.sibling;
        var jl = k(v, Q, Se.value, N);
        if (jl === null) {
          Q === null && (Q = pe);
          break;
        }
        e && Q && jl.alternate === null && t(v, Q), y = r(jl, y, ae), ve === null ? K = jl : ve.sibling = jl, ve = jl, Q = pe;
      }
      if (Se.done)
        return n(v, Q), he && qn(v, ae), K;
      if (Q === null) {
        for (; !Se.done; ae++, Se = S.next())
          Se = C(v, Se.value, N), Se !== null && (y = r(Se, y, ae), ve === null ? K = Se : ve.sibling = Se, ve = Se);
        return he && qn(v, ae), K;
      }
      for (Q = l(Q); !Se.done; ae++, Se = S.next())
        Se = E(Q, v, ae, Se.value, N), Se !== null && (e && Se.alternate !== null && Q.delete(Se.key === null ? ae : Se.key), y = r(Se, y, ae), ve === null ? K = Se : ve.sibling = Se, ve = Se);
      return e && Q.forEach(function(Ay) {
        return t(v, Ay);
      }), he && qn(v, ae), K;
    }
    function Oe(v, y, S, N) {
      if (typeof S == "object" && S !== null && S.type === W && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case q:
            e: {
              for (var K = S.key; y !== null; ) {
                if (y.key === K) {
                  if (K = S.type, K === W) {
                    if (y.tag === 7) {
                      n(
                        v,
                        y.sibling
                      ), N = a(
                        y,
                        S.props.children
                      ), N.return = v, v = N;
                      break e;
                    }
                  } else if (y.elementType === K || typeof K == "object" && K !== null && K.$$typeof === Ee && ca(K) === y.type) {
                    n(
                      v,
                      y.sibling
                    ), N = a(y, S.props), jr(N, S), N.return = v, v = N;
                    break e;
                  }
                  n(v, y);
                  break;
                } else t(v, y);
                y = y.sibling;
              }
              S.type === W ? (N = ra(
                S.props.children,
                v.mode,
                N,
                S.key
              ), N.return = v, v = N) : (N = Li(
                S.type,
                S.key,
                S.props,
                null,
                v.mode,
                N
              ), jr(N, S), N.return = v, v = N);
            }
            return u(v);
          case X:
            e: {
              for (K = S.key; y !== null; ) {
                if (y.key === K)
                  if (y.tag === 4 && y.stateNode.containerInfo === S.containerInfo && y.stateNode.implementation === S.implementation) {
                    n(
                      v,
                      y.sibling
                    ), N = a(y, S.children || []), N.return = v, v = N;
                    break e;
                  } else {
                    n(v, y);
                    break;
                  }
                else t(v, y);
                y = y.sibling;
              }
              N = yu(S, v.mode, N), N.return = v, v = N;
            }
            return u(v);
          case Ee:
            return S = ca(S), Oe(
              v,
              y,
              S,
              N
            );
        }
        if (U(S))
          return F(
            v,
            y,
            S,
            N
          );
        if (_e(S)) {
          if (K = _e(S), typeof K != "function") throw Error(c(150));
          return S = K.call(S), J(
            v,
            y,
            S,
            N
          );
        }
        if (typeof S.then == "function")
          return Oe(
            v,
            y,
            Vi(S),
            N
          );
        if (S.$$typeof === P)
          return Oe(
            v,
            y,
            Hi(v, S),
            N
          );
        Yi(v, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, y !== null && y.tag === 6 ? (n(v, y.sibling), N = a(y, S), N.return = v, v = N) : (n(v, y), N = gu(S, v.mode, N), N.return = v, v = N), u(v)) : n(v, y);
    }
    return function(v, y, S, N) {
      try {
        Ur = 0;
        var K = Oe(
          v,
          y,
          S,
          N
        );
        return Xa = null, K;
      } catch (Q) {
        if (Q === Fa || Q === qi) throw Q;
        var ve = Bt(29, Q, null, v.mode);
        return ve.lanes = N, ve.return = v, ve;
      } finally {
      }
    };
  }
  var da = Tf(!0), kf = Tf(!1), Sl = !1;
  function Nu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ou(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function wl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Te & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = Mi(e), rf(e, null, n), t;
    }
    return Ri(e, l, t, n), Mi(e);
  }
  function Hr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, xa(e, n);
    }
  }
  function Cu(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var a = null, r = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          r === null ? a = r = u : r = r.next = u, n = n.next;
        } while (n !== null);
        r === null ? a = r = t : r = r.next = t;
      } else a = r = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: r,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Du = !1;
  function Br() {
    if (Du) {
      var e = Ya;
      if (e !== null) throw e;
    }
  }
  function qr(e, t, n, l) {
    Du = !1;
    var a = e.updateQueue;
    Sl = !1;
    var r = a.firstBaseUpdate, u = a.lastBaseUpdate, f = a.shared.pending;
    if (f !== null) {
      a.shared.pending = null;
      var p = f, w = p.next;
      p.next = null, u === null ? r = w : u.next = w, u = p;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, f = z.lastBaseUpdate, f !== u && (f === null ? z.firstBaseUpdate = w : f.next = w, z.lastBaseUpdate = p));
    }
    if (r !== null) {
      var C = a.baseState;
      u = 0, z = w = p = null, f = r;
      do {
        var k = f.lane & -536870913, E = k !== f.lane;
        if (E ? (de & k) === k : (l & k) === k) {
          k !== 0 && k === Va && (Du = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var F = e, J = f;
            k = t;
            var Oe = n;
            switch (J.tag) {
              case 1:
                if (F = J.payload, typeof F == "function") {
                  C = F.call(Oe, C, k);
                  break e;
                }
                C = F;
                break e;
              case 3:
                F.flags = F.flags & -65537 | 128;
              case 0:
                if (F = J.payload, k = typeof F == "function" ? F.call(Oe, C, k) : F, k == null) break e;
                C = D({}, C, k);
                break e;
              case 2:
                Sl = !0;
            }
          }
          k = f.callback, k !== null && (e.flags |= 64, E && (e.flags |= 8192), E = a.callbacks, E === null ? a.callbacks = [k] : E.push(k));
        } else
          E = {
            lane: k,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, z === null ? (w = z = E, p = C) : z = z.next = E, u |= k;
        if (f = f.next, f === null) {
          if (f = a.shared.pending, f === null)
            break;
          E = f, f = E.next, E.next = null, a.lastBaseUpdate = E, a.shared.pending = null;
        }
      } while (!0);
      z === null && (p = C), a.baseState = p, a.firstBaseUpdate = w, a.lastBaseUpdate = z, r === null && (a.shared.lanes = 0), _l |= u, e.lanes = u, e.memoizedState = C;
    }
  }
  function Ef(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function xf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Ef(n[e], t);
  }
  var Qa = we(null), Fi = we(0);
  function Af(e, t) {
    e = Zn, I(Fi, e), I(Qa, t), Zn = e | t.baseLanes;
  }
  function Ru() {
    I(Fi, Zn), I(Qa, Qa.current);
  }
  function Mu() {
    Zn = Fi.current, ue(Qa), ue(Fi);
  }
  var qt = we(null), sn = null;
  function kl(e) {
    var t = e.alternate;
    I(Xe, Xe.current & 1), I(qt, e), sn === null && (t === null || Qa.current !== null || t.memoizedState !== null) && (sn = e);
  }
  function Lu(e) {
    I(Xe, Xe.current), I(qt, e), sn === null && (sn = e);
  }
  function _f(e) {
    e.tag === 22 ? (I(Xe, Xe.current), I(qt, e), sn === null && (sn = e)) : El();
  }
  function El() {
    I(Xe, Xe.current), I(qt, qt.current);
  }
  function Gt(e) {
    ue(qt), sn === e && (sn = null), ue(Xe);
  }
  var Xe = we(0);
  function Xi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Gs(n) || Vs(n)))
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
  var Yn = 0, le = null, ze = null, Ke = null, Qi = !1, $a = !1, pa = !1, $i = 0, Gr = 0, Ia = null, gg = 0;
  function Ge() {
    throw Error(c(321));
  }
  function Uu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function ju(e, t, n, l, a, r) {
    return Yn = r, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? cd : Wu, pa = !1, r = n(l, a), pa = !1, $a && (r = Nf(
      t,
      n,
      l,
      a
    )), zf(e), r;
  }
  function zf(e) {
    R.H = Fr;
    var t = ze !== null && ze.next !== null;
    if (Yn = 0, Ke = ze = le = null, Qi = !1, Gr = 0, Ia = null, t) throw Error(c(300));
    e === null || Pe || (e = e.dependencies, e !== null && ji(e) && (Pe = !0));
  }
  function Nf(e, t, n, l) {
    le = e;
    var a = 0;
    do {
      if ($a && (Ia = null), Gr = 0, $a = !1, 25 <= a) throw Error(c(301));
      if (a += 1, Ke = ze = null, e.updateQueue != null) {
        var r = e.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      R.H = fd, r = t(n, l);
    } while ($a);
    return r;
  }
  function yg() {
    var e = R.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Vr(t) : t, e = e.useState()[0], (ze !== null ? ze.memoizedState : null) !== e && (le.flags |= 1024), t;
  }
  function Hu() {
    var e = $i !== 0;
    return $i = 0, e;
  }
  function Bu(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function qu(e) {
    if (Qi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Qi = !1;
    }
    Yn = 0, Ke = ze = le = null, $a = !1, Gr = $i = 0, Ia = null;
  }
  function vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ke === null ? le.memoizedState = Ke = e : Ke = Ke.next = e, Ke;
  }
  function Qe() {
    if (ze === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = Ke === null ? le.memoizedState : Ke.next;
    if (t !== null)
      Ke = t, ze = e;
    else {
      if (e === null)
        throw le.alternate === null ? Error(c(467)) : Error(c(310));
      ze = e, e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null
      }, Ke === null ? le.memoizedState = Ke = e : Ke = Ke.next = e;
    }
    return Ke;
  }
  function Ii() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vr(e) {
    var t = Gr;
    return Gr += 1, Ia === null && (Ia = []), e = vf(Ia, e, t), t = le, (Ke === null ? t.memoizedState : Ke.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? cd : Wu), e;
  }
  function Ki(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Vr(e);
      if (e.$$typeof === P) return ut(e);
    }
    throw Error(c(438, String(e)));
  }
  function Gu(e) {
    var t = null, n = le.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = le.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Ii(), le.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = qe;
    return t.index++, n;
  }
  function Fn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pi(e) {
    var t = Qe();
    return Vu(t, ze, e);
  }
  function Vu(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var a = e.baseQueue, r = l.pending;
    if (r !== null) {
      if (a !== null) {
        var u = a.next;
        a.next = r.next, r.next = u;
      }
      t.baseQueue = a = r, l.pending = null;
    }
    if (r = e.baseState, a === null) e.memoizedState = r;
    else {
      t = a.next;
      var f = u = null, p = null, w = t, z = !1;
      do {
        var C = w.lane & -536870913;
        if (C !== w.lane ? (de & C) === C : (Yn & C) === C) {
          var k = w.revertLane;
          if (k === 0)
            p !== null && (p = p.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }), C === Va && (z = !0);
          else if ((Yn & k) === k) {
            w = w.next, k === Va && (z = !0);
            continue;
          } else
            C = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }, p === null ? (f = p = C, u = r) : p = p.next = C, le.lanes |= k, _l |= k;
          C = w.action, pa && n(r, C), r = w.hasEagerState ? w.eagerState : n(r, C);
        } else
          k = {
            lane: C,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          }, p === null ? (f = p = k, u = r) : p = p.next = k, le.lanes |= C, _l |= C;
        w = w.next;
      } while (w !== null && w !== t);
      if (p === null ? u = r : p.next = f, !Ht(r, e.memoizedState) && (Pe = !0, z && (n = Ya, n !== null)))
        throw n;
      e.memoizedState = r, e.baseState = u, e.baseQueue = p, l.lastRenderedState = r;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Yu(e) {
    var t = Qe(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, r = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var u = a = a.next;
      do
        r = e(r, u.action), u = u.next;
      while (u !== a);
      Ht(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), n.lastRenderedState = r;
    }
    return [r, l];
  }
  function Of(e, t, n) {
    var l = le, a = Qe(), r = he;
    if (r) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var u = !Ht(
      (ze || a).memoizedState,
      n
    );
    if (u && (a.memoizedState = n, Pe = !0), a = a.queue, Qu(Rf.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || u || Ke !== null && Ke.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ka(
        9,
        { destroy: void 0 },
        Df.bind(
          null,
          l,
          a,
          n,
          t
        ),
        null
      ), Ce === null) throw Error(c(349));
      r || (Yn & 127) !== 0 || Cf(l, t, n);
    }
    return n;
  }
  function Cf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = le.updateQueue, t === null ? (t = Ii(), le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Df(e, t, n, l) {
    t.value = n, t.getSnapshot = l, Mf(t) && Lf(e);
  }
  function Rf(e, t, n) {
    return n(function() {
      Mf(t) && Lf(e);
    });
  }
  function Mf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ht(e, n);
    } catch {
      return !0;
    }
  }
  function Lf(e) {
    var t = aa(e, 2);
    t !== null && Rt(t, e, 2);
  }
  function Fu(e) {
    var t = vt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), pa) {
        $t(!0);
        try {
          n();
        } finally {
          $t(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fn,
      lastRenderedState: e
    }, t;
  }
  function Uf(e, t, n, l) {
    return e.baseState = n, Vu(
      e,
      ze,
      typeof l == "function" ? l : Fn
    );
  }
  function bg(e, t, n, l, a) {
    if (Ji(e)) throw Error(c(485));
    if (e = t.action, e !== null) {
      var r = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(u) {
          r.listeners.push(u);
        }
      };
      R.T !== null ? n(!0) : r.isTransition = !1, l(r), n = t.pending, n === null ? (r.next = t.pending = r, jf(t, r)) : (r.next = n.next, t.pending = n.next = r);
    }
  }
  function jf(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var r = R.T, u = {};
      R.T = u;
      try {
        var f = n(a, l), p = R.S;
        p !== null && p(u, f), Hf(e, t, f);
      } catch (w) {
        Xu(e, t, w);
      } finally {
        r !== null && u.types !== null && (r.types = u.types), R.T = r;
      }
    } else
      try {
        r = n(a, l), Hf(e, t, r);
      } catch (w) {
        Xu(e, t, w);
      }
  }
  function Hf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Bf(e, t, l);
      },
      function(l) {
        return Xu(e, t, l);
      }
    ) : Bf(e, t, n);
  }
  function Bf(e, t, n) {
    t.status = "fulfilled", t.value = n, qf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, jf(e, n)));
  }
  function Xu(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, qf(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function qf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Gf(e, t) {
    return t;
  }
  function Vf(e, t) {
    if (he) {
      var n = Ce.formState;
      if (n !== null) {
        e: {
          var l = le;
          if (he) {
            if (Le) {
              t: {
                for (var a = Le, r = en; a.nodeType !== 8; ) {
                  if (!r) {
                    a = null;
                    break t;
                  }
                  if (a = tn(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                r = a.data, a = r === "F!" || r === "F" ? a : null;
              }
              if (a) {
                Le = tn(
                  a.nextSibling
                ), l = a.data === "F!";
                break e;
              }
            }
            bl(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = vt(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gf,
      lastRenderedState: t
    }, n.queue = l, n = od.bind(
      null,
      le,
      l
    ), l.dispatch = n, l = Fu(!1), r = Zu.bind(
      null,
      le,
      !1,
      l.queue
    ), l = vt(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = bg.bind(
      null,
      le,
      a,
      r,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Yf(e) {
    var t = Qe();
    return Ff(t, ze, e);
  }
  function Ff(e, t, n) {
    if (t = Vu(
      e,
      t,
      Gf
    )[0], e = Pi(Fn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Vr(t);
      } catch (u) {
        throw u === Fa ? qi : u;
      }
    else l = t;
    t = Qe();
    var a = t.queue, r = a.dispatch;
    return n !== t.memoizedState && (le.flags |= 2048, Ka(
      9,
      { destroy: void 0 },
      vg.bind(null, a, n),
      null
    )), [l, r, e];
  }
  function vg(e, t) {
    e.action = t;
  }
  function Xf(e) {
    var t = Qe(), n = ze;
    if (n !== null)
      return Ff(t, n, e);
    Qe(), t = t.memoizedState, n = Qe();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function Ka(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = le.updateQueue, t === null && (t = Ii(), le.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Qf() {
    return Qe().memoizedState;
  }
  function Zi(e, t, n, l) {
    var a = vt();
    le.flags |= e, a.memoizedState = Ka(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function Wi(e, t, n, l) {
    var a = Qe();
    l = l === void 0 ? null : l;
    var r = a.memoizedState.inst;
    ze !== null && l !== null && Uu(l, ze.memoizedState.deps) ? a.memoizedState = Ka(t, r, n, l) : (le.flags |= e, a.memoizedState = Ka(
      1 | t,
      r,
      n,
      l
    ));
  }
  function $f(e, t) {
    Zi(8390656, 8, e, t);
  }
  function Qu(e, t) {
    Wi(2048, 8, e, t);
  }
  function Sg(e) {
    le.flags |= 4;
    var t = le.updateQueue;
    if (t === null)
      t = Ii(), le.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function If(e) {
    var t = Qe().memoizedState;
    return Sg({ ref: t, nextImpl: e }), function() {
      if ((Te & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Kf(e, t) {
    return Wi(4, 2, e, t);
  }
  function Pf(e, t) {
    return Wi(4, 4, e, t);
  }
  function Zf(e, t) {
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
  function Wf(e, t, n) {
    n = n != null ? n.concat([e]) : null, Wi(4, 4, Zf.bind(null, t, e), n);
  }
  function $u() {
  }
  function Jf(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Uu(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function ed(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Uu(t, l[1]))
      return l[0];
    if (l = e(), pa) {
      $t(!0);
      try {
        e();
      } finally {
        $t(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Iu(e, t, n) {
    return n === void 0 || (Yn & 1073741824) !== 0 && (de & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = tp(), le.lanes |= e, _l |= e, n);
  }
  function td(e, t, n, l) {
    return Ht(n, t) ? n : Qa.current !== null ? (e = Iu(e, n, l), Ht(e, t) || (Pe = !0), e) : (Yn & 42) === 0 || (Yn & 1073741824) !== 0 && (de & 261930) === 0 ? (Pe = !0, e.memoizedState = n) : (e = tp(), le.lanes |= e, _l |= e, t);
  }
  function nd(e, t, n, l, a) {
    var r = H.p;
    H.p = r !== 0 && 8 > r ? r : 8;
    var u = R.T, f = {};
    R.T = f, Zu(e, !1, t, n);
    try {
      var p = a(), w = R.S;
      if (w !== null && w(f, p), p !== null && typeof p == "object" && typeof p.then == "function") {
        var z = hg(
          p,
          l
        );
        Yr(
          e,
          t,
          z,
          Ft(e)
        );
      } else
        Yr(
          e,
          t,
          l,
          Ft(e)
        );
    } catch (C) {
      Yr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: C },
        Ft()
      );
    } finally {
      H.p = r, u !== null && f.types !== null && (u.types = f.types), R.T = u;
    }
  }
  function wg() {
  }
  function Ku(e, t, n, l) {
    if (e.tag !== 5) throw Error(c(476));
    var a = ld(e).queue;
    nd(
      e,
      a,
      t,
      re,
      n === null ? wg : function() {
        return ad(e), n(l);
      }
    );
  }
  function ld(e) {
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
        lastRenderedReducer: Fn,
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
        lastRenderedReducer: Fn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function ad(e) {
    var t = ld(e);
    t.next === null && (t = e.alternate.memoizedState), Yr(
      e,
      t.next.queue,
      {},
      Ft()
    );
  }
  function Pu() {
    return ut(ii);
  }
  function rd() {
    return Qe().memoizedState;
  }
  function id() {
    return Qe().memoizedState;
  }
  function Tg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Ft();
          e = wl(n);
          var l = Tl(t, e, n);
          l !== null && (Rt(l, t, n), Hr(l, t, n)), t = { cache: xu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function kg(e, t, n) {
    var l = Ft();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ji(e) ? ud(t, n) : (n = mu(e, t, n, l), n !== null && (Rt(n, e, l), sd(n, t, l)));
  }
  function od(e, t, n) {
    var l = Ft();
    Yr(e, t, n, l);
  }
  function Yr(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ji(e)) ud(t, a);
    else {
      var r = e.alternate;
      if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null))
        try {
          var u = t.lastRenderedState, f = r(u, n);
          if (a.hasEagerState = !0, a.eagerState = f, Ht(f, u))
            return Ri(e, t, a, 0), Ce === null && Di(), !1;
        } catch {
        } finally {
        }
      if (n = mu(e, t, a, l), n !== null)
        return Rt(n, e, l), sd(n, t, l), !0;
    }
    return !1;
  }
  function Zu(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Ns(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ji(e)) {
      if (t) throw Error(c(479));
    } else
      t = mu(
        e,
        n,
        l,
        2
      ), t !== null && Rt(t, e, 2);
  }
  function Ji(e) {
    var t = e.alternate;
    return e === le || t !== null && t === le;
  }
  function ud(e, t) {
    $a = Qi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function sd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, xa(e, n);
    }
  }
  var Fr = {
    readContext: ut,
    use: Ki,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useLayoutEffect: Ge,
    useInsertionEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    useHostTransitionStatus: Ge,
    useFormState: Ge,
    useActionState: Ge,
    useOptimistic: Ge,
    useMemoCache: Ge,
    useCacheRefresh: Ge
  };
  Fr.useEffectEvent = Ge;
  var cd = {
    readContext: ut,
    use: Ki,
    useCallback: function(e, t) {
      return vt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ut,
    useEffect: $f,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Zi(
        4194308,
        4,
        Zf.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Zi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Zi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = vt();
      t = t === void 0 ? null : t;
      var l = e();
      if (pa) {
        $t(!0);
        try {
          e();
        } finally {
          $t(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = vt();
      if (n !== void 0) {
        var a = n(t);
        if (pa) {
          $t(!0);
          try {
            n(t);
          } finally {
            $t(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = kg.bind(
        null,
        le,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = vt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Fu(e);
      var t = e.queue, n = od.bind(null, le, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: $u,
    useDeferredValue: function(e, t) {
      var n = vt();
      return Iu(n, e, t);
    },
    useTransition: function() {
      var e = Fu(!1);
      return e = nd.bind(
        null,
        le,
        e.queue,
        !0,
        !1
      ), vt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = le, a = vt();
      if (he) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Ce === null)
          throw Error(c(349));
        (de & 127) !== 0 || Cf(l, t, n);
      }
      a.memoizedState = n;
      var r = { value: n, getSnapshot: t };
      return a.queue = r, $f(Rf.bind(null, l, r, e), [
        e
      ]), l.flags |= 2048, Ka(
        9,
        { destroy: void 0 },
        Df.bind(
          null,
          l,
          r,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = vt(), t = Ce.identifierPrefix;
      if (he) {
        var n = xn, l = En;
        n = (l & ~(1 << 32 - rt(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = $i++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = gg++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Pu,
    useFormState: Vf,
    useActionState: Vf,
    useOptimistic: function(e) {
      var t = vt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Zu.bind(
        null,
        le,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Gu,
    useCacheRefresh: function() {
      return vt().memoizedState = Tg.bind(
        null,
        le
      );
    },
    useEffectEvent: function(e) {
      var t = vt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Te & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Wu = {
    readContext: ut,
    use: Ki,
    useCallback: Jf,
    useContext: ut,
    useEffect: Qu,
    useImperativeHandle: Wf,
    useInsertionEffect: Kf,
    useLayoutEffect: Pf,
    useMemo: ed,
    useReducer: Pi,
    useRef: Qf,
    useState: function() {
      return Pi(Fn);
    },
    useDebugValue: $u,
    useDeferredValue: function(e, t) {
      var n = Qe();
      return td(
        n,
        ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Pi(Fn)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Vr(e),
        t
      ];
    },
    useSyncExternalStore: Of,
    useId: rd,
    useHostTransitionStatus: Pu,
    useFormState: Yf,
    useActionState: Yf,
    useOptimistic: function(e, t) {
      var n = Qe();
      return Uf(n, ze, e, t);
    },
    useMemoCache: Gu,
    useCacheRefresh: id
  };
  Wu.useEffectEvent = If;
  var fd = {
    readContext: ut,
    use: Ki,
    useCallback: Jf,
    useContext: ut,
    useEffect: Qu,
    useImperativeHandle: Wf,
    useInsertionEffect: Kf,
    useLayoutEffect: Pf,
    useMemo: ed,
    useReducer: Yu,
    useRef: Qf,
    useState: function() {
      return Yu(Fn);
    },
    useDebugValue: $u,
    useDeferredValue: function(e, t) {
      var n = Qe();
      return ze === null ? Iu(n, e, t) : td(
        n,
        ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Yu(Fn)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Vr(e),
        t
      ];
    },
    useSyncExternalStore: Of,
    useId: rd,
    useHostTransitionStatus: Pu,
    useFormState: Xf,
    useActionState: Xf,
    useOptimistic: function(e, t) {
      var n = Qe();
      return ze !== null ? Uf(n, ze, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Gu,
    useCacheRefresh: id
  };
  fd.useEffectEvent = If;
  function Ju(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var es = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = Ft(), a = wl(l);
      a.payload = t, n != null && (a.callback = n), t = Tl(e, a, l), t !== null && (Rt(t, e, l), Hr(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = Ft(), a = wl(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Tl(e, a, l), t !== null && (Rt(t, e, l), Hr(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Ft(), l = wl(n);
      l.tag = 2, t != null && (l.callback = t), t = Tl(e, l, n), t !== null && (Rt(t, e, n), Hr(t, e, n));
    }
  };
  function dd(e, t, n, l, a, r, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, r, u) : t.prototype && t.prototype.isPureReactComponent ? !Or(n, l) || !Or(a, r) : !0;
  }
  function pd(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && es.enqueueReplaceState(t, t.state, null);
  }
  function ma(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = D({}, n));
      for (var a in e)
        n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function md(e) {
    Ci(e);
  }
  function hd(e) {
    console.error(e);
  }
  function gd(e) {
    Ci(e);
  }
  function eo(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function yd(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function ts(e, t, n) {
    return n = wl(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      eo(e, t);
    }, n;
  }
  function bd(e) {
    return e = wl(e), e.tag = 3, e;
  }
  function vd(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var r = l.value;
      e.payload = function() {
        return a(r);
      }, e.callback = function() {
        yd(t, n, l);
      };
    }
    var u = n.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      yd(t, n, l), typeof a != "function" && (zl === null ? zl = /* @__PURE__ */ new Set([this]) : zl.add(this));
      var f = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function Eg(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Ga(
        t,
        n,
        a,
        !0
      ), n = qt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return sn === null ? po() : n.alternate === null && Ve === 0 && (Ve = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === Gi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), As(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === Gi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), As(e, l, a)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return As(e, l, a), po(), !1;
    }
    if (he)
      return t = qt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== Su && (e = Error(c(422), { cause: l }), Rr(Zt(e, n)))) : (l !== Su && (t = Error(c(423), {
        cause: l
      }), Rr(
        Zt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = Zt(l, n), a = ts(
        e.stateNode,
        l,
        a
      ), Cu(e, a), Ve !== 4 && (Ve = 2)), !1;
    var r = Error(c(520), { cause: l });
    if (r = Zt(r, n), Wr === null ? Wr = [r] : Wr.push(r), Ve !== 4 && (Ve = 2), t === null) return !0;
    l = Zt(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = ts(n.stateNode, l, e), Cu(n, e), !1;
        case 1:
          if (t = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (zl === null || !zl.has(r))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = bd(a), vd(
              a,
              e,
              n,
              l
            ), Cu(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ns = Error(c(461)), Pe = !1;
  function st(e, t, n, l) {
    t.child = e === null ? kf(t, null, n, l) : da(
      t,
      e.child,
      n,
      l
    );
  }
  function Sd(e, t, n, l, a) {
    n = n.render;
    var r = t.ref;
    if ("ref" in l) {
      var u = {};
      for (var f in l)
        f !== "ref" && (u[f] = l[f]);
    } else u = l;
    return ua(t), l = ju(
      e,
      t,
      n,
      u,
      r,
      a
    ), f = Hu(), e !== null && !Pe ? (Bu(e, t, a), Xn(e, t, a)) : (he && f && bu(t), t.flags |= 1, st(e, t, l, a), t.child);
  }
  function wd(e, t, n, l, a) {
    if (e === null) {
      var r = n.type;
      return typeof r == "function" && !hu(r) && r.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = r, Td(
        e,
        t,
        r,
        l,
        a
      )) : (e = Li(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (r = e.child, !cs(e, a)) {
      var u = r.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Or, n(u, l) && e.ref === t.ref)
        return Xn(e, t, a);
    }
    return t.flags |= 1, e = Bn(r, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Td(e, t, n, l, a) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (Or(r, l) && e.ref === t.ref)
        if (Pe = !1, t.pendingProps = l = r, cs(e, a))
          (e.flags & 131072) !== 0 && (Pe = !0);
        else
          return t.lanes = e.lanes, Xn(e, t, a);
    }
    return ls(
      e,
      t,
      n,
      l,
      a
    );
  }
  function kd(e, t, n, l) {
    var a = l.children, r = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, a = 0; l !== null; )
            a = a | l.lanes | l.childLanes, l = l.sibling;
          l = a & ~r;
        } else l = 0, t.child = null;
        return Ed(
          e,
          t,
          r,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Bi(
          t,
          r !== null ? r.cachePool : null
        ), r !== null ? Af(t, r) : Ru(), _f(t);
      else
        return l = t.lanes = 536870912, Ed(
          e,
          t,
          r !== null ? r.baseLanes | n : n,
          n,
          l
        );
    } else
      r !== null ? (Bi(t, r.cachePool), Af(t, r), El(), t.memoizedState = null) : (e !== null && Bi(t, null), Ru(), El());
    return st(e, t, a, n), t.child;
  }
  function Xr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ed(e, t, n, l, a) {
    var r = _u();
    return r = r === null ? null : { parent: Ie._currentValue, pool: r }, t.memoizedState = {
      baseLanes: n,
      cachePool: r
    }, e !== null && Bi(t, null), Ru(), _f(t), e !== null && Ga(e, t, l, !0), t.childLanes = a, null;
  }
  function to(e, t) {
    return t = lo(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function xd(e, t, n) {
    return da(t, e.child, null, n), e = to(t, t.pendingProps), e.flags |= 2, Gt(t), t.memoizedState = null, e;
  }
  function xg(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (he) {
        if (l.mode === "hidden")
          return e = to(t, l), t.lanes = 536870912, Xr(null, e);
        if (Lu(t), (e = Le) ? (e = jp(
          e,
          en
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: gl !== null ? { id: En, overflow: xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = uf(e), n.return = t, t.child = n, ot = t, Le = null)) : e = null, e === null) throw bl(t);
        return t.lanes = 536870912, null;
      }
      return to(t, l);
    }
    var r = e.memoizedState;
    if (r !== null) {
      var u = r.dehydrated;
      if (Lu(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = xd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (Pe || Ga(e, t, n, !1), a = (n & e.childLanes) !== 0, Pe || a) {
        if (l = Ce, l !== null && (u = hr(l, n), u !== 0 && u !== r.retryLane))
          throw r.retryLane = u, aa(e, u), Rt(l, e, u), ns;
        po(), t = xd(
          e,
          t,
          n
        );
      } else
        e = r.treeContext, Le = tn(u.nextSibling), ot = t, he = !0, yl = null, en = !1, e !== null && ff(t, e), t = to(t, l), t.flags |= 4096;
      return t;
    }
    return e = Bn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function no(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function ls(e, t, n, l, a) {
    return ua(t), n = ju(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = Hu(), e !== null && !Pe ? (Bu(e, t, a), Xn(e, t, a)) : (he && l && bu(t), t.flags |= 1, st(e, t, n, a), t.child);
  }
  function Ad(e, t, n, l, a, r) {
    return ua(t), t.updateQueue = null, n = Nf(
      t,
      l,
      n,
      a
    ), zf(e), l = Hu(), e !== null && !Pe ? (Bu(e, t, r), Xn(e, t, r)) : (he && l && bu(t), t.flags |= 1, st(e, t, n, r), t.child);
  }
  function _d(e, t, n, l, a) {
    if (ua(t), t.stateNode === null) {
      var r = ja, u = n.contextType;
      typeof u == "object" && u !== null && (r = ut(u)), r = new n(l, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = es, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = l, r.state = t.memoizedState, r.refs = {}, Nu(t), u = n.contextType, r.context = typeof u == "object" && u !== null ? ut(u) : ja, r.state = t.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (Ju(
        t,
        n,
        u,
        l
      ), r.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (u = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), u !== r.state && es.enqueueReplaceState(r, r.state, null), qr(t, l, r, a), Br(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      r = t.stateNode;
      var f = t.memoizedProps, p = ma(n, f);
      r.props = p;
      var w = r.context, z = n.contextType;
      u = ja, typeof z == "object" && z !== null && (u = ut(z));
      var C = n.getDerivedStateFromProps;
      z = typeof C == "function" || typeof r.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, z || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f || w !== u) && pd(
        t,
        r,
        l,
        u
      ), Sl = !1;
      var k = t.memoizedState;
      r.state = k, qr(t, l, r, a), Br(), w = t.memoizedState, f || k !== w || Sl ? (typeof C == "function" && (Ju(
        t,
        n,
        C,
        l
      ), w = t.memoizedState), (p = Sl || dd(
        t,
        n,
        p,
        l,
        k,
        w,
        u
      )) ? (z || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = w), r.props = l, r.state = w, r.context = u, l = p) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      r = t.stateNode, Ou(e, t), u = t.memoizedProps, z = ma(n, u), r.props = z, C = t.pendingProps, k = r.context, w = n.contextType, p = ja, typeof w == "object" && w !== null && (p = ut(w)), f = n.getDerivedStateFromProps, (w = typeof f == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (u !== C || k !== p) && pd(
        t,
        r,
        l,
        p
      ), Sl = !1, k = t.memoizedState, r.state = k, qr(t, l, r, a), Br();
      var E = t.memoizedState;
      u !== C || k !== E || Sl || e !== null && e.dependencies !== null && ji(e.dependencies) ? (typeof f == "function" && (Ju(
        t,
        n,
        f,
        l
      ), E = t.memoizedState), (z = Sl || dd(
        t,
        n,
        z,
        l,
        k,
        E,
        p
      ) || e !== null && e.dependencies !== null && ji(e.dependencies)) ? (w || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(l, E, p), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        l,
        E,
        p
      )), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || u === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = E), r.props = l, r.state = E, r.context = p, l = z) : (typeof r.componentDidUpdate != "function" || u === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return r = l, no(e, t), l = (t.flags & 128) !== 0, r || l ? (r = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && l ? (t.child = da(
      t,
      e.child,
      null,
      a
    ), t.child = da(
      t,
      null,
      n,
      a
    )) : st(e, t, n, a), t.memoizedState = r.state, e = t.child) : e = Xn(
      e,
      t,
      a
    ), e;
  }
  function zd(e, t, n, l) {
    return ia(), t.flags |= 256, st(e, t, n, l), t.child;
  }
  var as = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function rs(e) {
    return { baseLanes: e, cachePool: yf() };
  }
  function is(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Yt), e;
  }
  function Nd(e, t, n) {
    var l = t.pendingProps, a = !1, r = (t.flags & 128) !== 0, u;
    if ((u = r) || (u = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), u && (a = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (he) {
        if (a ? kl(t) : El(), (e = Le) ? (e = jp(
          e,
          en
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: gl !== null ? { id: En, overflow: xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = uf(e), n.return = t, t.child = n, ot = t, Le = null)) : e = null, e === null) throw bl(t);
        return Vs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var f = l.children;
      return l = l.fallback, a ? (El(), a = t.mode, f = lo(
        { mode: "hidden", children: f },
        a
      ), l = ra(
        l,
        a,
        n,
        null
      ), f.return = t, l.return = t, f.sibling = l, t.child = f, l = t.child, l.memoizedState = rs(n), l.childLanes = is(
        e,
        u,
        n
      ), t.memoizedState = as, Xr(null, l)) : (kl(t), os(t, f));
    }
    var p = e.memoizedState;
    if (p !== null && (f = p.dehydrated, f !== null)) {
      if (r)
        t.flags & 256 ? (kl(t), t.flags &= -257, t = us(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (El(), t.child = e.child, t.flags |= 128, t = null) : (El(), f = l.fallback, a = t.mode, l = lo(
          { mode: "visible", children: l.children },
          a
        ), f = ra(
          f,
          a,
          n,
          null
        ), f.flags |= 2, l.return = t, f.return = t, l.sibling = f, t.child = l, da(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = rs(n), l.childLanes = is(
          e,
          u,
          n
        ), t.memoizedState = as, t = Xr(null, l));
      else if (kl(t), Vs(f)) {
        if (u = f.nextSibling && f.nextSibling.dataset, u) var w = u.dgst;
        u = w, l = Error(c(419)), l.stack = "", l.digest = u, Rr({ value: l, source: null, stack: null }), t = us(
          e,
          t,
          n
        );
      } else if (Pe || Ga(e, t, n, !1), u = (n & e.childLanes) !== 0, Pe || u) {
        if (u = Ce, u !== null && (l = hr(u, n), l !== 0 && l !== p.retryLane))
          throw p.retryLane = l, aa(e, l), Rt(u, e, l), ns;
        Gs(f) || po(), t = us(
          e,
          t,
          n
        );
      } else
        Gs(f) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, Le = tn(
          f.nextSibling
        ), ot = t, he = !0, yl = null, en = !1, e !== null && ff(t, e), t = os(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (El(), f = l.fallback, a = t.mode, p = e.child, w = p.sibling, l = Bn(p, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = p.subtreeFlags & 65011712, w !== null ? f = Bn(
      w,
      f
    ) : (f = ra(
      f,
      a,
      n,
      null
    ), f.flags |= 2), f.return = t, l.return = t, l.sibling = f, t.child = l, Xr(null, l), l = t.child, f = e.child.memoizedState, f === null ? f = rs(n) : (a = f.cachePool, a !== null ? (p = Ie._currentValue, a = a.parent !== p ? { parent: p, pool: p } : a) : a = yf(), f = {
      baseLanes: f.baseLanes | n,
      cachePool: a
    }), l.memoizedState = f, l.childLanes = is(
      e,
      u,
      n
    ), t.memoizedState = as, Xr(e.child, l)) : (kl(t), n = e.child, e = n.sibling, n = Bn(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (u = t.deletions, u === null ? (t.deletions = [e], t.flags |= 16) : u.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function os(e, t) {
    return t = lo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function lo(e, t) {
    return e = Bt(22, e, null, t), e.lanes = 0, e;
  }
  function us(e, t, n) {
    return da(t, e.child, null, n), e = os(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Od(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), ku(e.return, t, n);
  }
  function ss(e, t, n, l, a, r) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: a,
      treeForkCount: r
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = n, u.tailMode = a, u.treeForkCount = r);
  }
  function Cd(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, r = l.tail;
    l = l.children;
    var u = Xe.current, f = (u & 2) !== 0;
    if (f ? (u = u & 1 | 2, t.flags |= 128) : u &= 1, I(Xe, u), st(e, t, l, n), l = he ? Dr : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Od(e, n, t);
        else if (e.tag === 19)
          Od(e, n, t);
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
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; )
          e = n.alternate, e !== null && Xi(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ss(
          t,
          !1,
          a,
          n,
          r,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Xi(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        ss(
          t,
          !0,
          n,
          null,
          r,
          l
        );
        break;
      case "together":
        ss(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), _l |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ga(
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
      for (e = t.child, n = Bn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Bn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function cs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ji(e)));
  }
  function Ag(e, t, n) {
    switch (t.tag) {
      case 3:
        dn(t, t.stateNode.containerInfo), vl(t, Ie, e.memoizedState.cache), ia();
        break;
      case 27:
      case 5:
        De(t);
        break;
      case 4:
        dn(t, t.stateNode.containerInfo);
        break;
      case 10:
        vl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Lu(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (kl(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Nd(e, t, n) : (kl(t), e = Xn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        kl(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (Ga(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), a) {
          if (l)
            return Cd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), I(Xe, Xe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, kd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        vl(t, Ie, e.memoizedState.cache);
    }
    return Xn(e, t, n);
  }
  function Dd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Pe = !0;
      else {
        if (!cs(e, n) && (t.flags & 128) === 0)
          return Pe = !1, Ag(
            e,
            t,
            n
          );
        Pe = (e.flags & 131072) !== 0;
      }
    else
      Pe = !1, he && (t.flags & 1048576) !== 0 && cf(t, Dr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = ca(t.elementType), t.type = e, typeof e == "function")
            hu(e) ? (l = ma(e, l), t.tag = 1, t = _d(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = ls(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === ne) {
                t.tag = 11, t = Sd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === Z) {
                t.tag = 14, t = wd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = $e(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return ls(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, a = ma(
          l,
          t.pendingProps
        ), _d(
          e,
          t,
          l,
          a,
          n
        );
      case 3:
        e: {
          if (dn(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          l = t.pendingProps;
          var r = t.memoizedState;
          a = r.element, Ou(e, t), qr(t, l, null, n);
          var u = t.memoizedState;
          if (l = u.cache, vl(t, Ie, l), l !== r.cache && Eu(
            t,
            [Ie],
            n,
            !0
          ), Br(), l = u.element, r.isDehydrated)
            if (r = {
              element: l,
              isDehydrated: !1,
              cache: u.cache
            }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
              t = zd(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== a) {
              a = Zt(
                Error(c(424)),
                t
              ), Rr(a), t = zd(
                e,
                t,
                l,
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
              for (Le = tn(e.firstChild), ot = t, he = !0, yl = null, en = !0, n = kf(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (ia(), l === a) {
              t = Xn(
                e,
                t,
                n
              );
              break e;
            }
            st(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return no(e, t), e === null ? (n = Yp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : he || (n = t.type, e = t.pendingProps, l = So(
          tt.current
        ).createElement(n), l[oe] = t, l[Fe] = e, ct(l, n, e), Me(l), t.stateNode = l) : t.memoizedState = Yp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return De(t), e === null && he && (l = t.stateNode = qp(
          t.type,
          t.pendingProps,
          tt.current
        ), ot = t, en = !0, a = Le, Dl(t.type) ? (Ys = a, Le = tn(l.firstChild)) : Le = a), st(
          e,
          t,
          t.pendingProps.children,
          n
        ), no(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && he && ((a = l = Le) && (l = ny(
          l,
          t.type,
          t.pendingProps,
          en
        ), l !== null ? (t.stateNode = l, ot = t, Le = tn(l.firstChild), en = !1, a = !0) : a = !1), a || bl(t)), De(t), a = t.type, r = t.pendingProps, u = e !== null ? e.memoizedProps : null, l = r.children, Hs(a, r) ? l = null : u !== null && Hs(a, u) && (t.flags |= 32), t.memoizedState !== null && (a = ju(
          e,
          t,
          yg,
          null,
          null,
          n
        ), ii._currentValue = a), no(e, t), st(e, t, l, n), t.child;
      case 6:
        return e === null && he && ((e = n = Le) && (n = ly(
          n,
          t.pendingProps,
          en
        ), n !== null ? (t.stateNode = n, ot = t, Le = null, e = !0) : e = !1), e || bl(t)), null;
      case 13:
        return Nd(e, t, n);
      case 4:
        return dn(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = da(
          t,
          null,
          l,
          n
        ) : st(e, t, l, n), t.child;
      case 11:
        return Sd(
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
        return l = t.pendingProps, vl(t, t.type, l.value), st(e, t, l.children, n), t.child;
      case 9:
        return a = t.type._context, l = t.pendingProps.children, ua(t), a = ut(a), l = l(a), t.flags |= 1, st(e, t, l, n), t.child;
      case 14:
        return wd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Td(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Cd(e, t, n);
      case 31:
        return xg(e, t, n);
      case 22:
        return kd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ua(t), l = ut(Ie), e === null ? (a = _u(), a === null && (a = Ce, r = xu(), a.pooledCache = r, r.refCount++, r !== null && (a.pooledCacheLanes |= n), a = r), t.memoizedState = { parent: l, cache: a }, Nu(t), vl(t, Ie, a)) : ((e.lanes & n) !== 0 && (Ou(e, t), qr(t, null, null, n), Br()), a = e.memoizedState, r = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), vl(t, Ie, l)) : (l = r.cache, vl(t, Ie, l), l !== a.cache && Eu(
          t,
          [Ie],
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
  function fs(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (rp()) e.flags |= 8192;
        else
          throw fa = Gi, zu;
    } else e.flags &= -16777217;
  }
  function Rd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ip(t))
      if (rp()) e.flags |= 8192;
      else
        throw fa = Gi, zu;
  }
  function ao(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Mn() : 536870912, e.lanes |= t, Ja |= t);
  }
  function Qr(e, t) {
    if (!he)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags & 65011712, l |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags, l |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function _g(e, t, n) {
    var l = t.pendingProps;
    switch (vu(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(t), null;
      case 1:
        return Ue(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Vn(Ie), nt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (qa(t) ? Qn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, wu())), Ue(t), null;
      case 26:
        var a = t.type, r = t.memoizedState;
        return e === null ? (Qn(t), r !== null ? (Ue(t), Rd(t, r)) : (Ue(t), fs(
          t,
          a,
          null,
          l,
          n
        ))) : r ? r !== e.memoizedState ? (Qn(t), Ue(t), Rd(t, r)) : (Ue(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Qn(t), Ue(t), fs(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (Xl(t), n = tt.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Qn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ue(t), null;
          }
          e = ge.current, qa(t) ? df(t) : (e = qp(a, l, n), t.stateNode = e, Qn(t));
        }
        return Ue(t), null;
      case 5:
        if (Xl(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Qn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ue(t), null;
          }
          if (r = ge.current, qa(t))
            df(t);
          else {
            var u = So(
              tt.current
            );
            switch (r) {
              case 1:
                r = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                r = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    r = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    r = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    r = u.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof l.is == "string" ? u.createElement("select", {
                      is: l.is
                    }) : u.createElement("select"), l.multiple ? r.multiple = !0 : l.size && (r.size = l.size);
                    break;
                  default:
                    r = typeof l.is == "string" ? u.createElement(a, { is: l.is }) : u.createElement(a);
                }
            }
            r[oe] = t, r[Fe] = l;
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                r.appendChild(u.stateNode);
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
            t.stateNode = r;
            e: switch (ct(r, a, l), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Qn(t);
          }
        }
        return Ue(t), fs(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Qn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = tt.current, qa(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = ot, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[oe] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Np(e.nodeValue, n)), e || bl(t, !0);
          } else
            e = So(e).createTextNode(
              l
            ), e[oe] = t, t.stateNode = e;
        }
        return Ue(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = qa(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[oe] = t;
            } else
              ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), e = !1;
          } else
            n = wu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Gt(t), t) : (Gt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Ue(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = qa(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(c(317));
              a[oe] = t;
            } else
              ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), a = !1;
          } else
            a = wu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Gt(t), t) : (Gt(t), null);
        }
        return Gt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), r = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (r = l.memoizedState.cachePool.pool), r !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), ao(t, t.updateQueue), Ue(t), null);
      case 4:
        return nt(), e === null && Rs(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return Vn(t.type), Ue(t), null;
      case 19:
        if (ue(Xe), l = t.memoizedState, l === null) return Ue(t), null;
        if (a = (t.flags & 128) !== 0, r = l.rendering, r === null)
          if (a) Qr(l, !1);
          else {
            if (Ve !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (r = Xi(e), r !== null) {
                  for (t.flags |= 128, Qr(l, !1), e = r.updateQueue, t.updateQueue = e, ao(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    of(n, e), n = n.sibling;
                  return I(
                    Xe,
                    Xe.current & 1 | 2
                  ), he && qn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Ye() > so && (t.flags |= 128, a = !0, Qr(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Xi(r), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, ao(t, e), Qr(l, !0), l.tail === null && l.tailMode === "hidden" && !r.alternate && !he)
                return Ue(t), null;
            } else
              2 * Ye() - l.renderingStartTime > so && n !== 536870912 && (t.flags |= 128, a = !0, Qr(l, !1), t.lanes = 4194304);
          l.isBackwards ? (r.sibling = t.child, t.child = r) : (e = l.last, e !== null ? e.sibling = r : t.child = r, l.last = r);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Ye(), e.sibling = null, n = Xe.current, I(
          Xe,
          a ? n & 1 | 2 : n & 1
        ), he && qn(t, l.treeForkCount), e) : (Ue(t), null);
      case 22:
      case 23:
        return Gt(t), Mu(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), n = t.updateQueue, n !== null && ao(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && ue(sa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Vn(Ie), Ue(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function zg(e, t) {
    switch (vu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Vn(Ie), nt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Xl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Gt(t), t.alternate === null)
            throw Error(c(340));
          ia();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Gt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          ia();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ue(Xe), null;
      case 4:
        return nt(), null;
      case 10:
        return Vn(t.type), null;
      case 22:
      case 23:
        return Gt(t), Mu(), e !== null && ue(sa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Vn(Ie), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Md(e, t) {
    switch (vu(t), t.tag) {
      case 3:
        Vn(Ie), nt();
        break;
      case 26:
      case 27:
      case 5:
        Xl(t);
        break;
      case 4:
        nt();
        break;
      case 31:
        t.memoizedState !== null && Gt(t);
        break;
      case 13:
        Gt(t);
        break;
      case 19:
        ue(Xe);
        break;
      case 10:
        Vn(t.type);
        break;
      case 22:
      case 23:
        Gt(t), Mu(), e !== null && ue(sa);
        break;
      case 24:
        Vn(Ie);
    }
  }
  function $r(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var a = l.next;
        n = a;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var r = n.create, u = n.inst;
            l = r(), u.destroy = l;
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (f) {
      Ae(t, t.return, f);
    }
  }
  function xl(e, t, n) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var r = a.next;
        l = r;
        do {
          if ((l.tag & e) === e) {
            var u = l.inst, f = u.destroy;
            if (f !== void 0) {
              u.destroy = void 0, a = t;
              var p = n, w = f;
              try {
                w();
              } catch (z) {
                Ae(
                  a,
                  p,
                  z
                );
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (z) {
      Ae(t, t.return, z);
    }
  }
  function Ld(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        xf(t, n);
      } catch (l) {
        Ae(e, e.return, l);
      }
    }
  }
  function Ud(e, t, n) {
    n.props = ma(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ae(e, t, l);
    }
  }
  function Ir(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (a) {
      Ae(e, t, a);
    }
  }
  function An(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (a) {
          Ae(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (a) {
          Ae(e, t, a);
        }
      else n.current = null;
  }
  function jd(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (a) {
      Ae(e, e.return, a);
    }
  }
  function ds(e, t, n) {
    try {
      var l = e.stateNode;
      Pg(l, e.type, n, t), l[Fe] = t;
    } catch (a) {
      Ae(e, e.return, a);
    }
  }
  function Hd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Dl(e.type) || e.tag === 4;
  }
  function ps(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Dl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ms(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = it));
    else if (l !== 4 && (l === 27 && Dl(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (ms(e, t, n), e = e.sibling; e !== null; )
        ms(e, t, n), e = e.sibling;
  }
  function ro(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Dl(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (ro(e, t, n), e = e.sibling; e !== null; )
        ro(e, t, n), e = e.sibling;
  }
  function Bd(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      ct(t, l, n), t[oe] = e, t[Fe] = n;
    } catch (r) {
      Ae(e, e.return, r);
    }
  }
  var $n = !1, Ze = !1, hs = !1, qd = typeof WeakSet == "function" ? WeakSet : Set, at = null;
  function Ng(e, t) {
    if (e = e.containerInfo, Us = _o, e = Zc(e), uu(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var a = l.anchorOffset, r = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, r.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0, f = -1, p = -1, w = 0, z = 0, C = e, k = null;
            t: for (; ; ) {
              for (var E; C !== n || a !== 0 && C.nodeType !== 3 || (f = u + a), C !== r || l !== 0 && C.nodeType !== 3 || (p = u + l), C.nodeType === 3 && (u += C.nodeValue.length), (E = C.firstChild) !== null; )
                k = C, C = E;
              for (; ; ) {
                if (C === e) break t;
                if (k === n && ++w === a && (f = u), k === r && ++z === l && (p = u), (E = C.nextSibling) !== null) break;
                C = k, k = C.parentNode;
              }
              C = E;
            }
            n = f === -1 || p === -1 ? null : { start: f, end: p };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (js = { focusedElem: e, selectionRange: n }, _o = !1, at = t; at !== null; )
      if (t = at, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, at = e;
      else
        for (; at !== null; ) {
          switch (t = at, r = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  a = e[n], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && r !== null) {
                e = void 0, n = t, a = r.memoizedProps, r = r.memoizedState, l = n.stateNode;
                try {
                  var F = ma(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    F,
                    r
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (J) {
                  Ae(
                    n,
                    n.return,
                    J
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  qs(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      qs(e);
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
            e.return = t.return, at = e;
            break;
          }
          at = t.return;
        }
  }
  function Gd(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Kn(e, n), l & 4 && $r(5, n);
        break;
      case 1:
        if (Kn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (u) {
              Ae(n, n.return, u);
            }
          else {
            var a = ma(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                a,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (u) {
              Ae(
                n,
                n.return,
                u
              );
            }
          }
        l & 64 && Ld(n), l & 512 && Ir(n, n.return);
        break;
      case 3:
        if (Kn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
            xf(e, t);
          } catch (u) {
            Ae(n, n.return, u);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Bd(n);
      case 26:
      case 5:
        Kn(e, n), t === null && l & 4 && jd(n), l & 512 && Ir(n, n.return);
        break;
      case 12:
        Kn(e, n);
        break;
      case 31:
        Kn(e, n), l & 4 && Fd(e, n);
        break;
      case 13:
        Kn(e, n), l & 4 && Xd(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Hg.bind(
          null,
          n
        ), ay(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || $n, !l) {
          t = t !== null && t.memoizedState !== null || Ze, a = $n;
          var r = Ze;
          $n = l, (Ze = t) && !r ? Pn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Kn(e, n), $n = a, Ze = r;
        }
        break;
      case 30:
        break;
      default:
        Kn(e, n);
    }
  }
  function Vd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Vd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && vr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, Nt = !1;
  function In(e, t, n) {
    for (n = n.child; n !== null; )
      Yd(e, t, n), n = n.sibling;
  }
  function Yd(e, t, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(il, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Ze || An(n, t), In(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ze || An(n, t);
        var l = je, a = Nt;
        Dl(n.type) && (je = n.stateNode, Nt = !1), In(
          e,
          t,
          n
        ), li(n.stateNode), je = l, Nt = a;
        break;
      case 5:
        Ze || An(n, t);
      case 6:
        if (l = je, a = Nt, je = null, In(
          e,
          t,
          n
        ), je = l, Nt = a, je !== null)
          if (Nt)
            try {
              (je.nodeType === 9 ? je.body : je.nodeName === "HTML" ? je.ownerDocument.body : je).removeChild(n.stateNode);
            } catch (r) {
              Ae(
                n,
                t,
                r
              );
            }
          else
            try {
              je.removeChild(n.stateNode);
            } catch (r) {
              Ae(
                n,
                t,
                r
              );
            }
        break;
      case 18:
        je !== null && (Nt ? (e = je, Lp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), or(e)) : Lp(je, n.stateNode));
        break;
      case 4:
        l = je, a = Nt, je = n.stateNode.containerInfo, Nt = !0, In(
          e,
          t,
          n
        ), je = l, Nt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        xl(2, n, t), Ze || xl(4, n, t), In(
          e,
          t,
          n
        );
        break;
      case 1:
        Ze || (An(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && Ud(
          n,
          t,
          l
        )), In(
          e,
          t,
          n
        );
        break;
      case 21:
        In(
          e,
          t,
          n
        );
        break;
      case 22:
        Ze = (l = Ze) || n.memoizedState !== null, In(
          e,
          t,
          n
        ), Ze = l;
        break;
      default:
        In(
          e,
          t,
          n
        );
    }
  }
  function Fd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        or(e);
      } catch (n) {
        Ae(t, t.return, n);
      }
    }
  }
  function Xd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        or(e);
      } catch (n) {
        Ae(t, t.return, n);
      }
  }
  function Og(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new qd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new qd()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function io(e, t) {
    var n = Og(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = Bg.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function Ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], r = e, u = t, f = u;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Dl(f.type)) {
                je = f.stateNode, Nt = !1;
                break e;
              }
              break;
            case 5:
              je = f.stateNode, Nt = !1;
              break e;
            case 3:
            case 4:
              je = f.stateNode.containerInfo, Nt = !0;
              break e;
          }
          f = f.return;
        }
        if (je === null) throw Error(c(160));
        Yd(r, u, a), je = null, Nt = !1, r = a.alternate, r !== null && (r.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Qd(t, e), t = t.sibling;
  }
  var hn = null;
  function Qd(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ot(t, e), Ct(e), l & 4 && (xl(3, e, e.return), $r(3, e), xl(5, e, e.return));
        break;
      case 1:
        Ot(t, e), Ct(e), l & 512 && (Ze || n === null || An(n, n.return)), l & 64 && $n && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = hn;
        if (Ot(t, e), Ct(e), l & 512 && (Ze || n === null || An(n, n.return)), l & 4) {
          var r = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      r = a.getElementsByTagName("title")[0], (!r || r[Jl] || r[oe] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(l), a.head.insertBefore(
                        r,
                        a.querySelector("head > title")
                      )), ct(r, l, n), r[oe] = e, Me(r), l = r;
                      break e;
                    case "link":
                      var u = Qp(
                        "link",
                        "href",
                        a
                      ).get(l + (n.href || ""));
                      if (u) {
                        for (var f = 0; f < u.length; f++)
                          if (r = u[f], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            u.splice(f, 1);
                            break t;
                          }
                      }
                      r = a.createElement(l), ct(r, l, n), a.head.appendChild(r);
                      break;
                    case "meta":
                      if (u = Qp(
                        "meta",
                        "content",
                        a
                      ).get(l + (n.content || ""))) {
                        for (f = 0; f < u.length; f++)
                          if (r = u[f], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            u.splice(f, 1);
                            break t;
                          }
                      }
                      r = a.createElement(l), ct(r, l, n), a.head.appendChild(r);
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  r[oe] = e, Me(r), l = r;
                }
                e.stateNode = l;
              } else
                $p(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Xp(
                a,
                l,
                e.memoizedProps
              );
          else
            r !== l ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, l === null ? $p(
              a,
              e.type,
              e.stateNode
            ) : Xp(
              a,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && ds(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Ot(t, e), Ct(e), l & 512 && (Ze || n === null || An(n, n.return)), n !== null && l & 4 && ds(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ot(t, e), Ct(e), l & 512 && (Ze || n === null || An(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            $(a, "");
          } catch (F) {
            Ae(e, e.return, F);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, ds(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (hs = !0);
        break;
      case 6:
        if (Ot(t, e), Ct(e), l & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (F) {
            Ae(e, e.return, F);
          }
        }
        break;
      case 3:
        if (ko = null, a = hn, hn = wo(t.containerInfo), Ot(t, e), hn = a, Ct(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            or(t.containerInfo);
          } catch (F) {
            Ae(e, e.return, F);
          }
        hs && (hs = !1, $d(e));
        break;
      case 4:
        l = hn, hn = wo(
          e.stateNode.containerInfo
        ), Ot(t, e), Ct(e), hn = l;
        break;
      case 12:
        Ot(t, e), Ct(e);
        break;
      case 31:
        Ot(t, e), Ct(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, io(e, l)));
        break;
      case 13:
        Ot(t, e), Ct(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (uo = Ye()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, io(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var p = n !== null && n.memoizedState !== null, w = $n, z = Ze;
        if ($n = w || a, Ze = z || p, Ot(t, e), Ze = z, $n = w, Ct(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || p || $n || Ze || ha(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                p = n = t;
                try {
                  if (r = p.stateNode, a)
                    u = r.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    f = p.stateNode;
                    var C = p.memoizedProps.style, k = C != null && C.hasOwnProperty("display") ? C.display : null;
                    f.style.display = k == null || typeof k == "boolean" ? "" : ("" + k).trim();
                  }
                } catch (F) {
                  Ae(p, p.return, F);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                p = t;
                try {
                  p.stateNode.nodeValue = a ? "" : p.memoizedProps;
                } catch (F) {
                  Ae(p, p.return, F);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                p = t;
                try {
                  var E = p.stateNode;
                  a ? Up(E, !0) : Up(p.stateNode, !1);
                } catch (F) {
                  Ae(p, p.return, F);
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
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, io(e, n))));
        break;
      case 19:
        Ot(t, e), Ct(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, io(e, l)));
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
        for (var n, l = e.return; l !== null; ) {
          if (Hd(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, r = ps(e);
            ro(e, r, a);
            break;
          case 5:
            var u = n.stateNode;
            n.flags & 32 && ($(u, ""), n.flags &= -33);
            var f = ps(e);
            ro(e, f, u);
            break;
          case 3:
          case 4:
            var p = n.stateNode.containerInfo, w = ps(e);
            ms(
              e,
              w,
              p
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (z) {
        Ae(e, e.return, z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $d(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        $d(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Kn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Gd(e, t.alternate, t), t = t.sibling;
  }
  function ha(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xl(4, t, t.return), ha(t);
          break;
        case 1:
          An(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Ud(
            t,
            t.return,
            n
          ), ha(t);
          break;
        case 27:
          li(t.stateNode);
        case 26:
        case 5:
          An(t, t.return), ha(t);
          break;
        case 22:
          t.memoizedState === null && ha(t);
          break;
        case 30:
          ha(t);
          break;
        default:
          ha(t);
      }
      e = e.sibling;
    }
  }
  function Pn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, r = t, u = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Pn(
            a,
            r,
            n
          ), $r(4, r);
          break;
        case 1:
          if (Pn(
            a,
            r,
            n
          ), l = r, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (w) {
              Ae(l, l.return, w);
            }
          if (l = r, a = l.updateQueue, a !== null) {
            var f = l.stateNode;
            try {
              var p = a.shared.hiddenCallbacks;
              if (p !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < p.length; a++)
                  Ef(p[a], f);
            } catch (w) {
              Ae(l, l.return, w);
            }
          }
          n && u & 64 && Ld(r), Ir(r, r.return);
          break;
        case 27:
          Bd(r);
        case 26:
        case 5:
          Pn(
            a,
            r,
            n
          ), n && l === null && u & 4 && jd(r), Ir(r, r.return);
          break;
        case 12:
          Pn(
            a,
            r,
            n
          );
          break;
        case 31:
          Pn(
            a,
            r,
            n
          ), n && u & 4 && Fd(a, r);
          break;
        case 13:
          Pn(
            a,
            r,
            n
          ), n && u & 4 && Xd(a, r);
          break;
        case 22:
          r.memoizedState === null && Pn(
            a,
            r,
            n
          ), Ir(r, r.return);
          break;
        case 30:
          break;
        default:
          Pn(
            a,
            r,
            n
          );
      }
      t = t.sibling;
    }
  }
  function gs(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Mr(n));
  }
  function ys(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Mr(e));
  }
  function gn(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Id(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function Id(e, t, n, l) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        gn(
          e,
          t,
          n,
          l
        ), a & 2048 && $r(9, t);
        break;
      case 1:
        gn(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        gn(
          e,
          t,
          n,
          l
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Mr(e)));
        break;
      case 12:
        if (a & 2048) {
          gn(
            e,
            t,
            n,
            l
          ), e = t.stateNode;
          try {
            var r = t.memoizedProps, u = r.id, f = r.onPostCommit;
            typeof f == "function" && f(
              u,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (p) {
            Ae(t, t.return, p);
          }
        } else
          gn(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        gn(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        gn(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        r = t.stateNode, u = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? gn(
          e,
          t,
          n,
          l
        ) : Kr(e, t) : r._visibility & 2 ? gn(
          e,
          t,
          n,
          l
        ) : (r._visibility |= 2, Pa(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && gs(u, t);
        break;
      case 24:
        gn(
          e,
          t,
          n,
          l
        ), a & 2048 && ys(t.alternate, t);
        break;
      default:
        gn(
          e,
          t,
          n,
          l
        );
    }
  }
  function Pa(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var r = e, u = t, f = n, p = l, w = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Pa(
            r,
            u,
            f,
            p,
            a
          ), $r(8, u);
          break;
        case 23:
          break;
        case 22:
          var z = u.stateNode;
          u.memoizedState !== null ? z._visibility & 2 ? Pa(
            r,
            u,
            f,
            p,
            a
          ) : Kr(
            r,
            u
          ) : (z._visibility |= 2, Pa(
            r,
            u,
            f,
            p,
            a
          )), a && w & 2048 && gs(
            u.alternate,
            u
          );
          break;
        case 24:
          Pa(
            r,
            u,
            f,
            p,
            a
          ), a && w & 2048 && ys(u.alternate, u);
          break;
        default:
          Pa(
            r,
            u,
            f,
            p,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Kr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            Kr(n, l), a & 2048 && gs(
              l.alternate,
              l
            );
            break;
          case 24:
            Kr(n, l), a & 2048 && ys(l.alternate, l);
            break;
          default:
            Kr(n, l);
        }
        t = t.sibling;
      }
  }
  var Pr = 8192;
  function Za(e, t, n) {
    if (e.subtreeFlags & Pr)
      for (e = e.child; e !== null; )
        Kd(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Kd(e, t, n) {
    switch (e.tag) {
      case 26:
        Za(
          e,
          t,
          n
        ), e.flags & Pr && e.memoizedState !== null && gy(
          n,
          hn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Za(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = hn;
        hn = wo(e.stateNode.containerInfo), Za(
          e,
          t,
          n
        ), hn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Pr, Pr = 16777216, Za(
          e,
          t,
          n
        ), Pr = l) : Za(
          e,
          t,
          n
        ));
        break;
      default:
        Za(
          e,
          t,
          n
        );
    }
  }
  function Pd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Zr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          at = l, Wd(
            l,
            e
          );
        }
      Pd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Zd(e), e = e.sibling;
  }
  function Zd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Zr(e), e.flags & 2048 && xl(9, e, e.return);
        break;
      case 3:
        Zr(e);
        break;
      case 12:
        Zr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, oo(e)) : Zr(e);
        break;
      default:
        Zr(e);
    }
  }
  function oo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          at = l, Wd(
            l,
            e
          );
        }
      Pd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          xl(8, t, t.return), oo(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, oo(t));
          break;
        default:
          oo(t);
      }
      e = e.sibling;
    }
  }
  function Wd(e, t) {
    for (; at !== null; ) {
      var n = at;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          xl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Mr(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, at = l;
      else
        e: for (n = e; at !== null; ) {
          l = at;
          var a = l.sibling, r = l.return;
          if (Vd(l), l === n) {
            at = null;
            break e;
          }
          if (a !== null) {
            a.return = r, at = a;
            break e;
          }
          at = r;
        }
    }
  }
  var Cg = {
    getCacheForType: function(e) {
      var t = ut(Ie), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return ut(Ie).controller.signal;
    }
  }, Dg = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, Ce = null, ce = null, de = 0, xe = 0, Vt = null, Al = !1, Wa = !1, bs = !1, Zn = 0, Ve = 0, _l = 0, ga = 0, vs = 0, Yt = 0, Ja = 0, Wr = null, Dt = null, Ss = !1, uo = 0, Jd = 0, so = 1 / 0, co = null, zl = null, et = 0, Nl = null, er = null, Wn = 0, ws = 0, Ts = null, ep = null, Jr = 0, ks = null;
  function Ft() {
    return (Te & 2) !== 0 && de !== 0 ? de & -de : R.T !== null ? Ns() : sl();
  }
  function tp() {
    if (Yt === 0)
      if ((de & 536870912) === 0 || he) {
        var e = Pl;
        Pl <<= 1, (Pl & 3932160) === 0 && (Pl = 262144), Yt = e;
      } else Yt = 536870912;
    return e = qt.current, e !== null && (e.flags |= 32), Yt;
  }
  function Rt(e, t, n) {
    (e === Ce && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (tr(e, 0), Ol(
      e,
      de,
      Yt,
      !1
    )), Ln(e, n), ((Te & 2) === 0 || e !== Ce) && (e === Ce && ((Te & 2) === 0 && (ga |= n), Ve === 4 && Ol(
      e,
      de,
      Yt,
      !1
    )), _n(e));
  }
  function np(e, t, n) {
    if ((Te & 6) !== 0) throw Error(c(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Sn(e, t), a = l ? Lg(e, t) : xs(e, t, !0), r = l;
    do {
      if (a === 0) {
        Wa && !l && Ol(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, r && !Rg(n)) {
          a = xs(e, t, !1), r = !1;
          continue;
        }
        if (a === 2) {
          if (r = t, e.errorRecoveryDisabledLanes & r)
            var u = 0;
          else
            u = e.pendingLanes & -536870913, u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
          if (u !== 0) {
            t = u;
            e: {
              var f = e;
              a = Wr;
              var p = f.current.memoizedState.isDehydrated;
              if (p && (tr(f, u).flags |= 256), u = xs(
                f,
                u,
                !1
              ), u !== 2) {
                if (bs && !p) {
                  f.errorRecoveryDisabledLanes |= r, ga |= r, a = 4;
                  break e;
                }
                r = Dt, Dt = a, r !== null && (Dt === null ? Dt = r : Dt.push.apply(
                  Dt,
                  r
                ));
              }
              a = u;
            }
            if (r = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          tr(e, 0), Ol(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, r = a, r) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ol(
                l,
                t,
                Yt,
                !Al
              );
              break e;
            case 2:
              Dt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (a = uo + 300 - Ye(), 10 < a)) {
            if (Ol(
              l,
              t,
              Yt,
              !Al
            ), Rn(l, 0, !0) !== 0) break e;
            Wn = t, l.timeoutHandle = Rp(
              lp.bind(
                null,
                l,
                n,
                Dt,
                co,
                Ss,
                t,
                Yt,
                ga,
                Ja,
                Al,
                r,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          lp(
            l,
            n,
            Dt,
            co,
            Ss,
            t,
            Yt,
            ga,
            Ja,
            Al,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    _n(e);
  }
  function lp(e, t, n, l, a, r, u, f, p, w, z, C, k, E) {
    if (e.timeoutHandle = -1, C = t.subtreeFlags, C & 8192 || (C & 16785408) === 16785408) {
      C = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: it
      }, Kd(
        t,
        r,
        C
      );
      var F = (r & 62914560) === r ? uo - Ye() : (r & 4194048) === r ? Jd - Ye() : 0;
      if (F = yy(
        C,
        F
      ), F !== null) {
        Wn = r, e.cancelPendingCommit = F(
          fp.bind(
            null,
            e,
            t,
            r,
            n,
            l,
            a,
            u,
            f,
            p,
            z,
            C,
            null,
            k,
            E
          )
        ), Ol(e, r, u, !w);
        return;
      }
    }
    fp(
      e,
      t,
      r,
      n,
      l,
      a,
      u,
      f,
      p
    );
  }
  function Rg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var a = n[l], r = a.getSnapshot;
          a = a.value;
          try {
            if (!Ht(r(), a)) return !1;
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
  function Ol(e, t, n, l) {
    t &= ~vs, t &= ~ga, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var r = 31 - rt(a), u = 1 << r;
      l[r] = -1, a &= ~u;
    }
    n !== 0 && mr(e, n, t);
  }
  function fo() {
    return (Te & 6) === 0 ? (ei(0), !1) : !0;
  }
  function Es() {
    if (ce !== null) {
      if (xe === 0)
        var e = ce.return;
      else
        e = ce, Gn = oa = null, qu(e), Xa = null, Ur = 0, e = ce;
      for (; e !== null; )
        Md(e.alternate, e), e = e.return;
      ce = null;
    }
  }
  function tr(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Jg(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Wn = 0, Es(), Ce = e, ce = n = Bn(e.current, null), de = t, xe = 0, Vt = null, Al = !1, Wa = Sn(e, t), bs = !1, Ja = Yt = vs = ga = _l = Ve = 0, Dt = Wr = null, Ss = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - rt(l), r = 1 << a;
        t |= e[a], l &= ~r;
      }
    return Zn = t, Di(), n;
  }
  function ap(e, t) {
    le = null, R.H = Fr, t === Fa || t === qi ? (t = Sf(), xe = 3) : t === zu ? (t = Sf(), xe = 4) : xe = t === ns ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, ce === null && (Ve = 1, eo(
      e,
      Zt(t, e.current)
    ));
  }
  function rp() {
    var e = qt.current;
    return e === null ? !0 : (de & 4194048) === de ? sn === null : (de & 62914560) === de || (de & 536870912) !== 0 ? e === sn : !1;
  }
  function ip() {
    var e = R.H;
    return R.H = Fr, e === null ? Fr : e;
  }
  function op() {
    var e = R.A;
    return R.A = Cg, e;
  }
  function po() {
    Ve = 4, Al || (de & 4194048) !== de && qt.current !== null || (Wa = !0), (_l & 134217727) === 0 && (ga & 134217727) === 0 || Ce === null || Ol(
      Ce,
      de,
      Yt,
      !1
    );
  }
  function xs(e, t, n) {
    var l = Te;
    Te |= 2;
    var a = ip(), r = op();
    (Ce !== e || de !== t) && (co = null, tr(e, t)), t = !1;
    var u = Ve;
    e: do
      try {
        if (xe !== 0 && ce !== null) {
          var f = ce, p = Vt;
          switch (xe) {
            case 8:
              Es(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              qt.current === null && (t = !0);
              var w = xe;
              if (xe = 0, Vt = null, nr(e, f, p, w), n && Wa) {
                u = 0;
                break e;
              }
              break;
            default:
              w = xe, xe = 0, Vt = null, nr(e, f, p, w);
          }
        }
        Mg(), u = Ve;
        break;
      } catch (z) {
        ap(e, z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = oa = null, Te = l, R.H = a, R.A = r, ce === null && (Ce = null, de = 0, Di()), u;
  }
  function Mg() {
    for (; ce !== null; ) up(ce);
  }
  function Lg(e, t) {
    var n = Te;
    Te |= 2;
    var l = ip(), a = op();
    Ce !== e || de !== t ? (co = null, so = Ye() + 500, tr(e, t)) : Wa = Sn(
      e,
      t
    );
    e: do
      try {
        if (xe !== 0 && ce !== null) {
          t = ce;
          var r = Vt;
          t: switch (xe) {
            case 1:
              xe = 0, Vt = null, nr(e, t, r, 1);
              break;
            case 2:
            case 9:
              if (bf(r)) {
                xe = 0, Vt = null, sp(t);
                break;
              }
              t = function() {
                xe !== 2 && xe !== 9 || Ce !== e || (xe = 7), _n(e);
              }, r.then(t, t);
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              bf(r) ? (xe = 0, Vt = null, sp(t)) : (xe = 0, Vt = null, nr(e, t, r, 7));
              break;
            case 5:
              var u = null;
              switch (ce.tag) {
                case 26:
                  u = ce.memoizedState;
                case 5:
                case 27:
                  var f = ce;
                  if (u ? Ip(u) : f.stateNode.complete) {
                    xe = 0, Vt = null;
                    var p = f.sibling;
                    if (p !== null) ce = p;
                    else {
                      var w = f.return;
                      w !== null ? (ce = w, mo(w)) : ce = null;
                    }
                    break t;
                  }
              }
              xe = 0, Vt = null, nr(e, t, r, 5);
              break;
            case 6:
              xe = 0, Vt = null, nr(e, t, r, 6);
              break;
            case 8:
              Es(), Ve = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Ug();
        break;
      } catch (z) {
        ap(e, z);
      }
    while (!0);
    return Gn = oa = null, R.H = l, R.A = a, Te = n, ce !== null ? 0 : (Ce = null, de = 0, Di(), Ve);
  }
  function Ug() {
    for (; ce !== null && !bn(); )
      up(ce);
  }
  function up(e) {
    var t = Dd(e.alternate, e, Zn);
    e.memoizedProps = e.pendingProps, t === null ? mo(e) : ce = t;
  }
  function sp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ad(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          de
        );
        break;
      case 11:
        t = Ad(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          de
        );
        break;
      case 5:
        qu(t);
      default:
        Md(n, t), t = ce = of(t, Zn), t = Dd(n, t, Zn);
    }
    e.memoizedProps = e.pendingProps, t === null ? mo(e) : ce = t;
  }
  function nr(e, t, n, l) {
    Gn = oa = null, qu(t), Xa = null, Ur = 0;
    var a = t.return;
    try {
      if (Eg(
        e,
        a,
        t,
        n,
        de
      )) {
        Ve = 1, eo(
          e,
          Zt(n, e.current)
        ), ce = null;
        return;
      }
    } catch (r) {
      if (a !== null) throw ce = a, r;
      Ve = 1, eo(
        e,
        Zt(n, e.current)
      ), ce = null;
      return;
    }
    t.flags & 32768 ? (he || l === 1 ? e = !0 : Wa || (de & 536870912) !== 0 ? e = !1 : (Al = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = qt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), cp(t, e)) : mo(t);
  }
  function mo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        cp(
          t,
          Al
        );
        return;
      }
      e = t.return;
      var n = _g(
        t.alternate,
        t,
        Zn
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
    Ve === 0 && (Ve = 5);
  }
  function cp(e, t) {
    do {
      var n = zg(e.alternate, e);
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
    Ve = 6, ce = null;
  }
  function fp(e, t, n, l, a, r, u, f, p) {
    e.cancelPendingCommit = null;
    do
      ho();
    while (et !== 0);
    if ((Te & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (r = t.lanes | t.childLanes, r |= pu, Io(
        e,
        n,
        r,
        u,
        f,
        p
      ), e === Ce && (ce = Ce = null, de = 0), er = t, Nl = e, Wn = n, ws = r, Ts = a, ep = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, qg(al, function() {
        return gp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = R.T, R.T = null, a = H.p, H.p = 2, u = Te, Te |= 4;
        try {
          Ng(e, t, n);
        } finally {
          Te = u, H.p = a, R.T = l;
        }
      }
      et = 1, dp(), pp(), mp();
    }
  }
  function dp() {
    if (et === 1) {
      et = 0;
      var e = Nl, t = er, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = R.T, R.T = null;
        var l = H.p;
        H.p = 2;
        var a = Te;
        Te |= 4;
        try {
          Qd(t, e);
          var r = js, u = Zc(e.containerInfo), f = r.focusedElem, p = r.selectionRange;
          if (u !== f && f && f.ownerDocument && Pc(
            f.ownerDocument.documentElement,
            f
          )) {
            if (p !== null && uu(f)) {
              var w = p.start, z = p.end;
              if (z === void 0 && (z = w), "selectionStart" in f)
                f.selectionStart = w, f.selectionEnd = Math.min(
                  z,
                  f.value.length
                );
              else {
                var C = f.ownerDocument || document, k = C && C.defaultView || window;
                if (k.getSelection) {
                  var E = k.getSelection(), F = f.textContent.length, J = Math.min(p.start, F), Oe = p.end === void 0 ? J : Math.min(p.end, F);
                  !E.extend && J > Oe && (u = Oe, Oe = J, J = u);
                  var v = Kc(
                    f,
                    J
                  ), y = Kc(
                    f,
                    Oe
                  );
                  if (v && y && (E.rangeCount !== 1 || E.anchorNode !== v.node || E.anchorOffset !== v.offset || E.focusNode !== y.node || E.focusOffset !== y.offset)) {
                    var S = C.createRange();
                    S.setStart(v.node, v.offset), E.removeAllRanges(), J > Oe ? (E.addRange(S), E.extend(y.node, y.offset)) : (S.setEnd(y.node, y.offset), E.addRange(S));
                  }
                }
              }
            }
            for (C = [], E = f; E = E.parentNode; )
              E.nodeType === 1 && C.push({
                element: E,
                left: E.scrollLeft,
                top: E.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < C.length; f++) {
              var N = C[f];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          _o = !!Us, js = Us = null;
        } finally {
          Te = a, H.p = l, R.T = n;
        }
      }
      e.current = t, et = 2;
    }
  }
  function pp() {
    if (et === 2) {
      et = 0;
      var e = Nl, t = er, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = R.T, R.T = null;
        var l = H.p;
        H.p = 2;
        var a = Te;
        Te |= 4;
        try {
          Gd(e, t.alternate, t);
        } finally {
          Te = a, H.p = l, R.T = n;
        }
      }
      et = 3;
    }
  }
  function mp() {
    if (et === 4 || et === 3) {
      et = 0, $l();
      var e = Nl, t = er, n = Wn, l = ep;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? et = 5 : (et = 0, er = Nl = null, hp(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (zl = null), gr(n), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function")
        try {
          pt.onCommitFiberRoot(
            il,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = R.T, a = H.p, H.p = 2, R.T = null;
        try {
          for (var r = e.onRecoverableError, u = 0; u < l.length; u++) {
            var f = l[u];
            r(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          R.T = t, H.p = a;
        }
      }
      (Wn & 3) !== 0 && ho(), _n(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === ks ? Jr++ : (Jr = 0, ks = e) : Jr = 0, ei(0);
    }
  }
  function hp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Mr(t)));
  }
  function ho() {
    return dp(), pp(), mp(), gp();
  }
  function gp() {
    if (et !== 5) return !1;
    var e = Nl, t = ws;
    ws = 0;
    var n = gr(Wn), l = R.T, a = H.p;
    try {
      H.p = 32 > n ? 32 : n, R.T = null, n = Ts, Ts = null;
      var r = Nl, u = Wn;
      if (et = 0, er = Nl = null, Wn = 0, (Te & 6) !== 0) throw Error(c(331));
      var f = Te;
      if (Te |= 4, Zd(r.current), Id(
        r,
        r.current,
        u,
        n
      ), Te = f, ei(0, !1), pt && typeof pt.onPostCommitFiberRoot == "function")
        try {
          pt.onPostCommitFiberRoot(il, r);
        } catch {
        }
      return !0;
    } finally {
      H.p = a, R.T = l, hp(e, t);
    }
  }
  function yp(e, t, n) {
    t = Zt(n, t), t = ts(e.stateNode, t, 2), e = Tl(e, t, 2), e !== null && (Ln(e, 2), _n(e));
  }
  function Ae(e, t, n) {
    if (e.tag === 3)
      yp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          yp(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (zl === null || !zl.has(l))) {
            e = Zt(n, e), n = bd(2), l = Tl(t, n, 2), l !== null && (vd(
              n,
              l,
              t,
              e
            ), Ln(l, 2), _n(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function As(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Dg();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (bs = !0, a.add(n), e = jg.bind(null, e, t, n), t.then(e, e));
  }
  function jg(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ce === e && (de & n) === n && (Ve === 4 || Ve === 3 && (de & 62914560) === de && 300 > Ye() - uo ? (Te & 2) === 0 && tr(e, 0) : vs |= n, Ja === de && (Ja = 0)), _n(e);
  }
  function bp(e, t) {
    t === 0 && (t = Mn()), e = aa(e, t), e !== null && (Ln(e, t), _n(e));
  }
  function Hg(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), bp(e, n);
  }
  function Bg(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    l !== null && l.delete(t), bp(e, n);
  }
  function qg(e, t) {
    return Sa(e, t);
  }
  var go = null, lr = null, _s = !1, yo = !1, zs = !1, Cl = 0;
  function _n(e) {
    e !== lr && e.next === null && (lr === null ? go = lr = e : lr = lr.next = e), yo = !0, _s || (_s = !0, Vg());
  }
  function ei(e, t) {
    if (!zs && yo) {
      zs = !0;
      do
        for (var n = !1, l = go; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var r = 0;
            else {
              var u = l.suspendedLanes, f = l.pingedLanes;
              r = (1 << 31 - rt(42 | e) + 1) - 1, r &= a & ~(u & ~f), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (n = !0, Tp(l, r));
          } else
            r = de, r = Rn(
              l,
              l === Ce ? r : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (r & 3) === 0 || Sn(l, r) || (n = !0, Tp(l, r));
          l = l.next;
        }
      while (n);
      zs = !1;
    }
  }
  function Gg() {
    vp();
  }
  function vp() {
    yo = _s = !1;
    var e = 0;
    Cl !== 0 && Wg() && (e = Cl);
    for (var t = Ye(), n = null, l = go; l !== null; ) {
      var a = l.next, r = Sp(l, t);
      r === 0 ? (l.next = null, n === null ? go = a : n.next = a, a === null && (lr = n)) : (n = l, (e !== 0 || (r & 3) !== 0) && (yo = !0)), l = a;
    }
    et !== 0 && et !== 5 || ei(e), Cl !== 0 && (Cl = 0);
  }
  function Sp(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
      var u = 31 - rt(r), f = 1 << u, p = a[u];
      p === -1 ? ((f & n) === 0 || (f & l) !== 0) && (a[u] = Kt(f, t)) : p <= t && (e.expiredLanes |= f), r &= ~f;
    }
    if (t = Ce, n = de, n = Rn(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && wa(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Sn(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && wa(l), gr(n)) {
        case 2:
        case 8:
          n = ka;
          break;
        case 32:
          n = al;
          break;
        case 268435456:
          n = Il;
          break;
        default:
          n = al;
      }
      return l = wp.bind(null, e), n = Sa(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && wa(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function wp(e, t) {
    if (et !== 0 && et !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (ho() && e.callbackNode !== n)
      return null;
    var l = de;
    return l = Rn(
      e,
      e === Ce ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (np(e, l, t), Sp(e, Ye()), e.callbackNode != null && e.callbackNode === n ? wp.bind(null, e) : null);
  }
  function Tp(e, t) {
    if (ho()) return null;
    np(e, t, !0);
  }
  function Vg() {
    ey(function() {
      (Te & 6) !== 0 ? Sa(
        Ta,
        Gg
      ) : vp();
    });
  }
  function Ns() {
    if (Cl === 0) {
      var e = Va;
      e === 0 && (e = Kl, Kl <<= 1, (Kl & 261888) === 0 && (Kl = 256)), Cl = e;
    }
    return Cl;
  }
  function kp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _t("" + e);
  }
  function Ep(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Yg(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var r = kp(
        (a[Fe] || null).action
      ), u = l.submitter;
      u && (t = (t = u[Fe] || null) ? kp(t.formAction) : u.getAttribute("formAction"), t !== null && (r = t, u = null));
      var f = new zi(
        "action",
        "action",
        null,
        l,
        a
      );
      e.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Cl !== 0) {
                  var p = u ? Ep(a, u) : new FormData(a);
                  Ku(
                    n,
                    {
                      pending: !0,
                      data: p,
                      method: a.method,
                      action: r
                    },
                    null,
                    p
                  );
                }
              } else
                typeof r == "function" && (f.preventDefault(), p = u ? Ep(a, u) : new FormData(a), Ku(
                  n,
                  {
                    pending: !0,
                    data: p,
                    method: a.method,
                    action: r
                  },
                  r,
                  p
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Os = 0; Os < du.length; Os++) {
    var Cs = du[Os], Fg = Cs.toLowerCase(), Xg = Cs[0].toUpperCase() + Cs.slice(1);
    mn(
      Fg,
      "on" + Xg
    );
  }
  mn(ef, "onAnimationEnd"), mn(tf, "onAnimationIteration"), mn(nf, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(og, "onTransitionRun"), mn(ug, "onTransitionStart"), mn(sg, "onTransitionCancel"), mn(lf, "onTransitionEnd"), jn("onMouseEnter", ["mouseout", "mouseover"]), jn("onMouseLeave", ["mouseout", "mouseover"]), jn("onPointerEnter", ["pointerout", "pointerover"]), jn("onPointerLeave", ["pointerout", "pointerover"]), Tn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Tn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Tn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Tn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Tn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Tn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ti = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Qg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ti)
  );
  function xp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], a = l.event;
      l = l.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var u = l.length - 1; 0 <= u; u--) {
            var f = l[u], p = f.instance, w = f.currentTarget;
            if (f = f.listener, p !== r && a.isPropagationStopped())
              break e;
            r = f, a.currentTarget = w;
            try {
              r(a);
            } catch (z) {
              Ci(z);
            }
            a.currentTarget = null, r = p;
          }
        else
          for (u = 0; u < l.length; u++) {
            if (f = l[u], p = f.instance, w = f.currentTarget, f = f.listener, p !== r && a.isPropagationStopped())
              break e;
            r = f, a.currentTarget = w;
            try {
              r(a);
            } catch (z) {
              Ci(z);
            }
            a.currentTarget = null, r = p;
          }
      }
    }
  }
  function fe(e, t) {
    var n = t[Aa];
    n === void 0 && (n = t[Aa] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (Ap(t, e, 2, !1), n.add(l));
  }
  function Ds(e, t, n) {
    var l = 0;
    t && (l |= 4), Ap(
      n,
      e,
      l,
      t
    );
  }
  var bo = "_reactListening" + Math.random().toString(36).slice(2);
  function Rs(e) {
    if (!e[bo]) {
      e[bo] = !0, Ti.forEach(function(n) {
        n !== "selectionchange" && (Qg.has(n) || Ds(n, !1, e), Ds(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[bo] || (t[bo] = !0, Ds("selectionchange", !1, t));
    }
  }
  function Ap(e, t, n, l) {
    switch (tm(t)) {
      case 2:
        var a = Sy;
        break;
      case 8:
        a = wy;
        break;
      default:
        a = Is;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !Jo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function Ms(e, t, n, l, a) {
    var r = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var u = l.tag;
        if (u === 3 || u === 4) {
          var f = l.stateNode.containerInfo;
          if (f === a) break;
          if (u === 4)
            for (u = l.return; u !== null; ) {
              var p = u.tag;
              if ((p === 3 || p === 4) && u.stateNode.containerInfo === a)
                return;
              u = u.return;
            }
          for (; f !== null; ) {
            if (u = fl(f), u === null) return;
            if (p = u.tag, p === 5 || p === 6 || p === 26 || p === 27) {
              l = r = u;
              continue e;
            }
            f = f.parentNode;
          }
        }
        l = l.return;
      }
    Oc(function() {
      var w = r, z = Zo(n), C = [];
      e: {
        var k = af.get(e);
        if (k !== void 0) {
          var E = zi, F = e;
          switch (e) {
            case "keypress":
              if (Ai(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = Bh;
              break;
            case "focusin":
              F = "focus", E = lu;
              break;
            case "focusout":
              F = "blur", E = lu;
              break;
            case "beforeblur":
            case "afterblur":
              E = lu;
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
              E = Rc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = _h;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Vh;
              break;
            case ef:
            case tf:
            case nf:
              E = Oh;
              break;
            case lf:
              E = Fh;
              break;
            case "scroll":
            case "scrollend":
              E = xh;
              break;
            case "wheel":
              E = Qh;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = Dh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = Lc;
              break;
            case "toggle":
            case "beforetoggle":
              E = Ih;
          }
          var J = (t & 4) !== 0, Oe = !J && (e === "scroll" || e === "scrollend"), v = J ? k !== null ? k + "Capture" : null : k;
          J = [];
          for (var y = w, S; y !== null; ) {
            var N = y;
            if (S = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || S === null || v === null || (N = kr(y, v), N != null && J.push(
              ni(y, N, S)
            )), Oe) break;
            y = y.return;
          }
          0 < J.length && (k = new E(
            k,
            F,
            null,
            n,
            z
          ), C.push({ event: k, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (k = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", k && n !== Po && (F = n.relatedTarget || n.fromElement) && (fl(F) || F[cl]))
            break e;
          if ((E || k) && (k = z.window === z ? z : (k = z.ownerDocument) ? k.defaultView || k.parentWindow : window, E ? (F = n.relatedTarget || n.toElement, E = w, F = F ? fl(F) : null, F !== null && (Oe = T(F), J = F.tag, F !== Oe || J !== 5 && J !== 27 && J !== 6) && (F = null)) : (E = null, F = w), E !== F)) {
            if (J = Rc, N = "onMouseLeave", v = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (J = Lc, N = "onPointerLeave", v = "onPointerEnter", y = "pointer"), Oe = E == null ? k : Mt(E), S = F == null ? k : Mt(F), k = new J(
              N,
              y + "leave",
              E,
              n,
              z
            ), k.target = Oe, k.relatedTarget = S, N = null, fl(z) === w && (J = new J(
              v,
              y + "enter",
              F,
              n,
              z
            ), J.target = S, J.relatedTarget = Oe, N = J), Oe = N, E && F)
              t: {
                for (J = $g, v = E, y = F, S = 0, N = v; N; N = J(N))
                  S++;
                N = 0;
                for (var K = y; K; K = J(K))
                  N++;
                for (; 0 < S - N; )
                  v = J(v), S--;
                for (; 0 < N - S; )
                  y = J(y), N--;
                for (; S--; ) {
                  if (v === y || y !== null && v === y.alternate) {
                    J = v;
                    break t;
                  }
                  v = J(v), y = J(y);
                }
                J = null;
              }
            else J = null;
            E !== null && _p(
              C,
              k,
              E,
              J,
              !1
            ), F !== null && Oe !== null && _p(
              C,
              Oe,
              F,
              J,
              !0
            );
          }
        }
        e: {
          if (k = w ? Mt(w) : window, E = k.nodeName && k.nodeName.toLowerCase(), E === "select" || E === "input" && k.type === "file")
            var ve = Yc;
          else if (Gc(k))
            if (Fc)
              ve = ag;
            else {
              ve = ng;
              var Q = tg;
            }
          else
            E = k.nodeName, !E || E.toLowerCase() !== "input" || k.type !== "checkbox" && k.type !== "radio" ? w && lt(w.elementType) && (ve = Yc) : ve = lg;
          if (ve && (ve = ve(e, w))) {
            Vc(
              C,
              ve,
              n,
              z
            );
            break e;
          }
          Q && Q(e, k, w), e === "focusout" && w && k.type === "number" && w.memoizedProps.value != null && b(k, "number", k.value);
        }
        switch (Q = w ? Mt(w) : window, e) {
          case "focusin":
            (Gc(Q) || Q.contentEditable === "true") && (Ma = Q, su = w, Cr = null);
            break;
          case "focusout":
            Cr = su = Ma = null;
            break;
          case "mousedown":
            cu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            cu = !1, Wc(C, n, z);
            break;
          case "selectionchange":
            if (ig) break;
          case "keydown":
          case "keyup":
            Wc(C, n, z);
        }
        var ae;
        if (ru)
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
          Ra ? Bc(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (Uc && n.locale !== "ko" && (Ra || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Ra && (ae = Cc()) : (hl = z, eu = "value" in hl ? hl.value : hl.textContent, Ra = !0)), Q = vo(w, pe), 0 < Q.length && (pe = new Mc(
          pe,
          e,
          null,
          n,
          z
        ), C.push({ event: pe, listeners: Q }), ae ? pe.data = ae : (ae = qc(n), ae !== null && (pe.data = ae)))), (ae = Ph ? Zh(e, n) : Wh(e, n)) && (pe = vo(w, "onBeforeInput"), 0 < pe.length && (Q = new Mc(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          z
        ), C.push({
          event: Q,
          listeners: pe
        }), Q.data = ae)), Yg(
          C,
          e,
          w,
          n,
          z
        );
      }
      xp(C, t);
    });
  }
  function ni(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function vo(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, r = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || r === null || (a = kr(e, n), a != null && l.unshift(
        ni(e, a, r)
      ), a = kr(e, t), a != null && l.push(
        ni(e, a, r)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function $g(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _p(e, t, n, l, a) {
    for (var r = t._reactName, u = []; n !== null && n !== l; ) {
      var f = n, p = f.alternate, w = f.stateNode;
      if (f = f.tag, p !== null && p === l) break;
      f !== 5 && f !== 26 && f !== 27 || w === null || (p = w, a ? (w = kr(n, r), w != null && u.unshift(
        ni(n, w, p)
      )) : a || (w = kr(n, r), w != null && u.push(
        ni(n, w, p)
      ))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Ig = /\r\n?/g, Kg = /\u0000|\uFFFD/g;
  function zp(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ig, `
`).replace(Kg, "");
  }
  function Np(e, t) {
    return t = zp(t), zp(e) === t;
  }
  function Ne(e, t, n, l, a, r) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || $(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && $(e, "" + l);
        break;
      case "className":
        xt(e, "class", l);
        break;
      case "tabIndex":
        xt(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xt(e, n, l);
        break;
      case "style":
        mt(e, l, r);
        break;
      case "data":
        if (t !== "object") {
          xt(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = _t("" + l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (n === "formAction" ? (t !== "input" && Ne(e, t, "name", a.name, a, null), Ne(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Ne(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Ne(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Ne(e, t, "encType", a.encType, a, null), Ne(e, t, "method", a.method, a, null), Ne(e, t, "target", a.target, a, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = _t("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = it);
        break;
      case "onScroll":
        l != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && fe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = _t("" + l), e.setAttributeNS(
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
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        fe("beforetoggle", e), fe("toggle", e), kn(e, "popover", l);
        break;
      case "xlinkActuate":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        kn(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = bt.get(n) || n, kn(e, n, l));
    }
  }
  function Ls(e, t, n, l, a, r) {
    switch (n) {
      case "style":
        mt(e, l, r);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? $(e, l) : (typeof l == "number" || typeof l == "bigint") && $(e, "" + l);
        break;
      case "onScroll":
        l != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && fe("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = it);
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
        if (!ki.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), r = e[Fe] || null, r = r != null ? r[n] : null, typeof r == "function" && e.removeEventListener(t, r, a), typeof l == "function")) {
              typeof r != "function" && r !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : kn(e, n, l);
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
        var l = !1, a = !1, r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var u = n[r];
            if (u != null)
              switch (r) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Ne(e, t, r, u, n, null);
              }
          }
        a && Ne(e, t, "srcSet", n.srcSet, n, null), l && Ne(e, t, "src", n.src, n, null);
        return;
      case "input":
        fe("invalid", e);
        var f = r = u = a = null, p = null, w = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var z = n[l];
            if (z != null)
              switch (l) {
                case "name":
                  a = z;
                  break;
                case "type":
                  u = z;
                  break;
                case "checked":
                  p = z;
                  break;
                case "defaultChecked":
                  w = z;
                  break;
                case "value":
                  r = z;
                  break;
                case "defaultValue":
                  f = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Ne(e, t, l, z, n, null);
              }
          }
        Oa(
          e,
          r,
          f,
          p,
          w,
          u,
          a,
          !1
        );
        return;
      case "select":
        fe("invalid", e), l = u = r = null;
        for (a in n)
          if (n.hasOwnProperty(a) && (f = n[a], f != null))
            switch (a) {
              case "value":
                r = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "multiple":
                l = f;
              default:
                Ne(e, t, a, f, n, null);
            }
        t = r, n = u, e.multiple = !!l, t != null ? g(e, !!l, t, !1) : n != null && g(e, !!l, n, !0);
        return;
      case "textarea":
        fe("invalid", e), r = a = l = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (f = n[u], f != null))
            switch (u) {
              case "value":
                l = f;
                break;
              case "defaultValue":
                a = f;
                break;
              case "children":
                r = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(c(91));
                break;
              default:
                Ne(e, t, u, f, n, null);
            }
        j(e, l, a, r);
        return;
      case "option":
        for (p in n)
          if (n.hasOwnProperty(p) && (l = n[p], l != null))
            switch (p) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ne(e, t, p, l, n, null);
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
        for (l = 0; l < ti.length; l++)
          fe(ti[l], e);
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
        for (w in n)
          if (n.hasOwnProperty(w) && (l = n[w], l != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ne(e, t, w, l, n, null);
            }
        return;
      default:
        if (lt(t)) {
          for (z in n)
            n.hasOwnProperty(z) && (l = n[z], l !== void 0 && Ls(
              e,
              t,
              z,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (f in n)
      n.hasOwnProperty(f) && (l = n[f], l != null && Ne(e, t, f, l, n, null));
  }
  function Pg(e, t, n, l) {
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
        var a = null, r = null, u = null, f = null, p = null, w = null, z = null;
        for (E in n) {
          var C = n[E];
          if (n.hasOwnProperty(E) && C != null)
            switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                p = C;
              default:
                l.hasOwnProperty(E) || Ne(e, t, E, null, l, C);
            }
        }
        for (var k in l) {
          var E = l[k];
          if (C = n[k], l.hasOwnProperty(k) && (E != null || C != null))
            switch (k) {
              case "type":
                r = E;
                break;
              case "name":
                a = E;
                break;
              case "checked":
                w = E;
                break;
              case "defaultChecked":
                z = E;
                break;
              case "value":
                u = E;
                break;
              case "defaultValue":
                f = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(c(137, t));
                break;
              default:
                E !== C && Ne(
                  e,
                  t,
                  k,
                  E,
                  l,
                  C
                );
            }
        }
        ml(
          e,
          u,
          f,
          p,
          w,
          z,
          r,
          a
        );
        return;
      case "select":
        E = u = f = k = null;
        for (r in n)
          if (p = n[r], n.hasOwnProperty(r) && p != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                E = p;
              default:
                l.hasOwnProperty(r) || Ne(
                  e,
                  t,
                  r,
                  null,
                  l,
                  p
                );
            }
        for (a in l)
          if (r = l[a], p = n[a], l.hasOwnProperty(a) && (r != null || p != null))
            switch (a) {
              case "value":
                k = r;
                break;
              case "defaultValue":
                f = r;
                break;
              case "multiple":
                u = r;
              default:
                r !== p && Ne(
                  e,
                  t,
                  a,
                  r,
                  l,
                  p
                );
            }
        t = f, n = u, l = E, k != null ? g(e, !!n, k, !1) : !!l != !!n && (t != null ? g(e, !!n, t, !0) : g(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        E = k = null;
        for (f in n)
          if (a = n[f], n.hasOwnProperty(f) && a != null && !l.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ne(e, t, f, null, l, a);
            }
        for (u in l)
          if (a = l[u], r = n[u], l.hasOwnProperty(u) && (a != null || r != null))
            switch (u) {
              case "value":
                k = a;
                break;
              case "defaultValue":
                E = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(c(91));
                break;
              default:
                a !== r && Ne(e, t, u, a, l, r);
            }
        _(e, k, E);
        return;
      case "option":
        for (var F in n)
          if (k = n[F], n.hasOwnProperty(F) && k != null && !l.hasOwnProperty(F))
            switch (F) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ne(
                  e,
                  t,
                  F,
                  null,
                  l,
                  k
                );
            }
        for (p in l)
          if (k = l[p], E = n[p], l.hasOwnProperty(p) && k !== E && (k != null || E != null))
            switch (p) {
              case "selected":
                e.selected = k && typeof k != "function" && typeof k != "symbol";
                break;
              default:
                Ne(
                  e,
                  t,
                  p,
                  k,
                  l,
                  E
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
        for (var J in n)
          k = n[J], n.hasOwnProperty(J) && k != null && !l.hasOwnProperty(J) && Ne(e, t, J, null, l, k);
        for (w in l)
          if (k = l[w], E = n[w], l.hasOwnProperty(w) && k !== E && (k != null || E != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null)
                  throw Error(c(137, t));
                break;
              default:
                Ne(
                  e,
                  t,
                  w,
                  k,
                  l,
                  E
                );
            }
        return;
      default:
        if (lt(t)) {
          for (var Oe in n)
            k = n[Oe], n.hasOwnProperty(Oe) && k !== void 0 && !l.hasOwnProperty(Oe) && Ls(
              e,
              t,
              Oe,
              void 0,
              l,
              k
            );
          for (z in l)
            k = l[z], E = n[z], !l.hasOwnProperty(z) || k === E || k === void 0 && E === void 0 || Ls(
              e,
              t,
              z,
              k,
              l,
              E
            );
          return;
        }
    }
    for (var v in n)
      k = n[v], n.hasOwnProperty(v) && k != null && !l.hasOwnProperty(v) && Ne(e, t, v, null, l, k);
    for (C in l)
      k = l[C], E = n[C], !l.hasOwnProperty(C) || k === E || k == null && E == null || Ne(e, t, C, k, l, E);
  }
  function Op(e) {
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
  function Zg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], r = a.transferSize, u = a.initiatorType, f = a.duration;
        if (r && f && Op(u)) {
          for (u = 0, f = a.responseEnd, l += 1; l < n.length; l++) {
            var p = n[l], w = p.startTime;
            if (w > f) break;
            var z = p.transferSize, C = p.initiatorType;
            z && Op(C) && (p = p.responseEnd, u += z * (p < f ? 1 : (f - w) / (p - w)));
          }
          if (--l, t += 8 * (r + u) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Us = null, js = null;
  function So(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Cp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Dp(e, t) {
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
  function Hs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Bs = null;
  function Wg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Bs ? !1 : (Bs = e, !0) : (Bs = null, !1);
  }
  var Rp = typeof setTimeout == "function" ? setTimeout : void 0, Jg = typeof clearTimeout == "function" ? clearTimeout : void 0, Mp = typeof Promise == "function" ? Promise : void 0, ey = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mp < "u" ? function(e) {
    return Mp.resolve(null).then(e).catch(ty);
  } : Rp;
  function ty(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Dl(e) {
    return e === "head";
  }
  function Lp(e, t) {
    var n = t, l = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8)
        if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(a), or(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          li(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, li(n);
          for (var r = n.firstChild; r; ) {
            var u = r.nextSibling, f = r.nodeName;
            r[Jl] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && r.rel.toLowerCase() === "stylesheet" || n.removeChild(r), r = u;
          }
        } else
          n === "body" && li(e.ownerDocument.body);
      n = a;
    } while (n);
    or(t);
  }
  function Up(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = l;
    } while (n);
  }
  function qs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          qs(n), vr(n);
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
  function ny(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Jl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (r = e.getAttribute("rel"), r === "stylesheet" && e.hasAttribute("data-precedence") || r !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (r = e.getAttribute("src"), (r !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && r && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var r = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === r)
          return e;
      } else return e;
      if (e = tn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function ly(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = tn(e.nextSibling), e === null)) return null;
    return e;
  }
  function jp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = tn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Gs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Vs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function ay(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function tn(e) {
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
  var Ys = null;
  function Hp(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return tn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Bp(e) {
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
  function qp(e, t, n) {
    switch (t = So(n), e) {
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
  function li(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    vr(e);
  }
  var nn = /* @__PURE__ */ new Map(), Gp = /* @__PURE__ */ new Set();
  function wo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Jn = H.d;
  H.d = {
    f: ry,
    r: iy,
    D: oy,
    C: uy,
    L: sy,
    m: cy,
    X: dy,
    S: fy,
    M: py
  };
  function ry() {
    var e = Jn.f(), t = fo();
    return e || t;
  }
  function iy(e) {
    var t = dl(e);
    t !== null && t.tag === 5 && t.type === "form" ? ad(t) : Jn.r(e);
  }
  var ar = typeof document > "u" ? null : document;
  function Vp(e, t, n) {
    var l = ar;
    if (l && typeof t == "string" && t) {
      var a = Tt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Gp.has(a) || (Gp.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), ct(t, "link", e), Me(t), l.head.appendChild(t)));
    }
  }
  function oy(e) {
    Jn.D(e), Vp("dns-prefetch", e, null);
  }
  function uy(e, t) {
    Jn.C(e, t), Vp("preconnect", e, t);
  }
  function sy(e, t, n) {
    Jn.L(e, t, n);
    var l = ar;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + Tt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + Tt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + Tt(
        n.imageSizes
      ) + '"]')) : a += '[href="' + Tt(e) + '"]';
      var r = a;
      switch (t) {
        case "style":
          r = rr(e);
          break;
        case "script":
          r = ir(e);
      }
      nn.has(r) || (e = D(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), nn.set(r, e), l.querySelector(a) !== null || t === "style" && l.querySelector(ai(r)) || t === "script" && l.querySelector(ri(r)) || (t = l.createElement("link"), ct(t, "link", e), Me(t), l.head.appendChild(t)));
    }
  }
  function cy(e, t) {
    Jn.m(e, t);
    var n = ar;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Tt(l) + '"][href="' + Tt(e) + '"]', r = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = ir(e);
      }
      if (!nn.has(r) && (e = D({ rel: "modulepreload", href: e }, t), nn.set(r, e), n.querySelector(a) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ri(r)))
              return;
        }
        l = n.createElement("link"), ct(l, "link", e), Me(l), n.head.appendChild(l);
      }
    }
  }
  function fy(e, t, n) {
    Jn.S(e, t, n);
    var l = ar;
    if (l && e) {
      var a = Un(l).hoistableStyles, r = rr(e);
      t = t || "default";
      var u = a.get(r);
      if (!u) {
        var f = { loading: 0, preload: null };
        if (u = l.querySelector(
          ai(r)
        ))
          f.loading = 5;
        else {
          e = D(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = nn.get(r)) && Fs(e, n);
          var p = u = l.createElement("link");
          Me(p), ct(p, "link", e), p._p = new Promise(function(w, z) {
            p.onload = w, p.onerror = z;
          }), p.addEventListener("load", function() {
            f.loading |= 1;
          }), p.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, To(u, t, l);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: f
        }, a.set(r, u);
      }
    }
  }
  function dy(e, t) {
    Jn.X(e, t);
    var n = ar;
    if (n && e) {
      var l = Un(n).hoistableScripts, a = ir(e), r = l.get(a);
      r || (r = n.querySelector(ri(a)), r || (e = D({ src: e, async: !0 }, t), (t = nn.get(a)) && Xs(e, t), r = n.createElement("script"), Me(r), ct(r, "link", e), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, l.set(a, r));
    }
  }
  function py(e, t) {
    Jn.M(e, t);
    var n = ar;
    if (n && e) {
      var l = Un(n).hoistableScripts, a = ir(e), r = l.get(a);
      r || (r = n.querySelector(ri(a)), r || (e = D({ src: e, async: !0, type: "module" }, t), (t = nn.get(a)) && Xs(e, t), r = n.createElement("script"), Me(r), ct(r, "link", e), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, l.set(a, r));
    }
  }
  function Yp(e, t, n, l) {
    var a = (a = tt.current) ? wo(a) : null;
    if (!a) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = rr(n.href), n = Un(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = rr(n.href);
          var r = Un(
            a
          ).hoistableStyles, u = r.get(e);
          if (u || (a = a.ownerDocument || a, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(e, u), (r = a.querySelector(
            ai(e)
          )) && !r._p && (u.instance = r, u.state.loading = 5), nn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, nn.set(e, n), r || my(
            a,
            e,
            n,
            u.state
          ))), t && l === null)
            throw Error(c(528, ""));
          return u;
        }
        if (t && l !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ir(n), n = Un(
          a
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, e));
    }
  }
  function rr(e) {
    return 'href="' + Tt(e) + '"';
  }
  function ai(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Fp(e) {
    return D({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function my(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ct(t, "link", n), Me(t), e.head.appendChild(t));
  }
  function ir(e) {
    return '[src="' + Tt(e) + '"]';
  }
  function ri(e) {
    return "script[async]" + e;
  }
  function Xp(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Tt(n.href) + '"]'
          );
          if (l)
            return t.instance = l, Me(l), l;
          var a = D({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Me(l), ct(l, "style", a), To(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = rr(n.href);
          var r = e.querySelector(
            ai(a)
          );
          if (r)
            return t.state.loading |= 4, t.instance = r, Me(r), r;
          l = Fp(n), (a = nn.get(a)) && Fs(l, a), r = (e.ownerDocument || e).createElement("link"), Me(r);
          var u = r;
          return u._p = new Promise(function(f, p) {
            u.onload = f, u.onerror = p;
          }), ct(r, "link", l), t.state.loading |= 4, To(r, n.precedence, e), t.instance = r;
        case "script":
          return r = ir(n.src), (a = e.querySelector(
            ri(r)
          )) ? (t.instance = a, Me(a), a) : (l = n, (a = nn.get(r)) && (l = D({}, n), Xs(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Me(a), ct(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, To(l, n.precedence, e));
    return t.instance;
  }
  function To(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, r = a, u = 0; u < l.length; u++) {
      var f = l[u];
      if (f.dataset.precedence === t) r = f;
      else if (r !== a) break;
    }
    r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Fs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Xs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ko = null;
  function Qp(e, t, n) {
    if (ko === null) {
      var l = /* @__PURE__ */ new Map(), a = ko = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = ko, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var r = n[a];
      if (!(r[Jl] || r[oe] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = r.getAttribute(t) || "";
        u = e + u;
        var f = l.get(u);
        f ? f.push(r) : l.set(u, [r]);
      }
    }
    return l;
  }
  function $p(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function hy(e, t, n) {
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
  function Ip(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function gy(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = rr(l.href), r = t.querySelector(
          ai(a)
        );
        if (r) {
          t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Eo.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = r, Me(r);
          return;
        }
        r = t.ownerDocument || t, l = Fp(l), (a = nn.get(a)) && Fs(l, a), r = r.createElement("link"), Me(r);
        var u = r;
        u._p = new Promise(function(f, p) {
          u.onload = f, u.onerror = p;
        }), ct(r, "link", l), n.instance = r;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Eo.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Qs = 0;
  function yy(e, t) {
    return e.stylesheets && e.count === 0 && Ao(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ao(e, e.stylesheets), e.unsuspend) {
          var r = e.unsuspend;
          e.unsuspend = null, r();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Qs === 0 && (Qs = 62500 * Zg());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ao(e, e.stylesheets), e.unsuspend)) {
            var r = e.unsuspend;
            e.unsuspend = null, r();
          }
        },
        (e.imgBytes > Qs ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function Eo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ao(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var xo = null;
  function Ao(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, xo = /* @__PURE__ */ new Map(), t.forEach(by, e), xo = null, Eo.call(e));
  }
  function by(e, t) {
    if (!(t.state.loading & 4)) {
      var n = xo.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), xo.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < a.length; r++) {
          var u = a[r];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (n.set(u.dataset.precedence, u), l = u);
        }
        l && n.set(null, l);
      }
      a = t.instance, u = a.getAttribute("data-precedence"), r = n.get(u) || l, r === l && n.set(null, a), n.set(u, a), this.count++, l = Eo.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), r ? r.parentNode.insertBefore(a, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ii = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0
  };
  function vy(e, t, n, l, a, r, u, f, p) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Zl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.hiddenUpdates = Zl(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = r, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kp(e, t, n, l, a, r, u, f, p, w, z, C) {
    return e = new vy(
      e,
      t,
      n,
      u,
      p,
      w,
      z,
      C,
      f
    ), t = 1, r === !0 && (t |= 24), r = Bt(3, null, null, t), e.current = r, r.stateNode = e, t = xu(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Nu(r), e;
  }
  function Pp(e) {
    return e ? (e = ja, e) : ja;
  }
  function Zp(e, t, n, l, a, r) {
    a = Pp(a), l.context === null ? l.context = a : l.pendingContext = a, l = wl(t), l.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (l.callback = r), n = Tl(e, l, t), n !== null && (Rt(n, e, t), Hr(n, e, t));
  }
  function Wp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function $s(e, t) {
    Wp(e, t), (e = e.alternate) && Wp(e, t);
  }
  function Jp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = aa(e, 67108864);
      t !== null && Rt(t, e, 67108864), $s(e, 67108864);
    }
  }
  function em(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ft();
      t = Wl(t);
      var n = aa(e, t);
      n !== null && Rt(n, e, t), $s(e, t);
    }
  }
  var _o = !0;
  function Sy(e, t, n, l) {
    var a = R.T;
    R.T = null;
    var r = H.p;
    try {
      H.p = 2, Is(e, t, n, l);
    } finally {
      H.p = r, R.T = a;
    }
  }
  function wy(e, t, n, l) {
    var a = R.T;
    R.T = null;
    var r = H.p;
    try {
      H.p = 8, Is(e, t, n, l);
    } finally {
      H.p = r, R.T = a;
    }
  }
  function Is(e, t, n, l) {
    if (_o) {
      var a = Ks(l);
      if (a === null)
        Ms(
          e,
          t,
          l,
          zo,
          n
        ), nm(e, l);
      else if (ky(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (nm(e, l), t & 4 && -1 < Ty.indexOf(e)) {
        for (; a !== null; ) {
          var r = dl(a);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var u = vn(r.pendingLanes);
                  if (u !== 0) {
                    var f = r;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; u; ) {
                      var p = 1 << 31 - rt(u);
                      f.entanglements[1] |= p, u &= ~p;
                    }
                    _n(r), (Te & 6) === 0 && (so = Ye() + 500, ei(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = aa(r, 2), f !== null && Rt(f, r, 2), fo(), $s(r, 2);
            }
          if (r = Ks(l), r === null && Ms(
            e,
            t,
            l,
            zo,
            n
          ), r === a) break;
          a = r;
        }
        a !== null && l.stopPropagation();
      } else
        Ms(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function Ks(e) {
    return e = Zo(e), Ps(e);
  }
  var zo = null;
  function Ps(e) {
    if (zo = null, e = fl(e), e !== null) {
      var t = T(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = A(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = x(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return zo = e, null;
  }
  function tm(e) {
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
        switch (dr()) {
          case Ta:
            return 2;
          case ka:
            return 8;
          case al:
          case rl:
            return 32;
          case Il:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zs = !1, Rl = null, Ml = null, Ll = null, oi = /* @__PURE__ */ new Map(), ui = /* @__PURE__ */ new Map(), Ul = [], Ty = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function nm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Rl = null;
        break;
      case "dragenter":
      case "dragleave":
        Ml = null;
        break;
      case "mouseover":
      case "mouseout":
        Ll = null;
        break;
      case "pointerover":
      case "pointerout":
        oi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ui.delete(t.pointerId);
    }
  }
  function si(e, t, n, l, a, r) {
    return e === null || e.nativeEvent !== r ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: r,
      targetContainers: [a]
    }, t !== null && (t = dl(t), t !== null && Jp(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function ky(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return Rl = si(
          Rl,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return Ml = si(
          Ml,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return Ll = si(
          Ll,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "pointerover":
        var r = a.pointerId;
        return oi.set(
          r,
          si(
            oi.get(r) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
      case "gotpointercapture":
        return r = a.pointerId, ui.set(
          r,
          si(
            ui.get(r) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
    }
    return !1;
  }
  function lm(e) {
    var t = fl(e.target);
    if (t !== null) {
      var n = T(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = A(n), t !== null) {
            e.blockedOn = t, Si(e.priority, function() {
              em(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = x(n), t !== null) {
            e.blockedOn = t, Si(e.priority, function() {
              em(n);
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
  function No(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ks(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Po = l, n.target.dispatchEvent(l), Po = null;
      } else
        return t = dl(n), t !== null && Jp(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function am(e, t, n) {
    No(e) && n.delete(t);
  }
  function Ey() {
    Zs = !1, Rl !== null && No(Rl) && (Rl = null), Ml !== null && No(Ml) && (Ml = null), Ll !== null && No(Ll) && (Ll = null), oi.forEach(am), ui.forEach(am);
  }
  function Oo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zs || (Zs = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      Ey
    )));
  }
  var Co = null;
  function rm(e) {
    Co !== e && (Co = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Co === e && (Co = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (Ps(l || n) === null)
              continue;
            break;
          }
          var r = dl(n);
          r !== null && (e.splice(t, 3), t -= 3, Ku(
            r,
            {
              pending: !0,
              data: a,
              method: n.method,
              action: l
            },
            l,
            a
          ));
        }
      }
    ));
  }
  function or(e) {
    function t(p) {
      return Oo(p, e);
    }
    Rl !== null && Oo(Rl, e), Ml !== null && Oo(Ml, e), Ll !== null && Oo(Ll, e), oi.forEach(t), ui.forEach(t);
    for (var n = 0; n < Ul.length; n++) {
      var l = Ul[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Ul.length && (n = Ul[0], n.blockedOn === null); )
      lm(n), n.blockedOn === null && Ul.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], r = n[l + 1], u = a[Fe] || null;
        if (typeof r == "function")
          u || rm(n);
        else if (u) {
          var f = null;
          if (r && r.hasAttribute("formAction")) {
            if (a = r, u = r[Fe] || null)
              f = u.formAction;
            else if (Ps(a) !== null) continue;
          } else f = u.action;
          typeof f == "function" ? n[l + 1] = f : (n.splice(l, 3), l -= 3), rm(n);
        }
      }
  }
  function im() {
    function e(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(u) {
            return a = u;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      a !== null && (a(), a = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, a = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
      };
    }
  }
  function Ws(e) {
    this._internalRoot = e;
  }
  Do.prototype.render = Ws.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, l = Ft();
    Zp(n, l, e, t, null, null);
  }, Do.prototype.unmount = Ws.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Zp(e.current, 2, null, e, null, null), fo(), t[cl] = null;
    }
  };
  function Do(e) {
    this._internalRoot = e;
  }
  Do.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = sl();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ul.length && t !== 0 && t < Ul[n].priority; n++) ;
      Ul.splice(n, 0, e), n === 0 && lm(e);
    }
  };
  var om = s.version;
  if (om !== "19.2.6")
    throw Error(
      c(
        527,
        om,
        "19.2.6"
      )
    );
  H.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = L(t), e = e !== null ? M(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var xy = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ro.isDisabled && Ro.supportsFiber)
      try {
        il = Ro.inject(
          xy
        ), pt = Ro;
      } catch {
      }
  }
  return ym.createRoot = function(e, t) {
    if (!h(e)) throw Error(c(299));
    var n = !1, l = "", a = md, r = hd, u = gd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Kp(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      a,
      r,
      u,
      im
    ), e[cl] = t.current, Rs(e), new Ws(t);
  }, ym.hydrateRoot = function(e, t, n) {
    if (!h(e)) throw Error(c(299));
    var l = !1, a = "", r = md, u = hd, f = gd, p = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (p = n.formState)), t = Kp(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      p,
      r,
      u,
      f,
      im
    ), t.context = Pp(null), n = t.current, l = Ft(), l = Wl(l), a = wl(l), a.callback = null, Tl(n, a, l), n = l, t.current.lanes = n, Ln(t, n), _n(t), e[cl] = t.current, Rs(e), new Do(t);
  }, ym.version = "19.2.6", ym;
}
var gv;
function e3() {
  if (gv) return n0.exports;
  gv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), n0.exports = JE(), n0.exports;
}
e3();
(function() {
  var i = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width:1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width:576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.gray-dark-bg .glide__bullet:focus{background-color:#ffc627}.glide.gray-dark-bg .glide__bullet:hover{border:1px solid #ffc627;background-color:#333}.glide.gray-dark-bg .glide__bullet--active{background-color:#ffc627}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width:576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width:1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.gray-dark-bg button:focus,.glide.gray-dark-bg a:focus,.glide.gray-dark-bg input:focus,.glide.gray-dark-bg textarea:focus,.glide.gray-dark-bg select:focus{box-shadow:0 0 0 3px #333,0 0 0 5px #ffc627!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, o = document.createElement("style");
  o.type = "text/css", o.styleSheet ? o.styleSheet.cssText = i : o.appendChild(document.createTextNode(i)), document.head.appendChild(o);
})();
const yv = {
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
}, bv = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], vv = (i) => i.toLowerCase().split(" ").join("_"), t3 = (i, o) => {
  if (!o) return !0;
  const s = o.split(",");
  for (let d = 0; d < s.length; d += 1) {
    const c = vv(s[d]);
    for (let h = 0; h < bv.length; h += 1) {
      const T = bv[h];
      if (vv(i[T] || "").includes(c)) return !0;
    }
  }
  return !1;
}, n3 = (i) => ({
  id: i.node.nid,
  title: i.node.title,
  imageUrl: i.node.image_url,
  location: (i.node.campus || "").trim(),
  interests: i.node.interests,
  startDate: i.node.very_start_date,
  endDate: i.node.very_end_date,
  alias: i.node.alias,
  // Also used for card link in title of card
  audiences: i.node.audiences,
  eventUnits: i.node.event_units,
  eventTopics: i.node.event_topics,
  eventTypes: i.node.event_types,
  collegeUnit: i.node.college_unit,
  eventButtonUrl: i.node.ticketing_rsvp_url,
  eventButtonText: i.node.ticketing_rsvp_txt
}), Sv = "No events to show.", F0 = ({
  children: i,
  header: o,
  ctaButton: s,
  dataSource: d,
  maxItems: c,
  noFeedText: h = Sv
}) => (
  // Calling the unity-react-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the unity-react-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ Vl.jsx(
    V1,
    {
      renderHeader: o && s ? /* @__PURE__ */ Vl.jsx(
        F1,
        {
          header: o,
          ctaButton: s,
          defaultProps: yv
        }
      ) : null,
      renderBody: /* @__PURE__ */ Vl.jsx(X1, { children: i }),
      dataTransformer: n3,
      dataFilter: t3,
      dataSource: d,
      defaultProps: yv,
      noFeedText: h.trim() ? h : Sv,
      maxItems: c
    }
  )
);
F0.propTypes = {
  header: V0,
  ctaButton: Y0,
  dataSource: Y1,
  maxItems: kt.number,
  noFeedText: kt.string,
  children: kt.element
};
const l3 = kt.shape({
  color: kt.oneOf(["white", "dark"]),
  text: kt.string
}), a3 = kt.shape({
  color: kt.oneOf(["gold", "maroon", "gray", "dark"]),
  text: kt.string,
  url: kt.string
}), r3 = kt.shape({
  url: kt.string.isRequired,
  filters: kt.string
}).isRequired, Q1 = {
  header: l3,
  ctaButton: a3,
  dataSource: r3,
  maxItems: kt.number,
  noFeedText: kt.string
}, i3 = (i) => i.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), wv = (i) => i.toLocaleString("en-US", {
  timeZone: "UTC"
}), x0 = (i) => {
  let o = i.split("T");
  return o = o.length > 1 ? o.join("T") : `${o[0].split(":")[0]}T00:00:00Z`, o;
}, Tv = (i) => {
  let o = i.getHours(), s = i.getMinutes();
  const d = o >= 12 ? "p.m." : "a.m.";
  return o %= 12, o = o || 12, s = s < 10 ? `0${s}` : s, `${o}:${s} ${d}`;
}, $1 = (i, o) => {
  const s = x0(i);
  let d = wv(new Date(s));
  if (d = Tv(new Date(d)), !o || i === o)
    return d;
  const c = x0(o);
  let h = wv(new Date(c));
  return h = Tv(new Date(h)), `${d} to ${h}`;
}, uh = (i, o) => {
  const s = x0(i);
  return {
    ISO: s.split("T")[0],
    COMPLETE: i3(new Date(s))
  }[o];
};
function o3(i) {
  var o = /* @__PURE__ */ Object.create(null);
  return function(s) {
    return o[s] === void 0 && (o[s] = i(s)), o[s];
  };
}
var u3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, s3 = /* @__PURE__ */ o3(
  function(i) {
    return u3.test(i) || i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && i.charCodeAt(2) < 91;
  }
  /* Z+1 */
), an = "-ms-", zm = "-moz-", wt = "-webkit-", I1 = "comm", bh = "rule", X0 = "decl", c3 = "@import", f3 = "@namespace", K1 = "@keyframes", d3 = "@layer", P1 = Math.abs, Q0 = String.fromCharCode, A0 = Object.assign;
function p3(i, o) {
  return tl(i, 0) ^ 45 ? (((o << 2 ^ tl(i, 0)) << 2 ^ tl(i, 1)) << 2 ^ tl(i, 2)) << 2 ^ tl(i, 3) : 0;
}
function Z1(i) {
  return i.trim();
}
function Lo(i, o) {
  return (i = o.exec(i)) ? i[0] : i;
}
function Je(i, o, s) {
  return i.replace(o, s);
}
function Wm(i, o, s) {
  return i.indexOf(o, s);
}
function tl(i, o) {
  return i.charCodeAt(o) | 0;
}
function fc(i, o, s) {
  return i.slice(o, s);
}
function fi(i) {
  return i.length;
}
function W1(i) {
  return i.length;
}
function Em(i, o) {
  return o.push(i), i;
}
function m3(i, o) {
  return i.map(o).join("");
}
function kv(i, o) {
  return i.filter(function(s) {
    return !Lo(s, o);
  });
}
var vh = 1, xc = 1, J1 = 0, sr = 0, Nn = 0, zc = "";
function Sh(i, o, s, d, c, h, T, A) {
  return { value: i, root: o, parent: s, type: d, props: c, children: h, line: vh, column: xc, length: T, return: "", siblings: A };
}
function qo(i, o) {
  return A0(Sh("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, o);
}
function vc(i) {
  for (; i.root; )
    i = qo(i.root, { children: [i] });
  Em(i, i.siblings);
}
function h3() {
  return Nn;
}
function g3() {
  return Nn = sr > 0 ? tl(zc, --sr) : 0, xc--, Nn === 10 && (xc = 1, vh--), Nn;
}
function pi() {
  return Nn = sr < J1 ? tl(zc, sr++) : 0, xc++, Nn === 10 && (xc = 1, vh++), Nn;
}
function Qo() {
  return tl(zc, sr);
}
function Jm() {
  return sr;
}
function wh(i, o) {
  return fc(zc, i, o);
}
function Cm(i) {
  switch (i) {
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
function y3(i) {
  return vh = xc = 1, J1 = fi(zc = i), sr = 0, [];
}
function b3(i) {
  return zc = "", i;
}
function l0(i) {
  return Z1(wh(sr - 1, _0(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function v3(i) {
  for (; (Nn = Qo()) && Nn < 33; )
    pi();
  return Cm(i) > 2 || Cm(Nn) > 3 ? "" : " ";
}
function S3(i, o) {
  for (; --o && pi() && !(Nn < 48 || Nn > 102 || Nn > 57 && Nn < 65 || Nn > 70 && Nn < 97); )
    ;
  return wh(i, Jm() + (o < 6 && Qo() == 32 && pi() == 32));
}
function _0(i) {
  for (; pi(); )
    switch (Nn) {
      // ] ) " '
      case i:
        return sr;
      // " '
      case 34:
      case 39:
        i !== 34 && i !== 39 && _0(Nn);
        break;
      // (
      case 40:
        i === 41 && _0(i);
        break;
      // \
      case 92:
        pi();
        break;
    }
  return sr;
}
function w3(i, o) {
  for (; pi() && i + Nn !== 57; )
    if (i + Nn === 84 && Qo() === 47)
      break;
  return "/*" + wh(o, sr - 1) + "*" + Q0(i === 47 ? i : pi());
}
function T3(i) {
  for (; !Cm(Qo()); )
    pi();
  return wh(i, sr);
}
function k3(i) {
  return b3(eh("", null, null, null, [""], i = y3(i), 0, [0], i));
}
function eh(i, o, s, d, c, h, T, A, x) {
  for (var O = 0, L = 0, M = T, D = 0, te = 0, q = 0, X = 1, W = 1, ee = 1, B = 0, be = "", P = c, ne = h, G = d, V = be; W; )
    switch (q = B, B = pi()) {
      // (
      case 40:
        if (q != 108 && tl(V, M - 1) == 58) {
          Wm(V += Je(l0(B), "&", "&\f"), "&\f", P1(O ? A[O - 1] : 0)) != -1 && (ee = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        V += l0(B);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        V += v3(q);
        break;
      // \
      case 92:
        V += S3(Jm() - 1, 7);
        continue;
      // /
      case 47:
        switch (Qo()) {
          case 42:
          case 47:
            Em(E3(w3(pi(), Jm()), o, s, x), x), (Cm(q || 1) == 5 || Cm(Qo() || 1) == 5) && fi(V) && fc(V, -1, void 0) !== " " && (V += " ");
            break;
          default:
            V += "/";
        }
        break;
      // {
      case 123 * X:
        A[O++] = fi(V) * ee;
      // } ; \0
      case 125 * X:
      case 59:
      case 0:
        switch (B) {
          // \0 }
          case 0:
          case 125:
            W = 0;
          // ;
          case 59 + L:
            ee == -1 && (V = Je(V, /\f/g, "")), te > 0 && (fi(V) - M || X === 0 && q === 47) && Em(te > 32 ? xv(V + ";", d, s, M - 1, x) : xv(Je(V, " ", "") + ";", d, s, M - 2, x), x);
            break;
          // @ ;
          case 59:
            V += ";";
          // { rule/at-rule
          default:
            if (Em(G = Ev(V, o, s, O, L, c, A, be, P = [], ne = [], M, h), h), B === 123)
              if (L === 0)
                eh(V, o, G, G, P, h, M, A, ne);
              else {
                switch (D) {
                  // c(ontainer)
                  case 99:
                    if (tl(V, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (tl(V, 2) === 97) break;
                  default:
                    L = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                L ? eh(i, G, G, d && Em(Ev(i, G, G, 0, 0, c, A, be, c, P = [], M, ne), ne), c, ne, M, A, d ? P : ne) : eh(V, G, G, G, [""], ne, 0, A, ne);
              }
        }
        O = L = te = 0, X = ee = 1, be = V = "", M = T;
        break;
      // :
      case 58:
        M = 1 + fi(V), te = q;
      default:
        if (X < 1) {
          if (B == 123)
            --X;
          else if (B == 125 && X++ == 0 && g3() == 125)
            continue;
        }
        switch (V += Q0(B), B * X) {
          // &
          case 38:
            ee = L > 0 ? 1 : (V += "\f", -1);
            break;
          // ,
          case 44:
            A[O++] = (fi(V) - 1) * ee, ee = 1;
            break;
          // @
          case 64:
            Qo() === 45 && (V += l0(pi())), D = Qo(), L = M = fi(be = V += T3(Jm())), B++;
            break;
          // -
          case 45:
            q === 45 && fi(V) == 2 && (X = 0);
        }
    }
  return h;
}
function Ev(i, o, s, d, c, h, T, A, x, O, L, M) {
  for (var D = c - 1, te = c === 0 ? h : [""], q = W1(te), X = 0, W = 0, ee = 0; X < d; ++X)
    for (var B = 0, be = fc(i, D + 1, D = P1(W = T[X])), P = i; B < q; ++B)
      (P = Z1(W > 0 ? te[B] + " " + be : Je(be, /&\f/g, te[B]))) && (x[ee++] = P);
  return Sh(i, o, s, c === 0 ? bh : A, x, O, L, M);
}
function E3(i, o, s, d) {
  return Sh(i, o, s, I1, Q0(h3()), fc(i, 2, -2), 0, d);
}
function xv(i, o, s, d, c) {
  return Sh(i, o, s, X0, fc(i, 0, d), fc(i, d + 1, -1), d, c);
}
function eS(i, o, s) {
  switch (p3(i, o)) {
    // color-adjust
    case 5103:
      return wt + "print-" + i + i;
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
      return wt + i + i;
    // mask-composite
    case 4855:
      return wt + i.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + i;
    // tab-size
    case 4789:
      return zm + i + i;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return wt + i + zm + i + an + i + i;
    // writing-mode
    case 5936:
      switch (tl(i, o + 11)) {
        // vertical-l(r)
        case 114:
          return wt + i + an + Je(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        // vertical-r(l)
        case 108:
          return wt + i + an + Je(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        // horizontal(-)tb
        case 45:
          return wt + i + an + Je(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return wt + i + an + i + i;
    // order
    case 6165:
      return wt + i + an + "flex-" + i + i;
    // align-items
    case 5187:
      return wt + i + Je(i, /(\w+).+(:[^]+)/, wt + "box-$1$2" + an + "flex-$1$2") + i;
    // align-self
    case 5443:
      return wt + i + an + "flex-item-" + Je(i, /flex-|-self/g, "") + (Lo(i, /flex-|baseline/) ? "" : an + "grid-row-" + Je(i, /flex-|-self/g, "")) + i;
    // align-content
    case 4675:
      return wt + i + an + "flex-line-pack" + Je(i, /align-content|flex-|-self/g, "") + i;
    // flex-shrink
    case 5548:
      return wt + i + an + Je(i, "shrink", "negative") + i;
    // flex-basis
    case 5292:
      return wt + i + an + Je(i, "basis", "preferred-size") + i;
    // flex-grow
    case 6060:
      return wt + "box-" + Je(i, "-grow", "") + wt + i + an + Je(i, "grow", "positive") + i;
    // transition
    case 4554:
      return wt + Je(i, /([^-])(transform)/g, "$1" + wt + "$2") + i;
    // cursor
    case 6187:
      return Je(Je(Je(i, /(zoom-|grab)/, wt + "$1"), /(image-set)/, wt + "$1"), i, "") + i;
    // background, background-image
    case 5495:
    case 3959:
      return Je(i, /(image-set\([^]*)/, wt + "$1$`$1");
    // justify-content
    case 4968:
      return Je(Je(i, /(.+:)(flex-)?(.*)/, wt + "box-pack:$3" + an + "flex-pack:$3"), /space-between/, "justify") + wt + i + i;
    // justify-self
    case 4200:
      if (!Lo(i, /flex-|baseline/)) return an + "grid-column-align" + fc(i, o) + i;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return an + Je(i, "template-", "") + i;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return s && s.some(function(d, c) {
        return o = c, Lo(d.props, /grid-\w+-end/);
      }) ? ~Wm(i + (s = s[o].value), "span", 0) ? i : an + Je(i, "-start", "") + i + an + "grid-row-span:" + (~Wm(s, "span", 0) ? Lo(s, /\d+/) : +Lo(s, /\d+/) - +Lo(i, /\d+/)) + ";" : an + Je(i, "-start", "") + i;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return s && s.some(function(d) {
        return Lo(d.props, /grid-\w+-start/);
      }) ? i : an + Je(Je(i, "-end", "-span"), "span ", "") + i;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Je(i, /(.+)-inline(.+)/, wt + "$1$2") + i;
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
      if (fi(i) - 1 - o > 6)
        switch (tl(i, o + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (tl(i, o + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return Je(i, /(.+:)(.+)-([^]+)/, "$1" + wt + "$2-$3$1" + zm + (tl(i, o + 3) == 108 ? "$3" : "$2-$3")) + i;
          // (s)tretch
          case 115:
            return ~Wm(i, "stretch", 0) ? eS(Je(i, "stretch", "fill-available"), o, s) + i : i;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return Je(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(d, c, h, T, A, x, O) {
        return an + c + ":" + h + O + (T ? an + c + "-span:" + (A ? x : +x - +h) + O : "") + i;
      });
    // position: sticky
    case 4949:
      if (tl(i, o + 6) === 121)
        return Je(i, ":", ":" + wt) + i;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (tl(i, tl(i, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return Je(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + wt + (tl(i, 14) === 45 ? "inline-" : "") + "box$3$1" + wt + "$2$3$1" + an + "$2box$3") + i;
        // (inline-)?gri(d)
        case 100:
          return Je(i, ":", ":" + an) + i;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Je(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function sh(i, o) {
  for (var s = "", d = 0; d < i.length; d++)
    s += o(i[d], d, i, o) || "";
  return s;
}
function x3(i, o, s, d) {
  switch (i.type) {
    case d3:
      if (i.children.length) break;
    case c3:
    case f3:
    case X0:
      return i.return = i.return || i.value;
    case I1:
      return "";
    case K1:
      return i.return = i.value + "{" + sh(i.children, d) + "}";
    case bh:
      if (!fi(i.value = i.props.join(","))) return "";
  }
  return fi(s = sh(i.children, d)) ? i.return = i.value + "{" + s + "}" : "";
}
function A3(i) {
  var o = W1(i);
  return function(s, d, c, h) {
    for (var T = "", A = 0; A < o; A++)
      T += i[A](s, d, c, h) || "";
    return T;
  };
}
function _3(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function z3(i, o, s, d) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case X0:
        i.return = eS(i.value, i.length, s);
        return;
      case K1:
        return sh([qo(i, { value: Je(i.value, "@", "@" + wt) })], d);
      case bh:
        if (i.length)
          return m3(s = i.props, function(c) {
            switch (Lo(c, d = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                vc(qo(i, { props: [Je(c, /:(read-\w+)/, ":" + zm + "$1")] })), vc(qo(i, { props: [c] })), A0(i, { props: kv(s, d) });
                break;
              // :placeholder
              case "::placeholder":
                vc(qo(i, { props: [Je(c, /:(plac\w+)/, ":" + wt + "input-$1")] })), vc(qo(i, { props: [Je(c, /:(plac\w+)/, ":" + zm + "$1")] })), vc(qo(i, { props: [Je(c, /:(plac\w+)/, an + "input-$1")] })), vc(qo(i, { props: [c] })), A0(i, { props: kv(s, d) });
                break;
            }
            return "";
          });
    }
}
var Ut = { env: { NODE_ENV: "production" } }, a0, r0;
const dc = typeof Ut < "u" && Ut.env !== void 0 && (Ut.env.REACT_APP_SC_ATTR || Ut.env.SC_ATTR) || "data-styled", tS = "active", nS = "data-styled-version", Th = "6.4.2", $0 = `/*!sc*/
`, Nm = typeof window < "u" && typeof document < "u";
function Av(i) {
  if (typeof Ut < "u" && Ut.env !== void 0) {
    const o = Ut.env[i];
    if (o !== void 0 && o !== "") return o !== "false";
  }
}
const N3 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (r0 = (a0 = Av("REACT_APP_SC_DISABLE_SPEEDY")) !== null && a0 !== void 0 ? a0 : Av("SC_DISABLE_SPEEDY")) !== null && r0 !== void 0 ? r0 : typeof Ut < "u" && Ut.env !== void 0 && Ut.env.NODE_ENV !== "production"), O3 = "sc-keyframes-", C3 = Ut.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Lm(i, ...o) {
  return Ut.env.NODE_ENV === "production" ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${i} for more information.${o.length > 0 ? ` Args: ${o.join(", ")}` : ""}`) : new Error((function(...s) {
    let d = s[0];
    const c = [];
    for (let h = 1, T = s.length; h < T; h += 1) c.push(s[h]);
    return c.forEach((h) => {
      d = d.replace(/%[a-z]/, h);
    }), d;
  })(C3[i], ...o).trim());
}
const D3 = 1 << 30;
let th = /* @__PURE__ */ new Map(), ch = /* @__PURE__ */ new Map(), nh = 1;
const Vm = (i) => {
  if (th.has(i)) return th.get(i);
  for (; ch.has(nh); ) nh++;
  const o = nh++;
  if (Ut.env.NODE_ENV !== "production" && ((0 | o) < 0 || o > D3)) throw Lm(16, `${o}`);
  return th.set(i, o), ch.set(o, i), o;
}, R3 = (i) => ch.get(i), M3 = (i, o) => {
  nh = o + 1, th.set(i, o), ch.set(o, i);
}, _v = /invalid hook call/i, Ym = /* @__PURE__ */ new Set(), L3 = (i, o) => {
  if (Ut.env.NODE_ENV !== "production") {
    const s = `The component ${i}${o ? ` with the id of "${o}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, d = console.error;
    try {
      let c = !0;
      console.error = (h, ...T) => {
        _v.test(h) ? (c = !1, Ym.delete(s)) : d(h, ...T);
      }, typeof Et.useState == "function" && Et.useState(null), c && !Ym.has(s) && (console.warn(s), Ym.add(s));
    } catch (c) {
      _v.test(c.message) && Ym.delete(s);
    } finally {
      console.error = d;
    }
  }
}, I0 = Object.freeze([]), Ac = Object.freeze({});
function U3(i, o, s = Ac) {
  return i.theme !== s.theme && i.theme || o || s.theme;
}
const j3 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, H3 = /(^-|-$)/g;
function lS(i) {
  return i.replace(j3, "-").replace(H3, "");
}
const B3 = /(a)(d)/gi, zv = (i) => String.fromCharCode(i + (i > 25 ? 39 : 97));
function aS(i) {
  let o, s = "";
  for (o = Math.abs(i); o > 52; o = o / 52 | 0) s = zv(o % 52) + s;
  return (zv(o % 52) + s).replace(B3, "$1-$2");
}
const z0 = 5381, rc = (i, o) => {
  let s = o.length;
  for (; s; ) i = 33 * i ^ o.charCodeAt(--s);
  return i;
}, rS = (i) => rc(z0, i);
function q3(i) {
  return aS(rS(i) >>> 0);
}
function K0(i) {
  return Ut.env.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function lh(i) {
  return typeof i == "string" && (Ut.env.NODE_ENV === "production" || i.charAt(0) === i.charAt(0).toLowerCase());
}
function G3(i) {
  return lh(i) ? `styled.${i}` : `Styled(${K0(i)})`;
}
const iS = Symbol.for("react.memo"), V3 = Symbol.for("react.forward_ref"), Y3 = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, F3 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, oS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, X3 = { [V3]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [iS]: oS };
function Nv(i) {
  return ("type" in (o = i) && o.type.$$typeof) === iS ? oS : "$$typeof" in i ? X3[i.$$typeof] : Y3;
  var o;
}
const Q3 = Object.defineProperty, $3 = Object.getOwnPropertyNames, I3 = Object.getOwnPropertySymbols, K3 = Object.getOwnPropertyDescriptor, P3 = Object.getPrototypeOf, Z3 = Object.prototype;
function uS(i, o, s) {
  if (typeof o != "string") {
    const d = P3(o);
    d && d !== Z3 && uS(i, d, s);
    const c = $3(o).concat(I3(o)), h = Nv(i), T = Nv(o);
    for (let A = 0; A < c.length; ++A) {
      const x = c[A];
      if (!(x in F3 || s && s[x] || T && x in T || h && x in h)) {
        const O = K3(o, x);
        try {
          Q3(i, x, O);
        } catch {
        }
      }
    }
  }
  return i;
}
function kh(i) {
  return typeof i == "function";
}
const W3 = Symbol.for("react.forward_ref");
function sS(i) {
  return i != null && (typeof i == "object" || typeof i == "function") && i.$$typeof === W3 && "styledComponentId" in i;
}
function xm(i, o) {
  return i && o ? i + " " + o : i || o || "";
}
function Ov(i, o) {
  return i.join("");
}
function pc(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function N0(i, o, s = !1) {
  if (!s && !pc(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o)) for (let d = 0; d < o.length; d++) i[d] = N0(i[d], o[d]);
  else if (pc(o)) for (const d in o) i[d] = N0(i[d], o[d]);
  return i;
}
function cS(i, o) {
  Object.defineProperty(i, "toString", { value: o });
}
const J3 = class {
  constructor(i) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = i, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(i) {
    if (i === this._cGroup) return this._cIndex;
    let o = this._cIndex;
    if (i > this._cGroup) for (let s = this._cGroup; s < i; s++) o += this.groupSizes[s];
    else for (let s = this._cGroup - 1; s >= i; s--) o -= this.groupSizes[s];
    return this._cGroup = i, this._cIndex = o, o;
  }
  insertRules(i, o) {
    if (i >= this.groupSizes.length) {
      const c = this.groupSizes, h = c.length;
      let T = h;
      for (; i >= T; ) if (T <<= 1, T < 0) throw Lm(16, `${i}`);
      this.groupSizes = new Uint32Array(T), this.groupSizes.set(c), this.length = T;
      for (let A = h; A < T; A++) this.groupSizes[A] = 0;
    }
    let s = this.indexOfGroup(i + 1), d = 0;
    for (let c = 0, h = o.length; c < h; c++) this.tag.insertRule(s, o[c]) && (this.groupSizes[i]++, s++, d++);
    d > 0 && this._cGroup > i && (this._cIndex += d);
  }
  clearGroup(i) {
    if (i < this.length) {
      const o = this.groupSizes[i], s = this.indexOfGroup(i), d = s + o;
      this.groupSizes[i] = 0;
      for (let c = s; c < d; c++) this.tag.deleteRule(s);
      o > 0 && this._cGroup > i && (this._cIndex -= o);
    }
  }
  getGroup(i) {
    let o = "";
    if (i >= this.length || this.groupSizes[i] === 0) return o;
    const s = this.groupSizes[i], d = this.indexOfGroup(i), c = d + s;
    for (let h = d; h < c; h++) o += this.tag.getRule(h) + $0;
    return o;
  }
}, ex = `style[${dc}][${nS}="${Th}"]`, tx = new RegExp(`^${dc}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), Cv = (i) => typeof ShadowRoot < "u" && i instanceof ShadowRoot || "host" in i && i.nodeType === 11, O0 = (i) => {
  if (!i) return document;
  if (Cv(i)) return i;
  if ("getRootNode" in i) {
    const o = i.getRootNode();
    if (Cv(o)) return o;
  }
  return document;
}, nx = (i, o, s) => {
  const d = s.split(",");
  let c;
  for (let h = 0, T = d.length; h < T; h++) (c = d[h]) && i.registerName(o, c);
}, lx = (i, o) => {
  var s;
  const d = ((s = o.textContent) !== null && s !== void 0 ? s : "").split($0), c = [];
  for (let h = 0, T = d.length; h < T; h++) {
    const A = d[h].trim();
    if (!A) continue;
    const x = A.match(tx);
    if (x) {
      const O = 0 | parseInt(x[1], 10), L = x[2];
      O !== 0 && (M3(L, O), nx(i, L, x[3]), i.getTag().insertRules(O, c)), c.length = 0;
    } else c.push(A);
  }
}, i0 = (i) => {
  const o = O0(i.options.target).querySelectorAll(ex);
  for (let s = 0, d = o.length; s < d; s++) {
    const c = o[s];
    c && c.getAttribute(dc) !== tS && (lx(i, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
let bm = !1;
function ax() {
  if (bm !== !1) return bm;
  if (typeof document < "u") {
    const i = document.head.querySelector('meta[property="csp-nonce"]');
    if (i) return bm = i.nonce || i.getAttribute("content") || void 0;
    const o = document.head.querySelector('meta[name="sc-nonce"]');
    if (o) return bm = o.getAttribute("content") || void 0;
  }
  return bm = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const fS = (i, o) => {
  const s = document.head, d = i || s, c = document.createElement("style"), h = ((x) => {
    const O = Array.from(x.querySelectorAll(`style[${dc}]`));
    return O[O.length - 1];
  })(d), T = h !== void 0 ? h.nextSibling : null;
  c.setAttribute(dc, tS), c.setAttribute(nS, Th);
  const A = o || ax();
  return A && c.setAttribute("nonce", A), d.insertBefore(c, T), c;
}, rx = class {
  constructor(i, o) {
    this.element = fS(i, o), this.element.appendChild(document.createTextNode("")), this.sheet = ((s) => {
      var d;
      if (s.sheet) return s.sheet;
      const c = (d = s.getRootNode().styleSheets) !== null && d !== void 0 ? d : document.styleSheets;
      for (let h = 0, T = c.length; h < T; h++) {
        const A = c[h];
        if (A.ownerNode === s) return A;
      }
      throw Lm(17);
    })(this.element), this.length = 0;
  }
  insertRule(i, o) {
    try {
      return this.sheet.insertRule(o, i), this.length++, !0;
    } catch {
      return !1;
    }
  }
  deleteRule(i) {
    this.sheet.deleteRule(i), this.length--;
  }
  getRule(i) {
    const o = this.sheet.cssRules[i];
    return o && o.cssText ? o.cssText : "";
  }
}, ix = class {
  constructor(i, o) {
    this.element = fS(i, o), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(i, o) {
    if (i <= this.length && i >= 0) {
      const s = document.createTextNode(o);
      return this.element.insertBefore(s, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }
  deleteRule(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }
  getRule(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }
};
let Dv = Nm;
const ox = { isServer: !Nm, useCSSOMInjection: !N3 };
class Eh {
  static registerId(o) {
    return Vm(o);
  }
  constructor(o = Ac, s = {}, d) {
    this.options = Object.assign(Object.assign({}, ox), o), this.gs = s, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(d), this.server = !!o.isServer, !this.server && Nm && Dv && (Dv = !1, i0(this)), cS(this, () => ((c) => {
      const h = c.getTag(), { length: T } = h;
      let A = "";
      for (let x = 0; x < T; x++) {
        const O = R3(x);
        if (O === void 0) continue;
        const L = c.names.get(O);
        if (L === void 0 || !L.size) continue;
        const M = h.getGroup(x);
        if (M.length === 0) continue;
        const D = dc + ".g" + x + '[id="' + O + '"]';
        let te = "";
        for (const q of L) q.length > 0 && (te += q + ",");
        A += M + D + '{content:"' + te + '"}' + $0;
      }
      return A;
    })(this));
  }
  rehydrate() {
    !this.server && Nm && i0(this);
  }
  reconstructWithOptions(o, s = !0) {
    const d = new Eh(Object.assign(Object.assign({}, this.options), o), this.gs, s && this.names || void 0);
    return d.keyframeIds = new Set(this.keyframeIds), !this.server && Nm && o.target !== this.options.target && O0(this.options.target) !== O0(o.target) && i0(d), d;
  }
  allocateGSInstance(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (o = (({ useCSSOMInjection: s, target: d, nonce: c }) => s ? new rx(d, c) : new ix(d, c))(this.options), new J3(o)));
    var o;
  }
  hasNameForId(o, s) {
    var d, c;
    return (c = (d = this.names.get(o)) === null || d === void 0 ? void 0 : d.has(s)) !== null && c !== void 0 && c;
  }
  registerName(o, s) {
    Vm(o), o.startsWith(O3) && this.keyframeIds.add(o);
    const d = this.names.get(o);
    d ? d.add(s) : this.names.set(o, /* @__PURE__ */ new Set([s]));
  }
  insertRules(o, s, d) {
    this.registerName(o, s), this.getTag().insertRules(Vm(o), d);
  }
  clearNames(o) {
    this.names.has(o) && this.names.get(o).clear();
  }
  clearRules(o) {
    this.getTag().clearGroup(Vm(o)), this.clearNames(o);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const dS = /* @__PURE__ */ new WeakSet(), ux = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function sx(i, o) {
  return o == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || i in ux || i.startsWith("--") ? String(o).trim() : o + "px";
}
const nc = 47;
function Rv(i) {
  if (i.charCodeAt(0) === 45 && i.charCodeAt(1) === 45) return i;
  let o = "";
  for (let s = 0; s < i.length; s++) {
    const d = i.charCodeAt(s);
    o += d >= 65 && d <= 90 ? "-" + String.fromCharCode(d + 32) : i[s];
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
const cx = Symbol.for("sc-keyframes");
function C0(i) {
  return typeof i == "object" && i !== null && cx in i;
}
function pS(i) {
  return kh(i) && !(i.prototype && i.prototype.isReactComponent);
}
const mS = (i) => i == null || i === !1 || i === "", fx = Symbol.for("react.client.reference");
function Mv(i) {
  return i.$$typeof === fx;
}
function Lv(i) {
  const o = i.$$id, s = (o && o.includes("#") ? o.split("#").pop() : o) || i.name || "unknown";
  console.warn(`Interpolating a client component (${s}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function hS(i, o) {
  for (const s in i) {
    const d = i[s];
    i.hasOwnProperty(s) && !mS(d) && (Array.isArray(d) && dS.has(d) || kh(d) ? o.push(Rv(s) + ":", d, ";") : pc(d) ? (o.push(s + " {"), hS(d, o), o.push("}")) : o.push(Rv(s) + ": " + sx(s, d) + ";"));
  }
}
function ic(i, o, s, d, c = []) {
  if (mS(i)) return c;
  const h = typeof i;
  if (h === "string") return c.push(i), c;
  if (h === "function") {
    if (Mv(i)) return Ut.env.NODE_ENV !== "production" && Lv(i), c;
    if (pS(i) && o) {
      const T = i(o);
      return Ut.env.NODE_ENV === "production" || typeof T != "object" || Array.isArray(T) || C0(T) || pc(T) || T === null || console.error(`${K0(i)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), ic(T, o, s, d, c);
    }
    return c.push(i), c;
  }
  if (Array.isArray(i)) {
    for (let T = 0; T < i.length; T++) ic(i[T], o, s, d, c);
    return c;
  }
  return sS(i) ? (c.push(`.${i.styledComponentId}`), c) : C0(i) ? (s ? (i.inject(s, d), c.push(i.getName(d))) : c.push(i), c) : Mv(i) ? (Ut.env.NODE_ENV !== "production" && Lv(i), c) : pc(i) ? i.toString !== Object.prototype.toString ? (c.push(i.toString()), c) : (hS(i, c), c) : (c.push(i.toString()), c);
}
const dx = rS(Th);
class px {
  constructor(o, s, d) {
    this.rules = o, this.componentId = s, this.baseHash = rc(dx, s), this.baseStyle = d, Eh.registerId(s);
  }
  generateAndInjectStyles(o, s, d) {
    let c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, s, d) : "";
    {
      let h = "";
      for (let T = 0; T < this.rules.length; T++) {
        const A = this.rules[T];
        if (typeof A == "string") h += A;
        else if (A) if (pS(A)) {
          const x = A(o);
          typeof x == "string" ? h += x : x != null && x !== !1 && (Ut.env.NODE_ENV === "production" || typeof x != "object" || Array.isArray(x) || C0(x) || pc(x) || console.error(`${K0(A)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), h += Ov(ic(x, o, s, d)));
        } else h += Ov(ic(A, o, s, d));
      }
      if (h) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const T = d.hash ? d.hash + h : h;
        let A = this.dynamicNameCache.get(T);
        if (!A) {
          if (A = aS(rc(rc(this.baseHash, d.hash), h) >>> 0), this.dynamicNameCache.size >= 200) {
            const x = this.dynamicNameCache.keys().next().value;
            x !== void 0 && this.dynamicNameCache.delete(x);
          }
          this.dynamicNameCache.set(T, A);
        }
        if (!s.hasNameForId(this.componentId, A)) {
          const x = d(h, "." + A, void 0, this.componentId);
          s.insertRules(this.componentId, A, x);
        }
        c = xm(c, A);
      }
    }
    return c;
  }
}
const mx = /&/g;
function gS(i, o) {
  let s = 0;
  for (; --o >= 0 && i.charCodeAt(o) === 92; ) s++;
  return !(1 & ~s);
}
function o0(i) {
  const o = i.length;
  let s = "", d = 0, c = 0, h = 0, T = !1, A = !1;
  for (let x = 0; x < o; x++) {
    const O = i.charCodeAt(x);
    if (h !== 0 || T || O !== nc || i.charCodeAt(x + 1) !== 42) if (T) O === 42 && i.charCodeAt(x + 1) === nc && (T = !1, x++);
    else if (O !== 34 && O !== 39 || gS(i, x)) {
      if (h === 0) if (O === 123) c++;
      else if (O === 125) {
        if (c--, c < 0) {
          A = !0;
          let L = x + 1;
          for (; L < o; ) {
            const M = i.charCodeAt(L);
            if (M === 59 || M === 10) break;
            L++;
          }
          L < o && i.charCodeAt(L) === 59 && L++, c = 0, x = L - 1, d = L;
          continue;
        }
        c === 0 && (s += i.substring(d, x + 1), d = x + 1);
      } else O === 59 && c === 0 && (s += i.substring(d, x + 1), d = x + 1);
    } else h === 0 ? h = O : h === O && (h = 0);
    else T = !0, x++;
  }
  return A || c !== 0 || h !== 0 ? (d < o && c === 0 && h === 0 && (s += i.substring(d)), s) : i;
}
function yS(i, o) {
  const s = o + " ", d = "," + s;
  for (let c = 0; c < i.length; c++) {
    const h = i[c];
    if (h.type === "rule") {
      h.value = (s + h.value).replaceAll(",", d);
      const T = h.props, A = [];
      for (let x = 0; x < T.length; x++) A[x] = s + T[x];
      h.props = A;
    }
    Array.isArray(h.children) && h.type !== "@keyframes" && yS(h.children, o);
  }
  return i;
}
function hx({ options: i = Ac, plugins: o = I0 } = Ac) {
  let s, d, c;
  const h = (D, te, q) => q.startsWith(d) && q.endsWith(d) && q.replaceAll(d, "").length > 0 ? `.${s}` : D, T = o.slice();
  T.push((D) => {
    D.type === bh && D.value.includes("&") && (c || (c = new RegExp(`\\${d}\\b`, "g")), D.props[0] = D.props[0].replace(mx, d).replace(c, h));
  }), i.prefix && T.push(z3), T.push(x3);
  let A = [];
  const x = A3(T.concat(_3((D) => A.push(D)))), O = (D, te = "", q = "", X = "&") => {
    s = X, d = te, c = void 0;
    const W = (function(B) {
      const be = B.indexOf("//") !== -1, P = B.indexOf("}") !== -1;
      if (!be && !P) return B;
      if (!be) return o0(B);
      const ne = B.length;
      let G = "", V = 0, Z = 0, Ee = 0, He = 0, qe = 0, Be = !1;
      for (; Z < ne; ) {
        const _e = B.charCodeAt(Z);
        if (_e !== 34 && _e !== 39 || gS(B, Z)) if (Ee === 0) if (_e === nc && Z + 1 < ne && B.charCodeAt(Z + 1) === 42) {
          for (Z += 2; Z + 1 < ne && (B.charCodeAt(Z) !== 42 || B.charCodeAt(Z + 1) !== nc); ) Z++;
          Z += 2;
        } else if (_e !== 40) if (_e !== 41) if (He > 0) Z++;
        else if (_e === 42 && Z + 1 < ne && B.charCodeAt(Z + 1) === nc) G += B.substring(V, Z), Z += 2, V = Z, Be = !0;
        else if (_e === nc && Z + 1 < ne && B.charCodeAt(Z + 1) === nc) {
          for (G += B.substring(V, Z); Z < ne && B.charCodeAt(Z) !== 10; ) Z++;
          V = Z, Be = !0;
        } else _e === 123 ? qe++ : _e === 125 && qe--, Z++;
        else He > 0 && He--, Z++;
        else He++, Z++;
        else Z++;
        else Ee === 0 ? Ee = _e : Ee === _e && (Ee = 0), Z++;
      }
      return Be ? (V < ne && (G += B.substring(V)), qe === 0 ? G : o0(G)) : qe === 0 ? B : o0(B);
    })(D);
    let ee = k3(q || te ? q + " " + te + " { " + W + " }" : W);
    return i.namespace && (ee = yS(ee, i.namespace)), A = [], sh(ee, x), A;
  }, L = i;
  let M = z0;
  for (let D = 0; D < o.length; D++) o[D].name || Lm(15), M = rc(M, o[D].name);
  return L != null && L.namespace && (M = rc(M, L.namespace)), L != null && L.prefix && (M = rc(M, "p")), O.hash = M !== z0 ? M.toString() : "", O;
}
const gx = new Eh(), yx = hx(), bS = Et.createContext({ shouldForwardProp: void 0, styleSheet: gx, stylis: yx, stylisPlugins: void 0 });
bS.Consumer;
function bx() {
  return Et.useContext(bS);
}
const vS = Et.createContext(void 0);
vS.Consumer;
const Uv = Object.prototype.hasOwnProperty, u0 = {};
function vx(i, o) {
  const s = typeof i != "string" ? "sc" : lS(i);
  u0[s] = (u0[s] || 0) + 1;
  const d = s + "-" + q3(Th + s + u0[s]);
  return o ? o + "-" + d : d;
}
let s0;
function Sx(i, o, s) {
  const d = sS(i), c = i, h = !lh(i), { attrs: T = I0, componentId: A = vx(o.displayName, o.parentComponentId), displayName: x = G3(i) } = o, O = o.displayName && o.componentId ? lS(o.displayName) + "-" + o.componentId : o.componentId || A, L = d && c.attrs ? c.attrs.concat(T).filter(Boolean) : T;
  let { shouldForwardProp: M } = o;
  if (d && c.shouldForwardProp) {
    const X = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      const W = o.shouldForwardProp;
      M = (ee, B) => X(ee, B) && W(ee, B);
    } else M = X;
  }
  const D = new px(s, O, d ? c.componentStyle : void 0);
  function te(X, W) {
    return (function(ee, B, be) {
      const { attrs: P, componentStyle: ne, defaultProps: G, foldedComponentIds: V, styledComponentId: Z, target: Ee } = ee, He = Et.useContext(vS), qe = bx(), Be = ee.shouldForwardProp || qe.shouldForwardProp;
      Ut.env.NODE_ENV !== "production" && Et.useDebugValue && Et.useDebugValue(Z);
      const _e = U3(B, He, G) || Ac;
      let gt, $e;
      {
        const re = Et.useRef(null), se = re.current;
        if (se !== null && se[1] === _e && se[2] === qe.styleSheet && se[3] === qe.stylis && se[7] === ne && (function(ie, we, ue) {
          const I = ie, ge = we;
          let yt = 0;
          for (const tt in ge) if (Uv.call(ge, tt) && (yt++, I[tt] !== ge[tt])) return !1;
          return yt === ue;
        })(se[0], B, se[4])) gt = se[5], $e = se[6];
        else {
          gt = (function(we, ue, I) {
            const ge = Object.assign(Object.assign({}, ue), { className: void 0, theme: I }), yt = we.length > 1;
            for (let tt = 0; tt < we.length; tt++) {
              const fn = we[tt], dn = kh(fn) ? fn(yt ? Object.assign({}, ge) : ge) : fn;
              for (const nt in dn) nt === "className" ? ge.className = xm(ge.className, dn[nt]) : nt === "style" ? ge.style = Object.assign(Object.assign({}, ge.style), dn[nt]) : nt in ue && ue[nt] === void 0 || (ge[nt] = dn[nt]);
            }
            return "className" in ue && typeof ue.className == "string" && (ge.className = xm(ge.className, ue.className)), ge;
          })(P, B, _e), $e = (function(we, ue, I, ge) {
            const yt = we.generateAndInjectStyles(ue, I, ge);
            return Ut.env.NODE_ENV !== "production" && Et.useDebugValue && Et.useDebugValue(yt), yt;
          })(ne, gt, qe.styleSheet, qe.stylis);
          let ie = 0;
          for (const we in B) Uv.call(B, we) && ie++;
          re.current = [B, _e, qe.styleSheet, qe.stylis, ie, gt, $e, ne];
        }
      }
      Ut.env.NODE_ENV !== "production" && ee.warnTooManyClasses && ee.warnTooManyClasses($e);
      const U = gt.as || Ee, R = (function(re, se, ie, we) {
        const ue = {};
        for (const I in re) re[I] === void 0 || I[0] === "$" || I === "as" || I === "theme" && re.theme === ie || (I === "forwardedAs" ? ue.as = re.forwardedAs : we && !we(I, se) || (ue[I] = re[I], we || Ut.env.NODE_ENV !== "development" || s3(I) || (s0 || (s0 = /* @__PURE__ */ new Set())).has(I) || !lh(se) || se.includes("-") || (s0.add(I), console.warn(`styled-components: it looks like an unknown prop "${I}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return ue;
      })(gt, U, _e, Be);
      let H = xm(V, Z);
      return $e && (H += " " + $e), gt.className && (H += " " + gt.className), R[lh(U) && U.includes("-") ? "class" : "className"] = H, be && (R.ref = be), Qv(U, R);
    })(q, X, W);
  }
  te.displayName = x;
  let q = Et.forwardRef(te);
  return q.attrs = L, q.componentStyle = D, q.displayName = x, q.shouldForwardProp = M, q.foldedComponentIds = d ? xm(c.foldedComponentIds, c.styledComponentId) : "", q.styledComponentId = O, q.target = d ? c.target : i, Object.defineProperty(q, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(X) {
    this._foldedDefaultProps = d ? (function(W, ...ee) {
      for (const B of ee) N0(W, B, !0);
      return W;
    })({}, c.defaultProps, X) : X;
  } }), Ut.env.NODE_ENV !== "production" && (L3(x, O), q.warnTooManyClasses = /* @__PURE__ */ ((X, W) => {
    let ee = {}, B = !1;
    return (be) => {
      !B && (ee[be] = !0, Object.keys(ee).length >= 200) && (console.warn(`Over 200 classes were generated for component ${X}${W ? ` with the id of "${W}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), B = !0, ee = {});
    };
  })(x, O)), cS(q, () => `.${q.styledComponentId}`), h && uS(q, i, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), q;
}
var wx = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function jv(i, o) {
  const s = [i[0]];
  for (let d = 0, c = o.length; d < c; d += 1) s.push(o[d], i[d + 1]);
  return s;
}
const Hv = (i) => (dS.add(i), i);
function Tx(i, ...o) {
  if (kh(i) || pc(i)) return Hv(ic(jv(I0, [i, ...o])));
  const s = i;
  return o.length === 0 && s.length === 1 && typeof s[0] == "string" ? ic(s) : Hv(ic(jv(s, o)));
}
function D0(i, o, s = Ac) {
  if (!o) throw Lm(1, o);
  const d = (c, ...h) => i(o, s, Tx(c, ...h));
  return d.attrs = (c) => D0(i, o, Object.assign(Object.assign({}, s), { attrs: Array.prototype.concat(s.attrs, c).filter(Boolean) })), d.withConfig = (c) => D0(i, o, Object.assign(Object.assign({}, s), c)), d;
}
const SS = (i) => D0(Sx, i), P0 = SS;
wx.forEach((i) => {
  P0[i] = SS(i);
});
Ut.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://styled-components.com/docs/basics#react-native`);
const Fm = `__sc-${dc}__`;
Ut.env.NODE_ENV !== "production" && Ut.env.NODE_ENV !== "test" && typeof window < "u" && (window[Fm] || (window[Fm] = 0), window[Fm] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`), window[Fm] += 1);
const kx = P0.ul`
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
`, Ex = () => {
  const { feeds: i } = $v(G0);
  return /* @__PURE__ */ Vl.jsx(kx, { "data-testid": "grid-view-container", children: i == null ? void 0 : i.map((o) => /* @__PURE__ */ Vl.jsx("li", { children: /* @__PURE__ */ Vl.jsx(
    Yo,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${uh(o.startDate, "COMPLETE")} <br /> ${$1(
        o.startDate,
        o.endDate
      )}
              </span>`,
      eventLocation: o.location,
      clickable: !!o.alias,
      cardLink: `${o.alias}/?eventDate=${uh(
        o.startDate,
        "ISO"
      )}`,
      title: o.title,
      image: o.imageUrl,
      imageAltText: o.title,
      linkLabel: o.eventButtonText,
      linkUrl: o.eventButtonUrl
    }
  ) }, o.id)) });
}, wS = ({
  header: i,
  ctaButton: o,
  dataSource: s,
  maxItems: d,
  noFeedText: c = "No events to show."
}) => ($o(() => {
  typeof window < "u" && Jv({
    packageName: "component-events",
    component: "CardsGridEvents",
    type: "NA",
    configuration: {
      header: i,
      ctaButton: o,
      dataSource: s,
      maxItems: d
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ Vl.jsx(F0, { header: i, ctaButton: o, dataSource: s, maxItems: d, noFeedText: c, children: /* @__PURE__ */ Vl.jsx(Ex, {}) }));
wS.propTypes = Q1;
const xx = P0.ul`
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
`, Ax = () => {
  const { feeds: i } = $v(G0);
  return /* @__PURE__ */ Vl.jsx(xx, { "data-testid": "list-view-container", children: i == null ? void 0 : i.map((o) => /* @__PURE__ */ Vl.jsx("li", { children: /* @__PURE__ */ Vl.jsx(
    Yo,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${uh(o.startDate, "COMPLETE")} <br /> ${$1(
        o.startDate,
        o.endDate
      )}
              </span>`,
      eventLocation: o.location,
      clickable: !!o.alias,
      cardLink: `${o.alias}/?eventDate=${uh(
        o.startDate,
        "ISO"
      )}`,
      title: o.title,
      image: o.imageUrl,
      imageAltText: o.title,
      linkLabel: o.eventButtonText,
      linkUrl: o.eventButtonUrl
    }
  ) }, o.id)) });
}, TS = ({
  header: i,
  ctaButton: o,
  dataSource: s,
  maxItems: d,
  noFeedText: c = "No events to show."
}) => ($o(() => {
  typeof window < "u" && Jv({
    packageName: "component-events",
    component: "CardsListEvents",
    type: "NA",
    configuration: {
      header: i,
      ctaButton: o,
      dataSource: s,
      maxItems: d
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ Vl.jsx(F0, { header: i, ctaButton: o, dataSource: s, maxItems: d, noFeedText: c, children: /* @__PURE__ */ Vl.jsx(Ax, {}) }));
TS.propTypes = Q1;
var c0 = { exports: {} }, vm = {}, f0 = { exports: {} }, d0 = {};
var Bv;
function _x() {
  return Bv || (Bv = 1, (function(i) {
    function o(U, R) {
      var H = U.length;
      U.push(R);
      e: for (; 0 < H; ) {
        var re = H - 1 >>> 1, se = U[re];
        if (0 < c(se, R))
          U[re] = R, U[H] = se, H = re;
        else break e;
      }
    }
    function s(U) {
      return U.length === 0 ? null : U[0];
    }
    function d(U) {
      if (U.length === 0) return null;
      var R = U[0], H = U.pop();
      if (H !== R) {
        U[0] = H;
        e: for (var re = 0, se = U.length, ie = se >>> 1; re < ie; ) {
          var we = 2 * (re + 1) - 1, ue = U[we], I = we + 1, ge = U[I];
          if (0 > c(ue, H))
            I < se && 0 > c(ge, ue) ? (U[re] = ge, U[I] = H, re = I) : (U[re] = ue, U[we] = H, re = we);
          else if (I < se && 0 > c(ge, H))
            U[re] = ge, U[I] = H, re = I;
          else break e;
        }
      }
      return R;
    }
    function c(U, R) {
      var H = U.sortIndex - R.sortIndex;
      return H !== 0 ? H : U.id - R.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var T = Date, A = T.now();
      i.unstable_now = function() {
        return T.now() - A;
      };
    }
    var x = [], O = [], L = 1, M = null, D = 3, te = !1, q = !1, X = !1, W = !1, ee = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
    function P(U) {
      for (var R = s(O); R !== null; ) {
        if (R.callback === null) d(O);
        else if (R.startTime <= U)
          d(O), R.sortIndex = R.expirationTime, o(x, R);
        else break;
        R = s(O);
      }
    }
    function ne(U) {
      if (X = !1, P(U), !q)
        if (s(x) !== null)
          q = !0, G || (G = !0, Be());
        else {
          var R = s(O);
          R !== null && $e(ne, R.startTime - U);
        }
    }
    var G = !1, V = -1, Z = 5, Ee = -1;
    function He() {
      return W ? !0 : !(i.unstable_now() - Ee < Z);
    }
    function qe() {
      if (W = !1, G) {
        var U = i.unstable_now();
        Ee = U;
        var R = !0;
        try {
          e: {
            q = !1, X && (X = !1, B(V), V = -1), te = !0;
            var H = D;
            try {
              t: {
                for (P(U), M = s(x); M !== null && !(M.expirationTime > U && He()); ) {
                  var re = M.callback;
                  if (typeof re == "function") {
                    M.callback = null, D = M.priorityLevel;
                    var se = re(
                      M.expirationTime <= U
                    );
                    if (U = i.unstable_now(), typeof se == "function") {
                      M.callback = se, P(U), R = !0;
                      break t;
                    }
                    M === s(x) && d(x), P(U);
                  } else d(x);
                  M = s(x);
                }
                if (M !== null) R = !0;
                else {
                  var ie = s(O);
                  ie !== null && $e(
                    ne,
                    ie.startTime - U
                  ), R = !1;
                }
              }
              break e;
            } finally {
              M = null, D = H, te = !1;
            }
            R = void 0;
          }
        } finally {
          R ? Be() : G = !1;
        }
      }
    }
    var Be;
    if (typeof be == "function")
      Be = function() {
        be(qe);
      };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), gt = _e.port2;
      _e.port1.onmessage = qe, Be = function() {
        gt.postMessage(null);
      };
    } else
      Be = function() {
        ee(qe, 0);
      };
    function $e(U, R) {
      V = ee(function() {
        U(i.unstable_now());
      }, R);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, i.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Z = 0 < U ? Math.floor(1e3 / U) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, i.unstable_next = function(U) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = D;
      }
      var H = D;
      D = R;
      try {
        return U();
      } finally {
        D = H;
      }
    }, i.unstable_requestPaint = function() {
      W = !0;
    }, i.unstable_runWithPriority = function(U, R) {
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
      var H = D;
      D = U;
      try {
        return R();
      } finally {
        D = H;
      }
    }, i.unstable_scheduleCallback = function(U, R, H) {
      var re = i.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? re + H : re) : H = re, U) {
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
      return se = H + se, U = {
        id: L++,
        callback: R,
        priorityLevel: U,
        startTime: H,
        expirationTime: se,
        sortIndex: -1
      }, H > re ? (U.sortIndex = H, o(O, U), s(x) === null && U === s(O) && (X ? (B(V), V = -1) : X = !0, $e(ne, H - re))) : (U.sortIndex = se, o(x, U), q || te || (q = !0, G || (G = !0, Be()))), U;
    }, i.unstable_shouldYield = He, i.unstable_wrapCallback = function(U) {
      var R = D;
      return function() {
        var H = D;
        D = R;
        try {
          return U.apply(this, arguments);
        } finally {
          D = H;
        }
      };
    };
  })(d0)), d0;
}
var qv;
function zx() {
  return qv || (qv = 1, f0.exports = _x()), f0.exports;
}
var Gv;
function Nx() {
  if (Gv) return vm;
  Gv = 1;
  var i = { env: { NODE_ENV: "production" } };
  var o = zx(), s = Et, d = Iv;
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function T(e) {
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
  function A(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function x(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function O(e) {
    if (T(e) !== e)
      throw Error(c(188));
  }
  function L(e) {
    var t = e.alternate;
    if (!t) {
      if (t = T(e), t === null) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var r = a.alternate;
      if (r === null) {
        if (l = a.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (a.child === r.child) {
        for (r = a.child; r; ) {
          if (r === n) return O(a), e;
          if (r === l) return O(a), t;
          r = r.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) n = a, l = r;
      else {
        for (var u = !1, f = a.child; f; ) {
          if (f === n) {
            u = !0, n = a, l = r;
            break;
          }
          if (f === l) {
            u = !0, l = a, n = r;
            break;
          }
          f = f.sibling;
        }
        if (!u) {
          for (f = r.child; f; ) {
            if (f === n) {
              u = !0, n = r, l = a;
              break;
            }
            if (f === l) {
              u = !0, l = r, n = a;
              break;
            }
            f = f.sibling;
          }
          if (!u) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function M(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = M(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var D = Object.assign, te = Symbol.for("react.element"), q = Symbol.for("react.transitional.element"), X = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), be = Symbol.for("react.consumer"), P = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), He = Symbol.for("react.activity"), qe = Symbol.for("react.memo_cache_sentinel"), Be = Symbol.iterator;
  function _e(e) {
    return e === null || typeof e != "object" ? null : (e = Be && e[Be] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var gt = Symbol.for("react.client.reference");
  function $e(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === gt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case B:
        return "Profiler";
      case ee:
        return "StrictMode";
      case G:
        return "Suspense";
      case V:
        return "SuspenseList";
      case He:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case X:
          return "Portal";
        case P:
          return e.displayName || "Context";
        case be:
          return (e._context.displayName || "Context") + ".Consumer";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Z:
          return t = e.displayName || null, t !== null ? t : $e(e.type) || "Memo";
        case Ee:
          t = e._payload, e = e._init;
          try {
            return $e(e(t));
          } catch {
          }
      }
    return null;
  }
  var U = Array.isArray, R = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = {
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
  function I(e, t) {
    ie++, se[ie] = e.current, e.current = t;
  }
  var ge = we(null), yt = we(null), tt = we(null), fn = we(null);
  function dn(e, t) {
    switch (I(tt, t), I(yt, e), I(ge, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Cp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Cp(t), e = Dp(t, e);
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
    ue(ge), I(ge, e);
  }
  function nt() {
    ue(ge), ue(yt), ue(tt);
  }
  function De(e) {
    e.memoizedState !== null && I(fn, e);
    var t = ge.current, n = Dp(t, e.type);
    t !== n && (I(yt, e), I(ge, n));
  }
  function Xl(e) {
    yt.current === e && (ue(ge), ue(yt)), fn.current === e && (ue(fn), ii._currentValue = re);
  }
  var Re, cr;
  function ke(e) {
    if (Re === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Re = t && t[1] || "", cr = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Re + e + cr;
  }
  var Dn = !1;
  function va(e, t) {
    if (!e || Dn) return "";
    Dn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var C = function() {
                throw Error();
              };
              if (Object.defineProperty(C.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(C, []);
                } catch (E) {
                  var k = E;
                }
                Reflect.construct(e, [], C);
              } else {
                try {
                  C.call();
                } catch (E) {
                  k = E;
                }
                e.call(C.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (E) {
                k = E;
              }
              (C = e()) && typeof C.catch == "function" && C.catch(function() {
              });
            }
          } catch (E) {
            if (E && k && typeof E.stack == "string")
              return [E.stack, k.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = l.DetermineComponentFrameRoot(), u = r[0], f = r[1];
      if (u && f) {
        var p = u.split(`
`), w = f.split(`
`);
        for (a = l = 0; l < p.length && !p[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; a < w.length && !w[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (l === p.length || a === w.length)
          for (l = p.length - 1, a = w.length - 1; 1 <= l && 0 <= a && p[l] !== w[a]; )
            a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (p[l] !== w[a]) {
            if (l !== 1 || a !== 1)
              do
                if (l--, a--, 0 > a || p[l] !== w[a]) {
                  var z = `
` + p[l].replace(" at new ", " at ");
                  return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      Dn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? ke(n) : "";
  }
  function yn(e, t) {
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
        return va(e.type, !1);
      case 11:
        return va(e.type.render, !1);
      case 1:
        return va(e.type, !0);
      case 31:
        return ke("Activity");
      default:
        return "";
    }
  }
  function fr(e) {
    try {
      var t = "", n = null;
      do
        t += yn(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Ql = Object.prototype.hasOwnProperty, Sa = o.unstable_scheduleCallback, wa = o.unstable_cancelCallback, bn = o.unstable_shouldYield, $l = o.unstable_requestPaint, Ye = o.unstable_now, dr = o.unstable_getCurrentPriorityLevel, Ta = o.unstable_ImmediatePriority, ka = o.unstable_UserBlockingPriority, al = o.unstable_NormalPriority, rl = o.unstable_LowPriority, Il = o.unstable_IdlePriority, Ea = o.log, vi = o.unstable_setDisableYieldValue, il = null, pt = null;
  function $t(e) {
    if (typeof Ea == "function" && vi(e), pt && typeof pt.setStrictMode == "function")
      try {
        pt.setStrictMode(il, e);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : pr, ol = Math.log, It = Math.LN2;
  function pr(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ol(e) / It | 0) | 0;
  }
  var Kl = 256, Pl = 262144, ul = 4194304;
  function vn(e) {
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
  function Rn(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, r = e.suspendedLanes, u = e.pingedLanes;
    e = e.warmLanes;
    var f = l & 134217727;
    return f !== 0 ? (l = f & ~r, l !== 0 ? a = vn(l) : (u &= f, u !== 0 ? a = vn(u) : n || (n = f & ~e, n !== 0 && (a = vn(n))))) : (f = l & ~r, f !== 0 ? a = vn(f) : u !== 0 ? a = vn(u) : n || (n = l & ~e, n !== 0 && (a = vn(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & r) === 0 && (r = a & -a, n = t & -t, r >= n || r === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function Sn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Kt(e, t) {
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
  function Mn() {
    var e = ul;
    return ul <<= 1, (ul & 62914560) === 0 && (ul = 4194304), e;
  }
  function Zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ln(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Io(e, t, n, l, a, r) {
    var u = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, p = e.expirationTimes, w = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var z = 31 - rt(n), C = 1 << z;
      f[z] = 0, p[z] = -1;
      var k = w[z];
      if (k !== null)
        for (w[z] = null, z = 0; z < k.length; z++) {
          var E = k[z];
          E !== null && (E.lane &= -536870913);
        }
      n &= ~C;
    }
    l !== 0 && mr(e, l, 0), r !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(u & ~t));
  }
  function mr(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - rt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function xa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - rt(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function hr(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Wl(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Wl(e) {
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
  function gr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function sl() {
    var e = H.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : tm(e.type));
  }
  function Si(e, t) {
    var n = H.p;
    try {
      return H.p = e, t();
    } finally {
      H.p = n;
    }
  }
  var wn = Math.random().toString(36).slice(2), oe = "__reactFiber$" + wn, Fe = "__reactProps$" + wn, cl = "__reactContainer$" + wn, Aa = "__reactEvents$" + wn, yr = "__reactListeners$" + wn, wi = "__reactHandles$" + wn, br = "__reactResources$" + wn, Jl = "__reactMarker$" + wn;
  function vr(e) {
    delete e[oe], delete e[Fe], delete e[Aa], delete e[yr], delete e[wi];
  }
  function fl(e) {
    var t = e[oe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[cl] || n[oe]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Bp(e); e !== null; ) {
            if (n = e[oe]) return n;
            e = Bp(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function dl(e) {
    if (e = e[oe] || e[cl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Mt(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Un(e) {
    var t = e[br];
    return t || (t = e[br] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Me(e) {
    e[Jl] = !0;
  }
  var Ti = /* @__PURE__ */ new Set(), ki = {};
  function Tn(e, t) {
    jn(e, t), jn(e + "Capture", t);
  }
  function jn(e, t) {
    for (ki[e] = t, e = 0; e < t.length; e++)
      Ti.add(t[e]);
  }
  var _a = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), za = {}, ea = {};
  function pl(e) {
    return Ql.call(ea, e) ? !0 : Ql.call(za, e) ? !1 : _a.test(e) ? ea[e] = !0 : (za[e] = !0, !1);
  }
  function kn(e, t, n) {
    if (pl(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function xt(e, t, n) {
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
  function pn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function At(e) {
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
  function Sr(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ei(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var a = l.get, r = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(u) {
          n = "" + u, r.call(this, u);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
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
  function wr(e) {
    if (!e._valueTracker) {
      var t = Sr(e) ? "checked" : "value";
      e._valueTracker = Ei(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Tr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = Sr(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Na(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ko = /[\n"\\]/g;
  function Tt(e) {
    return e.replace(
      Ko,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ml(e, t, n, l, a, r, u, f) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? b(e, u, At(t)) : n != null ? b(e, u, At(n)) : l != null && e.removeAttribute("value"), a == null && r != null && (e.defaultChecked = !!r), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + At(f) : e.removeAttribute("name");
  }
  function Oa(e, t, n, l, a, r, u, f) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || n != null) {
      if (!(r !== "submit" && r !== "reset" || t != null)) {
        wr(e);
        return;
      }
      n = n != null ? "" + At(n) : "", t = t != null ? "" + At(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = f ? e.checked : !!l, e.defaultChecked = !!l, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), wr(e);
  }
  function b(e, t, n) {
    t === "number" && Na(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function g(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++)
        t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + At(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _(e, t, n) {
    if (t != null && (t = "" + At(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + At(n) : "";
  }
  function j(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (U(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = At(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), wr(e);
  }
  function $(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var me = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ye(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || me.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function mt(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && ye(e, a, l);
    } else
      for (var r in t)
        t.hasOwnProperty(r) && ye(e, r, t[r]);
  }
  function lt(e) {
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
  ]), un = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _t(e) {
    return un.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function it() {
  }
  var Po = null;
  function Zo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ca = null, Da = null;
  function Nc(e) {
    var t = dl(e);
    if (t && (e = t.stateNode)) {
      var n = e[Fe] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ml(
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
              'input[name="' + Tt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[Fe] || null;
                if (!a) throw Error(c(90));
                ml(
                  l,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && Tr(l);
          }
          break e;
        case "textarea":
          _(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && g(e, !!n.multiple, t, !1);
      }
    }
  }
  var Wo = !1;
  function Oc(e, t, n) {
    if (Wo) return e(t, n);
    Wo = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Wo = !1, (Ca !== null || Da !== null) && (fo(), Ca && (t = Ca, e = Da, Da = Ca = null, Nc(t), e)))
        for (t = 0; t < e.length; t++) Nc(e[t]);
    }
  }
  function kr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Fe] || null;
    if (l === null) return null;
    n = l[t];
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
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
  var Hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jo = !1;
  if (Hn)
    try {
      var Er = {};
      Object.defineProperty(Er, "passive", {
        get: function() {
          Jo = !0;
        }
      }), window.addEventListener("test", Er, Er), window.removeEventListener("test", Er, Er);
    } catch {
      Jo = !1;
    }
  var hl = null, eu = null, xi = null;
  function Cc() {
    if (xi) return xi;
    var e, t = eu, n = t.length, l, a = "value" in hl ? hl.value : hl.textContent, r = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var u = n - e;
    for (l = 1; l <= u && t[n - l] === a[r - l]; l++) ;
    return xi = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Ai(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _i() {
    return !0;
  }
  function Dc() {
    return !1;
  }
  function zt(e) {
    function t(n, l, a, r, u) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = r, this.target = u, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(r) : r[f]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? _i : Dc, this.isPropagationStopped = Dc, this;
    }
    return D(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _i);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _i);
      },
      persist: function() {
      },
      isPersistent: _i
    }), t;
  }
  var ta = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, zi = zt(ta), xr = D({}, ta, { view: 0, detail: 0 }), xh = zt(xr), tu, nu, Ar, Ni = D({}, xr, {
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
    getModifierState: au,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ar && (Ar && e.type === "mousemove" ? (tu = e.screenX - Ar.screenX, nu = e.screenY - Ar.screenY) : nu = tu = 0, Ar = e), tu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : nu;
    }
  }), Rc = zt(Ni), Ah = D({}, Ni, { dataTransfer: 0 }), _h = zt(Ah), zh = D({}, xr, { relatedTarget: 0 }), lu = zt(zh), Nh = D({}, ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Oh = zt(Nh), Ch = D({}, ta, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Dh = zt(Ch), Rh = D({}, ta, { data: 0 }), Mc = zt(Rh), Mh = {
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
  }, Lh = {
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
  }, Uh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function jh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Uh[e]) ? !!t[e] : !1;
  }
  function au() {
    return jh;
  }
  var Hh = D({}, xr, {
    key: function(e) {
      if (e.key) {
        var t = Mh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ai(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: au,
    charCode: function(e) {
      return e.type === "keypress" ? Ai(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ai(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Bh = zt(Hh), qh = D({}, Ni, {
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
  }), Lc = zt(qh), Gh = D({}, xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: au
  }), Vh = zt(Gh), Yh = D({}, ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fh = zt(Yh), Xh = D({}, Ni, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qh = zt(Xh), $h = D({}, ta, {
    newState: 0,
    oldState: 0
  }), Ih = zt($h), Kh = [9, 13, 27, 32], ru = Hn && "CompositionEvent" in window, _r = null;
  Hn && "documentMode" in document && (_r = document.documentMode);
  var Ph = Hn && "TextEvent" in window && !_r, Uc = Hn && (!ru || _r && 8 < _r && 11 >= _r), jc = " ", Hc = !1;
  function Bc(e, t) {
    switch (e) {
      case "keyup":
        return Kh.indexOf(t.keyCode) !== -1;
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
  function qc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ra = !1;
  function Zh(e, t) {
    switch (e) {
      case "compositionend":
        return qc(t);
      case "keypress":
        return t.which !== 32 ? null : (Hc = !0, jc);
      case "textInput":
        return e = t.data, e === jc && Hc ? null : e;
      default:
        return null;
    }
  }
  function Wh(e, t) {
    if (Ra)
      return e === "compositionend" || !ru && Bc(e, t) ? (e = Cc(), xi = eu = hl = null, Ra = !1, e) : null;
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
        return Uc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Jh = {
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
  function Gc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Jh[e.type] : t === "textarea";
  }
  function Vc(e, t, n, l) {
    Ca ? Da ? Da.push(l) : Da = [l] : Ca = l, t = vo(t, "onChange"), 0 < t.length && (n = new zi(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var zr = null, Nr = null;
  function eg(e) {
    xp(e, 0);
  }
  function Oi(e) {
    var t = Mt(e);
    if (Tr(t)) return e;
  }
  function Yc(e, t) {
    if (e === "change") return t;
  }
  var Fc = !1;
  if (Hn) {
    var iu;
    if (Hn) {
      var ou = "oninput" in document;
      if (!ou) {
        var Xc = document.createElement("div");
        Xc.setAttribute("oninput", "return;"), ou = typeof Xc.oninput == "function";
      }
      iu = ou;
    } else iu = !1;
    Fc = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function Qc() {
    zr && (zr.detachEvent("onpropertychange", $c), Nr = zr = null);
  }
  function $c(e) {
    if (e.propertyName === "value" && Oi(Nr)) {
      var t = [];
      Vc(
        t,
        Nr,
        e,
        Zo(e)
      ), Oc(eg, t);
    }
  }
  function tg(e, t, n) {
    e === "focusin" ? (Qc(), zr = t, Nr = n, zr.attachEvent("onpropertychange", $c)) : e === "focusout" && Qc();
  }
  function ng(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Oi(Nr);
  }
  function lg(e, t) {
    if (e === "click") return Oi(t);
  }
  function ag(e, t) {
    if (e === "input" || e === "change")
      return Oi(t);
  }
  function rg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ht = typeof Object.is == "function" ? Object.is : rg;
  function Or(e, t) {
    if (Ht(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!Ql.call(t, a) || !Ht(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function Ic(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Kc(e, t) {
    var n = Ic(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
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
      n = Ic(n);
    }
  }
  function Pc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zc(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Na(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Na(e.document);
    }
    return t;
  }
  function uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var ig = Hn && "documentMode" in document && 11 >= document.documentMode, Ma = null, su = null, Cr = null, cu = !1;
  function Wc(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    cu || Ma == null || Ma !== Na(l) || (l = Ma, "selectionStart" in l && uu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Cr && Or(Cr, l) || (Cr = l, l = vo(su, "onSelect"), 0 < l.length && (t = new zi(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = Ma)));
  }
  function na(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var La = {
    animationend: na("Animation", "AnimationEnd"),
    animationiteration: na("Animation", "AnimationIteration"),
    animationstart: na("Animation", "AnimationStart"),
    transitionrun: na("Transition", "TransitionRun"),
    transitionstart: na("Transition", "TransitionStart"),
    transitioncancel: na("Transition", "TransitionCancel"),
    transitionend: na("Transition", "TransitionEnd")
  }, fu = {}, Jc = {};
  Hn && (Jc = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);
  function la(e) {
    if (fu[e]) return fu[e];
    if (!La[e]) return e;
    var t = La[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Jc)
        return fu[e] = t[n];
    return e;
  }
  var ef = la("animationend"), tf = la("animationiteration"), nf = la("animationstart"), og = la("transitionrun"), ug = la("transitionstart"), sg = la("transitioncancel"), lf = la("transitionend"), af = /* @__PURE__ */ new Map(), du = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  du.push("scrollEnd");
  function mn(e, t) {
    af.set(e, t), Tn(t, [e]);
  }
  var Ci = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof i == "object" && typeof i.emit == "function") {
      i.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Pt = [], Ua = 0, pu = 0;
  function Di() {
    for (var e = Ua, t = pu = Ua = 0; t < e; ) {
      var n = Pt[t];
      Pt[t++] = null;
      var l = Pt[t];
      Pt[t++] = null;
      var a = Pt[t];
      Pt[t++] = null;
      var r = Pt[t];
      if (Pt[t++] = null, l !== null && a !== null) {
        var u = l.pending;
        u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a;
      }
      r !== 0 && rf(n, a, r);
    }
  }
  function Ri(e, t, n, l) {
    Pt[Ua++] = e, Pt[Ua++] = t, Pt[Ua++] = n, Pt[Ua++] = l, pu |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function mu(e, t, n, l) {
    return Ri(e, t, n, l), Mi(e);
  }
  function aa(e, t) {
    return Ri(e, null, null, t), Mi(e);
  }
  function rf(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, r = e.return; r !== null; )
      r.childLanes |= n, l = r.alternate, l !== null && (l.childLanes |= n), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (a = !0)), e = r, r = r.return;
    return e.tag === 3 ? (r = e.stateNode, a && t !== null && (a = 31 - rt(n), e = r.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), r) : null;
  }
  function Mi(e) {
    if (50 < Jr)
      throw Jr = 0, ks = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ja = {};
  function cg(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Bt(e, t, n, l) {
    return new cg(e, t, n, l);
  }
  function hu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Bn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Bt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function of(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Li(e, t, n, l, a, r) {
    var u = 0;
    if (l = e, typeof e == "function") hu(e) && (u = 1);
    else if (typeof e == "string")
      u = hy(
        e,
        n,
        ge.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case He:
          return e = Bt(31, n, t, a), e.elementType = He, e.lanes = r, e;
        case W:
          return ra(n.children, a, r, t);
        case ee:
          u = 8, a |= 24;
          break;
        case B:
          return e = Bt(12, n, t, a | 2), e.elementType = B, e.lanes = r, e;
        case G:
          return e = Bt(13, n, t, a), e.elementType = G, e.lanes = r, e;
        case V:
          return e = Bt(19, n, t, a), e.elementType = V, e.lanes = r, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case P:
                u = 10;
                break e;
              case be:
                u = 9;
                break e;
              case ne:
                u = 11;
                break e;
              case Z:
                u = 14;
                break e;
              case Ee:
                u = 16, l = null;
                break e;
            }
          u = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Bt(u, n, t, a), t.elementType = e, t.type = l, t.lanes = r, t;
  }
  function ra(e, t, n, l) {
    return e = Bt(7, e, l, t), e.lanes = n, e;
  }
  function gu(e, t, n) {
    return e = Bt(6, e, null, t), e.lanes = n, e;
  }
  function uf(e) {
    var t = Bt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function yu(e, t, n) {
    return t = Bt(
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
  var sf = /* @__PURE__ */ new WeakMap();
  function Zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = sf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: fr(t)
      }, sf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: fr(t)
    };
  }
  var Ha = [], Ba = 0, Ui = null, Dr = 0, Wt = [], Jt = 0, gl = null, En = 1, xn = "";
  function qn(e, t) {
    Ha[Ba++] = Dr, Ha[Ba++] = Ui, Ui = e, Dr = t;
  }
  function cf(e, t, n) {
    Wt[Jt++] = En, Wt[Jt++] = xn, Wt[Jt++] = gl, gl = e;
    var l = En;
    e = xn;
    var a = 32 - rt(l) - 1;
    l &= ~(1 << a), n += 1;
    var r = 32 - rt(t) + a;
    if (30 < r) {
      var u = a - a % 5;
      r = (l & (1 << u) - 1).toString(32), l >>= u, a -= u, En = 1 << 32 - rt(t) + a | n << a | l, xn = r + e;
    } else
      En = 1 << r | n << a | l, xn = e;
  }
  function bu(e) {
    e.return !== null && (qn(e, 1), cf(e, 1, 0));
  }
  function vu(e) {
    for (; e === Ui; )
      Ui = Ha[--Ba], Ha[Ba] = null, Dr = Ha[--Ba], Ha[Ba] = null;
    for (; e === gl; )
      gl = Wt[--Jt], Wt[Jt] = null, xn = Wt[--Jt], Wt[Jt] = null, En = Wt[--Jt], Wt[Jt] = null;
  }
  function ff(e, t) {
    Wt[Jt++] = En, Wt[Jt++] = xn, Wt[Jt++] = gl, En = t.id, xn = t.overflow, gl = e;
  }
  var ot = null, Le = null, he = !1, yl = null, en = !1, Su = Error(c(519));
  function bl(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Rr(Zt(t, e)), Su;
  }
  function df(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[oe] = e, t[Fe] = l, n) {
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
        for (n = 0; n < ti.length; n++)
          fe(ti[n], t);
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
        fe("invalid", t), Oa(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        fe("invalid", t);
        break;
      case "textarea":
        fe("invalid", t), j(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Np(t.textContent, n) ? (l.popover != null && (fe("beforetoggle", t), fe("toggle", t)), l.onScroll != null && fe("scroll", t), l.onScrollEnd != null && fe("scrollend", t), l.onClick != null && (t.onclick = it), t = !0) : t = !1, t || bl(e, !0);
  }
  function pf(e) {
    for (ot = e.return; ot; )
      switch (ot.tag) {
        case 5:
        case 31:
        case 13:
          en = !1;
          return;
        case 27:
        case 3:
          en = !0;
          return;
        default:
          ot = ot.return;
      }
  }
  function qa(e) {
    if (e !== ot) return !1;
    if (!he) return pf(e), he = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Hs(e.type, e.memoizedProps)), n = !n), n && Le && bl(e), pf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = Hp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = Hp(e);
    } else
      t === 27 ? (t = Le, Dl(e.type) ? (e = Ys, Ys = null, Le = e) : Le = t) : Le = ot ? tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ia() {
    Le = ot = null, he = !1;
  }
  function wu() {
    var e = yl;
    return e !== null && (Dt === null ? Dt = e : Dt.push.apply(
      Dt,
      e
    ), yl = null), e;
  }
  function Rr(e) {
    yl === null ? yl = [e] : yl.push(e);
  }
  var Tu = we(null), oa = null, Gn = null;
  function vl(e, t, n) {
    I(Tu, t._currentValue), t._currentValue = n;
  }
  function Vn(e) {
    e._currentValue = Tu.current, ue(Tu);
  }
  function ku(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Eu(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var r = a.dependencies;
      if (r !== null) {
        var u = a.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var f = r;
          r = a;
          for (var p = 0; p < t.length; p++)
            if (f.context === t[p]) {
              r.lanes |= n, f = r.alternate, f !== null && (f.lanes |= n), ku(
                r.return,
                n,
                e
              ), l || (u = null);
              break e;
            }
          r = f.next;
        }
      } else if (a.tag === 18) {
        if (u = a.return, u === null) throw Error(c(341));
        u.lanes |= n, r = u.alternate, r !== null && (r.lanes |= n), ku(u, n, e), u = null;
      } else u = a.child;
      if (u !== null) u.return = a;
      else
        for (u = a; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          if (a = u.sibling, a !== null) {
            a.return = u.return, u = a;
            break;
          }
          u = u.return;
        }
      a = u;
    }
  }
  function Ga(e, t, n, l) {
    e = null;
    for (var a = t, r = !1; a !== null; ) {
      if (!r) {
        if ((a.flags & 524288) !== 0) r = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var u = a.alternate;
        if (u === null) throw Error(c(387));
        if (u = u.memoizedProps, u !== null) {
          var f = a.type;
          Ht(a.pendingProps.value, u.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (a === fn.current) {
        if (u = a.alternate, u === null) throw Error(c(387));
        u.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(ii) : e = [ii]);
      }
      a = a.return;
    }
    e !== null && Eu(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function ji(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ht(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ua(e) {
    oa = e, Gn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ut(e) {
    return mf(oa, e);
  }
  function Hi(e, t) {
    return oa === null && ua(e), mf(e, t);
  }
  function mf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Gn === null) {
      if (e === null) throw Error(c(308));
      Gn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Gn = Gn.next = t;
    return n;
  }
  var fg = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, dg = o.unstable_scheduleCallback, pg = o.unstable_NormalPriority, Ie = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function xu() {
    return {
      controller: new fg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Mr(e) {
    e.refCount--, e.refCount === 0 && dg(pg, function() {
      e.controller.abort();
    });
  }
  var Lr = null, Au = 0, Va = 0, Ya = null;
  function mg(e, t) {
    if (Lr === null) {
      var n = Lr = [];
      Au = 0, Va = Ns(), Ya = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Au++, t.then(hf, hf), t;
  }
  function hf() {
    if (--Au === 0 && Lr !== null) {
      Ya !== null && (Ya.status = "fulfilled");
      var e = Lr;
      Lr = null, Va = 0, Ya = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function hg(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        n.push(a);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var a = 0; a < n.length; a++) (0, n[a])(t);
      },
      function(a) {
        for (l.status = "rejected", l.reason = a, a = 0; a < n.length; a++)
          (0, n[a])(void 0);
      }
    ), l;
  }
  var gf = R.S;
  R.S = function(e, t) {
    Jd = Ye(), typeof t == "object" && t !== null && typeof t.then == "function" && mg(e, t), gf !== null && gf(e, t);
  };
  var sa = we(null);
  function _u() {
    var e = sa.current;
    return e !== null ? e : Ce.pooledCache;
  }
  function Bi(e, t) {
    t === null ? I(sa, sa.current) : I(sa, t.pool);
  }
  function yf() {
    var e = _u();
    return e === null ? null : { parent: Ie._currentValue, pool: e };
  }
  var Fa = Error(c(460)), zu = Error(c(474)), qi = Error(c(542)), Gi = { then: function() {
  } };
  function bf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function vf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(it, it), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, wf(e), e;
      default:
        if (typeof t.status == "string") t.then(it, it);
        else {
          if (e = Ce, e !== null && 100 < e.shellSuspendCounter)
            throw Error(c(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, wf(e), e;
        }
        throw fa = t, Fa;
    }
  }
  function ca(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (fa = n, Fa) : n;
    }
  }
  var fa = null;
  function Sf() {
    if (fa === null) throw Error(c(459));
    var e = fa;
    return fa = null, e;
  }
  function wf(e) {
    if (e === Fa || e === qi)
      throw Error(c(483));
  }
  var Xa = null, Ur = 0;
  function Vi(e) {
    var t = Ur;
    return Ur += 1, Xa === null && (Xa = []), vf(Xa, e, t);
  }
  function jr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Yi(e, t) {
    throw t.$$typeof === te ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Tf(e) {
    function t(v, y) {
      if (e) {
        var S = v.deletions;
        S === null ? (v.deletions = [y], v.flags |= 16) : S.push(y);
      }
    }
    function n(v, y) {
      if (!e) return null;
      for (; y !== null; )
        t(v, y), y = y.sibling;
      return null;
    }
    function l(v) {
      for (var y = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? y.set(v.key, v) : y.set(v.index, v), v = v.sibling;
      return y;
    }
    function a(v, y) {
      return v = Bn(v, y), v.index = 0, v.sibling = null, v;
    }
    function r(v, y, S) {
      return v.index = S, e ? (S = v.alternate, S !== null ? (S = S.index, S < y ? (v.flags |= 67108866, y) : S) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
    }
    function u(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function f(v, y, S, N) {
      return y === null || y.tag !== 6 ? (y = gu(S, v.mode, N), y.return = v, y) : (y = a(y, S), y.return = v, y);
    }
    function p(v, y, S, N) {
      var K = S.type;
      return K === W ? z(
        v,
        y,
        S.props.children,
        N,
        S.key
      ) : y !== null && (y.elementType === K || typeof K == "object" && K !== null && K.$$typeof === Ee && ca(K) === y.type) ? (y = a(y, S.props), jr(y, S), y.return = v, y) : (y = Li(
        S.type,
        S.key,
        S.props,
        null,
        v.mode,
        N
      ), jr(y, S), y.return = v, y);
    }
    function w(v, y, S, N) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== S.containerInfo || y.stateNode.implementation !== S.implementation ? (y = yu(S, v.mode, N), y.return = v, y) : (y = a(y, S.children || []), y.return = v, y);
    }
    function z(v, y, S, N, K) {
      return y === null || y.tag !== 7 ? (y = ra(
        S,
        v.mode,
        N,
        K
      ), y.return = v, y) : (y = a(y, S), y.return = v, y);
    }
    function C(v, y, S) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = gu(
          "" + y,
          v.mode,
          S
        ), y.return = v, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case q:
            return S = Li(
              y.type,
              y.key,
              y.props,
              null,
              v.mode,
              S
            ), jr(S, y), S.return = v, S;
          case X:
            return y = yu(
              y,
              v.mode,
              S
            ), y.return = v, y;
          case Ee:
            return y = ca(y), C(v, y, S);
        }
        if (U(y) || _e(y))
          return y = ra(
            y,
            v.mode,
            S,
            null
          ), y.return = v, y;
        if (typeof y.then == "function")
          return C(v, Vi(y), S);
        if (y.$$typeof === P)
          return C(
            v,
            Hi(v, y),
            S
          );
        Yi(v, y);
      }
      return null;
    }
    function k(v, y, S, N) {
      var K = y !== null ? y.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return K !== null ? null : f(v, y, "" + S, N);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case q:
            return S.key === K ? p(v, y, S, N) : null;
          case X:
            return S.key === K ? w(v, y, S, N) : null;
          case Ee:
            return S = ca(S), k(v, y, S, N);
        }
        if (U(S) || _e(S))
          return K !== null ? null : z(v, y, S, N, null);
        if (typeof S.then == "function")
          return k(
            v,
            y,
            Vi(S),
            N
          );
        if (S.$$typeof === P)
          return k(
            v,
            y,
            Hi(v, S),
            N
          );
        Yi(v, S);
      }
      return null;
    }
    function E(v, y, S, N, K) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return v = v.get(S) || null, f(y, v, "" + N, K);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case q:
            return v = v.get(
              N.key === null ? S : N.key
            ) || null, p(y, v, N, K);
          case X:
            return v = v.get(
              N.key === null ? S : N.key
            ) || null, w(y, v, N, K);
          case Ee:
            return N = ca(N), E(
              v,
              y,
              S,
              N,
              K
            );
        }
        if (U(N) || _e(N))
          return v = v.get(S) || null, z(y, v, N, K, null);
        if (typeof N.then == "function")
          return E(
            v,
            y,
            S,
            Vi(N),
            K
          );
        if (N.$$typeof === P)
          return E(
            v,
            y,
            S,
            Hi(y, N),
            K
          );
        Yi(y, N);
      }
      return null;
    }
    function F(v, y, S, N) {
      for (var K = null, ve = null, Q = y, ae = y = 0, pe = null; Q !== null && ae < S.length; ae++) {
        Q.index > ae ? (pe = Q, Q = null) : pe = Q.sibling;
        var Se = k(
          v,
          Q,
          S[ae],
          N
        );
        if (Se === null) {
          Q === null && (Q = pe);
          break;
        }
        e && Q && Se.alternate === null && t(v, Q), y = r(Se, y, ae), ve === null ? K = Se : ve.sibling = Se, ve = Se, Q = pe;
      }
      if (ae === S.length)
        return n(v, Q), he && qn(v, ae), K;
      if (Q === null) {
        for (; ae < S.length; ae++)
          Q = C(v, S[ae], N), Q !== null && (y = r(
            Q,
            y,
            ae
          ), ve === null ? K = Q : ve.sibling = Q, ve = Q);
        return he && qn(v, ae), K;
      }
      for (Q = l(Q); ae < S.length; ae++)
        pe = E(
          Q,
          v,
          ae,
          S[ae],
          N
        ), pe !== null && (e && pe.alternate !== null && Q.delete(
          pe.key === null ? ae : pe.key
        ), y = r(
          pe,
          y,
          ae
        ), ve === null ? K = pe : ve.sibling = pe, ve = pe);
      return e && Q.forEach(function(jl) {
        return t(v, jl);
      }), he && qn(v, ae), K;
    }
    function J(v, y, S, N) {
      if (S == null) throw Error(c(151));
      for (var K = null, ve = null, Q = y, ae = y = 0, pe = null, Se = S.next(); Q !== null && !Se.done; ae++, Se = S.next()) {
        Q.index > ae ? (pe = Q, Q = null) : pe = Q.sibling;
        var jl = k(v, Q, Se.value, N);
        if (jl === null) {
          Q === null && (Q = pe);
          break;
        }
        e && Q && jl.alternate === null && t(v, Q), y = r(jl, y, ae), ve === null ? K = jl : ve.sibling = jl, ve = jl, Q = pe;
      }
      if (Se.done)
        return n(v, Q), he && qn(v, ae), K;
      if (Q === null) {
        for (; !Se.done; ae++, Se = S.next())
          Se = C(v, Se.value, N), Se !== null && (y = r(Se, y, ae), ve === null ? K = Se : ve.sibling = Se, ve = Se);
        return he && qn(v, ae), K;
      }
      for (Q = l(Q); !Se.done; ae++, Se = S.next())
        Se = E(Q, v, ae, Se.value, N), Se !== null && (e && Se.alternate !== null && Q.delete(Se.key === null ? ae : Se.key), y = r(Se, y, ae), ve === null ? K = Se : ve.sibling = Se, ve = Se);
      return e && Q.forEach(function(Ay) {
        return t(v, Ay);
      }), he && qn(v, ae), K;
    }
    function Oe(v, y, S, N) {
      if (typeof S == "object" && S !== null && S.type === W && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case q:
            e: {
              for (var K = S.key; y !== null; ) {
                if (y.key === K) {
                  if (K = S.type, K === W) {
                    if (y.tag === 7) {
                      n(
                        v,
                        y.sibling
                      ), N = a(
                        y,
                        S.props.children
                      ), N.return = v, v = N;
                      break e;
                    }
                  } else if (y.elementType === K || typeof K == "object" && K !== null && K.$$typeof === Ee && ca(K) === y.type) {
                    n(
                      v,
                      y.sibling
                    ), N = a(y, S.props), jr(N, S), N.return = v, v = N;
                    break e;
                  }
                  n(v, y);
                  break;
                } else t(v, y);
                y = y.sibling;
              }
              S.type === W ? (N = ra(
                S.props.children,
                v.mode,
                N,
                S.key
              ), N.return = v, v = N) : (N = Li(
                S.type,
                S.key,
                S.props,
                null,
                v.mode,
                N
              ), jr(N, S), N.return = v, v = N);
            }
            return u(v);
          case X:
            e: {
              for (K = S.key; y !== null; ) {
                if (y.key === K)
                  if (y.tag === 4 && y.stateNode.containerInfo === S.containerInfo && y.stateNode.implementation === S.implementation) {
                    n(
                      v,
                      y.sibling
                    ), N = a(y, S.children || []), N.return = v, v = N;
                    break e;
                  } else {
                    n(v, y);
                    break;
                  }
                else t(v, y);
                y = y.sibling;
              }
              N = yu(S, v.mode, N), N.return = v, v = N;
            }
            return u(v);
          case Ee:
            return S = ca(S), Oe(
              v,
              y,
              S,
              N
            );
        }
        if (U(S))
          return F(
            v,
            y,
            S,
            N
          );
        if (_e(S)) {
          if (K = _e(S), typeof K != "function") throw Error(c(150));
          return S = K.call(S), J(
            v,
            y,
            S,
            N
          );
        }
        if (typeof S.then == "function")
          return Oe(
            v,
            y,
            Vi(S),
            N
          );
        if (S.$$typeof === P)
          return Oe(
            v,
            y,
            Hi(v, S),
            N
          );
        Yi(v, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, y !== null && y.tag === 6 ? (n(v, y.sibling), N = a(y, S), N.return = v, v = N) : (n(v, y), N = gu(S, v.mode, N), N.return = v, v = N), u(v)) : n(v, y);
    }
    return function(v, y, S, N) {
      try {
        Ur = 0;
        var K = Oe(
          v,
          y,
          S,
          N
        );
        return Xa = null, K;
      } catch (Q) {
        if (Q === Fa || Q === qi) throw Q;
        var ve = Bt(29, Q, null, v.mode);
        return ve.lanes = N, ve.return = v, ve;
      } finally {
      }
    };
  }
  var da = Tf(!0), kf = Tf(!1), Sl = !1;
  function Nu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ou(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function wl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Te & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = Mi(e), rf(e, null, n), t;
    }
    return Ri(e, l, t, n), Mi(e);
  }
  function Hr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, xa(e, n);
    }
  }
  function Cu(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var a = null, r = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          r === null ? a = r = u : r = r.next = u, n = n.next;
        } while (n !== null);
        r === null ? a = r = t : r = r.next = t;
      } else a = r = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: r,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Du = !1;
  function Br() {
    if (Du) {
      var e = Ya;
      if (e !== null) throw e;
    }
  }
  function qr(e, t, n, l) {
    Du = !1;
    var a = e.updateQueue;
    Sl = !1;
    var r = a.firstBaseUpdate, u = a.lastBaseUpdate, f = a.shared.pending;
    if (f !== null) {
      a.shared.pending = null;
      var p = f, w = p.next;
      p.next = null, u === null ? r = w : u.next = w, u = p;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, f = z.lastBaseUpdate, f !== u && (f === null ? z.firstBaseUpdate = w : f.next = w, z.lastBaseUpdate = p));
    }
    if (r !== null) {
      var C = a.baseState;
      u = 0, z = w = p = null, f = r;
      do {
        var k = f.lane & -536870913, E = k !== f.lane;
        if (E ? (de & k) === k : (l & k) === k) {
          k !== 0 && k === Va && (Du = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var F = e, J = f;
            k = t;
            var Oe = n;
            switch (J.tag) {
              case 1:
                if (F = J.payload, typeof F == "function") {
                  C = F.call(Oe, C, k);
                  break e;
                }
                C = F;
                break e;
              case 3:
                F.flags = F.flags & -65537 | 128;
              case 0:
                if (F = J.payload, k = typeof F == "function" ? F.call(Oe, C, k) : F, k == null) break e;
                C = D({}, C, k);
                break e;
              case 2:
                Sl = !0;
            }
          }
          k = f.callback, k !== null && (e.flags |= 64, E && (e.flags |= 8192), E = a.callbacks, E === null ? a.callbacks = [k] : E.push(k));
        } else
          E = {
            lane: k,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, z === null ? (w = z = E, p = C) : z = z.next = E, u |= k;
        if (f = f.next, f === null) {
          if (f = a.shared.pending, f === null)
            break;
          E = f, f = E.next, E.next = null, a.lastBaseUpdate = E, a.shared.pending = null;
        }
      } while (!0);
      z === null && (p = C), a.baseState = p, a.firstBaseUpdate = w, a.lastBaseUpdate = z, r === null && (a.shared.lanes = 0), _l |= u, e.lanes = u, e.memoizedState = C;
    }
  }
  function Ef(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function xf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Ef(n[e], t);
  }
  var Qa = we(null), Fi = we(0);
  function Af(e, t) {
    e = Zn, I(Fi, e), I(Qa, t), Zn = e | t.baseLanes;
  }
  function Ru() {
    I(Fi, Zn), I(Qa, Qa.current);
  }
  function Mu() {
    Zn = Fi.current, ue(Qa), ue(Fi);
  }
  var qt = we(null), sn = null;
  function kl(e) {
    var t = e.alternate;
    I(Xe, Xe.current & 1), I(qt, e), sn === null && (t === null || Qa.current !== null || t.memoizedState !== null) && (sn = e);
  }
  function Lu(e) {
    I(Xe, Xe.current), I(qt, e), sn === null && (sn = e);
  }
  function _f(e) {
    e.tag === 22 ? (I(Xe, Xe.current), I(qt, e), sn === null && (sn = e)) : El();
  }
  function El() {
    I(Xe, Xe.current), I(qt, qt.current);
  }
  function Gt(e) {
    ue(qt), sn === e && (sn = null), ue(Xe);
  }
  var Xe = we(0);
  function Xi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Gs(n) || Vs(n)))
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
  var Yn = 0, le = null, ze = null, Ke = null, Qi = !1, $a = !1, pa = !1, $i = 0, Gr = 0, Ia = null, gg = 0;
  function Ge() {
    throw Error(c(321));
  }
  function Uu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function ju(e, t, n, l, a, r) {
    return Yn = r, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? cd : Wu, pa = !1, r = n(l, a), pa = !1, $a && (r = Nf(
      t,
      n,
      l,
      a
    )), zf(e), r;
  }
  function zf(e) {
    R.H = Fr;
    var t = ze !== null && ze.next !== null;
    if (Yn = 0, Ke = ze = le = null, Qi = !1, Gr = 0, Ia = null, t) throw Error(c(300));
    e === null || Pe || (e = e.dependencies, e !== null && ji(e) && (Pe = !0));
  }
  function Nf(e, t, n, l) {
    le = e;
    var a = 0;
    do {
      if ($a && (Ia = null), Gr = 0, $a = !1, 25 <= a) throw Error(c(301));
      if (a += 1, Ke = ze = null, e.updateQueue != null) {
        var r = e.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      R.H = fd, r = t(n, l);
    } while ($a);
    return r;
  }
  function yg() {
    var e = R.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Vr(t) : t, e = e.useState()[0], (ze !== null ? ze.memoizedState : null) !== e && (le.flags |= 1024), t;
  }
  function Hu() {
    var e = $i !== 0;
    return $i = 0, e;
  }
  function Bu(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function qu(e) {
    if (Qi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Qi = !1;
    }
    Yn = 0, Ke = ze = le = null, $a = !1, Gr = $i = 0, Ia = null;
  }
  function vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ke === null ? le.memoizedState = Ke = e : Ke = Ke.next = e, Ke;
  }
  function Qe() {
    if (ze === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = Ke === null ? le.memoizedState : Ke.next;
    if (t !== null)
      Ke = t, ze = e;
    else {
      if (e === null)
        throw le.alternate === null ? Error(c(467)) : Error(c(310));
      ze = e, e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null
      }, Ke === null ? le.memoizedState = Ke = e : Ke = Ke.next = e;
    }
    return Ke;
  }
  function Ii() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vr(e) {
    var t = Gr;
    return Gr += 1, Ia === null && (Ia = []), e = vf(Ia, e, t), t = le, (Ke === null ? t.memoizedState : Ke.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? cd : Wu), e;
  }
  function Ki(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Vr(e);
      if (e.$$typeof === P) return ut(e);
    }
    throw Error(c(438, String(e)));
  }
  function Gu(e) {
    var t = null, n = le.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = le.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Ii(), le.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = qe;
    return t.index++, n;
  }
  function Fn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pi(e) {
    var t = Qe();
    return Vu(t, ze, e);
  }
  function Vu(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var a = e.baseQueue, r = l.pending;
    if (r !== null) {
      if (a !== null) {
        var u = a.next;
        a.next = r.next, r.next = u;
      }
      t.baseQueue = a = r, l.pending = null;
    }
    if (r = e.baseState, a === null) e.memoizedState = r;
    else {
      t = a.next;
      var f = u = null, p = null, w = t, z = !1;
      do {
        var C = w.lane & -536870913;
        if (C !== w.lane ? (de & C) === C : (Yn & C) === C) {
          var k = w.revertLane;
          if (k === 0)
            p !== null && (p = p.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }), C === Va && (z = !0);
          else if ((Yn & k) === k) {
            w = w.next, k === Va && (z = !0);
            continue;
          } else
            C = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }, p === null ? (f = p = C, u = r) : p = p.next = C, le.lanes |= k, _l |= k;
          C = w.action, pa && n(r, C), r = w.hasEagerState ? w.eagerState : n(r, C);
        } else
          k = {
            lane: C,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          }, p === null ? (f = p = k, u = r) : p = p.next = k, le.lanes |= C, _l |= C;
        w = w.next;
      } while (w !== null && w !== t);
      if (p === null ? u = r : p.next = f, !Ht(r, e.memoizedState) && (Pe = !0, z && (n = Ya, n !== null)))
        throw n;
      e.memoizedState = r, e.baseState = u, e.baseQueue = p, l.lastRenderedState = r;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Yu(e) {
    var t = Qe(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, r = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var u = a = a.next;
      do
        r = e(r, u.action), u = u.next;
      while (u !== a);
      Ht(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), n.lastRenderedState = r;
    }
    return [r, l];
  }
  function Of(e, t, n) {
    var l = le, a = Qe(), r = he;
    if (r) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var u = !Ht(
      (ze || a).memoizedState,
      n
    );
    if (u && (a.memoizedState = n, Pe = !0), a = a.queue, Qu(Rf.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || u || Ke !== null && Ke.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ka(
        9,
        { destroy: void 0 },
        Df.bind(
          null,
          l,
          a,
          n,
          t
        ),
        null
      ), Ce === null) throw Error(c(349));
      r || (Yn & 127) !== 0 || Cf(l, t, n);
    }
    return n;
  }
  function Cf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = le.updateQueue, t === null ? (t = Ii(), le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Df(e, t, n, l) {
    t.value = n, t.getSnapshot = l, Mf(t) && Lf(e);
  }
  function Rf(e, t, n) {
    return n(function() {
      Mf(t) && Lf(e);
    });
  }
  function Mf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ht(e, n);
    } catch {
      return !0;
    }
  }
  function Lf(e) {
    var t = aa(e, 2);
    t !== null && Rt(t, e, 2);
  }
  function Fu(e) {
    var t = vt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), pa) {
        $t(!0);
        try {
          n();
        } finally {
          $t(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fn,
      lastRenderedState: e
    }, t;
  }
  function Uf(e, t, n, l) {
    return e.baseState = n, Vu(
      e,
      ze,
      typeof l == "function" ? l : Fn
    );
  }
  function bg(e, t, n, l, a) {
    if (Ji(e)) throw Error(c(485));
    if (e = t.action, e !== null) {
      var r = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(u) {
          r.listeners.push(u);
        }
      };
      R.T !== null ? n(!0) : r.isTransition = !1, l(r), n = t.pending, n === null ? (r.next = t.pending = r, jf(t, r)) : (r.next = n.next, t.pending = n.next = r);
    }
  }
  function jf(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var r = R.T, u = {};
      R.T = u;
      try {
        var f = n(a, l), p = R.S;
        p !== null && p(u, f), Hf(e, t, f);
      } catch (w) {
        Xu(e, t, w);
      } finally {
        r !== null && u.types !== null && (r.types = u.types), R.T = r;
      }
    } else
      try {
        r = n(a, l), Hf(e, t, r);
      } catch (w) {
        Xu(e, t, w);
      }
  }
  function Hf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Bf(e, t, l);
      },
      function(l) {
        return Xu(e, t, l);
      }
    ) : Bf(e, t, n);
  }
  function Bf(e, t, n) {
    t.status = "fulfilled", t.value = n, qf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, jf(e, n)));
  }
  function Xu(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, qf(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function qf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Gf(e, t) {
    return t;
  }
  function Vf(e, t) {
    if (he) {
      var n = Ce.formState;
      if (n !== null) {
        e: {
          var l = le;
          if (he) {
            if (Le) {
              t: {
                for (var a = Le, r = en; a.nodeType !== 8; ) {
                  if (!r) {
                    a = null;
                    break t;
                  }
                  if (a = tn(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                r = a.data, a = r === "F!" || r === "F" ? a : null;
              }
              if (a) {
                Le = tn(
                  a.nextSibling
                ), l = a.data === "F!";
                break e;
              }
            }
            bl(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = vt(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gf,
      lastRenderedState: t
    }, n.queue = l, n = od.bind(
      null,
      le,
      l
    ), l.dispatch = n, l = Fu(!1), r = Zu.bind(
      null,
      le,
      !1,
      l.queue
    ), l = vt(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = bg.bind(
      null,
      le,
      a,
      r,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Yf(e) {
    var t = Qe();
    return Ff(t, ze, e);
  }
  function Ff(e, t, n) {
    if (t = Vu(
      e,
      t,
      Gf
    )[0], e = Pi(Fn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Vr(t);
      } catch (u) {
        throw u === Fa ? qi : u;
      }
    else l = t;
    t = Qe();
    var a = t.queue, r = a.dispatch;
    return n !== t.memoizedState && (le.flags |= 2048, Ka(
      9,
      { destroy: void 0 },
      vg.bind(null, a, n),
      null
    )), [l, r, e];
  }
  function vg(e, t) {
    e.action = t;
  }
  function Xf(e) {
    var t = Qe(), n = ze;
    if (n !== null)
      return Ff(t, n, e);
    Qe(), t = t.memoizedState, n = Qe();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function Ka(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = le.updateQueue, t === null && (t = Ii(), le.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Qf() {
    return Qe().memoizedState;
  }
  function Zi(e, t, n, l) {
    var a = vt();
    le.flags |= e, a.memoizedState = Ka(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function Wi(e, t, n, l) {
    var a = Qe();
    l = l === void 0 ? null : l;
    var r = a.memoizedState.inst;
    ze !== null && l !== null && Uu(l, ze.memoizedState.deps) ? a.memoizedState = Ka(t, r, n, l) : (le.flags |= e, a.memoizedState = Ka(
      1 | t,
      r,
      n,
      l
    ));
  }
  function $f(e, t) {
    Zi(8390656, 8, e, t);
  }
  function Qu(e, t) {
    Wi(2048, 8, e, t);
  }
  function Sg(e) {
    le.flags |= 4;
    var t = le.updateQueue;
    if (t === null)
      t = Ii(), le.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function If(e) {
    var t = Qe().memoizedState;
    return Sg({ ref: t, nextImpl: e }), function() {
      if ((Te & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Kf(e, t) {
    return Wi(4, 2, e, t);
  }
  function Pf(e, t) {
    return Wi(4, 4, e, t);
  }
  function Zf(e, t) {
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
  function Wf(e, t, n) {
    n = n != null ? n.concat([e]) : null, Wi(4, 4, Zf.bind(null, t, e), n);
  }
  function $u() {
  }
  function Jf(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Uu(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function ed(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Uu(t, l[1]))
      return l[0];
    if (l = e(), pa) {
      $t(!0);
      try {
        e();
      } finally {
        $t(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Iu(e, t, n) {
    return n === void 0 || (Yn & 1073741824) !== 0 && (de & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = tp(), le.lanes |= e, _l |= e, n);
  }
  function td(e, t, n, l) {
    return Ht(n, t) ? n : Qa.current !== null ? (e = Iu(e, n, l), Ht(e, t) || (Pe = !0), e) : (Yn & 42) === 0 || (Yn & 1073741824) !== 0 && (de & 261930) === 0 ? (Pe = !0, e.memoizedState = n) : (e = tp(), le.lanes |= e, _l |= e, t);
  }
  function nd(e, t, n, l, a) {
    var r = H.p;
    H.p = r !== 0 && 8 > r ? r : 8;
    var u = R.T, f = {};
    R.T = f, Zu(e, !1, t, n);
    try {
      var p = a(), w = R.S;
      if (w !== null && w(f, p), p !== null && typeof p == "object" && typeof p.then == "function") {
        var z = hg(
          p,
          l
        );
        Yr(
          e,
          t,
          z,
          Ft(e)
        );
      } else
        Yr(
          e,
          t,
          l,
          Ft(e)
        );
    } catch (C) {
      Yr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: C },
        Ft()
      );
    } finally {
      H.p = r, u !== null && f.types !== null && (u.types = f.types), R.T = u;
    }
  }
  function wg() {
  }
  function Ku(e, t, n, l) {
    if (e.tag !== 5) throw Error(c(476));
    var a = ld(e).queue;
    nd(
      e,
      a,
      t,
      re,
      n === null ? wg : function() {
        return ad(e), n(l);
      }
    );
  }
  function ld(e) {
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
        lastRenderedReducer: Fn,
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
        lastRenderedReducer: Fn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function ad(e) {
    var t = ld(e);
    t.next === null && (t = e.alternate.memoizedState), Yr(
      e,
      t.next.queue,
      {},
      Ft()
    );
  }
  function Pu() {
    return ut(ii);
  }
  function rd() {
    return Qe().memoizedState;
  }
  function id() {
    return Qe().memoizedState;
  }
  function Tg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Ft();
          e = wl(n);
          var l = Tl(t, e, n);
          l !== null && (Rt(l, t, n), Hr(l, t, n)), t = { cache: xu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function kg(e, t, n) {
    var l = Ft();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ji(e) ? ud(t, n) : (n = mu(e, t, n, l), n !== null && (Rt(n, e, l), sd(n, t, l)));
  }
  function od(e, t, n) {
    var l = Ft();
    Yr(e, t, n, l);
  }
  function Yr(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ji(e)) ud(t, a);
    else {
      var r = e.alternate;
      if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null))
        try {
          var u = t.lastRenderedState, f = r(u, n);
          if (a.hasEagerState = !0, a.eagerState = f, Ht(f, u))
            return Ri(e, t, a, 0), Ce === null && Di(), !1;
        } catch {
        } finally {
        }
      if (n = mu(e, t, a, l), n !== null)
        return Rt(n, e, l), sd(n, t, l), !0;
    }
    return !1;
  }
  function Zu(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Ns(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ji(e)) {
      if (t) throw Error(c(479));
    } else
      t = mu(
        e,
        n,
        l,
        2
      ), t !== null && Rt(t, e, 2);
  }
  function Ji(e) {
    var t = e.alternate;
    return e === le || t !== null && t === le;
  }
  function ud(e, t) {
    $a = Qi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function sd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, xa(e, n);
    }
  }
  var Fr = {
    readContext: ut,
    use: Ki,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useLayoutEffect: Ge,
    useInsertionEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    useHostTransitionStatus: Ge,
    useFormState: Ge,
    useActionState: Ge,
    useOptimistic: Ge,
    useMemoCache: Ge,
    useCacheRefresh: Ge
  };
  Fr.useEffectEvent = Ge;
  var cd = {
    readContext: ut,
    use: Ki,
    useCallback: function(e, t) {
      return vt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ut,
    useEffect: $f,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Zi(
        4194308,
        4,
        Zf.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Zi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Zi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = vt();
      t = t === void 0 ? null : t;
      var l = e();
      if (pa) {
        $t(!0);
        try {
          e();
        } finally {
          $t(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = vt();
      if (n !== void 0) {
        var a = n(t);
        if (pa) {
          $t(!0);
          try {
            n(t);
          } finally {
            $t(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = kg.bind(
        null,
        le,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = vt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Fu(e);
      var t = e.queue, n = od.bind(null, le, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: $u,
    useDeferredValue: function(e, t) {
      var n = vt();
      return Iu(n, e, t);
    },
    useTransition: function() {
      var e = Fu(!1);
      return e = nd.bind(
        null,
        le,
        e.queue,
        !0,
        !1
      ), vt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = le, a = vt();
      if (he) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Ce === null)
          throw Error(c(349));
        (de & 127) !== 0 || Cf(l, t, n);
      }
      a.memoizedState = n;
      var r = { value: n, getSnapshot: t };
      return a.queue = r, $f(Rf.bind(null, l, r, e), [
        e
      ]), l.flags |= 2048, Ka(
        9,
        { destroy: void 0 },
        Df.bind(
          null,
          l,
          r,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = vt(), t = Ce.identifierPrefix;
      if (he) {
        var n = xn, l = En;
        n = (l & ~(1 << 32 - rt(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = $i++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = gg++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Pu,
    useFormState: Vf,
    useActionState: Vf,
    useOptimistic: function(e) {
      var t = vt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Zu.bind(
        null,
        le,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Gu,
    useCacheRefresh: function() {
      return vt().memoizedState = Tg.bind(
        null,
        le
      );
    },
    useEffectEvent: function(e) {
      var t = vt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Te & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Wu = {
    readContext: ut,
    use: Ki,
    useCallback: Jf,
    useContext: ut,
    useEffect: Qu,
    useImperativeHandle: Wf,
    useInsertionEffect: Kf,
    useLayoutEffect: Pf,
    useMemo: ed,
    useReducer: Pi,
    useRef: Qf,
    useState: function() {
      return Pi(Fn);
    },
    useDebugValue: $u,
    useDeferredValue: function(e, t) {
      var n = Qe();
      return td(
        n,
        ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Pi(Fn)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Vr(e),
        t
      ];
    },
    useSyncExternalStore: Of,
    useId: rd,
    useHostTransitionStatus: Pu,
    useFormState: Yf,
    useActionState: Yf,
    useOptimistic: function(e, t) {
      var n = Qe();
      return Uf(n, ze, e, t);
    },
    useMemoCache: Gu,
    useCacheRefresh: id
  };
  Wu.useEffectEvent = If;
  var fd = {
    readContext: ut,
    use: Ki,
    useCallback: Jf,
    useContext: ut,
    useEffect: Qu,
    useImperativeHandle: Wf,
    useInsertionEffect: Kf,
    useLayoutEffect: Pf,
    useMemo: ed,
    useReducer: Yu,
    useRef: Qf,
    useState: function() {
      return Yu(Fn);
    },
    useDebugValue: $u,
    useDeferredValue: function(e, t) {
      var n = Qe();
      return ze === null ? Iu(n, e, t) : td(
        n,
        ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Yu(Fn)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Vr(e),
        t
      ];
    },
    useSyncExternalStore: Of,
    useId: rd,
    useHostTransitionStatus: Pu,
    useFormState: Xf,
    useActionState: Xf,
    useOptimistic: function(e, t) {
      var n = Qe();
      return ze !== null ? Uf(n, ze, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Gu,
    useCacheRefresh: id
  };
  fd.useEffectEvent = If;
  function Ju(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var es = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = Ft(), a = wl(l);
      a.payload = t, n != null && (a.callback = n), t = Tl(e, a, l), t !== null && (Rt(t, e, l), Hr(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = Ft(), a = wl(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Tl(e, a, l), t !== null && (Rt(t, e, l), Hr(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Ft(), l = wl(n);
      l.tag = 2, t != null && (l.callback = t), t = Tl(e, l, n), t !== null && (Rt(t, e, n), Hr(t, e, n));
    }
  };
  function dd(e, t, n, l, a, r, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, r, u) : t.prototype && t.prototype.isPureReactComponent ? !Or(n, l) || !Or(a, r) : !0;
  }
  function pd(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && es.enqueueReplaceState(t, t.state, null);
  }
  function ma(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = D({}, n));
      for (var a in e)
        n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function md(e) {
    Ci(e);
  }
  function hd(e) {
    console.error(e);
  }
  function gd(e) {
    Ci(e);
  }
  function eo(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function yd(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function ts(e, t, n) {
    return n = wl(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      eo(e, t);
    }, n;
  }
  function bd(e) {
    return e = wl(e), e.tag = 3, e;
  }
  function vd(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var r = l.value;
      e.payload = function() {
        return a(r);
      }, e.callback = function() {
        yd(t, n, l);
      };
    }
    var u = n.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      yd(t, n, l), typeof a != "function" && (zl === null ? zl = /* @__PURE__ */ new Set([this]) : zl.add(this));
      var f = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function Eg(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Ga(
        t,
        n,
        a,
        !0
      ), n = qt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return sn === null ? po() : n.alternate === null && Ve === 0 && (Ve = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === Gi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), As(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === Gi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), As(e, l, a)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return As(e, l, a), po(), !1;
    }
    if (he)
      return t = qt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== Su && (e = Error(c(422), { cause: l }), Rr(Zt(e, n)))) : (l !== Su && (t = Error(c(423), {
        cause: l
      }), Rr(
        Zt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = Zt(l, n), a = ts(
        e.stateNode,
        l,
        a
      ), Cu(e, a), Ve !== 4 && (Ve = 2)), !1;
    var r = Error(c(520), { cause: l });
    if (r = Zt(r, n), Wr === null ? Wr = [r] : Wr.push(r), Ve !== 4 && (Ve = 2), t === null) return !0;
    l = Zt(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = ts(n.stateNode, l, e), Cu(n, e), !1;
        case 1:
          if (t = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (zl === null || !zl.has(r))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = bd(a), vd(
              a,
              e,
              n,
              l
            ), Cu(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ns = Error(c(461)), Pe = !1;
  function st(e, t, n, l) {
    t.child = e === null ? kf(t, null, n, l) : da(
      t,
      e.child,
      n,
      l
    );
  }
  function Sd(e, t, n, l, a) {
    n = n.render;
    var r = t.ref;
    if ("ref" in l) {
      var u = {};
      for (var f in l)
        f !== "ref" && (u[f] = l[f]);
    } else u = l;
    return ua(t), l = ju(
      e,
      t,
      n,
      u,
      r,
      a
    ), f = Hu(), e !== null && !Pe ? (Bu(e, t, a), Xn(e, t, a)) : (he && f && bu(t), t.flags |= 1, st(e, t, l, a), t.child);
  }
  function wd(e, t, n, l, a) {
    if (e === null) {
      var r = n.type;
      return typeof r == "function" && !hu(r) && r.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = r, Td(
        e,
        t,
        r,
        l,
        a
      )) : (e = Li(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (r = e.child, !cs(e, a)) {
      var u = r.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Or, n(u, l) && e.ref === t.ref)
        return Xn(e, t, a);
    }
    return t.flags |= 1, e = Bn(r, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Td(e, t, n, l, a) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (Or(r, l) && e.ref === t.ref)
        if (Pe = !1, t.pendingProps = l = r, cs(e, a))
          (e.flags & 131072) !== 0 && (Pe = !0);
        else
          return t.lanes = e.lanes, Xn(e, t, a);
    }
    return ls(
      e,
      t,
      n,
      l,
      a
    );
  }
  function kd(e, t, n, l) {
    var a = l.children, r = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, a = 0; l !== null; )
            a = a | l.lanes | l.childLanes, l = l.sibling;
          l = a & ~r;
        } else l = 0, t.child = null;
        return Ed(
          e,
          t,
          r,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Bi(
          t,
          r !== null ? r.cachePool : null
        ), r !== null ? Af(t, r) : Ru(), _f(t);
      else
        return l = t.lanes = 536870912, Ed(
          e,
          t,
          r !== null ? r.baseLanes | n : n,
          n,
          l
        );
    } else
      r !== null ? (Bi(t, r.cachePool), Af(t, r), El(), t.memoizedState = null) : (e !== null && Bi(t, null), Ru(), El());
    return st(e, t, a, n), t.child;
  }
  function Xr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ed(e, t, n, l, a) {
    var r = _u();
    return r = r === null ? null : { parent: Ie._currentValue, pool: r }, t.memoizedState = {
      baseLanes: n,
      cachePool: r
    }, e !== null && Bi(t, null), Ru(), _f(t), e !== null && Ga(e, t, l, !0), t.childLanes = a, null;
  }
  function to(e, t) {
    return t = lo(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function xd(e, t, n) {
    return da(t, e.child, null, n), e = to(t, t.pendingProps), e.flags |= 2, Gt(t), t.memoizedState = null, e;
  }
  function xg(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (he) {
        if (l.mode === "hidden")
          return e = to(t, l), t.lanes = 536870912, Xr(null, e);
        if (Lu(t), (e = Le) ? (e = jp(
          e,
          en
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: gl !== null ? { id: En, overflow: xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = uf(e), n.return = t, t.child = n, ot = t, Le = null)) : e = null, e === null) throw bl(t);
        return t.lanes = 536870912, null;
      }
      return to(t, l);
    }
    var r = e.memoizedState;
    if (r !== null) {
      var u = r.dehydrated;
      if (Lu(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = xd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (Pe || Ga(e, t, n, !1), a = (n & e.childLanes) !== 0, Pe || a) {
        if (l = Ce, l !== null && (u = hr(l, n), u !== 0 && u !== r.retryLane))
          throw r.retryLane = u, aa(e, u), Rt(l, e, u), ns;
        po(), t = xd(
          e,
          t,
          n
        );
      } else
        e = r.treeContext, Le = tn(u.nextSibling), ot = t, he = !0, yl = null, en = !1, e !== null && ff(t, e), t = to(t, l), t.flags |= 4096;
      return t;
    }
    return e = Bn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function no(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function ls(e, t, n, l, a) {
    return ua(t), n = ju(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = Hu(), e !== null && !Pe ? (Bu(e, t, a), Xn(e, t, a)) : (he && l && bu(t), t.flags |= 1, st(e, t, n, a), t.child);
  }
  function Ad(e, t, n, l, a, r) {
    return ua(t), t.updateQueue = null, n = Nf(
      t,
      l,
      n,
      a
    ), zf(e), l = Hu(), e !== null && !Pe ? (Bu(e, t, r), Xn(e, t, r)) : (he && l && bu(t), t.flags |= 1, st(e, t, n, r), t.child);
  }
  function _d(e, t, n, l, a) {
    if (ua(t), t.stateNode === null) {
      var r = ja, u = n.contextType;
      typeof u == "object" && u !== null && (r = ut(u)), r = new n(l, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = es, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = l, r.state = t.memoizedState, r.refs = {}, Nu(t), u = n.contextType, r.context = typeof u == "object" && u !== null ? ut(u) : ja, r.state = t.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (Ju(
        t,
        n,
        u,
        l
      ), r.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (u = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), u !== r.state && es.enqueueReplaceState(r, r.state, null), qr(t, l, r, a), Br(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      r = t.stateNode;
      var f = t.memoizedProps, p = ma(n, f);
      r.props = p;
      var w = r.context, z = n.contextType;
      u = ja, typeof z == "object" && z !== null && (u = ut(z));
      var C = n.getDerivedStateFromProps;
      z = typeof C == "function" || typeof r.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, z || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f || w !== u) && pd(
        t,
        r,
        l,
        u
      ), Sl = !1;
      var k = t.memoizedState;
      r.state = k, qr(t, l, r, a), Br(), w = t.memoizedState, f || k !== w || Sl ? (typeof C == "function" && (Ju(
        t,
        n,
        C,
        l
      ), w = t.memoizedState), (p = Sl || dd(
        t,
        n,
        p,
        l,
        k,
        w,
        u
      )) ? (z || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = w), r.props = l, r.state = w, r.context = u, l = p) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      r = t.stateNode, Ou(e, t), u = t.memoizedProps, z = ma(n, u), r.props = z, C = t.pendingProps, k = r.context, w = n.contextType, p = ja, typeof w == "object" && w !== null && (p = ut(w)), f = n.getDerivedStateFromProps, (w = typeof f == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (u !== C || k !== p) && pd(
        t,
        r,
        l,
        p
      ), Sl = !1, k = t.memoizedState, r.state = k, qr(t, l, r, a), Br();
      var E = t.memoizedState;
      u !== C || k !== E || Sl || e !== null && e.dependencies !== null && ji(e.dependencies) ? (typeof f == "function" && (Ju(
        t,
        n,
        f,
        l
      ), E = t.memoizedState), (z = Sl || dd(
        t,
        n,
        z,
        l,
        k,
        E,
        p
      ) || e !== null && e.dependencies !== null && ji(e.dependencies)) ? (w || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(l, E, p), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        l,
        E,
        p
      )), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || u === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = E), r.props = l, r.state = E, r.context = p, l = z) : (typeof r.componentDidUpdate != "function" || u === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return r = l, no(e, t), l = (t.flags & 128) !== 0, r || l ? (r = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && l ? (t.child = da(
      t,
      e.child,
      null,
      a
    ), t.child = da(
      t,
      null,
      n,
      a
    )) : st(e, t, n, a), t.memoizedState = r.state, e = t.child) : e = Xn(
      e,
      t,
      a
    ), e;
  }
  function zd(e, t, n, l) {
    return ia(), t.flags |= 256, st(e, t, n, l), t.child;
  }
  var as = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function rs(e) {
    return { baseLanes: e, cachePool: yf() };
  }
  function is(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Yt), e;
  }
  function Nd(e, t, n) {
    var l = t.pendingProps, a = !1, r = (t.flags & 128) !== 0, u;
    if ((u = r) || (u = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), u && (a = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (he) {
        if (a ? kl(t) : El(), (e = Le) ? (e = jp(
          e,
          en
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: gl !== null ? { id: En, overflow: xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = uf(e), n.return = t, t.child = n, ot = t, Le = null)) : e = null, e === null) throw bl(t);
        return Vs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var f = l.children;
      return l = l.fallback, a ? (El(), a = t.mode, f = lo(
        { mode: "hidden", children: f },
        a
      ), l = ra(
        l,
        a,
        n,
        null
      ), f.return = t, l.return = t, f.sibling = l, t.child = f, l = t.child, l.memoizedState = rs(n), l.childLanes = is(
        e,
        u,
        n
      ), t.memoizedState = as, Xr(null, l)) : (kl(t), os(t, f));
    }
    var p = e.memoizedState;
    if (p !== null && (f = p.dehydrated, f !== null)) {
      if (r)
        t.flags & 256 ? (kl(t), t.flags &= -257, t = us(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (El(), t.child = e.child, t.flags |= 128, t = null) : (El(), f = l.fallback, a = t.mode, l = lo(
          { mode: "visible", children: l.children },
          a
        ), f = ra(
          f,
          a,
          n,
          null
        ), f.flags |= 2, l.return = t, f.return = t, l.sibling = f, t.child = l, da(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = rs(n), l.childLanes = is(
          e,
          u,
          n
        ), t.memoizedState = as, t = Xr(null, l));
      else if (kl(t), Vs(f)) {
        if (u = f.nextSibling && f.nextSibling.dataset, u) var w = u.dgst;
        u = w, l = Error(c(419)), l.stack = "", l.digest = u, Rr({ value: l, source: null, stack: null }), t = us(
          e,
          t,
          n
        );
      } else if (Pe || Ga(e, t, n, !1), u = (n & e.childLanes) !== 0, Pe || u) {
        if (u = Ce, u !== null && (l = hr(u, n), l !== 0 && l !== p.retryLane))
          throw p.retryLane = l, aa(e, l), Rt(u, e, l), ns;
        Gs(f) || po(), t = us(
          e,
          t,
          n
        );
      } else
        Gs(f) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, Le = tn(
          f.nextSibling
        ), ot = t, he = !0, yl = null, en = !1, e !== null && ff(t, e), t = os(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (El(), f = l.fallback, a = t.mode, p = e.child, w = p.sibling, l = Bn(p, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = p.subtreeFlags & 65011712, w !== null ? f = Bn(
      w,
      f
    ) : (f = ra(
      f,
      a,
      n,
      null
    ), f.flags |= 2), f.return = t, l.return = t, l.sibling = f, t.child = l, Xr(null, l), l = t.child, f = e.child.memoizedState, f === null ? f = rs(n) : (a = f.cachePool, a !== null ? (p = Ie._currentValue, a = a.parent !== p ? { parent: p, pool: p } : a) : a = yf(), f = {
      baseLanes: f.baseLanes | n,
      cachePool: a
    }), l.memoizedState = f, l.childLanes = is(
      e,
      u,
      n
    ), t.memoizedState = as, Xr(e.child, l)) : (kl(t), n = e.child, e = n.sibling, n = Bn(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (u = t.deletions, u === null ? (t.deletions = [e], t.flags |= 16) : u.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function os(e, t) {
    return t = lo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function lo(e, t) {
    return e = Bt(22, e, null, t), e.lanes = 0, e;
  }
  function us(e, t, n) {
    return da(t, e.child, null, n), e = os(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Od(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), ku(e.return, t, n);
  }
  function ss(e, t, n, l, a, r) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: a,
      treeForkCount: r
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = n, u.tailMode = a, u.treeForkCount = r);
  }
  function Cd(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, r = l.tail;
    l = l.children;
    var u = Xe.current, f = (u & 2) !== 0;
    if (f ? (u = u & 1 | 2, t.flags |= 128) : u &= 1, I(Xe, u), st(e, t, l, n), l = he ? Dr : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Od(e, n, t);
        else if (e.tag === 19)
          Od(e, n, t);
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
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; )
          e = n.alternate, e !== null && Xi(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ss(
          t,
          !1,
          a,
          n,
          r,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Xi(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        ss(
          t,
          !0,
          n,
          null,
          r,
          l
        );
        break;
      case "together":
        ss(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), _l |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ga(
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
      for (e = t.child, n = Bn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Bn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function cs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ji(e)));
  }
  function Ag(e, t, n) {
    switch (t.tag) {
      case 3:
        dn(t, t.stateNode.containerInfo), vl(t, Ie, e.memoizedState.cache), ia();
        break;
      case 27:
      case 5:
        De(t);
        break;
      case 4:
        dn(t, t.stateNode.containerInfo);
        break;
      case 10:
        vl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Lu(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (kl(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Nd(e, t, n) : (kl(t), e = Xn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        kl(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (Ga(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), a) {
          if (l)
            return Cd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), I(Xe, Xe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, kd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        vl(t, Ie, e.memoizedState.cache);
    }
    return Xn(e, t, n);
  }
  function Dd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Pe = !0;
      else {
        if (!cs(e, n) && (t.flags & 128) === 0)
          return Pe = !1, Ag(
            e,
            t,
            n
          );
        Pe = (e.flags & 131072) !== 0;
      }
    else
      Pe = !1, he && (t.flags & 1048576) !== 0 && cf(t, Dr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = ca(t.elementType), t.type = e, typeof e == "function")
            hu(e) ? (l = ma(e, l), t.tag = 1, t = _d(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = ls(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === ne) {
                t.tag = 11, t = Sd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === Z) {
                t.tag = 14, t = wd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = $e(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return ls(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, a = ma(
          l,
          t.pendingProps
        ), _d(
          e,
          t,
          l,
          a,
          n
        );
      case 3:
        e: {
          if (dn(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          l = t.pendingProps;
          var r = t.memoizedState;
          a = r.element, Ou(e, t), qr(t, l, null, n);
          var u = t.memoizedState;
          if (l = u.cache, vl(t, Ie, l), l !== r.cache && Eu(
            t,
            [Ie],
            n,
            !0
          ), Br(), l = u.element, r.isDehydrated)
            if (r = {
              element: l,
              isDehydrated: !1,
              cache: u.cache
            }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
              t = zd(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== a) {
              a = Zt(
                Error(c(424)),
                t
              ), Rr(a), t = zd(
                e,
                t,
                l,
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
              for (Le = tn(e.firstChild), ot = t, he = !0, yl = null, en = !0, n = kf(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (ia(), l === a) {
              t = Xn(
                e,
                t,
                n
              );
              break e;
            }
            st(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return no(e, t), e === null ? (n = Yp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : he || (n = t.type, e = t.pendingProps, l = So(
          tt.current
        ).createElement(n), l[oe] = t, l[Fe] = e, ct(l, n, e), Me(l), t.stateNode = l) : t.memoizedState = Yp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return De(t), e === null && he && (l = t.stateNode = qp(
          t.type,
          t.pendingProps,
          tt.current
        ), ot = t, en = !0, a = Le, Dl(t.type) ? (Ys = a, Le = tn(l.firstChild)) : Le = a), st(
          e,
          t,
          t.pendingProps.children,
          n
        ), no(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && he && ((a = l = Le) && (l = ny(
          l,
          t.type,
          t.pendingProps,
          en
        ), l !== null ? (t.stateNode = l, ot = t, Le = tn(l.firstChild), en = !1, a = !0) : a = !1), a || bl(t)), De(t), a = t.type, r = t.pendingProps, u = e !== null ? e.memoizedProps : null, l = r.children, Hs(a, r) ? l = null : u !== null && Hs(a, u) && (t.flags |= 32), t.memoizedState !== null && (a = ju(
          e,
          t,
          yg,
          null,
          null,
          n
        ), ii._currentValue = a), no(e, t), st(e, t, l, n), t.child;
      case 6:
        return e === null && he && ((e = n = Le) && (n = ly(
          n,
          t.pendingProps,
          en
        ), n !== null ? (t.stateNode = n, ot = t, Le = null, e = !0) : e = !1), e || bl(t)), null;
      case 13:
        return Nd(e, t, n);
      case 4:
        return dn(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = da(
          t,
          null,
          l,
          n
        ) : st(e, t, l, n), t.child;
      case 11:
        return Sd(
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
        return l = t.pendingProps, vl(t, t.type, l.value), st(e, t, l.children, n), t.child;
      case 9:
        return a = t.type._context, l = t.pendingProps.children, ua(t), a = ut(a), l = l(a), t.flags |= 1, st(e, t, l, n), t.child;
      case 14:
        return wd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Td(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Cd(e, t, n);
      case 31:
        return xg(e, t, n);
      case 22:
        return kd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ua(t), l = ut(Ie), e === null ? (a = _u(), a === null && (a = Ce, r = xu(), a.pooledCache = r, r.refCount++, r !== null && (a.pooledCacheLanes |= n), a = r), t.memoizedState = { parent: l, cache: a }, Nu(t), vl(t, Ie, a)) : ((e.lanes & n) !== 0 && (Ou(e, t), qr(t, null, null, n), Br()), a = e.memoizedState, r = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), vl(t, Ie, l)) : (l = r.cache, vl(t, Ie, l), l !== a.cache && Eu(
          t,
          [Ie],
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
  function fs(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (rp()) e.flags |= 8192;
        else
          throw fa = Gi, zu;
    } else e.flags &= -16777217;
  }
  function Rd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ip(t))
      if (rp()) e.flags |= 8192;
      else
        throw fa = Gi, zu;
  }
  function ao(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Mn() : 536870912, e.lanes |= t, Ja |= t);
  }
  function Qr(e, t) {
    if (!he)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags & 65011712, l |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags, l |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function _g(e, t, n) {
    var l = t.pendingProps;
    switch (vu(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(t), null;
      case 1:
        return Ue(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Vn(Ie), nt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (qa(t) ? Qn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, wu())), Ue(t), null;
      case 26:
        var a = t.type, r = t.memoizedState;
        return e === null ? (Qn(t), r !== null ? (Ue(t), Rd(t, r)) : (Ue(t), fs(
          t,
          a,
          null,
          l,
          n
        ))) : r ? r !== e.memoizedState ? (Qn(t), Ue(t), Rd(t, r)) : (Ue(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Qn(t), Ue(t), fs(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (Xl(t), n = tt.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Qn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ue(t), null;
          }
          e = ge.current, qa(t) ? df(t) : (e = qp(a, l, n), t.stateNode = e, Qn(t));
        }
        return Ue(t), null;
      case 5:
        if (Xl(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Qn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ue(t), null;
          }
          if (r = ge.current, qa(t))
            df(t);
          else {
            var u = So(
              tt.current
            );
            switch (r) {
              case 1:
                r = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                r = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    r = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    r = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    r = u.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof l.is == "string" ? u.createElement("select", {
                      is: l.is
                    }) : u.createElement("select"), l.multiple ? r.multiple = !0 : l.size && (r.size = l.size);
                    break;
                  default:
                    r = typeof l.is == "string" ? u.createElement(a, { is: l.is }) : u.createElement(a);
                }
            }
            r[oe] = t, r[Fe] = l;
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                r.appendChild(u.stateNode);
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
            t.stateNode = r;
            e: switch (ct(r, a, l), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Qn(t);
          }
        }
        return Ue(t), fs(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Qn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = tt.current, qa(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = ot, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[oe] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Np(e.nodeValue, n)), e || bl(t, !0);
          } else
            e = So(e).createTextNode(
              l
            ), e[oe] = t, t.stateNode = e;
        }
        return Ue(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = qa(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[oe] = t;
            } else
              ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), e = !1;
          } else
            n = wu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Gt(t), t) : (Gt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Ue(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = qa(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(c(317));
              a[oe] = t;
            } else
              ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), a = !1;
          } else
            a = wu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Gt(t), t) : (Gt(t), null);
        }
        return Gt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), r = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (r = l.memoizedState.cachePool.pool), r !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), ao(t, t.updateQueue), Ue(t), null);
      case 4:
        return nt(), e === null && Rs(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return Vn(t.type), Ue(t), null;
      case 19:
        if (ue(Xe), l = t.memoizedState, l === null) return Ue(t), null;
        if (a = (t.flags & 128) !== 0, r = l.rendering, r === null)
          if (a) Qr(l, !1);
          else {
            if (Ve !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (r = Xi(e), r !== null) {
                  for (t.flags |= 128, Qr(l, !1), e = r.updateQueue, t.updateQueue = e, ao(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    of(n, e), n = n.sibling;
                  return I(
                    Xe,
                    Xe.current & 1 | 2
                  ), he && qn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Ye() > so && (t.flags |= 128, a = !0, Qr(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Xi(r), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, ao(t, e), Qr(l, !0), l.tail === null && l.tailMode === "hidden" && !r.alternate && !he)
                return Ue(t), null;
            } else
              2 * Ye() - l.renderingStartTime > so && n !== 536870912 && (t.flags |= 128, a = !0, Qr(l, !1), t.lanes = 4194304);
          l.isBackwards ? (r.sibling = t.child, t.child = r) : (e = l.last, e !== null ? e.sibling = r : t.child = r, l.last = r);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Ye(), e.sibling = null, n = Xe.current, I(
          Xe,
          a ? n & 1 | 2 : n & 1
        ), he && qn(t, l.treeForkCount), e) : (Ue(t), null);
      case 22:
      case 23:
        return Gt(t), Mu(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), n = t.updateQueue, n !== null && ao(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && ue(sa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Vn(Ie), Ue(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function zg(e, t) {
    switch (vu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Vn(Ie), nt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Xl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Gt(t), t.alternate === null)
            throw Error(c(340));
          ia();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Gt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          ia();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ue(Xe), null;
      case 4:
        return nt(), null;
      case 10:
        return Vn(t.type), null;
      case 22:
      case 23:
        return Gt(t), Mu(), e !== null && ue(sa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Vn(Ie), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Md(e, t) {
    switch (vu(t), t.tag) {
      case 3:
        Vn(Ie), nt();
        break;
      case 26:
      case 27:
      case 5:
        Xl(t);
        break;
      case 4:
        nt();
        break;
      case 31:
        t.memoizedState !== null && Gt(t);
        break;
      case 13:
        Gt(t);
        break;
      case 19:
        ue(Xe);
        break;
      case 10:
        Vn(t.type);
        break;
      case 22:
      case 23:
        Gt(t), Mu(), e !== null && ue(sa);
        break;
      case 24:
        Vn(Ie);
    }
  }
  function $r(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var a = l.next;
        n = a;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var r = n.create, u = n.inst;
            l = r(), u.destroy = l;
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (f) {
      Ae(t, t.return, f);
    }
  }
  function xl(e, t, n) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var r = a.next;
        l = r;
        do {
          if ((l.tag & e) === e) {
            var u = l.inst, f = u.destroy;
            if (f !== void 0) {
              u.destroy = void 0, a = t;
              var p = n, w = f;
              try {
                w();
              } catch (z) {
                Ae(
                  a,
                  p,
                  z
                );
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (z) {
      Ae(t, t.return, z);
    }
  }
  function Ld(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        xf(t, n);
      } catch (l) {
        Ae(e, e.return, l);
      }
    }
  }
  function Ud(e, t, n) {
    n.props = ma(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ae(e, t, l);
    }
  }
  function Ir(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (a) {
      Ae(e, t, a);
    }
  }
  function An(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (a) {
          Ae(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (a) {
          Ae(e, t, a);
        }
      else n.current = null;
  }
  function jd(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (a) {
      Ae(e, e.return, a);
    }
  }
  function ds(e, t, n) {
    try {
      var l = e.stateNode;
      Pg(l, e.type, n, t), l[Fe] = t;
    } catch (a) {
      Ae(e, e.return, a);
    }
  }
  function Hd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Dl(e.type) || e.tag === 4;
  }
  function ps(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Dl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ms(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = it));
    else if (l !== 4 && (l === 27 && Dl(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (ms(e, t, n), e = e.sibling; e !== null; )
        ms(e, t, n), e = e.sibling;
  }
  function ro(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Dl(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (ro(e, t, n), e = e.sibling; e !== null; )
        ro(e, t, n), e = e.sibling;
  }
  function Bd(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      ct(t, l, n), t[oe] = e, t[Fe] = n;
    } catch (r) {
      Ae(e, e.return, r);
    }
  }
  var $n = !1, Ze = !1, hs = !1, qd = typeof WeakSet == "function" ? WeakSet : Set, at = null;
  function Ng(e, t) {
    if (e = e.containerInfo, Us = _o, e = Zc(e), uu(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var a = l.anchorOffset, r = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, r.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0, f = -1, p = -1, w = 0, z = 0, C = e, k = null;
            t: for (; ; ) {
              for (var E; C !== n || a !== 0 && C.nodeType !== 3 || (f = u + a), C !== r || l !== 0 && C.nodeType !== 3 || (p = u + l), C.nodeType === 3 && (u += C.nodeValue.length), (E = C.firstChild) !== null; )
                k = C, C = E;
              for (; ; ) {
                if (C === e) break t;
                if (k === n && ++w === a && (f = u), k === r && ++z === l && (p = u), (E = C.nextSibling) !== null) break;
                C = k, k = C.parentNode;
              }
              C = E;
            }
            n = f === -1 || p === -1 ? null : { start: f, end: p };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (js = { focusedElem: e, selectionRange: n }, _o = !1, at = t; at !== null; )
      if (t = at, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, at = e;
      else
        for (; at !== null; ) {
          switch (t = at, r = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  a = e[n], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && r !== null) {
                e = void 0, n = t, a = r.memoizedProps, r = r.memoizedState, l = n.stateNode;
                try {
                  var F = ma(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    F,
                    r
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (J) {
                  Ae(
                    n,
                    n.return,
                    J
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  qs(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      qs(e);
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
            e.return = t.return, at = e;
            break;
          }
          at = t.return;
        }
  }
  function Gd(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Kn(e, n), l & 4 && $r(5, n);
        break;
      case 1:
        if (Kn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (u) {
              Ae(n, n.return, u);
            }
          else {
            var a = ma(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                a,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (u) {
              Ae(
                n,
                n.return,
                u
              );
            }
          }
        l & 64 && Ld(n), l & 512 && Ir(n, n.return);
        break;
      case 3:
        if (Kn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
            xf(e, t);
          } catch (u) {
            Ae(n, n.return, u);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Bd(n);
      case 26:
      case 5:
        Kn(e, n), t === null && l & 4 && jd(n), l & 512 && Ir(n, n.return);
        break;
      case 12:
        Kn(e, n);
        break;
      case 31:
        Kn(e, n), l & 4 && Fd(e, n);
        break;
      case 13:
        Kn(e, n), l & 4 && Xd(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Hg.bind(
          null,
          n
        ), ay(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || $n, !l) {
          t = t !== null && t.memoizedState !== null || Ze, a = $n;
          var r = Ze;
          $n = l, (Ze = t) && !r ? Pn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Kn(e, n), $n = a, Ze = r;
        }
        break;
      case 30:
        break;
      default:
        Kn(e, n);
    }
  }
  function Vd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Vd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && vr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, Nt = !1;
  function In(e, t, n) {
    for (n = n.child; n !== null; )
      Yd(e, t, n), n = n.sibling;
  }
  function Yd(e, t, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(il, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Ze || An(n, t), In(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ze || An(n, t);
        var l = je, a = Nt;
        Dl(n.type) && (je = n.stateNode, Nt = !1), In(
          e,
          t,
          n
        ), li(n.stateNode), je = l, Nt = a;
        break;
      case 5:
        Ze || An(n, t);
      case 6:
        if (l = je, a = Nt, je = null, In(
          e,
          t,
          n
        ), je = l, Nt = a, je !== null)
          if (Nt)
            try {
              (je.nodeType === 9 ? je.body : je.nodeName === "HTML" ? je.ownerDocument.body : je).removeChild(n.stateNode);
            } catch (r) {
              Ae(
                n,
                t,
                r
              );
            }
          else
            try {
              je.removeChild(n.stateNode);
            } catch (r) {
              Ae(
                n,
                t,
                r
              );
            }
        break;
      case 18:
        je !== null && (Nt ? (e = je, Lp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), or(e)) : Lp(je, n.stateNode));
        break;
      case 4:
        l = je, a = Nt, je = n.stateNode.containerInfo, Nt = !0, In(
          e,
          t,
          n
        ), je = l, Nt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        xl(2, n, t), Ze || xl(4, n, t), In(
          e,
          t,
          n
        );
        break;
      case 1:
        Ze || (An(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && Ud(
          n,
          t,
          l
        )), In(
          e,
          t,
          n
        );
        break;
      case 21:
        In(
          e,
          t,
          n
        );
        break;
      case 22:
        Ze = (l = Ze) || n.memoizedState !== null, In(
          e,
          t,
          n
        ), Ze = l;
        break;
      default:
        In(
          e,
          t,
          n
        );
    }
  }
  function Fd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        or(e);
      } catch (n) {
        Ae(t, t.return, n);
      }
    }
  }
  function Xd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        or(e);
      } catch (n) {
        Ae(t, t.return, n);
      }
  }
  function Og(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new qd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new qd()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function io(e, t) {
    var n = Og(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = Bg.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function Ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], r = e, u = t, f = u;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Dl(f.type)) {
                je = f.stateNode, Nt = !1;
                break e;
              }
              break;
            case 5:
              je = f.stateNode, Nt = !1;
              break e;
            case 3:
            case 4:
              je = f.stateNode.containerInfo, Nt = !0;
              break e;
          }
          f = f.return;
        }
        if (je === null) throw Error(c(160));
        Yd(r, u, a), je = null, Nt = !1, r = a.alternate, r !== null && (r.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Qd(t, e), t = t.sibling;
  }
  var hn = null;
  function Qd(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ot(t, e), Ct(e), l & 4 && (xl(3, e, e.return), $r(3, e), xl(5, e, e.return));
        break;
      case 1:
        Ot(t, e), Ct(e), l & 512 && (Ze || n === null || An(n, n.return)), l & 64 && $n && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = hn;
        if (Ot(t, e), Ct(e), l & 512 && (Ze || n === null || An(n, n.return)), l & 4) {
          var r = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      r = a.getElementsByTagName("title")[0], (!r || r[Jl] || r[oe] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(l), a.head.insertBefore(
                        r,
                        a.querySelector("head > title")
                      )), ct(r, l, n), r[oe] = e, Me(r), l = r;
                      break e;
                    case "link":
                      var u = Qp(
                        "link",
                        "href",
                        a
                      ).get(l + (n.href || ""));
                      if (u) {
                        for (var f = 0; f < u.length; f++)
                          if (r = u[f], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            u.splice(f, 1);
                            break t;
                          }
                      }
                      r = a.createElement(l), ct(r, l, n), a.head.appendChild(r);
                      break;
                    case "meta":
                      if (u = Qp(
                        "meta",
                        "content",
                        a
                      ).get(l + (n.content || ""))) {
                        for (f = 0; f < u.length; f++)
                          if (r = u[f], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            u.splice(f, 1);
                            break t;
                          }
                      }
                      r = a.createElement(l), ct(r, l, n), a.head.appendChild(r);
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  r[oe] = e, Me(r), l = r;
                }
                e.stateNode = l;
              } else
                $p(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Xp(
                a,
                l,
                e.memoizedProps
              );
          else
            r !== l ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, l === null ? $p(
              a,
              e.type,
              e.stateNode
            ) : Xp(
              a,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && ds(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Ot(t, e), Ct(e), l & 512 && (Ze || n === null || An(n, n.return)), n !== null && l & 4 && ds(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ot(t, e), Ct(e), l & 512 && (Ze || n === null || An(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            $(a, "");
          } catch (F) {
            Ae(e, e.return, F);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, ds(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (hs = !0);
        break;
      case 6:
        if (Ot(t, e), Ct(e), l & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (F) {
            Ae(e, e.return, F);
          }
        }
        break;
      case 3:
        if (ko = null, a = hn, hn = wo(t.containerInfo), Ot(t, e), hn = a, Ct(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            or(t.containerInfo);
          } catch (F) {
            Ae(e, e.return, F);
          }
        hs && (hs = !1, $d(e));
        break;
      case 4:
        l = hn, hn = wo(
          e.stateNode.containerInfo
        ), Ot(t, e), Ct(e), hn = l;
        break;
      case 12:
        Ot(t, e), Ct(e);
        break;
      case 31:
        Ot(t, e), Ct(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, io(e, l)));
        break;
      case 13:
        Ot(t, e), Ct(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (uo = Ye()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, io(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var p = n !== null && n.memoizedState !== null, w = $n, z = Ze;
        if ($n = w || a, Ze = z || p, Ot(t, e), Ze = z, $n = w, Ct(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || p || $n || Ze || ha(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                p = n = t;
                try {
                  if (r = p.stateNode, a)
                    u = r.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    f = p.stateNode;
                    var C = p.memoizedProps.style, k = C != null && C.hasOwnProperty("display") ? C.display : null;
                    f.style.display = k == null || typeof k == "boolean" ? "" : ("" + k).trim();
                  }
                } catch (F) {
                  Ae(p, p.return, F);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                p = t;
                try {
                  p.stateNode.nodeValue = a ? "" : p.memoizedProps;
                } catch (F) {
                  Ae(p, p.return, F);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                p = t;
                try {
                  var E = p.stateNode;
                  a ? Up(E, !0) : Up(p.stateNode, !1);
                } catch (F) {
                  Ae(p, p.return, F);
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
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, io(e, n))));
        break;
      case 19:
        Ot(t, e), Ct(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, io(e, l)));
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
        for (var n, l = e.return; l !== null; ) {
          if (Hd(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, r = ps(e);
            ro(e, r, a);
            break;
          case 5:
            var u = n.stateNode;
            n.flags & 32 && ($(u, ""), n.flags &= -33);
            var f = ps(e);
            ro(e, f, u);
            break;
          case 3:
          case 4:
            var p = n.stateNode.containerInfo, w = ps(e);
            ms(
              e,
              w,
              p
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (z) {
        Ae(e, e.return, z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $d(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        $d(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Kn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Gd(e, t.alternate, t), t = t.sibling;
  }
  function ha(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xl(4, t, t.return), ha(t);
          break;
        case 1:
          An(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Ud(
            t,
            t.return,
            n
          ), ha(t);
          break;
        case 27:
          li(t.stateNode);
        case 26:
        case 5:
          An(t, t.return), ha(t);
          break;
        case 22:
          t.memoizedState === null && ha(t);
          break;
        case 30:
          ha(t);
          break;
        default:
          ha(t);
      }
      e = e.sibling;
    }
  }
  function Pn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, r = t, u = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Pn(
            a,
            r,
            n
          ), $r(4, r);
          break;
        case 1:
          if (Pn(
            a,
            r,
            n
          ), l = r, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (w) {
              Ae(l, l.return, w);
            }
          if (l = r, a = l.updateQueue, a !== null) {
            var f = l.stateNode;
            try {
              var p = a.shared.hiddenCallbacks;
              if (p !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < p.length; a++)
                  Ef(p[a], f);
            } catch (w) {
              Ae(l, l.return, w);
            }
          }
          n && u & 64 && Ld(r), Ir(r, r.return);
          break;
        case 27:
          Bd(r);
        case 26:
        case 5:
          Pn(
            a,
            r,
            n
          ), n && l === null && u & 4 && jd(r), Ir(r, r.return);
          break;
        case 12:
          Pn(
            a,
            r,
            n
          );
          break;
        case 31:
          Pn(
            a,
            r,
            n
          ), n && u & 4 && Fd(a, r);
          break;
        case 13:
          Pn(
            a,
            r,
            n
          ), n && u & 4 && Xd(a, r);
          break;
        case 22:
          r.memoizedState === null && Pn(
            a,
            r,
            n
          ), Ir(r, r.return);
          break;
        case 30:
          break;
        default:
          Pn(
            a,
            r,
            n
          );
      }
      t = t.sibling;
    }
  }
  function gs(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Mr(n));
  }
  function ys(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Mr(e));
  }
  function gn(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Id(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function Id(e, t, n, l) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        gn(
          e,
          t,
          n,
          l
        ), a & 2048 && $r(9, t);
        break;
      case 1:
        gn(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        gn(
          e,
          t,
          n,
          l
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Mr(e)));
        break;
      case 12:
        if (a & 2048) {
          gn(
            e,
            t,
            n,
            l
          ), e = t.stateNode;
          try {
            var r = t.memoizedProps, u = r.id, f = r.onPostCommit;
            typeof f == "function" && f(
              u,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (p) {
            Ae(t, t.return, p);
          }
        } else
          gn(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        gn(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        gn(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        r = t.stateNode, u = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? gn(
          e,
          t,
          n,
          l
        ) : Kr(e, t) : r._visibility & 2 ? gn(
          e,
          t,
          n,
          l
        ) : (r._visibility |= 2, Pa(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && gs(u, t);
        break;
      case 24:
        gn(
          e,
          t,
          n,
          l
        ), a & 2048 && ys(t.alternate, t);
        break;
      default:
        gn(
          e,
          t,
          n,
          l
        );
    }
  }
  function Pa(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var r = e, u = t, f = n, p = l, w = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Pa(
            r,
            u,
            f,
            p,
            a
          ), $r(8, u);
          break;
        case 23:
          break;
        case 22:
          var z = u.stateNode;
          u.memoizedState !== null ? z._visibility & 2 ? Pa(
            r,
            u,
            f,
            p,
            a
          ) : Kr(
            r,
            u
          ) : (z._visibility |= 2, Pa(
            r,
            u,
            f,
            p,
            a
          )), a && w & 2048 && gs(
            u.alternate,
            u
          );
          break;
        case 24:
          Pa(
            r,
            u,
            f,
            p,
            a
          ), a && w & 2048 && ys(u.alternate, u);
          break;
        default:
          Pa(
            r,
            u,
            f,
            p,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Kr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            Kr(n, l), a & 2048 && gs(
              l.alternate,
              l
            );
            break;
          case 24:
            Kr(n, l), a & 2048 && ys(l.alternate, l);
            break;
          default:
            Kr(n, l);
        }
        t = t.sibling;
      }
  }
  var Pr = 8192;
  function Za(e, t, n) {
    if (e.subtreeFlags & Pr)
      for (e = e.child; e !== null; )
        Kd(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Kd(e, t, n) {
    switch (e.tag) {
      case 26:
        Za(
          e,
          t,
          n
        ), e.flags & Pr && e.memoizedState !== null && gy(
          n,
          hn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Za(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = hn;
        hn = wo(e.stateNode.containerInfo), Za(
          e,
          t,
          n
        ), hn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Pr, Pr = 16777216, Za(
          e,
          t,
          n
        ), Pr = l) : Za(
          e,
          t,
          n
        ));
        break;
      default:
        Za(
          e,
          t,
          n
        );
    }
  }
  function Pd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Zr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          at = l, Wd(
            l,
            e
          );
        }
      Pd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Zd(e), e = e.sibling;
  }
  function Zd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Zr(e), e.flags & 2048 && xl(9, e, e.return);
        break;
      case 3:
        Zr(e);
        break;
      case 12:
        Zr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, oo(e)) : Zr(e);
        break;
      default:
        Zr(e);
    }
  }
  function oo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          at = l, Wd(
            l,
            e
          );
        }
      Pd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          xl(8, t, t.return), oo(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, oo(t));
          break;
        default:
          oo(t);
      }
      e = e.sibling;
    }
  }
  function Wd(e, t) {
    for (; at !== null; ) {
      var n = at;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          xl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Mr(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, at = l;
      else
        e: for (n = e; at !== null; ) {
          l = at;
          var a = l.sibling, r = l.return;
          if (Vd(l), l === n) {
            at = null;
            break e;
          }
          if (a !== null) {
            a.return = r, at = a;
            break e;
          }
          at = r;
        }
    }
  }
  var Cg = {
    getCacheForType: function(e) {
      var t = ut(Ie), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return ut(Ie).controller.signal;
    }
  }, Dg = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, Ce = null, ce = null, de = 0, xe = 0, Vt = null, Al = !1, Wa = !1, bs = !1, Zn = 0, Ve = 0, _l = 0, ga = 0, vs = 0, Yt = 0, Ja = 0, Wr = null, Dt = null, Ss = !1, uo = 0, Jd = 0, so = 1 / 0, co = null, zl = null, et = 0, Nl = null, er = null, Wn = 0, ws = 0, Ts = null, ep = null, Jr = 0, ks = null;
  function Ft() {
    return (Te & 2) !== 0 && de !== 0 ? de & -de : R.T !== null ? Ns() : sl();
  }
  function tp() {
    if (Yt === 0)
      if ((de & 536870912) === 0 || he) {
        var e = Pl;
        Pl <<= 1, (Pl & 3932160) === 0 && (Pl = 262144), Yt = e;
      } else Yt = 536870912;
    return e = qt.current, e !== null && (e.flags |= 32), Yt;
  }
  function Rt(e, t, n) {
    (e === Ce && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (tr(e, 0), Ol(
      e,
      de,
      Yt,
      !1
    )), Ln(e, n), ((Te & 2) === 0 || e !== Ce) && (e === Ce && ((Te & 2) === 0 && (ga |= n), Ve === 4 && Ol(
      e,
      de,
      Yt,
      !1
    )), _n(e));
  }
  function np(e, t, n) {
    if ((Te & 6) !== 0) throw Error(c(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Sn(e, t), a = l ? Lg(e, t) : xs(e, t, !0), r = l;
    do {
      if (a === 0) {
        Wa && !l && Ol(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, r && !Rg(n)) {
          a = xs(e, t, !1), r = !1;
          continue;
        }
        if (a === 2) {
          if (r = t, e.errorRecoveryDisabledLanes & r)
            var u = 0;
          else
            u = e.pendingLanes & -536870913, u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
          if (u !== 0) {
            t = u;
            e: {
              var f = e;
              a = Wr;
              var p = f.current.memoizedState.isDehydrated;
              if (p && (tr(f, u).flags |= 256), u = xs(
                f,
                u,
                !1
              ), u !== 2) {
                if (bs && !p) {
                  f.errorRecoveryDisabledLanes |= r, ga |= r, a = 4;
                  break e;
                }
                r = Dt, Dt = a, r !== null && (Dt === null ? Dt = r : Dt.push.apply(
                  Dt,
                  r
                ));
              }
              a = u;
            }
            if (r = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          tr(e, 0), Ol(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, r = a, r) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ol(
                l,
                t,
                Yt,
                !Al
              );
              break e;
            case 2:
              Dt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (a = uo + 300 - Ye(), 10 < a)) {
            if (Ol(
              l,
              t,
              Yt,
              !Al
            ), Rn(l, 0, !0) !== 0) break e;
            Wn = t, l.timeoutHandle = Rp(
              lp.bind(
                null,
                l,
                n,
                Dt,
                co,
                Ss,
                t,
                Yt,
                ga,
                Ja,
                Al,
                r,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          lp(
            l,
            n,
            Dt,
            co,
            Ss,
            t,
            Yt,
            ga,
            Ja,
            Al,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    _n(e);
  }
  function lp(e, t, n, l, a, r, u, f, p, w, z, C, k, E) {
    if (e.timeoutHandle = -1, C = t.subtreeFlags, C & 8192 || (C & 16785408) === 16785408) {
      C = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: it
      }, Kd(
        t,
        r,
        C
      );
      var F = (r & 62914560) === r ? uo - Ye() : (r & 4194048) === r ? Jd - Ye() : 0;
      if (F = yy(
        C,
        F
      ), F !== null) {
        Wn = r, e.cancelPendingCommit = F(
          fp.bind(
            null,
            e,
            t,
            r,
            n,
            l,
            a,
            u,
            f,
            p,
            z,
            C,
            null,
            k,
            E
          )
        ), Ol(e, r, u, !w);
        return;
      }
    }
    fp(
      e,
      t,
      r,
      n,
      l,
      a,
      u,
      f,
      p
    );
  }
  function Rg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var a = n[l], r = a.getSnapshot;
          a = a.value;
          try {
            if (!Ht(r(), a)) return !1;
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
  function Ol(e, t, n, l) {
    t &= ~vs, t &= ~ga, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var r = 31 - rt(a), u = 1 << r;
      l[r] = -1, a &= ~u;
    }
    n !== 0 && mr(e, n, t);
  }
  function fo() {
    return (Te & 6) === 0 ? (ei(0), !1) : !0;
  }
  function Es() {
    if (ce !== null) {
      if (xe === 0)
        var e = ce.return;
      else
        e = ce, Gn = oa = null, qu(e), Xa = null, Ur = 0, e = ce;
      for (; e !== null; )
        Md(e.alternate, e), e = e.return;
      ce = null;
    }
  }
  function tr(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Jg(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Wn = 0, Es(), Ce = e, ce = n = Bn(e.current, null), de = t, xe = 0, Vt = null, Al = !1, Wa = Sn(e, t), bs = !1, Ja = Yt = vs = ga = _l = Ve = 0, Dt = Wr = null, Ss = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - rt(l), r = 1 << a;
        t |= e[a], l &= ~r;
      }
    return Zn = t, Di(), n;
  }
  function ap(e, t) {
    le = null, R.H = Fr, t === Fa || t === qi ? (t = Sf(), xe = 3) : t === zu ? (t = Sf(), xe = 4) : xe = t === ns ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, ce === null && (Ve = 1, eo(
      e,
      Zt(t, e.current)
    ));
  }
  function rp() {
    var e = qt.current;
    return e === null ? !0 : (de & 4194048) === de ? sn === null : (de & 62914560) === de || (de & 536870912) !== 0 ? e === sn : !1;
  }
  function ip() {
    var e = R.H;
    return R.H = Fr, e === null ? Fr : e;
  }
  function op() {
    var e = R.A;
    return R.A = Cg, e;
  }
  function po() {
    Ve = 4, Al || (de & 4194048) !== de && qt.current !== null || (Wa = !0), (_l & 134217727) === 0 && (ga & 134217727) === 0 || Ce === null || Ol(
      Ce,
      de,
      Yt,
      !1
    );
  }
  function xs(e, t, n) {
    var l = Te;
    Te |= 2;
    var a = ip(), r = op();
    (Ce !== e || de !== t) && (co = null, tr(e, t)), t = !1;
    var u = Ve;
    e: do
      try {
        if (xe !== 0 && ce !== null) {
          var f = ce, p = Vt;
          switch (xe) {
            case 8:
              Es(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              qt.current === null && (t = !0);
              var w = xe;
              if (xe = 0, Vt = null, nr(e, f, p, w), n && Wa) {
                u = 0;
                break e;
              }
              break;
            default:
              w = xe, xe = 0, Vt = null, nr(e, f, p, w);
          }
        }
        Mg(), u = Ve;
        break;
      } catch (z) {
        ap(e, z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = oa = null, Te = l, R.H = a, R.A = r, ce === null && (Ce = null, de = 0, Di()), u;
  }
  function Mg() {
    for (; ce !== null; ) up(ce);
  }
  function Lg(e, t) {
    var n = Te;
    Te |= 2;
    var l = ip(), a = op();
    Ce !== e || de !== t ? (co = null, so = Ye() + 500, tr(e, t)) : Wa = Sn(
      e,
      t
    );
    e: do
      try {
        if (xe !== 0 && ce !== null) {
          t = ce;
          var r = Vt;
          t: switch (xe) {
            case 1:
              xe = 0, Vt = null, nr(e, t, r, 1);
              break;
            case 2:
            case 9:
              if (bf(r)) {
                xe = 0, Vt = null, sp(t);
                break;
              }
              t = function() {
                xe !== 2 && xe !== 9 || Ce !== e || (xe = 7), _n(e);
              }, r.then(t, t);
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              bf(r) ? (xe = 0, Vt = null, sp(t)) : (xe = 0, Vt = null, nr(e, t, r, 7));
              break;
            case 5:
              var u = null;
              switch (ce.tag) {
                case 26:
                  u = ce.memoizedState;
                case 5:
                case 27:
                  var f = ce;
                  if (u ? Ip(u) : f.stateNode.complete) {
                    xe = 0, Vt = null;
                    var p = f.sibling;
                    if (p !== null) ce = p;
                    else {
                      var w = f.return;
                      w !== null ? (ce = w, mo(w)) : ce = null;
                    }
                    break t;
                  }
              }
              xe = 0, Vt = null, nr(e, t, r, 5);
              break;
            case 6:
              xe = 0, Vt = null, nr(e, t, r, 6);
              break;
            case 8:
              Es(), Ve = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Ug();
        break;
      } catch (z) {
        ap(e, z);
      }
    while (!0);
    return Gn = oa = null, R.H = l, R.A = a, Te = n, ce !== null ? 0 : (Ce = null, de = 0, Di(), Ve);
  }
  function Ug() {
    for (; ce !== null && !bn(); )
      up(ce);
  }
  function up(e) {
    var t = Dd(e.alternate, e, Zn);
    e.memoizedProps = e.pendingProps, t === null ? mo(e) : ce = t;
  }
  function sp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ad(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          de
        );
        break;
      case 11:
        t = Ad(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          de
        );
        break;
      case 5:
        qu(t);
      default:
        Md(n, t), t = ce = of(t, Zn), t = Dd(n, t, Zn);
    }
    e.memoizedProps = e.pendingProps, t === null ? mo(e) : ce = t;
  }
  function nr(e, t, n, l) {
    Gn = oa = null, qu(t), Xa = null, Ur = 0;
    var a = t.return;
    try {
      if (Eg(
        e,
        a,
        t,
        n,
        de
      )) {
        Ve = 1, eo(
          e,
          Zt(n, e.current)
        ), ce = null;
        return;
      }
    } catch (r) {
      if (a !== null) throw ce = a, r;
      Ve = 1, eo(
        e,
        Zt(n, e.current)
      ), ce = null;
      return;
    }
    t.flags & 32768 ? (he || l === 1 ? e = !0 : Wa || (de & 536870912) !== 0 ? e = !1 : (Al = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = qt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), cp(t, e)) : mo(t);
  }
  function mo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        cp(
          t,
          Al
        );
        return;
      }
      e = t.return;
      var n = _g(
        t.alternate,
        t,
        Zn
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
    Ve === 0 && (Ve = 5);
  }
  function cp(e, t) {
    do {
      var n = zg(e.alternate, e);
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
    Ve = 6, ce = null;
  }
  function fp(e, t, n, l, a, r, u, f, p) {
    e.cancelPendingCommit = null;
    do
      ho();
    while (et !== 0);
    if ((Te & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (r = t.lanes | t.childLanes, r |= pu, Io(
        e,
        n,
        r,
        u,
        f,
        p
      ), e === Ce && (ce = Ce = null, de = 0), er = t, Nl = e, Wn = n, ws = r, Ts = a, ep = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, qg(al, function() {
        return gp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = R.T, R.T = null, a = H.p, H.p = 2, u = Te, Te |= 4;
        try {
          Ng(e, t, n);
        } finally {
          Te = u, H.p = a, R.T = l;
        }
      }
      et = 1, dp(), pp(), mp();
    }
  }
  function dp() {
    if (et === 1) {
      et = 0;
      var e = Nl, t = er, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = R.T, R.T = null;
        var l = H.p;
        H.p = 2;
        var a = Te;
        Te |= 4;
        try {
          Qd(t, e);
          var r = js, u = Zc(e.containerInfo), f = r.focusedElem, p = r.selectionRange;
          if (u !== f && f && f.ownerDocument && Pc(
            f.ownerDocument.documentElement,
            f
          )) {
            if (p !== null && uu(f)) {
              var w = p.start, z = p.end;
              if (z === void 0 && (z = w), "selectionStart" in f)
                f.selectionStart = w, f.selectionEnd = Math.min(
                  z,
                  f.value.length
                );
              else {
                var C = f.ownerDocument || document, k = C && C.defaultView || window;
                if (k.getSelection) {
                  var E = k.getSelection(), F = f.textContent.length, J = Math.min(p.start, F), Oe = p.end === void 0 ? J : Math.min(p.end, F);
                  !E.extend && J > Oe && (u = Oe, Oe = J, J = u);
                  var v = Kc(
                    f,
                    J
                  ), y = Kc(
                    f,
                    Oe
                  );
                  if (v && y && (E.rangeCount !== 1 || E.anchorNode !== v.node || E.anchorOffset !== v.offset || E.focusNode !== y.node || E.focusOffset !== y.offset)) {
                    var S = C.createRange();
                    S.setStart(v.node, v.offset), E.removeAllRanges(), J > Oe ? (E.addRange(S), E.extend(y.node, y.offset)) : (S.setEnd(y.node, y.offset), E.addRange(S));
                  }
                }
              }
            }
            for (C = [], E = f; E = E.parentNode; )
              E.nodeType === 1 && C.push({
                element: E,
                left: E.scrollLeft,
                top: E.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < C.length; f++) {
              var N = C[f];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          _o = !!Us, js = Us = null;
        } finally {
          Te = a, H.p = l, R.T = n;
        }
      }
      e.current = t, et = 2;
    }
  }
  function pp() {
    if (et === 2) {
      et = 0;
      var e = Nl, t = er, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = R.T, R.T = null;
        var l = H.p;
        H.p = 2;
        var a = Te;
        Te |= 4;
        try {
          Gd(e, t.alternate, t);
        } finally {
          Te = a, H.p = l, R.T = n;
        }
      }
      et = 3;
    }
  }
  function mp() {
    if (et === 4 || et === 3) {
      et = 0, $l();
      var e = Nl, t = er, n = Wn, l = ep;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? et = 5 : (et = 0, er = Nl = null, hp(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (zl = null), gr(n), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function")
        try {
          pt.onCommitFiberRoot(
            il,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = R.T, a = H.p, H.p = 2, R.T = null;
        try {
          for (var r = e.onRecoverableError, u = 0; u < l.length; u++) {
            var f = l[u];
            r(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          R.T = t, H.p = a;
        }
      }
      (Wn & 3) !== 0 && ho(), _n(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === ks ? Jr++ : (Jr = 0, ks = e) : Jr = 0, ei(0);
    }
  }
  function hp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Mr(t)));
  }
  function ho() {
    return dp(), pp(), mp(), gp();
  }
  function gp() {
    if (et !== 5) return !1;
    var e = Nl, t = ws;
    ws = 0;
    var n = gr(Wn), l = R.T, a = H.p;
    try {
      H.p = 32 > n ? 32 : n, R.T = null, n = Ts, Ts = null;
      var r = Nl, u = Wn;
      if (et = 0, er = Nl = null, Wn = 0, (Te & 6) !== 0) throw Error(c(331));
      var f = Te;
      if (Te |= 4, Zd(r.current), Id(
        r,
        r.current,
        u,
        n
      ), Te = f, ei(0, !1), pt && typeof pt.onPostCommitFiberRoot == "function")
        try {
          pt.onPostCommitFiberRoot(il, r);
        } catch {
        }
      return !0;
    } finally {
      H.p = a, R.T = l, hp(e, t);
    }
  }
  function yp(e, t, n) {
    t = Zt(n, t), t = ts(e.stateNode, t, 2), e = Tl(e, t, 2), e !== null && (Ln(e, 2), _n(e));
  }
  function Ae(e, t, n) {
    if (e.tag === 3)
      yp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          yp(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (zl === null || !zl.has(l))) {
            e = Zt(n, e), n = bd(2), l = Tl(t, n, 2), l !== null && (vd(
              n,
              l,
              t,
              e
            ), Ln(l, 2), _n(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function As(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Dg();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (bs = !0, a.add(n), e = jg.bind(null, e, t, n), t.then(e, e));
  }
  function jg(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ce === e && (de & n) === n && (Ve === 4 || Ve === 3 && (de & 62914560) === de && 300 > Ye() - uo ? (Te & 2) === 0 && tr(e, 0) : vs |= n, Ja === de && (Ja = 0)), _n(e);
  }
  function bp(e, t) {
    t === 0 && (t = Mn()), e = aa(e, t), e !== null && (Ln(e, t), _n(e));
  }
  function Hg(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), bp(e, n);
  }
  function Bg(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    l !== null && l.delete(t), bp(e, n);
  }
  function qg(e, t) {
    return Sa(e, t);
  }
  var go = null, lr = null, _s = !1, yo = !1, zs = !1, Cl = 0;
  function _n(e) {
    e !== lr && e.next === null && (lr === null ? go = lr = e : lr = lr.next = e), yo = !0, _s || (_s = !0, Vg());
  }
  function ei(e, t) {
    if (!zs && yo) {
      zs = !0;
      do
        for (var n = !1, l = go; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var r = 0;
            else {
              var u = l.suspendedLanes, f = l.pingedLanes;
              r = (1 << 31 - rt(42 | e) + 1) - 1, r &= a & ~(u & ~f), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (n = !0, Tp(l, r));
          } else
            r = de, r = Rn(
              l,
              l === Ce ? r : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (r & 3) === 0 || Sn(l, r) || (n = !0, Tp(l, r));
          l = l.next;
        }
      while (n);
      zs = !1;
    }
  }
  function Gg() {
    vp();
  }
  function vp() {
    yo = _s = !1;
    var e = 0;
    Cl !== 0 && Wg() && (e = Cl);
    for (var t = Ye(), n = null, l = go; l !== null; ) {
      var a = l.next, r = Sp(l, t);
      r === 0 ? (l.next = null, n === null ? go = a : n.next = a, a === null && (lr = n)) : (n = l, (e !== 0 || (r & 3) !== 0) && (yo = !0)), l = a;
    }
    et !== 0 && et !== 5 || ei(e), Cl !== 0 && (Cl = 0);
  }
  function Sp(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
      var u = 31 - rt(r), f = 1 << u, p = a[u];
      p === -1 ? ((f & n) === 0 || (f & l) !== 0) && (a[u] = Kt(f, t)) : p <= t && (e.expiredLanes |= f), r &= ~f;
    }
    if (t = Ce, n = de, n = Rn(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && wa(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Sn(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && wa(l), gr(n)) {
        case 2:
        case 8:
          n = ka;
          break;
        case 32:
          n = al;
          break;
        case 268435456:
          n = Il;
          break;
        default:
          n = al;
      }
      return l = wp.bind(null, e), n = Sa(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && wa(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function wp(e, t) {
    if (et !== 0 && et !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (ho() && e.callbackNode !== n)
      return null;
    var l = de;
    return l = Rn(
      e,
      e === Ce ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (np(e, l, t), Sp(e, Ye()), e.callbackNode != null && e.callbackNode === n ? wp.bind(null, e) : null);
  }
  function Tp(e, t) {
    if (ho()) return null;
    np(e, t, !0);
  }
  function Vg() {
    ey(function() {
      (Te & 6) !== 0 ? Sa(
        Ta,
        Gg
      ) : vp();
    });
  }
  function Ns() {
    if (Cl === 0) {
      var e = Va;
      e === 0 && (e = Kl, Kl <<= 1, (Kl & 261888) === 0 && (Kl = 256)), Cl = e;
    }
    return Cl;
  }
  function kp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _t("" + e);
  }
  function Ep(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Yg(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var r = kp(
        (a[Fe] || null).action
      ), u = l.submitter;
      u && (t = (t = u[Fe] || null) ? kp(t.formAction) : u.getAttribute("formAction"), t !== null && (r = t, u = null));
      var f = new zi(
        "action",
        "action",
        null,
        l,
        a
      );
      e.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Cl !== 0) {
                  var p = u ? Ep(a, u) : new FormData(a);
                  Ku(
                    n,
                    {
                      pending: !0,
                      data: p,
                      method: a.method,
                      action: r
                    },
                    null,
                    p
                  );
                }
              } else
                typeof r == "function" && (f.preventDefault(), p = u ? Ep(a, u) : new FormData(a), Ku(
                  n,
                  {
                    pending: !0,
                    data: p,
                    method: a.method,
                    action: r
                  },
                  r,
                  p
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Os = 0; Os < du.length; Os++) {
    var Cs = du[Os], Fg = Cs.toLowerCase(), Xg = Cs[0].toUpperCase() + Cs.slice(1);
    mn(
      Fg,
      "on" + Xg
    );
  }
  mn(ef, "onAnimationEnd"), mn(tf, "onAnimationIteration"), mn(nf, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(og, "onTransitionRun"), mn(ug, "onTransitionStart"), mn(sg, "onTransitionCancel"), mn(lf, "onTransitionEnd"), jn("onMouseEnter", ["mouseout", "mouseover"]), jn("onMouseLeave", ["mouseout", "mouseover"]), jn("onPointerEnter", ["pointerout", "pointerover"]), jn("onPointerLeave", ["pointerout", "pointerover"]), Tn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Tn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Tn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Tn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Tn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Tn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ti = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Qg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ti)
  );
  function xp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], a = l.event;
      l = l.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var u = l.length - 1; 0 <= u; u--) {
            var f = l[u], p = f.instance, w = f.currentTarget;
            if (f = f.listener, p !== r && a.isPropagationStopped())
              break e;
            r = f, a.currentTarget = w;
            try {
              r(a);
            } catch (z) {
              Ci(z);
            }
            a.currentTarget = null, r = p;
          }
        else
          for (u = 0; u < l.length; u++) {
            if (f = l[u], p = f.instance, w = f.currentTarget, f = f.listener, p !== r && a.isPropagationStopped())
              break e;
            r = f, a.currentTarget = w;
            try {
              r(a);
            } catch (z) {
              Ci(z);
            }
            a.currentTarget = null, r = p;
          }
      }
    }
  }
  function fe(e, t) {
    var n = t[Aa];
    n === void 0 && (n = t[Aa] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (Ap(t, e, 2, !1), n.add(l));
  }
  function Ds(e, t, n) {
    var l = 0;
    t && (l |= 4), Ap(
      n,
      e,
      l,
      t
    );
  }
  var bo = "_reactListening" + Math.random().toString(36).slice(2);
  function Rs(e) {
    if (!e[bo]) {
      e[bo] = !0, Ti.forEach(function(n) {
        n !== "selectionchange" && (Qg.has(n) || Ds(n, !1, e), Ds(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[bo] || (t[bo] = !0, Ds("selectionchange", !1, t));
    }
  }
  function Ap(e, t, n, l) {
    switch (tm(t)) {
      case 2:
        var a = Sy;
        break;
      case 8:
        a = wy;
        break;
      default:
        a = Is;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !Jo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function Ms(e, t, n, l, a) {
    var r = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var u = l.tag;
        if (u === 3 || u === 4) {
          var f = l.stateNode.containerInfo;
          if (f === a) break;
          if (u === 4)
            for (u = l.return; u !== null; ) {
              var p = u.tag;
              if ((p === 3 || p === 4) && u.stateNode.containerInfo === a)
                return;
              u = u.return;
            }
          for (; f !== null; ) {
            if (u = fl(f), u === null) return;
            if (p = u.tag, p === 5 || p === 6 || p === 26 || p === 27) {
              l = r = u;
              continue e;
            }
            f = f.parentNode;
          }
        }
        l = l.return;
      }
    Oc(function() {
      var w = r, z = Zo(n), C = [];
      e: {
        var k = af.get(e);
        if (k !== void 0) {
          var E = zi, F = e;
          switch (e) {
            case "keypress":
              if (Ai(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = Bh;
              break;
            case "focusin":
              F = "focus", E = lu;
              break;
            case "focusout":
              F = "blur", E = lu;
              break;
            case "beforeblur":
            case "afterblur":
              E = lu;
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
              E = Rc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = _h;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Vh;
              break;
            case ef:
            case tf:
            case nf:
              E = Oh;
              break;
            case lf:
              E = Fh;
              break;
            case "scroll":
            case "scrollend":
              E = xh;
              break;
            case "wheel":
              E = Qh;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = Dh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = Lc;
              break;
            case "toggle":
            case "beforetoggle":
              E = Ih;
          }
          var J = (t & 4) !== 0, Oe = !J && (e === "scroll" || e === "scrollend"), v = J ? k !== null ? k + "Capture" : null : k;
          J = [];
          for (var y = w, S; y !== null; ) {
            var N = y;
            if (S = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || S === null || v === null || (N = kr(y, v), N != null && J.push(
              ni(y, N, S)
            )), Oe) break;
            y = y.return;
          }
          0 < J.length && (k = new E(
            k,
            F,
            null,
            n,
            z
          ), C.push({ event: k, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (k = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", k && n !== Po && (F = n.relatedTarget || n.fromElement) && (fl(F) || F[cl]))
            break e;
          if ((E || k) && (k = z.window === z ? z : (k = z.ownerDocument) ? k.defaultView || k.parentWindow : window, E ? (F = n.relatedTarget || n.toElement, E = w, F = F ? fl(F) : null, F !== null && (Oe = T(F), J = F.tag, F !== Oe || J !== 5 && J !== 27 && J !== 6) && (F = null)) : (E = null, F = w), E !== F)) {
            if (J = Rc, N = "onMouseLeave", v = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (J = Lc, N = "onPointerLeave", v = "onPointerEnter", y = "pointer"), Oe = E == null ? k : Mt(E), S = F == null ? k : Mt(F), k = new J(
              N,
              y + "leave",
              E,
              n,
              z
            ), k.target = Oe, k.relatedTarget = S, N = null, fl(z) === w && (J = new J(
              v,
              y + "enter",
              F,
              n,
              z
            ), J.target = S, J.relatedTarget = Oe, N = J), Oe = N, E && F)
              t: {
                for (J = $g, v = E, y = F, S = 0, N = v; N; N = J(N))
                  S++;
                N = 0;
                for (var K = y; K; K = J(K))
                  N++;
                for (; 0 < S - N; )
                  v = J(v), S--;
                for (; 0 < N - S; )
                  y = J(y), N--;
                for (; S--; ) {
                  if (v === y || y !== null && v === y.alternate) {
                    J = v;
                    break t;
                  }
                  v = J(v), y = J(y);
                }
                J = null;
              }
            else J = null;
            E !== null && _p(
              C,
              k,
              E,
              J,
              !1
            ), F !== null && Oe !== null && _p(
              C,
              Oe,
              F,
              J,
              !0
            );
          }
        }
        e: {
          if (k = w ? Mt(w) : window, E = k.nodeName && k.nodeName.toLowerCase(), E === "select" || E === "input" && k.type === "file")
            var ve = Yc;
          else if (Gc(k))
            if (Fc)
              ve = ag;
            else {
              ve = ng;
              var Q = tg;
            }
          else
            E = k.nodeName, !E || E.toLowerCase() !== "input" || k.type !== "checkbox" && k.type !== "radio" ? w && lt(w.elementType) && (ve = Yc) : ve = lg;
          if (ve && (ve = ve(e, w))) {
            Vc(
              C,
              ve,
              n,
              z
            );
            break e;
          }
          Q && Q(e, k, w), e === "focusout" && w && k.type === "number" && w.memoizedProps.value != null && b(k, "number", k.value);
        }
        switch (Q = w ? Mt(w) : window, e) {
          case "focusin":
            (Gc(Q) || Q.contentEditable === "true") && (Ma = Q, su = w, Cr = null);
            break;
          case "focusout":
            Cr = su = Ma = null;
            break;
          case "mousedown":
            cu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            cu = !1, Wc(C, n, z);
            break;
          case "selectionchange":
            if (ig) break;
          case "keydown":
          case "keyup":
            Wc(C, n, z);
        }
        var ae;
        if (ru)
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
          Ra ? Bc(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (Uc && n.locale !== "ko" && (Ra || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Ra && (ae = Cc()) : (hl = z, eu = "value" in hl ? hl.value : hl.textContent, Ra = !0)), Q = vo(w, pe), 0 < Q.length && (pe = new Mc(
          pe,
          e,
          null,
          n,
          z
        ), C.push({ event: pe, listeners: Q }), ae ? pe.data = ae : (ae = qc(n), ae !== null && (pe.data = ae)))), (ae = Ph ? Zh(e, n) : Wh(e, n)) && (pe = vo(w, "onBeforeInput"), 0 < pe.length && (Q = new Mc(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          z
        ), C.push({
          event: Q,
          listeners: pe
        }), Q.data = ae)), Yg(
          C,
          e,
          w,
          n,
          z
        );
      }
      xp(C, t);
    });
  }
  function ni(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function vo(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, r = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || r === null || (a = kr(e, n), a != null && l.unshift(
        ni(e, a, r)
      ), a = kr(e, t), a != null && l.push(
        ni(e, a, r)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function $g(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _p(e, t, n, l, a) {
    for (var r = t._reactName, u = []; n !== null && n !== l; ) {
      var f = n, p = f.alternate, w = f.stateNode;
      if (f = f.tag, p !== null && p === l) break;
      f !== 5 && f !== 26 && f !== 27 || w === null || (p = w, a ? (w = kr(n, r), w != null && u.unshift(
        ni(n, w, p)
      )) : a || (w = kr(n, r), w != null && u.push(
        ni(n, w, p)
      ))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Ig = /\r\n?/g, Kg = /\u0000|\uFFFD/g;
  function zp(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ig, `
`).replace(Kg, "");
  }
  function Np(e, t) {
    return t = zp(t), zp(e) === t;
  }
  function Ne(e, t, n, l, a, r) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || $(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && $(e, "" + l);
        break;
      case "className":
        xt(e, "class", l);
        break;
      case "tabIndex":
        xt(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xt(e, n, l);
        break;
      case "style":
        mt(e, l, r);
        break;
      case "data":
        if (t !== "object") {
          xt(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = _t("" + l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (n === "formAction" ? (t !== "input" && Ne(e, t, "name", a.name, a, null), Ne(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Ne(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Ne(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Ne(e, t, "encType", a.encType, a, null), Ne(e, t, "method", a.method, a, null), Ne(e, t, "target", a.target, a, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = _t("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = it);
        break;
      case "onScroll":
        l != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && fe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = _t("" + l), e.setAttributeNS(
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
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        fe("beforetoggle", e), fe("toggle", e), kn(e, "popover", l);
        break;
      case "xlinkActuate":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        kn(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = bt.get(n) || n, kn(e, n, l));
    }
  }
  function Ls(e, t, n, l, a, r) {
    switch (n) {
      case "style":
        mt(e, l, r);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? $(e, l) : (typeof l == "number" || typeof l == "bigint") && $(e, "" + l);
        break;
      case "onScroll":
        l != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && fe("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = it);
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
        if (!ki.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), r = e[Fe] || null, r = r != null ? r[n] : null, typeof r == "function" && e.removeEventListener(t, r, a), typeof l == "function")) {
              typeof r != "function" && r !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : kn(e, n, l);
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
        var l = !1, a = !1, r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var u = n[r];
            if (u != null)
              switch (r) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Ne(e, t, r, u, n, null);
              }
          }
        a && Ne(e, t, "srcSet", n.srcSet, n, null), l && Ne(e, t, "src", n.src, n, null);
        return;
      case "input":
        fe("invalid", e);
        var f = r = u = a = null, p = null, w = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var z = n[l];
            if (z != null)
              switch (l) {
                case "name":
                  a = z;
                  break;
                case "type":
                  u = z;
                  break;
                case "checked":
                  p = z;
                  break;
                case "defaultChecked":
                  w = z;
                  break;
                case "value":
                  r = z;
                  break;
                case "defaultValue":
                  f = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Ne(e, t, l, z, n, null);
              }
          }
        Oa(
          e,
          r,
          f,
          p,
          w,
          u,
          a,
          !1
        );
        return;
      case "select":
        fe("invalid", e), l = u = r = null;
        for (a in n)
          if (n.hasOwnProperty(a) && (f = n[a], f != null))
            switch (a) {
              case "value":
                r = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "multiple":
                l = f;
              default:
                Ne(e, t, a, f, n, null);
            }
        t = r, n = u, e.multiple = !!l, t != null ? g(e, !!l, t, !1) : n != null && g(e, !!l, n, !0);
        return;
      case "textarea":
        fe("invalid", e), r = a = l = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (f = n[u], f != null))
            switch (u) {
              case "value":
                l = f;
                break;
              case "defaultValue":
                a = f;
                break;
              case "children":
                r = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(c(91));
                break;
              default:
                Ne(e, t, u, f, n, null);
            }
        j(e, l, a, r);
        return;
      case "option":
        for (p in n)
          if (n.hasOwnProperty(p) && (l = n[p], l != null))
            switch (p) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ne(e, t, p, l, n, null);
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
        for (l = 0; l < ti.length; l++)
          fe(ti[l], e);
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
        for (w in n)
          if (n.hasOwnProperty(w) && (l = n[w], l != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ne(e, t, w, l, n, null);
            }
        return;
      default:
        if (lt(t)) {
          for (z in n)
            n.hasOwnProperty(z) && (l = n[z], l !== void 0 && Ls(
              e,
              t,
              z,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (f in n)
      n.hasOwnProperty(f) && (l = n[f], l != null && Ne(e, t, f, l, n, null));
  }
  function Pg(e, t, n, l) {
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
        var a = null, r = null, u = null, f = null, p = null, w = null, z = null;
        for (E in n) {
          var C = n[E];
          if (n.hasOwnProperty(E) && C != null)
            switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                p = C;
              default:
                l.hasOwnProperty(E) || Ne(e, t, E, null, l, C);
            }
        }
        for (var k in l) {
          var E = l[k];
          if (C = n[k], l.hasOwnProperty(k) && (E != null || C != null))
            switch (k) {
              case "type":
                r = E;
                break;
              case "name":
                a = E;
                break;
              case "checked":
                w = E;
                break;
              case "defaultChecked":
                z = E;
                break;
              case "value":
                u = E;
                break;
              case "defaultValue":
                f = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(c(137, t));
                break;
              default:
                E !== C && Ne(
                  e,
                  t,
                  k,
                  E,
                  l,
                  C
                );
            }
        }
        ml(
          e,
          u,
          f,
          p,
          w,
          z,
          r,
          a
        );
        return;
      case "select":
        E = u = f = k = null;
        for (r in n)
          if (p = n[r], n.hasOwnProperty(r) && p != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                E = p;
              default:
                l.hasOwnProperty(r) || Ne(
                  e,
                  t,
                  r,
                  null,
                  l,
                  p
                );
            }
        for (a in l)
          if (r = l[a], p = n[a], l.hasOwnProperty(a) && (r != null || p != null))
            switch (a) {
              case "value":
                k = r;
                break;
              case "defaultValue":
                f = r;
                break;
              case "multiple":
                u = r;
              default:
                r !== p && Ne(
                  e,
                  t,
                  a,
                  r,
                  l,
                  p
                );
            }
        t = f, n = u, l = E, k != null ? g(e, !!n, k, !1) : !!l != !!n && (t != null ? g(e, !!n, t, !0) : g(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        E = k = null;
        for (f in n)
          if (a = n[f], n.hasOwnProperty(f) && a != null && !l.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ne(e, t, f, null, l, a);
            }
        for (u in l)
          if (a = l[u], r = n[u], l.hasOwnProperty(u) && (a != null || r != null))
            switch (u) {
              case "value":
                k = a;
                break;
              case "defaultValue":
                E = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(c(91));
                break;
              default:
                a !== r && Ne(e, t, u, a, l, r);
            }
        _(e, k, E);
        return;
      case "option":
        for (var F in n)
          if (k = n[F], n.hasOwnProperty(F) && k != null && !l.hasOwnProperty(F))
            switch (F) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ne(
                  e,
                  t,
                  F,
                  null,
                  l,
                  k
                );
            }
        for (p in l)
          if (k = l[p], E = n[p], l.hasOwnProperty(p) && k !== E && (k != null || E != null))
            switch (p) {
              case "selected":
                e.selected = k && typeof k != "function" && typeof k != "symbol";
                break;
              default:
                Ne(
                  e,
                  t,
                  p,
                  k,
                  l,
                  E
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
        for (var J in n)
          k = n[J], n.hasOwnProperty(J) && k != null && !l.hasOwnProperty(J) && Ne(e, t, J, null, l, k);
        for (w in l)
          if (k = l[w], E = n[w], l.hasOwnProperty(w) && k !== E && (k != null || E != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null)
                  throw Error(c(137, t));
                break;
              default:
                Ne(
                  e,
                  t,
                  w,
                  k,
                  l,
                  E
                );
            }
        return;
      default:
        if (lt(t)) {
          for (var Oe in n)
            k = n[Oe], n.hasOwnProperty(Oe) && k !== void 0 && !l.hasOwnProperty(Oe) && Ls(
              e,
              t,
              Oe,
              void 0,
              l,
              k
            );
          for (z in l)
            k = l[z], E = n[z], !l.hasOwnProperty(z) || k === E || k === void 0 && E === void 0 || Ls(
              e,
              t,
              z,
              k,
              l,
              E
            );
          return;
        }
    }
    for (var v in n)
      k = n[v], n.hasOwnProperty(v) && k != null && !l.hasOwnProperty(v) && Ne(e, t, v, null, l, k);
    for (C in l)
      k = l[C], E = n[C], !l.hasOwnProperty(C) || k === E || k == null && E == null || Ne(e, t, C, k, l, E);
  }
  function Op(e) {
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
  function Zg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], r = a.transferSize, u = a.initiatorType, f = a.duration;
        if (r && f && Op(u)) {
          for (u = 0, f = a.responseEnd, l += 1; l < n.length; l++) {
            var p = n[l], w = p.startTime;
            if (w > f) break;
            var z = p.transferSize, C = p.initiatorType;
            z && Op(C) && (p = p.responseEnd, u += z * (p < f ? 1 : (f - w) / (p - w)));
          }
          if (--l, t += 8 * (r + u) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Us = null, js = null;
  function So(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Cp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Dp(e, t) {
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
  function Hs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Bs = null;
  function Wg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Bs ? !1 : (Bs = e, !0) : (Bs = null, !1);
  }
  var Rp = typeof setTimeout == "function" ? setTimeout : void 0, Jg = typeof clearTimeout == "function" ? clearTimeout : void 0, Mp = typeof Promise == "function" ? Promise : void 0, ey = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mp < "u" ? function(e) {
    return Mp.resolve(null).then(e).catch(ty);
  } : Rp;
  function ty(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Dl(e) {
    return e === "head";
  }
  function Lp(e, t) {
    var n = t, l = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8)
        if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(a), or(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          li(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, li(n);
          for (var r = n.firstChild; r; ) {
            var u = r.nextSibling, f = r.nodeName;
            r[Jl] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && r.rel.toLowerCase() === "stylesheet" || n.removeChild(r), r = u;
          }
        } else
          n === "body" && li(e.ownerDocument.body);
      n = a;
    } while (n);
    or(t);
  }
  function Up(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = l;
    } while (n);
  }
  function qs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          qs(n), vr(n);
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
  function ny(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Jl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (r = e.getAttribute("rel"), r === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (r !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (r = e.getAttribute("src"), (r !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && r && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var r = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === r)
          return e;
      } else return e;
      if (e = tn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function ly(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = tn(e.nextSibling), e === null)) return null;
    return e;
  }
  function jp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = tn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Gs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Vs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function ay(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function tn(e) {
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
  var Ys = null;
  function Hp(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return tn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Bp(e) {
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
  function qp(e, t, n) {
    switch (t = So(n), e) {
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
  function li(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    vr(e);
  }
  var nn = /* @__PURE__ */ new Map(), Gp = /* @__PURE__ */ new Set();
  function wo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Jn = H.d;
  H.d = {
    f: ry,
    r: iy,
    D: oy,
    C: uy,
    L: sy,
    m: cy,
    X: dy,
    S: fy,
    M: py
  };
  function ry() {
    var e = Jn.f(), t = fo();
    return e || t;
  }
  function iy(e) {
    var t = dl(e);
    t !== null && t.tag === 5 && t.type === "form" ? ad(t) : Jn.r(e);
  }
  var ar = typeof document > "u" ? null : document;
  function Vp(e, t, n) {
    var l = ar;
    if (l && typeof t == "string" && t) {
      var a = Tt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Gp.has(a) || (Gp.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), ct(t, "link", e), Me(t), l.head.appendChild(t)));
    }
  }
  function oy(e) {
    Jn.D(e), Vp("dns-prefetch", e, null);
  }
  function uy(e, t) {
    Jn.C(e, t), Vp("preconnect", e, t);
  }
  function sy(e, t, n) {
    Jn.L(e, t, n);
    var l = ar;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + Tt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + Tt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + Tt(
        n.imageSizes
      ) + '"]')) : a += '[href="' + Tt(e) + '"]';
      var r = a;
      switch (t) {
        case "style":
          r = rr(e);
          break;
        case "script":
          r = ir(e);
      }
      nn.has(r) || (e = D(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), nn.set(r, e), l.querySelector(a) !== null || t === "style" && l.querySelector(ai(r)) || t === "script" && l.querySelector(ri(r)) || (t = l.createElement("link"), ct(t, "link", e), Me(t), l.head.appendChild(t)));
    }
  }
  function cy(e, t) {
    Jn.m(e, t);
    var n = ar;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Tt(l) + '"][href="' + Tt(e) + '"]', r = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = ir(e);
      }
      if (!nn.has(r) && (e = D({ rel: "modulepreload", href: e }, t), nn.set(r, e), n.querySelector(a) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ri(r)))
              return;
        }
        l = n.createElement("link"), ct(l, "link", e), Me(l), n.head.appendChild(l);
      }
    }
  }
  function fy(e, t, n) {
    Jn.S(e, t, n);
    var l = ar;
    if (l && e) {
      var a = Un(l).hoistableStyles, r = rr(e);
      t = t || "default";
      var u = a.get(r);
      if (!u) {
        var f = { loading: 0, preload: null };
        if (u = l.querySelector(
          ai(r)
        ))
          f.loading = 5;
        else {
          e = D(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = nn.get(r)) && Fs(e, n);
          var p = u = l.createElement("link");
          Me(p), ct(p, "link", e), p._p = new Promise(function(w, z) {
            p.onload = w, p.onerror = z;
          }), p.addEventListener("load", function() {
            f.loading |= 1;
          }), p.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, To(u, t, l);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: f
        }, a.set(r, u);
      }
    }
  }
  function dy(e, t) {
    Jn.X(e, t);
    var n = ar;
    if (n && e) {
      var l = Un(n).hoistableScripts, a = ir(e), r = l.get(a);
      r || (r = n.querySelector(ri(a)), r || (e = D({ src: e, async: !0 }, t), (t = nn.get(a)) && Xs(e, t), r = n.createElement("script"), Me(r), ct(r, "link", e), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, l.set(a, r));
    }
  }
  function py(e, t) {
    Jn.M(e, t);
    var n = ar;
    if (n && e) {
      var l = Un(n).hoistableScripts, a = ir(e), r = l.get(a);
      r || (r = n.querySelector(ri(a)), r || (e = D({ src: e, async: !0, type: "module" }, t), (t = nn.get(a)) && Xs(e, t), r = n.createElement("script"), Me(r), ct(r, "link", e), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, l.set(a, r));
    }
  }
  function Yp(e, t, n, l) {
    var a = (a = tt.current) ? wo(a) : null;
    if (!a) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = rr(n.href), n = Un(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = rr(n.href);
          var r = Un(
            a
          ).hoistableStyles, u = r.get(e);
          if (u || (a = a.ownerDocument || a, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(e, u), (r = a.querySelector(
            ai(e)
          )) && !r._p && (u.instance = r, u.state.loading = 5), nn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, nn.set(e, n), r || my(
            a,
            e,
            n,
            u.state
          ))), t && l === null)
            throw Error(c(528, ""));
          return u;
        }
        if (t && l !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ir(n), n = Un(
          a
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, e));
    }
  }
  function rr(e) {
    return 'href="' + Tt(e) + '"';
  }
  function ai(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Fp(e) {
    return D({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function my(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ct(t, "link", n), Me(t), e.head.appendChild(t));
  }
  function ir(e) {
    return '[src="' + Tt(e) + '"]';
  }
  function ri(e) {
    return "script[async]" + e;
  }
  function Xp(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Tt(n.href) + '"]'
          );
          if (l)
            return t.instance = l, Me(l), l;
          var a = D({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Me(l), ct(l, "style", a), To(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = rr(n.href);
          var r = e.querySelector(
            ai(a)
          );
          if (r)
            return t.state.loading |= 4, t.instance = r, Me(r), r;
          l = Fp(n), (a = nn.get(a)) && Fs(l, a), r = (e.ownerDocument || e).createElement("link"), Me(r);
          var u = r;
          return u._p = new Promise(function(f, p) {
            u.onload = f, u.onerror = p;
          }), ct(r, "link", l), t.state.loading |= 4, To(r, n.precedence, e), t.instance = r;
        case "script":
          return r = ir(n.src), (a = e.querySelector(
            ri(r)
          )) ? (t.instance = a, Me(a), a) : (l = n, (a = nn.get(r)) && (l = D({}, n), Xs(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Me(a), ct(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, To(l, n.precedence, e));
    return t.instance;
  }
  function To(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, r = a, u = 0; u < l.length; u++) {
      var f = l[u];
      if (f.dataset.precedence === t) r = f;
      else if (r !== a) break;
    }
    r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Fs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Xs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ko = null;
  function Qp(e, t, n) {
    if (ko === null) {
      var l = /* @__PURE__ */ new Map(), a = ko = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = ko, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var r = n[a];
      if (!(r[Jl] || r[oe] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = r.getAttribute(t) || "";
        u = e + u;
        var f = l.get(u);
        f ? f.push(r) : l.set(u, [r]);
      }
    }
    return l;
  }
  function $p(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function hy(e, t, n) {
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
  function Ip(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function gy(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = rr(l.href), r = t.querySelector(
          ai(a)
        );
        if (r) {
          t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Eo.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = r, Me(r);
          return;
        }
        r = t.ownerDocument || t, l = Fp(l), (a = nn.get(a)) && Fs(l, a), r = r.createElement("link"), Me(r);
        var u = r;
        u._p = new Promise(function(f, p) {
          u.onload = f, u.onerror = p;
        }), ct(r, "link", l), n.instance = r;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Eo.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Qs = 0;
  function yy(e, t) {
    return e.stylesheets && e.count === 0 && Ao(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ao(e, e.stylesheets), e.unsuspend) {
          var r = e.unsuspend;
          e.unsuspend = null, r();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Qs === 0 && (Qs = 62500 * Zg());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ao(e, e.stylesheets), e.unsuspend)) {
            var r = e.unsuspend;
            e.unsuspend = null, r();
          }
        },
        (e.imgBytes > Qs ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function Eo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ao(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var xo = null;
  function Ao(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, xo = /* @__PURE__ */ new Map(), t.forEach(by, e), xo = null, Eo.call(e));
  }
  function by(e, t) {
    if (!(t.state.loading & 4)) {
      var n = xo.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), xo.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < a.length; r++) {
          var u = a[r];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (n.set(u.dataset.precedence, u), l = u);
        }
        l && n.set(null, l);
      }
      a = t.instance, u = a.getAttribute("data-precedence"), r = n.get(u) || l, r === l && n.set(null, a), n.set(u, a), this.count++, l = Eo.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), r ? r.parentNode.insertBefore(a, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ii = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0
  };
  function vy(e, t, n, l, a, r, u, f, p) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Zl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.hiddenUpdates = Zl(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = r, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kp(e, t, n, l, a, r, u, f, p, w, z, C) {
    return e = new vy(
      e,
      t,
      n,
      u,
      p,
      w,
      z,
      C,
      f
    ), t = 1, r === !0 && (t |= 24), r = Bt(3, null, null, t), e.current = r, r.stateNode = e, t = xu(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Nu(r), e;
  }
  function Pp(e) {
    return e ? (e = ja, e) : ja;
  }
  function Zp(e, t, n, l, a, r) {
    a = Pp(a), l.context === null ? l.context = a : l.pendingContext = a, l = wl(t), l.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (l.callback = r), n = Tl(e, l, t), n !== null && (Rt(n, e, t), Hr(n, e, t));
  }
  function Wp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function $s(e, t) {
    Wp(e, t), (e = e.alternate) && Wp(e, t);
  }
  function Jp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = aa(e, 67108864);
      t !== null && Rt(t, e, 67108864), $s(e, 67108864);
    }
  }
  function em(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ft();
      t = Wl(t);
      var n = aa(e, t);
      n !== null && Rt(n, e, t), $s(e, t);
    }
  }
  var _o = !0;
  function Sy(e, t, n, l) {
    var a = R.T;
    R.T = null;
    var r = H.p;
    try {
      H.p = 2, Is(e, t, n, l);
    } finally {
      H.p = r, R.T = a;
    }
  }
  function wy(e, t, n, l) {
    var a = R.T;
    R.T = null;
    var r = H.p;
    try {
      H.p = 8, Is(e, t, n, l);
    } finally {
      H.p = r, R.T = a;
    }
  }
  function Is(e, t, n, l) {
    if (_o) {
      var a = Ks(l);
      if (a === null)
        Ms(
          e,
          t,
          l,
          zo,
          n
        ), nm(e, l);
      else if (ky(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (nm(e, l), t & 4 && -1 < Ty.indexOf(e)) {
        for (; a !== null; ) {
          var r = dl(a);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var u = vn(r.pendingLanes);
                  if (u !== 0) {
                    var f = r;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; u; ) {
                      var p = 1 << 31 - rt(u);
                      f.entanglements[1] |= p, u &= ~p;
                    }
                    _n(r), (Te & 6) === 0 && (so = Ye() + 500, ei(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = aa(r, 2), f !== null && Rt(f, r, 2), fo(), $s(r, 2);
            }
          if (r = Ks(l), r === null && Ms(
            e,
            t,
            l,
            zo,
            n
          ), r === a) break;
          a = r;
        }
        a !== null && l.stopPropagation();
      } else
        Ms(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function Ks(e) {
    return e = Zo(e), Ps(e);
  }
  var zo = null;
  function Ps(e) {
    if (zo = null, e = fl(e), e !== null) {
      var t = T(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = A(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = x(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return zo = e, null;
  }
  function tm(e) {
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
        switch (dr()) {
          case Ta:
            return 2;
          case ka:
            return 8;
          case al:
          case rl:
            return 32;
          case Il:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zs = !1, Rl = null, Ml = null, Ll = null, oi = /* @__PURE__ */ new Map(), ui = /* @__PURE__ */ new Map(), Ul = [], Ty = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function nm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Rl = null;
        break;
      case "dragenter":
      case "dragleave":
        Ml = null;
        break;
      case "mouseover":
      case "mouseout":
        Ll = null;
        break;
      case "pointerover":
      case "pointerout":
        oi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ui.delete(t.pointerId);
    }
  }
  function si(e, t, n, l, a, r) {
    return e === null || e.nativeEvent !== r ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: r,
      targetContainers: [a]
    }, t !== null && (t = dl(t), t !== null && Jp(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function ky(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return Rl = si(
          Rl,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return Ml = si(
          Ml,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return Ll = si(
          Ll,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "pointerover":
        var r = a.pointerId;
        return oi.set(
          r,
          si(
            oi.get(r) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
      case "gotpointercapture":
        return r = a.pointerId, ui.set(
          r,
          si(
            ui.get(r) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
    }
    return !1;
  }
  function lm(e) {
    var t = fl(e.target);
    if (t !== null) {
      var n = T(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = A(n), t !== null) {
            e.blockedOn = t, Si(e.priority, function() {
              em(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = x(n), t !== null) {
            e.blockedOn = t, Si(e.priority, function() {
              em(n);
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
  function No(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ks(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Po = l, n.target.dispatchEvent(l), Po = null;
      } else
        return t = dl(n), t !== null && Jp(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function am(e, t, n) {
    No(e) && n.delete(t);
  }
  function Ey() {
    Zs = !1, Rl !== null && No(Rl) && (Rl = null), Ml !== null && No(Ml) && (Ml = null), Ll !== null && No(Ll) && (Ll = null), oi.forEach(am), ui.forEach(am);
  }
  function Oo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zs || (Zs = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      Ey
    )));
  }
  var Co = null;
  function rm(e) {
    Co !== e && (Co = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Co === e && (Co = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (Ps(l || n) === null)
              continue;
            break;
          }
          var r = dl(n);
          r !== null && (e.splice(t, 3), t -= 3, Ku(
            r,
            {
              pending: !0,
              data: a,
              method: n.method,
              action: l
            },
            l,
            a
          ));
        }
      }
    ));
  }
  function or(e) {
    function t(p) {
      return Oo(p, e);
    }
    Rl !== null && Oo(Rl, e), Ml !== null && Oo(Ml, e), Ll !== null && Oo(Ll, e), oi.forEach(t), ui.forEach(t);
    for (var n = 0; n < Ul.length; n++) {
      var l = Ul[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Ul.length && (n = Ul[0], n.blockedOn === null); )
      lm(n), n.blockedOn === null && Ul.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], r = n[l + 1], u = a[Fe] || null;
        if (typeof r == "function")
          u || rm(n);
        else if (u) {
          var f = null;
          if (r && r.hasAttribute("formAction")) {
            if (a = r, u = r[Fe] || null)
              f = u.formAction;
            else if (Ps(a) !== null) continue;
          } else f = u.action;
          typeof f == "function" ? n[l + 1] = f : (n.splice(l, 3), l -= 3), rm(n);
        }
      }
  }
  function im() {
    function e(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(u) {
            return a = u;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      a !== null && (a(), a = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, a = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
      };
    }
  }
  function Ws(e) {
    this._internalRoot = e;
  }
  Do.prototype.render = Ws.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, l = Ft();
    Zp(n, l, e, t, null, null);
  }, Do.prototype.unmount = Ws.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Zp(e.current, 2, null, e, null, null), fo(), t[cl] = null;
    }
  };
  function Do(e) {
    this._internalRoot = e;
  }
  Do.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = sl();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ul.length && t !== 0 && t < Ul[n].priority; n++) ;
      Ul.splice(n, 0, e), n === 0 && lm(e);
    }
  };
  var om = s.version;
  if (om !== "19.2.6")
    throw Error(
      c(
        527,
        om,
        "19.2.6"
      )
    );
  H.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = L(t), e = e !== null ? M(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var xy = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ro.isDisabled && Ro.supportsFiber)
      try {
        il = Ro.inject(
          xy
        ), pt = Ro;
      } catch {
      }
  }
  return vm.createRoot = function(e, t) {
    if (!h(e)) throw Error(c(299));
    var n = !1, l = "", a = md, r = hd, u = gd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Kp(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      a,
      r,
      u,
      im
    ), e[cl] = t.current, Rs(e), new Ws(t);
  }, vm.hydrateRoot = function(e, t, n) {
    if (!h(e)) throw Error(c(299));
    var l = !1, a = "", r = md, u = hd, f = gd, p = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (p = n.formState)), t = Kp(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      p,
      r,
      u,
      f,
      im
    ), t.context = Pp(null), n = t.current, l = Ft(), l = Wl(l), a = wl(l), a.callback = null, Tl(n, a, l), n = l, t.current.lanes = n, Ln(t, n), _n(t), e[cl] = t.current, Rs(e), new Do(t);
  }, vm.version = "19.2.6", vm;
}
var Vv;
function Ox() {
  if (Vv) return c0.exports;
  Vv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), c0.exports = Nx(), c0.exports;
}
var Cx = Ox();
const kS = (i, o, s) => {
  Cx.createRoot(s).render(Et.createElement(i, o));
}, Mx = ({ targetSelector: i, props: o }) => {
  kS(wS, o, document.querySelector(i));
}, Lx = ({ targetSelector: i, props: o }) => {
  kS(TS, o, document.querySelector(i));
};
export {
  wS as CardsGridEvents,
  TS as CardsListEvents,
  Mx as initCardsGridEventsComponent,
  Lx as initCardsListEventsComponent
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
