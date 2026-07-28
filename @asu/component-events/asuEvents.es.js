import kt, { forwardRef as on, createContext as kS, useState as Fo, useRef as Xm, useId as Vv, useCallback as p0, useEffect as Io, Children as Yv, isValidElement as Fv, createElement as Xv, useContext as Qv } from "react";
import Iv from "react-dom";
function xS(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var _y = { exports: {} }, um = {};
var K0;
function AS() {
  if (K0) return um;
  K0 = 1;
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
var Z0;
function _S() {
  return Z0 || (Z0 = 1, _y.exports = AS()), _y.exports;
}
var Vl = _S();
function W0(i, o) {
  (o == null || o > i.length) && (o = i.length);
  for (var s = 0, d = Array(o); s < o; s++) d[s] = i[s];
  return d;
}
function NS(i) {
  if (Array.isArray(i)) return i;
}
function OS(i, o) {
  var s = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (s != null) {
    var d, c, h, T, A = [], x = !0, C = !1;
    try {
      if (h = (s = s.call(i)).next, o !== 0) for (; !(x = (d = h.call(s)).done) && (A.push(d.value), A.length !== o); x = !0) ;
    } catch (L) {
      C = !0, c = L;
    } finally {
      try {
        if (!x && s.return != null && (T = s.return(), Object(T) !== T)) return;
      } finally {
        if (C) throw c;
      }
    }
    return A;
  }
}
function CS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zS(i, o) {
  return NS(i) || OS(i, o) || DS(i, o) || CS();
}
function DS(i, o) {
  if (i) {
    if (typeof i == "string") return W0(i, o);
    var s = {}.toString.call(i).slice(8, -1);
    return s === "Object" && i.constructor && (s = i.constructor.name), s === "Map" || s === "Set" ? Array.from(i) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? W0(i, o) : void 0;
  }
}
const $v = Object.entries, J0 = Object.setPrototypeOf, RS = Object.isFrozen, MS = Object.getPrototypeOf, LS = Object.getOwnPropertyDescriptor;
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
const sm = Cn(Array.prototype.forEach), US = Cn(Array.prototype.lastIndexOf), eb = Cn(Array.prototype.pop), gc = Cn(Array.prototype.push), jS = Cn(Array.prototype.splice), Go = Array.isArray, Sm = Cn(String.prototype.toLowerCase), Ny = Cn(String.prototype.toString), tb = Cn(String.prototype.match), cm = Cn(String.prototype.replace), nb = Cn(String.prototype.indexOf), BS = Cn(String.prototype.trim), HS = Cn(Number.prototype.toString), qS = Cn(Boolean.prototype.toString), lb = typeof BigInt > "u" ? null : Cn(BigInt.prototype.toString), ab = typeof Symbol > "u" ? null : Cn(Symbol.prototype.toString), nl = Cn(Object.prototype.hasOwnProperty), fm = Cn(Object.prototype.toString), Bl = Cn(RegExp.prototype.test), Js = GS(TypeError);
function Cn(i) {
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
  if (J0 && J0(i, null), !Go(o))
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
  for (const d of $v(i)) {
    var s = zS(d, 2);
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
      return HS(i);
    case "boolean":
      return qS(i);
    case "bigint":
      return lb ? lb(i) : "0";
    case "symbol":
      return ab ? ab(i) : "Symbol()";
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
        return Cn(d.get);
      if (typeof d.value == "function")
        return Cn(d.value);
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
    return Bl(i, ""), !0;
  } catch {
    return !1;
  }
}
const rb = ql(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Oy = ql(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Cy = ql(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), XS = ql(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), zy = ql(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), QS = ql(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ib = ql(["#text"]), ob = ql(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Dy = ql(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ub = ql(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Um = ql(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), IS = Yl(/{{[\w\W]*|^[\w\W]*}}/g), $S = Yl(/<%[\w\W]*|^[\w\W]*%>/g), PS = Yl(/\${[\w\W]*/g), KS = Yl(/^data-[\-\w.\u00B7-\uFFFF]+$/), ZS = Yl(/^aria-[\-\w]+$/), sb = Yl(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), WS = Yl(/^(?:\w+script|data):/i), JS = Yl(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ew = Yl(/^html$/i), tw = Yl(/^[a-z][.\w]*(-[.\w]+)+$/i), cb = Yl(/<[/\w!]/g), nw = Yl(/<[/\w]/g), lw = Yl(/<\/no(script|embed|frames)/i), aw = Yl(/\/>/i), mi = {
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
}, fb = function() {
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
function Kv() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : rw();
  const o = (b) => Kv(b);
  if (o.version = "3.4.11", o.removed = [], !i || !i.document || i.document.nodeType !== mi.document || !i.Element)
    return o.isSupported = !1, o;
  let s = i.document;
  const d = s, c = d.currentScript;
  i.DocumentFragment;
  const h = i.HTMLTemplateElement, T = i.Node, A = i.Element, x = i.NodeFilter, C = i.NamedNodeMap;
  C === void 0 && (i.NamedNodeMap || i.MozNamedAttrMap), i.HTMLFormElement;
  const L = i.DOMParser, M = i.trustedTypes, D = A.prototype, te = gi(D, "cloneNode"), G = gi(D, "remove"), Y = gi(D, "nextSibling"), W = gi(D, "childNodes"), J = gi(D, "parentNode"), H = gi(D, "shadowRoot"), be = gi(D, "attributes"), ee = T && T.prototype ? gi(T.prototype, "nodeType") : null, ne = T && T.prototype ? gi(T.prototype, "nodeName") : null;
  if (typeof h == "function") {
    const b = s.createElement("template");
    b.content && b.content.ownerDocument && (s = b.content.ownerDocument);
  }
  let q, V = "", K, ke = !1, Be = 0;
  const qe = function() {
    if (Be > 0)
      throw Js('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, He = function(g) {
    qe(), Be++;
    try {
      return q.createHTML(g);
    } finally {
      Be--;
    }
  }, _e = function(g) {
    qe(), Be++;
    try {
      return q.createScriptURL(g);
    } finally {
      Be--;
    }
  }, gt = function() {
    return ke || (K = iw(M, c), ke = !0), K;
  }, Ie = s, U = Ie.implementation, R = Ie.createNodeIterator, B = Ie.createDocumentFragment, re = Ie.getElementsByTagName, se = d.importNode;
  let ie = fb();
  o.isSupported = typeof $v == "function" && typeof J == "function" && U && U.createHTMLDocument !== void 0;
  const we = IS, ue = $S, $ = PS, ge = KS, yt = ZS, tt = WS, fn = JS, dn = tw;
  let nt = sb, De = null;
  const Xl = ft({}, [...rb, ...Oy, ...Cy, ...zy, ...ib]);
  let Re = null;
  const cr = ft({}, [...ob, ...Dy, ...ub, ...Um]);
  let Ee = Object.seal(Sc(null, {
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
  let fr = !0, Ql = !0, Sa = !1, wa = !0, bn = !1, Il = !0, Ye = !1, dr = !1, Ta = null, Ea = null, al = !1, rl = !1, $l = !1, ka = !1, vi = !0, il = !1;
  const pt = "user-content-";
  let It = !0, rt = !1, ol = {}, $t = null;
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
  let Pl = null;
  const Kl = ft({}, ["audio", "video", "img", "source", "image", "track"]);
  let ul = null;
  const vn = ft({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Rn = "http://www.w3.org/1998/Math/MathML", Sn = "http://www.w3.org/2000/svg", Pt = "http://www.w3.org/1999/xhtml";
  let Mn = Pt, Zl = !1, Ln = null;
  const $o = ft({}, [Rn, Sn, Pt], Ny), mr = ql(["mi", "mo", "mn", "ms", "mtext"]);
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
    Si.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? wn : g.PARSER_MEDIA_TYPE, oe = sl === "application/xhtml+xml" ? Ny : Sm, De = jo(g, "ALLOWED_TAGS", Xl, {
      transform: oe
    }), Re = jo(g, "ALLOWED_ATTR", cr, {
      transform: oe
    }), Ln = jo(g, "ALLOWED_NAMESPACES", $o, {
      transform: Ny
    }), ul = jo(g, "ADD_URI_SAFE_ATTR", vn, {
      transform: oe,
      base: vn
    }), Pl = jo(g, "ADD_DATA_URI_TAGS", Kl, {
      transform: oe,
      base: Kl
    }), $t = jo(g, "FORBID_CONTENTS", pr, {
      transform: oe
    }), Dn = jo(g, "FORBID_TAGS", ya({}), {
      transform: oe
    }), va = jo(g, "FORBID_ATTR", ya({}), {
      transform: oe
    }), ol = nl(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? ya(g.USE_PROFILES) : g.USE_PROFILES : !1, fr = g.ALLOW_ARIA_ATTR !== !1, Ql = g.ALLOW_DATA_ATTR !== !1, Sa = g.ALLOW_UNKNOWN_PROTOCOLS || !1, wa = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, bn = g.SAFE_FOR_TEMPLATES || !1, Il = g.SAFE_FOR_XML !== !1, Ye = g.WHOLE_DOCUMENT || !1, rl = g.RETURN_DOM || !1, $l = g.RETURN_DOM_FRAGMENT || !1, ka = g.RETURN_TRUSTED_TYPE || !1, al = g.FORCE_BODY || !1, vi = g.SANITIZE_DOM !== !1, il = g.SANITIZE_NAMED_PROPS || !1, It = g.KEEP_CONTENT !== !1, rt = g.IN_PLACE || !1, nt = FS(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : sb, Mn = typeof g.NAMESPACE == "string" ? g.NAMESPACE : Pt, xa = nl(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ya(g.MATHML_TEXT_INTEGRATION_POINTS) : ft({}, mr), Wl = nl(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? ya(g.HTML_INTEGRATION_POINTS) : ft({}, hr);
    const _ = nl(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? ya(g.CUSTOM_ELEMENT_HANDLING) : Sc(null);
    if (Ee = Sc(null), nl(_, "tagNameCheck") && Aa(_.tagNameCheck) && (Ee.tagNameCheck = _.tagNameCheck), nl(_, "attributeNameCheck") && Aa(_.attributeNameCheck) && (Ee.attributeNameCheck = _.attributeNameCheck), nl(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (Ee.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), Yl(Ee), bn && (Ql = !1), $l && (rl = !0), ol && (De = ft({}, ib), Re = Sc(null), ol.html === !0 && (ft(De, rb), ft(Re, ob)), ol.svg === !0 && (ft(De, Oy), ft(Re, Dy), ft(Re, Um)), ol.svgFilters === !0 && (ft(De, Cy), ft(Re, Dy), ft(Re, Um)), ol.mathMl === !0 && (ft(De, zy), ft(Re, ub), ft(Re, Um))), yn.tagCheck = null, yn.attributeCheck = null, nl(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? yn.tagCheck = g.ADD_TAGS : Go(g.ADD_TAGS) && (De === Xl && (De = ya(De)), ft(De, g.ADD_TAGS, oe))), nl(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? yn.attributeCheck = g.ADD_ATTR : Go(g.ADD_ATTR) && (Re === cr && (Re = ya(Re)), ft(Re, g.ADD_ATTR, oe))), nl(g, "ADD_URI_SAFE_ATTR") && Go(g.ADD_URI_SAFE_ATTR) && ft(ul, g.ADD_URI_SAFE_ATTR, oe), nl(g, "FORBID_CONTENTS") && Go(g.FORBID_CONTENTS) && ($t === pr && ($t = ya($t)), ft($t, g.FORBID_CONTENTS, oe)), nl(g, "ADD_FORBID_CONTENTS") && Go(g.ADD_FORBID_CONTENTS) && ($t === pr && ($t = ya($t)), ft($t, g.ADD_FORBID_CONTENTS, oe)), It && (De["#text"] = !0), Ye && ft(De, ["html", "head", "body"]), De.table && (ft(De, ["tbody"]), delete Dn.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Js('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Js('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const j = q;
      q = g.TRUSTED_TYPES_POLICY;
      try {
        V = He("");
      } catch (I) {
        throw q = j, I;
      }
    } else g.TRUSTED_TYPES_POLICY === null ? (q = void 0, V = "") : (q === void 0 && (q = gt()), q && typeof V == "string" && (V = He("")));
    ql && ql(g), Fe = g;
  }, wi = ft({}, [...Oy, ...Cy, ...XS]), br = ft({}, [...zy, ...QS]), Jl = function(g, _, j) {
    return _.namespaceURI === Pt ? g === "svg" : _.namespaceURI === Rn ? g === "svg" && (j === "annotation-xml" || xa[j]) : !!wi[g];
  }, vr = function(g, _, j) {
    return _.namespaceURI === Pt ? g === "math" : _.namespaceURI === Sn ? g === "math" && Wl[j] : !!br[g];
  }, fl = function(g, _, j) {
    return _.namespaceURI === Sn && !Wl[j] || _.namespaceURI === Rn && !xa[j] ? !1 : !br[g] && (gr[g] || !wi[g]);
  }, dl = function(g) {
    let _ = J(g);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: Mn,
      tagName: "template"
    });
    const j = Sm(g.tagName), I = Sm(_.tagName);
    return Ln[g.namespaceURI] ? g.namespaceURI === Sn ? Jl(j, _, I) : g.namespaceURI === Rn ? vr(j, _, I) : g.namespaceURI === Pt ? fl(j, _, I) : !!(sl === "application/xhtml+xml" && Ln[g.namespaceURI]) : !1;
  }, Mt = function(g) {
    gc(o.removed, {
      element: g
    });
    try {
      J(g).removeChild(g);
    } catch {
      if (G(g), !J(g))
        throw Js("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Un = function(g) {
    const _ = W(g);
    if (_) {
      const I = [];
      sm(_, (me) => {
        gc(I, me);
      }), sm(I, (me) => {
        try {
          G(me);
        } catch {
        }
      });
    }
    const j = be(g);
    if (j)
      for (let I = j.length - 1; I >= 0; --I) {
        const me = j[I], ye = me && me.name;
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
      if (rl || $l)
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
        const I = _[j], me = I && I.name;
        if (!(typeof me != "string" || Re[oe(me)]))
          try {
            g.removeAttribute(me);
          } catch {
          }
      }
  }, Ei = function(g) {
    const _ = [g];
    for (; _.length > 0; ) {
      const j = _.pop();
      (ee ? ee(j) : j.nodeType) === mi.element && Ti(j);
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
      const ye = tb(g, /^[\r\n\t ]+/);
      j = ye && ye[0];
    }
    sl === "application/xhtml+xml" && Mn === Pt && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const I = q ? He(g) : g;
    if (Mn === Pt)
      try {
        _ = new L().parseFromString(I, sl);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = U.createDocument(Mn, "template", null);
      try {
        _.documentElement.innerHTML = Zl ? V : I;
      } catch {
      }
    }
    const me = _.body || _.documentElement;
    return g && j && me.insertBefore(s.createTextNode(j), me.childNodes[0] || null), Mn === Pt ? re.call(_, Ye ? "html" : "body")[0] : Ye ? _.documentElement : me;
  }, jn = function(g) {
    return R.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT | x.SHOW_PROCESSING_INSTRUCTION | x.SHOW_CDATA_SECTION,
      null
    );
  }, _a = function(g) {
    return g = cm(g, we, " "), g = cm(g, ue, " "), g = cm(g, $, " "), g;
  }, Na = function(g) {
    var _;
    g.normalize();
    const j = R.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      x.SHOW_TEXT | x.SHOW_COMMENT | x.SHOW_CDATA_SECTION | x.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let I = j.nextNode();
    for (; I; )
      I.data = _a(I.data), I = j.nextNode();
    const me = (_ = g.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(g, "template");
    me && sm(me, (ye) => {
      pl(ye.content) && Na(ye.content);
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
    g.nodeType !== ee(g) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    if (!ee || typeof g != "object" || g === null)
      return !1;
    try {
      return ee(g) === mi.documentFragment;
    } catch {
      return !1;
    }
  }, En = function(g) {
    if (!ee || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof ee(g) == "number";
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
    return !!(Il && g.hasChildNodes() && !En(g.firstElementChild) && Bl(cb, g.textContent) && Bl(cb, g.innerHTML) || Il && g.namespaceURI === Pt && _ === "style" && En(g.firstElementChild) || g.nodeType === mi.processingInstruction || Il && g.nodeType === mi.comment && Bl(nw, g.data));
  }, At = function(g, _) {
    if (!Dn[_] && Tr(_) && (Ee.tagNameCheck instanceof RegExp && Bl(Ee.tagNameCheck, _) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(_)))
      return !1;
    if (It && !$t[_]) {
      const j = J(g), I = W(g);
      if (I && j) {
        const me = I.length;
        for (let ye = me - 1; ye >= 0; --ye) {
          const mt = rt ? I[ye] : te(I[ye], !0);
          j.insertBefore(mt, Y(g));
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
    if ((ee ? ee(g) : g.nodeType) === mi.element && !dl(g) || (_ === "noscript" || _ === "noembed" || _ === "noframes") && Bl(lw, g.innerHTML))
      return Mt(g), !0;
    if (bn && g.nodeType === mi.text) {
      const I = _a(g.textContent);
      g.textContent !== I && (gc(o.removed, {
        element: g.cloneNode()
      }), g.textContent = I);
    }
    return xt(ie.afterSanitizeElements, g, null), !1;
  }, ki = function(g, _, j) {
    if (va[_] || vi && (_ === "id" || _ === "name") && (j in s || j in cl))
      return !1;
    const I = Re[_] || yn.attributeCheck instanceof Function && yn.attributeCheck(_, g);
    if (!(Ql && Bl(ge, _))) {
      if (!(fr && Bl(yt, _))) {
        if (I) {
          if (!ul[_]) {
            if (!Bl(nt, cm(j, fn, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && g !== "script" && nb(j, "data:") === 0 && Pl[g])) {
                if (!(Sa && !Bl(tt, cm(j, fn, "")))) {
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
          !(Tr(g) && (Ee.tagNameCheck instanceof RegExp && Bl(Ee.tagNameCheck, g) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(g)) && (Ee.attributeNameCheck instanceof RegExp && Bl(Ee.attributeNameCheck, _) || Ee.attributeNameCheck instanceof Function && Ee.attributeNameCheck(_, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          _ === "is" && Ee.allowCustomizedBuiltInElements && (Ee.tagNameCheck instanceof RegExp && Bl(Ee.tagNameCheck, j) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(j)))
        ) return !1;
      }
    }
    return !0;
  }, wr = ft({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Tr = function(g) {
    return !wr[Sm(g)] && Bl(dn, g);
  }, Oa = function(g, _, j, I) {
    if (q && typeof M == "object" && typeof M.getAttributeType == "function" && !j)
      switch (M.getAttributeType(g, _)) {
        case "TrustedHTML":
          return He(I);
        case "TrustedScriptURL":
          return _e(I);
      }
    return I;
  }, Po = function(g, _, j, I) {
    try {
      j ? g.setAttributeNS(j, _, I) : g.setAttribute(_, I), ea(g) ? Mt(g) : eb(o.removed);
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
    let I = _.length;
    const me = oe(g.nodeName);
    for (; I--; ) {
      const ye = _[I], mt = ye.name, lt = ye.namespaceURI, bt = ye.value, un = oe(mt), _t = bt;
      let it = mt === "value" ? _t : BS(_t);
      if (j.attrName = un, j.attrValue = it, j.keepAttr = !0, j.forceKeepAttr = void 0, xt(ie.uponSanitizeAttribute, g, j), it = j.attrValue, il && (un === "id" || un === "name") && nb(it, pt) !== 0 && (Me(mt, g), it = pt + it), Il && Bl(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, it)) {
        Me(mt, g);
        continue;
      }
      if (un === "attributename" && tb(it, "href")) {
        Me(mt, g);
        continue;
      }
      if (!j.forceKeepAttr) {
        if (!j.keepAttr) {
          Me(mt, g);
          continue;
        }
        if (!wa && Bl(aw, it)) {
          Me(mt, g);
          continue;
        }
        if (bn && (it = _a(it)), !ki(me, un, it)) {
          Me(mt, g);
          continue;
        }
        it = Oa(me, un, lt, it), it !== _t && Po(g, mt, lt, it);
      }
    }
    xt(ie.afterSanitizeAttributes, g, null);
  }, ml = function(g) {
    let _ = null;
    const j = jn(g);
    for (xt(ie.beforeSanitizeShadowDOM, g, null); _ = j.nextNode(); )
      if (xt(ie.uponSanitizeShadowNode, _, null), Sr(_), Tt(_), pl(_.content) && ml(_.content), (ee ? ee(_) : _.nodeType) === mi.element) {
        const me = H(_);
        pl(me) && (Ca(me), ml(me));
      }
    xt(ie.afterSanitizeShadowDOM, g, null);
  }, Ca = function(g) {
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
      const I = j.node, ye = (ee ? ee(I) : I.nodeType) === mi.element, mt = W(I);
      if (mt)
        for (let lt = mt.length - 1; lt >= 0; --lt)
          _.push({
            node: mt[lt],
            shadow: null
          });
      if (ye) {
        const lt = ne ? ne(I) : null;
        if (typeof lt == "string" && oe(lt) === "template") {
          const bt = I.content;
          pl(bt) && _.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (ye) {
        const lt = H(I);
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
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, j = null, I = null, me = null;
    if (Zl = !b, Zl && (b = "<!-->"), typeof b != "string" && !En(b) && (b = YS(b), typeof b != "string"))
      throw Js("dirty is not a string, aborting");
    if (!o.isSupported)
      return b;
    dr ? (De = Ta, Re = Ea) : yr(g), (ie.uponSanitizeElement.length > 0 || ie.uponSanitizeAttribute.length > 0) && (De = ya(De)), ie.uponSanitizeAttribute.length > 0 && (Re = ya(Re)), o.removed = [];
    const ye = rt && typeof b != "string" && En(b);
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
        Ca(b);
      } catch (un) {
        throw Un(b), un;
      }
    } else if (En(b))
      _ = Tn("<!---->"), j = _.ownerDocument.importNode(b, !0), j.nodeType === mi.element && j.nodeName === "BODY" || j.nodeName === "HTML" ? _ = j : _.appendChild(j), Ca(j);
    else {
      if (!rl && !bn && !Ye && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return q && ka ? He(b) : b;
      if (_ = Tn(b), !_)
        return rl ? null : ka ? V : "";
    }
    _ && al && Mt(_.firstChild);
    const mt = jn(ye ? b : _);
    try {
      for (; I = mt.nextNode(); )
        Sr(I), Tt(I), pl(I.content) && ml(I.content);
    } catch (bt) {
      throw ye && Un(b), bt;
    }
    if (ye)
      return sm(o.removed, (bt) => {
        bt.element && Ei(bt.element);
      }), bn && Na(b), b;
    if (rl) {
      if (bn && Na(_), $l)
        for (me = B.call(_.ownerDocument); _.firstChild; )
          me.appendChild(_.firstChild);
      else
        me = _;
      return (Re.shadowroot || Re.shadowrootmode) && (me = se.call(d, me, !0)), me;
    }
    let lt = Ye ? _.outerHTML : _.innerHTML;
    return Ye && De["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && Bl(ew, _.ownerDocument.doctype.name) && (lt = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + lt), bn && (lt = _a(lt)), q && ka ? He(lt) : lt;
  }, o.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    yr(b), dr = !0, Ta = De, Ea = Re;
  }, o.clearConfig = function() {
    Fe = null, dr = !1, Ta = null, Ea = null, q = K, V = "";
  }, o.isValidAttribute = function(b, g, _) {
    Fe || yr({});
    const j = oe(b), I = oe(g);
    return ki(j, I, _);
  }, o.addHook = function(b, g) {
    typeof g == "function" && nl(ie, b) && gc(ie[b], g);
  }, o.removeHook = function(b, g) {
    if (nl(ie, b)) {
      if (g !== void 0) {
        const _ = US(ie[b], g);
        return _ === -1 ? void 0 : jS(ie[b], _, 1)[0];
      }
      return eb(ie[b]);
    }
  }, o.removeHooks = function(b) {
    nl(ie, b) && (ie[b] = []);
  }, o.removeAllHooks = function() {
    ie = fb();
  }, o;
}
Kv();
var Ry = { exports: {} }, My, db;
function ow() {
  if (db) return My;
  db = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return My = i, My;
}
var Ly, pb;
function uw() {
  if (pb) return Ly;
  pb = 1;
  var i = /* @__PURE__ */ ow();
  function o() {
  }
  function s() {
  }
  return s.resetWarningCache = o, Ly = function() {
    function d(T, A, x, C, L, M) {
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
var mb;
function sw() {
  return mb || (mb = 1, Ry.exports = /* @__PURE__ */ uw()()), Ry.exports;
}
var cw = /* @__PURE__ */ sw();
const Et = /* @__PURE__ */ xS(cw);
Et.shape({
  event: Et.string,
  action: Et.string,
  name: Et.string,
  region: Et.string,
  section: Et.string,
  component: Et.string,
  type: Et.string,
  text: Et.string
});
const Dm = ({ children: i }) => /* @__PURE__ */ Vl.jsx(Vl.Fragment, { children: i });
Dm.propTypes = {
  children: Et.oneOfType([
    Et.arrayOf(Et.node),
    Et.node,
    Et.string
  ])
};
var Uy = { exports: {} };
var hb;
function fw() {
  return hb || (hb = 1, (function(i) {
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
const Zv = ({ children: i, className: o = "container", ...s }) => /* @__PURE__ */ Vl.jsx("div", { className: o, ...s, children: /* @__PURE__ */ Vl.jsx("div", { className: "row", children: i }) });
Zv.propTypes = {
  children: Dm.propTypes.children
};
({
  ...Zv.propTypes
});
Dm.propTypes.children, Et.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Dm.propTypes.children;
function Wv({
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
var gb = { exports: {} }, dm = {}, yb;
function dw() {
  if (yb) return dm;
  yb = 1;
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
var bb;
function pw() {
  return bb || (bb = 1, gb.exports = dw()), gb.exports;
}
var F = pw(), vb = { exports: {} }, jy, Sb;
function mw() {
  if (Sb) return jy;
  Sb = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jy = i, jy;
}
var By, wb;
function hw() {
  if (wb) return By;
  wb = 1;
  var i = /* @__PURE__ */ mw();
  function o() {
  }
  function s() {
  }
  return s.resetWarningCache = o, By = function() {
    function d(T, A, x, C, L, M) {
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
  }, By;
}
var Tb;
function gw() {
  return Tb || (Tb = 1, vb.exports = /* @__PURE__ */ hw()()), vb.exports;
}
var yw = /* @__PURE__ */ gw();
const m = /* @__PURE__ */ R0(yw), bw = () => {
  const [i, o] = Fo(null), [s, d] = Fo(!1), [c, h] = Fo(null), [T, A] = Fo("");
  return Io(() => {
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
    var d, c, h, T, A = [], x = !0, C = !1;
    try {
      if (h = (s = s.call(i)).next, o !== 0) for (; !(x = (d = h.call(s)).done) && (A.push(d.value), A.length !== o); x = !0) ;
    } catch (L) {
      C = !0, c = L;
    } finally {
      try {
        if (!x && s.return != null && (T = s.return(), Object(T) !== T)) return;
      } finally {
        if (C) throw c;
      }
    }
    return A;
  }
}
function Tw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ew(i, o) {
  return Sw(i) || ww(i, o) || kw(i, o) || Tw();
}
function kw(i, o) {
  if (i) {
    if (typeof i == "string") return Eb(i, o);
    var s = {}.toString.call(i).slice(8, -1);
    return s === "Object" && i.constructor && (s = i.constructor.name), s === "Map" || s === "Set" ? Array.from(i) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? Eb(i, o) : void 0;
  }
}
const Jv = Object.entries, kb = Object.setPrototypeOf, xw = Object.isFrozen, Aw = Object.getPrototypeOf, _w = Object.getOwnPropertyDescriptor;
let Gl = Object.freeze, Fl = Object.seal, wc = Object.create, e1 = typeof Reflect < "u" && Reflect, g0 = e1.apply, y0 = e1.construct;
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
const pm = zn(Array.prototype.forEach), Nw = zn(Array.prototype.lastIndexOf), xb = zn(Array.prototype.pop), yc = zn(Array.prototype.push), Ow = zn(Array.prototype.splice), Vo = Array.isArray, wm = zn(String.prototype.toLowerCase), Hy = zn(String.prototype.toString), Ab = zn(String.prototype.match), mm = zn(String.prototype.replace), _b = zn(String.prototype.indexOf), Cw = zn(String.prototype.trim), zw = zn(Number.prototype.toString), Dw = zn(Boolean.prototype.toString), Nb = typeof BigInt > "u" ? null : zn(BigInt.prototype.toString), Ob = typeof Symbol > "u" ? null : zn(Symbol.prototype.toString), ll = zn(Object.prototype.hasOwnProperty), hm = zn(Object.prototype.toString), Hl = zn(RegExp.prototype.test), ec = Rw(TypeError);
function zn(i) {
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
  if (kb && kb(i, null), !Vo(o))
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
  for (const d of Jv(i)) {
    var s = Ew(d, 2);
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
      return zw(i);
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
        return zn(d.get);
      if (typeof d.value == "function")
        return zn(d.value);
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
    return Hl(i, ""), !0;
  } catch {
    return !1;
  }
}
const Cb = Gl(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), qy = Gl(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Gy = Gl(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), jw = Gl(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Vy = Gl(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Bw = Gl(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), zb = Gl(["#text"]), Db = Gl(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Yy = Gl(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Rb = Gl(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), jm = Gl(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Hw = Fl(/{{[\w\W]*|^[\w\W]*}}/g), qw = Fl(/<%[\w\W]*|^[\w\W]*%>/g), Gw = Fl(/\${[\w\W]*/g), Vw = Fl(/^data-[\-\w.\u00B7-\uFFFF]+$/), Yw = Fl(/^aria-[\-\w]+$/), Mb = Fl(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Fw = Fl(/^(?:\w+script|data):/i), Xw = Fl(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Qw = Fl(/^html$/i), Iw = Fl(/^[a-z][.\w]*(-[.\w]+)+$/i), Lb = Fl(/<[/\w!]/g), $w = Fl(/<[/\w]/g), Pw = Fl(/<\/no(script|embed|frames)/i), Kw = Fl(/\/>/i), hi = {
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
}, Ub = function() {
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
}, Bo = function(i, o, s, d) {
  return ll(i, o) && Vo(i[o]) ? dt(d.base ? ba(d.base) : {}, i[o], d.transform) : s;
};
function t1() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zw();
  const o = (b) => t1(b);
  if (o.version = "3.4.11", o.removed = [], !i || !i.document || i.document.nodeType !== hi.document || !i.Element)
    return o.isSupported = !1, o;
  let s = i.document;
  const d = s, c = d.currentScript;
  i.DocumentFragment;
  const h = i.HTMLTemplateElement, T = i.Node, A = i.Element, x = i.NodeFilter;
  i.NamedNodeMap === void 0 && (i.NamedNodeMap || i.MozNamedAttrMap), i.HTMLFormElement;
  const L = i.DOMParser, M = i.trustedTypes, D = A.prototype, te = yi(D, "cloneNode"), G = yi(D, "remove"), Y = yi(D, "nextSibling"), W = yi(D, "childNodes"), J = yi(D, "parentNode"), H = yi(D, "shadowRoot"), be = yi(D, "attributes"), ee = T && T.prototype ? yi(T.prototype, "nodeType") : null, ne = T && T.prototype ? yi(T.prototype, "nodeName") : null;
  if (typeof h == "function") {
    const b = s.createElement("template");
    b.content && b.content.ownerDocument && (s = b.content.ownerDocument);
  }
  let q, V = "", K, ke = !1, Be = 0;
  const qe = function() {
    if (Be > 0)
      throw ec('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, He = function(b) {
    qe(), Be++;
    try {
      return q.createHTML(b);
    } finally {
      Be--;
    }
  }, _e = function(b) {
    qe(), Be++;
    try {
      return q.createScriptURL(b);
    } finally {
      Be--;
    }
  }, gt = function() {
    return ke || (K = Ww(M, c), ke = !0), K;
  }, Ie = s, U = Ie.implementation, R = Ie.createNodeIterator, B = Ie.createDocumentFragment, re = Ie.getElementsByTagName, se = d.importNode;
  let ie = Ub();
  o.isSupported = typeof Jv == "function" && typeof J == "function" && U && U.createHTMLDocument !== void 0;
  const we = Hw, ue = qw, $ = Gw, ge = Vw, yt = Yw, tt = Fw, fn = Xw, dn = Iw;
  let nt = Mb, De = null;
  const Xl = dt({}, [...Cb, ...qy, ...Gy, ...Vy, ...zb]);
  let Re = null;
  const cr = dt({}, [...Db, ...Yy, ...Rb, ...jm]);
  let Ee = Object.seal(wc(null, {
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
  let fr = !0, Ql = !0, Sa = !1, wa = !0, bn = !1, Il = !0, Ye = !1, dr = !1, Ta = null, Ea = null, al = !1, rl = !1, $l = !1, ka = !1, vi = !0, il = !1;
  const pt = "user-content-";
  let It = !0, rt = !1, ol = {}, $t = null;
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
  let Pl = null;
  const Kl = dt({}, ["audio", "video", "img", "source", "image", "track"]);
  let ul = null;
  const vn = dt({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Rn = "http://www.w3.org/1998/Math/MathML", Sn = "http://www.w3.org/2000/svg", Pt = "http://www.w3.org/1999/xhtml";
  let Mn = Pt, Zl = !1, Ln = null;
  const $o = dt({}, [Rn, Sn, Pt], Hy), mr = Gl(["mi", "mo", "mn", "ms", "mtext"]);
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
    Si.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? wn : b.PARSER_MEDIA_TYPE, oe = sl === "application/xhtml+xml" ? Hy : wm, De = Bo(b, "ALLOWED_TAGS", Xl, {
      transform: oe
    }), Re = Bo(b, "ALLOWED_ATTR", cr, {
      transform: oe
    }), Ln = Bo(b, "ALLOWED_NAMESPACES", $o, {
      transform: Hy
    }), ul = Bo(b, "ADD_URI_SAFE_ATTR", vn, {
      transform: oe,
      base: vn
    }), Pl = Bo(b, "ADD_DATA_URI_TAGS", Kl, {
      transform: oe,
      base: Kl
    }), $t = Bo(b, "FORBID_CONTENTS", pr, {
      transform: oe
    }), Dn = Bo(b, "FORBID_TAGS", ba({}), {
      transform: oe
    }), va = Bo(b, "FORBID_ATTR", ba({}), {
      transform: oe
    }), ol = ll(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? ba(b.USE_PROFILES) : b.USE_PROFILES : !1, fr = b.ALLOW_ARIA_ATTR !== !1, Ql = b.ALLOW_DATA_ATTR !== !1, Sa = b.ALLOW_UNKNOWN_PROTOCOLS || !1, wa = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, bn = b.SAFE_FOR_TEMPLATES || !1, Il = b.SAFE_FOR_XML !== !1, Ye = b.WHOLE_DOCUMENT || !1, rl = b.RETURN_DOM || !1, $l = b.RETURN_DOM_FRAGMENT || !1, ka = b.RETURN_TRUSTED_TYPE || !1, al = b.FORCE_BODY || !1, vi = b.SANITIZE_DOM !== !1, il = b.SANITIZE_NAMED_PROPS || !1, It = b.KEEP_CONTENT !== !1, rt = b.IN_PLACE || !1, nt = Uw(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : Mb, Mn = typeof b.NAMESPACE == "string" ? b.NAMESPACE : Pt, xa = ll(b, "MATHML_TEXT_INTEGRATION_POINTS") && b.MATHML_TEXT_INTEGRATION_POINTS && typeof b.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ba(b.MATHML_TEXT_INTEGRATION_POINTS) : dt({}, mr), Wl = ll(b, "HTML_INTEGRATION_POINTS") && b.HTML_INTEGRATION_POINTS && typeof b.HTML_INTEGRATION_POINTS == "object" ? ba(b.HTML_INTEGRATION_POINTS) : dt({}, hr);
    const g = ll(b, "CUSTOM_ELEMENT_HANDLING") && b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING == "object" ? ba(b.CUSTOM_ELEMENT_HANDLING) : wc(null);
    if (Ee = wc(null), ll(g, "tagNameCheck") && Aa(g.tagNameCheck) && (Ee.tagNameCheck = g.tagNameCheck), ll(g, "attributeNameCheck") && Aa(g.attributeNameCheck) && (Ee.attributeNameCheck = g.attributeNameCheck), ll(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (Ee.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Fl(Ee), bn && (Ql = !1), $l && (rl = !0), ol && (De = dt({}, zb), Re = wc(null), ol.html === !0 && (dt(De, Cb), dt(Re, Db)), ol.svg === !0 && (dt(De, qy), dt(Re, Yy), dt(Re, jm)), ol.svgFilters === !0 && (dt(De, Gy), dt(Re, Yy), dt(Re, jm)), ol.mathMl === !0 && (dt(De, Vy), dt(Re, Rb), dt(Re, jm))), yn.tagCheck = null, yn.attributeCheck = null, ll(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? yn.tagCheck = b.ADD_TAGS : Vo(b.ADD_TAGS) && (De === Xl && (De = ba(De)), dt(De, b.ADD_TAGS, oe))), ll(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? yn.attributeCheck = b.ADD_ATTR : Vo(b.ADD_ATTR) && (Re === cr && (Re = ba(Re)), dt(Re, b.ADD_ATTR, oe))), ll(b, "ADD_URI_SAFE_ATTR") && Vo(b.ADD_URI_SAFE_ATTR) && dt(ul, b.ADD_URI_SAFE_ATTR, oe), ll(b, "FORBID_CONTENTS") && Vo(b.FORBID_CONTENTS) && ($t === pr && ($t = ba($t)), dt($t, b.FORBID_CONTENTS, oe)), ll(b, "ADD_FORBID_CONTENTS") && Vo(b.ADD_FORBID_CONTENTS) && ($t === pr && ($t = ba($t)), dt($t, b.ADD_FORBID_CONTENTS, oe)), It && (De["#text"] = !0), Ye && dt(De, ["html", "head", "body"]), De.table && (dt(De, ["tbody"]), delete Dn.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ec('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ec('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const _ = q;
      q = b.TRUSTED_TYPES_POLICY;
      try {
        V = He("");
      } catch (j) {
        throw q = _, j;
      }
    } else b.TRUSTED_TYPES_POLICY === null ? (q = void 0, V = "") : (q === void 0 && (q = gt()), q && typeof V == "string" && (V = He("")));
    Gl && Gl(b), Fe = b;
  }, wi = dt({}, [...qy, ...Gy, ...jw]), br = dt({}, [...Vy, ...Bw]), Jl = function(b, g, _) {
    return g.namespaceURI === Pt ? b === "svg" : g.namespaceURI === Rn ? b === "svg" && (_ === "annotation-xml" || xa[_]) : !!wi[b];
  }, vr = function(b, g, _) {
    return g.namespaceURI === Pt ? b === "math" : g.namespaceURI === Sn ? b === "math" && Wl[_] : !!br[b];
  }, fl = function(b, g, _) {
    return g.namespaceURI === Sn && !Wl[_] || g.namespaceURI === Rn && !xa[_] ? !1 : !br[b] && (gr[b] || !wi[b]);
  }, dl = function(b) {
    let g = J(b);
    (!g || !g.tagName) && (g = {
      namespaceURI: Mn,
      tagName: "template"
    });
    const _ = wm(b.tagName), j = wm(g.tagName);
    return Ln[b.namespaceURI] ? b.namespaceURI === Sn ? Jl(_, g, j) : b.namespaceURI === Rn ? vr(_, g, j) : b.namespaceURI === Pt ? fl(_, g, j) : !!(sl === "application/xhtml+xml" && Ln[b.namespaceURI]) : !1;
  }, Mt = function(b) {
    yc(o.removed, {
      element: b
    });
    try {
      J(b).removeChild(b);
    } catch {
      if (G(b), !J(b))
        throw ec("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Un = function(b) {
    const g = W(b);
    if (g) {
      const j = [];
      pm(g, (I) => {
        yc(j, I);
      }), pm(j, (I) => {
        try {
          G(I);
        } catch {
        }
      });
    }
    const _ = be(b);
    if (_)
      for (let j = _.length - 1; j >= 0; --j) {
        const I = _[j], me = I && I.name;
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
      if (rl || $l)
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
        const j = g[_], I = j && j.name;
        if (!(typeof I != "string" || Re[oe(I)]))
          try {
            b.removeAttribute(I);
          } catch {
          }
      }
  }, Ei = function(b) {
    const g = [b];
    for (; g.length > 0; ) {
      const _ = g.pop();
      (ee ? ee(_) : _.nodeType) === hi.element && Ti(_);
      const j = W(_);
      if (j)
        for (let I = j.length - 1; I >= 0; --I)
          g.push(j[I]);
    }
  }, Tn = function(b) {
    let g = null, _ = null;
    if (al)
      b = "<remove></remove>" + b;
    else {
      const me = Ab(b, /^[\r\n\t ]+/);
      _ = me && me[0];
    }
    sl === "application/xhtml+xml" && Mn === Pt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const j = q ? He(b) : b;
    if (Mn === Pt)
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
    const I = g.body || g.documentElement;
    return b && _ && I.insertBefore(s.createTextNode(_), I.childNodes[0] || null), Mn === Pt ? re.call(g, Ye ? "html" : "body")[0] : Ye ? g.documentElement : I;
  }, jn = function(b) {
    return R.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT | x.SHOW_PROCESSING_INSTRUCTION | x.SHOW_CDATA_SECTION,
      null
    );
  }, _a = function(b) {
    return b = mm(b, we, " "), b = mm(b, ue, " "), b = mm(b, $, " "), b;
  }, Na = function(b) {
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
    const I = (g = b.querySelectorAll) === null || g === void 0 ? void 0 : g.call(b, "template");
    I && pm(I, (me) => {
      pl(me.content) && Na(me.content);
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
    b.nodeType !== ee(b) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    if (!ee || typeof b != "object" || b === null)
      return !1;
    try {
      return ee(b) === hi.documentFragment;
    } catch {
      return !1;
    }
  }, En = function(b) {
    if (!ee || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof ee(b) == "number";
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
    return !!(Il && b.hasChildNodes() && !En(b.firstElementChild) && Hl(Lb, b.textContent) && Hl(Lb, b.innerHTML) || Il && b.namespaceURI === Pt && g === "style" && En(b.firstElementChild) || b.nodeType === hi.processingInstruction || Il && b.nodeType === hi.comment && Hl($w, b.data));
  }, At = function(b, g) {
    if (!Dn[g] && Tr(g) && (Ee.tagNameCheck instanceof RegExp && Hl(Ee.tagNameCheck, g) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(g)))
      return !1;
    if (It && !$t[g]) {
      const _ = J(b), j = W(b);
      if (j && _) {
        const I = j.length;
        for (let me = I - 1; me >= 0; --me) {
          const ye = rt ? j[me] : te(j[me], !0);
          _.insertBefore(ye, Y(b));
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
    if ((ee ? ee(b) : b.nodeType) === hi.element && !dl(b) || (g === "noscript" || g === "noembed" || g === "noframes") && Hl(Pw, b.innerHTML))
      return Mt(b), !0;
    if (bn && b.nodeType === hi.text) {
      const _ = _a(b.textContent);
      b.textContent !== _ && (yc(o.removed, {
        element: b.cloneNode()
      }), b.textContent = _);
    }
    return xt(ie.afterSanitizeElements, b, null), !1;
  }, ki = function(b, g, _) {
    if (va[g] || vi && (g === "id" || g === "name") && (_ in s || _ in cl))
      return !1;
    const j = Re[g] || yn.attributeCheck instanceof Function && yn.attributeCheck(g, b);
    if (!(Ql && Hl(ge, g)) && !(fr && Hl(yt, g))) {
      if (j) {
        if (!ul[g] && !Hl(nt, mm(_, fn, "")) && !((g === "src" || g === "xlink:href" || g === "href") && b !== "script" && _b(_, "data:") === 0 && Pl[b]) && !(Sa && !Hl(tt, mm(_, fn, ""))) && _)
          return !1;
      } else if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        !(Tr(b) && (Ee.tagNameCheck instanceof RegExp && Hl(Ee.tagNameCheck, b) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(b)) && (Ee.attributeNameCheck instanceof RegExp && Hl(Ee.attributeNameCheck, g) || Ee.attributeNameCheck instanceof Function && Ee.attributeNameCheck(g, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        g === "is" && Ee.allowCustomizedBuiltInElements && (Ee.tagNameCheck instanceof RegExp && Hl(Ee.tagNameCheck, _) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(_)))
      ) return !1;
    }
    return !0;
  }, wr = dt({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Tr = function(b) {
    return !wr[wm(b)] && Hl(dn, b);
  }, Oa = function(b, g, _, j) {
    if (q && typeof M == "object" && typeof M.getAttributeType == "function" && !_)
      switch (M.getAttributeType(b, g)) {
        case "TrustedHTML":
          return He(j);
        case "TrustedScriptURL":
          return _e(j);
      }
    return j;
  }, Po = function(b, g, _, j) {
    try {
      _ ? b.setAttributeNS(_, g, j) : b.setAttribute(g, j), ea(b) ? Mt(b) : xb(o.removed);
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
    const I = oe(b.nodeName);
    for (; j--; ) {
      const me = g[j], ye = me.name, mt = me.namespaceURI, lt = me.value, bt = oe(ye), un = lt;
      let _t = ye === "value" ? un : Cw(un);
      if (_.attrName = bt, _.attrValue = _t, _.keepAttr = !0, _.forceKeepAttr = void 0, xt(ie.uponSanitizeAttribute, b, _), _t = _.attrValue, il && (bt === "id" || bt === "name") && _b(_t, pt) !== 0 && (Me(ye, b), _t = pt + _t), Il && Hl(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, _t)) {
        Me(ye, b);
        continue;
      }
      if (bt === "attributename" && Ab(_t, "href")) {
        Me(ye, b);
        continue;
      }
      if (!_.forceKeepAttr) {
        if (!_.keepAttr) {
          Me(ye, b);
          continue;
        }
        if (!wa && Hl(Kw, _t)) {
          Me(ye, b);
          continue;
        }
        if (bn && (_t = _a(_t)), !ki(I, bt, _t)) {
          Me(ye, b);
          continue;
        }
        _t = Oa(I, bt, mt, _t), _t !== un && Po(b, ye, mt, _t);
      }
    }
    xt(ie.afterSanitizeAttributes, b, null);
  }, ml = function(b) {
    let g = null;
    const _ = jn(b);
    for (xt(ie.beforeSanitizeShadowDOM, b, null); g = _.nextNode(); )
      if (xt(ie.uponSanitizeShadowNode, g, null), Sr(g), Tt(g), pl(g.content) && ml(g.content), (ee ? ee(g) : g.nodeType) === hi.element) {
        const j = H(g);
        pl(j) && (Ca(j), ml(j));
      }
    xt(ie.afterSanitizeShadowDOM, b, null);
  }, Ca = function(b) {
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
      const j = _.node, I = (ee ? ee(j) : j.nodeType) === hi.element, me = W(j);
      if (me)
        for (let ye = me.length - 1; ye >= 0; --ye)
          g.push({
            node: me[ye],
            shadow: null
          });
      if (I) {
        const ye = ne ? ne(j) : null;
        if (typeof ye == "string" && oe(ye) === "template") {
          const mt = j.content;
          pl(mt) && g.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (I) {
        const ye = H(j);
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
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, j = null, I = null, me = null;
    if (Zl = !b, Zl && (b = "<!-->"), typeof b != "string" && !En(b) && (b = Lw(b), typeof b != "string"))
      throw ec("dirty is not a string, aborting");
    if (!o.isSupported)
      return b;
    dr ? (De = Ta, Re = Ea) : yr(g), (ie.uponSanitizeElement.length > 0 || ie.uponSanitizeAttribute.length > 0) && (De = ba(De)), ie.uponSanitizeAttribute.length > 0 && (Re = ba(Re)), o.removed = [];
    const ye = rt && typeof b != "string" && En(b);
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
        Ca(b);
      } catch (un) {
        throw Un(b), un;
      }
    } else if (En(b))
      _ = Tn("<!---->"), j = _.ownerDocument.importNode(b, !0), j.nodeType === hi.element && j.nodeName === "BODY" || j.nodeName === "HTML" ? _ = j : _.appendChild(j), Ca(j);
    else {
      if (!rl && !bn && !Ye && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return q && ka ? He(b) : b;
      if (_ = Tn(b), !_)
        return rl ? null : ka ? V : "";
    }
    _ && al && Mt(_.firstChild);
    const mt = jn(ye ? b : _);
    try {
      for (; I = mt.nextNode(); )
        Sr(I), Tt(I), pl(I.content) && ml(I.content);
    } catch (bt) {
      throw ye && Un(b), bt;
    }
    if (ye)
      return pm(o.removed, (bt) => {
        bt.element && Ei(bt.element);
      }), bn && Na(b), b;
    if (rl) {
      if (bn && Na(_), $l)
        for (me = B.call(_.ownerDocument); _.firstChild; )
          me.appendChild(_.firstChild);
      else
        me = _;
      return (Re.shadowroot || Re.shadowrootmode) && (me = se.call(d, me, !0)), me;
    }
    let lt = Ye ? _.outerHTML : _.innerHTML;
    return Ye && De["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && Hl(Qw, _.ownerDocument.doctype.name) && (lt = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + lt), bn && (lt = _a(lt)), q && ka ? He(lt) : lt;
  }, o.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    yr(b), dr = !0, Ta = De, Ea = Re;
  }, o.clearConfig = function() {
    Fe = null, dr = !1, Ta = null, Ea = null, q = K, V = "";
  }, o.isValidAttribute = function(b, g, _) {
    Fe || yr({});
    const j = oe(b), I = oe(g);
    return ki(j, I, _);
  }, o.addHook = function(b, g) {
    typeof g == "function" && ll(ie, b) && yc(ie[b], g);
  }, o.removeHook = function(b, g) {
    if (ll(ie, b)) {
      if (g !== void 0) {
        const _ = Nw(ie[b], g);
        return _ === -1 ? void 0 : Ow(ie[b], _, 1)[0];
      }
      return xb(ie[b]);
    }
  }, o.removeHooks = function(b) {
    ll(ie, b) && (ie[b] = []);
  }, o.removeAllHooks = function() {
    ie = Ub();
  }, o;
}
var jb = t1();
let Bm = null;
function Jw() {
  return Bm || (typeof window < "u" ? Bm = jb(window) : Bm = jb), Bm;
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
  eventTimeout: C
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
  x && (M.eventCallback = x), C && (M.eventTimeout = C), L ? L.push(M) : x && x();
}, Rm = ({ children: i }) => /* @__PURE__ */ F.jsx(F.Fragment, { children: i });
Rm.propTypes = {
  children: m.oneOfType([
    m.arrayOf(m.node),
    m.node,
    m.string
  ])
};
var Bb = { exports: {} }, Hb;
function tT() {
  return Hb || (Hb = 1, (function(i) {
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
const n1 = ({ children: i, className: o = "container", ...s }) => /* @__PURE__ */ F.jsx("div", { className: o, ...s, children: /* @__PURE__ */ F.jsx("div", { className: "row", children: i }) });
n1.propTypes = {
  children: Rm.propTypes.children
};
({
  ...n1.propTypes
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
}), l1 = m.shape({
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
  const i = Vv().indexOf(aT) > -1 ? !0 : void 0;
  return {
    isBootstrap: i,
    isReact: i ? void 0 : !0
  };
}
const oc = ({ gaData: i, prefix: o = "", children: s }) => {
  const { isReact: d } = rT(), { onClick: c, ...h } = s.props;
  if (d)
    return kt.cloneElement(s, {
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
  return kt.cloneElement(s, {
    ...h,
    onClick: c,
    ...A
  });
};
m.number, m.string, m.number, m.func, m.object;
m.arrayOf(l1).isRequired, m.number;
const qb = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, a1 = ({
  label: i = "",
  cardTitle: o = "",
  gaData: s,
  ariaLabel: d,
  block: c,
  color: h = "gray",
  disabled: T,
  element: A = "button",
  href: x,
  icon: C,
  innerRef: L,
  onClick: M,
  size: D = "default",
  variant: te,
  classes: G,
  target: Y = "_self",
  ...W
}) => {
  if (te) {
    const be = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, ee = Uo("btn", be[te], {
      [`btn-${be[te]}-${h}`]: !0,
      "btn-medium": D === "medium",
      "btn-small": D === "small",
      "btn-large": D === "large" || D === "default",
      disabled: T
    });
    let ne = A;
    return x && A === "button" && (ne = "a"), /* @__PURE__ */ F.jsx(
      oc,
      {
        gaData: {
          ...qb,
          section: o,
          ...s,
          text: i
        },
        children: /* @__PURE__ */ F.jsxs(
          ne,
          {
            type: ne === "button" && M ? "button" : void 0,
            ...W,
            className: Uo(G) || ee,
            href: x,
            ref: L,
            onClick: M,
            "aria-label": d,
            target: ne === "a" ? Y : null,
            disabled: T,
            children: [
              C && /* @__PURE__ */ F.jsx("i", { className: `${C == null ? void 0 : C[0]} fa-${C == null ? void 0 : C[1]} me-1` }),
              i
            ]
          }
        )
      }
    );
  }
  const J = Uo("btn", {
    [`btn-${h}`]: !0,
    "btn-md": D === "small",
    "btn-sm": D === "xsmall",
    "btn-block": c,
    disabled: T
  });
  let H = A;
  return x && A === "button" && (H = "a"), /* @__PURE__ */ F.jsx(
    oc,
    {
      gaData: {
        ...qb,
        section: o,
        // @deprecated - remove at some point
        ...s,
        text: i
      },
      children: /* @__PURE__ */ F.jsxs(
        H,
        {
          type: H === "button" && M ? "button" : void 0,
          ...W,
          className: Uo(G) || J,
          href: x,
          ref: L,
          onClick: M,
          "aria-label": d,
          target: H === "a" ? Y : null,
          children: [
            C && /* @__PURE__ */ F.jsx("i", { className: `${C == null ? void 0 : C[0]} fa-${C == null ? void 0 : C[1]} me-1` }),
            i
          ]
        }
      )
    }
  );
};
a1.propTypes = {
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
), ln = "-ms-", Am = "-moz-", St = "-webkit-", r1 = "comm", fh = "rule", L0 = "decl", sT = "@import", cT = "@namespace", i1 = "@keyframes", fT = "@layer", o1 = Math.abs, U0 = String.fromCharCode, b0 = Object.assign;
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
function Gb(i, o) {
  return i.filter(function(s) {
    return !Mo(s, o);
  });
}
var dh = 1, Ec = 1, c1 = 0, ur = 0, Nn = 0, _c = "";
function ph(i, o, s, d, c, h, T, A) {
  return { value: i, root: o, parent: s, type: d, props: c, children: h, line: dh, column: Ec, length: T, return: "", siblings: A };
}
function Ho(i, o) {
  return b0(ph("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, o);
}
function bc(i) {
  for (; i.root; )
    i = Ho(i.root, { children: [i] });
  Tm(i, i.siblings);
}
function mT() {
  return Nn;
}
function hT() {
  return Nn = ur > 0 ? el(_c, --ur) : 0, Ec--, Nn === 10 && (Ec = 1, dh--), Nn;
}
function di() {
  return Nn = ur < c1 ? el(_c, ur++) : 0, Ec++, Nn === 10 && (Ec = 1, dh++), Nn;
}
function Xo() {
  return el(_c, ur);
}
function Im() {
  return ur;
}
function mh(i, o) {
  return uc(_c, i, o);
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
function gT(i) {
  return dh = Ec = 1, c1 = ci(_c = i), ur = 0, [];
}
function yT(i) {
  return _c = "", i;
}
function Xy(i) {
  return u1(mh(ur - 1, v0(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function bT(i) {
  for (; (Nn = Xo()) && Nn < 33; )
    di();
  return Cm(i) > 2 || Cm(Nn) > 3 ? "" : " ";
}
function vT(i, o) {
  for (; --o && di() && !(Nn < 48 || Nn > 102 || Nn > 57 && Nn < 65 || Nn > 70 && Nn < 97); )
    ;
  return mh(i, Im() + (o < 6 && Xo() == 32 && di() == 32));
}
function v0(i) {
  for (; di(); )
    switch (Nn) {
      // ] ) " '
      case i:
        return ur;
      // " '
      case 34:
      case 39:
        i !== 34 && i !== 39 && v0(Nn);
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
  for (; di() && i + Nn !== 57 && !(i + Nn === 84 && Xo() === 47); )
    ;
  return "/*" + mh(o, ur - 1) + "*" + U0(i === 47 ? i : di());
}
function wT(i) {
  for (; !Cm(Xo()); )
    di();
  return mh(i, ur);
}
function TT(i) {
  return yT($m("", null, null, null, [""], i = gT(i), 0, [0], i));
}
function $m(i, o, s, d, c, h, T, A, x) {
  for (var C = 0, L = 0, M = T, D = 0, te = 0, G = 0, Y = 1, W = 1, J = 1, H = 0, be = "", ee = c, ne = h, q = d, V = be; W; )
    switch (G = H, H = di()) {
      // (
      case 40:
        if (G != 108 && el(V, M - 1) == 58) {
          Qm(V += We(Xy(H), "&", "&\f"), "&\f", o1(C ? A[C - 1] : 0)) != -1 && (J = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        V += Xy(H);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        V += bT(G);
        break;
      // \
      case 92:
        V += vT(Im() - 1, 7);
        continue;
      // /
      case 47:
        switch (Xo()) {
          case 42:
          case 47:
            Tm(ET(ST(di(), Im()), o, s, x), x), (Cm(G || 1) == 5 || Cm(Xo() || 1) == 5) && ci(V) && uc(V, -1, void 0) !== " " && (V += " ");
            break;
          default:
            V += "/";
        }
        break;
      // {
      case 123 * Y:
        A[C++] = ci(V) * J;
      // } ; \0
      case 125 * Y:
      case 59:
      case 0:
        switch (H) {
          // \0 }
          case 0:
          case 125:
            W = 0;
          // ;
          case 59 + L:
            J == -1 && (V = We(V, /\f/g, "")), te > 0 && (ci(V) - M || Y === 0 && G === 47) && Tm(te > 32 ? Yb(V + ";", d, s, M - 1, x) : Yb(We(V, " ", "") + ";", d, s, M - 2, x), x);
            break;
          // @ ;
          case 59:
            V += ";";
          // { rule/at-rule
          default:
            if (Tm(q = Vb(V, o, s, C, L, c, A, be, ee = [], ne = [], M, h), h), H === 123)
              if (L === 0)
                $m(V, o, q, q, ee, h, M, A, ne);
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
                L ? $m(i, q, q, d && Tm(Vb(i, q, q, 0, 0, c, A, be, c, ee = [], M, ne), ne), c, ne, M, A, d ? ee : ne) : $m(V, q, q, q, [""], ne, 0, A, ne);
              }
        }
        C = L = te = 0, Y = J = 1, be = V = "", M = T;
        break;
      // :
      case 58:
        M = 1 + ci(V), te = G;
      default:
        if (Y < 1) {
          if (H == 123)
            --Y;
          else if (H == 125 && Y++ == 0 && hT() == 125)
            continue;
        }
        switch (V += U0(H), H * Y) {
          // &
          case 38:
            J = L > 0 ? 1 : (V += "\f", -1);
            break;
          // ,
          case 44:
            A[C++] = (ci(V) - 1) * J, J = 1;
            break;
          // @
          case 64:
            Xo() === 45 && (V += Xy(di())), D = Xo(), L = M = ci(be = V += wT(Im())), H++;
            break;
          // -
          case 45:
            G === 45 && ci(V) == 2 && (Y = 0);
        }
    }
  return h;
}
function Vb(i, o, s, d, c, h, T, A, x, C, L, M) {
  for (var D = c - 1, te = c === 0 ? h : [""], G = s1(te), Y = 0, W = 0, J = 0; Y < d; ++Y)
    for (var H = 0, be = uc(i, D + 1, D = o1(W = T[Y])), ee = i; H < G; ++H)
      (ee = u1(W > 0 ? te[H] + " " + be : We(be, /&\f/g, te[H]))) && (x[J++] = ee);
  return ph(i, o, s, c === 0 ? fh : A, x, C, L, M);
}
function ET(i, o, s, d) {
  return ph(i, o, s, r1, U0(mT()), uc(i, 2, -2), 0, d);
}
function Yb(i, o, s, d, c) {
  return ph(i, o, s, L0, uc(i, 0, d), uc(i, d + 1, -1), d, c);
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
      return We(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(d, c, h, T, A, x, C) {
        return ln + c + ":" + h + C + (T ? ln + c + "-span:" + (A ? x : +x - +h) + C : "") + i;
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
function kT(i, o, s, d) {
  switch (i.type) {
    case fT:
      if (i.children.length) break;
    case sT:
    case cT:
    case L0:
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
      case L0:
        i.return = f1(i.value, i.length, s);
        return;
      case i1:
        return ah([Ho(i, { value: We(i.value, "@", "@" + St) })], d);
      case fh:
        if (i.length)
          return pT(s = i.props, function(c) {
            switch (Mo(c, d = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                bc(Ho(i, { props: [We(c, /:(read-\w+)/, ":" + Am + "$1")] })), bc(Ho(i, { props: [c] })), b0(i, { props: Gb(s, d) });
                break;
              // :placeholder
              case "::placeholder":
                bc(Ho(i, { props: [We(c, /:(plac\w+)/, ":" + St + "input-$1")] })), bc(Ho(i, { props: [We(c, /:(plac\w+)/, ":" + Am + "$1")] })), bc(Ho(i, { props: [We(c, /:(plac\w+)/, ln + "input-$1")] })), bc(Ho(i, { props: [c] })), b0(i, { props: Gb(s, d) });
                break;
            }
            return "";
          });
    }
}
var Lt = { env: { NODE_ENV: "production" } }, Qy, Iy;
const sc = typeof Lt < "u" && Lt.env !== void 0 && (Lt.env.REACT_APP_SC_ATTR || Lt.env.SC_ATTR) || "data-styled", d1 = "active", p1 = "data-styled-version", hh = "6.4.2", j0 = `/*!sc*/
`, _m = typeof window < "u" && typeof document < "u";
function Fb(i) {
  if (typeof Lt < "u" && Lt.env !== void 0) {
    const o = Lt.env[i];
    if (o !== void 0 && o !== "") return o !== "false";
  }
}
const NT = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (Iy = (Qy = Fb("REACT_APP_SC_DISABLE_SPEEDY")) !== null && Qy !== void 0 ? Qy : Fb("SC_DISABLE_SPEEDY")) !== null && Iy !== void 0 ? Iy : typeof Lt < "u" && Lt.env !== void 0 && Lt.env.NODE_ENV !== "production"), OT = "sc-keyframes-", CT = Lt.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
  })(CT[i], ...o).trim());
}
const zT = 1 << 30;
let Pm = /* @__PURE__ */ new Map(), rh = /* @__PURE__ */ new Map(), Km = 1;
const Hm = (i) => {
  if (Pm.has(i)) return Pm.get(i);
  for (; rh.has(Km); ) Km++;
  const o = Km++;
  if (Lt.env.NODE_ENV !== "production" && ((0 | o) < 0 || o > zT)) throw Mm(16, `${o}`);
  return Pm.set(i, o), rh.set(o, i), o;
}, DT = (i) => rh.get(i), RT = (i, o) => {
  Km = o + 1, Pm.set(i, o), rh.set(o, i);
}, Xb = /invalid hook call/i, qm = /* @__PURE__ */ new Set(), MT = (i, o) => {
  if (Lt.env.NODE_ENV !== "production") {
    const s = `The component ${i}${o ? ` with the id of "${o}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, d = console.error;
    try {
      let c = !0;
      console.error = (h, ...T) => {
        Xb.test(h) ? (c = !1, qm.delete(s)) : d(h, ...T);
      }, typeof kt.useState == "function" && kt.useState(null), c && !qm.has(s) && (console.warn(s), qm.add(s));
    } catch (c) {
      Xb.test(c.message) && qm.delete(s);
    } finally {
      console.error = d;
    }
  }
}, B0 = Object.freeze([]), kc = Object.freeze({});
function LT(i, o, s = kc) {
  return i.theme !== s.theme && i.theme || o || s.theme;
}
const UT = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, jT = /(^-|-$)/g;
function m1(i) {
  return i.replace(UT, "-").replace(jT, "");
}
const BT = /(a)(d)/gi, Qb = (i) => String.fromCharCode(i + (i > 25 ? 39 : 97));
function h1(i) {
  let o, s = "";
  for (o = Math.abs(i); o > 52; o = o / 52 | 0) s = Qb(o % 52) + s;
  return (Qb(o % 52) + s).replace(BT, "$1-$2");
}
const S0 = 5381, lc = (i, o) => {
  let s = o.length;
  for (; s; ) i = 33 * i ^ o.charCodeAt(--s);
  return i;
}, g1 = (i) => lc(S0, i);
function HT(i) {
  return h1(g1(i) >>> 0);
}
function H0(i) {
  return Lt.env.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Zm(i) {
  return typeof i == "string" && (Lt.env.NODE_ENV === "production" || i.charAt(0) === i.charAt(0).toLowerCase());
}
function qT(i) {
  return Zm(i) ? `styled.${i}` : `Styled(${H0(i)})`;
}
const y1 = Symbol.for("react.memo"), GT = Symbol.for("react.forward_ref"), VT = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, YT = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, b1 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, FT = { [GT]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [y1]: b1 };
function Ib(i) {
  return ("type" in (o = i) && o.type.$$typeof) === y1 ? b1 : "$$typeof" in i ? FT[i.$$typeof] : VT;
  var o;
}
const XT = Object.defineProperty, QT = Object.getOwnPropertyNames, IT = Object.getOwnPropertySymbols, $T = Object.getOwnPropertyDescriptor, PT = Object.getPrototypeOf, KT = Object.prototype;
function v1(i, o, s) {
  if (typeof o != "string") {
    const d = PT(o);
    d && d !== KT && v1(i, d, s);
    const c = QT(o).concat(IT(o)), h = Ib(i), T = Ib(o);
    for (let A = 0; A < c.length; ++A) {
      const x = c[A];
      if (!(x in YT || s && s[x] || T && x in T || h && x in h)) {
        const C = $T(o, x);
        try {
          XT(i, x, C);
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
function Em(i, o) {
  return i && o ? i + " " + o : i || o || "";
}
function $b(i, o) {
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
    for (let h = d; h < c; h++) o += this.tag.getRule(h) + j0;
    return o;
  }
}, JT = `style[${sc}][${p1}="${hh}"]`, eE = new RegExp(`^${sc}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), Pb = (i) => typeof ShadowRoot < "u" && i instanceof ShadowRoot || "host" in i && i.nodeType === 11, T0 = (i) => {
  if (!i) return document;
  if (Pb(i)) return i;
  if ("getRootNode" in i) {
    const o = i.getRootNode();
    if (Pb(o)) return o;
  }
  return document;
}, tE = (i, o, s) => {
  const d = s.split(",");
  let c;
  for (let h = 0, T = d.length; h < T; h++) (c = d[h]) && i.registerName(o, c);
}, nE = (i, o) => {
  var s;
  const d = ((s = o.textContent) !== null && s !== void 0 ? s : "").split(j0), c = [];
  for (let h = 0, T = d.length; h < T; h++) {
    const A = d[h].trim();
    if (!A) continue;
    const x = A.match(eE);
    if (x) {
      const C = 0 | parseInt(x[1], 10), L = x[2];
      C !== 0 && (RT(L, C), tE(i, L, x[3]), i.getTag().insertRules(C, c)), c.length = 0;
    } else c.push(A);
  }
}, $y = (i) => {
  const o = T0(i.options.target).querySelectorAll(JT);
  for (let s = 0, d = o.length; s < d; s++) {
    const c = o[s];
    c && c.getAttribute(sc) !== d1 && (nE(i, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
let gm = !1;
function lE() {
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
    const C = Array.from(x.querySelectorAll(`style[${sc}]`));
    return C[C.length - 1];
  })(d), T = h !== void 0 ? h.nextSibling : null;
  c.setAttribute(sc, d1), c.setAttribute(p1, hh);
  const A = o || lE();
  return A && c.setAttribute("nonce", A), d.insertBefore(c, T), c;
}, aE = class {
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
}, rE = class {
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
let Kb = _m;
const iE = { isServer: !_m, useCSSOMInjection: !NT };
class yh {
  static registerId(o) {
    return Hm(o);
  }
  constructor(o = kc, s = {}, d) {
    this.options = Object.assign(Object.assign({}, iE), o), this.gs = s, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(d), this.server = !!o.isServer, !this.server && _m && Kb && (Kb = !1, $y(this)), w1(this, () => ((c) => {
      const h = c.getTag(), { length: T } = h;
      let A = "";
      for (let x = 0; x < T; x++) {
        const C = DT(x);
        if (C === void 0) continue;
        const L = c.names.get(C);
        if (L === void 0 || !L.size) continue;
        const M = h.getGroup(x);
        if (M.length === 0) continue;
        const D = sc + ".g" + x + '[id="' + C + '"]';
        let te = "";
        for (const G of L) G.length > 0 && (te += G + ",");
        A += M + D + '{content:"' + te + '"}' + j0;
      }
      return A;
    })(this));
  }
  rehydrate() {
    !this.server && _m && $y(this);
  }
  reconstructWithOptions(o, s = !0) {
    const d = new yh(Object.assign(Object.assign({}, this.options), o), this.gs, s && this.names || void 0);
    return d.keyframeIds = new Set(this.keyframeIds), !this.server && _m && o.target !== this.options.target && T0(this.options.target) !== T0(o.target) && $y(d), d;
  }
  allocateGSInstance(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (o = (({ useCSSOMInjection: s, target: d, nonce: c }) => s ? new aE(d, c) : new rE(d, c))(this.options), new WT(o)));
    var o;
  }
  hasNameForId(o, s) {
    var d, c;
    return (c = (d = this.names.get(o)) === null || d === void 0 ? void 0 : d.has(s)) !== null && c !== void 0 && c;
  }
  registerName(o, s) {
    Hm(o), o.startsWith(OT) && this.keyframeIds.add(o);
    const d = this.names.get(o);
    d ? d.add(s) : this.names.set(o, /* @__PURE__ */ new Set([s]));
  }
  insertRules(o, s, d) {
    this.registerName(o, s), this.getTag().insertRules(Hm(o), d);
  }
  clearNames(o) {
    this.names.has(o) && this.names.get(o).clear();
  }
  clearRules(o) {
    this.getTag().clearGroup(Hm(o)), this.clearNames(o);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const E1 = /* @__PURE__ */ new WeakSet(), oE = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function uE(i, o) {
  return o == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || i in oE || i.startsWith("--") ? String(o).trim() : o + "px";
}
const tc = 47;
function Zb(i) {
  if (i.charCodeAt(0) === 45 && i.charCodeAt(1) === 45) return i;
  let o = "";
  for (let s = 0; s < i.length; s++) {
    const d = i.charCodeAt(s);
    o += d >= 65 && d <= 90 ? "-" + String.fromCharCode(d + 32) : i[s];
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
const sE = Symbol.for("sc-keyframes");
function E0(i) {
  return typeof i == "object" && i !== null && sE in i;
}
function k1(i) {
  return gh(i) && !(i.prototype && i.prototype.isReactComponent);
}
const x1 = (i) => i == null || i === !1 || i === "", cE = Symbol.for("react.client.reference");
function Wb(i) {
  return i.$$typeof === cE;
}
function Jb(i) {
  const o = i.$$id, s = (o && o.includes("#") ? o.split("#").pop() : o) || i.name || "unknown";
  console.warn(`Interpolating a client component (${s}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function A1(i, o) {
  for (const s in i) {
    const d = i[s];
    i.hasOwnProperty(s) && !x1(d) && (Array.isArray(d) && E1.has(d) || gh(d) ? o.push(Zb(s) + ":", d, ";") : cc(d) ? (o.push(s + " {"), A1(d, o), o.push("}")) : o.push(Zb(s) + ": " + uE(s, d) + ";"));
  }
}
function ac(i, o, s, d, c = []) {
  if (x1(i)) return c;
  const h = typeof i;
  if (h === "string") return c.push(i), c;
  if (h === "function") {
    if (Wb(i)) return Lt.env.NODE_ENV !== "production" && Jb(i), c;
    if (k1(i) && o) {
      const T = i(o);
      return Lt.env.NODE_ENV === "production" || typeof T != "object" || Array.isArray(T) || E0(T) || cc(T) || T === null || console.error(`${H0(i)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), ac(T, o, s, d, c);
    }
    return c.push(i), c;
  }
  if (Array.isArray(i)) {
    for (let T = 0; T < i.length; T++) ac(i[T], o, s, d, c);
    return c;
  }
  return S1(i) ? (c.push(`.${i.styledComponentId}`), c) : E0(i) ? (s ? (i.inject(s, d), c.push(i.getName(d))) : c.push(i), c) : Wb(i) ? (Lt.env.NODE_ENV !== "production" && Jb(i), c) : cc(i) ? i.toString !== Object.prototype.toString ? (c.push(i.toString()), c) : (A1(i, c), c) : (c.push(i.toString()), c);
}
const fE = g1(hh);
class dE {
  constructor(o, s, d) {
    this.rules = o, this.componentId = s, this.baseHash = lc(fE, s), this.baseStyle = d, yh.registerId(s);
  }
  generateAndInjectStyles(o, s, d) {
    let c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, s, d) : "";
    {
      let h = "";
      for (let T = 0; T < this.rules.length; T++) {
        const A = this.rules[T];
        if (typeof A == "string") h += A;
        else if (A) if (k1(A)) {
          const x = A(o);
          typeof x == "string" ? h += x : x != null && x !== !1 && (Lt.env.NODE_ENV === "production" || typeof x != "object" || Array.isArray(x) || E0(x) || cc(x) || console.error(`${H0(A)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), h += $b(ac(x, o, s, d)));
        } else h += $b(ac(A, o, s, d));
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
        c = Em(c, A);
      }
    }
    return c;
  }
}
const pE = /&/g;
function _1(i, o) {
  let s = 0;
  for (; --o >= 0 && i.charCodeAt(o) === 92; ) s++;
  return !(1 & ~s);
}
function Py(i) {
  const o = i.length;
  let s = "", d = 0, c = 0, h = 0, T = !1, A = !1;
  for (let x = 0; x < o; x++) {
    const C = i.charCodeAt(x);
    if (h !== 0 || T || C !== tc || i.charCodeAt(x + 1) !== 42) if (T) C === 42 && i.charCodeAt(x + 1) === tc && (T = !1, x++);
    else if (C !== 34 && C !== 39 || _1(i, x)) {
      if (h === 0) if (C === 123) c++;
      else if (C === 125) {
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
      } else C === 59 && c === 0 && (s += i.substring(d, x + 1), d = x + 1);
    } else h === 0 ? h = C : h === C && (h = 0);
    else T = !0, x++;
  }
  return A || c !== 0 || h !== 0 ? (d < o && c === 0 && h === 0 && (s += i.substring(d)), s) : i;
}
function N1(i, o) {
  const s = o + " ", d = "," + s;
  for (let c = 0; c < i.length; c++) {
    const h = i[c];
    if (h.type === "rule") {
      h.value = (s + h.value).replaceAll(",", d);
      const T = h.props, A = [];
      for (let x = 0; x < T.length; x++) A[x] = s + T[x];
      h.props = A;
    }
    Array.isArray(h.children) && h.type !== "@keyframes" && N1(h.children, o);
  }
  return i;
}
function mE({ options: i = kc, plugins: o = B0 } = kc) {
  let s, d, c;
  const h = (D, te, G) => G.startsWith(d) && G.endsWith(d) && G.replaceAll(d, "").length > 0 ? `.${s}` : D, T = o.slice();
  T.push((D) => {
    D.type === fh && D.value.includes("&") && (c || (c = new RegExp(`\\${d}\\b`, "g")), D.props[0] = D.props[0].replace(pE, d).replace(c, h));
  }), i.prefix && T.push(_T), T.push(kT);
  let A = [];
  const x = xT(T.concat(AT((D) => A.push(D)))), C = (D, te = "", G = "", Y = "&") => {
    s = Y, d = te, c = void 0;
    const W = (function(H) {
      const be = H.indexOf("//") !== -1, ee = H.indexOf("}") !== -1;
      if (!be && !ee) return H;
      if (!be) return Py(H);
      const ne = H.length;
      let q = "", V = 0, K = 0, ke = 0, Be = 0, qe = 0, He = !1;
      for (; K < ne; ) {
        const _e = H.charCodeAt(K);
        if (_e !== 34 && _e !== 39 || _1(H, K)) if (ke === 0) if (_e === tc && K + 1 < ne && H.charCodeAt(K + 1) === 42) {
          for (K += 2; K + 1 < ne && (H.charCodeAt(K) !== 42 || H.charCodeAt(K + 1) !== tc); ) K++;
          K += 2;
        } else if (_e !== 40) if (_e !== 41) if (Be > 0) K++;
        else if (_e === 42 && K + 1 < ne && H.charCodeAt(K + 1) === tc) q += H.substring(V, K), K += 2, V = K, He = !0;
        else if (_e === tc && K + 1 < ne && H.charCodeAt(K + 1) === tc) {
          for (q += H.substring(V, K); K < ne && H.charCodeAt(K) !== 10; ) K++;
          V = K, He = !0;
        } else _e === 123 ? qe++ : _e === 125 && qe--, K++;
        else Be > 0 && Be--, K++;
        else Be++, K++;
        else K++;
        else ke === 0 ? ke = _e : ke === _e && (ke = 0), K++;
      }
      return He ? (V < ne && (q += H.substring(V)), qe === 0 ? q : Py(q)) : qe === 0 ? H : Py(H);
    })(D);
    let J = TT(G || te ? G + " " + te + " { " + W + " }" : W);
    return i.namespace && (J = N1(J, i.namespace)), A = [], ah(J, x), A;
  }, L = i;
  let M = S0;
  for (let D = 0; D < o.length; D++) o[D].name || Mm(15), M = lc(M, o[D].name);
  return L != null && L.namespace && (M = lc(M, L.namespace)), L != null && L.prefix && (M = lc(M, "p")), C.hash = M !== S0 ? M.toString() : "", C;
}
const hE = new yh(), gE = mE(), O1 = kt.createContext({ shouldForwardProp: void 0, styleSheet: hE, stylis: gE, stylisPlugins: void 0 });
O1.Consumer;
function yE() {
  return kt.useContext(O1);
}
const C1 = kt.createContext(void 0);
C1.Consumer;
const ev = Object.prototype.hasOwnProperty, Ky = {};
function bE(i, o) {
  const s = typeof i != "string" ? "sc" : m1(i);
  Ky[s] = (Ky[s] || 0) + 1;
  const d = s + "-" + HT(hh + s + Ky[s]);
  return o ? o + "-" + d : d;
}
let Zy;
function vE(i, o, s) {
  const d = S1(i), c = i, h = !Zm(i), { attrs: T = B0, componentId: A = bE(o.displayName, o.parentComponentId), displayName: x = qT(i) } = o, C = o.displayName && o.componentId ? m1(o.displayName) + "-" + o.componentId : o.componentId || A, L = d && c.attrs ? c.attrs.concat(T).filter(Boolean) : T;
  let { shouldForwardProp: M } = o;
  if (d && c.shouldForwardProp) {
    const Y = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      const W = o.shouldForwardProp;
      M = (J, H) => Y(J, H) && W(J, H);
    } else M = Y;
  }
  const D = new dE(s, C, d ? c.componentStyle : void 0);
  function te(Y, W) {
    return (function(J, H, be) {
      const { attrs: ee, componentStyle: ne, defaultProps: q, foldedComponentIds: V, styledComponentId: K, target: ke } = J, Be = kt.useContext(C1), qe = yE(), He = J.shouldForwardProp || qe.shouldForwardProp;
      Lt.env.NODE_ENV !== "production" && kt.useDebugValue && kt.useDebugValue(K);
      const _e = LT(H, Be, q) || kc;
      let gt, Ie;
      {
        const re = kt.useRef(null), se = re.current;
        if (se !== null && se[1] === _e && se[2] === qe.styleSheet && se[3] === qe.stylis && se[7] === ne && (function(ie, we, ue) {
          const $ = ie, ge = we;
          let yt = 0;
          for (const tt in ge) if (ev.call(ge, tt) && (yt++, $[tt] !== ge[tt])) return !1;
          return yt === ue;
        })(se[0], H, se[4])) gt = se[5], Ie = se[6];
        else {
          gt = (function(we, ue, $) {
            const ge = Object.assign(Object.assign({}, ue), { className: void 0, theme: $ }), yt = we.length > 1;
            for (let tt = 0; tt < we.length; tt++) {
              const fn = we[tt], dn = gh(fn) ? fn(yt ? Object.assign({}, ge) : ge) : fn;
              for (const nt in dn) nt === "className" ? ge.className = Em(ge.className, dn[nt]) : nt === "style" ? ge.style = Object.assign(Object.assign({}, ge.style), dn[nt]) : nt in ue && ue[nt] === void 0 || (ge[nt] = dn[nt]);
            }
            return "className" in ue && typeof ue.className == "string" && (ge.className = Em(ge.className, ue.className)), ge;
          })(ee, H, _e), Ie = (function(we, ue, $, ge) {
            const yt = we.generateAndInjectStyles(ue, $, ge);
            return Lt.env.NODE_ENV !== "production" && kt.useDebugValue && kt.useDebugValue(yt), yt;
          })(ne, gt, qe.styleSheet, qe.stylis);
          let ie = 0;
          for (const we in H) ev.call(H, we) && ie++;
          re.current = [H, _e, qe.styleSheet, qe.stylis, ie, gt, Ie, ne];
        }
      }
      Lt.env.NODE_ENV !== "production" && J.warnTooManyClasses && J.warnTooManyClasses(Ie);
      const U = gt.as || ke, R = (function(re, se, ie, we) {
        const ue = {};
        for (const $ in re) re[$] === void 0 || $[0] === "$" || $ === "as" || $ === "theme" && re.theme === ie || ($ === "forwardedAs" ? ue.as = re.forwardedAs : we && !we($, se) || (ue[$] = re[$], we || Lt.env.NODE_ENV !== "development" || uT($) || (Zy || (Zy = /* @__PURE__ */ new Set())).has($) || !Zm(se) || se.includes("-") || (Zy.add($), console.warn(`styled-components: it looks like an unknown prop "${$}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return ue;
      })(gt, U, _e, He);
      let B = Em(V, K);
      return Ie && (B += " " + Ie), gt.className && (B += " " + gt.className), R[Zm(U) && U.includes("-") ? "class" : "className"] = B, be && (R.ref = be), Xv(U, R);
    })(G, Y, W);
  }
  te.displayName = x;
  let G = kt.forwardRef(te);
  return G.attrs = L, G.componentStyle = D, G.displayName = x, G.shouldForwardProp = M, G.foldedComponentIds = d ? Em(c.foldedComponentIds, c.styledComponentId) : "", G.styledComponentId = C, G.target = d ? c.target : i, Object.defineProperty(G, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(Y) {
    this._foldedDefaultProps = d ? (function(W, ...J) {
      for (const H of J) w0(W, H, !0);
      return W;
    })({}, c.defaultProps, Y) : Y;
  } }), Lt.env.NODE_ENV !== "production" && (MT(x, C), G.warnTooManyClasses = /* @__PURE__ */ ((Y, W) => {
    let J = {}, H = !1;
    return (be) => {
      !H && (J[be] = !0, Object.keys(J).length >= 200) && (console.warn(`Over 200 classes were generated for component ${Y}${W ? ` with the id of "${W}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), H = !0, J = {});
    };
  })(x, C)), w1(G, () => `.${G.styledComponentId}`), h && v1(G, i, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), G;
}
var SE = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function tv(i, o) {
  const s = [i[0]];
  for (let d = 0, c = o.length; d < c; d += 1) s.push(o[d], i[d + 1]);
  return s;
}
const nv = (i) => (E1.add(i), i);
function wE(i, ...o) {
  if (gh(i) || cc(i)) return nv(ac(tv(B0, [i, ...o])));
  const s = i;
  return o.length === 0 && s.length === 1 && typeof s[0] == "string" ? ac(s) : nv(ac(tv(s, o)));
}
function k0(i, o, s = kc) {
  if (!o) throw Mm(1, o);
  const d = (c, ...h) => i(o, s, wE(c, ...h));
  return d.attrs = (c) => k0(i, o, Object.assign(Object.assign({}, s), { attrs: Array.prototype.concat(s.attrs, c).filter(Boolean) })), d.withConfig = (c) => k0(i, o, Object.assign(Object.assign({}, s), c)), d;
}
const z1 = (i) => k0(vE, i), bi = z1;
SE.forEach((i) => {
  bi[i] = z1(i);
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
var Wy = { exports: {} }, Jy = { exports: {} }, e0, lv;
function TE() {
  if (lv) return e0;
  lv = 1;
  var i = 1e3, o = i * 60, s = o * 60, d = s * 24, c = d * 365.25;
  e0 = function(C, L) {
    L = L || {};
    var M = typeof C;
    if (M === "string" && C.length > 0)
      return h(C);
    if (M === "number" && isNaN(C) === !1)
      return L.long ? A(C) : T(C);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(C)
    );
  };
  function h(C) {
    if (C = String(C), !(C.length > 100)) {
      var L = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        C
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
  function T(C) {
    return C >= d ? Math.round(C / d) + "d" : C >= s ? Math.round(C / s) + "h" : C >= o ? Math.round(C / o) + "m" : C >= i ? Math.round(C / i) + "s" : C + "ms";
  }
  function A(C) {
    return x(C, d, "day") || x(C, s, "hour") || x(C, o, "minute") || x(C, i, "second") || C + " ms";
  }
  function x(C, L, M) {
    if (!(C < L))
      return C < L * 1.5 ? Math.floor(C / L) + " " + M : Math.ceil(C / L) + " " + M + "s";
  }
  return e0;
}
var av;
function EE() {
  return av || (av = 1, (function(i, o) {
    o = i.exports = c.debug = c.default = c, o.coerce = x, o.disable = T, o.enable = h, o.enabled = A, o.humanize = TE(), o.names = [], o.skips = [], o.formatters = {};
    var s;
    function d(C) {
      var L = 0, M;
      for (M in C)
        L = (L << 5) - L + C.charCodeAt(M), L |= 0;
      return o.colors[Math.abs(L) % o.colors.length];
    }
    function c(C) {
      function L() {
        if (L.enabled) {
          var M = L, D = +/* @__PURE__ */ new Date(), te = D - (s || D);
          M.diff = te, M.prev = s, M.curr = D, s = D;
          for (var G = new Array(arguments.length), Y = 0; Y < G.length; Y++)
            G[Y] = arguments[Y];
          G[0] = o.coerce(G[0]), typeof G[0] != "string" && G.unshift("%O");
          var W = 0;
          G[0] = G[0].replace(/%([a-zA-Z%])/g, function(H, be) {
            if (H === "%%") return H;
            W++;
            var ee = o.formatters[be];
            if (typeof ee == "function") {
              var ne = G[W];
              H = ee.call(M, ne), G.splice(W, 1), W--;
            }
            return H;
          }), o.formatArgs.call(M, G);
          var J = L.log || o.log || console.log.bind(console);
          J.apply(M, G);
        }
      }
      return L.namespace = C, L.enabled = o.enabled(C), L.useColors = o.useColors(), L.color = d(C), typeof o.init == "function" && o.init(L), L;
    }
    function h(C) {
      o.save(C), o.names = [], o.skips = [];
      for (var L = (typeof C == "string" ? C : "").split(/[\s,]+/), M = L.length, D = 0; D < M; D++)
        L[D] && (C = L[D].replace(/\*/g, ".*?"), C[0] === "-" ? o.skips.push(new RegExp("^" + C.substr(1) + "$")) : o.names.push(new RegExp("^" + C + "$")));
    }
    function T() {
      o.enable("");
    }
    function A(C) {
      var L, M;
      for (L = 0, M = o.skips.length; L < M; L++)
        if (o.skips[L].test(C))
          return !1;
      for (L = 0, M = o.names.length; L < M; L++)
        if (o.names[L].test(C))
          return !0;
      return !1;
    }
    function x(C) {
      return C instanceof Error ? C.stack || C.message : C;
    }
  })(Jy, Jy.exports)), Jy.exports;
}
var rv;
function kE() {
  return rv || (rv = 1, (function(i, o) {
    var s = { env: { NODE_ENV: "production" } };
    o = i.exports = EE(), o.log = h, o.formatArgs = c, o.save = T, o.load = A, o.useColors = d, o.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : x(), o.colors = [
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
    o.formatters.j = function(C) {
      try {
        return JSON.stringify(C);
      } catch (L) {
        return "[UnexpectedJSONParseError]: " + L.message;
      }
    };
    function c(C) {
      var L = this.useColors;
      if (C[0] = (L ? "%c" : "") + this.namespace + (L ? " %c" : " ") + C[0] + (L ? "%c " : " ") + "+" + o.humanize(this.diff), !!L) {
        var M = "color: " + this.color;
        C.splice(1, 0, M, "color: inherit");
        var D = 0, te = 0;
        C[0].replace(/%[a-zA-Z%]/g, function(G) {
          G !== "%%" && (D++, G === "%c" && (te = D));
        }), C.splice(te, 0, M);
      }
    }
    function h() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function T(C) {
      try {
        C == null ? o.storage.removeItem("debug") : o.storage.debug = C;
      } catch {
      }
    }
    function A() {
      var C;
      try {
        C = o.storage.debug;
      } catch {
      }
      return !C && typeof s < "u" && "env" in s && (C = s.env.DEBUG), C;
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
var t0, iv;
function xE() {
  if (iv) return t0;
  iv = 1;
  var i = kE()("jsonp");
  t0 = d;
  var o = 0;
  function s() {
  }
  function d(c, h, T) {
    typeof h == "function" && (T = h, h = {}), h || (h = {});
    var A = h.prefix || "__jp", x = h.name || A + o++, C = h.param || "callback", L = h.timeout != null ? h.timeout : 6e4, M = encodeURIComponent, D = document.getElementsByTagName("script")[0] || document.head, te, G;
    L && (G = setTimeout(function() {
      Y(), T && T(new Error("Timeout"));
    }, L));
    function Y() {
      te.parentNode && te.parentNode.removeChild(te), window[x] = s, G && clearTimeout(G);
    }
    function W() {
      window[x] && Y();
    }
    return window[x] = function(J) {
      i("jsonp got", J), Y(), T && T(null, J);
    }, c += (~c.indexOf("?") ? "&" : "?") + C + "=" + M(x), c = c.replace("?&", "?"), i('jsonp req "%s"', c), te = document.createElement("script"), te.src = c, D.parentNode.insertBefore(te, D), W;
  }
  return t0;
}
var AE = xE();
const mc = /* @__PURE__ */ R0(AE);
var _E = Object.defineProperty, NE = Object.defineProperties, OE = Object.getOwnPropertyDescriptors, ih = Object.getOwnPropertySymbols, D1 = Object.prototype.hasOwnProperty, R1 = Object.prototype.propertyIsEnumerable, ov = (i, o, s) => o in i ? _E(i, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[o] = s, ht = (i, o) => {
  for (var s in o || (o = {}))
    D1.call(o, s) && ov(i, s, o[s]);
  if (ih)
    for (var s of ih(o))
      R1.call(o, s) && ov(i, s, o[s]);
  return i;
}, Xt = (i, o) => NE(i, OE(o)), Qt = (i, o) => {
  var s = {};
  for (var d in i)
    D1.call(i, d) && o.indexOf(d) < 0 && (s[d] = i[d]);
  if (i != null && ih)
    for (var d of ih(i))
      o.indexOf(d) < 0 && R1.call(i, d) && (s[d] = i[d]);
  return s;
};
class CE extends Error {
  constructor(o) {
    super(o), this.name = "AssertionError";
  }
}
function rn(i, o) {
  if (!i)
    throw new CE(o);
}
function jt(i) {
  const o = Object.entries(i).filter(([, s]) => s != null).map(([s, d]) => `${encodeURIComponent(s)}=${encodeURIComponent(String(d))}`);
  return o.length > 0 ? `?${o.join("&")}` : "";
}
const zE = {
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
}, DE = (i) => !!i && (typeof i == "object" || typeof i == "function") && "then" in i && typeof i.then == "function", RE = (i, o) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - i / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - o / 2
}), ME = (i, o) => ({
  top: (window.screen.height - o) / 2,
  left: (window.screen.width - i) / 2
});
function LE(i) {
  var o;
  const s = Yv.toArray(i);
  if (s.length !== 1)
    return;
  const [d] = s;
  if (Fv(d))
    return d.props.round ? "50%" : (o = d.props.borderRadius) != null ? o : 0;
}
function M1(i) {
  return Yv.toArray(i).some((o) => typeof o == "string" ? o.trim().length > 0 : typeof o == "number" ? !0 : Fv(o) ? M1(o.props.children) : !1);
}
function UE(i, o, s) {
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
    Object.keys(A).map((C) => `${C}=${A[C]}`).join(", ")
  );
  if (s) {
    const C = window.setInterval(() => {
      try {
        (x === null || x.closed) && (window.clearInterval(C), s(x));
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
    forwardedRef: C,
    htmlTitle: L,
    networkLink: M,
    networkName: D,
    onClick: te,
    onShareWindowClose: G,
    openShareDialogOnClick: Y = !0,
    opts: W,
    resetButtonStyle: J = !0,
    style: H,
    title: be,
    type: ee = "button",
    url: ne,
    windowHeight: q = 400,
    windowPosition: V = "windowCenter",
    windowWidth: K = 550
  } = o, ke = Qt(o, [
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
  const Be = LE(h), qe = !s && !d && !M1(h) ? zE[D] : void 0, He = async (Ie) => {
    if (A)
      return;
    const U = M(ne, W);
    if (Ie.preventDefault(), c) {
      const R = c();
      DE(R) && await R;
    }
    if (Y) {
      const R = ht({
        height: q,
        width: K
      }, V === "windowCenter" ? RE(K, q) : ME(K, q));
      UE(U, R, G);
    }
    te && te(Ie, U);
  }, _e = Uo(
    "react-share__ShareButton",
    {
      "react-share__ShareButton--disabled": !!A,
      disabled: !!A
    },
    T
  ), gt = ht(ht(J ? {
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    display: "inline-flex",
    borderRadius: Be,
    outlineOffset: 2,
    font: "inherit",
    color: "inherit",
    cursor: "pointer"
  } : {}, H), A && x);
  return /* @__PURE__ */ F.jsx(
    "button",
    Xt(ht({}, ke), {
      "aria-label": s || qe,
      "aria-labelledby": d,
      className: _e,
      disabled: A,
      onClick: He,
      ref: C,
      style: gt,
      title: L,
      type: ee,
      children: h
    })
  );
}
function jE(i, { title: o, separator: s }) {
  return rn(i, "bluesky.url"), "https://bsky.app/intent/compose" + jt({
    text: o ? o + s + i : i
  });
}
const BE = on(
  (i, o) => {
    var s = i, { separator: d, title: c } = s, h = Qt(s, ["separator", "title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "bluesky",
        networkLink: jE,
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
BE.displayName = "BlueskyShareButton";
function HE(i, { subject: o, body: s, separator: d }) {
  return "mailto:" + jt({ subject: o, body: s ? s + d + i : i });
}
const qE = on(
  (i, o) => {
    var s = i, { body: d, separator: c, subject: h } = s, T = Qt(s, ["body", "separator", "subject"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, T), {
        forwardedRef: o,
        networkName: "email",
        networkLink: HE,
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
qE.displayName = "EmailShareButton";
function GE(i, { appId: o, redirectUri: s, to: d }) {
  return "https://www.facebook.com/dialog/send" + jt({
    link: i,
    redirect_uri: s || i,
    app_id: o,
    to: d
  });
}
const VE = on((i, o) => {
  var s = i, { appId: d, redirectUri: c, to: h } = s, T = Qt(s, ["appId", "redirectUri", "to"]);
  return /* @__PURE__ */ F.jsx(
    cn,
    Xt(ht({}, T), {
      forwardedRef: o,
      networkName: "facebookmessenger",
      networkLink: GE,
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
VE.displayName = "FacebookMessengerShareButton";
function YE(i, { hashtag: o }) {
  return rn(i, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + jt({ u: i, hashtag: o });
}
const FE = on(
  (i, o) => {
    var s = i, { hashtag: d } = s, c = Qt(s, ["hashtag"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "facebook",
        networkLink: YE,
        opts: { hashtag: d },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
FE.displayName = "FacebookShareButton";
function XE() {
  const i = Xm(!1);
  return Io(() => (i.current = !0, () => {
    i.current = !1;
  }), []), p0(() => i.current, []);
}
function QE(i) {
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
  const A = XE(), [x, C] = Fo(void 0), [L, M] = Fo(!1);
  return Io(() => {
    M(!0), c(h, (D) => {
      A() && (C(D), M(!1));
    });
  }, [h]), /* @__PURE__ */ F.jsx("span", Xt(ht({ className: Uo("react-share__ShareCount", d) }, T), { children: !L && x !== void 0 && s(x) }));
}
function hc(i) {
  const o = (s) => /* @__PURE__ */ F.jsx(QE, ht({ getCount: i }, s));
  return o.displayName = `ShareCount(${i.name})`, o;
}
function IE(i, o) {
  const s = `https://graph.facebook.com/?id=${i}&fields=og_object{engagement}`;
  mc(s, (d, c) => {
    o(
      !d && c && c.og_object && c.og_object.engagement ? c.og_object.engagement.count : void 0
    );
  });
}
hc(IE);
function $E(i, { title: o }) {
  return rn(i, "hatena.url"), `http://b.hatena.ne.jp/add?mode=confirm&url=${i}&title=${o}`;
}
const PE = on(
  (i, o) => {
    var s = i, { title: d } = s, c = Qt(s, ["title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "hatena",
        networkLink: $E,
        opts: { title: d },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
PE.displayName = "HatenaShareButton";
function KE(i, o) {
  mc(
    "https://bookmark.hatenaapis.com/count/entry" + jt({
      url: i
    }),
    (s, d) => {
      o(d ?? void 0);
    }
  );
}
hc(KE);
function ZE(i, { title: o, description: s }) {
  return rn(i, "instapaper.url"), "http://www.instapaper.com/hello2" + jt({
    url: i,
    title: o,
    description: s
  });
}
const WE = on(
  (i, o) => {
    var s = i, { description: d, title: c } = s, h = Qt(s, ["description", "title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "instapaper",
        networkLink: ZE,
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
WE.displayName = "InstapaperShareButton";
function JE(i, { title: o }) {
  return rn(i, "line.url"), "https://social-plugins.line.me/lineit/share" + jt({
    url: i,
    text: o
  });
}
const ek = on(
  (i, o) => {
    var s = i, { title: d } = s, c = Qt(s, ["title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "line",
        networkLink: JE,
        opts: { title: d },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
ek.displayName = "LineShareButton";
function tk(i, { title: o, summary: s, source: d }) {
  return rn(i, "linkedin.url"), "https://linkedin.com/shareArticle" + jt({ url: i, mini: "true", title: o, summary: s, source: d });
}
const nk = on(
  (i, o) => {
    var s = i, { source: d, summary: c, title: h } = s, T = Qt(s, ["source", "summary", "title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, T), {
        forwardedRef: o,
        networkName: "linkedin",
        networkLink: tk,
        opts: { title: h, summary: c, source: d },
        windowHeight: 600,
        windowWidth: 750
      })
    );
  }
);
nk.displayName = "LinkedinShareButton";
function lk(i, { title: o, description: s }) {
  return rn(i, "livejournal.url"), "https://www.livejournal.com/update.bml" + jt({
    subject: o,
    event: s
  });
}
const ak = on(
  (i, o) => {
    var s = i, { description: d, title: c } = s, h = Qt(s, ["description", "title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "livejournal",
        networkLink: lk,
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
ak.displayName = "LivejournalShareButton";
function rk(i, { title: o, description: s, imageUrl: d }) {
  return rn(i, "mailru.url"), "https://connect.mail.ru/share" + jt({
    url: i,
    title: o,
    description: s,
    image_url: d
  });
}
const ik = on(
  (i, o) => {
    var s = i, { description: d, imageUrl: c, title: h } = s, T = Qt(s, ["description", "imageUrl", "title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, T), {
        forwardedRef: o,
        networkName: "mailru",
        networkLink: rk,
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
ik.displayName = "MailruShareButton";
function ok(i, { title: o, description: s, image: d }) {
  return rn(i, "ok.url"), "https://connect.ok.ru/offer" + jt({
    url: i,
    title: o,
    description: s,
    imageUrl: d
  });
}
const uk = on(
  (i, o) => {
    var s = i, { description: d, image: c, title: h } = s, T = Qt(s, ["description", "image", "title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, T), {
        forwardedRef: o,
        networkName: "ok",
        networkLink: ok,
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
uk.displayName = "OKShareButton";
function sk(i, o) {
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
hc(sk);
function ck(i, { media: o, description: s, pinId: d }) {
  return d ? `https://pinterest.com/pin/${d}/repin/x/` : (rn(i, "pinterest.url"), rn(o, "pinterest.media"), "https://pinterest.com/pin/create/button/" + jt({
    url: i,
    media: o,
    description: s
  }));
}
const fk = on(
  (i, o) => {
    var s = i, { description: d, media: c, pinId: h } = s, T = Qt(s, ["description", "media", "pinId"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, T), {
        forwardedRef: o,
        networkName: "pinterest",
        networkLink: ck,
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
fk.displayName = "PinterestShareButton";
function dk(i, o) {
  mc(
    "https://api.pinterest.com/v1/urls/count.json" + jt({
      url: i
    }),
    (s, d) => {
      o(d ? d.count : void 0);
    }
  );
}
hc(dk);
function pk(i, { title: o }) {
  return rn(i, "pocket.url"), "https://getpocket.com/save" + jt({
    url: i,
    title: o
  });
}
const mk = on(
  (i, o) => {
    var s = i, { title: d } = s, c = Qt(s, ["title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "pocket",
        networkLink: pk,
        opts: { title: d },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
mk.displayName = "PocketShareButton";
function hk(i, { title: o }) {
  return rn(i, "reddit.url"), "https://www.reddit.com/submit" + jt({
    url: i,
    title: o
  });
}
const gk = on(
  (i, o) => {
    var s = i, { title: d } = s, c = Qt(s, ["title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "reddit",
        networkLink: hk,
        opts: { title: d },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
gk.displayName = "RedditShareButton";
function yk(i, { title: o }) {
  return rn(i, "gab.url"), "https://gab.com/compose" + jt({
    url: i,
    text: o
  });
}
const bk = on(
  (i, o) => {
    var s = i, { title: d } = s, c = Qt(s, ["title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "gab",
        networkLink: yk,
        opts: { title: d },
        windowHeight: 640,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
bk.displayName = "GabShareButton";
function vk(i, o) {
  const s = `https://www.reddit.com/api/info.json?limit=1&url=${i}`;
  mc(s, { param: "jsonp" }, (d, c) => {
    o(
      !d && c && c.data && c.data.children.length > 0 && c.data.children[0].data.score ? c.data.children[0].data.score : void 0
    );
  });
}
hc(vk);
function Sk(i, { title: o }) {
  return rn(i, "telegram.url"), "https://telegram.me/share/url" + jt({
    url: i,
    text: o
  });
}
const wk = on(
  (i, o) => {
    var s = i, { title: d } = s, c = Qt(s, ["title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, c), {
        forwardedRef: o,
        networkName: "telegram",
        networkLink: Sk,
        opts: { title: d },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
wk.displayName = "TelegramShareButton";
function Tk(i, { title: o }) {
  return rn(i, "threads.url"), "https://threads.net/intent/post" + jt({
    url: i,
    text: o
  });
}
const Ek = on(
  (i, o) => {
    var s = i, { hashtags: d, related: c, title: h, via: T } = s, A = Qt(s, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, A), {
        forwardedRef: o,
        networkName: "threads",
        networkLink: Tk,
        opts: { title: h },
        windowHeight: 600,
        windowWidth: 550
      })
    );
  }
);
Ek.displayName = "ThreadsShareButton";
function kk(i, {
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
const xk = on(
  (i, o) => {
    var s = i, { caption: d, posttype: c, tags: h, title: T } = s, A = Qt(s, ["caption", "posttype", "tags", "title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, A), {
        forwardedRef: o,
        networkName: "tumblr",
        networkLink: kk,
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
xk.displayName = "TumblrShareButton";
function Ak(i, o) {
  return mc(
    "https://api.tumblr.com/v2/share/stats" + jt({
      url: i
    }),
    (s, d) => {
      o(!s && d && d.response ? d.response.note_count : void 0);
    }
  );
}
hc(Ak);
function _k(i, {
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
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, A), {
        forwardedRef: o,
        networkName: "twitter",
        networkLink: _k,
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
const Nk = on((i, o) => /* @__PURE__ */ F.jsx(L1, Xt(ht({}, i), { ref: o })));
Nk.displayName = "TwitterShareButton";
function Ok(i, { title: o, separator: s }) {
  return rn(i, "viber.url"), "viber://forward" + jt({
    text: o ? o + s + i : i
  });
}
const Ck = on(
  (i, o) => {
    var s = i, { separator: d, title: c } = s, h = Qt(s, ["separator", "title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "viber",
        networkLink: Ok,
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
Ck.displayName = "ViberShareButton";
function zk(i, { title: o, image: s, noParse: d, noVkLinks: c }) {
  return rn(i, "vk.url"), "https://vk.com/share.php" + jt({
    url: i,
    title: o,
    image: s,
    noparse: d ? 1 : 0,
    no_vk_links: c ? 1 : 0
  });
}
const Dk = on(
  (i, o) => {
    var s = i, { image: d, noParse: c, noVkLinks: h, title: T } = s, A = Qt(s, ["image", "noParse", "noVkLinks", "title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, A), {
        forwardedRef: o,
        networkName: "vk",
        networkLink: zk,
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
Dk.displayName = "VKShareButton";
function Rk(i, o) {
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
hc(Rk);
function Mk(i, { title: o, image: s }) {
  return rn(i, "weibo.url"), "http://service.weibo.com/share/share.php" + jt({
    url: i,
    title: o,
    pic: s
  });
}
const Lk = on(
  (i, o) => {
    var s = i, { image: d, title: c } = s, h = Qt(s, ["image", "title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "weibo",
        networkLink: Mk,
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
Lk.displayName = "WeiboShareButton";
function Uk(i, { title: o, separator: s }) {
  return rn(i, "whatsapp.url"), "https://api.whatsapp.com/send" + jt({
    text: o ? o + s + i : i
  });
}
const jk = on(
  (i, o) => {
    var s = i, { separator: d, title: c } = s, h = Qt(s, ["separator", "title"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "whatsapp",
        networkLink: Uk,
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
jk.displayName = "WhatsappShareButton";
function Bk(i, { quote: o, hashtag: s }) {
  return rn(i, "workplace.url"), "https://work.facebook.com/sharer.php" + jt({
    u: i,
    quote: o,
    hashtag: s
  });
}
const Hk = on(
  (i, o) => {
    var s = i, { hashtag: d, quote: c } = s, h = Qt(s, ["hashtag", "quote"]);
    return /* @__PURE__ */ F.jsx(
      cn,
      Xt(ht({}, h), {
        forwardedRef: o,
        networkName: "workplace",
        networkLink: Bk,
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
Hk.displayName = "WorkplaceShareButton";
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
const qk = {
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
  onClick: C,
  ...L
}) => {
  const M = Uo("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: h
  });
  let D = T;
  return x && T === "button" && (D = "a"), /* @__PURE__ */ F.jsx(
    oc,
    {
      gaData: {
        ...qk,
        section: o,
        // @deprecated - remove at some point
        ...s,
        text: i
      },
      children: /* @__PURE__ */ F.jsx(
        D,
        {
          type: D === "button" && C ? "button" : void 0,
          ...L,
          className: M,
          href: x,
          ref: A,
          onClick: C,
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
  cardLink: C,
  title: L,
  caption: M,
  captionTitle: D,
  border: te,
  dropShadow: G
}) => {
  const Y = {
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
  }, W = Uo("uds-img", {
    borderless: !te,
    "uds-img-drop-shadow": G
  }), J = (be) => {
    const ee = be ? `${Y.className} ${be}` : Y.className;
    return C ? /* @__PURE__ */ F.jsxs("a", { href: C, children: [
      /* @__PURE__ */ F.jsx("img", { ...Y, className: ee }),
      /* @__PURE__ */ F.jsx("span", { className: "visually-hidden", children: L })
    ] }) : /* @__PURE__ */ F.jsx("img", { ...Y, className: ee });
  }, H = () => /* @__PURE__ */ F.jsx("div", { className: W, children: /* @__PURE__ */ F.jsxs("figure", { className: "figure uds-figure", children: [
    J(),
    M && /* @__PURE__ */ F.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      D && /* @__PURE__ */ F.jsx("h3", { children: D }),
      /* @__PURE__ */ F.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Tc(M)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ F.jsx(F.Fragment, { children: M ? H() : J(W) });
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
const Gk = bi.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Vk = (i) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(i), Yk = (i) => !i.startsWith("https://") && !i.startsWith("http://") && Vk(i) ? `mailto:${i}` : i, uv = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, B1 = (i) => i === "event" || i === "news", Yo = ({
  type: i = "default",
  width: o = "100%",
  horizontal: s = !1,
  image: d,
  imageAltText: c,
  title: h,
  icon: T,
  body: A,
  eventFormat: x = "stack",
  eventLocation: C,
  eventTime: L,
  buttons: M,
  linkLabel: D,
  linkUrl: te,
  tags: G,
  showBorders: Y = !0,
  cardLink: W
}) => /* @__PURE__ */ F.jsx(
  H1,
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
    eventLocation: C,
    eventTime: L,
    buttons: M,
    linkLabel: D,
    linkUrl: te,
    tags: G,
    showBorders: Y,
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
const H1 = ({
  type: i = "default",
  width: o = "100%",
  horizontal: s = !1,
  image: d = "",
  imageAltText: c = "",
  title: h,
  icon: T = void 0,
  body: A = "",
  eventFormat: x = "stack",
  eventLocation: C = "",
  eventTime: L = "",
  buttons: M = void 0,
  linkLabel: D = void 0,
  linkUrl: te = void 0,
  tags: G = void 0,
  showBorders: Y = !0,
  cardLink: W
}) => {
  const J = Uo("card", "cards-components", {
    "card-degree": i === "degree",
    "card-event": i === "event",
    "card-story": i === "story",
    "card-news": i === "news",
    [`w-${o.replace("%", "")}`]: o !== "100%",
    "card-horizontal": s,
    borderless: !Y
  }), H = typeof d == "string" && d.length > 0, be = !B1(i);
  return /* @__PURE__ */ F.jsxs(Gk, { className: J, "data-testid": "card-container", children: [
    H && /* @__PURE__ */ F.jsx(
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
    !d && T && /* @__PURE__ */ F.jsx(
      "i",
      {
        className: `${T == null ? void 0 : T[0]} fa-${T == null ? void 0 : T[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    /* @__PURE__ */ F.jsx("div", { className: s ? "card-content-wrapper" : void 0, children: /* @__PURE__ */ F.jsx(
      q1,
      {
        type: i,
        body: A,
        eventFormat: x,
        eventLocation: C,
        eventTime: L,
        title: h,
        buttons: M,
        linkLabel: D,
        linkUrl: te,
        tags: G,
        cardLink: W
      }
    ) })
  ] });
};
H1.propTypes = {
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
  tags: C = void 0,
  cardLink: L
}) => {
  const M = B1(i), D = L && !M, te = M && L, G = i === "event" && (c || d);
  return /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    h && /* @__PURE__ */ F.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ F.jsx("h3", { className: "card-title", children: D ? /* @__PURE__ */ F.jsx("a", { href: L, children: h }) : h }) }),
    o && /* @__PURE__ */ F.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ F.jsx("div", { dangerouslySetInnerHTML: Tc(o) }) }),
    G && /* @__PURE__ */ F.jsx(
      G1,
      {
        eventFormat: s,
        eventTime: c,
        eventLocation: d
      }
    ),
    te ? /* @__PURE__ */ F.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ F.jsx(
      oc,
      {
        gaData: {
          ...uv,
          text: h
        },
        children: /* @__PURE__ */ F.jsx("a", { href: L, className: "card-arrow-link", "aria-label": h, children: /* @__PURE__ */ F.jsx("i", { className: "fas fa-arrow-right", "aria-hidden": "true" }) })
      }
    ) }) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
      T && /* @__PURE__ */ F.jsx("div", { className: "card-buttons", children: T.map((Y) => /* @__PURE__ */ F.jsx(
        "div",
        {
          className: "card-button",
          "data-testid": "card-button",
          children: /* @__PURE__ */ F.jsx(
            a1,
            {
              ariaLabel: Y.ariaLabel,
              color: Y.color,
              icon: Y.icon,
              href: Y.href,
              label: Y.label,
              onClick: Y.onClick,
              size: Y.size,
              target: Y.target,
              cardTitle: h
            }
          )
        },
        `${Y.label}-${Y.href}`
      )) }),
      x && A && /* @__PURE__ */ F.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ F.jsx(
        oc,
        {
          gaData: {
            ...uv,
            section: h,
            text: A
          },
          children: /* @__PURE__ */ F.jsx("a", { href: Yk(x), children: A })
        }
      ) })
    ] }),
    C && /* @__PURE__ */ F.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: C.map((Y) => (
      // @ts-ignore
      /* @__PURE__ */ F.jsx(
        U1,
        {
          ariaLabel: Y.ariaLabel,
          color: Y.color,
          href: Y.href,
          label: Y.label,
          onClick: Y.onClick,
          cardTitle: h
        },
        `${Y.label}-${Y.href}`
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
}) => i === "inline" ? /* @__PURE__ */ F.jsxs("div", { className: "card-event-details", children: [
  s && /* @__PURE__ */ F.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ F.jsx("div", { children: /* @__PURE__ */ F.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ F.jsx("div", { dangerouslySetInnerHTML: Tc(s) })
  ] }),
  o && /* @__PURE__ */ F.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ F.jsx("div", { children: /* @__PURE__ */ F.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ F.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Tc(o)
      }
    )
  ] })
] }) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
  s && /* @__PURE__ */ F.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ F.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ F.jsx("div", { children: /* @__PURE__ */ F.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ F.jsx("div", { dangerouslySetInnerHTML: Tc(s) })
  ] }) }),
  o && /* @__PURE__ */ F.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ F.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ F.jsx("div", { children: /* @__PURE__ */ F.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ F.jsx("span", { children: /* @__PURE__ */ F.jsx(
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
const Fk = bi.div`
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
`, Xk = () => /* @__PURE__ */ F.jsxs(Fk, { children: [
  /* @__PURE__ */ F.jsx("div", {}),
  /* @__PURE__ */ F.jsx("div", {}),
  /* @__PURE__ */ F.jsx("div", {}),
  /* @__PURE__ */ F.jsx("div", {})
] }), Qk = bi.section``, q0 = kS(null), V1 = ({
  defaultProps: i,
  dataSource: o,
  noFeedText: s,
  renderHeader: d,
  renderBody: c,
  dataTransformer: h,
  dataFilter: T,
  maxItems: A
}) => {
  const [{ data: x, loading: C, error: L }, M] = bw(), [D, te] = Fo([]), G = { ...i.dataSource, ...o };
  return Io(() => {
    M(G == null ? void 0 : G.url);
  }, [G == null ? void 0 : G.url]), Io(() => {
    const Y = x == null ? void 0 : x.nodes.map(h), W = Y == null ? void 0 : Y.filter(
      (J) => T(J, o == null ? void 0 : o.filters)
    );
    te(A ? W == null ? void 0 : W.slice(0, A) : W);
  }, [x]), // Init the context to be used on its childrens
  /* @__PURE__ */ F.jsx(q0.Provider, { value: { feeds: D }, children: /* @__PURE__ */ F.jsxs(Qk, { children: [
    d,
    L ? /* @__PURE__ */ F.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
      C && !(D != null && D.length) && /* @__PURE__ */ F.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ F.jsx(Xk, {}) }),
      D != null && D.length ? c : !C && /* @__PURE__ */ F.jsx("p", { className: "text-center", children: s })
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
const G0 = m.shape({
  color: m.oneOf(["white", "dark"]),
  text: m.string
}), V0 = m.shape({
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
}), Ik = m.shape({
  header: G0,
  ctaButton: V0,
  dataSource: Y1,
  maxItems: m.number
}), $k = bi.div`
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
  return /* @__PURE__ */ F.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ F.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ F.jsx(h, { className: A, children: d.text }) }),
        /* @__PURE__ */ F.jsx($k, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ F.jsx(
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
            children: /* @__PURE__ */ F.jsx("a", { className: `btn btn-${c.color}`, href: c.url, children: c.text })
          }
        ) })
      ]
    }
  );
};
F1.propTypes = {
  defaultProps: Ik,
  header: G0,
  ctaButton: V0
};
const X1 = ({ children: i }) => /* @__PURE__ */ F.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ F.jsx("div", { className: "col", children: i }) });
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
const Pk = kt.forwardRef(({
  overflowTabs: i,
  idToChild: o,
  activeTabID: s,
  selectTab: d,
  gaData: c,
  openRight: h = !1
}, T) => {
  const [A, x] = Fo(!1), C = Xm(null), L = Xm(null), M = Xm([]), D = Array.isArray(i) ? i : [], te = Vv(), G = D.includes(s ?? ""), Y = D.map((q) => {
    const V = o == null ? void 0 : o[q];
    return V ? {
      id: q,
      title: V.props.title,
      icon: V.props.icon ?? null
    } : { id: q, title: q, icon: null };
  }), W = p0((q = !0) => {
    var V;
    x(!1), q && ((V = L.current) == null || V.focus());
  }, []), J = (q) => {
    q.preventDefault(), x((V) => !V);
  };
  Io(() => {
    function q(V) {
      var K;
      (K = C.current) != null && K.contains(V.target) || x(!1);
    }
    return document.addEventListener("mousedown", q), () => document.removeEventListener("mousedown", q);
  }, []);
  const H = p0(
    (q, V) => {
      var K, ke;
      switch (q.key) {
        case "ArrowDown": {
          q.preventDefault();
          const Be = M.current[V + 1] ?? M.current[0];
          Be == null || Be.focus();
          break;
        }
        case "ArrowUp": {
          q.preventDefault();
          const Be = M.current[V - 1] ?? M.current[Y.length - 1];
          Be == null || Be.focus();
          break;
        }
        case "Home":
          q.preventDefault(), (K = M.current[0]) == null || K.focus();
          break;
        case "End":
          q.preventDefault(), (ke = M.current[Y.length - 1]) == null || ke.focus();
          break;
        case "Escape":
          q.preventDefault(), W();
          break;
        case "Tab":
          x(!1);
          break;
      }
    },
    [Y.length, W]
  ), be = (q, V, K) => {
    q.preventDefault(), W(!1), d == null || d(q, V, K);
  }, ee = Y.length === 0, ne = (q) => {
    C.current = q, typeof T == "function" ? T(q) : T && (T.current = q);
  };
  return /* @__PURE__ */ F.jsxs(
    "div",
    {
      ref: ne,
      className: `uds-more-dropdown${h ? " dropdown-open-right" : ""}${ee ? " uds-more-dropdown-hidden" : ""}`,
      "aria-hidden": ee || void 0,
      children: [
        /* @__PURE__ */ F.jsx(oc, { gaData: c ?? {}, children: /* @__PURE__ */ F.jsxs(
          "button",
          {
            ref: L,
            type: "button",
            onClick: J,
            onKeyDown: (q) => {
              var V, K;
              q.key === "Enter" || q.key === " " ? (q.preventDefault(), A ? W() : (x(!0), requestAnimationFrame(() => {
                var ke;
                return (ke = M.current[0]) == null ? void 0 : ke.focus();
              }))) : A && q.key === "ArrowDown" ? (q.preventDefault(), (V = M.current[0]) == null || V.focus()) : A && q.key === "ArrowUp" ? (q.preventDefault(), (K = M.current[Y.length - 1]) == null || K.focus()) : A && q.key === "Escape" && (q.preventDefault(), W());
            },
            "aria-haspopup": "true",
            "aria-expanded": A,
            "aria-controls": te,
            "aria-label": `More, ${Y.length} additional tab${Y.length !== 1 ? "s" : ""}`,
            className: `uds-tab more-dropdown-button${G ? " active" : ""}`,
            children: [
              /* @__PURE__ */ F.jsxs("span", { className: "more-dropdown-button-inner", children: [
                /* @__PURE__ */ F.jsx("span", { "aria-hidden": "true", children: "More" }),
                /* @__PURE__ */ F.jsx(
                  "i",
                  {
                    "aria-hidden": "true",
                    className: "fas fa-chevron-down more-dropdown-icon"
                  }
                )
              ] }),
              /* @__PURE__ */ F.jsx("span", { className: "more-dropdown-button-indicator", "aria-hidden": "true" })
            ]
          }
        ) }),
        /* @__PURE__ */ F.jsx(
          "ul",
          {
            id: te,
            role: "menu",
            "aria-label": "More tabs",
            "aria-hidden": !A,
            className: `more-dropdown-menu uds-more-dropdown-list${A ? " open" : ""}`,
            children: Y.map((q, V) => {
              const K = q.id === s;
              return /* @__PURE__ */ F.jsx("li", { role: "none", children: /* @__PURE__ */ F.jsxs(
                "button",
                {
                  ref: (ke) => {
                    ke && (M.current[V] = ke);
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: -1,
                  onClick: (ke) => be(ke, q.id, q.title),
                  onKeyDown: (ke) => H(ke, V),
                  className: "more-dropdown-item",
                  "aria-current": K || void 0,
                  children: [
                    q.icon && /* @__PURE__ */ F.jsx(
                      "i",
                      {
                        "aria-hidden": "true",
                        className: `${q.icon[0]} fa-${q.icon[1]} me-1`
                      }
                    ),
                    q.title
                  ]
                }
              ) }, q.id);
            })
          }
        )
      ]
    }
  );
});
Pk.displayName = "MoreDropdown";
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
var Kk = !1;
try {
  var sv = Object.defineProperty({}, "passive", {
    get: function() {
      Kk = !0;
    }
  });
  window.addEventListener("testPassive", null, sv), window.removeEventListener("testPassive", null, sv);
} catch {
}
m.number, m.string, m.string, m.arrayOf(m.object).isRequired, m.string, m.func, m.string, m.string, m.func, m.bool, m.bool, m.bool, m.bool, m.bool, m.bool, m.bool, m.bool;
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
).isRequired, Yo.propTypes.type, Yo.propTypes.eventFormat, Yo.propTypes.horizontal, m.string, m.string, m.bool;
m.number.isRequired, m.arrayOf(m.object).isRequired, m.string, m.string, m.bool;
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
var n0 = { exports: {} }, ym = {}, cv = { exports: {} }, fv = {}, dv;
function Zk() {
  return dv || (dv = 1, (function(i) {
    function o(U, R) {
      var B = U.length;
      U.push(R);
      e: for (; 0 < B; ) {
        var re = B - 1 >>> 1, se = U[re];
        if (0 < c(se, R))
          U[re] = R, U[B] = se, B = re;
        else break e;
      }
    }
    function s(U) {
      return U.length === 0 ? null : U[0];
    }
    function d(U) {
      if (U.length === 0) return null;
      var R = U[0], B = U.pop();
      if (B !== R) {
        U[0] = B;
        e: for (var re = 0, se = U.length, ie = se >>> 1; re < ie; ) {
          var we = 2 * (re + 1) - 1, ue = U[we], $ = we + 1, ge = U[$];
          if (0 > c(ue, B))
            $ < se && 0 > c(ge, ue) ? (U[re] = ge, U[$] = B, re = $) : (U[re] = ue, U[we] = B, re = we);
          else if ($ < se && 0 > c(ge, B))
            U[re] = ge, U[$] = B, re = $;
          else break e;
        }
      }
      return R;
    }
    function c(U, R) {
      var B = U.sortIndex - R.sortIndex;
      return B !== 0 ? B : U.id - R.id;
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
    var x = [], C = [], L = 1, M = null, D = 3, te = !1, G = !1, Y = !1, W = !1, J = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
    function ee(U) {
      for (var R = s(C); R !== null; ) {
        if (R.callback === null) d(C);
        else if (R.startTime <= U)
          d(C), R.sortIndex = R.expirationTime, o(x, R);
        else break;
        R = s(C);
      }
    }
    function ne(U) {
      if (Y = !1, ee(U), !G)
        if (s(x) !== null)
          G = !0, q || (q = !0, He());
        else {
          var R = s(C);
          R !== null && Ie(ne, R.startTime - U);
        }
    }
    var q = !1, V = -1, K = 5, ke = -1;
    function Be() {
      return W ? !0 : !(i.unstable_now() - ke < K);
    }
    function qe() {
      if (W = !1, q) {
        var U = i.unstable_now();
        ke = U;
        var R = !0;
        try {
          e: {
            G = !1, Y && (Y = !1, H(V), V = -1), te = !0;
            var B = D;
            try {
              t: {
                for (ee(U), M = s(x); M !== null && !(M.expirationTime > U && Be()); ) {
                  var re = M.callback;
                  if (typeof re == "function") {
                    M.callback = null, D = M.priorityLevel;
                    var se = re(
                      M.expirationTime <= U
                    );
                    if (U = i.unstable_now(), typeof se == "function") {
                      M.callback = se, ee(U), R = !0;
                      break t;
                    }
                    M === s(x) && d(x), ee(U);
                  } else d(x);
                  M = s(x);
                }
                if (M !== null) R = !0;
                else {
                  var ie = s(C);
                  ie !== null && Ie(
                    ne,
                    ie.startTime - U
                  ), R = !1;
                }
              }
              break e;
            } finally {
              M = null, D = B, te = !1;
            }
            R = void 0;
          }
        } finally {
          R ? He() : q = !1;
        }
      }
    }
    var He;
    if (typeof be == "function")
      He = function() {
        be(qe);
      };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), gt = _e.port2;
      _e.port1.onmessage = qe, He = function() {
        gt.postMessage(null);
      };
    } else
      He = function() {
        J(qe, 0);
      };
    function Ie(U, R) {
      V = J(function() {
        U(i.unstable_now());
      }, R);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, i.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : K = 0 < U ? Math.floor(1e3 / U) : 5;
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
      var B = D;
      D = R;
      try {
        return U();
      } finally {
        D = B;
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
      var B = D;
      D = U;
      try {
        return R();
      } finally {
        D = B;
      }
    }, i.unstable_scheduleCallback = function(U, R, B) {
      var re = i.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? re + B : re) : B = re, U) {
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
      return se = B + se, U = {
        id: L++,
        callback: R,
        priorityLevel: U,
        startTime: B,
        expirationTime: se,
        sortIndex: -1
      }, B > re ? (U.sortIndex = B, o(C, U), s(x) === null && U === s(C) && (Y ? (H(V), V = -1) : Y = !0, Ie(ne, B - re))) : (U.sortIndex = se, o(x, U), G || te || (G = !0, q || (q = !0, He()))), U;
    }, i.unstable_shouldYield = Be, i.unstable_wrapCallback = function(U) {
      var R = D;
      return function() {
        var B = D;
        D = R;
        try {
          return U.apply(this, arguments);
        } finally {
          D = B;
        }
      };
    };
  })(fv)), fv;
}
var pv;
function Wk() {
  return pv || (pv = 1, cv.exports = Zk()), cv.exports;
}
var mv;
function Jk() {
  if (mv) return ym;
  mv = 1;
  var i = { env: { NODE_ENV: "production" } }, o = Wk(), s = kt, d = Iv;
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
  function C(e) {
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
          if (r === n) return C(a), e;
          if (r === l) return C(a), t;
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
  var D = Object.assign, te = Symbol.for("react.element"), G = Symbol.for("react.transitional.element"), Y = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), be = Symbol.for("react.consumer"), ee = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), Be = Symbol.for("react.activity"), qe = Symbol.for("react.memo_cache_sentinel"), He = Symbol.iterator;
  function _e(e) {
    return e === null || typeof e != "object" ? null : (e = He && e[He] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var gt = Symbol.for("react.client.reference");
  function Ie(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === gt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case H:
        return "Profiler";
      case J:
        return "StrictMode";
      case q:
        return "Suspense";
      case V:
        return "SuspenseList";
      case Be:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Y:
          return "Portal";
        case ee:
          return e.displayName || "Context";
        case be:
          return (e._context.displayName || "Context") + ".Consumer";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case K:
          return t = e.displayName || null, t !== null ? t : Ie(e.type) || "Memo";
        case ke:
          t = e._payload, e = e._init;
          try {
            return Ie(e(t));
          } catch {
          }
      }
    return null;
  }
  var U = Array.isArray, R = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = {
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
  function $(e, t) {
    ie++, se[ie] = e.current, e.current = t;
  }
  var ge = we(null), yt = we(null), tt = we(null), fn = we(null);
  function dn(e, t) {
    switch ($(tt, t), $(yt, e), $(ge, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? zp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = zp(t), e = Dp(t, e);
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
    ue(ge), $(ge, e);
  }
  function nt() {
    ue(ge), ue(yt), ue(tt);
  }
  function De(e) {
    e.memoizedState !== null && $(fn, e);
    var t = ge.current, n = Dp(t, e.type);
    t !== n && ($(yt, e), $(ge, n));
  }
  function Xl(e) {
    yt.current === e && (ue(ge), ue(yt)), fn.current === e && (ue(fn), ii._currentValue = re);
  }
  var Re, cr;
  function Ee(e) {
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
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (k) {
                  var E = k;
                }
                Reflect.construct(e, [], z);
              } else {
                try {
                  z.call();
                } catch (k) {
                  E = k;
                }
                e.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (k) {
                E = k;
              }
              (z = e()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (k) {
            if (k && E && typeof k.stack == "string")
              return [k.stack, E.stack];
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
                  var N = `
` + p[l].replace(" at new ", " at ");
                  return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      Dn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Ee(n) : "";
  }
  function yn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ee(e.type);
      case 16:
        return Ee("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ee("Suspense Fallback") : Ee("Suspense");
      case 19:
        return Ee("SuspenseList");
      case 0:
      case 15:
        return va(e.type, !1);
      case 11:
        return va(e.type.render, !1);
      case 1:
        return va(e.type, !0);
      case 31:
        return Ee("Activity");
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
  var Ql = Object.prototype.hasOwnProperty, Sa = o.unstable_scheduleCallback, wa = o.unstable_cancelCallback, bn = o.unstable_shouldYield, Il = o.unstable_requestPaint, Ye = o.unstable_now, dr = o.unstable_getCurrentPriorityLevel, Ta = o.unstable_ImmediatePriority, Ea = o.unstable_UserBlockingPriority, al = o.unstable_NormalPriority, rl = o.unstable_LowPriority, $l = o.unstable_IdlePriority, ka = o.log, vi = o.unstable_setDisableYieldValue, il = null, pt = null;
  function It(e) {
    if (typeof ka == "function" && vi(e), pt && typeof pt.setStrictMode == "function")
      try {
        pt.setStrictMode(il, e);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : pr, ol = Math.log, $t = Math.LN2;
  function pr(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ol(e) / $t | 0) | 0;
  }
  var Pl = 256, Kl = 262144, ul = 4194304;
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
  function Pt(e, t) {
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
  function $o(e, t, n, l, a, r) {
    var u = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, p = e.expirationTimes, w = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var N = 31 - rt(n), z = 1 << N;
      f[N] = 0, p[N] = -1;
      var E = w[N];
      if (E !== null)
        for (w[N] = null, N = 0; N < E.length; N++) {
          var k = E[N];
          k !== null && (k.lane &= -536870913);
        }
      n &= ~z;
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
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : tm(e.type));
  }
  function Si(e, t) {
    var n = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = n;
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
          for (e = Hp(e); e !== null; ) {
            if (n = e[oe]) return n;
            e = Hp(e);
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
  var Ti = /* @__PURE__ */ new Set(), Ei = {};
  function Tn(e, t) {
    jn(e, t), jn(e + "Capture", t);
  }
  function jn(e, t) {
    for (Ei[e] = t, e = 0; e < t.length; e++)
      Ti.add(t[e]);
  }
  var _a = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Na = {}, ea = {};
  function pl(e) {
    return Ql.call(ea, e) ? !0 : Ql.call(Na, e) ? !1 : _a.test(e) ? ea[e] = !0 : (Na[e] = !0, !1);
  }
  function En(e, t, n) {
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
  function ki(e, t, n) {
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
      e._valueTracker = ki(
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
  function Oa(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Po = /[\n"\\]/g;
  function Tt(e) {
    return e.replace(
      Po,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ml(e, t, n, l, a, r, u, f) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? b(e, u, At(t)) : n != null ? b(e, u, At(n)) : l != null && e.removeAttribute("value"), a == null && r != null && (e.defaultChecked = !!r), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + At(f) : e.removeAttribute("name");
  }
  function Ca(e, t, n, l, a, r, u, f) {
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
    t === "number" && Oa(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
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
  function I(e, t) {
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
  var Ko = null;
  function Zo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var za = null, Da = null;
  function Oc(e) {
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
  function Cc(e, t, n) {
    if (Wo) return e(t, n);
    Wo = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Wo = !1, (za !== null || Da !== null) && (fo(), za && (t = za, e = Da, Da = za = null, Oc(t), e)))
        for (t = 0; t < e.length; t++) Oc(e[t]);
    }
  }
  function Er(e, t) {
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
  var Bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jo = !1;
  if (Bn)
    try {
      var kr = {};
      Object.defineProperty(kr, "passive", {
        get: function() {
          Jo = !0;
        }
      }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
    } catch {
      Jo = !1;
    }
  var hl = null, eu = null, xi = null;
  function zc() {
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
  function Nt(e) {
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
  }, Ni = Nt(ta), xr = D({}, ta, { view: 0, detail: 0 }), xh = Nt(xr), tu, nu, Ar, Oi = D({}, xr, {
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
  }), Rc = Nt(Oi), Ah = D({}, Oi, { dataTransfer: 0 }), _h = Nt(Ah), Nh = D({}, xr, { relatedTarget: 0 }), lu = Nt(Nh), Oh = D({}, ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ch = Nt(Oh), zh = D({}, ta, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Dh = Nt(zh), Rh = D({}, ta, { data: 0 }), Mc = Nt(Rh), Mh = {
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
  var Bh = D({}, xr, {
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
  }), Hh = Nt(Bh), qh = D({}, Oi, {
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
  }), Lc = Nt(qh), Gh = D({}, xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: au
  }), Vh = Nt(Gh), Yh = D({}, ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fh = Nt(Yh), Xh = D({}, Oi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qh = Nt(Xh), Ih = D({}, ta, {
    newState: 0,
    oldState: 0
  }), $h = Nt(Ih), Ph = [9, 13, 27, 32], ru = Bn && "CompositionEvent" in window, _r = null;
  Bn && "documentMode" in document && (_r = document.documentMode);
  var Kh = Bn && "TextEvent" in window && !_r, Uc = Bn && (!ru || _r && 8 < _r && 11 >= _r), jc = " ", Bc = !1;
  function Hc(e, t) {
    switch (e) {
      case "keyup":
        return Ph.indexOf(t.keyCode) !== -1;
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
        return t.which !== 32 ? null : (Bc = !0, jc);
      case "textInput":
        return e = t.data, e === jc && Bc ? null : e;
      default:
        return null;
    }
  }
  function Wh(e, t) {
    if (Ra)
      return e === "compositionend" || !ru && Hc(e, t) ? (e = zc(), xi = eu = hl = null, Ra = !1, e) : null;
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
    za ? Da ? Da.push(l) : Da = [l] : za = l, t = vo(t, "onChange"), 0 < t.length && (n = new Ni(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var Nr = null, Or = null;
  function eg(e) {
    xp(e, 0);
  }
  function Ci(e) {
    var t = Mt(e);
    if (Tr(t)) return e;
  }
  function Yc(e, t) {
    if (e === "change") return t;
  }
  var Fc = !1;
  if (Bn) {
    var iu;
    if (Bn) {
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
    Nr && (Nr.detachEvent("onpropertychange", Ic), Or = Nr = null);
  }
  function Ic(e) {
    if (e.propertyName === "value" && Ci(Or)) {
      var t = [];
      Vc(
        t,
        Or,
        e,
        Zo(e)
      ), Cc(eg, t);
    }
  }
  function tg(e, t, n) {
    e === "focusin" ? (Qc(), Nr = t, Or = n, Nr.attachEvent("onpropertychange", Ic)) : e === "focusout" && Qc();
  }
  function ng(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ci(Or);
  }
  function lg(e, t) {
    if (e === "click") return Ci(t);
  }
  function ag(e, t) {
    if (e === "input" || e === "change")
      return Ci(t);
  }
  function rg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Bt = typeof Object.is == "function" ? Object.is : rg;
  function Cr(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!Ql.call(t, a) || !Bt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function $c(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Pc(e, t) {
    var n = $c(e);
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
      n = $c(n);
    }
  }
  function Kc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zc(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Oa(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Oa(e.document);
    }
    return t;
  }
  function uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var ig = Bn && "documentMode" in document && 11 >= document.documentMode, Ma = null, su = null, zr = null, cu = !1;
  function Wc(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    cu || Ma == null || Ma !== Oa(l) || (l = Ma, "selectionStart" in l && uu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), zr && Cr(zr, l) || (zr = l, l = vo(su, "onSelect"), 0 < l.length && (t = new Ni(
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
  Bn && (Jc = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);
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
  var zi = typeof reportError == "function" ? reportError : function(e) {
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
  }, Kt = [], Ua = 0, pu = 0;
  function Di() {
    for (var e = Ua, t = pu = Ua = 0; t < e; ) {
      var n = Kt[t];
      Kt[t++] = null;
      var l = Kt[t];
      Kt[t++] = null;
      var a = Kt[t];
      Kt[t++] = null;
      var r = Kt[t];
      if (Kt[t++] = null, l !== null && a !== null) {
        var u = l.pending;
        u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a;
      }
      r !== 0 && rf(n, a, r);
    }
  }
  function Ri(e, t, n, l) {
    Kt[Ua++] = e, Kt[Ua++] = t, Kt[Ua++] = n, Kt[Ua++] = l, pu |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
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
      throw Jr = 0, Es = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ja = {};
  function cg(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, n, l) {
    return new cg(e, t, n, l);
  }
  function hu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Hn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ht(
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
        case Be:
          return e = Ht(31, n, t, a), e.elementType = Be, e.lanes = r, e;
        case W:
          return ra(n.children, a, r, t);
        case J:
          u = 8, a |= 24;
          break;
        case H:
          return e = Ht(12, n, t, a | 2), e.elementType = H, e.lanes = r, e;
        case q:
          return e = Ht(13, n, t, a), e.elementType = q, e.lanes = r, e;
        case V:
          return e = Ht(19, n, t, a), e.elementType = V, e.lanes = r, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ee:
                u = 10;
                break e;
              case be:
                u = 9;
                break e;
              case ne:
                u = 11;
                break e;
              case K:
                u = 14;
                break e;
              case ke:
                u = 16, l = null;
                break e;
            }
          u = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ht(u, n, t, a), t.elementType = e, t.type = l, t.lanes = r, t;
  }
  function ra(e, t, n, l) {
    return e = Ht(7, e, l, t), e.lanes = n, e;
  }
  function gu(e, t, n) {
    return e = Ht(6, e, null, t), e.lanes = n, e;
  }
  function uf(e) {
    var t = Ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function yu(e, t, n) {
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
  var Ba = [], Ha = 0, Ui = null, Dr = 0, Wt = [], Jt = 0, gl = null, kn = 1, xn = "";
  function qn(e, t) {
    Ba[Ha++] = Dr, Ba[Ha++] = Ui, Ui = e, Dr = t;
  }
  function cf(e, t, n) {
    Wt[Jt++] = kn, Wt[Jt++] = xn, Wt[Jt++] = gl, gl = e;
    var l = kn;
    e = xn;
    var a = 32 - rt(l) - 1;
    l &= ~(1 << a), n += 1;
    var r = 32 - rt(t) + a;
    if (30 < r) {
      var u = a - a % 5;
      r = (l & (1 << u) - 1).toString(32), l >>= u, a -= u, kn = 1 << 32 - rt(t) + a | n << a | l, xn = r + e;
    } else
      kn = 1 << r | n << a | l, xn = e;
  }
  function bu(e) {
    e.return !== null && (qn(e, 1), cf(e, 1, 0));
  }
  function vu(e) {
    for (; e === Ui; )
      Ui = Ba[--Ha], Ba[Ha] = null, Dr = Ba[--Ha], Ba[Ha] = null;
    for (; e === gl; )
      gl = Wt[--Jt], Wt[Jt] = null, xn = Wt[--Jt], Wt[Jt] = null, kn = Wt[--Jt], Wt[Jt] = null;
  }
  function ff(e, t) {
    Wt[Jt++] = kn, Wt[Jt++] = xn, Wt[Jt++] = gl, kn = t.id, xn = t.overflow, gl = e;
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
        fe("invalid", t), Ca(
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
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Op(t.textContent, n) ? (l.popover != null && (fe("beforetoggle", t), fe("toggle", t)), l.onScroll != null && fe("scroll", t), l.onScrollEnd != null && fe("scrollend", t), l.onClick != null && (t.onclick = it), t = !0) : t = !1, t || bl(e, !0);
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
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Bs(e.type, e.memoizedProps)), n = !n), n && Le && bl(e), pf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = Bp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = Bp(e);
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
    $(Tu, t._currentValue), t._currentValue = n;
  }
  function Vn(e) {
    e._currentValue = Tu.current, ue(Tu);
  }
  function Eu(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ku(e, t, n, l) {
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
              r.lanes |= n, f = r.alternate, f !== null && (f.lanes |= n), Eu(
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
        u.lanes |= n, r = u.alternate, r !== null && (r.lanes |= n), Eu(u, n, e), u = null;
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
          Bt(a.pendingProps.value, u.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (a === fn.current) {
        if (u = a.alternate, u === null) throw Error(c(387));
        u.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(ii) : e = [ii]);
      }
      a = a.return;
    }
    e !== null && ku(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function ji(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Bt(
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
  function Bi(e, t) {
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
  }, dg = o.unstable_scheduleCallback, pg = o.unstable_NormalPriority, $e = {
    $$typeof: ee,
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
      Au = 0, Va = Os(), Ya = {
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
    return e !== null ? e : ze.pooledCache;
  }
  function Hi(e, t) {
    t === null ? $(sa, sa.current) : $(sa, t.pool);
  }
  function yf() {
    var e = _u();
    return e === null ? null : { parent: $e._currentValue, pool: e };
  }
  var Fa = Error(c(460)), Nu = Error(c(474)), qi = Error(c(542)), Gi = { then: function() {
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
          if (e = ze, e !== null && 100 < e.shellSuspendCounter)
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
      return v = Hn(v, y), v.index = 0, v.sibling = null, v;
    }
    function r(v, y, S) {
      return v.index = S, e ? (S = v.alternate, S !== null ? (S = S.index, S < y ? (v.flags |= 67108866, y) : S) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
    }
    function u(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function f(v, y, S, O) {
      return y === null || y.tag !== 6 ? (y = gu(S, v.mode, O), y.return = v, y) : (y = a(y, S), y.return = v, y);
    }
    function p(v, y, S, O) {
      var P = S.type;
      return P === W ? N(
        v,
        y,
        S.props.children,
        O,
        S.key
      ) : y !== null && (y.elementType === P || typeof P == "object" && P !== null && P.$$typeof === ke && ca(P) === y.type) ? (y = a(y, S.props), jr(y, S), y.return = v, y) : (y = Li(
        S.type,
        S.key,
        S.props,
        null,
        v.mode,
        O
      ), jr(y, S), y.return = v, y);
    }
    function w(v, y, S, O) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== S.containerInfo || y.stateNode.implementation !== S.implementation ? (y = yu(S, v.mode, O), y.return = v, y) : (y = a(y, S.children || []), y.return = v, y);
    }
    function N(v, y, S, O, P) {
      return y === null || y.tag !== 7 ? (y = ra(
        S,
        v.mode,
        O,
        P
      ), y.return = v, y) : (y = a(y, S), y.return = v, y);
    }
    function z(v, y, S) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = gu(
          "" + y,
          v.mode,
          S
        ), y.return = v, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case G:
            return S = Li(
              y.type,
              y.key,
              y.props,
              null,
              v.mode,
              S
            ), jr(S, y), S.return = v, S;
          case Y:
            return y = yu(
              y,
              v.mode,
              S
            ), y.return = v, y;
          case ke:
            return y = ca(y), z(v, y, S);
        }
        if (U(y) || _e(y))
          return y = ra(
            y,
            v.mode,
            S,
            null
          ), y.return = v, y;
        if (typeof y.then == "function")
          return z(v, Vi(y), S);
        if (y.$$typeof === ee)
          return z(
            v,
            Bi(v, y),
            S
          );
        Yi(v, y);
      }
      return null;
    }
    function E(v, y, S, O) {
      var P = y !== null ? y.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return P !== null ? null : f(v, y, "" + S, O);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case G:
            return S.key === P ? p(v, y, S, O) : null;
          case Y:
            return S.key === P ? w(v, y, S, O) : null;
          case ke:
            return S = ca(S), E(v, y, S, O);
        }
        if (U(S) || _e(S))
          return P !== null ? null : N(v, y, S, O, null);
        if (typeof S.then == "function")
          return E(
            v,
            y,
            Vi(S),
            O
          );
        if (S.$$typeof === ee)
          return E(
            v,
            y,
            Bi(v, S),
            O
          );
        Yi(v, S);
      }
      return null;
    }
    function k(v, y, S, O, P) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return v = v.get(S) || null, f(y, v, "" + O, P);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case G:
            return v = v.get(
              O.key === null ? S : O.key
            ) || null, p(y, v, O, P);
          case Y:
            return v = v.get(
              O.key === null ? S : O.key
            ) || null, w(y, v, O, P);
          case ke:
            return O = ca(O), k(
              v,
              y,
              S,
              O,
              P
            );
        }
        if (U(O) || _e(O))
          return v = v.get(S) || null, N(y, v, O, P, null);
        if (typeof O.then == "function")
          return k(
            v,
            y,
            S,
            Vi(O),
            P
          );
        if (O.$$typeof === ee)
          return k(
            v,
            y,
            S,
            Bi(y, O),
            P
          );
        Yi(y, O);
      }
      return null;
    }
    function X(v, y, S, O) {
      for (var P = null, ve = null, Q = y, ae = y = 0, pe = null; Q !== null && ae < S.length; ae++) {
        Q.index > ae ? (pe = Q, Q = null) : pe = Q.sibling;
        var Se = E(
          v,
          Q,
          S[ae],
          O
        );
        if (Se === null) {
          Q === null && (Q = pe);
          break;
        }
        e && Q && Se.alternate === null && t(v, Q), y = r(Se, y, ae), ve === null ? P = Se : ve.sibling = Se, ve = Se, Q = pe;
      }
      if (ae === S.length)
        return n(v, Q), he && qn(v, ae), P;
      if (Q === null) {
        for (; ae < S.length; ae++)
          Q = z(v, S[ae], O), Q !== null && (y = r(
            Q,
            y,
            ae
          ), ve === null ? P = Q : ve.sibling = Q, ve = Q);
        return he && qn(v, ae), P;
      }
      for (Q = l(Q); ae < S.length; ae++)
        pe = k(
          Q,
          v,
          ae,
          S[ae],
          O
        ), pe !== null && (e && pe.alternate !== null && Q.delete(
          pe.key === null ? ae : pe.key
        ), y = r(
          pe,
          y,
          ae
        ), ve === null ? P = pe : ve.sibling = pe, ve = pe);
      return e && Q.forEach(function(jl) {
        return t(v, jl);
      }), he && qn(v, ae), P;
    }
    function Z(v, y, S, O) {
      if (S == null) throw Error(c(151));
      for (var P = null, ve = null, Q = y, ae = y = 0, pe = null, Se = S.next(); Q !== null && !Se.done; ae++, Se = S.next()) {
        Q.index > ae ? (pe = Q, Q = null) : pe = Q.sibling;
        var jl = E(v, Q, Se.value, O);
        if (jl === null) {
          Q === null && (Q = pe);
          break;
        }
        e && Q && jl.alternate === null && t(v, Q), y = r(jl, y, ae), ve === null ? P = jl : ve.sibling = jl, ve = jl, Q = pe;
      }
      if (Se.done)
        return n(v, Q), he && qn(v, ae), P;
      if (Q === null) {
        for (; !Se.done; ae++, Se = S.next())
          Se = z(v, Se.value, O), Se !== null && (y = r(Se, y, ae), ve === null ? P = Se : ve.sibling = Se, ve = Se);
        return he && qn(v, ae), P;
      }
      for (Q = l(Q); !Se.done; ae++, Se = S.next())
        Se = k(Q, v, ae, Se.value, O), Se !== null && (e && Se.alternate !== null && Q.delete(Se.key === null ? ae : Se.key), y = r(Se, y, ae), ve === null ? P = Se : ve.sibling = Se, ve = Se);
      return e && Q.forEach(function(Ay) {
        return t(v, Ay);
      }), he && qn(v, ae), P;
    }
    function Ce(v, y, S, O) {
      if (typeof S == "object" && S !== null && S.type === W && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case G:
            e: {
              for (var P = S.key; y !== null; ) {
                if (y.key === P) {
                  if (P = S.type, P === W) {
                    if (y.tag === 7) {
                      n(
                        v,
                        y.sibling
                      ), O = a(
                        y,
                        S.props.children
                      ), O.return = v, v = O;
                      break e;
                    }
                  } else if (y.elementType === P || typeof P == "object" && P !== null && P.$$typeof === ke && ca(P) === y.type) {
                    n(
                      v,
                      y.sibling
                    ), O = a(y, S.props), jr(O, S), O.return = v, v = O;
                    break e;
                  }
                  n(v, y);
                  break;
                } else t(v, y);
                y = y.sibling;
              }
              S.type === W ? (O = ra(
                S.props.children,
                v.mode,
                O,
                S.key
              ), O.return = v, v = O) : (O = Li(
                S.type,
                S.key,
                S.props,
                null,
                v.mode,
                O
              ), jr(O, S), O.return = v, v = O);
            }
            return u(v);
          case Y:
            e: {
              for (P = S.key; y !== null; ) {
                if (y.key === P)
                  if (y.tag === 4 && y.stateNode.containerInfo === S.containerInfo && y.stateNode.implementation === S.implementation) {
                    n(
                      v,
                      y.sibling
                    ), O = a(y, S.children || []), O.return = v, v = O;
                    break e;
                  } else {
                    n(v, y);
                    break;
                  }
                else t(v, y);
                y = y.sibling;
              }
              O = yu(S, v.mode, O), O.return = v, v = O;
            }
            return u(v);
          case ke:
            return S = ca(S), Ce(
              v,
              y,
              S,
              O
            );
        }
        if (U(S))
          return X(
            v,
            y,
            S,
            O
          );
        if (_e(S)) {
          if (P = _e(S), typeof P != "function") throw Error(c(150));
          return S = P.call(S), Z(
            v,
            y,
            S,
            O
          );
        }
        if (typeof S.then == "function")
          return Ce(
            v,
            y,
            Vi(S),
            O
          );
        if (S.$$typeof === ee)
          return Ce(
            v,
            y,
            Bi(v, S),
            O
          );
        Yi(v, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, y !== null && y.tag === 6 ? (n(v, y.sibling), O = a(y, S), O.return = v, v = O) : (n(v, y), O = gu(S, v.mode, O), O.return = v, v = O), u(v)) : n(v, y);
    }
    return function(v, y, S, O) {
      try {
        Ur = 0;
        var P = Ce(
          v,
          y,
          S,
          O
        );
        return Xa = null, P;
      } catch (Q) {
        if (Q === Fa || Q === qi) throw Q;
        var ve = Ht(29, Q, null, v.mode);
        return ve.lanes = O, ve.return = v, ve;
      } finally {
      }
    };
  }
  var da = Tf(!0), Ef = Tf(!1), Sl = !1;
  function Ou(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Cu(e, t) {
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
  function Br(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, xa(e, n);
    }
  }
  function zu(e, t) {
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
  function Hr() {
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
      var N = e.alternate;
      N !== null && (N = N.updateQueue, f = N.lastBaseUpdate, f !== u && (f === null ? N.firstBaseUpdate = w : f.next = w, N.lastBaseUpdate = p));
    }
    if (r !== null) {
      var z = a.baseState;
      u = 0, N = w = p = null, f = r;
      do {
        var E = f.lane & -536870913, k = E !== f.lane;
        if (k ? (de & E) === E : (l & E) === E) {
          E !== 0 && E === Va && (Du = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e, Z = f;
            E = t;
            var Ce = n;
            switch (Z.tag) {
              case 1:
                if (X = Z.payload, typeof X == "function") {
                  z = X.call(Ce, z, E);
                  break e;
                }
                z = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = Z.payload, E = typeof X == "function" ? X.call(Ce, z, E) : X, E == null) break e;
                z = D({}, z, E);
                break e;
              case 2:
                Sl = !0;
            }
          }
          E = f.callback, E !== null && (e.flags |= 64, k && (e.flags |= 8192), k = a.callbacks, k === null ? a.callbacks = [E] : k.push(E));
        } else
          k = {
            lane: E,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, N === null ? (w = N = k, p = z) : N = N.next = k, u |= E;
        if (f = f.next, f === null) {
          if (f = a.shared.pending, f === null)
            break;
          k = f, f = k.next, k.next = null, a.lastBaseUpdate = k, a.shared.pending = null;
        }
      } while (!0);
      N === null && (p = z), a.baseState = p, a.firstBaseUpdate = w, a.lastBaseUpdate = N, r === null && (a.shared.lanes = 0), _l |= u, e.lanes = u, e.memoizedState = z;
    }
  }
  function kf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function xf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        kf(n[e], t);
  }
  var Qa = we(null), Fi = we(0);
  function Af(e, t) {
    e = Zn, $(Fi, e), $(Qa, t), Zn = e | t.baseLanes;
  }
  function Ru() {
    $(Fi, Zn), $(Qa, Qa.current);
  }
  function Mu() {
    Zn = Fi.current, ue(Qa), ue(Fi);
  }
  var qt = we(null), sn = null;
  function El(e) {
    var t = e.alternate;
    $(Xe, Xe.current & 1), $(qt, e), sn === null && (t === null || Qa.current !== null || t.memoizedState !== null) && (sn = e);
  }
  function Lu(e) {
    $(Xe, Xe.current), $(qt, e), sn === null && (sn = e);
  }
  function _f(e) {
    e.tag === 22 ? ($(Xe, Xe.current), $(qt, e), sn === null && (sn = e)) : kl();
  }
  function kl() {
    $(Xe, Xe.current), $(qt, qt.current);
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
  var Yn = 0, le = null, Ne = null, Pe = null, Qi = !1, Ia = !1, pa = !1, Ii = 0, Gr = 0, $a = null, gg = 0;
  function Ge() {
    throw Error(c(321));
  }
  function Uu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function ju(e, t, n, l, a, r) {
    return Yn = r, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? cd : Wu, pa = !1, r = n(l, a), pa = !1, Ia && (r = Of(
      t,
      n,
      l,
      a
    )), Nf(e), r;
  }
  function Nf(e) {
    R.H = Fr;
    var t = Ne !== null && Ne.next !== null;
    if (Yn = 0, Pe = Ne = le = null, Qi = !1, Gr = 0, $a = null, t) throw Error(c(300));
    e === null || Ke || (e = e.dependencies, e !== null && ji(e) && (Ke = !0));
  }
  function Of(e, t, n, l) {
    le = e;
    var a = 0;
    do {
      if (Ia && ($a = null), Gr = 0, Ia = !1, 25 <= a) throw Error(c(301));
      if (a += 1, Pe = Ne = null, e.updateQueue != null) {
        var r = e.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      R.H = fd, r = t(n, l);
    } while (Ia);
    return r;
  }
  function yg() {
    var e = R.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Vr(t) : t, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (le.flags |= 1024), t;
  }
  function Bu() {
    var e = Ii !== 0;
    return Ii = 0, e;
  }
  function Hu(e, t, n) {
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
    Yn = 0, Pe = Ne = le = null, Ia = !1, Gr = Ii = 0, $a = null;
  }
  function vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Pe === null ? le.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
  }
  function Qe() {
    if (Ne === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = Pe === null ? le.memoizedState : Pe.next;
    if (t !== null)
      Pe = t, Ne = e;
    else {
      if (e === null)
        throw le.alternate === null ? Error(c(467)) : Error(c(310));
      Ne = e, e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null
      }, Pe === null ? le.memoizedState = Pe = e : Pe = Pe.next = e;
    }
    return Pe;
  }
  function $i() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vr(e) {
    var t = Gr;
    return Gr += 1, $a === null && ($a = []), e = vf($a, e, t), t = le, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? cd : Wu), e;
  }
  function Pi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Vr(e);
      if (e.$$typeof === ee) return ut(e);
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = $i(), le.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = qe;
    return t.index++, n;
  }
  function Fn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ki(e) {
    var t = Qe();
    return Vu(t, Ne, e);
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
      var f = u = null, p = null, w = t, N = !1;
      do {
        var z = w.lane & -536870913;
        if (z !== w.lane ? (de & z) === z : (Yn & z) === z) {
          var E = w.revertLane;
          if (E === 0)
            p !== null && (p = p.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }), z === Va && (N = !0);
          else if ((Yn & E) === E) {
            w = w.next, E === Va && (N = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }, p === null ? (f = p = z, u = r) : p = p.next = z, le.lanes |= E, _l |= E;
          z = w.action, pa && n(r, z), r = w.hasEagerState ? w.eagerState : n(r, z);
        } else
          E = {
            lane: z,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          }, p === null ? (f = p = E, u = r) : p = p.next = E, le.lanes |= z, _l |= z;
        w = w.next;
      } while (w !== null && w !== t);
      if (p === null ? u = r : p.next = f, !Bt(r, e.memoizedState) && (Ke = !0, N && (n = Ya, n !== null)))
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
      Bt(r, t.memoizedState) || (Ke = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), n.lastRenderedState = r;
    }
    return [r, l];
  }
  function Cf(e, t, n) {
    var l = le, a = Qe(), r = he;
    if (r) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var u = !Bt(
      (Ne || a).memoizedState,
      n
    );
    if (u && (a.memoizedState = n, Ke = !0), a = a.queue, Qu(Rf.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || u || Pe !== null && Pe.memoizedState.tag & 1) {
      if (l.flags |= 2048, Pa(
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
      ), ze === null) throw Error(c(349));
      r || (Yn & 127) !== 0 || zf(l, t, n);
    }
    return n;
  }
  function zf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = le.updateQueue, t === null ? (t = $i(), le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !Bt(e, n);
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
      lastRenderedReducer: Fn,
      lastRenderedState: e
    }, t;
  }
  function Uf(e, t, n, l) {
    return e.baseState = n, Vu(
      e,
      Ne,
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
        p !== null && p(u, f), Bf(e, t, f);
      } catch (w) {
        Xu(e, t, w);
      } finally {
        r !== null && u.types !== null && (r.types = u.types), R.T = r;
      }
    } else
      try {
        r = n(a, l), Bf(e, t, r);
      } catch (w) {
        Xu(e, t, w);
      }
  }
  function Bf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Hf(e, t, l);
      },
      function(l) {
        return Xu(e, t, l);
      }
    ) : Hf(e, t, n);
  }
  function Hf(e, t, n) {
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
      var n = ze.formState;
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
    return Ff(t, Ne, e);
  }
  function Ff(e, t, n) {
    if (t = Vu(
      e,
      t,
      Gf
    )[0], e = Ki(Fn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Vr(t);
      } catch (u) {
        throw u === Fa ? qi : u;
      }
    else l = t;
    t = Qe();
    var a = t.queue, r = a.dispatch;
    return n !== t.memoizedState && (le.flags |= 2048, Pa(
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
    var t = Qe(), n = Ne;
    if (n !== null)
      return Ff(t, n, e);
    Qe(), t = t.memoizedState, n = Qe();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function Pa(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = le.updateQueue, t === null && (t = $i(), le.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Qf() {
    return Qe().memoizedState;
  }
  function Zi(e, t, n, l) {
    var a = vt();
    le.flags |= e, a.memoizedState = Pa(
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
    Ne !== null && l !== null && Uu(l, Ne.memoizedState.deps) ? a.memoizedState = Pa(t, r, n, l) : (le.flags |= e, a.memoizedState = Pa(
      1 | t,
      r,
      n,
      l
    ));
  }
  function If(e, t) {
    Zi(8390656, 8, e, t);
  }
  function Qu(e, t) {
    Wi(2048, 8, e, t);
  }
  function Sg(e) {
    le.flags |= 4;
    var t = le.updateQueue;
    if (t === null)
      t = $i(), le.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function $f(e) {
    var t = Qe().memoizedState;
    return Sg({ ref: t, nextImpl: e }), function() {
      if ((Te & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Pf(e, t) {
    return Wi(4, 2, e, t);
  }
  function Kf(e, t) {
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
  function Iu() {
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
      It(!0);
      try {
        e();
      } finally {
        It(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function $u(e, t, n) {
    return n === void 0 || (Yn & 1073741824) !== 0 && (de & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = tp(), le.lanes |= e, _l |= e, n);
  }
  function td(e, t, n, l) {
    return Bt(n, t) ? n : Qa.current !== null ? (e = $u(e, n, l), Bt(e, t) || (Ke = !0), e) : (Yn & 42) === 0 || (Yn & 1073741824) !== 0 && (de & 261930) === 0 ? (Ke = !0, e.memoizedState = n) : (e = tp(), le.lanes |= e, _l |= e, t);
  }
  function nd(e, t, n, l, a) {
    var r = B.p;
    B.p = r !== 0 && 8 > r ? r : 8;
    var u = R.T, f = {};
    R.T = f, Zu(e, !1, t, n);
    try {
      var p = a(), w = R.S;
      if (w !== null && w(f, p), p !== null && typeof p == "object" && typeof p.then == "function") {
        var N = hg(
          p,
          l
        );
        Yr(
          e,
          t,
          N,
          Ft(e)
        );
      } else
        Yr(
          e,
          t,
          l,
          Ft(e)
        );
    } catch (z) {
      Yr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        Ft()
      );
    } finally {
      B.p = r, u !== null && f.types !== null && (u.types = f.types), R.T = u;
    }
  }
  function wg() {
  }
  function Pu(e, t, n, l) {
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
  function Ku() {
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
          l !== null && (Rt(l, t, n), Br(l, t, n)), t = { cache: xu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Eg(e, t, n) {
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
          if (a.hasEagerState = !0, a.eagerState = f, Bt(f, u))
            return Ri(e, t, a, 0), ze === null && Di(), !1;
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
      revertLane: Os(),
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
    Ia = Qi = !0;
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
    use: Pi,
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
    use: Pi,
    useCallback: function(e, t) {
      return vt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ut,
    useEffect: If,
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
        It(!0);
        try {
          e();
        } finally {
          It(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = vt();
      if (n !== void 0) {
        var a = n(t);
        if (pa) {
          It(!0);
          try {
            n(t);
          } finally {
            It(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = Eg.bind(
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
    useDebugValue: Iu,
    useDeferredValue: function(e, t) {
      var n = vt();
      return $u(n, e, t);
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
        if (n = t(), ze === null)
          throw Error(c(349));
        (de & 127) !== 0 || zf(l, t, n);
      }
      a.memoizedState = n;
      var r = { value: n, getSnapshot: t };
      return a.queue = r, If(Rf.bind(null, l, r, e), [
        e
      ]), l.flags |= 2048, Pa(
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
      var e = vt(), t = ze.identifierPrefix;
      if (he) {
        var n = xn, l = kn;
        n = (l & ~(1 << 32 - rt(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Ii++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = gg++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ku,
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
    use: Pi,
    useCallback: Jf,
    useContext: ut,
    useEffect: Qu,
    useImperativeHandle: Wf,
    useInsertionEffect: Pf,
    useLayoutEffect: Kf,
    useMemo: ed,
    useReducer: Ki,
    useRef: Qf,
    useState: function() {
      return Ki(Fn);
    },
    useDebugValue: Iu,
    useDeferredValue: function(e, t) {
      var n = Qe();
      return td(
        n,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ki(Fn)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Vr(e),
        t
      ];
    },
    useSyncExternalStore: Cf,
    useId: rd,
    useHostTransitionStatus: Ku,
    useFormState: Yf,
    useActionState: Yf,
    useOptimistic: function(e, t) {
      var n = Qe();
      return Uf(n, Ne, e, t);
    },
    useMemoCache: Gu,
    useCacheRefresh: id
  };
  Wu.useEffectEvent = $f;
  var fd = {
    readContext: ut,
    use: Pi,
    useCallback: Jf,
    useContext: ut,
    useEffect: Qu,
    useImperativeHandle: Wf,
    useInsertionEffect: Pf,
    useLayoutEffect: Kf,
    useMemo: ed,
    useReducer: Yu,
    useRef: Qf,
    useState: function() {
      return Yu(Fn);
    },
    useDebugValue: Iu,
    useDeferredValue: function(e, t) {
      var n = Qe();
      return Ne === null ? $u(n, e, t) : td(
        n,
        Ne.memoizedState,
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
    useSyncExternalStore: Cf,
    useId: rd,
    useHostTransitionStatus: Ku,
    useFormState: Xf,
    useActionState: Xf,
    useOptimistic: function(e, t) {
      var n = Qe();
      return Ne !== null ? Uf(n, Ne, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Gu,
    useCacheRefresh: id
  };
  fd.useEffectEvent = $f;
  function Ju(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var es = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = Ft(), a = wl(l);
      a.payload = t, n != null && (a.callback = n), t = Tl(e, a, l), t !== null && (Rt(t, e, l), Br(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = Ft(), a = wl(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Tl(e, a, l), t !== null && (Rt(t, e, l), Br(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Ft(), l = wl(n);
      l.tag = 2, t != null && (l.callback = t), t = Tl(e, l, n), t !== null && (Rt(t, e, n), Br(t, e, n));
    }
  };
  function dd(e, t, n, l, a, r, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, r, u) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, l) || !Cr(a, r) : !0;
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
    zi(e);
  }
  function hd(e) {
    console.error(e);
  }
  function gd(e) {
    zi(e);
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
      yd(t, n, l), typeof a != "function" && (Nl === null ? Nl = /* @__PURE__ */ new Set([this]) : Nl.add(this));
      var f = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function kg(e, t, n, l, a) {
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
      ), zu(e, a), Ve !== 4 && (Ve = 2)), !1;
    var r = Error(c(520), { cause: l });
    if (r = Zt(r, n), Wr === null ? Wr = [r] : Wr.push(r), Ve !== 4 && (Ve = 2), t === null) return !0;
    l = Zt(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = ts(n.stateNode, l, e), zu(n, e), !1;
        case 1:
          if (t = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Nl === null || !Nl.has(r))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = bd(a), vd(
              a,
              e,
              n,
              l
            ), zu(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ns = Error(c(461)), Ke = !1;
  function st(e, t, n, l) {
    t.child = e === null ? Ef(t, null, n, l) : da(
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
    ), f = Bu(), e !== null && !Ke ? (Hu(e, t, a), Xn(e, t, a)) : (he && f && bu(t), t.flags |= 1, st(e, t, l, a), t.child);
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
      if (n = n.compare, n = n !== null ? n : Cr, n(u, l) && e.ref === t.ref)
        return Xn(e, t, a);
    }
    return t.flags |= 1, e = Hn(r, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Td(e, t, n, l, a) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (Cr(r, l) && e.ref === t.ref)
        if (Ke = !1, t.pendingProps = l = r, cs(e, a))
          (e.flags & 131072) !== 0 && (Ke = !0);
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
  function Ed(e, t, n, l) {
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
        return kd(
          e,
          t,
          r,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Hi(
          t,
          r !== null ? r.cachePool : null
        ), r !== null ? Af(t, r) : Ru(), _f(t);
      else
        return l = t.lanes = 536870912, kd(
          e,
          t,
          r !== null ? r.baseLanes | n : n,
          n,
          l
        );
    } else
      r !== null ? (Hi(t, r.cachePool), Af(t, r), kl(), t.memoizedState = null) : (e !== null && Hi(t, null), Ru(), kl());
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
  function kd(e, t, n, l, a) {
    var r = _u();
    return r = r === null ? null : { parent: $e._currentValue, pool: r }, t.memoizedState = {
      baseLanes: n,
      cachePool: r
    }, e !== null && Hi(t, null), Ru(), _f(t), e !== null && Ga(e, t, l, !0), t.childLanes = a, null;
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
          treeContext: gl !== null ? { id: kn, overflow: xn } : null,
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
      else if (Ke || Ga(e, t, n, !1), a = (n & e.childLanes) !== 0, Ke || a) {
        if (l = ze, l !== null && (u = hr(l, n), u !== 0 && u !== r.retryLane))
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
    return e = Hn(e.child, {
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
    ), l = Bu(), e !== null && !Ke ? (Hu(e, t, a), Xn(e, t, a)) : (he && l && bu(t), t.flags |= 1, st(e, t, n, a), t.child);
  }
  function Ad(e, t, n, l, a, r) {
    return ua(t), t.updateQueue = null, n = Of(
      t,
      l,
      n,
      a
    ), Nf(e), l = Bu(), e !== null && !Ke ? (Hu(e, t, r), Xn(e, t, r)) : (he && l && bu(t), t.flags |= 1, st(e, t, n, r), t.child);
  }
  function _d(e, t, n, l, a) {
    if (ua(t), t.stateNode === null) {
      var r = ja, u = n.contextType;
      typeof u == "object" && u !== null && (r = ut(u)), r = new n(l, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = es, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = l, r.state = t.memoizedState, r.refs = {}, Ou(t), u = n.contextType, r.context = typeof u == "object" && u !== null ? ut(u) : ja, r.state = t.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (Ju(
        t,
        n,
        u,
        l
      ), r.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (u = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), u !== r.state && es.enqueueReplaceState(r, r.state, null), qr(t, l, r, a), Hr(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      r = t.stateNode;
      var f = t.memoizedProps, p = ma(n, f);
      r.props = p;
      var w = r.context, N = n.contextType;
      u = ja, typeof N == "object" && N !== null && (u = ut(N));
      var z = n.getDerivedStateFromProps;
      N = typeof z == "function" || typeof r.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, N || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f || w !== u) && pd(
        t,
        r,
        l,
        u
      ), Sl = !1;
      var E = t.memoizedState;
      r.state = E, qr(t, l, r, a), Hr(), w = t.memoizedState, f || E !== w || Sl ? (typeof z == "function" && (Ju(
        t,
        n,
        z,
        l
      ), w = t.memoizedState), (p = Sl || dd(
        t,
        n,
        p,
        l,
        E,
        w,
        u
      )) ? (N || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = w), r.props = l, r.state = w, r.context = u, l = p) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      r = t.stateNode, Cu(e, t), u = t.memoizedProps, N = ma(n, u), r.props = N, z = t.pendingProps, E = r.context, w = n.contextType, p = ja, typeof w == "object" && w !== null && (p = ut(w)), f = n.getDerivedStateFromProps, (w = typeof f == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (u !== z || E !== p) && pd(
        t,
        r,
        l,
        p
      ), Sl = !1, E = t.memoizedState, r.state = E, qr(t, l, r, a), Hr();
      var k = t.memoizedState;
      u !== z || E !== k || Sl || e !== null && e.dependencies !== null && ji(e.dependencies) ? (typeof f == "function" && (Ju(
        t,
        n,
        f,
        l
      ), k = t.memoizedState), (N = Sl || dd(
        t,
        n,
        N,
        l,
        E,
        k,
        p
      ) || e !== null && e.dependencies !== null && ji(e.dependencies)) ? (w || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(l, k, p), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        l,
        k,
        p
      )), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = k), r.props = l, r.state = k, r.context = p, l = N) : (typeof r.componentDidUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), l = !1);
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
  function Nd(e, t, n, l) {
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
  function Od(e, t, n) {
    var l = t.pendingProps, a = !1, r = (t.flags & 128) !== 0, u;
    if ((u = r) || (u = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), u && (a = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (he) {
        if (a ? El(t) : kl(), (e = Le) ? (e = jp(
          e,
          en
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: gl !== null ? { id: kn, overflow: xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = uf(e), n.return = t, t.child = n, ot = t, Le = null)) : e = null, e === null) throw bl(t);
        return Vs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var f = l.children;
      return l = l.fallback, a ? (kl(), a = t.mode, f = lo(
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
      ), t.memoizedState = as, Xr(null, l)) : (El(t), os(t, f));
    }
    var p = e.memoizedState;
    if (p !== null && (f = p.dehydrated, f !== null)) {
      if (r)
        t.flags & 256 ? (El(t), t.flags &= -257, t = us(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (kl(), t.child = e.child, t.flags |= 128, t = null) : (kl(), f = l.fallback, a = t.mode, l = lo(
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
      else if (El(t), Vs(f)) {
        if (u = f.nextSibling && f.nextSibling.dataset, u) var w = u.dgst;
        u = w, l = Error(c(419)), l.stack = "", l.digest = u, Rr({ value: l, source: null, stack: null }), t = us(
          e,
          t,
          n
        );
      } else if (Ke || Ga(e, t, n, !1), u = (n & e.childLanes) !== 0, Ke || u) {
        if (u = ze, u !== null && (l = hr(u, n), l !== 0 && l !== p.retryLane))
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
    return a ? (kl(), f = l.fallback, a = t.mode, p = e.child, w = p.sibling, l = Hn(p, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = p.subtreeFlags & 65011712, w !== null ? f = Hn(
      w,
      f
    ) : (f = ra(
      f,
      a,
      n,
      null
    ), f.flags |= 2), f.return = t, l.return = t, l.sibling = f, t.child = l, Xr(null, l), l = t.child, f = e.child.memoizedState, f === null ? f = rs(n) : (a = f.cachePool, a !== null ? (p = $e._currentValue, a = a.parent !== p ? { parent: p, pool: p } : a) : a = yf(), f = {
      baseLanes: f.baseLanes | n,
      cachePool: a
    }), l.memoizedState = f, l.childLanes = is(
      e,
      u,
      n
    ), t.memoizedState = as, Xr(e.child, l)) : (El(t), n = e.child, e = n.sibling, n = Hn(n, {
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
    return e = Ht(22, e, null, t), e.lanes = 0, e;
  }
  function us(e, t, n) {
    return da(t, e.child, null, n), e = os(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Cd(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Eu(e.return, t, n);
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
  function zd(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, r = l.tail;
    l = l.children;
    var u = Xe.current, f = (u & 2) !== 0;
    if (f ? (u = u & 1 | 2, t.flags |= 128) : u &= 1, $(Xe, u), st(e, t, l, n), l = he ? Dr : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Cd(e, n, t);
        else if (e.tag === 19)
          Cd(e, n, t);
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
      for (e = t.child, n = Hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Hn(e, e.pendingProps), n.return = t;
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
        dn(t, t.stateNode.containerInfo), vl(t, $e, e.memoizedState.cache), ia();
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
          return l.dehydrated !== null ? (El(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Od(e, t, n) : (El(t), e = Xn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        El(t);
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
            return zd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), $(Xe, Xe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Ed(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        vl(t, $e, e.memoizedState.cache);
    }
    return Xn(e, t, n);
  }
  function Dd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ke = !0;
      else {
        if (!cs(e, n) && (t.flags & 128) === 0)
          return Ke = !1, Ag(
            e,
            t,
            n
          );
        Ke = (e.flags & 131072) !== 0;
      }
    else
      Ke = !1, he && (t.flags & 1048576) !== 0 && cf(t, Dr, t.index);
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
              } else if (a === K) {
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
            throw t = Ie(e) || e, Error(c(306, t, ""));
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
          a = r.element, Cu(e, t), qr(t, l, null, n);
          var u = t.memoizedState;
          if (l = u.cache, vl(t, $e, l), l !== r.cache && ku(
            t,
            [$e],
            n,
            !0
          ), Hr(), l = u.element, r.isDehydrated)
            if (r = {
              element: l,
              isDehydrated: !1,
              cache: u.cache
            }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
              t = Nd(
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
              ), Rr(a), t = Nd(
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
              for (Le = tn(e.firstChild), ot = t, he = !0, yl = null, en = !0, n = Ef(
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
        ), l !== null ? (t.stateNode = l, ot = t, Le = tn(l.firstChild), en = !1, a = !0) : a = !1), a || bl(t)), De(t), a = t.type, r = t.pendingProps, u = e !== null ? e.memoizedProps : null, l = r.children, Bs(a, r) ? l = null : u !== null && Bs(a, u) && (t.flags |= 32), t.memoizedState !== null && (a = ju(
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
        return Od(e, t, n);
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
        return zd(e, t, n);
      case 31:
        return xg(e, t, n);
      case 22:
        return Ed(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ua(t), l = ut($e), e === null ? (a = _u(), a === null && (a = ze, r = xu(), a.pooledCache = r, r.refCount++, r !== null && (a.pooledCacheLanes |= n), a = r), t.memoizedState = { parent: l, cache: a }, Ou(t), vl(t, $e, a)) : ((e.lanes & n) !== 0 && (Cu(e, t), qr(t, null, null, n), Hr()), a = e.memoizedState, r = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), vl(t, $e, l)) : (l = r.cache, vl(t, $e, l), l !== a.cache && ku(
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
  function fs(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (rp()) e.flags |= 8192;
        else
          throw fa = Gi, Nu;
    } else e.flags &= -16777217;
  }
  function Rd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !$p(t))
      if (rp()) e.flags |= 8192;
      else
        throw fa = Gi, Nu;
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
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Vn($e), nt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (qa(t) ? Qn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, wu())), Ue(t), null;
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
            e[oe] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Op(e.nodeValue, n)), e || bl(t, !0);
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
                  return $(
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
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Ye(), e.sibling = null, n = Xe.current, $(
          Xe,
          a ? n & 1 | 2 : n & 1
        ), he && qn(t, l.treeForkCount), e) : (Ue(t), null);
      case 22:
      case 23:
        return Gt(t), Mu(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), n = t.updateQueue, n !== null && ao(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && ue(sa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Vn($e), Ue(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Ng(e, t) {
    switch (vu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Vn($e), nt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
        return Vn($e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Md(e, t) {
    switch (vu(t), t.tag) {
      case 3:
        Vn($e), nt();
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
        Vn($e);
    }
  }
  function Ir(e, t) {
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
              } catch (N) {
                Ae(
                  a,
                  p,
                  N
                );
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (N) {
      Ae(t, t.return, N);
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
  function $r(e, t) {
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
      Kg(l, e.type, n, t), l[Fe] = t;
    } catch (a) {
      Ae(e, e.return, a);
    }
  }
  function Bd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Dl(e.type) || e.tag === 4;
  }
  function ps(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bd(e.return)) return null;
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
  function Hd(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      ct(t, l, n), t[oe] = e, t[Fe] = n;
    } catch (r) {
      Ae(e, e.return, r);
    }
  }
  var In = !1, Ze = !1, hs = !1, qd = typeof WeakSet == "function" ? WeakSet : Set, at = null;
  function Og(e, t) {
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
            var u = 0, f = -1, p = -1, w = 0, N = 0, z = e, E = null;
            t: for (; ; ) {
              for (var k; z !== n || a !== 0 && z.nodeType !== 3 || (f = u + a), z !== r || l !== 0 && z.nodeType !== 3 || (p = u + l), z.nodeType === 3 && (u += z.nodeValue.length), (k = z.firstChild) !== null; )
                E = z, z = k;
              for (; ; ) {
                if (z === e) break t;
                if (E === n && ++w === a && (f = u), E === r && ++N === l && (p = u), (k = z.nextSibling) !== null) break;
                z = E, E = z.parentNode;
              }
              z = k;
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
                  var X = ma(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    X,
                    r
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Z) {
                  Ae(
                    n,
                    n.return,
                    Z
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
        Pn(e, n), l & 4 && Ir(5, n);
        break;
      case 1:
        if (Pn(e, n), l & 4)
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
        l & 64 && Ld(n), l & 512 && $r(n, n.return);
        break;
      case 3:
        if (Pn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
        t === null && l & 4 && Hd(n);
      case 26:
      case 5:
        Pn(e, n), t === null && l & 4 && jd(n), l & 512 && $r(n, n.return);
        break;
      case 12:
        Pn(e, n);
        break;
      case 31:
        Pn(e, n), l & 4 && Fd(e, n);
        break;
      case 13:
        Pn(e, n), l & 4 && Xd(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Bg.bind(
          null,
          n
        ), ay(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || In, !l) {
          t = t !== null && t.memoizedState !== null || Ze, a = In;
          var r = Ze;
          In = l, (Ze = t) && !r ? Kn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Pn(e, n), In = a, Ze = r;
        }
        break;
      case 30:
        break;
      default:
        Pn(e, n);
    }
  }
  function Vd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Vd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && vr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, Ot = !1;
  function $n(e, t, n) {
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
        Ze || An(n, t), $n(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ze || An(n, t);
        var l = je, a = Ot;
        Dl(n.type) && (je = n.stateNode, Ot = !1), $n(
          e,
          t,
          n
        ), li(n.stateNode), je = l, Ot = a;
        break;
      case 5:
        Ze || An(n, t);
      case 6:
        if (l = je, a = Ot, je = null, $n(
          e,
          t,
          n
        ), je = l, Ot = a, je !== null)
          if (Ot)
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
        je !== null && (Ot ? (e = je, Lp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), or(e)) : Lp(je, n.stateNode));
        break;
      case 4:
        l = je, a = Ot, je = n.stateNode.containerInfo, Ot = !0, $n(
          e,
          t,
          n
        ), je = l, Ot = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        xl(2, n, t), Ze || xl(4, n, t), $n(
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
        )), $n(
          e,
          t,
          n
        );
        break;
      case 21:
        $n(
          e,
          t,
          n
        );
        break;
      case 22:
        Ze = (l = Ze) || n.memoizedState !== null, $n(
          e,
          t,
          n
        ), Ze = l;
        break;
      default:
        $n(
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
  function Cg(e) {
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
    var n = Cg(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = Hg.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function Ct(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], r = e, u = t, f = u;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Dl(f.type)) {
                je = f.stateNode, Ot = !1;
                break e;
              }
              break;
            case 5:
              je = f.stateNode, Ot = !1;
              break e;
            case 3:
            case 4:
              je = f.stateNode.containerInfo, Ot = !0;
              break e;
          }
          f = f.return;
        }
        if (je === null) throw Error(c(160));
        Yd(r, u, a), je = null, Ot = !1, r = a.alternate, r !== null && (r.return = null), a.return = null;
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
        Ct(t, e), zt(e), l & 4 && (xl(3, e, e.return), Ir(3, e), xl(5, e, e.return));
        break;
      case 1:
        Ct(t, e), zt(e), l & 512 && (Ze || n === null || An(n, n.return)), l & 64 && In && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = hn;
        if (Ct(t, e), zt(e), l & 512 && (Ze || n === null || An(n, n.return)), l & 4) {
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
                Ip(
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
            r !== l ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, l === null ? Ip(
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
        Ct(t, e), zt(e), l & 512 && (Ze || n === null || An(n, n.return)), n !== null && l & 4 && ds(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ct(t, e), zt(e), l & 512 && (Ze || n === null || An(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            I(a, "");
          } catch (X) {
            Ae(e, e.return, X);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, ds(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (hs = !0);
        break;
      case 6:
        if (Ct(t, e), zt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (X) {
            Ae(e, e.return, X);
          }
        }
        break;
      case 3:
        if (Eo = null, a = hn, hn = wo(t.containerInfo), Ct(t, e), hn = a, zt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            or(t.containerInfo);
          } catch (X) {
            Ae(e, e.return, X);
          }
        hs && (hs = !1, Id(e));
        break;
      case 4:
        l = hn, hn = wo(
          e.stateNode.containerInfo
        ), Ct(t, e), zt(e), hn = l;
        break;
      case 12:
        Ct(t, e), zt(e);
        break;
      case 31:
        Ct(t, e), zt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, io(e, l)));
        break;
      case 13:
        Ct(t, e), zt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (uo = Ye()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, io(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var p = n !== null && n.memoizedState !== null, w = In, N = Ze;
        if (In = w || a, Ze = N || p, Ct(t, e), Ze = N, In = w, zt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || p || In || Ze || ha(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                p = n = t;
                try {
                  if (r = p.stateNode, a)
                    u = r.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    f = p.stateNode;
                    var z = p.memoizedProps.style, E = z != null && z.hasOwnProperty("display") ? z.display : null;
                    f.style.display = E == null || typeof E == "boolean" ? "" : ("" + E).trim();
                  }
                } catch (X) {
                  Ae(p, p.return, X);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                p = t;
                try {
                  p.stateNode.nodeValue = a ? "" : p.memoizedProps;
                } catch (X) {
                  Ae(p, p.return, X);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                p = t;
                try {
                  var k = p.stateNode;
                  a ? Up(k, !0) : Up(p.stateNode, !1);
                } catch (X) {
                  Ae(p, p.return, X);
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
        Ct(t, e), zt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, io(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ct(t, e), zt(e);
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Bd(l)) {
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
            n.flags & 32 && (I(u, ""), n.flags &= -33);
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
      } catch (N) {
        Ae(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Id(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Id(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Pn(e, t) {
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
  function Kn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, r = t, u = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Kn(
            a,
            r,
            n
          ), Ir(4, r);
          break;
        case 1:
          if (Kn(
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
                  kf(p[a], f);
            } catch (w) {
              Ae(l, l.return, w);
            }
          }
          n && u & 64 && Ld(r), $r(r, r.return);
          break;
        case 27:
          Hd(r);
        case 26:
        case 5:
          Kn(
            a,
            r,
            n
          ), n && l === null && u & 4 && jd(r), $r(r, r.return);
          break;
        case 12:
          Kn(
            a,
            r,
            n
          );
          break;
        case 31:
          Kn(
            a,
            r,
            n
          ), n && u & 4 && Fd(a, r);
          break;
        case 13:
          Kn(
            a,
            r,
            n
          ), n && u & 4 && Xd(a, r);
          break;
        case 22:
          r.memoizedState === null && Kn(
            a,
            r,
            n
          ), $r(r, r.return);
          break;
        case 30:
          break;
        default:
          Kn(
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
        $d(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function $d(e, t, n, l) {
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
        ), a & 2048 && Ir(9, t);
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
        ) : Pr(e, t) : r._visibility & 2 ? gn(
          e,
          t,
          n,
          l
        ) : (r._visibility |= 2, Ka(
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
  function Ka(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var r = e, u = t, f = n, p = l, w = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ka(
            r,
            u,
            f,
            p,
            a
          ), Ir(8, u);
          break;
        case 23:
          break;
        case 22:
          var N = u.stateNode;
          u.memoizedState !== null ? N._visibility & 2 ? Ka(
            r,
            u,
            f,
            p,
            a
          ) : Pr(
            r,
            u
          ) : (N._visibility |= 2, Ka(
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
          Ka(
            r,
            u,
            f,
            p,
            a
          ), a && w & 2048 && ys(u.alternate, u);
          break;
        default:
          Ka(
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
  function Pr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            Pr(n, l), a & 2048 && gs(
              l.alternate,
              l
            );
            break;
          case 24:
            Pr(n, l), a & 2048 && ys(l.alternate, l);
            break;
          default:
            Pr(n, l);
        }
        t = t.sibling;
      }
  }
  var Kr = 8192;
  function Za(e, t, n) {
    if (e.subtreeFlags & Kr)
      for (e = e.child; e !== null; )
        Pd(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Pd(e, t, n) {
    switch (e.tag) {
      case 26:
        Za(
          e,
          t,
          n
        ), e.flags & Kr && e.memoizedState !== null && gy(
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
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Kr, Kr = 16777216, Za(
          e,
          t,
          n
        ), Kr = l) : Za(
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
  function Kd(e) {
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
      Kd(e);
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
      Kd(e);
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
  var zg = {
    getCacheForType: function(e) {
      var t = ut($e), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return ut($e).controller.signal;
    }
  }, Dg = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, ze = null, ce = null, de = 0, xe = 0, Vt = null, Al = !1, Wa = !1, bs = !1, Zn = 0, Ve = 0, _l = 0, ga = 0, vs = 0, Yt = 0, Ja = 0, Wr = null, Dt = null, Ss = !1, uo = 0, Jd = 0, so = 1 / 0, co = null, Nl = null, et = 0, Ol = null, er = null, Wn = 0, ws = 0, Ts = null, ep = null, Jr = 0, Es = null;
  function Ft() {
    return (Te & 2) !== 0 && de !== 0 ? de & -de : R.T !== null ? Os() : sl();
  }
  function tp() {
    if (Yt === 0)
      if ((de & 536870912) === 0 || he) {
        var e = Kl;
        Kl <<= 1, (Kl & 3932160) === 0 && (Kl = 262144), Yt = e;
      } else Yt = 536870912;
    return e = qt.current, e !== null && (e.flags |= 32), Yt;
  }
  function Rt(e, t, n) {
    (e === ze && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (tr(e, 0), Cl(
      e,
      de,
      Yt,
      !1
    )), Ln(e, n), ((Te & 2) === 0 || e !== ze) && (e === ze && ((Te & 2) === 0 && (ga |= n), Ve === 4 && Cl(
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
        Wa && !l && Cl(e, t, 0, !1);
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
          tr(e, 0), Cl(e, t, 0, !0);
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
              Cl(
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
            if (Cl(
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
  function lp(e, t, n, l, a, r, u, f, p, w, N, z, E, k) {
    if (e.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: it
      }, Pd(
        t,
        r,
        z
      );
      var X = (r & 62914560) === r ? uo - Ye() : (r & 4194048) === r ? Jd - Ye() : 0;
      if (X = yy(
        z,
        X
      ), X !== null) {
        Wn = r, e.cancelPendingCommit = X(
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
            N,
            z,
            null,
            E,
            k
          )
        ), Cl(e, r, u, !w);
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
            if (!Bt(r(), a)) return !1;
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
  function Cl(e, t, n, l) {
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
  function ks() {
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
    n !== -1 && (e.timeoutHandle = -1, Jg(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Wn = 0, ks(), ze = e, ce = n = Hn(e.current, null), de = t, xe = 0, Vt = null, Al = !1, Wa = Sn(e, t), bs = !1, Ja = Yt = vs = ga = _l = Ve = 0, Dt = Wr = null, Ss = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - rt(l), r = 1 << a;
        t |= e[a], l &= ~r;
      }
    return Zn = t, Di(), n;
  }
  function ap(e, t) {
    le = null, R.H = Fr, t === Fa || t === qi ? (t = Sf(), xe = 3) : t === Nu ? (t = Sf(), xe = 4) : xe = t === ns ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, ce === null && (Ve = 1, eo(
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
    return R.A = zg, e;
  }
  function po() {
    Ve = 4, Al || (de & 4194048) !== de && qt.current !== null || (Wa = !0), (_l & 134217727) === 0 && (ga & 134217727) === 0 || ze === null || Cl(
      ze,
      de,
      Yt,
      !1
    );
  }
  function xs(e, t, n) {
    var l = Te;
    Te |= 2;
    var a = ip(), r = op();
    (ze !== e || de !== t) && (co = null, tr(e, t)), t = !1;
    var u = Ve;
    e: do
      try {
        if (xe !== 0 && ce !== null) {
          var f = ce, p = Vt;
          switch (xe) {
            case 8:
              ks(), u = 6;
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
      } catch (N) {
        ap(e, N);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = oa = null, Te = l, R.H = a, R.A = r, ce === null && (ze = null, de = 0, Di()), u;
  }
  function Mg() {
    for (; ce !== null; ) up(ce);
  }
  function Lg(e, t) {
    var n = Te;
    Te |= 2;
    var l = ip(), a = op();
    ze !== e || de !== t ? (co = null, so = Ye() + 500, tr(e, t)) : Wa = Sn(
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
                xe !== 2 && xe !== 9 || ze !== e || (xe = 7), _n(e);
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
                  if (u ? $p(u) : f.stateNode.complete) {
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
              ks(), Ve = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Ug();
        break;
      } catch (N) {
        ap(e, N);
      }
    while (!0);
    return Gn = oa = null, R.H = l, R.A = a, Te = n, ce !== null ? 0 : (ze = null, de = 0, Di(), Ve);
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
      if (kg(
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
      var n = Ng(e.alternate, e);
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
      if (r = t.lanes | t.childLanes, r |= pu, $o(
        e,
        n,
        r,
        u,
        f,
        p
      ), e === ze && (ce = ze = null, de = 0), er = t, Ol = e, Wn = n, ws = r, Ts = a, ep = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, qg(al, function() {
        return gp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = R.T, R.T = null, a = B.p, B.p = 2, u = Te, Te |= 4;
        try {
          Og(e, t, n);
        } finally {
          Te = u, B.p = a, R.T = l;
        }
      }
      et = 1, dp(), pp(), mp();
    }
  }
  function dp() {
    if (et === 1) {
      et = 0;
      var e = Ol, t = er, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = R.T, R.T = null;
        var l = B.p;
        B.p = 2;
        var a = Te;
        Te |= 4;
        try {
          Qd(t, e);
          var r = js, u = Zc(e.containerInfo), f = r.focusedElem, p = r.selectionRange;
          if (u !== f && f && f.ownerDocument && Kc(
            f.ownerDocument.documentElement,
            f
          )) {
            if (p !== null && uu(f)) {
              var w = p.start, N = p.end;
              if (N === void 0 && (N = w), "selectionStart" in f)
                f.selectionStart = w, f.selectionEnd = Math.min(
                  N,
                  f.value.length
                );
              else {
                var z = f.ownerDocument || document, E = z && z.defaultView || window;
                if (E.getSelection) {
                  var k = E.getSelection(), X = f.textContent.length, Z = Math.min(p.start, X), Ce = p.end === void 0 ? Z : Math.min(p.end, X);
                  !k.extend && Z > Ce && (u = Ce, Ce = Z, Z = u);
                  var v = Pc(
                    f,
                    Z
                  ), y = Pc(
                    f,
                    Ce
                  );
                  if (v && y && (k.rangeCount !== 1 || k.anchorNode !== v.node || k.anchorOffset !== v.offset || k.focusNode !== y.node || k.focusOffset !== y.offset)) {
                    var S = z.createRange();
                    S.setStart(v.node, v.offset), k.removeAllRanges(), Z > Ce ? (k.addRange(S), k.extend(y.node, y.offset)) : (S.setEnd(y.node, y.offset), k.addRange(S));
                  }
                }
              }
            }
            for (z = [], k = f; k = k.parentNode; )
              k.nodeType === 1 && z.push({
                element: k,
                left: k.scrollLeft,
                top: k.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < z.length; f++) {
              var O = z[f];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          _o = !!Us, js = Us = null;
        } finally {
          Te = a, B.p = l, R.T = n;
        }
      }
      e.current = t, et = 2;
    }
  }
  function pp() {
    if (et === 2) {
      et = 0;
      var e = Ol, t = er, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = R.T, R.T = null;
        var l = B.p;
        B.p = 2;
        var a = Te;
        Te |= 4;
        try {
          Gd(e, t.alternate, t);
        } finally {
          Te = a, B.p = l, R.T = n;
        }
      }
      et = 3;
    }
  }
  function mp() {
    if (et === 4 || et === 3) {
      et = 0, Il();
      var e = Ol, t = er, n = Wn, l = ep;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? et = 5 : (et = 0, er = Ol = null, hp(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Nl = null), gr(n), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function")
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
        t = R.T, a = B.p, B.p = 2, R.T = null;
        try {
          for (var r = e.onRecoverableError, u = 0; u < l.length; u++) {
            var f = l[u];
            r(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          R.T = t, B.p = a;
        }
      }
      (Wn & 3) !== 0 && ho(), _n(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === Es ? Jr++ : (Jr = 0, Es = e) : Jr = 0, ei(0);
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
    var e = Ol, t = ws;
    ws = 0;
    var n = gr(Wn), l = R.T, a = B.p;
    try {
      B.p = 32 > n ? 32 : n, R.T = null, n = Ts, Ts = null;
      var r = Ol, u = Wn;
      if (et = 0, er = Ol = null, Wn = 0, (Te & 6) !== 0) throw Error(c(331));
      var f = Te;
      if (Te |= 4, Zd(r.current), $d(
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
      B.p = a, R.T = l, hp(e, t);
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Nl === null || !Nl.has(l))) {
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
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ze === e && (de & n) === n && (Ve === 4 || Ve === 3 && (de & 62914560) === de && 300 > Ye() - uo ? (Te & 2) === 0 && tr(e, 0) : vs |= n, Ja === de && (Ja = 0)), _n(e);
  }
  function bp(e, t) {
    t === 0 && (t = Mn()), e = aa(e, t), e !== null && (Ln(e, t), _n(e));
  }
  function Bg(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), bp(e, n);
  }
  function Hg(e, t) {
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
  var go = null, lr = null, _s = !1, yo = !1, Ns = !1, zl = 0;
  function _n(e) {
    e !== lr && e.next === null && (lr === null ? go = lr = e : lr = lr.next = e), yo = !0, _s || (_s = !0, Vg());
  }
  function ei(e, t) {
    if (!Ns && yo) {
      Ns = !0;
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
              l === ze ? r : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (r & 3) === 0 || Sn(l, r) || (n = !0, Tp(l, r));
          l = l.next;
        }
      while (n);
      Ns = !1;
    }
  }
  function Gg() {
    vp();
  }
  function vp() {
    yo = _s = !1;
    var e = 0;
    zl !== 0 && Wg() && (e = zl);
    for (var t = Ye(), n = null, l = go; l !== null; ) {
      var a = l.next, r = Sp(l, t);
      r === 0 ? (l.next = null, n === null ? go = a : n.next = a, a === null && (lr = n)) : (n = l, (e !== 0 || (r & 3) !== 0) && (yo = !0)), l = a;
    }
    et !== 0 && et !== 5 || ei(e), zl !== 0 && (zl = 0);
  }
  function Sp(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
      var u = 31 - rt(r), f = 1 << u, p = a[u];
      p === -1 ? ((f & n) === 0 || (f & l) !== 0) && (a[u] = Pt(f, t)) : p <= t && (e.expiredLanes |= f), r &= ~f;
    }
    if (t = ze, n = de, n = Rn(
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
          n = Ea;
          break;
        case 32:
          n = al;
          break;
        case 268435456:
          n = $l;
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
      e === ze ? l : 0,
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
  function Os() {
    if (zl === 0) {
      var e = Va;
      e === 0 && (e = Pl, Pl <<= 1, (Pl & 261888) === 0 && (Pl = 256)), zl = e;
    }
    return zl;
  }
  function Ep(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _t("" + e);
  }
  function kp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Yg(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var r = Ep(
        (a[Fe] || null).action
      ), u = l.submitter;
      u && (t = (t = u[Fe] || null) ? Ep(t.formAction) : u.getAttribute("formAction"), t !== null && (r = t, u = null));
      var f = new Ni(
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
                if (zl !== 0) {
                  var p = u ? kp(a, u) : new FormData(a);
                  Pu(
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
                typeof r == "function" && (f.preventDefault(), p = u ? kp(a, u) : new FormData(a), Pu(
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
  for (var Cs = 0; Cs < du.length; Cs++) {
    var zs = du[Cs], Fg = zs.toLowerCase(), Xg = zs[0].toUpperCase() + zs.slice(1);
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
            } catch (N) {
              zi(N);
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
            } catch (N) {
              zi(N);
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
        a = $s;
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
    Cc(function() {
      var w = r, N = Zo(n), z = [];
      e: {
        var E = af.get(e);
        if (E !== void 0) {
          var k = Ni, X = e;
          switch (e) {
            case "keypress":
              if (Ai(n) === 0) break e;
            case "keydown":
            case "keyup":
              k = Hh;
              break;
            case "focusin":
              X = "focus", k = lu;
              break;
            case "focusout":
              X = "blur", k = lu;
              break;
            case "beforeblur":
            case "afterblur":
              k = lu;
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
              k = Rc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = _h;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = Vh;
              break;
            case ef:
            case tf:
            case nf:
              k = Ch;
              break;
            case lf:
              k = Fh;
              break;
            case "scroll":
            case "scrollend":
              k = xh;
              break;
            case "wheel":
              k = Qh;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = Dh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = Lc;
              break;
            case "toggle":
            case "beforetoggle":
              k = $h;
          }
          var Z = (t & 4) !== 0, Ce = !Z && (e === "scroll" || e === "scrollend"), v = Z ? E !== null ? E + "Capture" : null : E;
          Z = [];
          for (var y = w, S; y !== null; ) {
            var O = y;
            if (S = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || S === null || v === null || (O = Er(y, v), O != null && Z.push(
              ni(y, O, S)
            )), Ce) break;
            y = y.return;
          }
          0 < Z.length && (E = new k(
            E,
            X,
            null,
            n,
            N
          ), z.push({ event: E, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (E = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", E && n !== Ko && (X = n.relatedTarget || n.fromElement) && (fl(X) || X[cl]))
            break e;
          if ((k || E) && (E = N.window === N ? N : (E = N.ownerDocument) ? E.defaultView || E.parentWindow : window, k ? (X = n.relatedTarget || n.toElement, k = w, X = X ? fl(X) : null, X !== null && (Ce = T(X), Z = X.tag, X !== Ce || Z !== 5 && Z !== 27 && Z !== 6) && (X = null)) : (k = null, X = w), k !== X)) {
            if (Z = Rc, O = "onMouseLeave", v = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (Z = Lc, O = "onPointerLeave", v = "onPointerEnter", y = "pointer"), Ce = k == null ? E : Mt(k), S = X == null ? E : Mt(X), E = new Z(
              O,
              y + "leave",
              k,
              n,
              N
            ), E.target = Ce, E.relatedTarget = S, O = null, fl(N) === w && (Z = new Z(
              v,
              y + "enter",
              X,
              n,
              N
            ), Z.target = S, Z.relatedTarget = Ce, O = Z), Ce = O, k && X)
              t: {
                for (Z = Ig, v = k, y = X, S = 0, O = v; O; O = Z(O))
                  S++;
                O = 0;
                for (var P = y; P; P = Z(P))
                  O++;
                for (; 0 < S - O; )
                  v = Z(v), S--;
                for (; 0 < O - S; )
                  y = Z(y), O--;
                for (; S--; ) {
                  if (v === y || y !== null && v === y.alternate) {
                    Z = v;
                    break t;
                  }
                  v = Z(v), y = Z(y);
                }
                Z = null;
              }
            else Z = null;
            k !== null && _p(
              z,
              E,
              k,
              Z,
              !1
            ), X !== null && Ce !== null && _p(
              z,
              Ce,
              X,
              Z,
              !0
            );
          }
        }
        e: {
          if (E = w ? Mt(w) : window, k = E.nodeName && E.nodeName.toLowerCase(), k === "select" || k === "input" && E.type === "file")
            var ve = Yc;
          else if (Gc(E))
            if (Fc)
              ve = ag;
            else {
              ve = ng;
              var Q = tg;
            }
          else
            k = E.nodeName, !k || k.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? w && lt(w.elementType) && (ve = Yc) : ve = lg;
          if (ve && (ve = ve(e, w))) {
            Vc(
              z,
              ve,
              n,
              N
            );
            break e;
          }
          Q && Q(e, E, w), e === "focusout" && w && E.type === "number" && w.memoizedProps.value != null && b(E, "number", E.value);
        }
        switch (Q = w ? Mt(w) : window, e) {
          case "focusin":
            (Gc(Q) || Q.contentEditable === "true") && (Ma = Q, su = w, zr = null);
            break;
          case "focusout":
            zr = su = Ma = null;
            break;
          case "mousedown":
            cu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            cu = !1, Wc(z, n, N);
            break;
          case "selectionchange":
            if (ig) break;
          case "keydown":
          case "keyup":
            Wc(z, n, N);
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
          Ra ? Hc(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (Uc && n.locale !== "ko" && (Ra || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Ra && (ae = zc()) : (hl = N, eu = "value" in hl ? hl.value : hl.textContent, Ra = !0)), Q = vo(w, pe), 0 < Q.length && (pe = new Mc(
          pe,
          e,
          null,
          n,
          N
        ), z.push({ event: pe, listeners: Q }), ae ? pe.data = ae : (ae = qc(n), ae !== null && (pe.data = ae)))), (ae = Kh ? Zh(e, n) : Wh(e, n)) && (pe = vo(w, "onBeforeInput"), 0 < pe.length && (Q = new Mc(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          N
        ), z.push({
          event: Q,
          listeners: pe
        }), Q.data = ae)), Yg(
          z,
          e,
          w,
          n,
          N
        );
      }
      xp(z, t);
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
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || r === null || (a = Er(e, n), a != null && l.unshift(
        ni(e, a, r)
      ), a = Er(e, t), a != null && l.push(
        ni(e, a, r)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Ig(e) {
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
      f !== 5 && f !== 26 && f !== 27 || w === null || (p = w, a ? (w = Er(n, r), w != null && u.unshift(
        ni(n, w, p)
      )) : a || (w = Er(n, r), w != null && u.push(
        ni(n, w, p)
      ))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var $g = /\r\n?/g, Pg = /\u0000|\uFFFD/g;
  function Np(e) {
    return (typeof e == "string" ? e : "" + e).replace($g, `
`).replace(Pg, "");
  }
  function Op(e, t) {
    return t = Np(t), Np(e) === t;
  }
  function Oe(e, t, n, l, a, r) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || I(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && I(e, "" + l);
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
          typeof r == "function" && (n === "formAction" ? (t !== "input" && Oe(e, t, "name", a.name, a, null), Oe(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Oe(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Oe(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Oe(e, t, "encType", a.encType, a, null), Oe(e, t, "method", a.method, a, null), Oe(e, t, "target", a.target, a, null)));
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
        fe("beforetoggle", e), fe("toggle", e), En(e, "popover", l);
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
        En(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = bt.get(n) || n, En(e, n, l));
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
        typeof l == "string" ? I(e, l) : (typeof l == "number" || typeof l == "bigint") && I(e, "" + l);
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
        if (!Ei.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), r = e[Fe] || null, r = r != null ? r[n] : null, typeof r == "function" && e.removeEventListener(t, r, a), typeof l == "function")) {
              typeof r != "function" && r !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : En(e, n, l);
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
                  Oe(e, t, r, u, n, null);
              }
          }
        a && Oe(e, t, "srcSet", n.srcSet, n, null), l && Oe(e, t, "src", n.src, n, null);
        return;
      case "input":
        fe("invalid", e);
        var f = r = u = a = null, p = null, w = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var N = n[l];
            if (N != null)
              switch (l) {
                case "name":
                  a = N;
                  break;
                case "type":
                  u = N;
                  break;
                case "checked":
                  p = N;
                  break;
                case "defaultChecked":
                  w = N;
                  break;
                case "value":
                  r = N;
                  break;
                case "defaultValue":
                  f = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Oe(e, t, l, N, n, null);
              }
          }
        Ca(
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
                Oe(e, t, a, f, n, null);
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
                Oe(e, t, u, f, n, null);
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
                Oe(e, t, p, l, n, null);
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
                Oe(e, t, w, l, n, null);
            }
        return;
      default:
        if (lt(t)) {
          for (N in n)
            n.hasOwnProperty(N) && (l = n[N], l !== void 0 && Ls(
              e,
              t,
              N,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (f in n)
      n.hasOwnProperty(f) && (l = n[f], l != null && Oe(e, t, f, l, n, null));
  }
  function Kg(e, t, n, l) {
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
        var a = null, r = null, u = null, f = null, p = null, w = null, N = null;
        for (k in n) {
          var z = n[k];
          if (n.hasOwnProperty(k) && z != null)
            switch (k) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                p = z;
              default:
                l.hasOwnProperty(k) || Oe(e, t, k, null, l, z);
            }
        }
        for (var E in l) {
          var k = l[E];
          if (z = n[E], l.hasOwnProperty(E) && (k != null || z != null))
            switch (E) {
              case "type":
                r = k;
                break;
              case "name":
                a = k;
                break;
              case "checked":
                w = k;
                break;
              case "defaultChecked":
                N = k;
                break;
              case "value":
                u = k;
                break;
              case "defaultValue":
                f = k;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null)
                  throw Error(c(137, t));
                break;
              default:
                k !== z && Oe(
                  e,
                  t,
                  E,
                  k,
                  l,
                  z
                );
            }
        }
        ml(
          e,
          u,
          f,
          p,
          w,
          N,
          r,
          a
        );
        return;
      case "select":
        k = u = f = E = null;
        for (r in n)
          if (p = n[r], n.hasOwnProperty(r) && p != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                k = p;
              default:
                l.hasOwnProperty(r) || Oe(
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
                E = r;
                break;
              case "defaultValue":
                f = r;
                break;
              case "multiple":
                u = r;
              default:
                r !== p && Oe(
                  e,
                  t,
                  a,
                  r,
                  l,
                  p
                );
            }
        t = f, n = u, l = k, E != null ? g(e, !!n, E, !1) : !!l != !!n && (t != null ? g(e, !!n, t, !0) : g(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        k = E = null;
        for (f in n)
          if (a = n[f], n.hasOwnProperty(f) && a != null && !l.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                Oe(e, t, f, null, l, a);
            }
        for (u in l)
          if (a = l[u], r = n[u], l.hasOwnProperty(u) && (a != null || r != null))
            switch (u) {
              case "value":
                E = a;
                break;
              case "defaultValue":
                k = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(c(91));
                break;
              default:
                a !== r && Oe(e, t, u, a, l, r);
            }
        _(e, E, k);
        return;
      case "option":
        for (var X in n)
          if (E = n[X], n.hasOwnProperty(X) && E != null && !l.hasOwnProperty(X))
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
                  l,
                  E
                );
            }
        for (p in l)
          if (E = l[p], k = n[p], l.hasOwnProperty(p) && E !== k && (E != null || k != null))
            switch (p) {
              case "selected":
                e.selected = E && typeof E != "function" && typeof E != "symbol";
                break;
              default:
                Oe(
                  e,
                  t,
                  p,
                  E,
                  l,
                  k
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
        for (var Z in n)
          E = n[Z], n.hasOwnProperty(Z) && E != null && !l.hasOwnProperty(Z) && Oe(e, t, Z, null, l, E);
        for (w in l)
          if (E = l[w], k = n[w], l.hasOwnProperty(w) && E !== k && (E != null || k != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(c(137, t));
                break;
              default:
                Oe(
                  e,
                  t,
                  w,
                  E,
                  l,
                  k
                );
            }
        return;
      default:
        if (lt(t)) {
          for (var Ce in n)
            E = n[Ce], n.hasOwnProperty(Ce) && E !== void 0 && !l.hasOwnProperty(Ce) && Ls(
              e,
              t,
              Ce,
              void 0,
              l,
              E
            );
          for (N in l)
            E = l[N], k = n[N], !l.hasOwnProperty(N) || E === k || E === void 0 && k === void 0 || Ls(
              e,
              t,
              N,
              E,
              l,
              k
            );
          return;
        }
    }
    for (var v in n)
      E = n[v], n.hasOwnProperty(v) && E != null && !l.hasOwnProperty(v) && Oe(e, t, v, null, l, E);
    for (z in l)
      E = l[z], k = n[z], !l.hasOwnProperty(z) || E === k || E == null && k == null || Oe(e, t, z, E, l, k);
  }
  function Cp(e) {
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
        if (r && f && Cp(u)) {
          for (u = 0, f = a.responseEnd, l += 1; l < n.length; l++) {
            var p = n[l], w = p.startTime;
            if (w > f) break;
            var N = p.transferSize, z = p.initiatorType;
            N && Cp(z) && (p = p.responseEnd, u += N * (p < f ? 1 : (f - w) / (p - w)));
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
  function zp(e) {
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
  function Bs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Hs = null;
  function Wg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Hs ? !1 : (Hs = e, !0) : (Hs = null, !1);
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
  function Bp(e) {
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
  function Hp(e) {
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
  var Jn = B.d;
  B.d = {
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
          Me(p), ct(p, "link", e), p._p = new Promise(function(w, N) {
            p.onload = w, p.onerror = N;
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
  var Eo = null;
  function Qp(e, t, n) {
    if (Eo === null) {
      var l = /* @__PURE__ */ new Map(), a = Eo = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = Eo, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
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
  function Ip(e, t, n) {
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
  function $p(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function gy(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = rr(l.href), r = t.querySelector(
          ai(a)
        );
        if (r) {
          t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ko.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = r, Me(r);
          return;
        }
        r = t.ownerDocument || t, l = Fp(l), (a = nn.get(a)) && Fs(l, a), r = r.createElement("link"), Me(r);
        var u = r;
        u._p = new Promise(function(f, p) {
          u.onload = f, u.onerror = p;
        }), ct(r, "link", l), n.instance = r;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = ko.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
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
  function ko() {
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, xo = /* @__PURE__ */ new Map(), t.forEach(by, e), xo = null, ko.call(e));
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
      a = t.instance, u = a.getAttribute("data-precedence"), r = n.get(u) || l, r === l && n.set(null, a), n.set(u, a), this.count++, l = ko.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), r ? r.parentNode.insertBefore(a, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ii = {
    $$typeof: ee,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0
  };
  function vy(e, t, n, l, a, r, u, f, p) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Zl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.hiddenUpdates = Zl(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = r, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Pp(e, t, n, l, a, r, u, f, p, w, N, z) {
    return e = new vy(
      e,
      t,
      n,
      u,
      p,
      w,
      N,
      z,
      f
    ), t = 1, r === !0 && (t |= 24), r = Ht(3, null, null, t), e.current = r, r.stateNode = e, t = xu(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Ou(r), e;
  }
  function Kp(e) {
    return e ? (e = ja, e) : ja;
  }
  function Zp(e, t, n, l, a, r) {
    a = Kp(a), l.context === null ? l.context = a : l.pendingContext = a, l = wl(t), l.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (l.callback = r), n = Tl(e, l, t), n !== null && (Rt(n, e, t), Br(n, e, t));
  }
  function Wp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Is(e, t) {
    Wp(e, t), (e = e.alternate) && Wp(e, t);
  }
  function Jp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = aa(e, 67108864);
      t !== null && Rt(t, e, 67108864), Is(e, 67108864);
    }
  }
  function em(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ft();
      t = Wl(t);
      var n = aa(e, t);
      n !== null && Rt(n, e, t), Is(e, t);
    }
  }
  var _o = !0;
  function Sy(e, t, n, l) {
    var a = R.T;
    R.T = null;
    var r = B.p;
    try {
      B.p = 2, $s(e, t, n, l);
    } finally {
      B.p = r, R.T = a;
    }
  }
  function wy(e, t, n, l) {
    var a = R.T;
    R.T = null;
    var r = B.p;
    try {
      B.p = 8, $s(e, t, n, l);
    } finally {
      B.p = r, R.T = a;
    }
  }
  function $s(e, t, n, l) {
    if (_o) {
      var a = Ps(l);
      if (a === null)
        Ms(
          e,
          t,
          l,
          No,
          n
        ), nm(e, l);
      else if (Ey(
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
                f = aa(r, 2), f !== null && Rt(f, r, 2), fo(), Is(r, 2);
            }
          if (r = Ps(l), r === null && Ms(
            e,
            t,
            l,
            No,
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
  function Ps(e) {
    return e = Zo(e), Ks(e);
  }
  var No = null;
  function Ks(e) {
    if (No = null, e = fl(e), e !== null) {
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
    return No = e, null;
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
          case Ea:
            return 8;
          case al:
          case rl:
            return 32;
          case $l:
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
  function Ey(e, t, n, l, a) {
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
  function Oo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ps(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Ko = l, n.target.dispatchEvent(l), Ko = null;
      } else
        return t = dl(n), t !== null && Jp(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function am(e, t, n) {
    Oo(e) && n.delete(t);
  }
  function ky() {
    Zs = !1, Rl !== null && Oo(Rl) && (Rl = null), Ml !== null && Oo(Ml) && (Ml = null), Ll !== null && Oo(Ll) && (Ll = null), oi.forEach(am), ui.forEach(am);
  }
  function Co(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zs || (Zs = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      ky
    )));
  }
  var zo = null;
  function rm(e) {
    zo !== e && (zo = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        zo === e && (zo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (Ks(l || n) === null)
              continue;
            break;
          }
          var r = dl(n);
          r !== null && (e.splice(t, 3), t -= 3, Pu(
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
      return Co(p, e);
    }
    Rl !== null && Co(Rl, e), Ml !== null && Co(Ml, e), Ll !== null && Co(Ll, e), oi.forEach(t), ui.forEach(t);
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
            else if (Ks(a) !== null) continue;
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
  B.findDOMNode = function(e) {
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
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Pp(
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
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (p = n.formState)), t = Pp(
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
    ), t.context = Kp(null), n = t.current, l = Ft(), l = Wl(l), a = wl(l), a.callback = null, Tl(n, a, l), n = l, t.current.lanes = n, Ln(t, n), _n(t), e[cl] = t.current, Rs(e), new Do(t);
  }, ym.version = "19.2.6", ym;
}
var hv;
function ex() {
  if (hv) return n0.exports;
  hv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), n0.exports = Jk(), n0.exports;
}
ex();
(function() {
  var i = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width:1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width:576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width:576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width:1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, o = document.createElement("style");
  o.type = "text/css", o.styleSheet ? o.styleSheet.cssText = i : o.appendChild(document.createTextNode(i)), document.head.appendChild(o);
})();
const gv = {
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
}, yv = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], bv = (i) => i.toLowerCase().split(" ").join("_"), tx = (i, o) => {
  if (!o) return !0;
  const s = o.split(",");
  for (let d = 0; d < s.length; d += 1) {
    const c = bv(s[d]);
    for (let h = 0; h < yv.length; h += 1) {
      const T = yv[h];
      if (bv(i[T] || "").includes(c)) return !0;
    }
  }
  return !1;
}, nx = (i) => ({
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
}), vv = "No events to show.", Y0 = ({
  children: i,
  header: o,
  ctaButton: s,
  dataSource: d,
  maxItems: c,
  noFeedText: h = vv
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
          defaultProps: gv
        }
      ) : null,
      renderBody: /* @__PURE__ */ Vl.jsx(X1, { children: i }),
      dataTransformer: nx,
      dataFilter: tx,
      dataSource: d,
      defaultProps: gv,
      noFeedText: h.trim() ? h : vv,
      maxItems: c
    }
  )
);
Y0.propTypes = {
  header: G0,
  ctaButton: V0,
  dataSource: Y1,
  maxItems: Et.number,
  noFeedText: Et.string,
  children: Et.element
};
const lx = Et.shape({
  color: Et.oneOf(["white", "dark"]),
  text: Et.string
}), ax = Et.shape({
  color: Et.oneOf(["gold", "maroon", "gray", "dark"]),
  text: Et.string,
  url: Et.string
}), rx = Et.shape({
  url: Et.string.isRequired,
  filters: Et.string
}).isRequired, Q1 = {
  header: lx,
  ctaButton: ax,
  dataSource: rx,
  maxItems: Et.number,
  noFeedText: Et.string
}, ix = (i) => i.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), Sv = (i) => i.toLocaleString("en-US", {
  timeZone: "UTC"
}), x0 = (i) => {
  let o = i.split("T");
  return o = o.length > 1 ? o.join("T") : `${o[0].split(":")[0]}T00:00:00Z`, o;
}, wv = (i) => {
  let o = i.getHours(), s = i.getMinutes();
  const d = o >= 12 ? "p.m." : "a.m.";
  return o %= 12, o = o || 12, s = s < 10 ? `0${s}` : s, `${o}:${s} ${d}`;
}, I1 = (i, o) => {
  const s = x0(i);
  let d = Sv(new Date(s));
  if (d = wv(new Date(d)), !o || i === o)
    return d;
  const c = x0(o);
  let h = Sv(new Date(c));
  return h = wv(new Date(h)), `${d} to ${h}`;
}, uh = (i, o) => {
  const s = x0(i);
  return {
    ISO: s.split("T")[0],
    COMPLETE: ix(new Date(s))
  }[o];
};
function ox(i) {
  var o = /* @__PURE__ */ Object.create(null);
  return function(s) {
    return o[s] === void 0 && (o[s] = i(s)), o[s];
  };
}
var ux = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, sx = /* @__PURE__ */ ox(
  function(i) {
    return ux.test(i) || i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && i.charCodeAt(2) < 91;
  }
  /* Z+1 */
), an = "-ms-", Nm = "-moz-", wt = "-webkit-", $1 = "comm", bh = "rule", F0 = "decl", cx = "@import", fx = "@namespace", P1 = "@keyframes", dx = "@layer", K1 = Math.abs, X0 = String.fromCharCode, A0 = Object.assign;
function px(i, o) {
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
function km(i, o) {
  return o.push(i), i;
}
function mx(i, o) {
  return i.map(o).join("");
}
function Tv(i, o) {
  return i.filter(function(s) {
    return !Lo(s, o);
  });
}
var vh = 1, xc = 1, J1 = 0, sr = 0, On = 0, Nc = "";
function Sh(i, o, s, d, c, h, T, A) {
  return { value: i, root: o, parent: s, type: d, props: c, children: h, line: vh, column: xc, length: T, return: "", siblings: A };
}
function qo(i, o) {
  return A0(Sh("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, o);
}
function vc(i) {
  for (; i.root; )
    i = qo(i.root, { children: [i] });
  km(i, i.siblings);
}
function hx() {
  return On;
}
function gx() {
  return On = sr > 0 ? tl(Nc, --sr) : 0, xc--, On === 10 && (xc = 1, vh--), On;
}
function pi() {
  return On = sr < J1 ? tl(Nc, sr++) : 0, xc++, On === 10 && (xc = 1, vh++), On;
}
function Qo() {
  return tl(Nc, sr);
}
function Jm() {
  return sr;
}
function wh(i, o) {
  return fc(Nc, i, o);
}
function zm(i) {
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
function yx(i) {
  return vh = xc = 1, J1 = fi(Nc = i), sr = 0, [];
}
function bx(i) {
  return Nc = "", i;
}
function l0(i) {
  return Z1(wh(sr - 1, _0(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function vx(i) {
  for (; (On = Qo()) && On < 33; )
    pi();
  return zm(i) > 2 || zm(On) > 3 ? "" : " ";
}
function Sx(i, o) {
  for (; --o && pi() && !(On < 48 || On > 102 || On > 57 && On < 65 || On > 70 && On < 97); )
    ;
  return wh(i, Jm() + (o < 6 && Qo() == 32 && pi() == 32));
}
function _0(i) {
  for (; pi(); )
    switch (On) {
      // ] ) " '
      case i:
        return sr;
      // " '
      case 34:
      case 39:
        i !== 34 && i !== 39 && _0(On);
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
function wx(i, o) {
  for (; pi() && i + On !== 57; )
    if (i + On === 84 && Qo() === 47)
      break;
  return "/*" + wh(o, sr - 1) + "*" + X0(i === 47 ? i : pi());
}
function Tx(i) {
  for (; !zm(Qo()); )
    pi();
  return wh(i, sr);
}
function Ex(i) {
  return bx(eh("", null, null, null, [""], i = yx(i), 0, [0], i));
}
function eh(i, o, s, d, c, h, T, A, x) {
  for (var C = 0, L = 0, M = T, D = 0, te = 0, G = 0, Y = 1, W = 1, J = 1, H = 0, be = "", ee = c, ne = h, q = d, V = be; W; )
    switch (G = H, H = pi()) {
      // (
      case 40:
        if (G != 108 && tl(V, M - 1) == 58) {
          Wm(V += Je(l0(H), "&", "&\f"), "&\f", K1(C ? A[C - 1] : 0)) != -1 && (J = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        V += l0(H);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        V += vx(G);
        break;
      // \
      case 92:
        V += Sx(Jm() - 1, 7);
        continue;
      // /
      case 47:
        switch (Qo()) {
          case 42:
          case 47:
            km(kx(wx(pi(), Jm()), o, s, x), x), (zm(G || 1) == 5 || zm(Qo() || 1) == 5) && fi(V) && fc(V, -1, void 0) !== " " && (V += " ");
            break;
          default:
            V += "/";
        }
        break;
      // {
      case 123 * Y:
        A[C++] = fi(V) * J;
      // } ; \0
      case 125 * Y:
      case 59:
      case 0:
        switch (H) {
          // \0 }
          case 0:
          case 125:
            W = 0;
          // ;
          case 59 + L:
            J == -1 && (V = Je(V, /\f/g, "")), te > 0 && (fi(V) - M || Y === 0 && G === 47) && km(te > 32 ? kv(V + ";", d, s, M - 1, x) : kv(Je(V, " ", "") + ";", d, s, M - 2, x), x);
            break;
          // @ ;
          case 59:
            V += ";";
          // { rule/at-rule
          default:
            if (km(q = Ev(V, o, s, C, L, c, A, be, ee = [], ne = [], M, h), h), H === 123)
              if (L === 0)
                eh(V, o, q, q, ee, h, M, A, ne);
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
                L ? eh(i, q, q, d && km(Ev(i, q, q, 0, 0, c, A, be, c, ee = [], M, ne), ne), c, ne, M, A, d ? ee : ne) : eh(V, q, q, q, [""], ne, 0, A, ne);
              }
        }
        C = L = te = 0, Y = J = 1, be = V = "", M = T;
        break;
      // :
      case 58:
        M = 1 + fi(V), te = G;
      default:
        if (Y < 1) {
          if (H == 123)
            --Y;
          else if (H == 125 && Y++ == 0 && gx() == 125)
            continue;
        }
        switch (V += X0(H), H * Y) {
          // &
          case 38:
            J = L > 0 ? 1 : (V += "\f", -1);
            break;
          // ,
          case 44:
            A[C++] = (fi(V) - 1) * J, J = 1;
            break;
          // @
          case 64:
            Qo() === 45 && (V += l0(pi())), D = Qo(), L = M = fi(be = V += Tx(Jm())), H++;
            break;
          // -
          case 45:
            G === 45 && fi(V) == 2 && (Y = 0);
        }
    }
  return h;
}
function Ev(i, o, s, d, c, h, T, A, x, C, L, M) {
  for (var D = c - 1, te = c === 0 ? h : [""], G = W1(te), Y = 0, W = 0, J = 0; Y < d; ++Y)
    for (var H = 0, be = fc(i, D + 1, D = K1(W = T[Y])), ee = i; H < G; ++H)
      (ee = Z1(W > 0 ? te[H] + " " + be : Je(be, /&\f/g, te[H]))) && (x[J++] = ee);
  return Sh(i, o, s, c === 0 ? bh : A, x, C, L, M);
}
function kx(i, o, s, d) {
  return Sh(i, o, s, $1, X0(hx()), fc(i, 2, -2), 0, d);
}
function kv(i, o, s, d, c) {
  return Sh(i, o, s, F0, fc(i, 0, d), fc(i, d + 1, -1), d, c);
}
function eS(i, o, s) {
  switch (px(i, o)) {
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
      return Nm + i + i;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return wt + i + Nm + i + an + i + i;
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
            return Je(i, /(.+:)(.+)-([^]+)/, "$1" + wt + "$2-$3$1" + Nm + (tl(i, o + 3) == 108 ? "$3" : "$2-$3")) + i;
          // (s)tretch
          case 115:
            return ~Wm(i, "stretch", 0) ? eS(Je(i, "stretch", "fill-available"), o, s) + i : i;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return Je(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(d, c, h, T, A, x, C) {
        return an + c + ":" + h + C + (T ? an + c + "-span:" + (A ? x : +x - +h) + C : "") + i;
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
function xx(i, o, s, d) {
  switch (i.type) {
    case dx:
      if (i.children.length) break;
    case cx:
    case fx:
    case F0:
      return i.return = i.return || i.value;
    case $1:
      return "";
    case P1:
      return i.return = i.value + "{" + sh(i.children, d) + "}";
    case bh:
      if (!fi(i.value = i.props.join(","))) return "";
  }
  return fi(s = sh(i.children, d)) ? i.return = i.value + "{" + s + "}" : "";
}
function Ax(i) {
  var o = W1(i);
  return function(s, d, c, h) {
    for (var T = "", A = 0; A < o; A++)
      T += i[A](s, d, c, h) || "";
    return T;
  };
}
function _x(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function Nx(i, o, s, d) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case F0:
        i.return = eS(i.value, i.length, s);
        return;
      case P1:
        return sh([qo(i, { value: Je(i.value, "@", "@" + wt) })], d);
      case bh:
        if (i.length)
          return mx(s = i.props, function(c) {
            switch (Lo(c, d = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                vc(qo(i, { props: [Je(c, /:(read-\w+)/, ":" + Nm + "$1")] })), vc(qo(i, { props: [c] })), A0(i, { props: Tv(s, d) });
                break;
              // :placeholder
              case "::placeholder":
                vc(qo(i, { props: [Je(c, /:(plac\w+)/, ":" + wt + "input-$1")] })), vc(qo(i, { props: [Je(c, /:(plac\w+)/, ":" + Nm + "$1")] })), vc(qo(i, { props: [Je(c, /:(plac\w+)/, an + "input-$1")] })), vc(qo(i, { props: [c] })), A0(i, { props: Tv(s, d) });
                break;
            }
            return "";
          });
    }
}
var Ut = { env: { NODE_ENV: "production" } }, a0, r0;
const dc = typeof Ut < "u" && Ut.env !== void 0 && (Ut.env.REACT_APP_SC_ATTR || Ut.env.SC_ATTR) || "data-styled", tS = "active", nS = "data-styled-version", Th = "6.4.2", Q0 = `/*!sc*/
`, Om = typeof window < "u" && typeof document < "u";
function xv(i) {
  if (typeof Ut < "u" && Ut.env !== void 0) {
    const o = Ut.env[i];
    if (o !== void 0 && o !== "") return o !== "false";
  }
}
const Ox = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (r0 = (a0 = xv("REACT_APP_SC_DISABLE_SPEEDY")) !== null && a0 !== void 0 ? a0 : xv("SC_DISABLE_SPEEDY")) !== null && r0 !== void 0 ? r0 : typeof Ut < "u" && Ut.env !== void 0 && Ut.env.NODE_ENV !== "production"), Cx = "sc-keyframes-", zx = Ut.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
  })(zx[i], ...o).trim());
}
const Dx = 1 << 30;
let th = /* @__PURE__ */ new Map(), ch = /* @__PURE__ */ new Map(), nh = 1;
const Vm = (i) => {
  if (th.has(i)) return th.get(i);
  for (; ch.has(nh); ) nh++;
  const o = nh++;
  if (Ut.env.NODE_ENV !== "production" && ((0 | o) < 0 || o > Dx)) throw Lm(16, `${o}`);
  return th.set(i, o), ch.set(o, i), o;
}, Rx = (i) => ch.get(i), Mx = (i, o) => {
  nh = o + 1, th.set(i, o), ch.set(o, i);
}, Av = /invalid hook call/i, Ym = /* @__PURE__ */ new Set(), Lx = (i, o) => {
  if (Ut.env.NODE_ENV !== "production") {
    const s = `The component ${i}${o ? ` with the id of "${o}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, d = console.error;
    try {
      let c = !0;
      console.error = (h, ...T) => {
        Av.test(h) ? (c = !1, Ym.delete(s)) : d(h, ...T);
      }, typeof kt.useState == "function" && kt.useState(null), c && !Ym.has(s) && (console.warn(s), Ym.add(s));
    } catch (c) {
      Av.test(c.message) && Ym.delete(s);
    } finally {
      console.error = d;
    }
  }
}, I0 = Object.freeze([]), Ac = Object.freeze({});
function Ux(i, o, s = Ac) {
  return i.theme !== s.theme && i.theme || o || s.theme;
}
const jx = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Bx = /(^-|-$)/g;
function lS(i) {
  return i.replace(jx, "-").replace(Bx, "");
}
const Hx = /(a)(d)/gi, _v = (i) => String.fromCharCode(i + (i > 25 ? 39 : 97));
function aS(i) {
  let o, s = "";
  for (o = Math.abs(i); o > 52; o = o / 52 | 0) s = _v(o % 52) + s;
  return (_v(o % 52) + s).replace(Hx, "$1-$2");
}
const N0 = 5381, rc = (i, o) => {
  let s = o.length;
  for (; s; ) i = 33 * i ^ o.charCodeAt(--s);
  return i;
}, rS = (i) => rc(N0, i);
function qx(i) {
  return aS(rS(i) >>> 0);
}
function $0(i) {
  return Ut.env.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function lh(i) {
  return typeof i == "string" && (Ut.env.NODE_ENV === "production" || i.charAt(0) === i.charAt(0).toLowerCase());
}
function Gx(i) {
  return lh(i) ? `styled.${i}` : `Styled(${$0(i)})`;
}
const iS = Symbol.for("react.memo"), Vx = Symbol.for("react.forward_ref"), Yx = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, Fx = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, oS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Xx = { [Vx]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [iS]: oS };
function Nv(i) {
  return ("type" in (o = i) && o.type.$$typeof) === iS ? oS : "$$typeof" in i ? Xx[i.$$typeof] : Yx;
  var o;
}
const Qx = Object.defineProperty, Ix = Object.getOwnPropertyNames, $x = Object.getOwnPropertySymbols, Px = Object.getOwnPropertyDescriptor, Kx = Object.getPrototypeOf, Zx = Object.prototype;
function uS(i, o, s) {
  if (typeof o != "string") {
    const d = Kx(o);
    d && d !== Zx && uS(i, d, s);
    const c = Ix(o).concat($x(o)), h = Nv(i), T = Nv(o);
    for (let A = 0; A < c.length; ++A) {
      const x = c[A];
      if (!(x in Fx || s && s[x] || T && x in T || h && x in h)) {
        const C = Px(o, x);
        try {
          Qx(i, x, C);
        } catch {
        }
      }
    }
  }
  return i;
}
function Eh(i) {
  return typeof i == "function";
}
const Wx = Symbol.for("react.forward_ref");
function sS(i) {
  return i != null && (typeof i == "object" || typeof i == "function") && i.$$typeof === Wx && "styledComponentId" in i;
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
function O0(i, o, s = !1) {
  if (!s && !pc(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o)) for (let d = 0; d < o.length; d++) i[d] = O0(i[d], o[d]);
  else if (pc(o)) for (const d in o) i[d] = O0(i[d], o[d]);
  return i;
}
function cS(i, o) {
  Object.defineProperty(i, "toString", { value: o });
}
const Jx = class {
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
    for (let h = d; h < c; h++) o += this.tag.getRule(h) + Q0;
    return o;
  }
}, e3 = `style[${dc}][${nS}="${Th}"]`, t3 = new RegExp(`^${dc}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), Cv = (i) => typeof ShadowRoot < "u" && i instanceof ShadowRoot || "host" in i && i.nodeType === 11, C0 = (i) => {
  if (!i) return document;
  if (Cv(i)) return i;
  if ("getRootNode" in i) {
    const o = i.getRootNode();
    if (Cv(o)) return o;
  }
  return document;
}, n3 = (i, o, s) => {
  const d = s.split(",");
  let c;
  for (let h = 0, T = d.length; h < T; h++) (c = d[h]) && i.registerName(o, c);
}, l3 = (i, o) => {
  var s;
  const d = ((s = o.textContent) !== null && s !== void 0 ? s : "").split(Q0), c = [];
  for (let h = 0, T = d.length; h < T; h++) {
    const A = d[h].trim();
    if (!A) continue;
    const x = A.match(t3);
    if (x) {
      const C = 0 | parseInt(x[1], 10), L = x[2];
      C !== 0 && (Mx(L, C), n3(i, L, x[3]), i.getTag().insertRules(C, c)), c.length = 0;
    } else c.push(A);
  }
}, i0 = (i) => {
  const o = C0(i.options.target).querySelectorAll(e3);
  for (let s = 0, d = o.length; s < d; s++) {
    const c = o[s];
    c && c.getAttribute(dc) !== tS && (l3(i, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
let bm = !1;
function a3() {
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
    const C = Array.from(x.querySelectorAll(`style[${dc}]`));
    return C[C.length - 1];
  })(d), T = h !== void 0 ? h.nextSibling : null;
  c.setAttribute(dc, tS), c.setAttribute(nS, Th);
  const A = o || a3();
  return A && c.setAttribute("nonce", A), d.insertBefore(c, T), c;
}, r3 = class {
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
}, i3 = class {
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
let zv = Om;
const o3 = { isServer: !Om, useCSSOMInjection: !Ox };
class kh {
  static registerId(o) {
    return Vm(o);
  }
  constructor(o = Ac, s = {}, d) {
    this.options = Object.assign(Object.assign({}, o3), o), this.gs = s, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(d), this.server = !!o.isServer, !this.server && Om && zv && (zv = !1, i0(this)), cS(this, () => ((c) => {
      const h = c.getTag(), { length: T } = h;
      let A = "";
      for (let x = 0; x < T; x++) {
        const C = Rx(x);
        if (C === void 0) continue;
        const L = c.names.get(C);
        if (L === void 0 || !L.size) continue;
        const M = h.getGroup(x);
        if (M.length === 0) continue;
        const D = dc + ".g" + x + '[id="' + C + '"]';
        let te = "";
        for (const G of L) G.length > 0 && (te += G + ",");
        A += M + D + '{content:"' + te + '"}' + Q0;
      }
      return A;
    })(this));
  }
  rehydrate() {
    !this.server && Om && i0(this);
  }
  reconstructWithOptions(o, s = !0) {
    const d = new kh(Object.assign(Object.assign({}, this.options), o), this.gs, s && this.names || void 0);
    return d.keyframeIds = new Set(this.keyframeIds), !this.server && Om && o.target !== this.options.target && C0(this.options.target) !== C0(o.target) && i0(d), d;
  }
  allocateGSInstance(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (o = (({ useCSSOMInjection: s, target: d, nonce: c }) => s ? new r3(d, c) : new i3(d, c))(this.options), new Jx(o)));
    var o;
  }
  hasNameForId(o, s) {
    var d, c;
    return (c = (d = this.names.get(o)) === null || d === void 0 ? void 0 : d.has(s)) !== null && c !== void 0 && c;
  }
  registerName(o, s) {
    Vm(o), o.startsWith(Cx) && this.keyframeIds.add(o);
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
const dS = /* @__PURE__ */ new WeakSet(), u3 = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function s3(i, o) {
  return o == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || i in u3 || i.startsWith("--") ? String(o).trim() : o + "px";
}
const nc = 47;
function Dv(i) {
  if (i.charCodeAt(0) === 45 && i.charCodeAt(1) === 45) return i;
  let o = "";
  for (let s = 0; s < i.length; s++) {
    const d = i.charCodeAt(s);
    o += d >= 65 && d <= 90 ? "-" + String.fromCharCode(d + 32) : i[s];
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
const c3 = Symbol.for("sc-keyframes");
function z0(i) {
  return typeof i == "object" && i !== null && c3 in i;
}
function pS(i) {
  return Eh(i) && !(i.prototype && i.prototype.isReactComponent);
}
const mS = (i) => i == null || i === !1 || i === "", f3 = Symbol.for("react.client.reference");
function Rv(i) {
  return i.$$typeof === f3;
}
function Mv(i) {
  const o = i.$$id, s = (o && o.includes("#") ? o.split("#").pop() : o) || i.name || "unknown";
  console.warn(`Interpolating a client component (${s}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function hS(i, o) {
  for (const s in i) {
    const d = i[s];
    i.hasOwnProperty(s) && !mS(d) && (Array.isArray(d) && dS.has(d) || Eh(d) ? o.push(Dv(s) + ":", d, ";") : pc(d) ? (o.push(s + " {"), hS(d, o), o.push("}")) : o.push(Dv(s) + ": " + s3(s, d) + ";"));
  }
}
function ic(i, o, s, d, c = []) {
  if (mS(i)) return c;
  const h = typeof i;
  if (h === "string") return c.push(i), c;
  if (h === "function") {
    if (Rv(i)) return Ut.env.NODE_ENV !== "production" && Mv(i), c;
    if (pS(i) && o) {
      const T = i(o);
      return Ut.env.NODE_ENV === "production" || typeof T != "object" || Array.isArray(T) || z0(T) || pc(T) || T === null || console.error(`${$0(i)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), ic(T, o, s, d, c);
    }
    return c.push(i), c;
  }
  if (Array.isArray(i)) {
    for (let T = 0; T < i.length; T++) ic(i[T], o, s, d, c);
    return c;
  }
  return sS(i) ? (c.push(`.${i.styledComponentId}`), c) : z0(i) ? (s ? (i.inject(s, d), c.push(i.getName(d))) : c.push(i), c) : Rv(i) ? (Ut.env.NODE_ENV !== "production" && Mv(i), c) : pc(i) ? i.toString !== Object.prototype.toString ? (c.push(i.toString()), c) : (hS(i, c), c) : (c.push(i.toString()), c);
}
const d3 = rS(Th);
class p3 {
  constructor(o, s, d) {
    this.rules = o, this.componentId = s, this.baseHash = rc(d3, s), this.baseStyle = d, kh.registerId(s);
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
          typeof x == "string" ? h += x : x != null && x !== !1 && (Ut.env.NODE_ENV === "production" || typeof x != "object" || Array.isArray(x) || z0(x) || pc(x) || console.error(`${$0(A)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), h += Ov(ic(x, o, s, d)));
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
const m3 = /&/g;
function gS(i, o) {
  let s = 0;
  for (; --o >= 0 && i.charCodeAt(o) === 92; ) s++;
  return !(1 & ~s);
}
function o0(i) {
  const o = i.length;
  let s = "", d = 0, c = 0, h = 0, T = !1, A = !1;
  for (let x = 0; x < o; x++) {
    const C = i.charCodeAt(x);
    if (h !== 0 || T || C !== nc || i.charCodeAt(x + 1) !== 42) if (T) C === 42 && i.charCodeAt(x + 1) === nc && (T = !1, x++);
    else if (C !== 34 && C !== 39 || gS(i, x)) {
      if (h === 0) if (C === 123) c++;
      else if (C === 125) {
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
      } else C === 59 && c === 0 && (s += i.substring(d, x + 1), d = x + 1);
    } else h === 0 ? h = C : h === C && (h = 0);
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
function h3({ options: i = Ac, plugins: o = I0 } = Ac) {
  let s, d, c;
  const h = (D, te, G) => G.startsWith(d) && G.endsWith(d) && G.replaceAll(d, "").length > 0 ? `.${s}` : D, T = o.slice();
  T.push((D) => {
    D.type === bh && D.value.includes("&") && (c || (c = new RegExp(`\\${d}\\b`, "g")), D.props[0] = D.props[0].replace(m3, d).replace(c, h));
  }), i.prefix && T.push(Nx), T.push(xx);
  let A = [];
  const x = Ax(T.concat(_x((D) => A.push(D)))), C = (D, te = "", G = "", Y = "&") => {
    s = Y, d = te, c = void 0;
    const W = (function(H) {
      const be = H.indexOf("//") !== -1, ee = H.indexOf("}") !== -1;
      if (!be && !ee) return H;
      if (!be) return o0(H);
      const ne = H.length;
      let q = "", V = 0, K = 0, ke = 0, Be = 0, qe = 0, He = !1;
      for (; K < ne; ) {
        const _e = H.charCodeAt(K);
        if (_e !== 34 && _e !== 39 || gS(H, K)) if (ke === 0) if (_e === nc && K + 1 < ne && H.charCodeAt(K + 1) === 42) {
          for (K += 2; K + 1 < ne && (H.charCodeAt(K) !== 42 || H.charCodeAt(K + 1) !== nc); ) K++;
          K += 2;
        } else if (_e !== 40) if (_e !== 41) if (Be > 0) K++;
        else if (_e === 42 && K + 1 < ne && H.charCodeAt(K + 1) === nc) q += H.substring(V, K), K += 2, V = K, He = !0;
        else if (_e === nc && K + 1 < ne && H.charCodeAt(K + 1) === nc) {
          for (q += H.substring(V, K); K < ne && H.charCodeAt(K) !== 10; ) K++;
          V = K, He = !0;
        } else _e === 123 ? qe++ : _e === 125 && qe--, K++;
        else Be > 0 && Be--, K++;
        else Be++, K++;
        else K++;
        else ke === 0 ? ke = _e : ke === _e && (ke = 0), K++;
      }
      return He ? (V < ne && (q += H.substring(V)), qe === 0 ? q : o0(q)) : qe === 0 ? H : o0(H);
    })(D);
    let J = Ex(G || te ? G + " " + te + " { " + W + " }" : W);
    return i.namespace && (J = yS(J, i.namespace)), A = [], sh(J, x), A;
  }, L = i;
  let M = N0;
  for (let D = 0; D < o.length; D++) o[D].name || Lm(15), M = rc(M, o[D].name);
  return L != null && L.namespace && (M = rc(M, L.namespace)), L != null && L.prefix && (M = rc(M, "p")), C.hash = M !== N0 ? M.toString() : "", C;
}
const g3 = new kh(), y3 = h3(), bS = kt.createContext({ shouldForwardProp: void 0, styleSheet: g3, stylis: y3, stylisPlugins: void 0 });
bS.Consumer;
function b3() {
  return kt.useContext(bS);
}
const vS = kt.createContext(void 0);
vS.Consumer;
const Lv = Object.prototype.hasOwnProperty, u0 = {};
function v3(i, o) {
  const s = typeof i != "string" ? "sc" : lS(i);
  u0[s] = (u0[s] || 0) + 1;
  const d = s + "-" + qx(Th + s + u0[s]);
  return o ? o + "-" + d : d;
}
let s0;
function S3(i, o, s) {
  const d = sS(i), c = i, h = !lh(i), { attrs: T = I0, componentId: A = v3(o.displayName, o.parentComponentId), displayName: x = Gx(i) } = o, C = o.displayName && o.componentId ? lS(o.displayName) + "-" + o.componentId : o.componentId || A, L = d && c.attrs ? c.attrs.concat(T).filter(Boolean) : T;
  let { shouldForwardProp: M } = o;
  if (d && c.shouldForwardProp) {
    const Y = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      const W = o.shouldForwardProp;
      M = (J, H) => Y(J, H) && W(J, H);
    } else M = Y;
  }
  const D = new p3(s, C, d ? c.componentStyle : void 0);
  function te(Y, W) {
    return (function(J, H, be) {
      const { attrs: ee, componentStyle: ne, defaultProps: q, foldedComponentIds: V, styledComponentId: K, target: ke } = J, Be = kt.useContext(vS), qe = b3(), He = J.shouldForwardProp || qe.shouldForwardProp;
      Ut.env.NODE_ENV !== "production" && kt.useDebugValue && kt.useDebugValue(K);
      const _e = Ux(H, Be, q) || Ac;
      let gt, Ie;
      {
        const re = kt.useRef(null), se = re.current;
        if (se !== null && se[1] === _e && se[2] === qe.styleSheet && se[3] === qe.stylis && se[7] === ne && (function(ie, we, ue) {
          const $ = ie, ge = we;
          let yt = 0;
          for (const tt in ge) if (Lv.call(ge, tt) && (yt++, $[tt] !== ge[tt])) return !1;
          return yt === ue;
        })(se[0], H, se[4])) gt = se[5], Ie = se[6];
        else {
          gt = (function(we, ue, $) {
            const ge = Object.assign(Object.assign({}, ue), { className: void 0, theme: $ }), yt = we.length > 1;
            for (let tt = 0; tt < we.length; tt++) {
              const fn = we[tt], dn = Eh(fn) ? fn(yt ? Object.assign({}, ge) : ge) : fn;
              for (const nt in dn) nt === "className" ? ge.className = xm(ge.className, dn[nt]) : nt === "style" ? ge.style = Object.assign(Object.assign({}, ge.style), dn[nt]) : nt in ue && ue[nt] === void 0 || (ge[nt] = dn[nt]);
            }
            return "className" in ue && typeof ue.className == "string" && (ge.className = xm(ge.className, ue.className)), ge;
          })(ee, H, _e), Ie = (function(we, ue, $, ge) {
            const yt = we.generateAndInjectStyles(ue, $, ge);
            return Ut.env.NODE_ENV !== "production" && kt.useDebugValue && kt.useDebugValue(yt), yt;
          })(ne, gt, qe.styleSheet, qe.stylis);
          let ie = 0;
          for (const we in H) Lv.call(H, we) && ie++;
          re.current = [H, _e, qe.styleSheet, qe.stylis, ie, gt, Ie, ne];
        }
      }
      Ut.env.NODE_ENV !== "production" && J.warnTooManyClasses && J.warnTooManyClasses(Ie);
      const U = gt.as || ke, R = (function(re, se, ie, we) {
        const ue = {};
        for (const $ in re) re[$] === void 0 || $[0] === "$" || $ === "as" || $ === "theme" && re.theme === ie || ($ === "forwardedAs" ? ue.as = re.forwardedAs : we && !we($, se) || (ue[$] = re[$], we || Ut.env.NODE_ENV !== "development" || sx($) || (s0 || (s0 = /* @__PURE__ */ new Set())).has($) || !lh(se) || se.includes("-") || (s0.add($), console.warn(`styled-components: it looks like an unknown prop "${$}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return ue;
      })(gt, U, _e, He);
      let B = xm(V, K);
      return Ie && (B += " " + Ie), gt.className && (B += " " + gt.className), R[lh(U) && U.includes("-") ? "class" : "className"] = B, be && (R.ref = be), Xv(U, R);
    })(G, Y, W);
  }
  te.displayName = x;
  let G = kt.forwardRef(te);
  return G.attrs = L, G.componentStyle = D, G.displayName = x, G.shouldForwardProp = M, G.foldedComponentIds = d ? xm(c.foldedComponentIds, c.styledComponentId) : "", G.styledComponentId = C, G.target = d ? c.target : i, Object.defineProperty(G, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(Y) {
    this._foldedDefaultProps = d ? (function(W, ...J) {
      for (const H of J) O0(W, H, !0);
      return W;
    })({}, c.defaultProps, Y) : Y;
  } }), Ut.env.NODE_ENV !== "production" && (Lx(x, C), G.warnTooManyClasses = /* @__PURE__ */ ((Y, W) => {
    let J = {}, H = !1;
    return (be) => {
      !H && (J[be] = !0, Object.keys(J).length >= 200) && (console.warn(`Over 200 classes were generated for component ${Y}${W ? ` with the id of "${W}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), H = !0, J = {});
    };
  })(x, C)), cS(G, () => `.${G.styledComponentId}`), h && uS(G, i, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), G;
}
var w3 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function Uv(i, o) {
  const s = [i[0]];
  for (let d = 0, c = o.length; d < c; d += 1) s.push(o[d], i[d + 1]);
  return s;
}
const jv = (i) => (dS.add(i), i);
function T3(i, ...o) {
  if (Eh(i) || pc(i)) return jv(ic(Uv(I0, [i, ...o])));
  const s = i;
  return o.length === 0 && s.length === 1 && typeof s[0] == "string" ? ic(s) : jv(ic(Uv(s, o)));
}
function D0(i, o, s = Ac) {
  if (!o) throw Lm(1, o);
  const d = (c, ...h) => i(o, s, T3(c, ...h));
  return d.attrs = (c) => D0(i, o, Object.assign(Object.assign({}, s), { attrs: Array.prototype.concat(s.attrs, c).filter(Boolean) })), d.withConfig = (c) => D0(i, o, Object.assign(Object.assign({}, s), c)), d;
}
const SS = (i) => D0(S3, i), P0 = SS;
w3.forEach((i) => {
  P0[i] = SS(i);
});
Ut.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://styled-components.com/docs/basics#react-native`);
const Fm = `__sc-${dc}__`;
Ut.env.NODE_ENV !== "production" && Ut.env.NODE_ENV !== "test" && typeof window < "u" && (window[Fm] || (window[Fm] = 0), window[Fm] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`), window[Fm] += 1);
const E3 = P0.ul`
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
`, k3 = () => {
  const { feeds: i } = Qv(q0);
  return /* @__PURE__ */ Vl.jsx(E3, { "data-testid": "grid-view-container", children: i == null ? void 0 : i.map((o) => /* @__PURE__ */ Vl.jsx("li", { children: /* @__PURE__ */ Vl.jsx(
    Yo,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${uh(o.startDate, "COMPLETE")} <br /> ${I1(
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
}) => (Io(() => {
  typeof window < "u" && Wv({
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
/* @__PURE__ */ Vl.jsx(Y0, { header: i, ctaButton: o, dataSource: s, maxItems: d, noFeedText: c, children: /* @__PURE__ */ Vl.jsx(k3, {}) }));
wS.propTypes = Q1;
const x3 = P0.ul`
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
`, A3 = () => {
  const { feeds: i } = Qv(q0);
  return /* @__PURE__ */ Vl.jsx(x3, { "data-testid": "list-view-container", children: i == null ? void 0 : i.map((o) => /* @__PURE__ */ Vl.jsx("li", { children: /* @__PURE__ */ Vl.jsx(
    Yo,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${uh(o.startDate, "COMPLETE")} <br /> ${I1(
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
}) => (Io(() => {
  typeof window < "u" && Wv({
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
/* @__PURE__ */ Vl.jsx(Y0, { header: i, ctaButton: o, dataSource: s, maxItems: d, noFeedText: c, children: /* @__PURE__ */ Vl.jsx(A3, {}) }));
TS.propTypes = Q1;
var c0 = { exports: {} }, vm = {}, f0 = { exports: {} }, d0 = {};
var Bv;
function _3() {
  return Bv || (Bv = 1, (function(i) {
    function o(U, R) {
      var B = U.length;
      U.push(R);
      e: for (; 0 < B; ) {
        var re = B - 1 >>> 1, se = U[re];
        if (0 < c(se, R))
          U[re] = R, U[B] = se, B = re;
        else break e;
      }
    }
    function s(U) {
      return U.length === 0 ? null : U[0];
    }
    function d(U) {
      if (U.length === 0) return null;
      var R = U[0], B = U.pop();
      if (B !== R) {
        U[0] = B;
        e: for (var re = 0, se = U.length, ie = se >>> 1; re < ie; ) {
          var we = 2 * (re + 1) - 1, ue = U[we], $ = we + 1, ge = U[$];
          if (0 > c(ue, B))
            $ < se && 0 > c(ge, ue) ? (U[re] = ge, U[$] = B, re = $) : (U[re] = ue, U[we] = B, re = we);
          else if ($ < se && 0 > c(ge, B))
            U[re] = ge, U[$] = B, re = $;
          else break e;
        }
      }
      return R;
    }
    function c(U, R) {
      var B = U.sortIndex - R.sortIndex;
      return B !== 0 ? B : U.id - R.id;
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
    var x = [], C = [], L = 1, M = null, D = 3, te = !1, G = !1, Y = !1, W = !1, J = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
    function ee(U) {
      for (var R = s(C); R !== null; ) {
        if (R.callback === null) d(C);
        else if (R.startTime <= U)
          d(C), R.sortIndex = R.expirationTime, o(x, R);
        else break;
        R = s(C);
      }
    }
    function ne(U) {
      if (Y = !1, ee(U), !G)
        if (s(x) !== null)
          G = !0, q || (q = !0, He());
        else {
          var R = s(C);
          R !== null && Ie(ne, R.startTime - U);
        }
    }
    var q = !1, V = -1, K = 5, ke = -1;
    function Be() {
      return W ? !0 : !(i.unstable_now() - ke < K);
    }
    function qe() {
      if (W = !1, q) {
        var U = i.unstable_now();
        ke = U;
        var R = !0;
        try {
          e: {
            G = !1, Y && (Y = !1, H(V), V = -1), te = !0;
            var B = D;
            try {
              t: {
                for (ee(U), M = s(x); M !== null && !(M.expirationTime > U && Be()); ) {
                  var re = M.callback;
                  if (typeof re == "function") {
                    M.callback = null, D = M.priorityLevel;
                    var se = re(
                      M.expirationTime <= U
                    );
                    if (U = i.unstable_now(), typeof se == "function") {
                      M.callback = se, ee(U), R = !0;
                      break t;
                    }
                    M === s(x) && d(x), ee(U);
                  } else d(x);
                  M = s(x);
                }
                if (M !== null) R = !0;
                else {
                  var ie = s(C);
                  ie !== null && Ie(
                    ne,
                    ie.startTime - U
                  ), R = !1;
                }
              }
              break e;
            } finally {
              M = null, D = B, te = !1;
            }
            R = void 0;
          }
        } finally {
          R ? He() : q = !1;
        }
      }
    }
    var He;
    if (typeof be == "function")
      He = function() {
        be(qe);
      };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), gt = _e.port2;
      _e.port1.onmessage = qe, He = function() {
        gt.postMessage(null);
      };
    } else
      He = function() {
        J(qe, 0);
      };
    function Ie(U, R) {
      V = J(function() {
        U(i.unstable_now());
      }, R);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, i.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : K = 0 < U ? Math.floor(1e3 / U) : 5;
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
      var B = D;
      D = R;
      try {
        return U();
      } finally {
        D = B;
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
      var B = D;
      D = U;
      try {
        return R();
      } finally {
        D = B;
      }
    }, i.unstable_scheduleCallback = function(U, R, B) {
      var re = i.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? re + B : re) : B = re, U) {
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
      return se = B + se, U = {
        id: L++,
        callback: R,
        priorityLevel: U,
        startTime: B,
        expirationTime: se,
        sortIndex: -1
      }, B > re ? (U.sortIndex = B, o(C, U), s(x) === null && U === s(C) && (Y ? (H(V), V = -1) : Y = !0, Ie(ne, B - re))) : (U.sortIndex = se, o(x, U), G || te || (G = !0, q || (q = !0, He()))), U;
    }, i.unstable_shouldYield = Be, i.unstable_wrapCallback = function(U) {
      var R = D;
      return function() {
        var B = D;
        D = R;
        try {
          return U.apply(this, arguments);
        } finally {
          D = B;
        }
      };
    };
  })(d0)), d0;
}
var Hv;
function N3() {
  return Hv || (Hv = 1, f0.exports = _3()), f0.exports;
}
var qv;
function O3() {
  if (qv) return vm;
  qv = 1;
  var i = { env: { NODE_ENV: "production" } };
  var o = N3(), s = kt, d = Iv;
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
  function C(e) {
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
          if (r === n) return C(a), e;
          if (r === l) return C(a), t;
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
  var D = Object.assign, te = Symbol.for("react.element"), G = Symbol.for("react.transitional.element"), Y = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), be = Symbol.for("react.consumer"), ee = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), Be = Symbol.for("react.activity"), qe = Symbol.for("react.memo_cache_sentinel"), He = Symbol.iterator;
  function _e(e) {
    return e === null || typeof e != "object" ? null : (e = He && e[He] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var gt = Symbol.for("react.client.reference");
  function Ie(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === gt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case H:
        return "Profiler";
      case J:
        return "StrictMode";
      case q:
        return "Suspense";
      case V:
        return "SuspenseList";
      case Be:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Y:
          return "Portal";
        case ee:
          return e.displayName || "Context";
        case be:
          return (e._context.displayName || "Context") + ".Consumer";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case K:
          return t = e.displayName || null, t !== null ? t : Ie(e.type) || "Memo";
        case ke:
          t = e._payload, e = e._init;
          try {
            return Ie(e(t));
          } catch {
          }
      }
    return null;
  }
  var U = Array.isArray, R = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = {
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
  function $(e, t) {
    ie++, se[ie] = e.current, e.current = t;
  }
  var ge = we(null), yt = we(null), tt = we(null), fn = we(null);
  function dn(e, t) {
    switch ($(tt, t), $(yt, e), $(ge, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? zp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = zp(t), e = Dp(t, e);
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
    ue(ge), $(ge, e);
  }
  function nt() {
    ue(ge), ue(yt), ue(tt);
  }
  function De(e) {
    e.memoizedState !== null && $(fn, e);
    var t = ge.current, n = Dp(t, e.type);
    t !== n && ($(yt, e), $(ge, n));
  }
  function Xl(e) {
    yt.current === e && (ue(ge), ue(yt)), fn.current === e && (ue(fn), ii._currentValue = re);
  }
  var Re, cr;
  function Ee(e) {
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
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (k) {
                  var E = k;
                }
                Reflect.construct(e, [], z);
              } else {
                try {
                  z.call();
                } catch (k) {
                  E = k;
                }
                e.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (k) {
                E = k;
              }
              (z = e()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (k) {
            if (k && E && typeof k.stack == "string")
              return [k.stack, E.stack];
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
                  var N = `
` + p[l].replace(" at new ", " at ");
                  return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      Dn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Ee(n) : "";
  }
  function yn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ee(e.type);
      case 16:
        return Ee("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ee("Suspense Fallback") : Ee("Suspense");
      case 19:
        return Ee("SuspenseList");
      case 0:
      case 15:
        return va(e.type, !1);
      case 11:
        return va(e.type.render, !1);
      case 1:
        return va(e.type, !0);
      case 31:
        return Ee("Activity");
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
  var Ql = Object.prototype.hasOwnProperty, Sa = o.unstable_scheduleCallback, wa = o.unstable_cancelCallback, bn = o.unstable_shouldYield, Il = o.unstable_requestPaint, Ye = o.unstable_now, dr = o.unstable_getCurrentPriorityLevel, Ta = o.unstable_ImmediatePriority, Ea = o.unstable_UserBlockingPriority, al = o.unstable_NormalPriority, rl = o.unstable_LowPriority, $l = o.unstable_IdlePriority, ka = o.log, vi = o.unstable_setDisableYieldValue, il = null, pt = null;
  function It(e) {
    if (typeof ka == "function" && vi(e), pt && typeof pt.setStrictMode == "function")
      try {
        pt.setStrictMode(il, e);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : pr, ol = Math.log, $t = Math.LN2;
  function pr(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ol(e) / $t | 0) | 0;
  }
  var Pl = 256, Kl = 262144, ul = 4194304;
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
  function Pt(e, t) {
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
  function $o(e, t, n, l, a, r) {
    var u = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, p = e.expirationTimes, w = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var N = 31 - rt(n), z = 1 << N;
      f[N] = 0, p[N] = -1;
      var E = w[N];
      if (E !== null)
        for (w[N] = null, N = 0; N < E.length; N++) {
          var k = E[N];
          k !== null && (k.lane &= -536870913);
        }
      n &= ~z;
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
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : tm(e.type));
  }
  function Si(e, t) {
    var n = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = n;
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
          for (e = Hp(e); e !== null; ) {
            if (n = e[oe]) return n;
            e = Hp(e);
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
  var Ti = /* @__PURE__ */ new Set(), Ei = {};
  function Tn(e, t) {
    jn(e, t), jn(e + "Capture", t);
  }
  function jn(e, t) {
    for (Ei[e] = t, e = 0; e < t.length; e++)
      Ti.add(t[e]);
  }
  var _a = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Na = {}, ea = {};
  function pl(e) {
    return Ql.call(ea, e) ? !0 : Ql.call(Na, e) ? !1 : _a.test(e) ? ea[e] = !0 : (Na[e] = !0, !1);
  }
  function En(e, t, n) {
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
  function ki(e, t, n) {
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
      e._valueTracker = ki(
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
  function Oa(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Po = /[\n"\\]/g;
  function Tt(e) {
    return e.replace(
      Po,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ml(e, t, n, l, a, r, u, f) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? b(e, u, At(t)) : n != null ? b(e, u, At(n)) : l != null && e.removeAttribute("value"), a == null && r != null && (e.defaultChecked = !!r), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + At(f) : e.removeAttribute("name");
  }
  function Ca(e, t, n, l, a, r, u, f) {
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
    t === "number" && Oa(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
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
  function I(e, t) {
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
  var Ko = null;
  function Zo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var za = null, Da = null;
  function Oc(e) {
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
  function Cc(e, t, n) {
    if (Wo) return e(t, n);
    Wo = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Wo = !1, (za !== null || Da !== null) && (fo(), za && (t = za, e = Da, Da = za = null, Oc(t), e)))
        for (t = 0; t < e.length; t++) Oc(e[t]);
    }
  }
  function Er(e, t) {
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
  var Bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jo = !1;
  if (Bn)
    try {
      var kr = {};
      Object.defineProperty(kr, "passive", {
        get: function() {
          Jo = !0;
        }
      }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
    } catch {
      Jo = !1;
    }
  var hl = null, eu = null, xi = null;
  function zc() {
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
  function Nt(e) {
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
  }, Ni = Nt(ta), xr = D({}, ta, { view: 0, detail: 0 }), xh = Nt(xr), tu, nu, Ar, Oi = D({}, xr, {
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
  }), Rc = Nt(Oi), Ah = D({}, Oi, { dataTransfer: 0 }), _h = Nt(Ah), Nh = D({}, xr, { relatedTarget: 0 }), lu = Nt(Nh), Oh = D({}, ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ch = Nt(Oh), zh = D({}, ta, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Dh = Nt(zh), Rh = D({}, ta, { data: 0 }), Mc = Nt(Rh), Mh = {
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
  var Bh = D({}, xr, {
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
  }), Hh = Nt(Bh), qh = D({}, Oi, {
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
  }), Lc = Nt(qh), Gh = D({}, xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: au
  }), Vh = Nt(Gh), Yh = D({}, ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fh = Nt(Yh), Xh = D({}, Oi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qh = Nt(Xh), Ih = D({}, ta, {
    newState: 0,
    oldState: 0
  }), $h = Nt(Ih), Ph = [9, 13, 27, 32], ru = Bn && "CompositionEvent" in window, _r = null;
  Bn && "documentMode" in document && (_r = document.documentMode);
  var Kh = Bn && "TextEvent" in window && !_r, Uc = Bn && (!ru || _r && 8 < _r && 11 >= _r), jc = " ", Bc = !1;
  function Hc(e, t) {
    switch (e) {
      case "keyup":
        return Ph.indexOf(t.keyCode) !== -1;
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
        return t.which !== 32 ? null : (Bc = !0, jc);
      case "textInput":
        return e = t.data, e === jc && Bc ? null : e;
      default:
        return null;
    }
  }
  function Wh(e, t) {
    if (Ra)
      return e === "compositionend" || !ru && Hc(e, t) ? (e = zc(), xi = eu = hl = null, Ra = !1, e) : null;
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
    za ? Da ? Da.push(l) : Da = [l] : za = l, t = vo(t, "onChange"), 0 < t.length && (n = new Ni(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var Nr = null, Or = null;
  function eg(e) {
    xp(e, 0);
  }
  function Ci(e) {
    var t = Mt(e);
    if (Tr(t)) return e;
  }
  function Yc(e, t) {
    if (e === "change") return t;
  }
  var Fc = !1;
  if (Bn) {
    var iu;
    if (Bn) {
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
    Nr && (Nr.detachEvent("onpropertychange", Ic), Or = Nr = null);
  }
  function Ic(e) {
    if (e.propertyName === "value" && Ci(Or)) {
      var t = [];
      Vc(
        t,
        Or,
        e,
        Zo(e)
      ), Cc(eg, t);
    }
  }
  function tg(e, t, n) {
    e === "focusin" ? (Qc(), Nr = t, Or = n, Nr.attachEvent("onpropertychange", Ic)) : e === "focusout" && Qc();
  }
  function ng(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ci(Or);
  }
  function lg(e, t) {
    if (e === "click") return Ci(t);
  }
  function ag(e, t) {
    if (e === "input" || e === "change")
      return Ci(t);
  }
  function rg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Bt = typeof Object.is == "function" ? Object.is : rg;
  function Cr(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!Ql.call(t, a) || !Bt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function $c(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Pc(e, t) {
    var n = $c(e);
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
      n = $c(n);
    }
  }
  function Kc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zc(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Oa(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Oa(e.document);
    }
    return t;
  }
  function uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var ig = Bn && "documentMode" in document && 11 >= document.documentMode, Ma = null, su = null, zr = null, cu = !1;
  function Wc(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    cu || Ma == null || Ma !== Oa(l) || (l = Ma, "selectionStart" in l && uu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), zr && Cr(zr, l) || (zr = l, l = vo(su, "onSelect"), 0 < l.length && (t = new Ni(
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
  Bn && (Jc = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);
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
  var zi = typeof reportError == "function" ? reportError : function(e) {
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
  }, Kt = [], Ua = 0, pu = 0;
  function Di() {
    for (var e = Ua, t = pu = Ua = 0; t < e; ) {
      var n = Kt[t];
      Kt[t++] = null;
      var l = Kt[t];
      Kt[t++] = null;
      var a = Kt[t];
      Kt[t++] = null;
      var r = Kt[t];
      if (Kt[t++] = null, l !== null && a !== null) {
        var u = l.pending;
        u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a;
      }
      r !== 0 && rf(n, a, r);
    }
  }
  function Ri(e, t, n, l) {
    Kt[Ua++] = e, Kt[Ua++] = t, Kt[Ua++] = n, Kt[Ua++] = l, pu |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
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
      throw Jr = 0, Es = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ja = {};
  function cg(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, n, l) {
    return new cg(e, t, n, l);
  }
  function hu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Hn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ht(
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
        case Be:
          return e = Ht(31, n, t, a), e.elementType = Be, e.lanes = r, e;
        case W:
          return ra(n.children, a, r, t);
        case J:
          u = 8, a |= 24;
          break;
        case H:
          return e = Ht(12, n, t, a | 2), e.elementType = H, e.lanes = r, e;
        case q:
          return e = Ht(13, n, t, a), e.elementType = q, e.lanes = r, e;
        case V:
          return e = Ht(19, n, t, a), e.elementType = V, e.lanes = r, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ee:
                u = 10;
                break e;
              case be:
                u = 9;
                break e;
              case ne:
                u = 11;
                break e;
              case K:
                u = 14;
                break e;
              case ke:
                u = 16, l = null;
                break e;
            }
          u = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ht(u, n, t, a), t.elementType = e, t.type = l, t.lanes = r, t;
  }
  function ra(e, t, n, l) {
    return e = Ht(7, e, l, t), e.lanes = n, e;
  }
  function gu(e, t, n) {
    return e = Ht(6, e, null, t), e.lanes = n, e;
  }
  function uf(e) {
    var t = Ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function yu(e, t, n) {
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
  var Ba = [], Ha = 0, Ui = null, Dr = 0, Wt = [], Jt = 0, gl = null, kn = 1, xn = "";
  function qn(e, t) {
    Ba[Ha++] = Dr, Ba[Ha++] = Ui, Ui = e, Dr = t;
  }
  function cf(e, t, n) {
    Wt[Jt++] = kn, Wt[Jt++] = xn, Wt[Jt++] = gl, gl = e;
    var l = kn;
    e = xn;
    var a = 32 - rt(l) - 1;
    l &= ~(1 << a), n += 1;
    var r = 32 - rt(t) + a;
    if (30 < r) {
      var u = a - a % 5;
      r = (l & (1 << u) - 1).toString(32), l >>= u, a -= u, kn = 1 << 32 - rt(t) + a | n << a | l, xn = r + e;
    } else
      kn = 1 << r | n << a | l, xn = e;
  }
  function bu(e) {
    e.return !== null && (qn(e, 1), cf(e, 1, 0));
  }
  function vu(e) {
    for (; e === Ui; )
      Ui = Ba[--Ha], Ba[Ha] = null, Dr = Ba[--Ha], Ba[Ha] = null;
    for (; e === gl; )
      gl = Wt[--Jt], Wt[Jt] = null, xn = Wt[--Jt], Wt[Jt] = null, kn = Wt[--Jt], Wt[Jt] = null;
  }
  function ff(e, t) {
    Wt[Jt++] = kn, Wt[Jt++] = xn, Wt[Jt++] = gl, kn = t.id, xn = t.overflow, gl = e;
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
        fe("invalid", t), Ca(
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
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Op(t.textContent, n) ? (l.popover != null && (fe("beforetoggle", t), fe("toggle", t)), l.onScroll != null && fe("scroll", t), l.onScrollEnd != null && fe("scrollend", t), l.onClick != null && (t.onclick = it), t = !0) : t = !1, t || bl(e, !0);
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
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Bs(e.type, e.memoizedProps)), n = !n), n && Le && bl(e), pf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = Bp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = Bp(e);
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
    $(Tu, t._currentValue), t._currentValue = n;
  }
  function Vn(e) {
    e._currentValue = Tu.current, ue(Tu);
  }
  function Eu(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ku(e, t, n, l) {
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
              r.lanes |= n, f = r.alternate, f !== null && (f.lanes |= n), Eu(
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
        u.lanes |= n, r = u.alternate, r !== null && (r.lanes |= n), Eu(u, n, e), u = null;
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
          Bt(a.pendingProps.value, u.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (a === fn.current) {
        if (u = a.alternate, u === null) throw Error(c(387));
        u.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(ii) : e = [ii]);
      }
      a = a.return;
    }
    e !== null && ku(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function ji(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Bt(
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
  function Bi(e, t) {
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
  }, dg = o.unstable_scheduleCallback, pg = o.unstable_NormalPriority, $e = {
    $$typeof: ee,
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
      Au = 0, Va = Os(), Ya = {
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
    return e !== null ? e : ze.pooledCache;
  }
  function Hi(e, t) {
    t === null ? $(sa, sa.current) : $(sa, t.pool);
  }
  function yf() {
    var e = _u();
    return e === null ? null : { parent: $e._currentValue, pool: e };
  }
  var Fa = Error(c(460)), Nu = Error(c(474)), qi = Error(c(542)), Gi = { then: function() {
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
          if (e = ze, e !== null && 100 < e.shellSuspendCounter)
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
      return v = Hn(v, y), v.index = 0, v.sibling = null, v;
    }
    function r(v, y, S) {
      return v.index = S, e ? (S = v.alternate, S !== null ? (S = S.index, S < y ? (v.flags |= 67108866, y) : S) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
    }
    function u(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function f(v, y, S, O) {
      return y === null || y.tag !== 6 ? (y = gu(S, v.mode, O), y.return = v, y) : (y = a(y, S), y.return = v, y);
    }
    function p(v, y, S, O) {
      var P = S.type;
      return P === W ? N(
        v,
        y,
        S.props.children,
        O,
        S.key
      ) : y !== null && (y.elementType === P || typeof P == "object" && P !== null && P.$$typeof === ke && ca(P) === y.type) ? (y = a(y, S.props), jr(y, S), y.return = v, y) : (y = Li(
        S.type,
        S.key,
        S.props,
        null,
        v.mode,
        O
      ), jr(y, S), y.return = v, y);
    }
    function w(v, y, S, O) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== S.containerInfo || y.stateNode.implementation !== S.implementation ? (y = yu(S, v.mode, O), y.return = v, y) : (y = a(y, S.children || []), y.return = v, y);
    }
    function N(v, y, S, O, P) {
      return y === null || y.tag !== 7 ? (y = ra(
        S,
        v.mode,
        O,
        P
      ), y.return = v, y) : (y = a(y, S), y.return = v, y);
    }
    function z(v, y, S) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = gu(
          "" + y,
          v.mode,
          S
        ), y.return = v, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case G:
            return S = Li(
              y.type,
              y.key,
              y.props,
              null,
              v.mode,
              S
            ), jr(S, y), S.return = v, S;
          case Y:
            return y = yu(
              y,
              v.mode,
              S
            ), y.return = v, y;
          case ke:
            return y = ca(y), z(v, y, S);
        }
        if (U(y) || _e(y))
          return y = ra(
            y,
            v.mode,
            S,
            null
          ), y.return = v, y;
        if (typeof y.then == "function")
          return z(v, Vi(y), S);
        if (y.$$typeof === ee)
          return z(
            v,
            Bi(v, y),
            S
          );
        Yi(v, y);
      }
      return null;
    }
    function E(v, y, S, O) {
      var P = y !== null ? y.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return P !== null ? null : f(v, y, "" + S, O);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case G:
            return S.key === P ? p(v, y, S, O) : null;
          case Y:
            return S.key === P ? w(v, y, S, O) : null;
          case ke:
            return S = ca(S), E(v, y, S, O);
        }
        if (U(S) || _e(S))
          return P !== null ? null : N(v, y, S, O, null);
        if (typeof S.then == "function")
          return E(
            v,
            y,
            Vi(S),
            O
          );
        if (S.$$typeof === ee)
          return E(
            v,
            y,
            Bi(v, S),
            O
          );
        Yi(v, S);
      }
      return null;
    }
    function k(v, y, S, O, P) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return v = v.get(S) || null, f(y, v, "" + O, P);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case G:
            return v = v.get(
              O.key === null ? S : O.key
            ) || null, p(y, v, O, P);
          case Y:
            return v = v.get(
              O.key === null ? S : O.key
            ) || null, w(y, v, O, P);
          case ke:
            return O = ca(O), k(
              v,
              y,
              S,
              O,
              P
            );
        }
        if (U(O) || _e(O))
          return v = v.get(S) || null, N(y, v, O, P, null);
        if (typeof O.then == "function")
          return k(
            v,
            y,
            S,
            Vi(O),
            P
          );
        if (O.$$typeof === ee)
          return k(
            v,
            y,
            S,
            Bi(y, O),
            P
          );
        Yi(y, O);
      }
      return null;
    }
    function X(v, y, S, O) {
      for (var P = null, ve = null, Q = y, ae = y = 0, pe = null; Q !== null && ae < S.length; ae++) {
        Q.index > ae ? (pe = Q, Q = null) : pe = Q.sibling;
        var Se = E(
          v,
          Q,
          S[ae],
          O
        );
        if (Se === null) {
          Q === null && (Q = pe);
          break;
        }
        e && Q && Se.alternate === null && t(v, Q), y = r(Se, y, ae), ve === null ? P = Se : ve.sibling = Se, ve = Se, Q = pe;
      }
      if (ae === S.length)
        return n(v, Q), he && qn(v, ae), P;
      if (Q === null) {
        for (; ae < S.length; ae++)
          Q = z(v, S[ae], O), Q !== null && (y = r(
            Q,
            y,
            ae
          ), ve === null ? P = Q : ve.sibling = Q, ve = Q);
        return he && qn(v, ae), P;
      }
      for (Q = l(Q); ae < S.length; ae++)
        pe = k(
          Q,
          v,
          ae,
          S[ae],
          O
        ), pe !== null && (e && pe.alternate !== null && Q.delete(
          pe.key === null ? ae : pe.key
        ), y = r(
          pe,
          y,
          ae
        ), ve === null ? P = pe : ve.sibling = pe, ve = pe);
      return e && Q.forEach(function(jl) {
        return t(v, jl);
      }), he && qn(v, ae), P;
    }
    function Z(v, y, S, O) {
      if (S == null) throw Error(c(151));
      for (var P = null, ve = null, Q = y, ae = y = 0, pe = null, Se = S.next(); Q !== null && !Se.done; ae++, Se = S.next()) {
        Q.index > ae ? (pe = Q, Q = null) : pe = Q.sibling;
        var jl = E(v, Q, Se.value, O);
        if (jl === null) {
          Q === null && (Q = pe);
          break;
        }
        e && Q && jl.alternate === null && t(v, Q), y = r(jl, y, ae), ve === null ? P = jl : ve.sibling = jl, ve = jl, Q = pe;
      }
      if (Se.done)
        return n(v, Q), he && qn(v, ae), P;
      if (Q === null) {
        for (; !Se.done; ae++, Se = S.next())
          Se = z(v, Se.value, O), Se !== null && (y = r(Se, y, ae), ve === null ? P = Se : ve.sibling = Se, ve = Se);
        return he && qn(v, ae), P;
      }
      for (Q = l(Q); !Se.done; ae++, Se = S.next())
        Se = k(Q, v, ae, Se.value, O), Se !== null && (e && Se.alternate !== null && Q.delete(Se.key === null ? ae : Se.key), y = r(Se, y, ae), ve === null ? P = Se : ve.sibling = Se, ve = Se);
      return e && Q.forEach(function(Ay) {
        return t(v, Ay);
      }), he && qn(v, ae), P;
    }
    function Ce(v, y, S, O) {
      if (typeof S == "object" && S !== null && S.type === W && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case G:
            e: {
              for (var P = S.key; y !== null; ) {
                if (y.key === P) {
                  if (P = S.type, P === W) {
                    if (y.tag === 7) {
                      n(
                        v,
                        y.sibling
                      ), O = a(
                        y,
                        S.props.children
                      ), O.return = v, v = O;
                      break e;
                    }
                  } else if (y.elementType === P || typeof P == "object" && P !== null && P.$$typeof === ke && ca(P) === y.type) {
                    n(
                      v,
                      y.sibling
                    ), O = a(y, S.props), jr(O, S), O.return = v, v = O;
                    break e;
                  }
                  n(v, y);
                  break;
                } else t(v, y);
                y = y.sibling;
              }
              S.type === W ? (O = ra(
                S.props.children,
                v.mode,
                O,
                S.key
              ), O.return = v, v = O) : (O = Li(
                S.type,
                S.key,
                S.props,
                null,
                v.mode,
                O
              ), jr(O, S), O.return = v, v = O);
            }
            return u(v);
          case Y:
            e: {
              for (P = S.key; y !== null; ) {
                if (y.key === P)
                  if (y.tag === 4 && y.stateNode.containerInfo === S.containerInfo && y.stateNode.implementation === S.implementation) {
                    n(
                      v,
                      y.sibling
                    ), O = a(y, S.children || []), O.return = v, v = O;
                    break e;
                  } else {
                    n(v, y);
                    break;
                  }
                else t(v, y);
                y = y.sibling;
              }
              O = yu(S, v.mode, O), O.return = v, v = O;
            }
            return u(v);
          case ke:
            return S = ca(S), Ce(
              v,
              y,
              S,
              O
            );
        }
        if (U(S))
          return X(
            v,
            y,
            S,
            O
          );
        if (_e(S)) {
          if (P = _e(S), typeof P != "function") throw Error(c(150));
          return S = P.call(S), Z(
            v,
            y,
            S,
            O
          );
        }
        if (typeof S.then == "function")
          return Ce(
            v,
            y,
            Vi(S),
            O
          );
        if (S.$$typeof === ee)
          return Ce(
            v,
            y,
            Bi(v, S),
            O
          );
        Yi(v, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, y !== null && y.tag === 6 ? (n(v, y.sibling), O = a(y, S), O.return = v, v = O) : (n(v, y), O = gu(S, v.mode, O), O.return = v, v = O), u(v)) : n(v, y);
    }
    return function(v, y, S, O) {
      try {
        Ur = 0;
        var P = Ce(
          v,
          y,
          S,
          O
        );
        return Xa = null, P;
      } catch (Q) {
        if (Q === Fa || Q === qi) throw Q;
        var ve = Ht(29, Q, null, v.mode);
        return ve.lanes = O, ve.return = v, ve;
      } finally {
      }
    };
  }
  var da = Tf(!0), Ef = Tf(!1), Sl = !1;
  function Ou(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Cu(e, t) {
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
  function Br(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, xa(e, n);
    }
  }
  function zu(e, t) {
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
  function Hr() {
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
      var N = e.alternate;
      N !== null && (N = N.updateQueue, f = N.lastBaseUpdate, f !== u && (f === null ? N.firstBaseUpdate = w : f.next = w, N.lastBaseUpdate = p));
    }
    if (r !== null) {
      var z = a.baseState;
      u = 0, N = w = p = null, f = r;
      do {
        var E = f.lane & -536870913, k = E !== f.lane;
        if (k ? (de & E) === E : (l & E) === E) {
          E !== 0 && E === Va && (Du = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e, Z = f;
            E = t;
            var Ce = n;
            switch (Z.tag) {
              case 1:
                if (X = Z.payload, typeof X == "function") {
                  z = X.call(Ce, z, E);
                  break e;
                }
                z = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = Z.payload, E = typeof X == "function" ? X.call(Ce, z, E) : X, E == null) break e;
                z = D({}, z, E);
                break e;
              case 2:
                Sl = !0;
            }
          }
          E = f.callback, E !== null && (e.flags |= 64, k && (e.flags |= 8192), k = a.callbacks, k === null ? a.callbacks = [E] : k.push(E));
        } else
          k = {
            lane: E,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, N === null ? (w = N = k, p = z) : N = N.next = k, u |= E;
        if (f = f.next, f === null) {
          if (f = a.shared.pending, f === null)
            break;
          k = f, f = k.next, k.next = null, a.lastBaseUpdate = k, a.shared.pending = null;
        }
      } while (!0);
      N === null && (p = z), a.baseState = p, a.firstBaseUpdate = w, a.lastBaseUpdate = N, r === null && (a.shared.lanes = 0), _l |= u, e.lanes = u, e.memoizedState = z;
    }
  }
  function kf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function xf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        kf(n[e], t);
  }
  var Qa = we(null), Fi = we(0);
  function Af(e, t) {
    e = Zn, $(Fi, e), $(Qa, t), Zn = e | t.baseLanes;
  }
  function Ru() {
    $(Fi, Zn), $(Qa, Qa.current);
  }
  function Mu() {
    Zn = Fi.current, ue(Qa), ue(Fi);
  }
  var qt = we(null), sn = null;
  function El(e) {
    var t = e.alternate;
    $(Xe, Xe.current & 1), $(qt, e), sn === null && (t === null || Qa.current !== null || t.memoizedState !== null) && (sn = e);
  }
  function Lu(e) {
    $(Xe, Xe.current), $(qt, e), sn === null && (sn = e);
  }
  function _f(e) {
    e.tag === 22 ? ($(Xe, Xe.current), $(qt, e), sn === null && (sn = e)) : kl();
  }
  function kl() {
    $(Xe, Xe.current), $(qt, qt.current);
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
  var Yn = 0, le = null, Ne = null, Pe = null, Qi = !1, Ia = !1, pa = !1, Ii = 0, Gr = 0, $a = null, gg = 0;
  function Ge() {
    throw Error(c(321));
  }
  function Uu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function ju(e, t, n, l, a, r) {
    return Yn = r, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? cd : Wu, pa = !1, r = n(l, a), pa = !1, Ia && (r = Of(
      t,
      n,
      l,
      a
    )), Nf(e), r;
  }
  function Nf(e) {
    R.H = Fr;
    var t = Ne !== null && Ne.next !== null;
    if (Yn = 0, Pe = Ne = le = null, Qi = !1, Gr = 0, $a = null, t) throw Error(c(300));
    e === null || Ke || (e = e.dependencies, e !== null && ji(e) && (Ke = !0));
  }
  function Of(e, t, n, l) {
    le = e;
    var a = 0;
    do {
      if (Ia && ($a = null), Gr = 0, Ia = !1, 25 <= a) throw Error(c(301));
      if (a += 1, Pe = Ne = null, e.updateQueue != null) {
        var r = e.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      R.H = fd, r = t(n, l);
    } while (Ia);
    return r;
  }
  function yg() {
    var e = R.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Vr(t) : t, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (le.flags |= 1024), t;
  }
  function Bu() {
    var e = Ii !== 0;
    return Ii = 0, e;
  }
  function Hu(e, t, n) {
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
    Yn = 0, Pe = Ne = le = null, Ia = !1, Gr = Ii = 0, $a = null;
  }
  function vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Pe === null ? le.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
  }
  function Qe() {
    if (Ne === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = Pe === null ? le.memoizedState : Pe.next;
    if (t !== null)
      Pe = t, Ne = e;
    else {
      if (e === null)
        throw le.alternate === null ? Error(c(467)) : Error(c(310));
      Ne = e, e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null
      }, Pe === null ? le.memoizedState = Pe = e : Pe = Pe.next = e;
    }
    return Pe;
  }
  function $i() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vr(e) {
    var t = Gr;
    return Gr += 1, $a === null && ($a = []), e = vf($a, e, t), t = le, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? cd : Wu), e;
  }
  function Pi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Vr(e);
      if (e.$$typeof === ee) return ut(e);
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = $i(), le.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = qe;
    return t.index++, n;
  }
  function Fn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ki(e) {
    var t = Qe();
    return Vu(t, Ne, e);
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
      var f = u = null, p = null, w = t, N = !1;
      do {
        var z = w.lane & -536870913;
        if (z !== w.lane ? (de & z) === z : (Yn & z) === z) {
          var E = w.revertLane;
          if (E === 0)
            p !== null && (p = p.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }), z === Va && (N = !0);
          else if ((Yn & E) === E) {
            w = w.next, E === Va && (N = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }, p === null ? (f = p = z, u = r) : p = p.next = z, le.lanes |= E, _l |= E;
          z = w.action, pa && n(r, z), r = w.hasEagerState ? w.eagerState : n(r, z);
        } else
          E = {
            lane: z,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          }, p === null ? (f = p = E, u = r) : p = p.next = E, le.lanes |= z, _l |= z;
        w = w.next;
      } while (w !== null && w !== t);
      if (p === null ? u = r : p.next = f, !Bt(r, e.memoizedState) && (Ke = !0, N && (n = Ya, n !== null)))
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
      Bt(r, t.memoizedState) || (Ke = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), n.lastRenderedState = r;
    }
    return [r, l];
  }
  function Cf(e, t, n) {
    var l = le, a = Qe(), r = he;
    if (r) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var u = !Bt(
      (Ne || a).memoizedState,
      n
    );
    if (u && (a.memoizedState = n, Ke = !0), a = a.queue, Qu(Rf.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || u || Pe !== null && Pe.memoizedState.tag & 1) {
      if (l.flags |= 2048, Pa(
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
      ), ze === null) throw Error(c(349));
      r || (Yn & 127) !== 0 || zf(l, t, n);
    }
    return n;
  }
  function zf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = le.updateQueue, t === null ? (t = $i(), le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !Bt(e, n);
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
      lastRenderedReducer: Fn,
      lastRenderedState: e
    }, t;
  }
  function Uf(e, t, n, l) {
    return e.baseState = n, Vu(
      e,
      Ne,
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
        p !== null && p(u, f), Bf(e, t, f);
      } catch (w) {
        Xu(e, t, w);
      } finally {
        r !== null && u.types !== null && (r.types = u.types), R.T = r;
      }
    } else
      try {
        r = n(a, l), Bf(e, t, r);
      } catch (w) {
        Xu(e, t, w);
      }
  }
  function Bf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Hf(e, t, l);
      },
      function(l) {
        return Xu(e, t, l);
      }
    ) : Hf(e, t, n);
  }
  function Hf(e, t, n) {
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
      var n = ze.formState;
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
    return Ff(t, Ne, e);
  }
  function Ff(e, t, n) {
    if (t = Vu(
      e,
      t,
      Gf
    )[0], e = Ki(Fn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Vr(t);
      } catch (u) {
        throw u === Fa ? qi : u;
      }
    else l = t;
    t = Qe();
    var a = t.queue, r = a.dispatch;
    return n !== t.memoizedState && (le.flags |= 2048, Pa(
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
    var t = Qe(), n = Ne;
    if (n !== null)
      return Ff(t, n, e);
    Qe(), t = t.memoizedState, n = Qe();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function Pa(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = le.updateQueue, t === null && (t = $i(), le.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Qf() {
    return Qe().memoizedState;
  }
  function Zi(e, t, n, l) {
    var a = vt();
    le.flags |= e, a.memoizedState = Pa(
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
    Ne !== null && l !== null && Uu(l, Ne.memoizedState.deps) ? a.memoizedState = Pa(t, r, n, l) : (le.flags |= e, a.memoizedState = Pa(
      1 | t,
      r,
      n,
      l
    ));
  }
  function If(e, t) {
    Zi(8390656, 8, e, t);
  }
  function Qu(e, t) {
    Wi(2048, 8, e, t);
  }
  function Sg(e) {
    le.flags |= 4;
    var t = le.updateQueue;
    if (t === null)
      t = $i(), le.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function $f(e) {
    var t = Qe().memoizedState;
    return Sg({ ref: t, nextImpl: e }), function() {
      if ((Te & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Pf(e, t) {
    return Wi(4, 2, e, t);
  }
  function Kf(e, t) {
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
  function Iu() {
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
      It(!0);
      try {
        e();
      } finally {
        It(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function $u(e, t, n) {
    return n === void 0 || (Yn & 1073741824) !== 0 && (de & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = tp(), le.lanes |= e, _l |= e, n);
  }
  function td(e, t, n, l) {
    return Bt(n, t) ? n : Qa.current !== null ? (e = $u(e, n, l), Bt(e, t) || (Ke = !0), e) : (Yn & 42) === 0 || (Yn & 1073741824) !== 0 && (de & 261930) === 0 ? (Ke = !0, e.memoizedState = n) : (e = tp(), le.lanes |= e, _l |= e, t);
  }
  function nd(e, t, n, l, a) {
    var r = B.p;
    B.p = r !== 0 && 8 > r ? r : 8;
    var u = R.T, f = {};
    R.T = f, Zu(e, !1, t, n);
    try {
      var p = a(), w = R.S;
      if (w !== null && w(f, p), p !== null && typeof p == "object" && typeof p.then == "function") {
        var N = hg(
          p,
          l
        );
        Yr(
          e,
          t,
          N,
          Ft(e)
        );
      } else
        Yr(
          e,
          t,
          l,
          Ft(e)
        );
    } catch (z) {
      Yr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        Ft()
      );
    } finally {
      B.p = r, u !== null && f.types !== null && (u.types = f.types), R.T = u;
    }
  }
  function wg() {
  }
  function Pu(e, t, n, l) {
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
  function Ku() {
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
          l !== null && (Rt(l, t, n), Br(l, t, n)), t = { cache: xu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Eg(e, t, n) {
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
          if (a.hasEagerState = !0, a.eagerState = f, Bt(f, u))
            return Ri(e, t, a, 0), ze === null && Di(), !1;
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
      revertLane: Os(),
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
    Ia = Qi = !0;
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
    use: Pi,
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
    use: Pi,
    useCallback: function(e, t) {
      return vt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ut,
    useEffect: If,
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
        It(!0);
        try {
          e();
        } finally {
          It(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = vt();
      if (n !== void 0) {
        var a = n(t);
        if (pa) {
          It(!0);
          try {
            n(t);
          } finally {
            It(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = Eg.bind(
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
    useDebugValue: Iu,
    useDeferredValue: function(e, t) {
      var n = vt();
      return $u(n, e, t);
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
        if (n = t(), ze === null)
          throw Error(c(349));
        (de & 127) !== 0 || zf(l, t, n);
      }
      a.memoizedState = n;
      var r = { value: n, getSnapshot: t };
      return a.queue = r, If(Rf.bind(null, l, r, e), [
        e
      ]), l.flags |= 2048, Pa(
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
      var e = vt(), t = ze.identifierPrefix;
      if (he) {
        var n = xn, l = kn;
        n = (l & ~(1 << 32 - rt(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Ii++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = gg++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ku,
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
    use: Pi,
    useCallback: Jf,
    useContext: ut,
    useEffect: Qu,
    useImperativeHandle: Wf,
    useInsertionEffect: Pf,
    useLayoutEffect: Kf,
    useMemo: ed,
    useReducer: Ki,
    useRef: Qf,
    useState: function() {
      return Ki(Fn);
    },
    useDebugValue: Iu,
    useDeferredValue: function(e, t) {
      var n = Qe();
      return td(
        n,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ki(Fn)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Vr(e),
        t
      ];
    },
    useSyncExternalStore: Cf,
    useId: rd,
    useHostTransitionStatus: Ku,
    useFormState: Yf,
    useActionState: Yf,
    useOptimistic: function(e, t) {
      var n = Qe();
      return Uf(n, Ne, e, t);
    },
    useMemoCache: Gu,
    useCacheRefresh: id
  };
  Wu.useEffectEvent = $f;
  var fd = {
    readContext: ut,
    use: Pi,
    useCallback: Jf,
    useContext: ut,
    useEffect: Qu,
    useImperativeHandle: Wf,
    useInsertionEffect: Pf,
    useLayoutEffect: Kf,
    useMemo: ed,
    useReducer: Yu,
    useRef: Qf,
    useState: function() {
      return Yu(Fn);
    },
    useDebugValue: Iu,
    useDeferredValue: function(e, t) {
      var n = Qe();
      return Ne === null ? $u(n, e, t) : td(
        n,
        Ne.memoizedState,
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
    useSyncExternalStore: Cf,
    useId: rd,
    useHostTransitionStatus: Ku,
    useFormState: Xf,
    useActionState: Xf,
    useOptimistic: function(e, t) {
      var n = Qe();
      return Ne !== null ? Uf(n, Ne, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Gu,
    useCacheRefresh: id
  };
  fd.useEffectEvent = $f;
  function Ju(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var es = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = Ft(), a = wl(l);
      a.payload = t, n != null && (a.callback = n), t = Tl(e, a, l), t !== null && (Rt(t, e, l), Br(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = Ft(), a = wl(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Tl(e, a, l), t !== null && (Rt(t, e, l), Br(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Ft(), l = wl(n);
      l.tag = 2, t != null && (l.callback = t), t = Tl(e, l, n), t !== null && (Rt(t, e, n), Br(t, e, n));
    }
  };
  function dd(e, t, n, l, a, r, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, r, u) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, l) || !Cr(a, r) : !0;
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
    zi(e);
  }
  function hd(e) {
    console.error(e);
  }
  function gd(e) {
    zi(e);
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
      yd(t, n, l), typeof a != "function" && (Nl === null ? Nl = /* @__PURE__ */ new Set([this]) : Nl.add(this));
      var f = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function kg(e, t, n, l, a) {
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
      ), zu(e, a), Ve !== 4 && (Ve = 2)), !1;
    var r = Error(c(520), { cause: l });
    if (r = Zt(r, n), Wr === null ? Wr = [r] : Wr.push(r), Ve !== 4 && (Ve = 2), t === null) return !0;
    l = Zt(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = ts(n.stateNode, l, e), zu(n, e), !1;
        case 1:
          if (t = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Nl === null || !Nl.has(r))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = bd(a), vd(
              a,
              e,
              n,
              l
            ), zu(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ns = Error(c(461)), Ke = !1;
  function st(e, t, n, l) {
    t.child = e === null ? Ef(t, null, n, l) : da(
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
    ), f = Bu(), e !== null && !Ke ? (Hu(e, t, a), Xn(e, t, a)) : (he && f && bu(t), t.flags |= 1, st(e, t, l, a), t.child);
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
      if (n = n.compare, n = n !== null ? n : Cr, n(u, l) && e.ref === t.ref)
        return Xn(e, t, a);
    }
    return t.flags |= 1, e = Hn(r, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Td(e, t, n, l, a) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (Cr(r, l) && e.ref === t.ref)
        if (Ke = !1, t.pendingProps = l = r, cs(e, a))
          (e.flags & 131072) !== 0 && (Ke = !0);
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
  function Ed(e, t, n, l) {
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
        return kd(
          e,
          t,
          r,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Hi(
          t,
          r !== null ? r.cachePool : null
        ), r !== null ? Af(t, r) : Ru(), _f(t);
      else
        return l = t.lanes = 536870912, kd(
          e,
          t,
          r !== null ? r.baseLanes | n : n,
          n,
          l
        );
    } else
      r !== null ? (Hi(t, r.cachePool), Af(t, r), kl(), t.memoizedState = null) : (e !== null && Hi(t, null), Ru(), kl());
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
  function kd(e, t, n, l, a) {
    var r = _u();
    return r = r === null ? null : { parent: $e._currentValue, pool: r }, t.memoizedState = {
      baseLanes: n,
      cachePool: r
    }, e !== null && Hi(t, null), Ru(), _f(t), e !== null && Ga(e, t, l, !0), t.childLanes = a, null;
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
          treeContext: gl !== null ? { id: kn, overflow: xn } : null,
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
      else if (Ke || Ga(e, t, n, !1), a = (n & e.childLanes) !== 0, Ke || a) {
        if (l = ze, l !== null && (u = hr(l, n), u !== 0 && u !== r.retryLane))
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
    return e = Hn(e.child, {
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
    ), l = Bu(), e !== null && !Ke ? (Hu(e, t, a), Xn(e, t, a)) : (he && l && bu(t), t.flags |= 1, st(e, t, n, a), t.child);
  }
  function Ad(e, t, n, l, a, r) {
    return ua(t), t.updateQueue = null, n = Of(
      t,
      l,
      n,
      a
    ), Nf(e), l = Bu(), e !== null && !Ke ? (Hu(e, t, r), Xn(e, t, r)) : (he && l && bu(t), t.flags |= 1, st(e, t, n, r), t.child);
  }
  function _d(e, t, n, l, a) {
    if (ua(t), t.stateNode === null) {
      var r = ja, u = n.contextType;
      typeof u == "object" && u !== null && (r = ut(u)), r = new n(l, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = es, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = l, r.state = t.memoizedState, r.refs = {}, Ou(t), u = n.contextType, r.context = typeof u == "object" && u !== null ? ut(u) : ja, r.state = t.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (Ju(
        t,
        n,
        u,
        l
      ), r.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (u = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), u !== r.state && es.enqueueReplaceState(r, r.state, null), qr(t, l, r, a), Hr(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      r = t.stateNode;
      var f = t.memoizedProps, p = ma(n, f);
      r.props = p;
      var w = r.context, N = n.contextType;
      u = ja, typeof N == "object" && N !== null && (u = ut(N));
      var z = n.getDerivedStateFromProps;
      N = typeof z == "function" || typeof r.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, N || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f || w !== u) && pd(
        t,
        r,
        l,
        u
      ), Sl = !1;
      var E = t.memoizedState;
      r.state = E, qr(t, l, r, a), Hr(), w = t.memoizedState, f || E !== w || Sl ? (typeof z == "function" && (Ju(
        t,
        n,
        z,
        l
      ), w = t.memoizedState), (p = Sl || dd(
        t,
        n,
        p,
        l,
        E,
        w,
        u
      )) ? (N || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = w), r.props = l, r.state = w, r.context = u, l = p) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      r = t.stateNode, Cu(e, t), u = t.memoizedProps, N = ma(n, u), r.props = N, z = t.pendingProps, E = r.context, w = n.contextType, p = ja, typeof w == "object" && w !== null && (p = ut(w)), f = n.getDerivedStateFromProps, (w = typeof f == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (u !== z || E !== p) && pd(
        t,
        r,
        l,
        p
      ), Sl = !1, E = t.memoizedState, r.state = E, qr(t, l, r, a), Hr();
      var k = t.memoizedState;
      u !== z || E !== k || Sl || e !== null && e.dependencies !== null && ji(e.dependencies) ? (typeof f == "function" && (Ju(
        t,
        n,
        f,
        l
      ), k = t.memoizedState), (N = Sl || dd(
        t,
        n,
        N,
        l,
        E,
        k,
        p
      ) || e !== null && e.dependencies !== null && ji(e.dependencies)) ? (w || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(l, k, p), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        l,
        k,
        p
      )), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = k), r.props = l, r.state = k, r.context = p, l = N) : (typeof r.componentDidUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), l = !1);
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
  function Nd(e, t, n, l) {
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
  function Od(e, t, n) {
    var l = t.pendingProps, a = !1, r = (t.flags & 128) !== 0, u;
    if ((u = r) || (u = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), u && (a = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (he) {
        if (a ? El(t) : kl(), (e = Le) ? (e = jp(
          e,
          en
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: gl !== null ? { id: kn, overflow: xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = uf(e), n.return = t, t.child = n, ot = t, Le = null)) : e = null, e === null) throw bl(t);
        return Vs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var f = l.children;
      return l = l.fallback, a ? (kl(), a = t.mode, f = lo(
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
      ), t.memoizedState = as, Xr(null, l)) : (El(t), os(t, f));
    }
    var p = e.memoizedState;
    if (p !== null && (f = p.dehydrated, f !== null)) {
      if (r)
        t.flags & 256 ? (El(t), t.flags &= -257, t = us(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (kl(), t.child = e.child, t.flags |= 128, t = null) : (kl(), f = l.fallback, a = t.mode, l = lo(
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
      else if (El(t), Vs(f)) {
        if (u = f.nextSibling && f.nextSibling.dataset, u) var w = u.dgst;
        u = w, l = Error(c(419)), l.stack = "", l.digest = u, Rr({ value: l, source: null, stack: null }), t = us(
          e,
          t,
          n
        );
      } else if (Ke || Ga(e, t, n, !1), u = (n & e.childLanes) !== 0, Ke || u) {
        if (u = ze, u !== null && (l = hr(u, n), l !== 0 && l !== p.retryLane))
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
    return a ? (kl(), f = l.fallback, a = t.mode, p = e.child, w = p.sibling, l = Hn(p, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = p.subtreeFlags & 65011712, w !== null ? f = Hn(
      w,
      f
    ) : (f = ra(
      f,
      a,
      n,
      null
    ), f.flags |= 2), f.return = t, l.return = t, l.sibling = f, t.child = l, Xr(null, l), l = t.child, f = e.child.memoizedState, f === null ? f = rs(n) : (a = f.cachePool, a !== null ? (p = $e._currentValue, a = a.parent !== p ? { parent: p, pool: p } : a) : a = yf(), f = {
      baseLanes: f.baseLanes | n,
      cachePool: a
    }), l.memoizedState = f, l.childLanes = is(
      e,
      u,
      n
    ), t.memoizedState = as, Xr(e.child, l)) : (El(t), n = e.child, e = n.sibling, n = Hn(n, {
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
    return e = Ht(22, e, null, t), e.lanes = 0, e;
  }
  function us(e, t, n) {
    return da(t, e.child, null, n), e = os(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Cd(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Eu(e.return, t, n);
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
  function zd(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, r = l.tail;
    l = l.children;
    var u = Xe.current, f = (u & 2) !== 0;
    if (f ? (u = u & 1 | 2, t.flags |= 128) : u &= 1, $(Xe, u), st(e, t, l, n), l = he ? Dr : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Cd(e, n, t);
        else if (e.tag === 19)
          Cd(e, n, t);
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
      for (e = t.child, n = Hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Hn(e, e.pendingProps), n.return = t;
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
        dn(t, t.stateNode.containerInfo), vl(t, $e, e.memoizedState.cache), ia();
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
          return l.dehydrated !== null ? (El(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Od(e, t, n) : (El(t), e = Xn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        El(t);
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
            return zd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), $(Xe, Xe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Ed(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        vl(t, $e, e.memoizedState.cache);
    }
    return Xn(e, t, n);
  }
  function Dd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ke = !0;
      else {
        if (!cs(e, n) && (t.flags & 128) === 0)
          return Ke = !1, Ag(
            e,
            t,
            n
          );
        Ke = (e.flags & 131072) !== 0;
      }
    else
      Ke = !1, he && (t.flags & 1048576) !== 0 && cf(t, Dr, t.index);
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
              } else if (a === K) {
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
            throw t = Ie(e) || e, Error(c(306, t, ""));
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
          a = r.element, Cu(e, t), qr(t, l, null, n);
          var u = t.memoizedState;
          if (l = u.cache, vl(t, $e, l), l !== r.cache && ku(
            t,
            [$e],
            n,
            !0
          ), Hr(), l = u.element, r.isDehydrated)
            if (r = {
              element: l,
              isDehydrated: !1,
              cache: u.cache
            }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
              t = Nd(
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
              ), Rr(a), t = Nd(
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
              for (Le = tn(e.firstChild), ot = t, he = !0, yl = null, en = !0, n = Ef(
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
        ), l !== null ? (t.stateNode = l, ot = t, Le = tn(l.firstChild), en = !1, a = !0) : a = !1), a || bl(t)), De(t), a = t.type, r = t.pendingProps, u = e !== null ? e.memoizedProps : null, l = r.children, Bs(a, r) ? l = null : u !== null && Bs(a, u) && (t.flags |= 32), t.memoizedState !== null && (a = ju(
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
        return Od(e, t, n);
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
        return zd(e, t, n);
      case 31:
        return xg(e, t, n);
      case 22:
        return Ed(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ua(t), l = ut($e), e === null ? (a = _u(), a === null && (a = ze, r = xu(), a.pooledCache = r, r.refCount++, r !== null && (a.pooledCacheLanes |= n), a = r), t.memoizedState = { parent: l, cache: a }, Ou(t), vl(t, $e, a)) : ((e.lanes & n) !== 0 && (Cu(e, t), qr(t, null, null, n), Hr()), a = e.memoizedState, r = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), vl(t, $e, l)) : (l = r.cache, vl(t, $e, l), l !== a.cache && ku(
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
  function fs(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (rp()) e.flags |= 8192;
        else
          throw fa = Gi, Nu;
    } else e.flags &= -16777217;
  }
  function Rd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !$p(t))
      if (rp()) e.flags |= 8192;
      else
        throw fa = Gi, Nu;
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
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Vn($e), nt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (qa(t) ? Qn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, wu())), Ue(t), null;
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
            e[oe] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Op(e.nodeValue, n)), e || bl(t, !0);
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
                  return $(
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
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Ye(), e.sibling = null, n = Xe.current, $(
          Xe,
          a ? n & 1 | 2 : n & 1
        ), he && qn(t, l.treeForkCount), e) : (Ue(t), null);
      case 22:
      case 23:
        return Gt(t), Mu(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), n = t.updateQueue, n !== null && ao(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && ue(sa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Vn($e), Ue(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Ng(e, t) {
    switch (vu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Vn($e), nt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
        return Vn($e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Md(e, t) {
    switch (vu(t), t.tag) {
      case 3:
        Vn($e), nt();
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
        Vn($e);
    }
  }
  function Ir(e, t) {
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
              } catch (N) {
                Ae(
                  a,
                  p,
                  N
                );
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (N) {
      Ae(t, t.return, N);
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
  function $r(e, t) {
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
      Kg(l, e.type, n, t), l[Fe] = t;
    } catch (a) {
      Ae(e, e.return, a);
    }
  }
  function Bd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Dl(e.type) || e.tag === 4;
  }
  function ps(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bd(e.return)) return null;
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
  function Hd(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      ct(t, l, n), t[oe] = e, t[Fe] = n;
    } catch (r) {
      Ae(e, e.return, r);
    }
  }
  var In = !1, Ze = !1, hs = !1, qd = typeof WeakSet == "function" ? WeakSet : Set, at = null;
  function Og(e, t) {
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
            var u = 0, f = -1, p = -1, w = 0, N = 0, z = e, E = null;
            t: for (; ; ) {
              for (var k; z !== n || a !== 0 && z.nodeType !== 3 || (f = u + a), z !== r || l !== 0 && z.nodeType !== 3 || (p = u + l), z.nodeType === 3 && (u += z.nodeValue.length), (k = z.firstChild) !== null; )
                E = z, z = k;
              for (; ; ) {
                if (z === e) break t;
                if (E === n && ++w === a && (f = u), E === r && ++N === l && (p = u), (k = z.nextSibling) !== null) break;
                z = E, E = z.parentNode;
              }
              z = k;
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
                  var X = ma(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    X,
                    r
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Z) {
                  Ae(
                    n,
                    n.return,
                    Z
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
        Pn(e, n), l & 4 && Ir(5, n);
        break;
      case 1:
        if (Pn(e, n), l & 4)
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
        l & 64 && Ld(n), l & 512 && $r(n, n.return);
        break;
      case 3:
        if (Pn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
        t === null && l & 4 && Hd(n);
      case 26:
      case 5:
        Pn(e, n), t === null && l & 4 && jd(n), l & 512 && $r(n, n.return);
        break;
      case 12:
        Pn(e, n);
        break;
      case 31:
        Pn(e, n), l & 4 && Fd(e, n);
        break;
      case 13:
        Pn(e, n), l & 4 && Xd(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Bg.bind(
          null,
          n
        ), ay(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || In, !l) {
          t = t !== null && t.memoizedState !== null || Ze, a = In;
          var r = Ze;
          In = l, (Ze = t) && !r ? Kn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Pn(e, n), In = a, Ze = r;
        }
        break;
      case 30:
        break;
      default:
        Pn(e, n);
    }
  }
  function Vd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Vd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && vr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, Ot = !1;
  function $n(e, t, n) {
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
        Ze || An(n, t), $n(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ze || An(n, t);
        var l = je, a = Ot;
        Dl(n.type) && (je = n.stateNode, Ot = !1), $n(
          e,
          t,
          n
        ), li(n.stateNode), je = l, Ot = a;
        break;
      case 5:
        Ze || An(n, t);
      case 6:
        if (l = je, a = Ot, je = null, $n(
          e,
          t,
          n
        ), je = l, Ot = a, je !== null)
          if (Ot)
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
        je !== null && (Ot ? (e = je, Lp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), or(e)) : Lp(je, n.stateNode));
        break;
      case 4:
        l = je, a = Ot, je = n.stateNode.containerInfo, Ot = !0, $n(
          e,
          t,
          n
        ), je = l, Ot = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        xl(2, n, t), Ze || xl(4, n, t), $n(
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
        )), $n(
          e,
          t,
          n
        );
        break;
      case 21:
        $n(
          e,
          t,
          n
        );
        break;
      case 22:
        Ze = (l = Ze) || n.memoizedState !== null, $n(
          e,
          t,
          n
        ), Ze = l;
        break;
      default:
        $n(
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
  function Cg(e) {
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
    var n = Cg(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = Hg.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function Ct(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], r = e, u = t, f = u;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Dl(f.type)) {
                je = f.stateNode, Ot = !1;
                break e;
              }
              break;
            case 5:
              je = f.stateNode, Ot = !1;
              break e;
            case 3:
            case 4:
              je = f.stateNode.containerInfo, Ot = !0;
              break e;
          }
          f = f.return;
        }
        if (je === null) throw Error(c(160));
        Yd(r, u, a), je = null, Ot = !1, r = a.alternate, r !== null && (r.return = null), a.return = null;
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
        Ct(t, e), zt(e), l & 4 && (xl(3, e, e.return), Ir(3, e), xl(5, e, e.return));
        break;
      case 1:
        Ct(t, e), zt(e), l & 512 && (Ze || n === null || An(n, n.return)), l & 64 && In && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = hn;
        if (Ct(t, e), zt(e), l & 512 && (Ze || n === null || An(n, n.return)), l & 4) {
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
                Ip(
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
            r !== l ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, l === null ? Ip(
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
        Ct(t, e), zt(e), l & 512 && (Ze || n === null || An(n, n.return)), n !== null && l & 4 && ds(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ct(t, e), zt(e), l & 512 && (Ze || n === null || An(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            I(a, "");
          } catch (X) {
            Ae(e, e.return, X);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, ds(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (hs = !0);
        break;
      case 6:
        if (Ct(t, e), zt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (X) {
            Ae(e, e.return, X);
          }
        }
        break;
      case 3:
        if (Eo = null, a = hn, hn = wo(t.containerInfo), Ct(t, e), hn = a, zt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            or(t.containerInfo);
          } catch (X) {
            Ae(e, e.return, X);
          }
        hs && (hs = !1, Id(e));
        break;
      case 4:
        l = hn, hn = wo(
          e.stateNode.containerInfo
        ), Ct(t, e), zt(e), hn = l;
        break;
      case 12:
        Ct(t, e), zt(e);
        break;
      case 31:
        Ct(t, e), zt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, io(e, l)));
        break;
      case 13:
        Ct(t, e), zt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (uo = Ye()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, io(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var p = n !== null && n.memoizedState !== null, w = In, N = Ze;
        if (In = w || a, Ze = N || p, Ct(t, e), Ze = N, In = w, zt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || p || In || Ze || ha(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                p = n = t;
                try {
                  if (r = p.stateNode, a)
                    u = r.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    f = p.stateNode;
                    var z = p.memoizedProps.style, E = z != null && z.hasOwnProperty("display") ? z.display : null;
                    f.style.display = E == null || typeof E == "boolean" ? "" : ("" + E).trim();
                  }
                } catch (X) {
                  Ae(p, p.return, X);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                p = t;
                try {
                  p.stateNode.nodeValue = a ? "" : p.memoizedProps;
                } catch (X) {
                  Ae(p, p.return, X);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                p = t;
                try {
                  var k = p.stateNode;
                  a ? Up(k, !0) : Up(p.stateNode, !1);
                } catch (X) {
                  Ae(p, p.return, X);
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
        Ct(t, e), zt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, io(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ct(t, e), zt(e);
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Bd(l)) {
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
            n.flags & 32 && (I(u, ""), n.flags &= -33);
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
      } catch (N) {
        Ae(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Id(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Id(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Pn(e, t) {
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
  function Kn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, r = t, u = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Kn(
            a,
            r,
            n
          ), Ir(4, r);
          break;
        case 1:
          if (Kn(
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
                  kf(p[a], f);
            } catch (w) {
              Ae(l, l.return, w);
            }
          }
          n && u & 64 && Ld(r), $r(r, r.return);
          break;
        case 27:
          Hd(r);
        case 26:
        case 5:
          Kn(
            a,
            r,
            n
          ), n && l === null && u & 4 && jd(r), $r(r, r.return);
          break;
        case 12:
          Kn(
            a,
            r,
            n
          );
          break;
        case 31:
          Kn(
            a,
            r,
            n
          ), n && u & 4 && Fd(a, r);
          break;
        case 13:
          Kn(
            a,
            r,
            n
          ), n && u & 4 && Xd(a, r);
          break;
        case 22:
          r.memoizedState === null && Kn(
            a,
            r,
            n
          ), $r(r, r.return);
          break;
        case 30:
          break;
        default:
          Kn(
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
        $d(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function $d(e, t, n, l) {
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
        ), a & 2048 && Ir(9, t);
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
        ) : Pr(e, t) : r._visibility & 2 ? gn(
          e,
          t,
          n,
          l
        ) : (r._visibility |= 2, Ka(
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
  function Ka(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var r = e, u = t, f = n, p = l, w = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ka(
            r,
            u,
            f,
            p,
            a
          ), Ir(8, u);
          break;
        case 23:
          break;
        case 22:
          var N = u.stateNode;
          u.memoizedState !== null ? N._visibility & 2 ? Ka(
            r,
            u,
            f,
            p,
            a
          ) : Pr(
            r,
            u
          ) : (N._visibility |= 2, Ka(
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
          Ka(
            r,
            u,
            f,
            p,
            a
          ), a && w & 2048 && ys(u.alternate, u);
          break;
        default:
          Ka(
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
  function Pr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            Pr(n, l), a & 2048 && gs(
              l.alternate,
              l
            );
            break;
          case 24:
            Pr(n, l), a & 2048 && ys(l.alternate, l);
            break;
          default:
            Pr(n, l);
        }
        t = t.sibling;
      }
  }
  var Kr = 8192;
  function Za(e, t, n) {
    if (e.subtreeFlags & Kr)
      for (e = e.child; e !== null; )
        Pd(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Pd(e, t, n) {
    switch (e.tag) {
      case 26:
        Za(
          e,
          t,
          n
        ), e.flags & Kr && e.memoizedState !== null && gy(
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
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Kr, Kr = 16777216, Za(
          e,
          t,
          n
        ), Kr = l) : Za(
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
  function Kd(e) {
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
      Kd(e);
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
      Kd(e);
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
  var zg = {
    getCacheForType: function(e) {
      var t = ut($e), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return ut($e).controller.signal;
    }
  }, Dg = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, ze = null, ce = null, de = 0, xe = 0, Vt = null, Al = !1, Wa = !1, bs = !1, Zn = 0, Ve = 0, _l = 0, ga = 0, vs = 0, Yt = 0, Ja = 0, Wr = null, Dt = null, Ss = !1, uo = 0, Jd = 0, so = 1 / 0, co = null, Nl = null, et = 0, Ol = null, er = null, Wn = 0, ws = 0, Ts = null, ep = null, Jr = 0, Es = null;
  function Ft() {
    return (Te & 2) !== 0 && de !== 0 ? de & -de : R.T !== null ? Os() : sl();
  }
  function tp() {
    if (Yt === 0)
      if ((de & 536870912) === 0 || he) {
        var e = Kl;
        Kl <<= 1, (Kl & 3932160) === 0 && (Kl = 262144), Yt = e;
      } else Yt = 536870912;
    return e = qt.current, e !== null && (e.flags |= 32), Yt;
  }
  function Rt(e, t, n) {
    (e === ze && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (tr(e, 0), Cl(
      e,
      de,
      Yt,
      !1
    )), Ln(e, n), ((Te & 2) === 0 || e !== ze) && (e === ze && ((Te & 2) === 0 && (ga |= n), Ve === 4 && Cl(
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
        Wa && !l && Cl(e, t, 0, !1);
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
          tr(e, 0), Cl(e, t, 0, !0);
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
              Cl(
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
            if (Cl(
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
  function lp(e, t, n, l, a, r, u, f, p, w, N, z, E, k) {
    if (e.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: it
      }, Pd(
        t,
        r,
        z
      );
      var X = (r & 62914560) === r ? uo - Ye() : (r & 4194048) === r ? Jd - Ye() : 0;
      if (X = yy(
        z,
        X
      ), X !== null) {
        Wn = r, e.cancelPendingCommit = X(
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
            N,
            z,
            null,
            E,
            k
          )
        ), Cl(e, r, u, !w);
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
            if (!Bt(r(), a)) return !1;
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
  function Cl(e, t, n, l) {
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
  function ks() {
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
    n !== -1 && (e.timeoutHandle = -1, Jg(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Wn = 0, ks(), ze = e, ce = n = Hn(e.current, null), de = t, xe = 0, Vt = null, Al = !1, Wa = Sn(e, t), bs = !1, Ja = Yt = vs = ga = _l = Ve = 0, Dt = Wr = null, Ss = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - rt(l), r = 1 << a;
        t |= e[a], l &= ~r;
      }
    return Zn = t, Di(), n;
  }
  function ap(e, t) {
    le = null, R.H = Fr, t === Fa || t === qi ? (t = Sf(), xe = 3) : t === Nu ? (t = Sf(), xe = 4) : xe = t === ns ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, ce === null && (Ve = 1, eo(
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
    return R.A = zg, e;
  }
  function po() {
    Ve = 4, Al || (de & 4194048) !== de && qt.current !== null || (Wa = !0), (_l & 134217727) === 0 && (ga & 134217727) === 0 || ze === null || Cl(
      ze,
      de,
      Yt,
      !1
    );
  }
  function xs(e, t, n) {
    var l = Te;
    Te |= 2;
    var a = ip(), r = op();
    (ze !== e || de !== t) && (co = null, tr(e, t)), t = !1;
    var u = Ve;
    e: do
      try {
        if (xe !== 0 && ce !== null) {
          var f = ce, p = Vt;
          switch (xe) {
            case 8:
              ks(), u = 6;
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
      } catch (N) {
        ap(e, N);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = oa = null, Te = l, R.H = a, R.A = r, ce === null && (ze = null, de = 0, Di()), u;
  }
  function Mg() {
    for (; ce !== null; ) up(ce);
  }
  function Lg(e, t) {
    var n = Te;
    Te |= 2;
    var l = ip(), a = op();
    ze !== e || de !== t ? (co = null, so = Ye() + 500, tr(e, t)) : Wa = Sn(
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
                xe !== 2 && xe !== 9 || ze !== e || (xe = 7), _n(e);
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
                  if (u ? $p(u) : f.stateNode.complete) {
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
              ks(), Ve = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Ug();
        break;
      } catch (N) {
        ap(e, N);
      }
    while (!0);
    return Gn = oa = null, R.H = l, R.A = a, Te = n, ce !== null ? 0 : (ze = null, de = 0, Di(), Ve);
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
      if (kg(
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
      var n = Ng(e.alternate, e);
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
      if (r = t.lanes | t.childLanes, r |= pu, $o(
        e,
        n,
        r,
        u,
        f,
        p
      ), e === ze && (ce = ze = null, de = 0), er = t, Ol = e, Wn = n, ws = r, Ts = a, ep = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, qg(al, function() {
        return gp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = R.T, R.T = null, a = B.p, B.p = 2, u = Te, Te |= 4;
        try {
          Og(e, t, n);
        } finally {
          Te = u, B.p = a, R.T = l;
        }
      }
      et = 1, dp(), pp(), mp();
    }
  }
  function dp() {
    if (et === 1) {
      et = 0;
      var e = Ol, t = er, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = R.T, R.T = null;
        var l = B.p;
        B.p = 2;
        var a = Te;
        Te |= 4;
        try {
          Qd(t, e);
          var r = js, u = Zc(e.containerInfo), f = r.focusedElem, p = r.selectionRange;
          if (u !== f && f && f.ownerDocument && Kc(
            f.ownerDocument.documentElement,
            f
          )) {
            if (p !== null && uu(f)) {
              var w = p.start, N = p.end;
              if (N === void 0 && (N = w), "selectionStart" in f)
                f.selectionStart = w, f.selectionEnd = Math.min(
                  N,
                  f.value.length
                );
              else {
                var z = f.ownerDocument || document, E = z && z.defaultView || window;
                if (E.getSelection) {
                  var k = E.getSelection(), X = f.textContent.length, Z = Math.min(p.start, X), Ce = p.end === void 0 ? Z : Math.min(p.end, X);
                  !k.extend && Z > Ce && (u = Ce, Ce = Z, Z = u);
                  var v = Pc(
                    f,
                    Z
                  ), y = Pc(
                    f,
                    Ce
                  );
                  if (v && y && (k.rangeCount !== 1 || k.anchorNode !== v.node || k.anchorOffset !== v.offset || k.focusNode !== y.node || k.focusOffset !== y.offset)) {
                    var S = z.createRange();
                    S.setStart(v.node, v.offset), k.removeAllRanges(), Z > Ce ? (k.addRange(S), k.extend(y.node, y.offset)) : (S.setEnd(y.node, y.offset), k.addRange(S));
                  }
                }
              }
            }
            for (z = [], k = f; k = k.parentNode; )
              k.nodeType === 1 && z.push({
                element: k,
                left: k.scrollLeft,
                top: k.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < z.length; f++) {
              var O = z[f];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          _o = !!Us, js = Us = null;
        } finally {
          Te = a, B.p = l, R.T = n;
        }
      }
      e.current = t, et = 2;
    }
  }
  function pp() {
    if (et === 2) {
      et = 0;
      var e = Ol, t = er, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = R.T, R.T = null;
        var l = B.p;
        B.p = 2;
        var a = Te;
        Te |= 4;
        try {
          Gd(e, t.alternate, t);
        } finally {
          Te = a, B.p = l, R.T = n;
        }
      }
      et = 3;
    }
  }
  function mp() {
    if (et === 4 || et === 3) {
      et = 0, Il();
      var e = Ol, t = er, n = Wn, l = ep;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? et = 5 : (et = 0, er = Ol = null, hp(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Nl = null), gr(n), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function")
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
        t = R.T, a = B.p, B.p = 2, R.T = null;
        try {
          for (var r = e.onRecoverableError, u = 0; u < l.length; u++) {
            var f = l[u];
            r(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          R.T = t, B.p = a;
        }
      }
      (Wn & 3) !== 0 && ho(), _n(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === Es ? Jr++ : (Jr = 0, Es = e) : Jr = 0, ei(0);
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
    var e = Ol, t = ws;
    ws = 0;
    var n = gr(Wn), l = R.T, a = B.p;
    try {
      B.p = 32 > n ? 32 : n, R.T = null, n = Ts, Ts = null;
      var r = Ol, u = Wn;
      if (et = 0, er = Ol = null, Wn = 0, (Te & 6) !== 0) throw Error(c(331));
      var f = Te;
      if (Te |= 4, Zd(r.current), $d(
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
      B.p = a, R.T = l, hp(e, t);
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Nl === null || !Nl.has(l))) {
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
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ze === e && (de & n) === n && (Ve === 4 || Ve === 3 && (de & 62914560) === de && 300 > Ye() - uo ? (Te & 2) === 0 && tr(e, 0) : vs |= n, Ja === de && (Ja = 0)), _n(e);
  }
  function bp(e, t) {
    t === 0 && (t = Mn()), e = aa(e, t), e !== null && (Ln(e, t), _n(e));
  }
  function Bg(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), bp(e, n);
  }
  function Hg(e, t) {
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
  var go = null, lr = null, _s = !1, yo = !1, Ns = !1, zl = 0;
  function _n(e) {
    e !== lr && e.next === null && (lr === null ? go = lr = e : lr = lr.next = e), yo = !0, _s || (_s = !0, Vg());
  }
  function ei(e, t) {
    if (!Ns && yo) {
      Ns = !0;
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
              l === ze ? r : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (r & 3) === 0 || Sn(l, r) || (n = !0, Tp(l, r));
          l = l.next;
        }
      while (n);
      Ns = !1;
    }
  }
  function Gg() {
    vp();
  }
  function vp() {
    yo = _s = !1;
    var e = 0;
    zl !== 0 && Wg() && (e = zl);
    for (var t = Ye(), n = null, l = go; l !== null; ) {
      var a = l.next, r = Sp(l, t);
      r === 0 ? (l.next = null, n === null ? go = a : n.next = a, a === null && (lr = n)) : (n = l, (e !== 0 || (r & 3) !== 0) && (yo = !0)), l = a;
    }
    et !== 0 && et !== 5 || ei(e), zl !== 0 && (zl = 0);
  }
  function Sp(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
      var u = 31 - rt(r), f = 1 << u, p = a[u];
      p === -1 ? ((f & n) === 0 || (f & l) !== 0) && (a[u] = Pt(f, t)) : p <= t && (e.expiredLanes |= f), r &= ~f;
    }
    if (t = ze, n = de, n = Rn(
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
          n = Ea;
          break;
        case 32:
          n = al;
          break;
        case 268435456:
          n = $l;
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
      e === ze ? l : 0,
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
  function Os() {
    if (zl === 0) {
      var e = Va;
      e === 0 && (e = Pl, Pl <<= 1, (Pl & 261888) === 0 && (Pl = 256)), zl = e;
    }
    return zl;
  }
  function Ep(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _t("" + e);
  }
  function kp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Yg(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var r = Ep(
        (a[Fe] || null).action
      ), u = l.submitter;
      u && (t = (t = u[Fe] || null) ? Ep(t.formAction) : u.getAttribute("formAction"), t !== null && (r = t, u = null));
      var f = new Ni(
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
                if (zl !== 0) {
                  var p = u ? kp(a, u) : new FormData(a);
                  Pu(
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
                typeof r == "function" && (f.preventDefault(), p = u ? kp(a, u) : new FormData(a), Pu(
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
  for (var Cs = 0; Cs < du.length; Cs++) {
    var zs = du[Cs], Fg = zs.toLowerCase(), Xg = zs[0].toUpperCase() + zs.slice(1);
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
            } catch (N) {
              zi(N);
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
            } catch (N) {
              zi(N);
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
        a = $s;
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
    Cc(function() {
      var w = r, N = Zo(n), z = [];
      e: {
        var E = af.get(e);
        if (E !== void 0) {
          var k = Ni, X = e;
          switch (e) {
            case "keypress":
              if (Ai(n) === 0) break e;
            case "keydown":
            case "keyup":
              k = Hh;
              break;
            case "focusin":
              X = "focus", k = lu;
              break;
            case "focusout":
              X = "blur", k = lu;
              break;
            case "beforeblur":
            case "afterblur":
              k = lu;
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
              k = Rc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = _h;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = Vh;
              break;
            case ef:
            case tf:
            case nf:
              k = Ch;
              break;
            case lf:
              k = Fh;
              break;
            case "scroll":
            case "scrollend":
              k = xh;
              break;
            case "wheel":
              k = Qh;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = Dh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = Lc;
              break;
            case "toggle":
            case "beforetoggle":
              k = $h;
          }
          var Z = (t & 4) !== 0, Ce = !Z && (e === "scroll" || e === "scrollend"), v = Z ? E !== null ? E + "Capture" : null : E;
          Z = [];
          for (var y = w, S; y !== null; ) {
            var O = y;
            if (S = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || S === null || v === null || (O = Er(y, v), O != null && Z.push(
              ni(y, O, S)
            )), Ce) break;
            y = y.return;
          }
          0 < Z.length && (E = new k(
            E,
            X,
            null,
            n,
            N
          ), z.push({ event: E, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (E = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", E && n !== Ko && (X = n.relatedTarget || n.fromElement) && (fl(X) || X[cl]))
            break e;
          if ((k || E) && (E = N.window === N ? N : (E = N.ownerDocument) ? E.defaultView || E.parentWindow : window, k ? (X = n.relatedTarget || n.toElement, k = w, X = X ? fl(X) : null, X !== null && (Ce = T(X), Z = X.tag, X !== Ce || Z !== 5 && Z !== 27 && Z !== 6) && (X = null)) : (k = null, X = w), k !== X)) {
            if (Z = Rc, O = "onMouseLeave", v = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (Z = Lc, O = "onPointerLeave", v = "onPointerEnter", y = "pointer"), Ce = k == null ? E : Mt(k), S = X == null ? E : Mt(X), E = new Z(
              O,
              y + "leave",
              k,
              n,
              N
            ), E.target = Ce, E.relatedTarget = S, O = null, fl(N) === w && (Z = new Z(
              v,
              y + "enter",
              X,
              n,
              N
            ), Z.target = S, Z.relatedTarget = Ce, O = Z), Ce = O, k && X)
              t: {
                for (Z = Ig, v = k, y = X, S = 0, O = v; O; O = Z(O))
                  S++;
                O = 0;
                for (var P = y; P; P = Z(P))
                  O++;
                for (; 0 < S - O; )
                  v = Z(v), S--;
                for (; 0 < O - S; )
                  y = Z(y), O--;
                for (; S--; ) {
                  if (v === y || y !== null && v === y.alternate) {
                    Z = v;
                    break t;
                  }
                  v = Z(v), y = Z(y);
                }
                Z = null;
              }
            else Z = null;
            k !== null && _p(
              z,
              E,
              k,
              Z,
              !1
            ), X !== null && Ce !== null && _p(
              z,
              Ce,
              X,
              Z,
              !0
            );
          }
        }
        e: {
          if (E = w ? Mt(w) : window, k = E.nodeName && E.nodeName.toLowerCase(), k === "select" || k === "input" && E.type === "file")
            var ve = Yc;
          else if (Gc(E))
            if (Fc)
              ve = ag;
            else {
              ve = ng;
              var Q = tg;
            }
          else
            k = E.nodeName, !k || k.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? w && lt(w.elementType) && (ve = Yc) : ve = lg;
          if (ve && (ve = ve(e, w))) {
            Vc(
              z,
              ve,
              n,
              N
            );
            break e;
          }
          Q && Q(e, E, w), e === "focusout" && w && E.type === "number" && w.memoizedProps.value != null && b(E, "number", E.value);
        }
        switch (Q = w ? Mt(w) : window, e) {
          case "focusin":
            (Gc(Q) || Q.contentEditable === "true") && (Ma = Q, su = w, zr = null);
            break;
          case "focusout":
            zr = su = Ma = null;
            break;
          case "mousedown":
            cu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            cu = !1, Wc(z, n, N);
            break;
          case "selectionchange":
            if (ig) break;
          case "keydown":
          case "keyup":
            Wc(z, n, N);
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
          Ra ? Hc(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (Uc && n.locale !== "ko" && (Ra || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Ra && (ae = zc()) : (hl = N, eu = "value" in hl ? hl.value : hl.textContent, Ra = !0)), Q = vo(w, pe), 0 < Q.length && (pe = new Mc(
          pe,
          e,
          null,
          n,
          N
        ), z.push({ event: pe, listeners: Q }), ae ? pe.data = ae : (ae = qc(n), ae !== null && (pe.data = ae)))), (ae = Kh ? Zh(e, n) : Wh(e, n)) && (pe = vo(w, "onBeforeInput"), 0 < pe.length && (Q = new Mc(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          N
        ), z.push({
          event: Q,
          listeners: pe
        }), Q.data = ae)), Yg(
          z,
          e,
          w,
          n,
          N
        );
      }
      xp(z, t);
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
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || r === null || (a = Er(e, n), a != null && l.unshift(
        ni(e, a, r)
      ), a = Er(e, t), a != null && l.push(
        ni(e, a, r)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Ig(e) {
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
      f !== 5 && f !== 26 && f !== 27 || w === null || (p = w, a ? (w = Er(n, r), w != null && u.unshift(
        ni(n, w, p)
      )) : a || (w = Er(n, r), w != null && u.push(
        ni(n, w, p)
      ))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var $g = /\r\n?/g, Pg = /\u0000|\uFFFD/g;
  function Np(e) {
    return (typeof e == "string" ? e : "" + e).replace($g, `
`).replace(Pg, "");
  }
  function Op(e, t) {
    return t = Np(t), Np(e) === t;
  }
  function Oe(e, t, n, l, a, r) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || I(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && I(e, "" + l);
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
          typeof r == "function" && (n === "formAction" ? (t !== "input" && Oe(e, t, "name", a.name, a, null), Oe(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Oe(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Oe(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Oe(e, t, "encType", a.encType, a, null), Oe(e, t, "method", a.method, a, null), Oe(e, t, "target", a.target, a, null)));
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
        fe("beforetoggle", e), fe("toggle", e), En(e, "popover", l);
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
        En(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = bt.get(n) || n, En(e, n, l));
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
        typeof l == "string" ? I(e, l) : (typeof l == "number" || typeof l == "bigint") && I(e, "" + l);
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
        if (!Ei.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), r = e[Fe] || null, r = r != null ? r[n] : null, typeof r == "function" && e.removeEventListener(t, r, a), typeof l == "function")) {
              typeof r != "function" && r !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : En(e, n, l);
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
                  Oe(e, t, r, u, n, null);
              }
          }
        a && Oe(e, t, "srcSet", n.srcSet, n, null), l && Oe(e, t, "src", n.src, n, null);
        return;
      case "input":
        fe("invalid", e);
        var f = r = u = a = null, p = null, w = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var N = n[l];
            if (N != null)
              switch (l) {
                case "name":
                  a = N;
                  break;
                case "type":
                  u = N;
                  break;
                case "checked":
                  p = N;
                  break;
                case "defaultChecked":
                  w = N;
                  break;
                case "value":
                  r = N;
                  break;
                case "defaultValue":
                  f = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Oe(e, t, l, N, n, null);
              }
          }
        Ca(
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
                Oe(e, t, a, f, n, null);
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
                Oe(e, t, u, f, n, null);
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
                Oe(e, t, p, l, n, null);
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
                Oe(e, t, w, l, n, null);
            }
        return;
      default:
        if (lt(t)) {
          for (N in n)
            n.hasOwnProperty(N) && (l = n[N], l !== void 0 && Ls(
              e,
              t,
              N,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (f in n)
      n.hasOwnProperty(f) && (l = n[f], l != null && Oe(e, t, f, l, n, null));
  }
  function Kg(e, t, n, l) {
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
        var a = null, r = null, u = null, f = null, p = null, w = null, N = null;
        for (k in n) {
          var z = n[k];
          if (n.hasOwnProperty(k) && z != null)
            switch (k) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                p = z;
              default:
                l.hasOwnProperty(k) || Oe(e, t, k, null, l, z);
            }
        }
        for (var E in l) {
          var k = l[E];
          if (z = n[E], l.hasOwnProperty(E) && (k != null || z != null))
            switch (E) {
              case "type":
                r = k;
                break;
              case "name":
                a = k;
                break;
              case "checked":
                w = k;
                break;
              case "defaultChecked":
                N = k;
                break;
              case "value":
                u = k;
                break;
              case "defaultValue":
                f = k;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null)
                  throw Error(c(137, t));
                break;
              default:
                k !== z && Oe(
                  e,
                  t,
                  E,
                  k,
                  l,
                  z
                );
            }
        }
        ml(
          e,
          u,
          f,
          p,
          w,
          N,
          r,
          a
        );
        return;
      case "select":
        k = u = f = E = null;
        for (r in n)
          if (p = n[r], n.hasOwnProperty(r) && p != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                k = p;
              default:
                l.hasOwnProperty(r) || Oe(
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
                E = r;
                break;
              case "defaultValue":
                f = r;
                break;
              case "multiple":
                u = r;
              default:
                r !== p && Oe(
                  e,
                  t,
                  a,
                  r,
                  l,
                  p
                );
            }
        t = f, n = u, l = k, E != null ? g(e, !!n, E, !1) : !!l != !!n && (t != null ? g(e, !!n, t, !0) : g(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        k = E = null;
        for (f in n)
          if (a = n[f], n.hasOwnProperty(f) && a != null && !l.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                Oe(e, t, f, null, l, a);
            }
        for (u in l)
          if (a = l[u], r = n[u], l.hasOwnProperty(u) && (a != null || r != null))
            switch (u) {
              case "value":
                E = a;
                break;
              case "defaultValue":
                k = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(c(91));
                break;
              default:
                a !== r && Oe(e, t, u, a, l, r);
            }
        _(e, E, k);
        return;
      case "option":
        for (var X in n)
          if (E = n[X], n.hasOwnProperty(X) && E != null && !l.hasOwnProperty(X))
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
                  l,
                  E
                );
            }
        for (p in l)
          if (E = l[p], k = n[p], l.hasOwnProperty(p) && E !== k && (E != null || k != null))
            switch (p) {
              case "selected":
                e.selected = E && typeof E != "function" && typeof E != "symbol";
                break;
              default:
                Oe(
                  e,
                  t,
                  p,
                  E,
                  l,
                  k
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
        for (var Z in n)
          E = n[Z], n.hasOwnProperty(Z) && E != null && !l.hasOwnProperty(Z) && Oe(e, t, Z, null, l, E);
        for (w in l)
          if (E = l[w], k = n[w], l.hasOwnProperty(w) && E !== k && (E != null || k != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(c(137, t));
                break;
              default:
                Oe(
                  e,
                  t,
                  w,
                  E,
                  l,
                  k
                );
            }
        return;
      default:
        if (lt(t)) {
          for (var Ce in n)
            E = n[Ce], n.hasOwnProperty(Ce) && E !== void 0 && !l.hasOwnProperty(Ce) && Ls(
              e,
              t,
              Ce,
              void 0,
              l,
              E
            );
          for (N in l)
            E = l[N], k = n[N], !l.hasOwnProperty(N) || E === k || E === void 0 && k === void 0 || Ls(
              e,
              t,
              N,
              E,
              l,
              k
            );
          return;
        }
    }
    for (var v in n)
      E = n[v], n.hasOwnProperty(v) && E != null && !l.hasOwnProperty(v) && Oe(e, t, v, null, l, E);
    for (z in l)
      E = l[z], k = n[z], !l.hasOwnProperty(z) || E === k || E == null && k == null || Oe(e, t, z, E, l, k);
  }
  function Cp(e) {
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
        if (r && f && Cp(u)) {
          for (u = 0, f = a.responseEnd, l += 1; l < n.length; l++) {
            var p = n[l], w = p.startTime;
            if (w > f) break;
            var N = p.transferSize, z = p.initiatorType;
            N && Cp(z) && (p = p.responseEnd, u += N * (p < f ? 1 : (f - w) / (p - w)));
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
  function zp(e) {
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
  function Bs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Hs = null;
  function Wg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Hs ? !1 : (Hs = e, !0) : (Hs = null, !1);
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
  function Bp(e) {
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
  function Hp(e) {
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
  var Jn = B.d;
  B.d = {
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
          Me(p), ct(p, "link", e), p._p = new Promise(function(w, N) {
            p.onload = w, p.onerror = N;
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
  var Eo = null;
  function Qp(e, t, n) {
    if (Eo === null) {
      var l = /* @__PURE__ */ new Map(), a = Eo = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = Eo, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
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
  function Ip(e, t, n) {
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
  function $p(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function gy(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = rr(l.href), r = t.querySelector(
          ai(a)
        );
        if (r) {
          t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ko.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = r, Me(r);
          return;
        }
        r = t.ownerDocument || t, l = Fp(l), (a = nn.get(a)) && Fs(l, a), r = r.createElement("link"), Me(r);
        var u = r;
        u._p = new Promise(function(f, p) {
          u.onload = f, u.onerror = p;
        }), ct(r, "link", l), n.instance = r;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = ko.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
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
  function ko() {
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, xo = /* @__PURE__ */ new Map(), t.forEach(by, e), xo = null, ko.call(e));
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
      a = t.instance, u = a.getAttribute("data-precedence"), r = n.get(u) || l, r === l && n.set(null, a), n.set(u, a), this.count++, l = ko.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), r ? r.parentNode.insertBefore(a, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ii = {
    $$typeof: ee,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0
  };
  function vy(e, t, n, l, a, r, u, f, p) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Zl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.hiddenUpdates = Zl(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = r, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Pp(e, t, n, l, a, r, u, f, p, w, N, z) {
    return e = new vy(
      e,
      t,
      n,
      u,
      p,
      w,
      N,
      z,
      f
    ), t = 1, r === !0 && (t |= 24), r = Ht(3, null, null, t), e.current = r, r.stateNode = e, t = xu(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Ou(r), e;
  }
  function Kp(e) {
    return e ? (e = ja, e) : ja;
  }
  function Zp(e, t, n, l, a, r) {
    a = Kp(a), l.context === null ? l.context = a : l.pendingContext = a, l = wl(t), l.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (l.callback = r), n = Tl(e, l, t), n !== null && (Rt(n, e, t), Br(n, e, t));
  }
  function Wp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Is(e, t) {
    Wp(e, t), (e = e.alternate) && Wp(e, t);
  }
  function Jp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = aa(e, 67108864);
      t !== null && Rt(t, e, 67108864), Is(e, 67108864);
    }
  }
  function em(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ft();
      t = Wl(t);
      var n = aa(e, t);
      n !== null && Rt(n, e, t), Is(e, t);
    }
  }
  var _o = !0;
  function Sy(e, t, n, l) {
    var a = R.T;
    R.T = null;
    var r = B.p;
    try {
      B.p = 2, $s(e, t, n, l);
    } finally {
      B.p = r, R.T = a;
    }
  }
  function wy(e, t, n, l) {
    var a = R.T;
    R.T = null;
    var r = B.p;
    try {
      B.p = 8, $s(e, t, n, l);
    } finally {
      B.p = r, R.T = a;
    }
  }
  function $s(e, t, n, l) {
    if (_o) {
      var a = Ps(l);
      if (a === null)
        Ms(
          e,
          t,
          l,
          No,
          n
        ), nm(e, l);
      else if (Ey(
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
                f = aa(r, 2), f !== null && Rt(f, r, 2), fo(), Is(r, 2);
            }
          if (r = Ps(l), r === null && Ms(
            e,
            t,
            l,
            No,
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
  function Ps(e) {
    return e = Zo(e), Ks(e);
  }
  var No = null;
  function Ks(e) {
    if (No = null, e = fl(e), e !== null) {
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
    return No = e, null;
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
          case Ea:
            return 8;
          case al:
          case rl:
            return 32;
          case $l:
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
  function Ey(e, t, n, l, a) {
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
  function Oo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ps(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Ko = l, n.target.dispatchEvent(l), Ko = null;
      } else
        return t = dl(n), t !== null && Jp(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function am(e, t, n) {
    Oo(e) && n.delete(t);
  }
  function ky() {
    Zs = !1, Rl !== null && Oo(Rl) && (Rl = null), Ml !== null && Oo(Ml) && (Ml = null), Ll !== null && Oo(Ll) && (Ll = null), oi.forEach(am), ui.forEach(am);
  }
  function Co(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zs || (Zs = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      ky
    )));
  }
  var zo = null;
  function rm(e) {
    zo !== e && (zo = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        zo === e && (zo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (Ks(l || n) === null)
              continue;
            break;
          }
          var r = dl(n);
          r !== null && (e.splice(t, 3), t -= 3, Pu(
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
      return Co(p, e);
    }
    Rl !== null && Co(Rl, e), Ml !== null && Co(Ml, e), Ll !== null && Co(Ll, e), oi.forEach(t), ui.forEach(t);
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
            else if (Ks(a) !== null) continue;
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
  B.findDOMNode = function(e) {
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
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Pp(
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
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (p = n.formState)), t = Pp(
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
    ), t.context = Kp(null), n = t.current, l = Ft(), l = Wl(l), a = wl(l), a.callback = null, Tl(n, a, l), n = l, t.current.lanes = n, Ln(t, n), _n(t), e[cl] = t.current, Rs(e), new Do(t);
  }, vm.version = "19.2.6", vm;
}
var Gv;
function C3() {
  if (Gv) return c0.exports;
  Gv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), c0.exports = O3(), c0.exports;
}
var z3 = C3();
const ES = (i, o, s) => {
  z3.createRoot(s).render(kt.createElement(i, o));
}, M3 = ({ targetSelector: i, props: o }) => {
  ES(wS, o, document.querySelector(i));
}, L3 = ({ targetSelector: i, props: o }) => {
  ES(TS, o, document.querySelector(i));
};
export {
  wS as CardsGridEvents,
  TS as CardsListEvents,
  M3 as initCardsGridEventsComponent,
  L3 as initCardsListEventsComponent
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
